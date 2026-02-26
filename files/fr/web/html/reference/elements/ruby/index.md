---
title: "<ruby> : l'élément d'annotation de Ruby"
slug: Web/HTML/Reference/Elements/ruby
l10n:
  sourceCommit: e66301dff87e1ac68bd5e6e9dace12ead3eded6f
---

L'élément [HTML](/fr/docs/Web/HTML) **`<ruby>`** représente de petites annotations affichées au-dessus, en dessous ou à côté du texte de base, généralement utilisées pour indiquer la prononciation des caractères d'Asie orientale. Il peut aussi servir à annoter d'autres types de texte, mais cet usage est moins courant.

Le terme _ruby_ vient d'[une unité de mesure utilisée par les typographes <sup>(angl.)</sup>](<https://en.wikipedia.org/wiki/Agate_(typography)>), représentant la plus petite taille à laquelle un texte peut être imprimé sur du papier journal tout en restant lisible.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;ruby&gt;", "tabbed-shorter")}}

```html interactive-example
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

### Exemple 1 : Caractère

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Résultat

{{EmbedLiveSample("Exemple 1 : Caractère")}}

### Exemple 2 : Mot

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

#### Résultat

{{EmbedLiveSample("Exemple 2 : Mot")}}

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
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu de phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu de phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu de phrasé</a
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

- L'élément {{HTMLElement("rt")}}
- L'élément {{HTMLElement("rp")}}
- La propriété CSS {{CSSxRef("ruby-overhang")}}
- Les propriétés et valeurs CSS {{CSSxRef("text-transform", "text-transform: full-size-kana")}}
