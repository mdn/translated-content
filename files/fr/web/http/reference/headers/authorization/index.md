---
title: Authorization
slug: Web/HTTP/Reference/Headers/Authorization
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Authorization`** permet de fournir des informations d'identification afin d'authentifier un agent utilisateur auprès d'un serveur, donnant ainsi accès à des ressources protégées.

L'en-tête `Authorization` est généralement, mais pas toujours, envoyé après qu'un agent utilisateur a tenté d'accéder à une ressource protégée sans fournir d'identifiants.
Le serveur répond alors par un message {{HTTPStatus("401", "401 Unauthorized")}} contenant au moins un en-tête {{HTTPHeader("WWW-Authenticate")}}.
Cet en-tête indique les schémas d'authentification utilisables pour accéder à la ressource ainsi que toute information supplémentaire nécessaire au client pour les utiliser.
L'agent utilisateur doit choisir le schéma d'authentification le plus sécurisé qu'il prend en charge parmi ceux proposés, demander les identifiants à l'utilisateur·ice, puis refaire la requête avec les identifiants encodés dans l'en-tête `Authorization`.

Cet en-tête est supprimé lors des redirections inter-origines.

> [!NOTE]
> Cet en-tête fait partie du [cadre général d'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication#la_structure_dauthentification_http).
> Il peut être utilisé avec différents [schémas d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#schéma_dauthentification).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "Nom d'en-tête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Authorization: <auth-scheme> <authorization-parameters>

// Authentication avec Basic
Authorization: Basic <credentials>

// Authentication avec Digest
Authorization: Digest username=<username>,
    realm="<realm>",
    uri="<url>",
    algorithm=<algorithm>,
    nonce="<nonce>",
    nc=<nc>,
    cnonce="<cnonce>",
    qop=<qop>,
    response="<response>",
    opaque="<opaque>"
```

## Directives

- `<auth-scheme>`
  - : Le [schéma d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#schéma_dauthentification) qui définit la façon dont les identifiants sont encodés.
    Les types les plus courants (insensibles à la casse) sont&nbsp;: [`Basic`](/fr/docs/Web/HTTP/Guides/Authentication#schéma_dauthentification_basique), `Digest`, `Negotiate` et `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Pour plus d'informations ou d'options, voir [Authentification HTTP&nbsp;: schémas d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#schéma_dauthentification)

À l'exception de `<auth-scheme>`, les autres directives sont propres à chaque [schéma d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#schéma_dauthentification).
En général, il faudra consulter la spécification correspondante (certaines clés pour un sous-ensemble de schémas sont listées ci-dessous).

### Authentification avec `Basic`

- `<credentials>`
  - : Les identifiants, encodés selon le schéma défini.

    > [!NOTE]
    > Pour plus d'informations sur l'algorithme d'encodage, voir les exemples ci-dessous, dans {{HTTPHeader("WWW-Authenticate")}}, dans [Authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication) et dans la spécification correspondante.

### Authentification avec `Digest`

- `<response>`
  - : Une chaîne de chiffres hexadécimaux qui prouve que l'utilisateur·ice connaît le mot de passe.
    L'algorithme encode le nom d'utilisateur·ice, le mot de passe, le realm, le cnonce, le qop, le nc, etc.
    Voir la spécification pour plus de détails.
- `username`
  - : Une chaîne de caractères entre guillemets contenant le nom de l'utilisateur·ice pour le `realm` défini, en texte brut ou sous forme de hachage hexadécimal.
    Si le nom contient des caractères non autorisés dans le champ, on peut utiliser `username*` à la place (et non en plus).
- `username*`
  - : Le nom de l'utilisateur·ice formaté selon la notation étendue définie dans la RFC5987.
    À utiliser uniquement si le nom ne peut pas être encodé dans `username` et si `userhash` vaut `"false"`.
- `uri`
  - : L'_URI de requête effective_. Voir la spécification pour plus d'informations.
- `realm`
  - : Domaine du nom d'utilisateur·ice/mot de passe demandé (doit correspondre à la valeur dans la réponse {{HTTPHeader("WWW-Authenticate")}} pour la ressource demandée).
- `opaque`
  - : La valeur dans la réponse {{HTTPHeader("WWW-Authenticate")}} pour la ressource demandée.
- `algorithm`
  - : L'algorithme utilisé pour calculer le digest. Doit être un algorithme supporté indiqué dans la réponse {{HTTPHeader("WWW-Authenticate")}} pour la ressource demandée.
- `qop`
  - : Un jeton indiquant le _niveau de protection_ appliqué au message.
    Doit correspondre à l'une des valeurs indiquées dans la réponse {{HTTPHeader("WWW-Authenticate")}} pour la ressource demandée.
    - `"auth"`&nbsp;: Authentification
    - `"auth-int"`&nbsp;: Authentification avec protection d'intégrité
- `cnonce`
  - : Une chaîne de caractères ({{Glossary("ASCII")}} uniquement) fournie par le client.
    Utilisée par le client et le serveur pour fournir une authentification mutuelle, garantir l'intégrité de certains messages et éviter les attaques par texte choisi.
    Voir la spécification pour plus d'informations.
- `nc`
  - : Compteur de nonce. Nombre hexadécimal de requêtes dans lesquelles le client a envoyé la valeur `cnonce` courante (y compris la requête actuelle).
    Le serveur peut utiliser des valeurs `nc` dupliquées pour détecter les tentatives de rejeu.
- `userhash` {{Optional_Inline}}
  - : `"true"` si le nom d'utilisateur·ice a été haché. `"false"` par défaut.

## Exemples

### Authentification simple avec `Basic`

Pour l'authentification `Basic`, les identifiants sont construits en combinant d'abord le nom d'utilisateur·ice et le mot de passe avec un deux-points (par exemple, `aladdin:opensesame`), puis en encodant la chaîne de caractères résultante en [`base64`](/fr/docs/Glossary/Base64) (par exemple, `YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Un encodage {{Glossary("Base64")}} peut facilement être inversé pour obtenir le nom et le mot de passe d'origine, donc l'authentification `Basic` n'offre aucune sécurité cryptographique.
> {{Glossary("HTTPS")}} est toujours recommandé lors de l'utilisation d'une authentification, mais c'est encore plus important avec l'authentification `Basic`.

Voir aussi l'article [authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication) pour des exemples de configuration de serveurs Apache ou Nginx afin de protéger votre site par mot de passe avec l'authentification HTTP basique.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir

- [L'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication)
- L'en-tête HTTP {{HTTPHeader("WWW-Authenticate")}}
- L'en-tête HTTP {{HTTPHeader("Proxy-Authorization")}}
- L'en-tête HTTP {{HTTPHeader("Proxy-Authenticate")}}
- Les status HTTP {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
