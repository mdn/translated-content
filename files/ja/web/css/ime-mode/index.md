---
title: ime-mode
slug: Web/CSS/ime-mode
tags:
  - CSS
  - CSS Reference
  - Deprecated
translation_of: Web/CSS/ime-mode
---
<div>{{CSSRef}} {{deprecated_header}}</div>

<p><strong><code>ime-mode</code></strong> プロパティは、テキストフィールドで Input Method Editor (以下 IME) をコントロールします。このプロパティは廃止されました。</p>

<pre class="brush:css no-line-numbers">/* Keyword values */
ime-mode: auto;
ime-mode: normal;
ime-mode: active;
ime-mode: inactive;
ime-mode: disabled;

/* Global values */
ime-mode: inherit;
ime-mode: initial;
ime-mode: unset;</pre>

<p><code>ime-mode</code>は、一部のブラウザーで無秩序に実装されたプロパティです。これは、Microsoft が独自の拡張機能として Internet Explorer 5 で導入したものです。{{spec("http://msdn.microsoft.com/library/ms530767(VS.85).aspx","-ms-ime-mode Attribute | imeMode Property")}}</p>

<div class="blockIndicator note">
<p><strong>Note:</strong> <span class="tlid-translation translation" lang="ja"><span title="">一般的に、パブリックなWebサイトがIMEモードを変更することは適切ではありません。</span></span> このプロパティは、プライベートなWebアプリケーションでのみ使用すべきです。また、以前にレガシーコードで設定されていた場合は、プロパティを元に戻すべきです。</p>
</div>

<p>{{cssinfo}}</p>

<h2 id="構文">構文</h2>

<h3 id="値">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>現在の IME の状態を変更しません。これはデフォルトの設定です。</dd>
 <dt><code>normal</code></dt>
 <dd>IME の状態を通常の状態に変更します。この値はユーザースタイルシートでウェブページが指定した値を上書きするために用意されました。 <em>この値は Internet Explorer ではサポートされていません。</em></dd>
 <dt><code>active</code></dt>
 <dd>コンテンツがフォーカスを得た時に IME は自動的にオンになります。ユーザーがオフにしない限りテキスト入力には IME が使用されます。 <em>Linux ではサポートされていません。</em></dd>
 <dt><code>inactive</code></dt>
 <dd>コンテンツがフォーカスを得た時に IME は自動的にオフに設定されますが、ユーザーは任意で IME をオンにする事ができます。 <em>Linux ではサポートされていません。</em></dd>
 <dt><code>disabled</code></dt>
 <dd>IME は無効にされます。ユーザーによって IME をオンにする事はできません。</dd>
</dl>

<h3 id="公式の構文">公式の構文</h3>

{{csssyntax}}

<h2 id="例">例</h2>

<p>この例は、フィールドの IME のサポートを無効にします。これは、 拡張文字セットをサポートしていないデータベースにデータを入力するフィールドの一般的なプラクティスでした。</p>

<pre>&lt;input type="text" name="name" value="initial value" style="ime-mode: disabled"&gt;</pre>

<div class="blockIndicator note">
<p>拡張文字がフォームを通過しないように IME を無効にすることに依存しないでください。 IME を無効にしても、拡張文字をフォームのフィールドに貼り付けることはできます。</p>
</div>

<h2 id="注記">注記</h2>

<p>Firefox の <code>ime-mode</code> は Internet Explorer と異なり、<code>&lt;input type="password"&gt;</code> にも適用できます。しかしこれはユーザーの使い勝手にはマイナスの影響を与えます。パスワードフィールドでは IME は有効に<em>されるべきではありません</em>。ユーザーは以下の CSS をユーザースタイルシートに挿入する事で推奨された設定に従わないサイトの動作を修正する事ができます:</p>

<pre class="brush: css">input[type=password] {
  ime-mode: auto !important;
}</pre>

<p>Gecko 1.9 の Mac 版では、disabled に設定されたエディターがフォーカスを失う際に、IME の状態をフォーカスを得る直前の状態には戻りません。そのため、Mac ユーザーは <code>disabled</code> 値を利用したフォームの利用に苛立ちを覚えるかもしれません。</p>

<h2 id="仕様書">仕様書</h2>

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
   <td>{{SpecName('CSS3 Basic UI', '#input-method-editor', 'ime-mode')}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td>初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー互換性">ブラウザー互換性</h2>

<div>
<div>


<p>{{Compat("css.properties.ime-mode")}}</p>
</div>
</div>
