---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement`** インターフェイスは、 {{domxref("HTMLElement")}} に音声や動画で一般的なメディアに関する基本的な能力の対応に必要なプロパティやメソッドを追加します。

{{domxref("HTMLVideoElement")}} および {{domxref("HTMLAudioElement")}} 要素はどちらも、このインターフェイスを継承しています。

{{InheritanceDiagram}}

## プロパティ

_このインターフェイスは祖先である {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}}, {{domxref("EventTarget")}} のプロパティを継承しています。_

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : {{domxref("AudioTrackList")}} で、この要素に含まれる {{domxref("AudioTrack")}} オブジェクトを列挙します。
- {{domxref("HTMLMediaElement.autoplay")}}

  - : 論理値で、 HTML の [`autoplay`](/ja/docs/Web/HTML/Element/video#autoplay) 属性の値を反映し、中断なしに再生できるだけの十分なデータが揃った時点で自動的に再生を始めるかどうかを示します。

    > [!NOTE]
    > ユーザーが期待していない、あるいは望んでいないときに自動的に音声を再生すると、ユーザーに不快な体験をさせることになるため、ほとんどの場合避けるべきですが、例外も存在します。詳しくは、[メディアとウェブオーディオ API のガイド](/ja/docs/Web/Media/Autoplay_guide)を参照してください。ブラウザーは自動再生要求を無視する可能性があることを念頭に置き、コードが自動再生の動作に依存していないことを確認する必要があります。

- {{domxref("HTMLMediaElement.buffered")}} {{ReadOnlyInline}}
  - : `buffered` プロパティにアクセスした時点で、ブラウザーがバッファリングしているメディアソースの範囲を（もしあれば） {{domxref("TimeRanges")}} オブジェクトで返します。
- {{domxref("HTMLMediaElement.controls")}}
  - : 論理値で、 HTML の [`controls`](/ja/docs/Web/HTML/Element/video#controls) 属性を反映し、リソースを制御するユーザーインターフェイス項目を表示するかどうかを示します。
- {{domxref("HTMLMediaElement.controlsList")}} {{ReadOnlyInline}}
  - : ユーザーエージェントが独自のコントロールのセットを表示するたびに、メディア要素に表示するコントロールをユーザーエージェントが選択するのに役立つ {{domxref("DOMTokenList")}} を返します。 `DOMTokenList`は、`nodownload`、`nofullscreen`、`noremoteplayback`の 3 つの値のうち 1 つ以上を取ります。
- {{domxref("HTMLMediaElement.crossOrigin")}}
  - : 文字列で、このメディア要素の [CORS 設定](/ja/docs/Web/HTML/Attributes/crossorigin)を示します。
- {{domxref("HTMLMediaElement.currentSrc")}}{{ReadOnlyInline}}
  - : 文字列で、選択されたメディアリソースの絶対 URL を返します。
- {{domxref("HTMLMediaElement.currentTime")}}
  - : 倍精度浮動小数点値で、現在の再生時刻を秒単位で示します。メディアの再生が開始されておらず、シークも行われていない場合、この値はメディアの初期再生時刻となります。この値を設定すると、メディアは新しい時刻にシークされます。この時間は、メディアのタイムラインに対して相対的に指定されます。
- {{domxref("HTMLMediaElement.defaultMuted")}}
  - : 論理値で、HTML の [`muted`](/ja/docs/Web/HTML/Element/video#muted) 属性を反映します。標準状態で音声がミュートされているか、いないかを示します。
- {{domxref("HTMLMediaElement.defaultPlaybackRate")}}
  - : `double` で、メディアの既定の再生速度を示します。
- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : 論理値で、リモート再生の状態を設定または返却します。メディア要素にリモート再生 UI が許可されているかどうかを示します。
- {{domxref("HTMLMediaElement.duration")}} {{ReadOnlyInline}}
  - : 読み取り専用の倍精度浮動小数点値で、メディアの総時間を秒単位で示します。メディアデータがない場合、返値は `NaN` となります。メディアの長さが不定 （ライブストリーミングメディアや WebRTC 呼び出しのメディアなど）の場合、 値は `+Infinity` となります。
- {{domxref("HTMLMediaElement.ended")}} {{ReadOnlyInline}}
  - : メディア要素の再生が終了したかどうかを示す論理値を返します。
- {{domxref("HTMLMediaElement.error")}} {{ReadOnlyInline}}
  - : 直近のエラーに対応する {{domxref("MediaError")}} オブジェクトを返すか、エラーが発生していない場合は `null` を返します。
- {{domxref("HTMLMediaElement.loop")}}
  - : 論理型で、 HTML の [`loop`](/ja/docs/Web/HTML/Element/video#loop) 属性を反映し、末尾に達したときにメディア要素が再び再生を始めるかどうかを示します。
- {{domxref("HTMLMediaElement.mediaKeys")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : {{domxref("MediaKeys")}} オブジェクトで、再生中にその要素がメディアデータを復号するために使用することができる一連のキーを返します。利用できるキーがない場合は `null` となります。
- {{domxref("HTMLMediaElement.muted")}}
  - : 音声がミュートされているかどうかを判断するための論理値です。ミュートされている場合は `true` で、そうでない場合は `false` となります。
- {{domxref("HTMLMediaElement.networkState")}} {{ReadOnlyInline}}
  - : ネットワーク経由でメディアを取得する際の現在の状態を示す `unsigned short` （列挙値）を返します。
- {{domxref("HTMLMediaElement.paused")}} {{ReadOnlyInline}}
  - : 論理値で、メディア要素が一時停止中であるか否かを示します。
- {{domxref("HTMLMediaElement.playbackRate")}}
  - : `double` で、メディアの再生レートを示します。
- {{domxref("HTMLMediaElement.played")}} {{ReadOnlyInline}}
  - : ブラウザーが再生したメディアソースの範囲を含む {{domxref('TimeRanges')}} オブジェクトを返します（もしあれば）。
- {{domxref("HTMLMediaElement.preload")}}
  - : HTML の [`preload`](/ja/docs/Web/HTML/Element/video#preload) 属性を反映した文字列で、どのデータを先読みすべきかを示します。取りうる値は `none`, `metadata`, `auto` です。
- {{domxref("HTMLMediaElement.preservesPitch")}}
  - : 音のピッチを保持するかどうかを決定する論理値です。 `false` に設定すると、ピッチは音声の速度に合わせられます。
- {{domxref("HTMLMediaElement.readyState")}} {{ReadOnlyInline}}
  - : メディアの準備状態を示す `unsigned short` （列挙値）を返します。
- {{domxref("HTMLMediaElement.remote")}} {{ReadOnlyInline}}
  - : このメディア要素に関連付けられた {{domxref("RemotePlayback")}} オブジェクトインスタンスを返します。
- {{domxref("HTMLMediaElement.seekable")}} {{ReadOnlyInline}}
  - : ユーザーがシークできる時間帯があれば、それを含む {{domxref('TimeRanges')}} オブジェクトを返します。
- {{domxref("HTMLMediaElement.seeking")}} {{ReadOnlyInline}}
  - : メディアが新しい位置へのシーク中であるかどうかを論理値で返します。
- {{domxref("HTMLMediaElement.sinkId")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 出力する音声機器の固有の ID を文字列で返します。ユーザーエージェントの既定の音声機器を使用している場合は、空文字列を返します。
- {{domxref("HTMLMediaElement.src")}}
  - : 使用するメディアリソースの URL を記した HTML の [`src`](/ja/docs/Web/HTML/Element/video#src) 属性を反映した文字列です。
- {{domxref("HTMLMediaElement.srcObject")}}
  - : 現在の `HTMLMediaElement` で再生する、または再生したメディアを表す {{domxref('MediaStream')}}、または割り当てられていない場合は `null` です。
- {{domxref("HTMLMediaElement.textTracks")}} {{ReadOnlyInline}}
  - : {{domxref('TextTrackList')}} オブジェクトで、この要素に含まれる {{domxref("TextTrack")}} オブジェクトのリストを返します。
- {{domxref("HTMLMediaElement.videoTracks")}} {{ReadOnlyInline}}
  - : {{domxref('VideoTrackList')}} オブジェクトで、この要素に含まれる {{domxref("VideoTrack")}} オブジェクトのリストを返します。
- {{domxref("HTMLMediaElement.volume")}}
  - : `double` で音声の音量を示します。 0.0 (無音) から 1.0 (最大) の間です。

## 廃止されたプロパティ

これらのプロパティは廃止されており、たとえブラウザーがまだ対応していても使わないでください。

- {{domxref("HTMLMediaElement.controller")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 要素に割り当てられたメディアコントローラーを表す {{domxref("MediaController")}} オブジェクト、または何も割り当てられていない場合は `null` です。
- {{domxref("HTMLMediaElement.mediaGroup")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 所属する要素のグループ名を示す HTML の `mediagroup` 属性を反映した文字列です。メディア要素のグループは、共通の {{domxref('MediaController')}} を共有します。
- {{domxref("HTMLMediaElement.mozAudioCaptured")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 論理値を返します。オーディオストリームキャプチャに関連します。
- {{domxref("HTMLMediaElement.mozFragmentEnd")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : `double` で、メディア要素が `currentSrc` のフラグメント URI を持っている場合はフラグメントの終了時刻にアクセスすることができます。それ以外の場合はメディアの再生時間と同じです。

## メソッド

_このインターフェイスには祖先である {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}}, {{domxref("EventTarget")}} から継承したメソッドもあります。_

- {{domxref("HTMLMediaElement.addTextTrack()")}}
  - : メディア要素に新しい {{domxref("TextTrack")}} オブジェクト（字幕用トラックなど）を追加します。これはプログラム的なインターフェイスのみで、 DOM には影響しません。
- {{domxref("HTMLMediaElement.captureStream()")}}
  - : メディアコンテンツのストリームをキャプチャして {{domxref("MediaStream")}} 返します。
- {{domxref("HTMLMediaElement.canPlayType()")}}
  - : MIME メディア種別を指定する文字列（潜在的には [`codecs` 引数](/ja/docs/Web/Media/Formats/codecs_parameter)も含む）が与えられた場合、 `canPlayType()` は、メディアが再生可能であるべき場合には文字列 `probably` を、メディアが再生されるかどうかを決定するのに十分な情報がない場合には `maybe` を、メディアが再生できない場合には空文字列を返します。
- {{domxref("HTMLMediaElement.fastSeek()")}}
  - : 低い精度で素早く指定時刻にシークします。
- {{domxref("HTMLMediaElement.load()")}}
  - : メディアを先頭にリセットし、 [`src`](/ja/docs/Web/HTML/Element/video#src) 属性または {{HTMLElement("source")}} 要素を使用して提供されたソースのうちから、最適なソースを選択します。
- {{domxref("HTMLMediaElement.pause()")}}
  - : 再生を一時停止します。
- {{domxref("HTMLMediaElement.play()")}}
  - : 再生を開始します。
- {{domxref("HTMLMediaElement.seekToNextFrame()")}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : メディア内の次のフレームをシークします。この非標準的で実験的なメソッドにより、メディアの読み込みとレンダリングをカスタム速度で手動で行ったり、メディアをフレーム単位で移動してフィルタリングやその他の操作を行ったりすることが可能になります。
- {{domxref("HTMLMediaElement.setMediaKeys()")}} {{SecureContext_Inline}}
  - : {{jsxref("Promise")}} オブジェクトを返します。再生に利用する {{domxref("MediaKeys")}} を指定します。
- {{domxref("HTMLMediaElement.setSinkId()")}} {{SecureContext_Inline}}
  - : 出力に使用するオーディオ機器の ID を設定し、{{jsxref("Promise")}} を返します。これは、アプリケーションが指定された機器の使用が許可されている場合のみ動作します。

## 廃止されたメソッド

_これらのメソッドは廃止されているため、たとえブラウザーがまだ対応していても使わないでください。_

- {{domxref("HTMLMediaElement.mozCaptureStream()")}} {{Non-standard_Inline}}
  - : \[説明を入力]
- {{domxref("HTMLMediaElement.mozCaptureStreamUntilEnded()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : \[説明を入力]
- {{domxref("HTMLMediaElement.mozGetMetadata()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 再生中のメディアデータに対するメタデータを {{jsxref('Object')}} として返します。呼び出すたびに、オブジェクトのコピーが新しく作られます。このメソッドを呼び出すには、[`loadedmetadata`](/ja/docs/Web/API/HTMLMediaElement/loadedmetadata_event) イベントが発行された後でなければなりません。

## イベント

_親である {{domxref("HTMLElement")}} からイベントを継承しています。_

これらのイベントを待ち受けするには、{{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを代入するかしてください。

- {{domxref("HTMLMediaElement.abort_event", 'abort')}}
  - : リソースが完全にロードされておらず、かつその結果がエラーでない場合に発行されます。
- {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
  - : ユーザーエージェントがメディアを再生することはできるが、コンテンツのさらなるバッファリングのために停止することなくメディアを最後まで再生するには十分なデータが読み込まれて**いない**と推定されるときに発行されます。
- {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
  - : ユーザーエージェントがメディアを再生することができ、コンテンツのさらなるバッファリングのために停止することなく、メディアを最後まで再生するのに十分なデータが読み込まれたと推定されるときに発行されます。
- {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
  - : duration プロパティが更新されたときに発行されます。
- {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
  - : メディアが空になったときに発行されます。例えば、メディアがすでに読み込まれており（または部分的に読み込まれており）、再読み込みのために {{domxref("HTMLMediaElement.load()")}} メソッドが呼ばれた場合などです。
- {{domxref("HTMLMediaElement.ended_event", 'ended')}}
  - : メディア（\<audio> または \<video>）の終端に到達したとき、またはそれ以降のデータがないために再生が停止したときに発行されます。
- {{domxref("HTMLMediaElement.error_event", 'error')}}
  - : エラーによりリソースの読み込みができなかった場合に発行されます。
- {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
  - : メディアの 1 フレーム目の読み込みが終了した時点で発行されます。
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
  - : メタデータが読み込まれたときに発行されます。
- {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
  - : ブラウザーがリソースの読み込みを開始したときに発行されます。
- {{domxref("HTMLMediaElement.pause_event", 'pause')}}
  - : 再生を一時停止する要求が処理され、アクティビティが一時停止状態になったときに発行されます。最も一般的には、メディアの {{domxref("HTMLMediaElement.pause()")}} メソッドが呼び出されたときに発行されます。
- {{domxref("HTMLMediaElement.play_event", 'play')}}
  - : {{domxref("HTMLMediaElement.play()")}} メソッド、または `autoplay` 属性の結果として、 `paused` プロパティが `true` から `false` に変更されたときに発行されます。
- {{domxref("HTMLMediaElement.playing_event", "playing")}}
  - : データ不足で一時停止または遅延していた再生が開始できる状態になったときに発行されます。
- {{domxref("HTMLMediaElement.progress_event", "progress")}}
  - : ブラウザーがリソースを読み込む際に、定期的に発行されます。
- {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
  - : 再生速度が変更されたときに発行されます。
- {{domxref("HTMLMediaElement.resize_event", 'resize ')}}
  - : `videoWidth` および `videoHeight` プロパティの一方または両方が更新された直後に発行されます。
- {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
  - : シーク動作が完了したときに発行されます。
- {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
  - : シーク動作が開始されたときに発行されます。
- {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
  - : ユーザーエージェントがメディアデータを取得しようとしたが，予想に反してデータが得られなかった場合に発行されます。
- {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
  - : メディアデータの読み込みが中断されたときに発行されます。
- {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
  - : {{domxref("HTMLMediaElement.currentTime", "currentTime")}} プロパティで示される時刻が更新されたときに発行されます。
- {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
  - : 音量が変更されたときに発行されます。
- {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
  - : 一時的なデータ不足で再生が停止したときに発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

### リファレンス

- HTML の {{HTMLElement("video")}} および {{HTMLElement("audio")}} 要素
- `HTMLMediaElement` を継承している {{domxref("HTMLVideoElement")}} および {{domxref("HTMLAudioElement")}} インターフェイス

### ガイド

- [ウェブメディア技術](/ja/docs/Web/Media)
- 学習領域: [動画および音声コンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [メディア型と形式のガイド](/ja/docs/Web/Media/Formats)
- [ウェブコンテンツにおけるメディア対応の問題の扱い](/ja/docs/Web/Media/Formats/Support_issues)
