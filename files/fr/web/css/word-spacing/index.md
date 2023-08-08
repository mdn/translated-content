---
title: word-spacing
slug: Web/CSS/word-spacing
---

{{CSSRef}}

La propriété **`word-spacing`** définit la règle d'espacement utilisée entre les balises et entre les mots.

{{EmbedInteractiveExample("pages/css/word-spacing.html")}}

## Syntaxe

```css
/* Avec un mot-clé */
word-spacing: normal;

/* Valeurs de longueur */
/* type <length> */
word-spacing: 3px;
word-spacing: 0.3em;

/* Valeurs en pourcentages */
/* type <percentage> */
word-spacing: 50%;
word-spacing: 200%;

/* Valeurs globales */
word-spacing: inherit;
word-spacing: initial;
word-spacing: unset;
```

### Valeurs

- `normal`
  - : L'espace normale entre les mots (ou inter-mot), tel qu'il est défini par la police courante et/ou le navigateur.
- `<length>`
  - : Une valeur de longueur définit l'espace qu'on ajoute à l'inter-mot intrinsèque défini par la police. Voir {{cssxref("&lt;length&gt;")}} pour les différentes valeurs et unités possibles.
- `<percentage>`
  - : Une valeur en pourcentages définit la taille de l'inter-mot à utiliser par rapport à la position du prochain caractère (si on utilise `-100%`, l'espace sera nul et si on utilise `100%`, il sera doublé). Voir {{cssxref("&lt;percentage&gt;")}} pour les différentes valeurs et unités possibles.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### HTML

```html
<p id="ligne1">Voici le texte de la ligne 1</p>
<p id="ligne2">Et voilà celui de la ligne 2</p>
```

### CSS

```css
#ligne1 {
  word-spacing: 15px;
}

#ligne2 {
  word-spacing: 5em;
}
```

### Résultat

{{EmbedLiveSample("Exemple")}}

## Accessibilité

Utiliser des valeurs trop importantes (positives ou négatives) pour `word-spacing` rend le texte illisible. Si l'espacement utilisé est trop grand, la structure visuelle ne permettra plus d'identifier une phrase. Si l'espacement est trop petit, les mots se chevaucheront et on ne pourra plus distinguer le début et la fin de chaque mot.

La bonne valeur à utiliser pour `word-spacing` doit être déterminée au cas par cas, en fonction du type de police utilisé et de la largeur de celle-ci.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 - W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
