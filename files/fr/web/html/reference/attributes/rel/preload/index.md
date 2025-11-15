---
title: rel="preload"
slug: Web/HTML/Reference/Attributes/rel/preload
original_slug: Web/HTML/Attributes/rel/preload
l10n:
  sourceCommit: 7acfa06975b187f5dd640c19d4a10f76badcb094
---

La valeur `preload` de l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Elements/link#rel) de l'élément HTML {{HTMLElement("link")}} permet de déclarer des requêtes à récupérer dans la partie {{HTMLElement("head")}} du HTML de la page, en spécifiant les ressources dont votre page va avoir besoin dans peu de temps, et qu'il serait souhaitable de charger le plus tôt possible, avant que le rendu de la page par le navigateur ne commence. Cela permet de s'assurer que les ressources sont disponibles plus tôt et qu'elles auront moins de chances de bloquer le rendu de la page, ce qui améliore les performances.

## Les bases

Pour charger un fichier CSS permettant de styler une page, on utilise le plus souvent l'élément `<link>` de la manière suivante&nbsp;:

```html
<link rel="stylesheet" href="styles/main.css" />
```

Ici, nous allons utiliser la valeur `preload` sur l'attribut `rel`, ce qui transformera l'élément `<link>` en outil de préchargement utilisable pour n'importe quelle ressource. Nous devrons aussi indiquer&nbsp;:

- le chemin de la ressource dans l'attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/link#href)&nbsp;;
- le type de ressource dans l'attribut [`as`](/fr/docs/Web/HTML/Reference/Elements/link#as)&nbsp;;

Voici un exemple simple (voir nos [fichiers JS et CSS d'exemple <sup>(angl.)</sup>](https://github.com/mdn/html-examples/tree/master/link-rel-preload/js-and-css) et le [résultat obtenu <sup>(angl.)</sup>](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/))&nbsp;:

```html
<head>
  <meta charset="utf-8" />
  <title>Exemple de préchargement JS et CSS</title>

  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />

  <link rel="stylesheet" href="style.css" />
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
- appliquer la bonne [stratégie de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP) aux ressources&nbsp;;
- mettre en place les bons en-têtes de requêtes {{HTTPHeader("Accept")}} pour les ressources.

### Quels types de contenu peuvent être préchargés&nbsp;?

De nombreux différents types de contenu peuvent être préchargés. Les valeurs possibles de l'attribut `as` sont les suivantes&nbsp;:

- `fetch`&nbsp;: Ressource à récupérer via une requête fetch ou XHR, comme un ArrayBuffer, un binaire WebAssembly ou un fichier JSON.
- `font`&nbsp;: Fichier de police.
- `image`&nbsp;: Fichier image.
- `script`&nbsp;: Fichier JavaScript.
- `style`&nbsp;: Feuille de style CSS.
- `track`&nbsp;: Fichier WebVTT.

> [!NOTE]
> Le préchargement des types `font` et `fetch` nécessite que l'attribut `crossorigin` soit défini&nbsp;; voir [Préchargement avec CORS](#récupération_de_lactivation_du_cors) ci-dessous.

> [!NOTE]
> Pour plus de détails sur ces valeurs et les fonctionnalités web associées, consultez la spécification HTML — voir [Link type "preload" <sup>(angl.)</sup>](https://html.spec.whatwg.org/#match-preload-type). Notez aussi que la liste complète des valeurs acceptées par l'attribut `as` est définie par la spécification Fetch — voir [request destinations <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#concept-request-destination).

## Inclure un type MIME

Les éléments `<link>` peuvent accepter un attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/link#type), qui contient le type MIME de la ressource ciblée. Cela est particulièrement utile lors du préchargement de ressources&nbsp;: le navigateur utilise la valeur de l'attribut `type` pour déterminer s'il prend en charge cette ressource, et ne la télécharge que si c'est le cas, l'ignorant sinon.

```html
<head>
  <meta charset="utf-8" />
  <title>Exemple de préchargement de vidéo</title>

  <link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
</head>
<body>
  <picture>
    <source src="flower.avif" type="image/avif" />
    <source src="flower.webp" type="image/webp" />
    <img src="flower.jpg" />
  </picture>
</body>
```

Le code de l'exemple ci-dessus fait que l'image `image/avif` est préchargée uniquement dans les navigateurs qui la prennent en charge — et pour les utilisateur·ice·s qui ont la prise en charge de `image/avif` dans leur navigateur, l'image `image/avif` est effectivement utilisée (car c'est le premier {{HTMLElement("source")}} indiqué). Cela rend le téléchargement de l'image probablement plus léger pour les utilisateur·ice·s qui ont la prise en charge de `image/avif` dans leur navigateur.

Notez que pour les utilisateur·ice·s dont le navigateur prend en charge à la fois `image/avif` et `image/webp`, si dans ce code un élément `<link rel="preload" href="flower.webp" as="image" type="image/webp">` était aussi indiqué, alors les deux images `image/avif` et `image/webp` seraient préchargées — même si une seule d'entre elles serait réellement utilisée.

Il est donc déconseillé d'indiquer le préchargement pour plusieurs types d'une même ressource. La bonne pratique est d'indiquer le préchargement uniquement pour le type que la majorité des utilisateur·ice·s va réellement utiliser. C'est pourquoi le code de l'exemple ci-dessus n'indique pas le préchargement pour l'image au format `image/webp`.

Cependant, l'absence de préchargement n'empêche pas l'image `image/webp` d'être réellement utilisée par celles et ceux qui en ont besoin : pour les utilisateur·ice·s dont le navigateur ne prend pas en charge `image/avif` mais prend en charge `image/webp`, le code de l'exemple ci-dessus fait toujours que l'image au format `image/webp` est utilisée — mais cela se fait sans aussi indiquer le préchargement inutilement pour la majorité des autres utilisateur·ice·s.

## Récupération de l'activation du <i lang="en">CORS</i>

Lors du préchargement des ressources analysées par des fonctions activant le [CORS](/fr/docs/Web/HTTP/Guides/CORS) (partage des ressources entre origines multiples), comme par exemple {{DOMxRef("Window.fetch", "fetch()")}}, {{DOMxRef("XMLHttpRequest")}} ou [fonts](/fr/docs/Web/CSS/Reference/At-rules/@font-face)), une attention particulière doit être portée à la mise en place de l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Elements/link#crossorigin) sur l'élément {{HTMLElement("link")}}. L'attribut à besoin d'être mis en place pour faire correspondre le <i lang="en">CORS</i> de la ressource et le mode d'identification, même s'il ne s'agit pas d'une ressource ayant une origine différente de celle de la page.

Comme mentionné ci-dessus, un cas de figure intéressant est celui qui s'applique aux fichiers de polices. Pour plusieurs raisons, celles-ci doivent être analysées en utilisant le mode anonyme du <i lang="en">CORS</i> (voir cet article en anglais&nbsp;: [<i lang="en">Font fetching requirements</i> <sup>(angl.)</sup>](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Voici un cas d'utilisation. Vous trouverez [le code source complet sur GitHub <sup>(angl.)</sup>](https://github.com/mdn/html-examples/tree/master/link-rel-preload/fonts) ainsi qu'une [démonstration <sup>(angl.)</sup>](https://mdn.github.io/html-examples/link-rel-preload/fonts/)&nbsp;:

```html
<head>
  <meta charset="utf-8" />
  <title>Exemple de préchargement de police Web</title>

  <link
    rel="preload"
    href="fonts/cicle_fina-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />
  <link
    rel="preload"
    href="fonts/zantroke-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link href="style.css" rel="stylesheet" />
</head>
<body>
  …
</body>
```

En plus de fournir un type MIME avec l'attribut `type`, ce code utilise un attribut `crossorigin` afin de s'assurer que le préchargement du <i lang="en">CORS</i> correspond à la requête de chargement de la police.

## Inclure des médias

Une autre belle fonctionnalité de l'élément `<link>` concerne leur capacité à accepter les attributs [`media`](/fr/docs/Web/HTML/Reference/Elements/link#media). Il peut accepter les requêtes de [types de médias](/fr/docs/Web/CSS/Reference/At-rules/@media#media_types) ou encore des [<i lang="en">media queries</i>](/fr/docs/Web/CSS/Guides/Media_queries/Using) complètes, ce qui vous permet de faire du préchargement <i lang="en">responsive</i>&nbsp;!

Voici un exemple. Vous pouvez consulter son [code source sur GitHub <sup>(angl.)</sup>](https://github.com/mdn/html-examples/tree/master/link-rel-preload/media) ou étudier un [exemple de démonstration <sup>(angl.)</sup>](https://mdn.github.io/html-examples/link-rel-preload/media/)&nbsp;:

```html
<head>
  <meta charset="utf-8" />
  <title>Exemple de préchargement responsive</title>

  <link
    rel="preload"
    href="bg-image-narrow.png"
    as="image"
    media="(width <= 600px)" />
  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(width > 600px)" />

  <link rel="stylesheet" href="main.css" />
</head>
<body>
  <header>
    <h1>Mon site</h1>
  </header>

  <script>
    const mediaQueryList = window.matchMedia("(width <= 600px)");
    const header = document.querySelector("header");

    if (mediaQueryList.matches) {
      header.style.backgroundImage = 'url("bg-image-narrow.png")';
    } else {
      header.style.backgroundImage = 'url("bg-image-wide.png")';
    }
  </script>
</body>
```

Dans cet exemple nous incluons les attributs `media` dans notre élément `<link>` pour qu'une image plus fine soit préchargée si la personne visitant le site dispose d'un écran plus petit, et pour qu'une image plus large soit chargée sur les écrans plus larges. Pour cela, nous utilisons {{DOMxRef("Window.matchMedia")}} et {{DOMxRef("MediaQueryList")}} (consultez la page [Tester les requêtes média en JavaScript](/fr/docs/Web/CSS/Guides/Media_queries/Testing) pour en savoir plus).

Cela augmente les chances que la police sera disponible lors du rendu de la page, et diminue les risques de <i lang="en">FOUT</i> (pour <i lang="en">flash of unstyled text</i>, soit «&nbsp;flash de texte sans mis en forme&nbsp;» en français).

Il sera dommage de limiter le préchargement aux images, voyez plus loin&nbsp;! On pourrait imaginer de précharger l'affichage d'un diagramme SVG si le visiteur se trouve sur un petit écran avec une bande passante ou une disponibilité CPU plus limitée, ou encore de précharger des morceaux de JavaScript complexes utilisés pour faire fonctionner une modélisation 3D interactive uniquement si les ressources du visiteur sont suffisantes.

## Scripts et préchargement

> [!NOTE]
> Utilisez [`<link rel="modulepreload">`](/fr/docs/Web/HTML/Reference/Attributes/rel/modulepreload) à la place si vous travaillez avec des [modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules).

Un autre avantage de ces préchargements est que vous pouvez les exécuter avec un script.
Par exemple, ici nous créons une instance {{DOMxRef("HTMLLinkElement")}} puis nous l'ajoutons au <i lang="en">DOM</i>&nbsp;:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

Cela signifie que le navigateur va précharger le fichier `myscript.js`, mais ne va pas réellement l'utiliser directement. Pour l'utiliser, vous pouvez faire ceci&nbsp;:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

C'est utile lorsque vous voulez précharger un script mais repousser son exécution au moment exact où vous en avez réellement besoin.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading) pour une comparaison entre `<link rel="preload">` et d'autres fonctionnalités similaires d'amélioration des performances.
- [«&nbsp;Preload&nbsp;: à quoi ça sert&nbsp;?&nbsp;» <sup>(angl.)</sup>](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) par Yoav Weiss
