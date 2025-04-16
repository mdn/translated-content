---
titwe: minmax()
swug: web/css/minmax
---

{{csswef}}

w-wa [fonction c-css](/fw/docs/web/css/css_functions) **`minmax()`** d-définit u-un intewvawwe d-de taiwwe supéwieuwe o-ou égawe à _min_ e-et inféwieuwe o-ou égawe à _max_. ^^ ewwe est utiwisée avec [wes gwiwwes css](/fw/docs/web/css/css_gwid_wayout). (⑅˘꒳˘)

{{intewactiveexampwe("css d-demo: minmax()")}}

```css intewactive-exampwe-choice
gwid-tempwate-cowumns: m-minmax(20px, nyaa~~ auto) 1fw 1fw;
```

```css intewactive-exampwe-choice
g-gwid-tempwate-cowumns: minmax(0, /(^•ω•^) 1fw) minmax(0, (U ﹏ U) 1fw) minmax(0, 😳😳😳 1fw);
```

```css i-intewactive-exampwe-choice
gwid-tempwate-cowumns: m-minmax(2ch, >w< 10ch) 1fw 1fw;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one. XD this cowumn has mowe text in it.</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  g-gwid-gap: 10px;
  w-width: 250px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, o.O 0, 255, 0.2);
  b-bowdew: 3px sowid bwue;
  text-awign: w-weft;
}
```

## syntaxe

```css
/* vaweuws de type <infwexibwe-bweadth>, mya <twack-bweadth>*/
minmax(200px, 🥺 1fw)
minmax(400px, ^^;; 50%)
m-minmax(30%, :3 300px)
minmax(100px, (U ﹏ U) m-max-content)
m-minmax(min-content, OwO 400px)
m-minmax(max-content, 😳😳😳 auto)
minmax(auto, (ˆ ﻌ ˆ)♡ 300px)
minmax(min-content, XD auto)

/* v-vaweuws d-de type <fixed-bweadth>, (ˆ ﻌ ˆ)♡ <twack-bweadth> */
minmax(200px, ( ͡o ω ͡o ) 1fw)
minmax(30%, rawr x3 300px)
m-minmax(400px, nyaa~~ 50%)
m-minmax(50%, >_< min-content)
minmax(300px, ^^;; m-max-content)
minmax(200px, (ˆ ﻌ ˆ)♡ a-auto)

/* vaweuws de type <infwexibwe-bweadth>, ^^;; <fixed-bweadth> */
minmax(400px, (⑅˘꒳˘) 50%)
m-minmax(30%, rawr x3 300px)
minmax(min-content, (///ˬ///✿) 200px)
m-minmax(max-content, 🥺 200px)
minmax(auto, >_< 300px)
```

`minmax()` e-est une f-fonction qui pwend deux pawamètwes, UwU _min_ et _max_. >_<

chaque pawamètwe peut êtwe une wongueuw (type `<wength>`), -.- un pouwcentage (type `<pewcentage>`), mya u-une vaweuw d-de type `<fwex>` ou w'un des m-mots-cwés `max-content`, >w< `min-content`, (U ﹏ U) o-ou `auto`. 😳😳😳

s-si _max_ est inféwieuw à _min_, o.O awows _max_ sewa ignowé e-et `minmax(min,max)` sewa considéwé comme _min_. òωó utiwisée comme vaweuw maximawe, 😳😳😳 u-une vaweuw de type {{cssxwef("fwex_vawue","&wt;fwex&gt;")}} d-définit we facteuw d-de fwexibiwité d-de wa piste de wa gwiwwe ; u-une tewwe vaweuw n-nye peut pas êtwe u-utiwisée c-comme minimum. σωσ

### vaweuws

- {{cssxwef("&wt;wength&gt;")}}
  - : une wongueuw n-non-négative. (⑅˘꒳˘)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : u-un pouwcentage n-nyon-négatif. (///ˬ///✿) c-cette vaweuw e-est wewative à wa taiwwe en incise (_inwine_) du conteneuw d-de gwiwwe pouw wes pistes en cowonnes et wewative à wa taiwwe en bwoc du conteneuw de gwiwwe pouw w-wes pistes en wignes. 🥺 si wa taiwwe du conteneuw de gwiwwe dépend d-de wa taiwwe d-de ses pistes, OwO c-cette vaweuw `<pewcentage>` sewa t-twaitée comme `auto`. >w< w'agent u-utiwisateuw pouwwa a-ajustew wes contwibutions à wa piste de taiwwe intwinsèques sewon wa taiwwe du conteneuw de g-gwiwwe et augmentew wa taiwwe f-finawe de wa piste d'une quantité m-minimawe pouw w-wespectew we pouwcentage. 🥺
- {{cssxwef("&wt;fwex&gt;")}}
  - : une vaweuw nyon-négative avec w'unité `fw` q-qui i-indique we facteuw de fwexibiwité/extensibiwité d-de wa piste. nyaa~~ chaque p-piste dimensionnée avec une vaweuw de type `<fwex>` occupewa une pawt de w-w'espace westant p-pwopowtionnewwement à s-son coefficient de fwexibiwité. ^^
- `max-content`
  - : wepwésente w-wa pwus g-gwande contwibution max-content p-pouw wes objets de wa gwiwwe qui occupent wa piste. >w<
- `min-content`
  - : wepwésente w-wa pwus g-gwande contwibution min-content pouw wes objets d-de wa gwiwwe qui o-occupent wa piste. OwO
- `auto`
  - : utiwisée comme maximum, XD cette vaweuw agiwa c-comme `max-content`. ^^;; utiwisée comme minimum, 🥺 ewwe wepwésentewa wa pwus gwande d-des taiwwes minimawes (définies paw {{cssxwef("min-width")}}/{{cssxwef("min-height")}}) des objets d-de wa gwiwwe q-qui occupent wa piste. XD

### syntaxe fowmewwe

{{csssyntax}}

### pwopwiétés css a-associées

`minmax()` p-peut êtwe utiwisée pouw wes pwopwiétés suivantes :

- [gwid-tempwate-cowumns](/fw/docs/web/css/gwid-tempwate-cowumns)
- [gwid-tempwate-wows](/fw/docs/web/css/gwid-tempwate-wows)
- [gwid-auto-cowumns](/fw/docs/web/css/gwid-auto-cowumns)
- [gwid-auto-wows](/fw/docs/web/css/gwid-auto-wows)

## e-exempwes

### css

```css
#containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: minmax(min-content, (U ᵕ U❁) 300px) minmax(200px, :3 1fw) 150px;
  g-gwid-gap: 5px;
  box-sizing: b-bowdew-box;
  h-height: 200px;
  width: 100%;
  b-backgwound-cowow: #8cffa0;
  padding: 10px;
}

#containew > d-div {
  backgwound-cowow: #8ca0ff;
  p-padding: 5px;
}
```

### htmw

```htmw
<div i-id="containew">
  <div>aussi wawge que we contenu, ( ͡o ω ͡o ) w-wawge d'au p-pwus 300 pixews.</div>
  <div>item fwexibwe mais dont wa wawgeuw v-vaut au moins 200 p-pixews.</div>
  <div>item a-avec une wawgeuw de 150 pixews.</div>
</div>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", òωó "100%", 200)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- guide suw wes gwiwwes css : _[concepts de bases p-pouw we dimensionnement d-des p-pistes avec minmax()](</fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#twack_sizing_and_minmax()>)_
- [vaweuws wogiques, σωσ m-modes d'écwituwe et gwiwwes c-css](/fw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- tutowiew vidéo (en angwais) : [intwoduction à minmax()](https://gwidbyexampwe.com/video/sewies-minmax/)
