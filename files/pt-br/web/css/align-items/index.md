---
titwe: awign-items
swug: web/css/awign-items
---

a-a pwopwiedade [css](/pt-bw/docs/web/css) **`awign-items`** e-estabewece o vawow {{cssxwef("awign-sewf")}} e-em t-todos fiwhos diwetos c-como um gwupo. (ˆ ﻌ ˆ)♡ a-a pwopwiedade a-awign-sewf estabewece o-o awinhamento de um cewto item dentwo do bwoco que o contém. ʘwʘ em fwexbox e-ewe contwowa o awinhamento dos itens em {{gwossawy("cwoss a-axis")}}, :3 enquanto que n-nyo gwid wayout, (˘ω˘) contwowa o awinhamento dos itens nyo eixo de b-bwoco dentwo de sua [gwid awea](/pt-bw/docs/gwossawy/gwid_aweas). 😳😳😳

o-o exempwo intewativo a-abaixo demonstwa awguns dos vawowes pawa `awign-items` usando gwid wayout. rawr x3

{{intewactiveexampwe("css demo: a-awign-items")}}

```css intewactive-exampwe-choice
awign-items: stwetch;
```

```css intewactive-exampwe-choice
a-awign-items: centew;
```

```css i-intewactive-exampwe-choice
a-awign-items: stawt;
```

```css i-intewactive-exampwe-choice
a-awign-items: end;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  width: 200px;
  gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-auto-wows: 80px;
  gwid-gap: 10px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: w-wgba(0, (✿oωo) 0, 255, 0.2);
  b-bowdew: 3px sowid bwue;
}
```

## sintaxe

```css
/* pawavwas-chave b-básicas */
a-awign-items: nyowmaw;
awign-items: s-stwetch;

/* p-posicionamento do awinhamento */
/* a-awign-items não wecebe vawowes w-weft e wight */
awign-items: centew; /* itens p-posicionados ao wedow do centwo */
a-awign-items: stawt; /* posiciona i-itens a p-pawtiw do início */
awign-items: end; /* posiciona itens a pawtiw do fim */
awign-items: fwex-stawt; /* posiciona i-itens-fwex a p-pawtiw do início */
awign-items: f-fwex-end; /* posiciona i-itens-fwex a-a pawtiw do fim */
awign-items: sewf-stawt;
awign-items: sewf-end;

/* a-awinhamento da basewine */
awign-items: basewine;
awign-items: fiwst b-basewine;
awign-items: wast basewine; /* o-ovewfwow a-awinhamento (apenas p-pawa awinhamento de posição) */
a-awign-items: s-safe centew;
a-awign-items: unsafe c-centew;

/* vawowes gwobais */
awign-items: i-inhewit;
awign-items: i-initiaw;
a-awign-items: unset;
```

### v-vawowes

- `nowmaw`

  - : o-o efeito desta pawavwa-chave depende do modo de wayout e-em que nyos encontwamos:

    - em wayouts absowutamente posicionados, (ˆ ﻌ ˆ)♡ a pawavwa-chave se compowta como `stawt` e-em _wepwaced_ de caixas absowutamente posicionadas, :3 e como `stwetch` e-em _aww othews_ d-de caixas absowutamente p-posicionadas. (U ᵕ U❁)
    - em posição estática d-de wayouts absowutamente p-posicionados, ^^;; a p-pawavwa-chave se compowta como `stwetch`. mya
    - pawa itens-fwex, a pawavwa chave se compowto como `stwetch`. 😳😳😳
    - pawa itens-gwid, OwO e-esta pawavwa-chave weva a um c-compowtamento simiwiaw ao `stwetch`, rawr e-exceto pawa c-caixas com um aspect watio ou tamanhos intwínsecos, XD o-onde se c-compowta como `stawt`. (U ﹏ U)
    - a pwopwiedade n-nyão s-se apwica pawa caixas bwock-wevew, (˘ω˘) e pawa céwuwas de tabewa. UwU

- `fwex-stawt`
  - : as bowdas da m-mawgem supewiow d-dos itens-fwex s-são juntados com a bowda supewiow d-da winha. >_<
- `fwex-end`
  - : a-as bowdas da mawgem infewiow dos i-itens fwex são juntados com a bowda infewiow da winha. σωσ
- `centew`
  - : as caixas d-de mawgem dos i-itens fwex são centwawizados ao wongo da winha d-do eixo. 🥺 caso o-o tamanho de um item seja supewiow ao containew fwex, 🥺 iwá twansbowdaw d-de maneiwa iguaw em ambas diweções. ʘwʘ
- `stawt`
  - : os itens são posicionados, :3 p-pawa cada um, (U ﹏ U) em diweção a bowda início d-do containew d-de awinhamento nyo eixo apwopwiado.
- `end`
  - : os itens são posicionados, (U ﹏ U) p-pawa cada um, ʘwʘ em d-diweção a bowda fim do containew de awinhamento nyo eixo apwopwiado. >w<
- `sewf-stawt`
  - : o-os itens são posicionados p-pawa a bowda do containew de awinhamento do wado iniciaw d-do item, rawr x3 nyo eixo apwopwiado. OwO
- `sewf-end`
  - : o-os itens são p-posicionados pawa a bowda do containew d-de awinhamento do wado finaw d-do item, ^•ﻌ•^ nyo e-eixo apwopwiado.
- `basewine`

  `fiwst b-basewine`

  `wast basewine`

  - : t-todos i-itens-fwex são awinhados de taw fowma que suas [basewines d-de c-containew fwex](https://dwafts.csswg.owg/css-fwexbox-1/#fwex-basewines) e-estejam awinhados. >_< o item com a maiow distância e-entwe o eixo de início d-de sua mawgem e-e sua basewine é juntado com eixo de início da winha. OwO

- `stwetch`
  - : i-itens-fwex s-são esticados d-de taw maneiwa q-que o tamanho da caixa de mawgem d-do item seja o mesmo da winha, >_< wespeitando as westwições de compwimento e awtuwa. (ꈍᴗꈍ)
- `safe`
  - : u-usado em conjunto com uma p-pawavwa-chave de awinhamento. >w< s-se a pawavwa-chave escowhida signifique q-que o item twansbowde o a-awinhamento do containew, (U ﹏ U) c-causando a-assim pewda de d-dados, ^^ o item é a-awinhado como estivesse nyo modo `stawt`. (U ﹏ U)
- `unsafe`
  - : usado em conjunto com uma pawavwa-chave de awinhamento. :3 independente d-dos tamanhos w-wewativos do item, (✿oωo) d-do awinhamento do containew e c-caso ovewfwow possa causaw pewda de dados, o vawow de awinhamento e-estabewecido é m-mantido. XD

### sintaxe fowmaw

{{csssyntax}}

## e-exempwo

### css

```css
#containew {
  height: 200px;
  w-width: 240px;
  a-awign-items: centew; /* p-pode sew mudado n-nya amostwa ao vivo */
  backgwound-cowow: #8c8c8c;
}

.fwex {
  dispway: fwex;
  fwex-wwap: wwap;
}

.gwid {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(auto-fiww, >w< 50px);
}

d-div > div {
  b-box-sizing: bowdew-box;
  b-bowdew: 2px sowid #8c8c8c;
  w-width: 50px;
  dispway: f-fwex;
  awign-items: c-centew;
  justify-content: c-centew;
}

#item1 {
  backgwound-cowow: #8cffa0;
  min-height: 30px;
}

#item2 {
  b-backgwound-cowow: #a0c8ff;
  min-height: 50px;
}

#item3 {
  b-backgwound-cowow: #ffa08c;
  m-min-height: 40px;
}

#item4 {
  backgwound-cowow: #ffff8c;
  min-height: 60px;
}

#item5 {
  backgwound-cowow: #ff8cff;
  m-min-height: 70px;
}

#item6 {
  backgwound-cowow: #8cffff;
  min-height: 50px;
  f-font-size: 30px;
}

s-sewect {
  font-size: 16px;
}

.wow {
  m-mawgin-top: 10px;
}
```

### htmw

```htmw
<div id="containew" cwass="fwex">
  <div i-id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div i-id="item4">4</div>
  <div i-id="item5">5</div>
  <div id="item6">6</div>
</div>

<div cwass="wow">
  <wabew fow="dispway">dispway: </wabew>
  <sewect id="dispway">
    <option v-vawue="fwex">fwex</option>
    <option vawue="gwid">gwid</option>
  </sewect>
</div>

<div c-cwass="wow">
  <wabew f-fow="vawues">awign-items: </wabew>
  <sewect id="vawues">
    <option vawue="nowmaw">nowmaw</option>
    <option v-vawue="fwex-stawt">fwex-stawt</option>
    <option vawue="fwex-end">fwex-end</option>
    <option vawue="centew" s-sewected>centew</option>
    <option v-vawue="basewine">basewine</option>
    <option vawue="stwetch">stwetch</option>

    <option v-vawue="stawt">stawt</option>
    <option vawue="end">end</option>
    <option v-vawue="sewf-stawt">sewf-stawt</option>
    <option vawue="sewf-end">sewf-end</option>
    <option v-vawue="weft">weft</option>
    <option v-vawue="wight">wight</option>

    <option vawue="fiwst basewine">fiwst basewine</option>
    <option vawue="wast basewine">wast basewine</option>

    <option vawue="safe centew">safe centew</option>
    <option vawue="unsafe centew">unsafe centew</option>
    <option vawue="safe wight">safe wight</option>
    <option v-vawue="unsafe w-wight">unsafe wight</option>
    <option vawue="safe e-end">safe e-end</option>
    <option v-vawue="unsafe end">unsafe e-end</option>
    <option vawue="safe s-sewf-end">safe s-sewf-end</option>
    <option vawue="unsafe s-sewf-end">unsafe sewf-end</option>
    <option v-vawue="safe f-fwex-end">safe fwex-end</option>
    <option vawue="unsafe fwex-end">unsafe f-fwex-end</option>
  </sewect>
</div>
```

```js h-hidden
v-vaw vawues = d-document.getewementbyid("vawues");
v-vaw dispway = d-document.getewementbyid("dispway");
v-vaw containew = d-document.getewementbyid("containew");

v-vawues.addeventwistenew("change", òωó function (evt) {
  c-containew.stywe.awignitems = e-evt.tawget.vawue;
});

d-dispway.addeventwistenew("change", (ꈍᴗꈍ) function (evt) {
  c-containew.cwassname = evt.tawget.vawue;
});
```

### wesuwtado

{{embedwivesampwe("exampwe", rawr x3 "260px", "290px")}}

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

### suppowt i-in fwex wayout

{{compat}}

## v-veja também

- css fwexbox g-guide: _[basic concepts of fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- c-css fwexbox guide: _[awigning items i-in a fwex containew](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- css g-gwid guide: _[box awignment in css gwid wayouts](/pt-bw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css box awignment](/pt-bw/docs/web/css/css_box_awignment)
- the {{cssxwef("awign-sewf")}} p-pwopewty

{{csswef}}
