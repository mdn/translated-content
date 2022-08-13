---
title: ウェブアニメーション API
slug: Web/API/Web_Animations_API
tags:
  - API
  - Animation
  - Landing
  - Reference
  - Web Animations
  - アニメーション
  - ウェブアニメーション
translation_of: Web/API/Web_Animations_API
---
<p>{{DefaultAPISidebar("Web Animations")}}</p>

<p>Web Animation API を使うことで 、ウェブページの見た目の変更を同期させたり時間を調整すること、つまり DOM 要素のアニメーションが可能です。これらはタイミングモデルおよびアニメーションモデルという2つのモデルの組み合わせによって実現されます。</p>

<h2 id="Concepts_and_usage" name="Concepts_and_usage">概念と利用方法</h2>

<p>Web Animation API は、 DOM 要素のアニメーションを記述する共通言語をブラウザーと開発者に提供します。 API の背景の概念や利用方法についての詳しい情報は、<a href="/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API">Web Animation API の利用</a>をご覧ください。</p>

<h2 id="Web_Animations_interfaces" name="Web_Animations_interfaces">ウェブアニメーションインターフェイス</h2>

<dl>
 <dt>{{domxref("Animation")}}</dt>
 <dd>アニメーションノードやソースの再生制御やタイムラインを提供します。 {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} コンストラクターで作成されたオブジェクトを取ることができます。</dd>
 <dt>{{domxref("KeyframeEffect")}}</dt>
 <dd><strong>キーフレーム</strong>と呼ばれるアニメーション可能なプロパティと値の組み合わせ、及びその<a href="/ja/docs/Web/API/Web_Animations_API/Animation_timing_options">タイミングオプション</a>を記述します。これは {{domxref("Animation.Animation", "Animation()")}} コンストラクターを使用して再生することができます。</dd>
 <dt>{{domxref("AnimationTimeline")}}</dt>
 <dd>アニメーションのタイムラインを表します。このインターフェイスはタイムライン機能 ({{domxref("DocumentTimeline")}} などのタイムラインオブジェクト) を定義するために存在し、これ自体は開発者からはアクセスされません。</dd>
 <dt>{{domxref("AnimationEvent")}}</dt>
 <dd>実際には CSS アニメーションの一部です。</dd>
 <dt>{{domxref("DocumentTimeline")}}</dt>
 <dd>アニメーションのタイムラインを表し、既定の文書のタイムライン ({{domxref("Document.timeline")}} プロパティ) を含みます。</dd>
 <dt>{{domxref("EffectTiming")}}</dt>
 <dd>{{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly()")}}, {{domxref("KeyframeEffect.KeyframeEffect()")}} のすべてがタイミングプロパティの任意の連想配列オブジェクトを受け付けます。</dd>
</dl>

<h2 id="他のインターフェイスへの拡張">他のインターフェイスへの拡張</h2>

<p>Web Animation API によって {{domxref("document")}} 及び {{domxref("element")}} に新たに追加された機能もあります。</p>

<h3 id="Extensions_to_the_Document_interface" name="Extensions_to_the_Document_interface"><code>Document</code> インターフェイスの拡張</h3>

<dl>
 <dt>{{domxref("document.timeline")}}</dt>
 <dd>既定の文書タイムラインを表す <code>DocumentTimeline</code> オブジェクトです。</dd>
 <dt>{{domxref("document.getAnimations()")}}</dt>
 <dd><code>document</code> 内で要素に対して現在有効な {{domxref("Animation")}} オブジェクトの配列を返します。</dd>
 <dt>
 <h3 id="Extensions_to_the_Element_interface" name="Extensions_to_the_Element_interface"><code>Element</code> インターフェイスの拡張</h3>
 </dt>
 <dt>{{domxref("Element.animate()")}}</dt>
 <dd>要素のアニメーションを作成して再生するショートカットメソッドです。作成された {{domxref("Animation")}} オブジェクトのインスタンスを返します。</dd>
 <dt>{{domxref("Element.getAnimations()")}}</dt>
 <dd>{{domxref("Animation")}} オブジェクトの配列で、現在その要素に関連し、将来の実行が予定されているものを返します。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Animations')}}</td>
   <td>{{Spec2('Web Animations')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API">Web Animation API の利用</a></li>
 <li><a href="https://mozdevs.github.io/Animation-examples/">Web Animationのデモ</a></li>
 <li><a href="https://github.com/web-animations/web-animations-js">Polyfill</a></li>
 <li>Firefox の現在の実装: <a href="https://birtles.github.io/areweanimatedyet/">AreWeAnimatedYet</a></li>
 <li>
  <p><a href="http://codepen.io/danwilson/pen/xGBKVq">ブラウザーの対応のテスト</a></p>
 </li>
</ul>
