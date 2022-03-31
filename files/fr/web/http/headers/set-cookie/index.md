---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
tags:
  - Cookies
  - HTTP
  - Reference
  - Response
  - header
  - samesite
translation_of: Web/HTTP/Headers/Set-Cookie
---
{{HTTPSidebar}}

L'en-tête de réponse HTTP **`Set-Cookie`** est utilisé pour envoyer un cookie depuis le serveur à l'agent utilisateur afin qu'il puisse le renvoyer dans l'avenir. Pour envoyer plusieurs cookies, on enverra plusieurs en-têtes `Set-Cookie` dans la même réponse.

> **Attention :** Les navigateurs empêchent le code JavaScript _front-end_ d'accéder à l'en-tête `Set-Cookie`, comme l'exige la spécification Fetch, qui définit `Set-Cookie` comme un [nom d'en-tête de réponse interdit](https://fetch.spec.whatwg.org/#forbidden-response-header-name) qui [doit être filtré](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) de toute réponse exposée au code _front-end_.

Pour plus d'information, voir le [guide sur les cookies HTTP](/fr/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        <a href="/fr/docs/Glossary/Response_header">En-tête de réponse</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Glossary/Forbidden_header_name"
          >Nom d'en-tête interdit</a
        >
      </th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="https://fetch.spec.whatwg.org/#forbidden-response-header-name"
          >Nom d'en-tête de réponse interdit</a
        >
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Set-Cookie: <cookie-name>=<cookie-value>
    Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
    Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
    Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
    Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
    Set-Cookie: <cookie-name>=<cookie-value>; Secure
    Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

    Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
    Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
    Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None

    // L'usage d'attributs multiples est également possible, par exemple :
    Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly

## Attributs

- `<cookie-name>=<cookie-value>`

  - : Un cookie commence par une paire nom-valeur:

    - Le nom porté par `<cookie-name>` peut-être composé de n'importe quels caractères ASCII, à l'exception des caractères de contrôle, d'espace, de tabulation et des caractères de séparation suivants : `( ) < > @ , ; : \ " / [ ] ? = { }`.
    - La valeur, `<cookie-value>`, peut éventuellement être entourée de guillemets doubles et peut être composée de n'importe quel caractère ASCII à l'exception des caractères de contrôle, des blancs, des guillemets doubles, d'une virgule, d'un point-virgule ou d'une barre oblique inversée (_backslash_). **Encodage** : de nombreuses implémentations encodent les caractères d'URL (_URL-encoding_) bien que ce ne soit pas nécessaire selon la RFC. Une telle transformation facilite tout de même l'utilisation de caractères autorisés.
    - Le préfixe **`__Secure-`** : les cookies commençant par `__Secure-` (le tiret fait partie du préfixe) doivent être définis avec le drapeau `secure` depuis une page sécurisée (HTTPS).
    - Le préfixe **`__Host-`** : Les cookies commençant par `__Host-` doivent être définis avec le drapeau `secure`, depuis une page sécurisée (HTTPS), ne doivent pas avoir de domaine spécifié (et donc pas envoyé à un sous-domaine) et le chemin doit être `/`.

- `Expires=<date>` {{optional_inline}}

  - : Le temps de vie maximal d'un cookie sous la forme d'une date HTTP. Voir [`Date`](/fr/docs/Web/HTTP/Headers/Date) pour le format requis.

    Si non spécifié, le cookie devient un **cookie de session**. Une session finit quand le client s'arrête, les cookies de sessions sont alors supprimés à ce moment.

    > **Attention :** Plusieurs navigateurs ont un système de récupération de session qui enregistre les onglets et les restaure quand le navigateur redémarre. Les cookies de session seront aussi restaurés comme si le navigateur ne s'était jamais arrêté.

    Quand une telle date de péremption est indiquée, elle est relative au _client_ et pas au serveur.

- `Max-Age=<number>` {{optional_inline}}
  - : Le nombre de secondes avant son expiration. Une valeur nulle ou négative fera expirer immédiatement le cookie. Si `Expires` et `Max-Age` sont configurés, `Max-Age` sera prioritaire.
- `Domain=<domain-value>` {{optional_inline}}

  - : Le domaine où le cookie sera envoyé.

    - Si omis, la valeur par défaut sera l'hôte de l'URL du document courant. Les sous-domaines ne seront pas inclus.
    - Contrairement aux anciennes spécifications, le point au début dans les noms de domaines (`.example.com`) est ignoré.
    - Plusieurs valeurs de domaine ne sont pas permises. Si un nom de domaine est spécifié, les sous domaines sont toujours inclus.

- `Path=<path-value>` {{optional_inline}}
  - : Un chemin qui doit exister dans l'URL de la requête ou le navigateur n'enverra pas d'en-tête `Cookie` correspondante par la suite. La barre oblique (`/`) est interprétée comme un séparateur de répertoire. Les sous-répertoires sont inclus, par exemple: pour `Path=/docs` les répertoires `/docs`, `/docs/Web/` et `/docs/Web/HTTP` sont concernés.
- `Secure` {{optional_inline}}

  - : Un cookie sécurisé est envoyé uniquement si la requête est faite en `https:` (sauf pour _localhost_). Cependant des informations confidentielles ne devraient jamais être enregistrées dans un cookie classique, en effet le mécanique est non sécurisé et ne chiffre aucune information.

    > **Note :** Les sites non sécurisés (`http:`) ne peuvent plus définir des cookies `Secure` désormais (depuis Chrome 52+ et Firefox 52+). Depuis Firefox 75, cette restriction ne s'applique pas pour _localhost_.

- `HttpOnly` {{optional_inline}}
  - : Empêche JavaScript d'accéder au cookie; par exemple, au travers de la propriété [`Document.cookie`](/fr/docs/Web/API/Document/cookie), de l'API [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) ou de l'API [`Request`](/fr/docs/Web/API/Request). Cela protège des attaques _cross-site scripting_ ([XSS](/fr/docs/Glossary/XSS)).
- `SameSite=<samesite-value>` {{optional_inline}}

  - : Contrôle si un cookie est envoyé avec les requêtes d'origine croisée, offrant ainsi une certaine protection contre les attaques de falsification de requêtes inter-sites ([CSRF](/fr/docs/Glossary/CSRF)).

    > **Note :** Les normes relatives aux [Cookies SameSite](/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite) ont récemment changé de telle sorte que :
    >
    > 1.  Le comportement d'envoi des cookies si `SameSite` n'est pas spécifié est `SameSite=Lax`. Auparavant, le comportement par défaut était que les cookies étaient envoyés pour toutes les requêtes.
    > 2.  Les cookies avec `SameSite=None` doivent désormais également spécifier l'attribut `Secure` (c'est-à-dire qu'ils nécessitent un contexte sécurisé).
    >
    > Les options ci-dessous couvrent le nouveau comportement. Voir le tableau [Compatibilité des navigateurs](/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite#browser_compatibility) pour des informations sur la mise en œuvre spécifique des navigateurs (lignes : « `SameSite` : Defaults to `Lax` » et « `SameSite` : Secure context required »).

    Les options sont :

    - `Strict` : le navigateur envoie le cookie uniquement pour les demandes provenant du même site (c'est-à-dire les demandes provenant du même site qui a défini le cookie). Si la demande provient d'une URL différente de l'URL actuelle, aucun cookie avec l'attribut `SameSite=Strict` n'est envoyé.
    - `Lax` : Le cookie n'est pas envoyé sur les requêtes inter-sites, telles que les appels pour charger des images ou des _iframes_, mais il est envoyé lorsqu'un utilisateur navigue vers le site d'origine à partir d'un site externe (par exemple, s'il suit un lien). C'est le comportement par défaut si l'attribut `SameSite` n'est pas spécifié.
    - `None` : Le navigateur envoie le cookie avec les requêtes inter-sites et les requêtes sur un même site. L'attribut `Secure` doit également être défini lorsque `SameSite=None` !

## Exemples

### Cookie de session

**Les cookies de session** sont supprimés quand le client s'éteint. Les cookies sont des cookies de session s'ils n'ont pas de directive `Expires` ou `Max-Age`.

    Set-Cookie: sessionId=38afes7a8

### Cookie permanent

Au lieu d'expirer lorsque le client est fermé, les **cookies permanents** expirent à une date spécifique (`Expires`) ou après une valeur de temps (`Max-Age`).

    Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT

<!---->

    Set-Cookie: id=a3fWa; Max-Age=2592000

### Domaines invalides

Un cookie pour un domaine qui n'inclut pas le serveur qui le définit [doit être rejeté par l'agent utilisateur](https://tools.ietf.org/html/rfc6265#section-4.1.2.3).

Le cookie suivant sera rejeté si le serveur est hébergé sur `originalcompany.com`:

    Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk

Un cookie pour un sous-domaine du domaine servi sera rejeté.

Le cookie suivant sera rejeté si le serveur est hébergé sur `example.com`:

    Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com

### Préfixes de cookie

Les cookies préfixés par `__Secure-` ou `__Host-` peuvent être utilisés seulement s'ils sont définis avec l'attribut `secure` depuis une origine sécurisée (HTTPS).

De plus, les cookies avec le préfixe `__Host-` doivent avoir un `path` qui vaut `/` (donc tous les chemins de l'hôte) et ne doivent pas avoir d'attribut `Domain`.

> **Attention :** Pour les clients qui n'implémentent pas les préfixes de cookies, vous ne pouvez pas compter sur ces contraintes, les cookies avec un préfixe seront toujours acceptés.

    // Les deux sont acceptés s'ils viennent d'une origine sécurisée (HTTPS)
    Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
    Set-Cookie: __Host-ID=123; Secure; Path=/

    // Rejeté car l'attribut Secure est manquant
    Set-Cookie: __Secure-id=1

    // Rejeté car l'attribut Path=/ est manquant
    Set-Cookie: __Host-id=1; Secure

    // Rejeté à cause du domaine qui est spécifié
    Set-Cookie: __Host-id=1; Secure; Path=/; domain=example.com

## Spécifications

| Spécification                                                                                    | Titre                                                         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("6265", "Set-Cookie", "4.1")}}                                                 | HTTP State Management Mechanism                               |
| [draft-ietf-httpbis-rfc6265bis-05](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-05) | Cookie Prefixes, Same-Site Cookies, and Strict Secure Cookies |

## Compatibilité des navigateurs

{{Compat("http.headers.Set-Cookie", 5)}}

## Note de compatibilité

- À partir de Chrome 52 et Firefox 52, les sites non sécurisés (`http:`) ne peuvent plus définir des cookies avec la directive `Secure`.

## Voir aussi

- [Cookies HTTP](/fr/docs/Web/HTTP/Cookies)
- [`Cookie`](/fr/docs/Web/HTTP/Headers/Cookie)
- [`Document.cookie`](/fr/docs/Web/API/Document/cookie)
- [Cookies SameSite](/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
