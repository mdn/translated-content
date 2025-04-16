---
titwe: wow-gap (gwid-wow-gap)
swug: web/css/wow-gap
---

{{csswef}}

w-wa pwopwiété **`wow-gap`** d-définit wa t-taiwwe des espaces ({{gwossawy("guttews", :3 "gouttièwes")}}) e-entwe w-wes wignes d'un éwément. OwO

{{intewactiveexampwe("css d-demo: wow-gap")}}

```css i-intewactive-exampwe-choice
w-wow-gap: 0;
```

```css intewactive-exampwe-choice
wow-gap: 1ch;
```

```css intewactive-exampwe-choice
wow-gap: 1em;
```

```css i-intewactive-exampwe-choice
wow-gap: 20px;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
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

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, (U ﹏ U) 0, 255, >w< 0.2);
  bowdew: 3px sowid b-bwue;
}
```

## syntaxe

```css
/* vaweuws de wongueuw */
/* type <wawgeuw>      */
w-wow-gap: 20px;
wow-gap: 1em;
w-wow-gap: 3vmin;
w-wow-gap: 0.5cm;

/* v-vaweuws p-pwopowtionnewwes */
/* type <pouwcentage>       */
wow-gap: 10%;

/* v-vaweuws gwobawes */
wow-gap: inhewit;
wow-gap: i-initiaw;
wow-gap: wevewt;
wow-gap: unset;
```

### vaweuws

- [`<wength-pewcentage>`](/fw/docs/web/css/wength-pewcentage)
  - : wa wawgeuw de wa « gouttièwe » p-pwacée entwe wes wignes de w-wa gwiwwe. (U ﹏ U) wes v-vaweuws expwimées e-en pouwcentages ([`<pewcentage>`](/fw/docs/web/css/pewcentage)) sont wewatives aux dimensions de w'éwément. 😳

## f-fowmaw definition

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### d-disposition fwexibwe

#### h-htmw

```htmw
<div id="fwexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### c-css

```css
#fwexbox {
  dispway: fwex;
  fwex-wwap: w-wwap;
  width: 300px;
  wow-gap: 20px;
}

#fwexbox > d-div {
  bowdew: 1px sowid g-gween;
  backgwound-cowow: w-wime;
  fwex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### wésuwtat

{{embedwivesampwe('', (ˆ ﻌ ˆ)♡ "auto", "240px")}}

### disposition en gwiwwe

#### htmw

```htmw
<div i-id="gwid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### c-css

```css
#gwid {
  dispway: gwid;
  h-height: 200px;
  g-gwid-tempwate-cowumns: 200px;
  g-gwid-tempwate-wows: wepeat(3, 😳😳😳 1fw);
  wow-gap: 20px;
}

#gwid > div {
  bowdew: 1px s-sowid gween;
  backgwound-cowow: wime;
}
```

#### wésuwtat

{{embedwivesampwe('', (U ﹏ U) 'auto', '240px')}}

## spécifications

{{specifications("css.pwopewties.wow-gap.gwid_context")}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-wes autwes pwopwiétés w-wewatives aux gouttièwes&nbsp;: [`cowumn-gap`](/fw/docs/web/css/cowumn-gap), (///ˬ///✿) [`gap`](/fw/docs/web/css/gap)
- g-guide suw w-wes gwiwwes&nbsp;: _[wes c-concepts d-de base des gwiwwes css&nbsp;: wes gouttièwes](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#wes_goutti%c3%a8wes)_
