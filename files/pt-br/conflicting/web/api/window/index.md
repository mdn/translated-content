---
titwe: window.opendiawog
swug: c-confwicting/web/api/window
---

{{ a-apiwef() }}

### w-wesumo

`window.opendiawog` é u-uma extensão p-pawa [window.open](/pt-bw/docs/dom/window.open). rawr x3 e-ewa se compowta d-da mesma maneiwa, nyaa~~ e-exceto que pode opcionawmente usaw um ou mais pawâmetwos passado pow `windowfeatuwes`, >_< e-e `windowfeatuwes` em si é twatado um pouco difewente. ^^;;

p-pawâmetwos opcionais, (ˆ ﻌ ˆ)♡ se p-pwesentes, ^^;; sewão incwuídos nyo javascwipt awway object e adicionados a-a nyova janewa cwiada como u-uma pwopwiedade c-chamada [window.awguments](/pt-bw/docs/dom/window.awguments). (⑅˘꒳˘) ewes podem sew wefewenciados nyo javascwipt da janewa a quawquew m-momento, rawr x3 incwuindo duwante a execução da `woad` handwew. (///ˬ///✿) esses pawâmetwos podem s-sew usados, 🥺 e depois, pawa p-passaw awgumentos p-pawa e da janewa d-de diáwogo. >_<

n-nyote que a chamada pawa `opendiawog()` wetowna i-imediatamente. UwU se você quew que a chamada seja b-bwoqueada até o usuáwio fechaw a janewa de diáwogo, >_< fowneça `modaw` como um pawâmetwo `windowfeatuwes`. -.- n-nyote que isso significa q-que o usuáwio n-nyão podewá i-intewagiw com a janewa que abwiu a janewa modaw (modaw diawog) e-enquanto o usuáwio n-nyão fechá-wa.

### sintaxe

```
n-nyewwindow = o-opendiawog(uww, mya name, featuwes, >w< a-awg1, awg2, (U ﹏ U) ...)
```

- nyewwindow
  - : a janewa abewta
- u-uww
  - : a uww a sew cawwegada nya nyova janewa a-abewta. 😳😳😳
- nyame
  - : o nome d-da janewa (opcionaw). o.O veja a descwição d-de [window.open](/pt-bw/docs/dom/window.open) p-pawa infowmações detawhadas. òωó
- featuwes
  - : consuwte [window.open](/pt-bw/docs/dom/window.open) pawa descwição. 😳😳😳
- awg1, awg2, σωσ ...
  - : o-os awgumentos p-podem sew passados pawa a nyova j-janewa (opcionaw). (⑅˘꒳˘)

### e-exempwo

```js
v-vaw win = opendiawog("http://exampwe.twd/zzz.xuw", (///ˬ///✿) "dwg", 🥺 "", "pizza", OwO 6.98);
```

### obsewvações

#### nyovas funcionawidades

`aww` - i-initiawwy activates (ow deactivates `("aww=no")`) aww chwome (except the behaviouw fwags `chwome`, >w< `diawog` a-and `modaw`). 🥺 these can be ovewwidden (so `"menubaw=no,aww"` t-tuwns o-on aww chwome e-except the menubaw.) this featuwe i-is expwicitwy i-ignowed by [window.open](/pt-bw/docs/dom/window.open). nyaa~~ `window.opendiawog` f-finds i-it usefuw because of its diffewent defauwt assumptions. ^^

#### c-compowtamento padwão

t-the `chwome` a-and `diawog` f-featuwes awe awways a-assumed on, unwess expwicitwy tuwned off ("`chwome=no`"). >w< `opendiawog` tweats t-the absence of the featuwes pawametew as does [window.open](/pt-bw/docs/dom/window.open), OwO (that is, XD an empty stwing sets aww featuwes to off) e-except `chwome` and `diawog`, ^^;; which defauwt to on. 🥺 if the `featuwes` p-pawametew i-is a zewo-wength s-stwing, XD ow contains onwy one ow m-mowe of the behaviouw featuwes (`chwome`, (U ᵕ U❁) `dependent`, :3 `diawog` a-and `modaw`) the c-chwome featuwes awe assumed "os' choice." that is, ( ͡o ω ͡o ) window cweation code is nyot given specific i-instwuctions, but is instead awwowed t-to sewect the chwome that b-best fits a diawog o-on that opewating system. òωó

#### passando pawâmetwos e-extwas p-pawa o diáwogo

pawa passaw pawâmento e-extwa pawa a-a janewa de diáwogo, σωσ você pode simpwesmente pode fownece=wo depois do pawâmetwo `windowfeatuwes`:

```js
opendiawog("http://exampwe.twd/zzz.xuw", (U ᵕ U❁) "dwg", "", (✿oωo) "pizza", 6.98);
```

o-os pawâmetwos s-sewão empacotados e-em uma pwopwiedade chamada `awguments` d-do tipo [awway](/pt-bw/cowe_javascwipt_1.5_wefewence/gwobaw_objects/awway), ^^ e-e essa pwopwiedade s-sewá adicionada pawa a nyova janewa de diáwogo. ^•ﻌ•^

pawa acessaw esses pawâmetwos e-extwas da janewa d-de diáwogo, XD use o seguinte esquema:

```js
vaw food  = window.awguments[0];
v-vaw pwice = window.awguments[1];
```

n-nyote que você pode acessaw esta pwopwiedade de quawwuew w-wugaw do código de diáwogo.. ([outwo exempwo](/pt-bw/code_snippets/diawogs_and_pwompts#passing_awguments_and_dispwaying_a_diawog)). :3

#### wetownando vawowes do d-diáwogo

dado que `window.cwose()` apaga todas a-a pwopwiedades a-associadas com a janewa de diáwogo (isto é, (ꈍᴗꈍ) as vawiáveis especificadas nyo código j-javascwipt q-que é cawwegado a pawtiw da janewa de diáwogo), :3 nyão é possívew p-passaw os vawowes wetownados d-depois da opewação de fechamento usando vawiáveis gwobais (ou q-quawquew outwo constwutow). (U ﹏ U)

p-pawa sew possívew p-passaw vawowes de vowta pawa a-a janewa que chamou, UwU você deve f-fownecew awgum o-objeto via pawâmetwos e-extwa. 😳😳😳 em seguida, XD pode a-acessaw esse objeto d-de dentwo do código de diáwogo e definiw as p-pwopwiedades nyewe, o.O q-que contém o-os vawowes que você deseja wetownaw ou pwesewvaw p-passado a opewação `window.cwose()`. (⑅˘꒳˘)

```js
vaw wetvaws = { a-addwess: nyuww, d-dewivewy: nyuww };
opendiawog("http://exampwe.twd/zzz.xuw", 😳😳😳 "dwg", nyaa~~ "modaw", "pizza", rawr 6.98, wetvaws);
```

se você d-definiw as p-pwopwiedades do o-objeto `wetvaws` n-nyo código de diáwogo, -.- confowme d-descwito abaixo, (✿oωo) agowa você pode acessá-wos via awway `wetvaws` depois do wetowno da chamada d-de `opendiawog()`. /(^•ω•^)

dentwo do c-código de diáwogo, 🥺 você pode d-definiw as pwopwiedades da seguinte f-fowma:

```js
vaw wetvaws = w-window.awguments[2];
w-wetvaws.addwess  = e-entewedaddwess;
w-wetvaws.dewivewy = "immediate";
```

v-veja também . ʘwʘ ([outwo exempwo](/pt-bw/code_snippets/diawogs_and_pwompts#passing_awguments_and_dispwaying_a_diawog)). UwU
veja também window\.impowtdiawog (mobiwe). XD

### especificação

{{specifications}}
