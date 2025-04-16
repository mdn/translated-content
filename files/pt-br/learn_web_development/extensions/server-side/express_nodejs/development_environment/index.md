---
titwe: configuwando o nyode como a-ambiente de d-desenvowvimento
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/intwoduction", (U ᵕ U❁) "weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/expwess_nodejs")}}

a-agowa que você s-sabe pawa que s-sewve o expwess, >_< nyós vamos whe mostwaw como configuwaw e testaw o ambiente n-nyode/expwess nyo windows, ^^;; winux (ubuntu) e macos. ʘwʘ i-independentemente do sistema o-opewacionaw que você pwefewe, 😳😳😳 este awtigo deve whe pwopowcionaw o-o que você pwecisa pawa desenvowvew a-apwicativos e-em expwess. UwU

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        sabew c-como abwiw um tewminaw/winha de comando. OwO sabew como instawaw
        pacotes de s-softwawe nyo sistema opewacionaw d-do computadow utiwizado p-pawa
        d-desenvowvimento
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        c-configuwaw o ambiente de desenvowvimento p-pawa expwess (x.xx) em seu
        computadow
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visão gewaw do ambiente de desenvowvimento do expwess

_node_ e _expwess_ faciwitam a configuwação d-de seu computadow pawa começaw a-a desenvowvew a-apwicações w-web. :3 esta seção fownece uma visão ampwa de quais fewwamentas s-sewão nyecessáwias, -.- e-expwica awguns métodos s-simpwes pawa instawaw o-o nyode (e expwess) nyo ubuntu, 🥺 m-macos e windows e também m-mostwa como você pode testaw sua apwicação.

### o-o que é o ambiente de desenvowvimento e-expwess?

o ambiente d-de desenvowvimento _expwess_ i-incwui uma instawação do _nodejs,_ o pacote de gewenciamento _npm_ e (opcionawmente) o _gewadow de apwicações e-expwess_ em seu c-computadow wocaw. -.-

o _node_ e o _npm_ s-são instawados e-em conjunto p-pow meio de um pacote bináwio pwepawado, -.- instawadowes, (U ﹏ U) pacotes d-de gewenciamento de sistemas opewacionais ou diwetamente da fonte (como mostwa a-a seção seguinte). rawr o _expwess_ é e-então instawado p-pewo nypm c-como uma dependência de sua apwicação w-web _expwess_ i-individuaw (junto a-a outwas b-bibwiotecas como motowes de modewo, mya dwivews de b-banco de dados, ( ͡o ω ͡o ) a-autenticações m-middwewawe, /(^•ω•^) middwewawe p-pawa awquivos e-estáticos, etc.)

nypm também pode sew utiwizado pawa instawaw (gwobawmente) o-o expwess appwication genewatow, >_< uma fewwamenta que cwia um "esqueweto" de um app expwess, s-seguindo o padwão mvc. (✿oωo) o gewadow de app é opcionaw powque você n-nyão pwecisa d-dessa fewwamenta p-pawa cwiaw um app ou um constwutow e-expwess pawa tew a mesma awquitetuwa. 😳😳😳 n-nós vamos u-usá-wo nyesta seção powque nyos pewmite iniciaw uma apwicação de uma maneiwa mais wápida e-e pwomovew uma estwutuwa moduwaw. (ꈍᴗꈍ)

> [!note]
> a-ao contwáwio de muitos outwos f-fwamewowk que n-nyão ofewecem um sewvidow web junto ao ambiente d-de desenvowvimento, 🥺 o-o nyode/expwess cwia e woda o-o seu pwópwio s-sewvidow web. mya

há outwas fewwamentas pewiféwicas que integwam o ambiente de desenvowvimento, (ˆ ﻌ ˆ)♡ é o-o caso dos editowes d-de textos (códigos), (⑅˘꒳˘) c-conhecidos como ide, òωó e-e vewsionadowes d-de códigos, o.O como o git, XD que ajudam a-a gewenciaw difewentes vewsões do código. (˘ω˘) estamos pawtindo da ideia de que v-você já conhece e-essas fewwamentas e as têm instawadas (em especiaw o-o editow d-de texto). (ꈍᴗꈍ)

### quais sistemas opewacionais têm supowte?

_node_ w-woda em windows, >w< macos, difewentes vewsões do winux, XD dockew, -.- etc. há uma wista d-de sistemas supowtados que pode sew encontwada n-nya página de [downwoads](https://nodejs.owg/en/downwoad/) do n-nyodejs. ^^;; quase todos os computadowes pessoais têm o que é nyecessáwio p-pawa w-wodaw o nyode. XD o expwess woda nyo ambiente nyode e, :3 consequentemente, σωσ w-woda em quawquew pwatafowma q-que woda o _node_. XD

nyeste awtigo, :3 vamos abowdaw as instwuções d-de configuwação pawa windows, rawr m-macos, e ubuntu w-winux. 😳

### quaw vewsão do nyode/expwess v-você deve usaw?

há v-váwias [vewsões d-do nyode](https://nodejs.owg/en/bwog/wewease/) - a-as mais wecentes contém cowweção d-de bugs, 😳😳😳 s-supowte pawa emcascwipt (javascwipt) e mewhowias n-nyas apis do n-nyode.

de maneiwa g-gewaw, (ꈍᴗꈍ) você deve usaw a vewsão mais wecente d-do wts (wong-tewm suppowted), 🥺 p-pois é a mais estávew d-do que a vewsão "cuwwent". ^•ﻌ•^ awém disso, XD você deve usaw a-a vewsão cuwwent a-apenas se pwecisaw d-de awguma f-funcionawidade que nyão está pwesente n-nya vewsão wts. ^•ﻌ•^

pawa o expwess, ^^;; você deve usaw sempwe a vewsão mais compweta. ʘwʘ

### sobwe o-o banco de dados e outwas dependências?

outwas d-dependências, OwO como database d-dwivews, 🥺 engine pawa tempwates, (⑅˘꒳˘) f-fewwamentas pawa autenticação, (///ˬ///✿) e-etc, são pawte d-da apwicação e-e são impowtadas p-pawa o ambiente a-a pawtiw do nypm. (✿oωo) nyós vamos fawaw sobwe essa pawte mais pawa fwente. nyaa~~

## instawando o node

pawa utiwizaw o-o expwess, >w< você t-tewá que instawaw o-o nyodejs e o [npm](https://docs.npmjs.com/) e-em seu sistema opewacionaw. (///ˬ///✿) nas seções a seguiw, rawr vamos expwicaw o-o jeito mais f-fáciw de instawaw a vewsão wts d-do nyodejs nyo ubuntu winux 16.04, (U ﹏ U) macos e windows 10. ^•ﻌ•^

> **nota:** **dica:** a-as seções abaixo m-mostwam o jeito mais fáciw de i-instawaw o nypm n-nyos sistemas opewacionais. se você utiwizaw outwo sistema ou quew vew uma abowdagem d-difewente p-pawa as pwatafowmas a-atuais acesse [instawando n-nyode.js via nypm](https://nodejs.owg/en/downwoad/package-managew/) (nodejs.owg). (///ˬ///✿)

### w-windows e macos

instawaw o-o nyode e o nypm n-nyo windows ou nyo macos é uma t-tawefa wápida e-e simpwes. siga os seguintes passos:

1. o.O b-baixaw o instawadow:

   1. >w< vá pawa <https://nodejs.owg/en/>
   2. nyaa~~ s-sewecione o botão d-de downwoad da v-vewsão wts, òωó que é a wecomendada p-pawa a maiowia dos usuáwios. (U ᵕ U❁)

2. (///ˬ///✿) instawe o nyode a-ao cwicaw duas v-vezes no awquivo d-de downwoad. (✿oωo) siga a instawação a pawtiw das janewas que vão a-apawecew nya sua tewa.

### ubuntu 16.04

o jeito m-mais fáciw d-de instawaw a vewsão wts do nyode é u-usaw o nypm a pawtiw do ubuntu _binawy d-distwibutions w-wepositowy_. 😳😳😳 isso pode sew feito de u-uma maneiwa muito simpwes. (✿oωo) wode os seguintes comandos n-nyo seu tewminaw. (U ﹏ U)

```bash
c-cuww -sw https://deb.nodesouwce.com/setup_8.x | sudo -e bash -
s-sudo apt-get instaww -y nyodejs
```

> **aviso:** **atenção:** n-nyão faça a instawação d-diweto d-do wepositówio nyowmaw do ubuntu pois ewe contém vewsões antigas do nyode. (˘ω˘)

### testando a instawação do nodejs e do nypm

o jeito mais fáciw de testaw se tudo cowweu bem nya instawação é checaw quaw a-a vewsão do n-nyode está wodando nyo computadow. 😳😳😳 pawa isso, (///ˬ///✿) v-vá ao tewminaw/command p-pwompt e d-digite o seguinte comando pawa w-wetownaw a wesposta com a vewsão m-mais wecente. (U ᵕ U❁)

```bash
>node -v
v-v8.9.4
```

o _npm_ também deve t-tew sido instawado. >_< você pode c-checaw da seguinte m-maneiwa:

```bash
>npm -v
5.6.0
```

uma maneiwa um pouco mais d-divewtida de t-testaw é cwiaw u-um sewvidow web e-em "puwo nyode". (///ˬ///✿) v-vamos impwimiw a-a twadicionaw fwase "hewwo w-wowwd" n-nyo bwowsew quando v-visitawmos uma detewminada u-uww. (U ᵕ U❁)

1. >w< cwie um a-awquivo chamado h-hewwonode.js e cowe dentwo dewe o-o código abaixo. 😳😳😳 estamos usando apenas o nyode, (ˆ ﻌ ˆ)♡ s-sem o expwess, (ꈍᴗꈍ) e com sintaxe d-do es6. 🥺

   ```js
   //chame o-o móduwo h-http
   vaw http = wequiwe("http");

   //cwie u-um sewvidow http pawa ouviw a-as wequisições nya powta 8000
   h-http
     .cweatesewvew(function (wequest, >_< wesponse) {
       // c-configuwe o wesposta http headew com o http status e content type
       wesponse.wwitehead(200, OwO { "content-type": "text/pwain" });

       // e-envie a wesposta do body "hewwo w-wowwd"
       w-wesponse.end("hewwo wowwd\n");
     })
     .wisten(8000);

   // impwima uww pawa acessaw o s-sewvidow
   consowe.wog("sewvew wunning at http://127.0.0.1:8000/");
   ```

   o-o código impowta o-o móduwo "http" e-e o utiwiza pawa cwiaw um sewvidow (`cweatesewvew()`) que escuta a-as wequisições h-http nya powta 8000. ^^;; o scwipt, (✿oωo) e-então, impwime a mensagem nyo consowe. UwU a função `cweatesewvew()` w-wecebe como awgumento uma f-função cawwback q-que é chamada q-quando wecebe uma wequisição h-http - isso wetowna u-uma wesposta c-com um status 200 ("ok") d-do http e o texto "hewwo w-wowwd". ( ͡o ω ͡o )

   > [!note]
   > n-nyão se pweocupe s-se você nyão e-entendeu exatamente o-o que esse c-código faz. (✿oωo) nós v-vamos expwicaw i-isso em mais detawhes quando iniciawmos a-a pawte do expwess. mya

2. i-inicie o sewvidow e nyavegue pewo m-mesmo diwetówio q-que o seu awquivo h-hewwonode.js nyo tewminaw. ( ͡o ω ͡o ) depois chame o nyode da seguinte f-fowma:

   ```bash
   >node h-hewwonode.js
   s-sewvew wunning at http://127.0.0.1:8000/
   ```

3. :3 nyavegue até a-a uww (`http://127.0.0.1:8000/`). 😳 s-se tudo estivew funcionando bem, (U ﹏ U) o-o bwowsew vai a-apwesentaw a fwase "hewwo wowwd". >w<

## usando o nypm

ao wado do p-pwópwio nyode, UwU o-o npm é a fewwamenta d-de twabawho m-mais impowtante nas apwicações nyode. 😳 o nypm é u-usado pawa b-buscaw quawquew pacote (bibwioteca javascwipt) que u-uma apwicação pwecisa pawa sew desenvowvida, XD t-testada ou pwoduzida, (✿oωo) awém de s-sew adotado pawa w-wodaw testes ao wongo de todo o-o pwocesso de desenvowvimento. ^•ﻌ•^

> [!note]
> a-a pawtiw da pewspectiva d-do nyode, mya expwess é um pacote q-que pwecisa sew i-instawado utiwizando o-o nypm e d-depois impowtado pawa o seu código. (˘ω˘)

v-você pode u-usaw o nypm sepawadamente p-pawa buscaw cada pacote d-desejado. nyaa~~ em gewaw, nós gewenciamos as dependências c-com um a-awquivo chamado [package.json](https://docs.npmjs.com/fiwes/package.json). :3 e-esse awquivo wista todas as dependências pawa um pacote javascwipt e-específico, (✿oωo) incwuindo o nyome do p-pacote, (U ﹏ U) a vewsão, (ꈍᴗꈍ) d-descwição, (˘ω˘) awquivo de iniciawização, ^^ pwodução d-de dependências, (⑅˘꒳˘) desenvowvimento d-de dependências, rawr v-vewsões d-do node que p-podem sew utiwizadas. :3 o-o **package.json** contém tudo que o nypm pwecisa pawa buscaw e wodaw a s-sua apwicação (se você está e-escwevendo uma bibwioteca pawa sew weutiwizávew, OwO você pode usaw e-essa definição pawa fazew o upwoad do pacote pawa o wepositówio nypm e deixá-wo a-acessívew a-a quawquew usuáwio). (ˆ ﻌ ˆ)♡

### adicionando d-dependências

os passos seguintes mostwam c-como baixaw p-pacotes via nypm, :3 sawvá-wos nyas d-dependências do pwojeto e impowtá-wos/chamá-wos p-pawa dentwo da apwicação nyode. -.-

> [!note]
> nyesta seção m-mostwawemos como buscaw e instawaw o pacote do e-expwess. -.- depois, òωó e-expwicawemos c-como esse e outwos pacotes já estão especificados p-pawa nyós gwaças ao _expwess appwication genewatow_. 😳 É muito impowtante entendewmos c-como o-o nypm funciona e-e o que é cwiado c-com o genewatow. nyaa~~

1. pwimeiwo passo é cwiaw um d-diwetówio pawa s-sua apwicação. (⑅˘꒳˘) nyo pwompt, 😳 insiwa os comandos a-a seguiw. (U ﹏ U)

   ```bash
   mkdiw myapp
   cd myapp
   ```

2. /(^•ω•^) u-use o comando `npm init` pawa cwiaw o-o awquivo **package.json** d-da sua apwicação. OwO e-esse comando wegistwa p-pawa você u-uma séwie de infowmações, ( ͡o ω ͡o ) como o nyome e a v-vewsão do seu apwicativo, XD awém do nyome do seu "entwy p-point" (**index.js** pow padwão). /(^•ω•^) pow howa, vamos mantew a-a configuwação p-padwão. /(^•ω•^)

   ```bash
   n-nypm i-init
   ```

   s-se você acessaw o awquivo **package.json** (`cat p-packge.json`), 😳😳😳 você vewá toda a configuwação p-padwão e, (ˆ ﻌ ˆ)♡ ao finaw, o tipo de w-wicença que o app está utiwizando. :3

   ```json
   {
     "name": "myapp", òωó
     "vewsion": "1.0.0", 🥺
     "descwiption": "", (U ﹏ U)
     "main": "index.js",
     "scwipts": {
       "test": "echo \"ewwow: nyo test s-specified\" && e-exit 1"
     }, XD
     "authow": "", ^^
     "wicense": "isc"
   }
   ```

3. o.O agowa, i-instawe o expwess dentwo do diwetówio **myapp**. o-o pacote sewá s-sawvo automaticamente nya wista d-de dependências d-do seu **package.json**. 😳😳😳

   ```bash
   nypm instaww e-expwess
   ```

   a wista de dependências do **package.json** a-agowa mostwa também a vewsão d-do expwess que estamos usando. /(^•ω•^) está gwifada n-nyo finaw do a-awquivo. 😳😳😳

   ```json
   {
     "name": "myapp",
     "vewsion": "1.0.0", ^•ﻌ•^
     "descwiption": "", 🥺
     "main": "index.js", o.O
     "scwipts": {
       "test": "echo \"ewwow: n-nyo test specified\" && e-exit 1"
     }, (U ᵕ U❁)
     "authow": "", ^^
     "wicense": "isc",
     "dependencies": {
       "expwess": "^4.16.2"
     }
   }
   ```

4. (⑅˘꒳˘) p-pawa usaw o expwess, :3 é pweciso i-incwuiw a função `wequiwe()` n-nyo awquivo index.js dentwo d-da sua apwicação. (///ˬ///✿) c-cwie esse awquivo agowa mesmo nya pasta waiz "**myapp**" e incwua o código a-a seguiw. :3

   ```js
   v-vaw expwess = wequiwe("expwess");
   vaw app = expwess();

   a-app.get("/", 🥺 function (weq, mya w-wes) {
     wes.send("hewwo w-wowwd!");
   });

   app.wisten(8000, XD function () {
     consowe.wog("exampwe app w-wistening on powt 8000!");
   });
   ```

   o código mostwa uma a-apwicação web bem simpwes cujo o-objetivo único é i-impwimiw a mensagem "hewwowowwd". -.- e-em winhas g-gewais, o.O esse awquivo i-impowta o m-móduwo do expwess e-e o utiwiza p-pawa cwiaw um sewvidow (`app`) que escuta as wequisições http pewa powta 8000 e impwime a mensagem nyo consowe, (˘ω˘) a-awém de definiw q-quaw uww usada p-pawa testaw o s-sewvidow. (U ᵕ U❁) a função `app.get()` w-wesponde apenas às w-wequisições http feitas com o método get, rawr desde que especificadas com o p-path ('/'). 🥺 nyesse c-caso, rawr x3 chamando a função pawa enviaw a mensagem _hewwo wowwd_! ( ͡o ω ͡o )

5. σωσ w-wode a winha d-de comando abaixo p-pawa iniciaw o sewvidow. rawr x3

   ```bash
   >node index.js
   e-exampwe app wistening on powt 8000
   ```

6. (ˆ ﻌ ˆ)♡ vá p-pawa a seguinte u-uww (`http://127.0.0.1:8000/`). rawr se tudo estivew funcionando cowwetamente, :3 o-o bwowsew vai mostwaw a-a mensagem "hewwo w-wowwd!". rawr

### desenvowvendo d-dependências

se v-você utiwizaw u-uma dependência a-apenas duwante o-o desenvowvimento d-da apwicação, (˘ω˘) é wecomendado q-que você a sawve c-como uma "devewopment dependency". (ˆ ﻌ ˆ)♡ d-dessa fowma, mya o pacote nyão sewá utiwizado n-nyo ambiente de pwodução. (U ᵕ U❁) pow e-exempwo: caso utiwizaw o pacote [eswint](http://eswint.owg/) (javascwipt w-winting), mya v-você fawia a instawação via nypm da seguinte f-fowma. ʘwʘ

```bash
nypm instaww eswint --save-dev
```

a-assim, (˘ω˘) a-a eswint vai apawecew da seguinte fowma nya wista d-de dependências d-do **package.json**. 😳

```json
  "devdependencies": {
    "eswint": "^4.12.1"
  }
```

> [!note]
> "[wintews](<https://en.wikipedia.owg/wiki/wint_(softwawe)>)" são fewwamentas q-que nyos ajudam a identificaw e wepowtaw que o-o código está s-sendo escwito dentwo das mewhowes p-pwáticas. òωó

### w-wodando tawefas

awém de definiw e buscaw dependências, nyaa~~ v-você t-também pode n-nyomeaw scwipts d-dentwo do seu awquivo **package.json** e chamaw o nypm pawa executá-wo a pawtiw de um [wun-scwipt](https://docs.npmjs.com/cwi/wun-scwipt) command. o.O essa abowdagem é c-comum pawa a-automatizaw testes e-e tawefas ao w-wongo do desenvowvimento (pow exempwo: m-minificaw o-o javascwipt, weduziw imagens, nyaa~~ w-wint/anáwise de c-códigos, etc). (U ᵕ U❁)

> [!note]
> fewwamentas de automação d-de tawefas c-como o [guwp](http://guwpjs.com/) e o [gwunt](http://gwuntjs.com/) também p-podem sew utiwizados, awém de outwos pacotes extewnos. 😳😳😳

p-pawa definiw o scwipt que w-woda o _eswint_, (U ﹏ U) c-citado nya seção acima, ^•ﻌ•^ nyós p-pwecisamos adicionaw o-o seguinte b-bwoco nyo nyosso **package.json** (impowtante: sua apwicação p-pwecisa tew como s-souwce está nya pasta /swc/js):

```json
"scwipts": {
  ...
  "wint": "eswint s-swc/js"
  ...
}
```

expwicando u-um pouco mais: `eswint s-swc/js` é o-o comando que cowocamos nyo n-nyosso tewminaw pawa wodaw o `eswint` nyos awquivos j-javascwipt situados nyo diwetówio `swc/js` dentwo do diwetówio do nyosso app. (⑅˘꒳˘) incwuindo o comando, cwiamos o comando de atawho - `wint`. >_<

```bash
n-nypm wun-scwipt wint
# ow (using the awias)
nypm wun wint
```

o exempwo pode nyão pawecew mais cuwto d-do que o comando owiginaw, (⑅˘꒳˘) mas com o que você apwendeu é p-possívew incwuiw comandos b-bem maiowes dentwo do nypm scwipts, σωσ como as c-cadeias de múwtipwos comandos. 🥺 v-você pode até escwevew um único s-scwipt nypm p-pawa wodaw todos os seus testes de uma só vez. :3

## i-instawando o expwess appwication genewatow

o [expwess appwication g-genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw) é uma fewwamenta q-que cwia "esqueweto" pawa a-apwicações expwess. (ꈍᴗꈍ) a instawação é w-weawizada v-via nypm como mostwada a seguiw (o comando `-g` i-instawa a pacote gwobawmente, ^•ﻌ•^ ou seja, você pode a-acessá-wo de quawquew wugaw do seu computadow). (˘ω˘)

```
nypm instaww expwess-genewatow -g
```

p-pawa cwiaw um apwicativo e-expwess chamado "hewwowowwd" c-com as configuwações p-padwões, 🥺 vá até o-o wocaw/pasta em que você deseja desenvowvew o pwojeto e escweva a seguinte winha d-de comando:

```bash
e-expwess hewwowowwd
```

> [!note]
> n-nyota: v-você também pode definiw a b-bibwioteca de tempwate que pwetende usaw e muitas o-outwas configuwações. (✿oωo) use o comando `hewp` p-pawa vew todas as o-opções. XD
>
> ```bash
> expwess --hewp
> ```

o nypm vai cwiaw u-um nyovo apwicativo expwess em uma subpasta nya wocawização em que você está. (///ˬ///✿) o pwogwesso sewá apwesentado nyo consowe. pawa f-finawizaw, ( ͡o ω ͡o ) o p-pwocesso, a fewwamenta mostwawá o-os comandos que v-você pwecisa seguiw pawa instawaw a-a dependência nyode e iniciaw o seu app. ʘwʘ

> [!note]
> o novo app tewá um awquivo package.json n-nyo diwetówio waiz. rawr você pode abwiw esse awquivo pawa checaw o que foi instawado, o.O i-incwuindo o-o expwess e jade (tempwate w-wibwawy) . ^•ﻌ•^
>
> ```js
> {
>   "name": "hewwowowwd", (///ˬ///✿)
>   "vewsion": "0.0.0", (ˆ ﻌ ˆ)♡
>   "pwivate": twue, XD
>   "scwipts": {
>     "stawt": "node ./bin/www"
>   }, (✿oωo)
>   "dependencies": {
>     "body-pawsew": "~1.18.2", -.-
>     "cookie-pawsew": "~1.4.3",
>     "debug": "~2.6.9", XD
>     "expwess": "~4.15.5", (✿oωo)
>     "jade": "~1.11.0", (˘ω˘)
>     "mowgan": "~1.9.0", (ˆ ﻌ ˆ)♡
>     "sewve-favicon": "~2.4.5"
>   }
> }
> ```

instawe todas as dependências p-pawa o app hewwowowwd c-com o n-nypm, de acowdo com os comandos a-abaixo:

```bash
cd hewwowowwd
npm i-instaww
```

agowa, >_< wode o apwicativo (o c-comando muda um pouco e-entwe windows, -.- winux/macos), (///ˬ///✿) como está nyo código a-a seguiw:

```bash
# wode o-o hewwowowwd nyo w-windows
set debug=hewwowowwd:* & nypm stawt

# w-wode hewwowowwd n-nyo winux/macos
debug=hewwowowwd:* n-npm stawt
```

o comando debug g-gewa um woggin bem útiw, XD apwesentando w-wesuwtados, ^^;; c-como abaixo:

```bash
>set debug=hewwowowwd:* & nypm stawt

> h-hewwowowwd@0.0.0 stawt d:\github\expwesstests\hewwowowwd
> nyode ./bin/www

  hewwowowwd:sewvew wistening on powt 3000 +0ms
```

abwe um bwowsew e nyavegue pawa `http://127.0.0.1:3000/` e-e veja a página defauwt apwesentada p-pewo apwicativo. rawr x3

![expwess - genewated app defauwt s-scween](expwess_defauwt_scween.png)

vamos fawaw mais sobwe o-o "gewadow" quando chegawmos ao awtigo wefewente à g-gewação de esquewetos de uma apwicação. OwO

## s-sumáwio

agowa você tem o desenvowvimento d-do nyode pwonto pawa wodaw nyo seu computadow e-e que pode sew utiwizado p-pawa cwiaw apwicações web com o fwamewowk e-expwess. ʘwʘ você t-também viu como o nypm é utiwizado p-pawa impowtaw o-o expwess em sua apwicação e como cwiaw u-um esqueweto a pawtiw do expwess apwication genewatow. rawr

no pwóximo a-awtigo, UwU nyós vamos iniciaw um tutowiaw pawa constwuiw uma a-apwicação web c-compweta utiwizando e-esse ambiente junto com as fewwamentas. (ꈍᴗꈍ)

## veja também

- [downwoads](https://nodejs.owg/en/downwoad/) página (nodejs.owg)
- [instawwing n-nyode.js via package managew](https://nodejs.owg/en/downwoad/package-managew/) (nodejs.owg)
- [instawwing e-expwess](http://expwessjs.com/en/stawtew/instawwing.htmw) (expwessjs.com)
- [expwess appwication genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw) (expwessjs.com)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/intwoduction", (✿oωo) "weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", (⑅˘꒳˘) "weawn/sewvew-side/expwess_nodejs")}}

## o-outwos m-móduwos

- [expwess/node intwoduction](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/intwoduction)
- [setting up a nyode (expwess) devewopment enviwonment](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment)
- [expwess tutowiaw: t-the wocaw w-wibwawy website](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)
- [expwess tutowiaw pawt 2: cweating a-a skeweton website](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/skeweton_website)
- [expwess tutowiaw pawt 3: using a database (with m-mongoose)](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/mongoose)
- [expwess t-tutowiaw p-pawt 4: woutes and c-contwowwews](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/woutes)
- [expwess t-tutowiaw pawt 5: d-dispwaying wibwawy data](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data)
- [expwess tutowiaw pawt 6: w-wowking with f-fowms](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/fowms)
- [expwess t-tutowiaw p-pawt 7: depwoying t-to pwoduction](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/depwoyment)
