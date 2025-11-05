---
title: :nth-last-of-type()
slug: Web/CSS/Reference/Selectors/:nth-last-of-type
original_slug: Web/CSS/:nth-last-of-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:nth-last-of-type()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、兄弟要素のグループの中で指定された型の要素を、最後から数えた位置に基づいて選択します。

{{InteractiveExample("CSS デモ: :nth-last-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:nth-last-of-type(3n) {
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
:nth-last-of-type(<An+B> | even | odd) {
  /* ... */
}
```

### 引数

擬似クラス `:nth-last-of-type()` は、要素の照合パターンを表す単一の引数で指定します。

構文の詳しい説明は {{Cssxref(":nth-last-child")}} を参照してください。

## 例

### HTML

```html
<div>
  <span>これは span です。</span>
  <span>これも span です。</span>
  <em>これは em です。</em>
  <span>おお、この span はライム色になりました！</span>
  <del>これは取り消し線です。</del>
  <span>これは最後の span です。</span>
</div>
```

### CSS

```css
span:nth-last-of-type(2) {
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample('例')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":nth-last-child")}}, {{Cssxref(":nth-of-type")}}
