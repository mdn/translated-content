---
title: "<rb> : l'élément de base ruby"
slug: Web/HTML/Reference/Elements/rb
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<rb>`** est utilisé pour délimiter le composant de texte de base d'une annotation {{HTMLElement("ruby")}}, c'est-à-dire le texte annoté. Un élément `<rb>` doit entourer chaque segment atomique distinct du texte de base.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

- Les annotations ruby sont utilisées afin d'afficher la prononciation pour les caractères d'Asie orientale, comme les furigana japonais ou les caractères bopomofo taïwanais. L'élément `<rb>` permet de séparer chaque segment du texte de base ruby.
- Bien que `<rb>` ne soit pas un {{Glossary("void element", "élément vide")}}, il est courant d'inclure uniquement la balise d'ouverture de chaque élément dans le code source, afin de simplifier le balisage ruby et de le rendre plus lisible. Le navigateur complète alors l'élément lors de l'affichage.
- Il faut inclure un élément {{HTMLElement("rt")}} pour chaque segment de base `<rb>` que l'on souhaite annoter.

## Exemples

### Utiliser `rb`

Dans cet exemple, on fournit une annotation pour le caractère original correspondant à «&nbsp;Kanji&nbsp;»&nbsp;:

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Remarquez que nous avons inclus deux éléments `<rb>` pour délimiter les deux parties distinctes du texte de base ruby. L'annotation, quant à elle, est délimitée par deux éléments {{HTMLElement("rt")}}.

### Résultat

{{EmbedLiveSample("Utiliser `rb`")}}

### Annotations séparées

Notez que l'on pourrait aussi écrire cet exemple avec les deux parties du texte de base annotées complètement séparément. Dans ce cas, il n'est pas nécessaire d'inclure les éléments `<rb>`&nbsp;:

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Résultat

{{EmbedLiveSample("Annotations séparées")}}

Voir l'article sur l'élément {{HTMLElement("ruby")}} pour de plus amples exemples.

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
        Cet élément peut être l'élément fils d'un élément
        {{HTMLElement("ruby")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        La balise de fin peut être omise si l'élément est immédiatement suivi
        d'un élément {{HTMLElement("rt")}}, {{HTMLElement("rtc")}}
        ou {{HTMLElement("rp")}} ou encore par un autre élément
        <code>&#x3C;rb></code> ou s'il n'y a plus de contenu dans l'élément
        parent.
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
- L'élément {{HTMLElement("rt")}}
- L'élément {{HTMLElement("rp")}}
- L'élément {{HTMLElement("rtc")}}
