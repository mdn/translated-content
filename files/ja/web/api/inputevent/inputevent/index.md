---
title: "InputEvent: InputEvent() コンストラクター"
short-title: InputEvent()
slug: Web/API/InputEvent/InputEvent
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`InputEvent()`** コンストラクターは、新しい {{domxref("InputEvent")}} オブジェクトを作成します。

## 構文

```js-nolint
new InputEvent(type)
new InputEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前の文字列です。
    大文字小文字の区別があり、ブラウザーは `beforeinput` または `input` を設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("UIEvent/UIEvent", "UIEvent()")}} で定義されたプロパティに加え_、以下のプロパティを持つことができます。
    - `inputType` {{optional_inline}}
      - : 文字列で、テキストの挿入、削除、書式設定など、編集可能なコンテンツに対する変更の種類を指定します。
    - `data` {{optional_inline}}
      - : 文字列で、挿入する文字を保持します。
        これは、変更がテキストを挿入しない場合（例えば、文字を削除する場合など）、空文字列になることがあります。
    - `isComposing` {{optional_inline}}
      - : 論理値で、そのイベントが変換セッションの一部であることを示します。つまり、 {{domxref("Element/compositionstart_event", "compositionstart")}} イベントの後で、 {{domxref("Element/compositionend_event", "compositionend")}} イベントの前にあることを意味します。既定では、 `false` です。

### 返値

新しい {{domxref("InputEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("InputEvent")}}: 構築するオブジェクトのインスタンスです。
