---
title: ScrollToOptions
slug: conflicting/Web/API/Window/scroll
tags:
  - API
  - CSSOM View
  - Dictionary
  - Reference
  - ScrollToOptions
  - 辞書
translation_of: Web/API/ScrollToOptions
original_slug: Web/API/ScrollToOptions
---
<p>{{APIRef("CSSOM")}}</p>

<p class="summary">The <strong><code>ScrollToOptions</code></strong> は CSSOM View 仕様の辞書で、ある要素がスクロールする位置、およびスクロールがスムーズに行われるかどうかを指定するプロパティを指定します。</p>

<p><code>ScrollToOptions</code> 辞書は以下のメソッドの引数として提供することができます。</p>

<ul>
 <li>{{domxref("Window.scroll()")}}</li>
 <li>{{domxref("Window.scrollBy()")}}</li>
 <li>{{domxref("Window.scrollTo()")}}</li>
 <li>{{domxref("Element.scroll()")}}</li>
 <li>{{domxref("Element.scrollBy()")}}</li>
 <li>{{domxref("Element.scrollTo()")}}</li>
</ul>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("ScrollToOptions.top")}}</dt>
 <dd>ウィンドウまたは要素をスクロールするための Y 軸に沿ったピクセル数を指定します。</dd>
 <dt>{{domxref("ScrollToOptions.left")}}</dt>
 <dd>ウィンドウまたは要素をスクロールするための X 軸に沿ったピクセル数を指定します。</dd>
 <dt>{{domxref("ScrollToOptions.behavior")}}</dt>
 <dd>スクロールするのに滑らかにアニメーションするのか、一回のジャンプで瞬時に行うのかを指定します。これは実際には <code>ScrollToOptions</code> で実装されている <code>ScrollOptions</code> 辞書で定義されています。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p><a href="https://github.com/mdn/dom-examples/tree/master/scrolltooptions">scrolltooptions の例</a> (<a href="https://mdn.github.io/dom-examples/scrolltooptions/">ライブでご覧ください</a>) では、3 つの値を入力するフォームを用意しました。左と上のプロパティ (X 軸と Y 軸に沿ってスクロールする位置) を表す 2 つの数値と、滑らかなスクロールを有効にするかどうかを示すチェックボックスです。</p>

<p>フォームが送信されると、入力された値を ScrollToOptions 辞書に格納し、辞書を引数として渡して {{domxref("Window.ScrollTo()")}} メソッドを呼び出すイベントハンドラーが実行されます。</p>

<pre class="brush: js notranslate">form.addEventListener('submit', (e) =&gt; {
  e.preventDefault();
  var scrollOptions = {
    left: leftInput.value,
    top: topInput.value,
    behavior: scrollInput.checked ? 'smooth' : 'auto'
  }

  window.scrollTo(scrollOptions);
});</pre>

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
   <td>{{SpecName('CSSOM View', '#dictdef-scrolltooptions', 'ScrollToOptions')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.ScrollToOptions", 10)}}</p>
