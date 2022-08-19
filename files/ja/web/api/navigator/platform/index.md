---
title: Navigator.platform
slug: Web/API/Navigator/platform
tags:
  - API
  - Deprecated
  - HTML DOM
  - Navigator
  - Property
  - Reference
  - platform
browser-compat: api.Navigator.platform
translation_of: Web/API/NavigatorID/platform
original_slug: Web/API/NavigatorID/platform
---
<p>{{ APIRef("HTML DOM") }} {{Deprecated_Header}}</p>

<p>ブラウザーのプラットフォームを表す文字列を返します。仕様書ではブラウザーが常に空文字列を返すことを許可していますので、信頼できる答えを得るためにこのプロパティを頼らないようにしてください。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><em>platform</em> = navigator.platform
</pre>

<h3 id="Value">値</h3>

<p>ブラウザーを実行しているプラットフォームを識別する {{domxref("DOMString")}}、あるいはブラウザーがプラットフォームの識別を断わった (または識別できない) 場合は空文字列になります。<code>platform</code> は空文字列か、ブラウザーを実行しているプラットフォームを表す文字列でなければなりません。</p>

<p>例: "<code>MacIntel</code>", "<code>Win32</code>", "<code>FreeBSD i386</code>", "<code>WebTV OS</code>"</p>

<h2 id="Example">例</h2>

<pre class="brush: js">console.log(navigator.platform);</pre>

<h2 id="Usage_notes">使用上のメモ</h2>

<p>Chrome、Edge、Firefox 63 以降を含むほとんどのブラウザーは、64 ビット版の Windows で実行していても <code>"Win32"</code> を返します。 Internet Explorer やバージョン 63 より前の Firefox は <code>"Win64"</code> を返します。</p>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>
