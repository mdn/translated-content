---
title: element.id
slug: Web/API/Element/id
tags:
  - API
  - DOM
  - Element
  - Propriété
  - Reference
translation_of: Web/API/Element/id
---
{{ApiRef("DOM")}}

La propriété **`Element.id`** représente l'identifiant de l'élément, reflétant l' **[id](/fr/docs/Web/HTML/Attributs_universels/id)** global de l'attribut.

Il doit être unique dans un document et est souvent utilisé pour extraire l'élément en utilisant {{domxref("document.getElementById","getElementById")}}. Les autres utilisations courantes de `id` comprennent l'utilisation de l'[ID de l'élément en tant que sélecteur](/fr/docs/Web/CSS/S%C3%A9lecteurs_d_ID) lors de la mise en forme du document avec [CSS](/fr/docs/Web/CSS).

> **Note :** Les identifiants sont sensibles à la casse, mais vous devez éviter de créer des ID qui ne diffèrent que par la casse (voir [Sensibilité à la casse dans les noms de classe et d'identifiant](/fr/docs/Archive/Case_Sensitivity_in_class_and_id_Names)).

## Syntaxe

    var idStr = elt.id; // Obtenez l'identifiant
    elt.id = idStr; // Définir l'identifiant

- `idStr` est l'identifiant de l'élément.

## Spécification

| Spécification                                                                    | Statut                           | Commentaire                                                       |
| -------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-id', 'id')}}             | {{Spec2('DOM WHATWG')}} | Pas de changement par rapport à {{SpecName('DOM2 HTML')}}. |
| {{SpecName('DOM2 HTML', 'html.html#ID-63534901', 'id')}}     | {{Spec2('DOM2 HTML')}}     | Pas de changement par rapport à {{SpecName('DOM1')}}.     |
| {{SpecName('DOM1', 'level-one-html.html#ID-63534901', 'id')}} | {{Spec2('DOM1')}}         | Définition initiale.                                              |

## Compatibilité des navigateurs

{{Compat("api.Element.id")}}

## Voir aussi

- L'attribut global [**id**](/fr/docs/Web/HTML/Attributs_universels/id) de DOM.
