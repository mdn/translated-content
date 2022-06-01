---
title: ':target-within'
slug: Web/CSS/:target-within
translation_of: Web/CSS/:target-within
browser-compat: css.selectors.target-within
---
{{CSSRef}}{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:target-within`** représente un élément ciblé ou qui _contient_ un élément ciblé. Un élément ciblé est un élément unique disposant d'un [`id`](/fr/docs/Web/HTML/Global_attributes#attr-id) correspondant au fragment de l'URL. En d'autres termes, il représente un élément qui correspond lui-même à la pseudo-classe {{CSSxRef(":target")}} ou qui a un descendant correspondant à `:target` (cela inclut les descendants des [arbres fantômes](/fr/docs/Web/Web_Components/Using_shadow_DOM)).

```css
/* Sélectionne une <div> lorsqu'un de ses descendants est une cible */
div:target-within {
  background: cyan;
}
```

## Syntaxe

{{CSSSyntax}}

## Exemples

### Mise en avant d'un article

La pseudo-classe `:target-within` peut être utilisée pour mettre en avant un article si quoi que ce soit dans son contenu a été mis en lien. La pseudo-classe `:target` est aussi utilisée pour montrer l'élément qui a été ciblé.

#### HTML

```html
<h3>Table des matières</h3>
<ol>
 <li><a href="#p1">Aller au premier paragraphe&nbsp;!</a></li>
 <li><a href="#p2">Aller au second paragraphe&nbsp;!</a></li>
</ol>

<article>
  <h3>Mon bel article</h3>
  <p id="p1">Vous pouvez cibler <i>ce paragraphe</i> en utilisant un fragment d'URL. Cliquez sur le lien ci-dessus pour essayer&nbsp;!</p>
  <p id="p2">Ceci est <i>un autre paragraphe</i>, également accessible depuis les liens ci-dessus. N'est-ce pas savoureux&nbsp;?</p>
</article>
```

#### CSS

```css
article:target-within {
  background-color: gold;
}

/* Ajout d'un pseudo élément à l'intérieur de l'élément cible */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: .25em;
}

/* Style des éléments en italique à l'intérieur de l'élément cible */
p:target i {
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('Exemples', 500, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef(":target")}}
