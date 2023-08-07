---
title: "<blockquote> : l'élément de bloc de citation"
slug: Web/HTML/Element/blockquote
---

{{HTMLSidebar}}

L'élément HTML **`<blockquote>`** (qui signifie _bloc de citation_) indique que le texte contenu dans l'élément est une citation longue. Le texte est généralement affiché avec une indentation (voir [les notes](#usage_notes) ci-après). Une URL indiquant la source de la citation peut être donnée grâce à l'attribut **`cite`** tandis qu'un texte représentant la source peut être donné via l'élément [`<cite>`](/fr/docs/Web/HTML/Element/cite).

{{EmbedInteractiveExample("pages/tabbed/blockquote.html","tabbed-standard")}}

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
        <a
          href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#racines_de_sectionnement"
          >racine de section</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
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
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
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
        <a href="/fr/docs/Web/API/HTMLQuoteElement"
          ><code>HTMLQuoteElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme pour tous les éléments HTML, on peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- **`cite`**
  - : Une URL qui désigne la source du document ou du message cité. Cet attribut est prévu pour signaler l'information expliquant le contexte ou la référence de la citation

## Notes d'utilisation

Pour changer l'indentation de `<blockquote>`, on utilisera la propriété [CSS](/fr/docs/Glossary/CSS) [`margin-left`](/fr/docs/Web/CSS/margin-left) ou [`margin-right`](/fr/docs/Web/CSS/margin-right) (ou encore la propriété raccourcie [`margin`](/fr/docs/Web/CSS/margin))

Pour les citations courtes, on pourra utiliser l'élément [`<q>`](/fr/docs/Web/HTML/Element/q).

## Exemples

Cet exemple démontre l'utilisation de l'élément `<blockquote>` pour citer un passage de [RFC 1149 <i lang="en">A Standard for the Transmission of IP Datagrams on Avian Carriers</i>](https://datatracker.ietf.org/doc/html/rfc1149).

```html
<blockquote cite="https://datatracker.ietf.org/doc/html/rfc1149">
  <p>
    Avian carriers can provide high delay, low throughput, and low altitude
    service. The connection topology is limited to a single point-to-point path
    for each carrier, used with standard carriers, but many carriers can be used
    without significant interference with each other, outside of early spring.
    This is because of the 3D ether space available to the carriers, in contrast
    to the 1D ether used by IEEE802.3. The carriers have an intrinsic collision
    avoidance system, which increases availability.
  </p>
</blockquote>
```

### Résultat

{{EmbedLiveSample("", 640, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<q>`](/fr/docs/Web/HTML/Element/q) qui permet de placer des citations en incise dans une ligne de texte.
- [`<cite>`](/fr/docs/Web/HTML/Element/cite) qui permet d'indiquer la source de la citation.
