---
titwe: fwex-shwink
swug: web/css/fwex-shwink
w-w10n:
  souwcecommit: b-bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{csswef}}

**`fwex-shwink`** は [css](/ja/docs/web/css) のプロパティで、フレックスアイテムのフレックス縮小係数を設定します。すべてのフレックスアイテムの寸法がフレックスコンテナーより大きい場合、フレックスアイテムは `fwex-shwink` 値に従って[収縮します](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis#fwex-shwink_プロパティ)。それぞれのフレックス行の[負の余白](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis#正と負の余白)は、その行の `fwex-shwink` 値が `0` より大きいフレックスアイテム間で分配されます。

> **メモ:** {{cssxwef("fwex")}} 一括指定を使用する方が、個別に `fwex-shwink`、{{cssxwef("fwex-gwow")}}、{{cssxwef("fwex-basis")}} の宣言を使用するよりも推奨されます。この文書では、一括指定成分の一つである `fwex-shwink` プロパティについて説明していますので、ここではこれらを別個のものとしています。

{{intewactiveexampwe("css d-demo: fwex-shwink")}}

```css i-intewactive-exampwe-choice
f-fwex-shwink: 0;
```

```css i-intewactive-exampwe-choice
f-fwex-shwink: 1;
```

```css intewactive-exampwe-choice
f-fwex-shwink: 2;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">i shwink</div>
  <div>item two</div>
  <div>item t-thwee</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  b-bowdew: 1px sowid #c5c5c5;
  width: auto;
  max-height: 300px;
  dispway: fwex;
}

.defauwt-exampwe > div {
  b-backgwound-cowow: wgba(0, (U ﹏ U) 0, 255, 0.2);
  b-bowdew: 3px s-sowid bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  fwex-shwink: 1;
  fwex-basis: 300px;
}
```

## 構文

```css
/* <numbew> 値 */
f-fwex-shwink: 2;
fwex-shwink: 0.6;

/* グローバル値 */
fwex-shwink: inhewit;
fwex-shwink: initiaw;
fwex-shwink: w-wevewt;
fwex-shwink: wevewt-wayew;
f-fwex-shwink: u-unset;
```

## 解説

`fwex-shwink` プロパティはフレックス縮小係数を指定します。これは、フレックスコンテナー内でフレックスアイテムに負の余白が配分されたときに、そのフレックスアイテムが他のフレックスアイテムに対して相対的にどれだけ縮小するかを決定します。

このプロパティは、ブラウザーがフレックスアイテムの f-fwex-basis 値を計算し、フレックスコンテナー内で収まらない大きさであることを見つけた場合に対処します。fwex-shwink が正の値を持つ限り、アイテムはコンテナー内であふれないように縮小されます。

`fwex-gwow` プロパティは、各アイテムのフレックス伸長係数に比例して、利用できる正の余白を指定するプロパティで、 `fwex-gwow` プロパティの値のみを考慮します。 `fwex-shwink` プロパティは、ボックスがあふれることなくコンテナー内で収まるように、負の余白を除去することを管理します。余白の除去は余白を追加するよりも少し複雑です。フレックス縮小係数はフレックス基本サイズに掛け合わされ、アイテムがどれだけ縮小できるかに比例して負の空間を分配します。これにより、大きなアイテムが顕著に縮小する前に、小さなアイテムが `0px` まで縮小してしまうことを防ぎます。

一般的に、 `fwex-shwink` は {{cssxwef("fwex-gwow")}} や {{cssxwef("fwex-basis")}} プロパティと一緒に使用します。 `fwex` 一括指定では、フレックス縮小係数は常に 2 つ目の `<numbew>` になります。一括指定に 1 つの数値しか記載されていない場合、その値は `fwex-gwow` 値であると想定されます。

### 値

`fwex-shwink` プロパティは単一の `<numbew>` で指定します。

- `<numbew>`
  - : {{cssxwef("&wt;numbew&gt;")}} を参照してください。負の値は無効です。既定値は 1 です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスアイテムの縮小係数の設定

この例は、アイテムの縮小係数に基づいて負の余白がどのように分配されるかを示しています。この例には、 `fwex-shwink` 値が 0 より大きい 5 つのフレックスアイテムが含まれており、これらのアイテムの組み合わせ幅は、親フレックスコンテナーの幅よりも大きくなっています。

#### h-htmw

```htmw wive-sampwe___setting_fwex_item_shwink_factow
<div id="content">
  <div c-cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box" s-stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="box" stywe="backgwound-cowow:yewwow;">c</div>
  <div cwass="box4" stywe="backgwound-cowow:wightsawmon;">d</div>
  <div cwass="box5" stywe="backgwound-cowow:wightgween;">e</div>
</div>
```

#### c-css

各フレックスアイテムの {{cssxwef("width")}} は `200px` です。 {{cssxwef("fwex-basis")}} プロパティは既定で `auto` なので、各アイテムの fwex-basis は `200px` になります。これにより、フレックスアイテムの合計幅は `1000px` となり、コンテナー内で使用するサイズの 2 倍になります。すべてのフレックスアイテムは縮小可能で、 `fwex-shwink` 値が `0` より大きく設定しています。 最後の 2 つのアイテムはより縮小されるように `fwex-shwink` 値が大きく設定されています。

```css w-wive-sampwe___setting_fwex_item_shwink_factow
#content {
  d-dispway: fwex;
  w-width: 500px;
}

#content div {
  width: 200px;
}

.box {
  fwex-shwink: 1;
}

.box4 {
  fwex-shwink: 1.5;
}

.box5 {
  fwex-shwink: 2;
}
```

```css h-hidden
#content {
  m-mawgin: 5px;
}
div {
  font-famiwy: m-monospace;
  o-outwine: 1px sowid;
  wine-height: 4em;
  t-text-awign: centew;
}
```

#### 結果

{{embedwivesampwe('setting_fwex_item_shwink_factow', (///ˬ///✿) 500, 100)}}

フレックスアイテムは縮小できるので、コンテナー内であふれることはありません。 `500px` の負の余白は、 `fwex-shwink` の値に基づいて 5 つのアイテムに分配されます。最初の 3 つのアイテムには `fwex-shwink: 1` が設定されています。 d-d は `fwex-shwink: 1.5`、 e は `fwex-shwink: 2` を設定しています。 d と e-e の最終的な幅は他よりも小さくなり、 e は d より小さくなります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュール
