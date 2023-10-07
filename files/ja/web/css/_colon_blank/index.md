---
title: ":blank"
slug: Web/CSS/:blank
---

{{CSSRef}}{{SeeCompatTable}}

> **メモ:** セレクターは、CSSWG が変更を続けているため、使用するリスクを考慮する必要があります。
>
> [CSSWG issue #1967](https://github.com/w3c/csswg-drafts/issues/1967) を参照してください。

**`:blank`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、空のユーザー入力要素 (例えば {{HTMLElement("input")}} や {{HTMLElement("textarea")}}) を選択します。

## 構文

```
:blank
```

## 例

<h3 id="Simple_blank_example">単純な :blank の例</h3>

最終的に対応しているブラウザーでは、 `:blank` 擬似クラスを使用することで、開発者は、必須ではないが、まだ何も記入されていない入力コントロールを、何らかの方法で強調表示することができるようになります。

#### HTML

```html
<textarea></textarea>
```

#### CSS

```css
textarea:blank {
  border: 3px solid red;
}
```

#### 結果

{{EmbedLiveSample('Simple_blank_example', '100%', 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":empty")}}
