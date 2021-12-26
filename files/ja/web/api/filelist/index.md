---
title: FileList
slug: Web/API/FileList
tags:
  - API
  - File API
  - Files
translation_of: Web/API/FileList
---
<div>{{APIRef("File API")}}{{gecko_minversion_header("1.9")}}</div>

<p>この型のオブジェクトは、HTML {{HTMLElement("input")}} 要素の <code>files</code> プロパティによって返されます。これにより、<code>&lt;input type="file"&gt;</code> 要素で選択されたファイルのリストにアクセスすることができます。また、ドラッグ＆ドロップ API を使用しているときに、Web コンテンツにドロップされたファイルのリストにも使用されます。使用方法の詳細は <a href="/ja/docs/DragDrop/DataTransfer" title="DragDrop/DataTransfer"><code>DataTransfer</code></a> オブジェクトを見てください。</p>

<div class="note">
<p><strong>注:</strong> {{Gecko("1.9.2")}} 以下では、input 要素は一度に 1 つのファイルだけサポートします。これは、FileList には 1 つのファイルだけが含まれることを意味します。{{Gecko("1.9.2")}} から、input 要素の multiple 属性が true の場合、FileList は複数ファイルを含められます。</p>
</div>

<h2 id="Using_the_file_list" name="Using_the_file_list">ファイルリストの使用</h2>

<p>すべての <code>&lt;input&gt;</code> 要素ノードは、その上に <code>FileList</code> 型の <code>files</code> 属性を持ち、このリスト内の項目へのアクセスを可能にします。例えば、HTML が以下のファイル入力を含んでいるとします。</p>

<pre class="notranslate">&lt;input id="fileItem" type="file"&gt;
</pre>

<p>次のコード行は、ノードのファイルリスト内の最初のファイルを <a href="/ja/docs/Web/API/File" title="DOM/File"><code>File</code></a> オブジェクトとして取得します。</p>

<pre class="brush: js notranslate">var file = document.getElementById('fileItem').files[0];
</pre>

<h2 id="Method_overview" name="Method_overview">メソッドの概要</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td><code>File <a href="/ja/docs/Web/API/FileList#item">item</a>(index);</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes" name="Attributes">プロパティ</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">属性</td>
   <td class="header">型</td>
   <td class="header">説明</td>
  </tr>
  <tr>
   <td><code>length</code></td>
   <td><code>integer</code></td>
   <td>リスト内のファイル数を示す読み取り専用の値。</td>
  </tr>
 </tbody>
</table>

<h2 id="Methods" name="Methods">メソッド</h2>

<h3 id="item" name="item()">item()</h3>

<p><span class="short_text" id="result_box" lang="ja"><span>ファイルリスト</span><span>内の</span><span>指定されたインデックスにある</span><span>ファイルを表す</span></span> <a href="/ja/docs/Web/API/File" title="DOM/File"><code>File</code></a> オブジェクトを返す。</p>

<pre class="notranslate"> File item(
   index
 );
</pre>

<h6 id="Parameters" name="Parameters">パラメータ</h6>

<dl>
 <dt><code>index</code></dt>
 <dd>リストから扱うための 0 ベースのインデックス。</dd>
</dl>

<h6 id="Return_value" name="Return_value">戻り値</h6>

<p>要求されたファイルを表す <a href="/ja/docs/Web/API/File" title="DOM/File"><code>File</code></a>。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、<code>input</code> 要素を使用して、ユーザーが選択したすべてのファイルを繰り返し処理します。</p>

<pre class="brush:js notranslate">// fileInput は HTML の input 要素 &lt;input type="file" id="myfileinput" multiple&gt; です。
var fileInput = document.getElementById("myfileinput");

// files は FileList オブジェクトです (NodeList に似ています)。
var files = fileInput.files;
var file;

// files をくり返します。
for (var i = 0; i &lt; files.length; i++) {

    // get item
    file = files.item(i);
    //or
    file = files[i];

    alert(file.name);
}</pre>

<p>完全な例はこちら。</p>

<pre class="brush:html notranslate">&lt;!DOCTYPE HTML&gt;
&lt;html&gt;
&lt;head&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- multiple は複数のファイルを選択できるように設定されています。--&gt;

&lt;input id="myfiles" multiple type="file"&gt;

&lt;/body&gt;

&lt;script&gt;

var pullfiles=function(){
    // クエリセレクターが好き
    var fileInput = document.querySelector("#myfiles");
    var files = fileInput.files;
    // files.length をキャッシュ
    var fl = files.length;
    var i = 0;

    while ( i &lt; fl) {
        // ループ内のファイル var をローカライズする
        var file = files[i];
        alert(file.name);
        i++;
    }
}

// input 要素の onchange を設定し pullfiles を呼び出すようにします。
document.querySelector("#myfiles").onchange=pullfiles;

//a.t
&lt;/script&gt;

&lt;/html&gt;</pre>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('File API', '#filelist-section', 'FileList')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#concept-input-type-file-selected', 'selected files')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの互換性</h2>

<p>{{Compat("api.FileList")}}</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Using_files_from_web_applications" title="Using files from web applications">Web アプリケーションからファイルを扱う</a></li>
 <li><a href="/ja/docs/Web/API/File" title="DOM/File"><code>File</code></a></li>
 <li><code><a href="/ja/docs/DOM/FileReader" title="DOM/FileReader">FileReader</a></code></li>
</ul>
