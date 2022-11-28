---
title: MediaRecorder.isTypeSupported
slug: Web/API/MediaRecorder/isTypeSupported
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.isTypeSupported()`** メソッドは、指定された MIME タイプがユーザーエージェントが記録できるものであれば `true` となる `Boolean` を返します。

## 構文

```
var canRecord = MediaRecorder.isTypeSupported(mimeType)
```

### パラメーター

- `mimeType`
  - : チェックする MIME タイプ。

### 戻り値

{{domxref("MediaRecorder")}} の実装が指定された MIME タイプの {{domxref("Blob")}} オブジェクトを記録できる場合は `true`。 記録および符号化プロセスをサポートするのに十分なリソースがない場合、記録はまだ失敗する可能性があります。 値が `false` の場合、ユーザーエージェントは指定されたフォーマットを記録することができません。

## 例

```js
var types = ["video/webm",
             "audio/webm",
             "video/webm\;codecs=vp8",
             "video/webm\;codecs=daala",
             "video/webm\;codecs=h264",
             "audio/webm\;codecs=opus",
             "video/mpeg"];

for (var i in types) {
  console.log( types[i] + " をサポートしている？ " + (MediaRecorder.isTypeSupported(types[i]) ? "たぶん！" : "いいえ :("));
}
```

## 仕様

| 仕様                                                                                                                             | 状態                                         | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('MediaStream Recording', '#dom-mediarecorder-istypesupported', 'isTypeSupported()')}} | {{Spec2('MediaStream Recording')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.isTypeSupported")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaCapabilities")}}
