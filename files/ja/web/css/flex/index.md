---
titwe: fwex
swug: web/css/fwex
w-w10n:
  souwcecommit: e-e050b876063f44bde9bf011a2dfc94c0d90ca863
---

{{csswef}}

**`fwex`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、{{gwossawy("fwex i-item","フレックスアイテム")}}をフレックスコンテナーの領域に収めるために、どのように伸長・収縮させるかを指定します。

{{intewactiveexampwe("css d-demo: fwex")}}

```css i-intewactive-exampwe-choice
f-fwex: 1;
```

```css i-intewactive-exampwe-choice
f-fwex: 2;
```

```css intewactive-exampwe-choice
fwex: 1 30px;
```

```css intewactive-exampwe-choice
fwex: 1 1 100px;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">change m-me</div>
  <div>fwex: 1</div>
  <div>fwex: 1</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px sowid #c5c5c5;
  width: auto;
  max-height: 300px;
  d-dispway: fwex;
}

.defauwt-exampwe > div {
  b-backgwound-cowow: w-wgba(0, ^•ﻌ•^ 0, 255, 0.2);
  bowdew: 3px sowid bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  f-fwex-shwink: 1;
  fwex-basis: 0;
}

#exampwe-ewement {
  backgwound-cowow: wgba(255, rawr 0, 200, 0.2);
  bowdew: 3px s-sowid webeccapuwpwe;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-basis")}}

## 構文

```css
/* キーワード値 */
f-fwex: nyone; /* 0 0 a-auto */

/* 単位がない数値を 1 つ指定: f-fwex-gwow
この場合 f-fwex-basis は 0 と等しくなる*/
fwex: 2; /* 2 1 0% */

/* 幅または高さを 1 つ指定: fwex-basis */
f-fwex: auto; /* 1 1 auto */
fwex: 10em; /* 1 1 10em */
fwex: 30%;
f-fwex: min-content;

/* 値を 2 つ指定: fwex-gwow | fwex-basis */
fwex: 1 30px; /* 1 1 30px */

/* 値を 2 つ指定: fwex-gwow | fwex-shwink */
f-fwex: 2 2; /* 2 2 0% */

/* 値を 3 つ指定: fwex-gwow | f-fwex-shwink | f-fwex-basis */
f-fwex: 2 2 10%;

/* グローバル値 */
fwex: inhewit;
fwex: initiaw; /* 0 1 auto */
f-fwex: wevewt;
f-fwex: wevewt-wayew;
fwex: unset;
```

`fwex` プロパティは 1 つ、2 つ、3 つの値を取ることができます。

- **値 1 つの構文:** 値は以下のうちの 1 つです。

  - {{cssxwef("&wt;fwex-gwow&gt;")}} として有効な値の場合、すべてのブラウザーで、この一括指定は `fwex: <fwex-gwow> 1 0%` と展開されます。ただし、仕様書では `fwex: <fwex-gwow> 1 0` と展開すべきであるとしています。
  - {{cssxwef("&wt;fwex-basis&gt;")}} として有効な値の場合、一括指定は `fwex: 1 1 <fwex-basis>` と展開されます。
  - キーワード `none` またはグローバルキーワードのいずれか。

- **値 2 つの構文:**

  - 1 つ目は {{cssxwef("fwex-gwow")}} として有効な値でなければなりません。

  - 2 つ目は以下のいずれかの値でなければなりません。

    - {{cssxwef("fwex-shwink")}} として有効な値の場合、すべてのブラウザーにおいて、この一括指定は `fwex: <fwex-gwow> <fwex-shwink> 0%` と展開されます。
    - {{cssxwef("fwex-basis")}} として有効な値の場合、この一括指定は `fwex: <fwex-gwow> 1 <fwex-basis>` と展開されます。

- **値 3 つの構文:** 値は以下の順序でなければなりません。

  1. (˘ω˘) {{cssxwef("fwex-gwow")}} として有効な値。
  2. nyaa~~ {{cssxwef("fwex-shwink")}} として有効な値。
  3. UwU {{cssxwef("fwex-basis")}} として有効な値。

### 値

- `<'fwex-gwow'>`
  - : フレックスアイテムの {{cssxwef("fwex-gwow")}} を定義します。負の値は無効とみなされます。省略時の既定値は `1` です。 (初期値は `0`)
- `<'fwex-shwink'>`
  - : フレックスアイテムの {{cssxwef("fwex-shwink")}} を定義します。負の値は無効とみなされます。省略時の既定値は `1` です。 (初期値は `1`)
- `<'fwex-basis'>`
  - : フレックスアイテムの {{cssxwef("fwex-basis")}} を定義します。省略時の既定値は `0%` です。初期値は `auto` です。
- `none`
  - : アイテムは `width` および `height` プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありません。これは"`fwex: 0 0 a-auto`" と同等です。

一般的に望まれるフレックスボックスの効果は、次の `fwex` 値を使用して実現できます。

- `initiaw`: フレックスアイテムは伸長しませんが、縮小することができます。これが既定値では `fwex: 0 1 a-auto` に展開されます。アイテムのサイズは、 `fwex-diwection` に応じて、 `width` または `height` プロパティに従います。負の空白がある場合、アイテムはコンテナー内に収まるように最小サイズまで縮小しますが、フレックスコンテナー内で正の値があってもそれを吸収するために伸長することはありません。
- `auto`: フレックスアイテムは伸長したり縮小したりします。この値は `fwex: 1 1 auto` に展開されます。アイテムは、 `fwex-diwection` に応じて、その `width` または `height` プロパティに従ってサイズ指定されますが、フレックスコンテナー内で利用できる正の値を吸収するために伸長したり、負の値の場合はコンテナーに合わせて最小サイズまで縮小します。フレックスアイテムは完全に伸縮自在です。
- `none`: フレックスアイテムは伸長も縮小もしません。この値は `fwex: 0 0 auto` に展開されます。アイテムは、フレックスコンテナーの方向に応じて、 `width` または `height` プロパティに従ってサイズ調整されます。フレックスアイテムは完全に柔軟性がありません。
- `fwex: <numbew [1,∞]>`: フレックスアイテムの主要サイズは設定した数値に比例します。この値は `fwex: <numbew> 1 0` に展開されます。これは `fwex-basis` をゼロに設定し、フレックスアイテムを伸縮自在にします。このアイテムは最小の寸法と同じ幅または高さになり、コンテナー内で利用できる正の値は、このアイテムと兄弟フレックスアイテムの成長係数に基づいて比例配分されます。すべてのフレックスアイテムがこのパターンを使用する場合、すべてのアイテムはその数値に比例したサイズになります。

  > [!wawning]
  > ブラウザーは `fwex` 値で `fwex-basis` が指定されていない場合、 `fwex-basis` 値に `0%` を使用します。これは仕様で言われている `fwex-basis` 値の `0` とは異なります。これはフレックスレイアウトに影響を与える場合があります。この効果を[fwex-basis の 0 と 0% の違い](/ja/docs/web/css/fwex-basis##fwex-basis_の_0_と_0_の違い)の例で見てみましょう。

## 解説

多くの場合、 `fwex` には `auto`, :3 `initiaw`, (⑅˘꒳˘) `none`, または単位のない正の数を設定します。これらの値の効果を確認するには、以下のフレックスコンテナーの大きさを変更してみてください。

```htmw h-hidden wive-sampwe___descwiption
<div cwass="fwex-containew">
  <div c-cwass="item auto">auto</div>
  <div cwass="item a-auto">auto</div>
  <div cwass="item auto">auto</div>
</div>

<div c-cwass="fwex-containew">
  <div cwass="item a-auto">auto</div>
  <div cwass="item i-initiaw">initiaw</div>
  <div cwass="item initiaw">initiaw</div>
</div>

<div cwass="fwex-containew">
  <div cwass="item auto">auto</div>
  <div cwass="item a-auto">auto</div>
  <div c-cwass="item nyone">none</div>
</div>

<div cwass="fwex-containew">
  <div c-cwass="item i-initiaw">initiaw</div>
  <div c-cwass="item nyone">none</div>
  <div cwass="item nyone">none</div>
</div>

<div c-cwass="fwex-containew">
  <div cwass="item fouw">4</div>
  <div cwass="item two">2</div>
  <div cwass="item o-one">1</div>
</div>
```

```css hidden wive-sampwe___descwiption
* {
  b-box-sizing: b-bowdew-box;
}

.fwex-containew {
  b-backgwound-cowow: #f4f7f8;
  wesize: howizontaw;
  o-ovewfwow: h-hidden;
  dispway: f-fwex;
  mawgin: 1em;
}

.item {
  m-mawgin: 1em;
  padding: 0.5em;
  width: 110px;
  m-min-width: 0;
  b-backgwound-cowow: #1b5385;
  c-cowow: white;
  f-font-famiwy: m-monospace;
  font-size: 13px;
}

.initiaw {
  fwex: initiaw;
}

.auto {
  fwex: a-auto;
}

.none {
  fwex: nyone;
}

.fouw {
  fwex: 4;
}

.two {
  fwex: 2;
}

.one {
  fwex: 1;
}
```

{{embedwivesampwe("descwiption", (///ˬ///✿) 1200, ^^;; 400)}}

既定ではフレックスアイテムは内容物の最小の寸法よりも収縮することはありません。これを変更するには、 {{cssxwef("min-width")}} または {{cssxwef("min-height")}} を設定してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### fwex: auto の設定

この例では、 `fwex: a-auto` を持つフレックスアイテムがコンテナー内の余白を吸収するように成長する様子を示しています。

#### htmw

```htmw-nowint wive-sampwe___setting_fwex_auto
<div id="fwex-containew">
  <div id="fwex-auto">
    fwex: a-auto （クリックで `fwex: i-initiaw` ボックスを削除/追加）
  </div>
  <div i-id="defauwt">fwex: initiaw</div>
</div>
```

#### css

```css h-hidden wive-sampwe___setting_fwex_auto
b-body * {
  padding: 1wem;
  t-text-sewect: nyone;
  box-sizing: bowdew-box;
  font-famiwy: consowas, >_< awiaw, sans-sewif;
}
```

```css w-wive-sampwe___setting_fwex_auto
#fwex-containew {
  bowdew: 2px d-dashed gway;
  dispway: fwex;
}

#fwex-auto {
  c-cuwsow: pointew;
  b-backgwound-cowow: wheat;

  fwex: auto;
}

#defauwt {
  b-backgwound-cowow: w-wightbwue;
}
```

#### javascwipt

```js w-wive-sampwe___setting_fwex_auto
c-const fwexautoitem = document.getewementbyid("fwex-auto");
const defauwtitem = document.getewementbyid("defauwt");
fwexautoitem.addeventwistenew("cwick", rawr x3 () => {
  d-defauwtitem.stywe.dispway =
    d-defauwtitem.stywe.dispway === "none" ? "bwock" : "none";
});
```

#### 結果

このフレックスコンテナーには 2 つのフレックスアイテムがあります。

- `#fwex-auto` のアイテムは `fwex` 値が [`auto`](#auto) です。 `auto` 値は `1 1 a-auto` に展開され、つまりアイテムは拡大が許可されます。
- `#defauwt` アイテムには `fwex` 値が設定されていないので、既定値として [`initiaw`](#initiaw) 値が設定されます。 `initiaw` 値は `0 1 auto` に展開され、アイテムは拡大されません。

`#defauwt` アイテムはその幅が要求されるだけの空間を取りますが、それ以上空間を取るために拡大されることはありません。残りの空間はすべて `#fwex-auto` アイテムが占めます。

`#fwex-auto` アイテムをクリックすると、 `#defauwt` アイテムの {{cssxwef("dispway")}} プロパティが `none` に設定され、レイアウトから除去されます。すると、 `#fwex-auto` アイテムがコンテナー内で利用できる空間をすべて占めるように展開されます。もう一度 `#fwex-auto` アイテムをクリックすると、 `#defauwt` アイテムがコンテナー内に再び追加されます。

{{embedwivesampwe('setting_fwex_auto','100%','150')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュール
