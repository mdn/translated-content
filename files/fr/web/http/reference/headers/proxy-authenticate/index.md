---
title: En-tête Proxy-Authenticate
short-title: Proxy-Authenticate
slug: Web/HTTP/Reference/Headers/Proxy-Authenticate
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Proxy-Authenticate`** définit la méthode [d'authentification](/fr/docs/Web/HTTP/Guides/Authentication) (ou {{Glossary("Challenge", "challenge")}}) à utiliser pour accéder à une ressource derrière un {{Glossary("proxy server", "serveur mandataire")}}.
Il est envoyé dans une réponse {{HTTPStatus("407", "407 Proxy Authentication Required")}} afin que le·la client·e puisse s'identifier auprès d'un mandataire qui requiert une authentification.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Proxy-Authenticate: <challenge>, …
```

La valeur est une liste de challenges séparés par des virgules, où un `<challenge>` est composé d'un `<auth-scheme>`, suivi éventuellement d'un `<token68>` ou d'une liste séparée par des virgules de `<auth-params>`&nbsp;:

```plain
challenge = <auth-scheme> <auth-param>, …, <auth-paramN>
challenge = <auth-scheme> <token68>
```

Par exemple&nbsp;:

```http
Proxy-Authenticate: <auth-scheme>
Proxy-Authenticate: <auth-scheme> token68
Proxy-Authenticate: <auth-scheme> auth-param1=param-token1
Proxy-Authenticate: <auth-scheme> auth-param1=param-token1, …, auth-paramN=param-tokenN
```

La présence d'un `token68` ou de paramètres d'authentification dépend du `<auth-scheme>` sélectionné.
Par exemple, [l'authentification Basic](/fr/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) requiert un `<realm>`, et permet l'utilisation optionnelle de la clé `charset`, mais ne prend pas en charge un `token68`&nbsp;:

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## Directives

- `<auth-scheme>`
  - : Un jeton insensible à la casse indiquant le [schéma d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#authentication_schemes) utilisé.
    Parmi les types les plus courants sont [`Basic`](/fr/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` et `AWS4-HMAC-SHA256`.
    L'IANA maintient une [liste des schémas d'authentification <sup>(angl.)</sup>](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), mais il existe d'autres schémas proposés par les services hôtes.
- `<auth-param>` {{Optional_Inline}}
  - : Un paramètre d'authentification dont le format dépend du `<auth-scheme>`.
    `<realm>` est décrit ci-dessous car c'est un paramètre courant parmi de nombreux schémas d'authentification.
    - `<realm>` {{Optional_Inline}}
      - : La chaîne de caractères «&nbsp;domaine&nbsp;» (`realm`) suivie de `=` et d'une chaîne de caractères entre guillemets décrivant une zone protégée, par exemple `realm="staging environment"`.
        Un domaine permet à un serveur de partitionner les zones qu'il protège (si le schéma le permet).
        Certain·e·s client·e·s affichent cette valeur à l'utilisateur·ice pour l'informer des identifiants requis — la plupart des navigateurs ont cessé de le faire pour contrer l'hameçonnage.
        Le seul jeu de caractères pris en charge de façon fiable pour cette valeur est `us-ascii`.
        Si aucun domaine n'est défini, les client·e·s affichent souvent un nom d'hôte formaté à la place.
- `<token68>` {{Optional_Inline}}
  - : Un jeton qui peut être utile pour certains schémas.
    Le jeton autorise les 66 caractères URI non réservés plus quelques autres.
    Il peut contenir une {{Glossary("base64")}}, base64url, base32 ou base16 (hexadécimal), avec ou sans remplissage, mais sans espaces.
    L'alternative `token68` aux listes de paramètres d'authentification est prise en charge pour la compatibilité avec les anciens schémas d'authentification.

Generally, you will need to check the relevant specifications for the authentication parameters needed for each `<auth-scheme>`.

> [!NOTE]
> See {{HTTPHeader("WWW-Authenticate")}} for more details on authentication parameters.

## Exemples

### Authentification `Basic` avec `Proxy-Authenticate`

La réponse suivante indique qu'un schéma d'authentification Basic est requis avec un domaine&nbsp;:

```http
Proxy-Authenticate: Basic realm="Staging server"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("WWW-Authenticate")}}
- [Authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication)
- Les en-têtes {{HTTPHeader("Authorization")}}, {{HTTPHeader("Proxy-Authorization")}}
- Les codes de statut {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
