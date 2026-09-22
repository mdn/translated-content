---
title: "FormData : méthode keys()"
short-title: keys()
slug: Web/API/FormData/keys
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`FormData.keys()`** de l'interface {{DOMxRef("FormData")}} retourne un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) permettant de parcourir toutes les clés contenues dans cet objet. Les clés sont des chaînes de caractères.

## Syntaxe

```js-nolint
keys()
```

### Paramètres

Aucun.

### Valeur de retour

Un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) des clés de {{DOMxRef("FormData")}}.

## Exemples

```js
const formData = new FormData();
formData.append("cle1", "valeur1");
formData.append("cle2", "valeur2");

// Affiche les clés
for (const cle of formData.keys()) {
  console.log(cle);
}
```

Le résultat est&nbsp;:

```plain
cle1
cle2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
