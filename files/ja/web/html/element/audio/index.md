---
title: "<audio>: 埋め込み音声要素"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

**`<audio>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書内に音声コンテンツを埋め込むために使用します。この要素は、1 つまたは複数の音源を含むことができます。音源は `src` 属性または {{HTMLElement("source")}} 要素を使用して表し、ブラウザーがもっとも適切な音源を選択します。また、 {{domxref("MediaStream")}} を使用してストリーミングメディアを指し示すこともできます。

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

上記の例は、 `<audio>` 要素の基本的な使用方法を示しています。 {{htmlelement("img")}} 要素と同様の方法で、埋め込みたいメディアへのパスを `src` 属性に設定します。他にも自動再生や繰り返しを行うかどうか、ブラウザーの既定のオーディオコントロールを表示したいかどうか、などの情報を指定する属性を含めることができます。

開始および終了タグ `<audio></audio>` の中のコンテンツは、この要素に対応してないブラウザーで代替として表示されます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `autoplay`

  - : 論理属性。指定された場合、音声ファイル全体のダウンロードの完了を待たずに、再生可能な状態になった時点で即座にコンテンツの再生が始まります。

    > [!NOTE]
    > 自動的に音声 (あるいは音声トラックを含む動画) を再生するサイトはユーザーにとって不快な体験になる可能性がありますので、可能な限り避けるべきです。自動再生機能が必須である場合は、オプトイン (ユーザーが明示的に有効化することを求める) にするべきです。ただし、ユーザーの制御下で後からソースを設定するメディア要素を作成するときは、この方法が役に立つでしょう。[自動再生ガイド](/ja/docs/Web/Media/Autoplay_guide)には autoplay の正しい使い方についての追加情報があります。

- `controls`

  - : この属性が指定された場合、ブラウザーは再生・一時停止、音量、シークの各機能を制御するコントロールを表示します。

- `controlslist`

  - : [`controlslist`](https://wicg.github.io/controls-list/explainer.html) 属性は、指定された場合、ブラウザーが自分自身で一連のコントロールを表示するとき（つまり、 `controls` 属性が指定されたとき）、 `audio` 要素にどのようなコントロールを表示するかを選択するのを支援します。

    取ることができる値は `nodownload`、`nofullscreen`、`noremoteplayback` です。

- [`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin)

  - : この列挙型の属性は、関連する音声ファイルを取得する際に CORS を使用するかを示します。[CORS が有効なリソース](/ja/docs/Web/HTML/CORS_enabled_image) は、*汚染*されることなく {{HTMLElement("canvas")}} 要素で再利用できます。次の値が使用できます:

    - `anonymous`
      - : 資格情報を伴わずにオリジン間リクエストを実行します。すなわち、 Cookie や X.509 証明書がない `Origin:` HTTP ヘッダーを送信したり、 HTTP ベーシック認証を行ったりしません。サーバーが元のサイトに信用情報を付与しない場合 (`Access-Control-Allow-Origin:` HTTP ヘッダーの設定なし)、画像が*汚染*され、その使用も制限されます。
    - `use-credentials`
      - : 資格情報を伴ってオリジン間リクエストを実行します。すなわち、Cookie や X.509 証明書を伴う `Origin:` HTTP ヘッダーを送信する、あるいは HTTP ベーシック認証を行います。サーバーが元のサイトに信用情報を付与しない場合 (`Access-Control-Allow-Credentials:` HTTP ヘッダーに関わらず)、画像が*汚染*され、その使用も制限されます。

    この属性が存在しない場合、リソースは CORS リクエストなしで (すなわち、 `Origin:` HTTP ヘッダーなしで) 取得され、 {{HTMLElement('canvas')}} 要素での汚染されない使用が妨げられます。これが無効な場合、列挙型のキーワードに **anonymous** が指定されたものとして扱われます。追加の情報は [CORS 設定属性](/ja/docs/Web/HTML/Attributes/crossorigin)を参照してください。

- `disableremoteplayback`

  - : 論理属性で、有線 (HDMI, DVI, など) や無線技術 (Miracast, Chromecast, DLNA, AirPlay, など) で接続された機器のリモート再生機能を無効にするために使用します。詳しくは[この提案中の仕様書](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute)をご覧ください。

    Safari では、代替として [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) を使用することができます。

- `loop`
  - : 論理型の属性です。指定された場合、音声プレイヤーは音声の末尾に達すると、自動的に先頭に戻ります。
- `muted`
  - : 論理型の属性で、音声の既定の設定を示します。この属性を設定すると、初期状態が消音になります。既定値は `false` です。
- `preload`

  - : {{Glossary("enumerated","列挙型")}}の属性で、ユーザーに取って最良の結果をもたらすと作者が考えていることのヒントをブラウザーに伝えるためのものです。以下の値のうちひとつを持つことができます。

    - `none`: 音声を事前に読み込むべきではないことを示します。
    - `metadata`: 音声のメタデータ (例えば、長さ) を読み込みます。
    - `auto`: ユーザーが音声ファイルを使用しないと思われる場合でも、ファイル全体をダウンロードしてよいことを示します。
    - _空文字列_: これは `auto` 値と同義です。

    既定値はブラウザーによって異なります。仕様書では `metadata` にするよう助言しています。

    > [!NOTE]
    >
    > - `autoplay` 属性は `preload` より優先します。`autoplay` を指定すると、言うまでもなくブラウザーは音声を再生するためにダウンロードを始めなければなりません。
    > - 仕様書は、ブラウザーがこの属性の値に従うことを強制していません。これは単なるヒントです。

- `src`
  - : 埋め込む音声コンテンツの URL を指定します。この属性は [HTTP アクセス制御](/ja/docs/Web/HTTP/CORS)に従います。これはオプションです。代わりに {{htmlelement("source")}} 要素を audio ブロック内で使用して、埋め込む音声を指定することもできます。

## イベント

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">イベント名</th>
      <th scope="col">発生するとき</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("ScriptProcessorNode/audioprocess_event", "audioprocess")}}</td>
      <td>
        {{DOMxRef("ScriptProcessorNode")}} の入力バッファーの処理の準備ができた。
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
      <td>{{domxref("OfflineAudioContext/complete_event", "complete")}}</td>
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
        メディアが空になった。例えば、このイベントはメディアがすでに読み込まれた (または部分的に読み込まれた) 状態で、再読み込みのために {{domxref("HTMLMediaElement.load")}} メソッドが呼び出された場合など。
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
        {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
      </td>
      <td>メディアの最初のフレームが読み込み終わった。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
      </td>
      <td>メタデータを読み込み終えた。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
      </td>
      <td>ブラウザーがリソースの読み込みを始めたときに発生します。</td>
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
        データがなくなったために一時停止または遅延した後で、再生の再開の準備ができた。
      </td>
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
      <td><em>シーク</em>捜査が始まった。</td>
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

ブラウザーはすべてが同じ[ファイル形式](/ja/docs/Web/Media/Formats/Containers)や[音声コーデック](/ja/docs/Web/Media/Formats/Audio_codecs)に対応しているわけではありません。内部に含められた {{htmlelement("source")}} 要素で複数のソースを提供することができ、ブラウザーは理解できる最初のものを使用します。

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Download <a href="myAudio.mp3" download="myAudio.mp3">MP3</a> or
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> audio.
  </p>
</audio>
```

音声ソースには、有効な [URL](/ja/docs/Web/URI) を設定することができます。これには HTTP(S) の URL や[データ URL](/ja/docs/Web/URI/Schemes/data) を含みます。 HTTP(S) の URL を使用する場合、ブラウザーのキャッシュ動作が、サーバーからファイルがリクエストされる頻度に影響することに注意してください。データ URL は音声データを直接 HTML に埋め込みます。これは小さな音声ファイルの場合には有益な使用することができますが、大きな音声ファイルの場合には HTML ファイルサイズが大きくなるため、推奨されません。

また、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) を使用することで、既存の音声ファイルをストリーミングするのではなく、 JavaScript コードから直接音声ストリームを生成し、操作することができます。 JavaScript で [`srcObject`](/ja/docs/Web/API/HTMLMediaElement/srcObject) を {{domxref("MediaStream")}} オブジェクトに設定することができます。これはライブ音声ストリームやリアルタイム音声処理に使用するのが一般的です。

```js
const audioElement = document.querySelector("audio");
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    audioElement.srcObject = stream;
  })
  .catch((error) => {
    console.error("マイクへのアクセスでエラーが発生しました", error);
  });
```

なお、 `MediaStream` ソースには制限があることに注意してください。 `MediaStream` ソースはシークすることができず、限られたコーデック設定にしか対応していません。

私たちは大量の綿密な[メディアファイル形式](/ja/docs/Web/Media/Formats)と[その中で使用することができる音声コーデックのガイド](/ja/docs/Web/Media/Formats/Audio_codecs)を提供しています。また、[動画で対応しているコーデックのガイド](/ja/docs/Web/Media/Formats/Video_codecs)も利用することができます。

他の使用上のメモ:

- `controls` 属性を指定しない場合、音声プレイヤーはブラウザーの既定のコントロールを含めません。 JavaScript と {{domxref("HTMLMediaElement")}} API を使用して、独自のカスタムコントロールを作成することができます。
- 音声コンテンツを詳細に制御できるように、 `HTMLMediaElement` はさまざまな[イベント](/ja/docs/Web/API/HTMLMediaElement#イベント)を発行します。これは音声の読み込みプロセスを監視する方法も提供するので、エラーを監視したり、再生や捜査を始めることができるようになったことを検出したりすることができます。
- `<audio>` 要素は `<video>` 要素と同じような方法で字幕を持つことができません。 Ian Devlin による [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio) で、役立つ情報や作業があります。
- この要素を対応しているブラウザーで代替コンテンツをテストするには、`<audio>` を `<notanaudio>` のような存在しない要素に置き換えることで行うことができます。

HTML の `<audio>` 要素の使用に関する良い情報源として、 [HTML 動画および音声](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)の初心者向けチュートリアルがあります。

### CSS でのスタイル付け

`<audio>` 要素は既定では固有の視覚的な出力を持ちませんが、 `controls` 属性が指定されると、ブラウザーの標準のコントロールが表示されます。

既定のコントロールは {{cssxref("display")}} の値に既定で `inline` を持っており、テキストブロックなどの中に置いておきたい場合でない限り、配置やレイアウトを制御しやすくするために、値を `block` に設定することは、多くの場合は良い考えです。

既定のコントロールは、ブロックを単位としてて影響するプロパティでスタイル付けすることができるので、 {{cssxref("border")}} や {{cssxref("border-radius")}}、{{cssxref("padding")}}、{{cssxref("margin")}} 等を指定することができます。しかし、音声プレイヤー内の個別のコンポーネントはスタイル付けすることができず (例えば、ボタンの寸法やアイコンの変更、フォントの変更など)、またコントロールはブラウザーごとに異なります。

ブラウザー間で一貫したルック＆フィールを実現するには、カスタムコントロールを作成する必要があるでしょう。これは好きな方法でマークアップおよびスタイル付けをすることができ、 JavaScript と {{domxref("HTMLMediaElement")}} API を使用することで、これらの機能を結合することができます。

[動画プレイヤーのスタイル付けの基本](/ja/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)は、便利なスタイル付けテクニックをいくつか紹介しています。これは `<video>` の文脈で書かれたものですが、多くは `<audio>` にも同様に適用されます。

### トラックの追加と削除の検出

{{domxref("AudioTrackList/addtrack_event", "addtrack")}} および {{domxref("AudioTrackList/removetrack_event", "removetrack")}} イベントを用いると、 `<audio>` 要素でトラックが追加されたり削除されたりしたことを検出することができます。しかし、これらのイベントは `<audio>` 要素自身に直接送信されるわけではありません。代わりに、 `<audio>` の {{domxref("HTMLMediaElement")}} 内にある、要素に追加されたトラックの種類に対応するトラックリストオブジェクトに送信されます。

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : メディア要素のオーディオトラックのすべてを含む {{domxref("AudioTrackList")}} です。 `addtrack` のリスナーをこのオブジェクトに追加すると、新しいオーディオトラックが要素に追加された時に通知を受け取ることができます。
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : `addtrack` リスナーをこの {{domxref("VideoTrackList")}} オブジェクトに追加することで、要素に動画トラックが追加されたときに通知を受け取ることができます。
- {{domxref("HTMLMediaElement.textTracks")}}
  - : `addtrack` リスナーをこの {{domxref("TextTrackList")}} オブジェクトに追加することで、要素にテキストトラックが追加されたときに通知を受け取ることができます。

> **メモ:** `<audio>` 要素であっても、動画やテキストトラックリストを持っており、インターフェイスの実装の仕様が奇妙に見えますが、実際に動画を表示するために使用することができます。

例えば、次のようなコードで `<audio>` 要素で音声トラックが追加されたり削除されたりしたときを検出することができます。

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

このコードは音声トラックが要素で追加および削除されることを監視し、トラックエディターの論理関数を呼び出すことで、エディターにおける利用できるトラックの一覧でトラックを登録や削除を行います。

{{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して {{domxref("AudioTrackList/addtrack_event", "addtrack")}} および {{domxref("AudioTrackList/removetrack_event", "removetrack")}} イベント待ち受けすることもできます。

## アクセシビリティ

台詞のある音声には、実際にコンテンツを説明する字幕と文字化情報 (transcript) を提供するべきです。 [WebVTT](/ja/docs/Web/API/WebVTT_API) を使用して字幕を指定すると、聴力を失った人が、音声の再生時に音声の内容を理解する事ができるようになるのに対し、文字化情報を使用すると、録音されたコンテンツを理解するのに時間が掛かる人が、自分に合ったペースと書式で録音の内容を確認できるようになります。

自動字幕サービスが使用されている場合は、生成されたコンテンツが元の音声を正しく表現しているかを確認することが重要です。

`<audio>` 要素は直接 WebVTT に対応していません。機能を提供するライブラリーまたはフレームワークを探すか、字幕を表示するコードを自分自身で書くかする必要があります。一つの選択肢として、 {{HTMLElement("video")}} 要素が WebVTT に対応しているので、これで音声を再生するというものもあります。

字幕や文字化情報では、話されるセリフに加えて、重要な情報を伝える音楽や音響効果も識別できるようにしてください。これには感情や口調も含みます。例えば、以下の WebVTT では、角括弧を使用して口調や感情を閲覧者に示しています。これによって音楽、物音、効果音などの雰囲気を確立するのに役立ちます。

<!-- cSpell:ignore switchwatch Swisswatch -->

```plain
1
00:00:00 --> 00:00:45
[エネルギチックなテクノ音楽]

2
00:00:46 --> 00:00:51
タイムキーパーのポッドキャストのようこそ！このエピソードでは、私たちはどちらのスイス時計が腕時計かを議論します？

16
00:00:52 --> 00:01:02
[笑い] ごめん！言いたかったのは、どの腕時計がスイスの腕時計か？です。
```

また、 `<audio>` 要素に対応していないブラウザーを使用している閲覧者向けのフォールバックとしていくらかのコンテンツ (直接ダウンロードするリンクなど) を提供するのは良い習慣です。

```html-nolint
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    <a href="myAudio.mp3">MP3</a> または
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> の音声をダウンロードしてください。
  </p>
</audio>
```

- [Web Video Text Tracks Format (WebVTT)](/ja/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN WCAG を理解する ― ガイドライン 1.2 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.2_—_タイムベースト・メディアのための代替テキストの提供)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## 例

### 基本的な使用法

以下の例は `<audio>` 要素で OGG ファイルを再生する単純な例を示しています。ページで許可されていれば、 `autoplay` 属性によって自動再生され、代替コンテンツも含んでいます。

```html-nolint
<!-- シンプルな音声再生 -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg">OGG 音声をダウンロード</a>。
</audio>
```

いつ自動再生が動作するのか、自動再生を使用する許可の取得方法、いつどのように自動再生を使用するのが適切であるのかについては、[自動再生ガイド](/ja/docs/Web/Media/Autoplay_guide)をご覧ください。

### \<source> 要素を伴う \<audio> 要素

この例では、埋め込まれる音声トラックを、 `<audio>` 要素の直接の `src` 属性ではなく、内部の `<source>` 要素のものを使用して指定しています。これは `type` 属性の中でファイルの MIME タイプを含めることで、ブラウザーがそのファイルを再生できるかどうかを知ることができ、そのファイル再生できないときに時間を浪費しません。

```html-nolint
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav">WAV 音声をダウンロード</a>。
</audio>
```

### 複数の \<source> 要素を持つ \<audio>

この例には複数の `<source>` 要素があります。ブラウザーは、最初の source 要素 (Opus) が再生可能であればそれを読み込もうとし、そうでなければ 2 つ目 (Vorbis) に、最後に MP3 にフォールバックします。

```html-nolint
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、記述コンテンツ、埋め込みコンテンツ。
        <a href="#controls"><code>controls</code></a> 属性がある場合は、対話型コンテンツと知覚可能コンテンツ。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        要素が <a href="#src"><code>src</code></a> 属性を持つ場合:
        0 個以上の {{HTMLElement("track")}} 要素とそれに続く、メディア要素を含まない透過的コンテンツ。すなわち <code>&lt;audio&gt;</code> 要素や {{HTMLElement("video")}}を子要素として配置してはなりません。<br />
        その他の場合: 0 個以上の {{HTMLElement("source")}} 要素、 0 個以上の {{HTMLElement("track")}} 要素、メディア要素を含まない透過的コンテンツ。すなわち <code>&lt;audio&gt;</code> 要素や {{HTMLElement("video")}} を子要素として配置してはなりません。
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
      <td>{{domxref("HTMLAudioElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブメディア技術](/ja/docs/Web/Media)

  - [メディアコンテナー形式 (ファイル形式)](/ja/docs/Web/Media/Formats/Containers)
  - [ウェブで使用される音声コーデックのガイド](/ja/docs/Web/Media/Formats/Audio_codecs)

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- {{domxref("HTMLAudioElement")}}
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [学習領域: HTML 動画および音声](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [ブラウザーに依存しない音声の基本](/ja/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
