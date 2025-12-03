---
title: Sélecteur (CSS)
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Un **sélecteur CSS** est la partie de la règle CSS qui désigne les éléments d'un document ciblés par cette règle. Les éléments correspondants se verront appliquer la mise en forme indiquée par la règle.

## Exemple

Prenons comme exemple ce fragment de code CSS&nbsp;:

```css
p {
  color: green;
}

div.avertissement {
  width: 100%;
  border: 2px solid yellow;
  color: white;
  background-color: darkred;
  padding: 0.8em 0.8em 0.6em;
}

#personnalise {
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

Les sélecteurs ici sont `"p"` (qui applique la couleur verte au texte à l'intérieur de tout élément {{HTMLElement("p")}}), `"div.warning"` (qui fait ressembler tout élément {{HTMLElement("div")}} avec la [classe](/fr/docs/Web/HTML/Reference/Global_attributes/class) `"warning"` à une boîte d'avertissement), et `"#customized"`, qui définit la police de base de l'élément avec l'ID `"customized"` à Lucida Grande de 16 pixels de haut ou à l'une des polices de secours.

Nous pouvons ensuite appliquer ce CSS à du HTML, comme&nbsp;:

```html
<p>Un texte heureux.</p>

<div class="avertissement">
  Attention&nbsp;! Il y a des sorciers pas loin&nbsp;!
</div>

<div id="personnalise">
  <p>Un texte heureux.</p>

  <div class="avertissement">
    Attention&nbsp;! Il y a des sorciers pas loin&nbsp;!
  </div>
</div>
```

Le contenu de la page résultant ressemble à ceci:

{{EmbedLiveSample("Exemple", 640, 240)}}

## Voir aussi

- [En apprendre plus sur les sélecteurs CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) dans l'introduction à CSS

- Les sélecteurs simples
  - [Les sélecteurs de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors) `nomelement`
  - [Les sélecteurs de classe](/fr/docs/Web/CSS/Reference/Selectors/Class_selectors) `.nomclasse`
  - [Les sélecteurs d'identifiant](/fr/docs/Web/CSS/Reference/Selectors/ID_selectors) `#nomid`
  - [Les sélecteurs universels](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors) `* ns|* *|*`
  - [Les sélecteurs d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=valeur]`
  - [Les sélecteurs d'état](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `a:active, a:visited`

- Les sélecteurs composites
  - [Liste de sélecteurs](/fr/docs/Web/CSS/Reference/Selectors/Selector_list) `A, B`

- Les combinateurs
  - [Sélecteurs de voisins directs](/fr/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) `A + B`
  - [Sélecteurs de voisins généraux](/fr/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) `A ~ B`
  - [Sélecteurs d'enfant direct](/fr/docs/Web/CSS/Reference/Selectors/Child_combinator) `A > B`
  - [Sélecteurs de descendants](/fr/docs/Web/CSS/Reference/Selectors/Descendant_combinator) `A B`

- Pseudo
  - [Pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:`
  - [Pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::`
