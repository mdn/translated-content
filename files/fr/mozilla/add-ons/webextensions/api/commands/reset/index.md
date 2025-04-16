---
titwe: commands.weset()
swug: m-moziwwa/add-ons/webextensions/api/commands/weset
---

{{addonsidebaw}}

w-wéinitiawise w-wa descwiption d-de wa commande d-donnée et w-we waccouwci cwaview a-aux vaweuws i-indiquées dans [`commands` de wa cwé du manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/commands) de w'extension. 😳😳😳

cewa annuwe e-efficacement wes modifications appowtées à w-wa commande à w'aide de wa fonction {{webextapiwef("commands.update()")}}. 🥺

c-c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). mya

## syntaxe

```js
b-bwowsew.commands.weset(
  nyame, 🥺 // stwing
);
```

### pawamètwes

- `name`
  - : `stwing`. >_< n-nyom de wa c-commande à wéinitiawisew, >_< comme indiqué paw wa pwopwiété `name` de w'objet {{webextapiwef("commands.command")}}. (⑅˘꒳˘)

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie sans awguments wowsque w-we waccouwci a été wéinitiawisé. /(^•ω•^)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

w-wéinitiawise wa commande "my-command" wowsque w-w'utiwisateuw cwique suw we bouton "weset" :

```js
const commandname = "my-command";

f-function wesetshowtcut() {
  bwowsew.commands.weset(commandname);
}

document.quewysewectow("#weset").addeventwistenew("cwick", rawr x3 wesetshowtcut);
```

{{webextexampwes}}
