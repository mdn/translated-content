---
title: Location
slug: Web/HTTP/Headers/Location
translation_of: Web/HTTP/Headers/Location
---
{{HTTPSidebar}}

L'en-tête de réponse `Location` indique l'URL vers laquelle rediriger une page. Il a un sens seulement lorsqu'il est servi avec une réponse d'état `3xx` (redirection) ou `201` (créé).

En cas de redirection, la méthode HTTP utilisée pour la nouvelle requête de récupération de la page pointée par `Location` dépend la méthode d'origine et du type de redirection :

- Si les réponses {{HTTPStatus("303")}} (Voir Aussi) conduisent toujours à l'utilisation d'une méthode {{HTTPMethod("GET")}}, {{HTTPStatus("307")}} (Redirection Temporaire) et {{HTTPStatus("308")}} (Redirection Permanente) ne modifient pas la méthode utilisée dans la demande d'origine;
- {{HTTPStatus("301")}} (Redirection permanente) et {{HTTPStatus("302")}} (Trouvé) ne change pas la méthode la plupart du temps, bien que les user-agents plus anciens puissent.

Toutes les réponses avec l'un de ces codes d'état envoient un en-tête `Location`.

En cas de création de ressource, il indique l'URL de la ressource nouvellement créée.

`Location` et {{HTTPHeader("Content-Location")}} sont différents : `Location` indique la cible d'une redirection (ou l'URL d'une ressource nouvellement créée), tandis que {{HTTPHeader("Content-Location")}} indique l'URL directe à utiliser pour accéder à la ressource lorsque la négociation de contenu a eu lieu, sans qu'il soit nécessaire de poursuivre la négociation de contenu. L'emplacement est un en-tête associé à la réponse, tandis que {{HTTPHeader("Content-Location")}} est associé à l'entité renvoyée.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Location: <url>

## Directives

- \<url>
  - : Une URL relative (à l'URL de la demande) ou absolue.

## Exemples

    Location: /index.html

## Spécifications

| Specification                                    | Title                                                         |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "Location", "7.1.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité navigateurs

{{Compat("http.headers.Location")}}

## Voir aussi

- {{HTTPHeader("Content-Location")}}
- État des réponses, y compris un en-tête `Location` : {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
