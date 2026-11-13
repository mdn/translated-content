---
title: Construire une extension multi-navigateur
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
l10n:
  sourceCommit: 8adfa9f21be15f90b5ee73dbfb9bc441038ac55d
---

L'introduction de l'API des extensions de navigateur a permis d'uniformiser l'environnement de développement de ces extensions. Cependant, il existe des différences dans les implémentations de l'API et dans l'étendue de sa couverture entre les navigateurs qui utilisent cette API (les principaux étant Chrome, Edge, Firefox, Opera et Safari).

Pour maximiser la portée de votre extension de navigateur, il est nécessaire de la développer pour au moins deux navigateurs, voire davantage. Cet article examine les principaux défis rencontrés lors de la création d'une extension multi-navigateurs et propose des solutions pour les relever.

> [!NOTE]
> Les principaux navigateurs ont adopté le manifeste V3. Cette version du manifeste offre une meilleure compatibilité entre les environnements d'extensions de navigateur, notamment l'utilisation de l'espace de noms `browser.*` et des promesses pour la gestion des évènements asynchrones. En plus des informations contenues dans ce guide, consultez les guides de migration vers le manifeste V3 pour [Firefox <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/) et [Chrome <sup>(angl.)</sup>](https://developer.chrome.com/docs/extensions/develop/migrate).

## Obstacles pour les extensions multi-navigateur

## Difficultés liées au développement d'extensions multiplateformes

Vous devez tenir compte des points suivants lorsque vous développez une extension multi-plateforme&nbsp;:

- [Espace de noms de l'API](#espace_de_noms_de_lapi)
- [Gérer les évènements asynchrones de l'API](#gérer_les_évènements_asynchrones_de_lapi)
- [Couverture des fonctions de l'API](#couverture_des_fonctions_de_lapi)
- [Contextes d'exécution des scripts de contenu](#contextes_dexécution_des_scripts_de_contenu)
- [Page en arrière-plan et service worker de l'extension (dans Manifest V3)](#page_en_arrière-plan_et_service_worker_de_lextension)
- [Clés du manifeste](#clés_du_manifeste)
- [Empaqueter l'extension](#empaqueter_lextension)
- [Publier l'extension](#publier_lextension)

### Espace de noms de l'API

Il existe deux espaces de noms d'API utilisés par les principaux navigateurs&nbsp;:

- `browser.*`, le standard pour l'API d'extensions. Utilisé à l'origine par Firefox et Safari, pris en charge par Chrome [à partir de la mi-2026 <sup>(angl.)</sup>](https://developer.chrome.com/docs/extensions/develop/concepts/browser-namespace) (c'est-à-dire Chrome 148, Opera 121 et Edge 136, et 4 versions plus tard pour les extensions utilisant [`devtools_page`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)).
- `chrome.*` utilisé par Chrome, Opera et Edge.

Firefox prend également en charge l'espace de noms `chrome.*` pour les API compatibles avec Chrome, principalement pour faciliter le [portage <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/). Cependant, l'utilisation de l'espace de noms `browser.*` est préférée. En plus d'être la norme proposée, `browser.*` utilise des promesses—un mécanisme moderne et pratique pour gérer les évènements asynchrones.

### Gérer les évènements asynchrones de l'API

Avec l'introduction de Manifest V3, tous les principaux navigateurs ont adopté la norme de retour de _[promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)_ à partir des méthodes asynchrones. Firefox et Safari prennent en charge les promesses sur toutes les API asynchrones. À partir de Chrome 121, toutes les API d'extension asynchrones prennent en charge les promesses, sauf indication contraire. Pour les extensions utilisant la clé de manifeste `devtools_page`, Chrome a fourni la prise en charge des promesses dans Chrome 152 (voir [bogue Chrome 500769389 <sup>(angl.)</sup>](https://crbug.com/500769389)).

Dans le Manifest V2, Firefox et Safari supportent les promesses pour les méthodes asynchrones. En même temps, les méthodes de Chrome invoquent des _fonctions de rappel_. Pour des raisons de compatibilité, tous les principaux navigateurs prennent en charge les fonctions de rappel pour toutes les versions du manifeste. Voir la section [Différences historiques](/fr/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#différences_historiques) de la page sur les incompatibilités de Chrome pour plus de détails.

Certains gestionnaires d'évènements de l'API d'extension sont censés répondre de manière asynchrone avec une promesse (`Promise`) ou une fonction de rappel. Par exemple, un gestionnaire de l'évènement `runtime.onMessage` peut [envoyer une réponse asynchrone en utilisant une `Promise`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#envoyer_une_réponse_asynchrone_en_utilisant_une_promesse) ou en utilisant [une fonction de rappel](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#envoyer_une_réponse_asynchrone_en_utilisant_sendresponse). Une `Promise` comme valeur de retour d'un gestionnaire d'évènement est prise en charge dans Firefox et Safari, mais pas encore dans Chrome.

Firefox prend également en charge les fonctions de rappel pour les API qui prennent en charge l'espace de noms `chrome.*`. Cependant, l'utilisation des promesses est recommandée. Les promesses simplifient grandement la gestion des évènements asynchrones, en particulier lorsque vous devez enchaîner des évènements. Si vous souhaitez utiliser l'espace de noms `browser.*` avec des promesses et cibler Chrome 147 ou une version antérieure, vous devez utiliser une prothèse d'émulation ou un mécanisme similaire.

> [!NOTE]
> Si vous n'êtes pas familier avec les différences entre ces deux méthodes, consultez [Obtenir à connaître JavaScript asynchrone&nbsp;: Fonctions de rappel, Promesses et Async/Await <sup>(angl.)</sup>](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) ou la page MDN [Utiliser les promesses](/fr/docs/Web/JavaScript/Guide/Using_promises).

#### Prothèse d'émulation pour l'API WebExtension du navigateur

À partir de Chrome 148, Chrome prend en charge l'espace de noms `browser`, sauf dans les extensions qui incluent une page DevTools. Cette limitation a été supprimée dans Chrome 152 (voir [bogue Chrome 500769389 <sup>(angl.)</sup>](https://crbug.com/500769389)), et l'espace de noms `browser` est devenu disponible pour toutes les extensions Chrome.

Pour tirer parti de l'espace de noms `browser.*` et des promesses dans les versions antérieures, utilisez la [prothèse d'émulation pour l'API WebExtension du navigateur <sup>(angl.)</sup>](https://github.com/mozilla/webextension-polyfill/). Cette prothèse d'émulation gère l'espace de noms de l'API et la gestion des évènements asynchrones dans Firefox, Chrome, Opera et Edge.

> [!NOTE]
> Dans Chrome 152 ou une version ultérieure, la prothèse d'émulation n'a aucun effet.

Pour utiliser la prothèse d'émulation, installez-la dans votre environnement de développement à l'aide de npm ou téléchargez-la directement depuis les [versions GitHub <sup>(angl.)</sup>](https://github.com/mozilla/webextension-polyfill/releases).

Ensuite, référencez `browser-polyfill.js` dans&nbsp;:

- `manifest.json` pour le rendre disponible aux scripts d'arrière-plan et aux scripts de contenu.
- Les documents HTML, tels que les popups `browserAction` ou les pages d'onglet.
- L'appel `executeScript` dans les scripts de contenu injectés dynamiquement chargés par `tabs.executeScript`, lorsqu'il n'a pas été chargé à l'aide d'une déclaration `content_scripts` dans `manifest.json`.

Ainsi, par exemple, ce code `manifest.json` rend la prothèse d'émulation disponible pour les scripts d'arrière-plan&nbsp;:

```json
{
  // …
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Votre objectif est de vous assurer que la prothèse d'émulation s'exécute dans votre extension avant tout autre script qui attend que l'espace de noms de l'API `browser.*` s'exécute.

> [!NOTE]
> Pour plus de détails et d'informations sur l'utilisation de la prothèse d'émulation avec un module bundler, voir le [readme du projet sur GitHub. <sup>(angl.)</sup>](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)

Il existe d'autres options de prothèse d'émulation. Cependant, au moment où nous écrivons ces lignes, aucune des autres options ne fournit la couverture de l'API WebExtension du navigateur offerte par la prothèse d'émulation. Ainsi, lorsque vous n'avez pas choisi Firefox comme cible initiale de navigateur, vos options sont d'accepter les limitations des prothèses d'émulation alternatives, de porter sur Firefox et d'ajouter la prise en charge multi-navigateur, ou de développer votre propre prothèse d'émulation.

### Couverture des fonctions de l'API

Les différences dans les fonctions de l'API offertes par chacun des principaux navigateurs se répartissent en trois grandes catégories&nbsp;:

1. **Manque de prise en charge d'une fonction entière.**
   Par exemple, au moment où nous écrivons ces lignes, Edge ne prend pas en charge la fonction {{WebExtAPIRef("browserSettings")}}.
2. **Variations dans la prise en charge des fonctionnalités au sein d'une fonction.**
   Par exemple, au moment où nous écrivons ces lignes, Firefox ne prend pas en charge la méthode de la fonction de notification {{WebExtAPIRef("notifications.onButtonClicked")}}, tandis que Firefox est le seul navigateur à prendre en charge {{WebExtAPIRef("notifications.onShown")}}.
3. **Fonctions propriétaires, prenant en charge des fonctionnalités spécifiques au navigateur.**
   Par exemple, au moment où nous écrivons ces lignes, les conteneurs sont une fonctionnalité spécifique à Firefox prise en charge par la fonction {{WebExtAPIRef("contextualIdentities")}}.

Des détails sur la prise en charge des API d'extension par les principaux navigateurs ainsi que par Firefox pour Android et Safari sur iOS sont disponibles sur la page de Mozilla Developer Network [Prise en charge des API JavaScript par les navigateurs](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Les informations sur la compatibilité des navigateurs sont également incluses pour chaque fonction et ses méthodes, types et évènements dans les pages de référence des [API JavaScript](/fr/docs/Mozilla/Add-ons/WebExtensions/API) de Mozilla Developer Network.

#### Gérer les différences d'API

Une approche simple pour gérer les différences d'API consiste à limiter les fonctions utilisées dans votre extension aux fonctions offrant la même fonctionnalité sur l'ensemble des navigateurs ciblés. En pratique, cette approche est susceptible d'être trop restrictive pour la plupart des extensions.

À la place, lorsqu'il existe des différences entre les API, vous devez soit proposer des implémentations alternatives, soit des fonctionnalités de secours. (N'oubliez pas&nbsp;: vous devez peut-être également le faire pour tenir compte des différences de prise en charge des API entre les versions d'un _même_ navigateur.)

L'utilisation de vérifications à l'exécution quant à la disponibilité d'une fonction est l'approche recommandée pour mettre en œuvre des fonctionnalités alternatives ou de secours. L'avantage de réaliser une vérification à l'exécution est que vous n'avez pas besoin de mettre à jour et de redistribuer l'extension pour tirer parti d'une fonction lorsqu'elle devient disponible.

Le code suivant vous permet d'effectuer une vérification à l'exécution&nbsp;:

```js
if (typeof <function> === "function") {
   // assurez-vous que la fonction est disponible avant de l'utiliser
}
```

### Contextes d'exécution des scripts de contenu

Les scripts de contenu peuvent accéder au DOM de la page et le modifier, tout comme les scripts de page. Ils peuvent également voir les modifications apportées au DOM par les scripts de page. Cependant, les scripts de contenu obtiennent une vue «&nbsp;propre&nbsp;» du DOM.

Firefox et Chrome utilisent des approches fondamentalement différentes pour gérer ce comportement&nbsp;: dans Firefox, cela s'appelle la vision Xray, tandis que Chrome utilise des mondes isolés. Pour plus de détails, voir la section [Environnement des scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#environnement_de_script_de_contenu) de l'article conceptuel sur les scripts de contenu.

Cependant, Firefox fournit certaines API qui permettent aux scripts de contenu d'accéder aux objets JavaScript créés par les scripts de page et d'exposer leurs objets JavaScript aux scripts de page. Voir [Partager des objets avec les scripts de page](/fr/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) pour plus de détails.

Il existe également des différences entre la [Politique de sécurité du contenu (CSP) pour les scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_pour_les_scripts_de_contenu).

### Page en arrière-plan et service worker de l'extension

Dans le cadre de sa mise en œuvre du manifeste V3, Chrome a remplacé les pages en arrière-plan par des service workers d'extension. Firefox conserve l'utilisation des pages en arrière-plan, tandis que Safari prend en charge les pages en arrière-plan et les service workers.

Pour plus d'informations, voir la section [Compatibilité des navigateurs](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support) de la page de la clé de manifeste `"background"`. Cette section inclut un exemple de mise en œuvre d'un script compatible avec plusieurs navigateurs. L'exemple [script-on-click <sup>(angl.)</sup>](https://github.com/mdn/webextensions-examples/tree/main/script-on-click) fournit une démonstration complète et fonctionnelle de cette approche.

### Clés du manifeste

Les différences pour les clés du fichier [`manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json) se répartissent en trois catégories&nbsp;:

1. **Attributs d'information sur l'extension.**
   Par exemple, au moment de la rédaction, Firefox et Opera incluent la clé [`developer`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#compatibilité_des_navigateurs) pour les informations sur le·la développeur·euse de l'extension.
2. **Fonctionnalités de l'extension.**
   Par exemple, au moment de la rédaction, Chrome ne prend pas en charge la clé [`browser_specific_settings`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#compatibilité_des_navigateurs).
3. **Caractère optionnel des clés.**
   Au moment de la rédaction, en général, seules les clés `"manifest_version"`, `"version"` et `"name"` sont obligatoires.

Les informations sur la compatibilité des navigateurs sont incluses avec chaque clé dans les pages de référence des clés [`manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json) du Mozilla Developer Network.

Comme les fichiers `manifest.json` ont tendance à peu changer—sauf pour les numéros de version, qui peuvent différer entre les différents navigateurs — la création et l'édition d'une version statique pour chaque navigateur est généralement l'approche la plus simple.

### Empaqueter l'extension

L'empaquetage d'une extension pour la distribution par les magasins d'extensions des navigateurs est relativement simple. Firefox, Chrome, Edge et Opera utilisent tous un format zip simple qui nécessite que le fichier `manifest.json` soit à la racine du paquet zip. Safari exige que les extensions soient empaquetées de manière similaire aux applications.

Pour plus de détails sur les méthodes d'empaquetage, veuillez vous référer aux documentations de chaque portail de distribution.

### Publier l'extension

Chacun des principaux navigateurs maintient des magasins d'extensions. Chaque magasin examine également votre extension pour vérifier la présence de vulnérabilités de sécurité.

Par conséquent, vous devez gérer l'ajout et la mise à jour de votre extension pour chaque magasin séparément. Dans certains cas, vous pouvez téléverser votre extension à l'aide d'un utilitaire.

Le tableau qui suit récapitule les approches et fonctionnalités pour chaque magasin&nbsp;:

<table>
  <thead>
    <tr>
      <th>Navigateur</th>
      <th>Frais d'enregistrement</th>
      <th>Utilitaire pour le téléversement</th>
      <th>Processus de revue avant la publication</th>
      <th>Authentification de compte à deux facteurs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><p>Chrome</p></th>
      <td><p>Oui</p></td>
      <td><p>Oui</p></td>
      <td><p>Automatique, moins d'une heure.</p></td>
      <td><p>Oui</p></td>
    </tr>
    <tr>
      <th><p>Edge</p></th>
      <td><p>Non</p></td>
      <td><p>Non</p></td>
      <td><p>Aucun délai garanti.</p></td>
      <td><p>Oui</p></td>
    </tr>
    <tr>
      <th><p>Firefox</p></th>
      <td><p>Non</p></td>
      <td>
        <p>
          <a
            href="https://extensionworkshop.com/documentation/develop/web-ext-command-reference/"
            >web-ext <sup>(angl.)</sup></a
          >
        </p>
      </td>
      <td>
        <p>Automatique, quelques secondes.</p>
        <p>
          Une revue manuelle de l'extension a lieu après la publication et peut
          entraîner la suspension de l'extension dans l'attente des corrections
          nécessaires aux problèmes éventuellement trouvés.
        </p>
      </td>
      <td><p>Non</p></td>
    </tr>
    <tr>
      <th><p>Opera</p></th>
      <td><p>Non</p></td>
      <td><p>Non</p></td>
      <td><p>Manuel, aucun délai garanti.</p></td>
      <td><p>Non</p></td>
    </tr>
    <tr>
      <th><p>Safari</p></th>
      <td><p>Oui</p></td>
      <td><p>Non</p></td>
      <td><p>Oui, selon Apple, en moyenne, 50% des applications sont examinées en 24 heures et plus de 90% sont examinées en 48 heures.</p></td>
      <td><p>Oui</p></td>
    </tr>
  </tbody>
</table>

### Autres considérations

#### Numérotation des versions

Les magasins Firefox, Chrome et Edge exigent que chaque version téléversée ait un numéro de version différent. Cela signifie que vous ne pouvez pas revenir à un numéro de version antérieur si vous rencontrez des problèmes dans une version.

## Conclusion

Lorsqu'on aborde le développement d'une extension multiplateforme, on peut utiliser l'espace de noms `browser.*` et les promesses dans une implémentation Firefox. Vous pouvez le faire en sachant que ces fonctionnalités sont prises en charge à partir de Chrome 148. Si vous souhaitez cibler des versions antérieures de Chrome, vous pouvez alors utiliser une [prothèse d'émulation de l'API WebExtension pour le navigateur <sup>(angl.)</sup>](https://github.com/mozilla/webextension-polyfill/).

La majeure partie de votre travail multiplateforme consiste probablement à gérer les variations entre les fonctionnalités de l'API prises en charge par les principaux navigateurs. Vous devez également tenir compte des différences entre les implémentations des scripts de contenu et des scripts d'arrière-plan. La création de vos fichiers `manifest.json` doit être relativement simple et quelque chose que vous pouvez faire manuellement. Vous devez ensuite tenir compte des variations dans les processus d'envoi à chaque magasin d'extensions.

En suivant les conseils de cet article, vous devez être en mesure de créer une extension qui fonctionne correctement sur l'ensemble des quatre principaux navigateurs, vous permettant ainsi de proposer les fonctionnalités de votre extension à un plus grand nombre d'utilisateur·ice·s.
