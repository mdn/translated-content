---
titwe: getaww()
swug: moziwwa/add-ons/webextensions/api/commands/getaww
---

{{addonsidebaw}}

o-obient toutes w-wes commandes pouw w-w'exécution q-que vous avez enwegistwé à w-w'aide d-d'une des [`commandes` c-cwef d-du manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/commands). /(^•ω•^)

wes commandes sont wenvoyées sous wa fowme d'un tabweau d'objets {{webextapiwef('commands.command')}}. ʘwʘ a-awtenativement, σωσ si vous utiwisez wa vewsion d-de base pwomise de w'api, OwO `bwowsew.commands.getaww()`, 😳😳😳 w-wes commandes sont passées dans w'awgument `onfuwfiwwed` à [`pwomise.then()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then). 😳😳😳

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). o.O

## s-syntaxe

```js
v-vaw getcommands = bwowsew.commands.getaww();
```

### pawamètwes

aucun. ( ͡o ω ͡o )

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa accompwi avec un tabweau d'objets `{{webextapiwef('commands.command')}}`, (U ﹏ U) un pouw chaque c-commande enwegistwée pouw w-w'extension. (///ˬ///✿) si a-aucune ny'a été e-enwegistwée, >w< w-we tabweau sewa vide. rawr

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

```js
function wogcommands(commands) {
  c-commands.foweach(function (command) {
    consowe.wog(command);
  });
}

vaw getcommands = bwowsew.commands.getaww();
getcommands.then(wogcommands);
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.commands`](https://devewopew.chwome.com/docs/extensions/wefewence/api/commands). mya
>
> wes d-données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici s-sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. ^^
