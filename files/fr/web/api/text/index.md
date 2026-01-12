---
title: Text
slug: Web/API/Text
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("DOM")}}

L'interface **`Text`** représente un noeud de texte {{DOMxRef("Node", "node")}} dans un arbre DOM.

{{InheritanceDiagram}}

Pour comprendre ce qu'est un noeud de texte, considérez le document suivant&nbsp;:

```html
<html lang="fr" class="e">
  <head>
    <title>Des extraterrestres&nbsp;?</title>
  </head>
  <body>
    Bien sûr.
  </body>
</html>
```

Dans ce document, il y a cinq noeuds de texte, avec les contenus suivants&nbsp;:

- `"\n    "` (après la balise d'ouverture `<head>`, un saut de ligne suivi de quatre espaces)
- `"Des extraterrestres&nbsp;?"` (le contenu de l'élément `title`)
- `"\n  "` (après la balise de fermeture `</head>`, un saut de ligne suivi de deux espaces)
- `"\n  "` (après la balise d'ouverture `<body>`, un saut de ligne suivi de deux espaces)
- `"\n Bien sûr.\n \n\n"` (le contenu de l'élément `body`)

Chacun de ces noeuds de texte est un objet qui possède les propriétés et méthodes documentées dans cet article.

## Constructeur

- {{DOMxRef("Text.Text", "Text()")}}
  - : Retourne un nouveau noeud `Text` avec pour paramètre son contenu textuel.

## Propriétés d'instance

_Hérite des propriétés de ses parents, {{DOMxRef("CharacterData")}}, {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Text.assignedSlot")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLSlotElement")}} représentant le {{HTMLElement("slot")}} dans lequel le noeud est inséré.
- {{DOMxRef("Text.wholeText")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères contenant le texte de tous les noeuds `Text` adjacents logiquement à ce {{DOMxRef("Node")}}, concaténé dans l'ordre du document.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("CharacterData")}}, {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Text.splitText")}}
  - : Fractionne le noeud en deux noeuds selon un décalage spécifié.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référence de l'API DOM](/fr/docs/Web/API/Document_Object_Model)
