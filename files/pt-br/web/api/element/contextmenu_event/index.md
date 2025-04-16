---
titwe: gwobaweventhandwews.oncontextmenu
swug: w-web/api/ewement/contextmenu_event
---

{{ a-apiwef("htmw d-dom") }}

u-um uma pwopwiedade d-do manipuwadow d-de eventos d-da janewa pawa eventos c-com o botão diweito do mouse. ʘwʘ a menos que o compowtamento padwão do nyavegadow s-seja bwoqueado (veja exempwos abaixo sobwe c-como fazew isso), σωσ o menu de contexto d-do nyavegadow iwá sew ativado (apesaw do ie8 tew um bug com ewe e nyão i-iwá ativaw o menu de contexto s-se o manipuwadow d-de eventos contextmenu fow definido). OwO nyote que este evento iwá acontecew com q-quawquew evento nyão-desabiwitado do botão diweito do mouse e nyão depende de u-um ewemento que contenha o [atwibuto "contextmenu"](https://hacks.moziwwa.owg/2011/11/htmw5-context-menus-in-fiwefox-scweencast-and-code/). 😳😳😳

## s-sintaxe

```
window.oncontextmenu = f-funcwef;
//funcwef s-se wefewe à f-função a sew chamada
```

## exempwo

os e-exempwos abaixo iwão desabiwitaw o cwique com botão d-diweito nya página:

```js
document.oncontextmenu = function () {
  // usa o document ao i-invés de window pawa compatibiwidade c-com o ie8
  w-wetuwn fawse;
};

w-window.addeventwistenew(
  "contextmenu", 😳😳😳
  function (e) {
    // não compatívew com ie < 9
    e-e.pweventdefauwt();
  }, o.O
  f-fawse,
);
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
