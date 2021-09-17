---
title: Utiliser la pseudo-classe :target dans un sélecteur
slug: Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors
tags:
  - CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors
original_slug: Web/CSS/Sélecteurs_CSS/Utiliser_la_pseudo-classe_:target_dans_un_selecteur
---
{{CSSRef}}

Afin d'aider à identifier la destination d'un lien qui mène vers une portion spécifique du document, les [sélecteurs CSS3](https://www.w3.org/TR/css3-selectors/#target-pseudo) ont introduit [la pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) {{cssxref(":target")}}.

## Choisir une cible

La pseudo-classe {{cssxref(":target")}} permet de mettre en forme l'élément ciblé par le fragment d'identifiant de l'URL du document. Ainsi l'URL `https://developer.mozilla.org/fr/docs/Utiliser_la_pseudo-classe_:target_dans_un_selecteur#Exemple` contient le fragment d'identifiant `#Exemple`. En HTML, les identifiants correspondent aux valeurs des attributs `id` et `name`, puisque les deux partagent le même espace de nommage. Ainsi l'URL dans l'exemple devrait pointer vers le titre « Exemple » de ce document.

Imaginons qu'on souhaite mettre en forme n'importe quel élément {{HTMLElement("h2")}} qui serait la cible de l'URL mais qu'on ne souhaite pas qu'un autre type d'élément ait un style particulier lorsqu'il est ciblé. On peut obtenir cet effet assez simplement :

```css
h2:target {
  font-weight: bold;
}
```

On peut également créer des styles particuliers pour une portion spécifique du document. On peut ainsi utiliser la même valeur identifiant la cible que celle présente dans l'URL. Par exemple, pour ajouter une bordure au fragment `#Exemple`, on pourra écrire :

```css
#Exemple:target {
  border: 1px solid black;
}
```

## Cibler tous les éléments

Si le but est de créer un style commun qui s'appliquera à tous les éléments lorsque ceux-ci seront ciblés, un sélecteur universel utilisant seulement la pseudo-classe s'avèrera très pratique :

```css
:target {
  color: red;
}
```

## Exemple

Dans l'exemple suivant, cinq liens pointent chacun vers une portion du même document. Actionner le lien « Premier », par exemple, fera en sorte que le` <h1 id="un"> `devienne l'élément cible. Notons que le document pourrait défiler vers une nouvelle position, jusqu'à la cible du lien.

```html
<h4 id="un">...</h4> <p id="deux">...</p>
<div id="trois">...</div> <a id="quatre">...</a> <em id="cinq">...</em>

<a href="#un">Premier</a>
<a href="#deux">Deuxième</a>
<a href="#trois">Troisième</a>
<a href="#quatre">Quatrième</a>
<a href="#cinq">Cinquième</a>
```

## Conclusion

Les utilisateurs peuvent être gênés lorsqu'un fragment d'identifiant mène à une portion du document, ne sachant pas quelle partie du document ils sont supposés lire. En mettant en forme la cible d'une URI, on peut réduire (voire supprimer) cette confusion.

## Voir aussi

- [_CSS3 Selectors #target-pseudo_ (en anglais)](https://www.w3.org/TR/css3-selectors/#target-pseudo)
- {{cssxref(":target")}}
