---
title: "VTTCue: VTTCue() コンストラクター"
short-title: VTTCue()
slug: Web/API/VTTCue/VTTCue
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`VTTCue()`** コンストラクターは新しい {{domxref("VTTCue")}} オブジェクトを返します。

## 構文

```js-nolint
new VTTCue(startTime, endTime, text)
```

### 引数

- `startTime`
  - : 最初のテキストトラックのキュー開始時刻を表す `double` です。
    これは、秒と秒の小数で指定された時刻で、このキューが適用されるメディアデータの範囲の開始時刻を表します。例えば、 50 秒から 1 分 5.5 秒までのキューを表示する場合、 `startTime` は 50.0 になります。
- `endTime`
  - : このテキストトラックのキュー終了時刻を表す `double` です。
    これは、キューをユーザーに表示するのを止める時刻を指定された秒と秒の小数で表したものです。`startTime` で示したキューの例では、`endTime` の値は 65.5 となります。
- `text`
  - : `startTime` と `endTime` で示される時刻の間に表示させる、テキストを指定する文字列です。

### 返値

指定された時刻の間に表示されるキューを表す新しい {{domxref("VTTCue")}} オブジェクトです。

## 例

```js
// 2 ～ 3 秒の間に表示するキューを作成し、指定されたテキストを使用します。
let cue = new VTTCue(2, 3, "かっこいい文章を表示する");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
