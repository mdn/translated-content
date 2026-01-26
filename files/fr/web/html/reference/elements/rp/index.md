---
title: "<rp> : l'élément de parenthèses alternatif aux annotations Ruby"
slug: Web/HTML/Reference/Elements/rp
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<rp>`** est utilisé pour fournir des parenthèses de repli pour les navigateurs qui ne prennent pas en charge l'affichage des annotations ruby avec l'élément {{HTMLElement("ruby")}}. Un élément `<rp>` doit entourer chacune des parenthèses ouvrantes et fermantes qui encadrent l'élément {{HTMLElement("rt")}} contenant le texte de l'annotation.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;rp&gt;", "tabbed-shorter")}}

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

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

- Les annotations ruby servent à afficher la prononciation des caractères d'Asie orientale, comme les furigana japonais ou les caractères bopomofo taïwanais. L'élément `<rp>` est utilisé lorsque l'élément {{HTMLElement("ruby")}} n'est pas pris en charge&nbsp;; le contenu de `<rp>` indique ce qui doit être affiché pour signaler la présence d'une annotation ruby, généralement des parenthèses.

## Exemples

### Utiliser les annotations ruby

Cet exemple utilise les annotations ruby pour afficher les équivalents [Romaji](https://fr.wikipedia.org/wiki/R%C5%8Dmaji) pour chaque caractère.

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

Voir l'article sur l'élément {{HTMLElement("ruby")}} pour de plus amples exemples.

### Sans prise en charge de ruby

Avec un navigateur ne prenant pas en charge les annotations Ruby, on aurait&nbsp;:

```html hidden
漢 (Kan) 字 (ji)
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("Sans prise en charge de ruby", 600, 60)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Texte.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de fin peut être absente si l'élément est immédiatement suivi
        d'un élément {{HTMLElement("rt")}} ou d'un autre élément
        <code>&#x3C;rp></code> ou s'il n'y a plus de contenu dans l'élément
        parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("ruby")}}. <code>&#x3C;rp></code> doit
        être positionné immédiatement avant ou après un élément
        {{HTMLElement("rt")}}.
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

- L'élément {{HTMLElement("ruby")}}
- L'élément {{HTMLElement("rt")}}
- L'élément {{HTMLElement("rb")}}
- L'élément {{HTMLElement("rtc")}}
