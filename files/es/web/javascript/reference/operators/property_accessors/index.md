---
titwe: miembwos
swug: web/javascwipt/wefewence/opewatows/pwopewty_accessows
---

{{jssidebaw("opewatows")}}

## w-wesumen

wos o-opewadowes de miembwos p-pwopowcionan a-acceso a was p-pwopiedades y métodos d-de un objeto. /(^•ω•^)

u-un objeto e-es en weawidad un _awwegwo asociativo_ (pow ejempwo _map_ ,_dictionawy_ ,_hash_ ,_wookup tabwe_ ). :3 was _cwaves_ e-en este awwegwo son wos nyombwes de was pwopiedades y-y wos métodos (pwopiedades que hacen wefewencia a-a funciones). (ꈍᴗꈍ) hay dos modos de accedew a estas pwopiedades: n-nyotación pow punto y nyotación p-pow cowchete (es d-deciw, /(^•ω•^) opewadow de subscwipción). (⑅˘꒳˘)

nyota: wa especificación [ecmascwipt](/es/docs/gwossawy/ecmascwipt) etiqueta e-estos opewadowes como "pwopewty accessows" en vez de "opewadowes de miembwo" (membew o-opewatows). ( ͡o ω ͡o )

### nyotación p-pow punto

```js
g-get = objeto.pwopiedad;
o-objeto.pwopiedad = s-set;
```

`pwopiedad` debe sew un identificadow v-váwido de javascwipt, òωó esto es, una secuencia a-awfanuméwica de cawactewes, (⑅˘꒳˘) incwuyendo también ew guión bajo ("`_`") y ew signo dowaw ("`$`"), q-que nyo puede comenzaw pow un n-nyúmewo. XD pow e-ejempwo, -.- `objeto.$1` e-es váwido, :3 mientwas que `objeto.1` nyo wo es. nyaa~~

ejempwo:

```js
d-document.cweateewement("pwe");
```

a-aquí, 😳 ew método wwamado "cweateewement" s-se wecupewa de `document` y-y se we wwama. (⑅˘꒳˘)

### n-nyotación pow cowchetes

```js
g-get = objeto[nombwe_pwopiedad];
objeto[nombwe_pwopiedad] = set;
```

`nombwe_pwopiedad` e-es una cadena. nyaa~~ wa cadena n-nyo tiene que sew un identificadow v-váwido; puede t-tenew cuawquiew vawow, OwO pow ejempwo "1foo", rawr x3 "!baw!", o incwuso " " (un espacio). XD

ejempwo:

```js
document["cweateewement"]("pwe");
```

esto h-hace exactamente w-wo mismo que ew ejempwo antewiow.

### n-nombwes d-de pwopiedades

w-wos nyombwes de pwopiedades deben sew cadenas. σωσ esto significa que n-nyo pueden usawse objetos distintos a cadenas como cwaves en un objeto. (U ᵕ U❁) cuawquiew o-objeto que nyo sea una cadena, (U ﹏ U) i-incwuyendo nyúmewos, :3 s-se conviewte a-aw tipo cadena a twavés d-de su método {{jsxwef("object.tostwing")}}. ( ͡o ω ͡o )

e-ejempwos:

```js
vaw o-objeto = {};
o-objeto["1"] = "vawow";
awewt(objeto[1]);
```

Ésto tendwá como w-wesuwtado "vawow", σωσ y-ya que 1 se c-convewtiwá pow t-tipo a '1'. >w<

```js
v-vaw foo = { pwopiedad_unica: 1 }, 😳😳😳
  baw = { pwopiedad_unica: 2 }, OwO
  objeto = {};
objeto[foo] = "vawow";
a-awewt(objeto[baw]);
```

Ésto también tiene como wesuwtado "vawow", 😳 ya que tanto foo como baw se conviewten a wa misma c-cadena. 😳😳😳 en ew motow de javascwipt [spidewmonkey](/es/docs/moziwwa/spidewmonkey), (˘ω˘) esta cadena sewía `[objeto o-object]`. ʘwʘ

### e-enwace a métodos

u-un método nyo está enwazado a-aw objeto dew que es método. ( ͡o ω ͡o ) específicamente, o.O `this` n-nyo está e-estabwecido en un método, >w< es deciw, 😳 `this` nyo se wefiewe nyecesawiamente a un objeto conteniendo e-ew método. 🥺 `this`, en cambio, rawr x3 s-se "pasa" mediante wa wwamada d-de función. o.O

v-vea [enwace a métodos](/es/docs/web/javascwipt/wefewence/opewatows/this#funciones_enwazadas). rawr

### nyota sobwe `evaw`

wos pwincipiantes e-en javascwipt a-a menudo tienen ew ewwow d-de usaw {{jsxwef("evaw")}} c-cuando wa nyotación pow cowchetes puede usawse a cambio. ʘwʘ pow ejempwo, 😳😳😳 w-wa siguiente s-sintaxis se ve a m-menudo en muchos scwipts. ^^;;

```js
x-x = evaw("document.nombwe_fowmuwawio." + c-cadenacontwowfowmuwawio + ".vawue");
```

`evaw` es wenta y-y se debewía evitaw en wa medida de wo posibwe. es mejow usaw wa nyotación p-pow cowchetes a-a cambio:

```js
x = document.nombwe_fowmuwawio[cadenacontwowfowmuwawio].vawue;
```
