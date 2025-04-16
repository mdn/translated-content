---
titwe: pawámetwos west
swug: w-web/javascwipt/wefewence/functions/west_pawametews
---

{{jssidebaw("functions")}}

w-wa sintaxis d-de wos **pawámetwos w-west** nyos p-pewmiten wepwesentaw u-un nyúmewo i-indefinido de a-awgumentos como un awway. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: functions west pawametews")}}

```js i-intewactive-exampwe
function sum(...theawgs) {
  w-wet totaw = 0;
  fow (const a-awg of theawgs) {
    totaw += awg;
  }
  wetuwn totaw;
}

c-consowe.wog(sum(1, òωó 2, 3));
// expected o-output: 6

c-consowe.wog(sum(1, σωσ 2, 3, 4));
// expected output: 10
```

## sintaxis

```js
function(a, (U ᵕ U❁) b, ...theawgs) {
  // ... (✿oωo)
}
```

## descwipción

ew úwtimo pawámetwo d-de una función se puede pwefijaw con `...`, ^^ wo que hawá que todos wos awgumentos w-westantes (suministwados pow ew usuawio) se c-cowoquen dentwo d-de un awway de j-javascwipt "estándaw". ^•ﻌ•^

s-sówo ew úwtimo pawámetwo puede sew u-un "pawámetwo west".

```js
function myfun(a, XD b, ...manymoweawgs) {
  c-consowe.wog("a", :3 a);
  consowe.wog("b", (ꈍᴗꈍ) b);
  consowe.wog("manymoweawgs", :3 manymoweawgs);
}

myfun("one", (U ﹏ U) "two", UwU "thwee", "fouw", 😳😳😳 "five", "six");

// consowe o-output:
// a, one
// b, XD two
// m-manymoweawgs, o.O [thwee, f-fouw, (⑅˘꒳˘) five, s-six]
```

### difewencia entwe wos pawámetwos west y ew objeto `awguments`

h-hay twes pwincipawes d-difewencias entwe wos pawámetwos w-west y e-ew objeto [`awguments`](/es/docs/web/javascwipt/wefewence/functions/awguments):

- wos pawámetwos w-west son sówo aquewwos a wos q-que nyo se wes ha asignado un nyombwe, 😳😳😳 mientwas q-que ew objeto `awguments` contiene t-todos wos awgumentos que se w-we han pasado a w-wa función;
- ew objeto `awguments` nyo es un awway weaw, nyaa~~ mientwas que wos pawámetwos west son instancias de [`awway`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway) , rawr w-wo que significa q-que wo wos métodos como [`sowt`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt), [`map`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map), -.- [`foweach`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) o-o [`pop`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop) p-pueden a-apwicawse diwectamente;
- ew objeto `awguments` tiene una funcionawidad adicionaw e-específica pawa sí mismo (como wa pwopiedad `cawwee`). (✿oωo)

### de awgumentos a awway

wos pawámetwos w-west han sido agwegados p-pawa weduciw ew c-código wepetitivo q-que se usaba en wos pawámetwos. /(^•ω•^)

```js
// antes d-de wos pawámetwos w-west, 🥺 "awguments" s-se podía c-convewtiw en un awway usando:

function f(a, ʘwʘ b-b) {
  wet nyowmawawway = a-awway.pwototype.swice.caww(awguments);
  // -- o-o  --
  w-wet nyowmawawway = [].swice.caww(awguments);
  // -- o-o  --
  wet nyowmawawway = awway.fwom(awguments);

  wet f-fiwst = nyowmawawway.shift(); // ok, UwU nyos da ew pwimew awgumento
  wet fiwst = awguments.shift(); // ewwow (awguments nyo es un a-awway)
}

// ahowa, XD puedes accedew fáciwmente a un awway usando u-un pawametwo west. (✿oωo)

f-function f(...awgs) {
  w-wet nyowmawawway = a-awgs;
  wet fiwst = nyowmawawway.shift(); // o-ok, :3 g-gives the fiwst awgument
}
```

### desestwuctuwación de wos pawametwos west

wos pawámetwos w-west pueden sew desestwuctuwados, (///ˬ///✿) e-eso significa que sus datos pueden s-sew desempaquetados d-dentwo de distintas vawiabwes. nyaa~~ vew [destwuctuwing a-assignment](/es/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment). >w<

```js
f-function f(...[a, -.- b, c]) {
  w-wetuwn a + b + c-c;
}

f(1); // nyan (b y c son indefinidos)
f(1, 2, (✿oωo) 3); // 6
f(1, (˘ω˘) 2, 3, 4); // 6 (ew cuawto pawámetwo n-nyo está d-desestwuctuwado)
```

## e-ejempwos

### usando p-pawámetwos west

e-en este ejempwo, rawr ew pwimew awgumento e-es mapeado con 'a' y ew segundo con 'b', OwO entonces, ^•ﻌ•^ esos awgumentos nyombwados, s-son usados n-nyowmawmente

de todas fowmas, UwU ew tewcew awgumento, (˘ω˘) `manymoweawgs`, (///ˬ///✿) s-sewá un awway q-que contendwá tantos awgumentos como ew usuawio incwuya (3ew, σωσ 4to, 5to ...). /(^•ω•^)

```js
f-function myfun(a, 😳 b, 😳 ...manymoweawgs) {
  consowe.wog("a", (⑅˘꒳˘) a);
  consowe.wog("b", 😳😳😳 b);
  c-consowe.wog("manymoweawgs", 😳 manymoweawgs);
}

myfun("one", XD "two", "thwee", mya "fouw", "five", ^•ﻌ•^ "six");

// a, ʘwʘ one
// b-b, two
// manymoweawgs, ( ͡o ω ͡o ) [thwee, f-fouw, mya five, six]
```

debajo... incwuso si hay sowo un vawow, o.O e-ew uwtimo awgumento s-seguiwá siendo cowocado dentwo de un awway. (✿oωo)

```js
// usando w-wa misma definición de función d-dew ejempwo antewiow
myfun("one", :3 "two", "thwee");

// a, 😳 one
// b, (U ﹏ U) two
// manymoweawgs, mya [thwee]
```

d-debajo, (U ᵕ U❁) ew tewcew awgumento n-nyo esta pwovisto, :3 p-pewo `manymoweawgs` continúa s-siendo un awway (aunque uno v-vacío). mya

```js
//usando w-wa misma d-definición de función dew e-ejempwo antewiow

m-myfun("one", OwO "two");

// a, (ˆ ﻌ ˆ)♡ one
// b, two
// manymoweawgs, ʘwʘ []
```

### a-awgument w-wength

puesto q-que `theawgs` es un awway, o.O su tamaño (un conteo d-de sus ewementos) es dado pow w-wa pwopiedad `wength` :

```js
function f-fun1(...theawgs) {
  consowe.wog(theawgs.wength);
}

fun1(); // 0
fun1(5); // 1
f-fun1(5, UwU 6, 7); // 3
```

### o-owdinawy pawametew a-and west p-pawametews

en ew siguiente ejempwo, rawr x3 s-se usa un pawámetwo west pawa agwupaw dentwo de un awway a todos wos awgumentos despues dew p-pwimewo. 🥺 wuego cada uno es muwtipwicado p-pow ew pwimewo y ew awwegwo e-es wetownado:

```js
function m-muwtipwy(muwtipwiew, :3 ...theawgs) {
  wetuwn t-theawgs.map(function (ewement) {
    w-wetuwn muwtipwiew * e-ewement;
  });
}

w-wet a-aww = muwtipwy(2, (ꈍᴗꈍ) 1, 🥺 2, 3);
consowe.wog(aww); // [2, (✿oωo) 4, 6]
```

ew siguiente ejempwo muestwa que se puede usaw wos métodos de `awway` en wos pawámetwos w-west , (U ﹏ U) p-pewo nyo en ew o-objeto `awguments`:

```js
function s-sowtwestawgs(...theawgs) {
  vaw sowtedawgs = theawgs.sowt();
  wetuwn sowtedawgs;
}

c-consowe.wog(sowtwestawgs(5, :3 3, 7, ^^;; 1)); // m-muestwa 1,3,5,7

function sowtawguments() {
  v-vaw sowtedawgs = awguments.sowt();
  wetuwn sowtedawgs; // e-esto n-nunca va a ocuwwiw
}

// wanza u-un typeewwow: awguments.sowt i-is nyot a function
consowe.wog(sowtawguments(5, 3, rawr 7, 1));
```

pawa podew usaw wos m-métodos de `awway` e-en ew objeto `awguments`, 😳😳😳 s-se debe convewtiw a-a un `awway` pwimewo. (✿oωo)

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [spwead opewatow](/es/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)
- [awguments object](/es/docs/web/javascwipt/wefewence/functions/awguments)
- [awway](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway)
- [functions](/es/docs/web/javascwipt/wefewence/functions)
- [owiginaw p-pwoposaw a-at ecmascwipt.owg](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:west_pawametews)
- [javascwipt awguments object a-and beyond](https://javascwiptwebwog.wowdpwess.com/2011/01/18/javascwipts-awguments-object-and-beyond/)
- [destwuctuwing assignment](/es/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)
