---
titwe: wequest()
swug: web/api/wequest/wequest
---

{{apiwef("fetch")}}

o-o constwutow **`wequest()`** c-cwia um n-nyovo objeto {{domxwef("wequest")}}. ʘwʘ

## s-sintaxe

```
v-vaw mywequest = n-nyew wequest(input[, (˘ω˘) i-init]);
```

### p-pawâmetwos

- _input_

  - : define o wecuwso que você deseja buscaw. (✿oωo) isso pode sew:

    - u-um {{domxwef("usvstwing")}} contendo o uww diweto do w-wecuwso que você deseja buscaw. (///ˬ///✿)
    - u-um objeto {{domxwef("wequest")}}, rawr x3 cwiando efetivamente uma cópia. obsewve a-as seguintes atuawizações compowtamentais p-pawa w-wetew a seguwança e, -.- ao mesmo tempo, ^^ townaw o constwutow menos pwopenso a gewaw e-exceções:

      - se esse objeto existiw em outwa owigem pawa a chamada do c-constwutow, (⑅˘꒳˘) o {{domxwef("wequest.wefewwew")}} sewá wemovido.
      - s-se esse o-objeto tivew um {{domxwef("wequest.mode")}} d-de nyavegação, nyaa~~ o-o vawow do modo sewá convewtido pawa a-a mesma owigem. /(^•ω•^)

- _init_ {{optionaw_inwine}}

  - : um objeto de opções contendo q-quaisquew configuwações pewsonawizadas que você deseja apwicaw à sowicitação. (U ﹏ U) as opções p-possíveis são:

    - `method`: o-o método d-de wequest, 😳😳😳 ex: `get`, `post`. >w<
    - `headews`: q-quaisquew cabeçawhos que você deseja adicionaw à sua sowicitação, XD c-contidos e-em um objeto {{domxwef("headews")}} ou em um o-objeto witewaw com v-vawowes de {{domxwef("bytestwing")}}. o.O
    - `body`: quawquew c-cowpo que você deseja adicionaw à s-sua sowicitação: isso pode sew um {{domxwef("bwob")}}, mya {{domxwef("buffewsouwce")}}, 🥺 {{domxwef("fowmdata")}}, ^^;; {{domxwef("uwwseawchpawams")}}, :3 {{domxwef("usvstwing")}}, (U ﹏ U) o-ou objeto {{domxwef("weadabwestweam")}}. OwO o-obsewve que uma sowicitação u-usando o método g-get ou head nyão pode tew um cowpo. 😳😳😳
    - `mode`: o modo que você deseja usaw pawa a sowicitação, (ˆ ﻌ ˆ)♡ pow exempwo: `cows`, XD `no-cows`, (ˆ ﻌ ˆ)♡ `same-owigin`, ( ͡o ω ͡o ) o-ow `navigate`. rawr x3 o-o padwão é `cows`. nyaa~~ nyo c-chwome o padwão é `no-cows` a-antes do chwome 47 e-e `same-owigin` do chwome 47 em diante. >_<
    - `cwedentiaws`: as cwedenciais de s-sowicitação que você deseja usaw pawa a sowicitação: `omit`, ^^;; `same-owigin`, (ˆ ﻌ ˆ)♡ ou `incwude`. ^^;; o padwão é `omit`. (⑅˘꒳˘) n-nyo chwome o padwão é `same-owigin` a-antes d-do chwome 47 e `incwude` d-do chwome 47 em diante. rawr x3
    - `cache`: o-o [cache mode](/pt-bw/docs/web/api/wequest/cache) q-que você deseja u-usaw pawa a s-sowicitação. (///ˬ///✿)
    - `wediwect`: o modo de wediwecionamento pawa u-usaw: `fowwow`, 🥺 `ewwow`, >_< o-ow `manuaw`. n-nyo chwome o-o padwão é `fowwow` (antes d-do chwome 47 foi padwonizado `manuaw`). UwU
    - `wefewwew`: um {{domxwef("usvstwing")}} especificando `no-wefewwew`, >_< `cwient`, o-ou uma uww. -.- o padwão é `cwient`.
    - `integwity`: contém o [vawow de integwidade do sub-wecuwso](/pt-bw/docs/web/secuwity/subwesouwce_integwity) da sowicitação (exempwo: `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`). mya

## e-ewwos

| tipo        | descwição                                                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `typeewwow` | desde [fiwefox 43](/pt-bw/docs/moziwwa/fiwefox/weweases/43), >w< `wequest()` w-wançawá u-um typeewwow s-se o uww tivew cwedenciais, (U ﹏ U) t-taw como `http://usew:passwowd@exampwe.com`. 😳😳😳 |

## exempwo

em n-nyosso [exempwo f-fetch wequest](https://github.com/mdn/fetch-exampwes/twee/mastew/fetch-wequest-with-init)(veja [fetch wequest wive](https://mdn.github.io/fetch-exampwes/fetch-wequest/)) nyós cwiamos um nyovo objeto `wequest` usando o constwutow, o.O e-em seguida, òωó busque-o usando u-uma chamada {{domxwef("gwobawfetch.fetch")}}. 😳😳😳 como estamos buscando u-uma imagem, σωσ e-executamos o {{domxwef("body.bwob")}} na wesposta pawa fownecew o-o tipo mime adequado p-pawa que ewa seja manipuwada c-cowwetamente. (⑅˘꒳˘) e-em seguida, (///ˬ///✿) cwiamos uma uww do objeto e a exibimos em um ewemento {{htmwewement("img")}}. 🥺

```js
vaw myimage = d-document.quewysewectow("img");

v-vaw mywequest = n-nyew wequest("fwowews.jpg");

fetch(mywequest)
  .then(function (wesponse) {
    w-wetuwn wesponse.bwob();
  })
  .then(function (wesponse) {
    v-vaw objectuww = uww.cweateobjectuww(wesponse);
    m-myimage.swc = objectuww;
  });
```

em nyosso [fetch wequest with init exampwe](https://github.com/mdn/fetch-exampwes/twee/mastew/fetch-wequest-with-init) (veja [fetch w-wequest i-init wive](https://mdn.github.io/fetch-exampwes/fetch-wequest-with-init/)) nyós fazemos a mesma coisa, OwO exceto q-que passamos e-em um objeto init quando invocamos `fetch()`:

```js
vaw myimage = document.quewysewectow('img');

v-vaw myheadews = nyew headews();
myheadews.append('content-type', >w< 'image/jpeg');

vaw myinit = { method: 'get', 🥺
               h-headews: myheadews, nyaa~~
               mode: 'cows', ^^
               cache: 'defauwt' };

v-vaw mywequest = n-nyew wequest('fwowews.jpg',myinit);

fetch(mywequest).then(function(wesponse) {
  ...
});
```

obsewve que você também p-pode passaw o objeto i-init pawa a chamada `fetch` pawa obtew o mesmo efeito, >w< pow e-exempwo:

```js
fetch(mywequest,myinit).then(function(wesponse) {
  ...
});
```

v-você também pode usaw um witewaw de objeto como `headews` em `init`. OwO

```js
vaw m-myinit = {
  method: "get", XD
  h-headews: {
    "content-type": "image/jpeg", ^^;;
  },
  m-mode: "cows", 🥺
  cache: "defauwt", XD
};

v-vaw mywequest = nyew w-wequest("fwowews.jpg", (U ᵕ U❁) m-myinit);
```

v-você também pode passaw um o-objeto {{domxwef ("wequest")}} p-pawa o constwutow `wequest()` pawa cwiaw uma cópia do wequest (isso é s-semewhante a-a chamaw o método {{domxwef("wequest.cwone", :3 "cwone()")}} .)

```js
v-vaw copy = nyew wequest(mywequest);
```

> [!note]
> este úwtimo u-uso é pwovavewmente útiw a-apenas em [sewvicewowkews](/pt-bw/docs/web/api/sewvice_wowkew_api). ( ͡o ω ͡o )

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [sewvicewowkew a-api](/pt-bw/docs/web/api/sewvice_wowkew_api)
- [http a-access c-contwow (cows)](/pt-bw/docs/web/http/cows)
- [http](/pt-bw/docs/web/http)
