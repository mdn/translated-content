---
title: :nth-of-type()
slug: Web/CSS/Reference/Selectors/:nth-of-type
original_slug: Web/CSS/:nth-of-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:nth-of-type()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、同じ型（タグ名）の兄弟要素の中で、その位置に基づいて要素を照合します。

{{InteractiveExample("CSS デモ: :nth-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:nth-of-type(even) {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>野菜:</dt>
  <dd>1. トマト</dd>
  <dd>2. きゅうり</dd>
  <dd>3. キノコ</dd>
  <dt>果物:</dt>
  <dd>4. リンゴ</dd>
  <dd>5. マンゴー</dd>
  <dd>6. なし</dd>
  <dd>7. オレンジ</dd>
</dl>
```

## 構文

```css-nolint
:nth-of-type(<An+B> | even | odd) {
  /* ... */
}
```

### 引数

`:nth-of-type()` 擬似クラスは、単一の引数を取り、照合する要素のパターンを表します。

構文の詳しい説明は {{Cssxref(":nth-child")}} を参照してください。

## 例

### 基本的な例

#### HTML

```html
<div>
  <div>この要素は数えられません。</div>
  <p>1 つ目の段落です。</p>
  <p class="fancy">2 つ目の段落です。</p>
  <div>この要素は数えられません。</div>
  <p class="fancy">3 つ目の段落です。</p>
  <p>4 つ目の段落です。</p>
</div>
```

#### CSS

```css
/* 奇数の段落 */
p:nth-of-type(2n + 1) {
  color: red;
}

/* 偶数の段落 */
p:nth-of-type(2n) {
  color: blue;
}

/* 最初の段落 */
p:nth-of-type(1) {
  font-weight: bold;
}

/* これは 2n+1 であり、かつ fancy のクラスを持つ要素に一致するので、第 3 段落に一致します。
2 番目の段落は fancy というクラスを持っていますが、 :nth-of-type(2n+1) ではないので一致しません。 */
p.fancy:nth-of-type(2n + 1) {
  text-decoration: underline;
}
```

#### 結果

{{EmbedLiveSample('基本的な例', 250, 250)}}

> [!NOTE]
> このセレクターを使用して、同じクラスの n 番目のものを選択する方法はありません。このセレクターは、一致するリストを作成する際に型だけを見ます。しかし、上の例のように `:nth-of-type` の位置**および**クラスに基づいて要素に CSS を適用することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
