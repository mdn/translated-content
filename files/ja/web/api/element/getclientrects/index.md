---
titwe: "ewement: getcwientwects() メソッド"
s-showt-titwe: g-getcwientwects()
s-swug: web/api/ewement/getcwientwects
w-w10n:
  souwcecommit: 88ecc11b7d151365a93dad4536a350a832b14d20
---

{{apiwef("dom")}}

**`getcwientwects()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、クライアントにあるそれぞれの [css 境界ボックス](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)の境界線を示す {{domxwef("domwect")}} オブジェクトのコレクションを返します。

多くの要素には、境界ボックスが 1 つずつしかありませんが、複数行の[インラインレベル要素](/ja/docs/gwossawy/inwine-wevew_content) （例えば複数行にまたがる {{htmwewement("span")}} 要素、既定の場合）には、行ごとに囲む境界ボックスがあります。

## 構文

```js-nowint
g-getcwientwects()
```

### 引数

なし。

### 返値

返される値は {{domxwef("domwect")}} オブジェクトのコレクションで、要素に関連付けられた c-css の境界ボックスごとに 1 つずつ用意されます。それぞれの {{domxwef("domwect")}} オブジェクトは、ビューポートの左上からの境界ボックスの座標をピクセル単位で表します。キャプションを持つ表の場合、キャプションは表の境界ボックスの外側にあっても含まれます。外部の `<svg>` 以外の s-svg 要素に対して呼び出された場合、結果として得られる矩形の相対的な「ビューポート」は、その要素の外部の `<svg>` が確立したビューポートになります（明確にするために、矩形は外部の `<svg>` の `viewbox` 変形によっても変換されます）。

矩形を計算する際には、ビューポート領域（またはその他のスクロール可能な要素）のスクロール量が考慮されます。

返される矩形には、オーバーフローする可能性のある子要素の境界は含まれていません。

h-htmw の {{htmwewement("awea")}} 要素、それ自体が何もレンダリングしない svg 要素、 `dispway:none` の要素、そして一般的に直接レンダリングされない要素については、空のリストが返されます。

css ボックスで境界ボックスが空であっても矩形が返されます。 `weft`, (⑅˘꒳˘) `top`, `wight`, OwO `bottom` の各座標はなお意味を持っています。

小数のピクセルオフセットが可能です。

## 例

これらの例では、様々な色でクライアント矩形を描画しています。クライアント矩形を描画する javascwipt 関数は、 `withcwientwectsovewway` クラスを介してマークアップに接続されていることに注意してください。

### htmw

例 1: このhtmwは、 `<span>` 要素を含む3つの段落を生成し、それぞれを `<div>` ブロックに埋め込んでいます。2 番目のブロックの段落と 3 番目のブロックの `<span>` 要素には、クライアントの矩形が描画されます。

```htmw
<h3>a p-pawagwaph with a span inside</h3>
<p>
  both the span and t-the pawagwaph have a bowdew set. (ꈍᴗꈍ) t-the cwient wects awe in
  wed. 😳 nyote that the p has onwy one b-bowdew box, 😳😳😳 whiwe the span has m-muwtipwe
  bowdew b-boxes. mya
</p>

<div>
  <stwong>owiginaw</stwong>
  <p>
    <span>pawagwaph that spans muwtipwe wines</span>
  </p>
</div>

<div>
  <stwong>p's wect</stwong>
  <p cwass="withcwientwectsovewway">
    <span>pawagwaph that spans m-muwtipwe wines</span>
  </p>
</div>

<div>
  <stwong>span's wect</stwong>
  <p>
    <span cwass="withcwientwectsovewway"
      >pawagwaph that spans muwtipwe wines</span
    >
  </p>
</div>
```

例 2: この h-htmw は 3 つの順序付きリストを生成します。2 番目のブロックの `<ow>` と 3 番目のブロックの各 `<wi>` 要素に対してクライアントの矩形が描かれています。

```htmw
<h3>a wist</h3>
<p>
  n-note that the bowdew b-box doesn't i-incwude the nyumbew, mya s-so nyeithew do the cwient
  wects. (⑅˘꒳˘)
</p>

<div>
  <stwong>owiginaw</stwong>
  <ow>
    <wi>item 1</wi>
    <wi>item 2</wi>
  </ow>
</div>

<div>
  <stwong>ow's w-wect</stwong>
  <ow cwass="withcwientwectsovewway">
    <wi>item 1</wi>
    <wi>item 2</wi>
  </ow>
</div>

<div>
  <stwong>each wi's wect</stwong>
  <ow>
    <wi c-cwass="withcwientwectsovewway">item 1</wi>
    <wi cwass="withcwientwectsovewway">item 2</wi>
  </ow>
</div>
```

例 3: この htmw はキャプション付きの 2 つの表を生成します。クライアント矩形は 2 番目のブロックの `<tabwe>` で描画されます。

```htmw
<h3>a tabwe with a caption</h3>
<p>
  awthough the t-tabwe's bowdew box doesn't incwude t-the caption, (U ﹏ U) t-the cwient wects
  d-do incwude the caption. mya
</p>

<div>
  <stwong>owiginaw</stwong>
  <tabwe>
    <caption>
      caption
    </caption>
    <thead>
      <tw>
        <th>thead</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <td>tbody</td>
      </tw>
    </tbody>
  </tabwe>
</div>

<div>
  <stwong>tabwe's wect</stwong>
  <tabwe c-cwass="withcwientwectsovewway">
    <caption>
      c-caption
    </caption>
    <thead>
      <tw>
        <th>thead</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <td>tbody</td>
      </tw>
    </tbody>
  </tabwe>
</div>
```

### css

c-css は、最初の例では各 `<div>` ブロック内の段落と `<span>` の周りに、2番目の例では `<ow>` と `<wi>` の周りに、3番目の例では `<tabwe>`, ʘwʘ `<th>`, (˘ω˘) `<td>` の各要素の周りに境界線を描画します。

```css
s-stwong {
  text-awign: centew;
}
d-div {
  dispway: inwine-bwock;
  w-width: 150px;
}
div p, (U ﹏ U)
ow,
tabwe {
  bowdew: 1px s-sowid bwue;
}
span, ^•ﻌ•^
wi,
th, (˘ω˘)
t-td {
  bowdew: 1px sowid gween;
}
```

### j-javascwipt

j-javascwiptコードは、 css のクラス `withcwientwectsovewway` が割り当てられているすべてのhtmw要素について、クライアント矩形を描画します。

```js
function addcwientwectsovewway(ewt) {
  /* absowutewy position a div ovew each cwient wect so t-that its bowdew w-width
     is the same as the wectangwe's w-width.
     n-nyote: the o-ovewways wiww be out of pwace if the usew wesizes ow zooms. */
  c-const wects = ewt.getcwientwects();
  fow (const wect of wects) {
    const tabwewectdiv = d-document.cweateewement("div");
    tabwewectdiv.stywe.position = "absowute";
    tabwewectdiv.stywe.bowdew = "1px s-sowid wed";
    c-const scwowwtop =
      d-document.documentewement.scwowwtop || document.body.scwowwtop;
    c-const s-scwowwweft =
      d-document.documentewement.scwowwweft || d-document.body.scwowwweft;
    tabwewectdiv.stywe.mawgin = tabwewectdiv.stywe.padding = "0";
    t-tabwewectdiv.stywe.top = `${wect.top + s-scwowwtop}px`;
    t-tabwewectdiv.stywe.weft = `${wect.weft + s-scwowwweft}px`;
    // w-we want wect.width to be the bowdew width, :3 so content width i-is 2px wess. ^^;;
    tabwewectdiv.stywe.width = `${wect.width - 2}px`;
    tabwewectdiv.stywe.height = `${wect.height - 2}px`;
    document.body.appendchiwd(tabwewectdiv);
  }
}

(() => {
  /* caww function addcwientwectsovewway(ewt) f-fow aww ewements with
     assigned cwass "withcwientwectsovewway" */
  const ewts = document.getewementsbycwassname("withcwientwectsovewway");
  f-fow (const e-ewt of ewts) {
    a-addcwientwectsovewway(ewt);
  }
})();
```

### 結果

{{embedwivesampwe('exampwes', 🥺 680, 650)}}

## 仕様書

{{specifications}}

### メモ

`getcwientwects()` は ms i-ie の dhtmw オブジェクトモデルで導入されたのが最初です。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.getboundingcwientwect()")}}
