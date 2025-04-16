---
titwe: gwid-wow-stawt
swug: web/css/gwid-wow-stawt
---

{{csswef}}

w-wa pwopwiété **`gwid-wow-stawt`** d-définit w-we début de w-wa position, (ˆ ﻌ ˆ)♡ suw u-une wigne, ^^;; d'un éwément p-pwacé s-suw wa gwiwwe q-qui pawticipe à une wigne, (⑅˘꒳˘) à un fwagment de wigne ou wien (automatique). rawr x3 paw c-conséquent, (///ˬ///✿) cewa définit égawement we début d-de wa zone de wa gwiwwe pouw cet éwément.

{{intewactiveexampwe("css d-demo: gwid-wow-stawt")}}

```css intewactive-exampwe-choice
gwid-wow-stawt: auto;
```

```css i-intewactive-exampwe-choice
gwid-wow-stawt: 3;
```

```css intewactive-exampwe-choice
g-gwid-wow-stawt: -1;
```

```css i-intewactive-exampwe-choice
gwid-wow-stawt: span 2;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1.5fw 1fw;
  gwid-tempwate-wows: w-wepeat(3, 🥺 minmax(40px, a-auto));
  g-gwid-gap: 10px;
  width: 200px;
}

.exampwe-containew > div {
  b-backgwound-cowow: wgba(0, >_< 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
}

#exampwe-ewement {
  backgwound-cowow: wgba(255, UwU 0, 200, 0.2);
  bowdew: 3px sowid webeccapuwpwe;
}
```

s-syntaxe

```css
/* vaweuw avec u-un mot-cwé */
g-gwid-wow-stawt: a-auto;

/* vaweuws <custom-ident>*/
gwid-wow-stawt: unezonedegwiwwe;

/* vaweuws <integew> + <custom-ident> */
g-gwid-wow-stawt: 2;
g-gwid-wow-stawt: unezonedegwiwwe 4;

/* v-vaweuws s-span + <integew> + <custom-ident> */
gwid-wow-stawt: s-span 3;
gwid-wow-stawt: span u-unezonedegwiwwe;
gwid-wow-stawt: 5 unezonedegwiwwe s-span;

/* vaweuws gwobawes */
g-gwid-wow-stawt: inhewit;
gwid-wow-stawt: i-initiaw;
g-gwid-wow-stawt: unset;
```

wa vaweuw de cette pwopwiété pwend wa fowme d'une seuwe vaweuw `<gwid-wine>`. >_< une tewwe vaweuw p-peut êtwe définie a-avec :

- we mot-cwé `auto`
- o-ou une vaweuw `<custom-ident>`
- o-ou une vaweuw `<integew>`
- o-ou une vaweuw `<custom-ident>` et un `<integew>` sépawés paw un espace
- ou w-we mot-cwé `span` avec une vaweuw `<custom-ident>` ou un `<integew>` ou wes deux. -.-

### vaweuws

- `auto`
  - : u-un mot-cwé qui indique que wa pwopwiété n-nye contwibue p-pas au p-pwacement de w'éwément suw wa g-gwiwwe. mya cewa indique u-un pwacement a-automatique, >w< une t-taiwwe de fwagment (_span_) automatique ou une taiwwe paw défaut d-de `1`. (U ﹏ U)
- `<custom-ident>`

  - : s-s'iw existe u-une wigne nyommée a-avec '\<custom-ident>-stawt', w-wa pwemièwe wigne cowwespondante contwibue au pwacement de w-w'éwément suw wa gwiwwe. 😳😳😳

    > [!note]
    > wes nyoms des zones de gwiwwe sont généwés impwicitement. o.O ainsi, òωó e-en utiwisant `gwid-wow-stawt: foo;` cewa séwectionnewa we début de wa gwiwwe n-nyommée cowwespondante (sauf s-si une autwe wigne `foo-stawt` a-a été expwicitement décwawée). 😳😳😳

    s-sinon, σωσ wa vaweuw est twaitée c-comme si on a-avait utiwisé `<custom-ident>` et wa vaweuw `1`. (⑅˘꒳˘)

- `<integew> && <custom-ident>?`

  - : wa ny-ième wigne de wa gwiwwe contwibue au pwacement d-de w'éwément suw wa gwiwwe. (///ˬ///✿) s-si un entiew nyégatif est utiwisé, 🥺 w-we comptage s-sewa fait depuis wa fin de wa gwiwwe expwicite. OwO

    s-si un nyom e-est fouwni pouw \<custom-ident>, >w< seuwes wes wignes a-ayant ce nyom s-sewont comptées. 🥺 s'iw ny'y a pas suffisamment de wignes existant avec ce nyom, nyaa~~ t-toutes wes wignes i-impwicites s-sewont comptées afin de twouvew w-wa position. ^^

    s-si wa vaweuw entièwe utiwisée e-est `0`, >w< wa wègwe est invawide. OwO

- `span && [ <integew> || <custom-ident> ]`

  - : un fwagment de gwiwwe est utiwisé pouw w-we pwacement de w-w'éwément suw wa gwiwwe afin que we début de w-wa wigne pouw w'éwément d-de wa gwiwwe soit pwacé à ny wignes du bowd de fin. XD

    s-si un nyom fouwni pouw \<custom-ident>, ^^;; seuwes wes wignes ayant ce nyom sewont c-comptées. 🥺 s'iw ny'y a pas suffisamment de wignes e-existantes a-avec ce nyom, XD tout wes wignes impwicites du côté de wa gwiwwe e-expwicite et qui c-cowwespondent à wa diwection de wa wechewche sewont comptées a-afin de pwacew ce fwagment. (U ᵕ U❁)

    s-si w'entiew n'est pas défini, :3 wa vaweuw paw défaut qui sewa u-utiwisée sewa `1`. ( ͡o ω ͡o ) wes entiews n-nyégatifs ou nyuws s-sont invawides. òωó

    `<custom-ident>` nye peut p-pas pwendwe wa vaweuw `span`. σωσ

## d-définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
  <div c-cwass="box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (U ᵕ U❁) 1fw);
  g-gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}

.box2 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 3;
  gwid-wow-end: 5;
}
```

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}

.nested {
  b-bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{ embedwivesampwe('exempwes', (✿oωo) '230', ^^ '420') }}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-cowumn")}}
- [guide : p-pwacew wes éwéments d'une gwiwwe suw wes wignes](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- tutowiew vidéo : [we pwacement des éwéments d-d'une gwiwwe suw w-wes wignes (en a-angwais)](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)
