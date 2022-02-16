---
title: browser_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"browser_action": {
  "browser_style": true,
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html",
  "theme_icons": [{
    "light": "icons/geo-16-light.png",
    "dark": "icons/geo-16.png",
    "size": 16
  }, {
    "light": "icons/geo-32-light.png",
    "dark": "icons/geo-32.png",
    "size": 32
  }]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Une action de navigateur est un bouton que votre extension ajoute à la barre d'outils du navigateur. Le bouton comporte une icône et peut éventuellement avoir une fenêtre contextuelle dont le contenu est spécifié à l'aide de HTML, CSS et JavaScript.

Si vous fournissez une fenêtre contextuelle, la fenêtre contextuelle est ouverte lorsque l'utilisateur clique sur le bouton, et votre JavaScript s'exécute dans la fenêtre contextuelle permettant l'interaction de l'utilisateur avec elle. Si vous ne fournissez pas de popup, un événement de clic est envoyé aux [scripts d'arrière-plan](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts) de votre extension lorsque l'utilisateur clique sur le bouton.

Vous pouvez également créer et manipuler des actions de navigateur de manière programmée à l'aide de l'[API browserAction](/fr/Add-ons/WebExtensions/API/browserAction).

## Syntaxe

La clé `browser_action` est un objet qui peut avoir l'une des propriétés suivantes, toutes optionnelles :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>browser_style</code></td>
      <td><code>Booléen</code></td>
      <td>
        <p>Facultatif, par défaut à <code>false</code>.</p>
        <p>
          Utilisez-le pour inclure une feuille de style dans votre popup qui le
          rendra cohérent avec l'interface utilisateur du navigateur et avec
          d'autres extensions qui utilisent la propriété
          <code>browser_style</code>. Bien que cette touche par défaut soit
          <code>false</code>, il est recommandé de l'inclure et de la mettre à
          <code>true</code> afin de rendre vos fenêtres contextuelles cohérentes
          avec l'apparence du reste de l'interface utilisateur du navigateur.
        </p>
        <p>
          Dans Firefox, la feuille de style peut être vue
          à chrome://browser/content/extension.css, ou
          chrome://browser/content/extension-mac.css sur OS X. Lorsque vous
          définissez les dimensions, sachez que cette feuille de style définit
          actuellement  <code>box-sizing: border-box</code> (voir
          <a href="/docs/Web/CSS/box-sizing">box-sizing</a>).
        </p>
        <p>
          Les
          <a href="/fr/Add-ons/WebExtensions/user_interface/Browser_styles"
            >Browser styles</a
          >
          décrivent les classes que vous pouvez appliquer aux éléments dans le
          popup afin d'obtenir des styles particuliers.
        </p>
        <p>
          L'extension de l'exemple
          <a
            href="https://github.com/mdn/webextensions-examples/tree/master/latest-download"
            >latest-download</a
          >
          utilise <code>browser_style</code> dans son popup.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_area</code></td>
      <td>Chaîne de caractères</td>
      <td>
        <p>
          Définit la partie du navigateur dans laquelle le bouton est
          initialement placé. Il s'agit d'une chaîne qui peut prendre l'une des
          quatre valeurs suivantes:
        </p>
        <ul>
          <li>
            "navbar" : le bouton est placé dans la barre d'outils principale du
            navigateur, à côté de la barre d'URL.
          </li>
          <li>"menupanel" : le bouton est placé dans un panneau contextuel.</li>
          <li>
            "tabstrip" : le bouton est placé dans la barre d'outils qui contient
            les onglets du navigateur.
          </li>
          <li>
            "personaltoolbar" : le bouton est placé dans la barre d'outils des
            signets
          </li>
        </ul>
        <p>Cette propriété est seulement supportée dans Firefox.</p>
        <p>Cett propriété est facultative, et defaut à "navbar".</p>
        <p>
          Firefox se souvient des paramètres <code>default_area</code> d'une
          extension,  même si cette extension est désinstallée et réinstallée
          par la suite. Pour forcer le navigateur à reconnaître une nouvelle
          valeur pour  <code>default_area</code>, l'identifiant de l'extension
          doit être modifié.
        </p>
        <p>
          Une extension ne peut pas changer l'emplacement du bouton après son
          installation, mais l'utilisateur doit pouvoir déplacer le bouton en
          utilisant le mécanisme de personnalisation du navigateur.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code></td>
      <td><code>Objet</code> ou chaîne de caractères</td>
      <td>
        <p>
          Utilisez cette option pour spécifier une ou plusieurs icônes pour le
          bouton d'action du navigateur. L'icône est affichée dans la barre
          d'outils du navigateur par défaut.
        </p>
        <p>
          Les icônes sont spécifiées comme des URL relatives dans le fichier
          manifest.json lui-même.
        </p>
        <p>
          Vous pouvez spécifier un seul fichier d'icône en fournissant une
          chaîne ici:
        </p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Pour spécifier plusieurs icônes dans différentes tailles, spécifiez
          ici un objet. Le nom de chaque propriété est la hauteur de l'icône en
          pixels et doit être converti en un nombre entier. La valeur est l'URL.
          Par exemple:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>Vous ne pouvez pas spécifier plusieurs icônes de la même taille.</p>
        <p>
          Voir
          <a
            href="/fr/Add-ons/WebExtensions/manifest.json/browser_action#Choosing_icon_sizes"
            >Choisir les tailles des icones</a
          >
          pour plus de conseils à ce sujet.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_popup</code></td>
      <td>chaîne de caractères</td>
      <td>
        <p>
          Le chemin d'accès à un fichier HTML contenant la spécification de la
          fenêtre contextuelle.
        </p>
        <p>
          Le fichier HTML peut inclure des fichiers CSS et JavaScript en
          utilisant des éléments
          <code><a href="/fr/docs/Web/HTML/Element/link">&#x3C;link></a></code>
          et
          <code
            ><a href="/fr/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >, tout comme une page Web normale. Cependant,
          <code
            ><a href="/fr/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >
          doit avoir l'attribut
          <code><a href="/fr/docs/Web/HTML/Element/script">src</a></code> pour
          charger un fichier. N'utilisez pas
          <code
            ><a href="/fr/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >
          avec du code intégré, car vous obtiendrez une erreur de politique de
          violation de contenu confuse.
        </p>
        <p>
          Contrairement à une page Web normale, JavaScript en cours d'exécution
          dans la fenêtre contextuelle peut accéder à toutes les
          <a href="/fr/Add-ons/WebExtensions/API">APIs WebExtension</a> (soumis,
          bien sûr, à l'extension possédant les
          <a
            href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >permissions</a
          >
          appropriées).
        </p>
        <p>
          Ceci est une
          <a
            href="/fr/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json"
            >propriété localisable</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_title</code></td>
      <td>chaîne de caractères</td>
      <td>
        <p>
          Info-bulle pour le bouton, affichée lorsque l'utilisateur passe sa
          souris dessus.
        </p>
        <p>
          Ceci est une
          <a
            href="/fr/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json"
            >propriété localisable</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>theme_icons</code></td>
      <td><code>Tableau</code></td>
      <td>
        <p>
          Cette propriété vous permet de spécifier différentes icônes pour les
          thèmes selon que Firefox détecte que le thème utilise du texte sombre
          ou clair.
        </p>
        <p>
          Si cette propriété est présente, il s'agit d'un tableau contenant au
          moins un objet <code>ThemeIcons</code>. Un objet
          <code>ThemeIcons</code> contient trois propriétés obligatoires :
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            Une URL pointant vers une icône. Cette icône s'affiche lorsqu'un
            thème utilisant du texte sombre est actif (tel que, le thème Light
            de Firefox et le thème Default si default_icon n'est pas spécifié).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            Une URL pointant vers une icône. Cette icône s'affiche lorsqu'un
            thème utilisant du texte clair est actif (tel que, le thème sombre
            de Firefox).
          </dd>
          <dt><code>"size"</code></dt>
          <dd>La taille des deux icônes en pixels.</dd>
        </dl>
        <p>
          Les icônes sont spécifiées en tant qu'URL par rapport au fichier
          manifest.json lui-même.
        </p>
        <p>
          Vous devez fournir un <code>ThemeIcons</code> en taille 16x16 et un en
          taille 32x32 (pour l'affichage de la rétine).
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Choisir les tailles des icônes

L'icône de l'action du navigateur peut devoir être affichée dans différentes tailles dans différents contextes:

- L'icône est affichée par défaut dans la barre d'outils du navigateur, mais l'utilisateur peut la déplacer dans le panneau de menu du navigateur (le panneau qui s'ouvre lorsque l'utilisateur clique sur l'icône  "hamburger"). L'icône dans la barre d'outils est plus petite que l'icône dans le panneau de menu.
- Sur un écran haute densité comme un écran Retina, les icônes doivent être deux fois plus grandes.

Si le navigateur ne peut pas trouver une icône de la bonne taille dans une situation donnée, il choisira la meilleure correspondance et la mettra à l'échelle. Cette correction peut donner une apparence floue à l'icône, il est donc important de choisir attentivement les tailles d'icône.

Il y a deux approches principales pour cela. Vous pouvez fournir une seule icône en tant que fichier SVG, et elle sera mise à l'échelle correctement :

```json
"default_icon": "path/to/geo.svg"
```

Ou vous pouvez fournir plusieurs icônes dans différentes tailles, et le navigateur choisira la meilleure.

Dans Firefox:

- La hauteur par défaut des icônes dans la barre d'outils est 16 \* [`window.devicePixelRatio`](/fr/docs/Web/API/Window/devicePixelRatio).
- La hauteur par défaut pour les icônes dans le panneau de menu est 32 \* [`window.devicePixelRatio`](/fr/docs/Web/API/Window/devicePixelRatio).

Vous pouvez donc spécifier des icônes qui correspondent exactement, à la fois aux affichages normaux et à Retina, en fournissant trois fichiers d'icônes et en les spécifiant comme suit:

```json
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png",
      "64": "path/to/geo-64.png"
    }
```

Si Firefox ne peut pas trouver une correspondance exacte pour la taille qu'il veut, alors il choisira l'icône la plus petite spécifiée qui est plus grande que la taille idéale. Si toutes les icônes sont plus petites que la taille idéale, elle choisira la plus grande icône spécifiée.

## Exemple

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Une action de navigateur avec juste une icône, spécifiée en 2 tailles différentes. Les scripts d'arrière-plan de l'extension peuvent recevoir des événements de clic lorsque l'utilisateur clique sur l'icône en utilisant un code comme celui-ci :

```js
 browser.browserAction.onClicked.addListener(handleClick);
```

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

Une action de navigateur avec une icône, un titre et une fenêtre contextuelle. Celle-ci s'affiche lorsque l'utilisateur clique sur le bouton.

Pour une extension simple, mais complète, qui utilise une action de navigateur, consultez le [tutoriel pas à pas](/fr/Add-ons/WebExtensions/Your_second_WebExtension).

## Compatibilité du navigateur

{{Compat("webextensions.manifest.browser_action", 10)}}

## See also

- [`page_action`](/fr/Add-ons/WebExtensions/manifest.json/page_action)
- [`sidebar_action`](/fr/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser styles](/fr/Add-ons/WebExtensions/user_interface/Browser_styles)
