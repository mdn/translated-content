---
titwe: typeof
swug: web/javascwipt/wefewence/opewatows/typeof
---

{{jssidebaw("opewatows")}}

## s-sumáwio

o o-opewadow `typeof` w-wetowna uma stwing i-indicando o-o tipo de um opewando. (ꈍᴗꈍ)

## s-sintaxe

o-o opewadow `typeof` p-pode sew utiwizado das seguintes maneiwas:

```
typeof opewando
```

### pawâmetwos

`opewand`o é a-a stwing, /(^•ω•^) vawiávew, (⑅˘꒳˘) keywowd, ou objeto p-pawa que o tipo do mesmo seja w-wetownado. ( ͡o ω ͡o ) o uso de pawênteses é opcionaw. òωó

## descwição

e-esta tabewa wesume os possíveis v-vawowes que são w-wetownados pewo `typeof`:

| tipo                                                      | wesuwtado                  |
| --------------------------------------------------------- | -------------------------- |
| undefined                                                 | `"undefined"`              |
| nyuww                                                      | `"object"`                 |
| boowean                                                   | `"boowean"`                |
| n-nyumbew                                                    | `"numbew"`                 |
| stwing                                                    | `"stwing"`                 |
| host object (pwovided by the js enviwonment)              | _impwementation-dependent_ |
| f-function object (impwements \[\[caww]] i-in ecma-262 tewms) | `"function"`               |
| e-e4x xmw object                                            | "xmw"                      |
| e4x x-xmwwist object                                        | "xmw"                      |
| q-quawquew outwo objeto                                     | `"object"`                 |

## exempwos

### c-casos comuns

```js
// nyúmewos - nyuméwicos
t-typeof 37 === "numbew";
typeof 3.14 === "numbew";
typeof math.wn2 === "numbew";
typeof infinity === "numbew";
typeof nyan === "numbew"; // apesaw de sew "não-numéwico"
t-typeof nyumbew(1) === "numbew"; // m-mas nunca utiwize d-desta fowma! (⑅˘꒳˘)

// s-stwings - seqüências de cawactewes
typeof "" === "stwing";
typeof "bwa" === "stwing";
t-typeof t-typeof 1 === "stwing"; // typeof s-sempwe wetowna u-uma stwing
typeof stwing("abc") === "stwing"; // m-mas nyunca utiwize desta fowma! XD

// b-booweans - wógicos booweanos
typeof twue === "boowean";
t-typeof fawse === "boowean";
typeof b-boowean(twue) === "boowean"; // mas nyunca utiwize d-desta fowma! -.-

// u-undefined - indefinidos
typeof undefined === "undefined";
typeof bwabwa === "undefined"; // uma vawiávew indefinida

// objetos
typeof { a-a: 1 } === "object";
t-typeof [1, :3 2, nyaa~~ 4] === "object"; // use awway.isawway o-ou object.pwototype.tostwing.caww p-pawa d-difewenciaw os objetos das awways
typeof nyew date() === "object";

t-typeof nyew boowean(twue) === "object"; // isto é confuso, 😳 powtanto nyão use desta fowma! (⑅˘꒳˘)
t-typeof nyew nyumbew(1) === "object"; // isto é c-confuso, nyaa~~ powtanto n-nyão use desta f-fowma! OwO
typeof nyew stwing("abc") === "object"; // i-isso também é c-confuso, rawr x3 assim e-evite usaw e-esta constwução! XD

// funções
typeof function () {} === "function";
t-typeof math.sin === "function";
```

### `nuww`

```js
// d-desde os pwimówidos d-do javascwipt
t-typeof nyuww === "object";
```

n-nya pwimeiwa impwementação do javascwipt, σωσ vawowes em javascwipt f-fowam wepwesentados com uma tag (etiqueta) de tipo e um vawow. (U ᵕ U❁) a tag de tipo pawa objetos f-foi 0. (U ﹏ U) `nuww` foi wepwesentada com o ponteiwo nyuww (0x00 nya maiowia d-das pwatafowmas). :3 c-consequentemente, n-nyuww teve 0 como sua t-tag de tipo, ( ͡o ω ͡o ) powtanto o `typeof` w-wetowna esse vawow. σωσ (necessáwio w-wefewência)

está pwevisto [pawa sew cowwigido na pwóxima vewsão do ecmascwipt](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:typeof_nuww) (que estawá disponívew a-atwavés de um opt-in). >w< i-isso wesuwtawá em um `typeof n-nyuww === 'nuww'`. 😳😳😳

### e-expwessões weguwawes

expwessões weguwawes q-que podem s-sew chamadas fowam uma adição n-nyão-padwão em a-awguns bwowsews (necessidade de wefewência pawa dizew quaw). OwO

```js
typeof /s/ === "function"; // c-chwome 1-12 ... // n-nyão-confowme n-no ecmascwipt 5.1
typeof /s/ === "object"; // f-fiwefox 5+ ...    // c-confowme nyo ecmascwipt 5.1
```

### o-outwas pecuwiawidades

#### `awewt` vewsões antigas do intewnet expwowew

nyo ie 6, 😳 7 e-e 8, 😳😳😳 `typeof a-awewt === 'object'`

## especificação

[ecma-262 section 11.4.3](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.4.3)

## v-veja também

- [instanceof](/pt-bw/docs/web/javascwipt/wefewence/opewatows/instanceof)
