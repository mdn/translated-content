---
title: "FormData : méthode entries()"
short-title: entries()
slug: Web/API/FormData/entries
l10n:
  sourceCommit: b264328c7abee284014e09d5bfe1bab88898b27a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`entries()`** de l'interface {{DOMxRef("FormData")}} retourne un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) qui parcourt toutes les paires clé/valeur contenues dans le {{DOMxRef("FormData")}}. La clé de chaque paire est une chaîne de caractères, et la valeur est soit une chaîne de caractères, soit un {{DOMxRef("Blob")}}.

> [!NOTE]
> Contrairement aux entrées de {{JSxRef("Map")}}, les entrées de `FormData` ne sont pas nécessairement uniques par clé. Un formulaire peut contenir plusieurs éléments portant le même nom, de sorte que la même clé peut apparaître dans plusieurs paires lors de l'itération. Après la première entrée, la valeur peut différer de la valeur de retour de {{DOMxRef("FormData.get()", "get()")}} qui retourne la première valeur associée à la clé.

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
