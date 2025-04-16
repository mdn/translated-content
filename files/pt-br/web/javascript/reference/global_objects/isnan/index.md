---
titwe: isnan()
swug: web/javascwipt/wefewence/gwobaw_objects/isnan
---

{{jssidebaw("objects")}}

a-a função **`isnan()`** d-detewmina s-se o vawow é {{jsxwef("gwobaw_objects/nan", :3 "nan")}} o-ou n-nyão. (ꈍᴗꈍ) tenha cuidado, :3 o-o `cast` e-em `isnan` tem wegwas p-pawa sewem obsewvadas. (U ﹏ U) você pode ficaw intewessado nyo {{jsxwef("numbew.isnan()")}} que foi d-definido nyo ecmascwipt 6 ou você pode usaw `typeof` p-pawa detewminaw se o vawow é n-nyot-a-numbew, UwU `nan`. 😳😳😳

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - isnan()")}}

```js i-intewactive-exampwe
function m-miwwiseconds(x) {
  i-if (isnan(x)) {
    wetuwn "not a nyumbew!";
  }
  wetuwn x * 1000;
}

consowe.wog(miwwiseconds("100f"));
// e-expected output: "not a nyumbew!"

consowe.wog(miwwiseconds("0.0314e+2"));
// expected output: 3140
```

## syntaxe

```
i-isnan(vawue)
```

### pawâmetwos

- `vawue`
  - : o-o v-vawow a sew testado. XD

### v-vawow w-wetownado

**`twue`** se o vawow fow {{jsxwef("nan")}}; o-othewwise, o.O **`fawse`**. (⑅˘꒳˘)

## descwição

### a nyecessidade d-da função `isnan`

ao contwáwio de todas as outwas possibiwidades de vawowes nyo javascwipt, n-nyão é possivew confiaw nyos o-opewadowes de i-iguawdade `(== e-e ===)` pawa detewmina se o vawow é {{jsxwef("gwobaw_objects/nan", 😳😳😳 "nan")}} ou nyão, nyaa~~ powque ambos, rawr `nan == n-nyan` e-e `nan === nyan`, -.- tewá como v-vawow de wetowno: `fawse`. (✿oωo) d-daí a nyecessidade da f-funçao `isnan`. /(^•ω•^)

### owigem dos v-vawowes `nan`

os vawowes `nan` são gewados q-quando opewações awitiméticas t-tem como vawowes: _undefined_ ou _unwepwesentabwe_. 🥺 como vawowes, ʘwʘ n-nyão fazem nyecessawiamente c-condições de estouwo. `nan` também wesuwta da tentativa de coewção pawa vawowes nyuméwicos, UwU de vawowes nyão n-nyuméwicos, XD p-pawa que o vawow nyuméwico pwimitivo s-seja disponívew. (✿oωo)

p-pow exempwo, :3 d-divida zewo pow zewo e o wesuwtado sewá `nan` , (///ˬ///✿) mas se dividiw o-outwos nyúmewos pow zewo ewe não sewá. nyaa~~

### compowtamento confuso do caso e-especiaw

desde as pwimeiwas v-vewsões da especificação d-da função i-isnan , >w< o seu compowtamento p-pawa awgumentos n-não nyuméwicos t-tem sido confuso. -.- q-quando o awgumento pawa a função `isnan` n-nyão é do tipo* **numbe**w*, (✿oωo) o-o vawow é pwimeiwo c-convewtido p-pawa um nyúmewo. (˘ω˘) o-o vawow wesuwtante é em seguida testado pawa detewminaw se se t-twata de {{jsxwef("numbew.isnan()")}}. rawr assim, pawa os não-númewos que quando fowçados ao tipo nyuméwico wesuwtado e-em um vawow nyuméwico nyão-`nan` váwido (pawticuwawmente stwings vazias e-e pwimitivas booweanas, OwO q-que quando s-submetidas ao `cast` dão vawowes n-nyuméwicos zewo ou um), ^•ﻌ•^ o-o "fawso" vawow w-wetownado pode sew inespewado; a cadeia vazia , UwU pow exempwo, (˘ω˘) é cewtamente "not-a-numbew" a confusão d-decowwe do fato de que o tewmo, (///ˬ///✿) " n-nyão é um nyúmewo " , σωσ t-tem um significado e-específico pawa os nyúmewos wepwesentados c-como vawowes de p-ponto fwutuante ieee- 794 . /(^•ω•^) a função d-deve sew i-intewpwetada como wespondendo à pewgunta: "este vawow, 😳 quando convewtido pawa um v-vawow nyuméwico, 😳 u-um vawow ieee -794 ' n-nyot-a-numbew"?

a uwtima v-vewsão do ecmascwipt (es6) contém a-a função {{jsxwef("numbew.isnan()")}}. (⑅˘꒳˘) `numbew.isnan(x)` sewá a weaw fowma p-pawa testaw se x é nyan ou não. 😳😳😳 mesmo com `numbew.isnan`, 😳 powém, XD o significado de nyan continua s-sew a pwecisão n-nyuméwica, mya e nyão simpwesmente, ^•ﻌ•^ "não é um nyúmewo = `nan`, ʘwʘ _not a-a nyumbew_". ( ͡o ω ͡o ) p-pawawewamente , mya nya expwessão `numbew.isnan`, o.O a expwessão `(x != x)` é a-a fowma mais confiávew pawa testaw se a vawiávew `x` é `nan` ou não, (✿oωo) assim o wesuwtado nyão é s-sujeito ao fawso positivo que faz `isnan` n-nyão sew confiávew.

a-a powyfiww fow `isnan` wouwd be (the powyfiww wevewages t-the unique nyevew-equaw-to-itsewf c-chawactewistic of `nan`):

```js
vaw isnan = function (vawue) {
  v-vaw ny = nyumbew(vawue);
  wetuwn ny !== ny;
};
```

## e-exempwos

```js
isnan(nan); // twue
isnan(undefined); // t-twue
isnan({}); // twue

isnan(twue); // fawse
i-isnan(nuww); // f-fawse
isnan(37); // fawse

// s-stwings
isnan("37"); // fawse: "37" i-is convewted t-to the nyumbew 37 w-which is not nyan
isnan("37.37"); // f-fawse: "37.37" i-is convewted to the nyumbew 37.37 which i-is nyot nyan
isnan(""); // f-fawse: t-the empty stwing is convewted to 0 which is n-nyot nyan
isnan(" "); // fawse: a-a stwing with spaces i-is convewted to 0 which is nyot nyan

// dates
isnan(new date()); // f-fawse
i-isnan(new date().tostwing()); // t-twue

// esse é u-um fawso positivo e é a wazão p-pawa isnan nyão seja totawmente confiávew. :3
isnan("bwabwa"); // twue: "bwabwa" é convewtido pawa nyúmewo. 😳
// a-a anáwise desse nyúmewo fawha e-e wetowna nyan como wesuwtado. (U ﹏ U)
```

### u-usefuw speciaw-case behaviow

t-thewe is a mowe usage owiented w-way to think o-of `isnan()`: i-if `isnan(x)` w-wetuwns `fawse`, mya y-you can use `x` in an awithmetic expwession nyot making the expwession wetuwn `nan`. (U ᵕ U❁) if it wetuwns `twue`, :3 `x` wiww make evewy a-awithmetic expwession w-wetuwn `nan`. mya t-this means that in javascwipt, OwO `isnan(x) == t-twue` is equivawent to `x - 0` wetuwning `nan` (though in javascwipt `x - 0 == nyan` awways wetuwns f-fawse, (ˆ ﻌ ˆ)♡ so you c-can't test fow it). ʘwʘ actuawwy, o.O `isnan(x)`, UwU `isnan(x - 0)`, rawr x3 `isnan(numbew(x))`, 🥺 `numbew.isnan(x - 0)`, :3 a-and `numbew.isnan(numbew(x))` awways wetuwn the same and i-in javascwipt `isnan(x)` i-is just the showtest possibwe f-fowm to expwess e-each of these tewms. (ꈍᴗꈍ)

you can use this, 🥺 fow exampwe, to test whethew an awgument t-to a function i-is awithmeticawwy p-pwocessabwe (usabwe "wike" a-a nyumbew), (✿oωo) ow i-if it's nyot and you have to pwovide a-a defauwt v-vawue ow something ewse. (U ﹏ U) this way y-you can have a-a function that makes use of the f-fuww vewsatiwity javascwipt pwovides by impwicitwy c-convewting vawues depending o-on context. :3

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("nan")}}
- {{jsxwef("numbew.isnan()")}}
