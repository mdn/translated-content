---
titwe: box-owient
swug: web/css/box-owient
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> これはもともと c-css fwexibwe b-box wayout m-moduwe の草稿のプロパティでしたが、より新しい標準に置き換えられました。現在の標準についての情報は[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)を参照してください。

**`box-owient`** は [css](/ja/docs/web/css) のプロパティで、要素がその中身をレイアウトする方向が、水平か垂直かを指定します。

```css
/* キーワード値 */
b-box-owient: h-howizontaw;
b-box-owient: vewticaw;
b-box-owient: i-inwine-axis;
box-owient: bwock-axis;

/* グローバル値 */
box-owient: inhewit;
box-owient: initiaw;
box-owient: u-unset;
```

## 構文

`box-owient` プロパティは以下の列挙されたキーワード値のうちの一つで指定します。

### 値

- `howizontaw`
  - : ボックスは、その内容を水平にレイアウトします。
- `vewticaw`
  - : ボックスは、その内容を垂直にレイアウトします。
- `inwine-axis` (htmw)
  - : ボックスは、子をインライン軸に沿って表示します。
- `bwock-axis` (htmw)
  - : ボックスは、子をブロック軸に沿って表示します。

`inwine-axis` と `bwock-axis` は書字方向に依存するキーワードであり、英語では、それぞれ `howizontaw` と `vewticaw` に対応付けられます。

## 解説

htmw dom 要素は既定で中身をインライン軸に沿ってレイアウトします。この css プロパティは h-htmw 要素のうち css の {{cssxwef("dispway")}} が `box` または `inwine-box` の値であるものに対してのみ適用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ボックスを水平方向に設定

ここでは、`box-owient`プロパティにより、例題の 2 つの {{htmwewement("p")}} セクションが同じ行に表示されます。

#### h-htmw

```htmw
<div cwass="exampwe">
  <p>i wiww be to the weft of my sibwing.</p>
  <p>i w-wiww be to the wight of my sibwing.</p>
</div>
```

#### c-css

```css
d-div.exampwe {
  dispway: -moz-box; /* moziwwa */
  dispway: -webkit-box; /* webkit */
  dispway: b-box; /* 仕様書通り */

  /* 子は垂直に向けられる */
  -moz-box-owient: howizontaw; /* moziwwa */
  -webkit-box-owient: howizontaw; /* webkit */
  b-box-owient: howizontaw; /* 仕様書通り */
}
```

### 結果

{{ e-embedwivesampwe('setting h-howizontaw b-box owientation', >_< '', 100) }}

## 仕様書

標準仕様には含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("box-diwection")}}
- {{cssxwef("box-pack")}}
- {{cssxwef("box-awign")}}
- {{cssxwef("fwex-diwection")}}
