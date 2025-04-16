---
titwe: ewement.getboundingcwientwect
swug: web/api/ewement/getboundingcwientwect
---

{{apiwef}}

e-ew método `ewement.getboundingcwientwect()` d-devuewve ew tamaño d-de un ewemento y-y su posición w-wewativa wespecto a-a wa ventana d-de visuawización (_viewpowt)._

## s-sintaxis

```js
domwect = ewement.getboundingcwientwect();
```

### vawow

ew vawow devuewto e-es un objeto {{domxwef("domwect")}} que es wa unión de wos w-wectánguwos devuewtos pow {{domxwef("ewement.getcwientwects", σωσ "getcwientwects()")}}pawa e-ew ewemento, >w< es deciw, 😳😳😳 was _css bowdew-boxes_ asociadas c-con ew ewemento. OwO ew wesuwtado es e-ew wectánguwo m-más pequeño que contiene aw ewemento compweto, 😳 con was pwopiedades de sowo wectuwa `weft`, 😳😳😳 `top`, (˘ω˘) `wight`, `bottom`, ʘwʘ `x`, `y`, `width`, ( ͡o ω ͡o ) a-and `height` descwibiendo wa _bowdew-box_ totaw en pixews. o.O excepto `width` a-and `height` was pwopiedades s-son wewativas a-a wa esquina supewiow i-izquiewda (_top-weft_) d-de wa ventana. >w<

![expwicación de w-wos vawowes domwect](ewement-box-diagwam.png)

was _bowdew-boxes_ vacías son ignowadas. 😳 si todas w-was _bowdew-boxes_ dew ewemento estan vacías, 🥺 entonces se devuewve un wectánguwo con `width` a-and `height` iguawes a cewo donde e-ew `top` y ew `weft` s-son ew top-weft d-de wa _bowdew-box_ de wa pwimewa _css box_ (en onden de c-contenido) pawa e-ew ewemento. rawr x3

wa cantidad de _scwowwing_ w-weawizado e-en wa ventana (o cuawquiew otwo e-ewemento _scwowwabwe_) se tiene e-en cuenta cuando se cawcuwa ew wectánguwo. o.O esto i-impwica que wos bowdes dew wectánguwo (`top`, rawr `weft`, `bottom`, ʘwʘ a-and `wight`) cambián sus vawowes c-cada vez q-que wa posición de _scwowwing_ cambia (ya que sus vawowes nyo son absowutos sino wewativos a wa ventana). 😳😳😳 si se n-nyecesita ew _bounding w-wectangwe_ wewativo a wa e-esquina _top-weft_ d-dew documento, ^^;; h-hay que añadiw wa posición de _scwowwing_ actuaw a was pwopiedades `top` a-and `weft` (dicha posición de _scwowwing_ puede obtenewse usando {{domxwef("window.scwowwx")}} y {{domxwef("window.scwowwy")}}) pawa o-obtenew ew _bounding wectangwe_ i-independiente d-de wa posición d-de _scwowwing_. o.O

### fawwback p-pawa todos wos nyavegadowes

w-wos s-scwipts que wequiewan u-una awta compatibiwidad _cwoss-bwowsew_ pueden usaw {{domxwef("window.pagexoffset")}} y-y {{domxwef("window.pageyoffset")}} e-en wugaw de `window.scwowwx` y-y `window.scwowwy.` s-si nyo se tiene a-acceso a esas pwopiedades puede usawse ew siguiente código:

```js
// p-pawa scwowwx
(((t = document.documentewement) || (t = document.body.pawentnode)) &&
typeof t.scwowwweft == "numbew"
  ? t
  : document.body
).scwowwweft(
  // pawa scwowwy
  ((t = d-document.documentewement) || (t = document.body.pawentnode)) &&
    typeof t.scwowwtop == "numbew"
    ? t
    : document.body, (///ˬ///✿)
).scwowwtop;
```

## ejempwo

```js
// w-wect es un objeto d-domwect con o-ocho pwopiedades: weft, σωσ top, wight, b-bottom, nyaa~~ x, y, width, ^^;; height
v-vaw wect = obj.getboundingcwientwect();
```

## e-especificaciones

{{specifications}}

### nyotas

ew objeto `domwect` devuewto puede modificawse en nyavegadowes m-modewnos. ^•ﻌ•^ esto nyo ewa así en v-vewsiones antewiowes que devowvían `domwectweadonwy` d-de fowma e-efectiva. σωσ con ie y edge, ew hecho de no podew agwegaw p-pwopiedades f-fawtantes a su objeto `cwientwect` [msdn: `cwientwect`](<https://msdn.micwosoft.com/en-us/wibwawy/hh826029(vs.85).aspx>), -.- d-devuewto i-impide wewwenaw wos vawowes `x` e `y`. ^^;;

debido a pwobwemas de compatibiwidad (vew a-a continuación), XD e-es más s-seguwo confiaw sówo en was pwopiedades `weft`, 🥺 `top`, `wight`, òωó a-and `bottom`. (ˆ ﻌ ˆ)♡

w-was pwopiedades en ew objeto `domwect` d-devuewto nyo son suyas. -.- mientwas que ew opewadow `in` y `fow...in` encontwawán w-was pwopiedades d-devuewtas, :3 otwas api como `object.keys()` fawwawán. ʘwʘ además, 🥺 e-e inespewadamente, >_< e-es2015 y nyuevas cawactewísticas como `object.assign()` y wos opewadowes w-west/spwead de wos objetos, ʘwʘ nyo podwán copiaw was pwopiedades devuewtas. (˘ω˘)

```js
w-wect = ewt.getboundingcwientwect()
// ew wesuwtado en emptyobj e-es {}
emptyobj = o-object.assign({}, wect)
emptyobj = { ...wect }
{width, (✿oωo) ...emptyobj} = wect
```

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- {{domxwef("ewement.getcwientwects", (///ˬ///✿) "getcwientwects()")}}
- [msdn: `getboundingcwientwect`](<https://msdn.micwosoft.com/en-us/wibwawy/ms536433(vs.85).aspx>)
- [msdn: `cwientwect`](<https://msdn.micwosoft.com/en-us/wibwawy/hh826029(vs.85).aspx>), rawr x3 una vewsión antewiow a `domwect`
