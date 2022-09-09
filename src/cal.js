const mat = require('math.js');
const { validate } = require('validate.js');
const isNumberVal = require('./validate');

const Calculadora = {
    somar(valorA,valorB){
        const validateNumberA = validate({valorA},isNumberVal.isNumber);
        if(validateNumberA !== undefined){
            return 'Error';
        }
        const validateNumberB = validate({valorB},isNumberVal.isNumber);
        if(validateNumberB !== undefined){
            return 'Error';
        }
        var result = valorA+valorB;
        return result;
    },
    subtrair(valorA,valorB){
        const validateNumberA = validate({valorA},isNumberVal.isNumber);
        if(validateNumberA !== undefined){
            return 'Error';
        }
        const validateNumberB = validate({valorB},isNumberVal.isNumber);
        if(validateNumberB !== undefined){
            return 'Error';
        }
        var result = valorA-valorB;
        return result;
    },
    multiplicar(valorA,valorB){
        const validateNumberA = validate({valorA},isNumberVal.isNumber);
        if(validateNumberA !== undefined){
            return 'Error';
        }
        const validateNumberB = validate({valorB},isNumberVal.isNumber);
        if(validateNumberB !== undefined){
            return 'Error';
        }
        var result = valorA*valorB;
        return result;
    },
    dividir(valorA,valorB){
        const validateNumberA = validate({valorA},isNumberVal.isNumber);
        if(validateNumberA !== undefined){
            return 'Error';
        }
        const validateNumberB = validate({valorB},isNumberVal.isNumber);
        if(validateNumberB !== undefined){
            return 'Error';
        }
        var result = valorA/valorB;
        return result;
    },
    elevar(valorA,valorB){
        const validateNumberA = validate({valorA},isNumberVal.isNumber);
        if(validateNumberA !== undefined){
            return 'Error';
        }
        const validateNumberB = validate({valorB},isNumberVal.isNumber);
        if(validateNumberB !== undefined){
            return 'Error';
        }
        var result = mat.pow(valorA,valorB);
        return result;
    }

};
module.exports = Calculadora;