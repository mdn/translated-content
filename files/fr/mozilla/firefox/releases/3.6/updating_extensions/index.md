---
title: Mise à jour des extensions pour Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Cet article fournit des informations utiles aux développeur·euse·s d'extensions qui tentent de mettre à jour leurs extensions pour qu'elles fonctionnent correctement dans Firefox 3.6.

## Changements de l'interface utilisateur

[Le clic droit sur les éléments (y compris les liens et les images) n'offre plus l'option «&nbsp;Propriétés&nbsp;». <sup>(angl.)</sup>](https://bugzil.la/513147) La boîte de dialogue des propriétés n'était pas utile pour la plupart des utilisateur·ice·s et a été supprimée. Si votre extension interagit avec cet élément de menu d'une manière ou d'une autre, vous devez réviser votre code pour l'ajouter vous-même, ou contribuer directement à votre propre entrée de menu contextuel.

## Changements dans les packages d'extensions

Afin de permettre l'affichage des icônes des extensions même lorsqu'elles sont désactivées, Gecko 1.9.2 a ajouté la prise en charge de la détection automatique et de l'utilisation d'une icône nommée `icon.png`, située dans le répertoire racine de l'extension. C'est utilisé si l'extension est désactivée ou si le manifeste ne contient pas d'entrée `iconURL`.

## Améliorations de la conformité HTML 5

Les vues DOM de niveau 2 pour les documents HTML et XHTML sont désormais unifiées conformément à HTML 5.

- La propriété DOM [`localName`](/fr/docs/Web/API/Element/localName) retourne désormais le nom des nœuds d'élément HTML en minuscules. Auparavant, dans les documents HTML, elle renvoyait le nom en majuscules. (La propriété DOM de niveau 1 [`tagName`](/fr/docs/Web/API/Element/tagName) continue de renvoyer le nom en majuscules dans les documents HTML.)
- La propriété DOM [`namespaceURI`](/fr/docs/Web/API/Element/namespaceURI) retourne désormais `"http://www.w3.org/1999/xhtml"` pour les nœuds d'élément HTML. Auparavant, dans les documents HTML, elle renvoyait `null`.
- `document.createElementNS(null, "TOTO")` ne crée plus un nœud d'élément HTML dans les documents HTML. `document.createElement("TOTO")`
  ou `document.createElementNS("http://www.w3.org/1999/xhtml", "toto")` continuent
  de fonctionner dans les documents HTML.
- Les fonctions [`name`](/fr/docs/Web/XML/XPath/Reference/Functions/name) et [`local-name`](/fr/docs/Web/XML/XPath/Reference/Functions/local-name) dans XPath retournent le nom des éléments HTML en minuscules. Auparavant, dans les documents HTML, elles renvoyaient le nom en majuscules.

Le problème de mise à niveau le plus probable est le modèle `if (elt.localName === "TOTO")`.

### Exemple : Tester si un élément est un élément d'image HTML

#### Firefox 3.6, `text/html` et `application/xhtml+xml`

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 et 3.6, uniquement pour les documents `text/html` fournis par l'extension sans éléments insérés par des scripts étrangers (par exemple, SVG)

`if (elt.tagName === "IMG")`

#### Firefox 3.5 et 3.6, pour les documents `text/html` et `application/xhtml+xml`

`if (elt instanceof HTMLImageElement)`

## `contents.rdf` n'est plus pris en charge

La prise en charge de l'ancienne méthode `contents.rdf` pour l'enregistrement du chrome a été supprimée dans Gecko 1.9.2 et n'est plus prise en charge par Firefox 3.6. Cela signifie que les extensions utilisant `contents.rdf` ne peuvent plus être installées.

Assurez-vous d'inclure un [chrome.manifest <sup>(angl.)</sup>](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/en-US/docs/Mozilla/Chrome_Registration) dans votre XPI.

> [!NOTE]
> Les extensions déjà installées utilisant l'ancienne méthode `contents.rdf` pour l'enregistrement du chrome continuent de fonctionner si elles sont déjà installées. Assurez-vous de tester votre extension en la supprimant et en la réinstallant pour garantir que l'installation fonctionne après l'avoir mise à jour pour utiliser un manifeste d'installation.
