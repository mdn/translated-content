---
title: "Document : méthode createCDATASection()"
short-title: createCDATASection()
slug: Web/API/Document/createCDATASection
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("DOM")}}

La méthode **`createCDATASection()`** de l'interface {{DOMxRef("Document")}} crée un nouveau nœud de section CDATA et le retourne.

## Syntaxe

```js-nolint
createCDATASection(data)
```

### Paramètres

- `data`
  - : Une chaîne de caractères contenant les données à ajouter à la section CDATA.

### Valeur de retour

Un nœud de [Section CDATA](/fr/docs/Web/API/CDATASection).

## Exemples

```js
const doc = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const cdata = doc.createCDATASection(
  "Quelques données <CDATA>, et bien d'autres",
);
doc.querySelector("xml").appendChild(cdata);
console.log(new XMLSerializer().serializeToString(doc));
// Affiche : <xml><![CDATA[Quelques données <CDATA>, et bien d'autres]]></xml>
```

## Notes

- Cela fonctionne uniquement avec les documents XML, pas avec les documents HTML (les documents HTML ne prennent pas en charge les sections CDATA)&nbsp;; tenter cette opération sur un document HTML produira une erreur `NOT_SUPPORTED_ERR`.
- Une exception `NS_ERROR_DOM_INVALID_CHARACTER_ERR` sera levée si vous essayez de soumettre la séquence de fermeture CDATA (`]]>`) dans les données&nbsp;; il n'est donc pas possible d'utiliser des données fournies par l'utilisateur·ice sans échappement, sans quoi cette méthode produira cette exception ({{DOMxRef("document.createTextNode", "createTextNode()")}} peut souvent être utilisée à la place).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
