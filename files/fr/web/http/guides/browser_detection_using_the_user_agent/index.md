---
title: Détection du navigateur à l'aide de la chaîne de caractères d'agent utilisateur (analyseur d'AU)
short-title: Détection du navigateur avec la chaîne de caractères d'AU
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

Avec chaque requête envoyée à un serveur, les navigateurs incluent un en-tête {{HTTPHeader("User-Agent")}} {{Glossary("HTTP")}} avec une valeur appelée chaîne de caractères {{Glossary("user agent", "d'agent utilisateur")}} (AU). Cette chaîne de caractères est destinée à identifier le navigateur, son numéro de version et son système d'exploitation hôte.

```http
User-Agent: <product> / <product-version> <comment>
```

Vous pouvez également accéder à cette chaîne de caractères avec la propriété {{DOMxRef("navigator.userAgent")}} en JavaScript&nbsp;:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Il peut être tentant d'analyser la chaîne de caractères AU (parfois appelée «&nbsp;analyseur d'agent utilisateur&nbsp;») et de modifier le comportement de votre site en fonction des valeurs de cette chaîne de caractères, mais cela est très difficile à faire de manière fiable et est souvent une source de bogues.

Ce document décrit les pièges courants de l'utilisation de la chaîne de caractères AU pour la détection du navigateur et les alternatives recommandées.
À la fin, nous fournissons quelques conseils pour la détection de l'AU en utilisant la chaîne de caractères, mais vous ne devriez le faire que si c'est absolument nécessaire&nbsp;!

## Pourquoi la détection des fonctionnalités est préférable à la détection du navigateur

Pour illustrer pourquoi essayer d'adapter les fonctionnalités du site en fonction du navigateur introduit de la complexité et des bogues possibles, considérons l'exemple suivant.
Une application souhaite utiliser une fonction `splitUpString()` en JavaScript utilisant [assertion de précédence](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`):

```js example-bad
let splitUpString;

if (navigator.userAgent.includes("Chrome")) {
  const camelCaseExpression = new RegExp("(?<=[A-Z])");
  splitUpString = (str) => String(str).split(camelCaseExpression);
} else {
  // Ce repli est inefficace, mais il fonctionne
  splitUpString = (str) =>
    String(str)
      .split(/(.*?[A-Z])/)
      .filter(Boolean);
}
console.log(splitUpString("fooBar")); // ["fooB", "ar"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

Ce code fait plusieurs hypothèses qui peuvent être incorrectes et qui cassent le code s'il est exécuté sur le mauvais navigateur ou la mauvaise version du navigateur&nbsp;:

1. Toutes les chaînes de caractères d'agent utilisateur qui incluent la sous-chaîne de caractères `Chrome` indiquent un navigateur Chrome.

   L'un des plus grands problèmes de la détection des navigateurs basée sur les chaînes d'agent utilisateur est que les navigateurs et les agents utilisateurs prétendent régulièrement être un autre navigateur, ou incluent des informations basées sur plusieurs navigateurs.

2. La fonctionnalité de précédence est toujours disponible si le navigateur est Chrome.
   En réalité, le navigateur pourrait être une ancienne version de Chrome avant que la prise en charge ne soit ajoutée, ou il pourrait s'agir d'une version ultérieure de Chrome qui la supprime.
3. Plus important encore, cela suppose qu'aucun autre navigateur ne prend en charge la fonctionnalité, alors qu'elle pourrait être ajoutée à n'importe quel autre navigateur à tout moment.
   Tous les navigateurs non correspondants sont bloqués en utilisant un repli inefficace.

Il est important de noter que ces problèmes existent quel que soit le méthode de détection du navigateur&nbsp;; l'analyse de l'AU, les indices du client, la présence, l'absence ou le contenu d'autres en-têtes HTTP, et ainsi de suite.
Savoir quel navigateur est utilisé est sans importance, ce que nous recherchons réellement dans ce cas est la détection des fonctionnalités, qui est décrite plus en détail ci-dessous.

## Alternatives à l'analyse de l'agent utilisateur

Les sections suivantes décrivent des alternatives à la détection des navigateurs qui sont plus robustes et applicables dans de nombreux scénarios par rapport à l'analyse de l'agent utilisateur.

### Détection des fonctionnalités

La détection des fonctionnalités consiste à vérifier si une fonctionnalité spécifique est disponible pour le client au lieu de déterminer quel navigateur rend votre page.
Dans les cas où une fonctionnalité n'est pas prise en charge, vous utilisez un repli à la place.
L'exemple de détection des fonctionnalités suivant vérifie si le client prend en charge {{DOMxRef("Geolocation_API", "l'API Geolocation", "", 1)}}.
Vous pouvez le faire en vérifiant la présence d'une propriété `geolocation` disponible sur l'objet global {{DOMxRef("Navigator")}}.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // afficher la position sur une carte, comme l'API Google Maps
  });
} else {
  // Afficher une carte statique à la place
}
```

Vous pouvez faire cela pour de nombreuses fonctionnalités.
Par exemple, vous pouvez déterminer si les fichiers PDF peuvent être affichés en ligne, ou si {{DOMxRef("VirtualKeyboard_API", "l'API VirtualKeyboard", "", 1)}} est prise en charge, et ainsi de suite&nbsp;:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // le navigateur prend en charge l'affichage en ligne des fichiers PDF
}
if ("virtualKeyboard" in navigator) {
  // le navigateur prend en charge l'API Virtual Keyboard
}
```

Pour la mise en forme, vous pouvez également effectuer la détection des fonctionnalités en CSS en utilisant la règle {{CSSxRef("@supports")}}, combinée avec le mot-clé `not` si vous souhaitez vérifier l'absence d'une fonctionnalité.
Voir [Utiliser les requêtes de fonctionnalités](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) pour des informations sur l'utilisation de cela en CSS.

```css
@supports (display: grid) {
  .box {
    display: grid;
    gap: 2rem;
  }
}

@supports not (property: value) {
  /* Règles CSS pour le repli */
}
```

Dans de rares cas où le comportement diffère entre les navigateurs pour une fonctionnalité, vous devez tester comment les navigateurs implémentent l'API et déterminer comment l'utiliser en conséquence.
Pour en savoir plus, consultez la documentation [Mettre en œuvre la détection des fonctionnalités](/fr/docs/Learn_web_development/Extensions/Testing/Feature_detection).

#### Détection des appareils mobiles

Une utilisation courante et incorrecte de l'analyse de l'agent utilisateur (et des [indications client](#indications_client)) est de détecter si le client est un appareil mobile.
En général, les gens cherchent en réalité à savoir si l'appareil de l'utilisateur·ice est **adapté au toucher** et dispose d'un petit écran afin d'optimiser leur site en ajoutant, par exemple, un espacement supplémentaire aux boutons.

Au lieu de cela, vous devriez détecter les fonctionnalités en utilisant des API modernes.
Par exemple, pour vérifier la prise en charge du toucher, essayez la propriété [`maxTouchPoints`](/fr/docs/Web/API/Navigator/maxTouchPoints) dans l'interface {{DOMxRef("Navigator")}}&nbsp;:

```js
if (navigator.maxTouchPoints > 1) {
  // le navigateur prend en charge le multi-touch
}
```

Pour d'autres préoccupations, comme la mise en page, utilisez du CSS moderne comme [les boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [les grilles](/fr/docs/Web/CSS/Guides/Grid_layout) pour des mises en page flexibles.
Au lieu de masquer le contenu sur les écrans plus petits, ajustez la mise en page de manière dynamique.
Les [requêtes de médias](/fr/docs/Web/CSS/Guides/Media_queries) devraient gérer la plupart des changements de mise en page, réduisant ainsi le besoin d'ajustements basés sur JavaScript.

Si vous souhaitez garantir des transitions fluides lorsque les utilisateur·ice·s font pivoter leurs appareils ou passent entre différents modes d'écran, vous pouvez consulter [Détecter l'orientation de l'appareil](/fr/docs/Web/API/Device_orientation_events/Detecting_device_orientation).
Pour les appareils pliables, il existe des API plus récentes telles que [l'API Device Posture](/fr/docs/Web/API/Device_Posture_API), bien que vous deviez vérifier les données de compatibilité, car le support varie considérablement.

### Indications client

Pour les navigateurs basés sur Blink (Chromium, Edge, Brave, Vivaldi, etc.), une alternative est [les indications client de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints).
Dans les indications client, le serveur demande de manière proactive des informations sur l'appareil à un client avec des en-têtes HTTP ou avec [l'API JavaScript](/fr/docs/Web/API/User-Agent_Client_Hints_API).

Les indications client sont meilleures que l'analyse de l'agent utilisateur pour détecter les navigateurs basés sur Blink, car elles ne sont pas aussi couramment falsifiées et elles fournissent des informations plus petites et plus fiables, plus faciles à analyser.
Modifier la fonctionnalité du site en fonction des indications client reste une mauvaise idée&nbsp;!
Dans la mesure du possible, vous devriez plutôt utiliser la détection des fonctionnalités et l'amélioration progressive [comme décrit ci-dessus](#pourquoi_la_détection_des_fonctionnalités_est_préférable_à_la_détection_du_navigateur).

Par exemple, dans le mécanisme HTTP, le serveur inclut un en-tête {{HTTPHeader("Accept-CH")}} avec une liste d'en-têtes qui devraient être inclus par le client dans les requêtes suivantes.
Supposons que le serveur envoie cette réponse au client&nbsp;:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

Cela demande les en-têtes suivants au client dans les requêtes suivantes&nbsp;:

- {{HTTPHeader("Sec-CH-UA-Mobile")}}&nbsp;: un booléen pour indiquer si le client est un appareil mobile.
- {{HTTPHeader("Sec-CH-UA-Platform")}}&nbsp;: la plateforme sur laquelle le client fonctionne («&nbsp;Windows&nbsp;», «&nbsp;Android&nbsp;», etc.).
- {{HTTPHeader("Sec-CH-UA")}}&nbsp;: les informations de marque et de version significative de l'agent utilisateur.

Supposons que le client prenne en charge les indications client, les indications client de l'agent utilisateur peuvent apparaître dans les requêtes suivantes&nbsp;:

```http
GET /ma/page HTTP/1.1
Host: exemple.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

Pour en savoir plus sur les indications client, consultez [les indications client HTTP](/fr/docs/Web/HTTP/Guides/Client_hints).
Assurez-vous de vérifier les détails de [Compatibilité des navigateurs](/fr/docs/Web/HTTP/Reference/Headers/Accept-CH#compatibilité_des_navigateurs) pour plus d'informations avant d'utiliser cette fonctionnalité.

### Autres techniques et principes

- {{Glossary("Progressive enhancement", "Amélioration progressive")}}
  - : Cette technique de conception consiste à développer votre site Web en «&nbsp;couches&nbsp;», en utilisant une approche ascendante, en commençant par une couche plus simple et en améliorant les capacités du site dans des couches successives, chacune utilisant plus de fonctionnalités.
- {{Glossary("Graceful degradation", "Dégradation progressive")}}
  - : Il s'agit d'une approche descendante dans laquelle vous construisez le meilleur site possible en utilisant toutes les fonctionnalités que vous souhaitez, puis vous l'ajustez pour qu'il fonctionne sur des navigateurs plus anciens. Cela peut être plus difficile à faire et moins efficace que l'amélioration progressive, mais peut être utile dans certains cas.

## Raisons invalides d'utiliser la détection du navigateur

Si vous envisagez encore la détection du navigateur au lieu de la détection des fonctionnalités et de l'amélioration progressive, vérifiez si vous êtes motivé par les raisons (invalides) suivantes&nbsp;:

- **Vous essayez de contourner un bug spécifique dans une certaine version du navigateur**
  - : Il est peu probable que vous soyez la première personne à le rencontrer.
    Des experts ou des personnes ayant un autre point de vue peuvent vous donner des indices pour mieux éviter ou contourner le bug.
    Si le problème est rare, il vaut la peine de vérifier si ce bug a été signalé au fournisseur du navigateur avec des systèmes de suivi des bogues ([Mozilla <sup>(angl.)</sup>](https://bugzilla.mozilla.org/); [WebKit <sup>(angl.)</sup>](https://bugs.webkit.org/); [Blink <sup>(angl.)</sup>](https://www.chromium.org/issue-tracking/); [Opera <sup>(angl.)</sup>](https://bugs.opera.com/)).
    Les fabricants de navigateurs prêtent attention aux rapports de bugs, et le vôtre peut aider à corriger ou à fournir des solutions de contournement plus fiables pour un problème.
- **Servir un HTML différent en fonction du navigateur du/de la visiteur·euse**
  - : C'est généralement une mauvaise idée, mais il existe de rares cas où cela est nécessaire.
    Pouvez-vous l'éviter en ajoutant des éléments non sémantiques {{HTMLElement("div")}} ou {{HTMLElement("span")}}&nbsp;?
    Considérez s'il y a réellement un problème avec votre conception&nbsp;: pouvez-vous utiliser l'amélioration progressive ou des mises en page fluides pour aider à supprimer votre besoin de le faire&nbsp;?
    L'effort nécessaire pour appliquer une détection précise de l'agent utilisateur par rapport à la refonte de votre HTML devrait être un facteur décisif.
- **Essayer de savoir si le navigateur d'un·e visiteur·euse possède une fonctionnalité spécifique**
  - : Votre site doit utiliser une fonctionnalité spécifique que certains navigateurs ne prennent pas encore en charge, et vous souhaitez que les utilisateur·ice·s avec des navigateurs incompatibles voient un site plus ancien avec moins de fonctionnalités que vous savez fonctionner.
    C'est la pire raison d'utiliser la détection de l'agent utilisateur, car tous les navigateurs finissent par rattraper leur retard.
    De plus, il n'est pas pratique de tester chaque navigateur pour différentes fonctionnalités de cette manière.

## Extraire les parties pertinentes de la chaîne de caractères de l'agent utilisateur

Si vous avez exploré toutes les options ci-dessus et que vous devez encore analyser la chaîne de caractères de l'agent utilisateur en dernier recours, cette section fournit quelques conseils utiles.
Malheureusement, il n'existe pas d'uniformité dans les différentes parties de la chaîne de caractères de l'agent utilisateur, ce qui rend cette tâche délicate.

### Moteur de rendu

Les navigateurs partageant un {{Glossary("engine/rendering", "moteur de rendu")}} commun affichant une page de la même manière&nbsp;: il est souvent raisonnable de supposer que ce qui fonctionne dans un navigateur fonctionne dans l'autre.
Il existe trois principaux moteurs de rendu actifs&nbsp;: {{Glossary("Blink")}}, {{Glossary("Gecko")}} et {{Glossary("WebKit")}}.

Le moteur de rendu est la chaîne de caractères `Gecko/20100101` dans l'exemple suivant, indiquant que le moteur de rendu est `Gecko`, et le «&nbsp;gecko-Trail&nbsp;» est la chaîne fixe `20100101`, ce qui signifie «&nbsp;bureau&nbsp;»&nbsp;:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Détecter les noms des moteurs de rendu est courant sur les sites web, et de nombreux agents utilisateurs ont historiquement ajouté d'autres noms de rendu pour éviter que les sites web ne les excluent uniquement en fonction du nom du moteur de rendu.
Il est donc important de faire attention à ne pas déclencher de faux positifs lors de la détection du moteur de rendu, car cette méthode est particulièrement peu fiable.
Considérez la chaîne UA suivante envoyée par Chrome 134 sur macOS&nbsp;:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Moteur   | Doit contenir     | Détails                                                                                                                                                             |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                     |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                     |
| WebKit   | `AppleWebKit/xyz` | Les navigateurs WebKit ajoutent une chaîne de caractères `like Gecko` qui peut déclencher un faux positif pour Gecko si la détection n'est pas appliquée avec soin. |
| Presto   | `Opera/xyz`       | Obsolète&nbsp;; Presto n'est plus utilisé dans les versions d'Opera >= 15 (voir «&nbsp;Blink&nbsp;»)                                                                |
| EdgeHTML | `Edge/xyz`        | Obsolète&nbsp;; EdgeHTML n'est plus utilisé dans les versions d'Edge >= 79 (voir «&nbsp;Blink&nbsp;»).                                                              |

### Version du moteur de rendu

La plupart des moteurs de rendu mettent le numéro de version dans le jeton `RenderingEngine/VersionNumber`, à l'exception notable de Gecko.
C'est la chaîne de caractères `rv:138.0` dans l'exemple suivant, ce qui signifie que le numéro de version du moteur de rendu est `138.0`, ce qui est le même que la version de Firefox&nbsp;:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Nom et version du navigateur

Lorsque les gens disent qu'ils veulent une «&nbsp;détection de navigateur&nbsp;», ils veulent en réalité souvent une «&nbsp;détection du moteur de rendu&nbsp;».
Cela signifie généralement détecter «&nbsp;Gecko&nbsp;» ou «&nbsp;WebKit&nbsp;» plutôt que «&nbsp;Firefox&nbsp;» ou «&nbsp;Safari&nbsp;».

La plupart des navigateurs définissent le nom et la version dans le format `BrowserName/VersionNumber`.
Mais comme le nom n'est pas la seule information dans une chaîne de caractères d'agent utilisateur dans ce format, vous ne pouvez pas découvrir le nom du navigateur, vous pouvez seulement vérifier si le nom que vous recherchez est présent.
Le nom du navigateur est la chaîne de caractères `Firefox/138.0` dans l'exemple suivant, indiquant que le nom du navigateur est `Firefox`, et que la version du logiciel est `138.0`&nbsp;:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Certains navigateurs envoient des informations contradictoires&nbsp;: Chrome, par exemple, rapporte à la fois Chrome et Safari.
Donc, pour détecter Safari, vous devez vérifier la présence de la chaîne de caractères Safari et l'absence de la chaîne de caractères Chrome, Chromium se rapporte souvent à lui-même comme Chrome et SeaMonkey se rapporte à lui-même comme Firefox.

Faites attention lorsque vous utilisez des expressions régulières sur la partie `BrowserName`, car les agents utilisateurs contiennent également des chaînes de caractères autour de la syntaxe Keyword/Value.
Safari et Chrome contiennent la chaîne de caractères `like Gecko`, par exemple.

| Nom du navigateur                  | Doit contenir   | Ne doit pas contenir           |
| ---------------------------------- | --------------- | ------------------------------ |
| Firefox                            | `Firefox/xyz`   | `Seamonkey/xyz`                |
| Seamonkey                          | `Seamonkey/xyz` |                                |
| Chrome                             | `Chrome/xyz`    | `Chromium/xyz` ou `Edg.*/xyz`  |
| Chromium                           | `Chromium/xyz`  |                                |
| Safari                             | `Safari/xyz` \* | `Chrome/xyz` ou `Chromium/xyz` |
| Opera 15+ (Moteur basé sur Blink)  | `OPR/xyz`       |                                |
| Opera 12- (Moteur basé sur Presto) | `Opera/xyz`     |                                |

\* Safari donne deux numéros de version&nbsp;: un technique dans le jeton `Safari/xyz`, et un convivial dans un jeton `Version/xyz`.

Bien sûr, il n'y a absolument aucune garantie qu'un autre navigateur ne falsifie pas ces informations dans certains cas.
C'est pourquoi la détection de navigateur en utilisant la chaîne de caractères d'agent utilisateur est peu fiable et ne doit être effectuée qu'avec la vérification du numéro de version (la falsification des versions passées est moins probable).

### Détection du système d'exploitation

Le système d'exploitation est envoyé dans la plupart des chaînes de caractères d'agent utilisateur (bien que pas sur les plateformes non axées sur le web), mais le format varie.
C'est une chaîne de caractères fixe entre deux points-virgules, dans la partie commentaire de l'agent utilisateur, et ces chaînes de caractères sont spécifiques à chaque navigateur.

Elles indiquent le système d'exploitation, et souvent sa version ainsi que des informations sur le matériel utilisé (32 ou 64 bits, Intel/PPC pour Mac, ou architecture CPU x86/ARM pour les PC Windows).
C'est la chaîne de caractères `Intel Mac OS X 10.15` dans l'exemple suivant&nbsp;:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Dans tous les cas, ces chaînes de caractères peuvent changer, il est donc recommandé de les utiliser uniquement en conjonction avec la détection de navigateurs déjà publiés afin que les modèles soient connus à l'avance.
Envisagez une enquête sur les visiteur·euse·s ou les chaînes de caractères d'agent utilisateur pour adapter votre code lorsque de nouvelles versions de navigateurs sont publiées.

### Mobile, Tablette ou Bureau

La raison la plus courante de l'utilisation de la détection de l'agent utilisateur est de déterminer le type d'appareil sur lequel le navigateur s'exécute.

- Ne supposez jamais qu'un navigateur ou un moteur de rendu ne fonctionne que sur un seul type d'appareil.
  En particulier, ne vous fiez pas à des paramètres par défaut différents pour différents navigateurs ou moteurs de rendu.
- N'utilisez jamais le jeton du système d'exploitation pour définir si un navigateur est sur mobile, tablette ou bureau.
  Le système d'exploitation peut fonctionner sur plusieurs types d'appareils (par exemple, Android fonctionne sur les tablettes ainsi que sur les téléphones).

Le tableau suivant résume la manière dont les fournisseurs de navigateurs courants indiquent que leurs navigateurs s'exécutent sur un appareil mobile&nbsp;:

| Navigateur                                                           | Règle                                                        | Exemple                                                                                                                                                          |
| -------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                             | `Mobile` ou `Tablet` à l'intérieur du commentaire.           | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| Basé sur WebKit (Android, Safari)                                    | Jeton `Mobile Safari` à l'extérieur du commentaire.          | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Basé sur Blink (Chromium, Google Chrome, Opera 15+, Edge on Android) | Jeton `Mobile Safari` à l'extérieur du commentaire.          | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge sur Windows 10 Mobile                                           | Jetons `Mobile/xyz` et `Edge/` à l'extérieur du commentaire. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

En bref, vous pouvez rechercher la chaîne de caractères `Mobi` n'importe où dans la chaîne de caractères de l'agent utilisateur.
Si l'appareil est suffisamment grand pour ne pas être identifié par `Mobi`, vous devriez lui proposer votre site pour ordinateur de bureau (qui, conformément aux bonnes pratiques, devrait de toute façon prendre en charge la saisie tactile, car les appareils de bureau peuvent être équipés d'écrans tactiles).

## Voir aussi

- [Requêtes de média CSS](/fr/docs/Web/CSS/Guides/Media_queries)
- [Indications de client HTTP](/fr/docs/Web/HTTP/Guides/Client_hints)
- [Mise en œuvre de la détection de fonctionnalités](/fr/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migration vers les indications client de l'agent utilisateur <sup>(angl.)</sup>](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) sur web.dev (2021)
