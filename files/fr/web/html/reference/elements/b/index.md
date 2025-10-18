---
title: "<b> : l'élément portant à l'attention"
slug: Web/HTML/Reference/Elements/b
original_slug: Web/HTML/Element/b
---

{{HTMLSidebar}}

L'élément HTML **`<b>`** permet d'attirer l'attention du lecteur sur un contenu qui n'a pas, pour autant, d'importance significative. Anciennement utilisé pour mettre le texte en gras. Cet élément ne doit pas être utilisé pour mettre en forme des éléments, c'est la propriété CSS [`font-weight`](/fr/docs/Web/CSS/font-weight) qu'il faut utiliser. Si l'élément est d'une importance particulière, on utilisera l'élément HTML [`<strong>`](/fr/docs/Web/HTML/Reference/Elements/strong).

{{InteractiveExample("HTML Demo: &lt;b&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The two most popular science courses offered by the school are
  <b class="term">chemistry</b> (the study of chemicals and the composition of
  substances) and <b class="term">physics</b> (the study of the nature and
  properties of matter and energy).
</p>
```

```css interactive-example
/* stylelint-disable-next-line block-no-empty */
b {
}
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Seuls [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) peuvent être utilisés pour cet élément.

## Notes d'utilisation

- `<b>` est habituellement utilisé pour les mots-clés dans les résumés, les noms de produits dans des tests (sans que ceux-ci aient une importance particulière). Il peut également être utilisé afin d'indiquer la première phrase de chaque paragraphe d'un article.
- Il ne faut pas confondre l'élément `<b>` avec les éléments [`<strong>`](/fr/docs/Web/HTML/Reference/Elements/strong), [`<em>`](/fr/docs/Web/HTML/Reference/Elements/em), ou [`<mark>`](/fr/docs/Web/HTML/Reference/Elements/mark). L'élément [`<strong>`](/fr/docs/Web/HTML/Reference/Elements/strong) représente un texte d'une certaine _importance_, [`<em>`](/fr/docs/Web/HTML/Reference/Elements/em) met une emphase sur le texte et [`<mark>`](/fr/docs/Web/HTML/Reference/Elements/mark) représente un texte avec une certaine _pertinence_. L'élément `<b>` ne porte aucune information sémantique particulière ; utilisez-le lorsque qu'aucun autre ne convient.
- De la même façon, ne balisez pas les titres en utilisant l'élément `<b>`. Pour cet usage, utilisez les balises [`<h1>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) à [`<h6>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements). De plus, les feuilles de style peuvent changer le style par défaut de ces éléments. Ils ne seront pas _forcément_ affichés en gras.
- C'est généralement une bonne pratique d'utiliser l'attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes#attr-class) sur l'élément `<b>` lorsqu'on souhaite transporter des informations sémantiques supplémentaires. Cela facilitera le développement des styles à appliquer sur le document, sans avoir à modifier le code HTML.
- Historiquement, l'élément `<b>` a été pensé pour rendre du texte avec une police grasse. Les éléments à seul but stylistique ont été dépréciés avec HTML 4. Ainsi, le sens de l'élément `<b>` a évolué.
- S'il n'y a aucune raison particulière d'utiliser l'élément `<b>`, en dehors de son apparence en gras, l'utilisation de la propriété [CSS](/fr/docs/Web/CSS) [`font-weight`](/fr/docs/Web/CSS/font-weight) avec une valeur `bold` est à privilégier.

## Exemples

```html
<p>
  Cet article décrit plusieurs éléments <b class="keyword">texte</b>. Il
  explique leur usage dans un document <b class="keyword">HTML</b>.
</p>
Les mots-clés sont affichés avec le style par défaut de l'élément &lt;b&gt;,
sûrement en gras.
```

### Résultat

{{EmbedLiveSample("Exemple")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments portants une sémantique textuelle : [`<a>`](/fr/docs/Web/HTML/Reference/Elements/a), [`<em>`](/fr/docs/Web/HTML/Reference/Elements/em), [`<strong>`](/fr/docs/Web/HTML/Reference/Elements/strong), [`<small>`](/fr/docs/Web/HTML/Reference/Elements/small), [`<cite>`](/fr/docs/Web/HTML/Reference/Elements/cite), [`<q>`](/fr/docs/Web/HTML/Reference/Elements/q), [`<dfn>`](/fr/docs/Web/HTML/Reference/Elements/dfn), [`<abbr>`](/fr/docs/Web/HTML/Reference/Elements/abbr), [`<time>`](/fr/docs/Web/HTML/Reference/Elements/time), [`<code>`](/fr/docs/Web/HTML/Reference/Elements/code), [`<var>`](/fr/docs/Web/HTML/Reference/Elements/var), [`<samp>`](/fr/docs/Web/HTML/Reference/Elements/samp), [`<kbd>`](/fr/docs/Web/HTML/Reference/Elements/kbd), [`<sub>`](/fr/docs/Web/HTML/Reference/Elements/sub), [`<sup>`](/fr/docs/Web/HTML/Reference/Elements/sup), [`<i>`](/fr/docs/Web/HTML/Reference/Elements/i), [`<mark>`](/fr/docs/Web/HTML/Reference/Elements/mark), [`<ruby>`](/fr/docs/Web/HTML/Reference/Elements/ruby), [`<rp>`](/fr/docs/Web/HTML/Reference/Elements/rp), [`<rt>`](/fr/docs/Web/HTML/Reference/Elements/rt), [`<bdo>`](/fr/docs/Web/HTML/Reference/Elements/bdo), [`<span>`](/fr/docs/Web/HTML/Reference/Elements/span), [`<br>`](/fr/docs/Web/HTML/Reference/Elements/br), [`<wbr>`](/fr/docs/Web/HTML/Reference/Elements/wbr).
- [Utiliser les éléments `<b>` et `<i>` (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
