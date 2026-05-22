---
title: Mise en cache HTTP
slug: Web/HTTP/Guides/Caching
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Le cache HTTP stocke une réponse associée à une requête et réutilise la réponse stockée pour les requêtes ultérieures.

Il y a plusieurs avantages à la réutilisation. Tout d'abord, comme il n'est pas nécessaire de transmettre la requête au serveur d'origine, plus le client et le cache sont proches, plus la réponse est rapide. L'exemple le plus typique est lorsque le navigateur lui-même stocke un cache pour les requêtes du navigateur.

De plus, lorsqu'une réponse est réutilisable, le serveur d'origine n'a pas besoin de traiter la requête — il n'a donc pas besoin d'analyser et de router la requête, de restaurer la session en fonction du cookie, d'interroger la base de données pour obtenir des résultats ou de rendre le moteur de template. Cela réduit la charge sur le serveur.

Le bon fonctionnement du cache est crucial pour la santé du système.

## Types de caches

Dans la spécification [Cache HTTP <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9111.html), il existe deux principaux types de caches&nbsp;: **caches privés** et **caches partagés**.

### Caches privés

Un cache privé est un cache lié à un client spécifique — typiquement un cache de navigateur. Comme la réponse stockée n'est pas partagée avec d'autres clients, un cache privé peut stocker une réponse personnalisée pour cet·te utilisateur·ice.

En revanche, si des contenus personnalisés sont stockés dans un cache autre qu'un cache privé, d'autres utilisateur·ice·s pourraient être en mesure de récupérer ces contenus — ce qui pourrait entraîner une fuite d'informations involontaire.

Si une réponse contient des contenus personnalisés et que vous souhaitez stocker la réponse uniquement dans le cache privé, vous devez définir une directive `private`.

```http
Cache-Control: private
```

Les contenus personnalisés sont généralement contrôlés par des cookies, mais la présence d'un cookie n'indique pas toujours qu'il est privé, et donc un cookie seul ne rend pas la réponse privée.

### Caches partagés

Le cache partagé est situé entre le client et le serveur et peut stocker des réponses pouvant être partagées entre les utilisateur·ice·s. Les caches partagés peuvent être subdivisés en **caches mandataires** et **caches gérés**.

#### Caches mandataires

En plus de la fonction de contrôle d'accès, certains mandataires mettent en œuvre la mise en cache pour réduire le trafic sortant du réseau. Cela n'est généralement pas géré par le·la développeur·euse du service, il doit donc être contrôlé par des en-têtes HTTP appropriés, etc. Cependant, par le passé, les implémentations de cache mandataires obsolètes — telles que les implémentations qui ne comprenaient pas correctement la norme HTTP Caching — ont souvent causé des problèmes aux développeur·euse·s.

**Les en-têtes fourre-tout** comme le suivant sont utilisés pour essayer de contourner les implémentations de cache mandataires «&nbsp;anciennes et non mises à jour&nbsp;» qui ne comprennent pas les directives actuelles de la spécification de cache HTTP comme `no-store`.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Cependant, ces dernières années, avec la généralisation de HTTPS et le chiffrement des communications client/serveur, les caches mandataires situés sur le chemin ne peuvent, dans de nombreux cas, que faire transiter une réponse sans pouvoir agir comme un cache. Ainsi, dans ce scénario, il n'est pas nécessaire de se préoccuper des implémentations de cache mandataires obsolètes qui ne peuvent même pas voir la réponse.

En revanche, si un mandataire passerelle {{Glossary("TLS")}} déchiffre toutes les communications en agissant comme une personne au milieu, en installant un certificat provenant d'une {{Glossary("Certificate_authority", "autorité de certification (CA)")}} gérée par l'organisation sur le PC, et effectue un contrôle d'accès, etc. — il est alors possible de voir le contenu de la réponse et de le mettre en cache. Cependant, depuis que la [transparence des certificats (CT)](/fr/docs/Web/Security/Defenses/Certificate_Transparency) s'est généralisée ces dernières années, et que certains navigateurs n'acceptent que les certificats émis avec un SCT (signed certificate timestamp), cette méthode nécessite l'application d'une politique d'entreprise. Dans un tel environnement contrôlé, il n'est pas nécessaire de se préoccuper d'un cache mandataire «&nbsp;obsolète et non mis à jour&nbsp;».

#### Caches gérés

Les caches gérés sont explicitement déployés par les développeur·euse·s de service pour décharger le serveur d'origine et fournir le contenu efficacement. Parmi les exemples, on trouve les mandataires inverses, les CDN et les service workers associés à l'API Cache.

Les caractéristiques des caches gérés varient selon le produit déployé. Dans la plupart des cas, vous pouvez contrôler le comportement du cache à l'aide de l'en-tête `Cache-Control` et de vos propres fichiers de configuration ou tableaux de bord.

Par exemple, la spécification de la mise en cache HTTP ne définit pas réellement de méthode pour supprimer explicitement un cache — mais avec un cache géré, la réponse stockée peut être supprimée à tout moment par des opérations sur le tableau de bord, des appels d'API, des redémarrages, etc. Cela permet d'adopter une stratégie de mise en cache plus proactive.

Il est également possible d'ignorer les protocoles de la spécification standard de la mise en cache HTTP au profit d'une manipulation explicite. Par exemple, il est possible de définir ce qui suit pour exclure un cache privé ou un cache mandataire, tout en utilisant votre propre stratégie pour ne mettre en cache que dans un cache géré.

```http
Cache-Control: no-store
```

Par exemple, Varnish Cache utilise une logique VCL (Varnish Configuration Language, un type de {{Glossary("DSL/Domain_specific_language", "DSL")}}) pour gérer le stockage du cache, tandis que les service workers associés à l'API Cache permettent de créer cette logique en JavaScript.

Cela signifie que si un cache géré ignore intentionnellement une directive `no-store`, il n'est pas nécessaire de le considérer comme «&nbsp;non conforme&nbsp;» à la norme. Ce qu'il faut faire, c'est éviter d'utiliser des en-têtes fourre-tout, mais lire attentivement la documentation du mécanisme de cache géré que vous utilisez, et vous assurer de contrôler correctement le cache selon les moyens fournis par le mécanisme choisi.

Notez que certains CDN fournissent leurs propres en-têtes qui ne sont efficaces que pour ce CDN (par exemple, `Surrogate-Control`). Actuellement, des travaux sont en cours pour définir un en-tête [`CDN-Cache-Control` <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9213.html) afin de standardiser ces derniers.

![Types de caches, incluant un cache privé dans le navigateur, un cache partagé (mandataire), un cache mandataire inverse et un cache partagé (géré) dans un CDN, menant au cache du serveur d'origine](https://mdn.github.io/shared-assets/images/diagrams/http/cache/type-of-cache.svg)

## Mise en cache heuristique

HTTP est conçu pour mettre en cache autant que possible, donc même si aucun `Cache-Control` n'est donné, les réponses sont stockées et réutilisées si certaines conditions sont remplies. Cela s'appelle **mise en cache heuristique**.

Par exemple, prenez la réponse suivante. Cette réponse a été mise à jour pour la dernière fois il y a 1 an.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

Il est connu de manière heuristique que le contenu qui n'a pas été mis à jour pendant une année complète n'est pas mis à jour pendant un certain temps après cela. Par conséquent, le client stocke cette réponse (malgré l'absence de `max-age`) et la réutilise pendant un certain temps. La durée de réutilisation dépend de l'implémentation, mais la spécification recommande environ 10 % (dans ce cas 0,1 an) du temps après le stockage.

La mise en cache heuristique est une solution de contournement qui est apparue avant que le support de `Cache-Control` ne soit largement adopté, et en pratique, toutes les réponses devraient définir explicitement un en-tête `Cache-Control`.

## Fraîcheur et obsolescence basées sur l'âge

Les réponses HTTP stockées ont deux états&nbsp;: **fraîche** et **obsolète**. L'état _fraîche_ indique généralement que la réponse est encore valide et peut être réutilisée, tandis que l'état _obsolète_ signifie que la réponse mise en cache a déjà expiré.

Le critère pour déterminer quand une réponse est fraîche et quand elle est obsolète est **l'âge**. En HTTP, l'âge est le temps écoulé depuis la génération de la réponse. C'est similaire au {{Glossary("TTL")}} dans d'autres mécanismes de mise en cache.

Prenons l'exemple de la réponse suivante (604800 secondes correspondent à une semaine)&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

Le cache qui a stocké la réponse exemple calcule le temps écoulé depuis la génération de la réponse et utilise le résultat comme _âge_ de la réponse.

Pour la réponse exemple, la signification de `max-age` est la suivante&nbsp;:

- Si l'âge de la réponse est _inférieur_ à une semaine, la réponse est _fraîche_.
- Si l'âge de la réponse est _supérieur_ à une semaine, la réponse est _obsolète_.

Tant que la réponse stockée reste fraîche, elle est utilisée pour satisfaire les requêtes des clients.

Lorsqu'une réponse est stockée dans un cache partagé, il est possible d'indiquer au client l'âge de la réponse. En continuant avec l'exemple, si le cache partagé a stocké la réponse pendant un jour, le cache partagé enverrait la réponse suivante aux requêtes ultérieures des clients.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800
Age: 86400

<!doctype html>
…
```

Le client qui reçoit cette réponse la trouve fraîche pour les 518400 secondes restantes, la différence entre le `max-age` de la réponse et l'`Age`.

## `Expires` ou `max-age`

En HTTP/1.0, la fraîcheur était définie par l'en-tête `Expires`.

L'en-tête `Expires` définit la durée de vie du cache en utilisant un temps explicite plutôt qu'en définissant un temps écoulé.

```http
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

Cependant, le format de l'heure est difficile à analyser, de nombreux bogues d'implémentation ont été trouvés, et il est possible d'induire des problèmes en décalant intentionnellement l'horloge système&nbsp;; par conséquent, `max-age` — pour définir un temps écoulé — a été adopté pour `Cache-Control` en HTTP/1.1.

Si les en-têtes `Expires` et `Cache-Control: max-age` sont tous deux disponibles, `max-age` est défini comme prioritaire. Il n'est donc pas nécessaire de fournir `Expires` maintenant que HTTP/1.1 est largement utilisé.

## En-tête `Vary`

La manière dont les réponses sont distinguées les unes des autres repose essentiellement sur leurs URL&nbsp;:

| URL                              | Corps de la réponse      |
| -------------------------------- | ------------------------ |
| `https://exemple.com/index.html` | `<!doctype html>...`     |
| `https://exemple.com/style.css`  | `body { ...`             |
| `https://exemple.com/script.js`  | `function main () { ...` |

Cependant, le contenu des réponses n'est pas toujours le même, même si elles ont la même URL. Surtout lorsque la négociation de contenu est effectuée, la réponse du serveur peut dépendre des valeurs des en-têtes de requête `Accept`, `Accept-Language` et `Accept-Encoding`.

Par exemple, pour le contenu en anglais retourné avec un en-tête `Accept-Language: en` et mis en cache, il est indésirable de réutiliser cette réponse mise en cache pour des requêtes ayant un en-tête `Accept-Language: ja`. Dans ce cas, vous pouvez faire en sorte que les réponses soient mises en cache séparément — en fonction de la langue — en ajoutant `Accept-Language` à la valeur de l'en-tête `Vary`.

```http
Vary: Accept-Language
```

Cela fait en sorte que le cache soit indexé en fonction d'une combinaison de l'URL de la réponse et de l'en-tête de requête `Accept-Language` — plutôt que d'être basé uniquement sur l'URL de la réponse.

| URL                              | `Accept-Language` | Corps de la réponse      |
| -------------------------------- | ----------------- | ------------------------ |
| `https://exemple.com/index.html` | `ja-JP`           | `<!doctype html>...`     |
| `https://exemple.com/index.html` | `en-US`           | `<!doctype html>...`     |
| `https://exemple.com/style.css`  | `ja-JP`           | `body { ...`             |
| `https://exemple.com/script.js`  | `ja-JP`           | `function main () { ...` |

Cependant, si vous fournissez une optimisation du contenu (par exemple, pour un design réactif) basée sur l'agent utilisateur, vous pourriez être tenté d'inclure `User-Agent` dans la valeur de l'en-tête `Vary`. Cependant, l'en-tête de requête `User-Agent` a généralement un très grand nombre de variations, ce qui réduit considérablement les chances que le cache soit réutilisé. Donc, si possible, envisagez plutôt une manière de varier le comportement en fonction de la détection des fonctionnalités plutôt qu'en fonction de l'en-tête de requête `User-Agent`.

Pour les applications qui utilisent des cookies pour empêcher les autres de réutiliser du contenu personnalisé mis en cache, vous devez définir `Cache-Control: private` au lieu de définir un cookie pour `Vary`.

## Validation

Les réponses périmées ne sont pas immédiatement supprimées. HTTP dispose d'un mécanisme permettant de transformer une réponse périmée en une réponse fraîche en interrogeant le serveur d'origine. Cela s'appelle **validation**, ou parfois, **revalidation**.

La validation est effectuée en utilisant une **requête conditionnelle** qui inclut un en-tête de requête `If-Modified-Since` ou `If-None-Match`.

### `If-Modified-Since`

La réponse suivante a été générée à 22:22:22 et a un `max-age` de 1 heure, vous savez donc qu'elle est fraîche jusqu'à 23:22:22.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600

<!doctype html>
…
```

À 23:22:22, la réponse devient périmée et le cache ne peut plus être réutilisé. La requête ci-dessous montre un client envoyant une requête avec un en-tête de requête `If-Modified-Since`, pour demander au serveur s'il y a eu des modifications depuis l'heure donnée.

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

Le serveur répond avec `304 Not Modified` si le contenu n'a pas changé depuis l'heure définie.

Comme cette réponse indique uniquement «&nbsp;aucun changement&nbsp;», il n'y a pas de corps de réponse — il n'y a qu'un code d'état — donc la taille du transfert est extrêmement petite.

```http
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

À la réception de cette réponse, le client remet la réponse périmée stockée à l'état frais et peut la réutiliser pendant l'heure restante.

Le serveur peut obtenir l'heure de modification à partir du système de fichiers du système d'exploitation, ce qui est relativement facile à faire dans le cas de la diffusion de fichiers statiques. Cependant, il existe certains problèmes&nbsp;; par exemple, le format de l'heure est complexe et difficile à analyser, et les serveurs distribués ont du mal à synchroniser les heures de mise à jour des fichiers.

Pour résoudre ces problèmes, l'en-tête de réponse `ETag` a été standardisé comme alternative.

### `ETag`/`If-None-Match`

La valeur de l'en-tête de réponse `ETag` est une valeur arbitraire générée par le serveur. Il n'y a aucune restriction sur la manière dont le serveur doit générer cette valeur, donc les serveurs sont libres de définir la valeur en fonction de n'importe quel moyen qu'ils choisissent — comme un hachage du contenu du corps ou un numéro de version.

Par exemple, si une valeur de hachage est utilisée pour l'en-tête `ETag` et que la valeur de hachage de la ressource `index.html` est `33a64df5`, la réponse est la suivante&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
ETag: "33a64df5"
Cache-Control: max-age=3600

<!doctype html>
…
```

Si cette réponse est périmée, le client prend la valeur de l'en-tête de réponse `ETag` pour la réponse mise en cache, et la place dans l'en-tête de requête `If-None-Match`, pour demander au serveur si la ressource a été modifiée&nbsp;:

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "33a64df5"
```

Le serveur retourne `304 Not Modified` si la valeur de l'en-tête `ETag` qu'il détermine pour la ressource demandée est la même que la valeur de `If-None-Match` dans la requête.

Mais si le serveur détermine que la ressource demandée doit maintenant avoir une valeur `ETag` différente, le serveur répond plutôt avec un `200 OK` et la dernière version de la ressource.

> [!NOTE]
> RFC9110 préfère que les serveurs envoient à la fois `ETag` et `Last-Modified` pour une réponse `200` si possible.
> Lors de la revalidation du cache, si `If-Modified-Since` et `If-None-Match` sont présents, alors `If-None-Match` prend la priorité pour le validateur.
> Si vous ne considérez que la mise en cache, vous pourriez penser que `Last-Modified` est inutile.
> Cependant, `Last-Modified` n'est pas seulement utile pour la mise en cache&nbsp;; c'est un en-tête HTTP standard qui est également utilisé par les systèmes de gestion de contenu (CMS) pour afficher l'heure de la dernière modification, par les robots d'indexation pour ajuster la fréquence de l'exploration, et pour d'autres usages variés.
> Donc, en considérant l'ensemble de l'écosystème HTTP, il est préférable de fournir à la fois `ETag` et `Last-Modified`.

### Force Revalidation

Si vous ne voulez pas qu'une réponse soit réutilisée, mais que vous souhaitez toujours récupérer le contenu le plus récent du serveur, vous pouvez utiliser la directive `no-cache` pour forcer la validation.

En ajoutant `Cache-Control: no-cache` à la réponse avec `Last-Modified` et `ETag` — comme indiqué ci-dessous — le client reçoit une réponse `200 OK` si la ressource demandée a été mise à jour, ou reçoit sinon une réponse `304 Not Modified` si la ressource demandée n'a pas été mise à jour.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
ETag: "deadbeef"
Cache-Control: no-cache

<!doctype html>
…
```

Il est souvent dit que la combinaison de `max-age=0` et `must-revalidate` a la même signification que `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

`max-age=0` signifie que la réponse est immédiatement périmée, et `must-revalidate` signifie qu'elle ne doit pas être réutilisée sans revalidation une fois qu'elle est périmée — donc, en combinaison, la sémantique semble être la même que `no-cache`.

Cependant, cette utilisation de `max-age=0` est un vestige du fait que de nombreuses implémentations antérieures à HTTP/1.1 étaient incapables de gérer la directive `no-cache` — et donc, pour pallier cette limitation, `max-age=0` était utilisé comme solution de contournement.

Mais maintenant que les serveurs conformes à HTTP/1.1 sont largement déployés, il n'y a aucune raison d'utiliser cette combinaison `max-age=0` et `must-revalidate` — vous devriez plutôt utiliser simplement `no-cache`.

## Ne pas mettre en cache

La directive `no-cache` n'empêche pas le stockage des réponses, mais empêche plutôt la réutilisation des réponses sans revalidation.

Si vous ne voulez pas qu'une réponse soit stockée dans un cache, utilisez `no-store`.

```http
Cache-Control: no-store
```

Cependant, en général, une exigence de «&nbsp;ne pas mettre en cache&nbsp;» se traduit en pratique par l'ensemble des circonstances suivantes&nbsp;:

- Ne pas vouloir que la réponse soit stockée par quiconque autre que le client spécifique, pour des raisons de confidentialité.
- Vouloir fournir des informations toujours à jour.
- Ne pas savoir ce qui pourrait se passer dans des implémentations obsolètes.

Dans ce contexte, `no-store` n'est pas toujours la directive la plus appropriée.

Les sections suivantes examinent les circonstances plus en détail.

### Ne pas partager avec d'autres

Il serait problématique qu'une réponse contenant du contenu personnalisé soit visible de manière inattendue par d'autres utilisateur·ice·s d'un cache.

Dans ce cas, l'utilisation de la directive `private` fait en sorte que la réponse personnalisée ne soit stockée que par le client spécifique et ne soit pas divulguée à d'autres utilisateur·ice·s du cache.

```http
Cache-Control: private
```

Dans ce cas, même si `no-store` est donné, `private` doit également être donné.

### Fournir du contenu à jour à chaque fois

La directive `no-store` empêche une réponse d'être stockée, mais ne supprime pas les réponses déjà stockées pour la même URL.

En d'autres termes, si une ancienne réponse est déjà stockée pour une URL particulière, retourner `no-store` n'empêche pas l'ancienne réponse d'être réutilisée.

Cependant, une directive `no-cache` oblige le client à envoyer une requête de validation avant de réutiliser toute réponse stockée.

```http
Cache-Control: no-cache
```

Si le serveur ne prend pas en charge les requêtes conditionnelles, vous pouvez forcer le client à accéder au serveur à chaque fois et à obtenir toujours la réponse la plus récente avec `200 OK`.

### Gérer les implémentations obsolètes

Comme solution de contournement pour les implémentations obsolètes qui ignorent `no-store`, vous pouvez voir des en-têtes «&nbsp;fourre-tout&nbsp;» tels que les suivants sont utilisés.

```http
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

Il est [recommandé <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/connectivity-navigation/how-to-prevent-caching) d'utiliser `no-cache` comme alternative pour gérer de telles implémentations obsolètes, et il n'y a pas de problème si `no-cache` est donné dès le départ, puisque le serveur reçoit toujours la requête.

Si c'est le cache partagé qui vous préoccupe, vous pouvez vous assurer d'éviter la mise en cache non intentionnelle en ajoutant également `private`&nbsp;:

```http
Cache-Control: no-cache, private
```

### Ce qui est perdu avec `no-store`

Vous pouvez penser qu'ajouter `no-store` serait la bonne façon de se désengager de la mise en cache.

Cependant, il n'est pas recommandé d'accorder `no-store` de manière libérale, car vous perdez de nombreux avantages que HTTP et les navigateurs offrent, y compris le cache arrière/avant du navigateur.

Par conséquent, pour bénéficier de l'ensemble des fonctionnalités de la plateforme web, il est préférable d'utiliser `no-cache` en combinaison avec `private`.

## Recharger et forcer le rechargement

La validation peut être effectuée pour les requêtes ainsi que pour les réponses.

Les actions **recharger** et **forcer le rechargement** sont des exemples courants de validation effectuée côté navigateur.

### Recharger

Pour récupérer d'une corruption de fenêtre ou mettre à jour vers la dernière version de la ressource, les navigateurs fournissent une fonction de rechargement pour les utilisateur·ice·s.

Une vue simplifiée de la requête HTTP envoyée lors d'un rechargement du navigateur est la suivante&nbsp;:

```http
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

(Les requêtes provenant de Chrome, Edge et Firefox ressemblent beaucoup à ce qui précède&nbsp;; les requêtes provenant de Safari sont un peu différentes.)

La directive `max-age=0` dans la requête définit la «&nbsp;réutilisation des réponses avec un âge de 0 ou moins&nbsp;» — donc, en effet, les réponses stockées intermédiairement ne sont pas réutilisées.

Par conséquent, une requête est validée par `If-None-Match` et `If-Modified-Since`.

Ce comportement est également défini dans la norme [Fetch <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch) et peut être reproduit en JavaScript en appelant `fetch()` avec le mode de cache défini sur `no-cache` (notez que `reload` n'est pas le mode approprié pour ce cas)&nbsp;:

```js
// Note : "reload" n'est pas le mode approprié pour un rechargement normal ; "no-cache" est
fetch("/", { cache: "no-cache" });
```

### Rechargement forcé

Les navigateurs utilisent `max-age=0` lors des rechargements pour des raisons de compatibilité avec les anciennes versions — car de nombreuses implémentations obsolètes avant HTTP/1.1 ne comprenaient pas `no-cache`. Mais `no-cache` est maintenant approprié dans ce cas d'utilisation, et le **rechargement forcé** est un moyen supplémentaire de contourner les réponses mises en cache.

La requête HTTP lors d'un **rechargement forcé** du navigateur est la suivante&nbsp;:

```http
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

(Les requêtes provenant de Chrome, Edge et Firefox ressemblent beaucoup à ce qui précède&nbsp;; les requêtes provenant de Safari sont un peu différentes.)

Puisqu'il ne s'agit pas d'une requête conditionnelle avec `no-cache`, vous pouvez être sûr d'obtenir un `200 OK` du serveur d'origine.

Ce comportement est également défini dans la norme [Fetch <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#http-network-or-cache-fetch) et peut être reproduit en JavaScript en appelant `fetch()` avec le mode de cache défini sur `reload` (notez que ce n'est pas `force-reload`)&nbsp;:

```js
// Note : "reload" — plutôt que "no-cache" — est le mode approprié pour un "rechargement forcé"
fetch("/", { cache: "reload" });
```

### Éviter la revalidation

Le contenu qui ne change jamais doit se voir attribuer un `max-age` long en utilisant le cache busting — c'est-à-dire en incluant un numéro de version, une valeur de hachage, etc., dans l'URL de la requête.

Cependant, lorsque l'utilisateur·ice recharge, une requête de revalidation est envoyée même si le serveur sait que le contenu est immuable.

Pour éviter cela, la directive `immutable` peut être utilisée pour indiquer explicitement que la revalidation n'est pas nécessaire, car le contenu ne change jamais.

```http
Cache-Control: max-age=31536000, immutable
```

Cela empêche une revalidation inutile lors des rechargements.

Notez que, au lieu d'implémenter cette directive, [Chrome a modifié son implémentation <sup>(angl.)</sup>](https://blog.chromium.org/2017/01/reload-reloaded-faster-and-leaner-page_26.html) de sorte que la revalidation n'est pas effectuée lors des rechargements pour les sous-ressources.

## Supprimer les réponses stockées

Il n'existe aucun moyen de supprimer les réponses sur un serveur intermédiaire qui ont été stockées avec un `max-age` long.

Imaginez que la réponse suivante de `https://exemple.com/` ait été stockée.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

Vous pouvez vouloir écraser cette réponse une fois qu'elle a expiré sur le serveur, mais il n'y a rien que le serveur puisse faire une fois que la réponse est stockée — puisque plus aucune requête n'atteint le serveur en raison du cache.

L'une des méthodes mentionnées dans la spécification consiste à envoyer une requête pour la même URL avec une méthode non sécurisée telle que `POST`, mais pour de nombreux clients, c'est difficile à faire.

L'en-tête [`Clear-Site-Data: cache`](/fr/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) et la valeur de directive peuvent être utilisés pour effacer les caches du navigateur — mais n'ont aucun effet sur les caches intermédiaires.
Sinon, les réponses restent dans le cache du navigateur jusqu'à l'expiration de `max-age`, sauf si l'utilisateur·ice effectue manuellement un rechargement, un rechargement forcé ou une action de suppression de l'historique.

La mise en cache réduit l'accès au serveur, ce qui signifie que le serveur perd le contrôle de cette URL. Si le serveur ne veut pas perdre le contrôle d'une URL — par exemple, dans le cas où une ressource est fréquemment mise à jour — vous devriez ajouter `no-cache` afin que le serveur reçoive toujours les requêtes et envoie les réponses prévues.

## Effondrement des requêtes

Le cache partagé est principalement situé avant le serveur d'origine et est destiné à réduire le trafic vers le serveur d'origine.

Ainsi, si plusieurs requêtes identiques arrivent simultanément à un cache partagé, le cache intermédiaire transmet une seule requête au nom de lui-même au serveur d'origine, qui peut ensuite réutiliser le résultat pour tous les clients. Cela s'appelle _**effondrement des requêtes**_.

L'effondrement des requêtes se produit lorsque les requêtes arrivent en même temps, donc même si `max-age=0` ou `no-cache` est donné dans la réponse, elle est réutilisée.

Si la réponse est personnalisée pour un·e utilisateur·ice particulier·e et que vous ne voulez pas qu'elle soit partagée dans l'effondrement, vous devriez ajouter la directive `private`&nbsp;:

![Effondrement des requêtes montré comme plusieurs clients envoyant des requêtes GET et un cache les consolidant en une seule GET vers l'origine. Le serveur d'origine répond avec un 200 OK que le cache partage ensuite à tous les clients.](https://mdn.github.io/shared-assets/images/diagrams/http/cache/request-collapse.svg)

## Modèles de mise en cache courants

Il existe de nombreuses directives dans la spécification `Cache-Control`, et il peut être difficile de toutes les comprendre. Mais la plupart des sites Web peuvent être couverts par une combinaison de quelques modèles.

Cette section décrit les modèles courants dans la conception des caches.

### Paramètres par défaut

Comme mentionné ci-dessus, le comportement par défaut pour la mise en cache (c'est-à-dire pour une réponse sans `Cache-Control`) n'est pas simplement «&nbsp;ne pas mettre en cache&nbsp;» mais une mise en cache implicite selon ce qu'on appelle la «&nbsp;mise en cache heuristique&nbsp;».

Pour éviter cette mise en cache heuristique, il est préférable de donner explicitement à toutes les réponses un en-tête `Cache-Control` par défaut.

Pour s'assurer que, par défaut, les dernières versions des ressources sont toujours transférées, il est courant de faire en sorte que la valeur par défaut de `Cache-Control` inclue `no-cache`&nbsp;:

```http
Cache-Control: no-cache
```

De plus, si le service utilise des cookies ou d'autres méthodes de connexion, et que le contenu est personnalisé pour chaque utilisateur·ice, il est également nécessaire de donner `private`, afin d'éviter le partage avec d'autres utilisateur·ice·s&nbsp;:

```http
Cache-Control: no-cache, private
```

### Contournement du cache

Les ressources qui fonctionnent le mieux avec la mise en cache sont les fichiers statiques immuables dont le contenu ne change jamais. Et pour les ressources qui _changent_, il est courant de changer l'URL à chaque fois que le contenu change, afin que l'unité d'URL puisse être mise en cache pendant une période plus longue.

À titre d'exemple, considérez le HTML suivant&nbsp;:

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  bonjour
</body>
```

Dans le développement web moderne, les ressources JavaScript et CSS sont fréquemment mises à jour au fur et à mesure de l'avancement du développement. De plus, si les versions des ressources JavaScript et CSS qu'un client utilise ne sont pas synchronisées, l'affichage est perturbé.

Ainsi, le HTML ci-dessus rend difficile la mise en cache de `bundle.js` et `build.css` avec `max-age`.

Par conséquent, vous pouvez servir le JavaScript et le CSS avec des URL qui incluent une partie changeante basée sur un numéro de version ou une valeur de hachage. Certaines des façons de le faire sont montrées ci-dessous.

```plain
# version dans le nom de fichier
bundle.v123.js

# version dans la requête
bundle.js?v=123

# hash dans le nom de fichier
bundle.YsAIAAAA-QG4G6kCMAMBAAAAAAAoK.js

# hash dans la requête
bundle.js?v=YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

Comme le cache distingue les ressources les unes des autres en fonction de leurs URL, le cache n'est pas réutilisé si l'URL change lorsqu'une ressource est mise à jour.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  bonjour
</body>
```

Avec cette conception, les ressources JavaScript et CSS peuvent être mises en cache pendant une longue période. Alors, combien de temps `max-age` doit-il être défini&nbsp;? La spécification QPACK fournit une réponse à cette question.

[QPACK <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc9204) est une norme pour la compression des champs d'en-tête HTTP, avec des tables de valeurs de champs couramment utilisées définies.

Certaines valeurs d'en-tête de cache couramment utilisées sont montrées ci-dessous.

```plain
36 cache-control max-age=0
37 cache-control max-age=604800
38 cache-control max-age=2592000
39 cache-control no-cache
40 cache-control no-store
41 cache-control public, max-age=31536000
```

Si vous sélectionnez l'une de ces options numérotées, vous pouvez compresser les valeurs en 1 octet lorsqu'elles sont transférées par HTTP3.

Les numéros `37`, `38` et `41` correspondent à des périodes d'une semaine, d'un mois et d'un an.

Comme le cache supprime les anciennes entrées lorsque de nouvelles entrées sont enregistrées, la probabilité qu'une réponse stockée existe encore après une semaine n'est pas très élevée — même si `max-age` est défini sur 1 semaine. Par conséquent, en pratique, il n'y a pas beaucoup de différence selon l'option choisie.

Notez que le numéro `41` a le `max-age` le plus long (1 an), mais avec `public`.

La valeur `public` a pour effet de rendre la réponse stockable même si l'en-tête `Authorization` est présent.

> [!NOTE]
> La directive `public` ne doit être utilisée que s'il est nécessaire de stocker la réponse lorsque l'en-tête `Authorization` est défini.
> Ce n'est pas nécessaire autrement, car une réponse est stockée dans le cache partagé tant que `max-age` est donné.

Si la réponse est personnalisée avec une authentification de base, la présence de `public` peut poser des problèmes. Si vous êtes préoccupé par cela, vous pouvez choisir la deuxième valeur la plus longue, `38` (1 mois).

```http
# réponse pour bundle.v123.js

# Si vous ne personnalisez jamais les réponses avec Authorization
Cache-Control: public, max-age=31536000

# Si vous ne pouvez pas en être certain
Cache-Control: max-age=2592000
```

### Validation

N'oubliez pas de définir les en-têtes `Last-Modified` et `ETag`, afin de ne pas avoir à retransmettre une ressource lors du rechargement. Il est facile de générer ces en-têtes pour des fichiers statiques pré-construits.

La valeur `ETag` ici peut être un hachage du fichier.

```http
# réponse pour bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

De plus, `immutable` peut être ajouté pour éviter la validation lors du rechargement.

Le résultat combiné est montré ci-dessous.

```http
# bundle.v123.js
HTTP/1.1 200 OK
Content-Type: text/javascript
Content-Length: 1024
Cache-Control: public, max-age=31536000, immutable
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "YsAIAAAA-QG4G6kCMAMBAAAAAAAoK"
```

Le **contournement du cache** est une technique permettant de rendre une réponse mise en cache sur une longue période en modifiant l'URL lorsque le contenu change. La technique peut être appliquée à toutes les sous-ressources, telles que les images.

> [!NOTE]
> Lors de l'évaluation de l'utilisation de `immutable` et QPACK&nbsp;:
> Si vous êtes préoccupé par le fait que `immutable` modifie la valeur prédéfinie fournie par QPACK, considérez que dans ce cas, la partie `immutable` peut être encodée séparément en divisant la valeur `Cache-Control` en deux lignes — bien que cela dépende de l'algorithme d'encodage utilisé par une implémentation QPACK particulière.

```http
Cache-Control: public, max-age=31536000
Cache-Control: immutable
```

### Ressources principales

Contrairement aux sous-ressources, les ressources principales ne peuvent pas être contournées par le cache, car leurs URL ne peuvent pas être décorées de la même manière que les URL des sous-ressources.

Si le HTML suivant lui-même est stocké, la dernière version ne peut pas être affichée même si le contenu est mis à jour côté serveur.

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  bonjour
</body>
```

Pour ce cas, `no-cache` serait approprié — plutôt que `no-store` — puisque nous ne voulons pas stocker le HTML, mais simplement qu'il soit toujours à jour.

De plus, l'ajout des en-têtes `Last-Modified` et `ETag` permet aux clients d'envoyer des requêtes conditionnelles, et un `304 Not Modified` peut être renvoyé s'il n'y a pas eu de mises à jour du HTML&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
```

Ce réglage est approprié pour le HTML non personnalisé, mais pour une réponse qui est personnalisée à l'aide de cookies — par exemple, après une connexion — n'oubliez pas de définir également `private`&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: "AAPuIbAOdvAGEETbgAAAAAAABAAE"
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly
```

Le même principe peut être appliqué à `favicon.ico`, `manifest.json`, `.well-known` et aux points de terminaison API dont les URL ne peuvent pas être modifiées à l'aide du contournement du cache.

La plupart du contenu web peut être couvert par une combinaison des deux modèles décrits ci-dessus.

### En savoir plus sur les caches gérés

Avec la méthode décrite dans les sections précédentes, les sous-ressources peuvent être mises en cache pendant une longue période en utilisant le contournement du cache, mais les ressources principales (qui sont généralement des documents HTML) ne le peuvent pas.

La mise en cache des ressources principales est difficile car, en utilisant uniquement les directives standard de la spécification HTTP Caching, il n'existe aucun moyen de supprimer activement le contenu du cache lorsque le contenu est mis à jour sur le serveur.

Cependant, c'est possible en déployant un cache géré tel qu'un CDN ou un service worker.

Par exemple, un CDN qui permet la purge du cache avec une API ou une opération de tableau de bord permettrait une stratégie de mise en cache plus agressive en stockant la ressource principale et en purgeant explicitement le cache pertinent uniquement lorsqu'une mise à jour se produit sur le serveur.

Un service worker pourrait faire de même s'il pouvait supprimer le contenu dans l'API Cache lorsqu'une mise à jour se produit sur le serveur.

Pour plus d'informations, consultez la documentation de votre CDN et consultez la [documentation sur les service workers](/fr/docs/Web/API/Service_Worker_API).

## Voir aussi

- [RFC 9111&nbsp;: Hypertext Transfer Protocol (HTTP/1.1)&nbsp;: Mise en cache <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/RFC9111)
- [Tutoriel sur la mise en cache - Mark Nottingham <sup>(angl.)</sup>](https://mnot.net/cache_docs/)
