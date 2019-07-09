function preprocessVGG19(tensor) {
    return tensor
        .sub(tf.tensor1d([123.68, 116.779, 103.939]))
        .reverse()
        .expandDims(0);
}

function preprocessMobileNet(tensor) {
    return tensor
        .sub(127.5)
        .div(127.5)
        .expandDims(0);
}


$(function() {
    console.log(IMAGENET_CLASSES);

    let model;
    let model_name = $('#js-variables .model').text();

    let top5 = [];

    (async function () {
        if(model_name=='VGG19') {
            model = await tf.loadLayersModel('http://127.0.0.1:3000/VGG19/model.json');
        } else  {
            model = await tf.loadLayersModel('http://127.0.0.1:3000/mobilenet/model.json');
        }
        $('#model-loading').hide();
    })();

    $('form').on('submit', async function (e) {

        e.preventDefault();

        $('#result .card-body').hide();


        let image = $('#blah').get(0);

        let tensor = tf.browser.fromPixels(image)
            .resizeNearestNeighbor([224, 224])
            .toFloat();

        let processedTensor =  model_name=='MobileNet'? preprocessMobileNet(tensor): preprocessVGG19(tensor);

        let predictions;
        $('#loading').attr('class', 'row');
        console.log($('#loading').attr('class'));

        predictions = await model.predict(processedTensor).data();

        top5 = Array.from(predictions)
            .map(function (p, i) {
                return {
                    probability: p.toFixed(4) * 100,
                    className: IMAGENET_CLASSES[i]
                };
            })
            .sort(function (a, b) {
                return b.probability - a.probability;
            }).slice(0, 5);

        $('#result .card-body').show();
        $('#pred').text(top5[0].className);
        $('#confidence').text(top5[0].probability + '%');

        let values= top5.map((p, i) => p.probability);
        let labels= top5.map((p, i) => p.className);

        labels.push('Others');
        values.push(100-values.reduce((a, b) => a + b, 0));

        console.log(labels, values);

        var data = [{
            values: values,
            labels: labels,
            type: 'pie'
        }];

        Plotly.newPlot('plotDiv', data, {}, {showSendToCloud:true});

        console.log($('#loading').attr('class'));
        $('#loading').attr('class', 'row d-none');
        console.log($('#loading').attr('class'));
        console.log('b');

    });



});