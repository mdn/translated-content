---
title: <ruby>
slug: Web/HTML/Element/ruby
---

{{HTMLSidebar}}

L'élément HTML **`<ruby>`** représente une annotation ruby. Les annotations Ruby servent à afficher la prononciation des caractères d'Asie orientale.

{{EmbedInteractiveExample("pages/tabbed/ruby.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement les [attributs globaux](/fr/docs/Web/HTML/Global_attributes).

## Exemples

### Annoter un caractère

#### HTML

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Résultat

{{EmbedLiveSample("Annoter_un_caractère")}}

### Annoter un mot

#### HTML

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

#### Résultat

{{EmbedLiveSample("Annoter_un_mot")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu de phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu de phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu de phrasé</a
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

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{HTMLElement("rbc")}}
- {{CSSXRef("text-transform", "text-transform: full-size-kana")}}
