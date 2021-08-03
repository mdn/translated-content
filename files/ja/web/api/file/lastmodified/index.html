---
title: File.lastModified
slug: Web/API/File/lastModified
tags:
  - API
  - File API
  - ファイル
  - プロパティ
  - リファレンス
translation_of: Web/API/File/lastModified
---
<div>{{APIRef("File")}}</div>

<p><code><strong>File.lastModified</strong></code> 読み取り専用プロパティは、ファイルの最終更新日時を UNIX エポック (1970 年 1 月 1 日の深夜 0 時) からのミリ秒数で返します。最終更新日時がわからないファイルは、現在の日時を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:js">var time = <var>instanceOfFile</var>.lastModified;
</pre>

<h3 id="値">値</h3>

<p>UNIX エポックからのミリ秒数を表す数値。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="Reading_from_file_input" name="Reading_from_file_input">file 入力欄からの読み込み</h3>

<pre class="brush: html">&lt;input type="file" multiple id="fileInput"&gt;
</pre>

<pre>const fileInput = document.querySelector('#fileInput');
fileInput.addEventListener('change', (event) =&gt; {
  // filesはFileList型オブジェクト (NodeListと似ている)
  const files = event.target.files;

  for (let file of files) {
    const date = new Date(file.lastModified);
    console.log(`${file.name} has a last modified date of ${date}`);
  }
});</pre>

<p>以下の結果を試してみてください。</p>

<p>{{ EmbedLiveSample('Reading_from_file_input', 300, 50) }}</p>

<h3 id="Dynamically_created_files" name="Dynamically_created_files">動的に生成されるファイル</h3>

<p>ファイルが動的に生成された場合、最終更新日時は {{domxref("File.File()", "new File()")}} コンストラクター関数で指定できます。ファイルが見つからない場合、 <code>lastModified</code> は <code>File</code> オブジェクトの作成時に {{jsxref("Date.now()")}} から現在の時刻を継承します。</p>

<pre class="brush:js">var fileWithDate = new File([], 'file.bin', {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); //returns 1485903600000

var fileWithoutDate = new File([], 'file.bin');
console.log(fileWithoutDate.lastModified); //returns current time
</pre>

<h2 id="Reduced_time_precision" name="Reduced_time_precision">時間の精度の低下</h2>

<p>タイミング攻撃やフィンガープリンティングに対する保護機能を提供するために、<code>someFile.lastModified</code> の精度はブラウザーの設定に応じて丸められることがあります。<br>
 Firefox では、<code>privacy.reduceTimerPrecision</code> 設定は既定で有効になっており、 Firefox 59 では既定で 20 us に設定されています。60 で 2 ms になります。</p>

<pre class="brush: js">// reduced time precision (2ms) in Firefox 60
someFile.lastModified;
// 1519211809934
// 1519211810362
// 1519211811670
// ...


// reduced time precision with `privacy.resistFingerprinting` enabled
someFile.lastModified;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
</pre>

<p>Firefox では、<code>privacy.resistFingerprinting</code> を有効にすることもできます。精度は 100 ms か <code>privacy.resistFingerprinting.reduceTimerPrecision.microseconds</code> のいずれか大きい方の値になります。</p>

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
   <td>{{SpecName('File API', '#file-attrs', 'lastModified')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.File.lastModified")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("File")}}</li>
</ul>
