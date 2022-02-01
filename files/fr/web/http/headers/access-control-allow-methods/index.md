---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
tags:
  - CORS
  - HTTP
  - Reference
  - entête
translation_of: Web/HTTP/Headers/Access-Control-Allow-Methods
---
{{HTTPSidebar}}

L'entête de réponse **`Access-Control-Allow-Methods`** spécifie les méthodes autorisées quand on accède à la ressource en réponse à une requête de pré-vérification ({{glossary("preflight request")}}).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'entête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Access-Control-Allow-Methods: <methode>, <methode>, ...

## Directives

- \<methode>
  - : Liste délimitée par des virgules des [méthodes de requêtes HTTP](/en-US/docs/Web/HTTP/Methods) autorisées.

## Exemples

    Access-Control-Allow-Methods: POST, GET, OPTIONS

## Spécifications

| Spécification                                                                                                            | Statut                   | Commentaire         |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName('Fetch','#http-access-control-allow-methods', 'Access-Control-Allow-Methods')}} | {{Spec2("Fetch")}} | Définition initiale |

## Compatibilité avec les navigateurs

{{Compat("http.headers.Access-Control-Allow-Methods")}}

## Notes de compatibilité

- La valeur joker (\*) mentionnée dans la dernière version de la spécification n'est pas encore implémentée dans tous les navigateurs :

  - Chromium: [Issue 615313](https://bugs.chromium.org/p/chromium/issues/detail?id=615313)
  - Firefox: {{bug(1309358)}}
  - Servo: [Issue 13283](https://github.com/servo/servo/issues/13283)

## Voir aussi

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
