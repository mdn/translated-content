---
title: pointer
slug: Web/CSS/Reference/At-rules/@media/pointer
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

**`pointer`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、ユーザーが（マウスなどの）ポインティングデバイスを持っているか、もしそうならば、*第一の*ポインティングデバイスにどれだけの正確性があるかを調べます。

> [!NOTE]
> すべてのポインティングデバイスの正確性を調べたい場合は、代わりに [`any-pointer`](/ja/docs/Web/CSS/Reference/At-rules/@media/any-pointer) を使用してください。

## 構文

`pointer` 特性は、以下の一覧の中から一つのキーワード値で指定します。

- `none`
  - : 第一の入力機構に、ポインティングデバイスがありません。
- `coarse`
  - : 第一の入力機構にポインティングデバイスがありますが、指やタッチパネルのように、正確性が限定されています。
- `fine`
  - : 第一の入力機構にポインティングデバイスがあり、マウスのように、正確性も高いです。

## 例

次の例は、第一のポインティングデバイスの正確性によって、チェックボックスの大きさを変更しています。正確性が高い場合は小さく、低い場合は大きくなります。

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">これを見て！</label>
```

### CSS

```css
input[type="checkbox"] {
  appearance: none;
  border: solid;
  margin: 0;
}

input[type="checkbox"]:checked {
  background: gray;
}

@media (pointer: fine) {
  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    border-width: 1px;
    border-color: blue;
  }
}

@media (pointer: coarse) {
  input[type="checkbox"] {
    width: 30px;
    height: 30px;
    border-width: 2px;
    border-color: red;
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

- [`any-pointer` メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media/any-pointer)
