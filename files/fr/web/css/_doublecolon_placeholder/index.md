---
title: '::placeholder'
slug: Web/CSS/::placeholder
tags:
  - CSS
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::placeholder
---
{{CSSRef}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-%C3%A9l%C3%A9ments) **`::placeholder`** représente [le texte de substitution](/fr/docs/Web/Guide/HTML/Forms_in_HTML#The_placeholder_attribute) pour un élément {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}. Cela permet aux développeurs web de personnaliser l'apparence de ce texte.

```css
::placeholder {
  color: blue;
  font-size: 1.5em;
}
```

Seul un sous-ensemble des propriétés CSS peut être utilisé avec un sélecteur respectant ce pseudo-élément :

- Toutes les propriétés liées aux polices de caractères : {{cssxref("font")}}, {{cssxref("font-kerning")}}, {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{cssxref("font-weight")}}, {{cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}} et {{cssxref("font-family")}}
- La propriété {{cssxref("color")}}
- Toutes les propriétés liées à l'arrière-plan : {{cssxref("background-color")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}},  {{cssxref("background-attachment")}} et {{cssxref("background-blend-mode")}}
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}} et {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} et {{cssxref("vertical-align")}}.

> **Note :** Par défaut, dans la plupart des navigateurs, le texte de substitution est écrit en gris clair.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
input::placeholder {
  color: red;
}
```

### HTML

```html
<input type="email" placeholder="toto@exemple.com">
```

### Résultat

{{EmbedLiveSample("Exemples","200","150")}}

## Accessibilité

### Contraste

#### Taux de contraste

Le texte de substitution est généralement représenté avec une couleur plus claire afin d'indiquer qu'il s'agit d'un suggestion et que ce contenu n'a pas été saisi par l'utilisateur ou par le site même.

Il est important de vérifier que le contraste entre la couleur de ce texte et celle de l'arrière-plan est suffisament élevé afin que les personnes avec des conditions de vision faibles puissent les lire.

La valeur du contraste est déterminée en comparant la luminosité de la couleur du texte de substitution et celle de l'arrière-plan. Afin de respecter les recommandations d'accessibilité : [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag), un ratio de 4.5:1 est nécessaire pour le contenu textuel normal et un ratio de 3:1 est nécessaire pour les textes plus grands ou en gras. Le seuil entre ces deux tailles est défini de la façon suivante :

- Si le texte est en gras : 18.66px ou plus grand
- Sinon 24px ou plus grand

Autres ressources :

- [WebAIM : vérificateur de contraste](https://webaim.org/resources/contrastchecker/)
- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Utilisabilité

Les textes de substitution avec un contraste suffisamment élevé peuvent être pris pour des textes saisis par l'utilisateur. De plus, les textes de substituion disparaissent lorsqu'une personne saisit du contenu dans l'élément {{htmlelement("input")}}. Pour ces deux raisons, les textes de subsitution peuvent gêner la complétion du formulaire, notamment pour les personnes souffrant de troubles cognitifs.

Une autre méthode consiste à fournir cette information en l'incluant à proximité du champ mais en dehors et d'utiliser l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) afin de relier l'élément {{HTMLElement("input")}} à l'indication associée.

Avec cette méthode, le contenu indicatif est disponible à tout moment (même lorsqu'une information a été saisie par l'utilisateur) et le champ est vide lorsque la page est chargée. La plupart des lecteurs d'écran utiliseront `aria-describedby` afin de lire l'indication lorsque le libellé du champ aura été annoncé. La personne utilisant le lecteur d'écran pourra arrêter les annonces si elle estime que les informations supplémentaires ne sont pas nécessaires.

```html
<label for="user-email">Votre adresse mail</label>
<span id="user-email-hint" class="input-hint">Exemple : johndoe@example.com</span>
<input id="user-email" aria-describedby="user-email-hint" name="email" type="email">
```

- [_Placeholders in Form Fields Are Harmful_ — Nielsen Norman Group (en anglais)](https://www.nngroup.com/articles/form-design-placeholders/)

### Mode « contraste élevé » de Windows

Lorsque le [mode de contraste élevé de Windows](/en-US/docs/Web/CSS/@media/-ms-high-contrast) est actif, les textes de substitution apparaîtront avec la même mise en forme que les textes saisis par l'utilisateur. Il est alors impossible de distinguer un texte saisi d'un texte indicatif.

- [Greg Whitworth — Comment utiliser `-ms-high-contrast` (en anglais)](https://www.gwhitworth.com/blog/2017/04/how-to-use-ms-high-contrast)
- {{cssxref("@media/-ms-high-contrast")}}

### Libellés ({{HTMLElement("&lt;label&gt;")}})

Les textes de substitution ne doivent pas remplacer les éléments {{htmlelement("label")}}. Sans libellé associé grâce à {{htmlattrxref("for", "label")}} et à {{htmlattrxref("id")}}, les outils d'assistance tels que les lecteurs d'écran ne peuvent pas correctement analyser les éléments {{htmlelement("input")}}.

- [Fournir des indications simples dans un formulaire](/fr/docs/Web/Accessibility/ARIA/forms/Basic_form_hints)
- [_Placeholders in Form Fields Are Harmful_ — Nielsen Norman Group (en anglais)](https://www.nngroup.com/articles/form-design-placeholders/)

## Spécifications

| Spécification                                                                                        | État                                         | Commentaires           |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#placeholder-pseudo', '::placeholder')}} | {{Spec2('CSS4 Pseudo-Elements')}} | Définitions initiales. |

## Compatibilité des navigateurs

{{Compat("css.selectors.placeholder")}}

## Voir aussi

- {{cssxref(":placeholder-shown")}} qui permet de mettre en forme un élément qui possède un _placeholder_ actif

- [Les formulaires HTML](/fr/docs/Web/Guide/HTML/Forms_in_HTML)
- {{HTMLElement("input")}}
- {{HTMLElement("textarea")}}
- Les équivalents **non-standards** :

  - {{cssxref("::-webkit-input-placeholder")}}
  - {{cssxref("::placeholder")}}
  - {{cssxref(":-ms-input-placeholder")}}
