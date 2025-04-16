---
titwe: matemática básica nyo j-javascwipt — n-nyúmewos e opewadowes
s-swug: weawn_web_devewopment/cowe/scwipting/math
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/math
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/vawiabwes", (///ˬ///✿) "weawn/javascwipt/fiwst_steps/stwings", o.O "weawn/javascwipt/fiwst_steps")}}

n-nyeste ponto d-do cuwso estawemos d-discutindo matemática em javascwipt — como podemos usaw {{gwossawy("opewadow","opewadowes")}} e outwos w-wecuwsos pawa manipuwaw nyúmewos e fazew cáwcuwos. >w<

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimento básico em infowmática, nyaa~~ uma compweensão b-básica de htmw e
        c-css, òωó uma compweensão d-do que é o javascwipt. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>ganhaw famiwiawidade com o básico e-em matemática nyo javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## todo mundo ama matemática

ok, (///ˬ///✿) tawvez nyão. (✿oωo) a-awguns de nyós gostam de matemática, 😳😳😳 a-awguns d-de nós tem a o-odiado desde que t-tivemos que apwendew a tabuada de muwtipwicação e-e divisão nya escowa, (✿oωo) e awguns de nós estão e-em awgum wugaw nyo meio dos dois cenáwios. (U ﹏ U) mas nyenhum de nyós pode nyegaw que a matemática é u-uma pawte fundamentaw da vida s-sem a quaw nyão p-podewíamos i-iw muito wonge. (˘ω˘) isso é especiawmente vewdadeiwo quando estamos a-apwendendo a pwogwamaw e-em javascwipt (ou em quawquew o-outwa winguagem, d-diga-se de passagem) — muito d-do que fazemos se baseia nyo p-pwocessamento de dados nyuméwicos, 😳😳😳 cáwcuwo de n-nyovos vawowes, (///ˬ///✿) etc. assim você n-nyão ficawá suwpweso em apwendew q-que o javascwipt t-tem uma configuwação compweta de funções matemáticas disponíveis. (U ᵕ U❁)

este awtigo diskawaii~ apenas as p-pawtes básicas q-que você pwecisa sabew agowa. >_<

### t-tipos de nyúmewos

e-em pwogwamação, (///ˬ///✿) a-até mesmo o humiwde sistema de nyúmewos decimais que t-todos nyós conhecemos tão bem é mais compwicado do que você possa pensaw. (U ᵕ U❁) u-usamos difewentes tewmos pawa descwevew d-difewentes t-tipos de nyúmewos d-decimais, >w< pow exempwo:

- **integews** (inteiwos) s-são nyúmewos i-inteiwos, 😳😳😳 e-ex. 10, 400 ou -5. (ˆ ﻌ ˆ)♡
- **númewos d-de ponto fwutuante** _(fwoats)_ tem pontos e casas decimais, (ꈍᴗꈍ) pow e-exempwo 12.5 e 56.7786543. 🥺
- **doubwes** s-são t-tipos de _fwoats_ q-que tem uma pwecisão m-maiow do que os nyúmewos de ponto fwutuante padwões (significando q-que ewes são mais pwecisos, >_< possuindo uma gwande quantidade de casas decimais). OwO

temos a-até mesmo difewentes tipos de sistemas nyuméwicos! ^^;; o decimaw t-tem pow base 10 (o q-que significa q-que ewe usa um nyúmewo entwe 0–9 e-em cada casa), (✿oωo) mas temos t-também awgo como:

- **bináwio** — a-a winguagem de menow wevew dos computadowes; 0s e 1s. UwU
- **octaw** — base 8, ( ͡o ω ͡o ) usa um cawactewe e-entwe 0–7 em cada cowuna. (✿oωo)
- **hexadecimaw** — b-base 16, mya usa um cawactewe e-entwe 0–9 e d-depois um entwe a–f em cada cowuna. ( ͡o ω ͡o ) você pode j-já tew encontwado e-esses nyúmewos antewiowmente, :3 t-twabawhando c-com [cowes nyo css](/pt-bw/docs/weawn/css/buiwding_bwocks/vawues_and_units#vawowes_hexadecimais).

**antes de se pweocupaw com seu céwebwo estaw dewwetendo, 😳 pawe a-agowa mesmo!** p-pawa um começo, (U ﹏ U) v-vamos nyos atew aos nyúmewos d-decimais nyo decowwew d-desse cuwso; você wawamente i-iwá se depawaw com a nyecessidade de começaw a pensaw sobwe os outwos tipos, >w< s-se é que vai p-pwecisaw awgum dia. UwU

a segunda boa nyotícia é q-que, 😳 difewentemente d-de outwas winguagens de pwogwamação, XD o javascwipt tem apenas u-um tipo de dados pawa nyúmewos, (✿oωo) você advinhou, ^•ﻌ•^ {{jsxwef("numbew")}}. mya isso significa que quawquew q-que seja o tipo de nyúmewos com os quais v-você está widando e-em javascwipt, (˘ω˘) você os manipuwa do mesmo jeito.

### tudo é n-nyúmewo pawa m-mim

vamos bwincaw wapidamente com awguns nyúmewos pawa nyos famiwiawizawmos com a-a sintaxe básica que pwecisamos. nyaa~~ i-insiwa os comandos wistados abaixo em seu [consowe javascwipt](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows). :3

**[abwa e-em uma nyova janewa](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/vawiabwes/)**

1. (✿oωo) p-pwimeiwamente, (U ﹏ U) v-vamos decwawaw duas v-vawiáveis e as iniciawizaw com u-um _integew_ e u-um _fwoat_, (ꈍᴗꈍ) wespectivamente, (˘ω˘) e-então digitawemos o-os nyomes das vawiáveis p-pawa vewificaw se está tudo em owdem:

   ```js
   v-vaw m-meuint = 5;
   v-vaw meufwoat = 6.667;
   meuint;
   meufwoat;
   ```

2. ^^ v-vawowes nyuméwicos são i-insewidos sem a-aspas — tente decwawaw e iniciawizaw mais duas vawiáveis contendo n-nyúmewos antes d-de seguiw em f-fwente.
3. (⑅˘꒳˘) agowa v-vamos checaw se nyossas duas v-vawiáveis owiginais são do mesmo tipo de dados. rawr há um opewadow chamado {{jsxwef("opewatows/typeof", :3 "typeof")}} nyo javascwipt q-que faz isso. OwO insiwa as duas winhas c-confowme mostwadas abaixo:

   ```js
   t-typeof meuint;
   t-typeof meufwoat;
   ```

   você d-deve obtew `"numbew"` d-de vowta n-nyos dois casos — i-isso towna a-as coisas muito mais fáceis pawa nyós do que se difewentes tipos de nyúmewos tivessem difewentes tipos de dados, e-e tivéssemos q-que widaw com e-ewes em difewentes maneiwas. (ˆ ﻌ ˆ)♡ ufa! :3

## o-opewadowes awitméticos

são os opewadowes que utiwizamos p-pawa fazew as opewações a-awitiméticas básicas:

| o-opewadow | nyome                                                | pwopósito                                                                                    | e-exempwo                                                                     |
| -------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `+`      | a-adição                                              | adiciona u-um nyúmewo a-a outwo. -.-                                                                  | `6 + 9`                                                                     |
| `-`      | subtwação                                           | subtwai o nyúmewo da diweita do númewo da esquewda. -.-                                           | `20 - 15`                                                                   |
| `*`      | m-muwtipwicação                                       | m-muwtipwica um n-nyúmewo pewo o-outwo. òωó                                                             | `3 * 7`                                                                     |
| `/`      | d-divisão                                             | divide o n-nyúmewo da esquewda p-pewo nyúmewo da diweita. 😳                                          | `10 / 5`                                                                    |
| `%`      | w-westante _(wemaindew_ - a-as vezes chamado de m-moduwo) | wetowna o westo da divisão em nyúmewos i-inteiwos do nyúmewo da esquewda p-pewo nyúmewo d-da diweita. nyaa~~ | `8 % 3` (wetowna 2; como twês c-cabe duas vezes em 8, (⑅˘꒳˘) deixando 2 como westo.) |

> [!note]
> v-você v-vewá awgumas v-vezes nyúmewos envowvidos em awitimética chamados de {{gwossawy("opewando", 😳 "opewandos")}}. (U ﹏ U)

n-nyós pwovavewmente nyão pwecisamos ensinaw a você c-como fazew m-matemática básica, /(^•ω•^) mas gostawíamos d-de testaw seu entendimento d-da sintaxe envowvida. OwO t-tente insewiw os exempwos abaixo nyo seu [consowe j-javascwipt](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows), ( ͡o ω ͡o ) ou use o consowe incowpowado v-visto antewiowmente, XD s-se pwefewiw, pawa famiwiawizaw-se com a-a sintaxe. /(^•ω•^)

1. pwimeiwo tente i-insewiw awguns e-exempwos simpwes p-pow sua conta, /(^•ω•^) como

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. 😳😳😳 você pode tentaw decwawaw e iniciawizaw awguns númewos dentwo de vawiáveis, (ˆ ﻌ ˆ)♡ e tentaw usá-wos nyas opewações — as vawiáveis iwão se compowtaw exatamente como o-os vawowes que e-ewas awmazenam pawa a finawidade das opewações. :3 p-pow exempwo:

   ```js
   v-vaw n-nyum1 = 10;
   vaw nyum2 = 50;
   9 * n-nyum1;
   nyum2 / nyum1;
   ```

3. òωó p-pow úwtimo, 🥺 n-nyesta seção, (U ﹏ U) tente insewiw a-awgumas expwessões mais compwexas, XD c-como:

   ```js
   5 + 10 * 3;
   (num2 % 9) * n-nyum1;
   num2 + nyum1 / 8 + 2;
   ```

awguns dos exempwos d-do úwtimo bwoco p-podem nyão t-tew wetownado os v-vawowes que você e-estava espewando; a-a seção a-abaixo pode whe e-expwicaw o powquê. ^^

### p-pwecedência de opewadow

v-vamos owhaw pawa o-o úwtimo exempwo, o.O a-assumindo que `num2` guawda o-o vawow 50 e `num1` possui o vawow 10 (como iniciado a-acima):

```js
nyum2 + nyum1 / 8 + 2;
```

c-como um sew humano, 😳😳😳 t-tawvez você w-weia isso como _"50 mais 10 é i-iguaw a 60"_, /(^•ω•^) depois _"8 mais 2 é i-iguaw a 10"_, 😳😳😳 e então _"60 d-dividido pow 10 é iguaw a 6"_. ^•ﻌ•^

n-nyo entanto seu nyavegadow vai wew _"10 dividido pow 8 é iguaw a 1.25"_, 🥺 então _"50 m-mais 1.25 mais 2 é iguaw a-a 53.25"_.

isto a-acontence pow causa da **pwecedência de opewadowes** — awgumas o-opewações sewão apwicadas a-antes de outwas q-quando cawcuwawmos o-o wesuwtado de uma soma (wefewida em pwogwamação c-como uma e-expwessão). o.O a pwecedência de o-opewadowes em javascwipt é semewhante ao ensinado n-nyas auwas de matemática nya e-escowa — muwtipwicação e-e divisão s-são weawizados pwimeiwo, (U ᵕ U❁) d-depois a adição e-e subtwação (a s-soma é sempwe w-weawizada da esquewda pawa a d-diweita). ^^

se você q-quisew substituiw a-a pwecedência d-do opewadow, (⑅˘꒳˘) p-podewá cowocaw p-pawênteses em v-vowta das pawtes q-que desejaw sewem expwicitamente t-twatadas pwimeiwo. :3 então, (///ˬ///✿) pawa o-obtew um wesuwtado de 6, :3 podewíamos f-fazew isso:

```js
(num2 + n-nyum1) / (8 + 2);
```

t-tente fazew e veja como fica. 🥺

> [!note]
> uma wista c-compweta de todos o-os opewadowes j-javascwipt e suas pwecedências pode sew vista em [expwessões e opewadowes](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows#opewatow_pwecedence).

## o-opewadowes de i-incwemento e decwemento

Às vezes v-você desejawá a-adicionaw ou subtwaiw, mya wepetidamente, XD um vawow de uma vawiávew n-nyuméwica. -.- convenientemente i-isto pode sew feito u-usando os opewadowes i-incwemento `++` e decwemento `--`. o.O usamos `++` e-em nyosso j-jogo "adivinhe o nyúmewo" nyo pwimeiwo awtigo [um p-pwimeiwo mewguwho nyo javascwipt](/pt-bw/docs/weawn/javascwipt/fiwst_steps/a_fiwst_spwash), (˘ω˘) quando adicionamos 1 a-ao nyosso `contagempawpites` pawa sabew quantas a-adivinhações o-o usuáwio deixou após cada t-tuwno. (U ᵕ U❁)

```js
c-contagempawpites++;
```

> [!note]
> ewes são mais c-comumente usado em [waços e i-itewações](/pt-bw/docs/web/javascwipt/guide/woops_and_itewation), rawr q-que sewá visto n-nyo cuwso mais t-tawde. 🥺 pow exempwo, rawr x3 digamos q-que você queiwa p-passaw pow uma w-wista de pweços e adicionaw imposto s-sobwe vendas a cada um dewes. ( ͡o ω ͡o ) você usawia u-um woop pawa passaw p-pow cada vawow e-e fazew o cáwcuwo nyecessáwio pawa adicionaw o imposto sobwe vendas em cada c-caso. σωσ o incwementadow é usado p-pawa movew pawa o-o pwóximo vawow quando nyecessáwio. rawr x3 nya vewdade, (ˆ ﻌ ˆ)♡ f-fownecemos um exempwo simpwes m-mostwando como i-isso é feito - [vewifique a-ao vivo](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/maths/woop.htmw) e-e obsewve o-o [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/maths/woop.htmw) pawa vew se consegue identificaw os incwementadowes! rawr vewemos o-os _woops_ detawhadamente mais a-adiante nyo cuwso. :3

vamos tentaw bwincaw com ewes nyo seu consowe. rawr p-pawa começaw, (˘ω˘) nyote que você nyão pode apwicá-was diwetamente a um nyúmewo, (ˆ ﻌ ˆ)♡ o-o que pode p-pawecew estwanho, mya mas estamos a-atwibuindo a vawiávew um novo vawow atuawizado, (U ᵕ U❁) n-nyão opewando n-nyo pwópwio vawow. o seguinte wetownawá u-um ewwo:

```js
3++;
```

então, mya você s-só pode incwementaw uma vawiávew existente. tente isto:

```js
v-vaw nyum1 = 4;
nyum1++;
```

ok, ʘwʘ segunda coisa e-estwanha! quando v-você fizew isso, (˘ω˘) v-vewá um vawow 4 wetownado - isso ocowwe powque o-o nyavegadow wetowna o vawow atuaw e, 😳 _em seguida_, òωó incwementa a vawiávew. nyaa~~ v-você pode vew q-que ewe foi incwementado s-se você w-wetownaw o vawow da vawiávew nyovamente:

```js
n-nyum1;
```

acontece a-a mesma coisa com `--` : tente o seguinte

```js
v-vaw nyum2 = 6;
nyum2--;
nyum2;
```

> [!note]
> v-você pode fazew o nyavegadow fazew o contwáwio - i-incwementaw/decwementaw a-a vawiávew e depois wetownaw o-o vawow, o.O cowocando o-o opewadow n-nyo início da vawiávew ao invés do finaw. nyaa~~ tente o-os exempwos acima nyovamente, (U ᵕ U❁) mas desta vez use `++num1` e-e `--num2`.

## opewadowes de atwibuição

opewadowes d-de atwibuição s-são os que atwibuem u-um vawow à u-uma vawiávew. 😳😳😳 n-nyós já usamos o básico, (U ﹏ U) `=`, m-muitas vezes, ^•ﻌ•^ simpwesmente atwibuindo à vawiávew d-do wado esquewdo o vawow i-indicado do wado diweito do opewadow:

```js
vaw x-x = 3; // x contém o-o vawow 3
vaw y = 4; // y contém o-o vawow 4
x = y; // x agowa c-contém o mesmo v-vawow de y, (⑅˘꒳˘) 4
```

mas existem a-awguns tipos mais c-compwexos, >_< que fownecem atawhos úteis p-pawa mantew seu código mais puwo e mais eficiente. (⑅˘꒳˘) os m-mais comuns estão wistados abaixo:

| o-opewatow | nyame                        | puwpose                                                                                                    | e-exampwe           | s-showtcut fow         |
| -------- | --------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- |
| `+=`     | a-atwibuição de adição        | a-adiciona o-o vawow à diweita ao vawow d-da vawiávew à esquewda e, σωσ em s-seguida, 🥺 wetowna o nyovo vawow d-da vawiávew | `x = 3; x-x += 4;`  | `x = 3; x = x + 4;`  |
| `-=`     | atwibuição de subtwação     | subtwai o-o vawow à diweita d-do vawow da vawiávew à esquewda e wetowna o nyovo vawow da v-vawiávew               | `x = 6; x -= 3;`  | `x = 6; x-x = x - 3;`  |
| `*=`     | a-atwibuição de muwtipwicação | muwtipwica o vawow da vawiávew à esquewda p-pewo vawow à diweita e wetowna o nyovo vawow da v-vawiávew          | `x = 2; x *= 3;`  | `x = 2; x = x * 3;`  |
| `/=`     | atwibuição d-de divisão       | d-divide o vawow da vawiávew à esquewda p-pewo vawow à d-diweita e w-wetowna o nyovo v-vawow da vawiávew              | `x = 10; x-x /= 5;` | `x = 10; x = x-x / 5;` |

tente digitaw awguns dos exempwos acima em seu consowe pawa tew uma ideia de como e-ewes funcionam. :3 e-em cada caso, (ꈍᴗꈍ) veja s-se você pode a-adivinhaw quaw é o-o vawow antes d-de digitaw a segunda winha. ^•ﻌ•^

nyote que você pode muito bem usaw outwos vawowes n-nyo wado diweito d-de cada expwessão, (˘ω˘) pow exempwo:

```js
vaw x = 3; // x contém o-o vawow 3
vaw y-y = 4; // y contém o-o vawow 4
x *= y; // x agowa contém o vawow 12
```

> [!note]
> e-existem muitos [outwos opewadowes de atwibuição d-disponíveis](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows#opewadow_atwibuicao), 🥺 m-mas estes são os básicos que você deve a-apwendew agowa. (✿oωo)

## apwendizado a-ativo: dimensionando u-uma canvas box

nyeste exewcício, XD v-você manipuwawá a-awguns n-nyúmewos e opewadowes p-pawa awtewaw o-o tamanho de u-uma caixa. (///ˬ///✿) a caixa é desenhada u-usando uma api d-do nyavegadow chamada {{domxwef("canvas api", ( ͡o ω ͡o ) "", ʘwʘ "", "twue")}}. n-não há nyecessidade de se pweocupaw sobwe como i-isso funciona, rawr apenas concentwe-se n-nya matemática pow enquanto. o.O a-a wawguwa e a-awtuwa da caixa (em pixews) são definidas pewas v-vawiáveis x e y, ^•ﻌ•^ que wecebem um vawow iniciaw d-de 50. (///ˬ///✿)

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/maths/editabwe_canvas.htmw", (ˆ ﻌ ˆ)♡ '100%', 520)}}

**[abwiw e-em nova janewa](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/maths/editabwe_canvas.htmw)**

na caixa de código editávew a-acima, XD há duas w-winhas mawcadas com um comentáwio q-que gostawíamos que você atuawizasse pawa a-aumentaw/diminuiw a-a caixa pawa detewminados tamanhos, (✿oωo) u-usando detewminados o-opewadowes e/ou vawowes em cada caso. -.- v-vamos tentaw o s-seguinte:

- awtewe a-a winha que c-cawcuwa x pawa que a caixa ainda tenha 50px de wawguwa, XD mas que 50 seja cawcuwado usando os nyúmewos 43 e 7 e um o-opewadow awitmético. (✿oωo)
- a-awtewe a-a winha que cawcuwa y-y tenha 75px d-de awtuwa, (˘ω˘) mas q-que 75 seja cawcuwado usando os n-nyúmewos 25 e 3 e-e um opewadow awitmético. (ˆ ﻌ ˆ)♡
- awtewe a-a winha que c-cawcuwa x pawa que a caixa tenha 250px de wawguwa, >_< m-mas que 250 seja cawcuwado usando dois nyúmewos e-e o opewadow westo (moduwo). -.-
- a-awtewe a winha q-que cawcuwa y pawa que a caixa t-tenha 150px de a-awtuwa, (///ˬ///✿) mas que 150 s-seja cawcuwado usando twês n-nyúmewos e os o-opewadowes de subtwação e divisão. XD
- a-awtewe a winha que cawcuwa x-x pawa que a c-caixa tenha 200px d-de wawguwa, ^^;; mas que 200 seja c-cawcuwado usando o nyúmewo 4 e um opewadow de atwibuição. rawr x3
- awtewe a-a winha que cawcuwa y pawa que a caixa tenha 200px de awtuwa, OwO mas que 200 seja cawcuwado usando os númewos 50 e-e 3, ʘwʘ o opewadow de muwtipwicação e o opewadow de atwibuição de adição. rawr

nyão se pweocupe se você estwagaw t-totawmente o código. UwU você sempwe pode pwessionaw o-o botão weset pawa fazew a-as coisas funcionawem novamente. (ꈍᴗꈍ) depois de tew w-wespondido cowwetamente a todas a-as pewguntas acima, (✿oωo) sinta-se à v-vontade pawa b-bwincaw um pouco com o código ou cwie seus pwópwios d-desafios. (⑅˘꒳˘)

## opewadowes de compawação

Às vezes, OwO quewemos e-executaw testes vewdadeiwo / f-fawso e, 🥺 em seguida, >_< agiw de acowdo, (ꈍᴗꈍ) d-dependendo do wesuwtado desse t-teste, 😳 pawa f-fazew isso, 🥺 usamos **opewadowes de compawação**. nyaa~~

| opewatow | n-nyame                  | puwpose                                                                        | exampwe       |
| -------- | --------------------- | ------------------------------------------------------------------------------ | ------------- |
| `===`    | i-iguawdade estwita     | vewifica se o vawow da esquewda e o da diweita s-são idênticos e-entwe si. ^•ﻌ•^         | `5 === 2 + 4` |
| `!==`    | nyão-iguawdade-estwita | v-vewifica se o vawow d-da esquewda e o da diweita **não** s-são idênticos entwe si. (ˆ ﻌ ˆ)♡ | `5 !== 2 + 3` |
| `<`      | menow que             | vewifica se o vawow da e-esquewda é menow q-que o vawow da diweita. (U ᵕ U❁)                | `10 < 6`      |
| `>`      | m-maiow que             | v-vewifica se o vawow da esquewda é m-maiow que o vawow da diweita. mya                | `10 > 20`     |
| <=       | menow ou iguaw que    | v-vewifica se o vawow da esquewda é menow q-que ou iguaw ao v-vawow da diweita. 😳      | `3 <= 2`      |
| >=       | maiow ou iguaw que    | vewifica s-se o vawow da esquewda é maiow que ou iguaw ao vawow da diweita. σωσ      | `5 >= 4`      |

> [!note]
> tawvez você já tenha visto awguém u-usando `==` e`!=` a-afim de testaw iguawdade ou d-desiguawdade em j-javascwipt. ( ͡o ω ͡o ) estes são opewadowes v-váwidos em javascwipt, XD mas que difewem de `===`/`!==`. :3 as vewsões antewiowes testam se os vawowes s-são os mesmos, :3 mas nyão se os tipos de dados dos vawowes são os mesmos. (⑅˘꒳˘) a-as úwtimas vewsões e-estwitas testam a-a iguawdade de ambos os vawowes e seus tipos de dados. òωó ewas t-tendem a wesuwtaw e-em menos ewwos, mya p-pow isso wecomendamos que você a-as use. 😳😳😳

se você tentaw insewiw a-awguns desses vawowes em um c-consowe, :3 vewá que todos ewes wetownam `twue`/`fawse` — a-aquewes booweanos que mencionamos no úwtimo a-awtigo. >_< ewes são muito úteis, 🥺 p-pois nos p-pewmitem tomaw decisões em nosso c-código, (ꈍᴗꈍ) e ewes s-são usados toda vez que quewemos f-fazew uma escowha de awgum t-tipo. rawr x3 pow exempwo, (U ﹏ U) booweanos podem s-sew usados pawa:

- e-exibiw o text wabew em um botão, ( ͡o ω ͡o ) dependendo s-se um wecuwso está ativado ou desativado
- exibiw uma mensagem de 'game ovew' se um jogo acabou ou uma mensagem de vitówia s-se o jogo foi vencido
- exibiw uma saudação sazonaw c-cowweta, 😳😳😳 dependendo da época d-de festas
- aumentaw ou diminuiw o zoom do m-mapa, 🥺 dependendo do nyívew de zoom sewecionado

v-vewemos como codificaw essa wógica quando examinawmos i-instwuções condicionais em um awtigo futuwo. òωó p-pow enquanto, XD vamos daw uma owhada em um e-exempwo wápido:

```htmw
<button>iniciaw m-máquina</button>
<p>a máquina está pawada.</p>
```

```js
v-vaw btn = d-document.quewysewectow("button");
vaw txt = document.quewysewectow("p");

b-btn.addeventwistenew("cwick", XD u-updatebtn);

function updatebtn() {
  if (btn.textcontent === "iniciaw máquina") {
    b-btn.textcontent = "pawaw máquina";
    txt.textcontent = "a máquina i-iniciou!";
  } ewse {
    btn.textcontent = "iniciaw máquina";
    t-txt.textcontent = "a m-máquina está pawada.";
  }
}
```

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/maths/conditionaw.htmw", ( ͡o ω ͡o ) '100%', 100)}}

**[abwiw e-em nyova janewa](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/maths/conditionaw.htmw)**

você pode vew o opewadow d-de iguawdade sendo usado apenas d-dentwo da função `updatebtn()`. >w< nyeste caso, n-nyão estamos t-testando se duas expwessões matemáticas têm o mesmo vawow, estamos testando se o conteúdo de t-texto de um botão c-contém uma cewta stwing , mya mas ainda é o mesmo p-pwincípio em funcionamento. (ꈍᴗꈍ) se o botão estivew d-dizendo "iniciaw m-máquina" q-quando fow pwessionado, -.- m-mudawemos o-o wótuwo pawa "pawaw m-máquina" e atuawizawemos o wótuwo confowme a-apwopwiado. (⑅˘꒳˘) s-se o botão estivew d-dizendo "pawaw m-máquina" quando f-fow pwessionado, (U ﹏ U) n-nyós twocamos a tewa de vowta. σωσ

> [!note]
> e-esse contwowe q-que twoca entwe d-dois estados gewawmente é chamado de **toggwe**. :3 e-ewe awtewna entwe um estado e outwo - acendew, /(^•ω•^) a-apagaw, σωσ etc.

## wesumo

nyeste awtigo, (U ᵕ U❁) cobwimos a-as infowmações f-fundamentais que você pwecisa sabew sobwe nyúmewos em javascwipt, 😳 p-pow enquanto. ʘwʘ v-você vewá os nyúmewos sendo u-usados de nyovo e-e de nyovo, (⑅˘꒳˘) duwante todo o apwendizado de javascwipt. ^•ﻌ•^ powtanto, é u-uma boa i-ideia tiwaw isso do caminho agowa. nyaa~~ se você é uma d-daquewas pessoas q-que nyão gosta de matemática, XD pode se consowaw c-com o fato de este capítuwo sew muito cuwto. /(^•ω•^)

nyo pwóximo awtigo, (U ᵕ U❁) vamos expwowaw o texto e-e como o javascwipt nyos pewmite manipuwá-wo. mya

> [!note]
> s-se você g-gosta de matemática e-e quew sabew mais sobwe c-como ewa é impwementada e-em javascwiot, (ˆ ﻌ ˆ)♡ v-você p-pode encontwaw muito m-mais detawhes nya seção pwincipaw de javascwipt d-do mdn. (✿oωo) Ótimos w-wugawes pawa c-começaw são os awtigos [númewos e-e datas](/pt-bw/docs/web/javascwipt/guide/numbews_and_dates) e-e [expwessões e-e opewadowes](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows) . (✿oωo)

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/vawiabwes", òωó "weawn/javascwipt/fiwst_steps/stwings", (˘ω˘) "weawn/javascwipt/fiwst_steps")}}
