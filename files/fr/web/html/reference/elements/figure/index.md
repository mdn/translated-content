---
title: "<figure> : l'élément de figure avec légende facultative"
slug: Web/HTML/Reference/Elements/figure
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

L'élément [HTML](/fr/docs/Web/HTML) **`<figure>`** représente un contenu autonome, éventuellement accompagné d'une légende facultative, qui est spécifiée à l'aide de l'élément {{HTMLElement("figcaption")}}. La figure, sa légende et son contenu sont référencés comme une seule unité.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;figure&gt;", "tabbed-shorter")}}

```html interactive-example
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="Un éléphant au coucher du soleil" />
  <figcaption>Un éléphant au coucher du soleil</figcaption>
</figure>
```

```css interactive-example
figure {
  border: thin silver solid;
  display: flex;
  flex-flow: column;
  padding: 5px;
  max-width: 220px;
  margin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

figcaption {
  background-color: #222222;
  color: white;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

- Généralement, une `<figure>` est une image, une illustration, un diagramme, un extrait de code, etc., qui est référencé dans le flux principal d'un document, mais qui peut être déplacé dans une autre partie du document ou dans une annexe sans affecter le flux principal.
- Une légende peut être associée à l'élément `<figure>` en insérant un {{HTMLElement("figcaption")}} à l'intérieur (comme premier ou dernier enfant). Le premier élément `<figcaption>` trouvé dans la figure est présenté comme la légende de la figure.
- Le `<figcaption>` fournit le {{Glossary("accessible name", "nom accessible")}} au parent `<figure>`.

## Exemples

### Images

```html
<!-- Une simple image -->
<figure>
  <img src="favicon-192x192.png" alt="Le logo de MDN." />
</figure>

<!-- Une image avec une légende -->
<figure>
  <img src="favicon-192x192.png" alt="Le logo de MDN." />
  <figcaption>Logo MDN</figcaption>
</figure>
```

#### Résultat

{{EmbedLiveSample("Images", "100%", 375)}}

### Extrait de code

```html
<figure>
  <figcaption>Obtenir les détails du navigateur</figcaption>
  <pre>
    function NavigatorExample(){
      let txt;
      txt = "Nom de code : " + navigator.appCodeName;
      txt += "Nom du navigateur : " + navigator.appName;
      txt += "Version : " + navigator.appVersion ;
      txt += "Cookies activés : " + navigator.cookieEnabled;
      txt += "Plate-forme: " + navigator.platform;
      txt += "En-tête d'agent utilisateur : " + navigator.userAgent;
      console.log("NavigatorExample", txt);
    }
  </pre>
</figure>
```

#### Résultat

{{EmbedLiveSample("Extrait de code")}}

### Citation

```html
<figure>
  <figcaption>
    <cite>Edsger Dijkstra&nbsp;: </cite>
  </figcaption>
  <p>
    «&nbsp;Si le débogage correspond au retrait de bogues, alors la
    programmation correspond à l'ajout de bogues.&nbsp;»
  </p>
</figure>
```

#### Résultat

{{EmbedLiveSample("Citation")}}

### Poème

```html
<figure>
  <p style="white-space:pre">
    Bid me discourse, I will enchant thine ear, Or like a fairy trip upon the
    green, Or, like a nymph, with long dishevell'd hair, Dance on the sands, and
    yet no footing seen: Love is a spirit all compact of fire, Not gross to
    sink, but light, and will aspire.
  </p>
  <figcaption>
    <cite>Venus and Adonis</cite>. By: William Shakespeare
  </figcaption>
</figure>
```

#### Résultat

{{EmbedLiveSample("Poème", "100%", 250)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible">contenu tangible</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Un élément {{HTMLElement("figcaption")}} suivi d'un <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a> ou du contenu de flux suivi d'un élément {{HTMLElement("figcaption")}} ou du contenu de flux.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise ouvrante et la balise fermante sont toutes les deux obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role"
          ><code>figure</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        Sans descendant {{HTMLElement("figcaption")}} descendant&nbsp;: <a href="https://w3c.github.io/html-aria/#dfn-any-role">n'importe quel rôle</a>, sinon aucun rôle autorisé.
      </td>
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

- L'élément {{HTMLElement("figcaption")}}
