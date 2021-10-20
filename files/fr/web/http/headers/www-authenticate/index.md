---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
translation_of: Web/HTTP/Headers/WWW-Authenticate
---
{{HTTPSidebar}}
L'entête HTTP de réponse **`WWW-Authenticate`** définit la méthode d'authentification qui doit être utilisé pour obtenir l'accès à une ressource.

L'entête `WWW-Authenticate` est envoyée en même temps qu'une réponse {{HTTPStatus("401")}} `Unauthorized`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type de l'entête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    WWW-Authenticate: <type> realm=<realm>

## Directives

- \<type>
  - : [Type d'authentification](/en-US/docs/Web/HTTP/Authentication#Authentication_schemes). Un type commun est ["Basic"](/en-US/docs/Web/HTTP/Authentication#Basic_authentication_scheme). IANA maintient une [liste des schémas d'authentification](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- realm=\<realm>
  - : Une description de la zone protégée. Si aucun domaine n'est spécifié, les clients affichent souvent un nom de domaine formaté à la place.
- charset=\<charset>
  - : Indique au client le schéma d'encodage préféré du serveur lorsqu'on soumet un nom d'utilisateur et un mot de passe. La seule valeur acceptée est la chaine insensible à la casse "UTF-8". Cela ne s'applique pas à l'encodage de la chaine du domaine.

## Exemples

La réponse d'un serveur contient généralement l'entête `WWW-Authenticate` qui ressemble à ça :

    WWW-Authenticate: Basic

    WWW-Authenticate: Basic realm="Accès au site de staging", charset="UTF-8"

Voir aussi [HTTP authentication](/en-US/docs/Web/HTTP/Authentication) pour des exemples sur la configuration des serveurs Apache ou nginx pour protéger protéger votre site par mot de passe en utilisant l'authentification HTTP basic.

## Spécifications

| Spécification                                            | Titre                                  |
| -------------------------------------------------------- | -------------------------------------- |
| {{RFC("7235", "WWW-Authenticate", "4.1")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                                     | The 'Basic' HTTP Authentication Scheme |

## Voir aussi

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
