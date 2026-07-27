---
title: "FormData : méthode values()"
short-title: values()
slug: Web/API/FormData/values
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`FormData.values()`** retourne un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) permettant de passer en revue toutes les valeurs contenues dans le {{domxref("FormData")}}. Les valeurs sont des chaînes de caractères ou des objets {{domxref("Blob")}}.

## Syntaxe

```js-nolint
values()
```

### Valeur de retour

Un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) des valeurs du {{domxref("FormData")}}.

## Exemples

```js
const formData = new FormData();
formData.append("cle1", "valeur1");
formData.append("cle2", "valeur2");

// Affiche les valeurs
for (const valeur of formData.values()) {
  console.log(valeur);
}
```

Le résultat est&nbsp;:

```plain
valeur1
valeur2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
