---
title: Control de flujo y manejo de errores
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
tags:
  - Control de flujo
  - Guía
  - JavaScript
  - Lógica
  - Manejo de errores
  - Novato
  - Principiantes
  - Promesas
  - declaraciones
  - l10n:priority
translation_of: Web/JavaScript/Guide/Control_flow_and_error_handling
original_slug: Web/JavaScript/Guide/Control_de_flujo_y_manejo_de_errores
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}</div>

<p class="seoSummary">JavaScript admite un compacto conjunto de declaraciones, específicamente declaraciones de control de flujo, que puedes utilizar para incorporar una gran cantidad de interactividad en tu aplicación. Este capítulo proporciona una descripción de estas declaraciones.</p>

<p>La {{JSxRef("Sentencias", "referencia de JavaScript")}} contiene detalles exhaustivos sobre las declaraciones de este capítulo. El carácter de punto y coma (<code>;</code>) se utiliza para separar declaraciones en código JavaScript.</p>

<p>Todas las expresiones e instrucciones de JavaScript también son una declaración. Consulta {{JSxRef("../Guide/Expressions_and_Operators", "Expresiones y operadores")}} para obtener información completa sobre las expresiones.</p>

<h2 id="Declaración_de_bloque">Declaración de bloque</h2>

<p>La declaración más básica es una <dfn>declaración de bloque</dfn>, que se utiliza para agrupar instrucciones. El bloque está delimitado por un par de llaves:</p>

<pre class="syntaxbox notranslate">{
  <var>statement_1</var>;
  <var>statement_2</var>;
  ⋮
  <var>statement_n</var>;
}
</pre>

<h3 id="Ejemplo"><strong>Ejemplo</strong></h3>

<p>Las declaraciones de bloque se utilizan comúnmente con declaraciones de control de flujo (<code>if</code>, <code>for</code>, <code>while</code>).</p>

<pre class="brush: js notranslate">while (x &lt; 10) {
  x++;
}
</pre>

<p>Aquí, <code>{ x++; }</code> es la declaración de bloque.</p>

<div class="blockIndicator note">
<p><strong>Importante</strong>: JavaScript anterior a ECMAScript2015 (6<sup>a</sup> edición) <strong>no</strong> tiene ámbito de bloque. En JavaScript más antiguo, las variables introducidas dentro de un bloque tienen como ámbito la función o script que las contiene, y los efectos de establecerlas persisten más allá del bloque en sí mismo. En otras palabras, las <em>declaraciones de bloque no definen un ámbito</em>.</p>

<p>Los bloques "independientes" en JavaScript pueden producir resultados completamente diferentes de los que producirían en C o Java. Por ejemplo:</p>

<pre class="brush: js notranslate">var x = 1;
{
  var x = 2;
}
console.log(x); // muestra 2
</pre>

<p>Esto muestra <code>2</code> porque la instrucción <code>var x</code> dentro del bloque está en el mismo ámbito que la instrucción <code>var x</code> anterior del bloque. (En C o Java, el código equivalente habría generado <code>1</code>).</p>

<p><strong>A partir de ECMAScript2015</strong>, las declaraciones de variables <code>let</code> y <code>const</code> tienen un ámbito de bloque. Consulta las páginas de referencia de {{JSxRef("Sentencias/let", "let")}} y {{JSxRef("Sentencias/const", "const")}} para obtener más información.</p>
</div>

<h2 id="Expresiones_condicionales">Expresiones condicionales</h2>

<p>Una expresión condicional es un conjunto de instrucciones que se ejecutarán si una condición especificada es verdadera. JavaScript admite dos expresiones condicionales: <code>if...else</code> y <code>switch</code>.</p>

<h3 id="Expresión_if...else">Expresión <code>if...else</code></h3>

<p>Utiliza la expresión <code>if</code> para ejecutar una instrucción si una condición lógica es <code>true</code>. Utiliza la cláusula opcional <code>else</code> para ejecutar una instrucción si la condición es <code>false</code>.</p>

<p>Una declaración <code>if</code> se ve así:</p>

<pre class="syntaxbox notranslate">if (<var>condition</var>) {
  <var>statement_1</var>;
} else {
  <var>statement_2</var>;
}</pre>

<p>Aquí, la <code><var>condition</var></code> puede ser cualquier expresión que se evalúe como <code>true</code> o <code>false</code>. (Consulta {{JSxRef("Objetos_globales/Boolean", "Boolean", "#Description")}} para obtener una explicación de lo que se evalúa como <code>true</code> y <code>false</code>).</p>

<p>Si <code><var>condition</var></code> se evalúa como <code>true</code>, se ejecuta <code><var>statement_1</var></code>. De lo contrario, se ejecuta <code><var>statement_2</var></code>. <code><var>statement_1</var></code> y <code><var>statement_2</var></code> pueden ser cualquier declaración, incluidas otras declaraciones <code>if</code> anidadas.</p>

<p>También puedes componer las declaraciones usando <code>else if</code> para que se prueben varias condiciones en secuencia, de la siguiente manera:</p>

<pre class="syntaxbox notranslate">if (<var>condition_1</var>) {
  <var>statement_1</var>;
} else if (<var>condition_2</var>) {
  <var>statement_2</var>;
} else if (<var>condition_n</var>) {
  <var>statement_n</var>;
} else {
  <var>statement_last</var>;
}
</pre>

<p>En el caso de múltiples condiciones, solo se ejecutará la primera condición lógica que se evalúe como <code>true</code>. Para ejecutar múltiples declaraciones, agrúpalas dentro de una declaración de bloque (<code>{ … }</code>).</p>

<h4 id="Mejores_prácticas">Mejores prácticas</h4>

<p>En general, es una buena práctica usar siempre declaraciones de bloque, <em>especialmente</em> al anidar declaraciones <code>if</code>:</p>

<pre class="syntaxbox notranslate">if (<var>condition</var>) {
  <var>statement_1_runs_if_condition_is_true</var>;
  <var>statement_2_runs_if_condition_is_true</var>;
} else {
  <var>statement_3_runs_if_condition_is_false</var>;
  <var>statement_4_runs_if_condition_is_false</var>;
}
</pre>

<p>No es aconsejable utilizar asignaciones simples en una expresión condicional, porque la asignación se puede confundir con la igualdad al mirar el código.</p>

<p>Por ejemplo, <em>no</em> escribas un código como este:</p>

<pre class="example-bad brush: js notranslate">// Propenso a ser mal interpretado como "x == y"
if (x = y) {
  /* expresiones aquí */
}
</pre>

<p>Si necesitas usar una tarea en una expresión condicional, una práctica común es poner paréntesis adicionales alrededor de la asignación, así:</p>

<pre class="example-good brush: js notranslate">if ((x = y)) {
  /* expresiones aquí */
}
</pre>

<h4 id="Valores_falsos">Valores falsos</h4>

<p>Los siguientes valores se evalúan como <code>false</code> (también conocidos como valores {{Glossary("Falsy")}}:</p>

<ul>
 <li><code>false</code></li>
 <li><code>undefined</code></li>
 <li><code>null</code></li>
 <li><code>0</code></li>
 <li><code>NaN</code></li>
 <li>la cadena vacía (<code>""</code>)</li>
</ul>

<p>Todos los demás valores, incluidos todos los objetos, se evalúan como <code>true</code> cuando se pasan a una declaración condicional.</p>

<div class="blockIndicator note">
<p><strong>Precaución</strong>: ¡No confundas los valores booleanos primitivos <code>true</code> y <code>false</code> con los valores <code>true</code> y <code>false</code> del objeto {{JSxRef("Boolean")}}!.</p>

<p>Por ejemplo:</p>

<pre class="brush: js notranslate">var b = new Boolean(false);
if (b)         // esta condición se evalúa como verdadera
if (b == true) // esta condición se evalúa como false
</pre>
</div>

<h4 id="Ejemplo_2"><strong>Ejemplo</strong></h4>

<p>En el siguiente ejemplo, la función <code>checkData</code> devuelve <code>true</code> si el número de caracteres en un objeto <code>Text</code> es tres. De lo contrario, muestra una alerta y devuelve <code>false</code>.</p>

<pre class="brush: js notranslate">function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
        'Introduce exactamente tres caracteres. ' +
        `${document.form1.threeChar.value} no es válido.`);
    return false;
  }
}
</pre>

<h3 id="Declaración_switch">Declaración <code>switch</code></h3>

<p>Una instrucción <code>switch</code> permite que un programa evalúe una expresión e intente hacer coincidir el valor de la expresión con una etiqueta <code>case</code>. Si la encuentra, el programa ejecuta la declaración asociada.</p>

<p>Una instrucción <code>switch</code> se ve así:</p>

<pre class="syntaxbox notranslate">switch (<var>expression</var>) {
  case <var>label_1</var>:
    <var>statements_1</var>
    [break;]
  case <var>label_2</var>:
    <var>statements_2</var>
    [break;]
    …
  default:
    <var>statements_def</var>
    [break;]
}
</pre>

<p>JavaScript evalúa la instrucción <code>switch</code> anterior de la siguiente manera:</p>

<ul>
 <li>El programa primero busca una cláusula <code>case</code> con una etiqueta que coincida con el valor de expresión y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.</li>
 <li>Si no se encuentra una etiqueta coincidente, el programa busca la cláusula opcional <code>default</code>:
  <ul>
   <li>Si se encuentra una cláusula <code>default</code>, el programa transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.</li>
   <li>Si no se encuentra una cláusula <code>default</code>, el programa reanuda la ejecución en la declaración que sigue al final de <code>switch</code>.</li>
   <li>(Por convención, la cláusula <code>default</code> está escrita como la última cláusula, pero no es necesario que sea así).</li>
  </ul>
 </li>
</ul>

<h4 id="Declaraciones_break">Declaraciones <code>break</code></h4>

<p>La declaración opcional <code>break</code> asociada con cada cláusula <code>case</code> asegura que el programa salga de <code>switch</code> una vez que se ejecuta la instrucción coincidente, y luego continúa la ejecución en la declaración que sigue a <code>switch</code>. Si se omite <code>break</code>, el programa continúa la ejecución dentro de la instrucción <code>switch</code> (y evaluará el siguiente <code>case</code>, y así sucesivamente).</p>

<h5 id="Ejemplo_3"><strong>Ejemplo</strong></h5>

<p>En el siguiente ejemplo, si <code><var>fruittype</var></code> se evalúa como '<code>Bananas</code>', el programa hace coincidir el valor con el caso '<code>Bananas</code>' y ejecuta la declaración asociada. Cuando se encuentra <code>break</code>, el programa sale del <code>switch</code> y continúa la ejecución de la instrucción que sigue a <code>switch</code>. Si se omitiera <code>break</code>, también se ejecutará la instrucción para <code>case 'Cherries'</code>.</p>

<pre class="brush: js notranslate">switch (<var>fruittype</var>) {
  case 'Oranges':
    console.log('Las naranjas cuestan $0.59 la libra.');
    break;
  case 'Apples':
    console.log('Las manzanas cuestan $0.32 la libra.');
    break;
  case 'Bananas':
    console.log('Los plátanos cuestan $0.48 la libra.');
    break;
  case 'Cherries':
    console.log('Las cerezas cuestan $3.00 la libra.');
    break;
  case 'Mangoes':
    console.log('Los mangos cuestan $0.56 la libra.');
    break;
  case 'Papayas':
    console.log('Los mangos y las papayas cuestan $2.79 la libra.');
    break;
  default:
   console.log(`Lo sentimos, no tenemos ${fruittype}.`);
}
console.log("¿Hay algo más que quieras?");</pre>

<h2 id="Expresiones_de_manejo_de_excepciones">Expresiones de manejo de excepciones</h2>

<p>Puedes lanzar excepciones usando la instrucción <code>throw</code> y manejarlas usando las declaraciones <code>try...catch</code>.</p>

<ul>
 <li><a href="#expresion_throw">Expresión throw</a></li>
 <li><a href="#declaracion_try...catch">Declaración try...catch</a></li>
</ul>

<h3 id="Tipos_de_excepciones">Tipos de excepciones</h3>

<p>Casi cualquier objeto se puede lanzar en JavaScript. Sin embargo, no todos los objetos lanzados son iguales. Si bien es común lanzar números o cadenas como errores, con frecuencia es más efectivo usar uno de los tipos de excepción creados específicamente para este propósito:</p>

<ul>
 <li>{{JSxRef("Objetos_globales/Error", "excepciones ECMAScript", "#Tipos_Error")}}</li>
 <li>La interfaz {{web.link("/es/docs/Web/API/DOMException", "DOMException")}} representa un evento anormal (llamado excepción) que ocurre como resultado de llamar a un método o acceder a una propiedad de una API web y la interfaz {{web.link("/es/docs/Web/API/DOMError", "DOMError ")}} describe un objeto de error que contiene un nombre de error.</li>
</ul>

<h3 id="Expresión_throw">Expresión <code>throw</code></h3>

<p>Utiliza la expresión <code>throw</code> para lanzar una excepción. Una expresión <code>throw</code> especifica el valor que se lanzará:</p>

<pre class="syntaxbox notranslate">throw <var>expression</var>;
</pre>

<p>Puedes lanzar cualquier expresión, no solo expresiones de un tipo específico. El siguiente código arroja varias excepciones de distintos tipos:</p>

<pre class="brush: js notranslate">throw 'Error2';   // tipo String
throw 42;         // tipo Number
throw true;       // tipo Boolean
throw {toString: function() { return "¡Soy un objeto!"; } };
</pre>

<div class="note">
<p><strong>Nota</strong> Puedes especificar un objeto cuando lanzas una excepción. A continuación, puedes hacer referencia a las propiedades del objeto en el bloque <code>catch</code>.</p>
</div>

<pre class="brush: js notranslate">// Crea un objeto tipo de UserException
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

// Hacer que la excepción se convierta en una bonita cadena cuando se usa como cadena
// (por ejemplo, por la consola de errores)
UserException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
}

// Crea una instancia del tipo de objeto y tírala
throw new UserException('Valor muy alto');</pre>

<h3 id="Declaración_try...catch">Declaración <code>try...catch</code></h3>

<p>La declaración <code>try...catch</code> marca un bloque de expresiones para probar y especifica una o más respuestas en caso de que se produzca una excepción. Si se lanza una excepción, la declaración <code>try...catch</code> la detecta.</p>

<p>La declaración <code>try...catch</code> consta de un bloque <code>try</code>, que contiene una o más declaraciones, y un bloque <code>catch</code>, que contiene declaraciones que especifican qué hacer si se lanza una excepción en el bloque <code>try</code>.</p>

<p>En otras palabras, deseas que el bloque <code>try</code> tenga éxito, pero si no es así, deseas que el control pase al bloque <code>catch</code>. Si alguna instrucción dentro del bloque <code>try</code> (o en una función llamada desde dentro del bloque <code>try</code>) arroja una excepción, el control <em>inmediatamente</em> cambia al bloque <code>catch</code>. Si no se lanza ninguna excepción en el bloque <code>try</code>, se omite el bloque <code>catch</code>. El bloque <code>finalmente</code> se ejecuta después de que se ejecutan los bloques <code>try</code> y <code>catch</code>, pero antes de las declaraciones que siguen a la declaración <code>try...catch</code>.</p>

<p>El siguiente ejemplo usa una instrucción <code>try...catch</code>. El ejemplo llama a una función que recupera el nombre de un mes de un arreglo en función del valor pasado a la función. Si el valor no corresponde a un número de mes (<code>1</code>-<code>12</code>), se lanza una excepción con el valor "<code>InvalidMonthNo</code>" y las declaraciones en el bloque <code>catch</code> establezca la variable <code><var>monthName</var></code> en '<code>unknown</code>'.</p>

<pre class="brush: js notranslate">function getMonthName(mo) {
  mo = mo - 1; // Ajusta el número de mes para el índice del arreglo (1 = Ene, 12 = Dic)
  let months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul',
                'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; // aquí se usa la palabra clave throw
  }
}

try { // declaraciones para try
  monthName = getMonthName(myMonth); // la función podría lanzar una excepción
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
}
</pre>

<h4 id="El_bloque_catch">El bloque <code>catch</code></h4>

<p>Puedes usar un bloque <code>catch</code> para manejar todas las excepciones que se puedan generar en el bloque <code>try</code>.</p>

<pre class="syntaxbox notranslate">catch (<var>catchID</var>) {
  <var>instrucciones</var>
}
</pre>

<p>El bloque <code>catch</code> especifica un identificador (<code><var>catchID</var></code> en la sintaxis anterior) que contiene el valor especificado por la expresión <code>throw</code>. Puedes usar este identificador para obtener información sobre la excepción que se lanzó.</p>

<p>JavaScript crea este identificador cuando se ingresa al bloque <code>catch</code>. El identificador dura solo la duración del bloque <code>catch</code>. Una vez que el bloque <code>catch</code> termina de ejecutarse, el identificador ya no existe.</p>

<p>Por ejemplo, el siguiente código lanza una excepción. Cuando ocurre la excepción, el control se transfiere al bloque <code>catch</code>.</p>

<pre class="brush: js notranslate">try {
  throw 'myException'; // genera una excepción
}
catch (err) {
  // declaraciones para manejar cualquier excepción
  logMyErrors(err);    // pasa el objeto exception al controlador de errores
}
</pre>

<div class="blockIndicator note">
<p><strong>Mejores prácticas:</strong> Cuando se registran errores en la consola dentro de un bloque <code>catch</code>, se usa <code>console.error()</code> en lugar de <code>console.log()</code> aconsejado para la depuración. Formatea el mensaje como un error y lo agrega a la lista de mensajes de error generados por la página.</p>
</div>

<h4 id="El_bloque_finally">El bloque <code>finally</code></h4>

<p>El bloque <code>finally</code> contiene instrucciones que se ejecutarán <em>después</em> que se ejecuten los bloques <code>try</code> y <code>catch</code>. Además, el bloque <code>finally</code> ejecuta <em>antes</em> el código que sigue a la declaración <code>try...catch...finally</code>.</p>

<p>También es importante notar que el bloque <code>finally</code> se ejecutará <em>independientemente de que</em> se produzca una excepción. Sin embargo, si se lanza una excepción, las declaraciones en el bloque <code>finally</code> se ejecutan incluso si ningún bloque <code>catch</code> maneje la excepción que se lanzó.</p>

<p>Puedes usar el bloque <code>finally</code> para hacer que tu script falle correctamente cuando ocurra una excepción. Por ejemplo, es posible que debas liberar un recurso que tu script haya inmovilizado.</p>

<p>El siguiente ejemplo abre un archivo y luego ejecuta declaraciones que usan el archivo. (JavaScript de lado del servidor te permite acceder a los archivos). Si se lanza una excepción mientras el archivo está abierto, el bloque <code>finally</code> cierra el archivo antes de que falle el script. Usar <code>finally</code> aquí <em>asegura</em> que el archivo nunca se deje abierto, incluso si ocurre un error.</p>

<pre class="brush: js notranslate">openMyFile();
try {
  writeMyFile(theData); // Esto puede arrojar un error
} catch(e) {
  handleError(e); // Si ocurrió un error, manéjalo
} finally {
  closeMyFile(); // Siempre cierra el recurso
}
</pre>

<p>Si el bloque <code>finally</code> devuelve un valor, este valor se convierte en el valor de retorno de toda la producción de <code>try…catch…finally</code>, independientemente de las declaraciones <code>return</code> en los bloques <code>try</code> y <code>catch</code>:</p>

<pre class="brush: js notranslate">function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;    // esta declaración de retorno está suspendida
                    // hasta que el bloque finally se haya completado
    console.log(2); // no alcanzable
  } finally {
    console.log(3);
    return false;   // sobrescribe el "return" anterior
    console.log(4); // no alcanzable
  }
  // "return false" se ejecuta ahora
  console.log(5);   // inalcanzable
}
console.log(f()); // 0, 1, 3, false
</pre>

<p>La sobrescritura de los valores devueltos por el bloque <code>finally</code> también se aplica a las excepciones lanzadas o relanzadas dentro del bloque <code>catch</code>:</p>

<pre class="brush: js notranslate">function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('captura "falso" interno');
    throw e; // esta instrucción throw se suspende hasta
             // que el bloque finally se haya completado
  } finally {
    return false; // sobrescribe el "throw" anterior
  }
  // "return false" se ejecuta ahora
}

try {
  console.log(f());
} catch(e) {
  // ¡esto nunca se alcanza!
  // mientras se ejecuta f(), el bloque `finally` devuelve false,
  // que sobrescribe el `throw` dentro del `catch` anterior
  console.log('"falso" externo capturado');
}

// Produce
// "falso" interno capturado
// false</pre>

<h4 id="Declaraciones_try...catch_anidadas">Declaraciones <code>try...catch</code> anidadas</h4>

<p>Puedes anidar una o más declaraciones <code>try...catch</code>.</p>

<p>Si un bloque <code>try</code> interno <em>no</em> tiene un bloque <code>catch</code> correspondiente:</p>

<ol>
 <li><em>debe</em> contener un bloque <code>finally</code>, y</li>
 <li>el bloque <code>catch</code> adjunto de la declaración <code>try...catch</code> se comprueba para una coincidencia.</li>
</ol>

<p>Para obtener más información, consulta {{JSxRef("Sentencias/try...catch", "bloques try anidados", "#Nested_try-blocks")}} en la una página de referencia {{JSxRef("Sentencias/try...catch", "try...catch")}}.</p>

<h3 id="Utilizar_objetos_Error">Utilizar objetos <code>Error</code></h3>

<p>Dependiendo del tipo de error, es posible que puedas utilizar las propiedades <code>name</code> y <code>message</code> para obtener un mensaje más refinado.</p>

<p>La propiedad <code>name</code> proporciona la clase general de <code>Error</code> (tal como <code>DOMException</code> o <code>Error</code>), mientras que <code>message</code> generalmente proporciona un mensaje más conciso que el que se obtendría al convertir el objeto error en una cadena.</p>

<p>Si estás lanzando tus propias excepciones, para aprovechar estas propiedades (por ejemplo, si tu bloque <code>catch</code> no discrimina entre tus propias excepciones y las del sistema), puedes usar el constructor <code>Error</code>.</p>

<p>Por ejemplo:</p>

<pre class="brush: js notranslate">function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('El mensaje'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
⋮
try {
  doSomethingErrorProne();
} catch (e) {               // AHORA, en realidad usamos `console.error()`
  console.error(e.name);    // registra 'Error'
  console.error(e.message); // registra 'The message' o un mensaje de error de JavaScript
}
</pre>

<div>{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}</div>
