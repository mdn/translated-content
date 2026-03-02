---
title: En-tête Clear-Site-Data
short-title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SecureContext_Header}}

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Clear-Site-Data`** envoie un signal au client pour qu'il supprime toutes les données de navigation de certains types (cookies, stockage, cache) associées au site web demandeur.
Il permet aux développeur·euse·s web d'avoir davantage de contrôle sur les données stockées par les navigateurs pour leurs origines.

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
// Directive unique
Clear-Site-Data: "cache"

// Directives multiples (séparées par des virgules)
Clear-Site-Data: "cache", "cookies"

// Joker
Clear-Site-Data: "*"
```

## Directives

> [!NOTE]
> Toutes les directives doivent respecter la [syntaxe quoted-string <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6). Une directive qui n'inclut pas les guillemets droits n'est pas valide.

- `"cache"`
  - : Le serveur signale que le client doit supprimer les données mises en cache localement (le cache du navigateur, voir [HTTP caching](/fr/docs/Web/HTTP/Guides/Caching)) pour l'origine de l'URL de la réponse.
    Selon le navigateur, cela peut également supprimer des éléments tels que des pages pré-rendues, {{Glossary("bfcache","cache arrière-avant")}}, des caches de scripts, des caches de shaders WebGL ou des suggestions de la barre d'adresse.

- `"clientHints"` {{Experimental_Inline}}
  - : Indique que le serveur supprimera toutes les [indications client](/fr/docs/Web/HTTP/Guides/Client_hints) (demandées via {{HTTPHeader("Accept-CH")}}) stockées pour l'origine de l'URL de la réponse.

    > [!NOTE]
    > Dans les navigateurs qui prennent en charge le type de données `"clientHints"`, les indications client sont également effacées lorsque les types `"cache"`, `"cookies"` ou `"*"` sont définis. `"clientHints"` n'est donc nécessaire que lorsque aucun de ces autres types n'est défini.

- `"cookies"`
  - : Le serveur signale que le client doit supprimer tous les cookies pour l'origine de l'URL de la réponse. Les identifiants d'authentification HTTP sont également effacés. Cela affecte l'ensemble du domaine enregistré, y compris les sous-domaines. Ainsi, `https://exemple.com` ainsi que `https://stage.exemple.com`, auront leurs cookies supprimés.

- `"executionContexts"` {{Experimental_Inline}}
  - : Le serveur signale que le client doit recharger tous les contextes de navigation pour l'origine de l'URL de la réponse ({{DOMxRef("Location.reload")}}).

- `"prefetchCache"` {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Utilisé pour effacer les préchargements des {{DOMxRef("Speculation Rules API", "règles spéculatives", "", "nocode")}} qui sont limitées à l'origine du référent.

- `"prerenderCache"` {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Utilisé pour effacer les pages pré-rendues des {{DOMxRef("Speculation Rules API", "règles spéculatives","", "nocode")}} qui sont limitées à l'origine du référent.

- `"storage"`
  - : Le serveur signale que le client doit supprimer tout le stockage DOM pour l'origine de l'URL de la réponse. Cela inclut les mécanismes de stockage suivants&nbsp;:
    - localStorage (exécute `localStorage.clear`),
    - sessionStorage (exécute `sessionStorage.clear`),
    - IndexedDB (pour chaque base de données exécuter {{DOMxRef("IDBFactory.deleteDatabase")}}),
    - Enregistrements de service worker (pour chaque enregistrement de service worker, exécuter {{DOMxRef("ServiceWorkerRegistration.unregister")}}),
    - Bases de données Web SQL (obsolètes),
    - [Données de l'API File and Directory Entries](/fr/docs/Web/API/File_and_Directory_Entries_API),
    - Données de plugin (Flash via [`NPP_ClearSiteData` <sup>(angl.)</sup>](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"*"` (joker)
  - : Le serveur signale que le client doit supprimer tous les types de données pour l'origine de l'URL de la réponse. Si de nouveaux types de données sont ajoutés dans de futures versions de cet en-tête, ils seront également couverts.

## Exemples

### Se déconnecter d'un site

Si un·e utilisateur·ice se déconnecte de votre site ou service, vous pouvez souhaiter supprimer les données stockées localement, y compris tout contenu préchargé ou pré‑rendu pour des {{DOMxRef("Speculation Rules API", "navigations spéculées", "", "nocode")}}.
Pour ce faire, ajoutez l'en-tête `Clear-Site-Data` à la page qui confirme que la déconnexion du site a été effectuée avec succès (`https://exemple.com/logout`, par exemple)&nbsp;:

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts", "prefetchCache", "prerenderCache"
```

### Suppression des cookies

Si cet en-tête est renvoyé dans la réponse à `https://exemple.com/clear-cookies`, tous les cookies du même domaine `https://exemple.com` et de ses sous-domaines (par exemple `https://stage.exemple.com`) seront supprimés.

```http
Clear-Site-Data: "cookies"
```

### Suppression des spéculations

Si cet en‑tête est renvoyé dans la réponse à `https://exemple.com/change-state.json`, tous les pré‑rendus des {{DOMxRef("Speculation Rules API", "navigations spéculées", "", "nocode")}} sur le même domaine `https://exemple.com` et ses sous‑domaines (par exemple `https://stage.exemple.com`) seront supprimés.

```http
Clear-Site-Data: "prerenderCache"
```

Pour effacer à la fois les spéculations de préchargement et de pré‑rendu, envoyez simultanément `prefetchCache` et `prerenderCache`&nbsp;:

```http
Clear-Site-Data: "prefetchCache", "prerenderCache"
```

Il existe des cas où il est approprié d'effacer l'un ou l'autre, ou les deux.

Par exemple, une application rendue côté client qui récupère des données via JavaScript peut utiliser `prerenderCache` lors d'un changement d'état pour supprimer les pages pré‑rendues, tout en conservant le HTML préchargé pour l'utiliser lorsque la page est rendue (ou pré‑rendue de nouveau).

En revanche, si le document HTML préchargé contient des données obsolètes mais que la page pré‑rendue correspondante est conçue pour actualiser les données lorsqu'elle est affichée, vous n'aurez peut‑être pas besoin d'utiliser `prerenderCache` mais souhaiterez probablement utiliser la directive `prefetchCache`&nbsp;: ainsi, le HTML obsolète ne sera pas utilisé lors d'un futur pré‑rendu.

Enfin, si le document HTML préchargé contient des données obsolètes et que les pages pré‑rendues ne rafraîchissent pas non plus leur contenu, il est préférable de spécifier à la fois `prefetchCache` et `prerenderCache`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Cache-Control")}}
