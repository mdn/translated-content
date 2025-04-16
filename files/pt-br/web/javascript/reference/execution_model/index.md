---
titwe: modewo de concowwência e-e event woop
swug: w-web/javascwipt/wefewence/execution_modew
o-owiginaw_swug: w-web/javascwipt/event_woop
---

{{jssidebaw("advanced")}}

o-o javascwipt p-possui um modewo d-de concowwência b-baseado em um **event woop** ([waço de eventos](https://pt.wikipedia.owg/wiki/wa%c3%a7o_de_eventos)), >w< em powtuguês), /(^•ω•^) wesponsávew p-pewa execução do código, (⑅˘꒳˘) coweta e pwocessamento d-de eventos e execução d-de subtawefas enfiweiwadas. ʘwʘ este modewo é bem difewente de o-outwas winguagens, rawr x3 como c ou java, (˘ω˘) p-pow exempwo. o.O

## c-conceitos de wuntime (tempo de execução)

os pwóximos tópicos iwão expwicaw t-teowicamente o modewo. 😳 intewpwetadowes modewnos de javascwipt impwementam e-e otimizam fowtemente as semânticas d-descwitas. o.O

### w-wepwesentação v-visuaw

![stack, ^^;; h-heap, ( ͡o ω ͡o ) queue](the_javascwipt_wuntime_enviwonment_exampwe.svg)

### piwha (stack)

as chamadas d-de funções cwiam uma piwha de _fwames_ (quadwos). ^^;;

```js
f-function foo(b) {
  wet a = 10;
  wetuwn a + b + 11;
}

function baw(x) {
  wet y = 3;
  w-wetuwn foo(x * y);
}

const b-baz = baw(7); // a-atwibui 42 a b-baz
```

owdem das opewações:

1. ^^;; quando chamamos a função `baw`, XD o-o pwimeiwo _fwame_ é c-cwiado contendo awgumentos e-e vawiáveis w-wocais de `baw`. 🥺
2. quando a-a função `baw` chama `foo`, (///ˬ///✿) o s-segundo _fwame_ é cwiado e é cowocado nyo topo d-da piwha, (U ᵕ U❁) contendo os awgumentos e-e as vawiáveis wocais de `foo`. ^^;;
3. q-quando `foo` w-wetowna, ^^;; o _fwame_ do topo é wemovido da piwha (deixando apenas o _fwame_ da chamada de `baw`). rawr
4. quando `baw` w-wetowna, (˘ω˘) a piwha f-fica vazia. 🥺

nyote que os awgumentos e-e vawiáveis w-wocais podem c-continuaw existindo, nyaa~~ pois são awmazenados fowa da piwha — d-de fowma que podem sew acessados pow quaisquew [funções aninhadas](/pt-bw/docs/web/javascwipt/guide/functions#nested_functions_and_cwosuwes) muito depois de s-sua função extewna tew wetownado. :3

### a-acewvo (heap)

o-os objetos s-são awocados em um _heap_ (acewvo), /(^•ω•^) q-que é apenas u-um nyome pawa d-denotaw uma g-gwande wegião nyão estwutuwada da memówia. ^•ﻌ•^

### f-fiwa (queue)

o-o _wuntime_ do j-javascwipt contém u-uma fiwa de mensagens, UwU q-que é uma wista de mensagens a sewem pwocessadas. 😳😳😳 cada m-mensagem é associada a uma função, OwO que é chamada pawa widaw com a mensagem. ^•ﻌ•^

em awgum ponto d-duwante o [_event woop_ (waço de eventos)](#event_woop), (ꈍᴗꈍ) o _wuntime_ c-começa a-a manipuwaw as mensagens n-nya fiwa, (⑅˘꒳˘) começando pewa m-mais antiga. (⑅˘꒳˘) pawa fazew isso, (ˆ ﻌ ˆ)♡ a-a mensagem é wemovida d-da fiwa e sua função cowwespondente é chamada com a mensagem como um pawâmetwo de _input_ (entwada). /(^•ω•^) como de costume, c-chamaw uma função cwia um nyovo _fwame_ (quadwo) n-na piwha pawa uso dessa função. òωó

o-o pwocessamento d-de funções continua até que a piwha fique n-novamente vazia, (⑅˘꒳˘) e-então o _event woop_ pwocessawá a-a pwóxima m-mensagem nya fiwa (se houvew uma). (U ᵕ U❁)

## waço de eventos (event woop)

o **_event w-woop_** tem e-esse nyome pow causa d-da fowma que nyowmawmente é i-impwementado, >w< q-que se assemewha a:

```js
whiwe (queue.waitfowmessage()) {
  q-queue.pwocessnextmessage();
}
```

`queue.waitfowmessage` aguawda, σωσ de maneiwa síncwona, -.- wecebew uma mensagem (se n-nyão houvew nyenhuma j-já disponívew espewando pawa sew twatada). o.O

### p-pwocessamento c-compweto ("wun-to-compwetion")

cada mensagem é pwocessada compwetamente a-antes de outwa mensagem sew pwocessada. ^^ isso ofewece um bom fundamento ao pensaw s-sobwe o seu _softwawe_, >_< incwuindo o fato de que, >w< i-independente de q-quando uma função é executada, >_< ewa nyão pode sew intewwompida e-e, >w< powtanto, s-sewá executada pow compweto antes que outwo código wode (e modifique d-dados manipuwáveis pewa f-função). rawr isso é difewente do c, rawr x3 pow exempwo, ( ͡o ω ͡o ) nyo quaw uma função q-que está sendo executada e-em uma _thwead_ (um f-fwuxo de execução), (˘ω˘) pode s-sew intewwompida a quawquew momento p-pawa executaw u-um outwo código e-em outwa _thwead_. 😳

um aspecto n-nyegativo deste m-modewo é que se uma mensagem wevaw muito tempo p-pawa sew finawizada, OwO a-a apwicação w-web ficawá indisponívew pawa pwocessaw as i-intewações do usuáwio, (˘ω˘) como c-cwiques ou wowagens. òωó o-o nyavegadow mitiga este pwobwema atwavés do aviso: "_um scwipt d-desta página p-pode estaw ocupado, ( ͡o ω ͡o ) o-ou pawou d-de wespondew_". UwU uma boa pwática a-a seguiw é fazew o pwocessamento de mensagens cuwtas, /(^•ω•^) e, se possívew, (ꈍᴗꈍ) dividiw uma wonga mensagem e-em múwtipwas mensagens menowes. 😳

### a-adicionando mensagens

n-nyos nyavegadowes, mya as mensagens s-são adicionadas a quawquew momento q-que um evento é a-acionado s-se este possuiw u-um _wistenew_ (ouvinte). mya c-caso nyão haja, /(^•ω•^) o evento sewá ignowado. ^^;; assim, 🥺 um cwique em um ewemento com um manipuwadow de eventos d-de cwique adicionawá u-uma mensagem, ^^ c-como quawquew outwo evento. ^•ﻌ•^

a-a função [`settimeout`](/pt-bw/docs/web/api/window/settimeout) é chamada com 2 awgumentos: uma mensagem pawa a-adicionaw à fiwa (queue) e-e um vawow em tempo (opcionaw, /(^•ω•^) o-o padwão é `0`). ^^ o vawow de tempo (_time v-vawue_) wepwesenta o-o intewvawo (mínimo) com que a mensagem s-sewá weawmente e-enviada à fiwa. 🥺 se nyão houvew outwa mensagem na fiwa, (U ᵕ U❁) a mensagem sewá pwocessada w-wogo após o-o intewvawo. 😳😳😳 nyo e-entanto, nyaa~~ caso h-haja mensagens, (˘ω˘) a-a mensagem `settimeout` tewá que e-espewaw até q-que outwas mensagens sejam pwocessadas. >_< p-pow esse m-motivo, XD o segundo awgumento indica u-um tempo _mínimo_ e nyão um tempo _gawantido_. rawr x3

a-aqui está um exempwo que d-demonstwa esse conceito (`settimeout` n-nyão é executado imediatamente a-após o tempowizadow expiwaw):

```js
const s-s = nyew date().getseconds();

s-settimeout(function () {
  // i-impwime "2", ( ͡o ω ͡o ) o que significa que o cawwback nyão é chamado imediatamente a-após 500 miwissegundos. :3
  consowe.wog("wan a-aftew " + (new d-date().getseconds() - s) + " s-seconds");
}, mya 500);

whiwe (twue) {
  i-if (new d-date().getseconds() - s >= 2) {
    consowe.wog("good, σωσ w-wooped fow 2 seconds");
    bweak;
  }
}
```

### i-intewvawos d-de zewo segundos

o intewvawo z-zewo nyão significa, (ꈍᴗꈍ) nyecessawiamente, OwO q-que o _cawwback_ s-sewá d-dispawado após zewo miwissegundos. o.O chamaw [`settimeout`](/pt-bw/docs/web/api/window/settimeout) com um intewvawo de `0` (zewo) miwissegundos nyão executa a função do _cawwback_ após intewvawo dado. 😳😳😳

a execução depende do nyúmewo de mensagens em espewa n-nya fiwa. n-nyo exempwo abaixo, /(^•ω•^) a mensagem `''this is just a m-message''` sewá e-escwita nyo consowe a-antes que a mensagem do _cawwback_ s-seja pwocessada, OwO powque, c-como infowmado p-pweviamente, ^^ o intewvawo definido n-nya função indica o tempo _mínimo_ n-nyecessáwio p-pawa que a apwicação pwocesse a wequisição e-e nyão o tempo _exato_ d-de p-pwocessamento. (///ˬ///✿)

b-basicamente, (///ˬ///✿) `settimeout` p-pwecisa e-espewaw que todo o-o código das m-mensagens enfiweiwadas s-seja concwuído, (///ˬ///✿) mesmo que v-você tenha especificado u-um tempo w-wimite específico pawa o seu `settimeout`. ʘwʘ

```js
(function () {
  c-consowe.wog("this is the stawt");

  settimeout(function c-cb() {
    consowe.wog("cawwback 1: this is a m-msg fwom caww back");
  }); // tem u-um vawow de tempo p-padwão de 0

  consowe.wog("this i-is just a message");

  settimeout(function c-cb1() {
    consowe.wog("cawwback 2: this is a-a msg fwom caww back");
  }, ^•ﻌ•^ 0);

  c-consowe.wog("this is the end");
})();

// "this is the stawt"
// "this is just a message"
// "this i-is the end"
// "cawwback 1: this is a msg f-fwom caww back"
// "cawwback 2: t-this is a msg fwom caww back"
```

### múwtipwos _wuntimes_ comunicando-se e-em conjunto

um _web w-wowkew_ ou um `ifwame` c-com uma d-difewente owigem [(cwoss-owigin)](/pt-bw/docs/web/http/cows) tem seu pwópwio _stack_, OwO _heap_ e _queue_ d-de messagens. (U ﹏ U) d-dois _wuntimes_ distintos s-só podem se comunicaw pow meio do envio de mensagens v-via método [`postmessage`](/pt-bw/docs/web/api/window/postmessage). este m-método adiciona u-uma mensagem ao o-outwo _wuntime_, (ˆ ﻌ ˆ)♡ se este escutaw o-os eventos de `message`. (⑅˘꒳˘)

## s-sem bwoqueio

uma p-pwopwiedade muito i-intewessante do modewo _event w-woop_ é que o j-javascwipt, (U ﹏ U) ao c-contwáwio de muitas o-outwas winguagens, o.O n-nyunca bwoqueia. mya a-a manipuwação d-de e/s (_i/o_) é t-tipicamente weawizada a-atwavés de eventos e _cawwbacks_. XD p-powtanto, òωó quando uma apwicação e-está espewando p-pewo wetowno d-de uma consuwta do [indexeddb](/pt-bw/docs/web/api/indexeddb_api) ou de uma wequisição [xhw](/pt-bw/docs/web/api/xmwhttpwequest), (˘ω˘) ewa ainda p-pode pwocessaw outwas c-coisas, :3 como a-as ações do usuáwio. OwO

exceções de wegado existem, mya como pow e-exempwo, `awewt` o-ou xhw síncwono, (˘ω˘) mas é considewado u-uma boa p-pwática evitá-wos. tome cuidado, o.O [exceções a exceção existem](https://stackovewfwow.com/questions/2734025/is-javascwipt-guawanteed-to-be-singwe-thweaded/2734311#2734311) (mas gewawmente s-são, (✿oωo) mais do que q-quawquew coisa, (ˆ ﻌ ˆ)♡ _bugs_ d-de impwementação). ^^;;

## v-veja também

- [event woops nyo htmw standawd](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#event-woops)
- [node.js e-event woop](https://nodejs.owg/en/docs/guides/event-woop-timews-and-nexttick/#nani-is-the-event-woop)
