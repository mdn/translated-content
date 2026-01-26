---
title: 201 Created
slug: Web/HTTP/Reference/Status/201
l10n:
  sourceCommit: 52d840333a70d06e6f667faaeb160f3ad4b03eca
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`201 Created`** indique que la requête HTTP a abouti à la création d'une ressource.
Ce code de statut est généralement envoyé à la suite d'une requête {{HTTPMethod("POST")}}.

La nouvelle ressource, ou une description et un lien vers la nouvelle ressource, est créée avant que la réponse ne soit retournée.
Les éléments nouvellement créés peuvent être retournés dans le corps du message de réponse, mais doivent être localisables par l'**URL de la requête initiale** ou par l'URL présente dans la valeur de l'en-tête {{HTTPHeader("Location")}} fourni avec la réponse.

## Statut

```http
201 Created
```

## Exemples

### Réception d'une réponse indiquant la création d'un·e utilisateur·ice

Supposons qu'il existe une API REST pour gérer les utilisateur·ice·s avec un point de terminaison à `http://exemple.com/users`. Dans cet exemple, on envoie une requête `POST` avec le corps suivant pour créer un·e utilisateur·ice&nbsp;:

```http
POST /users HTTP/1.1
Host: exemple.com
Content-Type: application/json

{
  "firstName": "Sandra",
  "lastName": "Smith",
  "email": "sandra.smith@exemple.com"
}
```

Après la création réussie de l'utilisateur·ice, la réponse `201 Created` ressemblera à ceci&nbsp;:

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: http://exemple.com/users/123

{
  "message": "Nouvel utilisateur créé",
  "user": {
    "id": 123,
    "firstName": "Sandra",
    "lastName": "Smith",
    "email": "sandra.smith@exemple.com"
  }
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
