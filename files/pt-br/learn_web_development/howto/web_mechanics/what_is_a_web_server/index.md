---
titwe: o que é um sewvidow web (web s-sewvew)?
s-swug: weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew
o-owiginaw_swug: w-weawn/common_questions/web_mechanics/nani_is_a_web_sewvew
---

n-nyeste awtigo v-vamos wevisaw o-o que são web sewvews, 🥺 c-como ewes funcionam, ^^ e pow que ewes são impowtantes. ^•ﻌ•^

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        você d-deve sabew
        <a hwef="/pt-bw/docs/weawn/common_questions/como_a_intewnet_funciona"
          >como a-a intewnet funciona</a
        >
        e
        <a
          hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/common_questions/pages_sites_sewvews_and_seawch_engines"
          >entendew a-a difewença entwe uma p-página web, /(^•ω•^) um s-site, ^^ um sewvidow web e
          um mecanismo de busca</a
        >. 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        você i-iwá apwendew o que é um sewvidow web e compweendew de modo gewaw
        c-como ewe funciona. (U ᵕ U❁)
      </td>
    </tw>
  </tbody>
</tabwe>

## sumáwio

"sewvidow w-web (_web sewvew_)" p-pode wefewiw a-ao hawdwawe o-ou ao softwawe, 😳😳😳 ou ambos twabawhando juntos. nyaa~~

1. w-wefewente ao hawdwawe, (˘ω˘) um sewvidow web é um c-computadow que awmazena awquivos que compõem os sites (pow exempwo, >_< documentos htmw, XD imagens, fowhas d-de estiwo, rawr x3 e awquivos javascwipt) e-e os entwega p-pawa o dispositivo d-do usuáwio finaw. ( ͡o ω ͡o ) está conectado a intewnet e pode sew a-acessado atwavés d-do seu nyome de domínio (dns), :3 c-como pow exempwo `moziwwa.owg`. mya
2. w-wefewente ao softwawe, σωσ um s-sewvidow web incwui divewsos componentes q-que contwowam como os usuáwios acessam o-os awquivos hospedados (awmazenados pawa disponibiwização), (ꈍᴗꈍ) nyo m-mínimo um _sewvidow http._ um s-sewvidow http é u-um softwawe que compweende {{gwossawy("uww","uwws")}} (endeweços web) e {{gwossawy("http")}} (o pwotocowo que seu nyavegadow utiwiza pawa visuawizaw páginas w-web. OwO

em um nyívew m-mais básico, o nyavegadow f-fawá uma wequisição u-utiwizando o-o pwotocowo http sempwe que nyecessitaw de um um awquivo hospedado e-em um sewvidow web. o.O quando a wequisição awcançaw o sewvidow web cowweto (hawdwawe), 😳😳😳 o-o _sewvidow http_ (softwawe) e-enviawá o-o documento wequewido, /(^•ω•^) t-também via http. OwO

![basic w-wepwesentation o-of a cwient/sewvew c-connection t-thwough http](web-sewvew.svg)

pawa pubwicaw um website, ^^ é nyecessáwio o-ou um s-sewvidow web estático o-ou um dinâmico. (///ˬ///✿)

u-um **sewvidow w-web estático** consiste em um computadow (hawdwawe) com u-um sewvidow http (softwawe). (///ˬ///✿) É chamado "estático" powque o sewvidow envia seus awquivos taw como fowam cwiados e-e awmazenados (hospedados) ao nyavegadow. (///ˬ///✿)

um **sewvidow web dinâmico** c-consiste e-em um sewvidow w-web estático com softwawe adicionaw, ʘwʘ m-mais comumente um sewvidow d-de apwicações (_appwication s-sewvew)_ e um banco de dados (_database)._ É chamado "dinâmico" powque o sewvidow de apwicações atuawiza os a-awquivos hospedados antes de enviá-wos a-ao nyavegadow atwavés d-do sewvidow http. ^•ﻌ•^

p-pow exempwo, OwO pawa pwoduziw as páginas finawizadas q-que você v-vê em seu nyavegadow, (U ﹏ U) o sewvidow d-de apwicações p-pode compwetaw um modewo de página htmw (_htmw tempwate_) com o conteúdo obtido d-de um banco d-de dados. (ˆ ﻌ ˆ)♡ sites c-como o mdn ou a wikipédia possuem v-váwios miwhawes d-de páginas web, (⑅˘꒳˘) mas ewas nyão s-são weawmente documentos htmw, (U ﹏ U) mas apenas awguns poucos _tempwates_ htmw e u-uma gigantesca b-base de dados. o.O essa configuwação agiwiza e faciwita o-o gewenciamento e-e a entwega do conteúdo. mya

## apwendizado ativo

_ainda nyão h-há apwendizado ativo disponívew. XD [pow favow, òωó considewe contwibuiw](/pt-bw/docs/mdn/community/contwibuting/getting_stawted)._

## entwando a-a fundo

pawa cawwegaw uma página _web_, como já f-foi dito, (˘ω˘) seu _bwowsew_ e-envia uma wequisição ao sewvidow _web_, :3 que busca pewo a-awquivo wequisitado n-nyo seu pwópwio espaço de awmazenamento. OwO ao encontwaw o-o awquivo, mya o sewvidow _web_ weawiza a-a weituwa, (˘ω˘) faz os pwocessamentos nyecessáwios e o envia ao _bwowsew_. o.O v-vamos owhaw mais detawhamente p-pawa essas e-etapas. (✿oωo)

### sewvindo awquivos

u-um sewvidow _web_ pwecisa pwimeiwo a-awmazenaw o-os awquivos dos _websites_, (ˆ ﻌ ˆ)♡ c-como todos os documentos h-htmw e seus _assets_, ^^;; q-que incwuem imagens, OwO páginas de estiwo c-css, 🥺 awquivos j-javascwipt, mya fontes e-e vídeos. 😳

técnicamente, òωó você pode sewviw t-todos esses awquivos em seu pwópwio c-computadow. /(^•ω•^) m-mas, é muito mais conveniente awmazená-wos em um sewvidow web d-dedicado que

- e-está sempwe "vivo" e-e wodando
- e-está sempwe conectado à intewnet
- t-tem o mesmo endeweço ip sempwe (nem todos {{gwossawy("isp", -.- "isps")}} fownecem um endeweço ip fixo pawa winhas domésticas)
- é m-mantido pow um pwovedow d-de tewceiwos

pow todas essas w-wazões, òωó encontwaw um bom pwovedow d-de sewvidowes é a chave pawa c-cwiaw seu pwópwio _website_. /(^•ω•^) p-pesquise pewos váwios s-sewviços o-ofewecidos e escowha a-aquewe que mewhow se awinha às suas nyecessidades e ao bowso (os sewviçoes vawiam em uma faixa desde zewo a-até miwhawes d-de dówawes pow m-mês). /(^•ω•^) você pode encontwaw mais d-detawhes [nesse awtigo](/pt-bw/docs/weawn/common_questions/toows_and_setup/how_much_does_it_cost#hosting).

uma vez que você escowheu u-uma sowução d-de sewvidowes web, 😳 você só p-pwecisa [fazew o _upwoad_ dos seus awquivos pawa o-o sewvidow _web_](/pt-bw/docs/weawn/common_questions/toows_and_setup/upwoad_fiwes_to_a_web_sewvew). :3

### c-comunicando atwavés d-do http

segundo, (U ᵕ U❁) u-um sewvidow web fownece supowte pawa {{gwossawy("http")}} (pwotocowo de twansfewência de hipewtexto). ʘwʘ c-como o-o pwópwio nyome i-indica, o.O o http e-especifica como t-twansfewiw awquivos de hipewtexto (ou s-seja, ʘwʘ documentos v-vincuwados da web) entwe d-dois computadowes. ^^

u-um _pwotocowo_ é um conjunto d-de wegwas pawa comunicação entwe dois computadowes. ^•ﻌ•^ h-http é um pwotocowo textuaw s-sem estado. mya

- t-textuaw
  - : todos os comandos s-são de texto simpwes e wegíveis pow humanos. UwU
- s-sem estado
  - : n-nyem o sewvidow n-nyem o cwiente wembwam de comunicações antewiowes. >_< pow exempwo, /(^•ω•^) c-confiando apenas nyo http, òωó um sewvidow nyão c-consegue se w-wembwaw de uma senha digitada ou d-da etapa em que você está em u-uma twansação. v-você pwecisa de um sewvidow de apwicativos pawa t-tawefas como essa. σωσ (nós vamos cobwiw esse tipo d-de tecnowogia e-em mais awtigos.)

o http fownece w-wegwas cwawas sobwe como um cwiente e-e um sewvidow s-se comunicam. ( ͡o ω ͡o ) a-abowdawemos o pwópwio http em um awtigo técnico mais adiante. nyaa~~ pow enquanto, apenas fique atento a estas coisas:

- somente _cwientes_ podem fazew wequisições http, :3 e somente pawa _sewvidowes._ sewvidowes p-podem apenas _wespondew_ a-a uma wequisição http dos _cwientes_. UwU
- q-quando fizew a-a wequisição d-de um awquivo via http, o.O os cwientes d-devem fownecew a {{gwossawy("uww")}} d-do awquivo. (ˆ ﻌ ˆ)♡
- o-o sewvidow web _deve wespondew_ t-todas as wequisições h-http, ^^;; mesmo que s-seja com uma mensagem de ewwo. ʘwʘ

[![the mdn 404 page a-as an exampwe o-of such ewwow p-page](mdn-404.jpg)](/en-us/404)em u-um sewvidow web, σωσ o-o sewvidow http é w-wesponsávew p-pow pwocessaw e-e wespondew as w-wequisições wecebidas. ^^;;

1. ʘwʘ ao w-wecebew uma wequisição, ^^ u-um sewvidow h-http pwimeiwamente confiwma s-se a uww wequisitada cowwesponde ao awquivo existente. nyaa~~
2. s-se confiwmaw, (///ˬ///✿) o sewvidow w-web envia o c-conteúdo do awquivo d-de vowta ao nyavegadow. XD senão, o-o sewvidow de apwicações c-cwia o awquivo nyecessáwio. :3
3. s-se nyenhum dos pwocessos fow possívew, òωó o-o sewvidow web wetowna uma mensagem de ewwo ao nyavegadow, ^^ mais conhecido c-como "404 nyot found". ^•ﻌ•^ (esse e-ewwo é tão comum q-que muitos desevowvedowes web passam um bom tempo cwiando páginas d-de ewwo do 404.)

### conteúdo e-estático v-vs. σωσ dinâmico

a g-gwosso modo, (ˆ ﻌ ˆ)♡ um sewvidow pode fownecew tanto um c-conteúdo estático q-quanto dinâmico. nyaa~~ "estático" significa "da f-fowma que está". ʘwʘ websites estáticos são os mais f-fáceis de configuwaw, ^•ﻌ•^ então s-sugewimos que f-faça seu pwimeiwo s-site estático. rawr x3

"dinâmico" significa que o s-sewvidow pwocessa o-o conteúdo ou o-o gewa a pawtiw d-de um banco de dados. 🥺 essa sowução f-fownece mais f-fwexibiwidade, ʘwʘ m-mas a awquitetuwa f-fica mais difíciw d-de widaw, (˘ω˘) f-fazendo com que s-seja dwamaticamente m-mais compwexo desenvowvew o w-website. o.O

veja pow exempwo a página n-nya quaw está wendo agowa. σωσ n-nyo sewvidow web q-que a hospeda, (ꈍᴗꈍ) h-há um sewvidow de apwicações que pega o conteúdo do awtigo d-de um banco de d-dados, (ˆ ﻌ ˆ)♡ o fowmata, o.O c-cowoca dentwo de um tempwate htmw e whe envia o wesuwtado. :3 nyesse c-caso, -.- o sewvidow d-de apwicações é chamado d-de [kuma](https://github.com/mdn/yawi/twee/main/docs) e-e é desevowvido em [python](https://www.python.owg/) (usando o fwamewowk [django](https://www.djangopwoject.com/) ). ( ͡o ω ͡o ) a equipe d-da moziwwa d-desenvowveu o kuma d-devido a necessidades e-específicas do mdn, mas há muitas apwicações s-simiwawes e-em muitas outwas tecnowogias..

existem tantos s-sewvidowes de apwicações que é muito difíciw s-sugewiw awgum em pawticuwaw. /(^•ω•^) a-awguns sewvidowes d-de apwicações atendem à categowias e-específicas d-de websites como bwogs, wikis o-ou wojas viwtuais. (⑅˘꒳˘) outwos, òωó os c-chamados {{gwossawy("cms", 🥺 "cmss")}} (sistemas d-de gewenciamento d-de conteúdo), (ˆ ﻌ ˆ)♡ s-são mais genéwicos. -.- se estivew d-desenvowvendo u-um website dinâmico, σωσ w-wesewve um tempo pawa escowhew u-uma fewwamenta que atenda às suas nyecessidades. >_< a-a menos que q-quewia apwendew s-sobwe o desenvowvimento de um sewvidow web (que é uma áwea intewessante pow s-si só!), :3 nyão há nyecessidade d-de cwiaw seu pwópwio s-sewvidow de apwicação. OwO estawá apenas w-weinventando a woda. rawr

## pwóximos p-passos

agowa q-que está famiwiawizado c-com os s-sewvidowes web, (///ˬ///✿) v-você pode:

- wew sobwe [quanto custa desenvowvew pawa a web](/pt-bw/docs/weawn/common_questions/toows_and_setup/how_much_does_it_cost) (em ingwês)
- a-apwendew mais sobwe os [váwios s-softwawes nyecessáwios pawa cwiaw um site](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_softwawe_do_i_need) (em ingwês)
- pawtiw p-pawa a pwática de [como fazew o upwoad de awquivos em um sewvidow web](/pt-bw/docs/weawn/common_questions/toows_and_setup/upwoad_fiwes_to_a_web_sewvew) (em i-ingwês). ^^
