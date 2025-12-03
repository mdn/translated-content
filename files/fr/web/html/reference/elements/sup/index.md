---
title: "<sup> : l'élément de mise en exposant"
slug: Web/HTML/Reference/Elements/sup
original_slug: Web/HTML/Element/sup
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément HTML **`<sup>`** permet d'afficher du texte en exposant, uniquement pour des raisons typographiques. Le texte est alors positionné plus haut que la ligne de base et généralement en plus petit.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;sup&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Le <em>théorème de Pythagore</em> est souvent exprimé sous la forme d'équation
  suivante&nbsp;:
</p>

<p>
  <var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var>
</p>
```

```css interactive-example
p {
  font:
    1rem "Fira Sans",
    sans-serif;
}
```

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

L'élément `<sup>` doit être utilisé uniquement pour des raisons typographiques&nbsp;: il sert à modifier la position du texte afin de respecter les conventions ou normes typographiques, et non simplement pour des raisons de présentation ou d'apparence.

Par exemple, la mise en forme d'une [marque verbale <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Wordmark) d'entreprise ou de produit qui utilise une ligne de base surélevée doit être réalisée avec du CSS (généralement {{cssxref("vertical-align")}}) plutôt qu'avec `<sup>`. On utilisera par exemple `vertical-align: super` ou, pour décaler la ligne de base de 50&nbsp;%, `vertical-align: 50%`.

Les cas d'utilisation appropriés de `<sup>` incluent (sans s'y limiter)&nbsp;:

- Affichage d'exposants, comme «&nbsp;x<sup>3</sup>&nbsp;». Il peut être pertinent d'utiliser [MathML](/fr/docs/Web/MathML) pour ces cas, surtout s'ils sont complexes. Voir [Exposants](#exposants) dans la section [Exemples](#exemples) ci-dessous.
- Affichage de [lettres supérieures <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Superior_letter), utilisées dans certaines langues pour certaines abréviations. Par exemple, en français, «&nbsp;mademoiselle&nbsp;» peut s'abréger en «&nbsp;M<sup>lle</sup>&nbsp;»&nbsp;: c'est un usage approprié. Voir [Lettres supérieures](#lettres_supérieures) pour des exemples.
- Représentation de nombres ordinaux, comme «&nbsp;4<sup>e</sup>&nbsp;» au lieu de «&nbsp;quatrième&nbsp;». Voir [Nombres ordinaux](#nombres_ordinaux) pour des exemples.

## Exemples

### Exposants

Les exposants, ou puissances d'un nombre, sont parmi les utilisations les plus courantes du texte en exposant. Par exemple&nbsp;:

#### HTML

```html
<p>
  Une des équations les plus courantes en physique est <var>E</var>=<var>m</var
  ><var>c</var><sup>2</sup>.
</p>
```

#### Résultat

{{EmbedLiveSample("exposants", 650, 80)}}

### Lettres supérieures

Bien que, techniquement, le lettrage supérieur ne corresponde pas à la mise en exposant, on voit souvent `<sup>` utilisé pour certaines abréviations.

#### HTML

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Résultat

{{EmbedLiveSample("lettres_supérieures","650","80")}}

### Nombres ordinaux

Les nombres ordinaux, comme «&nbsp;quatrième&nbsp;» en français, «&nbsp;<i lang="en">fourth</i>&nbsp;» en anglais ou «&nbsp;<i lang="es">quinto</i>&nbsp;» en espagnol, peuvent être abrégés à l'aide de chiffres et de texte spécifique à la langue affiché en exposant&nbsp;:

#### HTML

```html
<p>
  Voici comment le nombre ordinal cinquième est écrit dans différentes langues
</p>
<ul>
  <li>en français : 5<sup>e</sup></li>
  <li>en anglais : 5<sup>th</sup></li>
</ul>
```

#### Résultat

{{EmbedLiveSample("nombres_ordinaux", 650, 160)}}

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_phrasé"
          >Contenu phrasé</a
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
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html">superscript</a
          ></code
        >
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

- L'élément HTML {{HTMLElement("sub")}} permet un effet de mise en indice. Il est à noter que l'élément `<sub>` et l'élément `<sup>` ne peuvent pas être utilisés simultanément. Pour afficher le symbole chimique d'un élément, il faudra utiliser [MathML](/fr/docs/Web/MathML) pour représenter à la fois le numéro atomique et le nombre de masse.
- Les éléments MathML {{MathMLElement("msub")}}, {{MathMLElement("msup")}} et {{MathMLElement("msubsup")}}.
- La propriété CSS {{cssxref("vertical-align")}}.
