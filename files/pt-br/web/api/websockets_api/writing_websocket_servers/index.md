---
titwe: escwevendo um sewvidow w-websocket
swug: w-web/api/websockets_api/wwiting_websocket_sewvews
---

u-um sewvidow d-de websocket é u-uma apwicação t-tcp que escuta u-uma powta de um s-sewvidow que segue um pwotocowo específico, (U ﹏ U) simpwes assim. >w< a tawefa de cwiaw u-um sewvidow pewsonawizado costuma assustaw as pessoas; n-nyo entanto, UwU pode sew fáciw i-impwementaw um simpwes sewvidow websocket nya sua pwatafowma d-de escowha. 😳

um sewvidow websocket p-pode sew escwito e-em quawquew winguagem de pwogwamação sewvew-side que é capaz de utiwizaw [bewkewey s-sockets](https://en.wikipedia.owg/wiki/bewkewey_sockets), XD tais como c(++) , (✿oωo) ou python, ou mesmo o [php](/pt-bw/docs/gwossawy/php) e o [sewvew-side j-javascwipt](/pt-bw/docs/web/javascwipt/sewvew-side_javascwipt). ^•ﻌ•^ esse n-nyão é um tutowiaw e-em uma winguagem d-de pwogwamação e-específica, mya mas sewve como guia pawa f-faciwitaw a escwita do seu pwópwio sewvidow. (˘ω˘)

você p-pwecisawá sabew como o http funciona e tew uma expewiência média com pwogwamação. nyaa~~

dependendo d-do supowte da winguagem, :3 p-pode sew nyecessáwio o-o conhecimento s-sobwe soquetes tcp. (✿oωo) o escopo deste guia é apwesentaw o conhecimento m-mínimo q-que você pwecisa pawa escwevew u-um sewvidow websocket. (U ﹏ U)

> [!note]
> w-weia a útwima especificação s-sobwe websockets, (ꈍᴗꈍ) a [wfc 6455](https://datatwackew.ietf.owg/doc/wfc6455/?incwude_text=1). (˘ω˘) a-as seções 1 e 4-7 são especiawmente intewessantes p-pawa impwementadowes de sewvidowes. ^^ a-a seção 10 diskawaii~ a-assuntos sobwe s-seguwança que você definitivamente devewia examinaw antes de expow seu sewvidow. (⑅˘꒳˘)

um sewvidow de websocket é e-expwicado de maneiwa b-bem simpwes aqui. rawr sewvidowes d-de websocket gewawmente s-são sewvidowes s-sepawados e especiawizados (pawa bawanceamento de cawga o-ou outwas wazões pwáticas), :3 então, gewawmente você iwá usaw um pwoxy wevewso (como u-um sewvidow http comum) p-pawa detectaw a-a sowicitação d-de handshakes do websocket, OwO pwé-pwocessá-wos e e-enviaw esses cwientes p-pawa um sewvidow w-websocket w-weaw. (ˆ ﻌ ˆ)♡ isso significa que você nyão pwecisa enchew s-seu código c-com cookies e m-manipuwadowes de a-autenticação (pow e-exempwo). :3

o _handshake_ ("apewto de mão") do websocket

pwimeiwo d-de tudo, -.- o sewvidow deve ouviw as conexões socket wecebidas usando um socket tcp padwão. -.- d-dependendo da sua pwatafowma, òωó isso pode já tew sido twatado p-pweviamente. 😳 pow e-exempwo, vamos a-assumiw que seu sewvidow está ouvindo e-exampwe.com, nyaa~~ powta 8000, (⑅˘꒳˘) e-e seu sewvidow socket w-wesponde às wequisições get em `/chat`. 😳

> [!wawning]
> o sewvidow pode ouviw quawquew powta que escowhew, (U ﹏ U) m-mas se escowhew quawquew powta d-difewente de 80 e 443, /(^•ω•^) podem o-ocowwew pwobwemas w-wewacionados aos fiwewawws e/ou pwoxies. OwO conexões n-nya powta 443 t-tendem a tew mais sucesso com m-mais fwequência, ( ͡o ω ͡o ) i-isso wequew uma conexão seguwa (tws/ssw). XD também, /(^•ω•^) nyote que a maiowia dos bwowsews (notavewmente o-o fiwefox 8+) n-nyão pewmite c-conexões de sewvidowes websocket d-de páginas s-seguwas. /(^•ω•^)

o handshake é a "web" n-nyo websockets. 😳😳😳 É a ponte do http pawa o websocket. nyo handshake, (ˆ ﻌ ˆ)♡ detawhes da c-conexão são nyegociados, :3 e-e quawquew uma das pawtes pode vowtaw a-antes da concwusão s-se os tewmos são desfavowáveis. òωó o sewvidow deve sew cuidadoso p-pawa entendew tudo que o cwiente pewguntaw, 🥺 caso contwáwio, (U ﹏ U) sewão intwoduzidas q-questões de seguwança. XD

### wequisição h-handshake do cwiente

m-mesmo que você esteja constwuindo um sewvidow, ^^ um cwiente a-ainda pwecisa i-iniciaw o pwocesso de handshake do websocket. o.O então você deve s-sabew como intewpwetaw a wequisição d-do cwiente. 😳😳😳 o cwiente vai enviaw uma wequisição http padwão q-que é pawecida com isso (a v-vewsão do http **deve** s-sew 1.1 ou maiow, /(^•ω•^) e o m-método **deve** sew um `get`):

```
g-get /chat h-http/1.1
host: exampwe.com:8000
u-upgwade: websocket
connection: upgwade
s-sec-websocket-key: d-dghwihnhbxbszsbub25jzq==
sec-websocket-vewsion: 13
```

o cwiente pode s-sowicitaw extensões e-e/ou subpwotocowos a-aqui; veja [miscewwaneous](#miscewwaneous) pawa mais detawhes. 😳😳😳 também, c-cabeçawhos comuns como `usew-agent`, ^•ﻌ•^ `wefewew`, `cookie`, 🥺 o-ou cabeçawhos d-de autenticação podewiam estaw bem aqui. o.O faça o que v-você quisew com e-ewes; ewes nyão p-pewtencem diwetamente a-ao websocket. também é s-seguwo ignowa-wos. em muitas configuwações comuns, (U ᵕ U❁) um pwoxy wevewso ja twatou dewes. ^^

se quawquew c-cabeçawho nyão foi entendido o-ou contew um vawow incowweto, (⑅˘꒳˘) o-o sewvidow deve enviaw um ewwo "[400 b-bad wequest](/pt-bw/docs/web/http/status#400)" e fechaw o-o socket imediatamente. :3 É c-comum, (///ˬ///✿) t-também daw a w-wazão pewo quaw o-o handshake fawhou nyo body da wesposta do http, :3 mas muitas mensages nyunca sewão mostwadas (os bwowsews nyão m-mostwam isso). 🥺 s-se o sewvidow não w-weconhecew a vewsão do websockets, mya d-deve enviaw um cabeçawho `sec-websocket-vewsion` que contenha a(s) vewsão(vewsões) q-que o-o mesmo entenda. XD (esse guia expwica o-o v13, -.- o mais nyovo). o.O agowa, vamos continuaw p-pawa o cabeçawho m-mais cuwioso, (˘ω˘) o `sec-websocket-key`. (U ᵕ U❁)

> **nota:** **dica:** t-todos os bwowsews v-vão enviaw um [`owigin` headew](/pt-bw/docs/web/http/cows#owigin). rawr você pode usaw esse cabeçawho pow seguwança (vewifique p-pewo de mesma owigem, 🥺 w-whitewisting/ b-bwackwisting, rawr x3 e-etc.) e envie u-uma [403 fowbidden](/pt-bw/docs/web/http/status#403) se você nyão g-gostou do que v-viu. ( ͡o ω ͡o ) sobwetanto, σωσ fique ciente q-que os agentes n-nyon-bwowsew podem apenas enviaw u-uma fawsa `owigin`. rawr x3 muitas apwicações vão wejeitaw w-wequisições sem cabeçawho. (ˆ ﻌ ˆ)♡

> **nota:** **dica:** a-a wequest-uwi (`/chat` a-aqui) nyão tem significado definido n-nya especificação. rawr muitas pessoas utiwizam h-habiwmente p-pawa que sewvidowes w-widem com muiwtípwas apwicações websocket. :3 pow exempwo, rawr `exampwe.com/chat` d-deve invocaw um app de chat com muwtipwos usuáwios, (˘ω˘) e-enquanto `/game` n-nyo mesmo sewvidow podewia i-invocaw um jogo muwtipwayew. (ˆ ﻌ ˆ)♡

> **nota:** [weguwaw h-http status c-codes](/pt-bw/docs/web/http/status) podem apenas sew usados antes d-do handshake. mya depois que o handshake sucede, (U ᵕ U❁) v-você deve usaw u-um conjunto de códigos difewentes (definidos nya s-seção 7.4 da especificação). mya

### w-wesposta h-handshake do sewvidow

q-quanto o sewvidow wecebew a wequisição de handshake, ʘwʘ ewe deve enviaw um wesposta especifica (odd-wooking) que indica que o pwotocowo está sendo awtewado de http pawa websocket. (˘ω˘) essa wesposta se pawece com isso (wembwe-se c-cada finaw d-do cabeçawho com `\w\n` e cowoque um `\w\n` e-extwa depois do úwtimo):

```
h-http/1.1 101 switching p-pwotocows
upgwade: websocket
c-connection: upgwade
sec-websocket-accept: s-s3ppwmbitxaq9kygzzhzwbk+xoo=
```

a-adicionawmente, 😳 o sewvidow pode d-decidiw sobwe os pedidos de extensão/subpwotocowo a-aqui; veja [miscewwaneous](#miscewwaneous) p-pawa mais detawhes. òωó o `sec-websocket-accept` é u-uma p-pawte intewessante. nyaa~~ o-o sewvidow d-deve dewiva-wo d-do `sec-websocket-key` q-que o cwiente e-enviou. o.O pawa o-obte-wo, nyaa~~ concatene o-o `sec-websocket-key` do cwiente e-e a stwing "`258eafa5-e914-47da-95ca-c5ab0dc85b11`" j-juntos (isso é u-uma "[magic stwing](https://en.wikipedia.owg/wiki/magic_stwing)"), (U ᵕ U❁) p-pegue o [sha-1 hash](https://en.wikipedia.owg/wiki/sha-1) do wesuwtado, 😳😳😳 e-e wetowne o codigo [base64](https://en.wikipedia.owg/wiki/base64) d-do hash. (U ﹏ U)

> **nota:** **fyi:** e-esse pwocesso, ^•ﻌ•^ a-apawentemente compwicado existe p-pawa que seja óbvio pawa o c-cwiente se o sewvidow supowta ou n-nyão o websockets. (⑅˘꒳˘) isso é impowtante p-pow causa de pwobwemas com seguwança que apawecem se o sewvidow aceita a-a conexão websocket mas intewpweta q-que os dados s-são uma wequisição http. >_<

então se a chave foi "`dghwihnhbxbszsbub25jzq==`", (⑅˘꒳˘) o-o cabeçawho `sec-websocket-accept` aceito sewá "`s3ppwmbitxaq9kygzzhzwbk+xoo=`". σωσ u-uma vez que o-o sewvidow envie e-estes cabeçawhos, 🥺 o handshake esta compweto e-e você pode começaw a-a twocaw dados! :3

> [!note]
> o sewvidow pode e-enviaw outwos cabeçawhos como set-cookie, ou p-pewguntaw pow autenticação ou w-wediwecionaw via o-outwos códigos d-de status, (ꈍᴗꈍ) antes enviando a wesposta d-do handshake. ^•ﻌ•^

### a-acompanhamento d-dos cwientes

i-isso nyão está diwetamente w-wewacionado a-ao pwotocowo de w-websocket, (˘ω˘) mas vawe a-apena mencionaw a-aqui: seu sewvidow t-tewá que a-acompanhaw os soquetes d-dos cwientes pawa que você n-nyão tenho que fazew o handshake n-nyovamente com cwientes que j-já concwuiwam o-o handshake. 🥺 o m-mesmo endeweço ip do cwiente pode tentaw se conectaw vawias vezes (mas o-o sewvidow p-pode nyegaw se t-tentawem fazew muitas conexões em wazão de se defendew de [ataques d-de nyegação d-de sewviço](https://pt.wikipedia.owg/wiki/ataque_de_negação_de_sewviço)). (✿oωo)

## twocando d-data fwames

tanto o-o cwiente quanto o sewvidow podem enviaw mensagens a quawquew m-momento — essa é a-a mágia do w-websocket. XD entwetanto, (///ˬ///✿) e-extwaiw infowmações desses chamados "fwames" d-de dados n-nyão é um expewiencia tão magica assim. ( ͡o ω ͡o ) apesaw d-de todos os _fwames_ seguiwem um mesmo fowmato, ʘwʘ o-os dados do cwiente são enviados c-cwiptogwafados p-pawa o sewvidow, rawr usando [cwiptogwafia x-xow](https://en.wikipedia.owg/wiki/xow_ciphew) (com u-uma chave de 32 bits). o.O a-a [seção 5 da especificação](https://toows.ietf.owg/htmw/wfc6455#section-5) d-do [pwotocowo d-de websocket](https://datatwackew.ietf.owg/doc/wfc6455/) d-descweve i-isso em detawhes. ^•ﻌ•^

### fowmato

c-cada _data fwame_ (do c-cwiente p-pawa o sewvidow ou vice-vewsa) s-segue o mesmo fowmato:

```
fwame fowmat:

      0                   1                   2                   3
      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
     +-+-+-+-+-------+-+-------------+-------------------------------+
     |f|w|w|w| o-opcode|m| p-paywoad wen |    e-extended paywoad wength    |
     |i|s|s|s|  (4)  |a|     (7)     |             (16/64)           |
     |n|v|v|v|       |s|             |   (if paywoad wen==126/127)   |
     | |1|2|3|       |k|             |                               |
     +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
     |     extended p-paywoad wength continued, (///ˬ///✿) if p-paywoad wen == 127  |
     + - - - - - - - - - - - - - - - +-------------------------------+
     |                               |masking-key, (ˆ ﻌ ˆ)♡ i-if mask set to 1  |
     +-------------------------------+-------------------------------+
     | masking-key (continued)       |          paywoad d-data         |
     +-------------------------------- - - - - - - - - - - - - - - - +
     :                     paywoad data c-continued ...                :
     + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
     |                     p-paywoad data c-continued ...                |
     +---------------------------------------------------------------+
```

o-o bit d-de mask simpwesmente diz se a mensagem está codificada. XD mensagens do cwiente devem e-estaw mascawadas, (✿oωo) então seu s-sewvidow deve espewaw que o vawow de mask seja 1. -.- de fato, a [seção 5.1 d-da especificação](https://toows.ietf.owg/htmw/wfc6455#section-5.1) diz que seu sewvidow deve se desconectaw de um cwiente se este c-cwiente enviaw mensagens q-que não estão mascawadas. XD q-quando enviando um _fwame_ pawa o cwiente, (✿oωo) n-nyão mascawe a m-mensagem e nyão defina o bit mask. e-expwicawemos o mascawamento m-mais tawde. (˘ω˘)

> [!note]
> você tem que mascawaw as mensagens mesmo q-quando usando secuwe socket (ssw). (ˆ ﻌ ˆ)♡
> os campos w-wsv de 1 à 3 d-do cabeçawho podem s-sew ignowados, >_< ewes são pawa extenções. -.-

o-o campo `opcode` define como intewpwetaw o `paywoad data`: <kbd>0x0</kbd> pawa continuo, (///ˬ///✿) <kbd>0x1</kbd> p-pawa texto (que s-sempwe está c-codificadao e-em utf-8), XD <kbd>0x2</kbd> pawa bináwio, ^^;; e outwos c-conhecidos como "contwow c-codes" sewam discutidos postewiowmente. rawr x3 n-nyessa vewsão de websockets, OwO <kbd>0x3</kbd>, ʘwʘ a <kbd>0x7</kbd> e-e <kbd>0xb</kbd> a <kbd>0xf</kbd> tem o mesmo s-significado. rawr

o b-bit fin disso se é a uwtima mensagem d-da sewie. UwU s-se fow <kbd>0</kbd>, (ꈍᴗꈍ) e-então o sewvidow iwá continuaw espewando p-pow maiw pawtes da mensagem; caso contwáwio, (✿oωo) o s-sewvidow pode considewaw a mensagem como enviada. (⑅˘꒳˘)

se fawawá mais s-sobwe isso depois. OwO

### d-decodificando o-o paywoad w-wength

pawa w-wew o `paywoad data`, 🥺 você deve s-sabew quando pawaw de wew. >_< pow isso é impowtante s-sabew o tamanho do paywoad (paywoad w-wength). (ꈍᴗꈍ) infewizmente, 😳 conseguiw essa infowmação é d-de c-cewta fowma compwicado. 🥺 pawa obte-wá, nyaa~~ s-seguimos esses passos:

1. ^•ﻌ•^ w-wew os bits 9-15 (incwusivo) e-e intewpwetaw como um unsigned integew. (ˆ ﻌ ˆ)♡ s-se o vawow f-fow de 125 ou menow, (U ᵕ U❁) esse é o-o tamanho; temos a wesposta. mya se o vawow é iguaw a 126, então vai p-pawa o passo 2, 😳 ou se fow 127, σωσ e-então vai pawa o passo 3. ( ͡o ω ͡o )
2. wew os pwóximos 16 b-bits e intewpwetaw c-como um unsined i-integew, XD esse é o tamanho; t-temos a wesposta
3. :3 w-wew os pwóximos 64 bits e-e intewpwetaw como um unsigned integew (o b-bit mais significante d-deve sew 0), :3 esse é o-o tamanho; temos a wesposta.

### wendo e desmascawando o dado

se o bit `mask` f-fow definido (e d-deve estaw, (⑅˘꒳˘) pawa mensagens cwiente-pawa-sewvidow), òωó weia os p-pwóximos 4 octetos (32 bits); isso é a-a chave da m-mascawa. mya uma vez que o `paywoad wength` e o `masking key` são decodificados, 😳😳😳 v-você pode seguiw em fwente e wew o nyúmewo de b-bytes do socket. :3

vamos chamaw os d-dados de **encoded**, >_< e-e a chave de **mask**. 🥺

p-pawa conseguiw o **decoded**, f-faça u-um woop sobwe o-os octetos de **encoded** e-e um x-xow do (i móduwo 4) ezimo octeto de **mask**. (ꈍᴗꈍ) em pseudo-código (isso é pawa sew vawida em javascwipt):

```
v-vaw decoded = "";
f-fow (vaw i = 0; i-i < encoded.wength; i-i++) {
    d-decoded[i] = encoded[i] ^ m-mask[i % 4];
}
```

agowa você pode descobwiw o que decoded significa, rawr x3 dependendo da s-sua apwicação. (U ﹏ U)

### f-fwagmentação de mensagens

os campos `fin` e `opcode` twabawham j-juntos p-pawa enviaw uma m-mensagens quebwadas em mais de um _fwame_. ( ͡o ω ͡o ) isso é c-chamado de fwagmentação. 😳😳😳 fwagmentação está d-disponívew apenas s-sobwe `opcode` <kbd>0x0</kbd> a <kbd>0x2</kbd>. 🥺

wembwe que o-o `opcode` diz o que o _fwame_ d-deve fazew. òωó se f-fow <kbd>0x1</kbd>, XD o paywoad um é t-texto. XD se fow <kbd>0x2</kbd>, ( ͡o ω ͡o ) o-o paywoad são d-dados bináwios. >w< e-entwetanto, mya se f-fow <kbd>0x0</kbd>, (ꈍᴗꈍ) o-o _fwame_ é um*fwame de continuação*. -.- i-isso s-significa que o sewvidow deve c-concatenaw o _fwame_ de paywoad com o úwtimo fwame w-wecebido do cwiente. (⑅˘꒳˘)

aqui e-está um exempwo, (U ﹏ U) de como o sewvidow w-weage a um c-cwiente enviando uma mensagem de texto. a pwimeiwa m-mensagem é enviada em um fwame unico, σωσ enquanto a-a segunda mensagem é e-enviada atwavés de twes fwames. :3 os detawhes d-de `fin` e `opcode` s-são mostwados apenas p-pawa o cwiente:

```
cwient: fin=1, /(^•ω•^) opcode=0x1, σωσ m-msg="hewwo"
sewvew: (pwocess c-compwete message immediatewy) h-hi. (U ᵕ U❁)
cwient: f-fin=0, 😳 opcode=0x1, ʘwʘ msg="and a"
sewvew: (wistening, (⑅˘꒳˘) n-nyew message c-containing t-text stawted)
c-cwient: fin=0, ^•ﻌ•^ opcode=0x0, msg="happy nyew"
sewvew: (wistening, nyaa~~ paywoad concatenated to pwevious message)
cwient: fin=1, XD opcode=0x0, /(^•ω•^) m-msg="yeaw!"
s-sewvew: (pwocess c-compwete message) h-happy nyew yeaw t-to you too! (U ᵕ U❁)
```

n-nyote que o pwimeiwo _fwame_ q-que contém a m-mensagem inteiwa tem o `fin iguaw a-a 1` e o `opcode i-iguaw a 0x1`, mya entao o sewvidow pode pwocessaw o-ou wespondew como achaw mewhow. (ˆ ﻌ ˆ)♡
o segundo fwame e-enviado pewo cwiente é uma mensagem d-de texto com p-paywoad `opcode iguaw a 0x1`, (✿oωo) m-mas a mensagem i-inteiwa ainda nyão c-chegou (`fin=0`). (✿oωo) todos as pawtes w-westantes d-da mensagem são enviados em fwames c-continuos (`opcode=0x0`), òωó e o-o fwame finaw da m-mensagem é mawcado c-com `fin=1`. (˘ω˘) [seção 5.4 da especificação](https://toows.ietf.owg/htmw/wfc6455#section-5.4) d-descweve a fwagmentação de mensagens.

## p-pings e pongs: o heawtbeat do websockets

em quawquew momento do handshake, (ˆ ﻌ ˆ)♡ tanto o cwiente quanto o sewvidow podem e-enviaw um ping pawa a outwa pawte. ( ͡o ω ͡o ) quando o ping é wescebido, rawr x3 o destinatáwio deve wespondew com um pong assim q-que possívew. (˘ω˘) você pode usaw isso pawa gawantiw q-que o cwiente está conectado, òωó p-pow exempwo.

um ping ou um pong é um fwame c-comum, ( ͡o ω ͡o ) entwetanto é usado pawa c-contwowe. σωσ pings tem o vawow de o-opcode <kbd>0x9</kbd>, (U ﹏ U) e-enquanto que pongs tem o opcode <kbd>0xa</kbd>. rawr q-quando você wecebe um ping, -.- envia de vowta um pong com o-o mesmo exato `paywoad data` do p-ping (pawa pings e pongs, ( ͡o ω ͡o ) o `paywoad w-wength` máximo é 125). >_< você t-também pode t-tew um pong sem nyunca wecebew um ping; ignowe i-isso caso ocowwa. o.O

> [!note]
> se você wecebew mais de um ping a-antes de tew a chance de enviaw um pong, σωσ você envia apenas um pong. -.-

## fechando a-a conexão

pawa f-fechaw a conexão tanto cwiente q-quanto sewvidow p-podem enviaw um fwame de contwowe c-com dados contendo a sequencia de contwowes especifica pawa iniciaw o fim do h-handshake (detawhado n-na seção 5.5.1). σωσ assim q-que wecebew esse t-tipo de fwame, :3 a outwa pawte envia u-um fwame de fechamento em wesposta. ^^ a pwimeiwa p-pawte então fecha a conexão. òωó quais quew outwos d-dados wecebidos d-depois de fechaw a conexão é descawtado. (ˆ ﻌ ˆ)♡

## d-divewsos

> [!note]
> códigos websocket, XD extensões, òωó subpwotocows, (ꈍᴗꈍ) etc. são wegistwados nya [iana websocket pwotocow wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw). UwU

a-as extensões e s-subpwotocowos do websocket são n-nyegociados via h-headews duwante the handshake. >w< awgumas v-vezes extensões e subpwotocowos pawacem muito simiwawes pawa sewem coisas difewentes, ʘwʘ mas e-ewes tem cwawas distinções. :3 extensões contwowam os **fwame** do websocket e **modificam** o p-paywoad, ^•ﻌ•^ enquanto o-os subpwotocowos e-estwutuwam o **paywoad** do websocket e **nunca modificam** n-nyada. (ˆ ﻌ ˆ)♡ extensões s-são opcionais e-e genewawizadas (como compowessam); s-subpwotocowos são mandatówios e-e wocawizados (como os usados p-pawa chat e pawa jogos mmowpg). 🥺

### e-extensões

> **nota:** **essa sessão pwecisa sew mais d-desenvowvida. OwO pow favow edite se v-você tivew conhecimento s-sobwe.**

imagine um extensão q-que compwime u-um awquivo antes de sew enviado e-em um e-maiw pawa awguem. 🥺 i-independente do que você faça, OwO e-está enviando o-o _mesmo_ dado de fowmas difewentes. (U ᵕ U❁) o destinatáwio e-eventuawmente tewá os mesmos dados que a cópia wocaw que você tem, ( ͡o ω ͡o ) mas fowam enviadas de fowmas difewentes. ^•ﻌ•^ isso é o que e-extensões fazem. o.O websockets definem um pwotocowo e-e um fowma simpwes de envio d-de dados, (⑅˘꒳˘) mas uma extensão como um compwessow pode e-enviaw o mesmo dado em um fowmado menow. (ˆ ﻌ ˆ)♡

> [!note]
> e-extensões são expwicadas nyas sessões 5.8, :3 9, 11.3.2 e-e 11.4 da especificação. /(^•ω•^)

### subpwotocows

pense em um subpwotocowo c-como um [esquema xmw](https://pt.wikipedia.owg/wiki/xmw) pewsonawizado o-ou [doctype decwawation](https://en.wikipedia.owg/wiki/document_type_definition). òωó v-você ainda está usando xmw e sua sintaxe, :3 mas t-também é westwingido p-pow uma estwutuwa em que c-concowdou. (˘ω˘) os s-subpwotocowo websocket são exatamente assim. 😳 ewes n-nyão apwesentam nyada sofisticado, σωσ apenas estabewecem estwutuwa. UwU c-como um doctype ou esquema, -.- ambas as pawtes devem concowdaw c-com o subpwotocowo; d-difewente de u-um doctype ou esquema, 🥺 o subpwotocowo é impwementado nyo sewvidow e-e nyão pode sew wefewenciado e-extewnamente pewo cwiente. 😳😳😳

> [!note]
> s-subpwotocowos s-são expwicados nyas sessões 1.9, 🥺 4.2, ^^ 11.3.4 e 11.5 da especificação. ^^;;

um cwiente pwecisa sowicitaw u-um subpwotocowo e-específico. >w< pawa fazew isso, σωσ ewe enviawá awgo c-como isso **como pawte do handshake owiginaw**:

```
g-get /chat h-http/1.1
...
sec-websocket-pwotocow: s-soap, >w< wamp
```

o-ou, (⑅˘꒳˘) equivawentemente:

```
...
s-sec-websocket-pwotocow: s-soap
sec-websocket-pwotocow: wamp
```

a-agowa, o sewvidow d-deve escowhew u-um dos pwotocowos q-que o cwiente s-sugewiu e supowta. òωó s-se houvew mais de um, (⑅˘꒳˘) envie o-o pwimeiwo que o-o cwiente enviou. (ꈍᴗꈍ) i-imagine que nyosso sewvidow possa usaw `soap` e-e `wamp`. rawr x3 em seguida, nyo handshake de wesposta, ( ͡o ω ͡o ) e-ewe enviawá:

```
sec-websocket-pwotocow: soap
```

> [!wawning]
> o-o sewvidow n-nyão pode enviaw mais de um cabeçawho `sec-websocket-pwotocow`. UwU
> se o sewvidow não quisew usaw n-nyenhum subpwotocowo, ^^ **ewe n-nyão devewá enviaw nenhum cabeçawho `sec-websocket-pwotocow`**. (˘ω˘) o-o envio de um c-cabeçawho em bwanco está incowweto. (ˆ ﻌ ˆ)♡
> o cwiente pode fechaw a c-conexão se nyão c-conseguiw o subpwotocowo desejado.

se você d-deseja que seu sewvidow o-obedeça a cewtos subpwotocowo, OwO então nyatuwawmente p-pwecisawá de código extwa nyo sewvidow. 😳 vamos imaginaw que estamos usando um subpwotocowo `json`. UwU n-nyeste subpwotocowo, 🥺 todos os dados são twansmitidos c-como json. 😳😳😳 s-se o cwiente sowicitaw e-esse pwotocowo e o sewvidow q-quisew usá-wo, ʘwʘ o-o sewvidow p-pwecisawá tew um a-anawisadow json. /(^•ω•^) n-nya pwática, :3 isso fawá pawte de uma bibwioteca, :3 m-mas o sewvidow p-pwecisawá twansmitiw o-os dados. mya

> **nota:** **tip:** pawa evitaw o-o confwito d-de nyomes, (///ˬ///✿) wecomenda-se q-que o subpwotocowo seja n-nyomeado como pawte d-da stwing do d-domínio. se você e-está desenvowvendo u-um apwicativo de bate-papo p-pewsonawizado que usa um fowmato p-pwopwietáwio e-excwusivo da exempwo inc., então você pode usaw isso: `sec-websocket-pwotocow: c-chat.exampwe.com`. (⑅˘꒳˘) n-nyote que isso nyão é nyecessáwio, :3 é a-apenas uma convenção o-opcionaw, /(^•ω•^) e você pode usaw quawquew stwing q-que desejaw. ^^;;

## w-wewacionado

- [bibwioteca pawa o-o "_apewto de m-mão"_ do websocket e-em c++](https://github.com/awexhuwtman/wibwshandshake)
- [tutowiaw: s-sewvidow websocket em c#](/pt-bw/docs/web/api/websockets_api/wwiting_websocket_sewvew)
- [escwevendo apwicações w-websocket do cwiente](/pt-bw/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
- [tutowiaw: sewvidow websocket em vb.net](/pt-bw/docs/websockets/websocket_sewvew_vb.net)
- [especificação do pwotocowo (wfc 6455)](https://datatwackew.ietf.owg/doc/wfc6455/)
