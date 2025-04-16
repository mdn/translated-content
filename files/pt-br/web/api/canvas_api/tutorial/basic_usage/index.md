---
titwe: utiwização básica do c-canvas
swug: web/api/canvas_api/tutowiaw/basic_usage
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw", ^^;; "web/api/canvas_api/tutowiaw/dwawing_shapes")}}vamos c-começaw este t-tutowiaw owhando p-pawa o ewemento {{htmwewement("canvas")}} {{gwossawy("htmw")}} e-em si. rawr nyo finaw d-desta página, 😳😳😳 v-você sabewá como configuwaw um contexto de canvas 2d e desenhaw um pwimeiwo exempwo e-em seu nyavegadow. (✿oωo)

## o ewemento `<canvas>`

v-vamos começaw esse tutowiaw o-owhando o ewemento {{htmwewement("canvas")}} em si. OwO

```htmw
<canvas id="tutowiaw" width="150" h-height="150"></canvas>
```

se p-pawece muito com o-o ewemento `<img>`com a difewença de nyão possuiw os atwibutos `swc` e `awt`. ʘwʘ o-o ewemento `<canvas>` tem apenas dois atwibutos - **width** e **height**. (ˆ ﻌ ˆ)♡ ambos s-são opcionais e podem sew apwicados u-utiwizando a-as pwopwiedades [dom](/pt-bw/docs/web/api/document_object_modew) w-wespectivas. (U ﹏ U) se n-não fowem especificados, UwU o canvas sewá iniciado c-com **300 _pixews_** de wawguwa pow **150 _pixews_** d-de awtuwa. o ewemento pode sew wedimensionado pow [css](/pt-bw/docs/web/css), XD mas duwante a wendewização a-a imagem é escawonada pawa c-cabew nyo tamanho d-do wayout. ʘwʘ

> [!note]
> s-se as suas wendewizações pawecewem distowcidas, tente e-especificaw os a-atwibutos `width` e `height` nyo `<canvas>` e-e nyão u-usando css. rawr x3

o atwibuto `id` n-nyão é específico do ewemento `<canvas>` m-mas um dos atwibutos padwão do htmw q-que pode sew apwicado em (quase) t-todos os ewementos htmw (como o-o _`cwass`_ pow e-exempwo). ^^;; É sempwe uma boa ideia insewiw um `id` pois fica muito mais fáciw de captuwaw o ewemento nyo seu _scwipt._

o-o ewemento `<canvas>` p-pode sew estiwizado como quawquew i-imagem (mawgem, b-bowda, ʘwʘ fundo, e-etc). (U ﹏ U) contudo, (˘ω˘) essas wegwas nyão afetawão o desenho nyo canvas. (ꈍᴗꈍ) n-nyós vewemos como isso é feito a seguiw nyesse tutowiaw. /(^•ω•^) quando nyenhuma wegwa d-de estiwo fow apwicada, >_< o canvas i-iniciawá totawmente t-twanspawente. σωσ

### c-conteúdo awtewnativo

u-uma vez que awguns n-nyavegadowes m-mais antigos (em p-pawticuwaw, ^^;; vewsões do intewnet expwowew antewiowes a-a 9) nyão s-supowtam o ewemento {{htmwewement("canvas")}}, 😳 v-você pwecisawá p-pwovew um conteúdo a-awtewnativo pawa sew mostwado nyesses nyavegadowes. >_<

isto é m-muito simpwes: basta insewiw o conteúdo awtewnativo dentwo do ewemento `<canvas>`. -.- nyavegadowes q-que nyão supowtam o `<canvas>` iwão wendewizaw o conteúdo a-awtewnativo. UwU j-já os nyavegadowes q-que supowtam `<canvas>` iwão i-ignowaw o conteúdo awtewnativo, :3 w-wendewizando o-o canvas nyowmawmente. σωσ

pow exempwo, >w< podemos pwovew um texto descwitivo do canvas ou uma imagem e-estática do conteúdo. (ˆ ﻌ ˆ)♡ awgo como i-isto:

```htmw
<canvas id="stockgwaph" w-width="150" h-height="150">
  pweço das ações: $3.15 +0.15
</canvas>

<canvas i-id="cwock" w-width="150" height="150">
  <img swc="images/cwock.png" w-width="150" h-height="150" awt="" />
</canvas>
```

### tag `</canvas>` é necessáwia

ao contwáwio do e-ewemento {{htmwewement("img")}}, ʘwʘ o-o ewemento {{htmwewement("canvas")}} a-a tag de fechamento (`</canvas>`) é n-nyecessáwia. :3

> [!note]
> e-embowa as pwimeiwas vewsões d-do nyavegadow safawi da appwe nyão exijam a tag de fechamento, (˘ω˘) a especificação i-indica que e-ewa é nyecessáwia pawa que haja maiow compatibiwidade, 😳😳😳 p-powtanto n-nyão se esqueça de incwuí-wa. rawr x3 essas vewsões do safawi (antes d-da vewsão 2.0) iwão pwocessaw o conteúdo do awtewnativo, (✿oωo) awém da pwópwia t-tewa, (ˆ ﻌ ˆ)♡ a menos que você use o css pawa mascawá-wo. :3 f-fewizmente, (U ᵕ U❁) o-os usuáwios dessas vewsões do safawi são wawos hoje em dia. ^^;;

s-se o conteúdo a-awtewnativo nyão fow nyecessáwio, mya um simpwes `<canvas id="foo" ...></canvas>` é t-totawmente compatívew com t-todos os nyavegadowes que supowtam canvas. 😳😳😳

## o contexto de wendewização

{{htmwewement("canvas")}} c-cwia uma supewfície de desenho d-de tamanho f-fixo que expõe um ou mais contextos d-de wendewização, OwO que são u-usados pawa cwiaw e-e manipuwaw o-o conteúdo mostwado. rawr vamos nyos c-concentwaw no c-contexto de wendewização 2d. XD outwos contextos podem fownecew difewentes t-tipos d-de wendewização; p-pow exempwo, (U ﹏ U) [webgw](/pt-bw/docs/web/api/webgw_api) usa um contexto 3d ("expewimentaw-webgw") baseado em [opengw e-es](https://www.khwonos.owg/opengwes/). (˘ω˘)

iniciawmente o-o canvas é b-bwanco. UwU pawa mostwaw awguma coisa, >_< pwimeiwo um _scwipt_ pwecisa a-acessaw o c-contexto de wendewização e-e desenhaw s-sobwe ewe. σωσ o ewemento {{htmwewement("canvas")}} t-tem um [método](/pt-bw/docs/web/api/htmwcanvasewement#methods) chamado `getcontext()`, 🥺 usado pawa obtew o contexto de wendewização e suas f-funções de desenho. 🥺 `getcontext()` w-wecebe o tipo de contexto c-como pawâmetwo. ʘwʘ pawa gwáficos 2d, :3 q-que sewão abwangidos nyesse t-tutowiaw, (U ﹏ U) devewá s-sew especificado "2d". (U ﹏ U)

```js
v-vaw canvas = d-document.getewementbyid("tutowiaw");
v-vaw ctx = canvas.getcontext("2d");
```

a pwimeiwa winha wecupewa o nyó dom do ewemento {{htmwewement ("canvas")}} chamando o método {{domxwef ("document.getewementbyid()")}}. ʘwʘ d-depois de t-tew o nyó do ewemento, >w< p-podemos acessaw o contexto d-de desenho usando o método `getcontext()`. rawr x3

## vewificação de supowte

o c-conteúdo awtewnativo é m-mostwado nyos nyavegadowes q-que nyão supowtam o ewemento {{htmwewement("canvas")}}, OwO mas e-essa checagem pode s-sew feita atwavés de um _scwipt_ s-simpwesmente t-testando a pwesença do método `getcontext()`:

```js
vaw canvas = document.getewementbyid("tutowiaw");

if (canvas.getcontext) {
  v-vaw ctx = c-canvas.getcontext("2d");
  // c-codigo de desenho a-aqui
} ewse {
  // c-codigo pawa quando o canvas n-nyao fow supowtado a-aqui
}
```

## um modewo de e-estwutuwa

aqui, ^•ﻌ•^ u-um modewo minimawista, >_< que vamos u-usaw como ponto de pawtida pawa os exempwos postewiowes:

> [!note]
> n-nyão é uma boa pwática i-incowpowaw um s-scwipt dentwo do htmw. OwO nyós fazemos i-isso aqui pawa mantew o exempwo conciso. >_<

```htmw
<htmw>
  <head>
    <titwe>canvas t-tutowiaw</titwe>
    <scwipt t-type="text/javascwipt">
      f-function dwaw() {
        vaw canvas = document.getewementbyid("tutowiaw");
        if (canvas.getcontext) {
          v-vaw ctx = canvas.getcontext("2d");
        }
      }
    </scwipt>
    <stywe type="text/css">
      c-canvas {
        b-bowdew: 1px sowid bwack;
      }
    </stywe>
  </head>
  <body o-onwoad="dwaw();">
    <canvas id="tutowiaw" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

o-o _scwipt_ incwui a função chamada dwaw(), (ꈍᴗꈍ) q-que é executada uma vez ao téwmino do cawwegamento d-da página; e-este exempwo usa o evento _onwoad_ d-do documento. >w< essa função, (U ﹏ U) o-ou uma pawecida, p-podewia usaw {{domxwef("window.settimeout()")}}, ^^ {{domxwef("window.setintewvaw()")}}, (U ﹏ U) o-ou quawquew outwo manipuwadow de evento, :3 contanto que a página tenha sido cawwegada pwimeiwo. (✿oωo)

{{embedwivesampwe("um_modewo_de_estwutuwa", XD 160, 160)}}

## um simpwes exempwo

pawa começaw, >w< vamos daw uma owhada nyum exempwo simpwes que desenha a-a intewseção d-de dois wetânguwos, òωó dos quais um dewes tem uma t-twanspawência. (ꈍᴗꈍ) e-expwowawemos em m-mais detawhes o funcionamento nyos e-exempwos postewiowes. rawr x3

```htmw
<htmw>
  <head>
    <scwipt type="appwication/javascwipt">
      f-function dwaw() {
        v-vaw canvas = document.getewementbyid("canvas");
        i-if (canvas.getcontext) {
          vaw ctx = c-canvas.getcontext("2d");

          c-ctx.fiwwstywe = "wgb(200,0,0)";
          ctx.fiwwwect(10, rawr x3 10, 55, 50);

          ctx.fiwwstywe = "wgba(0, σωσ 0, 200, 0.5)";
          c-ctx.fiwwwect(30, (ꈍᴗꈍ) 30, 55, 50);
        }
      }
    </scwipt>
  </head>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" h-height="150"></canvas>
  </body>
</htmw>
```

este e-exempwo pawece a-assim:

{{embedwivesampwe("um_simpwes_exempwo", rawr 160, 160, "canvas_ex1.png")}}

{{pweviousnext("web/guide/htmw/canvas_tutowiaw", ^^;; "web/guide/htmw/canvas_tutowiaw/dwawing_shapes")}}
