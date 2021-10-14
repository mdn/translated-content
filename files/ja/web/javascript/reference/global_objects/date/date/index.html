---
title: Date() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
tags:
  - Constructor
  - Date
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/Date
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">JavaScript の <strong><code>Date</code></strong> インスタンスを生成し、これはプラットフォームに依存しない形式で単一の瞬間の時刻を表現します。</span> <code>Date</code> オブジェクトは 1970 年 1 月 1 日 (UTC) からの経過ミリ秒数を <code>Number</code> で保持します。</p>

<div>{{EmbedInteractiveExample("pages/js/date-constructor.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">new Date()
new Date(<var>value</var>)
new Date(<var>dateString</var>)
new Date(<var>year</var>, <var>monthIndex</var> [, <var>day</var> [, <var>hours</var> [, <var>minutes</var> [, <var>seconds</var> [, <var>milliseconds</var>]]]]])
</pre>

<div class="blockIndicator note">
<p><strong>注:</strong> 新しい <code>Date</code> オブジェクトをインスタンス化する唯一の正しい方法は、 {{jsxref("new")}} 演算子を使用することです。単純に直接 <code>Date</code> オブジェクトを <code>now = Date()</code> のように呼び出すと、返値は <code>Date</code> オブジェクトではなく文字列になります。</p>
</div>

<h3 id="Parameters" name="Parameters">引数</h3>

<p><code>Date()</code> コンストラクターには4つの基本形があります。</p>

<ol>
 <li>
  <h4 id="No_parameters" name="No_parameters">引数なし</h4>

  <p>引数が与えられなかった場合は、新しく生成された <code>Date</code> オブジェクトはインスタンス化された時点で現在の日付と時刻を表します。</p>
 </li>
 <li>
  <h4 id="Time_value_or_timestamp_number" name="Time_value_or_timestamp_number">時刻値またはタイムスタンプ値</h4>

  <dl>
   <dt><code><var>value</var></code></dt>
   <dd>世界協定時 (UTC) 1970年1月1日午前0時0分0秒 (ECMAScript 元期、 UNIX 元期と等価) からのミリ秒数を整数値で表し、うるう秒は無視します。大部分の <a href="http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16">UNIX Timestamp</a> 関数は秒単位の精度しかないことに注意してください。</dd>
  </dl>
 </li>
 <li>
  <h4 id="Timestamp_string" name="Timestamp_string">タイムスタンプ文字列</h4>

  <dl>
   <dt><code><var>dateString</var></code></dt>
   <dd>日付を表す文字列値で、 {{jsxref("Date.parse()")}} メソッドによって認識される形式で指定されます。 (これらの形式は <a href="http://tools.ietf.org/html/rfc2822#page-14">IETF 準拠の RFC 2822 タイムスタンプ</a>であり、 <a href="https://www.ecma-international.org/ecma-262/11.0/#sec-date.parse">ISO8601 のバージョン</a>の文字列でもあります。)
   <div class="note">
   <p><strong>注:</strong> <code>Date</code> コンストラクター (および同じように動作する <code>Date.parse()</code>) を使用した日付文字列の解析は、ブラウザーによって違いや矛盾があるため、<em>使用を避けることを強くお勧めします。</em>。</p>

   <ul>
    <li><a href="https://tools.ietf.org/html/rfc2822">RFC 2822</a> 書式の文字列の対応は慣習的に行われているだけです。</li>
    <li>ISO 8601 形式の対応は、日付のみの文字列 (例えば <code>1970-01-01</code>) が地方時ではなく UTC として扱われる点が異なります。</li>
   </ul>
   </div>
   </dd>
  </dl>
 </li>
 <li>
  <h4 id="Individual_date_and_time_component_values" name="Individual_date_and_time_component_values">独立した日付と時刻の成分の値</h4>

  <p>少なくとも年と月が指定された場合、この形の <code>Date()</code> は成分の値 (年、月、日、時、分、秒、ミリ秒) のすべてを以下の引数から取得した <code>Date</code> オブジェクトを返します。欠けている値は、有効な最も小さな値 (<code><var>day</var></code> では <code>1</code>、他の成分では <code>0</code>) になります。</p>

  <dl>
   <dt><code><var>year</var></code></dt>
   <dd>
   <p>年を表す整数値です。</p>

   <p><code>0</code> から <code>99</code> までの値は、 <code>1900</code> から <code>1999</code> までの値にマッピングされます。他の値は実際の年になります。<a href="#Two_digit_years_map_to_1900_-_1999">後述の例</a>をご覧ください。</p>
   </dd>
   <dt><code><var>monthIndex</var></code></dt>
   <dd>月を表す整数値です。 <code>0</code> (1月) から <code>11</code> (12月) までの値です。</dd>
   <dt><code><var>day</var></code> {{optional_inline}}</dt>
   <dd>月内の日を表す整数値です。既定値は <code>1</code> です。</dd>
   <dt><code><var>hours</var></code> {{optional_inline}}</dt>
   <dd>1日の中の時を表します。既定値は <code>0</code> です。</dd>
   <dt><code><var>minutes</var></code> {{optional_inline}}</dt>
   <dd>任意。分 (0-59) を表す整数値です。</dd>
   <dt><code><var>seconds</var></code> {{optional_inline}}</dt>
   <dd>任意。秒 (0-59) を表す整数値です。</dd>
   <dt><code><var>milliseconds</var></code> {{optional_inline}}</dt>
   <dd>任意。ミリ秒 (0-999) を表す整数値です。</dd>
  </dl>
 </li>
</ol>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Several_ways_to_create_a_Date_object" name="Several_ways_to_create_a_Date_object">Date オブジェクトを生成するいくつかの方法</h3>

<p>以下の例で、JavaScript の Date を生成するいくつかの方法を示します。</p>

<div class="note">
<p><strong>注:</strong> 日付文字列を <code>Date</code> コンストラクター (または同等の <code>Date.parse</code>) で解釈する方法は、ブラウザーごとに動作が異なり一貫性がないため、避けることを強くおすすめします。</p>
</div>

<pre class="brush: js notranslate">let today = new Date()
let birthday = new Date('December 17, 1995 03:24:00')
let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
let birthday = new Date(1995, 11, 17, 3, 24, 0)</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date-constructor', 'Date')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Date.Date")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Date")}}</li>
</ul>
