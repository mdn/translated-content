---
title: PATCH
slug: Web/HTTP/Methods/PATCH
---

La **méthode `PATCH` d'une requête HTTP** applique des modifications partielles à une ressource.

La méthode HTTP {{HTTPMethod("PUT")}} est déjà définie pour écraser une ressource avec un nouveau corps complet de message, et pour la méthode HTTP {{HTTPMethod("POST")}}, il n'existe aucun moyen standard pour découvrir le support de format de patch. Tout comme `POST`, la méthode HTTP `PATCH` n'est pas listée comme étant idempotent, contrairement à `PUT`. Cela signifie que les requêtes patch identiques et successives auront des effets différents sur l'objet manipulé.

Pour découvrir si un serveur supporte la méthode PATCH, un serveur peut annoncer son support en l'ajoutant à la liste des méthodes autorisées dans les headers de la réponse {{HTTPHeader ("Allow")}} ou encore {{HTTPHeader ("Access-Control-Allow-Methods")}} (pour CORS).

Une autre indication (implicite) que la méthode PATCH est autorisée est la présence du header {{HTTPHeader("Accept-Patch")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête possède un corps de message (body)</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">
        Une requête traitée avec succès retourne une réponse avec un corps de
        message (body)
      </th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        Utilisation au sein des
        <a href="/fr/docs/Web/Guide/HTML/Formulaires">formulaires HTML</a>
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
PATCH /file.txt HTTP/1.1
```

## Exemple

### Requête

```
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description des changements]
```

### Réponse

Une requête traitée avec succès retourne une réponse accompagnée d'un code de réponse {{HTTPStatus("204")}}. Dans ce cas-ci, la réponse ne contient un corps de message.

```
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}} – spécifie les formats de document de patch acceptés par le serveur.
