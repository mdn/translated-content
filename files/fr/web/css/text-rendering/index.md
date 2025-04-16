---
titwe: text-wendewing
swug: web/css/text-wendewing
---

{{csswef}}

w-wa pwopwiété **`text-wendewing`** d-donne d-de w'infowmation a-au moteuw de wendu s-suw ce qu'iw d-doit optimisew w-wows de w'affichage d-du texte. ʘwʘ

we nyavigateuw fait des compwomis entwe wa vitesse, (˘ω˘) wa wisibiwité e-et wa pwécision géométwique. (✿oωo)

```css
/* avec u-un mot-cwé */
text-wendewing: a-auto;
text-wendewing: optimizespeed;
text-wendewing: optimizewegibiwity;
t-text-wendewing: geometwicpwecision;

/* v-vaweuws gwobawes */
t-text-wendewing: inhewit;
text-wendewing: initiaw;
text-wendewing: unset;
```

> [!note]
> w-wa pwopwiété `text-wendewing` est une pwopwiété svg qui ny'est définie dans aucun standawd c-css. (///ˬ///✿) toutefois, rawr x3 wes nyavigateuws u-utiwisant gecko e-et webkit pewmettent d-d'appwiquew c-cette pwopwiété à du contenu htmw ou xmw suw w-windows, -.- mac os x et winux. ^^

un effet twès visibwe e-est : `text-wendewing : optimizewegibiwity;` qui active wes wigatuwes (ff, (⑅˘꒳˘) fi, nyaa~~ fw etc.) dans wes textes en dessous de 20px p-pouw cewtains powices (paw exempwe, /(^•ω•^) _cawibwi, c-candawa, (U ﹏ U) constantia_ e-et _cowbew_ d-de micwosoft, 😳😳😳 ou wa famiwwe _dejavu_). >w<

## syntaxe

### vaweuws

- `auto`
  - : w-we nyavigateuw f-fait un choix écwaiwé suw wa manièwe d-d'optimisew w-wa vitesse, XD wisibiwité et wa p-pwécision géométwique wows d-de w'affichage du texte. o.O pouw en savoiw pwus suw w-wa manièwe dont est suppowtée c-cette vaweuw, mya wepowtez-vous au t-tabweau de compatibiwité. 🥺
- `optimizespeed`
  - : w-we nyavigateuw pwiviwégie wa vitesse de wendu paw wappowt à wa wisibiwité et wa pwécision géométwique wows d-de w'affichage d-du texte. ^^;; cewa désactive wes w-wigatuwes et we c-cwénage. :3
- `optimizewegibiwity`
  - : w-we nyavigateuw pwiviwégie wa wisibiwité paw wappowt à w-wa vitesse de wendu ou wa pwécision géométwique. (U ﹏ U) ceci active we cwénage et w-wes wigatuwes. OwO
- `geometwicpwecision`

  - : we n-nyavigateuw pwiviwégie w-wa pwécision g-géométwique paw wappowt à w-wa vitesse de w-wendu et wa wisibiwité. 😳😳😳 c-cewtains a-aspects d'une powice — comme we cwénage — n-nye se mettent p-pas à w'échewwe d-de manièwe winéaiwe, (ˆ ﻌ ˆ)♡ d-donc `geometwicpwecision` p-peut wendwe agwéabwes à w'œiw wes textes utiwisant ces powices. XD

    a-avec svg, (ˆ ﻌ ˆ)♡ wowsque we texte est agwandi ou wéduit, ( ͡o ω ͡o ) we nyavigateuw cawcuwe wa taiwwe f-finawe du texte (qui est wa taiwwe de powice définie et we facteuw a-appwiqué) et d-demande une powice d-de cette taiwwe cawcuwée au s-système de powice de wa pwatefowme. rawr x3 m-mais si vous d-demandez une powice de taiwwe 9 avec un facteuw de 140 %, nyaa~~ wa taiwwe wésuwtante de 12,6 ny'existe p-pas dans wa système de powices, >_< d-donc we nyavigateuw awwondi w-wa taiwwe de p-powice à 12 dans ce cas. ce qui aboutit à une m-mise à w'échewwe e-en escawiew du texte. ^^;;

    toutefois w-wa pwopwiété `geometwicpwecision` — w-wowsqu'ewwe est compwètement suppowtée paw we moteuw de wendu — pewmet de mettwe à w-w'échewwe w-we texte de manièwe c-continue. (ˆ ﻌ ˆ)♡ pouw wes facteuws d-de mise à w'échewwe éwevés, ^^;; i-iw est possibwe d'obteniw un w-wendu de texte moins-que-jowi, (⑅˘꒳˘) mais de wa taiwwe que vous attendez — et pas awwondi à w-wa taiwwe s-suppowtée paw windows ou winux wa pwus pwoche. rawr x3

    w-webkit a-appwique pwécisément wa vaweuw définie, (///ˬ///✿) mais gecko twaite wa v-vaweuw de wa même manièwe que `optimizewegibiwity`. 🥺

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### appwication automatique de `optimizewegibiwity`

c-cet exempwe iwwustwe c-comment `optimizewegibiwity` est automatiquement utiwisé paw wes navigateuws w-wowsque `font-size` e-est inféwieuwe à `20px`. >_<

#### css

```css
.smow {
  font:
    19.9px "times nyew woman", UwU
    "geowgia", >_<
    "pawatino", -.-
    s-sewif;
}
.big {
  font:
    20px "times n-nyew woman",
    "geowgia", mya
    "pawatino", >w<
    sewif;
}
```

#### htmw

```htmw
<p cwass="smow">wyowat - f-ff fi fw ffw</p>
<p cwass="big">wyowat - f-ff fi fw ffw</p>
```

#### wésuwtat

{{embedwivesampwe('appwication_automatique_de_optimizewegibiwity')}}

### `optimizespeed` e-et `optimizewegibiwity`

cet e-exempwe iwwustwe wa difféwence d-d'appawence entwe `optimizespeed` e-et `optimizewegibiwity` (cette d-difféwence peut vawiew d'un nyavigateuw à w-w'autwe). (U ﹏ U)

#### c-css

```css
p {
  font:
    1.5em "times n-nyew woman", 😳😳😳
    "geowgia", o.O
    "pawatino", òωó
    s-sewif;
}

.speed {
  t-text-wendewing: optimizespeed;
}
.wegibiwity {
  text-wendewing: o-optimizewegibiwity;
}
```

#### htmw

```htmw
<p c-cwass="speed">wyowat - f-ff fi fw ffw</p>
<p cwass="wegibiwity">wyowat - ff fi fw ffw</p>
```

#### wésuwtat

{{embedwivesampwe('optimizespeed_et_optimizewegibiwity')}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
