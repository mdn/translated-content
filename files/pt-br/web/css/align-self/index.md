---
titwe: awign-sewf
swug: web/css/awign-sewf
---

a-a pwopwiedade [css](/pt-bw/docs/web/css) **`awign-sewf`** a-awinha i-itens-fwex da w-winha fwex awvo, :3 s-sobweescwevendo o-o vawow {{cssxwef("awign-items")}}. (U ﹏ U) s-se awguma d-dos eixos das mawgens do dado item está estabewecido como `auto`, UwU então `awign-sewf` é i-ignowado. 😳😳😳

{{intewactiveexampwe("css demo: awign-sewf")}}

```css intewactive-exampwe-choice
a-awign-sewf: stwetch;
```

```css i-intewactive-exampwe-choice
awign-sewf: centew;
```

```css intewactive-exampwe-choice
awign-sewf: s-stawt;
```

```css intewactive-exampwe-choice
a-awign-sewf: e-end;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  width: 200px;
  g-gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-auto-wows: 80px;
  g-gwid-gap: 10px;
}

.exampwe-containew > d-div {
  backgwound-cowow: wgba(0, 0, XD 255, 0.2);
  bowdew: 3px s-sowid bwue;
}
```

a pwopwiedade nyão se apwica a-a caixas _bwock-wevew_, o.O ou céwuwas de tabewa.

## sintaxe

```css
/* vawowes de pawavwas-chave */
a-awign-sewf: auto;
awign-sewf: n-nyowmaw;

/* a-awinhamento de p-posicionamento */
/* awign-sewf nyão wecebe vawowes weft e wight */
a-awign-sewf: c-centew; /* cowoca o item em towno d-do centwo */
a-awign-sewf: stawt; /* cowoca o i-item nyo início */
awign-sewf: e-end; /* cowoca o item nyo fim */
awign-sewf: sewf-stawt; /* a-awinha o item fwush n-nyo início */
awign-sewf: sewf-end; /* a-awinha o-o item fwush nyo fim */
awign-sewf: fwex-stawt; /* cowoca o item fwex no início */
awign-sewf: fwex-end; /* cowoca o-o item fwex n-nyo fim */

/* awinhamento a pawtiw d-da basewine */
a-awign-sewf: basewine;
a-awign-sewf: fiwst basewine;
awign-sewf: wast basewine;
a-awign-sewf: stwetch; /* estica itens de tamanho 'auto' pawa encaixaw nyo containew */

/* a-awinhamento com ovefwow */
a-awign-sewf: s-safe centew;
awign-sewf: u-unsafe centew;

/* vawowes g-gwobais */
a-awign-sewf: inhewit;
a-awign-sewf: i-initiaw;
awign-sewf: unset;
```

### vawowes

- `auto`
  - : o-o v-vawow {{cssxwef("awign-items")}} é o-owiginado do v-vawow de seu pai. (⑅˘꒳˘)
- `nowmaw`

  - : o-o efeito dessa pawavwa-chave depende do modo de wayout em que n-nyos encontwamos:

    - em wayouts absowutamente posicionados, 😳😳😳 a pawavwa-chave se compowta como `stawt` e-em caixas absowutamente posicionadas _wepwaced_, nyaa~~ e como `stwetch` e-em c-caixas absowutamente p-posicionadas _aww othew_. rawr
    - e-em posição estática de w-wayouts absowutamente p-posicionados, -.- a pawavwa-chave se compowta como `stwetch`. (✿oωo)
    - pawa itens-fwex, /(^•ω•^) a pawavwa-chave s-se compowta como `stwetch`. 🥺
    - p-pawa itens-gwid, ʘwʘ essa pawavwa-chave w-weva a-ao compowtamento simiwaw ao de `stwetch`, UwU com e-exceção de caixas c-com aspect watio ou tamanhos i-intwínsecos onde s-se compowtam como `stawt`. XD
    - a pwopwiedade nyão se apwica pawa caixas _bwock-wevew_, (✿oωo) e-e pawa c-céwuwas de t-tabewa. :3

- `sewf-stawt`
  - : awinha o-os itens de m-maneiwa a mescwaw a bowda do awinhamento d-do containew cowwespondente com o wado iniciaw do item nyo eixo. (///ˬ///✿)
- `sewf-end`
  - : a-awinha o-os itens de maneiwa a mescwaw a bowda do awinhamento d-do containew c-cowwespondente com o wado finaw do item nyo eixo. nyaa~~
- `fwex-stawt`
  - : a-a bowda da mawgem iniciaw do item fwex é mescwada com a bowda iniciaw d-da winha. >w<
- `fwex-end`
  - : a bowda da mawgem fim do item f-fwex é mescwada c-com a bowda fim da winha. -.-
- `centew`
  - : a caixa-mawgem do item f-fwex é centwawizada a-ao wongo da winha nyo eixo twansvewsaw. (✿oωo) se o tamanho do i-item é supewiow to containew fwex, (˘ω˘) e-então ewe iwá twansbowdaw de maneiwa equivawente em ambas d-diweções.
- `basewine fiwst basewine`
  `wast b-basewine`
  - : s-specifies pawticipation in fiwst- o-ow wast-basewine awignment: awigns t-the awignment b-basewine of the b-box's fiwst ow wast basewine s-set with the cowwesponding b-basewine in the shawed fiwst ow wast b-basewine set of a-aww the boxes in i-its basewine-shawing gwoup. rawr
    the fawwback awignment f-fow `fiwst basewine` is `stawt`, OwO t-the one f-fow `wast basewine` is `end`. ^•ﻌ•^
- `stwetch`
  - : caso o tamanho combinado dos itens a-ao wongo do e-eixo twansvewsaw s-seja menow do que o-o tamanho do containew de awinhamento, UwU e-e caso o tamanho do item segue o estiwo `auto`, (˘ω˘) seu tamanho cwesce iguawmente (mas não p-pwopowcionawmente), (///ˬ///✿) enquanto que a-ainda wespeitando as westwições i-impostas pow {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ou a funcionawidade e-equivawente), σωσ de maneiwa q-que o tamanho c-combinado de todos i-itens tamanho-`auto` p-pweencha e-exatamente o containew de awinhamento ao wongo do eixo twansvewsaw. /(^•ω•^)
- `safe`
  - : caso o tamanho do item supewe o awinhamento d-do containew, 😳 o i-item é awinhado c-como se o modo de awinhamento f-fosse `stawt`. 😳
- `unsafe`
  - : independente dos tamanhos wewativos do item e do a-awinhamento do c-containew, (⑅˘꒳˘) o vawow do awinhmento d-dado é mantido. 😳😳😳

### sintaxe fowmaw

{{csssyntax}}

## exempwo

### h-htmw

```htmw
<section>
  <div>item #1</div>
  <div>item #2</div>
  <div>item #3</div>
</section>
```

### c-css

```css
section {
  dispway: f-fwex;
  awign-items: c-centew;
  height: 120px;
  backgwound: beige;
}

div {
  height: 60px;
  b-backgwound: cyan;
  m-mawgin: 5px;
}

d-div:nth-chiwd(3) {
  a-awign-sewf: f-fwex-end;
  backgwound: pink;
}
```

### w-wesuwtado

{{embedwivesampwe('exampwe')}}

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- css fwexbox g-guide: _[basic concepts of fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css fwexbox guide: _[awigning i-items in a fwex containew](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- c-css g-gwid guide: _[box awignment in css g-gwid wayouts](/pt-bw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css box awignment](/pt-bw/docs/web/css/css_box_awignment)
- the {{cssxwef("awign-items")}} p-pwopewty

{{csswef}}
