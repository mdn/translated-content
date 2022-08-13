---
title: const
slug: Web/JavaScript/Reference/Statements/const
tags:
  - ECMAScript6
  - Experimental
  - Expérimental(2)
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/const
original_slug: Web/JavaScript/Referencia/Sentencias/const
---
<div>{{jsSidebar("Statements")}}</div>

<h2 id="Resumen">Resumen</h2>

<p>Las variables constantes presentan un <strong>ámbito de bloque </strong><font><font>(</font></font><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/block">block </a>scope<font><font>)</font></font> tal y como lo hacen las variables definidas usando la instrucción <a href="/es/docs/Web/JavaScript/Referencia/Sentencias/let">let</a>, con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación. Las constantes <u>no se pueden redeclarar</u>.</p>

<div class="warning">
<p>La <strong>redeclaración</strong> de la misma variable bajo un mismo <font><font><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments" rel="noopener">ámbito léxico</a></font></font> terminaría en un error de tipo <code><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/SyntaxError" title="SyntaxError">SyntaxError</a></code>. Esto también es <strong>extensible</strong> si usamos <code>var</code> dentro del <font><font>ámbito léxico</font></font>. Esto nos salvaguarda de redeclarar una variable accidentalmente y que no era posible  solo con <code>var.</code></p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">const <em>varname1 = <em>value1 [</em>, <em>varname2</em> = <em>value2 [</em>, <em>varname3</em> = <em>value3 [</em>, ... [</em>, <em>varnameN</em> = <em>valueN]]]]</em>;</pre>

<dl>
 <dt><code>varnameN</code></dt>
 <dd>Nombre de la constante. Puede ser un identificador legal.</dd>
</dl>

<dl>
 <dt><code>valueN</code></dt>
 <dd>Valor de la constante. Puede ser cualquier expresión legal.</dd>
</dl>

<h2 id="Descripción">Descripción</h2>

<p>Esta declaración crea una constante cuyo alcance puede ser <strong>global o local para el bloque en el que se declara</strong>. Es necesario <strong>inicializar</strong> la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara, lo que tiene sentido, dado que no se puede cambiar posteriormente.</p>

<p>La declaración de una constante crea una referencia de sólo lectura. No significa que el valor que tiene sea inmutable, sino que el identificador de variable no puede ser reasignado, por lo tanto, en el caso de que la asignación a la constante sea un objeto, el objeto sí que puede ser alterado.</p>

<p>Una constante <strong>no puede compartir su nombre</strong> con una función o variable en el mismo ámbito.</p>

<p><font><font>Todas las consideraciones acerca de la " <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let#muerta">zona muerta temporal</a> " se aplican tanto a </font></font><code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code><font><font>y</font></font><code>const</code><font><font>.</font></font></p>

<div class="warning">
<p><code>const</code> <s>es </s><u>fue</u> una <strong>extensión especifica de Mozilla</strong>, no <s>es</s> <u>era</u> soportado en IE, pero <s>tiene</s> <u>tenia</u> soporte parcial por Opera desde la versión 9.0 y por Safari.</p>
</div>

<h2 id="Ejemplos">Ejemplos</h2>

<p>El siguiente ejemplo produce una salida <code>"a es 7."</code></p>

<pre class="brush: js">const a = 7;
document.writeln("a es " + a + ".");
</pre>

<p>Las siguientes instrucciones demuestra como se comporta <code>const</code></p>

<div class="warning">
<p>Las instrucciones deberán ser ordenadas correctamente para conseguir la salida esperada a los ejemplos</p>
</div>

<pre class="brush: js">// NOTA: Las constantes pueden ser declaradas en mayusculas o minusculaas,
//pero por convencion para distinguirlas del resto de variables se escribe todo en mayusculas

// definimos MY_FAV como constante y le damos un valor de 7
const MY_FAV = 7;

// lanzara un error: Unkeught TypeError: Asignación a variable constante.
MY_FAV = 20;

// imprimira 7
console.log('my favorite number is: ' + MY_FAV);

// lanzara un error: SyntaxError: tratando de redeclarar una constante. El identificador 'MY_FAV' ya ha sido declarado
const MY_FAV = 20;

// el nombre MY_FAV esta reservado para la constante anterior, también fallara y lanzara un SyntaxError por la redeclaración
var MY_FAV = 20;

// el nombre MY_FAV esta reservado para la variable anterior, esto también lanzara un SyntaxError por la redeclaración
let MY_FAV = 20;

// es importante tener en cuenta como funciona el alcance de bloque
if (MY_FAV === 7) {
    // esto esta bien y crea una variable MY_FAV de alcance/ambito de bloque
    // (funciona igual de bien con let para declarar un alcance de bloque/ambito de variable no-constante)
    const MY_FAV = 20;

    // MY_FAV ahora es 20
    console.log('my favorite number is ' + MY_FAV);

    // aquín también lanzara un SyntaxError por la redeclaración
    var MY_FAV = 20;
}

// MY_FAV todavia es 7
console.log('my favorite number is ' + MY_FAV);

// lanza error, falta el inicializador en la declaracion de const
const FOO;

// const tambien funciona en objetos
const MY_OBJECT = {'key': 'value'};

// Intentando sobrescribir el objeto nos lanza un error
MY_OBJECT = {'OTHER_KEY': 'value'};

// Sin embargo, los object keys no estan protegidas,
// por lo que la siguiente sentencia se ejecutara sin problema
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() para hacer un objeto inmutable

// Lo mismo se aplica a los arrays
const MY_ARRAY = [];
// es posible empujar elementos en el array
MY_ARRAY.push('A'); // ["A"]
// Sin embargo, asignar un nuevo array a la variable lanza error
MY_ARRAY = ['B']</pre>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Sentencias/var", "var")}}</li>
 <li>{{jsxref("Sentencias/let", "let")}}</li>
 <li><a href="/en/JavaScript/Guide/Values,_Variables,_and_Literals#Constants" title="en/JavaScript/Guide/Values, Variables, and Literals#Constants">Constants in JavaScript Guide</a></li>
</ul>
