---
title: InstallEvent()
slug: Web/API/InstallEvent/InstallEvent
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Service Workers API")}}{{Deprecated_Header}}{{Non-standard_header}}

**`InstallEvent()`** コンストラクターは、新しい {{domxref("InstallEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new InstallEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前です。
    大文字小文字の区別があり、ブラウザーは常に `install` に設定します。
- `options`
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `activeWorker`
      - : 現在ページをアクティブに制御している {{domxref("ServiceWorker")}} です。

## 返値

新しい {{domxref("InstallEvent")}} オブジェクトです。

## 仕様書

_この機能は標準化路線にはありません。_

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
