---
title: "<figure> : l'élément de figure avec légende facultative"
slug: Web/HTML/Element/figure
---

{{HTMLSidebar}}

L'élément HTML **`<figure>`** représente un contenu autonome, éventuellement accompagné d'une légende facultative, qui est spécifiée à l'aide de l'élément [`<figcaption>`](/fr/docs/Web/HTML/Element/figcaption). La figure, sa légende et son contenu sont référencés comme une seule unité.

{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>,
        <a href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_roots">racine de sectionnement</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content">contenu tangible</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Un élément <a href="/fr/docs/Web/HTML/Element/figcaption"><code>&#x3C;figcaption></code></a> suivi d'un <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">contenu de flux</a> ou du contenu de flux suivi d'un élément <a href="/fr/docs/Web/HTML/Element/figcaption"><code>&#x3C;figcaption></code></a> ou du contenu de flux.
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
        Tout élément qui accepte du <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Figure_Role"><code>figure</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        Sans descendant <a href="/fr/docs/Web/HTML/Element/figcaption"><code>&#x3C;figcaption></code></a> descendant : <a href="https://www.w3.org/TR/html-aria/#dfn-any-role">n'importe quel rôle</a>, sinon aucun rôle autorisé.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément prend uniquement en charge [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Notes d'utilisation

- Généralement, un élément `<figure>` est utilisé pour une image, une illustration, un diagramme, un fragment de code ou autre qui est référencé depuis le flux principal du document. Toutefois, cet élément peut être déplacé vers une autre partie du document ou en annexe sans que cela ait un impact sur le flux principal.
- `<figure>` est [une racine de sectionnement](/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_roots), son contenu est donc exclu du plan général du document.
- Une légende peut être associée avec l'élément `<figure>` en insérant un élément [`<figcaption>`](/fr/docs/Web/HTML/Element/figcaption) à l'intérieur (en premier ou dernier élément enfant). C'est le premier élément `<figcaption>` qui sera trouvé dans la figure qui sera affiché comme légende.

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

{{EmbedLiveSample("", "100%", 480)}}

### Extrait de code

```html
<figure>
  <figcaption>Obtenir les détails du navigateur</figcaption>
  <pre>
    function NavigatorExample(){
      let txt;
      txt = "Nom de code: " + navigator.appCodeName;
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

{{EmbedLiveSample("", "100%", 250)}}

### Citation

```html
<figure>
  <figcaption>
    <cite>Edsger Dijkstra : </cite>
  </figcaption>
  <p>
    « Si le débogage correspond au retrait de bogues, alors la programmation
    correspond à l'ajout de bogues. »
  </p>
</figure>
```

#### Résultat

{{EmbedLiveSample("","", 150)}}

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

{{EmbedLiveSample("", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<figcaption>`](/fr/docs/Web/HTML/Element/figcaption)
