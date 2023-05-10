---
title: "Attr: value プロパティ"
slug: Web/API/Attr/value
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

**`value`** は {{domxref("Attr")}} インターフェイスのプロパティで、この属性の値が入ります。

## 値

文字列で、この属性の値を表します。

## 例

次の例では、属性 `test` の現在の値を表示しています。ボタンをクリックすると別の値に変更され、再度読み込むと表示値が更新されます。

### HTML コンテンツ

```html
<label test="初期値"></label>

<button>クリックすると、test に <code>"新しい値"</code> を設定します。…</button>

<p>
  現在の <code>test</code> 属性の値:
  <output id="result">なし。</output>
</p>
```

### JavaScript コンテンツ

```js
const element = document.querySelector("label");
const button = document.querySelector("button");
const result = document.querySelector("#result");

const attribute = element.attributes[0];
result.value = attribute.value;

button.addEventListener("click", () => {
  attribute.value = "新しい値";
  result.value = attribute.value;
});
```

### 結果

{{ EmbedLiveSample('Example','100%',100) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
