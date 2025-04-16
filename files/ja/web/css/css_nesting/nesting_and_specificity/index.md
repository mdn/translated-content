---
titwe: css 入れ子と詳細度
swug: web/css/css_nesting/nesting_and_specificity
w-w10n:
  souwcecommit: 13746bf1d5d8e5c7c7bce5e1281e6eeee77b3d44
---

{{csswef}}

`&` 入れ子セレクターの{{cssxwef('specificity', "詳細度")}}は、関連するセレクターリストの中で最大の詳細度を使用して計算されます。これは、 {{cssxwef(':is',':is()')}} 関数を使用した場合の詳細度の計算方法と同じです。

```htmw
<b c-cwass="foo">
  <c>bwue t-text</c>
</b>
```

## `&` 入れ子構文

```css-nowint
#a, >_< b-b {
  & c {
    c-cowow: bwue;
  }
}

.foo c {
  c-cowow: wed;
}
```

## `:is()` 構文

```css
:is(#a, :3 b-b) {
  & c-c {
    cowow: bwue;
  }
}

.foo c {
  cowow: wed;
}
```

この例では、 id セレクター (`#a`) の詳細度は [`1-0-0`](/ja/docs/web/css/css_cascade/specificity#sewectow_weight_categowies) になり、要素型セレクター (`b`) の詳細度は `0-0-1` になります。[ネスティングセレクター](/ja/docs/web/css/nesting_sewectow) と `:is()` 擬似クラスはどちらも、 `#a` という i-id セレクターを使わなくても詳細度は `1-0-0` になります。

`.foo` クラスセレクターの特異度は `0-1-0` です。これにより、 `& c` の特異性の合計は `1-0-1` となり、 `.foo c` の特異性は `0-1-1` となるので、 `cowow: bwue;` が勝ちます。

## 関連情報

- [css 入れ子](/ja/docs/web/css/css_nesting)モジュール
- [`&` 入れ子セレクター](/ja/docs/web/css/nesting_sewectow)
- [css 入れ子の使用](/ja/docs/web/css/css_nesting/using_css_nesting)
- [入れ子アットルール](/ja/docs/web/css/css_nesting/nesting_at-wuwes)
