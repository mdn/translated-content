---
title: Referencia de Atributos HTML
slug: Web/HTML/Attributes
---

Los elementos en HTML tienen **atributos**; estos son valores adicionales que configuran los elementos o ajustan su comportamiento de diversas formas para cumplir los criterios de los usuarios.

## Lista de Atributos

<table class="standard-table">
    <thead>
     <tr>
      <th>Nombre del Atributo</th>
      <th>Elementos</th>
      <th>Descripción</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td><code>accept</code></td>
      <td>{{ HTMLElement("form") }}, {{ HTMLElement("input") }}</td>
      <td>Lista de tipos aceptados por el servidor, usualmente un tipo de archivo.</td>
     </tr>
     <tr>
      <td><code>accept-charset</code></td>
      <td>{{ HTMLElement("form") }}</td>
      <td>Lista de juegos de caracteres soportados.</td>
     </tr>
     <tr>
      <td><code>accesskey</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_Globales" title="/es/docs/Web/HTML/Atributos_Globales">Atributos Globales</a></td>
      <td>Define una tecla que activa o agrega un foco al elemento.</td>
     </tr>
     <tr>
      <td><code>action</code></td>
      <td>{{ HTMLElement("form") }}</td>
      <td>La URL del programa que procesa la información enviada en el formulario.</td>
     </tr>
     <tr>
      <td><code>align</code></td>
      <td>{{ HTMLElement("applet") }}, {{ HTMLElement("caption") }}, {{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}, {{ HTMLElement("hr") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("table") }}, {{ HTMLElement("tbody") }}, {{ HTMLElement("td") }}, {{ HTMLElement("tfoot") }} , {{ HTMLElement("th") }}, {{ HTMLElement("thead") }}, {{ HTMLElement("tr") }}</td>
      <td>Especifica el alineamiento horizontal del elemento.</td>
     </tr>
     <tr>
      <td><code>alt</code></td>
      <td>{{ HTMLElement("applet") }}, {{ HTMLElement("area") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}</td>
      <td>Texto alternativo en caso de que la imagen no se pueda mostrar.</td>
     </tr>
     <tr>
      <td><code>async</code></td>
      <td>{{ HTMLElement("script") }}</td>
      <td>Indica que el script debería ejecutarse asincrónicamente.</td>
     </tr>
     <tr>
      <td><code>autocomplete</code></td>
      <td>{{ HTMLElement("form") }}, {{ HTMLElement("input") }}</td>
      <td>Indica si los controles en este formulario pueden tener por defecto sus valores completados automáticamente por el navegador.</td>
     </tr>
     <tr>
      <td><code>autofocus</code></td>
      <td>{{ HTMLElement("button") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
      <td>El elemento debería recibir foco automáticamente después de haberse cargado la página.</td>
     </tr>
     <tr>
      <td><code>autoplay</code></td>
      <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
      <td>El audio o video debería empezar lo antes posible.</td>
     </tr>
     <tr>
      <td><code>autosave</code></td>
      <td>{{ HTMLElement("input") }}</td>
      <td>Previous values should persist dropdowns of selectable values across page loads.</td>
     </tr>
     <tr>
      <td><code>bgcolor</code></td>
      <td>{{ HTMLElement("body") }}, {{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}, {{ HTMLElement("marquee") }}, {{ HTMLElement("table") }}, {{ HTMLElement("tbody") }}, {{ HTMLElement("tfoot") }}, {{ HTMLElement("td") }}, {{ HTMLElement("th") }}, {{ HTMLElement("tr") }}</td>
      <td>
       <p>Color de fondo del elemento.</p>
       <div class="note">
       <p><strong>Nota:</strong> Este atributo se mantiene como referencia. Por favor usa la propiedad CSS {{ Cssxref("background-color") }} en su lugar.</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>border</code></td>
      <td>{{ HTMLElement("img") }}, {{ HTMLElement("object") }}, {{ HTMLElement("table") }}</td>
      <td>
       <p>El ancho del borde.</p>
       <div class="note">
       <p><strong>Nota:</strong> Este atributo se mantiene como referencia. Por favor usa la propiedad CSS {{ Cssxref("border") }} en su lugar.</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>buffered</code></td>
      <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
      <td>Contiene un rango de tiempo multimedia almacenado.</td>
     </tr>
     <tr>
      <td><code>challenge</code></td>
      <td>{{ HTMLElement("keygen") }}</td>
      <td>Cadena de desafío que se envía junto con la clave pública.</td>
     </tr>
     <tr>
      <td><code>charset</code></td>
      <td>{{ HTMLElement("meta") }}, {{ HTMLElement("script") }}</td>
      <td>Declara la codificación de caracteres de la página o del script.</td>
     </tr>
     <tr>
      <td><code>checked</code></td>
      <td>{{ HTMLElement("command") }}, {{ HTMLElement("input") }}</td>
      <td>Indica que el elemento debería estar marcado al cargar la página.</td>
     </tr>
     <tr>
      <td><code>cite</code></td>
      <td>{{ HTMLElement("blockquote") }}, {{ HTMLElement("del") }}, {{ HTMLElement("ins") }}, {{ HTMLElement("q") }}</td>
      <td>Contiene una URL que apunta a la fuente de la cita o cambio.</td>
     </tr>
     <tr>
      <td><code>class</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Usualmente empleado con CSS para aplicar estilos a elementos con propiedades en comun.</td>
     </tr>
     <tr>
      <td><code>code</code></td>
      <td>{{ HTMLElement("applet") }}</td>
      <td>Especifica la URL del archivo de tipo applet a ser cargado y ejecutado.</td>
     </tr>
     <tr>
      <td><code>codebase</code></td>
      <td>{{ HTMLElement("applet") }}</td>
      <td>Este atributo contiene la URL absoluta o relativa del directorio donde los archivos de applets (.class) referenciados en el codigo se encuentran almacenados.</td>
     </tr>
     <tr>
      <td><code>color</code></td>
      <td>{{ HTMLElement("basefont") }}, {{ HTMLElement("font") }}, {{ HTMLElement("hr") }}</td>
      <td>
       <p>Este atributo establece el color de texto utilizando un nombre de color o en formato hexadecimal #RRGGBB.</p>
       <div class="note">
       <p><strong>Nota:</strong> Este atributo se mantiene como referencia. Por favor usa la propiedad CSS {{ Cssxref("color") }} en su lugar.</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>cols</code></td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Define el número de columnas en un área de texto.</td>
     </tr>
     <tr>
      <td><code>colspan</code></td>
      <td>{{ HTMLElement("td") }}, {{ HTMLElement("th") }}</td>
      <td>Define el número de columnas que una celda debe contener.</td>
     </tr>
     <tr>
      <td><code>content</code></td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>Un valor asociado con <code>http-equiv</code> o <code>name</code> dependiendo del contexto.</td>
     </tr>
     <tr>
      <td><code>contenteditable</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Indica si el contenido del elemento es editable.</td>
     </tr>
     <tr>
      <td><code>contextmenu</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Define el ID del elemento {{ HTMLElement("menu") }} que servira como menú de contexto para otro elemento.</td>
     </tr>
     <tr>
      <td><code>controls</code></td>
      <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
      <td>Indica si el navegador debe mostrar controles de reproduccion al usuario.</td>
     </tr>
     <tr>
      <td><code>coords</code></td>
      <td>{{ HTMLElement("area") }}</td>
      <td>Un conjunto de valores que especifican las coordenadas del area.</td>
     </tr>
     <tr>
      <td><code>data</code></td>
      <td>{{ HTMLElement("object") }}</td>
      <td>Especifica la URL del recurso.</td>
     </tr>
     <tr>
      <td><code>data-*</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Permite asociar atributos presonalizados a un elemento HTML.</td>
     </tr>
     <tr>
      <td><code>datetime</code></td>
      <td>{{ HTMLElement("del") }}, {{ HTMLElement("ins") }}, {{ HTMLElement("time") }}</td>
      <td>Indica la fecha y hora asociadas con el elemento.</td>
     </tr>
     <tr>
      <td><code>default</code></td>
      <td>{{ HTMLElement("track") }}</td>
      <td>Indica que la pista debe estar habilitada a menos que las preferencias del usuario indiquen algo diferente.</td>
     </tr>
     <tr>
      <td><code>defer</code></td>
      <td>{{ HTMLElement("script") }}</td>
      <td>Indica que el código debe ser ejecutado despues de que la página este cargada.</td>
     </tr>
     <tr>
      <td><code>dir</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Define la dirección del texto. Los valores permitidos son ltr (Izquierda-a-Derecha) o rtl (Derecha-a-Izquierda).</td>
     </tr>
     <tr>
      <td><code>dirname</code></td>
      <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
      <td>Indica la dirección del texto asociada con el elemento al momento de enviar el formulario.</td>
     </tr>
     <tr>
      <td><code>disabled</code></td>
      <td>{{ HTMLElement("button") }}, {{ HTMLElement("command") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
      <td>Indica si el usuario puede interactuar con el elemento.</td>
     </tr>
     <tr>
      <td><code>download</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>Indica que el hipervínculo es utilizado para descargar un recurso.</td>
     </tr>
     <tr>
      <td><code>draggable</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Define si el elemento puede ser arrastrado.</td>
     </tr>
     <tr>
      <td><code>dropzone</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Indica que el elemento acepta contenido soltado en el mismo.</td>
     </tr>
     <tr>
      <td><code>enctype</code></td>
      <td>{{ HTMLElement("form") }}</td>
      <td>Define el tipo de contenido del formulario cuando el <code>método</code> del mismo es POST.</td>
     </tr>
     <tr>
      <td><code>for</code></td>
      <td>{{ HTMLElement("label") }}, {{ HTMLElement("output") }}</td>
      <td>Describe elementos que pertenecen a éste.</td>
     </tr>
     <tr>
      <td><code>form</code></td>
      <td>{{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("label") }}, {{ HTMLElement("meter") }}, {{ HTMLElement("object") }}, {{ HTMLElement("output") }}, {{ HTMLElement("progress") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
      <td>Indica el formulario al que pertenece el elemento.</td>
     </tr>
     <tr>
      <td><code>formaction</code></td>
      <td>{{ HTMLElement("input") }}, {{ HTMLElement("button") }}</td>
      <td>Indica la acción del elemento, anulando la acción definida en {{ HTMLElement("form") }}.</td>
     </tr>
     <tr>
      <td><code>headers</code></td>
      <td>{{ HTMLElement("td") }}, {{ HTMLElement("th") }}</td>
      <td>IDs de los elementos <code>&lt;th&gt;</code> que aplican a este elemento.</td>
     </tr>
     <tr>
      <td><code>height</code></td>
      <td>{{ HTMLElement("canvas") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("object") }}, {{ HTMLElement("video") }}</td>
      <td>
       <p>Especifica la altura de los elementos enumerados aquí. Para todos los demás elementos, usa la propiedad CSS {{cssxref("height")}} en su lugar.</p>
       <div class="note">
       <p><strong>Nota:</strong> En algunos casos, como los {{ HTMLElement("div") }}, este es un atributo de referencia, en donde debes usar la propiedad CSS {{ Cssxref("height") }} en su lugar.</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>hidden</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Evita la prestación del elemento dado, manteniendo los elementos secundarios, p.ej. los elementos de script</td>
     </tr>
     <tr>
      <td><code>high</code></td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Indica el menor valor del rango alto.</td>
     </tr>
     <tr>
      <td><code>href</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("base") }}, {{ HTMLElement("link") }}</td>
      <td>La URL de un recurso asociado.</td>
     </tr>
     <tr>
      <td><code>hreflang</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("link") }}</td>
      <td>Especifica el lenguaje del recurso asociado.</td>
     </tr>
     <tr>
      <td><code>http-equiv</code></td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>Indica una directiva que puede alterar el comportamiento de la pagina y como es leida por los exploradores.</td>
     </tr>
     <tr>
      <td><code>icon</code></td>
      <td>{{ HTMLElement("command") }}</td>
      <td>
       <p>Especifica una imagen relacionada con el comando.</p>
       <div class="note">
       <p><strong>Note:</strong> El elemento {{ HTMLElement("command") }} es obsoleto y no se recomienda su uso.</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>id</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Identificador el elemento para acceder al mismo desde CSS o Javascript, este indicador debe ser unico para cada elemento.</td>
     </tr>
     <tr>
      <td><code>ismap</code></td>
      <td>{{ HTMLElement("img") }}</td>
      <td>Indica que la imagen es parte de un mapa de imagen del servidor.</td>
     </tr>
     <tr>
      <td><code>itemprop</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Indica que el elemento contiene el valor de la propiedad especificada de un conjunto.</td>
     </tr>
     <tr>
      <td><code>keytype</code></td>
      <td>{{ HTMLElement("keygen") }}</td>
      <td>
       <p>Especifica el tipo de clave generada.</p>
       <div class="note">
       <p><strong>Nota:</strong> RSA es el valor por defecto.</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>kind</code></td>
      <td>{{ HTMLElement("track") }}</td>
      <td>Specifies the kind of text track.</td>
     </tr>
     <tr>
      <td><code>label</code></td>
      <td>{{ HTMLElement("track") }}</td>
      <td>Especifica el título de la pista con un formato legible por el usuario.</td>
     </tr>
     <tr>
      <td><code>lang</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Define el lenguaje utilizado en el elemento.</td>
     </tr>
     <tr>
      <td><code>language</code></td>
      <td>{{ HTMLElement("script") }}</td>
      <td>Define el lenguage (de programación) utilizado en el elemento.</td>
     </tr>
     <tr>
      <td><code>list</code></td>
      <td>{{ HTMLElement("input") }}</td>
      <td>Identifica una serie de valores predefinidos para ser sugeridos al usuario.</td>
     </tr>
     <tr>
      <td><code>loop</code></td>
      <td>{{ HTMLElement("audio") }}, {{ HTMLElement("bgsound") }}, {{ HTMLElement("marquee") }}, {{ HTMLElement("video") }}</td>
      <td>Indica si el medio debe volver a ser reproducido desde el principio al llegar al final.</td>
     </tr>
     <tr>
      <td><code>low</code></td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Indica el valor mas alto del rango bajo.</td>
     </tr>
     <tr>
      <td><code>manifest</code></td>
      <td>{{ HTMLElement("html") }}</td>
      <td>Especifica la URL del manifiesto de cache para el documento.</td>
     </tr>
     <tr>
      <td><code>max</code></td>
      <td>{{ HTMLElement("input") }}, {{ HTMLElement("meter") }}, {{ HTMLElement("progress") }}</td>
      <td>Indica el máximo valor aceptado.</td>
     </tr>
     <tr>
      <td><code>maxlength</code></td>
      <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
      <td>Define el mayor número de caracteres aceptados.</td>
     </tr>
     <tr>
      <td><code>media</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("link") }}, {{ HTMLElement("source") }}, {{ HTMLElement("style") }}</td>
      <td>Da un indicio del tipo de medio para el cual el recurso vinculado fue creado.</td>
     </tr>
     <tr>
      <td><code>method</code></td>
      <td>{{ HTMLElement("form") }}</td>
      <td>Define el método <a href="/es/docs/Web/HTTP">HTTP</a> a emplear para enviar el formulario. Puede ser <code>GET</code> (predeterminado) o <code>POST</code>.</td>
     </tr>
     <tr>
      <td><code>min</code></td>
      <td>{{ HTMLElement("input") }}, {{ HTMLElement("meter") }}</td>
      <td>Indica el valor mínimo aceptado.</td>
     </tr>
     <tr>
      <td><code>multiple</code></td>
      <td>{{ HTMLElement("input") }}, {{ HTMLElement("select") }}</td>
      <td>Indica si múltiples valores pueden ser ingresados.</td>
     </tr>
     <tr>
      <td><code>muted</code></td>
      <td>{{ HTMLElement("video") }}</td>
      <td>Indica si el audio será silenciado inicialmente al cargar la página.</td>
     </tr>
     <tr>
      <td><code>name</code></td>
      <td>{{ HTMLElement("button") }}, {{ HTMLElement("form") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("object") }}, {{ HTMLElement("output") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}, {{ HTMLElement("map") }}, {{ HTMLElement("meta") }}, {{ HTMLElement("param") }}</td>
      <td>Nombre del elemento. Por ejemplo utilizado por el servidor para identificar los campos en el envio de formularios.</td>
     </tr>
     <tr>
      <td><code>novalidate</code></td>
      <td>{{ HTMLElement("form") }}</td>
      <td>Este atributo indica que el formulario no debe ser validado cuando se envíe.</td>
     </tr>
     <tr>
      <td><code>open</code></td>
      <td>{{ HTMLElement("details") }}</td>
      <td>Indica si los detalles de la página seran mostrados cuando cargue la misma.</td>
     </tr>
     <tr>
      <td><code>optimum</code></td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Indica el valor numérico óptimo.</td>
     </tr>
     <tr>
      <td><code>pattern</code></td>
      <td>{{ HTMLElement("input") }}</td>
      <td>Define una expresion regular con la cual el valor del elemento debe ser validado.</td>
     </tr>
     <tr>
      <td><code>ping</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>Indica si se enviara un ping o notificacion a la URL del recurso cuando el usuario utlize el vinculo.</td>
     </tr>
     <tr>
      <td><code>placeholder</code></td>
      <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
      <td>Proporciona una sugerencia al usuario de lo que puede ser introducido en el campo.</td>
     </tr>
     <tr>
      <td><code>poster</code></td>
      <td>{{ HTMLElement("video") }}</td>
      <td>Una URL que indica un cuadro a mostrar hasta que el usuario reproduzca o navegue en el video.</td>
     </tr>
     <tr>
      <td><code>preload</code></td>
      <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
      <td>Indica si el recurso o partes del mismo deben ser precargadas.</td>
     </tr>
     <tr>
      <td>pubdate</td>
      <td>{{ HTMLElement("time") }}</td>
      <td>Indica si esta fecha y tiempo concuerda con la fecha y tiempo del {{ HTMLElement("article") }} mas cercano (ancestro).</td>
     </tr>
     <tr>
      <td><code>radiogroup</code></td>
      <td>{{ HTMLElement("command") }}</td>
      <td>
       <p>Indica los nombres de los comandos de tipo radio, que seran alternados si el comando en si es alternado. Este atributo debe ser omitido si el tipo de comando no es radio.</p>
       <div class="note">
       <p><strong>Note:</strong> El elemento {{ HTMLElement("command") }} es obsoleto y no se recomienda su uso.</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>readonly</code></td>
      <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
      <td>Indica si el elemento puede ser editado por el usuario.</td>
     </tr>
     <tr>
      <td><code>rel</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("link") }}</td>
      <td>Especifica la relación entre el objeto destino y el objeto enlace.</td>
     </tr>
     <tr>
      <td><code>required</code></td>
      <td>{{ HTMLElement("input") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
      <td>Indica si se requiere rellenar o no este elemento.</td>
     </tr>
     <tr>
      <td><code>reversed</code></td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>Indica si la lista debe ser mostrada en orden descendente en vez de ascendente.</td>
     </tr>
     <tr>
      <td><code>rows</code></td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Define el número de filas en un área de texto.</td>
     </tr>
     <tr>
      <td><code>rowspan</code></td>
      <td>{{ HTMLElement("td") }}, {{ HTMLElement("th") }}</td>
      <td>Define el número de filas que una celda de una tabla debe abarcar.</td>
     </tr>
     <tr>
      <td><code>sandbox</code></td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>Lista de restricciones a ser desactivadas en el iframe.</td>
     </tr>
     <tr>
      <td><code>scope</code></td>
      <td>{{ HTMLElement("th") }}</td>
      <td>Define las celdas que la cabecera definió en este elemento.</td>
     </tr>
     <tr>
      <td><code>scoped</code></td>
      <td>{{ HTMLElement("style") }}</td>
      <td>Indica si el estilo será aplicado sólo al elemento inmediato superior (padre). de no ser definido, el estilo se aplicara de forma global.</td>
     </tr>
     <tr>
      <td><code>seamless</code></td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>Indica si el iframe debe ser cargado como parte del mismo documento.</td>
     </tr>
     <tr>
      <td><code>selected</code></td>
      <td>{{ HTMLElement("option") }}</td>
      <td>Define un valor que será seleccionado al cargar la página.</td>
     </tr>
     <tr>
      <td><code>shape</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>Define una región seleccionable para hacer hipervínculos asociados con una forma asociada a una figura para crear un mapa. Los valores para este atributo son: <code>circle</code>, <code>defaul</code>, <code>plygon</code> y <code>rect</code>.</td>
     </tr>
     <tr>
      <td><code>size</code></td>
      <td>{{ HTMLElement("input") }}, {{ HTMLElement("select") }}</td>
      <td>Define el ancho del elemento (en píxeles). Si el atributo del elemento es del <code>tipo</code> <code>text</code> o <code>password</code> entonces es el número de caracteres.</td>
     </tr>
     <tr>
      <td><code>sizes</code></td>
      <td>{{ HTMLElement("link") }}, {{ HTMLElement("img") }}, {{ HTMLElement("source") }}</td>
      <td>Define los tamaños en los que el icono puede ser cargado.</td>
     </tr>
     <tr>
      <td><code>span</code></td>
      <td>{{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}</td>
      <td>Indica el número de columnas que se agrupan.</td>
     </tr>
     <tr>
      <td><code>spellcheck</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Indica si se permite la corrección ortográfica para el elemento.</td>
     </tr>
     <tr>
      <td><code>src</code></td>
      <td>{{ HTMLElement("audio") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("script") }}, {{ HTMLElement("source") }}, {{ HTMLElement("track") }}, {{ HTMLElement("video") }}</td>
      <td>La URL del contenido integrable.</td>
     </tr>
     <tr>
      <td><code>srcdoc</code></td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>Especifica el contenido de la página incluida.</td>
     </tr>
     <tr>
      <td><code>srclang</code></td>
      <td>{{ HTMLElement("track") }}</td>
      <td>Especifica el lenguaje del contenido de la pista.</td>
     </tr>
     <tr>
      <td><code>srcset</code></td>
      <td>{{ HTMLElement("img") }}</td>
      <td> </td>
     </tr>
     <tr>
      <td><code>start</code></td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>Define el número inicial de la lista (si es diferente a 1).</td>
     </tr>
     <tr>
      <td><code>step</code></td>
      <td>{{ HTMLElement("input") }}</td>
      <td>Indica el valor del incremento para un valor numerico o de fecha.</td>
     </tr>
     <tr>
      <td><code>style</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Define los estilos CSS que anulan los estilos establecidos previamente.</td>
     </tr>
     <tr>
      <td><code>summary</code></td>
      <td>{{ HTMLElement("table") }}</td>
      <td>
       <p>Contiene una descripción del contenido de la tabla.</p>
       <p>Nota: Este atributo ha sido desaprovado, se recomienda incluir un elemento {{ HTMLElement("caption") }} en la tabla.</p>
      </td>
     </tr>
     <tr>
      <td><code>tabindex</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Sobrescribe el orden de tabulacion del navegador y usa el especificado.</td>
     </tr>
     <tr>
      <td><code>target</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("base") }}, {{ HTMLElement("form") }}</td>
      <td>
       <p>Especifica el marco destino en un vínculo.</p>
       <p>Valores especiales: "_blank" indica una nueva ventana, "_parent" indica el marco padre del marco que contiene el código fuente, "_self" indica el marco donde está el código fuente y "_top" indica la ventana completa del navegador.</p>
      </td>
     </tr>
     <tr>
      <td><code>title</code></td>
      <td><a href="/es/docs/Web/HTML/Atributos_globales" title="/es/docs/Web/HTML/Atributos globales">Atributo Global</a></td>
      <td>Texto a ser mostrado cuando el cursor esté sobre el elemento.</td>
     </tr>
     <tr>
      <td><code>type</code></td>
      <td>{{ HTMLElement("button") }}, {{ HTMLElement("input") }}, {{ HTMLElement("command") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("object") }}, {{ HTMLElement("script") }}, {{ HTMLElement("source") }}, {{ HTMLElement("style") }}, {{ HTMLElement("menu") }}</td>
      <td>Define el tipo de elemento.</td>
     </tr>
     <tr>
      <td><code>usemap</code></td>
      <td>{{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("object") }}</td>
      <td>
       <p>Indica la URL parcial de un image map asociado con el elemento.</p>
       <div class="note">
       <p><strong>Note:</strong> Este atributo no puede ser usado si el elemento {{ HTMLElement("img") }} desciende de un {{ HTMLElement("button") }} o {{ HTMLElement("a") }}</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>value</code></td>
      <td>{{ HTMLElement("button") }}, {{ HTMLElement("option") }}, {{ HTMLElement("input") }}, {{ HTMLElement("li") }}, {{ HTMLElement("meter") }}, {{ HTMLElement("progress") }}, {{ HTMLElement("param") }}</td>
      <td>Define el valor predeterminado a ser mostrado al cargar la página.</td>
     </tr>
     <tr>
      <td><code>width</code></td>
      <td>{{ HTMLElement("canvas") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("object") }}, {{ HTMLElement("video") }}</td>
      <td>
       <p>Para los elementos enumerados aquí, esto establece el ancho del elemento.</p>
       <div class="note">
       <p><strong>Nota:</strong> En algunos casos, como los {{ HTMLElement("div") }}, este es un atributo de referencia, en donde debes usar la propiedad CSS {{ Cssxref("height") }} en su lugar.</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>wrap</code></td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Indica la forma en la cual el texto debe ser envuelto.</td>
     </tr>
    </tbody>
   </table>

## Contenido versus atributos IDL

En HTML, la mayoria de los atributos tiene dos caras: el **atributo de contenido** y el **atributo IDL**

El atributo de contenido es aquel que se define desde el contenido (Codigo HTML) y puedes definirlo u obtenerlo con {{domxref("element.setAttribute()")}} o {{domxref("element.getAttribute()")}}. El atributo de contenido es siempre un string incluso cuando el valor esperado en un integer. Por ejemplo, para definir el maxlength de un {{HTMLElement("input")}} a 42 usando el atributo de contenido, se debe llamar a `setAttribute("maxlength", "42")` en ese elemento.

El atributo IDL, tambien conocido como propiedad JavaScript. Estos son atributos que se pueden leer o definir usando JavaScript como `element.foo.`. El atributo IDL siempre va a usar (pero puede transformarse) en el atributo de contenido subyacente para retornar un valor cuando lo obtiene y lo guarda en el atributo de contenido cuando es definido. En otras palabras el atributo IDL, en esencia, refleja los atributos de contenido.

La mayoria del tiempo, los atributos IDL pueden retornar sus valores como realmente son usados. Por ejemplo, el `type` por defecto para los elementos {{HTMLElement("input")}} es "texto", entonces si defines `input.type="foobar"`, el elemento `<input>` sera de tipo texto (en apariencia y comportamiento) pero el valor del Atributo de contenido "type" sera "foobat". De cualquier manera, el `type` del atributo IDL retornara el string "text".

Los atributos IDL no son siempre strings; por ejemplo, `input.maxlength` es un numero (marcado como long). Cuando se usan atributos IDL, lees o defines valores del tipo deseado, entonces `input.maxlength` siempre retornara un numero y cuando definas `input,maxlength`, esperara un numero. Si se le entrega otro tipo, se convierte antomaticamente a numero como se especifica en las reglas del estandar de JavaScript para conversiones de tipo.

Los atributos IDL pueden [reflejar otros tipos](http://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes) como un long sin asignacion, URL's, booleanos, etc. Desafortunadamente no hay reglas claras y el comportamiento que los atributos IDL en conjunto con sus respectivos atributos de contenido depende del mismo atributo. La mayoria del tiempo, siguen [las reglas de diseño en la especificacion](http://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes), pero algunas veces no lo hacen. Las especificaciones HTML tratan de ser lo mas amigables para el dasarrollador como es posible, pero por varias razones (mayormente historicas), algunos aributos se comportan de forma extraña (`select.size`, por ejemplo) y debes leer las especificaciones para comprender como éste se comporta exactamente.

## Ver Tambien

- [Elementos](/es/docs/Web/HTML/Elemento)
