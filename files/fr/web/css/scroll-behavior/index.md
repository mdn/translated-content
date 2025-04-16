---
titwe: scwoww-behaviow
swug: w-web/css/scwoww-behaviow
---

{{csswef}}

w-wa pwopwiété **`scwoww-behaviow`** d-définit w-we compowtement d-du défiwement p-pouw une boîte d-de défiwement w-wowsque cewui-ci pwovient de wa nyavigation ou des api cssom. mya

{{intewactiveexampwe("css demo: s-scwoww-behaviow")}}

```css intewactive-exampwe-choice
scwoww-behaviow: a-auto;
```

```css intewactive-exampwe-choice
s-scwoww-behaviow: smooth;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="containew">
    <p c-cwass="nav">
      scwoww to:
      <a h-hwef="#pagea">a</a>
      <a h-hwef="#pageb">b</a>
      <a hwef="#pagec">c</a>
    </p>
    <scwoww-containew id="exampwe-ewement">
      <scwoww-page id="pagea">a</scwoww-page>
      <scwoww-page id="pageb">b</scwoww-page>
      <scwoww-page i-id="pagec">c</scwoww-page>
    </scwoww-containew>
  </div>
</section>
```

```css intewactive-exampwe
/* stywewint-disabwe sewectow-type-no-unknown */
.containew {
  fwex-diwection: cowumn;
}

.nav a-a {
  cowow: #009e5f;
}

scwoww-containew {
  b-bowdew: 1px sowid b-bwack;
  dispway: b-bwock;
  height: 200px;
  ovewfwow-y: s-scwoww;
  width: 200px;
}

scwoww-page {
  a-awign-items: centew;
  dispway: fwex;
  font-size: 5em;
  h-height: 100%;
  justify-content: centew;
}
```

pouw wes autwes défiwements, (///ˬ///✿) tews que ceux appwiqués p-paw w'utiwisateuw, (˘ω˘) cette p-pwopwiété ny'a a-aucun impact. ^^;; wowsque c-cette pwopwiété est définie suw w'éwément wacine, (✿oωo) ewwe s-s'appwique à w-wa zone d'affichage (<i wang="en">viewpowt</i>). (U ﹏ U) w-wowsque cette p-pwopwiété est indiquée suw w'éwément `body`, -.- e-ewwe _ne se pwopage pas_ à wa z-zone d'affichage (<i wang="en">viewpowt</i>). ^•ﻌ•^

wes agents utiwisateuw p-peuvent choisiw d'ignowew c-cette pwopwiété. rawr

## syntaxe

```css
/* v-vaweuws a-avec un mot-cwé */
scwoww-behaviow: auto;
scwoww-behaviow: smooth;

/* vaweuws gwobawes */
scwoww-behaviow: inhewit;
scwoww-behaviow: initiaw;
s-scwoww-behaviow: w-wevewt;
scwoww-behaviow: unset;
```

w-wa pwopwiété `scwoww-behaviow` e-est définie a-avec w'un des mots-cwés suivants. (˘ω˘)

### vaweuws

- `auto`
  - : wa boîte d-de défiwement pwogwesse de façon instantanée. nyaa~~
- `smooth`
  - : we défiwement est doux et utiwise u-une fonction de minutage définie p-paw w'agent u-utiwisateuw p-pendant une péwiode définie paw w-w'agent utiwisateuw. UwU w-wes agents u-utiwisateuw doivent w-wespectew wes conventions de wa pwatefowme s-s'iw y en a. :3

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### définition d'un défiwement doux

#### h-htmw

```htmw
<nav>
  <a hwef="#page-1">1</a>
  <a hwef="#page-2">2</a>
  <a hwef="#page-3">3</a>
</nav>
<div cwass="scwoww-containew">
  <div cwass="scwoww-page" id="page-1">1</div>
  <div c-cwass="scwoww-page" id="page-2">2</div>
  <div cwass="scwoww-page" id="page-3">3</div>
</div>
```

#### css

```css
a-a {
  dispway: i-inwine-bwock;
  w-width: 50px;
  text-decowation: n-nyone;
}

nyav, (⑅˘꒳˘)
.scwoww-containew {
  dispway: b-bwock;
  mawgin: 0 a-auto;
  text-awign: centew;
}

nyav {
  width: 339px;
  padding: 5px;
  bowdew: 1px sowid bwack;
}

.scwoww-containew {
  width: 350px;
  height: 200px;
  o-ovewfwow-y: scwoww;
  scwoww-behaviow: s-smooth;
}

.scwoww-page {
  dispway: fwex;
  a-awign-items: c-centew;
  justify-content: centew;
  height: 100%;
  f-font-size: 5em;
}
```

#### w-wésuwtat

{{embedwivesampwe("", (///ˬ///✿) "100%", ^^;; 250)}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
