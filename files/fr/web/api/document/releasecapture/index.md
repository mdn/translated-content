---
title: Document.releaseCapture()
slug: Web/API/Document/releaseCapture
tags:
  - API
  - Capture
  - DOM
  - Document
  - Méthodes
  - Souris
translation_of: Web/API/Document/releaseCapture
---
{{ ApiRef("DOM") }} {{gecko_minversion_header("2.0")}}

Libère la capture de la souris si elle est actuellement activée (_bouton gauche enfoncé_) sur un élément de ce document. L'activation de la capture de la souris sur un élément se fait en appelant {{domxref("element.setCapture()")}}.

## Syntaxe

    document.releaseCapture()

Une fois la capture de la souris relâchée, les événements de souris ne seront plus dirigés vers l'élément sur lequel la capture est activée.

## Exemple

Voir l'[exemple](/en-US/docs/Web/API/element.setCapture#Example) pour {{domxref("element.setCapture()")}}.

## Spécifications

Basé sur l'implémentation Internet Explorer.

## Voir aussi

- {{domxref("element.setCapture()")}}
