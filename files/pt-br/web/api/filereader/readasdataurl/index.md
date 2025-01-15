---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
---

{{APIRef("File API")}}

O método `readAsDataURL` é usado para ler o conteúdo do tipo {{domxref("Blob")}} ou {{domxref("File")}}.
Quando a operação de leitura acaba, a flag {{domxref("FileReader.readyState","readyState")}} muda para **DONE** e o evento [`loadend`](/pt-BR/docs/Web/API/XMLHttpRequest/loadend_event) é disparado.
Então o atributo {{domxref("FileReader.result","result")}} irá conter a URL codificada em base64 do arquivo.

## Sintaxe

```
instanceOfFileReader.readAsDataURL(blob);
```

### Parametros

- `blob`
  - : O conteúdo do tipo {{domxref("Blob")}} ou {{domxref("File")}} que queremos ler.

## Exemplo

### HTML

```
<input type="file" onchange="previewFile()"><br>
<img src="" height="200" alt="Prévia da imagem...">
```

### JavaScript

```
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
```

### Demo

{{EmbedLiveSample("Example", "100%", 240)}}

## Exemplo de leitura com múltiplos arquivos

#### HTML

```
<input id="browse" type="file" onchange="previewFiles()" multiple>
<div id="preview"></div>
```

#### JavaScript

```
function previewFiles() {

  var preview = document.querySelector('#preview');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }

}
```

> [!NOTE]
> O construtor do [`FileReader()`](/pt-BR/docs/Web/API/FileReader) não é suportado por versões anteriores à 10 do Internet Explorer. Para uma maior compatibilidade você pode ver os exemplos [prévia de imagem básica](https://mdn.mozillademos.org/files/3699/crossbrowser_image_preview.html) ou [prévia de imagem avançada](https://mdn.mozillademos.org/files/3698/image_upload_preview.html).

## Especificações

{{Specifications}}

## Compatibilidade

<!-- TODO: page macro not supported: page("/pt-BR/docs/Web/API/FileReader","Browser compatibility") -->

## Veja também

- {{domxref("FileReader")}}
