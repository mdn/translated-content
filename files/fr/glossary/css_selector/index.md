---
title: Sélecteur CSS
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: 818941994eb1765f2196c9b588314b12e7b9f66f
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
    16px Lucida Grande,
    Arial,
    Helvetica,
    sans-serif;
}
```

Les sélecteurs sont ici&nbsp;:

- `p`, qui cible les éléments [`<p>`](/fr/docs/Web/HTML/Element/p) et qu'on utilise ici pour que le texte de ces éléments soit vert
- `div.avertissement`, qui cible les éléments [`<div>`](/fr/docs/Web/HTML/Element/div) avec la [classe](/fr/docs/Web/HTML/Global_attributes/class) `avertissement` pour que ceux-ci ressemblent à une boîte d'avertissement)
- `#personnalise`, qui cible l'élément avec l'identifiant `personnalise` pour appliquer une mise en forme utilisant une police de caractères de 16 pixels, Lucida Grande ou l'une des polices de secours.

Nous pouvons ensuite appliquer ce CSS à du HTML, tel que&nbsp;:

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

{{EmbedLiveSample("", 640, 240)}}

## Voir aussi

- [En apprendre plus sur les sélecteurs CSS](/fr/docs/Learn/CSS/Building_blocks/Selectors) dans l'introduction à CSS
- Les sélecteurs simples
  - [Les sélecteurs de type](/fr/docs/Web/CSS/Type_selectors) `nomelement`
  - [Les sélecteurs de classe](/fr/docs/Web/CSS/Class_selectors) `.nomclasse`
  - [Les sélecteurs d'identifiant](/fr/docs/Web/CSS/ID_selectors) `#nomid`
  - [Les sélecteurs universels](/fr/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [Les sélecteurs d'attribut](/fr/docs/Web/CSS/Attribute_selectors) `[attr=valeur]`
  - [Les sélecteurs d'état](/fr/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`
- Les sélecteurs composites
  - [Liste de sélecteurs](/fr/docs/Web/CSS/Selector_list) `A, B`
- Les combinateurs
  - [Sélecteurs de voisins directs](/fr/docs/Web/CSS/Adjacent_sibling_combinator) `A + B`
  - [Sélecteurs de voisins généraux](/fr/docs/Web/CSS/General_sibling_combinator) `A ~ B`
  - [Sélecteurs d'enfant direct](/fr/docs/Web/CSS/Child_combinator) `A > B`
  - [Sélecteurs de descendants](/fr/docs/Web/CSS/Descendant_combinator) `A B`
- Pseudo
  - [Pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes) `:`
  - [Pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements) `::`
