---
title: Performance web
short-title: Performance
slug: Web/Performance
l10n:
  sourceCommit: bf4475f3ca689796977ddf27f4ec8623d35b4db5
---

La performance web désigne les mesures objectives et l'expérience utilisateur perçue en termes de temps de chargement et d'exécution.
La performance web correspond au temps nécessaire à un site pour se charger, devenir interactif et réactif, ainsi qu'à la fluidité du contenu lors des interactions de l'utilisateur·ice.
La performance concerne des questions telles que&nbsp;: le défilement est-il fluide&nbsp;? Les boutons sont-ils réactifs&nbsp;? Les fenêtres contextuelles se chargent-elles rapidement et s'animent-elles de manière fluide&nbsp;?
Les mesures objectives comprennent le temps de chargement, le nombre d'images par seconde et le temps nécessaire pour devenir interactif, et l'expérience subjective signifie le temps que le chargement du contenu semble prendre.

Plus un site met du temps à répondre, plus les utilisateur·ice·s l'abandonnent. Il est important de minimiser les temps de chargement et de réponse et d'ajouter des fonctionnalités supplémentaires pour masquer la latence en rendant l'expérience aussi disponible et interactive que possible, dès que possible, tout en chargeant de manière asynchrone les parties de l'expérience qui prennent plus de temps.

Il existe des outils, des API et des bonnes pratiques qui nous aident à mesurer et à améliorer la performance web. Nous les couvrons dans les pages suivantes.

## Guides sur la performance web

Les [Guides sur la performance](/fr/docs/Web/Performance/Guides) sont des ressources qui décrivent le fonctionnement des navigateurs, ce qui affecte la performance, et comment mesurer, optimiser et surveiller la performance à travers divers aspects de votre application.

- [Les fondamentaux de la performance](/fr/docs/Web/Performance/Guides/Fundamentals)
  - : La performance signifie l'efficacité. Dans le contexte des applications web ouvertes, ce document explique en général ce qu'est la performance, comment la plateforme du navigateur aide à l'améliorer, et quels outils et processus vous pouvez utiliser pour la tester et l'améliorer.
- [Remplir la page&nbsp;: comment fonctionnent les navigateurs](/fr/docs/Web/Performance/Guides/How_browsers_work)
  - : Les utilisateur·ice·s veulent des expériences web avec un contenu qui se charge rapidement et avec lequel il est agréable d'interagir. Par conséquent, un·e développeur·euse doit s'efforcer d'atteindre ces deux objectifs.
    Pour comprendre comment améliorer la performance et la performance perçue, il est utile de comprendre comment fonctionne le navigateur.
- [Comprendre la latence](/fr/docs/Web/Performance/Guides/Understanding_latency)
  - : La **latence** est le temps nécessaire à un paquet de données pour voyager de la source à une destination. En termes d'optimisation de la performance, il est important d'optimiser pour réduire les causes de latence et de tester la performance du site en simulant une latence élevée afin d'optimiser pour les utilisateur·ice·s ayant des connexions lentes ou peu fiables.
- [Recommandations sur les mesures de performance web&nbsp;: combien de temps est trop long&nbsp;?](/fr/docs/Web/Performance/Guides/How_long_is_too_long)
  - : Il n'existe pas de règles claires définissant ce qui constitue un rythme lent lors du chargement des pages, mais il existe des directives spécifiques pour indiquer que le contenu se charge (1 seconde), l'inactivité (50ms), l'animation (16,7ms) et la réponse aux actions de l'utilisateur·ice (50 à 200ms).
- [Utiliser dns-prefetch](/fr/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** tente de résoudre les noms de domaine avant la demande des ressources. Il peut s'agir d'un fichier chargé plus tard ou d'une cible de lien qu'un·e utilisateur·ice essaie de suivre.
- [Chronométrage de la navigation et des ressources](/fr/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : Le **chronométrage de la navigation** fournit des métriques qui mesurent les évènements de navigation du document dans un navigateur. Le **chronométrage des ressources** fournit des mesures détaillées du temps réseau concernant le chargement des ressources d'une application. Les deux fournissent les mêmes propriétés en lecture seule, mais le chronométrage de la navigation mesure les temps du document principal tandis que le chronométrage des ressources fournit les temps de toutes les ressources appelées par ce document principal et des ressources demandées par ces ressources.
- [Optimiser les performances au démarrage](/fr/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : L'amélioration des performances au démarrage constitue souvent l'une des optimisations les plus utiles.
    Une bonne expérience utilisateur consiste notamment à garantir le chargement rapide de l'application. Cet article fournit des conseils de performance pour écrire de nouvelles applications et porter des applications vers le web depuis d'autres plateformes.
- [Chemin critique du rendu](/fr/docs/Web/Performance/Guides/Critical_rendering_path)
  - : Le chemin critique du rendu est la suite d'étapes que le navigateur suit pour convertir le HTML, le CSS et JavaScript en pixels à l'écran. L'optimisation du chemin critique du rendu améliore les performances du rendu.
    Le chemin critique du rendu inclut le [modèle objet de document](/fr/docs/Web/API/Document_Object_Model) (DOM), le [modèle objet CSS](/fr/docs/Web/API/CSS_Object_Model) (CSSOM), l'arbre de rendu et la mise en page.
- [Chargement à la demande](/fr/docs/Web/Performance/Guides/Lazy_loading)
  - : Le **chargement à la demande** est une stratégie qui consiste à identifier les ressources comme non bloquantes (non critiques) et à les charger uniquement lorsque cela est nécessaire. Cette méthode raccourcit le [chemin critique du rendu](/fr/docs/Web/Performance/Guides/Critical_rendering_path), ce qui réduit les temps de chargement des pages.
- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading)
  - : Le **chargement spéculatif** désigne la pratique qui consiste à effectuer des actions de navigation (comme la récupération DNS, la récupération de ressources ou le rendu de documents) avant la visite effective des pages associées, en fonction de prédictions sur les pages que l'utilisateur·ice est le plus susceptible de consulter ensuite.
- [Budgets de performance](/fr/docs/Web/Performance/Guides/Performance_budgets)
  - : Un budget de performance est une limite qui empêche les régressions. Il peut s'appliquer à un fichier, à un type de fichier, à tous les fichiers chargés par une page, à une métrique précise (par exemple le [temps jusqu'à l'interactivité](/fr/docs/Glossary/Time_to_interactive)), à une métrique personnalisée (par exemple le temps jusqu'à l'élément principal) ou à un seuil sur une période donnée.
- [Surveillance des performances&nbsp;: surveillance réelle ou synthétique](/fr/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : La **surveillance synthétique** et la **surveillance réelle des utilisateur·ice·s** sont deux approches pour surveiller les performances web et obtenir des informations à leur sujet. Elles offrent des points de vue différents sur les performances, ainsi que des avantages, des cas d'utilisation appropriés et des limites. La surveillance réelle convient généralement mieux à la compréhension des tendances à long terme, tandis que la surveillance synthétique convient particulièrement aux tests de régression et à l'atténuation des problèmes de performance à court terme pendant le développement. Cet article définit et compare ces deux approches de surveillance des performances.
- [Performances des animations CSS et JavaScript](/fr/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Les animations sont essentielles à une expérience utilisateur agréable dans de nombreuses applications. Il existe de nombreuses façons de mettre en œuvre des animations web, comme les {{CSSxRef("transition")}}/{{CSSxRef("animation")}} CSS ou les animations fondées sur JavaScript (avec {{DOMxRef("Window.requestAnimationFrame","requestAnimationFrame()")}}). Cet article analyse les différences de performance entre les animations fondées sur CSS et celles fondées sur JavaScript.
- [Performances des animations et fréquence d'images](/fr/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Vous pouvez réaliser des animations web avec {{DOMxRef("SVGAnimationElement", "SVG")}}, {{DOMxRef("Window.requestAnimationFrame", "JavaScript")}}, notamment avec {{HTMLElement("canvas")}} et {{DOMxRef("WebGL_API", "WebGL")}}, avec {{CSSxRef("animation")}} CSS, avec {{HTMLElement("video")}}, avec des GIF animés, voire avec des PNG animés et d'autres types d'images.
    Le coût en performance de l'animation d'une propriété CSS peut varier d'une propriété à l'autre, et l'animation de propriétés CSS coûteuses peut provoquer des {{Glossary("Jank", "saccades")}} lorsque le navigateur peine à atteindre une {{Glossary("FPS", "fréquence d'images")}} fluide.

## Tutoriels pour les débutants

La [zone d'apprentissage des performances web](/fr/docs/Learn_web_development/Extensions/Performance) de MDN contient des tutoriels modernes et à jour qui couvrent les notions essentielles des performances. Commencez ici si vous débutez dans ce domaine&nbsp;:

- [Le «&nbsp;pourquoi&nbsp;» des performances web](/fr/docs/Learn_web_development/Extensions/Performance/why_web_performance)
  - : Cet article explique pourquoi les performances web sont importantes pour l'accessibilité, l'expérience utilisateur·ice et les objectifs de votre entreprise.
- [Que sont les performances web&nbsp;?](/fr/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Vous savez que les performances web sont importantes, mais quels facteurs les influencent et comment les mesurer&nbsp;? Cet article présente les composants des performances, du chargement et du rendu d'une page web, notamment la façon dont votre contenu arrive dans le navigateur de vos utilisateur·ice·s pour être affiché, aux groupes de personnes à prendre en compte lors de l'étude des performances.
- [Comment les utilisateur·ice·s perçoivent-ils les performances&nbsp;?](/fr/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : La vitesse à laquelle les utilisateur·ice·s perçoivent votre site est plus importante que sa vitesse en millisecondes. Cette perception dépend du temps de chargement réel de la page, de l'inactivité, de la réactivité aux interactions et de la fluidité du défilement et des autres animations. Cet article présente différentes métriques de chargement, d'animation et de réactivité, ainsi que des bonnes pratiques pour améliorer la perception des utilisateur·ice·s, même lorsque les temps réels ne changent pas.
- [Mesurer les performances](/fr/docs/Learn_web_development/Extensions/Performance/Measuring_performance)
  - : Maintenant que vous comprenez quelques métriques de performance, cet article approfondit les outils, les métriques et les API de performance, ainsi que leur intégration au flux de développement web.
- [Multimédia&nbsp;: images](/fr/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : L'optimisation des médias constitue souvent le gain le plus facile en matière de performances web. Il est possible de servir différents fichiers multimédias selon les capacités, la taille et la densité de pixels de chaque agent utilisateur. Cet article explique l'impact des images sur les performances et les méthodes permettant de réduire le nombre d'octets envoyés par image.
- [Multimédia&nbsp;: vidéo](/fr/docs/Learn_web_development/Extensions/Performance/video)
  - : L'optimisation des médias constitue souvent le gain le plus facile en matière de performances web. Cet article explique l'impact des contenus vidéo sur les performances et présente notamment des conseils comme la suppression des pistes audio des vidéos d'arrière-plan.
- [Optimisation des performances JavaScript](/fr/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : Utilisé correctement, JavaScript permet de créer des expériences web interactives et immersives, mais il peut aussi nuire fortement au temps de téléchargement, au temps de rendu, aux performances dans l'application, à l'autonomie de la batterie et à l'expérience utilisateur. Cet article présente des bonnes pratiques JavaScript à prendre en compte pour garantir les meilleures performances possibles, même avec des contenus complexes.
- [Optimisation des performances HTML](/fr/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Certains attributs et l'ordre des sources dans votre balisage peuvent affecter les performances de votre site. En réduisant le nombre de nœuds DOM et en veillant à utiliser le meilleur ordre et les meilleurs attributs pour inclure des contenus comme les styles, les scripts, les médias et les scripts tiers, vous améliorez considérablement l'expérience utilisateur. Cet article examine en détail comment utiliser HTML pour garantir les meilleures performances.
- [Optimisation des performances CSS](/fr/docs/Learn_web_development/Extensions/Performance/CSS)
  - : Le CSS constitue peut-être une priorité d'optimisation moins importante pour améliorer les performances, mais certaines fonctionnalités CSS les affectent davantage que d'autres. Cet article examine des propriétés CSS qui influencent les performances et propose des façons de gérer les styles afin d'éviter de les dégrader.
- [L'intérêt commercial des performances web](/fr/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)
  - : Un·e développeur·euse peut faire beaucoup de choses pour améliorer les performances, mais quelle vitesse suffit&nbsp;? Comment convaincre la direction de l'importance de ces efforts&nbsp;? Une fois le site optimisé, comment empêcher le retour de la surcharge&nbsp;? Cet article examine la façon de convaincre la direction, de développer une culture de la performance et un budget de performance, et présente des moyens d'empêcher les régressions de s'infiltrer dans votre base de code.
- [Bonnes pratiques et conseils sur les performances web](/fr/docs/Learn_web_development/Extensions/Performance/Best_practices)
  - : Cet article couvre plusieurs sujets à un niveau élémentaire et fournit des liens vers des approfondissements pour améliorer les performances de chacun. En plus des sujets liés à l'interface comme HTML, CSS, JavaScript et les fichiers multimédias, il couvre également les API, les outils de développement, les bonnes pratiques et les mauvaises pratiques liées aux performances web.

## Les API de performance

[L'API de performance](/fr/docs/Web/API/Performance_API) regroupe des standards utilisés pour mesurer les performances des applications web.
Les pages suivantes présentent les API de performance, notamment leur utilisation&nbsp;:

- [Chronométrage haute précision](/fr/docs/Web/API/Performance_API/High_precision_timing)
  - : L'API de performance permet des mesures de haute précision fondées sur le temps, avec une résolution potentielle inférieure à la milliseconde et une horloge monotone stable que les décalages et les ajustements de l'horloge système n'affectent pas.
    Vous utilisez les minuteurs haute résolution pour obtenir des mesures comparatives exactes, plutôt que les horodatages {{JSxRef("Date")}} moins précis et non monotones.
- [Chronométrage des images d'animation longues](/fr/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : Les **images d'animation longues** peuvent affecter l'expérience utilisateur d'un site web.
    Elles peuvent ralentir les mises à jour de l'interface utilisateur, ce qui produit des contrôles apparemment non réactifs et des effets animés et défilements [saccadés](/fr/docs/Glossary/Jank) (ou non fluides), et provoque la frustration des utilisateur·ice·s.
    [L'API des images d'animation longues <sup>(angl.)</sup>](https://w3c.github.io/long-animation-frames/) permet aux développeur·euse·s d'obtenir des informations sur ces images et de mieux comprendre leurs causes profondes. Cet article montre comment utiliser cette API.
- [Surveiller les raisons du blocage du bfcache](/fr/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : La propriété {{DOMxRef("PerformanceNavigationTiming.notRestoredReasons")}} fournit des informations sur la raison pour laquelle le document courant ne peut pas utiliser le {{Glossary("bfcache")}} lors de la navigation.
    Les développeur·euse·s peuvent utiliser ces informations pour identifier les pages qui nécessitent des mises à jour afin de devenir compatibles avec le bfcache et ainsi améliorer les performances du site.
- [Chronométrage de la navigation](/fr/docs/Web/API/Performance_API/Navigation_timing)
  - : Le chronométrage de la navigation fournit des métriques associées à la navigation d'une page à une autre avec l'API [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming).
    Par exemple, vous pouvez déterminer le temps nécessaire pour charger ou décharger un document, ou enregistrer le temps écoulé jusqu'à la fin de la construction du {{Glossary("DOM")}} et la possibilité d'interagir avec le DOM.
- [Données de performance](/fr/docs/Web/API/Performance_API/Performance_data)
  - : L'API de performance ne fournit pas d'analyse ni de visualisation des données de performance.
    Toutefois, elle s'intègre bien aux outils de développement et les applications envoient souvent ses données à des points d'accès et à des bibliothèques d'analyse pour enregistrer des métriques de performance. Celles-ci vous aident à évaluer les données afin de trouver les goulots d'étranglement qui affectent vos utilisateur·ice·s.
    Cette page présente les types de données fournis par l'API de performance, leur collecte et leur accès.
- [L'API de chronométrage des ressources](/fr/docs/Web/API/Performance_API/Resource_timing)
  - : Le chronométrage des ressources permet de récupérer et d'analyser des données détaillées sur le temps réseau nécessaire au chargement des ressources d'une application.
    Une application peut utiliser les métriques de temps pour déterminer, par exemple, la durée nécessaire au chargement d'une ressource précise (comme une image ou un script), implicitement pendant le chargement de la page ou explicitement depuis JavaScript, par exemple avec l'API {{DOMxRef("Window/fetch", "fetch()")}}.
- [Chronométrage du serveur](/fr/docs/Web/API/Performance_API/Server_timing)
  - : Le chronométrage du serveur permet aux serveurs de communiquer des métriques sur le cycle requête-réponse à l'agent utilisateur.
    Vous pouvez collecter ces informations et agir sur les métriques côté serveur comme sur toutes les autres métriques traitées par l'API de performance.
- [L'API de chronométrage utilisateur](/fr/docs/Web/API/Performance_API/User_timing)
  - : Créez des horodatages propres à l'application avec les types d'entrées «&nbsp;marque&nbsp;» et «&nbsp;mesure&nbsp;» de [l'API de chronométrage utilisateur](/fr/docs/Web/API/Performance_API/User_timing), en utilisant les [horodatages haute précision](/fr/docs/Web/API/DOMHighResTimeStamp) qui font partie de la chronologie des performances du navigateur.

### Les API associées

Les API suivantes sont également utiles pour mesurer et influencer les performances des pages&nbsp;:

- [L'API de visibilité de la page](/fr/docs/Web/API/Page_Visibility_API)
  - : Fournit des évènements que vous pouvez surveiller pour savoir quand un document devient visible ou masqué, ainsi que des fonctionnalités permettant de consulter l'état actuel de visibilité de la page.
- [L'API des tâches en arrière-plan](/fr/docs/Web/API/Background_Tasks_API)
  - : L'API de planification coopérative des tâches en arrière-plan permet de mettre en file des tâches que l'agent utilisateur exécute automatiquement lorsqu'il détermine qu'il dispose de temps libre, notamment avec l'API [`requestIdleCallback()`](/fr/docs/Web/API/Window/requestIdleCallback).
- [L'API Beacon](/fr/docs/Web/API/Beacon_API)
  - : L'interface [Beacon](/fr/docs/Web/API/Beacon_API) planifie une requête asynchrone et non bloquante vers un serveur web.
- [L'API d'observation des intersections](/fr/docs/Web/API/Intersection_Observer_API)
  - : L'API d'observation des intersections permet d'observer de manière asynchrone les changements d'intersection entre un élément cible et un élément ancêtre ou la {{Glossary("Viewport", "zone d'affichage")}} d'un document de niveau supérieur.
    Elle permet notamment d'utiliser [Chronométrer la visibilité d'un élément](/fr/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) pour recevoir une notification asynchrone lorsque les éléments concernés deviennent visibles.
- [L'API des capacités multimédias](/fr/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Expose les capacités de décodage et d'encodage d'un appareil client, par exemple la prise en charge des médias et la fluidité et l'efficacité énergétique de la lecture, avec un retour en temps réel sur la lecture afin de mieux prendre en charge la diffusion adaptative, ainsi que l'accès aux informations sur les propriétés d'affichage.
- [L'API des informations réseau](/fr/docs/Web/API/Network_Information_API)
  - : Fournit des informations sur la connexion du système, notamment son type général (par exemple Wi-Fi, cellulaire, etc.).
    Ces informations permettent de sélectionner un contenu haute définition ou basse définition selon la connexion de l'utilisateur·ice.
- [L'API d'état de la batterie](/fr/docs/Web/API/Battery_Status_API)
  - : L'API de batterie fournit des informations sur le niveau de charge de la batterie du système et permet de recevoir des évènements lorsque le niveau de batterie ou l'état de charge change.
    Elle permet d'ajuster l'utilisation des ressources de l'application pour réduire la consommation lorsque la batterie est faible, ou d'enregistrer les modifications avant que la batterie ne s'épuise afin d'empêcher la perte de données.
- [`Navigator.deviceMemory`](/fr/docs/Web/API/Navigator/deviceMemory)
  - : La propriété en lecture seule **`deviceMemory`** de l'interface {{DOMxRef("Navigator")}} retourne la quantité approximative de mémoire de l'appareil en gigaoctets.
- [`FetchEvent.preloadResponse`](/fr/docs/Web/API/FetchEvent/preloadResponse)
  - : La propriété en lecture seule **`preloadResponse`** de l'interface {{DOMxRef("FetchEvent")}} retourne une promesse ({{JSxRef("Promise")}}) qui se complète avec la réponse ({{DOMxRef("Response")}}) du préchargement de navigation si le [préchargement de navigation](/fr/docs/Web/API/NavigationPreloadManager) est déclenché, ou avec `undefined` dans le cas contraire.

## Profilage et outils

- [Fonctionnalités de performance du profileur Firefox <sup>(angl.)</sup>](https://profiler.firefox.com/docs/#/)
  - : Ce site fournit des informations sur l'utilisation et la compréhension des fonctionnalités de performance des outils de développement, notamment [l'arbre des appels <sup>(angl.)</sup>](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), le [graphe en flammes <sup>(angl.)</sup>](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), le [graphe en piles <sup>(angl.)</sup>](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), le [graphe des marqueurs <sup>(angl.)</sup>](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) et le [graphe réseau <sup>(angl.)</sup>](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profilage avec le profileur intégré <sup>(angl.)</sup>](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Apprenez à profiler les performances d'une application avec le profileur intégré de Firefox.

## Références

### HTML

- L'élément [`<picture>`](/fr/docs/Web/HTML/Reference/Elements/picture)
- L'élément [`<video>`](/fr/docs/Web/HTML/Reference/Elements/video)
- L'élément [`<source>`](/fr/docs/Web/HTML/Reference/Elements/source)
- Les attributs de [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#attributes) (comme `srcset`) pour les images adaptatives
- L'attribut [`rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) pour précharger du contenu avec le HTML

### CSS

- La propriété {{CSSxRef("will-change")}}

### JavaScript

- [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event)
- [Ramasse-miettes](/fr/docs/Glossary/Garbage_collection)
- [`requestAnimationFrame`](/fr/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Encodage du contenu](/fr/docs/Web/HTTP/Reference/Headers/Content-Encoding)
- Indications de ressource avec [dns-prefetch](/fr/docs/Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control), [preconnect](/fr/docs/Web/HTML/Reference/Attributes/rel/preconnect), [prefetch](/fr/docs/Glossary/Prefetch) et le pré-rendu
- [HTTP/2](/fr/docs/Web/HTTP/Guides/Messages#http2_messages)
- [Indications client](/fr/docs/Web/HTTP/Guides/Client_hints)

## Voir aussi

- Le guide HTML [des images adaptatives](/fr/docs/Web/HTML/Guides/Responsive_images)
- [L'API Web Workers](/fr/docs/Web/API/Web_Workers_API), notamment [utiliser les service workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers) et [utiliser les web workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Fonctionnement hors ligne et en arrière-plan](/fr/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Mise en cache](/fr/docs/Web/HTTP/Guides/Caching)
- [Indications client](/fr/docs/Web/HTTP/Guides/Client_hints)
- Termes du glossaire&nbsp;:
  - {{Glossary("Beacon", "Signal")}}
  - {{Glossary("Brotli compression", "Compression de Brotli")}}
  - {{Glossary("CDN", "Content Delivery Networks (CDN)")}}
  - {{Glossary("CLS", "Cumulative Layout Shifts (CLS)")}}
  - {{Glossary("Code splitting", "Découpage du code")}}
  - {{Glossary("CSSOM")}}
  - {{Glossary("Domain sharding", "Fragmentation de domaine")}}
  - {{Glossary("Effective connection type", "Type de connexion effective")}}
  - {{Glossary("First contentful paint", "Premier rendu de contenu")}}
  - {{Glossary("First CPU idle", "Premier CPU inactif")}}
  - {{Glossary("First paint", "Premier rendu")}}
  - {{Glossary("gzip_compression", "Compression gzip")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("HTTP")}}
  - {{Glossary("Interaction to next paint", "Interaction au prochain rendu")}}
  - {{Glossary("Jank", "Saccade")}}
  - {{Glossary("Largest contentful paint", "Plus grand rendu de contenu")}}
  - {{Glossary("Latency", "Latence")}}
  - {{Glossary("Lazy load", "Chargement à la volée")}}
  - {{Glossary("Long task", "Tâche longue")}}
  - {{Glossary("Lossless compression", "Compression sans perte")}}
  - {{Glossary("Lossy compression", "Compression avec perte")}}
  - {{Glossary("Main thread", "Processus principal")}}
  - {{Glossary("Minification", "Réduction du code")}}
  - {{Glossary("Network throttling", "Régulation du réseau")}}
  - {{Glossary("Packet", "Paquet")}}
  - {{Glossary("Page load time", "Temps de chargement de la page")}}
  - {{Glossary("Page prediction", "Prédiction de page")}}
  - {{Glossary("Parse", "Analyse")}}
  - {{Glossary("Perceived performance", "Performance perçue")}}
  - {{Glossary("Prefetch", "Préchargement")}}
  - {{Glossary("Prerender", "Pré-rendu")}}
  - {{Glossary("QUIC")}}
  - {{Glossary("RAIL")}}
  - {{Glossary("Real User Monitoring", "Surveillance réelle des utilisateur·ice·s")}}
  - {{Glossary("Resource Timing", "Chronométrage des ressources")}}
  - {{Glossary("Round Trip Time", "Retour aller-retour")}}
  - {{Glossary("Server Timing", "Chronométrage du serveur")}}
  - {{Glossary("Speculative parsing", "Analyse spéculative")}}
  - {{Glossary("Speed index", "Indice de vitesse")}} (et Indice de vitesse perçue)
  - {{Glossary("SSL")}}
  - {{Glossary("Synthetic monitoring", "Surveillance synthétique")}}
  - {{Glossary("TCP handshake", "Poignée de main TCP")}}
  - {{Glossary("TCP slow start", "Démarrage lent TCP")}}
  - {{Glossary("TCP", "Protocole de contrôle de transmission")}}
  - {{Glossary("Time to first byte", "Temps jusqu'au premier octet")}}
  - {{Glossary("Time to interactive", "Temps jusqu'à l'interactivité")}}
  - {{Glossary("TLS")}}
  - {{Glossary("Tree shaking", "Élimination du code mort")}}
  - {{Glossary("Web performance", "Performance web")}}
- [Performances dans les outils de développement Firefox <sup>(angl.)</sup>](https://profiler.firefox.com/docs/#/)
