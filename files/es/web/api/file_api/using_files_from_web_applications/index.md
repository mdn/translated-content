---
title: Utilizar ficheros desde aplicaciones web
slug: Web/API/File_API/Using_files_from_web_applications
---

El uso de la API File añadida al DOM en HTML5, ahora hace posible que la página web solicite al usuario que seleccione archivos locales y, a continuación, leer el contenido de esos archivos. Esta selección se puede hacer, ya sea usando un elemento {{HTMLElement ( "input")}} de HTML o mediante arrastrar y soltar.

## Selección de ficheros utilizando HTML

Seleccionar solo un fichero usando la API File es sencillo:

```
<input type="file" id="input" onchange="handleFiles(this.files)">
```

Cuando el usuario elige el fichero, la función `handleFiles()` es llamada con un objeto [`FileList`](/en/DOM/FileList)el cual a su vez contiene un objeto [`File`](/en/DOM/File) que representa el fichero elegido por el usuario.

Si se prefiere permitir al usuario elegir varios ficheros, entonces se pone el atributo `multiple` en el elemento `input:`

```
<input type="file" id="input" multiple="true" onchange="handleFiles(this.files)">
```

En este caso, la lista de ficheros pasada a la función `handleFiles()` contiene un objeto [`File`](/en/DOM/File) por cada fichero seleccionado por el usuario.

Comenzando en Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1), se puede ocultar el realmente feo {{ HTMLElement("input") }} y representar tu propio interfaz para abrir el picker de ficheros y pintar que fichero o ficheros ha seleccionado el usuario. Esto se puede hacer añadiendo al elemento input la característica "display:none" en su css, o estilo y llamando al método `click()` del elemento {{ HTMLElement("input") }}.

Como aparece en este HTML:

```
<form>
  <input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
</form>

<a href="javascript:doClick()">Select some files</a>
```

Tu método `doClick()` puede parecerse al siguiente:

```
function doClick() {
  var el = document.getElementById("fileElem");
  if (el) {
    el.click();
  }
}
```

Obviamente puedes cambiar como quieras, el estilo del botón para abrir el picker de ficheros.

### Añadir dinámicamente un listener tipo change

Si tu campo input ha sido creado usando una libreria JavaScript como [jQuery](http://www.jquery.com/), se necesitará usar {{ domxref("element.addEventListener()") }} para añadir el manejador de eventos tipo change, como en el ejemplo siguiente:

```
var inputElement = document.getElementById("inputField");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  var fileList = this.files;

  /* now you can work with the file list */
}
```

Nota: en este caso, la función `handleFiles()` mira la lista de ficheros con la finalidad de aceptar un parametro, mientras los eventos listeners sean añadidos de esta manera no pueden aceptar un parametro del input.

Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1) introduce soporte para los métodos de DOM {{ domxref("window.createBlobURL()") }} y {{ domxref("window.revokeBlobURL()") }}. El cual te permite crear un simple string con la URL que referenciar cualquier dato que pueda referenciar usando un objeto [`File`](/en/DOM/File) DOM, esto incluye los ficheros locales del usuario del dispositivo.

Cuando tienes un objeto[`File`](/en/DOM/File) te gusta poder referenciarlo con una URL desde el HTML, la manera de crear tu propio blob URL para poder hacer esto es la siguiente:

```
var blobURL = window.createBlobURL(fileObj);
```

El blob URL es un string que identifica el objeto[`File`](/en/DOM/File). Cada vez que se llama a {{ domxref("window.createBlobURL()") }}, un único blob URL se crea. Cada vez que esto pasa debe de ser liberado. Cuando el documento se cierra, se libera automáticamente, pero si tu página lo usa dinámicamente deberás liberarlos explicitamente llamando a {{ domxref("window.revokeBlobURL()") }}:

```
window.revokeBlobURL(blobURL);
```

## Selección de ficheros usando drag and drop

También se puede dejar al usuario arrastrar los ficheros en tu aplicación web.

El primer paso para establecer la zona de arrastre, el lugar en donde dejar los ficheros arrastrados. La parte exacta en donde se coloque esta zona de arrastre dentro de tu aplicación, dependerá del diseño de la aplicación, pero crear el elemento es sencillo:

```
var dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

En este ejemplo se transforma el elemento de ID "dropbox" en la zona de arrastre. Esto se hace añadiendo listeners para lo eventos de `dragenter`, `dragover`, y `drop`.

Realmente en este caso no se necesita hacer nada con los eventos `dragenter` y `dragover`, por lo que ambas funciones seran muy sencillas. Sólo pararán la propagacion de eventos y prevendran las acciones por defecto:

```
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
```

La verdadera magia ocurre en la función `drop()`:

```
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
```

Aquí se recupera el campo `dataTransfer` del evento, a partir de ahi se extraen la lista de ficheros, y se pasan a `handleFiles()`. A partir de este punto se manejan los ficheros de igual manera tanto si se han obtenido usado el elemento `input` o drag and drop.

## Recuperando la información de los ficheros selecionados

El objeto [`FileList`](/en/DOM/FileList) es dado por el DOM y lista todos los ficheros selecionados por el usuario, cada uno es un objeto [`File`](/en/DOM/File). Para determinar el número de ficheros que han sido seleccionados se comprueba la longitud de la lista con el atributo `length`:

```
var numFiles = files.length;
```

Al objeto [`File`](/en/DOM/File) se accede de manera sencilla, accediendo a la lista como si fuera un array:

```
for (var i = 0; i < files.length; i++) {
  var file = files[i];
  ..
}
```

El bucle itera por todos los ficheros de la lista.

Cada objeto [`File`](/en/DOM/File) tiene tres atributos que contienen información util sobre el fichero.

- `name`
  - : Es de solo lectura y es el nombre del fichero sin ninguna información sobre el path.
- `size`
  - : Es de solo lectura y es el tamaño del fichero en bytes como un entero de 64-bit.
- `type`
  - : Es de solo lectura y contiene MIME type del fichero, o "" si el tipo no puede ser determinado.

## Ejemplo: Mostrando miniaturas de una selección de imágenes del usuario

Digamos que usted esta desarrollando el próximo gran sitio web para compartir fotos, y quiere usar HTML5 para mostrar previsualizaciones de miniaturas de imágenes antes de que el usuario actual las suba. Basta con establecer su elemento input o zona de arrastre como se indicó anteriormente, y hacer una llamada a una función `handleFiles()` como la siguiente.

```
function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var imageType = /image.*/;

    if (!file.type.match(imageType)) {
      continue;
    }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img);

    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
  }
}
```

Aquí nuestro bucle recorre los archivos seleccionados por el usuario y mira el atributo `type` de cada archivo para ver si es una imagen (haciendo que una expresión regular coincida con la cadena de texto "image.\*"). Para cada archivo que sea una imagen, creamos un nuevo elemento `img`. Se puede usar CSS para establecer bordes bonitos, sombras, y especificar el tamaño de la imagen, el de manera que ni siquiera necesita hacerse aquí.

Cada imagen tiene la clase CSS "obj" añadida, para hacerla mas fácil buscarla en el árbol del DOM. Además añadimos un atributo `file` a cada imagen especificando el [`Fichero`](/en/DOM/File) para la imagen; esto nos permitira traer el hecho de subir las imágenes más tarde. Finalmente, usamos {{ domxref("Node.appendChild()") }} para añadir la nueva miniatura en el área de la previsualización de nuestro documento.

A continuación establecemos el [`FileReader`](/en/DOM/FileReader) para controlar la carga de la imagen de forma asíncrona y enlazarla con el elemento `img`. Después de crear el nuevo objeto `FileReader`, configuramos su función `onload`, luego llamamos a `readAsDataURL()` para comenzar la operación de lectura en segundo plano. Cuando el contenido completo de la imagen ha sido cargado, se convierte a `data:` URL, el cuál es pasado al callback `onload`. Nuestra implementación de esta rutina simplemente establece el atributo `src` del elemento `img` cargado, cuyo resultado es la imagen apareciendo en la miniatura en la pantalla del usuario.

Este ejemplo el objeto blob URLs para mostrar las miniaturas de las imágenes. Además, se muestra otra información del archivo incluyendo sus nombres y tamaños. Tú puedes [ver el ejemplo](/samples/domref/file-click-demo.html) (tenga en cuenta que se requiere una versión [Nghtly](http://nightly.mozilla.org/) de Firefox del 23 de september 23 o mas reciente, o Firefox 4.0 beta 7).

El HTML que representa la interfaz es::

```
<form>
  <input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
</form>
<a href="javascript:doClick()">Seleccione algunos archivos</a>
<div id="fileList">
  <p>¡No se han seleccionado archivos!</p>
</div>
```

Esto establece nuestro elemento {{ HTMLElement("input") }} de nuestro, así como un enlace que invoca el selector de archivos, ya que mantenmos el input file oculto para prevenir mostrar un UI menos atractivo. Esto se explica anteriormente en al la sección [Using hidden file input elements using the click() method](#using_hidden_file_input_elements_using_the_click_method), así como el método `doClick()` que invoca el el selector de archivos.

El método `handleFiles()` es el siguiente:

```
function handleFiles(files) {
  var d = document.getElementById("fileList");
  if (!files.length) {
    d.innerHTML = "<p>¡No se han seleccionado archivos!</p>";
  } else {
    var list = document.createElement("ul");
    d.appendChild(list);
    for (var i=0; i < files.length; i++) {
      var li = document.createElement("li");
      list.appendChild(li);

      var img = document.createElement("img");
      img.src = window.createBlobURL(files[i]);;
      img.height = 60;
      img.onload = function() {
        window.revokeBlobURL(this.src);
      }
      li.appendChild(img);

      var info = document.createElement("span");
      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}
```

Esto comienza buscando la URL del {{ HTMLElement("div") }} con la ID "fileList". Este es el bloque donde vamos a insertar la lista de archivos incluyendo las miniaturas.

Si el objeto {{ domxref("FileList") }} pasado a `handleFiles()` es `null`, simplemente establecemos el bloque inner HTML para mostrar "¡No se han seleccionado archivos!". En caso contrario, comenzamos a construir nuestra lista de archivos como sigue:

1. Un nuevo elemento de lista desordenada ({{ HTMLElement("ul") }} es creado.
2. El nuevo elemento de la lista es insertado en el bloque {{ HTMLElement("div") }} llamando a si método {{ domxref("element.appendChild()") }}.
3. Para cada {{ domxref("File") }} en el {{ domxref("FileList") }} representado `files`:

   1. Se crea un nuevo elemento de lista ({{ HTMLElement("li") }}) y lo inserta en la lista.
   2. Se crea un nuevo elemento imagen ({{ HTMLElement("img") }}).
   3. Establece en la fuente de la imagen un nuevo blob URL representandoel archivo, usando {{ domxref("window.createBlobURL()") }} para crear el blob URL.
   4. Se establece el alto de la imagen en 60 pixels.
   5. Se configura el controlador para el evento load para liberar el blob URL, puesto que ya no es necesario una vez que la imagen ha sido cargada. Esto se hace llamando al método {{ domxref("window.revokeBlobURL()") }}, pasando la cadena en el blob URL como se ha especificado para `img.src`.
   6. Se añade el nuevo elemento de la lista a la lista.

## Ejemplo: Subiendo un archivo seleccionado por el usuario

Otra cosa que podrías querer hacer es dejar que el usuario suba el archivo o los archivos seleccionados (como las imagenes seleccionadas usando el ejemplo anterior) al servidor. Esto se puede hacer de forma asíncrona muy facilmente.

### Creando las tareas de subida

Continuando con el código que contruye las miniaturas en el ejemplo anterior, hay que recordar que cada imagen en miniatura se encuentra en la clase CSS "obj", con el correspondiente [`File`](/en/DOM/File) adjunto en un attributo `file`. Vamos a seleccionar todas las imágenes que el usuario ha seleccionado facilmente para subirlas usando {{ domxref("Document.querySelectorAll()") }}, como sigue:

```
function sendFiles() {
  var imgs = document.querySelectorAll(".obj");

  for (var i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

La segunda línea crea un array, llamado `imgs`, de todos los elementos en el documento con la clase CSS "obj". En nuestro caso, estos serán todas las miniaturas de las imágenes. Una vez que tenemos esa lista, of all the elements in the document with the CSS class "obj". In our case, these will be all the image thumbnails. Once we have that list, es trivial pasar por la lista, creando una nueva instancia de `FileUpload` por cada una. Subiendo el correspondiente archivo por cada uno de ellos.

### Manipulando el proceso de carga de un archivo

La función `FileUpload` acepta dos entradas: un elemento de imagen y un archivo desde el que leer los datos de la imagen.

```
function FileUpload(img, file) {
  this.ctrl = createThrobber(img);
  var xhr = new XMLHttpRequest();
  this.xhr = xhr;

  var self = this;
  this.xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
          var percentage = Math.round((e.loaded * 100) / e.total);
          self.ctrl.update(percentage);
        }
      }, false);

  xhr.upload.addEventListener("load", function(e){
          self.ctrl.update(100);
          var canvas = self.ctrl.ctx.canvas;
          canvas.parentNode.removeChild(canvas);
      }, false);

  xhr.open("POST", "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php");
  xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
  xhr.sendAsBinary(file.getAsBinary());
}
```

La función `FileUpload()` mostrada arriba crea un throbber, el cual es usado para mostrar la información del progreso, a continuación se crea un [`XMLHttpRequest`](/en/XMLHttpRequest) para manejar la subida de los datos.

Antes de subir los datos de hecho, se toman varias medidas preparatorias:

1. El listener del progreso de la carga del `XMLHttpRequest`'s se configura para actualizar el throbber con una nueva información de porcentaje, por lo que a medida que progresa la carga, el throbber será actualizado en base a la última información.
2. El evento "load" de la carga del `XMLHttpRequest`'s se configura para actualizar el throbber con el 100% como la información de progreso (para asegurar que el indicador de progreso realmente alcanza el 100%, en caso de las peculiaridades de granularidad durante el proceso). Entoces se elimina el throbber, puesto que ya no es necesario. Esto causa que el throbber desaparezca una vez la carga está completa.
3. La petición para cargar la imagen se inicia llamando al método `XMLHttpRequest`'s `open()` para comenzar a generar una petición de tipo POST.
4. El MIME type para la carga se establece llamando a la función `deXMLHttpRequest` `overrideMimeType()`. En este caso, estamos usando un MIME type genérico; usted puede o no puede necesitar establecer MIME type en absoluto, dependiendo de su necesidad.
5. Finalmente, se llama a la función `sendAsBinary()` del `XMLHttpRequest` es llamada para subir el contenido del archivo. _TEsto es necesario ser revisado, actualmete se está usando la rutina sincronizada en desuso getAsBinary() para extraer los datos del archivo.._

### Manipulación del proceso de carga para un archivo, de forma asíncrona

```
function fileUpload(file) {
  // Please report improvements to: marco.buratto at tiscali.it

  var fileName = file.name;
  var fileSize = file.size;
  var fileData = file.getAsBinary(); // works on TEXT data ONLY.

  var boundary = "xxxxxxxxx";
  var uri = "serverLogic.php";

  var xhr = new XMLHttpRequest();

  xhr.open("POST", uri, true);
  xhr.setRequestHeader("Content-Type", "multipart/form-data, boundary="+boundary); // simulate a file MIME POST request.
  xhr.setRequestHeader("Content-Length", fileSize);

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status <= 200) || xhr.status == 304) {

        if (xhr.responseText != "") {
          alert(xhr.responseText); // display response.
        }
      }
    }
  }

  var body = "--" + boundary + "\r\n";
  body += "Content-Disposition: form-data; name='fileId'; filename='" + fileName + "'\r\n";
  body += "Content-Type: application/octet-stream\r\n\r\n";
  body += fileData + "\r\n";
  body += "--" + boundary + "--";

  xhr.send(body);
  return true;
}
```

_Esto necesita ser modificado para funcionar con datos binarios también._

## Ver también

- [`File`](/en/DOM/File)
- [`FileList`](/en/DOM/FileList)
- [`FileReader`](/en/DOM/FileReader)
- [Usando XMLHttpRequest](/En/XMLHttpRequest/Using_XMLHttpRequest)
- [`XMLHttpRequest`](/en/XMLHttpRequest)
