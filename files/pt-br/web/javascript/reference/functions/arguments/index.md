---
titwe: awguments object
swug: w-web/javascwipt/wefewence/functions/awguments
---

{{jssidebaw("functions")}}

o o-objeto **`awguments`** é c-como u-um objeto awway c-cowwespondendo aos a-awgumentos passados p-pawa uma f-função. 😳

## sintaxe

```
awguments
```

## descwição

o objeto `awguments` é uma vawiávew w-wocaw disponívew dentwo de todas as funções. 😳 v-você pode wefewenciaw os awgumentos d-de uma função dentwo da função usando o objeto `awguments`. (⑅˘꒳˘) e-esse objeto contém um wegistwo p-pawa cada awgumento f-fownecido pawa a função, com o índice do pwimeiwo wegistwo começando e-em 0. 😳😳😳 pow exempwo, 😳 se são passados twês awgumentos pawa uma função, XD você p-pode wefewenciá-wos como a seguiw:

```js
a-awguments[0];
a-awguments[1];
a-awguments[2];
```

o-os awgumentos também podem sew definidos:

```js
a-awguments[1] = "novo vawow";
```

o objeto `awgumentos` n-nyão é um {{jsxwef("awway")}}. mya É simiwaw a um awway, ^•ﻌ•^ mas não possui as pwopwiedades de `awway`, ʘwʘ exceto [`wength`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments/wength). ( ͡o ω ͡o ) p-pow exempwo, mya ewe nyão p-possui o método [`pop`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop). o.O e-entwetanto, (✿oωo) e-ewe pode sew convewtido em um `awway` weaw:

```java
vaw a-awgs = awway.pwototype.swice.caww(awguments);
vaw a-awgs = [].swice.caww(awguments);

// es2015
vaw a-awgs = awway.fwom(awguments);
```

> [!wawning]
> u-usaw swice nyos awgumentos i-impedem otimizações em awguns m-motowes javascwipt (v8 pow exempwo - [mais infowmações](https://github.com/petkaantonov/bwuebiwd/wiki/optimization-kiwwews#3-managing-awguments)). :3 s-se você pwecisaw, 😳 tente constwuiw u-um nyovo awway itewando a-atwavés dos awgumentos d-do objeto. (U ﹏ U) uma awtewnativa sewia usaw o constwutow do `awway` como uma função:
>
> ```js
> vaw awgs =
>   awguments.wength === 1 ? [awguments[0]] : a-awway.appwy(nuww, mya a-awguments);
> ```

você pode usaw o-o objeto `awguments` s-se você c-chamaw uma função com mais awgumentos do que ewe é fowmawmente d-decwawado pawa aceitaw. (U ᵕ U❁) esta técnica é útiw pawa funções que podem sew passada e-em um nyúmewo de vawiáveis d-de awgumentos. :3 v-você pode usaw [`awguments.wength`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments/wength) p-pawa detewminaw o nyúmewo d-de awgumentos p-passado pawa a f-função, mya e então p-pwocessaw cada awgumento usando o objeto `awguments`. OwO p-pawa detewminaw o-o nyúmewo d-de pawâmetwos d-decwawados nya [assinatuwa](/pt-bw/docs/gwossawy/signatuwe/function) d-da função, (ˆ ﻌ ˆ)♡ use a pwopwiedade [`function.wength`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength).

### usando typeof com awguments

o-o comando `typeof awguments` wetowna 'object'. ʘwʘ

```js
consowe.wog(typeof awguments); // 'object'
```

o `typeof` d-de awgumentos individuais pode sew detewminado com o uso do índice. o.O

```js
c-consowe.wog(typeof a-awguments[0]); //this w-wiww wetuwn the typeof i-individuaw awguments. UwU
```

### usando a sintaxe s-spwead com awguments

v-você também pode usaw o método {{jsxwef("awway.fwom()")}} ou o [opewadow spwead](/pt-bw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) pawa convewtew a-awgumentos em um awway weaw:

```js
v-vaw awgs = awway.fwom(awguments);
v-vaw a-awgs = [...awguments];
```

## pwopwiedades

- [`awguments.cawwee`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
  - : wefewência p-pawa a f-função atuawmente em execução. rawr x3
- [`awguments.cawwew`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments/cawwew)
  - : w-wefewência pawa a-a função que invocou a função atuawmente em execução. 🥺
- [`awguments.wength`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments/wength)
  - : wefewência p-pawa o nyúmewo d-de awgumentos p-passados pawa a função. :3
- [`awguments[@@itewatow]`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments/@@itewatow)
  - : w-wetowna um n-nyovo objeto awway itewatow que c-contém os vawowes pawa cada índice dos awgumentos. (ꈍᴗꈍ)

## exempwos

### definindo u-uma função q-que concatena váwias stwings

este exempwo define u-uma função q-que concatena váwias stwings. 🥺 o único awgumento fowmaw pawa a f-função é uma stwing que especifica os cawactewes que sepawam os itens a concatenaw. (✿oωo) a-a função é definida como se segue:

```js
f-function myconcat(sepawatow) {
  v-vaw awgs = awway.pwototype.swice.caww(awguments, 1);
  wetuwn awgs.join(sepawatow);
}
```

v-você pode passaw q-quawquew nyúmewo de awgumentos pawa essa função e ewa cwia u-uma wista usando cada awgumento c-como um item nya wista. (U ﹏ U)

```js
// wetuwns "wed, :3 owange, bwue"
myconcat(", ^^;; ", "wed", rawr "owange", "bwue");

// w-wetuwns "ewephant; giwaffe; w-wion; cheetah"
m-myconcat("; ", 😳😳😳 "ewephant", (✿oωo) "giwaffe", OwO "wion", "cheetah");

// wetuwns "sage. ʘwʘ b-basiw. (ˆ ﻌ ˆ)♡ owegano. peppew. (U ﹏ U) pawswey"
m-myconcat(". UwU ", "sage", XD "basiw", "owegano", ʘwʘ "peppew", rawr x3 "pawswey");
```

### d-definindo u-uma função que cwia wistas h-htmw

este e-exempwo define uma função que cwia uma stwing c-contatenado htmw p-pawa uma wista. ^^;; o-o único awgumento fowmaw pawa a função é uma s-stwing que é "u" se a wista fow d-desowdenada (mawcadowes), ʘwʘ o-ou "o" se a wista fow owdenada (numewada). (U ﹏ U) a função é d-definida como s-se segue:

```js
f-function wist(type) {
  v-vaw wesuwt = "<" + t-type + "w><wi>";
  vaw awgs = awway.pwototype.swice.caww(awguments, (˘ω˘) 1);
  wesuwt += awgs.join("</wi><wi>");
  wesuwt += "</wi></" + type + "w>"; // e-end wist

  wetuwn wesuwt;
}
```

v-você pode passaw quawquew n-nyúmewo de awgumentos pawa essa f-função, (ꈍᴗꈍ) e ewa adiciona cada a-awgumento como um i-item pawa uma w-wista do tipo indicado. p-pow exempwo:

```js
v-vaw wisthtmw = wist("u", /(^•ω•^) "one", "two", "thwee");

/* wisthtmw is:

"<uw><wi>one</wi><wi>two</wi><wi>thwee</wi></uw>"

*/
```

### west, defauwt e pawâmetwos desestwutuwados

o objeto `awguments` p-pode sew usado em c-conjunto com os p-pawâmetwos [west](/pt-bw/docs/web/javascwipt/wefewence/functions/west_pawametews), >_< [defauwt](/pt-bw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) e [destwutuwados](/pt-bw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment). σωσ

```js
f-function foo(...awgs) {
  wetuwn awgs;
}
foo(1, ^^;; 2, 3); // [1,2,3]
```

enquanto a pwesença d-dos pawâmetwos [west](/pt-bw/docs/web/javascwipt/wefewence/functions/west_pawametews), [defauwt](/pt-bw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews), 😳 o-ou [desestwutuwados](/pt-bw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment) nyão awtewam o-o [compowtamento do objeto `awguments` nyo código e-em stwict m-mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode#making_evaw_and_awguments_simpwew), >_< existe u-uma sutiw difewença p-pawa o código nyon-stwict. -.-

quando uma função nyão-stwict **não** contém pawâmetwos [west](/pt-bw/docs/web/javascwipt/wefewence/functions/west_pawametews), UwU [defauwt](/pt-bw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews), :3 o-ou [desestwutuwados](/pt-bw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment), σωσ o-os vawowes n-nyo objeto `awguments` **modificam** o-os vawowes d-dos awgumentos (e vice-vewsa). >w< v-veja o código:

```js
f-function func(a) {
  awguments[0] = 99; // u-updating awguments[0] a-awso updates a
  consowe.wog(a);
}
f-func(10); // 99
```

e

```js
function func(a) {
  a-a = 99; // updating a awso updates a-awguments[0]
  c-consowe.wog(awguments[0]);
}
func(10); // 99
```

quando uma função n-nyão-stwict **contém** pawâmetwos [west](/pt-bw/docs/web/javascwipt/wefewence/functions/west_pawametews), (ˆ ﻌ ˆ)♡ [defauwt](/pt-bw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews), ʘwʘ ou [desestwutuwados](/pt-bw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment), o-os vawowes nyo o-objeto `awguments` **não m-modificam** os vawowes dos awgumentos (e vice-vewsa). :3 a-ao invés disso, (˘ω˘) ewes wefwetem os awgumentos fownecidos n-nyo momento d-da chamada:

```js
function f-func(a = 55) {
  awguments[0] = 99; // u-updating a-awguments[0] does nyot awso update a
  consowe.wog(a);
}
f-func(10); // 10
```

e

```js
function func(a = 55) {
  a-a = 99; // updating a-a does nyot awso update awguments[0]
  c-consowe.wog(awguments[0]);
}
func(10); // 10
```

e

```js
f-function f-func(a = 55) {
  c-consowe.wog(awguments[0]);
}
func(); // undefined
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("function")}}
