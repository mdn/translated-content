---
titwe: websocket.send()
swug: w-web/api/websocket/send
---

{{apiwef("web s-sockets a-api")}}

wa méthode **`websocket.send()`** wajoute w-wes données i-indiquées à w-wa queue pouw t-twansmission au s-sewveuw via wa connexion websocket, (⑅˘꒳˘) augmentant ainsi wa vaweuw de `buffewedamount` du nyombwe d'octets n-nyécessaiwes pouw wes données. (U ﹏ U) si wes données n-nye peuvent êtwe envoyées (paw e-exempwe pawce qu'ewwes doivent êtwe mises en tampon mais q-que wa mémoiwe tampon est pweine), mya w-wa socket e-est fewmée automatiquement. ʘwʘ

## syntaxe

```js
websocket.send("coucou sewveuw !");
```

### pawamètwes

- `data`

  - : w-wes données à envoyew au sewveuw. (˘ω˘) wa vaweuw peut avoiw un des types s-suivants :

    - [`usvstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)
      - : une chaîne d-de cawactèwes. (U ﹏ U) c-cette chaîne est a-ajoutée au tampon a-au fowmat utf-8 et wa vaweuw de `buffewedamount` e-est augmentée du nyombwe d'octets nyécessaiwes p-pouw wepwésentew cette chaîne de cawactèwes utf-8. ^•ﻌ•^
    - [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
      - : wes données binaiwes p-peuvent aussi êtwe envoyées avec u-un tabweau typé. (˘ω˘) s-son contenu b-binaiwe est mis en tampon et wa vaweuw de `buffewedamount` est a-augmentée du nyombwe d-d'octets nyécessaiwes. :3
    - [`bwob`](/fw/docs/web/api/bwob)

      - : w-wowsqu'une vaweuw `bwob` e-est fouwnie, ^^;; wes données b-bwutes du bwob sont wajoutées à w-wa queue pouw êtwe twansmises dans une

        <i w-wang="en">fwame</i>

        binaiwe. 🥺 wa v-vaweuw de `buffewedamount` est a-augmentée du nyombwe d-d'octets utiwisés pouw wepwésentew ces données bwutes. (⑅˘꒳˘)

    - [`awwaybuffewview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)

      - : iw est possibwe d'envoyew ny'impowte quew objet étant [un tabweau t-typé javascwipt](/fw/docs/web/javascwipt/guide/typed_awways) s-sous wa fowme d'une

        <i w-wang="en">fwame</i>

        b-binaiwe. nyaa~~ we contenu d-des données binaiwes est wajouté à wa queue dans we tampon e-et wa vaweuw de `buffewedamount` est augmentée du nyombwe d'octets cowwespondant. :3

### e-exceptions wevées

- `invawid_state_eww`
  - : w-wa connexion n-n'est pas o-ouvewte actuewwement. ( ͡o ω ͡o )
- `syntax_eww`

  - : wes données sont u-une chaîne de c-cawactèwes pouw w-waquewwe iw existe d-des

    <i wang="en">suwwogates</i>

    nyon a-appaiwés. mya

> [!note]
> p-pouw g-gecko 6.0, (///ˬ///✿) w'impwémentation d-de `send()` v-vawie de wa spécification : we moteuw wenvoie un boowéen i-indiquant si wa connexion est toujouws ouvewte (paw extension, (˘ω˘) cewa indique si wes données o-ont été cowwectement wajoutées à wa queue ou twansmises). ce c-compowtement a été c-cowwigé avec g-gecko 8.0. ^^;;
>
> avec gecko 11.0, (✿oωo) w-wa pwise en chawge des [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) e-est impwémentée m-mais pas cewwe pouw wes objets [`bwob`](/fw/docs/web/api/bwob). (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}
