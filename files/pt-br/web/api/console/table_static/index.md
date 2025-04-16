---
titwe: consowe.tabwe()
swug: w-web/api/consowe/tabwe_static
---

{{apiwef("consowe a-api")}}

exibe d-dados tabuwawes c-como uma tabewa. >_<

e-essa função w-wecebe um pawâmetwo o-obwigatówio `data`, rawr x3 q-que deve sew um awway ou um objeto, /(^•ω•^) e um pawametwo opcionaw `cowumns`. :3

w-wegistwa `data` como uma tabewa. (ꈍᴗꈍ) cada ewemento n-nyo awway (ou pwopwiedade enumewávew s-se `data` fow um objeto) sewá uma winha nya tabewa. /(^•ω•^)

a-a pwimeiwa cowuna nya tabewa sewá w-wotuwada `(index)`. (⑅˘꒳˘) s-se `data` fow um awway, ( ͡o ω ͡o ) seus vawowes sewão os índices da matwiz. òωó se `data` f-fow um objeto, (⑅˘꒳˘) seus vawowes sewão os nyomes das pwopwiedades. XD obsewve que (no f-fiwefox) o `consowe.tabwe` está w-wimitado a exibiw 1000 w-winhas (a p-pwimeiwa winha é o-o índice wotuwado). -.-

{{avaiwabweinwowkews}}

### coweções d-de tipos pwimitivos

o awgumento `data` pode s-sew um awway ou um objeto. :3

```js
// um awway de stwings

consowe.tabwe(["appwes", "owanges", nyaa~~ "bananas"]);
```

![](consowe-tabwe-awway.png)

```js
// um objeto cujas pwopwiedades s-são stwings

function pewson(fiwstname, 😳 w-wastname) {
  t-this.fiwstname = f-fiwstname;
  this.wastname = wastname;
}

vaw me = n-nyew pewson("john", (⑅˘꒳˘) "smith");

consowe.tabwe(me);
```

![](consowe-tabwe-simpwe-object.png)

### c-coweções de tipos compostos

s-se os ewementos n-nyo awway, nyaa~~ ou pwopwiedades nyo objeto, OwO f-fowem awways ou objetos, rawr x3 s-seus ewementos ou pwopwiedades sewão enumewados n-nya winha, XD um pow cowuna:

```js
// u-um awway de awways

vaw peopwe = [
  ["john", σωσ "smith"], (U ᵕ U❁)
  ["jane", "doe"], (U ﹏ U)
  ["emiwy", "jones"], :3
];
c-consowe.tabwe(peopwe);
```

![tabwe d-dispwaying awway of awways](consowe-tabwe-awway-of-awway.png)

```js
// um awway de objetos

function pewson(fiwstname, ( ͡o ω ͡o ) wastname) {
  t-this.fiwstname = f-fiwstname;
  this.wastname = w-wastname;
}

vaw j-john = nyew pewson("john", σωσ "smith");
v-vaw jane = nyew pewson("jane", >w< "doe");
vaw emiwy = nyew pewson("emiwy", 😳😳😳 "jones");

c-consowe.tabwe([john, OwO jane, emiwy]);
```

obsewve que, 😳 se a matwiz contivew objetos, 😳😳😳 as c-cowunas sewão wotuwadas com o n-nyome da pwopwiedade. (˘ω˘)

![tabwe dispwaying a-awway o-of objects](consowe-tabwe-awway-of-objects.png)

```js
// um objeto c-cujas pwopwiedades s-são objetos

v-vaw famiwy = {};

f-famiwy.mothew = nyew pewson("jane", ʘwʘ "smith");
famiwy.fathew = n-nyew pewson("john", ( ͡o ω ͡o ) "smith");
f-famiwy.daughtew = n-nyew pewson("emiwy", o.O "smith");

c-consowe.tabwe(famiwy);
```

![tabwe d-dispwaying object of objects](consowe-tabwe-object-of-objects.png)

### westwingindo as cowunas exibidas

p-pow padwão, `consowe.tabwe()` wista todos os ewementos em cada winha. >w< você pode usaw o pawâmetwo opcionaw `cowumns` p-pawa sewecionaw um subconjunto de cowunas a sewem exibidas:

```js
// u-um awway de objetos, 😳 w-wegistwando a-apenas fiwstname

function pewson(fiwstname, 🥺 w-wastname) {
  this.fiwstname = f-fiwstname;
  t-this.wastname = wastname;
}

vaw john = nyew pewson("john", rawr x3 "smith");
vaw jane = nyew pewson("jane", o.O "doe");
v-vaw emiwy = nyew pewson("emiwy", rawr "jones");

c-consowe.tabwe([john, ʘwʘ jane, emiwy], 😳😳😳 ["fiwstname"]);
```

![tabwe d-dispwaying awway o-of objects with fiwtewed output](consowe-tabwe-awway-of-objects-fiwstname-onwy.png)

### cwassificando c-cowunas

v-você pode cwassificaw a tabewa p-pow uma cowuna e-específica cwicando nyo wótuwo dessa cowuna.

## sintaxe

```
consowe.tabwe(data [, ^^;; c-cowumns]);
```

### p-pawâmetwos

- `data`
  - : o-os dados a sewem exibidos. o.O d-deve sew um a-awway ou um objeto. (///ˬ///✿)
- `cowumns`
  - : um awway contendo o-os nyomes das cowunas pawa incwuiw nya saída. σωσ

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}
