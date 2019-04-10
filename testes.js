var testCase = require('nodeunit').testCase;
var VerificaTriangulo = require("./VerificaTriangulo");

module.exports = testCase({
    setUp: function (callback) {
        this.foo = 'bar';
        lado1 = 3;
        lado2 = 3;
        lado3 = 3;
        lado4 = 4;
        lado5 = 5;
        lado6 = 0;
        lado7 = -3;
        lado8 = 6;
        lado9 = 12;       
        callback();
    },
    // Teste p/verificar se os lados formam um triângulo.
    "Forma um Triângulo.": function(test) {
        var triangulo = VerificaTriangulo.FormaTriangulo(lado1, lado2, lado3);        
        test.equal(triangulo, "TRUE");
        test.done();
    },

    // Caso de teste para triangulo escaleno válido
    "Triângulo escaleno válido.": function(test) {        
        var triangulo = VerificaTriangulo.FormaEscaleno(lado3, lado4, lado5);
        test.equal(triangulo, "TRUE");
        test.done();
    },

    // Caso de teste para triangulo isosceles válido
    "Triângulo 01 isósceles válido.": function(test) {
        var triangulo = VerificaTriangulo.FormaIsosceles(lado1, lado2, lado4);
        test.equal(triangulo, "TRUE");
        test.done();
    },

    // Caso de teste para triangulo equilatero válido
    "Triângulo equilatero válido.": function(test) {
        var triangulo = VerificaTriangulo.FormaEquilatero(lado1, lado2, lado3);
        test.equal(triangulo, "TRUE");
        test.done();
    },

    // Caso de teste para triangulo isosceles válido
    "Triângulo 02 isósceles válido.": function(test) {
        var triangulo = VerificaTriangulo.FormaIsosceles(lado4, lado2, lado1);
        test.equal(triangulo, "TRUE");
        test.done();
    },

    // Caso de teste para triangulo isosceles válido
    "Triângulo 03 isósceles válido.": function(test) {
        var triangulo = VerificaTriangulo.FormaIsosceles(lado4, lado1, lado2);
        test.equal(triangulo, "TRUE");
        test.done();
    },

    // Teste p/verificar se os lados formam um triângulo, com valor ZERO
    "Forma um Triângulo com valor ZERO.": function(test) {
        var triangulo = VerificaTriangulo.FormaTriangulo(lado1, lado2, lado6);        
        test.equal(triangulo, "FALSE");
        test.done();
    },

    // Teste p/verificar se os lados formam um triângulo, com valor NEGATIVO
    "Forma um Triângulo com Valor NEGATIVO.": function(test) {
        var triangulo = VerificaTriangulo.FormaTriangulo(lado1, lado2, lado7);        
        test.equal(triangulo, "FALSE");
        test.done();
    },

    // Teste p/verificar se os lados formam um triângulo, com soma igual ao terceiro lado (PERMUTACAO)
    "Forma um Triângulo 01 com soma igual ao terceiro lado (PERMUTACAO).": function(test) {
        var triangulo = VerificaTriangulo.FormaTriangulo(lado1, lado2, lado8);        
        test.equal(triangulo, "FALSE");
        test.done();
    },

    // Teste p/verificar se os lados formam um triângulo, com soma igual ao terceiro lado (PERMUTACAO)
    "Forma um Triângulo 02 com soma igual ao terceiro lado (PERMUTACAO).": function(test) {
        var triangulo = VerificaTriangulo.FormaTriangulo(lado1, lado2, lado8);        
        test.equal(triangulo, "FALSE");
        test.done();
    },

    // Teste p/verificar se os lados formam um triângulo, com soma igual ao terceiro lado (PERMUTACAO)
    "Forma um Triângulo 03 com soma igual ao terceiro lado (PERMUTACAO).": function(test) {
        var triangulo = VerificaTriangulo.FormaTriangulo(lado2, lado1, lado8);        
        test.equal(triangulo, "FALSE");
        test.done();
    },
    
    // Teste p/verificar se os lados formam um triângulo, com soma menor que ao terceiro lado (PERMUTACAO)
    "Forma um Triângulo 01 com soma menor que ao terceiro lado (PERMUTACAO).": function(test) {
        var triangulo = VerificaTriangulo.FormaTriangulo(lado3, lado4, lado9);        
        test.equal(triangulo, "FALSE");
        test.done();
    },

    // Teste p/verificar se os lados formam um triângulo, com soma menor que ao terceiro lado (PERMUTACAO)
    "Forma um Triângulo 02 com soma menor que ao terceiro lado (PERMUTACAO).": function(test) {
        var triangulo = VerificaTriangulo.FormaTriangulo(lado9, lado3, lado5);        
        test.equal(triangulo, "FALSE");
        test.done();
    },

    // Teste p/verificar se os lados formam um triângulo, com soma menor que ao terceiro lado (PERMUTACAO)
    "Forma um Triângulo 03 com soma menor que ao terceiro lado (PERMUTACAO).": function(test) {
        var triangulo = VerificaTriangulo.FormaTriangulo(lado9, lado3, lado4);        
        test.equal(triangulo, "FALSE");
        test.done();
    },

    // Teste p/verificar se os lados formam um triângulo, com todos os lados iguais a ZERO
    "Forma um Triângulo com lados ZERO.": function(test) {
        var triangulo = VerificaTriangulo.FormaTriangulo(lado6, lado6, lado6);        
        test.equal(triangulo, "FALSE");
        test.done();
    }
})