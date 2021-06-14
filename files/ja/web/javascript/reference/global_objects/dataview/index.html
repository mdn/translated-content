---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
tags:
  - Class
  - DataView
  - JavaScript
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>DataView</code></strong> ビューは {{jsxref("ArrayBuffer")}} の多様な数値型を、プラットフォームの{{glossary("Endianness", "エンディアン")}}に関係なく読み書きするための低水準インターフェイスを提供します。</span></p>

<h2 id="Description" name="Description">説明</h2>

<h3 id="Endianness" name="Endianness">エンディアン</h3>

<p>多バイトの数値形式は、マシンアーキテクチャによってメモリー内での表現が異なります。これは {{Glossary("Endianness", "エンディアン")}}で説明しています。DataView のアクセサーは、プラットフォームアーキテクチャのエンディアンに関係なくデータにアクセスする方法を明確に制御する手段を提供します。</p>

<pre class="brush: js notranslate">var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* リトルエンディアン */);
  // Int16Array はプラットフォームのエンディアンを使用する
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true または false
</pre>

<h3 id="64-bit_Integer_Values" name="64-bit_Integer_Values">64 ビット整数値</h3>

<p>JavaScript は現在のところ、64 ビット整数値に標準で対応していないので、<code>DataView</code> はネイティブの 64 ビット操作を提供していません。回避策として、独自で <code>getUint64()</code> 関数を実装して {{jsxref("Number.MAX_SAFE_INTEGER")}} までの制度の値を受け取れるようにします。</p>

<pre class="brush: js notranslate">function getUint64(dataview, byteOffset, littleEndian) {
  // 64 ビット数を 2 つの 32 ビット (4 バイト) の部分に分割する
  const left =  dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset+4, littleEndian);

  // 2 つの 32 ビットの値を結合する
  const combined = littleEndian? left + 2**32*right : 2**32*left + right;

  if (!Number.isSafeInteger(combined))
    console.warn(combined, 'exceeds MAX_SAFE_INTEGER. Precision may be lost');

  return combined;
}
</pre>

<p>他にも、完全な 64 ビットの幅が必要な場合、{{jsxref("BigInt")}} を作成することもできます。さらに言えば、ネイティブの BigInt がユーザーランドライブラリの同等品よりもはるかに速いのですが、JavaScript では BigInt は可変長であるという性質上、常に 32 ビット整数よりもはるかに遅くなります。</p>

<pre class="brush: js notranslate">const BigInt = window.BigInt, bigThirtyTwo = BigInt(32), bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // 64 ビット数を 2 つの 32 ビット (4 バイト) の部分に分割する
  const left = BigInt(dataview.getUint32(byteOffset|0, !!littleEndian)&gt;&gt;&gt;0);
  const right = BigInt(dataview.getUint32((byteOffset|0) + 4|0, !!littleEndian)&gt;&gt;&gt;0);

  // 2 つの 32 ビットの値を結合して返す
  return littleEndian ? (right&lt;&lt;bigThirtyTwo)|left : (left&lt;&lt;bigThirtyTwo)|right;
}</pre>

<h2 id="Constructor" name="Constructor">コンストラクタ</h2>

<dl>
 <dt><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/DataView/DataView"><code>DataView()</code></a></dt>
 <dd>新しい <code>DataView</code> オブジェクトを作成します。</dd>
</dl>

<h2 id="Instance_properties" name="Instance_properties">インスタンスプロパティ</h2>

<dl>
 <dt>{{jsxref("DataView.prototype.buffer")}}</dt>
 <dd>このビューによって参照される {{jsxref("ArrayBuffer")}} 。構築時に設定されるため、<strong>読取専用</strong>です。</dd>
 <dt>{{jsxref("DataView.prototype.byteLength")}}</dt>
 <dd>{{jsxref("ArrayBuffer")}} の開始位置からこのビューの(バイト単位の)長さ。構築時に設定されるため、<strong>読取専用</strong>です。</dd>
 <dt>{{jsxref("DataView.prototype.byteOffset")}}</dt>
 <dd>{{jsxref("ArrayBuffer")}} の開始位置からこのビューの(バイト単位の)オフセット。構築時に設定されるため、<strong>読取専用</strong>です。</dd>
</dl>

<h2 id="Instance_methods" name="Instance_methods">インスタンスメソッド</h2>

<dl>
 <dt>{{jsxref("DataView.prototype.getInt8()")}}</dt>
 <dd>ビューの開始位置から指定されたバイト単位のオフセットで符号付き 8 ビット整数値(byte)を取得します。</dd>
 <dt>{{jsxref("DataView.prototype.getUint8()")}}</dt>
 <dd>ビューの開始位置から指定されたバイト単位のオフセットで符号無し 8 ビット整数値(unsigned byte) を取得します。</dd>
 <dt>{{jsxref("DataView.prototype.getInt16()")}}</dt>
 <dd>ビューの開始位置から指定されたバイト単位のオフセットで符号付き 16 ビット整数値(short)を取得します。</dd>
 <dt>{{jsxref("DataView.prototype.getUint16()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号無し 16 ビット整数値(unsigned short)を取得します。</dd>
 <dt>{{jsxref("DataView.prototype.getInt32()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号あり 32 ビット整数値(long)を取得します。</dd>
 <dt>{{jsxref("DataView.prototype.getUint32()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号無し 32 ビット整数値(unsigned long)を取得します。</dd>
 <dt>{{jsxref("DataView.prototype.getFloat32()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号あり 32 ビット浮動小数点数(float)を取得します。</dd>
 <dt>{{jsxref("DataView.prototype.getFloat64()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号あり 64 ビット浮動小数点数(double)を取得します。</dd>
 <dt>{{jsxref("DataView.prototype.getBigInt64()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号あり 64 ビット整数値(long long)を取得します。</dd>
 <dt>{{jsxref("DataView.prototype.getBigUint64()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号なし 64 ビット整数値(unsigned long long)を取得します。</dd>
 <dt>{{jsxref("DataView.prototype.setInt8()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号あり 8 ビット整数値(byte)を格納します。</dd>
 <dt>{{jsxref("DataView.prototype.setUint8()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号なし 8 ビット整数値(unsigned byte)を格納します。</dd>
 <dt>{{jsxref("DataView.prototype.setInt16()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号あり 16 ビット整数値(short)を格納します。</dd>
 <dt>{{jsxref("DataView.prototype.setUint16()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号無し 16 ビット整数値(unsigned short)を格納します。</dd>
 <dt>{{jsxref("DataView.prototype.setInt32()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号あり 32 ビット整数値(long)を格納します。</dd>
 <dt>{{jsxref("DataView.prototype.setUint32()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号無し 32 ビット整数値(unsigned long)を格納します。</dd>
 <dt>{{jsxref("DataView.prototype.setFloat32()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号あり 32 ビット浮動小数点数(float)を格納します。</dd>
 <dt>{{jsxref("DataView.prototype.setFloat64()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号あり 64 ビット浮動小数点数(double)を格納します。</dd>
 <dt>{{jsxref("DataView.prototype.setBigInt64()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号あり 64 ビット整数値(long long)を格納します。</dd>
 <dt>{{jsxref("DataView.prototype.setBigUint64()")}}</dt>
 <dd>ビューの開始位置からの指定されたバイト単位のオフセットで符号なし 64 ビット整数値(unsigned long long)を格納します。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<h3 id="Using_DataView" name="Using_DataView">DataView を使用する</h3>

<pre class="brush: js notranslate">var buffer = new ArrayBuffer(16);
var view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-dataview-objects', 'DataView')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.DataView")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a class="link-https" href="https://github.com/jDataView/jDataView">jDataView</a>: <code>DataView</code> API をすべてのブラウザーや Node.js に展開するポリフィルの JavaScript ライブラリー</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("SharedArrayBuffer")}}</li>
</ul>
