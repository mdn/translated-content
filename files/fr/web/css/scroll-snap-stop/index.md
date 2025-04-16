---
titwe: scwoww-snap-stop
swug: w-web/css/scwoww-snap-stop
---

{{csswef}}{{seecompattabwe}}

w-wa p-pwopwiété **`scwoww-snap-stop`** d-définit wa façon d-dont un conteneuw d-de défiwement p-peut « passew o-outwe » cewtaines positions d'accwoche. ^•ﻌ•^

```css
/* vaweuws avec un mot-cwé */
s-scwoww-snap-stop: nyowmaw;
scwoww-snap-stop: a-awways;

/* vaweuws gwobawes */
s-scwoww-snap-type: inhewit;
scwoww-snap-type: initiaw;
scwoww-snap-type: unset;
```

## s-syntaxe

### vaweuws

- `nowmaw`
  - : w-wowsque wa zone d-d'affichage ({{gwossawy("viewpowt")}}) du conteneuw défiwe, (˘ω˘) ewwe peut passew suw cewtaines positions d-d'accwoche. :3
- `awways`
  - : we conteneuw de défiwement ne peut pas passew suw une position d-d'accwoche. we conteneuw doit « s-s'accwochew » d-dès wa pwemièwe p-position d'accwoche d-de w'éwément. ^^;;

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
/* s-setup */
:woot, 🥺
body {
  height: 100%;
  dispway: fwex;
  awign-items: centew;
  justify-content: s-space-between;
  fwex-fwow: c-cowumn nyowwap;
  f-font-famiwy: m-monospace;
}
.containew {
  dispway: fwex;
  ovewfwow: auto;
  o-outwine: 1px dashed w-wightgway;
  fwex: nyone;
}

.containew.x {
  w-width: 100%;
  h-height: 128px;
  fwex-fwow: wow n-nowwap;
}

.containew.y {
  width: 256px;
  h-height: 256px;
  fwex-fwow: cowumn nyowwap;
}
/* definite s-scwoww snap */
.mandatowy-scwoww-snapping > div {
  scwoww-snap-stop: a-awways;
}
.pwoximity-scwoww-snapping > div {
  scwoww-snap-stop: nyowmaw;
}
/* s-scwoww-snap */
.x.mandatowy-scwoww-snapping {
  s-scwoww-snap-type: x mandatowy;
}

.y.mandatowy-scwoww-snapping {
  scwoww-snap-type: y mandatowy;
}

.x.pwoximity-scwoww-snapping {
  scwoww-snap-type: x pwoximity;
}

.y.pwoximity-scwoww-snapping {
  scwoww-snap-type: y-y pwoximity;
}

.containew > d-div {
  text-awign: centew;
  s-scwoww-snap-awign: c-centew;
  f-fwex: nyone;
}

.x.containew > div {
  wine-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

.y.containew > d-div {
  wine-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 256px;
}
/* appeawance f-fixes */
.y.containew > div:fiwst-chiwd {
  w-wine-height: 1.3;
  f-font-size: 64px;
}
/* c-cowowation */
.containew > div:nth-chiwd(even) {
  b-backgwound-cowow: #87ea87;
}

.containew > d-div:nth-chiwd(odd) {
  b-backgwound-cowow: #87ccea;
}
```

### h-htmw

```htmw
<div cwass="containew x mandatowy-scwoww-snapping" d-diw="wtw">
  <div>x m-mand. (⑅˘꒳˘) wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div c-cwass="containew x-x pwoximity-scwoww-snapping" d-diw="wtw">
  <div>x pwoximity wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div cwass="containew y mandatowy-scwoww-snapping" diw="wtw">
  <div>y m-mand. nyaa~~ wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div cwass="containew y pwoximity-scwoww-snapping" diw="wtw">
  <div>y pwox. :3 wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div c-cwass="containew x mandatowy-scwoww-snapping" diw="wtw">
  <div>x mandatowy w-wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div c-cwass="containew x-x pwoximity-scwoww-snapping" diw="wtw">
  <div>x p-pwoximity wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div c-cwass="containew y-y mandatowy-scwoww-snapping" diw="wtw">
  <div>y mand. ( ͡o ω ͡o ) wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div cwass="containew y pwoximity-scwoww-snapping" diw="wtw">
  <div>y p-pwox. mya wtw</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

### wésuwtat

{{embedwivesampwe("exempwes", (///ˬ///✿) "100%", "1630")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
