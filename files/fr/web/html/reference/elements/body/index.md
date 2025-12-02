---
title: "<body> : l'élément pour le corps du document"
slug: Web/HTML/Reference/Elements/body
l10n:
  sourceCommit: a18c4a4188f856bec56a5df6ee53b65cee66e713
---

L'élément [HTML](/fr/docs/Web/HTML) **`<body>`** représente le contenu principal du document HTML. Il ne peut y avoir qu'un élément `<body>` par document.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

### Attributs d'événement

> [!NOTE]
> Chacun des noms d'attributs d'événement ci-dessous est lié à son événement équivalent de l'interface {{DOMxRef("Window")}}. Vous pouvez écouter ces événements en utilisant {{DOMxRef("EventTarget/addEventListener", "addEventListener()")}} au lieu d'ajouter l'attribut `oneventname` à l'élément `<body>`.

- {{DOMxRef("Window/afterprint_event", "onafterprint")}}
  - : Fonction appelée après que l'utilisateur·rice a imprimé le document.
- {{DOMxRef("Window/beforeprint_event", "onbeforeprint")}}
  - : Fonction appelée lorsque l'utilisateur·rice demande l'impression du document.
- {{DOMxRef("Window/beforeunload_event", "onbeforeunload")}}
  - : Fonction appelée lorsque le document est sur le point d'être déchargé.
- {{DOMxRef("Window/blur_event", "onblur")}}
  - : Fonction appelée lorsque le document perd le focus.
- {{DOMxRef("Window/error_event", "onerror")}}
  - : Fonction appelée lorsque le document n'a pas pu se charger correctement.
- {{DOMxRef("Window/focus_event", "onfocus")}}
  - : Fonction appelée lorsque le document reçoit le focus.
- {{DOMxRef("Window/hashchange_event", "onhashchange")}}
  - : Fonction appelée lorsque la partie identifiant de fragment (commençant par le caractère dièse (`'#'`)) de l'adresse courante du document a changé.
- {{DOMxRef("Window/languagechange_event", "onlanguagechange")}}
  - : Fonction appelée lorsque les langues préférées ont changé.
- {{DOMxRef("Window/load_event", "onload")}}
  - : Fonction appelée lorsque le document a fini de se charger.
- {{DOMxRef("Window/message_event", "onmessage")}}
  - : Fonction appelée lorsque le document a reçu un message.
- {{DOMxRef("Window/messageerror_event", "onmessageerror")}}
  - : Fonction appelée lorsque le document a reçu un message qui ne peut pas être désérialisé.
- {{DOMxRef("Window/offline_event", "onoffline")}}
  - : Fonction appelée lorsque la communication réseau a échoué.
- {{DOMxRef("Window/online_event", "ononline")}}
  - : Fonction appelée lorsque la communication réseau a été rétablie.
- {{DOMxRef("Window/pageswap_event", "onpageswap")}}
  - : Fonction appelée lors de la navigation entre des documents, lorsque le document précédent est sur le point d'être déchargé.
- {{DOMxRef("Window/pagehide_event", "onpagehide")}}
  - : Fonction appelée lorsque le navigateur masque la page courante lors de l'affichage d'une autre page de l'historique de session.
- {{DOMxRef("Window/pagereveal_event", "onpagereveal")}}
  - : Fonction appelée lorsqu'un document est affiché pour la première fois, soit lors du chargement d'un nouveau document depuis le réseau, soit lors de l'activation d'un document.
- {{DOMxRef("Window/pageshow_event", "onpageshow")}}
  - : Fonction appelée lorsque le navigateur affiche le document de la fenêtre suite à une navigation.
- {{DOMxRef("Window/popstate_event", "onpopstate")}}
  - : Fonction appelée lorsque l'utilisateur·rice a navigué dans l'historique de session.
- {{DOMxRef("Window/resize_event", "onresize")}}
  - : Fonction appelée lorsque le document a été redimensionné.
- {{DOMxRef("Window/rejectionhandled_event", "onrejectionhandled")}}
  - : Fonction appelée lorsqu'une {{JSxRef("Promise")}} JavaScript est gérée tardivement.
- {{DOMxRef("Window/storage_event", "onstorage")}}
  - : Fonction appelée lorsque la zone de stockage a changé.
- {{DOMxRef("Window/unhandledrejection_event", "onunhandledrejection")}}
  - : Fonction appelée lorsqu'une {{JSxRef("Promise")}} JavaScript sans gestionnaire de rejet est rejetée.
- {{DOMxRef("Window/unload_event", "onunload")}} {{Deprecated_Inline}}
  - : Fonction appelée lorsque le document va être fermé.

### Attributs obsolètes

> [!WARNING]
> N'utilisez pas ces attributs obsolètes&nbsp;; privilégiez les alternatives CSS listées pour chaque attribut obsolète.

- `alink` {{Deprecated_Inline}}
  - : Couleur du texte des liens hypertexte lorsqu'ils sont sélectionnés.
    Utilisez la propriété CSS {{CSSxRef("color")}} avec les pseudo-classes {{CSSxRef(":active")}} et {{CSSxRef(":focus")}} à la place.
- `background` {{Deprecated_Inline}}
  - : URI d'une image à utiliser comme arrière-plan.
    Utilisez la propriété CSS {{CSSxRef("background-image")}} à la place.
- `bgcolor` {{Deprecated_Inline}}
  - : Couleur d'arrière-plan du document.
    Utilisez la propriété CSS {{CSSxRef("background-color")}} à la place.
- `bottommargin` {{Deprecated_Inline}}
  - : Marge inférieure du body.
    Utilisez la propriété CSS {{CSSxRef("margin-bottom")}} (ou la propriété logique {{CSSxRef("margin-block-end")}}) à la place.
- `leftmargin` {{Deprecated_Inline}}
  - : Marge gauche du body.
    Utilisez la propriété CSS {{CSSxRef("margin-left")}} (ou la propriété logique {{CSSxRef("margin-inline-start")}}) à la place.
- `link` {{Deprecated_Inline}}
  - : Couleur du texte des liens hypertexte non visités.
    Utilisez la propriété CSS {{CSSxRef("color")}} avec la pseudo-classe {{CSSxRef(":link")}} à la place.
- `rightmargin` {{Deprecated_Inline}}
  - : Marge droite du body.
    Utilisez la propriété CSS {{CSSxRef("margin-right")}} (ou la propriété logique {{CSSxRef("margin-inline-end")}}) à la place.
- `text` {{Deprecated_Inline}}
  - : Couleur du texte.
    Utilisez la propriété CSS {{CSSxRef("color")}} à la place.
- `topmargin` {{Deprecated_Inline}}
  - : Marge supérieure du body.
    Utilisez la propriété CSS {{CSSxRef("margin-top")}} (ou la propriété logique {{CSSxRef("margin-block-start")}}) à la place.
- `vlink` {{Deprecated_Inline}}
  - : Couleur du texte des liens hypertexte visités.
    Utilisez la propriété CSS {{CSSxRef("color")}} avec la pseudo-classe {{CSSxRef(":visited")}} à la place.

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
        {{DOMxRef("HTMLBodyElement")}}
        <ul>
          <li>
            L'élément <code>&#x3C;body></code> expose l'interface {{DOMxRef("HTMLBodyElement")}}.
          </li>
          <li>
            Vous pouvez accéder à l'élément <code>&#x3C;body></code> via la propriété {{DOMxRef("document.body")}}.
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

- L'élément HTML {{HTMLElement("html")}}
- L'élément HTML {{HTMLElement("head")}}
- [Aperçu de la gestion des événements](/fr/docs/Web/API/Document_Object_Model/Events#enregistrer_des_gestionnaires_dévénements)
