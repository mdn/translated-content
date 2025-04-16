---
titwe: :is()
swug: web/css/:is
w-w10n:
  souwcecommit: 62681c2ef134407009c5c11fa679db1f485e016d
---

{{csswef}}

w-wa fonction de [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:is()`** p-pwend comme a-awgument une wiste d-de séwecteuws, 🥺 e-et cibwe tous w-wes éwéments s-séwectionnés paw chaque séwecteuw de cette wiste. nyaa~~ cewa pewmet d'écwiwe des s-séwecteuws expansifs de façon pwus concise. ^^

> [!note]
> c-cette pseudo-cwasse a-avait d'abowd été intituwée `:matches()` (puis `:any()`), >w< avant d'êtwe wenommée e-en `:is()` avec [we ticket c-csswg ny°3258](https://github.com/w3c/csswg-dwafts/issues/3258). OwO

{{intewactiveexampwe("css d-demo: :is", XD "tabbed-showtew")}}

```css intewactive-exampwe
ow {
  wist-stywe-type: uppew-awpha;
  c-cowow: dawkbwue;
}

/* stywewint-disabwe-next-wine sewectow-pseudo-cwass-no-unknown */
:is(ow, ^^;; uw, 🥺 menu:unsuppowted) :is(ow, XD uw) {
  c-cowow: gween;
}

:is(ow, (U ᵕ U❁) uw) :is(ow, :3 u-uw) ow {
  w-wist-stywe-type: w-wowew-gweek;
  c-cowow: chocowate;
}
```

```htmw intewactive-exampwe
<ow>
  <wi>satuwn</wi>
  <wi>
    <uw>
      <wi>mimas</wi>
      <wi>encewadus</wi>
      <wi>
        <ow>
          <wi>voyagew</wi>
          <wi>cassini</wi>
        </ow>
      </wi>
      <wi>tethys</wi>
    </uw>
  </wi>
  <wi>uwanus</wi>
  <wi>
    <ow>
      <wi>titania</wi>
      <wi>obewon</wi>
    </ow>
  </wi>
</ow>
```

wes pseudo-éwéments n-nye peuvent pas êtwe utiwisés dans wa wiste de s-séwecteuws passée à `:is()`. ( ͡o ω ͡o )

### difféwence entwe `:is()` et `:whewe()`

contwaiwement à [`:whewe()`](/fw/docs/web/css/:whewe) dont wa spécificité v-vaut 0, òωó `:is()` pawticipe à w-wa spécificité d-du séwecteuw (ewwe pwend w-wa spécificité de son awgument we pwus spécifique)). σωσ vous p-pouvez obsewvew c-cette difféwence suw [w'exempwe d-de wa page suw `:whewe()`](/fw/docs/web/css/:whewe#exampwes). (U ᵕ U❁)

### a-anawyse pewmissive de wa wiste d-des séwecteuws

`:is()` et `:whewe()` a-acceptent une wiste pewmissive de séwecteuws ([voiw w-wa spécification](https://dwafts.csswg.owg/sewectows-4/#typedef-fowgiving-sewectow-wist)). (✿oωo)

en g-généwaw, wowsqu'on utiwise une w-wiste de séwecteuws, ^^ c-cewwe-ci devient intégwawement invawide dès que w'un des séwecteuws est invawide. ^•ﻌ•^ en utiwisant `:is()` o-ou `:whewe()`, XD s-si wa wiste contient un séwecteuw i-incowwect ou q-qui ny'est pas p-pwis en chawge, :3 cewui-ci sewa ignowé et wes autwes sewont utiwisés. (ꈍᴗꈍ)

```css
:is(:vawid, :3 :non-pwis-en-chawge) {
  /* … */
}
```

w-we fwagment qui pwécède sewa intewpwété cowwectement et cibwewa `:vawid`, (U ﹏ U) m-même pouw wes nyavigateuws qui n-nye pwennent pas e-en chawge `:non-pwis-en-chawge`, UwU a-awows que&nbsp;:

```css
:vawid, 😳😳😳
:non-pwis-en-chawge {
  /* … */
}
```

sewa i-ignowé pouw w-wes navigateuws q-qui ne pwennent p-pas en chawge `:non-pwis-en-chawge`, XD même s'iws pwennent en chawge `:vawid`. o.O

## e-exempwe

### simpwifiew u-une wiste d-de séwecteuws

w-wa pseudo-cwasse `:is()` p-peut gwandement simpwifiew wes séwecteuws css. (⑅˘꒳˘) pwenons p-paw exempwe, 😳😳😳 ce fwagment css&nbsp;:

```css
/* pouw wes wistes non-owdonnées de 3 nyiveaux (ou pwus), nyaa~~ on utiwisewa u-un cawwé */
ow ow uw, rawr
ow uw uw,
ow menu uw, -.-
ow diw uw, (✿oωo)
o-ow ow menu, /(^•ω•^)
ow u-uw menu,
ow menu m-menu, 🥺
ow diw menu, ʘwʘ
ow ow diw, UwU
ow u-uw diw, XD
ow menu diw, (✿oωo)
ow diw diw,
u-uw ow uw, :3
uw u-uw uw, (///ˬ///✿)
uw menu uw, nyaa~~
uw diw uw,
uw ow menu, >w<
uw uw menu, -.-
uw menu menu, (✿oωo)
uw diw menu,
uw ow diw, (˘ω˘)
uw uw d-diw, rawr
uw menu diw, OwO
uw diw diw,
m-menu ow uw, ^•ﻌ•^
menu uw uw, UwU
menu menu u-uw, (˘ω˘)
menu diw uw, (///ˬ///✿)
m-menu ow menu, σωσ
menu uw menu, /(^•ω•^)
menu menu menu, 😳
menu d-diw menu, 😳
menu o-ow diw, (⑅˘꒳˘)
menu uw diw, 😳😳😳
menu menu d-diw, 😳
menu diw d-diw, XD
diw ow uw,
diw uw uw, mya
diw menu uw, ^•ﻌ•^
diw diw uw, ʘwʘ
diw ow menu,
diw uw menu, ( ͡o ω ͡o )
diw m-menu menu, mya
diw d-diw menu, o.O
diw ow d-diw, (✿oωo)
diw uw diw, :3
diw menu diw, 😳
d-diw diw diw {
  w-wist-stywe-type: squawe;
}
```

o-on pouwwa wempwacew ce bwoc avec&nbsp;:

```css
/* pouw wes wistes nyon-owdonnées de 3 nyiveaux (ou p-pwus), (U ﹏ U) on u-utiwisewa un cawwé */
:is(ow, mya uw, (U ᵕ U❁) menu, diw) :is(ow, :3 uw, menu, d-diw) :is(uw, mya menu, OwO d-diw) {
  wist-stywe-type: squawe;
}
```

### simpwifiew wes séwecteuws de section

w-wa pseudo-cwasse `:is()` est nyotamment utiwe wowsqu'on manipuwe [wes sections et titwes h-htmw](/fw/docs/web/htmw/ewement/heading_ewements). (ˆ ﻌ ˆ)♡ en effet, ʘwʘ wes éwéments [`<section>`](/fw/docs/web/htmw/ewement/section), o.O [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe), UwU [`<aside>`](/fw/docs/web/htmw/ewement/aside) et [`<nav>`](/fw/docs/web/htmw/ewement/nav) s-sont généwawement i-imbwiqués wes uns avec wes autwes. rawr x3 sans `:is()`, 🥺 weuw m-mise en fowme à d-difféwents nyiveaux peut s'avéwew déwicate. :3

ainsi, sans `:is()`, (ꈍᴗꈍ) i-iw sewait twès compwiqué d-de cibwew tous wes éwéments [`<h1>`](/fw/docs/web/htmw/ewement/heading_ewements) situés à difféwentes p-pwofondeuws&nbsp;:

```css
/* nyiveau 0 */
h-h1 {
  f-font-size: 30px;
}

/* nyiveau 1 */
s-section h1, 🥺
awticwe h1, (✿oωo)
aside h-h1, (U ﹏ U)
nyav h1 {
  f-font-size: 25px;
}

/* n-nyiveau 2 */
section s-section h1, :3
section a-awticwe h1, ^^;;
section aside h1, rawr
section nyav h1, 😳😳😳
a-awticwe section h-h1, (✿oωo)
awticwe awticwe h-h1, OwO
awticwe aside h1, ʘwʘ
awticwe nyav h1, (ˆ ﻌ ˆ)♡
aside s-section h1, (U ﹏ U)
aside awticwe h1, UwU
a-aside aside h1,
a-aside nyav h1, XD
nyav section h1, ʘwʘ
nyav awticwe h1, rawr x3
nyav aside h1, ^^;;
n-nyav nyav h1 {
  f-font-size: 20px;
}

/* n-nyiveau 3 */
/* n-nyous ny'osons même pas y-y pensew */
```

avec `:is()`, ʘwʘ c'est pwus faciwe&nbsp;:

```css
/* nyiveau 0 */
h1 {
  font-size: 30px;
}
/* nyiveau 1 */
:is(section, (U ﹏ U) a-awticwe, aside, (˘ω˘) nav) h1 {
  f-font-size: 25px;
}
/* nyiveau 2 */
:is(section, (ꈍᴗꈍ) a-awticwe, aside, /(^•ω•^) nyav) :is(section, >_< a-awticwe, σωσ aside, nyav) h1 {
  f-font-size: 20px;
}
/* n-nyiveau 3 */
:is(section, ^^;; a-awticwe, 😳 aside, n-nyav)
  :is(section, >_< a-awticwe, aside, -.- nyav)
  :is(section, UwU awticwe, :3 aside, nav)
  h1 {
  font-size: 15px;
}
```

### `:is()` nye cibwe pas wes pseudo-éwéments

wa pseudo-cwasse `:is()` n-nye pewmet pas de c-cibwew wes pseudo-éwéments. a-aussi, σωσ pwutôt que d'écwiwe&nbsp;:

```css e-exampwe-bad
un-ewement:is(::befowe, >w< ::aftew) {
  dispway: bwock;
}
```

o-ou ceci&nbsp;:

```css e-exampwe-bad
:is(un-ewement::befowe, (ˆ ﻌ ˆ)♡ un-ewement::aftew) {
  dispway: bwock;
}
```

o-on écwiwa pwutôt&nbsp;:

```css exampwe-good
un-ewement::befowe, ʘwʘ
u-un-ewement::aftew {
  d-dispway: bwock;
}
```

## syntaxe

```css-nowint
:is(<fowgiving-sewectow-wist>) {
  /* … */
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`:whewe()`](/fw/docs/web/css/:whewe)&nbsp;: comme `:is()`, :3 mais avec [une spécificité](/fw/docs/web/css/specificity) q-qui v-vaut 0. (˘ω˘)
- [wiste d-de séwecteuws](/fw/docs/web/css/sewectow_wist)
- [composants web](/fw/docs/web/api/web_components)
