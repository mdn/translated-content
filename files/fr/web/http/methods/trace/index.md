---
title: TRACE
slug: Web/HTTP/Methods/TRACE
tags:
  - HTTP
  - Reference
  - requête
translation_of: Web/HTTP/Methods/TRACE
original_slug: Web/HTTP/Méthode/TRACE
---
{{HTTPSidebar}}

La **méthode HTTP `TRACE`** effectue un test de rebouclage des messages le long du chemin vers la ressource cible, fournissant ainsi un mécanisme de débogage utile.

Le destinataire final de la demande doit renvoyer au client le message reçu, à l'exclusion de certains champs décrits ci-dessous, en tant que corps de message d'une réponse {{HTTPStatus("200")}}. (OK) avec un {{HTTPHeader("Content-Type")}} de `message/http`. Le destinataire final est soit le serveur d'origine, soit le premier serveur à recevoir une valeur {{HTTPHeader("Max-Forwards")}} de 0 dans la requête.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La demande a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Une réponse réussie a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Autorisé dans les formulaires HTML</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    TRACE /index.html

## Specifications

| Specification                                | Title                                                         |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "TRACE", "4.3.8")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http.methods.TRACE")}}

## Voir également

- [Méthodes HTTP](/fr/docs/Web/HTTP/Méthode)
