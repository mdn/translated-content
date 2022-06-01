---
title: Authorization
slug: Web/HTTP/Headers/Authorization
tags:
  - HTTP
  - Reference
  - en-tête
  - requête
translation_of: Web/HTTP/Headers/Authorization
---
{{HTTPSidebar}}

L'en-tête de requête HTTP **`Authorization`** contient les identifiants permettant l'authentification d'un utilisateur auprès d'un serveur, habituellement après que le serveur ait répondu avec un statut {{HTTPStatus("401")}} `Unauthorized` et l'en-tête {{HTTPHeader("WWW-Authenticate")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Glossaire/Forbidden_header_name"
          >Nom d'en-tête interdit</a
        >
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Authorization: <type> <credentials>

## Directives

- _\<type>_

  - : [Le type d'authentification](/fr/docs/Web/HTTP/Authentication#Schéma_d'authentification). Le type [`"Basic"`](/en-US/docs/Web/HTTP/Authentication#Basic_authentication_scheme) est souvent utilisé. Pour connaître les autres types :

    - [IANA registry of Authentication schemes](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)

- _\<credentials>_

  - : Si c'est le type d'authentification `"Basic"` qui est utilisé, les identifiants sont construits de la manière suivante :

    - L'identifiant de l'utilisateur et le mot de passe sont combinés avec deux-points : (`aladdin:sesameOuvreToi`).
    - Cette chaîne de caractères est ensuite encodée en [base64](/fr/docs/Web/API/WindowBase64/Décoder_encoder_en_base64) (`YWxhZGRpbjpzZXNhbWVPdXZyZVRvaQ==`).

    > **Note :** L'encodage en Base64 n'est pas un chiffrement ou un hachage ! Cette méthode est aussi peu sûre que d'envoyer les identifiants en clair (l'encodage base64 est un encodage réversible). Il faudra privilégier HTTPS lorsqu'on emploie une authentification "basique".

## Exemples

    Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l

Voir aussi l'article [authentification HTTP](/fr/docs/Web/HTTP/Authentication) avec des exemples de configuration de serveurs Apache ou nginx pour protéger votre site grâce à un mot de passe et l'authentification HTTP basique.

## Spécifications

| Spécification                                        | Titre                                  |
| ---------------------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Authorization", "4.2")}} | HTTP/1.1 : Authentification            |
| {{RFC("7617")}}                                 | Schéma d'Authentification HTTP 'Basic' |

## Voir

- [L'authentification HTTP](/fr/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
