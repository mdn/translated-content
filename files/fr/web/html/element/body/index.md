---
title: '<body> : l''élément pour le corps du document'
slug: Web/HTML/Element/body
tags:
  - Element
  - HTML
  - Reference
  - Sectioning Root Element
  - Sections
  - Web
translation_of: Web/HTML/Element/body
browser-compat: html.elements.body
---
{{HTMLRef}}

L'élément HTML **`<body>`** représente le contenu principal du document HTML. Il ne peut y avoir qu'un élément `<body>` par document.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a
          href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_roots"
          >Racine de section</a
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
        La balise d'ouverture peut être omise si le premier élément n'est pas un
        caractère espace, un commentaire, un élément
        <a href="/fr/docs/Web/HTML/Element/script"><code>&#x3C;script></code></a
        >, ou un élément
        <a href="/fr/docs/Web/HTML/Element/style"><code>&#x3C;style></code></a
        >. La balise de fermeture peut être omise si l'élément
        <code>&#x3C;body></code> a un contenu ou une balise d'ouverture, et
        qu'il n'est pas immédiatement suivi d'un commentaire.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Il doit être le second élément d'un élément
        <a href="/fr/docs/Web/HTML/Element/html"><code>&#x3C;html></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Document_Role"
          >document</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLBodyElement"
          ><code>HTMLBodyElement</code></a
        >
        <ul>
          <li>
            L'élément <code>&#x3C;body></code> est accessible via l'interface
            <a href="/fr/docs/Web/API/HTMLBodyElement"
              ><code>HTMLBodyElement</code></a
            >.
          </li>
          <li>
            Il est possible d'accéder à l'élément body grâce à l'attribut
            <a href="/fr/docs/Web/API/Document/body"
              ><code>document.body</code></a
            >.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme pour tous les autres éléments, on peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- **`alink`** {{deprecated_inline}}
  - : La couleur du texte quand les liens hypertextes sont sélectionnés. Cette méthode n'est pas conforme, on devra utiliser la propriété CSS [`color`](/fr/docs/Web/CSS/color) à la place avec la pseudo-classe [`:active`](/fr/docs/Web/CSS/:active).
- **`background`** {{deprecated_inline}}
  - : L'URI d'une image à utiliser en tant qu'arrière-plan. Cette méthode n'est pas conforme, on devra utiliser la propriété CSS [`background`](/fr/docs/Web/CSS/background) à la place.
- **`bgcolor`** {{deprecated_inline}}
  - : Couleur d'arrière-plan pour le document. Cette méthode n'est pas conforme, on devra utiliser la propriété CSS [`background-color`](/fr/docs/Web/CSS/background-color) sur l'élément à la place.
- **`bottommargin`** {{deprecated_inline}}
  - : La marge à appliquer en bas du corps de la page. Cette méthode n'est pas conforme, on devra utiliser la propriété CSS [`margin-bottom`](/fr/docs/Web/CSS/margin-bottom) sur l'élément.
- **`leftmargin`** {{deprecated_inline}}
  - : La marge à appliquer à gauche du corps de la page. Cette méthode n'est pas conforme, on devra utiliser la propriété CSS [`margin-left`](/fr/docs/Web/CSS/margin-left) à la place.
- **`link`** {{deprecated_inline}}
  - : La couleur du texte à utiliser pour les liens non visités. Cette méthode n'est pas conforme, on devra utiliser la propriété CSS [`color`](/fr/docs/Web/CSS/color) avec la pseudo-classe [`:link`](/fr/docs/Web/CSS/:link).
- **`onafterprint`**
  - : Fonction à appeler après que l'utilisateur ait imprimé le document.
- **`onbeforeprint`**
  - : Fonction à appeler lorsque l'utilisateur lance une impression du document.
- **`onbeforeunload`**
  - : Fonction à appeler avant que le document ne disparaisse.
- **`onblur`**
  - : Fonction à appeler quand le document perd le focus.
- **`onerror`**
  - : Fonction à appeler quand le document n'arrive pas à se charger correctement.
- **`onfocus`**
  - : Fonction à appeler quand le document reçoit le focus.
- **`onhashchange`**
  - : Fonction à appeler quand le fragment (la partie commençant avec le caractère #) de l'adresse actuelle du document, a changé.
- **`onlanguagechange`** {{experimental_inline}}
  - : Fonction à appeler lorsque les langues préférées ont été modifiées.
- **`onload`**
  - : Fonction à appeler quand le document a fini de charger.
- **`onmessage`**
  - : Fonction à appeler quand le document a reçu un message.
- **`onoffline`**
  - : Fonction à appeler quand la connexion réseau est perdue.
- **`ononline`**
  - : Fonction à appeler quand la connexion réseau est restaurée.
- **`onpopstate`**
  - : Fonction à appeler quand l'utilisateur se déplace dans son historique de session.
- **`onredo`**
  - : Fonction à appeler quand l'utilisateur avance et refait un élément de l'historique de transaction.
- **`onresize`**
  - : Fonction à appeler quand le document a été redimensionné.
- **`onstorage`**
  - : Fonction à appeler quand la zone de stockage a changée.
- **`onundo`**
  - : Fonction à appeler quand l'utilisateur recule et défait l'historique de transaction.
- **`onunload`**
  - : Fonction à appeler quand le document disparait.
- **`rightmargin`** {{deprecated_inline}}
  - : La marge à appliquer à droite du corps de la page. Cette méthode n'est pas conforme, on devra utiliser la propriété CSS [`margin-right`](/fr/docs/Web/CSS/margin-right) sur l'élément à la place.
- **`text`** {{deprecated_inline}}
  - : La couleur à utiliser pour la police du texte. Cette méthode n'est pas conforme, on devra utiliser la propriété CSS [`color`](/fr/docs/Web/CSS/color) sur l'élément à la place.
- **`topmargin`** {{deprecated_inline}}
  - : La marge à appliquer en haut du corps de la page. Cette méthohde n'est pas conforme, on devra utiliser la propriété CSS [`margin-top`](/fr/docs/Web/CSS/margin-top) sur l'élément à la place.
- **`vlink`** {{deprecated_inline}}
  - : La couleur de texte pour les liens hypertextes visités. Cette méthode n'est pas conforme, on devra utiliser la propriété CSS [`color`](/fr/docs/Web/CSS/color) avec la pseudo-classe [`:visited`](/fr/docs/Web/CSS/:visited).

## Exemple

```html
<html>
  <head>
    <title>Titre du document</title>
  </head>
  <body>
    <p>Et là un paragraphe…</p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<html>`](/fr/docs/Web/HTML/Element/html)
- L'élément [`<head>`](/fr/docs/Web/HTML/Element/head)
