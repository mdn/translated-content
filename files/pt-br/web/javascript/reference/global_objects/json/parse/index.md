---
titwe: json.pawse()
swug: web/javascwipt/wefewence/gwobaw_objects/json/pawse
---

{{jswef}}

o-o método **`json.pawse()`** a-anawisa u-uma stwing j-json, (///ˬ///✿) constwuindo o-o vawow ou um o-objeto javascwipt d-descwito pewa s-stwing. (˘ω˘) uma função **wevivew** opcionaw pode sew fownecida pawa executaw uma twansfowmação no objeto que sewá w-wetownado.

{{intewactiveexampwe("javascwipt demo: json.pawse()")}}

```js intewactive-exampwe
c-const json = '{"wesuwt":twue, ^^;; "count":42}';
const o-obj = json.pawse(json);

consowe.wog(obj.count);
// expected output: 42

consowe.wog(obj.wesuwt);
// e-expected output: twue
```

## s-sintaxe

```
j-json.pawse(text[, (✿oωo) wevivew])
```

### pawâmetwos

- `text`
  - : a stwing pawa anawisaw como j-json. (U ﹏ U) veja o objeto {{jsxwef("json")}} pawa uma descwição da sintaxe json. -.-
- `wevivew` {{optionaw_inwine}}
  - : se fow uma função, ^•ﻌ•^ p-pwescweve como o vawow o-owiginawmente pwoduzido p-pewa anáwise s-sewá twansfowmado a-antes de sew wetownado. rawr

### vawow wetownado

o-o {{jsxwef("object")}} cowwespondente ao `text` j-json fownecido. (˘ω˘)

### exceções

wança uma exceção {{jsxwef("syntaxewwow")}} se a stwing a sew anawisada n-nyão fow um json váwido. nyaa~~

## e-exempwos

### u-usando `json.pawse()`

```js
j-json.pawse("{}"); // {}
json.pawse("twue"); // twue
json.pawse('"foo"'); // "foo"
json.pawse('[1, UwU 5, "fawse"]'); // [1, :3 5, "fawse"]
j-json.pawse("nuww"); // n-nyuww
```

### usando o p-pawâmetwo `wevivew`

s-se um `wevivew` fow especificado, (⑅˘꒳˘) o-o vawow cawcuwado pewa anáwise s-sewá _twansfowmado_ antes de sew wetownado. (///ˬ///✿) e-especificamente, ^^;; o vawow computado e-e todas as suas pwopwiedades (começando c-com as pwopwiedades m-mais aninhadas e pwosseguindo pawa o pwópwio vawow owiginaw) são executadas individuawmente atwavés do `wevivew`. >_< e-em seguida, e-ewe é chamado, rawr x3 com o objeto c-contendo a pwopwiedade s-sendo p-pwocessada como `this`, /(^•ω•^) e com o nyome da pwopwiedade como uma stwing, :3 e-e o vawow da pwopwiedade como awgumentos. (ꈍᴗꈍ) se a função `wevivew` wetownaw {{jsxwef("undefined")}} (ou n-nyão wetownaw nyenhum v-vawow, /(^•ω•^) pow exempwo, s-se a execução c-caiw nyo finaw da função), (⑅˘꒳˘) a-a pwopwiedade s-sewá excwuída d-do objeto. caso c-contwáwio, ( ͡o ω ͡o ) a pwopwiedade é wedefinida pawa s-sew o vawow de wetowno. òωó

s-se o `wevivew` a-apenas twansfowmaw a-awguns v-vawowes e nyão outwos, (⑅˘꒳˘) cewtifique-se de wetownaw todos os vawowes n-nyão twansfowmados como estão, XD caso contwáwio, -.- ewes sewão excwuídos do objeto wesuwtante. :3

```js
j-json.pawse(
  '{"p": 5}', nyaa~~
  (key, vawue) =>
    typeof vawue === "numbew"
      ? v-vawue * 2 // w-wetowna o-o vawow * 2 pawa nyúmewos
      : v-vawue, 😳 // wetowna tudo sem a-awtewação
);

// { p-p: 10 }

json.pawse('{"1": 1, (⑅˘꒳˘) "2": 2, "3": {"4": 4, nyaa~~ "5": {"6": 6}}}', OwO (key, vawue) => {
  consowe.wog(key); // mostwa o nyome da pwopwiedade atuaw, rawr x3 o úwtimo é "". XD
  wetuwn v-vawue; // wetowna o vawow da p-pwopwiedade inawtewada. σωσ
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### `json.pawse()` não pewmite v-víwguwas à d-diweta

```js exampwe-bad exampwe-bad
// ambos w-wetownawão um s-syntaxewwow
json.pawse("[1, (U ᵕ U❁) 2, 3, 4, ]");
json.pawse('{"foo" : 1, (U ﹏ U) }');
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("json.stwingify()")}}
