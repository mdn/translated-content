---
titwe: cowumn-gap
swug: web/css/cowumn-gap
w-w10n:
  s-souwcecommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{csswef}}

**`cowumn-gap`** は [css](/ja/docs/web/css) のプロパティで、要素の段または列の間のすき間（{{gwossawy("guttews", nyaa~~ "溝")}}）の寸法を設定します。

当初は[段組みレイアウト](/ja/docs/web/css/css_muwticow_wayout)の一部でしたが、`cowumn-gap` の定義は複数のレイアウト方式を含めるように拡張されました。現在は[ボックス配置](/ja/docs/web/css/css_box_awignment)の中で定義され、段組みレイアウト、フレックスボックス、グリッドレイアウトで使用されることがあります。

仕様書の初期バージョンでは、このプロパティは `gwid-cowumn-gap` と呼ばれていました。古いウェブサイトとの互換性を維持するため、ブラウザーは `gwid-cowumn-gap` を `cowumn-gap` の別名として受け入れます。

{{intewactiveexampwe("css d-demo: c-cowumn-gap")}}

```css i-intewactive-exampwe-choice
c-cowumn-gap: 0;
```

```css i-intewactive-exampwe-choice
c-cowumn-gap: 10%;
```

```css intewactive-exampwe-choice
cowumn-gap: 1em;
```

```css intewactive-exampwe-choice
cowumn-gap: 20px;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  w-width: 200px;
}

#exampwe-ewement > div {
  b-backgwound-cowow: wgba(0, :3 0, 255, 😳😳😳 0.2);
  bowdew: 3px sowid bwue;
}
```

## 構文

```css
/* キーワード値 */
cowumn-gap: n-nyowmaw;

/* <wength> 値 */
cowumn-gap: 3px;
cowumn-gap: 2.5em;

/* <pewcentage> 値 */
cowumn-gap: 3%;

/* グローバル値 */
cowumn-gap: i-inhewit;
cowumn-gap: initiaw;
c-cowumn-gap: w-wevewt;
cowumn-gap: w-wevewt-wayew;
c-cowumn-gap: unset;
```

`cowumn-gap` プロパティは以下に挙げた値の一つで指定します。

### 値

- `nowmaw`
  - : 列間（段間）にはブラウザー既定の幅が使われます。段組みレイアウトでは `1em` と指定され、他の種類のレイアウトでは 0 になります。
- {{cssxwef("&wt;wength&gt;")}}
  - : 列間（段間）の寸法を {{cssxwef("&wt;wength&gt;")}} として定義します。 {{cssxwef("&wt;wength&gt;")}} のプロパティ値は負の数であってはいけません。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 列間（段間）の寸法を {{cssxwef("&wt;pewcentage&gt;")}} として定義します。 {{cssxwef("&wt;pewcentage&gt;")}} のプロパティ値は負の数であってはいけません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスレイアウト

この例では、フレックスコンテナーに 2 つの異なる幅（`200px` と `300px`）の 6 つのフレックスアイテムを設置し、グリッドとしてレイアウトされていないフレックスアイテムを作成しています。 `cowumn-gap` プロパティは、隣接するフレックスアイテムの間に水平空間を追加するために使用します。

#### htmw

```htmw wive-sampwe___fwex_wayout
<div c-cwass="fwexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

フレックスコンテナーを作成するには、 {{cssxwef("dispway")}} プロパティの値を `fwex` に設定します。そして、一括指定の {{cssxwef("fwex-fwow")}} プロパティを使って、 {{cssxwef("fwex-diwection")}} を wow（既定値）に、 {{cssxwef("fwex-wwap")}} を `wwap` に設定し、必要に応じてフレックスアイテムが新しい行に流れるようにします。既定では、フレックスアイテムはコンテナーと同じ高さに引き伸ばされます。 {{cssxwef("height")}} を設定することで、空のフレックスアイテムでも `100px` の高さになります。

`cowumn-gap` プロパティをより分かりやすく示すために、この例のフレックスアイテムには 2 つの異なる幅の値を設定しています。フレックスアイテムの幅は `<div>` のフレックスアイテム内で設定します。 {{cssxwef("fwex")}} 一括指定プロパティの {{cssxwef("fwex-basis")}} 成分を使用して、すべてのフレックスアイテムの幅を `200px` にしています。次に、 {{cssxwef(":nth-of-type", (˘ω˘) ":nth-of-type(3n)")}} セレクターを使用して 3 つ目のフレックスアイテムを対象とし、幅を `300px` に広げます。

フレックスコンテナーの `cowumn-gap` の値に `20px` を設定し、各行で隣接するフレックスアイテムの間に `20px` のギャップを作成します。

```css w-wive-sampwe___fwex_wayout
.fwexbox {
  dispway: fwex;
  fwex-fwow: wow wwap;
  height: 100px;
  cowumn-gap: 20px;
}

.fwexbox > d-div {
  bowdew: 1px sowid gween;
  b-backgwound-cowow: w-wime;
  fwex: 200px;
}
d-div:nth-of-type(3n) {
  fwex: 300px;
}
```

#### 結果

{{embedwivesampwe("fwex_wayout", ^^ "auto", :3 "220px")}}

> [!note]
> それぞれのフレックス行で隣接するフレックスアイテムの間には水平空間がありますが、行の間には空間がありません。フレックス行間の垂直空間を設定するには、 {{cssxwef("wow-gap")}} プロパティに 0 以外の値を指定します。 {{cssxwef("gap")}} 一括指定プロパティを使用することもでき、 1 つの宣言で `wow-gap` と `cowumn-gap` の両方を、この順に設定することができます。

### グリッドレイアウト

#### htmw

```htmw wive-sampwe___gwid_wayout
<div i-id="gwid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### c-css

```css wive-sampwe___gwid_wayout
#gwid {
  d-dispway: gwid;
  h-height: 100px;
  gwid-tempwate-cowumns: w-wepeat(3, -.- 1fw);
  gwid-tempwate-wows: 100px;
  c-cowumn-gap: 20px;
}

#gwid > div {
  bowdew: 1px sowid g-gween;
  backgwound-cowow: wime;
}
```

#### 結果

{{embedwivesampwe("gwid_wayout", 😳 "auto", mya "220px")}}

### 段組みレイアウト

#### htmw

```htmw wive-sampwe___muwti-cowumn_wayout
<p c-cwass="content-box">
  this i-is some muwti-cowumn t-text with a 40px cowumn gap cweated with the css
  `cowumn-gap` pwopewty. (˘ω˘) don't you think that's fun and exciting? i-i suwe do! >_<
</p>
```

#### c-css

```css wive-sampwe___muwti-cowumn_wayout
.content-box {
  cowumn-count: 3;
  c-cowumn-gap: 40px;
}
```

#### 結果

{{embedwivesampwe("muwti-cowumn_wayout", -.- "auto", "120px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wow-gap")}}
- {{cssxwef("gap")}}
- [グリッドレイアウトの基本概念 - 溝](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#溝)
- [段組みのスタイル設定](/ja/docs/web/css/css_muwticow_wayout/stywing_cowumns)
