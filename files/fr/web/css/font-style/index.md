---
title: font-style
slug: Web/CSS/font-style
translation_of: Web/CSS/font-style
browser-compat: css.properties.font-style
---
{{CSSRef}}

La propriété **`font-style`** permet de sélectionner une fonte italique (`italic`) ou oblique (`oblique`) parmi celles listées par [`font-family`](/fr/docs/Web/CSS/font-family).

{{EmbedInteractiveExample("pages/css/font-style.html")}}

La forme **italique** est généralement une forme cursive qui utilise moins d'espace horizontal que les autres formes classiques. La forme **oblique** quant à elle est simplement une version penchée de la forme normale. Les formes italique et oblique peuvent être synthétisées par le navigateur si elles sont absentes (le moteur penche alors les glyphes de la forme normale) — pour plus d'informations sur l'activation de cette synthèse, voir la propriété [`font-synthesis`](/fr/docs/Web/CSS/font-synthesis).

## Syntaxe

La propriété `font-style` peut être définie avec l'un des mots-clés suivants.

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 10deg;

/* Valeurs globales */
font-style: inherit;
font-style: initial;
font-style: revert;
font-style: unset;
```

La propriété `font-style` s'utilise avec un mot-clé parmi ceux qui suivent. Si ce mot-clé est `oblique`, il peut également être suivi de l'angle.

### Valeurs

- `normal`
  - : Sélectionne une police qualifiée de `normal` parmi celles de [`font-family`](/fr/docs/Web/CSS/font-family).
- `italic`
  - : Sélectionne une police qualifiée d'`italic`. S'il n'y a pas de version italique, une version `oblique` sera sélectionnée à la place. Si aucune version n'est disponible, le style de police est synthétisé.
- `oblique`
  - : Sélectionne une police qualifiée d'`oblique`. S'il n'y a pas de version oblique, une version `italic` sera sélectionnée à la place. Si aucune version n'est disponible, le style de police est synthétisé.
- `oblique` [`<angle>`](/fr/docs/Web/CSS/angle)
  - : Sélectionne une police qualifiée d'`oblique` et indique l'angle à utiliser pour la pente du texte. Si plusieurs fontes sont disponibles pour la police, c'est la fonte avec la pente la plus proche qui est utilisée. Si aucune police oblique n'est disponible, le navigateur _synthétisera_ une police penchée en tournant les caractères d'une fonte normale.
    L'angle indiqué (cf. [`<angle>`](/fr/docs/Web/CSS/angle)) doit être compris entre `-90deg` et `90deg`. Si aucun angle n'est indiqué, la valeur par défaut utilisée sera `14deg`. Les valeurs positives correspondent à une pente où le haut des caractères penche vers la fin de la ligne et les valeurs négatives permettent d'obtenir une pente orientée vers le début de la ligne.

    En général, si on utilise un angle de 14 degrés ou plus, des angles plus grands sont préférables&nbsp;; sinon, des angles plus petits sont préférables (voir [la section _Font Matching Algorithm_](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) dans la spécification pour l'algorithme exact).

### Polices variables

Les polices variables permettent d'obtenir un contrôle fin sur la pente appliquée à la fonte. Pour cela, on pourra utiliser une police variable et `font-style` avec le mot-clé `oblique` suivi d'une valeur d'angle.

Pour les polices variables TrueType ou OpenType, c'est l'axe de variation `"slnt"` qui est utilisé afin d'implémenter les variations de pente. C'est l'axe `"ital"` qui est utilisé avec une valeur de 1 pour implémenter les fontes italiques. Voir [`font-variation-settings`](/fr/docs/Web/CSS/font-variation-settings).

> **Note :** Afin que l'exemple suivant fonctionne, votre navigateur doit prendre en charge la syntaxe _CSS Fonts Level 4_ qui permet d'utiliser `font-style: oblique` suivi d'un angle. Le code de démarrage utilise `font-style: oblique 23deg;` — modifiez la valeur `<angle>` pour changer la pente du texte.

{{EmbedGHLiveSample("css-examples/variable-fonts/oblique.html", '100%', 860)}}

### Définition formelle

{{cssinfo}}

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="normal">Un paragraphe normal.</p>
<p class="italic">Un paragraphe italique.</p>
<p class="oblique">Un paragraphe oblique.</p>
```

### CSS

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

### Résultat

{{EmbedLiveSample('')}}

## Accessibilité

L'utilisation de grandes portions de textes avec `font-style: italic` peut rendre la lecture difficile pour les personnes dyslexiques ou ayant des troubles cognitifs.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`font-weight`](/fr/docs/Web/CSS/font-weight)
- [Initiation à la mise en forme du texte](/fr/docs/Learn/CSS/Styling_text/Fundamentals)