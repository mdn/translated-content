---
title: HTMLSourceElement
slug: Web/API/HTMLSourceElement
tags:
  - API
  - HTML DOM
  - HTMLSourceElement
  - Interface
  - Reference
translation_of: Web/API/HTMLSourceElement
---
<div>{{ApiRef}}</div>

<p><code>HTMLSourceElement</code> インターフェイスは {{htmlelement("source")}} 要素を操作するための (継承によって利用できる、通常の {{domxref("HTMLElement")}} オブジェクトインターフェイスにから見て) 特別なプロパティを提供します。</p>

<p>{{InheritanceDiagram(600, 120)}}</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親である {{domxref("HTMLElement")}} からプロパティを継承しています。</em></p>

<dl>
 <dt>{{domxref("HTMLSourceElement.keySystem")}} {{experimental_inline}}</dt>
 <dd>ストリームを暗号化するキーシステムを説明する {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLSourceElement.media")}}</dt>
 <dd>HTML の {{ htmlattrxref("media", "source") }} 属性を反映する {{domxref("DOMString")}} で、メディアリソースの意図する型を含みます。</dd>
 <dt>{{domxref("HTMLSourceElement.sizes")}} {{experimental_inline}}</dt>
 <dd>ブレークポイント間の画像の寸法を表す {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLSourceElement.src")}}</dt>
 <dd>HTML の {{ htmlattrxref("src", "source") }} 属性を反映する {{domxref("DOMString")}} で、メディアリソースの URL が入ります。 {{domxref("HTMLSourceElement.src")}} プロパティは関連する {{HTMLElement("source")}} 要素が {{htmlelement("video")}} や {{htmlelement("audio")}} 要素などのメディア要素の中で入れ子になった場合のみ意味を持ちます。 {{HTMLElement("picture")}} 要素の中で入れ子になったときは意味を持たず、無視されます。
 <div class="note"><strong>メモ</strong>: <code>src</code> プロパティが (兄弟要素によって) 更新された場合、親の {{domxref("HTMLMediaElement")}} の <code>load</code> メソッドが完了時に呼び出されます。 <code>&lt;source&gt;</code> 要素は自動的には再読み込みされないからです。</div>
 </dd>
 <dt>{{domxref("HTMLSourceElement.srcset")}} {{experimental_inline}}</dt>
 <dd>HTML の {{ htmlattrxref("srcset", "source") }} 属性を反映する {{domxref("DOMString")}} で、コンマ (<code>',', U+002C COMMA</code>) で区切られた画像の候補のリストが入ります。画像の候補は URL の後に <code>'w'</code> に続いて画像の幅、または <code>'x'</code> に続いてピクセルの密度を指定します。</dd>
 <dt>{{domxref("HTMLSourceElement.type")}}</dt>
 <dd>HTML の {{ htmlattrxref("type", "source") }} 属性を反映する {{domxref("DOMString")}} で、メディアリソースの型が入ります。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>固有メソッドはありません。 {{domxref("HTMLElement")}} インターフェイスからの継承メソッドが利用可能です。</em></p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('EME', '#dom-sourcekeysystem', 'HTMLSourceElement')}}</td>
   <td>{{Spec2('EME')}}</td>
   <td><code>keySystem</code> 属性を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "the-video-element.html#the-source-element", "HTMLSourceElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName("HTML5 W3C")}} より変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#the-source-element", "HTMLSourceElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.HTMLSourceElement")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このインターフェイスを実装する HTML 要素: {{ HTMLElement("source") }}.</li>
 <li>{{HTMLElement("source")}} 要素を含むことができる要素の HTML DOM API: {{domxref("HTMLVideoElement")}}, {{domxref("HTMLAudioElement")}}, {{domxref("HTMLPictureElement")}}.</li>
</ul>
