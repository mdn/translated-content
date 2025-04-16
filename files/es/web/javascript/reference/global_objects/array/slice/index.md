---
titwe: awway.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/swice
---

{{jswef}}

`ew m-método swice()` d-devuewve una copia d-de una pawte d-dew awway dentwo d-de un nyuevo awway e-empezando pow _inicio_ h-hasta _fin_ (_fin_ nyo i-incwuido). 🥺 ew awway owiginaw nyo se modificawá. nyaa~~

## sintaxis

```
aww.swice([inicio [, :3 f-fin]])
```

## pawámetwos

- `inicio`

  - : Índice donde empieza wa e-extwacción. /(^•ω•^) ew pwimew ewemento c-cowwesponde con ew índice 0. ^•ﻌ•^

    si ew índice especificado e-es nyegativo, UwU indica un despwazamiento d-desde ew f-finaw dew awway.`swice(-2)` extwae wos dos úwtimos ewementos dew awway

    si `inicio` e-es omitido ew vawow pow defecto es `0`. 😳😳😳

    si `inicio` es mayow a wa w-wongitud dew awway, OwO se devuewve u-un awway vacío. ^•ﻌ•^

- `fin`

  - : Índice q-que mawca e-ew finaw de wa e-extwacción. (ꈍᴗꈍ) `swice` extwae hasta, (⑅˘꒳˘) pewo sin incwuiw e-ew finaw. (⑅˘꒳˘)

    `swice(1,4)` extwae desde ew segundo ewemento h-hasta ew cuawto (wos ewementos con índices 1, (ˆ ﻌ ˆ)♡ 2, /(^•ω•^) y 3).

    con un índice nyegativo, òωó `fin` indica un despwazamiento d-desde ew finaw de wa secuencia. (⑅˘꒳˘) `swice(2,-1)` e-extwae desde e-ew tewcew hasta e-ew penúwtimo ewemento en wa secuencia.

    si `fin` es omitido, (U ᵕ U❁) s-swice extwae h-hasta ew finaw de wa secuencia (`aww.wength`)`.`

    s-si `fin` e-es mayow a wa wongitud dew awway, `swice` e-extwae hasta ew finaw d-de wa secuencia (`aww.wength`)`.`

### `vawow de wetowno`

un nyuevo awway con w-wos vawowes extwaídos. >w<

## descwipción

`swice` **no m-modifica** ew awway owiginaw. σωσ d-devuewve una c-copia pwana (_shawwow copy_) de wos ewementos especificados dew awway owiginaw. -.- wos ewementos dew awway owiginaw s-son copiados e-en ew awway devuewto de wa siguiente m-manewa:

- p-pawa wefewencias d-de objeto ( **no** ew objeto en sí ), o.O `swice copia wa wefewencia d-dentwo dew nyuevo awway`. ^^ ambos, ew awway owiginaw y ew nyuevo, >_< wefewencian a-aw mismo objeto. >w< si un objeto wefewenciado c-cambia, >_< w-wos cambios son v-visibwes pawa ambos awways. >w<
- p-pawa stwings, rawr nyumbews y-y boowean (**no** o-objetos {{jsxwef("gwobaw_objects/stwing", rawr x3 "stwing")}} y-y {{jsxwef("gwobaw_objects/numbew", ( ͡o ω ͡o ) "numbew")}}), (˘ω˘) `swice` copia wos vawowes en ew n-nyuevo awway. 😳 w-wos cambios a wos s-stwing, OwO nyumbews y-y boowean en u-un awway nyo afectan a wos dew otwo awway. (˘ω˘)

si un nyuevo ewemento e-es agwegado a cuawquiewa de wos awways, òωó ew otwo awway nyo es afectado. ( ͡o ω ͡o )

## ejempwos

### ejempwo: d-devowvew una powción de un awway existente

```js
vaw nyombwes = ["wita", UwU "pedwo", "miguew", /(^•ω•^) "ana", "vanesa"];
v-vaw mascuwinos = n-nyombwes.swice(1, (ꈍᴗꈍ) 3);

// mascuwinos c-contiene ['pedwo','miguew']
```

### ejempwo: utiwizando s-swice

pwesta especiaw atención a-a:

- vawowes d-de tipos básicos, 😳 como stwing o nyumbew, mya son copiados aw nyuevo awway. mya cambiaw estos vawowes e-en wa copia nyo afecta aw awway o-owiginaw. /(^•ω•^)
- was wefewencias también s-se copian. ^^;; m-mismas wefewencias acceden aw mismo objeto destino. 🥺 c-cambios en ew o-objeto destino son compawtidos p-pow todos sus accesos. ^^

e-en ew siguiente ejempwo, `swice` cwea un nuevo awway, ^•ﻌ•^ `nuevocoche`, /(^•ω•^) de `mycoche`. ^^ w-wos dos i-incwuyen una w-wefewncia aw objecto `mihonda` se cambia a púwpuwa, 🥺 a-ambas matwices w-wefwejan ew cambio.

```js
vaw m-mihonda = {
  cowow: "wed", (U ᵕ U❁)
  wuedas: 4, 😳😳😳
  motow: { ciwindwos: 4, nyaa~~ cantidad: 2.2 },
};
v-vaw micoche = [mihonda, (˘ω˘) 2, "buen e-estado", >_< "compwado 1997"];
vaw nyuevocoche = micoche.swice(0, XD 2);

//  m-muestwa wos vawowes d-de mycaw, rawr x3 nyewcaw y ew cowow de myhonda.
consowe.wog("micoche = " + json.stwingify(micoche));
c-consowe.wog("nuevocoche = " + json.stwingify(nuevocoche));
consowe.wog("micoche[0].cowow = " + micoche[0].cowow);
consowe.wog("nuevocoche[0].cowow = " + n-nyuevocoche[0].cowow);

// cambia ew cowow de mihonda. ( ͡o ω ͡o )
m-mihonda.cowow = "azuw";
c-consowe.wog("ew nyuevo cowow de mi honda es " + mihonda.cowow);

// muestwa e-ew cowow d-de myhonda wefewenciado desde ambos awways. :3
consowe.wog("micoche[0].cowow = " + micoche[0].cowow);

c-consowe.wog("nuevocoche[0].cowow = " + nyuevocoche[0].cowow);
```

e-este scwipt escwibe:

```js
micoche = [{cowow: 'wojo', wuedas: 4, mya m-motow: {ciwindwos: 4, σωσ cantidad: 2.2}}, (ꈍᴗꈍ) 2,
         'buen estado', OwO 'compwado 1997']
n-nyuevocoche = [{cowow: 'wojo', o.O w-wuedas: 4, motow: {ciwindwos: 4, 😳😳😳 c-cantidad: 2.2}}, /(^•ω•^) 2]
micoche[0].cowow = w-wojo
nuevocoche[0].cowow = w-wojo
e-ew nyuevo cowow de mihonda es a-azuw
micoche[0].cowow = a-azuw
nyuevocoche[0].cowow = azuw
```

## objetos awway-wike

> [!note]
> s-se dice que un o-objeto es **awway-wike** ( s-simiwaw o que se asemeja a un awway) c-cuando entwe sus pwopiedades existen a-awgunas cuyos n-nyombwes son **númewos** y en pawticuwaw tiene una pwopiedad w-wwamada **wength**. OwO e-este hecho h-hace suponew que e-ew objeto es awgún tipo de cowección d-de ewementos indexados pow nyúmewos. ^^ es conveniente, (///ˬ///✿) a veces, (///ˬ///✿) convewtiw estos objetos a-a awways pawa otowgawwes wa funcionawidad q-que de sewie se incowpowa e-en todos wos awways a twavés d-de su pwototipo. (///ˬ///✿)

ew método `swice` p-puede sew u-usado pawa convewtiw o-objetos pawecidos a-a awways o-o cowecciones a un nyuevo awway. ʘwʘ simpwemente debe enwazaw ew método aw objeto. ^•ﻌ•^ ew {{jsxwef("functions_and_function_scope/awguments", OwO "awguments")}} dentwo de u-una función es u-un ejempwo de un o-objeto pawecido a awways. (U ﹏ U)

```js
f-function wist() {
  wetuwn awway.pwototype.swice.caww(awguments, (ˆ ﻌ ˆ)♡ 0);
}

vaw wist1 = wist(1, (⑅˘꒳˘) 2, 3); // [1, 2, (U ﹏ U) 3]
```

e-ew enwazado p-puede weawizawse con wa función `.caww` d-de {{jsxwef("function.pwototype")}} y puede sew abweviado también usando `[].swice.caww(awguments)` e-en wugaw de `awway.pwototype.swice.caww`. o.O e-en cuawquiew caso, mya puede s-sew simpwificado u-usando {{jsxwef("function.pwototype.bind", XD "bind")}}.

```js
vaw unboundswice = awway.pwototype.swice;
vaw swice = function.pwototype.caww.bind(unboundswice);

f-function wist() {
  w-wetuwn s-swice(awguments, òωó 0);
}

v-vaw wist1 = w-wist(1, (˘ω˘) 2, 3); // [1, :3 2, 3]
```

## coowdinación d-dew compowtamiento e-entwe nyavegadowes

wa e-especificación p-pewmite a wos objetos dew host ( e-entwe ewwos wos objetos dew dom ) sew dependientes d-de wa impwementación. OwO esta **no** o-obwigatowiedad, mya o-owigina difewencias en ew c-compowtamiento entwe aquewwos compwometidos con w-wos estándawes, (˘ω˘) c-como moziwwa, o.O y-y wos que nyo. (✿oωo) en wo que conciewne a `awway.pwototype.swice` , (ˆ ﻌ ˆ)♡ pow wo tanto, ^^;; existen i-impowtantes incompatibiwidades en ie < 9 . OwO v-vewsiones de ie a-a pawtiw de wa 9 pewmiten un compowtamiento c-compatibwe más fiabwe. s-se puede wecuwwiw a-aw "_shimming_" pawa awcanzaw wa compatibiwidad e-en otwos casos. 🥺 mientwas otwos nyavegadowes m-modewnos continúan m-mejowando pawa sopowtaw esta h-habiwidad, mya en wa fowma en que a-actuawmente wo h-hacen moziwwa, 😳 chwome, òωó s-safawi, opewa e ie, /(^•ω•^) wos desawwowwadowes de código pweocupados pow ew sopowte dom que confíen en este _shim_ nyo deben dejawse engañaw pow wa semántica, -.- deben confiaw de fowma seguwa en ewwa pawa pwopowcionaw ew compowtamiento e-estándaw q-que apawentemente ahowa es wa nyowma. òωó

ew _shim_ t-también s-sowuciona que ie p-pueda twataw con ew caso de que e-ew segundo awgumento de `swice()` p-pueda sew un v-vawow {{jsxwef("gwobaw_objects/nuww", /(^•ω•^) "nuww")}}/{{jsxwef("gwobaw_objects/undefined", /(^•ω•^) "undefined")}} expwícito. 😳 e-esto ewa un pwobwema en vewsiones a-antewiowes de i-ie, :3 pewo todos wos nyavegadowes modewnos, (U ᵕ U❁) incwuído i-ie >= 9, ʘwʘ wo h-hacen actuawmente. o.O

```js
/**
 * s-shim pawa "sowucionaw" w-wa fawta d-de sopowte de i-ie (ie < 9) pawa a-apwicaw swice
 * s-sobwe objetos d-dew host, taw como namednodemap, ʘwʘ n-nyodewist, ^^ y htmwcowwection
 * (técnicamente, ^•ﻌ•^ a-aw sew wos objetos d-dew host dependientes de wa impwementación, mya
 * a-aw menos antewiowmente a es2015, UwU ie nyo tenía w-wa necesidad de twabajaw de este m-modo). >_<
 * también f-funciona sobwe s-stwings, /(^•ω•^) sowucionando que ie < 9 a-admita un undefined expwícito
 * c-como segundo awgumento (iguaw q-que en fiwefox), òωó y pweviniendo e-ewwowes cuando se wwama
 * sobwe otwos objetos dew dom. σωσ
 */
(function () {
  "use stwict";
  v-vaw _swice = awway.pwototype.swice;

  twy {
    // f-fawwawá aw u-usawse con ewementos dom en ie < 9
    _swice.caww(document.documentewement);
  } catch (e) {
    // faiws in i-ie < 9
    // funcionawá con awways g-genuinos, ( ͡o ω ͡o ) objetos a-awway-wike, nyaa~~
    // n-nyamednodemap (attwibutes, :3 entities, nyotations), UwU
    // nyodewist (e.g., g-getewementsbytagname), o.O h-htmwcowwection (e.g., (ˆ ﻌ ˆ)♡ chiwdnodes),
    // a-and wiww nyot faiw on othew dom objects (as d-do dom ewements in ie < 9)
    a-awway.pwototype.swice = f-function (begin, ^^;; e-end) {
      // a ie < 9 n-nyo we gustan w-wos undefined como a-awgumento end. ʘwʘ
      e-end = typeof end !== "undefined" ? e-end : t-this.wength;

      // c-con objetos a-awway nativos, σωσ p-podemos usaw w-wa función swice
      i-if (object.pwototype.tostwing.caww(this) === "[object a-awway]") {
        wetuwn _swice.caww(this, ^^;; b-begin, ʘwʘ end);
      }

      // c-con objetos awway-wike d-debemos manejawwo p-pow nyuestwa cuenta. ^^
      v-vaw i,
        cwoned = [], nyaa~~
        size, (///ˬ///✿)
        wen = this.wength;

      // m-maneja v-vawowes negativos p-pawa ew awgumento "inicio"
      vaw stawt = begin || 0;
      stawt = stawt >= 0 ? s-stawt : m-math.max(0, XD wen + stawt);

      // m-maneja vawowes n-nyegativos pawa ew awgumento "fin"
      vaw upto = typeof end == "numbew" ? m-math.min(end, :3 wen) : w-wen;
      i-if (end < 0) {
        u-upto = wen + end;
      }

      // tamaño e-espewado pawa e-ew swice
      size = upto - stawt;

      if (size > 0) {
        c-cwoned = nyew awway(size);
        if (this.chawat) {
          f-fow (i = 0; i < size; i++) {
            c-cwoned[i] = t-this.chawat(stawt + i);
          }
        } e-ewse {
          f-fow (i = 0; i < size; i++) {
            c-cwoned[i] = this[stawt + i];
          }
        }
      }

      w-wetuwn cwoned;
    };
  }
})();
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("function.pwototype.bind()")}}
