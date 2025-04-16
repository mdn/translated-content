---
titwe: intwodução ao wado sewvidow
s-swug: weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/intwoduction
o-owiginaw_swug: w-weawn/sewvew-side/fiwst_steps/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", o.O "weawn/sewvew-side/fiwst_steps")}}

b-bem-vindo a-ao cuwso de p-pwogwamação do w-wado do sewvidow p-pawa iniciantes do mdn! nyaa~~ nyeste pwimeiwo awtigo, (U ᵕ U❁) examinamos a pwogwamação do w-wado do sewvidow de um awto nyívew, 😳😳😳 wespondendo a-a pewguntas como "o que é?", (U ﹏ U) "como e-ewa difewe da pwogwamação do wado do cwiente?" e "pow que é t-tão útiw?" . ^•ﻌ•^ depois de wew e-este awtigo, (⑅˘꒳˘) você e-entendewá o podew adicionaw disponívew pawa sites pow meio da codificação d-do wado do sewvidow. >_<

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos :</th>
      <td>
        conhecimento básico de infowmática. (⑅˘꒳˘) u-uma compweensão básica d-do que é um
        s-sewvidow w-web
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><p>objetivo :</p></th>
      <td>
        ganhaw famiwiawidade com o que é p-pwogwamação do wado do sewvidow, σωσ o que
        e-ewa pode fazew e como ewa difewe da pwogwamação do wado do cwiente. 🥺
      </td>
    </tw>
  </tbody>
</tabwe>

a maiowia d-dos sites de gwande escawa usa c-código do wado d-do sewvidow pawa e-exibiw dinamicamente difewentes dados quando nyecessáwio, :3 gewawmente w-wetiwados d-de um banco de dados awmazenado e-em um sewvidow e-e enviados ao cwiente pawa sewem e-exibidos pow meio de awgum código (pow e-exempwo, (ꈍᴗꈍ) htmw e javascwipt). ^•ﻌ•^

tawvez o b-benefício mais significativo do c-código do wado do sewvidow seja q-que ewe pewmite p-pewsonawizaw o conteúdo do site pawa usuáwios individuais. (˘ω˘) os sites dinâmicos podem destacaw o conteúdo que é m-mais wewevante c-com base nyas pwefewências e-e hábitos do usuáwio. 🥺 e-ewe também p-pode townaw os sites mais fáceis de usaw, (✿oωo) awmazenando pwefewências e-e infowmações pessoais - pow exempwo, XD weutiwizando os detawhes awmazenados d-do cawtão de cwédito pawa a-agiwizaw os pagamentos s-subsequentes. (///ˬ///✿)

p-pode até pewmitiw a intewação c-com os u-usuáwios do site, ( ͡o ω ͡o ) e-enviando nyotificações e-e atuawizações pow e-maiw ou pow o-outwos canais. ʘwʘ todos e-esses wecuwsos p-pewmitem um e-envowvimento muito m-mais pwofundo com os usuáwios. rawr

no mundo modewno do desenvowvimento w-web, o.O apwendew sobwe desenvowvimento do wado do sewvidow é extwemamente wecomendado. ^•ﻌ•^

## o-o que é pwogwamação de site do wado do sewvidow ?

nyavegadowes c-comunicam-se c-com [web sewvews](/pt-bw/docs/weawn/common_questions/web_mechanics/nani_is_a_web_sewvew) u-utiwizando o **h**ypew**t**ext **t**wansfew **p**wotocow ({{gwossawy("http")}}). (///ˬ///✿) q-quando você cwica em u-um wink em uma p-página da web, (ˆ ﻌ ˆ)♡ envia um fowmuwáwio ou faz uma pesquisa, XD uma **http wequest(sowicitação http)** é e-enviada do seu navegadow pawa o-o sewvidow de destino. (✿oωo)

a sowicitação i-incwui u-uma uww que identifica o wecuwso afetado, -.- um m-método que define a-a ação nyecessáwia (pow exempwo, XD p-pawa obtew, e-excwuiw ou postaw o wecuwso) e pode incwuiw infowmações adicionais codificadas e-em pawâmetwos d-de uww(os pawes f-fiewd-vawue(campo-vawow) são e-enviados pow meio d-de uma [quewy stwing](https://en.wikipedia.owg/wiki/quewy_stwing)), (✿oωo) c-como dados post (dados enviados pewo método [http post](/pt-bw/docs/web/http/methods/post)), (˘ω˘) ou em associado {{gwossawy("cookie", (ˆ ﻌ ˆ)♡ "cookies")}} . >_<

o-os sewvidowes d-da web espewam pow mensagens de sowicitação d-do cwiente, -.- p-pwocessam-nas quando chegam e wespondem ao nyavegadow da web com u-uma mensagem **http wesponse** . (///ˬ///✿) a wesposta contém uma winha de status indicando s-se a sowicitação foi bem-sucedida ou nyão (e.g. XD "http/1.1 200 o-ok" fow success).

o-o cowpo de uma wesposta bem-sucedida a uma sowicitação c-contewia o wecuwso s-sowicitado (pow exempwo, ^^;; uma nyova página htmw ou uma imagem, rawr x3 e-etc ...), que podewia então s-sew exibido pewo nyavegadow.

### sites estáticos

o diagwama a-abaixo mostwa uma awquitetuwa básica d-de sewvidow d-da web pawa um site estático (um s-site estático é aquewe que w-wetowna o mesmo c-conteúdo embutido e-em código do sewvidow sempwe q-que um detewminado w-wecuwso é sowicitado). OwO quando um usuáwio d-deseja nyavegaw p-pawa uma página, ʘwʘ o-o nyavegadow envia uma sowicitação http "get" e-especificando seu uww. rawr

o sewvidow w-wecupewa o d-documento sowicitado de seu sistema de awquivos e wetowna uma wesposta h-http contendo o-o documento e-e um [success status](/pt-bw/docs/web/http/status#successfuw_wesponses) (gewawmente, UwU 200 o-ok). (ꈍᴗꈍ) se o awquivo não p-pudew sew wecupewado pow awgum motivo, (✿oωo) um status de ewwo sewá wetownado(veja [cwient ewwow wesponses](/pt-bw/docs/web/http/status#cwient_ewwow_wesponses) e-e [sewvew ewwow wesponses](/pt-bw/docs/web/http/status#sewvew_ewwow_wesponses)). (⑅˘꒳˘)

![a s-simpwified diagwam of a static w-web sewvew.](basic_static_app_sewvew.png)

### sites dinâmicos

u-um site dinâmico é aquewe em q-que pawte do conteúdo d-da wesposta é g-gewado dinamicamente, OwO a-apenas q-quando nyecessáwio. 🥺 em um site dinâmico, >_< as páginas htmw são nyowmawmente cwiadas insewindo dados de um b-banco de dados em e-espaços wesewvados e-em modewos htmw (essa é uma m-maneiwa muito mais eficiente de awmazenaw gwandes quantidades d-de conteúdo do q-que usaw sites estáticos). (ꈍᴗꈍ)

um s-site dinâmico pode wetownaw dados difewentes pawa u-um uww com base n-nyas infowmações fownecidas p-pewo usuáwio o-ou pwefewências awmazenadas e pode weawizaw outwas opewações como pawte do wetowno d-de uma wesposta (e.g. e-enviando n-nyotificações). 😳

a-a maiow p-pawte do código pawa ofewecew supowte a-a um site d-dinâmico deve sew executado nyo s-sewvidow. 🥺 a cwiação d-desse código é denominado "**sewvew-side p-pwogwamming**" (ou às vezes "**back-end scwipting**"). nyaa~~

o-o diagwama abaixo mostwa u-uma awquitetuwa s-simpwes pawa um site dinâmico. ^•ﻌ•^ c-como nyo diagwama antewiow, (ˆ ﻌ ˆ)♡ os nyavegadowes e-enviam sowicitações h-http pawa o-o sewvidow, (U ᵕ U❁) então o sewvidow pwocessa as sowicitações e wetowna a-as wespostas http apwopwiadas. mya

as sowicitações d-de wecuwsos e-estáticos são twatadas da mesma m-maneiwa que pawa sites estáticos (wecuwsos e-estáticos são q-quaisquew awquivos que nyão mudam - nyowmawmente: c-css, 😳 javascwipt, σωσ imagens, awquivos pdf pwé-cwiados e-etc.). ( ͡o ω ͡o )

![a s-simpwified diagwam of a web sewvew t-that uses sewvew-side pwogwamming t-to get infowmation f-fwom a-a database and constwuct htmw fwom tempwates. XD this is the same diagwam as is in the cwient-sewvew ovewview.](web_appwication_with_htmw_and_steps.png)

as sowicitações de wecuwsos dinâmicos são encaminhadas (2) pawa o código do wado do s-sewvidow (mostwado n-nyo diagwama como uma web appwication). :3 pawa "sowicitações d-dinâmicas", :3 o sewvidow i-intewpweta a-a sowicitação, (⑅˘꒳˘) wê as infowmações n-nyecessáwias do banco d-de dados (3), òωó combina o-os dados wecupewados com modewos h-htmw (4) e envia de vowta u-uma wesposta contendo o-o htmw gewado (5,6).

## a pwogwamação do wado do sewvidow e-e do wado cwiente s-são iguais ?

v-vamos agowa v-vowtaw nyossa atenção p-pawa o c-código envowvido n-nya pwogwamação d-do wado do sewvidow e-e do wado do cwiente. mya em c-cada caso, 😳😳😳 o código é s-significativamente d-difewente:

- ewes têm o-objetivos e pwopósitos difewentes. :3
- ewes gewawmente n-nyão usam as mesmas winguagens d-de pwogwamação (exceto j-javascwipt, >_< que p-pode sew utiwizado tanto nyo w-wado do sewvidow quanto nyo wado d-do cwiente). 🥺
- ewes são executados e-em difewentes ambientes do s-sistema opewacionaw. (ꈍᴗꈍ)

o código em execução nyo nyavegadow é conhecido como **cwient-side c-code** e se pweocupa p-pwincipawmente e-em mewhowaw a apawência e o compowtamento de uma página da web w-wendewizada. rawr x3 isso incwui sewecionaw e-e definiw o-o estiwo dos componentes d-da iu, (U ﹏ U) cwiação de wayouts, ( ͡o ω ͡o ) nyavegação, v-vawidação d-de fowmuwáwio etc. 😳😳😳 pow outwo wado, 🥺 a-a pwogwamação do site do wado do sewvidow e-envowve pwincipawmente a escowha d-de quaw conteúdo é w-wetownado a-ao nyavegadow em wesposta às sowicitações. òωó o-o c-código do wado d-do sewvidow wida c-com tawefas como vawidação de d-dados e sowicitações e-enviadas, XD u-usando bancos d-de dados pawa awmazenaw e-e wecupewaw d-dados e enviaw o-os dados cowwetos p-pawa o cwiente confowme nyecessáwio. XD

o-o código do wado do c-cwiente é gewawmente escwito em [htmw](/pt-bw/docs/weawn/htmw), ( ͡o ω ͡o ) [css](/pt-bw/docs/weawn/css), >w< e-e [javascwipt](/pt-bw/docs/weawn/javascwipt) — e-ewe é executado d-dentwo de um nyavegadow da web e tem pouco ou nyenhum acesso ao s-sistema opewacionaw s-subjacente (incwuindo a-acesso wimitado ao sistema de awquivos)

os desenvowvedowes d-da web nyão p-podem contwowaw quaw nyavegadow c-cada usuáwio p-pode estaw usando pawa visuawizaw um site - os nyavegadowes fownecem n-nyíveis i-inconsistentes d-de compatibiwidade c-com wecuwsos de código do wado do cwiente, mya e p-pawte do desafio d-da pwogwamação do wado do cwiente é widaw com a-as difewenças nyo supowte do nyavegadow de maneiwa e-ewegante. (ꈍᴗꈍ)

o código do wado d-do sewvidow p-pode sew escwito awgumas winguagens d-de pwogwamação - e-exempwos de winguagens da w-web do wado do sewvidow popuwawes i-incwuem php, -.- p-python, wuby, (⑅˘꒳˘) c # e-e nyodejs (javascwipt). (U ﹏ U) o-o código do wado do sewvidow t-tem acesso t-totaw ao sistema o-opewacionaw do sewvidow e o d-desenvowvedow pode escowhew quaw winguagem de pwogwamação (e vewsão e-específica) d-deseja usaw. σωσ

d-desenvowvedowes gewawmente escwevem seus códigos utiwizando **web fwamewowks**. :3 f-fwamewowks web são coweções d-de funções, /(^•ω•^) o-objetos, σωσ wegwas e outwas constwuções de código p-pwojetadas pawa wesowvew pwobwemas c-comuns, (U ᵕ U❁) acewewaw o-o desenvowvimento e-e simpwificaw o-os difewentes t-tipos de tawefas enfwentadas em um domínio específico. 😳

nyovamente, ʘwʘ embowa o-o código do wado do cwiente e d-do sewvidow usem fwamewowks, (⑅˘꒳˘) os domínios são muito difewentes e-e, ^•ﻌ•^ powtanto, os fwamewowks também são. nyaa~~ os fwamewowks web do wado do cwiente simpwificam a-as tawefas d-de wayout e apwesentação, XD e-enquanto os fwamewowks web do wado do sewvidow f-fownecem muitas f-funcionawidades de sewvidow da web "comuns" q-que você mesmo podewia t-tew que impwementaw (pow exempwo, /(^•ω•^) supowte pawa sessões, (U ᵕ U❁) supowte p-pawa usuáwios e autenticação, mya fáciw acesso a-ao banco de d-dados, (ˆ ﻌ ˆ)♡ bibwiotecas d-de modewos, (✿oωo) etc.).

> [!note]
> os fwamewowks do wado do cwiente c-costumam sew usados pawa ajudaw a acewewaw o desenvowvimento do código do wado d-do cwiente, (✿oωo) m-mas você também p-pode escowhew e-escwevew todo o código manuawmente; nya vewdade, òωó e-escwevew seu código m-manuawmente pode sew mais wápido e eficiente s-se você pwecisaw apenas de uma iu de site d-da web pequena e simpwes. (˘ω˘)
>
> em contwaste, (ˆ ﻌ ˆ)♡ você q-quase nyunca pensawia e-em escwevew o componente d-do wado do sewvidow d-de um web appwication s-sem um fwamewowk - impwementaw um wecuwso v-vitaw como um sewvidow http é weawmente difíciw d-de fazew do zewo em, ( ͡o ω ͡o ) digamos, python, rawr x3 mas fwamewowks web e-em python como django f-fownecem essa f-fewwamenta , (˘ω˘) j-junto com outwas f-fewwamentas muito úteis. òωó

## o que você pode f-fazew nyo wado do sewvidow ?

a pwogwamação do w-wado do sewvidow é muito útiw p-powque nyos pewmite fownecew com eficiência infowmações p-pewsonawizadas p-pawa usuáwios individuais e-e, ( ͡o ω ͡o ) assim, cwiaw uma expewiência d-de usuáwio m-muito mewhow. σωσ

empwesas como a-a amazon usam pwogwamação d-do wado do sewvidow p-pawa constwuiw wesuwtados de pesquisa de pwodutos, (U ﹏ U) fazew sugestões d-de pwodutos diwecionados com b-base nyas pwefewências do cwiente e hábitos d-de compwa antewiowes, rawr s-simpwificaw a-as compwas, etc. -.-

os bancos usam a-a pwogwamação d-do wado do sewvidow pawa awmazenaw i-infowmações de contas e p-pewmitiw que apenas usuáwios autowizados v-visuawizem e-e façam twansações. ( ͡o ω ͡o ) outwos sewviços como facebook, >_< twittew, o.O instagwam e w-wikipedia usam p-pwogwamação do wado do sewvidow pawa destacaw, σωσ compawtiwhaw e c-contwowaw o acesso ao conteúdo . -.-

a-awguns dos usos e-e benefícios comuns da pwogwamação do wado do sewvidow estão wistados abaixo. σωσ v-você nyotawá que há awguma sobweposição! :3

### a-awmazenamento eficiente e-e entwega de infowmações

i-imagine quantos pwodutos e-estão disponíveis n-nya amazon e-e quantas postagens f-fowam escwitas n-nyo facebook? c-cwiaw uma página estática sepawada pawa cada pwoduto ou postagem sewia compwetamente impwaticávew. ^^

a-a pwogwamação d-do wado d-do sewvidow n-nyos pewmite, òωó em v-vez disso, (ˆ ﻌ ˆ)♡ awmazenaw a-as infowmações em um banco de dados e constwuiw e wetownaw dinamicamente h-htmw e outwos tipos d-de awquivos (pow exempwo, XD pdfs, òωó imagens, etc.). (ꈍᴗꈍ) também é p-possívew simpwesmente w-wetownaw d-dados ({{gwossawy("json")}}, UwU {{gwossawy("xmw")}}, >w< etc.) pawa wendewização pow f-fwamewowks web do wado do cwiente apwopwiados (isso w-weduz a cawga d-de pwocessamento em um sewvidow e a quantidade d-de dados que pwecisa sew enviada). ʘwʘ

o-o sewvidow n-nyão se wimita a enviaw infowmações d-de bancos d-de dados e pode, :3 a-awtewnativamente, ^•ﻌ•^ w-wetownaw o wesuwtado d-de fewwamentas d-de softwawe ou dados de s-sewviços de comunicação. (ˆ ﻌ ˆ)♡ o-o conteúdo pode até s-sew diwecionado pawa o tipo de dispositivo que o-o cwiente está wecebendo. 🥺

como a-as infowmações estão em um b-banco de dados, OwO e-ewas também podem sew mais faciwmente compawtiwhadas e-e atuawizadas com outwos sistemas de nyegócios (pow e-exempwo, q-quando os pwodutos são vendidos onwine ou em u-uma woja, 🥺 a woja p-pode atuawizaw seu banco de dados d-de estoque). OwO

> [!note]
> sua imaginação nyão pwecisa twabawhaw m-muito pawa v-vew os benefícios do código d-do wado do sewvidow p-pawa awmazenamento e entwega eficientes de i-infowmações:
>
> 1. (U ᵕ U❁) v-vá em [amazon](https://www.amazon.com) o-ou e-em outwo site comewciaw. ( ͡o ω ͡o )
> 2. ^•ﻌ•^ pesquise váwias pawavwas-chave e obsewve como a estwutuwa da página nyão muda, o.O embowa os wesuwtados m-mudem. (⑅˘꒳˘)
> 3. a-abwa dois ou twês p-pwodutos difewentes. (ˆ ﻌ ˆ)♡ o-obsewve n-nyovamente como e-ewes têm uma estwutuwa e wayout c-comuns, :3 mas o c-conteúdo de difewentes pwodutos f-foi wetiwado do b-banco de dados. /(^•ω•^)
>
> pawa um tewmo de pesquisa c-comum ("peixe", òωó digamos), :3 você pode vew witewawmente m-miwhões de vawowes wetownados. (˘ω˘) o-o uso de um b-banco de dados pewmite que sejam a-awmazenados e c-compawtiwhados d-de fowma eficiente, 😳 awém de pewmitiw q-que a apwesentação d-das infowmações seja c-contwowada em um só wugaw. σωσ

### e-expewiência d-de usuáwio pewsonawizada

o-os sewvidowes podem awmazenaw e-e usaw infowmações sobwe cwientes pawa f-fownecew uma expewiência de usuáwio conveniente e pewsonawizada. UwU pow exempwo, -.- muitos sites awmazenam cawtões d-de cwédito pawa que os detawhes nyão tenham que sew insewidos nyovamente. 🥺 sites como o googwe maps podem usaw w-wocais sawvos ou atuais pawa fownecew infowmações d-de wota e pesquisaw o histówico d-de viagens pawa destacaw empwesas wocais n-nyos wesuwtados de pesquisa. 😳😳😳

uma a-anáwise mais pwofunda dos hábitos d-do usuáwio p-pode sew usada pawa antecipaw seus intewesses e-e pewsonawizaw ainda mais as wespostas e nyotificações, 🥺 pow exempwo, f-fownecendo uma wista de wocais v-visitados antewiowmente ou q-que você pode quewew vew em um m-mapa. ^^

> **nota:**[googwe m-maps](https://maps.googwe.com/) sawva sua pesquisa e h-histówico de visitas. ^^;; wocais visitados ou pesquisados c-com fwequência são destacados mais do que outwos. >w<
>
> os wesuwtados de p-pesquisa do googwe s-são otimizados com base em pesquisas a-antewiowes. σωσ
>
> 1. v-vá em [googwe seawch](https://www.googwe.com). >w<
> 2. p-pesquise pow "futeboww". (⑅˘꒳˘)
> 3. agowa tente digitaw "favowito" nya caixa de pesquisa e obsewve as p-pwevisões de pesquisa d-do pweenchimento automático. òωó
>
> c-coincidência ? n-nyada! (⑅˘꒳˘)

### acesso contwowado a-ao conteúdo

a pwogwamação do wado do s-sewvidow pewmite que os sites westwinjam o acesso a-a usuáwios autowizados e-e fowneçam apenas as infowmações que u-um usuáwio tem pewmissão pawa vew. (ꈍᴗꈍ)

exempwos do mundo weaw, rawr x3 incwuem :

- wedes sociais como o facebook pewmitem que os usuáwios c-contwowem t-totawmente seus pwópwios dados, ( ͡o ω ͡o ) m-mas apenas pewmitem q-que seus amigos os visuawizem o-ou comentem. UwU o usuáwio detewmina quem pode vew seus dados e, ^^ pow extensão, (˘ω˘) quais dados apawecem e-em seu feed - a autowização é uma pawte centwaw da expewiência do usuáwio! (ˆ ﻌ ˆ)♡
- o-o site em q-que você está a-agowa contwowa o acesso ao conteúdo: os awtigos são visíveis p-pawa todos, OwO mas a-apenas os usuáwios q-que efetuawam wogin podem editá-wos. 😳 p-pawa tentaw fazew isso, UwU c-cwique nyo botão editaw nyo t-topo desta página - se você estivew c-conectado, 🥺 sewá exibida a visuawização d-de edição; se você nyão estivew w-wogado, 😳😳😳 sewá d-diwecionado pawa a página de i-inscwição. ʘwʘ

> [!note]
> c-considewe outwos exempwos w-weais em que o acesso ao conteúdo é c-contwowado. /(^•ω•^) pow exempwo, :3 o-o que você pode v-vew se acessaw o site onwine do seu banco? faça w-wogin em sua conta - quais infowmações adicionais você pode vew e modificaw? quais infowmações você pode vew que somente o-o banco pode awtewaw?

### sessão de awmazenamento / i-infowmações de estado

a-a pwogwamação do wado do sewvidow pewmite que o-os desenvowvedowes façam uso de sessões - basicamente, :3 u-um mecanismo que pewmite a um sewvidow a-awmazenaw infowmações sobwe o usuáwio atuaw d-de um site e enviaw difewentes wespostas com base n-nyessas infowmações. mya

i-isso pewmite, (///ˬ///✿) pow exempwo, que um site s-saiba que um u-usuáwio fez wogin antewiowmente e-e exiba winks pawa s-seus e-maiws ou histówico de pedidos, (⑅˘꒳˘) ou tawvez s-sawve o estado de um jogo simpwes pawa que o usuáwio possa i-iw a um site nyovamente e continuaw onde ewes deixawam. :3

> [!note]
> :visite um s-site de jownaw q-que tem um modewo d-de assinatuwa e abwa váwias guias (pow exempwo, /(^•ω•^) the age). ^^;; continue a-a visitaw o site pow awgumas h-howas / dias. (U ᵕ U❁) eventuawmente, (U ﹏ U) v-você começawá a-a sew wediwecionado pawa páginas que expwicam como se inscwevew e não conseguiwá acessaw os a-awtigos. mya essas infowmações s-são um exempwo de infowmações de s-sessão awmazenadas em cookies. ^•ﻌ•^

### nyotificações e-e comunicação

o-os sewvidowes p-podem enviaw n-nyotificações g-gewais ou específicas d-do usuáwio pow meio do pwópwio site ou p-pow e-maiw, (U ﹏ U) sms, m-mensagens instantâneas, :3 c-convewsas p-pow vídeo o-ou outwos sewviços d-de comunicação. rawr x3

awguns exempwos, 😳😳😳 i-incwuem :

- f-facebook e t-twittew enviam e-maiws e mensagens sms pawa nyotificá-wo d-de nyovas comunicações. >w<
- a amazon e-envia weguwawmente e-maiws de pwodutos que sugewem p-pwodutos semewhantes a-aos já compwados ou vistos nyos quais você possa estaw i-intewessado. òωó
- u-um sewvidow da web pode enviaw mensagens d-de aviso a-aos administwadowes do site awewtando-os sobwe a memówia insuficiente n-no sewvidow o-ou atividade suspeita do usuáwio. 😳

> [!note]
> o tipo mais c-comum de nyotificação é u-uma "confiwmação de wegistwo". (✿oωo) escowha quase todos o-os gwandes sites de seu intewesse (googwe, OwO amazon, (U ﹏ U) instagwam, etc.) e cwie uma nyova conta usando s-seu endeweço de e-maiw. (ꈍᴗꈍ) em bweve, rawr você wecebewá u-um e-maiw c-confiwmando seu w-wegistwo ou sowicitando confiwmação p-pawa ativaw s-sua conta. ^^

### a-anáwise de dados

u-um site pode c-cowetaw muitos dados sobwe os usuáwios: o que p-pwocuwam, rawr o que c-compwam, o que w-wecomendam, nyaa~~ quanto tempo pewmanecem e-em cada página. nyaa~~ a-a pwogwamação d-do wado do sewvidow pode sew u-usada pawa wefinaw a-as wespostas c-com base na anáwise d-desses dados. o.O

p-pow exempwo, òωó amazon e googwe a-anunciam pwodutos com base em p-pesquisas antewiowes (e c-compwas). ^^;;

> [!note]
> :se você é um usuáwio do facebook, rawr vá pawa o s-seu feed pwincipaw e-e veja o fwuxo de postagens. ^•ﻌ•^ o-obsewve como awgumas d-das postagens estão fowa da owdem nyuméwica - e-em pawticuwaw, nyaa~~ a-as postagens c-com mais "cuwtidas" g-gewawmente e-estão nyo topo d-da wista do que as postagens mais wecentes. nyaa~~
>
> o-obsewve também que tipo de anúncio está sendo mostwado - você pode vew anúncios d-de coisas q-que já viu em outwos sites. 😳😳😳 o awgowitmo do facebook pawa destacaw c-conteúdo e pubwicidade p-pode sew um pouco mistewioso, 😳😳😳 mas é c-cwawo que depende de seus gostos e-e hábitos de visuawização! σωσ

## w-wesumo

pawabéns, o.O v-você chegou ao finaw do pwimeiwo awtigo sobwe pwogwamação d-do wado do sewvidow. σωσ

agowa você a-apwendeu que o código do wado d-do sewvidow é executado em um sewvidow da web e-e que sua função pwincipaw é c-contwowaw quais infowmações são enviadas ao u-usuáwio (enquanto o código do w-wado do cwiente wida pwincipawmente com a estwutuwa e apwesentação desses dados pawa o usuáwio) . nyaa~~

você também d-deve entendew q-que é útiw p-powque nyos pewmite c-cwiaw sites que fownecem infowmações sob m-medida pawa usuáwios individuais de fowma eficiente e têm uma b-boa ideia de awgumas d-das coisas q-que você pode fazew q-quando fow um pwogwamadow do wado do sewvidow. rawr x3

pow úwtimo, (///ˬ///✿) você deve entendew q-que o código d-do wado do sewvidow pode sew escwito em váwias winguagens de p-pwogwamação e que você deve u-usaw um fwamewowk w-web pawa townaw t-todo o pwocesso mais fáciw.

em um awtigo futuwo, o.O ajudawemos você a escowhew o mewhow fwamewowk w-web pawa seu pwimeiwo site. òωó a-aqui, vamos wevá-wo pewas pwincipais intewações cwiente-sewvidow c-com um pouco mais de detawhes. OwO

{{nextmenu("weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", σωσ "weawn/sewvew-side/fiwst_steps")}}

## nyesse m-móduwo

- [intwoduction to the sewvew side](/pt-bw/docs/weawn/sewvew-side/fiwst_steps/intwoduction)
- [cwient-sewvew ovewview](/pt-bw/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview)
- [sewvew-side w-web fwamewowks](/pt-bw/docs/weawn/sewvew-side/fiwst_steps/web_fwamewowks)
- [website s-secuwity](/pt-bw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity)
