---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
l10n:
  sourceCommit: 2f22893feecd8ef6f4d6f7fa8458cf8c1734d921
---

{{HTTPSidebar}}

L'en-tête HTTP **`Cache-Control`** contient des _directives_ (c'est-à-dire des instructions), dans les requêtes et dans les réponses, pour contrôler [la mise en cache](/fr/docs/Web/HTTP/Caching) dans les navigateurs et caches partagées (par exemple les <i lang="en">proxies</i>, CDN).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        <a href="/fr/docs/Glossary/Request_header">En-tête de requête</i>, <a href="/fr/docs/Glossary/Response_header">en-tête de réponse</i>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="/fr/docs/Glossary/Forbidden_header_name">Nom d'en-tête interdit</a></th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row"><a href="/fr/docs/Glossary/CORS-safelisted_response_header">En-tête de réponse sûr pour le CORS</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Les directives pour la mise en cache suivent les règles suivantes&nbsp;:

- Elles sont insensibles à la casse. Toutefois, l'utilisation de minuscules est recommandée, car certaines implémentations ne reconnaissent pas les directives en majuscules.
- Plusieurs directives sont séparées entre elles par des virgules.
- Certaines directives ont un argument optionnel.

### Cache directives

Le tableau qui suit indique les directives standard pour `Cache-Control`&nbsp;:

| Requête          | Réponse                  |
| ---------------- | ------------------------ |
| `max-age`        | `max-age`                |
| `max-stale`      | -                        |
| `min-fresh`      | -                        |
| -                | `s-maxage`               |
| `no-cache`       | `no-cache`               |
| `no-store`       | `no-store`               |
| `no-transform`   | `no-transform`           |
| `only-if-cached` | -                        |
| -                | `must-revalidate`        |
| -                | `proxy-revalidate`       |
| -                | `must-understand`        |
| -                | `private`                |
| -                | `public`                 |
| -                | `immutable`              |
| -                | `stale-while-revalidate` |
| `stale-if-error` | `stale-if-error`         |

Voir [le tableau de compatibilité](#compatibilité_des_navigateurs) pour leur prise en charge respective. Les agents utilisateur qui ne reconnaissent pas une directive doivent l'ignorer.

## Vocabulaire

Cette section définit les termes utilisés dans ce document, certains provenant de la spécification.

- Cache (HTTP)
  - : Une implémentation qui contient les requêtes et les réponses afin de les réutiliser pour les requêtes suivantes. Il peut s'agit d'un cache partagé ou d'un cache privé.
- Cache partagé
  - : Un cache qui existe entre le serveur d'origine et les clients (par exemple un <i lang="en">proxy</i> ou un CDN). Il stocke une seule réponse pour la réutiliser avec plusieurs utilisatrices et utilisateurs (les équipes de développement devraient donc éviter de stocker du contenu personnalisé dans un cache partagé).
- Cache privé
  - : Un cache qui existe au niveau du client. On parle également de cache local ou de cache du navigateur. Il peut stocker et réutiliser du contenu personnalisé pour une personne.
- Stockage de la réponse
  - : Stocker une réponse dans les caches lorsqu'elle peut être mise en cache. Toutefois, la réponse mise en cache n'est pas nécessairement réutilisée telle quelle (la plupart du temps, mettre en cache signifie stocker une réponse).
- Réutilisation des réponses
  - : Réutiliser des réponses mises en cache pour les requêtes suivantes.
- Revalidation de la réponse
  - : Demander au serveur d'origine si la réponse stockée est toujours [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness). Généralement, la revalidation est réalisée avec une requête conditionnelle.
- Réponse fraîche
  - : Indique que la réponse est [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness). Cela signifie en général que la réponse peut être utilisée pour les requêtes suivantes, selon les directives de la requête.
- Réponse périmée
  - : Indique que la réponse est [périmée](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness). Cela signifie en général que la réponse ne peut être réutilisée telle quelle. Le stockage du cache ne doit pas nécessairement retirer immédiatement des réponses périmées, car une revalidation pourrait modifier la réponse et la faire devenir [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) à nouveau.
- Âge
  - : Le temps écoulé depuis la génération de la réponse. Il s'agit d'un critère pour déterminer si une réponse est [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) ou [périmée](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness).

## Directives

Cette section indique les directives qui jouent un rôle pour la mise en cache, tant pour les réponses que pour les requêtes.

### Directives de réponse

#### `max-age`

La directive de réponse `max-age=N` indique que la réponse reste [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) jusqu'à _N_ secondes après la génération de la réponse.

```http
Cache-Control: max-age=604800
```

Cela indique que les caches peuvent stocker cette réponse et la réutiliser pour les requêtes suivantes tant qu'elle est [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness).

On notera que `max-age` ne correspond pas au temps écoulé depuis que la réponse a été reçue, il s'agit du temps écoulé depuis que la réponse a été générée sur le serveur d'origine.
Ainsi, si les autres caches situés sur la route réseau empruntée par la réponse stockent la réponse pendant 100 secondes (en l'indiquant avec l'en-tête de réponse `Age`), le cache du navigateur déduira 100 secondes de la durée de fraîcheur.

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

La directive de réponse `s-maxage` indique également la durée pendant laquelle la réponse est [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) (de façon analogue à `max-age`), mais s'applique spécifiquement aux caches partagés. Ceux-ci ignoreront `max-age` si `s-maxage` est présente.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

La directive de réponse `no-cache` indique que la réponse peut être stockée en cache, mais qu'elle doit être validée avec le serveur d'origine avant chaque réutilisation, même si le cache est déconnecté du serveur d'origine.

```http
Cache-Control: no-cache
```

Si vous souhaitez que les caches vérifient leur contenu à chaque mise à jour tout en réutilisant du contenu stocké, `no-cache` est la directive à utiliser.

On notera que `no-cache` ne signifie pas «&nbsp;ne pas mettre en cache&nbsp;». `no-cache` permet aux caches de stocker une réponse, mais impose une revalidation avant toute réutilisation. Si vous souhaitez effectivement ne pas _stocker_ de données pour ne pas avoir de cache du tout, il faudra utiliser la directive `no-store`.

#### `must-revalidate`

La directive de réponse `must-revalidate` indique que la réponse peut être stockée dans les caches et peut être réutilisée tant qu'elle est [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness). Si la réponse devient [périmée](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness), elle doit être revalidée avec le serveur d'origine avant de pouvoir être réutilisée.

On utilise généralement `must-revalidate` avec `max-age`.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP permet aux caches de réutiliser [des réponses périmées](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) lorsqu'ils sont déconnectés du serveur d'origine. `must-revalidate` permet d'éviter ce fonctionnement, soit la réponse enregistrée est revalidée auprès du serveur d'origine, soit une réponse 504 (<i lang="en">Gateway Timeout</i>) est générée.

#### `proxy-revalidate`

La directive de réponse `proxy-revalidate` est équivalente à `must-revalidate`, mais concerne uniquement les caches partagés.

#### `no-store`

La directive de réponse `no-store` indique qu'aucun cache (partagé ou privé) ne doit stocker la réponse.

```http
Cache-Control: no-store
```

#### `private`

La directive de réponse `private` indique que la réponse peut uniquement être enregistrée dans un cache privé (c'est-à-dire le cache local des navigateurs).

```http
Cache-Control: private
```

La directive `private` devrait être ajoutée pour le contenu personnalisé, notamment pour les réponses reçues après une authentification et pour les sessions gérées avec des <i lang="en">cookies</i>.

Si `private` est oubliée pour une réponse avec du contenu personnalisé, cette réponse pourra être enregistrée dans un cache partagé et finir par être réutilisée pour plusieurs personnes, causant ainsi une fuite d'informations personnelles.

#### `public`

La directive de réponse `public` indique que la réponse peut être enregistrée dans un cache partagé. Les réponses pour les requêtes contenant l'en-tête `Authorization` ne doivent jamais être enregistrées dans un cache partagé. Toutefois, si la directive `public` est présente, de telles réponses pourront être enregistrées dans un cache partagé.

```http
Cache-Control: public
```

En général, lorsque les pages utilisent une authentification simple (<i lang="en">Basic Auth</i>) ou par empreinte (<i lang="en">Digest Auth</i>), le navigateur envoie des requêtes avec l'en-tête `Authorization`. Cela signifie par essence que la réponse dépend d'un contrôle d'accès, limité aux personnes qui disposent de comptes adéquats, et qu'elle ne peut pas être mise en cache, même si la réponse utilise la directive `max-age`.

La directive `public` peut être utilisée afin de lever cette restriction.

```http
Cache-Control: public, max-age=604800
```

On notera que `s-maxage` ou `must-revalidate` lèvent également cette restriction.

Si une requête n'utilise pas l'en-tête `Authorization`, ou si `s-maxage` ou `must-revalidate` sont déjà utilisés pour la réponse, il n'est pas nécessaire d'utiliser `public`.

#### `must-understand`

La directive de réponse `must-understand` indique qu'un cache doit uniquement stocker la réponse s'il comprend les prérequis à la mise en cache selon le code de statut.

`must-understand` devrait être utilisée en association avec `no-store`, qui permet d'avoir un comportement proche si la première directive n'est pas prise en charge.

```http
Cache-Control: must-understand, no-store
```

Si un cache ne prend pas en charge `must-understand`, celle-ci sera ignorée. Si `no-store` est également présente, la réponse n'est pas enregistrée.

Si un cache prend en charge `must-understand`, il stocke la réponse avec une compréhension des prérequis de mise en cache selon son code de statut.

#### `no-transform`

Certains intermédiaires transforment du contenu pour différentes raisons. Par exemple, certains convertissent des images afin de réduire leur taille de transfert. Dans certains cas, il peut s'agir d'un comportement qu'on souhaite éviter.

`no-transform` indique à l'intermédiaire (qu'il s'agisse d'un cache ou non) qu'il ne faut pas transformer le contenu de la réponse.

[Google Web Light](https://developers.google.com/search/docs/advanced/mobile/web-light) est un exemple d'un tel intermédiaire. Il convertit les images afin de minimiser les données stockées en cache ou transmises sur une connexion lente et prend en charge `no-transform` comme moyen d'éviter cette transformation.

#### `immutable`

La directive de réponse `immutable` indique que la réponse ne sera pas mise à jour tant qu'elle est [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness).

```http
Cache-Control: public, max-age=604800, immutable
```

Une bonne pratique pour les ressources statiques consiste à inclure des versions/empreintes dans leurs URL et de ne jamais modifier ces ressources, mais, lorsque c'est nécessaire, de _mettre à jour_ ces ressources avec de nouvelles versions utilisant un nouveau numéro de version/une nouvelle empreinte, afin que les URL soient différentes. C'est ce qu'on appelle en anglais une stratégie de <i lang="en">cache-busting</i> (peut-être «&nbsp;casse-cache&nbsp;» en français).

```html
<script src=https://example.com/react.0.0.0.js></script>
```

Lorsqu'on recharge une page dans le navigateur, ce dernier enverra des requêtes conditionnelles pour la validation auprès du serveur d'origine. Toutefois, il n'est pas nécessaire de revalider ce type de ressources statiques, même lorsqu'on recharge une page, car elles ne sont jamais modifiées. `immutable` indique au cache que la réponse est immuable tant qu'elle est [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) et évite ces requêtes conditionnelles superflues envers le serveur.

Lorsqu'on utilise une stratégie de casse-cache pour des ressources auxquelles on applique une valeur élevée de `max-age`, on peut également utiliser `immutable` pour éviter une revalidation.

#### `stale-while-revalidate`

La directive de réponse `stale-while-revalidate` indique que le cache peut réutiliser une réponse périmée pendant qu'il la revalide dans un cache.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Dans l'exemple qui précède, la réponse est [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) pendant 7 jours (604800s). Après 7 jours, elle devient [périmée](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness), mais le cache peut être réutilisé pour les requêtes qui sont faites le jour suivant (86400s), tant que la revalidation de la réponse a lieu en arrière-plan.

La revalidation [rafraîchira](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) le cache à nouveau et la réponse apparaîtra donc comme toujours [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) aux clients pendant cette période, masquant ainsi la latence induite par une revalidation.

Si aucune requête n'a lieu pendant cette période intermédiaire, le cache devient [périmé](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) et la prochaine requête revalidera le cache normalement.

#### `stale-if-error`

La directive de réponse `stale-if-error` indique que le cache peut réutiliser une réponse [périmée](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) lorsqu'un serveur d'origine répond avec une erreur (500, 502, 503, ou 504).

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Dans l'exemple précédent, la réponse est [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) pendant 7 jours (604800s). Après 7 jours, le cache devient [périmé](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness), mais peut être utilisé jusqu'à un jour après (86400s) si le serveur répond avec une erreur.

Une fois cette période écoulée, la réponse enregistrée devient [périmée](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness). Cela signifie que le client recevra une réponse d'erreur telle que fournie par le serveur d'origine.

## Directives de requête

### `no-cache`

La directive de requête `no-cache` demande aux caches de valider la réponse auprès du serveur d'origine avant toute réutilisation.

```http
Cache-Control: no-cache
```

`no-cache` permet aux clients de demander la réponse la plus à jour, même si le cache dispose d'une réponse [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness).

Les navigateurs ajoutent généralement `no-cache` aux requêtes effectuées lors d'un **rechargement forcé** d'une page.

### `no-store`

La directive de requête `no-store` permet à un client de demander à ce qu'un cache ne stocke pas la requête et la réponse correspondante, même si la réponse du serveur d'origine pourrait être enregistrée.

```http
Cache-Control: no-store
```

On notera que la plupart des navigateurs principaux ne prennent pas en charge les requêtes avec `no-store`.

### `max-age`

La directive de requête `max-age=N` indique que le client autorise une réponse enregistrée qui est générée sur le serveur d'origine dans les `N` secondes, où `N` est un nombre positif (pouvant être `0`).

```http
Cache-Control: max-age=3600
```

Dans l'exemple ci-avant, si la réponse avec `Cache-Control: max-age=604800` a été générée plus de trois heures auparavant (durée calculée à partir de la directive `max-age` et de l'en-tête `Age`), le cache ne pourrait pas réutiliser cette réponse.

La plupart des navigateurs utilisent cette directive pour le **rechargement**, comme expliqué après.

```http
Cache-Control: max-age=0
```

`max-age=0` est une alternative à `no-cache`, car de nombreuses (et anciennes) implémentations de cache (HTTP/1.0) n'implémentent pas `no-cache`. Les navigateurs récents continuent d'utiliser `max-age=0` pour le rechargement à des fins de rétro-compatibilité, utilisant `no-cache` pour un rechargement forcé.

Si la valeur de `max-age` est négative (par exemple `-1`) ou n'est pas un entier (par exemple, `3599.99`), le comportement pour la mise en cache n'est pas défini. Toutefois, la section sur [le calcul pour la durée de la fraîcheur](https://httpwg.org/specs/rfc7234.html#calculating.freshness.lifetime) de la spécification HTTP indique&nbsp;:

> Les caches sont incités à considérer les réponses portant des informations de fraîcheur invalides comme étant périmées.

Autrement dit, pour toute valeur de `max-age` qui n'est ni entière, ni positive, on incite à traiter la valeur comme si elle était `0`.

### `max-stale`

La directive de requête `max-stale=N` indique que le client permet l'utilisation d'une réponse enregistrée [périmée](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) dans les `N` secondes.

```http
Cache-Control: max-stale=3600
```

Dans le cas précédent, si la réponse avec `Cache-Control: max-age=604800` a été générée plus de trois heures auparavant (durée calculée avec `max-age` et l'en-tête `Age`), le cache ne pourrait pas réutiliser cette réponse.

Les clients peuvent utiliser cet en-tête lorsque le serveur d'origine est inaccessible ou trop lents à répondre afin d'accepter les réponses mises en cache, même si elles sont un peu vieilles.

On notera que la plupart des navigateurs principaux ne prennent pas en charge les requêtes avec `max-stale`.

### `min-fresh`

La directive de requête `min-fresh=N` indique que le client permet d'utiliser une réponse enregistrée qui est [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) pendant au moins `N` secondes.

```http
Cache-Control: min-fresh=600
```

Dans l'exemple qui précède, si la réponse avec `Cache-Control: max-age=3600` avait été enregistrée en cache 51 minutes auparavant, le cache ne pourrait pas réutiliser cette réponse.

Les clients peuvent utiliser cet en-tête pour demander une réponse qui soit [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness), **et** qui ne soit pas mise à jour pour une durée donnée.

On notera que la plupart des navigateurs principaux ne prennent pas en charge les requêtes avec `min-fresh`.

### `no-transform`

Équivalent à `no-transform` telle que définie pour les réponses, mais ici pour les requêtes.

### `only-if-cached`

Le client indique que le cache devrait obtenir une réponse déjà mise en cache. Si un cache possède une réponse enregistrée, celle-ci est réutilisée.

## Cas d'usage

### Empêcher le stockage

Si on ne souhaite pas qu'une réponse puisse être enregistrée en cache, on utilisera la directive `no-store`.

```http
Cache-Control: no-store
```

On notera que `no-cache` signifie plutôt que la réponse peut être enregistrée en cache mais pas réutilisée sans revalidation. Cette directive n'empêche donc pas qu'une réponse soit stockée.

```http example-bad
Cache-Control: no-cache
```

En théorie, si les directives rentrent en conflit, c'est la plus restrictive qui est respectée. Aussi, le premier exemple qui inutilement verbeux, car `private`, `no-cache`, `max-age=0` et `must-revalidate` sont en conflit avec `no-store`.

```http example-bad
# Conflit entre les directives
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate
```

```http example-good
# Équivalent à
Cache-Control: no-store
```

### Mise en cache des ressources statiques et partie de casse-cache

Lorsqu'on compile des ressources statiques avec des suffixes de version ou d'empreinte, cela permet de gérer plus simplement le cache et surtout sa mise à jour.

Ainsi&nbsp;:

```html example-bad
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

La bibliothèque React pourra changer de version lors d'une mise à jour, et `hero.png` pourra aussi évoluer si l'image est éditée. Il est donc difficile de stocker ces fichiers tels quels dans un cache en le gérant avec `max-age`.

Dans un tel scénario, on peut régler le problème de cache en suffixant le nom du fichier avec la version de la bibliothèque et en incluant une empreinte de l'image dans son URL.

```html example-good
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Avec ce format, on peut ajouter une valeur élevée pour `max-age` et la directive `immutable`, car le contenu ne changera jamais pour une URL donnée.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Lorsqu'on met à jour la bibliothèque ou qu'on édite l'image, le nouveau contenu aura une nouvelle URL et les caches ne seront pas réutilisés. C'est ce qu'on appelle en anglais le «&nbsp;<i lang="en">cache-busting</i>&nbsp;», qu'on pourrait traduire en français, en étant taquin par&nbsp;: «&nbsp;casse-cache&nbsp;».

On utilisera `no-cache` pour s'assurer que la réponse HTML elle-même n'est pas cachée sans revalidation. Cela permettra au client de recevoir correctement une nouvelle version du fichier HTML et les ressources correspondants.

```http
# /index.html
Cache-Control: no-cache
```

Si le service de `index.html` est contrôlé par une authentification (simple ou avec empreinte), les fichiers situés sous `/assets` ne sont pas enregistrés dans le cache partagé. Si les fichiers sous `/assets/` peuvent en réalité être enregistrés dans un cache partagé, il faudra indiquer une des directives suivantes&nbsp;: `public`, `s-maxage`, ou `must-revalidate`.

### Toujours obtenir un contenu à jour

Pour le contenu généré dynamiquement ou pour le contenu statique qui est souvent mis à jour, on voudra que la personne reçoive la version la plus à jour.

Si on ne précise pas d'en-tête `Cache-Control` alors qu'on souhaite ne pas mettre en cache la réponse, on pourra obtenir des résultats inattendus. En effet, par défaut, un cache peut décider d'une mise en cache en fonction d'heuristiques. Si on souhaite appliquer des règles pour la mise en cache, il faudra les préciser explicitement avec l'en-tête `Cache-Control`.

Ajouter la directive `no-cache` à la réponse entraînera la revalidation du serveur, et une réponse [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) sera servie à chaque fois, et si le client dispose déjà d'une nouvelle réponse, le serveur répondra simplement `304 Not Modified`.

```http
Cache-Control: no-cache
```

La plupart des caches HTTP/1.0 ne prennent pas en charge la directive `no-cache`, et historiquement, `max-age=0` a été utilisé comme contournement. Toutefois, `max-age=0` pouvait causer la réutilisation d'une [réponse périmée](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) lorsque le cache était déconnecté du serveur d'origine. `must-revalidate` pallie ce problème. C'est pourquoi, ce qui suit est équivalent à `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Ceci étant écrit, avec un cache moderne, il suffit d'utiliser `no-cache` à la place.

### Supprimer les informations déjà enregistrées en cache

Malheureusement, il n'existe pas de directives pour supprimer les réponses déjà enregistrées dans les caches.

Imaginons qu'un client ou qu'un cache enregistre une réponse [fraîche](/fr/docs/Web/HTTP/Caching#fraîcheur_freshness) pour un chemin donné et qu'il n'effectue aucune requête vers le serveur. Il n'y a rien que le serveur pourrait faire à ce moment.

Sinon, `Clear-Site-Data` peut nettoyer le cache du navigateur pour un site. Mais cela a ses limites, toutes les réponses stockées pour un site sont supprimées, et cela ne s'applique qu'aux navigateurs, pas aux caches partagés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Mise en cache avec HTTP](/fr/docs/Web/HTTP/Caching)
- [Tutoriel sur la mise en cache pour les équipes web](https://www.mnot.net/cache_docs/)
- [Bonnes pratiques pour la mise en cache et pièges liés à `max-age` (en anglais)](https://jakearchibald.com/2016/caching-best-practices/)
- [`Cache-Control` pour les civils (en anglais)](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 7234 — Hypertext Transfer Protocol (HTTP/1.1)&nbsp;: mise en cache (en anglais)](https://httpwg.org/specs/rfc7234.html)
- [RFC 5861 — Extensions HTTP à `Cache-Control` pour le contenu périmé (en anglais)](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 — Réponses HTTP immuables (en anglais)](https://httpwg.org/specs/rfc8246.html)
