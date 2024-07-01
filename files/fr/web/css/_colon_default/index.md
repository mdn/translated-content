---
title: ":default"
slug: Web/CSS/:default
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:default`** représente un élément de l'interface utilisateur qui est l'élément par défaut parmi d'autres éléments semblables (par exemple le bouton par défaut d'un groupe de boutons).

```css
/* Cible l'élément par défaut d'un groupe */
:default {
  background-color: lime;
}
```

Ainsi, le bouton actionné par défaut parmi plusieurs boutons pourra être mis en forme en le ciblant avec cette pseudo-classe.

Ce sélecteur peut être utilisé sur des éléments {{htmlelement("button")}}, [`<input type="checkbox">`](/fr/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/fr/docs/Web/HTML/Element/input/radio) et {{htmlelement("option")}} :

- Un élément `<option>` par défaut est le premier qui possède l'attribut `selected` ou le premier qui est activé selon l'ordre du DOM.
- Les éléments `<input type="checkbox">` et `<input type="radio">` seront ciblés s'ils possèdent l'attribut `checked`.
- L'élément `<button>` est ciblé si c'est le bouton d'envoi par défaut d'un formulaire, c'est-à-dire le premier bouton (selon l'ordre du DOM) appartenant au formulaire (cela vaut également pour les éléments {{htmlelement("input")}} dont le type permet d'envoyer des formulaires tels que `image` ou `submit`).

> **Note :** La spécification WHATWG HTML définit cela dans [le paragraphe 4.16.3](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default).

Les éléments de l'interface utilisateur qui permette une sélection multiple peuvent avoir plusieurs éléments par défaut. Dans ce cas, tous les éléments par défaut sont ciblés via la pseudo-classe `:default`.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

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

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
