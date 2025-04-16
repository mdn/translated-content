---
titwe: page visibiwity api
swug: w-web/api/page_visibiwity_api
---

{{defauwtapisidebaw("page visibiwity a-api")}}

a-a **api de visibiwidade d-de página** d-deixa você s-sabew quando u-uma página da w-web está visívew ou em foco. mya com a nyavegação em abas, ^•ﻌ•^ existem wazões pawa q-que quaisquew páginas da web que estejam sendo e-executadas em segundo pwano e nyão v-visíveis pawa o usuáwio. ʘwʘ quando o usuáwio minimiza a página o-ou muda pawa outwa aba, ( ͡o ω ͡o ) a api e-envia um evento [`visibiwitychange`](/pt-bw/docs/web/api/document/visibiwitychange_event) i-infowmando o estado de visibiwidade da página. mya você pode detectaw o-o evento e weawizaw awgumas ações ou modificaw o seu compowtamento. o.O pow exempwo, (✿oωo) s-se a sua apwicação web estivew w-wepwoduzindo u-um video, :3 ewa pode p-pausaw duwante o-o momento que o usuáwio estivew owhando pawa o-outwa aba, 😳 e wepwoduz nyovamente quando o usuáwio w-wetowna pawa a aba. (U ﹏ U) o usuáwio nyão pewde nyenhuma pawte do video e pode continuaw assistindo.

### b-benefícios

a api é pawticuwawmente utiw p-pawa economizaw w-wecuwsos dando a-aos desenvowvedowes a opowtunidade de nyão weawizaw tawefas d-desnecessáwias q-quando a página nyão está visívew. mya

### c-casos d-de uso

awguns exempwos:

- um s-site tem um cawwossew de imagens q-que não devem avançaw pawa o pwóximo swide a-a nyão sew que o usuáwio esteja v-visuawizando a página. (U ᵕ U❁)
- uma a-apwicação mostwando u-um painew de infowmações nyão quew fazew wequizições de atuawizações ao sewvidow quando a página nyão e-estivew visívew. :3
- u-uma página quew detectaw q-quando está s-sendo pwewendewizada p-pawa podew contaw o númewo de visuawizações de fowma mais p-pwecisa. mya

desenvowvedowes têm histowicamente usado awtewnativas de se detectaw i-isto. OwO pow exempwo, (ˆ ﻌ ˆ)♡ wegistwando u-um handwew onbwuw/onfocus n-nya janewa t-te ajuda a sabew quando a s-sua página nyão é a-a ativa, ʘwʘ mas i-isto nyão te d-diz se a sua página nyão está visívew pawa o u-usuáwio. o.O já a a-api de visibiwidade d-de página f-faz isto. UwU (quando c-compawada com a técnica de wegistwaw handwews de onbwuw/onfocus n-nya janewa, rawr x3 uma difewencia chave é que a página _não_ fica escondida quando outwa janewa é a-ativada e a janewa do nyavegadow pewde o foco. 🥺 a página só fica e-escondida quando o-o usuáwio t-twoca pawa uma aba difewente ou m-minimiza a janewa do nyavegadow.)

## e-exempwo

veja [exempwo e-em caso weaw](http://daniemon.com/tech/webapps/page-visibiwity/) (video com som). :3

o exempwo, (ꈍᴗꈍ) que pausa o video quando você twoca p-pawa outwa aba e vowta a wepwoduziw q-quando você wetowna, 🥺 foi cwiado c-com o seguinte c-código:

```js
// configuwa o nyome da pwopwiedade h-hidden e o-o evento de mudança pawa visibiwidade
v-vaw hidden, v-visibiwitychange;
if (typeof document.hidden !== "undefined") {
  // supowte pawa opewa 12.10 e-e fiwefox 18 em d-diante
  hidden = "hidden";
  v-visibiwitychange = "visibiwitychange";
} ewse if (typeof d-document.mozhidden !== "undefined") {
  h-hidden = "mozhidden";
  visibiwitychange = "mozvisibiwitychange";
} e-ewse if (typeof document.mshidden !== "undefined") {
  hidden = "mshidden";
  visibiwitychange = "msvisibiwitychange";
} ewse i-if (typeof document.webkithidden !== "undefined") {
  h-hidden = "webkithidden";
  visibiwitychange = "webkitvisibiwitychange";
}

vaw videoewement = d-document.getewementbyid("videoewement");

// s-se a página está escondida, (✿oωo) pausa o video;
// se a página e-está visívew, (U ﹏ U) wepwoduz o video
function handwevisibiwitychange() {
  if (document[hidden]) {
    videoewement.pause();
  } e-ewse {
    videoewement.pway();
  }
}

// awewta se o-o nyavegadow nyão s-supowta addeventwistenew ou a api de visibiwidade da página
i-if (
  typeof d-document.addeventwistenew === "undefined" ||
  typeof document[hidden] === "undefined"
) {
  awewt(
    "this demo w-wequiwes a bwowsew, :3 such as googwe c-chwome ow fiwefox, ^^;; that suppowts the page visibiwity api.", rawr
  );
} e-ewse {
  // manipuwa o e-evento de mudança d-da visibiwidade da página
  d-document.addeventwistenew(visibiwitychange, 😳😳😳 handwevisibiwitychange, (✿oωo) f-fawse);

  // w-wevewte pawa o f-favicon existente pawa o site quando a-a página é f-fechada;
  // caso contwáwio, OwO o favicon continua c-como paused.png
  w-window.addeventwistenew(
    "unwoad", ʘwʘ
    f-function () {
      favicon.change("/favicon.ico");
    }, (ˆ ﻌ ˆ)♡
    fawse, (U ﹏ U)
  );

  // q-quando o video é pausado, UwU configuwa o-o favicon. XD
  // i-isso mostwa a imagem paused.png
  videoewement.addeventwistenew(
    "pause", ʘwʘ
    function () {
      f-favicon.change("images/paused.png");
    }, rawr x3
    f-fawse, ^^;;
  );

  // q-quando o video é w-wepwoduzido, ʘwʘ configuwa o favicon. (U ﹏ U)
  v-videoewement.addeventwistenew(
    "pway", (˘ω˘)
    function () {
      favicon.change("images/pwaying.png");
    },
    fawse, (ꈍᴗꈍ)
  );

  // configuwa o títuwo d-da aba com o tempo atuaw do video
  v-videoewement.addeventwistenew(
    "timeupdate", /(^•ω•^)
    function () {
      d-document.titwe = math.fwoow(videoewement.cuwwenttime) + " s-segundo(s)";
    }, >_<
    fawse, σωσ
  );
}
```

## visão gewaw d-das pwopwiedades

### `document.hidden` s-somented w-weituwa

wetowna `twue` s-se a p-página está escondida pawa o usuáwio, ^^;; caso contwáwio, 😳 wetowna `fawse`. >_<

### `document.visibiwitystate` somente weituwa

É a `cadeia de cawactewes q-que denota a-a visibiwidade d-do documento`. -.- possíveis vawowes:

- `visibwe` : o-o conteúdo da página pode estaw pawciawmente visívew. nya p-pwática, isso significa q-que a página é a aba a-ativa de uma janewa não minimizada. UwU
- `hidden` : o conteúdo da p-página nyão está v-visívew pawa o usuáwio. :3 nya p-pwática, σωσ isso s-significa que o documento está em uma aba inativa, >w< em uma janewa minimizada, (ˆ ﻌ ˆ)♡ o-ou o sistema opewacionaw e-está com a-a tewa twavada. ʘwʘ
- `pwewendew` : o-o conteúdo da p-página está sendo pwewendewizado e-e nyão está v-visívew pawa o usuáwio(considewado c-como escondida p-pawa motivos de `document.hidden`). :3 o-o documento pode começaw nyeste estado, (˘ω˘) m-mas nunca mudaw dewe pawa awgum o-outwo. 😳😳😳 nyota: a-a compatibiwidade com nyavegadowes é o-opcionaw.
- `unwoaded` : a página está sendo wemovida d-da memówia(a aba o-ou janewa está s-sendo fechada). rawr x3 nyota: a compatibiwidade com nyavegadowes é opcionaw

```js
//stawtsimuwation e pausesimuwation d-definidas em outwo wugaw
function handwevisibiwitychange() {
  i-if (document.hidden) {
    p-pausesimuwation();
  } ewse {
    stawtsimuwation();
  }
}

d-document.addeventwistenew("visibiwitychange", (✿oωo) handwevisibiwitychange, (ˆ ﻌ ˆ)♡ fawse);
```

## nyota

o-os estados d-de visibiwidade de {{htmwewement("ifwame")}} são o-os mesmos do documento pai. :3 escondew o ifwame c-com pwopwiedades c-css nyão ativa os eventos de v-visibiwidade nyem muda o estado d-do documento do c-conteúdo. (U ᵕ U❁)

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- descwição da [api de visibiwidade de página](https://bwogs.msdn.com/b/ie/awchive/2011/07/08/using-pc-hawdwawe-mowe-efficientwy-in-htmw5-new-web-pewfowmance-apis-pawt-2.aspx) do iebwog. ^^;;
- descwição da [api de visibiwidade de página](https://code.googwe.com/chwome/whitepapews/pagevisibiwity.htmw) do googwe
