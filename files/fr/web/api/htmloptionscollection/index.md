---
title: HTMLOptionsCollection
slug: Web/API/HTMLOptionsCollection
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLOptionsCollection`** représente une collection d'éléments HTML {{HTMLElement("option")}} (dans l'ordre du document) et propose des méthodes et propriétés pour sélectionner dans la liste ainsi que, éventuellement, modifier ses éléments. Cet objet est uniquement retourné par la propriété `options` d'un [sélecteur](/fr/docs/Web/API/HTMLSelectElement).

{{InheritanceDiagram}}

## Propriétés d'instance

- {{DOMxRef("HTMLOptionsCollection.length")}}
  - : Retourne ou définit le nombre d'options dans la collection.
- {{DOMxRef("HTMLOptionsCollection.selectedIndex")}}
  - : Le numéro d'indice du premier élément {{HTMLElement("option")}} sélectionné. La valeur `-1` indique qu'aucun élément n'est sélectionné.

## Méthodes d'instance

_Cette interface hérite des méthodes de son parent, [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection)._

- {{DOMxRef("HTMLOptionsCollection.add()")}}
  - : Ajoute un élément {{DOMxRef("HTMLOptionElement")}} ou {{DOMxRef("HTMLOptGroupElement")}} à la collection d'éléments `option` ou l'ajoute avant une option définie.
- {{DOMxRef("HTMLOptionsCollection.remove()")}}
  - : Supprime l'élément à l'indice défini de la collection d'options.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLOptionElement")}}
- L'interface {{DOMxRef("HTMLCollection")}}
- L'interface {{DOMxRef("HTMLOptGroupElement")}}
- L'interface {{DOMxRef("HTMLSelectElement")}}
- [Guide&nbsp;: Collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
