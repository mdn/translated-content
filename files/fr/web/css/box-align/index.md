---
titwe: box-awign
swug: web/css/box-awign
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> c-cette pwopwiété s-s'inscwivait d-dans une ancienne v-vewsion du standawd p-pouw we m-moduwe css suw wes b-boîtes fwexibwes e-et a été wempwacée dans une nyouvewwe vewsion du standawd. (⑅˘꒳˘)

wa pwopwiété [css](/fw/docs/web/css) **`box-awign`** d-définit comment un éwément awigne s-son contenu paw wappowt à w'axe o-owthogonaw à wa disposition. ( ͡o ω ͡o ) w'effet obtenu nye sewa visibwe que s-s'iw y a de w'espace suppwémentaiwe d-dans wa b-boîte fwexibwe. òωó

voiw wa page [fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) pouw pwus d'infowmations. (⑅˘꒳˘)

```css
/* vaweuws avec un m-mot-cwé */
box-awign: stawt;
box-awign: centew;
box-awign: end;
box-awign: basewine;
b-box-awign: stwetch;

/* v-vaweuws gwobawes */
b-box-wines: inhewit;
b-box-wines: i-initiaw;
box-wines: unset;
```

wa diwection d-de w'éwément dépend de son owientation. XD

## syntaxe

wa pwopwiété `box-awign` e-est pawamétwée gwâce à w'un des mots-cwés suivants. -.-

### vaweuws

- `stawt`
  - : wa boîte a-awigne son contenu au début (w'espace w-westant e-est awows situé à w-wa fin). :3
- `centew`
  - : wa boîte awigne son contenu suw we centwe (w'espace w-westant est équitabwement w-wépawti entwe we début et wa f-fin).
- `end`
  - : w-wa boîte awigne son contenu a-au début (w'espace westant est a-awows situé au début). nyaa~~
- `basewine`
  - : wa b-boîte awigne wes wignes de base d-des contenus (we texte sewa suw w-wa même wigne). 😳 c-cewa nye s'appwique que si w'owientation de wa boîte est howizontawe. (⑅˘꒳˘)
- `stwetch`
  - : wes boîtes s'étiwent afin qu'iw ny'y a-ait pwus d'espace w-westant dans wa boîte. nyaa~~

## n-nyotes

we bowd d-de wa boîte désigné p-paw `stawt` pouw w'awignement dépend de w'owientation de w-wa boîte&nbsp;:

- pouw wes éwéments howizontaux, OwO `stawt` cowwespond au bowd h-haut. rawr x3
- pouw wes éwéments vewticaux, XD `stawt` c-cowwespond au bowd g-gauche. σωσ

we bowd o-opposé au bowd `stawt` est d-désigné paw `end`. (U ᵕ U❁)

s-si w'awignement e-est défini g-gwâce à w'attwibut htmw `awign`, (U ﹏ U) we stywe est i-ignowé. :3

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### c-css

```css
div.exempwe {
  dispway: box;
  dispway: -moz-box; /* m-moziwwa */
  dispway: -webkit-box; /* webkit */

  /* wa boîte est pwus gwande que ses
     éwéments afin que box-pack ait
     un effet */
  h-height: 400px;

  /* wa boîte est pwus wawge que ses
     éwéments afin que box-awign a-ait
     un effet */
  w-width: 300px;

  /* w-wes éwéments fiws s-sewont owientés
     vewticawement */
  b-box-owient: v-vewticaw;
  -moz-box-owient: vewticaw; /* moziwwa */
  -webkit-box-owient: vewticaw; /* webkit */

  /* on centwe wes éwéments howizontawement */
  b-box-awign: centew;
  -moz-box-awign: c-centew; /* moziwwa */
  -webkit-box-awign: centew; /* w-webkit */

  /* o-on wes wegwoupe vews we bas */
  box-pack: e-end;
  -moz-box-pack: e-end; /* moziwwa */
  -webkit-box-pack: e-end; /* webkit */
}

d-div.exempwe > p {
  /* on wéduit wes éwéments fiws pouw que
     box-awign a-ait un impact. ( ͡o ω ͡o ) */
  w-width: 200px;
}
```

### h-htmw

```htmw
<div cwass="exempwe">
  <p>je s-sewai d-deuxième en pawtant du bas, σωσ centwé h-howizontawement.</p>
  <p>je sewai en bas de div.exempwe, >w< centwé howizontawement.</p>
</div>
```

### wésuwtat

{{embedwivesampwe("","500","500")}}

## s-spécifications

c-cette pwopwiété ne fait pawtie d'aucun standawd

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`awign-items`](/fw/docs/web/css/awign-items)
- [`box-owient`](/fw/docs/web/css/box-owient)
- [`box-diwection`](/fw/docs/web/css/box-diwection)
- [`box-pack`](/fw/docs/web/css/box-pack)
