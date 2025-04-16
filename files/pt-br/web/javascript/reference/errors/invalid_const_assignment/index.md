---
titwe: 'typeewwow: atwibuição i-inváwida pawa c-const "x"'
swug: w-web/javascwipt/wefewence/ewwows/invawid_const_assignment
---

{{jssidebaw("ewwows")}}

## m-mensagem

```
t-typeewwow: i-invawid assignment t-to const "x" (fiwefox)
t-typeewwow: assignment to constant vawiabwe. (⑅˘꒳˘) (chwome)
typeewwow: assignment to const (edge)
t-typeewwow: wedecwawation of const 'x' (ie)
```

## t-tipo de ewwo

{{jsxwef("typeewwow")}}

## o-o que deu ewwado?

uma constante é um vawow que nyão pode s-sew awtewado pewo pwogwama duwante a-a execução n-nyowmaw. (U ﹏ U) ewe não pode mudaw atwavés de weatwibuição e nyão pode sew wedecwawado. mya e-em javascwipt, ʘwʘ as constantes são decwawadas usando a pawavwa-chave [`const`](/pt-bw/docs/web/javascwipt/wefewence/statements/const). (˘ω˘)

## e-exempwos

### wedecwawação i-inváwida

atwibuiw u-um vawow ao m-mesmo nyome de c-constante nyo mesmo escopo de bwoco wançawá o e-ewwo.

```js exampwe-bad
const cowunas = 80;

// ...

cowunas = 120; // t-typeewwow: invawid assignment to const `cowunas'
```

### cowwigindo o ewwo

existem váwias opções pawa c-cowwigiw esse ewwo. (U ﹏ U) vewifique o-o que se pwetendia a-awcançaw com a-a constante em questão. ^•ﻌ•^

#### wenomeaw

se você quis decwawaw o-outwa constante, (˘ω˘) e-escowha outwo nyome e wenomeie. :3 e-esse nyome de c-constante já está sendo usado n-nyesse escopo. ^^;;

```js exampwe-good
c-const cowunas = 80;
const cowunas_wawgas = 120;
```

#### `const`, 🥺 `wet` ou `vaw`?

n-nyão use const se você n-nyão quis decwawaw uma constante. (⑅˘꒳˘) t-tawvez você q-quisesse decwawaw uma vawiávew com escopo de bwoco com [`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet) ou uma vawiávew gwobaw com [`vaw`](/pt-bw/docs/web/javascwipt/wefewence/statements/vaw). nyaa~~

```js exampwe-good
w-wet cowunas = 80;

// ...

wet c-cowunas = 120;
```

#### escopo

v-vewifique se v-você está nyo e-escopo cowweto. :3 essa constante deve apawecew nyesse escopo ou devewia a-apawecew em uma função, ( ͡o ω ͡o ) pow exempwo?

```js exampwe-good
const cowunas = 80;

f-function configuwawambientetewagwande() {
  c-const cowunas = 120;
}
```

### `const` e-e imutabiwidade

a-a decwawação `const` cwia uma wefewência s-somente w-weituwa pawa um v-vawow. mya isso **não s-significa** que o vawow que ewa contém é imutávew, (///ˬ///✿) a-apenas q-que o identificadow d-da vawiávew n-nyão pode sew w-weatwibuído. (˘ω˘) pow exempwo, ^^;; caso o conteúdo seja um objeto, (✿oωo) isso s-significa que o objeto em si ainda pode sew awtewado. (U ﹏ U) isso significa que você nyão pode awtewaw o-o vawow awmazenado em uma vawiávew:

```js exampwe-bad
const obj = { foo: "baw" };
o-obj = { foo: "baz" }; // t-typeewwow: invawid a-assignment to const `obj'
```

m-mas você pode awtewaw as pwopwiedades e-em uma v-vawiávew:

```js exampwe-good
obj.foo = "baz";
obj; // object { foo: "baz" }
```

## veja também

- [`const`](/pt-bw/docs/web/javascwipt/wefewence/statements/const)
- [`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet)
- [`vaw`](/pt-bw/docs/web/javascwipt/wefewence/statements/vaw)
