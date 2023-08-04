---
title: ":host-context()"
slug: Web/CSS/:host-context
l10n:
  sourceCommit: 257486f64b2472dda4996a4ea7b6b5305e46f863
---

{{CSSRef}}

La fonction [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:host-context()`** sélectionne l'hôte sombre (<i lang="en">shadow host</i>) du [DOM sombre (<i lang="en">shadow DOM</i>)](/fr/docs/Web/Web_Components/Using_shadow_DOM) contenant le CSS dans lequel il est utilisé (afin de pouvoir sélectionner un élément personnalisé depuis l'intérieur de son DOM sombre), uniquement si le sélecteur fourni comme paramètre de la fonction correspond à un ancêtre de l'hôte sombre à l'emplacement qu'il occupe dans la hiérarchie du DOM.

Autrement dit, cela permet à un élément personnalisé, ou à n'importe quoi au sein du DOM sombre de cet élément personnalisé, d'appliquer différents styles selon sa position au sein du DOM extérieur ou des classes ou attributs appliqués aux éléments ancêtres.

Une utilisation classique consiste à utiliser une expression avec un sélecteur de descendants, par exemple `h1`, afin de cibler uniquement les instances de l'élément personnalisé situées dans un élément `<h1>`. Un autre usage pourrait consister à permettre aux éléments internes de réagir aux classes ou attributs des éléments parmi les ancêtres (par exemple, appliquer une couleur de texte différente lorsqu'une classe `.dark-theme` est appliquée à `<body>`).

> **Note :** Cette pseudo-classe n'a aucun effet si elle est utilisée en dehors d'un DOM sombre.

```css
/* Cible l'hôte d'une racine sombre, uniquement si elle
   descend du sélecteur passé en argument */
:host-context(h1) {
  font-weight: bold;
}

:host-context(main article) {
  font-weight: bold;
}

/* Change la couleur de texte d'un paragraphe de noir à
   blanc lorsqu'une classe .dark-theme est appliquée au
   corps du document. */
p {
  color: #000;
}

:host-context(body.dark-theme) p {
  color: #fff;
}
```

## Syntaxe

```css-nolint
:host-context(<selecteur-composite>) {
}
```

## Exemples

### Mettre en forme les hôtes sombres de façon ciblée

Les fragments de code qui suivent sont tirés de notre [exemple sur les sélecteurs d'hôte](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([voir la démonstration](https://mdn.github.io/web-components-examples/host-selectors/)).

Dans cet exemple, on a un élément personnalisé, `<context-span>`, dans lequel on peut écrire du texte&nbsp;:

```html
<h1>
  <a href="#"><context-span>Exemple</context-span></a> pour les sélecteurs
  d'hôte
</h1>
```

Dans le constructeur de l'élément, on crée des éléments `<style>` et `<span>`, et on remplit l'élément `<span>` avec le contenu de l'élément personnalisé, puis on remplit l'élément `<style>` avec quelques règles CSS&nbsp;:

```js
let style = document.createElement("style");
let span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
  "span:hover { text-decoration: underline; }" +
  ":host-context(h1) { font-style: italic; }" +
  ':host-context(h1):after { content: " - pas de lien dans les titres !" }' +
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgba(0,0,0,0.1); padding: 2px 5px; }";
```

Les règles `:host-context(h1) { font-style: italic; }` et `:host-context(h1):after { content: " - pas de lien dans les titres !" }` mettent en forme les instances de l'élément `<context-span>` (ici l'hôte sombre) contenus dans des éléments `<h1>`. Dans notre exemple, nous avons utilisé ces règles pour afficher clairement que cet élément personnalisé ne devrait pas apparaître dans un élément `<h1>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les composants web](/fr/docs/Web/Web_Components)
- [`:host`](/fr/docs/Web/CSS/:host)
- [`:host()`](/fr/docs/Web/CSS/:host_function)
