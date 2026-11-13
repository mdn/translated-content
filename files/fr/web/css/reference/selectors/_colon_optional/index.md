---
title: Pseudo-classe CSS `:optional`
short-title: :optional
slug: Web/CSS/Reference/Selectors/:optional
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:optional`** permet de cibler les éléments {{HTMLElement("input")}} ou {{HTMLElement("textarea")}} pour lesquels l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) n'est pas activé. Cela permet ainsi d'indiquer et de mettre en forme les champs facultatifs d'un formulaire.

{{InteractiveExample("Démonstration CSS&nbsp;: :optional", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 0.5em;
}

fieldset {
  margin-top: 0.5em;
}

*:optional {
  background-color: palegreen;
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

La pseudo-classe `:optional` est utile pour mettre en forme les champs qui ne sont pas obligatoires pour envoyer un formulaire.

> [!NOTE]
> La pseudo-classe {{CSSxRef(":required")}} sélectionne les champs de formulaire _obligatoires_.

## Syntaxe

```css
:optional {
  /* … */
}
```

## Accessibilité

Si un [formulaire](/fr/docs/Web/HTML/Reference/Elements/form) contient des champs {{HTMLElement("input")}} optionnels, les champs obligatoires doivent être indiqués avec l'attribut [`input`](/fr/docs/Web/HTML/Reference/Elements/input#required). Ainsi, les personnes utilisant des outils d'assistance (par exemple un lecteur d'écran) peuvent savoir que ces champs ont besoin d'un contenu valide afin de pouvoir envoyer le formulaire.

Les champs obligatoires doivent également être indiqués visuellement et cette indication ne doit pas uniquement être fournie avec une couleur. Généralement, un texte descriptif ou une icône est utilisé.

- [Explications des recommendation WCAG 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprendre le critère de succès 1.4.3 | Comprendre les WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Exemples

### L'élément optionnel a une bordure violette

#### HTML

```html
<form>
  <div class="champ">
    <label for="entree_url">Tapez une URL&nbsp;:</label>
    <input type="url" id="entree_url" />
  </div>

  <div class="champ">
    <label for="entree_courriel">Tapez une adresse électronique&nbsp;:</label>
    <input type="email" id="entree_courriel" required />
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

.champ {
  margin: 1px;
  padding: 1px;
}

input:optional {
  border-color: rebeccapurple;
  border-width: 3px;
}
```

#### Résultat

{{EmbedLiveSample("L'élément optionnel a une bordure violette", 600, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres pseudo-classes liées à la validation&nbsp;:
  - {{CSSxRef(":required")}}
  - {{CSSxRef(":invalid")}}
  - {{CSSxRef(":valid")}}
- [La validation des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
