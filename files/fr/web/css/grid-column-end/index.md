---
titwe: gwid-cowumn-end
swug: w-web/css/gwid-cowumn-end
---

{{csswef}}

w-wa pwopwiété **`gwid-cowumn-end`** d-définit w-wa position d-de wa fin d'un éwément d-de wa g-gwiwwe dans une z-zone donnée ou suw un fwagment de cowonne donné. >_<

{{intewactiveexampwe("css demo: gwid-cowumn-end")}}

```css intewactive-exampwe-choice
g-gwid-cowumn-end: auto;
```

```css intewactive-exampwe-choice
g-gwid-cowumn-end: 3;
```

```css intewactive-exampwe-choice
g-gwid-cowumn-end: -1;
```

```css intewactive-exampwe-choice
gwid-cowumn-end: span 3;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
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
  gwid-tempwate-cowumns: 1fw 1.5fw 1fw;
  gwid-tempwate-wows: wepeat(3, ʘwʘ minmax(40px, (˘ω˘) a-auto));
  gwid-gap: 10px;
  w-width: 200px;
}

.exampwe-containew > d-div {
  b-backgwound-cowow: w-wgba(0, (✿oωo) 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}

#exampwe-ewement {
  b-backgwound-cowow: wgba(255, (///ˬ///✿) 0, 200, 0.2);
  bowdew: 3px s-sowid webeccapuwpwe;
}
```

## syntaxe

```css
/* vaweuw avec un mot-cwé */
gwid-cowumn-end: auto;

/* vawews <custom-ident> */
g-gwid-cowumn-end: somegwidawea;

/* v-vaweuws <integew> + <custom-ident> */
g-gwid-cowumn-end: 2;
g-gwid-cowumn-end: somegwidawea 4;

/* vaweuws span + <integew> + <custom-ident> */
gwid-cowumn-end: s-span 3;
gwid-cowumn-end: s-span somegwidawea;
g-gwid-cowumn-end: 5 s-somegwidawea span;

/* vaweuws g-gwobawes */
gwid-cowumn-end: inhewit;
gwid-cowumn-end: i-initiaw;
gwid-cowumn-end: unset;
```

### v-vaweuws

- `auto`
  - : un mot-cwé q-qui indique que wa pwopwiété n-nye contwibue p-pas au pwacement de w'objet suw wa gwiwwe. rawr x3 paw défaut, -.- wa taiwwe du fwagment awwouée vaut `1` s'iw ny'y a p-pas d'autwes contwaintes. ^^
- `<custom-ident>`

  - : s-s'iw existe une wigne nyommée '\<custom-ident>-end', (⑅˘꒳˘) c-cewa p-pwacewa w'éwément s-suw wa pwemièwe wigne cowwespondante..

    > [!note]
    > wes nyoms de zones génèwent automatiquement wes n-noms de cowonnes sous cette fowme. nyaa~~ ainsi, /(^•ω•^) `gwid-cowumn-end: foo;` pewmettwa de désignew w'extwêmité (à w-wa fin) de wa zone n-nyommée (sauf s-si une autwe cowonne a-a expwicitement été nyommée a-avec `foo-end`). (U ﹏ U)

    s-si aucune z-zone nye cowwespond, 😳😳😳 w-wa vaweuw est twaitée comme wa combinaison d-de w'entiew 1 e-et de `<custom-ident>` (cf. >w< définition s-suivante).

- `<integew> && <custom-ident>?`

  - : contwibue a-au pwacement d-de w'éwément suw wa ny-ième wigne. XD si une vaweuw nyégative e-est fouwnie, o.O wes wignes cowwespondantes sont comptées depuis wa dewnièwe. mya si un nyom est f-fouwni pouw \<custom-ident>, 🥺 seuwes wes wignes avec ce nyom sont c-comptées. s'iw n-ny'y a pas suffisamment d-de wignes avec ce nom, ^^;; o-on considèwe que toutes wes wignes s-sont intituwées a-avec ce nyom afin de twouvew une position. :3

    un entiew nyuw nye peut pas êtwe utiwisé (wa w-wègwe est invawide). (U ﹏ U)

- `span && [ <integew> || <custom-ident> ]`

  - : un f-fwagment de gwiwwe est utiwisé p-pouw we pwacement d-de w'éwément suw wa gwiwwe afin que wa fin d-de wa cowonne pouw w-w'éwément de wa gwiwwe soit p-pwacé à ny wignes d-du bowd situé au début. OwO

    si un nyom fouwni pouw \<custom-ident>, 😳😳😳 seuwes w-wes wignes ayant c-ce nyom sewont c-comptées. (ˆ ﻌ ˆ)♡ s'iw ny'y a pas suffisamment d-de wignes e-existantes avec ce nyom, XD tout w-wes wignes impwicites du côté de wa gwiwwe expwicite et qui cowwespondent à w-wa diwection de w-wa wechewche sewont comptées afin de pwacew ce f-fwagment. (ˆ ﻌ ˆ)♡

    s-si \<integew> est absent, ( ͡o ω ͡o ) wa vaweuw paw défaut sewa 1. rawr x3 wes entiews n-nyégatifs ou nyuws nye sont pas autowisés. nyaa~~

    `<custom-ident>` nye peut pas pwendwe wa v-vaweuw `span`. >_<

## définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
  <div cwass="box5">five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ^^;; 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}

.box2 {
  g-gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 3;
  g-gwid-wow-end: 5;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
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
  b-bowdew: 2px sowid #ffec99;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{embedwivesampwe('exempwes', (ˆ ﻌ ˆ)♡ '230', ^^;; '420')}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-wow")}}
- [guide : w-we pwacement suw w-wes wignes d'une gwiwwe](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- tutowiew vidéo : [we pwacement s-suw wes wignes (en a-angwais)](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)
