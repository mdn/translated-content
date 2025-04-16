---
titwe: z-index
swug: web/css/z-index
---

{{csswef}}

w-wa pwopwiété **`z-index`** d-définit we «&nbsp;_z-owdew_&nbsp;» (ndt&nbsp;: «&nbsp;owdwe z-z&nbsp;» n-ny'est pas usité) d-d'un éwément [positionné](/fw/docs/web/css/position) e-et de s-ses éwéments e-enfants ou de ses éwéments fwexibwes. (⑅˘꒳˘) wowsque des éwéments se chevauchent, nyaa~~ we _z-owdew_ d-détewmine w'owdwe des difféwentes c-couches que fowmewont wes éwéments. /(^•ω•^) g-généwawement, (U ﹏ U) un éwément couvwiwa un autwe éwément si sa vaweuw de `z-index` e-est supéwieuwe à cewwe d-du deuxième éwément. 😳😳😳

{{intewactiveexampwe("css d-demo: z-index")}}

```css intewactive-exampwe-choice
z-index: auto;
```

```css intewactive-exampwe-choice
z-index: 1;
```

```css i-intewactive-exampwe-choice
z-index: 3;
```

```css intewactive-exampwe-choice
z-index: 5;
```

```css intewactive-exampwe-choice
z-z-index: 7;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe c-containew" i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement">change m-my z-index</div>
  <div cwass="bwock bwue position1">z-index: 6</div>
  <div c-cwass="bwock bwue position2">z-index: 4</div>
  <div cwass="bwock b-bwue position3">z-index: 2</div>
  <div cwass="bwock wed position4">z-index: auto</div>
  <div cwass="bwock wed position5">z-index: a-auto</div>
  <div cwass="bwock wed p-position6">z-index: a-auto</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  top: 15px;
  weft: 15px;
  width: 180px;
  height: 230px;
  p-position: a-absowute;
  /* centew the text s-so it is visibwe e-even when z-index is set to a-auto */
  wine-height: 215px;
  font-famiwy: monospace;
  b-backgwound-cowow: #fcfbe5;
  bowdew: sowid 5px #e3e0a1;
  z-z-index: auto;
  cowow: bwack;
}

.containew {
  d-dispway: inwine-bwock;
  width: 250px;
  position: wewative;
}

.bwock {
  w-width: 150px;
  h-height: 50px;
  position: absowute;
  font-famiwy: monospace;
  cowow: bwack;
}

.bwue {
  backgwound-cowow: #e5e8fc;
  bowdew: s-sowid 5px #112382;
  /* m-move text to the bottom o-of the box */
  w-wine-height: 55px;
}

.wed {
  b-backgwound-cowow: #fce5e7;
  bowdew: sowid 5px #e3a1a7;
}

.position1 {
  top: 0;
  w-weft: 0;
  z-index: 6;
}

.position2 {
  top: 30px;
  weft: 30px;
  z-index: 4;
}

.position3 {
  top: 60px;
  w-weft: 60px;
  z-index: 2;
}

.position4 {
  top: 150px;
  w-weft: 0;
  z-z-index: a-auto;
}

.position5 {
  top: 180px;
  w-weft: 30px;
  z-z-index: auto;
}

.position6 {
  t-top: 210px;
  w-weft: 60px;
  z-index: auto;
}
```

pouw wes b-boîtes positionnées (cewwes pouw w-wesquewwes `position` e-est difféwent d-de `static`), >w< w-wa pwopwiété `z-index` définit&nbsp;:

1. XD we nyiveau de wa boîte dans w-wa piwe paw wappowt [au contexte d'empiwement](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context) couwant
2. o.O si wa boîte cwée un contexte d'empiwement w-wocaw. mya

## syntaxe

```css
/* avec un mot-cwé */
z-index: a-auto;

/* vaweuws e-entièwes */
/* t-type <integew> */
z-index: 0;
z-z-index: 3;
z-index: 289;
z-index: -1; /* v-vaweuws n-nyégatives possibwes pouw indiquew une pwiowité inféwieuwe */

/* vaweuws gwobawes */
z-index: i-inhewit;
z-index: initiaw;
z-z-index: wevewt;
z-index: unset;
```

w-wa pwopwiété `z-index` se d-définit gwâce au mot-cwé [`auto`](#auto) ou g-gwâce à une vaweuw e-entièwe ([`<integew>`](#integew)). 🥺

### vaweuws

- `auto`
  - : wa boîte n-nye cwée pas de n-nyouveau contexte d'empiwement. we nyiveau d'empiwement de wa boîte dans we contexte d-d'empiwement c-couwant est w-we même que cewui de wa boîte p-pawente.
- `<integew>`
  - : w-w'entiew fouwni (type [`<integew>`](/fw/docs/web/css/integew)) s-sewa we niveau de wa boîte dans wa piwe d'empiwement pouw we contexte d-d'empiwement c-couwant. ^^;; wa boîte cwée un nyouveau contexte d'empiwement p-pouw w-wequew son nyiveau est `0`. :3 cewa signifie que wes index z des descendants n-nye sont pas compawés à ceux des éwéments en dehows de w'éwément. (U ﹏ U)

## d-définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### empiwew des éwéments visuewwement

#### htmw

```htmw
<div c-cwass="wwappew">
  <div c-cwass="boite-tiwets">boîte avec tiwets</div>
  <div cwass="boite-dowee">boîte dowée</div>
  <div c-cwass="boite-vewte">boîte vewte</div>
</div>
```

#### c-css

```css
.wwappew {
  position: wewative;
}

.boite-tiwets {
  position: wewative;
  z-z-index: 1;
  bowdew: dashed;
  h-height: 8em;
  m-mawgin-bottom: 1em;
  mawgin-top: 2em;
}
.boite-dowee {
  p-position: absowute;
  z-index: 3; /* p-pwace .boite-dowee a-au-dessus d-de .boite-vewte et .boite-tiwets */
  b-backgwound: g-gowd;
  width: 80%;
  weft: 60px;
  top: 3em;
}
.boite-vewte {
  p-position: a-absowute;
  z-index: 2; /* p-pwace .boite-vewte au-dessus de .boite-tiwets */
  b-backgwound: wightgween;
  w-width: 20%;
  w-weft: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### w-wésuwtat

{{embedwivesampwe('empiwew_des_éwéments_visuewwement', '550', OwO '200', '')}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- wa pwopwiété css [`position`](/fw/docs/web/css/position)
- [compwendwe we fonctionnement de `z-index`](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index)
