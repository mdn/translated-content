---
title: "Types de liens\_: preload"
slug: Web/HTML/Link_types/preload
translation_of: Web/HTML/Link_types/preload
browser-compat: html.elements.link.rel.preload
---
{{HTMLSidebar}}

La valeur `preload` de l'attribut {{htmlattrxref("rel", "link")}} de l'élément {{htmlelement("link")}} permet de déclarer des requêtes à récupérer dans la partie {{htmlelement("head")}} du HTML de la page, en spécifiant les ressources dont votre page va avoir besoin dans peu de temps, et qu'il serait souhaitable de charger le plus tôt possible, avant que le rendu de la page par le navigateur ne commence. Cela permet de s'assurer que les ressources sont disponibles plus tôt et qu'elles auront moins de chances de bloquer le rendu de la page, ce qui améliore les performances.

## Les bases

Pour charger un fichier CSS permettant de styler une page, on utilise le plus souvent l'élément `<link>` de la manière suivante&nbsp;:

```html
<link rel="stylesheet" href="styles/main.css">
```

Ici, nous allons utiliser la valeur `preload` sur l'attribut `rel`, ce qui transformera l'élément `<link>` en outil de préchargement utilisable pour n'importe quelle ressource. Nous devrons aussi indiquer&nbsp;:

- le chemin de la ressource dans l'attribut {{htmlattrxref("href", "link")}}&nbsp;;
- le type de ressource dans l'attribut {{htmlattrxref("as", "link")}}&nbsp;;

Voici un exemple simple (voir nos [fichiers JS et CSS d'exemple](https://github.com/mdn/html-examples/tree/master/link-rel-preload/js-and-css) et le [résultat obtenu](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/))&nbsp;:

```html
<head>
  <meta charset="utf-8">
  <title>Exemple de préchargement JS et CSS</title>

  <link rel="preload" href="style.css" as="style">
  <link rel="preload" href="main.js" as="script">

  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h1>Balles rebondissantes</h1>
  <canvas></canvas>

  <script src="main.js" defer></script>
</body>
```

Dans l'exemple ci-dessus, nous préchargeons nos fichiers CSS et JavaScript afin qu'ils puissent être disponibles dès qu'ils sont nécessaires pour le rendu de la page. Cet exemple est trivial, car le navigateur va probablement découvrir en même temps les balises de préchargement, le `<link rel="stylesheet">` et le `<script>`, mais le bénéfice sera bien plus visible si les ressources sont plus nombreuses, plus lourdes et chargées à différents endroits. Par exemple&nbsp;:

- les ressources qui sont chargées depuis un fichier CSS, comme certaines polices et images&nbsp;;
- les ressources inclues par des fichiers JavaScript, comme des fichiers JSON, d'autres scripts importés ou des services web&nbsp;;
- les fichiers image et vidéos plus importants.

`preload` dispose aussi d'autres avantages. L'utilisation de l'attribut `as` pour spécifier le type de contenu à précharger permet au navigateur de&nbsp;:

- prioriser les ressources se chargeant avec davantage de précision&nbsp;;
- les stocker dans le cache pour de futures requêtes, ce qui permet de réutiliser les ressources si c'est pertinent&nbsp;;
- appliquer la bonne [stratégie de sécurité du contenu](/fr/docs/Web/HTTP/CSP) aux ressources&nbsp;;
- mettre en place les bons en-têtes de requêtes {{HTTPHeader("Accept")}} pour les ressources.

### Quels types de contenu peuvent être préchargés&nbsp;?

De nombreux différents types de contenu peuvent être préchargés. Les valeurs possibles de l'attribut `as` sont les suivantes&nbsp;:

- `audio`&nbsp;: fichier audio, typiquement intégré avec l'élément {{htmlelement("audio")}}&nbsp;;
- `document`&nbsp;: un document HTML destiné à être embarqué dans une {{htmlelement("frame")}} ou dans une {{htmlelement("iframe")}}&nbsp;;
- `embed`&nbsp;: une ressource à embarquer dans un élément {{htmlelement("embed")}}&nbsp;;
- `fetch`&nbsp;: une ressource accessible via une requête `fetch` ou `XHR`, comme un `ArrayBuffer` ou un fichier JSON&nbsp;;
- `font`&nbsp;: un fichier de police&nbsp;;
- `image`&nbsp;: un fichier image&nbsp;;
- `object`&nbsp;: une ressource à embarquer à l'intérieur d'un élément {{htmlelement("object")}}&nbsp;;
- `script`&nbsp;: un fichier JavaScript&nbsp;;
- `style`&nbsp;: une feuille de styles CSS&nbsp;;
- `track`&nbsp;: un fichier WebVTT&nbsp;;
- `worker`&nbsp;: un

  <i lang="en">web worker</i>

  JavaScript ou un

  <i lang="en">worker</i>

  partagé&nbsp;;

- `video`&nbsp;: un fichier vidéo, typiquement intégré avec l'élément {{htmlelement("video")}}.

> **Note :** le préchargement de l'élément `video` est inclut dans la spécification <i lang="en">Preload</i> mais n'est pas encore implémenté par les navigateurs.

> **Note :** pour davantage de détails sur ces valeurs et sur la façon dont la spécification <i lang="en">Preload</i> prévoit de les traiter, consultez [<i lang="en">link element extensions</i> (en anglais)](https://w3c.github.io/preload/#link-element-extensions). Notez également que la liste complète des valeurs acceptées par l'attribut `as` est déterminé par la spécification <i lang="en">Fetch</i> — voir la spécification [<i lang="en">request destinations</i> (en anglais)](https://fetch.spec.whatwg.org/#concept-request-destination).

## Inclure un type MIME

Les éléments `<link>` peuvent accepter un attribut {{htmlattrxref("type", "link")}}, contenant le type MIME de la ressource vers laquelle pointe le document. Ceci est tout spécialement utile lorsque l'on effectue un préchargement des ressources – le navigateur utilisera alors l'attribut `type` pour vérifier s'il prend en charge la ressource et la télécharger si c'est le cas, ou l'ignorer dans le cas contraire.

Vous pouvez voir un exemple de ce fonctionnement dans notre vidéo d'exemple (voir le [code source complet](https://github.com/mdn/html-examples/tree/master/link-rel-preload/video) ou la [version exécutable en direct](https://mdn.github.io/html-examples/link-rel-preload/video/)), utilisant le bout de code proposé ci-dessous. À noter que si ce code ne lancera pas de préchargement effectif sur aucun navigateur – le préchargement des vidéos n'est encore implémenté sur aucun navigateur – cela permet d'illustrer le fonctionnement général du préchargement.

```html
<head>
  <meta charset="utf-8">
  <title>Exemple de préchargement de vidéo</title>

  <link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4">
</head>
<body>
  <video controls>
    <source src="sintel-short.mp4" type="video/mp4">
    <source src="sintel-short.webm" type="video/webm">
    <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici un <a href="sintel-short.mp4">lien vers le fichier vidéo en remplacement</a>.</p>
  </video>
</body>
```

Le code de l'exemple ci-dessus permet le préchargement de la `video/mp4` uniquement sur les navigateurs qui prennent en charge cette fonctionnalité et pour les personnes ayant un navigateur prenant en charge le format `video/mp4` (car ce format est le premier élément {{htmlelement("source")}} spécifié). Cela devrait rendre le lecteur vidéo plus ergonomique et plus [<i lang="en">responsive</i>](/fr/docs/Learn/CSS/CSS_layout/Responsive_Design) pour ces personnes.

Concernant les personnes disposant d'un navigateur prenant en charge tout aussi bien les formats `video/mp4` et `video/webm` support, il est important de noter que si un élément `<link rel="preload" href="sintel-short.webm" as="video" type="video/webm">` est aussi spécifié, alors **les deux formats `video/mp4` et `video/webm` seront préchargés** — même si un seul d'entre eux est utilisé.

En conclusion, il est déconseillé de précharger de multiple formats pour la même ressource. La bonne pratique est plutôt de précharger uniquement le type de média qu'utilise la majorité des personnes qui visitent votre site. C'est pourquoi le code fourni en exemple ne précharge pas la vidéo au format `video/webm`.

Cependant, l'absence de préchargement n'empêche pas la vidéo `video/webm` d'être utilisée par les personnes qui en ont besoin&nbsp;: pour les navigateurs qui ne prennent pas en charge le format `video/mp4` mais qui prennent en charge le format `video/webm` alors le code de l'exemple permettra toujours d'utiliser la vidéo au format `video/webm` — cela évitera simplement de précharger inutilement une ressource pour la plupart des navigateurs.

## Récupération de l'activation du <i lang="en">CORS</i>

Lors du préchargement des ressources analysées par des fonctions activant le [CORS](/fr/docs/Web/HTTP/CORS) (partage des ressources entre origines multiples), comme par exemple [`fetch()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch), [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) ou [fonts](/fr/docs/Web/CSS/@font-face)), une attention particulière doit être portée à la mise en place de l'attribut {{htmlattrxref("crossorigin","link")}} sur l'élément [`<link>`](/fr/docs/Web/HTML/Element/link). L'attribut à besoin d'être mis en place pour faire correspondre le <i lang="en">CORS</i> de la ressource et le mode d'identification, même s'il ne s'agit pas d'une ressource ayant une origine différente de celle de la page.

Comme mentionné ci-dessus, un cas de figure intéressant est celui qui s'applique aux fichiers de polices. Pour plusieurs raisons, celles-ci doivent être analysées en utilisant le mode anonyme du <i lang="en">CORS</i> (voir cet article en anglais&nbsp;: [<i lang="en">Font fetching requirements</i>](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Voici un cas d'utilisation. Vous trouverez [le code source complet sur GitHub](https://github.com/mdn/html-examples/tree/master/link-rel-preload/fonts) ainsi qu'une [démonstration](https://mdn.github.io/html-examples/link-rel-preload/fonts/)&nbsp;:

```html
<head>
  <meta charset="utf-8">
  <title>Exemple de préchargement de police Web</title>

  <link rel="preload" href="fonts/cicle_fina-webfont.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/zantroke-webfont.woff2" as="font" type="font/woff2" crossorigin>

  <link href="style.css" rel="stylesheet">
</head>
<body>
  …
</body>
```

En plus de fournir un type MIME avec l'attribut `type`, ce code utilise un attribut `crossorigin` afin de s'assurer que le préchargement du <i lang="en">CORS</i> correspond à la requête de chargement de la police.

## Inclure des médias

Une autre belle fonctionnalité de l'élément `<link>` concerne leur capacité à accepter les attributs {{htmlattrxref("media", "link")}}. Il peut accepter les requêtes de [types de médias](/fr/docs/Web/CSS/@media#media_types) ou encore des [<i lang="en">media queries</i>](/fr/docs/Web/CSS/Media_Queries/Using_media_queries) complètes, ce qui vous permet de faire du préchargement <i lang="en">responsive</i>&nbsp;!

Voici un exemple. Vous pouvez consulter son [code source sur GitHub](https://github.com/mdn/html-examples/tree/master/link-rel-preload/media) ou étudier un [exemple de démonstration](https://mdn.github.io/html-examples/link-rel-preload/media/)&nbsp;:

```html
<head>
  <meta charset="utf-8">
  <title>Exemple de préchargement responsive</title>

  <link rel="preload" href="bg-image-narrow.png" as="image" media="(max-width: 600px)">
  <link rel="preload" href="bg-image-wide.png" as="image" media="(min-width: 601px)">

  <link rel="stylesheet" href="main.css">
</head>
<body>
  <header>
    <h1>Mon site</h1>
  </header>

  <script>
    var mediaQueryList = window.matchMedia("(max-width: 600px)");
    var header = document.querySelector('header');

    if (mediaQueryList.matches) {
      header.style.backgroundImage = 'url(bg-image-narrow.png)';
    } else {
      header.style.backgroundImage = 'url(bg-image-wide.png)';
    }
  </script>
</body>
```

Dans cet exemple nous incluons les attributs `media` dans notre élément `<link>` pour qu'une image plus fine soit préchargée si la personne visitant le site dispose d'un écran plus petit, et pour qu'une image plus large soit chargée sur les écrans plus larges. Pour cela, nous utilisons {{domxref("Window.matchMedia")}} et {{domxref("MediaQueryList")}} (consultez la page [Tester les requêtes média en JavaScript](/fr/docs/Web/CSS/Media_Queries/Testing_media_queries) pour en savoir plus).

Cela augmente les chances que la police sera disponible lors du rendu de la page, et diminue les risques de <i lang="en">FOUT</i> (pour <i lang="en">flash of unstyled text</i>, soit «&nbsp;flash de texte sans mis en forme&nbsp;» en français).

Il sera dommage de limiter le préchargement aux images, voyez plus loin&nbsp;! On pourrait imaginer de précharger l'affichage d'un diagramme SVG si le visiteur se trouve sur un petit écran avec une bande passante ou une disponibilité CPU plus limitée, ou encore de précharger des morceaux de JavaScript complexes utilisés pour faire fonctionner une modélisation 3D interactive uniquement si les ressources du visiteur sont suffisantes.

## Scripts et préchargement

Une autre fonctionnalité notable est la possibilité d'exécuter le préchargement à l'aide d'un script. Par exemple, voici la création d'une instance {{domxref("HTMLLinkElement")}} qui est ensuite attachée au <i lang="en">DOM</i>&nbsp;:

```js
var preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Cela signifie que le navigateur va précharger le fichier `myscript.js`, mais ne va pas réellement l'utiliser directement. Pour l'utiliser, vous pouvez faire ceci&nbsp;:

```js
var preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

C'est utile lorsque vous voulez précharger un script mais repousser son exécution au moment exact où vous en avez réellement besoin.

## Autres ressources concernant les mécanismes de préchargement

D'autres fonctionnalités de préchargement sont disponibles, mais sachez qu'aucune d'entre elle n'est aussi adaptée à l'objectif recherché que `<link rel="preload">`. En voici la liste&nbsp;:

- `<link rel="prefetch">` est pris en charge depuis quelque temps par les navigateurs, mais est destinée à la récupération préalable des ressources qui vont être utilisées lors de la **_prochaine_** page visitée/chargée (par exemple lorsque vous vous rendrez sur une autre page du site). C'est une bonne chose, mais ce n'est pas utile pour la page en cours de chargement&nbsp;! Par ailleurs, les navigateurs donnent une priorité plus faible à `prefetch` qu'à `preload` — la page courante est prioritaire par rapport à la page suivante. Consultez la [FAQ sur le préchargement des liens](/fr/docs/Web/HTTP/Link_prefetching_FAQ) pour plus de détails&nbsp;;
- `<link rel="prerender">` effectue le rendu une page spécifiée en arrière-plan, ce qui permet d'accélerer son chargement si la personne visitant le site se rend sur cette page par la suite. Du fait du gaspillage potentiel de bande passante pour les visiteurs (on charge des éléments sans savoir si on en aura besoin), Chrome traite l'instruction `prerender` comme une instruction [NoState prefetch](https://developers.google.com/web/updates/2018/07/nostate-prefetch)&nbsp;;
- `<link rel="subresource">` {{non-standard_inline}} était pris en charge par Chrome il y a quelques temps et était destiné à gérer la même chose que `preload`, mais il y avait un problème&nbsp;: il n'y avait aucun moyen de définir une priorité sur les éléments à charger (`as` n'existait pas encore), donc toutes les ressources étaient chargées avec la même priorité (la plus faible)&nbsp;;
- Il y a un grand nombre de scripts de chargements de ressources disponibles un peu partout, mais aucun ne peut avoir la puissance d'une file de priorisation gérée directement par le navigateur. De plus, ces scripts sont sujets à des problèmes de performances similaires.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- <i lang="en">Preload: What Is It Good For?</i>

  par Yoav Weiss (en anglais)
