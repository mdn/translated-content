---
title: En-tête WWW-Authenticate
short-title: WWW-Authenticate
slug: Web/HTTP/Reference/Headers/WWW-Authenticate
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`WWW-Authenticate`** avertit le client des méthodes [d'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication) qui peuvent être utilisées pour obtenir l'accès à une ressource spécifique (ou {{Glossary("challenge", "défi")}}).

Cet en-tête fait partie du [cadriciel général d'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication#cadriciel_général_dauthentification_http), qui peut être utilisé avec un certain nombre de [schémas d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#schémas_dauthentification).
Chaque défi identifie un schéma pris en charge par le serveur et des paramètres supplémentaires définis pour ce type de schéma.

Un serveur utilisant [l'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication) répond avec une réponse {{HTTPStatus("401", "401 Unauthorized")}} à une requête pour une ressource protégée.
Cette réponse doit inclure au moins un en-tête `WWW-Authenticate` et au moins un défi pour indiquer quels schémas d'authentification peuvent être utilisés pour accéder à la ressource et toutes les données supplémentaires dont chaque schéma particulier a besoin.

Plusieurs défis sont autorisés dans un en-tête `WWW-Authenticate`, et plusieurs en-têtes `WWW-Authenticate` sont autorisés dans une réponse.
Un serveur peut également inclure l'en-tête `WWW-Authenticate` dans d'autres messages de réponse pour indiquer que la fourniture d'identifiants peut affecter la réponse.

Après avoir reçu l'en-tête `WWW-Authenticate`, un client invite généralement l'utilisateur·ice à fournir des identifiants, puis redemande la ressource.
Cette nouvelle requête utilise l'en-tête {{HTTPHeader("Authorization")}} pour fournir les identifiants au serveur, encodés de manière appropriée pour la méthode d'authentification sélectionnée.
Le client est censé sélectionner le défi le plus sécurisé qu'il comprend (notez que dans certains cas, la méthode «&nbsp;la plus sécurisée&nbsp;» est discutable).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type de l'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
WWW-Authenticate: <challenge>
```

Où un `<challenge>` est composé d'un `<auth-scheme>`, suivi d'un `<token68>` optionnel ou d'une liste séparée par des virgules de `<auth-params>`&nbsp;:

```plain
challenge = <auth-scheme> <auth-param>, …, <auth-paramN>
challenge = <auth-scheme> <token68>
```

Par exemple&nbsp;:

```http
WWW-Authenticate: <auth-scheme>
WWW-Authenticate: <auth-scheme> token68
WWW-Authenticate: <auth-scheme> auth-param1=param-token1
WWW-Authenticate: <auth-scheme> auth-param1=param-token1, …, auth-paramN=param-tokenN
```

La présence d'un `token68` ou de paramètres d'authentification dépend du `<auth-scheme>` sélectionné.
Par exemple, [l'authentification de base](/fr/docs/Web/HTTP/Guides/Authentication#schéma_dauthentification_de_base) nécessite un `<realm>` et autorise l'utilisation facultative de la clé `charset`, mais ne prend pas en charge le `token68`&nbsp;:

```http
WWW-Authenticate: Basic realm="Dev", charset="UTF-8"
```

Plusieurs défis peuvent être envoyés dans une liste séparée par des virgules

```http
WWW-Authenticate: <challenge>, …, <challengeN>
```

Plusieurs en-têtes peuvent également être envoyés dans une seule réponse&nbsp;:

```http
WWW-Authenticate: <challenge>
WWW-Authenticate: <challengeN>
```

## Directives

- `<auth-scheme>`
  - : Un jeton insensible à la casse indiquant le [schéma d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#schémas_dauthentification) utilisé.
    Certains des types les plus courants sont [`Basic`](/fr/docs/Web/HTTP/Guides/Authentication#schéma_dauthentification_de_base), `Digest`, `Negotiate` et `AWS4-HMAC-SHA256`.
    L'IANA maintient une [liste des schémas d'authentification <sup>(angl.)</sup>](https://www.iana.org/assignments/http-authschemes), mais il existe d'autres schémas proposés par les services d'hébergement.
- `<auth-param>` {{Optional_Inline}}
  - : Un paramètre d'authentification dont le format dépend du `<auth-scheme>`.
    `<realm>` est décrit ci-dessous, car c'est un paramètre d'authentification courant parmi de nombreux schémas d'authentification.
    - `<realm>` {{Optional_Inline}}
      - : La chaîne de caractères `realm` suivie de `=` et d'une chaîne de caractères entre guillemets décrivant une zone protégée, par exemple `realm="staging environment"`.
        Un royaume permet à un serveur de partitionner les zones qu'il protège (si cela est pris en charge par un schéma qui permet un tel partitionnement).
        Certains clients affichent cette valeur à l'utilisateur·ice pour l'informer des informations d'identification particulières requises — bien que la plupart des navigateurs aient cessé de le faire pour lutter contre le hameçonnage.
        Le seul jeu de caractères pris en charge de manière fiable pour cette valeur est `us-ascii`.
        Si aucun royaume n'est défini, les clients affichent souvent un nom d'hôte formaté à la place.
- `<token68>` {{Optional_Inline}}
  - : Un jeton qui peut être utile pour certains schémas.
    Le jeton permet les 66 caractères URI non réservés plus quelques autres.
    Il peut contenir un encodage {{Glossary("base64")}}, base64url, base32 ou base16 (hexadécimal), avec ou sans remplissage, mais en excluant les espaces blancs.
    L'alternative token68 aux listes de paramètres d'authentification est prise en charge pour des raisons de cohérence avec les schémas d'authentification hérités.

Généralement, vous devez vérifier les spécifications pertinentes pour les paramètres d'authentification nécessaires pour chaque `<auth-scheme>`.
Les sections suivantes décrivent les jetons et les paramètres d'authentification pour certains schémas d'authentification courants.

### Directives d'authentification de base

- `<realm>`
  - : Un `<realm>` comme [décrit ci-dessus](#realm).
    Notez que le royaume est obligatoire pour l'authentification `Basic`.
- `charset="UTF-8"` {{Optional_Inline}}
  - : Indique au client le schéma de codage préféré du serveur lors de l'envoi d'un nom d'utilisateur·ice et d'un mot de passe.
    La seule valeur autorisée est la chaîne de caractères insensible à la casse `UTF-8`.
    Cela ne concerne pas le codage de la chaîne de caractères du royaume.

### Directives d'authentification `Digest`

- `<realm>` {{Optional_Inline}}
  - : Un `<realm>` comme [décrit ci-dessus](#realm) indiquant quel nom d'utilisateur·ice/mot de passe utiliser.
    Il doit inclure au minimum le nom d'hôte, mais peut indiquer les utilisateur·ice·s ou le groupe ayant accès.
- `domain` {{Optional_Inline}}
  - : Une liste citée, séparée par des espaces, de préfixes URI qui définissent tous les emplacements où les informations d'authentification peuvent être utilisées.
    Si cette clé n'est pas définie, les informations d'authentification peuvent être utilisées n'importe où sur la racine du web.
- `nonce`
  - : Une chaîne de caractères citée définie par le serveur que celui-ci peut utiliser pour contrôler la durée pendant laquelle des informations d'identification particulières sont considérées comme valides.
    Cela doit être généré de manière unique à chaque fois qu'une réponse 401 est émise, et peut être régénéré plus souvent (par exemple, permettant à un digest d'être utilisé une seule fois).
    La spécification contient des conseils sur les algorithmes possibles pour générer cette valeur.
    La valeur {{Glossary("Nonce", "du nombre unique")}} est opaque pour le client.
- `opaque`
  - : Une chaîne de caractères citée définie par le serveur qui doit être retournée telle quelle dans l'en-tête {{HTTPHeader("Authorization")}}.
    Cela est opaque pour le client. Il est recommandé au serveur d'inclure des données en Base64 ou hexadécimales.
- `stale` {{Optional_Inline}}
  - : Un indicateur insensible à la casse indiquant que la requête précédente du client a été rejetée parce que le `nonce` utilisé est trop ancien (périmé).
    Si cette valeur est `true`, la requête peut être réessayée en utilisant le même nom d'utilisateur·ice/mot de passe chiffré avec le nouveau `nonce`.
    Si c'est une autre valeur, alors le nom d'utilisateur·ice/mot de passe est invalide et doit être redemandé à l'utilisateur·ice.
- `algorithm` {{Optional_Inline}}
  - : Une chaîne de caractères indiquant l'algorithme utilisé pour générer un condensé.
    Les valeurs hors session valides sont&nbsp;: `MD5` (valeur par défaut si `algorithm` n'est pas définit), `SHA-256`, `SHA-512`.
    Les valeurs de session valides sont&nbsp;: `MD5-sess`, `SHA-256-sess`, `SHA-512-sess`.
- `qop`
  - : Une chaîne de caractères entre guillemets indiquant le niveau de protection pris en charge par le serveur. Ce paramètre est obligatoire et les options non reconnues doivent être ignorées.
    - `"auth"`&nbsp;: Authentification
    - `"auth-int"`&nbsp;: Authentification avec protection de l'intégrité
- `charset="UTF-8"` {{Optional_Inline}}
  - : Indique au client le schéma de codage préféré par le serveur lors de l'envoi d'un nom d'utilisateur·ice et d'un mot de passe.
    La seule valeur autorisée est la chaîne de caractères insensible à la casse «&nbsp;UTF-8&nbsp;».
- `userhash` {{Optional_Inline}}
  - : Un serveur peut définir `"true"` pour indiquer qu'il prend en charge le hachage des noms d'utilisateur·ice (la valeur par défaut est `"false"`)

### Authentification HTTP liée à l'origine (HOBA)

- `<challenge>`
  - : Un ensemble de paires au format `<len>:<value>` concaténées ensemble pour être donné à un client.
    Le défi est composé d'un nombre unique, d'un algorithme, d'une origine, d'un royaume, d'un identifiant de clé et du défi.
- `<max-age>`
  - : Le nombre de secondes à partir du moment où la réponse HTTP est émise pendant lesquelles les réponses à ce défi peuvent être acceptées.
- `<realm>` {{Optional_Inline}}
  - : Comme indiqué ci-dessus dans la section [directives](#directives).

## Exemples

### Émettre plusieurs défis d'authentification

Plusieurs défis peuvent être définis dans un seul en-tête de réponse&nbsp;:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1, …, challengeN
```

Vous pouvez envoyer plusieurs défis dans des en-têtes `WWW-Authenticate` distincts d'une même réponse&nbsp;:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: challenge1
WWW-Authenticate: challengeN
```

### Authentification de base

Un serveur qui prend uniquement en charge l'authentification de base peut avoir un en-tête de réponse `WWW-Authenticate` qui ressemble à ceci&nbsp;:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Staging server", charset="UTF-8"
```

Un agent utilisateur qui reçoit cet en-tête invite d'abord l'utilisateur·ice à saisir son nom d'utilisateur·ice et son mot de passe, puis demande de nouveau la ressource avec les identifiants encodés dans l'en-tête `Authorization`.
L'en-tête `Authorization` peut ressembler à ceci&nbsp;:

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Pour l'authentification `Basic`, les identifiants sont construits en associant d'abord le nom d'utilisateur·ice et le mot de passe avec deux-points (`aladdin:opensesame`), puis en encodant le texte obtenu en {{Glossary("base64")}} (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> [!NOTE]
> Consultez également [l'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication) pour savoir comment configurer les serveurs Apache ou Nginx afin de protéger votre site par mot de passe avec l'authentification HTTP de base.

### Authentification `Digest` avec SHA-256 et MD5

> [!NOTE]
> Cet exemple provient de {{RFC("7616")}} «&nbsp;Authentification d'accès HTTP `Digest`&nbsp;» (d'autres exemples de la spécification montrent l'utilisation de `SHA-512`, `charset` et `userhash`).

Le client tente d'accéder au document à l'URI `http://www.example.org/dir/index.html`, protégé par l'authentification `Digest`.
Le nom d'utilisateur·ice de ce document est «&nbsp;Mufasa&nbsp;» et le mot de passe est «&nbsp;Circle of Life&nbsp;» (notez l'espace unique entre les mots).

Lors de la première requête du client pour le document, aucun champ d'en-tête {{HTTPHeader("Authorization")}} n'est envoyé.
Le serveur répond alors avec un message HTTP 401 qui inclut un défi pour chaque algorithme `Digest` pris en charge, selon son ordre de préférence (`SHA256` puis `MD5`).

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Digest
    realm="http-auth@example.org",
    qop="auth, auth-int",
    algorithm=SHA-256,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
WWW-Authenticate: Digest
    realm="http-auth@example.org",
    qop="auth, auth-int",
    algorithm=MD5,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

Le client invite l'utilisateur·ice à saisir son nom d'utilisateur·ice et son mot de passe, puis répond avec une nouvelle requête qui encode les identifiants dans le champ d'en-tête {{HTTPHeader("Authorization")}}.
Si le client choisit le condensé MD5, le champ d'en-tête {{HTTPHeader("Authorization")}} peut ressembler à ceci&nbsp;:

```http
Authorization: Digest username="Mufasa",
    realm="http-auth@example.org",
    uri="/dir/index.html",
    algorithm=MD5,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    nc=00000001,
    cnonce="f2/wE4q74E6zIJEtWaHKaf5wv/H5QzzpXusqGemxURZJ",
    qop=auth,
    response="8ca523f5e9506fed4657c9700eebdbec",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

Si le client choisit le condensé SHA-256, le champ d'en-tête {{HTTPHeader("Authorization")}} peut ressembler à ceci&nbsp;:

```http
Authorization: Digest username="Mufasa",
    realm="http-auth@example.org",
    uri="/dir/index.html",
    algorithm=SHA-256,
    nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
    nc=00000001,
    cnonce="f2/wE4q74E6zIJEtWaHKaf5wv/H5QzzpXusqGemxURZJ",
    qop=auth,
    response="753927fa0e85d155564e2e272a28d1802ca10daf449
        6794697cf8db5856cb6c1",
    opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS"
```

### Authentification HOBA

Un serveur qui prend en charge l'authentification HOBA peut avoir un en-tête de réponse `WWW-Authenticate` qui ressemble à ceci&nbsp;:

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: HOBA max-age="180", challenge="16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz"
```

Le bloc de données du défi à signer se compose des éléments suivants&nbsp;: `www.example.com` utilise le port 8080, le nombre à usage unique vaut `1123123123`, l'algorithme de signature est RSA-SHA256, l'identifiant de clé est `123` et le défi final est `68147c97-461b-4310-be9b-4c707237ab53`.

Un client reçoit cet en-tête, extrait le défi, le signe avec sa clé privée correspondant à l'identifiant de clé 123 dans notre exemple au moyen de RSA-SHA256, puis envoie le résultat dans l'en-tête `Authorization` sous la forme d'un identifiant de clé, d'un défi, d'un nombre à usage unique et d'une signature séparés par des points.

```http
Authorization: 123.16:MTEyMzEyMzEyMw==1:028:https://www.example.com:8080:3:MTI48:NjgxNDdjOTctNDYxYi00MzEwLWJlOWItNGM3MDcyMzdhYjUz.1123123123.<signature-of-challenge>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication)
- L'en-tête {{HTTPHeader("Authorization")}}
- L'en-tête {{HTTPHeader("Proxy-Authorization")}}
- L'en-tête {{HTTPHeader("Proxy-Authenticate")}}
- Les codes de statut {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
