---
title: <textarea>
slug: Web/HTML/Element/textarea
tags:
  - Elemento
  - Formularios(2)
  - HTML
  - Referencia
  - Web
translation_of: Web/HTML/Element/textarea
original_slug: Web/HTML/Elemento/textarea
---
<h2 id="Resumen">Resumen</h2>

<p>El <strong>elemento</strong> <strong>HTML <code>&lt;textarea&gt; </code></strong>representa un control para la edición mutilínea de texto sin formato.</p>

<h2 id="Contenido_de_Uso">Contenido de Uso</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/HTML/Content_categories" title="HTML/Content_categories">Content categories</a></th>
   <td><a href="/en-US/docs/HTML/Content_categories#Flow_content" title="HTML/Content categories#Flow content">Flow content</a>, <a href="/en-US/docs/HTML/Content_categories#Phrasing_content" title="HTML/Content categories#Phrasing content">phrasing content</a>, <a href="/en-US/docs/HTML/Content_categories#Interactive_content" title="HTML/Content categories#Interactive content">Interactive content</a>, <a href="/en-US/docs/HTML/Content_categories#Form_listed" title="HTML/Content categories#Form listed">listed</a>, <a href="/en-US/docs/HTML/Content_categories#Form_labelable" title="HTML/Content categories#Form labelable">labelable</a>, <a href="/en/HTML/Content_categories#form_resettable" title="en/HTML/Content categories#form resettable">resettable</a>, y <a href="/en-US/docs/HTML/Content_categories#Form_submittable" title="HTML/Content categories#Form submittable">submittable</a> <a href="/en-US/docs/HTML/Content_categories#Form-associated_" title="HTML/Content categories#Form-associated ">form-associated</a> elemento</td>
  </tr>
  <tr>
   <th scope="row">Contenido Permitido</th>
   <td>Datos carácter</td>
  </tr>
  <tr>
   <th scope="row">Omisión de etiquetas</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Elementos padre permitidos</th>
   <td>Cualquier elemento que soporta <a href="/en-US/docs/HTML/Content_categories#Phrasing_content" title="HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Interfaz Dom</th>
   <td>{{domxref("HTMLTextAreaElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Atributos">Atributos</h2>

<p><span style="line-height: 21px;">Este elemento contiene  </span><a href="https://developer.mozilla.org/en-US/docs/HTML/Global_attributes" style="line-height: 21px;" title="HTML/Global attributes">global attributes</a><span style="line-height: 21px;">.</span></p>

<dl>
 <dt>{{htmlattrdef("autocapitalize")}} {{non-standard_inline}}</dt>
 <dd>Este es un atributo no estándar utilizado por iOS Safari Mobile (y, por lo tanto, también por casi todos los navegadores de iOS, incluyendo Safari, Firefox y Chrome). Controla cuándo y cómo el texto debe ponerse automáticamente en mayúsculas mientras es ingresado/editado por el usuario. Los valores no obsoletos están disponible en iOs 5 y en versiones posteriores. Sus valores posibles son:
 <ul>
  <li><code>none</code>: Deshabilita la capitalización automática</li>
  <li><code>sentences</code>:  Escribe automáticamente con mayúscula la primera letra de cada frase.</li>
  <li><code>words</code>: Automáticamente escribe con mayúsculas la primera letra de las palabras.</li>
  <li><code>characters</code>: Automáticamente escribe con mayúscula todos los caracteres.</li>
  <li><code>on</code>: {{deprecated_inline()}} En desuso desde la versión 5 de iOS.</li>
  <li><code>off</code>: {{deprecated_inline()}} En desuso desde la versión 5 de iOS.</li>
 </ul>
 </dd>
 <dt>{{htmlattrdef("autocomplete")}} {{HTMLVersionInline("5")}}</dt>
 <dd>Este atributo indica si el valor del control puede ser completado automáticamente por el navegador. Los posibles valores son:
 <ul>
  <li><code>off</code>: El usuario debe explícitamente introducir el valor del campo para cada uso, o el documento proporciona su propio método de auto-completado; el navegador no completa automáticamente.</li>
  <li><code>on</code>: El navegador puede completar automáticamente el valor basándose en valores que el usuario haya insertado durante usos previos.</li>
 </ul>

 <p>Si el atributo <strong>autocomplete</strong> no está definidio en el elemento textarea, entonces  el navegador usa el valor del atributo <strong>autocomplete </strong>del propietario del elemento <code>&lt;textarea&gt;</code> . El propietario del formulario es o bien el elemento form del cual el &lt;textarea&gt; es descendiente o el elemento form cuyo id está especificado en el atributo form del elemento. Para más información, ver  el atributo {{htmlattrxref("autocomplete", "form")}} en {{HTMLElement("form")}}.</p>
 </dd>
 <dt>{{ htmlattrdef("autofocus") }} {{ HTMLVersionInline("5") }}</dt>
 <dd>Este atributo booleano te permite especificar que un control de un formulario adquiera el foco cuando se carga la página, salvo que el usuario anule esto , por ejemplo tecleando en un control diferente. Sólo se puede especificar este atributo en los elementos asociados a formularios.</dd>
 <dt>{{ htmlattrdef("cols") }}</dt>
 <dd>La anchura visible del control de texto, en caracteres de anchura media. Si está definido debe ser positivo. Si no, por defecto, el valor es 20 (HTML 5).</dd>
 <dt>{{ htmlattrdef("disabled") }}</dt>
 <dd>Este atributo booleano indica que el usuario no puede interactuar con el control. Si el atributo no está definido se hereda su valor del elemento en el que está contenido, por ejemplo {{ HTMLElement("fieldset") }}; Si no está dentro de un elemento contenedor con el atributo disable establecido, entonces el control estará habilitado.</dd>
 <dt>{{ htmlattrdef("form") }} {{ HTMLVersionInline("5") }}</dt>
 <dd>El formulario al cual el elemento textarea está asociado (el propietario del formulario). El valor del atributo debe ser un ID de un elemento formulario del mismo documento. Si no se especifica este atributo, el textarea debe ser un descendiente de un elemento formulario. Permite colocar elementos textarea en cualquier lugar dentro de un documento, no sólo como descendientes de  formularios.</dd>
 <dt>{{ htmlattrdef("maxlength") }} {{ HTMLVersionInline("5") }}</dt>
 <dd>Indica el número máximo de caracteres  (Unicode code points) que el usuario puede insertar. Si no está especificado entonces el usuario puede insertar un número ilimitado de caracteres.</dd>
 <dt>{{ htmlattrdef("minlength") }} {{ HTMLVersionInline("5") }}</dt>
 <dd>El mínimo número de caracteres (Unicode code points) que el usuaurio debe insertar.</dd>
 <dt>{{ htmlattrdef("name") }}</dt>
 <dd>El nombre del control</dd>
 <dt>{{ htmlattrdef("placeholder") }} {{ HTMLVersionInline("5") }}</dt>
 <dd>Se puede añadir un indicación para el usuario que defina que se debe insertar en el control. Los retornos de carro y las nuevas líneas dentro lso marcadores de posición deben ser tratado como nuevas líneas al representar dicha indicación.</dd>
 <dt>{{ htmlattrdef("readonly") }}</dt>
 <dd>Este atributo booleano indica que el usuario no puede modificar el valor del control. Al contrario que el atributo<code> disable</code>, el atributo <code>readonly </code>no evita que el usuario haga click o seleccione el control. El valor del control read-only si que se envía con el formulario.</dd>
 <dt>{{ htmlattrdef("required") }} {{ HTMLVersionInline("5") }}</dt>
 <dd>Este atributo indica que el usuario debe rellenar el contro con un valor antes de poder enviar el formulario.</dd>
 <dt>{{ htmlattrdef("rows") }}</dt>
 <dd>El número de líneas visibles en el control</dd>
 <dt>{{ htmlattrdef("selectionDirection") }} {{ HTMLVersionInline("5") }}</dt>
 <dd>La dirección en la que la selección ocurre dentro del control. Es "forward" si la selección ocurre de izquierda a derecha en una localización LTR, o  "backward" si la selección fue hecha en sentido contrario. Puede ser "none" si se desconoce la dirección.</dd>
 <dt>{{ htmlattrdef("selectionEnd") }}</dt>
 <dd>El índice del último caracter de la selección actual.</dd>
 <dt>{{ htmlattrdef("selectionStart") }}</dt>
 <dd>El índice del primer caracter de la selección actual.</dd>
 <dt>{{ htmlattrdef("spellcheck") }} {{ HTMLVersionInline(5) }}</dt>
 <dd>Un valor <code>true</code> en este atributo indica que el elemento necesita tener <code>checked</code> el corrector ortográfico y gramatical. El caloor <code>default</code> indica que el elemento va a comportarse de acuerdo al comportamiento por defecto, basado en el <code>spellcheck</code> del padre. El valor <code>false</code> indica que no se deben hacer esas comprobaciones.</dd>
 <dt>{{ htmlattrdef("wrap") }} {{ HTMLVersionInline("5") }}</dt>
 <dd>Indica como el control envuelve al texto. Los posibles valores son:
 <ul>
  <li><span style="font-family: courier new;">hard</span>: El navegador insertar automáticamente caracteres de nueva línea (CR+LF) para que ninguna línea tenga más anchura que la del control; el atributo  <code>cols</code> debe estar espeficicado.</li>
  <li><span style="font-family: courier new;">soft</span>: El navegador asegura que todas las nuevas líneas constan de la pareja de caracteres CR+LF , pero no insertar nuevas líneas adicionales.</li>
 </ul>

 <p><span style="font-family: courier new;">Soft</span> es el valor por defecto si no se especifica nada.</p>
 </dd>
</dl>

<h2 id="Interfaz_DOM">Interfaz DOM</h2>

<p>Este elemento implementa el interfaz <code><a href="/en/DOM/HTMLTextAreaElement" title="en/DOM/textarea">HTMLTextAreaElement</a></code> .</p>

<p>{{ gecko("2.0") }} introduce el soporte para textareas redimensionable. Esto se controla con la propiedad CSS {{ cssxref("resize") }} . Por defecto la posibilidad de redimiensionar el control está habilitada, pero puede ser explícitamente deshabilitada mediante el uso del siguiente CSS:</p>

<pre>textarea {
  resize: none;
}
</pre>

<h2 id="Interacción_con_CSS">Interacción con CSS</h2>

<p>En relación a CSS, un  <code>&lt;textarea&gt;</code>  es un <a href="https://developer.mozilla.org/en-US/docs/CSS/Replaced_element" title="/en-US/docs/CSS/Replaced_element">replaced element</a>. La especificación HTML no define dónde está el punto de referencia de un <code>&lt;textarea&gt;</code>. Así que los diferentes navegadores lo sitúan en diferentes posiciones. En los navegadores basados en Gecko, ese punto de referencia del <code>&lt;textarea&gt;</code> se sitúa en el punto de referencia de la primera línea del <code>&lt;textarea&gt;</code>,  en otro navegadores puede estár situado al final de la caja del <code>&lt;textarea&gt;</code> . Se recomienda no usar {{cssxref("vertical-align")}}<code>: baseline</code> , ya que obtendríamos un comportamiento no impredecible.</p>

<p>Un  <em>textarea</em> tiene dimensiones intrínsecas, como una imagen agrandada.</p>

<h2 id="Example" name="Example">Ejemplo</h2>

<h3 id="Contenido_HTML">Contenido HTML </h3>

<pre class="brush: html">&lt;textarea name="textarea" rows="10" cols="50"&gt;Write something here&lt;/textarea&gt;</pre>

<p>{{ EmbedLiveSample('Example','600','200') }}</p>

<h2 id="Specifications" name="Specifications">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentarios</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'the-button-element.html#the-textarea-element', '&lt;textarea&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#the-textarea-element', '&lt;textarea&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'interact/forms.html#h-17.7', '&lt;textarea&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_Navegadores">Compatibilidad en Navegadores</h2>

<div>


<p>{{Compat("html.elements.textarea")}}</p>
</div>



<h2 id="Ver_además">Ver además</h2>

<p>Otros elementos relacionados con formularios: {{ HTMLElement("form") }}, {{ HTMLElement("button") }}, {{ HTMLElement("datalist") }}, {{ HTMLElement("legend") }}, {{ HTMLElement("label") }}, {{ HTMLElement("select") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("output") }}, {{ HTMLElement("progress") }} and {{ HTMLElement("meter") }}.</p>

<p>{{ languages( { "fr": "fr/HTML/Element/textarea" } ) }}</p>

<p>{{HTMLRef}}</p>
