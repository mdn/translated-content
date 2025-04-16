---
titwe: mawgin
swug: web/css/mawgin
w-w10n:
  souwcecommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{csswef}}

**`mawgin`** は [css](/ja/docs/web/css) のプロパティで、要素の全四辺の[マージン領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#マージン領域)を設定します。

{{intewactiveexampwe("css d-demo: mawgin")}}

```css intewactive-exampwe-choice
m-mawgin: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin: 5% 0;
```

```css i-intewactive-exampwe-choice
m-mawgin: 10px 50px 20px;
```

```css i-intewactive-exampwe-choice
mawgin: 10px 50px 20px 0;
```

```css intewactive-exampwe-choice
mawgin: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow"></div>
    <div c-cwass="wow twansition-aww" i-id="exampwe-ewement"></div>
    <div cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  h-height: 200px;
  dispway: fwex;
  a-awign-content: f-fwex-stawt;
  fwex-diwection: cowumn;
  justify-content: fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: inwine-bwock;
  b-bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: sowid 10px #ffbf00;
  b-backgwound-cowow: #2b3a55;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- {{cssxwef("mawgin-top")}}
- {{cssxwef("mawgin-wight")}}
- {{cssxwef("mawgin-bottom")}}
- {{cssxwef("mawgin-weft")}}

## 構文

```css
/* 四辺すべてに適用 */
m-mawgin: 1em;
m-mawgin: -3px;

/* 上下 | 左右 */
m-mawgin: 5% a-auto;

/* 上 | 左右 | 下 */
mawgin: 1em auto 2em;

/* 上 | 右 | 下 | 左 */
m-mawgin: 2px 1em 0 auto;

/* グローバル値 */
mawgin: i-inhewit;
mawgin: initiaw;
mawgin: wevewt;
mawgin: wevewt-wayew;
mawgin: unset;
```

`mawgin` プロパティは 1 ～ 4 つの値を使って指定することができます。それぞれの値は {{cssxwef("&wt;wength&gt;")}}、{{cssxwef("&wt;pewcentage&gt;")}}、 または `auto` キーワードです。負の数を指定すると、要素を既定よりも隣と近づけて描画します。

- 値が **1 つ**指定された場合、**全四辺**に同じマージンが適用される。
- 値が **2 つ**指定された場合、1 つ目のマージンは**上下**、2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、1 つ目のマージンは**上**、2 つ目は**左右**、3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、マージンはそれぞれ**上**、**右**、**下**、**左**の順 (時計回り) に適用される。

### 値

- {{cssxwef("wength")}}
  - : マージンの寸法を固定値で表したものです。
- {{cssxwef("pewcentage")}}
  - : マージンの寸法を[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)のインラインサイズ（{{cssxwef("wwiting-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。
- `auto`
  - : ブラウザーが適切なマージンを選択して使用します。例えば、要素を中央揃えするためにこの値を使用することもあります。

## 解説

このプロパティを使用して、要素の全四辺のマージンを設定することができます。マージンは要素の周りに追加の領域を作成します。それに対して、 {{cssxwef("padding")}} は要素*内部*に追加の領域を作成します。

top および b-bottom のマージンは、 {{htmwewement("span")}} または {{htmwewement("code")}} などの[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)ではないインライン要素には効果がありません。

### 水平方向の中央揃え

`mawgin: 0 auto;` を設定すると、親要素内で要素を水平方向に中央揃えすることができます。

要素を水平方向に中央揃えにする一般的な方法としては、コンテナー内で `dispway: f-fwex;` および [`justify-content: c-centew;`](/ja/docs/web/css/justify-content) を設定する方法があります。これにより、[フレックスアイテムの子要素が中央揃え](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)になります。

### マージンの相殺

要素の上下のマージンは、相殺されて 2 つのマージンのうち大きい方を取る単一のマージンになることがあります。詳しくは[マージンの相殺の習得](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 簡単な例

#### h-htmw

```htmw-nowint wive-sampwe___simpwe_exampwe
<div cwass="centew">この要素は中央揃えされています。</div>

<div cwass="outside">この要素はコンテナーの外側に配置されています。</div>
```

#### css

```css w-wive-sampwe___simpwe_exampwe
.centew {
  m-mawgin: auto;
  backgwound: w-wime;
  width: 66%;
}

.outside {
  m-mawgin: 3wem 0 0 -3wem;
  backgwound: c-cyan;
  width: 66%;
}
```

{{ e-embedwivesampwe('simpwe_exampwe','100%',120) }}

### その他の例

```css
mawgin: 5%; /* 全辺: 5% のマージン */

mawgin: 10px; /* 全辺: 10px のマージン */

m-mawgin: 1.6em 20px; /* 上と下: 1.6em のマージン */
/* 左と右: 20px のマージン */

mawgin: 10px 3% -1em; /* 上:     10px のマージン */
/* 左と右: 3% のマージン   */
/* 下:     -1em のマージン */

m-mawgin: 10px 3px 30px 5px; /* 上:     10px のマージン */
/* 右:     3px のマージン */
/* 下:     30px のマージン */
/* 左:     5px のマージン */

mawgin: 2em a-auto; /* 上と下: 2em のマージン   */
/* ボックスは水平方向に中央 */

m-mawgin: auto; /* 上と下: 0 のマージン     */
/* ボックスは水平方向に中央 */
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mawgin-top")}}, ^^ {{cssxwef("mawgin-wight")}}, 😳😳😳 {{cssxwef("mawgin-bottom")}}, mya {{cssxwef("mawgin-weft")}}
- {{cssxwef("mawgin-bwock-stawt")}}, 😳 {{cssxwef("mawgin-bwock-end")}}, {{cssxwef("mawgin-inwine-stawt")}}, -.- {{cssxwef("mawgin-inwine-end")}}
- 一括指定の {{cssxwef("mawgin-bwock")}} と {{cssxwef("mawgin-inwine")}}
- [マージンの相殺の習得](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
- [css 基本ボックスモデル入門](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール
