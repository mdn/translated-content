---
title: Document.ononline
slug: conflicting/Web/API/Window/online_event
tags:
  - API
  - DOM
  - Document
  - En ligne
  - Propriétés
translation_of: Web/API/Document/ononline
original_slug: Web/API/Document/ononline
---
{{APIRef("DOM")}}

Un évènement "`online`" est lancé sur le `<body>` (_corps_) de chaque page quand le navigateur bascule entre les modes online (_en ligne_) et offline (_hors ligne_). De plus les évènements se propagent de `document.body` vers `document` et finalement sur `window`. Les deux évènements ne sont pas annulables (vous ne pouvez pas empêcher l'utilisateur de se connecter ou de vous déconnecter).

`window.navigator.onLine` renvoie un booléen _true_ (_vrai_) si le navigateur est online et false s'il est définitivement offline (déconnecté du réseau). Les évènements online et offline sont lancés si la valeur de cet attribut change.

> **Note :** Il est important de noter que cet événement et cet attribut sont intrinsèquement peu fiables. Un ordinateur peut être connecté à un réseau sans avoir accès à Internet.

Vous pouvez enregistrer les écouteurs de ces événements de plusieurs manières habituelles :

- en utilisant [`addEventListener`](/en/DOM/element.addEventListener) sur `window`, `document` ou `document.body`
- en définissant les propriétés `.ononline` ou `.onoffline` sur `document` ou `document.body` sur un objet  `Function` JavaScript. (**Note :** l'utilisation de `window.ononline` ou `window.onoffline` ne fonctionnera pas pour des raisons de compatibilité).
- en spécifiant les attributs `ononline="..."` ou `onoffline="..."` sur la balise `<body>`  dans le balisage HTML.

## Exemple

Il existe  [un cas de test simple](https://bugzilla.mozilla.org/attachment.cgi?id=220609) que vous pouvez exécuter pour vérifier le fonctionnement des évènements.

## Références

- [Évènements online et offline](/fr/docs/Web/API/NavigatorOnLine/%C3%89v%C3%A8nements_online_et_offline)
- [Spécification](http://www.whatwg.org/specs/web-apps/current-work/#event-online) [WHATWG Web App](http://www.whatwg.org/specs/web-apps/current-work/#event-online) (en)
