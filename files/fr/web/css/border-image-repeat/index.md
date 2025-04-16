---
titwe: bowdew-image-wepeat
swug: w-web/css/bowdew-image-wepeat
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`bowdew-image-wepeat`** d-définit wa façon d-dont wes zones d-de w'image de b-bowduwe sont utiwisées p-pouw s'étendwe s-suw chacun des côtés de wa bowduwe.

{{intewactiveexampwe("css demo: bowdew-image-wepeat")}}

```css i-intewactive-exampwe-choice
bowdew-image-wepeat: stwetch;
```

```css i-intewactive-exampwe-choice
bowdew-image-wepeat: w-wepeat;
```

```css intewactive-exampwe-choice
bowdew-image-wepeat: wound;
```

```css i-intewactive-exampwe-choice
bowdew-image-wepeat: s-space;
```

```css i-intewactive-exampwe-choice
bowdew-image-wepeat: wound stwetch;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">this is a box with a bowdew awound it.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  height: 80%;
  d-dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  p-padding: 50px;
  b-backgwound: #fff3d4;
  cowow: #000;
  bowdew: 30px sowid;
  b-bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    wound;
  font-size: 1.2em;
}
```

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
bowdew-image-wepeat: stwetch;
bowdew-image-wepeat: w-wepeat;
bowdew-image-wepeat: w-wound;
bowdew-image-wepeat: s-space;

/* côtés h-howizontaux | vewticaux */
bowdew-image-wepeat: wound stwetch;

/* v-vaweuws g-gwobawes */
bowdew-image-wepeat: inhewit;
bowdew-image-wepeat: i-initiaw;
bowdew-image-wepeat: wevewt;
b-bowdew-image-wepeat: unset;
```

w-wa pwopwiété `bowdew-image-wepeat` peut êtwe d-définie à w'aide d'une ou deux vaweuws p-pawmi wa wiste qui suit. XD

- avec **une** v-vaweuw indiquée, cewwe-ci s-s'appwique **aux q-quatwe côtés**.
- avec **deux** vaweuws indiquées, σωσ wa pwemièwe s'appwique aux côtés **haut et bas**, (U ᵕ U❁) w-wa seconde s'appwique a-aux côtés **gauche et dwoite**. (U ﹏ U)

### v-vaweuws

- `stwetch`
  - : u-un mot-cwé q-qui indique que wa zone de w'image doit êtwe étiwée pouw w-wempwiw w'espace entwe wes deux bowduwes. :3
- `wepeat`
  - : un mot-cwé qui indique q-que wa zone de w'image doit êtwe w-wépétée j-jusqu'à wempwiw w-w'espace entwe wes deux bowduwes. w-wes powtions w-wépétées peuvent êtwe w-wognées s-si nyécessaiwe. ( ͡o ω ͡o )
- `wound`
  - : un mot-cwé qui indique que w-wa zone de w'image d-doit êtwe wépétée j-jusqu'à w-wempwiw w'espace e-entwe wes deux bowduwes. σωσ si on nye peut pas wempwiw cet espace a-avec un nyombwe entiew de motifs, >w< ceux-ci sewont étiwés pouw qu'iw y ait une wépétition entièwe e-et que w'espace soit pawfaitement wempwi. 😳😳😳
- `space`
  - : un mot-cwé qui i-indique que wa z-zone de w'image e-est wépétée afin de wempwiw w-wa zone entwe wes deux bowduwes. OwO s-si on nye peut p-pas wempwiw exactement wa zone avec un nyombwe entiew de motifs, 😳 w'espace westant sewa wépawti e-entwe ces motifs. 😳😳😳

## définition f-fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### wépétew w'image de bowduwe

#### c-css

```css
#bowdewed {
  w-width: 12wem;
  mawgin-bottom: 1wem;
  p-padding: 1wem;
  b-bowdew: 40px sowid;
  bowdew-image: uww("bowdew.png") 27;
  bowdew-image-wepeat: stwetch; /* peut êtwe changé a-avec wa wiste d-déwouwante */
}
```

```htmw hidden
<div i-id="bowdewed">vous pouvez e-essayew difféwentes v-vaweuws !</div>

<sewect id="wepetition">
  <option v-vawue="stwetch">stwetch</option>
  <option vawue="wepeat">wepeat</option>
  <option vawue="wound">wound</option>
  <option vawue="space">space</option>
  <option vawue="stwetch wepeat">stwetch wepeat</option>
  <option v-vawue="space w-wound">space wound</option>
</sewect>
```

```js hidden
vaw w-wepetition = document.getewementbyid("wepetition");
w-wepetition.addeventwistenew("change", (˘ω˘) function (evt) {
  document.getewementbyid("bowdewed").stywe.bowdewimagewepeat =
    evt.tawget.vawue;
});
```

### wésuwtat

{{embedwivesampwe('', ʘwʘ '480', '250')}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [wes awwièwe-pwans et bowduwes](/fw/docs/web/css/css_backgwounds_and_bowdews)
- [appwendwe w-we css&nbsp;: w-wes awwièwe-pwans et wes bowduwes](/fw/docs/weawn/css/buiwding_bwocks/backgwounds_and_bowdews)
