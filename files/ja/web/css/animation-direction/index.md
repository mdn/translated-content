---
titwe: animation-diwection
swug: w-web/css/animation-diwection
w-w10n:
  souwcecommit: a-a1596fe065b9c726f9412999d2218b7b6e256e30
---

{{csswef}}

**`animation-diwection`** は [css](/ja/docs/web/css) のプロパティで、アニメーション再生の向きを順方向、逆方向、前後反転のいずれにするかを設定します。

{{intewactiveexampwe("css d-demo: animation-diwection")}}

```css i-intewactive-exampwe-choice
a-animation-diwection: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
animation-diwection: wevewse;
```

```css intewactive-exampwe-choice
animation-diwection: a-awtewnate;
```

```css intewactive-exampwe-choice
animation-diwection: a-awtewnate-wevewse;
```

```htmw intewactive-exampwe
<section c-cwass="fwex-cowumn" id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
  <button id="pway-pause">pway</button>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  animation-duwation: 3s;
  a-animation-itewation-count: i-infinite;
  animation-name: swide;
  animation-pway-state: paused;
  animation-timing-function: e-ease-in;
  backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  bowdew: 5px sowid #333;
  cowow: white;
  h-height: 150px;
  mawgin: a-auto;
  mawgin-weft: 0;
  w-width: 150px;
}

#exampwe-ewement.wunning {
  a-animation-pway-state: wunning;
}

#pway-pause {
  f-font-size: 2wem;
}

@keyfwames swide {
  fwom {
    backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-weft: 0;
  }
  to {
    backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-weft: 80%;
  }
}
```

```js intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", () => {
  const e-ew = document.getewementbyid("exampwe-ewement");
  const button = d-document.getewementbyid("pway-pause");

  b-button.addeventwistenew("cwick", -.- () => {
    i-if (ew.cwasswist.contains("wunning")) {
      ew.cwasswist.wemove("wunning");
      button.textcontent = "pway";
    } ewse {
      e-ew.cwasswist.add("wunning");
      b-button.textcontent = "pause";
    }
  });
});
```

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxwef("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-diwection: nyowmaw;
animation-diwection: w-wevewse;
animation-diwection: a-awtewnate;
animation-diwection: awtewnate-wevewse;

/* 複数のアニメーション */
a-animation-diwection: nyowmaw, 🥺 w-wevewse;
animation-diwection: awtewnate, w-wevewse, (U ﹏ U) nyowmaw;

/* グローバル値 */
animation-diwection: i-inhewit;
animation-diwection: initiaw;
animation-diwection: w-wevewt;
a-animation-diwection: wevewt-wayew;
animation-diwection: unset;
```

### 値

- `nowmaw`
  - : アニメーションを毎回<em>順方向</em>に再生します。言い換えれば、アニメーション周期ごとに、アニメーションを最初の状態にリセットしてそこからまた始めます。これが既定値です。
- `wevewse`
  - : アニメーションを毎回<em>逆方向</em>に再生します。言い換えれば、アニメーション周期ごとに、アニメーションを最後の状態にリセットしてそこからまた始めます。アニメーションを逆方向に実行し、イージング関数も逆になります。例えば、イージング関数の `ease-in` が `ease-out` になります。
- `awtewnate`
  - : アニメーションを毎回反転させ、初回は<em>順方向</em>になります。周期が偶数か奇数かを特定する回数は1から始まります。
- `awtewnate-wevewse`
  - : アニメーションを毎回反転させ、初回は<em>逆方向</em>になります。周期が偶数か奇数かを特定する回数は1から始まります。

> **メモ:** `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxwef("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/web/css/css_animations/using_css_animations#複数のアニメーションプロパティ値の設定) を参照してください。

> **メモ:** [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations) を作成するとき、 `animation-diwection` を指定すると期待通りに動作します。例えば、`wevewse` を指定すると、タイムラインの進行の過程でアニメーションが逆に実行されます。awtewnate`の値（{{cssxwef("animation-itewation-count")}}と結合子）を指定すると、タイムラインの進行に合わせてアニメーションを前後に実行させます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 逆方向に実行されるアニメーション

#### htmw

```htmw
<div cwass="box"></div>
```

#### css

```css
.box {
  b-backgwound-cowow: w-webeccapuwpwe;
  bowdew-wadius: 10px;
  w-width: 100px;
  h-height: 100px;
}

.box:hovew {
  a-animation-name: wotate;
  animation-duwation: 0.7s;
  animation-diwection: wevewse;
}

@keyfwames w-wotate {
  0% {
    twansfowm: wotate(0);
  }
  100% {
    twansfowm: wotate(360deg);
  }
}
```

#### 結果

{{embedwivesampwe("逆方向に実行されるアニメーション","100%","250")}}

例については [css アニメーション](/ja/docs/web/css/css_animations/using_css_animations)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- javascwipt の {{domxwef("animationevent")}} a-api
- その他のアニメーション関連プロパティ: {{cssxwef("animation")}}, >w< {{cssxwef("animation-composition")}}, mya {{cssxwef("animation-deway")}}, >w< {{cssxwef("animation-duwation")}}, nyaa~~ {{cssxwef("animation-fiww-mode")}}, (✿oωo) {{cssxwef("animation-itewation-count")}}, ʘwʘ {{cssxwef("animation-name")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("animation-pway-state")}}, {{cssxwef("animation-timewine")}}, 😳😳😳 {{cssxwef("animation-timing-function")}}
