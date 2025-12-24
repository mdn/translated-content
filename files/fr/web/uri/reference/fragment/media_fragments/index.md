---
title: Fragments média
slug: Web/URI/Reference/Fragment/Media_fragments
l10n:
  sourceCommit: 93eb85aec36d1a929ac8dfc7dbf1ed297992608f
---

Les **fragments média** peuvent être inclus dans les URL de fichiers média (par exemple, [vidéo](/fr/docs/Web/HTML/Reference/Elements/video) et [SVG](/fr/docs/Web/SVG)) pour indiquer que vous souhaitez afficher une partie du média&nbsp;: une certaine durée ou une certaine dimension.

## Concepts et utilisation

Lorsque vous affichez plusieurs portions de média, il peut être plus pratique et efficace d'inclure tout le contenu dans un seul fichier, puis d'afficher uniquement la partie requise dans chaque cas.

- Les fragments média permettent de faire cela via des fragments d'URL. La spécification définit deux types différents&nbsp;:

- Les **fragments de dimension temporelle** permettent de lire une portion d'une vidéo ou d'une animation à partir d'un instant de départ jusqu'à un instant de fin, après quoi le média sera mis en pause.
- Les **fragments de dimension spatiale** permettent d'afficher une zone rectangulaire spécifique du média en définissant les dimensions de la boîte à afficher, ainsi que les coordonnées du coin supérieur gauche de la boîte.

## Syntaxe des fragments de dimension temporelle

```url
https://example.com/video.mp4#t=[npt:][timeStart][,timeEnd]
```

Les éléments clés de la syntaxe sont&nbsp;:

- `t=`
  - : Le début de la syntaxe de dimension temporelle. Cela doit toujours être inclus après le symbole dièse.
- `npt:` {{Optional_Inline}}
  - : L'identifiant du format de syntaxe utilisé. `npt` signifie **temps de lecture normal** (<i lang="en">normal play time</i>), et c'est le format par défaut et le seul pris en charge, donc cette partie peut être omise.
- `timeStart` {{Optional_Inline}}
  - : La durée de début de la portion du média.
- `timeEnd` {{Optional_Inline}}
  - : La durée de fin de la portion du média.

Les valeurs `timeStart` et `timeEnd` peuvent être définies dans les formats suivants, qui peuvent être mélangés dans le même fragment&nbsp;:

- `seconds`
  - : Un nombre représentant une valeur en secondes. Il s'agit d'un nombre supérieur ou égal à `0`, qui peut inclure une partie décimale pour indiquer une fraction de seconde.
- `hh:mm:ss`
  - : Valeurs d'heure, de minute et de seconde, séparées par des deux-points. La valeur des heures est un entier supérieur ou égal à `0`. La valeur des minutes est un entier entre `0` et `59`. La valeur des secondes est un nombre entre `0` et `59`, qui peut inclure une partie décimale pour indiquer une fraction de seconde.
- `mm:ss`
  - : Valeurs de minute et de seconde, séparées par un deux-points. La valeur des minutes est un entier entre `0` et `59`. La valeur des secondes est un nombre entre `0` et `59`, qui peut inclure une partie décimale pour indiquer une fraction de seconde.

Ainsi, par exemple, les fragments suivants liront tous le média du début jusqu'à 5 secondes&nbsp;:

```plain
#t=0,5
#t=,5
#t=0:00:00,5
#t=00:00,0:00:05
```

Les deux fragments suivants liront le média à partir de 2 secondes jusqu'à la fin.

```plain
#t=2
#t=0:00:02
```

Les fragments suivants liront le média à partir de 2 secondes jusqu'à 3,5 secondes.

```plain
#t=2,3.5
#t=0:00:02,3.5
#t=0:00:02,00:03.5
```

## Syntaxe des fragments de dimension spatiale

```url
https://example.com/test.svg#xywh=[unit:]xCoord,yCoord,width,height
```

Les éléments clés de la syntaxe sont&nbsp;:

- `xywh=`
  - : Le début de la syntaxe de dimension spatiale. Cela doit toujours être inclus après le symbole dièse.
- `unit:` {{Optional_Inline}}
  - : Les unités à définir pour `xCoord`, `yCoord`, `width` et `height`. Par défaut, c'est `pixel:` si omis. Les valeurs possibles sont&nbsp;:
    - `percent:`
      - : Les valeurs indiquent un nombre absolu de pixels.
    - `pixel:`
      - : Les valeurs indiquent un pourcentage de la largeur ou de la hauteur intrinsèque du média.
- `xCoord`
  - : La distance horizontale du coin supérieur gauche de la boîte affichée par rapport au coin supérieur gauche du média.
- `yCoord`
  - : La distance verticale du coin supérieur gauche de la boîte affichée par rapport au coin supérieur gauche du média.
- `width`
  - : La largeur de la boîte affichée.
- `height`
  - : La hauteur de la boîte affichée.

Ainsi, par exemple, les fragments suivants afficheront une boîte de `320x240` pixels dont le coin supérieur gauche est à `160px` de la gauche et `120px` du haut du média original.

```plain
xywh=160,120,320,240
xywh=pixel:160,120,320,240
```

Le fragment suivant affichera une boîte de `50%x50%` dont le coin supérieur gauche est à `25%` de la gauche et `25%` du haut du média original.

```plain
xywh=percent:25,25,50,50
```

## Exemples

### Lecture d'extraits limités dans le temps à partir de fichiers audio et vidéo

#### HTML

L'extrait HTML suivant intègre une vidéo et un extrait audio sur la page et inclut des fragments temporels sur les URL des médias pour limiter la durée de lecture&nbsp;:

```html live-sample___limited-time
<video controls width="250">
  <source src="/shared-assets/videos/flower.mp4#t=2,4" type="video/mp4" />
</video>

<hr />

<audio controls src="/shared-assets/audio/t-rex-roar.mp3#t=,00:01"></audio>
```

#### Résultat

Cela s'affiche ainsi&nbsp;:

{{EmbedLiveSample("limited-time", "100%", 220)}}

Essayez de lire les fichiers vidéo et audio à l'aide des lecteurs fournis pour voir comment les fragments temporels affectent la lecture. La vidéo originale dure 5 secondes, mais un extrait entre les secondes 2 et 4 est lu. L'audio original dure 2 secondes, mais seule la première seconde est lue.

### Affichage d'une partie d'une image SVG

#### HTML

Dans cet exemple, nous intégrons une image SVG dans la page à l'aide d'un élément HTML {{HTMLElement("img")}}, et incluons également la même image comme arrière-plan CSS sur un élément HTML {{HTMLElement("div")}}.

Sur la source de l'élément `<img>`, nous incluons un fragment spatial, `#xywh=100,100,400,400`, qui affiche une portion de 400x400 pixels de l'image dont le coin supérieur gauche est à la coordonnée `(100,100)` à partir du coin supérieur gauche de l'image originale. Nous définissons `width` et `height` à `200`, ce qui fait que la portion découpée de l'image est affichée à une taille de 200x200 pixels.

```html live-sample___limited-dimension
<img
  src="/shared-assets/images/examples/firefox-logo.svg#xywh=100,100,400,400"
  width="200"
  height="200" />

<hr />

<div class="bgtest"></div>
```

#### CSS

Nous définissons une propriété CSS {{CSSxRef("background-image")}} sur notre élément `<div>` qui pointe vers la même image SVG. Cette fois, le fragment spatial est `#xywh=100,100,100,100`, ce qui fait que la portion de l'image mesure 100x100 pixels avec son coin supérieur gauche à la coordonnée `(100,100)` à partir du coin supérieur gauche de l'image originale. Nous définissons la propriété {{CSSxRef("background-size")}} à `50px 50px`, de sorte que la portion soit répétée en mosaïque sur l'arrière-plan du `<div>` à une taille de 50x50 pixels.

```css live-sample___limited-dimension
.bgtest {
  width: 100%;
  height: 200px;
  background-image: url("/shared-assets/images/examples/firefox-logo.svg#xywh=100,100,100,100");
  background-size: 50px 50px;
}
```

#### Résultat

Le code ci-dessus s'affiche ainsi&nbsp;:

{{EmbedLiveSample("limited-dimension", "100%", 440)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

La prise en charge des fragments média est limitée aux contextes suivants&nbsp;:

- Les fragments temporels fonctionnent sur les URL de fichiers vidéo et audio (par exemple, utilisés dans les éléments `<audio>` et `<video>`) dans tous les navigateurs modernes.
- Les fragments temporels fonctionnent également sur les [fichiers image SVG](/fr/docs/Web/SVG/Guides/SVG_as_an_image) comportant des [animations SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL) dans [Firefox 147](/fr/docs/Mozilla/Firefox/Releases/147) et versions ultérieures.
- Les fragments spatiaux fonctionnent sur les fichiers image SVG dans Firefox 147 et versions ultérieures. Les valeurs en pixels fonctionnent comme prévu, mais les valeurs en pourcentage semblent fonctionner de manière peu fiable et il est recommandé de les éviter.
