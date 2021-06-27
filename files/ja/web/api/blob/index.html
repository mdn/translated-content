---
title: Blob
slug: Web/API/Blob
tags:
  - API
  - Blob
  - File
  - File API
  - Interface
  - Raw
  - Reference
  - data
translation_of: Web/API/Blob
---
<div>{{APIRef("File API")}}</div>

<div>
<p><strong><code>Blob</code></strong> オブジェクトは blob を表しており、これは不変の生データであるファイルのようなオブジェクトです。テキストやバイナリデータとして読み込んだり、{{DOMxRef("ReadableStream")}} に変換してそのメソッドを使ったデータ処理をしたりできます。</p>

<p>Blob が表現することができるデータは必ずしも JavaScript ネイティブ形式である必要はありません。{{DOMxRef("File")}} インターフェイスは Blob をベースにしており、Blob の機能を継承してユーザーのシステム上のファイルをサポートするように拡張しています。</p>
</div>

<h2 id="Blob_の利用">Blob の利用</h2>

<dl>
</dl>

<p>他の Blob 以外のオブジェクトやデータから <code>Blob</code> を作成するには、{{DOMxRef("Blob.Blob", "Blob()")}} コンストラクタを使用します。他の Blob のデータのサブセットを含む Blob を作成するには、{{DOMxRef("Blob.slice()", "slice()")}} メソッドを使用します。ユーザーのファイルシステム上のファイルの <code>Blob</code> オブジェクトを取得するには、{{DOMxRef("File")}} のドキュメントを参照してください。</p>

<p><code>Blob</code> オブジェクトを受け入れる API も、{{domxref("File")}} のドキュメントに掲載しています。</p>

<h2 id="コンストラクタ">コンストラクタ</h2>

<dl>
 <dt>{{DOMxRef("Blob.Blob", "Blob()")}}</dt>
 <dd>コンストラクタに渡された配列内のすべてのデータを連結したものを含む、新しく作成された <code>Blob</code> オブジェクトを返します。</dd>
</dl>

<h2 id="インスタンスプロパティ">インスタンスプロパティ</h2>

<dl>
 <dt>{{DOMxRef("Blob.prototype.size")}} {{readonlyinline}}</dt>
 <dd><code>Blob</code> オブジェクトに含まれるデータのサイズ (バイト単位)。</dd>
 <dt>{{DOMxRef("Blob.prototype.type")}} {{readonlyinline}}</dt>
 <dd><code>Blob</code> に含まれるデータの MIME タイプを示す文字列。タイプが不明な場合、この文字列は空です。</dd>
</dl>

<h2 id="インスタンスメソッド" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">インスタンスメソッド</h2>

<dl>
 <dt>{{DOMxRef("Blob.prototype.arrayBuffer()")}}</dt>
 <dd><code>Blob</code> の全内容をバイナリデータとして含む {{DOMxRef("ArrayBuffer")}} で解決する Promise を返します。</dd>
 <dt>{{DOMxRef("Blob.prototype.slice()")}}</dt>
 <dd>呼び出された Blob の指定されたバイト数範囲のデータを含む新しい <code>Blob</code> オブジェクトを返します。</dd>
 <dt>{{DOMxRef("Blob.prototype.stream()")}}</dt>
 <dd><code>Blob</code> の内容を読み込むために使用できる {{DOMxRef("ReadableStream")}} を返します。</dd>
 <dt>{{DOMxRef("Blob.prototype.text()")}}</dt>
 <dd>UTF-8 テキストとして解釈された Blob の内容全体を含む {{DOMxRef("USVString")}} で解決する Promise を返します。</dd>
</dl>

<h2 id="例" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">例</h2>

<h3 id="Blob_の作成">Blob の作成</h3>

<p>{{DOMxRef("Blob.Blob", "Blob()")}} コンストラクタは、他のオブジェクトから Blob を作成することができます。たとえば、JSON 文字列から Blob を作成するには、次のようにします。</p>

<pre class="brush: js notranslate">const obj = {hello: 'world'};
const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});</pre>

<h3 id="型付き配列の内容を表す_URL_の作成">型付き配列の内容を表す URL の作成</h3>

<p>次のコードは、JavaScript の<a href="/ja/docs/Web/JavaScript/Typed_arrays">型付き配列</a>を作成し、型付き配列のデータを含む新しい <code>Blob</code> を作成します。次に、{{DOMxRef("URL.createObjectURL()")}} を呼び出して、Blob を {{glossary("URL")}} に変換します。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p&gt;この例では、スペース文字から文字 Z までの ASCII コードを含む型付けされた配列を作成し、
それをオブジェクト URL に変換します。
そのオブジェクト URL を開くためのリンクが作成されます。
リンクをクリックすると、デコードされたオブジェクト URL が表示されます。&lt;/p&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<p>このコードの例示のための主要な部分は <code>typedArrayToURL()</code> 関数で、与えられた型付き配列から <code>Blob</code> を作成し、それに対するオブジェクト URL を返します。データをオブジェクト URL に変換した後は、要素の {{HTMLElement("img")}} 属性の値として含む、さまざまな方法で使用することができます (もちろん、データに画像が含まれていることを前提としています)。</p>

<pre class="brush: js notranslate">function typedArrayToURL(typedArray, mimeType) {
  return URL.createObjectURL(new Blob([typedArray.buffer], {type: mimeType}))
}

const bytes = new Uint8Array(59);

for(let i = 0; i &lt; 59; i++) {
  bytes[i] = 32 + i;
}

const url = typedArrayToURL(bytes, 'text/plain');

const link = document.createElement('a');
link.href = url;
link.innerText = 'Open the array URL';

document.body.appendChild(link);</pre>

<h4 id="結果">結果</h4>

<p>例のリンクをクリックすると、ブラウザがオブジェクトの URL をデコードしているのがわかります。</p>

<p>{{EmbedLiveSample("Creating_a_URL_representing_the_contents_of_a_typed_array", 600, 200)}}</p>

<h3 id="Blob_からデータを抽出する">Blob からデータを抽出する</h3>

<p><code>Blob</code> から内容を読み込む方法の 1 つは、{{DOMxRef("FileReader")}} を使用することです。次のコードは、<code>Blob</code> の内容を型付き配列として読み込みます。</p>

<pre class="brush: js notranslate">const reader = new FileReader();
reader.addEventListener('loadend', () =&gt; {
   // reader.result には blob の内容が型付き配列として格納されます。
});
reader.readAsArrayBuffer(blob);</pre>

<p><code>Blob</code> から内容を読み込む別の方法としては、{{domxref("Response")}} を使用する方法があります。次のコードは、<code>Blob</code> の内容をテキストとして読み取るものです。</p>

<pre class="brush: js notranslate">const text = await (new Response(blob)).text();
</pre>

<p>または、{{DOMxRef("Blob.prototype.text()")}} を使用します。</p>

<pre class="brush: js notranslate">const text = await blob.text();</pre>

<p><code>FileReader</code> の他のメソッドを使用することで、Blob の内容を文字列またはデータ URL として読み込むことができます。</p>

<h2 id="Browser_Compatibility" name="Browser_Compatibility" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('File API', '#blob-section', '<code>Blob</code> インターフェイス')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">ブラウザ実装状況</h2>

<p>{{Compat("api.Blob")}}</p>

<h2 id="あわせて参照" style="margin-bottom: 20px; line-height: 30px; font-size: 2.14285714285714rem;">あわせて参照</h2>

<ul>
 <li>{{domxref("BlobBuilder")}}</li>
 <li>{{domxref("FileReader")}}</li>
 <li>{{domxref("File")}}</li>
 <li>{{domxref("URL.createObjectURL")}}</li>
 <li><a href="/ja/docs/Web/API/File/Using_files_from_web_applications">Webアプリケーションからのファイルの使用</a></li>
</ul>
