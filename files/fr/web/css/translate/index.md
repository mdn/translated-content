---
title: translate
slug: Web/CSS/translate
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/translate
---
{{CSSRef}}{{seecompattable}}

La propriété **`translate`** permet de définir des opérations de translations, individuellement et indépendamment de la propriété {{cssxref("transform")}}. Cela peut être utile pour la construction d'une interface utilisateur et évite d'avoir à se souvenir de l'ordre exact des fonctions de transformations à indiquer pour `transform`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
translate: none;

/* Valeurs uniques */
translate: 100px;
translate: 50%;

/* Deux valeurs */
translate: 100px 200px;
translate: 50% 105px;

/* Trois valeurs */
translate: 50% 105px 5rem;
```

### Valeurs

- Une seule valeur de longueur/pourcentage ({{cssxref("&lt;length-percentage&gt;")}})
  - : Une longueur ({{cssxref("&lt;length&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) qui définit une translation en deux dimensions. La translation est la même pour l'axe X et l'axe Y. Cela est équivalent à la fonction `translate()` (translation en deux dimensions) avec une seule valeur.
- Deux valeurs de longueur/pourcentage ({{cssxref("&lt;length-percentage&gt;")}})
  - : Deux longueurs ({{cssxref("&lt;length&gt;")}}) ou pourcentages ({{cssxref("&lt;percentage&gt;")}}) qui définissent respectivement les composantes horizontale et verticale d'une translation en deux dimensions. Cela est équivalent à la fonction `translate()` appelée avec ces deux arguments.
- Trois valeurs
  - : Deux valeurs de longueur/pourcentage ({{cssxref("&lt;length-percentage&gt;")}}) et une longueur ({{cssxref("&lt;length&gt;")}}) qui définissent respectivement les composantes horizontale, verticale et en profondeur de la translation en trois dimensions. Cela est équivalent à la fonction `translate3d()` appelée avec ces trois arguments.
- `none`
  - : Cette valeur indique qu'aucune translation ne devrait être appliquée.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div>
  <p class="translate">Translation</p>
</div>
```

### CSS

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.translate {
  transition: translate 1s;
}

div:hover .translate {
  translate: 200px 50px;
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                                                    | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS Transforms 2', '#individual-transforms', 'individual transforms')}} | {{Spec2('CSS Transforms 2')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.translate")}}

## Voir aussi

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}
