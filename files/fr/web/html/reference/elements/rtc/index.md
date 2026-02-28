---
title: "<rtc> : l'élément de conteneur de texte Ruby"
slug: Web/HTML/Reference/Elements/rtc
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<rtc>`** sert à regrouper les annotations sémantiques des caractères présentés dans un ruby d'éléments {{HTMLElement("rb")}} utilisés à l'intérieur d'un élément {{HTMLElement("ruby")}}. Les éléments {{HTMLElement("rb")}} peuvent avoir à la fois des annotations de prononciation ({{HTMLElement("rt")}}) et des annotations sémantiques (`<rtc>`).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;rtc&gt;", "tabbed-standard")}}

```html interactive-example
<ruby lang="zh-Hant">
  <rbc>
    <rb>馬</rb><rp>(</rp><rt>mǎ</rt><rp>)</rp>
    <rb>來</rb><rp>(</rp><rt>lái</rt><rp>)</rp>
    <rb>西</rb><rp>(</rp><rt>xī</rt><rp>)</rp>
    <rb>亞</rb><rp>(</rp><rt>yà</rt><rp>)</rp>
  </rbc>
  <rtc lang="fr">
    <rp>(</rp><rt>Malaisie</rt><rp>)</rp>
  </rtc>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
  ruby-position: under;
}

rtc {
  ruby-position: over;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

```html
<div class="info">
  <ruby>
    <rbc>
      <rb>旧</rb><rt>jiù</rt> <rb>金</rb><rt>jīn</rt> <rb>山</rb><rt>shān</rt>
    </rbc>
    <rtc>San Francisco</rtc>
  </ruby>
</div>
```

```css hidden
.info {
  padding-top: 10px;
  font-size: 36px;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 600, 120)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Guides/Content_categories"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >
        ou des éléments {{HTMLElement("rt")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de fin peut être omise si l'élément est immédiatement suivi
        par un élément {{HTMLElement("rb")}},
        {{HTMLElement("rtc")}} ou {{HTMLElement("rt")}} ou s'il est
        immédiatement suivi par la balise de fermeture de l'élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Un élément {{HTMLElement("ruby")}}.</td>
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
- L'élément {{HTMLElement("rt")}}
