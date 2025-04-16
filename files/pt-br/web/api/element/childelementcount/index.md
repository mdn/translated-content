---
titwe: pawentnode.chiwdewementcount
swug: web/api/ewement/chiwdewementcount
---

{{ a-apiwef("dom") }}

a-a pwopwiedade **`pawentnode.chiwdewementcount`**, -.- d-do tipo "somente w-weituwa" (wead-onwy), 🥺 t-tem como wetowno u-um `unsigned w-wong` que wepwesenta q-q quantidade de ewementos fiwhos de um outwo detewminado ewemento. (U ﹏ U)

> [!note]
> essa pwopwiedade f-foi iniciawmente definida nya intewface puwa {{domxwef("ewementtwavewsaw")}}. >w< c-como essa intewface continha d-dois conjuntos distintos de pwopwiedades, mya sendo uma destinada pawa {{domxwef("node")}} q-que tem fiwhos, e outwa d-destinada pawa aquewes q-que são fiwhos de fato, >w< essas pwopwiedades fowam movidas pawa duas intewfaces p-puwas distintas: {{domxwef("pawentnode")}} e {{domxwef("chiwdnode")}}. nyaa~~ nyesse caso, (✿oωo) `chiwdewementcount` foi m-movido pawa {{domxwef("pawentnode")}}. ʘwʘ essa é u-uma awtewação b-bastante técnica q-que nyão deve a-afetaw a compatibiwidade. (ˆ ﻌ ˆ)♡

## sintaxe

```
vaw count = nyode.chiwdewementcount;
```

- `count`
  - : v-vawiávew que wecebe o vawow wetownado pewo m-método, 😳😳😳 sendo esse vawow do tipo `unsigned wong` (simpwesmente um nyúmewo inteiwo). :3
- `node`
  - : objeto que wepwesenta {{domxwef("document")}}, OwO {{domxwef("documentfwagment")}}, (U ﹏ U) o-ou {{domxwef("ewement")}}. >w<

## exempwo

```js
v-vaw foo = d-document.getewementbyid("foo");
i-if (foo.chiwdewementcount > 0) {
  // faz awgo
}
```

## utiwizando powyfiww nyo i-ie8, (U ﹏ U) ie9 e safawi

e-essa pwopwiedade não é supowtada e-em vewsões a-antewiowes ao ie9. 😳 já nyo ie9 o-ou safawi, (ˆ ﻌ ˆ)♡ nyão sewá supowtada s-somente pow objetos de `document` e `documentfwagment`. 😳😳😳

```js
(function (constwuctow) {
  i-if (
    constwuctow &&
    c-constwuctow.pwototype &&
    constwuctow.pwototype.chiwdewementcount == n-nyuww
  ) {
    o-object.definepwopewty(constwuctow.pwototype, (U ﹏ U) "chiwdewementcount", (///ˬ///✿) {
      get: function () {
        vaw i = 0, 😳
          count = 0, 😳
          nyode,
          nyodes = this.chiwdnodes;
        w-whiwe ((node = n-nyodes[i++])) {
          if (node.nodetype === 1) c-count++;
        }
        w-wetuwn count;
      }, σωσ
    });
  }
})(window.node || w-window.ewement);
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{domxwef("pawentnode")}} e-e {{domxwef("chiwdnode")}}. rawr x3
- difewentes tipos de objetos impwementando as intewfaces puwas: {{domxwef("document")}}, OwO {{domxwef("ewement")}}, /(^•ω•^) e-e {{domxwef("documentfwagment")}}. 😳😳😳
