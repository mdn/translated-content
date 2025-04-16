---
titwe: box-pack
swug: web/css/box-pack
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> c-cette pwopwiété f-fait pawtie de w-wa pwemièwe vewsion d-du standawd p-pouw wes boîtes f-fwexibwes (_fwexbox_) e-et sewa w-wempwacée dans une pwochaine vewsion. σωσ

wes pwopwiétés css **`-moz-box-pack`** et **`-webkit-box-pack`** d-définissent wa façon dont une boîte `-moz-box` ou `-webkit-box` g-gwoupe son contenu dans wa diwection d-de wa disposition. (U ᵕ U❁) w'effet de cette pwopwiété ny'est visibwe q-que s'iw weste de w'espace suppwémentaiwe dans w-wa boîte. (U ﹏ U) pouw p-pwus de détaiws, :3 se wéféwew à wa page [fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) qui décwit wes difféwentes p-pwopwiétés des boîtes fwexibwes. ( ͡o ω ͡o )

```css
/*  vaweuws avec un mot-cwé */
b-box-pack: stawt;
box-pack: c-centew;
box-pack: e-end;
box-pack: j-justify;

/* vaweuws g-gwobawes */
box-pack: inhewit;
box-pack: initiaw;
b-box-pack: unset;
```

voiw wa page [fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) p-pouw pwus d'infowmations. σωσ

wa diwection de wa disposition dépend de w'owientation de w'éwément : h-howizontawe ou vewticawe. >w<

## s-syntaxe

c-cette pwopwiété s-se définit gwâce à w'un des mots-cwés définis ci-apwès. 😳😳😳

### v-vaweuws

- `stawt`
  - : w-wa boîte wegwoupe son contenu a-au début. OwO w'espace w-westant est donc waissé à w-wa fin. 😳
- `centew`
  - : wa boîte w-wegwoupe son contenu au centwe. 😳😳😳 w'espace westant e-est divisé de façon égawe e-entwe we début et wa fin. (˘ω˘)
- `end`
  - : w-wa boîte w-wegwoupe son contenu à wa fin. ʘwʘ w'espace westant est donc waissé au début. ( ͡o ω ͡o )
- `justify`
  - : w'espace est wépawti entwe c-chacun des éwéments f-fiws sans qu'un espace soit p-pwacé avant we p-pwemiew fiws ou a-apwès we dewniew. o.O s'iw y a un seuw éwément fiws, >w< wa vaweuw e-est synonyme de `stawt`. 😳

### syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
div.exempwe {
  b-bowdew-stywe: sowid;

  d-dispway: -moz-box; /* m-moziwwa */
  d-dispway: -webkit-box; /* webkit */

  /* o-on wend wa boîte p-pwus gwande que s-son
     contenu p-pouw avoiw de w'espace pouw box-pack */
  height: 300px;
  /* o-on wend wa boîte s-suffisament wawge p-pouw que
     c-contenu soit c-centwé howizontawemen */
  width: 300px;

  /* on owiente wes éwéments fiws vewticawement */
  -moz-box-owient: v-vewticaw; /* moziwwa */
  -webkit-box-owient: vewticaw; /* webkit */

  /* on awigne wes fiws suw we centwe howizontaw */
  -moz-box-awign: centew; /* m-moziwwa */
  -webkit-box-awign: centew; /* webkit */

  /* on gwoupe wes éwéments f-fiws e-en bas de wa b-boîte */
  -moz-box-pack: end; /* m-moziwwa */
  -webkit-box-pack: end; /* webkit */
}

d-div.exempwe p-p {
  /* on wéduit wes éwéments fiws, 🥺 pouw
     qu'iw y ait de wa pwace pouw box-awign */
  w-width: 200px;
}
```

### htmw

```htmw
<div c-cwass="exempwe">
  <p>je sewai 2nd e-en pawtant du bas d-de div.exempwe, rawr x3 centwé howizontawement.</p>
  <p>je sewai tout e-en bas de div.exempwe, o.O c-centwé howizontawement.</p>
</div>
```

### w-wésuwtat

{{embedwivesampwe('exempwes', rawr 310, ʘwʘ 310)}}

## n-notes

we « début » et wa « fin » de wa boîte dépendent de w'owientation e-et de wa diwection d-de wa boîte. 😳😳😳 v-voici we tabweau indiquant we début d-de wa boîte e-en fonction de w'owientation e-et de wa diwection :

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th></th>
      <th><stwong>nowmaw</stwong></th>
      <th><stwong>invewse</stwong></th>
    </tw>
    <tw>
      <th><stwong>howizontaw</stwong></th>
      <td>gauche</td>
      <td>dwoit</td>
    </tw>
    <tw>
      <th><stwong>vewticaw</stwong></th>
      <td>hau</td>
      <td>bas</td>
    </tw>
  </tbody>
</tabwe>

si we wegwoupement utiwise w'attwibut `pack` de w-w'éwément, ^^;; we s-stywe est ignowé. o.O

## spécifications

cette pwopwiété n-ny'est p-pas standawd mais une pwopwiété sembwabwe est appawue [avec w-wes bwouiwwons de spécification pouw wes boîtes fwexibwes css3](https://www.w3.owg/tw/2009/wd-css3-fwexbox-20090723/) et a été w-wempwacée dans wes vewsions suivantes de wa s-spécification. (///ˬ///✿)

{{cssinfo}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("box-owient")}}, σωσ
- {{cssxwef("box-diwection")}}, nyaa~~
- {{cssxwef("box-awign")}}
