---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/background
original_slug: Mozilla/Add-ons/WebExtensions/manifest.json/arriere-plan
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"background": {
  "scripts": ["background.js"]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé background pour inclure un ou plusieurs scripts d'arrière-plan, et éventuellement une page d'arrière-plan dans votre extension.

Les scripts d'arrière-plan sont l'endroit pour placer le code qui doit maintenir l'état à long terme, ou effectuer des opérations à long terme, indépendamment de la durée de vie de toutes les pages Web ou les fenêtres du navigateur.

Les scripts d'arrière-plan sont chargés dès que l'extension est chargée et restent chargés jusqu'à ce que l'extension soit désactivée ou désinstallée. Vous pouvez utiliser n'importe laquelle des WebExtension APIs dans le script, tant que vous avez demandé les [permissions](/fr/Add-ons/WebExtensions/manifest.json/permissions) nécessaires.

Voir la section "Pages arrière-plan" dans [l'anatomie d'une WebExtension](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_pages) pour plus de détails.

La clé background est un objet qui peut avoir l'une des deux propriétés suivantes, toutes deux facultatives :

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>"scripts"</code></td>
      <td>
        <p>
          Un ensemble de chaînes, chacune étant un chemin d'accès à une source
          JavaScript. Le chemin est relatif au fichier manifest.json lui-même.
          Ce sont les scripts d'arrière-plan qui seront inclus dans l'extension.
        </p>
        <p>Les scripts partagent la même fenêtre globale.</p>
        <p>
          Les scripts sont chargés dans l'ordre où 'ils apparaissent dans le
          tableau.
        </p>
        <p>
          <strong
            >Notez qu'il y a un bug affectant les versions de Firefox
            antérieures à la version 50 </strong
          >: lorsque le débogueur Firefox est ouvert, les scripts ne sont pas
          toujours chargés dans l'ordre indiqué dans le tableau. Pour contourner
          ce bug, vous pouvez utiliser la propriété "page" et inclure des
          scripts de fond de page en utilisant les balises &#x3C;script>. Ce bug
          est résolu dans Firefox 50, et à partir de ce moment, les scripts sont
          toujours chargés dans l'ordre indiqué dans le tableau.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>"page"</code></td>
      <td>
        <div class="note">
          <p>
            <strong>Note :</strong> Si vous souhaitez récupérer un script à
            partir d'un emplacement distant avec la balise &#x3C;script> (par
            exemple : &#x3C;script src =
            "https://code.jquery.com/jquery-1.7.1.min.js"> ), vous devrez
            également modifier la clé
            <code
              ><a
                href="/fr/Add-ons/WebExtensions/manifest.json/content_security_policy"
                >content_security_policy</a
              ></code
            >
            dans le fichier manifest.json de votre extension.
          </p>
        </div>
        <p>
          Si vous spécifiez des "scripts", une page vide sera créée pour que vos
          scripts s'exécutent.
        </p>
        <p>
          Si vous avez besoin de contenu particulier dans la page, vous pouvez
          définir votre propre page en utilisant l'option "page".
        </p>
        <p>
          Si vous utilisez cette propriété, vous ne pouvez plus spécifier de
          scripts de fond à l'aide de «scripts», mais vous pouvez inclure vos
          propres scripts à partir de la page, tout comme dans une page Web
          normale.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Exemple

```json
 "background": {
    "scripts": ["jquery.js", "my-background.js"]
  }
```

Chargez deux scripts de fond.

```json
  "background": {
    "page": "my-background.html"
  }
```

Chargez une page d'arrière-plan personnalisée.

## Compatibilité du navigateur

{{Compat("webextensions.manifest.background", 10)}}
