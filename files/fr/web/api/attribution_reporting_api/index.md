---
title: API Attribution Reporting
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{DefaultAPISidebar("Attribution Reporting API")}}{{SecureContext_Header}}{{Deprecated_Header}}

L'**API Attribution Reporting** permet aux développeur·euse·s de mesurer les conversions — par exemple, lorsqu'un·e utilisateur·ice clique sur une publicité intégrée sur un site, puis achète l'article sur le site du vendeur — et d'accéder ensuite aux rapports sur ces conversions. Elle le fait sans recourir aux cookies de suivi tiers.

## Concepts et utilisation

Les annonceur·euse·s souhaitent généralement mesurer combien d'utilisateur·ice·s voient une publicité puis consultent et achètent un produit (conversions). Cela leur permet de déterminer quels emplacements publicitaires leur offrent le meilleur retour sur investissement (ROI) afin d'ajuster leur stratégie publicitaire en conséquence. Le processus de mesure des conversions inclut généralement la collecte de données telles que&nbsp;:

- Quels utilisateur·ice·s ont converti (par exemple, acheté un article ou souscrit à un service), et combien.
- Les régions géographiques où ils·elles se trouvent.
- Sur quels sites les publicités ont été placées.
- Combien de produits ont été vendus, de services souscrits, etc.
- Le chiffre d'affaires généré.

Traditionnellement sur le web, la conversion a été mesurée à l'aide de cookies de suivi tiers. Une publicité est généralement intégrée dans une page web via un {{HTMLElement("iframe")}}, qui peut définir un cookie contenant des informations sur l'utilisateur·ice et son interaction avec la publicité.

Par la suite, lorsque l'utilisateur·ice décide de visiter le site de l'annonceur, à condition qu'il s'agisse du même domaine que la publicité, ce site peut accéder au cookie tiers précédemment défini par la publicité. L'annonceur peut alors associer les données de la publicité à ses propres données de première partie pour répondre à des questions telles que «&nbsp;l'utilisateur·ice a-t-il·elle acheté un produit après avoir interagi avec une publicité pour ce produit depuis un autre site&nbsp;?&nbsp;»

Cela nuit à la [confidentialité](/fr/docs/Web/Privacy) des utilisateur·ice·s. À ce stade, toute page du même domaine peut accéder à ce cookie, ainsi qu'aux informations provenant des sites qui intègrent ces pages. Un nombre étonnamment élevé d'acteur·ice·s pourra accéder à ces données et en déduire d'autres informations sur l'utilisateur·ice à partir de ses habitudes de navigation.

L'API Attribution Reporting offre un moyen de mesurer les conversions publicitaires tout en protégeant la confidentialité des utilisateur·ice·s.

### Comment cela fonctionne-t-il ?

Illustrons le fonctionnement de l'API Attribution Reporting à l'aide d'un exemple.

Supposons que nous ayons une boutique en ligne, `shop.example` (c'est-à-dire l'annonceur), qui intègre une publicité pour l'un de ses produits sur un site de contenu, `news.example` (c'est-à-dire l'éditeur·ice). Le contenu de la publicité se trouve sur `ad.shop.example`.

Les propriétaires de la boutique en ligne souhaitent mesurer combien de conversions ils·elles obtiennent grâce aux utilisateur·ice·s interagissant avec la publicité, consultant la page produit sur leur site et ajoutant le produit à leur panier.

![Représentation visuelle des étapes décrites ci-dessous](/shared-assets/images/diagrams/api/attribution-reporting/ara-flow.svg)

Les étapes sont les suivantes&nbsp;:

1. Lorsqu'un·e utilisateur·ice visite le site `news.example`, une **source d'attribution** peut être enregistrée pour des interactions spécifiques avec la publicité intégrée. Il existe plusieurs façons pour un·e utilisateur·ice d'interagir avec les publicités sur la page. Pour qu'une interaction publicitaire enregistre une source d'attribution, la publicité doit envoyer une requête avec un en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} pour indiquer que la réponse est éligible à l'enregistrement d'une source d'attribution. L'enregistrement est effectué si la réponse inclut un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} approprié. La source d'attribution peut être, par exemple&nbsp;:
   - Un lien. Dans ce cas, l'interaction est le clic de l'utilisateur·ice sur le lien (directement via un élément HTML {{HTMLElement("a")}}, ou via un appel {{DOMxRef("Window.open()")}}). La source est enregistrée dans la réponse à la demande de navigation.
   - Une image telle qu'une bannière publicitaire ou un pixel de suivi transparent de 1x1. Dans ce cas, l'interaction est l'utilisateur·ice qui visite la page. La source est enregistrée lorsque l'image est chargée, c'est-à-dire lorsque le serveur répond à la demande d'image.
   - Une requête de recherche (c'est-à-dire une {{DOMxRef("Window/fetch", "fetch()")}}ou {{DOMxRef("XMLHttpRequest")}}). Dans ce cas, l'interaction peut être spécifiée comme ce qui a du sens pour votre application — par exemple, la requête fetch pourrait être invoquée par un évènement `click` ou `submit`. La source est enregistrée une fois que la réponse revient.
2. Lors de l'interaction avec la source d'attribution, les données de la source retournées dans l'en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} sont stockées dans un cache local privé accessible uniquement par le navigateur. Ces données comprennent les données contextuelles et de première main dont disposent la page et l'annonceur, l'origine de la société de technologie publicitaire qui collecte les données de conversion et une ou plusieurs destinations ([eTLD+1](/fr/docs/Glossary/eTLD)) où vous vous attendez à ce que la conversion à partir de cette annonce se produise (c'est-à-dire le(s) site(s) de l'annonceur, par exemple `shop.example`).
3. Lorsque l'utilisateur·ice visite ensuite `shop.example`, ce site peut enregistrer un **déclencheur d'attribution** lorsqu'une interaction indique qu'une conversion a eu lieu (par exemple, l'utilisateur·ice clique sur le bouton «&nbsp;Ajouter au panier&nbsp;» sur `shop.example`). Le navigateur enverra alors une demande accompagnée d'un en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} pour indiquer que la réponse est éligible à l'enregistrement d'un déclencheur d'attribution, et l'enregistrement sera terminé si la réponse inclut un en-tête {{HTTPHeader("Attribution-Reporting-Register-Trigger")}} approprié. Le déclencheur d'attribution peut être, par exemple&nbsp;:
   - Une image telle que l'icône d'un panier d'achat ou un pixel de suivi transparent de 1x1. Dans ce cas, l'interaction est la visite de la page par l'utilisateur·ice. Le déclencheur est enregistré lorsque l'image se charge, c'est-à-dire lorsque le serveur répond à la demande d'image.
   - Une requête de récupération (c'est-à-dire une {{DOMxRef("Window/fetch", "fetch()")}} ou {{DOMxRef("XMLHttpRequest")}}). Dans ce cas, l'interaction peut être spécifiée comme ce qui a du sens pour votre application — par exemple, la requête fetch pourrait être invoquée par un évènement `click` ou `submit`. Le déclencheur est enregistré une fois que la réponse revient.
4. Lorsque l'attribution du déclencheur est terminée, le navigateur tente de faire correspondre les données de l'en-tête {{HTTPHeader("Attribution-Reporting-Register-Trigger")}} avec une entrée de données source enregistrée dans le cache local privé (voir 2.). Voir [Enregistrement des déclencheurs d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers) pour la méthodologie et les exigences de correspondance.
5. Si une correspondance est trouvée, le navigateur envoie les données du rapport à un point de terminaison sur un serveur de rapport généralement détenu par le fournisseur de technologie publicitaire où elles peuvent être analysées en toute sécurité. Contrairement aux cookies, les données ne sont disponibles que pour le site spécifique auquel vous les envoyez - aucune donnée ne sera partagée ailleurs. Ces rapports peuvent être de deux types&nbsp;:
   - **Rapports au niveau de l'évènement**&nbsp;: Rapports basés sur un évènement source d'attribution, où des données source détaillées sont associées à des données de déclencheur grossières. Par exemple, un rapport peut ressembler à «&nbsp;L'ID de clic 200498 sur `ad.shop.example` a conduit à un achat sur `shop.example`&nbsp;», où «&nbsp;L'ID de clic 200498&nbsp;» est la donnée source détaillée, et «&nbsp;achat&nbsp;» est la donnée de déclencheur grossière. Les données source détaillées peuvent encoder des données de première partie ou contextuelles de la page source, et les données de déclencheur peuvent encoder l'évènement de la page de déclenchement.
   - **Rapports sommaires**&nbsp;: Rapports plus détaillés qui combinent des données de plusieurs conversions à la fois du côté source et du côté déclencheur. Par exemple «&nbsp;La campagne ID 774653 sur `news.example` a conduit à 654 ventes de widgets sur `shop.example` provenant d'utilisateur·ice·s en Italie, avec un revenu total de 9540 $.&nbsp;» La compilation d'un rapport sommaire nécessite l'utilisation d'un service d'agrégation (voir par exemple le [service d'agrégation Google <sup>(angl.)</sup>](https://github.com/privacysandbox/aggregation-service)).

Pour plus d'informations sur l'implémentation de la fonctionnalité requise pour les étapes ci-dessus, voir&nbsp;:

1. [Enregistrement des sources d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [Enregistrement des déclencheurs d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [Génération de rapports](/fr/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## Interfaces

L'API Attribution Reporting ne définit pas d'interfaces propres.

### Extensions à d'autres interfaces

- {{DOMxRef("HTMLAnchorElement.attributionSrc")}}, {{DOMxRef("HTMLImageElement.attributionSrc")}}, {{DOMxRef("HTMLScriptElement.attributionSrc")}}
  - : La propriété `attributionSrc` vous permet d'obtenir et de définir l'attribut `attributionsrc` sur les éléments HTML {{HTMLElement("a")}}, {{HTMLElement("img")}} et {{HTMLElement("script")}} de manière programmatique. Elle reflète la valeur de cet attribut.
- {{DOMxRef("Window/fetch", "fetch()")}} et le constructeur {{DOMxRef("Request.Request", "Request()")}}, option `attributionReporting`
  - : Lors de la génération d'une requête via {{DOMxRef("Window/fetch", "fetch()")}}, cela indique que vous souhaitez que la réponse puisse enregistrer une source ou un déclencheur d'attribution.
- {{DOMxRef("XMLHttpRequest.setAttributionReporting()")}}
  - : Lors de la génération d'une requête via {{DOMxRef("XMLHttpRequest")}}, cela indique que vous souhaitez que la réponse puisse enregistrer une source ou un déclencheur d'attribution.
- {{DOMxRef("Window.open()")}}, mot-clé de fonctionnalité `attributionsrc`
  - : Provoque l'achèvement de l'enregistrement d'une source d'attribution _et_ déclenche le stockage par le navigateur des données source associées (telles que fournies dans l'en-tête de réponse {{HTTPHeader("Attribution-Reporting-Register-Source")}}) lorsque la méthode `open()` est terminée. Notez que les appels à `Window.open()` ne peuvent pas être utilisés pour enregistrer des déclencheurs d'attribution.

## Éléments HTML

- {{HTMLElement("a")}}, {{HTMLElement("img")}}, et {{HTMLElement("script")}} — l'attribut `attributionsrc`
  - : Définit que vous souhaitez que le navigateur envoie un en-tête {{HTTPHeader("Attribution-Reporting-Eligible")}} avec la requête de ressource associée. Côté serveur, cet en-tête est utilisé pour déclencher l'envoi d'un en-tête {{HTTPHeader("Attribution-Reporting-Register-Source")}} ou {{HTTPHeader("Attribution-Reporting-Register-Trigger")}} dans la réponse. Lors de l'enregistrement d'une source d'attribution, ceci est requis&nbsp;; lors de l'enregistrement d'un déclencheur d'attribution, cela n'est requis que si vous souhaitez définir un serveur d'enregistrement distinct de la ressource pointée par l'attribut `src`. Notez que les éléments `<a>` ne peuvent pas être utilisés pour enregistrer des déclencheurs d'attribution.

## En-têtes HTTP

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Requête HTTP indiquant que la réponse correspondante est éligible pour enregistrer une source ou un déclencheur d'attribution.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Réponse HTTP enregistrant une fonctionnalité de page en tant que source d'attribution. Ceci est inclus dans une réponse à une requête ayant inclus un en-tête `Attribution-Reporting-Eligible`.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Réponse HTTP enregistrant une fonctionnalité de page en tant que déclencheur d'attribution. Ceci est inclus dans une réponse à une requête ayant inclus un en-tête `Attribution-Reporting-Eligible`.
- {{HTTPHeader("Permissions-Policy")}} {{HTTPHeader('Permissions-Policy/attribution-reporting','attribution-reporting')}} directive
  - : Contrôle si le document actuel est autorisé à utiliser le reporting d'attribution.

## Inscription et tests locaux

Pour utiliser l'API Attribution Reporting sur vos sites, vous devez la définir dans le [processus d'inscription Privacy Sandbox](/fr/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment). Si vous ne le faites pas, le flux de l'API est bloqué à la réception, c'est-à-dire que les en-têtes de réponse sont ignorés et que les sources et déclencheurs ne sont pas enregistrés.

Vous pouvez tout de même tester localement votre code Attribution Reporting API sans inscription. Pour permettre les tests locaux, activez le drapeau développeur Chrome suivant&nbsp;:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Exemples

Voir [Démo&nbsp;: API Attribution Reporting <sup>(angl.)</sup>](https://arapi-home.web.app/) pour un exemple d'implémentation (voir aussi le [code source <sup>(angl.)</sup>](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Outil de validation des en-têtes Attribution Reporting <sup>(angl.)</sup>](https://wicg.github.io/attribution-reporting-api/validate-headers)
- [Attribution reporting <sup>(angl.)</sup>](https://privacysandbox.google.com/private-advertising/attribution-reporting/) sur privacysandbox.google.com (2023)
- [Activer la mesure des conversions <sup>(angl.)</sup>](https://privacysandbox.google.com/private-advertising/attribution-reporting/enable-conversion-measurement) sur privacysandbox.google.com (2023)
- [The Privacy Sandbox <sup>(angl.)</sup>](https://privacysandbox.google.com/) sur privacysandbox.google.com (2023)
