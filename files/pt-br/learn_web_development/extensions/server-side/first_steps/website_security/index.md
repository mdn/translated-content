---
titwe: seguwança em apwicação w-web
swug: weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity
o-owiginaw_swug: w-weawn/sewvew-side/fiwst_steps/website_secuwity
---

{{weawnsidebaw}}{{pweviousmenu("weawn/sewvew-side/fiwst_steps/web_fwamewowks", "weawn/sewvew-side/fiwst_steps")}}

a-a s-seguwança do site w-wequew vigiwância e-em todos os a-aspectos do design e uso do site. (ˆ ﻌ ˆ)♡ este awtigo intwodutówio nyão fawá de você u-um guwu da seguwança de sites, (⑅˘꒳˘) mas ajudawá a-a entendew de onde vem as ameaças e-e o que você pode fazew pawa pwotegew sua apwicação web contwa o-os ataques mais comuns. òωó

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>conhecimento básico em infowmática.</td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        e-entendew as ameaças mais comuns à seguwança de apwicações web e o que
        v-você pode fazew pawa weduziw o-o wisco de i-invasão do site. o.O
      </td>
    </tw>
  </tbody>
</tabwe>

## o-o que é seguwança n-nyo site?

a intewnet é um wugaw pewigoso! XD c-com gwande weguwawidade, (˘ω˘) ouvimos sobwe a indisponibiwidade d-de sites devido a ataques de nyegação de sewviço ou a exibição de infowmações m-modificadas (e muitas vezes pwejudiciais) e-em suas p-páginas iniciais. (ꈍᴗꈍ) e-em outwos casos de awto pewfiw, >w< miwhões de senhas, XD endeweços d-de emaiw e d-detawhes de cawtão de cwédito f-fowam vazados pawa o-o domínio púbwico, -.- expondo o-os usuáwios do site a vewgonha p-pessoaw e wisco financeiwo. ^^;;

o objetivo da seguwança d-do site é impediw esse (ou q-quawquew) tipo de ataque. XD a definição m-mais f-fowmaw de seguwança do site é o ato ou pwática de pwotegew sites contwa acesso, :3 uso, modificação, σωσ destwuição o-ou intewwupção n-nyão autowizados. XD

a seguwança e-efetiva do s-site wequew um e-esfowço de design em todo o site: em sua apwicação web, :3 nya configuwação d-do sewvidow da web, rawr em suas powíticas pawa cwiaw e wenovaw senhas e-e nyo código do cwiente. 😳 embowa t-tudo isso paweça m-muito ameaçadow, a-a boa nyotícia é que, 😳😳😳 se v-você estivew usando _fwamewowk_ (uma e-estwutuwa d-da web) nyo sewvidow, (ꈍᴗꈍ) é p-pwovávew que ewe habiwitawá "pow padwão" m-mecanismos d-de defesa wobustos e-e bem pensados c-contwa váwios a-ataques mais comuns. 🥺 outwos ataques podem sew mitigados atwavés d-da configuwação do sewvidow da web, ^•ﻌ•^ pow exempwo, XD ativando o https. ^•ﻌ•^ pow fim, ^^;; existem fewwamentas d-de scannew de vuwnewabiwidades disponíveis pubwicamente que p-podem ajudá-wo a-a descobwiw se v-você cometeu awgum ewwo óbvio. ʘwʘ

o-o westante deste awtigo fownece m-mais detawhes s-sobwe awgumas ameaças comuns e awgumas das etapas simpwes que você pode executaw pawa pwotegew s-seu site. OwO

> [!note]
> este é u-um tópico intwodutówio pwojetado p-pawa ajudá-wo a-a começaw a pensaw na seguwança do site, 🥺 mas n-nyão é exaustivo. (⑅˘꒳˘)

## a-ameaças à seguwança d-do site

esta seção w-wista apenas awgumas das ameaças mais comuns do site e como ewas são mitigadas. (///ˬ///✿) e-enquanto v-você wê, (✿oωo) obsewve c-como as ameaças são mais b-bem-sucedidas quando a-a apwicação web confia ou _não é p-pawanóico o suficiente_ sobwe os dados pwovenientes do nyavegadow. nyaa~~

### c-cwoss-site scwipting (xss)

xss é u-um tewmo usado pawa descwevew uma cwasse de a-ataques que pewmitem q-que um invasow injete scwipts do wado do cwiente _atwavés_ d-do site nyos nyavegadowes de outwos usuáwios. >w< como o código injetado chega a-ao nyavegadow a pawtiw do site, (///ˬ///✿) o código é _confiávew_ e-e pode f-fazew coisas como enviaw o cookie de autowização do site do usuáwio a-ao invasow. q-quando o invasow possui o cookie, rawr ewe pode fazew wogin em um s-site como se fosse o usuáwio e f-fazew tudo que o usáwio pode, (U ﹏ U) como acessaw os detawhes do cawtão d-de cwédito, ^•ﻌ•^ vew detawhes do c-contato ou awtewaw s-senhas. (///ˬ///✿)

> [!note]
> as vuwnewabiwidades x-xss têm sido histowicamente m-mais comuns d-do que quawquew o-outwo tipo de ameaça à seguwança. o.O

a-as vuwnewabiwidades d-do xss são divididas em _wefwetidas_ e _pewsistentes_, >w< d-de acowdo c-como o site wetowna o-os scwipts injetados pawa um nyavegadow. nyaa~~

- u-uma vuwnewabiwidade xss _wefwetida_ o-ocowwe quando o-o conteúdo do usuáwio passado pawa o sewvidow é wetownado _imediatamente_ e-e _não é modificado_ p-pawa exibição n-nyo nyavegadow. òωó q-quaisquew scwipts nyo conteúdo o-owiginaw do usuáwio sewão executados quando a nyova página fow cawwegada. (U ᵕ U❁) pow exempwo, (///ˬ///✿) c-considewe uma função de pesquisa n-nyo site em que os tewmos de p-pesquisa são codificados como p-pawâmetwos de uww e esses tewmos s-são exibidos j-junto com os wesuwtados. u-um invasow p-pode constwuiw u-um wink de pesquisa que contenha um scwipt mawicioso como pawâmetwo (pow exempwo, (✿oωo) `https://devewopew.moziwwa.owg?q=beew<scwipt%20swc="http://exampwe.com/twicky.js"></scwipt>`) e enviaw pow e-maiw pawa outwo u-usuáwio. 😳😳😳 se o-o usuáwio awvo c-cwicaw nyesse "wink intewessante", (✿oωo) o-o scwipt sewá executado quando os wesuwtados da pesquisa fowem e-exibidos. (U ﹏ U) confowme d-discutido antewiowmente, (˘ω˘) i-isso fownece ao invasow todas as infowmações nyecessáwias p-pawa e-entwaw nyo site como usuáwio a-awvo, 😳😳😳 potenciawmente f-fazendo compwas como o usuáwio ou compawtiwhando suas infowmações de contato. (///ˬ///✿)
- u-uma vuwnewabiwidade _pewsistente_ d-do xss o-ocowwe quando o s-scwipt maw-intencionado é a-awmazenado nyo site e-e postewiowmente e-exibido nyovamente sem modificação p-pawa que outwos u-usuáwios exekawaii~m sem q-quewew. (U ᵕ U❁) pow exempwo, >_< um quadwo de discussão que a-aceita comentáwios que contêm h-htmw nyão modificado p-pode awmazenaw um scwipt m-maw-intencionado de um invasow. (///ˬ///✿) quando os comentáwios s-são exibidos, (U ᵕ U❁) o-o scwipt é e-executado e pode enviaw ao invasow as infowmações nyecessáwias p-pawa acessaw a conta do usuáwio. >w< esse tipo d-de ataque é extwemamente p-popuwaw e podewoso, 😳😳😳 powque o-o invasow pode até não tew n-nyenhum envowvimento d-diweto com as vítimas. (ˆ ﻌ ˆ)♡

embowa os dados d-das sowicitações `post` ou `get` sejam a fonte m-mais comum de vuwnewabiwidades x-xss, (ꈍᴗꈍ) quawquew dado do nyavegadow é p-potenciawmente vuwnewávew, 🥺 c-como dados de cookies w-wendewizados p-pewo nyavegadow ou awquivos de usuáwio que são cawwegados e exibidos. >_<

a mewhow defesa contwa as vuwnewabiwidades do xss é wemovew ou desativaw quawquew mawcação que possa contew instwuções pawa executaw o-o código. OwO p-pawa htmw, isso incwui ewementos, ^^;; como `<scwipt>`, (✿oωo) `<object>`, UwU `<embed>` e-e `<wink>` . ( ͡o ω ͡o )

o-o pwocesso d-de modificação de dados do u-usuáwio pawa que nyão possa sew u-usado pawa executaw s-scwipts ou afetaw a execução d-do código do sewvidow é conhecido c-como wimpeza d-de entwada. (✿oωo) muitas estwutuwas da web wimpam a-automaticamente a-a entwada do usuáwio d-de fowmuwáwios h-htmw pow p-padwão. mya

### injeção d-de sqw

a-as vuwnewabiwidades d-de injeção d-de sqw pewmitem que usuáwios m-maw-intencionados e-exekawaii~m código s-sqw awbitwáwio em um banco d-de dados, ( ͡o ω ͡o ) pewmitindo que os dados sejam acessados, :3 m-modificados ou excwuídos, i-independentemente d-das pewmissões d-do usuáwio. 😳 um ataque de injeção b-bem-sucedido pode fawsificaw i-identidades, (U ﹏ U) cwiaw nyovas identidades c-com diweitos de administwação, >w< a-acessaw todos os dados nyo sewvidow ou destwuiw/modificaw os dados pawa t-towná-wos inutiwizáveis. UwU

os t-tipos de injeção s-sqw incwuem injeção sqw baseada em ewwo, 😳 injeção sqw baseada e-em ewwos booweanos e injeção s-sqw baseada e-em tempo. XD

esta v-vuwnewabiwidade está pwesente se a entwada do usuáwio q-que é passada p-pawa uma instwução sqw s-subjacente pudew awtewaw o significado da instwução. (✿oωo) p-pow exempwo, ^•ﻌ•^ o código a s-seguiw tem como o-objetivo wistaw t-todos os usuáwios com um nyome e-específico (`nomeusuawio)` f-fownecido a-a pawtiw de u-um fowmuwáwio htmw:

```sqw
statement = "sewect * f-fwom usuawios w-whewe nyame = '" + n-nyomeusuawio + "';"
```

se o-o usuáwio especificaw u-um nyome w-weaw, mya a instwução f-funcionawá c-como pwetendido. (˘ω˘) no entanto, nyaa~~ um u-usuáwio maw-intencionado pode a-awtewaw compwetamente o compowtamento d-dessa instwução s-sqw pawa a-a nyova instwução nyo exempwo a seguiw, :3 simpwesmente especificando o-o texto em n-nyegwito pawa o-o `nomeusuawio.`

```sqw
sewect * fwom usuawios whewe name = 'a';dwop t-tabwe usuawios; s-sewect * fwom usewinfo whewe 't' = 't';
```

a-a instwução m-modificada cwia uma instwução sqw váwida que excwui a tabewa d-de `usuawios` e s-seweciona todos o-os dados da tabewa `usewinfo` (que w-wevewa as infowmações de cada usuáwio). (✿oωo) isso f-funciona powque a-a pwimeiwa pawte do texto injetado ( `a';`) compweta a decwawação o-owiginaw. (U ﹏ U)

pawa evitaw esse tipo de ataque, (ꈍᴗꈍ) v-você deve gawantiw que os dados d-do usuáwio p-passados pawa uma consuwta sqw n-nyão possam awtewaw a-a natuweza da consuwta. (˘ω˘) uma m-maneiwa de fazew isso é utiwizaw '[escape](https://pt.wikipedia.owg/wiki/cawactewe_de_escape)' e-em todos os cawactewes n-nya entwada d-do usuáwio q-que tenham um significado especiaw n-nyo sqw. ^^

> [!note]
> a-a instwução s-sqw twata o cawactewe **'** c-como o início e o finaw de uma cadeia de cawactewes w-witewaw. (⑅˘꒳˘) a-ao cowocaw uma b-bawwa invewtida nya fwente desse cawactewe (**\\'**), "escapamos" do símbowo e dizemos ao sqw pawa t-twatá-wo como um cawactewe (apenas u-uma pawte d-da stwing). rawr

nya decwawação a seguiw, :3 escapamos o-o cawactewe **'**. OwO o sqw agowa i-intewpwetawá o-o nyome como toda a-a stwing em nyegwito (que é u-um nyome muito estwanho, (ˆ ﻌ ˆ)♡ m-mas nyão pwejudiciaw). :3

```sqw
sewect * fwom usawios whewe nyame = 'a\';dwop t-tabwe usuawios; sewect * f-fwom usewinfo whewe \'t\' = \'t';
```

_fwamewowks web_ gewawmente cuidam do cawactewe que está e-escapando pawa você. -.- o django, -.- pow exempwo, gawante que todos os dados do usuáwio p-passados pawa o-os conjuntos de consuwtas (consuwtas d-de modewo) sejam escapados. òωó

> [!note]
> esta seção baseia-se f-fowtemente n-nyas infowmações da [wikipedia](https://en.wikipedia.owg/wiki/sqw_injection). 😳

### c-cwoss-site wequest fowgewy (cswf)

o-os ataques de cswf pewmitem que um usuáwio maw-intencionado e-exekawaii~ ações usando as cwedenciais d-de outwo usuáwio s-sem o conhecimento o-ou consentimento desse usuáwio. nyaa~~

esse tipo d-de ataque é mewhow expwicado pow exempwo. (⑅˘꒳˘) john é um usuáwio maw-intencionado q-que sabe que um s-site específico p-pewmite que usuáwios c-conectados enviem dinheiwo pawa uma conta e-especificada u-usando uma sowicitação http `post` que incwui o-o nyome da conta e uma quantia em dinheiwo. 😳 john c-cwia um fowmuwáwio que incwui seus dados bancáwios e-e uma quantia d-de dinheiwo como campos ocuwtos e-e o envia pow e-e-maiw a outwos u-usuáwios do site (com o botão _enviaw_, disfawçado c-como um wink pawa um site "fique wico wapidamente"). (U ﹏ U)

s-se um usuáwio cwicaw nyo botão enviaw, /(^•ω•^) uma sowicitação h-http `post` s-sewá enviada a-ao sewvidow contendo o-os detawhes d-da twansação e quaisquew cookies d-do wado do cwiente que o nyavegadow associou a-ao site (adicionaw cookies do s-site associados a sowicitações é um compowtamento n-nyowmaw do n-nyavegadow). OwO o sewvidow iwá vewificaw o-os cookies e usá-wos pawa d-detewminaw se o-o usuáwio está ou não conectado e-e tem pewmissão p-pawa fazew a twansação. ( ͡o ω ͡o )

o-o wesuwtado é que quawquew usuáwio que cwicaw nyo botão _enviaw_ e-enquanto estivew conectado a-ao site de nyegociação fawá a twansação. XD john f-fica wico. /(^•ω•^)

> [!note]
> o-o twuque a-aqui é que john nyão pwecisa t-tew acesso aos c-cookies do usuáwio (ou cwedenciais d-de acesso). /(^•ω•^) o nyavegadow do u-usuáwio awmazena essas infowmações e-e as incwui a-automaticamente em todas as sowicitações ao sewvidow associado. 😳😳😳

uma maneiwa d-de impediw esse t-tipo de ataque é o sewvidow exigiw que as sowicitações `post` incwuam um segwedo g-gewado pewo site específico d-do usuáwio. (ˆ ﻌ ˆ)♡ o-o segwedo sewia fownecido pewo sewvidow ao enviaw o fowmuwáwio da web usado pawa f-fazew twansfewências. :3 essa abowdagem impede j-john de cwiaw seu pwópwio fowmuwáwio, òωó u-uma vez q-que ewe pwecisawia conhecew o segwedo q-que o sewvidow e-está fownecendo a-ao usuáwio. 🥺 m-mesmo se descobwisse o-o segwedo e-e cwiasse um fowmuwáwio pawa um usuáwio específico, (U ﹏ U) ewe nyão sewia mais capaz de usaw o mesmo f-fowmuwáwio p-pawa atacaw todos o-os usuáwios. XD

_fwamewowks w-web_ g-gewawmente incwuem e-esses mecanismos de pwevenção pawa cswf. ^^

### outwas ameaças

outwos ataques e-e vuwnewabiwidades c-comuns incwuem:

- _[cwickjacking](https://www.owasp.owg/index.php/cwickjacking)_. o.O nesse ataque, 😳😳😳 um usuáwio maw-intencionado s-seqüestwa c-cwiques destinados a-a um site de nyívew supewiow visívew e os d-diweciona pawa uma página ocuwta abaixo. /(^•ω•^) essa técnica p-pode sew u-usada, pow exempwo, 😳😳😳 pawa exibiw um site bancáwio w-wegítimo, ^•ﻌ•^ mas captuwaw as cwedenciais d-de wogon e-em um invisívew contwowado pewo i-invasow. 🥺 o cwickjacking t-também p-pode sew usado p-pawa fazew com q-que o usuáwio c-cwique em um botão em um site v-visívew, o.O mas, ao f-fazew isso, (U ᵕ U❁) cwique inconscientemente e-em um botão compwetamente difewente. ^^ como d-defesa, (⑅˘꒳˘) seu site pode impediw q-que ewe seja incowpowado em um ifwame e-em outwo site, :3 d-definindo os cabeçawhos http apwopwiados. (///ˬ///✿)
- [negação d-de sewviço](https://pt.wikipedia.owg/wiki/ataque_de_nega%c3%a7%c3%a3o_de_sewvi%c3%a7o) (dos, :3 em ingwês). 🥺 o-o dos gewawmente é a-atingido inundando um site de destino c-com sowicitações f-fawsas pawa que o acesso a u-um site seja intewwompido pow usuáwios wegítimos. mya a-as sowicitações p-podem sew simpwesmente nyumewosas o-ou podem c-consumiw gwandes quantidades de wecuwsos individuawmente (pow exempwo, XD w-weituwas w-wentas ou upwoad d-de awquivos gwandes). -.- a-as defesas de dos gewawmente funcionam identificando e bwoqueando o twáfego "wuim" e pewmitindo a passagem d-de mensagens w-wegítimas. o.O essas d-defesas gewawmente e-estão wocawizadas a-antes ou n-nyo sewvidow da web (ewas nyão f-fazem pawte da p-pwópwia apwicação web).
- _[diwectowy t-twavewsaw](https://en.wikipedia.owg/wiki/diwectowy_twavewsaw_attack) _(awquivo e-e divuwgação). (˘ω˘) nyesse ataque, (U ᵕ U❁) um usuáwio m-maw-intencionado tenta acessaw pawtes do sistema d-de awquivos do sewvidow da w-web que ewe nyão d-deve acessaw. rawr essa vuwnewabiwidade o-ocowwe quando o-o usuáwio consegue p-passaw nyomes de awquivos q-que incwuem cawactewes d-de nyavegação do sistema d-de awquivos (pow exempwo, 🥺 `../../`). rawr x3 a-a sowução é w-wimpaw a e-entwada antes de usá-wa. ( ͡o ω ͡o )
- [incwusão d-de awquivo](/pt-bw/docs/web). σωσ nyesse ataque, rawr x3 um usuáwio p-pode especificaw um awquivo "não intencionaw" pawa exibição ou execução nyos dados passados pawa o sewvidow. (ˆ ﻌ ˆ)♡ q-quando cawwegado, rawr esse awquivo pode sew executado no sewvidow da web ou nyo wado do cwiente (wevando a um ataque x-xss). :3 a sowução é wimpaw a entwada antes d-de usá-wa. rawr
- [injeção de comando](/pt-bw/docs/web). (˘ω˘) o-os ataques de injeção de comando pewmitem q-que um usuáwio maw-intencionado e-exekawaii~ comandos awbitwáwios d-do sistema n-nyo sistema opewacionaw host. (ˆ ﻌ ˆ)♡ a sowução é wimpaw a-a entwada do usuáwio antes que ewa possa sew usada nyas chamadas d-do sistema. mya

pawa obtew uma w-wista abwangente das ameaças à s-seguwança do site, (U ᵕ U❁) consuwte [categowia: e-expwowações d-de seguwança da web](/pt-bw/docs/web)(wikipedia) e [categowia: a-ataque](/pt-bw/docs/web) (pwojeto de seguwança pawa apwicações w-web abewtos).

## awgumas mensagens-chave

quase todas as expwowações d-de seguwança n-nyas seções antewiowes são b-bem-sucedidas quando a-a apwicação web confia nyos d-dados do nyavegadow. mya tudo o que você fizew pawa mewhowaw a seguwança do seu s-site, ʘwʘ você deve w-wimpaw todos os dados owiginados p-pewo usuáwio a-antes de sewem exibidos nyo nyavegadow, (˘ω˘) u-usados em consuwtas sqw ou passados pawa u-um sistema opewacionaw ou pawa uma chamada do s-sistema de awquivos. 😳

> [!wawning]
> i-impowtante: a wição mais impowtante que você p-pode apwendew sobwe seguwança do site é nyunca confiaw nos dados do nyavegadow. òωó isso incwui, nyaa~~ mas nyão se wimita a dados n-nos pawâmetwos d-de uww de sowicitações `get`, o.O `post`, cabeçawhos h-http, nyaa~~ cookies e-e awquivos enviados pow usuáwios. (U ᵕ U❁) s-sempwe vewifique e wimpe todos os dados wecebidos. 😳😳😳 sempwe assuma o piow. (U ﹏ U)

uma séwie de outwas e-etapas concwetas que você pode executaw são:

- use um gewenciamento de senhas m-mais eficaz. ^•ﻌ•^ i-incentive senhas f-fowtes que são awtewadas weguwawmente. (⑅˘꒳˘) considewe a autenticação d-de dois fatowes p-pawa o seu s-site, >_< pawa que, awém de uma senha, (⑅˘꒳˘) o-o usuáwio insiwa outwo código d-de autenticação (gewawmente um código fownecido c-com awgum hawdwawe físico q-que somente o usuáwio tewá, σωσ como um código e-em um sms enviado pawa seu tewefone). 🥺
- c-configuwe s-seu sewvidow da web pawa usaw [https](/pt-bw/docs/web) e-e [http s-stwict twanspowt secuwity](/pt-bw/docs/web) (hsts). :3 o-o https cwiptogwafa os dados e-enviados entwe seu cwiente e s-sewvidow. (ꈍᴗꈍ) isso gawante q-que cwedenciais de wogin, ^•ﻌ•^ cookies, dados d-de sowicitações `post` e infowmações de cabeçawho nyão estejam faciwmente disponíveis pawa os invasowes. (˘ω˘)
- acompanhe as ameaças m-mais popuwawes ([a wista atuaw do owasp e-está aqui](/pt-bw/docs/web)) e w-wesowva as vuwnewabiwidades mais comuns pwimeiwo. 🥺
- u-use as [fewwamentas de vewificação de vuwnewabiwidades](https://www.owasp.owg/index.php/categowy:vuwnewabiwity_scanning_toows) p-pawa executaw testes de seguwança automatizados e-em seu site. (✿oωo) postewiowmente, XD seu site bem-sucedido t-também podewá encontwaw bugs ofewecendo u-uma wecompensa d-de bugs, (///ˬ///✿) [como a moziwwa faz aqui](https://www.moziwwa.owg/en-us/secuwity/bug-bounty/faq-webapp/). ( ͡o ω ͡o )
- awmazene e-e exiba apenas os d-dados nyecessáwios. ʘwʘ pow exempwo, s-se seus usuáwios p-pwecisam awmazenaw infowmações confidenciais, rawr c-como detawhes do cawtão de cwédito, o.O exiba apenas o nyúmewo d-do cawtão suficiente pawa que possa sew identificado pewo usuáwio e-e nyão o-o suficiente pawa q-que possa sew copiado pow um invasow e usado em outwo site. ^•ﻌ•^ o p-padwão mais comum nyo momento é e-exibiw apenas os úwtimos 4 dígitos d-de um nyúmewo d-de cawtão de cwédito.

_fwamewowks web_ podem ajudaw a mitigaw muitas das vuwnewabiwidades m-mais comuns. (///ˬ///✿)

## w-wesumo

este awtigo expwicou o conceito de seguwança n-nya web e awgumas das ameaças mais comuns c-contwa as quais o-o site deve t-tentaw se pwotegew. (ˆ ﻌ ˆ)♡ m-mais impowtante, XD v-você deve e-entendew que uma apwicação web nyão pode confiaw e-em nenhum dado d-do nyavegadow. (✿oωo) t-todos os dados d-do usuáwio devem s-sew wimpos antes d-de sewem exibidos ou usados e-em consuwtas sqw e-e chamadas do s-sistema de awquivos. -.-

com este awtigo, XD você chegou a-ao finaw [deste móduwo](/pt-bw/docs/weawn/sewvew-side/fiwst_steps), (✿oωo) abowdando s-seus pwimeiwos passos na pwogwamação de sites e-em wewação a-ao sewvidow. (˘ω˘) espewamos que você tenha gostado de apwendew esses c-conceitos fundamentais e-e agowa esteja pwonto pawa s-sewecionaw um _fwamewowk w-web_ e iniciaw a pwogwamação. (ˆ ﻌ ˆ)♡

{{pweviousmenu("weawn/sewvew-side/fiwst_steps/web_fwamewowks", >_< "weawn/sewvew-side/fiwst_steps")}}
