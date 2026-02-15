---
title: En-tête Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Content-Security-Policy`** permet aux administrateur·ice·s d'un site web de contrôler les ressources que l'agent utilisateur est autorisé à charger pour une page donnée. À quelques exceptions près, les règles consistent principalement à définir les origines du serveur et les points d'accès pour les scripts.
Cela permet de se prémunir contre les attaques {{Glossary("cross-site scripting", "de script inter-sites")}}.

Pour plus d'informations, consultez le [guide Content Security Policy (CSP)](/fr/docs/Web/HTTP/Guides/CSP) pour des détails sur la livraison d'une CSP au navigateur, son apparence, ainsi que des cas d'utilisation et des stratégies de déploiement.

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
Content-Security-Policy: <policy-directive>; <policy-directive>
```

où `<policy-directive>` se compose de&nbsp;:
`<directive> <value>` sans ponctuation interne.

## Directives

### Directives de récupération (_fetch_)

Les directives de récupération contrôlent les emplacements à partir desquels certains types de ressources peuvent être chargés.

- {{CSP("child-src")}}
  - : Définit les sources valides pour les [web workers](/fr/docs/Web/API/Web_Workers_API) et les contextes de navigation imbriqués chargés avec des éléments HTML tels que {{HTMLElement("frame")}} et {{HTMLElement("iframe")}}.

    [Repli](#replis) pour `frame-src` et `worker-src`.

- {{CSP("connect-src")}}
  - : Restreint les URL qui peuvent être chargées via les interfaces de script.
- {{CSP("default-src")}}
  - : Sert de repli pour les autres {{Glossary("Fetch directive", "directives de récupération")}}.

    [Repli](#replis) pour toutes les autres directives de récupération.

- {{CSP("fenced-frame-src")}} {{Experimental_Inline}}
  - : Définit les sources valides pour les contextes de navigation imbriqués chargés dans des éléments HTML {{HTMLElement("fencedframe")}}.
- {{CSP("font-src")}}
  - : Définit les sources valides pour les polices chargées avec {{CSSxRef("@font-face")}}.
- {{CSP("frame-src")}}
  - : Définit les sources valides pour les contextes de navigation imbriqués chargés dans des éléments HTML tels que {{HTMLElement("frame")}} et {{HTMLElement("iframe")}}.
- {{CSP("img-src")}}
  - : Définit les sources valides pour les images et les favicons.
- {{CSP("manifest-src")}}
  - : Définit les sources valides pour les fichiers de manifeste d'application.
- {{CSP("media-src")}}
  - : Définit les sources valides pour le chargement des médias avec les éléments HTML {{HTMLElement("audio")}}, {{HTMLElement("video")}} et {{HTMLElement("track")}}.
- {{CSP("object-src")}}
  - : Définit les sources valides pour les éléments HTML {{HTMLElement("object")}} et {{HTMLElement("embed")}}.
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Définit les sources valides à précharger ou à pré-rendre.
- {{CSP("script-src")}}
  - : Définit les sources valides pour les ressources JavaScript et WebAssembly.

    [Repli](#replis) pour `script-src-elem` et `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Définit les sources valides pour les éléments HTML JavaScript {{HTMLElement("script")}}.
- {{CSP("script-src-attr")}}
  - : Définit les sources valides pour les gestionnaires d'évènements JavaScript en ligne.
- {{CSP("style-src")}}
  - : Définit les sources valides pour les feuilles de styles.

    [Repli](#replis) pour `style-src-elem` et `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Définit les sources valides pour les éléments HTML {{HTMLElement("style")}} et les éléments HTML {{HTMLElement("link")}} ayant `rel="stylesheet"`.
- {{CSP("style-src-attr")}}
  - : Définit les sources valides pour les styles en ligne appliqués à des éléments individuels du DOM.
- {{CSP("worker-src")}}
  - : Définit les sources valides pour les scripts {{DOMxRef("Worker")}}, {{DOMxRef("SharedWorker")}} ou {{DOMxRef("ServiceWorker")}}.

Toutes les directives de récupération peuvent être définies avec la valeur unique `'none'`, indiquant que le type de ressource concerné doit être complètement bloqué, ou avec une ou plusieurs valeurs d'expression de source, indiquant les sources valides pour ce type de ressource. Voir [Syntaxe des directives de récupération](#syntaxe_de_directives_de_récupération) pour plus de détails.

#### Replis

Certaines directives de récupération servent de replis pour d'autres directives plus spécifiques. Cela signifie que si la directive plus spécifique n'est pas définie, alors le repli est utilisé pour définir une règle pour ce type de ressource.

- `default-src` est un repli pour toutes les autres directives de récupération.
- `script-src` est un repli pour `script-src-attr` et `script-src-elem`.
- `style-src` est un repli pour `style-src-attr` et `style-src-elem`.
- `child-src` est un repli pour `frame-src` et `worker-src`.

Par exemple&nbsp;:

- Si `img-src` est omise mais que `default-src` est incluse, alors la règle définie par `default-src` sera appliquée aux images.
- Si `script-src-elem` est omise mais que `script-src` est incluse, alors la règle définie par `script-src` sera appliquée aux éléments `<script>`.
- Si `script-src-elem` et `script-src` sont toutes deux omises, mais que `default-src` est incluse, alors la règle définie par `default-src` sera appliquée aux éléments `<script>`.

### Directives de document

Les directives de document permettent de paramétrer les propriétés d'un document ou d'un environnement [worker](/fr/docs/Web/API/Web_Workers_API) auquel une règle s'applique.

- {{CSP("base-uri")}}
  - : Restreint les URL qui peuvent être utilisées dans l'élément {{HTMLElement("base")}} d'un document.
- {{CSP("sandbox")}}
  - : Active un bac-à-sable pour la ressource demandée, de façon analogue à l'attribut [`sandbox`](/fr/docs/Web/HTML/Reference/Elements/iframe#sandbox) de {{HTMLElement("iframe")}}.

### Directives de navigation

Les directives de navigation permettent de paramétrer les emplacements vers lesquels l'utilisateur peut naviguer ou envoyer un formulaire, par exemple.

- {{CSP("form-action")}}
  - : Restreint les URL qui peuvent être utilisées comme cibles pour envoyer des formulaires depuis un contexte donné.
- {{CSP("frame-ancestors")}}
  - : Définit les parents valides qui peuvent intégrer une page grâce aux éléments {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, ou {{HTMLElement("embed")}}.

### Directives de rapport

Les directives de rapport contrôlent l'URL de destination pour les rapports d'enfreinte CSP dans `Content-Security-Policy` et {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}
  - : Fournit au navigateur un jeton identifiant le point de terminaison de rapport ou le groupe de points de terminaison auquel envoyer les informations d'enfreinte CSP. Les points de terminaison représentés par le jeton sont fournis par d'autres en-têtes HTTP, tels que {{HTTPHeader("Reporting-Endpoints")}} et {{HTTPHeader("Report-To")}} {{Deprecated_Inline}}.

    > [!WARNING]
    > Cette directive est destinée à remplacer [`report-uri`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri)&nbsp;; dans les navigateurs qui prennent en charge `report-to`, la directive `report-uri` est ignorée.
    > Cependant, tant que `report-to` n'est pas largement supportée, il est recommandé de spécifier les deux en-têtes comme illustré (où `nom_point_de_terminaison` est le nom d'un point de terminaison fourni séparément)&nbsp;:
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.exemple.com; report-to nom_point_de_terminaison
    > ```

### Autres directives

- {{CSP("require-trusted-types-for")}}
  - : Implique l'utilisation de [Types de confiance](/fr/docs/Web/API/Trusted_Types_API) sur les puits d'injection XSS du DOM.
- {{CSP("trusted-types")}}
  - : Utilisée pour définir une liste blanche de règles de [types de confiance](/fr/docs/Web/API/Trusted_Types_API).
    Les types de confiance permettent aux applications de verrouiller les puits d'injection XSS du DOM pour n'accepter que des valeurs typées et non falsifiables à la place des chaînes de caractères.
- {{CSP("upgrade-insecure-requests")}}
  - : Indique à l'agent utilisateur de traiter toutes les URL non-sécurisées d'un site (celles servies via HTTP) comme si elles avaient été remplacées par des URL sécurisées (celles servies via HTTPS).
    Cette directive est destinée aux sites web qui possèdent un grand nombre d'URL historiques non-sécurisées devant être réécrites.

### Directives obsolètes

- {{CSP("block-all-mixed-content")}} {{Deprecated_Inline}}
  - : Empêche le chargement de toute ressource via HTTP lorsque la page est chargée avec HTTPS.

- {{CSP("report-uri")}} {{Deprecated_Inline}}
  - : Fournit au navigateur une URL où les rapports d'enfreinte CSP doivent être envoyés.
    Cette directive est remplacée par la directive [`report-to`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to).

## Syntaxe des directives de récupération

Toutes les directives de récupération peuvent être définies de l'une des façons suivantes&nbsp;:

- la valeur unique `'none'`, indiquant que le type de ressource concerné doit être complètement bloqué
- une ou plusieurs valeurs d'_expression de source_, indiquant les sources valides pour ce type de ressource.

Chaque expression de source prend l'une des formes listées ci-dessous. Notez que toutes les formes ne sont pas applicables à toutes les directives de récupération&nbsp;: consultez la documentation de chaque directive pour savoir quelles formes lui sont applicables.

Les formats `<host-source>` et `<scheme-source>` doivent être non entourés de guillemets, et tous les autres formats doivent être entourés de guillemets simples.

### `nonce-<nonce_value>`

Cette valeur consiste en la chaîne de caractères `nonce-` suivie d'une valeur de {{Glossary("Nonce", "nombre unique")}}. La valeur du nonce peut utiliser n'importe quel caractère de la [Base64](/fr/docs/Glossary/Base64#base64_characters) ou de la [Base64 sûre pour les URL](/fr/docs/Glossary/Base64#base64_sûr_pour_les_url_et_noms_de_fichiers).

Cette chaîne de caractères est une valeur aléatoire que le serveur génère pour chaque réponse HTTP. Par exemple&nbsp;:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Le serveur peut alors inclure cette même valeur comme valeur de l'attribut `nonce` de toute ressource {{HTMLElement("script")}} ou {{HTMLElement("style")}} qu'il souhaite charger depuis le document.

Le navigateur compare la valeur de la directive CSP avec la valeur de l'attribut de l'élément, et ne charge la ressource que si elles correspondent.

Si une directive contient un nombre unique et `unsafe-inline`, alors le navigateur ignore `unsafe-inline`.

Voir la section [Nombres uniques](/fr/docs/Web/HTTP/Guides/CSP#nombres_uniques) du guide CSP pour plus d'informations d'utilisation.

> [!NOTE]
> Les expressions de source de type nonce ne s'appliquent qu'aux éléments HTML {{HTMLElement("script")}} et {{HTMLElement("style")}}.

### `<hash_algorithm>-<hash_value>`

Cette valeur consiste en une chaîne de caractères identifiant un algorithme de hachage, suivie de `-`, puis d'une valeur de hachage. La valeur de hachage peut utiliser n'importe quel caractère de la [Base64](/fr/docs/Glossary/Base64#base64_characters) ou de la [Base64 sûre pour les URL](/fr/docs/Glossary/Base64#base64_sûr_pour_les_url_et_noms_de_fichiers).

- L'identifiant de l'algorithme de hachage doit être l'un des suivants entre `sha256`, `sha384` ou `sha512`.
- La valeur de hachage est le résultat en base64 de la {{Glossary("hash function", "fonction de hachage")}} d'une ressource `<script>` ou `<style>`, calculée à l'aide de l'une des fonctions de hachage suivantes&nbsp;: SHA-256, SHA-384 ou SHA-512.

Par exemple&nbsp;:

```plain
'sha256-cd9827ad...'
```

Lorsque le navigateur reçoit le document, il effectue le hachage du contenu de chaque élément `<script>` et `<style>`, compare le résultat avec les hachages présents dans la directive CSP, et ne charge la ressource que s'il y a correspondance.

Si l'élément charge une ressource externe (par exemple, via l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/script#src)), alors l'élément doit également avoir l'attribut [`integrity`](/fr/docs/Web/HTML/Reference/Elements/script#integrity) renseigné.

Si une directive contient une valeur de hachage et `unsafe-inline`, alors le navigateur ignore `unsafe-inline`.

Voir la section [Hachages](/fr/docs/Web/HTTP/Guides/CSP#hachages) du guide CSP pour plus d'informations d'utilisation.

> [!NOTE]
> Les expressions de source de type hachage ne s'appliquent qu'aux éléments HTML {{HTMLElement("script")}} et {{HTMLElement("style")}}.

### `<host-source>`

Une [URL](/fr/docs/Web/URI) ou adresse IP d'un {{Glossary("host", "hôte")}} qui est une source valide pour la ressource.

Le schéma, le numéro de port et le chemin sont optionnels.

Si le schéma est omis, celui de l'origine du document est utilisé.

Lors de la comparaison des schémas, les mises à niveau sécurisées sont autorisées. Par exemple&nbsp;:

- `http://exemple.com` autorisera également les ressources provenant de `https://exemple.com`
- `ws://exemple.org` autorisera également les ressources provenant de `wss://exemple.org`.

Les jokers (`'*'`) peuvent être utilisés pour les sous-domaines, l'adresse de l'hôte et le numéro de port, indiquant que toutes les valeurs légales de chacun sont valides. Par exemple&nbsp;:

- `http://*.exemple.com` autorise les ressources provenant de n'importe quel sous-domaine de `exemple.com`, en HTTP ou HTTPS.

Les chemins qui se terminent par `/` correspondent à tout chemin dont ils sont le préfixe. Par exemple&nbsp;:

- `exemple.com/api/` autorisera les ressources provenant de `exemple.com/api/users/new`.

Les chemins qui ne se terminent pas par `/` sont comparés exactement. Par exemple&nbsp;:

- `https://exemple.com/file.js` autorise les ressources provenant de `https://exemple.com/file.js` mais pas de `https://exemple.com/file.js/file2.js`.

### `<scheme-source>`

Un [schéma](/fr/docs/Web/URI/Reference/Schemes), tel que `https:`. Les deux-points sont obligatoires.

Les mises à niveau sécurisées sont autorisées, donc&nbsp;:

- `http:` autorisera également les ressources chargées en HTTPS
- `ws:` autorisera également les ressources chargées en WSS.

### `self`

Les ressources du type donné ne peuvent être chargées que depuis la même {{Glossary("origin", "origine")}} que le document.

Les mises à niveau sécurisées sont autorisées. Par exemple&nbsp;:

- Si le document est servi depuis `http://exemple.com`, alors une CSP avec `'self'` autorisera également les ressources provenant de `https://exemple.com`.
- Si le document est servi depuis `ws://exemple.org`, alors une CSP avec `'self'` autorisera également les ressources provenant de `wss://exemple.org`.

### `trusted-types-eval`

Par défaut, si une CSP contient une directive `default-src` ou `script-src`, alors les fonctions JavaScript qui évaluent leurs arguments comme du JavaScript sont désactivées.
Cela inclut [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval), l'argument [`code`](/fr/docs/Web/API/Window/setTimeout#code) de {{DOMxRef("Window.setTimeout()", "setTimeout()")}}, ou le constructeur {{JSxRef("Function/Function()", "Function()")}}.

Le mot-clé `trusted-types-eval` peut être utilisé pour annuler cette protection, mais uniquement lorsque les [Types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont appliqués et transmis à ces fonctions à la place de chaînes de caractères.
Cela permet l'évaluation dynamique de chaînes de caractères comme JavaScript, mais seulement après que les entrées ont été transmises à une fonction de transformation avant injection, ce qui permet de [nettoyer](/fr/docs/Web/Security/Attacks/XSS#nettoyage) l'entrée pour supprimer tout balisage potentiellement dangereux.

Le mot-clé `trusted-types-eval` doit être utilisé à la place de [`'unsafe-eval'`](#unsafe-eval) lors de l'utilisation de ces méthodes avec des types de confiance.
Cela garantit que l'accès à ces méthodes est bloqué sur les navigateurs qui ne prennent pas en charge les types de confiance.

> [!NOTE]
> Il convient d'éviter d'utiliser `trusted-types-eval` ou ces méthodes sauf si cela est absolument nécessaire.
> Les types de confiance garantissent que l'entrée passe par une fonction de transformation — ils ne garantissent pas que la transformation rend l'entrée sûre (et cela peut être très difficile à réaliser correctement).

Voir la section [`eval()` et API similaires](/fr/docs/Web/HTTP/Guides/CSP#eval_et_api_similaires) du guide CSP pour plus d'informations d'utilisation.

### `unsafe-eval`

Par défaut, si une CSP contient une directive `default-src` ou `script-src`, alors les fonctions JavaScript qui évaluent leurs arguments comme du JavaScript sont désactivées.
Cela inclut [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval), l'argument [`code`](/fr/docs/Web/API/Window/setTimeout#code) de {{DOMxRef("Window.setTimeout()", "setTimeout()")}}, ou le constructeur {{JSxRef("Function/Function()", "Function()")}}.

Le mot-clé `unsafe-eval` peut être utilisé pour annuler cette protection, permettant l'évaluation dynamique de chaînes de caractères comme JavaScript.

> [!WARNING]
> Les développeur·euse·s doivent éviter d'utiliser `'unsafe-eval'`, car cela annule en grande partie l'intérêt d'une CSP.
> [`'trusted-types-eval'`](#trusted-types-eval) offre une alternative «&nbsp;potentiellement&nbsp;» plus sûre si l'utilisation de ces méthodes est nécessaire.

Voir la section [`eval()` et API similaires](/fr/docs/Web/HTTP/Guides/CSP#eval_et_api_similaires) du guide CSP pour plus d'informations d'utilisation.

### `wasm-unsafe-eval`

Par défaut, si une CSP contient une directive `default-src` ou `script-src`, alors une page ne pourra pas compiler du WebAssembly à l'aide de fonctions comme [`WebAssembly.compileStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static).

Le mot-clé `wasm-unsafe-eval` peut être utilisé pour annuler cette protection. Il s'agit d'une alternative bien plus sûre à `'unsafe-eval'`, car cela n'active pas l'évaluation générale du JavaScript.

### `unsafe-inline`

Par défaut, si une CSP contient une directive `default-src` ou `script-src`, alors le JavaScript en ligne n'est pas autorisé à s'exécuter. Cela inclut&nbsp;:

- les balises `<script>` en ligne
- les attributs de gestionnaire d'évènements en ligne
- les URL `javascript:`.

De même, si une CSP contient `default-src` ou une directive `style-src`, alors le CSS en ligne ne sera pas chargé, y compris&nbsp;:

- les balises `<style>` en ligne
- les attributs {{DOMxRef("HTMLElement.style", "style")}}.

Le mot-clé `unsafe-inline` peut être utilisé pour annuler cette protection, permettant à toutes ces formes d'être chargées.

> [!WARNING]
> Les développeur·euse·s doivent éviter `'unsafe-inline'`, car cela annule en grande partie l'intérêt d'une CSP.

Voir la section [JavaScript en ligne](/fr/docs/Web/HTTP/Guides/CSP#javascript_en_ligne) du guide CSP pour plus d'informations d'utilisation.

### `unsafe-hashes`

Par défaut, si une CSP contient une directive `default-src` ou `script-src`, alors les attributs de gestionnaire d'évènements en ligne comme `onclick` et les attributs `style` en ligne ne sont pas autorisés à s'exécuter.

L'expression `'unsafe-hashes'` permet au navigateur d'utiliser des [expressions de hachage](#hash_algorithm-hash_value) pour les gestionnaires d'évènements en ligne et les attributs `style`. Par exemple, une CSP peut contenir une directive comme&nbsp;:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

Si la valeur de hachage correspond au hachage de la valeur d'un attribut de gestionnaire d'évènements en ligne ou d'un attribut `style`, alors le code sera autorisé à s'exécuter.

> [!WARNING]
> La valeur `'unsafe-hashes'` n'est pas sûre.
>
> En particulier, cela permet une attaque dans laquelle le contenu de l'attribut de gestionnaire d'évènements en ligne est injecté dans le document comme un élément `<script>` en ligne. Supposons que le gestionnaire d'évènements en ligne soit&nbsp;:
>
> ```html
> <button onclick="transferAllMyMoney()">Transférer tout mon argent</button>
> ```
>
> Si un·e attaquant·e peut injecter un élément `<script>` en ligne contenant ce code, la CSP autorisera son exécution automatiquement.
>
> Cependant, `'unsafe-hashes'` est bien plus sûr que `'unsafe-inline'`.

### `inline-speculation-rules`

Par défaut, si une CSP contient une directive `default-src` ou `script-src`, alors le JavaScript en ligne n'est pas autorisé à s'exécuter. L'expression `'inline-speculation-rules'` permet au navigateur de charger des éléments `<script>` en ligne qui ont un attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/script/type) de [`speculationrules`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules).

Voir la section [API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API) pour plus d'informations.

### `strict-dynamic`

Le mot-clé `'strict-dynamic'` fait en sorte que la confiance conférée à un script par un [nombre unique](#nonce-nonce_value) ou un [hachage](#hash_algorithm-hash_value) s'étende aux scripts que ce script charge dynamiquement, par exemple en créant de nouvelles balises `<script>` à l'aide de {{DOMxRef("Document.createElement()")}} puis en les insérant dans le document avec {{DOMxRef("Node.appendChild()")}}.

Si ce mot-clé est présent dans une directive, alors les valeurs d'expression de source suivantes sont toutes ignorées&nbsp;:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

Voir la section [Le mot-clé `strict-dynamic`](/fr/docs/Web/HTTP/Guides/CSP#le_mot-clé_strict-dynamic) du guide CSP pour plus d'informations d'utilisation.

### `report-sample`

Si cette expression est incluse dans une directive contrôlant les scripts ou les styles, et que la directive entraîne le blocage par le navigateur de tout script en ligne, style en ligne ou attribut de gestionnaire d'évènements en ligne, alors le [rapport de violation](/fr/docs/Web/HTTP/Guides/CSP#rapport_de_violation) généré par le navigateur contiendra une propriété {{DOMxRef("CSPViolationReportBody.sample", "sample")}} contenant les 40 premiers caractères de la ressource bloquée.

## Le CSP dans les workers

En général, les [workers](/fr/docs/Web/API/Worker) ne sont pas régis par la politique de sécurité du contenu du document (ou du worker parent) qui les a créés. Pour définir une politique de sécurité du contenu pour le worker, il faut définir un en-tête de réponse `Content-Security-Policy` pour la requête qui a demandé le script du worker.

L'exception à cette règle concerne le cas où l'origine du script du worker est un identifiant global unique (par exemple, si son URL utilise un schéma de type data ou blob). Dans ce cas, le worker hérite de la politique de sécurité du contenu du document ou du worker qui l'a créé.

## Gérer plusieurs politiques de sécurité

Le mécanisme CSP permet d'indiquer plusieurs politiques pour une ressource, notamment via l'en-tête `Content-Security-Policy`, l'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}} et l'élément {{HTMLElement("meta")}}.

Vous pouvez utiliser l'en-tête `Content-Security-Policy` plusieurs fois, comme dans l'exemple ci-dessous. Portez une attention particulière à la directive {{CSP("connect-src")}} ici. Même si la deuxième politique autorise la connexion, la première politique contient `connect-src 'none'`. Ajouter des politiques supplémentaires _ne peut que restreindre davantage_ les capacités de la ressource protégée, ce qui signifie qu'aucune connexion ne sera autorisée et, en tant que politique la plus stricte, `connect-src 'none'` sera appliquée.

```http
Content-Security-Policy: default-src 'self' http://exemple.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://exemple.com/;
                          script-src http://exemple.com/
```

## Exemples

### Désactiver le code en ligne non sûr et n'autoriser que les ressources HTTPS

Cet en-tête HTTP définit la politique par défaut pour n'autoriser le chargement des ressources (images, polices, scripts, etc.) qu'en HTTPS.
Comme les directives `unsafe-inline` et `unsafe-eval` ne sont pas définies, les scripts en ligne seront bloqués.

```http
Content-Security-Policy: default-src https:
```

Les mêmes restrictions peuvent être appliquées à l'aide de l'élément HTML {{HTMLElement("meta")}}.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Autoriser le code en ligne et les ressources HTTPS, mais désactiver les plugins

Cette politique peut être utilisée sur un site existant qui utilise trop de code en ligne pour être corrigé, afin de s'assurer que les ressources sont chargées uniquement via HTTPS et de désactiver les plugins&nbsp;:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Signaler mais ne pas appliquer les violations lors des tests

Cet exemple applique les mêmes restrictions que l'exemple précédent, mais utilise l'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}} et la directive {{CSP("report-to")}}.
Cette approche est utilisée lors des tests pour signaler les violations sans bloquer l'exécution du code.

Les points de terminaison (URL) vers lesquels envoyer les rapports sont définis à l'aide de l'en-tête de réponse HTTP {{HTTPHeader("Reporting-Endpoints")}}.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Un point de terminaison particulier est ensuite sélectionné comme cible de rapport dans la politique CSP à l'aide de la directive {{CSP("report-to")}}.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Notez que la directive {{CSP("report-uri")}} {{Deprecated_Inline}} est également définie ci-dessus car `report-to` n'est pas encore largement pris en charge par les navigateurs.

Voir [Mise en œuvre de la Content Security Policy (CSP)](/fr/docs/Web/Security/Practical_implementation_guides/CSP) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Apprendre&nbsp;: Content Security Policy](/fr/docs/Web/HTTP/Guides/CSP)
- [Sécurité du contenu dans les WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Adopter une politique stricte <sup>(angl.)</sup>](https://csp.withgoogle.com/docs/strict-csp.html)
- [Évaluateur CSP <sup>(angl.)</sup>](https://github.com/google/csp-evaluator) - Évaluer votre politique de sécurité du contenu
