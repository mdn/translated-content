---
title: "<address> : l'élément d'adresse de contact"
slug: Web/HTML/Reference/Elements/address
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<address>`** indique que le HTML inclus fournit des informations de contact pour une personne, des personnes ou une organisation.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;address&gt;", "tabbed-standard")}}

```html interactive-example
<p>Contactez l'auteur·ice de cette page&nbsp;:</p>

<address>
  <a href="mailto:toto@example.fr">toto@example.fr</a><br />
  <a href="tel:+33123456789">+33 (0)1 23 45 67 89</a>
</address>
```

```css interactive-example
a[href^="mailto"]::before {
  content: "📧 ";
}

a[href^="tel"]::before {
  content: "📞 ";
}
```

L'information de contact fournie par le contenu d'un élément `<address>` peut prendre la forme la plus appropriée au contexte, et peut inclure tout type d'information de contact nécessaire, comme une adresse physique, une URL, une adresse électronique, un numéro de téléphone, un identifiant de réseau social, des coordonnées géographiques, etc. L'élément `<address>` doit inclure le nom de la personne, des personnes ou de l'organisation à laquelle l'information de contact fait référence.

`<address>` peut être utilisé dans divers contextes, par exemple pour fournir les informations de contact d'une entreprise dans l'en-tête de la page, ou pour indiquer l'auteur·ice d'un article en incluant un élément `<address>` dans {{HTMLElement("article")}}.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

- L'élément `<address>` ne peut être utilisé que pour représenter les informations de contact de son ancêtre le plus proche de type {{HTMLElement("article")}} ou {{HTMLElement("body")}}.
- Cet élément ne doit pas contenir plus d'informations que les informations de contact, comme une date de publication (qui appartient à un élément {{HTMLElement("time")}}).
- Typiquement, un élément `<address>` peut être placé dans l'élément {{HTMLElement("footer")}} de la section courante, s'il y en a une.

## Exemples

```html
<address>
  Vous pouvez contacter l'auteur à l'adresse
  <a href="http://www.undomaine.com/contact">www.undomaine.com</a>.<br />
  Si vous relevez quelques bogues que ce soient, merci de contacter
  <a href="mailto:webmaster@somedomain.com">le webmaster</a>.<br />
  Vous pouvez aussi venir nous voir :<br />
  Mozilla Foundation<br />
  1981 Landings Drive<br />
  Building K<br />
  Mountain View, CA 94043-0801<br />
  USA
</address>
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 200)}}

Bien qu'il affiche le texte avec le même style par défaut que les éléments HTML {{HTMLElement("i")}} ou {{HTMLElement("em")}}, il est plus approprié d'utiliser `<address>` pour les informations de contact, car il apporte une information sémantique supplémentaire.

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
          >Contenu du flux</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >, mais sans élément <code>&#x3C;address></code> inclus, sans contenu de
        titre ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), aucun contenu de section
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}), et aucun
        {{HTMLElement("header")}} ou {{HTMLElement("footer")}}.
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >, mais toujours à l'exclusion des éléments <code>&#x3C;address></code>
        (selon le principe logique de symétrie, si une balise
        <code>&#x3C;address></code> parent ne peut pas contenir un élément
        <code>&#x3C;address></code> imbriqué, alors le même contenu
        <code>&#x3C;address></code> ne peut pas avoir une balise
        <code>&#x3C;address></code> comme parent).
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"
            >group</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        {{DOMxRef("HTMLElement")}}. Avant Gecko 2.0 (Firefox 4), Gecko
        implémentait cet élément en utilisant l'interface
        {{DOMxRef("HTMLSpanElement")}}.
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments liés aux sections d'un document&nbsp;: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}}
- [Sections et titres d'un document HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
