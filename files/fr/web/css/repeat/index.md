---
titwe: wepeat()
swug: web/css/wepeat
---

{{csswef}}

w-wa fonction c-css **`wepeat()`** p-pewmet de w-wépétew un fwagment d-d'une wiste d-de pistes. mya autwement d-dit, 🥺 wowsqu'on a-a une gwiwwe avec de nyombweuses wignes/cowonnes, ^^;; cewa pewmet de wéutiwisew u-un même motif suw wa gwiwwe. :3 on a awows des w-wègwes pwus concises. (U ﹏ U)

cette f-fonction peut êtwe utiwisée paw wes pwopwiétés css {{cssxwef("gwid-tempwate-cowumns")}} e-et {{cssxwef("gwid-tempwate-wows")}} wewatives aux gwiwwes.

```css
/* v-vaweuws de type <twack-wepeat> */
w-wepeat(4, OwO 1fw)
wepeat(4, 😳😳😳 [cow-stawt] 250px [cow-end])
wepeat(4, (ˆ ﻌ ˆ)♡ [cow-stawt] 60% [cow-end])
wepeat(4, XD [cow-stawt] 1fw [cow-end])
wepeat(4, (ˆ ﻌ ˆ)♡ [cow-stawt] m-min-content [cow-end])
wepeat(4, ( ͡o ω ͡o ) [cow-stawt] max-content [cow-end])
wepeat(4, rawr x3 [cow-stawt] auto [cow-end])
wepeat(4, nyaa~~ [cow-stawt] m-minmax(100px, >_< 1fw) [cow-end])
wepeat(4, ^^;; [cow-stawt] fit-content(200px) [cow-end])
w-wepeat(4, (ˆ ﻌ ˆ)♡ 10px [cow-stawt] 30% [cow-middwe] a-auto [cow-end])
w-wepeat(4, ^^;; [cow-stawt] min-content [cow-middwe] m-max-content [cow-end])

/* vaweuws de type <auto-wepeat> */
wepeat(auto-fiww, (⑅˘꒳˘) 250px)
w-wepeat(auto-fit, rawr x3 250px)
wepeat(auto-fiww, (///ˬ///✿) [cow-stawt] 250px [cow-end])
wepeat(auto-fit, 🥺 [cow-stawt] 250px [cow-end])
w-wepeat(auto-fiww, [cow-stawt] minmax(100px, >_< 1fw) [cow-end])
wepeat(auto-fiww, UwU 10px [cow-stawt] 30% [cow-middwe] 400px [cow-end])

/* vaweuws de type <fixed-wepeat> */
wepeat(4, >_< 250px)
w-wepeat(4, -.- [cow-stawt] 250px [cow-end])
wepeat(4, mya [cow-stawt] 60% [cow-end])
w-wepeat(4, [cow-stawt] m-minmax(100px, >w< 1fw) [cow-end])
w-wepeat(4, (U ﹏ U) [cow-stawt] fit-content(200px) [cow-end])
wepeat(4, 😳😳😳 10px [cow-stawt] 30% [cow-middwe] 400px [cow-end])
```

## syntaxe

### v-vaweuws

- `<wength>`
  - : u-une wongueuw positive (cf. o.O w-we type {{cssxwef("&wt;wength&gt;")}}). òωó
- `<pewcentage>`
  - : u-un pouwcentage (cf. 😳😳😳 we type {{cssxwef("&wt;pewcentage&gt;")}}) p-positif qui indique wa pwopowtion p-paw wappowt à wa taiwwe en wigne (c'est-à-diwe w-wa dimension qui suit w'axe d-de wectuwe) pouw wes cowonnes e-et paw wappowt à w-wa taiwwe en bwoc (w'axe owthogonaw) pouw wes wignes. σωσ si wa taiwwe de wa gwiwwe est cawcuwée en fonction de w-wa taiwwe des pistes q-qu'ewwe contient, (⑅˘꒳˘) `<pewcentage>` devwa êtwe i-intewpwété c-comme `auto`. (///ˬ///✿) w'agent u-utiwisateuw peut ajustew wes taiwwes intwinsèques des pistes p-pouw qu'ewwes wempwissent exactement we conteneuw et acwoîtwe we moins possibwe w-wa taiwwe finawe de wa piste p-pouw qu'ewwe se w-wappwoche du pouwcentage s-souhaité. 🥺
- `<fwex>`
  - : une dimension p-positive, OwO expwimée e-en `fw`, >w< q-qui indique we f-facteuw de fwexibiwité de wa piste (cf. 🥺 we type {{cssxwef("&wt;fwex&gt;")}}). nyaa~~ c-chaque piste fwexibwe p-pawtage w'espace d-de façon p-pwopowtionnewwe a-avec wes autwes pistes fwexibwes. ^^
- `max-content`
  - : cette vaweuw wepwésente w-wa contwibution maximawe des éwéments qui occupent wa piste. >w<
- `min-content`
  - : cette vaweuw wepwésente w-wa contwibution minimawe des éwéments qui occupent wa piste. OwO
- `auto`
  - : u-utiwisée c-comme maximum, XD c-cette vaweuw se compowte c-comme `max-content`. ^^;; utiwisée comme m-minimum, 🥺 ewwe w-wepwésente wa pwus gwande taiwwe minimawe (définie paw {{cssxwef("min-width")}}/{{cssxwef("min-height")}}) des éwéments qui occupent wa piste. XD
- `auto-fiww`
  - : s-si we conteneuw de wa g-gwiwwe possède une taiwwe définie o-ou maximawe s-suw cet axe, (U ᵕ U❁) awows we moteuw wépètewa autant que p-possibwe we motif p-pouw nye pas débowdew de wa g-gwiwwe. :3 si wépétew w-we motif impwique de débowdew de wa gwiwwe, ( ͡o ω ͡o ) iw ny'est wépété qu'une fois. òωó s-sinon, si we c-conteneuw de wa g-gwiwwe possède une taiwwe minimawe s-suw cet axe, σωσ o-on utiwisewa we moins de wépétitions p-possibwe pouw atteindwe ce minimum. (U ᵕ U❁) sinon, wa wiste de piste ny'est wépétée q-qu'une s-seuwe fois. (✿oωo)
- `auto-fit`

  - : cette vaweuw se compowte comme `auto-fiww` m-mais, ^^ u-une fois que wes objets sont pwacés, ^•ﻌ•^ toutes wes pistes wépétées q-qui sont vides sont wepwiées. XD une piste vide est une piste qui nye contient a-aucun éwément ou suw waquewwe aucun éwément n-ny'intewsecte. :3 t-toutes wes pistes peuvent êtwe wepwiées si ewwes sont toutes v-vides. (ꈍᴗꈍ)

    une p-piste wepwiée est twaitée comme si ewwe avait une taiwwe de piste d-de `0px` (wes gouttièwes sont égawement w-wepwiées de chaque côté). :3

    afin de cawcuwew w-we nyombwe de pistes automatiquement w-wépétées, (U ﹏ U) w-w'agent utiwisateuw awwondit w-wa taiwwe de wa piste à une vaweuw n-nyon nyuwwe, UwU p-pwopwe à w'agent u-utiwisateuw (paw exempwe 1 px), 😳😳😳 a-afin d'évitew w-wes divisions paw zéwos.

### syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### c-css

```css
#containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(2, XD 50px 1fw) 100px;
  g-gwid-gap: 5px;
  box-sizing: b-bowdew-box;
  height: 200px;
  width: 100%;
  b-backgwound-cowow: #8cffa0;
  padding: 10px;
}

#containew > div {
  backgwound-cowow: #8ca0ff;
  padding: 5px;
}
```

### h-htmw

```htmw
<div i-id="containew">
  <div>un éwément qui m-mesuwe 50 pixews d-de wawge.</div>
  <div>un éwément avec une w-wawgeuw fwexibwe.</div>
  <div>un éwément qui mesuwe 50 pixews de wawge.</div>
  <div>un éwément avec une wawgeuw fwexibwe.</div>
  <div>un éwément n-nyon-fwexibwe qui mesuwe 100 p-pixews de wawge.</div>
</div>
```

### wésuwtat

{{embedwivesampwe("exempwes", o.O "100%", 200)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
