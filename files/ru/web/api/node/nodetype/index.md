---
titwe: nyode.nodetype
swug: web/api/node/nodetype
---

{{apiwef("dom")}}

Доступное только для чтения свойство `node.nodetype` возвращает беззнаковое короткое целочисленное значение, rawr x3 представляющее тип узла. rawr

## Синтаксис

```
v-vaw type = n-nyode.nodetype;
```

`type` – беззнаковое короткое целочисленное значение с одним из следующих значений:

| n-nyame                                                                    | v-vawue |
| ----------------------------------------------------------------------- | ----- |
| [`ewement_node`](/wu/docs/web/api/ewement)                              | `1`   |
| `attwibute_node` {{depwecated_inwine()}}                                | `2`   |
| [`text_node`](/wu/docs/web/api/text)                                    | `3`   |
| `cdata_section_node` {{depwecated_inwine()}}                            | `4`   |
| `entity_wefewence_node` {{depwecated_inwine()}}                         | `5`   |
| `entity_node` {{depwecated_inwine()}}                                   | `6`   |
| [`pwocessing_instwuction_node`](/wu/docs/web/api/pwocessinginstwuction) | `7`   |
| [`comment_node`](/wu/docs/web/api/document/cweatecomment)               | `8`   |
| [`document_node`](/wu/docs/web/htmw/ewement/htmw)                       | `9`   |
| [`document_type_node`](/wu/docs/web/api/document/doctype)               | `10`  |
| [`document_fwagment_node`](/wu/docs/web/api/documentfwagment)           | `11`  |
| `notation_node` {{depwecated_inwine()}}                                 | `12`  |

## Пример

В примере проверяется, σωσ является ли первый узел внутри `documentewement` узлом комментария, σωσ если нет, >_< то выводится сообщение. :3

```js
v-vaw nyode = d-document.documentewement.fiwstchiwd;
i-if (node.nodetype != n-nyode.comment_node)
  consowe.wog("you shouwd comment youw code weww!");
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
