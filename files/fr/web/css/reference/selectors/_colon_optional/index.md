---
title: :optional
slug: Web/CSS/Reference/Selectors/:optional
original_slug: Web/CSS/:optional
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:optional`** permet de cibler les éléments {{HTMLElement("input")}} ou {{HTMLElement("textarea")}} pour lesquels l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) n'est pas activé. Cela permet ainsi d'indiquer et de mettre en forme les champs facultatifs d'un formulaire.

{{InteractiveExample("Démonstration CSS&nbsp;: :optional", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

.req {
  color: red;
}

*:optional {
  background-color: palegreen;
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
  <p><span class="req">*</span> - Champ requis</p>
</form>
```

La pseudo-classe `:optional` est utile pour mettre en forme les champs qui ne sont pas obligatoires pour soumettre un formulaire.

> [!NOTE]
> La pseudo-classe {{cssxref(":required")}} sélectionne les champs de formulaire _obligatoires_.

## Syntaxe

```css
:optional {
  /* ... */
}
```

## Accessibilité

Si un [formulaire](/fr/docs/Web/HTML/Reference/Elements/form) contient des champs {{htmlelement("input")}} optionnels, les champs obligatoires doivent être indiqués avec l'attribut [`input`](/fr/docs/Web/HTML/Reference/Elements/input#required). Ainsi, les personnes utilisant des outils d'assistance (par exemple un lecteur d'écran) pourront savoir que ces champs ont besoin d'un contenu valide afin de pouvoir envoyer le formulaire.

Les champs obligatoires devraient également être indiqués visuellement et cette indication ne doit pas uniquement être fournie avec une couleur. Généralement, un texte descriptif ou une icône est utilisé.

- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprendre le critère de succès 1.4.3 | W3C Comprendre les WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Exemples

### L'élément optionnel a une bordure violette

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

input:optional {
  border-color: rebeccapurple;
  border-width: 3px;
}
```

#### Résultat

{{EmbedLiveSample('lélément_optionnel_a_une_bordure_violette', 600, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres pseudo-classes liées à la validation&nbsp;:
  - {{cssxref(":required")}}
  - {{cssxref(":invalid")}}
  - {{cssxref(":valid")}}
- [La validation des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
