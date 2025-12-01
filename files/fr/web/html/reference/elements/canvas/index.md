---
title: "<canvas> : l'élément de canevas graphique"
slug: Web/HTML/Reference/Elements/canvas
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Utilisez l'élément HTML **`<canvas>`** avec soit l'[API de script Canvas](/fr/docs/Web/API/Canvas_API), soit l'[API WebGL](/fr/docs/Web/API/WebGL_API) pour dessiner des graphiques et des animations.

## Attributs

Comme les autres éléments HTML, cet élément possède les [attributs globaux](/fr/docs/Web/HTML/Reference/Global_attributes).

- **`height`**
  - : La hauteur de l'espace pour l'élément, exprimée en pixels CSS. La valeur par défaut est 150.
- **`moz-opaque`** {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Cet attribut permet d'indiquer s'il y aura de la transparence ou non. Si le canevas sait qu'il n'y aura pas de transparence, les performances de rendu pourront être améliorées. Cet attribut est uniquement pris en charge par les navigateurs Mozilla, il est préférable d'utiliser la méthode standard {{DOMxRef("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}} à la place.
- **`width`**
  - : La largeur de l'espace pour l'élément, exprimée en pixels CSS. La valeur par défaut est 300.

## Notes d'utilisation

### Contenu alternatif

Vous devez fournir un contenu alternatif à l'intérieur du bloc `<canvas>`. Ce contenu sera affiché à la fois par les navigateurs plus anciens qui ne prennent pas en charge cet élément et par les navigateurs où JavaScript est désactivé.

### Balise `</canvas>` obligatoire

À la différence de {{HTMLElement("img")}}, l'élément `<canvas>` **doit** être fermé avec la balise fermante (`</canvas>`).

### Dimensionnement du canevas : CSS ou HTML

On peut modifier la taille affichée du canevas grâce à une feuille de style. L'image est mise à l'échelle lors du rendu pour correspondre à la taille indiquée par le style. Toutefois, cela pourra distordre l'image lors du rendu final.

Mieux vaut utiliser les attributs explicites `width` et `height` de l'élément en HTML (ou via du code JavaScript).

### Taille maximale d'un canevas

La taille maximale exacte d'un élément `<canvas>` dépend du navigateur et de l'environnement. Dans la plupart des cas, les dimensions maximales dépassent 10 000 × 10 000 pixels, mais certains appareils — notamment iOS — limitent la taille du canevas à 4 096 × 4 096 pixels. Voir [limitations de taille du canevas selon les navigateurs et les appareils <sup>(angl.)</sup>](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results).

> [!NOTE]
> Si on dépasse les dimensions ou l'aire maximale, le canevas deviendra inutilisable et les commandes de dessin ne fonctionneront pas.

## Accessibilité

### Contenu alternatif

L'élément `<canvas>` pris isolément n'est qu'une image matricielle et ne fournit aucune information sur les objets dessinés. Le contenu d'un canevas n'est pas exposé aux outils d'accessibilité comme le serait du HTML sémantique. De façon générale, évitez d'utiliser `<canvas>` pour produire un site ou une application accessibles. Les guides suivants peuvent aider à en améliorer l'accessibilité.

- [Cas d'utilisation pour l'accessibilité de `<canvas>` <sup>(angl.)</sup>](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Problèmes d'accessibilité de l'élément `<canvas>` <sup>(angl.)</sup>](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [L'accessibilité de l'élément `<canvas>` dans Firefox 13 — Steve Faulkner <sup>(angl.)</sup>](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [Bonnes pratiques pour concevoir des éléments `<canvas>` interactifs <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## Exemples

### HTML

Le fragment de code suivant ajoute un élément `canvas` au document. Un texte alternatif est fourni au cas où le navigateur ne peut pas afficher ce canevas. Un texte alternatif ou bien des éléments internes permettront de rendre le canevas plus accessible.

```html
<canvas width="300" height="100">
  Désolé, votre navigateur ne prend pas en charge &lt;canvas&gt;.
</canvas>
```

### JavaScript

On utilise également ce fragment de code JavaScript avec la méthode {{DOMxRef("HTMLCanvasElement.getContext()")}} afin d'obtenir le contexte de dessin puis on dessine sur le canevas.

```js
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
// Ajoute un rectangle en (10, 10) de taille 100×100 pixels
ctx.fillRect(10, 10, 100, 100);
```

### Résultat

{{EmbedLiveSample('Exemples', 600, 150)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_intégré"
          >contenu intégré</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Transparent mais sans aucun descendant étant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >contenu interactif</a
        >
        à l'exception des éléments {{HTMLElement("a")}},
        {{HTMLElement("button")}}, {{HTMLElement("input")}}
        dont l'attribut
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#attr-type"
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLCanvasElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Canvas](/fr/docs/Web/API/Canvas_API)
- [Tutoriel Canvas](/fr/docs/Web/API/Canvas_API/Tutorial)
- [L'API OffscreenCanvas](/fr/docs/Web/API/OffscreenCanvas)
- [Anti‑sèche Canvas <sup>(angl.)</sup>](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html) (2009)
- [Anti‑sèche Canvas (pdf) <sup>(angl.)</sup>](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf) (2015)
- [Guide Safari HTML Canvas <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) sur Apple (2013)
- [`CanvasRenderingContext2D` — contexte de dessin 2D pour un élément `<canvas>` <sup>(angl.)</sup>](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) sur Apple.com
- [L'API WebGL](/fr/docs/Web/API/WebGL_API)
- L'élément HTML {{HTMLElement("img")}}
- [SVG](/fr/docs/Web/SVG)
- [Vidéo et audio HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
