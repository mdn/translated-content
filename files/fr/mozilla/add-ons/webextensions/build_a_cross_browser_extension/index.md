---
title: Construction d'une extension multi-navigateur
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
---

{{AddonSidebar()}}

L'introduction de l'API WebExtension a créé un paysage plus homogène pour le développement des extensions des navigateurs. Cependant, parmi les navigateurs qui utilisent les API d'extensions (les principaux étant Chrome, Firefox, Opera et Edge), il existe des différences à la fois dans l'implémentation de l'API et dans la couverture des différentes fonctionnalités. Par ailleurs, Safari utilise ses propres extensions Safari Extensions JS.

Maximiser la portée de votre extension de navigateur signifie la développer pour au moins deux navigateurs différents, voire plus. Cet article examine six des principaux défis rencontrés lors de la création d'une extension multi-navigateur, et dans chaque cas, suggère comment relever ce défi.

Cet article ne traite pas de la création d'extensions de navigateur pour Safari. Il est possible de partager certaines ressources avec une extension Safari, comme des images et du contenu HTML. Cependant, le développement JavaScript doit être entrepris comme un projet de développement séparé, à moins que vous ne souhaitiez créer votre propre prothèse (_polyfill_).

## Obstacles pour les extensions multi-navigateur

Il existe six domaines que vous devez aborder lorsque vous souhaitez développer une extension multiplateforme :

- L'espace de noms utilisé par l'API
- La gestion asynchrone des événements par l'API
- La couverture des fonctions de l'API
- Les clés du manifeste
- L'empaquetage d'une extension
- La publication

### Les espaces de noms des API

Deux espaces de noms (_namespaces_) sont utilisés pour les quatre principaux navigateurs :

- `browser.*`, l'espace standard de l'API, utilisé par Firefox et Edge.
- `chrome.*`, utilisé par Chrome et Opera.

Firefox prend également en charge l'espace de noms `chrome.*` pour les API compatibles avec Chrome, principalement pour faciliter le [portage](/fr/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension). Cependant, il est préférable d'utiliser l'espace de nommage `browser.*`. En plus d'être la norme proposée, `browser.*` utilise des promesses — un mécanisme moderne et pratique pour gérer les événements asynchrones.

Ce n'est que dans les extensions les plus triviales que l'espace de nom sera probablement le seul problème multiplateforme à résoudre. Il est donc rarement, voire jamais, utile d'essayer d'aborder cette seule question. La meilleure approche consiste à traiter ce problème avec une gestion asynchrone des événements.

### Gestion asynchrone des événements

Il existe deux approches pour gérer les événements asynchrones utilisées par les quatre principaux navigateurs :

- [Les promesses](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise), le standard proposé pour l'API d'extensions, utilisé par Firefox.
- Les _callbacks_ (fonctions de rappel), utilisés par Chrome, Edge, et Opera.

Firefox prend également en charge les _callbacks_ pour les API qui prennent en charge l'espace de noms `chrome.*`. Cependant, il est recommandé d'utiliser des promesses (et l'espace de noms `browser.*` du navigateur). Des promesses ont été adoptées dans le cadre de la norme proposée. Cette approche simplifie grandement la gestion asynchrone des événements, en particulier lorsque vous devez enchaîner des événements.

> **Note :** Si vous n'êtes pas familier avec les différences entre ces deux méthodes, jetez un coup d'oeil à [Apprendre à connaître le JavaScript asynchrone : Rappels, promesses et synchronisation/attente](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) ou la page sur [l'utilisation des promesses](/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses) de MDN.

#### Polyfill pour l'API WebExtension du navigateur

Alors, comment tirer profit des promesses facilement, alors que Firefox est le seul navigateur qui les supporte ? La solution est de coder pour Firefox en utilisant des promesses et d'utiliser le [_polyfill_ pour l'API WebExtension du navigateur](https://github.com/mozilla/webextension-polyfill/).

Pour utiliser le _polyfill_, installez-le dans votre environnement de développement à l'aide de npm ou téléchargez-le directement depuis les [versions de GitHub](https://github.com/mozilla/webextension-polyfill/releases)

Vous référencerez alors `browser-polyfill.js` dans :

- `manifest.json`, pour mettre à disposition des scripts de fond et de contenu.
- Les documents HTML, tels que les popups `browserAction` ou les pages d'onglet.
- L'appel à `executeScript` dans les scripts de contenu dynamiquement injectés chargés par `tabs.executeScript`, où il n'a pas été chargé en utilisant une déclaration `content_scripts` dans manifest.json.

Ainsi, par exemple, ce code `manifest.json` rend le _polyfill_ disponible pour vos scripts d'arrière-plan :

```json
{
  // ...
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

Votre but est de vous assurer que le _polyfill_ s'exécute dans votre extension avant tout autre script qui attend le `browser.*` API namespace s'exécute.

> **Note :** Pour plus de détails et d'informations sur l'utilisation du _polyfill_ avec un module bundler, voir le [readme du projet sur GitHub.](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)

Il existe d'autres options de _polyfill_ mais, au moment où nous écrivons ces lignes, aucune ne fournit une couverture équivalente à ce _polyfill_ pour l'API WebExtension du navigateur. Ainsi, lorsque vous n'avez pas choisi Firefox comme cible initiale de navigateur, vos options sont d'accepter les limitations des _polyfills_ alternatifs, de porter sur Firefox et d'ajouter la prise en charge multi-navigateur, ou de développer votre propre _polyfill_.

### Couverture des différentes implémentations d'API

Les différences de fonctionnalités offertes par les différents navigateurs peuvent se répartir en trois catégories :

1. **L'absence de prise en charge d'une fonctionnalité à part entière.**
2. **Les variations de prise en charge pour certains aspects d'une fonctionnalité.** Au moment où nous écrivons ces lignes, Firefox ne prend pas en charge la méthode [`onButtonClicked`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked#browser_compatibility) mais est le seul navigateur qui prend en charge [`onShown`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown#browser_compatibility).
3. **Les fonctionnalités propriétaires spécifiques à chaque navigateur.** Au moment où nous écrivons ces lignes, les conteneurs sont une fonctionnalité spécifique à Firefox qui est donc le seul à prendre en charge la fonction [`contextualIdentities`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities#browser_compatibility).

Vous pouvez trouver plus de détails sur la prise en charge de l'API pour les différents navigateurs sur [La prise en charge des API JavaScript WebExtension pour les différents navigateurs](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs). Les informations de compatibilité sont également disponibles sur chaque page de la [référence des API JavaScript WebExtension](/fr/docs/Mozilla/Add-ons/WebExtensions/API).

#### Handling API differences

Une approche simple pour gérer ces différences consiste à limiter les fonctionnalités utilisées par une extension afin que celle-ci puisse fonctionner sur différents navigateurs. Toutefois, en pratique, cette approche se révèlera souvent trop restrictive.

À la place, on peut utiliser des implémentations alternatives ou des fonctionnalités de recours dans ces cas. Cela peut également s'avérer utile pour gérer les différences d'implémentation entre les différentes versions d'un même navigateur

L'utilisation de vérifications à l'exécution quant à la disponibilité d'une fonctionnalité est une approche recommandée qui permet d'implémenter ou d'utiliser des alternatives à bon escient. L'avantage d'une vérification à l'exécution est que si la fonction devient disponible, il n'est pas nécessaire de mettre à jour ou de redistribuer l'extension à nouveau.

Le fragment de code suivant vous permet de vérifier l'existance d'une fonction lors de l'exécution :

```js
if (typeof <function> === "function") {
   // safe to use the function
}
```

### Les clés de manifeste

Les différences pour les clés du fichier [`manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) se répartissent en trois catégories :

1. **Les attributs d'information sur l'extension.** Firefox et Opera incluent la clé [`developer`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility) pour fournir des détails quant à la développeuse ou au développeur de l'application et la clé [`author`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author#browser_compatibility).
2. **Les fonctionnalités rattachées à l'extension.** Edge ne prenait pas en charge la clé [`commands`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#browser_compatibility) qui permet de définir des raccourcis clavier pour une extension.
3. **Le caractère optionnel d'une clé.** Ainsi, la clé [`author`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author#browser_compatibility) était obligatoire dans Edge mais optionnelle pour les autres navigateurs.

Les informations quant à la compatibilité de chaque clé de manifeste sont incluses dans les pages de référence correspondantes.

Le fichier `manifest.json` évolue peu entre les différentes versions (exception faite du numéro de version). Il est parfois judicieux d'avoir une version statique différente pour chaque navigateur.

### Empaquetage des extensions

L'empaquetage d'une extension pour la distribuer via les plateformes des navigateurs est uniforme .

- Firefox, Chrome, et Opera utilise une archive ZIP dans laquelle le fichier `manifest.json` doit être à la racine.
- Pour Microsoft, des étapes supplémentaires sont nécessaires.

Pour plus de détails sur les méthodes d'empaquetage, veuillez vous référer aux documentations de chaque portail de distribution.

### Publication des extensions

Chaque navigateur majeur possède une plateforme de distribution d'extension. Chacun de ces magasins effectue une revue de l'extension pour vérifier la présence de vulnérabilités.

Aussi, il faudra gérer l'inscription et la mise à jour d'une extension séparément pour chaque distributeur. Dans certains cas, il est possible d'uploader son extension avec un utilitaire.

Le tableau qui suit récapitule les approches et fonctionnalités pour chaque plateforme de distribution :

<table>
  <thead>
    <tr>
      <th>Navigateur</th>
      <th>Frais d'enregistrement</th>
      <th>Utilitaire pour l'<i>upload</i></th>
      <th>Processus de revue avant la publication</th>
      <th>Authentification multi-facteur</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Firefox</th>
      <td>Non</td>
      <td>
        <a
          href="https://extensionworkshop.com/documentation/develop/web-ext-command-reference/"
          >web-ext</a
        >
      </td>
      <td>Automatique, quelques secondes<sup>1</sup></td>
      <td>Non</td>
    </tr>
    <tr>
      <th>Chrome</th>
      <td>Oui</td>
      <td>Oui</td>
      <td>Automatique, moins d'une heure</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Opera</th>
      <td>Non</td>
      <td>Non</td>
      <td>Manuel, aucun délai garanti</td>
      <td>Non</td>
    </tr>
    <tr>
      <th>Edge</th>
      <td>Oui</td>
      <td>Non</td>
      <td>Manuel, jusqu'à 72 heures<sup>2</sup></td>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

<sup>1</sup> Une revue manuelle de l'extension a lieu après la publication et peut entraîner la suspension de l'extension dans l'attente des corrections nécessaires aux problèmes éventuellement trouvés.

<sup>2</sup> Au moment où nous écrivons ces lignes, Microsoft approuvait uniquement la publication d'extensions pré-approuvées.

### Autres considérations

#### Nommage des extensions

Microsoft requiert un nom unique pour chaque extension et permet de revendiquer un ou plusieurs noms pour une extension via Windows Dev Center. Aussi, il peut être prudent de réserver un nom pour votre extension dès à présent, même si vous ne prévoyez pas de prendre en charge Edge immédiatement.

Aucune des autres plateformes n'impose de restrictions quant au nom de l'extension.

#### Numérotation des versions

Les plateformes de distribution pour Firefox et Chrome requièrent un numéro de version distinct et croissant pour chaque _upload_. Cela signifie qu'on ne peut pas revenir à un numéro de version antérieur s'il y a un problème sur une version.

#### Partage des ressources

Lorsque vous développez une extension pour Safari, vous pouvez réutiliser les éléments suivants entre vos différentes implémentations :

- Images
- HTML
- CSS

## Conclusion

Lorsqu'on souhaite développer une extension pour les différents navigateurs, on pourra résoudre certaines des différences d'implémentation en visant initialement Firefox et en utilisant [le _polyfill_ pour les API WebExtension](https://github.com/mozilla/webextension-polyfill/). Avec cette approche, on pourra bénéficier des fonctionnalités d'API proches du standard et exploiter les promesses pour la gestion asynchrone des évènements.

La majeure partie du travail d'adaptation consistera à gérer les variations de fonctionnalités entre les différentes implémentations et les différences du fichier manifeste (`manifest.json`) ; ce dernier pouvant être créé manuellement. L'empaquetage et la distribution contiennent également quelques différences en fonction des plateformes.

Vous pouvez utiliser [browser-extension-template](https://github.com/notlmn/browser-extension-template) pour rapidement mettre en place un projet d'extension, l'empaqueter et la publier.

Avec les informations de cet article, vous devriez être en mesure de créer une extension qui fonctionne correctement sur l'ensemble des principaux navigateurs, permettant ainsi au plus grand nombre d'utiliser votre extension.
