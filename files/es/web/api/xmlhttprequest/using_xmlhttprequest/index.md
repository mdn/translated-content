---
title: Utilizando XMLHttpRequest
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
---

{{APIRef("XMLHttpRequest")}}

En esta guía le echaremos un vistazo a cómo usar
{{domxref("XMLHttpRequest")}} para enviar solicitudes [HTTP](/es/docs/Web/HTTP)
con el objetivo de intercambiar datos entre el sitio web y el servidor.

Se incluyen ejemplos, tanto para los casos de uso comunes de `XMLHttpRequest`,
como para los más inusuales.

Para enviar una solicitud HTTP, cree un objeto `XMLHttpRequest`, abra una URL y
envíe la solicitud. Una vez que la transacción haya sido completada, el objeto
contendrá información útil tal como el cuerpo de la respuesta y el estado [HTTP
status](/es/docs/Web/HTTP/Status) del resultado.

```js
function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();
```

## Tipos de peticiones

Una petición realizada a través de `XMLHttpRequest` puede obtener los datos de una estas dos maneras,
de forma asíncrona o sincrónica. El tipo de petición viene dictado por el argumento opcional `async`
(el tercer argumento) que se establece en el método
{{domxref("XMLHttpRequest.open()")}}. Si este argumento es `true` o
no se especifica, la `XMLHttpRequest` se procesa de forma asíncrona, de lo contrario
el proceso se realiza de forma síncrona. Una discusión detallada y demostraciones de estos
de estos dos tipos de peticiones en la página [peticiones síncronas
y asíncronas](/es/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests). No utilice solicitudes sincrónicas fuera de los Web
Workers.

> **Nota:** A partir de Gecko 30.0 (Firefox 30.0 / Thunderbird 30.0 / SeaMonkey 2.27), las peticiones síncronas en el hilo principal han sido marcadas como obsoletas debido a
> los efectos negativos en la experiencia del usuario.

> **Nota:** La función constructora
> `XMLHttpRequest` no se limita a los documentos XML. Comienza con
> **"XML "** porque cuando se creó el formato principal que se utilizaba originalmente
> para el intercambio de datos asíncrono era XML.

## Manejando las respuestas

Hay varios tipos de [atributos de
respuesta](https://xhr.spec.whatwg.org/) definidos por la especificación del estándar para el
constructor {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}. Esto le dice
al cliente que realiza el `XMLHttpRequest` información importante sobre el estado
de la respuesta. Algunos casos en los que tratar con tipos de respuesta no textuales puede implicar alguna
manipulación y análisis como se describen en las siguientes secciones.

### Analizar y manipular la propiedad responseXML

Si utiliza `XMLHttpRequest` para obtener el contenido de un documento XML remoto, la propiedad
{{domxref("XMLHttpRequest.responseXML", "responseXML")}} será un objeto DOM
que contiene un documento XML analizado. Esto podría resultar difícil de manipular y analizar.
Principalmente hay cuatro formas de analizar este documento XML:

1. Usando [XPath](/es/docs/Web/XPath) para dirigir (o apuntar a) partes
   del mismo.
2. Manualmente [Analizar y
   serializar el XML](/es/docs/Web/Guide/Parsing_and_serializing_XML) a cadenas u objetos.
3. Usando {{domxref("XMLSerializer")}} para serializar **árboles DOM a cadenas o a
   archivos**.
4. {{jsxref("RegExp")}} se puede utilizar si siempre se conoce el contenido del documento XML
   de antemano. Es posible que desee eliminar los saltos de línea, si utiliza `RegExp` para
   escanear en lo que respecta a los saltos de línea. Sin embargo, este método es un "último recurso" ya que si el
   código XML cambia ligeramente, el método probablemente fallará.

> **Nota:** `XMLHttpRequest` ahora puede interpretar HTML por ti
> utilizando la propiedad {{domxref("XMLHttpRequest.responseXML", "responseXML")}}. Lea el
> artículo sobre [HTML
> en XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) para aprender como hacerlo.

### Procesamiento de una propiedad responseText que contiene un documento HTML

Si usas `XMLHttpRequest` para obtener el contenido de una página web HTML remota, la propiedad
{{domxref("XMLHttpRequest.responseText", "responseText")}} es una cadena
que contiene el HTML en bruto. Esto podría resultar difícil de manipular y analizar. Principalmente hay tres
tres formas de analizar y parsear esta cadena de HTML en bruto:

1. Utilizar la propiedad `XMLHttpRequest.responseXML` como se explica en el artículo
   [HTML en
   XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest).
2. Inyectar el contenido en el cuerpo de un [fragmento de documento](/es/docs/Web/API/DocumentFragment) mediante
   `fragment.body.innerHTML` y recorrer el DOM del fragmento.
3. {{jsxref("RegExp")}} puede utilizarse si siempre se conoce el contenido del HTML
   `responseText` de antemano. Es posible que desee eliminar los saltos de línea, si utiliza `RegExp` para
   escanear en lo que respecta a los saltos de línea. Sin embargo, este método es un "último recurso"
   ya que si el código HTML cambia ligeramente, el método probablemente fallará.

## Manejo de datos binarios

Aunque {{domxref("XMLHttpRequest")}} se utiliza normalmente para enviar y recibir
datos textuales, puede utilizarse para enviar y recibir contenido binario. Existen varios
métodos probados para forzar a la respuesta de un `XMLHttpRequest` para que envíe datos
binarios. Se trata de utilizar la función {{domxref("XMLHttpRequest.overrideMimeType",
  "overrideMimeType()")}} en el objeto `XMLHttpRequest` y es una
solución viable.

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", url);
// recuperar los datos sin procesar como una cadena binaria
oReq.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
```

Sin embargo, existen técnicas más modernas, ya que el
{{domxref("XMLHttpRequest.responseType", "responseType")}} admite ahora una
serie de tipos de contenido adicionales, lo que facilita el envío y la recepción de datos binarios.

Por ejemplo, considere este fragmento, que utiliza el `responseType` de
"`arraybuffer`" para obtener el contenido remoto en un objeto {{jsxref("ArrayBuffer")}}
que almacena los datos binarios en bruto.

```js
var oReq = new XMLHttpRequest();

oReq.onload = function (e) {
  var arraybuffer = oReq.response; // no responseText
  /* ... */
};
oReq.open("GET", url);
oReq.responseType = "arraybuffer";
oReq.send();
```

Para ver más ejemplos, consulte la página [Envío y
recepción de datos binarios](/es/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)

## Seguimiento del progreso

`XMLHttpRequest` proporciona la capacidad de escuchar varios eventos que pueden
ocurrir mientras se procesa la solicitud. Esto incluye notificaciones periódicas
del progreso, notificaciones de error, etc.

La implementación para la monitorización de eventos DOM [`progress`](/es/docs/Web/Reference/Events/progress) de transferencias `XMLHttpRequest`
sigue la [especificación de eventos de progreso](https://xhr.spec.whatwg.org/#interface-progressevent): estos
eventos implementan la interfaz {{domxref("ProgressEvent")}}. Los eventos reales que puedes monitorizar
para determinar el estado de una transferencia en curso son:

- [`progress`](/es/docs/Web/Reference/Events/progress)
  - : La cantidad de datos que se han recibido ha cambiado.
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : La transferencia se ha completado; todos los datos están ahora en el `response`.

```js
var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress);
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);

oReq.open();

// ...

// progreso de las transferencias del servidor al cliente (descargas)
function updateProgress(oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = (oEvent.loaded / oEvent.total) * 100;
    // ...
  } else {
    // No se puede calcular la información de progreso ya que el tamaño total es desconocido
  }
}

function transferComplete(evt) {
  console.log("La transferencia se ha completado.");
}

function transferFailed(evt) {
  console.log("Se ha producido un error al transferir el archivo.");
}

function transferCanceled(evt) {
  console.log("La transferencia ha sido cancelada por el usuario.");
}
```

Las líneas 3-6 añaden escuchadores de eventos para los distintos eventos que se envían al realizar una
transferencia de datos utilizando `XMLHttpRequest`.

> **Nota:** Tienes que añadir los escuchadores de eventos antes de
> llamar a `open()` en la petición. De lo contrario, los eventos `progress
> no se dispararán.

El manejador de eventos de progreso, especificado por la función `updateProgress()` en
este ejemplo, recibe el número total de bytes a transferir así como el número de
bytes transferidos hasta el momento en los campos `total` y `loaded` del evento.
Sin embargo, si el campo `lengthComputable` es falso, la longitud total
no se conoce y será cero.

Los eventos de progreso existen tanto para las transferencias de descarga como de subida. Los eventos de descarga
se disparan en el propio objeto `XMLHttpRequest`, como se muestra en el ejemplo anterior.
Los eventos de subida se disparan en el objeto `XMLHttpRequest.upload`, como se muestra
a continuación:

```js
var oReq = new XMLHttpRequest();

oReq.upload.addEventListener("progress", updateProgress);
oReq.upload.addEventListener("load", transferComplete);
oReq.upload.addEventListener("error", transferFailed);
oReq.upload.addEventListener("abort", transferCanceled);

oReq.open();
```

> **Nota:** Los eventos de progreso no están disponibles para el
> protocolo `file:`.

> **Nota:** A partir de Gecko 9.0, se puede confiar en que los eventos de progreso
> lleguen para cada trozo de datos recibidos, incluyendo el último trozo en los casos
> en los que se recibe el último paquete y se cierra la conexión antes de que se
> dispare el evento de progreso. En este caso, el evento de progreso se dispara automáticamente
> cuando se produce el evento de carga para ese paquete. Esto te permite ahora monitorizar
> de forma fiable el progreso observando únicamente el evento "progress".

> **Nota**: A partir de Gecko 12.0, si su evento de progreso es llamado con
> un `responseType` de "moz-blob", el valor de la respuesta es un
> {{domxref("Blob")}} que contiene los datos recibidos hasta el momento.

También se pueden detectar las tres condiciones de finalización de la carga (`abort`,
`load`, o `error`) utilizando el evento `loadend`:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "La transferencia ha terminado (aunque no sabemos si ha tenido éxito o no).",
  );
}
```

Ten en cuenta que no hay forma de estar seguros, a partir de la información recibida por el evento
de la información recibida por el evento `loadend`, en cuanto a la condición que causó la terminación de la operación;
sin embargo, puede utilizar esto para manejar las tareas que deben realizarse en todos los
escenarios de fin de transferencia.

## Envío de formularios y subida de archivos

Las instancias de `XMLHttpRequest` pueden utilizarse para enviar formularios de dos maneras:

- usando sólo AJAX
- utilizando la API {{domxref("FormData")}}

El uso de la API `FormData` es el más sencillo y rápido, pero tiene la
desventaja de que los datos recogidos no pueden ser [stringificados](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Utilizar sólo AJAX es más complejo, pero suele ser más flexible y potente.

### Usando nada más que `XMLHttpRequest`

El envío de formularios sin la API `FormData` no necesita de otras APIs para
la mayoría de los casos de uso. El único caso en el que necesita una API adicional es **si quiere
subir uno o más archivos**, donde se utiliza la API {{domxref("FileReader")}}.

#### Una breve introducción a los métodos de envío

Un html {{ HTMLElement("form") }} puede ser enviado de cuatro maneras:

- utilizando el método `POST` y estableciendo el atributo `enctype` a
  `application/x-www-form-urlencoded` (por defecto);
- utilizando el método `POST` y estableciendo el atributo `enctype` como
  `text/plain`;
- utilizando el método `POST` y estableciendo el atributo `enctype` como
  `multipart/form-data`;
- utilizando el método `GET` (en este caso el atributo `enctype` se
  será ignorado).

Consideremos ahora el envío de un formulario que contiene sólo dos campos, llamados
`foo` y `baz`. Si está utilizando el método `POST` el
servidor recibirá una cadena similar a uno de los tres ejemplos siguientes, dependiendo
dependiendo del tipo de codificación que esté utilizando:

- Método: `POST`; Tipo de codificación:
  `application/x-www-form-urlencoded` (por defecto):

  ```plain
  Content-Type: application/x-www-form-urlencoded

  foo=bar&baz=The+first+line.%0D%0AThe+second+line.%0D%0A
  ```

- Método: `POST`; Tipo de codificación: `text/plain`:

  ```plain
  Content-Type: text/plain

  foo=bar
  baz=The first line.
  The second line.
  ```

- Método: `POST`; Tipo de codificación:
  [`multipart/form-data`](/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data):

  ```plain
  Content-Type: multipart/form-data; boundary=---------------------------314911788813839

  -----------------------------314911788813839
  Content-Disposition: form-data; name="foo"

  bar
  -----------------------------314911788813839
  Content-Disposition: form-data; name="baz"

  The first line.
  The second line.

  -----------------------------314911788813839--
  ```

Sin embargo, si utiliza el método `GET`, se añadirá a la URL una cadena como la siguiente:

```plain
?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
```

#### Un pequeño framework vanilla

Todos estos efectos son realizados automáticamente por el navegador web cada vez que se envía un
{{HTMLElement("form")}}. Si quieres realizar los mismos efectos usando JavaScript tiene que
tiene que instruir al intérprete sobre _todo_. Por lo tanto, la forma de enviar formularios
en _puro_ AJAX es demasiado complejo para ser explicado aquí en detalle. Por esta razón,
aquí colocamos **un completo (aunque didáctico) framework**, capaz de utilizar las cuatro
formas de _enviar_, y de **subir archivos**:

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Envío de formularios con AJAX puro &ndash; MDN</title>
    <script type="text/javascript">
      "use strict";

      /*\
      |*|
      |*|  :: XMLHttpRequest.prototype.sendAsBinary() Polyfill ::
      |*|
      |*|  https://developer.mozilla.org/es/docs/DOM/XMLHttpRequest#sendAsBinary()
      \*/

      if (!XMLHttpRequest.prototype.sendAsBinary) {
        XMLHttpRequest.prototype.sendAsBinary = function (sData) {
          var nBytes = sData.length,
            ui8Data = new Uint8Array(nBytes);
          for (var nIdx = 0; nIdx < nBytes; nIdx++) {
            ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
          }
          /* enviar como ArrayBufferView...: */
          this.send(ui8Data);
          /* ...o como ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
        };
      }

      /*\
      |*|
      |*|  :: AJAX Framework de envío de formulario ::
      |*|
      |*|  https://developer.mozilla.org/es/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
      |*|
      |*|  Este framework está publicado bajo la licencia pública GNU, versión 3 o posterior.
      |*|  https://www.gnu.org/licenses/gpl-3.0-standalone.html
      |*|
      |*|  Sintaxis:
      |*|
      |*|   AJAXSubmit(HTMLFormElement);
      \*/

      var AJAXSubmit = (function () {
        function ajaxSuccess() {
          /* console.log("AJAXSubmit - ¡Éxito!"); */
          console.log(this.responseText);
          /* puedes obtener los datos serializados a través de la propiedad personalizada "submittedData": */
          /* console.log(JSON.stringify(this.submittedData)); */
        }

        function submitData(oData) {
          /* la petición AJAX... */
          var oAjaxReq = new XMLHttpRequest();
          oAjaxReq.submittedData = oData;
          oAjaxReq.onload = ajaxSuccess;
          if (oData.technique === 0) {
            /* el método es GET */
            oAjaxReq.open(
              "get",
              oData.receiver.replace(
                /(?:\?.*)?$/,
                oData.segments.length > 0 ? "?" + oData.segments.join("&") : "",
              ),
              true,
            );
            oAjaxReq.send(null);
          } else {
            /* el método es POST */
            oAjaxReq.open("post", oData.receiver, true);
            if (oData.technique === 3) {
              /* enctype es multipart/form-data */
              var sBoundary =
                "---------------------------" + Date.now().toString(16);
              oAjaxReq.setRequestHeader(
                "Content-Type",
                "multipart\/form-data; boundary=" + sBoundary,
              );
              oAjaxReq.sendAsBinary(
                "--" +
                  sBoundary +
                  "\r\n" +
                  oData.segments.join("--" + sBoundary + "\r\n") +
                  "--" +
                  sBoundary +
                  "--\r\n",
              );
            } else {
              /* enctype es application/x-www-form-urlencoded or text/plain */
              oAjaxReq.setRequestHeader("Content-Type", oData.contentType);
              oAjaxReq.send(
                oData.segments.join(oData.technique === 2 ? "\r\n" : "&"),
              );
            }
          }
        }

        function processStatus(oData) {
          if (oData.status > 0) {
            return;
          }
          /* ¡el formulario está ahora totalmente serializado! haz algo antes de enviarlo al servidor... */
          /* doSomething(oData); */
          /* console.log("AJAXSubmit - El formulario está ahora serializado. Enviando..."); */
          submitData(oData);
        }

        function pushSegment(oFREvt) {
          this.owner.segments[this.segmentIdx] += oFREvt.target.result + "\r\n";
          this.owner.status--;
          processStatus(this.owner);
        }

        function plainEscape(sText) {
          /* ¿Cómo debo tratar la codificación de un formulario text/plain?
       ¿Qué caracteres no están permitidos? Esto es lo que supongo..: */
          /* "4\3\7 - Einstein dijo E=mc2" ----> "4\\3\\7\ -\ Einstein\ dijo\ E\=mc2" */
          return sText.replace(/[\s\=\\]/g, "\\$&");
        }

        function SubmitRequest(oTarget) {
          var nFile,
            sFieldType,
            oField,
            oSegmReq,
            oFile,
            bIsPost = oTarget.method.toLowerCase() === "post";
          /* console.log("AJAXSubmit - Serializando formulario..."); */
          this.contentType =
            bIsPost && oTarget.enctype
              ? oTarget.enctype
              : "application\/x-www-form-urlencoded";
          this.technique = bIsPost
            ? this.contentType === "multipart\/form-data"
              ? 3
              : this.contentType === "text\/plain"
              ? 2
              : 1
            : 0;
          this.receiver = oTarget.action;
          this.status = 0;
          this.segments = [];
          var fFilter = this.technique === 2 ? plainEscape : escape;
          for (var nItem = 0; nItem < oTarget.elements.length; nItem++) {
            oField = oTarget.elements[nItem];
            if (!oField.hasAttribute("name")) {
              continue;
            }
            sFieldType =
              oField.nodeName.toUpperCase() === "INPUT" &&
              oField.hasAttribute("type")
                ? oField.getAttribute("type").toUpperCase()
                : "TEXT";
            if (sFieldType === "FILE" && oField.files.length > 0) {
              if (this.technique === 3) {
                /* enctype es multipart/form-data */
                for (nFile = 0; nFile < oField.files.length; nFile++) {
                  oFile = oField.files[nFile];
                  oSegmReq = new FileReader();
                  /* (propiedades personalizadas:) */
                  oSegmReq.segmentIdx = this.segments.length;
                  oSegmReq.owner = this;
                  /* (fin de las propiedades personalizadas) */
                  oSegmReq.onload = pushSegment;
                  this.segments.push(
                    'Content-Disposition: form-data; name="' +
                      oField.name +
                      '"; filename="' +
                      oFile.name +
                      '"\r\nContent-Type: ' +
                      oFile.type +
                      "\r\n\r\n",
                  );
                  this.status++;
                  oSegmReq.readAsBinaryString(oFile);
                }
              } else {
                /* enctype es application/x-www-form-urlencoded or text/plain or
             el método es GET: ¡los archivos no se enviarán! */
                for (
                  nFile = 0;
                  nFile < oField.files.length;
                  this.segments.push(
                    fFilter(oField.name) +
                      "=" +
                      fFilter(oField.files[nFile++].name),
                  )
                );
              }
            } else if (
              (sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") ||
              oField.checked
            ) {
              /* NOTA: esto enviará _todos_ los botones de envío. Detectar el correcto no es trivial. */
              /* el tipo de campo no es FILE o es FILE pero está vacío */
              this.segments.push(
                this.technique === 3 /* enctype es multipart/form-data */
                  ? 'Content-Disposition: form-data; name="' +
                      oField.name +
                      '"\r\n\r\n' +
                      oField.value +
                      "\r\n"
                  : /* enctype es application/x-www-form-urlencoded o text/plain el método es GET */
                    fFilter(oField.name) + "=" + fFilter(oField.value),
              );
            }
          }
          processStatus(this);
        }

        return function (oFormElement) {
          if (!oFormElement.action) {
            return;
          }
          new SubmitRequest(oFormElement);
        };
      })();
    </script>
  </head>
  <body>
    <h1>Envío de formularios con AJAX puro</h1>

    <h2>Utilizando el método GET</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Ejemplo de registro</legend>
        <p>
          Nombre: <input type="text" name="firstname" /><br />
          Apellido: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h2>Utilizando el método POST</h2>
    <h3>Enctype: application/x-www-form-urlencoded (por defecto)</h3>

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Ejemplo de registro</legend>
        <p>
          Nombre: <input type="text" name="firstname" /><br />
          Apellido: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: text/plain</h3>

    <form
      action="register.php"
      method="post"
      enctype="text/plain"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Ejemplo de registro</legend>
        <p>Tu nombre: <input type="text" name="user" /></p>
        <p>
          Tu mensaje:<br />
          <textarea name="message" cols="40" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: multipart/form-data</h3>

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Ejemplo de subida</legend>
        <p>
          Nombre: <input type="text" name="firstname" /><br />
          Apellido: <input type="text" name="lastname" /><br />
          Sexo:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Hombre</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Mujer</label><br />
          Contraseña: <input type="password" name="secret" /><br />
          ¿Qué prefieres?:
          <select name="image_type">
            <option>Libros</option>
            <option>Cine</option>
            <option>TV</option>
          </select>
        </p>
        <p>
          Envía tus fotos:
          <input type="file" multiple name="photos[]" />
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">Tengo una bicicleta</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">Tengo un coche</label>
        </p>
        <p>
          Descríbete:<br />
          <textarea name="description" cols="50" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

Para probar esto, cree una página llamada **register.php** (que es la
que se encuentra en el atributo `action` de estos formularios de muestra),
y ponga lo siguiente contenido _minimalista_:

```php
<?php
/* register.php */

header("Content-type: text/plain");

/*
NOTA: Nunca debe usar `print_r()` en scripts de producción, o
o datos enviados por el cliente sin sanearlos antes.
No sanearlos puede llevar a vulnerabilidades tipo _cross-site scripting_.
*/

echo ":: Datos recibidos a través de GET ::\n\n";
print_r($_GET);

echo "\n\n:: Datos recibidos a través de POST ::\n\n";
print_r($_POST);

echo "\n\n:: Datos recibidos \"sin procesar\" (text/plain encoding) ::\n\n";
if (isset($HTTP_RAW_POST_DATA)) { echo $HTTP_RAW_POST_DATA; }

echo "\n\n:: Archivos recibidos ::\n\n";
print_r($_FILES);
```

La sintaxis para activar este script es:

```js
AJAXSubmit(myForm);
```

> **Nota:** Este framework utiliza la API {{domxref("FileReader")}}
> para transmitir las cargas de archivos. Este es un API reciente y no está implementada en IE9 o
> inferiores. Por esta razón, la carga sólo en AJAX se considera **una técnica experimental**.
> Si no necesita subir archivos binarios, este framework funciona
> bien en la mayoría de los navegadores.

> **Nota:** La mejor manera de enviar contenido binario es a través de
> {{jsxref("ArrayBuffer", "ArrayBuffers")}} o {{domxref("Blob", "Blobs")}} junto con
> con el método {{domxref("XMLHttpRequest.send()", "send()")}} y posiblemente el
> método {{domxref("FileReader.readAsArrayBuffer()", "readAsArrayBuffer()")}} de la
> API `FileReader`. Pero, como el objetivo de este script es trabajar con un [stringifiable](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
> de datos en bruto, utilizamos el método {{domxref("XMLHttpRequest.sendAsBinary()", "sendAsBinary()")}}
> junto con el método {{domxref("FileReader.readAsBinaryString()", "readAsBinaryString()")}} de la API `FileReader`. Por lo tanto, el script anterior
> tiene sentido sólo cuando se trata de archivos pequeños. Si no tiene intención de
> de cargar contenido binario, considere utilizar la API `FormData`.

> **Nota:** El método no estándar `sendAsBinary`
> se considera obsoleto a partir de Gecko 31 (Firefox 31 / Thunderbird 31 / SeaMonkey 2.28) y se eliminará pronto.
> En su lugar se puede utilizar el método estándar `send(Blob data)`.

### Uso de los objetos FormData

El constructor {{domxref("FormData")}} permite recopilar un
conjunto de pares clave/valor para enviarlos mediante `XMLHttpRequest`. Su uso principal es para
enviar datos de formularios, pero también puede utilizarse independientemente de un formulario para transmitir
datos clave del usuario. Los datos transmitidos tienen el mismo formato que el método
del formulario para enviar los datos, si el tipo de codificación del formulario se establece como
"multipart/form-data". Los objetos FormData pueden utilizarse de varias maneras con un método
`XMLHttpRequest`. Para ver ejemplos y explicaciones de cómo se puede utilizar
FormData con XMLHttpRequests, consulte la sección [Utilizando objetos FormData](/es/docs/Web/API/FormData/Using_FormData_Objects).
Para fines didácticos aquí hay **una _traducción_ del [ejemplo anterior](#un_pequeño_framework_vanilla) transformado para usar la
API `FormData`**. Nótese la brevedad del código:

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" charset="UTF-8" />
    <title>Envío de formularios con FormData &ndash; MDN</title>
    <script>
      "use strict";

      function ajaxSuccess() {
        console.log(this.responseText);
      }

      function AJAXSubmit(oFormElement) {
        if (!oFormElement.action) {
          return;
        }
        var oReq = new XMLHttpRequest();
        oReq.onload = ajaxSuccess;
        if (oFormElement.method.toLowerCase() === "post") {
          oReq.open("post", oFormElement.action);
          oReq.send(new FormData(oFormElement));
        } else {
          var oField,
            sFieldType,
            nFile,
            sSearch = "";
          for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
            oField = oFormElement.elements[nItem];
            if (!oField.hasAttribute("name")) {
              continue;
            }
            sFieldType =
              oField.nodeName.toUpperCase() === "INPUT" &&
              oField.hasAttribute("type")
                ? oField.getAttribute("type").toUpperCase()
                : "TEXT";
            if (sFieldType === "FILE") {
              for (
                nFile = 0;
                nFile < oField.files.length;
                sSearch +=
                  "&" +
                  escape(oField.name) +
                  "=" +
                  escape(oField.files[nFile++].name)
              );
            } else if (
              (sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") ||
              oField.checked
            ) {
              sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
            }
          }
          oReq.open(
            "get",
            oFormElement.action.replace(
              /(?:\?.*)?$/,
              sSearch.replace(/^&/, "?"),
            ),
            true,
          );
          oReq.send(null);
        }
      }
    </script>
  </head>
  <body>
    <h1>Envío de formularios con FormData</h1>

    <h2>Utilizando el método GET</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Ejemplo de registro</legend>
        <p>
          Nombre: <input type="text" name="firstname" /><br />
          Apellido: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h2>Utilizando el método POST</h2>
    <h3>Enctype: application/x-www-form-urlencoded (por defecto)</h3>

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Ejemplo de registro</legend>
        <p>
          Nombre: <input type="text" name="firstname" /><br />
          Apellido: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: text/plain</h3>

    <p>La codificación text/plain no está permitida en la API de FormData.</p>

    <h3>Enctype: multipart/form-data</h3>

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Ejemplo de subida</legend>
        <p>
          Nombre: <input type="text" name="firstname" /><br />
          Apellido: <input type="text" name="lastname" /><br />
          Sexo:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Hombre</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Mujer</label><br />
          Contraseña: <input type="password" name="secret" /><br />
          ¿Qué prefieres?:
          <select name="image_type">
            <option>Libros</option>
            <option>Cine</option>
            <option>TV</option>
          </select>
        </p>
        <p>
          Envía tus fotos:
          <input type="file" multiple name="photos[]" />
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">Tengo una bicicleta</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">Tengo un coche</label>
        </p>
        <p>
          Descríbete:<br />
          <textarea name="description" cols="50" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

> **Nota:** Como hemos dicho, los objetos **{{domxref("FormData")}}
> no son objetos [stringifiable](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)**. Si quieres transformar en string los datos enviados, utiliza [el ejemplo anterior en _puro_-AJAX](#un_pequeño_framework_vanilla). Tenga
> en cuenta también que, aunque en este ejemplo hay algunos campos `file` {{HTMLElement("input") }}, **cuando se envía un formulario a través de la API `FormData`
> tampoco es necesario utilizar la API {{domxref("FileReader")}}**:
> los archivos se cargan y suben automáticamente.

## Obtener la fecha de la última modificación

```js
function getHeaderTime() {
  console.log(
    this.getResponseHeader("Last-Modified"),
  ); /* Una fecha GMTString válida o null */
}

var oReq = new XMLHttpRequest();
oReq.open(
  "HEAD" /* ¡utiliza HEAD si sólo necesitas las cabeceras! */,
  "yourpage.html",
);
oReq.onload = getHeaderTime;
oReq.send();
```

### Hacer algo cuando cambia la última fecha de modificación

Vamos a crear dos funciones:

```js
function getHeaderTime() {
  var nLastVisit = parseFloat(
    window.localStorage.getItem("lm_" + this.filepath),
  );
  var nLastModified = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(nLastVisit) || nLastModified > nLastVisit) {
    window.localStorage.setItem("lm_" + this.filepath, Date.now());
    isFinite(nLastVisit) && this.callback(nLastModified, nLastVisit);
  }
}

function ifHasChanged(sURL, fCallback) {
  var oReq = new XMLHttpRequest();
  oReq.open(
    "HEAD" /* ¡utiliza HEAD - ¡sólo necesitamos las cabeceras! */,
    sURL,
  );
  oReq.callback = fCallback;
  oReq.filepath = sURL;
  oReq.onload = getHeaderTime;
  oReq.send();
}
```

Y para probar:

```js
/* Probemos el fichero "yourpage.html"... */

ifHasChanged("yourpage.html", function (nModified, nVisit) {
  console.log(
    "¡La página '" +
      this.filepath +
      "' ha cambiado el " +
      new Date(nModified).toLocaleString() +
      "!",
  );
});
```

Si quieres saber **_si_ _la página actual_ ha cambiado**,
por favor, lee el artículo sobre {{domxref("document.lastModified")}}.

## Cross-site XMLHttpRequest

Los navegadores modernos admiten las peticiones cross-site implementando el estándar [Recursos compartidos de origen-cruzado](/es/docs/Web/HTTP/CORS) (CORS).
Siempre que el servidor esté configurado para permitir las peticiones desde el origen de su aplicación web,
`XMLHttpRequest` funcionará. En caso contrario, se lanzará una excepción `INVALID_ACCESS_ERR`.

## Evitar la caché

Un enfoque compatible con todos los navegadores para evitar la caché es añadir una marca de tiempo a
a la URL, asegurándose de incluir un "?" o "&" según corresponda. Por ejemplo:

```plain
http://foo.com/bar.html -> http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345
```

Como la caché local se indexa por URL, esto hace que cada petición sea única, por lo que
salta la caché.

Puedes ajustar automáticamente las URLs usando el siguiente código:

```js
var oReq = new XMLHttpRequest();

oReq.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
oReq.send(null);
```

## Seguridad

La manera recomendada para habilitar el cross-site scripting es utilizar la cabecera
cabecera HTTP `Access-Control-Allow-Origin` en la respuesta al
XMLHttpRequest.

### XMLHttpRequests que se detienen

Si concluye con una XMLHttpRequest que recibe `status=0` y
`statusText=null`, significa que no se ha permitido realizar la petición. Era
[`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent).
Una causa probable de esto es cuando el [origen
`XMLHttpRequest`](https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin) (en la creación de la XMLHttpRequest) ha cambiado cuando el XMLHttpRequest
es posterior a `open()`. Este caso puede darse, por ejemplo, cuando se tiene un
XMLHttpRequest que se dispara en un evento onunload para una ventana, el esperado
XMLHttpRequest se crea cuando la ventana a cerrar sigue ahí, y finalmente
enviar la petición (en otras palabras, `open()`) cuando esta ventana ha perdido su foco
y otra ventana toma el foco. La forma más eficaz de evitar este problema es
es establecer una escucha en el evento [`activate`](/es/docs/Web/Reference/Events/activate) de la nueva ventana que se activa una vez que la
ventana terminada tenga su evento [`unload`](/es/docs/Web/Reference/Events/unload) disparado.

## Workers

Establecer `overrideMimeType` no funciona desde un {{domxref("Worker")}}. Ver
[Error 678057 en Firefox](https://bugzil.la/678057) para más detalles. Otros navegadores pueden manejar esto de manera diferente.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

1. [MDN introducción a AJAX](/es/docs/Web/Guide/AJAX/Getting_Started)
2. [HTML en XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
3. [Control de acceso HTTP](/es/docs/Web/HTTP/CORS)
4. [XMLHttpRequest - REST y la experiencia de usuario enriquecida](https://www.peej.co.uk/articles/rich-user-experience.html)
5. [Documentación de Microsoft](https://msdn.microsoft.com/library/ms535874)
6. ["Uso del objeto XMLHttpRequest" (jibbering.com)](https://jibbering.com/2002/4/httprequest.html)
7. [El objeto `XMLHttpRequest`: Especificación WHATWG](https://xhr.spec.whatwg.org/)
