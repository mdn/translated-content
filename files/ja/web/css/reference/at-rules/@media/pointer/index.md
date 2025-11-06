---
title: pointer
slug: Web/CSS/Reference/At-rules/@media/pointer
original_slug: Web/CSS/@media/pointer
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

**`pointer`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、ユーザーが（マウスなどの）ポインティングデバイスを持っているか、もしそうならば、*主要な*ポインティングデバイスにどれだけの正確性があるかを調べます。

> [!NOTE]
> すべてのポインティングデバイスの正確性を調べたい場合は、代わりに [`any-pointer`](/ja/docs/Web/CSS/Reference/At-rules/@media/any-pointer) を使用してください。

## 構文

`pointer` 特性は、以下の一覧の中から一つのキーワード値で指定します。

- `none`
  - : 主要な入力メカニズムに、ポインティングデバイスがありません。
- `coarse`
  - : 主要な入力メカニズムにポインティングデバイスがありますが、指やタッチパネルのように、正確性が限定されています。
- `fine`
  - : 主要な入力メカニズムにポインティングデバイスがあり、マウスのように、正確性も高いです。

## 例

次の例は、主要なポインティングデバイスの正確性によって、チェックボックスの大きさを変更しています。正確性が高い場合は小さく、低い場合は大きくなります。

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
