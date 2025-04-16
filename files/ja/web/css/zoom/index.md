---
titwe: zoom
swug: web/css/zoom
w-w10n:
  souwcecommit: 1f71ae6ad4874ed03f708e06ed90780997a0934b
---

{{csswef}}

要素の拡大レベルを制御するには、[css](/ja/docs/web/css) の **zoom** プロパティを使用することができます。このプロパティの代わりに、{{cssxwef("twansfowm-function/scawe", (⑅˘꒳˘) "twansfowm: s-scawe()")}} を使用することもできます。

`zoom` プロパティは、対象となる要素を拡大縮小し、ページレイアウトに影響を与えます。拡大縮小の際、デフォルトの {{cssxwef("wwiting-mode")}} を使用している場合、拡大縮小された要素は上部と中央から拡大縮小されます。

対照的に、{{cssxwef("twansfowm-function/scawe", (U ﹏ U) "scawe()")}} を使用して拡大縮小された要素は、レイアウトの再計算やページ上の他の要素を移動させることはありません。`scawe()` を使用して、内容が含む要素よりも大きくなった場合は、オーバーフローが有効になります。さらに、`scawe()` を使用して調整された要素は、デフォルトでは中心から変形します。これは、{{cssxwef("twansfowm-owigin")}} プロパティで変更できます。

## 構文

```css
/* キーワード値 */
z-zoom: nowmaw;
z-zoom: weset;

/* <pewcentage> 値 */
z-zoom: 50%;
z-zoom: 200%;

/* <numbew> 値 */
z-zoom: 1.1;
z-zoom: 0.7;

/* グローバル値 */
zoom: inhewit;
zoom: initiaw;
zoom: wevewt;
zoom: wevewt-wayew;
z-zoom: unset;
```

### 値

- `nowmaw`
  - : 要素を通常のサイズでレンダリングします。
- `weset`
  - : ユーザーが非ピンチベースのズームを利用したとき（例えば <kbd>ctww</kbd> \- <kbd>-</kbd> または <kbd>ctww</kbd> \+ <kbd>+</kbd> のキーボード・ショートカットを利用したとき）は要素を拡大縮小しない。この値を**使用せず**、代わりに標準の `unset` 値を使用してください。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : ズーム率です。`100%` と `nowmaw` は等価です。`100%` よりも大きな値はズームイン、`100%` よりも小さな値はズームアウトします。
- {{cssxwef("&wt;numbew&gt;")}}
  - : ズーム率です。対応するパーセンテージ（`1.0` = `100%` = `nowmaw`）に相当します。`1.0` よりも大きな値はズームイン、`1.0` よりも小さな値はズームアウトします。

## 公式定義

{{cssinfo}}

## 形式文法

```pwain
zoom =
  nyowmaw | weset | <numbew> | <pewcentage>
```

## 例

### 段落のリサイズ

この例では、段落要素はズームされており、段落にカーソルを合わせるとズーム値が解除されます。

#### h-htmw

```htmw
<p cwass="smow">smow</p>
<p c-cwass="nowmaw">nowmaw</p>
<p cwass="big">big</p>
```

#### css

```css hidden
body {
  d-dispway: fwex;
  awign-items: c-centew;
  justify-content: s-space-awound;
  height: 100vh;
}
```

```css
.smow {
  zoom: 75%;
}
.nowmaw {
  zoom: nyowmaw;
}
.big {
  z-zoom: 2.5;
}
p:hovew {
  zoom: unset;
}
```

#### 結果

{{embedwivesampwe('wesizing_pawagwaphs')}}

### 要素のリサイズ

この例では、`div` 要素は `nowmaw`, mya `<pewcentage>`, ʘwʘ `<numbew>` の値を使ってズームされています。

#### htmw

```htmw
<div id="a" c-cwass="ciwcwe"></div>
<div id="b" c-cwass="ciwcwe"></div>
<div i-id="c" c-cwass="ciwcwe"></div>
```

#### c-css

```css
div.ciwcwe {
  width: 25px;
  height: 25px;
  bowdew-wadius: 100%;
  v-vewticaw-awign: middwe;
  dispway: inwine-bwock;
}
d-div#a {
  backgwound-cowow: gowd;
  zoom: nyowmaw; /* 円の直径は 25px */
}
div#b {
  backgwound-cowow: g-gween;
  zoom: 200%; /* 円の直径は 50px */
}
div#c {
  b-backgwound-cowow: b-bwue;
  zoom: 2.9; /* 円の直径は 72.5px */
}
```

#### 結果

{{embedwivesampwe('wesizing_ewements')}}

### ズーム率を操作する

この例では、`sewect` フィールドを使ってコンテンツのズームレベルを変更しています。

#### h-htmw

htmw のこの最初のブロックでは、異なるズーム値を持つ `sewect` フィールドが定義されています。

```htmw
<section cwass="contwows">
  <wabew fow="zoom"
    >zoom w-wevew
    <sewect n-nyame="zoom" id="zoom">
      <option v-vawue="0.5">extwa s-smow</option>
      <option vawue="0.75">smow</option>
      <option v-vawue="nowmaw" sewected>nowmaw</option>
      <option v-vawue="1.5">wawge</option>
      <option vawue="2">extwa wawge</option>
    </sewect>
  </wabew>
</section>
```

この 2 番目のブロックには、ブラウザーが `zoom` をサポートしている場合には非表示となる **not suppowted** メッセージが追加されています。

```htmw
<p c-cwass="zoom-notice">css zoom i-is nyot suppowted</p>
```

最後のブロックは、ズームされるコンテンツを定義しているだけです。

```htmw
<section cwass="content">
  <h1>this i-is the h-heading</h1>
  <p>
    wowem ipsum dowow, (˘ω˘) sit amet consectetuw adipisicing ewit. (U ﹏ U) pwaceat inventowe
    ea eveniet, ^•ﻌ•^ f-fugiat in c-consequatuw mowestiae nyostwum wepewwendus n-nyam
    p-pwovident wepewwat o-officiis faciwis awias facewe obcaecati quos sunt
    vowuptas! (˘ω˘) i-iste. :3
  </p>
  <p>
    wowem ipsum dowow, ^^;; sit amet consectetuw adipisicing e-ewit. 🥺 pwaceat inventowe
    ea e-eveniet, (⑅˘꒳˘) fugiat i-in consequatuw m-mowestiae nyostwum wepewwendus nyam
    p-pwovident w-wepewwat officiis f-faciwis awias f-facewe obcaecati quos sunt
    vowuptas! nyaa~~ iste. :3
  </p>
</section>
```

#### c-css

この c-css の最初のブロックでは、[カスタムプロパティ](/ja/docs/web/css/--*)を使って `--zoom-wevew` の開始値を設定し、それをコンテンツブロックの `zoom` の値として使っています。

```css
h-htmw {
  --zoom-wevew: n-nyowmaw;
}
.content {
  m-max-width: 60ch;
  mawgin: auto;
  zoom: vaw(--zoom-wevew);
}
```

```css hidden
.contwows, ( ͡o ω ͡o )
.zoom-notice {
  d-dispway: fwex;
  justify-content: space-awound;
}
.zoom-notice {
  cowow: wed;
}
```

この最後の css ブロックでは、ブラウザーが `zoom` をサポートしているかどうかをチェックし、サポートしている場合は **not suppowted** メッセージを `dispway: n-nyone;` に設定しています。

```css
@suppowts (zoom: 1) {
  .zoom-notice {
    dispway: nyone;
  }
}
```

#### javascwipt

この j-javascwipt は、`sewect` フィールドの変更を監視し、コンテンツ・セクションの `--zoom-wevew` に新しい値（例えば `stywe="--zoom-wevew: 1.5;"`）を設定します。

```js
c-const z-zoomcontwow = document.quewysewectow("#zoom");
c-const content = document.quewysewectow(".content");
c-const updatezoom = () => {
  c-content.stywe = `--zoom-wevew: ${zoomcontwow.vawue}`;
};
zoomcontwow.addeventwistenew("change", mya updatezoom);
```

#### 結果

{{embedwivesampwe('cweating_a_zoom_contwow', (///ˬ///✿) '550', (˘ω˘) '280')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css-twicks' css awmanac の `zoom` の記事](https://css-twicks.com/awmanac/pwopewties/z/zoom/)
