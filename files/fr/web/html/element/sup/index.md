---
title: "<sup> : l'élément de mise en exposant"
slug: Web/HTML/Element/sup
---

{{HTMLSidebar}}

L'élément HTML **`<sup>`** est utilisé, pour des raisons typographiques, afin d'afficher du texte en exposant (plus haut et généralement plus petit) par rapport au bloc de texte environnant.

{{EmbedInteractiveExample("pages/tabbed/sup.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

Cet élément devrait uniquement être utilisé pour des raisons typographiques lorsque la position du texte est liée à la signification de ce texte (par exemple pour une formule mathématiques) ou aux règles typographiques (par exemple en français pour M<sup>lle</sup>, M<sup>me</sup> ou C<sup>ie</sup>).

Ainsi, on n'utilisera pas `<sup>` afin d'obtenir un effet visuel d'un logo par exemple. Pour un simple effet de mise en forme (hors typographie), on utilisera plutôt la propriété {{cssxref("vertical-align")}}, utilisée avec la valeur `super` (voire avec une valeur numérique si on souhaite être plus précis).

Voici quelques cas d'utilisation (non exhaustifs) pour `<sup>` :

- L'utilisation d'exposants dans une formule mathématique : x

  <sup>2</sup>

  .

  - Dans le cadre de formules complexes, [MathML](/fr/docs/Web/MathML) peut s'avérer plus pertinent que l'enchaînement d'éléments {{HTMLElement("sub")}} et `<sup>`.

- L'affichage de lettres supérieures pour respecter certaines conventions typographiques (ex. M

  <sup>lle</sup>

  ).

- La représentation de nombres ordinaux : 7

  <sup>e</sup>

  art.

## Exemples

### Puissance mathématique

#### HTML

```html
<p>Voici la fonction exponentielle : e<sup>x</sup>.</p>
```

#### Résultat

{{EmbedLiveSample("","100%","120")}}

### Lettres supérieures

Bien que, techniquement, le lettrage supérieur ne corresponde pas à la mise en exposant, on voit souvent `<sup>` utilisé pour certaines abréviations.

#### HTML

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### Résultat

{{EmbedLiveSample("","650","80")}}

### Nombres ordinaux

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

{{EmbedLiveSample("", 650, 160)}}

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
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
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
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
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

- L'élément HTML {{HTMLElement("sub")}} permet un effet de mise en indice. Il est à noter que l'élément `<sub>` et l'élément `<sup>` ne peuvent pas être utilisés simultanément. Pour afficher le symbole chimique d'un élément, il faudra utiliser [MathML](/fr/docs/Web/MathML) pour représenter à la fois le numéro atomique et le nombre de masse.
- Les éléments MathML {{MathMLElement("msub")}}, {{MathMLElement("msup")}} et {{MathMLElement("msubsup")}}.
- La propriété CSS {{cssxref("vertical-align")}}.
