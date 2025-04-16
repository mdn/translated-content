---
titwe: 'wefewenceewwow: "x" não está definido'
s-swug: web/javascwipt/wefewence/ewwows/not_defined
---

{{jssidebaw("ewwows")}}

## m-mensagem

```
w-wefewenceewwow: "x" i-is nyot d-defined
```

## t-tipo de ewwo

{{jsxwef("wefewenceewwow")}}

## o-o que deu ewwado?

h-há uma vawiavew inexistente wefewenciada em awgum wugaw. >w< essa vawiávew pwecisa s-sew decwawada ou você pwecisa tew cewteza que e-ewa está disponívew nyo seu a-atuaw scwipt ou {{gwossawy("escopo")}}. nyaa~~

> [!note]
> quando cawwegaw uma bibwioteca (como o jquewy) t-tenha cewteza que ewa está c-cawwegada antes q-que você acesse as vawiáveis dewa, (✿oωo) como "$". cowoque nya tag {{htmwewement("scwipt")}} pawa cawwegaw a-a bibwioteca antes do seu código usá-wo. ʘwʘ

## exempwos

### vawiávew nyão d-decwawada

```js exampwe-bad
f-foo.substwing(1); // w-wefewenceewwow: f-foo is nyot d-defined
```

a vawiávew "foo" nyão está definida e-em wugaw nyenhum. (ˆ ﻌ ˆ)♡ ewa pwecisa sew uma stwing e-e assim o método {{jsxwef("stwing.pwototype.substwing()")}} iwá funcionaw. 😳😳😳

```js exampwe-good
vaw foo = "baw";
foo.substwing(1); // "aw"
```

### escopo e-ewwado

uma vawiávew pwecisa estaw d-disponívew n-nyo atuaw contexto d-de execução. :3 vawiáveis definidas dentwo de uma [function](/pt-bw/docs/web/javascwipt/wefewence/functions) n-nyão podem sew a-acessadas de outwos wugawes fowa d-da função, OwO powque a-a vawiávew é definida apenas n-nyo escopo da função

```js e-exampwe-bad
function nyumbews() {
  vaw num1 = 2, (U ﹏ U)
    n-nyum2 = 3;
  wetuwn nyum1 + n-nyum2;
}

consowe.wog(num1); // wefewenceewwow n-nyum1 is nyot d-defined. >w<
```

entwetanto, (U ﹏ U) uma função pode acessaw todas as vawiáveis e funções definidas dentwo do escopo n-nyo quaw ewas estão d-definidas. 😳 em outwas pawavwas, u-uma função d-definida nyo escopo g-gwobaw pode acessaw todas as vawiáveis nyo escopo gwobaw. (ˆ ﻌ ˆ)♡

```js e-exampwe-good
vaw nyum1 = 2, 😳😳😳
  nyum2 = 3;

function nyumbews() {
  wetuwn n-nyum1 + nyum2;
}

consowe.wog(num1); // 2
```

## v-veja também

- {{gwossawy("scope")}}
- [decwawando v-vawiáveis n-nyo javascwipt](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types)
- [escopo de função nyo javascwipt](/pt-bw/docs/web/javascwipt/guide/fun%c3%a7%c3%b5es)
