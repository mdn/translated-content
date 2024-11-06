---
title: CharacterData
slug: Web/API/CharacterData
---

{{APIRef("DOM")}}

L'interface abstraite **`CharacterData`** représente un objet {{domxref("Node")}} (_noeud_) qui contient des caractères. C'est une interface abstraite, ce qui signifie qu'il n'existe aucun objet de type `CharacterData` : elle est implémentée par d'autres interfaces comme {{domxref("Text")}}, {{domxref("Comment")}} ou {{domxref("ProcessingInstruction")}} qui ne sont pas abstraites.

{{InheritanceDiagram}}

## Propriétés

_Hérite des propriétés de son parent {{domxref("Node")}} et implémente les interfaces {{domxref("ChildNode")}} et {{domxref("NonDocumentTypeChildNode")}}._

- {{domxref("CharacterData.data")}}
  - : est une {{domxref("DOMString")}} (_chaîne de caractères_) representant les données textuelles contenues dans cet objet.
- {{domxref("CharacterData.length")}} {{readonlyInline}}
  - : Retourne un `unsigned long` représentant la taille de la chaîne de caractères contenue dans `CharacterData.data`.
- {{domxref("NonDocumentTypeChildNode.nextElementSibling")}} {{readonlyInline}}
  - : Retourne l'{{domxref("Element")}} immédiatement après celui spécifié dans la liste des enfants de son parent, ou `null` si l'élément spécifié est le dernier de la liste.
- {{domxref("NonDocumentTypeChildNode.previousElementSibling")}} {{readonlyInline}}
  - : Retourne l'{{domxref("Element")}} immédiatement avant celui spécifié dans la liste des enfants de son parent, ou `null` si l'élément spécifié est le premier de la liste.

## Méthodes

_Hérite des méthodes de ses parents, [`Node`](/fr/docs/Web/API/Node) et [`EventTarget`](/fr/docs/Web/API/EventTarget)._

- {{domxref("CharacterData.appendData()")}}
  - : Ajoute la {{domxref("DOMString")}} (_chaîne de caractères_) donnée à la chaîne `CharacterData.data` ; dans le retour de la méthode, `data` contient la {{domxref("DOMString")}} concaténée .
- {{domxref("CharacterData.deleteData()")}}
  - : Supprime la quantité spécifiée de caractères, en commençant au point désigné, à partir de la chaîne `CharacterData.data` ; dans le retour de la méthode, `data` contient le raccourci {{domxref ("DOMString")}}.
- {{domxref("CharacterData.insertData()")}}
  - : Insère les caractères spécifiés, au point désigné, dans la chaîne `CharacterData.data` ; dans le retour de cette méthode, `data` contient la {{domxref ("DOMString")}} (_chaîne de caractères_) modifiée.
- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : Supprime l'objet de la liste d'enfants de son parent.
- {{domxref("CharacterData.replaceData()")}}
  - : Remplace la quantité spécifiée de caractères, en commençant au point désigné, avec la {{domxref ("DOMString")}} (_chaîne de caractères_) spécifiée ; dans le retour de cette méthode, `data` contient la {{domxref ("DOMString")}} modifiée.
- {{domxref("CharacterData.substringData()")}}
  - : Renvoie une {{domxref ("DOMString")}} (_chaîne de caractères_) contenant la partie de `CharacterData.data` de la longueur spécifiée et commençant au point désigné.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référence du DOM](/fr/docs/Web/API/Document_Object_Model).
