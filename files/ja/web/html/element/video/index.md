---
title: "<video>: 動画埋め込み要素"
slug: Web/HTML/Element/video
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

**`<video>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書中に動画再生に対応するメディアプレイヤーを埋め込みます。 `<video>` を音声コンテンツのために使用することもできますが、 {{HTMLElement("audio")}} 要素の方がユーザーにとって使い勝手が良いかもしれません。

{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}

上記の例は `<video>` 要素のシンプルな使い方を示しています。{{htmlelement("img")}} 要素と同様に、 `src` 属性の中に表示したいメディアへのパスを含めます。他の属性を含めて、動画の幅や高さ、自動再生やループをするかどうか、ブラウザーの標準の動画コントロールを表示するかなどの情報を指定することができます。

開始・終了タグである `<video></video>` タグの間の内容は、この要素に対応していないブラウザーで代替として表示されます。

## 属性

他のすべての HTML 要素と同様に、この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)に対応しています。

- `autoplay`

  - : 論理属性です。この属性が指定された場合、データの読み込みが完了し、再生可能な状態になった時点で即座にコンテンツの再生が始まります。

    > [!NOTE]
    > 現行のブラウザーでは、音声（またはミュートされていない音声トラック付きの動画）が自動再生されないように設定されています。これは、自動的に音声が再生されるサイトはユーザーにとって不快な体験になり得るからです。正しい自動再生の使い方についての追加情報は [autoplay ガイド](/ja/docs/Web/Media/Autoplay_guide)を参照してください。</div>

    動画の自動再生を無効にするために `autoplay="false"` を指定しても機能しません。 `<video>` タグにこの属性があれば、動画が自動的に再生されます。自動再生を無効にするには、属性を完全に取り除くことが必要です。

- `controls`
  - : この属性が指定された場合、再生、音量、シーク、ポーズの各機能を制御するコントロールを表示します。
- `controlslist`

  - : [`controlslist`](https://wicg.github.io/controls-list/explainer.html) 属性が指定されていると、ブラウザー自身のコントロールのセットを表示する場合（例えば `controls` 属性が設定されている場合）、`video` 要素に表示するコントロールを選択するのを補助します。

    指定できる値は `nodownload`, `nofullscreen`, `noremoteplayback` です。

    [`disablepictureinpicture`](#disablepictureinpicture) 属性を使用すると、ピクチャインピクチャモード（およびコントロール）を無効にすることができます。

- [`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin)

  - : [列挙型](/ja/docs/Glossary/Enumerated)の属性で、関連画像を取得する際に CORS を使用するかどうかを示します。 [CORS が有効なリソース](/ja/docs/Web/HTML/CORS_enabled_image)は、*汚染*されることなく {{HTMLElement("canvas")}} 要素で再利用することができます。許可される値は次の通りです。

    - `anonymous`
      - : 資格情報なしでオリジン間リクエストを実行します。すなわち、 `Origin:` HTTP ヘッダーを送信する際に、 Cookie や X.509 証明書を送信したり、 HTTP ベーシック認証を行ったりしません。サーバーが元のサイトに資格情報を付与しない場合 (`Access-Control-Allow-Origin:` HTTP ヘッダーの設定なし)、リソースが*汚染*され、その使用が制限されます。
    - `use-credentials`
      - : 資格情報を使用してオリジン間リクエストを実行します。すなわち、 `Origin:` HTTP ヘッダーを送信する際に Cookie や資格情報を送信したり、 HTTP ベーシック認証を行ったりします。サーバーが元のサイトに（`Access-Control-Allow-Credentials:` HTTP ヘッダーを通して）資格情報を与えない場合、リソースが*汚染*され、その使用が制限されます。

    この属性が存在しない場合、リソースは CORS なしのリクエストで（すなわち `Origin:` HTTP ヘッダーを送信せずに）取得され、 {{HTMLElement('canvas')}} 要素における汚染されない使用が妨げられます。これが無効な場合、列挙型のキーワードに `anonymous` が指定されたものとして扱われます。追加の情報は [CORS 設定属性](/ja/docs/Web/HTML/Attributes/crossorigin)を参照してください。

- `disablepictureinpicture`
  - : ブラウザーにピクチャインピクチャのコンテキストメニューを表示させないようにしたり、場合によっては自動的にピクチャインピクチャを要求しないようにします。
- `disableremoteplayback`

  - : 論理属性で、有線（HDMI, DVI など）や無線（Miracast, Chromecast, DLNA, AirPlay など）を使用して接続された端末のリモート再生機能を無効にするために使用されます。

    Safari では、代替として [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) を使用することができます。

- `height`
  - : 動画の表示領域の高さを、 [CSS ピクセル値](https://drafts.csswg.org/css-values/#px)で指定します（絶対的な値に限ります。[パーセント値は不可](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)）。
- `loop`
  - : 論理型の属性です。指定された場合、ブラウザーは動画の末尾に達すると、自動的に先頭に戻ります。
- `muted`
  - : 論理型の属性で、動画に含まれる音声を消音するかどうかの既定の設定を示します。この属性を設定すると、初期状態が消音になります。既定値は `false` であり、動画再生時に音声も再生することを表します。
- `playsinline`
  - : 論理属性で、動画を「インライン」で再生する、すなわち要素の再生領域内で再生するかを指定します。この属性がないことが、動画を常に全画面で再生するという意味*ではない*ことに注意してください。
- `poster`
  - : 動画のダウンロード中に表示される画像の URL です。この属性が指定されない場合、最初のフレームが利用可能になるまで何も表示されず、その後、最初のフレームをポスターフレームとして表示します。
- `preload`

  - : {{Glossary("enumerated", "列挙型")}}の属性で、動画が再生される前に、どのコンテンツを読み込むとユーザーに最高の使い勝手をもたらすかについての作者の考えを、ブラウザーに対するヒントとしてを提供するためのものです。以下の値のうちひとつを持つことができます。

    - `none`: 動画を事前に読み込むべきではないことを示します。
    - `metadata`: 動画のメタデータ (例えば、長さ) を読み込みます。
    - `auto`: ユーザーが動画ファイルを使用しないと思われる場合でも、ファイル全体をダウンロードしてよいことを示します。
    - _空文字列_: これは `auto` 値と同義です。

    既定値はブラウザーごとに異なります。仕様書では `metadata` を設定するよう助言しています。

    > [!NOTE]
    >
    > - `autoplay` 属性は `preload` より優先します。`autoplay` を指定すると、言うまでもなくブラウザーは動画を再生するためにダウンロードを始めなければなりません。
    > - 仕様書は、ブラウザーがこの属性の値に従うことを強制していません。これは単なるヒントです。

- `src`
  - : 埋め込む動画への URL を指定します。この属性は省略可能です。埋め込む動画の指定には、video 要素のブロック内で {{HTMLElement("source")}} を使用することもできます。
- `width`
  - : 動画の表示領域の幅を、 [CSS ピクセル値](https://drafts.csswg.org/css-values/#px)で指定します。 (絶対的な値に限ります。[パーセント値は不可](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))。

## イベント

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">イベント名</th>
      <th scope="col">発生する時</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{domxref("ScriptProcessorNode.audioprocess_event","audioprocess")}} {{Deprecated_Inline}}
      </td>
      <td>
        {{DOMxRef("ScriptProcessorNode")}} の入力バッファーが処理可能になった。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
      </td>
      <td>
        ブラウザーがメディアを再生できるようになったものの、追加のバッファリングのために停止することなくメディアの最後まで再生するには、充分なデータが読み込まれていないとみられる。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
      </td>
      <td>
        ブラウザーがコンテンツのバッファリングのために停止することなく最後までメディアを再生することができるとみられる。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("OfflineAudioContext.complete_event", "complete")}}
      </td>
      <td>
        {{DOMxRef("OfflineAudioContext")}} のレンダリングが終了した。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
      </td>
      <td><code>duration</code> 属性が更新された。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
      </td>
      <td>
        メディアが空になった。例えば、メディアがすでに読み込まれた（または部分的に読み込まれた）状態で、再読み込みのために <a href="/ja/docs/Web/API/HTMLMediaElement/load" rel="internal"><code>load()</code></a> メソッドが呼び出された場合などでこのイベントが発行されます。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ended_event", 'ended')}}
      </td>
      <td>メディアの末尾に達したために再生が停止した。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.error_event", 'error')}}
      </td>
      <td>
        メディアデータの取得中にエラーが発生したか、リソースの型が対応していないメディア形式です。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
      </td>
      <td>メディアの最初のフレームが読み込み終わった。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
      </td>
      <td>メタデータを読み込んだ。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
      </td>
      <td>ブラウザーがリソースの読み込みを始めたときに発行されます。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.pause_event", 'pause')}}
      </td>
      <td>再生が一時停止した。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.play_event", 'play')}}
      </td>
      <td>再生が始まった。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.playing_event", 'playing')}}
      </td>
      <td>
        データがなくなったために一時停止または待機した後で、再生の再開の準備ができた。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.progress_event", 'progress')}}
      </td>
      <td>ブラウザーがリソースを読み込んでいる間に定期的に発生します。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
      </td>
      <td>再生レートが変更された。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
      </td>
      <td><em>シーク</em>操作が完了した。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
      </td>
      <td><em>シーク</em>操作が始まった。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
      </td>
      <td>
        ユーザーエージェントがメディアを読み込もうとしているが、データが予期せずに入ってこない。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
      </td>
      <td>メディアデータの読み込みが停止した。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
      </td>
      <td>
        <code>currentTime</code> 属性で示されている時刻が更新された。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
      </td>
      <td>音量が変更された。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
      </td>
      <td>一時的なデータの不足により、再生が停止した。</td>
    </tr>
  </tbody>
</table>

## 使用上の注意

ブラウザーは同じ動画形式にすべて対応しているとは限りません。内部の {{htmlelement("source")}} 要素で複数のソースを提供することができ、ブラウザーは理解できる最初のものを使用します。

```html-nolint
<video controls>
  <source src="myVideo.webm" type="video/webm" />
  <source src="myVideo.mp4" type="video/mp4" />
  <p>
    このブラウザーは HTML の動画に対応していません。代わりに<a href="myVideo.mp4" download="myVideo.mp4">動画へのリンク</a>があります。
  </p>
</video>
```

[メディアファイル形式](/ja/docs/Web/Media/Formats)や、[動画で対応しているコーデック](/ja/docs/Web/Media/Formats/Video_codecs)など、実質的かつ徹底したガイドを提供しています。また、[一緒に利用することができる音声コーデック](/ja/docs/Web/Media/Formats/Audio_codecs)のガイドもあります。

その他の利用上の注意:

- `controls` 属性を指定しないと、 video はブラウザーの標準のコントロールを含めません。 JavaScript と {{domxref("HTMLMediaElement")}} を使用して、独自のコントロールを作成することもできます。詳しくは[クロスブラウザーの動画プレイヤーの作成](/ja/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)を参照してください。
- 動画（および音声）コンテンツを詳細に制御できるよう、 `HTMLMediaElement` はたくさんの種類の[イベント](/ja/docs/Web/API/HTMLMediaElement#events)を発行します。これらのイベントは、制御を可能にするだけでなく、メディアのダウンロードと再生の両方の進行状況や再生状態、再生位置を監視することができます。
- {{cssxref("object-position")}} プロパティを用いて、要素の枠内での動画の位置を調整することができ、 {{cssxref("object-fit")}} プロパティを用いて動画の寸法がどのように枠内に合わせられるかを制御することができます。
- 動画と同時に字幕を表示するには、 JavaScript と共に {{htmlelement("track")}} 要素と [WebVTT](/ja/docs/Web/API/WebVTT_API) を使用します。詳しくは、 [HTML 動画への字幕の追加](/ja/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)をご覧ください。
- `<video>` 要素を使って音声ファイルを再生することができます。例えば [WebVTT](/ja/docs/Web/API/WebVTT_API) の代替表記を伴う音声を再生したい場合などに、 {{HTMLElement("audio")}} 要素は WebVTT を使った字幕を許可していないため便利です。
- 要素に対応しているブラウザーで代替コンテンツをテストするには、 `<video>` を `<notavideo>` のような実在しないタグに置き換えてください。

HTML の `<video>` の使用について一般的な良い情報源として、[動画および音声コンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)の初心者向けチュートリアルがあります。

### CSS でのスタイル付け

`<video>` 要素は置換要素です。 — {{cssxref("display")}} の値は既定で `inline` ですが、ビューポートの既定の幅と高さは埋め込まれる動画で定義されます。

`<video>` のスタイル付けについて、特別な考慮事項はありません。よくある戦略として、位置や寸法を設定しやすくし、必要に応じてスタイルやレイアウト情報を提供するために `display` の値を `block` に設定することです。[動画プレイヤーのスタイル付けの基本](/ja/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)は、便利なスタイル付けテクニックをいくつか紹介しています。

### 字幕やその他のタイミングテキストトラックを追加

字幕、クローズドキャプション、チャプター見出し、などといったタイミングを指定したテキストトラックは、{{HTMLElement("track")}} 要素をネストすることで宣言的に追加することができます。
トラックは、[ウェブ動画テキストトラック形式 (WebVTT)](/ja/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt` ファイル) で指定します。

例えば、次の HTML では "captions.vtt" というファイルを取り込んでいます。このファイルは、ユーザーが字幕を有効にした場合に動画に字幕をオーバーレイ表示するために使用します。

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

[WebVTT API](/ja/docs/Web/API/WebVTT_API) を使用して、時間指定テキストトラックをプログラムで追加することもできます。

### トラックの追加と削除の検出

`<video>` 要素でトラックが追加されたり削除されたりしたことを検出するには、 {{domxref("VideoTrackList/addtrack_event", "addtrack")}} および {{domxref("VideoTrackList/removetrack_event", "removetrack")}} イベント利用することができます。しかし、これらのイベントは `<video>` 要素自身に直接送信されるわけではありません。
代わりに、 `<video>` の {{domxref("HTMLMediaElement")}} 内にある、要素に追加されたトラックの種類に対応するトラックリストオブジェクトに送信されます。

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : {{domxref("AudioTrackList")}} で、このメディア要素のすべての音声トラックを保持します。
    `addtrack` のリスナーをこのオブジェクトに追加すると、この要素に新しい音声トラックが追加された時に通知を受け取ることができます。
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : {{domxref("VideoTrackList")}} で、このメディア要素のすべての映像トラックを保持します。
    `addtrack` のリスナーをこのオブジェクトに追加すると、この要素に動画トラックが追加されたときに通知を受け取ることができます。
- {{domxref("HTMLMediaElement.textTracks")}}
  - : {{domxref("TextTrackList")}} で、このメディア要素のすべてのテキストトラック（字幕、クローズドキャプション、など）を保持します。
    `addtrack` のリスナーをこのオブジェクトに追加すると、この要素にテキストトラックが追加されたときに通知を受け取ることができます。

例えば、次のようなコードで `<video>` 要素で音声トラックが追加されたり削除されたりしたときを検出することができます。

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

このコードは音声トラックが要素で追加および削除されることを監視し、トラックエディターの論理関数を呼び出すことで、エディターにおける利用できるトラックの一覧でトラックを登録や削除を行います。

{{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して {{domxref("VideoTrackList/addtrack_event", "addtrack")}} および {{domxref("VideoTrackList/removetrack_event", "removetrack")}} イベントを監視することもできます。

### 動画へのサーバーの対応

サーバーで動画の MIME タイプが適切に設定されていないと、動画が表示されないか X 印がついた灰色のボックスが表示される（JavaScript が有効である場合）可能性があります。

Apache Web Server を使用して WebM 動画を配信する場合、`video/webm` MIME タイプに動画ファイルの拡張子を追加することで、この問題が修正されます（WebM ファイルの最も一般的な拡張子は `.webm` です）。これを行うには、`/etc/apache` の `mime.types` ファイルを編集するか、`httpd.conf` の `AddType` 構成ディレクティブを使用します。

```plain
AddType video/webm .webm
```

ウェブホスティングサービスでは、全体の更新が行われるまでの間、新技術向けに MIME タイプの設定を変更するための簡単なインターフェイスを提供しているかもしれません。

## アクセシビリティ

動画には、実際にコンテンツを説明する字幕と文字化情報 (transcript) を提供するべきです（実装方法について詳しくは [HTML 動画への字幕の追加](/ja/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) を参照してください）。字幕によって、聴力を失った人が動画の再生時に音声の内容を理解する事ができるようになるのに対し、文字化情報を使用すると、音声コンテンツを理解するのに時間が掛かる人が、自分に合ったペースと書式で内容を確認できるようになります。

注目すべき点は、音声のみのメディアにキャプションを付けることはできますが、キャプションを表示するために要素の video 領域が使用されるため、 <code>&lt;video&gt;</code> 要素で音声を再生しないとキャプションを付けることができないということです。これは、 video 要素で音声を再生するのに便利な特別なシナリオの 1 つです。

自動字幕サービスが使用されている場合は、生成されたコンテンツが元の動画を正しく表現しているかを確認することが重要です。

字幕や文字化情報では、話されるセリフに加えて、重要な情報を伝える音楽や音響効果も識別できるようにしてください。これには感情や口調も含みます。

```plain
14
00:03:14 --> 00:03:18
[ドラマチックなロック音楽]

15
00:03:19 --> 00:03:21
[ささやき] 遠くにあるものは何ですか？

16
00:03:22 --> 00:03:24
それは……それは……

16 00:03:25 --> 00:03:32
[ぶつかる大きな音]
[皿の割れる音]
```

字幕は動画の主題を邪魔しないようにしてください。これは [`align` VTT キュー設定](/ja/docs/Web/API/WebVTT_API#cue_settings)を使用して位置を決めることができます。

- [Web Video Text Tracks Format (WebVTT)](/ja/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN WCAG を理解する ― ガイドライン 1.2 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.2_—_タイムベースト・メディアのための代替テキストの提供)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## 例

### 単一のソース

この例では、アクティブ化されたときに動画を再生し、再生を制御するためにブラウザーの既定の動画コントロールをユーザーに提供します。

#### HTML

```html
<!-- Simple video example -->
<!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org -->
<!-- Poster from peach.blender.org -->
<video
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  恐れ入りますが、このブラウザーは埋め込み動画に対応していません。しかし、<a
    href="https://archive.org/details/BigBuckBunny_124"
    >ダウンロード</a
  >してお好きな動画プレイヤーで見ることはできます。
</video>
```

#### 結果

{{EmbedLiveSample('Single source', '', '400')}}

動画の再生が始まるまで、 `poster` 属性で指定された画像がその場所に表示されます。ブラウザーが動画の再生に対応していない場合は、代替テキストを表示します。

### 複数のソース

この例は、メディアの 3 つの異なるソースを提供する最後のものをベースにしています。これにより、ブラウザーで対応している動画コーデックに関係なく、動画を見ることができます。

#### HTML

```html
<!-- Using multiple sources as fallbacks for a video tag -->
<!-- 'Elephants Dream' by Orange Open Movie Project Studio, licensed under CC-3.0, hosted by archive.org -->
<!-- Poster hosted by Wikimedia -->
<video
  width="620"
  controls
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.avi"
    type="video/avi" />
  <source
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    type="video/mp4" />

  恐れ入りますが、このブラウザーは埋め込み動画に対応していません。しかし、<a
    href="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    download="ed_1024_512kb.mp4"
    >MP4 をダウンロード</a
  >してお好きな動画プレイヤーで見ることはできます。
</video>
```

#### 結果

{{EmbedLiveSample('Multiple sources', '', '400')}}

はじめに AVI を試します。再生できない場合は、 [MP4](/ja/docs/Web/Media/Formats/Containers#mpeg-4_mp4) を試します。video 要素に対応していない場合は代替メッセージを表示しますが、すべてのソースに失敗した場合は表示しません。

メディアファイル形式によっては、ファイル形式文字列の一部として [`codecs`](/ja/docs/Web/Media/Formats/codecs_parameter) 引数を使用して、より具体的な情報を提供することができます。比較的簡単な例は `video/webm; codecs="vp8, vorbis"` であり、 [WebM](/ja/docs/Web/Media/Formats/Containers#webm) 映像であり、動画に [VP8](/ja/docs/Web/Media/Formats/Video_codecs#vp8)、音声に [Vorbis](/ja/docs/Web/Media/Formats/Audio_codecs#vorbis) を使用していることを示しています。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>, 記述コンテンツ, 埋め込みコンテンツ。 <a href="#controls"><code>controls</code></a> 属性を持つ場合は、対話的コンテンツおよび知覚可能コンテンツ。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <p>
           要素が <a href="#src"><code>src</code></a> 属性を持つ場合: 0 個以上の {{HTMLElement("track")}} 要素とそれに続く、メディア要素を含まない透過的コンテンツ。すなわち {{HTMLElement("audio")}} 要素や <code>&lt;video&gt;</code> 要素を子要素として配置してはなりません。
        </p>
        <p>
          その他の場合: 0 個以上の {{HTMLElement("source")}} 要素、0 個以上の {{HTMLElement("track")}} 要素、メディア要素を含まない透過的コンテンツ。すなわち {{HTMLElement("audio")}} 要素や <code>&lt;video&gt;</code> 要素を子要素として配置してはなりません。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLVideoElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ上のメディア種別と形式のガイド](/ja/docs/Web/Media/Formats)

  - [メディアコンテナー形式（ファイル形式）](/ja/docs/Web/Media/Formats/Containers)
  - [ウェブの動画コーデックガイド](/ja/docs/Web/Media/Formats/Video_codecs)
  - [ウェブの音声コーデックガイド](/ja/docs/Web/Media/Formats/Audio_codecs)

- フレーム内における画像の位置と寸法の設定: {{cssxref("object-position")}} および {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML での動画や音声の使用](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [canvas を用いた動画の操作](/ja/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Ogg メディアのサーバーの構成](/ja/docs/Web/HTTP/Configuring_servers_for_Ogg_media)
