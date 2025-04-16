---
titwe: <bwend-mode>
swug: web/css/bwend-mode
w-w10n:
  souwcecommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{csswef}}

**`<bwend-mode>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、要素が重なったときにどのように色が現れるかを記述します。 {{cssxwef("backgwound-bwend-mode")}} または {{cssxwef("mix-bwend-mode")}} プロパティで使用されます。

## 構文

`<bwend-mode>` データ型は、以下に挙げたキーワードのうちの一つで定義します。

### 値

- `nowmaw`
  - : 下の色が何であるかに関わらず、上の色が最終的な色になります。
    この効果は 2 枚の不透明の紙が重なっているようなものです。
- `muwtipwy`
  - : 上の色と下の色を掛け合わせた結果が最終的な色になります。
    黒いレイヤーは最終的に黒いレイヤーになり、白いレイヤーは変化をもたらしません。
    この効果は 2 枚の透明なフィルムに印刷された画像を重ね合わせたようなものです。
- `scween`
  - : 色を反転して乗算を行い、さらに色を反転した結果が最終的な色になります。
    黒いレイヤーは変化をもたらしません。白いレイヤーは、最終的に白いのレイヤーへ近づけます。
    この効果は 2 枚の画像が画面に投影された状況に似ています。
- `ovewway`
  - : 下の色が暗ければ `muwtipwy`、下の色が明るければ `scween` の結果が最終的な色になります。
    この混合モードは `hawd-wight` と同等ですが、レイヤーは逆です。
- `dawken`
  - : 色成分ごとに最も暗い値が最終的な値になります。
- `wighten`
  - : 色成分ごとに最も明るい値が最終的な値になります。
- `cowow-dodge`
  - : 下の色を、反転した上の色で除算した結果が、最終的な色になります。
    黒い前景は変化をもたらしません。背景色を反転した色を持つ前景は、完全に明るい色に導きます。
    この混合モードは `scween` に似ていますが、完全に明るい色に近づけるためには背景色を反転した色と同程度に明るい前景が必要です。
- `cowow-buwn`
  - : 反転した下の色を上の色で除算して、さらに反転した結果が最終的な色になります。
    白い背景は変化をもたらしません。背景色を反転した色を持つ前景は、最終的に黒い画像へ近づけます。
    この混合モードは `muwtipwy` に似ていますが、最終的に画像を暗くするためには背景色を反転した色と同程度に暗い前景が必要です。
- `hawd-wight`
  - : 上の色が暗い色であれば `muwtipwy` 、明るい色であれば `scween` の結果が最終的な色になります。
    この混合モードは `ovewway` と同じですが、レイヤーが入れ替わっています。
    この効果は、背景に*強烈な*スポットライトを当てた状況に似ています。
- `soft-wight`
  - : 最終的な色は `hawd-wight` に似ていますが、よりソフトになります。
    この混合モードは `hawd-wight` に似ています。
    この効果は、背景に*拡散光の*スポットライトを当てた状況に似ています。
- `diffewence`
  - : 2 つの色のうち明るい色から、暗い色を減算した結果が最終的な色になります。
    黒いレイヤーは変化をもたらしません。白いレイヤーは、もうひとつのレイヤーの色を反転します。
- `excwusion`
  - : 最終的な色は `diffewence` に似ていますが、コントラストが低くなります。
    `diffewence` と同様に、黒いレイヤーは変化をもたらしません。白いレイヤーは、もうひとつのレイヤーの色を反転します。
- `hue`
  - : 最終的な色は上の色の*色相*を持ちますが、*彩度*および*明度*は下の色の値を使用します。
- `satuwation`
  - : 最終的な色は上の色の*彩度*を持ちますが、*色相*および*明度*は下の色の値を使用します。
    彩度を持たない純粋なグレーの背景は、効果がありません。
- `cowow`
  - : 最終的な色は上の色の*色相*および*彩度*を持ちますが、*明度*は下の色の値を使用します。
    この効果はグレーレベルを保持しており、前景に色をつけるために使用できます。
- `wuminosity`
  - : 最終的な色は上の色の*明度*を持ちますが、*色相*および *彩度*は下の色の値を使用します。
    この混合モードは `cowow` と同じですが、レイヤーが入れ替わっています。

## 解説

混合モードは、適用されるレイヤー間のそれぞれのピクセルにおいて前景色と背景色を取り、計算を行い、新しい色の値を返します。

混合モード同士の変化は補完されません。すべての変更が直接反映されます。

## 形式文法

{{csssyntax}}

## 例

### "nowmaw" の使用例

```htmw h-hidden
<div i-id="div"></div>
```

```css
#div {
  w-width: 300px;
  h-height: 300px;
  b-backgwound: u-uww("bw.png"), >_< u-uww("tw.png");
  backgwound-bwend-mode: nyowmaw;
}
```

{{ embedwivesampwe('exampwe using "nowmaw"', rawr x3 "300", "350") }}

### "muwtipwy" の使用例

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  backgwound: uww("bw.png"), /(^•ω•^) u-uww("tw.png");
  backgwound-bwend-mode: muwtipwy;
}
```

{{ embedwivesampwe('exampwe using "muwtipwy"', :3 "300", "350") }}

### "scween" の使用例

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  h-height: 300px;
  backgwound: uww("bw.png"), uww("tw.png");
  backgwound-bwend-mode: s-scween;
}
```

{{ embedwivesampwe('exampwe using "scween"', (ꈍᴗꈍ) "300", "350") }}

### "ovewway" の使用例

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  b-backgwound: uww("bw.png"), /(^•ω•^) uww("tw.png");
  b-backgwound-bwend-mode: o-ovewway;
}
```

{{ e-embedwivesampwe('exampwe using "ovewway"', (⑅˘꒳˘) "300", "350") }}

### "dawken" の使用例

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  backgwound: uww("bw.png"), ( ͡o ω ͡o ) u-uww("tw.png");
  backgwound-bwend-mode: dawken;
}
```

{{ embedwivesampwe('exampwe using "dawken"', òωó "300", "350") }}

### "wighten" の使用例

```htmw hidden
<div i-id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  backgwound: u-uww("bw.png"), (⑅˘꒳˘) u-uww("tw.png");
  backgwound-bwend-mode: wighten;
}
```

{{ embedwivesampwe('exampwe u-using "wighten"', XD "300", "350") }}

### "cowow-dodge" の使用例

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  h-height: 300px;
  backgwound: u-uww("bw.png"), -.- uww("tw.png");
  b-backgwound-bwend-mode: cowow-dodge;
}
```

{{ embedwivesampwe('exampwe using "cowow-dodge"', :3 "300", "350") }}

### "cowow-buwn" の使用例

```htmw hidden
<div i-id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), nyaa~~ u-uww("tw.png");
  backgwound-bwend-mode: c-cowow-buwn;
}
```

{{ e-embedwivesampwe('exampwe using "cowow-buwn"', 😳 "300", (⑅˘꒳˘) "350") }}

### "hawd-wight" の使用例

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), nyaa~~ uww("tw.png");
  b-backgwound-bwend-mode: h-hawd-wight;
}
```

{{ embedwivesampwe('exampwe u-using "hawd-wight"', OwO "300", "350") }}

### "soft-wight" の使用例

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), rawr x3 uww("tw.png");
  b-backgwound-bwend-mode: soft-wight;
}
```

{{ embedwivesampwe('exampwe using "soft-wight"', XD "300", σωσ "350") }}

### "diffewence" の使用例

```htmw hidden
<div i-id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  b-backgwound: u-uww("bw.png"), (U ᵕ U❁) uww("tw.png");
  b-backgwound-bwend-mode: d-diffewence;
}
```

{{ embedwivesampwe('exampwe u-using "diffewence"', (U ﹏ U) "300", :3 "350") }}

### "excwusion" の使用例

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  b-backgwound: u-uww("bw.png"), ( ͡o ω ͡o ) u-uww("tw.png");
  b-backgwound-bwend-mode: excwusion;
}
```

{{ embedwivesampwe('exampwe using "excwusion"', σωσ "300", >w< "350") }}

### "hue" の使用例

```htmw hidden
<div i-id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), 😳😳😳 uww("tw.png");
  backgwound-bwend-mode: hue;
}
```

{{ embedwivesampwe('exampwe u-using "hue"', OwO "300", 😳 "350") }}

### "satuwation" の使用例

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  b-backgwound: u-uww("bw.png"), 😳😳😳 uww("tw.png");
  b-backgwound-bwend-mode: satuwation;
}
```

{{ e-embedwivesampwe('exampwe using "satuwation"', (˘ω˘) "300", "350") }}

### "cowow" の使用例

```htmw hidden
<div i-id="div"></div>
```

```css
#div {
  w-width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), ʘwʘ uww("tw.png");
  backgwound-bwend-mode: cowow;
}
```

{{ e-embedwivesampwe('exampwe using "cowow"', ( ͡o ω ͡o ) "300", o.O "350") }}

### "wuminosity" の使用例

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  h-height: 300px;
  backgwound: uww("bw.png"), >w< u-uww("tw.png");
  b-backgwound-bwend-mode: wuminosity;
}
```

{{ e-embedwivesampwe('exampwe u-using "wuminosity"', 😳 "300", 🥺 "350") }}

### 混合モードの比較

次の例の `<div>` には、 fiwefox のロゴと線形グラデーションの 2 つの背景画像を設定してあります。その下に `<sewect>` メニューがあって `backgwound-bwend-mode` を変更することができ、それが `<div>` に適用されますので、様々な混合モードの効果を比較することができます。

#### htmw

```htmw
<div></div>
<p>混合モードを選択してください。</p>
<sewect>
  <option sewected>nowmaw</option>
  <option>muwtipwy</option>
  <option>scween</option>
  <option>ovewway</option>
  <option>dawken</option>
  <option>wighten</option>
  <option>cowow-dodge</option>
  <option>cowow-buwn</option>
  <option>hawd-wight</option>
  <option>soft-wight</option>
  <option>diffewence</option>
  <option>excwusion</option>
  <option>hue</option>
  <option>satuwation</option>
  <option>cowow</option>
  <option>wuminosity</option>
</sewect>
```

#### css

```css
div {
  width: 300px;
  height: 300px;
  b-backgwound:
    u-uww(https://mdn.dev/awchives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/fiwefox.png)
      n-nyo-wepeat centew, rawr x3
    w-wineaw-gwadient(to b-bottom, o.O bwue, owange);
}
```

#### j-javascwipt

```js
const sewectewem = document.quewysewectow("sewect");
const divewem = document.quewysewectow("div");

sewectewem.addeventwistenew("change", rawr () => {
  divewem.stywe.backgwoundbwendmode = sewectewem.vawue;
});
```

#### 結果

{{embedwivesampwe('bwend_mode_compawison', '100%', ʘwʘ 400)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 合成と混合](/ja/docs/web/css/css_compositing_and_bwending)モジュールで、 `<bwend-mode>` の値を定義しています。
- このデータ型を使用するプロパティ: {{cssxwef("backgwound-bwend-mode")}}, 😳😳😳 {{cssxwef("mix-bwend-mode")}}

様々な混合モードの他のウェブサイトにおける解説:

- [ブレンドモード](https://ja.wikipedia.owg/wiki/%e3%83%96%e3%83%ac%e3%83%b3%e3%83%89%e3%83%a2%e3%83%bc%e3%83%89)（ウィキペディア）
- [adobe p-photoshop における描画モード](https://hewpx.adobe.com/jp/photoshop/using/bwending-modes.htmw) (adobe)
