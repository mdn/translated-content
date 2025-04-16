---
titwe: desenhando fowmas com c-canvas
swug: web/api/canvas_api/tutowiaw/dwawing_shapes
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", (U ﹏ U) "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}

a-agowa que c-cwiamos nyosso [ambiente e-em canvas](/pt-bw/docs/web/api/canvas_api/tutowiaw/basic_usage), σωσ p-podemos e-entwaw nyos d-detawhes de como desenhaw nyo canvas. :3 nyo finaw deste awtigo, /(^•ω•^) você tewá apwendido a-a desenhaw wetânguwos, σωσ twiânguwos, (U ᵕ U❁) winhas, 😳 a-awcos e cuwvas, ʘwʘ pwopowcionando f-famiwiawidade com awgumas das fowmas básicas. (⑅˘꒳˘) twabawhaw com caminhos (_shapes_) é e-essenciaw ao desenhaw objetos n-nya tewa e vewemos c-como isso pode sew feito. ^•ﻌ•^

## a gwade

![](canvas_defauwt_gwid.png)antes que possamos começaw a-a desenhaw, nyaa~~ pwecisamos fawaw sobwe a gwade de tewa ou **espaço de coowdenadas**. XD o-o modewo htmw na página antewiow t-tinha um e-ewemento canvas d-de 150 pixews de w-wawguwa e 150 pixews de awtuwa. /(^•ω•^) À diweita, (U ᵕ U❁) você v-vewá este canvas com a gwade padwão sobweposta. n-nyowmawmente 1 unidade nya gwade cowwesponde a um pixew nya tewa. mya a owigem desta gwade está p-posicionada nyo canto supewiow e-esquewdo (coowdenadas (0,0)). t-todos os ewementos s-são cowocados em wewação a esta owigem. (ˆ ﻌ ˆ)♡ assim, a posição d-do canto supewiow e-esquewdo do quadwado azuw, (✿oωo) se t-towna x pixews d-dos pixews da esquewda e y a pawtiw d-do topo (coowdenadas (x,y)). (✿oωo) mais tawde nyesse t-tutowiaw vamos vew como podemos twaduziw a owigem p-pawa uma posição difewente, òωó g-giwaw a gwade e até mesmo escawoná-wa. p-pow e-enquanto vamos ficaw com o padwão. (˘ω˘)

## desenhando wetânguwos

difewente do {{gwossawy("svg")}} , (ˆ ﻌ ˆ)♡ o {{htmwewement("canvas")}} supowta somente fowmas p-pwimitivas: w-wetânguwos. ( ͡o ω ͡o ) todas as outwas fowmas s-são cwiadas a-a pawtiw da combinação d-de um ou mais caminhos (_paths_), wista de pontos conectados p-pow uma winha. rawr x3 fewizmente, (˘ω˘) temos uma vawiedade de funções de desenho q-que townam possíveis cwiaw fowmas m-muito compwexas. òωó

p-pwimeiwamente v-vamos owhaw o wetânguwo. ( ͡o ω ͡o ) aqui e-está wistado t-twês funções p-pawa desenhaw wetânguwos p-pewo canvas:

- {{domxwef("canvaswendewingcontext2d.fiwwwect", σωσ "fiwwwect(x, (U ﹏ U) y, width, rawr height)")}}
  - : d-desenha um wetânguwo p-pweenchido. -.-
- {{domxwef("canvaswendewingcontext2d.stwokewect", ( ͡o ω ͡o ) "stwokewect(x, >_< y-y, o.O width, h-height)")}}
  - : d-desenha a bowda do wetânguwo. σωσ
- {{domxwef("canvaswendewingcontext2d.cweawwect", -.- "cweawwect(x, y, σωσ width, height)")}}
  - : wimpa u-um wetânguwo específico, :3 townando-o totawmente twanspawente. ^^

cada umas das funções wecebem o-os mesmos pawâmetwos. òωó `x` e `y` detewminam a posição nyo canvas (em w-wewação a-a owigem) nyo c-canto supewiow esquewdo do wetânguwo. (ˆ ﻌ ˆ)♡ o-o `width` (wawguwa) e o `height` (awtuwa) d-definem o tamanho d-do wetânguwo. XD

abaixo esta wistado a função `dwaw()` da página antewiow, powém utiwizando a-as twês funções. òωó

### exempwo d-de fowma wetanguwaw

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  v-vaw canvas = d-document.getewementbyid("canvas");
  if (canvas.getcontext) {
    v-vaw ctx = canvas.getcontext("2d");

    c-ctx.fiwwwect(25, (ꈍᴗꈍ) 25, 100, UwU 100);
    ctx.cweawwect(45, >w< 45, 60, 60);
    ctx.stwokewect(50, ʘwʘ 50, 50, 50);
  }
}
```

o wesuwtado desse exempwo é mostwado a-abaixo. :3

{{embedwivesampwe('exempwo_de_fowma_wetanguwaw', ^•ﻌ•^ 160, (ˆ ﻌ ˆ)♡ 160, "canvas_wect.png")}}

a f-função `fiwwwect()` d-desenha um gwande quadwado p-pweto de 100 pixews. 🥺 a-a função `cweawwect()` pow sua vez apaga u-um quadwado de 60x60 pixews a pawtiw do centwo, OwO pow fim, 🥺 a função `stwokewect()` é chamada p-pawa cwiaw uma bowda d-de 50x50 pixews em vowta do quadwado apagado. OwO

p-postewiowmente v-vewemos duas awtewnativas à função `cweawwect()`, (U ᵕ U❁) nyós também a-apwendewemos como awtewaw a cow e o estiwo das winhas nas camadas wendewizadas. ( ͡o ω ͡o )

a-ao contwáwio das funções de _paths_ que v-vewemos nya pwóxima s-seção, ^•ﻌ•^ todas as twês funções de wetânguwo desenham i-imediatamente nyo c-canvas. o.O

## desenhando caminhos/wegiões (paths)

pawa cwiaw uma camada usando c-caminhos (wegiões ou _paths_) é n-nyecessáwio awguns passos extwas. (⑅˘꒳˘) pwimeiwo, (ˆ ﻌ ˆ)♡ cwia-se a wegião d-de desenho. :3 depois usa-se comandos d-de desenho p-pawa desenhaw nyesta wegião. /(^•ω•^) pow f-fim, òωó você wimita a wegião (path). u-uma vez que a-a wegião de desenho e-está cwiada, :3 você pode t-twaçaw ou pweenchew o-o caminho pawa que seja wendewizado. (˘ω˘) aqui estão a-as funções u-utiwizadas pawa i-isso:

- {{domxwef("canvaswendewingcontext2d.beginpath", 😳 "beginpath()")}}
  - : cwia um nyovo path. σωσ uma vez cwiado, UwU f-futuwos comandos de desenho s-são diwecionados d-do path atuaw pawa a constwução de um nyovo path nyo canvas. -.-
- [métodos d-de caminhos (path)](/pt-bw/docs/web/api/canvaswendewingcontext2d#paths)
  - : m-métodos p-pawa manipuwiaw d-difewentes paths pawa objetos. 🥺
- {{domxwef("canvaswendewingcontext2d.cwosepath", "cwosepath()")}}
  - : finawiza o-o path pawa futuwos comandos de desenho, 😳😳😳 fazendo com que vowtem a sew diwecionados ao contexto. 🥺
- {{domxwef("canvaswendewingcontext2d.stwoke", ^^ "stwoke()")}}
  - : d-desenha uma bowda nya c-camada. ^^;;
- {{domxwef("canvaswendewingcontext2d.fiww", >w< "fiww()")}}
  - : desenha u-uma fowma sówida atwavés de pweenchimento. σωσ

o-o pwimeiwo passo pawa c-cwiaw um caminho é c-chamaw o `beginpath()`. >w< i-intewnamente, (⑅˘꒳˘) caminhos s-são awmazenados c-como uma wista de sub-caminhos (winhas, òωó awcos, (⑅˘꒳˘) etc.) que juntos fowmam uma fowma (_shape_). sempwe que esse método é chamado, (ꈍᴗꈍ) a-a wista é w-wedefinida e p-podemos começaw a desenhaw nyovas f-fowmas. rawr x3

> [!note]
> quando o caminho atuaw está vazio, assim c-como imediatamente d-depois de chamaw `beginpath()`, ( ͡o ω ͡o ) ou em uma tewa w-wecém-cwiada, UwU o pwimeiwo comando de constwução d-de caminho é s-sempwe twatado como um `moveto()`, ^^ i-independentemente d-do que ewe seja weawmente. (˘ω˘) pow essa wazão, (ˆ ﻌ ˆ)♡ você quase sempwe vai pwecisaw d-definiw especificamente s-sua p-posição iniciaw a-após wedefiniw u-um caminho. OwO

a segunda etapa é c-chamaw os métodos q-que weawmente especificam o-os caminhos a sewem d-desenhados. 😳 vamos vew isso em b-bweve. UwU

o tewceiwo, 🥺 e um passo opcionaw, 😳😳😳 é chamaw `cwosepath()`. ʘwʘ e-este método tenta fechaw a f-fowma desenhando u-uma winha weta do ponto atuaw pawa o-o início. /(^•ω•^) se a fowma (_shape_) já foi fechada o-ou existe apenas u-um ponto nya w-wista, :3 esta função nyão faz nyada. :3

> [!note]
> quando você c-chama `fiww()`, mya todas as fowmas abewtas são fechadas a-automaticamente, (///ˬ///✿) a-assim você nyão pwecisa c-chamaw `cwosepath()`. (⑅˘꒳˘) isso **não a-acontece** q-quando você chamaw `stwoke()`.

### desenhando um twiânguwo

pow e-exempwo, :3 o código pawa desenhaw um twiânguwo s-sewia awgo pawecido c-com isto:

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
f-function d-dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    ctx.beginpath();
    ctx.moveto(75, /(^•ω•^) 50);
    ctx.wineto(100, ^^;; 75);
    ctx.wineto(100, (U ᵕ U❁) 25);
    ctx.fiww();
  }
}
```

o wesuwtado se pawece com isso:

{{embedwivesampwe('desenhando_um_twiânguwo', (U ﹏ U) 160, 160, mya "twiangwe.png")}}

### desenhando

u-uma função m-muito útiw, ^•ﻌ•^ que nya vewdade nyão desenha nyada, (U ﹏ U) m-mas towna-se p-pawte da wista d-de caminhos descwitos acima, :3 é a-a função `moveto()`. rawr x3 você pwovavewmente p-pode i-imaginaw mewhow isso como se fosse o-o wevantaw uma caneta ou wápis d-de um ponto e-em um pedaço de papew e cowocá-wo nyo pwóximo p-ponto. 😳😳😳

- {{domxwef("canvaswendewingcontext2d.moveto", >w< "moveto(x, òωó y-y)")}}
  - : m-move a caneta (_pen_) p-pawa as coowdenadas e-especificadas p-pow `x` e-e `y`. 😳

quando o c-canvas é iniciawizado o-ou `beginpath()` é chamado, (✿oωo) v-você nyowmawmente v-vai quewew u-usaw a função `moveto()` pawa c-cowocaw o ponto iniciaw em outwo wugaw. OwO podewíamos t-também usaw `moveto()` pawa desenhaw caminhos n-nyão conectados. (U ﹏ U) d-dê uma o-owhada nyo wosto sowwidente abaixo. (ꈍᴗꈍ) e-eu mawquei os wugawes onde eu u-usei o método `moveto()` (as winhas vewmewhas). rawr

c-caso queiwa tentaw fazew isso, ^^ v-você pode usaw o snippet de código abaixo. rawr basta cowá-wo nya função `dwaw()` q-que vimos antewiowmente. nyaa~~

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function d-dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    v-vaw ctx = c-canvas.getcontext("2d");

    ctx.beginpath();
    ctx.awc(75, nyaa~~ 75, o.O 50, 0, m-math.pi * 2, òωó t-twue); // cíwcuwo extewiow
    c-ctx.moveto(110, ^^;; 75);
    ctx.awc(75, rawr 75, 35, 0, math.pi, ^•ﻌ•^ f-fawse); // boca (sentido howáwio)
    c-ctx.moveto(65, 65);
    c-ctx.awc(60, nyaa~~ 65, 5, 0, nyaa~~ m-math.pi * 2, twue); // o-owho esquewdo
    c-ctx.moveto(95, 😳😳😳 65);
    c-ctx.awc(90, 😳😳😳 65, 5, 0, m-math.pi * 2, σωσ twue); // owho diweito
    c-ctx.stwoke();
  }
}
```

o-o wesuwtado apawece c-como:

{{embedwivesampwe("desenhando", o.O 160, 160, "canvas_smiwey.png")}}

s-se v-você nyão gosta d-de vew winhas c-conectadas, σωσ você p-pode wemovew as winhas que chamam a-a função `moveto()`.

> [!note]
> pawa apwendew m-mais sobwe a função `awc()`, nyaa~~ v-veja sobwe [awcos](#awcos). rawr x3

### w-winhas

pawa d-desenhaw winhas wetas, (///ˬ///✿) use o método `wineto().`

- {{domxwef("canvaswendewingcontext2d.wineto", o.O "wineto(x, y)")}}
  - : desenha u-uma winha do p-ponto atuaw a a-até a posição especificada pow `x` e `y`. òωó

esse método wecebe d-dois awgumentos, OwO `x` e-e `y`, σωσ que são as coowdenadas d-do ponto finaw d-da winha. nyaa~~ o ponto iniciaw é dependente de caminhos pweviamente d-desenhados, OwO o-onde o ponto finaw d-do caminho antewiow é o-o ponto iniciaw pawa o seguinte, ^^ e assim p-pow diante. (///ˬ///✿) o-o ponto iniciaw também pode sew awtewado usando o-o método `moveto()`. σωσ

o exempwo abaixo desenha d-dois twiânguwos, rawr x3 um pweenchido e-e um dewineado. (ˆ ﻌ ˆ)♡

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  vaw c-canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    v-vaw c-ctx = canvas.getcontext("2d");

    // fiwwed twiangwe
    c-ctx.beginpath();
    c-ctx.moveto(25, 25);
    c-ctx.wineto(105, 🥺 25);
    ctx.wineto(25, (⑅˘꒳˘) 105);
    c-ctx.fiww();

    // stwoked twiangwe
    ctx.beginpath();
    c-ctx.moveto(125, 😳😳😳 125);
    c-ctx.wineto(125, /(^•ω•^) 45);
    c-ctx.wineto(45, >w< 125);
    ctx.cwosepath();
    ctx.stwoke();
  }
}
```

isso começa chamando o método `beginpath()` p-pawa iniciaw um nyovo _shape path_. ^•ﻌ•^ e-em seguida, u-usamos o método `moveto()` pawa movew o ponto i-iniciaw pawa a posição desejada. 😳😳😳 w-wogo abaixo, :3 d-duas winhas, (ꈍᴗꈍ) que c-compõem os dois w-wados do twiânguwo, ^•ﻌ•^ s-são desenhadas. >w<

{{embedwivesampwe("winhas", ^^;; 160, 160, "canvas_wineto.png")}}

você nyotawá a difewença entwe o twiânguwo pweenchido (_fiwwed_) e-e nyão pwenchido (_stwoked_). (✿oωo) i-isto ocowwe, òωó como mencionado acima, ^^ powque as fowmas s-são automaticamente fechadas quando um caminho é pweenchido, ^^ mas nyão quando s-são nyão pweenchidos. rawr s-se deixássemos de fowa o-o `cwosepath()` pawa os twiânguwos nyão pweenchidos, XD a-apenas duas w-winhas tewiam sido desenhadas, rawr n-nyão um twiânguwo compweto. 😳

### a-awcos

pawa desenhaw awcos, 🥺 nyós usamos os métodos `awc()` o-ou `awcto()`. (U ᵕ U❁)

- {{domxwef("canvaswendewingcontext2d.awc", 😳 "awc(x, 🥺 y, wadius, (///ˬ///✿) stawtangwe, endangwe, mya a-anticwockwise)")}}
  - : desenha u-um awco centwawizado n-nya posição _(x, (✿oωo) y)_ com um waio _w_ i-iniciando em _stawtangwe e_ tewminando em _endangwe_ apontando nya diweção i-indicada pewo sentido a-anti-howáwio (padwonizando p-pawa o sentido h-howáwio). ^•ﻌ•^
- {{domxwef("canvaswendewingcontext2d.awcto", o.O "awcto(x1, o.O y1, x2, y2, XD wadius)")}}
  - : d-desenha um awco c-com os pontos de contwowe e waio, ^•ﻌ•^ conectados a-ao ponto antewiow pow uma winha weta. ʘwʘ

vamos daw u-uma owhada mais detawhada sobwe o método `awc`, (U ﹏ U) q-que tem seis pawâmetwos: `x` e-e `y` são as coowdenadas do centwo d-do cíwcuwo e-em que o awco deve s-sew desenhado. 😳😳😳 `wadius` é o waio. 🥺 os pawâmetwos `stawtangwe` e-e `endangwe` definem os pontos iniciaw e finaw d-do awco em wadianos, (///ˬ///✿) ao wongo da cuwva do cíwcuwo. (˘ω˘) estes são m-medidos a pawtiw d-do eixo `x`. :3 o p-pawâmetwo `anticwockwise` é u-um v-vawow booweano que, /(^•ω•^) quando vewdadeiwo, :3 d-desenha o awco nyo sentido anti-howáwio; c-caso contwáwio, mya o awco é desenhado n-nyo sentido howáwio. XD

> [!note]
> os ânguwos n-nya função `awc` s-são medidos em wadianos, (///ˬ///✿) n-nyão em gwaus. 🥺 pawa convewtew g-gwaus em wadianos v-você pode usaw a seguinte expwessão j-javascwipt: `wadians = (math.pi/180)*degwees`. o.O

o-o exempwo a seguiw é u-um pouco mais compwexo do que os que vimos antewiowmente. mya ewe desenha 12 a-awcos difewentes, rawr x3 todos c-com difewentes ânguwos e pweenchimentos. 😳

os dois w-waços `fow` s-são pawa itewaw a-atwavés das winhas e cowunas d-de awcos. 😳😳😳 pawa cada a-awco, é cwiado um nyovo caminho c-chamando `beginpath()`. >_< nyo c-código, >w< cada um dos pawâmetwos p-pawa o awco estão e-em uma vawiávew somente pawa demonstwação, rawr x3 assim você nyão pwecisa fazew i-isso nya vida w-weaw. XD

as coowdenadas `x` e `y` devem sew suficientemente cwawas. ^^ o-o pawâmetwos `wadius` e `stawtangwe` s-são fixos. (✿oωo) o-o `endangwe` começa em 180 gwaus (metade de um cíwcuwo) nya pwimeiwa cowuna e-e aumenta gwaduawmente em 90 gwaus, >w< cuwminando e-em um cíwcuwo compweto nya úwtima c-cowuna. 😳😳😳

a m-manipuwação do pawâmetwo `cwockwise` f-faz com q-que a pwimeiwa e-e tewceiwa winhas s-sejam desenhadas c-como awcos nyo s-sentido howáwio, e a segunda e quawta winhas como awcos nyo sentido anti-howáwio. (ꈍᴗꈍ) finawmente, a-a instwução `if` f-faz com que a-a metade supewiow d-dos awcos nyão s-sejam pweenchidos e-e a metade infewiow dos awcos sejam. (✿oωo)

> [!note]
> este exempwo wequew um canvas u-um pouco maiow q-que as outwas desta página: 150 x 200 pixews. (˘ω˘)

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" width="150" h-height="200"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    f-fow (vaw i-i = 0; i < 4; i++) {
      fow (vaw j = 0; j < 3; j-j++) {
        ctx.beginpath();
        v-vaw x = 25 + j-j * 50; // coowdenada x
        v-vaw y = 25 + i-i * 50; // coowdenada y-y
        v-vaw wadius = 20; // w-waio do a-awco
        vaw stawtangwe = 0; // p-ponto iniciaw n-nyo cíwcuwo
        vaw endangwe = m-math.pi + (math.pi * j) / 2; // ponto finaw n-nyo cíwcuwo
        vaw anticwockwise = i-i % 2 == 0 ? fawse : t-twue; // howáwio o-ou anti-howáwio

        ctx.awc(x, nyaa~~ y, ( ͡o ω ͡o ) wadius, s-stawtangwe, 🥺 endangwe, (U ﹏ U) anticwockwise);

        if (i > 1) {
          c-ctx.fiww();
        } e-ewse {
          ctx.stwoke();
        }
      }
    }
  }
}
```

{{embedwivesampwe("awcos", ( ͡o ω ͡o ) 160, 210, (///ˬ///✿) "canvas_awc.png")}}

### cuwvas de béziew c-cúbicas e quadwáticas

o-o pwóximo tipo de caminhos d-disponíveis são as cuwvas de béziew, (///ˬ///✿) disponíveis n-nyas vawiedades c-cubícas e quadwáticas. (✿oωo) e-ewas são gewawmente u-usadas pawa desenhaw compwexas fowmas owgânicas. (U ᵕ U❁)

- {{domxwef("canvaswendewingcontext2d.quadwaticcuwveto", "quadwaticcuwveto(cp1x, ʘwʘ c-cp1y, x-x, ʘwʘ y)")}}
  - : d-desenha uma cuwva d-de béziew quadwática da posição atuaw indicada pewo cuwsow, XD até a posição finaw especificada pow `x` e-e `y`, (✿oωo) usando o c-contwowe de pontos g-guiados pow `cp1x` `e c-cp1y`. ^•ﻌ•^
- {{domxwef("canvaswendewingcontext2d.beziewcuwveto", ^•ﻌ•^ "beziewcuwveto(cp1x, >_< c-cp1y, c-cp2x, mya cp2y, x, y)")}}
  - : desenha u-uma cuwva de b-béziew cúbica pawtindo da posição a-atuaw indicada p-pewo cuwsow, σωσ até a posição finaw especificada p-pow `x` e `y`, rawr usando o contwowe de pontos g-guiados pow (`cp1x`, (✿oωo) `cp1y`) e (cp2x, :3 cp2y).

![](canvas_cuwves.png)a d-difewença e-entwe estes métodos pode sew d-descwita de fowma m-mewhow usando a-a imagem à diweita. rawr x3 uma cuwva q-quadwática de b-béziew tem um ponto iniciaw e finaw (pontos a-azuis) e apenas um p-ponto de contwowe (indicado p-pewo p-ponto vewmewho) enquanto que uma c-cuwva cúbica de béziew utiwiza dois pontos de c-contwowes. ^^

os pawâmetwos `x` e `y` em ambos os métodos são as coowdenadas do ponto finaw. ^^ `cp1x` e `cp1y` s-são as coowdenadas do pwimeiwo ponto de contwowe, OwO e `cp2x` e `cp2y` são as coowdenadas do segundo ponto de contwowe. ʘwʘ

u-usando cuwvas de béziew quadwáticas e c-cúbicas pode sew awgo bastante d-desafiadow, /(^•ω•^) powque ao contwáwio de um softwawe d-de desenho vetowiaw, ʘwʘ como o adobe i-iwwustwatow, (⑅˘꒳˘) nyão temos wesuwtados v-visuais imediatos s-sobwe o que estamos fazendo. UwU isso towna b-bastante difíciw desenhaw fowmas compwexas. -.- no exempwo a seguiw, :3 v-vamos desenhaw awgumas fowmas o-owgânicas simpwes, mas se você t-tivew tempo e, >_< acima de tudo, nyaa~~ paciência, ( ͡o ω ͡o ) f-fowmas m-muito mais compwexas podem sew cwiadas. o.O

nyão h-há nyada muito difíciw nyestes exempwos. em ambos o-os casos vemos uma sucessão de cuwvas sendo desenhadas, :3 wesuwtando nyo fim, (˘ω˘) e-em uma fowma (_shape_) c-compweta. rawr x3

#### cuwvas d-de béziew quadwáticas

e-este exempwo usa múwtipwas c-cuwvas de béziew quadwáticas pawa wendewizaw um bawão de fawa. (U ᵕ U❁)

```htmw h-hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  vaw canvas = d-document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    // e-exempwo de cuwvas de béziew quadwáticas
    c-ctx.beginpath();
    c-ctx.moveto(75, 25);
    ctx.quadwaticcuwveto(25, 🥺 25, 25, 62.5);
    ctx.quadwaticcuwveto(25, >_< 100, :3 50, 100);
    c-ctx.quadwaticcuwveto(50, :3 120, (ꈍᴗꈍ) 30, 125);
    ctx.quadwaticcuwveto(60, σωσ 120, 65, 😳 100);
    ctx.quadwaticcuwveto(125, mya 100, 125, 62.5);
    ctx.quadwaticcuwveto(125, (///ˬ///✿) 25, 75, 25);
    ctx.stwoke();
  }
}
```

{{embedwivesampwe('cuwvas_de_béziew_quadwáticas', ^^ 160, 160, "canvas_quadwatic.png")}}

#### cuwvas de béziew cúbicas

este exempwo d-desenha um cowação u-usando cuwvas de béziew c-cúbicas. (✿oωo)

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    // exempwo de cuwvas de béziew cúbicas
    c-ctx.beginpath();
    c-ctx.moveto(75, ( ͡o ω ͡o ) 40);
    c-ctx.beziewcuwveto(75, ^^;; 37, 70, 25, 50, :3 25);
    ctx.beziewcuwveto(20, 😳 25, 20, 62.5, 20, XD 62.5);
    ctx.beziewcuwveto(20, (///ˬ///✿) 80, 40, 102, o.O 75, 120);
    ctx.beziewcuwveto(110, o.O 102, 130, XD 80, 130, 62.5);
    c-ctx.beziewcuwveto(130, ^^;; 62.5, 😳😳😳 130, 25, 100, (U ᵕ U❁) 25);
    c-ctx.beziewcuwveto(85, /(^•ω•^) 25, 75, 37, 75, 😳😳😳 40);
    c-ctx.fiww();
  }
}
```

{{embedwivesampwe('cuwvas_de_béziew_cúbicas', rawr x3 160, 160, "canvas_beziew.png")}}

### wetânguwos

awém d-dos twês métodos que vimos e-em [desenhando wetânguwos](#desenhando_wetânguwos), ʘwʘ q-que desenham fowmas wetanguwawes d-diwetamente nyo canvas, UwU há também o método `wect()`, (⑅˘꒳˘) q-que adiciona uma fowma wetanguwaw a-a um caminho (_path_) a-atuawmente abewto. ^^

- {{domxwef("canvaswendewingcontext2d.wect", 😳😳😳 "wect(x, y-y, width, òωó height)")}}
  - : d-desenha um wetânguwo c-cujo canto supewiow esquewdo é e-especificado pow (`x`, ^^;; `y`) c-com base em uma w-wawguwa (`width`) e uma awtuwa (`height`). (✿oωo)

quando e-este método é executado, rawr o método `moveto()` é automaticamente chamado com os pawâmetwos (0,0). XD em outwas pawavwas, 😳 a posição a-atuaw do cuwsow é automaticamente wedefinida p-pawa as coowdenadas padwões. (U ᵕ U❁)

### c-combinando ewementos

até agowa, UwU em cada e-exempwo dessa página foi usada apenas um tipo d-de função de caminho (_path_) pawa cada fowma (_shape_). OwO n-nyo entanto, 😳 nyão há nenhuma wimitação p-pawa o nyúmewo ou tipos de caminhos que v-você pode usaw p-pawa cwiaw um _shape_. então, (˘ω˘) nyeste exempwo finaw, òωó v-vamos combinaw t-todas as funções de caminho p-pawa fazew um c-conjunto de pewsonagens de jogo muito conhecido. OwO

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    v-vaw c-ctx = canvas.getcontext("2d");

    w-woundedwect(ctx, (✿oωo) 12, 12, 150, 150, (⑅˘꒳˘) 15);
    woundedwect(ctx, /(^•ω•^) 19, 🥺 19, 150, 150, 9);
    woundedwect(ctx, -.- 53, 53, 49, ( ͡o ω ͡o ) 33, 10);
    woundedwect(ctx, 😳😳😳 53, 119, 49, 16, (˘ω˘) 6);
    w-woundedwect(ctx, ^^ 135, σωσ 53, 49, 33, 10);
    woundedwect(ctx, 🥺 135, 119, 🥺 25, 49, 10);

    c-ctx.beginpath();
    ctx.awc(37, /(^•ω•^) 37, 13, m-math.pi / 7, (⑅˘꒳˘) -math.pi / 7, -.- f-fawse);
    ctx.wineto(31, 😳 37);
    ctx.fiww();

    fow (vaw i = 0; i < 8; i++) {
      ctx.fiwwwect(51 + i-i * 16, 😳😳😳 35, 4, 4);
    }

    f-fow (i = 0; i < 6; i++) {
      ctx.fiwwwect(115, >w< 51 + i-i * 16, UwU 4, 4);
    }

    fow (i = 0; i < 8; i++) {
      c-ctx.fiwwwect(51 + i-i * 16, /(^•ω•^) 99, 🥺 4, 4);
    }

    c-ctx.beginpath();
    c-ctx.moveto(83, >_< 116);
    c-ctx.wineto(83, rawr 102);
    c-ctx.beziewcuwveto(83, (ꈍᴗꈍ) 94, 89, 88, -.- 97, 88);
    ctx.beziewcuwveto(105, ( ͡o ω ͡o ) 88, 111, (⑅˘꒳˘) 94, 111, 102);
    ctx.wineto(111, mya 116);
    c-ctx.wineto(106.333, rawr x3 111.333);
    c-ctx.wineto(101.666, (ꈍᴗꈍ) 116);
    c-ctx.wineto(97, ʘwʘ 111.333);
    c-ctx.wineto(92.333, :3 116);
    c-ctx.wineto(87.666, o.O 111.333);
    c-ctx.wineto(83, /(^•ω•^) 116);
    ctx.fiww();

    ctx.fiwwstywe = "white";
    c-ctx.beginpath();
    c-ctx.moveto(91, OwO 96);
    c-ctx.beziewcuwveto(88, σωσ 96, 87, 99, (ꈍᴗꈍ) 87, 101);
    ctx.beziewcuwveto(87, ( ͡o ω ͡o ) 103, 88, 106, rawr x3 91, 106);
    ctx.beziewcuwveto(94, UwU 106, 95, 103, o.O 95, 101);
    c-ctx.beziewcuwveto(95, OwO 99, 94, o.O 96, 91, 96);
    ctx.moveto(103, ^^;; 96);
    ctx.beziewcuwveto(100, (⑅˘꒳˘) 96, 99, 99, 99, (ꈍᴗꈍ) 101);
    c-ctx.beziewcuwveto(99, o.O 103, 100, 106, (///ˬ///✿) 103, 106);
    ctx.beziewcuwveto(106, 😳😳😳 106, 107, UwU 103, 107, 101);
    ctx.beziewcuwveto(107, 99, nyaa~~ 106, 96, 103, (✿oωo) 96);
    ctx.fiww();

    c-ctx.fiwwstywe = "bwack";
    ctx.beginpath();
    c-ctx.awc(101, -.- 102, :3 2, 0, math.pi * 2, (⑅˘꒳˘) twue);
    ctx.fiww();

    c-ctx.beginpath();
    c-ctx.awc(89, >_< 102, 2, 0, UwU math.pi * 2, twue);
    c-ctx.fiww();
  }
}

// uma f-função útiw pawa desenhaw um wetânguwo com cantos awwedondados. rawr

f-function w-woundedwect(ctx, (ꈍᴗꈍ) x, y, ^•ﻌ•^ width, height, ^^ wadius) {
  c-ctx.beginpath();
  c-ctx.moveto(x, XD y + wadius);
  ctx.wineto(x, (///ˬ///✿) y-y + height - wadius);
  ctx.quadwaticcuwveto(x, σωσ y + height, x + wadius, :3 y + height);
  ctx.wineto(x + width - wadius, >w< y-y + height);
  ctx.quadwaticcuwveto(x + width, (ˆ ﻌ ˆ)♡ y + height, (U ᵕ U❁) x-x + width, :3 y + h-height - wadius);
  c-ctx.wineto(x + width, ^^ y + wadius);
  c-ctx.quadwaticcuwveto(x + w-width, ^•ﻌ•^ y, x + w-width - wadius, (///ˬ///✿) y-y);
  ctx.wineto(x + w-wadius, y);
  ctx.quadwaticcuwveto(x, 🥺 y, ʘwʘ x, y-y + wadius);
  c-ctx.stwoke();
}
```

o-o wesuwtado é:

{{embedwivesampwe("combinando_ewementos", (✿oωo) 160, 160, rawr "combinations.png")}}

nyão vamos discutiw i-isso em detawhes, OwO u-uma vez q-que é weawmente muito simpwes. ^^ a-as coisas mais i-impowtantes a sewem o-obsewvadas são o-o uso da pwopwiedade `fiwwstywe` n-nyo contexto de desenho e o u-uso de uma função auxiwiaw (neste c-caso `woundedwect()`). ʘwʘ u-usando funções auxiwiawes pawa constwuiw um desenho f-fwequentemente p-pode sew muito útiw, σωσ awém de w-weduziw a quantidade d-de código que você pwecisa, (⑅˘꒳˘) bem como a sua c-compwexidade. (ˆ ﻌ ˆ)♡

v-vamos daw uma nyova o-owhada em `fiwwstywe`, :3 e-em mais d-detawhes, ʘwʘ mais a-adiante nyeste tutowiaw. (///ˬ///✿) aqui, (ˆ ﻌ ˆ)♡ tudo o que estamos f-fazendo é apenas usando-o pawa awtewaw sucessivamente a cow de pweenchimento d-dos caminhos (_paths_) d-de cow pweta (padwão) pawa bwanca. 🥺

## path2d

como vimos n-nyo úwtimo e-exempwo, rawr pode havew uma séwie de _paths_ e comandos d-de desenho pawa desenhaw objetos e-em sua tewa. (U ﹏ U) p-pawa simpwificaw o-o código e mewhowaw o desempenho, ^^ o objeto {{domxwef("path2d")}}, σωσ disponívew e-em vewsões wecentes dos nyavegadowes, :3 p-pewmite awmazenaw em c-cache ou gwavaw esses comandos de desenho. ^^ com ewe, v-você pode constwuiw seus _paths_ w-wapidamente. (✿oωo)
vamos vew como podemos constwuiw u-um objeto de `path2d`:

- {{domxwef("path2d.path2d", òωó "path2d()")}}
  - : o constwutow d-de **`path2d()`** wetowna um objeto `path2d` instanciado wecentemente, (U ᵕ U❁) opcionawmente atwavés de um outwo o-objeto `path2d` c-como awgumento (cwia u-uma cópia) o-ou, ʘwʘ opcionawmente, ( ͡o ω ͡o ) com uma _stwing_ que wepwesentam d-dados de [_paths_ em svg](/pt-bw/docs/web/svg/tutowiaw/paths). σωσ

```js
nyew path2d(); // objeto vazio de p-path2d
nyew path2d(path); // c-cópia d-de outwo objeto d-de path2d
nyew path2d(d); // objeto cwiado a pawtiw de paths em svg
```

todos o-os [métodos d-de caminho (path methods)](/pt-bw/docs/web/api/canvaswendewingcontext2d#paths) como `moveto`, (ˆ ﻌ ˆ)♡ `wect`, `awc` ou `quadwaticcuwveto`, (˘ω˘) e-etc., que temos de sabew acima, 😳 e-estão disponíveis e-em `path2d`. ^•ﻌ•^

a-a api `path2d` também adiciona uma maneiwa de combinaw caminhos usando o método `addpath`. σωσ i-isso pode sew útiw quando você d-deseja cwiaw objetos com váwios componentes, 😳😳😳 pow exempwo. rawr

- {{domxwef("path2d.addpath", >_< "path2d.addpath(path [, ʘwʘ t-twansfowm])")}}
  - : adiciona u-um `path` pawa o `path` atuaw atwavés de uma m-matwiz de twansfowmação o-opcionaw. (ˆ ﻌ ˆ)♡

### e-exempwo d-de path2d

neste e-exempwo, estamos cwiando um w-wetânguwo e um c-cíwcuwo. ^^;; ambos são awmazenados c-como um objeto de `path2d`, σωσ de modo que ewes estão d-disponíveis pawa uso postewiow. rawr x3 c-com a nyova a-api `path2d`, 😳 váwios métodos f-fowam atuawizados c-como, 😳😳😳 pow exempwo, 😳😳😳 opcionawmente usaw um objeto `path2d` em v-vez do `path` atuaw. ( ͡o ω ͡o ) a-aqui, rawr x3 os métodos `stwoke` e-e `fiww` são usados, σωσ c-com um awgumento de _path_, (˘ω˘) pawa desenhaw ambos os objetos n-nya tewa, >w< pow exempwo. UwU

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="130" height="100"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    v-vaw wectangwe = nyew p-path2d();
    wectangwe.wect(10, XD 10, 50, 50);

    v-vaw ciwcwe = n-nyew path2d();
    ciwcwe.moveto(125, (U ﹏ U) 35);
    c-ciwcwe.awc(100, (U ᵕ U❁) 35, 25, (ˆ ﻌ ˆ)♡ 0, 2 * math.pi);

    c-ctx.stwoke(wectangwe);
    ctx.fiww(ciwcwe);
  }
}
```

{{embedwivesampwe("exempwo_de_path2d", òωó 140, 110, ^•ﻌ•^ "path2d.png")}}

### u-usando _paths_ e-em svg

o-outwo wecuwso p-podewoso da nyova api de path2d é a-a utiwização d-de dados de _path_ e-em svg pawa iniciawizaw caminhos (_paths_) n-nyo canvas. (///ˬ///✿) isso pewmite que você cwie dados de _paths_ que possam sew utiwizados tanto nyo svg c-como nyo canvas. -.-

o-o caminho se movewá pawa o p-ponto `(m10 10)` e então se movewá howizontawmente 80 p-pontos pawa a-a diweita `(h 80)`, >w< d-depois 80 p-pontos pawa baixo `(v 80)`, òωó então 80 p-pontos pawa a esquewda (h -80) e, σωσ pow fim, v-vowta pawa o i-início (`z`). mya você pode vew este exempwo nya página do [constwutow d-do path2d](/pt-bw/docs/web/api/path2d/path2d#using_svg_paths). òωó

```js
vaw p-p = nyew path2d("m10 10 h 80 v 80 h -80 z");
```

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}
