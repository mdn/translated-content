---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
tags:
  - API
  - Add-ons
  - Create
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - alarms
translation_of: Mozilla/Add-ons/WebExtensions/API/alarms/create
---
<div>{{AddonSidebar()}}</div>

<p>新しいアラームを生成します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.alarms.create(
  name,              // 文字列
  alarmInfo          // オブジェクト
)
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>name</code>{{optional_inline}}</dt>
 <dd><code>string</code>. アラームの名前を指定します。デフォルト値は空の文字列です。</dd>
 <dd>この値は {{WebExtAPIRef('alarms.get()')}} や {{WebExtAPIRef('alarms.clear()')}} で特定のアラームを参照する際に用います。また、{{WebExtAPIRef('alarms.onAlarm')}} のリスナ関数に渡すオブジェクト {{WebExtAPIRef('alarms.Alarm')}} のプロパティ <code>name</code> からも参照されます。</dd>
 <dd>アラームの名前は常に固有です（スコープはアドオンごとに区切られます）。以前そのアドオンが作成したアラーム名に一致する文字列を <code>name</code> に与えた場合、既存のアラームは削除されて発火しなくなります。</dd>
 <dt><code>alarmInfo</code>{{optional_inline}}</dt>
 <dd>
 <p><code>object</code>. アラームが最初に発火する時刻を指定する引数です。時刻の指定には絶対値（<code>when</code> プロパティ）か、アラーム設定時を基準とした時間（<code>delayInMinutes</code> プロパティ）のどちらかで指定します。アラームを周期的に発火させるには <code>periodInMinutes</code> プロパティも指定します。</p>

 <p>Chrome の場合、パッケージ化された状態でアドオンが読み込まれると、アラームを 1 分に 1 回以上の頻度で呼び出すことはできません。ここでアドオンが <code>delayInMinutes</code> や <code>when</code> に 1 未満の値を指定しようとすると、アラームは 1 分後に発火します。アドオンが <code>periodInMinutes</code> に 1 未満の値を指定した場合、アラームは 1 分おきに発火します。</p>

 <p><code>alarmInfo</code> オブジェクトで指定できるプロパティは以下の通りです。</p>
 </dd>
 <dd>
 <dl class="reference-values">
  <dt><code>when</code>{{optional_inline}}</dt>
  <dd><code>double</code>. アラームが最初に発火する時刻を <a href="https://ja.wikipedia.org/wiki/UNIX%E6%99%82%E9%96%93">1970 年 1 月 1 日からの経過ミリ秒</a> で指定します。現在までの経過ミリ秒は <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/now">Date.now()</a></code> で取得できます。<code>when</code> を指定した場合<code>は delayInMinutes</code> を指定しないでください。</dd>
  <dt><code>delayInMinutes</code>{{optional_inline}}</dt>
  <dd><code>double</code>. アラームが最初に発火する時刻を、アラーム設定時から何分後かで指定します。 <code>delayInMinutes</code> を指定した場合は <code>when</code> を指定しないでください。</dd>
  <dt><code>periodInMinutes</code>{{optional_inline}}</dt>
  <dd><code>double</code>. この値が指定された場合、アラームは最初の発火時刻から <code>periodInMinutes</code> の周期で繰り返し発火します。この値を指定したうえで<code>when</code> と <code>delayInMinutes</code> の両方を省略した場合、最初にアラームが発火するのは <code>periodInMinutes</code> の時間が経過した後になります。<code>periodInMinutes</code> が指定されなければ、アラームは一度だけ発火します。</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.alarms.create")}}</p>

<h2 id="例">例</h2>

<p>現在から相対的な時刻で一度限り発火するアラームを "" という名前で作成する例：</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">const</span> delayInMinutes <span class="operator token">=</span> <span class="number token">5</span><span class="punctuation token">;</span>

chrome<span class="punctuation token">.</span>alarms<span class="punctuation token">.</span><span class="function token">create</span><span class="punctuation token">(</span><span class="punctuation token">{</span>
  delayInMinutes
<span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>現在からの相対的な時刻から繰り返すアラームを "my-periodic-alarm" の名前で作成する例：</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">const</span> delayInMinutes <span class="operator token">=</span> <span class="number token">5</span><span class="punctuation token">;</span>
<span class="keyword token">const</span> periodInMinutes <span class="operator token">=</span> <span class="number token">2</span><span class="punctuation token">;</span>

chrome<span class="punctuation token">.</span>alarms<span class="punctuation token">.</span><span class="function token">create</span><span class="punctuation token">(</span><span class="string token">"my-periodic-alarm"</span><span class="punctuation token">,</span> <span class="punctuation token">{</span>
  delayInMinutes<span class="punctuation token">,</span>
  periodInMinutes
<span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>絶対的な時刻から繰り返すアラームを "my-periodic-alarm" の名前で作成する例：</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">const</span> when <span class="operator token">=</span> <span class="number token">1545696000</span><span class="punctuation token">;</span>
<span class="keyword token">const</span> periodInMinutes <span class="operator token">=</span> <span class="number token">2</span><span class="punctuation token">;</span>

chrome<span class="punctuation token">.</span>alarms<span class="punctuation token">.</span><span class="function token">create</span><span class="punctuation token">(</span><span class="string token">"my-periodic-alarm"</span><span class="punctuation token">,</span> <span class="punctuation token">{</span>
  when<span class="punctuation token">,</span>
  periodInMinutes
<span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/alarms"><code>chrome.alarms</code></a> API に基づいています。</p>

<p>Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。</p>
</div>

<div class="hidden">
<pre>// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
</pre>
</div>
