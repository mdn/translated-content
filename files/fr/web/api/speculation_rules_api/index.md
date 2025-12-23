---
title: API Speculation Rules
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: 7878fd0b319d18b5b93c5084a03734d17a0f9b4f
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

L'**API Speculation Rules** est conçue pour améliorer les performances des navigations futures. Elle cible les URL de documents plutôt que des fichiers de ressources spécifiques, ce qui la rend pertinente pour les applications multi-pages (<abbr title="Multi-Page Application">MPA</abbr>) plutôt que pour les applications monopage (<abbr title="Single-Page Application">SPA</abbr>).

L'API Speculation Rules propose une alternative à la fonctionnalité largement disponible [`<link rel="prefetch">`](/fr/docs/Web/HTML/Reference/Attributes/rel/prefetch) et vise à remplacer la fonctionnalité [`<link rel="prerender">`](/fr/docs/Web/HTML/Reference/Attributes/rel/prerender), obsolète et spécifique à Chrome. Elle apporte de nombreuses améliorations par rapport à ces technologies, ainsi qu'une syntaxe plus expressive et configurable pour définir quels documents doivent être préchargés ou pré-rendus.

> [!NOTE]
> L'API Speculation Rules ne gère pas le préchargement des sous-ressources&nbsp;; pour cela, il faut utiliser `<link rel="prefetch">`.

## Concepts et utilisation

Les règles de spéculation peuvent être définies dans des éléments [`<script type="speculationrules">`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules) en ligne ou dans des fichiers texte externes référencés par l'en-tête de réponse {{HTTPHeader("Speculation-Rules")}}. Les règles sont définies sous forme de structure JSON.

Exemple de script&nbsp;:

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": {
          "and": [
            { "href_matches": "/*" },
            { "not": { "href_matches": "/logout" } },
            { "not": { "href_matches": "/*\\?*(^|&)add-to-cart=*" } },
            { "not": { "selector_matches": ".no-prerender" } },
            { "not": { "selector_matches": "[rel~=nofollow]" } }
          ]
        }
      }
    ],
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

Les règles de spéculation utilisant un élément HTML `<script>` doivent être explicitement autorisées dans la directive {{HTTPHeader("Content-Security-Policy")}} [`script-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) si le site en inclut une. Cela se fait en ajoutant l'une des sources `'inline-speculation-rules'`, une source de hachage ou un nombre unique (<i lang="en">nonce</i> en anglais).

Exemple d'en-tête HTTP&nbsp;:

```http
Speculation-Rules: "/rules/prefetch.json"
```

La ressource texte contenant le JSON des règles de spéculation peut avoir n'importe quel nom et extension valides, mais elle doit être servie avec le type MIME `application/speculationrules+json`.

> [!NOTE]
> Les règles peuvent être définies à la fois via un script en ligne et via l'en-tête HTTP — toutes les règles appliquées à un document sont analysées et ajoutées à la liste des règles de spéculation du document.

Vous définissez un tableau distinct pour chaque type de chargement spéculatif (par exemple `"prerender"` ou `"prefetch"`). Chaque règle est contenue dans un objet qui définit, par exemple, une liste de ressources à charger, ainsi que des options comme un paramètre explicite {{HTTPHeader("Referrer-Policy")}} pour chaque règle. Notez que les URL pré-rendues sont aussi préchargées.

Voir [`<script type="speculationrules">`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules) pour une explication complète de la syntaxe disponible.

### Utiliser le préchargement

Inclure des règles `prefetch` dans un élément `<script type="speculationrules">` ou dans l'en-tête `Speculation-Rules` amène les navigateurs compatibles à télécharger le corps de la réponse des pages référencées, mais aucune des sous-ressources référencées par la page. Lorsqu'une page préchargée est visitée, son affichage est bien plus rapide que si elle n'avait pas été préchargée.

Les résultats sont conservés dans un cache en mémoire propre à chaque document. Tout préchargement mis en cache est supprimé lorsque vous quittez la page courante, sauf si vous naviguez effectivement vers un document préchargé.

Cela signifie que si vous préchargez une ressource que l'utilisateur·ice ne visite pas, cela représente généralement un gaspillage de ressources, même si le résultat peut remplir le cache HTTP si les en-têtes le permettent. Cela dit, le coût initial d'un préchargement est bien moindre que celui d'un pré-rendu, il est donc recommandé d'adopter le préchargement de façon large, par exemple en préchargeant toutes les pages importantes de votre site, à condition qu'elles soient sûres à précharger (voir [Conditions de chargement spéculatif non sûr](#conditions_de_chargement_spéculatif_non_sûr) pour plus de détails).

Les préchargements same-site et cross-site fonctionnent, mais les préchargements cross-site sont limités (voir [«&nbsp;same-site&nbsp;» et «&nbsp;cross-site&nbsp;» <sup>(angl.)</sup>](https://web.dev/articles/same-site-same-origin#same-site-cross-site) pour une explication de la différence entre les deux). Pour des raisons de confidentialité, les préchargements cross-site ne fonctionnent actuellement que si l'utilisateur·ice n'a pas de cookies définis pour le site de destination — il ne faut pas que des sites puissent suivre l'activité des utilisateur·ice·s via des pages préchargées (qu'ils·elles ne visiteront peut-être jamais) en se basant sur des cookies déjà présents.

> [!NOTE]
> À l'avenir, une option d'activation pour les préchargements intersites sera proposée via l'en-tête {{HTTPHeader("Supports-Loading-Mode")}}, mais cela n'était pas encore implémenté au moment de la rédaction (seule l'activation du [pré-rendu](#utiliser_le_pré-rendu) inter-origine, même site était disponible).

Pour les navigateurs qui le prennent en charge, le préchargement via les règles de spéculation doit être préféré aux anciens mécanismes de préchargement, à savoir [`<link rel="prefetch">`](/fr/docs/Web/HTML/Reference/Attributes/rel/prefetch) et {{DOMxRef("Window/fetch", "fetch()")}} avec l'option `priority: "low"`. En effet, le préchargement par règles de spéculation est destiné aux navigations, et non au préchargement général de ressources&nbsp;:

- Il peut être utilisé pour des navigations intersites, alors que `<link rel="prefetch">` ne le peut pas.
- Il n'est pas bloqué par les en-têtes {{HTTPHeader("Cache-Control")}}, alors que `<link rel="prefetch">` l'est souvent.

De plus, le préchargement par règles de spéculation&nbsp;:

- Abaisse automatiquement la priorité si nécessaire (ce que `fetch()` ne fait pas).
- Respecte la configuration de l'utilisateur·ice. Par exemple, le préchargement n'a pas lieu si l'appareil est en mode Économie d'énergie ou Économie de données.
- Stocke les ressources préchargées dans un cache en mémoire propre au document, contrairement au cache HTTP, ce qui peut permettre un préchargement légèrement plus rapide.

### Utiliser le pré-rendu

Inclure des règles `prerender` dans un élément `<script type="speculationrules">` ou dans l'en-tête `Speculation-Rules` amène les navigateurs compatibles à récupérer, afficher et charger le contenu dans un onglet invisible, stocké dans un cache en mémoire propre à chaque document. Cela inclut le chargement de toutes les sous-ressources, l'exécution de tout le JavaScript, et même le chargement des sous-ressources et des requêtes de données lancées par JavaScript. Tout pré-rendu mis en cache, ainsi que ses sous-ressources, est supprimé lorsque vous quittez la page courante, sauf si vous naviguez effectivement vers un document pré-rendu.

Les navigations futures vers une page pré-rendue seront quasi instantanées. Le navigateur active l'onglet invisible au lieu d'effectuer le processus de navigation habituel, remplaçant l'ancienne page au premier plan par la page pré-rendue. Si une page est activée avant d'être totalement pré-rendue, elle est activée dans son état actuel puis continue de se charger, ce qui signifie que vous constaterez tout de même une amélioration significative des performances.

Le pré-rendu utilise de la mémoire et de la bande passante réseau. Si vous pré-rendez une ressource que l'utilisateur·ice ne visite pas, ces ressources sont gaspillées (même si le résultat peut remplir le cache HTTP si les en-têtes le permettent, permettant une utilisation ultérieure). Le coût initial d'un pré-rendu est bien plus élevé que celui d'un préchargement, et d'autres conditions peuvent aussi rendre le contenu non sûr à pré-rendre (voir [Conditions de chargement spéculatif non sûr](#conditions_de_chargement_spéculatif_non_sûr) pour plus de détails). Il est donc recommandé d'adopter le pré-rendu avec parcimonie, en considérant soigneusement les cas où il y a une forte probabilité que la page soit visitée, et si le bénéfice pour l'expérience utilisateur justifie le coût supplémentaire.

> [!NOTE]
> Pour donner un ordre de grandeur du gaspillage potentiel de ressources, un pré-rendu utilise à peu près autant de ressources que le rendu d'un {{HTMLElement("iframe")}}.

> [!NOTE]
> De nombreuses API seront automatiquement différées lors du pré-rendu ou jusqu'à l'activation. Voir [Fonctionnalités de la plateforme différées ou restreintes lors du pré-rendu](#fonctionnalités_de_la_plateforme_différées_ou_restrictes_lors_du_pré-rendu) pour plus de détails.

Le pré-rendu est limité par défaut aux documents de même origine. Le pré-rendu inter-origine, même site, est possible — la cible de la navigation doit alors activer l'option via l'en-tête {{HTTPHeader("Supports-Loading-Mode")}} avec la valeur `credentialed-prerender`. Le pré-rendu intersites n'est pas possible actuellement.

Pour les navigateurs qui le prennent en charge, le pré-rendu via les règles de spéculation doit être préféré aux anciens mécanismes de pré-rendu, à savoir [`<link rel="prerender">`](/fr/docs/Web/HTML/Reference/Attributes/rel/prerender)&nbsp;:

- `<link rel="prerender">` est spécifique à Chrome et n'a jamais été normalisé, et l'équipe d'ingénierie de Chrome est en train de l'abandonner.
- Il charge les sous-ressources chargées via JavaScript, alors que `<link rel="prerender">` ne le fait pas.
- Il n'est pas bloqué par les paramètres {{HTTPHeader("Cache-Control")}}, alors que `<link rel="prerender">` l'est souvent.
- Le pré-rendu par règles de spéculation doit être considéré comme une indication et une amélioration progressive. Contrairement à `<link rel="prerender">`, il s'agit d'une indication spéculative et le navigateur peut choisir de ne pas en tenir compte selon les paramètres utilisateur·ice, l'utilisation mémoire courante ou d'autres heuristiques.

### Détection des fonctionnalités de l'API Speculation Rules

Vous pouvez vérifier si l'API Speculation Rules est prise en charge à l'aide du code suivant&nbsp;:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Votre navigateur prend en charge l'API Speculation Rules.");
}
```

Par exemple, vous pouvez vouloir insérer des règles de spéculation pour le préchargement dans les navigateurs compatibles, mais utiliser une technologie plus ancienne comme `<link rel="prefetch">` dans les autres&nbsp;:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    prefetch: [
      {
        source: "list",
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  document.body.append(specScript);
} else {
  const linkElem = document.createElement("link");
  linkElem.rel = "prefetch";
  linkElem.href = "/next.html";
  document.head.append(linkElem);
}
```

## Détection des pages préchargées et pré-rendues

Cette section présente différentes méthodes pour détecter si une page demandée a été préchargée ou pré-rendue.

### Détection côté serveur

Les requêtes de pages préchargées et pré-rendues sont envoyées avec l'en-tête de requête {{HTTPHeader("Sec-Purpose")}}&nbsp;:

Pour <i lang="en">prefetch</i>&nbsp;:

```http
Sec-Purpose: prefetch
```

Pour <i lang="en">prerender</i>&nbsp;:

```http
Sec-Purpose: prefetch;prerender
```

Le serveur peut réagir à cet en-tête, par exemple pour consigner les requêtes de chargement spéculatif, retourner un contenu différent, ou même empêcher le chargement spéculatif. Si un code de réponse autre que succès est retourné (tout code HTTP autre que dans la plage 200-299 après redirections), alors la page ne sera pas préchargée/pré-rendue. De plus, les codes d'état 204 et 205 empêchent aussi le pré-rendu (mais pas le préchargement).

Utiliser un code autre que succès (par exemple un 503) est le moyen le plus simple d'empêcher le chargement spéculatif côté serveur, même s'il est généralement préférable d'autoriser le préchargement/pré-rendu et d'utiliser JavaScript pour différer toute action qui ne doit se produire que lorsque la page est effectivement consultée.

### Détection en JavaScript du préchargement

Lorsqu'une page est préchargée, son entrée {{DOMxRef("PerformanceResourceTiming.deliveryType")}} retournera la valeur `"navigational-prefetch"`. Vous pouvez utiliser le code suivant pour exécuter une fonction lorsqu'une entrée de performance de type `"navigational-prefetch"` est reçue&nbsp;:

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // Fonction définie par l'auteur·ice
}
```

Cette technique est utile pour mesurer les performances, ou lorsque vous souhaitez différer des actions qui pourraient poser problème si elles se produisent lors du préchargement (voir [Préchargement non sûr](#préchargement_non_sûr)).

### Détection en JavaScript du pré-rendu

Pour exécuter une action pendant que la page est en pré-rendu, vous pouvez vérifier la propriété {{DOMxRef("Document.prerendering")}}. Vous pouvez par exemple lancer une analyse statistique&nbsp;:

```js
if (document.prerendering) {
  analytics.sendInfo("arrivé jusqu'ici pendant le pré-rendu !");
}
```

Lorsqu'un document pré-rendu est activé, {{DOMxRef("PerformanceNavigationTiming.activationStart")}} est défini sur un objet {{DOMxRef("DOMHighResTimeStamp")}} représentant le temps écoulé entre le début du pré-rendu et l'activation du document. La fonction suivante permet de vérifier le pré-rendu _et_ les pages pré-rendues&nbsp;:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

Lorsque la page pré-rendue est activée par la consultation de l'utilisateur·ice, l'évènement {{DOMxRef("Document.prerenderingchange_event", "prerenderingchange")}} est déclenché. Cela peut servir à activer des activités qui auparavant démarraient par défaut au chargement de la page, mais que vous souhaitez différer jusqu'à ce que la page soit effectivement consultée. Le code suivant met en place un écouteur d'évènement pour exécuter une fonction une fois le pré-rendu terminé, sur une page pré-rendue, ou l'exécute immédiatement sur une page qui n'est pas pré-rendue&nbsp;:

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

## Conditions de chargement spéculatif non sûr

Cette section présente les conditions à surveiller, pour lesquelles le préchargement et/ou le pré-rendu **ne sont pas sûrs**. Cela signifie que le préchargement/pré-rendu de pages présentant ces conditions peut nécessiter des mesures de mitigation dans votre code, ou doit être évité.

### Préchargement non sûr

Comme mentionné précédemment, nous recommandons d'adopter largement le préchargement, car le rapport risque/bénéfice est assez faible&nbsp;: le risque de gaspillage de ressources est minime, et les gains de performance peuvent être significatifs. Cependant, vous devez vous assurer que les pages préchargées ne perturbent pas le fonctionnement de votre application.

Lors d'un préchargement, le navigateur télécharge le corps de la réponse de la page référencée via une seule requête `GET`, que l'utilisateur·ice pourra consulter ultérieurement. Des problèmes peuvent survenir notamment lorsque l'URL de la requête déclenche un effet de bord côté serveur que vous ne souhaitez voir se produire qu'au moment où l'URL est effectivement visitée.

Par exemple&nbsp;:

- URL de déconnexion.
- URL de changement de langue.
- URL «&nbsp;ajouter au panier&nbsp;».
- URL de parcours de connexion où le serveur envoie un SMS, par exemple pour un mot de passe à usage unique (OTP).
- URL qui incrémentent le quota d'utilisation d'un·e utilisateur·ice, comme la consommation de leur quota mensuel d'articles gratuits ou le démarrage du minuteur de leurs minutes mensuelles.
- URL qui déclenchent le suivi de conversion publicitaire côté serveur.

De tels problèmes peuvent être atténués côté serveur en surveillant l'en-tête {{HTTPHeader("Sec-Purpose", "Sec-Purpose: prefetch")}} lors de la réception des requêtes, puis en exécutant un code spécifique pour différer la fonctionnalité problématique. Plus tard, lorsque la page est effectivement visitée, vous pouvez déclencher la fonctionnalité différée via JavaScript si nécessaire.

> [!NOTE]
> Vous trouverez plus de détails sur le code de détection dans la section [Détection des pages préchargées et pré-rendues](#détection_des_pages_préchargées_et_pré-rendues).

Il est également potentiellement risqué de précharger un document dont le contenu généré côté serveur changera en fonction des actions que l'utilisateur·ice peut effectuer sur la page courante. Cela peut inclure, par exemple, des pages de ventes flash ou des plans de salle de cinéma. Testez soigneusement ces cas et atténuez ces problèmes en mettant à jour le contenu une fois la page chargée. Voir [État variable généré côté serveur](#état_variable_généré_côté_serveur) pour plus de détails sur ces cas.

> [!NOTE]
> Les navigateurs mettent en cache les pages préchargées pendant une courte période (Chrome, par exemple, les conserve 5 minutes) avant de les supprimer, donc vos utilisateur·ice·s peuvent voir un contenu vieux de 5 minutes au maximum.

Les préchargements obsolètes peuvent être supprimés à l'aide de la valeur {{HTTPHeader("Clear-Site-Data#prefetchCache", "prefetchCache")}} de l'en-tête de réponse {{HTTPHeader("Clear-Site-Data")}}.
Ceci peut être utilisé, par exemple, lorsque des requêtes modifiant l'état rendent les données en cache invalides, comme lors de la déconnexion d'un site.

Le préchargement est sûr si tous les effets de bord du chargement de la page résultent de l'exécution de JavaScript, car le JavaScript ne s'exécutera qu'à l'activation.

Un dernier conseil est d'auditer les URL listées comme interdites dans votre fichier {{Glossary("robots.txt")}} — normalement ces URL pointent vers des pages accessibles uniquement aux utilisateur·ice·s authentifié·e·s, et ne devraient donc pas figurer dans les résultats des moteurs de recherche. Beaucoup d'entre elles seront acceptables mais c'est un bon moyen d'identifier des URL non sûres pour le préchargement (c'est-à-dire qui présentent les conditions décrites ci-dessus).

### Pré-rendu non sûr

Le pré-rendu comporte plus de risques que le préchargement et doit donc être utilisé avec parcimonie, uniquement dans les cas où cela en vaut la peine. Il existe davantage de conditions non sûres à surveiller lors du pré-rendu, la récompense est plus élevée, mais le risque l'est aussi.

Lors d'un pré-rendu, le navigateur effectue une requête GET sur l'URL, puis affiche et charge le contenu dans un onglet invisible. Cela inclut l'exécution du JavaScript du contenu et le chargement de toutes les sous-ressources, y compris celles récupérées par JavaScript. Le contenu peut être potentiellement non sûr à pré-rendre si l'une des conditions suivantes est observée&nbsp;:

- L'URL [n'est pas sûre pour le préchargement](#préchargement_non_sûr). Lisez d'abord la section précédente si ce n'est pas déjà fait, et comprenez que ces conditions s'appliquent également au pré-rendu non sûr.
- Le JavaScript de la page modifie le stockage côté client (par exemple [Web Storage](/fr/docs/Web/API/Web_Storage_API) ou [IndexedDB](/fr/docs/Web/API/IndexedDB_API)) au chargement, d'une manière qui peut provoquer des effets inattendus dans d'autres pages non pré-rendues actuellement consultées par l'utilisateur·ice.
- La page exécute du JavaScript ou charge des images qui provoquent des effets de bord, comme l'envoi d'analyses, l'enregistrement d'impressions publicitaires ou toute autre modification de l'état de l'application comme si l'utilisateur·ice avait déjà interagi avec elle. Cela peut perturber le déroulement de l'application ou entraîner des rapports de performance ou d'utilisation incorrects. Voir [État variable généré côté serveur](#état_variable_généré_côté_serveur) pour plus de détails sur ces cas d'usage.

Pour atténuer ces problèmes, vous pouvez utiliser les techniques suivantes&nbsp;:

- Surveillez l'en-tête {{HTTPHeader("Sec-Purpose", "Sec-Purpose: prefetch")}} côté serveur lors de la réception des requêtes, puis exécutez un code spécifique pour différer la fonctionnalité problématique.
- Utilisez l'évènement {{DOMxRef("Document.prerenderingchange_event", "prerenderingchange")}} pour détecter quand la page pré-rendue est effectivement activée et exécuter du code en conséquence. Cela est utile dans deux cas&nbsp;:
  - Différer du code qui pourrait poser problème s'il s'exécute avant que la page ne soit consultée. Par exemple, vous pouvez attendre l'activation pour mettre à jour le stockage côté client ou modifier l'état côté serveur via JavaScript. Cela permet d'éviter que l'interface et l'état de l'application ne soient désynchronisés, par exemple un panier affiché vide alors que l'utilisateur·ice a ajouté des articles.
  - Si cela n'est pas possible, vous pouvez relancer le code après l'activation de la page pour remettre l'application à jour. Par exemple, une page de vente flash très dynamique peut dépendre de mises à jour provenant d'une bibliothèque tierce. Si vous ne pouvez pas différer les mises à jour, vous pouvez toujours obtenir des données fraîches lorsque l'utilisateur·ice consulte la page. Les pages pré-rendues peuvent être mises à jour en temps réel via l'[API Broadcast Channel](/fr/docs/Web/API/Broadcast_Channel_API), ou un autre mécanisme comme {{DOMxRef("Window/fetch", "fetch()")}} ou un {{DOMxRef("WebSocket")}}. Cela garantit que l'utilisateur·ice verra un contenu à jour après l'activation du pré-rendu.
- Gérez soigneusement vos scripts d'analyse tiers — si possible, utilisez des scripts compatibles avec le pré-rendu (par exemple, utilisez la propriété {{DOMxRef("Document.prerendering")}} pour différer leur exécution sur les pages pré-rendues) comme Google Analytics ou NewRelic.
  - Notez que le chargement du contenu des {{HTMLElement("iframe")}} inter-origines est différé pendant le pré-rendu, jusqu'à l'activation. Cela permet d'éviter les problèmes causés par le chargement de pages inter-origines non compatibles avec le pré-rendu, et d'éviter les complexités liées aux identifiants et au stockage à exposer à ces cadres. Cela signifie que les utilisateur·ice·s peuvent voir des cadres vides dans certains cas, mais cela garantit aussi que la plupart des modules tiers comme la publicité sont sûrs à utiliser pendant le pré-rendu.
  - Pour les scripts tiers non compatibles avec le pré-rendu, évitez de les charger avant l'activation en utilisant l'évènement {{DOMxRef("Document.prerenderingchange_event", "prerenderingchange")}}, comme mentionné précédemment.

### État variable généré côté serveur

Il existe deux principaux types d'état généré côté serveur à surveiller&nbsp;: **état obsolète** et **état spécifique à l'utilisateur·ice**. Cela peut entraîner un préchargement ou un pré-rendu non sûr.

- État obsolète&nbsp;: Prenons l'exemple d'une liste de commentaires de blog générée côté serveur, qui peut devenir obsolète entre le moment où l'article est pré-rendu et celui où il est consulté. Cela peut être particulièrement problématique si la page courante est un panneau d'administration où l'utilisateur·ice supprime des commentaires indésirables. Si l'utilisateur·ice navigue ensuite vers l'article, il·elle peut être surpris·e de voir les commentaires indésirables qu'il·elle vient de supprimer.
- État spécifique à l'utilisateur·ice&nbsp;: Prenons l'exemple du suivi de l'état de connexion via un cookie. Des problèmes peuvent survenir comme ceux-ci&nbsp;:
  - L'utilisateur·ice visite `https://site.example/a` dans l'onglet 1 et `https://site.example/b` dans l'onglet 2, tout en étant déconnecté·e.
  - `https://site.example/b` pré-rend `https://site.example/c`. Il sera pré-rendu dans un état déconnecté.
  - L'utilisateur·ice se connecte à `https://site.example` dans l'onglet 1.
  - L'utilisateur·ice passe à l'onglet 2 et clique sur le lien vers `https://site.example/c`, ce qui active la page pré-rendue.
  - L'onglet 2 affiche une vue déconnectée de `https://site.example/c`, ce qui peut surprendre l'utilisateur·ice puisqu'il·elle pensait être connecté·e.

Des problèmes d'état spécifique à l'utilisateur·ice peuvent aussi survenir pour d'autres paramètres utilisateur·ice, par exemple les paramètres de langue, les préférences de mode sombre ou l'ajout d'articles au panier. Ils peuvent également se produire même lorsqu'un seul onglet est impliqué&nbsp;:

- Supposons que l'utilisateur·ice visite `https://site.example/product`.
- `https://site.example.com/product` pré-rend `https://site.example.com/cart`. Il est pré-rendu avec 0 article dans le panier.
- L'utilisateur·ice clique sur les boutons «&nbsp;Ajouter au panier&nbsp;», ce qui lance une requête fetch pour ajouter l'article au panier (sans rechargement de la page).
- L'utilisateur·ice clique sur le lien vers `https://site.example.com/cart`, ce qui active la page pré-rendue.
- L'utilisateur·ice voit un panier vide, alors qu'il·elle vient d'y ajouter un article.

La meilleure mitigation pour ces cas, et en fait chaque fois que le contenu peut être désynchronisé avec le serveur, est que les pages s'actualisent elles-mêmes si nécessaire. Par exemple, un serveur peut utiliser l'[API Broadcast Channel](/fr/docs/Web/API/Broadcast_Channel_API), ou un autre mécanisme comme {{DOMxRef("Window/fetch", "fetch()")}} ou un {{DOMxRef("WebSocket")}}. Les pages peuvent alors s'actualiser correctement, y compris les pages chargées de façon spéculative qui n'ont pas encore été activées.

Lorsque l'actualisation n'est pas possible, les spéculations peuvent être supprimées à l'aide de l'en-tête de réponse {{HTTPHeader("Clear-Site-Data")}} avec les valeurs {{HTTPHeader("Clear-Site-Data#prefetchCache", `prefetchCache`)}} ou {{HTTPHeader("Clear-Site-Data#prerenderCache", `prerenderCache`)}} (ou les deux) selon le cas.

Cet en-tête peut être renvoyé sur n'importe quelle requête HTTP de même site (par exemple un appel d'API `/api/add-to-cart`).

## Comportement de l'historique de session pour les documents pré-rendus

L'activation d'un document en cours de pré-rendu ou pré-rendu se comporte comme une navigation classique du point de vue de l'utilisateur·ice. Le document activé s'affiche dans l'onglet et est ajouté à l'historique de session, et toutes les entrées d'historique avant sont supprimées. Toute navigation effectuée dans le contexte de navigation du pré-rendu _avant_ l'activation n'affecte pas l'historique de session.

Du point de vue du·de la développeur·euse, un document en cours de pré-rendu peut être considéré comme ayant un **historique de session trivial** où une seule entrée — l'entrée courante — existe. Toutes les navigations dans le contexte du pré-rendu sont effectivement remplacées.

Bien que les fonctionnalités d'API qui opèrent sur l'historique de session (par exemple {{DOMxRef("History")}} et {{DOMxRef("Navigation")}}) puissent être appelées dans les documents en cours de pré-rendu, elles n'opèrent que sur l'historique de session trivial du contexte. Par conséquent, les documents pré-rendus ne participent pas à l'historique de session commun de leur page référente. Par exemple, ils ne peuvent pas naviguer vers leur référent via {{DOMxRef("History.back()")}}.

Cette conception garantit que les utilisateur·ice·s obtiennent l'expérience attendue lors de l'utilisation du bouton de retour — c'est-à-dire qu'ils·elles reviennent à la dernière chose vue. Une fois qu'un document en cours de pré-rendu est activé, une seule entrée d'historique de session est ajoutée à l'historique de session commun, en ignorant toute navigation précédente effectuée dans le contexte de navigation du pré-rendu. Revenir d'un pas dans l'historique de session commun — par exemple, en appuyant sur le bouton de retour — ramène l'utilisateur·ice à la page référente.

## Fonctionnalités de la plateforme différées ou restreintes lors du pré-rendu

Comme une page pré-rendue est ouverte dans un état caché, plusieurs fonctionnalités d'API susceptibles de provoquer des comportements intrusifs ne sont pas activées dans cet état, et sont donc **différées** jusqu'à l'activation de la page. D'autres fonctionnalités de la plateforme web problématiques lors du pré-rendu sont totalement restreintes. Cette section détaille les fonctionnalités différées ou restreintes.

> [!NOTE]
> Dans le petit nombre de cas où le report ou la restriction n'est pas possible, le pré-rendu est annulé.

### Report asynchrone d'API

Le report signifie que la fonctionnalité d'API retourne immédiatement une promesse en attente et ne fait rien jusqu'à l'activation de la page. Après activation, la fonctionnalité s'exécute normalement et la promesse est résolue ou rejetée normalement.

Les résultats des fonctionnalités asynchrones suivantes sont différés dans les documents pré-rendus jusqu'à leur activation&nbsp;:

- [API de sortie audio](/fr/docs/Web/API/Audio_Output_Devices_API)&nbsp;: {{DOMxRef("MediaDevices.selectAudioOutput()")}}
- [API Background Fetch](/fr/docs/Web/API/Background_Fetch_API)&nbsp;: {{DOMxRef("BackgroundFetchManager.fetch()")}}
- [API Broadcast Channel](/fr/docs/Web/API/Broadcast_Channel_API)&nbsp;: {{DOMxRef("BroadcastChannel.postMessage()")}}
- [API Credential Management](/fr/docs/Web/API/Credential_Management_API)&nbsp;: {{DOMxRef("CredentialsContainer.create()")}}, {{DOMxRef("CredentialsContainer.get()")}}, {{DOMxRef("CredentialsContainer.store()")}}
- [API Encrypted Media Extensions](/fr/docs/Web/API/Encrypted_Media_Extensions_API)&nbsp;: {{DOMxRef("Navigator.requestMediaKeySystemAccess()")}}
- [API Gamepad](/fr/docs/Web/API/Gamepad_API)&nbsp;: {{DOMxRef("Navigator.getGamepads()")}}, l'évènement {{DOMxRef("Window.gamepadconnected_event", "gamepadconnected")}}, l'évènement {{DOMxRef("Window.gamepaddisconnected_event", "gamepaddisconnected")}}
- [API Géolocalisation](/fr/docs/Web/API/Geolocation_API)&nbsp;: {{DOMxRef("Geolocation.getCurrentPosition()")}}, {{DOMxRef("Geolocation.watchPosition()")}}, {{DOMxRef("Geolocation.clearWatch()")}}
- API {{DOMxRef("HTMLMediaElement")}}&nbsp;: la position de lecture n'avance pas tant que le document contenant est en pré-rendu
- [API Idle Detection](/fr/docs/Web/API/Idle_Detection_API)&nbsp;: {{DOMxRef("IdleDetector.start()")}}
- [API Media Capture and Streams](/fr/docs/Web/API/Media_Capture_and_Streams_API)&nbsp;: {{DOMxRef("MediaDevices.getUserMedia()")}} (et l'ancienne version {{DOMxRef("Navigator.getUserMedia()")}}), {{DOMxRef("MediaDevices.enumerateDevices()")}}
- [API Notifications](/fr/docs/Web/API/Notifications_API)&nbsp;: le constructeur {{DOMxRef("Notification.Notification", "Notification()")}}, {{DOMxRef("Notification/requestPermission_static", "Notification.requestPermission()")}}
- [API Push](/fr/docs/Web/API/Push_API)&nbsp;: {{DOMxRef("PushManager.subscribe()")}}
- [API Screen Orientation](/fr/docs/Web/API/Screen_Orientation_API)&nbsp;: {{DOMxRef("ScreenOrientation.lock()")}}, {{DOMxRef("ScreenOrientation.unlock()")}}
- [API Sensor](/fr/docs/Web/API/Sensor_APIs)&nbsp;: {{DOMxRef("Sensor.start()")}}
- [API Service Worker](/fr/docs/Web/API/Service_Worker_API)&nbsp;: {{DOMxRef("ServiceWorker.postMessage()")}}, {{DOMxRef("ServiceWorkerContainer.register()")}}, {{DOMxRef("ServiceWorkerRegistration.update()")}}, {{DOMxRef("ServiceWorkerRegistration.unregister()")}}
- [API Storage](/fr/docs/Web/API/Storage_API)&nbsp;: {{DOMxRef("StorageManager.persist()")}}
- [API Web Audio](/fr/docs/Web/API/Web_Audio_API)&nbsp;: les {{DOMxRef("AudioContext")}} ne sont pas autorisés à démarrer tant que le document contenant est en pré-rendu
- [API Web Bluetooth](/fr/docs/Web/API/Web_Bluetooth_API)&nbsp;: {{DOMxRef("Bluetooth.getDevices()")}}, {{DOMxRef("Bluetooth.requestDevice()")}}
- [API WebHID](/fr/docs/Web/API/WebHID_API)&nbsp;: {{DOMxRef("HID.getDevices()")}}, {{DOMxRef("HID.requestDevice()")}}
- [API Web Locks](/fr/docs/Web/API/Web_Locks_API)&nbsp;: {{DOMxRef("LockManager.query()")}}, {{DOMxRef("LockManager.request()")}}
- [API Web MIDI](/fr/docs/Web/API/Web_MIDI_API)&nbsp;: {{DOMxRef("Navigator.requestMIDIAccess()")}}
- [API Web NFC](/fr/docs/Web/API/Web_NFC_API)&nbsp;: {{DOMxRef("NDefReader.write()")}}, {{DOMxRef("NDefReader.scan()")}}
- [API Web Serial](/fr/docs/Web/API/Web_Serial_API)&nbsp;: {{DOMxRef("Serial.getPorts()")}}, {{DOMxRef("Serial.requestPort()")}}
- [API Web Speech](/fr/docs/Web/API/Web_Speech_API)&nbsp;: {{DOMxRef("SpeechRecognition.abort()")}}, {{DOMxRef("SpeechRecognition.start()")}}, {{DOMxRef("SpeechRecognition.stop()")}}, {{DOMxRef("SpeechSynthesis.cancel()")}}, {{DOMxRef("SpeechSynthesis.pause()")}}, {{DOMxRef("SpeechSynthesis.resume()")}}, {{DOMxRef("SpeechSynthesis.speak()")}}
- [API WebUSB](/fr/docs/Web/API/WebUSB_API)&nbsp;: {{DOMxRef("USB.getDevices()")}}, {{DOMxRef("USB.requestDevice()")}}
- [API WebXR Device](/fr/docs/Web/API/WebXR_Device_API)&nbsp;: {{DOMxRef("XRSystem.requestSession()")}}

### API implicitement restreintes

Les fonctionnalités suivantes échoueront automatiquement ou ne feront rien dans les documents qui ne sont pas activés.

API nécessitant une {{Glossary("transient activation", "activation transitoire")}} ou une {{Glossary("sticky activation", "activation persistante")}}&nbsp;:

- Boîtes de dialogue de confirmation générées par l'évènement {{DOMxRef("Window.beforeunload_event", "beforeunload")}}
- Déclenchement de tout évènement de la [Clipboard API](/fr/docs/Web/API/Clipboard_API).
- [API File System](/fr/docs/Web/API/File_System_API)&nbsp;: {{DOMxRef("Window.showDirectoryPicker()")}}, {{DOMxRef("Window.showOpenFilePicker()")}}, {{DOMxRef("Window.showSaveFilePicker()")}}
- [API Fullscreen](/fr/docs/Web/API/Fullscreen_API)&nbsp;: {{DOMxRef("Element.requestFullscreen()")}}
- [API Idle Detection](/fr/docs/Web/API/Idle_Detection_API)&nbsp;: {{DOMxRef("IdleDetector/requestPermission_static", "IdleDetector.requestPermission()")}}
- [API Keyboard](/fr/docs/Web/API/Keyboard_API)&nbsp;: {{DOMxRef("Keyboard.lock()")}} (nécessite le plein écran)
- [API Payment Request](/fr/docs/Web/API/Payment_Request_API)&nbsp;: {{DOMxRef("PaymentRequest.show()")}}
- [API Presentation](/fr/docs/Web/API/Presentation_API)&nbsp;: {{DOMxRef("PresentationRequest.start()")}}
- [API Pointer Lock](/fr/docs/Web/API/Pointer_Lock_API)&nbsp;: {{DOMxRef("Element.requestPointerLock()")}}
- [API Screen Capture](/fr/docs/Web/API/Screen_Capture_API)&nbsp;: {{DOMxRef("MediaDevices.getDisplayMedia()")}}
- [API Web Share](/fr/docs/Web/API/Web_Share_API)&nbsp;: {{DOMxRef("Navigator.share()")}}
- {{DOMxRef("Window.open()")}}

API nécessitant que le document contenant ait la sélection&nbsp;:

- [API Clipboard](/fr/docs/Web/API/Clipboard_API)&nbsp;: {{DOMxRef("Clipboard.read()")}}, {{DOMxRef("Clipboard.readText()")}}, {{DOMxRef("Clipboard.write()")}}, {{DOMxRef("Clipboard.writeText()")}}

API nécessitant que la propriété {{DOMxRef("Document.visibilityState")}} du document contenant soit à `"visible"`&nbsp;:

- [API Picture-in-Picture](/fr/docs/Web/API/Picture-in-Picture_API)&nbsp;: {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}} (nécessite que l'état de visibilité du document soit `"visible"` _ou_ une {{Glossary("transient activation", "activation transitoire")}})
- [API Screen Wake Lock](/fr/docs/Web/API/Screen_Wake_Lock_API)&nbsp;: {{DOMxRef("WakeLock.request()")}}

### Autres fonctionnalités restreintes

- Liens de téléchargement, c'est-à-dire les éléments HTML {{HTMLElement("a")}} et {{HTMLElement("area")}} avec l'attribut `download`, dont le téléchargement est différé jusqu'à la fin du pré-rendu.
- Pas de navigation intersite&nbsp;: tout document en cours de pré-rendu qui navigue vers un autre site est immédiatement supprimé avant qu'une requête ne soit envoyée à ce site.
- URL restreintes&nbsp;: les documents pré-rendus ne peuvent pas héberger d'URL de niveau supérieur non HTTP(S). L'inclusion des types d'URL suivants entraîne la suppression immédiate du pré-rendu&nbsp;:
  - [URL `javascript:`](/fr/docs/Web/URI/Reference/Schemes/javascript)
  - [URL `data:`](/fr/docs/Web/URI/Reference/Schemes/data)
  - [URL `blob:`](/fr/docs/Web/URI/Reference/Schemes/blob)
  - URL `about:`, y compris `about:blank` et `about:srcdoc`
- Stockage de session&nbsp;: {{DOMxRef("Window.sessionStorage")}} peut être utilisé, mais le comportement est très spécifique pour éviter de casser les sites qui s'attendent à ce qu'une seule page accède au stockage de session de l'onglet à la fois. Une page pré-rendue commence donc avec un clone de l'état du stockage de session de l'onglet au moment de sa création. Lors de l'activation, le clone du stockage de la page pré-rendue est supprimé et l'état principal du stockage de l'onglet est utilisé à la place. Les pages utilisant le stockage de session peuvent utiliser l'évènement {{DOMxRef("Document.prerenderingchange_event", "prerenderingchange")}} pour détecter quand cet échange de stockage a lieu.
- {{DOMxRef("Window.print()")}}&nbsp;: tout appel à cette méthode est ignoré.
- Les «&nbsp;moyens de dialogue simples&nbsp;» sont restreints comme suit&nbsp;:
  - {{DOMxRef("Window.alert()")}} retourne immédiatement sans afficher de dialogue.
  - {{DOMxRef("Window.confirm()")}} retourne immédiatement `false` sans afficher de dialogue.
  - {{DOMxRef("Window.prompt()")}} retourne immédiatement une chaîne vide (`""`) sans afficher de dialogue.
- Les scripts worker dédiés/partagés sont chargés, mais leur exécution est différée jusqu'à l'activation du document pré-rendu.
- Le chargement des {{HTMLElement("iframe")}} inter-origines est différé pendant le pré-rendu jusqu'à ce que la page soit activée.

## Interfaces

L'API Speculation Rules ne définit aucune interface propre.

### Extensions à d'autres interfaces

- {{DOMxRef("Document.prerendering")}} {{Experimental_Inline}}
  - : Une propriété booléenne qui retourne `true` si le document est actuellement en cours de pré-rendu.
- L'évènement {{DOMxRef("Document.prerenderingchange_event", "prerenderingchange")}} {{Experimental_Inline}}
  - : Déclenché sur un document pré-rendu lorsqu'il est activé (c'est-à-dire lorsque l'utilisateur·ice consulte la page).
- {{DOMxRef("PerformanceNavigationTiming.activationStart")}} {{Experimental_Inline}}
  - : Un nombre représentant le temps écoulé entre le début du pré-rendu d'un document et son activation.
- {{DOMxRef("PerformanceResourceTiming.deliveryType")}} valeur `"navigational-prefetch"` {{Experimental_Inline}}
  - : Indique que le type d'une entrée de performance est un préchargement.

## En-têtes HTTP

- {{HTTPHeader("Content-Security-Policy")}} valeur `'inline-speculation-rules'` {{Experimental_Inline}}
  - : Utilisé pour autoriser l'utilisation de `<script type="speculationrules">` afin de définir des règles de spéculation sur le document récupéré.
- {{HTTPHeader("Clear-Site-Data")}} valeurs `'prefetchCache'` et `'prerenderCache'` {{Experimental_Inline}}
  - : Utilisé pour supprimer les spéculations. Par exemple, lorsque des changements d'état rendent les spéculations obsolètes.
- {{HTTPHeader("Speculation-Rules")}} {{Experimental_Inline}}
  - : Fournit une liste d'URL pointant vers des ressources textuelles contenant des définitions JSON de règles de spéculation. Lorsque la réponse est un document HTML, ces règles sont ajoutées à l'ensemble de règles de spéculation du document.
- {{HTTPHeader("Supports-Loading-Mode")}} {{Experimental_Inline}}
  - : Défini par une cible de navigation pour autoriser l'utilisation de divers modes de chargement à risque élevé. Par exemple, le pré-rendu inter-origine, même site, nécessite une valeur `Supports-Loading-Mode` de `credentialed-prerender`.

## Fonctionnalités HTML

- [`<script type="speculationrules">`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{Experimental_Inline}}
  - : Utilisé pour définir un ensemble de règles de spéculation de préchargement et/ou de pré-rendu dans le document courant, qui sont ajoutées à l'ensemble de règles de spéculation du document.

## Exemples

Pour des exemples de code, voir [Pré-rendu des pages dans Chrome pour des navigations instantanées](https://developer.chrome.com/docs/web-platform/prerender-pages?hl=fr) sur developer.chrome.com (2025)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading) pour une comparaison des règles de spéculation et d'autres fonctionnalités similaires d'amélioration des performances.
