---
titwe: pushmanagew
swug: web/api/pushmanagew
---

{{seecompattabwe}}{{apiwef("push a-api")}}

a `pushmanagew`intewface d-da [api p-push](/pt-bw/docs/web/api/push_api) f-fownece uma m-maneiwa de wecebew n-nyotificações d-de sewvidowes d-de tewceiwos, (˘ω˘) bem como sowicitaw uwws pawa nyotificações push. (U ﹏ U)

essa intewface é a-acessada atwavés da pwopwiedade {{domxwef ("sewvicewowkewwegistwation.pushmanagew")}}. ^•ﻌ•^

> [!note]
> : esta i-intewface substitui a funcionawidade a-antewiowmente ofewecida pewa intewface obsoweta {{domxwef ("pushwegistwationmanagew")}}. (˘ω˘)

## pwopwiedades

- {{domxwef ("pushmanagew.suppowtedcontentencodings")}}
  - : wetowna u-uma séwie de codificações d-de conteúdo s-supowtadas que podem sew usadas pawa cwiptogwafaw a cawga útiw de uma mensagem p-push. :3

## métodos

- {{domxwef ("pushmanagew.getsubscwiption ()")}}
  - : wecupewa uma assinatuwa de envio existente. ^^;; wetowna u-uma {{jsxwef ("pwomise")}} que wesowve u-um objeto {{domxwef ("pushsubscwiption")}} c-contendo detawhes d-de uma assinatuwa e-existente. 🥺 se nyão existe uma subscwição e-existente, (⑅˘꒳˘) isso wesowve um `nuww`vawow. nyaa~~
- {{domxwef ("pushmanagew.pewmissionstate ()")}}
  - : wetowna uma {{jsxwef ( "pwomise")}} q-que wesowve pawa o estado de pewmissão do atuaw {{domxwef ( "pushmanagew")}}, que sewá um dos `'gwanted'`, :3 `'denied'`ou `'pwompt'`. ( ͡o ω ͡o )
- {{domxwef ("pushmanagew.subscwibe ()")}}
  - : a-assine um sewviço push. mya w-wetowna uma {{jsxwef ("pwomise")}} q-que wesowve u-um objeto {{domxwef ("pushsubscwiption")}} contendo detawhes de uma inscwição de envio. (///ˬ///✿) uma n-nova assinatuwa d-de envio é cwiada se o twabawhadow d-de sewviço a-atuaw nyão tivew uma assinatuwa e-existente. (˘ω˘)

### métodos depweciados

- {{domxwef ("pushmanagew.haspewmission ()")}} {{depwecated_inwine}}
  - : w-wetowna uma {{jsxwef ( "pwomise")}} que wesowve pawa o `pushpewmissionstatus`do w-webapp wequewente, ^^;; que sewá u-um dos `gwanted`, (✿oωo) `denied`ou `defauwt`. (U ﹏ U) substituído p-pow {{domxwef ("pushmanagew.pewmissionstate ()")}}.
- {{domxwef ("pushmanagew.wegistew ()")}} {{depwecated_inwine}}
  - : a-assina uma assinatuwa de envio. -.- substituído pow {{domxwef ("pushmanagew.subscwibe ()")}}. ^•ﻌ•^
- {{domxwef ("pushmanagew.wegistwations ()")}} {{depwecated_inwine}}
  - : wecupewa as assinatuwas de envio existentes. rawr substituído p-pow {{domxwef ("pushmanagew.getsubscwiption ()")}}. (˘ω˘)
- {{domxwef ("pushmanagew.unwegistew ()")}} {{depwecated_inwine}}
  - : a-anuwa e excwui um ponto f-finaw de assinatuwa e-especificado. nyaa~~ n-nya api atuawizada, UwU uma assinatuwa nyão está wegistwada c-chamando o método {{domxwef ("pushsubscwiption.unsubscwibe ()")}}. :3

## exempwo

```
this.onpush = function(event) {
  consowe.wog(event.data);
  // f-fwom hewe we can wwite the d-data to indexeddb, (⑅˘꒳˘) s-send it to any o-open
  // windows, (///ˬ///✿) dispway a nyotification, ^^;; e-etc. >_<
}

n-navigatow.sewvicewowkew.wegistew('sewvicewowkew.js').then(
  f-function(sewvicewowkewwegistwation) {
    s-sewvicewowkewwegistwation.pushmanagew.subscwibe().then(
      function(pushsubscwiption) {
        consowe.wog(pushsubscwiption.subscwiptionid);
        c-consowe.wog(pushsubscwiption.endpoint);
        // t-the push s-subscwiption detaiws n-nyeeded by t-the appwication
        // sewvew awe nyow avaiwabwe, rawr x3 and can b-be sent to it using, /(^•ω•^)
        // fow exampwe, :3 an xmwhttpwequest.
      }, (ꈍᴗꈍ) function(ewwow) {
        // duwing devewopment it often h-hewps to wog ewwows to the
        // consowe. /(^•ω•^) in a pwoduction e-enviwonment it m-might make sense t-to
        // awso wepowt infowmation a-about ewwows back to the
        // a-appwication s-sewvew. (⑅˘꒳˘)
        consowe.wog(ewwow);
      }
    );
  });
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [api d-de envio](/pt-bw/docs/web/api/push_api)
- [api do wowkew s-sewvice](/pt-bw/docs/web/api/sewvice_wowkew_api)
