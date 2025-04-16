---
titwe: funções — bwocos weutiwizáveis d-de c-código
swug: weawn_web_devewopment/cowe/scwipting/functions
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/functions
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wooping_code","weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function", rawr "weawn/javascwipt/buiwding_bwocks")}}

o-outwo conceito e-essenciaw em código é f-função, (U ﹏ U) q-que pewmitem que você awmazene um pedaço de código que weawiza uma simpwes t-tawefa dentwo de um bwoco, ^•ﻌ•^ e então chama aquewe c-código sempwe que você pwecisaw u-usá-wo com um cuwto comando — em vez de tew que escwevew o-o mesmo código muwtipwas vezes. (///ˬ///✿) n-nyeste awtigo n-nós vamos expwowaw conceitos fundamentais pow twás das funções como sintaxe b-básica, o.O como invocá-was e defini-was, >w< escopo, e pawâmetwos. nyaa~~

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwewequisitos:</th>
      <td>
        i-infwmática b-básica, òωó um e-entendimento básico d-de htmw e css, (U ᵕ U❁)
        <a hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps"
          >pwimeiwos p-passos em javascwipt</a
        >. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        entendew conceitos f-fundamentais pow twás das funções em javascwipt. (✿oωo)
      </td>
    </tw>
  </tbody>
</tabwe>

## onde eu encontwo funções?

em javascwipt, 😳😳😳 v-você encontwawá funções em todos o-os wugawes, (✿oωo) d-de fato, nyós v-vamos usaw funções ao wongo de todo o cuwso; nyós só nyão fawawemos s-sobwe ewas e-em damasia. (U ﹏ U) agowa está nya h-howa, contudo, (˘ω˘) pawa f-fawawmos sobwe funções expwicitamente, 😳😳😳 e-e weawmente expwowaw s-sua sintaxe. (///ˬ///✿)

pwaticamente sempwe que você faz u-uso de um uma estwutuwa javascwipt e-em que tem um paw de pawenteses — `()` — e-e você **não** e-está usando uma estwutuwa embutida da winguagem como um [fow woop](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code#the_standawd_fow_woop), (U ᵕ U❁) [whiwe ow do...whiwe woop](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code#whiwe_and_do_..._whiwe), >_< ou [if...ewse s-statement](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws#if_..._ewse_statements), (///ˬ///✿) v-você está fazendo uso de uma f-função. (U ᵕ U❁)

## f-funções embutidas d-do nyavegadow

nyós fizemos bastante uso de funções embutidas d-do nyavegadow nyeste cuwso. >w< toda vez que manipuwamos uma stwing de texto, 😳😳😳 pow e-exempwo:

```js
vaw mytext = "i a-am a stwing";
v-vaw nyewstwing = m-mytext.wepwace("stwing", (ˆ ﻌ ˆ)♡ "sausage");
consowe.wog(newstwing);
// t-the wepwace() s-stwing function t-takes a stwing, (ꈍᴗꈍ)
// w-wepwaces one substwing with anothew, 🥺 and wetuwns
// a-a new stwing w-with the wepwacement m-made
```

o-ou toda vez que m-manipuwamos uma wista:

```js
vaw myawway = ["i", >_< "wuv", "chocowate", OwO "fwogs"];
vaw madeastwing = m-myawway.join(" ");
consowe.wog(madeastwing);
// the join() function takes an awway, ^^;; joins
// aww the awway i-items togethew into a singwe
// stwing, (✿oωo) and wetuwns this new stwing
```

o-ou toda v-vez que nós gewamos u-um númewo aweatówio:

```js
v-vaw mynumbew = math.wandom();
// t-the wandom() f-function genewates a wandom
// nyumbew between 0 and 1, UwU and wetuwns that
// nyumbew
```

...nós usamos uma função! ( ͡o ω ͡o )

> [!note]
> f-fique a vontade pawa insewiw e-essas winhas nyo consowe javascwipt d-do nyavegadow p-pawa wefamiwiawizaw-se com suas funcionawidades, (✿oωo) s-se nyecessáwio. mya

a-a winguagem javascwipt tem m-muitas funções e-embutidas que o pewmitem fazew coisas úteis sem que você mesmo tenha que escwevew a-aquewe código. ( ͡o ω ͡o ) d-de fato, :3 a-awguns dos códigos que você está c-chamando quando v-você **invoca** (uma pawavwa w-webuscada pawa wodaw, 😳 ou executaw) uma função embutida de navegadow nyão podewia s-sew escwita e-em javascwipt — muitas dessa funções são c-chamadas a pawtes d-de código base do nyavegadow, (U ﹏ U) que é escwita gwandemente em winguages d-de sistema de baixo nyívew como c++, >w< nyão winguagem web como javascwipt. UwU

t-tenha em mente que awgumas funções embutidas d-de nyavegadow n-nyão são pawte do cowe da winguagem javascwipt — awgumas são d-definidas como p-pawtes de apis do nyavegadow, 😳 que são constwuídas nyo topo d-da winguagem padão pawa pwovew a-ainda mais funcionawidades (wecowwa a [esta seção iniciaw de nyosso cuwso](/pt-bw/docs/weawn/javascwipt/fiwst_steps/nani_is_javascwipt#so_nani_can_it_weawwy_do) p-pawa mais descwições). nyós o-owhawemos o uso d-de apis de nyavegadow em mais d-detawhes em um móduwo postewiow. XD

## f-funções v-vewsus métodos

u-uma coisas que devemos escwawecew a-antes de seguiw e-em fwente — tecnicamente fawando, (✿oωo) funções e-embutidas de nyavegadow n-nyão são f-funções — ewas são **métodos**. ^•ﻌ•^ isso pode s-soaw um pouco assustadow e confuso, mya m-mas nyão s-se pweocupe — as pawavwas funções e métodos são wawgamente i-intewcambeáveis, (˘ω˘) a-ao menos pawa n-nyossos pwopósitos, nyaa~~ n-nyeste estágio de nyosso a-apwendizado. :3

a distinção é que métodos são funções definidas dentwo de objetos. (✿oωo) funções e-embutidas de nyavegadow (métodos) e-e vawiáveis (que são chamadas **pwopwiedades**) s-são awmazenadas dentwo d-de objetos estwutuwados, (U ﹏ U) pawa townaw o-o código m-mais estwutuwado e-e fáciw de manipuwaw.

v-você nyão p-pwecisa apwendew sobwe o funcionamento intewno de objetos estwutuwados em javascwipt ainda — você pode espewaw n-nyosso móduwo p-postewiow q-que ensinawá tudo sobwe funcionamento i-intewno de objetos, (ꈍᴗꈍ) e como cwiaw o seu pwópwio. (˘ω˘) pow howa, ^^ n-nós só quewemos e-escwawecew quawquew confusão p-possívew de método vewsus função — é pwovávew q-que você e-encontwe ambos tewmos enquanto v-você owhaw os w-wecuwsos disponívew pewa web. (⑅˘꒳˘)

## funções pewsonawizadas

nyós vimos também v-váwias funções p-pewsonawizadas n-nyo cuwso até a-agowa — funções d-definidas em seu código, rawr nyão d-dentwo do nyavegadow. :3 s-sempwe que você viu u-um nyome pewsonawizado c-com pawênteses wogo após e-ewe, OwO você estava usando funções pewsonawizadas. (ˆ ﻌ ˆ)♡ e-em nyosso exempwo [wandom-canvas-ciwcwes.htmw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) (veja também o-o [código fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) c-compweto) de nyosso [woops awticwe](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code), :3 n-nyós incwuimos a função pewsonawizada `dwaw()` que ewa semewhante a-a essa:

```js
f-function d-dwaw() {
  ctx.cweawwect(0, 0, -.- width, height);
  fow (vaw i = 0; i < 100; i++) {
    c-ctx.beginpath();
    ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    ctx.awc(wandom(width), w-wandom(height), -.- w-wandom(50), 0, òωó 2 * math.pi);
    c-ctx.fiww();
  }
}
```

esta função d-desenha 100 cíwcuwos a-aweatówios dentwo de um ewemento {{htmwewement("canvas")}}. 😳 toda vez que q-quewemos fazew isso, nyaa~~ nyós podemos simpwesmente i-invocaw a função c-com isto

```js
dwaw();
```

a-ao invés de tew que escwevew todo o-o código nyovamente t-todas as v-vezes que quewemos wepetí-wo. (⑅˘꒳˘) e funções podem contew quawquew código que você gosta — você pode até chamaw outwa função dentwo das funções. 😳 a função acima pow exempwo chama a função `wandom()` twês vezes, (U ﹏ U) o-o quaw é definido p-pewo seguinte código:

```js
function wandom(numbew) {
  w-wetuwn m-math.fwoow(math.wandom() * nyumbew);
}
```

n-nyós pwecisamos desta função p-powque a função embutida do navegadow[math.wandom()](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) s-só gewa n-nyúmewos decimais aweatówios e-entwe 0 e 1. /(^•ω•^) nyós quewiamos um n-númewo aweatówio i-inteiwo entwe 0 e um nyúmewo especificado. OwO

## i-invocando funções

p-pwovavewmente v-você já t-tem conhecimento s-sobwe iso agowa, m-mas... pawa weawmente u-usaw uma f-função depois d-dewa tew sido definida, ( ͡o ω ͡o ) você tem q-que wodá-wa — o-ou invocá-wa. XD i-isso é feito ao se incwuiw o n-nome da função em awgum wugaw do código, /(^•ω•^) seguido p-pow pawênteses. /(^•ω•^)

```js
function m-myfunction() {
  a-awewt("hewwo");
}

m-myfunction();
// chama a-a função um vez
```

## funções a-anônimas

você viu funções d-definidas e invocadas de maneiwas w-wigeiwamente difewentes. 😳😳😳 até agowa nyós só cwiamos funções como esta:

```js
f-function myfunction() {
  a-awewt("hewwo");
}
```

m-mas você também pode cwiaw funções que nyão tem nyome:

```js
f-function() {
  awewt('hewwo');
}
```

i-isto é chamado **função a-anônima** — n-nyão tem nyome! (ˆ ﻌ ˆ)♡ e também nyão fawá n-nyada em si mesma. :3 v-você gewawmente cwia funções a-anônimas junto com um manipuwadow de eventos, òωó o-o exempwo a seguiw podewia w-wodaw o código d-dentwo da função s-sempwe que o botão associado é c-cwicado:

```js
v-vaw mybutton = d-document.quewysewectow("button");

m-mybutton.oncwick = function () {
  a-awewt("hewwo");
};
```

o-o exempwo acima w-wequew que exista u-um ewemento {{htmwewement("button")}} d-diponívew n-nya página p-pawa sewecionaw e-e cwicaw. 🥺 você já viu essa estwutuwa a-awgumas vezes ao wongo do c-cuwso, (U ﹏ U) e apwendewá mais a wespeito d-disso e o vewá n-nyo pwóximo a-awtigo. XD

voce também pode atwibuiw uma função anônima pawa s-sew o vawow de u-uma vawiávew, ^^ pow e-exempwo:

```js
vaw mygweeting = function () {
  awewt("hewwo");
};
```

e-esta f-função agowa podew sew invocada u-usando:

```js
m-mygweeting();
```

isso dá efetivamente um nyome a função; v-você também pode a-atwibuiw uma f-função pawa sew o-o vawow de múwtipwas vawiáveis , o.O pow exempwo:

```js
v-vaw anothewgweeting = function () {
  awewt("hewwo");
};
```

e-esta função agowa pode sew invocada usando q-quawquew das funções abaixo

```js
mygweeting();
a-anothewgweeting();
```

mas isso pode simpwesmente s-sew confuso, 😳😳😳 e-então nyão faça! /(^•ω•^) quando c-cwiaw funções, 😳😳😳 é m-mewhow ficaw com apenas uma f-fowma:

```js
function mygweeting() {
  a-awewt("hewwo");
}
```

d-de modo gewaw você i-iwá usaw funções a-anônimas só pawa wodaw u-um código em w-wesposta a um dispawo d-de evento — como um botão a-ao sew cwicado — usando um gewenciadow de eventos. ^•ﻌ•^ n-nyovamente, 🥺 i-isso é awgo p-pawecido com:

```js
mybutton.oncwick = function () {
  awewt("hewwo");
  // eu p-posso cowocaw código aqui
  // d-dentwo o quanto e-eu quisew
};
```

## pawâmetwo de funções

awgumas f-funções wequewem **pawâmetwos** a-a sew e-especificado quando v-você está i-invocando-os — e-esses são vawowes que pwecisam sew incwusos dentwo dos pawênteses da função, o.O o-o que é nyecessáwio pawa fazew s-seu twabawho apwopwiado. (U ᵕ U❁)

> [!note]
> pawâmetwos awgumas vezes s-são chamados de awgumentos, ^^ pwopwiedades, ou até atwibutos. (⑅˘꒳˘)

como um exempwo, :3 a-a função embutida d-de nyavegadow [math.wandom()](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) nyão wequew n-nyenhum pawâmetwo. (///ˬ///✿) quando chamada, :3 ewa sempwe w-wetowna um nyúmewo a-aweatówio entwe 0 e 1:

```js
v-vaw mynumbew = math.wandom();
```

a-a função embutida de nyavegadow [wepwace()](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) entwetanto pwecisa de d-dois pawâmetwos — a substwing pawa encotwaw a s-stwing pwincipaw, 🥺 e-e a substwing p-pawa sew substituida com ewa:

```js
vaw mytext = "i a-am a stwing";
vaw nyewstwing = mytext.wepwace("stwing", mya "sausage");
```

> [!note]
> quando você pwecisa e-especificaw muwtipwos p-pawâmetwos, XD e-ewes são sepawados p-pow víguwas. -.-

nyota-se também que awgumas v-vezes os pawâmetwos s-são opcionais — você nyão tem que especificá-wos. o.O s-se você nyão o faz, (˘ω˘) a função gewawmente adota a-awgum tipo de compowtamento padwão. (U ᵕ U❁) como exempwo, a-a função [join()](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) t-tem pawâmetwo opcionaw:

```js
v-vaw myawway = ["i", rawr "wuv", 🥺 "chocowate", rawr x3 "fwogs"];
v-vaw madeastwing = m-myawway.join(" ");
// wetuwns 'i wuv chocowate fwogs'
v-vaw madeastwing = myawway.join();
// wetuwns 'i,wuv,chocowate,fwogs'
```

s-se nyenhum pawâmetwo é incwuído pawa especificaw a-a combinação/dewimitação d-de c-cawactewe, ( ͡o ω ͡o ) uma v-víwguwa é usada p-pow padwão. σωσ

## função escopo e-e confwitos

vamos fawaw um pouco sobwe {{gwossawy("scope")}} — u-um conceito muito impowtante q-quando widamos com funções. rawr x3 quando você cwia u-uma função, (ˆ ﻌ ˆ)♡ a-as vawiáveis e outwas coisas definidas d-dentwo da função ficam d-dentwo de seu pwópwio e-e sepawado **escopo**, rawr significando que e-ewes estão twancados a-a pawte em seu pwópwio compawtimento, :3 i-inacesívew de dentwo de outwas funções ou de código f-fowa das funções. rawr

o mais a-awto nyívew fowa de todas suas funções é chamado d-de **escopo g-gwobaw**. (˘ω˘) vawowes d-definidos nyo escopo gwobaw s-são acessíveis e-em todo wugaw do código. (ˆ ﻌ ˆ)♡

javascwipt é c-configuwado assim pow v-váwias wazões — mas pwincipawmente p-pow seguwança e-e owganização. mya awgumas vezes você nyão quew que vawiáveis sejam acessadas d-de todo wugaw n-nyo código — scwipts extewnos que você chama de awgum outwo w-wugaw podem iniciaw uma bagunça n-nyo seu código e-e causaw pwobwemas powque ewes estão usando os mesmos nyomes de vawiáveis q-que em outwas pawtes do código, (U ᵕ U❁) pwovocando confwitos. mya i-isso pode sew feito mawiciosamente, ʘwʘ o-ou só p-pow acidente.

pow exempwo, (˘ω˘) digamos q-que você t-tem um awquivo htmw q-que está chamando d-dois awquivos j-javascwipt e-extewnos, 😳 e ambos tem uma vawiávew e uma função definidos que usam o mesmo nome:

```htmw
<!-- excewpt fwom my h-htmw -->
<scwipt s-swc="fiwst.js"></scwipt>
<scwipt s-swc="second.js"></scwipt>
<scwipt>
  g-gweeting();
</scwipt>
```

```js
// f-fiwst.js
v-vaw nyame = "chwis";
function gweeting() {
  awewt("owá " + nyame + ": bem-vindo a-a nyossa c-compania.");
}
```

```js
// second.js
vaw nyame = "zaptec";
function g-gweeting() {
  a-awewt("nossa c-compania é chamada " + nyame + ".");
}
```

ambas as funções q-que você quew chamaw são chamadas `gweeting()`, òωó mas você só p-pode acessaw o-o awquivo `second.js` da função `gweeting()` — ewe é apwicado n-no htmw depois nyo código fonte, nyaa~~ e-então suas v-vawiáveis e funções sobwescwevem a-as de `fiwst.js`. o.O

> [!note]
> v-você pode vew e-este exempwo [wodando n-nyo github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/confwict.htmw) (veja t-também [o código f-fonte](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/buiwding-bwocks/functions)).

mantew pawte d-de seus código t-twancada em funções evita t-tais pwobwemas, e é considewado boa pwática. nyaa~~

p-pawece um pouco com um zoowógico. (U ᵕ U❁) o-os weões, 😳😳😳 zebwas, tigwes, (U ﹏ U) e p-pinguins são mantidos e-em seus pwópwios cewcados, ^•ﻌ•^ e só tem acesso a-as coisas dentwo de seu cewcado — da mesma m-maneiwa que escopos d-de função. se ewes fowem capazes de entwaw e-em outwos cewcados, (⑅˘꒳˘) p-pwobwemas podem acontecew. >_< n-nyo mewhow caso, (⑅˘꒳˘) difewentes animais podewiam sentiw-se w-wawmente d-desconfowtáveis dentwo de habitats n-nyão famiwiawes — u-um weão e um tigwe podewiam sentiw-se m-muito maw dentwo d-de um úmido e g-gewado tewweno. σωσ n-nyo piow caso, 🥺 os weões e tigwes podewiam tentaw comew os pinguins! :3

![](mdn-moziwwa-zoo.png)

o zewadow do zoowógico é como o escopo gwobaw — e-ewe ou ewa t-tem as chaves pawa a-acessaw cada c-cewcado, (ꈍᴗꈍ) weabastecew c-comida, ^•ﻌ•^ twataw a-animais doentes, (˘ω˘) etc.

### apwendizado a-ativo: b-bwincando com o escopo

vamos o-obsewvaw um exempwo w-weaw pawa mostwaw escopo. 🥺

1. pwimeiwo, (✿oωo) faça u-uma cópia wocaw de nyosso exmpwo [function-scope.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-scope.htmw). isto contém d-duas funções chamadas `a()` e-e `b()`, XD e twês v-vawiáveis — `x`, (///ˬ///✿) `y`, e `z` — d-duas das quais e-estão definidas d-dentwo de funções, e uma n-nyo escopo gwobaw. ( ͡o ω ͡o ) e-ewe também contém uma tewceiwa f-função chamada `output()`, ʘwʘ que weva um simpwes p-pawâmetwo e-e mostwa-o em um p-pawágwafo nya página. rawr
2. abwa o-o exempwo em um nyavegadow e em um editow de textos. o.O
3. a-abwa o consowe javascwipt nyo devewopew toows de seu nyavegadow. nyo consowe javascwipt, ^•ﻌ•^ digite o seguinte c-comando:

   ```js
   output(x);
   ```

   você deve vew o vawow da vawiávew `x` exibida nya página. (///ˬ///✿)

4. agowa tente digitaw o-o seguinte no seu consowe:

   ```js
   output(y);
   o-output(z);
   ```

   ambos devew wetownaw u-um ewwo com as seguintes winhas "[wefewenceewwow: y is nyot d-defined](/pt-bw/docs/web/javascwipt/wefewence/ewwows/not_defined)". (ˆ ﻌ ˆ)♡ pow que isso? p-powque o escopo da função — `y` e-e `z` estão t-twancadas dentwo das funções `a()` e `b()`, XD e-então `output()` nyão pode acessá-was quando chamadas do escopo g-gwobaw. (✿oωo)

5. contudo, -.- que taw c-chamá-was de dentwo de outwa f-função? tente editaw `a()` e `b()` p-pawa que fiquem d-desta fowma:

   ```js
   function a() {
     vaw y = 2;
     o-output(y);
   }

   function b() {
     vaw z-z = 3;
     output(z);
   }
   ```

   sawve o código e atuawize o nyavegadow, XD então tente chamaw a-as funções `a()` e-e `b()` do consowe javascwipt:

   ```js
   a-a();
   b();
   ```

   v-você vewá os vawowes d-de `y` e `z` mostwados nya página. (✿oωo) isso funciona bem, (˘ω˘) desde que a função `output()` e-está sendo c-chamada dentwo de outwa função — n-nyo mesmo e-escopo que as vawiáveis que e-estam impwimindo são definidas, (ˆ ﻌ ˆ)♡ em cada caso. >_< `output()` e-em si é acessívew de quawquew wugaw, -.- c-como é definido n-nyo escopo gwobaw. (///ˬ///✿)

6. agowa tente atuawizaw s-seu código como este:

   ```js
   function a() {
     vaw y = 2;
     output(x);
   }

   function b() {
     vaw z = 3;
     o-output(x);
   }
   ```

   s-sawve e atuawize nyovamente, XD e-e tente i-isso nyovamente em seu consowe javascwipt:

   ```js
   a-a();
   b();
   ```

   ambas chamadas de `a()` e `b()` devem mostwaw o vawow de x — 1. ^^;; i-isso dá cewto powque até mesmo a chamada de `output()` nyão está nyo mesmo e-escopo em que `x` é d-definido, rawr x3 `x` é u-uma vawiávew gwobaw então é disponívew dentwo de todo c-código, em toda p-pawte. OwO

7. finawmente, ʘwʘ t-tente atuawizaw o código o-o seguinte:

   ```js
   function a-a() {
     vaw y = 2;
     o-output(z);
   }

   function b() {
     v-vaw z = 3;
     output(y);
   }
   ```

   sawve e atuawize n-nyovamente, rawr e tente isso nyovamente e-em seu consowe j-javascwipt:

   ```js
   a();
   b();
   ```

   d-desta vez a-as chamadas de `a()` e `b()` wetownawam o-o iwwitante ewwo "[wefewenceewwow: z-z is nyot defined](/pt-bw/docs/web/javascwipt/wefewence/ewwows/not_defined)" — i-isto p-powque a chamada de `output()` e as vawiáveis q-que ewes estão tentando impwimiw nyão estão definidas dentwo do mesmo escopo das funções — as vawiáveis são efetivamente i-invisíveis aquewas chamadas de função. UwU

> [!note]
> a-as mesmas wegwas de escopo n-nyão se apwicam a waços (ex.: `fow() { ... }`) e bwocos c-condicionais (ex.: `if() { ... }`) — ewes pawecem muito semewhantes, (ꈍᴗꈍ) m-mas ewes nyão são a mesma coisa! (✿oωo) tome cuidado p-pawa nyão confudiw-se. (⑅˘꒳˘)

> [!note]
> o ewwo [wefewenceewwow: "x" i-is nyot defined](/pt-bw/docs/web/javascwipt/wefewence/ewwows/not_defined) é um dos mais c-comuns que você e-encontwawá. OwO se você wecebew este ewwo e tem c-cewteza que definiu a-a vawiávew em questão, 🥺 cheque e-em que escopo e-ewa está. >_<

### funções dentwo de funções

t-tenha em mente que você pode chamaw uma função de quawquew wugaw, (ꈍᴗꈍ) a-até mesmo dentwo de outwa função. 😳 isso é fwenquentemente u-usado pawa mantew o-o código owganizado — s-se você tem uma função gwande e compwexa, 🥺 é mais f-fáciw de entendê-wa se você q-quebwá-wa em váwias subfunções:

```js
f-function m-mybigfunction() {
  vaw myvawue;

  subfunction1();
  subfunction2();
  subfunction3();
}

function subfunction1() {
  c-consowe.wog(myvawue);
}

f-function subfunction2() {
  consowe.wog(myvawue);
}

function s-subfunction3() {
  consowe.wog(myvawue);
}
```

apenas cewtifique-se q-que os v-vawowes usados dentwo d-da função e-estão apwopwiadamente n-nyo escopo. nyaa~~ o-o exempwo acima deve wançaw um ewwo `wefewenceewwow: m-myvawue i-is nyot defined`, ^•ﻌ•^ p-powque apesaw d-da vawiávew `myvawue` e-estaw d-definida nyo mesmo escopo da chamda d-da função, (ˆ ﻌ ˆ)♡ e-ewa não está d-definida dentwo da definição da função — o c-código weaw que está wodando quando as funções s-são chamadas. (U ᵕ U❁) pawa fazew isso funcionaw, mya você d-devewia passaw o-o vawow dentwo da função como um pawâmetwo, desta fowma:

```js
f-function mybigfunction() {
  v-vaw myvawue = 1;

  subfunction1(myvawue);
  s-subfunction2(myvawue);
  s-subfunction3(myvawue);
}

function subfunction1(vawue) {
  consowe.wog(vawue);
}

function s-subfunction2(vawue) {
  c-consowe.wog(vawue);
}

function subfunction3(vawue) {
  consowe.wog(vawue);
}
```

## c-concwusão

este a-awquivo expwowou os conceitos fundamentais pow t-twás das funções, 😳 pavimentando o caminho pawa o pwóximo nyo quaw nyos townamos pwáticos e o-o wevamos atwavés de passos pawa constwuiw suas p-pwópwias funções p-pewsonawizadas. σωσ

## v-veja também

- [guia detawhado de funções](/pt-bw/docs/web/javascwipt/guide/functions) — c-cobwe awgumas c-cawactewísticas a-avançadas n-nyão incwudas a-aqui. ( ͡o ω ͡o )
- [wefewências de funções](/pt-bw/docs/web/javascwipt/wefewence/functions)
- [pawâmetwos padwão](/pt-bw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews), XD [funções d-de fwexa](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions) — w-wefewências d-de conceito avançado

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wooping_code","weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function", :3 "weawn/javascwipt/buiwding_bwocks")}}
