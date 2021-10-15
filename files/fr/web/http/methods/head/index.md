---
title: HEAD
slug: Web/HTTP/Methods/HEAD
tags:
  - HTTP
  - Reference
  - Request method
translation_of: Web/HTTP/Methods/HEAD
original_slug: Web/HTTP/Méthode/HEAD
---
{{HTTPSidebar}}

La **méthode HTTP `HEAD`** demande les en-têtes qui seraient retournés si la ressource spécifiée était demandée avec une méthode HTTP {{HTTPMethod("GET")}}. Une telle requête peut être envoyée avant de procéder au téléchargement d'une  ressource volumineuse, par exemple pour économiser de la bande passante.

Une réponse issue d'une requête `HEAD` ne doit pas avoir de corps. Si tel est le cas, elle doit être ignorée. Toutefois, les {{glossary("En-têtes d'entité", "en-têtes d'entité")}} décrivant le contenu du corps, comme {{HTTPHeader("Content-Length")}}, peuvent être inclus dans la réponse. Ils ne sont pas liés au corps de la réponse `HEAD` , qui doit être vide, mais au corps d'une réponse issue d'une requête similaire utilisant la méthode {{HTTPMethod("GET")}}.

Si le résultat d'une requête `HEAD` montre qu'une ressource mise en cache après une requête {{HTTPMethod("GET")}} est désormais dépassée, le cache est invalidé, même si aucune requête GET n'a été émise.

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
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotente")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Peut être mise en cache")}}</th>
      <td>Oui</td>
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

    HEAD /index.html

## Spécifications

| Spécification                                | Titre                                                         |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "HEAD", "4.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/methods", "HEAD")}}

## Voir aussi

- {{HTTPMethod("GET")}}
