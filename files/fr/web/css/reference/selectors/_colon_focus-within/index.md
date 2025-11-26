---
title: :focus-within
slug: Web/CSS/Reference/Selectors/:focus-within
original_slug: Web/CSS/:focus-within
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:focus-within`** correspond à un élément si celui-ci ou l'un de ses descendants est sélectionné. En d'autres termes, elle représente un élément qui est lui-même correspondant à la pseudo-classe {{cssxref(":focus")}} ou qui a un descendant correspondant à `:focus`. (Cela inclut les descendants dans le [DOM sombre (<i lang="en">shadow DOM</i>)](/fr/docs/Web/API/Web_components/Using_shadow_DOM)).

{{InteractiveExample("Démonstration CSS&nbsp;: :focus-within", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

label:focus-within {
  font-weight: bold;
}
```

```html interactive-example
<form>
  <p>Quelle saveur souhaitez-vous commander ?</p>
  <label>Nom complet : <input name="firstName" type="text" /></label>
  <label
    >Saveur :
    <select name="flavor">
      <option>Cerise</option>
      <option>Thé vert</option>
      <option>Vanille et beurre salé</option>
      <option>Pépites de menthe</option>
    </select>
  </label>
</form>
```

Ce sélecteur est notamment utile lorsqu'on veut, par exemple, mettre en avant l'ensemble d'un formulaire {{HTMLElement("form")}} lorsque l'utilisateur·ice passe le focus sur l'un de ses éléments {{HTMLElement("input")}}.

## Syntaxe

```css
:focus-within {
  /* ... */
}
```

## Exemples

Dans cet exemple, le formulaire recevra des styles de coloration spéciaux lorsque l'un des champs de saisie de texte sera sélectionné.

### HTML

```html
<p>
  L'élément div ci-après aura un fond jaune si l'un des deux champs de saisie a
  le focus.
</p>
<form>
  <label for="prenom">Prénom :</label>
  <input id="prenom" type="text" />
  <br />
  <label for="nom">Nom :</label>
  <input id="nom" type="text" />
</form>
```

### CSS

```css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ffff88;
  color: black;
}

input {
  margin: 4px;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 500, 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":focus")}}
- {{CSSxRef(":focus-visible")}}
- [Captez l'attention de vos utilisateur·ice·s grâce au sélecteur focus-within <sup>(angl.)</sup>](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
