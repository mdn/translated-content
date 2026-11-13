---
title: 201 Created
slug: Web/HTTP/Reference/Status/201
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`201 Created`** indique que la requête HTTP a abouti à la création d'une ressource.
Ce code de statut est généralement envoyé à la suite d'une requête {{HTTPMethod("POST")}}.

La nouvelle ressource, ou une description et un lien vers la nouvelle ressource, est créée avant que la réponse ne soit retournée.
Les éléments nouvellement créés peuvent être retournés dans le corps du message de réponse, mais doivent être localisables par **l'URL de la requête initiale** ou par l'URL présente dans la valeur de l'en-tête {{HTTPHeader("Location")}} fourni avec la réponse.

## Statut

```http
201 Created
```

## Exemples

### Réception d'une réponse indiquant la création d'un·e utilisateur·ice

Supposons qu'il existe une API REST pour gérer les utilisateur·ice·s avec un point de terminaison à `http://example.com/users`. Dans cet exemple, on envoie une requête `POST` avec le corps suivant pour créer un·e utilisateur·ice&nbsp;:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "firstName": "Sandra",
  "lastName": "Smith",
  "email": "sandra.smith@example.com"
}
```

Après la création réussie de l'utilisateur·ice, la réponse `201 Created` ressemble à ceci&nbsp;:

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: http://example.com/users/123

{
  "message": "Nouvel utilisateur créé",
  "user": {
    "id": 123,
    "firstName": "Sandra",
    "lastName": "Smith",
    "email": "sandra.smith@example.com"
  }
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
