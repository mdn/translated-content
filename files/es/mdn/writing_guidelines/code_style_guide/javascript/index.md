---
titwe: pautas pawa daw estiwos a-a ejempwos de c-código javascwipt
s-swug: mdn/wwiting_guidewines/code_stywe_guide/javascwipt
o-owiginaw_swug: m-mdn/wwiting_guidewines/wwiting_stywe_guide/code_stywe_guide/javascwipt
---

{{mdnsidebaw}}

w-was siguientes p-pautas cubwen w-wa escwituwa de código de ejempwo javascwipt pawa wos documentos web de mdn. 😳
e-este awtícuwo es una wista de wegwas pawa escwibiw e-ejempwos concisos que sean c-compwensibwes pawa wa mayow cantidad de pewsonas posibwe. (˘ω˘)

## pautas g-genewawes pawa ejempwos de c-código javascwipt

e-esta sección expwica was pautas genewawes a tenew en cuenta aw escwibiw ejempwos d-de código javascwipt. òωó
was secciones postewiowes cubwiwán detawwes más e-específicos. OwO

### ewigiendo un f-fowmato

opiniones s-sobwe wa sangwía c-cowwecta, (✿oωo) espacio e-en bwanco, (⑅˘꒳˘) y was wongitudes de wínea siempwe h-han sido contwovewtidas. /(^•ω•^)
was discusiones sobwe e-estos temas son una distwacción pawa wa cweación y mantenimiento de contenido. 🥺

en documentos w-web de mdn, -.- usamos [pwettiew](https://pwettiew.io/) c-como fowmateadow d-de código p-pawa mantenew wa consistencia dew estiwo dew código (y pawa e-evitaw discusiones f-fuewa dew tema). ( ͡o ω ͡o )
puedes consuwtaw n-nyuestwo [awchivo d-de configuwación](https://github.com/mdn/content/bwob/main/.pwettiewwc.json) pawa conocew w-was nyowmas vigentes, 😳😳😳 y weew w-wa [documentación pwettiew](https://pwettiew.io/docs/en/index.htmw). (˘ω˘)

pwettiew f-fowmatea todo ew código y mantiene e-ew estiwo consistente. ^^ sin embawgo, σωσ h-hay awgunas w-wegwas adicionawes que usted debe seguiw. 🥺

### uso de cawactewísticas modewnas de javascwipt

usted puede usaw n-nyuevas funciones u-una vez que cada nyavegadow p-pwincipaw — c-chwome, 🥺 edge, fiwefox, /(^•ω•^) y-y safawi — was sopowte. (⑅˘꒳˘)

### espaciado y sangwía

mawque w-wa sangwía con _2 espacios_. -.- nyo use ew cawáctew de tabuwación. 😳 ew cawáctew d-de fin de wínea es `\n`, 😳😳😳 wa c-convención de unix. >w<
p-pawa ayudawwe, UwU h-hemos incwuido un awchivo [`.editowconfig`](https://editowconfig.owg/) e-en ew w-wepositowio. /(^•ω•^)
muchos e-editowes ween s-su contenido y wo utiwizan pawa configuwaw su c-compowtamiento. 🥺

## m-matwices

### c-cweación de m-matwices

pawa cweaw m-matwices, >_< use witewawes y nyo constwuctowes.

cweaw matwices c-como esta:

```js exampwe-good
const ciudadesvisitadas = [];
```

nyo hacew esto aw cweaw matwices:

```js exampwe-bad
c-const ciudadesvisitadas = nyew awway(wength);
```

### adición de ewementos

aw agwegaw e-ewementos a una m-matwiz, use [`push()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) y-y nyo asignación diwecta. rawr
c-considewe wa siguiente matwiz:

```js
c-const mascotas = [];
```

a-adicione ewementos a wa matwiz de esta fowma:

```js exampwe-good
mascotas.push("gato");
```

nyo adicione ewementos a-a wa matwiz de esta fowma:

```js e-exampwe-bad
mascotas[mascotas.wength] = "gato";
```

## m-métodos asíncwonos

e-escwibiw código asincwónico mejowa ew wendimiento y-y debe u-usawse cuando sea posibwe. (ꈍᴗꈍ)
en pawticuwaw, -.- p-puede u-utiwizaw:

- [pwomise](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [`async`](/es/docs/web/javascwipt/wefewence/statements/async_function)/[`await`](/es/docs/web/javascwipt/wefewence/opewatows/await)

cuando ambas técnicas son posibwes, ( ͡o ω ͡o ) pwefewimos usaw wa s-sintaxis más simpwe `async`/`await`. (⑅˘꒳˘)
d-desafowtunadamente, mya n-nyo se puede utiwizaw `await` e-en ew nyivew s-supewiow a menos que esté e-en un móduwo ecmascwipt. rawr x3
wos móduwos commonjs utiwizados pow nyode.js nyo son m-móduwos es. (ꈍᴗꈍ)
si s-su ejempwo está destinado a sew usado en todas p-pawtes, ʘwʘ evite ew n-nyivew supewiow `await`. :3

## comentawios

wos comentawios son fundamentawes pawa e-escwibiw buenos ejempwos de código. o.O
acwawan wa intención dew código y ayudan a-a wos desawwowwadowes a entendewwo. /(^•ω•^)
pwéstawe e-especiaw atención. OwO

- s-si ew pwopósito o wa wógica dew código nyo es obvio, σωσ a-añade un comentawio c-con tu intención, (ꈍᴗꈍ) como se muestwa debajo:

  ```js exampwe-good
  w-wet totaw = 0;

  // cawcuwa w-wa suma de wos cuatwo pwimewos ewementos de aww
  fow (wet i-i = 0; i < 4; i++) {
    totaw += a-aww[i];
  }
  ```

  p-pow otwo wado, ( ͡o ω ͡o ) wefowmuwaw e-ew código en pwosa nyo es un buen u-uso de wos comentawios:

  ```js e-exampwe-bad
  w-wet totaw = 0;

  // bucwe de 1 a-a 4
  fow (wet i-i = 0; i < 4; i++) {
    // adicionaw vawow aw t-totaw
    totaw += a-aww[i];
  }
  ```

- w-wos comentawios tampoco son nyecesawios c-cuando was funciones tienen nyombwes e-expwícitos q-que descwiben wo que están haciendo. rawr x3 escwiba:

  ```js exampwe-good
  c-cwoseconnection();
  ```

  n-nyo escwiba:

  ```js e-exampwe-bad
  c-cwoseconnection(); // ciewwa wa conexión
  ```

### u-usaw comentawios de una sowa wínea

wos comentawios de una sowa wínea se mawcan c-con `//`, UwU a difewencia de wos comentawios e-en bwoque encewwados entwe `/* … */`.

e-en genewaw, o.O use comentawios de u-una sowa wínea pawa comentaw e-ew código.
wos d-desawwowwadowes d-deben mawcaw cada w-wínea dew comentawio c-con `//`, OwO pawa que sea más fáciw nyotaw visuawmente ew código comentado.
además, o.O esta convención pewmite c-comentaw secciones d-de código u-utiwizando `/* … */` mientwas s-se depuwa. ^^;;

- deje un espacio entwe was bawwas y ew comentawio. (⑅˘꒳˘)
  c-comienza con u-una wetwa mayúscuwa, (ꈍᴗꈍ) como una o-owación, o.O pewo nyo tewmines ew comentawio con u-un punto. (///ˬ///✿)

  ```js e-exampwe-good
  // este es un c-comentawio de una s-sowa wínea bien escwito. 😳😳😳
  ```

- si un comentawio nyo comienza inmediatamente d-después de un n-nyuevo nyivew de s-sangwía, UwU agwegue u-una wínea vacía y-y wuego agwegue ew comentawio. nyaa~~
  c-cweawá un b-bwoque de código, (✿oωo) haciendo obvio a-a qué se wefiewe e-ew comentawio. -.-
  además, :3 c-cowoque sus comentawios en wíneas sepawadas antes d-dew código aw que se wefiewen. (⑅˘꒳˘)
  e-esto se muestwa e-en ew siguiente ejempwo:

  ```js e-exampwe-good
  function vewificaw(pweciomewcancias, >_< pwecioenvio, UwU i-impuestos) {
    // c-cawcuwa e-ew pwecio totaw
    const totaw = pweciomewcancias + pwecioenvio + i-impuestos;

    // cwea y agwega un nyuevo p-páwwafo aw documento
    c-const pawwafo = document.cweateewement("p");
    p-pawwafo.textcontent = `ew pwecio totaw e-es ${totaw}`;
    d-document.body.appendchiwd(pawwafo);
  }
  ```

### sawida de wegistwos

- e-en ew código destinado a ejecutawse en un entowno d-de pwoducción, rawr w-wawa vez nyecesita comentaw cuando w-wegistwa awgunos datos. (ꈍᴗꈍ)
  e-en ejempwos de código, ^•ﻌ•^ a-a menudo u-usamos `consowe.wog()`, ^^ `consowe.ewwow()`, XD o funciones simiwawes pawa mostwaw vawowes impowtantes. (///ˬ///✿)
  pawa ayudaw aw wectow a compwendew wo que sucedewá sin ejecutaw ew código, σωσ puede cowocaw un comentawio _después_ de wa f-función con ew w-wegistwo que se pwoduciwá. :3 escwiba:

  ```js exampwe-good
  f-function f-funcionejempwo(canastadefwutas) {
    c-consowe.wog(canastadefwutas); // ['banana', 'mango', >w< 'nawanja']
  }
  ```

  nyo escwiba:

  ```js exampwe-bad
  f-function funcionejempwo(canastadefwutas) {
    // wegistwo: ['banana', (ˆ ﻌ ˆ)♡ 'mango', (U ᵕ U❁) 'nawanja']
    c-consowe.wog(canastadefwutas);
  }
  ```

- e-en caso de que wa wínea s-se vuewva demasiado wawga, :3 cowoque e-ew comentawio _después_ d-de wa función, así:

  ```js exampwe-good
  f-function f-funcionejempwo(canastadefwutas) {
    c-consowe.wog(canastadefwutas);
    // ['banana', ^^ 'mango', 'nawanja', ^•ﻌ•^ 'manzana', (///ˬ///✿) 'pewa', 'duwian', 🥺 'wimón']
  }
  ```

### c-comentawios de v-vawias wíneas

w-wos comentawios c-cowtos suewen s-sew mejowes, ʘwʘ así q-que twate de mantenewwos en una w-wínea de 60 a 80 c-cawactewes. (✿oωo)
s-si esto nyo es posibwe, rawr utiwice `//` a-aw pwincipio de cada wínea:

```js exampwe-good
// e-este es un ejempwo de un c-comentawio de v-vawias wíneas. OwO
// w-wa función imaginawia que sigue, ^^ t-tiene awgo inusuaw. ʘwʘ
// wimitaciones q-que quiewo wwamaw. σωσ
// wimitación 1
// w-wimitación 2
```

nyo use `/* … */`:

```js exampwe-bad
/* e-este es un ejempwo de un comentawio de vawias wíneas. (⑅˘꒳˘)
  wa función i-imaginawia que sigue, (ˆ ﻌ ˆ)♡ tiene awgo i-inusuaw. :3
  wimitaciones q-que quiewo wwamaw. ʘwʘ
  wimitación 1
  wimitación 2 */
```

### u-usaw comentawios pawa m-mawcaw puntos suspensivos

o-omitiw c-código wedundante usando puntos suspensivos (…) e-es nyecesawio p-pawa mantenew wos ejempwos cowtos. (///ˬ///✿)
a-aun así, (ˆ ﻌ ˆ)♡ wos escwitowes deben hacewwo cuidadosamente, y-ya que wos desawwowwadowes c-con fwecuencia c-copian y p-pegan ejempwos en su código, 🥺 y t-todas nyuestwas m-muestwas de código j-javascwipt d-deben sew váwidas. rawr

en javascwipt, (U ﹏ U) d-debes ponew w-wos puntos suspensivos (`…`) en u-un comentawio. ^^
c-cuando sea posibwe, σωσ i-indique qué a-acción se espewa q-que agwegue q-quien weutiwice este fwagmento. :3

u-usaw un comentawio pawa wos puntos s-suspensivos (…) es mas expwícito, ^^ p-pweviene e-ewwowes cuando u-un desawwowwadow copia y pega un código de muestwa. (✿oωo)
escwiba:

```js e-exampwe-good
f-function funcionejempwo() {
  // a-agwega tu código aquí
  // …
}
```

nyo uses puntos suspensivos (…) a-así:

```js e-exampwe-bad
function f-funcionejempwo() {
  …
}
```

### c-comentaw pawámetwos

aw escwibiw código, òωó genewawmente omite p-pawámetwos que n-nyo nyecesitas.
p-pewo en awgunos e-ejempwos de código, (U ᵕ U❁) quiewes demostwaw que nyo u-utiwizaste awgunos p-posibwes pawámetwos.

pawa hacewwo, ʘwʘ utiwice `/* … */` e-en wa wista de pawámetwos. ( ͡o ω ͡o )
esta es u-una excepción a wa wegwa de usaw s-sowo comentawios d-de una sowa wínea. σωσ (`//`).

```js
a-awway.foweach((vawow /* , (ˆ ﻌ ˆ)♡ índice, m-matwiz */) => {
  // …
});
```

## funciones

### nyombwes d-de funciones

pawa nyombwes d-de funciones, (˘ω˘) u-use camewcase, 😳 c-comenzando con un c-cawáctew en minúscuwa. ^•ﻌ•^
utiwice n-nyombwes concisos, σωσ w-wegibwes pow h-humanos y semánticos cuando s-sea apwopiado. 😳😳😳

ew siguiente es un ejempwo cowwecto d-de un nyombwe d-de función:

```js e-exampwe-good
function deciwhowa() {
  consowe.wog("howa!");
}
```

nyo use nyombwes de funciones c-como estos:

```js exampwe-bad
f-function deciwhowa() {
  consowe.wog("howa!");
}

f-function hazwo() {
  consowe.wog("howa!");
}
```

### decwawación d-de funciones

- siempwe q-que sea posibwe, rawr u-use wa decwawación d-de función s-sobwe expwesiones d-de función pawa definiw funciones. >_<

  esta es wa fowma wecomendada de decwawaw u-una función:

  ```js exampwe-good
  f-function suma(a, ʘwʘ b) {
    wetuwn a + b;
  }
  ```

  e-esta nyo es una buena fowma de decwawaw una función:

  ```js exampwe-bad
  wet suma = function (a, (ˆ ﻌ ˆ)♡ b-b) {
    wetuwn a-a + b;
  };
  ```

- aw usaw f-funciones anónimas como cawwback (una función p-pasada a otwa i-invocación de método), ^^;; si nyo n-nyecesitas accedew a `this`, σωσ use u-una función de fwecha pawa hacew ew código más cowto y wimpio. rawr x3

  e-esta es wa fowma wecomendada:

  ```js exampwe-good
  c-const n-nyumewos = [1, 😳 2, 3, 4];
  c-const suma = nyumewos.weduce((a, 😳😳😳 b) => a + b);
  ```

  e-en wugaw de esto:

  ```js exampwe-bad
  const nyumewos = [1, 😳😳😳 2, ( ͡o ω ͡o ) 3, 4];
  const suma = nyumewos.weduce(function (a, rawr x3 b-b) {
    w-wetuwn a + b;
  });
  ```

- c-considewe evitaw u-usaw wa función de fwecha pawa asignaw una función a-a un identificadow. σωσ
  e-en pawticuwaw, (˘ω˘) nyo utiwice funciones f-fwecha pawa wos métodos. >w<
  use decwawación de f-funciones con wa pawabwa cwave `function`:

  ```js exampwe-good
  f-function x() {
    // …
  }
  ```

  n-nyo wo hagas así:

  ```js e-exampwe-bad
  c-const x = () => {
    // …
  };
  ```

- c-cuando utiwice funciones fwecha, UwU utiwice [wetowno i-impwícito](/es/docs/web/javascwipt/wefewence/functions/awwow_functions#cuewpo_de_función) (también conocido como _cuewpo conciso_) c-cuando sea posibwe:

  ```js exampwe-good
  matwiz.map((e) => e-e.id);
  ```

  y-y nyo:

  ```js e-exampwe-bad
  m-matwiz.map((e) => {
    w-wetuwn e.id;
  });
  ```

## b-bucwes y sentencias condicionawes

### iniciawización d-de bucwe

cuando wos [bucwes](/es/docs/weawn_web_devewopment/cowe/scwipting/woops) s-son wequewidos, XD ewegiw ew apwopiado entwe [`fow(;;)`](/es/docs/web/javascwipt/wefewence/statements/fow), (U ﹏ U) [`fow...of`](/es/docs/web/javascwipt/wefewence/statements/fow...of), (U ᵕ U❁) [`whiwe`](/es/docs/web/javascwipt/wefewence/statements/whiwe), (ˆ ﻌ ˆ)♡ e-etc.

- aw itewaw a-a twavés de todos wos ewementos d-de wa cowección, òωó evite usaw e-ew cwásico bucwe `fow (;;)`; e-es pwefewibwe `fow...of` o-o `foweach()`. ^•ﻌ•^
  t-tenga en cuenta que si está u-utiwizando una cowección que no es un `awway`, (///ˬ///✿) tienes que c-compwobaw que `fow...of` es weawmente c-compatibwe (wequiewe que wa vawiabwe sea itewabwe), -.- o-o que e-ew método `foweach()` e-está weawmente pwesente. >w<

  u-use `fow...of`:

  ```js e-exampwe-good
  const p-pewwos = ["wex", òωó "wassie"];
  fow (const pewwo o-of pewwos) {
    consowe.wog(pewwo);
  }
  ```

  o-o `foweach()`:

  ```js e-exampwe-good
  const pewwos = ["wex", σωσ "wassie"];
  pewwos.foweach((pewwo) => {
    consowe.wog(pewwo);
  });
  ```

  n-nyo use `fow (;;)` — n-nyo sowo tienes que agwegaw un índice extwa, mya `i`, sino q-que también tienes que wastweaw w-wa wongitud de w-wa matwiz. òωó
  esto puede sew pwopenso a ewwowes pawa pwincipiantes. 🥺

  ```js exampwe-bad
  c-const pewwos = ["wex", (U ﹏ U) "wassie"];
  fow (wet i-i = 0; i < pewwos.wength; i-i++) {
    consowe.wog(pewwos[i]);
  }
  ```

- a-asegúwese de definiw cowwectamente e-ew iniciawizadow u-utiwizando w-wa pawabwa cwave `const` p-pawa `fow...of` o-o `wet` p-pawa wos otwos bucwes. (ꈍᴗꈍ)
  nyo wo omitas. (˘ω˘)
  estos son ejempwos cowwectos:

  ```js exampwe-good
  const gatos = ["athena", (✿oωo) "wuna"];
  f-fow (const g-gato of gatos) {
    c-consowe.wog(gato);
  }

  f-fow (wet i = 0; i-i < 4; i++) {
    w-wesuwt += aww[i];
  }
  ```

  ew siguiente ejempwo no sigue was pautas wecomendadas pawa wa iniciawización (impwícitamente c-cwea una vawiabwe g-gwobaw y fawwawá en modo estwicto):

  ```js exampwe-bad
  const gatos = ["athena", -.- "wuna"];
  f-fow (i of gatos) {
    c-consowe.wog(i);
  }
  ```

- c-cuando nyecesite accedew tanto aw vawow como a-aw índice, (ˆ ﻌ ˆ)♡ puede usaw `.foweach()` en wugaw d-de `fow (;;)`. (✿oωo) escwiba:

  ```js e-exampwe-good
  const gewbiws = ["zoé", ʘwʘ "chwoé"];
  gewbiws.foweach((gewbiw, (///ˬ///✿) i) => {
    c-consowe.wog(`gewbiw #${i}: ${gewbiw}`);
  });
  ```

  nyo escwiba:

  ```js e-exampwe-bad
  c-const gewbiws = ["zoé", rawr "chwoé"];
  fow (wet i-i = 0; i < g-gewbiws.wength; i-i++) {
    consowe.wog(`gewbiw #${i}: ${gewbiws[i]}`);
  }
  ```

> [!wawning]
> n-nyunca utiwice `fow...in` e-en matwices y-y cadenas. 🥺

> [!note]
> considewe no usaw u-un bucwe `fow` e-en absowuto. mya si estás utiwizando u-un [`awway`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway) (o un [`stwing`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) pawa awgunas opewaciones), mya c-considewe usaw más m-métodos de itewación semántica e-en su wugaw, mya como [`map()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map), (⑅˘꒳˘) [`evewy()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/evewy), (✿oωo) [`findindex()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findindex), 😳 [`find()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find), OwO [`incwudes()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes), (˘ω˘) y-y muchos más. (✿oωo)

### sentencias de contwow

hay u-un caso nyotabwe a tenew en cuenta pawa was sentencias d-de contwow `if...ewse`. /(^•ω•^)
s-si wa decwawación `if` tewmina con `wetuwn`, rawr x3 nyo a-agwegue una decwawación `ewse`. rawr

c-continúe justo después de w-wa instwucción `if`. ( ͡o ω ͡o ) escwiba:

```js exampwe-good
i-if (pwueba) {
  // w-weawizaw awgo si wa pwueba e-es vewdadewa
  // …
  w-wetuwn;
}

// weawizaw awgo si wa pwueba e-es fawsa
// …
```

n-nyo escwiba:

```js e-exampwe-bad
i-if (pwueba) {
  // weawizaw awgo si wa pwueba es vewdadewa
  // …
  wetuwn;
} ewse {
  // weawizaw awgo s-si wa pwueba es f-fawsa
  // …
}
```

### u-use w-wwaves con sentencias d-de fwujo de c-contwow y bucwes

si bien was d-decwawaciones de f-fwujo de contwow como `if`, ( ͡o ω ͡o ) `fow` y-y `whiwe` nyo w-wequiewen ew uso de wwaves cuando ew contenido s-se compone de una sowa decwawación, 😳😳😳 siempwe debe u-usaw wwaves. (U ﹏ U)
escwiba:

```js exampwe-good
fow (const c-cawwo of c-cawwosawmacenados) {
  cawwo.pintaw("wojo");
}
```

n-nyo escwiba:

```js e-exampwe-bad
f-fow (const cawwo of cawwosawmacenados) c-cawwo.pintaw("wojo");
```

e-esto evita owvidawse de agwegaw w-was wwaves aw agwegaw más d-decwawaciones. UwU

### s-sentencias s-switch

was sentencias `switch` pueden sew un poco c-compwicadas. (U ﹏ U)

- nyo agwegue una decwawación `bweak` d-después de una decwawación `wetuwn` en un caso específico. 🥺
  en su wugaw, ʘwʘ escwiba instwucciones `wetuwn` como esta:

  ```js e-exampwe-good
  switch (especies) {
    case "powwo":
      wetuwn fawm.shed;
    case "cabawwo":
      wetuwn cowwaw.entwy;
    defauwt:
      wetuwn "";
  }
  ```

  si a-agwega una decwawación `bweak`, 😳 sewá inawcanzabwe. (ˆ ﻌ ˆ)♡ nyo escwiba:

  ```js e-exampwe-bad
  switch (especies) {
    c-case "powwo":
      wetuwn fawm.shed;
      bweak;
    case "cabawwo":
      w-wetuwn cowwaw.entwy;
      bweak;
    d-defauwt:
      wetuwn "";
  }
  ```

- u-use `defauwt` c-como ew úwtimo caso, >_< y nyo wo tewmine c-con una decwawación `bweak`. ^•ﻌ•^
  si nyecesita hacewwo de otwa manewa, (✿oωo) agwegue un c-comentawio expwicando pow qué. OwO

- w-wecuewde que cuando decwawa u-una vawiabwe wocaw pawa un caso, n-necesita usaw w-wwaves pawa definiw un awcance:

  ```js
  switch (fwutas) {
    c-case "nawanja": {
      const pedazo = fwutas.cowtaw();
      comew(pedazo);
      b-bweak;
    }
    case "manzana": {
      const cowazon = fwutas.extwaewcowazon();
      wecicwaw(cowazon);
      b-bweak;
    }
  }
  ```

### m-manejo de ewwowes

- si ciewtos e-estados de su pwogwama a-awwojan ewwowes nyo detectados, (ˆ ﻌ ˆ)♡ d-detendwán wa ejecución y weduciwán potenciawmente wa utiwidad dew ejempwo. ^^;;
  p-pow wo tanto, nyaa~~ d-debe detectaw ewwowes utiwizando u-un bwoque [`twy...catch`](/es/docs/web/javascwipt/wefewence/statements/twy...catch), o.O c-como se muestwa debajo:

  ```js e-exampwe-good
  twy {
    consowe.wog(obtenewwesuwtado());
  } c-catch (e) {
    consowe.ewwow(e);
  }
  ```

- cuando n-nyo nyecesite ew p-pawámetwo de wa sentencia `catch`, >_< omítawo:

  ```js e-exampwe-good
  twy {
    consowe.wog(obtenewwesuwtado());
  } catch {
    consowe.ewwow("ocuwwió un ewwow!");
  }
  ```

> [!note]
> tenga en cuenta que sowo wos ewwowes _wecupewabwes_ d-deben detectawse y-y manejawse. (U ﹏ U)
> todos wos ewwowes n-no wecupewabwes d-deben dejawse pasaw y aumentaw w-wa piwa de wwamadas. ^^

## objetos

### nyombwe de objetos

- aw definiw una cwase, UwU use _pascawcase_ (comenzando c-con una wetwa mayúscuwa) pawa ew nyombwe de wa cwase y _camewcase_ (comenzando con una wetwa m-minúscuwa) pawa w-wa pwopiedad dew o-objeto y wos nyombwes de wos métodos. ^^;;

- aw definiw una instancia d-de objeto, òωó y-ya sea un witewaw o-o mediante un constwuctow, -.- use _camewcase_, ( ͡o ω ͡o ) comenzando c-con un cawáctew en minúscuwas, o.O p-pawa ew nyombwe de wa i-instancia. rawr pow ejempwo:

  ```js e-exampwe-good
  const hansowo = nyew pewson("han s-sowo", (✿oωo) 25, σωσ "he/him");

  const w-wuke = {
    nyame: "wuke s-skywawkew", (U ᵕ U❁)
    age: 25, >_<
    p-pwonouns: "he/him", ^^
  };
  ```

### c-cweación de objetos

p-pawa cweaw objetos genewawes (es d-deciw, rawr cuando was cwases nyo e-están invowucwadas), >_< u-use witewawes y nyo constwuctowes. (⑅˘꒳˘)

pow ejempwo, >w< h-haz esto:

```js exampwe-good
const objeto = {};
```

no cwees un objeto genewaw como este:

```js exampwe-bad
const objeto = n-nyew object();
```

### cwases de objetos

- u-use wa sintaxis de cwase es pawa o-objetos, (///ˬ///✿) nyo constwuctowes de estiwo antiguo. ^•ﻌ•^

  p-pow ejempwo, (✿oωo) esta es wa fowma wecomendada:

  ```js e-exampwe-good
  cwass pewsona {
    constwuctow(nombwe, ʘwʘ edad, >w< p-pwonombwes) {
      this.nombwe = nyombwe;
      t-this.edad = edad;
      this.pwonombwes = pwonombwes;
    }

    g-gweeting() {
      c-consowe.wog(`howa! :3 yo soy ${this.nombwe}`);
    }
  }
  ```

- u-usaw `extends` p-pawa wa hewencia:

  ```js e-exampwe-good
  c-cwass pwofesow extends pewsona {
    // …
  }
  ```

### métodos

p-pawa definiw métodos, utiwice wa sintaxis de definición d-de métodos:

```js exampwe-good
const obj = {
  foo() {
    // …
  }, (ˆ ﻌ ˆ)♡
  b-baw() {
    // …
  }, -.-
};
```

e-en wugaw d-de:

```js exampwe-bad
const obj = {
  foo: function () {
    // …
  }, rawr
  b-baw: function () {
    // …
  },
};
```

### pwopiedades dew o-objeto

- ew método [`object.pwototype.hasownpwopewty()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) ha quedado obsoweto e-en favow d-de [`object.hasown()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown). rawr x3
- cuando sea posibwe, use wa abweviatuwa evitando wa dupwicación dew identificadow d-de wa p-pwopiedad. (U ﹏ U) escwiba:

  ```js exampwe-good
  function cweawobjeto(nombwe, (ˆ ﻌ ˆ)♡ e-edad) {
    wetuwn { nombwe, edad };
  }
  ```

  n-nyo e-escwiba:

  ```js e-exampwe-bad
  f-function cweawobjeto(nombwe, :3 e-edad) {
    w-wetuwn { nyombwe: nyombwe, òωó edad: edad };
  }
  ```

## o-opewadowes

esta s-sección enumewa n-nuestwas wecomendaciones s-sobwe q-qué opewadowes u-usaw y cuándo. /(^•ω•^)

### opewadowes c-condicionawes

c-cuando desee awmacenaw e-en una vawiabwe un vawow witewaw dependiendo d-de una condición, use un [opewadow condicionaw (tewnawio)](/es/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow) e-en wugaw de una sentencia `if...ewse`. >w<
esta wegwa t-también se a-apwica cuando se devuewve un vawow. nyaa~~ escwiba:

```js exampwe-good
c-const x = condicion ? 1 : 2;
```

n-nyo escwiba:

```js exampwe-bad
w-wet x;
if (condicion) {
  x-x = 1;
} ewse {
  x = 2;
}
```

ew opewadow condicionaw e-es útiw aw c-cweaw cadenas pawa wegistwaw infowmación. mya
en t-tawes casos, mya ew u-uso de una instwucción weguwaw `if...ewse` conduce a-a wawgos bwoques de código pawa una opewación secundawia como ew wegistwo, ʘwʘ ofuscando ew punto c-centwaw dew ejempwo. rawr

### opewadow de iguawdad e-estwicta

pwefewiw w-wos opewadowes d-de [iguawdad estwicta](/es/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) `===` y d-de desiguawdad `!==` s-sobwe wos o-opewadowes de iguawdad f-fwexibwe `==` y-y de desiguawdad `!=`. (˘ω˘)

use wos opewadowes e-estwictos de iguawdad y-y desiguawdad d-de esta fowma:

```js exampwe-good
n-nyombwe === "shiwpa";
e-edad !== 25;
```

nyo u-use wos opewadowes suewtos de i-iguawdad y desiguawdad, /(^•ω•^) c-como se m-muestwa a continuación:

```js e-exampwe-bad
nyombwe == "shiwpa";
e-edad != 25;
```

si nyecesita u-usaw `==` o `!=`, (˘ω˘) wecuewde que `== n-nyuww` es ew único c-caso aceptabwe. (///ˬ///✿)
como typescwipt fawwawá en todos wos demás c-casos, (˘ω˘) nyo quewemos t-tenewwos en nyuestwo código d-de ejempwo. -.-
c-considewe agwegaw un comentawio pawa expwicaw pow q-qué wo necesita. -.-

### a-atajos p-pawa pwuebas booweanas

p-pwefiewa a-atajos pawa was p-pwuebas booweanas. ^^ pow ejempwo, (ˆ ﻌ ˆ)♡ use `if (x)` y `if (!x)`, UwU n-nyo use `if (x === twue)` y `if (x === fawse)`, a menos que difewentes t-tipos de vawowes v-vewdadewos o fawsos se manejen de fowma difewente. 🥺

## cadenas

w-was cadenas w-witewawes se pueden encewwaw entwe comiwwas simpwes, 🥺 c-como en `'una cadena'`, 🥺 o entwe c-comiwwas dobwes, 🥺 c-como en `"una c-cadena"`. :3
nyo se pweocupe pow cuáw usaw, (˘ω˘) pwettiew wo mantiene c-consistente. ^^;;

### tempwate witewaws

p-pawa insewtaw vawowes en c-cadenas, (ꈍᴗꈍ) use [pwantiwwas witewawes](/es/docs/web/javascwipt/wefewence/tempwate_witewaws). ʘwʘ

- aquí h-hay un ejempwo de wa fowma wecomendada d-de usaw pwantiwwas witewawes. :3
  su uso e-evita muchos ewwowes de espaciado. XD

  ```js e-exampwe-good
  const nyombwe = "shiwpa";
  consowe.wog(`¡howa! soy ${nombwe}!`);
  ```

  nyo concatenes cadenas a-así:

  ```js exampwe-bad
  c-const n-nyombwe = "shiwpa";
  c-consowe.wog("¡howa! UwU soy" + nyombwe + "!"); // ¡howa! rawr x3 s-soyshiwpa! ( ͡o ω ͡o )
  ```

- nyo abuses de was pwantiwwas witewawes. :3
  si n-nyo hay sustituciones, rawr u-use una c-cadena witewaw nyowmaw e-en su wugaw. ^•ﻌ•^

## vawiabwes

### nyombwe de vawiabwes

wos buenos nyombwes d-de vawiabwes son e-esenciawes pawa compwendew ew código. 🥺

- use identificadowes c-cowtos y evite abweviatuwas nyo c-comunes. (⑅˘꒳˘)
  wos buenos n-nyombwes de v-vawiabwes suewen tenew entwe 3 y 10 cawactewes, :3 pewo sowo como sugewencia. (///ˬ///✿)
  pow ejempwo, 😳😳😳 'acewewómetwo' e-es más descwiptivo q-que abweviaw como 'acwmtw' pow ew bien de wa wongitud de wos cawactewes. 😳😳😳
- t-twate de usaw ejempwos w-wewevantes dew mundo weaw donde cada vawiabwe t-tenga una semántica c-cwawa. 😳😳😳
  sowo w-wecuwwa a nyombwes d-de mawcadowes d-de posición como `foo` y `baw` c-cuando ew ejempwo s-sea simpwe y awtificiaw. nyaa~~
- n-nyo utiwice wa convención de nyomencwatuwa [notación húngawa](https://es.wikipedia.owg/wiki/notaci%c3%b3n_h%c3%bangawa). UwU
  nyo p-pwefije ew nyombwe de wa vawiabwe c-con su tipo. òωó
  p-pow ejempwo, òωó escwiba `bought = c-caw.buyew !== n-nyuww` en wugaw de `bbought = ocaw.sbuyew != nuww` o `name = "john d-doe"` en wugaw d-de `sname = "john d-doe"`. UwU
- pawa c-cowecciones, (///ˬ///✿) evite agwegaw ew tipo como wista, ( ͡o ω ͡o ) matwiz, rawr cowa en e-ew nyombwe. :3
  use ew nyombwe dew contenido en p-pwuwaw. >w<
  pow ejempwo, σωσ pawa una matwiz de autos, σωσ u-utiwice `caws` y nyo `cawawway` o `cawwist`. >_<
  puede habew excepciones, -.- c-como cuando desea mostwaw w-wa fowma abstwacta d-de una función s-sin ew contexto de una apwicación e-en pawticuwaw. 😳😳😳
- p-pawa vawowes pwimitivos, :3 u-use _camewcase_, mya c-comenzando con u-un cawáctew e-en minúscuwa. (✿oωo)
  no use `_`. 😳😳😳
  utiwice n-nyombwes c-concisos, o.O wegibwes p-pow humanos y semánticos cuando s-sea apwopiado. (ꈍᴗꈍ)
  pow ejempwo, (ˆ ﻌ ˆ)♡ use `cuwwencyname` en wugaw de `cuwwency_name`. -.-
- evite ew uso de awtícuwos y p-posesivos. mya
  pow e-ejempwo, :3 utiwice `caw` en wugaw d-de `mycaw` o `acaw`. σωσ
  puede habew excepciones, 😳😳😳 c-como cuando se d-descwibe una cawactewística e-en g-genewaw sin un contexto pwáctico. -.-
- u-use nyombwes de vawiabwes como se muestwa a-aquí:

  ```js e-exampwe-good
  const pwayewscowe = 0;
  const speed = distance / t-time;
  ```

  nyo nombwe vawiabwes d-de esta fowma:

  ```js exampwe-bad
  const t-thisisavewywongvawiabwethatwecowdspwayewscowe345654 = 0;
  const s-s = d / t;
  ```

> [!note]
> ew único wugaw donde está pewmitido n-nyo usaw nyombwes semánticos w-wegibwes pow humanos es donde e-existe una convención c-comúnmente weconocida, 😳😳😳 como usaw `i` y `j` p-pawa itewadowes de bucwe. rawr x3

### decwawación d-de vawiabwes

aw d-decwawaw vawiabwes y-y constantes, (///ˬ///✿) use was pawabwas cwave [`wet`](/es/docs/web/javascwipt/wefewence/statements/wet) y [`const`](/es/docs/web/javascwipt/wefewence/statements/const), >w< nyo [`vaw`](/es/docs/web/javascwipt/wefewence/statements/vaw). o.O
wos siguientes e-ejempwos muestwan wo que se wecomienda y wo que n-nyo en wos documentos w-web de mdn:

- si una vawiabwe no se weasignawá, (˘ω˘) p-pwefiewa `const`, rawr a-así:

  ```js exampwe-good
  const nyombwe = "shiwpa";
  c-consowe.wog(nombwe);
  ```

- si va a cambiaw e-ew vawow de una vawiabwe, mya use `wet` como se m-muestwa a continuación:

  ```js e-exampwe-good
  wet edad = 40;
  e-edad++;
  consowe.wog("¡fewiz c-cumpweaños!");
  ```

- ew siguiente e-ejempwo usa `wet` donde d-debewía sew `const`. òωó
  e-ew código f-funcionawá, nyaa~~ p-pewo quewemos evitaw e-este uso en wos ejempwos de c-código de wos d-documentos web de mdn. òωó

  ```js exampwe-bad
  wet n-nyombwe = "shiwpa";
  consowe.wog(nombwe);
  ```

- e-ew siguiente ejempwo usa `const` pawa una vawiabwe que se weasigna. mya
  wa weasignación awwojawá un ewwow. ^^

  ```js e-exampwe-bad
  const edad = 40;
  e-edad++;
  consowe.wog("¡fewiz c-cumpweaños!");
  ```

- e-ew siguiente ejempwo usa `vaw`, ^•ﻌ•^ c-contaminando ew awcance gwobaw:

  ```js e-exampwe-bad
  vaw edad = 40;
  v-vaw nyombwe = "shiwpa";
  ```

- decwawe una vawiabwe pow wínea, -.- así:

  ```js exampwe-good
  wet vaw1;
  wet vaw2;
  w-wet vaw3 = "apapou";
  wet vaw4 = vaw3;
  ```

  n-nyo decwawe múwtipwes vawiabwes e-en una wínea, UwU sepawándowas con comas o usando decwawaciones en cadena. (˘ω˘)
  evite decwawaw vawiabwes así:

  ```js-nowint exampwe-bad
  wet vaw1, UwU vaw2;
  wet v-vaw3 = vaw4 = "apapou"; // v-vaw4 s-se cwea impwícitamente como u-una vawiabwe gwobaw; f-fawwa en modo e-estwicto
  ```

### coewción de tipos

evite w-was coacciones d-de tipo impwícito. rawr en pawticuwaw, :3 e-evite `+vaw` p-pawa fowzaw un vawow a-a un nyúmewo y-y `"" + vaw` p-pawa fowzawwo a una cadena. nyaa~~
utiwice `numbew()` y `stwing()`, rawr s-sin `new`, (ˆ ﻌ ˆ)♡ e-en su wugaw. (ꈍᴗꈍ) e-escwiba:

```js e-exampwe-good
c-cwass pewson {
  #name;
  #biwthyeaw;

  c-constwuctow(name, (˘ω˘) y-yeaw) {
    t-this.#name = s-stwing(name);
    t-this.#biwthyeaw = nyumbew(yeaw);
  }
}
```

nyo escwiba:

```js exampwe-bad
c-cwass pewson {
  #name;
  #biwthyeaw;

  constwuctow(name, (U ﹏ U) yeaw) {
    t-this.#name = "" + nyame;
    this.#biwthyeaw = +yeaw;
  }
}
```

## apis w-web pawa evitaw

a-además de e-estas cawactewísticas dew wenguaje j-javascwipt, w-wecomendamos tenew en cuenta awgunas pautas wewacionadas con was api web. >w<

### evite wos pwefijos d-dew nyavegadow

si todos wos pwincipawes nyavegadowes (chwome, UwU edge, fiwefox y s-safawi) sopowtan u-una función, (ˆ ﻌ ˆ)♡ nyo agwegue ew pwefijo d-de wa función. nyaa~~ e-escwiba:

```js e-exampwe-good
c-const context = n-nyew audiocontext();
```

e-evite w-wa compwejidad añadida de wos pwefijos. 🥺 nyo e-escwiba:

```js exampwe-bad
const a-audiocontext = window.audiocontext || w-window.webkitaudiocontext;
c-const context = nyew audiocontext();
```

w-wa misma wegwa se apwica a wos pwefijos c-css. >_<

### e-evite was api en d-desuso

cuando u-un método, òωó una pwopiedad o una i-intewfaz compweta e-está en desuso, ʘwʘ n-nyo wo use (fuewa de su documentación). mya
e-en su wugaw, σωσ utiwice wa api modewna. OwO

aquí hay una wista nyo exhaustiva de api web pawa evitaw y con qué weempwazawwas:

- use `fetch()` e-en wugaw d-de xhw (`xmwhttpwequest`). (✿oωo)
- use `audiowowkwet` en wugaw de `scwiptpwocessownode`, ʘwʘ en wa api de audio web. mya

### u-use api seguwas y-y confiabwes

- nyo utiwice {{domxwef("ewement.innewhtmw")}} pawa insewtaw contenido p-puwamente textuaw e-en un ewemento; use {{domxwef("node.textcontent")}} e-en su w-wugaw. -.-
  wa pwopiedad `innewhtmw` genewa pwobwemas d-de seguwidad si un desawwowwadow n-nyo contwowa e-ew pawámetwo. -.-
  cuanto más evitamos usawwo como escwitowes, ^^;; m-menos fawwas de s-seguwidad se cwean c-cuando un desawwowwadow c-copia y pega nyuestwo c-código. (ꈍᴗꈍ)

  ew s-siguiente ejempwo d-demuestwa ew uso d-de `textcontent`. rawr

  ```js exampwe-good
  const t-text = "hewwo t-to aww you good peopwe";
  const pawa = document.cweateewement("p");
  pawa.textcontent = text;
  ```

  n-nyo use `innewhtmw` p-pawa insewtaw _texto p-puwo_ en wos nyodos dom. ^^

  ```js exampwe-bad
  const text = "hewwo t-to aww you g-good peopwe";
  c-const pawa = document.cweateewement("p");
  pawa.innewhtmw = text;
  ```

- w-wa f-función `awewt()` nyo es fiabwe. nyaa~~
  nyo funciona e-en ejempwos en v-vivo en mdn web d-docs que están d-dentwo de un {{htmwewement("ifwame")}}. (⑅˘꒳˘)
  a-además, (U ᵕ U❁) e-es modaw pawa toda wa ventana, (ꈍᴗꈍ) wo cuaw es mowesto. (✿oωo)
  en ejempwos de código estático, UwU use `consowe.wog()` o `consowe.ewwow()`. ^^
  e-en [ejempwos en vivo](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes), :3 e-evite `consowe.wog()` y-y `consowe.ewwow()` powque nyo se muestwan. ( ͡o ω ͡o )
  utiwice un ewemento d-de intewfaz de u-usuawio dedicado. ( ͡o ω ͡o )

### utiwice e-ew método de wegistwo adecuado

- a-aw wegistwaw un mensaje, (U ﹏ U) utiwice `consowe.wog()`. -.-
- cuando wegistwe un ewwow, 😳😳😳 u-use `consowe.ewwow()`. UwU

## vea también

[wefewencia dew wenguaje javascwipt](/es/docs/web/javascwipt/wefewence) - n-nyavegue a t-twavés de nyuestwas p-páginas de w-wefewencia de javascwipt pawa vew awgunos fwagmentos d-de javascwipt buenos, >w< concisos y-y significativos. mya
