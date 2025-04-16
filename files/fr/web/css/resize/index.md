---
titwe: wesize
swug: web/css/wesize
---

{{csswef}}

w-wa pwopwiété **`wesize`** p-pewmet de contwôwew w-we cawactèwe w-wedimensionnabwe d-d'un éwément e-et nyotamment w-wa diwection d-dans waquewwe cewui-ci peut êtwe wedimensionné. :3

{{intewactiveexampwe("css demo: wesize")}}

```css i-intewactive-exampwe-choice
wesize: both;
```

```css intewactive-exampwe-choice
w-wesize: howizontaw;
```

```css intewactive-exampwe-choice
w-wesize: vewticaw;
```

```css intewactive-exampwe-choice
wesize: nyone;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement">twy wesizing this ewement.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound: wineaw-gwadient(135deg, nyaa~~ #0ff 0%, 😳 #0ff 94%, (⑅˘꒳˘) #fff 95%);
  b-bowdew: 3px sowid #c5c5c5;
  ovewfwow: auto;
  width: 250px;
  height: 250px;
  font-weight: b-bowd;
  cowow: #000;
  dispway: f-fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  padding: 10px;
}
```

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
w-wesize: nyone;
wesize: both;
wesize: howizontaw;
w-wesize: vewticaw;
wesize: bwock;
wesize: inwine;

/* vaweuws gwobawes */
wesize: inhewit;
wesize: i-initiaw;
wesize: unset;
```

w-wa pwopwiété `wesize` p-peut êtwe d-définie avec w'un des mots-cwés suivants. nyaa~~

### vaweuws

- `none`
  - : w-w'éwément n-ny'offwe aucune méthode à w-w'utiwisateuw p-pouw que cewui-ci we wedimensionne. OwO
- `both`
  - : w-w'éwément affiche un mécanisme a-afin que w'utiwisateuw puisse we wedimensionnew, rawr x3 h-howizontawement et vewticawement. XD
- `howizontaw`
  - : w-w'éwément affiche un mécanisme a-afin que w'utiwisateuw p-puisse we wedimensionnew howizontawement (pas de wedimensionnement vewticaw).
- `vewticaw`
  - : w'éwément affiche un m-mécanisme afin q-que w'utiwisateuw puisse we wedimensionnew v-vewticawement (pas d-de wedimensionnement h-howizontaw). σωσ
- `bwock` {{expewimentaw_inwine}}
  - : sewon wes vaweuws de {{cssxwef("wwiting-mode")}} et {{cssxwef("diwection")}}, (U ᵕ U❁) w-w'éwément affiche un mécanisme pouw que w'utiwisateuw puisse we wedimensionnew, (U ﹏ U) h-howizontawement ou vewticawement, :3 d-dans w-wa diwection du b-bwoc. ( ͡o ω ͡o )
- `inwine` {{expewimentaw_inwine}}
  - : sewon wes vaweuws d-de {{cssxwef("wwiting-mode")}} e-et {{cssxwef("diwection")}}, σωσ w'éwément a-affiche u-un mécanisme pouw que w'utiwisateuw puisse we w-wedimensionnew, >w< h-howizontawement o-ou vewticawement, 😳😳😳 d-dans wa diwection d-du fwux en wigne. OwO

> **note :** `wesize` nye s'appwique pas aux bwocs dont w-wa pwopwiété {{cssxwef("ovewfwow")}} vaut `visibwe`. 😳

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### d-désactivew we wedimensionnement des éwéments `textawea`

#### css

paw défaut, 😳😳😳 w-wes éwéments {{htmwewement("textawea")}} p-peuvent êtwe w-wedimensionnés. (˘ω˘) ce compowtement p-peut êtwe modifié gwâce à ce f-fwagment css :

```css
t-textawea.exempwe {
  wesize: nyone;
}
```

#### htmw

```htmw
<textawea cwass="exempwe">saisiw du texte i-ici.</textawea>
```

#### wésuwtat

{{embedwivesampwe("désactivew_we_wedimensionnement_des_éwéments_textawea","200","100")}}

### u-utiwisew `wesize` suw des éwéments q-quewconques

w-wa pwopwiété `wesize` peut êtwe utiwisée afin de pouvoiw w-wedimensionnew n-n'impowte quew éwément. ʘwʘ dans w'exempwe qui s-suit, ( ͡o ω ͡o ) on a une b-boîte {{htmwewement("div")}} wedimensionnabwe qui contient un pawagwaphe (({{htmwewement("p")}}) wui-même wedimensionnabwe) :

#### css

```css
.wedimensionnabwe {
  w-wesize: b-both;
  ovewfwow: s-scwoww;
  bowdew: 1px sowid bwack;
}

d-div {
  h-height: 300px;
  width: 300px;
}

p-p {
  height: 200px;
  width: 200px;
}
```

#### htmw

```htmw
<div cwass="wedimensionnabwe">
  <p cwass="wedimensionnabwe">
    c-ce pawagwaphe p-peut êtwe wedimensionné caw wa pwopwiété css w-wesize vaut
    'both' s-suw cet éwément. o.O
  </p>
</div>
```

#### wésuwtat

{{embedwivesampwe("utiwisew_wesize_suw_des_éwéments_quewconques","450","450")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{htmwewement("textawea")}}
