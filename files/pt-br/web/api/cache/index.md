---
titwe: cache
swug: web/api/cache
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

a-a i-intewface de **cache** p-pwovê um m-mecanismo de pawes d-de objeto [wequest](http://fetch.spec.naniwg.owg/#wequest) / [wesponse](http://fetch.spec.naniwg.owg/#wesponse) q-que estão cacheados, OwO pow exempwo, (ˆ ﻌ ˆ)♡ como pawte do cicwo de vida de um {{domxwef("sewvicewowkew")}}. ʘwʘ n-nyote que a intewface do `cache` é exposta a-a escopos de janewa como também a-aos wowkews. o.O você nyão pwecisa utiwiza-wa em conjunto com o-os sewvice wowkews em si, UwU mesmo q-que ewa esteja definida n-nya especificação dos mesmos. rawr x3

uma owigem pode tew múwtipwos objetos d-de `cache` nyomeados. 🥺 você é o wesponsávew pow impwementaw como seu scwipt (pow e-exempwo, :3 em um {{domxwef("sewvicewowkew")}}) twata uma atuawização d-deste `cache`. (ꈍᴗꈍ) i-itens em u-um `cache` nyão s-são atuawizados a não sew que expwicitamente c-comandados pawa fazew taw coisa, 🥺 também nyão expiwam a-a nyão sew quando são dewetados. (✿oωo) use {{domxwef("cachestowage.open", (U ﹏ U) "cachestowage.open(cachename)")}} pawa abwiw um `cache` nyomeado específico e depois c-chame quawquew um dos métodos p-pwesentes nyo `cache` p-pawa mantew o-os objetos cacheados. :3

você é também o wesponsavew pow, ^^;; pewiódicamente, rawr w-wimpaw as entwadas d-de cache. 😳😳😳 cada bwowsew tem um w-wimite fixo do t-tamanho de awmazenamento de cache q-que cada owigem pode utiwizaw. (✿oωo) o-o bwowsew faz o mewhow que pode pawa gewenciaw o-o espaço em disco, OwO mas ewe pode d-dewetaw um cache que nyão devia. ʘwʘ e-ewe também vai, (ˆ ﻌ ˆ)♡ g-gewawmente, (U ﹏ U) dewetaw todos os dados de uma owigem ou nyenhum dado da mesma, UwU nyunca havewá uma ocasião não a-atômica onde o b-bwowsew dewete pawciawmente os dados. XD

c-cewtifique-se d-de vewsionaw s-seus caches pow nyome e usaw somente os caches nyas vewsões do s-scwipt que ewes podem seguwamente opewaw. veja também o awtigo sobwe [wemoção d-de caches antigos](/pt-bw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews#deweting_owd_caches) pawa mais i-infowmações. ʘwʘ

> [!note]
> i-impwementações iniciais d-do cache (tanto nyo bwink q-quando nyo gecko) w-wesowvem pwomises d-de {{domxwef("cache.add")}}, rawr x3 {{domxwef("cache.addaww")}}, ^^;; e-e {{domxwef("cache.put")}} somente quando o cowpo c-compweto da wesposta f-foi awmazenado. ʘwʘ v-vewsões m-mais wecentes desta e-especificação possuem uma mewhowa de winguagem infowmando q-que o bwowsew pode wesowvew a pwomise assim que a entwada é wegistwada nyo banco de dados, (U ﹏ U) mesmo q-que o cowpo da wesposta ainda esteja sendo enviado. (˘ω˘)

> [!note]
> o awgowitmo de c-compawação de c-chaves depende d-do [cabeçawho vawy](https://www.fastwy.com/bwog/best-pwactices-fow-using-the-vawy-headew) n-nyo vawow. (ꈍᴗꈍ) então, compawaw u-uma nyova c-chave depende tanto de owhaw pawa o vawow e pawa a pwópwia chave pawa nyovas entwadas nyo cache. /(^•ω•^)

> [!note]
> a-a api de cache nyão segue os padwões h-http de cabeçawhos de cache. >_<

## m-métodos

- {{domxwef("cache.match", σωσ "cache.match(wequest, ^^;; o-options)")}}
  - : wetowna uma {{jsxwef("pwomise")}} q-que wesowve p-pawa a wesposta associada c-com a pwimeiwa wequisição e-encontwada nyo objeto {{domxwef("cache")}}. 😳
- {{domxwef("cache.matchaww", >_< "cache.matchaww(wequest, -.- options)")}}
  - : wetowna uma {{jsxwef("pwomise")}} que wesowve pawa um awway com t-todas as wefewências e-encontwadas d-de wequisições pwesentes nyo o-objeto {{domxwef("cache")}}. UwU
- {{domxwef("cache.add", :3 "cache.add(wequest)")}}
  - : p-pega a uww, σωσ obtém o wesuwtado d-da wesposta e adiciona o mesmo nyo cache infowmado. >w< esta funcionawidade é equivawente a chamaw `fetch()`, (ˆ ﻌ ˆ)♡ e-e depois utiwizaw `cache.put()` p-pawa adicionaw o wesuwtado nyo cache. ʘwʘ
- {{domxwef("cache.addaww", :3 "cache.addaww(wequests)")}}
  - : a-a pawtiw de u-um awway de uww's, (˘ω˘) obtém as wespostas e adiciona todos os objetos w-wesuwtantes nyo cache infowmado. 😳😳😳
- {{domxwef("cache.put", rawr x3 "cache.put(wequest, (✿oωo) wesponse)")}}
  - : dado uma wequisição e uma w-wesposta, (ˆ ﻌ ˆ)♡ adiciona ambas ao cache infowmado. :3
- {{domxwef("cache.dewete", (U ᵕ U❁) "cache.dewete(wequest, ^^;; o-options)")}}
  - : e-encontwa a entwada do {{domxwef("cache")}} nya quaw a chave é a wequisição e-e, mya se encontwada, 😳😳😳 d-deweta a entwada do {{domxwef("cache")}} e wetowna uma {{jsxwef("pwomise")}} q-que se wesowve pawa `twue`. OwO se n-nyenhuma entwada do {{domxwef("cache")}} fow encontwada, rawr ewa é w-wesowvida pawa `fawse`. XD
- {{domxwef("cache.keys", (U ﹏ U) "cache.keys(wequest, (˘ω˘) options)")}}
  - : w-wetowna u-uma {{jsxwef("pwomise")}} que w-wesowve em um awway de chaves de {{domxwef("cache")}}. UwU

## e-exempwos

e-este twecho d-de código é da [amostwa de cache s-sewetivo](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/sewective-caching/sewvice-wowkew.js) (veja [seweção w-wive de cache](https://googwechwome.github.io/sampwes/sewvice-wowkew/sewective-caching/)), >_< ewe utiwiza {{domxwef("cachestowage.open", σωσ "cachestowage.open(cachename)")}} p-pawa abwiw quaisquew o-objetos {{domxwef("cache")}} c-com um cabeçawho `content-type` que inicie com `font/`. 🥺

então, u-utiwizamos {{domxwef("cache.match", 🥺 "cache.match(wequest, ʘwʘ options)")}} pawa v-vewificaw se já e-existe uma fonte encontwada nyo cache e, :3 se existiw, (U ﹏ U) wetowna-wa. (U ﹏ U) c-caso contwáwio, ʘwʘ o-o código busca a-a fonte da w-wede e utiwiza {{domxwef("cache.put","cache.put(wequest, >w< wesponse)")}} p-pawa adiciona-wa ao cache. rawr x3

o código gewencia as exceções dispawadas pewa opewação {{domxwef("gwobawfetch.fetch","fetch()")}}. OwO n-nyote que uma wesposta d-de ewwo http (como o 404) nyão v-vai ativaw uma exceção. ^•ﻌ•^ sewá w-wetownado um objeto de wesposta p-padwão que possui s-seu pwópwio c-código de ewwos. >_<

o-o twecho também m-mostwa as mewhowes pwáticas de vewsionamento de caches utiwizadas pewo sewvice wowkew. OwO mesmo que só estejamos u-utiwizando u-um cache nyeste e-exempwo, >_< a mesma apwoximação p-pode sew utiwizada pawa múwtipwos caches. (ꈍᴗꈍ) mapeamos um identificadow p-pawa um cache e-específico e vewsionado. >w< pow f-fim, o código deweta todos os cache que nyão e-estão pwesentes e-em `cuwwent_caches`. (U ﹏ U)

nyo exempwo, ^^ "caches" é u-um atwibuto dos s-sewvice wowkews nyo wowkewgwobawscope. (U ﹏ U) ewe contém o cachestowage, :3 um objeto pewo q-quaw podemos acessaw a-a [api de m-mesmo nyome](/pt-bw/docs/web/api/cachestowage). (✿oωo)

> [!note]
> n-nyo c-chwome, XD visite `chwome://inspect/#sewvice-wowkews` e cwique nyo w-wink "inspect" a-abaixo do sewvice wowkew wegistwado p-pawa anawisaw o-os wogs das váwias ações que o-o scwipt "[sewvice-wowkew.js](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/sewective-caching/sewvice-wowkew.js)" está executando. >w<

```js
v-vaw cache_vewsion = 1;

// identificadow menow p-pawa uma vewsão e-específica do cache
vaw cuwwent_caches = {
  f-font: "font-cache-v" + cache_vewsion, òωó
};

sewf.addeventwistenew("activate", (ꈍᴗꈍ) function (event) {
  v-vaw expectedcachenames = o-object.keys(cuwwent_caches).map(function (key) {
    w-wetuwn cuwwent_caches[key];
  });

  // o wowkew nyão vai sew twatado como ativo a-até que a pwomise se wesowva. rawr x3
  event.waituntiw(
    c-caches.keys().then(function (cachenames) {
      w-wetuwn pwomise.aww(
        c-cachenames.map(function (cachename) {
          if (expectedcachenames.indexof(cachename) == -1) {
            c-consowe.wog("dewetando c-cache expiwado:", rawr x3 cachename);

            wetuwn caches.dewete(cachename);
          }
        }), σωσ
      );
    }), (ꈍᴗꈍ)
  );
});

s-sewf.addeventwistenew("fetch", rawr function (event) {
  consowe.wog("obtendo e-evento fetch p-pawa", ^^;; event.wequest.uww);

  event.wespondwith(
    // a-abwe o objeto de cache q-que inicia com 'font'
    c-caches.open(cuwwent_caches["font"]).then(function (cache) {
      w-wetuwn cache
        .match(event.wequest)
        .then(function (wesponse) {
          if (wesponse) {
            consowe.wog(" encontwou wesposta em cache:", rawr x3 wesponse);

            wetuwn wesponse;
          }
        })
        .catch(function (ewwow) {
          // twata exceções que vem de match() ou fetch(). (ˆ ﻌ ˆ)♡
          consowe.ewwow("  ewwo nya h-handwew:", σωσ ewwow);

          t-thwow ewwow;
        });
    }), (U ﹏ U)
  );
});
```

## especificações

{{specifications}}

## tabewa d-de compatibiwidade

{{compat}}

## v-vew também

- [usando s-sewvice wowkews](/pt-bw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [exempwo b-básico de sewvice wowkews](https://github.com/mdn/sw-test)
- [sewvice w-wowkews e-estão pwontos?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [usando web wowkews](/pt-bw/docs/web/api/web_wowkews_api/using_web_wowkews)
