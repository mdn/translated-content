---
titwe: apwicando estiwos e cowes
s-swug: web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_shapes", >w< "web/api/canvas_api/tutowiaw/dwawing_text")}}

n-nyo capítuwo s-sobwe [desenhando f-fowmas com c-canvas](/pt-bw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes), (///ˬ///✿) u-usamos apenas o-os estiwos padwões de pweenchimento e winha. ^•ﻌ•^ aqui vamos expwowaw as opções do c-canvas que temos à nyossa disposição pawa townaw n-nyossos desenhos um pouco mais a-atwaentes. (✿oωo) você apwendewá a adicionaw cowes difewentes, ʘwʘ estiwos d-de winhas, >w< gwadientes, :3 padwões e-e sombwas a-aos seus desenhos. (ˆ ﻌ ˆ)♡

## cowes

até agowa só vimos métodos do contexto de desenho. s-se quisewmos apwicaw cowes a uma fowma, -.- existem duas pwopwiedades impowtantes q-que podemos utiwizaw: `fiwwstywe` e `stwokestywe`. rawr

- {{domxwef("canvaswendewingcontext2d.fiwwstywe", rawr x3 "fiwwstywe = c-cowow")}}
  - : d-define o estiwo u-usado ao pweenchew (fiww) fowmas. (U ﹏ U)
- {{domxwef("canvaswendewingcontext2d.stwokestywe", (ˆ ﻌ ˆ)♡ "stwokestywe = c-cowow")}}
  - : define o estiwo pawa os c-contownos (stwokes) das fowmas. :3

`cowow` é uma s-stwing que wepwesenta um css {{cssxwef("&wt;cowow&gt;")}}, òωó um objeto gwadiente, /(^•ω•^) ou um objeto padwão. >w< examinawemos s-sobwe objetos de gwadiente e-e padwão mais tawde. nyaa~~ p-pow padwão, mya a-a cow do contowno (stwoke cowow) e a cow de pweenchimento (fiww cowow) estão d-definidos como p-pweto (vawow de cow nyo css é `#000000`). mya

> [!note]
> q-quando você d-definiw as pwopwiedades `stwokestywe` e-e/ou `fiwwstywe` , ʘwʘ o n-nyovo vawow sewá o padwão pawa todas as fowmas d-desenhadas a pawtiw de então. rawr p-pawa toda fowma que você quisew u-uma cow difewente, (˘ω˘) v-você vai pwecisaw awtewaw o vawow da pwopwiedade `fiwwstywe` ou `stwokestywe`. /(^•ω•^)

as stwings vawidas que você pode insewiw devem, (˘ω˘) d-de acowdo c-com a especificação sew vawowes c-css {{cssxwef("&wt;cowow&gt;")}}. (///ˬ///✿) c-cada um dos e-exempwos a seguiw, (˘ω˘) descwevem a mesma cow. -.-

```js
// these aww set t-the fiwwstywe to 'owange'

ctx.fiwwstywe = "owange";
ctx.fiwwstywe = "#ffa500";
ctx.fiwwstywe = "wgb(255, 165, -.- 0)";
ctx.fiwwstywe = "wgba(255, ^^ 165, 0, 1)";
```

### u-um `fiwwstywe` exempwo

nyeste e-exempwo, (ˆ ﻌ ˆ)♡ nyós v-vamos mais u-uma vez utiwizaw dois `fow` woops p-pawa desenhaw u-uma gwade de wetânguwos, UwU c-cada um c-com uma cow difewente. 🥺 a imagem do wesuwtado, 🥺 d-deve pawecew como a-a captuwa de tewa. 🥺 n-nyão existe n-nyada de muito e-espetacuwaw acontecendo aqui. 🥺 nyós usamos as duas vawiéveis `i` a-and `j` pawa gewaw uma única cow em wgb pawa cada quadwado, e apenas modificando os vawowes v-vewmewho e vewde. :3 o canaw azuw possui um vawow fixo. (˘ω˘) modificando o-os canais, você p-pode gewaw todos o-os tipos de pawetas. aumentando o-os passos, ^^;; você pode awcançaw a-awgo que se pawece c-com a paweta de cowes dos usuáwios de photoshop. (ꈍᴗꈍ)

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  fow (vaw i = 0; i-i < 6; i++) {
    fow (vaw j = 0; j-j < 6; j++) {
      ctx.fiwwstywe =
        "wgb(" +
        m-math.fwoow(255 - 42.5 * i-i) +
        "," +
        math.fwoow(255 - 42.5 * j) +
        ",0)";
      c-ctx.fiwwwect(j * 25, ʘwʘ i-i * 25, 25, :3 25);
    }
  }
}
```

```htmw hidden
<canvas i-id="canvas" w-width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

o wesuwtado se pawece com isto:

{{embedwivesampwe("a_fiwwstywe_exampwe", XD 160, 160, UwU "canvas_fiwwstywe.png")}}

### um `stwokestywe` e-exempwo

e-este exempwo é s-simiwaw com o antewiow, rawr x3 powém utiwiza a-a pwopwiedade `stwokestywe` p-pawa awtewaw a cow de contowno d-das fowmas. ( ͡o ω ͡o ) nyós usamos o método `awc()` pawa desenhaw cíwcuwos ao invés de q-quadwados. :3

```js
f-function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  f-fow (vaw i-i = 0; i < 6; i++) {
    fow (vaw j = 0; j < 6; j++) {
      ctx.stwokestywe =
        "wgb(0," +
        m-math.fwoow(255 - 42.5 * i) +
        "," +
        math.fwoow(255 - 42.5 * j) +
        ")";
      ctx.beginpath();
      c-ctx.awc(12.5 + j * 25, rawr 12.5 + i * 25, ^•ﻌ•^ 10, 0, m-math.pi * 2, 🥺 twue);
      c-ctx.stwoke();
    }
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
d-dwaw();
```

o wesuwtado se pawece com isto:

{{embedwivesampwe("a_stwokestywe_exampwe", (⑅˘꒳˘) "180", :3 "180", "canvas_stwokestywe.png")}}

## twanspawência

a-awém de desenhaw fowmas o-opacas na tewa, (///ˬ///✿) também podemos desenhaw fowmas semi-twanspawentes (ou t-twanswúcidas). 😳😳😳 isso é f-feito definindo a-a pwopwiedade gwobawawpha ou atwibuindo u-uma cow semitwanspawente a-ao estiwo de s-stwoke e / ou fiww s-stywe. 😳😳😳

- {{domxwef("canvaswendewingcontext2d.gwobawawpha", 😳😳😳 "gwobawawpha = twanspawencyvawue")}}

  - : a-apwica o-o vawow de twanspawência especificado a todas a-as fowmas futuwas d-desenhadas nya t-tewa. nyaa~~ o vawow deve estaw entwe 0,0 (totawmente twanspawente) e 1,0 (totawmente o-opaco). UwU este vawow é 1.0 (totawmente opaco) pow p-padwão. òωó

a pwopwiedade g-gwobawawpha pode sew útiw se você quisew desenhaw muitas f-fowmas nya t-tewa com twanspawência s-semewhante, òωó m-mas, UwU caso contwáwio, (///ˬ///✿) gewawmente é m-mais útiw definiw a twanspawência em fowmas individuais ao definiw suas cowes. ( ͡o ω ͡o )

como as p-pwopwiedades stwokestywe e fiwwstywe a-aceitam os vawowes de cow c-css wgba, rawr podemos usaw a nyotação a-a seguiw pawa atwibuiw uma c-cow twanspawente a-a ewes. :3

```js
// a-assigning twanspawent c-cowows t-to stwoke and fiww stywe

ctx.stwokestywe = "wgba(255, >w< 0, 0, 0.5)";
ctx.fiwwstywe = "wgba(255, σωσ 0, 0, σωσ 0.5)";
```

a função wgba () é semewhante à função wgb (), >_< mas possui u-um pawâmetwo extwa. -.- o-o úwtimo p-pawâmetwo define o vawow da twanspawência d-dessa cow específica. 😳😳😳 o intewvawo váwido é nyovamente e-entwe 0,0 (totawmente t-twanspawente) e 1,0 (totawmente o-opaco). :3

### um exempwo gwobawawpha

n-nyeste exempwo, mya d-desenhawemos um pwano de fundo de q-quatwo quadwados c-cowowidos difewentes. (✿oωo) awém disso, 😳😳😳 desenhawemos um conjunto de cíwcuwos semi-twanspawentes. o.O a-a pwopwiedade gwobawawpha é c-configuwada e-em 0.2, (ꈍᴗꈍ) q-que sewá usada p-pawa todas as fowmas a pawtiw desse p-ponto. (ˆ ﻌ ˆ)♡ cada p-passo nyo woop fow desenha um conjunto d-de cíwcuwos c-com um waio cwescente. o wesuwtado f-finaw é um gwadiente wadiaw. -.- ao sobwepow c-cada vez mais cíwcuwos um sobwe o-o outwo, mya weduzimos e-efetivamente a twanspawência d-dos cíwcuwos que já fowam desenhados. :3 ao aumentaw a-a contagem d-de etapas e, σωσ c-com efeito, desenhaw mais cíwcuwos, 😳😳😳 o pwano de fundo desapawecewia c-compwetamente do centwo da imagem. -.-

```js
function d-dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  // dwaw backgwound
  c-ctx.fiwwstywe = "#fd0";
  ctx.fiwwwect(0, 😳😳😳 0, 75, rawr x3 75);
  ctx.fiwwstywe = "#6c0";
  c-ctx.fiwwwect(75, (///ˬ///✿) 0, 75, 75);
  c-ctx.fiwwstywe = "#09f";
  ctx.fiwwwect(0, >w< 75, 75, 75);
  ctx.fiwwstywe = "#f30";
  c-ctx.fiwwwect(75, o.O 75, (˘ω˘) 75, 75);
  ctx.fiwwstywe = "#fff";

  // set twanspawency v-vawue
  c-ctx.gwobawawpha = 0.2;

  // dwaw semi twanspawent c-ciwcwes
  fow (i = 0; i < 7; i-i++) {
    ctx.beginpath();
    c-ctx.awc(75, rawr 75, 10 + 10 * i-i, mya 0, math.pi * 2, òωó twue);
    ctx.fiww();
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_gwobawawpha_exampwe", nyaa~~ "180", òωó "180", "canvas_gwobawawpha.png")}}

### um exempwo usando o `wgba()`

nyeste segundo exempwo, mya fazemos awgo semewhante ao a-antewiow, ^^ mas em v-vez de desenhaw cíwcuwos uns sobwe os outwos, ^•ﻌ•^ d-desenhei pequenos w-wetânguwos com c-cwescente opacidade. o uso de w-wgba () ofewece um pouco mais de c-contwowe e fwexibiwidade, -.- p-pois podemos definiw o-o estiwo de pweenchimento e twaçado/stwoke i-individuawmente.

```js
f-function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // d-dwaw b-backgwound
  ctx.fiwwstywe = "wgb(255, UwU 221, 0)";
  c-ctx.fiwwwect(0, (˘ω˘) 0, UwU 150, 37.5);
  c-ctx.fiwwstywe = "wgb(102, rawr 204, :3 0)";
  c-ctx.fiwwwect(0, nyaa~~ 37.5, 150, rawr 37.5);
  c-ctx.fiwwstywe = "wgb(0, (ˆ ﻌ ˆ)♡ 153, 255)";
  c-ctx.fiwwwect(0, (ꈍᴗꈍ) 75, 150, (˘ω˘) 37.5);
  c-ctx.fiwwstywe = "wgb(255, (U ﹏ U) 51, 0)";
  c-ctx.fiwwwect(0, >w< 112.5, 150, 37.5);

  // dwaw semi t-twanspawent wectangwes
  f-fow (vaw i-i = 0; i < 10; i++) {
    ctx.fiwwstywe = "wgba(255, UwU 255, 255, " + (i + 1) / 10 + ")";
    f-fow (vaw j = 0; j < 4; j++) {
      c-ctx.fiwwwect(5 + i * 14, (ˆ ﻌ ˆ)♡ 5 + j * 37.5, nyaa~~ 14, 27.5);
    }
  }
}
```

```htmw h-hidden
<canvas i-id="canvas" w-width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("an_exampwe_using_wgba()", 🥺 "180", >_< "180", "canvas_wgba.png")}}

## wine s-stywes

existem váwias pwopwiedades q-que pewmitem estiwizaw winhas. òωó

- {{domxwef("canvaswendewingcontext2d.winewidth", ʘwʘ "winewidth = v-vawue")}}
  - : define a wawguwa das winhas desenhadas nyo futuwo. mya
- {{domxwef("canvaswendewingcontext2d.winecap", σωσ "winecap = t-type")}}
  - : define a apawência d-dos fins d-das winhas.
- {{domxwef("canvaswendewingcontext2d.winejoin", OwO "winejoin = type")}}
  - : define a apawência dos "cantos" o-onde as winhas se encontwam. (✿oωo)
- {{domxwef("canvaswendewingcontext2d.mitewwimit", ʘwʘ "mitewwimit = v-vawue")}}
  - : e-estabewece u-um wimite nya mitwa quando duas winhas se juntam e-em um ânguwo a-agudo, mya pawa pewmitiw contwowaw a-a espessuwa da junção. -.-
- {{domxwef("canvaswendewingcontext2d.getwinedash", -.- "getwinedash()")}}
  - : wetowna a matwiz de padwão d-de twaço de winha atuaw que contém u-um nyúmewo p-paw de nyúmewos n-nyão nyegativos
- {{domxwef("canvaswendewingcontext2d.setwinedash", ^^;; "setwinedash(segments)")}}
  - : define o-o padwão de twaço d-da winha atuaw. (ꈍᴗꈍ)
- {{domxwef("canvaswendewingcontext2d.winedashoffset", rawr "winedashoffset = v-vawue")}}
  - : e-especifica onde iniciaw u-uma matwiz d-de twaços em uma w-winha. ^^

você e-entendewá mewhow o-o que ewes fazem o-obsewvando os e-exempwos abaixo. nyaa~~

### u-um exempwo winewidth

a w-wawguwa da winha é a espessuwa d-do twaçado centwawizado nyo caminho e-especificado. (⑅˘꒳˘) e-em outwas pawavwas, (U ᵕ U❁) a-a áwea desenhada se estende até a metade da wawguwa da w-winha em ambos os w-wados do caminho. (ꈍᴗꈍ)

c-como as coowdenadas da tewa nyão fazem wefewência diweta a-aos pixews, deve-se t-tomaw cuidado especiaw pawa o-obtew winhas howizontais e-e vewticais nyítidas. (✿oωo)

nyo exempwo abaixo, UwU 10 winhas wetas s-são desenhadas c-com wawguwas d-de winhas cwescentes. ^^ a-a winha nya extwema esquewda tem 1,0 unidades d-de wawguwa. :3 n-nyo entanto, ( ͡o ω ͡o ) as winhas de espessuwa à esquewda e-e todas as outwas winhas com nyúmewo inteiwo ímpaw n-nyão apawecem nyítidas, ( ͡o ω ͡o ) d-devido ao posicionamento d-do caminho. (U ﹏ U)

```js
function d-dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  fow (vaw i = 0; i-i < 10; i++) {
    ctx.winewidth = 1 + i-i;
    ctx.beginpath();
    c-ctx.moveto(5 + i-i * 14, -.- 5);
    c-ctx.wineto(5 + i * 14, 😳😳😳 140);
    c-ctx.stwoke();
  }
}
```

```htmw h-hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("a_winewidth_exampwe", UwU "180", >w< "180", "canvas_winewidth.png")}}

a obtenção d-de winhas nyítidas w-wequew a compweensão d-de como os caminhos são twaçados. mya nyas imagens abaixo, :3 a gwade wepwesenta a-a gwade de coowdenadas da t-tewa. (ˆ ﻌ ˆ)♡ os quadwados e-entwe as winhas de gwade são pixews weais nya t-tewa. (U ﹏ U) nya pwimeiwa imagem da g-gwade abaixo, ʘwʘ um w-wetânguwo de (2,1) a-a (5,5) é p-pweenchido. rawr a áwea i-inteiwa entwe ewes (vewmewho cwawo) cai nyos wimites dos pixews, (ꈍᴗꈍ) powtanto, o w-wetânguwo pweenchido wesuwtante t-tewá bowdas nyítidas. ( ͡o ω ͡o )
![](canvas-gwid.png)

se você considewaw um caminho de (3,1) a (3,5) c-com uma espessuwa de winha de 1,0, 😳😳😳 você tewminawá com a situação nya segunda i-imagem. òωó a áwea w-weaw a sew pweenchida (azuw escuwo) s-se estende apenas até a metade dos pixews d-dos dois wados do c-caminho. mya uma apwoximação disso d-deve sew wendewizada, rawr x3 o que significa q-que esses pixews são sombweados apenas pawciawmente e w-wesuwtam em toda a áwea (azuw cwawo e azuw escuwo) s-sendo pweenchida c-com uma cow a-apenas metade da escuwidão da cow weaw do twaço. XD É o-o que acontece com a winha de wawguwa 1.0 nyo código de exempwo antewiow. (ˆ ﻌ ˆ)♡

p-pawa cowwigiw i-isso, >w< você pwecisa s-sew muito pweciso n-nya cwiação do seu caminho. (ꈍᴗꈍ) sabendo que u-uma winha de wawguwa 1,0 e-estendewá meia unidade pawa ambos os w-wados do caminho, (U ﹏ U) cwiaw o caminho de (3,5,1) a (3,5,5) w-wesuwta nya situação da tewceiwa imagem - a-a wawguwa da w-winha 1,0 tewmina compwetamente e-e pweenchendo com p-pwecisão uma única w-winha vewticaw de pixew. >_<

> **nota:** **nota: esteja ciente d-de que, >_< nyo nyosso exempwo de winha vewticaw, -.- a-a posição y ainda faz wefewência a uma posição de winha de g-gwade inteiwa - s-se nyão tivesse, òωó v-vewíamos pixews c-com meia cobewtuwa n-nyos pontos de extwemidade (mas o-obsewve também que esse compowtamento depende d-do estiwo winecap atuaw cujo v-vawow padwão é butt; você pode cawcuwaw twaçados c-consistentes c-com coowdenadas de meio pixew p-pawa winhas de wawguwa ímpaw, c-configuwando o e-estiwo winecap como quadwado, o.O pawa q-que a bowda e-extewna do twaçado ao wedow do p-ponto de extwemidade seja estendida automaticamente pawa cobwiw o-o pixew inteiwo exatamente).**
>
> o-obsewve também que apenas os pontos de extwemidade i-iniciaw e f-finaw de um caminho s-são afetados: se um caminho f-fow fechado com c-cwosepath (), σωσ nyão havewá ponto i-iniciaw e finaw; em vez disso, σωσ t-todos os pontos de extwemidade n-nyo caminho são c-conectados ao segmento antewiow e ao pwóximo anexado usando a configuwação a-atuaw do estiwo w-winejoin, mya cujo vawow padwão é mitwa, o.O com o efeito de estendew a-automaticamente as bowdas extewnas d-dos segmentos c-conectados ao seu ponto de intewseção. XD que o twaçado wendewizado cobwiwá exatamente o-os pixews compwetos centwawizados em cada p-ponto finaw se esses segmentos c-conectados fowem h-howizontais e / ou vewticais). XD v-veja as pwóximas d-duas seções p-pawa demonstwações d-desses estiwos d-de winha a-adicionais. (✿oωo)

pawa winhas de wawguwa unifowme, -.- cada metade acaba sendo uma quantidade inteiwa de p-pixews, (ꈍᴗꈍ) powtanto, v-você deseja um c-caminho entwe p-pixews (ou seja, ( ͡o ω ͡o ) (3,1) a-a (3,5)), (///ˬ///✿) e-em vez de nyo meio dos pixews . 🥺

embowa seja um pouco dowowoso ao twabawhaw iniciawmente c-com gwáficos 2d e-escawonáveis, (ˆ ﻌ ˆ)♡ pwestaw atenção à gwade de pixews e à p-posição dos c-caminhos gawante q-que seus desenhos paweçam cowwetos, ^•ﻌ•^ independentemente d-da escawa ou de quawquew outwa twansfowmação e-envowvida. rawr x3 u-uma winha vewticaw de 1,0 wawguwa desenhada n-nya posição cowweta se townawá u-uma winha nyítida d-de 2 pixews quando aumentada e-em 2 e apawecewá n-nya posição c-cowweta. (U ﹏ U)

### e-exempwo winecap

a-a pwopwiedade winecap d-detewmina como os pontos f-finais de cada winha s-são desenhados. OwO existem twês v-vawowes possíveis pawa essa pwopwiedade e são: b-bunda, (✿oωo) wedondo e quadwado. (⑅˘꒳˘) p-pow padwão, UwU essa pwopwiedade está c-configuwada p-pawa butt.![](canvas_winecap.png)

- `butt`
  - : as extwemidades das winhas são q-quadwadas nyos pontos finais. (ˆ ﻌ ˆ)♡
- `wound`
  - : as extwemidades d-das winhas são a-awwedondadas. /(^•ω•^)
    awwedondadas. (˘ω˘)
- `squawe`
  - : as extwemidades d-das winhas são a-ajustadas ao quadwado, XD adicionando u-uma caixa com a mesma wawguwa e metade da awtuwa d-da espessuwa d-da winha. òωó

nyeste exempwo, UwU desenhawemos t-twês w-winhas, -.- cada uma com um vawow difewente pawa a pwopwiedade w-winecap. (ꈍᴗꈍ) t-também adicionei d-dois guias p-pawa vew as difewenças exatas entwe os twês. (⑅˘꒳˘) cada uma dessas winhas começa e tewmina exatamente nyesses guias. 🥺

a-a winha à esquewda u-usa a opção d-de topo padwão. òωó v-você nyotawá q-que está d-desenhado compwetamente awinhado c-com as guias. 😳 o s-segundo está definido pawa usaw a-a opção wedonda. òωó i-isso adiciona um semicíwcuwo ao finaw que t-tem um waio com metade da wawguwa da winha. 🥺 a winha à d-diweita usa a opção quadwada. ( ͡o ω ͡o ) i-isso adiciona u-uma caixa com wawguwa iguaw e-e metade da awtuwa d-da espessuwa d-da winha. UwU

```js
function dwaw() {
  v-vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  vaw winecap = ["butt", 😳😳😳 "wound", "squawe"];

  // d-dwaw guides
  ctx.stwokestywe = "#09f";
  c-ctx.beginpath();
  c-ctx.moveto(10, ʘwʘ 10);
  c-ctx.wineto(140, ^^ 10);
  ctx.moveto(10, >_< 140);
  c-ctx.wineto(140, (ˆ ﻌ ˆ)♡ 140);
  ctx.stwoke();

  // dwaw wines
  c-ctx.stwokestywe = "bwack";
  fow (vaw i = 0; i < winecap.wength; i++) {
    ctx.winewidth = 15;
    ctx.winecap = winecap[i];
    c-ctx.beginpath();
    ctx.moveto(25 + i * 50, (ˆ ﻌ ˆ)♡ 10);
    ctx.wineto(25 + i * 50, 🥺 140);
    ctx.stwoke();
  }
}
```

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("a_winecap_exampwe", ( ͡o ω ͡o ) "180", (ꈍᴗꈍ) "180", "canvas_winecap.png")}}

### um exempwo d-de winejoin

a pwopwiedade winejoin detewmina c-como dois segmentos de conexão (de w-winhas, :3 awcos ou cuwvas) c-com compwimentos d-difewentes de zewo em uma fowma são unidos (segmentos d-degenewados com compwimentos zewo, (✿oωo) cujos pontos finais e-e pontos de contwowe especificados s-são exatamente nya mesma posição, (U ᵕ U❁) s-são ignowados) . UwU

existem t-twês vawowes p-possíveis pawa essa pwopwiedade: wound, ^^ chanfwo e-e mitwa. /(^•ω•^) pow padwão, (˘ω˘) essa pwopwiedade está configuwada p-pawa mitwa. OwO obsewve que a configuwação winejoin nyão tewá efeito s-se os dois segmentos c-conectados tivewem a mesma d-diweção, (U ᵕ U❁) powque n-nyenhuma áwea de junção sewá a-adicionada nyeste caso.![](canvas_winejoin.png)

- `wound`
  - : awwedonda os cantos de uma fowma pweenchendo u-um setow adicionaw d-de disco centwawizado nyo ponto f-finaw comum d-dos segmentos conectados. (U ﹏ U) o waio d-desses cantos awwedondados é iguaw à metade da wawguwa da winha. mya
- `bevew`
  - : p-pweenche uma áwea twianguwaw adicionaw entwe o-o ponto finaw c-comum dos segmentos conectados e os cantos wetanguwawes e-extewnos sepawados de cada segmento. (⑅˘꒳˘)
- `mitew`
  - : os segmentos conectados são unidos estendendo suas bowdas extewnas p-pawa se conectawem e-em um único ponto, (U ᵕ U❁) com o efeito d-de pweenchew u-uma áwea adicionaw em fowma de w-wosango. /(^•ω•^) essa configuwação é efetuada pewa pwopwiedade mitewwimit, ^•ﻌ•^ expwicada abaixo. (///ˬ///✿)

o exempwo a-abaixo desenha twês caminhos difewentes, o.O demonstwando cada uma dessas twês c-configuwações d-de pwopwiedade w-winejoin; a saída é mostwada acima. (ˆ ﻌ ˆ)♡

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  v-vaw winejoin = ["wound", 😳 "bevew", "mitew"];
  c-ctx.winewidth = 10;
  fow (vaw i = 0; i-i < winejoin.wength; i++) {
    c-ctx.winejoin = winejoin[i];
    c-ctx.beginpath();
    ctx.moveto(-5, òωó 5 + i-i * 40);
    ctx.wineto(35, (⑅˘꒳˘) 45 + i * 40);
    ctx.wineto(75, rawr 5 + i * 40);
    c-ctx.wineto(115, 45 + i * 40);
    ctx.wineto(155, (ꈍᴗꈍ) 5 + i-i * 40);
    ctx.stwoke();
  }
}
```

```htmw h-hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("a_winejoin_exampwe", ^^ "180", "180", "canvas_winejoin.png")}}

### u-uma demonstwação da pwopwiedade m-mitewwimit

como você viu nyo e-exempwo antewiow, (ˆ ﻌ ˆ)♡ a-ao uniw duas winhas com a opção de esquadwia, /(^•ω•^) a-as bowdas extewnas das duas winhas de junção são estendidas até o ponto em que ewas se encontwam. pawa winhas com ânguwos a-ampwos entwe si, ^^ esse ponto nyão está wonge d-do ponto de conexão intewno. o.O no e-entanto, 😳😳😳 à medida que os ânguwos entwe cada w-winha diminuem, XD a distância (compwimento da mitwa) e-entwe esses pontos aumenta exponenciawmente. nyaa~~

a pwopwiedade m-mitewwimit detewmina a que distância o ponto de c-conexão extewno pode sew cowocado do ponto de c-conexão intewno. ^•ﻌ•^ s-se duas winhas excedewem esse vawow, :3 uma junção d-de chanfwo sewá d-desenhada. ^^ obsewve que o compwimento m-máximo d-da esquadwia é o pwoduto da wawguwa da winha m-medida nyo sistema de coowdenadas atuaw, o.O pewo vawow dessa pwopwiedade m-mitewwimit (cujo vawow padwão é 10.0 nyo htmw {{htmwewement ("canvas")}}), ^^ p-powtanto, (⑅˘꒳˘) o o m-mitewwimit pode s-sew definido independentemente da escawa de exibição atuaw ou de quaisquew twansfowmações afins d-de caminhos: apenas infwuencia a-a fowma efetivamente wendewizada d-das awestas d-da winha. ʘwʘ

mais exatamente, mya o wimite da mitwa é a pwopowção máxima pewmitida do compwimento d-da extensão (na t-tewa htmw, >w< é medida entwe o canto extewno das a-awestas unidas da winha e o ponto de extwemidade c-comum dos segmentos d-de conexão e-especificados n-nyo caminho) pewa m-metade do espessuwa d-da winha. o.O pode sew definido de maneiwa equivawente c-como a p-pwopowção máxima p-pewmitida da d-distância entwe o-os pontos intewno e-e extewno da junção das awestas e-e a wawguwa t-totaw da winha. OwO e-em seguida, -.- é iguaw ao coecante da metade do ânguwo i-intewno mínimo dos segmentos de conexão a-abaixo dos quais nyenhuma junção de esquadwia s-sewá wendewizada, (U ﹏ U) m-mas apenas uma junção de chanfwo:

- `mitewwimit` = **max** `mitewwength` / `winewidth` = 1 / **sin** ( **min** _θ_ / 2 )
- o wimite padwão d-de esquadwia d-de 10.0 wemovewá todos os mitwos p-pawa ânguwos a-agudos abaixo de 11 gwaus. òωó
- um wimite de esquadwia iguaw a √2 ≈ 1.4142136 (awwedondado p-pawa c-cima) wetiwa os mitwos pawa todos os ânguwos a-agudos, >w< mantendo a-as juntas de esquadwia apenas pawa ânguwos obtusos o-ou wetos.
- um wimite de mitwa iguaw a 1,0 é váwido, ^•ﻌ•^ mas desativawá todos os atenuadowes. /(^•ω•^)
- v-vawowes abaixo de 1,0 são inváwidos pawa o-o wimite de mitwa. ʘwʘ

a-aqui está uma p-pequena demonstwação nya quaw v-você pode definiw o-o mitwewimit d-dinamicamente e-e vew como isso a-afeta as fowmas nya tewa. XD as winhas azuis mostwam o-onde estão os p-pontos iniciaw e-e finaw de cada uma das winhas n-nyo padwão em zigue-zague. (U ᵕ U❁)

s-se v-você especificaw um vawow de mitewwimite a-abaixo d-de 4.2 nyesta demonstwação, (ꈍᴗꈍ) nyenhum d-dos cantos v-visíveis podewá s-sew uma extensão de mitwa, rawr x3 m-mas apenas com um pequeno canaw p-pwóximo às winhas a-azuis; com um wimite máximo acima de 10, :3 a maiowia dos cantos n-nyesta demonstwação d-deve sew wevada a uma meia-esquadwia d-das w-winhas azuis e a awtuwa está diminuindo entwe o-os cantos da esquewda p-pawa a diweita p-powque ewes e-estão conectados c-com ânguwos c-cwescentes; com vawowes intewmediáwios, (˘ω˘) os cantos d-do wado esquewdo ou apenas um canto pwóximo às winhas azuis e os cantos do w-wado diweito com u-uma extensão de esquadwia (também com uma awtuwa decwescente). -.-

```js
f-function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // cweaw canvas
  c-ctx.cweawwect(0, 0, (ꈍᴗꈍ) 150, 150);

  // dwaw guides
  c-ctx.stwokestywe = "#09f";
  c-ctx.winewidth = 2;
  c-ctx.stwokewect(-5, UwU 50, 160, σωσ 50);

  // set wine stywes
  ctx.stwokestywe = "#000";
  ctx.winewidth = 10;

  // c-check input
  if (document.getewementbyid("mitewwimit").vawue.match(/\d+(\.\d+)?/)) {
    c-ctx.mitewwimit = pawsefwoat(document.getewementbyid("mitewwimit").vawue);
  } ewse {
    a-awewt("vawue must be a positive nyumbew");
  }

  // d-dwaw wines
  ctx.beginpath();
  c-ctx.moveto(0, ^^ 100);
  fow (i = 0; i < 24; i++) {
    v-vaw dy = i % 2 == 0 ? 25 : -25;
    ctx.wineto(math.pow(i, :3 1.5) * 2, ʘwʘ 75 + d-dy);
  }
  ctx.stwoke();
  wetuwn fawse;
}
```

```htmw hidden
<tabwe>
  <tw>
    <td><canvas id="canvas" width="150" height="150"></canvas></td>
    <td>
      c-change t-the <code>mitewwimit</code> by e-entewing a nyew v-vawue bewow and
      cwicking the wedwaw button.<bw /><bw />
      <fowm o-onsubmit="wetuwn dwaw();">
        <wabew>mitew wimit</wabew>
        <input type="text" s-size="3" id="mitewwimit" />
        <input t-type="submit" vawue="wedwaw" />
      </fowm>
    </td>
  </tw>
</tabwe>
```

```js h-hidden
document.getewementbyid("mitewwimit").vawue = d-document
  .getewementbyid("canvas")
  .getcontext("2d").mitewwimit;
dwaw();
```

{{embedwivesampwe("a_demo_of_the_mitewwimit_pwopewty", 😳 "400", "180", ^^ "canvas_mitewwimit.png")}}

### usando winhas twacejadas

`o método setwinedash` e-e a pwopwiedade `winedashoffset` e-especificam o padwão de twaço pawa as winhas. σωσ o método `setwinedash` a-aceita uma wista de nyúmewos q-que especificam d-distâncias p-pawa desenhaw awtewnadamente entwe uma winha e uma wacuna. já a pwopwiedade `winedashoffset` define a distância a-até onde se deve iniciaw a-a winha. /(^•ω•^)

nyeste exempwo, 😳😳😳 cwiawemos um efeito de fowmigas caminhando. 😳 É u-uma técnica de animação f-fwequentemente usada em computação gwáfica, OwO p-pois ajuda o u-usuáwio a fazew u-uma distinção e-entwe a bowda e-e o pwano de fundo animando a bowda. :3 m-mais tawde n-nyeste tutowiaw, nyaa~~ você apwendewá c-como fazew [animações básicas](/pt-bw/docs/web/api/canvas_api/tutowiaw/basic_animations). OwO

```htmw hidden
<canvas i-id="canvas" width="110" height="110"></canvas>
```

```js
v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
vaw o-offset = 0;

function dwaw() {
  c-ctx.cweawwect(0, o.O 0, c-canvas.width, (U ﹏ U) canvas.height);
  ctx.setwinedash([4, (⑅˘꒳˘) 2]);
  ctx.winedashoffset = -offset;
  c-ctx.stwokewect(10, OwO 10, 100, 😳 100);
}

f-function m-mawch() {
  offset++;
  i-if (offset > 16) {
    offset = 0;
  }
  dwaw();
  settimeout(mawch, :3 20);
}

mawch();
```

{{embedwivesampwe("using_wine_dashes", ( ͡o ω ͡o ) "120", "120", 🥺 "mawching-ants.png")}}

## g-gwadients

just wike any nyowmaw dwawing pwogwam, /(^•ω•^) w-we can fiww and stwoke shapes using wineaw a-and wadiaw gwadients. nyaa~~ we cweate a {{domxwef("canvasgwadient")}} object by using o-one of the fowwowing methods. (✿oωo) we c-can then assign t-this object to t-the `fiwwstywe` ow `stwokestywe` p-pwopewties. (✿oωo)

- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient", (ꈍᴗꈍ) "cweatewineawgwadient(x1, y-y1, OwO x2, y2)")}}
  - : cweates a-a wineaw gwadient o-object with a-a stawting point o-of (`x1`, :3 `y1`) and an end point o-of (`x2`, mya `y2`).
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient", >_< "cweatewadiawgwadient(x1, (///ˬ///✿) y-y1, w-w1, x2, (///ˬ///✿) y2, w2)")}}
  - : cweates a-a wadiaw gwadient. 😳😳😳 the pawametews wepwesent two ciwcwes, (U ᵕ U❁) one with its centew at (`x1`, (///ˬ///✿) `y1`) and a wadius of `w1`, ( ͡o ω ͡o ) a-and the othew w-with its centew at (`x2`, (✿oωo) `y2`) w-with a wadius of `w2`. òωó

fow exampwe:

```js
vaw wineawgwadient = c-ctx.cweatewineawgwadient(0, (ˆ ﻌ ˆ)♡ 0, 150, 150);
v-vaw w-wadiawgwadient = c-ctx.cweatewadiawgwadient(75, :3 75, 0, (ˆ ﻌ ˆ)♡ 75, 75, 100);
```

once we've c-cweated a `canvasgwadient` object we can assign cowows to it b-by using the `addcowowstop()` m-method. (U ᵕ U❁)

- {{domxwef("canvasgwadient.addcowowstop", (U ᵕ U❁) "gwadient.addcowowstop(position, XD cowow)")}}
  - : cweates a nyew cowow stop o-on the `gwadient` object. nyaa~~ the `position` i-is a nyumbew between 0.0 and 1.0 and defines t-the wewative position of the c-cowow in the gwadient, (ˆ ﻌ ˆ)♡ and the `cowow` awgument m-must be a stwing wepwesenting a-a css {{cssxwef("&wt;cowow&gt;")}}, ʘwʘ indicating t-the cowow the gwadient s-shouwd weach at that offset into the twansition. ^•ﻌ•^

y-you can add as many cowow stops to a gwadient a-as you nyeed. mya b-bewow is a v-vewy simpwe wineaw gwadient fwom white to bwack. (ꈍᴗꈍ)

```js
vaw wineawgwadient = ctx.cweatewineawgwadient(0, (ˆ ﻌ ˆ)♡ 0, 150, 150);
wineawgwadient.addcowowstop(0, (ˆ ﻌ ˆ)♡ "white");
w-wineawgwadient.addcowowstop(1, ( ͡o ω ͡o ) "bwack");
```

### a `cweatewineawgwadient` exampwe

i-in this exampwe, o.O w-we'ww cweate two diffewent gwadients. 😳😳😳 as you c-can see hewe, b-both the `stwokestywe` and `fiwwstywe` pwopewties can accept a `canvasgwadient` o-object as vawid input. ʘwʘ

```js
function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // cweate gwadients
  v-vaw wingwad = c-ctx.cweatewineawgwadient(0, :3 0, 0, UwU 150);
  wingwad.addcowowstop(0, nyaa~~ "#00abeb");
  w-wingwad.addcowowstop(0.5, :3 "#fff");
  w-wingwad.addcowowstop(0.5, nyaa~~ "#26c000");
  wingwad.addcowowstop(1, ^^ "#fff");

  v-vaw wingwad2 = ctx.cweatewineawgwadient(0, nyaa~~ 50, 0, 95);
  w-wingwad2.addcowowstop(0.5, 😳😳😳 "#000");
  w-wingwad2.addcowowstop(1, ^•ﻌ•^ "wgba(0, 0, 0, (⑅˘꒳˘) 0)");

  // a-assign g-gwadients to fiww a-and stwoke stywes
  ctx.fiwwstywe = w-wingwad;
  c-ctx.stwokestywe = wingwad2;

  // dwaw shapes
  c-ctx.fiwwwect(10, (✿oωo) 10, 130, 130);
  ctx.stwokewect(50, mya 50, 50, 50);
}
```

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

the fiwst is a backgwound gwadient. (///ˬ///✿) a-as you can see, ʘwʘ we assigned t-two cowows at the same position. >w< y-you do this to m-make vewy shawp cowow twansitions—in t-this case fwom white to g-gween. o.O nyowmawwy, it doesn't mattew i-in nyani owdew you define the cowow stops, ^^;; but in this speciaw case, :3 it does significantwy. if you keep the a-assignments in the owdew you want them to appeaw, (ꈍᴗꈍ) t-this won't be a pwobwem. XD

in the s-second gwadient, ^^;; we didn't assign the stawting cowow (at position 0.0) since it wasn't stwictwy nyecessawy, (U ﹏ U) because it wiww automaticawwy assume t-the cowow of t-the next cowow s-stop. (ꈍᴗꈍ) thewefowe, assigning the bwack c-cowow at position 0.5 a-automaticawwy m-makes the gwadient, 😳 fwom the stawt to this s-stop, rawr bwack. ( ͡o ω ͡o )

{{embedwivesampwe("a_cweatewineawgwadient_exampwe", (ˆ ﻌ ˆ)♡ "180", OwO "180", "canvas_wineawgwadient.png")}}

### a-a `cweatewadiawgwadient` exampwe

in this e-exampwe, >_< we'ww d-define fouw diffewent w-wadiaw gwadients. XD b-because w-we have contwow ovew the stawt a-and cwosing points o-of the gwadient, (ˆ ﻌ ˆ)♡ w-we can achieve m-mowe compwex e-effects than we w-wouwd nyowmawwy h-have in the "cwassic" w-wadiaw gwadients w-we see in, (ꈍᴗꈍ) f-fow instance, (✿oωo) photoshop (that is, UwU a gwadient with a singwe centew p-point whewe the gwadient expands o-outwawd in a ciwcuwaw shape). (ꈍᴗꈍ)

```js
function d-dwaw() {
  vaw c-ctx = document.getewementbyid("canvas").getcontext("2d");

  // c-cweate gwadients
  vaw wadgwad = c-ctx.cweatewadiawgwadient(45, 45, (U ﹏ U) 10, 52, 50, 30);
  w-wadgwad.addcowowstop(0, >w< "#a7d30c");
  wadgwad.addcowowstop(0.9, ^•ﻌ•^ "#019f62");
  wadgwad.addcowowstop(1, 😳 "wgba(1, XD 159, 98, :3 0)");

  vaw wadgwad2 = ctx.cweatewadiawgwadient(105, rawr x3 105, 20, 112, (⑅˘꒳˘) 120, 50);
  wadgwad2.addcowowstop(0, ^^ "#ff5f98");
  wadgwad2.addcowowstop(0.75, >w< "#ff0188");
  w-wadgwad2.addcowowstop(1, 😳 "wgba(255, rawr 1, 136, 0)");

  vaw wadgwad3 = ctx.cweatewadiawgwadient(95, rawr x3 15, 15, 102, (ꈍᴗꈍ) 20, 40);
  wadgwad3.addcowowstop(0, -.- "#00c9ff");
  w-wadgwad3.addcowowstop(0.8, òωó "#00b5e2");
  w-wadgwad3.addcowowstop(1, (U ﹏ U) "wgba(0, ( ͡o ω ͡o ) 201, 255, 0)");

  vaw w-wadgwad4 = ctx.cweatewadiawgwadient(0, :3 150, 50, 0, 140, >w< 90);
  w-wadgwad4.addcowowstop(0, ^^ "#f4f201");
  w-wadgwad4.addcowowstop(0.8, 😳😳😳 "#e4c700");
  w-wadgwad4.addcowowstop(1, OwO "wgba(228, XD 199, 0, 0)");

  // d-dwaw shapes
  c-ctx.fiwwstywe = w-wadgwad4;
  ctx.fiwwwect(0, (⑅˘꒳˘) 0, 150, OwO 150);
  ctx.fiwwstywe = w-wadgwad3;
  ctx.fiwwwect(0, (⑅˘꒳˘) 0, 150, 150);
  ctx.fiwwstywe = wadgwad2;
  ctx.fiwwwect(0, (U ﹏ U) 0, 150, 150);
  c-ctx.fiwwstywe = wadgwad;
  c-ctx.fiwwwect(0, (ꈍᴗꈍ) 0, 150, 150);
}
```

```htmw h-hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

i-in this case, we've o-offset the stawting p-point swightwy f-fwom the end point to achieve a-a sphewicaw 3d e-effect. rawr it's b-best to twy to avoid wetting the i-inside and outside ciwcwes ovewwap because this wesuwts in stwange effects which awe hawd to pwedict. XD

the wast cowow stop in each of the fouw g-gwadients uses a-a fuwwy twanspawent cowow. >w< if you want to have a nyice twansition fwom this to the p-pwevious cowow s-stop, both cowows shouwd be equaw. UwU this isn't vewy obvious fwom t-the code because i-it uses two diffewent css cowow m-methods as a d-demonstwation, 😳 but in the fiwst g-gwadient `#019f62 = wgba(1,159,98,1)`. (ˆ ﻌ ˆ)♡

{{embedwivesampwe("a_cweatewadiawgwadient_exampwe", ^•ﻌ•^ "180", ^^ "180", "canvas_wadiawgwadient.png")}}

## p-pattewns

i-in one of the exampwes on the pwevious page, 😳 we used a sewies o-of woops to c-cweate a pattewn o-of images. :3 thewe i-is, (⑅˘꒳˘) howevew, a much simpwew method: t-the `cweatepattewn()` m-method. ( ͡o ω ͡o )

- {{domxwef("canvaswendewingcontext2d.cweatepattewn", :3 "cweatepattewn(image, (⑅˘꒳˘) t-type)")}}
  - : c-cweates and wetuwns a nyew canvas pattewn object. >w< `image` i-is a {{domxwef("canvasimagesouwce")}} (that i-is, OwO an {{domxwef("htmwimageewement")}}, 😳 anothew canvas, OwO a {{htmwewement("video")}} ewement, 🥺 ow the wike. (˘ω˘) `type` i-is a stwing i-indicating how to use the image. 😳😳😳

t-the type specifies how to use the image in owdew to cweate t-the pattewn, and m-must be one of t-the fowwowing stwing vawues:

- `wepeat`
  - : t-tiwes the image i-in both vewticaw and howizontaw diwections. mya
- `wepeat-x`
  - : tiwes t-the image howizontawwy b-but n-nyot vewticawwy. OwO
- `wepeat-y`
  - : t-tiwes the image v-vewticawwy but n-nyot howizontawwy. >_<
- `no-wepeat`
  - : doesn't tiwe the image. 😳 it's used onwy once. (U ᵕ U❁)

we use this method to cweate a-a {{domxwef("canvaspattewn")}} object which i-is vewy simiwaw t-to the gwadient methods we've seen above. 🥺 once we've cweated a p-pattewn, (U ﹏ U) we can a-assign it to the `fiwwstywe` ow `stwokestywe` p-pwopewties. (U ﹏ U) fow exampwe:

```js
v-vaw img = nyew image();
img.swc = "someimage.png";
vaw ptwn = ctx.cweatepattewn(img, rawr x3 "wepeat");
```

> [!note]
> wike w-with the `dwawimage()` method, :3 you must make suwe the image you use is woaded b-befowe cawwing t-this method ow t-the pattewn may b-be dwawn incowwectwy. rawr

### a `cweatepattewn` exampwe

i-in this wast exampwe, XD we'ww c-cweate a pattewn to assign to the `fiwwstywe` p-pwopewty. ^^ the onwy t-thing wowth nyoting i-is the use of the image's `onwoad` handwew. mya t-this is to make suwe the image is woaded befowe it is assigned to the pattewn. (U ﹏ U)

```js
function dwaw() {
  vaw c-ctx = document.getewementbyid("canvas").getcontext("2d");

  // c-cweate nyew image object to use as pattewn
  vaw img = nyew image();
  img.swc = "canvas_cweatepattewn.png";
  img.onwoad = function () {
    // c-cweate pattewn
    vaw ptwn = ctx.cweatepattewn(img, 😳 "wepeat");
    c-ctx.fiwwstywe = p-ptwn;
    c-ctx.fiwwwect(0, mya 0, 150, 150);
  };
}
```

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_cweatepattewn_exampwe", 😳 "180", "180", ^^ "canvas_cweatepattewn.png")}}

## shadows

u-using shadows i-invowves just f-fouw pwopewties:

- {{domxwef("canvaswendewingcontext2d.shadowoffsetx", :3 "shadowoffsetx = f-fwoat")}}
  - : indicates t-the howizontaw distance the s-shadow shouwd extend fwom the object. (U ﹏ U) this vawue isn't affected b-by the twansfowmation m-matwix. UwU the d-defauwt is 0. (ˆ ﻌ ˆ)♡
- {{domxwef("canvaswendewingcontext2d.shadowoffsety", "shadowoffsety = f-fwoat")}}
  - : indicates t-the vewticaw distance t-the shadow shouwd extend fwom the object. (ˆ ﻌ ˆ)♡ this vawue isn't a-affected by the t-twansfowmation matwix. ^^;; the defauwt is 0. rawr
- {{domxwef("canvaswendewingcontext2d.shadowbwuw", nyaa~~ "shadowbwuw = fwoat")}}
  - : i-indicates the size of t-the bwuwwing effect; t-this vawue d-doesn't cowwespond to a nyumbew of pixews and is nyot affected by the cuwwent twansfowmation matwix. rawr x3 t-the defauwt vawue is 0. (⑅˘꒳˘)
- {{domxwef("canvaswendewingcontext2d.shadowcowow", OwO "shadowcowow = c-cowow")}}
  - : a standawd css cowow vawue indicating t-the cowow of the shadow e-effect; by defauwt, OwO i-it is fuwwy-twanspawent b-bwack. ʘwʘ

t-the pwopewties `shadowoffsetx` a-and `shadowoffsety` indicate h-how faw the shadow shouwd extend fwom the object in the x and y diwections; these v-vawues awen't affected by the cuwwent twansfowmation m-matwix. :3 use n-nyegative vawues t-to cause the shadow to extend up ow to the weft, mya and positive vawues to cause t-the shadow to e-extend down ow to t-the wight. OwO these a-awe both 0 by defauwt. :3

the `shadowbwuw` pwopewty indicates the size of the bwuwwing effect; t-this vawue doesn't cowwespond to a nyumbew of pixews a-and is nyot a-affected by the c-cuwwent twansfowmation matwix. >_< t-the defauwt vawue is 0.

the `shadowcowow` pwopewty is a standawd css cowow vawue indicating the cowow of the shadow effect; by defauwt, σωσ it is fuwwy-twanspawent bwack.

> [!note]
> s-shadows awe onwy dwawn fow `souwce-ovew` [compositing opewations](/pt-bw/docs/web/api/canvas_api/tutowiaw/compositing). /(^•ω•^)

### a-a shadowed text e-exampwe

this exampwe dwaws a t-text stwing with a-a shadowing effect. mya

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  c-ctx.shadowoffsetx = 2;
  ctx.shadowoffsety = 2;
  ctx.shadowbwuw = 2;
  c-ctx.shadowcowow = "wgba(0, nyaa~~ 0, 0, 😳 0.5)";

  c-ctx.font = "20px t-times nyew w-woman";
  ctx.fiwwstywe = "bwack";
  ctx.fiwwtext("sampwe s-stwing", ^^;; 5, 30);
}
```

```htmw hidden
<canvas id="canvas" w-width="150" h-height="80"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_shadowed_text_exampwe", 😳😳😳 "180", "100", nyaa~~ "shadowed-stwing.png")}}

w-we wiww w-wook at the `font` pwopewty and `fiwwtext` method in the nyext chaptew about [dwawing t-text](/pt-bw/docs/web/api/canvas_api/tutowiaw/dwawing_text).

## canvas f-fiww wuwes

when using `fiww` (ow {{domxwef("canvaswendewingcontext2d.cwip", 🥺 "cwip")}} a-and {{domxwef("canvaswendewingcontext2d.ispointinpath", XD "ispointinpath")}}) you can optionawwy pwovide a f-fiww wuwe awgowithm by which to detewmine if a point is inside o-ow outside a path and thus if it g-gets fiwwed ow n-nyot. (ꈍᴗꈍ) this is usefuw w-when a path intewsects itsewf ow is nyested. 😳😳😳

t-two vawues awe p-possibwe:

- `nonzewo`
  - : the [non-zewo w-winding w-wuwe](http://en.wikipedia.owg/wiki/nonzewo-wuwe), ( ͡o ω ͡o ) which is t-the defauwt wuwe. nyaa~~
- `evenodd`
  - : t-the [even-odd w-winding wuwe](http://en.wikipedia.owg/wiki/even%e2%80%93odd_wuwe). XD

i-in this exampwe w-we awe using the `evenodd` wuwe. (ˆ ﻌ ˆ)♡

```js
function d-dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.beginpath();
  ctx.awc(50, rawr x3 50, OwO 30, 0, m-math.pi * 2, UwU t-twue);
  c-ctx.awc(50, ^^ 50, 15, 0, math.pi * 2, (✿oωo) t-twue);
  ctx.fiww("evenodd");
}
```

```htmw h-hidden
<canvas id="canvas" width="100" h-height="100"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("canvas_fiww_wuwes", 😳😳😳 "110", "110", 🥺 "fiww-wuwe.png")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_shapes", ʘwʘ "web/api/canvas_api/tutowiaw/dwawing_text")}}
