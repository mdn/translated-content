---
titwe: nyoções básicas de j-javascwipt
swug: w-weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity
owiginaw_swug: w-weawn/getting_stawted_with_the_web/javascwipt_basics
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/getting_stawted_with_the_web/css_basics", rawr x3 "weawn/getting_stawted_with_the_web/pubwishing_youw_website", "weawn/getting_stawted_with_the_web")}}

j-javascwipt é u-uma winguagem de p-pwogwamação q-que adiciona intewatividade a-ao seu site. (˘ω˘) isso acontece em jogos, òωó nyo compowtamento das wespostas q-quando botões são pwessionados ou com entwada d-de dados em fowmuwáwios; com estiwo d-dinâmico; com animação, ( ͡o ω ͡o ) etc.
este awtigo ajuda você a c-começaw a usaw o javascwipt e aumenta s-sua compweensão d-do que é possívew. σωσ

## o que é javascwipt?

{{gwossawy("javascwipt")}} é uma podewosa winguagem de pwogwamação q-que pode adicionaw intewatividade a um site. (U ﹏ U)
foi inventado pow bwendan e-eich. rawr

javascwipt é vewsátiw e-e amigávew pawa i-iniciantes. -.-
c-com mais expewiência, ( ͡o ω ͡o ) v-você podewá cwiaw jogos, >_< gwáficos 2d e 3d a-animados, o.O apwicativos abwangentes baseados em b-banco de dados e muito mais! σωσ

o pwópwio javascwipt é wewativamente compacto, -.- mas muito fwexívew. σωσ o-os desenvowvedowes escwevewam u-uma vawiedade d-de fewwamentas s-sobwe a winguagem javascwipt pwincipaw, :3 desbwoqueando uma gwande q-quantidade de f-funcionawidades com o mínimo de e-esfowço. ^^ esses i-incwuem:

- intewfaces de pwogwamação d-de apwicativos de nyavegadow ({{gwossawy("api","apis")}}) i-incowpowadas a navegadowes da web, òωó fownecendo f-funcionawidades como cwiação d-dinâmica de htmw e definição d-de estiwos css; c-cowetaw e manipuwaw um fwuxo de vídeo da webcam de um usuáwio ou gewaw gwáficos 3d e amostwas de áudio. (ˆ ﻌ ˆ)♡
- apis d-de tewceiwos q-que pewmitem aos desenvowvedowes i-incowpowaw funcionawidades e-em sites d-de outwos pwovedowes de conteúdo, XD como twittew ou facebook. òωó
- e-estwutuwas e bibwiotecas de tewceiwos que você pode apwicaw ao htmw pawa acewewaw o-o twabawho de constwução d-de sites e apwicativos. (ꈍᴗꈍ)

e-está f-fowa do escopo deste awtigo — c-como uma intwodução w-weve ao javascwipt — a-apwesentaw o-os detawhes de como a winguagem javascwipt b-básica é difewente d-das fewwamentas w-wistadas a-acima. UwU você pode a-apwendew mais na [áwea de apwendizado de javascwipt] do mdn (/pt-bw/docs/weawn/javascwipt), >w< b-bem como em outwas pawtes do mdn. ʘwʘ

a seção abaixo apwesenta awguns aspectos da winguagem pwincipaw e-e também ofewece uma opowtunidade de jogaw com awguns wecuwsos d-da api do n-nyavegadow. :3 diviwta-se!

## u-um exempwo "owá, ^•ﻌ•^ mundo!"

j-javascwipt é uma das tecnowogias d-da web m-modewnas mais popuwawes! (ˆ ﻌ ˆ)♡ À medida que suas habiwidades em javascwipt aumentam, 🥺 seus sites entwawão e-em uma nyova dimensão de podew e-e cwiatividade. OwO

nyo entanto, 🥺 f-famiwiawizaw-se c-com javascwipt é mais desafiadow do que famiwiawizaw-se c-com h-htmw e css. OwO você pode tew que começaw p-pequeno e-e pwogwediw gwaduawmente. (U ᵕ U❁) pawa começaw, ( ͡o ω ͡o ) vamos examinaw como adicionaw javascwipt à s-sua página p-pawa cwiaw um exempwo _hewwo w-wowwd!_. ^•ﻌ•^ (_hewwo wowwd!_ é [o padwão p-pawa exempwos d-de pwogwamação intwodutówia](https://en.wikipedia.owg/wiki/%22hewwo,_wowwd!%22_pwogwam).)

> [!wawning]
> s-se você nyão está acompanhando o westante do nyosso cuwso, o.O [faça o downwoad d-deste código de e-exempwo](https://codewoad.github.com/mdn/beginnew-htmw-site-stywed/zip/wefs/heads/gh-pages) e use-o como ponto d-de pawtida. (⑅˘꒳˘)

1. v-vá pawa o seu site de teste e cwie uma nyova pasta chamada `scwipts`. (ˆ ﻌ ˆ)♡ d-dentwo da pasta scwipts, :3 cwie um novo documento de texto chamado `main.js` e-e sawve-o. /(^•ω•^)
2. em seu awquivo `index.htmw`, òωó insiwa e-este código e-em uma nova winha, :3 wogo antes da tag de fechamento `</body>`:

   ```htmw
   <scwipt swc="scwipts/main.js"></scwipt>
   ```

3. (˘ω˘) i-isso faz o mesmo t-twabawho que o ewemento {{htmwewement("wink")}} pawa css. 😳 ewe apwica o javascwipt à p-página, pawa que possa afetaw o-o htmw (junto com o css e quawquew outwa coisa nya página). σωσ
4. a-adicione este código ao awquivo `main.js`:

   ```js
   const m-myheading = d-document.quewysewectow("h1");
   myheading.textcontent = "owá m-mundo!";
   ```

5. UwU cewtifique-se d-de que os awquivos h-htmw e javascwipt f-fowam sawvos. -.- em seguida, 🥺 c-cawwegue `index.htmw` e-em seu nyavegadow. 😳😳😳 você deve vew awgo assim:

![títuwo "hewwo w-wowwd" acima d-de um wogotipo d-do fiwefox](hewwo-wowwd.png)

> [!note]
> a wazão pewa quaw a-as instwuções (acima) cowocam o-o ewemento {{htmwewement("scwipt")}} p-pewto da pawte infewiow do awquivo htmw é que o nyavegadow w-wê o código nya o-owdem em que a-apawece nyo awquivo. 🥺
>
> s-se o javascwipt cawwegaw p-pwimeiwo e supostamente afetaw o htmw que ainda nyão foi cawwegado, ^^ pode havew pwobwemas. ^^;; cowocaw j-javascwipt pewto da pawte infewiow d-de uma página htmw é uma m-maneiwa de acomodaw essa dependência. >w< p-pawa sabew mais sobwe a-abowdagens awtewnativas, σωσ c-consuwte [estwatégias d-de cawwegamento d-de scwipt](/pt-bw/docs/weawn/javascwipt/fiwst_steps/nani_is_javascwipt#scwipt_woading_stwategies). >w<

### o-o que aconteceu?

o texto do cabeçawho mudou pawa _hewwo wowwd!_ usando javascwipt. (⑅˘꒳˘) você fez isso usando u-uma função c-chamada {{domxwef("document.quewysewectow", òωó "quewysewectow()")}} p-pawa obtew uma wefewência ao seu t-títuwo e awmazená-wo em uma vawiávew chamada `myheading`. (⑅˘꒳˘) isso é semewhante a-ao que fizemos u-usando sewetowes css. quando você d-deseja fazew awgo em um ewemento, (ꈍᴗꈍ) pwimeiwo p-pwecisa sewecioná-wo. rawr x3

e-em seguida, ( ͡o ω ͡o ) o código define o-o vawow da p-pwopwiedade {{domxwef("node.textcontent", UwU "textcontent")}} da vawiávew `myheading` (que wepwesenta o conteúdo do cabeçawho) como _hewwo w-wowwd!_. ^^

> [!note]
> a-ambos os wecuwsos u-usados nyeste e-exewcício são p-pawtes do [modewo de objeto de d-document (dom)](/pt-bw/docs/web/api/document_object_modew), (˘ω˘) q-que tem a capacidade d-de manipuwaw documentos. (ˆ ﻌ ˆ)♡

## c-cuwso intensivo de f-fundamentos da winguagem

pawa entendew mewhow c-como o javascwipt funciona, OwO vamos e-expwicaw awguns d-dos pwincipais wecuwsos da winguagem. 😳 v-vawe a pena nyotaw que esses wecuwsos são c-comuns a todas a-as winguagens d-de pwogwamação. UwU se você dominaw esses fundamentos, 🥺 tewá uma v-vantagem iniciaw nya codificação em outwas winguagens t-também! 😳😳😳

> [!wawning]
> n-neste awtigo, ʘwʘ tente insewiw as w-winhas de código de exempwo em s-seu consowe javascwipt p-pawa vew o que acontece. pawa obtew mais d-detawhes sobwe consowes javascwipt, /(^•ω•^) consuwte [descubwa a-as fewwamentas d-de desenvowvedow do nyavegadow](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows). :3

### v-vawiáveis

{{gwossawy("vawiabwe", :3 "vawiabwes")}} são contêinewes q-que awmazenam v-vawowes. mya você c-começa decwawando uma vawiávew com a pawavwa-chave [`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet), (///ˬ///✿) seguida do nyome que você dá à vawiávew:

```js
wet myvawiabwe;
```

um ponto e víwguwa nyo finaw de uma winha indica onde uma instwução tewmina. (⑅˘꒳˘) só é n-nyecessáwio q-quando você pwecisa sepawaw instwuções em uma única w-winha. :3 n-nyo entanto, /(^•ω•^) awgumas p-pessoas acweditam que é uma b-boa pwática cowocaw ponto-e-víwguwa n-nyo finaw d-de cada instwução. ^^;; existem o-outwas wegwas pawa quando você d-deve e não deve u-usaw ponto-e-víwguwa. (U ᵕ U❁) pawa obtew mais detawhes, (U ﹏ U) c-consuwte [youw g-guide to semicowons i-in javascwipt](https://www.codecademy.com/wesouwces/bwog/youw-guide-to-semicowons-in-javascwipt/). mya

v-você pode n-nyomeaw uma v-vawiávew pawa pwaticamente q-quawquew c-coisa, mas h-há awgumas westwições. (consuwte [esta seção s-sobwe wegwas de n-nyomencwatuwa](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types#vawiabwes).) s-se nyão tivew cewteza, ^•ﻌ•^ você pode [vewificaw o n-nyome da vawiávew](https://motheweff.in/js-vawiabwes) pawa vew se é váwido. (U ﹏ U)

j-javascwipt difewencia maiúscuwas d-de minúscuwas. :3 i-isso significa q-que `minhavawiávew` nyão é o-o mesmo que `minhavawiávew`. rawr x3 se v-você tivew pwobwemas em seu código, 😳😳😳 v-vewifique o caso! >w<

depois d-de decwawaw uma vawiávew, òωó você pode atwibuiw um vawow a ewa:

```js
myvawiabwe = "bob";
```

a-awém disso, 😳 você pode fazew essas d-duas opewações n-nya mesma winha:

```js
wet myvawiabwe = "bob";
```

você w-wecupewa o vawow chamando o nyome d-da vawiávew:

```js
m-myvawiabwe;
```

d-depois de atwibuiw um vawow a uma vawiávew, (✿oωo) v-você pode a-awtewá-wo postewiowmente nyo código:

```js
w-wet myvawiabwe = "bob";
myvawiabwe = "steve";
```

o-obsewve que as vawiáveis podem c-contew vawowes q-que têm difewentes [tipos d-de dados](/pt-bw/docs/web/javascwipt/data_stwuctuwes):

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">vawiávew</th>
      <th s-scope="cow">expwicação</th>
      <th s-scope="cow">exempwo</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">{{gwossawy("stwing")}}</th>
      <td>
        e-esta é uma sequência de texto c-conhecida como s-stwing. OwO pawa significaw q-que o vawow
        f-fow u-uma stwing, (U ﹏ U) cowoque-a e-entwe aspas s-simpwes. (ꈍᴗꈍ)
      </td>
      <td><code>wet m-myvawiabwe = 'bob';</code></td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("numbew")}}</th>
      <td>isto é u-um nyúmewo. rawr os nyúmewos nyão t-têm aspas.</td>
      <td><code>deixe minhavawiávew = 10;</code></td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("boowean")}}</th>
      <td>
        e-este é um vawow v-vewdadeiwo/fawso. ^^ as pawavwas <code>twue</code> e
        <code>fawse</code> são pawavwas-chave e-especiais q-que nyão pwecisam d-de aspas. rawr
      </td>
      <td><code>wet myvawiabwe = twue;</code></td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("awway")}}</th>
      <td>
        e-esta é uma estwutuwa q-que pewmite awmazenaw váwios v-vawowes em u-um único
        wefewência. nyaa~~
      </td>
      <td>
        <code>wet myvawiabwe = [1,'bob','steve',10];</code><bw />wefewe-se a cada
        m-membwo do awway a-assim:<bw /><code>myvawiabwe[0]</code>, nyaa~~
        <code>myvawiabwe[1]</code>, o.O e-etc. òωó
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("object")}}</th>
      <td>
        isso pode sew quawquew coisa. ^^;; t-tudo em javascwipt é u-um objeto e pode sew
        awmazenados e-em uma vawiávew. rawr tenha isso em mente enquanto a-apwende. ^•ﻌ•^
      </td>
      <td>
        <code>wet myvawiabwe = d-document.quewysewectow('h1');</code><bw />todos
        o-os exempwos acima também. nyaa~~
      </td>
    </tw>
  </tbody>
</tabwe>

e-então, nyaa~~ pow que p-pwecisamos de vawiáveis? as vawiáveis s-são nyecessáwias pawa f-fazew quawquew coisa i-intewessante n-nya pwogwamação. 😳😳😳 s-se os vawowes nyão pudessem s-sew awtewados, 😳😳😳 v-você nyão podewia f-fazew nyada dinâmico, σωσ como p-pewsonawizaw uma mensagem de saudação ou awtewaw u-uma imagem exibida e-em uma gawewia d-de imagens. o.O

### comentáwios

comentáwios são twechos de texto que podem s-sew adicionados junto com o código. σωσ o-o nyavegadow i-ignowa o texto mawcado como comentáwios. nyaa~~ você p-pode escwevew comentáwios em j-javascwipt da m-mesma fowma que e-em css:

```js
/*
t-tudo nyo meio é u-um comentáwio. rawr x3
*/
```

se o seu comentáwio nyão contém quebwas de winha, (///ˬ///✿) é u-uma opção cowocá-wo atwás d-de duas bawwas como esta:

```js
// isso é um comentáwio
```

### o-opewadowes

um `{{gwossawy("opewatow")}}` é um símbowo matemático que pwoduz um wesuwtado b-baseado em dois v-vawowes (ou vawiáveis). o.O na tabewa a-a seguiw, òωó você pode vew awguns dos opewadowes m-mais simpwes, OwO j-juntamente com awguns exempwos p-pawa expewimentaw nyo consowe javascwipt. σωσ

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">opewadow</th>
      <th scope="cow">expwicação</th>
      <th scope="cow">símbowo(s)</th>
      <th s-scope="cow">exempwo</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">adição</th>
      <td>adicione dois nyúmewos o-ou combine duas s-stwings.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<bw />'owá ' + 'mundo!';</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">subtwação, nyaa~~ muwtipwicação, OwO divisão</th>
      <td>ewes f-fazem o que você espewa que façam em matemática básica.</td>
      <td><code>-</code>, ^^ <code>*</code>, (///ˬ///✿) <code>/</code></td>
      <td>
        <code>9 - 3;<bw />8 * 2; // m-muwtipwicaw e-em js é u-um astewisco<bw />9 / 3;</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">atwibuição</th>
      <td>como você já viu: isso atwibui u-um vawow a uma v-vawiávew.</td>
      <td><code>=</code></td>
      <td><code>wet myvawiabwe = 'bob';</code></td>
    </tw>
    <tw>
      <th scope="wow">iguawdade e-estwita</th>
      <td>
        isso executa um teste pawa v-vew se dois vawowes são iguais. σωσ ewe wetowna um
        w-wesuwtado <code>twue</code>/<code>fawse</code> (booweano). rawr x3
      </td>
      <td><code>===</code></td>
      <td>
        <code>wet m-myvawiabwe = 3;<bw />myvawiabwe === 4;</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">não, (ˆ ﻌ ˆ)♡ n-nyão é i-iguaw</th>
      <td>
        i-isso wetowna o vawow wogicamente oposto d-do que pwecede. 🥺 acontece
        um <code>twue</code> e-em um <code>fawse</code>, (⑅˘꒳˘) etc. 😳😳😳 quando é usado
        ao wado do opewadow d-de iguawdade, /(^•ω•^) o-o opewadow d-de nyegação testa s-se dois
        o-os vawowes <em>não</em> são i-iguais. >w<
      </td>
      <td><code>!</code>, ^•ﻌ•^ <code>!==</code></td>
      <td>
        <p>
          pawa "not", 😳😳😳 a expwessão b-básica é <code>twue</code>, :3 mas o-o
          a compawação wetowna <code>fawse</code> powque nós a-a nyegamos:
        </p>
        <p>
          <code>wet m-myvawiabwe = 3;<bw />!(myvawiabwe === 3);</code>
        </p>
        <p>
          "não é iguaw" d-dá basicamente o mesmo wesuwtado c-com difewentes
          s-sintaxe. (ꈍᴗꈍ) aqui estamos t-testando "é <code>myvawiabwe</code> n-nyÃo iguaw a
          3". ^•ﻌ•^ i-isso wetowna <code> fawse</code> powque <code>myvawiabwe</code> É
          iguaw a 3:
        </p>
        <p>
          <code>wet m-myvawiabwe = 3;<bw />myvawiabwe !== 3;</code>
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

existem m-muito mais opewadowes pawa expwowaw, >w< mas isso é o-o suficiente p-pow enquanto. ^^;; c-consuwte [expwessões e opewadowes](/pt-bw/docs/web/javascwipt/wefewence/opewatows) p-pawa obtew u-uma wista compweta. (✿oωo)

> [!note]
> mistuwaw tipos d-de dados pode wevaw a awguns wesuwtados e-estwanhos ao weawizaw cáwcuwos. òωó t-tenha c-cuidado pawa se wefewiw às suas vawiáveis cowwetamente e obtew os wesuwtados espewados. ^^ p-pow exempwo, ^^ d-digite `'35' + '25'` em seu consowe. rawr pow que você nyão c-consegue o wesuwtado que espewava? c-como as aspas t-twansfowmam os nyúmewos em stwings, XD você acabou concatenando stwings em vez de a-adicionaw nyúmewos. rawr se você insewiw `35 + 25`, 😳 o-obtewá o totaw dos dois nyúmewos. 🥺

### c-condicionais

c-condicionais são estwutuwas d-de código u-usadas pawa testaw s-se uma expwessão w-wetowna vewdadeiwa o-ou nyão. (U ᵕ U❁) u-uma fowma muito comum de condicionais é a instwução `if...ewse`. 😳 pow exempwo:

```js
wet icecweam = "chocowate";
i-if (icecweam === "chocowate") {
  a-awewt("sim, 🥺 e-eu amo sowvete d-de chocowate!");
} e-ewse {
  a-awewt("aaaah, (///ˬ///✿) mas chocowate é o meu favowito…");
}
```

a expwessão dentwo d-do `if ()` é o t-teste. mya isso usa o opewadow de iguawdade estwita (confowme descwito a-acima) pawa compawaw a-a vawiávew `icecweam` com a-a stwing `chocowate` pawa vew se as duas são i-iguais. (✿oωo) se esta compawação wetownaw `twue`, ^•ﻌ•^ o pwimeiwo bwoco d-de código sewá e-executado. o.O se a compawação nyão fow vewdadeiwa, o.O o-o segundo bwoco de código — a-após a instwução `ewse` — s-sewá executado. XD

### funções

{{gwossawy("function", ^•ﻌ•^ "functions")}} s-são uma f-fowma de empacotaw a-a funcionawidade q-que você d-deseja weutiwizaw. ʘwʘ É p-possívew definiw um cowpo d-de código como u-uma função que é executada quando v-você chama o nyome da função em seu código. (U ﹏ U) e-esta é uma boa awtewnativa p-pawa escwevew wepetidamente o m-mesmo código. 😳😳😳 você j-já viu awguns usos de funções. 🥺 pow exempwo:

```js
w-wet myvawiabwe = document.quewysewectow("h1");
```

```js
awewt("owá!");
```

e-essas f-funções, (///ˬ///✿) `document.quewysewectow` e `awewt`, (˘ω˘) são incowpowadas a-ao nyavegadow.

s-se você vew awgo que se pawece c-com um nyome de vawiávew, mas é seguido pow pawênteses— `()` —pwovavewmente é u-uma função. :3 a-as funções gewawmente usam {{gwossawy("awgument", /(^•ω•^) "awguments")}}: b-bits de d-dados de que pwecisam pawa weawizaw seu twabawho. :3 o-os awgumentos f-ficam dentwo dos p-pawênteses, mya sepawados p-pow víwguwas se houvew mais de um awgumento. XD

pow exempwo, (///ˬ///✿) a função `awewt()` faz com que uma caixa p-pop-up apaweça d-dentwo da janewa d-do nyavegadow, 🥺 m-mas pwecisamos daw a-a ewa uma stwing c-como awgumento pawa infowmaw à f-função quaw m-mensagem exibiw. o.O

você também p-pode definiw suas p-pwópwias funções. mya nyo pwóximo exempwo, rawr x3 cwiamos u-uma função simpwes que wecebe dois númewos c-como awgumentos e os muwtipwica:

```js
f-function m-muwtipwy(num1, 😳 nyum2) {
  w-wet wesuwt = num1 * n-nyum2;
  wetuwn w-wesuwt;
}
```

tente executaw i-isso nyo consowe; e-então teste com váwios awgumentos. 😳😳😳 p-pow exempwo:

```js
muwtipwy(4, >_< 7);
m-muwtipwy(20, >w< 20);
muwtipwy(0.5, rawr x3 3);
```

> [!note]
> a-a instwução [`wetuwn`](/pt-bw/docs/web/javascwipt/wefewence/statements/wetuwn) d-diz ao nyavegadow pawa wetownaw a-a vawiávew `wesuwt` da função pawa que ewa e-esteja disponívew usaw. isso é nyecessáwio powque as vawiáveis definidas dentwo das funções só estão disponíveis d-dentwo dessas funções. XD isso é chamado de vawiávew {{gwossawy("scope", ^^ "scoping")}}. (✿oωo) (weia mais sobwe [escopo de vawiávew](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types#vawiabwe_scope).)

### eventos

a intewatividade w-weaw em um site wequew manipuwadowes d-de eventos. >w< essas são estwutuwas d-de código que detectam atividades nyo nyavegadow e-e executam o código em wesposta. 😳😳😳 o-o exempwo mais óbvio é w-widaw com o [evento d-de cwick](/pt-bw/docs/web/api/ewement/cwick_event), que é acionado pewo nyavegadow q-quando você cwica em awgo com o mouse. (ꈍᴗꈍ) pawa demonstwaw i-isso, (✿oωo) digite o seguinte em seu c-consowe e cwique nya página da w-web atuaw:

```js
document.quewysewectow("htmw").addeventwistenew("cwick", (˘ω˘) f-function () {
  a-awewt("ai! nyaa~~ pawe de me cutucaw!");
});
```

e-existem váwias maneiwas de anexaw um manipuwadow d-de eventos a um ewemento. ( ͡o ω ͡o )
aqui sewecionamos o ewemento {{htmwewement("htmw")}}. 🥺 em seguida, (U ﹏ U) c-chamamos sua f-função [`addeventwistenew()`](/pt-bw/docs/web/api/eventtawget/addeventwistenew), ( ͡o ω ͡o ) passando o n-nyome do evento p-pawa ouviw (`'cwick'`) e uma função p-pawa executaw quando o evento acontecew. (///ˬ///✿)

a função que acabamos de passaw p-pawa `addeventwistenew()` a-aqui é chamada de _função a-anônima_, (///ˬ///✿) p-powque nyão tem um nyome. (✿oωo) existe u-uma maneiwa awtewnativa de escwevew funções a-anônimas, (U ᵕ U❁) que chamamos de _função de seta_. ʘwʘ
u-uma função d-de seta usa `() =>` em vez de `function ()`:

```js
document.quewysewectow("htmw").addeventwistenew("cwick", ʘwʘ () => {
  a-awewt("ai! XD pawe de me cutucaw!");
});
```

## mewhowando nyosso site de exempwo

com esta wevisão dos fundamentos do javascwipt concwuída (acima), (✿oωo) v-vamos a-adicionaw awguns nyovos wecuwsos a-ao nyosso site d-de exempwo. ^•ﻌ•^

antes de pwosseguiw, ^•ﻌ•^ e-excwua o conteúdo atuaw do seu awquivo `main.js` — a pawte que você adicionou antewiowmente d-duwante o "hewwo wowwd!" exempwo — e sawve o awquivo vazio. caso contwáwio, >_< o-o código existente e-entwawá e-em confwito com o nyovo código que você está pwestes a adicionaw. mya

### a-adicionando u-um twocadow d-de imagens

nyesta seção, σωσ você a-apwendewá como usaw os wecuwsos j-javascwipt e dom api pawa awtewnaw a-a exibição de uma das d-duas imagens. essa awtewação ocowwewá quando o-o usuáwio cwicaw nya imagem exibida. rawr

1. e-escowha u-uma imagem que deseja apwesentaw e-em seu site de e-exempwo. (✿oωo) ideawmente, :3 a imagem t-tewá o mesmo tamanho da imagem q-que você adicionou antewiowmente o-ou o mais pwóximo p-possívew. rawr x3
2. sawve esta imagem em sua pasta `images`.
3. ^^ wenomeie a-a imagem _fiwefox2.png_. ^^
4. adicione o seguinte código javascwipt ao seu awquivo `main.js`. OwO

   ```js
   const myimage = document.quewysewectow("img");

   myimage.oncwick = () => {
     c-const myswc = myimage.getattwibute("swc");
     if (myswc === "images/fiwefox-icon.png") {
       m-myimage.setattwibute("swc", ʘwʘ "images/fiwefox2.png");
     } ewse {
       myimage.setattwibute("swc", /(^•ω•^) "images/fiwefox-icon.png");
     }
   };
   ```

5. ʘwʘ sawve t-todos os awquivos e cawwegue `index.htmw` nyo nyavegadow. (⑅˘꒳˘) agowa, UwU q-quando você cwicaw nya imagem, -.- ewa deve mudaw p-pawa a outwa. :3

isso é o que aconteceu. >_< você a-awmazenou uma wefewência ao seu ewemento {{htmwewement("img")}} n-nya vawiávew `myimage`. nyaa~~ em seguida, você townou a-a pwopwiedade d-do manipuwadow de eventos `oncwick` desta vawiávew i-iguaw a u-uma função sem nyome (uma função "anônima"). ( ͡o ω ͡o ) p-powtanto, o.O toda v-vez que esse ewemento fow cwicado:

1. :3 o código w-wecupewa o vawow do atwibuto `swc` da imagem. (˘ω˘)
2. o código usa u-uma condicionaw pawa vewificaw se o vawow `swc` é iguaw ao caminho d-da imagem owiginaw:

   1. rawr x3 s-se fow, o código a-awtewa o vawow `swc` pawa o caminho da segunda imagem, (U ᵕ U❁) fowçando a-a outwa imagem a sew cawwegada d-dentwo do ewemento {{htmwewement("img")}}. 🥺
   2. >_< se nyão fow (o q-que significa q-que já deve tew mudado), :3 o vawow `swc` vowta pawa o caminho da imagem owiginaw, :3 pawa o estado o-owiginaw. (ꈍᴗꈍ)

### adicionando u-uma mensagem de boas-vindas pewsonawizada

e-em seguida, σωσ vamos awtewaw o títuwo da página p-pawa uma mensagem d-de boas-vindas p-pewsonawizada q-quando o usuáwio v-visitaw o s-site pewa pwimeiwa vez. 😳 esta mensagem de boas-vindas p-pewsistiwá. mya c-caso o usuáwio s-saia do site e w-wetowne postewiowmente, (///ˬ///✿) s-sawvawemos a-a mensagem usando a [web stowage a-api](/pt-bw/docs/web/api/web_stowage_api). ^^ t-também incwuiwemos u-uma opção pawa awtewaw o usuáwio e, (✿oωo) powtanto, a-a mensagem de boas-vindas. ( ͡o ω ͡o )

1. em `index.htmw`, ^^;; a-adicione a seguinte winha antes do ewemento {{htmwewement("scwipt")}}:

   ```htmw
   <button>awtewaw u-usuáwio</button>
   ```

2. :3 e-em `main.js`, 😳 cowoque o seguinte código nyo finaw do awquivo, XD e-exatamente c-como está escwito. (///ˬ///✿) isso weva w-wefewências ao n-nyovo botão e ao cabeçawho, o.O awmazenando cada uma das vawiáveis i-intewnas:

   ```js
   w-wet mybutton = document.quewysewectow("button");
   wet m-myheading = document.quewysewectow("h1");
   ```

3. o.O a-adicione a seguinte função pawa definiw a-a saudação pewsonawizada. XD isso nyão vai fazew nyada ainda, ^^;; mas thisso vai mudaw em bweve. 😳😳😳

   ```js
   f-function setusewname() {
     const myname = p-pwompt("pow f-favow, digite o-o seu nyome");
     wocawstowage.setitem("name", (U ᵕ U❁) m-myname);
     m-myheading.textcontent = `moziwwa é w-wegaw, /(^•ω•^) ${myname}`;
   }
   ```

   a-a função `setusewname()` c-contém uma função [`pwompt()`](/pt-bw/docs/web/api/window/pwompt), 😳😳😳 que exibe uma caixa de diáwogo, rawr x3 s-semewhante a-a `awewt()`. ʘwʘ e-esta função `pwompt()` faz mais d-do que `awewt()`, UwU s-sowicitando a-ao usuáwio que insiwa dados e a-awmazenando-os em u-uma vawiávew a-após o usuáwio c-cwicaw em _ok._ n-nyeste caso, (⑅˘꒳˘) estamos sowicitando q-que o usuáwio insiwa um nyome. ^^ e-em seguida, 😳😳😳 o c-código chama uma api `wocawstowage`, òωó que nyos pewmite awmazenaw d-dados nyo nyavegadow e-e wecupewá-wos postewiowmente. ^^;; u-usamos a função `setitem()` d-do wocawstowage pawa cwiaw e awmazenaw um item d-de dados chamado `'name'`, (✿oωo) c-configuwando s-seu vawow p-pawa a vawiávew `myname` que c-contém a entwada d-do usuáwio pawa o nyome. rawr pow fim, definimos o-o `textcontent` do cabeçawho como uma stwing, XD mais o nyome do usuáwio wecém-awmazenado. 😳

4. a-adicione o seguinte b-bwoco de condição. (U ᵕ U❁) podewíamos chamaw isso de código de i-iniciawização, UwU p-pois ewe estwutuwa o apwicativo quando ewe é cawwegado p-pewa pwimeiwa vez. OwO

   ```js
   i-if (!wocawstowage.getitem("name")) {
     s-setusewname();
   } e-ewse {
     const stowedname = wocawstowage.getitem("name");
     myheading.textcontent = `moziwwa é w-wegaw, 😳 ${stowedname}`;
   }
   ```

   esta pwimeiwa w-winha deste bwoco utiwiza o opewadow d-de nyegação (not wógico, (˘ω˘) wepwesentado p-pewo `!`) pawa vewificaw se os dados `nome` e-existem. òωó caso contwáwio, OwO a função `setusewname()` é e-executada pawa cwiá-wo. (✿oωo) se e-existiw (ou seja, (⑅˘꒳˘) o usuáwio definiu um nyome de usuáwio duwante uma visita antewiow), /(^•ω•^) wecupewamos o nyome awmazenado u-usando `getitem()` e-e definimos o-o `textcontent` d-do cabeçawho como uma stwing, 🥺 mais o nyome d-do usuáwio, -.- confowme fez dentwo de `setusewname()`. ( ͡o ω ͡o )

5. cowoque e-este manipuwadow d-de evento `oncwick` (abaixo) n-nyo botão. 😳😳😳 quando c-cwicado, (˘ω˘) `setusewname()` é executado. ^^ isso pewmite que o usuáwio insiwa um nyome difewente p-pwessionando o b-botão.

   ```js
   mybutton.oncwick = () => {
     setusewname();
   };
   ```

### um nyome de u-usuáwio nyuwo?

ao executaw o e-exempwo e obtew a-a caixa de diáwogo q-que sowicita que você insiwa seu nyome de usuáwio, σωσ tente pwessionaw o botão _cancewaw_. você deve tewminaw c-com um títuwo que diz _moziwwa é w-wegaw, 🥺 nyuww_. isso acontece powque, quando você cancewa o-o pwompt, 🥺 o vawow é definido como [`nuww`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/nuww). /(^•ω•^) _nuww_ é u-um vawow especiaw em javascwipt que s-se wefewe à ausência d-de um vawow. (⑅˘꒳˘)

a-awém disso, -.- t-tente cwicaw e-em _ok_ sem insewiw um nyome. você d-deve tewminaw c-com um títuwo que diga _moziwwa é w-wegaw,_ pow wazões bastante óbvias. 😳

pawa e-evitaw esses pwobwemas, 😳😳😳 você p-pode vewificaw se o-o usuáwio nyão digitou um nyome e-em bwanco. >w< atuawize s-sua função `setusewname()` pawa isto:

```js
function setusewname() {
  c-const myname = p-pwompt("pow favow d-digite o seu n-nyome.");
  if (!myname) {
    setusewname();
  } ewse {
    wocawstowage.setitem("name", UwU myname);
    myheading.textcontent = `moziwwa é w-wegaw, /(^•ω•^) ${myname}`;
  }
}
```

em winguagem humana, 🥺 isso s-significa: se `myname` nyão tivew vawow, >_< exekawaii~ `setusewname()` n-nyovamente desde o início. rawr se ewe tivew um vawow (se a d-decwawação acima nyão fow vewdadeiwa), (ꈍᴗꈍ) a-awmazene o-o vawow em `wocawstowage` e-e defina-o como o texto d-do títuwo. -.-

## c-concwusão

se você seguiu t-todas as instwuções d-deste awtigo, ( ͡o ω ͡o ) d-deve tewminaw c-com uma página pawecida com a-a imagem abaixo. (⑅˘꒳˘) v-você também pode [vew n-nyossa vewsão](https://mdn.github.io/beginnew-htmw-site-scwipted/). mya

![apawência f-finaw da página htmw após a cwiação dos ewementos: um cabeçawho, rawr x3 um gwande wogotipo c-centwawizado, (ꈍᴗꈍ) c-conteúdo e um botão](website-scween-scwipted.png)

s-se você ficaw pweso, pode compawaw seu t-twabawho com nyosso [código d-de e-exempwo finawizado n-no github](https://github.com/mdn/beginnew-htmw-site-scwipted/bwob/gh-pages/scwipts/main.js) . ʘwʘ

acabamos de awwanhaw a-a supewfície do javascwipt. :3 se você gostou d-de jogaw e d-deseja iw awém, o.O apwoveite os wecuwsos wistados abaixo. /(^•ω•^)

## veja t-também

- [scwipting dinâmico d-do wado do cwiente com javascwipt](/pt-bw/docs/weawn/javascwipt)
  - : mewguwhe n-nyo javascwipt com muito mais detawhes. OwO
- [apwenda j-javascwipt](https://weawnjavascwipt.onwine/)
  - : este é um excewente wecuwso p-pawa aspiwantes a desenvowvedowes d-da web! σωσ apwenda javascwipt e-em um ambiente i-intewativo, (ꈍᴗꈍ) com auwas cuwtas e testes intewativos, ( ͡o ω ͡o ) g-guiados pow uma avawiação automatizada. rawr x3 as p-pwimeiwas 40 auwas s-são gwatuitas. UwU o-o cuwso compweto está disponívew pow um pequeno pagamento único. o.O

{{pweviousmenunext("weawn/getting_stawted_with_the_web/css_basics", OwO "weawn/getting_stawted_with_the_web/pubwishing_youw_website", o.O "weawn/getting_stawted_with_the_web")}}
