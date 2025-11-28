---
title: :any-link
slug: Web/CSS/Reference/Selectors/:any-link
original_slug: Web/CSS/:any-link
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`:any-link`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、訪問の有無とは独立したソースアンカーとして振る舞う要素を表します。言い換えれば、 `href` 属性を持つすべての {{HTMLElement("a")}} または {{HTMLElement("area")}} 要素を選択します。つまり、 {{cssxref(":link")}} または {{cssxref(":visited")}} に一致するすべての要素を選択します。

{{InteractiveExample("CSS デモ: :any-link", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:any-link {
  color: forestgreen;
  text-decoration-color: hotpink;
}
```

```html interactive-example
<p>訪問済みの可能性のあるページ:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org">MDN Web Docs</a>
  </li>
  <li>
    <a href="https://www.youtube.com/YouTube">Google</a>
  </li>
</ul>
<p>履歴にない可能性が高いページ:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/missing-3">ランダム MDN ページ</a>
  </li>
  <li>
    <a href="https://example.com/missing-3">ランダム Example ページ</a>
  </li>
</ul>
```

## 構文

```css
:any-link {
  /* ... */
}
```

## 例

### HTML

```html
<a href="https://example.com">外部リンク</a><br />
<a href="#">内部ターゲットリンク</a><br />
<a>プレースホルダーリンク（スタイルは適用されません）</a>
```

### CSS

```css
a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* WebKit ブラウザー向け */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ハイパーリンクの作成](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links)
- 一致する HTML 要素: [`<a>`](/ja/docs/Web/HTML/Reference/Elements/a) および [`<area>`](/ja/docs/Web/HTML/Reference/Elements/area) に [`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) 属性が付いたもの
- 関連する CSS セレクター:
  - [`:visited`](/ja/docs/Web/CSS/Reference/Selectors/:visited)
  - [`:link`](/ja/docs/Web/CSS/Reference/Selectors/:link)
