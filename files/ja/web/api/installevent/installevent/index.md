---
title: "InstallEvent: InstallEvent() コンストラクター"
short-title: InstallEvent()
slug: Web/API/InstallEvent/InstallEvent
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Service Workers API")}}

**`InstallEvent()`** コンストラクターは、新しい {{domxref("InstallEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new InstallEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前です。
    大文字小文字の区別があり、ブラウザーは常に `install` に設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、イベントオブジェクトに適用したい独自の設定を指定することができます。現時点では必須となるオプションはありませんが、将来的な互換性を確保するためにこの仕様が定義されています。

## 返値

新しい {{domxref("InstallEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
