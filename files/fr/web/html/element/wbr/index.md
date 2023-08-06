---
title: <wbr>
slug: Web/HTML/Element/wbr
---

{{HTMLSidebar}}

L'élément HTML **`<wbr>`** permet de représenter un emplacement où casser la ligne si nécessaire. Le navigateur pourra alors utiliser cet emplacement pour effectuer un saut de ligne si le texte est trop long et qu'en temps normal, une règle empêche le saut de ligne.

{{EmbedInteractiveExample("pages/tabbed/wbr.html", "tabbed-shorter")}}

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes

- Sur les pages encodées en UTF-8, `<wbr>` se comporte comme le point de code `U+200B ZERO-WIDTH SPACE`, il se comporte notamment comme un point de code Unicode bidi BN, ce qui signifie qu'il n'a aucun effet sur l'ordre bidirectionnel (cf. {{Glossary("BiDi")}}. Autrement dit : `<div dir=rtl>123,<wbr>456</div>` sera affiché comme `123,456` et non comme `456,123` lorsqu'il n'y a pas de saut de ligne.
- Pour la même raison, l'élément `< wbr >` n'introduit pas de trait d'union à la fin de ligne. Pour avoir ce caractère, il faudra utiliser l'entité (`& shy;`) (_soft-hyphen_).
- Cet élément a été initialement implémenté par Internet Explorer 5.5 et est défini officiellement dans la spécification HTML5.

## Exemples

### HTML

```html
<p>
  http://voici<wbr />.une<wbr />.très<wbr />.très<wbr />.longue<wbr />.URL<wbr />.com/avec<wbr />/pleins<wbr />/de<wbr />/niveaux<wbr />/de<wbr />/pages
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","120")}}

> **Note :** _[Le guide stylistique de Yahoo](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/)_ recommande de [casser une URL avant la ponctuation](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses) afin d'éviter toute ambiguïté sur la fin de l'URL (l'utilisateur pourrait croire que l'URL se finit en fin de ligne alors qu'elle se poursuit plus loin).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, cet élément est un élément vide.</td>
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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("overflow-wrap")}}
- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
