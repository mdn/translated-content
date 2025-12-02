---
title: "<b> : l'élément portant à l'attention"
slug: Web/HTML/Reference/Elements/b
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<b>`** est utilisé pour attirer l'attention du·de la lecteur·ice sur le contenu de l'élément, qui n'a pas d'importance particulière par ailleurs. Il était auparavant connu sous le nom d'élément «&nbsp;Boldface&nbsp;», et la plupart des navigateurs affichent encore le texte en gras. Cependant, il ne faut pas utiliser `<b>` pour la mise en forme du texte ou pour indiquer une importance. Pour créer un texte en gras, il faut utiliser la propriété CSS {{CSSxRef("font-weight")}}. Pour indiquer qu'un élément a une importance particulière, il faut utiliser l'élément {{HTMLElement("strong")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;b&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Les deux cours de sciences les plus populaires proposés par l'école sont
  <b class="term">la chimie</b> (l'étude des produits chimiques et de la
  composition des substances) et <b class="term">la physique</b> (l'étude de la
  nature et des propriétés de la matière et de l'énergie).
</p>
```

```css interactive-example
b {
  /* Ajoutez vos styles ici */
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

- Utilisez l'élément `<b>` pour des cas comme les mots-clés dans un résumé, les noms de produits dans un test ou d'autres portions de texte dont la présentation typique serait en gras (mais sans importance particulière).
- Ne confondez pas l'élément `<b>` avec les éléments {{HTMLElement("strong")}}, {{HTMLElement("em")}} ou {{HTMLElement("mark")}}. L'élément {{HTMLElement("strong")}} représente un texte d'une certaine _importance_, {{HTMLElement("em")}} met l'accent sur le texte et {{HTMLElement("mark")}} représente un texte d'une certaine _pertinence_. L'élément `<b>` ne transmet pas d'information sémantique particulière&nbsp;; utilisez-le uniquement lorsqu'aucun autre ne convient.
- De même, n'utilisez pas l'élément `<b>` pour marquer des titres ou des en-têtes. Pour cela, utilisez les balises {{HTMLElement("Heading_Elements", "h1")}} à {{HTMLElement("Heading_Elements", "h6")}}. De plus, les feuilles de style peuvent modifier le style par défaut de ces éléments, de sorte qu'ils ne sont pas nécessairement affichés en gras.
- Il est recommandé d'utiliser l'attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) sur l'élément `<b>` pour transmettre des informations sémantiques supplémentaires si nécessaire (par exemple `<b class="lead">` pour la première phrase d'un paragraphe). Cela facilite la gestion de plusieurs cas d'utilisation de `<b>` si vos besoins stylistiques changent, sans avoir à modifier toutes ses utilisations dans le HTML.
- Historiquement, l'élément `<b>` était destiné à rendre le texte en gras. Les informations de style ont été dépréciées depuis HTML4, donc la signification de l'élément `<b>` a changé.
- S'il n'y a pas de but sémantique à utiliser l'élément `<b>`, vous devez utiliser la propriété CSS {{CSSxRef("font-weight")}} avec la valeur `bold` pour mettre le texte en gras.

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
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
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments portants une sémantique textuelle&nbsp;: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Utiliser les éléments `<b>` et `<i>` (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
