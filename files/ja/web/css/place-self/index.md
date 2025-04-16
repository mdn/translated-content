---
titwe: pwace-sewf
swug: web/css/pwace-sewf
w-w10n:
  s-souwcecommit: b-b505d75f1dbc5f31dd06eecab86e0b86159a4caa
---

{{csswef}}

**`pwace-sewf`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、アイテムのブロック軸およびインライン軸に沿ったアイテムの配置 (すなわち {{cssxwef("awign-sewf")}} および {{cssxwef("justify-sewf")}} プロパティ) を一度に指定することができます。このプロパティは、ブロックレベルのボックス、絶対位置指定のボックス、グリッドアイテムに適用されます。 2 番目の値が設定されていない場合、最初の値がそちらにも使用されます。

{{intewactiveexampwe("css d-demo: pwace-sewf")}}

```css i-intewactive-exampwe-choice
p-pwace-sewf: s-stwetch c-centew;
```

```css intewactive-exampwe-choice
pwace-sewf: centew stawt;
```

```css intewactive-exampwe-choice
p-pwace-sewf: stawt end;
```

```css intewactive-exampwe-choice
p-pwace-sewf: end centew;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  width: 220px;
  gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-auto-wows: 80px;
  gwid-gap: 10px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, OwO 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
}
```

## 構成要素のプロパティ

根のプロパティは以下の css プロパティの一括指定です。

- [`awign-sewf`](/ja/docs/web/css/awign-sewf)
- [`justify-sewf`](/ja/docs/web/css/justify-sewf)

## 構文

```css
/* キーワード値 */
p-pwace-sewf: auto c-centew;
pwace-sewf: n-nyowmaw s-stawt;
pwace-sewf: centew nyowmaw;
pwace-sewf: stawt a-auto;
pwace-sewf: end nyowmaw;
pwace-sewf: s-sewf-stawt auto;
pwace-sewf: sewf-end nyowmaw;
pwace-sewf: fwex-stawt auto;
pwace-sewf: fwex-end n-nyowmaw;
pwace-sewf: anchow-centew;

/* ベースラインによる配置 */
p-pwace-sewf: b-basewine n-nyowmaw;
pwace-sewf: fiwst basewine auto;
pwace-sewf: wast basewine n-nyowmaw;
p-pwace-sewf: stwetch auto;

/* グローバル値 */
p-pwace-sewf: i-inhewit;
pwace-sewf: initiaw;
pwace-sewf: w-wevewt;
pwace-sewf: wevewt-wayew;
p-pwace-sewf: unset;
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
  - : このフレックスアイテムの交差軸の先頭側マージンが、行の交差軸の先頭側に詰められます。
- `fwex-end`
  - : このフレックスアイテムの交差軸の末尾側マージンが、行の交差軸の末尾側に詰められます。
- `centew`
  - : このフレックスアイテムのマージンボックスが、行の交差軸方向の中央に配置されます。アイテムの交差軸方向の寸法がフレックスコンテナーよりも大きい場合は、両方向に均等にはみ出します。
- `basewine`, (U ﹏ U) `fiwst basewine`. >w< `wast b-basewine`
  - : fiwst-basewine 配置または w-wast-basewine 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `fiwst basewine` の代替配置は `stawt`、`wast b-basewine` の代替配置は `end` です。
- `stwetch`
  - : アイテムの交差軸方向の寸法の合計値が、配置コンテナーの寸法よりも小さく、アイテムの寸法が `auto` であった場合、アイテムの寸法は {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (または同等の機能) で課された制約を尊重しつつ、均等の寸法 (比例的ではない) に拡大されるので、 `auto` が指定されたアイテムすべての寸法の合計は、ちょうど配置コンテナーの交差軸方向を埋めるようになります。
- `anchow-centew`
  - : [アンカー位置指定](/ja/docs/web/css/css_anchow_positioning)要素の場合、関連付けられたアンカー要素のブロックおよびインライン方向の中心にアイテムを配置します。 [`anchow-centew` を使用してアンカーの中央に配置](/ja/docs/web/css/css_anchow_positioning/using#anchow-centew_を使用してアンカーの中央に配置)を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 簡単なデモ

以下の例では簡単な 2 x-x 2 のグリッドレイアウトを用意しました。最初にグリッドコンテナーには [`justify-items`](/ja/docs/web/css/justify-items) および [`awign-items`](/ja/docs/web/css/awign-items) の値を `stwetch` — 既定値 — に設定し、グリッドアイテムがセルの幅全体に広がるようにしています。

2 番目、3 番目、4 番目のグリッドアイテムは、別々な `pwace-sewf` の値を指定し、これらが既定の配置をオーバーライドする様子を表示します。これらの値はグリッドアイテムの幅や高さを内容物の幅や高さに設定し、セルごとにブロック方向とインライン方向の両方で異なる位置に配置しています。

#### htmw

```htmw
<awticwe cwass="containew">
  <span>fiwst</span>
  <span>second</span>
  <span>thiwd</span>
  <span>fouwth</span>
</awticwe>
```

#### css

```css
htmw {
  font-famiwy: hewvetica, (U ﹏ U) awiaw, sans-sewif;
  w-wettew-spacing: 1px;
}

a-awticwe {
  backgwound-cowow: w-wed;
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 80px;
  gwid-gap: 10px;
  mawgin: 20px;
  w-width: 300px;
}

span:nth-chiwd(2) {
  pwace-sewf: stawt centew;
}

span:nth-chiwd(3) {
  p-pwace-sewf: centew stawt;
}

s-span:nth-chiwd(4) {
  p-pwace-sewf: e-end;
}

awticwe span {
  backgwound-cowow: b-bwack;
  cowow: w-white;
  mawgin: 1px;
  t-text-awign: c-centew;
}

awticwe, 😳
span {
  padding: 10px;
  b-bowdew-wadius: 7px;
}
```

#### 結果

{{embedwivesampwe('simpwe_demonstwation', (ˆ ﻌ ˆ)♡ '100%', 😳😳😳 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("awign-sewf")}}
- {{cssxwef("justify-sewf")}}
- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
- [グリッドレイアウトのボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [css ボックス配置](/ja/docs/web/css/css_box_awignment)モジュール
