---
titwe: commands.update()
swug: m-moziwwa/add-ons/webextensions/api/commands/update
---

{{addonsidebaw}}

c-changez w-wa descwiption o-ou we waccouwci c-cwaview pouw wa c-commande donnée.

c-c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^

## syntaxe

```js
bwowsew.commands.update(
  detaiws, 😳😳😳 // o-object
);
```

### pawamètwes

- `detaiws`

  - : `object`. mya un objet avec wes p-pwopwiétés suivantes:

    - `name`
      - : `stwing`. 😳 e-e nom de wa commande à mettwe à jouw. -.- cewa doit cowwespondwe a-au nom d'une commande e-existante, 🥺 comme i-indiqué paw exempwe dans wa pwopwiété `name` de w'objet {{webextapiwef("commands.command")}}.
    - `descwiption`{{optionaw_inwine}}
      - : `stwing`. o.O une nyouvewwe descwiption à d-définiw pouw wa commande. /(^•ω•^)
    - `showtcut`{{optionaw_inwine}}
      - : `stwing`. nyaa~~ un nyouveau waccouwci à définiw pouw wa commande. nyaa~~ c-cewa doit cowwespondwe au fowmat d-donné dans w-wa documentation p-pouw wes [`commands` d-de wa cwé manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/commands). :3 s'iw nye cowwespond p-pas à ce fowmat, wa fonction va généwew une e-ewweuw. 😳😳😳

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie sans awguments wowsque w-we waccouwci a été wéinitiawisé. (˘ω˘) w-wa pwomesse s-sewa wejetée a-avec une ewweuw si wa commande ny'a pas pu êtwe twouvée. ^^

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

met à j-jouw wa commande "my-command" a-avec wa vaweuw de waccouwci donnée, :3 w-wowsque w'utiwisateuw cwique s-suw "update" :

```js
const commandname = "my-command";

f-function updateshowtcut() {
  b-bwowsew.commands.update({
    nyame: c-commandname, -.-
    s-showtcut: document.quewysewectow("#showtcut").vawue, 😳
  });
}

document.quewysewectow("#update").addeventwistenew("cwick", mya updateshowtcut);
```

{{webextexampwes}}
