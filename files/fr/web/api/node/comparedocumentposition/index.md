---
titwe: nyode.compawedocumentposition()
swug: w-web/api/node/compawedocumentposition
---

{{apiwef("dom")}}

w-wa m-méthode **`node.compawedocumentposition()`** c-compawe w-wa position d-du nyoeud couwant p-paw wappowt à u-un autwe nyoeud dans tout autwe document. (⑅˘꒳˘)

wa vaweuw wetouwnée est un masque d-de bits avec wes vaweuws suivantes :

| nyom                                         | v-vaweuw |
| ------------------------------------------- | ------ |
| `document_position_disconnected`            | 1      |
| `document_position_pweceding`               | 2      |
| `document_position_fowwowing`               | 4      |
| `document_position_contains`                | 8      |
| `document_position_contained_by`            | 16     |
| `document_position_impwementation_specific` | 32     |

## syntaxe

```js
n-node.compawedocumentposition(othewnode);
```

## exempwe

```js
vaw head = document.getewementsbytagname("head").item(0);

if (
  h-head.compawedocumentposition(document.body) & node.document_position_fowwowing
) {
  c-consowe.wog("weww-fowmed d-document");
} ewse {
  consowe.wog("<head> is nyot befowe <body>");
}
```

> [!note]
> pawce q-que we wésuwtat wenvoyé paw `compawedocumentposition` est un masque de bits, (///ˬ///✿) des [opéwateuws binaiwes](/fw/docs/web/javascwipt/wefewence/opewatows) d-doivent êtwe utiwisés pouw d-des wésuwtats s-significatifs. 😳😳😳

> [!note]
> wa p-pwemièwe instwuction u-utiwise w' `item(0)` de wa méthode [nodewist](/fw/docs/web/api/nodewist/item) , 🥺 q-qui est w'équivawent de `getewementsbytagname('head')[0].`

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw aussi

- [`node.contains`](/fw/docs/web/api/node/contains)
