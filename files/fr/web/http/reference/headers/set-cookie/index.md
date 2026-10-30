---
title: En-tête Set-Cookie
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: d8b9ef6d4342a26e188204a479eede5f057aceab
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Set-Cookie`** est utilisé pour envoyer un cookie depuis le serveur vers l'agent utilisateur, afin que l'agent utilisateur puisse le retourner au serveur plus tard.
Pour envoyer plusieurs cookies, plusieurs en-têtes `Set-Cookie` doivent être envoyés dans la même réponse.

> [!WARNING]
> Les navigateurs bloquent l'accès au code JavaScript <i lang="en">front-end</i> à l'en-tête `Set-Cookie`, comme l'exige la spécification Fetch, qui définit `Set-Cookie` comme un [nom d'en-tête de réponse interdit <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#forbidden-response-header-name) qui [doit être filtré <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) de toute réponse exposée au code <i lang="en">front-end</i>.
>
> Lorsqu'une requête [de l'API Fetch](/fr/docs/Web/API/Fetch_API/Using_Fetch) ou [l'API XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API) [utilise CORS](/fr/docs/Web/HTTP/Guides/CORS#quelles_requêtes_utilisent_le_cors), les navigateurs ignorent les en-têtes `Set-Cookie` présents dans la réponse du serveur, sauf si la requête inclut des informations d'authentification. Consultez [Utiliser l'API Fetch - Inclure des informations d'authentification](/fr/docs/Web/API/Fetch_API/Using_Fetch#inclure_des_informations_dauthentification) et [l'article XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API) pour savoir comment inclure des informations d'authentification.

Pour plus d'information, voir le guide [Utiliser les cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden response header name", "En-tête de réponse interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Partitioned
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure

// L'usage d'attributs multiples est également possible, par exemple :
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## Attributs

- `<cookie-name>=<cookie-value>`
  - : Définit le nom du cookie et sa valeur.
    Une définition de cookie commence par une paire nom-valeur.

    Un `<cookie-name>` peut contenir n'importe quel caractère US-ASCII à l'exception des caractères de contrôle (caractères {{Glossary("ASCII")}} 0 à 31 et caractère ASCII 127) ou des caractères séparateurs (espace, tabulation et les caractères&nbsp;: `( ) < > @ , ; : \ " / [ ] ? = { }`)

    Une `<cookie-value>` peut éventuellement être entourée de guillemets et inclure n'importe quel caractère US-ASCII à l'exception des caractères de contrôle (caractères ASCII 0 à 31 et caractère ASCII 127), {{Glossary("Whitespace", "espaces blancs")}}, guillemets, virgules, points-virgules et barres obliques inverses.

    **Encodage**&nbsp;: De nombreuses implémentations effectuent un {{Glossary("Percent-encoding", "encodage en pourcentage")}} sur les valeurs de cookie. Cependant, cela n'est pas requis par la spécification RFC. L'encodage en pourcentage aide à satisfaire les exigences des caractères autorisés pour `<cookie-value>`.

    > [!NOTE]
    > Certains noms de cookie contiennent des préfixes qui imposent des restrictions spécifiques sur les attributs du cookie dans les agents utilisateurs qui les prennent en charge. Voir [Préfixes de cookie](#préfixes_de_cookie) pour plus d'informations.

- `Domain=<domain-value>` {{Optional_Inline}}
  - : Définit les hôtes auxquels le cookie est envoyé.

    Définir le domaine rend le cookie disponible pour ce domaine et tous ses sous-domaines.
    Si omis, le cookie n'est retourné qu'à l'hôte qui l'a envoyé (c'est-à-dire qu'il devient un «&nbsp;cookie réservé à l'hôte&nbsp;»).
    Cela est plus restrictif que de définir le nom de l'hôte, car le cookie n'est pas rendu disponible pour les sous-domaines de l'hôte.

    La valeur doit être le domaine du serveur qui envoie l'en-tête de réponse `Set-Cookie`, ou un domaine parent de ce domaine.
    Il ne peut pas s'agir d'un [suffixe public <sup>(angl.)</sup>](https://publicsuffix.org/) tel que `com`, `co.uk` ou `github.io`.
    Par exemple, une réponse de `api.example.com` peut définir `Domain=api.example.com` ou `Domain=example.com`, mais pas `Domain=beta.api.example.com`, `Domain=other.example.com` ou `Domain=com`.
    De même, une réponse de `shop.example.co.uk` peut définir `Domain=shop.example.co.uk` ou `Domain=example.co.uk`, mais pas `Domain=co.uk`, car `co.uk` est un suffixe public.
    Les cookies qui enfreignent ces règles sont ignorés.

    Contrairement aux spécifications antérieures, les points initiaux dans les noms de domaine (`.example.com`) sont ignorés.

    Plusieurs valeurs d'hôte/domaine ne sont _pas_ autorisées, mais si un domaine _est_ définit, alors les sous-domaines sont toujours inclus.

- `Expires=<date>` {{Optional_Inline}}
  - : Indique la durée de vie maximale du cookie sous la forme d'un horodatage de date HTTP.
    Voir {{HTTPHeader("Date")}} pour le format requis.

    Si cette valeur n'est pas définie, le cookie devient un **cookie de session**.
    Une session prend fin lorsque le client se déconnecte, après quoi le cookie de session est supprimé.

    > [!WARNING]
    > De nombreux navigateurs web disposent d'une fonctionnalité de _restauration de session_ qui enregistre tous les onglets et les restaure la prochaine fois que le navigateur est utilisé. Les cookies de session sont également restaurés, comme si le navigateur n'avait jamais été fermé.

    Le serveur définit l'attribut `Expires` avec une valeur relative à sa propre horloge interne, qui peut différer de celle du navigateur client.
    Firefox et les navigateurs basés sur Chromium utilisent en interne une valeur d'expiration (max-age) ajustée pour compenser le décalage des horloges, et enregistrent puis suppriment les cookies en fonction de l'heure prévue par le serveur.
    Le calcul de l'ajustement du décalage des horloges utilise la valeur de l'en-tête {{HTTPHeader("DATE")}}.
    Notez que la spécification explique comment analyser l'attribut, mais n'indique pas si ni comment le destinataire doit corriger la valeur.

- `HttpOnly` {{Optional_Inline}}
  - : Interdit à JavaScript d'accéder au cookie, par exemple, par le biais de la propriété {{DOMxRef("Document.cookie")}}.
    Notez qu'un cookie créé avec `HttpOnly` est toujours envoyé avec les requêtes initiées par JavaScript, par exemple lors de l'appel à {{DOMxRef("XMLHttpRequest.send()")}} ou à {{DOMxRef("Window/fetch", "fetch()")}}.
    Cela atténue les attaques de type {{Glossary("Cross-site_scripting", "XSS")}}.

- `Max-Age=<number>` {{Optional_Inline}}
  - : Indique le nombre de secondes avant l'expiration du cookie. Une valeur nulle ou négative expire immédiatement le cookie. Si `Expires` et `Max-Age` sont tous deux définis, `Max-Age` est prioritaire.

- `Partitioned` {{Optional_Inline}}
  - : Indique que le cookie doit être enregistré dans un stockage partitionné.
    Notez que si cet attribut est défini, la [directive `Secure`](#secure) doit également être définie.
    Consultez l'article [Cookies à état partitionné indépendant (CHIPS)](/fr/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) pour plus de détails.

- `Path=<path-value>` {{Optional_Inline}}
  - : Indique le chemin qui _doit_ figurer dans l'URL demandée pour que le navigateur envoie l'en-tête `Cookie`.

    S'il est omis, cet attribut prend par défaut la partie chemin de l'URL de la requête. Par exemple, si un cookie est défini par une requête vers `https://example.com/docs/Web/HTTP/index.html`, le chemin par défaut est `/docs/Web/HTTP/`.

    Le caractère barre oblique (`/`) est interprété comme un séparateur de répertoires, et les sous-répertoires correspondent également. Par exemple, pour `Path=/docs`,
    - les chemins de requête `/docs`, `/docs/`, `/docs/Web/` et `/docs/Web/HTTP` correspondent tous.
    - les chemins de requête `/`, `/docsets` et `/fr/docs` ne correspondent pas.

    > [!NOTE]
    > L'attribut `path` vous permet de contrôler les cookies que le navigateur envoie en fonction des différentes parties d'un site.
    > Il ne constitue pas une mesure de sécurité et [ne protège pas](/fr/docs/Web/API/Document/cookie#securité) contre la lecture non autorisée du cookie depuis un autre chemin.

- `SameSite=<samesite-value>` {{Optional_Inline}}
  - : Contrôle si un cookie est envoyé ou non avec les requêtes inter-sites&nbsp;: c'est-à-dire les requêtes provenant d'un {{Glossary("site")}} différent, schéma compris, du site qui a défini le cookie. Cela offre une certaine protection contre certaines attaques inter-sites, notamment les attaques par {{Glossary("CSRF", "falsification de requête inter-site (CSRF)")}}.

    Les valeurs d'attribut possibles sont&nbsp;:
    - `Strict`
      - : Envoie le cookie uniquement pour les requêtes provenant du même {{Glossary("site")}} que celui qui a défini le cookie.

    - `Lax`
      - : Envoie le cookie uniquement pour les requêtes provenant du même {{Glossary("site")}} que celui qui a défini le cookie, ainsi que pour les requêtes inter-sites qui répondent aux deux critères suivants&nbsp;:
        - La requête correspond à une navigation de premier niveau&nbsp;: en pratique, cela signifie qu'elle modifie l'URL affichée dans la barre d'adresse du navigateur.
          - Cela exclut, par exemple, les requêtes effectuées avec l'API {{DOMxRef("Window.fetch()", "fetch()")}}, les requêtes de ressources intégrées provenant d'éléments HTML {{HTMLElement("img")}} ou {{HTMLElement("script")}}, ainsi que les navigations dans des éléments HTML {{HTMLElement("iframe")}}.

          - Cela inclut les requêtes effectuées lorsque l'utilisateur·ice clique sur un lien dans le contexte de navigation de premier niveau pour passer d'un site à un autre, une affectation à {{DOMxRef("Document.location", "document.location")}} ou l'envoi d'un élément {{HTMLElement("form")}}.

        - La requête utilise une méthode {{Glossary("Safe/HTTP", "sûre")}}&nbsp;: cela exclut notamment {{HTTPMethod("POST")}}, {{HTTPMethod("PUT")}} et {{HTTPMethod("DELETE")}}.

        Certains navigateurs utilisent `Lax` comme valeur par défaut si `SameSite` n'est pas défini&nbsp;: consultez la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

        > [!NOTE]
        > Lorsque `Lax` est appliqué par défaut, une version plus permissive est utilisée. Dans cette version, les cookies sont également inclus dans les requêtes {{HTTPMethod("POST")}}, à condition qu'ils soient définis au plus deux minutes avant la requête.

    - `None`
      - : Envoie le cookie avec les requêtes inter-sites et les requêtes de même site.
        L'attribut `Secure` doit également être défini avec cette valeur.

- `Secure` {{Optional_Inline}}
  - : Indique que le cookie est envoyé au serveur uniquement lorsqu'une requête est effectuée avec le schéma `https:` (sauf sur `localhost`), et qu'il est donc plus résistant aux attaques du [manipulateur du milieu (MITM)](/fr/docs/Web/Security/Attacks/MITM).

    > [!NOTE]
    > Ne supposez pas que `Secure` empêche tout accès aux informations sensibles des cookies (clés de session, identifiants de connexion, etc.).
    > Les cookies avec cet attribut peuvent toujours être lus ou modifiés depuis le disque dur du client ou depuis JavaScript si l'attribut de cookie `HttpOnly` n'est pas défini.
    >
    > Les sites non sécurisés (`http:`) ne peuvent pas définir de cookies avec l'attribut `Secure`. Les exigences relatives à `https:` sont ignorées lorsque l'attribut `Secure` est défini par `localhost`.

## Préfixes de cookie

Certains noms de cookie contiennent des préfixes qui imposent des restrictions particulières sur les attributs des cookies dans les agents utilisateurs qui les prennent en charge. Tous les préfixes de cookie commencent par deux traits de soulignement (`__`) et se terminent par un tiret (`-`). Les préfixes suivants sont définis&nbsp;:

- **`__Secure-`**&nbsp;: Les cookies dont le nom commence par `__Secure-` doivent être définis avec l'attribut `Secure` par une page sécurisée (HTTPS).
- **`__Host-`**&nbsp;: Les cookies dont le nom commence par `__Host-` doivent être définis avec l'attribut `Secure` par une page sécurisée (HTTPS). De plus, ils ne doivent pas avoir d'attribut `Domain` défini, et l'attribut `Path` doit prendre la valeur `/`. Cela garantit que ces cookies sont envoyés uniquement à l'hôte qui les a définis, et non à un autre hôte du domaine. Cela garantit également qu'ils sont définis pour tout l'hôte et qu'ils ne peuvent pas être remplacés sur un chemin de cet hôte. Cette combinaison produit un cookie qui traite l'origine presque comme une limite de sécurité.
- **`__Http-`**&nbsp;: Les cookies dont le nom commence par `__Http-` doivent être définis avec l'indicateur `Secure` par une page sécurisée (HTTPS) et doivent également avoir l'attribut `HttpOnly` défini pour prouver qu'ils sont définis par l'en-tête `Set-Cookie` (ils ne peuvent pas être définis ou modifiés par des fonctionnalités JavaScript telles que `Document.cookie` ou [l'API Cookie Store](/fr/docs/Web/API/Cookie_Store_API)).
- **`__Host-Http-`**&nbsp;: Les cookies dont le nom commence par `__Host-Http-` doivent être définis avec l'indicateur `Secure` par une page sécurisée (HTTPS) et doivent avoir l'attribut `HttpOnly` défini pour prouver qu'ils sont définis par l'en-tête `Set-Cookie`. De plus, ils ont les mêmes restrictions que les cookies préfixés par `__Host-`. Cette combinaison produit un cookie qui traite l'origine presque comme une frontière de sécurité, tout en veillant à ce que les personnes chargées du développement et de l'exploitation des serveurs sachent que la portée du cookie se limite aux requêtes HTTP.

> [!WARNING]
> Vous ne pouvez pas compter sur ces garanties supplémentaires dans les navigateurs qui ne prennent pas en charge les préfixes de cookie&nbsp;; dans ce cas, les cookies préfixés sont toujours acceptés.

## Exemples

### Cookie de session

**Les cookies de session** sont supprimés quand le client s'éteint. Les cookies sont des cookies de session s'ils n'ont pas de directive `Expires` ou `Max-Age`.

```http
Set-Cookie: sessionId=38afes7a8
```

### Cookie permanent

Les cookies permanents sont supprimés à une date spécifique (`Expires`) ou après une durée spécifique (`Max-Age`) et non lorsque le client est fermé.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Domaines invalides

Un cookie pour un domaine qui n'inclut pas le serveur qui le définit [doit être rejeté par l'agent utilisateur <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Le cookie suivant est rejeté si le serveur est hébergé sur `original-company.com`&nbsp;:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Un cookie pour un sous-domaine du domaine servi est rejeté.

Le cookie suivant est rejeté si le serveur est hébergé sur `example.com`&nbsp;:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Préfixes de cookie

Les noms de cookies préfixés par `__Secure-` ou `__Host-` ne peuvent être utilisés que s'ils sont définis avec l'attribut `Secure` à partir d'une origine sécurisée (HTTPS).

Les noms de cookies préfixés par `__Http-` ou `__Host-Http-` ne peuvent être utilisés que s'ils sont définis avec l'attribut `Secure` à partir d'une origine sécurisée (HTTPS) et doivent en outre comporter l'attribut `HttpOnly` pour prouver qu'ils ont été définis par l'en-tête `Set-Cookie` et non côté client par JavaScript.

De plus, les cookies préfixés par `__Host-` ou `__Host-Http-` doivent avoir un chemin de type `/` (ce qui signifie n'importe quel chemin sur l'hôte) et ne doivent pas posséder d'attribut `Domain`.

```http
// Les deux sont acceptés s'ils viennent d'une origine sécurisée (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Rejeté, car l'attribut Secure est manquant
Set-Cookie: __Secure-id=1

// Rejeté, car l'attribut Path=/ est manquant
Set-Cookie: __Host-id=1; Secure

// Rejeté, car un attribut Domain est défini
Set-Cookie: __Host-id=1; Secure; Path=/; Domain=example.com

// Ne peut être défini que par Set-Cookie
Set-Cookie: __Http-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-Http-ID=123; Secure; Path=/
```

### Cookies partitionnés

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Les cookies partitionnés doivent être définis avec `Secure`. De plus, il est recommandé d'utiliser un préfixe `__Host` ou `__Host-Http-` lors de la définition de cookies partitionnés afin de les lier au nom d'hôte et non au domaine enregistrable.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies)
- L'en-tête {{HTTPHeader("Cookie")}}
- La propriété API {{DOMxRef("Document.cookie")}}
- [Les cookies SameSite expliqués <sup>(angl.)</sup>](https://web.dev/articles/samesite-cookies-explained) (blog web.dev)
