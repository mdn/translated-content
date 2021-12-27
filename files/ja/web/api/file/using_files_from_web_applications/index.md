---
title: Web アプリケーションからのファイルの使用
slug: Web/API/File/Using_files_from_web_applications
tags:
  - Files
  - HTML5
  - Intermediate
  - NeedsUpdate
  - ajax upload
  - upload
translation_of: Web/API/File/Using_files_from_web_applications
---
<div>{{APIRef("File API")}}</div>

<p>HTML5 から DOM に追加された File API によって、ウェブコンテンツがユーザーにローカルファイルを選択するように指示し、それらのファイルを読み取れるようになりました。この選択は HTML の <code>{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}</code> 要素か、ドラッグ＆ドロップのどちらかを使用することで行うことができます。</p>

<p>File API を拡張機能や他の chrome コードから利用することもできます。この場合、もういくつか知っておきたい機能があります。詳細は <a href="/ja/docs/Extensions/Using_the_DOM_File_API_in_chrome_code">DOM File API を chrome code で使う</a> をご覧下さい。</p>

<h2 id="Accessing_selected_files" name="Accessing_selected_files">選択されたファイルへのアクセス</h2>

<p>この HTML を見てください。</p>

<pre class="brush: html notranslate">&lt;input type="file" id="input"&gt;</pre>

<p>File API では、ユーザーが選択したファイルを表す {{DOMxRef("File")}} オブジェクトを含む {{DOMxRef("FileList")}} にアクセスすることができます。</p>

<p><code>input</code> 要素の <code>multiple</code> 属性により、複数のファイルを選択することができます。</p>

<p>旧来の DOM セレクターを使って、最初に選択されたファイルにアクセスします。</p>

<pre class="brush: js notranslate">const selectedFile = document.getElementById('input').files[0];</pre>

<h3 id="Accessing_selected_files_on_a_change_event" name="Accessing_selected_files_on_a_change_event">change イベントでの選択されたファイルへのアクセス</h3>

<p><code>change</code> イベントを通して {{DOMxRef("FileList")}} にアクセスすることも可能です (ただし必須ではありません)。このように {{DOMxRef("EventTarget.addEventListener()")}} を使って <code>change</code> イベントのリスナーを追加する必要があります。</p>

<pre class="brush: js notranslate">const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* ファイルリストを処理するコードがここに入る */
}</pre>

<h2 id="Getting_information_about_selected_files" name="Getting_information_about_selected_files">選択されたファイルについての情報の取得</h2>

<p>DOM が提供する {{DOMxRef("FileList")}} オブジェクトは、{{DOMxRef("File")}} オブジェクトとして指定された、ユーザーが選択したすべてのファイルをリストアップします。ファイルリストの <code>length</code> 属性の値をチェックすることで、ユーザーが選択したファイルの数を知ることができます。</p>

<pre class="brush: js notranslate">const numFiles = fileList.length;</pre>

<p>個々の {{DOMxRef("File")}} オブジェクトは、単に配列としてリストにアクセスするだけで取得できます。</p>

<pre class="brush: js notranslate">for (let i = 0, numFiles = fileList.length; i &lt; numFiles; i++) {
  const file = fileList[i];
  // ...
}
</pre>

<p>このループは、ファイルリスト内のすべてのファイルを繰り返し処理します。</p>

<p>{{DOMxRef("File")}} オブジェクトには3つのプロパティがあり、ファイルに関する有益な情報を得られます。</p>

<dl>
 <dt><code>name</code></dt>
 <dd>読み取り専用の文字列としてのファイル名。これはファイル名のみで、パスに関する情報は含まれていません。</dd>
 <dt><code>size</code></dt>
 <dd>読み取り専用の64ビット整数によるバイト単位のファイルサイズです。</dd>
 <dt><code>type</code></dt>
 <dd>読み取り専用の文字列としてのファイルの MIME タイプ (読み取り専用)。MIME タイプが特定できないときは空文字列 (<code>""</code>) となります。</dd>
</dl>

<h3 id="Example_Showing_files_size" name="Example_Showing_files_size">例: ファイルサイズを表示</h3>

<p>次のコードは <code>size</code> プロパティを利用する例です。</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;File(s) size&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;form name="uploadForm"&gt;
    &lt;div&gt;
      &lt;input id="uploadInput" type="file" name="myFiles" multiple&gt;
      選択されたファイル: &lt;span id="fileNum"&gt;0&lt;/span&gt;;
      合計サイズ: &lt;span id="fileSize"&gt;0&lt;/span&gt;
    &lt;/div&gt;
    &lt;div&gt;&lt;input type="submit" value="Send file"&gt;&lt;/div&gt;
  &lt;/form&gt;

  &lt;script&gt;
  function updateSize() {
    let nBytes = 0,
        oFiles = this.files,
        nFiles = oFiles.length;
    for (let nFileId = 0; nFileId &lt; nFiles; nFileId++) {
      nBytes += oFiles[nFileId].size;
    }
    let sOutput = nBytes + " bytes";
    // 倍数近似のための任意のコード
    const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    for (nMultiple = 0, nApprox = nBytes / 1024; nApprox &gt; 1; nApprox /= 1024, nMultiple++) {
      sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
    }
    // 任意コードの末尾
    document.getElementById("fileNum").innerHTML = nFiles;
    document.getElementById("fileSize").innerHTML = sOutput;
  }

  document.getElementById("uploadInput").addEventListener("change", updateSize, false);
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Using_hidden_file_input_elements_using_the_click_method" name="Using_hidden_file_input_elements_using_the_click_method">click() メソッドを使い input 要素を隠す</h2>

<p>見た目の悪い {{HTMLElement("input")}} 要素を隠し、独自のインターフェイスでファイル選択を開き、ユーザーが選択したファイルを表示することができます。 input 要素のスタイルを <code>display: none</code> とし、その上で {{DOMxRef("HTMLElement.click","click()")}} メソッドを {{HTMLElement("input")}} に対して呼び出すことで実現できます。</p>

<p>次のような HTML を考えてみましょう。</p>

<pre class="brush: html notranslate">&lt;input type="file" id="fileElem" multiple accept="image/*" style="display:none"&gt;
&lt;button id="fileSelect"&gt;いくつかのファイルを選択します。&lt;/button&gt;</pre>

<p><code>click</code> イベントを扱うコードは次のようなものです。</p>

<pre class="brush: js notranslate">const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
}, false);
</pre>

<p>ファイル選択を開く新しいボタンは、好きなようにスタイル付けできます。</p>

<h2 id="Using_a_label_element_to_trigger_a_hidden_file_input_element" name="Using_a_label_element_to_trigger_a_hidden_file_input_element">label 要素を使用して隠した file input 要素を起動</h2>

<p>JavaScript (click() メソッド) を使用せずにファイルピッカーを開けるようにするために、 {{HTMLElement("label")}} 要素を使用します。この場合、もし入力エレメントの <code>display: none</code> (または <code>visibility: hidden</code>) を設定して非表示に設定すると、ラベルがキーボードからアクセスできなくなります。代わりに、視覚的に非表示にする手法 (<a href="https://a11yproject.com/posts/how-to-hide-content/">visually-hidden technique</a>) を使用します。</p>

<p>次の HTMLを見てください。</p>

<pre class="brush: html notranslate">&lt;input type="file" id="fileElem" multiple accept="image/*" class="visually-hidden"&gt;
&lt;label for="fileElem"&gt;いくつかのファイルを選択します。&lt;/label&gt;</pre>

<p>そしてこの CSS です。</p>

<pre class="brush: css notranslate">.visually-hidden {
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
</pre>

<p><code>fileElem.click()</code>を呼び出すための JavaScript コードを追加する必要はありません。またこの場合は、ラベル要素のスタイルを希望どおりに設定することもできます。前例のようにアウトラインに設定したり、background-color、box-shadow を設定したりして、ラベルの非表示入力フィールドのフォーカスステータスを視覚的に示す必要があります。(この記事を書いている時点では、Firefox は<code>&lt;input type="file"&gt;</code> 要素に対してこの視覚的な手がかりを表示していません)</p>

<h2 id="Selecting_files_using_drag_and_drop" name="Selecting_files_using_drag_and_drop">ドラッグ &amp; ドロップを使用したファイルの選択</h2>

<p>ユーザーがファイルをウェブアプリケーションにドラッグ &amp; ドロップすることもできます。</p>

<p>最初のステップは、ドロップゾーンを確立することです。コンテンツのどの部分がドロップを受け入れるかは、アプリケーションの設計によって異なりますが、要素をドロップイベントを受け取るのは簡単です。</p>

<pre class="brush: js notranslate">let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
</pre>

<p>この例では、ID <code>dropbox</code> を持つ要素をドロップゾーンに指定しています。これは、{{event('dragenter')}}、{{event('dragover')}}、および {{event('drop')}} イベントのリスナーを追加することで行われます。</p>

<p>実際には、この場合、<code>dragenter</code>と<code>dragover</code>のイベントでは何もする必要はありませんので、これらの関数はどちらも簡単です。これらの関数はイベントの伝播を停止し、デフォルトのアクションが発生しないようにするだけです。</p>

<pre class="brush: js notranslate">function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
</pre>

<p>本当の魔術は <code>drop()</code> 関数の中で起こります。</p>

<pre class="brush: js notranslate">function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
</pre>

<p>ここでは、イベントから <code>dataTransfer</code> フィールドを取得し、そこからファイルリストを取得し、それを <code>handleFiles()</code> に渡します。これより先は、ユーザーが入力要素を使用したかドラッグ &amp; ドロップを使用するかどうかにかかわらず、ファイルの処理方法は全く同じです。</p>

<h2 id="Example_Showing_thumbnails_of_user-selected_images" name="Example_Showing_thumbnails_of_user-selected_images">例: ユーザが選択した画像のサムネイルを表示</h2>

<p>次の素晴らしい写真共有サイトを開発していて、ユーザーが実際に画像をアップロードする前に HTML を使って画像のサムネイルプレビューを表示させたいとしましょう。前に説明したように <code>input</code> 要素やドロップゾーンを設定し、次の <code>handleFiles()</code> のような関数を呼び出せば良いのです。</p>

<pre class="brush: js notranslate">function handleFiles(files) {
  for (let i = 0; i &lt; files.length; i++) {
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
</pre>

<p>ここでは、ユーザーが選択したファイルを処理するループが各ファイルの <code>type</code> 属性を見て、その MIME タイプが文字列 "image/" で始まるかどうかを確認しています)。画像である各ファイルに対して、新しい <code>img</code> 要素を作成します。CSS は、きれいな境界線や影を設定したり、画像のサイズを指定したりするために使用しますので、ここでは必要ありません。</p>

<p>各画像には CSS クラス <code>obj</code> が追加されており、DOM ツリーで簡単に見つけることができます。また、各画像に <code>file</code> 属性を追加し、画像の {{DOMxRef("File")}} を指定しています。これにより、後で実際にアップロードする画像を取得することができます。{{DOMxRef("Node.appendChild()")}} を使用して、ドキュメントのプレビュー領域に新しいサムネイルを追加します。</p>

<p>次に、画像の読み込みと <code>img</code> 要素へのアタッチを非同期で処理するための {{DOMxRef("FileReader")}} を確立します。新しい <code>FileReader</code> オブジェクトを作成した後、その <code>onload</code> 関数を設定し、<code>readAsDataURL()</code> を呼び出してバックグラウンドで読み込み処理を開始します。画像ファイルのコンテンツ全体が読み込まれると、それらは <code>data:</code> URL に変換され、<code>onload</code> コールバックに渡されます。このルーチンの実装では、<code>img</code> 要素の <code>src</code> 属性が読み込まれた画像に設定され、その結果、画像がユーザの画面のサムネイルに表示されます。</p>

<h2 id="Using_object_URLs" name="Using_object_URLs">オブジェクト URL を利用する</h2>

<p>DOM {{DOMxRef("URL.createObjectURL()")}} と {{DOMxRef("URL.revokeObjectURL()")}} メソッドを使用すると、ユーザーのコンピューター上のローカルファイルなど、DOM {{DOMxRef("File")}} オブジェクトを使用して参照可能なあらゆるデータを参照するために使用できるシンプルな URL 文字列を作成できます。</p>

<p>HTML から URL で参照したい {{DOMxRef("File")}} オブジェクトがある場合は、次のようにオブジェクト URL を作成します。</p>

<pre class="brush: js notranslate">const objectURL = window.URL.createObjectURL(fileObj);</pre>

<p>オブジェクト URL は {{DOMxRef("File")}} オブジェクトを識別する文字列です。 {{DOMxRef("URL.createObjectURL()")}} を呼び出すたびに、すでにそのファイルのオブジェクト URL を作成していても、一意のオブジェクト URL が作成されます。これらはそれぞれ解除する必要があります。これらはドキュメントがアンロードされると自動的に解放されますが、ページが動的にこれらを使用している場合は {{DOMxRef("URL.revokeObjectURL()")}} を呼び出して明示的に解放する必要があります。</p>

<pre class="brush: js notranslate">URL.revokeObjectURL(objectURL);</pre>

<h2 id="Example_Using_object_URLs_to_display_images" name="Example:_Using_object_URLs_to_display_images">例: オブジェクト URL で画像を表示</h2>

<p>この例では、オブジェクト URL を使用して画像のサムネイルを表示しています。さらに、ファイル名やサイズなどの他のファイル情報も表示します。</p>

<p>インターフェースとなる HTML は次のようになります。</p>

<pre class="brush: html notranslate">&lt;input type="file" id="fileElem" multiple accept="image/*" style="display:none"&gt;
&lt;a href="#" id="fileSelect"&gt;いくつかのファイルを選択します。&lt;/a&gt;
&lt;div id="fileList"&gt;
  &lt;p&gt;選択されたファイルはありません!&lt;/p&gt;
&lt;/div&gt;
</pre>

<p>これにより、ファイル {{HTMLElement("input")}} 要素と、ファイル ピッカーを呼び出すリンクが確立されます (あまり美しくないファイル入力を非表示にするため)。これは、ファイル ピッカーを呼び出すメソッドと同様に、セクション {{anch("click() メソッドを使用して非表示のファイル入力要素を使用する")}} で説明されています。</p>

<p><code>handleFiles()</code> メソッドは次のようになります。</p>

<pre class="brush: js notranslate">const fileSelect = document.getElementById("fileSelect"),
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
    fileList.innerHTML = "&lt;p&gt;ファイルが選択されていません!&lt;/p&gt;";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i &lt; this.files.length; i++) {
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
      info.innerHTML = this.files[i].name + ": " + this.files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}
</pre>

<p>これは、{{HTMLElement("div")}} の URL を <code>fileList</code> という ID で取得することから始まります。これは、サムネイルを含むファイルリストを挿入するブロックです。</p>

<p><code>handleFiles()</code> に渡された {{DOMxRef("FileList")}} オブジェクトが <code>null</code> の場合、ブロックの内部 HTML に「ファイルが選択されていません」と表示するように設定します。そうでない場合は、次のようにファイルリストの構築を開始します。</p>

<ol>
 <li>新しく順序なしリスト ({{HTMLElement("ul")}}) 要素を作成します</li>
 <li>新しいリスト要素は、{{HTMLElement("div")}} ブロックの {{DOMxRef("Node.appendChild()")}} メソッドを呼び出して {{HTMLElement("div")}} ブロックに挿入されます</li>
 <li><code>files</code> で表される {{DOMxRef("FileList")}} 内の各 {{DOMxRef("File")}} に対して次の処理を実行します
  <ol>
   <li>新しくリスト項目 ({{HTMLElement("li")}}) 要素を作成し、リストに挿入します</li>
   <li>新しく画像 ({{HTMLElement("img")}}) 要素を作成します</li>
   <li>{{DOMxRef("URL.createObjectURL()")}} を用いて、Blob の URL を作成して、画像のソースをファイルを表す新しいオブジェクト URL に設定します</li>
   <li>画像の高さを60ピクセルに設定します</li>
   <li>画像が読み込まれると不要になるため、画像の読み込みイベントハンドラを設定してオブジェクトの URL を解放します。これは {{DOMxRef("URL.revokeObjectURL()")}} メソッドを呼び出し、<code>img.src</code> で指定したオブジェクト URL 文字列を渡すことで行います</li>
   <li>新しいリスト項目をリストに追加する</li>
  </ol>
 </li>
</ol>

<p>上のコードのライブデモはこちらです。</p>

<p>{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}</p>

<h2 id="Example_Uploading_a_user-selected_file" name="Example:_Uploading_a_user-selected_file">例: ユーザが選択したファイルを送信</h2>

<p>もう１つは、ユーザーが選択したファイルやファイル (先ほどの例で選択した画像など) をサーバーにアップロードできるようにすることです。これは非常に簡単に非同期で行うことができます。</p>

<h3 id="Creating_the_upload_tasks" name="Creating_the_upload_tasks">アップロードタスクの生成</h3>

<p>前の例でサムネイルを作成したコードの続きで、すべてのサムネイル画像が CSS クラス <code>obj</code> にあり、対応する {{DOMxRef("File")}}} が <code>file</code> 属性に添付されていることを思い出してください。これにより、このように{{DOMxRef("Document.querySelectorAll()")}}を使用して、ユーザーがアップロードするために選択した画像をすべて選択することができます。</p>

<pre class="brush: js notranslate">function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i &lt; imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
</pre>

<p>2 行目は、CSS クラス <code>obj</code> を持つドキュメント内のすべての要素の {{DOMxRef("NodeList")}}} を取得し <code>imgs</code> と呼ばれる変数に格納します。この例では、これらの要素はすべての画像サムネイルになります。このリストを取得したら、それを参照して、それぞれの新しい <code>FileUpload</code> インスタンスを作成するのは簡単です。それぞれが対応するファイルのアップロードを処理します。</p>

<h3 id="Handling_the_upload_process_for_a_file" name="Handling_the_upload_process_for_a_file">ファイルのアップロード処理を行う</h3>

<p><code>FileUpload</code> 関数は2つの入力、画像要素と画像データを読み込むファイルを受け付けます。</p>

<pre class="brush: js notranslate">function FileUpload(img, file) {
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
</pre>

<p>上の <code>FileUpload()</code> 関数は、進捗情報を表示するための throbber を作成し、データのアップロードを処理するための {{DOMxRef("XMLHttpRequest")}} を作成します。</p>

<p>実際にデータを転送する前に、いくつかの準備段階があります。</p>

<ol>
 <li><code>XMLHttpRequest</code> のアップロード <code>progress</code> リスナーは、アップロードの進捗に応じて最新の情報に基づいて throbber が更新されるように、新しいパーセンテージ情報で throbber を更新するように設定されています</li>
 <li><code>XMLHttpRequest</code> のアップロード <code>load</code> イベントハンドラは、進捗インジケータが実際に 100 % に達することを確認するために、throbber の進捗情報を 100 % に更新するように設定されています (プロセス中に粒度のクセがある場合)。そして、必要がなくなれば throbber を削除します。これにより、アップロードが完了すると throbber が消えます</li>
 <li>画像ファイルをアップロードするリクエストは、<code>XMLHttpRequest</code> の <code>open()</code> メソッドを呼び出して POST リクエストを生成することで開始されます</li>
 <li>アップロードの MIME タイプは <code>XMLHttpRequest</code> 関数の <code>overrideMimeType()</code> を呼び出して設定します。この場合、一般的な MIME タイプを使用しています。ユースケースによっては MIME タイプを設定する必要がない場合もあります</li>
 <li><code>FileReader</code> オブジェクトを使用して、ファイルをバイナリ文字列に変換します</li>
 <li>最後に、コンテンツがロードされると、<code>XMLHttpRequest</code> 関数の <code>send()</code> が呼び出され、ファイルのコンテンツがアップロードされます</li>
</ol>

<h3 id="Asynchronously_handling_the_file_upload_process" name="Asynchronously_handling_the_file_upload_process">ファイルのアップロード処理を非同期に扱う</h3>

<p>この例では、サーバー側で PHP を使用し、クライアント側で JavaScript を使用して、ファイルの非同期アップロードを実演しています。</p>

<pre class="brush: js notranslate">&lt;?php
if (isset($_FILES['myFile'])) {
    // 例:
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?&gt;&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;dnd binary upload&lt;/title&gt;
    &lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8"&gt;
    &lt;script type="application/javascript"&gt;
        function sendFile(file) {
            const uri = "/index.php";
            const xhr = new XMLHttpRequest();
            const fd = new FormData();

            xhr.open("POST", uri, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 &amp;&amp; xhr.status == 200) {
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
                for (let i=0; i&lt;filesArray.length; i++) {
                    sendFile(filesArray[i]);
                }
            }
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div&gt;
        &lt;div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;"&gt;Drag &amp; drop your file here...&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Example_Using_object_URLs_to_display_PDF" name="Example_Using_object_URLs_to_display_PDF">例: オブジェクト URL を使用して PDF を表示</h2>

<p>オブジェクト URL は画像以外にも使用できます。埋め込まれた PDF ファイルや、ブラウザーで表示可能な他のリソースを表示するために使用できます。</p>

<p>Firefox では、 PDF が iframe 内に埋め込まれて表示されるようにするには (ダウンロードファイルとして提案されるのではなく)、<code>pdfjs.disabled</code> の設定を <code>false</code> {{non-standard_inline()}} に設定する必要があります。</p>

<pre class="brush: html notranslate">&lt;iframe id="viewer"&gt;
</pre>

<p>そして、<code>src</code> 属性の変更点はこちらです。</p>

<pre class="brush: js notranslate">const obj_url = URL.createObjectURL(blob);
const iframe = document.getElementById('viewer');
iframe.setAttribute('src', obj_url);
URL.revokeObjectURL(obj_url);</pre>

<h2 id="Example_Using_object_URLs_with_other_file_types" name="Example_Using_object_URLs_with_other_file_types">例: 他のファイル形式でのオブジェクト URL の使用</h2>

<p>他の形式のファイルも同じように操作できます。ここでは、アップロードされた動画をプレビューする方法を紹介します。</p>

<pre class="brush: js notranslate">const video = document.getElementById('video');
const obj_url = URL.createObjectURL(blob);
video.src = obj_url;
video.play();
URL.revokeObjectURL(obj_url);</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'number-state.html#concept-input-type-file-selected', 'File upload state')}}</td>
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

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{DOMxRef("File")}}</li>
 <li>{{DOMxRef("FileList")}}</li>
 <li>{{DOMxRef("FileReader")}}</li>
 <li>{{DOMxRef("URL")}}</li>
 <li>{{DOMxRef("XMLHttpRequest")}}</li>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">XMLHttpRequest の使用</a></li>
</ul>
