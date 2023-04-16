---
title: Différenciateurs de Firefox pour les extensions
slug: Mozilla/Add-ons/WebExtensions/Firefox_differentiators
l10n:
  sourceCommit: 27837ffc9a967eba2b56fe4c0a00d58dd4f72ab5
---

{{AddonSidebar}}

Firefox est un bon navigateur pour commencer le développement de votre extension de navigateur en raison de sa forte compatibilité avec l'API Extension et de sa communauté de développeuses et développeurs.

Firefox offre également des fonctionnalités spécifiques, n'étant pas présentes dans les autres navigateurs. Jetez un coup d'œil à ce qui est disponible&nbsp;:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <p>Permettre aux utilisatrices et utilisateurs de séparer leurs activités en ligne avec <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities">les identités contextuelles</a> (aussi appelées conteneurs). Elles permettent de grouper des onglets avec un stockage local distinct dans le navigateur et de garder en mémoire les préférences des sites, les sessions en cours et d'isoler les données de pistage publicitaire.</p>
      </td>
      <td>
        <img alt="Illustration du menu des conteneurs" src="containers.png" />
      </td>
    </tr>
    <tr>
      <td>
        <p>Enregistrer et afficher des informations supplémentaires ou complémentaires à propos d'une page web grâce à <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars">la barre latérale</a>, un panneau visible à côté des pages web.</p>
      </td>
      <td>
        <img alt="Illustration de la barre latérale dans un exemple d'annotation, en vis-à-vis d'une page web" src="sidebar.png"/>
      </td>
    </tr>
    <tr>
      <td>
        <p>Intégrez votre extension dans le navigateur grâce à la possibilité de sélectionner le style du navigateur selon le navigateur et l'activation des actions du navigateur dans la barre latérale. Utilisez le fichier <code>manifest.json</code> pour définir les URL où une action doit être montrée ou cachée et choisir où placer l'icône d'action.</p>
      </td>
      <td>
        <img alt="Illustration d'une icône d'action navigateur placée dans le panneau du menu" src="icon_placement.png"/>
      </td>
    </tr>
    <tr>
      <td>
        <p>Aider les utilisatrices et utilisateurs à repérer le contenu d'intérêt dans une page web grâce à la capacité à <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/find">chercher et surligner du texte dans une page web</a>.</p>
      </td>
      <td>
        <img alt="Illustration du surlignement d'une occurrence trouvée dans le contenu d'une page" src="find.png"/>
      </td>
    </tr>
    <tr>
      <td>
        <p>Effectuez des recherches directement depuis votre extension en exploitant des fonctionnalités pour <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/search">obtenir des détails sur les moteurs de recherches et exécuter une recherche</a>.</p>
      </td>
      <td>
        <img alt="La page Wikipédia qui affiche le résultat de la recherche pour le mot-clé &#x22;extension&#x22;" src="search_extension.png"/>
      </td>
    </tr>
    <tr>
      <td>
        <p>Ajoutez une dimension supplémentaire à vos thèmes <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/theme">en mettant à jour le thème du navigateur à l'exécution</a>. Grâce à cette fonctionnalité, vous pouvez alterner entre différents thèmes selon l'heure de la journée, appliquer un thème différent lorsque les personnes visitent votre site, accentuer les actions de l'extension, etc.</p>
      </td>
      <td>
        <img alt="Illustration suggérant que le thème change avec le temps" src="dynamic_theme.png"/>
      </td>
    </tr>
    <tr>
      <td>
        <p>Fournir un contrôle sur l'expérience de navigation en permettant aux extensions de <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings">modifier (certains) paramètres généraux du navigateur</a>.</p>
      </td>
      <td>
        <img alt="Exemple d'un paramètre de Firefox indiquant qu'il est contrôlé par une extension" src="extension_controlling_settings.png"/>
      </td>
    </tr>
    <tr>
      <td>
        <p>Permettre aux utilisatrices et utilisateurs d'ajouter les fonctionnalités de votre extension à de nouvelles pages et sites en <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts">inscrivant et désinscrivant des scripts de contenu à l'exécution</a>.</p>
      </td>
      <td>
        <img alt="Illustration d'un exemple de code utilisé pour injecter un script de contenu à la demande" src="script_inject.png"/>
      </td>
    </tr>
    <tr>
      <td>
        <p>Tirer parti de services tiers pour gérer des protocoles ou des types de contenu en enregistrant <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers">des gestionnaires de protocole</a> dans le fichier <code>manifest.json</code>.</p>
      </td>
      <td>
        <img alt="Illustration d'un code définissant un gestionnaire de protocole" src="protocol.png"/>
      </td>
    </tr>
    <tr>
      <td>
        <p>Réaliser des tâches additionnelles pour le trafic web comme <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/dns">la résolution de noms de domaines</a> et <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/proxy">l'envoi des requêtes web à un serveur mandataire (<i lang="en">proxy</i>)</a>.</p>
      </td>
      <td>
        <img alt="Exemple des paramètres de proxy de Firefox" src="proxy_settings.png" />
      </td>
    </tr>
    <tr>
      <td>
        <p>Fonctionnalités de sécurité avancées <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11">à l'aide des modules de sécurité PKCS #11 pour créer des clés et des certificats</a>.</p>
      </td>
      <td>
        <img alt="Icônes dessinées au trait, représentant un certificat papier et une clé" src="certificate_key.png"/>
      </td>
    </tr>
  </tbody>
</table>

Icônes provenant de [icon8](https://icons8.com/)
