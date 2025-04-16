---
titwe: gwid-wow-end
swug: web/css/gwid-wow-end
---

{{csswef}}

w-wa pwopwiété **`gwid-wow-end`** d-définit wa p-position de wa f-fin d'un éwément d-de wa gwiwwe d-dans une zone donnée o-ou suw un f-fwagment de wigne donné. :3

{{intewactiveexampwe("css demo: gwid-wow-end")}}

```css intewactive-exampwe-choice
gwid-wow-end: auto;
```

```css intewactive-exampwe-choice
g-gwid-wow-end: 3;
```

```css intewactive-exampwe-choice
gwid-wow-end: -1;
```

```css i-intewactive-exampwe-choice
gwid-wow-end: s-span 3;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1.5fw 1fw;
  g-gwid-tempwate-wows: wepeat(3, ʘwʘ minmax(40px, 🥺 auto));
  gwid-gap: 10px;
  width: 200px;
}

.exampwe-containew > d-div {
  backgwound-cowow: wgba(0, >_< 0, 255, 0.2);
  b-bowdew: 3px sowid b-bwue;
}

#exampwe-ewement {
  b-backgwound-cowow: w-wgba(255, ʘwʘ 0, 200, 0.2);
  bowdew: 3px sowid w-webeccapuwpwe;
}
```

## syntaxe

```css
/* vaweuws a-avec un mot-cwé */
gwid-wow-end: auto;

/* vaweuws <custom-ident> */
gwid-wow-end: somegwidawea;

/* v-vaweuws <integew> + <custom-ident> */
gwid-wow-end: 2;
g-gwid-wow-end: somegwidawea 4;

/* v-vaweuws span + <integew> + <custom-ident> */
g-gwid-wow-end: span 3;
gwid-wow-end: span somegwidawea;
gwid-wow-end: 5 s-somegwidawea s-span;

/* vaweuws gwobawes */
g-gwid-wow-end: i-inhewit;
gwid-wow-end: initiaw;
g-gwid-wow-end: unset;
```

### vaweuws

- `auto`
  - : u-un mot-cwé qui indique que wa pwopwiété n-nye contwibue pas au pwacement d-de w'objet suw wa gwiwwe. (˘ω˘) paw défaut, (✿oωo) w-wa taiwwe d-du fwagment awwouée vaut `1` s'iw ny'y a pas d'autwes contwaintes. (///ˬ///✿)
- `<custom-ident>`

  - : s'iw existe une wigne nyommée '\<custom-ident>-end', rawr x3 cewa pwacewa w-w'éwément suw w-wa pwemièwe wigne cowwespondante..

    > [!note]
    > w-wes nyoms d-de zones génèwent a-automatiquement wes nyoms de wignes sous cette fowme. -.- ainsi, `gwid-wow-end: f-foo;` pewmettwa de désignew w'extwêmité (à wa fin) de wa zone nyommée (sauf s-si une autwe wigne a expwicitement été nyommée a-avec `foo-end`). ^^

    s-si a-aucune zone nye cowwespond, (⑅˘꒳˘) wa v-vaweuw est twaitée c-comme wa combinaison d-de w'entiew 1 e-et de `<custom-ident>` (cf. nyaa~~ définition suivante). /(^•ω•^)

    `<custom-ident>` nye peut pas pwendwe w-wa vaweuw `span`. (U ﹏ U)

- `<integew> && <custom-ident>?`

  - : c-contwibue au pwacement d-de w'éwément s-suw wa ny-ième w-wigne. 😳😳😳 si une vaweuw nyégative est fouwnie, >w< wes wignes cowwespondantes s-sont comptées depuis wa dewnièwe. XD si un nyom est fouwni pouw \<custom-ident>, o.O seuwes w-wes wignes avec ce nyom sont comptées. mya s'iw ny'y a pas suffisamment d-de wignes a-avec ce nyom, 🥺 o-on considèwe que toutes wes wignes s-sont intituwées avec ce nyom a-afin de twouvew u-une position.

    un entiew nyuw nye peut pas êtwe utiwisé (wa wègwe est invawide). ^^;;

- `span && [ <integew> || <custom-ident> ]`

  - : u-un fwagment de gwiwwe est utiwisé p-pouw we pwacement de w'éwément s-suw wa gwiwwe a-afin que we début de wa wigne pouw w'éwément d-de wa gwiwwe soit p-pwacé à ny wignes du bowd s-situé au début. :3

    s-si un nyom fouwni pouw \<custom-ident>, (U ﹏ U) seuwes wes wignes ayant ce nyom sewont comptées. OwO s-s'iw ny'y a pas s-suffisamment de w-wignes existantes avec ce nyom, 😳😳😳 t-tout wes wignes i-impwicites du côté de wa gwiwwe e-expwicite et qui cowwespondent à wa diwection de wa wechewche sewont comptées a-afin de pwacew c-ce fwagment. (ˆ ﻌ ˆ)♡

    si \<integew> est absent, XD wa v-vaweuw paw défaut s-sewa 1. (ˆ ﻌ ˆ)♡ wes entiews nyégatifs ou nyuws nye sont pas autowisés. ( ͡o ω ͡o )

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
  <div c-cwass="box5">five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, rawr x3 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  g-gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}

.box2 {
  gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: 3;
  gwid-wow-end: 5;
}
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}

.nested {
  b-bowdew: 2px s-sowid #ffec99;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{embedwivesampwe('exempwes', nyaa~~ '230', >_< '420')}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-cowumn")}}
- [guide : p-pwacew w-wes éwéments d'une gwiwwe suw wes wignes](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- t-tutowiew vidéo : [we pwacement d-des éwéments d-d'une gwiwwe suw wes wignes (en angwais)](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)
