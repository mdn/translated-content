---
title: Permission activeTab
slug: Mozilla/Add-ons/WebExtensions/activeTab_permission
l10n:
  sourceCommit: 8adfa9f21be15f90b5ee73dbfb9bc441038ac55d
---

La permission `activeTab` donne à une extension un accès temporaire à l'onglet sur lequel un·e utilisateur·ice travaille. Elle est accordée en réponse à une [action de l'utilisateur·ice](/fr/docs/Mozilla/Add-ons/WebExtensions/User_actions) explicite, comme le clic sur le bouton de la barre d'outils de l'extension. L'accès est limité à cet onglet et dure jusqu'à ce que l'utilisateur·ice navigue ailleurs.

Cet objectif est de permettre aux extensions de compléter le cas d'utilisation courant consistant à «&nbsp;faire quelque chose sur la page actuelle lorsque l'utilisateur·ice le demande&nbsp;», sans que l'extension ait besoin de privilèges étendus. Par exemple, considérez une extension qui souhaite exécuter un script sur la page actuelle lorsque l'utilisateur·ice clique sur son bouton de la barre d'outils. Sans `activeTab`, l'extension doit demander la permission d'hôte `<all_urls>`, ce qui lui donne beaucoup plus de pouvoir qu'elle n'en a besoin&nbsp;: la capacité d'exécuter des scripts dans _n'importe quel onglet_, à _tout moment_, plutôt que dans l'onglet actif uniquement et uniquement en réponse à une action de l'utilisateur·ice.

Comme `activeTab` fournit un accès limité, les navigateurs n'affichent pas d'avertissement de permission lorsque l'utilisateur·ice installe l'extension.

## Demander la permission `activeTab`

Votre extension demande `activeTab` en utilisant la clé de manifeste [`permissions`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)&nbsp;:

```json
"permissions": ["activeTab"]
```

`activeTab` est une [permission d'API](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#les_permissions_api), et non une [permission d'hôte](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#les_permissions_dhôte).

Il est également possible d'inclure `activeTab` dans [`optional_permissions`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) et de la demander à l'exécution en utilisant {{WebExtAPIRef("permissions.request()")}}. C'est l'une des permissions accordées silencieusement, sans invite de l'utilisateur·ice.

> [!NOTE]
> `activeTab` accorde des privilèges pour un onglet. Elle ne donne pas, en soi, accès à une API. Par exemple, pour injecter un script, votre extension a besoin de la permission `"scripting"` pour utiliser l'API {{WebExtAPIRef("scripting")}}.

## Comment `activeTab` est accordée

Le navigateur accorde `activeTab` lorsque l'utilisateur·ice interagit avec l'extension. Ces interactions sont appelées [actions de l'utilisateur·ice](/fr/docs/Mozilla/Add-ons/WebExtensions/User_actions) et incluent le fait que l'utilisateur·ice&nbsp;:

- cliquer sur le [bouton de la barre d'outils](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ou sur [l'action de page](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) de l'extension.
- sélectionner un élément du menu contextuel de l'extension, ce qui déclenche l'évènement {{WebExtAPIRef("menus.onClicked")}}.
- activer un raccourci clavier défini par l'extension avec l'API {{WebExtAPIRef("commands")}}, ce qui déclenche l'évènement {{WebExtAPIRef("commands.onCommand")}}.
- cliquer sur une suggestion d'extension dans la barre d'adresse (omnibox), ce qui déclenche l'évènement {{WebExtAPIRef("omnibox.onInputEntered")}} (à partir de Firefox 142).

En général, l'onglet auquel `activeTab` est accordée est l'onglet actif. Il y a une exception&nbsp;: une extension peut utiliser l'API {{WebExtAPIRef("menus")}} pour créer un élément de menu qui s'affiche lorsque l'utilisateur·ice effectue un clic contextuel sur un onglet dans la barre d'onglets. Si l'utilisateur·ice sélectionne cet élément de menu, `activeTab` est accordée pour l'onglet cliqué, même s'il n'est pas l'onglet actif.

## Qu'est-ce que `activeTab` accorde

Lorsque `activeTab` est accordée pour un onglet, l'extension peut&nbsp;:

- Injecter du JavaScript ou du CSS dans l'onglet, en utilisant l'API {{WebExtAPIRef("scripting")}} (ou {{WebExtAPIRef("tabs.executeScript()")}} et {{WebExtAPIRef("tabs.insertCSS()")}} dans le manifeste V2). Voir [Charger des scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#charger_des_scripts_de_contenu).
- Lire les propriétés privilégiées de l'objet {{WebExtAPIRef("tabs.Tab")}} de l'onglet&nbsp;: `url`, `title` et `favIconUrl`. Sinon, ces propriétés nécessitent la permission `"tabs"` ou une permission d'hôte correspondante.
- Capturer le contenu de l'onglet avec {{WebExtAPIRef("tabs.captureVisibleTab()")}} (à partir de Firefox 126).
- Lire les règles correspondantes pour l'onglet avec {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}, sans la permission `"declarativeNetRequestFeedback"`.

## Étendue de l'accès

`activeTab` accorde l'accès au script à la page de niveau supérieur dans l'onglet et aux cadres du même origine qu'elle contient. L'exécution de scripts ou la modification des styles à l'intérieur des cadres [inter-origine](/fr/docs/Web/Security/Defenses/Same-origin_policy#accès_réseau_inter-origines) nécessite des [permissions d'hôte](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#les_permissions_dhôte) supplémentaires.

Les [restrictions et limitations](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) qui s'appliquent à des sites et schémas URI particuliers s'appliquent également à `activeTab`. Certaines pages spéciales n'autorisent pas l'injection de scripts, y compris la vue lecteur, view-source, le visualiseur PDF et d'autres pages de l'interface utilisateur intégrée du navigateur.

## Quand l'accès prend fin

L'extension ne peut accéder qu'à l'onglet, ou aux données, qui existaient lorsque l'utilisateur·ice a interagi avec elle. Lorsque l'onglet navigue ailleurs, l'extension perd la permission d'y accéder. Cela signifie que l'extension doit terminer son travail avec l'onglet, ou capturer les données dont elle a besoin, pendant la période accordée. Si l'extension a besoin d'un nouvel accès, l'utilisateur·ice doit répéter l'action.

Le moment où l'accès prend fin varie selon le navigateur, voir [Quand l'accès est révoqué](#quand_laccès_est_révoqué).

## Exemples

Cette extension injecte un script dans la page actuelle lorsque l'utilisateur·ice clique sur son bouton de barre d'outils. Elle n'a besoin d'aucune permission d'hôte.

manifest.json&nbsp;:

```json
{
  "manifest_version": 3,
  "name": "Surbrillance des titres",
  "version": "1.0",
  "permissions": ["activeTab", "scripting"],
  "action": {
    "default_title": "Surbrillance des titres"
  },
  "background": {
    "scripts": ["background.js"]
  }
}
```

background.js&nbsp;:

```js
function surbrillanceTitres() {
  for (const heading of document.querySelectorAll("h1, h2, h3")) {
    heading.style.backgroundColor = "yellow";
  }
}

browser.action.onClicked.addListener((tab) => {
  // activeTab est accordé pour `tab` parce que l'utilisateur·ice a cliqué sur le bouton de la barre d'outils.
  browser.scripting.executeScript({
    target: { tabId: tab.id },
    func: surbrillanceTitres,
  });
});
```

Le même clic rend également les propriétés privilégiées de l'onglet lisibles, donc `tab.url` et `tab.title` contiennent de vraies valeurs plutôt que `undefined`.

### Autres exemples

Ces autres exemples, disponibles dans le dépôt des extensions exemples à <https://github.com/mdn/webextensions-examples>, utilisent la permission `activeTab`&nbsp;:

<table>
  <thead>
    <tr>
      <th>Exemple</th>
      <th>Comment <code>activeTab</code> est utilisé</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/apply-css/"
          >apply-css <sup>(angl.)</sup></a
        >
      </td>
      <td>
        Un clic sur l'action de page accorde l'accès pour injecter ou supprimer du CSS sur l'onglet actif ({{WebExtAPIRef("tabs.insertCSS()")}} et {{WebExtAPIRef("tabs.removeCSS()")}}).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/beastify/"
          >beastify <sup>(angl.)</sup></a
        >
      </td>
      <td>
        Un clic sur l'action du navigateur accorde l'accès pour
        {{WebExtAPIRef("scripting.executeScript()")}} et {{WebExtAPIRef("scripting.insertCSS()")}}
        sur l'onglet actif.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types/"
          >context-menu-copy-link-with-types <sup>(angl.)</sup></a
        >
      </td>
      <td>
        Un clic sur le menu contextuel d'un lien débloque l'accès à la page afin que le lien puisse être copié dans le presse-papiers.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/history-deleter/"
          >history-deleter <sup>(angl.)</sup></a
        >
      </td>
      <td>
        Lit l'URL de l'onglet actif pour déterminer le domaine dont l'historique doit être supprimé.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/menu-demo/"
          >menu-demo <sup>(angl.)</sup></a
        >
      </td>
      <td>Un clic sur un élément de menu débloque l'onglet actif pour la démonstration de manipulation du menu.</td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/webextensions-examples/tree/main/menu-remove-element/"
          >menu-remove-element <sup>(angl.)</sup></a
        >
      </td>
      <td>
        Un clic sur un élément de menu débloque l'accès à la page pour injecter un script qui supprime l'élément sous le curseur.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/script-on-click/"
          >script-on-click <sup>(angl.)</sup></a
        >
      </td>
      <td>
        Un clic sur le bouton de la barre d'outils accorde l'accès pour
        {{WebExtAPIRef("scripting.executeScript()")}} afin d'exécuter un script dans l'onglet actif, sans permissions d'hôte.
      </td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

Firefox, Safari et les navigateurs basés sur Chromium, y compris Chrome et Edge, prennent en charge `activeTab`. Cependant, lorsque cette permission est accordée, ce qu'elle permet et le moment où elle est révoquée varient.

### Actions qui accordent `activeTab`

| Action de l'utilisateur·ice                                           | Chrome            | Firefox            | Safari                                                                                      |
| --------------------------------------------------------------------- | ----------------- | ------------------ | ------------------------------------------------------------------------------------------- |
| Cliquer sur le bouton de la barre d'outils de l'extension             | Oui               | Oui                | Oui                                                                                         |
| Sélectionner l'élément de menu contextuel de l'extension              | Oui               | Oui                | Oui                                                                                         |
| Activer le raccourci clavier de l'extension                           | Oui               | Depuis Firefox 63  | Oui                                                                                         |
| Accepter une suggestion de la barre d'adresse (omnibox)               | Oui               | Depuis Firefox 142 | Non, Safari ne prend pas en charge l'API {{WebExtAPIRef("omnibox")}}                        |
| Sélectionner un élément de menu sur un onglet dans la barre d'onglets | Depuis Chrome 150 | Depuis Firefox 63  | Non, Safari ne prend pas en charge la valeur `tab` de {{WebExtAPIRef("menus.ContextType")}} |

### Capacités accordées

| Capacité                                                                                                                              | Chrome                                             | Firefox                                                                     | Safari  |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------- | ------- |
| Injection de scripts et de feuilles de style de manière programmatique                                                                | Oui                                                | Oui                                                                         | Oui     |
| Propriétés sensibles de {{WebExtAPIRef("tabs.Tab")}} (`url`, `title`, `favIconUrl`)                                                   | Oui                                                | Oui                                                                         | Oui     |
| {{WebExtAPIRef("tabs.captureVisibleTab()")}}                                                                                          | Oui                                                | Depuis Firefox 126                                                          | Oui     |
| Interception des requêtes réseau de l'onglet avec les API {{WebExtAPIRef("webRequest")}} et {{WebExtAPIRef("declarativeNetRequest")}} | Oui, pour l'origine du cadre principal de l'onglet | Non ([bogue Firefox 1617479 <sup>(angl.)</sup>](https://bugzil.la/1617479)) | Inconnu |

Ceci dit, l'accès accordé par les navigateurs avec `activeTab` diffère&nbsp;:

- Firefox et Safari n'accordent l'accès qu'à l'onglet actif.
- Chrome accorde les permissions d'hôte dérivées de l'URL de l'onglet.

La logique de Chrome peut fournir plus d'accès que celle de Firefox, par exemple&nbsp;:

- Un autre onglet avec la même origine peut être scripté dans Chrome, mais pas dans Firefox.
- Un script d'extension (comme un script d'arrière-plan ou un script de fenêtre intrusive) peut effectuer une requête inter-origine vers l'URL de l'onglet dans Chrome, mais pas dans Firefox.
- L'API {{WebExtAPIRef("cookies")}} nécessite des permissions d'hôte pour accéder aux cookies de domaines spécifiques. Chrome le permet avec `activeTab`, tandis que Firefox ne le permet pas.

Cette liste n'est pas exhaustive.

### Quand l'accès est révoqué

Dans tous les navigateurs, la fermeture de l'onglet révoque l'accès. Cependant, les navigations au sein du même document, comme un changement de fragment (hash) ou un appel à {{DOMxRef("History.pushState()")}}, ne le font pas&nbsp;: le document et son origine restent inchangés, donc l'accès est préservé.

Pour les navigations qui chargent un nouveau document, le comportement diffère&nbsp;:

- **Chrome**&nbsp;: l'accès persiste tant que l'onglet reste sur la même origine, y compris lors des rechargements. Il est révoqué lorsque l'onglet navigue vers une origine différente.
- **Safari**&nbsp;: l'accès est lié au document qui se trouve dans l'onglet lorsque l'action de l'utilisateur·ice a eu lieu. Il est révoqué lorsque l'onglet navigue vers une URL différente.
- **Firefox**&nbsp;: l'accès est lié au document qui se trouve dans l'onglet lorsque l'action de l'utilisateur·ice a eu lieu. Toute navigation entraînant un nouveau document met fin à l'accès, et l'utilisateur·ice doit répéter l'action. Si ce document revient depuis le [cache arrière/avant](/fr/docs/Glossary/bfcache), son accès est restauré.

### Autres différences

- **Demandes de permission**&nbsp;: Firefox et Chrome accordent à une extension les permissions d'hôte demandées lors de l'installation, donc `activeTab` évite un avertissement au moment de l'installation. Safari, en revanche, définit par défaut les permissions d'hôte sur «&nbsp;demander&nbsp;», et invite l'utilisateur·ice la première fois que l'extension tente d'accéder à un site, offrant **Autoriser pour un jour** ou **Toujours autoriser**. L'utilisation de `activeTab` évite cette invite, car Safari considère l'interaction de l'utilisateur·ice avec l'extension comme l'octroi.
- **Manifest V2 et V3**&nbsp;: `activeTab` fonctionne de la même manière dans les navigateurs en Manifest V3. Dans Firefox Manifest V2, `activeTab` permet en outre à {{WebExtAPIRef("scripting.executeScript()")}} d'accéder à un iframe avec une origine différente (voir [Bogue 1839200 <sup>(angl.)</sup>](https://bugzil.la/1839200#c3)), mais ce comportement a été supprimé dans MV3.

## Voir aussi

- La clé de manifeste [`permissions`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- La clé de manifeste [`optional_permissions`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)
- [Actions de l'utilisateur·ice](/fr/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [Scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Demander les bonnes permissions <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) sur Extension Workshop
- [La permission «&nbsp;activeTab&nbsp;» <sup>(angl.)</sup>](https://developer.chrome.com/docs/extensions/develop/concepts/activeTab) dans la documentation des extensions Chrome
