---
title: XRInputSource.profiles
slug: Web/API/XRInputSource/profiles
tags:
  - API
  - AR
  - Configuration
  - Input
  - Property
  - Read-only
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRInputSource
  - augmented
  - profile
translation_of: Web/API/XRInputSource/profiles
---
<p>{{APIRef("WebXR")}}{{securecontext_header}}</p>

<p><span class="seoSummary">{{domxref("XRInputSource")}} の <strong><code>profiles</code></strong> 読み取り専用プロパティは、文字列の配列を返します。 各文字列は、入力ソースの構成プロファイルを記述します。</span> プロファイル文字列は、具体性の高い順にリストされ、最も具体的なプロファイルが最初にリストされます。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: WebXR セッションがインラインモードの場合、<code>profiles</code> リストは常に空です。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <em>profileList</em> = <em>xrInputSource</em>.profiles;</pre>

<h3 id="Value" name="Value">値</h3>

<p><code>XRInputSource</code> オブジェクトが表す入力デバイスの構成プロファイルをそれぞれ記述した {{domxref("DOMString")}} オブジェクトの配列。 各入力プロファイルは、入力ソースの好ましい視覚的表現と振る舞いを指定します。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<h3 id="Input_profile_names" name="Input_profile_names">入力プロファイル名</h3>

<p>入力プロファイル名は、入力ソースが使用するように構成できる視覚的表現と振る舞いを説明する文字列です。 各文字列は、</p>

<ul>
 <li>スペースはありません。 代わりに、単語はハイフン（"-"）文字で区切られます。</li>
 <li>プラットフォームがそれを利用可能にする場合、USB のベンダー ID と製品 ID が提供される場合がありますが、信頼することはできません。</li>
 <li>特定のデバイスを一意に識別しません。 むしろ、製品が使用できる構成を識別します。</li>
 <li>該当する場合、デバイスの handedness に関する情報を提供しません。</li>
</ul>

<p>WebXR 入力プロファイルレジストリー（<a href="https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry">WebXR Input Profiles Registry</a>）は、デバイス開発者とブラウザー開発者が、使用するブラウザーや他の{{Glossary("user agent","ユーザーエージェント")}}に関係なく、特定のデバイスが同じプロファイル文字列を報告するようにするために使用します。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('WebXR','#dom-xrinputsource-profiles','XRInputSource.profiles')}}</td>
   <td>{{Spec2('WebXR')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.XRInputSource.profiles")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API</a></li>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Inputs">入力と入力ソース</a></li>
 <li><a href="/ja/docs/Web/WebXR%20Device%20API/Gamepads">WebXR アプリケーションでのゲームパッドの使用</a></li>
</ul>
