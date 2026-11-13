---
title: "FormData : méthode keys()"
short-title: keys()
slug: Web/API/FormData/keys
l10n:
  sourceCommit: b264328c7abee284014e09d5bfe1bab88898b27a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`FormData.keys()`** de l'interface {{DOMxRef("FormData")}} retourne un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) permettant de parcourir toutes les clés contenues dans cet objet. Les clés sont des chaînes de caractères.

> [!NOTE]
> Contrairement aux clés de {{JSxRef("Map")}}, les clés de `FormData` ne sont pas nécessairement uniques. Un formulaire peut contenir plusieurs éléments portant le même nom, de sorte que la même clé peut apparaître plusieurs fois lors de l'itération. Pour récupérer toutes les valeurs associées à une seule clé, utilisez la méthode {{DOMxRef("FormData.getAll()", "getAll()")}} (ou {{DOMxRef("FormData.get()", "get()")}} pour uniquement la première valeur).

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
