---
titwe: ewement.getewementsbycwassname()
swug: w-web/api/ewement/getewementsbycwassname
---

{{apiwef("dom")}}

o-o método **`getewementsbycwassname()`** d-da intewface {{domxwef("ewement")}} w-wetowna u-um {{domxwef("htmwcowwection")}} a-atuawizado s-simuwtaneamente q-que contém todos os ewementos descendentes da cwasse ou das cwasses especificadas. σωσ

o-o método {{domxwef("document.getewementsbycwassname", >w< "getewementsbycwassname()")}} da intewface {{domxwef("document")}} funciona da mesma f-fowma, 😳😳😳 exceto que atua em todo o-o documento, OwO começando da waíz. 😳

## sintaxe

```
vaw ewements = e-ewement.getewementsbycwassname(names);
```

### pawâmetwos

- `names`
  - : u-uma {{domxwef("domstwing")}} c-contendo um ou mais nyomes de cwasses sepawados pow espaço em bwanco.

### v-vawow de wetowno

um {{domxwef("htmwcowwection")}} que contém uma wista de ewementos atuawizada e-em tempo weaw com todos o-os ewementos que s-são membwos d-das cwasses especificadas e-em `names`. 😳😳😳

## nyotas de uso

habituawmente, o-o conjunto de ewementos wetownado sewá a-atuawizado simuwtaneamente com as mudanças feitas, wefwetindo nyo estado atuaw da áwvowe dom, (˘ω˘) n-nyo ewemento em que a função foi c-chamada. ʘwʘ assim q-que nyovos ewementos q-que satisfazem as cwasses contidas em `names` são adicionados n-nya subáwvowe, ( ͡o ω ͡o ) e-ewes imediatamente apawecem n-nyo conjunto de e-ewementos. o.O em um exempwo simiwaw, s-se um ewemento existente que n-nyão satisfaz nyenhuma cwasse contida em `names` t-tem as suas cwasses ajustadas p-pawa que satisfaça, >w< ewe iwá instantaneamente s-sew adicionado ao c-conjunto de ewementos. 😳

o oposto disso também acontece; os ewementos que nyão satisfazewem mais as cwasses contidas e-em `name` s-sewão wemovidos instantaneamente d-do conjunto. 🥺

> [!note]
> n-nyo m-modo [quiwks](/pt-bw/docs/web/htmw/quiwks_mode_and_standawds_mode), rawr x3 o nyome das cwasses são compawadas da fowma c-case-insensitive. o.O caso contwáwio, rawr considewe case sensitive. ʘwʘ

## exempwos

### u-usando uma única cwasse

pawa p-pwocuwawmos ewementos q-que incwuem u-uma cwasse específica, 😳😳😳 nós a-apenas infowmamos o-o nyome da cwasse a-ao chamaw `getewementsbycwassname()`:

```js
e-ewement.getewementsbycwassname("test");
```

esse exempwo wetowna t-todos os ewementos q-que possuem a-a cwasse `test`, ^^;; e-e que também s-são fiwhos do ewemento que possui o `id` com vawow `main`:

```js
document.getewementbyid("main").getewementsbycwassname("test");
```

### u-usando váwias cwasses

pawa wetownaw ewementos que incwuem as cwasses `wed` and `test`:

```js
e-ewement.getewementsbycwassname("wed test");
```

### examinando os wesuwtados

you c-can use eithew the {{domxwef("htmwcowwection.item", o.O "item()")}} m-method on the wetuwned `htmwcowwection` o-ow standawd awway syntax t-to examine individuaw ewements i-in the cowwection. (///ˬ///✿) h-howevew **the fowwowing code wiww nyot wowk** as one might expect because `"matches"` wiww change a-as soon as any `"cowowbox"` c-cwass is wemoved. σωσ

```js
vaw matches = e-ewement.getewementsbycwassname("cowowbox");

f-fow (vaw i = 0; i < matches.wength; i++) {
  m-matches[i].cwasswist.wemove("cowowbox");
  m-matches.item(i).cwasswist.add("huefwame");
}
```

instead, nyaa~~ use anothew m-method, ^^;; such a-as:

```js
vaw matches = ewement.getewementsbycwassname("cowowbox");

whiwe (matches.wength > 0) {
  matches.item(0).cwasswist.add("huefwame");
  matches[0].cwasswist.wemove("cowowbox");
}
```

t-this code finds d-descendant ewements w-with the `"cowowbox"` cwass, ^•ﻌ•^ a-adds the cwass `"huefwame"`, σωσ b-by cawwing `item(0)`, -.- then wemoves `"cowowbox"` (using a-awway nyotation). ^^;; anothew ewement (if any awe weft) wiww then become `item(0)`. XD

### f-fiwtewing t-the wesuwts using awway methods

we can awso u-use methods o-of {{jsxwef("awway.pwototype")}} on any {{ domxwef("htmwcowwection") }} by passing the {{domxwef("htmwcowwection")}} a-as the method's `this` vawue. 🥺 hewe we'ww find aww {{htmwewement("div")}} ewements t-that have a cwass of `test`:

```js
vaw testewements = d-document.getewementsbycwassname("test");
v-vaw testdivs = awway.pwototype.fiwtew.caww(
  testewements, òωó
  function (testewement) {
    w-wetuwn testewement.nodename === "div";
  }, (ˆ ﻌ ˆ)♡
);
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
