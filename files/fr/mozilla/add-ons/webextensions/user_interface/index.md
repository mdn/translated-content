---
title: Interface utilisateur
slug: Mozilla/Add-ons/WebExtensions/user_interface
---

{{AddonSidebar}}

Les WebExtensions disposent de plusieurs options d'interface utilisateur afin que leur fonctionnalité puisse être mise à la disposition de l'utilisateur. Un résumé de ces options est fourni ci-dessous, avec une introduction plus détaillée à chaque option d'interface utilisateur dans cette section.

> **Note :** Pour en revenir des conseils sur l'utilisation de ces composants d'interface utilisateur afin de créer une expérience utilisateur générale dans votre extension, consultez l'article sur les [bonnes pratiques de l'expérience utilisateur](/fr/Add-ons/WebExtensions/User_experience_best_practices).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">UI option</th>
      <th scope="col">Description</th>
      <th scope="col" style="width: 350px">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/Add-ons/WebExtensions/user_interface/Browser_action"
          >Bouton de la barre d'outils (action du navigateur)</a
        >
      </td>
      <td>
        <p>
          Un bouton sur la barre d'outils du navigateur qui diffuse un événement
          sur l'add-on lorsqu'il est cliqué. Par défaut, le bouton est visible
          dans tous les onglets.
        </p>
      </td>
      <td><img src="browser-action.png" /></td>
    </tr>
    <tr>
      <td>
        Bouton de la barre d'outils du navigateur avec un
        <a href="/fr/Add-ons/WebExtensions/user_interface/Popups">popup</a>
      </td>
      <td>
        <p>
          Un popup sur un bouton dans la barre d'outils du navigateur qui
          s'ouvre lorsque le bouton est cliqué. La fenêtre contextuelle est
          définie dans un document HTML qui gère l'interaction de l'utilisateur.
        </p>
      </td>
      <td><img src="popup-shadow.png" /></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/Add-ons/WebExtensions/user_interface/Page_actions"
          >Bouton de la barre d'addresse</a
        >
        (action page)
      </td>
      <td>
        <p>
          Un bouton sur la barre d'adresse du navigateur qui distribue un
          événement à l'add-on lorsqu'il est cliqué. Par défaut, le bouton est
          caché dans tous les onglets.
        </p>
      </td>
      <td><img src="address_bar_button.png" /></td>
    </tr>
    <tr>
      <td>
        Bouton de la barre d'addresse avec un
        <a href="/fr/Add-ons/WebExtensions/user_interface/Popups">popup</a>
      </td>
      <td>
        <p>
          Un popup sur un bouton dans la barre d'adresse du navigateur qui
          s'ouvre lorsque le bouton est cliqué. La fenêtre contextuelle est
          définie dans un document HTML qui gère l'interaction de l'utilisateur.
        </p>
      </td>
      <td><img src="page_action_popup.png" /></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/Add-ons/WebExtensions/user_interface/Context_menu_items"
          >Elément du menu contextuel</a
        >
      </td>
      <td>
        <p>
          Les éléments de menu, les cases à cocher et les boutons radio sur un
          ou plusieurs des menus contextuels du navigateur. En outre, les menus
          peuvent être structurés en ajoutant des séparateurs. Lorsque les
          éléments du menu sont cliqués, un événement est envoyé à l'extension.
        </p>
      </td>
      <td><img src="context_menu_example.png" /></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/Add-ons/WebExtensions/user_interface/Sidebars"
          >Barre latérale</a
        >
      </td>
      <td>
        <p>
          Un document HTML s'affiche à côté d'une page Web, avec l'option de
          contenu unique par page. La barre latérale s'ouvre lorsque l'extension
          est installée, puis obéit à la sélection de visibilité de la barre
          latérale de l'utilisateur. L'interaction de l'utilisateur dans la
          barre latérale est traitée par son document HTML.
        </p>
      </td>
      <td><img src="bookmarks-sidebar.png" /></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/Add-ons/WebExtensions/user_interface/Options_pages"
          >page d'options</a
        >
      </td>
      <td>
        <p>
          Une page qui vous permet de définir les préférences pour votre
          WebExtension que vos utilisateurs peuvent modifier. L'utilisateur peut
          accéder à cette page dans le gestionnaire des extensions du
          navigateur.
        </p>
      </td>
      <td><img src="options_page.png" /></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/Add-ons/WebExtensions/user_interface/extension_pages"
          >Extension pages</a
        >
      </td>
      <td>
        <p>
          Utilisez les pages Web incluses dans votre WebExtension pour fournir
          des formulaires, de l'aide ou tout autre contenu requis, dans les
          fenêtres ou les onglets.
        </p>
      </td>
      <td><img src="bundled_page_as_panel_small.png" /></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/Add-ons/WebExtensions/user_interface/Notifications"
          >Notifications</a
        >
      </td>
      <td>
        <p>
          Notifications transitoires affichées à l'utilisateur par le mécanisme
          de notification du système d'exploitation sous-jacent. Déclenche un
          événement vers l'extension lorsque l'utilisateur clique sur une
          notification ou lorsque une notification se ferme (automatiquement ou
          à la demande de l'utilisateur).
        </p>
      </td>
      <td><img src="notify-shadowed.png" /></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/Add-ons/WebExtensions/user_interface/Omnibox"
          >Suggestions de la barre d'addresse</a
        >
      </td>
      <td>
        <p>
          Offrez des suggestions de barèmes d'adresses personnalisées lorsque
          l'utilisateur entre un mot-clé.
        </p>
      </td>
      <td><img src="omnibox_example_small.png" /></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/Add-ons/WebExtensions/user_interface/devtools_panels"
          >Panneaux d'outils de développement</a
        >
      </td>
      <td>
        <p>
          Un onglet avec un document HTML associé qui s'affiche dans les outils
          de développement du navigateur.
        </p>
      </td>
      <td><img src="developer_panel_tab.png" /></td>
    </tr>
  </tbody>
</table>

Les guides pratiques suivants fournissent des conseils étape par étape pour créer certaines options d'interface utilisateur:

- [Lignes directrices en matière d'accessibilité](/fr/Add-ons/WebExtensions/user_interface/lignes_directrices_en_matiere_accessibilite)
- [Ajouter un bouton à la barre d'outils](/fr/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Styles des navigateurs](/fr/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Extension des outils de développement](/fr/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Mettre en place une page de paramètres](/fr/Add-ons/WebExtensions/Implement_a_settings_page)
