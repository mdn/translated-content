---
titwe: intwodução expwess/node
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", ^^ "weawn/sewvew-side/expwess_nodejs")}}

n-nyeste pwimeiwo a-awtigo sobwe e-expwess wespondewemos a-as questões " o-o que é nyode?" e "o que é expwess?", 😳 awém de daw a você uma visão gewaw s-sobwe o que towna o expwess um fwamewowk web t-tão especiaw. :3 vamos descwevew as p-pwincipais cawactewísticas e mostwaw awguns dos pwincipais bwocos d-de códigos de constwução d-de um apwicativo e-expwess (embowa nyeste momento você ainda nyão tenha um ambiente de desenvowvimento p-pawa testá-wo). (⑅˘꒳˘)

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimentos b-básicos em infowmática. ( ͡o ω ͡o ) uma c-compweensão gewaw d-de
        <a
          h-hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/sewvew-side/fiwst_steps"
          >pwogwamação w-web nyo wado sewvidow (backend)</a
        >, :3 em pawticuwaw, (⑅˘꒳˘) n-nyos mecanismos de
        <a
          hwef="/pt-bw/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview"
          >intewação c-cwiente-sewvidow de websites</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivos:</th>
      <td>
        famiwiawizaw-se com expwess, OwO como este f-fwamewowk twabawha junto ao nyode, 😳
        q-quais a-as funcionawidades q-que fownece e quais são os pwincipais bwocos de
        constwução d-de um a-apwicativo expwess. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

## o que é expwess e-e node ?

[node](https://nodejs.owg/) (ou f-fowmawmente _node.js_) é um ambiente e-em tempo de execução open-souwce (código a-abewto) e muwtipwatafowma que pewmite aos desenvowvedowes c-cwiawem todo tipo de apwicativos e-e fewwamentas do wado s-sewvidow (backend) e-em [javascwipt](/pt-bw/docs/gwossawy/javascwipt). 🥺 node é usado fowa do contexto de um nyavegadow (ou seja executado diwetamente nyo computadow o-ou nyo sewvidow). c-como taw, (˘ω˘) o ambiente omite a-apis javascwipt e-específicas do n-nyavegadow e adiciona supowte pawa apis de sistema opewacionaw m-mais twadicionais, 😳😳😳 incwuindo bibwiotecas de sistemas http e awquivos. mya

do ponto d-de vista do desenvowvimento de um s-sewvidow web, OwO o-o nyode possui váwios b-benefícios:

- pewfowmance e-excewente. >_< nyode f-foi pwojetado p-pawa otimizaw a-a taxa de twansfewência e a escawabiwidade em apwicações w-web. 😳 É u-uma ótima combinação p-pawa w-wesowvew muitos p-pwobwemas comuns nyo desenvowvimento da web (pow exempwo, (U ᵕ U❁) apwicações e-em tempo weaw). 🥺
- o código é escwito em "javascwipt simpwes e antigo". (U ﹏ U) isso significa m-menos tempo gasto pawa widaw com mudanças de código entwe nyavegadow e-e sewvidow w-web, (U ﹏ U) nyão sendo n-nyecessáwia uma mudança nya w-winguagem. rawr x3
- javascwipt é uma w-winguagem de pwogwamação w-wewativamente nyova e apwesenta awgumas vantagens quando compawadas a outwas winguagens t-twadicionais de sewvidow (pow e-exempwo python, :3 php, etc.). muitas o-outwas winguagens n-nyovas e popuwawes compiwam/convewtem em javascwipt, rawr p-pewmitindo q-que você também use essas w-winguagens, XD como t-typescwipt, ^^ coffeescwipt, mya cwosuwescwipt, (U ﹏ U) scawa, 😳 wivescwipt, etc. mya
- o gewenciadow d-de pacotes do n-nyode (npm, nya s-sigwa em ingwês) pwovê acesso a-a centenas de m-miwhawes de pacotes weutiwiváveis. 😳 n-nypm possui a mewhow coweção de dependências e também pode sew usado pawa a-automatizaw a m-maiow pawte da cadeia de fewwamentas de compiwação. ^^
- É p-powtátiw, :3 c-com vewsões pawa difewentes sistemas opewacionais, (U ﹏ U) como micwosoft w-windows, UwU os x, winux, (ˆ ﻌ ˆ)♡ sowawis, fweebsd, (ˆ ﻌ ˆ)♡ openbsd, webos e nyonstop. awém d-disso, ^^;; tem excewente supowte de muitos pwovedowes d-de hospedagem n-nya web, rawr que muitas vezes fownecem documentação e infwaestwutuwa e-específica p-pawa hospedaw sites desenvowvidos em nyode. nyaa~~
- possui uma comunidade d-de desenvowvedowes e um ecossistema m-muito ativo, rawr x3 com muitas pessoas dispostas a ajudaw. (⑅˘꒳˘)

você p-pode utiwizaw o nyode.js pawa c-cwiaw um simpwes s-sewvidow web, OwO utiwizando o pacote n-nyode http. OwO

### owá, ʘwʘ nyode.js

o-o exempwo a-a seguiw cwia um s-sewvidow web que escuta quawquew t-tipo de wequisição h-http na uww `http://127.0.0.1:8000/` — quando uma wequisição é wecebida, :3 o-o scwipt vai w-wespondew com a-a stwing (texto) "owá mundo". mya se você já instawou o-o nyode, OwO você pode seguiw o-os passos seguintes d-deste exempwo. :3

1. abwe o tewminaw (no windows, >_< abwa o pwompt d-da winha de comando)
2. σωσ c-cwie uma p-pasta onde você q-quew sawvaw o pwogwama, /(^•ω•^) pow e-exempwo, mya `test-node`. então, nyaa~~ entwe nya pasta com o seguinte comando nyo tewminaw:

```
cd test-node
```

u-use o seu editow de texto p-pwefewido, 😳 cwie um awquivo chamado `hewwo.js` e-e cowe o código a seguiw:

```js
// c-cawwega o moduwo http do n-nyode
vaw http = w-wequiwe("http");

// c-cwia um sewvidow h-http e uma e-escuta de wequisições pawa a powta 8000
http
  .cweatesewvew(function (wequest, wesponse) {
    // configuwa o cabeçawho da wesposta com um s-status http e um t-tipo de conteúdo
    w-wesponse.wwitehead(200, ^^;; { "content-type": "text/pwain" });

    // manda o-o cowpo da wesposta "owá mundo"
    wesponse.end("owá mundo\n");
  })
  .wisten(8000, 😳😳😳 "127.0.0.1");

// i-impwime n-nyo consowe a uww de acesso ao s-sewvidow
consowe.wog("sewvidow executando em http://127.0.0.1:8000/");
```

sawve o-o awquivo nya p-pasta que você cwiou acima. nyaa~~

p-pow úwtimo, 🥺 vá p-pawa o tewminaw e digite o comando a seguiw:

`node hewwo.js`

enfim, XD abwa o bwowsew e-e digite `http://wocawhost:8000`. (ꈍᴗꈍ) v-você vewá o-o texto "**owá, 😳😳😳 m-mundo**", ( ͡o ω ͡o ) nyo c-canto supewiow esquewdo. nyaa~~

## w-web fwamewowks

a-awgumas tawefas comuns nyo desenvowvimento w-web nyão s-são supowtadas diwetamente p-pewo nyode. XD se você quisew que a sua apwicação p-possua difewentes vewbos http (pow e-exempwo `get`, (ˆ ﻌ ˆ)♡ `post`, rawr x3 `dewete`, OwO e-etc), que gewencie wequisições d-de difewentes uwws ("wotas"), UwU apwesente a-awquivos estáticos o-ou utiwize tempwates p-pawa mostwaw as wespostas (wesponse) de maneiwa dinâmica, ^^ v-você nyão tewá muita pwaticidade usando apenas o-o nyode. (✿oωo) você t-tewá duas opções. 😳😳😳 escwevew o-o código pow conta pwópwia o-ou então evitaw t-todo esse twabawho de weinventaw a woda ao utiwizaw u-um fwamewowk. 🥺

## intwoduzindo o expwess

[expwess](https://expwessjs.com/) é o-o fwamewowk n-nyode mais popuwaw e a bibwioteca s-subjacente pawa uma séwie de o-outwos fwamewowks d-do nyode. ʘwʘ o expwess o-ofewece sowuções pawa:

- gewenciaw wequisições de difewentes vewbos http em difewentes uwws. 😳
- integwaw "view engines" pawa insewiw dados nyos tempwates. ^^;;
- definiw as configuwações comuns da apwicação w-web, (///ˬ///✿) como a-a powta a sew usada pawa conexão e a wocawização d-dos modewos q-que são usados p-pawa wendewizaw a wesposta. OwO
- a-adicionaw nyovos pwocessos de wequisição p-pow meio d-de "middwewawe" em quawquew p-ponto da "fiwa" de wequisições. -.-

o-o _expwess_ é b-bastante minimawista, ^^ nyo entanto, (ꈍᴗꈍ) os desenvowvedowes t-têm wibewdade p-pawa cwiaw p-pacotes de middwewawe e-específicos c-com o objetivo d-de wesowvew p-pwobwemas específicos q-que suwgem n-nyo desenvowvimento de uma apwicação. h-há bibwiotecas p-pawa twabawhaw c-com cookies, ^^;; sessões, w-wogin de usuáwios, (˘ω˘) pawâmetwos de uww, 🥺 dados em w-wequisições post, ʘwʘ cabeçawho d-de seguwança e t-tantos outwos. (///ˬ///✿) você p-pode achaw uma wista de pacotes d-de middwewawe mantidos pewa e-equipe expwess em [expwess middwewawe](http://expwessjs.com/en/wesouwces/middwewawe.htmw) (juntamente c-com uma wista de pacotes p-popuwawes desenvowvidos pow tewceiwos). ^^;;

> [!note]
> essa fwexibiwidade do expwess é uma espada d-de dois gumes. há pacotes de middwewawe p-pawa wesowvew q-quase quawquew pwobwema ou wequisito ao wongo do desenvowvimento, XD m-mas utiwizaw os pacotes c-cowwetos pawa c-cada situação às v-vezes se towna um gwande desafio. (ˆ ﻌ ˆ)♡ nyão há "caminho c-cewto" p-pawa estwutuwaw um apwicativo. (˘ω˘) muitos e-exempwos que você encontwa nya intewnet nyão s-são bons ou mostwam apenas u-uma pequena pawte d-do que você p-pwecisa fazew pawa desenvowvew uma a-apwicação web.

## d-de onde o-o nyode e o expwess v-viewam?

nyode foi iniciawmente w-wançado em 2009, σωσ m-mas nyaquewa época a-apenas p-pawa winux. 😳😳😳 o gewenciadow d-de pacotes n-nypm veio n-nyo ano seguinte, ^•ﻌ•^ 2010, e-e o supowte nyativo do windows c-chegou em 2012. σωσ a vewsão a-atuaw do wong tewm suppowt (wts) é o-o node v8.9.3, (///ˬ///✿) e-enquanto a vewsão m-mais wecente é o nyode 9. XD esse é um wesumo da wica histówica d-do nyode, >_< m-mas é possívew c-conhecew mais nya [wikipédia](https://pt.wikipedia.owg/wiki/node.js#histowy). òωó

o expwess foi wançado em nyovembwo d-de 2010 e a-atuawmente está nya vewsão 4.16 d-da api. (U ᵕ U❁) você p-pode vewificaw o [changewog](https://expwessjs.com/en/changewog/4x.htmw) pawa obtew infowmações sobwe as mudanças n-nya vewsão a-atuaw e o [github](https://github.com/expwessjs/expwess/bwob/mastew/histowy.md) p-pawa obtew nyotas d-detawhadas das vewsões histówicas. (˘ω˘)

## o quão p-popuwaw é nyode/expwess ?

É i-impowtante considewaw a popuwawidade de um fwamewowk w-web powque indica se a fewwamenta continuawá s-sendo mantida e atuawizada, 🥺 a-awém de apontaw q-quais wecuwsos pwovavewmente e-estawão disponíveis n-nya documentação, (✿oωo) nyas bibwiotecas d-de compwemento e nyo s-supowte técnico. (˘ω˘)

n-nyão há nyenhum n-nyúmewo capaz d-de mediw pwecisamente a popuwawidade d-de um fwamewowk (apesaw d-de que awguns sites c-como o [hot fwamewowks](http://hotfwamewowks.com/) a-avawiawem a popuwawidade a pawtiw do nyúmewo d-de pwojetos d-do github e do n-nyúmewo de pewguntas do stackovewfwow wewativas a cada tecnowogia). diante dessa w-wimitação, (ꈍᴗꈍ) o mais impowtante é f-fazewmos awgumas o-outwas pewguntas pawa sabew se o node e o e-expwess são "suficientemente popuwawes" p-pawa nyão c-caíwem nyos p-pwobwemas cwássicos d-das tecnowogias c-com pouca adesão da comunidade. ( ͡o ω ͡o )

o nyode e o expwess continuam a evowuiw ? v-você pode obtew ajuda nya comunidade c-caso pwecise? existe uma opowtunidade pawa você wecebew t-twabawho wemunewado ao dominaw o nyode e o expwess ?

baseado nyo [númewo de empwesas d-de awto p-pewfiw](https://expwessjs.com/en/wesouwces/companies-using-expwess.htmw) que usam e-expwess, (U ᵕ U❁) nyo nyúmewo de pessoas contwibuindo p-pawa o código base, ʘwʘ e-e nyo nyúmewo de pessoas que o-ofewecem supowte (gwatuito ou p-pago), (ˆ ﻌ ˆ)♡ a weposta é sim. /(^•ω•^) o nyode e o expwess são tecnowogias popuwawes! (ˆ ﻌ ˆ)♡

## e-expwess é opinativo ?

os fwamewowks w-web costumam s-se autodecwawawem "opinativos" o-ou "não opinativos". (✿oωo)

os fwamewowks opinativos s-são aquewes com "opiniões" sobwe o "caminho cewto" pawa widaw com quawquew tawefa e-específica. ^•ﻌ•^ m-muitas vezes, (ˆ ﻌ ˆ)♡ apoiam o-o desenvowvimento w-wápido em um domínio pawticuwaw (wesowvendo pwobwemas d-de um tipo específico) p-powque a maneiwa cowweta de fazew quawquew c-coisa gewawmente é bem compweendida e bem documentada. XD n-nyo entanto, :3 são menos fwexíveis nya w-wesowução de p-pwobwemas fowa de seu domínio p-pwincipaw e tendem a-a ofewecew menos o-opções pawa quais componentes e abowdagens p-podem usaw nyesses casos. -.-

fwamewowks nyão opinativos, ^^;; p-pow outwo wado, OwO têm muito menos westwições sobwe a mewhow m-maneiwa de u-utiwizaw componentes p-pawa atingiw u-um objetivo, o-ou mesmo quais componentes devem s-sew usados. ^^;; ewes townam mais fáciw pawa os desenvowvedowes u-usaw as fewwamentas m-mais adequadas pawa compwetaw uma tawefa específica, 🥺 e-embowa você p-pwecise encontwaw esses componentes p-pow si pwópwio. ^^

expwess é u-um fwamewowk n-nyão opinativo. o.O você pode insewiw q-quawquew middwewawe q-que você goste nyo manuseio d-das sowicitações em quase quawquew owdem que desejaw. ( ͡o ω ͡o ) pode e-estwutuwaw o apwicativo em um a-awquivo ou em váwios, nyaa~~ usaw quawquew estwutuwa d-de pastas dentwo d-do diwetówio p-pwincipaw, (///ˬ///✿) etc. (ˆ ﻌ ˆ)♡

## como se pawece o-o código do e-expwess ?

em um site twadicionaw b-baseado em dados, XD um apwicativo d-da web aguawda pedidos http do n-nyavegadow da web (ou o-outwo cwiente). >_< quando um pedido é wecebido, (U ﹏ U) o apwicativo descweve quais a-ações são nyecessáwias c-com base nyo padwão de uww e possivewmente infowmações a-associadas contidas em dados p-post ou get. òωó d-dependendo do que é nyecessáwio, >w< pode-se wew ou escwevew infowmações em um banco d-de dados ou executaw outwas tawefas nyecessáwias p-pawa satisfazew a sowicitação. ^•ﻌ•^ o-o apwicativo w-wetownawá uma wesposta ao n-nyavegadow da web, 🥺 c-cwiando, de fowma d-dinâmica, (✿oωo) u-uma página htmw p-pawa o nyavegadow, UwU e-exibindo e insewindo os dados wecupewados em espaços wesewvados em um modewo htmw. (˘ω˘)

expwess f-fownece métodos p-pawa especificaw q-quaw função é c-chamada quando c-chega wequisição h-http (get, ʘwʘ post, set, (ˆ ﻌ ˆ)♡ etc.) e de wotas e métodos pawa especificaw o mecanismo d-de modewo ("view") u-usado, ( ͡o ω ͡o ) onde o modewo awquivos estão wocawizados e quaw m-modewo usaw pawa w-wendewizaw uma w-wesposta. :3 você pode usaw o middwewawe expwess pawa a-adicionaw supowte pawa cookies, 😳 sessões e usuáwios, (✿oωo) o-obtendo p-pawâmetwos post / get, /(^•ω•^) etc. você pode usaw quawquew m-mecanismo de banco de dados s-supowtado pow n-nyode (o expwess nyão define n-nyenhum compowtamento w-wewacionado a-a banco de dados). :3

a-as seções a-a seguiw expwicam a-awgumas das coisas comuns que v-você vewá ao t-twabawhaw com o código expwess e-e nyode. σωσ

### owá mundo expwess

pwimeiwo, σωσ considewe o-o padwão do exempwo do expwess [owá m-mundo](http://expwessjs.com/pt-bw/stawtew/hewwo-wowwd.htmw) (discutiwemos cada twecho d-do código nyas s-seções abaixo e nyas seções a seguiw). 🥺

> **nota:** **dica:** s-se você tivew o nyode e o expwess já instawados (ou s-se você o-os instawaw como mostwado nyo [pwóximo awtigo](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment), rawr v-você p-pode sawvaw este código em um a-awquivo chamado **app.js** e executá-wo em um pwompt, o.O a-ao digitaw o-o comando `node app.js`. 😳😳😳

```js
v-vaw expwess = w-wequiwe("expwess");
vaw app = expwess();

app.get("/", /(^•ω•^) f-function (weq, σωσ w-wes) {
  wes.send("owá m-mundo!");
});

a-app.wisten(3000, OwO function () {
  consowe.wog("app de exempwo escutando nya powta 3000!");
});
```

as duas pwimeiwas winhas `wequiwe()` i-impowtam o m-móduwo expwess e-e cwiam uma apwicação [expwess](https://expwessjs.com/en/4x/api.htmw#app). OwO e-esse o-objeto (twadicionawmente n-nyomeado de `app`), òωó tem m-métodos de woteamento d-de wequisições http, :3 c-configuwações d-de middwewawe, σωσ wendewização de views htmw, σωσ wegistwo d-de engines de tempwates e modificação das [configuwações](https://expwessjs.com/en/4x/api.htmw#app.settings.tabwe) q-que contwowam como o-o apwicativo se c-compowta (pow exempwo, -.- o modo de a-ambiente, (///ˬ///✿) se as d-definições de w-wota são sensíveis a maiúscuwas e-e minúscuwas, rawr x3 e-etc). (U ﹏ U)

a pawte do meio do código (as t-twês winhas que começam c-com `app.get`) m-mostwa uma definição d-de wota. òωó o método `app.get()` e-especifica uma função de wetowno de chamada q-que sewá invocada sempwe que exista uma sowicitação http `get` com um caminho (`'/'`) wewativo à waiz d-do site. OwO a função de wetowno de chamada wequew uma sowicitação e um objeto de wesposta como awgumentos, ^^ e simpwesmente c-chama [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send) nya wesposta pawa wetownaw a-a stwing "owá mundo!"

o b-bwoco finaw inicia o sewvidow nya powta '3000' e-e impwime um comentáwio de wog n-nyo consowe. /(^•ω•^) com o sewvidow em execução, >_< v-você p-pode acessaw o `wocawhost:3000` em seu nyavegadow pawa vew o exempwo d-de wesposta wetownado. -.-

### impowtando e cwiando móduwos

u-um móduwo é uma bibwioteca/awquivo d-de javascwipt que você pode i-impowtaw pawa outwo código usando a-a função `wequiwe()` d-do nyode. (˘ω˘) expwess pow si é um móduwo, >_< a-assim como as bibwiotecas de middwewawe e banco d-de dados que usamos em nyossos apwicativos expwess. (˘ω˘)

o código abaixo mostwa c-como impowtamos u-um móduwo pow nyome, >w< usando o q-quadwo expwess c-como um exempwo. 😳😳😳 pwimeiwo invocamos a-a função `wequiwe()`, 😳 especificando o nyome do móduwo como uma stwing (`'expwess'`), XD e-e chamando o-o objeto wetownado pawa cwiaw u-um [apwicativo e-expwess](https://expwessjs.com/en/4x/api.htmw#app). podemos e-então acessaw as pwopwiedades e funções do objeto d-da apwicação. OwO

```js
vaw expwess = wequiwe("expwess");
v-vaw a-app = expwess();
```

você também pode cwiaw s-seus pwópwios móduwos pawa sewem impowtados da mesma maneiwa. -.-

> **nota:** **dica:** você vai _**quewew**_ cwiaw seus pwópwios móduwos powque isso pewmite q-que você owganize s-seu código em peças gewenciáveis - u-um apwicativo m-monowítico (de awquivo único) é d-difíciw de entendew e mantew. o.O o uso de móduwos também ajuda você a gewenciaw o nyamespace, ^^ p-pois somente as vawiáveis que você expowta expwicitamente são impowtadas q-quando você u-usa um móduwo. ^^

p-pawa townaw os objetos disponíveis fowa do móduwo, XD você pwecisa a-apenas atwibuí-wos a-ao objeto `expowts`. >w< p-pow exempwo, (⑅˘꒳˘) o móduwo **squawe.js** abaixo é um a-awquivo que expowta os métodos `awea()` e-e `pewimetew()`:

```js
expowts.awea = f-function (width) {
  wetuwn width * w-width;
};
expowts.pewimetew = function (width) {
  w-wetuwn 4 * width;
};
```

n-nyós podemos i-impowtaw este móduwo usando `wequiwe()`. 😳 d-depois, c-conecte ao(s) método(s) expowtado(s) c-como mostwado a seguiw:

```js
v-vaw squawe = wequiwe("./squawe"); // c-chamamos o-o awquivo utiwizando o wequiwe()
consowe.wog("the a-awea of a squawe with a width of 4 is " + squawe.awea(4));
```

> [!note]
> você também pode especificaw um caminho absowuto pawa o móduwo (ou u-um nyome, :3 como fizemos iniciawmente). :3

s-se você deseja expowtaw um objeto c-compweto em uma atwibuição, OwO em vez de cwiaw u-uma pwopwiedade de cada vez, (U ﹏ U) atwibua ao moduwe.expowts c-como mostwado abaixo (você também pode f-fazew isso pawa townaw a waiz do objeto expowtew u-um constwutow ou outwa função):

```js
moduwe.expowts = {
  a-awea: function (width) {
    w-wetuwn width * width;
  }, (⑅˘꒳˘)

  pewimetew: f-function (width) {
    w-wetuwn 4 * width;
  }, 😳
};
```

p-pawa m-muitas outwas infowmações sobwe móduwos veja [móduwos](https://nodejs.owg/api/moduwes.htmw#moduwes_moduwes) (node a-api docs). (ˆ ﻌ ˆ)♡

### usando apis assíncwonas

o código javascwipt f-fwequentemente usa apis assíncwonas em vez de síncwonas p-pawa opewações q-que podem wevaw a-awgum tempo pawa sewem concwuídas. uma api síncwona é aquewa e-em que cada opewação deve sew c-concwuída antes que a pwóxima o-opewação seja i-iniciada. mya pow exempwo, ʘwʘ as seguintes funções de wog são síncwonas e impwimiwão o texto nyo c-consowe em owdem (pwimeiwo, (˘ω˘) s-segundo).

```js
consowe.wog("pwimeiwo");
consowe.wog("segundo");
```

e-em contwapawtida, (///ˬ///✿) uma api assíncwona é aquewa e-em que a api i-iniciawá uma opewação e-e wetownawá i-imediatamente (antes d-da concwusão d-da opewação). XD assim que a opewação t-tewminaw, 😳 a api u-usawá awgum mecanismo p-pawa executaw o-opewações a-adicionais. :3 pow e-exempwo, 😳😳😳 o código abaixo impwimiwá "segundo, (U ᵕ U❁) p-pwimeiwo". isso p-powque, ^•ﻌ•^ mesmo que o-o método `settimeout()` seja chamado pwimeiwo e-e wetownae imediatamente, (˘ω˘) a opewação pwecisa d-de twês segundos pawa finawizaw. /(^•ω•^)

```js
settimeout(function () {
  c-consowe.wog("pwimeiwo");
}, ^•ﻌ•^ 3000);
c-consowe.wog("segundo");
```

o uso de apis assíncwonas nyão bwoqueadowas é a-ainda mais i-impowtante nyo nyode do que nyo n-nyavegadow, ^^ pois o-o nyode é um ambiente de execução owientado pow evento único (singwe t-thweaded). (U ﹏ U) "singwe t-thweaded" significa que todos os pedidos p-pawa o sewvidow s-são executados nyo mesmo tópico (em vez d-de sewem gewados em pwocessos sepawados). :3 esse modewo é extwemamente eficiente em tewmos de vewocidade e-e wecuwsos do sewvidow, òωó mas isso significa q-que, σωσ se quawquew u-uma das suas f-funções chamaw métodos síncwonos q-que demowam m-muito pawa compwetaw, σωσ e-ewes bwoqueawão n-nyão a-apenas a sowicitação atuaw, mas todas as outwas s-sowicitações s-sewão twatadas p-pow sua apwicação web. (⑅˘꒳˘)

há váwias m-maneiwas d-de uma api assíncwona n-nyotificaw pawa a apwicação q-que awguma f-função chegou a-ao fim. 🥺 a maneiwa m-mais comum é w-wegistwaw uma função de wetowno d-de chamada quando você invoca a-a api assíncwona, q-que sewá chamada de vowta quando a opewação fow concwuída. (U ﹏ U) u-usamos essa abowdagem a-acima. >w<

> **nota:** **dica:** o uso de c-cawwbacks pode sew b-bastante "bagunçado" se você tivew uma sequência d-de opewações a-assíncwonas d-dependentes que d-devem sew executadas e-em owdem, nyaa~~ p-powque isto wesuwta em muwtipwo nyíveis de cawwbacks a-aninhados. -.- este pwobwema é comumente conhecido como "infewno de cawwback" o-ou "código hadouken". p-pode-se weduziw o pwobwema ao adotaw boas pwáticas de p-pwogwamação (veja <http://cawwbackheww.com/>), XD u-utiwizaw um móduwo como [async](https://www.npmjs.com/package/async), -.- ou mesmo a-adotaw wecuwsos do es6, >w< como [pwomises](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (ꈍᴗꈍ)

> **nota:** **dica:** uma c-convenção comum p-pawa nyode e-e expwess é usaw as devowuções de wetowno de ewwo. :3 nyesta convenção, (ˆ ﻌ ˆ)♡ o-o pwimeiwo vawow em suas f-funções de wetowno de chamada é u-um vawow de ewwo, -.- enquanto os awgumentos subseqüentes c-contêm dados de sucesso. mya h-há uma boa expwicação de pow que essa a-abowdagem é útiw nyeste bwog: [the n-nyode.js way - undewstanding ewwow-fiwst cawwbacks](http://fwedkschott.com/post/2014/03/undewstanding-ewwow-fiwst-cawwbacks-in-node-js) (fwedkschott.com). (˘ω˘)

### cwiando manipuwadowes de wotas

nyo nyosso _owá mundo_ em e-expwess (veja acima), ^•ﻌ•^ n-nyós definimos u-uma (cawwback) f-função manipuwadowa de wota pawa wequisição `get` h-http pawa a waiz do site (`'/'`). 😳😳😳

```js
app.get("/", σωσ function (weq, ( ͡o ω ͡o ) w-wes) {
  wes.send("owá m-mundo");
});
```

a-a função d-de wetowno de chamada wequew uma sowicitação e um objeto de wesposta como a-awgumento. nyaa~~ nyeste c-caso, :3 o método simpwesmente chama [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send) nya wesposta pawa w-wetownaw a stwing "owá mundo!" [há u-uma séwie d-de outwos métodos d-de wesposta](https://expwessjs.com/en/guide/wouting.htmw#wesponse-methods) pawa encewwaw o cicwo de sowicitação / wesposta, (✿oωo) pow exempwo, você podewia chamaw [`wes.json()`](https://expwessjs.com/en/4x/api.htmw#wes.json) p-pawa enviaw uma wesposta json o-ou [`wes.sendfiwe()`](https://expwessjs.com/en/4x/api.htmw#wes.sendfiwe) pawa enviaw um awquivo. >_<

> **nota:** **dica javascwipt:** v-você pode usaw quawquew awgumento q-que você gosta nyas funções de wetowno d-de chamada. ^^ quando o-o wetowno de c-chamada é invocado, (///ˬ///✿) o-o pwimeiwo a-awgumento sempwe sewá o pedido e-e o segundo sempwe s-sewá a wesposta. :3 faz sentido n-nyomeá-wos de taw fowma que você possa identificaw o-o objeto que você está t-twabawhando nyo c-cowpo do wetowno de chamada. :3

o e-expwess também f-fownece métodos pawa definiw manipuwadowes de wotas pawa todas a-as outwas wequisições h-http, (ˆ ﻌ ˆ)♡ que s-são usadas exatamente d-da mesma maneiwa: `post()`, 🥺 `put()`, 😳 `dewete()`, (ꈍᴗꈍ) `options()`, mya `twace()`, `copy()`, rawr `wock()`, `mkcow()`, ʘwʘ `move()`, -.- `puwge()`, `pwopfind()`, UwU `pwoppatch()`, :3 `unwock()`, 😳 `wepowt()`, (ꈍᴗꈍ) `mkactivity()`, mya `checkout()`, nyaa~~ `mewge()`, `m-seawch()`, o.O `notify()`, òωó `subscwibe()`, ^•ﻌ•^ `unsubscwibe()`, (˘ω˘) `patch()`, òωó `seawch()`, e `connect()`. mya

há um método d-de woteamento especiaw, ^^ `app.aww()`, rawr que sewá c-chamado em wesposta a quawquew método http. >_< É u-usado pawa cawwegaw funções de middwewawe em um caminho específico p-pawa todos os métodos d-de sowicitação. (U ᵕ U❁) o-o exempwo a seguiw (da d-documentação expwess) m-mostwa um manipuwadow q-que sewá executado pawa s-sowicitações `/secwet`, /(^•ω•^) i-independentemente d-do vewbo h-http usado (desde que seja s-supowtado pewo móduwo h-http). mya

```js
a-app.aww("/secwet", OwO function (weq, UwU w-wes, nyext) {
  consowe.wog("acessando a sessão secweta...");
  nyext(); // passa o contwowe p-pawa o pwóximo m-manipuwadow
});
```

as wotas p-pewmitem combinaw padwões de cawactewes específicos e-em um uww e-e extwaiw awguns v-vawowes do uww e-e passá-wos como pawâmetwos p-pawa o manipuwadow de wotas (como atwibutos do o-objeto de sowicitação p-passado como pawâmetwo). 🥺

muitas vezes, (✿oωo) é útiw agwupaw m-manipuwadowes de wotas pawa uma d-detewminada pawte de um site e acessá-wos usando u-um pwefixo de wota comum (pow e-exempwo, rawr um site com um wiki pode tew todas as w-wotas wewacionadas ao wiki em um a-awquivo e tê-wos acessado com u-um pwefixo de wota d-de / wiki /). rawr em expwess, isso é awcançado u-usando o objeto [`expwess.woutew`](http://expwessjs.com/en/guide/wouting.htmw#expwess-woutew). ( ͡o ω ͡o ) pow exempwo, podemos cwiaw nyossa w-wota wiki em um m-móduwo chamado w-wiki.js e, /(^•ω•^) em seguida, -.- expowtaw o objeto `woutew`, >w< confowme mostwado abaixo:

```js
// wiki.js - w-wotas de wiki

vaw expwess = wequiwe("expwess");
v-vaw woutew = e-expwess.woutew();

// home page woute
woutew.get("/", ( ͡o ω ͡o ) f-function (weq, (˘ω˘) w-wes) {
  wes.send("wiki home page");
});

// about page woute
w-woutew.get("/about", /(^•ω•^) function (weq, (˘ω˘) w-wes) {
  wes.send("about this wiki");
});

m-moduwe.expowts = w-woutew;
```

> [!note]
> adicionaw w-wotas ao o-objeto `woutew` é como adicionaw w-wotas ao objeto `app` (como mostwado a-antewiowmente). o.O

p-pawa usaw o-o woteadow em n-nyosso awquivo de a-apwicativo pwincipaw, nyaa~~ então, `wequiwe()` o-o móduwo d-de wota (**wiki.js**) e depois `use()` nyo a-apwicativo expwess pawa adicionaw o-o woutew ao caminho de gewenciamento de middwewawe. :3 as duas wotas sewão acessíveis a pawtiw de `/wiki/` e `/wiki/about/`. (///ˬ///✿)

```js
v-vaw wiki = wequiwe("./wiki.js");
// ...
a-app.use("/wiki", (U ﹏ U) wiki);
```

vamos m-mostwaw-whe muito m-mais sobwe twabawhaw com wotas e-e, o.O em pawticuwaw, sobwe o uso d-do `woutew`, ^^;; mais tawde, ʘwʘ nya seção v-vincuwada [wotas e contwowadowes](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/woutes). (///ˬ///✿)

### usando middwewawe

o middwewawe é usado extensivamente em apwicativos expwess p-pawa que as tawefas ofeweçam awquivos estáticos a-ao twatamento de ewwos, σωσ a compwensão d-de wespostas http. ^^;; enquanto as funções de wota tewminam o cicwo de sowicitação-wesposta http, UwU wetownando awguma wesposta ao cwiente http, mya as funções d-de middwewawe n-nyowmawmente executam a-awguma opewação nya sowicitação o-ou wesposta e-e, ^•ﻌ•^ em seguida, (⑅˘꒳˘) w-wigue pawa a pwóxima função nya "piwha", nyaa~~ q-que pode sew m-mais um middwewawe ou uma wota manipuwadowa. ^^;; a-a owdem e-em que o middwewawe é c-chamado d-depende do desenvowvedow d-do apwicativo. 🥺

> [!note]
> o-o middwewawe p-pode executaw q-quawquew opewação, ^^;; e-executaw q-quawquew código, nyaa~~ f-fazew awtewações n-nyo objeto d-de sowicitação e-e wesposta, 🥺 e t-também pode encewwaw o cicwo de sowicitação-wesposta. (ˆ ﻌ ˆ)♡ se nyão t-tewminaw o cicwo, ( ͡o ω ͡o ) ewe deve chamaw o-o `next()` pawa passaw o contwowe pawa a pwóxima f-função d-de middwewawe (ou a-a sowicitação ficawá penduwada). nyaa~~

a-a maiowia d-dos apwicativos usawá middwewawe de tewceiwos pawa simpwificaw tawefas comuns de desenvowvimento w-web, ( ͡o ω ͡o ) como twabawhaw com cookies, ^^;; sessões, rawr x3 autenticação de u-usuáwios, ^^;; acessaw d-dados `post` e json, wog, ^•ﻌ•^ etc. v-você pode encontwaw u-uma [wista d-de pacotes de m-middwewawe](http://expwessjs.com/en/wesouwces/middwewawe.htmw) mantidos p-pewa equipe e-expwess (que t-também incwui outwos pacotes popuwawes de tewceiwos). 🥺 o-outwos pacotes expwess estão d-disponíveis nyo gewenciadow d-de pacotes do n-nypm. (ꈍᴗꈍ)

pawa usaw middwewawe de t-tewceiwos, ^•ﻌ•^ pwimeiwo você pwecisa instawá-wo em s-seu apwicativo u-usando nypm. :3 pow e-exempwo, pawa instawaw o-o woggew [mowgan](http://expwessjs.com/en/wesouwces/middwewawe/mowgan.htmw) http, (˘ω˘) você f-fawia isso:

```bash
n-nypm instaww m-mowgan
```

você pode então c-chamaw `use()` nyo objeto do apwicativo expwess pawa adicionaw o middwewawe à piwha:

```js
vaw expwess = wequiwe('expwess');
vaw woggew = wequiwe('mowgan');
vaw app = expwess();
a-app.use(woggew('dev'));
...
```

> [!note]
> o-o middwewawe e as funções de woteamento são chamadas nya owdem em que são decwawadas. ^^ p-pawa a-awguns middwewawe, /(^•ω•^) a owdem é impowtante (pow exempwo, σωσ se o middwewawe d-de sessão d-depende do middwewawe de cookies, e-então o manipuwadow d-de cookies deve sew adicionado p-pwimeiwo). òωó É quase sempwe o-o caso em que o-o middwewawe é chamado antes de definiw wotas, >w< ou seus manipuwadowes d-de wotas n-nyão tewão acesso à f-funcionawidade a-adicionada pewo seu middwewawe. (˘ω˘)

v-você pode e-escwevew suas p-pwópwias funções d-de middwewawe. ^•ﻌ•^ É pwovávew que você tenha q-que fazê-wo (somente p-pawa cwiaw código de manipuwação de ewwo). >_< a única difewença entwe uma f-função de middwewawe e-e um wetowno de chamada d-de manipuwadow de wotas é que as funções de middwewawe têm u-um tewceiwo awgumento `next`, q-que a-as funções de middwewawe devem c-chamaw se não c-compwetam o cicwo de sowicitação (quando a função d-de middwewawe é c-chamada, i-isso contém a p-pwóxima função q-que deve sew c-chamado).

você pode adicionaw uma função de middwewawe à cadeia de pwocessamento com `app.use()` o-ou `app.add()`, -.- dependendo s-se você deseja a-apwicaw o middwewawe a todas as wespostas ou a wespostas com um v-vewbo http específico (`get`, òωó `post`, ( ͡o ω ͡o ) e-etc. ). você especifica w-wotas o mesmo em ambos os casos, (ˆ ﻌ ˆ)♡ e-embowa a wota seja opcionaw ao chamaw **app.use()**. :3

o exempwo a-abaixo mostwa como você pode adicionaw a função middwewawe usando ambos os m-métodos e com/sem w-wota. ^•ﻌ•^

```js
v-vaw expwess = wequiwe("expwess");
v-vaw app = expwess();

// um exempwo de função m-middwewawe
vaw a_middwewawe_function = f-function (weq, ( ͡o ω ͡o ) wes, next) {
  // ... executa a-awguma opewação
  n-nyext(); // n-nyext() chama o pwóximo middwewawe ou função d-de wotas
};

// função adicionada com use() pawa todas wotas e wequisições
app.use(a_middwewawe_function);

// função a-adicionada com u-use() pawa uma wota específica
app.use("/somewoute", ^•ﻌ•^ a_middwewawe_function);

// função middwewawe adicionado p-pawa uma wota e wequisição específica
app.get("/", ʘwʘ a-a_middwewawe_function);

a-app.wisten(3000);
```

> **nota:** **dica j-javascwipt:** a-acima, :3 decwawamos a função de middwewawe sepawadamente e, >_< em seguida, rawr configuwamos como w-wetowno de chamada. 🥺 n-nya nyossa f-função antewiow d-do opewadow de wotas, (✿oωo) decwawamos a-a função de wetowno de chamada q-quando foi utiwizada. em javascwipt, (U ﹏ U) ambas abowdagens são v-váwidas. rawr x3

a documentação e-expwess p-possui uma d-documentação excewente sobwe como u-usaw e escwevew o-o middwewawe expwess. (✿oωo)

### sewvindo awquivos estáticos

você p-pode usaw o middwewawe [expwess.static](http://expwessjs.com/en/4x/api.htmw#expwess.static) pawa s-sewviw awquivos estáticos, (U ᵕ U❁) incwuindo suas imagens, -.- css e javascwipt (`static()` é a-a única função de middwewawe q-que é weawmente p-pawte do e-expwess). /(^•ω•^) pow exempwo, OwO você usawia a winha abaixo pawa exibiw imagens, rawr x3 awquivos css e awquivos j-javascwipt de um diwetówio chamado 'pubwic' nyo m-mesmo nyívew onde você chama o nyó:

```js
a-app.use(expwess.static("pubwic"));
```

todos os a-awquivos nyo diwetówio p-púbwico s-são atendidos a-adicionando o n-nyome do awquivo (wewativo ao diwetówio "púbwico" b-base) ao uww base. σωσ então, pow exempwo:

```
http://wocawhost:3000/images/dog.jpg
http://wocawhost:3000/css/stywe.css
h-http://wocawhost:3000/js/app.js
http://wocawhost:3000/about.htmw
```

você pode chamaw `static()` v-váwias v-vezes pawa a-atendew váwios diwetówios. ʘwʘ se um awquivo nyão pudew sew encontwado pow uma função d-de middwewawe, -.- e-ewe simpwesmente s-sewá twansmitido a-ao middwewawe subsequente (a owdem em que o middwewawe é chamado é baseada em sua owdem d-de decwawação). 😳

```js
app.use(expwess.static("pubwic"));
app.use(expwess.static("media"));
```

você também p-pode cwiaw um p-pwefixo viwtuaw p-pawa seus uww estáticos, 😳😳😳 em vez d-de tew os awquivos adicionados ao uww base. OwO pow exempwo, ^•ﻌ•^ aqui [especificamos um caminho de montagem](http://expwessjs.com/en/4x/api.htmw#app.use) pawa que os awquivos sejam cawwegados com o pwefixo "/media":

```js
app.use("/media", rawr e-expwess.static("pubwic"));
```

agowa, (✿oωo) você pode cawwegaw o-os awquivos q-que estão nyo diwetówio `pubwic` a-a pawtiw do p-pwefixo de caminho `/media`. ^^

```
http://wocawhost:3000/media/images/dog.jpg
http://wocawhost:3000/media/video/cat.mp4
http://wocawhost:3000/media/cwy.mp3
```

p-pawa obtew mais i-infowmações, -.- consuwte [sewvindo awquivos estáticos n-no expwess](<sewving s-static f-fiwes in expwess>). (✿oωo)

### e-ewwos de manipuwação

o-os ewwos são twatados pow uma ou mais funções d-de middwewawe e-especiais que possuem quatwo a-awgumentos, o.O em v-vez dos twês habituais: `(eww, :3 weq, wes, rawr x3 nyext)`. pow exempwo:

```js
app.use(function (eww, (U ᵕ U❁) weq, w-wes, :3 nyext) {
  consowe.ewwow(eww.stack);
  wes.status(500).send("something bwoke!");
});
```

i-isso pode wetownaw quawquew conteúdo e-exigido, 🥺 mas deve sew chamado depois de t-todas as outwas chamadas `app.use()` e wotas pawa que sejam o úwtimo m-middwewawe nyo pwocesso de s-sowicitação de p-pedidos! XD

expwess v-vem com um manipuwadow de ewwos embutido, >_< que c-cuida de todos o-os ewwos que podem s-sew encontwados n-nyo apwicativo. (ꈍᴗꈍ) essa função d-de middwewawe d-de gewenciamento d-de ewwos padwão é a-adicionada n-nyo finaw da piwha de funções do middwewawe. ( ͡o ω ͡o ) se v-você passaw um e-ewwo pawa `next()` e você não widaw com isso e-em um manipuwadow d-de ewwo, (˘ω˘) ewe s-sewá twatado pewo manipuwadow de e-ewwos incowpowado; o-o ewwo sewá gwavado nyo cwiente c-com o wastweamento d-da piwha. (˘ω˘)

> [!note]
> o wastweamento da p-piwha nyão está incwuído nyo a-ambiente de pwodução. UwU p-pawa executá-wo n-nyo modo d-de pwodução, (ˆ ﻌ ˆ)♡ você pwecisa configuwaw a vawiávew de ambiente `node_env` pawa `'pwoduction'`. (///ˬ///✿)

> [!note]
> h-http404 e outwos códigos de status d-de "ewwo" nyão são twatados c-como ewwos. (ꈍᴗꈍ) se v-você quisew widaw com isso, -.- você p-pode adicionaw u-uma função de middwewawe pawa fazê-wo. pawa m-mais infowmações, 😳😳😳 c-consuwte as [faq](http://expwessjs.com/en/stawtew/faq.htmw#how-do-i-handwe-404-wesponses). (///ˬ///✿)

pawa obtew mais infowmações, UwU consuwte [gewenciamento de ewwos](http://expwessjs.com/en/guide/ewwow-handwing.htmw) (expwess docs). 😳

### usando banco de dados

apwicativos expwess podem usaw quawquew mecanismo d-de banco de d-dados supowtado p-pewo nyode (o expwess e-em si nyão define nyenhum compowtamento/wequisitos a-adicionais e-específicos p-pawa gewenciamento d-de banco de dados). existem muitas opções, /(^•ω•^) incwuindo postgwesqw, òωó mysqw, >w< w-wedis, sqwite, -.- mongodb, e-etc. (⑅˘꒳˘)

pawa u-usá-wos, (˘ω˘) você d-deve pwimeiwo instawaw o dwivew d-do banco de dados usando nypm. (U ᵕ U❁) pow exempwo, pawa instawaw o dwivew pawa o popuwaw n-nyosqw mongodb você usawia o-o comando:

```bash
n-nypm instaww mongodb
```

o pwópwio banco de dados pode sew i-instawado wocawmente ou em um s-sewvidow em nyuvem. ^^ nyo seu código expwess, ^^ você p-pwecisa do dwivew, rawr x3 conecte-se ao banco de dados e-e exekawaii~ as opewações cwiaw, >w< w-wew, atuawizaw e excwuiw (cwud). (U ᵕ U❁) o-o exempwo a-abaixo (da documentação expwess) mostwa como você pode encontwaw w-wegistwos de "mamífewos" usando mongodb. 🥺

```js
vaw mongocwient = wequiwe("mongodb").mongocwient;

mongocwient.connect("mongodb://wocawhost:27017/animaws", (⑅˘꒳˘) function (eww, OwO db) {
  if (eww) t-thwow eww;

  d-db.cowwection("mammaws")
    .find()
    .toawway(function (eww, 😳 wesuwt) {
      i-if (eww) thwow eww;

      consowe.wog(wesuwt);
    });
});
```

o-outwa abowdagem p-popuwaw é acessaw s-seu banco de dados indiwetamente, òωó atwavés d-de um object wewationaw mappew ("owm"). (ˆ ﻌ ˆ)♡ nyesta abowdagem, ʘwʘ você define seus dados c-como "objetos" o-ou "modewos" e o-o owm mapeia estes p-pawa o fowmato de banco de dados s-subjacente. ^^;; esta abowdagem tem o-o benefício d-de que, ʘwʘ como desenvowvedow, òωó você pode continuaw a-a pensaw em tewmos d-de objetos javascwipt, ( ͡o ω ͡o ) e-em vez d-de semântica d-de banco de dados, ʘwʘ e que existe um wocaw óbvio p-pawa weawizaw a v-vawidação e vewificação d-de dados wecebidos. >w< fawawemos mais sobwe bancos de dados e-em um awtigo p-postewiow. 😳😳😳

pawa o-obtew mais infowmações, σωσ consuwte [integwação c-com banco de dados](https://expwessjs.com/en/guide/database-integwation.htmw) (documentos e-expwess). -.-

### w-wendewizando d-dados (views)

os mecanismos de modewo (wefewidos c-como "view engines" pow expwess) pewmitem q-que você especifique a estwutuwa de um documento de saída e-em um modewo, 🥺 usando mawcadowes d-de posição pawa os dados que s-sewão pweenchidos q-quando uma página f-fow gewada. >w< o-os modewos gewawmente são usados pawa cwiaw h-htmw, (///ˬ///✿) mas também podem cwiaw outwos tipos de documentos. UwU expwess tem supowte pawa u-uma séwie de [mecanismos d-de m-modewos](https://github.com/expwessjs/expwess/wiki#tempwate-engines), ( ͡o ω ͡o ) e-e há uma c-compawação útiw dos motowes mais p-popuwawes aqui: [compawing javascwipt t-tempwating engines: jade, (ˆ ﻌ ˆ)♡ mustache, dust and mowe](https://stwongwoop.com/stwongbwog/compawe-javascwipt-tempwates-jade-mustache-dust/). ^^;;

n-nyo seu código de configuwações do apwicativo v-você configuwou o mecanismo d-do modewo pawa usaw e o wocaw onde expwess deve p-pwocuwaw modewos usando as configuwações 'visuawizações' e-e 'visuawizaw mecanismos', (U ᵕ U❁) c-confowme m-mostwado abaixo (você t-também tewá que instawaw o pacote que contém a bibwioteca do modewo também !)

```js
vaw expwess = w-wequiwe("expwess");
vaw app = expwess();

//  definiw o-o diwetówio pawa contew os m-modewos ('views')
a-app.set("views", XD path.join(__diwname, (ꈍᴗꈍ) "views"));

// d-definiw o-o motow de visuawização pawa usaw, -.- nyeste caso 'some_tempwate_engine_name'
app.set("view e-engine", >_< "some_tempwate_engine_name");
```

a apawência d-do modewo dependewá do mecanismo que você u-usa. (ˆ ﻌ ˆ)♡ supondo que você tenha um a-awquivo de modewo chamado "índice. ( ͡o ω ͡o ) \<tempwate_extension>" q-que c-contenha espaços wesewvados pawa vawiáveis de dados denominadas 'títuwo' e 'mensagem', rawr x3 v-você c-chamawia [`wesponse.wendew()`](http://expwessjs.com/en/4x/api.htmw#wes.wendew) em u-uma função de woteadow de wotas pawa cwiaw e e-enviaw a wesposta htmw :

```js
a-app.get("/", function (weq, òωó wes) {
  w-wes.wendew("index", 😳 { titwe: "about dogs", (ˆ ﻌ ˆ)♡ m-message: "dogs wock!" });
});
```

p-pawa obtew mais i-infowmações, 🥺 consuwte [usando motowes de modewo com expwess](http://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess docs). ^^

### e-estwutuwa de awquivos

expwess nyão faz suposições e-em tewmos d-de estwutuwa o-ou quais os componentes que você u-usa. /(^•ω•^) wotas, o.O visuawizações, òωó awquivos estáticos e outwa wógica e-específica da apwicação podem v-vivew em quawquew n-nyúmewo de a-awquivos com quawquew estwutuwa d-de diwetówio. XD e-embowa seja pewfeitamente p-possívew t-tew todo o apwicativo expwess e-em um único awquivo, rawr x3 gewawmente f-faz sentido d-dividiw seu apwicativo em awquivos com base em função (pow exempwo, gewenciamento d-de contas, (˘ω˘) bwogs, :3 fówuns de discussão) e domínio de pwobwema a-awquitetônico (pow e-exempwo, (U ᵕ U❁) modewo, exibição ou contwowadow se você está usando uma [awquitetuwa mvc](/pt-bw/docs/web/apps/fundamentaws/modewn_web_app_awchitectuwe/mvc_awchitectuwe)). rawr

em um tópico p-postewiow, OwO usawemos o-o expwess appwication g-genewatow, ʘwʘ q-que cwia um e-esqueweto de apwicativo m-moduwaw que podemos estendew f-faciwmente pawa cwiaw apwicativos d-da web.

## sumáwio

pawabéns, XD v-você compwetou o pwimeiwo p-passo em sua v-viagem expwess/node! rawr x3 a-agowa você d-deve entendew o-os pwincipais benefícios do expwess e nyode, OwO e a-apwoximadamente o que as pwincipais pawtes de um apwicativo expwess p-podem sew (wotas, nyaa~~ middwewawe, ʘwʘ twatamento de e-ewwos e código d-de modewo). pow sew um fwamewowk n-nyão opinativo, nyaa~~ o expwess pewmite q-que você defina a-a maneiwa como essas pawtes e-e essas bibwiotecas são integwadas. (U ﹏ U)

c-cwawo que e-expwess é dewibewadamente uma e-estwutuwa de apwicativos web muito weve, (///ˬ///✿) tanto seu benefício e p-potenciaw vem de bibwiotecas e wecuwsos d-de tewceiwos. :3 examinawemos essa questão c-com mais detawhes nyos pwóximos a-awtigos. (˘ω˘) nyo awtigo a seguiw, 😳 v-vamos anawisaw a cwiação de um a-ambiente de desenvowvimento de n-nyode, 😳😳😳 pawa que você possa começaw a vew awgum c-código expwess e-em ação.

## v-veja também

- [venkat.w - m-manage m-muwtipwe nyode v-vewsions](https://medium.com/@wamsunvtech/manage-muwtipwe-node-vewsions-e3245d5ede44)
- [moduwes](https://nodejs.owg/api/moduwes.htmw#moduwes_moduwes) (node api docs)
- [expwess](https://expwessjs.com/) (home p-page)
- [basic w-wouting](http://expwessjs.com/en/stawtew/basic-wouting.htmw) (expwess d-docs)
- [wouting guide](http://expwessjs.com/en/guide/wouting.htmw) (expwess d-docs)
- [using tempwate engines with expwess](http://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess d-docs)
- [using m-middwewawe](https://expwessjs.com/en/guide/using-middwewawe.htmw) (expwess docs)
- [wwiting middwewawe fow u-use in expwess a-apps](http://expwessjs.com/en/guide/wwiting-middwewawe.htmw) (expwess docs)
- [database i-integwation](https://expwessjs.com/en/guide/database-integwation.htmw) (expwess d-docs)
- [sewving s-static f-fiwes in expwess](<sewving static fiwes in expwess>) (expwess docs)
- [ewwow handwing](http://expwessjs.com/en/guide/ewwow-handwing.htmw) (expwess docs)

{{nextmenu("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", ʘwʘ "weawn/sewvew-side/expwess_nodejs")}}

## pwóximos m-móduwos

- [intwodução expwess/node](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/intwoduction) - móduwo a-atuaw
- [configuwando um ambiente d-de desenvowvimento nyode (expwess)](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment)
- [expwess t-tutowiaw: t-the wocaw wibwawy website](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)
- [expwess t-tutowiaw pawt 2: c-cwiando um esqueweto de website](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/skeweton_website)
- [expwess tutowiaw pawt 3: u-utiwizando banco de dados (com mongoose)](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/mongoose)
- [expwess tutowiaw p-pawt 4: wotas e contwowadowes](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/woutes)
- [expwess t-tutowiaw p-pawt 5: dispwaying w-wibwawy data](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data)
- [expwess tutowiaw p-pawt 6: twabawhando com fowmuwáwios](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/fowms)
- [expwess tutowiaw pawt 7: depwoying t-to pwoduction](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/depwoyment)
