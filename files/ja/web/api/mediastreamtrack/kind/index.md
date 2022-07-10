---
title: MediaStreamTrack.kind
slug: Web/API/MediaStreamTrack/kind
translation_of: Web/API/MediaStreamTrack/kind
---
<p>{{APIRef("Media Capture and Streams")}}</p>

<p><code><strong>MediaStreamTrack.kind</strong></code>は読み取り専用のプロパティであり、トラックの種類を示す{{domxref("DOMString")}}を返します。トラックがオーディオトラックの場合は<code>"audio"</code>を返し、ビデオトラックの場合は<code>"video"</code>を返します。トラックがソースから切り離されている場合は、何も変更されません。</p>

<h2 id="文法">文法</h2>

<pre class="syntaxbox"> var <em>type</em> = <em>track</em>.kind;</pre>

<h3 id="値">値</h3>

<p>以下に示す{{domxref("DOMString")}}型の値を取ります。</p>

<ul>
 <li><code>"audio"</code>: このトラックはオーディオトラックであることを表します。</li>
 <li><code>"video"</code>: このトラックはビデオトラックであることを表します。</li>
</ul>

<h2 id="例">例</h2>

<pre></pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table" style="height: 49px; width: 1000px;">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('Media Capture', '#widl-MediaStreamTrack-kind', 'MediaStreamTrack.kind') }}</td>
   <td>{{ Spec2('Media Capture') }}</td>
   <td>初版</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>



<p>{{Compat("api.MediaStreamTrack.kind")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/API/WebRTC">WebRTC</a></li>
</ul>
