---
title: :default
slug: Web/CSS/Reference/Selectors/:default
original_slug: Web/CSS/:default
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:default`** représente un élément de l'interface utilisateur qui est l'élément par défaut parmi d'autres éléments semblables (par exemple le bouton par défaut d'un groupe de boutons).

{{InteractiveExample("Démonstration CSS&nbsp;: :default", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

input:default {
  border: none;
  outline: 2px solid deeppink;
}
```

```html interactive-example
<form>
  <p>Comment avez-vous entendu parler de nous ?</p>
  <label
    ><input name="origin" type="radio" value="google" checked /> Google</label
  >
  <label><input name="origin" type="radio" value="facebook" /> Facebook</label>
  <p>Veuillez accepter nos conditions :</p>

  <label
    ><input name="newsletter" type="checkbox" checked /> Je souhaite m'abonner à
    une newsletter personnalisée.</label
  >

  <label
    ><input name="privacy" type="checkbox" /> J'ai lu et j'accepte la Politique
    de confidentialité.</label
  >

  <input type="submit" value="Soumettre le formulaire" />
</form>
```

Ce sélecteur est spécifié par WHATWG HTML dans [le paragraphe 4.16.3](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default) et peut être utilisé par les éléments {{htmlelement("button")}}, [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio) et {{htmlelement("option")}}&nbsp;:

- Un élément `<option>` par défaut est le premier qui possède l'attribut `selected` ou le premier qui est activé selon l'ordre du DOM.
- Les éléments `<input type="checkbox">` et `<input type="radio">` seront ciblés s'ils possèdent l'attribut `checked`.
- L'élément `<button>` est ciblé si c'est le bouton d'envoi par défaut d'un formulaire, c'est-à-dire le premier bouton (selon l'ordre du DOM) appartenant au formulaire (cela vaut également pour les éléments {{htmlelement("input")}} dont le type permet d'envoyer des formulaires tels que `image` ou `submit`).

## Syntaxe

```css
:default {
  /* ... */
}
```

## Exemples

### HTML

```html
<fieldset>
  <legend>Saison préférée</legend>

  <input type="radio" name="season" id="spring" />
  <label for="spring">Printemps</label>

  <input type="radio" name="season" id="summer" checked />
  <label for="summer">Eté</label>

  <input type="radio" name="season" id="fall" />
  <label for="fall">Automne</label>

  <input type="radio" name="season" id="winter" />
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

- [Table de compatibilité des propriétés pour les widgets de formulaire](/fr/docs/Learn_web_development/Extensions/Forms)
- [Mise en forme des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- Éléments HTML associés&nbsp;: {{htmlelement("button")}}, [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio) et {{htmlelement("option")}}
