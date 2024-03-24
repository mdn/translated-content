---
title: any-pointer
slug: Web/CSS/@media/any-pointer
---

{{CSSRef}}

**`any-pointer`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、ユーザーが (マウスなどの) *何らかの*ポインティングデバイスを持っているか、もしそうならば、どれだけの正確性を持っているかを調べます。

> **メモ:** *第一の*ポインティングデバイスの正確性を調べたい場合は、代わりに [`pointer`](/ja/docs/Web/CSS/@media/pointer) を使用してください。

## 構文

`any-pointer` 特性は、以下の一覧の中から一つのキーワード値で指定します。

- `none`
  - : 利用できるポインティングデバイスがありません。
- `coarse`
  - : 正確性が限定されたポインティングデバイスが、少なくとも一つ含まれています。
- `fine`
  - : 正確性が高いポインティングデバイスが、少なくとも一つ含まれています。

> **メモ:** 異なる性質を持つ複数の機器が利用できる場合は、複数の値に一致することがありますが、 `none` はポインティングデバイスがない場合のみ一致します。

## 例

この例は、精度の高いポインターを持つユーザーには小さなチェックボックスを、精度の低いポインターを持つユーザーには大きなチェックボックスを生成します。大きなチェックボックスは小さなチェックボックスよりも後に宣言されているので優先されます。

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">Look at me!</label>
```

### CSS

```css
input[type="checkbox"]:checked {
  background: gray;
}

@media (any-pointer: fine) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (any-pointer: coarse) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`pointer` メディア特性](/ja/docs/Web/CSS/@media/pointer)
