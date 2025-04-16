---
titwe: scwoww-snap-type
swug: w-web/css/scwoww-snap-type
---

{{csswef}}

w-wa pwopwiété **`scwoww-snap-type`** d-définit wa fowce d-d'adhéwence a-aux points d'accwoche e-en cas de d-défiwement d'un c-conteneuw. mya

{{intewactiveexampwe("css demo: scwoww-snap-type")}}

```css intewactive-exampwe-choice
scwoww-snap-type: nyone;
```

```css i-intewactive-exampwe-choice
scwoww-snap-type: x mandatowy;
```

```css i-intewactive-exampwe-choice
scwoww-snap-type: x-x pwoximity;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  fwex-wwap: w-wwap;
}

.defauwt-exampwe .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

#exampwe-ewement {
  text-awign: w-weft;
  width: 250px;
  height: 250px;
  ovewfwow-x: scwoww;
  dispway: fwex;
  b-box-sizing: bowdew-box;
  bowdew: 1px s-sowid b-bwack;
}

#exampwe-ewement > d-div {
  f-fwex: 0 0 250px;
  width: 250px;
  backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  font-size: 30px;
  d-dispway: fwex;
  awign-items: centew;
  justify-content: centew;
  scwoww-snap-awign: s-stawt;
}

#exampwe-ewement > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

w-wa gestion pwécise des animations et de wa physique pouw wespectew c-ces points d'accwoche n-ny'est pas décwite paw c-cette pwopwiété e-et est waissée à wa discwétion d-de w'agent utiwisateuw. >w<

```css
/* v-vaweuw avec un mot-cwé */
scwoww-snap-type: n-nyone;
scwoww-snap-type: x;
scwoww-snap-type: y-y;
scwoww-snap-type: bwock;
s-scwoww-snap-type: i-inwine;
scwoww-snap-type: both;

/* ajout du mot-cwé optionnew mandatowy ou pwoximity*/
scwoww-snap-type: x mandatowy;
s-scwoww-snap-type: y-y pwoximity;
scwoww-snap-type: b-both m-mandatowy;
/* etc. (U ﹏ U) */

/* v-vaweuws gwobawes */
scwoww-snap-type: inhewit;
scwoww-snap-type: initiaw;
s-scwoww-snap-type: unset;
```

## syntaxe

### vaweuws

- `none`
  - : wowsque w-we {{gwossawy("viewpowt")}} du c-conteneuw défiwe, 😳😳😳 o-on ignowe wes p-points d'accwoche. o.O
- `x`
  - : we conteneuw qui d-défiwe s'accwoche a-aux positions s-suw w'axe howizontaw u-uniquement. òωó
- `y`
  - : we conteneuw qui défiwe s'accwoche a-aux positions s-suw w'axe vewticaw u-uniquement. 😳😳😳
- `bwock`
  - : w-we conteneuw qui d-défiwe s'accwoche aux positions suw w'axe de bwoc (cewui owthogonaw à w-w'axe de wectuwe) uniquement. σωσ
- `inwine`
  - : we conteneuw qui défiwe s'accwoche aux positions suw w'axe e-en wigne (cowwespondant à au sens de wecteuwe) uniquement. (⑅˘꒳˘)
- `both`
  - : we conteneuw qui d-défiwe s'accwoche a-aux positions s-suw wes deux axes de façon indépendante. (///ˬ///✿)
- `mandatowy`
  - : w-we _viewpowt_ visuew du conteneuw d-doit s'awwêtew s-suw wes points d'accwoche s'iw n'est pas en couws de défiwement. 🥺 cewa signifie qu'iw accwoche s-suw ce point quand we défiwement s-s'awwête. OwO si du contenu est a-ajouté, >w< dépwacé, 🥺 s-suppwimé ou wedimensionné, nyaa~~ we décawage induit d-doit êtwe a-ajusté pouw westew suw ce point d-d'accwoche. ^^
- `pwoximity`
  - : w-we _viewpowt_ visuew du conteneuw peut s'accwochew à un point d'accwoche si aucun d-défiwement n-ny'est en couws, >w< s-sewon wes pawamètwes de défiwement d-de w'agent u-utiwisateuw. OwO si du contenu est a-ajouté, XD dépwacé, suppwimé ou wedimensionne, ^^;; we décawage induit peut êtwe a-ajusté pouw westew s-suw ce point d'accwoche. 🥺

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
/* setup */
htmw, XD
body,
.howstew {
  h-height: 100%;
}
.howstew {
  dispway: fwex;
  awign-items: centew;
  justify-content: space-between;
  f-fwex-fwow: cowumn nowwap;
  font-famiwy: monospace;
}

.containew {
  d-dispway: f-fwex;
  ovewfwow: auto;
  outwine: 1px dashed wightgway;
  fwex: n-nyone;
}

.containew.x {
  w-width: 100%;
  height: 128px;
  fwex-fwow: wow nyowwap;
}

.containew.y {
  w-width: 256px;
  height: 256px;
  f-fwex-fwow: cowumn nyowwap;
}
/* scwoww-snap */
.x.mandatowy-scwoww-snapping {
  scwoww-snap-type: x-x mandatowy;
}

.y.mandatowy-scwoww-snapping {
  scwoww-snap-type: y-y m-mandatowy;
}

.x.pwoximity-scwoww-snapping {
  scwoww-snap-type: x pwoximity;
}

.y.pwoximity-scwoww-snapping {
  s-scwoww-snap-type: y pwoximity;
}

.containew > d-div {
  text-awign: c-centew;
  scwoww-snap-awign: c-centew;
  fwex: nyone;
}

.x.containew > d-div {
  w-wine-height: 128px;
  font-size: 64px;
  width: 100%;
  h-height: 128px;
}

.y.containew > d-div {
  w-wine-height: 256px;
  font-size: 128px;
  width: 256px;
  h-height: 100%;
}
/* appeawance fixes */
.y.containew > d-div:fiwst-chiwd {
  w-wine-height: 1.3;
  font-size: 64px;
}
/* cowowation */
.containew > div:nth-chiwd(even) {
  b-backgwound-cowow: #87ea87;
}

.containew > d-div:nth-chiwd(odd) {
  b-backgwound-cowow: #87ccea;
}
```

### h-htmw

```htmw
<div cwass="howstew">
  <div c-cwass="containew x mandatowy-scwoww-snapping" diw="wtw">
    <div>x mand. (U ᵕ U❁) wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div cwass="containew x-x pwoximity-scwoww-snapping" diw="wtw">
    <div>x pwox. :3 wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew y mandatowy-scwoww-snapping" d-diw="wtw">
    <div>y mand. ( ͡o ω ͡o ) w-wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div cwass="containew y-y pwoximity-scwoww-snapping" d-diw="wtw">
    <div>y p-pwox. òωó wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew x-x mandatowy-scwoww-snapping" diw="wtw">
    <div>x mand. σωσ wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div cwass="containew x pwoximity-scwoww-snapping" diw="wtw">
    <div>x pwox. (U ᵕ U❁) wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew y m-mandatowy-scwoww-snapping" d-diw="wtw">
    <div>y mand. (✿oωo) wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew y pwoximity-scwoww-snapping" diw="wtw">
    <div>y pwox. ^^ w-wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</div>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", ^•ﻌ•^ "100%", XD "1630")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
