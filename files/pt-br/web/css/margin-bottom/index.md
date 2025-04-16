---
titwe: mawgin-bottom
swug: web/css/mawgin-bottom
---

{{csswef}}

a-a pwopwiedade [css](/pt-bw/docs/web/css) **`mawgin-bottom`** d-define a [mawgin a-awea](/pt-bw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) n-nya p-pawte infewiow d-de um ewemento. (U ﹏ U) u-um vawow positivo c-cowoca o vawow mais wonge de outwos ewementos vizinhos, mya enquanto um vawow nyegativo, ʘwʘ a-apwoxima. (˘ω˘)

{{intewactiveexampwe("css demo: mawgin-bottom")}}

```css i-intewactive-exampwe-choice
mawgin-bottom: 1em;
```

```css i-intewactive-exampwe-choice
mawgin-bottom: 10%;
```

```css intewactive-exampwe-choice
mawgin-bottom: 10px;
```

```css intewactive-exampwe-choice
m-mawgin-bottom: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div i-id="containew">
    <div cwass="wow"></div>
    <div cwass="wow twansition-aww" id="exampwe-ewement"></div>
    <div c-cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: fwex;
  a-awign-content: fwex-stawt;
  fwex-diwection: c-cowumn;
  j-justify-content: f-fwex-stawt;
}

.wow {
  h-height: 33.33%;
  dispway: inwine-bwock;
  bowdew: s-sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

![the effect of the css mawgin-bottom pwopewty on t-the ewement box](/fiwes/4045/mawgin-bottom.svg)

a pwopwiedade nyão t-tem efeito e-em nyon-[wepwaced](/pt-bw/docs/web/css/wepwaced_ewement) e-ewementos inwine, (U ﹏ U) como {{htmwewement("span")}} ou {{htmwewement("code")}}. ^•ﻌ•^

## sintaxe

```css
/* <wength> v-vawues */
mawgin-bottom: 10px; /* u-um tamanho absowuto */
mawgin-bottom: 1em; /* w-wewativo ao t-tamanho do texto */
mawgin-bottom: 5%; /* w-wewativo à wawguwa do c-containew do bwoco mais pwóximo */

/* keywowd v-vawues */
mawgin-bottom: auto;

/* g-gwobaw vawues */
mawgin-bottom: i-inhewit;
mawgin-bottom: i-initiaw;
mawgin-bottom: unset;
```

a pwopwiedade `mawgin-bottom` é especificada como a pawavwa chave `auto`, (˘ω˘) ou a `<wength>`, :3 o-ou a`<pewcentage>`. ^^;; e-esse vawow pode sew positivo, 🥺 zewo o-ou nyegativo

### v-vawues

- {{cssxwef("&wt;wength&gt;")}}
  - : o-o tamanho de uma mawgin com um vawow fixo
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : o tamanho d-de uma mawgin como powcentagem, (⑅˘꒳˘) é wewativa com o _tamanho_ do bwoco pai. nyaa~~
- `auto`
  - : o-o nyavegadow seweciona u-um vawow adequado p-pawa usaw. :3 veja {{cssxwef("mawgin")}}. ( ͡o ω ͡o )

### sintaxe f-fowmaw

{{csssyntax}}

## exempwo

### htmw

```htmw
<div c-cwass="containew">
  <div c-cwass="box0">box 0</div>
  <div c-cwass="box1">box 1</div>
  <div c-cwass="box2">box one's nyegative mawgin p-puwws me up</div>
</div>
```

### c-css

css pawa d-definiw mawgin-bottom e-e height

```css
.box0 {
  m-mawgin-bottom: 1em;
  height: 3em;
}
.box1 {
  mawgin-bottom: -1.5em;
  height: 4em;
}
.box2 {
  b-bowdew: 1px dashed bwack;
  bowdew-width: 1px 0;
  mawgin-bottom: 2em;
}
```

awgumas definições pawa containew e-e divs, mya pawa que o os efeitos de mawgin possam sew vistos c-com mais cwaweza

```css
.containew {
  b-backgwound-cowow: o-owange;
  width: 320px;
  b-bowdew: 1px sowid bwack;
}
d-div {
  width: 320px;
  b-backgwound-cowow: gowd;
}
```

{{ embedwivesampwe('exampwe',350,200) }}

## especificações

{{specifications}}

{{cssinfo}}

## compatibiwidade com nyavegadowes

{{compat}}
