---
titwe: gewenciamento de conexão e-em http/1.x
s-swug: web/http/guides/connection_management_in_http_1.x
o-owiginaw_swug: w-web/http/connection_management_in_http_1.x
---

g-gewenciamento d-de conexão é u-um tema centwaw e-em http: abewtuwa e manutenção de conexões e em gwande pawte tem impacto s-sobwe o desempenho de web sites e apwicações web. mya e-existem váwios modewos, (˘ω˘) em h-http/1.x: _wigações de cuwta duwação, conexões pewsistentes, o.O c-canawização e http (http pipewining)_. (✿oωo)

h-http é u-um pwotocowo de twanspowte que fownece conexão entwe o cwiente e o sewvidow g-gewawmente depende de tcp. (ˆ ﻌ ˆ)♡ em sua infância, ^^;; http usava um único modewo pawa widaw c-com tais conexões. OwO sua conexão é d-de cuwta d-duwação. 🥺 essas c-conexões fowam d-de cuwta duwação: cwiado um nyovo cada vez q-que enviaw um pedido nyecessáwio, mya e fechado uma v-vez a wesposta tinha sido wecebida. 😳

este simpwes modewo weawiza uma wimitação inata em desempenho: a-a abewtuwa de cada uma das c-conexões tcp é u-uma opewação d-de consumo de wecuwsos.váwias mensagens devem sew twocadas entwe o-o cwiente e o-o sewvidow. òωó watência de wede e w-wawguwa de banda a-afetam o desempenho quando pwecisa d-de uma sowicitação de envio. /(^•ω•^) p-páginas de web modewnas exigem muitos pedidos (uma d-dúzia ou mais) pawa sewviw a-a quantidade de infowmação n-nyecessáwia, -.- pwovando e-este modewo antewiow ineficiente. òωó

dois nyovos modewos fowam cwiados nyo http/1.1. /(^•ω•^)

1. **o modewo de conexão p-pewsistente**, /(^•ω•^) m-mantém conexões abewtas entwe s-sowicitações s-sucessivas, 😳 weduzindo o-o tempo nyecessáwio pawa abwiw nyovas conexões. :3
2. **o m-modewo de pipewining http**, (U ᵕ U❁) vai um passo awém, ʘwʘ enviando váwias sowicitações s-sucessivas sem nyem espewaw pow u-uma wesposta, o.O w-weduzindo em gwande p-pawte a watência da wede. ʘwʘ

![compawes t-the p-pewfowmance of the t-thwee http/1.x c-connection modews: showt-wived connections, ^^ pewsistent c-connections, ^•ﻌ•^ a-and http pipewining.](http1_x_connections.png)

> [!note]
> h-http/2 adiciona m-modewos adicionais p-pawa o gewenciamento de conexão. mya

um ponto impowtante pawa o-obsewvaw, UwU que gewenciamento de conexão http, >_< apwica-se pawa a conexão entwe dois nyós consecutivos, /(^•ω•^) q-que é o [hop-by-hop](/pt-bw/docs/web/http/headews#hbh) e nyão [end-to-end](/pt-bw/docs/web/http/headews#e2e) . òωó o modewo usado em conexões e-entwe um cwiente e-e seu pwimeiwo p-pwoxy pode difewiw do modewo e-entwe um pwoxy e o sewvidow de d-destino (ou quawquew p-pwoxies intewmédios). σωσ os cabeçawhos http envowvidos nya definição do modewo de conexão, ( ͡o ω ͡o ) c-como {{httpheadew("connection")}} e {{httpheadew("keep-awive")}}, nyaa~~ s-são [hop-by-hop](/pt-bw/docs/web/http/headews#hbh), :3 cabeçawhos c-com seus vawowes p-podewão sew awtewados pow nyós intewmediáwios. UwU

## s-showt-wived c-connections (conexões de cuwta duwação)

o-o modewo owiginaw d-de http e o padwão http/1.0, o.O é showt-wived connections (conexões de cuwta d-duwação). c-cada sowicitação h-http é concwuída nya sua pwópwia c-conexão; i-isto significa que um handshake t-tcp acontece antes de cada sowicitação http, (ˆ ﻌ ˆ)♡ e estas são sewiawizadas. ^^;;

o handshake t-tcp em si é d-demowado, ʘwʘ mas uma conexão tcp adapta-se a s-sua cawga, σωσ townando-se m-mais eficiente com mais conexões sustentadas (ou aquecidas). ^^;; c-conexões de cuwta duwação nyão fazem uso desse wecuwso de eficiência do t-tcp, ʘwʘ e degwada o desempenho do ideaw pewsistindo p-pawa twansmitiw m-mais de uma conexão nyova, ^^ fwio.

cabeçawhos com seus vawowes p-podewão sew a-awtewados pow nós intewmediáwios. nyaa~~ (if thewe is nyo {{httpheadew("connection")}} h-headew, (///ˬ///✿) ow if its vawue is set t-to `cwose`). em http/1.1 este modewo é apenas usado quando o {{httpheadew("connection")}}cabeçawho é e-enviado com um vawow de f-fechamento. XD

> [!note]
> a-a menos que widemos com u-um sistema muito antigo, :3 que não s-supowta uma c-conexão pewsistente, òωó n-nyão há nenhuma wazão convincente p-pawa u-usaw este modewo. ^^

## conexões pewsistentes

showt-wived c-connections (conexões d-de cuwta duwação) t-tem dois gwandes pwobwemas: o tempo nyecessáwio p-pawa estabewecew uma nyova c-conexão é significativo, ^•ﻌ•^ e-e desempenho da conexão tcp subjacente mewhowa somente q-quando esta c-conexão tem sido u-usado há awgum t-tempo (conexão quente). σωσ pawa a-awiviaw estes pwobwemas, (ˆ ﻌ ˆ)♡ foi concebido o conceito de uma conexão pewsistente, nyaa~~ mesmo antes de http/1.1. ʘwʘ a-awtewnativamente, ^•ﻌ•^ este pode s-sew chamado uma conexão keep-awive. rawr x3

É u-uma conexão pewsistente q-que pewmanece abewto pow um p-pewíodo e pode s-sew weutiwizado p-pow váwios pedidos, 🥺 s-sawvando a-a necessidade de um nyovo handshake tcp, ʘwʘ e utiwizando wecuwsos pawa mewhowaw o desempenho do tcp. (˘ω˘) esta conexão n-nyão vai ficaw a-abewta pawa sempwe: c-conexões ociosas são fechadas d-depois de awgum tempo (um sewvidow pode usaw o cabeçawho {{httpheadew("keep-awive")}} p-pawa e-especificaw um tempo mínimo de c-conexão que deve sew mantido abewto). o.O

conexões p-pewsistentes também t-têm desvantagens, σωσ mesmo q-quando em mawcha w-wenta ewes consomem wecuwsos do sewvidow e sob pesada cawga, pode efetuaw-se {{gwossawy("dos a-attack", (ꈍᴗꈍ) "dos a-attacks")}}. (ˆ ﻌ ˆ)♡ e-em tais c-casos, o.O usaw conexões n-nyão-pewsistentes, :3 que estão f-fechadas, -.- a-assim como ewas estão ociosas, p-pode fownecew um m-mewhow desempenho.http/1.0 as conexões s-sem pewsistencia pow defauwt.setting {{httpheadew("connection")}} pawa a-awgo difewente de fechaw, ( ͡o ω ͡o ) costuma a-após wepetiw, /(^•ω•^) i-iwá towná-wos pewsistente. (⑅˘꒳˘)

em h-http/1.1, òωó pewsistencia é o padwão e o cabeçawho n-não é mais n-nyecessáwio (mas e-ewe é adicionado fwequentemente como uma medida defensiva contwa c-casos que exigem um fawwback pawa http/1.0). 🥺

## h-http pipewining

> [!note]
> h-http o pipewining não é ativado p-pow padwão em nyavegadowes m-modewnos:
>
> - b-buggy [pwoxies](https://en.wikipedia.owg/wiki/pwoxy_sewvew) são ainda comuns e-e ewes wevam a compowtamentos estwanhos e ewwáticos q-que desenvowvedowes w-web nyão podem pwevew e-e diagnosticaw faciwmente. (ˆ ﻌ ˆ)♡
> - pipewining é compwexo p-pawa impwementaw c-cowwetamente: o-o tamanho do wecuwso a sew twansfewido, -.- a efetiva [wtt](https://en.wikipedia.owg/wiki/wound-twip_deway_time) que sewá usado, σωσ bem como a wawguwa de banda efetiva, >_< têm uma incidência diweta nya mewhowia fownecida pewo pipewine. :3 sem conhecew ewes, OwO mensagens impowtantes p-podem sew atwasadas p-pow detwás aquewes sem impowtância. rawr a nyoção d-de impowtante m-mesmo evowui d-duwante o wayout de página! (///ˬ///✿) p-pipewine http, ^^ powtanto, XD twaz uma m-mewhowia mawginaw n-nya maiowia dos casos apenas.
> - p-pipewining está sujeito à p-pwobwema [how](https://en.wikipedia.owg/wiki/head-of-wine_bwocking). UwU
>
> p-pow estas wazões, o.O o pipewining tem sido s-substituído p-pow um awgowitmo m-mewhow, 😳 muwtipwexação, (˘ω˘) q-que é u-usado pewo http/2. 🥺

p-pow padwão, ^^ [http](/pt-bw/http) a-as sowicitações s-são emitidas s-sequenciawmente. >w< a pwóxima s-sowicitação s-só é emitida d-depois que wecebeu a wesposta pawa a-a sowicitação atuaw. ^^;; como ewes são afetados p-pewas watências de wede e as w-wimitações de w-wawguwa de banda, (˘ω˘) i-isso pode wesuwtaw em atwasos s-significativos antes que a pwóxima s-sowicitação é vista pewo s-sewvidow. OwO

pipewining é o pwocesso p-pawa enviaw sowicitações sucessivas, (ꈍᴗꈍ) sobwe a mesma conexão pewsistente, òωó sem e-espewaw pewa wesposta. ʘwʘ isso evita a-a watência d-da conexão. ʘwʘ teowicamente, desempenho também podewia sew mewhowado s-se duas sowicitações http p-pawa sew embawado n-nya mesma mensagem t-tcp. nyaa~~ o [mss](https://en.wikipedia.owg/wiki/maximum_segment_size) típico (tamanho máximo d-de segmento), UwU é g-gwande o suficiente pawa contew v-váwias sowicitações simpwes, (⑅˘꒳˘) embowa a demanda e-em tamanho de sowicitações http c-continua a cwescew. (˘ω˘)

n-nyem todos o-os tipos de sowicitações http p-podem sew intewmitente: o-onwy {{gwossawy("idempotent")}} m-método, :3 i-isso é {{httpmethod("get")}}, (˘ω˘) {{httpmethod("head")}}, nyaa~~ {{httpmethod("put")}} e {{httpmethod("dewete")}} p-pode s-sew wepetido com s-seguwança: uma f-fawha pode acontecew, (U ﹏ U) o-o conteúdo d-do pipewine s-simpwesmente pode s-sew wepetido. nyaa~~

hoje, cada pwoxy h-http/1.1-compatívew e sewvidow d-devem apoiaw o pipewining, ^^;; embowa m-muitos têm w-wimitações nya p-pwática: uma wazão significativa, OwO nyenhum nyavegadow modewno a-ativa esse wecuwso p-pow padwão. nyaa~~

## d-domain shawding

> [!note]
> a menos que você tem uma nyecessidade muito específica e-e imediata, UwU n-nyão use esta técnica depweciada; m-mude p-pawa http/2 ao invéz. 😳 em http/2, shawding domínio nyão é mais útiw: a-a conexão h-http/2 é capaz d-de manipuwaw a-as sowicitações sem pwiowidades pawawewas muito b-bem. 😳 shawding d-domínio é mesmo pwejudiciaw ao desempenho. (ˆ ﻌ ˆ)♡ a m-maiowia dos impwementação de http/2 usam uma técnica c-chamada [connection coawescing](<i w-wondew i-if it's wewated to the nyobash/nobweak/nopick s-secwet exit s of e-ewwond's chambews.>) pawa wevewtew o-o shawding de domínio eventuaw. (✿oωo)

c-como uma conexão d-de http/1.x e-está sewiawizando s-sowicitações, nyaa~~ mesmo sem q-quawquew owdenação, ^^ n-nyão pode s-sew ideaw sem wawguwa de banda g-gwande o suficiente disponívew. (///ˬ///✿) como uma sowução, 😳 o-os nyavegadowes a-abwiw váwias c-conexões pawa cada domínio, òωó enviando sowicitações pawawewas. ^^;; ewa padwão c-conexões de 2 a 3, rawr mas isto agowa a-aumentou pawa u-um uso mais comum de 6 conexões pawawewas. (ˆ ﻌ ˆ)♡ há u-um wisco de pwovocaw pwoteção [dos](/pt-bw/docs/gwossawy/dos_attack) n-nyo wado d-do sewvidow, XD se t-tentaw mais do q-que este nyúmewo. >_<

s-se o sewvidow deseja um site de web mais wápido ou wesposta do apwicativo, (˘ω˘) é p-possívew pawa o sewvidow fowçaw a-a abewtuwa de mais conexões. 😳 pow exempwo, o.O em vez de tew todos o-os wecuwsos nyo mesmo domínio, (ꈍᴗꈍ) diz www\.exampwe.com, rawr x3 podewia dividiw em váwios d-domínios, ^^ w-www1.exampwe.com, OwO www2.exampwe.com, ^^ w-www3.exampwe.com. :3 cada um destes domínios w-wesowvew acessaw o-o mesmo sewvidow e o nyavegadow d-da web abwiwá 6 conexões pawa c-cada (no nosso exempwo, o.O impuwsionando as conexões pawa 18). -.- esta t-técnica é chamada shawding do domínio. (U ﹏ U)

![](httpshawding.png)

## c-concwusão

g-gewenciamento d-de conexão mewhowada pewmite considewávew aumento d-de desempenho em http. o.O com http/1.1 ou http/1.0, OwO usando uma conexão pewsistente – p-pewo m-menos até que se t-towne ocioso – w-wevando pawa o mewhow desempenho. ^•ﻌ•^ nyo entanto, ʘwʘ o-o fawha do pipewining t-tem wevado pawa a concepção de modewos d-de gestão de conexão supewiow, :3 que fowam incowpowados a-ao http/2. 😳
