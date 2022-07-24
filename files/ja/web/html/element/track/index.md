---
title: '<track>: 埋め込みテキストトラック要素'
slug: Web/HTML/Element/track
tags:
  - Accessibility
  - Cues
  - Element
  - HTML
  - HTML embedded content
  - HTML5
  - Multimedia
  - Reference
  - TextTrack
  - Web
  - a11y
  - track
translation_of: Web/HTML/Element/track
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML の <code>&lt;track&gt;</code> 要素</strong>はメディア要素 ({{HTMLElement("audio")}} および {{HTMLElement("video")}}) の子として使用します。この要素は自動的に処理される字幕など、時間指定されたテキストトラック (または時系列データ) を指定することができます。</span>トラックは <a href="/ja/docs/Web/API/Web_Video_Text_Tracks_Format">WebVTT (Web Video Text Tracks) 形式</a> (<code>.vtt</code> ファイル) を用います。</p>

<div>{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td>なし。この要素は{{Glossary("empty element", "空要素")}}です。</td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>空要素であるため開始タグは必須、また終了タグを置いてはなりません。</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td>
    <p>メディア要素、 {{HTMLElement("audio")}} または {{HTMLElement("video")}}</p>
   </td>
  </tr>
  <tr>
   <th scope="row">暗黙の ARIA ロール</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>許可されている <code>role</code> なし</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{domxref("HTMLTrackElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。</p>

<dl>
 <dt>{{htmlattrdef("default")}}</dt>
 <dd>この属性は、別の track が適切であるとユーザーの設定が示さない限り有効にすべき track であることを表します。この属性はメディア要素ごとに 1 つの <code>track</code> 要素のみで使用できます。</dd>
 <dt>{{htmlattrdef("kind")}}</dt>
 <dd>どのように使用するトラックであるかをを表します。省略した場合、デフォルトの種類は <code>subtitles</code> です。属性に無効な値が含まれている場合は <code>metadata</code> を使用します (バージョン 52 より前の Chrome は、無効な値を <code>subtitles</code> として扱っていました)。以下のキーワードが利用できます。
 <ul>
  <li><code>subtitles</code>
   <ul>
    <li>字幕は、視聴者が理解できないコンテンツの翻訳を提供します。例えば、英語の映画における英語以外の言語による会話やテキストです。</li>
    <li>字幕には追加コンテンツ、一般的には付加的な背景情報を含む場合があります。例えばスターウォーズの冒頭のテキストや、シーンの日時および場所です。</li>
   </ul>
  </li>
  <li><code>captions</code>
   <ul>
    <li>クローズドキャプションは書写、あるいは音声の翻訳を提供します。</li>
    <li>これは音楽のキューやサウンドエフェクトといった重要な非言語情報を含む場合があります。これはキューのソース (例: 音楽、テキスト、キャラクター) を示すでしょう。</li>
    <li>耳が不自由なユーザーや音声をミュートしている場合に適しています。</li>
   </ul>
  </li>
  <li><code>descriptions</code>
   <ul>
    <li>テキストによる動画コンテンツの説明です。</li>
    <li>目が不自由なユーザーや動画を視聴できない場合に適しています。</li>
   </ul>
  </li>
  <li><code>chapters</code>
   <ul>
    <li>チャプタータイトルは、ユーザーがメディアリソースの操作を行う際に使用することを意図しています。</li>
   </ul>
  </li>
  <li><code>metadata</code>
   <ul>
    <li>スクリプトが使用するトラック情報です。ユーザーには見えません。</li>
   </ul>
  </li>
 </ul>
 </dd>
 <dt>{{htmlattrdef("label")}}</dt>
 <dd>使用可能なテキストトラックを一覧表示する際にブラウザーが使用する、ユーザーに見せるテキストトラックのタイトルです。</dd>
 <dt>{{htmlattrdef("src")}}</dt>
 <dd>トラック (<code>.vtt</code> ファイル) のアドレスです。有効な URL であることが必要です。この属性は定義する必要があり、 URL の値は文書として — <code>track</code> 要素の親要素である {{HTMLElement("audio")}} または {{HTMLElement("video")}} が <code><a href="/ja/docs/Web/HTML/CORS_settings_attributes">crossorigin</a></code> 属性を持たない限り — 同じオリジンを持たなければなりません。</dd>
 <dt>{{htmlattrdef("srclang")}}</dt>
 <dd>テキストデータの言語です。有効な <a href="https://r12a.github.io/app-subtags/">BCP 47</a> 言語タグであることが必要です。<code>kind</code> 属性に <code>subtitles</code> を設定した場合は、<code>srclang</code> 属性を定義しなければなりません。</dd>
</dl>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<h3 id="Track_data_types" name="Track_data_types">トラックのデータの種類</h3>

<p><code>track</code> 要素でメディアに付加するデータの種類は <code>kind</code> 属性で設定します。使用できる値は <code>subtitles</code>, <code>captions</code>, <code>descriptions</code>, <code>chapters</code>, <code>metadata</code> です。この要素は、ユーザーが付加データを要求した際にブラウザーが提供する、時間指定テキストを含むソースファイルを指示します。</p>

<p>メディア要素は <code>kind</code>、<code>srclang</code> および <code>label</code> が同一の <code>track</code> を複数持つことができません。</p>

<h3 id="Detecting_cue_changes" name="Detecting_cue_changes">キューの変更の検出</h3>

<p>{{page("/ja/docs/Web/API/TextTrack/cuechange_event", "On the track element")}}</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html notranslate">&lt;video controls poster="/images/sample.gif"&gt;
   &lt;source src="sample.mp4" type="video/mp4"&gt;
   &lt;source src="sample.ogv" type="video/ogv"&gt;
   &lt;track kind="captions" src="sampleCaptions.vtt" srclang="en"&gt;
   &lt;track kind="descriptions"
     src="sampleDescriptions.vtt" srclang="en"&gt;
   &lt;track kind="chapters" src="sampleChapters.vtt" srclang="en"&gt;
   &lt;track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de"&gt;
   &lt;track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en"&gt;
   &lt;track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja"&gt;
   &lt;track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz"&gt;
   &lt;track kind="metadata" src="keyStage1.vtt" srclang="en"
     label="Key Stage 1"&gt;
   &lt;track kind="metadata" src="keyStage2.vtt" srclang="en"
     label="Key Stage 2"&gt;
   &lt;track kind="metadata" src="keyStage3.vtt" srclang="en"
     label="Key Stage 3"&gt;
   &lt;!-- Fallback --&gt;
   ...
&lt;/video&gt;
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG','embedded-content.html#the-track-element','track element')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "semantics-embedded-content.html#the-track-element", "track element")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.track")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTML/WebVTT">WebVTT text track format</a></li>
 <li>{{domxref("HTMLMediaElement.textTracks")}}</li>
</ul>
