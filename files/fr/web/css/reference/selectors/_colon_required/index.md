---
title: :required
slug: Web/CSS/Reference/Selectors/:required
original_slug: Web/CSS/:required
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:required`** permet de cibler un élément {{HTMLElement("input")}} pour lequel l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) est activé. Cela permet de mettre en forme les éléments obligatoires pour remplir correctement un formulaire.

{{InteractiveExample("Démonstration CSS&nbsp;: :required", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

.req {
  color: red;
}

*:required {
  background-color: gold;
}
```

```html interactive-example
<form>
  <label for="name">Nom&nbsp;: <span class="req">*</span></label>
  <input id="name" name="name" type="text" required />

  <label for="birth">Date de naissance&nbsp;:</label>
  <input id="birth" name="birth" type="date" />

  <label for="origin"
    >Comment avez-vous entendu parler de nous&nbsp;?
    <span class="req">*</span></label
  >
  <select id="origin" name="origin" required>
    <option>Google</option>
    <option>Facebook</option>
    <option>Publicité</option>
  </select>
  <p><span class="req">*</span> - Champ obligatoire</p>
</form>
```

La pseudo-classe est utile pour mettre en évidence les champs qui doivent contenir des données valides avant qu'un formulaire puisse être soumis.

> [!NOTE]
> La pseudo-classe {{cssxref(":optional")}} pourra être utilisée pour mettre en forme les champs facultatifs.

## Syntaxe

```css
:required {
  /* ... */
}
```

## Accessibilité

Si un formulaire ({{HTMLElement("form")}}) contient des champs ({{htmlelement("input")}}) optionnels, les champs obligatoires doivent être indiqués avec l'attribut [`input`](/fr/docs/Web/HTML/Element/required#input). Ainsi, les personnes utilisant des outils d'assistance (par exemple un lecteur d'écran) pourront savoir que ces champs ont besoin d'un contenu valide afin de pouvoir envoyer le formulaire.

Les champs obligatoires devraient également être indiqués visuellement et cette indication ne doit pas uniquement être fournie avec une couleur. Généralement, un texte descriptif ou une icône est utilisé.

- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprendre le critère de succès 1.4.3 | W3C Comprendre les WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

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

{{EmbedLiveSample('le_champ_requis_a_une_bordure_rouge', '100%', 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres pseudo-classes liées à la validation&nbsp;:
  - {{cssxref(":optional")}}
  - {{cssxref(":invalid")}}
  - {{cssxref(":valid")}}
- [La validation des données d'un formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
