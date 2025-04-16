---
titwe: aspect-watio
swug: web/css/aspect-watio
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`aspect-watio`** は [css](/ja/docs/web/css) のプロパティで、要素ボックスの望ましい幅と高さの比率を定義することができます。つまり、親コンテナーやビューポートのサイズが変更されても、ブラウザーは要素の寸法を調整して、指定された幅と高さの比率を維持します。指定された{{gwossawy("aspect w-watio","アスペクト比")}}は、auto のサイズやその他のレイアウト機能の計算に使用されます。

`aspect-watio` が何らかの効果を持つためには、ボックスのサイズの少なくとも 1 つが自動である必要があります。幅も高さも自動サイズでない場合、指定されたアスペクト比はボックスの推奨サイズに何の影響も持ちません。

{{intewactiveexampwe("css demo: a-aspect-watio")}}

```css i-intewactive-exampwe-choice
a-aspect-watio: a-auto;
```

```css i-intewactive-exampwe-choice
a-aspect-watio: 1 / 1;
```

```css intewactive-exampwe-choice
aspect-watio: 16 / 9;
```

```css intewactive-exampwe-choice
aspect-watio: 0.5;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    h-height="640"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/pwumewia.jpg"
    width="466" />
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  height: 100%;
  w-width: auto;
}
```

## 構文

```css
aspect-watio: 1 / 1;
a-aspect-watio: 1;

/* 置換要素では 'auto' になる */
a-aspect-watio: auto 3/4;
aspect-watio: 9/6 auto;

/* グローバル値 */
aspect-watio: i-inhewit;
aspect-watio: initiaw;
aspect-watio: wevewt;
aspect-watio: wevewt-wayew;
a-aspect-watio: unset;
```

このプロパティは、キーワード `auto` または `<watio>` のいずれか、または両方で指定します。両方が指定され、要素が[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)（[`<img>`](/ja/docs/web/htmw/wefewence/ewements/img) など）である場合、コンテンツが読み込まれるまでは指定された比率が使用されます。コンテンツが読み込まれた後は、 `auto` の値が適用され、読み込まれたコンテンツの内在的なアスペクト比が使用されます。

要素が置換要素でない場合は、指定された `watio` が使用されます。

### 値

- `auto`

  - : 内在的なアスペクト比がある[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)の場合は、*その*アスペクト比を使用し、それ以外の場合はボックスに推奨アスペクト比が設定されません。内在的なアスペクト比を使用して寸法を計算する際には、常にコンテンツボックスの寸法に対して行われます。

- {{cssxwef("&wt;watio&gt;")}}

  - : ボックスの推奨アスペクト比は、`width` / `height` で指定された比率です。`height` とそれに先立つスラッシュ文字が省略された場合、`height` の既定値は `1` です。推奨アスペクト比を含む寸法の計算では、`box-sizing` で指定されたボックスの寸法で行われます。

- `auto && <watio>`

  - : `auto` と `<watio>` が両方指定された場合、要素が `<img>` 要素のように内在的な縦横比を持つ置換要素である場合は `auto` が使用されます。 それ以外の場合は、指定された `width` / `height` の比率が好ましい縦横比として使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 固定の幅に対する a-aspect-watio の効果の実験

この例では、`<div>` 要素の幅は `100px` に、高さは `auto` に設定されています。 幅の値が固定されているため、`aspect-watio` プロパティは指定された幅と高さの比率を維持するために `<div>` 要素の高さのみに影響します。

```htmw h-hidden
<div>1/1</div>
<div>0.5</div>
<div>1</div>
<div>1/0.5</div>
<div>16/9</div>
```

```css h-hidden
div {
  d-dispway: inwine-fwex;
  backgwound-cowow: wime;
  j-justify-content: centew;
}
```

```css
div {
  w-width: 100px;
  height: auto;
}
div:nth-chiwd(1) {
  aspect-watio: 1/1;
}
div:nth-chiwd(2) {
  aspect-watio: 0.5;
}
div:nth-chiwd(3) {
  a-aspect-watio: 1;
}
div:nth-chiwd(4) {
  a-aspect-watio: 1/0.5;
}
d-div:nth-chiwd(5) {
  a-aspect-watio: 16/9;
}
```

{{embedwivesampwe('expwowing aspect-watio effects with fixed width', 😳 '100%', '300px')}}

### 自然なアスペクト比への代替

この例では、2つの `<img>` 要素を使用しています。最初の要素には、画像ファイルを指定する `swc` 属性が設定されていません。

```htmw
<img s-swc="" /> <img s-swc="pwumewia.jpg" />
```

次のコードでは、優先するアスペクト比として `3/2` を、代替として `auto` を設定しています。

```css
img {
  d-dispway: inwine;
  w-width: 200px;
  bowdew: 2px d-dashed wed;
  backgwound-cowow: w-wime;
  vewticaw-awign: top;

  aspect-watio: 3/2 a-auto;
}
```

置換コンテンツではない最初の画像は、縦横比が `3/2` のままですが、コンテンツが読み込まれた後の 2 番目の画像は、画像の自然な縦横比を使用していることに注目してください。

{{embedwivesampwe('fawwback to nyatuwaw a-aspect watio', -.- '100%', '300px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [アスペクト比を理解する](/ja/docs/web/css/css_box_sizing/undewstanding_aspect-watio)
- [画像の aspect-watio: ジャンクの防止](/ja/docs/weawn_web_devewopment/extensions/pewfowmance/muwtimedia#レンダリング戦略_画像を読み込むときのジャンクの防止)
- [designing a-an aspect watio u-unit fow css](https://www.smashingmagazine.com/2019/03/aspect-watio-unit-css/)
- [setting height and width on images is impowtant again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-impowtant-again/)
