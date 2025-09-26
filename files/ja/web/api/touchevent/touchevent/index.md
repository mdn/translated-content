---
title: "TouchEvent: TouchEvent() コンストラクター"
short-title: TouchEvent()
slug: Web/API/TouchEvent/TouchEvent
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Touch Events")}}

**`TouchEvent()`** コンストラクターは新しい {{domxref("TouchEvent")}} オブジェクトを生成します。

> [!NOTE]
> このコンストラクタを使用して合成イベントを作成した場合、セキュリティ上の理由から、そのイベントは信頼されません。
> ブラウザーが生成した `TouchEvent` オブジェクトのみが信頼され、信頼されたイベントのみが既定のアクションを発生させます。

## 構文

```js-nolint
new TouchEvent(type)
new TouchEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前の文字列です。
    大文字小文字の区別があり、ブラウザーは `touchstart`, `touchend`, `touchmove`, `touchcancel` のいずれかを設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、 _{{domxref("UIEvent/UIEvent", "UIEvent()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `touches` {{optional_inline}}
      - : {{domxref("TouchList")}} （既定値は空）で、現在面に触れているすべてのタッチ点のオブジェクトのリストです。
    - `targetTouches` {{optional_inline}}
      - : {{domxref("TouchList")}} （既定値は空）で、現在のイベントの対象である要素で接触を始め、現在接触中のすべてのタッチ点のリストです。
    - `changedTouches` {{optional_inline}}
      - : 既定値は `[]`、型は `Touch[]` で、このイベントに貢献した接触点すべてのオブジェクトのリストです。
    - `ctrlKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 <kbd>ctrl</kbd> キーが同時に押されていたかどうかを示します。
    - `shiftKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 <kbd>shift</kbd> キーが同時に押されていたかどうかを示します。
    - `altKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 <kbd>alt</kbd> キーが同時に押されていたかどうかを示します。
    - `metaKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 <kbd>meta</kbd> キーが同時に押されていたかどうかを示します。

### 返値

新しい {{domxref("TouchEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TouchEvent")}}, the interface of the objects it constructs.
