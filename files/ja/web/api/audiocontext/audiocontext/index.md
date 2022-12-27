---
title: AudioContext()
slug: Web/API/AudioContext/AudioContext
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

**`AudioContext()`** コンストラクタは新しい {{domxref("AudioContext")}} オブジェクトを作成します。このオブジェクトはオーディオモジュールが相互に接続された音声処理のグラフを表現しています。このグラフ中で用いられるオーディオモジュールは {{domxref("AudioNode")}} として表現されます。

## 記法

```
var audioContext = new AudioContext(options)
```

### 引数

なし。

**仕様**

| 仕様                                                                                 | 状態                                 | コメント            |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Web Audio API','#AudioContext','AudioContext()')}} | {{Spec2('Web Audio API')}} | Initial definition. |

## ブラウザー互換性

{{Compat("api.AudioContext.AudioContext")}}
