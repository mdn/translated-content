---
title: ::placeholder
slug: Web/CSS/Reference/Selectors/::placeholder
original_slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::placeholder`** représente [le texte de substitution](/fr/docs/Web/HTML/Reference/Elements/input#placeholder) pour un élément {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: ::placeholder", "tabbed-shorter")}}

```css interactive-example
input {
  margin-top: 0.5rem;
}

input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: red;
}
```

```html interactive-example
<label for="phone-number">Votre numéro de téléphone&nbsp;:</label><br />

<input
  id="phone-number"
  type="tel"
  name="phone"
  minlength="10"
  maxlength="10"
  placeholder="Il doit comporter 10 chiffres" />
```

Seul le sous-ensemble des propriétés CSS qui s'appliquent au pseudo-élément {{cssxref("::first-line")}} peut être utilisé dans une règle utilisant `::placeholder` dans son sélecteur.

> [!NOTE]
> Par défaut, dans la plupart des navigateurs, le texte de substitution est écrit en gris clair.

## Syntaxe

```css
::placeholder {
  /* ... */
}
```

## Accessibilité

### Contraste

#### Taux de contraste

Le texte de substitution est généralement affiché dans une couleur plus claire afin d'indiquer qu'il s'agit d'une suggestion quant au type de saisie valide, et non d'une saisie réelle.

Il est important de veiller à ce que le rapport de contraste entre la couleur du texte de substitution et l'arrière-plan du champ de saisie soit suffisamment élevé pour que les personnes malvoyantes puissent le lire, tout en s'assurant qu'il y ait une différence suffisante entre la couleur du texte de substitution et celle du texte saisi afin que les utilisateur·ice·s ne confondent pas le texte de substitution avec les données saisies.

La valeur du contraste est déterminée en comparant la luminosité de la couleur du texte de substitution et celle de l'arrière-plan. Afin de respecter les recommandations d'accessibilité&nbsp;: [Web Content Accessibility Guidelines (WCAG) <sup>(angl.)</sup>](https://www.w3.org/WAI/intro/wcag), un ratio de 4.5:1 est nécessaire pour le contenu textuel normal et un ratio de 3:1 est nécessaire pour les textes plus grands ou en gras. Un texte de grande taille est défini comme étant de 18,66 pixels et en gras ou plus grand, ou de 24 pixels ou plus.

- [WebAIM&nbsp;: vérificateur de contraste <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/)
- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprendre le critère de succès 1.4.3 | W3C Comprendre les WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Utilisabilité

Les textes de substitution avec un contraste suffisamment élevé peuvent être pris pour des textes saisis par l'utilisateur·ice. De plus, les textes de substitution disparaissent lorsqu'une personne saisit du contenu dans l'élément {{htmlelement("input")}}. Pour ces deux raisons, les textes de subsitution peuvent gêner la complétion du formulaire, notamment pour les personnes souffrant de troubles cognitifs.

Une autre méthode consiste à fournir cette information en l'incluant à proximité du champ mais en dehors et d'utiliser l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) afin de relier l'élément {{HTMLElement("input")}} à l'indication associée.

Avec cette méthode, le contenu de l'indication est disponible même si des informations sont saisies dans le champ, et la saisie apparaît sans aucune entrée préexistante lorsque la page est chargée. La plupart des technologies de lecture d'écran utilisent `aria-describedby` pour lire l'indication après l'annonce du texte de l'étiquette de la saisie, et la personne qui utilise le lecteur d'écran peut la désactiver si elle juge ces informations supplémentaires inutiles.

```html
<label for="user-email">Votre adresse mail</label>
<span id="user-email-hint" class="input-hint">Exemple : toto@exemple.fr</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [_Placeholders in Form Fields Are Harmful_ — Nielsen Norman Group <sup>(angl.)</sup>](https://www.nngroup.com/articles/form-design-placeholders/)

### Mode « contraste élevé » de Windows

Le texte de substitution apparaîtra avec le même style que le contenu textuel saisi par l'utilisateur·ice lorsqu'il sera affiché en [mode de contraste élevé de Windows <sup>(angl.)</sup>](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/). Il est alors impossible de distinguer un texte saisi d'un texte de substitution.

### Libellés

Les textes de substitution ne doivent pas remplacer les éléments {{htmlelement("label")}}. Sans libellé associé grâce à [`for`](/fr/docs/Web/HTML/Reference/Elements/label#for) et à [`id`](/fr/docs/Web/HTML/Reference/Global_attributes#id), les outils d'assistance tels que les lecteurs d'écran ne peuvent pas correctement analyser les éléments {{htmlelement("input")}}.

- [_Placeholders in Form Fields Are Harmful_ — Nielsen Norman Group <sup>(angl.)</sup>](https://www.nngroup.com/articles/form-design-placeholders/)

## Exemples

### Changer l'apparence du texte de substitution

Cet exemple montre quelques-unes des modifications que vous pouvez apporter aux styles du texte de substitution.

#### HTML

```html
<input placeholder="Écrire ici" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
  opacity: 0.5;
}
```

#### Résultat

{{EmbedLiveSample("changer_lapparence_du_texte_de_substitution", 200, 60)}}

### Texte opaque

Certains navigateurs rendent le texte de substitution moins opaque. Si vous souhaitez un texte entièrement opaque, définissez explicitement la valeur de la propriété {{CSSXref("color")}}. La valeur [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) peut être utilisée pour avoir la même couleur que l'élément d'entrée correspondant.

#### HTML

```html
<input placeholder="Couleur définie par le navigateur" />
<input placeholder="Même couleur que l'entrée" class="explicit-color" />
<input placeholder="Couleur de texte semi-opaque" class="opacity-change" />
```

#### CSS

```css
input {
  font-weight: bold;
  color: green;
}

.explicit-color::placeholder {
  /* utiliser la même couleur que l'élément d'entrée pour éviter la couleur par
     défaut définie par le navigateur */
  color: currentColor;
}

.opacity-change::placeholder {
  /* texte moins opaque */
  color: color-mix(in srgb, currentColor 70%, transparent);
}
```

#### Résultat

{{EmbedLiveSample("texte_opaque", 200, 60)}}

> [!NOTE]
> Notez que les navigateurs utilisent différentes couleurs par défaut pour le texte de substitution. Par exemple, Firefox utilise la couleur de l'élément d'entrée avec 54&nbsp;% d'opacité, et Chrome utilise la couleur `darkgray`. Si vous souhaitez une couleur de texte de substitution cohérente dans tous les navigateurs, définissez explicitement la `color`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{cssxref(":placeholder-shown")}} de mise en forme d'un élément qui _a_ un texte de substitution actif.
- Les éléments HTML associés&nbsp;:
  - {{HTMLElement("input")}}
  - {{HTMLElement("textarea")}}
- Les [formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
