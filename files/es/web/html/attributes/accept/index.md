---
title: "HTML el atributo: accept"
slug: Web/HTML/Attributes/accept
---

El atributo **`accept`** toma como valor una lista separada por comas de uno o más tipos de archivos, o [especificadores de tipo de archivo únicos](#especificadores_de_tipo_de_archivo_únicos), que describen qué tipos de archivo permitir. La propiedad «_accept_» es un atributo del tipo {{HTMLElement("input/file", "file")}} {{HTMLElement("input")}}. Se admitía en el elemento {{HTMLElement("form")}}, pero se eliminó a favor de {{HTMLElement("input/file", "file")}} en HTML5.

Debido a que un determinado tipo de archivo se puede identificar de más de una manera, es útil proporcionar un conjunto completo de especificadores de tipo cuando necesiten archivos de un tipo específico, o usar el comodín para indicar que un tipo de cualquier formato es aceptable.

Por ejemplo, hay varias formas de identificar los archivos de Microsoft Word, por lo que un sitio que acepta archivos de Word puede usar un `<input>` como este:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Mientras que si aceptas un archivo multimedia, es posible que desees incluir cualquier formato de ese tipo de medio:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

El atributo `accept` no valida los tipos de archivos seleccionados; simplemente proporciona sugerencias para los navegadores para guiar a los usuarios hacia la selección de los tipos de archivo correctos. Todavía es posible (en la mayoría de los casos) que los usuarios cambien una opción en el selector de archivos que hace posible anular esto y seleccionar cualquier archivo que deseen, y luego elegir tipos de archivo incorrectos.

Debido a esto, te debes asegurar de que el requisito esperado esté validado en el lado del servidor.

## Ejemplos

Cuando se configura en un tipo de entrada de archivo, el selector de archivos nativo que se abre solo debe permitir seleccionar archivos del tipo de archivo correcto. La mayoría de los sistemas operativos aligeran los archivos que no coinciden con los criterios y no se pueden seleccionar.

```html
<p>
  <label for="soundFile">Selecciona un archivo de audio:</label>
  <input type="file" id="soundFile" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Selecciona un archivo de video:</label>
  <input type="file" id="videoFile" accept="video/*" />
</p>
<p>
  <label for="imageFile">Selecciona algunas imágenes:</label>
  <input type="file" id="imageFile" accept="image/*" multiple />
</p>
```

{{EmbedLiveSample('ejemplo_sencillo', '100%', 200)}}

Ten en cuenta que el último ejemplo te permite seleccionar varias imágenes. Consulta el atributo [`multiple`](/es/docs/Web/HTML/Attributes/multiple) para obtener más información.

## Especificadores de tipo de archivo únicos

Un **especificador de tipo de archivo único** es una cadena que describe un tipo de archivo que el usuario puede seleccionar en un elemento {{HTMLElement("input")}} de tipo `file`. Cada especificador de tipo de archivo único puede adoptar una de las siguientes formas:

- Una extensión de nombre de archivo válida que no distingue entre mayúsculas y minúsculas, que comienza con un punto ("."). Por ejemplo: `.jpg`, `.pdf`, o `.doc`.
- Una cadena de tipo MIME válida, sin extensiones.
- La cadena `audio/*` significa "cualquier archivo de audio".
- La cadena `video/*` significa "cualquier archivo de video".
- La cadena `image/*` significa "cualquier archivo de imagen".

El atributo `accept` toma como valor una cadena que contiene uno o más de estos especificadores de tipo de archivo únicos, separados por comas. Por ejemplo, un selector de archivos que necesita contenido que se puede presentar como una imagen, incluidos los formatos de imagen estándar y los archivos PDF, podría verse así:

```html
<input type="file" accept="image/*,.pdf" />
```

## Usar inputs de archivo

### Un ejemplo básico

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Elige el archivo a cargar</label>
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

Esto produce la siguiente salida:

{{EmbedLiveSample('Un_ejemplo_básico', 650, 60)}}

> **Nota:** También puedes encontrar este ejemplo en GitHub; consulta [código fuente](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/simple-file.html) y también puedes [verlo funcionando en vivo](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Independientemente del dispositivo o sistema operativo del usuario, el `<input>` de archivo proporciona un botón que abre un cuadro de diálogo selector de archivos que permite al usuario elegir un archivo.

La inclusión del atributo [`multiple`](/es/docs/Web/HTML/Attributes/multiple), como se muestra arriba, especifica que se pueden elegir varios archivos a la vez. El usuario puede elegir varios archivos del selector de archivos de cualquier manera que la plataforma elegida lo permita (por ejemplo, manteniendo presionada la tecla <kbd>Mayús</kbd> o <kbd>Control</kbd> y luego haciendo clic). Si solo deseas que el usuario elija un único archivo por `<input>`, omite el atributo `multiple`.

### Limitar los tipos de archivo aceptados

A menudo, no querrás que el usuario pueda elegir cualquier tipo de archivo arbitrario; en su lugar, quieres que seleccionen archivos de un tipo o tipos específicos. Por ejemplo, si la entrada de tu archivo permite a los usuarios cargar una imagen de perfil, probablemente desees que seleccionen formatos de imagen compatibles con la web, como {{Glossary("JPEG")}} o {{Glossary("PNG")}}.

Los tipos de archivo aceptables se pueden especificar con el atributo [`accept`](/es/docs/Web/HTML/Element/input/file#accept), que toma una lista separada por comas de extensiones de archivo permitidas o tipos MIME. Algunos ejemplos:

- `accept="image/png"` o `accept=".png"` — Acepta archivos PNG.
- `accept="image/png, image/jpeg"` o `accept=".png, .jpg, .jpeg"` — Acepta archivos PNG o JPEG.
- `accept="image/*"` — Acepta cualquier archivo con un tipo MIME de `image/*`. (Muchos dispositivos móviles también permiten que el usuario tome una foto con la cámara cuando se usa).
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Acepta cualquier cosa que huela a un documento de MS Word.

Veamos un ejemplo más completo:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Elige el archivo para cargar</label>
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

{{EmbedLiveSample('Limitar_los_tipos_de_archivo_aceptados', 650, 60)}}

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ve también

- [Uso de archivos de aplicaciones web](/es/docs/Using_files_from_web_applications)
- [API de File](/es/docs/Web/API/File)
