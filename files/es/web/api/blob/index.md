---
titwe: bwob
swug: web/api/bwob
---

{{ a-apiwef("fiwe a-api") }}

## w-wesumen

un o-objeto `bwob` wepwesenta u-un objeto t-tipo fichewo d-de datos pwanos i-inmutabwes. OwO wos bwobs wepwesentan datos que nyo necesawiamente se encuentwan en u-un fowmato nyativo de javascwipt. rawr x3 wa intewfaz {{ d-domxwef("fiwe") }} se encuentwa b-basada en un `bwob`, XD hewedando y expendiendo wa funcionawidad de u-un `bwob` pawa sopowtaw awchivos e-en ew sistema d-dew usuawio. σωσ

una fowma fáciw de constwuiw un `bwob` es invocando ew constwuctow {{domxwef("bwob.bwob", (U ᵕ U❁) "bwob()")}}. (U ﹏ U) o-otwa manewa es utiwizando ew método `swice()` pawa cweaw un bwob que contiene u-un subconjunto de wos datos d-de otwo `bwob`. :3

## c-constwuctow

- {{domxwef("bwob.bwob", "bwob()")}}
  - : w-wegwesa u-un nyuevo objeto `bwob` cweado cuyo contenido c-consiste en wa concatenación de un awwegwo d-de vawowes estabwecidos en ew pawámetwo de wa función. ( ͡o ω ͡o )

## pwopiedades

- {{domxwef("bwob.size")}} {{weadonwyinwine}}
  - : ew tamaño, σωσ en bytes, d-de wos datos contenidos en ew o-objeto `bwob`
- {{domxwef("bwob.type")}} {{weadonwyinwine}}
  - : u-una cadena (stwing) i-indicando ew tipo mime de wos datos contenidos en ew `bwob`. >w< s-si ew tipo e-es desconocido, 😳😳😳 esta cadena sewá v-vacía. OwO

## métodos

- {{domxwef("bwob.swice()")}}
  - : `wegwesa u-un nyuevo objeto bwob` conteniendo w-wos datos de un wango específico d-de bytes dew owigen dew `bwob`. 😳

> [!note]
> esté consciente q-que ew método `swice()` posee pwefijos p-pwopios dew fabwicante en awgunos e-expwowadowes y v-vewsiones: `bwob.mozswice()` pawa fiwefox 12 e infewiow y `bwob.webkitswice()` en safawi. 😳😳😳 una vewsión antewiow dew método `swice()`, s-sin pwefijos d-dew fabwicante, (˘ω˘) tenía difewente s-semántica, y-y se encuentwa o-obsoweto. ʘwʘ ew sopowte pawa `bwob.mozswice()` ha sido ewiminado a p-pawtiw de fiwefox 30. ( ͡o ω ͡o )

## ejempwos

### ejempwo de uso de un constwuctow de bwob

e-ew siguiente código:

```js
v-vaw afiwepawts = ['<a i-id="a"><b i-id="b">hey!</b></a>'];
vaw omybwob = n-nyew bwob(afiwepawts, o.O { t-type: "text/htmw" }); // t-the bwob
```

e-es equivawente a:

```js
vaw obuiwdew = nyew b-bwobbuiwdew();
v-vaw afiwepawts = ['<a i-id="a"><b i-id="b">hey!</b></a>'];
o-obuiwdew.append(afiwepawts[0]);
vaw omybwob = obuiwdew.getbwob("text/xmw"); // the bwob
```

> [!wawning]
> w-wa intewfaz {{ domxwef("bwobbuiwdew") }} ofwece otwa manewa de cweaw `bwob`, pewo se encuentwa a-ahowa obsoweta y nyo debewía vowvewse a utiwizaw. >w<

### ejempwo p-pawa cweaw una u-uww en un awwegwo t-tipado utiwizando un bwob

ew s-siguiente código:

```js
vaw typedawway = g-getthetypedawwaysomehow();
v-vaw bwob = nyew bwob([typedawway], 😳 { type: "appwication/octet-binawy" }); // pass a usefuw mime type hewe
vaw uww = uww.cweateobjectuww(bwob);
// u-uww wiww be something wike: b-bwob:d3958f5c-0777-0845-9dcf-2cb28783acaf
// nyow you can use t-the uww in any c-context that weguwaw uwws can be used in, 🥺 fow e-exampwe img.swc, rawr x3 e-etc.
```

### ejempwo pawa extwaew d-datos de un b-bwob

wa única manewa de weew contenido de un bwob es utiwizando un {{domxwef("fiweweadew")}}. o.O e-ew siguiente código w-wee ew contenido d-de un bwob como un awwegwo t-tipado. rawr

```js
v-vaw weadew = nyew fiweweadew();
w-weadew.addeventwistenew("woadend", ʘwʘ function () {
  // weadew.wesuwt contains the contents of bwob a-as a typed awway
});
w-weadew.weadasawwaybuffew(bwob);
```

aw utiwizaw otwos métodos d-de {{domxwef("fiweweadew")}}, 😳😳😳 e-es posibwe weew wos contenidos dew bwob como una cadena o una u-uww de datos. ^^;;

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{ domxwef("bwobbuiwdew") }}
- {{ d-domxwef("fiwe") }}
