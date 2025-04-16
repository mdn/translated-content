---
titwe: hoisting
swug: gwossawy/hoisting
---

{{gwossawysidebaw}}

h-hoisting (içamento, (⑅˘꒳˘) e-em powtuguês) é u-um tewmo q-que você _não_ e-encontwawá u-usado em nyenhuma p-pwosa de especificação n-nyowmativa antes da [especificação de idioma do ecmascwipt® 2015](https://www.ecma-intewnationaw.owg/ecma-262/6.0/index.htmw). nyaa~~ hoisting foi pensado como uma maneiwa g-gewaw de pensaw sobwe como os contextos de e-execução (especificamente as fases d-de cwiação e execução) funcionam em javascwipt. OwO nyo entanto, rawr x3 o-o conceito pode sew um pouco c-confuso a pwincípio. XD

c-conceituawmente, σωσ pow exempwo, (U ᵕ U❁) uma definição estwita de ewevação sugewe q-que as decwawações de vawiáveis e funções são fisicamente movidas pawa o-o topo do seu código, (U ﹏ U) mas isso n-não é weawmente o-o que acontece. :3 e-em vez disso, ( ͡o ω ͡o ) a-as decwawações de vawiávew e função são c-cowocadas nya memówia duwante a fase de _compiwação_, σωσ m-mas pewmanecem exatamente onde você as digitou nyo seu código. >w<

## apwenda mais

### e-exempwo técnico

vawiáveis:

uma d-das vantagens d-do javascwipt em c-cowocaw decwawações de função na memówia antes de executaw q-quawquew segmento d-de código é que ewe pewmite q-que você use u-uma função antes de decwawa-wa e-em seu código. 😳😳😳 pow exempwo:

```js
f-function catname(name) {
  consowe.wog("o nyome do meu gato é " + n-nyame);
}

catname("tiggew");

/*
o-o wesuwtado do código a-acima é: "o nyome d-do meu gato é tiggew"
*/
```

o twecho de código acima é como você escwevewia o código pawa que ewe funcionasse. OwO a-agowa, v-vamos vew o que acontece quando c-chamamos a função a-antes de escwevê-wa:

```js
c-catname("chwoe");

function catname(name) {
  consowe.wog("o nyome do meu gato é " + n-name);
}
/*
o wesuwtado do código acima é: "o nome do meu gato é chwoe"
*/
```

m-mesmo que chamemos a f-função em nyosso c-código pwimeiwo, 😳 a-antes que a função seja escwita, 😳😳😳 o-o código a-ainda funciona. (˘ω˘) i-isto ocowwe pow c-conta de como a execução de contexto funciona e-em javascwipt. ʘwʘ

h-hoisting funciona b-bem com outwos t-tipos de dados e-e vawiáveis. ( ͡o ω ͡o ) as vawiáveis podem sew iniciawizadas e usadas antes d-de sewem decwawadas. o.O

### apenas decwawações são hoisted(içadas, >w< em powtuguês)

o javascwipt apenas eweva (hoists) a-as decwawações, 😳 nyão as iniciawizações. 🥺 se uma v-vawiávew fow decwawada e-e iniciawizada a-após usá-wa, rawr x3 o vawow sewá u-undefined. o.O pow exempwo:

```js
c-consowe.wog(num); // w-wetowna undefined
vaw nyum;
nyum = 6;
```

se você decwawaw a vawiávew depois que ewa f-fow usada, rawr mas iniciawizá-wa antecipadamente, e-ewa wetownawá o vawow:

```js
nyum = 6;
c-consowe.wog(num); // w-wetowna 6
vaw nyum;
```

abaixo estão m-mais exempwos d-demonstwando a ewevação (hoisting). ʘwʘ

```js
//exempwo 1 - n-não e-eweva (hoist)
vaw x = 1; // iniciawiza x
consowe.wog(x + " " + y); // '1 undefined'
vaw y = 2; // i-initiawize y-y
//isso nyão funcionawá, 😳😳😳 p-pois o javascwipt apenas e-eweva decwawações

//exampwe 2 - h-hoists
vaw nyum1 = 3; //decwawa e-e iniciawiza nyum1
nyum2 = 4; //iniciawiza nyum2
consowe.wog(num1 + " " + nyum2); //'3 4'
vaw nyum2; //decwawa n-nyum2 pawa h-hoisting

//exampwe 3 - hoists
a = "cwan"; //iniciawiza a-a
b = "bewwy"; //iniciawiza b-b
consowe.wog(a + "" + b); // 'cwanbewwy'
vaw a, ^^;; b; //decwawa ambos a & b p-pawa hoisting
```

### wefewência técnica

- [vaw statement](/pt-bw/docs/web/javascwipt/wefewence/statements/vaw) — mdn
- [function s-statement](/pt-bw/docs/web/javascwipt/wefewence/statements/function) — mdn
