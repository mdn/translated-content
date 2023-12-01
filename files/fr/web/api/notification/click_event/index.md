---
title: Notification.onclick
slug: Web/API/Notification/click_event
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété **`onclick`**, rattachée à l'interface {{domxref("Notification")}}, définit un gestionnaire d'évènement à déclencher lorsque la notification recçoit un évènement `click` (qui se produit lorsqu'un utilisateur clique sur la notification).

## Syntaxe

```js
Notification.onclick = function(event) { ... };
```

Le comportement par défaut consiste à déplacer le focus sur la zone d'affichage (_viewport_) du [contexte de navigation](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) de la notification. Pour éviter ce comportement, on pourra appeler la méthode [`preventDefault()`](/fr/docs/Web/API/Event/preventDefault) sur l'objet représentant l'évènement.

## Exemples

Dans l'exemple qui suit, on utilise le gestionnaire d'évènement `onclick` pour ouvrir une page dans un nouvel onglet (avec le paramètre `'_blank'`) lorsqu'on clique sur la notification :

```js
notification.onclick = function (event) {
  event.preventDefault(); // empêcher le navigateur de passer le focus sur l'onglet de la navigation
  window.open("http://www.mozilla.org", "_blank");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Notification")}}
- [Utiliser l'API Notifications](/fr/docs/Web/API/notification/Using_Web_Notifications)
