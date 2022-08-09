---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/throw
original_slug: Web/JavaScript/Referencia/Sentencias/throw
---
<div>{{jsSidebar("Statements")}}</div>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>Lanza una excepcion definida por el usuario.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">throw <em>expresion</em>;</pre>

<dl>
 <dt><code>expresion</code></dt>
 <dd>Expresión a lanzar.</dd>
</dl>

<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>

<p>Utilice la sentencia <code>throw</code> para lanzar una excepción. Cuando lanza una excepción, <code>expresion</code> especifica el valor de la excepción. Cada uno de los siguientes ejemplos lanza una excepción:</p>

<pre class="brush: js">throw "Error2"; // genera una excepción con un valor cadena
throw 42; // genera una excepción con un valor 42
throw true; // genera una excepción con un valor true</pre>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo:_Lanzar_un_objeto" name="Ejemplo:_Lanzar_un_objeto">Ejemplo: Lanzar un objeto</h3>

<p>Puede especificar un objeto cuando lanza una excepción. Puede entonces referenciar las propiedades del objeto en el bloque <code>catch</code>. El siguiente ejemplo crea un objeto <code>miExcepcionUsuario</code> del tipo <code>ExceptionUsuario</code> y la utiliza usándola en una sentencia <code>throw</code>.</p>

<pre class="brush: js">function ExceptionUsuario(mensaje) {
   this.mensaje = mensaje;
   this.nombre = "ExceptionUsuario";
}

function getNombreMes(mes) {
   mes = mes - 1; // Ajustar el número de mes al índice del arreglo (1 = Ene, 12 = Dic)
   var meses = new Array("Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul",
      "Ago", "Sep", "Oct", "Nov", "Dic");
   if (meses[mes] != null) {
      return meses[mes];
   } else {
      miExcepcionUsuario = new ExceptionUsuario("NumeroMesNoValido");
      throw miExcepcionUsuario;
   }
}

try {
   // sentencias para try
   nombreMes = getNombreMes(miMes);
} catch (excepcion) {
   nombreMes = "desconocido";
   registrarMisErrores(excepcion.mensaje, excepcion.nombre); // pasa el objeto exception al manejador de errores
}
</pre>

<h3 id="Ejemplo:_Otro_ejemplo_sobre_lanzar_un_objeto" name="Ejemplo:_Otro_ejemplo_sobre_lanzar_un_objeto">Ejemplo: Otro ejemplo sobre lanzar un objeto</h3>

<p>El siguiente ejemplo comprueba una cadena de entrada para un código postal de EE.UU. Si el código postal utiliza un formato no válido, la sentencia throw lanza una excepción creando un objeto de tipo <code>ExcepcionFormatoCodigoPostal</code>.</p>

<pre class="brush: js">/*
 * Creates a ZipCode object.
 *
 * Accepted formats for a zip code are:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * If the argument passed to the ZipCode constructor does not
 * conform to one of these patterns, an exception is thrown.
 */

function ZipCode(zip) {
   zip = new String(zip);
   pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
   if (pattern.test(zip)) {
      // zip code value will be the first match in the string
      this.value = zip.match(pattern)[0];
      this.valueOf = function() {
         return this.value
      };
      this.toString = function() {
         return String(this.value)
      };
   } else {
      throw new ExcepcionFormatoCodigoPostal(zip);
   }
}

function ExcepcionFormatoCodigoPostal(valor) {
   this.valor = valor;
   this.mensaje = "no conforme con el formato esperado de código postal";
   this.toString = function() {
      return this.valor + this.mensaje
   };
}

/*
 * Esto podría estar en un script que valida los datos de una dirección de EE.UU.
 */

var CODIGOPOSTAL_NOVALIDO = -1;
var CODIGOPOSTAL_DESCONOCIDO_ERROR = -2;

function verificarCodigoPostal(codigo) {
   try {
      codigo = new CodigoPostal(codigo);
   } catch (excepcion) {
      if (excepcion instanceof ExcepcionFormatoCodigoPostal) {
         return CODIGOPOSTAL_NOVALIDO;
      } else {
         return CODIGOPOSTAL_DESCONOCIDO_ERROR;
      }
   }
   return codigo;
}

a = verificarCodigoPostal(95060);         // devuelve 95060
b = verificarCodigoPostal(9560;)          // devuelve -1
c = verificarCodigoPostal("a");           // devuelve -1
d = verificarCodigoPostal("95060");       // devuelve 95060
e = verificarCodigoPostal("95060 1234");  // devuelve 95060 1234
</pre>

<h3 id="Ejemplo:_Relanzar_una_excepci.C3.B3n" name="Ejemplo:_Relanzar_una_excepci.C3.B3n">Ejemplo: Relanzar una excepción</h3>

<p>Puede usar <code>throw</code> para volver a lanzar una excepción después de cogerla. El siguiente ejemplo coge una excepción con un valor numérico y la vuelve a lanzar si el valor es superior a 50. La excepción relanzada propaga hacia arriba la función adjunta o a un nivel superior para que el usuario pueda verla.</p>

<pre class="eval">try {
   throw n; // lanza una excepción con un valor numérico
} catch (excepcion) {
   if (excepcion &lt;= 50) {
      // sentencias para manejar la excepción 1-50
   } else {
      // no se puede manejar esta excepción, así que se vuelve a lanzar
      throw excepcion;
   }
}
</pre>

<h2 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h2>

<ul>
 <li>{{jsxref("Sentencias/try...catch", "try...catch")}}</li>
</ul>
