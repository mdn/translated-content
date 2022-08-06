---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
tags:
  - API
  - File API
  - Files
  - Image Preview
  - Method
translation_of: Web/API/FileReader/readAsDataURL
---
<p>{{APIRef("File API")}}</p>

<p>O método <code>readAsDataURL é usado para ler o conteúdo do tipo </code>{{domxref("Blob")}} ou {{domxref("File")}}.<br>
 Quando a operação de leitura acaba, a flag {{domxref("FileReader.readyState","readyState")}} muda para <strong>DONE</strong> e o evento {{event("loadend")}} é disparado.<br>
 Então o atributo {{domxref("FileReader.result","result")}} irá conter a URL codificada em base64 do arquivo.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre><em>instanceOfFileReader</em>.readAsDataURL(blob);</pre>

<h3 id="Parametros">Parametros</h3>

<dl>
 <dt><code>blob</code></dt>
 <dd>O conteúdo do tipo {{domxref("Blob")}} ou {{domxref("File")}} que queremos ler.</dd>
</dl>

<h2 id="Exemplo">Exemplo</h2>

<h3 id="HTML">HTML</h3>

<pre class="syntaxbox">&lt;input type="file" onchange="previewFile()"&gt;&lt;br&gt;
&lt;img src="" height="200" alt="Prévia da imagem..."&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="syntaxbox">function previewFile() {
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
}</pre>

<h3 id="Demo">Demo</h3>

<p>{{EmbedLiveSample("Example", "100%", 240)}}</p>

<h2 id="Exemplo_de_leitura_com_múltiplos_arquivos">Exemplo de leitura com múltiplos arquivos</h2>

<h4 id="HTML_2"><strong>HTML</strong></h4>

<pre class="syntaxbox"><code>&lt;input id="browse" type="file" onchange="previewFiles()" multiple&gt;
&lt;div id="preview"&gt;&lt;/div&gt;</code></pre>

<h4 id="JavaScript_2">JavaScript</h4>

<pre class="syntaxbox"><code>function previewFiles() {

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

}</code></pre>

<div class="note"><strong>Nota:</strong> O construtor do <a href="/en-US/docs/Web/API/FileReader"><code>FileReader()</code></a> não é suportado  por versões anteriores à 10 do Internet Explorer. Para uma maior compatibilidade você pode ver os exemplos <a class="internal" href="https://mdn.mozillademos.org/files/3699/crossbrowser_image_preview.html" title="crossbrowser_image_preview.html">prévia de imagem básica</a> ou <a href="https://mdn.mozillademos.org/files/3698/image_upload_preview.html">prévia de imagem avançada</a>.</div>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">Especificações</h2>

<p>{{page("/pt-BR/docs/Web/API/FileReader","Specifications")}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidade</h2>

<p>{{page("/pt-BR/docs/Web/API/FileReader","Browser compatibility")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{domxref("FileReader")}}</li>
</ul>
