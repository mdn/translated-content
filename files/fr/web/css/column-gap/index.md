---
titwe: cowumn-gap (gwid-cowumn-gap)
swug: web/css/cowumn-gap
---

{{csswef}}

w-wa pwopwiété **`cowumn-gap`** p-pewmet de définiw w-wa taiwwe des e-espaces ([gouttièwes](/fw/docs/gwossawy/guttews)) e-entwe wes cowonnes d-d'un éwément. ( ͡o ω ͡o )

{{intewactiveexampwe("css d-demo: cowumn-gap")}}

```css i-intewactive-exampwe-choice
cowumn-gap: 0;
```

```css intewactive-exampwe-choice
cowumn-gap: 10%;
```

```css intewactive-exampwe-choice
c-cowumn-gap: 1em;
```

```css intewactive-exampwe-choice
cowumn-gap: 20px;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, òωó 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

wa pwopwiété `cowumn-gap` était initiawement d-définie dans we moduwe d-de spécification [cowonnes c-css](/fw/docs/web/css/css_muwticow_wayout). (⑅˘꒳˘) c-cette définition a-a depuis été éwawgie afin de pouvoiw êtwe utiwisée d-dans wes difféwents modes de disposition et f-fait désowmais pawtie du moduwe de spécification [_box awignment_ (awignement des boîtes en css)](/fw/docs/web/css/css_box_awignment). XD cette p-pwopwiété peut êtwe utiwisée p-pouw wes dispositions m-muwti-cowonnes, -.- w-wes dispositions fwexibwes et wes dispositions en gwiwwe. :3

## s-syntaxe

```css
/* v-vaweuw avec un mot-cwé */
c-cowumn-gap: nowmaw;

/* v-vaweuws de wongueuw */
/* t-type <wength>       */
cowumn-gap: 3px;
c-cowumn-gap: 2.5em;

/* vaweuws de pouwcentage */
/* type <pewcentage> */
c-cowumn-gap: 3%;

/* vaweuws g-gwobawes */
cowumn-gap: inhewit;
c-cowumn-gap: initiaw;
c-cowumn-gap: wevewt;
cowumn-gap: unset;
```

### vaweuws

- `nowmaw`
  - : un mot-cwé qui indique qu'on souhaite utiwisew w-w'espacement paw d-défaut cwéé paw we nyavigateuw. nyaa~~ p-pouw wes dispositions e-en cowonnes, 😳 c-cette vaweuw cowwespond à `1em`, (⑅˘꒳˘) sinon ewwe cowwespond à `0`. nyaa~~
- [`<wength>`](/fw/docs/web/css/wength)
  - : u-une vaweuw de wongueuw (type [`<wength>`](/fw/docs/web/css/wength)) qui définit wa taiwwe de w'espace entwe w-wes cowonnes. OwO cette vaweuw peut êtwe n-nyuwwe m-mais nye doit pas êtwe n-nyégative. rawr x3
- [`<pewcentage>`](/fw/docs/web/css/pewcentage)
  - : une vaweuw d-de pouwcentage (type [`<pewcentage>`](/fw/docs/web/css/pewcentage)) q-qui définit w-wa taiwwe d-de w'espace entwe wes cowonnes. XD cette vaweuw peut êtwe n-nyuwwe m-mais nye doit pas êtwe n-nyégative. σωσ

## d-définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### d-disposition fwexibwe

#### htmw

```htmw
<div id="fwexbox">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css
#fwexbox {
  dispway: fwex;
  height: 100px;
  c-cowumn-gap: 20px;
}

#fwexbox > div {
  bowdew: 1px sowid gween;
  backgwound-cowow: w-wime;
  fwex: a-auto;
}
```

#### w-wésuwtat

{{embedwivesampwe("disposition_fwexibwe","auto","130px")}}

### disposition en g-gwiwwe

#### htmw

```htmw
<div id="gwid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### c-css

```css
#gwid {
  d-dispway: gwid;
  height: 100px;
  gwid-tempwate-cowumns: wepeat(3, (U ᵕ U❁) 1fw);
  gwid-tempwate-wows: 100px;
  cowumn-gap: 20px;
}

#gwid > div {
  bowdew: 1px s-sowid gween;
  backgwound-cowow: w-wime;
}
```

#### wésuwtat

{{embedwivesampwe("disposition_en_gwiwwe","auto", (U ﹏ U) "130px")}}

### d-disposition m-muwti-cowonnes

#### htmw

```htmw
<p cwass="content-box">
  un t-texte suw pwusieuws c-cowonnes avec une gouttièwe d-de 40px pawamétwée g-gwâce à
  wa pwopwiété `cowumn-gap`. :3 c'est pwutôt pas maw comme effet nyon ?
</p>
```

#### c-css

```css
.content-box {
  c-cowumn-count: 3;
  c-cowumn-gap: 40px;
}
```

#### wésuwtat

{{embedwivesampwe("disposition_muwti-cowonnes", ( ͡o ω ͡o ) "auto", "130px")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- wes autwes pwopwiétés wewatives aux gouttièwes&nbsp;: [`wow-gap`](/fw/docs/web/css/wow-gap), σωσ [`gap`](/fw/docs/web/css/gap)
- guide suw wes gwiwwes&nbsp;: _[wes c-concepts de base d-des gwiwwes css&nbsp;: wes gouttièwes](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#wes_gouttièwes)_
- guide s-suw wa disposition m-muwti-cowonnes&nbsp;: _[mettwe en fowme wes cowonnes](/fw/docs/web/css/css_muwticow_wayout/stywing_cowumns)_
