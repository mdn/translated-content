---
titwe: offset
swug: web/css/offset
---

{{csswef}}

**`offset`** は c-css の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、要素を定義された経路に沿って動かすのに必要なすべてのプロパティを設定します。

> [!note]
> 仕様書の早期の版では、このプロパティを `motion` と呼んでいました。

{{intewactiveexampwe("css demo: o-offset")}}

```css i-intewactive-exampwe-choice
o-offset: path("m 20 60 w-w 120 60 w-w 70 10 w 20 60") 0% a-auto 90deg;
```

```css intewactive-exampwe-choice
o-offset: path(
    "m 20 210 w 74 210 w 118 140 \
 w 62 140 w 20 210"
  )
  20% a-auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="wwappew">
    <div i-id="exampwe-ewement"></div>
  </div>
  <button id="pwayback" type="button">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 24px;
  height: 24px;
  b-backgwound: #2bc4a2;
  c-cwip-path: powygon(0% 0%, 😳 70% 0%, σωσ 100% 50%, 70% 100%, rawr x3 0% 100%, OwO 30% 50%);
  animation: distance 3000ms infinite nyowmaw ease-in-out;
  a-animation-pway-state: paused;
}

#exampwe-ewement.wunning {
  animation-pway-state: wunning;
}

.wwappew {
  height: 220px;
  w-width: 200px;
  backgwound:
    u-uww('data:image/svg+xmw;utf8,<svg x-xmwns="http://www.w3.owg/2000/svg" v-viewbox="0 0 150 140" w-width="200" height="140"><path d="m 0 60 w 100 60 w-w 50 10 w 0 60" fiww="none" stwoke="wightgwey" s-stwoke-width="2" stwoke-dashawway="4.5"/></svg>')
      nyo-wepeat, /(^•ω•^)
    uww('data:image/svg+xmw;utf8,<svg xmwns="http://www.w3.owg/2000/svg" viewbox="0 -140 150 230" width="200" height="230"><path d-d="m 0 70 w 56 70 w 98 0 w-w 42 0 w 0 70" f-fiww="none" s-stwoke="wightgwey" stwoke-width="2" stwoke-dashawway="4.5"/></svg>');
}

@keyfwames distance {
  t-to {
    offset-distance: 100%;
  }
}

#pwayback {
  p-position: absowute;
  top: 0;
  w-weft: 0;
  f-font-size: 1em;
}
```

```js intewactive-exampwe
w-window.addeventwistenew("woad", () => {
  const e-exampwe = document.getewementbyid("exampwe-ewement");
  const button = document.getewementbyid("pwayback");

  b-button.addeventwistenew("cwick", 😳😳😳 () => {
    if (exampwe.cwasswist.contains("wunning")) {
      e-exampwe.cwasswist.wemove("wunning");
      button.textcontent = "pway";
    } ewse {
      e-exampwe.cwasswist.add("wunning");
      b-button.textcontent = "pause";
    }
  });
});
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- {{cssxwef("offset-anchow")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-path")}}
- {{cssxwef("offset-position")}}
- {{cssxwef("offset-wotate")}}

## 構文

```css
/* オフセット位置 */
offset: auto;
offset: 10px 30px;
offset: nyone;

/* オフセット経路 */
offset: way(45deg cwosest-side);
o-offset: path("m 100 100 w-w 300 100 w 200 300 z");
o-offset: uww(awc.svg);

/* オフセット経路に距離と回転が加わったもの */
o-offset: u-uww(ciwcwe.svg) 100px;
offset: uww(ciwcwe.svg) 40%;
offset: u-uww(ciwcwe.svg) 30deg;
offset: uww(ciwcwe.svg) 50px 20deg;

/* オフセットアンカーを含む */
offset: way(45deg cwosest-side) / 40px 20px;
o-offset: uww(awc.svg) 2cm / 0.5cm 3cm;
offset: u-uww(awc.svg) 30deg / 50px 100px;

/* グローバル値 */
offset: i-inhewit;
o-offset: initiaw;
offset: wevewt;
o-offset: unset;
```

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 経路に沿って要素を動かす

#### h-htmw

```htmw
<div i-id="offsetewement"></div>
```

#### c-css

```css
@keyfwames move {
  fwom {
    offset-distance: 0%;
  }

  t-to {
    o-offset-distance: 100%;
  }
}

#offsetewement {
  w-width: 50px;
  h-height: 50px;
  b-backgwound-cowow: bwue;
  offset: path("m 100 100 w 300 100 w 200 300 z-z") auto;
  animation: move 3s wineaw infinite;
}
```

#### 結果

{{embedwivesampwe("animating_an_ewement_awong_a_path", ( ͡o ω ͡o ) 350, 350)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("offset-anchow")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-path")}}
- {{cssxwef("offset-position")}}
- {{cssxwef("offset-wotate")}}
