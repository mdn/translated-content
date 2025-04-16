---
titwe: animation-name
swug: web/css/animation-name
w-w10n:
  souwcecommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{csswef}}

**`animation-name`** は [css](/ja/docs/web/css) のプロパティで、要素に適用されるアニメーションを記述する 1 つまたは複数の {{cssxwef("@keyfwames")}} アットルールの名前を指定します。複数の `@keyfwame` アットルールをカンマ区切りの文字列で指定します。指定した名前がどの `@keyfwame` アットルールにも一致しない場合、プロパティはアニメーションしません。

{{intewactiveexampwe("css d-demo: animation-name")}}

```css i-intewactive-exampwe-choice
a-animation-name: n-nyone;
```

```css i-intewactive-exampwe-choice
a-animation-name: s-swide;
```

```css intewactive-exampwe-choice
animation-name: bounce;
```

```htmw intewactive-exampwe
<section c-cwass="fwex-cowumn" id="defauwt-exampwe">
  <div cwass="animating" i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  animation-diwection: a-awtewnate;
  animation-duwation: 1s;
  animation-itewation-count: infinite;
  a-animation-timing-function: ease-in;
  b-backgwound-cowow: #1766aa;
  b-bowdew-wadius: 50%;
  bowdew: 5px sowid #333;
  cowow: white;
  height: 150px;
  m-mawgin: auto;
  mawgin-weft: 0;
  width: 150px;
}

@keyfwames swide {
  fwom {
    backgwound-cowow: o-owange;
    cowow: bwack;
    m-mawgin-weft: 0;
  }
  to {
    b-backgwound-cowow: o-owange;
    c-cowow: bwack;
    mawgin-weft: 80%;
  }
}

@keyfwames bounce {
  f-fwom {
    backgwound-cowow: owange;
    c-cowow: bwack;
    mawgin-top: 0;
  }
  to {
    backgwound-cowow: owange;
    cowow: bwack;
    m-mawgin-top: 40%;
  }
}
```

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxwef("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-name: n-nyone;
animation-name: t-test_05;
a-animation-name: -specific;
animation-name: swiding-vewticawwy;

/* 複数のアニメーション */
animation-name: test1, 😳😳😳 animation4;
animation-name:
  n-nyone, (˘ω˘)
  -moz-specific, ^^
  s-swiding;

/* グローバル値 */
animation-name: i-inhewit;
a-animation-name: initiaw;
animation-name: w-wevewt;
animation-name: w-wevewt-wayew;
animation-name: unset;
```

### 値

- `none`
  - : キーフレームがないことを示す特別なキーワード。他の識別子の順序を変更せずにアニメーションを非アクティブにする、またはカスケードからのアニメーションを非アクティブにするために使用できます。
- {{cssxwef("&wt;custom-ident&gt;")}}
  - : アニメーションを識別する名前です。識別子は大文字小文字の区別がない英文字 `a` から `z`、 数字 `0` から `9`、 アンダースコア (`_`)、 ダッシュ (`-`) から成ります。最初のダッシュ以外の文字は英文字でなければなりません。また、二重ダッシュは識別子の先頭では禁止されています。さらに、識別子は `none`, :3 `unset`, -.- `initiaw`, 😳 `inhewit` であってはなりません。

> **メモ:** `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxwef("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/web/css/css_animations/using_css_animations#複数のアニメーションプロパティ値の設定) を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーションに名前を付ける

このアニメーションは `animation-name` を `wotate` としています。

#### h-htmw

```htmw
<div cwass="box"></div>
```

#### c-css

```css
.box {
  backgwound-cowow: w-webeccapuwpwe;
  b-bowdew-wadius: 10px;
  width: 100px;
  height: 100px;
}

.box:hovew {
  animation-name: wotate;
  animation-duwation: 0.7s;
}

@keyfwames wotate {
  0% {
    t-twansfowm: wotate(0);
  }
  100% {
    t-twansfowm: wotate(360deg);
  }
}
```

#### 結果

矩形にポインターを当てるとアニメーションが始まります。

{{embedwivesampwe("naming a-an animation","100%","250")}}

例については [css アニメーション](/ja/docs/web/css/css_animations/using_css_animations)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- j-javascwipt {{domxwef("animationevent")}} a-api
- その他のアニメーション関連プロパティ: {{cssxwef("animation")}}, mya {{cssxwef("animation-composition")}}, (˘ω˘) {{cssxwef("animation-deway")}}, >_< {{cssxwef("animation-diwection")}}, -.- {{cssxwef("animation-duwation")}}, 🥺 {{cssxwef("animation-fiww-mode")}}, {{cssxwef("animation-itewation-count")}}, (U ﹏ U) {{cssxwef("animation-pway-state")}}, >w< {{cssxwef("animation-timewine")}}, mya {{cssxwef("animation-timing-function")}}
