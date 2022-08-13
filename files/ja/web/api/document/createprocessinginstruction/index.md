---
title: Document.createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
  - createProcessInstruction
translation_of: Web/API/Document/createProcessingInstruction
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary"><code>createProcessingInstruction()</code> は新しい<a href="/ja/docs/Web/API/ProcessingInstruction">処理命令</a>ノードを生成して返します。</span></p>

<p>新しいノードは {{ domxref("node.insertBefore") }} のように、あらゆることを成立させるために XML 文書に挿入されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:js"><var>piNode</var> = <var>document</var>.createProcessingInstruction(<var>target</var>, <var>data</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<ul>
 <li><code><var>piNode</var></code> は結果の {{ domxref("ProcessingInstruction") }} ノードです。</li>
 <li><code><var>target</var></code> は処理命令の最初の部分 (つまり <code>&lt;?<strong><var>target</var></strong> … ?&gt;</code>) を含む文字列です。</li>
 <li><code><var>data</var></code> は target の後に処理命令が伝えるすべての情報を含む文字列です。このデータはあなた次第ですが、 <code>?&gt;</code> は処理命令を閉じるので含むことができません。</li>
</ul>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt><code>DOM_INVALID_CHARACTER</code></dt>
 <dd>以下の何れかが真になると例外を投げます。
 <ul>
  <li>処理命令の <strong><var>target</var></strong> が無効である — 有効な <em><a class="external" href="https://www.w3.org/TR/REC-xml/#dt-name" rel="external">XML 名</a></em>とは、 "xml", "XML" またはその2つの大文字・小文字の組み合わせであり、 <code>&lt;?xml-stylesheet ?&gt;</code> のような標準化されたものではないものです。</li>
  <li><em>closing processing instruction sequence</em> (<code>?&gt;</code>) が<code><var>data</var></code> に含まれている。</li>
 </ul>
 </dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js">var doc = new DOMParser().parseFromString('&lt;foo /&gt;', 'application/xml');
var pi = doc.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');

doc.insertBefore(pi, doc.firstChild);

console.log(new XMLSerializer().serializeToString(doc));
// Displays: &lt;?xml-stylesheet href="mycss.css" type="text/css"?&gt;&lt;foo/&gt;
</pre>

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
   <td>{{SpecName('DOM WHATWG', '#dom-document-createprocessinginstruction', 'createProcessingInstruction()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM4', '#dom-document-createprocessinginstruction', 'createProcessingInstruction()')}}</td>
   <td>{{Spec2('DOM4')}}</td>
   <td><code><var>data</var></code> 引数の検証方法のもっと詳細な定義を追加した。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-135944439', 'createProcessingInstruction()')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>対象名の名前空間が正しい形式かどうかチェックされないこと、どの文字が対象名に違反するかの定義、返された {{domxref("ProcessingInstruction")}} オブジェクトのより詳細についてのメモを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-135944439', 'createProcessingInstruction()')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-135944439', 'createProcessingInstruction()')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Document.createProcessingInstruction")}}</p>
