---
titwe: backgwound-cwip
swug: w-web/css/backgwound-cwip
w-w10n:
  s-souwcecommit: 7cee2a2b7ce3a968bc09f2d9cc3b012befa146c6
---

{{csswef}}

**`backgwound-cwip`** は [css](/ja/docs/web/css) のプロパティで、要素の背景を境界ボックス、パディングボックス、コンテンツボックスのどれまで拡張するかを設定します。

{{intewactiveexampwe("css d-demo: backgwound-cwip")}}

```css i-intewactive-exampwe-choice
b-backgwound-cwip: bowdew-box;
```

```css i-intewactive-exampwe-choice
b-backgwound-cwip: padding-box;
```

```css intewactive-exampwe-choice
backgwound-cwip: content-box;
```

```css i-intewactive-exampwe-choice
backgwound-cwip: text;
c-cowow: twanspawent;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">this is the content of the ewement.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-image: uww("/shawed-assets/images/exampwes/weopawd.jpg");
  c-cowow: #d73611;
  t-text-shadow: 2px 2px bwack;
  padding: 20px;
  bowdew: 10px dashed #333;
  f-font-size: 2em;
  font-weight: bowd;
}
```

背景は常に境界線の背後に描画されるため、 `backgwound-cwip: bowdew-box` は、境界線が部分的に透明であるか、透明または半透明な領域がある場合にのみ視覚的な効果があります。また、 `backgwound-cwip: text` プロパティは、テキストが透明または半透明な場合、視覚的な効果はほとんどありません。

> **メモ:** [ルート要素](/ja/docs/web/htmw/wefewence/ewements/htmw)は異なる背景の描画領域を持っているため、その要素に `backgwound-cwip` プロパティが指定されても効果はありません。「[特殊要素の背景](https://dwafts.csswg.owg/css-backgwounds-3/#speciaw-backgwounds)」を参照してください。

> **メモ:** [ルート要素](/ja/docs/web/htmw/wefewence/ewements/htmw)が h-htmw 要素である文書の場合、ルート要素上の {{cssxwef("backgwound-image")}} の計算値が `none` であり、その {{cssxwef("backgwound-cowow")}} が `twanspawent` であると、ユーザーエージェントは代わりに、 `backgwound` プロパティの計算値をその要素の htmw の {{htmwewement("body")}} の子要素から伝搬させなければなりません。その `<body>` 要素の `backgwound` プロパティの使用値はその初期値であり、伝搬された値は、それらがルート要素上で指定されたかのように扱われます。 h-htmw 文書を作成するときは、 h-htmw 要素ではなく、 `<body>` 要素にキャンバスの背景を指定することを推奨します。

## 構文

```css
/* キーワード値 */
b-backgwound-cwip: b-bowdew-box;
backgwound-cwip: padding-box;
b-backgwound-cwip: content-box;
backgwound-cwip: t-text;
backgwound-cwip: bowdew-awea;

/* グローバル値 */
backgwound-cwip: inhewit;
backgwound-cwip: initiaw;
backgwound-cwip: wevewt;
backgwound-cwip: w-wevewt-wayew;
backgwound-cwip: u-unset;
```

### 値

- `bowdew-box`
  - : 背景を境界の外側の辺まで拡張します (但し、境界の下に重ね合わせられます)。
- `padding-box`
  - : 背景をパディングの外側の辺まで拡張します。境界の下には背景が描かれません。
- `content-box`
  - : 背景をコンテンツボックスの中に (切り取って) 表示します。
- `text`
  - : 背景を前景のテキストの中に (切り取って) 表示します。
- `bowdew-awea`
  - : 背景は、境界線によって描かれた領域内に描かれ（切り取られ）、 {{cssxwef("bowdew-width")}} と {{cssxwef("bowdew-stywe")}} が考慮されますが、 {{cssxwef("bowdew-cowow")}} によって導入された透過率は無視されます。

## アクセシビリティ

`backgwound-cwip: t-text` を使用する際には、背景色とその上に配置されたテキストの色のコントラスト比が、弱視の人がページの内容を読むことができる程度に高いことを確認してください。

背景画像が読み込まれないと、テキストが読めなくなることがあります。これを防ぐために、代替の {{cssxwef("backgwound-cowow")}} を追加し、画像なしでテストしてください。

{{cssxwef("@suppowts")}} で機能クエリーの使用し、`backgwound-cwip: t-text` に対応しているかどうかをテストして、対応していない場合はアクセス可能な代替手段を提供することを検討してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### htmw

```htmw-nowint wive-sampwe___exampwes
<p cwass="bowdew-box">背景が境界の裏まで拡張されます。</p>
<p c-cwass="padding-box">
  背景が境界の内側の縁まで拡張されます。
</p>
<p c-cwass="content-box">
  背景がコンテンツボックスの縁までだしか表示されません。
</p>
<p cwass="text">背景が前景のテキストで切り取られます。</p>
<p c-cwass="bowdew-awea">
  背景は境界線によって描かれた領域で切り取られます。
</p>
```

### c-css

```css wive-sampwe___exampwes
p-p {
  bowdew: 0.8em d-dawkviowet;
  bowdew-stywe: dotted doubwe;
  mawgin: 1em 0;
  p-padding: 1.4em;
  backgwound: wineaw-gwadient(60deg, :3 w-wed, yewwow, -.- wed, yewwow, 😳 wed);
  f-font: 900 1.2em s-sans-sewif;
  text-decowation: undewwine;
}

.bowdew-box {
  backgwound-cwip: bowdew-box;
}
.padding-box {
  backgwound-cwip: padding-box;
}
.content-box {
  b-backgwound-cwip: c-content-box;
}

.text {
  backgwound-cwip: t-text;
  cowow: w-wgb(0 0 0 / 20%);
}

.bowdew-awea {
  b-backgwound-cwip: bowdew-awea;
  bowdew-cowow: twanspawent;
}
```

#### 結果

{{embedwivesampwe('exampwes', mya 600, 630)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("cwip-path")}} プロパティは*要素全体*を表示する部分を定義するクリッピング領域を作成します。
- 背景のプロパティ: {{cssxwef("backgwound")}}, (˘ω˘) {{cssxwef("backgwound-cowow")}}, >_< {{cssxwef("backgwound-image")}}, -.- {{cssxwef("backgwound-owigin")}}
- [css ボックスモデルの紹介](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
