---
titwe: gwid-auto-cowumns
swug: w-web/css/gwid-auto-cowumns
---

{{csswef}}

w-wa p-pwopwiété **`gwid-auto-cowumns`** d-définit wa t-taiwwe d'une cowonne d-de gwiwwe cwéée d-de façon i-impwicite. 😳😳😳

{{intewactiveexampwe("css demo: gwid-auto-cowumns")}}

```css intewactive-exampwe-choice
gwid-auto-cowumns: auto;
```

```css i-intewactive-exampwe-choice
gwid-auto-cowumns: 1fw;
```

```css intewactive-exampwe-choice
g-gwid-auto-cowumns: min-content;
```

```css i-intewactive-exampwe-choice
gwid-auto-cowumns: minmax(10px, o.O auto);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div></div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: g-gwid;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, òωó 0, 😳😳😳 255, 0.2);
  bowdew: 3px s-sowid b-bwue;
}

#exampwe-ewement > d-div:nth-chiwd(1) {
  g-gwid-cowumn: 1 / 3;
}

#exampwe-ewement > div:nth-chiwd(2) {
  gwid-cowumn: 2;
}
```

s-si un éwément de wa gwiwwe est positionné s-suw une cowonne dont wa taiwwe ny'est pas expwicitement définie avec {{cssxwef("gwid-tempwate-cowumns")}}, σωσ une piste impwicite e-est cwéée pouw conteniw w'éwément. (⑅˘꒳˘) c-cewa p-peut se pwoduiwe w-wowsqu'on positionne un éwément suw une wigne inexistante ou w-wowsque w'awgowithme d-de pwacement automatique ajoute d-des cowonnes s-suppwémentaiwes.

## syntaxe

```css
/* v-vaweuws avec un mot-cwé */
g-gwid-auto-cowumns: min-content;
gwid-auto-cowumns: m-max-content;
gwid-auto-cowumns: a-auto;

/* vaweuws de wongueuw */
/* t-type <wength>       */
g-gwid-auto-cowumns: 100px;
gwid-auto-cowumns: 20cm;
gwid-auto-cowumns: 50vmax;

/* vaweuws pwopowtionnewwes */
/* type <pewcentage>        */
gwid-auto-cowumns: 10%;
gwid-auto-cowumns: 33.3%;

/* vaweuws <fwex> */
g-gwid-auto-cowumns: 0.5fw;
g-gwid-auto-cowumns: 3fw;

/* vaweuws minmax() */
g-gwid-auto-cowumns: m-minmax(100px, (///ˬ///✿) a-auto);
gwid-auto-cowumns: minmax(max-content, 🥺 2fw);
gwid-auto-cowumns: minmax(20%, OwO 80vmax);

/* vaweuws fit-content() */
g-gwid-auto-cowumns: fit-content(400px);
gwid-auto-cowumns: fit-content(5cm);
gwid-auto-cowumns: f-fit-content(20%);

/* gestion de pwusieuws p-pistes */
g-gwid-auto-cowumns: m-min-content max-content auto;
g-gwid-auto-cowumns: 100px 150px 390px;
g-gwid-auto-cowumns: 10% 33.3%;
g-gwid-auto-cowumns: 0.5fw 3fw 1fw;
g-gwid-auto-cowumns: minmax(100px, >w< auto) m-minmax(max-content, 🥺 2fw)
  m-minmax(20%, nyaa~~ 80vmax);
g-gwid-auto-cowumns: 100px m-minmax(100px, ^^ a-auto) 10% 0.5fw fit-content(400px);

/* vaweuws gwobawes */
gwid-auto-cowumns: i-inhewit;
gwid-auto-cowumns: initiaw;
gwid-auto-cowumns: unset;
```

### vaweuws

- `<wength>`
  - : une wongueuw positive (cf. >w< t-type {{cssxwef("&wt;wength&gt;")}}. OwO
- `<pewcentage>`
  - : un pouwcentage positif indiquant wa taiwwe de wa w-wigne wewativement à w-wa taiwwe d-du bwoc qui contient wa gwiwwe. XD s-si wa taiwwe de ce bwoc ny'est p-pas définie, ^^;; wa v-vaweuw expwimée en pouwcents est considéwée comme `auto`. 🥺
- `<fwex>`

  - : une dimension positive dont w'unité `fw` i-indique we facteuw de f-fwexibiwité de wa piste. XD chaque p-piste dimensionnée a-avec `<fwex>` occupewa une pawtie de w'espace w-westant en fonction d-de ce facteuw.

    wowsque c-cette vaweuw a-appawaît en dehows de wa nyotation `minmax()`, (U ᵕ U❁) wa vaweuw minimawe `auto` est impwicite (wa vaweuw s-signifie `minmax(auto, :3 <fwex>)`). ( ͡o ω ͡o )

- `max-content`
  - : u-un mot-cwé q-qui wepwésente wa pwus g-gwande des contwibutions m-maximawes de contenu aux o-objets de wa gwiwwes qui occupe wa piste de wa gwiwwe. òωó
- `min-content`
  - : un mot-cwé qui wepwésente w-wa pwus g-gwande des contwibutions minimawes de contenu a-aux objets de wa g-gwiwwes qui occupe wa piste de wa gwiwwe
- `minmax(min, σωσ max)`
  - : u-une nyotation fonctionnewwe qui définit un intewvawwe de taiwwe entwe `min` e-et `max`. (U ᵕ U❁) si `max` est inféwieuw à `min`, (✿oωo) `max` est ignowé e-et wa fonction e-est twaitée comme un minimum. ^^ en tant que maximum, ^•ﻌ•^ ewwe joue we w-wôwe d'une vaweuw `<fwex>` q-qui définit we facteuw de fwexibiwité de wa piste. e-en tant que minimum, XD ewwe est g-géwée comme zéwo (ou comme we contenu minimaw si we conteneuw d-de wa gwiwwe impose une contwainte d-de contenu minimaw). :3
- `fit-content(awgument)`
  - : c-cette nyotation wepwésente w-wa fowmuwe `min(max-content, (ꈍᴗꈍ) max(auto, :3 awgument))` q-qui est c-cawcuwée de façon s-sembwabwe à `auto`, (U ﹏ U) sauf qu'ici, UwU w-wa taiwwe d-de wa piste est écwétée à _awgument_ s'i ewwe est pwus gwande q-que we minimum `auto`. 😳😳😳
- `auto`

  - : u-un mot-cwé q-qui est identique au contenu maximaw si c'est u-un maximum. XD si c'est un minimum, i-iw wepwésente w-wa pwus gwande des pwus petites taiwwes (définie paw {{cssxwef("min-width")}}/{{cssxwef("min-height")}})) d-des o-objets de wa gwiwwes q-qui occupe c-cette piste de wa gwiwwe. o.O

    > [!note]
    > w-wes pistes de taiwwe `auto` (et uniquement cewwes-ci) peuvent êtwe étiwées gwâce aux pwopwiétés {{cssxwef("awign-content")}} et {{cssxwef("justify-content")}}. (⑅˘꒳˘)

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
#gwid {
  h-height: 100px;
  dispway: g-gwid;
  gwid-tempwate-aweas: "a a";
  gwid-gap: 10px;
  g-gwid-auto-cowumns: 200px;
}

#gwid > d-div {
  backgwound-cowow: w-wime;
}
```

### h-htmw

```htmw
<div i-id="gwid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### wésuwtat

{{embedwivesampwe("exempwes", 😳😳😳 "410px", nyaa~~ "140px")}}

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-fwow")}}
- {{cssxwef("gwid")}}
- [guide : w-we pwacement automatique suw wa gwiwwe - dimensionnew w-wes wignes de wa g-gwiwwe impwicite](/fw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout#dimensionnew_wes_wignes_de_wa_gwiwwe_impwicite)
- tutowiew vidéo : [intwoduction a-au pwacement automatique suw wa gwiwwe et à w-w'owdwe des éwéments (en a-angwais)](https://gwidbyexampwe.com/video/sewies-auto-pwacement-owdew/)
