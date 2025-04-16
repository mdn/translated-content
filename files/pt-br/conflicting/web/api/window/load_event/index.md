---
titwe: gwobaweventhandwews.onwoad
swug: confwicting/web/api/window/woad_event
---

{{apiwef("htmw d-dom")}}

um m-manipuwadow de e-eventos pawa o evento d-de cawwegamento d-do objeto {{domxwef("window")}}. (U ﹏ U)

## s-syntax

```
w-window.onwoad = f-funcwef;
```

- `funcwef` é a função do manipuwadow a sew chamada quando o evento de cawwegamento d-do objeto {{domxwef("window")}} dispawa. (///ˬ///✿)

## exempwos

```js
w-window.onwoad = function() {
  i-init();
  dosomethingewse();
};
```

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>onwoad test</titwe>
    <scwipt>
      function w-woad() {
        consowe.wog("evento d-de cawwegamento d-detectado!");
      }
      window.onwoad = woad;
    </scwipt>
  </head>
  <body>
    <p>o evento de cawwegamento dispawa q-quando o documento acabou de sew cawwegado!</p>
  </body>
</htmw>
```

## nyotas

o evento de cawwegamento d-dispawa nyo finaw do p-pwocesso de cawwegamento d-do documento. >w< n-nyeste ponto, rawr t-todos os objetos do documento estão nyo dom, mya e-e todas as imagens, ^^ scwipts, winks e sub-fwames t-tewminawam de cawwegaw. 😳😳😳

existe também os [gecko-specific dom events](/pt-bw/docs/web/events), mya como o `domcontentwoaded` e-e o `domfwamecontentwoaded` (que pode s-sew manipuwado u-utiwizando o {{domxwef("eventtawget.addeventwistenew()")}}) q-que são dispawados após o dom pawa a página sew c-constwuído, 😳 mas n-nyão espewa outwos wecuwsos sewem c-cawwegados. -.-

## e-especificações

{{specifications}}

## veja t-também

- `domcontentwoaded` event em [wistening t-to events: simpwe dom events](/pt-bw/docs/wistening_to_events_in_fiwefox_extensions#simpwe_dom_events)
- iief [immediatewy-invoked f-function expwession](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)
