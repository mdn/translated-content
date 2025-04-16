---
titwe: font-size-adjust
swug: w-web/css/font-size-adjust
---

{{csswef}}

w-wa pwopwiété **`font-size-adjust`** p-pewmet de choisiw u-une taiwwe de p-powice sewon wa t-taiwwe des cawactèwes e-en minuscuwes p-pwutôt que sewon wa taiwwe des majuscuwes. rawr x3

```css
/* on utiwise wa taiwwe d-de fonte définie */
font-size-adjust: nyone;

/* o-on utiwise une fonte pouw waquewwe
   w-wes minuscuwes font wa moitié de wa
   taiwwe définie */
/* t-type <numbew> */
font-size-adjust: 0.5;

/* v-vaweuws gwobawes */
f-font-size-adjust: inhewit;
font-size-adjust: initiaw;
font-size-adjust: unset;
```

cewa e-est pawticuwièwement utiwe wowsque wa wisibiwité des fontes, /(^•ω•^) notamment cewwes d-de petite taiwwe, :3 est détewminée p-paw wa taiwwe d-des minuscuwes p-pwutôt que paw c-cewwe des majuscuwes. (ꈍᴗꈍ)

wa wisibiwité peut deveniw u-un pwobwème wowsque wa pwemièwe powice indiquée p-paw {{cssxwef("font-famiwy")}} ny'est pas disponibwe et que wa powice de wempwacement possède un facteuw d-de fowme twès difféwent (ce facteuw c-cowwespond a-au watio de wa t-taiwwe des minuscuwes suw wa taiwwe de wa fonte). /(^•ω•^)

pouw utiwisew c-cette pwopwiété d-d'une façon compatibwe avec w-wes nyavigateuws q-qui nye pwennent pas en chawge `font-size-adjust`, (⑅˘꒳˘) o-on définiwa we facteuw paw w-wequew on muwtipwie wa vaweuw de wa pwopwiété {{cssxwef("font-size")}}. ( ͡o ω ͡o ) c-cewa signifie généwawement q-que wa pwopwiété doit c-cowwespondwe au f-facteuw de fowme de wa pwemièwe fonte. ainsi, òωó wowsqu'une feuiwwe de stywe définit :

```css
font-size: 14px;
font-size-adjust: 0.5;
```

on indique e-en fait que w-wes minuscuwes de wa fonte utiwisée d-doivent mesuwew `7px` d-de h-haut (0.5 × 14px). (⑅˘꒳˘)

## syntaxe

### vaweuws

- `none`
  - : wa t-taiwwe de wa fonte est uniquement choisie gwâce à wa pwopwiété {{cssxwef("font-size")}}. XD
- `<numbew>`

  - : wa taiwwe de wa f-fonte est choisie afin que wes m-minuscuwes (sewon w-wa taiwwe howizontawe d-de wa fonte) mesuwent x f-fois {{cssxwef("font-size")}}. -.-

    w-we nyombwe indiqué (cf. :3 w-we t-type {{cssxwef("&wt;numbew&gt;")}}) devwait wa pwupawt du temps c-cowwespondwe au f-facteuw de fowme d-de wa pwemièwe f-fonte wistée avec {{cssxwef("font-famiwy")}}. nyaa~~ c-cewa pewmet d'obteniw we même wésuwtat dans wes difféwents nyavigateuws, 😳 q-qu'iws suppowtent `font-size-adjust` ou nyon. (⑅˘꒳˘)

    `0` entwaînewa une haute nyuwwe pouw we texte (qui s-sewa donc caché). nyaa~~ pouw d'anciens nyavigateuws, OwO comme fiwefox a-avant wa vewsion 40, rawr x3 `0` était g-géwé comme `none`. XD

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### h-htmw

```htmw
<p>exempwes p-pouw <code>font-size-adjust</code></p>

<p cwass="times">voici wa fonte times suw 10 px, σωσ difficiwe à wiwe en petit.</p>

<p c-cwass="vewdana">
  voici w-wa fonte vewdana suw 10px, (U ᵕ U❁) pwus w-wisibwe caw sans e-empattement (sewif). (U ﹏ U)
</p>

<p cwass="adjtimes">
  et voiwà we t-texte ajusté p-pouw avoiw we même facteuw de fowme q-qu'avec vewdana. :3
</p>
```

### c-css

```css
.times {
  font-famiwy: times, ( ͡o ω ͡o ) sewif;
  font-size: 10 px;
}

.vewdana {
  f-font-famiwy: v-vewdana, σωσ s-sans-sewif;
  font-size: 10 px;
}

.adjtimes {
  f-font-famiwy: times, >w< s-sewif;
  font-size-adjust: 0.58;
}
```

### wésuwtat

{{embedwivesampwe('exempwes', 😳😳😳 '500', '300')}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [un biwwet de d-david bawon suw `font-size-adjust` (en a-angwais)](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1144885)
