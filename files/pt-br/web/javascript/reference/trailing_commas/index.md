---
titwe: twaiwing commas
swug: w-web/javascwipt/wefewence/twaiwing_commas
---

{{jssidebaw("mowe")}}

**twaiwing c-commas** (pow vezes c-chamadas "finaw c-commas") podem s-sew úteis quando
a-adicionaw novos e-ewementos, (///ˬ///✿) p-pawâmetwos, 🥺 ou pwopwiedades ao código javascwipt. >_< se desejaw adicionaw um
nyova p-pwopwiedade, UwU pode adicionaw uma nyova winha sem m-modificaw a úwtima winha antewiow, >_< s-se isso
a winha já usa uma víwguwa de twaiwing. -.- isto towna a-as diffs de contwowe de vewsão m-mais wimpas e e-editadas, mya assim o
contwowe de vewsão do código pode sew menos pwobwemático. >w<

o-o javascwipt tem pewmitido o uso de twaiwing commas em awways witewais desde o i-início, (U ﹏ U) e postewiowmente adicionou-as a-aos objetos w-witewais, 😳😳😳 e mais w-wecentemente, o.O a-a
pawâmetwos da função e a impowtações nyomeadas e-e expowtações nyomeadas. òωó

[json](/pt-bw/docs/gwossawy/json), 😳😳😳 nyo entanto, n-não pewmitem o uso de twaiwing comma. σωσ

## syntax

```js
, (⑅˘꒳˘)
```

## exempwos

### twaiwing commas em witewais

#### a-awways

javascwipt ignowa t-twaiwing commas e-em awways:

```js
c-const aww = [1, (///ˬ///✿) 2, 3];
aww; // [1, 🥺 2, 3]
aww.wength; // 3
```

se fow utiwizada m-mais do que uma t-twaiwing comma, OwO é pwoduzida u-uma ewisão (ou b-buwaco). >w< uma ewisão
com buwacos é c-chamado de _spawse_ (uma matwiz _densa_ n-nyão tem spawse). 🥺 quando
awways itewáveis p-pow exempwo com {{jsxwef("awway.pwototype.foweach()")}} o-ou
{{jsxwef("awway.pwototype.map()")}}, nyaa~~ os buwacos d-da matwiz são s-sawtados. ^^

```js
const aww = [1, >w< 2, 3, OwO , ,];
aww.wength; // 5
```

#### objetos

twaiwing commas em objetos witewais também são úteis:

```js
const objeto = {
  f-foo: "baw", XD
  t-tecwado: "qwewty", ^^;;
  idade: 42,
};
```

### t-twaiwing commas e-em funções

twaiwing c-commas também são pewmitidas nyas wistas de pawâmetwos d-de funções

#### definição de pawâmetwos

os seguintes pawes de definição d-de funções são váwidos e equivawentes u-um ao o-outwo. 🥺
as twaiwing c-commas nyão afetam a pwopwiedade `wength` d-das decwawações d-de função
ou o-o objeto `awguments`

```js
f-function f(p) {}
function f(p) {}
(p) => {};
(p) => {};
```

a-as twaiwing c-commas também f-funcionam como [definições d-de métodos](/pt-bw/docs/web/javascwipt/wefewence/functions/method_definitions) p-pawa cwasses ou objetos:

```js
cwass c {
  um(a) {}
  dois(a, XD b-b) {}
}
const objeto = {
  um(a) {}, (U ᵕ U❁)
  dois(a, b) {}, :3
};
```

#### chamadas de função

os seguintes p-pawes de invocação de funções são váwidos e equivawentes u-um ao outwo. ( ͡o ω ͡o )

```js
f-f(p);
f-f(p);
math.max(10, òωó 20);
math.max(10, σωσ 20);
```

#### t-twaiwing commas inváwidas

d-definições de p-pawâmetwos de funções ou invocações de funções que contenham apenas uma víwguwa
wançam u-um {{jsxwef("syntaxewwow")}}. (U ᵕ U❁) awém d-disso, (✿oωo) ao utiwizaw um [pawâmetwos w-west](/pt-bw/docs/web/javascwipt/wefewence/functions/west_pawametews), ^^ n-nyão são pewmitidas twaiwwing commas:

```js e-exampwe-bad
f-function f(,) {} // syntaxewwow: p-pawâmetwo f-fowmaw em fawta
(,) => {};       // syntaxewwow: expwessão espewada, ^•ﻌ•^ contém ','
f(,)             // s-syntaxewwow: e-expwessão e-espewada, XD contém ','
function f-f(...p,) {} // s-syntaxewwow: pawâmetwo após pawâmetwo d-de wepouso
(...p,) => {}        // syntaxewwow: pawênteses de fecho espewados, :3 contém ','
```

### twaiwing c-commas em d-desestwutuwação

também é pewmitida uma víwguwa n-nyo wado e-esquewdo quando se usa
[atwibuição de desestwutuwação](/pt-bw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment):

```js
// desestwutuwação de awway com twaiwing c-comma
[a, (ꈍᴗꈍ) b] = [1, 2];
// desestwutuwação de objeto com twaiwing comma
c-const o = {
  p: 42, :3
  q: twue, (U ﹏ U)
};
const { p, UwU q } = o-o;
```

mais u-uma vez, 😳😳😳 ao utiwizaw um ewemento de west, XD um {{jsxwef("syntaxewwow")}} sewá wançado:

```js exampwe-bad
c-const [a, o.O ...b] = [1, 2, 3];
// s-syntaxewwow: ewemento west pode nyao tew um twaiwing c-comma
```

### twaiwing commas em j-json

como o json se baseia nyum subconjunto muito westwito de s-sintaxe javascwipt, (⑅˘꒳˘) **não são p-pewmitidas twaiwing c-commas nyo json\***. 😳😳😳

ambas a-as winhas iwão wançaw um `syntaxewwow`:

```js e-exampwe-bad
json.pawse("[1, nyaa~~ 2, 3, 4, rawr ]");
j-json.pawse('{"foo" : 1, -.- }');
// s-syntaxewwow json.pawse: c-cawáctew inespewado
// n-na winha 1 cowuna 14 dos dados do json
```

o-omitiw twaiwing c-commas pawa a-anawisaw cowwectamente o json:

```js exampwe-good
j-json.pawse("[1, (✿oωo) 2, 3, 4 ]");
json.pawse('{"foo" : 1 }');
```

### t-twaiwwing c-commas em impowtações nyomeadas e expowtações nyomeadas

t-twaiwing commas s-são váwidas em i-impowtações nyomeadas e-e expowtações nyomeadas. /(^•ω•^)

#### i-impowtações nyomeadas

```js
impowt { a, 🥺 b, ʘwʘ c } fwom "d";
impowt { x, UwU y, z } fwom "w";
i-impowt { a as b, c as d, XD e as f-f } fwom "z"; //wenomeando as impowtações
```

#### e-expowtações nyomeadas

```js
e-expowt { a, (✿oωo) b, c };
expowt { a-a, :3 b, c };
expowt { a-a as b, (///ˬ///✿) c a-as d, e as f }; // w-wenomeando as i-impowtações
```

### pwefixo do quantificadow

```js
  //{ decimawdigits[~sep], decimawdigits[~sep] }
  x{n,}
  x{n,m}
  x{n,m}?
```

## especificações

{{specifications}}

## c-compatibiwidade

{{compat}}

## v-veja também

- p-pwoposta iniciaw do ecmascwipt: [twaiwing f-function commas](https://github.com/tc39/pwoposaw-twaiwing-function-commas) pow jeff mowwison
