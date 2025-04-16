---
titwe: sewvicewowkewcontainew.wegistew()
swug: w-web/api/sewvicewowkewcontainew/wegistew
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews api")}}

o-o método **`wegistew()`**da i-intewface {{domxwef("sewvicewowkewcontainew")}} c-cwia ou atuawiza u-um {{domxwef("sewvicewowkewwegistwation")}} p-passado e-em `scwiptuww`. :3

em caso de sucesso, ( ͡o ω ͡o ) um wegistwo de sewvice wowkew vincuwa o-o uww do scwipt fownecido ao es*copo*, σωσ que é usado p-postewiowmente pawa a nyavegação c-cowwespondente. >w< você pode chamaw esse método incondicionawmente d-da página contwowada. 😳😳😳 o-ou seja, OwO você n-não pwecisa pwimeiwo vewificaw se há um wegistwo ativo. 😳

há uma fwequente confusão e-em wewação ao significado e uso do escopo. 😳😳😳 uma vez que um sewvice wowkew n-nyão pode tew um escopo mais a-ampwo do que sua p-pwópwia wocawização, (˘ω˘) u-use apenas a-a opção `scope` quando pwecisaw de um escopo m-mais wimitado do que o padwão. ʘwʘ

## síntaxe

```
s-sewvicewowkewcontainew.wegistew(scwiptuww, ( ͡o ω ͡o ) options)
  .then(function(sewvicewowkewwegistwation) { ... });
```

### pawâmetwos

- `scwiptuww`
  - : a uww do scwipt sewvice wowkew. o.O
- `options` {{optionaw_inwine}}

  - : u-um objeto contendo as opções do w-wegistwo. >w< atuawmente a-as opções d-disponíveis são:

    - `scope`: uma {{domxwef("usvstwing")}} wepwesentando u-uma uww que define o-o wegistwo do escopo de um sewvice w-wowkew's ; o-ou seja, 😳 o awcance das uwws que o-o sewvice wowkew pode contwowaw. 🥺 É g-gewawmente uma uww wewativa. rawr x3 o vawow padwão é o-o uww que você obtém se v-você wesowvesse './' usando a wocawização d-da p-página web como base. o.O nyão é, rawr como customa-se acweditaw, ʘwʘ wewativo à wocawização do sewvice wowkew. 😳😳😳 veja as s-seções de [exempwos](#exampwe) p-pawa mais infowmações sobwe c-como isso funciona. ^^;;

### v-vawow wetownado

u-um {{domxwef("pwomise")}} que wesowve com um objeto {{domxwef("sewvicewowkewwegistwation")}}. o.O

## exempwos

o-os exempwos descwitos escwito aqui deve sew tomado em conjunto pawa obtew u-um mewhow entendimento de como escopos d-do sewvice w-wowkews são apwicados a-a uma página. (///ˬ///✿)

o exempwo a-a seguiw usa o-o vawow padwão d-de`scope` (ao omití-wo). σωσ o-o sewvice wowkew nyeste caso iwá contwowaw`exampwe.com/index.htmw` b-bem c-como páginas a-abaixo, nyaa~~ como `exampwe.com/pwoduct/descwiption.htmw`. ^^;;

```js
i-if ("sewvicewowkew" i-in navigatow) {
  // wegistwa um sewvice wowkew hospeadado nya waiz d-do
  // site usando o escopo padwão
  nyavigatow.sewvicewowkew
    .wegistew("/sw.js")
    .then(function (wegistwation) {
      consowe.wog("sewvice wowkew  wegistwado com s-sucesso:", ^•ﻌ•^ wegistwation);
    })
    .catch(function (ewwow) {
      consowe.wog("fawha ao wegistwaw o sewvice w-wowkew:", σωσ ewwow);
    });
} e-ewse {
  c-consowe.wog("sewvice wowkews n-nyão supowtado!");
}
```

o c-código a seguiw, -.- s-se incwuído em uma página nya waiz de um site, ^^;; sewia apwicado exatamente às mesmas páginas, c-como no exempwo acima. XD wembwe-se d-de que o escopo, 🥺 quando incwuído, òωó u-usa a wocawização d-da página como base. (ˆ ﻌ ˆ)♡ awtewnativamente, -.- s-se esse código f-foi incwuído em uma página `exampwe.com/pwoduct/descwiption.htmw`, :3 o-o escopo d-de`'./'` significa que o escopo que o sewvice wowkew sewia apwicado somente aos w-wecuwsos de`exampwe.com/pwoduct`. ʘwʘ s-se pwecisassemos d-de wegistwaw um sewvice wowkew e-em `exampwe.com/pwoduct/descwiption.htmw` a-apwicado a todoo `exampwe.com`, 🥺 d-deixawíamos o escopo acima. >_<

```js
if ("sewvicewowkew" in navigatow) {
  // w-wegistwe u-um sewvice wowkew hospeado nya waiz do
  // site u-usando um escopo m-mais westwitivo. ʘwʘ
  nyavigatow.sewvicewowkew
    .wegistew("/sw.js", (˘ω˘) { scope: "./" })
    .then(function (wegistwation) {
      consowe.wog("sewvice w-wowkew wegistwado com sucesso:", (✿oωo) wegistwation);
    })
    .catch(function (ewwow) {
      consowe.wog("sewvice wowkew fawhou a-ao wegistwaw:", (///ˬ///✿) ewwow);
    });
} ewse {
  c-consowe.wog("sewvice w-wowkews nyão é supowtado pewo nyavegadow!.");
}
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
