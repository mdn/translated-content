---
title: MediaRecorder.onerror
slug: conflicting/Web/API/MediaRecorder/error_event
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - Video
  - onerror
translation_of: Web/API/MediaRecorder/onerror
original_slug: Web/API/MediaRecorder/onerror
---
{{APIRef("MediaStream Recording")}}

{{domxref("MediaRecorder")}} インターフェイスの **`onerror`** イベントハンドラは、エラーが発生したときに [MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) によって呼び出されます。 メディアレコーダーの作成中または使用中に発生したエラーを処理するためのイベントハンドラを提供できます。 エラーオブジェクトは {{domxref("MediaRecorderErrorEvent")}} 型で、その {{domxref("MediaRecorderErrorEvent.error", "error")}} プロパティには発生したエラーを説明する {{domxref("DOMException")}} オブジェクトが含まれています。

## 構文

```
MediaRecorder.onerror = errorHandlerFunction;
```

### 値

レコーダーの有効期間中にエラーが発生したときに必ず呼び出される関数。 発生する可能性があるその他の一般的なエラーに加えて、MediaStream Recording API を使用すると、以下のエラーが特に発生する可能性があります。 どれが発生したかを判断するには、{{domxref("DOMException.name", "MediaRecorderErrorEvent.error.name")}} の値を確認してください。

- `InvalidStateError`
  - : 非アクティブなレコーダーの停止や一時停止、アクティブなレコーダーの起動や再開、それ以外の場合は、間違った状態で `MediaRecorder` を操作しようとしました。 この例外は、削除されたまたは取り除かれたソースに対して要求が行われたときにも発生する可能性があります。
- `SecurityError`
  - : {{domxref("MediaStream")}} は記録を禁止するように設定されています。 これは、例えば、ユーザーが入力デバイスを使用するパーミッションを拒否したときに {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得されたソースの場合などです。 これは、ソースストリームの {{domxref("MediaStreamConstraints.peerIdentity", "peerIdentity")}} 制約により、ストリーム内の {{domxref("MediaStreamTrack")}} が {{domxref("MediaStreamTrack.isolated", "isolated")}} としてマークされている場合にも発生します。
- `NotSupportedError`
  - : ユーザーのデバイスがサポートしていない MIME タイプを使用して `MediaRecorder` をインスタンス化しようとしました。 1 つ以上の要求されたコンテナ、コーデック、またはプロファイル、その他の情報が無効である可能性があります。
- `UnknownError`
  - : 分類できない、セキュリティに関連しないエラーが発生しました。 記録が停止し、`MediaRecorder` の {{domxref("MediaRecorder.state", "state")}} が非アクティブになり、最後の {{event("dataavailable")}} イベントが残りの受信データと共に `MediaRecorder` に送られ、最後に {{event("stop")}} イベントが送られます。

これらのエラーは、`MediaRecorder` メソッドの呼び出しが原因で直接発生した場合も、録音プロセス中に発生した問題が原因で間接的に発生した場合もあります。

## 例

この例では、新しい {{domxref("MediaRecorder")}} インスタンスを作成し、{{Glossary("user agent", "ユーザーエージェント")}}のデフォルトのメディア形式を使用して録画を開始します。 `MediaRecorder` または、エラーの名前（セットアッププロセス中に例外がスローされた場合）のいずれかを返します。

<div class="codecopy codecopy-lg"><pre class="brush: js line-numbers language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">recordStream</span><span class="punctuation token">(</span>stream<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">let</span> recorder <span class="operator token">=</span> <span class="keyword token">null</span><span class="punctuation token">;</span>
  <span class="keyword token">let</span> bufferList <span class="operator token">=</span> <span class="punctuation token">[</span><span class="punctuation token">]</span><span class="punctuation token">;</span>

<span class="keyword token">try</span> <span class="punctuation token">{</span>
recorder <span class="operator token">=</span> <span class="keyword token">new</span> <span class="class-name token">MediaRecorder</span><span class="punctuation token">(</span>stream<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span> <span class="keyword token">catch</span><span class="punctuation token">(</span>err<span class="punctuation token">)</span> <span class="punctuation token">{</span>
return err.name; /_ エラー名を返す _/
<span class="punctuation token">}</span>

recorder<span class="punctuation token">.</span>ondataavailable <span class="operator token">=</span> <span class="keyword token">function</span><span class="punctuation token">(</span>event<span class="punctuation token">)</span> <span class="punctuation token">{</span>
bufferList<span class="punctuation token">.</span><span class="function token">push</span><span class="punctuation token">(</span>event<span class="punctuation token">.</span>data<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span><span class="punctuation token">;</span>

recorder<span class="punctuation token">.</span>onerror <span class="operator token">=</span> <span class="keyword token">function</span><span class="punctuation token">(</span>event<span class="punctuation token">)</span> <span class="punctuation token">{</span>
<span class="keyword token">let</span> error <span class="operator token">=</span> event<span class="punctuation token">.</span>error<span class="punctuation token">;

    switch(error.name) {
      case InvalidStateError:
        showNotification("今すぐ動画を録画することはできません。 " +
                         "あとでもう一度試してみてください。");
        break;
      case SecurityError:
        showNotification("セキュリティ上の制限により、" +
                         "指定されたソースを録音する" +
                         "ことはできません。");
        break;
      default:
        showNotification("動画を録画しようとしたときに" +
                         "問題が発生しました。");
        break;
    }</span>

<span class="punctuation token">}</span><span class="punctuation token">;

/_ ここは、ディスクへのバッファの書き込みを定期的に処理する
ワーカーを作成するのに適した場所です。 _/</span>

recorder<span class="punctuation token">.</span><span class="function token">start</span><span class="punctuation token">(</span><span class="number token">100</span><span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">/_ バッファあたり 100ms のタイムスライス _/</span>
<span class="keyword token">return</span> recorder<span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre></div>

## 仕様

| 仕様                                                                                                                         | 状態                                         | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-onerror", "MediaRecorder.onerror")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.onerror")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia()")}}
