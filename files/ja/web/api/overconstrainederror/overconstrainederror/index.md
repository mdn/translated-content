---
title: "OverconstrainedError: OverconstrainedError() コンストラクター"
slug: Web/API/OverconstrainedError/OverconstrainedError
l10n:
  sourceCommit: 3178e38ae397032bd9c44d5ec6f8192ee391b56a
---

{{APIRef("Media Capture and Streams")}}

**`OverconstrainedError()`** コンストラクターは、{{domxref('MediaStreamTrack')}} で要求されている能力の組が現在実現できないことを表す新しい {{domxref("OverconstrainedError")}} オブジェクトを作成します。このイベントが `MediaStreamTrack` で投げられると、現在の制約が実現できるか、実現できる制約が適用されるまで、無音になります。

## 構文

```js-nolint
new OverconstrainedError()
```

### 引数

- `constraint`
  - : 実現できていない制約を表します。
- `message` {{optional_inline}}
  - : エラーの `message` プロパティに入れるテキストです。デフォルトは空文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
