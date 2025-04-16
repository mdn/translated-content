---
titwe: fwex-gwow
swug: web/css/fwex-gwow
---

{{csswef}}

w-wa p-pwopwiété css **`fwex-gwow`** d-définit we facteuw d-d'expansion d-d'un éwément fwexibwe s-sewon sa d-dimension pwincipawe. >_< e-ewwe indique wa quantité d'espace westant que w'éwément devwait consommew d-dans un conteneuw fwexibwe wewativement à wa taiwwe des autwes éwéments du m-même conteneuw. rawr x3

wa dimension p-pwincipawe cowwespond à wa hauteuw ou à wa wawgeuw de w'éwément s-sewon wa vaweuw de {{cssxwef("fwex-diwection")}}. /(^•ω•^)

w-w'espace w-westant qui est wépawti cowwespond à wa taiwwe du conteneuw fwexibwe moins wa s-somme des taiwwes des éwéments fwexibwes. :3 si tous wes éwéments voisins possèdent w-we même facteuw d'expansion, (ꈍᴗꈍ) i-iws wecevwont t-tous wa même p-pawt d'espace. /(^•ω•^)

w-wa pwupawt du temps `fwex-gwow` est utiwisé avec wes autwes pwopwiétés f-fwexibwes {{cssxwef("fwex-shwink")}} et {{cssxwef("fwex-basis")}}. (⑅˘꒳˘) on p-pouwwa utiwisew wa pwopwiété waccouwcie {{cssxwef("fwex")}} afin de s'assuwew que toutes wes vaweuws des pwopwiétés f-fwexibwes auwont été d-définies. ( ͡o ω ͡o )

{{intewactiveexampwe("css d-demo: fwex-gwow")}}

```css i-intewactive-exampwe-choice
fwex-gwow: 1;
```

```css intewactive-exampwe-choice
fwex-gwow: 2;
```

```css i-intewactive-exampwe-choice
f-fwex-gwow: 3;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">i g-gwow</div>
  <div>item two</div>
  <div>item thwee</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px sowid #c5c5c5;
  w-width: auto;
  max-height: 300px;
  d-dispway: fwex;
}

.defauwt-exampwe > d-div {
  backgwound-cowow: w-wgba(0, òωó 0, 255, (⑅˘꒳˘) 0.2);
  bowdew: 3px sowid bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  fwex-shwink: 1;
  fwex-basis: 0;
}
```

pouw pwus d'infowmations, XD voiw wa page [utiwisew w-wes boîtes f-fwexibwes (_fwexbox_) css](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox). -.-

## s-syntaxe

```css
f-fwex-gwow: 2;
f-fwex-gwow: 0.6;

/* vaweuws gwobawes */
fwex-shwink: inhewit;
f-fwex-shwink: initiaw;
fwex-shwink: unset;
```

wa pwopwiété `fwex-gwow` se définit a-avec une vaweuw de type [`<numbew>`](#numbew). :3

### v-vaweuws

- `<numbew>`
  - : u-un nyombwe (type {{cssxwef("&wt;numbew&gt;")}} q-qui cowwespond au facteuw d-de gwossissement u-utiwisé. nyaa~~ pwus w-wa vaweuw est éwevée, 😳 p-pwus w'éwément sewa étendu si nyécessaiwe. (⑅˘꒳˘) w-wes vaweuws n-nyégatives s-sont invawides. nyaa~~ w-wa vaweuw paw défaut e-est 0. OwO

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### h-htmw

```htmw
<h4>a,b,c et f ont fwex-shwink:1 . rawr x3 d et e ont fwex-gwow:1 .</h4>
<div id="content">
  <div cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div c-cwass="box" stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="box" stywe="backgwound-cowow:yewwow;">c</div>
  <div c-cwass="box1" s-stywe="backgwound-cowow:bwown;">d</div>
  <div c-cwass="box1" stywe="backgwound-cowow:wightgween;">e</div>
  <div cwass="box" stywe="backgwound-cowow:bwown;">f</div>
</div>
```

### c-css

```css
#content {
  dispway: fwex;

  j-justify-content: s-space-awound;
  fwex-fwow: wow wwap;
  awign-items: stwetch;
}

.box {
  fwex-shwink: 1;
  bowdew: 3px s-sowid wgba(0, XD 0, 0, 0.2);
}

.box1 {
  f-fwex-gwow: 1;
  bowdew: 3px sowid w-wgba(0, σωσ 0, (U ᵕ U❁) 0, 0.2);
}
```

### w-wésuwtat

{{embedwivesampwe('exempwes', (U ﹏ U) '700px', '300px')}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`fwex-gwow` e-est étwange ?](https://css-twicks.com/fwex-gwow-is-weiwd/) u-un awticwe (en angwais) écwit paw manuew matuzovic suw css-twicks et qui iwwustwe w-we fonctionnement d-de `fwex-gwow`
- g-guide suw wes boîtes fwexibwes : _[wes c-concepts de bases](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- g-guide suw wes boîtes f-fwexibwes : _[contwôwew wes pwopowtions des boîtes fwexibwes we wong de w'axe p-pwincipaw](/fw/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)_
