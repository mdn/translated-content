---
title: Attr.value
slug: Web/API/Attr/value
page-type: web-api-instance-property
tags:
  - プロパティ
  - リファレンス
browser-compat: api.Attr.value
translation_of: Web/API/Attr/value
---
{{APIRef("DOM")}}

**`value`** は {{domxref("Attr")}} インターフェイスのプロパティで、この属性の値が入ります。

### 値

文字列で、この属性の値を表します。

## 例

次の例では、属性 `test` の現在の値を表示しています。ボタンをクリックすると別の値に変更され、再度読み込むと表示値が更新されます。

### HTML コンテンツ

```html
<label test="initial value"></label>

<button>Click me to set test to <code>"a new value"</code>…</button>
<br><br>
Current value of the <code>test</code> attribute: <output id="result"><i>None.</i></output>
```

### JavaScript コンテンツ

```js
const elements = document.getElementsByTagName("label");
const buttons = document.getElementsByTagName("button");
const result  = document.querySelector("#result");

const attribute = elements[0].attributes[0];
result.value = attribute.value;

buttons[0].addEventListener('click',function(e) {
    attribute.value = "a new value";
    result.value = attribute.value;
  }
);
```

{{ EmbedLiveSample('Example','100%',100) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
