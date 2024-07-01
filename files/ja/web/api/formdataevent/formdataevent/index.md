---
title: "FormDataEvent: FormDataEvent() コンストラクター"
short-title: FormDataEvent()
slug: Web/API/FormDataEvent/FormDataEvent
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}

**`FormDataEvent()`** コンストラクターは、新しい {{domxref("FormDataEvent")}} オブジェクトインスタンスを生成します。

## 構文

```js-nolint
new FormDataEvent(type, formEventInit)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前を表します。
    大文字小文字を区別し、ブラウザーは常に `formdata` に設定します。
- `options`
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `formData`
      - : {{domxref("FormDataEvent")}} に事前に入力する {{domxref("FormData")}} オブジェクトです。
        これには、 {{domxref("FormDataEvent.formData")}} プロパティを介してアクセスします。

### 返値

新しい {{domxref("FormDataEvent")}} オブジェクトです。

## 例

```js
const fd = new FormData();
fd.append("test", "test");

const fdEv = new FormDataEvent("formdata", { formData: fd });

for (const value of fdEv.formData.values()) {
  console.log(value);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FormDataEvent")}}
