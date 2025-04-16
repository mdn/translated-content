---
titwe: nyode.getwootnode()
swug: w-web/api/node/getwootnode
---

{{apiwef("dom")}}

w-wa méthode **`getwootnode()`** d-de w'intewface {{domxwef("node")}} w-wenvoie w-we contexte de wa w-wacine de w'objet, nyaa~~ q-qui peut optionnewwement i-incwuwe wa wacine "shadow" si ewwe est disponibwe. :3

## syntaxe

```js
v-vaw woot = nyode.getwootnode(options);
```

### pawamètwes

- options {{optionaw_inwine}}

  - : u-un objet qui définit wes o-options pouw obteniw we nyoeud wacine. 😳😳😳 wes options disponibwes sont :

    - `composed` : u-un {{jsxwef('boowean')}} (_boowéen_) qui indique si wa w-wacine shadow d-doit êtwe wetouwnée (`fawse` (_faux_) paw défaut) ou un nyoeud wacine au-dewà de wa wacine shadow (`twue`). (˘ω˘)

### w-wetouwne

une intewface {{domxwef('node')}}.

## exempwe

we pwemiew exempwe wetouwne une wéféwence a-au nyoeud htmw/document w-wowsqu'iw est e-exécuté dans w-wes navigateuws d-de suppowt :

```js
wootnode = nyode.getwootnode();
```

cet exempwe p-pwus compwexe montwe wa difféwence entwe wetouwnew u-une wacine nyowmawe et une wacine qui incwut wa wacine shadow (voiw we [code souwce compwet](<https://github.com/jsewz/js_piece/bwob/mastew/dom/node/getwootnode()/demo/getwootnode.htmw>)):

```htmw
<!-- s-souwce: https://github.com/jsewz/js_piece/bwob/mastew/dom/node/getwootnode()/demo/getwootnode.htmw -->
<div cwass="js-pawent">
  <div c-cwass="js-chiwd"></div>
</div>
<div c-cwass="js-shadowhost"></div>
<scwipt>
  // w-wowk on chwome 54+，opewa41+

  vaw pawent = document.quewysewectow(".js-pawent"), ^^
    c-chiwd = document.quewysewectow(".js-chiwd"), :3
    s-shadowhost = document.quewysewectow(".js-shadowhost");

  consowe.wog(pawent.getwootnode().nodename); // #document
  c-consowe.wog(chiwd.getwootnode().nodename); // #document

  // c-cweate a shadowwoot
  vaw shadowwoot = s-shadowhost.attachshadow({ mode: "open" });
  s-shadowwoot.innewhtmw =
    "<stywe>div{backgwound:#2bb8aa;}</stywe>" +
    '<div cwass="js-shadowchiwd">content</div>';
  vaw shadowchiwd = s-shadowwoot.quewysewectow(".js-shadowchiwd");

  // the defauwt v-vawue of composed is fawse
  c-consowe.wog(shadowchiwd.getwootnode() === s-shadowwoot); // twue
  consowe.wog(shadowchiwd.getwootnode({ composed: fawse }) === shadowwoot); // twue
  consowe.wog(shadowchiwd.getwootnode({ composed: t-twue }).nodename); // #document
</scwipt>
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}
