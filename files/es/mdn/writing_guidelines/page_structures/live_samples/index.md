---
title: Ejemplos ejecutables
slug: MDN/Writing_guidelines/Page_structures/Live_samples
---

{{MDNSidebar}}

MDN puede convertir ejemplos de código de los artículos a ejemplos ejecutables que el lector puede ver en acción. Estos ejemplos ejecutables pueden contener HTML, CSS, y JavaScript en cualquier combinación. Ten en cuenta que los ejemplos "ejecutables" _no son interactivos_; sin embargo, aseguran que el output coincida exactamente con el código de ejemplo, porque es generado por este.

## Como funciona el sistema de ejemplos ejecutables

El sistema de ejemplos ejecutables agrupa el código, lo une en un archivo HTML, procesa el HTML y entonces despliega el output en un {{HTMLElement("iframe")}}. Por lo tanto un ejemplo ejecutable consiste de dos partes:

- Un grupo de bloques de código
- La macro que (crea el frame o el link que) despliega el resultado de los bloques de código

Un "grupo" de bloques de código, en este contexto, es identificado por el ID de un header o de un bloque de contenido (tal como un {{HTMLElement("div")}}).

- Si el ID pertenece a un bloque de contenido, el grupo incluye todos los bloques de código que se encuentren entre las etiquetas de apertura y cierre del bloque de contenido de cuyo ID se usa.
- Si el ID pertenece a un header, el grupo incluye todos los bloques de código que estén bajo el header y antes del siguiente header en el mismo nivel. Ten en cuenta que se usan todos los códigos de bloque bajo sub-headers del header especificado; si este no es el efecto que deseas, mejor usa un ID de un bloque de contenido.

La macro usa un URL especial para extraer el código de ejemplo: `http://url-de-la-pagina$ejemplos/grupo-id`, donde grupo-id es el ID del header o del bloque de contenido donde se localiza el código. El frame resultante (o página) es sandboxed (entorno de pruebas), seguro, y técnicamente puede hacer cualquier cosa que funcione en la Web. Por supuesto, desde el punto de vista práctico, el código debe contribuir al tema de la página que lo contiene; cosas al azar ejecutándose en MDN serán removidas por la comunidad de editores.

> **Nota:** **Debes** usar el macro para presentar el output del ejemplo ejecutable. El editor de MDN quitará cualquier uso directo del elemento `<iframe>` por motivos de seguridad.

Cada bloque {{HTMLElement("pre")}} que contiene código para el ejemplo tiene una clase que indica si es código HTML, CSS, o JavaScript; estas son "brush: html", "brush: css", y "brush: js". Las clases deben estar en los bloques de código correspondientes para que el wiki pueda usarlos correctamente; afortunadamente, son agregadas automáticamente cuando usas la herramienta Syntax Highlighter de la barra de herramientas del editor.

El sistema de ejemplos ejecutables tiene muchas opciones disponibles, trataremos de ponerlas en terminos simples analizándolas de a poco.

### Macro de ejemplos ejecutables

Hay dos macros que puedes usar para desplegar ejemplos ejecutables:

- [`EmbedLiveSample`](/es/docs/Template:EmbedLiveSample) despliega el ejemplo ejecutable en un frame embebido dentro de la misma página
- [`LiveSampleLink`](/es/docs/Template:LiveSampleLink) crea un link que abre el ejemplo ejecutable en una página nueva

En muchos casos, tienes la posibilidad de agregar la macro [`EmbedLiveSample`](/es/docs/Template:EmbedLiveSample) o la [`LiveSampleLink`](/es/docs/Template:LiveSampleLink) con ¡poco o nada de trabajo adicional! Mientras el ejemplo pueda ser identificado por un ID de un header o esté en un bloque de contenido con un ID que puedas usar, simplemente agregar la macro será suficiente.

#### Macro EmbedLiveSample

```
 \{{EmbedLiveSample(<em>ID_del_bloque</em>, <em>longitud</em>, altura, <em>URL_de_captura_de_pantalla</em>, <em>pagina_slug</em>)}}
```

- ID_del_bloque
  - : Requerido: El ID del header o del bloque de contenido de donde se tomará el código. La mejor forma de asegurarte que tienes el ID correcto es revisar el URL de la sección en la tabla de contenidos de la página.
- longitud
  - : La longitud del {{HTMLElement("iframe")}} que se creará, especificada en `px`. Esto es opcional; una longitud razonable se usará si omites esto. Ten en cuenta que si quieres usar una longitud específica, _debes_ especificar el parámetro de altura también.
- altura
  - : La altura del {{HTMLElement("iframe")}} que se creará, especificada en `px`. Esto es opcional; una altura razonable se usará si omites esto. Ten en cuenta que si quieres usar una altura específica, _debes_ especificar el parámetro de longitud también.
- URL_de_captura_de_pantalla
  - : La URL de una captura de pantalla que muestre como se debe ver el ejemplo ejecutable. Esto es opcional, pero puede ser útil para nuevas tecnologías que pueden no funcionar en el navegador del usuario, para que puedan ver como se vería el ejemplo si fuera soportado por su navegador. Si incluyes este parámetro, la captura de pantalla se muestra junto al ejemplo ejectutable, con encabezados apropiados.
- pagina_slug
  - : El slug (nombre con "\_" reemplazando los espacios) de la página que contiene el ejemplo; esto es opcional, y si se omite, el ejemplo es extraido de la misma página donde se usa la macro.

#### Macro LiveSampleLink

```
 \{{LiveSampleLink(<em>ID_del_bloque</em>, <em>texto_del_enlace</em>)}}
```

- ID_del_bloque
  - : Requerido: El ID del encabezado o del bloque de contenido de donde se tomará el código. La mejor forma de asegurarte que tienes el ID correcto es revisar el URL de la sección en la tabla de contenidos de la página.
- texto_de_enlace
  - : Una cadena de texto para mostrar en el enlace.

## Usando el sistema de ejemplos ejecutables

La sección de abajo describe algunos de los casos de uso más comunes para el sistema de ejemplos ejecutables.

En todos estos casos, para ver los resultados del ejemplo ejecutable, debes hacer clic en **Guardar Cambios** en el editor (lo que te saca del modo edición). Debido a la reflexiba, naturaleza tipo [_Inception_](http://www.imdb.com/title/tt1375666/?ref_=nv_sr_1) de los ejemplos ejecutables, la funcionalidad de **Previsualizar Cambios** _no_ permite desplegar los ejemplos ejecutables.

### Convirtiendo snippets (trozos de código) en ejemplos ejecutables

Un uso común es tomar snippets existentes que ya se muestran en MDN y convertirlos ejemplos ejecutables.

#### Preparar el código

El primer paso es agregar snippets o asegurarse que los existentes están listos para ser usados como ejemplos ejecutables, en términos de contenido y marcadores. Los snippets, juntos, deben comprender un ejemplo completo y ejecutable. Por ejemplo, si el snippet existente solo muestra CSS, debes agregar el snippet de HTML para que el CSS funcione.

Cada pieza de código debe estar en un bloque {{HTMLElement("pre")}}, con un bloque separado para cada lenguaje, propiamente marcado con el lenguaje correspondiente. La mayoría de las veces, esto ya se hizo, pero vale la pena volver revisar para asegurarse que cada pieza de código está estructurado con la sintaxis correcta. A la derecha del ícono **PRE** en la barra de tareas hay un menú desplegable (herramienta: Syntax Highlighter) con varios lenguajes para los que MDN hace distinción de sintaxis. Establecer el lenguaje para la distinción de sintaxis del bloque también lo correlaciona con un lenguaje para los propósitos del sistema de ejemplos ejecutables.

> [!NOTE]
> Puedes tener más de un bloque para cada lenguaje; todos son concatenados juntos. Esto te permite tener una parte de código, seguida de una explicación de como funciona, luego otra parte de código, etc. Esto hace aun más fácil producir tutoriales y utilizar ejemplo ejecutables intercalados con texto que los explique.

Así que asegurate que la distinción de sintaxis de los bloques {{HTMLElement("pre")}} para tu código HTML, CSS, y/o JavaScript estén cada uno configurado para el lenguaje correcto, y estarás bien.

> [!NOTE]
> Al pegar contenido en MDN, se conciente que si pegas contenido formateado (incluyendo, por ejemplo, distinción de sintaxis en código copeado de otro sitio) puedes estar trayendo formatos o clases que no quieres y no necesitas. Ten cuidado de no hacer esto; si es necesario, revisa tu edición en modo fuente y elimina estos formatos y clases innecesarios (o revísalo antes de pegarlo, o usa la opción "Pegar como texto plano").

#### Insertar la macro de ejemplo ejecutable

Una vez que el código está en su lugar y propiamente configurado para identificar cada bloque de lenguaje, necesitas insertar la macro que crea el frame.

1. Haz clic en el botón **Insert Live Code Sample iFrame** en la barra de herramientas; luce así: ![](insert-live-sample-btn.png). Esto abre un cuadro de diálogo para configurar el frame de tu ejemplo ejecutable: ![](sample-finder.png)
2. Bajo **Document**, ingresa el título del artículo que contiene el ejemplo que deseas desplegar. Por default, es el artículo que estás editando, pero puedes escoger un artículo en otra parte de MDN. Esto hace posible reusar ejemplos en múltiples páginas si es necesario. (Si escribes un texto nuevo en este campo, aparecerá un menú de coincidencias parciales; selecciona el título de la página que desees.)
3. En el menú **Sections in Document**, selecciona la sección en el artículo que contiene los bloques de código del ejemplo que quieres desplegar.
4. Haz clic en el botón **OK** para generar e insertar la macro que crea el frame del ejemplo. La macro luce algo así:
   **\\{{ EmbedLiveSample('Live_sample_demo') }}**

### Agregando un nuevo ejemplo ejecutable

Si estás escribiendo una página nueva, y quieres insertar código que deseas mostrar como ejemplo ejecutable, ¡aun más del trabajo puede ser realizado por el editor para ti!

1. Haz clic el botón **Insert Code Sample Template** en la barra de herramientas, luce así: ![](/files/4265/live-sample-button.png). Esto presenta un simple cuadro de diálogo pidiéndote que nombres a tu ejemplo ejecutable:
   ![](insert-live-sample-template.png)
2. Ingresa el nombre del ejemplo; esto es usado como el header para el ejemplo. Asegúrate que tu título sea coherente con la pagína que escribes.
3. Haz clic en **OK**. Se creó un header nuevo con el título que elegiste, con sub-headers y bloques de código vacios para HTML, CSS y JavaScript.
4. Elimina cualquier sub-header y bloque de código que no necesites.
5. Ingresa el código que compone tu ejemplo en los bloques de código apropiados.
6. [Revisar convenciones](#conventions)

### Usando el Buscador de Ejemplos

Como se mencionó arriba, el buscador de Ejemplos se activa haciendo clic en el ícono **Insert Live Code Sample iFrame**. Desafortunadamente el Buscador de Ejemplos puede producir un macro que NO es usable sin editarse antes. Hay dos áreas problemáticas que deben revisarse con cuidado y editarse si es necesario.

1. Campo **Document**. Este campo buscará mientras escribes y presentará una lista de documentos que encajan con tu búsqueda. Pero la lista presentada NO incluirá sub-páginas. Por ejemplo, digamos que estás trabajando en la sub-página [Negative](/es/docs/Web/CSS/@counter-style/negative)de la página principal [@counter-style](/es/docs/Web/CSS/@counter-style). El Buscador de Ejemplos no encontrará Negative pero si la página principal @counter-style. Cuando se selecciona @counter-style el fondo cambia a color verde. Lee debajo el problema que esto crea.
2. **Sections in Document**. El menú desplegable Sections in Document puede no mostrar la sección que necesitas. Selecciona cualquiera, digamos Examples, y puede arreglarse con una simple edición.

Esto es lo que el Buscador de Ejemplos produce:

```
\{{ EmbedLiveSample('Examples', '', '', '', 'Web/CSS/@counter-style') }}
```

Esta macro no funcionará. El ID_de_bloque es Examples y debería ser Example en este caso (revisa la fuente del ID de esta sección para verificar cual ID_de_bloque necesitas usar). Igualmente pagina_slug es @counter-style y debería ser @counter-style/negative. Estas correcciones puede hacerse directamente en la página activando la edición.

Después de editar la macro ahora luce así:

```
\{{ EmbedLiveSample('Example', '', '', '', 'Web/CSS/@counter-style/negative') }}
```

Esta macro editada funcionará correctamente. Si la macro funciona correctamente verás el botón **Open in CodePen**. Una miniatura del ejemplo deberá aparecer encima del botón Open in CodePen. Si el botón está ahí pero no hay miniatura, espera unos minutos. Puede tormar un tiempo para que el servidor la genere.

## Encontrando ejemplos que necesitan actualización

Al buscar ejemplos existentes que actualizar, hay tres tipos principales de actualización que deseas hacer:

- Convertir un snippet no ejecutable en un ejemplo ejecutable.
- Corregir bugs en un ejemplo ejecutable existente.
- Mejorar un ejemplo ejecutable existente, o actualizar un ejemplo basándose en cambios tecnológicos.

> [!NOTE]
> Si encuentras artículos que necesitan ser actualizados para usar el sistema de ejemplos ejecutables, por favor agrega a la página la etiqueta "NeedsLiveSample".

### Encontrando ejemplos que necesitan convertirse a ejemplos ejecutables

MDN tiene montontes de ejemplos viejos que aun no usan el sistema de ejemplos ejecutables. Nuestra meta es actualizar la mayoría o todos para que sean ejemplos ejecutables.Esto aumentará la consistencia y la usabilidad. Es casi seguro que te encontrarás muchos de estos mientras usas MDN en el día a día; sin embargo, ¿cómo puedes encontrarlos si los buscas específicamente para actualizarlos? Desafortunadamente, no hay un modo fácil de hacer eso. Pero hay algunos consejos que te ayudarán a rastrearlos:

- Empieza por darle un vistazo a esto [lista de páginas etiquetadas con "NeedsLiveSample"](/es/docs/tag/NeedsLiveSample). Estas son las páginas que los usuarios han marcadado como que necesitan actualizarse. Deberías agregar esta etiqueta tu mismo, si ves una página que necesita ser actualizada para usar ejemplos ejecutables pero no tienes tiempo de arreglarla enseguida.
- Navega por ligas de documentación que es probable que incluyan ejemplos, como [JavaScript Guide](/es/docs/Web/JavaScript/Guide), [HTML documentation](/es/docs/Web/HTML), y [CSS reference](/es/docs/Web/CSS/Reference).
- Busca término como "[example](/es/search?q=example)" o "[sample](/es/search?q=sample)" y revisar los resultados para páginas que actualizar.

## Demo de ejemplo ejecutable

Esta sección es el resultado de usar la plantilla de ejemplo ejecutable no solo para crear el encabezado principal ("Live sample demo"), sino los sub-encabezador para nuestro contenido HTML, CSS y JavaScript. No estás limitado a un bloque para cada uno; además, no necesitan estar en algún orden partícular. ¡Mix and match!

Puedes eliminar cualquiera de estos que desees; si no necesitas scripts, elimina el encabezado y su bloque {{HTMLElement("pre")}}. También puedes eliminar el encabezado de un bloque de código ("HTML", "CSS", o "JavaScript"), ya que estos no son usados por la macro de ejemplo ejecutable.

Ahora que se ha insertado la plantilla, podemos agregar algo de código, e incluso algún texto explicativo.

### HTML

Este HTML crea un parágrafo y algunos bloques para ayudarnos a posicionar y formatear un mensaje.

```html
<p>Un simple ejemplo de sistema de ejemplo ejecutable en accion.</p>
<div class="box">
  <div id="item">¡Hola mundo!</div>
</div>
```

### CSS

El código CSS formatea el contenedor así como el mensaje.

```css
.box {
  width: 200px;
  height: 100 px;
  border-radius: 6px;
  background-color: #ffaabb;
}

#item {
  width: 100%;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
}
```

### JavaScript

Este código es muy simple. Todo lo que hace es agregar un manejador de evento al texto "¡Hola mundo!" que hace aparecer una alerta cuando se le hace clic.

```js
var el = document.getElementById("item");
el.onclick = function () {
  alert("¡Owww, deja de picarme!");
};
```

### Resultado

Aquí el resultado de ejecutar los bloques de código de arriba vía` \{{EmbedLiveSample('Live_sample_demo')}}`:

{{EmbedLiveSample('Live_sample_demo')}}

Aquí un enlace que resulta de llamar los bloques de código vía `\{{LiveSampleLink('Live_sample_demo', 'Live sample demo link')}}`:

{{LiveSampleLink('Live_sample_demo', 'Live sample demo link')}}

## Convenciones acerca de los ejemplos ejecutables

> [!NOTE]
> Esto es actual (Feb. 2016) en discusión en la lista de emails dev-mdc (ver [this thread](https://groups.google.com/forum/#!topic/mozilla.dev.mdc/49oqJAHFnWQ)). Cualquier entrada es bienvenida. Si esta nota persiste después de unos meses (Apr. 2016), por favor contactar al autor del primer email en este hilo para actualizar esta página.

- Orden de los bloques de código
  - : Al agregar un ejemplo ejecutable, los bloques de código deben ser organizados para que el primero corresponda al lenguaje principal (si hay uno). Por ejemplo, al agregar un ejemplo ejecutable para una referencia HTML, el primer bloque debe ser HTML, al agregar un ejemplo ejecutable para una referencia CSS, debe ser el de CSS y así.
- Nombrando los encabezados
  - : Cuando no hay ambigüedad (p.ej. el ejemplo está bajo una sección "Ejemplos"), los encabezados deben ser directos con el único nombre del lenguaje correspondiente: HTML, CSS, JavaScript, SVG, etc. (ver arriba). No deben usarse encabezados como "contenido HTML" o "contenido JavaScript". Sin embargo si un encabezado tan corto hace que el contenido no sea claro, uno puede usar un título más elaborado.
- Usando un bloque "Result"
  - : Después de los diferentes bloques de código, favor de usar un último bloque "Result" antes de usar macro `EmbedLiveSample` (ver arriba). De este modo, se hace más clara la semántica del ejemplo tanto para el lector como para cualquier herramienta que analice la página (p.ej. screen reader, web crawler).
