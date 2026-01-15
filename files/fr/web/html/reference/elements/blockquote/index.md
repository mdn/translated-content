---
title: "<blockquote> : l'élément de bloc de citation"
slug: Web/HTML/Reference/Elements/blockquote
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<blockquote>`** indique que le texte qu'il contient est une citation longue. Habituellement, cela s'affiche visuellement par une indentation (voir [Notes](#notes_dutilisation) pour savoir comment la modifier). Une URL pour la source de la citation peut être donnée avec l'attribut `cite`, tandis qu'une représentation textuelle de la source peut être donnée avec l'élément HTML {{HTMLElement("cite")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;blockquote&gt;", "tabbed-standard")}}

```html interactive-example
<div>
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Les mots peuvent être comme des rayons X, si vous les utilisez
      correctement&nbsp;: ils traverseront n'importe quoi. Vous lisez et vous
      êtes transpercé·e.
    </p>
  </blockquote>
  <p>— Aldous Huxley, <cite>Le Meilleur des mondes</cite></p>
</div>
```

```css interactive-example
div:has(> blockquote) {
  background-color: #ededed;
  margin: 10px auto;
  padding: 15px;
  border-radius: 5px;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

blockquote + p {
  text-align: right;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Une URL qui désigne la source du document ou du message cité. Cet attribut est prévu pour signaler l'information expliquant le contexte ou la référence de la citation

## Notes d'utilisation

Selon la spécification, l'attribution de la citation, si elle existe, doit être placée en dehors de l'élément `<blockquote>`.

Pour modifier l'indentation appliquée au texte cité, utilisez les propriétés {{Glossary("CSS")}} {{CSSxRef("margin-left")}} et/ou {{CSSxRef("margin-right")}}, ou la propriété raccourcie {{CSSxRef("margin")}}.

Pour inclure des citations plus courtes en ligne plutôt que dans un bloc séparé, utilisez l'élément {{HTMLElement("q")}} (citation).

## Exemples

Cet exemple montre l'utilisation de l'élément `<blockquote>` pour citer un passage de la {{RFC(1149)}}, <i lang="en">A Standard for the Transmission of IP Datagrams on Avian Carriers</i>.

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

{{EmbedLiveSample("Exemples", 640, 180)}}

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
        >, racine de section, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code>
          <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html"
            >blockquote</a
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
      <td>{{DOMxRef("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("q")}} qui permet de placer des citations en incise dans une ligne de texte.
- L'élément HTML {{HTMLElement("cite")}} qui permet d'indiquer la source de la citation.
- [L'élément blockquote <sup>(angl.)</sup>](https://heydonworks.com/article/the-blockquote-element/) sur heydonworks.com (2024)
