---
title: Différenciateurs Firefox
slug: Mozilla/Add-ons/WebExtensions/Firefox_differentiators
tags:
  - Add-ons
  - Extensions
  - Firefox
  - NeedMarkupWork
  - Themes
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Firefox_differentiators
---
{{AddonSidebar}}

Firefox est un excellent endroit pour commencer le développement de votre extension de navigateur. Pour commencer, vous obtenez la conformité la plus élevée avec l'API d'extension de navigateur proposée, y compris l'utilisation de l'espace de noms `browser.*` et les promesses pour la gestion des événements asynchrones. Ensuite, il y a une communauté de développeurs de vulgarisation très solidaire, prêts à vous aider.

Firefox offre également des fonctionnalités uniques que vous pouvez utiliser pour créer des extensions plus sûres, plus faciles à utiliser et plus attrayantes visuellement. Jetez un coup d’œil à ce qui est disponible:

<table>
  <tbody>
    <tr>
      <td>
        <p>
          Aider les utilisateurs à séparer les activités de leur navigateur avec
          les
          <a href="/fr/Add-ons/WebExtensions/API/contextualIdentities"
            >identités contextuelles</a
          >
          (Contextual Identities ou Containers). Donner aux groupes d'onglets
          leur propre stockage de navigateur local : stockage de cookies et
          données locales dans localStorage et indexedDB. Ainsi, les détails
          tels que les préférences du site, les sessions ouvertes et les données
          de suivi des publicités restent confidentiels dans les onglets.
        </p>
      </td>
      <td><img alt="containers.png" /></td>
    </tr>
    <tr>
      <td>
        <p>
          Enregistrez et affichez des informations supplémentaires ou
          complémentaires sur une page Web à l'aide du composant de l'interface
          utilisation
          <a href="/fr/Add-ons/WebExtensions/user_interface/Sidebars">Sidebar</a
          >, un panneau situé à côté des pages Web.
        </p>
      </td>
      <td><img src="sidebar.png" /></td>
    </tr>
    <tr>
      <td>
        <p>
          Mieux intégrer votre extension avec le navigateur en utilisant la
          possibilité de choisir le style du navigateur dans les actions des
          pages et du navigateur ainsi que dans la barre latérale de l'interface
          utilisateur. Définissez, dans le fichier <code>manifest.json</code>,
          les URLs où une action de page est affichée ou masquée, et choisissez
          où placer l'icône d'action du navigateur.
        </p>
      </td>
      <td><img src="icon_placement.png" /></td>
    </tr>
    <tr>
      <td>
        <p>
          Aidez les utilisateurs à localiser le contenu qui les intéresse dans
          une page web, avec la possibilité de
          <a href="/fr/Add-ons/WebExtensions/API/find"
            >trouver et mettre en surbrillance le texte dans une page web</a
          >.
        </p>
      </td>
      <td><img src="find.png" /></td>
    </tr>
    <tr>
      <td>
        <p>
          Effectuez des recherches directement à partir de votre extension, avec
          des fonctions pour
          <a href="/fr/Add-ons/WebExtensions/API/search"
            >obtenir des détails sur les moteurs de recherche et effectuer une
            recherche</a
          >.
        </p>
      </td>
      <td><img src="search_extension.png" /></td>
    </tr>
    <tr>
      <td>
        <p>
          Ajoutez une dimension supplémentaire à vos thèmes en
          <a href="/fr/Add-ons/WebExtensions/API/theme"
            >mettant à jour le thème du navigateur au moment de l'exécution</a
          >. Avec cette fonction, vous pouvez alterner les thèmes par heure de
          la journée, appliquer un thème différent lorsque les utilisateurs
          naviguent sur votre site Web, refléter les actions des utilisateurs
          dans votre extension, et plus encore.
        </p>
      </td>
      <td><img src="dynamic_theme.png" /></td>
    </tr>
    <tr>
      <td>
        <p>
          Effectuez des recherches directement à partir de votre extension, avec
          des fonctions pour obtenir les détails avec la <a
            href="/fr/Add-ons/WebExtensions/API/browserSettings"
            >possibilité de modifier (certains) paramètres globaux du
            navigateur</a
          >.
        </p>
      </td>
      <td><img src="extension_controlling_settings.png" /></td>
    </tr>
    <tr>
      <td>
        <p>
          Permettez aux utilisateurs d'ajouter de manière fiable les
          fonctionnalités de votre extension à de nouvelles pages et de nouveaux
          sites, avec la possibilité <a
            href="/fr/Add-ons/WebExtensions/API/contentScripts"
            >enregistrer et de désinscrire des scripts de contenu au moment de
            l'exécution</a
          >.
        </p>
      </td>
      <td><img src="script_inject.png" /></td>
    </tr>
    <tr>
      <td>
        <p>
          Profitez des services externes pour gérer les protocoles ou les types
          de contenu en enregistrant les <a
            href="/fr/Add-ons/WebExtensions/manifest.json/protocol_handlers"
            >gestionnaires de protocole</a
          >
          dans le <code>manifest.json</code>.
        </p>
      </td>
      <td><img src="protocol.png" /></td>
    </tr>
    <tr>
      <td>
        <p>
          Effectuer des tâches Web supplémentaires telles que la
          <a href="/fr/Add-ons/WebExtensions/API/dns"
            >résolution des noms de domaines </a
          >et
          <a href="/fr/Add-ons/WebExtensions/API/proxy"
            >proxying des requêtes web</a
          >.
        </p>
      </td>
      <td><img src="proxy_settings.png" /></td>
    </tr>
    <tr>
      <td>
        <p>
          Ajoutez des fonctionnalités de sécurité avancées à l'aide des
          <a href="/fr/Add-ons/WebExtensions/API/pkcs11"
            >modules de sécurités PKCS #11 aux clés et certificats source</a
          >.
        </p>
      </td>
      <td><img src="certificate_key.png" /></td>
    </tr>
  </tbody>
</table>

Icônes de [icon8](https://www.icons8.com)
