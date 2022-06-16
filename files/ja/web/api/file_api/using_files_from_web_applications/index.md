---
title: ウェブアプリケーションからのファイルの使用
slug: Web/API/File_API/Using_files_from_web_applications
tags:
  - ファイル
  - HTML5
  - 中級者
  - 要更新
  - ajax アップロード
  - アップロード
translation_of: Web/API/File/Using_files_from_web_applications
original_slug: Web/API/File/Using_files_from_web_applications
---
{{APIRef("File API")}}

File API は DOM に HTML5 で追加されたもので、ウェブコンテンツがユーザーにローカルファイルを選択するように指示し、それらのファイルを読み取ることができるようになりました。この選択は HTML の `{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}` 要素を使用したり、ドラッグ＆ドロップを行ったりすることで行うことができます。

File API を拡張機能や他のクロームコードから利用することもできます。この場合、もういくつか知っておきたい機能があります。詳細は [DOM File API をクロームコードで使う](/ja/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)をご覧下さい。

## 選択されたファイルへのアクセス

この HTML を考えてください。

```html
<input type="file" id="input" multiple>
```

File API により、ユーザーが選択したファイルを表す {{DOMxRef("File")}} オブジェクトを含む {{DOMxRef("FileList")}} にアクセスすることができます。

`multiple` 属性を `input` 要素に付けることで、ユーザーが複数のファイルを選択することができるようになります。

旧来の DOM セレクターを使って、最初に選択されたファイルにアクセスします。

```js
const selectedFile = document.getElementById('input').files[0];
```

### change イベントでの選択されたファイルへのアクセス

`change` イベントを通して {{DOMxRef("FileList")}} にアクセスすることもできます (ただし必須ではありません)。このように {{DOMxRef("EventTarget.addEventListener()")}} を使って `change` イベントのリスナーを追加する必要があります。

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* ファイルリストを処理するコードがここに入る */
}
```

## 選択されたファイルについての情報の取得

DOM が提供する {{DOMxRef("FileList")}} オブジェクトは、{{DOMxRef("File")}} オブジェクトとして指定された、ユーザーが選択したすべてのファイルをリストアップします。ファイルリストの `length` 属性の値をチェックすることで、ユーザーが選択したファイルの数を知ることができます。

```js
const numFiles = fileList.length;
```

個々の {{DOMxRef("File")}} オブジェクトは、単に配列としてリストにアクセスするだけで取得できます。

```js
for (let i = 0, numFiles = fileList.length; i < numFiles; i++) {
  const file = fileList[i];
  // ...
}
```

このループは、ファイルリスト内のすべてのファイルを繰り返し処理します。

{{DOMxRef("File")}} オブジェクトには 3 つのプロパティがあり、ファイルに関する有益な情報を得られます。

- `name`
  - : 読み取り専用の文字列としてのファイル名。これはファイル名のみで、パスに関する情報は含まれていません。
- `size`
  - : 読み取り専用の 64 ビット整数によるバイト単位のファイルサイズです。
- `type`
  - : 読み取り専用の文字列としてのファイルの MIME タイプです。MIME タイプが特定できないときは空文字列 (`""`) となります。

### 例: ファイルサイズを表示

次のコードは `size` プロパティを利用する例です。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ファイルのサイズ</title>
</head>

<body>
  <form name="uploadForm">
    <div>
      <input id="uploadInput" type="file" name="myFiles" multiple>
      選択されたファイル: <span id="fileNum">0</span>;
      合計サイズ: <span id="fileSize">0</span>
    </div>
    <div><input type="submit" value="Send file"></div>
  </form>

  <script>
  function updateSize() {
    let nBytes = 0,
        oFiles = this.files,
        nFiles = oFiles.length;
    for (let nFileId = 0; nFileId < nFiles; nFileId++) {
      nBytes += oFiles[nFileId].size;
    }
    let sOutput = nBytes + " bytes";
    // 倍数近似のための任意のコード
    const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    for (nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
      sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
    }
    // 任意コードの末尾
    document.getElementById("fileNum").innerHTML = nFiles;
    document.getElementById("fileSize").innerHTML = sOutput;
  }

  document.getElementById("uploadInput").addEventListener("change", updateSize, false);
  </script>
</body>
</html>
```

## click() メソッドを使用して非表示の input 要素を使用する

見た目の悪い {{HTMLElement("input")}} 要素を非表示にし、独自のインターフェイスでファイル選択を開き、ユーザーが選択したファイルを表示することができます。 input 要素のスタイルを `display: none` とし、その上で {{DOMxRef("HTMLElement.click","click()")}} メソッドを {{HTMLElement("input")}} に対して呼び出すことで実現できます。

次のような HTML を考えてみましょう。

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none">
<button id="fileSelect">いくつかのファイルを選択してください。</button>
```

`click` イベントを扱うコードは次のようなものです。

```js
const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
}, false);
```

ファイル選択を開くための新しいボタンは、好きなようにスタイル付けできます。

## label 要素を使用して非表示の file input 要素を起動

JavaScript (click() メソッド) を使用せずにファイル選択を開けるようにするために、 {{HTMLElement("label")}} 要素を使用します。この場合、 input 要素に `display: none` (または `visibility: hidden`) を設定して非表示に設定すると、ラベルがキーボードからアクセスできなくなります。代わりに、視覚的に非表示にする手法 ([visually-hidden technique](https://a11yproject.com/posts/how-to-hide-content/)) を使用します。

次の HTML を見てください。

```html
<input type="file" id="fileElem" multiple accept="image/*" class="visually-hidden">
<label for="fileElem">いくつかのファイルを選択してください。</label>
```

そしてこの CSS です。

```css
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

/* 互換性のための別ルールとして、最近の Firefox と Chrome では :focus-within が必要です。 */
input.visually-hidden:focus + label {
  outline: thin dotted;
}
input.visually-hidden:focus-within + label {
  outline: thin dotted;
}
```

JavaScript コードを追加して `fileElem.click()` を呼び出す必要はありません。またこの場合は、ラベル要素のスタイルを希望どおりに設定することもできます。前例のようにアウトラインに設定したり、background-color や box-shadow を設定したりして、ラベルの非表示入力フィールドのフォーカスステータスを視覚的に示す必要があります。(この記事を書いている時点では、Firefox は `<input type="file">` 要素に対してこの視覚的な手がかりを表示していません。)

## ドラッグ＆ドロップを使用したファイルの選択

ユーザーがファイルをウェブアプリケーションにドラッグ＆ドロップすることもできます。

最初のステップは、ドロップゾーンを確立することです。コンテンツのどの部分がドロップを受け入れるかは、アプリケーションの設計によって異なりますが、要素をドロップイベントを受け取るのは簡単です。

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

この例では、ID `dropbox` を持つ要素をドロップゾーンに指定しています。これは、{{domxref('Document/dragenter_event', 'dragenter')}}、{{domxref('Document/dragover_event', 'dragover')}}、{{domxref('Document/drop_event', 'drop')}} の各イベントのリスナーを追加することで行われます。

実際には、この場合、 `dragenter` と `dragover` のイベントでは何もする必要はありませんので、これらの関数はどちらも簡単です。これらの関数はイベントの伝播を停止し、既定のアクションが発生しないようにするだけです。

```js
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
```

本当の魔法は `drop()` 関数の中で起こります。

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

ここでは、イベントから `dataTransfer` フィールドを取得し、そこからファイルリストを取得し、それを `handleFiles()` に渡します。これより先は、ユーザーが入力要素を使用したかドラッグ＆ドロップを使用するかどうかにかかわらず、ファイルの処理方法は全く同じです。

## 例: ユーザーが選択した画像のサムネイルを表示

次の素晴らしい写真共有サイトを開発していて、ユーザーが実際に画像をアップロードする前に HTML を使って画像のサムネイルプレビューを表示させたいとしましょう。前に説明したように `input` 要素やドロップゾーンを設定し、次の `handleFiles()` のような関数を呼び出せば良いのです。

```js
function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith('image/')){ continue }

    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // 「プレビュー」とは、コンテンツが表示される div 出力のことを想定しています。

    const reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
  }
}
```

ここでは、ユーザーが選択したファイルを処理するループが各ファイルの `type` 属性を見て、その MIME タイプが "`image/`" という文字列で始まるかどうかを確認しています。画像である各ファイルに対して、新しい `img` 要素を作成します。CSS は、きれいな境界線や影を設定したり、画像のサイズを指定したりするために使用しますので、ここでは必要ありません。

各画像には CSS クラス `obj` が追加されており、DOM ツリーで簡単に見つけることができます。また、各画像に `file` 属性を追加し、画像の {{DOMxRef("File")}} を指定しています。これにより、後で実際にアップロードする画像を取得することができます。{{DOMxRef("Node.appendChild()")}} を使用して、文書のプレビュー領域に新しいサムネイルを追加します。

次に、画像の読み込みと `img` 要素へのアタッチを非同期で処理するための {{DOMxRef("FileReader")}} を確立します。新しい `FileReader` オブジェクトを作成した後、その `onload` 関数を設定し、`readAsDataURL()` を呼び出してバックグラウンドで読み込み処理を開始します。画像ファイルのコンテンツ全体が読み込まれると、それらは `data:` URL に変換され、`onload` コールバックに渡されます。このルーチンの実装では、`img` 要素の `src` 属性が読み込まれた画像に設定され、その結果、画像がユーザの画面のサムネイルに表示されます。

## オブジェクト URL を利用する

DOM の {{DOMxRef("URL.createObjectURL()")}} と {{DOMxRef("URL.revokeObjectURL()")}} メソッドを使用すると、ユーザーのコンピューター上のローカルファイルなど、DOM {{DOMxRef("File")}} オブジェクトを使用して参照可能なあらゆるデータを参照するために使用できるシンプルな URL 文字列を作成できます。

HTML から URL で参照したい {{DOMxRef("File")}} オブジェクトがある場合は、次のようにオブジェクト URL を作成します。

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

オブジェクト URL は {{DOMxRef("File")}} オブジェクトを識別する文字列です。 {{DOMxRef("URL.createObjectURL()")}} を呼び出すたびに、すでにそのファイルのオブジェクト URL を作成していても、一意のオブジェクト URL が作成されます。これらはそれぞれ解除する必要があります。これらはドキュメントがアンロードされると自動的に解放されますが、ページが動的にこれらを使用している場合は {{DOMxRef("URL.revokeObjectURL()")}} を呼び出して明示的に解放する必要があります。

```js
URL.revokeObjectURL(objectURL);
```

## 例: オブジェクト URL で画像を表示

この例では、オブジェクト URL を使用して画像のサムネイルを表示しています。さらに、ファイル名やサイズなどの他のファイル情報も表示します。

インターフェースとなる HTML は次のようになります。

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none">
<a href="#" id="fileSelect">いくつかのファイルを選択してください。</a>
<div id="fileList">
  <p>ファイルが選択されていません。</p>
</div>
```

これにより、ファイル {{HTMLElement("input")}} 要素と、ファイル選択を呼び出すリンクが確立されます (あまり美しくないファイル入力を非表示にするため)。これは、ファイル選択を呼び出すメソッドと同様に、セクション [click() メソッドを使用して非表示の input 要素を使用する](#click_%e3%83%a1%e3%82%bd%e3%83%83%e3%83%89%e3%82%92%e4%bd%bf%e7%94%a8%e3%81%97%e3%81%a6%e9%9d%9e%e8%a1%a8%e7%a4%ba%e3%81%ae_input_%e8%a6%81%e7%b4%a0%e3%82%92%e4%bd%bf%e7%94%a8%e3%81%99%e3%82%8b) で説明されています。

`handleFiles()` メソッドは次のようになります。

```js
const fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // "#" への移動を防ぐ
}, false);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>ファイルが選択されていません。</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 60;
      img.onload = function() {
        URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = this.files[i].name + ": " + this.files[i].size + " バイト";
      li.appendChild(info);
    }
  }
}
```

これは、{{HTMLElement("div")}} の URL を `fileList` という ID で取得することから始まります。これは、サムネイルを含むファイルリストを挿入するブロックです。

`handleFiles()` に渡された {{DOMxRef("FileList")}} オブジェクトが `null` の場合、ブロックの内部 HTML に「ファイルが選択されていません」と表示するように設定します。そうでない場合は、次のようにファイルリストの構築を開始します。

1.  新しく順序なしリスト ({{HTMLElement("ul")}}) 要素を作成します。
2.  新しいリスト要素は、{{HTMLElement("div")}} ブロックの中に {{DOMxRef("Node.appendChild()")}} メソッドを呼び出すことで挿入されます。
3.  `files` で表される {{DOMxRef("FileList")}} 内のそれぞれの {{DOMxRef("File")}} に対して次の処理を実行します。

    1.  新しくリスト項目 ({{HTMLElement("li")}}) 要素を作成し、リストに挿入します。
    2.  新しく画像 ({{HTMLElement("img")}}) 要素を作成します。
    3.  {{DOMxRef("URL.createObjectURL()")}} を用いて、Blob の URL を作成して、画像のソースをファイルを表す新しいオブジェクト URL に設定します。
    4.  画像の高さを 60 ピクセルに設定します。
    5.  画像が読み込まれると不要になるため、画像の読み込みイベントハンドラーを設定してオブジェクトの URL を解放します。これは {{DOMxRef("URL.revokeObjectURL()")}} メソッドを呼び出し、`img.src` で指定したオブジェクト URL 文字列を渡すことで行います。
    6.  新しいリスト項目をリストに追加する。

上のコードのライブデモはこちらです。

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

## 例: ユーザが選択したファイルを送信

もう１つは、ユーザーが選択したファイルやファイル (先ほどの例で選択した画像など) をサーバーにアップロードできるようにすることです。これは非常に簡単に非同期で行うことができます。

### アップロードタスクの生成

前の例でサムネイルを作成したコードの続きで、すべてのサムネイル画像が CSS クラス `obj` にあり、対応する {{DOMxRef("File")}}} が `file` 属性に添付されていることを思い出してください。これにより、このように{{DOMxRef("Document.querySelectorAll()")}}を使用して、ユーザーがアップロードするために選択した画像をすべて選択することができます。

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

2 行目は、CSS クラス `obj` を持つドキュメント内のすべての要素の {{DOMxRef("NodeList")}}} を取得し `imgs` と呼ばれる変数に格納します。この例では、これらの要素はすべての画像サムネイルになります。このリストを取得したら、それを参照して、それぞれの新しい `FileUpload` インスタンスを作成するのは簡単です。それぞれが対応するファイルのアップロードを処理します。

### ファイルのアップロード処理を行う

`FileUpload` 関数は 2 つの入力、画像要素と画像データを読み込むファイルを受け付けます。

```js
function FileUpload(img, file) {
  const reader = new FileReader();
  this.ctrl = createThrobber(img);
  const xhr = new XMLHttpRequest();
  this.xhr = xhr;

  const self = this;
  this.xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
          const percentage = Math.round((e.loaded * 100) / e.total);
          self.ctrl.update(percentage);
        }
      }, false);

  xhr.upload.addEventListener("load", function(e){
          self.ctrl.update(100);
          const canvas = self.ctrl.ctx.canvas;
          canvas.parentNode.removeChild(canvas);
      }, false);
  xhr.open("POST", "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php");
  xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
  reader.onload = function(evt) {
    xhr.send(evt.target.result);
  };
  reader.readAsBinaryString(file);
}
```

上の `FileUpload()` 関数は、進捗情報を表示するための throbber を作成し、データのアップロードを処理するための {{DOMxRef("XMLHttpRequest")}} を作成します。

実際にデータを転送する前に、いくつかの準備段階があります。

1.  `XMLHttpRequest` のアップロード `progress` リスナーは、アップロードの進捗に応じて最新の情報に基づいて throbber が更新されるように、新しいパーセント値の情報で throbber を更新するように設定されています。
2.  `XMLHttpRequest` のアップロード `load` イベントハンドラーは、進捗インジケーターが実際に 100 % に達することを確認するために、throbber の進捗情報を 100% に更新するように設定されています (プロセス中に粒度のクセがある場合)。そして、必要がなくなれば throbber を削除します。これにより、アップロードが完了すると throbber が消えます。
3.  画像ファイルをアップロードするリクエストは、`XMLHttpRequest` の `open()` メソッドを呼び出して POST リクエストを生成することで開始されます。
4.  アップロードの MIME タイプは `XMLHttpRequest` 関数の `overrideMimeType()` を呼び出して設定します。この場合、一般的な MIME タイプを使用しています。用途によっては MIME タイプを設定する必要がない場合もあります。
5.  `FileReader` オブジェクトを使用して、ファイルをバイナリー文字列に変換します
6.  最後に、コンテンツがロードされると、 `XMLHttpRequest` 関数の `send()` が呼び出され、ファイルのコンテンツがアップロードされます。

### ファイルのアップロード処理を非同期に扱う

この例では、サーバー側で PHP を使用し、クライアント側で JavaScript を使用して、ファイルの非同期アップロードを実演しています。

```js
<?php
if (isset($_FILES['myFile'])) {
    // 例:
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?><!DOCTYPE html>
<html>
<head>
    <title>dnd binary upload</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="application/javascript">
        function sendFile(file) {
            const uri = "/index.php";
            const xhr = new XMLHttpRequest();
            const fd = new FormData();

            xhr.open("POST", uri, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    alert(xhr.responseText); // handle response.
                }
            };
            fd.append('myFile', file);
            // multipart/form-data のアップロードを開始します。
            xhr.send(fd);
        }

        window.onload = function() {
            const dropzone = document.getElementById("dropzone");
            dropzone.ondragover = dropzone.ondragenter = function(event) {
                event.stopPropagation();
                event.preventDefault();
            }

            dropzone.ondrop = function(event) {
                event.stopPropagation();
                event.preventDefault();

                const filesArray = event.dataTransfer.files;
                for (let i=0; i<filesArray.length; i++) {
                    sendFile(filesArray[i]);
                }
            }
        }
    </script>
</head>
<body>
    <div>
        <div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;">Drag & drop your file here...</div>
    </div>
</body>
</html>
```

## 例: オブジェクト URL を使用して PDF を表示

オブジェクト URL は画像以外にも使用できます。埋め込まれた PDF ファイルや、ブラウザーで表示可能な他のリソースを表示するために使用できます。

Firefox では、 PDF が iframe 内に埋め込まれて表示されるようにするには (ダウンロードファイルとして提案されるのではなく)、`pdfjs.disabled` の設定を `false` {{non-standard_inline()}} に設定する必要があります。

```html
<iframe id="viewer">
```

そして、`src` 属性の変更点はこちらです。

```js
const obj_url = URL.createObjectURL(blob);
const iframe = document.getElementById('viewer');
iframe.setAttribute('src', obj_url);
URL.revokeObjectURL(obj_url);
```

## 例: 他のファイル形式でのオブジェクト URL の使用

他の形式のファイルも同じように操作できます。ここでは、アップロードされた動画をプレビューする方法を紹介します。

```js
const video = document.getElementById('video');
const obj_url = URL.createObjectURL(blob);
video.src = obj_url;
video.play();
URL.revokeObjectURL(obj_url);
```

## 仕様書

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('HTML WHATWG', 'number-state.html#concept-input-type-file-selected', 'File upload state')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('File API')}}</td>
      <td>{{Spec2('File API')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

## 関連情報

- {{DOMxRef("File")}}
- {{DOMxRef("FileList")}}
- {{DOMxRef("FileReader")}}
- {{DOMxRef("URL")}}
- {{DOMxRef("XMLHttpRequest")}}
- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
