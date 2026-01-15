---
title: "<rt> : l'élément de texte Ruby"
slug: Web/HTML/Reference/Elements/rt
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<rt>`** indique la composante texte d'une annotation Ruby, il est notamment utilisé pour la prononciation, la traduction ou la translitération des caractères d'Asie orientale. Cet élément est toujours contenu dans un élément {{HTMLElement("ruby")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;rt&gt;", "tabbed-shorter")}}

```html interactive-example
<ruby>
  漢 <rp>(</rp><rt>kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

Voir l'article sur l'élément {{HTMLElement("ruby")}} pour plus d'exemples.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

### Utiliser les annotations ruby

Cet exemple fournit la translitération en Romaji pour les caractères kanji à l'intérieur de l'élément {{HTMLElement("ruby")}}&nbsp;:

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser les annotations ruby", 600, 60)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a>
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        La balise de fin peut être omise si l'élément <code>&#x3C;rt></code> est
        immédiatement suivi d'un élément <code>&#x3C;rt></code> ou
        {{HTMLElement("rp")}}, ou s'il n'y a plus de contenu dans
        l'élément parent
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément {{HTMLElement("ruby")}}.</td>
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

- L'élément {{HTMLElement("ruby")}}
- L'élément {{HTMLElement("rp")}}
- L'élément {{HTMLElement("rb")}}
- L'élément {{HTMLElement("rtc")}}
- Les propriétés et valeurs CSS {{CSSxRef("text-transform", "text-transform: full-size-kana")}}
