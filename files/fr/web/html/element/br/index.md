---
title: '<br> : l''élément de saut de ligne'
slug: Web/HTML/Element/br
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
translation_of: Web/HTML/Element/br
browser-compat: html.elements.br
---
{{HTMLRef}}

L'élément HTML **`<br>`** crée un saut de ligne (un retour chariot) dans le texte. Il s'avère utile lorsque les sauts de ligne ont une importance (par exemple lorsqu'on écrit une adresse ou un poème).

{{EmbedInteractiveExample("pages/tabbed/br.html", "tabbed-standard")}}

Comme vous pouvez le voir dans l'exemple ci-dessus, un élément `<br>` est inclus à chaque point où nous voulons que le texte soit interrompu. Le texte après le `<br>` recommence au début de la ligne suivante du bloc de texte.

> **Note :** Attention, `<br>` ne doit pas être utilisé de façon abusive afin d'augmenter l'espace entre les lignes d'un texte. Pour cela, on utilisera la propriété [CSS](/fr/docs/Web/CSS) [`margin`](/fr/docs/Web/CSS/margin) sur l'élément HTML [`<p>`](/fr/docs/Web/HTML/Element/p).

## Attributs

Comme pour tous les éléments, on peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

### Attributs obsolètes

- **`clear`** {{deprecated_inline}}
  - : Cet attribut indique où commencer la prochaine ligne après le saut de ligne.

## Mise en forme avec CSS

`<br>` n'a aucun rôle purement stylistique et il sert uniquement à créer une rupture de ligne au sein d'un bloc de texte. Cet élément pourra très peu être mis en forme avec CSS.

Bien qu'il soit possible d'appliquer une marge ([`margin`](/fr/docs/Web/CSS/margin) sur les éléments `<br>` afin d'augmenter l'espacement entre les lignes de texte d'un même bloc, ce n'est pas une bonne pratique. Pour obtenir le même effet, on pourra utiliser la propriété [`line-height`](/fr/docs/Web/CSS/line-height).

## Exemples

### Simple rupture de ligne

Dans l'exemple suivant, nous utilisons des éléments `<br>` pour créer des sauts de ligne entre les différentes lignes d'une adresse postale :

```html
Mozilla<br>
331 E. Evelyn Avenue<br>
Mountain View, CA<br>
94041<br>
USA<br>
```

Le résultat ressemble à ceci :

{{EmbedLiveSample('Simple_rupture_de_ligne', '', '130')}}

## Accessibilité

Utiliser une suite d'éléments `<br>` pour uniquement rajouter un espace entre des paragraphes sera source de confusion ou de frustration pour les personnes qui utilisent des outils d'assistance. Les lecteurs d'écran, par exemple, pourront annoncer la présence de l'élément alors qu'il n'y a aucun contenu associé.

Si on souhaite ajouter un espace supplémentaire, on utilisera plutôt la propriété CSS [`margin`](/fr/docs/Web/CSS/margin).

## Résumé technique

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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Aucun, c'est un
        <a href="/fr/docs/Glossary/Empty_element">élément vide</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        Cet élément doit avoir une balise de début et ne doit pas avoir de
        balise de fin. Pour les documents XHTML, on écrira cet élément
        <code>&#x3C;br/></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
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
      <td>
        <a href="https://w3c.github.io/aria/#none"><code>none</code></a
        >,
        <a href="https://w3c.github.io/aria/#presentation"
          ><code>presentation</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLBRElement"><code>HTMLBRElement</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<address>`](/fr/docs/Web/HTML/Element/address)
- L'élément [`<p>`](/fr/docs/Web/HTML/Element/p)
- L'élément [`<wbr>`](/fr/docs/Web/HTML/Element/wbr)
