---
title: Pseudo-classe CSS `:default`
short-title: :default
slug: Web/CSS/Reference/Selectors/:default
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:default`** représente un élément de l'interface utilisateur qui est l'élément par défaut parmi d'autres éléments semblables (par exemple le bouton par défaut d'un groupe de boutons).

{{InteractiveExample("Démonstration CSS&nbsp;: :default", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 0.5em;
}

fieldset {
  margin-top: 0.5em;
}

input:default {
  border: none;
  outline: 2px solid deeppink;
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

Ce sélecteur est définit par WHATWG HTML dans [le paragraphe 4.16.3 <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default) et peut être utilisé par les éléments {{HTMLElement("button")}}, [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio) et {{HTMLElement("option")}}&nbsp;:

- Un élément `<option>` par défaut est le premier qui possède l'attribut `selected` ou le premier qui est activé selon l'ordre du DOM.
- Les éléments `<input type="checkbox">` et `<input type="radio">` sont ciblés s'ils possèdent l'attribut `checked`.
- L'élément `<button>` est ciblé si c'est le bouton d'envoi par défaut d'un formulaire, c'est-à-dire le premier bouton (selon l'ordre du DOM) appartenant au formulaire (cela vaut également pour les éléments {{HTMLElement("input")}} dont le type permet d'envoyer des formulaires tels que `image` ou `submit`).

## Syntaxe

```css
:default {
  /* … */
}
```

## Exemples

### HTML

```html
<fieldset>
  <legend>Saison préférée</legend>

  <input type="radio" name="saison" id="spring" />
  <label for="spring">Printemps</label>

  <input type="radio" name="saison" id="summer" checked />
  <label for="summer">Eté</label>

  <input type="radio" name="saison" id="fall" />
  <label for="fall">Automne</label>

  <input type="radio" name="saison" id="winter" />
  <label for="winter">Hiver</label>
</fieldset>
```

### CSS

```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Table de compatibilité des propriétés pour les composants de formulaire](/fr/docs/Learn_web_development/Extensions/Forms)
- [Mise en forme des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- Éléments HTML associés&nbsp;: {{HTMLElement("button")}}, [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio) et {{HTMLElement("option")}}
