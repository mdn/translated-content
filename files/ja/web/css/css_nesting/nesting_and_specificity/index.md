---
title: CSS 入れ子と詳細度
slug: Web/CSS/CSS_nesting/Nesting_and_specificity
l10n:
  sourceCommit: 13746bf1d5d8e5c7c7bce5e1281e6eeee77b3d44
---

{{CSSRef}}

`&` 入れ子セレクターの{{cssxref('specificity', "詳細度")}}は、関連するセレクターリストの中で最大の詳細度を使用して計算されます。これは、 {{cssxref(':is',':is()')}} 関数を使用した場合の詳細度の計算方法と同じです。

```html
<b class="foo">
  <c>Blue text</c>
</b>
```

## `&` 入れ子構文

```css-nolint
#a, b {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

## `:is()` 構文

```css
:is(#a, b) {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

この例では、 id セレクター (`#a`) の詳細度は [`1-0-0`](/ja/docs/Web/CSS/Specificity#selector_weight_categories) になり、要素型セレクター (`b`) の詳細度は `0-0-1` になります。[ネスティングセレクター](/ja/docs/Web/CSS/Nesting_selector) と `:is()` 擬似クラスはどちらも、 `#a` という id セレクターを使わなくても詳細度は `1-0-0` になります。

`.foo` クラスセレクターの特異度は `0-1-0` です。これにより、 `& c` の特異性の合計は `1-0-1` となり、 `.foo c` の特異性は `0-1-1` となるので、 `color: blue;` が勝ちます。

## 関連情報

- [CSS 入れ子](/ja/docs/Web/CSS/CSS_nesting)モジュール
- [`&` 入れ子セレクター](/ja/docs/Web/CSS/Nesting_selector)
- [CSS 入れ子の使用](/ja/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [入れ子アットルール](/ja/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
