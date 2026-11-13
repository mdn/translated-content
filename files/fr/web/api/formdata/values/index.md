---
title: "FormData : méthode values()"
short-title: values()
slug: Web/API/FormData/values
l10n:
  sourceCommit: b264328c7abee284014e09d5bfe1bab88898b27a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`FormData.values()`** retourne un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) permettant de passer en revue toutes les valeurs contenues dans le {{DOMxRef("FormData")}}. Les valeurs sont des chaînes de caractères ou des objets {{DOMxRef("Blob")}}.

> [!NOTE]
> Les clés de `FormData` ne sont pas nécessairement uniques. Un formulaire peut contenir plusieurs éléments portant le même nom, de sorte que les valeurs partageant une même clé apparaissent chacune lors de l'itération. Pour récupérer toutes les valeurs associées à une seule clé, utilisez la méthode {{DOMxRef("FormData.getAll()", "getAll()")}} (ou {{DOMxRef("FormData.get()", "get()")}} pour uniquement la première valeur).

## Syntaxe

```js-nolint
values()
```

### Valeur de retour

Un [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) des valeurs du {{DOMxRef("FormData")}}.

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
