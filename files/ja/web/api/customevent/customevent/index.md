---
title: "CustomEvent: CustomEvent() コンストラクター"
short-title: CustomEvent()
slug: Web/API/CustomEvent/CustomEvent
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("DOM")}}

**`CustomEvent()`** コンストラクターは新しい {{domxref("CustomEvent")}} を作成します。

## 構文

```js-nolint
new CustomEvent(type)
new CustomEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。イベント名は大文字小文字を区別します。
- `options` {{optional_inline}}
  - : オブジェクトで、 {{domxref("Event/Event", "Event()")}} で定義されるプロパティに加えて、以下のプロパティを指定することができます。
    - `detail` {{optional_inline}}
      - : イベントと関連付けられたイベント依存の値。この値は、ハンドラーが {{domxref("CustomEvent.detail")}} プロパティを用いて利用できるようになります。
        既定値は `null` です。

### 返値

新しい {{domxref("CustomEvent")}} オブジェクトです。

## 例

```js
// カスタムイベントを作成
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

// 適切なイベントリスナーを追加
obj.addEventListener("animalfound", (e) => console.log(e.detail.name));

// イベントの配信
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);

// "cat" および "dog" がコンソールの出力される
```

その他の例が[イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CustomEvent")}}
- [イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)
