---
title: Last-Modified
slug: Web/HTTP/Headers/Last-Modified
tags:
  - Entête de Réponse
  - Entêtes HTTP
  - HTTP
  - Reference
translation_of: Web/HTTP/Headers/Last-Modified
---
{{HTTPSidebar}}

L'entête HTTP de réponse **`Last-Modified`** contient la date et l'heure à laquelle le serveur d'origine pense que la ressource a été modifiée pour la dernière fois. Il est utilisé comme un validateur pour déterminer si une ressource reçue et une stockée sont les mêmes. Moins précis qu'un entête {{HTTPHeader("ETag")}}, c'est un mécanisme de rechange. Les requêtes conditionnelles contenant des entêtes {{HTTPHeader("If-Modified-Since")}} ou {{HTTPHeader("If-Unmodified-Since")}} font usage de ce champ.

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
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Last-Modified: <nom-jour>, <jour> <mois> <année> <heure>:<minute>:<seconde> GMT

## Directives

- \<nom-jour>
  - : Un nom parmi "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ou "Sun" (sensible à la casse).
- \<jour>
  - : Jour sur 2 chiffres, par ex. "04" ou "23".
- \<mois>
  - : Un mois parmi "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (sensible à la casse).
- \<année>
  - : Millésime sur 4 chiffres, par ex. "1990" ou "2016".
- \<heure>
  - : Heure sur 2 chiffres, par ex. "09" ou "23".
- \<minute>
  - : Minute sur 2 chiffres, par ex. "04" ou "59".
- \<seconde>
  - : Seconde sur 2 chiffres, par ex. "04" ou "59".
- `GMT`
  - : Greenwich Mean Time. Les dates HTTP sont toujours exprimées en GMT, jamais en heure locale.

## Exemples

    Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT

## Spécifications

| Spécification                                        | Titre                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "Last-Modified", "2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibilité navigateurs

{{Compat("http.headers.Last-Modified")}}

## Voir aussi

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("Etag")}}
