---
title: Détection du navigateur à l'aide de User-Agent
slug: Web/HTTP/Browser_detection_using_the_user_agent
---

{{HTTPSidebar}}

Afficher des pages web ou des services en fonction du navigateur est généralement une mauvaise idée. Le Web se doit d'être accessible à tout le monde, sans prendre en compte le navigateur ou l'appareil utilisé. Il existe différentes façons de développer votre site web afin de l'améliorer progressivement en se basant sur des fonctionnalités standard plutôt qu'en traitant chaque navigateur de manière spécifique.

Les navigateurs et les standards ne sont cependant pas parfaits, il reste certains cas limites pour lesquels connaître le navigateur utilisé peut s'avérer utile. Utiliser la chaîne de caractères fournie par l'en-tête HTTP [`User-Agent`](/fr/docs/Web/HTTP/Headers/User-Agent) et disponible en JavaScript via la propriété [`navigator.userAgent`](/fr/docs/Web/API/Navigator/userAgent) dans ce but paraît simple, mais le faire de manière fiable est en réalité très difficile. Ce document va vous guider pour le faire aussi correctement que possible.

> **Note :** Il est important de rappeler qu'utiliser le contenu de l'en-tête `User-Agent` est rarement une bonne idée. Il est presque toujours possible de trouver une solution plus générique et compatible avec un plus grand nombre de navigateurs et d'appareils&nbsp;!

## Considérations à prendre en compte avant d'identifier le navigateur

Lorsque vous cherchez à analyser le contenu de la chaîne de caractères de l'en-tête `User-Agent` pour détecter le navigateur utilisé, la première étape consiste à éviter cette méthode autant que possible. Commencez par identifier **pourquoi** vous souhaitez le faire.

- Êtes-vous en train d'essayer de corriger un bogue pour une version spécifique d'un navigateur&nbsp;?
  - : Recherchez ou demandez sur les forums spécialisés&nbsp;: vous n'êtes certainement pas la première ou le premier à rencontrer le problème. Des expertes, experts ou d'autres personnes avec un point de vue différent peuvent vous donner des idées pour contourner le problème. Si le bogue n'est pas fréquent, il peut être utile de vérifier s'il a déjà été signalé à l'éditeur du navigateur dans son système de suivi des bogues ([Mozilla](https://bugzilla.mozilla.org/), [WebKit](https://bugs.webkit.org/), [Opera](https://bugs.opera.com)). Les éditeurs sont attentifs aux bogues signalés, leur analyse du problème peut apporter un éclairage nouveau permettant de le contourner.
- Cherchez-vous à vérifier l'existence d'une fonctionnalité particulière&nbsp;?

  - : Votre site a besoin d'une fonctionnalité qui n'est pas encore prise en charge par certains navigateurs et vous souhaitez servir à leurs utilisateurs une version plus ancienne du site, avec moins de fonctionnalités mais pour lesquelles vous avez la certitude de leur fonctionnement. Il s'agit de la pire raison pour utiliser l'en-tête `User-Agent`, car il y a de grandes chances que ces navigateurs finissent par rattraper leur retard, qu'il n'est pas pratique de tester tous les navigateurs qui existent. Dans ce cas, le mieux est d'éviter d'utiliser l'en-tête `User-Agent` et de détecter les fonctionnalités disponibles.

- Voulez-vous servir un code HTML différent selon le navigateur utilisé&nbsp;?
  - : Il s'agit généralement d'une mauvaise pratique, mais qui peut être nécessaire dans certains cas. Vous devez alors analyser la situation pour vous assurer que c'est absolument nécessaire. Pouvez-vous l'éviter en ajoutant des éléments non sémantiques tels que [`<div>`](/fr/docs/Web/HTML/Element/div) ou [`<span>`](/fr/docs/Web/HTML/Element/span)&nbsp;? La difficulté et les risque à utiliser l'en-tête `User-Agent` justifie des exceptions à la pureté du code HTML. Vous pouvez aussi repenser le design&nbsp;: pouvez-vous plutôt utiliser l'amélioration progressive ou utiliser une disposition flexible pour éviter d'y avoir recours&nbsp;?

## Éviter de détecter l'agent utilisateur

Il existe des options possibles à considérer pour éviter d'avoir à détecter l'agent utilisateur.

- Détection de fonctionnalités
  - : La détection de fonctionnalités consiste à ne pas détecter quel navigateur affiche la page mais plutôt à vérifier qu'une fonctionnalité est disponible. Dans le cas contraire vous pouvez utiliser une solution de contournement. Dans les rares cas où les comportements des fonctionnalités varient entre les navigateurs, on évitera d'analyser l'en-tête `User-Agent` et on implémentera plutôt un test permettant de détecter la façon dont le navigateur implémente l'API afin de déterminer comment l'utiliser dans son programme. En 2017, Chrome [a retiré la préférence masquant la prise en charge expérimentale des références arrières dans les expressions rationnelles](https://chromestatus.com/feature/5668726032564224) alors qu'aucun autre navigateur n'implémentait cette fonctionnalité. On aurait pu être tenté⋅e d'écrire ceci&nbsp;:

```js
if (navigator.userAgent.indexOf("Chrome") !== -1) {
  // On pense que les références arrières sont prises en charge
  // Attention à ne pas utiliser la notation littérale /(?<=[A-Z])/,
  // car cela entraînerait une erreur de syntaxe pour les navigateurs
  // qui n'implémentent pas cette fonctionnalité. En effet, les
  // navigateurs analysent le script en entier, y compris les
  // branches du code qui ne sont jamais utilisées.
  var camelCaseExpression = new RegExp("(?<=[A-Z])");
  var splitUpString = function (str) {
    return ("" + str).split(camelCaseExpression);
  };
} else {
  /* Ce code alternatif est bien moins performant mais fonctionne */
  var splitUpString = function (str) {
    return str.replace(/[A-Z]/g, "z$1").split(/z(?=[A-Z])/g);
  };
}
console.log(splitUpString("totoTruc")); // ["totoT", "ruc"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

Le code qui précède se base sur plusieurs hypothèses incorrectes. Tout d'abord que, parce que la chaîne de caractères `userAgent` contient `"Chrome"`, le navigateur est Chrome. Ce n'est pas le cas, les chaînes `userAgent` contiennent de nombreuses sources de confusion.

On a ensuite l'hypothèse que la fonctionnalité en question est toujours disponible si le navigateur est Chrome. Or, il peut s'agir d'une version antérieure où la fonctionnalité n'était pas encore disponible voire, plus tard, d'une version ultérieure où la fonctionnalité a fini par être retirée.

Enfin, ce code part du principe qu'aucun autre navigateur ne prendra jamais en charge cette fonctionnalité. Si un autre navigateur implémentait cette fonctionnalité, l'utilisation de script forcerait à ignorer cette possibilité.

Pour éviter ce type de problèmes, on pourra tester la présence même de la fonctionnalité&nbsp;:

```js
let isLookBehindSupported = false;

try {
  new RegExp("(?<=)");
  isLookBehindSupported = true;
} catch (err) {
  // Si l'agent utilisateur ne prend pas en charge cette
  // fonctionnalité, la tentative de création ci-avant
  // échouera et déclenchera une erreur et
  // isLookBehindSupported restera à false.
}

const splitUpString = isLookBehindSupported
  ? function (str) {
      return ("" + str).split(new RegExp("(?<=[A-Z])"));
    }
  : function (str) {
      return str.replace(/[A-Z]/g, "z$1").split(/z(?=[A-Z])/g);
    };
```

Comme le code précédent le montre, il y a **toujours** un moyen de tester la prise en charge d'un navigateur sans chercher à analyser la chaîne `userAgent`. Ce n'est **jamais** une bonne raison pour utiliser cette information.

Enfin, le code précédent illustre un problème critique avec le développement pour les différents navigateurs qui doit toujours être pris en compte. Il ne faut pas utiliser, de façon non-intentionnelle, les API qu'on teste dans les navigateurs incompatibles. Cela peut sembler simple, mais ce n'est pas toujours le cas. Dans l'exemple qui précède, l'utilisation d'une expression rationnelle littérale (par exemple `/reg/igm`) et qui utilise des références arrières provoquera une erreur d'analyse du code dans les navigateurs qui ne les prennent pas en charge. Aussi, il faut utiliser la forme `new RegExp("(?<=truc_arrière)");` plutôt que `/(?<=look_behind_stuff)/`, même dans la section du code qui traite des navigateurs compatibles.

- Amélioration progressive
  - : Cette technique de conception signifie séparer la page web en couches, en utilisant une approche ascendante, en commençant par une couche simple (avec peu ou pas de fonctionnalités) puis en améliorant les capacités par couches successives, chacune comportant plus de fonctionnalités.
- Dégradation élégante
  - : Il s'agit d'une approche descendante, avec laquelle on construit le site avec toutes les fonctionnalités souhaitées, pour ensuite le faire fonctionner sur des navigateurs plus anciens. Cette technique est plus difficile et moins efficace que l'amélioration progressive mais s'avère utile dans certains cas.
- Détection des appareils mobiles

  - : Un des cas les plus fréquents de mauvaise utilisation de la chaîne `userAgent` porte sur le caractère mobile ou non de l'appareil. La plupart du temps, cette méthode rapide occulte l'information réellement recherchée. L'analyse de la chaîne `userAgent` est utilisée pour déterminer si l'appareil peut être tactile et s'il a un petit écran, afin d'adapter le site web. Bien que cette méthode puisse détecter ces caractéristiques dans certains cas, tous les appareils ne se ressemblent pas&nbsp;: certains appareils mobiles ont des grands écrans, certains ordinateurs de bureau ont un petit écran tactile, d'autres encore sont des télévisions et les gens peuvent changer les dimensions de leur écran en tournant leur tablette sur le côté Heureusement, il existe de bien meilleures alternatives. On pourra utiliser [`Navigator.maxTouchPoints`](/fr/docs/Web/API/Navigator/maxTouchPoints) afin de déterminer si l'appareil possède un écran tactile et ensuite seulement se rabattre sur la vérification de la chaîne `userAgent` dans un bloc _if (!("maxTouchPoints" in navigator)) { /\*Code here\*/}_. En utilisant cette information sur la présence d'un écran tactile, il n'est pas nécessaire de changer toute la disposition du site pour ces appareils&nbsp;: cela ne fera qu'augmenter la charge de maintenance. À la place, vous pouvez ajouter de quoi rendre la navigation tactile plus accessible avec des boutons plus facilement cliquables par exemple (en utilisant CSS pour augmenter la taille de la police). Voici un exemple de code qui augmente le remplissage de #boutonExemple jusqu'à `1em` sur les appareils mobiles.

```js
var hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
  if (mQ && mQ.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
  } else if ("orientation" in window) {
    hasTouchScreen = true; // dépréciée mais utile au cas où
  } else {
    // en dernier recours, on regarde userAgent
    var UA = navigator.userAgent;
    hasTouchScreen =
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
  }
}
if (hasTouchScreen)
  document.getElementById("boutonExemple").style.padding = "1em";
```

En ce qui concerne la taille de l'écran, on utilisera `window.innerWidth` et `window.addEventListener("resize", function(){ /\*refresh screen size dependent things\*/ })`. Sur ce sujet, on ne veut pas que des informations soient masquées sur les plus petits écrans. Cela sera source de frustration et forcera à utiliser la version pour ordinateur. On essaiera plutôt d'avoir moins de colonnes d'informations sur une page plus longue pour les écrans plus étroits et une page avec plus de colonnes mais plus courte sur les écrans plus larges. On peut obtenir cet effet en CSS avec [les boîtes flexibles](/fr/docs/Learn/CSS/CSS_layout/Flexbox), voire avec [le flottement](/fr/docs/Learn/CSS/CSS_layout/Floats) comme méthode alternative de recours.

Pour plus de détails, voir [l'article sur le <i lang="en">responsive design</i>](/fr/docs/Learn/CSS/CSS_layout/Responsive_Design).

## Tirer le meilleur parti de l'analyse de la chaîne `userAgent`

Après avoir vu les alternatives précédentes, il existe quelques cas où l'analyse de `userAgent` est appropriée et justifiée.

Un de ces cas est l'utilisation en méthode de dernier recours pour détecter si l'appareil dispose d'un écran tactile. Voir la section précédente pour plus d'informations.

Un autre cas porte sur la correction de bogues dans les navigateurs qui ne sont pas automatiquement mis à jour. Internet Explorer (sur Windows) et Webkit (sur iOS) sont deux bons exemples ici. Avant sa version 9, Internet Explorer avait de nombreux problèmes, mais il était simple de l'identifier en raison des fonctionnalités spécifiques disponibles. Webkit est utilisé dans tous les navigateurs sur iOS et on ne peut donc pas accéder à un navigateur mis à jour sur un appareil plus ancien. Certains bogues peuvent être détectés mais pas tous avec la même facilité. Dans de tels cas, il peut être bénéfique que d'utiliser l'analyse de `userAgent` pour économiser des performances. Par exemple, Webkit 6 a un bogue où, lorsque l'orientation de l'appareil change, le navigateur peut ne pas déclencher [`MediaQueryList`](/fr/docs/Web/API/MediaQueryList) alors qu'il devrait. Pour contourner ce bogue, voyez le code qui suit.

```js
var UA = navigator.userAgent,
  isWebkit =
    /\b(iPad|iPhone|iPod)\b/.test(UA) &&
    /WebKit/.test(UA) &&
    !/Edge/.test(UA) &&
    !window.MSStream;

var mediaQueryUpdated = true,
  mqL = [];
function whenMediaChanges() {
  mediaQueryUpdated = true;
}

var listenToMediaQuery = isWebkit
  ? function (mQ, f) {
      if (/height|width/.test(mQ.media)) mqL.push([mQ, f]);
      mQ.addListener(f), mQ.addListener(whenMediaChanges);
    }
  : function () {};
var destroyMediaQuery = isWebkit
  ? function (mQ) {
      for (var i = 0, len = mqL.length | 0; i < len; i = (i + 1) | 0)
        if (mqL[i][0] === mQ) mqL.splice(i, 1);
      mQ.removeListener(whenMediaChanges);
    }
  : listenToMediaQuery;

var orientationChanged = false;
addEventListener(
  "orientationchange",
  function () {
    orientationChanged = true;
  },
  PASSIVE_LISTENER_OPTION,
);

addEventListener(
  "resize",
  setTimeout.bind(
    0,
    function () {
      if (orientationChanged && !mediaQueryUpdated)
        for (var i = 0, len = mqL.length | 0; i < len; i = (i + 1) | 0)
          mqL[i][1](mqL[i][0]);
      mediaQueryUpdated = orientationChanged = false;
    },
    0,
  ),
);
```

## Où se trouve l'information recherchée dans le User-Agent

C'est la partie difficile, puisque les différentes sections de la chaîne `User-Agent` ne sont pas standardisées.

### Nom du navigateur

Souvent ceux qui disent vouloir détecter le navigateur veulent en fait détecter le moteur de rendu. Souhaitez-vous détecter Firefox et non Seamonkey, ou Chrome et non Chromium&nbsp;? Ou seulement savoir si le navigateur utilise le moteur de rendu Gecko ou Webkit&nbsp;? Dans ce dernier cas, voyez plus bas dans cette page.

La plupart des navigateurs notent leur nom et version suivant le format _NomDuNavigateur/NuméroDeVersion_, à l'exception notable d'Internet Explorer. Le nom n'est cependant pas la seule information du User-Agent qui respecte ce format, il n'est donc pas possible d'y trouver directement le nom du navigateur, seulement de vérifier si le nom recherché est présent ou non. Attention certains navigateurs mentent&nbsp;: par exemple, Chrome mentionne à la fois Chrome et Safari dans `User-Agent`. Pour détecter Safari il faut donc vérifier que la chaîne "Safari" est présente et que "Chrome" est absent. De la même façon, Chromium se présente souvent comme Chrome et Seamonkey comme Firefox.

Faites aussi attention à ne pas utiliser une expression rationnelle trop simple sur le nom du navigateur, car `User-Agent` contient d'autres chaînes de caractères ne respectant pas le format clé/valeur. Par exemple, `User-Agent` pour Safari et Chrome contient une chaîne "like Gecko".

| Moteur                | Doit contenir           | Ne doit pas contenir           |
| --------------------- | ----------------------- | ------------------------------ |
| Firefox               | `Firefox/xyz`           | `Seamonkey/xyz`                |
| Seamonkey             | `Seamonkey/xyz`         |                                |
| Chrome                | `Chrome/xyz`            | `Chromium/xyz`                 |
| Chromium              | `Chromium/xyz`          |                                |
| Safari                | `Safari/xyz`            | `Chrome/xyz` ou `Chromium/xyz` |
| Opera 15+ (Blink)     | `OPR/xyz`               |                                |
| Opera 12- (Presto)    | `Opera/xyz`             |                                |
| Internet Explorer 10- | `; MSIE xyz;`           |                                |
| Internet Explorer 11  | `Trident/7.0; .*rv:xyz` |                                |

\[1] Safari fournit deux numéros de version&nbsp;: un numéro technique avec le fragment `Safari/xyz` token, et un numéro grand public avec le fragment `Version/xyz`.

Il n'y a évidemment aucune garantie qu'aucun autre navigateur ne va utiliser ces notations (comme Chrome qui mentionne "Safari" dans son User-Agent). C'est pourquoi la détection du navigateur par ce moyen n'est pas fiable et ne doit être fait qu'en vérifiant aussi le numéro de version (il est peu probable qu'un navigateur mentionne dans son User-Agent le nom d'un autre navigateur dans une version plus ancienne).

### Version du navigateur

La version du navigateur est souvent, mais pas toujours, écrite dans la valeur d'un ensemble clé/valeur _NomDuNavigateur/NuméroDeVersion_ dans la chaîne de caractères `User-Agent`. Ce n'est pas le cas d'Internet Explorer (qui écrit son numéro de version juste après la chaîne "MSIE"), et d'Opera après la version 10, qui ajoute une section _Version/NuméroDeVersion_.

Encore une fois, assurez vous de regarder au bon endroit selon le navigateur visé car il n'y a aucune garantie de trouver un numéro de version valide dans le reste de la chaîne.

### Moteur de rendu

Comme indiqué plus haut, chercher le nom du moteur de rendu est la plupart du temps la meilleure solution. Cela permet de ne pas exclure des navigateurs peu connus basés sur le même moteur de rendu qu'un autre plus connu. Les navigateurs qui utilisent le même moteur de rendu affichent les pages de la même façon&nbsp;: on peut partir du principe que ce qui va fonctionner avec l'un fonctionnera avec l'autre.

Il y a cinq principaux moteurs de rendu&nbsp;: Trident, Gecko, Presto, Blink et Webkit. Puisque détecter le nom du moteur de rendu est courant, d'autres noms sont ajoutés dans beaucoup d'autres chaînes `User-Agent`. Il est donc important de faire attention aux faux positifs lorsqu'on cherche à détecter le moteur de rendu.

| Moteur   | Doit contenir     | Commentaire                                                                                                                                                                                                                                |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                                                                            |
| WebKit   | `AppleWebKit/xyz` | Attention, les navigateurs WebKit ajoutent une chaîne 'like Gecko' qui peut produire des faux positifs.                                                                                                                                    |
| Presto   | `Opera/xyz`       | **Note :** Presto n'est plus utilisé pour les versions d'Opera >= 15 (voir 'Blink')                                                                                                                                                        |
| Trident  | `Trident/xyz`     | Internet Explorer place ce fragment dans la partie _commentaires_ de la chaîne `User-Agent`                                                                                                                                                |
| EdgeHTML | `Edge/xyz`        | La version de Edge non-basée sur Chromium indique la version du moteur après le fragment `Edge/`, mais pas la version de l'application. **Note :** EdgeHTML n'est plus utilisé pour le navigateur Edge après la version 79 (voir 'Blink'). |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                                                                            |

## Version du moteur de rendu

La plupart des moteurs de rendu placent leur numéro de version dans la section _MoteurDeRendu/NuméroDeVersion_, à l'exception notable de Gecko. Gecko place le numéro de version dans la partie commentaire après la chaîne `rv:`. Depuis la version 14 pour mobile et 17 pour les ordinateurs, il place aussi cette valeur dans la section `Gecko/version` (les versions précédentes y plaçaient la date de compilation, puis une date fixe appelée «&nbsp;Gecko Trail&nbsp;»).

## Système d'exploitation

Le système d'exploitation est dans la plupart des cas donné dans le User-Agent mais sous un format très variable. C'est une chaîne encadrée par des points-virgules, dans la partie commentaire de la chaîne `User-Agent`. Cette chaîne est spécifique à chaque navigateur. Elle indique le nom du système d'exploitation et souvent sa version et des informations sur l'architecture (32 ou 64 bits, ou Intel/PPC pour Mac).

Comme pour le reste, ces chaînes peuvent changer dans le futur, elles doivent seulement être utilisées en conjonction avec la détection de navigateurs existants. Une veille technologique doit s'effectuer pour adapter le script de détection lorsque de nouvelles versions des navigateurs sortent.

### Mobile, tablette ou ordinateur

La raison la plus courante de détecter le User-Agent et de déterminer sur quel type d'appareil fonctionne le navigateur. Le but est de servir un code HTML différent selon le type d'appareil.

- Ne partez jamais du principe qu'un navigateur ne fonctionne que sur un seul type d'appareil. En particulier, ne pas définir de paramètre par défaut selon le navigateur.
- N'utilisez jamais la chaîne dédiée au système d'exploitation pour déterminer si le navigateur est sur un mobile, une tablette ou un ordinateur. Le même système d'exploitation peut fonctionner sur plusieurs types d'appareil (par exemple, Android fonctionne aussi bien sur des tablettes que sur des téléphones).

Le tableau suivant résume de quelle façon les principaux navigateurs indiquent qu'ils fonctionnent sur un appareil mobile&nbsp;:

| Navigateur                                                             | Rule                                                                                                                                                                                                                                                         | Exemple                                                                                                                                                          |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                               | `Mobile` ou `Tablet` dans le commentaire.                                                                                                                                                                                                                    | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| Basé sur WebKit (Android, Safari)                                      | Fragment `Mobile Safari` [en dehors du commentaire](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/OptimizingforSafarioniPhone/OptimizingforSafarioniPhone.html#//apple_ref/doc/uid/TP40006517-SW3). | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Basé sur Blink (Chromium, Google Chrome, Opera 15+, Edge pour Android) | Fragment `Mobile Safari` [en dehors du commentaire](https://developer.chrome.com/docs/multidevice/user-agent/).                                                                                                                                              | `Mozilla/5.0 (Linux; Android 4.4.2); Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047` |
| Presto-based (Opera 12-)                                               | Fragment `Opera Mobi/xyz` [dans le commentaire](https://developers.whatismybrowser.com/useragents/explore/layout_engine_name/presto/).                                                                                                                       | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Internet Explorer                                                      | Fragment `IEMobile/xyz` dans le commentaire.                                                                                                                                                                                                                 | `Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)`                                                                            |
| Edge sur Windows 10 Mobile                                             | Fragments `Mobile/xyz` et `Edge/` en dehors du commentaire.                                                                                                                                                                                                  | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

En résumé, nous recommandons de chercher la chaîne `Mobi` dans la chaîne `User-Agent` pour détecter un appareil mobile.

> **Note:** Si l'appareil est suffisamment grand pour ne pas être indiqué `Mobi`, il est préférable de servir la version du site pour ordinateur. De toute manière, supporter les interactions tactiles pour un site «&nbsp;pour ordinateur&nbsp;» est une bonne pratique. En effet, de plus en plus d'ordinateurs sont équipés d'écrans tactiles.
