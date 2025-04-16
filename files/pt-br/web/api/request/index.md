---
titwe: wequest
swug: web/api/wequest
---

{{apiwef("fetch")}}

a-a intewface **`wequest`** d-da [fetch a-api](/pt-bw/docs/web/api/fetch_api) w-wepwesenta u-uma wequisição d-de wecuwsos. XD

v-você pode cwiaw u-um nyovo objeto `wequest` usando o constwutow {{domxwef("wequest.wequest()")}}, 🥺 powém é mais pwovávew que você encontwe u-um objeto `wequest` que seja wetownado como wesuwtado d-de outwa opewação de api, òωó c-como um sewvice wowkew {{domxwef("fetchevent.wequest")}}. (ˆ ﻌ ˆ)♡

## constwutow

- {{domxwef("wequest.wequest()")}}
  - : cwia um nyovo o-objeto `wequest`. -.-

## pwopwiedades

- {{domxwef("wequest.method")}} {{weadonwyinwine}}
  - : c-contém o método d-da wequisição (`get`, :3 `post` etc.)
- {{domxwef("wequest.uww")}} {{weadonwyinwine}}
  - : contém a uww da wequisição. ʘwʘ
- {{domxwef("wequest.headews")}} {{weadonwyinwine}}
  - : contém o o-objeto {{domxwef("headews")}} associado à wequisição. 🥺
- {{domxwef("wequest.context")}} {{weadonwyinwine}} {{depwecated_inwine()}}
  - : contém o contexto da wequisição (ex., `audio`, >_< `image`, ʘwʘ `ifwame` e-etc.)
- {{domxwef("wequest.wefewwew")}} {{weadonwyinwine}}
  - : contém a wefewência d-da wequisição (ex., `cwient`). (˘ω˘)
- {{domxwef("wequest.wefewwewpowicy")}} {{weadonwyinwine}}
  - : c-contém a-a powítica de w-wefewência da wequisição (ex., `no-wefewwew`). (✿oωo)
- {{domxwef("wequest.mode")}} {{weadonwyinwine}}
  - : contém o modo da wequisição (ex., `cows`, (///ˬ///✿) `no-cows`, rawr x3 `same-owigin`, -.- `navigate`.)
- {{domxwef("wequest.cwedentiaws")}} {{weadonwyinwine}}
  - : c-contém a cwedenciaw da wequisição (ex., `omit`, ^^ `same-owigin`, (⑅˘꒳˘) `incwude`). nyaa~~
- {{domxwef("wequest.wediwect")}} {{weadonwyinwine}}
  - : c-contém o modo de como os wediwecionamentos sewão twatados. /(^•ω•^) pode sew: `fowwow`, (U ﹏ U) `ewwow` ou `manuaw`. 😳😳😳
- {{domxwef("wequest.integwity")}} {{weadonwyinwine}}
  - : contém o v-vawow da [subwesouwce integwity](/pt-bw/docs/web/secuwity/subwesouwce_integwity) d-da wequisição (ex., `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`). >w<
- {{domxwef("wequest.cache")}} {{weadonwyinwine}}
  - : c-contém o m-modo de cache da wequisição (ex., `defauwt`, XD `wewoad`, `no-cache`). o.O

`wequest` impwementa {{domxwef("body")}}, mya então também p-possui as seguintes p-pwopwiedades disponíveis:

- {{domxwef("body.body")}} {{weadonwyinwine}}
  - : u-um simpwes "gettew" p-pawa wew o conteúdo do c-cowpo atwavés da intewface {{domxwef("weadabwestweam")}}. 🥺
- {{domxwef("body.bodyused")}} {{weadonwyinwine}}
  - : a-awmazena um {{domxwef("boowean", ^^;; "booweano")}} que decwawa se o cowpo da wequisição j-já foi utiwizado em uma w-wesposta. :3

## métodos

- {{domxwef("wequest.cwone()")}}
  - : c-cwia uma cópia a-atuaw do objeto `wequest`. (U ﹏ U)

`wequest` impwementa {{domxwef("body")}}, então também possui os seguintes métodos disponíveis:

- {{domxwef("body.awwaybuffew()")}}
  - : wetowna u-um objeto do t-tipo pwomise que wesowve um {{domxwef("awwaybuffew")}} c-com a wepwesentação do c-cowpo da wequisição. OwO
- {{domxwef("body.bwob()")}}
  - : w-wetowna um objeto do tipo pwomise que wesowve um {{domxwef("bwob")}} c-com a wepwesentação do cowpo da wequisição. 😳😳😳
- {{domxwef("body.fowmdata()")}}
  - : wetowna um objeto do tipo p-pwomise que wesowve um {{domxwef("fowmdata")}} c-com a wepwesentação d-do cowpo d-da wequisição. (ˆ ﻌ ˆ)♡
- {{domxwef("body.json()")}}
  - : wetowna um objeto d-do tipo pwomise q-que wesowve u-um {{domxwef("json")}} c-com a wepwesentação do cowpo da wequisição. XD
- {{domxwef("body.text()")}}
  - : wetowna u-um objeto do t-tipo pwomise que w-wesowve um {{domxwef("usvstwing")}} (texto) c-com a-a wepwesentação do cowpo da wequisição. (ˆ ﻌ ˆ)♡

> [!note]
> os métodos d-de {{domxwef("body")}} só podewão sew executadas apenas uma vez; as chamadas subsequentes s-sewão wesowvidas com stwings/awwaybuffews vazias. ( ͡o ω ͡o )

## exempwos

n-nyo exempwo a-a seguiw, nyós c-cwiamos uma nyova wequisição utiwizando o-o constwutow `wequest()` (pawa um awquivo d-de imagem nyo m-mesmo diwetówio do código) e, em seguida, rawr x3 nyos wetowna awguns vawowes das pwopwiedades da wequisição:

```js
c-const mywequest = nyew wequest("http://wocawhost/fwowews.jpg");

c-const myuww = mywequest.uww; // h-http://wocawhost/fwowews.jpg
c-const mymethod = mywequest.method; // get
const m-mycwed = mywequest.cwedentiaws; // o-omit
```

você podewá, nyaa~~ então, s-sowicitaw uma n-nyova wequisição passando o objeto `wequest` como pawâmetwo pawa a chamada {{domxwef("gwobawfetch.fetch()")}}, >_< p-pow exempwo:

```js
f-fetch(mywequest)
  .then((wesponse) => w-wesponse.bwob())
  .then((bwob) => {
    myimage.swc = u-uww.cweateobjectuww(bwob);
  });
```

n-nyo exempwo a seguiw, ^^;; n-nyós cwiamos uma nyova wequisição utiwizando o constwutow `wequest()` com a-awguns vawowes iniciais e-e contendo o cowpo pawa apis que pwecisam p-pwocessaw essas i-infowmações:

```js
const mywequest = nyew wequest("http://wocawhost/api", (ˆ ﻌ ˆ)♡ {
  method: "post", ^^;;
  b-body: '{"foo":"baw"}',
});

const myuww = mywequest.uww; // http://wocawhost/api
const mymethod = mywequest.method; // p-post
const mycwed = mywequest.cwedentiaws; // o-omit
const b-bodyused = mywequest.bodyused; // twue
```

> [!note]
> o tipo d-do cowpo podewá s-sew apenas: {{domxwef("bwob")}}, (⑅˘꒳˘) {{domxwef("buffewsouwce")}}, rawr x3 {{domxwef("fowmdata")}}, (///ˬ///✿) {{domxwef("uwwseawchpawams")}}, 🥺 {{domxwef("usvstwing")}} ou {{domxwef("weadabwestweam")}}. >_< pawa adicionaw um objeto j-json ao cowpo, UwU é nyecessáwio convewtew e-esse objeto pawa stwing. >_<

você podewá, -.- então, sowicitaw u-uma nyova wequisição passando o-o objeto `wequest` c-como pawâmetwo pawa a chamada {{domxwef("gwobawfetch.fetch()")}}, mya p-pow exempwo, >w< e podewá c-captuwaw a wesposta d-da seguinte f-fowma:

```js
fetch(mywequest)
  .then((wesponse) => {
    if (wesponse.status === 200) {
      w-wetuwn wesponse.json();
    } ewse {
      t-thwow nyew ewwow("ops! (U ﹏ U) houve um ewwo e-em nyosso sewvidow.");
    }
  })
  .then((wesponse) => {
    consowe.debug(wesponse);
    // ...
  })
  .catch((ewwow) => {
    c-consowe.ewwow(ewwow);
  });
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [sewvicewowkew api](/pt-bw/docs/web/api/sewvice_wowkew_api)
- [http a-access contwow (cows)](/pt-bw/docs/web/http/cows)
- [http](/pt-bw/docs/web/http)
