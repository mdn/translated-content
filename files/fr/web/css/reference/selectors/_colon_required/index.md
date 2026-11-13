---
title: Pseudo-classe CSS `:required`
short-title: :required
slug: Web/CSS/Reference/Selectors/:required
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:required`** permet de cibler un élément {{HTMLElement("input")}} pour lequel l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) est activé. Cela permet de mettre en forme les éléments obligatoires pour remplir correctement un formulaire.

{{InteractiveExample("Démonstration CSS&nbsp;: :required", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 0.5em;
}

fieldset {
  margin-top: 0.5em;
}

*:required {
  background-color: gold;
}
```

```html interactive-example
<label for="name">Nom (requis)&nbsp;:</label>
<input id="name" name="name" type="text" required />

<label for="birth">Date de naissance&nbsp;:</label>
<input id="birth" name="birth" type="date" />

<label for="origin"
  >Comment avez-vous entendu parler de nous&nbsp;? (requis)</label
>
<select id="origin" name="origin" required>
  <option value="">Choisissez une option</option>
  <option value="google">Google</option>
  <option value="facebook">Facebook</option>
  <option value="advertisement">Publicité</option>
</select>

<fieldset>
  <legend>Méthode de contact privilégiée&nbsp;:</legend>
  <label>
    <input name="contact" type="radio" value="email" checked /> Courriel
  </label>
  <label><input name="contact" type="radio" value="phone" /> Téléphone</label>
</fieldset>

<label>
  <input name="newsletter" type="checkbox" checked /> Je souhaite m'abonner à
  une lettre d'information personnalisée.
</label>
<label>
  <input name="privacy" type="checkbox" required /> J'ai lu et j'accepte la
  Politique de confidentialité (obligatoire).
</label>
```

La pseudo-classe est utile pour mettre en évidence les champs qui doivent contenir des données valides avant qu'un formulaire puisse être envoyé.

> [!NOTE]
> La pseudo-classe {{CSSxRef(":optional")}} peut être utilisée pour mettre en forme les champs facultatifs.

## Syntaxe

```css
:required {
  /* … */
}
```

## Accessibilité

Si un formulaire ({{HTMLElement("form")}}) contient des champs ({{HTMLElement("input")}}) optionnels, les champs obligatoires doivent être indiqués avec l'attribut [`input`](/fr/docs/Web/HTML/Element/required#input). Ainsi, les personnes utilisant des outils d'assistance (par exemple un lecteur d'écran) peuvent savoir que ces champs ont besoin d'un contenu valide afin de pouvoir envoyer le formulaire.

Les champs obligatoires doivent également être indiqués visuellement et cette indication ne doit pas uniquement être fournie avec une couleur. Généralement, un texte descriptif ou une icône est utilisé.

- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprendre le critère de succès 1.4.3 | Comprendre les WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Exemples

### Le champ requis a une bordure rouge

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Tapez une URL&nbsp;:</label>
    <input type="url" id="url-input" />
  </div>

  <div class="field">
    <label for="email_input">Tapez une adresse électronique&nbsp;:</label>
    <input type="email" id="email-input" required />
  </div>
</form>
```

#### CSS

```css
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:required {
  border-color: maroon;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

#### Résultat

{{EmbedLiveSample("Le champ requis a une bordure rouge", "100%", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres pseudo-classes liées à la validation&nbsp;:
  - {{CSSxRef(":optional")}}
  - {{CSSxRef(":invalid")}}
  - {{CSSxRef(":valid")}}
- [La validation des données d'un formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
