---
title: Intl.PluralRules.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
tags:
- Internationalization
- Intl
- JavaScript
- Localization
- Method
- PluralRules
- Prototype
- Reference
---
<div>{{JSRef}}</div>

<p>The <strong><code>Intl.PluralRules.prototype.resolvedOptions()</code></strong> メソッドは、この {{jsxref("Collator")}} オブジェクトの初期化時に計算されたロケールと照合オプションを反映したプロパティを持つ新しいオブジェクトを返します。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><var>pluralRule</var>.resolvedOptions()</pre>

<h3 id="Return_value">返値</h3>

<p>与えられた {{jsxref("PluralRules")}} オブジェクトの初期化時に計算されたロケールと照合オプションを反映したプロパティを持つ新しいオブジェクトです。</p>

<h2 id="Description">解説</h2>

<p>返されるオブジェクトには以下のプロパティがあります。</p>

<dl>
	<dt><code>locale</code></dt>
	<dd>実際に使用したロケールの BCP 47 言語タグ。このロケールにつながる入力 BCP 47 言語タグに Unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが <code>locale</code> に含まれます。</dd>
	<dt><code>pluralCategories</code></dt>
	<dd>指定されたロケールで使用される複数形カテゴリーの {{jsxref("Array")}} で、 "<code>zero</code>", "<code>one</code>", "<code>two</code>", "<code>few</code>", "<code>many</code>", "<code>other</code>" のリストの中から選択します。</dd>
	<dt><code>type</code></dt>
	<dd>使用される種類です (<code>cardinal</code> または <code>ordinal</code>)。</dd>
</dl>

<p>以下の二つのプロパティのグループの中では、一つだけしか設定できません。</p>

<dl>
	<dt><code>minimumIntegerDigits</code></dt>
	<dt><code>minimumFractionDigits</code></dt>
	<dt><code>maximumFractionDigits</code></dt>
	<dd>これらのプロパティには、 <code>options</code> 引数で指定された値が入るか、既定値で埋められます。これらのプロパティは <code>minimumSignificantDigits</code> と <code>maximumSignificantDigits</code> のどちらも <code>options</code> 引数で指定されなかった場合のみ存在します。</dd>
	<dt><code>minimumSignificantDigits</code></dt>
	<dt><code>maximumSignificantDigits</code></dt>
	<dd>これらのプロパティには、 <code>options</code> 引数で指定された値が入るか、既定値で埋められます。これらのプロパティは、少なくとも1つのプロパティが <code>options</code> 引数で提供された場合にのみ表示されます。</dd>
</dl>

<h2 id="Examples">例</h2>

<h3 id="Using_the_resolvedOptions_method"><code>resolvedOptions</code> メソッドの使用</h3>

<pre class="brush: js">var de = new Intl.PluralRules('de-DE');
var usedOptions = de.resolvedOptions();

usedOptions.locale;                // "de-DE"
usedOptions.maximumFractionDigits; // 3
usedOptions.minimumFractionDigits; // 0
usedOptions.minimumIntegerDigits;  // 1
usedOptions.pluralCategories;      // Array [ "one", "other" ]
usedOptions.type;                  // "cardinal"
</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
	<thead>
		<tr>
			<th scope="col">仕様書</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>{{SpecName('ES Int Draft',
				'#sec-intl.pluralrules.prototype.resolvedoptions',
				'Intl.PluralRules.prototype.resolvedOptions')}}</td>
		</tr>
	</tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("javascript.builtins.Intl.PluralRules.resolvedOptions")}}</div>

<h2 id="See_also">関連情報</h2>

<ul>
	<li>{{jsxref("PluralRules", "Intl.PluralRules")}}</li>
</ul>
