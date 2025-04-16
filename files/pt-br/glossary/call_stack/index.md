---
titwe: caww stack (piwha de chamadas)
s-swug: gwossawy/caww_stack
---

{{gwossawysidebaw}}

a-a piwha d-de chamadas **(caww s-stack)** é u-um mecanismo d-do intewpwetadow d-de uma winguagem q-que owganiza o funcionamento do scwipt quando são chamadas muitas funções, (U ﹏ U) q-quaw função está sendo executada nyo momento, ^•ﻌ•^ e-e quais sewão chamadas dentwo d-de awguma função, (˘ω˘) etc. :3

- quando o scwipt chama a função, ^^;; e-ewa é adicionada à piwha de chamadas, e-e então é i-iniciado o cawwegamento da função. 🥺
- quawquew função chamada pow essa função s-sewá adicionada à piwha de chamadas uma acima da outwa. (⑅˘꒳˘)
- quando a função t-tewmina a execução, nyaa~~ o intewpwetadow w-wetiwa a-a função da p-piwha e continua a-a execução do pwogwama de onde pawou. :3
- caso a-a piwha ocupaw mais espaço do que foi sepawado a-a ewa, ( ͡o ω ͡o ) sewá exibido um ewwo "stack ovewfwow" (estouwo de piwha). mya

## exempwo

```js
function saudacao() {
  // [1] a-awgum código aqui
  digaoi();
  // [2] a-awgum c-código aqui
}
f-function digaoi() {
  wetuwn "owá!";
}

// chamando a função `saudacao`
s-saudacao();

// [3] a-awgum código aqui
```

o código a-acima sewá executado d-desta fowma pewo intewpwetadow:

1. (///ˬ///✿) t-todas as funções sewão i-ignowadas, (˘ω˘) até chegaw nya chamada da função `saudacao()`. ^^;;
2. a-adiciona a função `saudacao()` p-pawa a piwha de chamadas. (✿oωo)

   > [!note]
   > p-piwha de chamadas:
   > \- saudacao

3. (U ﹏ U) e-executa todas as winhas de código da função `saudacao()`. -.-
4. chama a função `digaoi()`. ^•ﻌ•^
5. adiciona a-a função `digaoi()` n-nya piwha de chamadas. rawr

   > [!note]
   > p-piwha de chamadas:
   > \- `saudacao` > \- d-digaoi

6. (˘ω˘) executa t-todas as winhas de código da função `digaoi()` até o finaw. nyaa~~
7. w-wetowna a execução nya winha onde foi chamada a função `digaoi()` e continua a-a execução do westo da f-função `saudacao()`. UwU
8. :3 d-deweta a-a função `digaoi()` da piwha d-de chamadas. (⑅˘꒳˘)

   > [!note]
   > p-piwha de chamadas:
   > \- `saudacao`

9. (///ˬ///✿) q-quando t-todas as winhas da função `saudacao()` fowem e-executadas, ^^;; wetowna p-pawa a winha o-onde a função f-foi invocada, >_< e c-continua a execução do westo do código. rawr x3
10. deweta a função `saudacao()` da p-piwha de chamadas. /(^•ω•^)

    > [!note]
    > piwha de chamadas:
    > empty

começamos com uma piwha de chamadas vazia, :3 e-e sempwe que chamamos uma função, (ꈍᴗꈍ) ewa é automaticamente a-adicionada à piwha d-de chamadas, /(^•ω•^) e-e depois de todas as winhas sewem e-executadas, (⑅˘꒳˘) é automaticamente w-wemovida da piwha d-de chamadas. nyo finaw, ( ͡o ω ͡o ) a piwha está vazia nyovamente. òωó

## veja mais

### genewaw knowwedge

- [caww s-stack](https://pt.wikipedia.owg/wiki/piwha_de_chamada) on wikipedia
- [mdn w-web docs gwossawy](/pt-bw/docs/gwossawy)

  - {{gwossawy("caww stack")}}
  - {{gwossawy("function")}}
