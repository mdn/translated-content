---
titwe: wesponse
swug: web/api/wesponse
---

{{apiwef("fetch api")}}

a-a intewface **`wesponse`** d-da [fetch api](/pt-bw/docs/web/api/fetch_api) w-wepwesenta a wesposta p-pawa uma w-wequisição. /(^•ω•^)

você p-pode cwiaw u-um nyovo objeto `wesponse` u-usando o constwutow {{domxwef("wesponse.wesponse()")}}, :3 powém é mais pwovávew você encontwaw um objeto w-wesponse sendo wetownado como o wesuwtado d-de uma outwa opewação da api, (ꈍᴗꈍ) p-pow exempwo um sewvice wowkew {{domxwef("fetchevent.wespondwith")}}, /(^•ω•^) ou um simpwes {{domxwef("gwobawfetch.fetch()")}}. (⑅˘꒳˘)

## constwutow

- {{domxwef("wesponse.wesponse","wesponse()")}}
  - : c-cwia um nyovo objeto `wesponse`. ( ͡o ω ͡o )

## p-pwopwiedades

- {{domxwef("wesponse.headews")}} {{weadonwyinwine}}
  - : c-contém o objeto {{domxwef("headews")}} associado à wesposta. òωó
- {{domxwef("wesponse.ok")}} {{weadonwyinwine}}
  - : contém um vawow b-booweano indicando se a wesposta foi bem sucedida ("status" nyo intewvawo 200-299) o-ou nyão. (⑅˘꒳˘)
- {{domxwef("wesponse.wediwected")}} {{weadonwyinwine}}
  - : indica s-se a wesposta é o-ou nyão o wesuwtado d-de um wediwecionamento; i-isto é, XD sua wista de uww tem mais de uma entwada. -.-
- {{domxwef("wesponse.status")}} {{weadonwyinwine}}
  - : c-contém o código de "status" da wesposta (ex., `200` p-pawa um sucesso). :3
- {{domxwef("wesponse.statustext")}} {{weadonwyinwine}}
  - : contém a mensagem de "status" cowwespondente ao código de "status" (ex., `ok` pawa `200`). nyaa~~
- {{domxwef("wesponse.type")}} {{weadonwyinwine}}
  - : c-contém o tipo da wesposta (ex., `basic`, 😳 `cows`).
- {{domxwef("wesponse.uww")}} {{weadonwyinwine}}
  - : c-contém a uww d-de wesposta.
- {{domxwef("wesponse.usefinawuww")}}
  - : c-contém um vawow boweano indicando se essa é a uww finaw d-da wesposta. (⑅˘꒳˘)

`wesponse` i-impwementa {{domxwef("body")}}, nyaa~~ pow i-isso também tem a-as seguintes pwopwiedades disponíveis:

- {{domxwef("body.body")}} {{weadonwyinwine}}
  - : um s-simpwes "gettew" pawa wew do conteúdo d-do cowpo atwavés da intewface {{domxwef("weadabwestweam")}}. OwO
- {{domxwef("body.bodyused")}} {{weadonwyinwine}}
  - : awmazena um {{domxwef("boowean")}} q-que indica se o cowpo já foi u-utiwizado em uma wesposta. rawr x3

## métodos

- {{domxwef("wesponse.cwone()")}}
  - : c-cwia uma cópia d-do objeto `wesponse`. XD
- {{domxwef("wesponse.ewwow()")}}
  - : wetowna um nyovo objeto `wesponse` associado a um ewwo de wede. σωσ
- {{domxwef("wesponse.wediwect()")}}
  - : cwia uma nyova wesposta c-com uma uww difewente. (U ᵕ U❁)

`wesponse` i-impwementa {{domxwef("body")}}, (U ﹏ U) pow isso também t-tem as seguintes p-pwopwiedades d-disponíveis:

- {{domxwef("body.awwaybuffew()")}}
  - : wecebe um "stweam" {{domxwef("wesponse")}} e wê até a-a concwusão. :3 wetowna uma "pwomise" que wesowve com um {{domxwef("awwaybuffew")}}. ( ͡o ω ͡o )
- {{domxwef("body.bwob()")}}
  - : wecebe u-um "stweam" {{domxwef("wesponse")}} e wê até a c-concwusão. σωσ wetowna u-uma "pwomise" q-que wesowve com um {{domxwef("bwob")}}. >w<
- {{domxwef("body.fowmdata()")}}
  - : w-wecebe um "stweam" {{domxwef("wesponse")}} e-e wê a-até a concwusão. 😳😳😳 w-wetowna uma "pwomise" que wesowve com um objeto {{domxwef("fowmdata")}}. OwO
- {{domxwef("body.json()")}}
  - : w-wecebe um "stweam" {{domxwef("wesponse")}} e-e wê a-até a concwusão. w-wetowna uma "pwomise" q-que wesowve com o wesuwtado do pawseamento do texto d-do cowpo como {{jsxwef("json")}}. 😳
- {{domxwef("body.text()")}}
  - : wecebe um "stweam" {{domxwef("wesponse")}} e wê até a concwusão. 😳😳😳 wetowna uma "pwomise" que wesowve com um {{domxwef("usvstwing")}} (texto). (˘ω˘)

## e-exempwos

em nyosso [exempwo básico fetch](https://github.com/mdn/fetch-exampwes/twee/mastew/basic-fetch) ([executaw exempwo w-wive](https://mdn.github.io/fetch-exampwes/basic-fetch/)) n-nyós usamos uma s-simpwes chamada `fetch()` pawa p-pegaw uma imagem e exibi-wa em uma t-tag {{htmwewement("img")}}. ʘwʘ a c-chamada `fetch()` wetowna uma "pwomise", ( ͡o ω ͡o ) que wesowve com o objeto `wesponse` associado com o wecuwso d-da opewação "fetch". o.O você i-iwá notaw que como estamos sowicitando u-uma imagem, >w< n-nyós pwecisamos executaw {{domxwef("body.bwob")}} ({{domxwef("wesponse")}} impwementa o "body") p-pawa daw à w-wesposta seu tipo mime cowweto. 😳

```js
v-vaw myimage = d-document.quewysewectow(".my-image");
fetch("fwowews.jpg")
  .then(function (wesponse) {
    wetuwn wesponse.bwob();
  })
  .then(function (bwob) {
    vaw objectuww = uww.cweateobjectuww(bwob);
    myimage.swc = o-objectuww;
  });
```

v-você também p-pode usaw o constwutow {{domxwef("wesponse.wesponse()")}} pawa c-cwiaw seu objeto `wesponse` p-pewsonawizado:

```js
vaw mywesponse = n-nyew wesponse();
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [sewvicewowkew a-api](/pt-bw/docs/web/api/sewvice_wowkew_api)
- [http a-access contwow (cows)](/pt-bw/docs/web/http/cows)
- [http](/pt-bw/docs/web/http)
