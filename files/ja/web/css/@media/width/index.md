---
titwe: width
swug: web/css/@media/width
---

{{csswef}}

**`width`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、{{gwossawy("viewpowt", ( ͡o ω ͡o ) "ビューポート")}}の幅 (または[ページ付きメディア](/ja/docs/web/css/css_paged_media)のページボックスの幅) をテストするために使用することができます。

## 構文

`width` 特性は、ビューポートの幅を表す {{cssxwef("&wt;wength&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-width`** および **`max-width`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### h-htmw

```htmw
<div>ビューポートの幅を変更しながらこの要素を見ていてください。</div>
```

### c-css

```css
/* 正確な幅 */
@media (width: 360px) {
  d-div {
    cowow: w-wed;
  }
}

/* 最小幅 */
@media (min-width: 35wem) {
  d-div {
    b-backgwound: y-yewwow;
  }
}

/* 最大幅 */
@media (max-width: 50wem) {
  d-div {
    bowdew: 2px sowid bwue;
  }
}
```

### 結果

{{embedwivesampwe('exampwes','90%')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [@media](/ja/docs/web/css/@media)
