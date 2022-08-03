---
title: '<p> : l''élément paragraphe'
slug: Web/HTML/Element/p
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/p
---
{{HTMLRef}}

L'élément HTML **`<p>`** représente un paragraphe de texte. Les paragraphes sont généralement représentés comme des blocs et séparés par un espace vertical, leur première ligne est également parfois indentée. Les paragraphes sont [des éléments blocs](/fr/docs/Web/HTML/Éléments_en_bloc).

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

Étant des éléments de bloc, les paragraphes se fermeront automatiquement si un autre élément de bloc est analysé avant la balise de fermeture `</p>` (voir Omission de balises dans le tableau qui suit).

> **Note :** Pour modifier l'espacement entre les paragraphes, il faudra utiliser la propriété CSS {{cssxref("margin")}}. _Il ne faut pas insérer de paragraphes vides ou d'éléments {{HTMLElement("br")}} afin de créer un espace_.

## Attributs

Cet élément, comme les autres éléments HTML, inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

> **Note :** L'attribut `align` pour les balises `<p>` est obsolète et ne doit plus être utilisé.

## Exemples

### HTML

```html
<p>
  Premier paragraphe du texte.
  J'aime les licornes beaucoup
  beaucoup beaucoup.
</p>

<p>
  Deuxième paragraphe du texte.
  Et si j'en avais une apprivoisée
  je serais très contente.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","300","150")}}

## Accessibilité

Répartir le contenu entre différents paragraphes permet d'améliorer l'accessibilité d'une page. Les lecteurs d'écran et autres outils d'assistance fournissent des raccourcis qui permettent aux utilisateurs d'accéder rapidement au paragraphe suivant ou précédent et ainsi de naviguer plus rapidement sur la page, comme le permettent les blancs pour la navigation visuelle des autres utilisateurs.

L'utilisation de paragraphes vides (des éléments HTML `<p>` sans contenu) est problématique pour les personnes qui naviguent sur une page à l'aide d'outils d'assistance. Les lecteurs d'écran, par exemple, pourraient annoncer l'élément mais pas le contenu associé ce qui peut être frustrant ou source de confusion.

S'il est nécessaire d'avoir un espace supplémentaire, on pourra utiliser des propriétés CSS comme {{cssxref("margin")}} pour obtenir l'effet désiré.

```css
p {
  margin-bottom: 2em; // on ajoute un espace après chaque paragraphe
}
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de début est obligatoire. La balise de fin peut être absente
        si l'élément {{HTMLElement("p")}} est immédiatement suivi d'un
        élément  {{HTMLElement("address")}},
        {{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("blockquote")}}, {{HTMLElement("div")}},
        {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("footer")}}, {{HTMLElement("form")}},
        {{HTMLElement("h1")}}, {{HTMLElement("h2")}},
        {{HTMLElement("h3")}}, {{HTMLElement("h4")}},
        {{HTMLElement("h5")}}, {{HTMLElement("h6")}},
        {{HTMLElement("header")}}, {{HTMLElement("hr")}},
        {{HTMLElement("menu")}}, {{HTMLElement("nav")}},
        {{HTMLElement("ol")}}, {{HTMLElement("pre")}},
        {{HTMLElement("section")}}, {{HTMLElement("table")}},
        {{HTMLElement("ul")}} ou d'un autre élément
        {{HTMLElement("p")}} ou s'il n'y a plus de contenu dans
        l'élément parent et que l'élément parent n'est pas un élément
        {{HTMLElement("a")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLParagraphElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                            | État                             | Commentaires                                                                                                    |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-p-element', '&lt;p&gt;')}}         | {{Spec2('HTML WHATWG')}} | Aucune modification depuis la dernière dérivation depuis la spécification W3C {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-p-element', '&lt;p&gt;')}} | {{Spec2('HTML5 W3C')}}     | Obsolescence de l'attribut `align`.                                                                             |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.3.1', '&lt;p&gt;')}}                 | {{Spec2('HTML4.01')}}     | Définition intiale.                                                                                             |

## Compatibilité des navigateurs

{{Compat("html.elements.p")}}

## Voir aussi

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
