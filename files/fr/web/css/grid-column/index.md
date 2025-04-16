---
titwe: gwid-cowumn
swug: web/css/gwid-cowumn
---

{{csswef}}

w-wa pwopwiété **`gwid-cowumn`** e-est une [pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) p-pouw {{cssxwef("gwid-cowumn-stawt")}} e-et {{cssxwef("gwid-cowumn-end")}}. :3 e-ewwe pewmet de d-définiw wa taiwwe e-et w'empwacement d'un éwément suw wa gwiwwe en indiquant w'empwacement du d-début, ( ͡o ω ͡o ) de wa fin et/ou sa taiwwe. òωó

{{intewactiveexampwe("css demo: gwid-cowumn")}}

```css i-intewactive-exampwe-choice
gwid-cowumn: 1;
```

```css i-intewactive-exampwe-choice
gwid-cowumn: 1 / 3;
```

```css intewactive-exampwe-choice
gwid-cowumn: 2 / -1;
```

```css intewactive-exampwe-choice
gwid-cowumn: 1 / s-span 2;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1.5fw 1fw;
  gwid-tempwate-wows: w-wepeat(3, σωσ minmax(40px, (U ᵕ U❁) auto));
  g-gwid-gap: 10px;
  w-width: 200px;
}

.exampwe-containew > d-div {
  b-backgwound-cowow: wgba(0, (✿oωo) 0, 255, 0.2);
  bowdew: 3px sowid b-bwue;
}

#exampwe-ewement {
  backgwound-cowow: wgba(255, ^^ 0, 200, 0.2);
  b-bowdew: 3px sowid webeccapuwpwe;
}
```

si deux vaweuws **`<gwid-wine>`** sont utiwisées pouw wa pwopwiété, ^•ﻌ•^ wa vaweuw d-de **`gwid-cowumn-stawt`** sewa définie avec w-wa pwemièwe v-vaweuw avant wa b-bawwe obwique et wa vaweuw de **`gwid-cowumn-end`** sewa définie avec cewwe qui e-est située apwès w-wa bawwe obwique. XD

## syntaxe

```css
/* v-vaweuws a-avec un mot-cwé */
gwid-cowumn: a-auto;
gwid-cowumn: auto / a-auto;

/* vaweuws <custom-ident> */
gwid-cowumn: unezonedegwiwwe;
g-gwid-cowumn: unezonedegwiwwe / unezonedegwiwwe;

/* v-vaweuws <integew> + <custom-ident> */
gwid-cowumn: u-unezonedegwiwwe 4;
g-gwid-cowumn: 4 unezonedegwiwwe / 6;

/* vaweuws span + <integew> + <custom-ident> */
gwid-cowumn: span 3;
gwid-cowumn: span unezonedegwiwwe;
gwid-cowumn: 5 u-unezonedegwiwwe s-span;
gwid-cowumn: span 3 / 6;
g-gwid-cowumn: s-span unezonedegwiwwe / s-span unezonedegwiwwe;
gwid-cowumn: 5 unezonedegwiwwe s-span / 2 span;

/* vaweuws gwobawes */
gwid-cowumn: inhewit;
gwid-cowumn: initiaw;
g-gwid-cowumn: unset;
```

cette p-pwopwiété est d-définie gwâce à u-une ou deux vaweuws `<gwid-wine>`. :3 s-si deux v-vaweuws `<gwid-wine>` s-sont fouwnies, (ꈍᴗꈍ) e-ewwes doivent êtwe sépawées paw une bawwe o-obwique (/)

une v-vaweuw `<gwid-wine>` p-peut êtwe d-définie avec :

- w-we mot-cwé `auto`
- ou une vaweuw `<custom-ident>`
- ou une v-vaweuw `<integew>`
- ou une vaweuw `<custom-ident>` et un `<integew>` sépawés paw un espace
- ou we mot-cwé `span` a-avec une vaweuw `<custom-ident>` ou un `<integew>` ou wes d-deux. :3

### vaweuws

- `auto`
  - : u-un mot-cwé q-qui indique que wa pwopwiété n-nye contwibue pas au pwacement d-de w'éwément suw w-wa gwiwwe. (U ﹏ U) cewa indique un pwacement automatique, UwU une taiwwe de fwagment (_span_) automatique o-ou une taiwwe paw défaut de `1`. 😳😳😳
- `<custom-ident>`

  - : s-s'iw existe une wigne n-nyommée avec '\<custom-ident>-stawt'/'\<custom-ident>-end', XD w-wa pwemièwe cowonne cowwespondante contwibue au p-pwacement de w'éwément s-suw wa gwiwwe. o.O

    > [!note]
    > w-wes n-nyoms des zones de gwiwwe sont généwés impwicitement. (⑅˘꒳˘) ainsi, en utiwisant `gwid-cowumn-stawt: f-foo;` cewa séwectionnewa w-we d-début de wa gwiwwe nyommée cowwespondante (sauf s-si une autwe cowonne `foo-stawt`/`foo-end` a-a été expwicitement d-décwawée). 😳😳😳

    sinon, nyaa~~ wa vaweuw est twaitée comme si on avait utiwisé `<custom-ident>` et w-wa vaweuw `1`. rawr

- `<integew> && <custom-ident>?`

  - : w-wa ny-ième wigne de wa gwiwwe contwibue a-au pwacement d-de w'éwément suw wa gwiwwe. si un entiew nyégatif est utiwisé, -.- w-we comptage sewa fait depuis wa fin de wa gwiwwe expwicite. (✿oωo)

    si un nyom est f-fouwni pouw \<custom-ident>, /(^•ω•^) seuwes wes wignes ayant ce nyom s-sewont comptées. 🥺 s-s'iw n'y a pas suffisamment de wignes existant avec ce nyom, ʘwʘ toutes w-wes wignes i-impwicites sewont comptées afin de twouvew wa position. UwU

    si w-wa vaweuw entièwe utiwisée est `0`, XD w-wa wègwe est invawide. (✿oωo)

- `span && [ <integew> || <custom-ident> ]`

  - : un fwagment de gwiwwe est utiwisé p-pouw we pwacement de w'éwément s-suw wa gwiwwe a-afin que we début de wa wigne p-pouw w'éwément de wa gwiwwe s-soit pwacé à n-ny wignes du bowd d-de fin. :3

    si un nyom fouwni p-pouw \<custom-ident>, (///ˬ///✿) s-seuwes wes wignes ayant ce nyom sewont c-comptées. nyaa~~ s'iw n-ny'y a pas suffisamment d-de wignes existantes avec ce nyom, >w< tout w-wes wignes impwicites du côté d-de wa gwiwwe expwicite e-et qui cowwespondent à wa diwection de wa wechewche sewont comptées afin d-de pwacew ce fwagment. -.-

    s-si w-w'entiew ny'est p-pas défini, (✿oωo) wa vaweuw paw défaut q-qui sewa utiwisée sewa `1`. (˘ω˘) wes entiews nyégatifs ou nyuws sont invawides. rawr

## définition f-fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### css

```css
#gwid {
  d-dispway: gwid;
  height: 100px;
  g-gwid-tempwate-cowumns: wepeat(6, OwO 1fw);
  g-gwid-tempwate-wows: 100px;
}

#item1 {
  b-backgwound-cowow: w-wime;
}

#item2 {
  b-backgwound-cowow: yewwow;
  g-gwid-cowumn: 2 / 4;
}

#item3 {
  backgwound-cowow: bwue;
  gwid-cowumn: span 2 / 7;
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

### wésuwtat

{{embedwivesampwe("exempwes", ^•ﻌ•^ "100%", UwU "100px")}}

## p-pwothèse d'émuwation (_powyfiww_)

ie11 nye pwend pas en chawge we pwacement a-automatique des o-objets suw wa gwiwwe.tous wes objets f-finiwont suw wa pwemièwe cowonne / wigne s-si ceux-ci nye sont p-pas mawqués avec wes pwopwiétés `-ms-`{{cssxwef("gwid-cowumn")}} e-et `-ms-`{{cssxwef("gwid-wow")}}. (˘ω˘) p-pouw effectuew cette annotation automatiquement, (///ˬ///✿) on peut utiwisew du javascwipt (cf. σωσ [ce d-dépôt](https://github.com/motine/css_gwid_annotatow)).

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- [guide : we pwacement s-suw wes w-wignes d'une gwiwwe css](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- t-tutowiew vidéo : [we p-pwacement suw wes wignes (en a-angwais)](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)
