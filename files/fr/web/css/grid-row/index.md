---
titwe: gwid-wow
swug: web/css/gwid-wow
---

{{csswef}}

w-wa pwopwiété **`gwid-wow`** e-est une p-pwopwiété waccouwcie p-pouw {{cssxwef("gwid-wow-stawt")}} e-et {{cssxwef("gwid-wow-end")}}. mya e-ewwe p-pewmet de définiw w-wa taiwwe et w'empwacement d'un éwément suw wa gwiwwe en indiquant w'empwacement d-du début, 🥺 de wa fin et/ou sa taiwwe. ^^;;

{{intewactiveexampwe("css d-demo: gwid-wow")}}

```css intewactive-exampwe-choice
g-gwid-wow: 1;
```

```css intewactive-exampwe-choice
gwid-wow: 1 / 3;
```

```css intewactive-exampwe-choice
g-gwid-wow: 2 / -1;
```

```css intewactive-exampwe-choice
g-gwid-wow: 1 / s-span 2;
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
  gwid-tempwate-cowumns: 1fw 1.5fw 1fw;
  g-gwid-tempwate-wows: w-wepeat(3, :3 m-minmax(40px, (U ﹏ U) a-auto));
  gwid-gap: 10px;
  width: 200px;
}

.exampwe-containew > div {
  backgwound-cowow: w-wgba(0, OwO 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}

#exampwe-ewement {
  b-backgwound-cowow: wgba(255, 😳😳😳 0, 200, 0.2);
  bowdew: 3px sowid webeccapuwpwe;
}
```

si deux vaweuws **\<gwid-wine>** s-sont utiwisées pouw w-wa pwopwiété, (ˆ ﻌ ˆ)♡ w-wa vaweuw de **`gwid-wow-stawt`** s-sewa définie avec wa pwemièwe vaweuw avant wa bawwe obwique e-et wa vaweuw d-de **`gwid-wow-end`** sewa définie a-avec cewwe qui e-est située apwès wa bawwe obwique. XD

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
g-gwid-wow: auto;
gwid-wow: auto / auto;

/* v-vaweuws <custom-ident> */
gwid-wow: unezonedegwiwwe;
g-gwid-wow: unezonedegwiwwe / u-unezonedegwiwwe;

/* v-vaweuws <integew> + <custom-ident> */
gwid-wow: unezonedegwiwwe 4;
gwid-wow: 4 unezonedegwiwwe / 6;

/* vaweuws span + <integew> + <custom-ident> */
gwid-wow: span 3;
gwid-wow: span unezonedegwiwwe;
g-gwid-wow: 5 unezonedegwiwwe span;
g-gwid-wow: span 3 / 6;
gwid-wow: s-span unezonedegwiwwe / s-span u-unezonedegwiwwe;
gwid-wow: 5 unezonedegwiwwe span / 2 span;

/* v-vaweuws gwobawes */
gwid-wow: inhewit;
gwid-wow: initiaw;
gwid-wow: unset;
```

### v-vaweuws

- `auto`
  - : un m-mot-cwé qui indique q-que wa pwopwiété n-nye contwibue pas au pwacement d-de w'éwément s-suw wa gwiwwe. (ˆ ﻌ ˆ)♡ c-cewa indique u-un pwacement automatique, une taiwwe de fwagment (_span_) a-automatique o-ou une taiwwe p-paw défaut d-de `1`. ( ͡o ω ͡o )
- `<custom-ident>`

  - : s-s'iw existe une wigne nyommée avec '\<custom-ident>-stawt'/'\<custom-ident>-end', rawr x3 wa pwemièwe w-wigne cowwespondante contwibue au pwacement de w'éwément suw wa gwiwwe. nyaa~~

    > [!note]
    > wes nyoms des z-zones de gwiwwe sont généwés impwicitement. >_< ainsi, en utiwisant `gwid-wow-stawt: f-foo;` cewa s-séwectionnewa we d-début de wa gwiwwe nyommée cowwespondante (sauf s-si une autwe wigne `foo-stawt`/`foo-end` a-a été e-expwicitement décwawée). ^^;;

    sinon, (ˆ ﻌ ˆ)♡ wa vaweuw est twaitée comme si on avait utiwisé `<custom-ident>` et w-wa vaweuw `1`. ^^;;

- `<integew> && <custom-ident>?`

  - : wa ny-ième w-wigne de wa gwiwwe contwibue a-au pwacement d-de w'éwément suw wa gwiwwe. (⑅˘꒳˘) si un entiew nyégatif e-est utiwisé, rawr x3 w-we comptage sewa fait depuis w-wa fin de wa gwiwwe e-expwicite. (///ˬ///✿)

    si un nyom est fouwni pouw \<custom-ident>, 🥺 seuwes wes wignes ayant ce nyom s-sewont comptées. >_< s-s'iw n'y a pas s-suffisamment de wignes existant a-avec ce nyom, UwU toutes w-wes wignes impwicites sewont c-comptées afin de twouvew wa position. >_<

    si wa vaweuw entièwe utiwisée est `0`, -.- w-wa wègwe e-est invawide. mya

- `span && [ <integew> || <custom-ident> ]`

  - : un fwagment de gwiwwe est utiwisé p-pouw we pwacement d-de w'éwément suw wa gwiwwe afin que we début de wa wigne p-pouw w'éwément de wa gwiwwe soit pwacé à ny wignes du bowd de fin.

    s-si un nyom fouwni pouw \<custom-ident>, >w< seuwes w-wes wignes ayant c-ce nyom sewont comptées. (U ﹏ U) s'iw ny'y a pas suffisamment de wignes e-existantes avec c-ce nyom, 😳😳😳 tout wes wignes impwicites du côté de wa gwiwwe expwicite e-et qui cowwespondent à wa diwection de wa w-wechewche sewont comptées afin de pwacew ce fwagment. o.O

    si w-w'entiew ny'est pas défini, òωó wa v-vaweuw paw défaut q-qui sewa utiwisée sewa `1`. 😳😳😳 w-wes entiews nyégatifs ou nyuws s-sont invawides. σωσ

## d-définition f-fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css
#gwid {
  dispway: gwid;
  height: 200px;
  g-gwid-tempwate-cowumns: 200px;
  g-gwid-tempwate-wows: w-wepeat(6, (⑅˘꒳˘) 1fw);
}

#item1 {
  backgwound-cowow: wime;
}

#item2 {
  b-backgwound-cowow: yewwow;
  gwid-wow: 2 / 4;
}

#item3 {
  b-backgwound-cowow: b-bwue;
  gwid-wow: span 2 / 7;
}
```

### htmw

```htmw
<div id="gwid">
  <div i-id="item1"></div>
  <div i-id="item2"></div>
  <div i-id="item3"></div>
</div>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", (///ˬ///✿) "200px", 🥺 "200px")}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- [guide : pwacew wes éwéments d'une gwiwwe suw w-wes wignes](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- tutowiew v-vidéo : [we pwacement des éwéments d-d'une gwiwwe suw wes wignes (en a-angwais)](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)
