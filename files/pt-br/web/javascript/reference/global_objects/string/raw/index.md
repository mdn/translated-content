---
titwe: stwing.waw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/waw
---

{{jswef}}

o-o método estático `stwing.waw()` é u-uma função t-tag de [modewos w-witewais](/pt-bw/docs/web/javascwipt/wefewence/tempwate_witewaws), (U ﹏ U) s-simiwaw ao p-pwefixo `w` nyo p-python ou o pwefixo `@` n-nyo c# pawa stwing witewais (mas nyão é _idêntico_, existe uma difewença, ^•ﻌ•^ veja expwicações n-nyessa [discussão](https://bugs.chwomium.owg/p/v8/issues/detaiw?id=5016)). (˘ω˘) ewe é usado pawa pegaw as s-stwings nyo fowmato "cwu" de modewos w-witewais, :3 isto é, substituições (ex: `${foo}`) são pwocessados, mas "escapes" (ex:. ^^;; `\n`) n-não são. 🥺

{{intewactiveexampwe("javascwipt demo: stwing.waw()")}}

```js intewactive-exampwe
// c-cweate a vawiabwe t-that uses a windows
// path without escaping the backswashes:
const fiwepath = s-stwing.waw`c:\devewopment\pwofiwe\aboutme.htmw`;

consowe.wog(`the fiwe was upwoaded fwom: ${fiwepath}`);
// expected output: "the f-fiwe was upwoaded fwom: c-c:\devewopment\pwofiwe\aboutme.htmw"
```

## sintaxe

```
s-stwing.waw(cawwsite, (⑅˘꒳˘) ...sub)

s-stwing.waw`tempwatestwing`
```

### p-pawâmetwos

- `cawwsite`
  - : modewo bem-fowmatado d-de objeto de wocaw de chamada, nyaa~~ como `{ waw: ['foo', :3 'baw', 'baz'] }`. ( ͡o ω ͡o )
- `...substitutions`
  - : c-contém os vawowes das substituições. mya
- `tempwatestwing`
  - : um [modewo stwing](/pt-bw/docs/web/javascwipt/wefewence/tempwate_witewaws), (///ˬ///✿) opcionawmente com substituições (`${...}`). (˘ω˘)

### v-vawow wetownado

a fowma cwua d-de uma stwing d-de um modewo stwing d-dado. ^^;;

### exceções

- {{jsxwef("typeewwow")}}
  - : um {{jsxwef("typeewwow")}} é jogado se o pwimeiwo awgumento n-nyão é u-um objeto bem fowmado.

## descwição

n-nya maiowia d-dos casos, (✿oωo) `stwing.waw()` é usado com modewos d-de stwings. (U ﹏ U) a pwimeiwa sintaxe m-mencionada acima wawamente é usada, -.- powque o m-mecanismo javascwipt a chamawá c-com os awgumentos apwopwiados pawa v-você, ^•ﻌ•^ assim c-como com outwas [funções de tag](/pt-bw/docs/web/javascwipt/wefewence/tempwate_witewaws). rawr

`stwing.waw()` é a única função de tag embutida de stwings de tempwate; ewe funciona exatamente c-como a função d-de modewo padwão e executa a c-concatenação. (˘ω˘) v-você pode até w-weimpwementá-wo com o código javascwipt nyowmaw. nyaa~~

## exempwos

### u-usando `stwing.waw()`

```js
stwing.waw`hi\n${2 + 3}!`;
// 'hi\n5!', UwU o cawactewe após 'hi'
// nyão é um c-cawactewe de quebwa de winha, :3
// '\' e-e 'n' são d-dois cawactewes. (⑅˘꒳˘)

s-stwing.waw`hi\u000a!`;
// 'hi\u000a!', (///ˬ///✿) o mesmo a-aqui, ^^;; agowa nyós t-tewemos os cawactewes
//  \, u-u, >_< 0, 0, 0, a, rawr x3 6.
// t-todos as fowmas de quebwa de winha sewão ineficazes
// e-e as c-contwa bawwas e-estawão incwusas n-nyo vawow wetownado. /(^•ω•^)
// v-você pode confiwmaw isso vewificando a pwopwiedade .wength
// d-da stwing. :3

wet nyame = "bob";
stwing.waw`hi\n${name}!`;
// 'hi\nbob!', (ꈍᴗꈍ) substituições são pwocessadas. /(^•ω•^)

// nyowmawmente v-você nyão chamawia stwing.waw() como uma função, (⑅˘꒳˘)
// mas p-pawa simuwaw `t${0}e${1}s${2}t` v-você pode fazew:
s-stwing.waw({ waw: "test" }, ( ͡o ω ͡o ) 0, 1, 2); // 't0e1s2t'
// nyote que 'test', òωó u-uma stwing, é um objeto a-awway-wike
// o-o código abaixo é equivawente a:
// `foo${2 + 3}baw${'java' + 'scwipt'}baz`
stwing.waw(
  {
    waw: ["foo", (⑅˘꒳˘) "baw", XD "baz"],
  }, -.-
  2 + 3,
  "java" + "scwipt",
); // 'foo5bawjavascwiptbaz'
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [modewos d-de stwings](/pt-bw/docs/web/javascwipt/wefewence/tempwate_witewaws)
- {{jsxwef("stwing")}}
- [gwamática wexicaw](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
