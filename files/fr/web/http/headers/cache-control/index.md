---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
tags:
  - Cache-Control
  - General Header
  - HTTP
  - HTTP Headers
  - Reference
translation_of: Web/HTTP/Headers/Cache-Control
---
{{HTTPSidebar}}

L'en-tête HTTP **`Cache-Control`** contient des directives (ou instructions) pour la [mise en cache](/fr/docs/Web/HTTP/Cache) tant dans les requêtes que dans les réponses. Une directive donnée dans une requête ne signifie pas que la même directive doit se trouver dans la réponse.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Pour être valables, les directives de mise en cache doivent respecter les règles suivante :

- Il est recommandé de ne pas faire de distinction entre les majuscules et les minuscules..
- Les directives multiples sont séparées par des virgules.
- Certaines directives ont un argument optionnel, qui peut être soit un _jeton_, soit une chaîne de caractères entre guillemets. (Voir les spécifications pour les définitions)

### Règles de cache des requêtes

Les règles standard `Cache-Control` suivantes peuvent être utilisées par un client HTTP dans une requête :

    Cache-Control: max-age=<seconds>
    Cache-Control: max-stale[=<seconds>]
    Cache-Control: min-fresh=<seconds>
    Cache-Control: no-cache
    Cache-Control: no-store
    Cache-Control: no-transform
    Cache-Control: only-if-cached

### Règles de cache des réponses

Les règles standard `Cache-Control` suivantes peuvent être utilisées par un serveur HTTP dans une réponse :

    Cache-Control: must-revalidate
    Cache-Control: no-cache
    Cache-Control: no-store
    Cache-Control: no-transform
    Cache-Control: public
    Cache-Control: private
    Cache-Control: proxy-revalidate
    Cache-Control: max-age=<seconds>
    Cache-Control: s-maxage=<seconds>

### Extensions de `Cache-Control`

Les directives Extension `Cache-Control` ne font pas partie du document sur les normes de base de la mise en cache HTTP. Vérifiez leur prise en charge dans la [table de compatibilité](#Browser_compatibility) ; les agents-utilisateurs qui ne les reconnaissent pas doivent les ignorer.

    Cache-Control: immutable
    Cache-Control: stale-while-revalidate=<seconds>
    Cache-Control: stale-if-error=<seconds>

## Directives

### Possibilité de mise en cache

Une réponse est normalement mise en cache par le navigateur si

- il a un code de statut de [`301`](/fr/docs/Web/HTTP/Status/301), [`302`](/fr/docs/Web/HTTP/Status/302), [`307`](/fr/docs/Web/HTTP/Status/307), [`308`](/fr/docs/Web/HTTP/Status/308), or [`410`](/fr/docs/Web/HTTP/Status/410) **et**
- `Cache-Control` n'a pas de `no-store`, ou _s'il s'agit d'un mandataire_, il n'a pas d'adresse `privée` **et**
- [`Authorization`](/fr/docs/Web/HTTP/Headers/Authorization) n'est pas fixée
- soit

  - a un code de statut de [`301`](/fr/docs/Web/HTTP/Status/301), [`302`](/fr/docs/Web/HTTP/Status/302), [`307`](/fr/docs/Web/HTTP/Status/307), [`308`](/fr/docs/Web/HTTP/Status/308), ou [`410`](/fr/docs/Web/HTTP/Status/410) **ou**
  - a un `public`, `max-age` ou `s-maxage` dans `Cache-Control` **ou**
  - a [`Expires`](/fr/docs/Web/HTTP/Headers/Expires) fixé

<!---->

- `public`
  - : Indique que la réponse peut être mise en cache par n'importe quel cache.
- `private`
  - : Indique que la réponse ne doit être mise en cache que pour un utilisateur donné et ne doit donc pas être mise en cache par un cache partagé.
- `no-cache`
  - : Indique de renvoyer systématiquement la requête au serveur et ne servir une éventuelle version en cache que dans le cas où le serveur le demande.
- `no-store`
  - : La réponse **ne** peut être stockée dans _aucune_ mémoire cache. Bien que d'autres directives puissent être définies, c'est la seule directive dont vous avez besoin pour empêcher les réponses en cache sur les navigateurs modernes. `max-age=0` **est déjà implicite**. **La définition de la directive** `must-revalidate` **n'a pas de sens**, car pour passer la revalidation, vous devez stocker la réponse dans un cache, ce qu'empêche `no-store`. **Ne pas copier-coller les spécifications d'Internet Explorer** `pre-check=0,post-check=0` si vous le voyez en ligne, car il est entièrement ignoré, ce que confirme le [tweet du développeur Edge](https://twitter.com/ericlaw/status/685201170260819968).

### Expiration

- `max-age=<secondes>`
  - : Indique la durée pendant laquelle la ressource doit être considérée comme valide (non expirée). Contrairement à `expires`, la durée indiquée dans cette directive commence à la date de la requête.
- `s-maxage=<secondes>`
  - : Indique une valeur pour écraser les valeurs définies par `max-age` ou `Expires` pour les caches partagés (comme les proxies). Il est donc ignoré par les caches privés (dont les navigateurs).
- `max-stale[=<secondes>]`
  - : Indique que le client accepte une réponse expirée. Une valeur optionnelle permet d'indiquer la durée maximale depuis laquelle la réponse peut être expirée mais acceptée quand même.
- `min-fresh=<secondes>`
  - : Indique que le client demande une réponse qui soit valide pour au moins la durée demandée (dont la date d'expiration est supérieure à la date actuelle plus la durée spécifiée).
- `stale-while-revalidate=<secondes>` {{experimental_inline}}
  - : Indique au cache de renvoyer les données en cache même si elles sont expirée depuis une durée inférieure à la durée spécifiée dans l'en-tête. Dans ce cas, le cache doit renvoyer la requête au serveur pour rafraîchir les données.
- `stale-if-error=<secondes>` {{experimental_inline}}
  - : Indique au cache de renvoyer les données en cache s'il y a une erreur pendant la récupération des données auprès du serveur et que la version en cache est expirée depuis une durée inférieure à celle spécifiée dans l'en-tête.

### Revalidation et rechargement

- `must-revalidate`
  - : Le cache doit refaire une requête dans le cas où les données sont expirées afin de les mettre à jour s'il y a lieu (il reste parfaitement possible que le serveur réponde avec les mêmes données).
- `proxy-revalidate`
  - : Comme pour `must-revalidate`, mais force la valeur pour les caches partagés. Cette valeur est ignorée par les caches locaux.
- `immutable`
  - : Indique que les données renvoyées peuvent être servies même si elles sont expirées sans aucune validation et même si le client fait une demande explicite de rafraîchissement. Cette option est a priori uniquement adaptée si les contenus ne sont jamais modifiés mais toujours stockés à une URI différente (par exemple en utilisant un hash du contenu). Les clients qui ne gèrent pas cette directive l'ignorent. Dans le cas de Firefox, cette option est aussi ignorée pour les contenus qui ne sont pas servis en HTTPS. Pour plus d'informations, on pourra se référer à [un blog en anglais](http://bitsup.blogspot.de/2016/05/cache-control-immutable.html).

### Autres

- `no-transform`
  - : Aucune conversion ou transformation ne devraient être réalisée sur la ressource. Ainsi, les en-tête `Content-Encoding`, `Content-Range` et `Content-Type` ne devraient jamais être modifiés par un proxy (serveur mandataire). Un proxy non-transparent pourrait, en l'absence de cet en-tête, convertir ou compresser (avec pertes) des images pour réduire la place occupée en cache ou diminuer le volume de données à transférer sur un lien lent.
- `only-if-cached`
  - : Réglé par le _client_ pour indiquer "ne pas utiliser le réseau" pour la réponse. Le cache doit soit répondre en utilisant une réponse stockée, soit répondre avec un code d'état [`504`](/fr/docs/Web/HTTP/Status/504). Les en-têtes conditionnels tels que `If-None-Match` ne doivent pas être définis. Il n'y a aucun effet si `only-if-cached` est défini par un serveur dans le cadre d'une réponse.

## Exemples

### Prévention de la mise en cache

Pour désactiver la mise en cache, vous pouvez envoyer l'en-tête de réponse suivant. En outre, voir aussi les en-têtes `Expires` et `Pragma`.

```plain example-good
Cache-Control: no-store
```

```plain example-bad
Cache-Control: private,no-cache,no-store,max-age=0,must-revalidate,pre-check=0,post-check=0
```

### Mise en cache d'actifs statiques

Pour les fichiers de l'application qui ne seront pas modifiés, vous pouvez généralement ajouter une mise en cache agressive en envoyant l'en-tête de réponse ci-dessous. Cela inclut les fichiers statiques qui sont servis par l'application comme les images, les fichiers CSS et les fichiers JavaScript, par exemple. En outre, voir l'en-tête `Expires`.

    Cache-Control: public, max-age=604800, immutable

### Nécessitant une revalidation

Le fait de spécifier no-cache ou `max-age=0` indique que les clients peuvent mettre une ressource en cache et doivent la revalider à chaque fois avant de l'utiliser. Cela signifie que la requête HTTP se produit à chaque fois, mais qu'elle peut sauter le téléchargement du corps HTTP si le contenu est valide.

    Cache-Control: no-cache
    Cache-Control: no-cache, max-age=0
    Cache-Control: no-cache, max-age=0, stale-while-revalidate=300

## Spécifications

| Specification                                                                        | Status   | Comment            |
| ------------------------------------------------------------------------------------ | -------- | ------------------ |
| {{RFC(8246, "HTTP Immutable Responses")}}                             | IETF RFC |                    |
| {{RFC(7234, "Hypertext Transfer Protocol (HTTP/1.1): Caching")}} | IETF RFC |                    |
| {{RFC(5861, "HTTP Cache-Control Extensions for Stale Content")}} | IETF RFC | Initial definition |

## Compatibilité avec les navigateurs

{{Compat("http.headers.Cache-Control")}}

## Voir aussi

- [HTTP Caching FAQ](/fr/docs/Web/HTTP/Caching_FAQ)
- [Caching Tutorial for Web Authors and Webmasters](https://www.mnot.net/cache_docs/)
- Guide: _[`Cache-Control` for civilians](https://csswizardry.com/2019/03/cache-control-for-civilians)_
- {{HTTPHeader("Age")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Pragma")}}
