---
title: Clipboard
slug: Web/API/Clipboard
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

L'interface **`Clipboard`** implémente [l'API clipboard](/fr/docs/Web/API/Clipboard_API), qui fournit — si l'utilisateur ou l'utilisatrice accorde sa permission — un accès en lecture et en écriture au contenu du presse-papiers du système. L'API clipboard peut être utilisée pour implémenter les fonctionnalités couper, copier et coller dans une application web.

{{InheritanceDiagram}}

Le presse-papiers du système est exposé via la propriété globale {{domxref("Navigator.clipboard")}}.

Les appels aux méthodes de l'objet `Clipboard` échoueront si l'utilisateur ou l'utilisatrice n'a pas accordé les permissions requises en utilisant [l'API permissions](/fr/docs/Web/API/Permissions_API), et la permission `"clipboard-read"` ou `"clipboard-write"` selon le besoin.

Toutes les méthodes de l'API clipboard fonctionnent de manière asynchrone&nbsp;; elles renvoient une {{jsxref("Promise")}} qui est résolue une fois que l'accès au presse-papiers a réussi. La promesse est rejetée si l'accès au presse-papiers est refusé.

## Méthodes d'instance

_`Clipboard` est basé sur l'interface {{domxref("EventTarget")}}, et inclut les méthodes de celle-ci._

- {{domxref("Clipboard.read()","read()")}}
  - : Demande des données arbitraires (telles que des images) depuis le presse-papiers, et renvoie une {{jsxref("Promise")}}. Quand les données ont été obtenues, la promesse est résolue avec un objet {{domxref("DataTransfer")}} qui fournit les données.
- {{domxref("Clipboard.readText()","readText()")}}
  - : Demande du texte depuis le presse-papiers du système&nbsp;; renvoie une `Promise` qui est résolue avec une {{jsxref("String")}} contenant le texte du presse-papiers une fois disponible.
- {{domxref("Clipboard.write()","write()")}}
  - : Écrit des données arbitraires dans le presse-papiers du système. Cette opération asynchrone signale quand elle a terminé en résolvant la `Promise` renvoyée.
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : Écrit du texte dans le presse-papiers du système, renvoyant une `Promise` qui est résolue une fois que le texte est entièrement copié dans le presse-papiers.

## Évènements

- {{DOMxRef("Clipboard.clipboardchange_event","clipboardchange")}} {{Experimental_Inline}}
  - : Déclenché lorsque le contenu du presse-papiers du système est modifié de quelque manière que ce soit, par exemple par une commande de copie du système, ou avec une méthode API telle que {{DOMxRef("Clipboard.writeText()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.execCommand()")}}
