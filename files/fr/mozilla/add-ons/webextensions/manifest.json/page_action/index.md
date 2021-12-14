---
title: page_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
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
"page_action": {
  "browser_style": true,
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Une action de page est une icône que votre extension ajoute dans la barre d'URL du navigateur.

Votre extension peut éventuellement fournir une fenêtre contextuelle associée dont le contenu est spécifié en utilisant HTML, CSS et JavaScript.

Si vous fournissez une fenêtre contextuelle, celle-ci est ouverte lorsque l'utilisateur clique sur l'icône, et l'exécution de votre JavaScript dans la fenêtre contextuelle peut gérer l'interaction de l'utilisateur avec elle. Si vous ne fournissez pas de fenêtre contextuelle, un clic événement est envoyé à votre extension aux [scripts d'arrière plan](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_pages) quand l'utilisateur clique sur l'icône.

Vous pouvez également créer et activer des actions de page par programme en utilisant l'[API pageAction](/fr/Add-ons/WebExtensions/API/pageAction).

Les actions de page sont comme les actions de navigateur, mais elles sont associées à des pages Web particulières et non au navigateur dans son ensemble. Si une action est seulement pertinente sur certaines pages, vous devez utiliser une action de page et l'afficher uniquement sur les pages pertinentes. Si une action est pertinente pour toutes les pages ou pour le navigateur lui-même, utilisez une action de navigateur.

Alors que les actions du navigateur sont affichées par défaut, les actions de page sont cachées par défaut. Elles peuvent être affichées pour un onglet particulier en appelant [`pageAction.show()`](/fr/Add-ons/WebExtensions/API/pageAction/show), en passant dans l'ID de l'onglet. Vous pouvez également modifier ce comportement par défaut en utilisant la propriété `show_matches`.

## Syntaxe

La clé `page_action` est un objet qui peut avoir l'une des trois propriétés, toutes optionnelles:

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
        <p>Facultatif, par defaut : <code>false</code>.</p>
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
          Dans Firefox, la feuille de style peut être vue sur
          chrome://browser/content/extension.css, ou
          chrome://browser/content/extension-mac.css sur OS X.
        </p>
        <p>
          Le
          <a href="https://firefoxux.github.io/StyleGuide/#/controls"
            >guide de style Firefox</a
          >
          décrit les classes que vous pouvez appliquer aux éléments de la
          fenêtre contextuelle afin d'obtenir des styles particuliers.
        </p>
        <p>
          L'extension exemple
          <a
            href="https://github.com/mdn/webextensions-examples/tree/master/latest-download"
            >latest-download</a
          >
          utilise <code>browser_style</code> dans sa fenêtre contextuelle.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code></td>
      <td><code>Objet</code> ou <code>Chaîne de caractères</code></td>
      <td>
        <p>Utilisez cette option pour spécifier une icône pour l'action.</p>
        <p>
          Il est recommandé de fournir deux icônes ici, une 19x19 pixels et une
          38x38 pixels, et de les spécifier dans un objet avec les noms de
          propriété "19" et "38", comme ceci:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "19": "geo-19.png",
      "38": "geo-38.png"
    }</pre
        >
        <p>
          Si vous faites cela, le navigateur choisira l'icône de la bonne taille
          selon la densité des pixels de l'écran.
        </p>
        <p>Vous pouvez simplement fournir une chaîne ici :</p>
        <pre class="brush: json">"default_icon": "geo.png"</pre>
        <p>
          Si vous faites cela, l'icône sera mise à l'échelle pour correspondre à
          la barre d'outils et peut sembler floue.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_popup</code></td>
      <td><code>Chaîne de caractères</code></td>
      <td>
        <p>
          Le chemin d'accès à un fichier HTML contenant la spécification de la
          fenêtre contextuelle.
        </p>
        <p>
          Le fichier HTML peut inclure des fichiers CSS et JavaScript utilisant
          des éléments
          <code><a href="/fr/docs/Web/HTML/Element/link">&#x3C;link></a></code>
          et
          <code
            ><a href="/fr/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >, tout comme une page Web normale. Cependant, n'utilisez pas
          <code
            ><a href="/fr/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >
          avec du code intégré, car vous obtiendrez une erreur de politique de
          violation de contenu. Au lieu de cela,
          <code
            ><a href="/fr/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >
          doit utiliser l'attribut
          <code><a href="/fr/docs/Web/HTML/Element/script">src</a></code> pour
          charger un fichier script séparé.
        </p>
        <p>
          Contrairement à une page Web normale, JavaScript en cours d'exécution
          dans la fenêtre contextuelle peut accéder à toutes les
          <a href="/fr/Add-ons/WebExtensions/API">APIs WebExtension</a> (à
          condition, bien sûr, que l'extension ait les
          <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions"
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
      <td><code>Chaîne de caractères</code></td>
      <td>
        <p>
          Info-bulle pour l'icône, affichée lorsque l'utilisateur passe sa
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
      <td><code>hide_matches</code></td>
      <td>
        <code>Tableau de Match Pattern sauf </code> <code>&#x3C;all_urls></code>
      </td>
      <td>
        <p>
          Masquer l'action de page par défaut pour les pages dont les URLs
          correspondent des
          <a href="/fr/Add-ons/WebExtensions/match_patterns"
            >modèles de correspondance</a
          >
          données.
        </p>
        <p>
          Notez que les actions de page sont toujours cachées par défaut à moins
          que <code>show_matches</code> ne soit donné. Par conséquent, il est
          logique d'inclure cette propriété uniquement si
          <code>show_matches</code> est également donné, et dans ce casil
          remplacera les patterns dans <code>show_matches</code>. Par exemple,
          considérez une valeur comme :
        </p>
        <pre class="brush: json">
"page_action": {
  "show_matches": ["https://*.mozilla.org/*"],
  "hide_matches": ["https://developer.mozilla.org/*"]
}</pre
        >
        <p>
          Ceci montre l'action de page par défaut pour toutes les URL HTTPS sous
          le domaine "mozilla.org", à l'exception des pages sous
          "developer.mozilla.org".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>show_matches</code></td>
      <td><code>Tableau de Match Pattern</code></td>
      <td>
        <p>
          Affiche l'action de page par défaut pour les pages dont les URLs
          correspondent à l'un des modèles donnés.
        </p>
        <p>Voir aussi <code>hide_matches</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>pinned</code></td>
      <td><code>Boolean</code></td>
      <td>
        <p>Facultatif, par défaut à <code>true</code>.</p>
        <p>
          Contrôle si l'action de la page doit apparaître dans la barre
          d'emplacement par défaut lorsque l'utilisateur installe l'extension.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Exemple

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }
}
```

Une action de page avec juste une icône spécifiée en 2 tailles différentes. Les scripts d'arrière-plan de l'extension peuvent recevoir des événements de clic lorsque l'utilisateur clique sur l'icône en utilisant un code comme celui-ci :

```js
 browser.pageAction.onClicked.addListener(handleClick);
```

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Où suis-je ?",
  "default_popup": "popup/geo.html"
}
```

Une action de page avec une icône, un titre et une fenêtre contextuelle. Cette dernière s'affiche lorsque l'utilisateur clique sur l'icône.

## Compatibilité du navigateur

{{Compat("webextensions.manifest.page_action")}}

## Voir aussi

- [`browser_action`](/fr/Add-ons/WebExtensions/manifest.json/browser_action)
- [`sidebar_action`](/fr/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser styles](/fr/Add-ons/WebExtensions/user_interface/Browser_styles)
