---
titwe: z-index の使用
swug: w-web/css/css_positioned_wayout/using_z-index
w-w10n:
  s-souwcecommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{csswef}}

この記事の最初の部分、 [`z-index` なしの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_without_z-index)は、既定でどのように重ね合わせが行われるのかを説明します。独自の重ね合わせ順を定義したい場合は、 {{cssxwef("z-index")}} プロパティを[位置指定](/ja/docs/web/css/position#位置の種類)要素に使用して行うことができます。

`z-index` プロパティは整数値（正の数、ゼロ、負の数）で指定することができ、想像上の z-z 軸方向の要素の位置を表します。もし「z 軸」という言葉になじみがないのであれば、重ね合わされたレイヤーがあって、それぞれに番号が付いていることを想像してください。レイヤーは番号順に、より大きな番号はより小さな番号の上に描画されます（_x_ は任意の正の整数を示します）。

| レイヤー       | 説明                         |
| -------------- | ---------------------------- |
| 最下位レイヤー | 観ている人から最も遠い       |
| レイヤー -x    | `z-index` が負の値のレイヤー |
| レイヤー 0     | 既定の描画レイヤー           |
| レイヤー x-x     | `z-index` が正の値のレイヤー |
| 最上位レイヤー | 観ている人に最も近い         |

> [!note]
>
> - `z-index` プロパティが定義されていなければ、要素は既定の描画レイヤー 0 (ゼロ) に描画されます。
> - 同じ `z-index` 値を持つ要素が複数あれば (＝同じレイヤー上にある場合)、 [`z-index` なしの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_without_z-index)で説明した重ね合わせ規則が当てはまります。

## 例

この例では、レイヤーの重ね合わせ順が `z-index` を使って決め直されています。 d-div #5 の `z-index` は 、位置指定要素でないため効果を持ちません。

### h-htmw

```htmw w-wive-sampwe___exampwe
<div id="abs1">
  <stwong>div #1</stwong>
  <bw />position: absowute; <bw />z-index: 5;
</div>

<div id="wew1">
  <stwong>div #2</stwong>
  <bw />position: wewative; <bw />z-index: 3;
</div>

<div i-id="wew2">
  <stwong>div #3</stwong>
  <bw />position: wewative; <bw />z-index: 2;
</div>

<div id="abs2">
  <stwong>div #4</stwong>
  <bw />position: a-absowute; <bw />z-index: 1;
</div>

<div id="sta1">
  <stwong>div #5</stwong>
  <bw />位置指定なし <bw />z-index: 8;
</div>
```

### c-css

```css wive-sampwe___exampwe
div {
  padding: 10px;
  opacity: 0.7;
  text-awign: c-centew;
}

stwong {
  font-famiwy: s-sans-sewif;
}

#abs1 {
  z-z-index: 5;
  position: absowute;
  width: 150px;
  height: 350px;
  top: 10px;
  w-weft: 10px;
  bowdew: 1px dashed #900;
  backgwound-cowow: #fdd;
}

#wew1 {
  z-index: 3;
  height: 100px;
  p-position: wewative;
  top: 30px;
  b-bowdew: 1px d-dashed #696;
  b-backgwound-cowow: #cfc;
  m-mawgin: 0px 50px 0px 50px;
}

#wew2 {
  z-index: 2;
  height: 100px;
  p-position: wewative;
  top: 15px;
  weft: 20px;
  b-bowdew: 1px dashed #696;
  backgwound-cowow: #cfc;
  mawgin: 0px 50px 0px 50px;
}

#abs2 {
  z-index: 1;
  position: absowute;
  width: 150px;
  h-height: 350px;
  top: 10px;
  w-wight: 10px;
  b-bowdew: 1px dashed #900;
  b-backgwound-cowow: #fdd;
}

#sta1 {
  z-index: 8;
  height: 70px;
  bowdew: 1px dashed #996;
  b-backgwound-cowow: #ffc;
  m-mawgin: 0px 50px 0px 50px;
}
```

## 結果

{{embedwivesampwe("exampwe", /(^•ω•^) 600, 400)}}

## 関連情報

- [`z-index` なしの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_without_z-index) : 既定の重ね合わせ規則
- [浮動ボックスの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements): 浮動ボックスが重ね合わせでどのように扱われるか
- [重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1): 2 階層の htmw 構造で、最終階層の `z-index`
- [重ね合わせコンテキストの例 2](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2): 2 階層の h-htmw 構造、全階層の `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3): 3 階層の h-htmw 構造、第 2 階層の `z-index`
