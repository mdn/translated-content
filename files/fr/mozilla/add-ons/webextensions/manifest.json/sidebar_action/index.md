---
title: sidebar_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Objet</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"sidebar_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "My sidebar",
  "default_panel": "sidebar/sidebar.html",
  "open_at_install":true
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Une [barre latérale](/fr/Add-ons/WebExtensions/Sidebars) est un volet qui s'affiche à gauche de la fenêtre du navigateur, à côté de la page Web. Le navigateur fournit une interface qui permet à l'utilisateur de voir les barres latérales actuellement disponibles et de sélectionner celle à afficher.

La clé `sidebar_action` vous permet de définir les propriétés par défaut de la barre latérale. Vous pouvez modifier ces propriétés lors de l'exécution à l'aide de l'API {{WebExtAPIRef("sidebarAction")}}.

## Syntaxe

La clé `sidebar_action` est un objet qui peut avoir l'une des propriétés listées ci-dessous. La seule propriété obligatoire est `default_panel`.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a
            href="/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles"
            >browser_style</a
          ></code
        >
      </td>
      <td><code>Booléen</code></td>
      <td>
        <p>Facultatif, par défaut : <code>true</code> .</p>
        <p>
          Utilisez cette option pour inclure une feuille de style dans votre
          fenêtre contextuelle qui permettra la correspondance avec l'interface
          utilisateur du navigateur et les autres extensions qui utilisent la
          propriété <code>browser_style</code>.
        </p>
        <p>
          Dans Firefox, la feuille de style peut être vue sur 
          chrome://browser/content/extension.css, ou
          chrome://browser/content/extension-mac.css sur OS X. Lors de la
          définition des dimensions, savez que cette feiulle de style est
          actuellement définit <code>box-sizing: border-box</code> (see
          <a href="/docs/Web/CSS/box-sizing">box-sizing</a>).
        </p>
        <p>
          Le
          <a href="https://firefoxux.github.io/StyleGuide/#/controls"
            >guide de style de Firefox</a
          >
          décrit les classes que vous pouvez appliquer aux éléments de la barre
          latérale afin d'obtenir des styles particuliers.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code></td>
      <td><code>Objet</code> ou <code>Chaîne de caractères</code></td>
      <td>
        <p>
          Utilisez cette option pour spécifier une ou plusieurs icônes pour la
          barre latérale. L'icône est affichée dans l'interface utilisateur du
          navigateur pour l'ouverture et la fermeture des barres latérales.
        </p>
        <p>
          Les icônes sont spécifiées comme des URL relatives au fichier
          manifest.json lui-même.
        </p>
        <p>
          Vous pouvez spécifier un seul fichier d'icône en fournissant une
          chaîne ici :
        </p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Pour spécifier plusieurs icônes dans différentes tailles, spécifiez
          ici un objet. Le nom de chaque propriété est la hauteur de l'icône en
          pixels convertie en un nombre entier. La valeur est l'URL. Par
          exemple:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          Voir
          <a
            href="/fr/Add-ons/WebExtensions/manifest.json/browser_action#Choosing_icon_sizes"
            >Choix de la taille d'icones</a
          >
          pour plus de conseils sur ce sujet.
        </p>
        <p>
          Cette propriété est optionnelle : si elle est omise, la barre latérale
          n'obtient pas d'icône.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_panel</code></td>
      <td><code>Chaîne de caractères</code></td>
      <td>
        <p>
          Le chemin d'accès à un fichier HTML qui spécifie le contenu de la
          barre latérale.
        </p>
        <p>
          Le fichier HTML peut inclure des fichiers CSS et JavaScript à l'aide
          des éléments
          <code><a href="/fr/docs/Web/HTML/Element/link">&#x3C;link></a></code>
          et
          <code
            ><a href="/fr/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >, tout comme une page Web normale.
        </p>
        <p>
           Contrairement à une page Web normale, JavaScript en cours d'exécution
          dans le panneau peut accéder à toutes les
          <a href="/fr/Add-ons/WebExtensions/API">APIs des WebExtension</a> (à
          condition, bien sûr, que l'extension ait les
          <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions"
            >permissions</a
          >
          appropriées).
        </p>
        <p>Cette propriété est obligatoire.</p>
        <p>
          C'est une
          <a
            href="/fr/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json"
            >propriété localisable</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_title</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Titre de la barre latérale. Ceci est utilisé dans l'interface
          utilisateur du navigateur pour la liste et l'ouverture des barres
          latérales, et s'affiche en haut de la barre latérale lorsqu'elle est
          ouverte.
        </p>
        <p>
          Cette propriété est facultative : si elle est omise, le titre de la
          barre latérale est le
          <code
            ><a href="/fr/Add-ons/WebExtensions/manifest.json/name"
              >nom</a
            ></code
          >
          de l'extension.
        </p>
        <p>
          C'est une
          <a
            href="/fr/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json"
            >propriété localisable.</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td><code>open_at_install</code></td>
      <td>Boolean</td>
      <td>
        Facultatif, par défaut à <code>true</code>. Détermine si la barre
        latérale doit s'ouvrir lors de l'installation. Le comportement par
        defaut est d'ouvrir la barre latérale lorsque l'installation est
        terminée.
      </td>
    </tr>
  </tbody>
</table>

## Exemple

```json
"sidebar_action": {
  "default_icon": "sidebar.svg",
  "default_title": "Ma barre latérale !",
  "default_panel": "sidebar.html",
  "browser_style": true
}
```

Pour un exemple simple d'une extension qui utilise une barre latérale, regarder  [annotate-page](https://github.com/mdn/webextensions-examples/tree/master/annotate-page).

## Compatibilité du navigateur

{{Compat("webextensions.manifest.sidebar_action")}}

## Voir aussi

- [`browser_action`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`page_action`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [Browser styles](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
