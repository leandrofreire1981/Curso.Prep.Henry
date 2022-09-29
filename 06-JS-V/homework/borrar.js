function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"
  var cadenaInvertida = '';
  String.prototype.reverse = function ()
  {
    for (let i=this.length; i>=0; i--)
    {
      cadenaInvertida=cadenaInvertida + this.charAt(i);
    };
    return cadenaInvertida;
  }
  }

  var cadena='hola';
  console.log('cadena invertida ' + cadena.reverse);