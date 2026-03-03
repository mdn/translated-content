---
title: Méthode statique
slug: Glossary/Static_method
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

Une méthode statique (ou _fonction statique_) est une {{Glossary("method", "méthode")}} définie comme membre d'un {{Glossary("object", "objet")}} mais est accessible directement depuis le constructeur d'un objet API, plutôt que depuis une instance d'objet créée via le constructeur.

Dans une [API Web](/fr/docs/Web/API), une méthode statique est une méthode définie par une interface mais peut être appelée sans instancier d'abord un objet de ce type.

Les méthodes appelées sur des instances d'objet sont appelées _méthodes d'instance_.

## Exemples

Dans l'[API Notifications](/fr/docs/Web/API/Notifications_API), la méthode {{DOMxRef("Notification/requestPermission_static", "Notification.requestPermission()")}} est appelée sur le constructeur {{DOMxRef("Notification")}} lui-même — c'est une méthode statique&nbsp;:

```js
let promise = Notification.requestPermission();
```

La méthode {{DOMxRef("Notification.close()")}}, en revanche, est une méthode d'instance — elle est appelée sur une instance spécifique de notification pour fermer la notification système qu'elle représente&nbsp;:

```js
let myNotification = new Notification("Ceci est ma notification");

myNotification.close();
```

## Voir aussi

- Le mot clé [static](/fr/docs/Web/JavaScript/Reference/Classes/static)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Object", "Objet")}}
  - {{Glossary("Method", "Méthode")}}
