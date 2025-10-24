---
title: "<body> : l'élément pour le corps du document"
slug: Web/HTML/Reference/Elements/body
original_slug: Web/HTML/Element/body
l10n:
  sourceCommit: a18c4a4188f856bec56a5df6ee53b65cee66e713
---

L'élément [HTML](/fr/docs/Web/HTML) **`<body>`** représente le contenu principal du document HTML. Il ne peut y avoir qu'un élément `<body>` par document.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

### Attributs d'événement

> [!NOTE]
> Chacun des noms d'attributs d'événement ci-dessous est lié à son événement équivalent de l'interface {{domxref("Window")}}. Vous pouvez écouter ces événements en utilisant [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) au lieu d'ajouter l'attribut `oneventname` à l'élément `<body>`.

- [`onafterprint`](/fr/docs/Web/API/Window/afterprint_event)
  - : Fonction appelée après que l'utilisateur·rice a imprimé le document.
- [`onbeforeprint`](/fr/docs/Web/API/Window/beforeprint_event)
  - : Fonction appelée lorsque l'utilisateur·rice demande l'impression du document.
- [`onbeforeunload`](/fr/docs/Web/API/Window/beforeunload_event)
  - : Fonction appelée lorsque le document est sur le point d'être déchargé.
- [`onblur`](/fr/docs/Web/API/Window/blur_event)
  - : Fonction appelée lorsque le document perd le focus.
- [`onerror`](/fr/docs/Web/API/Window/error_event)
  - : Fonction appelée lorsque le document n'a pas pu se charger correctement.
- [`onfocus`](/fr/docs/Web/API/Window/focus_event)
  - : Fonction appelée lorsque le document reçoit le focus.
- [`onhashchange`](/fr/docs/Web/API/Window/hashchange_event)
  - : Fonction appelée lorsque la partie identifiant de fragment (commençant par le caractère dièse (`'#'`)) de l'adresse courante du document a changé.
- [`onlanguagechange`](/fr/docs/Web/API/Window/languagechange_event)
  - : Fonction appelée lorsque les langues préférées ont changé.
- [`onload`](/fr/docs/Web/API/Window/load_event)
  - : Fonction appelée lorsque le document a fini de se charger.
- [`onmessage`](/fr/docs/Web/API/Window/message_event)
  - : Fonction appelée lorsque le document a reçu un message.
- [`onmessageerror`](/fr/docs/Web/API/Window/messageerror_event)
  - : Fonction appelée lorsque le document a reçu un message qui ne peut pas être désérialisé.
- [`onoffline`](/fr/docs/Web/API/Window/offline_event)
  - : Fonction appelée lorsque la communication réseau a échoué.
- [`ononline`](/fr/docs/Web/API/Window/online_event)
  - : Fonction appelée lorsque la communication réseau a été rétablie.
- [`onpageswap`](/fr/docs/Web/API/Window/pageswap_event)
  - : Fonction appelée lors de la navigation entre des documents, lorsque le document précédent est sur le point d'être déchargé.
- [`onpagehide`](/fr/docs/Web/API/Window/pagehide_event)
  - : Fonction appelée lorsque le navigateur masque la page courante lors de l'affichage d'une autre page de l'historique de session.
- [`onpagereveal`](/fr/docs/Web/API/Window/pagereveal_event)
  - : Fonction appelée lorsqu'un document est affiché pour la première fois, soit lors du chargement d'un nouveau document depuis le réseau, soit lors de l'activation d'un document.
- [`onpageshow`](/fr/docs/Web/API/Window/pageshow_event)
  - : Fonction appelée lorsque le navigateur affiche le document de la fenêtre suite à une navigation.
- [`onpopstate`](/fr/docs/Web/API/Window/popstate_event)
  - : Fonction appelée lorsque l'utilisateur·rice a navigué dans l'historique de session.
- [`onresize`](/fr/docs/Web/API/Window/resize_event)
  - : Fonction appelée lorsque le document a été redimensionné.
- [`onrejectionhandled`](/fr/docs/Web/API/Window/rejectionhandled_event)
  - : Fonction appelée lorsqu'une {{jsxref("Promise")}} JavaScript est gérée tardivement.
- [`onstorage`](/fr/docs/Web/API/Window/storage_event)
  - : Fonction appelée lorsque la zone de stockage a changé.
- [`onunhandledrejection`](/fr/docs/Web/API/Window/unhandledrejection_event)
  - : Fonction appelée lorsqu'une {{jsxref("Promise")}} JavaScript sans gestionnaire de rejet est rejetée.
- [`onunload`](/fr/docs/Web/API/Window/unload_event) {{deprecated_inline}}
  - : Fonction appelée lorsque le document va être fermé.

### Attributs obsolètes

> [!WARNING]
> N'utilisez pas ces attributs obsolètes&nbsp;; privilégiez les alternatives CSS listées pour chaque attribut obsolète.

- `alink` {{deprecated_inline}}
  - : Couleur du texte des liens hypertexte lorsqu'ils sont sélectionnés.
    Utilisez la propriété CSS {{cssxref("color")}} avec les pseudo-classes {{cssxref(":active")}} et {{cssxref(":focus")}} à la place.
- `background` {{deprecated_inline}}
  - : URI d'une image à utiliser comme arrière-plan.
    Utilisez la propriété CSS {{cssxref("background-image")}} à la place.
- `bgcolor` {{deprecated_inline}}
  - : Couleur d'arrière-plan du document.
    Utilisez la propriété CSS {{cssxref("background-color")}} à la place.
- `bottommargin` {{deprecated_inline}}
  - : Marge inférieure du body.
    Utilisez la propriété CSS {{cssxref("margin-bottom")}} (ou la propriété logique {{cssxref("margin-block-end")}}) à la place.
- `leftmargin` {{deprecated_inline}}
  - : Marge gauche du body.
    Utilisez la propriété CSS {{cssxref("margin-left")}} (ou la propriété logique {{cssxref("margin-inline-start")}}) à la place.
- `link` {{deprecated_inline}}
  - : Couleur du texte des liens hypertexte non visités.
    Utilisez la propriété CSS {{cssxref("color")}} avec la pseudo-classe {{cssxref(":link")}} à la place.
- `rightmargin` {{deprecated_inline}}
  - : Marge droite du body.
    Utilisez la propriété CSS {{cssxref("margin-right")}} (ou la propriété logique {{cssxref("margin-inline-end")}}) à la place.
- `text` {{deprecated_inline}}
  - : Couleur du texte.
    Utilisez la propriété CSS {{cssxref("color")}} à la place.
- `topmargin` {{deprecated_inline}}
  - : Marge supérieure du body.
    Utilisez la propriété CSS {{cssxref("margin-top")}} (ou la propriété logique {{cssxref("margin-block-start")}}) à la place.
- `vlink` {{deprecated_inline}}
  - : Couleur du texte des liens hypertexte visités.
    Utilisez la propriété CSS {{cssxref("color")}} avec la pseudo-classe {{cssxref(":visited")}} à la place.

## Exemples

```html
<html lang="fr">
  <head>
    <title>Titre du document</title>
  </head>
  <body>
    <p>
      L'élément <code>&lt;body&gt;</code> HTML représente le contenu d'un
      document HTML. Il ne peut y avoir qu'un seul élément
      <code>&lt;body&gt;</code> dans un document.
    </p>
  </body>
</html>
```

### Résultat

{{EmbedLiveSample('exemple')}}

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
        Aucune.
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
        La balise d'ouverture peut être omise si le premier élément n'est pas un caractère espace, un commentaire, un élément {{HTMLElement("script")}} ou un élément {{HTMLElement("style")}}. La balise de fermeture peut être omise si l'élément <code>&#x3C;body></code> a un contenu ou une balise d'ouverture, et qu'il n'est pas immédiatement suivi d'un commentaire.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Il doit être le second élément d'un élément {{HTMLElement("html")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">generic</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        {{domxref("HTMLBodyElement")}}
        <ul>
          <li>
            L'élément <code>&#x3C;body></code> expose l'interface {{domxref("HTMLBodyElement")}}.
          </li>
          <li>
            Vous pouvez accéder à l'élément <code>&#x3C;body></code> via la propriété {{domxref("document.body")}}.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("html")}}
- L'élément {{HTMLElement("head")}}
- [Aperçu de la gestion des événements](/fr/docs/Web/API/Document_Object_Model/Events#enregistrer_des_gestionnaires_dévénements)
