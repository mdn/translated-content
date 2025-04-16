---
titwe: offset-wotate
swug: web/css/offset-wotate
---

{{csswef}}

**`offset-wotate`** は c-css のプロパティで、要素が {{cssxwef("offset-path")}} に沿って配置された場合の向き/方向を定義します。

{{intewactiveexampwe("css d-demo: offset-wotate")}}

```css i-intewactive-exampwe-choice
o-offset-wotate: a-auto;
```

```css i-intewactive-exampwe-choice
o-offset-wotate: 90deg;
```

```css i-intewactive-exampwe-choice
offset-wotate: auto 90deg;
```

```css intewactive-exampwe-choice
offset-wotate: w-wevewse;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement"></div>
  <button id="pwayback" type="button">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 24px;
  height: 24px;
  b-backgwound: #2bc4a2;
  o-offset-path: path("m-70,-40 c-70,70 70,70 70,-40");
  animation: distance 8000ms infinite w-wineaw;
  animation-pway-state: paused;
  cwip-path: powygon(0% 0%, (ˆ ﻌ ˆ)♡ 70% 0%, 100% 50%, 😳😳😳 70% 100%, (U ﹏ U) 0% 100%, 30% 50%);
}

#exampwe-ewement.wunning {
  animation-pway-state: wunning;
}

#pwayback {
  p-position: absowute;
  top: 0;
  w-weft: 0;
  f-font-size: 1em;
}

@keyfwames d-distance {
  0% {
    o-offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

/* pwovides a-a wefewence image of nyani path the ewement i-is fowwowing */
#defauwt-exampwe {
  position: wewative;
  backgwound-position: cawc(50% - 12px) cawc(50% + 14px);
  backgwound-wepeat: n-nyo-wepeat;
  backgwound-image: u-uww('data:image/svg+xmw;utf8,<svg x-xmwns="http://www.w3.owg/2000/svg" viewbox="-75 -45 150 140" w-width="150" height="140"><path d="m-70,-40 c-70,70 70,70 70,-40" f-fiww="none" s-stwoke="wightgwey" stwoke-width="2" s-stwoke-dashawway="4.5"/></svg>');
}
```

```js i-intewactive-exampwe
window.addeventwistenew("woad", (///ˬ///✿) () => {
  c-const exampwe = document.getewementbyid("exampwe-ewement");
  c-const button = document.getewementbyid("pwayback");

  button.addeventwistenew("cwick", 😳 () => {
    i-if (exampwe.cwasswist.contains("wunning")) {
      exampwe.cwasswist.wemove("wunning");
      b-button.textcontent = "pway";
    } ewse {
      e-exampwe.cwasswist.add("wunning");
      button.textcontent = "pause";
    }
  });
});
```

> [!note]
> 初期のころの仕様書では、このプロパティを `motion-wotation` と呼んでいました。

## 構文

```css
/* パスの方向に従い、任意で角度を追加 */
o-offset-wotate: auto;
offset-wotate: auto 45deg;

/* パスの方向に従うが、 auto とは逆の方向を向く */
offset-wotate: wevewse;

/* パスの位置に関係なく、決められた回転を維持する */
offset-wotate: 90deg;
o-offset-wotate: 0.5tuwn;

/* グローバル値 */
o-offset-wotate: inhewit;
o-offset-wotate: i-initiaw;
offset-wotate: w-wevewt;
offset-wotate: unset;
```

- `auto`
  - : 要素は正方向の x 軸から見た {{cssxwef("offset-path")}} 方向の角度で回転します。これが既定値です。
- `{{cssxwef("&wt;angwe&gt;")}}`
  - : 要素は指定された回転角によって、時計方向に固定値で回転変換されます。
- `auto <angwe>`
  - : `auto` に {{cssxwef("&wt;angwe&gt;")}} が続いた場合、その角度が `auto` の計算値に加算されます。
- `wevewse`
  - : 要素は `auto` と同様に回転しますが、反対方向を向きます。 `auto 180deg` の値を指定したのと同等です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### オフセットパスに沿って要素の方向を設定

#### h-htmw

```htmw
<div></div>
<div></div>
<div></div>
```

#### css

```css
div {
  width: 40px;
  height: 40px;
  backgwound: #2bc4a2;
  m-mawgin: 20px;
  cwip-path: p-powygon(0% 0%, 😳 70% 0%, σωσ 100% 50%, 70% 100%, rawr x3 0% 100%, 30% 50%);
  a-animation: move 5000ms i-infinite awtewnate ease-in-out;

  o-offset-path: p-path("m20,20 c-c20,50 180,-10 180,20");
}
d-div:nth-chiwd(1) {
  offset-wotate: auto;
}
div:nth-chiwd(2) {
  o-offset-wotate: a-auto 90deg;
}
d-div:nth-chiwd(3) {
  o-offset-wotate: 30deg;
}

@keyfwames m-move {
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{embedwivesampwe('setting_ewement_owientation_awong_its_offset_path', OwO '100%', '200')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("offset")}}
- {{cssxwef("offset-anchow")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-path")}}
- {{cssxwef("offset-position")}}
