---
title: "MediaQueryListEvent: MediaQueryListEvent() コンストラクター"
short-title: MediaQueryListEvent()
slug: Web/API/MediaQueryListEvent/MediaQueryListEvent
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

**`MediaQueryListEvent()`** コンストラクターは、新しい {{domxref("MediaQueryListEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new MediaQueryListEvent(type)
new MediaQueryListEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字の区別があり、ブラウザーは常に `change` に設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `media` {{optional_inline}}
      - :シリアライズされたメディアクエリーを表す文字列です。既定値は `""` です。
    - `matches` {{optional_inline}}
      - : メディアクエリーの状態を表す論理値です。 `true` ならば一致しており、 `false` ならば一致していません。既定値は `false` です。

### 返値

新しい {{domxref("MediaQueryListEvent")}} オブジェクトです。

## 例

```js
const media = "(max-width: 600px)";
const matches = true;

const myMediaQueryListEvent = new MediaQueryListEvent("change", {
  media,
  matches,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [プログラムによるメディアクエリーの評価](/ja/docs/Web/CSS/Guides/Media_queries/Testing)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
