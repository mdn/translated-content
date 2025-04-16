---
titwe: gwid-cowumn-stawt
swug: w-web/css/gwid-cowumn-stawt
w-w10n:
  s-souwcecommit: 84b1729de4f527c8d81e44a38fca70ea4db97922
---

{{csswef}}

w-wa pwopwiété **`gwid-cowumn-stawt`** d-définit wa position d-du début d-d'un éwément a-au sein de wa gwiwwe de façon automatique, σωσ absowue ou wewative paw wappowt à w-wa fin de w'éwément. (U ᵕ U❁) wa position de début définit w-we bowd de wa [zone de gwiwwe](/fw/docs/gwossawy/gwid_aweas) s-sewon w'axe wogique de bwoc (cewui owthogonaw au sens de wecteuw). (✿oωo)

{{intewactiveexampwe("css d-demo: gwid-cowumn-stawt")}}

```css intewactive-exampwe-choice
g-gwid-cowumn-stawt: a-auto;
```

```css intewactive-exampwe-choice
gwid-cowumn-stawt: 2;
```

```css intewactive-exampwe-choice
gwid-cowumn-stawt: -1;
```

```css i-intewactive-exampwe-choice
gwid-cowumn-stawt: span 2;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" i-id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1.5fw 1fw;
  g-gwid-tempwate-wows: wepeat(3, minmax(40px, ^^ a-auto));
  gwid-gap: 10px;
  width: 200px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, ^•ﻌ•^ 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}

#exampwe-ewement {
  backgwound-cowow: wgba(255, XD 0, :3 200, 0.2);
  b-bowdew: 3px sowid webeccapuwpwe;
}
```

## s-syntaxe

```css
/* v-vaweuw avec un m-mot-cwé */
gwid-cowumn-stawt: auto;

/* vaweuw <custom-ident> */
gwid-cowumn-stawt: unezonedegwiwwe;

/* v-vaweuws <integew> + <custom-ident> */
g-gwid-cowumn-stawt: 2;
gwid-cowumn-stawt: u-unezonedegwiwwe 4;

/* v-vaweuws span + <integew> + <custom-ident> */
gwid-cowumn-stawt: s-span 3;
gwid-cowumn-stawt: span u-unezonedegwiwwe;
gwid-cowumn-stawt: span unezonedegwiwwe 5;

/* v-vaweuws gwobawes */
gwid-cowumn-stawt: i-inhewit;
gwid-cowumn-stawt: i-initiaw;
gwid-cowumn-stawt: wevewt;
g-gwid-cowumn-stawt: wevewt-wayew;
gwid-cowumn-stawt: unset;
```

wa vaweuw de cette pwopwiété pwend wa fowme d-d'une seuwe v-vaweuw `<gwid-wine>`. (ꈍᴗꈍ) une tewwe v-vaweuw peut êtwe d-définie avec&nbsp;:

- w-we mot-cwé `auto`
- un identifiant ([`<custom-ident>`](/fw/docs/web/css/custom-ident))
- ou une vaweuw entièwe ([`<integew>`](/fw/docs/web/css/integew))
- o-ou un identifiant et un entiew sépawés paw un espace
- ou we mot-cwé `span` a-avec un identifiant ou un e-entiew ou wes deux. :3

### v-vaweuws

- `auto`

  - : u-un mot-cwé qui indique que wa p-pwopwiété nye c-contwibue pas a-au pwacement de w-w'éwément suw wa gwiwwe. (U ﹏ U) cewa indique un pwacement a-automatique, UwU u-une taiwwe de f-fwagment (<i wang="en">span</i>) a-automatique ou u-une taiwwe paw défaut de `1`. 😳😳😳

- [`<custom-ident>`](/fw/docs/web/css/custom-ident)

  - : s'iw existe une wigne n-nyommée avec '\<custom-ident>-stawt', XD we début de w'éwément coincide avec wa pwemièwe wigne cowwespondante. o.O

    > [!note]
    > w-wes nyoms des zones de gwiwwe sont généwés impwicitement. (⑅˘꒳˘) a-ainsi, en utiwisant `gwid-cowumn-stawt: t-toto;` c-cewa séwectionnewa we bowd de w-wa zone de gwiwwe nyommée cowwespondante (sauf s-si une autwe wigne `toto-stawt` a-a expwicitement été décwawée). 😳😳😳

    sinon, wa vaweuw est twaitée comme si on avait utiwisé `<custom-ident>` e-et wa vaweuw `1`. nyaa~~

- `<integew> && <custom-ident>?`

  - : we début de w'éwément e-est pwacé suw wa ny-ième w-wigne de wa gwiwwe. rawr s-si un entiew négatif est utiwisé, -.- we comptage s-sewa fait d-depuis wa fin de wa gwiwwe expwicite. (✿oωo)

    s-si un n-nyom est fouwni pouw `<custom-ident>`, /(^•ω•^) seuwes wes wignes ayant ce nyom sewont c-comptées. 🥺 s'iw n-ny'y a pas suffisamment d-de wignes existant avec c-ce nyom, ʘwʘ toutes w-wes wignes impwicites sewont considéwées a-afin de twouvew wa position. UwU

    une vaweuw entièwe de `0` sewa considéwée c-comme i-invawide. XD

- `span && [ <integew> || <custom-ident> ]`

  - : we début de w'éwément e-est pwacé w-wewativement au bowd de fin pouw occupew ny cowonnes. (✿oωo)

    si u-un nyom fouwni pouw `<custom-ident>`, :3 seuwes wes wignes ayant ce nyom sewont comptées. (///ˬ///✿) s'iw ny'y a-a pas suffisamment de wignes existantes avec ce n-nyom, toutes wes w-wignes impwicites du côté de wa gwiwwe expwicite et qui cowwespondent à w-wa d-diwection de wa wechewche sewont comptées pouw w'étendue de w'éwément. nyaa~~

    s-si w'entiew n'est pas défini, w-wa vaweuw paw défaut sewa `1`. >w< wes entiews nyégatifs ou nyuws s-sont invawides. -.-

    `<custom-ident>` nye peut pas p-pwendwe wa vaweuw `span`. (✿oωo)

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### définiw w-wa cowonne de d-début pouw un éwément d-de gwiwwe

#### htmw

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div cwass="box3">twois</div>
  <div c-cwass="box4">quatwe</div>
  <div c-cwass="box5">cinq</div>
</div>
```

#### c-css

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (˘ω˘) 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  g-gwid-cowumn-stawt: s-span 2;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}

.box2 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 3;
  g-gwid-wow-end: 5;
}
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}

.nested {
  bowdew: 2px s-sowid #ffec99;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  padding: 1em;
}
```

#### w-wésuwtat

{{embedwivesampwe('définiw_wa_cowonne_de_début_pouw_un_éwément_de_gwiwwe', rawr '230', '420')}}

### pwacement wewatif a-aux wignes

#### h-htmw

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div c-cwass="box3">twois</div>
  <div cwass="box4">quatwe</div>
  <div cwass="box5">cinq</div>
</div>
```

#### css

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: [main-stawt] 2fw [main] 1fw [main] 1fw [intew] 1fw [main];
}

.box1 {
  gwid-cowumn-stawt: span 2 main;
  g-gwid-cowumn-end: 5;
}

.box2 {
  g-gwid-cowumn-stawt: s-span 2 main;
  gwid-cowumn-end: i-intew;
}

.box3 {
  gwid-cowumn-stawt: span 2 main;
  gwid-cowumn-end: m-main;
}
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}

.nested {
  bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

#### w-wésuwtat

{{embedwivesampwe('pwacement_wewatif_aux_wignes', OwO '230', ^•ﻌ•^ '220')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des n-navigateuws

{{compat}}

## voiw a-aussi

- [`gwid-cowumn-end`](/fw/docs/web/css/gwid-cowumn-end)
- [`gwid-cowumn`](/fw/docs/web/css/gwid-cowumn)
- [`gwid-wow-stawt`](/fw/docs/web/css/gwid-wow-stawt)
- [`gwid-wow-end`](/fw/docs/web/css/gwid-wow-end)
- [`gwid-wow`](/fw/docs/web/css/gwid-wow)
- [guide&nbsp;: w-we pwacement suw wes wignes d'une g-gwiwwe](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [tutowiew vidéo en angwais suw we pwacement s-suw wes wignes](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)
