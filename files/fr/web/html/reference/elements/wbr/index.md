---
title: "<wbr> : l'élément d'opportunité de saut de ligne"
slug: Web/HTML/Reference/Elements/wbr
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

L'élément [HTML](/fr/docs/Web/HTML) **`<wbr>`** permet de représenter un emplacement où casser la ligne si nécessaire. Le navigateur pourra alors utiliser cet emplacement pour effectuer un saut de ligne si le texte est trop long et qu'en temps normal, une règle empêche le saut de ligne.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;wbr&gt;", "tabbed-shorter")}}

```html interactive-example
<div id="example-paragraphs">
  <p>Fernstraßenbauprivatfinanzierungsgesetz</p>
  <p>Fernstraßen<wbr />bau<wbr />privat<wbr />finanzierungs<wbr />gesetz</p>
  <p>Fernstraßen&shy;bau&shy;privat&shy;finanzierungs&shy;gesetz</p>
</div>
```

```css interactive-example
#example-paragraphs {
  background-color: white;
  overflow: hidden;
  resize: horizontal;
  width: 9rem;
  border: 2px dashed #999999;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes

Sur les pages encodées en UTF-8, `<wbr>` se comporte comme le point de code `U+200B ZERO-WIDTH SPACE`. En particulier, il agit comme un point de code Unicode bidi BN, ce qui signifie qu'il n'a aucun effet sur l'ordre {{Glossary("bidi")}}&nbsp;: `<div dir=rtl>123,<wbr>456</div>` affiche, si la ligne n'est pas coupée, `123,456` et non `456,123`.

Pour la même raison, l'élément `<wbr>` n'introduit pas de trait d'union au point de coupure de ligne. Pour faire apparaître un trait d'union uniquement en fin de ligne, utilisez plutôt l'entité de caractère tiret conditionnel (`&shy;`).

## Exemples

### HTML

```html
<p>
  http://voici<wbr />.une<wbr />.très<wbr />.très<wbr />.longue<wbr />.URL<wbr />.com/avec<wbr />/pleins<wbr />/de<wbr />/niveaux<wbr />/de<wbr />/pages
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Vide</td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        Cet élément est un élément vide, il doit avoir une balise de début et ne
        doit pas avoir de balise de fin.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("overflow-wrap")}}
- La propriété CSS {{CSSxRef("word-break")}}
- La propriété CSS {{CSSxRef("hyphens")}}
- L'élément {{HTMLElement("br")}}
