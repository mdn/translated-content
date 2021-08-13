---
title: HTMLInputElement.webkitDirectory
slug: Web/API/HTMLInputElement/webkitDirectory
tags:
  - API
  - File System API
  - File and Directory Entries API
  - Files
  - HTML DOM
  - HTMLInputElement
  - Non-standard
  - Property
  - Reference
  - Web
  - webkitdirectory
  - プロパティ
translation_of: Web/API/HTMLInputElement/webkitdirectory
---
<p>{{APIRef("HTML DOM")}}{{non-standard_header}}</p>

<p><span class="seoSummary"><code><strong>HTMLInputElement.webkitDirectory</strong></code> プロパティで、 {{htmlattrxref("webkitdirectory", "input")}} という HTML 属性の値を反映し、 {{HTMLElement("input")}} 要素によってユーザーがファイルの代わりにディレクトリを選択できることを示します。ディレクトリが選択された場合、ディレクトリとその内容の階層構造が選択されたアイテムのセットに含まれます。選択されているファイルシステムのファイルアイテムは、 {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} を使用して受け取ることができます。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"> <em>HTMLInputElement</em>.webkitdirectory = <em>boolValue</em></pre>

<h3 id="Value" name="Value">値</h3>

<p>論理型で、 <code>true</code> は {{HTMLElement("input")}} 要素がディレクトリの身を選択することができることを、 <code>false</code> はファイルのみが選択できることを示します。</p>

<h2 id="Understanding_the_results" name="Understanding_the_results">結果を理解する</h2>

<p>ユーザーが選択を行った後、 <code>files</code> の中のそれぞれの {{domxref("File")}} オブジェクトは各自が {{domxref("File.webkitRelativePath")}} プロパティセットを持ち、ファイルが所在する位置が選択されたディレクトリの中の相対パスで設定されます。例えば、次のようなファイルシステムを考えてみてください。</p>

<ul>
 <li>PhotoAlbums
  <ul>
   <li>Birthdays
    <ul>
     <li>Jamie's 1st birthday
      <ul>
       <li>PIC1000.jpg</li>
       <li>PIC1004.jpg</li>
       <li>PIC1044.jpg</li>
      </ul>
     </li>
     <li>Don's 40th birthday
      <ul>
       <li>PIC2343.jpg</li>
       <li>PIC2344.jpg</li>
       <li>PIC2355.jpg</li>
       <li>PIC2356.jpg</li>
      </ul>
     </li>
    </ul>
   </li>
   <li>Vacations
    <ul>
     <li>Mars
      <ul>
       <li>PIC5533.jpg</li>
       <li>PIC5534.jpg</li>
       <li>PIC5556.jpg</li>
       <li>PIC5684.jpg</li>
       <li>PIC5712.jpg</li>
      </ul>
     </li>
    </ul>
   </li>
  </ul>
 </li>
</ul>

<p>ユーザーが <code>PhotoAlbums</code> を選択すると、 files によって報告されるリストは上記のすべてのファイルに対する {{domxref("File")}} オブジェクトを含みます。 — しかし、ディレクトリは含みません。 <code>PIC2343.jpg</code> のエントリでは <code>webkitRelativePath</code> が <code>PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg</code> となりますこれによって {{domxref("FileList")}} がフラットでも階層構造を知ることができます。</p>

<div class="note">
<p><strong>メモ:</strong> <code>webkitRelativePath</code> の挙動は <em>Chromium &lt; 72</em> では異なります。詳しくは<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=124187">このバグ</a>を参照してください。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<p>この例では、ユーザーが1つまたは複数のディレクトリを選択することができるディレクトリピッカーが表示されます。 {{event("change")}} イベントが発生すると、選択されたディレクトリ階層ないのすべてのファイルを含むリストが生成され、表示されます。</p>

<h3 id="HTML_content">HTML content</h3>

<pre class="brush: html">&lt;input type="file" id="filepicker" name="fileList" webkitdirectory multiple /&gt;
&lt;ul id="listing"&gt;&lt;/ul&gt;</pre>

<h3 id="JavaScript_content">JavaScript content</h3>

<pre class="brush: js">document.getElementById("filepicker").addEventListener("change", function(event) {
  let output = document.getElementById("listing");
  let files = event.target.files;

  for (let i=0; i&lt;files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
}, false);
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Example') }}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{ SpecName('File System API', '#dom-htmlinputelement-webkitdirectory', 'webkitdirectory') }}</td>
   <td>{{ Spec2('File System API') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>This API has no official W3C or WHATWG specification.</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLInputElement.webkitdirectory")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/File_and_Directory_Entries_API">File and Directory Entries API</a></li>
 <li>{{domxref("HTMLInputElement.webkitEntries")}}</li>
 <li>{{domxref("File.webkitRelativePath")}}</li>
</ul>
