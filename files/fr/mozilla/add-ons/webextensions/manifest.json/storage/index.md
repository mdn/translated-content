---
title: storage
slug: Mozilla/Add-ons/WebExtensions/manifest.json/storage
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
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"storage": {
  "managed_schema": "schema.json"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé `storage` pour spécifier le nom du fichier de schéma qui définit la structure des données dans le stockage géré.

Les données gérées déclarent les politiques d'entreprise soutenues par l'application. Les politiques sont analogues aux options mais sont configurées par un administrateur système au lieu de l'utilisateur, ce qui permet à l'application d'être configurée pour tous les utilisateurs d'une organisation.

Après avoir déclaré les politiques, elles sont lues à partir de l'API {{WebExtAPIRef("storage.managed")}}. Cependant, si une valeur de politique n'est pas conforme au schéma, elle n'est pas publiée par l'API `storage.managed`. Il appartient à l'application d'appliquer les politiques configurées par l'administrateur.

> **Note :** Firefox ne définit pas de schéma pour le stockage géré, soir {{WebExtAPIRef("storage.managed")}} pour plus de détails.

La clé de `storage` est un objet qui possède les propriétés requises suivantes:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>managed_schema</code></td>
      <td>
        <p>
          Un <code>String</code> spécifiant le chemin complet du fichier dans
          l'extension qui définit le schéma de gestion du stockage..
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette page comprend les détails de la page du site web des développeurs de Chrome [Manifeste pour les zones de stockage](https://developer.chrome.com/apps/manifest/storage) incluses ici sous la licence Creative Commons Attribution 3.0 United States License.
