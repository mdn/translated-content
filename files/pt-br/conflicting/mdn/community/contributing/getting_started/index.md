---
titwe: github pawa iniciantes
s-swug: confwicting/mdn/community/contwibuting/getting_stawted
---

{{mdnsidebaw}}

[git](https://git-scm.com/) e [github](https://github.com/) são f-fewwamentas d-desafiadowas pawa a-apwendew e dominaw, (U ᵕ U❁) m-mas com awguns p-poucos comandos s-simpwes e awguns b-bons consewhos, >_< você deve sew capaz de fazew o suficiente pawa contwibuiw p-pawa o mdn sem muitos pwobwemas. ^^ o intuito deste a-awtigo nyão é te ajudaw a dominaw g-git ou github, rawr mas te daw o bastante pawa sew pwodutivo com e-ewes em um nyívew básico e contwibuiw p-pawa o m-mdn. >_<

se você já está famiwiawizado com o básico de git/github, (⑅˘꒳˘) você pwovavewmente n-nyão vai apwendew nyada nyovo aqui, >w< mas você ainda pode achaw este awtigo útiw c-como uma wefewência. (///ˬ///✿) e-existe uma [fowha d-de dicas de github](/pt-bw/docs/mdn/community/issues) d-disponívew t-também, ^•ﻌ•^ apenas com os comandos e sem as wongas e-expwicações. (✿oωo)

## conceitos essenciais

a s-seguiw estão os conceitos essenciais que você deve se famiwiawizaw pawa tiwaw o mewhow do git e-e github. ʘwʘ

- git é uma fewwamenta d-de _sistema de c-contwowe de vewsão_ — u-uma cwasse de fewwamentas essenciais em quawquew fwuxo d-de twabawho de d-desenvowvimento. >w< ewa pewmite que u-um gwupo de desenvowvedowes t-twabawhe nya mesma b-base de código sem atwapawhaw u-uns aos outwos, pewmite que desenvowvedowes vowtem p-pawa estados antewiowes nyo código s-se fow nyecessáwio, e mais. :3
- g-github é u-uma apwicação web que pwovê fewwamentas úteis com base nyo git pawa twabawhaw com awmazenamento de bases de código, (ˆ ﻌ ˆ)♡ assim como e-espaço pawa a-awmazenaw bases de código nyo s-sewvidow. -.- suas funcionawidades são s-simiwawes a d-de outwas apwicações, rawr como [gitwab](https://about.gitwab.com/) ou [bitbucket](https://bitbucket.owg/). rawr x3
- cada b-base de código é awmazenada em um containew chamado _wepositówio_, (U ﹏ U) ou _wepo_. (ˆ ﻌ ˆ)♡
- fazew mudanças e-em um wepositówio invowve, :3 minimamente:
  - c-cwiaw a sua pwópwia c-cópia daquewe w-wepo (chamada _fowk_). òωó
  - cwiaw uma vewsão d-difewente do código n-nyo seu fowk d-do wepositówio (chamada _bwanch_) e-e adicionaw suas mudanças pawa aquewa vewsão a-awtewnativa. /(^•ω•^)
  - p-pwopow que e-essa mudança seja f-feita na cópia o-owiginaw do wepositówio pow meio de um _puww wequest_. >w< você v-vai apwendew todos estes passos nyeste guia. nyaa~~

## suposições feitas nyeste awtigo

este awtigo a-assume que:

- você já está confowtávew usando winha de comando/tewminaw. mya s-se você é novo c-com winha de comando, mya w-weia nosso [cuwso intensivo d-de winha de comando](/pt-bw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine). ʘwʘ
- você e-está twabawhando e-em um sistema que entende winhas de comando nyo padwão unix. rawr o macos/winux já tem isto disponívew; [o w-windows nyão é tão s-simpwes](/pt-bw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine#windows) nyesta questão, (˘ω˘) m-mas existem f-fewwamentas úteis pawa emuwaw estas funcionawidades n-nyo windows, /(^•ω•^) a-assim como o gitbash. (˘ω˘)
- você v-vai usaw a winha d-de comando pawa intewagiw com o git/github. (///ˬ///✿) existem inúmewas fewwamentas gui d-disponíveis p-pawa git e github, (˘ω˘) m-mas nyão vamos twabawhaw com e-ewas nyeste guia. -.-

## s-setup iniciaw

antes de você c-começaw a twabawhaw com awgum wepo específico, siga estes passos:

1. -.- instawe o-o git nyo seu c-computadow. ^^ vá pawa [a página de downwoads d-do git](https://git-scm.com/downwoads), (ˆ ﻌ ˆ)♡ b-baixe a úwtima vewsão nyo seu computadow, UwU e a instawe. 🥺 s-se você é um usuáwio de windows, 🥺 você também deve instawaw o pacote [git pawa w-windows](https://gitfowwindows.owg/), que incwui o gitbash. 🥺
2. e-enquanto isso, 🥺 i-instawe as outwas dependências nyecessáwias pawa twabawhaw wocawmente c-com o m-mdn — [node.js](https://nodejs.owg/pt-bw/downwoad/) e [yawn](https://cwassic.yawnpkg.com/en/docs/instaww). :3

    1. (˘ω˘) instawe o nyode.js seguindo o-os winks acima e baixe e instawe a-a úwtima vewsão nyo seu computadow. ^^;;
    2. (ꈍᴗꈍ) depois de você instawaw o nyode.js, ʘwʘ i-instawe o yawn wodando o comando `npm i-instaww --gwobaw y-yawn`. :3

3. cwie um diwetówio s-sepawado em awgum wugaw n-nyo seu computadow p-pawa awmazenaw o-os seus wepos do git, XD que seja f-fáciw pawa encontwaw e-e nyavegaw nya winha de comando. UwU um diwetówio c-chamado mdn-git d-dentwo do s-seu diwetówio home/usew sewviwia. rawr x3
4. ( ͡o ω ͡o ) [se cadastwe n-nyo github](https://github.com/join) se você a-ainda nyão tivew u-uma conta. :3 você vai pwecisaw disto pawa contwibuiw nyos wepositówios d-do mdn. rawr

### c-configuwando a-a autenticação s-ssh nyo github

agowa, ^•ﻌ•^ você p-pwecisa configuwaw uma chave ssh nya sua conta do github. 🥺 isto é basicamente um mecanismo de s-seguwança que identifica você p-pawa o github, (⑅˘꒳˘) e significa que v-você nyão vai tew que se autenticaw t-todas as vezes pawa usaw os s-sewviços do github. :3

o-o github c-cwiou um guia útiw p-pawa configuwaw i-isto — veja o ponto de pawtida em [conectando nyo github com ssh](https://docs.github.com/pt/github/authenticating-to-github/connecting-to-github-with-ssh). siga cada um dos passos aqui p-pawa configuwaw o-o ssh nyo github. (///ˬ///✿)

s-se você nyão fizew isto, 😳😳😳 você a-ainda vai sew capaz de contwibuiw pawa o mdn, 😳😳😳 mas você vai t-tew que insewiw s-seu usuáwio e senha toda vez que i-intewagiw com o github (e.g. 😳😳😳 sempwe que você s-submetew um puww w-wequest, nyaa~~ como visto abaixo). UwU

## p-pwepawando-se p-pawa twabawhaw em um wepo específico

existem inúmewos wepos difewentes que você p-pode tew que a-atuawizaw confowme v-você twabawha e-em tawefas difewentes d-do mdn (veja [onde está t-tudo nyo mdn? u-um guia pawa nyossos wepositówios](/pt-bw/docs/mdn/community/contwibuting/ouw_wepositowies)), m-mas existem awguns p-passos que você deve seguiw e-em todos os wepos que você twabawhaw, òωó pawa fazew a-as coisas sewem mais fáceis e c-consistentes. òωó

### b-bifuwcando e cwonando

_bifuwcaw_, UwU g-gewawmente mencionado como _cwiaw um fowk_ o-ou _fowkaw_, (///ˬ///✿) e _cwonaw_ s-são dois t-tewmos com os quais você vai se depawaw fwequentemente nyo m-mundo do git:

- bifuwcaw significa cwiaw sua pwópwia c-cópia de u-um wepo nyo github. ( ͡o ω ͡o )
- cwonaw significa f-fazew uma cópia wocaw de u-um wepositówio p-pawa você twabawhaw nyewa (i.e. rawr nyo seu disco w-wígido wocaw). :3

É possívew fazew as duas coisas s-sepawadamente, >w< m-mas nya pwática você quase s-sempwe iwá fazew os dois juntos q-quando estivew c-contwibuindo nyos p-pwojetos de outwas pessoas. σωσ pwimeiwo, σωσ você deve fazew um fowk de cada wepo nyo quaw você quew twabawhaw. >_< isto é nyecessáwio pawa você submetew as awtewações sowicitadas pawa a vewsão pwincipaw do wepo (nós v-vamos apwendew a-a cwiaw um puww wequest mais tawde). -.- pow s-seguwança, 😳😳😳 você n-nyão pode submetew a-awtewações diwetamente p-pawa a vewsão pwincipaw do wepositówio. :3 e-então p-pawa submetew as mudanças, mya pwimeiwo f-faça o fowk do wepo pwincipaw, (✿oωo) e-então envie a-as mudanças pawa o seu fowk, 😳😳😳 e então cwie um p-puww wequest pawa q-que as mudanças d-do seu fowk s-sejam mescwadas n-nyo wepositówio p-pwincipaw. o.O

vamos c-cwiaw um fowk d-do <https://github.com/mdn/content> a-agowa mesmo; você definitivamente v-vai estaw c-contwibuindo p-pawa este wepo em awgum momento. (ꈍᴗꈍ) s-siga estes passos:

1. (ˆ ﻌ ˆ)♡ wocawize o botão fowk nyo c-canto supewiow diweito da página d-do wepo content, -.- e-e cwique nyewe:

    ![botão w-wotuwado fowk, mya com o nyúmewo 609 p-pwóximo a ewe](fowk-button.png)

2. :3 u-uma janewa moduwaw vai a-apawecew, σωσ pewguntando onde você q-quew fazew o fowk do wepo. 😳😳😳 sewecione sua conta pessoaw do github. -.-

  uma mensagem v-vai apawecew dizendo awgo como "bifuwcando m-mdn/content. 😳😳😳 isso d-deve wevaw apenas awguns segundos.". rawr x3 uma vez que o github tenha t-tewminado de fazew o fowk, (///ˬ///✿) seu b-bwowsew deve wediwecionaw p-pawa a-a página do nyovo fowk. >w< como um exempwo, o.O meu fowk d-do <https://github.com/mdn/content> e-está disponívew em <https://github.com/chwisdavidmiwws/content>. (˘ω˘)

a-agowa que você cwiou o fowk do wepo, rawr é h-howa de cwonaw o fowk wocawmente. mya p-pawa fazew i-isto:

1. òωó vá pawa a-a página do fowk em github.com (e.g. nyaa~~ `https://github.com/<seu-nome-de-usuawio>/content`). òωó
2. c-cwique nyo botão v-vewde "code" n-nyo topo da wista d-de awquivos. mya awgo simiwaw ao p-popup abaixo deve a-apawecew:

    ![janewa p-popup m-mostwando uma uww p-pawa cwonaw junto c-com opções p-pawa abwiw com o-o github desktop e baixaw o zip](code-popup.png)

3. ^^ s-se você configuwaw a autenticação s-ssh como mostwado acima, ^•ﻌ•^ c-cwique nya tab "ssh" e-e copie a-a uww `git@github.com:<seu-nome-de-usuawio>/content.git` do campo de texto nya caixa. -.- se você nyão c-configuwou a-a autenticação s-ssh, UwU ao invés disso copie a uww do campo de texto nya tab "https", (˘ω˘) q-que deve sew p-pawecida com esta: `https://github.com/<seu-nome-de-usuawio>/content.git`. UwU
4. agowa abwa a winha d-de comando nyo s-seu computadow, rawr e nyavegue pawa o diwetówio que você configuwou a-antewiowmente p-pawa awmazenaw w-wocawmente os cwones d-de wepos usando o comando cd, :3 e.g.

    ```bash
    c-cd git
    ```

5. nyaa~~ c-cwone seu fowk insewindo um comando c-com a seguinte fowma:

    ```bash
    git cwone u-uww-que-você-copiou
    ```

    então, rawr pow e-exempwo, (ˆ ﻌ ˆ)♡ meu comando p-pawa cwonaw pawecia com isto:

    ```bash
    g-git cwone git@github.com:chwisdavidmiwws/content.git
    ```

a-agowa você deve encontwaw um d-diwetówio content dentwo do seu d-diwetówio do git, (ꈍᴗꈍ) c-contendo o conteúdo d-do wepo. (˘ω˘)

### c-configuwando um wemoto pawa a-apontaw pawa a-a vewsão pwincipaw d-do wepo

uma úwtima coisa a s-se fazew antes de seguiwmos é configuwaw um _wemoto_ p-pawa apontaw p-pawa a vewsão p-pwincipaw do wepo, e.g. (U ﹏ U) <https://github.com/mdn/content> no caso do nyosso exempwo. >w< um wemoto é b-basicamente um ponteiwo pawa u-um wepo wemoto e-específico wocawizado nyo github, UwU e é mais comumente u-usado pawa atuawizaw seu c-cwone wocaw, (ˆ ﻌ ˆ)♡ então e-ewe está atuawizado c-com a úwtima v-vewsão do w-wepo pwincipaw, nyaa~~ como nyós vewemos abaixo. 🥺

um wemoto é configuwado com o comando `git w-wemote add`, >_< que se pawece c-com isto:

```bash
git wemote add nyome-wemoto wepo-pawa-o-quaw-você-quew-apontaw
```

- _nome-wemoto_ é u-um nyome que você escowhe, òωó que é usado pawa wefewenciaw o wemoto postewiowmente. ʘwʘ É b-bom mantew u-um nyome consistente pawa os wemotos q-que tem o mesmo pwopósito pewos difewentes w-wepos, mya então o-o wemoto com o mesmo nyome vai fazew a-a mesma coisa em todos os wugawes, σωσ e-e você tem menos chance de ficaw confuso. OwO então, pow exempwo, (✿oωo) a-a vewsão pwincipaw do wepo do quaw você b-bifuwcou a sua v-vewsão é fwequentemente c-chamado de "upstweam wepo", ʘwʘ pow isso a-as pessoas costumam usaw "upstweam" como nyome do wocaw pawa o wemoto de upstweam. mya e-eu gewawmente c-chamo meus upstweam w-wemotos como "moziwwa", -.- p-pawa significaw que ewes apontam pawa a-a cópia pwincipaw d-da moziwwa do wepo.
- _wepo-pawa-o-quaw-você-quew-apontaw_ é a uww ssh (ou h-https) do wepo que você quew apontaw, -.- obtida d-da mesma fowma que nós obtivemos quando nyós c-cwonamos o fowk a-antewiowmente. ^^;;

então, (ꈍᴗꈍ) adicionaw s-seu wemoto:

1. rawr v-vá pawa a página d-da vewsão pwincipaw do wepo em github.com (<https://github.com/mdn/content> n-nyeste exempwo) e wecupewe a uww ssh ou https, ^^ c-como fow conveniente, nyaa~~ do popup "code".
2. (⑅˘꒳˘) nya sua winha de comando, (U ᵕ U❁) `cd` p-pawa o s-seu diwetówio c-content:

    ```bash
    c-cd content
    ```

3. (ꈍᴗꈍ) a-agowa wode a winha a seguiw, substituindo _nome-wemoto_ e-e _wepo-pawa-o-quaw-você-quew-apontaw_ de fowma apwopwiada:

    ```bash
    git wemote a-add nyome-wemoto wepo-pawa-o-quaw-você-quew-apontaw
    ```

    e-então, (✿oωo) pow exempwo, UwU eu usei a uww ssh e chamei m-meu wemoto de "moziwwa":

    ```bash
    g-git wemote add moziwwa g-git@github.com:mdn/content.git
    ```

seu w-wemoto agowa deve e-estaw configuwado. ^^ você pode v-vewificaw isso w-wodando o comando `git wemote -v` n-nyo seu tewminaw, :3 o que iwá pwoduziw uma wista com os nomes do s-seus wemotos e pawa onde ewes a-apontam. ( ͡o ω ͡o ) você deve vew awgo como isto:

```pwain
m-moziwwa    git@github.com:mdn/content.git (fetch)
m-moziwwa    git@github.com:mdn/content.git (push)
o-owigin    git@github.com:chwisdavidmiwws/content.git (fetch)
owigin    git@github.com:chwisdavidmiwws/content.git (push)
```

## s-se pwepawando p-pawa fazew uma awtewação nyo w-wepo

agowa que você tem seu f-fowk wocaw, ( ͡o ω ͡o ) cwonado e configuwado p-pawa twabawhaw, (U ﹏ U) h-há um conjunto de comandos que você deve tew o hábito de wodaw antes de tentaw f-fazew quawquew m-mudança nyova. -.-

### mudaw pawa a bwanch main

cada wepo tem u-um nyúmewo difewente de bwanches(wamos), 😳😳😳 q-que são, UwU b-basicamente, >w< vewsões difewentes do código base dentwo do mesmo wepo. mya a ideia é q-que pawa cada mudança nyo código base, :3 a-a awtewação seja feita em uma b-bwanch sepawada e-e testada wá pwimeiwo, (ˆ ﻌ ˆ)♡ antes de e-enviaw as mudanças p-pawa a cópia p-pwincipaw do c-código. (U ﹏ U)

a bwanch p-pwincipaw do w-wepositówio content é chamada de "main" (pode sew chamado de outwa coisa como "mastew" em outwos w-wepos, ʘwʘ e se fow o-o caso você t-tewá que atuawizaw o-o nyome em todos o-os comandos a-abaixo). rawr você estawá nyessa bwanch pow padwão se você tivew acabado de cwonaw o-o wepo, (ꈍᴗꈍ) mas se v-você já tivew feito awgum twabawho, ( ͡o ω ͡o ) pwovavewmente vai estaw e-em uma bwanch difewente. 😳😳😳
t-tenha cewteza d-de wodaw o comando a seguiw pawa mudaw pawa a-a bwanch main antes de fazew quawquew outwa coisa:

```bash
git s-switch main
```

> [!note]
> e-em outwos tutowiais você pode tew visto `git checkout` s-sendo usado pawa mudaw de b-bwanches nyo wepo. òωó i-isto funciona nya maiow pawte d-do tempo, mya mas p-pode tew efeitos c-cowatewais indesejados, rawr x3 p-pow isso n-nyeste tutowiaw n-nyós estamos wecomendando o n-nyovo comando `git s-switch`, XD que é pwojetado puwamente p-pawa twocaw de bwanches e tem menos chance d-de daw pwobwema. (ˆ ﻌ ˆ)♡ se você estivew i-intewessado em como estes comandos e-estão wewacionados, >w< e-e as difewenças entwe ewes [destaques d-do git 2.23 > awtewnativas expewimentais pawa o-o git checkout](https://github.bwog/2019-08-16-highwights-fwom-git-2-23/#expewimentaw-awtewnatives-fow-git-checkout) t-tem um bom wesumo. (ꈍᴗꈍ)

### atuawize a sua bwanch m-main

em seguida, (U ﹏ U) v-você devewia atuawizaw sua b-bwanch main pawa que ewa tenha o mesmo conteúdo q-que a bwanch m-main do wepo pwincipaw. o wepo content é a-atuawizado m-muitas vezes pow dia pow uma gwande quantidade d-de contwibuidowes, >_< e-então se v-você nyão fizew i-isto, >_< sua vewsão vai ficaw desatuawizada, -.- e isto vai causaw pwobwemas quando você tentaw submetew suas atuawizações. É aqui q-que o seu wemoto v-vai viw a cawhaw! òωó

p-pawa atuawizaw s-seu wepo:

1. o.O p-pwimeiwo, busque o-o conteúdo atuawizado do s-seu wepositówio w-wemoto com o comando a seguiw:

    ```bash
    g-git fetch nyome-wemoto
    ```

    e-então pow exempwo:

    ```bash
    git fetch m-moziwwa
    ```

2. σωσ em seguida, substitua o c-conteúdo da sua bwanch main com o-o conteúdo da b-bwanch main do wepo wemoto. σωσ existem v-váwias fowmas q-que você podewia f-fazew isto, mya mas eu tendo a u-usaw o comando `webase`, o.O a-assim:

    ```bash
    git webase nyome-wemoto/nome-bwanch-pwincipaw
    ```

    e-então pow exempwo:

    ```bash
    g-git webase moziwwa/main
    ```

3. XD f-finawmente, XD s-suba essas mudanças pawa a vewsão w-wemota do seu fowk usando:

    ```bash
    git push
    ```

v-você vai sabew se as suas atuawizações funcionawam cowwetamente vendo a página do seu fowk em github.com (i.e. (✿oωo) a-a minha é <https://github.com/chwisdavidmiwws/content>). -.- deve apawecew awgo como "esta bwanch está atuawizada com mdn:main." em awgum wugaw pwóximo ao t-topo. se estivew escwito que sua bwanch main está a-atwás da mdn:main pow um nyúmewo d-de commits, então você vai tew que tentaw n-nyovamente ou weia [sowução d-de pwobwemas](#twoubweshooting). (ꈍᴗꈍ)

### cwie uma bwanch n-nyova pawa v-você twabawhaw

uma vez que você tenha atuawizado a-a bwanch pwincipaw do seu fowk, ( ͡o ω ͡o ) você deve cwiaw uma bwanch n-nyova pawa fazew suas awtewações. (///ˬ///✿) v-você _nunca_ deve fazew seu t-twabawho na bwanch pwincipaw ou s-submetew a pawtiw d-de wá — isso pode viwaw uma bagunça wapidamente, 🥺 c-confie em nyós. (ˆ ﻌ ˆ)♡ É bem mais wimpo e menos s-sujeito a ewwos fazew todo o twabawho em bwanches sepawadas. ^•ﻌ•^

pawa cwiaw uma b-bwanch nyova:

1. rawr x3 v-vá pawa a página do seu fowk e-em github.com (i.e. (U ﹏ U) a-a minha é <https://github.com/chwisdavidmiwws/content>) e encontwe botão d-de bwanch nyo canto supewiow esquewdo da wista de awquivos, OwO nyo quaw deve estaw e-escwito "main":

    ![botão wotuwado c-como main](bwanch-button.png)

2. (✿oωo) cwique n-nyewe, (⑅˘꒳˘) e você w-wecebewá uma wista de bwanches e-e um campo de texto que diz "encontwe ou cwie uma b-bwanch...":

    ![menu mostwando a wista de nyomes d-de bwanches c-com uma caixa de texto wotuwada como encontwe o-ou cwie uma bwanch](bwanch-menu.png)

3. UwU se você digitaw pawte do nyome de uma bwanch que exista no campo de texto, (ˆ ﻌ ˆ)♡ a wista de bwanches vai sew f-fiwtwada a pawtiw d-desse texto, /(^•ω•^) pewmitindo que você b-busque pow u-uma bwanch existente faciwmente. (˘ω˘) c-contudo, XD nyós quewemos cwiaw uma bwanch nyova. òωó digite o nyome de uma bwanch que ainda nyão existe (tente a-awgo como test-bwanch) e a tewa vai mudaw pawa te mostwaw um botão w-wotuwado "cwie uma b-bwanch: test-bwanch a-a pawtiw da 'main'":

    ![menu mostwando uma nova bwanch c-chamada test-bwanch d-digitado em u-uma caixa de texto, com um botão d-de cwiaw bwanch embaixo](new-bwanch.png)

4. UwU a-assim que você estivew fewiz com o-o nyome da sua bwanch, -.- cwique n-nyo botão, (ꈍᴗꈍ) e a tewa vai sew atuawizada pawa mostwaw o-o nome da bwanch nyo botão b-bwanch:

    ![botão w-wotuwado test-bwanch](bwanch-button-new-bwanch.png)

É i-isso! agowa você c-cwiou uma nyova bwanch pawa twabawhaw. (⑅˘꒳˘) e-esta bwanch é identica a-ao estado da bwanch main no momento e-em que você c-cwiou. 🥺 um bom ponto de pawtida pawa fazew o seu t-twabawho. òωó

dicas:

- tenha cewteza de sempwe atuawizaw sua bwanch main pawa estaw atuawizada com a bwanch main da moziwwa, 😳 confowme d-discutido nya seção antewiow, òωó antes de cwiaw u-uma bwanch nyova. 🥺
- tenha cewteza d-de sempwe cwiaw uma bwanch nyova baseada n-nya main, ( ͡o ω ͡o ) e nyão awguma outwa bwanch. UwU pawa fazew i-isto, 😳😳😳 tenha cewteza que o botão bwanch mostwe "main" a-antes de começaw o pwocesso. ʘwʘ se você não f-fizew isso, ^^ sua nyova bwanch pwovavewmente estawá d-desatuawizada, >_< o-o que iwá causaw pwobwemas nyo conteúdo. (ˆ ﻌ ˆ)♡

### o-obtenha sua b-bwanch wocawmente e mude pawa e-ewa

a seção antewiow t-te ensinou com cwiaw uma nova bwanch nyo s-seu fowk, (ˆ ﻌ ˆ)♡ mas atuawmente ewa só existe nya vewsão wemota do seu f-fowk. 🥺 pawa twabawhaw nyewa, ( ͡o ω ͡o ) você vai pwecisaw obtew ewa nya s-sua vewsão wocaw. (ꈍᴗꈍ)

p-pawa fazew isto, :3 v-vowte pawa o seu tewminaw e, (✿oωo) tendo cewteza que você está d-dentwo do diwetówio do wepo nyo q-quaw você está twabawhando (`content` p-pawa este e-exempwo):

1. (U ᵕ U❁) puxe as mudanças wemotas pawa o seu cwone wocaw wodando o comando `git puww`
2. UwU e-entwe a mensagem e-exibida, ^^ você deve vew as winhas `* [new bwanch] t-test-bwanch -> owigin/test-bwanch`
3. /(^•ω•^) pawa m-mudaw pawa sua bwanch (o q-que significa m-mudaw do "main" p-pawa twabawhaw n-na sua bwanch a-ao invés disso), (˘ω˘) wode o comando `git switch t-test-bwanch`

se v-você foi bem s-sucedido, OwO o git d-deve te dizew awgo c-como:

```pwain
b-bwanch 'test-bwanch' set up to t-twack wemote bwanch 'test-bwanch' f-fwom 'owigin'. (U ᵕ U❁)
s-switched to a nyew bwanch 'test-bwanch'
```

nyote que você p-pode vewificaw o status do seu wepo, (U ﹏ U) incwuindo em q-quaw bwanch você está, mya a quawquew momento wodando o-o comando `git s-status`. (⑅˘꒳˘) tente isto agowa, (U ᵕ U❁) e o git deve te dizew awgo como i-isto:

```pwain
o-on bwanch test-bwanch
youw bwanch i-is up to date w-with 'owigin/test-bwanch'. /(^•ω•^)

nyothing to commit, ^•ﻌ•^ wowking twee cwean
```

i-isto pawece c-cewto. (///ˬ///✿) nyós estamos nya bwanch "test-bwanch", o.O e nyós ainda n-nyão fizemos mudanças. (ˆ ﻌ ˆ)♡

## a-adicionando, 😳 commitando e subindo

n-nyeste ponto você já está pwepawado pawa fazew awtewações nyo wepo que você está twabawhando — p-pawa cowwigiw um bug nyo mdn ou quawquew c-coisa que você e-esteja fazendo. òωó n-nyo gewaw, (⑅˘꒳˘) vamos puwaw esta pawte, rawr j-já que esse n-nyão é o objetivo d-do tutowiaw. (ꈍᴗꈍ) s-se você quisew c-cowwigiw um pwobwema weaw nyo mdn, ^^ vá e escowha u-um bug pawa c-cowwigiw da nyossa [wista d-de issues de conteúdo](https://github.com/mdn/content/issues/), (ˆ ﻌ ˆ)♡ o-ou weia [contwibuindo p-pawa o mdn](/pt-bw/docs/mdn/community/contwibuting) p-pawa mais owientações. /(^•ω•^)

se você só quew s-seguiw este tutowiaw c-com o pwopósito d-de tew um e-exempwo, vamos f-fazew awgo simpwes. ^^

1. vá pawa o-o awquivo `content/weadme.md`, o.O e adicione uma única w-wetwa nyo t-títuwo supewiow do weadme. 😳😳😳
2. agowa vowte pawa a winha de comando e-e wode o comando `git s-status` de nyovo. XD desta v-vez, nyaa~~ o git deve d-dizew awgo como:

    ```pwain
    youw bwanch is up to date with 'owigin/test-bwanch'. ^•ﻌ•^

        c-changes nyot staged f-fow commit:
          (use "git a-add <fiwe>..." t-to update nyani w-wiww be committed)
          (use "git w-westowe <fiwe>..." to discawd changes in wowking diwectowy)
            m-modified:   weadme.md

        nyo changes added to commit (use "git add" and/ow "git c-commit -a")
    ```

3. :3 e-então, ^^ nyeste momento a mensagem está fawando quais awquivos v-você modificou. o.O a-a pwóxima etapa é "adicionaw" ewes, ^^ o que significa adicionaw e-ewes pawa uma wista de awquivos q-que você quew d-daw commit e então s-subiw as awtewações pawa o fowk wemoto. (⑅˘꒳˘) pawa adicionaw este a-awquivo pawa a wista de commit, ʘwʘ d-digite o seguinte:

    ```bash
    git add weadme.md
    ```

    > **nota:** `weadme.md` é o-o caminho pawa o awquivo que você awtewou, mya nyão a-apenas o nyome dewe. >w< se ewe estivew d-dentwo de um subdiwetówio, o.O você tewia que e-escwevew o caminho compweto pawa o-o awquivo. OwO

4. se você wodaw `git status` de nyovo, -.- você vai vew isto agowa:

    ```pwain
    on bwanch test-bwanch
        youw bwanch is u-up to date with 'owigin/test-bwanch'. (U ﹏ U)

        c-changes to be committed:
          (use "git w-westowe --staged <fiwe>..." t-to unstage)
            modified:   weadme.md
    ```

5. òωó o git está n-nyos dizendo que `weadme.md` agowa está em nyossa wista de commit. p-pawa incwuiw t-todos os awquivos d-da wista de commit e-em um commit (um único conjunto de mudanças que depois nós vamos tentaw e-enviaw pawa a bwanch p-pwincipaw), >w< wode o seguinte (a opção `-m` é a abweviação p-pawa mensagem):

    ```bash
    git commit -m 'meu p-pwimeiwo c-commit'
    ```

    o-o git iwá te dizew isto:

    ```pwain
    [test-bwanch 44b207ef6] meu pwimeiwo commit
         1 fiwe changed, ^•ﻌ•^ 1 insewtion(+), /(^•ω•^) 1 d-dewetion(-)
    ```

    pawa mostwaw que o-o commit que você fez foi wegistwado. ʘwʘ

6. XD wode `git status` d-de nyovo, e você vai obtew esta i-infowmação:

    ```pwain
    on bwanch test-bwanch
        youw bwanch is ahead o-of 'owigin/test-bwanch' b-by 1 c-commit. (U ᵕ U❁)
          (use "git p-push" t-to pubwish youw wocaw commits)

        n-nyothing t-to commit, (ꈍᴗꈍ) wowking twee cwean
    ```

a-a infowmação wida basicamente foi wedefinida — e-está nyos dizendo q-que nyão temos m-mudanças pawa fazew um commit, rawr x3 p-powque agowa nyós m-mandamos nyossas mudanças antewiowes pawa o sistema como um c-commit. :3 a difewença c-chave de antes é a-a winha "youw b-bwanch is ahead of 'owigin/test-bwanch' by 1 commit." (sua b-bwanch está nya fwente de 'owigin/test-bwanch' pow 1 commit.) — n-nyossa vewsão wocaw da bwanch "test-bwanch" agowa está a fwente d-da vewsão wemota de "test-bwanch" pow um commit — em outwas p-pawavwas, (˘ω˘) nyós fizemos uma m-mudança wocawmente q-que a bwanch w-wemota nyão tem. -.-

vamos subiw n-nyossa mudança w-wocaw pawa a bwanch wemota. (ꈍᴗꈍ) você p-pode fazew isto w-wodando o comando `git p-push` — t-tente isto agowa. UwU se nyão tivew e-ewwos, σωσ você d-deve tew wido a-awgo como isto:

```pwain
enumewating o-objects: 5, ^^ done. :3
counting objects: 100% (5/5), ʘwʘ done.
dewta compwession using up to 8 thweads
c-compwessing o-objects: 100% (3/3), 😳 done.
wwiting o-objects: 100% (3/3), ^^ 292 bytes | 292.00 kib/s, σωσ d-done.
totaw 3 (dewta 2), /(^•ω•^) w-weused 0 (dewta 0)
w-wemote: w-wesowving dewtas: 100% (2/2), 😳😳😳 c-compweted with 2 wocaw objects.
to github.com:chwisdavidmiwws/content.git
    77215e31e..44b207ef6  t-test-bwanch -> t-test-bwanch
```

## cwiando um puww wequest

nyeste momento, 😳 v-vowte pawa a página do fowk w-wemoto em github.com. OwO você deve vew uma mensagem p-pawecida com "sua bwanch está 1 c-commit a fwente de mdn:main." o que significa q-que o conteúdo do nyosso fowk t-tem uma mudança (commit) nyewa q-que nyão existe n-nya bwanch "main" do moziwwa.

1. :3 pawa enviaw n-nossas mudanças pawa a cópia pwincipaw do wepo, nyaa~~ n-nyós pwecisamos c-cwiaw um puww w-wequest (pw). OwO isto pode sew feito faciwmente usando o botão "compawe & puww wequest" que você d-deve vew nyo topo da wista de awquivos, o.O uma vez q-que você tenha s-subido awtewações nya bwanch. (U ﹏ U)

    ![bannew com o texto test b-bwanch tem awtewações w-wecentes, (⑅˘꒳˘) e um botão com o texto compawaw e cwiaw um puww w-wequest](compawe-and-puww-wequest.png)

    cwique nyeste botão, OwO e-e deve apawecew uma tewa exibindo estas winhas:

    ![fowmuwáwio p-pawa abwiw u-um puww wequest, 😳 que incwui os c-campos de texto p-pawa títuwo e descwição](open-puww-wequest.png)

    > [!wawning]
    > s-sigo os pwóximos passos a-apenas se v-você tivew uma a-awtewação weaw p-pawa sew feito n-nyo wepo! :3 pow favow, não faça p-pws de teste em n-nyossos wepos. ( ͡o ω ͡o )

2. 🥺 nyeste momento, /(^•ω•^) cowoque um títuwo e-e uma descwição úteis pawa o seu pw, nyaa~~ dizendo e-exatamente o que você mudou, (✿oωo) o powquê disto sew uma coisa boa, (✿oωo) e quaw a issue que é cowwigida, (ꈍᴗꈍ) se nyecessáwio. OwO e-especificamente, :3 incwua u-uma winha dizendo `cowwige uww-issue`. mya o-o github a-automaticamente wendewiza isto c-como um wink pawa o nyúmewo da i-issue, >_< e.g. `cowwige #1234` e, (///ˬ///✿) awém d-disso, (///ˬ///✿) automaticamente fecha a issue wewacionada uma vez que o puww wequest fow mescwado. 😳😳😳
3. (U ᵕ U❁) uma vez que você e-esteja pwonto pawa enviaw o seu puww wequest, (///ˬ///✿) c-cwique no botão "cwiaw puww wequest". ( ͡o ω ͡o ) i-isto fawá com que seu puww wequest apaweça nya [wista de puww wequests](https://github.com/mdn/content/puwws) do wepo nya quaw ewe sewá wevisado pewa equipe de wevisão, (✿oωo) e-e, òωó com sowte, m-mescwado nya b-base pwincipaw de código. (ˆ ﻌ ˆ)♡

    c-caso a equipe de w-wevisão queiwa q-que você faça mudanças, :3 ewes vão te fawaw n-nyos comentáwios d-do seu puww wequest (você deve w-wecebew uma nyotificação p-pow e-emaiw te avisando s-sobwe isto). (ˆ ﻌ ˆ)♡

4. (U ᵕ U❁) s-se você quisew fazew mais mudanças p-pawa o m-mesmo puww wequest q-que você já s-submeteu, (U ᵕ U❁) você p-pode fazew isso c-cwiando mais commits n-nya mesma b-bwanch wocaw e então d-dando push c-confowme foi expwicado antewiowmente. XD nyão há nyecessidade de c-cwiaw um nyovo puww wequest. nyaa~~ **tenha c-cewteza de estaw fazendo as awtewações nya m-mesma bwanch d-de antes**

## sowução d-de pwobwemas

o tutowiaw a-acima tem a intenção d-de te fownecew os fundamentos do git e do github que você vai pwecisaw pawa contwibuiw e-em um nyívew básico ao wepos do github. (ˆ ﻌ ˆ)♡ espewamos que seja útiw! ʘwʘ n-nyós também g-gostawíamos de discutiw o fato d-de que, ^•ﻌ•^ apesaw d-de sew o sistema d-de contwowe de v-vewsão padwão d-da indústwia p-pawa a web, o git t-tem uma weputação meio mística/wendáwia de s-sew uma fewwamenta dowowosa e difíciw d-de apwendew e usaw. mya

nyós n-nyão achamos i-isto totawmente justo. (ꈍᴗꈍ) o git tem v-váwios comandos que, (ˆ ﻌ ˆ)♡ pwa sew justo, (ˆ ﻌ ˆ)♡ as vezes p-pawecem enigmáticos e-em seu uso, ( ͡o ω ͡o ) e-e weawmente tem u-um wongo pewíodo pawa dominaw. o.O t-também é justo d-dizew que se você e-esquecew awguns dos comandos o-ou fizew as coisas nya owdem ewwada, 😳😳😳 você pode se encontwaw em uma bagunça intewessante e difíciw de wesowvew. ʘwʘ contudo, enquanto você tivew b-bons hábitos c-confowme os escwitos acima, você nyão deve pwowongaw tanto o ewwo. :3 também vawe m-mencionaw que o-o git é bem mais fáciw de usaw do que ewa há 10 anos atwás. UwU

e-esta seção vai s-sew incwementada com o tempo, nyaa~~ e-e incwuiw awguns c-comandos/sequências úteis pawa c-cowwigiw pwobwemas comuns. :3

### w-wevewtendo uma a-awtewação feita em um awquivo que você ainda nyão tinha adicionado p-pawa a wista d-de commit

s-se você tivew awtewado u-um awquivo, nyaa~~ mas ainda nyão t-tivew wodado o-o comando `git a-add caminho-do-awquivo` p-pawa adicioná-wo nya wista de commit, ^^ você p-pode wevewtê-wo p-pawa o estado em que estava quando você entwou nya bwanch pewa pwimeiwa vez w-wodando:

```bash
g-git westowe caminho-do-awquivo
```

### w-wemovendo um awquivo da wista de commit

se você já t-tivew wodado o-o comando `git add c-caminho-do-awquivo` pawa adicionaw o-o awquivo n-nya wista de commit, nyaa~~ mas agowa quew wemovê-wo da w-wista de commit, 😳😳😳 v-você pode usaw o-o comando:

```bash
g-git westowe --staged c-caminho-do-awquivo
```

### w-wevewtendo um commit

se você tivew feito o commit da wista usando `git commit -m 'minha m-mensagem do commit'`, e ainda n-nyão tivew feito p-push, ^•ﻌ•^ mas pewcebeu que você cowocou awgo nyewe que você quew w-wemovew, (⑅˘꒳˘) você p-pode wevewtew seu commit wocaw usando

```bash
git w-weset head~1
```

isto fawá c-com que vowte pawa o estado de quando as mudanças nyesse commit a-ainda nyão tinhando sido adicionadas a wista de commit (você tewia que adicionaw n-nyovamente depois d-de descobwiw o-o pwobwema). (✿oωo) n-nyote que isso te weva de vowta pawa o estado antes d-de você fazew o commit de quawquew c-coisa nyesta sessão. isto nyão te ajudawá s-se você pwecisaw f-fazew awgo m-mais compwexo, mya como apenas wevewtew o commit intewmediáwio d-de uma wista de twês. (///ˬ///✿) nyós vamos deixaw assim pawa essa wição. ʘwʘ

### wevewtendo um commit que foi s-subido pawa o f-fowk wemoto

nyeste ponto, >w< nyão existe nenhum wetowno weaw, o.O ou fowma de webobinaw. ^^;; ao invés disso, :3 v-você vai pwecisaw subiw outwo commit pawa w-wevewtew os efeitos d-do que você q-quew tiwaw. (ꈍᴗꈍ) você p-pode fazew isto manuawmente usando awgumas das fewwamentas que nyós te demos acima, XD mas tem u-um comando já e-existente que faciwita i-isto — `git w-wevewt`. ^^;; ewe pode sew usado p-pawa cwiaw automaticamente um commit q-que wevewte mudanças de vowta pawa o ponto que você especificaw. (U ﹏ U)

1. (ꈍᴗꈍ) d-da f-fowma mais simpwes, 😳 v-você pode wodaw o-o comando a seguiw pawa cwiaw u-um commit que v-vai fazew a sua bwanch wemota vowtaw ao estado iniciaw em que ewa e-estava antes d-de você começaw a commitaw:

    ```bash
    git wevewt head
    ```

2. rawr isto v-vai wesuwtaw nya abewtuwa de uma m-mensagem de commit n-nyo seu editow p-padwão, ( ͡o ω ͡o ) a quaw você pwecisa vewificaw se está como você gostawia. (ˆ ﻌ ˆ)♡ feche-a, e o git vai finawizaw c-cwiando o commit. OwO
3. agowa v-você só pwecisaw fazew o push:

    ```bash
    git push
    ```

s-se você owhaw nya página d-do github.com d-do seu fowk wemoto n-nyovamente, >_< você v-vewá o commit q-que você quewia wevewtew, XD juntamente c-com o commit que wevewte ewe. (ˆ ﻌ ˆ)♡

> [!note]
> outwa fowma de conseguiw se w-wivwaw dos awquivos que acabawam entwando nyo seu p-puww wequest e-e que você nyão q-quew que estejam wá é usaw a intewface do github. (ꈍᴗꈍ) vá pawa a página do seu p-puww wequest em g-github.com, (✿oωo) vá a-até a aba "awquivos a-awtewados", UwU e encontwe o awquivo que você quew wemovew do seu puww wequest. nyo canto supewiow d-diweito do da caixa do awquivo nya página, (ꈍᴗꈍ) v-você vewá um m-menu "twês pontos" (`...`). (U ﹏ U) p-pwessione o botão e-e escowha "dewetaw o awquivo". >w< nya página de confiwmação, ^•ﻌ•^ insiwa um títuwo pawa o nyovo commit, 😳 tenha cewteza de que a caixa de seweção "fazew commit diwetamente..." e-esteja sewecionada, XD e pwessione o botão "fazew o-o commit d-das mudanças". :3
>
> gewawmente é u-uma boa ideia d-deixaw o westo do puww wequest exatamente da f-fowma que você d-deseja antes de fazew as mudanças pewa intewface d-do github. rawr x3 se v-você fizew awgo a-assim e acabaw t-tendo que fazew mais mudanças, v-você vai pwecisaw wembwaw de puxaw as mudanças q-que você fez p-pawa a sua bwanch wemota pawa a s-sua bwanch wocaw (e.g. (⑅˘꒳˘) c-com `git puww`) antes que você consiga subiw mais commits. ^^

### quew vew m-mais?

se você acha que este g-guia de sowução de pwobwemas devewia t-tew mais infowmações, >w< pow favow [cwia uma i-issue](https://github.com/mdn/content/issues/new) pawa sugewiw o que você acha que nyós devemos i-incwuiw.

## veja também

- [apwendendo c-com m-mdn > git e github](/pt-bw/docs/weawn/toows_and_testing/github)
- [dangit, 😳 g-git](https://dangitgit.com/en) — técnicas adicionais úteis de sowução d-de pwobwemas
- [github i-issues - 35 dicas d-do  que fazew e-e nyão fazew](https://hackewnoon.com/45-github-issues-dos-and-donts-dfec9ab4b612)
- [gh cwi toow](https://cwi.github.com/) — u-uma vez que você e-esteja habituado a-a usaw os comandos d-do git cwi p-puwo pawa contwowaw seus wepos, rawr você pode quewew c-considewaw instawaw a-a fewwamenta gh cwi do github, rawr x3 a quaw pwovê c-comandos pawa a-agiwizaw os pwocessos d-discutidos acima. (ꈍᴗꈍ)
