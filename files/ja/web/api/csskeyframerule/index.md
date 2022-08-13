---
title: CSSKeyframeRule
slug: Web/API/CSSKeyframeRule
tags:
  - API
  - CSS Animations
  - CSSOM
  - Experimental
  - Interface
  - Reference
translation_of: Web/API/CSSKeyframeRule
---
<div>{{APIRef("CSSOM")}}{{SeeCompatTable}}</div>

<p><strong><code>CSSKeyframeRule</code></strong> インターフェイスは、指定された keyframe のスタイルセットを表すオブジェクトを提供します。<a href="/ja/docs/CSS/At-rule">@-規則</a> の {{cssxref("@keyframes")}} の 1 つのキーフレームに対応しています。これはタイプ値 8 (<code>CSSRule.KEYFRAME_RULE</code>) の {{domxref("CSSRule")}} インターフェイスを実装しています。</p>

<h2 id="プロパティ">プロパティ</h2>

<p>{{domxref("CSSRule")}} のように、<code>CSSKeyframeRule</code> もそのインターフェイスから継承したプロパティを実装しています。独自プロパティも 2 つ実装しています：</p>

<dl>
 <dt>{{domxref("CSSKeyframe.keyText")}}</dt>
 <dd><code>'10%'</code> や <code>'75%'</code> のように、keyframe のキーを表す。<code>from</code> キーワードは <code>'0%'</code> にマッピングされ、<code>to</code> キーワードは <code>'100%'</code> にマッピングされる。</dd>
 <dt id="cssRules">{{domxref("CSSKeyframe.style")}}  {{readOnlyInline}}</dt>
 <dd>keyfrom に関連した CSS スタイルの {{domxref("CSSStyleDeclaration")}} を返す。</dd>
</dl>

<h2 id="メソッド">メソッド</h2>

<p>{{domxref("CSSRule")}} のように、<code>CSSKeyframeRule</code> もそのインターフェイスのメソッドを継承しています。独自のメソッドはありません。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Animations', '#CSSKeyframeRule-interface', 'CSSKeyframeRule')}}</td>
   <td>{{Spec2('CSS3 Animations')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.CSSKeyframeRule")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{cssxref("@keyframes")}}</li>
 <li>{{domxref("CSSKeyFramesRule")}}</li>
</ul>
