---
title: "<rp> : l'élément de parenthèses alternatif aux annotations Ruby"
slug: Web/HTML/Element/rp
---

{{HTMLSidebar}}

L'élément HTML **`<rp>`** est utilisé pour fournir ce qui fera office de parenthèse aux navigateurs qui ne prennent pas en charge les annotations Ruby.

Les annotations Ruby permettent d'afficher la prononciation des caractères d'Asie orientale, notamment lors de l'usage de caractères furigana Japonais ou bopomofo Taïwanais.

Un élément `<rp>` devrait encadrer chaque parenthèse ouvrante et fermante englobant l'élément {{HTMLElement("rt")}} contenant les annotations.

{{EmbedInteractiveExample("pages/tabbed/rp.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### Avec prise en charge de ruby

#### HTML

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

{{EmbedLiveSample("Avec_prise_en_charge_de_ruby","300","150")}}

### Sans prise en charge de ruby

Avec un navigateur ne prenant pas en charge les annotations Ruby, on aurait :

```html hidden
漢 (Kan) 字 (ji)
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("Sans_prise_en_charge_de_ruby", 600, 60)}}

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
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
        >. Texte.
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

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
