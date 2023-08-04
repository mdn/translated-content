---
title: Clipboard
slug: Web/API/Clipboard
---

{{APIRef("Clipboard API")}}

> **Note :** Le **presse-papiers** est un tampon de données utilisé pour le stockage ou le transfert à court terme de données, éventuellement entre documents ou applications. Il est généralement mis en œuvre sous la forme d'une [mémoire tampon](https://fr.wikipedia.org/wiki/Mémoire_tampon) temporaire, parfois appelée «&nbsp;tampon de collage&nbsp;», qui peut être accédé par la plupart ou tous les programmes de l'environnement via des [interfaces de programmation](https://fr.wikipedia.org/wiki/Interface_de_programmation) définies.
>
> Une application typique accède aux fonctionnalités du presse-papiers en associant des [entrées utilisateur](https://fr.wikipedia.org/wiki/Entrées-sorties) telles que des [raccourcis clavier](https://fr.wikipedia.org/wiki/Raccourci_clavier), des éléments de [menus](<https://fr.wikipedia.org/wiki/Menu_(informatique)>), etc. à ces interfaces.

L'interface **`Clipboard`** implémente l'[API clipboard](/fr/docs/Web/API/Clipboard_API), qui fournit — si l'utilisateur ou l'utilisatrice accorde sa permission — un accès en lecture et en écriture au contenu du presse-papiers du système. L'API clipboard peut être utilisée pour implémenter les fonctionnalités couper, copier et coller dans une application web.

Le presse-papiers du système est exposé via la propriété globale {{domxref("Navigator.clipboard")}}.

Les appels aux méthodes de l'objet `Clipboard` échoueront si l'utilisateur ou l'utilisatrice n'a pas accordé les permissions requises en utilisant l'[API permissions](/fr/docs/Web/API/Permissions_API), et la permission `"clipboard-read"` ou `"clipboard-write"` selon le besoin.

> **Note :** En réalité, actuellement, les prérequis des navigateurs pour accéder au presse-papiers varient significativement. Veuillez consulter la section [Disponibilité du presse-papiers](#disponibilité_du_presse-papiers) pour plus de détails.

Toutes les méthodes de l'API clipboard fonctionnent de manière asynchrone&nbsp;; elles renvoient une {{jsxref("Promise")}} qui est résolue une fois que l'accès au presse-papiers a réussi. La promesse est rejetée si l'accès au presse-papiers est refusé.

## Méthodes

_`Clipboard` est basé sur l'interface {{domxref("EventTarget")}}, et inclut les méthodes de celle-ci._

- {{domxref("Clipboard.read()","read()")}}
  - : Demande des données arbitraires (telles que des images) depuis le presse-papiers, et renvoie une {{jsxref("Promise")}}. Quand les données ont été obtenues, la promesse est résolue avec un objet {{domxref("DataTransfer")}} qui fournit les données.
- {{domxref("Clipboard.readText()","readText()")}}
  - : Demande du texte depuis le presse-papiers du système&nbsp;; renvoie une `Promise` qui est résolue avec une {{domxref("DOMString")}} contenant le texte du presse-papiers une fois disponible.
- {{domxref("Clipboard.write()","write()")}}
  - : Écrit des données arbitraires dans le presse-papiers du système. Cette opération asynchrone signale quand elle a terminé en résolvant la `Promise` renvoyée.
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : Écrit du texte dans le presse-papiers du système, renvoyant une `Promise` qui est résolue une fois que le texte est entièrement copié dans le presse-papiers.

## Disponibilité du presse-papiers

L'API clipboard asynchrone est une addition relativement récente, et son processus de mise en œuvre dans les navigateurs n'est pas encore terminé. En raison de questions de sécurité et de complexités techniques, l'intégration de cette API se fait progressivement dans la plupart des navigateurs.

Par exemple, Firefox ne supporte pas encore les permissions `"clipboard-read"` et `"clipboard-write"`, et l'accès aux méthodes pour lire et modifier le contenu du presse-papiers sont restreintes d'autres façons.

Pour les WebExtensions, vous pouvez demander les permissions `"clipboardRead"` et `"clipboardWrite"` afin de pouvoir utiliser `clipboard.readText()` et `clipboard.writeText()`. Les {{Glossary("Content Script", "scripts de contenu")}} appliqués à des sites HTTP n'ont pas accès à l'objet `Clipboard`. Voir [extensions in Firefox 63](https://blog.mozilla.org/addons/2018/08/31/extensions-in-firefox-63/).

De plus, {{domxref("Clipboard.read", "read()")}} et {{domxref("Clipboard.write", "write()")}} sont désactivées par défaut et requièrent de changer une préférence pour les activer. Consultez les tables de compatibilité de chaque méthode avant de les utiliser.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
