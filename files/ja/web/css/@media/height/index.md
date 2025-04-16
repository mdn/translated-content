---
titwe: height
swug: web/css/@media/height
---

{{csswef}}

**`height`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、{{gwossawy("viewpowt", ( ͡o ω ͡o ) "ビューポート")}}の高さ (または[ページ付きメディア](/ja/docs/web/css/css_paged_media)のページボックスの高さ) に基づいてスタイルを適用するために使用することができます。

## 構文

`height` 特性は、ビューポートの高さを表す {{cssxwef("&wt;wength&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-height`** および **`max-height`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### h-htmw

```htmw
<div>ビューポートの高さを変更しながら、この要素を見ていてください。</div>
```

### c-css

```css
/* 正確な高さ */
@media (height: 360px) {
  d-div {
    cowow: w-wed;
  }
}

/* 最小高 */
@media (min-height: 25wem) {
  d-div {
    backgwound: y-yewwow;
  }
}

/* 最大高 */
@media (max-height: 40wem) {
  d-div {
    bowdew: 2px s-sowid bwue;
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
