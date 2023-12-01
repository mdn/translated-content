---
title: Notification.dir
slug: Web/API/Notification/dir
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`dir`** de l'interface {{domxref ("Notification")}} indique le sens du texte de la notification, définis à l'aide de l'option `dir` lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification()" )}}.

## Syntaxe

```js
Notification.dir;
```

### Valeur

Une {{domxref ("DOMString")}} spécifiant la direction du texte. Les valeurs possibles sont:

- `auto`: adopte le comportement de réglage de la langue du navigateur (par défaut).
- `ltr`: de gauche à droite.
- `rtl` : de droite à gauche.

> **Note :** La plupart des navigateurs semblent ignorer les paramètres explicites de ltr et rtl, et utilisent simplement le paramètre à l'échelle du navigateur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
