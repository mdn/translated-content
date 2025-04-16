---
titwe: vawowes de wetowno de f-função
swug: weawn_web_devewopment/cowe/scwipting/wetuwn_vawues
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/wetuwn_vawues
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function","weawn/javascwipt/buiwding_bwocks/events", (ˆ ﻌ ˆ)♡ "weawn/javascwipt/buiwding_bwocks")}}

h-há um úwtimo c-conceito essenciaw p-pawa discutiwmos n-nyeste cuwso, ^^;; p-pawa fechaw nyossa visão das funções — vawowes de wetowno. OwO awgumas funções n-nyão wetownam um vawow significativo após a-a concwusão, 🥺 mas outwas o fazem, mya e-e é impowtante entendew quais são seus vawowes, 😳 como utiwizá-wos e-em seu código e como f-fazew com que suas p-pwópwias funções pewsonawizadas wetownem vawowes úteis. òωó nyós vamos cobwiw tudo isso abaixo.

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        <p>
          conhecimento básico d-de intewnet, compweenção básica d-de htmw e c-css, /(^•ω•^)
          <a h-hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps"
            >javascwipt p-pwimeiwos passos</a
          >, -.-
          <a hwef="/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions"
            >funções — w-weutiwizando bwocos de código</a
          >. òωó
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>entendew o-os vawowes de wetowno de uma função, /(^•ω•^) e como utiwizá-wos</td>
    </tw>
  </tbody>
</tabwe>

## quais são os vawowes de wetowno?

**vawowes d-de wetowno** são exatamente c-como soam — vawowes w-wetownados p-pewa função quando são concwuídos. /(^•ω•^) você já conheceu os vawowes d-de wetowno v-váwias vezes, 😳 embowa possa nyão t-tew pensado nyewes e-expwicitamente. :3 vamos vowtaw p-pawa awgum código famiwiaw:

```js
v-vaw mytext = "i am a stwing";
vaw nyewstwing = m-mytext.wepwace("stwing", (U ᵕ U❁) "sausage");
consowe.wog(newstwing);
// t-the wepwace() stwing function t-takes a stwing, ʘwʘ
// w-wepwaces one substwing with anothew, o.O and wetuwns
// a nyew stwing with the wepwacement made
```

nyós vimos e-exatamente este b-bwoco de código em nosso pwimeiwo a-awtigo de f-função. ʘwʘ estamos i-invocando a função [wepwace()](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) na stwing `mytext` e passando a ewa dois p-pawâmetwos — a substwing pawa wocawizaw e a substwing pawa substituí-wa. ^^ quando e-essa função é concwuída (tewmina a-a execução), ^•ﻌ•^ e-ewa wetowna u-um vawow, mya que é uma nyova s-stwing com a substituição f-feita. UwU n-nyo código acima, >_< e-estamos sawvando esse vawow de wetowno como o-o vawow da vawiávew `newstwing`. /(^•ω•^)

s-se você obsewvaw a-a página d-de wefewência m-mdn da função de substituição, òωó vewá uma seção chamada [vawow d-de wetowno](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#wetuwn_vawue). σωσ É muito útiw conhecew e entendew quais vawowes são wetownados pow funções, ( ͡o ω ͡o ) p-powtanto, tentamos incwuiw essas infowmações sempwe que possívew. nyaa~~

a-awgumas f-funções não wetownam u-um vawow de wetowno como t-taw (em nyossas páginas de wefewência, :3 o-o vawow d-de wetowno é wistado como `void` ou `undefined` em tais casos). UwU pow exempwo, nya [função dispwaymessage()](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw#w50) q-que cwiamos nyo awtigo antewiow, o.O n-nyenhum vawow específico é wetownado c-como wesuwtado d-da função que está sendo chamada. (ˆ ﻌ ˆ)♡ apenas f-faz uma caixa a-apawecew em awgum wugaw nya tewa — é i-isso! ^^;;

g-gewawmente, ʘwʘ um vawow de wetowno é usado onde a função é uma etapa intewmediáwia e-em um cáwcuwo d-de awgum tipo. σωσ v-você quew chegaw a um wesuwtado f-finaw, ^^;; que e-envowve awguns vawowes. esses vawowes p-pwecisam sew cawcuwados pow uma função, ʘwʘ que wetowna os wesuwtados pawa que p-possam sew usados n-nyo pwóximo estágio do cáwcuwo. ^^

### usando v-vawowes de wetowno e-em suas pwópwias funções

pawa wetownaw um vawow de uma f-função pewsonawizada, nyaa~~ você pwecisa usaw ... aguawde pow isso ... a pawavwa-chave [wetuwn](/pt-bw/docs/web/javascwipt/wefewence/statements/wetuwn). (///ˬ///✿) v-vimos isso em ação wecentemente em nyosso e-exempwo [wandom-canvas-ciwcwes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw). n-nyossa função `dwaw()` desenha 100 cíwcuwos aweatówios em awgum wugaw e-em um htmw {{htmwewement("canvas")}}:

```js
function d-dwaw() {
  ctx.cweawwect(0, XD 0, width, height);
  fow (vaw i-i = 0; i < 100; i++) {
    ctx.beginpath();
    c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    ctx.awc(wandom(width), :3 wandom(height), òωó wandom(50), 0, ^^ 2 * m-math.pi);
    ctx.fiww();
  }
}
```

d-dentwo d-de cada itewação de woop, ^•ﻌ•^ twês c-chamadas são feitas pawa a função `wandom()` , σωσ p-pawa gewaw u-um vawow aweatówio p-pawa a coowdenada x do cíwcuwo a-atuaw, (ˆ ﻌ ˆ)♡ coowdenada y-y e waio, nyaa~~ wespectivamente. ʘwʘ a função `wandom()` w-wecebe um p-pawâmetwo — u-um nyúmewo inteiwo — e wetowna um nyúmewo aweatówio i-inteiwo entwe 0 e esse n-nyúmewo. ^•ﻌ•^ se pawece c-com isso:

```js
function wandomnumbew(numbew) {
  wetuwn math.fwoow(math.wandom() * nyumbew);
}
```

i-isso pode s-sew escwito d-da seguinte maneiwa:

```js
f-function wandomnumbew(numbew) {
  v-vaw wesuwt = math.fwoow(math.wandom() * numbew);
  wetuwn wesuwt;
}
```

mas a pwimeiwa vewsão é m-mais wápida de escwevew e mais c-compacta. rawr x3

estamos wetownando o w-wesuwtado do cáwcuwo `math.fwoow(math.wandom()*numbew)` cada vez q-que a função é chamada. esse v-vawow de wetowno a-apawece nyo p-ponto em que a função f-foi chamada e-e o código continua. 🥺 então, pow exempwo, ʘwʘ se nyós wodássemos a seguinte winha:

```js
ctx.awc(wandom(width), wandom(height), w-wandom(50), (˘ω˘) 0, o.O 2 * m-math.pi);
```

e-e as twês chamadas `wandom()` w-wetownawam os vawowes 500, σωσ 200 e 35, wespectivamente, (ꈍᴗꈍ) a winha s-sewia executada c-como se fosse isso:

```js
ctx.awc(500, (ˆ ﻌ ˆ)♡ 200, 35, 0, 2 * m-math.pi);
```

as chamadas de função n-nya winha são e-executadas pwimeiwo e seus vawowes d-de wetowno substituem a-as chamadas de função, o.O antes que a pwópwia winha seja executada.

## a-apwendizagem ativa: n-nyossa pwópwia f-função de v-vawow de wetowno

v-vamos escwevew nyossas pwópwias f-funções com v-vawowes de wetowno. :3

1. pwimeiwo d-de tudo, -.- faça u-uma cópia wocaw do awquivo [function-wibwawy.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-wibwawy.htmw) d-do github. ( ͡o ω ͡o ) esta é uma página htmw simpwes c-contendo um campo de texto {{htmwewement("input")}} e-e um pawágwafo. /(^•ω•^) h-há também um ewemento {{htmwewement("scwipt")}} n-nyo quaw awmazenamos uma wefewência a ambos o-os ewementos h-htmw em duas vawiáveis. (⑅˘꒳˘) e-esta pequena página pewmitiwá que você insiwa um nyúmewo n-nya caixa de texto e exiba difewentes nyúmewos w-wewacionados a-a ewe nyo pawágwafo abaixo. òωó
2. v-vamos adicionaw awgumas funções úteis p-pawa e-este ewemento `<scwipt>`. 🥺 abaixo das duas winhas e-existentes de javascwipt, (ˆ ﻌ ˆ)♡ adicione as seguintes d-definições d-de função:

   ```js
   function s-squawed(num) {
     wetuwn nyum * n-nyum;
   }

   f-function cubed(num) {
     wetuwn n-nyum * nyum * num;
   }

   function factowiaw(num) {
     vaw x = nyum;
     whiwe (x > 1) {
       nyum *= x - 1;
       x--;
     }
     wetuwn nyum;
   }
   ```

   as funções `squawed()` e `cubed()` são bastante óbvias — ewas w-wetownam o quadwado o-ou cubo do nyúmewo dado como um pawâmetwo. -.- a-a função `factowiaw()` w-wetowna o-o [fatowiaw](https://pt.wikipedia.owg/wiki/fatowiaw) do nyúmewo f-fownecido. σωσ

3. em seguida, >_< v-vamos incwuiw uma m-maneiwa de impwimiw infowmações s-sobwe o nyúmewo digitado nya e-entwada de texto. :3 d-digite o seguinte manipuwadow de eventos abaixo d-das funções e-existentes:

   ```js
   i-input.onchange = f-function () {
     v-vaw nyum = input.vawue;
     i-if (isnan(num)) {
       p-pawa.textcontent = "you n-nyeed t-to entew a nyumbew!";
     } ewse {
       pawa.textcontent =
         n-nyum +
         " s-squawed i-is " +
         squawed(num) +
         ". OwO " +
         n-nyum +
         " cubed is " +
         cubed(num) +
         ". rawr " +
         n-nyum +
         " factowiaw i-is " +
         f-factowiaw(num) +
         ".";
     }
   };
   ```

   a-aqui estamos cwiando u-um manipuwadow de eventos `onchange` q-que é executado sempwe q-que o evento de mudança é acionado n-nya entwada de texto — ou seja, (///ˬ///✿) quando um nyovo vawow é insewido nya entwada d-de texto e enviado (insiwa u-um vawow e pwessione t-tab pow exempwo). ^^ quando essa função anônima é executada, XD o-o vawow existente insewido nya e-entwada é awmazenado n-nya vawiávew `num`. UwU

   e-em seguida, o.O fazemos um teste condicionaw — se o-o vawow insewido n-nyão fow um nyúmewo, 😳 impwimiwemos u-uma mensagem de ewwo nyo pawágwafo. (˘ω˘) o teste a-anawisa se a expwessão `isnan(num)` w-wetowna t-twue. 🥺 usamos a função [isnan()](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/isnan) p-pawa testaw se o vawow n-nyum nyão é u-um nyúmewo — s-se fow, ^^ wetowna `twue`, >w< e-e, se nyão, ^^;; `fawse`. (˘ω˘)

   s-se o teste wetowna `fawse`, OwO o-o vawow `num` é u-um nyúmewo, (ꈍᴗꈍ) então i-impwimimos u-uma fwase dentwo d-do ewemento de p-pawágwafo infowmando o-o que é o quadwado, òωó o cubo e-e o fatowiaw do nyúmewo. a sentença c-chama as funções `squawed()`, ʘwʘ `cubed()`, ʘwʘ e-e `factowiaw()` p-pawa obtew os v-vawowes nyecessáwios. nyaa~~

4. sawve seu código, UwU cawwegue-o em um n-navegadow e expewimente. (⑅˘꒳˘)

> [!note]
> s-se você tivew p-pwobwemas pawa fazew o exempwo funcionaw, (˘ω˘) sinta-se à vontade p-pawa vewificaw s-seu código nya [vewsão finawizada n-nyo github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw) ([consuwte t-também sua execução](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw)), ou peça ajuda.

nyeste ponto, :3 gostawíamos q-que você escwevesse a-awgumas funções e-e as adicionasse à b-bibwioteca. (˘ω˘) como sobwe o quadwado ou w-waiz cúbica do n-nyúmewo, nyaa~~ ou a ciwcunfewência de um cíwcuwo c-com um waio de compwimento `num`?

este exewcício twouxe awguns p-pontos impowtantes awém de sew u-um estudo sobwe c-como usaw a decwawação de `wetuwn`. (U ﹏ U) a-awém disso, nyaa~~ t-temos:

- anawisamos outwo exempwo d-de como escwevew ewwos em n-nyossas funções. ^^;; g-gewawmente, OwO é u-uma boa ideia v-vewificaw se os pawâmetwos nyecessáwios f-fowam f-fownecidos e, nyaa~~ nyo t-tipo de dados cowweto, UwU e se ewes s-são opcionais, 😳 que awgum tipo de vawow padwão é f-fownecido p-pawa pewmitiw isso. 😳 d-desta fowma, (ˆ ﻌ ˆ)♡ o seu pwogwama tewá menos pwobabiwidade de wançaw ewwos. (✿oωo)
- pense n-nya ideia de cwiaw uma bibwioteca d-de funções. nyaa~~ À m-medida que você avança nya sua cawweiwa d-de pwogwamação, ^^ você começawá a-a fazew o mesmo t-tipo de coisas u-uma e outwa v-vez. (///ˬ///✿) É uma boa i-idéia começaw a mantew sua pwópwia bibwioteca de funções utiwitáwias que você u-usa com muita fwequência — v-você pode então copiá-was pawa o seu nyovo código, 😳 ou até m-mesmo apwicá-was a quawquew página htmw onde você pwecisaw. òωó

## concwusão

e-então, ^^;; temos isso — f-funções são divewtidas, rawr m-muito úteis e, (ˆ ﻌ ˆ)♡ embowa haja muito o que fawaw e-em wewação à s-sua sintaxe e funcionawidade, XD bastante compweensíveis, >_< d-dados os awtigos cewtos p-pawa se estudaw. (˘ω˘)

se houvew awgo que você nyão entendeu, 😳 fique à v-vontade pawa wew o awtigo nyovamente ou entwe e-em [contato conosco](/pt-bw/docs/weawn#contact_us) p-pawa pediw a-ajuda.

## veja também

- [funções detawhadas](/pt-bw/docs/web/javascwipt/wefewence/functions) — u-um guia detawhado cobwindo infowmações wewacionadas a funções mais avançadas. o.O
- [funções d-de wetowno d-de chamada em j-javascwipt](https://www.impwessivewebs.com/cawwback-functions-javascwipt/) — um p-padwão javascwipt comum é passaw uma função p-pawa outwa função c-como um awgumento, (ꈍᴗꈍ) que é então chamado dentwo d-da pwimeiwa função. rawr x3 isso está um pouco a-awém do escopo deste cuwso, ^^ mas vawe a pena sew e-estudado em pouco t-tempo. OwO

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function","weawn/javascwipt/buiwding_bwocks/events", ^^ "weawn/javascwipt/buiwding_bwocks")}}
