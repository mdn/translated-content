---
title: ':host-context()'
slug: orphaned/Web/CSS/:host-context()
tags:
  - CSS
  - Experimental
  - Pseudo-classe
  - Reference
  - Web
translation_of: Web/CSS/:host-context()
original_slug: Web/CSS/:host-context()
---
{{CSSRef}}{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:host-context()`** est une fonction qui sélectionne l'hôte (_shadow host_) du _[shadow DOM](/fr/docs/Web/Web_Components/Using_shadow_DOM)_ qui contient le CSS utilisé à l'intérieur, uniquement si le sélecteur fourni en argument correspond à l'ancêtre de l'hôte selon l'arborescence du DOM.

Un cas d'usage fréquent consiste à utilise un sélecteur de descendant — `h1` par exemple — afin de sélectionner uniquement les instances d'un élément personnalisé (_custom element_) présentes à l'intérieur d'un élément `<h1>`.

> **Note :** Cette pseudo-classe n'a aucun effet en dehors d'un _shadow DOM_.

```css
/* Cible un hôte uniquement si c'est un descendant
   du sélecteur passé en argument */
:host-context(h1) {
  font-weight: bold;
}

:host-context(main article) {
  font-weight: bold;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

Les fragments de code suivants sont tirés du dépôt [_host-selectors_](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([voir le résultat _live_](https://mdn.github.io/web-components-examples/host-selectors/)).

Dans cet exemple, on dispose d'un élément personnalisé — `<context-span>` — au sein duquel on peut avoir du texte :

```html
<h1>Host selectors <a href="#"><context-span>example</context-span></a></h1>
```

Dans le constructeur de l'élément, on crée des éléments `style` et `span` et on remplit le `span` avec le contenu de l'élément personnalisé puis on applique certains règles CSS pour l'élément `style` :

```js
let style = document.createElement('style');
let span = document.createElement('span');
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({mode: 'open'});
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent = 'span:hover { text-decoration: underline; }' +
                    ':host-context(h1) { font-style: italic; }' +
                    ':host-context(h1):after { content: " - no links in headers!" }' +
                    ':host-context(article, aside) { color: gray; }' +
                    ':host(.footer) { color : red; }' +
                    ':host { background: rgba(0,0,0,0.1); padding: 2px 5px; }';
```

Les règles `:host-context(h1) { font-style: italic; }` et `:host-context(h1):after { content: " - no links in headers!" }` permettent de mettre en forme l'instance de l'élément `<context-span>` (l'hôte de cette instance) à l'intérieur de l'élément `<h1>`. Nous avons utilisé cet hôte afin d'indiquer clairement qu'un tel élément personnalisé ne doit pas apparaître dans un titre `<h1>`.

## Spécifications

| Spécification                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('CSS Scope', '#host-selector', ':host-context()')}} | {{Spec2('CSS Scope')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.host-context")}}

## Voir aussi

- [Les composants web](/fr/docs/Web/Web_Components)
- {{cssxref(":host")}}
- {{cssxref(":host()")}}
