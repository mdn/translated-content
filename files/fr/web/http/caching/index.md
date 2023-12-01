---
title: Mise en cache HTTP
slug: Web/HTTP/Caching
---

{{HTTPSidebar}}

Les performances des sites et applications web peuvent être significativement améliorées en réutilisant les ressources déjà collectées précédemment. Les caches web réduisent la latence et le trafic du réseau, et ainsi diminuent le temps nécessaire à l'affichage de la représentation d'une ressource. En utilisant la mise en cache HTTP, les sites web deviennent plus réactifs.

## Différents types de caches

La mise en cache est une technique qui stocke une copie d'une ressource donnée et la renvoie quand elle est demandée. Quand un cache web a une ressource demandée dans son espace de stockage, il intercepte la requête et renvoie sa copie au lieu de la re-télécharger depuis le serveur d'origine. Cela a plusieurs avantages&nbsp;: le cache réduit la charge du serveur qui n'a pas besoin de servir tous les clients lui-même, et il améliore la performance en étant plus proche du client, par exemple, cela prend moins de temps pour transmettre à nouveau la ressource. Pour un site web, c'est un composant majeur pour atteindre de hautes performances. Cependant, il doit être configuré correctement, car toutes les ressources ne restent pas éternellement inchangées&nbsp;: il est important de mettre une ressource en cache seulement jusqu'à ce qu'elle change, pas plus longtemps.

Il y a différents types de caches, qui peuvent être groupés en deux principales catégories&nbsp;: les caches privés et les caches partagés. Un _cache partagé_ est un cache qui stocke les réponses pour qu'elles soient réutilisées par plus d'un utilisateur. Un _cache privé_ est dédié à un seul utilisateur. Cette page aborde principalement les caches de navigateur et de proxy, mais il existe aussi des caches de passerelle, de CDN, les caches de proxy inversés et les répartiteurs de charge qui sont déployés sur les serveurs web pour une meilleure fiabilité, une meilleure performance et une meilleure évolutivité des sites et applications web.

![Ce que permet un cache, avantages et inconvénients des caches privés ou partagés.](http_cache_type.png)

### Caches de navigateur privés

Un cache privé est dédié à un seul utilisateur. Il se peut que vous ayez déjà vu les termes «&nbsp;mise en cache&nbsp;» dans les paramètres de votre navigateur. Un cache de navigateur contient tous les documents téléchargés via [HTTP](/fr/docs/Web/HTTP) par l'utilisateur. Ce cache est utilisé pour rendre les documents visités disponibles à la navigation via les boutons précédent / suivant, la sauvegarde, l'affichage du code source, etc. sans nécessiter un aller-retour au serveur supplémentaire. De la même manière, il améliore la navigation hors-ligne de contenu en cache.

### Caches de proxy partagés

Un cache partagé est un cache qui stocke les réponses pour qu'elles soient réutilisées par plus d'un utilisateur. Par exemple, un fournisseur d'accès à Internet ou votre entreprise peut avoir mis en place un proxy web au sein de son infrastructure de réseau local pour servir des utilisateurs multiples, de sorte que les ressources populaires sont réutilisées plusieurs fois, réduisant le trafic réseau et la latence.

## Cibles des opérations de cache

La mise en cache HTTP est optionnelle, mais réutiliser une ressource en cache est généralement souhaitable. Cependant, les caches HTTP communs se limitent typiquement à mettre en cache les réponses à des requêtes {{HTTPMethod("GET")}} et peuvent décliner les autres méthodes. La clé de cache primaire consiste en la méthode de requête et l'URI ciblée (souvent, seule l'URI est utilisée, car seules des requêtes GET sont ciblées par la mise en cache). Voici des formes courantes d'entrées de cache&nbsp;:

- Résultat positif de requête de lecture : une réponse {{HTTPStatus(200)}} (OK) à une requête {{HTTPMethod("GET")}} contenant une ressource telle qu'un document HTML, une image ou un fichier.
- Redirection permanente&nbsp;: une réponse {{HTTPStatus(301)}} _(Moved Permanently)._
- Réponse d'erreur&nbsp;: une page de résultat {{HTTPStatus(404)}} _(Not Found)_.
- Résultat incomplet&nbsp;: une réponse {{HTTPStatus(206)}} _(Partial Content)_.
- Réponses autres que {{HTTPMethod("GET")}} si quelque chose est défini comme pouvant être utilisé comme clé de cache.

Une entrée de cache peut aussi consister en de multiples réponses stockées différenciées par une clé secondaire, si la requête fait l'objet de négociation de contenu. Pour plus de détails, voir les informations à propos de l'en-tête {{HTTPHeader("Vary")}} [ci-dessous](#Varying_responses).

## Contrôle de la mise en cache

### L'en-tête Cache-control

Le {{HTTPHeader("Cache-Control")}} HTTP/1.1 Le champ d'en-tête général est utilisé pour spécifier les directives pour les mécanismes de cache dans les requêtes et les réponses. Utilisez cet en-tête pour définir vos stratégies de mise en cache avec la variété de directives fournies.

#### Pas du tout de cache mémoire

Le cache ne doit rien stocker concernant la demande du client ou la réponse du serveur. Une demande est envoyée au serveur et une réponse complète est téléchargée à chaque fois.

```
Cache-Control: no-store
Cache-Control: no-cache, no-store, must-revalidate
```

#### Pas de cache

Un cache enverra la demande au serveur d'origine pour validation avant de publier une copie en cache.

```
Cache-Control: no-cache
```

#### Caches privées et publiques

La directive "public" indique que la réponse peut être mise en cache par n'importe quel cache. Cela peut être utile si les pages avec une authentification HTTP ou des codes d'état de réponse qui ne sont pas normalement mis en cache doivent maintenant être mis en cache. En revanche, "privé" indique que la réponse est destinée à un seul utilisateur et ne doit pas être stockée par un cache partagé. Un cache de navigateur privé peut stocker la réponse dans ce cas.

```
Cache-Control: private
Cache-Control: public
```

#### Expiration

La directive la plus importante ici est "max-age = \<secondes>", qui correspond au temps maximum pendant lequel une ressource est considérée comme nouvelle. Contrairement à {{HTTPHeader ("Expires")}}, cette directive est relative à l'heure de la demande. Pour les fichiers de l'application qui ne changeront pas, vous pouvez généralement ajouter une mise en cache agressive. Cela inclut les fichiers statiques tels que les images, les fichiers CSS et les fichiers JavaScript, par exemple.

Pour plus de détails, voir aussi la section [Freshness](#Freshness) ci-dessous..

```
Cache-Control: max-age=31536000
```

#### Validation

Lors de l'utilisation de la directive "must-revalidate", le cache doit vérifier l'état des ressources obsolètes avant de l'utiliser, et celles qui ont expiré ne doivent pas être utilisées. Pour plus de détails, voir la section [Validation](#Cache_validation) ci-dessous.

```
Cache-Control: must-revalidate
```

### L'en-tête `Pragma`

{{HTTPHeader ("Pragma")}} est un en-tête HTTP / 1.0. Il n'est pas spécifié pour les réponses HTTP et ne constitue donc pas un remplacement fiable pour l'en-tête général HTTP / 1.1 Cache-Control, bien qu'il se comporte de la même manière que Cache-Control: no-cache, si le champ d'en-tête Cache-Control est omis dans une requête. Utilisez Pragma uniquement pour une compatibilité ascendante avec les clients HTTP / 1.0.

## Fraîcheur (Freshness)

Une fois que la ressource est mise en mémoire dans le cache, elle pourrait théoriquement être servie éternellement par le cache. Les caches ont une capacité de stockage limitée donc les objets en sont périodiquement enlevés. Ce procédé est appelé éviction de cache ("_cache eviction"_). Certaines ressources peuvent changer sur le serveur et le cache doit donc être mis à jour. Comme HTTP est un protocole serveur-client, les serveurs peuvent informer les caches et les clients quand une ressource est modifiée, ils doivent communiquer un temps d'expiration de la ressource. Avant cette expiration, la ressource est considérée "fraîche" (fresh => freshness); Aprés son expiration, elle est considérée périmée (_stale_). Les algoritmes d'éviction privilégient souvent les ressources fraîches. Notez qu'une ressource "périmée" n'est ni éjectée ni ignorée; quand le cache reçoit une requête pour une ressource périmée, il transmet cette requête avec un {{HTTPHeader("If-None-Match")}} pour vérifier si elle est quand même fraîche. Si c'est le cas, le serveur retourne en en-tête un statut {{HTTPStatus("304")}} (Not Modified) sans renvoyer le corps de la ressource demandée, épargnant ainsi un peu de bande passante.

Ici un exemple de ce processus avec un cache de proxy partagé :

![Show how a proxy cache acts when a doc is not cache, in the cache and fresh, in the cache and stale.](http_staleness.png)

Le calcul de la durée de vie de la fraîcheur est basé sur plusieurs en-têtes. Si une en-tête "`Cache-control: max-age=N`" est spécifiée, alors la durée de vie est égale à N. Si cette en-tête est absente (ce qui est souvent le cas), on vérifie si une en-tête {{HTTPHeader("Expires")}} est présente. Si ce `Expires` existe, alors sa valeur moins la valeur de l'en-tête {{HTTPHeader("Date")}} détermine la durée de vie de la fraîcheur. Finalement, si aucune en-tête n'est présente, on en cherche une {{HTTPHeader("Last-Modified")}} et si elle est présente, alors la durée de vie de la fraîcheur du cache est égale à la valeur de l'en-tête `Date` moins la valeur de l'en-tête `Last-modified` divisée par 10.

Le temps d'expiration s'organise comme ceci :

```
expirationTime = responseTime + freshnessLifetime - currentAge
```

Où `responseTime` est le moment auquel a été reçue la réponse selon le navigateur.

### Ressources revues et corrigées

Plus nous utilisons les ressources en cache, mieux se porteront la "responsivité" et les performances d'un site Web. Pour optimiser ceci, les bonnes pratiques recommandent de fixer les temps d'expiration aussi loin que possible dans le futur. C'est possible avec des ressources mises à jour régulièrement ou très souvent mais ça devient problématique pour les ressources mises à jour très rarement. Ce sont les ressources qui bénéficieraient au mieux de la mise en cache mais cela les rend difficiles à mettre à jour. C'est typique des ressources techniques incluses ou liées depuis chaque page web : les fichiers JavaScript et CSS ne changent pas fréquemment mais quand ils changent, vous voulez qu'ils soient mis à jour au plus vite.

Les développeurs Web ont inventé une technique que Steve Sounders a appelée _revving_ ([source](https://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/)). Les fichiers rarement mis à jour sont nommés d'une maniére spécifique : dans leur URL, habituellement dans le nom de fichier, est ajouté un numéro de révision (ou version). Comme ceci, chaque nouvelle révision / version de la ressource est considérée comme une ressource elle-même, qui ne change jamais et qui peut avoir un temps d'expiration très éloigné dans le futur. En général un an ou plus. Dans le but d'avoir les nouvelles versions, tous les liens doivent être changés. C'est l'inconvénient de cette méthode : une complexité additionnelle habituellement prise en charge par la chaîne d'outils de développeurs Web. Quand les ressources qui ne sont pas mises à jour fréquemment changent, elles induisent un changement supplémentaire aux ressources régulièrement rafraîchies. Quand elles sont lues, les nouvelles versions des autres sont lues aussi.

Cette technique a un avantage de plus : mettre à jour deux ressources en cache en même temps ne fera pas qu'une version périmée d'une des ressources sera utilisée avec la nouvelle version de l'autre. C'est très important quand les sites ont des feuilles de style CSS ou des scripts JS qui ont des dépendances mutuelles c'est-à-dire qui dépendent l'un de l'autre parce qu'ils se réfèrent aux mêmes éléments HTML.

![How the revved cache mechanism works.](http_revved_fix_typo.png)

La version de révision ajoutée à la ressource révisée n'a pas à être sous une forme classique de chaîne de version comme 1.1.3, ou une suite monotone de chiffres. Cela peut être n'importe quoi qui prévienne une collision : un hash ou une date.

## Validation de cache

La revalidation est ciblée quand l'utilisateur clique le bouton de rechargement (actualisation). Elle est aussi ciblée pendant une navigation normale si la réponse en cache inclus l'en-tête "`Cache-control: must-revalidate`". Un autre facteur est la préférence des validations de cache, paramétrées dans le panneau des préférences dans `Advanced->Cache`. Il y a une option pour forcer la validation chaque fois qu'un document est chargé.

Quand on arrive au moment d'expiration d'un document en cache, il est soit validé soit redemandé. La validation ne peut intervenir que si le serveur a fourni soit un validateur fort _(strong validator_) soit un faible (_weak validator_).

### ETags

L'en-tête réponse {{HTTPHeader("ETag")}} est une valeur _"opaque-to-the-user agent"_ qui peut être utilisée comme un validateur fort. Cela signifie que l'agent-utilisateur HTTP, comme un navigateur, par exemple, ne sait pas ce que cette chaîne représente et ne peut prévoir quelle pourrait être sa valeur. Si l'en-tête `ETag` est une partie de la réponse pour une ressource, le client peut délivrer un {{HTTPHeader("If-None-Match")}} dans l'en-tête des futures requêtes, dans le but de valider les ressources en cache.

L'en-tête de réponse {{HTTPHeader("Last-Modified")}} peut être utilisée comme un validateur faible. Il est dit "faible" car il a une précision à la seconde prés. Si l'en-tête `Last-Modified` est présente dans une réponse, alors le client peut délivrer une en-tête de requête {{HTTPHeader("If-Modified-Since")}} pour valider le document en cache.

Quand une requête en validation est faite, le serveur peut : soit ignorer la requête en validation et répondre avec un normal {{HTTPStatus(200)}} `OK`, ou bien retourner un statut {{HTTPStatus(304)}} `Not Modified` (avec un corps de réponse vide) pour informer le navigateur d'utiliser sa copie en cache. La dernière réponse peut aussi contenir les en-têtes qui mettent à jour le temps d'expiration du document en cache.

## Varier les réponses

L'en-tête de réponse HTTP {{HTTPHeader("Vary")}} détermine comment répondre aux futures en-têtes de requêtes et décider s'il faut utiliser une réponse en cache plutôt qu'en demander une fraîche au serveur d'origine.

Quand un cache reçoit une requête qui peut être satisfaite par une réponse en cache qui a un champ d'en-tête `Vary` il ne devra pas utiliser cette réponse à moins que tous les champs d'en-tête cités dans l'en-tête `Vary` ne soient communs aux deux : la requête originale (en cache) et la nouvelle requête.

![The Vary header leads cache to use more HTTP headers as key for the cache.](http_vary.png)

Cela peut être très utile pour servir du contenu dynamique par exemple. Quand on se sert de l'en-tête `Vary: User-Agent`, les serveurs de cache devront considérer l'agent utilisateur pour décider de servir la page du cache. Si vous servez du contenu varié aux utilisateurs de mobiles, cela vous aidera à éviter qu'un cache puisse servir, par erreur, une version "Desktop" de votre site. En plus, cela aidera Google et d'autres moteurs de recherche à découvrir la version mobile d'une page et peut aussi les avertir qu'aucun "masquage" ([Cloaking](https://en.wikipedia.org/wiki/Cloaking)) n'est à craindre.

```
Vary: User-Agent
```

Parce que la valeur d'en-tête {{HTTPHeader("User-Agent")}} est différente ("varie") pour les clients mobiles ou Bureau, les caches ne seront pas utilisés pour servir du contenu mobile à un utilisateur "Desktop" et vice-versa.

## Voir aussi

- [RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://tools.ietf.org/html/rfc7234)
- [Caching Tutorial – Mark Nottingham](https://www.mnot.net/cache_docs)
- [HTTP caching – Ilya Grigorik](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
- [RedBot](https://redbot.org/), un outli pour vérifier vos en-têtes HTTP relatives au cache.
