---
title: options_ui
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_ui
---

{{AddonSidebar}}

<table class="standard-table" style="height: 166px; width: 852px">
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
        <pre class="brush: json;">
"options_ui": {
  "page": "options/options.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé `options_ui` pour définir une [page d'options](/fr/Add-ons/WebExtensions/Options_pages) pour votre extension.

La page d'options contient des paramètres pour l'extension. L'utilisateur peut y accéder à partir du gestionnaire des extensions du navigateur, et vous pouvez l'ouvrir à partir de votre extension à l'aide de {{WebExtAPIRef("runtime.openOptionsPage()")}}.

Vous spécifiez `options_ui` comme un chemin vers un fichier HTML intégré à votre extension. Le fichier HTML peut inclure des fichiers CSS et JavaScript, tout comme une page Web normale. Contrairement à une page normale, le JavaScript peut utiliser toutes les [APIs WebExtension](/fr/Add-ons/WebExtensions/API) pour lesquelles l'extension possède des [permissions](/fr/Add-ons/WebExtensions/manifest.json/permissions). Cependant, il fonctionne dans un "scope" différent de celui de vos scripts d'arrière plan.

Si vous souhaitez **partager** des données ou des fonctions, entre JavaScript sur votre **page d'options** et vos **scripts d'arrière-plan**, vous pouvez le faire directement en obtenant une référence à la [fenêtre](/fr/docs/Web/API/Window) de vos scripts d'arrière-plan avec {{WebExtAPIRef("extension.getBackgroundPage()")}}, ou une référence à {{domxref("Window")}} de l'une des pages s'exécutant dans votre extension avec {{WebExtAPIRef("extension.getViews()")}}. Ou, vous pouvez faire communiquer le JavaScript de votre page d'options et vos scripts en arrière-plan à l'aide de {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, ou {{WebExtAPIRef("runtime.connect()")}}.

Ces derniers (ou les équivalents {{WebExtAPIRef("runtime.Port")}} peuvent également être utilisés pour partager des options entre vos [scripts d'arrière-plan](/fr/Add-frs/WebExtensions/Background_scripts) et vos **[scripts de contenu.](/fr/Add-ons/WebExtensions/Content_scripts)**

En général, vous souhaiterez stocker les options modifiées sur les pages d'options à l'aide de {{WebExtAPIRef("storage", "storage API", "", "true")}} soit dans {{WebExtAPIRef("storage.sync()")}} (si vous souhaitez que les paramètres soient synchronisés sur toutes les instances du navigateur auxquelles l'utilisateur est connecté), ou {{WebExtAPIRef("storage.local()")}} (si les paramètres sont locaux, dans la machine/le profil actuel). Si vous le faites et que votre (vos) [scripts d'arrière plan](/fr/Add-ons/WebExtensions/Background_scripts) (ou [script(s) de contenus](/fr/docs/)) doit connaître le changement, votre (vos) script(s) d'arrière plan pourra choisir d'ajouter un auditeur à {{WebExtAPIRef("storage.onChanged")}}.

## Syntaxe

La clé `options_ui` est un objet avec le contenu suivant :

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
      <td><code>browser_style</code><br />{{optional_inline}}</td>
      <td><code>Booléen</code></td>
      <td>
        <p>Facultatif, par défaut : <code>true</code> .</p>
        <p>
          Utilisez cette option pour inclure une feuille de style dans votre
          page qui la rendra compatible avec l'interface utilisateur du
          navigateur et avec d'autres extensions qui utilisent la propriété
          <code>browser_style</code> . Bien qu'il contienne par défaut
          <code>true</code> , il est recommandé d'inclure cette propriété.
        </p>
        <p>
          Dans Firefox, la feuille de style peut être vue sur
          <code>chrome://browser/content/extension.css</code>, ou
          <code>chrome://browser/content/extension-mac.css</code> sur macOS.
          Lorsque vous fixez les dimensions, sachez que cette feuille de style
          fixe actuellement <code>box-sizing: border-box</code> (voir
          <a href="/docs/Web/CSS/box-sizing">box-sizing</a>).
        </p>
        <p>
          Le
          <a href="http://design.firefox.com/photon/">guide de style Firefox</a>
          décrit les classes que vous pouvez appliquer aux éléments de la
          fenêtre contextuelle afin d'obtenir des styles particuliers.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>open_in_tab</code><br />{{optional_inline}}</td>
      <td><code>Booléen</code></td>
      <td>
        <p>par défaut : <code>false</code>.</p>
        <p>
          Si c'est <code>true</code> , la page options s'ouvrira dans un onglet
          normal du navigateur, plutôt que d'être intégrée au gestionnaire des
          extensions du navigateur.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>page</code></td>
      <td><code>Chaîne de caractères</code></td>
      <td>
        <p>Obligatoire</p>
        <p>
          Le chemin d'accès au fichier HTML contenant la spécification de votre
          page d'options.
        </p>
        <p>
          Le chemin est relatif à l'emplacement du
          <code>manifest.json</code> lui-même.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Exemple

```json
  "options_ui": {
    "page": "options/options.html"
  }
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`options_page`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) {{deprecated_inline}}
- [Browser styles](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Options pages](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
