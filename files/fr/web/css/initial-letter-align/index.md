---
title: initial-letter-align
slug: Web/CSS/initial-letter-align
tags:
  - Alignement
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/initial-letter-align
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`initial-letter-align`** définit l'alignement des premières lettres d'un paragraphe lorsque celles-ci sont mises en avant grâce à {{cssxref("initial-letter")}} pour former une lettrine.

```css
/* Valeurs avec un mot-clé */
initial-letter-align: auto;
initial-letter-align: alphabetic;
initial-letter-align: border-box;
initial-letter-align: hanging;
initial-letter-align: hebrew;
initial-letter-align: ideographic;

/* Valeurs globales */
initial-letter-align: inherit;
initial-letter-align: initial;
initial-letter-align: unset;
```

## Syntaxe

La valeur de cette propriété peut être l'un des mots-clés parmi ceux définis ci-après.

### Valeurs

- `auto`
  - : L'agent utilisateur choisit la meilleure valeur par rapport à la langue du texte. Pour les langues occidentales, cela sera `alphabetic`, pour les langues hébraïques `hebrew`, pour les langues CJK `ideographic` et pour certaines langues indo-aryennes, cela correspondra à `hanging`.
- `alphabetic`
  - : La ligne de majuscule est alignée avec la ligne de majuscule de la première ligne de texte. La ligne de pied de la première lettre s'aligne avec la ligne de pied de la N-ième ligne.
- `border-box`
  - : C'est la boîte formée par la première lettre qui s'aligne avec la ligne de jambage de la première ligne de texte.
- `hanging`
  - : La ligne de jambage de la première lettre est alignée avec la ligne de jambage de la première ligne de texte.
- `hebrew`
  - : La ligne de jambage et la ligne de base alphabétique hébreuses du texte qui suit qui sont utilisées pour aligner la première lettre.
- `ideographic`
  - : La première lettre est centrée par rapport à la N-ième ligne utilisée pour la lettrine.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exemple {
  initial-letter: 3 1;
  initial-letter-align: hanging;
}
```

### HTML

```html
<p class="exemple">
  Tombe, tombe, tombe ! « Cette chute n’en finira
  donc pas ! Je suis curieuse de savoir combien de
  milles j’ai déjà faits, » dit-elle tout haut. « Je
  dois être bien près du centre de la terre. Voyons
  donc, cela serait à quatre mille milles de profondeur,
  il me semble. » </p>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

| Spécification                                                                                            | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Inline', '#aligning-initial-letter', 'initial-letter-align')}} | {{Spec2('CSS3 Inline')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.initial-letter-align")}}
