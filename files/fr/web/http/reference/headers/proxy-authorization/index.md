---
title: En-tête Proxy-Authorization
short-title: Proxy-Authorization
slug: Web/HTTP/Reference/Headers/Proxy-Authorization
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Proxy-Authorization`** contient les identifiants permettant d'authentifier un·e client·e auprès d'un serveur mandataire, généralement après que le serveur a répondu avec le statut {{HTTPStatus("407", "407 Proxy Authentication Required")}} et l'en-tête {{HTTPHeader("Proxy-Authenticate")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Proxy-Authorization: <auth-scheme> <credentials>
```

## Directives

- `<auth-scheme>`
  - : Un jeton insensible à la casse indiquant le [schéma d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#authentication_schemes) utilisé.
    Parmi les types les plus courants sont [`Basic`](/fr/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` et `AWS4-HMAC-SHA256`.
    L'IANA maintient une [liste des schémas d'authentification <sup>(angl.)</sup>](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), mais il existe d'autres schémas proposés par les services hôtes.
- `<credentials>`
  - : Identifiants utilisés pour le schéma d'authentification.
    En général, il faut consulter les spécifications pertinentes pour connaître le format.

> [!NOTE]
> Voir {{HTTPHeader("Authorization")}} pour plus de détails.

## Exemples

### Authentification `Basic`

En authentification `Basic`, les identifiants sont envoyés au format `<nom_utilisateur>:<mot_de_passe>` (par exemple, `aladdin:sesameouvretoi`).
La chaîne de caractères résultante est ensuite encodée en [base64](/fr/docs/Glossary/Base64) (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> L'encodage base64 est réversible et n'offre donc aucune sécurité cryptographique.
> Cette méthode peut être considérée comme équivalente à l'envoi des identifiants en clair.
> {{Glossary("HTTPS")}} est toujours recommandé lors de l'utilisation de l'authentification, mais il l'est encore plus lors de l'utilisation de l'authentification `Basic`.

### Authentification `Bearer` (jeton d'authentification)

```http
Proxy-Authorization: Bearer kNTktNTA1My00YzLT1234
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication)
- L'en-tête {{HTTPHeader("Proxy-Authenticate")}}
- L'en-tête {{HTTPHeader("WWW-Authenticate")}}
- L'en-tête {{HTTPHeader("Authorization")}}
- Le code de statut {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
