---
title: '<canvas> : l''élément de canevas graphique'
slug: Web/HTML/Element/canvas
tags:
  - Canvas
  - Element
  - HTML
  - HTML scripting
  - HTML5
  - Reference
  - Web
translation_of: Web/HTML/Element/canvas
browser-compat: html.elements.canvas
---
{{HTMLRef}}

On utilise l'élément **HTML `<canvas>`** avec l'API [canvas](/fr/docs/Web/API/Canvas_API), ou l'API [WebGL](/fr/docs/Web/API/WebGL_API) pour dessiner des graphiques et des animations.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#embedded_content"
          >contenu intégré</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Transparent mais sans aucun descendant étant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >contenu interactif</a
        >
        à l'exception des éléments
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/Button"><code>&#x3C;button></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/Input"><code>&#x3C;input></code></a>
        dont l'attribut
        <a href="/fr/docs/Web/HTML/Element/Input#attr-type"
          ><code>type</code></a
        >
        vaut <code>checkbox</code>, <code>radio</code>, ou <code>button</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout contenu acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLCanvasElement"
          ><code>HTMLCanvasElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme les autres éléments HTML, cet élément possède les [attributs globaux](/fr/docs/Web/HTML/Global_attributes).

- **`height`**
  - : La hauteur de l'espace pour l'élément, exprimée en pixels CSS. La valeur par défaut est 150.
- **`moz-opaque`** {{non-standard_inline}}{{deprecated_inline}}
  - : Cet attribut permet d'indiquer s'il y aura de la transparence ou non. Si le canevas sait qu'il n'y aura pas de transparence, les performances de rendu pourront être améliorées. Cet attribut est uniquement pris en charge par les navigateurs Mozilla, il est préférable d'utiliser la méthode standard [`canvas.getContext('2d', { alpha: false})`](fr/docs/Web/API/HTMLCanvasElement/getContext) à la place.
- **`width`**
  - : La largeur de l'espace pour l'élément, exprimée en pixels CSS. La valeur par défaut est 300.

## Notes d'utilisation

### Contenu alternatif

Il est fortement recommandé de fournir un contenu alternatif au contenu du bloc `<canvas>`. Ce contenu pourra être utilisé par les navigateurs plus anciens qui ne supportent pas l'élément `<canvas>` et ceux pour lesquels JavaScript est désactivé. Fournir un texte de repli ou un sous-DOM utile aide à [rendre le canevas plus accessible](/fr/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility).

### Balise `</canvas>` obligatoire

À la différence de [`<img>`](/fr/docs/Web/HTML/Element/Img), l'élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) **doit** être fermé avec la balise fermante `</canvas>`.

### Dimensionnement du canevas : CSS ou HTML

On peut modifier la taille affichée du canevas grâce à une feuille de style. L'image est mise à l'échelle lors du rendu pour correspondre à la taille indiquée par le style. Toutefois, cela pourra distordre l'image lors du rendu final.

Mieux vaut utiliser les attributs explicites `width` et `height` de l'élément en HTML (ou via du code JavaScript).

### Taille maximale d'un canevas

La taille maximale d'un élément `<canvas>` dépend du navigateur utilisé. Voici un tableau de mesures provenant de tests et diverses sources (ex. [Stack Overflow](https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element)):

| Navigateur | Hauteur maximale | Largeur maximale | Aire maximale                             |
| ---------- | ---------------- | ---------------- | ----------------------------------------- |
| Chrome     | 32 767 pixels    | 32 767 pixels    | 268 435 456 pixels (soit 16 384 x 16 384) |
| Firefox    | 32 767 pixels    | 32 767 pixels    | 472 907 776 pixels (soit 22 528 x 20 992) |
| Safari     | 32 767 pixels    | 32 767 pixels    | 268 435 456 pixels (soit 16 384 x 16 384) |
| IE         | 8 192 pixels     | 8 192 pixels     | ?                                         |

> **Note :** Si on dépasse les dimensions ou l'aire maximale, le canevas deviendra inutilisable et les commandes de dessin ne fonctionneront pas.

## Exemples

### HTML

Le fragment de code suivant ajoute un élément `canvas` au document. Un texte alternatif est fourni au cas où le navigateur ne peut pas afficher ce canevas. Un texte alternatif ou bien des éléments internes permettront de rendre le canevas plus accessible.

```html
<canvas width="300" height="100">
  Désolé, votre navigateur ne prend pas en charge &lt;canvas&gt;.
</canvas>
```

### JavaScript

On utilise également ce fragment de code JavaScript avec la méthode [`HTMLCanvasElement.getContext()`](/fr/docs/Web/API/HTMLCanvasElement/getContext) afin d'obtenir le contexte de dessin puis on dessine sur le canevas.

```js
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Accessibilité

### Contenu alternatif

Seul, l'élément `<canvas>` est une image matricielle et ne fournit pas d'informations sur les objets dessinés. Le contenu d'un canevas n'est pas accessible aux outils d'assistance qui se basent sur le contenu sémantique du document HTML. De façon générale, on évitera de se servir uniquement de `<canvas>` pour produire un document accessible. Voici quelques pages et articles pour aider à l'accessibilité avec les canevas :

- [Les régions cliquables et l'accessibilité](/fr/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
- [Cas d'utilisation pour l'accessibilité de `<canvas>`](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Problèmes d'accessibilité de l'élément `<canvas>`](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [L'accessibilité de l'élément `<canvas>` dans Firefox 13, un article de Steve Faulkner (en anglais)](http://www.paciellogroup.com/blog/2012/06/html5-canvas-accessibility-in-firefox-13/)
- [Les meilleures pratiques pour concevoir des éléments `<canvas>` interactifs](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail MDN sur l'élément `<canvas>`](/fr/docs/Web/API/Canvas_API)
- [Tutoriel `<canvas>`](/fr/docs/Web/API/Canvas_API/Tutorial)
- [Anti-sèche `<canvas>`](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)
- [Démonstrations liées à `<canvas>`](/fr/docs/Web/Demos_of_open_web_technologies)
- [Introduction à `<canvas>` par Apple](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) (en anglais)
