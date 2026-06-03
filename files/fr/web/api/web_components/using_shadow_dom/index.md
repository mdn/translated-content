---
title: Utiliser le DOM d'ombre
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{DefaultAPISidebar("Web Components")}}

Un aspect important des éléments personnalisés est l'encapsulation, car un élément personnalisé, par définition, est une fonctionnalité réutilisable&nbsp;: il peut être inséré dans n'importe quelle page web et on s'attend à ce qu'il fonctionne. Il est donc important que le code exécuté dans la page ne puisse pas accidentellement casser un élément personnalisé en modifiant son implémentation interne. Le DOM d'ombre (<i lang="en">shadow DOM</i> en anglais) permet d'associer un arbre DOM à un élément, et d'avoir l'intérieur de cet arbre inaccessible au JavaScript et au CSS exécutés dans la page.

Cet article présente les bases de l'utilisation du DOM d'ombre.

## Vue de haut niveau

Cet article suppose que vous êtes déjà familier avec le concept de [DOM (Document Object Model)](/fr/docs/Web/API/Document_Object_Model) — une structure arborescente de nœuds connectés représentant les différents éléments et chaînes de caractères apparaissant dans un document balisé (généralement un document HTML dans le cas de documents web). Par exemple, considérez le fragment HTML suivant&nbsp;:

```html
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Simple exemple de DOM</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="Un tyrannosaurus Rex rouge&nbsp;: un dinosaure bipède se tenant debout comme un humain, avec de petits bras et une large gueule à nombreuses dents tranchantes." />
      <p>
        Nous ajouterons ici un lien vers la
        <a href="https://www.mozilla.org/">page d'accueil de Mozilla</a>
      </p>
    </section>
  </body>
</html>
```

Ce fragment produit la structure DOM suivante :

```plain
- HTML
    - HEAD
        - META charset="utf-8"
        - TITLE
            - #text: Simple exemple de DOM
    - BODY
        - SECTION
            - IMG src="dinosaur.png" alt="Un tyrannosaurus Rex rouge : un dinosaure bipède se tenant debout comme un humain, avec de petits bras et une large gueule à nombreuses dents tranchantes."
            - P
                - #text: Ici, nous ajouterons un lien vers la
                - A href="https://www.mozilla.org/"
                    - #text: page d'accueil de Mozilla
```

_Le DOM d'ombre_ permet d'associer des arbres DOM cachés à des éléments dans l'arbre DOM principal&nbsp;: cet arbre DOM d'ombre commence par une racine d'ombre, sous laquelle vous pouvez attacher n'importe quel élément, comme dans le DOM classique.

![Version SVG du schéma montrant l'interaction entre le document, la racine d'ombre et l'hôte d'ombre.](shadowdom.svg)

Il existe quelques termes spécifiques au DOM d'ombre à connaître&nbsp;:

- **Hôte d'ombre**&nbsp;: le nœud DOM classique auquel le DOM d'ombre est attaché.
- **Arbre d'ombre**&nbsp;: l'arbre DOM à l'intérieur du DOM d'ombre.
- **Limite d'ombre**&nbsp;: l'endroit où le DOM d'ombre se termine et où le DOM classique commence.
- **Racine d'ombre**&nbsp;: le nœud racine de l'arbre d'ombre.

Vous pouvez manipuler les nœuds dans le DOM d'ombre exactement comme les nœuds classiques&nbsp;: par exemple, en ajoutant des enfants ou en définissant des attributs, en mettant en forme des nœuds individuels avec element.style.foo, ou en ajoutant du style à tout l'arbre DOM d'ombre à l'intérieur d'un élément {{HTMLElement("style")}}. La différence est qu'aucun code à l'intérieur d'un DOM d'ombre ne peut affecter quoi que ce soit à l'extérieur, ce qui permet une encapsulation pratique.

Avant que le DOM d'ombre ne soit mis à disposition des développeur·euse·s web, les navigateurs l'utilisaient déjà pour encapsuler la structure interne d'un élément. Pensez par exemple à un élément {{HTMLElement("video")}}, avec les contrôles par défaut du navigateur affichés. Tout ce que vous voyez dans le DOM est l'élément `<video>`, mais il contient une série de boutons et d'autres contrôles à l'intérieur de son DOM d'ombre. La spécification du DOM d'ombre vous permet de manipuler le DOM d'ombre de vos propres éléments personnalisés.

### Héritage des attributs

L'arbre d'ombre et les éléments {{HTMLElement("slot")}} héritent des attributs [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir) et [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) de leur hôte d'ombre.

## Création d'un DOM d'ombre

### De manière impérative avec JavaScript

La page suivante contient deux éléments, un élément HTML {{HTMLElement("div")}} avec un [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de `"host"`, et un élément HTML {{HTMLElement("span")}} contenant du texte&nbsp;:

```html
<div id="host"></div>
<span>Je ne suis pas dans le DOM d'ombre</span>
```

Nous allons utiliser l'élément `"host"` comme hôte d'ombre. Nous appelons {{DOMxRef("Element.attachShadow()", "attachShadow()")}} sur l'hôte pour créer le DOM d'ombre, puis nous pouvons ajouter des nœuds au DOM d'ombre comme nous le ferions dans le DOM principal. Dans cet exemple, nous ajoutons un seul élément `<span>`&nbsp;:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "Je suis dans le DOM d'ombre";
shadow.appendChild(span);
```

Le résultat ressemble à ceci&nbsp;:

{{EmbedLiveSample("De manière impérative avec JavaScript")}}

### De manière déclarative avec HTML

Créer un DOM d'ombre via l'API JavaScript peut être une bonne option pour les applications rendues côté client. Pour d'autres applications, une interface utilisateur rendue côté serveur peut offrir de meilleures performances et donc une meilleure expérience utilisateur. Dans ces cas, vous pouvez utiliser l'élément {{HTMLElement("template")}} pour définir le DOM d'ombre de manière déclarative. La clé de ce comportement est l'attribut {{Glossary("enumerated", "énuméré")}} `shadowrootmode`, qui peut être défini sur `open` ou `closed`, les mêmes valeurs que l'option `mode` de la méthode {{DOMxRef("Element.attachShadow()", "attachShadow()")}}.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>Je suis dans le DOM d'ombre</span>
  </template>
</div>
```

{{EmbedLiveSample("De manière déclarative avec HTML")}}

> [!NOTE]
> Par défaut, le contenu de `<template>` n'est pas affiché. Dans ce cas, puisque `shadowrootmode="open"` a été inclus, la racine d'ombre est rendue. Dans les navigateurs compatibles, le contenu visible à l'intérieur de cette racine d'ombre est affiché.

Après que le navigateur a analysé le HTML, il remplace l'élément {{HTMLElement("template")}} par son contenu enveloppé dans une {{Glossary("Shadow tree", "racine d'ombre")}} qui est attachée à l'élément parent, le `<div id="host">` dans notre exemple. L'arbre DOM résultant ressemble à ceci (il n'y a pas d'élément `<template>` dans l'arbre DOM)&nbsp;:

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: Je suis dans le DOM d'ombre
```

Notez qu'en plus de `shadowrootmode`, vous pouvez utiliser des attributs de `<template>` tels que `shadowrootclonable` et `shadowrootdelegatesfocus` pour préciser d'autres propriétés de la racine d'ombre générée.

## Encapsulation depuis JavaScript

Cela peut paraître peu spectaculaire pour l'instant. Voyons ce qui se passe si le code s'exécutant dans la page tente d'accéder aux éléments du DOM d'ombre.

Cette page est identique à la précédente, sauf que nous avons ajouté deux éléments {{HTMLElement("button")}}.

```html
<div id="host"></div>
<span>Je ne suis pas dans le DOM d'ombre</span>
<br />

<button id="upper" type="button">Mettre en majuscules les éléments span</button>
<button id="reload" type="button">Recharger</button>
```

Cliquer sur le bouton «&nbsp;Mettre en majuscules les éléments span&nbsp;» recherche tous les éléments `<span>` de la page et transforme leur texte en majuscules.
Cliquer sur «&nbsp;Recharger&nbsp;» recharge simplement la page, pour réessayer.

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "Je suis dans le DOM d'ombre";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(document.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Si vous cliquez sur «&nbsp;Mettre en majuscules les éléments span&nbsp;», vous verrez que {{DOMxRef("Document.querySelectorAll()")}} ne trouve pas les éléments dans notre DOM d'ombre&nbsp;: ils sont effectivement invisibles pour le JavaScript de la page.

{{EmbedLiveSample("Encapsulation depuis JavaScript")}}

## `Element.shadowRoot` et l'option « mode »

Dans l'exemple ci‑dessous, nous passons l'argument `{ mode: "open" }` à `attachShadow()`. Lorsque `mode` est défini sur `"open"`, le JavaScript de la page peut accéder à l'intérieur de votre DOM d'ombre via la propriété {{DOMxRef("Element.shadowRoot", "shadowRoot")}} de l'hôte d'ombre.

Dans cet exemple, comme précédemment, le HTML contient l'hôte d'ombre, un `<span>` dans l'arbre DOM principal et deux boutons&nbsp;:

```html
<div id="host"></div>
<span>Je ne suis pas dans le DOM d'ombre</span>
<br />

<button id="upper" type="button">
  Mettre en majuscules les éléments span du DOM d'ombre
</button>
<button id="reload" type="button">Recharger</button>
```

Cette fois, le bouton «&nbsp;Mettre en majuscules&nbsp;» utilise `shadowRoot` pour trouver les `<span>` dans le DOM&nbsp;:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "Je suis dans le DOM d'ombre";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(host.shadowRoot.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Cette fois, le JavaScript de la page peut accéder aux éléments internes du DOM d'ombre&nbsp;:

{{EmbedLiveSample("`Element.shadowRoot` et l'option « mode »")}}

L'argument `{mode: "open"}` offre à la page un moyen de rompre l'encapsulation de votre DOM d'ombre. Si vous ne souhaitez pas donner cette possibilité, passez `{mode: "closed"}` et `shadowRoot` renverra `null`.

Cependant, cela ne doit pas être considéré comme un mécanisme de sécurité solide, car il existe des moyens de le contourner, par exemple via des extensions de navigateur s'exécutant dans la page. Il s'agit plutôt d'une indication que la page ne doit pas accéder à l'implémentation interne de votre arbre d'ombre.

## Encapsulation depuis le CSS

Dans cette version de la page, le HTML est identique à l'original&nbsp;:

```html
<div id="host"></div>
<span>Je ne suis pas dans le DOM d'ombre</span>
```

En JavaScript, nous créons le DOM d'ombre&nbsp;:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "Je suis dans le DOM d'ombre";
shadow.appendChild(span);
```

Cette fois, nous avons du CSS ciblant les éléments `<span>` de la page&nbsp;:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

Le CSS de la page n'affecte pas les nœuds situés à l'intérieur du DOM d'ombre&nbsp;:

{{EmbedLiveSample("Encapsulation depuis le CSS")}}

## Appliquer des styles dans le DOM d'ombre

Dans cette section, nous examinons deux façons d'appliquer des styles dans un arbre de DOM d'ombre&nbsp;:

- [_Programmatiquement_](#feuilles_de_style_constructibles), en construisant un objet {{DOMxRef("CSSStyleSheet")}} et en l'attachant à la racine d'ombre.
- [_Déclarativement_](#ajouter_des_éléments_style_dans_des_déclarations_template), en ajoutant un élément {{HTMLElement("style")}} dans la déclaration d'un {{HTMLElement("template")}}.

Dans les deux cas, les styles définis dans l'arbre du DOM d'ombre sont limités à cet arbre&nbsp;: tout comme les styles de la page n'affectent pas les éléments du DOM d'ombre, les styles du DOM d'ombre n'affectent pas les éléments du reste de la page.

### Feuilles de style constructibles

Pour mettre en forme des éléments dans le DOM d'ombre à l'aide de feuilles de style constructibles, nous pouvons&nbsp;:

1. Créer un objet {{DOMxRef("CSSStyleSheet")}} vide
2. Définir son contenu en utilisant {{DOMxRef("CSSStyleSheet.replace()")}} ou {{DOMxRef("CSSStyleSheet.replaceSync()")}}
3. L'ajouter à la racine d'ombre en l'assignant à {{DOMxRef("ShadowRoot.adoptedStyleSheets")}}

Les règles définies dans la `CSSStyleSheet` seront limitées à l'arbre du DOM d'ombre, ainsi qu'à tout autre arbre DOM auquel nous l'avons assignée.

Ici, encore une fois, le HTML contient notre hôte et un `<span>`&nbsp;:

```html
<div id="host"></div>
<span>Je ne suis pas dans le DOM d'ombre</span>
```

Cette fois, nous créons le DOM d'ombre et lui assignons un objet `CSSStyleSheet`&nbsp;:

```js
const sheet = new CSSStyleSheet();
sheet.replaceSync("span { color: red; border: 2px dotted black;}");

const host = document.querySelector("#host");

const shadow = host.attachShadow({ mode: "open" });
shadow.adoptedStyleSheets = [sheet];

const span = document.createElement("span");
span.textContent = "Je suis dans le DOM d'ombre";
shadow.appendChild(span);
```

Les styles définis dans l'arbre du DOM d'ombre ne s'appliquent pas au reste de la page&nbsp;:

{{EmbedLiveSample("Feuilles de style constructibles")}}

### Ajouter des éléments `<style>` dans des déclarations `<template>`

Une alternative à la construction d'objets `CSSStyleSheet` consiste à inclure un élément {{HTMLElement("style")}} à l'intérieur de l'élément {{HTMLElement("template")}} utilisé pour définir un composant Web.

Dans ce cas, le HTML inclut la déclaration `<template>`&nbsp;:

```html
<template id="my-element">
  <style>
    span {
      color: red;
      border: 2px dotted black;
    }
  </style>
  <span>Je suis dans le DOM d'ombre</span>
</template>

<div id="host"></div>
<span>Je ne suis pas dans le DOM d'ombre</span>
```

En JavaScript, nous créons le DOM d'ombre et ajoutons le contenu du `<template>`&nbsp;:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const template = document.getElementById("my-element");

shadow.appendChild(template.content);
```

Encore une fois, les styles définis dans le `<template>` ne s'appliquent qu'à l'intérieur de l'arbre du DOM d'ombre, et pas au reste de la page&nbsp;:

{{EmbedLiveSample("Ajouter des éléments `<style>` dans des déclarations `<template>`")}}

### Choisir entre les options programmatiques et déclaratives

Le choix entre ces options dépend de votre application et de vos préférences personnelles.

Créer un objet `CSSStyleSheet` et l'assigner à la racine d'ombre via `adoptedStyleSheets` permet de créer une seule feuille de style et de la partager entre plusieurs arbres DOM. Par exemple, une bibliothèque de composants peut créer une seule feuille de style et la partager entre tous les éléments personnalisés de cette bibliothèque. Le navigateur analysera cette feuille une seule fois. De plus, vous pouvez modifier dynamiquement la feuille de style et propager ces changements à tous les composants qui l'utilisent.

L'approche consistant à attacher un élément `<style>` est idéale si vous souhaitez être déclaratif, que vous avez peu de styles et que vous n'avez pas besoin de partager les styles entre différents composants.

## DOM d'ombre et éléments personnalisés

Sans l'encapsulation fournie par le DOM d'ombre, [les éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) seraient extrêmement fragiles. Il serait trop facile pour une page de casser accidentellement le comportement ou la mise en page d'un élément personnalisé en exécutant du JavaScript ou du CSS sur la page. En tant que développeur·euse d'éléments personnalisés, vous ne sauriez jamais si les sélecteurs applicables à l'intérieur de votre élément entraient en conflit avec ceux d'une page qui utilise votre élément personnalisé.

Les éléments personnalisés sont implémentés comme une classe qui étend soit la base {{DOMxRef("HTMLElement")}}, soit un élément HTML natif tel que {{DOMxRef("HTMLParagraphElement")}}. En général, l'élément personnalisé lui-même est un hôte d'ombre, et l'élément crée plusieurs éléments sous cette racine pour fournir l'implémentation interne de l'élément.

L'exemple ci-dessous crée un élément personnalisé `<filled-circle>` qui affiche simplement un cercle rempli d'une couleur unie.

```js
class FilledCircle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // Créer une racine d'ombre
    // L'élément personnalisé lui-même est l'hôte d'ombre
    const shadow = this.attachShadow({ mode: "open" });

    // créer l'implémentation interne
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "50");
    circle.setAttribute("fill", this.getAttribute("color"));
    svg.appendChild(circle);

    shadow.appendChild(svg);
  }
}

customElements.define("filled-circle", FilledCircle);
```

```html
<filled-circle color="blue"></filled-circle>
```

{{EmbedLiveSample("DOM d'ombre et éléments personnalisés", 100, 160)}}

Pour d'autres exemples illustrant différents aspects de l'implémentation d'éléments personnalisés, consultez notre [guide sur les éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements).

## Voir aussi

- [Utiliser les éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements)
- [Utiliser les templates et les slots](/fr/docs/Web/API/Web_components/Using_templates_and_slots)
- {{DOMxRef("Element.attachShadow()")}}
- {{DOMxRef("ShadowRoot.adoptedStyleSheets")}}
- {{DOMxRef("CSSStyleSheet.replace()")}}
- {{DOMxRef("CSSStyleSheet.replaceSync()")}}
- {{HTMLElement("template")}}
- Le module de [portée CSS](/fr/docs/Web/CSS/CSS_scoping)
- {{CSSxRef(":host")}}
- {{CSSxRef(":host_function", ":host()")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- Le module de [shadow parts CSS](/fr/docs/Web/CSS/CSS_shadow_parts)
- {{CSSxRef("::part")}}
