---
title: "<sub> : l'élément de mise en indice"
slug: Web/HTML/Element/sub
l10n:
  sourceCommit: ca8d6889ade7fc6121aaf4d59158fa6a795f1a1b
---

{{HTMLSidebar}}

L'élément HTML **`<sub>`** est utilisé, pour des raisons typographiques, afin d'afficher du texte en indice (sous la ligne de base et généralement plus petit) par rapport au bloc de texte environnant.

{{EmbedInteractiveExample("pages/tabbed/sub.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></dfn>
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#Contenu_phrasé" >contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#Contenu_phrasé">Contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du <a href="/fr/docs/Web/Guide/HTML/Content_categories#Contenu_phrasé">contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Aucun rôle correspondant</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a></td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Notes d'utilisation

L'élément `<sub>` devrait uniquement être utilisé à des fins typographiques (afin de modifier la position du texte en raison des conventions typographiques) et non pour obtenir des effets de mise en forme.

Ainsi, on n'utilisera pas `<sub>` pour restituer l'effet visuel d'un logo mais plutôt la propriété CSS [`vertical-align`](/fr/docs/Web/CSS/vertical-align) avec la valeur `sub`).

Voici certains cas d'utilisation (non exhaustifs) pour `<sub>`&nbsp;:

- L'indication de renvois en bas de page
- L'écriture de certains éléments d'une formule mathématique
  - Dans le cadre de formules complexes, [MathML](/fr/docs/Web/MathML) peut s'avérer plus pertinent que l'enchaînement d'éléments [`<sup>`](/fr/docs/Web/HTML/Element/sup) et `<sub>`.
- L'écriture du nombre d'atomes dans une formule chimique (ex. C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>).

## Exemples

### Renvoi vers une note de bas de page

#### HTML

```html
<p>
  Selon les calculs effectués par Nakamura, Johnson et Mason<sub>1</sub>, cela
  causera l'annulation complète des deux particules.
</p>
```

#### Résultat

{{EmbedLiveSample("", 650, 80)}}

### Formule chimique

#### HTML

```html
<p>La molécule d'eau est symbolisée par H<sub>2</sub>O.</p>
```

#### Résultat

{{EmbedLiveSample("","100%","80")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML [`<sup>`](/fr/docs/Web/HTML/Element/sup) qui permet une mise en exposant. Il est à noter que l'élément `<sub>` et l'élément `<sup>` ne peuvent pas être utilisés simultanément. Pour afficher le symbole chimique d'un élément, il faudra utiliser [MathML](/fr/docs/Web/MathML) pour représenter à la fois le numéro atomique et le nombre de masse.
- Les éléments MathML [`<msub>`](/fr/docs/Web/MathML/Element/msub), [`<msup>`](/fr/docs/Web/MathML/Element/msup), et [`<msubsup>`](/fr/docs/Web/MathML/Element/msubsup).
- La propriété CSS [`vertical-align`](/fr/docs/Web/CSS/vertical-align).
