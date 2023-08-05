---
title: ":required"
slug: Web/CSS/:required
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:required`** permet de cibler un élément {{HTMLElement("input")}} pour lequel l'attribut [`required`](/fr/docs/Web/HTML/Element/input#required) est activé. Cela permet de mettre en forme les éléments obligatoires pour remplir correctement un formulaire.

```css
/* Cible les éléments <input> qui ont */
/* l'attribut required */
input:required {
  border: 1px dashed red;
}
```

> **Note :** La pseudo-classe {{cssxref(":optional")}} pourra être utilisée pour mettre en forme les champs facultatifs.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
input {
  border-width: 3px;
}
input:optional {
  border-color: #008000;
}
input:required {
  border-color: #800000;
}
```

### HTML

```html
<form>
  <label for="url-input">Tapez une URL :</label>
  <input type="url" id="url-input" />
  <br />
  <br />
  <label for="email-input">Tapez une adresse courriel :</label>
  <input type="email" id="email-input" required />
</form>
```

### Résultat

{{EmbedLiveSample('Exemples','100%',150)}}

## Accessibilité

Si un formulaire ({{HTMLElement("form")}}) contient des champs ({{htmlelement("input")}}) optionnels, les champs obligatoires doivent être indiqués avec l'attribut [`input`](/fr/docs/Web/HTML/Element/required#input). Ainsi, les personnes utilisant des outils d'assistance (par exemple un lecteur d'écran) pourront savoir que ces champs ont besoin d'un contenu valide afin de pouvoir envoyer le formulaire.

Les champs obligatoires devraient également être indiqués visuellement et cette indication ne doit pas uniquement être fournie avec une couleur. Généralement, un texte descriptif ou une icône est utilisé.

- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":optional")}}
- {{cssxref(":invalid")}}
- {{cssxref(":valid")}}
- [La validation des données d'un formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire)
