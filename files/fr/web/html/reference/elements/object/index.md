---
title: "<object> : l'élément d'objet externe"
slug: Web/HTML/Reference/Elements/object
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

L'élément [HTML](/fr/docs/Web/HTML) **`<object>`** représente une ressource externe, qui peut être traitée comme une image, un contexte de navigation imbriqué ou une ressource à gérer par un module externe.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;object&gt;", "tabbed-standard")}}

```html interactive-example
<object
  type="video/mp4"
  data="/shared-assets/videos/flower.mp4"
  width="250"
  height="200"></object>
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `archive` {{Deprecated_Inline}}
  - : Une liste d'URIs séparés par des espaces, pointant vers des archives de resources pour l'objet.
- `border` {{Deprecated_Inline}}
  - : La largeur de la bordure autour de l'objet, exprimée en pixels.
- `classid` {{Deprecated_Inline}}
  - : L'URI de l'implémentation de l'objet. Cet attribut peut être utilisé avec (ou en remplacement de) l'attribut `data`.
- `codebase` {{Deprecated_Inline}}
  - : Le chemin absolu de base servant à résoudre les URI relatifs définies par `classid`, `data`, ou `archive`. S'il n'est pas renseigné, l'URI de base considéré sera celui du document.
- `codetype` {{Deprecated_Inline}}
  - : Le type de contenu des données définies par `classid`.
- `data`
  - : L'adresse de la ressource, une URL valide. Au moins un attribut `data` et un attribut `type` doivent être définis.
- `declare` {{Deprecated_Inline}}
  - : Si cet attribut booléen est présent, l'élément sera seulement une déclaration. L'objet devra donc être instancié par un élément `<object>` dans la suite du document. En HTML5, il faut répéter l'élément `<object>` complètement chaque fois que la ressource est réutilisée.
- [`form`](/fr/docs/Web/HTML/Reference/Attributes/form)
  - : L'élément de formulaire éventuel auquel l'élément est associé. La valeur de cet attribut doit être l'identifiant d'un élément {{HTMLElement("form")}} du même document.
- `height`
  - : La hauteur de la ressource affichée, comme pour {{CSSxRef("&lt;integer&gt;")}} en {{Glossary("CSS pixel", "pixels CSS")}}.
- `name`
  - : Le nom du contexte de navigation valide (HTML5) ou du contrôle associé à l'élément (HTML 4). Le nom devient une propriété des objets {{DOMxRef("Window")}} et {{DOMxRef("Document")}}, contenant une référence à la fenêtre intégrée ou à l'élément lui-même.
- `standby` {{Deprecated_Inline}}
  - : Un message que le navigateur peut afficher pendant le chargement de l'implémentation et des données liées à l'objet.
- `type`
  - : Le [type MIME](/fr/docs/Glossary/MIME_type) de la ressource définie par `data`. Au moins un attribut `data` et un attribut `type` doivent être définis.
- `usemap` {{Deprecated_Inline}}
  - : Une référence de type dièze-nom vers un élément {{HTMLElement("map")}}&nbsp;; c'est-à-dire un '#' suivi de la valeur d'un attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/map#name) d'un élément map.
- `width`
  - : La largeur de la ressource affichée, comme pour {{CSSxRef("&lt;integer&gt;")}} en {{Glossary("CSS pixel", "pixels CSS")}}.

## Exemples

### Intégrer une vidéo

#### HTML

```html
<object
  type="video/webm"
  data="/shared-assets/videos/flower.webm"
  width="600"
  height="140">
  <img
    src="/shared-assets/images/examples/flowers.jpg"
    alt="Quelques belles fleurs" />
</object>
```

#### Résultat

{{EmbedLiveSample("Intégrer une vidéo")}}

Si la vidéo de l'exemple ne se charge pas, une image sera proposée à l'utilisateur·ice comme contenu de repli. La balise {{HTMLElement("img")}} est utilisée pour afficher une image. Nous incluons l'attribut `src` défini sur le chemin de l'image à intégrer. Nous incluons aussi l'attribut `alt`, qui fournit à l'image un nom accessible. Si l'image ne se charge pas non plus, le contenu de l'attribut `alt` sera affiché.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a></th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a>&nbsp;;
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>&nbsp;;
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_intégré">contenu intégré</a>, contenu tangible&nbsp;; si l'élément a un attribut
        <a href="#usemap"><code>usemap</code></a>, <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif">contenu interactif</a>&nbsp;;
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#listed_éléments_listés">contenu listé</a>,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#submittable_éléments_participants_à_lenvoi_du_formulaire">contenu pouvant être envoyé</a>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_associé_aux_formulaires">contenu associé à un formulaire</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments {{HTMLElement("param")}} suivis par du <a href="/fr/docs/Web/HTML/Guides/Content_categories#modèle_de_contenu_transparent">contenu transparent.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Aucune, la balise ouvrante et la balise fermante sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_intégré">contenu intégré</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLObjectElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("embed")}}
- L'élément {{HTMLElement("param")}}
