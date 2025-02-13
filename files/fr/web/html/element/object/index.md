---
title: <object>
slug: Web/HTML/Element/object
---

{{HTMLSidebar}}

L'élément HTML **`<object>`** représente une ressource externe qui peut être interprétée comme une image, un contexte de navigation imbriqué ou une ressource à traiter comme un _plugin_.

{{InteractiveExample("HTML Demo: &lt;object&gt;", "tabbed-standard")}}

```html interactive-example
<object
  type="application/pdf"
  data="https://interactive-examples.mdn.mozilla.net/media/examples/In-CC0.pdf"
  width="250"
  height="200"></object>
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>,<a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasé">contenu phrasé</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_intégré">contenu intégré</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#contenu_tangible">contenu tangible</a>. Si l'élément a un attribut <code>usemap</code> il fait aussi partie de la catégorie de <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_interactif">contenu interactif</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_associé_aux_formulaires">contenu listé pour les formulaires (<i lang="en">listed</i>), contenu pouvant être envoyé par un formulaire (<i lang="en">submittable</i>)</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/param"><code>&lt;param&gt;</code></a> suivis par du <a href="/fr/docs/Web/Guide/HTML/Content_categories#modèle_de_contenu_transparent">contenu transparent.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Aucune omission de balise</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_intégré">contenu intégré</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#application"><code>application</code></a>, <a href="https://w3c.github.io/aria/#document"><code>document</code></a>, <a href="https://w3c.github.io/aria/#image"><code>image</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLObjectElement"><code>HTMLObjectElement</code></a></td>
    </tr>
  </tbody>
</table>

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `data`
  - : L'adresse de la ressource, une URL valide. Au moins un attribut `data` et un attribut `type` doivent être définis.
- `form`
  - : L'élément de formulaire éventuel auquel l'élément est associé. La valeur de cet attribut doit être l'identifiant d'un élément [`<form>`](/fr/docs/Web/HTML/Element/form) du même document.
- `height`
  - : La hauteur de la ressource à afficher, exprimée en [pixels CSS](https://drafts.csswg.org/css-values/#px) (uniquement en valeur absolue, [pas de pourcentage autorisé](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `name`
  - : Le nom du contexte de navigation valide (HTML5) ou du contrôle associé à l'élément (HTML 4).
- `type`
  - : Le [type MIME](/fr/docs/Glossary/MIME_type) de la ressource définie par `data`. Au moins un attribut `data` et un attribut `type` doivent être définis.
- `usemap`
  - : Une référence à l'élément [`<map>`](/fr/docs/Web/HTML/Element/map). La valeur de cet attribut doit être un '#' suivi de la valeur d'un attribut [`name`](/fr/docs/Web/HTML/Element/map#attr-name) d'un élément [`<map>`](/fr/docs/Web/HTML/Element/map).
- `width`
  - : La largeur de la ressource à afficher, exprimée en [pixels CSS](https://drafts.csswg.org/css-values/#px) (uniquement en valeur absolue, [pas de pourcentage autorisé](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

### Attributs obsolètes

- `archive` {{deprecated_inline}}
  - : Une liste d'URIs séparés par des espaces, pointant vers des archives de resources pour l'objet.
- `border` {{deprecated_inline}}
  - : La largeur de la bordure autour de l'objet, exprimée en pixels.
- `classid` {{deprecated_inline}}
  - : L'URI de l'implémentation de l'objet. Cet attribut peut être utilisé avec (ou en remplacement de) l'attribut `data`.
- `codebase` {{deprecated_inline}}
  - : Le chemin absolu de base servant à résoudre les URI relatifs spécifiés par `classid`, `data`, ou `archive`. S'il n'est pas renseigné, l'URI de base considéré sera celui du document.
- `codetype` {{deprecated_inline}}
  - : Le type de contenu des données spécifiés par `classid`.
- `declare` {{deprecated_inline}}
  - : Si cet attribut booléen est présent, l'élément sera seulement une déclaration. L'objet devra donc être instancié par un élément `<object>` dans la suite du document. En HTML5, il faut répéter l'élément `<object>` complètement chaque fois que la ressource est réutilisée.
- `standby` {{deprecated_inline}}
  - : Un message que le navigateur peut afficher pendant le chargement de l'implémentation et des données liées à l'objet.

## Exemples

### Intégrer une vidéo YouTube

```html
<object
  type="video/mp4"
  data="https://www.youtube.com/watch?v=Sp9ZfSvpf7A"
  width="1280"
  height="720"></object>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<applet>`](/fr/docs/Web/HTML/Element/applet) {{deprecated_inline}}
- [`<param>`](/fr/docs/Web/HTML/Element/param)
- [`<embed>`](/fr/docs/Web/HTML/Element/embed)
