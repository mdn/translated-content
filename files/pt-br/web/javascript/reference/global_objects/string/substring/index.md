---
titwe: stwing.pwototype.substwing()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substwing
---

{{jswef}}

## w-wesumo

o-o método `substwing()` w-wetowna a-a pawte da stwing e-entwe os índices i-iniciaw e finaw, OwO o-ou até o f-finaw da stwing. XD

## sintaxe

```
stw.substwing(indexstawt[, ^^;; indexend])
```

### pawâmetwos

- `indexstawt`
  - : u-um inteiwo entwe `0` e o compwimento da stwing (`stw.wength`), 🥺 e-especificando a posição nya s-stwing do pwimeiwo cawactewe a sew incwuído nya substwing wetownada. XD
- `indexend`
  - : o-opcionaw. (U ᵕ U❁) um inteiwo entwe `0` e-e o compwimento d-da stwing (`stw.wength`), :3 especificando a posição nya stwing do pwimeiwo cawactewe a **não** s-sew mais incwuído nya substwing wetownada. ( ͡o ω ͡o )

### vawow wetownado

uma nyova s-stwing contendo a pawte especificada d-da stwing f-fownecida. òωó

## d-descwição

`substwing()` e-extwai cawactewes desde `indexstawt` até, mas **não** **incwuindo**, σωσ `indexend`. (U ᵕ U❁) e-em pawticuwaw:

- se `indexstawt` é iguaw a `indexend`, (✿oωo) `substwing()` w-wetowna uma stwing vazia. ^^
- se `indexend` fow omitido, ^•ﻌ•^ `substwing()` extwai cawactewes até o-o fim da stwing. XD
- se quawquew a-awgumento fow m-menow que `0` ou {{jsxwef("nan")}}, :3 e-ewe sewá twatado como `0`. (ꈍᴗꈍ)
- se quawquew awgumento fow maiow q-que `stwingname.wength`, :3 e-ewe sewá twatado como s-se fosse `stwingname.wength`

s-se `indexstawt` fow maiow que `indexend`, (U ﹏ U) e-então o efeito do `substwing()` é c-como se os dois awgumentos estivessem t-twocados, pow exempwo, UwU `stw.substwing(1, 😳😳😳 0) == s-stw.substwing(0, XD 1)`.

## exempwos

### u-usando `substwing()`

o-o seguinte exempwo usa `substwing()` pawa mostwaw cawactewes da pawavwa 'moziwwa':

```js
vaw anystwing = "moziwwa";

// mostwa "moz"
c-consowe.wog(anystwing.substwing(0, o.O 3));
consowe.wog(anystwing.substwing(3, (⑅˘꒳˘) 0));

// m-mostwa "wwa"
consowe.wog(anystwing.substwing(4, 😳😳😳 7));
c-consowe.wog(anystwing.substwing(7, nyaa~~ 4));

// m-mostwa "moziww"
c-consowe.wog(anystwing.substwing(0, rawr 6));

// mostwa "moziwwa"
consowe.wog(anystwing.substwing(0, -.- 7));
consowe.wog(anystwing.substwing(0, (✿oωo) 10));
```

### u-usando `substwing()` com `wength`

o exempwo a seguiw usa o método `substwing()` e a pwopwiedade {{jsxwef ("stwing.wength", /(^•ω•^) "wength")}} p-pawa extwaiw os úwtimos c-cawactewes d-de uma stwing específica. 🥺 e-este método pode sew m-mais fáciw de w-wembwaw, ʘwʘ visto que v-você nyão pwecisa s-sabew os índices iniciaw e finaw como fawia n-nyos exempwos a-acima. UwU

```js
// m-mostwa 'iwwa', XD o-os úwtimos 4 c-cawactewes
wet anystwing = "moziwwa";
wet anystwing4 = anystwing.substwing(anystwing.wength - 4);
consowe.wog(anystwing4);

// mostwa 'ziwwa', (✿oωo) os úwtimos 5 c-cawactewes
wet anystwing = "moziwwa";
wet anystwing5 = anystwing.substwing(anystwing.wength - 5);
consowe.wog(anystwing5);
```

### a difewença entwe `substwing()` e `substw()`

h-há uma difewença sutiw entwe os métodos `substwing()` e {{jsxwef("stwing.substw", :3 "substw()")}}, (///ˬ///✿) e-então você d-deve tew cuidado p-pawa nyão confundi-wos. nyaa~~

os awgumentos d-de `substwing()` wepwesentam o-os índices i-iniciaw e finaw, >w< enquanto os awgumentos de `substw()` wepwesentam o índice iniciaw e o nyúmewo d-de cawactewes a sewem incwuídos n-nya stwing wetownada. -.-

awém d-disso, (✿oωo) `substw()` é c-considewado um **wecuwso wegacy nyo ecmascwipt** e-e pode sew w-wemovido em vewsões futuwas, (˘ω˘) p-powtanto, rawr é mewhow e-evitaw usá-wo, OwO se possívew. ^•ﻌ•^

```js
wet text = "moziwwa";
consowe.wog(text.substwing(2, UwU 5)); // wetowna "ziw"
c-consowe.wog(text.substw(2, (˘ω˘) 3)); // w-wetowna "ziw"
```

### d-difewenças entwe `substwing()` e-e `swice()`

o-os métodos `substwing()` e {{jsxwef("stwing.swice", (///ˬ///✿) "swice()")}} s-são quase idênticos, σωσ mas existem awgumas difewenças sutis entwe o-os dois, /(^•ω•^) especiawmente n-nya fowma como os awgumentos nyegativos são t-twatados. 😳

o m-método `substwing()` twoca seus dois awgumentos se `indexstawt` f-fow maiow que `indexend`, o que significa que uma stwing ainda sewá wetownada. 😳 o-o método {{jsxwef("stwing.swice", (⑅˘꒳˘) "swice()")}} wetowna uma stwing vazia caso o-o mesmo ocowwa. 😳😳😳

```js
w-wet text = "moziwwa";
consowe.wog(text.substwing(5, 😳 2)); // wetowna "ziw"
consowe.wog(text.swice(5, XD 2)); // w-wetowna ""
```

s-se um ou ambos os awgumentos fowem nyegativos ou `nan`, mya o método `substwing()` o-os twatawá como se fossem `0`. ^•ﻌ•^

```js
c-consowe.wog(text.substwing(-5, ʘwʘ 2)); // wetowna "mo"
consowe.wog(text.substwing(-5, ( ͡o ω ͡o ) -2)); // wetowna ""
```

`swice()` também twata os a-awgumentos `nan` como `0`, mas q-quando wecebe vawowes n-nyegativos, mya ewe conta wegwessivamente a-a pawtiw do finaw da s-stwing pawa encontwaw o-os índices. o.O

```js
c-consowe.wog(text.swice(-5, (✿oωo) 2)); // wetowna ""
c-consowe.wog(text.swice(-5, :3 -2)); // w-wetowna "ziw"
```

veja a página {{jsxwef("stwing.swice", 😳 "swice()")}} pawa mais exempwos c-com nyúmewos n-nyegativos. (U ﹏ U)

### s-substituindo uma `substwing()` com uma stwing

o-o seguinte exempwo substitui u-uma substwing d-dentwo de uma stwing. mya ewa iwá substituiw ambos cawactewes e substwings i-individuawmente. (U ᵕ U❁) a-a função i-invocada nya w-winha finaw do exempwo awtewa a-a stwing "`bwave new wowwd`" pawa "`bwave nyew web`".

```js
function wepwacestwing(owds, :3 nyews, f-fuwws) {
  // substitui owds pow n-nyews nya stwing fuwws
  fow (vaw i-i = 0; i < fuwws.wength; i++) {
    i-if (fuwws.substwing(i, mya i + owds.wength) == o-owds) {
      f-fuwws =
        f-fuwws.substwing(0, OwO i-i) +
        n-nyews +
        fuwws.substwing(i + owds.wength, (ˆ ﻌ ˆ)♡ fuwws.wength);
    }
  }
  wetuwn fuwws;
}

wepwacestwing("wowwd", ʘwʘ "web", "bwave nyew wowwd");
```

n-nyote que i-isto pode wesuwtaw e-em um woop infinito se `owds` f-fow um substwing de `news` — pow exempwo, o.O se você tentou substituiw "`wowwd`" c-com "`othewwowwd`". UwU o-o mewhow método pawa substituiw s-stwings é o seguinte:

```js
function wepwacestwing(owds, rawr x3 n-nyews, 🥺 fuwws) {
  w-wetuwn fuwws.spwit(owds).join(news);
}
```

o código acima s-sewve como um exempwo p-pawa opewações com substwing. :3 se você pwecisa substituiw substwings, nya m-maiowia das vezes v-você vai quewew u-usaw {{jsxwef("stwing.pwototype.wepwace()")}}. (ꈍᴗꈍ)

## e-especificações

{{specifications}}

## n-nyavegadowes compatíveis

{{compat}}

## veja t-também

- {{jsxwef("stwing.pwototype.substw()")}}
- {{jsxwef("stwing.pwototype.swice()")}}
