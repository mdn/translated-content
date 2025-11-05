---
title: :autofill
slug: Web/CSS/Reference/Selectors/:autofill
original_slug: Web/CSS/:autofill
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:autofill`** correspond à un élément {{HTMLElement("input")}} lorsque sa valeur est remplie automatiquement par le navigateur. La classe cesse la correspondance si l'utilisateur·ice modifie le champ.

{{InteractiveExample("DémonstrationCSS&nbsp;: :autofill", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px solid darkorange;
}
```

```html interactive-example
<form>
  <p>
    Cliquez sur la zone de texte et choisissez l'une des options proposées par
    votre navigateur.
  </p>

  <label for="name">Nom</label>
  <input id="name" name="name" type="text" autocomplete="name" />

  <label for="email">Adresse e-mail</label>
  <input id="email" name="email" type="email" autocomplete="email" />

  <label for="country">Pays</label>
  <input id="country" name="country" type="text" autocomplete="country-name" />
</form>
```

> [!NOTE]
> Les feuilles de style des agents utilisateurs de nombreux navigateurs utilisent `!important` dans leurs déclarations de style `:-webkit-autofill`, ce qui les rend impossibles à remplacer par des pages web sans recourir à des hacks JavaScript. Par exemple, Chrome a ce qui suit dans sa feuille de style interne&nbsp;:
>
> ```css
> background-color: rgb(232 240 254) !important;
> background-image: none !important;
> color: -internal-light-dark(black, white) !important;
> ```
>
> Cela signifie que vous ne pouvez pas définir {{cssxref('background-color')}}, {{cssxref('background-image')}} ou {{cssxref('color')}} dans vos propres règles.

## Syntaxe

```css
:autofill {
  /* ... */
}
```

## Exemples

L'exemple suivant démontre l'utilisation de la pseudo-classe `:autofill` pour changer la bordure d'un champ de texte qui a été complété automatiquement par le navigateur.
Pour garantir que nous ne créons pas une [liste de sélecteurs invalide](/fr/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list), à la fois `:-webkit-autofill` et `:autofill` sont associés à l'aide d'une liste de sélecteurs tolérante avec {{cssxref(":is()")}}.

```css
input {
  border-radius: 3px;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px dotted orange;
}
```

```html
<form method="post" action="">
  <label for="email">E-mail</label>
  <input type="email" name="email" id="email" autocomplete="email" />
</form>
```

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Bug Chromium n°46543&nbsp;: Le fond jaune des champs texte saisis automatiquement ne peut pas être désactivé. <sup>(angl.)</sup>](https://code.google.com/p/chromium/issues/detail?id=46543)
- [Bug WebKit n°66032&nbsp;: Permettre aux auteur·ice·s de surcharger la couleur des champs remplis automatiquement. <sup>(angl.)</sup>](https://bugs.webkit.org/show_bug.cgi?id=66032)
- [Bug Mozilla n°740979&nbsp;: Implémentation de la pseudo-classe `:-moz-autofill` pour les éléments `input` avec une valeur saisie automatiquement. <sup>(angl.)</sup>](https://bugzilla.mozilla.org/show_bug.cgi?id=740979)
- [Module d'interface utilisateur Niveau 4&nbsp;: plus de sélecteurs <sup>(angl.)</sup>](https://wiki.csswg.org/spec/css4-ui#more-selectors)
