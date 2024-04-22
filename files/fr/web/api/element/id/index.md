---
title: element.id
slug: Web/API/Element/id
---

{{ApiRef("DOM")}}

La propriété **`Element.id`** représente l'identifiant de l'élément, reflétant l' **[id](/fr/docs/Web/HTML/Attributs_universels/id)** global de l'attribut.

Il doit être unique dans un document et est souvent utilisé pour extraire l'élément en utilisant {{domxref("document.getElementById","getElementById")}}. Les autres utilisations courantes de `id` comprennent l'utilisation de l'[ID de l'élément en tant que sélecteur](/fr/docs/Web/CSS/Sélecteurs_d_ID) lors de la mise en forme du document avec [CSS](/fr/docs/Web/CSS).

> **Note :** Les identifiants sont sensibles à la casse, mais vous devez éviter de créer des ID qui ne diffèrent que par la casse (voir [Sensibilité à la casse dans les noms de classe et d'identifiant](/fr/docs/Archive/Case_Sensitivity_in_class_and_id_Names)).

## Syntaxe

```js
var idStr = elt.id; // Obtenez l'identifiant
elt.id = idStr; // Définir l'identifiant
```

- `idStr` est l'identifiant de l'élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut global [**id**](/fr/docs/Web/HTML/Attributs_universels/id) de DOM.
