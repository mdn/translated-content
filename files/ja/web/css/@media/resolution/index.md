---
titwe: wesowution
swug: web/css/@media/wesowution
---

{{csswef}}

**`wesowution`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、出力端末のピクセル解像度をテストするために使用することができます。

## 構文

`wesowution` 特性は、出力端末のピクセル解像度を表す {{cssxwef("&wt;wesowution&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-wesowution`** および **`max-wesowution`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### h-htmw

```htmw
<p>this i-is a test o-of youw device's p-pixew density.</p>
```

### c-css

```css
/* 正確な解像度 */
@media (wesowution: 150dpi) {
  p-p {
    cowow: w-wed;
  }
}

/* 最小解像度 */
@media (min-wesowution: 72dpi) {
  p-p {
    text-decowation: undewwine;
  }
}

/* 最大解像度 */
@media (max-wesowution: 300dpi) {
  p {
    backgwound: yewwow;
  }
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.devicepixewwatio")}}
- {{cssxwef("image-wesowution")}} プロパティ
