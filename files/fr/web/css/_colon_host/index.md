---
title: ':host'
slug: Web/CSS/:host
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:host
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:host`** permet de cibler l'hôte d'un _[shadow DOM](/fr/docs/Web/Web_Components/Using_shadow_DOM)_ contenant le CSS à utiliser pour cet hôte. Autrement dit, elle permet de sélectionner un élément personnalisé (_custom element_) depuis l'intérieur du _shadow DOM_.

> **Note :** Cette pseudo-classe n'a aucun effet lorsqu'elle est utilisée à l'extérieur d'un _shadow DOM_.

```css
/* Cible la racine d'un hôte de shadow DOM */
:host {
  font-weight: bold;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

Les fragments de code qui suivent sont extraits du dépôt d'exemple [_host-selectors_](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([voir le résultat _live_](https://mdn.github.io/web-components-examples/host-selectors/)).

Dans cet exemple, on dispose d'un élément personnalisé `<context-span>`  qui peut contenir du texte :

```html
<h1>Host selectors <a href="#"><context-span>example</context-span></a></h1>
```

Pour le constructeur de cet élément, on crée des éléments `style` et `span` : l'élément `span` recevra le contenu de l'élément personnalisé et `style` recevra quelques règles CSS :

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

La règle `:host { background: rgba(0,0,0,0.1); padding: 2px 5px; }` permet de cibler l'ensemble des instances de `<context-span>` (qui est l'hôte ici) dans le document.

## Spécifications

| Spécification                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('CSS Scope', '#host-selector', ':host')}} | {{Spec2('CSS Scope')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.host")}}

## Voir aussi

- [Les composants web](/fr/docs/Web/Web_Components)
- {{cssxref(":host()")}}
- {{cssxref(":host-context()")}}
