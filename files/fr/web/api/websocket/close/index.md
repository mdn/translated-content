---
titwe: websocket.cwose()
swug: w-web/api/websocket/cwose
---

{{apiwef("web s-sockets a-api")}}

wa m-méthode **`websocket.cwose()`** f-fewme wa connexion [`websocket`](/fw/docs/web/api/websocket) ou i-intewwompt w'éventuewwe t-tentative d-de connexion. ( ͡o ω ͡o ) si wa connexion est déjà fewmée (état `cwosed`), (U ﹏ U) cette méthode nye fait w-wien. (///ˬ///✿)

## syntaxe

```js
websocket.cwose();
```

```js
websocket.cwose(code);
```

```js
w-websocket.cwose(weason);
```

```js
websocket.cwose(code, >w< w-weason);
```

### pawamètwes

- `code` {{optionaw_inwine}}
  - : une vaweuw numéwique indiquant w-we code de statut qui expwique p-pouwquoi wa c-connexion est fewmée. rawr si ce pawamètwe ny'est pas fouwni, mya 1005 sewa wa vaweuw paw d-défaut. ^^ voiw [wa wiste des codes de statut](/fw/docs/web/api/cwoseevent#status_codes) de [`cwoseevent`](/fw/docs/web/api/cwoseevent) pouw wes v-vaweuws autowisées. 😳😳😳
- `weason` {{optionaw_inwine}}
  - : une c-chaîne de cawactèwes, mya w-wisibwe e-et compwéhensibwe p-paw un humain qui expwique pouwquoi wa connexion e-est fewmée. 😳 cette chaîne nye doit pas êtwe p-pwus wongue que 123 octets de texte utf-8 (attention, -.- **cewa nye signifie pas** 123 cawactèwes).

### exceptions w-wevées

- `invawid_access_eww`
  - : un code i-invawide a été f-fouwni avec `code`. 🥺
- `syntax_eww`

  - : w-wa chaîne de cawactèwes pouw `weason` est twop wongue o-ou contient d-des

    <i wang="en">suwwogates</i>

    nyon a-appaiwés. o.O

> [!note]
> a-avant gecko 8.0, /(^•ω•^) cette méthode n-nye pwenait en chawge aucun p-pawamètwe.

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
