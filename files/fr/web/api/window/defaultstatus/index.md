---
title: Window.defaultStatus
slug: Web/API/Window/defaultStatus
tags:
  - API
  - HTML DOM
  - NeedsCompatTable
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Obsolete
  - Propriété
  - Reference
  - Window
translation_of: Web/API/Window/defaultStatus
---
{{ obsolete_header(23) }}

{{ APIRef() }}

Obtient / définit le texte de la barre d'état pour la fenêtre donnée.

## Syntaxe

    var sMsg = window.defaultStatus;
    window.defaultStatus = sMsg;

### Paramètres

- `sMsg` est une chaîne contenant le texte à afficher par défaut dans la barre d'état.

## Exemple

    <html>
     <body onload="window.defaultStatus='salut!';"/>
      <button onclick="window.confirm('Êtes-vous sûr de vouloir quitter?');">confirmer</button>
     </body>
    </html>

## Notes

Pour définir le statut une fois la fenêtre ouverte, utilisez {{domxref("window.status")}}.

## Spécification

HTML5
