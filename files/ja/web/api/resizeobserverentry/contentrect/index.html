---
title: ResizeObserverEntry.contentRect
slug: Web/API/ResizeObserverEntry/contentRect
tags:
  - API
  - Bounding Box
  - Property
  - Reference
  - Resize Observer API
  - ResizeObserver
  - ResizeObserverEntry
  - content box
  - observers
  - プロパティ
  - 読取専用
translation_of: Web/API/ResizeObserverEntry/contentRect
---
<div>{{APIRef("Resize Observer API")}}</div>

<p class="summary"><code>contentRect</code> は {{domxref("ResizeObserverEntry")}} インターフェイスの読み取り専用プロパティで、コールバックが実行されたときに {{domxref('DOMRectReadOnly')}} オブジェクトの形で監視中の要素の新しい寸法を返します。なお、これは {{domxref("ResizeObserverEntry.borderBoxSize")}} や {{domxref("ResizeObserverEntry.contentBoxSize")}} よりも広く対応されていますが、 Resize Observer API では早期に除外され、現在は互換性の目的で仕様書に存在しているため、将来のバージョンでは非推奨になる可能性があります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>contentRect</em> = <em>resizeObserverEntry</em>.contentRect;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref('DOMRectReadOnly')}} オブジェクトで、 {{domxref("ResizeObserverEntry.target", "target")}} プロパティで示された要素の新しい寸法が入ります。</p>

<p><code>target</code> が HTML の {{domxref("Element")}} である場合、返される <code>contentRect</code> は要素のコンテンツボックスです。 <code>target</code> が {{domxref("SVGElement")}} である場合、返される <code>contentRect</code> は SVG の囲み枠です。</p>

<h2 id="Example" name="Example">例</h2>

<p>以下のスニペットは <a href="https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html">resize-observer-text.html</a> (<a href="https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html">ソースを参照</a>) の例から取ったものです。これは簡単な機能検出テストを使用して、ブラウザーがより新しい {{domxref("ResizeObserverEntry.contentBoxSize")}} プロパティに対応しているかどうかを確認します。 — もし対応していれば、こちらを使用して必要な寸法のデータを取得します。そうでない場合は、 <code>contentRect</code> を使用します。</p>

<pre class="brush: js">const resizeObserver = new ResizeObserver(entries =&gt; {
  for (let entry of entries) {
    if(entry.contentBoxSize) {
      h1Elem.style.fontSize = Math.max(1.5, entry.contentBoxSize.inlineSize/200) + 'rem';
      pElem.style.fontSize = Math.max(1, entry.contentBoxSize.inlineSize/600) + 'rem';
    } else {
      h1Elem.style.fontSize = Math.max(1.5, entry.contentRect.width/200) + 'rem';
      pElem.style.fontSize = Math.max(1, entry.contentRect.width/600) + 'rem';
    }
  }
});

resizeObserver.observe(divElem);</pre>

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
   <td>{{SpecName('Resize Observer','#dom-resizeobserverentry-contentrect','contentRect')}}</td>
   <td>{{Spec2('Resize Observer')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ResizeObserverEntry.contentRect")}}</p>
