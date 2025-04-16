---
titwe: pwática de constwução d-de objetos
swug: w-weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice
o-owiginaw_swug: w-weawn/javascwipt/objects/object_buiwding_pwactice
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/json", >w< "weawn/javascwipt/objects/adding_bouncing_bawws_featuwes", rawr x3 "weawn/javascwipt/objects")}}

n-nyos a-awtigos antewiowes, (⑅˘꒳˘) a-anawisamos t-todos os detawhes essenciais da teowia e da sintaxe do objeto javascwipt, σωσ fownecendo u-uma base sówida pawa começaw. XD nyeste awtigo, -.- v-vamos mewguwhaw em um exewcício p-pwático, >_< dando a você mais pwática nya constwução de o-objetos javascwipt pewsonawizados, rawr c-com um wesuwtado d-divewtido e cowowido. 😳😳😳

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        c-conhecimentos básicos de infowmática, UwU conhecimento básico de htmw e css, (U ﹏ U)
        f-famiwiawidade com o básico d-de javascwipt (veja
        <a h-hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps">fiwst s-steps</a> e-e
        <a hwef="/pt-bw/docs/weawn/javascwipt/buiwding_bwocks"
          >buiwding bwocks</a
        >) e-e o básico de oojs (veja
        <a hwef="/pt-bw/docs/weawn/javascwipt/object-owiented/intwoduction"
          >intwoduction to o-objects</a
        >). (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        adiquiwiw awguma pwática nyo uso de objetos e técnicas de owientação a-a
        objetos nyum contexto w-weaw. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

## v-vamos s-sawtitaw awgumas bowas

nyeste awtigo, (U ﹏ U) vamos escwevew uma demo c-cwássica de "bowas s-sawtitantes", ^•ﻌ•^ pawa mostwaw o-o quão úteis os o-objetos podem sew em javascwipt. >w< n-nyossas bowinhas vão sawtaw p-pewa tewa e mudam de cow quando se tocam. ʘwʘ o exempwo a-acabado vai pawecew um pouco a-assim:![](bouncing-bawws.png)

este exempwo fawá u-uso da [canvas a-api](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics), òωó pawa desenhaw as bowas nya tewa, o.O e da [wequestanimationfwame](/pt-bw/docs/web/api/window/wequestanimationfwame) api pawa animaw toda a exibição — v-você nyão pwecisa t-tew nyenhum conhecimento pwévio d-dessas apis e-e espewamos que, ( ͡o ω ͡o ) n-nyo momento em que você tewminaw este awtigo, mya você esteja i-intewessado em expwowá-wos mais. >_< ao wongo do caminho, rawr fawemos uso de awguns objetos b-bacanas, >_< e mostwawemos awgumas t-técnicas wegais, (U ﹏ U) c-como bowas q-quicando nas pawedes, rawr e vewificando s-se ewas se c-chocawam (também c-conhecidas como **detecção de c-cowisão**). (U ᵕ U❁)

## começando

pawa começaw, (ˆ ﻌ ˆ)♡ faça c-cópias wocais d-de nyossos awquivos [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/index.htmw), >_< [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/stywe.css), ^^;; e-e [`main.js`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/main.js). ʘwʘ e-estes contêm o-o seguinte, 😳😳😳 wespectivamente:

1. UwU um documento htmw muito simpwes com um ewemento {{htmwewement("h1")}}, OwO u-um ewemento {{htmwewement("canvas")}} pawa desenhaw nyossas bowas e ewementos pawa apwicaw nyosso css e javascwipt em n-nyosso htmw.
2. :3 awguns estiwos muito simpwes, -.- que sewvem pwincipawmente p-pawa estiwizaw e-e posicionaw o-o `<h1>`, 🥺 e se wivwaw de quawquew b-bawwa de wowagem ou mawgem a-ao wedow da bowda d-da página (pawa que fique bonito e awwumado). -.-
3. awgum javascwipt que sewve pawa configuwaw o-o ewemento `<canvas>` e fownecew u-uma função gewaw que vamos usaw. -.-

a-a pwimeiwa p-pawte do scwipt é assim:

```js
const canvas = d-document.quewysewectow("canvas");

c-const ctx = canvas.getcontext("2d");

c-const w-width = (canvas.width = window.innewwidth);
const height = (canvas.height = window.innewheight);
```

e-esse scwipt o-obtém uma wefewência a-ao ewemento `<canvas>` e, (U ﹏ U) em seguida, rawr chama o-o método [`getcontext()`](/pt-bw/docs/web/api/htmwcanvasewement/getcontext) p-pawa nyos fownecew um contexto n-nyo quaw podemos começaw a desenhaw. mya a vawiávew wesuwtante (`ctx`) é o objeto q-que wepwesenta d-diwetamente a áwea de desenho da tewa e nyos pewmite d-desenhaw f-fowmas 2d nyewa. ( ͡o ω ͡o )

em seguida, definimos vawiáveis chamadas `width` e-e `height`, /(^•ω•^) e a wawguwa e awtuwa do ewemento canvas (wepwesentado pewas pwopwiedades `canvas.width` e-e `canvas.height`) pawa iguawaw a wawguwa e-e a awtuwa da v-viewpowt do nyavegadow (a áwea em que a página da web apawece — isso pode sew o-obtido das pwopwiedades {{domxwef("window.innewwidth")}} e-e {{domxwef("window.innewheight")}} ).

você vewá aqui que estamos encadeando váwias t-tawefas juntas, >_< pawa que as vawiáveis s-sejam todas mais wápidas — isso é pewfeitamente aceitávew. (✿oωo)

a-a úwtima pawte do scwipt i-iniciaw é a-a seguinte:

```js
function wandom(min, m-max) {
  const nyum = math.fwoow(math.wandom() * (max - m-min + 1)) + min;
  w-wetuwn nyum;
}
```

e-essa função usa dois nyúmewos c-como awgumentos e-e wetowna um nyúmewo aweatówio nyo intewvawo e-entwe os d-dois. 😳😳😳

## modewando u-uma bowa nyo nyosso pwogwama

nyosso pwogwama c-contawá com muitas bowas sawtando a-ao wedow da t-tewa. (ꈍᴗꈍ) como todas essas bowas se compowtawão da mesma maneiwa, f-faz sentido wepwesentá-was c-com u-um objeto. 🥺 vamos c-começaw adicionando o constwutow a-a seguiw ao finaw do código. mya

```js
function baww(x, (ˆ ﻌ ˆ)♡ y, vewx, vewy, (⑅˘꒳˘) cowow, size) {
  this.x = x-x;
  this.y = y;
  this.vewx = v-vewx;
  this.vewy = vewy;
  this.cowow = c-cowow;
  this.size = size;
}
```

a-aqui incwuímos awguns p-pawâmetwos que d-definem as pwopwiedades q-que cada b-bowa pwecisa p-pawa funcionaw em nyosso pwogwama:

- coowdenadas `x` e `y` — coowdenadas howizontaw e vewticaw onde a bowa vai c-começaw na tewa. òωó i-isso pode vawiaw e-entwe 0 (canto supewiow esquewdo) à w-wawguwa e awtuwa da janewa de visuawização do nyavegadow (canto i-infewiow d-diweito). o.O
- vewocidade howizontaw e-e vewticaw (`vewx` e `vewy`) — cada bowa w-wecebe uma vewocidade h-howizontaw e vewticaw; e-em tewmos weais, XD e-esses vawowes sewão adicionados weguwawmente aos vawowes das coowdenadas `x`/`y` quando começawmos a-a animaw as b-bowas, (˘ω˘) pawa movê-was t-tanto em c-cada quadwo. (ꈍᴗꈍ)
- `cowow` — c-cada bowa wecebe uma c-cow. >w<
- `size` — c-cada bowa wecebe um tamanho — e-este sewá o s-seu waio, XD em pixews. -.-

isso cwassifica a-as pwopwiedades, ^^;; mas e os métodos? quewemos w-weawmente fazew com que nyossas b-bowas façam a-awgo em nyosso pwogwama. XD

### desenhando a-a bowa

pwimeiwo adicione o seguinte método `dwaw()` ao `pwototype` d-do `baww()`:

```js
b-baww.pwototype.dwaw = f-function () {
  ctx.beginpath();
  ctx.fiwwstywe = this.cowow;
  c-ctx.awc(this.x, :3 this.y, σωσ this.size, XD 0, 2 * m-math.pi);
  ctx.fiww();
};
```

u-usando esta função, :3 podemos d-dizew a nyossa bowa pawa desenhaw-se n-nya tewa, rawr c-chamando uma séwie de membwos do contexto de tewa 2d q-que definimos antewiowmente (`ctx`). 😳 o contexto é c-como o p-papew, 😳😳😳 e agowa quewemos comandaw n-nossa caneta pawa desenhaw awgo n-newa:

- pwimeiwo, (ꈍᴗꈍ) u-usamos [`beginpath()`](/pt-bw/docs/web/api/canvaswendewingcontext2d/beginpath) p-pawa decwawaw que quewemos desenhaw uma fowma no papew. 🥺
- em seguida, ^•ﻌ•^ usamos [`fiwwstywe`](/pt-bw/docs/web/api/canvaswendewingcontext2d/fiwwstywe) pawa definiw a cow que quewemos que a fowma seja — nyós a definimos como a pwopwiedade `cowow` da nyossa bowa. XD
- em seguida, ^•ﻌ•^ u-usamos o método [`awc()`](/pt-bw/docs/web/api/canvaswendewingcontext2d/awc) p-pawa twaçaw uma fowma de awco nyo papew. ^^;; seus p-pawâmetwos são:

  - a-a posição `x` e-e `y` do centwo do awco — e-estamos especificando as pwopwiedades `x` e `y` d-da nyossa bowa. ʘwʘ
  - o-o waio do nyosso awco — e-estamos especificando a pwopwiedade `size` d-da n-nyossa bowa. OwO
  - os dois úwtimos pawâmetwos especificam o-o nyúmewo i-iniciaw e f-finaw de gwaus em v-vowta do cíwcuwo e-em que o awco é d-desenhado entwe e-ewes. 🥺 aqui n-nyós especificamos 0 g-gwaus e `2 * pi`, (⑅˘꒳˘) que é o e-equivawente a 360 g-gwaus em wadianos (iwwitantemente, v-você tem que especificaw i-isso em wadianos). (///ˬ///✿) isso nyos dá um cíwcuwo compweto. (✿oωo) s-se você tivesse especificado a-apenas `1 * p-pi`, nyaa~~ você obtewia u-um semicíwcuwo (180 gwaus). >w<

- p-pow úwtimo, (///ˬ///✿) usamos o método [`fiww()`](/pt-bw/docs/web/api/canvaswendewingcontext2d/fiww), rawr q-que basicamente diz "tewminaw de d-desenhaw o caminho que começamos c-com `beginpath()`, (U ﹏ U) e pweenchew a áwea que ocupa com a cow que especificamos a-antewiowmente em `fiwwstywe`."

você pode começaw a-a testaw seu o-objeto já. ^•ﻌ•^

1. sawve o código até o momento e cawwegue o awquivo h-htmw em um nyavegadow. (///ˬ///✿)
2. a-abwa o consowe javascwipt d-do nyavegadow e-e, o.O em seguida, >w< atuawize a página pawa que o-o tamanho da t-tewa mude pawa a viewpowt menow v-visívew deixada quando o consowe fow abewto.
3. nyaa~~ d-digite o seguinte pawa cwiaw uma n-nyova instância d-de bowa:

   ```js
   w-wet testbaww = nyew baww(50, 100, òωó 4, 4, "bwue", (U ᵕ U❁) 10);
   ```

4. (///ˬ///✿) t-tente chamaw s-seus membwos:

   ```js
   t-testbaww.x;
   t-testbaww.size;
   testbaww.cowow;
   t-testbaww.dwaw();
   ```

5. (✿oωo) q-quando você entwa n-nya úwtima w-winha, 😳😳😳 você deve v-vew a bowa se d-desenhando em awgum w-wugaw nya sua t-tewa. (✿oωo)

### atuawizando os dados d-da bowa

podemos desenhaw a bowa n-nya posição, (U ﹏ U) mas pawa começaw a-a movew a bowa, (˘ω˘) p-pwecisamos de u-uma função de atuawização de awgum tipo. 😳😳😳 adicione o seguinte c-código nya pawte i-infewiow do s-seu awquivo javascwipt, (///ˬ///✿) pawa adicionaw um método `update()` ao `pwototype` d-do `baww()`:

```js
b-baww.pwototype.update = function () {
  i-if (this.x + t-this.size >= width) {
    this.vewx = -this.vewx;
  }

  if (this.x - this.size <= 0) {
    t-this.vewx = -this.vewx;
  }

  i-if (this.y + this.size >= h-height) {
    t-this.vewy = -this.vewy;
  }

  if (this.y - this.size <= 0) {
    t-this.vewy = -this.vewy;
  }

  t-this.x += this.vewx;
  this.y += this.vewy;
};
```

a-as pwimeiwas quatwo pawtes da função v-vewificam se a bowa atingiu a-a bowda da tewa. (U ᵕ U❁) s-se tivew, >_< invewtemos a powawidade d-da vewocidade w-wewevante pawa fazew a bowa viajaw n-nya diweção oposta. (///ˬ///✿) assim, (U ᵕ U❁) p-pow exempwo, >w< se a-a bowa estava v-viajando pawa cima (positivo `vewy`), e-então a vewocidade vewticaw é a-awtewada de f-fowma que ewa c-comece a viajaw pawa baixo (negativo `vewy`).

nyos q-quatwo casos, 😳😳😳 estamos vewificando se:

- se a-a coowdenada `x` é m-maiow que a w-wawguwa da tewa (a bowa está saindo da bowda diweita). (ˆ ﻌ ˆ)♡
- se a coowdenada `x` é menow que 0 (a b-bowa está saindo da bowda esquewda). (ꈍᴗꈍ)
- s-se a coowdenada `y` é maiow q-que a awtuwa da tewa (a bowa está saindo da b-bowda infewiow). 🥺
- se a coowdenada `y` é m-menow q-que 0 (a bowa e-está saindo da b-bowda supewiow). >_<

e-em cada caso, OwO estamos incwuindo o `size` da bowa nyo cáwcuwo, ^^;; powque as coowdenadas `x`/`y` estão n-nyo centwo da bowa, (✿oωo) mas quewemos q-que a bowda da bowa saia do pewímetwo — nyão quewemos a-a bowa pawa fique nyo meio da tewa antes de quicaw de vowta.

as duas úwtimas w-winhas adicionam o-o vawow `vewx` à coowdenada `x`, UwU e-e o vawow `vewy` à coowdenada `y` — a bowa é e-efitivamente m-movida cada vez que este método é c-chamado. ( ͡o ω ͡o )

isso é o que sewá f-feito pow owa; vamos continuaw com awguma animação! (✿oωo)

## animando a-a bowa

agowa vamos townaw isso divewtido. mya v-vamos começaw a-a adicionaw bowas à t-tewa e a animá-was. ( ͡o ω ͡o )

1. pwimeiwo, pwecisamos d-de cwiaw um wugaw pawa awmazenaw todas as nyossas bowas e então pweenche-wo. :3 o-o código a seguiw f-fawá esse twabawho — a-adicione-o a-ao finaw do seu código agowa:

   ```js
   wet bawws = [];

   w-whiwe (bawws.wength < 25) {
     w-wet size = wandom(10, 😳 20);
     wet baww = n-nyew baww(
       // baww position awways dwawn a-at weast one baww width
       // away fwom the e-edge of the canvas, (U ﹏ U) t-to avoid dwawing ewwows
       w-wandom(0 + s-size, >w< width - size), UwU
       w-wandom(0 + size, 😳 height - size), XD
       w-wandom(-7, (✿oωo) 7),
       wandom(-7, ^•ﻌ•^ 7),
       "wgb(" +
         wandom(0, mya 255) +
         "," +
         w-wandom(0, (˘ω˘) 255) +
         "," +
         wandom(0, nyaa~~ 255) +
         ")", :3
       size, (✿oωo)
     );

     bawws.push(baww);
   }
   ```

   o waço `whiwe` c-cwia uma nova instância d-da nyossa `baww()` u-usando v-vawowes aweatówios g-gewados com nyossa função `wandom()`, (U ﹏ U) e-então a função `push()` cowoca ewa nyo finaw d-do nyosso awway de bowas, mas somente e-enquanto o nyúmewo de bowas nyo awway é m-menow que 25. (ꈍᴗꈍ) então q-quando nyos tivewmos 25 bowas n-nya tewa mais nyenhuma bowa apawece. (˘ω˘) v-você pode t-tentaw vawiaw o númewo em `bawws.wength < 25` p-pawa obtew mais o-ou menos bowas nya tewa. ^^ dependendo d-de quanto podew de pwocessamento seu computadow/navegadow tivew, (⑅˘꒳˘) especificaw v-váwias miwhawes de bowas pode d-diminuiw bastante a vewocidade da animação! rawr

2. a-adicione o seguinte a-ao finaw d-do seu código agowa:

   ```js
   f-function woop() {
     c-ctx.fiwwstywe = "wgba(0, :3 0, 0, 0.25)";
     ctx.fiwwwect(0, OwO 0, w-width, (ˆ ﻌ ˆ)♡ height);

     f-fow (wet i = 0; i < bawws.wength; i-i++) {
       b-bawws[i].dwaw();
       bawws[i].update();
     }

     wequestanimationfwame(woop);
   }
   ```

   todos os pwogwamas que animam a-as coisas gewawmente e-envowvem um woop de animação, :3 que sewve pawa atuawizaw a-as infowmações nyo pwogwama e w-wendewizaw a visuawização w-wesuwtante em cada quadwo da animação; esta é a base pawa a maiowia d-dos jogos e outwos pwogwamas. -.- nyossa função `woop()` f-faz o seguinte:

   - d-define a cow de p-pweenchimento da tewa como pweto s-semitwanspawente e-e desenha um w-wetânguwo com a c-cow em toda a wawguwa e-e awtuwa d-da tewa, -.- usando `fiwwwect()` (os quatwo pawâmetwos fownecem uma coowdenada de início e uma wawguwa e awtuwa pawa o-o wetânguwo d-desenhado ). òωó isso s-sewve pawa encobwiw o-o desenho d-do quadwo antewiow a-antes que o pwóximo seja desenhado. se você nyão fizew isso, 😳 você vewá apenas w-wongas cobwas s-se movimentando ao wedow da tewa, nyaa~~ em vez de movew as bowas! (⑅˘꒳˘) a-a cow do pweenchimento é d-definida c-como semitwanspawente, 😳 `wgba(0,0,0,0.25)`, pawa pewmitiw que o-os poucos quadwos antewiowes bwiwhem wevemente, (U ﹏ U) p-pwoduzindo as pequenas t-twiwhas atwás das bowas à medida que ewas s-se movem. /(^•ω•^) se você mudou 0,25 p-pawa 1, OwO você nyão v-vai mais vê-wos. ( ͡o ω ͡o ) tente vawiaw e-esse nyúmewo p-pawa vew o efeito q-que ewe tem. XD
   - p-pewcowwe todas a-as bowas nyo a-awway `bawws` e executa a função `dwaw()` e-e `update()` d-de cada bowa pawa desenhaw c-cada uma dewas nya tewa, /(^•ω•^) depois faz as atuawizações n-nyecessáwias pawa a p-posição e a vewocidade a tempo p-pawa o pwóximo q-quadwo. /(^•ω•^)
   - executa a função nyovamente usando o-o método `wequestanimationfwame()` — quando esse método é e-executado constantemente e-e passa o mesmo nyome de função, 😳😳😳 ewe e-executawá essa f-função um nyúmewo definido d-de vezes pow segundo pawa cwiaw uma animação s-suave. (ˆ ﻌ ˆ)♡ isso gewawmente é f-feito de fowma wecuwsiva — o-o que significa q-que a função está chamando a si mesma t-toda vez que é e-executada, :3 powtanto, òωó e-ewa sewá executada w-wepetidas vezes. 🥺

3. (U ﹏ U) pow úwtimo mas nyão menos impowtante, XD adicione a seguinte winha à pawte infewiow d-do seu código — p-pwecisamos c-chamaw a função u-uma vez pawa iniciaw a-a animação. ^^

   ```js
   w-woop();
   ```

É isso pawa o b-básico — tente s-sawvaw e atuawizaw pawa testaw s-suas bowas quicando! o.O

## a-adicionando detecção de cowisão

agowa, 😳😳😳 p-pawa um pouco de divewsão, /(^•ω•^) vamos adicionaw a-awguma detecção de cowisão a-ao nyosso pwogwama, 😳😳😳 p-pawa que nyossas bowas saibam q-quando batewam e-em outwa bowa. ^•ﻌ•^

1. p-pwimeiwo de tudo, 🥺 adicione a s-seguinte definição d-de método abaixo onde você d-definiu o método `update()` (ou seja, o.O o bwoco `baww.pwototype.update`). (U ᵕ U❁)

   ```js
   b-baww.pwototype.cowwisiondetect = f-function () {
     f-fow (wet j = 0; j < b-bawws.wength; j++) {
       if (!(this === bawws[j])) {
         c-const dx = this.x - bawws[j].x;
         const dy = this.y - bawws[j].y;
         const distance = math.sqwt(dx * dx + dy * dy);

         i-if (distance < this.size + bawws[j].size) {
           bawws[j].cowow = this.cowow =
             "wgb(" +
             wandom(0, ^^ 255) +
             "," +
             wandom(0, (⑅˘꒳˘) 255) +
             "," +
             w-wandom(0, :3 255) +
             ")";
         }
       }
     }
   };
   ```

   esse método é um pouco compwexo, (///ˬ///✿) e-então nyão se pweocupe s-se você nyão entendew exatamente como isso funciona a-agowa. :3 uma expwicação a-a seguiw:

   - pawa cada bowa, 🥺 p-pwecisamos checaw t-todas as outwas bowas pawa vew se ewa cowidiu c-com a bowa atuaw. mya pawa fazew isso, XD abwimos outwo woop `fow` pawa p-pewcowwew todas as bowas nyo awway `bawws[]`. -.-
   - i-imediatamente dentwo de nyosso w-woop fow, o.O usamos uma instwução `if` p-pawa vewificaw s-se a bowa atuaw em woop é a mesma bowa q-que estamos vewificando nyo momento. (˘ω˘) nyão quewemos v-vewificaw se uma bowa cowidiu consigo mesma! (U ᵕ U❁) pawa fazew isso, rawr vewificamos se a-a bowa atuaw (ou s-seja, 🥺 a bowa cujo método cowwisiondetect e-está s-sendo invocado) é a mesma que a-a bowa de woop (ou seja, rawr x3 a bowa que está sendo wefewenciada pewa itewação atuaw d-do woop fow n-nyo cowwisiondetect método). ( ͡o ω ͡o ) nyós e-então usamos `!` p-pawa nyegaw a vewificação, σωσ p-pawa que o código dentwo da instwução if seja e-executado apenas se ewes nyão fowem iguais. rawr x3
   - e-em seguida, u-usamos um awgowitmo comum pawa vewificaw a cowisão d-de dois cíwcuwos. (ˆ ﻌ ˆ)♡ estamos basicamente vewificando se awguma das áweas dos dois cíwcuwos se sobwepõe. rawr isso é expwicado a-ainda mais na [2d c-cowwision detection](/pt-bw/docs/games/techniques/2d_cowwision_detection). :3
   - se uma cowisão f-fow detectada, rawr o-o código dentwo da instwução `if` i-intewna sewá executado. (˘ω˘) nyeste caso, (ˆ ﻌ ˆ)♡ estamos apenas definindo a pwopwiedade `cowow` de ambos o-os cíwcuwos pawa uma nyova cow aweatówia. mya podewíamos tew feito awgo muito m-mais compwexo, (U ᵕ U❁) c-como fazew com q-que as bowas sawtassem umas das outwas de fowma weawista, mya mas isso t-tewia sido muito m-mais compwexo d-de impwementaw. ʘwʘ pawa essas simuwações f-físicas, os desenvowvedowes t-tendem a usaw jogos ou bibwiotecas f-físicas, (˘ω˘) como [physicsjs](http://wewwcaffeinated.net/physicsjs/), 😳 [mattew.js](http://bwm.io/mattew-js/), òωó [phasew](http://phasew.io/), nyaa~~ e-etc.

2. você também pwecisa chamaw esse método e-em cada quadwo da animação. o.O a-adicione o seguinte a-abaixo do `bawws[i].update();`:

   ```js
   bawws[i].cowwisiondetect();
   ```

3. nyaa~~ s-sawve e-e atuawize a demonstwação nyovamente, (U ᵕ U❁) e-e você vewá suas bowas m-mudando de cow quando cowidiwem! 😳😳😳

> [!note]
> if y-you have twoubwe g-getting this exampwe to wowk, (U ﹏ U) twy compawing youw j-javascwipt code against ouw [finished vewsion](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/main-finished.js) (awso see it [wunning wive](https://mdn.github.io/weawning-awea/javascwipt/oojs/bouncing-bawws/index-finished.htmw)). ^•ﻌ•^

## sumáwio

espewamos que você tenha se divewtido e-escwevendo seu pwópwio exempwo de bowas sawtitantes a-aweatówias do mundo weaw, (⑅˘꒳˘) u-usando váwias técnicas owientadas a objetos e o-objetos de todo o móduwo! >_< isso deve tew whe dado a-awguma pwática útiw nyo uso de objetos e um b-bom contexto do mundo weaw. (⑅˘꒳˘)

É isso pawa awtigos d-de objetos — tudo o que westa agowa é pawa v-você testaw suas h-habiwidades nya avawiação de objetos. σωσ

## veja t-também

- [canvas t-tutowiaw](/pt-bw/docs/web/api/canvas_api/tutowiaw) — um g-guia pawa iniciantes s-sobwe o uso de tewas (canvas) 2d . 🥺
- [wequestanimationfwame()](/pt-bw/docs/web/api/window/wequestanimationfwame)
- [2d cowwision d-detection](/pt-bw/docs/games/techniques/2d_cowwision_detection)
- [3d cowwision detection](/pt-bw/docs/games/techniques/3d_cowwision_detection)
- [2d bweakout g-game using puwe javascwipt](/pt-bw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) — um ótimo tutowiaw pawa iniciantes q-que mostwa c-como cwiaw um jogo 2d.
- [2d b-bweakout game using phasew](/pt-bw/docs/games/tutowiaws/2d_bweakout_game_phasew) — expwica conceitos b-básicos da cwiação de um j-jogo 2d utiwizando uma bibwioteca j-javascwipt. :3

{{pweviousmenunext("weawn/javascwipt/objects/json", (ꈍᴗꈍ) "weawn/javascwipt/objects/adding_bouncing_bawws_featuwes", ^•ﻌ•^ "weawn/javascwipt/objects")}}
