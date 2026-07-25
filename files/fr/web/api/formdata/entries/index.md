---
title: "FormData : méthode entries()"
short-title: entries()
slug: Web/API/FormData/entries
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`entries()`** de l'interface {{DOMxRef("FormData")}} retourne un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) qui parcourt toutes les paires clé/valeur contenues dans le {{DOMxRef("FormData")}}. La clé de chaque paire est une chaîne de caractères, et la valeur est soit une chaîne de caractères, soit un {{DOMxRef("Blob")}}.

## Syntaxe

```js-nolint
entries()
```

### Paramètres

Aucun.

### Valeur de retour

Un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) des paires clé/valeur de {{DOMxRef("FormData")}}.

## Exemples

```js
formData.append("cle1", "valeur1");
formData.append("cle2", "valeur2");

// Affichage des paires clé/valeur
for (const paire of formData.entries()) {
  console.log(paire[0], paire[1]);
}
```

Le résultat est&nbsp;:

```plain
cle1 valeur1
cle2 valeur2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
