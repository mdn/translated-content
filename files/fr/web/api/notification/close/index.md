---
title: Notification.close()
slug: Web/API/Notification/close
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La méthode `close()` de l'interface {{domxref("Notification")}} est utilisée pour fermer / supprimer une notification précédemment affichée.

> **Note :** Cette API ne doit pas être utilisée uniquement pour supprimer la notification de l'écran après un délai fixe, car cette méthode supprimera également la notification de toute barre de notification, empêchant ainsi les utilisateurs d'interagir avec elle après son affichage initial. Une utilisation valable de cette API serait de supprimer une notification qui n'est plus pertinente (par exemple, l'utilisateur a déjà lu la notification sur la page Web dans le cas d'une application de messagerie ou la chanson suivante est déjà en cours de lecture dans une application musicale).

## Syntaxe

```js
Notification.close();
```

### Paramètres

Aucun.

### Returns

Void.

## Exemples

Dans l'extrait de code suivant, nous avons une simple fonction qui, lorsqu'elle est appelée, crée un objet `options`, puis de celui-ci une nouvelle notification. À la fin de la fonction, elle appelle également `close()` dans une fonction {{domxref ("EventTarget.addEventListener", "addEventListener ()")}} pour supprimer la notification lorsque le contenu pertinent a été lu sur la page Web.

```js
function spawnNotification(theBody, theIcon, theTitle) {
  const options = {
    body: theBody,
    icon: theIcon,
  };

  const n = new Notification(theTitle, options);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      // The tab has become visible so clear the now-stale Notification.
      n.close();
    }
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
