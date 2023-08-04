---
title: "<rb> : l'élément de base ruby"
slug: Web/HTML/Element/rb
---

{{HTMLSidebar}}

L'élément de **base ruby (`<rb>`)** est utilisé afin de délimiter le composant texte de base d'une annotation {{HTMLElement("ruby")}}. Autrement dit, le texte qui est annoté. Un élément `<rb>` devrait encadrer chaque segment atomique du texte de base.

## Attributs

Seuls les [attributs universels](/fr/docs/Web/HTML/Attributs_universels) peuvent être utilisés sur cet élément.

## Notes d'utilisation

- Les annotations ruby sont utilisées afin d'afficher la prononciation pour les caractères d'Asie orientale tels que les caractères japonais furigana ou les caractères taïwanais bopomofo. L'élément `<rb>` permet de séparer chaque segment du texte de base ruby.
- Bien que `<rb>` ne soit pas un élément vide, il est courant de n'inclure que la balise d'ouverture de chaque élément afin de simplifier le balisage dédié aux annotations ruby.
- Il faut inclure un élément {{htmlelement("rt")}} pour chaque segment de base `<rb>` qu'on souhaite annoter.

## Exemples

Dans cet exemple, on fournit une annotation pour le caractère original correspondant à "Kanji" :

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

### Résultat

{{EmbedLiveSample('')}}

On voit ici que deux éléments `<rb>` sont inclus et permettent de délimiter les deux segments du texte de base. Pour l'annotation, chaque partie correspondante est délimitée par un élément {{htmlelement("rt")}}.

On aurait également pu écrire cet exemple avec les deux parties du texte de base complètement séparées. Dans ce cas, il n'aurait pas été nécessaire d'inclure les éléments `<rb>` :

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Résultat

{{EmbedLiveSample('')}}

### Avec prise en charge de ruby

```html hidden
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### Résultat

{{EmbedLiveSample("", "100%", 60)}}

Pour un navigateur qui ne prend pas en charge les annotations ruby, voici à quoi aurait ressemblé le résultat :

### Sans prise en charge de ruby

```html hidden
漢字 (kan ji)
```

```css hidden
body {
  font-size: 22px;
}
```

#### Résultat

{{EmbedLiveSample("", "100%", 60)}}

> **Note :** Voir l'article sur l'élément {{HTMLElement("ruby")}} pour de plus amples exemples.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Catégories_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Cet élément peut être l'élément fils d'un élément
        {{htmlelement("ruby")}}.
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
      <th scope="row">Éléments parents autorisés</th>
      <td>Un élément {{HTMLElement("ruby")}}.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>N'importe quel rôle</td>
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

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rtc")}}
