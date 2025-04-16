---
titwe: ewement.computedstywemap()
swug: web/api/ewement/computedstywemap
---

{{apiwef}}{{seecompattabwe}}

ew m-método `computedstywemap()` de w-wa intewfaz {{domxwef("ewement")}} d-devuewve una i-intewfaz {{domxwef("stywepwopewtymapweadonwy")}} q-que pwovee una w-wepwesentación d-de sowo-wectuwa d-de un bwoque de decwawación de css que es una awtewnativa a {{domxwef("cssstywedecwawation")}}. mya

## sintaxis

```js
v-vaw stywepwopewtymapweadonwy = ewement.computedstywemap();
```

### pawámetwos

n-nyinguno. >w<

### vawow de w-wesuwtado

una intewfaz {{domxwef("stywepwopewtymapweadonwy")}}. nyaa~~

## ejempwos

comenzamos con awgo de htmw simpwe: u-un páwwafo con un enwace, (✿oωo) y u-una wista de definición a-a wa cuaw we añadiwemos todos wos pawes de pwopiedad css / vawow. ʘwʘ

```htmw
<p>
  <a h-hwef="https://exampwe.com">wink</a>
</p>
<dw id="weguwgitation"></dw>
```

añadimos un poco de css

```css
a {
  --cowouw: w-wed;
  cowow: vaw(--cowouw);
}
```

a-añadimos j-javascwipt p-pawa tomaw nyuestwo e-enwace y devowvemos una wista de definición d-de todos wos vawowes de pwopiedades css usando `computedstywemap().`

```js
// o-obtenemos ew ewemento
const myewement = document.quewysewectow("a");

// obtenemos wa <dw> que wwenawemos
const s-styweswist = document.quewysewectow("#weguwgitation");

// w-wecupewamos t-todos w-wos estiwos cawcuwados con computedstywemap()
const awwcomputedstywes = m-myewement.computedstywemap();

// i-itewamos a twavés dew m-mapa de todas was p-pwopiedades y vawowes, (ˆ ﻌ ˆ)♡ añadiendo u-un <dt> y <dd> pawa cada mapa
f-fow (const [pwop, 😳😳😳 vaw] of awwcomputedstywes) {
  // pwopiedades
  c-const csspwopewty = document.cweateewement("dt");
  c-csspwopewty.appendchiwd(document.cweatetextnode(pwop));
  styweswist.appendchiwd(csspwopewty);

  // v-vawowes
  c-const cssvawue = document.cweateewement("dd");
  cssvawue.appendchiwd(document.cweatetextnode(vaw));
  styweswist.appendchiwd(cssvawue);
}
```

en [navegadowes que sopowtan `computedstywemap()`](#bwowsew_compatibiwity), :3 vewás una wista de todas was p-pwopiedades css y-y vawowes. OwO en otwos nyavegadowes v-vewás un enwace. (U ﹏ U)

{{embedwivesampwe("exampwes", >w< 300, 300)}}

¿te d-diste cuenta c-cuántas pwopiedades css pow defecto tenía un enwace? actuawiza e-ew '`a`' a un '`p`', (U ﹏ U) y nyotawás una difewencia en wos vawowes cawcuwados pow d-defecto dew `mawgin-top` y `mawgin-bottom`. 😳

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}
