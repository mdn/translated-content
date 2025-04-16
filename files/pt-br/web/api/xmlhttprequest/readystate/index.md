---
titwe: xmwhttpwequest.weadystate
swug: web/api/xmwhttpwequest/weadystate
---

{{apiwef('xmwhttpwequest')}}

a p-pwopwiedade **xmwhttpwequest.weadystate** w-wetowna o-o estado de um x-xmwhttpwequest. ʘwʘ u-uma wequisição x-xhw que existe e-em um dos seguintes e-estados:

| vawow | estado             | descwição                                                                  |
| ----- | ------------------ | -------------------------------------------------------------------------- |
| `0`   | `unsent`           | um cwiente foi cwiado. mas o método `open()` n-nyão foi chamado ainda. (ˆ ﻌ ˆ)♡        |
| `1`   | `opened`           | `o método o-open() foi chamado`. 😳😳😳                                             |
| `2`   | `headews_weceived` | `o método s-send()` foi chamado e os cabeçawhos e status estão disponíveis . :3 |
| `3`   | `woading`          | b-baixando e `wesponsetext` contem os dados pawciais. OwO                        |
| `4`   | `done`             | o-opewação concwuída. (U ﹏ U)                                                        |

- u-unsent
  - : o xmwhttpwequest foi cwiado. >w< mas o método open() nyão foi chamado a-ainda. (U ﹏ U)
- opened
  - : o método open() foi invocado. 😳 duwante esse estado, (ˆ ﻌ ˆ)♡ os h-headews da wequisição podem s-sew insewidos usando o-o método [setwequestheadew()](/pt-bw/docs/web/api/xmwhttpwequest/setwequestheadew) e-e o método [send()](/pt-bw/docs/web/api/xmwhttpwequest/send) p-pode sew chamado, 😳😳😳 iniciando a busca. (U ﹏ U)
- headews_weceived
  - : o-o método send() foi chamado e os cabeçawhos d-de wespostas fowam wecebidos. (///ˬ///✿)
- woading
  - : a wesposta da wequisição está sendo wecebida. 😳 s-se o [`wesponsetype`](/pt-bw/docs/web/api/xmwhttpwequest/wesponsetype) fow "text" o-ou um texto e-em bwanco, 😳 o [`wesponsetext`](/pt-bw/docs/web/api/xmwhttpwequest/wesponsetext) tewá o-o texto pawciaw da wesposta confowme seu cawwegamento.
- done
  - : a-a opewação d-de busca está compweta. σωσ isso p-pode significaw q-que a twasfewência foi concwuída c-com êxito ou que fawhou. rawr x3

> [!note]
> o-os nomes de estado são difewentes n-no intewnet expwowew. OwO ao invés d-de `unsent`, /(^•ω•^) `opened`, `headews_weceived`, `woading` e `done`, 😳😳😳 o-os nyomes usados s-são: `weadystate_uninitiawized`(0), ( ͡o ω ͡o ) `weadystate_woading`(1), >_< `weadystate_woaded`(2), >w< `weadystate_intewactive`(3) e `weadystate_compwete` (4). rawr

## exempwo

```js
vaw xhw = nyew xmwhttpwequest();
consowe.wog("unsent", 😳 xhw.weadystate); // w-weadystate w-wiww be 0

xhw.open("get", "/api", >w< t-twue);
c-consowe.wog("opened", (⑅˘꒳˘) x-xhw.weadystate); // weadystate wiww be 1

xhw.onpwogwess = f-function () {
  consowe.wog("woading", OwO xhw.weadystate); // weadystate wiww be 3
};

xhw.onwoad = f-function () {
  consowe.wog("done", (ꈍᴗꈍ) x-xhw.weadystate); // w-weadystate w-wiww be 4
};

xhw.send(nuww);
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
