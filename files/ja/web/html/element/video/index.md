---
title: '<video>: 動画埋め込み要素'
slug: Web/HTML/Element/video
tags:
  - Element
  - HTML
  - HTML Video
  - HTML Video Player
  - HTML embedded content
  - HTML5
  - Media
  - Movie Playback
  - Movies
  - Multimedia
  - Playing Movies
  - Playing Video
  - Reference
  - Showing Video
  - Video
  - Web
translation_of: Web/HTML/Element/video
---
<div>{{HTMLRef}}</div>

<p><strong>HTML の映像要素</strong> (<strong><code>&lt;video&gt;</code></strong>) は、文書中に映像再生に対応するメディアプレイヤーを埋め込みます。 <code>&lt;video&gt;</code> を音声コンテンツのために使用することもできますが、 {{HTMLElement("audio")}} 要素の方がユーザーに取って使い勝手が良いかもしれません。</p>

<div>{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>上記の例は <code>&lt;video&gt;</code> 要素のシンプルな使い方を示しています。 {{htmlelement("img")}} 要素の方法と同様に、 <code>src</code> 属性の中に表示したいメディアへのパスを含めます。他の属性を含めて、映像の幅や高さ、自動再生やループをするかどうか、ブラウザーの標準の映像コントロールを表示するかなどの情報を指定することができます。</p>

<p>開始・終了タグである <code>&lt;video&gt;&lt;/video&gt;</code> タグの間の内容は、この要素に対応していないブラウザーで代替として表示されます。</p>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。</p>

<dl>
 <dt>{{htmlattrdef("autoplay")}}</dt>
 <dd>論理型の属性です。この属性が指定された場合、データの読み込みが完了し、再生可能な状態になった時点で即座にコンテンツの再生が始まります。
 <div class="note"><strong>メモ</strong>: 自動的に音声 (あるいは音声トラックを含む映像) を再生するサイトはユーザーにとって不快な体験になる可能性がありますので、可能な限り避けるべきです。自動再生機能が必須である場合は、オプトイン (ユーザーが明示的に有効化することを求める) にするべきです。ただし、ユーザーの制御下で後からソースを設定するメディア要素を作成するときは、この方法が役に立つでしょう。正しい自動再生の使い方についての追加情報は <a href="/ja/docs/Web/Media/Autoplay_guide">autoplay ガイド</a>を参照してください。</div>

 <p>映像の自動再生を無効にするために <code>autoplay="false"</code> を指定しても機能しません。 <code>&lt;video&gt;</code> タグにこの属性があれば、映像が自動的に再生されます。自動再生を無効にするには、属性を完全に取り除くことが必要です。</p>

 <p>一部のブラウザー (Chrome 70.0 など) では、 <code>muted</code> 属性がないと autoplay は動作しません。</p>
 </dd>
 <dt>{{htmlattrdef("autoPictureInPicture")}} {{experimental_inline}}</dt>
 <dd>論理属性で、 <code>true</code> であれば、ユーザーがこの文書と他の文書やアプリケーションとの間を行き来したときに、自動的にピクチャインピクチャモードに切り替わるようにすることを示します。</dd>
 <dt>{{htmlattrdef("buffered")}}</dt>
 <dd>メディアがどれだけの時間分バッファリングされたかを判断するために、読み取ることが可能な属性です。この属性は {{domxref("TimeRanges")}} オブジェクトを持ちます。</dd>
 <dt>{{htmlattrdef("controls")}}</dt>
 <dd>この属性が指定された場合、再生、音量、シーク、ポーズの各機能を制御するコントロールを表示します。</dd>
 <dt>{{htmlattrdef("controlslist")}} {{experimental_inline}}</dt>
 <dd><code><a href="https://wicg.github.io/controls-list/html-output/multipage/embedded-content.html#attr-media-controlslist">controlslist</a></code> 属性が指定されていると、ブラウザー自身のコントロールのセットを表示する場合 (例えば <code>controls</code> 属性が設定されている場合)、メディア要素に表示するコントロールを選択するのを補助します。</dd>
 <dd>
 <p>指定できる値は <code>nodownload</code>, <code>nofullscreen</code>, <code>noremoteplayback</code> です。</p>

 <p><a href="#disable_pip"><code>disablePictureInPicture</code></a> 属性を使用すると、ピクチャインピクチャモード (およびコントロール) を無効にすることができます。</p>
 </dd>
 <dt>{{htmlattrdef("crossorigin")}}</dt>
 <dd>この列挙型の属性は、関連画像を取得する際に CORS を使用するかを示します。<a href="/ja/docs/CORS_Enabled_Image">CORS が有効なリソース</a> は、<em>汚染</em>されることなく {{HTMLElement("canvas")}} 要素で再利用できます。次の値が使用できます:
 <dl>
  <dt><code>anonymous</code></dt>
  <dd>資格情報を伴わずにオリジン間リクエストを実行します。すなわち、Cookie や X.509 証明書がない <code>Origin:</code> HTTP ヘッダーを送信する、あるいは HTTP ベーシック認証を行いません。サーバーが元のサイトに信用情報を付与しない場合 (<code>Access-Control-Allow-Origin:</code> HTTP ヘッダーの設定なし)、画像が<em>汚染</em>され、その使用も制限されます。</dd>
  <dt><code>use-credentials</code></dt>
  <dd>クレデンシャルを伴ってオリジン間要求を実行します。すなわち、Cookie や X.509 証明書を伴う <code>Origin:</code> HTTP ヘッダーを送信する、あるいは HTTP ベーシック認証を行います。サーバーが元のサイトに信用情報を付与しない場合 (<code>Access-Control-Allow-Credentials:</code> HTTP ヘッダーに関わらず)、画像が<em>汚染</em>され、その使用も制限されます。</dd>
 </dl>
 この属性が提供されない場合、リソースは CORS 要求なしで取得され (<code>Origin:</code> HTTP ヘッダーを送信せずに取得)、{{HTMLElement('canvas')}} 要素での汚染されない使用が妨げられます。これが無効な場合、列挙型のキーワードに <code>anonymous</code> が指定されたものとして扱われます。追加の情報は <a href="/ja/docs/Web/HTML/CORS_settings_attributes">CORS 設定属性</a> を参照してください。</dd>
 <dt>{{htmlattrdef("currentTime")}}</dt>
 <dd>
 <p><code>currentTime</code> を読み込むと、秒単位で指定されたメディアの現在の再生位置を示す倍精度の浮動小数点値を返します。メディアがまだ再生を開始していない場合は、再生を開始する時間オフセットを返します。 <code>currentTime</code> を設定すると、現在の再生位置を指定された時間に設定し、メディアがすでに読み込まれている場合には、その位置までメディアをシークします。</p>

 <p>メディアがストリーミングされている場合、そのデータがメディアバッファ上で期限切れになっていると、{{Glossary("user agent", "ユーザエージェント")}}がリソースの一部を取得できない可能性があります。メディアによっては、0秒から開始しないメディアのタイムラインがある場合もあり、 <code>currentTime</code> をそれ以前の時間に設定すると失敗します。メディアタイムラインの参照フレームの開始点を決定するには、 {{domxref("HTMLMediaElement.getStartDate", "getStartDate()")}} メソッドを使用することができます。</p>
 </dd>
 <dt id="disable_pip"><a href="https://wicg.github.io/picture-in-picture/#disable-pip">{{htmlattrdef("disablePictureInPicture")}}</a> {{experimental_inline}}</dt>
 <dd>ブラウザーにピクチャインピクチャのコンテキストメニューを表示させないようにしたり、場合によっては自動的にピクチャインピクチャを要求しないようにします。</dd>
 <dt><a href="https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute">{{htmlattrdef("disableRemotePlayback")}}</a> {{experimental_inline}}</dt>
 <dd>論理属性で、有線 (HDMI, DVI など) や無線 (Miracast, Chromecast, DLNA, AirPlay など) を使用して接続された端末のリモート再生機能を無効にするために使用されます。
 <p>Safari では、代替として <a href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html"><code>x-webkit-airplay="deny"</code></a> を使用することができます。</p>
 </dd>
 <dt>{{htmlattrdef("duration")}} {{ReadOnlyInline}}</dt>
 <dd>倍精度浮動小数点値で、メディアのタイムライン上でのメディアの再生時間 (全長) を秒単位で示します。要素にメディアが存在しない場合、またはメディアが有効でない場合は <code>NaN</code> が返されます。メディアの終了時刻が不明な場合 (持続時間不明のライブストリーム、ウェブラジオ、 WebRTC からのメディア受信など)、この値は <code>+Infinity</code> になります。</dd>
 <dt>{{htmlattrdef("height")}}</dt>
 <dd>映像の表示領域の高さを、 <a href="https://drafts.csswg.org/css-values/#px">CSS ピクセル値</a>で指定します。 (絶対値に限ります。<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes">パーセント値は不可</a>。)</dd>
 <dt>{{htmlattrdef("intrinsicsize")}} {{experimental_inline}}</dt>
 <dd>この属性はブラウザーに、画像の固有の寸法を無視し、この属性で指定された寸法であると見せかけるよう指示します。特に、画像がこれらの次元のラスターであって、画像の <code>naturalWidth</code>/<code>naturalHeight</code> はこの属性で指定された値が返されます。<a href="https://github.com/ojanvafai/intrinsicsize-attribute">説明</a>と<a href="https://googlechrome.github.io/samples/intrinsic-size/index.html">例</a></dd>
 <dt>{{htmlattrdef("loop")}}</dt>
 <dd>論理型の属性です。指定された場合、ブラウザーは映像の末尾に達すると、自動的に先頭に戻ります。</dd>
 <dt>{{htmlattrdef("muted")}}</dt>
 <dd>論理型の属性で、映像に含まれる音声の既定の設定を示します。この属性を設定すると、初期状態が消音になります。既定値は <code>false</code> であり、映像再生時に音声も再生することを表します。</dd>
 <dt>{{htmlattrdef("playsinline")}}</dt>
 <dd>論理属性で、映像を「インライン」で再生する、すなわち要素の再生領域内で再生するかを指定します。この属性がないことが、映像を常に全画面で再生するという意味<em>ではない</em>ことに注意してください。</dd>
 <dt>{{htmlattrdef("poster")}}</dt>
 <dd>映像のダウンロード中に表示される画像の URL です。この属性が指定されない場合、最初のフレームが利用可能になるまで何も表示されず、その後、最初のフレームをポスターフレームとして表示します。</dd>
 <dt>{{htmlattrdef("preload")}}</dt>
 <dd>列挙型の属性で、映像が再生される前に、どのコンテンツを読み込むとユーザーに最高の使い勝手をもたらすかについての作者の考えを、ブラウザーに対するヒントとしてを提供するためのものです。以下の値のうちひとつを持つことができます。
 <ul>
  <li><code>none</code>: 映像を事前に読み込むべきではないことを示します。</li>
  <li><code>metadata</code>: 映像のメタデータ (例えば、長さ) を読み込みます。</li>
  <li><code>auto</code>: ユーザーが映像ファイルを使用しないと思われる場合でも、ファイル全体をダウンロードしてよいことを示します。</li>
  <li><em>空文字列</em>: これは <code>auto</code> 値と同義です。</li>
 </ul>

 <p>既定値はブラウザーごとに異なります。仕様書では <code>metadata</code> を設定するよう助言しています。</p>

 <div class="blockIndicator note"><strong>注:</strong>

 <ul>
  <li><code>autoplay</code> 属性は <code>preload</code> より優先します。<code>autoplay</code> を指定すると、言うまでもなくブラウザーは映像を再生するためにダウンロードを始めなければなりません。</li>
  <li>仕様書は、ブラウザーがこの属性の値に従うことを強制していません。これは単なるヒントです。</li>
 </ul>
 </div>
 </dd>
 <dt>{{htmlattrdef("src")}}</dt>
 <dd>埋め込む映像コンテンツへの URL を指定します。この属性は省略可能です。埋め込む映像の指定には、video 要素のブロック内で {{HTMLElement("source")}} を使用することもできます。</dd>
 <dt>{{htmlattrdef("width")}}</dt>
 <dd>映像の表示領域の幅を、 <a href="https://drafts.csswg.org/css-values/#px">CSS ピクセル値</a>で指定します。 (絶対値に限ります。<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes">パーセント値は不可</a>)。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">イベント名</th>
   <th scope="col">発生する時</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{domxref("ScriptProcessorNode.audioprocess_event","audioprocess")}}{{Deprecated_Inline}}</td>
   <td>{{DOMxRef("ScriptProcessorNode")}} の入力バッファが処理可能になった。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.canplay_event", 'canplay')}}</td>
   <td>ブラウザーがメディアを再生できるようになったものの、追加のバッファリングのために停止することなくメディアの最後まで再生するには、充分なデータが読み込まれていないとみられる。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}</td>
   <td>ブラウザーがコンテンツのバッファリングのために停止することなく最後までメディアを再生することができるとみられる。</td>
  </tr>
  <tr>
   <td>{{domxref("OfflineAudioContext.complete_event", "complete")}}</td>
   <td>{{DOMxRef("OfflineAudioContext")}} のレンダリングが終了した。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}</td>
   <td><code>duration</code> 属性が更新された。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.emptied_event", 'emptied')}}</td>
   <td>メディアが空になった。例えば、このイベントはメディアがすでに読み込まれた (または部分的に読み込まれた) 状態で、再読み込みのために <a href="/ja/docs/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement" rel="internal"><code>load()</code></a> メソッドが呼び出された場合など。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.ended_event", 'ended')}}</td>
   <td>メディアの末尾に達したために再生が停止した。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}</td>
   <td>メディアの最初のフレームが読み込み終わった。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}</td>
   <td>メタデータを読み込んだ。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.pause_event", 'pause')}}</td>
   <td>再生が一時停止した。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.play_event", 'play')}}</td>
   <td>再生が始まった。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.playing_event", 'playing ')}}</td>
   <td>データがなくなったために一時停止または遅延した後で、再生の再開の準備ができた。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.progress_event", 'progress')}}</td>
   <td>ブラウザーがリソースを読み込んでいる間に定期的に発生します。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}</td>
   <td>再生レートが変更された。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.seeked_event", 'seeked')}}</td>
   <td><em>シーク</em>操作が完了した。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.seeking_event", 'seeking')}}</td>
   <td><em>シーク</em>捜査が始まった。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.stalled_event", 'stalled')}}</td>
   <td>ユーザーエージェントがメディアを読み込もうとしているが、データが予期せずに入ってこない。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.suspend_event", 'suspend')}}</td>
   <td>メディアデータの読み込みが停止した。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}</td>
   <td><code>currentTime</code> 属性で示されている時刻が更新された。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}</td>
   <td>音量が変更された。</td>
  </tr>
  <tr>
   <td>{{domxref("HTMLMediaElement.waiting_event", 'waiting')}}</td>
   <td>一時的なデータの不足により、再生が停止した。</td>
  </tr>
 </tbody>
</table>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>ブラウザーは同じ<a href="/ja/docs/Web/HTML/Supported_media_formats">映像形式</a>にすべて対応しているとは限りません。内部の {{htmlelement("source")}} 要素で複数のソースを提供することができ、ブラウザーは理解できる最初のものを使用します。</p>

<pre class="brush: html notranslate">&lt;video controls&gt;
  &lt;source src="myVideo.mp4" type="video/mp4"&gt;
  &lt;source src="myVideo.webm" type="video/webm"&gt;
  &lt;p&gt;Your browser doesn't support HTML5 video. Here is
     a &lt;a href="myVideo.mp4"&gt;link to the video&lt;/a&gt; instead.&lt;/p&gt;
&lt;/video&gt;</pre>

<p><a href="/ja/docs/Web/Media/Formats">メディアファイル形式</a>や、<a href="/ja/docs/Web/Media/Formats/Video_codecs">動画で対応しているコーデック</a>など、実質的かつ徹底したガイドを提供しています。また、<a href="/ja/docs/Web/Media/Formats/Audio_codecs">一緒に利用することができる音声コーデック</a>のガイドもあります。</p>

<p>その他の利用上の注意:</p>

<ul>
 <li><code>controls</code> 属性を指定しないと、 video はブラウザーの標準のコントロールを含めません。 JavaScript と {{domxref("HTMLMediaElement")}} を使用して、独自のコントロールを作成することもできます。詳しくは<a href="/ja/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player">クロスブラウザーの映像プレイヤーの作成</a>を参照してください。</li>
 <li>映像 (および音声) コンテンツを詳細に制御できるよう、 <code>HTMLMediaElement</code> はたくさんの種類の<a href="/ja/docs/Web/Guide/Events/Media_events">イベント</a>を発生します。これらのイベントは、制御性を提供するだけでなく、メディアのダウンロードと再生の両方の進行状況や再生状態、再生位置を監視することができます。</li>
 <li>{{cssxref("object-position")}} プロパティを用いて、要素の枠内での映像の位置を調整することができ、 {{cssxref("object-fit")}} プロパティを用いて映像の寸法がどのように枠内に合わせられるかを制御することができます。</li>
 <li>映像と同時に字幕を表示するには、 JavaScript と共に {{htmlelement("track")}} 要素と <a href="/ja/docs/Web/API/WebVTT_API">WebVTT</a> を使用します。詳しくは、 <a href="/ja/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video">HTML5 映像への字幕の追加</a>をご覧ください。</li>
 <li><code>&lt;video&gt;</code> 要素を使って音声ファイルを再生することができます。例えば <a href="/ja/docs/Web/API/WebVTT_API">WebVTT</a> の代替表記を伴う音声を再生したい場合などに、 {{HTMLElement("audio")}} 要素は WebVTT を使った字幕を許可していないため便利です。</li>
 <li>要素に対応しているブラウザーで代替コンテンツをテストするには、 <code>&lt;video&gt;</code> を <code>&lt;notavideo&gt;</code> のような存在しないタグに置き換えてください。</li>
</ul>

<p>HTML の <code>&lt;video&gt;</code> の使用について一般的な良い情報源として、<a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">映像および音声コンテンツ</a>の初心者向けチュートリアルがあります。</p>

<h3 id="Styling_with_CSS" name="Styling_with_CSS">CSS でのスタイル付け</h3>

<p><code>&lt;video&gt;</code> 要素は置換要素です。 — {{cssxref("display")}} の値は既定で <code>inline</code> ですが、ビューポートの既定の幅と高さは埋め込まれる映像で定義されます。</p>

<p><code>&lt;video&gt;</code> のスタイル付けについて、特別な考慮事項はありません。よくある戦略は、位置や寸法を設定しやすくして、必要に応じてスタイルやレイアウト情報を提供するために <code>display</code> の値を <code>block</code> に設定することです。<a href="/ja/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics">動画プレイヤーのスタイル付けの基本</a>は、便利なスタイル付けテクニックをいくつか紹介しています。</p>

<h3 id="トラックの追加と削除の検出">トラックの追加と削除の検出</h3>

<p>{{event("addtrack")}} および {{event("removetrack")}} イベントを用いると、 <code>&lt;video&gt;</code> 要素でトラックが追加されたり削除されたりしたことを検出することができます。しかし、これらのイベントは <code>&lt;video&gt;</code> 要素自身に直接送信されるわけではありません。代わりに、 <code>&lt;video&gt;</code> の {{domxref("HTMLMediaElement")}} 内にある、要素に追加されたトラックの種類に対応するトラックリストオブジェクトに送信されます。</p>

<dl>
 <dt>{{domxref("HTMLMediaElement.audioTracks")}}</dt>
 <dd>メディア要素のオーディオトラックのすべてを含む {{domxref("AudioTrackList")}} です。 <code>addtrack</code> のリスナーをこのオブジェクトに追加すると、新しいオーディオトラックが要素に追加された時に通知を受け取ることができます。</dd>
 <dt>{{domxref("HTMLMediaElement.videoTracks")}}</dt>
 <dd>この {{domxref("VideoTrackList")}} オブジェクトに <code>addtrack</code> リスナーを追加することで、要素に動画トラックが追加されたときに通知を受け取ることができます。</dd>
 <dt>{{domxref("HTMLMediaElement.textTracks")}}</dt>
 <dd>この {{domxref("TextTrackList")}} オブジェクトに <code>addtrack</code> リスナーを追加することで、要素にテキストトラックが追加されたときに通知を受け取ることができます。</dd>
</dl>

<p>例えば、次のようなコードで <code>&lt;video&gt;</code> 要素でオーディオトラックが追加されたり削除されたりしたときを検出することができます。</p>

<pre class="brush: js notranslate">var elem = document.querySelector("video");

elem.audioTrackList.onaddtrack = function(event) {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = function(event) {
  trackEditor.removeTrack(event.track);
};
</pre>

<p>このコードはオーディオトラックが要素で追加および削除されることを監視し、トラックエディターの論理関数を呼び出すことで、エディターにおける利用できるトラックの一覧でトラックを登録や削除を行います。</p>

<p>{{event("addtrack")}} および {{event("removetrack")}} イベントを監視するには、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用することもできます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Simple_video_example" name="Simple_video_example">単純な映像の例</h3>

<p>この例では、アクティブ化されたときに映像を再生し、再生を制御するためにブラウザーの既定の動画コントロールをユーザーに提供します。</p>

<pre class="brush: html notranslate">&lt;!-- Simple video example --&gt;
&lt;!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org --&gt;
&lt;!-- Poster from peach.blender.org --&gt;
&lt;video controls
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
    width="620"&gt;

すみませんが、このブラウザーは埋め込み映像に対応していません。
しかし、&lt;a href="https://archive.org/details/BigBuckBunny_124"&gt;ダウンロード&lt;/a&gt;
してお好きな映像プレイヤーで見ることはできます。

&lt;/video&gt;</pre>

<p>{{EmbedLiveSample('Simple_video_example', '640', '370', '', 'Web/HTML/Element/video')}}</p>

<p>映像の再生が始まるまで、 <code>poster</code> 属性で指定された画像がその場所に表示されます。ブラウザーが映像の再生に対応していない場合は、代替テキストが表示されます。</p>

<h3 id="Multiple_sources_example" name="Multiple_sources_example">複数のソースの例</h3>

<p>この例は、メディアの3つの異なるソースを提供する最後のものをベースにしています。これにより、ブラウザーで対応している映像コーデックに関係なく、映像を見ることができます。</p>

<pre class="brush: html notranslate">&lt;!-- Using multiple sources as fallbacks for a video tag --&gt;
&lt;!-- 'Elephants Dream' by Orange Open Movie Project Studio, licensed under CC-3.0, hosted by archive.org --&gt;
&lt;!-- Poster hosted by Wikimedia --&gt;
&lt;video width="620" controls
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg" &gt;
  &lt;source
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    type="video/mp4"&gt;
  &lt;source
    src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
    type="video/ogg"&gt;
  &lt;source
    src="https://archive.org/download/ElephantsDream/ed_hd.avi"
    type="video/avi"&gt;
  Your browser doesn't support HTML5 video tag.
&lt;/video&gt;</pre>

<p>{{EmbedLiveSample('Multiple_sources_example', '640', '370')}}</p>

<p>はじめに <a href="/ja/docs/Web/Media/Formats/Containers#WebM">WebM</a> を試します。再生できない場合は、 <a href="/ja/docs/Web/Media/Formats/Containers#MP4">MP4</a> を試します。最後に <a href="/ja/docs/Web/Media/Formats/Containers#Ogg">Ogg</a> を試します。 video 要素に対応していない場合は代替メッセージを表示しますが、すべてのソースに失敗した場合は表示しません。</p>

<p>メディアファイル形式によっては、ファイル形式文字列の一部として <code><a href="/ja/docs/Web/Media/Formats/codecs_parameter">codecs</a></code> 引数を使用して、より具体的な情報を提供することができます。比較的簡単な例は <code>video/webm; codecs="vp8, vorbis"</code> であり、 <a href="/ja/docs/Web/Media/Formats/Containers#WebM">WebM</a> ビデオであり、動画に <a href="/ja/docs/Web/Media/Formats/Video_codecs#VP8">VP8</a>、音声にに <a href="/ja/docs/Web/Media/Formats/Audio_codecs#Vorbis">Vorbis</a> を使用したあることを示しています。</p>

<h3 id="Server_support_for_video" name="Server_support_for_video">映像へのサーバーの対応</h3>

<p>サーバーで映像の MIME タイプが適切に設定されていないと、映像が表示されないか X 印がついた灰色のボックスが表示される (JavaScript が有効である場合) 可能性があります。</p>

<p>Ogg Theora 形式で映像を提供する場合、 Apache Web Server では "video/ogg" MIME タイプに映像ファイルの拡張子を追加すると問題が解決します。もっとも一般的な映像ファイルの拡張子は ".ogm", ".ogv", ".ogg" です。"/etc/apache" の "mime.types" ファイルを編集するか、 <code>httpd.conf</code> で <code>"AddType"</code> の設定ディレクティブを使用してください。</p>

<pre class="notranslate">AddType video/ogg .ogm
AddType video/ogg .ogv
AddType video/ogg .ogg
</pre>

<p>WebM 形式で映像を提供する場合、 Apache Web Server では "/etc/apache" の "mime.types" ファイルまたは <code>httpd.conf</code> の "AddType" ディレクティブで映像ファイルの拡張子 (一般的には ".webm") を MIME type "video/webm" に追加することで問題が解決します。</p>

<pre class="notranslate">AddType video/webm .webm
</pre>

<p>ウェブホスティングサービスでは、全体の更新が行われるまでの間、新技術向けに MIME タイプの設定を変更するための簡単なインターフェイスを提供しているかもしれません。</p>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮事項</h2>

<p>映像には、実際にコンテンツを説明する字幕と<ruby>文字化情報<rp> (</rp><rt>transcript</rt><rp>) </rp></ruby>を提供するべきです (実装方法について詳しくは <a href="/ja/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video">HTML5 映像への字幕の追加</a> を参照してください) 。字幕によって、聴力を失った人が映像の再生時に音声の内容を理解する事ができるようになるのに対し、文字化情報を使用すると、音声コンテンツを理解するのに時間が掛かる人が、自分に合ったペースと書式で内容を確認できるようになります。</p>

<p>注目すべき点は、音声のみのメディアにキャプションを付けることはできますが、キャプションを表示するために要素の video 領域が使用されるため、 {{HTMLElement("video")}} 要素で音声を再生しないとキャプションを付けることができないということです。これは、 video 要素で音声を再生するのに便利な特別なシナリオの 1 つです。</p>

<p>自動字幕サービスが使用されている場合は、生成されたコンテンツが元の映像を正しく表現しているかを確認することが重要です。</p>

<p>字幕や文字化情報では、話されるセリフに加えて、重要な情報を伝える音楽や音響効果も識別できるようにしてください。これには感情や口調も含みます。</p>

<pre class="notranslate">14
00:03:14 --&gt; 00:03:18
[ドラマチックなロック音楽]

15
00:03:19 --&gt; 00:03:21
[ささやき] 遠くにあるものは何ですか？

16
00:03:22 --&gt; 00:03:24
それは……それは……

16 00:03:25 --&gt; 00:03:32
[ぶつかる大きな音]
[皿の割れる音]
</pre>

<p>字幕は映像の主題を邪魔しないようにしてください。これは <a href="/ja/docs/Web/API/WebVTT_API#Cue_settings"><code>align</code> VTT キュー設定</a>を使用して位置を決めることができます。</p>

<ul>
 <li><a href="/ja/docs/Plugins/Flash_to_HTML5/Video/Subtitles_captions">MDN 字幕とクローズドキャプション — プラグイン</a></li>
 <li><a href="/ja/docs/Web/API/WebVTT_API">Web Video Text Tracks Format (WebVTT)</a></li>
 <li><a href="https://webaim.org/techniques/captions/">WebAIM: Captions, Transcripts, and Audio Descriptions</a></li>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.2_—_Providing_text_alternatives_for_time-based_media">MDN WCAG を理解する ― ガイドライン 1.2 の解説</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html">Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html">Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Technical_summary" name="Technical_summary">技術的概要</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td><a href="/ja/docs/Web/HTML/Content_categories#Flow_content">フローコンテンツ</a>, 記述コンテンツ, 埋め込みコンテンツ。 {{htmlattrxref("controls", "video")}} 属性を持つ場合は、対話的コンテンツおよび知覚可能コンテンツ。</td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td>
    <p>要素が {{htmlattrxref("src", "video")}} 属性を持つ場合: 0 個以上の {{HTMLElement("track")}} 要素とそれに続く、メディア要素を含まない透過的コンテンツ。すなわち {{HTMLElement("audio")}} 要素や {{HTMLElement("video")}} 要素を子要素として配置してはなりません。</p>

    <p>その他の場合: 0 個以上の {{HTMLElement("source")}} 要素、0 個以上の {{HTMLElement("track")}} 要素、メディア要素を含まない透過的コンテンツ。すなわち {{HTMLElement("audio")}} 要素や {{HTMLElement("video")}} 要素を子要素として配置してはなりません。</p>
   </td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td>埋め込みコンテンツを受け入れるすべての要素。</td>
  </tr>
  <tr>
   <th scope="row">暗黙の ARIA ロール</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>{{ARIARole("application")}}</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{domxref("HTMLVideoElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">フィードバック</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'media.html#the-video-element', '&lt;video&gt;')}}</td>
   <td><a href="https://github.com/whatwg/html/issues">WHATWG HTML GitHub issues</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("html.elements.video")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Media/Formats">ウェブ上のメディア種別と形式のガイド</a>

  <ul>
   <li><a href="/ja/docs/Web/Media/Formats/Containers">メディアコンテナー形式 (ファイル形式)</a></li>
   <li><a href="/ja/docs/Web/Media/Formats/Video_codecs">ウェブの動画コーデックガイド</a></li>
   <li><a href="/ja/docs/Web/Media/Formats/Audio_codecs">ウェブの音声コーデックガイド</a></li>
  </ul>
 </li>
 <li>フレーム内における画像の位置と寸法の設定: {{cssxref("object-position")}} および {{cssxref("object-fit")}}</li>
 <li>{{htmlelement("audio")}}</li>
 <li><a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">HTML5 での映像や音声の使用</a></li>
 <li><a href="/ja/docs/Web/API/Canvas_API/Manipulating_video_using_canvas">canvas を用いた映像の操作</a></li>
 <li><a href="/ja/docs/Web/HTTP/Configuring_servers_for_Ogg_media">Ogg メディアのサーバーの構成</a></li>
</ul>
