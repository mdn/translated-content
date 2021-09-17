---
title: letter-spacing
slug: Web/CSS/letter-spacing
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/letter-spacing
---
{{CSSRef}}

La propriété **`letter-spacing`** définit [l'interlettre](https://fr.wikipedia.org/wiki/Interlettre) utilisée pour les caractères qui composent le texte.

{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;

/* Valeur avec mot-clé */
letter-spacing: normal;

/* Valeurs globales */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

### Valeurs

- `normal`
  - : L'interlettre est dictée par la police utilisée. À la différence de 0, cette valeur permet à l'agent utilisateur de modifier l'espace entre les caractères afin de le justifier.
- `<length>`
  - : Cette valeur indique l'espace **ajouté** à l'espace par défaut. Les valeurs peuvent être négatives mais les limites imposées dépendent de l'implémentation du moteur. Les agents utilisateurs ne pourront plus augmenter ou réduire l'interlettre afin de justifier le texte. Pour les différentes unités possibles, se référer à la page {{cssxref("&lt;length&gt;")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.premier    { letter-spacing: 0.4em; }
.deuxieme   { letter-spacing: 1em; }
.troisieme  { letter-spacing: -0.05em; }
.quatrieme  { letter-spacing: 6px; }
```

### HTML

```html
<p class="premier">Et voici l'interlettre</p>
<p class="deuxieme">Et voici l'interlettre</p>
<p class="troisieme">Et voici l'interlettre</p>
<p class="quatrieme">Et voici l'interlettre</p>
```

### Résultat

{{EmbedLiveSample('Exemples', 440, 185)}}

## Accessibilité

Utiliser une valeur trop grande (positive ou négative) pour `letter-spacing` rendra les mots illisibles. Si une valeur positive trop importante est utilisée, les lettres seront trop éloignées les unes des autres et on ne pourra pas distinguer les mots. Si une valeur négative trop faible est employée, les lettres se chevaucheront et on ne pourra pas lire le texte.

L'espacement doit être déterminé au cas par cas car chaque famille de polices utilise des caractères de largeurs différentes. Il n'existe pas de valeur unique qui permette de s'assurer que, quelle que soit la police utilisée, le texte soit lisible.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.8, W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Spécifications

| Spécification                                                                                        | État                                     | Commentaires                                 |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------- |
| {{SpecName('CSS3 Text', '#letter-spacing-property', 'letter-spacing')}}     | {{Spec2('CSS3 Text')}}             | Aucune modification.                         |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'letter-spacing')}}         | {{Spec2('CSS3 Transitions')}} | `letter-spacing` peut désormais être animée. |
| {{SpecName('CSS2.1', 'text.html#propdef-letter-spacing', 'letter-spacing')}} | {{Spec2('CSS2.1')}}                 | Aucune modification.                         |
| {{SpecName('SVG1.1', 'text.html#LetterSpacingProperty', 'letter-spacing')}} | {{Spec2('SVG1.1')}}                 | Définition initiale pour SVG.                |
| {{SpecName('CSS1', '#letter-spacing', 'letter-spacing')}}                         | {{Spec2('CSS1')}}                 | Définition initiale.                         |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.letter-spacing")}}

## Voir aussi

- {{cssxref("font-kerning")}}
