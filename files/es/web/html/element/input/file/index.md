---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTMLSidebar}}

Los elementos {{HTMLElement("input")}} con **`type="file"`** permiten al usuario elegir uno o más archivos desde el almacenamiento de su dispositivo. Una vez seleccionados, los archivos pueden ser subidos a un servidor usando el [envío de formularios](/es/docs/Learn/Forms), o manipulados utilizando código JavaScript y la [API de archivos (File API)](/es/docs/Web/API/File_API/Using_files_from_web_applications).

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Valor

El atributo [`value`](/es/docs/Web/HTML/Element/input#value) de un _input_ de archivo contiene una cadena que representa la ruta a los archivos seleccionados. Si aún no se ha seleccionado ningún archivo, el valor es una cadena vacía (`""`). Cuando el usuario selecciona múltiples archivos, el `value` representa el primer archivo en la lista de archivos seleccionados. Los otros archivos pueden ser identificados utilizando la [propiedad HTMLInputElement.files del _input_](/es/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files).

> [!NOTE]
> El valor es [siempre el nombre del archivo con el prefijo `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), que no es la ruta real del archivo. Esto es para prevenir que software malicioso adivine la estructura de archivos del usuario.

## Atributos adicionales

Además de los atributos comunes compartidos por todos los elementos {{HTMLElement("input")}}, los _input_ de tipo `file` también soportan los siguientes atributos:

### accept

El valor del atributo [`accept`](/es/docs/Web/HTML/Attributes/accept) es una cadena que define los tipos de archivos que el _input_ de archivo debería aceptar. Esta cadena es una lista separada por comas de **[especificadores de tipo de archivo únicos](#especificadores_de_tipo_de_archivo_únicos)**. Debido a que un tipo de archivo dado puede ser identificado de más de una manera, es útil proporcionar un conjunto completo de especificadores de tipo cuando necesitas archivos de un formato dado.

Por ejemplo, hay varias maneras de identificar archivos de Microsoft Word, por lo que un sitio que acepte archivos de Word podría usar un `<input>` como este:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

El valor del atributo [`capture`](/es/docs/Web/HTML/Attributes/capture) es una cadena que especifica qué cámara utilizar para capturar datos de imagen o video, si el atributo [`accept`](/es/docs/Web/HTML/Attributes/accept) indica que el _input_ debe ser de uno de esos tipos. Un valor de `user` indica que se debe usar la cámara y/o micrófono orientados hacia el usuario. Un valor de `environment` especifica que se debe usar la cámara y/o micrófono orientados hacia el entorno. Si este atributo falta, el {{Glossary("user agent","agente de usuario")}} es libre de decidir por sí mismo qué hacer. Si el modo de orientación solicitado no está disponible, el agente de usuario puede volver a su modo predeterminado preferido.

> [!NOTE] > `capture` era anteriormente un atributo booleano que, si estaba presente, solicitaba que se usará el dispositivo de captura de medios del dispositivo (como la cámara o el micrófono) en lugar de solicitar una entrada de archivo.

### multiple

Cuando se especifica el atributo booleano [`multiple`](/es/docs/Web/HTML/Attributes/multiple), el _input_ de archivo permite al usuario seleccionar más de un archivo.

## Atributos no estándar

Además de los atributos listados anteriormente, los siguientes atributos no estándar están disponibles en algunos navegadores. Deberías intentar evitar usarlos cuando sea posible, ya que hacerlo limitará la capacidad de tu código para funcionar en navegadores que no los implementan.

### `webkitdirectory`

El atributo booleano `webkitdirectory`, si está presente, indica que solo los directorios deberían estar disponibles para ser seleccionados por el usuario en la interfaz del selector de archivos. Consulta {{domxref("HTMLInputElement.webkitdirectory")}} para detalles adicionales y ejemplos.

Aunque originalmente implementado sólo para navegadores basados en WebKit, `webkitdirectory` también se puede usar en Microsoft Edge, así como en Firefox 50 y posteriores. Sin embargo, aunque tiene un soporte relativamente amplio, aún no es estándar y no debería usarse a menos que no tengas alternativa.

## Especificadores de tipo de archivo únicos

Un **especificador de tipo de archivo único** es una cadena que describe un tipo de archivo que puede ser seleccionado por el usuario en un elemento {{HTMLElement("input")}} de tipo `file`. Cada especificador de tipo de archivo único puede tomar una de las siguientes formas:

- Una extensión de nombre de archivo válida, insensible a mayúsculas, comenzando con un carácter punto ("."). Por ejemplo: `.jpg`, `.pdf` o `.doc`.
- Una cadena de tipo MIME válida, sin extensiones.
- La cadena `audio/*` que significa "cualquier archivo de audio".
- La cadena `video/*` que significa "cualquier archivo de video".
- La cadena `image/*` que significa "cualquier archivo de imagen".

El atributo `accept` toma una cadena que contiene uno o más de estos especificadores de tipo de archivo únicos como su valor, separados por comas. Por ejemplo, un selector de archivos que necesita contenido que puede presentarse como una imagen, incluyendo tanto formatos de imagen estándar como archivos PDF, podría verse así:

```html
<input type="file" accept="image/*,.pdf" />
```

## Usando inputs de archivo

### Un ejemplo básico

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Elige el archivo para subir</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Esto produce el siguiente resultado:

{{EmbedLiveSample('Un_ejemplo_básico', 650, 90)}}

> [!NOTE]
> Puedes encontrar este ejemplo en GitHub también: ver el [código fuente](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), y también [verlo funcionando en vivo](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Independientemente del dispositivo o sistema operativo del usuario, el _input_ de archivo proporciona un botón que abre un cuadro de diálogo del selector de archivos que permite al usuario elegir un archivo.

Incluir el atributo [`multiple`](#multiple), como se muestra arriba, especifica que se pueden elegir múltiples archivos a la vez. El usuario puede elegir múltiples archivos desde el selector de archivos de cualquier manera que su plataforma elegida permita (por ejemplo, manteniendo presionada la tecla <kbd>Shift</kbd> o <kbd>Control</kbd> y luego haciendo clic). Si solo quieres que el usuario elija un solo archivo por `<input>`, omite el atributo `multiple`.

### Obteniendo información sobre los archivos seleccionados

Los archivos seleccionados son devueltos por la propiedad `HTMLInputElement.files` del elemento, que es un objeto {{domxref("FileList")}} que contiene una lista de objetos {{domxref("File")}}. El `FileList` se comporta como un arreglo, por lo que puedes verificar su propiedad `length` para obtener el número de archivos seleccionados.

Cada objeto `File` contiene la siguiente información:

- `name`
  - : El nombre del archivo.
- `lastModified`
  - : Un número que especifica la fecha y hora en que el archivo fue modificado por última vez, en milisegundos desde la época UNIX (1 de enero de 1970, a medianoche).
- `lastModifiedDate` {{deprecated_inline}}
  - : Un objeto {{jsxref("Date")}} que representa la fecha y hora en que el archivo fue modificado por última vez. _Esto está obsoleto y no debería usarse. Usa lastModified en su lugar_.
- `size`
  - : El tamaño del archivo en bytes.
- `type`
  - : El [tipo MIME](/es/docs/Web/HTTP/MIME_types) del archivo.
- `webkitRelativePath` {{non-standard_inline}}
  - : Una cadena que especifica la ruta del archivo relativa al directorio base seleccionado en un selector de directorios (es decir, un _input_ de tipo `file` en el que se establece el atributo [`webkitdirectory`](#webkitdirectory)). _Esto no es estándar y debe usarse con precaución_.

> [!NOTE]
> Puedes establecer así como obtener el valor de `HTMLInputElement.files` en todos los navegadores modernos; esto se agregó más recientemente a Firefox, en la versión 57 (ver el [error 1384030 de Firefox](https://bugzil.la/1384030)).

### Limitando los tipos de archivo aceptados

A menudo no querrás que el usuario pueda seleccionar cualquier tipo de archivo arbitrario; en su lugar, a menudo quieres que seleccionen archivos de un tipo o tipos específicos. Por ejemplo, si tu entrada de archivo permite a los usuarios subir una foto de perfil, probablemente querrás que seleccionen formatos de imagen compatibles con la web, como {{Glossary("JPEG")}} o {{Glossary("PNG")}}.

Los tipos de archivo aceptables se pueden especificar con el atributo [`accept`](#accept), que toma una lista separada por comas de extensiones de archivo permitidas o tipos MIME. Algunos ejemplos:

- `accept="image/png"` o `accept=".png"`: Acepta archivos PNG.
- `accept="image/png, image/jpeg"` o `accept=".png, .jpg, .jpeg"`: Acepta archivos PNG o JPEG.
- `accept="image/*"`: Acepta cualquier archivo con un tipo MIME de `image/*`. (Muchos dispositivos móviles también permiten al usuario tomar una foto con la cámara cuando se usa esto).
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Acepta cualquier cosa que huela a un documento de MS Word.

Veamos un ejemplo más completo:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Elige el archivo para subir</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Esto produce un resultado similar al ejemplo anterior:

{{EmbedLiveSample('Limitando_los_tipos_de_archivo_aceptados', 650, 90)}}

> [!NOTE]
> Puedes encontrar este ejemplo en GitHub también: ver el [código fuente](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html), y también [verlo funcionando en vivo](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Puede parecer similar, pero si intentas seleccionar un archivo con este _input_, verás que el selector de archivos solo te permite seleccionar los tipos de archivo especificados en el valor `accept` (la interfaz exacta difiere entre navegadores y sistemas operativos).

El atributo `accept` no valida los tipos de archivos seleccionados, sino que proporciona sugerencias a los navegadores para guiar a los usuarios hacia la selección de los tipos de archivos correctos. Aún es posible (en la mayoría de los casos) que los usuarios activen una opción en el selector de archivos que les permita anular esto y seleccionar cualquier archivo que deseen, y luego elegir los tipos de archivos incorrectos.

Debido a esto, debes asegurarte de que el atributo `accept` esté respaldado por una validación adecuada del lado del servidor.

### Detectar cancelaciones

El evento `cancel` se activa cuando el usuario no cambia su selección, volviendo a seleccionar los archivos previamente seleccionados. El evento `cancel` también se activa cuando el cuadro de diálogo del selector de archivos se cierra o se cancela mediante el botón "cancelar" o la tecla de <kbd>escape</kbd>.

Por ejemplo, el siguiente código registrará en la consola si el usuario cierra el cuadro de diálogo sin seleccionar un archivo:

```js
const elem = document.createElement("input");
elem.type = "file";
elem.addEventListener("cancel", () => {
  console.log("Cancelado.");
});
elem.addEventListener("change", () => {
  if (elem.files.length == 1) {
    console.log("Archivo seleccionado: ", elem.files[0]);
  }
});
elem.click();
```

### Notas

1. No puedes establecer el valor de un selector de archivos desde un script: hacer algo como lo siguiente no tiene ningún efecto:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Cuando se elige un archivo usando un `<input type="file">`, la ruta real al archivo fuente no se muestra en el atributo `value` del _input_ por razones obvias de seguridad. En su lugar, se muestra el nombre del archivo, con `C:\fakepath\` como prefijo. Hay algunas razones históricas para esta peculiaridad, pero está soportada en todos los navegadores modernos y, de hecho, está [definida en la especificación](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Ejemplos

En este ejemplo, presentaremos un selector de archivos ligeramente más avanzado que aprovecha la información del archivo disponible en la propiedad `HTMLInputElement.files`, además de mostrar algunos trucos ingeniosos.

> [!NOTE]
> Puedes ver el código fuente completo para este ejemplo en GitHub: [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([véalo en vivo también](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). No explicaremos el CSS; el JavaScript es el enfoque principal.

Primero, veamos el HTML:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads">Elige imágenes para subir (PNG, JPG)</label>
    <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      accept=".jpg, .jpeg, .png"
      multiple />
  </div>
  <div class="preview">
    <p>No hay archivos seleccionados actualmente para subir</p>
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  background: #ccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li,
div > p {
  background: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid black;
}

form img {
  height: 64px;
  order: 1;
}

form p {
  line-height: 32px;
  padding-left: 10px;
}

form label,
form button {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

form label:hover,
form button:hover {
  background-color: #2d5ba3;
  color: white;
}

form label:active,
form button:active {
  background-color: #0d3f8f;
  color: white;
}
```

Esto es similar a lo que hemos visto antes: nada especial que comentar.

A continuación, vamos a recorrer el JavaScript.

En las primeras líneas del script, obtenemos referencias al _input_ del formulario y al elemento {{htmlelement("div")}} con la clase `.preview`. Luego, ocultamos el elemento {{htmlelement("input")}}; hacemos esto porque los inputs de archivos tienden a ser feos, difíciles de estilizar e inconsistentes en su diseño a través de los navegadores. Puedes activar el elemento _input_ haciendo clic en su {{htmlelement("label","etiqueta")}}, por lo que es mejor ocultar visualmente el `input` y estilizar la etiqueta como un botón, para que el usuario sepa que debe interactuar con ella si quiere subir archivos.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE]
> Se usa {{cssxref("opacity")}} para ocultar el input de archivo en lugar de {{cssxref("visibility", "visibility: hidden")}} o {{cssxref("display", "display: none")}}, porque la tecnología asistiva interpreta los dos últimos estilos como si el _input_ no fuera interactivo.

A continuación, añadimos un [detector de eventos](/es/docs/Web/API/EventTarget/addEventListener) al _input_ para detectar cambios en su valor seleccionado (en este caso, cuando se seleccionan archivos). El detector de eventos invoca nuestra función personalizada `updateImageDisplay()`.

```js
input.addEventListener("change", updateImageDisplay);
```

Cada vez que se invoca la función `updateImageDisplay()`, nosotros:

- Usamos un bucle {{jsxref("Statements/while", "while")}} para vaciar el contenido anterior del `<div>` de previsualización.
- Obtenemos el objeto {{domxref("FileList")}} que contiene la información sobre todos los archivos seleccionados y lo almacenamos en una variable llamada `curFiles`.
- Comprobamos si no se seleccionaron archivos, verificando si `curFiles.length` es igual a 0. Si es así, imprimimos un mensaje en el `<div>` de previsualización indicando que no se han seleccionado archivos.
- Si se han seleccionado archivos, iteramos a través de cada uno, imprimiendo información sobre él en el `<div>` de previsualización. Cosas a notar aquí:
- Usamos la función personalizada `validFileType()` para verificar si el archivo es del tipo correcto (por ejemplo, los tipos de imagen especificados en el atributo `accept`).
- Si lo es, nosotros:

  - Imprimimos su nombre y tamaño en un elemento de lista dentro del `<div>` de previsualización (obtenido de `file.name` y `file.size`). La función personalizada `returnFileSize()` devuelve una versión bien formateada del tamaño en bytes/KB/MB (por defecto, el navegador informa el tamaño en bytes absolutos).
  - Generamos una vista previa en miniatura de la imagen llamando a {{domxref("URL/createObjectURL_static", "URL.createObjectURL(file)")}}. Luego, insertamos la imagen en el elemento de lista también creando un nuevo `<img>` y estableciendo su [`src`](/es/docs/Web/HTML/Element/img#src) en la miniatura.

- Si el tipo de archivo es inválido, mostramos un mensaje dentro de un elemento de lista diciendo al usuario que necesita seleccionar un tipo de archivo diferente.

```js
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No hay archivos seleccionados actualmente para subir";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `Nombre del archivo ${file.name}, tamaño del archivo ${returnFileSize(
          file.size,
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.alt = image.title = file.name;

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `Nombre del archivo ${file.name}: Tipo de archivo no válido. Actualiza tu selección.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
```

La función personalizada `validFileType()` toma un objeto {{domxref("File")}} como parámetro, luego usa {{jsxref("Array.prototype.includes()")}} para verificar si algún valor en `fileTypes` coincide con la propiedad `type` del archivo. Si se encuentra una coincidencia, la función devuelve `true`. Si no se encuentra ninguna coincidencia, devuelve `false`.

```js
// https://developer.mozilla.org/es/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
```

La función `returnFileSize()` toma un número (de bytes, tomado de la propiedad `size` del archivo actual), y lo convierte en un tamaño bien formateado en bytes/KB/MB.

```js
function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} KB`;
  } else {
    return `${(number / 1e6).toFixed(1)} MB`;
  }
}
```

> [!NOTE]
> Las unidades "KB" y "MB" utilizan aquí la convención de [prefijo SI](https://en.wikipedia.org/wiki/Binary_prefix) de 1 KB = 1000 B, similar a macOS. Los distintos sistemas representan los tamaños de archivo de forma diferente: por ejemplo, Ubuntu utiliza prefijos IEC donde 1 KiB = 1024 B, mientras que las especificaciones de RAM suelen utilizar prefijos SI para representar potencias de dos (1 KB = 1024 B). Por este motivo, utilizamos `1e3` (`1000`) y `1e6` (`100000`) en lugar de `1024` y `1048576`. En su aplicación, debe comunicar el sistema de unidades claramente a sus usuarios si el tamaño exacto es importante.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image uploaded!");
  preview.replaceChildren(para);
});
```

El ejemplo se ve así; juegue:

{{EmbedLiveSample('Ejemplos', '100%', 200)}}

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Valor</a></strong></td>
      <td>
        Una cadena que representa la ruta al archivo seleccionado.
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}},
        {{domxref("Element/input_event", "input")}} y
        {{domxref("HTMLElement/cancel_event", "cancel")}}
      </td>
    </tr>
    <tr>
      <td><strong>Atributos comunes soportados</strong></td>
      <td><a href="/es/docs/Web/HTML/Element/input#required"><code>required</code></a></td>
    </tr>
    <tr>
      <td><strong>Atributos adicionales</strong></td>
      <td>
        <a href="#accept" aria-current="page"><code>accept</code></a>,
        <a href="#capture" aria-current="page"><code>capture</code></a>,
        <a href="#multiple" aria-current="page"><code>multiple</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Atributos IDL</strong></td>
      <td><code>files</code> y <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interfaz DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Métodos</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Rol ARIA implícito</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">ningún rol correspondiente</a></td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Uso de archivos de aplicaciones web](/es/docs/Web/API/File_API/Using_files_from_web_applications): contiene una serie de otros ejemplos útiles relacionados con `<input type="file">` y la [API de archivos](/es/docs/Web/API/File).
- [Compatibilidad de propiedades CSS](/es/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
