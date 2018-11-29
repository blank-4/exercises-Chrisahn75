var number= 6;
var number2= 8;

function callback (number,number2){
     var result = appelServeur()
     callback(result);
};

function callback (result) {
    console.log(result);
}

callback (number,number2);
