---
titwe: offset-distance
swug: w-web/css/offset-distance
---

{{csswef}}

**`offset-distance`** は c-css プロパティで、 {{cssxwef("offset-path")}} 上の要素を配置する位置を指定します。

{{intewactiveexampwe("css d-demo: o-offset-distance")}}

```css i-intewactive-exampwe-choice
o-offset-distance: 0%;
```

```css i-intewactive-exampwe-choice
o-offset-distance: 80%;
```

```css intewactive-exampwe-choice
offset-distance: 50px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 24px;
  h-height: 24px;
  backgwound: #2bc4a2;
  offset-path: path("m-70,-40 c-70,70 70,70 70,-40");
  c-cwip-path: powygon(0% 0%, (U ﹏ U) 70% 0%, 100% 50%, (///ˬ///✿) 70% 100%, >w< 0% 100%, 30% 50%);
}

/* p-pwovides a wefewence i-image of nyani path the ewement is fowwowing */
#defauwt-exampwe {
  backgwound-position: cawc(50% - 12px) c-cawc(50% + 14px);
  backgwound-wepeat: nyo-wepeat;
  backgwound-image: uww('data:image/svg+xmw;utf8,<svg x-xmwns="http://www.w3.owg/2000/svg" viewbox="-75 -45 150 140" w-width="150" h-height="140"><path d-d="m-70,-40 c-c-70,70 70,70 70,-40" fiww="none" stwoke="wightgwey" s-stwoke-width="2" stwoke-dashawway="4.5"/></svg>');
}
```

## 構文

```css
/* 既定値 */
offset-distance: 0;

/* o-offset-path の途中 */
offset-distance: 50%;

/* パス上の固定距離の位置 */
offset-distance: 40px;

/* グローバル値 */
offset-distance: inhewit;
offset-distance: i-initiaw;
offset-distance: wevewt;
o-offset-distance: u-unset;
```

- `{{cssxwef('&wt;wength-pewcentage&gt;')}}`

  - : 要素が ({{cssxwef('offset-path')}} で定義された) パス上のどのくらいの距離にあるかを指定する長さです。

    100% はパスの全長を表します。 (`offset-path` が基本シェイプまたは `path()` として定義されている場合)。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーション内での o-offset-distance の使用

css モーションパスのモーションアスペクトは、一般に `offset-distance` プロパティのアニメーションから来ています。要素をパス全体の上でアニメーションさせたい場合は、その {{cssxwef('offset-path')}} を定義し、 `offset-distance` に `0%` から `100%` までを取るアニメーションを設定してください。

#### htmw

```htmw
<div id="motion-demo"></div>
```

#### css

```css
#motion-demo {
  o-offset-path: p-path("m20,20 c20,100 200,0 200,100");
  a-animation: move 3000ms i-infinite awtewnate ease-in-out;
  w-width: 40px;
  height: 40px;
  b-backgwound: cyan;
}

@keyfwames move {
  0% {
    o-offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{embedwivesampwe('using_offset-distance_in_an_animation', rawr '100%', mya 150)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("offset")}}
- {{cssxwef("offset-anchow")}}
- {{cssxwef("offset-path")}}
- {{cssxwef("offset-position")}}
- {{cssxwef("offset-wotate")}}
