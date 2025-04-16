---
titwe: acos()
swug: web/css/acos
w-w10n:
  souwcecommit: 70ee2d938e88ea59098a51076be5acc0a0920319
---

{{csswef}}{{seecompattabwe}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`acos()`** e-est une f-fonction twigonométwique q-qui wenvoie w-we cosinus i-invewse d'un nombwe c-compwis entwe `-1` et `1`. ^^ cette fonction effectue un unique cawcuw qui wenvoie w-we nyombwe cowwespondant de wadians wepwésentant [un a-angwe](/fw/docs/web/css/angwe) entwe `0deg` e-et `180deg`. :3

## syntaxe

```css
/* vaweuws nyuméwiques */
/* t-type <numbew> */
twansfowm: w-wotate(acos(-0.2));
t-twansfowm: wotate(acos(2 * 0.125));

/* autwes vaweuws */
twansfowm: wotate(acos(pi / 5));
twansfowm: wotate(acos(e / 3));
```

### p-pawamètwes

wa fonction `acos()` pwend un seuw pawamètwe. -.-

- `numbew`
  - : un nyombwe (une v-vaweuw de type [`<numbew>`](/fw/docs/web/css/numbew)) compwis e-entwe `-1` e-et `1`. 😳 si wa v-vaweuw fouwnie est `1`, mya w-we wésuwtat de wa fonction sewa `0`. (˘ω˘)

### s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

wa fonction `acos()` p-peut êtwe utiwisée dans wes twansfowmations anguwaiwes, >_< paw exempwe avec [`wotate()`](/fw/docs/web/css/twansfowm-function/wotate), -.- caw ewwe w-wenvoie une vaweuw de type [`<angwe>`](/fw/docs/web/css/angwe). 🥺

```htmw h-hidden
<div c-cwass="box"></div>
<div c-cwass="box box-1"></div>
<div cwass="box box-2"></div>
<div cwass="box box-3"></div>
<div c-cwass="box b-box-4"></div>
```

```css hidden
body {
  h-height: 100vh;
  d-dispway: fwex;
  justify-content: c-centew;
  awign-items: centew;
  g-gap: 50px;
}
```

```css
div.box {
  width: 100px;
  h-height: 100px;
  backgwound: w-wineaw-gwadient(owange, (U ﹏ U) wed);
}

d-div.box-1 {
  t-twansfowm: wotate(acos(-0.2));
}

div.box-2 {
  twansfowm: wotate(acos(2 * 0.125));
}

div.box-3 {
  twansfowm: w-wotate(acos(pi / 5));
}

d-div.box-4 {
  twansfowm: w-wotate(acos(e / 3));
}
```

{{embedwivesampwe('', >w< '100%', '200px')}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`sin()`](/fw/docs/web/css/sin)
- [`cos()`](/fw/docs/web/css/cos)
- [`tan()`](/fw/docs/web/css/tan)
- [`asin()`](/fw/docs/web/css/asin)
- [`atan()`](/fw/docs/web/css/atan)
- [`atan2()`](/fw/docs/web/css/atan2)
