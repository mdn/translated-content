---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
tags:
  - HTTP
  - Reference
translation_of: Web/HTTP/Headers/If-Modified-Since
---
{{HTTPSidebar}}

L'entête de requête HTTP **`If-Modified-Since`** rend la requête conditionnelle : le serveur renverra la ressource demandée, avec un status {{HTTPStatus("200")}}, seulement si elle a été modifiée pour la dernière fois après la date donnée. Si la ressource n'a pas été modifiée depuis, la réponse sera un {{HTTPStatus("304")}} sans aucun contenu; le header {{HTTPHeader("Last-Modified")}} contiendra la date de la dernière modification. À l'inverse de {{HTTPHeader("If-Unmodified-Since")}}, `If-Modified-Since` ne peut être utilisé qu'avec un {{HTTPMethod("GET")}} ou un {{HTTPMethod("HEAD")}}.

Lorsqu'il est combiné avec {{HTTPHeader("If-None-Match")}}, il est ignoré, à moins que le serveur ne supporte pas `If-None-Match`.

Le cas d'usage le plus courant est la mise-à-jour d'une entité cachée qui n'a pas de {{HTTPHeader("ETag")}} associé.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'entête</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    If-Modified-Since: <label-jour>, <jour> <mois> <année> <heure>:<minute>:<seconde> GMT

## Directives

- \<label-jour>
  - : Parmis : "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ou "Sun" (sensible à la casse).
- \<jour>
  - : 2 chiffres du numéro du jour, par ex. "04" or "23".
- \<mois>
  - : Parmis : "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (sensible à la casse).
- \<année>
  - : 4 chiffres de l'année, par ex. "1990" ou "2016".
- \<heure>
  - : 2 chiffres du numéro de l'heure, par ex. "09" ou "23".
- \<minute>
  - : 2 chiffres des minutes, par ex. "04" or "59".
- \<seconde>
  - : 2 chiffres des secondes, par ex. "04" or "59".
- `GMT`
  - : _Greenwich Mean Time_. Les dates HTTP sont toujours exprimées en GMT, jamais en temps localisé.

## Exemples

    If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT

## Specifications

| Specification                                            | Titre                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-Modified-Since", "3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibility avec les navigateurs

{{Compat("http.headers.If-Modified-Since")}}

## À voir aussi

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
