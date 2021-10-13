---
title: '<sub> : l''élément de souscription'
slug: Web/HTML/Element/sub
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/sub
---
{{HTMLRef}}

L'élément HTML **`<sub>`** est utilisé, pour des raisons typographiques, afin d'afficher du texte souscrit (ou en indice) (plus bas et généralement plus petit) par rapport au bloc de texte environnant.

{{EmbedInteractiveExample("pages/tabbed/sub.html", "tabbed-shorter")}}

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## **Notes d'utilisation**

L'élément `<sub>` devrait uniquement être utilisé à des fins typographiques (afin de modifier la position du texte en raison des conventions typographiques) et non pour obtenir des effets de mise en forme. Ainsi, on n'utilisera pas `<sub>` pour restituer l'effet visuel d'un logo mais plutôt la propriété CSS {{cssxref("vertical-align")}} avec la valeur `sub`).

Voici certains cas d'utilisation (non exhaustifs) pour `<sub>` :

- L'écriture de certains éléments d'une formule mathématique

  - Dans le cadre de formules complexes, [MathML](/fr/docs/Web/MathML) peut s'avérer plus pertinent que l'enchaînement d'éléments {{HTMLElement("sup")}} et `<sub>`.

- L'indication de renvois en bas de page
- L'écriture du nombre d'atomes dans un formule chimique (ex. C

  <sub>8</sub>

  H

  <sub>10</sub>

  N

  <sub>4</sub>

  O

  <sub>2</sub>

  ).

## Exemples

### Renvoi vers une note de bas de page

#### HTML

```html
<p>
  Selon les calculs effectués par Nakamura, Johnson et
  Mason<sub>1</sub>, cela causera l'annulation complète
  des deux particules.
</p>
```

#### Résultat

{{EmbedLiveSample("Renvoi_vers_une_note_de_bas_de_page", 650, 80)}}

### Formule chimique

#### HTML

```html
<p>
  La molécule d'eau est symbolisée
  par H<sub>2</sub>O.
</p>
```

#### Résultat

{{EmbedLiveSample("Formule_chimique","100%","120")}}

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
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
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
          href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9"
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

| Spécification                                                                                                                                        | État                             | Commentaires |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'semantics.html#the-sub-and-sup-elements', '&lt;sub&gt; and &lt;sup&gt;')}}             | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-sub-and-sup-elements', '&lt;sub&gt; and &lt;sup&gt;;')}} | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.sub")}}

## Voir aussi

- L'élément HTML {{HTMLElement("sub")}} permet un effet de mise en exposant. Il est à noter que l'élément `<sub>` et l'élément `<sup>` ne peuvent pas être utilisés simultanément. Pour afficher le symbole chimique d'un élément, il faudra utiliser [MathML](/fr/docs/Web/MathML) pour représenter à la fois le numéro atomique et le nombre de masse.
- Les éléments MathML {{MathMLElement("msub")}}, {{MathMLElement("msup")}} et {{MathMLElement("msubsup")}}.
- La propriété CSS {{cssxref("vertical-align")}}
