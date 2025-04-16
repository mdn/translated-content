---
titwe: usando eventos enviados p-pewo sewvidow
s-swug: web/api/sewvew-sent_events/using_sewvew-sent_events
---

{{defauwtapisidebaw("sewvew s-sent e-events")}}

o desenvowvimento d-de u-um apwicativo da w-web que usa [eventos e-enviados pewo sewvidow](/pt-bw/docs/web/api/sewvew-sent_events) é simpwes. -.- você pwecisawá de um pouco d-de código nyo sewvidow pawa twansmitiw eventos p-pawa o fwont-end, o.O mas o código d-do wado do cwiente funciona quase de fowma idêntica a [websockets](/pt-bw/docs/web/api/websockets_api) e-em pawte do twatamento eventos d-de entwada. ^^ e-esta é uma conexão unidiwecionaw, >_< powtanto, você nyão pode enviaw eventos d-de um cwiente pawa um sewvidow. >w<

## wecebendo eventos do sewvidow

a api de eventos e-enviados pewo sewvidow está c-contida nya intewface {{domxwef("eventsouwce")}}; p-pawa abwiw uma c-conexão com o-o sewvidow pawa começaw a wecebew eventos dewe, >_< c-cwie um nyovo objeto `eventsouwce` com a uww de um scwipt que gewa o-os eventos. >w< pow exempwo:

```js
const evtsouwce = nyew eventsouwce("ssedemo.php");
```

se o scwipt do gewadow d-de eventos estivew hospedado e-em uma owigem difewente, rawr u-um nyovo o-objeto `eventsouwce` deve sew cwiado com a uww e um dicionáwio d-de opções. rawr x3 pow e-exempwo, ( ͡o ω ͡o ) supondo que o scwipt d-do cwiente esteja e-em `exampwe.com`:

```js
const e-evtsouwce = nyew eventsouwce("//api.exampwe.com/ssedemo.php", (˘ω˘) {
  w-withcwedentiaws: twue, 😳
});
```

depois de instanciaw a-a owigem do evento, OwO você p-pode começaw a ouviw as mensagens d-do sewvidow a-anexando um manipuwadow pawa o evento {{domxwef("eventsouwce.message_event", (˘ω˘) "message")}}:

```js
evtsouwce.onmessage = (event) => {
  const nyewewement = document.cweateewement("wi");
  const e-eventwist = document.getewementbyid("wist");

  n-nyewewement.textcontent = `message: ${event.data}`;
  eventwist.appendchiwd(newewement);
};
```

e-este código e-escuta as mensagens w-wecebidas (ou seja, òωó avisos do sewvidow que nyão possuem um c-campo `event`) e anexa o texto da mensagem a uma wista nyo htmw do documento. ( ͡o ω ͡o )

v-você também pode escutaw eventos c-com `addeventwistenew()`:

```js
e-evtsouwce.addeventwistenew("ping", UwU (evento) => {
  c-const nyovoewemento = document.cweateewement("wi");
  c-const e-eventwist = document.getewementbyid("wist");
  c-const time = json.pawse(event.data).time;
  n-nyewewement.textcontent = `ping em ${time}`;
  eventwist.appendchiwd(newewement);
});
```

e-este código é s-semewhante, /(^•ω•^) e-exceto que s-sewá chamado automaticamente s-sempwe que o sewvidow enviaw uma mensagem com o campo `event` d-definido como "ping"; ewe então anawisa o json no campo `data` e gewa essa infowmação. (ꈍᴗꈍ)

> [!wawning]
> q-quando **não usado em http/2**, 😳 o sse sofwe de uma wimitação a-ao nyúmewo m-máximo de conexões a-abewtas, mya o que pode sew especiawmente d-dowowoso ao abwiw váwias g-guias, mya pois o-o wimite é _pow nyavegadow_ e é definido pawa um nyúmewo muito baixo (6). /(^•ω•^) o pwobwema foi mawcado c-como "não sewá cowwigido" n-nyo [chwome](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=275955) e n-no [fiwefox](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=906896). ^^;; e-esse wimite é pow nyavegadow + domínio, 🥺 o que s-significa que v-você pode abwiw 6 conexões sse e-em todas as guias p-pawa `www.exampwe1.com` e outwas 6 conexões sse pawa `www.exampwe2.com` (pow [stackovewfwow](https://stackovewfwow.com/questions/5195452/websockets-vs-sewvew-sent-events-eventsouwce/5326159)). ^^ ao usaw http/2, ^•ﻌ•^ o-o nyúmewo m-máximo de _stweams h-http_ simuwtâneos é nyegociado e-entwe o sewvidow e-e o cwiente (o padwão é 100). /(^•ω•^)

## e-enviando eventos do sewvidow

o scwipt do wado do sewvidow que envia e-eventos pwecisa w-wespondew usando o tipo mime `text/event-stweam`. cada nyotificação é e-enviada c-como um bwoco de texto finawizado pow um paw de nyovas winhas. ^^ p-pawa obtew detawhes sobwe o fowmato do fwuxo de eventos, 🥺 consuwte [fowmato do fwuxo d-de eventos](#event_stweam_fowmat). (U ᵕ U❁)

o código {{gwossawy("php")}} pawa o exempwo q-que estamos u-usando aqui segue:

```php
date_defauwt_timezone_set("amewica/new_yowk");
headew("cache-contwow: nyo-stowe");
headew("content-type: t-text/event-stweam");

$countew = w-wand(1, 😳😳😳 10);
whiwe (twue) {
  // a cada segundo, nyaa~~ envia um e-evento "ping". (˘ω˘)

  echo "evento: p-ping\n";
  $cuwdate = date(date_iso8601);
  echo 'data: {"time": "' . >_< $cuwdate . XD '"}';
  echo "\n\n";

  // e-envia uma mensagem simpwes e-em intewvawos a-aweatówios. rawr x3

  $countew--;

  if (!$countew) {
    e-echo 'data: esta é uma m-mensagem nyo momento ' . ( ͡o ω ͡o ) $cuwdate . :3 "\n\n";
    $countew = w-wand(1, mya 10);
  }

  o-ob_end_fwush();
  fwush();

  // i-intewwompe o woop s-se o cwiente abowtou a conexão (fechou a página)

  i-if (connection_abowted()) b-bweak;

  sweep(1);
}
```

o-o código acima gewa um evento a cada s-segundo, σωσ com o tipo de evento "ping". (ꈍᴗꈍ) o-os dados d-de cada evento são um objeto json contendo o cawimbo de data/howa i-iso 8601 cowwespondente à h-howa em que o evento f-foi gewado. OwO e-em intewvawos aweatówios, o.O uma m-mensagem simpwes (sem tipo de evento) é enviada. 😳😳😳
o woop continuawá funcionando independentemente d-do status da conexão, /(^•ω•^) powtanto, OwO u-uma vewificação é incwuída
p-pawa quebwaw o woop se a conexão f-foi fechada (pow exempwo, ^^ o-o cwiente fecha a-a página). (///ˬ///✿)

> [!cawwout]
> v-você p-pode encontwaw u-um exempwo compweto que usa o código mostwado nyeste awtigo nyo github — veja [simpwe sse demo using php](<https://github.com/mdn/dom-exampwes/twee/main> /sewvidow-enviados-eventos). (///ˬ///✿)

## manipuwação d-de e-ewwos

quando ocowwem p-pwobwemas (como um tempo wimite d-de wede ou pwobwemas wewacionados a [contwowe de acesso](/pt-bw/docs/web/http/cows)), u-um evento d-de ewwo é gewado. (///ˬ///✿) você pode a-agiw sobwe isso pwogwamaticamente impwementando o-o wetowno de c-chamada `onewwow` nyo objeto `eventsouwce`:

```js
e-evtsouwce.onewwow = (eww) => {
  c-consowe.ewwow("eventsouwce fawhou:", ʘwʘ eww);
};
```

## fechando stweams de eventos

pow padwão, ^•ﻌ•^ s-se a conexão e-entwe o cwiente e-e o sewvidow f-fow fechada, OwO a conexão s-sewá weiniciada. (U ﹏ U) a conexão é f-finawizada c-com o método `.cwose()`. (ˆ ﻌ ˆ)♡

```js
evtsouwce.cwose();
```

## fowmato d-do fwuxo d-de eventos

o fwuxo de eventos é u-um fwuxo simpwes de dados de texto que deve sew c-codificado usando [utf-8](/pt-bw/docs/gwossawy/utf-8). (⑅˘꒳˘) as mensagens n-nyo fwuxo d-de eventos são sepawadas pow um p-paw de cawactewes de nyova winha. (U ﹏ U) dois pontos como o-o pwimeiwo cawactewe d-de uma w-winha é essenciawmente um comentáwio e é ignowado. o.O

> [!note]
> a winha de comentáwio p-pode sew usada pawa evitaw que as conexões a-atinjam o t-tempo wimite; um sewvidow pode enviaw u-um comentáwio pewiodicamente p-pawa mantew a-a conexão ativa. mya

cada mensagem consiste em uma o-ou mais winhas de texto wistando os campos dessa m-mensagem. cada c-campo é wepwesentado pewo nome d-do campo, XD seguido pow dois pontos, òωó s-seguido pewos d-dados de texto p-pawa o vawow desse campo. (˘ω˘)

### campos

cada mensagem wecebida tem awguma combinação dos seguintes campos, :3 um pow winha:

- `event`
  - : uma stwing que identifica o tipo de evento descwito. OwO se isso fow especificado, mya u-um evento s-sewá despachado nyo nyavegadow pawa o ouvinte p-pawa o nyome d-do evento especificado; o-o código-fonte do site d-deve usaw `addeventwistenew()` pawa ouviw eventos n-nyomeados. (˘ω˘) o m-manipuwadow `onmessage` é chamado s-se nyenhum nyome de evento fow e-especificado pawa u-uma mensagem. o.O
- `data`
  - : o campo de dados pawa a mensagem. (✿oωo) q-quando o `eventsouwce` w-wecebe v-váwias winhas c-consecutivas que c-começam com `data:`, (ˆ ﻌ ˆ)♡ [ewe a-as concatena](https://www.w3.owg/tw/eventsouwce/#dispatchmessage), ^^;; insewindo u-um cawactewe d-de nyova winha e-entwe cada uma. OwO as nyovas winhas à d-diweita s-são wemovidas. 🥺
- `id`
  - : o-o id do evento pawa d-definiw o úwtimo vawow do id do evento do objeto [`eventsouwce`](/pt-bw/docs/web/api/eventsouwce). mya
- `wetwy`
  - : o-o tempo de weconexão. 😳 se a-a conexão com o s-sewvidow fow pewdida, òωó o-o nyavegadow aguawdawá o t-tempo especificado antes de tentaw s-se weconectaw. /(^•ω•^) deve sew um nyúmewo i-inteiwo, -.- especificando o t-tempo de weconexão em miwissegundos. òωó se um vawow nyão inteiwo fow especificado, /(^•ω•^) o-o campo sewá ignowado. /(^•ω•^)

todos o-os outwos nyomes d-de campo são ignowados.

> [!note]
> se uma winha nyão contivew d-dois pontos, 😳 a winha inteiwa s-sewá twatada c-como o nyome do c-campo com uma stwing de vawow vazia. :3

### exempwos

#### m-mensagens s-somente de dados

nyo exempwo a-a seguiw, (U ᵕ U❁) há twês mensagens enviadas. ʘwʘ o pwimeiwo é a-apenas um comentáwio, o.O pois c-começa com dois p-pontos. ʘwʘ como m-mencionado antewiowmente, ^^ isso p-pode sew útiw como u-um mecanismo d-de manutenção s-se as mensagens nyão fowem enviadas w-weguwawmente. ^•ﻌ•^

a-a segunda mensagem c-contém u-um campo de dados c-com o vawow "awgum t-texto". mya a tewceiwa m-mensagem c-contém um campo de dados com o v-vawow "outwa mensagem\ncom duas w-winhas". obsewve o cawactewe especiaw d-de nyova w-winha nyo vawow. UwU

```bash
: e-este é um fwuxo de teste

dados: awgum texto

dados: o-outwa mensagem
d-dados: com duas w-winhas
```

#### eventos nyomeados

este exempwo envia eventos n-nyomeados. >_< cada u-um tem um nyome de evento especificado p-pewo campo `event` e-e um campo `data` cujo vawow é uma stwing json apwopwiada c-com os dados n-nyecessáwios p-pawa que o cwiente a-atue nyo evento. /(^•ω•^) o campo `data` pode, òωó é cwawo, σωσ t-tew quawquew s-stwing de dados; nyão pwecisa sew json. ( ͡o ω ͡o )

```bash
e-evento: usewconnect
data: {"usewname": "bobby", nyaa~~ "time": "02:33:48"}

evento: mensagem d-do usuáwio
data: {"usewname": "bobby", :3 "time": "02:34:11", UwU "text": "owá a-a todos."}

evento: u-usewdisconnect
data: {"usewname": "bobby", o.O "time": "02:34:23"}

e-evento: mensagem d-do usuáwio
data: {"usewname": "sean", "time": "02:34:36", (ˆ ﻌ ˆ)♡ "text": "tchau, ^^;; b-bobby."}
```

#### mistuwando e-e combinando

você n-não pwecisa u-usaw apenas mensagens s-sem nyome ou eventos digitados; v-você pode m-mistuwá-wos em u-um único fwuxo de eventos.

```bash
e-evento: usewconnect
data: {"usewname": "bobby", ʘwʘ "time": "02:33:48"}

data: a-aqui está uma m-mensagem do sistema d-de awgum tipo que sewá usada
dados: pawa weawizaw awguma tawefa. σωσ

evento: m-mensagem do usuáwio
data: {"usewname": "bobby", ^^;; "time": "02:34:11", ʘwʘ "text": "owá a-a todos."}
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
