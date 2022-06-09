---
title: <object>
slug: Web/HTML/Element/object
translation_of: Web/HTML/Element/object
browser-compat: html.elements.object
---
{{HTMLRef}}

L'élément HTML **`<object>`** représente une ressource externe qui peut être interprétée comme une image, un contexte de navigation imbriqué ou une ressource à traiter comme un _plugin_.

{{EmbedInteractiveExample("pages/tabbed/object.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>,<a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasé">contenu phrasé</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_intégré">contenu intégré</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#contenu_tangible">contenu tangible</a>. Si l'élément a un attribut <strong>usemap</strong> il fait aussi partie de la catégorie de <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_interactif">contenu interactif</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_associé_aux_formulaires">contenu listé pour les formulaires (<em>listed</em>), contenu pouvant être envoyé par un formulaire (<em>submittable</em>)</a>.
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

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("data")}}
  - : L'adresse de la ressource, une URL valide. Au moins un attribut **`data`** et un attribut **`type`** doivent être définis.
- {{htmlattrdef("form")}}
  - : L'élément de formulaire éventuel auquel l'élément est associé. La valeur de cet attribut doit être l'identifiant d'un élément  [`<form>`](/fr/docs/Web/HTML/Element/form) du même document.
- {{htmlattrdef("height")}}
  - : La hauteur de la ressource à afficher, exprimée en pixels [CSS](/fr/docs/Web/CSS) (uniquement en valeur absolue).
- {{htmlattrdef("name")}}
  - : Le nom du contexte de navigation valide (HTML5) ou du contrôle associé à l'élément (HTML 4).
- {{htmlattrdef("type")}}
  - : Le type MIME de la ressource définie par  **`data`**. Au moins un attribut **`data`** et un attribut **`type`** doivent être définis.
- {{htmlattrdef("typemustmatch")}}
  - : Cet attribut booléen indique si l'attribut `type` doit correspondre [au type MIME](/fr/docs/Glossaire/Type_MIME) de la ressource afin que celle-ci puisse être utilisée.
- {{htmlattrdef("usemap")}}
  - : Une référence à l'élément [`<map>`](/fr/docs/Web/HTML/Element/map). La valeur de cet attribut doit être un '#' suivi de la valeur d'un attribut {{htmlattrxref("name", "map")}} d'un élément [`<map>`](/fr/docs/Web/HTML/Element/map).
- {{htmlattrdef("width")}}
  - : La largeur de la ressource à afficher, exprimée en pixels CSS (uniquement en valeur absolue).

### Attributs obsolètes

- {{htmlattrdef("archive")}} {{deprecated_inline}}
  - : Une liste d'URIs séparés par des espaces, pointant vers des archives de resources pour l'objet.
- {{htmlattrdef("border")}} {{deprecated_inline}}
  - : La largeur de la bordure autour de l'objet, exprimée en pixels.
- {{htmlattrdef("classid")}} {{deprecated_inline}}
  - : L'URI de l'implémentation de l'objet. Cet attribut peut être utilisé avec (ou en remplacement de) l'attribut **`data`**.
- {{htmlattrdef("codebase")}} {{deprecated_inline}}
  - : Le chemin absolu de base servant à résoudre les URIs relatifs spécifiés par **`classid`**, **`data`**, ou **`archive`**. S'il n'est pas renseigné, l'URI de base considéré sera celui du document.
- {{htmlattrdef("codetype")}} {{deprecated_inline}}
  - : Le type de contenu des données spécifiés par **`classid`**.
- {{htmlattrdef("declare")}} {{deprecated_inline}}
  - : Si cet attribut booléen est présent, l'élément sera seulement une déclaration. L'objet devra donc être instancié par un élément  `<object>` dans la suite du document. En HTML5, il faut répéter l'élément \<object> complètement chaque fois que la ressource est ré-utilisée.
- {{htmlattrdef("standby")}} {{deprecated_inline}}
  - : Un message que le navigateur peut afficher pendant le chargement de l'implémentation et des données liées à l'objet.
- {{htmlattrdef("tabindex")}} {{deprecated_inline}}
  - : La position de l'élément dans la navigation par onglets au sein de l'élément courant.

## Exemples

### Intégrer une vidéo YouTube

```html
<object type="video/mp4"
    data="https://www.youtube.com/watch?v=Sp9ZfSvpf7A"
    width="1280"
    height="720">
</object>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<applet>`](/fr/docs/Web/HTML/Element/applet) {{deprecated_inline}}
- [`<param>`](/fr/docs/Web/HTML/Element/param)
- [`<embed>`](/fr/docs/Web/HTML/Element/embed)
