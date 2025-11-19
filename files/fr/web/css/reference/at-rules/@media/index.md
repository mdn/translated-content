---
title: "@media"
slug: Web/CSS/Reference/At-rules/@media
original_slug: Web/CSS/@media
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@media`** permet d'appliquer une partie d'une feuille de styles en fonction du résultat d'une ou plusieurs [requêtes média (<i lang="en">media queries</i>)](/fr/docs/Web/CSS/Guides/Media_queries). Grâce à cette règle, on peut indiquer une requête média et un ensemble de règles CSS qui s'appliquent uniquement si la requête média est vérifiée pour l'appareil, le contexte avec lequel le contenu est consulté.

> [!NOTE]
> Il est possible de manipuler la règle `@media` via le CSSOM (et JavaScript) grâce à l'interface {{domxref("CSSMediaRule")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: @media", "tabbed-standard")}}

```css interactive-example
abbr {
  color: #860304;
  font-weight: bold;
  transition: color 0.5s ease;
}

@media (hover: hover) {
  abbr:hover {
    color: #001ca8;
    transition-duration: 0.5s;
  }
}

@media not all and (hover: hover) {
  abbr::after {
    content: " (" attr(title) ")";
  }
}
```

```html interactive-example
<p>
  La
  <abbr title="Administration nationale de l'aéronautique et de l'espace">
    NASA
  </abbr>
  est une agence gouvernementale américaine responsable des sciences et des
  technologies liées à l'air et à l'espace.
</p>
```

## Syntaxe

```css
/* Au niveau le plus haut du code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Imbriquée dans une autre règle-@ conditionnelle */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

La règle `@media` peut être placée au niveau le plus haut du code ou imbriquée dans une autre règle @ conditionnelle.

Pour plus d'informations sur la syntaxe des requêtes média, voir [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using).

## Description

Une `<media-query-list>` de requête média inclut des [`<media-type>`](#types_de_média), des [`<media-feature>`](#caractéristiques_média) et des [opérateurs logiques](#opérateurs_logiques).

### Types de média

_Les types de média_ décrivent la catégorie générale d'un appareil. Sauf quand on utilise les opérateurs `not` ou `only`, le type de média est optionnel et correspond à `all` par défaut.

- `all`
  - : Applicable à tous les appareils.
- `print`
  - : Destiné pour le contenu paginé et les documents visualisés sur un écran en aperçu d'impression. Voir [la page sur les médias paginés](/fr/docs/Web/CSS/Guides/Paged_media) pour plus d'informations sur les aspects de formatage spécifiques à ces formats.
- `screen`
  - : Destiné principalement aux écrans.

> [!NOTE]
> CSS2.1 et [le module de spécification sur les requêtes média de niveau 3](https://drafts.csswg.org/mediaqueries-3/#background) ont défini des types de média supplémentaires (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, et `aural`), mais ceux-ci ont été dépréciés avec [le module de spécification sur les requêtes média de niveau 4](https://dev.w3.org/csswg/mediaqueries/#media-types) et ne devraient donc pas être utilisés.

### Caractéristiques média

Une _`<media feature>`_ décrit une caractéristique spécifique de l'{{glossary("user agent", "agent utilisateur")}}, du périphérique de sortie ou de l'environnement.
Les expressions de caractéristique média testent leur présence, leur valeur ou une plage de valeurs, et sont entièrement optionnelles. Chaque expression de caractéristique média doit être entourée de parenthèses.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Un des mécanismes d'entrée disponibles permet-il à l'utilisateur·ice de survoler des éléments&nbsp;?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Un des mécanismes d'entrée disponibles est-il un dispositif de pointage, et si oui, avec quelle précision&nbsp;?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Rapport largeur/hauteur ({{glossary("aspect ratio", "rapport d'aspect")}}) de la zone d'affichage (<i lang="en">viewport</i> en anglais).
- {{cssxref("@media/color", "color")}}
  - : Nombre de bits par composant couleur du périphérique de sortie, ou zéro si le périphérique n'est pas en couleur.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Plage approximative de couleurs prises en charge par l'agent utilisateur et le périphérique de sortie.
- {{cssxref("@media/color-index", "color-index")}}
  - : Nombre d'entrées dans la table de correspondance des couleurs du périphérique de sortie, ou zéro si le périphérique n'utilise pas une telle table.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Rapport largeur/hauteur du périphérique de sortie. Déprécié dans Media Queries niveau 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Hauteur de la surface de rendu du périphérique de sortie. Déprécié dans Media Queries niveau 4.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Détecte la posture actuelle du périphérique, c'est-à-dire si la zone d'affichage est à plat ou pliée. Défini dans l'[API Device Posture](/fr/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Largeur de la surface de rendu du périphérique de sortie. Déprécié dans Media Queries niveau 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Mode dans lequel une application s'affiche&nbsp;: par exemple, [plein écran](/fr/docs/Web/CSS/Reference/At-rules/@media/display-mode#fullscreen) ou [mode image dans l'image](/fr/docs/Web/CSS/Reference/At-rules/@media/display-mode#image_dans_limage).
    Ajouté dans Media Queries niveau 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Combinaison de la luminosité, du contraste et de la profondeur de couleur prise en charge par l'agent utilisateur et le périphérique de sortie. Ajouté dans Media Queries niveau 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Détecte si l'agent utilisateur restreint la palette de couleurs.
    Ajouté dans Media Queries niveau 5.
- {{cssxref("@media/grid", "grid")}}
  - : Le périphérique utilise-t-il un écran en grille ou en bitmap&nbsp;?
- {{cssxref("@media/height", "height")}}
  - : Hauteur de la zone d'affichage (<i lang="en">viewport</i> en anglais).
- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
  - : Détecte si le périphérique possède un nombre spécifié de segments de zone d'affichage disposés horizontalement.
- {{cssxref("@media/hover", "hover")}}
  - : Le mécanisme d'entrée principal permet-il à l'utilisateur·ice de survoler des éléments&nbsp;?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : L'agent utilisateur ou le système d'exploitation inverse-t-il les couleurs&nbsp;?
    Ajouté dans Media Queries niveau 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Nombre de bits par pixel dans la mémoire tampon monochrome du périphérique de sortie, ou zéro si le périphérique n'est pas monochrome.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientation de la zone d'affichage (<i lang="en">viewport</i> en anglais).
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Comment le périphérique de sortie gère-t-il le contenu qui déborde de la zone d'affichage selon l'axe du bloc&nbsp;?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Le contenu qui déborde de la zone d'affichage selon l'axe en ligne peut-il être défilé&nbsp;?
- {{cssxref("@media/pointer", "pointer")}}
  - : Le mécanisme d'entrée principal est-il un dispositif de pointage, et si oui, avec quelle précision&nbsp;?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Détecte si l'utilisateur·ice préfère un thème clair ou sombre.
    Ajouté dans Media Queries niveau 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Détecte si l'utilisateur·ice a demandé au système d'augmenter ou de diminuer le contraste entre les couleurs adjacentes.
    Ajouté dans Media Queries niveau 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Détecte si l'utilisateur·ice a demandé un contenu web qui consomme moins de données.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : L'utilisateur·ice préfère moins d'animations sur la page.
    Ajouté dans Media Queries niveau 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Détecte si l'utilisateur·ice a activé un réglage sur son appareil pour réduire les effets de transparence ou de translucidité utilisés sur l'appareil.
- {{cssxref("@media/resolution", "resolution")}}
  - : Densité de pixels du périphérique de sortie.
- {{cssxref("@media/scan", "scan")}}
  - : Le rendu de l'affichage est-il progressif ou entrelacé&nbsp;?
- {{cssxref("@media/scripting", "scripting")}}
  - : Détecte si le scripting (JavaScript) est disponible.
    Ajouté dans Media Queries niveau 5.
- {{cssxref("@media/shape", "shape")}}
  - : Détecte la forme du périphérique pour distinguer les écrans rectangulaires et ronds.
- {{cssxref("@media/update", "update")}}
  - : Fréquence à laquelle le périphérique de sortie peut modifier l'apparence du contenu.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}
  - : Détecte si le périphérique possède un nombre spécifié de segments de zone d'affichage disposés verticalement. Ajouté dans Media Queries niveau 5.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Combinaison de la luminosité, du contraste et de la profondeur de couleur prise en charge par le plan vidéo de l'agent utilisateur et du périphérique de sortie. Ajouté dans Media Queries niveau 5.
- {{cssxref("@media/width", "width")}}
  - : Largeur de la zone d'affichage (<i lang="en">viewport</i> en anglais), y compris la largeur de la barre de défilement.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Nombre de pixels du périphérique par pixel CSS. Utilisez plutôt la caractéristique [`resolution`](/fr/docs/Web/CSS/Reference/At-rules/@media/resolution) avec l'unité `dppx`.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Le navigateur prend en charge l'animation CSS {{cssxref("animation")}} préfixée `-webkit`. Utilisez plutôt la requête de fonctionnalité [`@supports (animation)`](/fr/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Nombre de pixels du périphérique par pixel CSS. Utilisez plutôt la caractéristique [`resolution`](/fr/docs/Web/CSS/Reference/At-rules/@media/resolution) avec l'unité `dppx`.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Le navigateur prend en charge la transformation CSS 2D {{cssxref("transform")}} préfixée `-webkit`. Utilisez plutôt la requête de fonctionnalité [`@supports (transform)`](/fr/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Le navigateur prend en charge la transformation CSS 3D {{cssxref("transform")}} préfixée `-webkit`. Utilisez plutôt la requête de fonctionnalité [`@supports (transform)`](/fr/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Le navigateur prend en charge la transition CSS {{cssxref("transition")}} préfixée `-webkit`. Utilisez plutôt la requête de fonctionnalité [`@supports (transition)`](/fr/docs/Web/CSS/Reference/At-rules/@supports).

### Opérateurs logiques

_Les opérateurs logiques_ `not`, `and`, et `only` peuvent être utilisés pour composer une requête média complexe.
Il est aussi possible de combiner plusieurs requêtes média en une seule règle en les séparant avec des virgules.

- `and`
  - : Cet opérateur permet de combiner plusieurs tests de caractéristiques afin que le résultat du test vaille `true` si chacun des tests individuels vaut `true`. Il permet également de joindre des tests de caractéristiques média et des tests de type de média.
- `not`
  - : Cet opérateur donne la négation d'une requête média, renvoyant `true` si la requête devait renvoyer `false`. Si cet opérateur est présent dans une liste de requêtes séparées par des virgules, la négation portera uniquement sur la requête sur laquelle l'opérateur est appliqué. Si l'opérateur `not` est utilisé, il _est nécessaire_ d'indiquer un type de média.

    > [!NOTE]
    > Dans la spécification de niveau 3, le mot-clé `not` permet uniquement de prendre la négation d'une requête média entière (et pas d'une caractéristique seule).

- `only`
  - : Applique la mise en forme uniquement si toute la requête correspond. Ce mot-clé est utile pour empêcher les anciens navigateurs d'appliquer les styles en question. Sans utiliser `only`, les anciens navigateurs interpréteraient la requête `screen and (max-width: 500px)` comme `screen`, en ignorant le reste et en appliquant donc le style à tous les écrans. Si l'opérateur `only` est utilisé, il _est nécessaire_ d'indiquer un type de média.
- `,` (virgule)
  - : Les virgules sont utilisées pour combiner plusieurs requêtes média en une seule règle. Chaque requête d'une liste de requêtes séparées par des virgules est traitée séparément des autres. Ainsi, si une des requêtes de la liste vaut `true`, l'ensemble de l'instruction renverra `true`. Autrement dit, la virgule agit comme un opérateur logique `or`.
- `or`
  - : Équivalent à l'opérateur `,`. Ajouté dans Media Queries Level 4.

### Indications client de l'agent utilisateur

Certaines requêtes média disposent d'[indications client de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints) correspondantes.
Ce sont des en-têtes HTTP qui demandent un contenu pré-optimisé pour une exigence média particulière.
Elles incluent {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} et {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

### Syntaxe formelle

{{csssyntax}}

## Accessibilité

Pour une meilleure accessibilité, notamment pour les personnes qui ajustent la taille du texte d'un site, il convient d'utiliser l'unité [`em`](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) lorsqu'une valeur de type {{cssxref("&lt;length&gt;")}} est nécessaire pour [les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using).

Les unités [`em`](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units) et [`px`](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sont toutes les deux valides, mais [`em`](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units) s'adapte mieux si l'utilisateur·ice modifie la taille du texte du navigateur.

Il est également pertinent de prendre en compte les requêtes média ou les [indications du client](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client) pour améliorer l'expérience utilisateur·ice. Par exemple, la requête média [`prefers-reduced-motion`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) ou l'en-tête HTTP équivalent {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} peuvent servir à limiter les animations ou les déplacements selon les préférences de l'utilisateur·ice.

## Sécurité

Les requêtes média fournissent des informations sur les capacités de l'appareil utilisé pour la navigation. Ces informations peuvent être détournées afin de construire une empreinte permettant d'identifier l'appareil ou de le catégoriser de façon non désirée.

Pour cette raison, un navigateur peut choisir de modifier les valeurs renvoyées afin de limiter ce pistage. Ainsi, si la détection d'empreinte numérique est désactivée dans Firefox, la plupart des caractéristiques média renvoient leurs valeurs par défaut afin d'éviter leur utilisation pour le pistage.

## Exemples

### Tester les types de média print et screen

```css
@media print {
  body {
    font-size: 10pt;
  }
}
@media screen {
  body {
    font-size: 13px;
  }
}
@media screen, print {
  body {
    line-height: 1.2;
  }
}

@media only screen and (min-width: 320px) and (max-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  body {
    line-height: 1.4;
  }
}
```

Avec la mise à jour de la spécification pour les requêtes média, une nouvelle syntaxe, plus concise, peut être utilisée pour les tests d'intervalle&nbsp;:

```css
@media (height > 600px) {
  body {
    line-height: 1.4;
  }
}

@media (400px <= width <= 700px) {
  body {
    line-height: 1.4;
  }
}
```

Pour plus d'exemples, voir [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module de [requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries)
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- L'interface {{domxref("CSSMediaRule")}}
- [Extensions CSS préfixées pour Firefox (-moz-)](/fr/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Extensions CSS préfixées pour WebKit (-webkit-)](/fr/docs/Web/CSS/Reference/Webkit_extensions#media_features)
