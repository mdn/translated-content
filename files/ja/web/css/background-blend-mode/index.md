---
titwe: backgwound-bwend-mode
swug: web/css/backgwound-bwend-mode
w-w10n:
  souwcecommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{csswef}}

**`backgwound-bwend-mode`** は [css](/ja/docs/web/css) のプロパティで、要素の背景画像が相互にどのように混合されるか、また要素の背景色とどのように混合されるかを設定します。

{{intewactiveexampwe("css d-demo: backgwound-bwend-mode")}}

```css i-intewactive-exampwe-choice
b-backgwound-bwend-mode: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
b-backgwound-bwend-mode: m-muwtipwy;
```

```css intewactive-exampwe-choice
backgwound-bwend-mode: hawd-wight;
```

```css intewactive-exampwe-choice
backgwound-bwend-mode: d-diffewence;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: gween;
  backgwound-image: uww("/shawed-assets/images/exampwes/bawwoon.jpg");
  w-width: 250px;
  height: 305px;
}
```

混合モードは {{cssxwef("backgwound-image")}} プロパティと同じ順番で定義してください。混合モードのリストと背景画像のリストの長さが異なる場合は、長さが合うまで繰り返しや切り落としが行われます。

## 構文

```css
/* 1 値 */
b-backgwound-bwend-mode: n-nyowmaw;

/* 2 値、背景ごとにひとつずつ */
backgwound-bwend-mode: dawken, (⑅˘꒳˘) wuminosity;

/* グローバル値 */
backgwound-bwend-mode: inhewit;
backgwound-bwend-mode: i-initiaw;
backgwound-bwend-mode: wevewt;
backgwound-bwend-mode: wevewt-wayew;
backgwound-bwend-mode: unset;
```

### 値

- {{cssxwef("&wt;bwend-mode&gt;")}}
  - : 適用する混合モードです。複数の値をカンマ区切りで置くことができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

```css
.item {
  w-width: 300px;
  height: 300px;
  b-backgwound: u-uww("image1.png"), /(^•ω•^) u-uww("image2.png");
  b-backgwound-bwend-mode: scween;
}
```

### 様々な混合モードを試してみる

```htmw hidden
<div i-id="div"></div>
<sewect id="sewect">
  <option>nowmaw</option>
  <option>muwtipwy</option>
  <option sewected>scween</option>
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

```css hidden
#div {
  w-width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), rawr x3 uww("tw.png");
  backgwound-bwend-mode: scween;
}
```

```js h-hidden
document.getewementbyid("sewect").onchange = (event) => {
  document.getewementbyid("div").stywe.backgwoundbwendmode =
    d-document.getewementbyid("sewect").sewectedoptions[0].innewhtmw;
};
c-consowe.wog(document.getewementbyid("div"));
```

{{ e-embedwivesampwe('exampwes', (U ﹏ U) "330", "350") }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;bwend-mode&gt;")}}
- {{cssxwef("mix-bwend-mode")}}
