---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
tags:
  - Internationalization
  - JavaScript
  - Method
  - NumberFormat
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
---
<div>{{JSRef}}</div>

<p><strong><code>Intl.NumberFormat.prototype.resolvedOptions()</code></strong> メソッドは、この {{jsxref("NumberFormat")}} オブジェクトの初期化時に計算されたロケールと数値整形オプションを反映したプロパティを持つ新しいオブジェクトを返します。</p>

<div>{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-resolvedoptions.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>numberFormat</var>.resolvedOptions()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>この {{jsxref("NumberFormat")}} オブジェクトの初期化時に計算されたロケールと数値整形オプションを反映したプロパティを持つ新しいオブジェクトです。</p>

<h2 id="Description" name="Description">解説</h2>

<p>返されるオブジェクトには以下のプロパティがあります。</p>

<dl>
 <dt><code>locale</code></dt>
 <dd>実際に使用したロケールの BCP 47 言語タグ。このロケールにつながる入力 BCP 47 言語タグに Unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが <code>locale</code> に含まれます。</dd>
 <dt><code>numberingSystem</code></dt>
 <dd>もし存在すれば、 <code>options</code> 引数でこのプロパティに指定された値、または Unicode 拡張キーの <code>"nu"</code> を使って要求された値、または既定として設定される値です。</dd>
 <dt><code>notation</code></dt>
 <dd><code>options</code> 引数でこのプロパティに指定された値、または既定として設定される <code>standard</code> です。</dd>
 <dt><code>compactDisplay</code></dt>
 <dd><code>options</code> 引数でこのプロパティに指定された値、または既定として設定される <code>short</code> です。</dd>
 <dd>このプロパティは <code>notation</code> が "compact" に設定されている場合のみ存在します。</dd>
 <dt><code>signDisplay</code></dt>
 <dd><code>options</code> 引数でこのプロパティに指定された値、または既定として設定される <code>auto</code> です。</dd>
 <dt><code>useGrouping</code></dt>
 <dd><code>options</code> 引数でこのプロパティに指定された値、または既定として設定される値。</dd>
 <dt><code>currency</code></dt>
 <dt><code>currencyDisplay</code></dt>
 <dd><code>options</code> 引数でこのプロパティに指定された値、または既定として設定される値。<code>style</code>が<code>"currency"</code>の場合のみ、これらのプロパティは存在しています。</dd>
</dl>

<p>次の２つのプロパティのグループのうちどちらかのみが含まれています。:</p>

<dl>
 <dt><code>minimumIntegerDigits</code></dt>
 <dt><code>minimumFractionDigits</code></dt>
 <dt><code>maximumFractionDigits</code></dt>
 <dd><code>options</code> 引数でプロパティに対して提供されるか既定で設定される値。 <code>minimumSignificantDigits</code> または <code>maximumSignificantDigits</code> が <code>options</code> 引数で提供されなかった場合のみ、これらのプロパティは存在しています。</dd>
 <dt><code>minimumSignificantDigits</code></dt>
 <dt><code>maximumSignificantDigits</code></dt>
 <dd><code>options</code>引数でプロパティに対して提供されるかデフォルトとして設定される値。 これらのプロパティのうち少なくとも１つが<code>options</code>引数で提供された場合のみ、これらのプロパティは存在しています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_resolvedOptions_method" name="Using_the_resolvedOptions_method">resolvedOptions メソッドの使用</h3>

<pre class="brush: js notranslate">var de = new Intl.NumberFormat('de-DE');
var usedOptions = de.resolvedOptions();

usedOptions.locale;                // "de-DE"
usedOptions.numberingSystem;       // "latn"
usedOptions.notation;              // "standard"
usedOptions.signDisplay;           // "auto"
usedOption.style;                  // "decimal"
usedOptions.minimumIntegerDigits;  // 1
usedOptions.minimumFractionDigits; // 0
usedOptions.maximumFractionDigits; // 3
usedOptions.useGrouping;           // true
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-intl.numberformat.prototype.resolvedoptions', 'Intl.NumberFormat.prototype.resolvedOptions')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Intl.NumberFormat.resolvedOptions")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("NumberFormat", "Intl.NumberFormat")}}</li>
</ul>
