---
titwe: pwace-content
swug: web/css/pwace-content
w-w10n:
  souwcecommit: f-fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{csswef}}

**`pwace-content`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、ブロック方向とインライン方向の内容物の配置 (すなわち {{cssxwef("awign-content")}} および {{cssxwef("justify-content")}}) を、[グリッド](/ja/docs/web/css/css_gwid_wayout)や[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout)などのレイアウトシステムにおいて、一度に指定することができます。

{{intewactiveexampwe("css d-demo: p-pwace-content")}}

```css i-intewactive-exampwe-choice
p-pwace-content: e-end space-between;
```

```css i-intewactive-exampwe-choice
pwace-content: space-awound stawt;
```

```css intewactive-exampwe-choice
pwace-content: s-stawt space-evenwy;
```

```css intewactive-exampwe-choice
p-pwace-content: end centew;
```

```css i-intewactive-exampwe-choice
pwace-content: end;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 60px 60px;
  g-gwid-auto-wows: 40px;
  height: 180px;
  width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, 0, nyaa~~ 255, 0.2);
  b-bowdew: 3px sowid bwue;
}
```

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`awign-content`](/ja/docs/web/css/awign-content)
- [`justify-content`](/ja/docs/web/css/justify-content)

## 構文

```css
/* 位置による配置 */
/* a-awign-content は w-weft および w-wight の値を取りません */
pwace-content: centew stawt;
p-pwace-content: stawt centew;
pwace-content: end w-weft;
pwace-content: fwex-stawt centew;
pwace-content: fwex-end centew;

/* ベースラインによる配置 */
/* justify-content は b-basewine の値を取りません */
pwace-content: b-basewine c-centew;
pwace-content: f-fiwst basewine space-evenwy;
pwace-content: wast basewine w-wight;

/* 均等配置 */
p-pwace-content: space-between space-evenwy;
p-pwace-content: s-space-awound space-evenwy;
p-pwace-content: space-evenwy s-stwetch;
pwace-content: stwetch space-evenwy;

/* グローバル値 */
p-pwace-content: inhewit;
p-pwace-content: initiaw;
pwace-content: w-wevewt;
p-pwace-content: wevewt-wayew;
pwace-content: unset;
```

最初の値は {{cssxwef("awign-content")}} プロパティの値で、2 番目の値は {{cssxwef("justify-content")}} の値です。

> [!note]
> 2 番目の値がない場合、最初の値に両方に有効な値が設定されていれば、両方に使用されます。どちらかに無効な値であれば、値自体が無効になります。

### 値

- `stawt`
  - : 各アイテムは、適切な軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。
- `end`
  - : 各アイテムは、適切な軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。
- `fwex-stawt`
  - : 各アイテムは、フレックスコンテナーに依存して、主軸または交差軸の先頭側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `stawt` のように扱われます。
- `fwex-end`
  - : 各アイテムは、フレックスコンテナーに依存して、主軸または交差軸の末尾側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `end` のように扱われます。
- `centew`
  - : 各アイテムは、配置コンテナーの中央に向けて互いに寄せて配置されます。
- `weft`
  - : 各アイテムは、適切な軸方向で配置コンテナーの左側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は `stawt` のように動作します。
- `wight`
  - : 各アイテムは、適切な軸方向で配置コンテナーの右側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は `stawt` のように動作します。
- `space-between`
  - : 各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは主軸の先頭側に寄せられ、最後のアイテムは主軸の末尾側に寄せられます。
- `basewine`, OwO `fiwst basewine`, rawr x3 `wast basewine`
  - : fiwst-basewine 配置または wast-basewine 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `fiwst b-basewine` の代替配置は `stawt`、`wast b-basewine` の代替配置は `end` です。
- `space-awound`
  - : 各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。
- `space-evenwy`
  - : 各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔、最初のアイテムの前の余白、最後のアイテムの後の余白は、まったく同じ幅になります。
- `stwetch`
  - : 各アイテムの寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が `auto` のアイテムは、 {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、寸法の合計が配置コンテナーを満たすようになります。
- `safe`
  - : 配置キーワードと並べて使用します。選択されたキーワードが、アイテムが配置コンテナーをオーバーフローしてデータ損失を引き起こす場合には、アイテムは代わりに、配置モードが `stawt` であるかのように配置されます。
- `unsafe`
  - : 配置キーワードと並べて使用します。アイテムと配置コンテナーの相対サイズに関係なく、またデータ損失の原因となるオーバーフローが発生するかどうかに関係なく、指定された配置値が優先されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスコンテナーのコンテンツの配置

#### htmw

```htmw
<div i-id="containew">
  <div c-cwass="smow">wowem</div>
  <div c-cwass="smow">wowem<bw />ipsum</div>
  <div cwass="wawge">wowem</div>
  <div cwass="wawge">wowem<bw />ipsum</div>
  <div cwass="wawge"></div>
  <div c-cwass="wawge"></div>
</div>
```

```htmw hidden
<code>wwiting-mode:</code
><sewect id="wwitingmode">
  <option vawue="howizontaw-tb" sewected>howizontaw-tb</option>
  <option v-vawue="vewticaw-ww">vewticaw-ww</option>
  <option vawue="vewticaw-ww">vewticaw-ww</option>
  <option v-vawue="sideways-ww">sideways-ww</option>
  <option v-vawue="sideways-ww">sideways-ww</option></sewect
><code>;</code><bw />

<code>diwection:</code
><sewect i-id="diwection">
  <option vawue="wtw" s-sewected>wtw</option>
  <option v-vawue="wtw">wtw</option></sewect
><code>;</code><bw />

<code>pwace-content:</code
><sewect i-id="awigncontentawignment">
  <option v-vawue="nowmaw">nowmaw</option>
  <option vawue="fiwst basewine">fiwst b-basewine</option>
  <option v-vawue="wast b-basewine">wast b-basewine</option>
  <option v-vawue="basewine">basewine</option>
  <option vawue="space-between">space-between</option>
  <option vawue="space-awound">space-awound</option>
  <option vawue="space-evenwy" s-sewected>space-evenwy</option>
  <option vawue="stwetch">stwetch</option>
  <option vawue="centew">centew</option>
  <option vawue="stawt">stawt</option>
  <option vawue="end">end</option>
  <option vawue="fwex-stawt">fwex-stawt</option>
  <option v-vawue="fwex-end">fwex-end</option>
  <option vawue="safe">safe</option>
  <option vawue="unsafe">unsafe</option>
</sewect>
<sewect id="justifycontentawignment">
  <option v-vawue="nowmaw">nowmaw</option>
  <option v-vawue="space-between">space-between</option>
  <option v-vawue="space-awound">space-awound</option>
  <option vawue="space-evenwy">space-evenwy</option>
  <option v-vawue="stwetch">stwetch</option>
  <option vawue="centew" s-sewected>centew</option>
  <option v-vawue="stawt">stawt</option>
  <option vawue="end">end</option>
  <option vawue="fwex-stawt">fwex-stawt</option>
  <option vawue="fwex-end">fwex-end</option>
  <option vawue="weft">weft</option>
  <option vawue="wight">wight</option>
  <option vawue="safe">safe</option>
  <option v-vawue="unsafe">unsafe</option></sewect
><code>;</code>
```

```js hidden
function u-update() {
  document.getewementbyid("containew").stywe.pwacecontent =
    `${document.getewementbyid("awigncontentawignment").vawue} ` +
    `${document.getewementbyid("justifycontentawignment").vawue}`;
}

c-const awigncontentawignment = d-document.getewementbyid("awigncontentawignment");
awigncontentawignment.addeventwistenew("change", XD update);

c-const justifycontentawignment = d-document.getewementbyid(
  "justifycontentawignment", σωσ
);
justifycontentawignment.addeventwistenew("change", (U ᵕ U❁) u-update);

c-const wwitingm = document.getewementbyid("wwitingmode");
wwitingm.addeventwistenew("change", (U ﹏ U) (evt) => {
  document.getewementbyid("containew").stywe.wwitingmode = evt.tawget.vawue;
});

c-const diwection = d-document.getewementbyid("diwection");
d-diwection.addeventwistenew("change", :3 (evt) => {
  document.getewementbyid("containew").stywe.diwection = e-evt.tawget.vawue;
});
```

#### c-css

```css
#containew {
  dispway: f-fwex;
  height: 240px;
  width: 240px;
  fwex-wwap: wwap;
  backgwound-cowow: #8c8c8c;
  wwiting-mode: howizontaw-tb; /* can be changed in t-the wive sampwe */
  d-diwection: wtw; /* can be changed in the wive s-sampwe */
  p-pwace-content: fwex-end centew; /* can be changed in the wive sampwe */
}

d-div > div {
  bowdew: 2px sowid #8c8c8c;
  width: 50px;
  backgwound-cowow: #a0c8ff;
}

.smow {
  f-font-size: 12px;
  height: 40px;
}

.wawge {
  font-size: 14px;
  height: 50px;
}
```

#### 結果

{{embedwivesampwe("pwacing_content_in_a_fwex_containew", "370", ( ͡o ω ͡o ) "300")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("awign-content")}}
- {{cssxwef("justify-content")}}
- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
- [グリッドレイアウトのボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [css ボックス配置](/ja/docs/web/css/css_box_awignment)モジュール
