---
title: "<sub> : l'élément de mise en indice"
slug: Web/HTML/Reference/Elements/sub
l10n:
  sourceCommit: b9acb5397cf8e07966b1757a857e5000a009b04e
---

L'élément [HTML](/fr/docs/Web/HTML) **`<sub>`** définit du texte en ligne qui doit être affiché en indice pour des raisons strictement typographiques. Les indices sont généralement rendus avec une ligne de base abaissée et un texte de plus petite taille.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;sub&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  La molécule préférée de presque tous les développeur·euse·s est
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, aussi connue sous le
  nom de «&nbsp;caféine&nbsp;».
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

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

L'élément `<sub>` devrait uniquement être utilisé à des fins typographiques (afin de modifier la position du texte en raison des conventions typographiques) et non pour obtenir des effets de mise en forme.

Par exemple, utiliser `<sub>` pour mettre en forme le nom d'une entreprise qui utilise des lignes de base modifiées dans sa [marque verbale <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Wordmark) ne serait pas approprié&nbsp;; il faut plutôt utiliser le CSS. Par exemple, vous pouvez utiliser la propriété {{CSSxRef("vertical-align")}} avec une déclaration comme `vertical-align: sub` ou, pour contrôler plus précisément le décalage de la ligne de base, `vertical-align: -25%`.

Voici certains cas d'utilisation (non exhaustifs) pour `<sub>`&nbsp;:

- Marquer les numéros de renvoi en bas de page. Voir [Renvoi vers une note de bas de page](#renvoi_vers_une_note_de_bas_de_page) pour un exemple.
- Marquer l'indice dans les nombres de variables mathématiques (bien que vous puissiez aussi envisager d'utiliser une formule [MathML](/fr/docs/Web/MathML) pour cela). Voir [Indices de variables](#indices_de_variables).
- Indiquer le nombre d'atomes d'un élément donné dans une formule chimique (par exemple C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, autrement connue sous le nom de «&nbsp;caféine&nbsp;»). Voir [Formule chimique](#formule_chimique).

## Exemples

### Renvoi vers une note de bas de page

Les notes de bas de page traditionnelles sont indiquées par des chiffres rendus en indice. Il s'agit d'un cas d'utilisation courant pour `<sub>`&nbsp;:

```html
<p>
  Selon les calculs effectués par Nakamura, Johnson et Mason<sub>1</sub>, cela
  causera l'annulation complète des deux particules.
</p>
```

#### Résultat

{{EmbedLiveSample("Renvoi vers une note de bas de page", 650, 80)}}

### Indices de variables

En mathématiques, des familles de variables liées au même concept (comme des distances le long d'un même axe) sont représentées en utilisant le même nom de variable suivi d'un indice. Par exemple&nbsp;:

```html-nolint
<p>
  Les positions des coordonnées horizontales le long de l'axe X sont représentées par
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Résultat

{{EmbedLiveSample("Indices de variables", 650, 80)}}

### Formule chimique

Lorsqu'on écrit une formule chimique, comme H<sub>2</sub>O, le nombre d'atomes d'un élément donné dans la molécule décrite est représenté par un nombre en indice&nbsp;; dans le cas de l'eau, le «&nbsp;2&nbsp;» en indice indique qu'il y a deux atomes d'hydrogène dans la molécule.

Un autre exemple&nbsp;:

```html
<p>
  La molécule préférée de presque tous les développeur·euse·s est
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, communément appelée
  «&nbsp;caféine&nbsp;».
</p>
```

#### Résultat

{{EmbedLiveSample("Formule chimique", "100%", 80)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">Contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html">subscript</a
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
      <td>{{DOMxRef("HTMLElement")}}</td>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("sup")}} qui permet une mise en exposant. Il est à noter que l'élément `<sub>` et l'élément `<sup>` ne peuvent pas être utilisés simultanément. Pour afficher le symbole chimique d'un élément, il faudra utiliser [MathML](/fr/docs/Web/MathML) pour représenter à la fois le numéro atomique et le nombre de masse.
- Les éléments MathML [`<msub>`](/fr/docs/Web/MathML/Reference/Element/msub), [`<msup>`](/fr/docs/Web/MathML/Element/msup), et [`<msubsup>`](/fr/docs/Web/MathML/Element/msubsup).
- La propriété CSS {{CSSxRef("vertical-align")}}
