---
title: VTTCue()
slug: Web/API/VTTCue/VTTCue
---

{{APIRef("WebVTT")}}

**`VTTCue()`** コンストラクタは新しい {{domxref("VTTCue")}} オブジェクトを返します。

## 構文

```
 vttCue = new VTTCue(startTime, endTime, text);
```

### パラメーター

- _startTime_
  - : これは、キューを表示し始める動画の時間を表す `double` 型です。
- _endTime_
  - : これは、キューを表示しなくなる動画の時間を表す `double` 型です。
- _text_
  - : これは表示するテキストを表す {{domxref("DOMString")}} です。

## 例

```js
// 2から3秒の間に表示するキューを作成し、指定されたテキストを使用します。
var cue = new VTTCue(2, 3, 'かっこいい文章を表示する');
```

## 仕様

| 仕様                                                                         | 状態                     | コメント |
| ---------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName("WebVTT", "#dom-vttcue-vttcue", "VTTCue()")}} | {{Spec2("WebVTT")}} |          |

## ブラウザーの互換性

{{Compat("api.VTTCue.VTTCue")}}
