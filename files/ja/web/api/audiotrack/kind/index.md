---
title: AudioTrack.kind
slug: Web/API/AudioTrack/kind
tags:
  - API
  - Audio
  - Audio Track
  - AudioTrack
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - id
  - track
translation_of: Web/API/AudioTrack/kind
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong><code>kind</code></strong> プロパティは、<strong>{{domxref("AudioTrack")}}</strong> に含まれる音声のカテゴリを示す文字列を含みます。</span> この <code>kind</code> を使用して、特定のトラックを有効または無効にするシナリオを決定できます。 音声トラックで利用可能な種類の一覧については、<a href="#audio_track_kind_strings">音声トラックの kind 文字列</a>を参照してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>trackKind</em> = <em>AudioTrack</em>.kind;</pre>

<h3 id="Value" name="Value">値</h3>

<p>メディアが表すコンテンツの種類を指定する {{domxref("DOMString")}}。 この文字列は、以下の<a href="#audio_track_kind_strings">音声トラックの kind 文字列</a>にあるもののうちの1つです。</p>

<h2 id="Audio_track_kind_strings" name="Audio_track_kind_strings">音声トラックの kind 文字列</h2>

<p>音声トラックに使用できる kind は次のとおりです。</p>

<dl>
 <dt><code>"alternative"</code></dt>
 <dd>別の音声テイクや、音楽だけで会話がないサウンドトラックのバージョンなど、メイントラックの代わりとなる可能性があります。</dd>
 <dt><code>"descriptions"</code></dt>
 <dd>動画トラックに描かれているアクションの音声による説明を提供する音声トラック。</dd>
 <dt><code>"main"</code></dt>
 <dd>プライマリ音声トラック。</dd>
 <dt><code>"main-desc"</code></dt>
 <dd>音声の説明が混在しているプライマリ音声トラック。</dd>
 <dt><code>"translation"</code></dt>
 <dd>プライマリ音声トラックの翻訳版。</dd>
 <dt><code>"commentary"</code></dt>
 <dd>解説を含む音声トラック。 これは、例えば、映画で監督の解説トラックを含めるために使用される場合があります。</dd>
 <dt><code>""</code> （空の文字列）</dt>
 <dd>トラックに明確な kind がない、またはトラックのメタデータによって提供された kind が{{Glossary("user agent","ユーザーエージェント")}}に認識されていません。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

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
   <td>{{SpecName('HTML WHATWG', 'media.html#dom-audiotrack-kind', 'AudioTrack: kind')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'embedded-content-0.html#dom-audiotrack-kind', 'AudioTrack.kind')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.AudioTrack.kind")}}</p>

<p> </p>
