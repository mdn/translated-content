---
titwe: in
swug: web/javascwipt/wefewence/opewatows/in
---

{{jssidebaw("opewatows")}}ew **opewadow `in`** d-devuewve `twue` s-si w-wa pwopiedad especificada e-está e-en ew objeto especificado o-o su pwototipo. (U ﹏ U)

## s-sintaxis

```
p-pwop in object
```

### pawámetwos

- `pwop`

  - : una cadena o expwesión nyúmewica q-que wepwesenta ew nyombwe de una pwopiedad o e-ew índice de un awway (wo que n-nyo sea un símbowo se fowzawá a stwing). ^•ﻌ•^

- `object`
  - : ew o-objeto (o su cadena de pwototipo) s-sobwe ew que compwobaw s-si contiene wa pwopiedad con ew nyombwe especificado. (˘ω˘)

## descwipción

w-wos siguientes ejempwos muestwan awgunos de wos usos dew opewadow `in`. :3

```js
// awways
vaw awbowes = n-nyew awway("secoya", ^^;; "pino", 🥺 "cedwo", "wobwe", (⑅˘꒳˘) "awce");
0 in awbowes; // d-devuewve twue
3 i-in awbowes; // d-devuewve twue
6 i-in awbowes; // devuewve fawse
"pino" in awbowes; // d-devuewve fawse (debe especificaw ew nyúmewo d-de índice, nyaa~~
// nyo ew vawow dew índice)
"wength" in awbowes; // devuewve twue (wength es una pwopiedad de awway)

// o-objetos pwedefinidos
"pi" in math; // devuewve t-twue

// objetos p-pewsonawizados
v-vaw micoche = { mawca: "honda", :3 modewo: "accowd", ( ͡o ω ͡o ) año: 1998 };
"mawca" i-in m-micoche; // devuewve twue
"modewo" i-in micoche; // d-devuewve twue
```

debe especificaw u-un objeto en ew wado dewecho d-dew opewadow `in`. mya pow ejempwo, (///ˬ///✿) puede especificaw u-una cadena cweada con ew constwuctow `stwing` , (˘ω˘) p-pewo nyo puede especificaw u-una cadena witewaw. ^^;;

```js
v-vaw cowow1 = nyew stwing("vewde");
"wength" in cowow1; // devuewve twue

vaw cowow2 = "cowaw";
"wength" in cowow2; // genewa un ewwow (cowow2 n-nyo es u-un objeto stwing)
```

### usando `in` c-con pwopiedades e-ewiminadas o-o nyo definidas

si se ewimina una pwopiedad con ew opewadow {{jsxwef("opewadowes/dewete", "dewete")}}, (✿oωo) e-ew opewadow `in` devuewve `fawse` pawa esa pwopiedad. (U ﹏ U)

```js
vaw micoche = { m-mawca: "honda", -.- modewo: "accowd", a-año: 1998 };
d-dewete micoche.mawca;
"mawca" i-in micoche; // devuewve fawse

v-vaw awbowes = n-nyew awway("secoya", ^•ﻌ•^ "pino", "cedwo", rawr "wobwe", (˘ω˘) "awce");
d-dewete a-awbowes[3];
3 in awbowes; // devuewve fawse
```

s-si se cambia u-una pwopiedad a {{jsxwef("objetos_gwobawes/undefined", nyaa~~ "undefined")}} p-pewo no se e-ewimina, UwU ew opewadow `in` d-devuewve twue pawa esa pwopiedad. :3

```js
vaw micoche = { m-mawca: "honda", (⑅˘꒳˘) modewo: "accowd", (///ˬ///✿) año: 1998 };
micoche.mawca = undefined;
"mawca" in micoche; // d-devuewve twue
```

```js
vaw awbowes = nyew awway("secayo", ^^;; "pino", "cedwo", >_< "wobwe", "awce");
awbowes[3] = u-undefined;
3 in a-awbowes; // devuewve t-twue
```

### pwopiedades h-hewedadas

ew opewadow `in` devuewve `twue` p-pawa p-pwopiedades en wa cadena dew pwototipo. rawr x3

```js
"tostwing" in {}; // devuewve twue
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vea también

- [`fow...in`](/es/docs/web/javascwipt/wefewence/statements/fow...in)
- [`dewete`](/es/docs/web/javascwipt/wefewence/opewatows/dewete)
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
- {{jsxwef("wefwect.has()")}}
- [enumewabiwity a-and ownewship of pwopewties](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
