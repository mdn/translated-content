---
title: 'FileReader: loadstart イベント'
slug: Web/API/FileReader/loadstart_event
tags:
  - API
  - Event
  - FileReader
  - ProgressEvent
  - Web
  - loadstart
  - イベント
translation_of: Web/API/FileReader/loadstart_event
---
<div>{{APIRef}}</div>

<p><code>loadstart</code> イベントは、ファイル読み込み操作が始まったときに発生します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル可能</th>
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("ProgressEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("FileReader.onloadstart")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Live_example" name="Live_example">ライブデモ</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="example"&gt;

    &lt;div class="file-select"&gt;
        &lt;label for="avatar"&gt;Choose a profile picture:&lt;/label&gt;
        &lt;input type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg"&gt;
    &lt;/div&gt;

    &lt;img src="" class="preview" height="200" alt="Image preview..."&gt;

    &lt;div class="event-log"&gt;
        &lt;label&gt;Event log:&lt;/label&gt;
        &lt;textarea readonly class="event-log-contents"&gt;&lt;/textarea&gt;
    &lt;/div&gt;

  &lt;/div&gt;</pre>

<div class="hidden">
<h4 id="CSS">CSS</h4>

<pre class="brush: css">img.preview {
  margin: 1rem 0;
}

.event-log-contents {
  width: 18rem;
  height: 5rem;
  border: 1px solid black;
  margin: .2rem;
  padding: .2rem;
}

.example {
  display: grid;
  grid-template-areas:
              "select  log"
              "preview log";
}

.file-select {
  grid-area: select;
}

.preview {
  grid-area: preview;
}

.event-log {
  grid-area: log;
}

.event-log&gt;label {
  display: block;
}

.event-log-contents {
  resize: none;
}</pre>
</div>

<h4 id="JS">JS</h4>

<pre class="brush: js">const fileInput = document.querySelector('input[type="file"]');
const preview = document.querySelector('img.preview');
const eventLog = document.querySelector('.event-log-contents');
const reader = new FileReader();

function handleEvent(event) {
    eventLog.textContent = eventLog.textContent + `${event.type}: ${event.loaded} bytes transferred\n`;

    if (event.type === "load") {
        preview.src = reader.result;
    }
}

function addListeners(reader) {
    reader.addEventListener('loadstart', handleEvent);
    reader.addEventListener('load', handleEvent);
    reader.addEventListener('loadend', handleEvent);
    reader.addEventListener('progress', handleEvent);
    reader.addEventListener('error', handleEvent);
    reader.addEventListener('abort', handleEvent);
}

function handleSelected(e) {
    eventLog.textContent = '';
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        addListeners(reader);
        reader.readAsDataURL(selectedFile);
    }
}

fileInput.addEventListener('change', handleSelected);
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Live_example', '100%', '300px') }}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('File API', '#dfn-loadstart-event')}}</td>
   <td>{{Spec2('File API')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.FileReader.loadstart_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("FileReader.load_event")}}, {{domxref("FileReader.loadend_event")}}, {{domxref("FileReader.progress_event")}}, {{domxref("FileReader.error_event")}}, {{domxref("FileReader.abort_event")}}</li>
</ul>
