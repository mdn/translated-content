---
title: :autofill
slug: Web/CSS/Reference/Selectors/:autofill
l10n:
  sourceCommit: 1c68ccea9621d3b67d9e3bff8f9f2e948e4e7e54
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:autofill`** correspond à un élément {{HTMLElement("input")}} lorsque sa valeur est remplie automatiquement par le navigateur. La classe cesse la correspondance si l'utilisateur·ice modifie le champ.

{{InteractiveExample("DémonstrationCSS&nbsp;: :autofill", "tabbed-shorter")}}

```css interactive-example
input {
  border: 3px solid black;
}

input:autofill {
  outline: 5px solid magenta;
  border: 3px dashed yellow;
}
```

```html interactive-example
<form>
  <p>
    Cliquez sur la zone de texte et choisissez l'une des options proposées par
    votre navigateur.
  </p>
  <p>
    <label for="name">Nom</label>
    <input id="name" name="name" type="text" autocomplete="given-name" />
  </p>
  <p>
    <label for="email">Courriel électronique</label>
    <input id="email" name="email" type="email" autocomplete="email" />
  </p>
  <p>
    <label for="country">Pays</label>
    <input
      id="country"
      name="country"
      type="text"
      autocomplete="country-name" />
  </p>
</form>
```

## Syntaxe

```css
:autofill {
  /* ... */
}
```

## Description

La pseudo-classe `:autofill` sélectionne les éléments HTML {{HTMLElement("input")}} contenant un contenu non modifié qui a été complété automatiquement par l'agent utilisateur. L'autocomplétion peut se produire lorsque les paramètres du navigateur permettent l'autocomplétion ou que l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete) est défini sur l'élément lui-même.

Lorsque l'utilisateur·ice utilise la fonction d'autocomplétion du navigateur pour remplir automatiquement un contrôle de formulaire, tous les contrôles de formulaire pouvant être complétés en fonction de la sélection sont remplis. Ceux-ci correspondent tous à l'état d'interface utilisateur `:autofill`. Si l'utilisateur·ice modifie un contrôle, ce contrôle ne correspond plus à `:autofill`, même si la valeur est identique à la valeur complétée automatiquement.

La spécification inclut la pseudo-classe avec préfixe fournisseur `:-webkit-autofill` comme alias. Celle-ci correspond également aux éléments d'entrée complétés automatiquement par l'agent utilisateur, et ne correspond plus si l'utilisateur·ice modifie le champ complété automatiquement.

Notez que les feuilles de style de l'agent utilisateur de nombreux navigateurs utilisent `!important` dans leurs déclarations de style, rendant certains styles non surchargables. Par exemple, Chrome a le code suivant dans sa feuille de style interne&nbsp;:

```css-nolint
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color:
    light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
  color: fieldtext !important;
}
```

Cela signifie que vous ne pouvez pas surcharger les valeurs par défaut de {{CSSxRef('background-color')}}, {{CSSxRef('background-image')}} ou {{CSSxRef('color')}} sur les éléments d'entrée complétés automatiquement sélectionnés dans vos propres règles, mais vous pouvez surcharger {{CSSxRef('appearance')}} et vous pouvez surcharger ces propriétés pour les éléments complétés automatiquement qui ne sont pas actuellement sélectionnés.

## Exemples

The following example demonstrates the use of the `:autofill` pseudo-class to change the border of a text field that has been autocompleted by the browser.

### HTML

Nous incluons trois éléments HTML `<input>`, chacun avec un {{HTMLElement("label")}} associé. Les valeurs `name` et `email` seront probablement complétées automatiquement et correspondront à `:autofill`, tandis que la valeur `pet` est peu susceptible de l'être.

```html
<form method="post" action="">
  <p>
    <label for="name">Nom&nbsp;: </label>
    <input name="n" id="name" autocomplete="given-name" />
  </p>
  <p>
    <label for="email">Courriel électronique&nbsp;: </label>
    <input type="email" name="email" id="email" autocomplete="email" />
  </p>
  <p>
    <label for="pet">Nom de votre animal&nbsp;: </label>
    <input name="pet" id="pet" />
  </p>
</form>
```

### CSS

Nous appliquons un arrondi ({{CSSxRef("border-radius")}}), un contour ({{CSSxRef("outline")}}), et une couleur de bordure ({{CSSxRef("border-color")}}) aux éléments `<input>` lorsqu'ils correspondent à l'état `:autofill`.

```css
input {
  border-radius: 0px;
}

input:autofill {
  border-radius: 0.5lh;
  outline: 5px dashed magenta;
  border-color: yellow;
}
```

```css hidden
@supports not selector(:autofill) {
  body::before {
    content: "Votre navigateur ne prend pas en charge le sélecteur :autofill.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
    padding: 5px;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les pseudo-classes de `<input>`](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes#pseudo-classes_dentrée_de_formulaire)
- Le module [de sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
