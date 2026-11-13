---
title: CSS 入れ子と詳細度
short-title: 入れ子と詳細度
slug: Web/CSS/Guides/Nesting/Nesting_and_specificity
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

`&` 入れ子セレクターの[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)は、関連するセレクターリストの中で最大の詳細度を使用して計算されます。これは、 {{cssxref(':is',':is()')}} 関数を使用した場合の詳細度の計算方法と同じです。

```html
<b class="foo">
  <i>青いテキスト</i>
</b>
```

## `&` 入れ子構文

```css-nolint
#a, b {
  & i {
    color: blue;
  }
}

.foo i {
  color: red;
}
```

## `:is()` 構文

```css
:is(#a, b) {
  & i {
    color: blue;
  }
}

.foo i {
  color: red;
}
```

この例では、 id セレクター (`#a`) の詳細度は [`1-0-0`](/ja/docs/Web/CSS/Guides/Cascade/Specificity#セレクターの重み分類) になり、要素型セレクター (`b`) の詳細度は `0-0-1` になります。[入れ子セレクター](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector) と `:is()` 擬似クラスはどちらも、 `#a` という id セレクターを使わなくても詳細度は `1-0-0` になります。

`.foo` クラスセレクターの詳細度は `0-1-0` です。これにより、 `& i` の詳細度の合計は `1-0-1` となり、 `.foo i` の詳細度は `0-1-1` となるので、 `color: blue;` が勝ちます。

## 関連情報

- [CSS 入れ子](/ja/docs/Web/CSS/Guides/Nesting)モジュール
- [`&` 入れ子セレクター](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS 入れ子の使用](/ja/docs/Web/CSS/Guides/Nesting/Using)
- [入れ子アットルール](/ja/docs/Web/CSS/Guides/Nesting/At-rules)
