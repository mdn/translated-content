---
title: FormDataEvent()
slug: Web/API/FormDataEvent/FormDataEvent
---

{{APIRef("DOM")}}

**`FormDataEvent()`** コンストラクターは、新しい {{domxref("FormDataEvent")}} オブジェクトインスタンスを生成します。

## 構文

```js
new FormDataEvent(type[, formEventInit]);
```

### 値

- `type`
  - : {{domxref("DOMString")}} で、このイベントの名前を表します。
- `formEventInit` {{optional_inline}}

  - : `FormEventInit` 辞書で、以下の任意のフィールドを取ります。

    - `bubbles`: `true` または `false` の値で、イベントがバブリングするかどうかを示します。既定値は `false` です。
    - `cancelable`: `true` または `false` の値で、イベントがキャンセル可能であるかどうかを示します。既定値は `false` です。
    - `composed`: `true` または `false` の値で、イベントがシャドウルートの外側でリスナーを起動するかどうかを示します。既定値は `false` です。
    - `formData`: FormDataEvent に事前に入力する {{domxref("FormData")}} オブジェクトです。これには、 {{domxref("FormDataEvent.formData")}} プロパティを介してアクセスします。

## 例

```js
let fd = new FormData();
fd.append('test', 'test');

let fdEv = new FormDataEvent('formdata', { formData: fd });

for (let value of fdEv.formData.values()) {
  console.log(value);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FormDataEvent")}}
