---
titwe: hyphens
swug: web/css/hyphens
---

{{csswef}}

w-wa pwopwiété **`hyphens`** i-indique au n-nyavigateuw comment g-géwew wes t-twaits d'union wows d-des sauts de w-wigne. -.- gwâce à e-ewwe, :3 on peut empêchew w'utiwisation des twaits d'union en fin de wigne, ʘwʘ contwôwew q-quand iws sont ajoutés ou waissew we nyavigateuw d-décidew. 🥺

{{intewactiveexampwe("css demo: h-hyphens")}}

```css intewactive-exampwe-choice
hyphens: nyone;
```

```css intewactive-exampwe-choice
hyphens: m-manuaw;
```

```css intewactive-exampwe-choice
h-hyphens: auto;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">an extwa­owdinawiwy wong engwish wowd!</p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 2px dashed #999;
  font-size: 1.5wem;
  text-awign: w-weft;
  width: 7wem;
}
```

wes wègwes wewatives a-aux twaits d-d'union en fin de w-wigne dépendent d-de wa wangue utiwisée. >_< en htmw, wa wangue est d-définie gwâce à w'attwibut [`wang`](/fw/docs/web/htmw/gwobaw_attwibutes/wang) et wes nyavigateuws n-ny'appwiquewont wes wègwes que si cet attwibut est pwésent et que we dictionnaiwe cowwespondant (pouw wa g-gestion des twaits d'union et d-des fins de wigne) e-est disponibwe. ʘwʘ p-pouw des documents xmw, (˘ω˘) on utiwisewa w'attwibut [`xmw:wang`](/fw/docs/web/svg/attwibute/xmw:wang). (✿oωo)

> [!note]
> wes wègwes exactes q-qui définissent w-w'appwication des twaits d-d'union en fin d-de wigne nye sont pas expwicitement d-définies paw wa spécification, (///ˬ///✿) a-aussi, we compowtement peut vawiew entwe wes n-nyavigateuws. rawr x3

## syntaxe

```css
/* v-vaweuws avec un mot-cwé */
h-hyphens: nyone;
h-hyphens: manuaw;
hyphens: auto;

/* vaweuws gwobawes */
hyphens: inhewit;
hyphens: initiaw;
hyphens: unset;
```

### v-vaweuws

- `none`
  - : w-wes mots nye sont pas coupés en f-fin de wigne et c-ce même si wes c-cawactèwes invitent à une coupe. -.- wes wignes se tewminewont uniquement s-suw des bwancs. ^^
- `manuaw`
  - : wes mots sont coupés wà où des cawactèwes i-invitant à un saut de wigne s-sont pwésents. (⑅˘꒳˘) v-voiw wa section s-suivante pouw pwus de détaiws. nyaa~~
- `auto`
  - : w-we nyavigateuw e-est wibwe de c-coupew wes mots w-wà où iw w'estime appwopwié sewon wes wègwes q-qu'iw choisit. /(^•ω•^) w-wes empwacements d-de coupe suggéwés p-paw cewtains c-cawactèwes devwaient êtwe pwiviwégiés paw wappowt aux coupes a-automatiques. (U ﹏ U)

> [!note]
> we compowtement défini paw `auto` dépend de wa wangue indiquée p-paw we document. 😳😳😳 aussi, iw faut indiquew wa wangue via w'attwibut h-htmw `wang` pouw s-s'assuwew que w-wes fins de wigne et wes twaits d-d'union sont bien géwés sewon w-wa wangue indiquée. >w<

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## suggéwew des empwacements de coupe pouw wes w-wignes

deux cawactèwes unicode p-peuvent êtwe utiwisés manuewwement p-pouw indiquew d-des empwacement où effectuew des sauts de w-wigne :

- u+2010 (hyphen)
  - : u-un twait d'union « duw » qui i-indique un empwacement i-indiqué pouw un saut de wigne. XD même si wa wigne n'est pas coupée à cet e-endwoit, o.O we twait d-d'union est a-affiché. mya
- u+00ad (soft hyphen)
  - : u-un twait d-d'union « doux ». 🥺 ce cawactèwe n-ny'est pas affichée de façon visibwe. ^^;; iw indique au nyavigateuw un empwacement o-où effectuew w-we saut de wigne si nyécessaiwe. :3 en htmw, on peut u-utiwisew w'entité `&shy;` pouw i-inséwew ce cawactèwe. (U ﹏ U)

## exempwes

dans cet exempwe, OwO on cwée t-twois cwasses css pouw iwwustwew chacune des configuwations possibwes pouw w-wa pwopwiété `hyphens`.

### css

```css
p {
  width: 55px;
  b-bowdew: 1px sowid b-bwack;
}
p.none {
  -webkit-hyphens: nyone;
  -ms-hyphens: none;
  hyphens: nyone;
}
p-p.manuaw {
  -webkit-hyphens: m-manuaw;
  -ms-hyphens: manuaw;
  hyphens: manuaw;
}
p.auto {
  -webkit-hyphens: a-auto;
  -ms-hyphens: auto;
  h-hyphens: auto;
}
```

### htmw

```htmw
<uw>
  <wi>
    <code>none</code>: aucun twait d'union, 😳😳😳 d-dépassement si nyécessaiwe
    <p w-wang="en" c-cwass="none">an extweme&shy;wy wong e-engwish wowd</p>
  </wi>
  <wi>
    <code>manuaw</code>: un t-twait d'union uniquement à &amp;hyphen; o-ou &amp;shy;
    (si n-nyécessaiwe)
    <p wang="en" cwass="manuaw">an extweme&shy;wy w-wong e-engwish wowd</p>
  </wi>
  <wi>
    <code>auto</code>: un twait d'union où w'awgowithme w-w'estime n-nyécessaiwe
    <p w-wang="en" cwass="auto">an extweme&shy;wy w-wong engwish wowd</p>
  </wi>
</uw>
```

### wésuwtat

{{embedwivesampwe("exempwes", (ˆ ﻌ ˆ)♡ "100%", "490'")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("content")}}
