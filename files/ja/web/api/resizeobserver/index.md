---
title: ResizeObserver
slug: Web/API/ResizeObserver
tags:
  - API
  - Experimental
  - ResizeObserver
  - インターフェイス
  - オブザーバー
  - コンテンツボックス
  - バウンディングボックス
  - リサイズオブザーバー API
  - リファレンス
translation_of: Web/API/ResizeObserver
---
<div>{{APIRef("Resize Observer API")}}{{SeeCompatTable}}</div>

<p class="summary"><strong><code>ResizeObserver</code></strong> インターフェイスは、{{domxref('Element')}} のコンテンツ矩形または {{domxref('SVGElement')}} のバウンディングボックスへの変更を監視します。コンテンツ矩形は、コンテンツを配置できるボックスです。つまり、ボーダーボックスからパディングを引いたものです。(ボーダーとパディングの説明は<a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Box_model">ボックスモデル</a>を見てください。)</p>

<p>ResizeObserver は、無限のコールバックループとそれ自身のコールバック関数でサイズ変更することによって生じるであろう循環的な依存関係を避けます。これは、後続のフレームで DOM のより深い要素のみを処理することによって行われます。実装が仕様に従っている場合は、描画の前およびレイアウトの後にリサイズイベントを呼び出す必要があります。</p>

<h2 id="コンストラクター">コンストラクター</h2>

<dl>
 <dt>{{domxref("ResizeObserver.ResizeObserver", "ResizeObserver()")}}</dt>
 <dd>新しい <code>ResizeObserver</code> オブジェクトを作成して返します。</dd>
</dl>

<h2 id="プロパティ">プロパティ</h2>

<p>なし</p>

<h3 id="イベントハンドラー">イベントハンドラー</h3>

<p>なし</p>

<h2 id="メソッド">メソッド</h2>

<dl>
 <dt>{{domxref('ResizeObserver.disconnect()')}}</dt>
 <dd>監視対象のすべての {{domxref('Element')}} ターゲットの監視を終了します。</dd>
 <dt>{{domxref('ResizeObserver.observe()')}}</dt>
 <dd>指定された {{domxref('Element')}} の監視を開始します。</dd>
 <dt>{{domxref('ResizeObserver.unobserve()')}}</dt>
 <dd>指定された {{domxref('Element')}} の監視を終了します。</dd>
</dl>

<h2 id="例">例</h2>

<p>次の例では、幅の変更に応じてボックスの境界線の半径を変更します。</p>

<pre class="brush: js">const resizeObserver = new ResizeObserver(entries =&gt; {
  for (let entry of entries) {
    entry.target.style.borderRadius = Math.max(0, 250 - entry.contentRect.width) + 'px';
  }
});
resizeObserver.observe(document.querySelector('.box:nth-child(2)'));</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Resize Observer','#resize-observer-interface','ResizeObserver')}}</td>
   <td>{{Spec2('Resize Observer')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.ResizeObserver")}}</p>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li><a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Box_model">ボックスモデル</a></li>
 <li>{{domxref('PerformanceObserver')}}</li>
 <li>{{domxref('MutationObserver')}}</li>
 <li>{{domxref('IntersectionObserver')}} (<a href="/ja/docs/Web/API/Intersection_Observer_API">Intersection Observer API</a> の一部)</li>
</ul>
