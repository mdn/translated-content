---
title: NamedNodeMap
slug: Web/API/NamedNodeMap
---

{{APIRef("DOM")}}

L'interface **`NamedNodeMap`** représente une collection d'objets {{domxref("Attr")}}. Les objets de cette collection n'ont pas d'ordre particulier (contrairement à {{domxref("NodeList")}}) mais on peut y accéder grâce à un index (comme pour un tableau).

Un objet `NamedNodeMap` est _vivant_ et sera automatiquement mis à jour si des modifications sont apportées à son contenu (que cela provienne d'une source interne ou externe).

> **Note :** Bien qu'intitulée `NamedNodeMap`, cette interface ne manipule pas d'objets {{domxref("Node")}} mais des objets {{domxref("Attr")}}. Ces derniers étaient à l'origine (et le sont toujours pour certaines implémentations) une classe spécialisée de {{domxref("Node")}}.

## Propriétés

_Cette interface n'hérite d'aucune propriété._

- {{domxref("NamedNodeMap.length")}} {{ReadOnlyInline}}
  - : Cette propriété renvoie le nombre d'objets contenus dans la _map_.

## Méthodes

_Cette interface n'hérite d'aucune méthode._

- {{domxref("NamedNodeMap.getNamedItem()")}}
  - : Cette méthode renvoie un objet {{domxref("Attr")}} qui correspond au nom indiqué.
- {{domxref("NamedNodeMap.setNamedItem()")}}
  - : Cette méthode remplace ou ajoute l'objet {{domxref("Attr")}} identifié dans la collection par le nom indiqué.
- {{domxref("NamedNodeMap.removeNamedItem()")}}
  - : Cette méthode retire l'objet {{domxref("Attr")}} de la collection à partir du nom indiqué.
- {{domxref("NamedNodeMap.item()")}}
  - : Cette méthode renvoie l'objet {{domxref("Attr")}} à l'index indiqué (ou `null` si l'index est supérieur ou égal au nombre de nœuds.
- {{domxref("NamedNodeMap.getNamedItemNS()")}}
  - : Cette méthode renvoie un objet {{domxref("Attr")}} identifié par un espace de noms et un nom local associé.
- {{domxref("NamedNodeMap.setNamedItemNS()")}}
  - : Cette méthode remplace ou ajoute un objet {{domxref("Attr")}} identifié par un espace de noms et un nom local associé.
- {{domxref("NamedNodeMap.removeNamedItemNS()")}}
  - : Cette méthode retire l'objet {{domxref("Attr")}} de la collection à partir d'un espace de noms et d'un nom local associé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Element.attributes")}}
- {{domxref("Attr")}}
- {{domxref("NodeList")}}
