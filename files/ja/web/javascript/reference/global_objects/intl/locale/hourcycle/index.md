---
title: Intl.Locale.prototype.hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Prototype
  - Reference
  - プロパティ
  - 国際化
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>Intl.Locale.prototype.hourCycle</code></strong> プロパティは、ロケールで使用される時刻保持書式の規則を返すアクセサープロパティです。</span></p>

<h2 id="Description" name="Description">解説</h2>

<p>世界中で使用されている時刻保持規則 (時制) には、主に12時制と24時制の2つの種類があります。 <code>hourCycle</code> プロパティを使用すると、 JavaScript のプログラマーが特定のロケールで使用されている時制に簡単にアクセスできるようになります。他の追加ロケールデータと同様に、時制種別は<a href="https://www.unicode.org/reports/tr35/#u_Extension">拡張サブタグ</a>であり、ロケール文字列に含まれるデータを拡張したものです。時制種別には、以下の表にある通り、いくつかの異なる値を設定することができます。</p>

<h3 id="有効な時制種別">有効な時制種別</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">時制種別</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>h12</code></td>
   <td>1–12を使用する時制で、パターンの 'h' に対応します。12時制で、正子は午前12:00から始まります。</td>
  </tr>
  <tr>
   <td><code>h23</code></td>
   <td>0–23を使用する時制で、パターンの 'H' に対応します。24時制で、正子は0:00から始まります。</td>
  </tr>
  <tr>
   <td><code>h11</code></td>
   <td>0–11を使用する時制で、パターンの 'K' に対応します。12時制で、正子は午前0:00から始まります。</td>
  </tr>
  <tr>
   <td><code>h24</code></td>
   <td>1–24を使用する時制で、パターンの 'k' に対応します。24時制で、正子は24:00から始まります。</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>これらの例は、時制データを {{jsxref("Locale", "Locale")}} オブジェクトに追加する方法を示しています。</p>

<h3 id="Setting_the_numeric_value_via_the_locale_string" name="Setting_the_numeric_value_via_the_locale_string">ロケール文字列による時制の追加</h3>

<p><a href="https://www.unicode.org/reports/tr35/" rel="noopener">Unicode ロケール文字列仕様書</a>では、時制はロケール文字列の「拡張サブタグ」です。これらのサブタグはロケールについての追加データであり、拡張キー <code>-u</code> を使用してロケール識別子に追加されます。このようして、 <code>numeric</code> の値を {{jsxref("Locale/Locale", "Locale")}} コンストラクターに渡される初期のロケール識別子文字列に追加することができます。時制種別の値を設定するには、まず文字列に <code>-u</code> 拡張キーを追加します。次に、 <code>-hc</code> 拡張キーを追加して、時制種別の値を追加していることを示します。最後に、時制種別の値を文字列に追加します。</p>

<pre class="brush: js">let ja24hour = new Intl.Locale("ja-JP-u-hc-h23");
console.log(ja24hour.hourCycle); // "h23" と表示</pre>

<h3 id="Adding_an_hour_cycle_via_the_configuration_object_argument" name="Adding_an_hour_cycle_via_the_configuration_object_argument">構成オブジェクト引数から時制を追加</h3>

<p>{{jsxref("Locale/Locale", "Intl.Locale")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これには時制種別を含む任意の拡張の種類をいくつか含めることができます。構成オブジェクトの <code>hourCycle</code> プロパティを任意の時制種別に設定し、コンストラクターに渡します。</p>

<pre class="brush: js">let us12hour = new Intl.Locale("en-US", {hourCycle: "h12"});
console.log(us12hour.hourCycle); // "h12" と表示</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Intl.Locale.prototype.hourCycle')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("javascript.builtins.Intl.Locale.hourCycle")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Locale", "Intl.Locale")}}</li>
 <li><a href="https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier">Unicode 時間周期拡張キー仕様書</a></li>
</ul>
