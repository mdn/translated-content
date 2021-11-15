---
title: '<bdo> : l''élément de remplacement bidirectionnelle'
slug: Web/HTML/Element/bdo
tags:
  - BiDi
  - Bidirectional Text
  - Element
  - HTML
  - HTML text-level semantics
  - HTML:Flow content
  - HTML:Palpable Content
  - HTML:Phrasing content
  - Left to Right
  - Reference
  - Right to Left
  - Text
  - Text Direction
  - Text Rendering
  - Web
  - ltr
  - rtl
translation_of: Web/HTML/Element/bdo
browser-compat: html.elements.bdo
---
{{HTMLRef}}

L'élément HTML **`<bdo>`** (pour élément de remplacement du texte bidirectionnel) est utilisé afin d'outrepasser la direction du texte. Cela permet d'imposer une direction donnée à un texte. L'orientation du texte est inversée mais pas celle des caractères.

{{EmbedInteractiveExample("pages/tabbed/bdo.html", "tabbed-standard")}}

Les caractères du texte sont dessinés à partir du point de départ dans la direction donnée ; l'orientation des caractères individuels n'est pas affectée (les caractères ne sont donc pas dessinés vers l'arrière, par exemple).

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
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a
        >. Auparavant et jusqu'à Gecko 1.9.2 (Firefox 4) inclus, Firefox
        implémente l'interface
        <a href="/fr/docs/Web/API/HTMLSpanElement"
          ><code>HTMLSpanElement</code></a
        >
        pour cet élément.
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme pour tous les éléments, on peut appliquer [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- **`dir`**

  - : La direction du texte au sein de l'élément. Cet attribut peut valoir :

    - `ltr` : pour un texte allant de gauche à droite (_left-to-right_).
    - `rtl` : pour un texte allant de droite à gauche (_right-to-left_).

## Exemples

```html
<!-- Change la direction du texte -->
<p>Ce texte se lit de gauche à droite.</p>
<p><bdo dir="rtl">Ce texte se lit de droite à gauche.</bdo></p>
```

### Résultat

{{EmbedLiveSample("Exemples","100%",120)}}

## Notes

La spécification HTML 4 ne définissait pas d'évènement pour cet élément. Ils ont été ajoutés en XHTML. Ceci était probablement un oubli de la spécification HTML 4.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML associé : [`<bdi>`](/fr/docs/Web/HTML/Element/bdi)
