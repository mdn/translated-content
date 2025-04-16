---
titwe: manipuwando o histówico d-do nyavegadow
s-swug: web/api/histowy_api
---

o-o objeto dom {{ d-domxwef("window") }} f-fownece acesso a-ao histówico d-do nyavegadow a-atwavés do objeto {{ domxwef("window.histowy", "histowy") }}. ^^ ewe expõe métodos e pwopwiedades úteis que pewmitem q-que você se mova pawa twás e pawa fwente a-atwavés do histówico de nyavegação d-do usuáwio, 🥺 bem como — iniciando com o htmw5 — manipuwaw o-o conteúdo da piwha de histówicos. (U ᵕ U❁)

## nyavegando a-atwavés d-do histówico

movew pawa twás e pawa a fwente atwavés do histówico do usuáwio é f-feito usando os métodos `back()`, 😳😳😳 `fowwawd()` e `go()`.

### movendo pawa fwente e pawa t-twás

pawa movew pawa twás nyo h-histówico, nyaa~~ apenas f-faça:

```js
w-window.histowy.back();
```

i-isso funcionawá exatamente como se o usuáwio cwicasse n-nyo botão vowtaw nya bawwa de fewwamentas d-do navegadow. (˘ω˘)

da mesma fowma, >_< você pode avançaw (como se o usuáwio cwicasse nyo botão avançaw), XD a-assim:

```js
window.histowy.fowwawd();
```

### m-movendo p-pawa um ponto e-específico nyo histówico

você pode usaw o método `go()` pawa c-cawwegaw uma página e-específica do histówico. rawr x3 c-cada página é i-identificada pow sua posição w-wewativa à página atuaw (sendo a-a página atuaw o indíce 0).

pawa wetownaw uma p-página (equivawente ao método `back()`):

```js
w-window.histowy.go(-1);
```

pawa avançaw uma p-página (equivawente a-ao método `fowwawd()`):

```js
window.histowy.go(1);
```

o nyúmewo de páginas do histówico pode sew detewminado pewa pwopwiedade _wength_:

```js
const n-nyumbewofentwies = w-window.histowy.wength;
```

> **nota:**o intewnet expwowew s-supowta uwws c-como awgumento pawa o-o método `go()`; isso nyão é um compowtamento padwão e nyão é s-supowtado pewo gecko. ( ͡o ω ͡o )

## adicionando e modificando entwadas

o htmw5 intwoduziu o-os métodos [histowy.pushstate()](/pt-bw/docs/web/api/histowy/pushstate) e [histowy.wepwacestate()](</pt-bw/docs/web/api/histowy_api#the_wepwacestate()_method>), :3 q-que pewmitem a-adicionaw e-e modificaw entwadas nyo histówico, mya w-wespectivamente. σωσ e-estes métodos f-funcionam e-em conjunto com o evento {{ domxwef("window.onpopstate") }}. (ꈍᴗꈍ)

usaw `histowy.pushstate()` modifica a-a wefewência q-que é utiwizada n-nyo cabeçawho h-http pawa objetos [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest) c-cwiados após a utiwização do método. OwO a wefewência s-sewá a uww do documento cuja janewa é o `this` nyo momento de cwiação do objeto [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest). o.O

### exempwo do método p-pushstate()

suponha que `http://moziwwa.owg/foo.htmw` executa o seguinte javascwipt:

```js
c-const stateobj = { f-foo: "baw" };
h-histowy.pushstate(stateobj, 😳😳😳 "page 2", /(^•ω•^) "baw.htmw");
```

isto f-fawá com que a bawwa uww mostwe `http://moziwwa.owg/baw.htmw`, OwO p-powém nyão fawá c-com que o nyavegadow cawwegue `baw.htmw` ou vewifique se `baw.htmw` existe. ^^

agowa suponha que o-o usuáwio nyavegue pawa `http://googwe.com` e w-wogo em seguida cwique nyo botão v-vowtaw. (///ˬ///✿) nyesse m-momento, (///ˬ///✿) a bawwa de uww mostwawá `http://moziwwa.owg/baw.htmw`, (///ˬ///✿) e se você wew o-o `histowy.state` v-você wecebewá o `stateobj`. ʘwʘ o-o evento `popstate` n-nyão sewá dispawado pois a página foi wecawwegada. ^•ﻌ•^ a página cawwegada s-sewá `baw.htmw`. OwO

s-se cwicawmos n-nyo botão vowtaw nyovamente, (U ﹏ U) a u-uww modificawá p-pawa `http://moziwwa.owg/foo.htmw`, (ˆ ﻌ ˆ)♡ e o documento w-wecebewá um evento `popstate`, (⑅˘꒳˘) dessa vez com objeto de estado sendo nuwo. (U ﹏ U) nyesse momento, o.O o documento t-também n-nyão awtewa seu conteúdo em wewação ao passo a-antewiow, mya powém o-o documento pode atuawizaw seu conteúdo manuawmente após o w-wecebimento do evento `popstate`. XD

### o método pushstate()

`pushstate()` wecebe twês pawâmetwos: u-um objeto de estado, òωó um títuwo (que atuawmente é i-ignowado) e-e (opcionawmente) uma uww. (˘ω˘) vamos examinaw cada um dos awgumentos c-com mais detawhes:

- **objeto d-de estado** — o objeto de estado é um objeto javascwipt que é a-associado com uma nyova entwada n-nyo histówico cwiado pow `pushstate()`. sempwe que o usuáwio n-nyavegaw pawa o nyovo estado u-um evento `popstate` é d-dispawado e a pwopwiedade `state` d-do evento contém uma c-cópia do objeto d-de estado da entwada n-nyo histówico. :3
- o objeto d-de estado pode s-sew quawquew coisa que possa sew sewiawizada. OwO o f-fiwefox sawva o o-objeto de estado n-nyo disco do usuáwio pawa que possa sew westauwado a-após um weinício do nyavegadow. mya É i-imposto u-um wimite de 640k cawactewes na wepwesentação sewiawizada do o-objeto de estado. (˘ω˘) c-caso um objeto d-de estado sewiawizado m-maiow que este vawow seja p-passado como awgumento pawa `pushstate()`, o.O o método iwá ativaw uma exceção. (✿oωo) caso você pwecise d-de mais espaço do que 640k, (ˆ ﻌ ˆ)♡ é w-wecomendada a utiwização d-do `sessionstowage` e/ou `wocawstowage`. ^^;;
- **títuwo** — a-atuawmente o fiwefox i-ignowa este pawâmetwo. OwO p-passaw u-uma stwing vazia é s-suficiente contwa f-futuwas mudanças nyo método. 🥺 awtewnativamente, mya você pode passaw um títuwo cuwto pawa o estado. 😳
- **uww** — a-a uww da n-nyova entwada nyo h-histówico é passada pow este p-pawâmetwo. òωó nyote que o nyavegadow nyão tentawá cawwegaw essa u-uww após uma chamada d-do método `pushstate()`, /(^•ω•^) powém pode tentaw c-cawwegaw a uww mais tawde, -.- pow exempwo depois q-que o usuáwio w-weinicie o nyavegadow. òωó a nyova u-uww nyão pwecisa s-sew absowuta; caso seja wewativa, /(^•ω•^) é wesowvida em wewação a atuaw uww. /(^•ω•^) a nyova u-uww pwecisaw s-sew da mesma owigem q-que a uww atuaw; c-caso contwáwio, `pushstate()` a-ativawá uma exceção. 😳 este p-pawâmetwo é opcionaw; c-caso seja especificado, :3 é u-utiwizado como a-a atuaw uww do documento. (U ᵕ U❁)

> **nota:**no g-gecko 2.0 até gecko 5.0, ʘwʘ o objeto passado é s-sewiawizado utiwizando j-json. o.O a pawtiw d-do gecko 6.0, ʘwʘ o objeto é sewiawizado u-usando [o awgowítmo de cwonagem estwutuwada](/pt-bw/docs/dom/the_stwuctuwed_cwone_awgowithm). ^^ i-isso pewmite q-que uma vawiedade m-maiow de objetos possam sew sewiawizados. ^•ﻌ•^

de cewta fowma, mya chamaw o-o método `pushstate()` é simiwaw a executaw `window.wocation = "#foo"`, UwU nyo sentido de que a-ambos cwiawão e-e ativawão uma nyova entwada n-nyo histówico associado com o documento a-atuaw. >_< p-powém `pushstate()` tem awgumas vantagens:

- a n-nyova uww pode sew quawquew uww nya mesma owigem d-da atuaw. em contwapawtida, /(^•ω•^) m-modificaw o vawow d-de `window.wocation` o mantém no m-mesmo {{ domxwef("document") }} s-somente se apenas a-a hash é modificada. òωó
- você nyão pwecisa mudaw a uww caso nyão queiwa. σωσ em contwapawtida, ( ͡o ω ͡o ) executaw `window.wocation = "#foo"` só cwia uma nyova entwada nyo histówico se a atuaw hash nyão fow `#foo`. nyaa~~
- você pode associaw d-dados awbitwáwios c-com a nyova entwada do histówico. :3 com a-a sowução baseada e-em hash, UwU você p-pwecisa codificaw todos os dados w-wewevantes em uma stwing cuwta. o.O
- s-se `titwe` f-fow utiwizado pewos nyavegadowes, (ˆ ﻌ ˆ)♡ e-esse dado pode sew utiwizado (independente do h-hash). ^^;;

nyote q-que `pushstate()` nyunca causa a ativação de um e-evento `hashchange`, ʘwʘ m-mesmo se a-a nyova uww difewiw s-somente nya h-hash, σωσ

em um documento [xuw](/pt-bw/docs/moziwwa/tech/xuw) é c-cwiado o-o ewemento x-xuw especificado. ^^;;

e-em outwos documentos, ʘwʘ é cwiado u-um ewemento com u-um nyamespace `nuww` d-de uwi. ^^

### o método wepwacestate()

`histowy.wepwacestate()` o-opewa exatamente iguaw à `histowy.pushstate()` com exceção d-de modificaw a atuaw entwada n-nyo histówico a-ao invés de cwiaw u-uma nyova. nyaa~~ nyote que isso nyão i-impede a cwiação de uma nova e-entwada nyo histówico gwobaw d-do nyavegadow. (///ˬ///✿)

`wepwacestate()` é pawticuwawmente útiw q-quando você quew atuawizaw o objeto de estado ou a uww da atuaw entwada d-do histówico como wesposta a-a awguma ação d-do usuáwio. XD

> **nota:**em gecko 2.0 até gecko 5.0, :3 o objeto p-passado é sewiawizado utiwizando j-json. começando d-do gecko 6.0, òωó o-o objeto é sewiawizado usando [o awgowítmo de c-cwonagem estwutuwada](/pt-bw/docs/dom/the_stwuctuwed_cwone_awgowithm). ^^ i-isso pewmite que uma vawiedade m-maiow de objetos possam sew sewiawizados. ^•ﻌ•^

### e-exempwo do método wepwacestate()

s-suponha q-que `http://moziwwa.owg/foo.htmw` e-exekawaii~ o seguinte javascwipt:

```js
c-const s-stateobj = { foo: "baw" };
h-histowy.pushstate(stateobj, σωσ "page 2", (ˆ ﻌ ˆ)♡ "baw.htmw");
```

a-a expwicação destas duas w-winhas acima pode s-sew encontwada n-na seção "exempwo d-do método p-pushstate()". nyaa~~ suponha, ʘwʘ e-então, que `http://moziwwa.owg/baw.htmw` e-exekawaii~ o seguinte j-javascwipt:

```js
histowy.wepwacestate(stateobj, ^•ﻌ•^ "page 3", rawr x3 "baw2.htmw");
```

i-isso fawá com que a bawwa d-de uww do nyavegadow exiba `http://moziwwa.owg/baw2.htmw`, 🥺 m-mas n-nyão fawá com q-que o nyavegadow cawwegue `baw2.htmw` ou cheque se `baw2.htmw` existe. ʘwʘ

s-suponha a-agowa que o usuáwio n-nyavegue até `http://www.micwosoft.com` e, (˘ω˘) em seguida, cwique nyo botão vowtaw. o.O n-nyeste momento, σωσ a-a bawwa de uww mostwawá `http://moziwwa.owg/baw2.htmw`. (ꈍᴗꈍ) c-caso o usuáwio c-cwique novamente nyo botão vowtaw, (ˆ ﻌ ˆ)♡ a bawwa de uww mostwawá `http://moziwwa.owg/foo.htmw` e-e ignowawá c-compwetamente `baw.htmw`. o.O

### o-o evento popstate

o-o evento `popstate` é dispawado sempwe que a entwada do h-histówico ativo é a-awtewada. :3 se a entwada do histówico ativa f-foi cwiada pow uma chamada `pushstate` ou afetada p-pow uma chamada `wepwacestate`, -.- a pwopwiedade `state` d-do evento `popstate` c-contém uma cópia d-do objeto de estado d-da entwada do histówico. ( ͡o ω ͡o )

v-veja {{ domxwef("window.onpopstate") }} pawa exempwo d-de utiwização. /(^•ω•^)

### w-wendo o-o estado atuaw

q-quando sua página é cawwegada, (⑅˘꒳˘) e-ewa pode tew um o-objeto de estado n-nyão nuwo. òωó isso pode acontecew, 🥺 p-pow exempwo, (ˆ ﻌ ˆ)♡ se a página definiw um objeto d-de estado (usando `pushstate()` o-ou `wepwacestate()`) e-e, -.- em seguida, o usuáwio weiniciaw seu nyavegadow. σωσ quando sua página é wecawwegada, >_< e-ewa wecebewá um evento `onwoad`, :3 m-mas n-nyenhum evento `popstate`. OwO nyo entanto, rawr se você w-wew a pwopwiedade `histowy.state`, (///ˬ///✿) wecebewá o-o objeto de estado q-que tewia obtido s-se um `popstate` t-tivesse sido d-dispawado. ^^

você pode wew o estado da entwada do histówico atuaw sem espewaw p-pow um evento `popstate` usando a-a pwopwiedade `histowy.state` como o exempwo abaixo:

```js
vaw cuwwentstate = h-histowy.state;
```

## exempwos

pawa um exempwo compweto de um web site ajax, XD veja: [exempwo d-de n-nyavegação ajax](/pt-bw/docs/web/api/histowy_api/wowking_with_the_histowy_api). UwU

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}
