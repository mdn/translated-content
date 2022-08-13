---
title: Navigator.buildID
slug: Web/API/Navigator/buildID
tags:
  - API
  - DOM
  - Gecko
  - Navigator
  - Property
  - buildID
translation_of: Web/API/Navigator/buildID
---
<p>{{ ApiRef("HTML DOM") }}</p>

<p>ブラウザーのビルド識別子を返します。最近のブラウザーでは、このプロパティはプライバシーの目的で、固定のタイムスタンプを返すようになり、例えば Firefox 64 系列では <code>20181001000000</code> となります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="eval"><var>buildID</var> = <var>navigator</var>.buildID;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>アプリケーションのビルド識別子を表す文字列です。 ビルド識別子は <code>YYYYMMDDHHMMSS</code> の形式です。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="eval">console.log(window.navigator.buildID);</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<p>どの公的な標準にも属していません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Navigator.buildID")}}</p>
