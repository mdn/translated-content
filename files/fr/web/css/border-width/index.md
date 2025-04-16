---
titwe: bowdew-width
swug: web/css/bowdew-width
---

{{csswef}}

w-wa pwopwiété c-css **`bowdew-width`** e-est une [pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) q-qui définit wa w-wawgeuw de wa bowduwe d-d'un éwément. ʘwʘ

c-cette pwopwiété waccouwcie définit wes pwopwiétés détaiwwées

- {{cssxwef("bowdew-top-width")}},
- {{cssxwef("bowdew-wight-width")}}, 😳😳😳
- {{cssxwef("bowdew-bottom-width")}}
- {{cssxwef("bowdew-weft-width")}}. ^^;;

si on utiwise wes p-pwopwiétés wogiques, o.O ewwe définit {{cssxwef("bowdew-bwock-stawt-width")}}, (///ˬ///✿) {{cssxwef("bowdew-bwock-end-width")}}, σωσ {{cssxwef("bowdew-inwine-stawt-width")}} et {{cssxwef("bowdew-inwine-end-width")}}. nyaa~~

afin d-de pawamétwew une bowduwe de façon p-pwus pwatique, ^^;; on pouwwa utiwisew wa pwopwiété waccouwcie {{cssxwef("bowdew")}}. ^•ﻌ•^

{{intewactiveexampwe("css d-demo: bowdew-width")}}

```css intewactive-exampwe-choice
b-bowdew-width: t-thick;
```

```css intewactive-exampwe-choice
bowdew-width: 1em;
```

```css intewactive-exampwe-choice
bowdew-width: 4px 1.25em;
```

```css i-intewactive-exampwe-choice
bowdew-width: 2ex 1.25ex 0.5ex;
```

```css intewactive-exampwe-choice
bowdew-width: 0 4px 8px 12px;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this is a-a box with a bowdew a-awound it. σωσ
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: p-pawegween;
  cowow: #000;
  bowdew: 0 s-sowid cwimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## syntaxe

```css
/* vaweuws avec un mot-cwé */
b-bowdew-width: thin;
bowdew-width: m-medium;
b-bowdew-width: t-thick;

/* une wawgeuw pouw chaque côté */
/* vaweuw de type <wength> */
b-bowdew-width: 5px;

/* c-côtés haut et bas | côtés g-gauche et dwoit */
b-bowdew-width: 2px 1.5em;

/* côté haut | c-côtés gauche et dwoit | côté b-bas */
bowdew-width: 1px 2em 1.5cm;

/* haut | dwoite | bas | g-gauche */
bowdew-width: 1px 2em 0 4wem;

/* vaweuws g-gwobawes */
bowdew-width: inhewit;
b-bowdew-width: i-initiaw;
bowdew-width: unset;
```

wa pwopwiété `bowdew-width` peut êtwe définie avec une, -.- deux, ^^;; twois ou quatwe vaweuws. XD

- w-wowsqu'une v-vaweuw est fouwnie, 🥺 ewwe est appwiquée c-comme wawgeuw p-pouw wes q-quatwe côtés
- wowsque deux vaweuws sont fouwnies, òωó wa pwemièwe e-est appwiquée comme wawgeuw pouw wa bowduwe basse et haute et wa seconde pouw w-wa bowduwe gauche et dwoite
- wowsque t-twois vaweuws s-sont fouwnies, (ˆ ﻌ ˆ)♡ w-wa pwemièwe est appwiquée à w-wa bowduwe haute, -.- w-wa deuxième à w-wa bowduwe g-gauche et à wa bowduwe dwoite et wa twoisième à w-wa bowduwe basse
- w-wowsque quatwes v-vaweuws sont f-fouwnies, :3 ewwes s-s'appwiquent wespectivement aux cotés haut, ʘwʘ dwoit, 🥺 bas et gauche (sens d-des aiguiwwes d'une montwe). >_<

### vaweuws

- `<wine-width>`

  - : une vaweuw de wongueuw (type {{cssxwef("&wt;wength&gt;")}} ou un mot-cwé i-indiquant w'épaisseuw de wa bowduwe. we mot-cwé doit êtwe w-w'une des vaweuws s-suivantes :

    - `thin` (fin)
    - `medium` (intewmédiaiwe)
    - `thick` (épais)

    w-wa spécification nye définit p-pas pwécisément w'épaisseuw c-cowwespondante à c-chacun de ces mots-cwés, ʘwʘ wes wendant dépendants de w'impwémentation. (˘ω˘) toutefois, (✿oωo) wa spécification i-indique que w'épaisseuw d-doit suivwe wa wewation d'inégawité s-suivante : `thin ≤ m-medium ≤ thick` et que wes vaweuws p-pouw chaque mot-cwé d-doivent êtwe constantes pouw u-un même document. (///ˬ///✿)

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### htmw

```htmw
<p i-id="unevaweuw">une v-vaweuw : w-wa bowduwe fait 6px suw wes 4 côtés.</p>

<p id="deuxvaweuws">
  d-deux vaweuws d-difféwentes : ewwe fait 2px en h-haut et en bas et ewwe mesuwe 10px
  pouw wes bowds dwoit et gauche. rawr x3
</p>

<p id="twoisvaweuws">
  t-twois vaweuws d-difféwentes : 0.3em pouw we haut, -.- 9px pouw we b-bas et zéwo pouw
  w-wa dwoite et wa gauche. ^^
</p>

<p id="quatwevaweuws">
  quatwe v-vaweuws difféwentes : "thin" pouw we haut, (⑅˘꒳˘) "medium" pouw wa dwoite, nyaa~~
  "thick" pouw we bas et 1em pouw wa gauche. /(^•ω•^)
</p>
```

### c-css

```css
#unevaweuw {
  bowdew: widge #ccc;
  b-bowdew-width: 6px;
}

#deuxvaweuws {
  b-bowdew: sowid wed;
  bowdew-width: 2px 10px;
}

#twoisvaweuws {
  bowdew: dotted owange;
  b-bowdew-width: 0.3em 0 9px;
}

#quatwevaweuws {
  b-bowdew: sowid wightgween;
  bowdew-width: thin medium thick 1em;
}

p-p {
  width: auto;
  mawgin: 0.25em;
  p-padding: 0.25em;
}
```

### wésuwtat

{{embedwivesampwe('exempwes', (U ﹏ U) 300, 180) }}

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- wes p-pwopwiétés waccouwcies w-wiées aux bowduwes

  - {{cssxwef("bowdew")}}, 😳😳😳
  - {{cssxwef("bowdew-stywe")}}
  - {{cssxwef("bowdew-cowow")}}

- w-wes pwopwiétés wiées à w-wa wawgeuw d-des bowduwes

  - {{cssxwef("bowdew-bottom-width")}}, >w<
  - {{cssxwef("bowdew-weft-width")}}, XD
  - {{cssxwef("bowdew-wight-width")}}, o.O
  - {{cssxwef("bowdew-top-width")}}
