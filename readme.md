# VGG19-MobileNet-js

Web app to run VGG19 and MobileNet models on client and server side.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

You will require npm to install the packages and node to get the server running.

Node can be downloaded from : [nodejs.org](https://nodejs.org/en/)

You will also require the model architecture and weights of VGG19 and MobileNet.

The following python code gets that done :

```python
from keras.applications.vgg19 import VGG19
from keras.applications.mobilenet import MobileNet

model1 = VGG19()
model2 = MobileNet()

import tensorflowjs as tfjs

tfjs.converters.save_keras_model(model1, '/Users/.../Project/public/vgg19')
tfjs.converters.save_keras_model(model2, '/Users/.../Project/public/mobilenet')

```
You will need keras, tensorflow and tensorflowjs to run the above code which can be download in a conda environment using :

```bash
$ conda install keras
$ conda install tensorflow
$ conda install tensorflowjs
```

### Installing

All the requirements are listed in 'dependencies' of package.json file.

To install them go to the root directory of project in the terminal and run :

```
$ npm install
```

This will install all the required packages i.e. tensorflow, bower, express, pug, morgan, nodemon

Install bootstrap and jquery using bower in the public directory (.bowerrc decides which directory the components will be installed.

In the terminal run :

```
$ bower install bootstrap
$ bower install jquery
```

Go to the terminal and run :

```
$ npm run dev
```

This will start the server at localhost on port 3000 (This can be changed in bin/.www file).

Go to http://127.0.0.1:3000/ to access the homepage which should look like [this](https://raw.githubusercontent.com/ayushtiwari/VGG19-MobileNet-js/master/screenshots/Screenshot%202019-07-10%20at%202.06.01%20PM.png).




## Built With

* [Node](https://nodejs.org) - Server side javascripting
* [Express](http://expressjs.com) - Server side framework
* [Bootstrap](http://getbootstrap.com) - Frontend framework
* [Pug](https://pugjs.org/) - Templating Engine
* [jQuery](http://jquery.com) - JavaScript Framework for client side behaviour
* [tensorflowjs](https://www.tensorflow.org/js) - For running the model on server and browser
* [keras](http://keras.io/) - Getting VGG19 and MobileNet architecture and weights


## Authors

* **Ayush Tiwari**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
