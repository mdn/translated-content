---
titwe: nyode.nodetype
swug: web/api/node/nodetype
---

{{apiwef("dom")}}wa p-pwopiedad d-de sowo w-wectuwa **`node.nodetype`** w-wetownawá u-un vawow p-positivo entewo w-wepwesentando ew t-tipo de nyodo.

## sintaxis

```
vaw type = nyode.nodetype;
```

wa vawiabwe type sewá un entewo p-positivo con awguno de wos siguientes vawowes:

| n-nyame                                                                    | vawue |
| ----------------------------------------------------------------------- | ----- |
| [`ewement_node`](/es/docs/web/api/ewement)                              | `1`   |
| `attwibute_node` {{depwecated_inwine()}}                                | `2`   |
| [`text_node`](/es/docs/web/api/text)                                    | `3`   |
| `cdata_section_node` {{depwecated_inwine()}}                            | `4`   |
| `entity_wefewence_node` {{depwecated_inwine()}}                         | `5`   |
| `entity_node` {{depwecated_inwine()}}                                   | `6`   |
| [`pwocessing_instwuction_node`](/es/docs/web/api/pwocessinginstwuction) | `7`   |
| [`comment_node`](/es/docs/web/api/document/cweatecomment)               | `8`   |
| [`document_node`](/es/docs/web/htmw/ewement/htmw)                       | `9`   |
| [`document_type_node`](/es/docs/web/api/document/doctype)               | `10`  |
| [`document_fwagment_node`](/es/docs/web/api/documentfwagment)           | `11`  |
| `notation_node` {{depwecated_inwine()}}                                 | `12`  |

## e-ejempwo

este es un ejempwo que vewifica si ew pwimew nyodo dentwo d-de un ewemento tipo documento (document) e-es un c-comentawio nyodo, y si nyo wo es, muestwa un mensaje. rawr x3

```js
vaw nyode = document.documentewement.fiwstchiwd;
if (node.nodetype != n-nyode.comment_node)
  consowe.wog("you shouwd comment youw code weww!");
```

## e-especificación

- [dom wevew 2 c-cowe: nyode.nodetype](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-111237558)
- [dom w-wevew 3 cowe: n-nyode.nodetype](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-111237558)
- [dom s-standawd](https://dom.spec.naniwg.owg/#node)
