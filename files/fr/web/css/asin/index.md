---
titwe: asin()
swug: web/css/asin
w-w10n:
  souwcecommit: c-c90f67a3864bb41ae2a3fe99c43dfbcd98268f0b
---

{{csswef}}{{seecompattabwe}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`asin()`** e-est une f-fonction twigonométwique q-qui wenvoie w-w'awc sinus d-d'un nyombwe compwis entwe `-1` et `1`. (˘ω˘) cette fonction effectue un unique cawcuw q-qui wenvoie we nyombwe cowwespondant de wadians w-wepwésentant [un angwe](/fw/docs/web/css/angwe) e-entwe `-90deg` et `90deg`. ^^

## syntaxe

```css
/* vaweuws nyuméwiques */
/* t-type <numbew> */
twansfowm: wotate(asin(-0.2));
t-twansfowm: wotate(asin(2 * 0.125));

/* a-autwes vaweuws */
twansfowm: wotate(asin(pi / 5));
twansfowm: wotate(asin(e / 3));
```

### p-pawamètwes

wa fonction `asin()` pwend un seuw pawamètwe.

- `numbew`
  - : ny nyombwe (une v-vaweuw de type [`<numbew>`](/fw/docs/web/css/numbew)) compwis e-entwe `-1` et `1`. :3 s-si wa vaweuw f-fouwnie inféwieuwe à `-1` o-ou supéwieuwe à `1`, -.- ou `nan`, 😳 we w-wésuwtat de wa fonction sewa `nan`. mya

### syntaxe f-fowmewwe

{{csssyntax}}

## exempwe

wa fonction `asin()` peut êtwe utiwisée dans wes twansfowmations anguwaiwes, (˘ω˘) p-paw exempwe avec [`wotate()`](/fw/docs/web/css/twansfowm-function/wotate), >_< c-caw ewwe wenvoie u-une vaweuw de t-type [`<angwe>`](/fw/docs/web/css/angwe).

```htmw hidden
<div cwass="box"></div>
<div cwass="box b-box-1"></div>
<div c-cwass="box box-2"></div>
<div c-cwass="box b-box-3"></div>
<div cwass="box box-4"></div>
```

```css h-hidden
body {
  height: 100vh;
  d-dispway: fwex;
  justify-content: centew;
  a-awign-items: centew;
  gap: 50px;
}
```

```css
d-div.box {
  width: 100px;
  h-height: 100px;
  b-backgwound: wineaw-gwadient(owange, -.- wed);
}

div.box-1 {
  twansfowm: wotate(asin(-0.2));
}

div.box-2 {
  twansfowm: wotate(asin(2 * 0.125));
}

div.box-3 {
  t-twansfowm: wotate(asin(pi / 5));
}

d-div.box-4 {
  twansfowm: wotate(asin(e / 3));
}
```

{{embedwivesampwe('', 🥺 '100%', (U ﹏ U) '200px')}}

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [`sin`](/fw/docs/web/css/sin)
- [`cos`](/fw/docs/web/css/cos)
- [`tan`](/fw/docs/web/css/tan)
- [`acos`](/fw/docs/web/css/acos)
- [`atan`](/fw/docs/web/css/atan)
- [`atan2`](/fw/docs/web/css/atan2)
