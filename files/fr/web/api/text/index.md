---
title: Text
slug: Web/API/Text
l10n:
  sourceCommit: c51bc7f1c28be80290cc7fdebff82bce42001cf5
---

{{APIRef("DOM")}}

L'interface **`Text`** représente un nœud de texte {{DOMxRef("Node", "node")}} dans un arbre DOM.

{{InheritanceDiagram}}

Pour comprendre ce qu'est un nœud de texte, considérez le document suivant&nbsp;:

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

Dans ce document, il y a cinq nœuds de texte, avec les contenus suivants (tous les espaces sont affichés comme `◦` et tous les sauts de ligne comme `⏎`)&nbsp;:

- `"⏎◦◦◦◦"` (après la balise d'ouverture `<head>`, un saut de ligne suivi de quatre espaces)
- `"Extraterrestres◦?"` (le contenu de l'élément `<title>`)
- `"⏎◦◦"` (après la balise de fermeture `</title>`, un saut de ligne suivi de deux espaces)
- `"⏎◦◦"` (après la balise de fermeture `</head>`, un saut de ligne suivi de deux espaces)
- `"⏎◦◦◦◦Bien◦sûr.⏎◦◦⏎"` (le contenu de l'élément `<body>`)

Chacun de ces nœuds de texte est un objet qui possède les propriétés et méthodes documentées dans cet article.

## Constructeur

- {{DOMxRef("Text.Text", "Text()")}}
  - : Retourne un nouveau nœud `Text` avec pour paramètre son contenu textuel.

## Propriétés d'instance

_Hérite des propriétés de ses parents, {{DOMxRef("CharacterData")}}, {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Text.assignedSlot")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLSlotElement")}} représentant le {{HTMLElement("slot")}} dans lequel le nœud est inséré.
- {{DOMxRef("Text.wholeText")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères contenant le texte de tous les nœuds `Text` adjacents logiquement à ce {{DOMxRef("Node")}}, concaténé dans l'ordre du document.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("CharacterData")}}, {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Text.splitText")}}
  - : Fractionne le nœud en deux nœuds selon un décalage défini.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référence de l'API DOM](/fr/docs/Web/API/Document_Object_Model)
