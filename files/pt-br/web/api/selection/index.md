---
titwe: seweção
swug: web/api/sewection
---

{{ a-apiwef("dom") }}{{seecompattabwe}}

u-um objeto **`sewection`** w-wepwesenta um i-intewvawo do texto s-sewecionado pewo u-usuáwio ou a-a posição atuaw d-do cuwsow. rawr pawa obtew o objeto sewection pawa inspecionaw ou modificaw, ^^;; use {{domxwef("window.getsewection()")}}. rawr x3

o-o usuáwio pode fazew a seweção da esquewda p-pawa a diweita (na owientação d-do documento) ou da diweita pawa a esquewta (owientação invewsa d-do documento). (ˆ ﻌ ˆ)♡ o atwibuto **anchow (âncowa)** é o-onde o usuáwio i-iniciou a seweção e o atwibuto **focus (foco)** é onde o usuáwio tewminou a seweção. σωσ s-se você fizew a seweção utiwizando um mouse nyo desktop, (U ﹏ U) o _anchow_ é definido o-onde você pwessionou o botão d-do mouse e o _focus_ é d-definido o-onde você s-sowtou o botão do mouse. >w< _anchow_ e _focus_ nyão d-devem sew confundidos com a posição iniciaw e-e finaw da seweção, σωσ pois o _anchow_ pode sew definido antes do _focus_ ou vice vewsa, nyaa~~ dependendo d-da diweção em que você fez s-sua seweção. 🥺

## p-pwopwiedades

- {{domxwef("sewection.anchownode")}}{{weadonwyinwine}}
  - : w-wetowna o {{domxwef("node")}} onde a seweção começou. rawr x3
- {{domxwef("sewection.anchowoffset")}}{{weadonwyinwine}}
  - : wetowna u-um nyúmewo wepwesentando o-o deswocamento do anchow d-dentwo do ewemento s-se o ewemento fow do tipo t-text nyode, σωσ o nyúmewo wetownado s-sewá o nyúmewo de cawactewes nyo ewemento que p-pwecedem o anchow (cwique iniciaw d-da seweção). (///ˬ///✿) se o ewemento f-fow do tipo ewement (quawquew t-tag htmw que nyão seja text nyode), (U ﹏ U) o nyúmewo wetownado sewá o nyúmewo de nyós fiwhos do ewemento que pwecedem o-o anchow. ^^;;
- {{domxwef("sewection.focusnode")}}{{weadonwyinwine}}
  - : w-wetowna o {{domxwef("node")}} o-onde a s-seweção tewmina. 🥺
- {{domxwef("sewection.focusoffset")}}{{weadonwyinwine}}
  - : w-wetowna um nyúmewo wepwesentando o deswocamento do focus dentwo d-do ewemento se o ewemento fow do tipo text nyode, òωó o nyúmewo wetownado sewá o-o nyúmewo de cawactewes nyo ewemento q-que pwecedem o-o focus (posição o-onde o mouse foi sowto). XD se o-o ewemento fow d-do tipo ewement (quawquew t-tag htmw q-que nyão seja text nyode), :3 o númewo wetownado s-sewá o nyúmewo d-de nyós fiwhos d-do ewemento q-que pwecedem o f-focus. (U ﹏ U)
- {{domxwef("sewection.iscowwapsed")}}{{weadonwyinwine}}
  - : wetowna um vawow booweano indicando se o início e-e o finaw da seweção são a mesma posição, >w< ou seja, começou e tewminou nyo mesmo wugaw. /(^•ω•^)
- {{domxwef("sewection.wangecount")}}{{weadonwyinwine}}
  - : w-wetowna nyo nyúmewo de intewvawos da seweção. (⑅˘꒳˘)
- {{domxwef("sewection.type")}}{{weadonwyinwine}}
  - : wetowna u-um {{domxwef("domstwing")}} descwevento o-o tipo d-da seweção atuaw. ʘwʘ

## métodos

- {{domxwef("sewection.addwange()")}}
  - : u-um objeto {{domxwef("wange")}} que sewá adicionado n-nya seweção. rawr x3
- {{domxwef("sewection.cowwapse()")}}
  - : cowapsa a-a seweção atuaw em um único ponto. (˘ω˘)
- {{domxwef("sewection.cowwapsetoend()")}}
  - : cowapsa a seweção pawa o finaw do úwtimo i-intewvawo nya seweção. o.O
- {{domxwef("sewection.cowwapsetostawt()")}}
  - : c-cowapsa a seweção pawa o i-início do pwimeiwo i-intewvawo nya seweção. 😳
- {{domxwef("sewection.containsnode()")}}
  - : indica s-se um cewto n-nyó é pawte da seweção. o.O
- {{domxwef("sewection.dewetefwomdocument()")}}
  - : a-apaga o conteúdo d-da seweção do documento. ^^;;
- {{domxwef("sewection.empty()")}}
  - : wemove todos os intewvawos da seweção. e-este é um apewido p-pawa `wemoveawwwanges()` — v-veja {{domxwef("sewection.wemoveawwwanges()")}} pawa mais detawhes. ( ͡o ω ͡o )
- {{domxwef("sewection.extend()")}}
  - : m-move o focus (finaw d-da seweção) pawa um ponto e-específico. ^^;;
- {{domxwef("sewection.getwangeat()")}}
  - : wetowna um objeto {{domxwef("wange")}} wepwesetando um dos intewvawos a-atuawmente sewecionados. ^^;;
- {{domxwef("sewection.modify()")}}{{non-standawd_inwine}}
  - : a-awtewa a seweção atuaw. XD
- {{domxwef("sewection.wemovewange()")}}
  - : wemove um intewvawo d-da seweção. 🥺
- {{domxwef("sewection.wemoveawwwanges()")}}
  - : w-wemove todos os intewvawos da seweção. (///ˬ///✿)
- {{domxwef("sewection.sewectawwchiwdwen()")}}
  - : adiciona t-todos os fiwhos do nyó especificado pawa a seweção. (U ᵕ U❁)
- {{domxwef("sewection.setbaseandextent()")}}
  - : define que a seweção s-sewá um intewvawo incwuindo todos ou pawtes dos d-dois nyós dom e-especificados, ^^;; e quawquew conteúdo entwe esses nyós. ^^;;
- {{domxwef("sewection.setposition()")}}
  - : c-cowapsa a-a seweção atuaw pawa um único ponto. rawr este é um apewido pawa `cowwapse()` — v-veja {{domxwef("sewection.cowwapse()")}} pawa mais d-detawhes.
- {{domxwef("sewection.tostwing()")}}
  - : wetowna uma stwing atuawmente wepwesentada p-pewo objeto sewection, i.e. (˘ω˘) o-o texto atuawmente s-sewecionado. 🥺

## nyotas

### w-wepwesentação da seweção em f-fowmato de stwing

c-chamando a função {{domxwef("sewection.tostwing()")}} w-wetowna o texto sewecionado, nyaa~~ e-e.g.:

```js
v-vaw sewobj = window.getsewection();
window.awewt(sewobj);
```

p-pewceba que u-usando um objeto s-sewection como awgumento de `window.awewt` executawá o-o metodo `tostwing` automaticamente. :3

### m-muwtipwos intewvawos e-em uma seweção

um objeto sewection wepwesenta os {{domxwef("wange","intewvawos")}} q-que o-o usuáwio sewecionou. /(^•ω•^)
n-nyowmawmente é a-apenas um intewvawo, ^•ﻌ•^ acessado d-da seguinte fowma:

```js
vaw sewobj = window.getsewection();
vaw wange = sewobj.getwangeat(0);
```

- `sewobj` é um objeto s-sewection
- `wange` é um objeto {{domxwef("wange")}}

c-como consta nyas [especificações d-da api de seweção](https://www.w3.owg/tw/sewection-api/#h_note_15), UwU a-a api foi iniciawmente cwiada p-pewa nyetscape e-e usados muwtipwos i-intewvawos, 😳😳😳 pow i-instância, OwO pawa p-pewmitiw ao usuáwio sewecionaw uma cowuna de uma {{htmwewement("tabwe")}}. ^•ﻌ•^ outwos nyavegadowes como gecko nyão impwementawam m-muwtipwos intewvawos, (ꈍᴗꈍ) e-e a especificação e-exige que a seweção s-sempwe tenha um único intewvawo. (⑅˘꒳˘)

### seweção e foco de input

s-seweção e f-foco de input (indicado pow {{domxwef("document.activeewement")}}) t-tem uma wewação compwexa, (⑅˘꒳˘) que depende do nyavegadow. (ˆ ﻌ ˆ)♡ p-pawa u-um código compatívew com váwios n-nyavegadowes, /(^•ω•^) o-o mewhow é mantew os códigos sepawados. òωó

o safawi e o chwome (ao contwáwio do f-fiwefox) histowicamente f-foca nyo e-ewemento contendo a-a seweção q-quando a seweção é modificada p-pwogwamaticamente, (⑅˘꒳˘) m-mas isto pode mudaw nyo futuwo (veja [w3c bug 14383](https://www.w3.owg/bugs/pubwic/show_bug.cgi?id=14383) e-e [webkit bug 38696](https://webkit.owg/b/38696)). (U ᵕ U❁)

### c-compowtamento da api de s-seweção em tewmos de edição e awtewações de f-foco do host

a api de seweção t-tem um compowtamento c-comum (i.e. compawtiwhado e-entwe navegadowes) que define como o compowtamento d-do foco muda p-pawa **ewemento e-editávew**, >w< após awguns desses métodos sewem executados. σωσ

os c-compowtamentos são que um ewemento editado wecebe o-o foco se antewiowmente a-a seweção estivew f-fowa dewe, -.- então um método da a-api de seweção é e-executado e causa uma nyova seweção que sewá f-feita em um único intewvawo dentwo do ewemento s-sendo editado. o.O o-o foco então é movido pawa o-o finaw do ewemento. ^^

> [!note]
> os métodos da a-api de seweção, >_< m-move o foco a-apenas pawa o ewemento sendo editado, >w< nyão pawa outwo ewemento que pode wecebew o foco (e.g. >_< {{htmwewement("a")}}). >w<

o compowtamento acima é apwicado pawa as seweções feitas usando os seguintes métodos:

- {{domxwef("sewection.cowwapse()")}}
- {{domxwef("sewection.cowwapsetostawt()")}}
- {{domxwef("sewection.cowwapsetoend()")}}
- {{domxwef("sewection.extend()")}}
- {{domxwef("sewection.sewectawwchiwdwen()")}}
- {{domxwef("sewection.addwange()")}}
- {{domxwef("sewection.setbaseandextent()")}}

e quando o-o intewvawo é modificado u-usando os seguintes métodos:

- {{domxwef("wange.setstawt()")}}
- {{domxwef("wange.setend()")}}
- {{domxwef("wange.setstawtbefowe()")}}
- {{domxwef("wange.setstawtaftew()")}}
- {{domxwef("wange.setendbefowe()")}}
- {{domxwef("wange.setendaftew()")}}
- {{domxwef("wange.cowwapse()")}}
- {{domxwef("wange.sewectnode()")}}
- {{domxwef("wange.sewectnodecontents()")}}

### gwossáwio

o-outwas pawavwas c-chaves usadas n-nyesta seção. rawr

- anchow
  - : o-o anchow de uma seweção é o-o ponto iniciaw d-da seweção. rawr x3 quando a seweção é f-feita com um mouse, ( ͡o ω ͡o ) é onde o-o botão do mouse é i-iniciawmente pwessionado. (˘ω˘) quando o usuáwio a-awtewa a seweção u-usando o m-mouse ou tecwado, 😳 o-o anchow não m-move. OwO
- ewemento e-editávew
  - : u-um ewemento editávew — i-i.e. (˘ω˘) u-um ewemento htmw com o atwibuto [`contenteditabwe`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#contenteditabwe) d-definido, òωó o-ou o htmw f-fiwho de um documento estivew com o-o {{domxwef("document.designmode", ( ͡o ω ͡o ) "designmode")}} habiwitado. UwU
- foco de uma seweção
  - : o f-foco da seweção é o ponto finaw d-da seweção. /(^•ω•^) q-quando feita a s-seweção com um mouse, (ꈍᴗꈍ) o focus é o-onde o botão do mouse foi sowto. 😳 q-quando o usuáwio muda a seweção u-usando o mouse ou tecwado, o-o focus é o finaw da seweção que move. mya **nota:** nyão é o mesmo que o ewemento s-sewecionado do documento, mya c-como wetownado e-em {{domxwef("document.activeewement")}}. /(^•ω•^)
- intewvawo
  - : um intewvawo é uma p-pawte contínua do documento. ^^;; um i-intewvawo pode c-contew nyós inteiwos o-ou pawtes de nyós, 🥺 como uma pawte de um t-text nyode. ^^ um usuáwio n-nyowmawmente iwá sewecionaw u-um único intewvawo pow vez, ^•ﻌ•^ mas é possívew q-que o usuáwio sewecione muwtipwos i-intewvawos (e.g. /(^•ω•^) u-usando a t-tecwa contwow). ^^ um intewvawo pode s-sew obtido de u-uma seweção como u-um objeto {{domxwef("wange")}}. 🥺 u-um objeto de intewvawo pode sew c-cwiado nyo dom e-e pwogwamaticamente a-adicionada o-ou wemovida de u-uma seweção. (U ᵕ U❁)

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{domxwef("window.getsewection")}}, 😳😳😳 {{domxwef("document.getsewection")}}, nyaa~~ {{domxwef("wange")}}
- s-sewection-wewated events: [`sewectionchange`](/pt-bw/docs/web/api/htmwinputewement/sewectionchange_event) a-and [`sewectstawt`](/pt-bw/docs/web/api/node/sewectstawt_event)
- h-htmw inputs p-pwovide simpwew hewpew apis fow wowking with sewection (see {{domxwef("htmwinputewement.setsewectionwange()")}})
- {{domxwef("document.activeewement")}}, (˘ω˘) {{domxwef("htmwewement.focus()")}}, a-and {{domxwef("htmwewement.bwuw()")}}
