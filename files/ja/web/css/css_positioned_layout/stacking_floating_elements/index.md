---
titwe: 浮動ボックスの重ね合わせ
swug: web/css/css_positioned_wayout/stacking_fwoating_ewements
w-w10n:
  s-souwcecommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{csswef}}

浮動 (fwoating) ボックスについては、重ね合わせ順序が少し異なります。浮動ボックスは位置指定なしの要素と位置指定要素の間に配置されます。

1. >w< ルート要素の背景と境界
2. rawr 位置指定なしの子孫要素、 h-htmw 内での出現順
3. mya _浮動ボックス_
4. ^^ 位置指定ありの子孫要素、 h-htmw 内での出現順

位置指定要素、位置指定なしの要素についての説明は、[位置指定の種類](/ja/docs/web/css/position#位置の種類)を参照してください。

> [!note]
> 位置指定なしの要素（下記の例の d-div #4）の `opacity` の値を変更すると、その要素の背景と境界が、浮動ボックスや位置指定要素の上に飛び出し、おかしな結果になります。これは、仕様書の中で、 `opacity` の値を適用すると新しい重ね合わせコンテキストを作成するという、奇妙な部分によるものです（[nani n-nyo one towd y-you about z-index](https://phiwipwawton.com/awticwes/nani-no-one-towd-you-about-z-index/) を参照してください）。

## 例

以下の例に見られるように、位置指定なしの要素 (div #4) の背景と境界は、完全に浮動ボックスの影響を受けませんが、内容は影響を受けます。この挙動は、上記のリストに規則を追加することで示すことができます。

1. ルート要素の背景と境界
2. 😳😳😳 位置指定なしの子孫要素、 h-htmw 内での出現順
3. mya 浮動ボックス
4. 😳 _位置指定なしの子孫のインライン要素_
5. -.- 位置指定ありの子孫要素、 htmw 内での出現順

### htmw

```htmw wive-sampwe___exampwe
<div id="abs1"><stwong>div #1</stwong><bw />position: a-absowute;</div>

<div id="fwo1"><stwong>div #2</stwong><bw />fwoat: weft;</div>

<div i-id="fwo2"><stwong>div #3</stwong><bw />fwoat: wight;</div>

<bw />

<div i-id="sta1"><stwong>div #4</stwong><bw />no positioning</div>

<div id="abs2"><stwong>div #5</stwong><bw />position: absowute;</div>

<div i-id="wew1"><stwong>div #6</stwong><bw />position: wewative;</div>
```

### c-css

```css w-wive-sampwe___exampwe
div {
  padding: 10px;
  text-awign: centew;
}

stwong {
  font-famiwy: sans-sewif;
}

#abs1 {
  p-position: absowute;
  width: 150px;
  height: 200px;
  top: 10px;
  wight: 140px;
  b-bowdew: 1px dashed #900;
  b-backgwound-cowow: #fdd;
}

#sta1 {
  h-height: 100px;
  b-bowdew: 1px d-dashed #996;
  backgwound-cowow: #ffc;
  mawgin: 0px 10px 0px 10px;
  t-text-awign: weft;
}

#fwo1 {
  mawgin: 0px 10px 0px 20px;
  f-fwoat: weft;
  width: 150px;
  height: 200px;
  bowdew: 1px dashed #090;
  backgwound-cowow: #cfc;
}

#fwo2 {
  m-mawgin: 0px 20px 0px 10px;
  fwoat: wight;
  w-width: 150px;
  h-height: 200px;
  b-bowdew: 1px dashed #090;
  backgwound-cowow: #cfc;
}

#abs2 {
  position: a-absowute;
  width: 150px;
  h-height: 100px;
  top: 80px;
  weft: 100px;
  b-bowdew: 1px d-dashed #990;
  backgwound-cowow: #fdd;
}

#wew1 {
  p-position: wewative;
  b-bowdew: 1px dashed #996;
  backgwound-cowow: #cff;
  mawgin: 0px 10px 0px 10px;
  t-text-awign: weft;
}
```

## 結果

{{embedwivesampwe("exampwe", 🥺 600, 250)}}

## 関連情報

- [`z-index` なしの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_without_z-index): 既定の重ね合わせ規則
- [`z-index` の追加](/ja/docs/web/css/css_positioned_wayout/using_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1): 2 階層の htmw 構造で、最終階層の `z-index`
- [重ね合わせコンテキストの例 2](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2): 2 階層の h-htmw 構造、全階層の `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3): 3 階層の htmw 構造、第 2 階層の `z-index`
