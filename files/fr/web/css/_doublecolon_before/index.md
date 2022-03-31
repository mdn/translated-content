---
title: '::before (:before)'
slug: Web/CSS/::before
tags:
  - CSS
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::before
---
{{CSSRef}}

**`::before`** crée un [pseudo-élément](/fr/docs/Web/CSS/Pseudo-éléments) qui sera le premier enfant de l'élément ciblé. Généralement utilisé pour ajouter du contenu esthétique à un élément via la propriété CSS {{cssxref("content")}}. Par défaut, l'élément créé est de type en-ligne (_inline_).

```css
/* On ajoute un coeur avant les liens */
a::before {
  content: "♥";
}
```

> **Note :** Les pseudo-éléments générés par `::before` et `::after` sont contenus dans la boîte de mise en forme de l'élément. Aussi, `::before` et `::after` ne s'appliquent pas [aux éléments remplacés](/fr/docs/Web/CSS/Élément_remplacé) tels que {{HTMLElement("img")}} ou {{HTMLElement("br")}}.

## Syntaxe

{{csssyntax}}

La notation `::before` a été introduite par CSS 3 pour différencier les [pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes) et les [pseudo-éléments](/fr/docs/Web/CSS/Pseudo-éléments). Les navigateurs acceptent aussi la notation `:before` introduite par CSS 2.

## Exemples

### Ajouter des guillemets

Un exemple simple utilisant les pseudo-éléments pour ajouter des guillemets. Ici nous avons `::before` et {{cssxref("::after")}} pour effectuer l'insertion.

#### HTML

```html
<q>Quelques guillemets</q>, dit-il, <q>sont mieux que pas du tout</q>
```

#### CSS

```css
q::before {
  content: "«";
  color: blue;
}
q::after {
  content: '»';
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('Ajouter_des_guillemets', '500', '50', '')}}

### Exemple décoratif

Il est possible de mettre du style à du texte ou des images, dans la propriété {{cssxref("content")}} , quasiment de n'importe quelle manière.

#### HTML

```html
<span class="ribbon">Observez où est placée la boite orange.</span>
```

#### CSS

```css
.ribbon {
  background-color: #5BC8F7;
}

.ribbon::before {
  content: "Regardez cette boite orange.";
  background-color: #FFBA10;
  border-color: black;
  border-style: dotted;
}
```

#### Résultat

{{EmbedLiveSample('Exemple_décoratif', 450, 60)}}

### Liste de choses à faire

Dans cet exemple, nous allons créer une simple liste de choses à faire en utilisant les pseudo-éléments. Cette méthode peut être utilisée pour ajouter une petite touche à l'interface utilisateur et améliorer l'expérience utilisateur.

#### HTML

```html
<ul>
  <li>Acheter du lait</li>
  <li>Promener le chien</li>
  <li>Faire de l'exercice</li>
  <li>Coder</li>
  <li>Jouer de la musique</li>
  <li>Se reposer</li>
</ul>
```

#### CSS

```css
li {
  list-style-type: none;
  position: relative;
  margin: 1px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #CCFF99;
}

li.done::before {
  content: '';
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```

#### JavaScript

```js
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if( ev.target.tagName === 'LI') {
     ev.target.classList.toggle('done');
  }
}, false);
```

#### Résultat

{{EmbedLiveSample('Liste_de_choses_à_faire', '400', '300', '')}}

## Spécifications

| Spécification                                                                                    | État                                         | Commentaires                                                                     |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-before', '::before')}} | {{Spec2('CSS4 Pseudo-Elements')}} | Pas de modification significative depuis la spécification précédente.            |
| {{Specname("CSS3 Transitions", "#animatable-properties", "")}}             | {{Spec2("CSS3 Transitions")}}     | Les transitions peuvent être appliquées sur les propriétés de ce pseudo-élément. |
| {{Specname("CSS3 Animations", "", "")}}                                             | {{Spec2("CSS3 Animations")}}         | Les animations peuvent être appliquées sur les propriétés de ce pseudo-élément.  |
| {{SpecName('CSS3 Selectors', '#gen-content', '::before')}}                     | {{Spec2('CSS3 Selectors')}}         | Introduction de la syntaxe avec les deux deux-points.                            |
| {{SpecName('CSS2.1', 'generate.html#before-after-content', '::before')}} | {{Spec2('CSS2.1')}}                     | Définition initiale avec une seule fois le caractère deux-points.                |

## Compatibilité des navigateurs

{{Compat("css.selectors.before")}}

## Voir aussi

- {{cssxref("::after")}}
- {{cssxref("content")}}
