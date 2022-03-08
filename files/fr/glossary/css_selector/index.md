---
title: Sélecteur CSS
slug: Glossary/CSS_Selector
tags:
  - CSS
  - Glossaire
  - HTML
  - Programmation
  - Sélecteur
  - Sélecteur CSS
translation_of: Glossary/CSS_Selector
original_slug: Glossaire/Sélecteur_CSS
---
Un **sélecteur CSS** est la partie de la règle CSS qui désigne les éléments d'un document concernés par la règle. Les éléments correspondants auront le style spécifié par la règle qui leur est appliqué.

## Exemple

Considérez ce code CSS :

```css
p {
  color: green;
}

div.warning {
  width: 100%;
  border: 2px solid yellow;
  color: white;
  background-color: darkred;
  padding:  0.8em 0.8em 0.6em;
}

#customized {
  font: 16px Lucida Grande, Arial, Helvetica, sans-serif;
}
```

Les sélecteurs sont ici `"p"` (qui applique la couleur verte au texte de tout élément {{HTMLElement ("p")}}), `"div.warning"` (qui fait que tout élément {{HTMLElement ("div")}} appartenant à la {{Glossary ("Class", "classe CSS")}} `"warning"` ressemble à une boîte d'avertissement) et `"#customized"`, qui définit la police de base de l'élément avec l'ID `"customized"` à 16 -pixel Lucida Grande ou l'une des polices de secours.

Nous pouvons ensuite appliquer ce CSS à du HTML, tel que :

```html
<p>This is happy text.</p>

<div class="warning">
  Be careful! There are wizards present, and they are quick to anger!
</div>

<div id="customized">
  <p>This is happy text.</p>

  <div class="warning">
    Be careful! There are wizards present, and they are quick to anger!
  </div>
</div>
```

Le contenu de la page résultant ressemble à ceci:

{{EmbedLiveSample("Exemple", 640, 210)}}

## Pour approfondir

### Culture générale

- [Apprendre sur les sélecteurs CSS](/fr/Apprendre/CSS/Introduction_%C3%A0_CSS/Les_s%C3%A9lecteurs) dans notre introduction à CSS.
- Sélecteurs de base

  - [Sélecteurs de type](/fr/docs/Web/CSS/S%C3%A9lecteurs_de_type) `elementname`
  - [Sélecteurs de classe](/fr/docs/Web/CSS/Sélecteurs_de_classe) `.classname`
  - [Sélecteurs d'ID](/fr/docs/Web/CSS/Reference/Sélecteurs_d'ID) `#idname`
  - [Sélecteurs universels](/fr/docs/Web/CSS/Sélecteurs_universels) `* ns|* *|*`
  - [Sélecteurs d'attribut](/fr/docs/Web/CSS/Reference/Sélecteurs_d'attribut) `[attr=value]`
  - [`Sélecteurs d'état`](/fr/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- Combinaisons

  - [Sélecteurs de frère adjacent](/fr/docs/Web/CSS/Adjacent_sibling_selectors) `A + B`
  - [Sélecteurs de voisins généraux](/fr/docs/Web/CSS/Sélecteurs_de_voisins_généraux) `A ~ B`
  - [Sélecteurs d'enfant](/fr/docs/Web/CSS/Sélecteurs_enfant) `A > B`
  - [Sélecteurs descendants](/fr/docs/Web/CSS/Sélecteurs_descendant) `A B`

- [Pseudo-éléments](/fr/docs/Web/CSS/Pseudo-éléments)
- [Pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes)

### Référence technique

{{SpecName("CSS3 Selectors")}}
