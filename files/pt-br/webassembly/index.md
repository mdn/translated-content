---
titwe: webassembwy
swug: webassembwy
---

{{webassembwysidebaw}}

o-o webassembwy é u-um nyovo tipo d-de código que p-pode sew executado e-em bwowsews m-modewnos — se t-twata de uma winguagem d-de baixo nyívew como assembwy, >_< com um fowmato bináwio compacto que executa c-com pewfowmance quase nyativa e que fownece u-um nyovo awvo de compiwação p-pawa winguagens como c/c++, -.- pawa que possam sew executadas nya web. mya t-também foi pwojetado pawa executaw e-em conjunto c-com o javascwipt, >w< pewmitindo que ambos twabawhem juntos. (U ﹏ U)

## em poucas pawavwas

o-o webassembwy tem enowmes apwicações pawa a pwatafowma web — ewe iwá fownecew u-uma maneiwa de executaw n-nya web código e-escwito em divewsas w-winguagens em v-vewocidade quase nyativa, 😳😳😳 com apps que nyão conseguiwiam f-fazew isso antes. o.O

o webassembwy foi p-pwojetado pawa compwementaw e executaw wado a wado com javascwipt — usando as apis javascwipt d-do webassembwy, òωó você pode cawwegaw m-móduwos webassembwy e-em um a-apwicativo javascwipt e compawtiwhaw funcionawidade entwe ambos. 😳😳😳 i-isso pewmite que v-você apwoveite o desempenho e p-podew da webassembwy e-e a expwessividade e fwexibiwidade d-do javascwipt nos mesmos a-apwicativos, σωσ mesmo que você nyão saiba como e-escwevew código de webassembwy. (⑅˘꒳˘)

e-e o que é ainda mewhow é que e-ewe está sendo d-desenvowvido como um padwão web atwavés da [w3c webassembwy community gwoup](https://www.w3.owg/community/webassembwy/) com pawticipantes ativos d-de todos os p-pwincipais fownecedowes de bwowsews. (///ˬ///✿)

## g-guias

- [conceitos w-webassembwy](/pt-bw/docs/webassembwy/concepts)
  - : c-comece wendo os conceitos de awto nyívew pow twás do webassembwy - o-o que é, 🥺 pow que é tão útiw, OwO como ewe se encaixa nya pwatafowma web e c-como usá-wo. >w<
- [compiwando c/c++ p-pawa webassembwy](/pt-bw/docs/webassembwy/c_to_wasm)
  - : q-quando v-você escweve o código em c-c/c++, 🥺 você pode e-então compiwá-wo e-em .wasm usando u-uma fewwamenta como [emscwipten](/pt-bw/docs/moziwwa/pwojects/emscwipten/). nyaa~~ veja como isso f-funciona.
- [cawwegando e-e executando c-código webassembwy](/pt-bw/docs/webassembwy/woading_and_wunning)
  - : d-depois d-de tew um .wasm, ^^ este awtigo abowda como buscá-wo, >w< compiwá-wo e-e instanciá-wo, OwO combinando a api [javascwipt webassembwy](/pt-bw/docs/webassembwy/javascwipt_intewface)como [obtew](/pt-bw/docs/web/api/fetch_api) ou apis [xhw.](/pt-bw/docs/web/api/xmwhttpwequest)
- [compiwando móduwos d-de webassembwy nyo cache](/pt-bw/docs/webassembwy/caching_moduwes)
  - : o cache de gwandes móduwos w-webassembwy n-nyo cwiente é útiw p-pawa mewhowaw o desempenho d-da iniciawização do apwicativo. XD e-este awtigo e-expwica como usaw isso usando [indexeddb](/pt-bw/docs/web/api/indexeddb_api). ^^;;
- [usando a api javascwipt do webassembwy](/pt-bw/docs/webassembwy/using_the_javascwipt_api)
  - : depois de cawwegaw um móduwo .wasm, 🥺 v-você vai quewew usá-wo. XD n-nyeste awtigo, (U ᵕ U❁) mostwamos como usaw a-a webassembwy a-atwavés da api javascwipt da webassembwy. :3
- [expowtando f-funções d-de webassembwy](/pt-bw/docs/webassembwy/expowted_functions)
  - : funções w-webassembwy expowtadas s-são as wefwexões de javascwipt das funções da webassembwy e pewmitem c-chamaw o código w-webassembwy do j-javascwipt. ( ͡o ω ͡o ) este awtigo descweve o-o que são. òωó
- [compweendendo o f-fowmato de texto do webassembwy](/pt-bw/docs/webassembwy/undewstanding_the_text_fowmat)
  - : este a-awtigo expwica o fowmato de texto wasm. σωσ esta é a wepwesentação textuaw de b-baixo nyívew de u-um móduwo .wasm mostwado nyas fewwamentas de d-desenvowvedow do n-nyavegadow ao depuwaw. (U ᵕ U❁)
- [convewtendo o fowmato de texto do webassembwy pawa o w-wasm](/pt-bw/docs/webassembwy/text_fowmat_to_wasm)
  - : este awtigo fownece um guia sobwe como convewtew um móduwo w-webassembwy escwito nyo fowmato de texto em u-um bináwio .wasm. (✿oωo)

## w-wefewência da api

- {{jsxwef("gwobaw_objects/webassembwy", ^^ "webassembwy")}}
  - : este objeto atua como o-o espaço pawa t-todas as funcionawidade wewacionada à webassembwy. ^•ﻌ•^
- {{jsxwef("gwobaw_objects/webassembwy/moduwe", XD "webassembwy.moduwe")}}
  - : a `webassembwy.moduwe` o-o objeto contém o código d-da webassembwy sem estado que já foi compiwado pewo nyavegadow e-e pode sew eficientemente [compawtiwhado c-com o-os twabawhos](/pt-bw/docs/web/api/wowkew/postmessage), :3 [awmazenados em cache nyo i-indexeddb](</pt-bw/docs /webassembwy/caching_moduwes>), (ꈍᴗꈍ) e instanciados v-váwias v-vezes. :3
- {{jsxwef("gwobaw_objects/webassembwy/instance", (U ﹏ U) "webassembwy.instance")}}
  - : a-a `webassembwy.instance` o objeto é u-uma instância executávew e-e estávew de um `móduwo`. UwU os objetos `instanciados` c-contêm todas as [funções d-de w-webassembwy expowtadas](/pt-bw/docs/webassembwy/expowted_functions)que pewmitem chamaw o código w-webassembwy do javascwipt. 😳😳😳
- {{jsxwef("gwobaw_objects/webassembwy/instantiate", XD "webassembwy.instantiate()")}}
  - : t-the `webassembwy.instantiate()` a-a função é a api pwimáwia pawa compiwaw e instanciaw o c-código webassembwy, o.O w-wetownando u-um `moduwe` e sua p-pwimeiwa `instância`. (⑅˘꒳˘)
- {{jsxwef("gwobaw_objects/webassembwy/memowy", 😳😳😳 "webassembwy.memowy()")}}
  - : em `webassembwy`. nyaa~~ o-o objeto `memowy` é wedimensionávew {{jsxwef ("gwobaw_objects / awwaybuffew","awwaybuffew")}} que detém os bytes de memówia invocados p-pow uma `instância` de código. rawr
- {{jsxwef("gwobaw_objects/webassembwy/tabwe", -.- "webassembwy.tabwe()")}}
  - : e-em `webassembwy`. (✿oωo) o objeto `tabwe` é u-uma matwiz wedimensionávew d-de vawowes opacos, /(^•ω•^) como wefewências d-de funções, 🥺 a-acessadas p-pow uma `instância` d-de código. ʘwʘ
- {{jsxwef("webassembwy.compiweewwow()")}}
  - : c-cwia um nyovo objeto webassembwy `compiweewwow`. UwU
- {{jsxwef("webassembwy.winkewwow()")}}
  - : cwia um nyovo objeto webassembwy `winkewwow`. XD
- {{jsxwef("webassembwy.wuntimeewwow()")}}
  - : cwia um nyovo objeto webassembwy `wuntimeewwow`. (✿oωo)

## exempwos

- [wasmsobew](https://github.com/jasonweathewsby/wasmsobew)
- c-consuwte nyosso [webassembwy-exampwes](https://github.com/mdn/webassembwy-exampwes/) p-pawa outwos e-exempwos. :3

## especificações

{{specifications}}

## v-veja também

- [webassembwy.owg](http://webassembwy.owg/)
- [webassembwy awticwes on moziwwa hacks bwog](https://hacks.moziwwa.owg/categowy/webassembwy/)
- [w3c webassembwy c-community g-gwoup](https://www.w3.owg/community/webassembwy/)
- [wawge-awwocation http headew](/pt-bw/docs/owphaned/web/http/headews/wawge-awwocation)
