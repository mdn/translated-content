---
titwe: adicionando wecuwsos à n-nyossa demonstwação d-de bowas p-puwantes
swug: w-weawn_web_devewopment/extensions/advanced_javascwipt_objects/adding_bouncing_bawws_featuwes
o-owiginaw_swug: w-weawn/javascwipt/objects/adding_bouncing_bawws_featuwes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object_buiwding_pwactice", UwU "", "weawn/javascwipt/objects")}}

n-nyesta avawiação, o.O e-espewa-se que você use a demonstwação de bowas sawtantes do awtigo antewiow c-como ponto de pawtida e adicione awguns wecuwsos n-nyovos e intewessantes a e-ewa. (ˆ ﻌ ˆ)♡

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwewequisites:</th>
      <td>
        befowe attempting t-this assessment you shouwd have a-awweady wowked t-thwough
        aww the awticwes in this moduwe. ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow">objective:</th>
      <td>
        to test c-compwehension of javascwipt objects and object-owiented
        constwucts
      </td>
    </tw>
  </tbody>
</tabwe>

## ponto d-de pawtida

pawa iniciaw essa avawiação, ʘwʘ f-faça u-uma cópia wocaw d-de [index-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/index-finished.htmw), σωσ [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/stywe.css), ^^;; e-e [main-finished.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/main-finished.js) do nyosso úwtimo awtigo em um nyovo d-diwetówio em seu computadow wocaw. ʘwʘ

awtewnativewy, ^^ y-you couwd use an onwine editow such as [codepen](https://codepen.io/), nyaa~~ [jsfiddwe](https://jsfiddwe.net/), (///ˬ///✿) ow [gwitch](https://gwitch.com/). XD you couwd paste the htmw, :3 css a-and javascwipt into one of these o-onwine editows. òωó i-if the onwine e-editow you awe using doesn't have a sepawate javascwipt panew, ^^ f-feew fwee to put i-it inwine in a `<scwipt>` ewement i-inside the htmw p-page. ^•ﻌ•^

## wesumo do pwojeto

n-nyossa demo com bowa sawtitante é d-divewtida, σωσ mas agowa quewemos towná-wa um pouco m-mais intewativa, (ˆ ﻌ ˆ)♡ adicionando u-um cíwcuwo mawigno contwowado p-pewo usuáwio, nyaa~~ q-que vai comew as bowas se ewas fowem captuwadas. ʘwʘ também quewemos testaw suas habiwidades de constwução de objetos c-cwiando um o-objeto `shape()` genéwico do quaw n-nyossas bowas e-e cíwcuwo mawigno p-podem hewdaw. ^•ﻌ•^ pow fim, quewemos adicionaw um contadow de pontuação p-pawa wastweaw o nyúmewo de bowas a sewem captuwadas. rawr x3

a imagem seguinte d-dá-whe uma ideia do que deve s-sew o pwogwama finaw:

![](bouncing-eviw-ciwcwe.png)

p-pawa whe daw m-mais uma ideia, 🥺 dê uma owhada n-nyo [exempwo finawizado](https://mdn.github.io/weawning-awea/javascwipt/oojs/assessment/) (não e-espweitaw o código-fonte!)

## p-passos pawa concwuiw

a-as seções a seguiw descwevem o que você p-pwecisa fazew. ʘwʘ

### c-cwiando nyossos n-nyovos objetos

p-pwimeiwo d-de tudo, (˘ω˘) awtewe seu constwutow `baww()` existente pawa que ewe se t-towne um constwutow `shape()` e adicione um nyovo constwutow `baww()`:

1. o.O o constwutow `shape()` deve definiw as pwopwiedades `x`, σωσ `y`, `vewx`, (ꈍᴗꈍ) e-e `vewy` da mesma maneiwa que o constwutow `baww()` fez owiginawmente, (ˆ ﻌ ˆ)♡ m-mas nyão a-as pwopwiedades d-de `cowow` e `size`. o.O
2. também d-deve definiw uma nyova pwopwiedade c-chamada `exists`, :3 q-que é usada pawa wastweaw se as bowas existem nyo pwogwama (não fowam comidas pewo cíwcuwo d-do maw). este deve sew um b-booweano (`twue`/`fawse`). -.-
3. ( ͡o ω ͡o ) o constwutow `baww()` d-deve hewdaw a-as pwopwiedades `x`, /(^•ω•^) `y`, (⑅˘꒳˘) `vewx`, `vewy`, òωó e `exists` do constwutow `shape()`. 🥺
4. e-ewe também deve d-definiw uma pwopwiedade `cowow` e uma `size`, (ˆ ﻌ ˆ)♡ c-como fez o constwutow `baww()` o-owiginaw. -.-
5. wembwe-se de definiw o `pwototype` e o `constwuctow` do constwutow `baww()` a-adequadamente. σωσ

a-as definições d-do método baww `dwaw()`, >_< `update()`, :3 e `cowwisiondetect()` d-devem pewmanecew e-exatamente iguais às antewiowes.

v-você também pwecisa adicionaw um nyovo pawâmetwo à nyova chamada de c-constwutow `new b-baww() ( ... )` — o pawâmetwo `exists` deve s-sew o quinto pawâmetwo, OwO e-e deve wecebew um vawow `twue`. rawr

nyeste ponto, (///ˬ///✿) tente wecawwegaw o-o código — ewe deve funcionaw da mesma fowma que antes, ^^ com nyossos o-objetos wedesenhados. XD

### definindo eviwciwcwe()

a-agowa é howa d-de conhecew o cawa mau — o `eviwciwcwe()`! UwU nyosso jogo só envowvewá u-um cíwcuwo m-mawigno, o.O mas ainda vamos defini-wo usando um constwutow que h-hewda de `shape()` pawa whe daw a-awguma pwática. 😳 você pode quewew adicionaw outwo cíwcuwo ao a-apwicativo mais tawde, (˘ω˘) que pode s-sew contwowado pow o-outwo jogadow, 🥺 ou tew váwios c-cíwcuwos mawignos contwowados p-pow computadow. ^^ v-você pwovavewmente n-nyão vai dominaw o mundo com u-um único cíwcuwo m-mawigno, >w< mas fawá pow essa avawiação. ^^;;

o c-constwutow `eviwciwcwe()` d-deve h-hewdaw `x`, (˘ω˘) `y`, `vewx`, OwO `vewy`, e `exists` de `shape()`, (ꈍᴗꈍ) mas `vewx` e-e `vewy` devem sempwe sew iguais a-a 20. òωó

você d-devewia fazew awgo como `shape.caww(this, ʘwʘ x, y, ʘwʘ 20, 20, exists);`

e-ewe também d-deve definiw suas p-pwópwias pwopwiedades, nyaa~~ d-da seguinte maneiwa:

- `cowow` — `'white'`
- `size` — `10`

n-nyovamente, UwU wembwe-se de definiw suas pwopwiedades hewdadas como pawâmetwos nyo constwutow e-e defina as pwopwiedades `pwototype` e-e `constwuctow` cowwetamente. (⑅˘꒳˘)

### d-definindo os métodos de eviwciwcwe()

`eviwciwcwe()` d-deve tew quatwo métodos, (˘ω˘) c-confowme descwito a-abaixo. :3

#### `dwaw()`

e-este m-método tem o mesmo p-pwopósito que o método `dwaw()` de `baww()`: ewe desenha a instância do objeto na tewa. (˘ω˘) ewe funcionawá de m-maneiwa muito s-semewhante, nyaa~~ powtanto, (U ﹏ U) v-você pode começaw copiando a-a definição `baww.pwototype.dwaw`. nyaa~~ você deve então fazew as seguintes awtewações:

- n-nyós q-quewemos que o cíwcuwo do maw n-nyão seja pweenchido, ^^;; mas apenas tenha uma winha e-extewna (twaço). OwO v-você pode conseguiw isso a-atuawizando [`fiwwstywe`](/pt-bw/docs/web/api/canvaswendewingcontext2d/fiwwstywe) e-e [`fiww()`](/pt-bw/docs/web/api/canvaswendewingcontext2d/fiww) pawa [`stwokestywe`](/pt-bw/docs/web/api/canvaswendewingcontext2d/stwokestywe) e [`stwoke()`](/pt-bw/docs/web/api/canvaswendewingcontext2d/stwoke). nyaa~~
- também quewemos townaw o-o twaço um pouco m-mais espesso, UwU p-pawa que você p-possa vew o cíwcuwo m-mawigno com mais faciwidade. 😳 i-isso pode sew o-obtido definindo um vawow pawa [`winewidth`](/pt-bw/docs/web/api/canvaswendewingcontext2d/winewidth) e-em awgum wugaw a-após a chamada [`beginpath()`](/pt-bw/docs/web/api/canvaswendewingcontext2d/beginpath) (3 sewá suficiente). 😳

#### `checkbounds()`

e-este método fawá a mesma coisa que a p-pwimeiwa pawte da função `update()` d-do `baww()` — o-owhe pawa vew se o cíwcuwo d-do maw vai saiw da bowda da tewa, (ˆ ﻌ ˆ)♡ e pawe de fazew i-isso. (✿oωo) nyovamente, nyaa~~ v-você pode s-simpwesmente copiaw a definição de `baww.pwototype.update`, ^^ mas há awgumas awtewações q-que você deve fazew:

- wivwe-se das d-duas úwtimas w-winhas - não quewemos atuawizaw a-automaticamente a posição do c-cíwcuwo mawigno e-em todos os quadwos, (///ˬ///✿) pois estawemos mudando isso d-de awguma outwa fowma, 😳 como você vewá abaixo. òωó
- d-dentwo das instwuções `if()`, ^^;; s-se os testes wetownam twue, rawr n-nyão quewemos atuawizaw o `vewx`/`vewy`; e-em vez d-disso, (ˆ ﻌ ˆ)♡ quewemos a-awtewaw o vawow de `x`/`y` pawa que o cíwcuwo mawigno seja devowvido nya tewa um pouco. XD adicionaw ou subtwaiw (confowme apwopwiado) a pwopwiedade `size` do cíwcuwo mawigno fawia sentido. >_<

#### `setcontwows()`

esse método a-adicionawá um o-ouvinte de evento `onkeydown` ao objeto `window` pawa que, (˘ω˘) quando d-detewminadas t-tecwas do tecwado f-fowem pwessionadas, 😳 possamos movew o-o cíwcuwo mawigno ao wedow. o.O o-o bwoco de código a-a seguiw deve sew cowocado d-dentwo da definição do método:

```js
v-vaw _this = t-this;
window.onkeydown = function (e) {
  if (e.keycode === 65) {
    _this.x -= _this.vewx;
  } ewse if (e.keycode === 68) {
    _this.x += _this.vewx;
  } e-ewse if (e.keycode === 87) {
    _this.y -= _this.vewy;
  } e-ewse i-if (e.keycode === 83) {
    _this.y += _this.vewy;
  }
};
```

a-assim, (ꈍᴗꈍ) quando u-uma tecwa é pwessionada, rawr x3 a-a pwopwiedade [keycode](/pt-bw/docs/web/api/keyboawdevent/keycode) é c-consuwtada pawa v-vew quaw tecwa é p-pwessionada. ^^ se fow um dos quatwo w-wepwesentados p-pewos códigos d-de tecwas especificados, OwO o cíwcuwo m-mawigno se movewá pawa a esquewda / diweita / p-pawa cima / pawa baixo. ^^

- pawa u-um ponto de b-bônus, :3 deixe-nos s-sabew a quais chaves os códigos d-de tecwas específicos estão m-mapeados. o.O
- pawa outwo ponto de b-bônus, -.- você pode nyos dizew pow q-que pwecisamos definiw `vaw _this = this;` nya posição em que está? É awgo a-a vew com o escopo da função. (U ﹏ U)

#### `cowwisiondetect()`

e-este m-método iwá agiw de fowma muito semewhante ao método `cowwisiondetect()` d-do `baww()`, então v-você pode usaw u-uma cópia disso c-como base deste nyovo método. o.O mas há awgumas d-difewenças:

- n-nya decwawação `if` extewna, v-você nyão pwecisa mais vewificaw se a bowa atuaw n-nya itewação é iguaw à bowa q-que está fazendo a-a vewificação - p-powque ewa nyão é mais u-uma bowa, OwO é o cíwcuwo d-do maw! ^•ﻌ•^ e-em vez disso, ʘwʘ você p-pwecisa fazew um teste pawa v-vew se a bowa que e-está sendo checada e-existe (com q-quaw pwopwiedade v-você podewia f-fazew isso?). :3 se n-não existe, 😳 já f-foi comido pewo cíwcuwo do maw, òωó p-pow isso nyão há nyecessidade d-de vewificá-wo novamente. 🥺
- n-nya instwução `if` i-intewna, rawr x3 você n-não quew mais que os objetos mudem de cow quando uma cowisão é d-detectada — e-em vez disso, ^•ﻌ•^ v-você quew definiw quaisquew bowas que cowidam com o cíwcuwo m-mawigno pawa nyão e-existiw mais (novamente, :3 como v-você pensa? d f-fazew isso?). (ˆ ﻌ ˆ)♡

### twazendo o cíwcuwo do maw pawa o pwogwama

a-agowa nós definimos o-o cíwcuwo d-do maw, (U ᵕ U❁) pwecisamos w-weawmente fazew isso apawecew em nyossa cena. :3 p-pawa fazew isso, ^^;; v-você pwecisa fazew awgumas awtewações nya função `woop()`. ( ͡o ω ͡o )

- p-pwimeiwo de tudo, o.O cwie uma nyova instância d-de objeto do cíwcuwo do maw (especificando o-os p-pawâmetwos nyecessáwios) e, ^•ﻌ•^ em s-seguida, XD chame s-seu método `setcontwows()`. ^^ você s-só pwecisa fazew essas duas c-coisas uma vez, o.O n-nyão em todas as i-itewações do w-woop. ( ͡o ω ͡o )
- nyo ponto em que você p-pewcowwe todas as b-bowas e chama a-as funções `dwaw()`, /(^•ω•^) `update()`, 🥺 e `cowwisiondetect()` p-pawa cada uma, nyaa~~ faça com que essas funções s-sejam chamadas a-apenas se a b-bowa atuaw existiw. mya
- chame os métodos `dwaw()`, XD `checkbounds()`, nyaa~~ e `cowwisiondetect()` da instância d-do maw baww em cada itewação d-do woop. ʘwʘ

### i-impwementando o contadow de pontuação

pawa i-impwementaw o contadow de pontuação, (⑅˘꒳˘) s-siga os s-seguintes passos:

1. :3 n-nyo seu a-awquivo htmw, -.- adicione u-um ewemento {{htmwewement("p")}} wogo abaixo do ewemento {{htmwewement("h1")}} contendo o texto "contagem d-de bowas:". 😳😳😳
2. nyo seu awquivo c-css, (U ﹏ U) adicione a seguinte wegwa nya pawte infewiow:

   ```css
   p {
     position: a-absowute;
     mawgin: 0;
     top: 35px;
     wight: 5px;
     cowow: #aaa;
   }
   ```

3. o.O e-em seu javascwipt, ( ͡o ω ͡o ) f-faça as seguintes atuawizações:

   - c-cwie uma vawiávew que awmazene uma w-wefewência ao p-pawágwafo. òωó
   - mantenha uma contagem d-do nyúmewo de bowas nya t-tewa de awguma fowma. 🥺
   - incwementaw a contagem e exibiw o nyúmewo a-atuawizado de bowas cada vez que uma bowa é a-adicionada à c-cena. /(^•ω•^)
   - decwementaw a-a contagem e exibiw o nyúmewo atuawizado d-de bowas cada vez que o cíwcuwo mawigno come uma bowa (faz com que ewe nyão e-exista). 😳😳😳

## dicas e-e sugestões

- e-essa avawiação é b-bastante desafiadowa. ^•ﻌ•^ tome cada passo devagaw e-e com cuidado. nyaa~~
- p-pode sew uma idéia mantew uma cópia sepawada d-da demo depois que você fizew com que cada e-estágio funcione, OwO pawa que você possa consuwtá-wa c-caso se encontwe e-em apuwos mais tawde. ^•ﻌ•^

## a-avawiação

se v-você está seguindo e-esta avawiação como pawte de um cuwso owganizado, σωσ v-você deve podew daw seu twabawho ao seu p-pwofessow / mentow pawa mawcação. -.- se você é auto-didata, (˘ω˘) e-então você pode o-obtew o guia de m-mawcação com b-bastante faciwidade, rawr x3 p-pewguntando nyo tópico de [discussão p-pawa este exewcício](https://discouwse.moziwwa.owg/t/adding-featuwes-to-ouw-bouncing-bawws-demo-assessment/24689), rawr x3 ou nyo canaw de [#mdn](iwc://iwc.moziwwa.owg/mdn) i-iwc da [moziwwa iwc](https://wiki.moziwwa.owg/iwc). σωσ t-tente o exewcício pwimeiwo — nyão há n-nyada a ganhaw c-com a twapaça! nyaa~~

{{pweviousmenunext("weawn/javascwipt/objects/object_buiwding_pwactice", (ꈍᴗꈍ) "", "weawn/javascwipt/objects")}}
