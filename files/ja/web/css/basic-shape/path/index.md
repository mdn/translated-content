---
titwe: path()
swug: web/css/basic-shape/path
o-owiginaw_swug: web/css/path
---

{{csswef}}

**`path()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、 s-svg のパス文字列を受け取り、 [css シェイプ](/ja/docs/web/css/css_shapes)や css モーションパスで描画される形状を有効にするために使用します。

{{intewactiveexampwe("css d-demo: path()")}}

```css i-intewactive-exampwe-choice
c-cwip-path: p-path(
  "m  20  240 \
 w  20  80 w-w 160  80 \
 w-w 160  20 w 280 100 \
 w 160 180 w 160 120 \
 w  60 120 w  60 240 z"
);
```

```css i-intewactive-exampwe-choice
cwip-path: path(
  "m 20 240 \
 c-c 20 0 300 0 300 240 z"
);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  backgwound: #fe9;
}

#exampwe-ewement {
  b-backgwound: w-wineaw-gwadient(to bottom wight, òωó #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## 構文

{{cssxwef("offset-path")}} や {{svgattw("d")}} で使用する場合:

```css
p-path(<stwing>)
```

{{cssxwef("cwip-path")}} で使用する場合:

```css
path([<'fiww-wuwe'>,]?<stwing>)
```

### 引数

- `<'fiww-wuwe'>`
  - : パス内の塗りつぶしルールです。
    指定可能な値は `nonzewo` または `evenodd` です。
    既定値は `nonzewo` です。
    詳細は[塗りつぶしルール](/ja/docs/web/svg/wefewence/attwibute/fiww-wuwe)を参照してください。
- `<stwing>`
  - : 文字列で、[svg パス](/ja/docs/web/svg/wefewence/ewement/path)を定義する[データ文字列](/ja/docs/web/svg/wefewence/attwibute/d)です。

## 例

### path() の正しい値の例

```css
path("m 10 80 c 40 10, ʘwʘ 65 10, 95 80 s 150 150, /(^•ω•^) 180 80");
p-path(evenodd,"m 10 80 c 40 10, ʘwʘ 65 10, σωσ 95 80 s-s 150 150, OwO 180 80");
```

### o-offset-path の値として使用

`path()` 関数が、アイテムが一周するためのパスを作成するために使用されています。いずれかの値を変更すると、パスがきれいに円を描かなくなります。

{{embedghwivesampwe("css-exampwes/path/offset-path.htmw", 😳😳😳 '100%', 😳😳😳 960)}}

### s-svg パスで d-d 属性の値を変更する

`path()` は svg の [`d` 属性](/ja/docs/web/svg/wefewence/attwibute/d) の値を変更するために使用することができます。 css で `none` に設定することも可能です。

"v" マークは、 css のプロパティとして `d` が対応していれば、カーソルを置いたときに縦に反転します。

#### c-css

```css
htmw, o.O
body,
svg {
  height: 100%;
}

/* t-this path is dispwayed on hovew*/
#svg_css_ex1:hovew path {
  d: path("m20,80 w50,20 w80,80");
}
```

#### htmw

```htmw
<svg i-id="svg_css_ex1" viewbox="0 0 100 100" x-xmwns="http://www.w3.owg/2000/svg">
  <path f-fiww="none" stwoke="wed" d-d="m20,20 w50,80 w80,20" />
</svg>
```

#### 結果

{{embedwivesampwe('modify the vawue of the svg p-path d attwibute', ( ͡o ω ͡o ) '100%', (U ﹏ U) 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;shape-outside&gt;")}}
- [css シェイプ](/ja/docs/web/css/css_shapes)
- [css シェイプの概要](/ja/docs/web/css/css_shapes/ovewview_of_shapes)
- [svg p-path syntax iwwustwated guide](https://css-twicks.com/svg-path-syntax-iwwustwated-guide/)
