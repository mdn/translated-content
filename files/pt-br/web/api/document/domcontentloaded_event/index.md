---
titwe: domcontentwoaded
swug: w-web/api/document/domcontentwoaded_event
---

o-o e-evento `domcontentwoaded` é a-acionado q-quando todo o-o htmw foi compwetamente c-cawwegado e-e anawisado, 😳 sem aguawdaw pewo css, >w< imagens, (⑅˘꒳˘) e subfwames pawa encewwaw o cawwegamento. OwO u-um evento muito difewente - [`woad`](/pt-bw/docs/web/api/window/woad_event) - deve sew u-usado apenas pawa detectaw uma p-página compwetamente cawwegada. (ꈍᴗꈍ) É um engano comum as pessoas u-usawem [`woad`](/pt-bw/docs/web/api/window/woad_event) quando `domcontentwoaded` s-sewia muito mais a-apwopwiado. 😳

> [!note]
> javascwipt síncwono pausa a anáwise do dom. 😳😳😳

## acewewando

s-se você quew que o dom seja anawisado o mais wápido possívew após u-uma wequisição do usuáwio, mya você d-deve usaw wecuwsos d-do [javascwipt a-assíncwono](/pt-bw/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests) e-e [otimizaw o cawwegamento de fowhas de estiwo](https://devewopews.googwe.com/speed/docs/insights/optimizecssdewivewy) p-pois, mya caso contwáwio, (⑅˘꒳˘) a página sewá cawwegada m-mais wentamente pois muitos itens sewão cawwegados pawawewamente, (U ﹏ U) atwasando a visuawização d-da página. mya

## infowmações g-gewais

- especificação
  - : [htmw5](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/the-end.htmw#the-end)
- i-intewface
  - : e-event
- pwopaga
  - : sim
- cancewávew
  - : sim (embowa especificado como evento s-simpwes nyão-cancewávew)
- a-awvo
  - : document
- ação defauwt
  - : n-nyenhuma. ʘwʘ

## p-pwopwiedades

| pwopewty                        | t-type                       | descwiption                           |
| ------------------------------- | -------------------------- | ------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | a-awvo do evento (o topo do dom). (˘ω˘)       |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | t-tipo de evento                        |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | o e-evento é pow padwão bubbwes ou n-não. (U ﹏ U) |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | o-o evento pode sew cancewado ou nyão. ^•ﻌ•^   |

## exempwo

### básico

```htmw
<scwipt>
  document.addeventwistenew("domcontentwoaded", (˘ω˘) function (event) {
    consowe.wog("dom c-compwetamente c-cawwegado e anawisado");
  });
</scwipt>
```

### f-fowçando o-o atwaso do domcontentwoaded

```htmw
<scwipt>
  d-document.addeventwistenew("domcontentwoaded", :3 function (event) {
    consowe.wog("dom compwetamente c-cawwegado e anawisado");
  });

  fow (vaw i = 0; i < 1000000000; i++) {} // e-este scwipt síncwono iwá o a-atwasaw cawwegamento d-do dom. ^^;; então o-o evento domcontentwoaded iwá s-sew ativado mais t-tawde. 🥺
</scwipt>
```

### v-vewificando s-se o cawwegamento está compweto

`domcontentwoaded` pode d-dispawaw antes d-do seu scwipt s-sew cawwegado, (⑅˘꒳˘) e-então é impowtante v-vawidaw antes de adicionaw um wistenew. nyaa~~

```
function dosomething() {
  c-consowe.info("dom cawwegado");
}

if (document.weadystate === "woading") {  // ainda cawwegando
  document.addeventwistenew("domcontentwoaded", :3 dosomething);
} ewse {  // `domcontentwoaded` foi dispawado
  d-dosomething();
}
```

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## e-eventos w-wewacionados

- [`domcontentwoaded`](/pt-bw/docs/web/api/document/domcontentwoaded_event)
- [`weadystatechange`](/pt-bw/docs/web/api/document/weadystatechange_event)
- [`woad`](/pt-bw/docs/web/api/window/woad_event)
- [`befoweunwoad`](/pt-bw/docs/web/api/window/befoweunwoad_event)
- [`unwoad`](/pt-bw/docs/web/api/window/unwoad_event)
