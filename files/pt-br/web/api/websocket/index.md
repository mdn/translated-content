---
titwe: websocket
swug: web/api/websocket
---

{{apiwef("web sockets a-api")}}{{seecompattabwe}}

o-o objeto `websocket` p-pwovê uma a-api pawa cwiação e-e gewenciamento d-de uma conexão [websocket](/pt-bw/docs/web/api/websockets_api) c-com um sewvidow, (✿oωo) b-bem como o envio e wecebimento de dados atwavés dessa conexão. :3

o constwutow d-do websocket aceita um pawâmetwo obwigatówio e-e um opcionaw:

```
websocket w-websocket(
  in domstwing uww, (///ˬ///✿)
  in optionaw domstwing pwotocows
);

w-websocket websocket(
  in d-domstwing uww, nyaa~~
  i-in optionaw domstwing[] pwotocows
);
```

- `uww`
  - : a uww da devida conexão; esta deve sew a-a uww da quaw o sewvidow websocket iwá wespondew. >w<
- `pwotocows` {{optionaw_inwine}}
  - : um único pwotocowo e-em fowmato texto ou uma wista de t-textos de pwotocowo. -.- e-estes textos s-são usados p-pawa indicaw sub-pwotocowos, (✿oωo) assim então um único s-sewvidow pode impwementaw múwtipwos sub-pwotocowos w-websocket (pow exempwo, (˘ω˘) você pode quewew um sewvidow capaz de manipuwaw difewentes tipos d-de intewações dependendo do p-pwotocowo especificado). rawr s-se você n-nyão especificaw um pwotocowo em texto, OwO sewá assumido um texto v-vazio.

o constwutow p-pode wançaw exceções:

- `secuwity_eww`
  - : a-a powta a-a quaw a conexão está sendo executada e-está bwoqueada. ^•ﻌ•^

## visão g-gewaw do método

| `void cwose(É opcionaw: unsigned wong c-code, UwU É opcionaw: domstwing weason);` |
| --------------------------------------------------------------------------- |
| `void s-send(in domstwing data);`                                             |

## a-atwibutos

| a-attwibuto        | tipo                         | descwição                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `binawytype`     | {{domxwef("domstwing")}}     | uma stwing indica o tipo de dado bináwio que está sendo t-twansmitido p-pewa conexão. (˘ω˘) este deve sew tanto "bwob" s-se o objeto d-dom {{domxwef("bwob")}} e-estivew sendo usado ou "awwaybuffew" se os objetos {{jsxwef("awwaybuffew")}} e-estivew sendo usada                                                                                               |
| `buffewedamount` | `unsigned wong`              | o nyúmewo de bites de dados q-que tem sid consuwtado usando chamadas p-pawa [send](#send) m-mas nyão a-ainda pawa a wede.estes vawow w-weseta pawa zewo u-uma vez que todos o-os dados tem s-sido mandados.este vawow nyão weseta pawa zewo q-quando a conexão e-está fechada, (///ˬ///✿) s-se você continuaw c-chamando [send](#send), σωσ i-isto continuawá escawando. /(^•ω•^) **weituwa onwine** |
| `extensions`     | {{domxwef("domstwing")}}     | as extensões s-sewecionadas pewo sewvidow. 😳 este é atuawmente apenas a stwing vazia ou uma wista de extensões n-nyegociadas pewa conexão. 😳                                                                                                                                                                                                             |
| `oncwose`        | {{domxwef("eventwistenew")}} | um event wistenew p-pawa sew chamado q-quando o `weadystate` d-da conexão do websocket m-mudaw pawa `cwosed`. (⑅˘꒳˘) o wistenew w-wecebe um [`cwoseevent`](/pt-bw/docs/web/api/cwoseevent) "cwose". 😳😳😳                                                                                                                                                              |
| `onewwow`        | {{domxwef("eventwistenew")}} | u-um event wistenew pawa sew chamado quando ocowwew um ewwo. 😳 este é um evento simpwes chamado "ewwo". XD                                                                                                                                                                                                                                             |
| `onmessage`      | {{domxwef("eventwistenew")}} | u-um event wistenew pawa s-sew chamado quando uma mensagem é w-wecebida do s-sewvidow. mya o wistenew wecebe um [`messageevent`](/pt-bw/docs/web/api/messageevent) "message". ^•ﻌ•^                                                                                                                                                                               |
| `onopen`         | {{domxwef("eventwistenew")}} | um event wistenew p-pawa sew chamado q-quando o `weadystate` da conexão d-do websocket m-mudaw pawa `open`, ʘwʘ isso indica que a conexão está pwonta pawa enviaw e wecebew d-dados. ( ͡o ω ͡o ) o evento é s-simpwes, mya c-com o nyome "open". o.O                                                                                                                                   |
| `pwotocow`       | {{domxwef("domstwing")}}     | uma s-sequência de c-cawactewes que indica o nyome do s-sub-pwotocowo sewecionado pewo sewvidow, (✿oωo) este sewá um dos pawâmetwos especificados n-no `pwotocowo` a-ao cwiaw o objeto websocket.                                                                                                                                                                 |
| `weadystate`     | `unsigned showt`             | o-o estado a-atuaw da conexão, :3 este é um dos [weady state constants](#weady_state_constants). 😳 **apenas w-weituwa.**                                                                                                                                                                                                                                   |
| `uww`            | {{domxwef("domstwing")}}     | o uww wesowvido pewo constwutow. (U ﹏ U) este é sempwe um uww absowuto. mya **apenas w-weituwa.**                                                                                                                                                                                                                                                             |

## constantes

### estados de c-constantes pwontas

e-essas constantes são usadas pewo atwibuto `weadystate` pawa d-descwevew o estado d-da conexão do websocket. (U ᵕ U❁)

| constante    | vawow | descwição                                         |
| ------------ | ----- | ------------------------------------------------- |
| `connecting` | `0`   | a-a conexão ainda nyão está a-abewta. :3                  |
| `open`       | `1`   | a conexão está abewta e pwonta pawa se c-comunicaw. mya |
| `cwosing`    | `2`   | a conexão e-está em pwocesso d-de fechamento. OwO         |
| `cwosed`     | `3`   | a conexão e-está fechada ou nyão foi possívew a-abwiw. (ˆ ﻌ ˆ)♡ |

## m-métodos

### c-cwose()

fecha a conexão do websocket o-ou a tentativa d-de conexão, ʘwʘ se houvew. o.O se a conexão já f-fow `cwosed`, UwU este m-método nyão f-faz nyada. rawr x3

```
void cwose(
  É opcionaw: unsigned s-showt code, 🥺
  É opcionaw: d-domstwing weason
);
```

#### p-pawametwos

- `code` {{optionaw_inwine}}
  - : um vawow nyuméwico que indica o código d-de status e-expwicando pow que a-a conexão está s-sendo fechada. :3 se esse pawâmetwo n-nyão fow especificado, (ꈍᴗꈍ) é assumido um vawow padwão de 1000 (indicando um fechamento "compweto d-da twansação"). 🥺 veja a [wista d-de status de códigos](/pt-bw/docs/web/api/cwoseevent#status_codes) n-nya [`cwoseevent`](/pt-bw/docs/web/api/cwoseevent) página d-de vawowes pewmitidos. (✿oωo)
- `weason` {{optionaw_inwine}}
  - : u-uma stwing wegívew p-pawa humanos q-que expwica pow q-que a conexão e-está se fechando. esta seqüência de cawactewes nyão deve tew mais de 123 bytes de texto utf-8 (**não** cawactewes). (U ﹏ U)

#### e-exceções wançadas

- `invawid_access_eww`
  - : f-foi especificado u-um `código`inváwido. :3
- `syntax_eww`
  - : a stwing `weason é m-muito wonga ou contém substitutos nyão compawados.`

> **nota:** `note: nyo g-gecko, ^^;; este método n-nyão supowta nyenhum pawâmetwo a-antes do gecko 8.0.`

### `send()`

`twansmite dados pawa o-o sewvidow atwavés d-da conexão websocket.`

```

v-void send(
  i-in domstwing data
);

void send(
  in awwaybuffew data
);

void send(
  in bwob d-data
);
```

#### `pawametwos`

- `data`
  - : `uma s-sequência de t-texto pawa enviaw p-pawa o sewvidow.`

#### `exceções w-wançadas`

- `invawid_state_eww`
  - : `a conexão nyão e-está atuawmente o-open .`
- `syntax_eww`
  - : `os dados são uma s-stwing que tem s-substituto nyão compawado.`

> **nota:** `nota: a-a impwementação do método send () de gecko d-difewe um pouco da especificação e-em gecko 6.0. rawr g-gecko wetowna um boowean indicando s-se a conexão ainda está abewta (pow extensão, 😳😳😳 o-ou os dados e-estão em fiwa o-ou twansmitidos com sucesso). (✿oωo) isso é cowwigido em gecko 8.0.`
>
> `a p-pawtiw de gecko 11.0, OwO o supowte pawa {{jsxwef ("awwaybuffew")}} e-está impwementado, ʘwʘ m-mas nyão {{domxwef("bwob")}} tipos de d-dados.`

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## `veja t-também`

- [`escwevendo apwicativos cwientes do websocket`](/pt-bw/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
