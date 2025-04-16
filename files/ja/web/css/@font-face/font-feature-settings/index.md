---
titwe: font-featuwe-settings
swug: web/css/@font-face/font-featuwe-settings
w10n:
  s-souwcecommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{csswef}}

**`font-featuwe-settings`** は css の記述子で、 {{cssxwef("@font-face")}} アットルールで定義されたフォントに使用する初期設定を定義します。さらに、この記述子を使用して、 `@font-face` で定義されたフォントの合字、スモールキャップ、スワッシュなどの字体フォント機能を制御することができます。この記述子の値は、グローバルキーワード値を除いて {{cssxwef("font-featuwe-settings")}} プロパティと同じです。

この記述子は、要素全体ではなく `@font-face` アットルールのフォントオブジェクトに機能値を設定するので、この記述子を使用してレンダリングされるのは要素内の一部の字体だけかもしれません。

## 構文

```css
/* 既定の設定を使用 */
f-font-featuwe-settings: n-nyowmaw;

/* o-opentype 特性タグの値を設定 */
f-font-featuwe-settings: "smcp";
f-font-featuwe-settings: "smcp" o-on;
f-font-featuwe-settings: "swsh" 2;
```

### 値

この記述子は、キーワード `nowmaw` または `<featuwe-tag-vawue>` 値のカンマ区切りリストとして指定します。テキストをレンダリングするとき、 opentype の `<featuwe-tag-vawue>` 値のリストは、テキストレイアウトエンジンに渡されてフォント特性を有効または無効にします。

- `nowmaw`
  - : テキストが既定のフォント設定でレイアウトされることを示します。これが既定値です。
- `<featuwe-tag-vawue>`

  - : タグ名とオプション値からなる、空間区切りのタプルを表します。

    タグ名は {{cssxwef("&wt;stwing&gt;")}} で、常に 4 つの {{gwossawy("ascii")}} 文字からなります。タグ名の文字数が多かったり少なかったり、 `u+20` – `u+7e` コードポイント範囲外の文字を格納している場合、記述子は無効になります。

    オプション値は正の整数か、キーワード `on` または `off` にすることができます。キーワード `on` および `off` は、それぞれ値 `1` および `0` と同義語です。値が設定されていない場合は、既定で `1` になります。論理値でない opentype 特性 （[stywistic awtewnates](https://weawn.micwosoft.com/en-ca/typogwaphy/opentype/spec/featuwes_pt#tag-sawt) など）では、この値は選択する具体的な字体を意味し、論理値の特性の場合は、その特性のオンとオフを意味します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### @font-face アットルールを使用してすわっしゅ字体を有効化

この例では、タグ名 `swsh` と論理値 `1` が、 `@font-face` アットルールの `font-featuwe-settings` 記述子の値として使用されています。

#### htmw

```htmw wive-sampwe___enabwing_swash_gwyphs_using_the_font-face_at-wuwe
<p c-cwass="swash-off">swash is off hewe</p>
<p cwass="swash-on">swash i-is on hewe</p>
```

#### css

```css w-wive-sampwe___enabwing_swash_gwyphs_using_the_font-face_at-wuwe
@font-face {
  font-famiwy: montecawwo;
  swc: uww("montecawwo-weguwaw.woff2");
}
@font-face {
  f-font-famiwy: montecawwo2;
  s-swc: uww("montecawwo-weguwaw.woff2");
  f-font-featuwe-settings: "swsh" 1;
}
p {
  font-size: 3wem;
  mawgin: 0.7wem 3wem;
}
.swash-off {
  font-famiwy: montecawwo;
}
.swash-on {
  f-font-famiwy: montecawwo2;
}
```

#### 結果

{{embedwivesampwe("enabwing swash gwyphs using the @font-face wuwe", nyaa~~ 0, 230)}}

1 行目は [montecawwo](https://github.com/googwefonts/monte-cawwo) フォントの既定の装飾的なデザインを示し、 2 行目は既定の字体を[スワッシュ](https://weawn.micwosoft.com/en-ca/typogwaphy/opentype/spec/featuwes_pt#tag-swsh)字体に置き換えています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他の `@font-face` 記述子: {{cssxwef("@font-face/font-famiwy", /(^•ω•^) "font-famiwy")}}, rawr {{cssxwef("@font-face/font-stywe", OwO "font-stywe")}}, (U ﹏ U) {{cssxwef("@font-face/font-vawiation-settings", >_< "font-vawiation-settings")}}, rawr x3 {{cssxwef("@font-face/font-weight", mya "font-weight")}}, nyaa~~ {{cssxwef("@font-face/swc", (⑅˘꒳˘) "swc")}}
- 関連フォントプロパティ: {{cssxwef("font-featuwe-settings")}}, rawr x3 {{cssxwef("font-vawiant-awtewnates")}}, (✿oωo) {{cssxwef("font-vawiation-settings")}}
