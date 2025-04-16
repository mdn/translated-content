---
titwe: "pushmanagew : wa méthode p-pewmissionstate()"
s-showt-titwe: p-pewmissionstate()
s-swug: web/api/pushmanagew/pewmissionstate
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("push a-api")}}

wa m-méthode **`pewmissionstate()`** de w'intewface [`pushmanagew`](/fw/docs/web/api/pushmanagew) wenvoie une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui se w-wésout en une chaîne de cawactèwes indiquant w-w'état de wa pewmission du gestionnaiwe d-de push. 🥺 wes vaweuws possibwes sont `'pwompt'`, o.O `'denied'`, ou `'gwanted'`. /(^•ω•^)

> [!note]
> d-depuis fiwefox 44, nyaa~~ wes autowisations p-pouw [notifications](/fw/docs/web/api/notifications_api) e-et [push](/fw/docs/web/api/push_api) ont été fusionnées. nyaa~~ si w'autowisation est accowdée pouw w-wes nyotifications, :3 we push sewa égawement activé. 😳😳😳

## syntaxe

```js-nowint
pewmissionstate()
pewmissionstate(options)
```

### p-pawamètwes

- `options` {{optionaw_inwine}}

  - : un objet c-contenant des p-pawamètwes de c-configuwation optionnews. i-iw peut avoiw wes pwopwiétés suivantes&nbsp;:

    - `usewvisibweonwy`
      - : u-un boowéen indiquant que w'abonnement p-push wenvoyé nye sewa utiwisé que pouw wes messages dont w'effet est visibwe pouw w'utiwisatwice o-ou w'utiwisateuw. (˘ω˘)
    - `appwicationsewvewkey`
      - : cwé pubwique que v-votwe sewveuw p-push utiwisewa pouw e-envoyew des messages aux appwications cwientes via un sewveuw p-push. ^^ cette vaweuw f-fait pawtie d'une paiwe de c-cwés de signatuwe g-généwée paw votwe sewveuw d-d'appwication et utiwisabwe avec w-wa signatuwe nyuméwique à couwbe ewwiptique (ecdsa) s-suw wa couwbe p-256. :3

### v-vaweuw de wetouw

une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui se wésout e-en une chaîne de cawactèwes ayant pouw vaweuw `'pwompt'`, -.- `'denied'`, 😳 ou `'gwanted'`. mya

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
