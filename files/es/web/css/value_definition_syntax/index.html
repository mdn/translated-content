---
title: Sintaxis de definición de valor
slug: Web/CSS/Value_definition_syntax
translation_of: Web/CSS/Value_definition_syntax
original_slug: Web/CSS/Sintaxis_definición_de_valor
---
<p>{{CSSRef()}}</p>

<p><span class="seoSummary"><strong>La sintaxis de definición de valores CSS</strong>, una gramática formal, se utiliza para definir el conjunto de valores válidos para una propiedad o función CSS. Además de esta sintaxis, el conjunto de valores válidos puede restringirse aún más mediante restricciones semánticas (por ejemplo, para que un número sea estrictamente positivo).</span></p>

<p class="summary">La sintaxis de definición describe qué valores están permitidos y las interacciones entre ellos. Un componente puede ser una <em>palabra clave</em>, algunos caracteres <em>literales</em>, ó un valor de tipo de dato de CSS o propiedad CSS.</p>

<h2 id="Tipos_de_valor_de_los_componentes">Tipos de valor de los componentes</h2>

<h3 id="Palabras_clave">Palabras clave</h3>

<h4 id="Palabras_clave_genéricas">Palabras clave genéricas</h4>

<p>Una palabra clave con significado predefinido aparece literalmente, sin comillas, por ejemplo: <code>auto</code>, <code>smaller</code> or <code>ease-in</code>.</p>

<h4 id="El_caso_específico_de_inherit_e_initial">El caso específico de <code>inherit</code> e <code>initial</code></h4>

<p>Todas las propiedades CSS aceptan las palabras clave <code>inherit</code> e <code>initial</code> que son definidas vía CSS. Estas no son mostradas en la definición del valor y están implícitamente definidas.</p>

<h3 id="Literales">Literales</h3>

<p>En CSS, unos pocos caracteres pueden aparecer por su cuenta, como la barra ('<code>/</code>') o la coma ('<code>,</code>'), y son usadas en una propiedad o definición para separar sus partes. La coma es a menudo usada para separar valores en enumeraciones, o parámetros en funciones de tipo matemático; la barra a menudo separa partes de el valor que es semánticamente diferente, pero que tiene una sintaxis común. Típicamente, la barra es usada a veces en propiedades abreviadas para separar componentes que son del mismo tipo, pero pertenecen a diferentes propiedades.</p>

<p>Ambos símbolos aparecen literalmente en una definición de valor.</p>

<h3 id="Tipos_de_dato">Tipos de dato</h3>

<h4 id="Tipos_de_dato_básicos">Tipos de dato básicos</h4>

<p>Un tipo de dato usado vía CSS es definido una sola vez para todos los valores en la especificación. Se llaman <em>tipos de datos básicos, </em>estan representados por su nombre rodeados del símbolo '<code>&lt;</code>' y '<code>&gt;</code>': {{ cssxref("&lt;angle&gt;") }}, {{cssxref("&lt;string&gt;")}}, …</p>

<h4 id="Tipos_de_dato_no_terminales">Tipos de dato no terminales</h4>

<p>Tipos de dato poco comunes, llamados <em>tipos de datos no terminales</em>, están también rodeados por  '<code>&lt;</code>' y '<code>&gt;</code>'.</p>

<p>Los tipos de dato no terminales son de dos tipos::</p>

<ul>
 <li>tipos de datos <em>que comparten el mismo nombre de propiedad</em>, colocados entre comillas . En este caso el tipo de dato comparte el mismo conjunto de valores de la propiedad. A menudo son usados en la definición de propiedades abreviadas.</li>
 <li>tipos de datos <em>que no comparten el mismo nombre de la propiedad</em>. Estos tipos de datos son muy cercanos a sus tipos de datos básicos. Ellos solo difieren de los tipos de datos básicos en la ubicación física de su definición: en este caso la definición es usualmente físicamente muy cercana a la definición de la propiedad que la esta usando.</li>
</ul>

<h2 id="Combinadores_de_los_valores_de_componentes">Combinadores de los valores de componentes</h2>

<h3 id="Corchetes">Corchetes</h3>

<p><em>Corchetes </em>encierran varias entidades, combinadores, y multiplicadores, luego los transforman en un solo componente. Son usados para <strong>agrupar componentes para sobreescribir las reglas de precedencia.</strong></p>

<pre class="syntaxbox"><code>bold [ thin &amp;&amp; &lt;length&gt; ]</code></pre>

<p>El ejemplo empareja con los siguientes valores:</p>

<ul>
 <li><code>bold thin 2vh</code></li>
 <li><code>bold 0 thin</code></li>
 <li><code>bold thin 3.5em</code></li>
</ul>

<p>Pero no con:</p>

<ul>
 <li><code>thin bold 3em</code>,  porque <code>bold</code> esta yuxtapuesto con el componente definido por los corchetes, debe aparecer antes de él.</li>
</ul>

<h3 id="Yuxtaposición">Yuxtaposición</h3>

<p>Colocar varias palabras clave, literales, o tipos de datos, uno al lado del otro, solo separados por uno o varios espacios se llama <em>yuxtaponer. </em>Todos los componentes yuxtapuestos son <strong>obligatorios y deben aparecer en ese orden exacto.</strong></p>

<pre class="syntaxbox">bold &lt;length&gt; , thin
</pre>

<p>El ejemplo empareja con los siguientes valores:</p>

<ul>
 <li><code>bold 1em, thin</code></li>
 <li><code>bold 0, thin</code></li>
 <li><code>bold 2.5cm, thin</code></li>
 <li><code>bold 3vh, thin</code></li>
</ul>

<p>Pero no con:</p>

<ul>
 <li><code>thin 1em, bold</code> porque las entidades deben aparecer en el orden expresado</li>
 <li><code>bold 1em thin</code> porque las entidades son obligatorias; la coma que es un literal debe estar presente</li>
 <li><code>bold 0.5ms, thin</code> porque los valores <code>ms</code> no son de tipo {{cssxref("&lt;length&gt;")}}</li>
</ul>

<h3 id="Doble_ampersand">Doble ampersand</h3>

<p>Separar dos o mas componentes por un <em>doble ampersand</em>, <code>&amp;&amp;</code>, significa que todas esas entidades son <strong>obligatorias pero pueden aparecer en cualquier orden.</strong></p>

<pre class="syntaxbox">bold &amp;&amp; &lt;length&gt;
</pre>

<p>El ejemplo empareja con los siguientes valores:</p>

<ul>
 <li><code>bold 1em</code></li>
 <li><code>bold 0</code></li>
 <li><code>2.5cm bold</code></li>
 <li><code>3vh bold</code></li>
</ul>

<p>Pero no con:</p>

<ul>
 <li><code>bold</code> porque ambos componentes deben aparecer en el valor</li>
 <li><code>bold 1em bold</code> porque ambos componentes deben aparecer solo una vez</li>
</ul>

<div class="note"><strong>Nota:</strong> yuxtaposición tiene precedencia sobre el doble ampersand, esto quiere decir que <code>bold thin &amp;&amp; &lt;length&gt;</code> es equivalente a <code>[ </code><code>bold thin ] &amp;&amp; &lt;length&gt;</code>. Que describe a <code>bold thin &lt;length&gt;</code> ó <code>&lt;length&gt;</code><code> bold thin</code> pero no a  <code>bold &lt;length&gt;</code><code> thin</code>.</div>

<h3 id="Barra_doble">Barra doble</h3>

<p>Separar dos o mas componentes por una <em>barra doble</em>, <code>||</code>, significa que todas las entidades son opcionales: <strong>al menos una debe estar presente, y pueden aparecer en cualquier orden. </strong>Típicamente ésto es usado para definir los diferentes valores de una <a href="/en-US/docs/CSS/Shorthand_properties" title="/en-US/docs/CSS/Shorthand_properties">propiedad abreviada</a>.</p>

<pre class="syntaxbox">&lt;'border-width'&gt; || &lt;'border-style'&gt; || &lt;'border-color'&gt;
</pre>

<p>El ejemplo empareja con los siguientes valores:</p>

<ul>
 <li><code>1em solid blue</code></li>
 <li><code>blue 1em</code></li>
 <li><code>solid 1px yellow</code></li>
</ul>

<p>Pero no con:</p>

<ul>
 <li><code>blue yellow</code> porque un componente debe aparecer al menos una vez.</li>
 <li><code>bold</code>  porque no es una palabra clave permitida como valor de ninguna de las entidades.</li>
</ul>

<div class="note"><strong>Nota:</strong> el doble ampersand tiene precedencia sobre la barra doble, que significa que <code>bold || thin &amp;&amp; &lt;length&gt;</code> es equivalente a <code>bold || [ thin &amp;&amp; &lt;length&gt; ]</code>. Describe a <code>bold</code>, <code>thin</code>, <code>&lt;length&gt;</code>, <code>bold thin</code>, <code>&lt;length&gt; bold</code>, o <code>thin &lt;length&gt; bold</code> pero no <code>bold &lt;length&gt;</code><code> bold thin</code> porque bold, si no es omitido debe colocarse antes o después de el componente<code> thin &amp;&amp; &lt;length&gt;</code></div>

<h3 id="Barra_simple">Barra simple</h3>

<p>Separar dos o mas componentes con <em>una barra simple</em>, <code>|</code>, quiere decir que todas las entidades son opciones exclusivas: <strong>exactamente una de estas opciones debe estar presente. </strong>Esto es tipicamente usado para separar una lista de posibles palabras clave.</p>

<pre class="syntaxbox">&lt;percentage&gt; | &lt;length&gt; | left | center | right | top | bottom</pre>

<p>El ejemplo empareja con los siguientes valores:</p>

<ul>
 <li><code>3%</code></li>
 <li><code>0</code></li>
 <li><code>3.5em</code></li>
 <li><code>left</code></li>
 <li><code>center</code></li>
 <li><code>right</code></li>
 <li><code>top</code></li>
 <li><code>bottom</code></li>
</ul>

<p>Pero no</p>

<ul>
 <li><code>center 3%</code> porque solo uno de los componentes debe estar presente</li>
 <li><code>3em 4.5em</code> porque un componente debe estar presente máximo una vez.</li>
</ul>

<div class="note">
<p><strong>Note:</strong> la barra doble tiene precedencia sobre la barra simple, quiere decir que <code>bold | thin || &lt;length&gt;</code> es equivalente a <code>bold | [ thin || &lt;length&gt; ]</code>. Describe <code>bold</code>, <code>thin</code>, <code>&lt;length&gt;</code>, <code>&lt;length&gt; thin</code>, o <code>thin &lt;length&gt; </code>pero no <code>bold &lt;length&gt;</code><code> </code>porque solo una entidad de cada lado del combinador <code>|</code> puede estar presente.</p>
</div>

<h2 id="Multiplicadores_de_valores_de_componentes">Multiplicadores de valores de componentes</h2>

<p>Un multiplicador es un símbolo que indica cuantas veces una entidad precedente puede ser repetida. Sin un multiplicador, una entidad debe aparecer exactamente una vez.</p>

<p>Note que los multiplicadores no pueden sumarse y tienen precedencia sobre los combinadores.</p>

<h3 id="Asterisco_(*)">Asterisco (<code>*</code>)</h3>

<p>El <em>multiplicador asterisco </em>indica que la entidad puede aparecer <strong>cero, una o varias veces.</strong></p>

<pre class="syntaxbox"><code>bold smaller*</code></pre>

<p>El ejemplo empareja con los siguientes valores:</p>

<ul>
 <li><code>bold</code></li>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code> y así sucesivamente</li>
</ul>

<p>Pero no:</p>

<ul>
 <li><code>smaller</code> porque <code>bold</code> esta yuxtapuesto y debe aparecer antes de la palabra clave <code>smaller</code></li>
</ul>

<h3 id="Suma_()">Suma (<code>+</code>)</h3>

<p>El <em>multiplicador suma </em>indica que la entidad puede aparecer <strong>una o varias veces.</strong></p>

<pre class="syntaxbox"><code>bold smaller+</code></pre>

<p>El ejemplo empareja con los siguientes valores:</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code> y sucesivamente</li>
</ul>

<p>Pero no:</p>

<ul>
 <li><code>bold</code> porque <code>smaller</code> debe aparecer al menos una vez</li>
 <li><code>smaller</code> porque <code>bold</code> esta yuxtapuesto y debe aparecer antes de cualquier palabra clave <code>smaller</code></li>
</ul>

<h3 id="Pregunta_()">Pregunta (<code>?</code>)</h3>

<p>El <em>multiplicador pregunta </em>indica que la entidad es opcional y <strong>debe aparecer cero o una vez</strong></p>

<pre class="syntaxbox"><code>bold smaller?</code></pre>

<p>El ejemplo empareja con los siguientes valores:</p>

<ul>
 <li><code>bold</code></li>
 <li><code>bold smaller</code></li>
</ul>

<p>Pero no:</p>

<ul>
 <li><code>bold smaller smaller</code> porque <code>smaller</code> debe aparecer como máximo una vez</li>
 <li><code>smaller bold</code> porque <code>bold</code> esta yuxtapuesto y debe aparecer antes de cualquier palabra clave <code>smaller</code></li>
</ul>

<h3 id="Llaves_(_)">Llaves (<code>{ }</code>)</h3>

<p>El <em>multiplicador llaves, </em>encierra a dos enteros A y B separados  por una coma, indica que la entidad <strong>debe aparecer al menos A veces y como mas B veces</strong></p>

<pre class="syntaxbox"><code>bold smaller{1,3}</code></pre>

<p>El ejemplo empareja con los siguientes valores:</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller smaller</code></li>
 <li><code>bold smaller smaller smaller</code></li>
</ul>

<p>Pero no:</p>

<ul>
 <li><code>bold</code> porque <code>smaller</code> debe aparecer al menos una vez</li>
 <li><code>bold smaller smaller smaller smaller</code> porque <code>smaller</code> debe aparecer un máximo de tres veces.</li>
 <li><code>smaller bold</code> porque <code>bold</code> esta yuxtapuesto u debe aparecer antes de cualquier palabra clave <code>smaller</code></li>
</ul>

<h3 id="Hash_()">Hash (<code>#</code>)</h3>

<p>El <em>multiplicador hash</em> indica que la entidad puede repetirse <strong>una o mas veces </strong>(como con el multiplicador de suma) pero cada ocurrencia se <strong>separa por una coma</strong> ('<code>,</code>').</p>

<pre class="syntaxbox"><code>bold smaller#</code></pre>

<p>El ejemplo empareja con los siguientes valores:</p>

<ul>
 <li><code>bold smaller</code></li>
 <li><code>bold smaller, smaller</code></li>
 <li><code>bold smaller, smaller, smaller</code> y así sucesivamente</li>
</ul>

<p>Pero no:</p>

<ul>
 <li><code>bold</code> porque <code>smaller</code> debe aparecer al menos una vez</li>
 <li><code>bold smaller smaller smaller</code> porque las diferentes ocurrencias de <code>smaller</code> deben estar separadas por comas</li>
 <li><code>smaller</code> porque <code>bold</code> esta yuxtapuesto y debe aparecer antes de cualquier palabra clave <code>smaller</code></li>
</ul>

<h2 id="Sumario">Sumario</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Símbolo</th>
   <th scope="col">Nombre</th>
   <th scope="col">Descripción</th>
   <th scope="col">Ejemplo</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th colspan="4">Combinadores</th>
  </tr>
  <tr>
   <td> </td>
   <td>Yuxtaposición</td>
   <td>Componentes obligatorios que deben aparecer en el mismo orden</td>
   <td><code>solid &lt;length&gt;</code></td>
  </tr>
  <tr>
   <td><code>&amp;&amp;</code></td>
   <td>Doble ampersand</td>
   <td>Componentes obligatorios pero que pueden aparecer en cualquier orden</td>
   <td><code>length&gt; &amp;&amp; &lt;string&gt;</code></td>
  </tr>
  <tr>
   <td><code>||</code></td>
   <td>Barra doble</td>
   <td>Al menos uno de los componentes debe estar presente, y pueden aparecer en cualquier orden</td>
   <td><code>&lt;'border-image-outset'&gt; || &lt;'border-image-slice'&gt;</code></td>
  </tr>
  <tr>
   <td><code>|</code></td>
   <td>Barra simple</td>
   <td>Exactamente uno de los componentes debe estar presente</td>
   <td><code>smaller | small | normal | big | bigger</code></td>
  </tr>
  <tr>
   <td><code>[ ]</code></td>
   <td>Corchetes</td>
   <td>Agrupa componentes para sobreescribir las reglas de precedencia</td>
   <td><code>bold [ thin &amp;&amp; &lt;length&gt; ]</code></td>
  </tr>
  <tr>
   <th colspan="4">Multiplicadores</th>
  </tr>
  <tr>
   <td> </td>
   <td>Sin multiplicador</td>
   <td>Exactamente 1 vez</td>
   <td><code>solid</code></td>
  </tr>
  <tr>
   <td><code>*</code></td>
   <td>Asterisco</td>
   <td>0 or more times</td>
   <td><code>bold smaller*</code></td>
  </tr>
  <tr>
   <td><code>+</code></td>
   <td>Suma</td>
   <td>1 o mas veces</td>
   <td><code>bold smaller+</code></td>
  </tr>
  <tr>
   <td><code>?</code></td>
   <td>Pregunta</td>
   <td>0 o 1 vez (es <em>opcional)</em></td>
   <td><code>bold smaller?</code></td>
  </tr>
  <tr>
   <td><code>{A,B}</code></td>
   <td>Llaves</td>
   <td>Al menos <code>A</code> veces, como mas <code>B</code> veces</td>
   <td><code>bold smaller{1,3}</code></td>
  </tr>
  <tr>
   <td><code>#</code></td>
   <td>Hash</td>
   <td>1 o mas veces, pero cada ocurrencia separada por una coma ('<code>,</code>')</td>
   <td><code>bold smaller#</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Values', '#value-defs', 'Value definition syntax') }}</td>
   <td>{{ Spec2('CSS3 Values') }}</td>
   <td>Desde {{ SpecName('CSS2.1', 'about.html#value-defs', 'Value definition syntax') }}, añade el multiplicador hash</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS2.1', 'about.html#value-defs', 'Value definition syntax') }}</td>
   <td>{{ Spec2('CSS2.1') }}</td>
   <td>Desde {{ SpecName('CSS1', '#notation-for-property-values', 'Value definition syntax') }}, añade el combinador doble ampersand</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#notation-for-property-values', 'Value definition syntax') }}</td>
   <td>{{ Spec2('CSS1') }}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{ CSS_key_concepts() }}</li>
</ul>
