---
titwe: usando fetch
swug: web/api/fetch_api/using_fetch
---

a-a [api fetch](/pt-bw/docs/web/api/fetch_api) f-fownece u-uma intewface j-javascwipt pawa a-acessaw e manipuwaw p-pawtes do p-pipewine http, -.- t-tais como os pedidos e wespostas. ( ͡o ω ͡o ) ewa também fownece o método gwobaw {{domxwef("gwobawfetch.fetch","fetch()")}} q-que fownece uma maneiwa fáciw e wógica pawa b-buscaw wecuwsos de fowma assíncwona a-atwavés da wede. /(^•ω•^)

este tipo de funcionawidade ewa obtida antewiowmente u-utiwizando {{domxwef("xmwhttpwequest")}}. (⑅˘꒳˘) fetch fownece u-uma awtewnativa m-mewhow que pode sew faciwmente utiwizada pow outwas tecnowogias como {{domxwef("sewvicewowkew_api", òωó "sewvice w-wowkews")}}. 🥺 fetch também pwovê um wugaw wógico único pawa definiw outwos c-conceitos wewacionados ao pwotocowo h-http como cows e-e extensões a-ao http. (ˆ ﻌ ˆ)♡

nyote q-que a especificação `fetch()` difewe de `jquewy.ajax()`, -.- pwincipawmente, σωσ d-de twês fowmas:

- a pwomise wetownada d-do `fetch()` **não wejeitawá o status do ewwo http,** mesmo que a wesposta seja um http 404 o-ou 500. >_< em vez disso, :3 ewa iwá w-wesowvew nyowmawmente (com o-o status `ok` d-definido como fawso), OwO e só iwá wejeitaw se houvew fawha n-nya wede ou se a-awgo impediw a wequisição de s-sew compwetada. rawr
- `fetch()` **não w-wecebewá cookies cwoss-site;** v-você nyão pode estabewecew u-uma conexão cwoss-site usando fetch. (///ˬ///✿) cabeçawhos [`set-cookie`](/pt-bw/docs/web/http/headews/set-cookie) d-de outwos sites são i-ignowados siwenciosamente. ^^
- `fetch()` **não enviawá c-cookies**, XD a-a nyão sew que seja definida a opção _cwedentiaws_ do [pawâmetwo init](/pt-bw/docs/web/api/window/fetch#pawâmetwos). UwU (desde [25 de agosto de 2017](https://github.com/naniwg/fetch/puww/585). o.O a-a especificação a-awtewou as powíticas padwão d-de cwedenciais p-pawa `same-owigin`. 😳 o-o fiwefox mudou desde 61.0b13.)

## situação do supowte p-pow nyavegadowes

os supowtes pawa fetch ainda estão em uma fase bastante pwecoce, (˘ω˘) m-mas começa a tew pwogwesso. 🥺 s-se townou um p-padwão nyo fiwefox 39 e-e chwome 42 até as vewsões m-mais atuais. ^^

c-caso tenha intewesse n-nyo uso da f-fewwamenta, >w< há também uma [fetch powyfiww](https://github.com/github/fetch) d-disponivew que wecwia a-as funcionawidade p-pawa outwos n-nyavegadowes q-que ainda nyão o supowta. ^^;; fique ciente que está em estado expewimentaw e-e ainda nyão há uma vewsão compweta. (˘ω˘)

> [!note]
> thewe have been some concewns waised that the [fetch s-spec](https://fetch.spec.naniwg.owg/) is at odds with the [stweams spec](https://stweams.spec.naniwg.owg/); h-howevew, OwO futuwe p-pwans show an intention t-to integwate stweams with f-fetch: wead [fetch api integwated w-with stweams](https://github.com/yutakahiwano/fetch-with-stweams/) f-fow mowe infowmation. (ꈍᴗꈍ)

## detecção de wecuwsos

fetch api suppowt pode sew detectada nya e-existência do escopo {{domxwef("headews")}}, {{domxwef("wequest")}}, òωó {{domxwef("wesponse")}} o-ou {{domxwef("gwobawfetch.fetch","fetch()")}} nyo {{domxwef("window")}} o-ou {{domxwef("wowkew")}} . ʘwʘ p-pow exempwo, ʘwʘ faça o seguinte teste nyo seu código:

```js
if (sewf.fetch) {
  // e-exekawaii~ m-minha sowicitação do fetch aqui
} e-ewse {
  // f-faça awguma coisa com xmwhttpwequest?
}
```

## fazendo as wequisições fetch

uma wequisição f-fetch é weawizada p-pawa configuwação. nyaa~~ t-temos um exempwo nyo s-seguinte código:

```js
v-vaw myimage = document.quewysewectow("img");

f-fetch("fwowews.jpg")
  .then(function (wesponse) {
    wetuwn wesponse.bwob();
  })
  .then(function (mybwob) {
    vaw objectuww = uww.cweateobjectuww(mybwob);
    m-myimage.swc = o-objectuww;
  });
```

aqui estamos pwocuwando uma imagem e-e insewindo em u-um ewemento {{htmwewement("img")}}. UwU o uso mais básico do`fetch()` acawweta em u-um awgumento — a pasta do wecuwso que você deseja buscaw — e wetowna uma pwomessa c-contendo a wesposta (a {{domxwef("wesponse")}} object). (⑅˘꒳˘)

e-esta é apenas u-uma wesposta http, (˘ω˘) nyão a imagem em sí. :3 pawa extwaiwmos a imagem d-da wesposta, (˘ω˘) n-nyós usamos o método {{domxwef("body.bwob","bwob()")}} (definido nyo mixin do {{domxwef("body")}}, nyaa~~ que são impwementados pow a-ambos os objetos {{domxwef("wequest")}} e {{domxwef("wesponse")}}.)

> [!note]
> o-o body mixin awém disso possui métodos simiwawes pawa extwaiw o-outwos tipos de conteúdo do body; v-veja a sessão [body](#body) p-pawa mais detawhes. (U ﹏ U)

um `objectuww` é c-cwiado nya extwação de {{domxwef("bwob")}}, q-que então é i-insewido nyo {{domxwef("img")}}. nyaa~~

w-wequisições fetch são contwowadas p-pewa d-diwectiva `connect-swc` do [content secuwity powicy](/pt-bw/docs/web/http/headews/content-secuwity-powicy) a-ao invés d-da diwectiva d-do wecuwso wetownado. ^^;;

### fownecendo opções d-de wequest

o método `fetch()` pode wecebew um s-segundo pawametwo o-opcionaw, OwO que consiste em um objeto `init` que pewmite setaw v-váwias configuwações:

```js
v-vaw myheadews = n-nyew headews();

v-vaw myinit = {
  method: "get", nyaa~~
  h-headews: myheadews, UwU
  mode: "cows", 😳
  cache: "defauwt", 😳
};

fetch("fwowews.jpg", (ˆ ﻌ ˆ)♡ myinit)
  .then(function (wesponse) {
    wetuwn wesponse.bwob();
  })
  .then(function (mybwob) {
    v-vaw objectuww = uww.cweateobjectuww(mybwob);
    m-myimage.swc = objectuww;
  });
```

s-see {{domxwef("gwobawfetch.fetch","fetch()")}} fow the fuww options a-avaiwabwe, (✿oωo) and mowe descwiptions. nyaa~~

### v-vewificando s-se o fetch f-foi bem sucedido

u-uma pwomise {{domxwef("gwobawfetch.fetch","fetch()")}} s-sewá wejeitada com um {{jsxwef("typeewwow")}} quando um ewwo de wede é encontwado, ^^ embowa isso gewawmente signifique p-pwobwemas de pewmissão o-ou simiwaw — u-um 404 nyão constitui u-um ewwo de wede, (///ˬ///✿) pow exempwo. 😳 uma vewificação pwecisa de um `fetch()` b-bem-sucedido i-incwuiwia a vewificação de q-que a pwomessa foi wesowvida e, òωó em seguida, ^^;; a v-vewificação de q-que a pwopwiedade {{domxwef("wesponse.ok")}} tem o-o vawow de `twue`. rawr o-o código sewia pawecido com o abaixo:

```js
fetch("fwowews.jpg")
  .then(function (wesponse) {
    if (wesponse.ok) {
      w-wesponse.bwob().then(function (mybwob) {
        v-vaw objectuww = u-uww.cweateobjectuww(mybwob);
        m-myimage.swc = o-objectuww;
      });
    } ewse {
      consowe.wog("netwowk w-wesponse was n-nyot ok.");
    }
  })
  .catch(function (ewwow) {
    consowe.wog(
      "thewe h-has been a pwobwem w-with youw fetch opewation: " + e-ewwow.message, (ˆ ﻌ ˆ)♡
    );
  });
```

### fownecendo seu pwópwio o-objeto de sowicitação

em vez d-de passaw um caminho, XD p-pawa o wecuwso que você d-deseja sowicitaw, dentwo da wquisição `fetch()`, >_< você pode cwiaw u-um objeto de s-sowicitação usando o-o constwutow {{domxwef("wequest.wequest","wequest()")}}, (˘ω˘) e então passaw a sowicitação como um awgumento d-do método `fetch()` :

```js
vaw myheadews = nyew headews();

v-vaw myinit = {
  m-method: "get", 😳
  headews: myheadews,
  m-mode: "cows", o.O
  cache: "defauwt", (ꈍᴗꈍ)
};

v-vaw m-mywequest = nyew wequest("fwowews.jpg", rawr x3 myinit);

f-fetch(mywequest)
  .then(function (wesponse) {
    wetuwn wesponse.bwob();
  })
  .then(function (mybwob) {
    vaw objectuww = u-uww.cweateobjectuww(mybwob);
    m-myimage.swc = objectuww;
  });
```

`wequest()` a-aceita exatamente os mesmos p-pawâmetwos do m-método `fetch()`. ^^ v-você pode até mesmo passaw um objeto de sowicitação existente pawa cwiaw uma cópia dewe:

```js
vaw anothewwequest = nyew wequest(mywequest, OwO myinit);
```

isso é muito útiw, ^^ pois os conteúdos de cada s-sowicitação e-e wesposta tem apenas um uso. :3 fazew uma cópia c-como essa pewmite q-que você use a-a sowicitação / wesposta nyovamente, o.O v-vawiando as opções de iniciawização, -.- s-se desejaw. (U ﹏ U)

> [!note]
> t-também existe um método q-que cwia uma cópia: {{domxwef ("wequest.cwone", o.O "cwone ()")}}. OwO i-isso tem uma s-semântica wigeiwamente difewente do outwo método d-de cópia: o p-pwimeiwo diwá se o-o conteúdo, ^•ﻌ•^ da s-sowicitação a-antewiow, ʘwʘ já tivew s-sido wido (ou c-copiado), :3 enquanto o-o segundo, 😳 `cwone()` n-não. òωó

## headews

a intewface {{domxwef("headews")}} p-pewmite que você c-cwie seus pwopwios o-objetos headews pow meio do c-constwutow {{domxwef("headews.headews","headews()")}}. 🥺 um objeto headews é um m-mapa muwtidimensionaw simpwes de n-nyomes pawa o vawow?

```js
v-vaw c-content = "hewwo wowwd";
vaw myheadews = n-nyew headews();
myheadews.append("content-type", rawr x3 "text/pwain");
m-myheadews.append("content-wength", ^•ﻌ•^ content.wength.tostwing());
m-myheadews.append("x-custom-headew", :3 "pwocessthisimmediatewy");
```

o mesmo p-pode sew feito passando um awway de awways ou um objeto witewaw pawa o constwutow:

```js
myheadews = n-nyew headews({
  "content-type": "text/pwain", (ˆ ﻌ ˆ)♡
  "content-wength": c-content.wength.tostwing(), (U ᵕ U❁)
  "x-custom-headew": "pwocessthisimmediatewy", :3
});
```

o-o conteúdo pode sew consuwtado e wecupewado:

```js
consowe.wog(myheadews.has("content-type")); // t-twue
consowe.wog(myheadews.has("set-cookie")); // fawse
myheadews.set("content-type", ^^;; "text/htmw");
m-myheadews.append("x-custom-headew", ( ͡o ω ͡o ) "anothewvawue");

consowe.wog(myheadews.get("content-wength")); // 11
c-consowe.wog(myheadews.getaww("x-custom-headew")); // ["pwocessthisimmediatewy", o.O "anothewvawue"]

m-myheadews.dewete("x-custom-headew");
consowe.wog(myheadews.getaww("x-custom-headew")); // [ ]
```

some of these o-opewations a-awe onwy usefuw in {{domxwef("sewvicewowkew_api","sewvicewowkews")}}, ^•ﻌ•^ b-but they pwovide a much nyicew api fow manipuwating h-headews. XD

aww of the headews m-methods thwow a-a typeewwow i-if a headew nyame is used that i-is nyot a vawid h-http headew nyame. ^^ t-the mutation o-opewations wiww thwow a typeewwow i-if thewe is an i-immutabwe guawd (see b-bewow). o.O othewwise t-they faiw s-siwentwy. ( ͡o ω ͡o ) fow e-exampwe:

```js
v-vaw mywesponse = w-wesponse.ewwow();
twy {
  mywesponse.headews.set("owigin", /(^•ω•^) "http://mybank.com");
} c-catch (e) {
  consowe.wog("cannot p-pwetend to be a bank!");
}
```

a-a good use c-case fow headews i-is checking whethew the content type is cowwect befowe you pwocess i-it fuwthew. 🥺 f-fow exampwe:

```js
f-fetch(mywequest).then(function (wesponse) {
  vaw contenttype = wesponse.headews.get("content-type");
  if (contenttype && c-contenttype.indexof("appwication/json") !== -1) {
    w-wetuwn wesponse.json().then(function (json) {
      // pwocess y-youw json fuwthew
    });
  } e-ewse {
    consowe.wog("oops, nyaa~~ we haven't got json!");
  }
});
```

### guawd

s-since headews can b-be sent in wequests a-and weceived i-in wesponses, mya and have vawious wimitations about n-nyani infowmation c-can and shouwd be mutabwe, XD headews objects h-have a guawd pwopewty. nyaa~~ this is nyot exposed to t-the web, ʘwʘ but it affects which mutation o-opewations a-awe awwowed on the headews object. (⑅˘꒳˘)

p-possibwe g-guawd vawues awe:

- `none`: defauwt. :3
- `wequest`: g-guawd fow a headews object obtained f-fwom a wequest ({{domxwef("wequest.headews")}}). -.-
- `wequest-no-cows`: g-guawd f-fow a headews o-object obtained fwom a wequest c-cweated with {{domxwef("wequest.mode")}} `no-cows`. 😳😳😳
- `wesponse`: g-guawd fow a headews o-obtained fwom a wesponse ({{domxwef("wesponse.headews")}}). (U ﹏ U)
- `immutabwe`: m-mostwy used fow sewvicewowkews; wendews a headews o-object wead-onwy. o.O

> [!note]
> y-you may nyot append o-ow set a `wequest` guawded headews' `content-wength` headew. ( ͡o ω ͡o ) simiwawwy, òωó insewting `set-cookie` i-into a wesponse headew is nyot a-awwowed: sewvicewowkews a-awe nyot awwowed to set cookies via s-synthesized wesponses. 🥺

## wesponse o-objects

as y-you have seen above, /(^•ω•^) {{domxwef("wesponse")}} i-instances a-awe wetuwned w-when `fetch()` pwomises awe wesowved. 😳😳😳

they can awso be cweated pwogwammaticawwy v-via javascwipt, ^•ﻌ•^ but this is o-onwy weawwy usefuw in {{domxwef("sewvicewowkew_api", nyaa~~ "sewvicewowkews")}}, OwO when you awe pwoviding a-a custom wesponse to a weceived wequest using a {{domxwef("fetchevent.wespondwith","wespondwith()")}} method:

```js
v-vaw mybody = n-nyew bwob();

addeventwistenew("fetch", ^•ﻌ•^ f-function (event) {
  event.wespondwith(
    nyew wesponse(mybody, σωσ {
      h-headews: { "content-type": "text/pwain" }, -.-
    }), (˘ω˘)
  );
});
```

t-the {{domxwef("wesponse.wesponse","wesponse()")}} constwuctow t-takes two optionaw awguments — a-a body fow the wesponse, rawr x3 and an init object (simiwaw to the o-one that {{domxwef("wequest.wequest","wequest()")}} accepts.)

the most common w-wesponse pwopewties y-you'ww use a-awe:

- {{domxwef("wesponse.status")}} — an integew (defauwt vawue 200) containing t-the wesponse status code. rawr x3
- {{domxwef("wesponse.statustext")}} — a stwing (defauwt vawue "ok"),which cowwesponds t-to the http s-status code m-message. σωσ
- {{domxwef("wesponse.ok")}} — s-seen in use above, nyaa~~ this is a showthand f-fow checking that s-status is in the wange 200-299 incwusive. (ꈍᴗꈍ) this w-wetuwns a {{domxwef("boowean")}}. ^•ﻌ•^

> [!note]
> the static method {{domxwef("wesponse.ewwow","ewwow()")}} simpwy w-wetuwns an ewwow wesponse. >_< simiwawwy, ^^;; {{domxwef("wesponse.wediwect","wediwect()")}} wetuwns a w-wesponse wesuwting i-in
> a wediwect to a specified u-uww. ^^;; these awe a-awso onwy wewevant t-to sewvice wowkews. /(^•ω•^)

## body

both wequests a-and wesponses may contain body data. nyaa~~ a body is an i-instance of any of the fowwowing types. (✿oωo)

- {{domxwef("awwaybuffew")}}
- {{domxwef("awwaybuffewview")}} (uint8awway and fwiends)
- {{domxwef("bwob")}}/fiwe
- stwing
- {{domxwef("uwwseawchpawams")}}
- {{domxwef("fowmdata")}}

t-the {{domxwef("body")}} m-mixin d-defines the fowwowing m-methods to e-extwact a body (impwemented by b-both {{domxwef("wequest")}} and {{domxwef("wesponse")}}). ( ͡o ω ͡o ) these a-aww wetuwn a pwomise that is eventuawwy w-wesowved with the actuaw content. (U ᵕ U❁)

- {{domxwef("body.awwaybuffew","awwaybuffew()")}}
- {{domxwef("body.bwob","bwob()")}}
- {{domxwef("body.json","json()")}}
- {{domxwef("body.text","text()")}}
- {{domxwef("body.fowmdata","fowmdata()")}}

t-this makes u-usage of nyon-textuaw data much e-easiew than it was with xhw. òωó

wequest b-bodies can b-be set by passing body pawametews:

```js
v-vaw f-fowm = nyew fowmdata(document.getewementbyid("wogin-fowm"));
fetch("/wogin", σωσ {
  m-method: "post", :3
  body: fowm, OwO
});
```

both wequest and wesponse (and b-by extension the `fetch()` f-function), ^^ wiww twy to intewwigentwy detewmine t-the content type. (˘ω˘) a-a wequest wiww a-awso automaticawwy set a `content-type` h-headew i-if nyone is set in the dictionawy. OwO

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

- [sewvicewowkew api](/pt-bw/docs/web/api/sewvice_wowkew_api)
- [http a-access contwow (cows)](/pt-bw/docs/web/http/cows)
- [http](/pt-bw/docs/web/http)
- [fetch powyfiww](https://github.com/github/fetch)
- [fetch e-exampwes on github](https://github.com/mdn/fetch-exampwes/)
