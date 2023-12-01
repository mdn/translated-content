---
title: DELETE
slug: Web/HTTP/Methods/DELETE
---

{{HTTPSidebar}}

La **méthode HTTP DELETE** supprime la ressource indiquée.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Une réponse de succès a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Sûre")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotente")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Peut être mise en cache")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans les
        <a
          href="https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires"
          >formulaires HTML</a
        >
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
DELETE /file.html HTTP/1.1
```

## Exemple

### Requête

```
DELETE /file.html HTTP/1.1
```

### Réponses

Si une méthode `DELETE` est appliquée avec succès, il y a plusieurs codes de statut de réponse possibles&nbsp;:

- Un code de statut {{HTTPStatus("202")}} (`Accepted`) si l'action est en passe de réussir mais n'a pas encore été confirmée.
- Un code de statut {{HTTPStatus("204")}} (`No Content`) si l'action a été confirmée et qu'aucune information supplémentaire n'est à fournir.
- Un code de statut {{HTTPStatus("200")}} (`OK`) si l'action a été confirmée et que le message de réponse inclut une représentation décrivant le statut.

```
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>File deleted.</h1>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- HTTP status: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
