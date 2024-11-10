---
title: text-decoration-skip-ink
slug: Web/CSS/text-decoration-skip-ink
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

**`text-decoration-skip-ink`** は [CSS](/ja/docs/Web/CSS) のプロパティで、上線や下線が文字のアセンダーやディセンダーを通過するときにどのように引くのかを指定します。

{{EmbedInteractiveExample("pages/css/text-decoration-skip-ink.html")}}

`text-decoration-skip-ink` は {{cssxref("text-decoration")}} 一括指定の一部ではありません。

## 構文

```css
/* 単一キーワード */
text-decoration-skip-ink: none;
text-decoration-skip-ink: auto;
text-decoration-skip-ink: all;

/* グローバルキーワード */
text-decoration-skip-ink: inherit;
text-decoration-skip-ink: initial;
text-decoration-skip-ink: revert;
text-decoration-skip-ink: revert-layer;
text-decoration-skip-ink: unset;
```

### 値

- `none`
  - : 下線と上線は、アセンダーとディセンダーの部分を含め、テキストコンテンツの全体に渡って引かれます。
- `auto`
  - : 既定値です。 — ブラウザーは、下線と上線が文字に触れたり近づいたりしないよう、中断を行う*可能性があります*。つまり、線が文字を横切ろうとするところで中断されます。
- `all`

  - : ブラウザーは、下線や上線が文字に触れたり近づいたりしないように*必ず*中断を行います。これは、 `auto` の動作が中断を発生させない可能性がある中国語、日本語、韓国語の特定のフォントで有用です。

    !["text-decoration-skip-ink" の例](decoration-skip-ink.png)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<p>You should go on a quest for a cup of coffee.</p>
<p class="no-skip-ink">Or maybe you'd prefer some tea?</p>
<p>この文は、 text-decoration-skip-ink: auto の使用例を示しています。</p>
<p class="skip-ink-all">
  この文は、 text-decoration-skip-ink: all の使用例を示しています。
</p>
```

### CSS

```css
p {
  font-size: 1.5em;
  text-decoration: underline blue;
  text-decoration-skip-ink: auto; /* this is the default anyway */
}

.no-skip-ink {
  text-decoration-skip-ink: none;
}

.skip-ink-all {
  text-decoration-skip-ink: all;
}
```

### 結果

{{EmbedLiveSample("例", "100%", 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('text-decoration')}}
- {{cssxref('text-decoration-skip')}}
