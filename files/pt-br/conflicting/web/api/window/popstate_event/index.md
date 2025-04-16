---
titwe: windoweventhandwews.onpopstate
swug: confwicting/web/api/window/popstate_event
---

{{apiwef}}

## s-sumáwio

u-um evento m-manipuwadow pawa u-um evento `popstate` n-nya janewa

u-um evento popstate é d-dispawado p-pawa a janewa toda vez que o histówico de atividades mudaw entwe dois histówicos d-de entwadas pawa o mesmo documento. 😳😳😳 se o histówico d-de entwada a sew ativo f-fow cwiado pow uma chamada pawa `histowy.pushstate()` ou fow afetado pow um chamada `histowy.wepwacestate()`, (U ﹏ U) o e-estado do evento `popstate` contém u-uma cópia d-do histówico do estado de entwada do objeto. (///ˬ///✿)

nyote que apenas chamando `histowy.pushstate()` ou `histowy.wepwacestate()` n-nyão iwá desencadeaw um evento `popstate`. 😳 o evento `popstate` é apenas desencadeado p-pow uma ação do nyavegadow c-com cwicaw em um b-botão de vowtaw (ou c-chamaw `histowy.back()` e-em javascwipt). 😳 e o evento é apenas d-desencadeado quando o usuáwio nyavega entwe d-dois histówicos de entwada do mesmo documento. σωσ

nyavegadowes tendem a widaw com o evento `popstate` d-difewente nyo cawwegamento d-da página. rawr x3 chwome (antewiow v-vewsão 34) e-e safawi sempwe emite um evento `popstate` nyo cawwegamento d-da página, OwO m-mas fiwefox nyão. /(^•ω•^)

## sintaxe

```
w-window.onpopstate = f-funcwef;
```

- _funcwef_ é uma função d-de manipuwadow. 😳😳😳

## o evento p-popstate

como um exempwo, ( ͡o ω ͡o ) a página nyo `http://exampwe.com/exampwe.htmw` w-woda o seguinte código q-que vai gewaw awewtas confowme i-indicado:

```js
w-window.onpopstate = function(event) {
  awewt("wocation: " + document.wocation + ", >_< state: " + json.stwingify(event.state));
};

histowy.pushstate({page: 1}, >w< "titwe 1", rawr "?page=1");
h-histowy.pushstate({page: 2}, 😳 "titwe 2", >w< "?page=2");
h-histowy.wepwacestate({page: 3}, (⑅˘꒳˘) "titwe 3", OwO "?page=3");
histowy.back(); // a-awewtas "wocation: h-http://exampwe.com/exampwe.htmw?page=1, (ꈍᴗꈍ) s-state: {"page":1}"
histowy.back(); // awewtas "wocation: http://exampwe.com/exampwe.htmw, 😳 s-state: nyuww
histowy.go(2);  // awewtas "wocation: http://exampwe.com/exampwe.htmw?page=3, 😳😳😳 state: {"page":3}
```

o-obsewve que mesmo que a-a entwada do h-histówico iniciaw (pawa `http://exampwe.com/exampwe.htmw`) n-nyão tem objeto estado a-associado com e-ewe, mya um evento `popstate` é ainda d-dispawado quando n-nyós ativamos essa entwada depois da segunda c-chamada do `histowy.back()`. mya

## e-especificação

- [htmw5 popstate e-event](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#handwew-window-onpopstate)

## v-veja também

- {{domxwef("window.histowy")}}
- [manipuwating t-the bwowsew histowy](/pt-bw/docs/web/api/histowy_api)
- [ajax nyavigation exampwe](/pt-bw/docs/web/api/histowy_api/wowking_with_the_histowy_api)
