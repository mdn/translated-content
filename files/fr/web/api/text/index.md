---
title: Text
slug: Web/API/Text
---

{{ApiRef("DOM")}}

L'interface **`Text`** représente le contenu textuel d'un élément {{domxref("Element")}} ou d'un attribut {{domxref("Attr")}}. Si un élément n'a pas de balisage dans son contenu, il a un seul enfant implémentant `Text` qui contient le texte de l'élément. Par contre, si l'élément contient un balisage, il est analysé par les éléments d'information et les noeuds `Text` qui sont ses enfants.

Un nouveau document a un unique noeud `Text` pour chaque bloc de texte. Au fil du temps, d'autres noeuds peuvent être créés `Text` en temps que modification du contenu du document. La méthode {{domxref("Node.normalize()")}} fusionne les objets `Text` dans un seul noeud pour chaque bloc de texte.

{{InheritanceDiagram}}

## Constructeur

- {{domxref("Text.Text", "Text()")}} {{experimental_inline}}
  - : Retourne un noeud `Text` avec le paramètre comme contenu textuel.

## Propriétés

_Hérite des propriétés de son parent {{domxref("CharacterData")}}._

- {{domxref("Text.isElementContentWhitespace")}} {{readonlyInline}}{{deprecated_inline}}
  - : Renvoie une marque {{domxref("Boolean")}} indiquant si le noeud de texte contient uniquement des espaces.
- {{domxref("Text.wholeText")}} {{readonlyInline}}
  - : Renvoie une {{domxref("DOMString")}} (_chaîne de caractères_) contenant le texte de tous les noeuds `Text` adjacents logiquement à ce {{domxref("Node")}}, concaténé dans l'ordre du document.
- {{domxref("Text.assignedSlot")}} {{readonlyinline}}
  - : Retourne l'objet {{domxref("HTMLSlotElement")}} associé à l'élément.

## Méthodes

_Hérite des méthodes de son parent {{domxref("CharacterData")}}._

<!---->

- {{domxref("Text.replaceWholeText")}} {{deprecated_inline}}
  - : Remplace le texte du noeud en cours et tous les noeuds logiquement adjacents avec le texte spécifié.

<!---->

- {{domxref("Text.splitText")}}
  - : Fractionne le noeud en deux noeuds selon un décalage spécifié.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référence du DOM](/fr/docs/Web/API/Document_Object_Model)
