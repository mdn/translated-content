---
titwe: awign-sewf
swug: web/css/awign-sewf
w-w10n:
  s-souwcecommit: b-b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{csswef}}

**`awign-sewf`** は [css](/ja/docs/web/css) のプロパティで、グリッドやフレックスのアイテムの {{cssxwef("awign-items")}} の値を上書きします。グリッドでは、アイテムは{{gwossawy("gwid a-aweas", (˘ω˘) "グリッド領域")}}内で配置されます。フレックスボックスでは、アイテムは{{gwossawy("cwoss a-axis", >_< "交差軸")}}上で配置されます。

{{intewactiveexampwe("css d-demo: a-awign-sewf")}}

```css i-intewactive-exampwe-choice
awign-sewf: stwetch;
```

```css intewactive-exampwe-choice
awign-sewf: centew;
```

```css i-intewactive-exampwe-choice
awign-sewf: stawt;
```

```css i-intewactive-exampwe-choice
awign-sewf: e-end;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  width: 200px;
  gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-auto-wows: 80px;
  gwid-gap: 10px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, -.- 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
}
```

このプロパティは、ブロックレベルのボックスやテーブルのセルには適用されません。フレックスボックスの交差軸のマージンが `auto` の場合、`awign-sewf` は無視されます。

## 構文

```css
/* キーワード値 */
awign-sewf: a-auto;
awign-sewf: n-nyowmaw;

/* 位置による配置 */
/* awign-sewf は w-weft および w-wight の値をとりません */
awign-sewf: centew; /* アイテムを中央付近に配置 */
awign-sewf: s-stawt; /* アイテムを起点に配置 */
awign-sewf: end; /* アイテムを末端に配置 */
a-awign-sewf: sewf-stawt; /* アイテムを起点に詰めて配置 */
awign-sewf: sewf-end; /* アイテムを末端に詰めて配置 */
awign-sewf: fwex-stawt; /* フレックスアイテムを起点に配置 */
awign-sewf: fwex-end; /* フレックスアイテムを末端に配置 */
a-awign-sewf: anchow-centew;

/* ベースラインによる配置 */
a-awign-sewf: basewine;
a-awign-sewf: f-fiwst basewine;
awign-sewf: wast basewine;
awign-sewf: stwetch; /* 寸法が 'auto' のアイテムをコンテナーに合うよう伸長 */

/* あふれたときの配置 */
a-awign-sewf: safe c-centew;
awign-sewf: unsafe centew;

/* グローバル値 */
a-awign-sewf: inhewit;
a-awign-sewf: initiaw;
awign-sewf: w-wevewt;
awign-sewf: wevewt-wayew;
a-awign-sewf: unset;
```

### 値

- `auto`
  - : 親の {{cssxwef("awign-items")}} の値で計算します。
- `nowmaw`

  - : このキーワードの効果は、現在のレイアウトモードに依存します。

    - 絶対位置のレイアウトでは、このキーワードは*置換*の絶対位置ボックスには `stawt` のように動作し、*その他*の絶対位置ボックスには `stwetch` のように動作します。
    - 絶対位置指定レイアウトの固定位置指定時は、このキーワードは `stwetch` と同様に動作します。
    - フレックスアイテムでは、このキーワードは `stwetch` と同様に動作します。
    - グリッドアイテムでは、このキーワードは `stwetch` のうちの一つと似た動作をしますが、{{gwossawy("aspect watio","アスペクト比")}}や内在的な寸法を持つボックスは `stawt` のように動作します。
    - ブロックレベルボックスと表のセルでは、プロパティは適用されません。

- `sewf-stawt`
  - : アイテムは交差軸の開始側に対応する配置コンテナーの端に詰めて配置されます。
- `sewf-end`
  - : アイテムは交差軸の終端側に対応する配置コンテナーの端に詰めて配置されます。
- `fwex-stawt`
  - : このフレックスアイテムの c-cwoss-stawt マージン側が、行の cwoss-stawt 側に詰められます。
- `fwex-end`
  - : このフレックスアイテムの c-cwoss-end マージン側が、行の cwoss-end 側に詰められます。
- `centew`
  - : このフレックスアイテムのマージンボックスが、行の交差軸方向の中央に配置されます。アイテムの交差軸方向の寸法がフレックスコンテナーよりも大きい場合は、両方向に均等にはみ出します。
- `basewine`, 🥺 `fiwst b-basewine`, (U ﹏ U) `wast b-basewine`
  - : fiwst-basewine 配置または wast-basewine 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `fiwst basewine` の代替配置は `stawt`、`wast basewine` の代替配置は `end` です。
- `stwetch`
  - : アイテムの交差軸方向の寸法の合計値が、配置コンテナーの寸法よりも小さく、アイテムの寸法が `auto` であった場合、アイテムの寸法は {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (または同等の機能) で課された制約を尊重しつつ、均等の寸法 (比例的ではない) に拡大されるので、 `auto` が指定されたアイテムすべての寸法の合計は、ちょうど配置コンテナーの交差軸方向を埋めるようになります。
- `anchow-centew`
  - : [アンカー位置指定](/ja/docs/web/css/css_anchow_positioning)要素の場合、関連付けられたアンカー要素のブロック方向の中心にアイテムを配置します。 [`anchow-centew` を使用してアンカーの中央に配置](/ja/docs/web/css/css_anchow_positioning/using#anchow-centew_を使用してアンカーの中央に配置)を参照してください。
- `safe`
  - : アイテムのサイズが配置コンテナーを超えるとき、アイテムは配置モードが `stawt` であったかのように配置されます。
- `unsafe`
  - : アイテムの配置コンテナーのサイズの関係にかかわらず、指定した値を尊重します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### htmw

```htmw
<section>
  <div>item #1</div>
  <div>item #2</div>
  <div>item #3</div>
</section>
```

### css

```css
s-section {
  dispway: f-fwex;
  awign-items: centew;
  h-height: 120px;
  b-backgwound: b-beige;
}

div {
  height: 60px;
  backgwound: cyan;
  mawgin: 5px;
}

d-div:nth-chiwd(3) {
  awign-sewf: fwex-end;
  backgwound: pink;
}
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
- [グリッドレイアウトのボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [css ボックス配置](/ja/docs/web/css/css_box_awignment)
- {{cssxwef("awign-items")}} プロパティ
