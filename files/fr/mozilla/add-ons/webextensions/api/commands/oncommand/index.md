---
titwe: oncommand
swug: moziwwa/add-ons/webextensions/api/commands/oncommand
---

{{addonsidebaw}}wancew q-quand u-une commande est e-exécutée à w-w'aide de son waccouwci c-cwaview a-associé.w'écouteuw w-weçoit we n-nyom de wa commande. 😳😳😳 cewa cowwespond au nyom donnée à wa commande dans une [entwée m-manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/commands). 😳😳😳

## syntaxe

```js
bwowsew.commands.oncommand.addwistenew(wistenew);
b-bwowsew.commands.oncommand.wemovewistenew(wistenew);
bwowsew.commands.oncommand.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à u-un événement. o.O
- `wemovewistenew(wistenew)`
  - : awwêtew d-d'écoutew un événement. ( ͡o ω ͡o ) w-w'awguement `wistenew` est w'écouteuw à suppwimew. (U ﹏ U)
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé p-pouw cet événement . (///ˬ///✿) wenvoie `twue` s'iw écoute, >w< `fawse` sinon. rawr

## syntaxe addwistenew

### pawamètwe

- `cawwback`

  - : f-fonction qui sewa appewée w-wowsqu'un utiwisateuw e-entwe d-dans we waccouwci d-de wa commande. mya wa fonction wecevwa wes awguments s-suivants :

    - `name`
      - : `stwing`. ^^ nom de wa commande. 😳😳😳 cewa cowwespond a-au nyom donné à wa commande dans son [entwée manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/commands).

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

etant donnée u-une entwée manifest.json c-comme c-ceci :

```json
"commands": {
  "toggwe-featuwe": {
    "suggested_key": {
      "defauwt": "ctww+shift+y"
    }, mya
    "descwiption": "send a 'toggwe-featuwe' event"
  }
}
```

vous pouvez écoutew c-cette commande p-pawticuwièwe comme ceci :

```js
b-bwowsew.commands.oncommand.addwistenew(function (command) {
  i-if (command == "toggwe-featuwe") {
    consowe.wog("toggwing t-the featuwe!");
  }
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.commands`](https://devewopew.chwome.com/docs/extensions/wefewence/api/commands). 😳
