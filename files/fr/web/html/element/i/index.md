---
title: <i>
slug: Web/HTML/Element/i
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/i
---
{{HTMLRef}}

L'élément HTML **`<i>`** représente un morceau de texte qui se différencie du texte principal. Cela peut par exemple être le cas pour des termes techniques, des phrases dans une langue étrangère ou encore l'expression des pensées d'un personnage. Le contenu de cet élément est généralement affiché en italique.

{{EmbedInteractiveExample("pages/tabbed/i.html", "tabbed-shorter")}}

## Attributs

Cet élément possède uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Exemples

### HTML

```html
<p>
  La phrase latine
  <i class="latin">
    Veni, vidi, vici
  </i>
  est souvent employée en littérature.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Notes

Dans certaines versions antérieures de HTML, la balise `<i>` ne jouait qu'un rôle de mise en forme, utilisé pour afficher le texte en italique (de la même façon que la balise \<b> était utilisée pour afficher le texte en gras). Désormais, ces balises ont un rôle strictement sémantique et l'élément \<i> représente une portion de texte dont la sémantique est différente, la représentation choisie pour cela par le navigateur étant la plupart du temps une mise en italique. Cela signifie que le navigateur affiche généralement le contenu en italique comme c'était le cas auparavant mais que ce traitement de mise en forme n'est plus du tout obligatoire.

Cet élément ne doit être utilisé seulement si aucun autre ne permet d'exprimer la sémantique du contenu de façon plus appropriée. Ainsi :

- {{HTMLElement("em")}} doit être utilisé pour insister, mettre l'accent sur le contenu
- {{HTMLElement("strong")}} doit être utilisé pour exprimer l'importance du contenu
- {{HTMLElement("mark")}} doit être utilisé pour exprimer la pertinence du contenu
- {{HTMLElement("cite")}} doit être utilisé pour marquer le nom d'une œuvre telle qu'un livre, une pièce ou une chanson.
- {{HTMLElement("dfn")}} doit être utilisé pour souligner l'occurence d'un mot utilisée pour sa définition

C'est une bonne pratique que d'utiliser l'attribut **`class`** pour identifier les raisons qui poussent à utiliser cet élément. Cela permet par exemple de maintenir la mise en forme du document plus efficacement grâce aux feuilles de style CSS.

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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
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
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
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
      <td><dfn>Interface DOM </dfn>{{domxref("HTMLElement")}}.</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-i-element', '&lt;i&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-i-element', '&lt;i&gt;')}}     | {{Spec2('HTML5 W3C')}}     |              |
| {{SpecName('HTML4.01', 'present/graphics.html#h-15.2.1', '&lt;b&gt;')}}                 | {{Spec2('HTML4.01')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.i")}}

## Voir aussi

- {{HTMLElement("em")}} qui permet d'indiquer une emphase et qui ne doit pas être confondu avec l'élément `<i>`
