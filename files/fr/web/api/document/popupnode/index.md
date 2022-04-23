---
title: Document.popupNode
slug: Web/API/Document/popupNode
tags:
  - API
  - DOM
  - Document
  - Fenêtre contextuelle
  - Propriétés
  - XUL
translation_of: Web/API/Document/popupNode
---
{{ApiRef("DOM")}}{{deprecated_header}}

> **Note :** À partir de Gecko 2.0, les auteurs sont encouragés à utiliser la propriété `triggerNode` de `menupopup` à la place.

Quand une fenêtre contextuelle attachée via les attributs `popup` ou `context` est ouverte, la propriété `popupNode` du document XUL est définie sur le noeud sur lequel vous avez cliqué. Il sera la cible de l'événement de souris qui a activé la fenêtre contextuelle. Si elle a été ouverte avec le clavier, le nœud contextuel peut être défini sur null. En règle générale, cette propriété sera vérifiée au cours de la gestion des événements par popupshowing, un menu contextuel pour initialiser le menu basé sur le contexte.

Cette propriété est uniquement définie pour les fenêtres contextuelles attachées via les attributs `popup` ou `context`. Pour les autres types, la valeur n'est pas modifiée. Dans ces autres cas, par exemple lors de l'appel de la méthode [showPopup](/fr/docs/Mozilla/Tech/XUL/M%C3%A9thodes/showPopup) de la fenêtre contextuelle, vous pouvez définir la propriété `popupNode` directement au préalable.

Cette propriété s'applique seulement aux documents XUL.

## Syntaxe

    var node = document.popupNode;

## Exemple

```xml
<menupopup id="toolbarContextMenu">
  ...
  <menuitem oncommand="mailNewsCore.deleteButton(document.popupNode)">
  ...
</menupopup>
```

Voir <http://www.mozilla.org/xpfe/xptoolkit/popups.html>

## Voir aussi

- Défini dans {{Source("dom/public/idl/xul/nsIDOMXULDocument.idl#48", "nsIDOMXULDocument.idl")}}. méthode spécifique XUL. Ne fait partie d'aucune spécification.
