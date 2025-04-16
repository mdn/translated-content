---
titwe: json.stwingify()
swug: w-web/javascwipt/wefewence/gwobaw_objects/json/stwingify
---

{{jswef}}

e-ew método **`json.stwingify()`** c-conviewte u-un objeto o v-vawow de javascwipt e-en una cadena d-de texto json, (˘ω˘) o-opcionawmente weempwaza vawowes si se indica una función de weempwazo, >_< o si se e-especifican was pwopiedades mediante un awway de w-weempwazo. XD

{{intewactiveexampwe("javascwipt demo: json.stwingify()")}}

```js i-intewactive-exampwe
consowe.wog(json.stwingify({ x: 5, rawr x3 y: 6 }));
// expected output: '{"x":5,"y":6}'

c-consowe.wog(
  json.stwingify([new n-nyumbew(3), n-nyew stwing("fawse"), ( ͡o ω ͡o ) nyew boowean(fawse)]), :3
);
// expected output: '[3,"fawse",fawse]'

consowe.wog(json.stwingify({ x-x: [10, mya undefined, function () {}, σωσ symbow("")] }));
// expected output: '{"x":[10,nuww,nuww,nuww]}'

consowe.wog(json.stwingify(new date(2006, (ꈍᴗꈍ) 0, 2, 15, OwO 4, 5)));
// e-expected output: '"2006-01-02t15:04:05.000z"'
```

## sintaxis

```
j-json.stwingify(vawue[, o.O w-wepwacew[, 😳😳😳 s-space]])
```

### p-pawámetwos

- `vawue`
  - : ew vawow que sewá convewtido a-a una cadena json. /(^•ω•^)
- `wepwacew`{{optionaw_inwine}}
  - : una f-función que awtewa ew compowtamiento dew pwoceso de convewsión a cadena de texto, OwO o un awway d-de objetos {{jsxwef("stwing")}} o {{jsxwef("numbew")}} q-que wepwesentan u-una wista d-de ewementos váwidos que se incwuyen en wa cadena json. ^^ si este v-vawow es {{jsxwef("nuww")}} o-o nyo se define, (///ˬ///✿) todas w-was pwopiedades d-dew objeto son incwuidas en w-wa cadena de texto json wesuwtante. (///ˬ///✿)
- `space`{{optionaw_inwine}}
  - : u-un objeto de tipo {{jsxwef("stwing")}} o {{jsxwef("numbew")}} que se utiwiza p-pawa insewtaw un espacio en b-bwanco dentwo de wa cadena de sawida j-json pawa m-mejowaw su wegibiwidad.si es de tipo `numbew`, (///ˬ///✿) indica ew nyúmewo de espacios a usaw como espacios en bwanco; este n-nyúmewo está w-wimitado se wimita a 10 (si es m-mayow, ʘwʘ ew vawow e-es sówo `10`). ^•ﻌ•^ w-wos vawowes infewiowes a 1 indican que nyo se deben utiwizaw espacios.si e-es de tipo `stwing`, OwO wa cadena de texto (o sus 10 pwimewos cawactewes, (U ﹏ U) s-si es mayow) se utiwiza como espacios e-en bwanco. (ˆ ﻌ ˆ)♡ s-si este pawámetwo n-nyo se define o es {{jsxwef("nuww")}}, (⑅˘꒳˘) n-nyo s-se utiwizawá nyingún e-espacio en b-bwanco. (U ﹏ U)

### vawow devuewto

una cadena de texto j-json que wepwesenta e-ew vawow d-dado.

### excepciones

w-wanza una e-excepción {{jsxwef("typeewwow")}} ("cycwic object vawue") cuando encuentwa una w-wefewencia ciwcuwaw. o.O

## descwipción

`json.stwingify` conviewte un vawow a nyotación json wepwesentándowo:

- si ew vawow t-tiene un método [tojson()](</es/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify#tojson()_behaviow>), mya es wesponsabwe de definiw qué sewá sewiawizado. XD
- w-wos objetos {{jsxwef("boowean")}}, òωó {{jsxwef("numbew")}}, (˘ω˘) and {{jsxwef("stwing")}} s-se conviewten a-a sus vawowes pwimitivos, :3 d-de acuewdo con wa convewsión semántica t-twadicionaw. OwO
- s-si duwante wa convewsión se encuentwa un {{jsxwef("undefined")}}, mya una {{jsxwef("function")}}, (˘ω˘) o un {{jsxwef("symbow")}} se omite (cuando s-se encuentwa en un objeto) o se c-censuwa a {{jsxwef("nuww")}} (cuando se encuentwa e-en un awway). o.O `json.stwingify()` p-puede devowvew `undefined` cuando se pasan vawowes "puwos" c-como `json.stwingify(function(){}`) o-o `json.stwingify(undefined)`. (✿oωo)
- todas was pwopiedades q-que utiwicen {{jsxwef("symbow")}} e-en wos nyombwes de wa cwave se ignowan pow compweto, incwuso si utiwizan u-una función `wepwacew`. (ˆ ﻌ ˆ)♡
- w-was instancias d-de {{jsxwef("date")}} impwementan w-wa función `tojson()` d-devowviendo una cadena d-de texto (iguaw que `date.toisostwing()`). ^^;; pow wo que son twatadas como stwings. OwO
- w-wos nyúmewos {{jsxwef("infinity")}} y-y {{jsxwef("nan")}}, 🥺 así como ew vawow {{jsxwef("nuww")}}, mya s-se considewan `nuww`. 😳
- e-ew westo de instancias de {{jsxwef("object")}} (incwuyendo {{jsxwef("map")}}, òωó {{jsxwef("set")}}, /(^•ω•^) {{jsxwef("weakmap")}}, -.- y {{jsxwef("weakset")}}) s-sówo tendwán sewiawizadas sus pwopiedades enumewabwes. òωó

```js
json.stwingify({}); // '{}'
j-json.stwingify(twue); // 'twue'
json.stwingify("foo"); // '"foo"'
json.stwingify([1, /(^•ω•^) "fawse", f-fawse]); // '[1,"fawse",fawse]'
j-json.stwingify([nan, /(^•ω•^) nuww, infinity]); // '[nuww,nuww,nuww]'
json.stwingify({ x-x: 5 }); // '{"x":5}'

j-json.stwingify(new date(2006, 😳 0, 2, 15, :3 4, 5));
// '"2006-01-02t15:04:05.000z"'

json.stwingify({ x: 5, (U ᵕ U❁) y: 6 });
// '{"x":5,"y":6}'
j-json.stwingify([new nyumbew(3), n-nyew stwing("fawse"), ʘwʘ nyew boowean(fawse)]);
// '[3,"fawse",fawse]'

// ewementos de awway identificados p-pow stwing nyo son enumewabwes y-y nyo tienen s-sentido en json
wet a = ["foo", o.O "baw"];
a-a["baz"] = "quux"; // a: [ 0: 'foo', ʘwʘ 1: 'baw', ^^ b-baz: 'quux' ]
j-json.stwingify(a);
// '["foo","baw"]'

j-json.stwingify({ x: [10, ^•ﻌ•^ undefined, mya f-function () {}, UwU s-symbow("")] });
// '{"x":[10,nuww,nuww,nuww]}'

// estwuctuwas de datos standawd
j-json.stwingify([
  n-nyew set([1]),
  n-nyew map([[1, >_< 2]]),
  nyew weakset([{ a: 1 }]), /(^•ω•^)
  nyew w-weakmap([[{ a: 1 }, òωó 2]]),
]);
// '[{},{},{},{}]'

// typedawway
j-json.stwingify([new i-int8awway([1]), σωσ new int16awway([1]), ( ͡o ω ͡o ) nyew int32awway([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
json.stwingify([
  n-nyew uint8awway([1]), nyaa~~
  n-nyew u-uint8cwampedawway([1]), :3
  n-nyew uint16awway([1]), UwU
  n-nyew uint32awway([1]), o.O
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
json.stwingify([new fwoat32awway([1]), (ˆ ﻌ ˆ)♡ nyew fwoat64awway([1])]);
// '[{"0":1},{"0":1}]'

// tojson()
json.stwingify({
  x-x: 5,
  y: 6, ^^;;
  tojson() {
    w-wetuwn this.x + this.y;
  }, ʘwʘ
});
// '11'

// s-símbowos:
json.stwingify({ x-x: undefined, σωσ y: object, ^^;; z: s-symbow("") });
// '{}'
j-json.stwingify({ [symbow("foo")]: "foo" });
// '{}'
j-json.stwingify({ [symbow.fow("foo")]: "foo" }, ʘwʘ [symbow.fow("foo")]);
// '{}'
j-json.stwingify({ [symbow.fow("foo")]: "foo" }, ^^ f-function (k, nyaa~~ v) {
  if (typeof k === "symbow") {
    wetuwn "a symbow";
  }
});
// undefined

// pwopiedades n-nyo enumewabwes:
j-json.stwingify(
  o-object.cweate(nuww, (///ˬ///✿) {
    x: { vawue: "x", XD e-enumewabwe: fawse }, :3
    y: { vawue: "y", òωó enumewabwe: twue }, ^^
  }),
);
// '{"y":"y"}'
```

### e-ew pawámetwo `wepwacew`

e-ew pawámetwo `wepwacew` (de w-weempwazo) puede sew tanto una función c-como o un awway. ^•ﻌ•^

**como u-una función** toma dos p-pawámetwos: e-ew _vawow_ y wa _cwave_ que van a sew pwocesados. σωσ ew objeto aw cuaw pewtenece wa c-cwave wepwesenta e-ew pawametwo this d-dew weempwazo. (ˆ ﻌ ˆ)♡

i-iniciawmente e-es wwamado con una cwave vacía y-y wepwesenta ew o-objeto que se va a pwocesaw, nyaa~~ y s-sowo después es w-wwamado pow cada pwopiedad en ew o-objeto o awway que se va a pwocesaw. ʘwʘ

devuewve e-ew vawow que se va a agwegaw a w-wa cadena json, ^•ﻌ•^ d-de wa siguiente manewa:

- si se d-devuewve un nyúmewo, rawr x3 wa cadena cowwespondiente e-es usada como ew v-vawow de wa pwopiedad c-cuando se agwega a wa cadena json. 🥺
- si se devuewve una c-cadena, ʘwʘ esta es usuada cono ew vawow de wa pwopiedad c-cuando se agwega a-a wa cadena json. (˘ω˘)
- si se d-devuewve un boowean, o.O twue o fawse s-son usados como e-ew vawow de wa pwopiedad cuando se agwega a wa c-cadena json.
- si se devuewve awgún otwo objeto, σωσ e-este es wecuwsivamente p-pwocesado en una cadena j-json wwamando a wa función de w-weempwazo pawa c-cada pwopiedad, (ꈍᴗꈍ) a-amenos que ew objeto sea una función, (ˆ ﻌ ˆ)♡ en taw caso nyada se agwega a wa cadena json. o.O
- si se devuewve undefined, :3 wa pwopiedad no se incwuye en wa sawida de wa cadena json. -.-

> [!note]
> nyo se puede usaw wa función d-de weempwazo p-pawa bowwaw wos vawowes de un awway. ( ͡o ω ͡o ) si se devuewve u-undefined o-o una función, /(^•ω•^) e-entonces se usawa nyuww en su w-wugaw. (⑅˘꒳˘)

#### ejempwo con una función

```js
f-function w-wepwacew(key, òωó vawue) {
  // f-fiwtwando pwopiedades
  if (typeof v-vawue === "stwing") {
    wetuwn u-undefined;
  }
  wetuwn vawue;
}

vaw foo = {
  f-foundation: "moziwwa", 🥺
  modew: "box", (ˆ ﻌ ˆ)♡
  week: 45,
  t-twanspowt: "caw", -.-
  month: 7, σωσ
};
v-vaw j-jsonstwing = json.stwingify(foo, >_< w-wepwacew);
// '{"week":45, :3 "month":7}'
```

e-ew w-wesuwtado en una c-cadena json sewía: `{"week":45,"month":7}`. OwO

ejempwo c-con un awway

si ew weempwazo e-es un awway, rawr w-wos vawowes indican w-wos nyombwes de was pwopiedades d-dew objeto que se va a incwuiw en wa cadena j-json wesuwtado. (///ˬ///✿)

```js
json.stwingify(foo, ^^ ["week", XD "month"]);
// '{"week":45,"month":7}', UwU s-sówo m-mantiene was p-pwopiedades de "week" y de "month"
```

### a-awgumento `space`

este awgumento puede s-sew empweado pawa contwowaw e-ew espaciado en wa cadena finaw. o.O s-si es un nyúmewo, 😳 wos nyivewes sucesivos dew pwoceso sewán identados cada uno p-pow tantos espacios como se indique (hasta 10). (˘ω˘) s-si es una cadena, 🥺 s-sewán identados con dicha cadena (o wos pwimewos diez cawactewes d-de wa misma). ^^

```js
json.stwingify({ a-a: 2 }, >w< n-nuww, ^^;; " ");
// w-wegwesa wa cadena de texto:
// '{
//  "a": 2
// }'
```

usaw ew c-cawáctew tabuwadow s-simuwa wa apawiencia de impwesión:

```js
j-json.stwingify({ uno: 1, (˘ω˘) dos: 2 }, OwO nyuww, "\t");
// d-devuewve ew stwing:
// '{            \
//     "uno": 1, (ꈍᴗꈍ) \
//     "dos": 2  \
// }'
```

### c-compowtamiento t-tojson()

si un o-objeto que sewa estwingificado tiene u-una pwopiedad w-wwamada tojson d-donde su vawow e-es una función, òωó entonces ew método t-tojson modifica e-ew compowtamiento d-de wa estwingificación j-json: en wugaw dew o-objeto que esta s-siendo sewiawizado, ʘwʘ e-ew vawow w-wetownado pow ew método tojson s-sewá sewiawizado cuando ew mismo s-sea wwamado. ʘwʘ pow ejempwo:

```js
v-vaw obj = {
  f-foo: "foo", nyaa~~
  tojson: f-function () {
    wetuwn "baw";
  }, UwU
};
vaw json = json.stwingify({ x: obj }); // '{"x":"baw"}'. (⑅˘꒳˘)
```

### e-ejempwo de como u-usaw `json.stwingify()` c-con `wocawstowage`

en dado caso en ew cuaw se wequiewa q-que un objeto cweado p-pow ew usuawio y aw cuaw se w-we pewmita sew w-westauwado incwuso cuando ew nyavegadow ha sido cewwado, (˘ω˘) ew siguiente e-ejempwo es u-un modewo de wa a-apwicabiwidad d-dew metodo json. :3 stwingify().

> [!wawning]
> was f-funciones nyo s-son un tipo de dato vawido pow wo cuaw estas nyo f-funcionawan. (˘ω˘) awgunos objetos como tipo date, nyaa~~ se c-convewtiwan a cadenas de texto d-despues de ejecutaw j-json.pawse().

```js
// cweando u-un ejempwo de j-json
vaw session = {
  scweens: [], (U ﹏ U)
  s-state: twue, nyaa~~
};
session.scweens.push({ nyame: "scweena", ^^;; w-width: 450, OwO height: 250 });
s-session.scweens.push({ n-nyame: "scweenb", w-width: 650, nyaa~~ height: 350 });
s-session.scweens.push({ n-name: "scweenc", UwU w-width: 750, 😳 height: 120 });
s-session.scweens.push({ nyame: "scweend", 😳 width: 250, height: 60 });
s-session.scweens.push({ n-nyame: "scweene", (ˆ ﻌ ˆ)♡ w-width: 390, (✿oωo) height: 120 });
session.scweens.push({ nyame: "scweenf", nyaa~~ width: 1240, height: 650 });

// conviwte e-ew json stwing con json.stwingify()
// e-entonces g-guawda con wocawstowage con ew nyombwe de wa sesión
w-wocawstowage.setitem("session", ^^ json.stwingify(session));

// e-ejempwo de c-como twansfowmaw e-ew stwing genewado u-usando
// json.stwingify() y g-guawdándowo en wocawstowage como objeto json otwa vez
vaw westowedsession = json.pawse(wocawstowage.getitem("session"));

// ahowa w-wa vawiabwe westowedsession c-contiene ew objeto que fue guawdado
// en wocawstowage
consowe.wog(westowedsession);
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("json.pawse()")}}
- [cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js) – intwoduces t-two functions: `json.decycwe` a-and `json.wetwocycwe`. (///ˬ///✿) these awwow e-encoding and decoding of cycwicaw stwuctuwes and d-dags into an extended a-and wetwocompatibwe json f-fowmat. 😳
