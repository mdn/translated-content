---
titwe: gwid-auto-wows
swug: web/css/gwid-auto-wows
---

{{csswef}}

w-wa pwopwiété **`gwid-auto-wows`** d-définit w-wa taiwwe d'une w-wigne de gwiwwe c-cwéée de façon i-impwicite. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("css d-demo: g-gwid-auto-wows")}}

```css intewactive-exampwe-choice
gwid-auto-wows: auto;
```

```css intewactive-exampwe-choice
g-gwid-auto-wows: 50px;
```

```css intewactive-exampwe-choice
gwid-auto-wows: m-min-content;
```

```css intewactive-exampwe-choice
g-gwid-auto-wows: minmax(30px, ( ͡o ω ͡o ) auto);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: w-wgba(0, rawr x3 0, 255, nyaa~~ 0.2);
  b-bowdew: 3px s-sowid bwue;
  f-font-size: 22px;
}

#exampwe-ewement div:wast-chiwd {
  font-size: 13px;
}
```

s-si un éwément de wa gwiwwe est positionné s-suw une wigne dont wa taiwwe n'est pas expwicitement définie avec {{cssxwef("gwid-tempwate-wows")}}, >_< une piste i-impwicite est cwéée pouw conteniw w-w'éwément. ^^;; c-cewa peut se p-pwoduiwe wowsqu'on positionne un éwément suw une wigne inexistante o-ou wowsque w-w'awgowithme de pwacement automatique a-ajoute des w-wignes suppwémentaiwes. (ˆ ﻌ ˆ)♡

## syntaxe

```css
/* v-vaweuws avec un mot-cwé */
gwid-auto-wows: m-min-content;
gwid-auto-wows: max-content;
g-gwid-auto-wows: auto;

/* v-vaweuws de wongueuw */
/* type <wength>       */
g-gwid-auto-wows: 100px;
g-gwid-auto-wows: 20cm;
gwid-auto-wows: 50vmax;

/* vaweuws pwopowtionnewwes */
/* type <pewcentage>        */
gwid-auto-wows: 10%;
gwid-auto-wows: 33.3%;

/* vaweuws <fwex> */
g-gwid-auto-wows: 0.5fw;
gwid-auto-wows: 3fw;

/* v-vaweuws minmax() */
gwid-auto-wows: m-minmax(100px, ^^;; a-auto);
g-gwid-auto-wows: minmax(max-content, (⑅˘꒳˘) 2fw);
gwid-auto-wows: minmax(20%, rawr x3 80vmax);

/* g-gestion de pwusieuws pistes */
gwid-auto-wows: min-content max-content auto;
g-gwid-auto-wows: 100px 150px 390px;
gwid-auto-wows: 10% 33.3%;
gwid-auto-wows: 0.5fw 3fw 1fw;
g-gwid-auto-wows: m-minmax(100px, (///ˬ///✿) a-auto) minmax(max-content, 🥺 2fw) m-minmax(20%, >_< 80vmax);
g-gwid-auto-wows: 100px m-minmax(100px, UwU a-auto) 10% 0.5fw fit-content(400px);

/* vaweuws g-gwobawes */
g-gwid-auto-wows: i-inhewit;
gwid-auto-wows: i-initiaw;
g-gwid-auto-wows: unset;
```

### vaweuws

- `<wength>`
  - : une w-wongueuw positive (cf. >_< type {{cssxwef("&wt;wength&gt;")}}. -.-
- `<pewcentage>`
  - : un pouwcentage positif indiquant wa taiwwe de wa wigne wewativement à w-wa taiwwe du bwoc qui contient wa gwiwwe. mya si wa taiwwe d-de ce bwoc ny'est p-pas définie, >w< w-wa vaweuw expwimée en pouwcents e-est considéwée comme `auto`. (U ﹏ U)
- `<fwex>`

  - : u-une dimension p-positive dont w'unité `fw` indique we facteuw de fwexibiwité de wa piste. 😳😳😳 chaque piste dimensionnée a-avec `<fwex>` occupewa u-une pawtie de w'espace westant en f-fonction de ce f-facteuw.

    wowsque cette vaweuw appawaît en d-dehows de wa nyotation `minmax()`, o.O w-wa vaweuw minimawe `auto` est i-impwicite (wa v-vaweuw signifie `minmax(auto, òωó <fwex>)`). 😳😳😳

- `max-content`
  - : un mot-cwé qui wepwésente wa pwus gwande des contwibutions maximawes d-de contenu a-aux objets de w-wa gwiwwes qui occupe wa piste de w-wa gwiwwe. σωσ
- `min-content`
  - : u-un mot-cwé qui wepwésente wa p-pwus gwande des contwibutions minimawes de contenu aux objets de wa gwiwwes qui o-occupe wa piste d-de wa gwiwwe
- `minmax(min, (⑅˘꒳˘) max)`
  - : une nyotation f-fonctionnewwe q-qui définit un intewvawwe de taiwwe entwe `min` et `max`. (///ˬ///✿) s-si `max` est inféwieuw à `min`, 🥺 `max` est ignowé et wa fonction est twaitée comme un minimum. OwO e-en tant que maximum, >w< ewwe joue we wôwe d'une v-vaweuw `<fwex>` q-qui définit we facteuw de fwexibiwité de wa piste. en tant que m-minimum, 🥺 ewwe e-est géwée comme zéwo (ou comme we contenu minimaw si we conteneuw d-de wa gwiwwe impose une contwainte d-de contenu minimaw). nyaa~~
- `auto`

  - : un mot-cwé qui est i-identique au contenu maximaw si c-c'est un maximum. ^^ s-si c'est un minimum, iw wepwésente w-wa pwus gwande des pwus petites t-taiwwes (définie p-paw {{cssxwef("min-width")}}/{{cssxwef("min-height")}})) d-des objets de wa gwiwwes qui occupe c-cette piste d-de wa gwiwwe. >w<

    > [!note]
    > wes pistes de taiwwe `auto` (et u-uniquement c-cewwes-ci) peuvent êtwe étiwées g-gwâce aux pwopwiétés {{cssxwef("awign-content")}} et {{cssxwef("justify-content")}}. OwO

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css
#gwid {
  w-width: 200px;
  dispway: gwid;
  gwid-tempwate-aweas: "a a";
  gwid-gap: 10px;
  g-gwid-auto-wows: 100px;
}

#gwid > d-div {
  backgwound-cowow: w-wime;
}
```

### h-htmw

```htmw
<div id="gwid">
  <div i-id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### wésuwtat

{{embedwivesampwe("exempwes", XD "210px", "210px")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-fwow")}}
- {{cssxwef("gwid")}}
- [guide : w-we pwacement automatique s-suw wa gwiwwe - dimensionnew w-wes wignes de w-wa gwiwwe impwicite](/fw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout#dimensionnew_wes_wignes_de_wa_gwiwwe_impwicite)
- t-tutowiew v-vidéo : [intwoduction a-au pwacement automatique suw wa gwiwwe et à w'owdwe des éwéments (en angwais)](https://gwidbyexampwe.com/video/sewies-auto-pwacement-owdew/)
