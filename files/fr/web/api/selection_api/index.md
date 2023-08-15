---
title: API Selection
slug: Web/API/Selection_API
---

{{DefaultAPISidebar("Selection API")}}

> **Note :** Cette API _n'est pas disponible_ dans [les <i lang="en">web workers</i>](/fr/docs/Web/API/Web_Workers_API) (elle n'est pas exposée via [`WorkerNavigator`](/fr/docs/Web/API/WorkerNavigator)).

L'**API Selection** permet d'accéder et de manipuler les portions du document sélectionnées par l'utilisatrice ou l'utilisateur.

Les méthodes [`Window.getSelection()`](/fr/docs/Web/API/Window/getSelection) et [`Document.getSelection()`](/fr/docs/Web/API/Document/getSelection) renvoient un objet [`Selection`](/fr/docs/Web/API/Selection) qui représente la portion du document sélectionnée par la personne. Un objet `Selection` fournit des méthodes pour&nbsp;:

- accéder aux nœuds actuellement sélectionnés
- modifier la sélection courante en l'étendant ou en la réduisant, voire en sélectionnant une toute autre partie du document
- supprimer des parties de la sélection courante du DOM.

L'API Selection fournit deux évènements, qui se déclenchent sur [`Document`](/fr/docs/Web/API/Document)&nbsp;:

- l'évènement [`selectstart`](/fr/docs/Web/API/Document/selectstart_event) qui est déclenché lorsque l'utilisatrice ou l'utilisateur démarre une nouvelle sélection
- l'évènement [`selectionchange`](/fr/docs/Web/API/Document/selectionchange_event) qui est déclenché lorsque la sélection courante change.

## Interfaces

- [`Selection`](/fr/docs/Web/API/Selection)
  - : Une interface qui représente la partie du document sélectionnée par l'utilisatrice ou l'utilisateur, ou la position courante du curseur.
- [`Document.getSelection()`](/fr/docs/Web/API/Document/getSelection)
  - : Une méthode renvoyant un objet `Selection` qui représente la sélection courante ou la position courante du curseur.
- [`Window.getSelection()`](/fr/docs/Web/API/Window/getSelection)
  - : Une méthode renvoyant un objet `Selection` qui représente la sélection courante ou la position courante du curseur.
- [`selectionchange`](/fr/docs/Web/API/Document/selectionchange_event)
  - : Un évènement déclenché lorsque la sélection courante change.
- [`selectstart`](/fr/docs/Web/API/Document/selectstart_event)
  - : Un évènement déclenché lorsqu'une nouvelle sélection est initiée.

## Spécifications

{{Specifications}}
