---
title: API Fenced Frame
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

> [!WARNING]
> Cette fonctionnalité est actuellement refusée par un éditeur de navigateur.
> Voir la section [Positions des standards](#positions_des_standards) ci-dessous pour plus de détails.

L'**API Fenced Frame** fournit des fonctionnalités pour contrôler le contenu intégré dans les éléments HTML {{htmlelement("fencedframe")}}.

## Concepts et utilisation

Une source majeure de problèmes de [vie privée](/fr/docs/Web/Privacy) et de [sécurité](/fr/docs/Web/Security) sur le web est le contenu intégré dans les éléments HTML {{htmlelement("iframe")}}. Historiquement, les `<iframe>` ont été utilisés pour définir des cookies tiers, qui peuvent servir à partager des informations et à suivre les utilisateur·ice·s entre différents sites. De plus, le contenu intégré dans un `<iframe>` peut communiquer avec le document qui l'intègre (par exemple, via {{domxref("Window.postMessage()")}}).

Le document parent peut aussi utiliser des scripts pour lire différentes informations depuis le `<iframe>`&nbsp;: par exemple, il est possible d'obtenir des données de pistage ou d'empreinte numérique en lisant l'URL intégrée via la propriété `src`, surtout si elle contient des [paramètres d'URL](/fr/docs/Web/URI/Reference/Query). Le `<iframe>` peut aussi accéder au DOM du contexte parent, et inversement.

La plupart des navigateurs modernes travaillent sur des mécanismes de partitionnement du stockage afin que les cookies ne puissent plus être utilisés pour le pistage (voir par exemple [Cookies ayant un état partitionné indépendant (CHIPS)](/fr/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) ou [Partitionnement d'état de Firefox](/fr/docs/Web/Privacy/Guides/State_Partitioning)).

Les éléments `<fencedframe>` visent à résoudre un autre aspect de ce problème&nbsp;: ils sont très similaires aux `<iframe>` dans leur forme et leur fonction, à ceci près&nbsp;:

- La communication ne peut pas être partagée entre le contenu du `<fencedframe>` et le site qui l'intègre.
- Un `<fencedframe>` peut accéder à des données intersites, mais uniquement dans un ensemble très spécifique de circonstances contrôlées qui préservent la vie privée de l'utilisateur·ice.
- Un `<fencedframe>` ne peut pas être manipulé librement ni voir ses données accessibles via des scripts classiques (par exemple, lecture ou modification de l'URL source). Le contenu d'un `<fencedframe>` ne peut être intégré que via des [API spécifiques](#cas_dutilisation).
- Un `<fencedframe>` ne peut pas accéder au DOM du contexte parent, et le contexte parent ne peut pas accéder au DOM du `<fencedframe>`.

Pour plus d'informations sur le modèle de communication des cadres protégés, consultez le guide [Communication avec les cadres intégrés](/fr/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Cas d'utilisation

Les `<fencedframe>` sont utilisés par d'autres API pour intégrer différents types de contenus intersites ou collecter des données, répondant à divers cas d'utilisation tout en préservant la vie privée. La plupart de ces usages reposaient auparavant sur des cookies tiers ou d'autres mécanismes peu respectueux de la vie privée.

- L'[API Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr) permet d'accéder à des données intersites non partitionnées dans un environnement sécurisé, en calculant et/ou affichant les résultats dans un `<fencedframe>`. Par exemple&nbsp;:
  - Les annonceurs peuvent mesurer la portée d'une publicité, ou diffuser des publicités suivantes en fonction de celles déjà vues par l'utilisateur·ice sur d'autres sites.
  - Les développeur·euse·s peuvent faire des tests A/B, en affichant des variantes à un·e utilisateur·ice selon le groupe auquel il·elle appartient, ou selon combien de personnes ont déjà vu chaque variante.
  - Les entreprises peuvent personnaliser l'expérience utilisateur·ice selon ce qui est vu sur d'autres sites. Par exemple, si la personne a déjà acheté un abonnement, il n'est pas pertinent de lui montrer des publicités d'inscription sur vos autres sites.
- L'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr) permet aux développeur·euse·s de mettre en œuvre de la publicité basée sur des groupes d'intérêt, notamment le remarketing et les audiences personnalisées. Elle peut évaluer plusieurs enchères pour un espace publicitaire et afficher la publicité gagnante dans un `<fencedframe>`.
- L'[API Private Aggregation](https://privacysandbox.google.com/private-advertising/private-aggregation?hl=fr) peut collecter des données depuis des `<fencedframe>` (issus du Shared Storage ou de Protected Audience) et générer des rapports agrégés.

## Fonctionnement des `<fencedframe>`

Comme mentionné plus haut, vous ne contrôlez pas le contenu intégré dans un {{htmlelement("fencedframe")}} directement via un script classique.

Pour définir le contenu affiché dans un `<fencedframe>`, une API d'utilisation (comme [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr) ou [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr)) génère un objet {{domxref("FencedFrameConfig")}}, qui est ensuite affecté via JavaScript à la propriété {{domxref("HTMLFencedFrameElement.config")}} du `<fencedframe>`.

L'exemple suivant récupère un `FencedFrameConfig` depuis une enchère publicitaire de l'API Protected Audience, qui est ensuite utilisé pour afficher la publicité gagnante dans un `<fencedframe>`&nbsp;:

```js
const frameConfig = await navigator.runAdAuction({
  // … configuration de l'enchère
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Il faut passer `resolveToConfig: true` à l'appel de `runAdAuction()` pour obtenir un objet `FencedFrameConfig`. Si `resolveToConfig` est à `false`, la promesse ({{jsxref("Promise")}}) résultante renverra un [URN](/fr/docs/Web/URI/Reference/Schemes/urn) opaque (par exemple `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`) qui ne peut être utilisé que dans un `<iframe>`.

Dans tous les cas, le navigateur stocke une URL contenant l'emplacement cible du contenu à intégrer — associée à l'URN opaque, ou à la propriété interne `url` du `FencedFrameConfig`. La valeur de l'URL ne peut pas être lue par le JavaScript du contexte parent.

> [!NOTE]
> La prise en charge des URN opaques dans les `<iframe>` vise à faciliter la migration des implémentations existantes vers les API du [Privacy Sandbox](https://privacysandbox.google.com/?hl=fr). Ce support est temporaire et sera supprimé à mesure que l'adoption progressera.

> [!NOTE]
> `FencedFrameConfig` possède une méthode {{domxref("FencedFrameConfig.setSharedStorageContext", "setSharedStorageContext()")}} qui permet de transmettre des données du document parent au stockage partagé du `<fencedframe>`. Cela peut par exemple être utilisé dans un {{domxref("Worklet")}} via le `<fencedframe>` pour générer un rapport. Voir l'[API Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr) pour plus de détails.

### Accès aux fonctionnalités fenced frame via l'objet `Fence`

Dans les documents intégrés dans des `<fencedframe>`, JavaScript a accès à la propriété {{domxref("Window.fence")}}, qui retourne une instance de {{domxref("Fence")}} pour ce document. Cet objet contient plusieurs fonctions spécifiques à l'API fenced frame.
Par exemple, {{domxref("Fence.reportEvent()")}} permet de déclencher l'envoi de données de rapport via un [beacon](/fr/docs/Web/API/Beacon_API) vers une ou plusieurs URL spécifiées, afin de signaler les affichages et clics publicitaires.

### Politique d'autorisations

Seules certaines fonctionnalités conçues pour être utilisées dans les `<fencedframe>` peuvent être activées via des politiques d'autorisations définies sur eux&nbsp;; les autres fonctionnalités contrôlées par politique ne sont pas disponibles dans ce contexte. Voir les [Politiques d'autorisations disponibles pour les cadres protégés](/fr/docs/Web/HTML/Reference/Elements/fencedframe#politiques_dautorisations_disponibles_pour_les_fenced_frames) pour plus de détails.

### En-têtes HTTP

Un en-tête {{httpheader("Sec-Fetch-Dest")}} avec la valeur `fencedframe` sera envoyé pour toute requête effectuée depuis l'intérieur d'un `<fencedframe>`, y compris les `<iframe>` enfants intégrés dans un `<fencedframe>`.

```http
Sec-Fetch-Dest: fencedframe
```

Le serveur doit définir un en-tête de réponse {{httpheader("Supports-Loading-Mode")}} avec la valeur `fenced-frame` pour tout document destiné à être chargé dans un `<fencedframe>`, ou un `<iframe>` intégré dans un `<fencedframe>`.

```http
Supports-Loading-Mode: fenced-frame
```

Autres effets des cadres protégés sur les en-têtes HTTP&nbsp;:

- [User-agent client hints](/fr/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) ne sont pas disponibles dans les cadres protégés car ils reposent sur la délégation de [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy), qui pourrait servir à faire fuiter des données.
- Des réglages stricts de [`Cross-Origin-Opener-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy) sont appliqués aux nouveaux contextes de navigation ouverts depuis un cadre protégé, pour éviter toute fuite d'information vers d'autres origines. Toute nouvelle fenêtre ouverte depuis un cadre protégé aura [`rel="noopener"`](/fr/docs/Web/HTML/Reference/Attributes/rel/noopener) et `Cross-Origin-Opener-Policy: same-origin` pour garantir que {{domxref("Window.opener")}} renvoie `null` et placer la fenêtre dans son propre groupe de contexte de navigation.
- [`Content-Security-Policy: fenced-frame-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) a été ajouté pour spécifier les sources valides pour les contextes de navigation imbriqués chargés dans des éléments `<fencedframe>`.
- Les réglages personnalisés de [`Content-Security-Policy: sandbox`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) ne peuvent pas être hérités par les cadres protégés, afin de limiter les problèmes de vie privée. Pour qu'un cadre protégé se charge, il ne faut pas spécifier de CSP `sandbox` (ce qui implique les valeurs ci-dessous), ou spécifier les valeurs suivantes&nbsp;:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### Événements `beforeunload` et `unload`

Les événements [`beforeunload`](/fr/docs/Web/API/Window/beforeunload_event) et [`unload`](/fr/docs/Web/API/Window/unload_event) ne sont pas déclenchés sur les cadres protégés, car ils pourraient faire fuiter des informations sous forme d'horodatage de suppression de page. Les implémentations visent à éliminer autant de fuites potentielles que possible.

## Interfaces

- {{domxref("FencedFrameConfig")}}
  - : Représente la navigation d'un élément HTML {{htmlelement("fencedframe")}}, c'est-à-dire le contenu qui y sera affiché. Un `FencedFrameConfig` est renvoyé par une source telle que l'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr) et affecté à la propriété {{domxref("HTMLFencedFrameElement.config")}}.
- {{domxref("Fence")}}
  - : Contient plusieurs fonctions liées à la fonctionnalité de cadre protégé. Disponible uniquement dans les documents intégrés dans un `<fencedframe>`.
- {{domxref("HTMLFencedFrameElement")}}
  - : Représente un élément `<fencedframe>` en JavaScript et fournit des propriétés pour le configurer.

### Extensions à d'autres interfaces

- {{domxref("Navigator.deprecatedReplaceInURN()")}}
  - : Remplace des chaînes de caractères spécifiées dans l'URL répertoriée correspondant à un URN opaque donné ou à la propriété interne `url` d'un `FencedFrameConfig`.
- {{domxref("Window.fence")}}
  - : Retourne une instance d'objet {{domxref("Fence")}} pour le contexte du document courant. Disponible uniquement dans les documents intégrés dans un `<fencedframe>`.

## Inscription et tests locaux

Certaines fonctionnalités de l'API qui créent des {{domxref("FencedFrameConfig")}} comme {{domxref("Navigator.runAdAuction()")}} ([API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr)) et {{domxref("WindowSharedStorage.selectURL()")}} ([API Shared Storage](/fr/docs/Web/API/Shared_Storage_API)), ainsi que d'autres fonctionnalités comme {{domxref("Fence.reportEvent()")}}, nécessitent d'inscrire votre site dans un [processus d'inscription au privacy sandbox](/fr/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment). Sinon, les appels d'API échoueront avec un avertissement dans la console.

> [!NOTE]
> Dans Chrome, vous pouvez tout de même tester votre code fenced frame localement sans inscription. Pour autoriser les tests locaux, activez le drapeau développeur Chrome suivant&nbsp;:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Exemples

Les démonstrations suivantes utilisent toutes des `<fencedframe>`&nbsp;:

- [Démonstrations de l'API Shared Storage <sup>(angl.)</sup>](https://shared-storage-demo.web.app/) (comprend aussi des exemples de l'API Private Aggregation)
- [Démonstration de l'API Protected Audience <sup>(angl.)</sup>](https://protected-audience-demo-advertiser.web.app/)

## Spécifications

{{Specifications}}

### Positions des standards

Un éditeur de navigateur [s'oppose](/fr/docs/Glossary/Web_standards#opposition_aux_standards) à cette spécification.
Positions connues&nbsp;:

- Mozilla (Firefox)&nbsp;: [Négatif](https://github.com/mozilla/standards-positions/issues/781)

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
