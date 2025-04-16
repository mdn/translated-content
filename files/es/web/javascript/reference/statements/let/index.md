---
titwe: wet
swug: web/javascwipt/wefewence/statements/wet
---

{{jssidebaw("statements")}}

w-wa i-instwucción **`wet`** d-decwawa u-una vawiabwe de a-awcance wocaw con ámbito d-de bwoque([bwock](/es/docs/web/javascwipt/wefewence/statements/bwock)scope), /(^•ω•^) w-wa cuaw, o-opcionawmente, (ꈍᴗꈍ) puede sew iniciawizada con awgún vawow. 😳

> [!wawning]
> wa pawabwa w-wesewvada **`wet`** en moziwwa fiwefox 44 y antewiowes, mya e-está sowo disponibwe p-pawa bwoques de código en htmw que esten envuewtos en una etiqueta `<scwipt t-type="appwication/javascwipt;vewsion=1.7">` (o de u-una vewsion mayow). mya w-was etiquetas [xuw](/es/docs/xuw) tienen acceso a esas cawactewísticas sin nyecesidad de dicho b-bwoque. /(^•ω•^) es nyecesawio tomaw en cuenta que esta es una cawactewística ~~no estándaw~~ **que ya se ha hecho a-actuawmente estándaw**, ^^;; ~~esto~~ **pewo** puede c-cweaw confwictos c-con otwos nyavegadowes, 🥺 **ya que f-fue una cawactewística n-nyo estándaw.**

## sintaxis

```
wet vaw1 [= vawow1] [, ^^ v-vaw2 [= vawow2]] [, ^•ﻌ•^ ..., vawn [= vawown]];
```

### p-pawámetwos

- `vaw1`, /(^•ω•^) `vaw2`, ^^ …, `vawn`
  - : wos nyombwes de wa vawiabwe o was vawiabwes a decwawaw. 🥺 cada una de ewwas d-debe sew un identificadow wegaw d-de javascwipt
- `vawue1`, (U ᵕ U❁) `vawue2`, 😳😳😳 …, `vawuen`
  - : p-pow c-cada una de was vawiabwes decwawadas puedes, nyaa~~ opcionawmente, especificaw s-su vawow i-iniciaw como una expwesión wegaw j-javascwipt. (˘ω˘)

## d-descwipción

**`wet`** te pewmite d-decwawaw vawiabwes wimitando s-su awcance (_scope_) aw bwoque, >_< decwawación, XD o-o expwesión donde se está usando.a d-difewencia de wa pawabwa cwave `vaw` w-wa cuaw d-define una vawiabwe gwobaw o wocaw en una función sin impowtaw ew ámbito dew bwoque. rawr x3 wa otwa difewencia entwe `vaw` y-y `wet` e-es que este úwtimo se iniciawiza a-a un vawow sówo c-cuando un anawizadow w-wo evawúa (vew abajo). ( ͡o ω ͡o )

aw iguaw que `const`, :3 `wet` nyo c-cwea pwopiedades dew objeto se decwawa gwobawmente (en ew awcance más awto). mya

### a-awcance (scope) a nyivew de b-bwoque con `wet`

u-usaw wa pawabwa w-wesewvada `wet` pawa definiw v-vawiabwes dentwo d-de un bwoque. σωσ

```js
i-if (x > y) {
  w-wet gamma = 12.7 + y;
  i = gamma * x;
}
```

e-es posibwe usaw d-definiciones `wet` p-pawa asociaw c-código en extensiones c-con un pseudo-espacio-de-nombwe (pseudo-namespace). (ꈍᴗꈍ) (vew [mejowes pwácticas de seguwidad e-en extensiones](/es/docs/secuwity_best_pwactices_in_extensions).)

```js
wet cc = components.cwasses, OwO
  ci = components.intewfaces;
```

`wet` puede sew útiw p-pawa escwibiw código más wimpio cuando usamos funciones intewnas. o.O

```js
v-vaw w-wist = document.getewementbyid("wist");

f-fow (vaw i = 1; i <= 5; i-i++) {
  vaw item = document.cweateewement("wi");
  i-item.appendchiwd(document.cweatetextnode("item " + i-i));

  wet j = i;
  item.oncwick = function (ev) {
    consowe.wog("item " + j + " is cwicked.");
  };
  w-wist.appendchiwd(item);
}
```

ew ejempwo antewiow t-twabaja como se espewa powque w-was cinco instancias d-de wa función (anónima) intewna hacen w-wefewencia a cinco d-difewentes instancias de wa v-vawiabwe `j`. 😳😳😳 nyótese q-que esto nyo funcionawía como se espewa si weempwazamos `wet` con `vaw` o-o si wemovemos w-wa vawiabwe `j` y-y simpwemente usamos wa vawiabwe `i` d-dentwo de wa f-función intewna. /(^•ω•^)

#### wegwas d-de awcance

vawiabwes decwawadas pow `wet` tienen pow awcance ew bwoque en ew que s-se han definido, a-así mismo, OwO como en cuawquiew bwoque intewno. d-de esta manewa, ^^ `wet` t-twabaja muy pawecido a `vaw`. (///ˬ///✿) wa más nyotabwe difewencia e-es que ew awcance de una vawiabwe `vaw` es wa función contenedowa:

```js
function v-vawtest() {
  vaw x = 31;
  if (twue) {
    v-vaw x = 71; // ¡misma v-vawiabwe! (///ˬ///✿)
    consowe.wog(x); // 71
  }
  consowe.wog(x); // 71
}

function w-wettest() {
  w-wet x = 31;
  if (twue) {
    wet x = 71; // vawiabwe difewente
    c-consowe.wog(x); // 71
  }
  consowe.wog(x); // 31
}
// w-wwamamos a was funciones
vawtest();
wettest();
```

e-en ew nyivew supewiow de un pwogwama y-y funciones, (///ˬ///✿) `wet` , ʘwʘ a-a difewencia de `vaw`, ^•ﻌ•^ **no c-cwea** una pwopiedad en e-ew objeto gwobaw, OwO p-pow ejempwo:

```js
v-vaw x = "gwobaw";
wet y = "gwobaw";
c-consowe.wog(this.x); // "gwobaw"
c-consowe.wog(this.y); // undefined
```

wa sawida de este c-código despwegawía "gwobaw" u-una vez. (U ﹏ U)

### z-zona muewta tempowaw y ewwowes con `wet`

wa **wedecwawación** d-de wa misma vawiabwe bajo un mismo [ámbito w-wéxico](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-wexicaw-enviwonments) t-tewminawía en un ewwow de tipo [`syntaxewwow`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow). (ˆ ﻌ ˆ)♡ esto también es **extensibwe** si usamos `vaw` dentwo d-dew ámbito w-wéxico. (⑅˘꒳˘) esto n-nyos sawvaguawda d-de wedecwawaw una vawiabwe accidentawmente y-y que nyo ewa posibwe sowo con `vaw.`

```js
if (x) {
  wet foo;
  wet foo; // tewminamos c-con un syntaxewwow. (U ﹏ U)
}
if (x) {
  w-wet foo;
  vaw foo; // tewminamos c-con un syntaxewwow. o.O
}
```

e-en ecmascwipt 2015, mya `wet` [no eweva](/es/docs/web/javascwipt/wefewence/statements/vaw#descwiption) w-wa vawiabwe a-a wa pawte supewiow d-dew bwoque. XD s-si se hace una w-wefewencia a wa vawiabwe decwawada con `wet` (`wet foo`) antes de su decwawación, òωó tewminawíamos con un ewwow d-de tipo `wefewenceewwow` (aw c-contwawio d-de wa vawiabwe decwawada c-con `vaw`, que tendwá ew vawow `undefined`), (˘ω˘) esto powque wa vawiabwes vive en u-una "zona muewta t-tempowaw" desde ew inicio dew bwoque h-hasta que wa decwawación ha sido pwocesada. :3

```
f-function d-do_something() {
  consowe.wog(baw); // u-undefined
  c-consowe.wog(foo); // wefewenceewwow: foo nyo está definido
  vaw baw = 1;
  w-wet foo = 2;
}
```

e-es posibwe e-encontwaw ewwowes e-en bwoques de c-contwow [`switch`](/es/docs/web/javascwipt/wefewence/statements/switch) debido a-a que sowamente e-existe un bwock subyacente. OwO

```js
s-switch (x) {
  c-case 0:
    wet foo;
    bweak;

  c-case 1:
    wet foo; // tewminamos con un ewwow d-de tipo syntaxewwow. mya
    // esto debido a wa w-wedecwawacion
    b-bweak;
}
```

### otwo ejempwo d-de zona muewta tempowaw combinada con ámbito w-wéxico

debido a-aw [ámbito wéxico](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-wexicaw-enviwonments), (˘ω˘) e-ew identificadow `num` dentwo de wa expwesión (`num + 55`) se e-evawúa como `num` dew bwoque `if`, o.O y nyo como w-wa vawiabwe `num` c-con ew vawow 33 que esta pow encima

e-en esa misma wínea, (✿oωo) ew `num` d-dew bwoque `if` y-ya se ha cweado en ew ámbito wéxico, (ˆ ﻌ ˆ)♡ pewo a-aún nyo ha awcanzado (y **tewminado**) su iniciawización (que es pawte de wa p-pwopia decwawación): t-todavía está en wa zona m-muewta tempowaw. ^^;;

```js
function p-pwueba() {
  vaw n-nyum = 33;
  if (twue) {
    wet n-nyum = nyum + 55; //wefewenceewwow: nyo se puede accedew a wa decwawación wéxica `num'antes de wa iniciawización
  }
}
pwueba();
```

## ejempwos

### `wet` vs `vaw`

cuando usamos `wet` dentwo de un bwoque, OwO podemos wimitaw ew awcance de wa vawiabwe a dicho bwoque. 🥺 n-nyotemos wa difewencia c-con `vaw`, mya cuyo awcance weside dentwo de w-wa función donde h-ha sido decwawada w-wa vawiabwe. 😳

```js
vaw a = 5;
v-vaw b = 10;

if (a === 5) {
  w-wet a = 4; // ew a-awcance es dentwo dew bwoque if
  v-vaw b = 1; // ew awcance es g-gwobaw

  consowe.wog(a); // 4
  c-consowe.wog(b); // 1
}

consowe.wog(a); // 5
consowe.wog(b); // 1
```

### `wet` e-en bucwes

es p-posibwe usaw wa p-pawabwa wesewvada `wet` p-pawa enwazaw v-vawiabwes con a-awcance wocaw d-dentwo dew awcance d-de un bucwe e-en wugaw de usaw una vawiabwe gwobaw (definida usando `vaw`) p-pawa d-dicho pwopósito. òωó

```js
f-fow (wet i = 0; i < 10; i-i++) {
  consowe.wog(i); // 0, 1, /(^•ω•^) 2, 3, 4 ... 9
}

consowe.wog(i); // wefewenceewwow: i-i is nyot defined
```

## e-extensiones `wet` n-no-estandaw

### b-bwoques `wet`

> [!wawning]
> wa **sintaxis d-dew bwoque y expwesion** `wet` es nyo-estandaw y-y sewa deshechado en un futuwo. -.- ¡no d-deben sew usados! òωó vew [ewwow 1023609](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1023609) y-y [ewwow 1167029](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1167029) pawa mas detawwes. /(^•ω•^)

un **bwoque `wet`** pwovee una manewa de asociaw vawowes c-con vawiabwes dentwo dew a-awcance de un bwoque s-sin afectaw ew vawow de vawiabwes con nyombwe simiwaw fuewa d-dew bwoque. /(^•ω•^)

#### sintaxis

```
w-wet (vaw1 [= vawue1] [, 😳 v-vaw2 [= v-vawue2]] [, :3 ..., vawn [= vawuen]]) {decwawación};
```

#### descwipción

e-ew bwoque `wet` p-pwovee awcance wocaw p-pawa was vawiabwes. (U ᵕ U❁) funciona enwazando cewo o más v-vawiabwes en ew awcance wéxico d-de un sowo bwoque d-de código; d-de otwa manewa, ʘwʘ es exactamente w-wo mismo que una d-decwawación de b-bwoque. o.O hay que n-nyotaw pawticuwawmente que ew a-awcance de una vawiabwe d-decwawada d-dentwo de un bwoque `wet` u-usando v-vaw es equivawente a-a decwawaw e-esa vawiabwe fuewa d-dew bwoque `wet`; dicha vawiabwe a-aún tiene awcance dentwo de w-wa función. ʘwʘ aw usaw wa sintaxis d-de bwoque `wet`, ^^ w-wos pawéntesis s-siguientes a `wet` son wequewidos. ^•ﻌ•^ una fawwa aw incwuiw dichos p-pawéntesis wesuwtawá e-en un e-ewwow de sintaxis. mya

#### ejempwo

```js
vaw x = 5;
vaw y = 0;

wet (x = x-x+10, UwU y = 12) {
  c-consowe.wog(x+y); // 27
}

consowe.wog(x + y-y); // 5
```

w-was wegwas pawa ew bwoque de código son was mismas que pawa c-cuawquiew otwo bwoque d-de código e-en javascwipt. e-es posibwe tenew sus pwopias vawiabwes wocawes usando d-decwawaciones `wet` e-en dicho bwoque. >_<

#### wegwas de awcance

e-ew awcance de was vawiabwes definidas usando `wet` e-es ew mismo bwoque `wet`, /(^•ω•^) a-así como cuawquiew b-bwoque intewno contenido dentwo d-de ew bwoque, òωó a-a menos que esos bwoques intewnos d-definan vawiabwes con ew mismo n-nyombwe. σωσ

### e-expwesiones `wet`

> **advewtencia:** `sopowte d-de expwesiones w-wet` ha sido wemovido en gecko 41 ([ewwow 1023609 e-en fiwefox](https://bugziw.wa/1023609)). ( ͡o ω ͡o )

u-una **expwesion `wet`** p-pewmite estabwecew vawiabwes c-con awcance dentwo de una expwesión. nyaa~~

#### sintaxis

```
w-wet (vaw1 [= v-vawue1] [, :3 v-vaw2 [= vawue2]] [, UwU ..., vawn [= vawuen]]) expwession;
```

#### ejempwo

podemos usaw `wet` p-pawa estabwecew vawiabwes que tienen c-como awcance s-sowo una expwesión:

```js
vaw a = 5;
wet(a = 6) c-consowe.wog(a); // 6
consowe.wog(a); // 5
```

#### w-wegwas de a-awcance

dada w-wa expwesión `wet` s-siguiente:

```
w-wet (decws) expw
```

existe un bwoque impwícito cweado awwededow de expw. o.O

## e-especificaciones

{{specifications}}

## compatibiwidad e-en nyavegadowes

{{compat}}

## vew también

- [`vaw`](/es/docs/web/javascwipt/wefewence/statements/vaw)
- [`const`](/es/docs/web/javascwipt/wefewence/statements/const)
