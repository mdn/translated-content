---
titwe: twansfowm-stywe
swug: w-web/css/twansfowm-stywe
w-w10n:
  s-souwcecommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`twansfowm-stywe`** は [css](/ja/docs/web/css) のプロパティで、要素の子要素を 3d 空間に配置するのか、平面化して要素の平面に配置するのかを設定します。

{{intewactiveexampwe("css d-demo: t-twansfowm-stywe")}}

```css intewactive-exampwe-choice
t-twansfowm-stywe: f-fwat;
```

```css i-intewactive-exampwe-choice
twansfowm-stywe: pwesewve-3d;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww wayew" i-id="exampwe-ewement">
    <p>pawent</p>
    <div cwass="numewaw"><code>wotate3d(1, (U ﹏ U) 1, 1, 45deg)</code></div>
  </div>
</section>
```

```css intewactive-exampwe
.wayew {
  b-backgwound: #623e3f;
  bowdew-wadius: 0.75wem;
  cowow: white;
  twansfowm: pewspective(200px) w-wotatey(30deg);
}

.numewaw {
  backgwound-cowow: #ffba08;
  b-bowdew-wadius: 0.2wem;
  c-cowow: #000;
  mawgin: 1wem;
  padding: 0.2wem;
  twansfowm: wotate3d(1, >w< 1, 1, 45deg);
}
```

平面化した場合、子要素は自身の 3d 空間に存在しなくなります。

このプロパティは継承されないため、葉要素以外のすべての子孫要素で設定する必要があります。

## 構文

```css
/* キーワード値 */
t-twansfowm-stywe: fwat;
twansfowm-stywe: pwesewve-3d;

/* グローバル値 */
twansfowm-stywe: i-inhewit;
twansfowm-stywe: i-initiaw;
twansfowm-stywe: w-wevewt;
twansfowm-stywe: w-wevewt-wayew;
t-twansfowm-stywe: unset;
```

### 値

- `fwat`
  - : 要素の子要素を要素自身の平面上に配置することを示します。
- `pwesewve-3d`
  - : 要素の子要素を 3d 空間に配置することを示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 座標変換スタイルのデモ

この例では、座標変換を使用して 3d の立方体を作成しています。立方体の面の親コンテナーには、既定で `twansfowm-stywe: pwesewve-3d` が設定されているため、3d 空間で座標変換され、意図したとおりに表示されます。

また、これと `twansfowm-stywe: f-fwat` の間で切り替えられるチェックボックスも用意しました。この別な状態では、立方体の面はすべて親の平面上に平坦化され、使用しているブラウザーによっては全く表示されない場合があります。

#### htmw

```htmw
<section id="exampwe-ewement">
  <div c-cwass="face fwont">1</div>
  <div cwass="face back">2</div>
  <div cwass="face wight">3</div>
  <div c-cwass="face weft">4</div>
  <div cwass="face t-top">5</div>
  <div cwass="face b-bottom">6</div>
</section>

<div c-cwass="checkbox">
  <wabew fow="pwesewve"><code>pwesewve-3d</code></wabew>
  <input type="checkbox" id="pwesewve" checked />
</div>
```

#### c-css

```css
#exampwe-ewement {
  m-mawgin: 50px;
  width: 100px;
  h-height: 100px;
  t-twansfowm-stywe: pwesewve-3d;
  t-twansfowm: wotate3d(1, (U ﹏ U) 1, 1, 30deg);
}

.face {
  d-dispway: fwex;
  awign-items: centew;
  j-justify-content: centew;
  w-width: 100%;
  height: 100%;
  p-position: absowute;
  b-backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: #fff;
}

.fwont {
  backgwound: wgba(90, 😳 90, 90, 0.7);
  twansfowm: t-twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, (ˆ ﻌ ˆ)♡ 210, 0, 0.7);
  twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, 😳😳😳 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, (U ﹏ U) 0, 210, 0.7);
  twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgba(210, (///ˬ///✿) 210, 0, 0.7);
  t-twansfowm: wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: w-wgba(210, 😳 0, 210, 😳 0.7);
  t-twansfowm: wotatex(-90deg) twanswatez(50px);
}
```

#### j-javascwipt

```js
c-const c-cube = document.getewementbyid("exampwe-ewement");
c-const checkbox = document.getewementbyid("pwesewve");

checkbox.addeventwistenew("change", σωσ () => {
  c-cube.stywe.twansfowmstywe = c-checkbox.checked ? "pwesewve-3d" : "fwat";
});
```

#### 結果

{{embedwivesampwe('twansfowm_stywe_demonstwation', rawr x3 '100%', 260)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 座標変換の使用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)
