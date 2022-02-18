---
title: chrome_url_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides
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
  "chrome_url_overrides" : {
    "newtab": "my-new-tab.html"
  }</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé `chrome_url_overrides` pour fournir un remplacement personnalisé pour les documents chargés dans différentes pages spéciales généralement fournies par le navigateur lui-même.

## Syntaxe

La clé `chrome_url_overrides` est un objet qui peut avoir les propriétés suivantes:

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
      <td><code>bookmarks</code></td>
      <td>Chaîne de caractères</td>
      <td><p>Remplace la page qui affiche les signets.</p></td>
    </tr>
    <tr>
      <td><code>history</code></td>
      <td>chaîne de caractères</td>
      <td><p>Remplace la page qui affiche l'historique de navigation.</p></td>
    </tr>
    <tr>
      <td><code>newtab</code></td>
      <td>chaîne de caractères</td>
      <td>
        <p>
          Remplace le document qui s'affiche dans la page "Nouvel onglet". Ceci
          est la page affichée lorsque l'utilisateur a ouvert un nouvel onglet,
          mais n'a chargé aucun document : par exemple, en utilisant le
          raccourci clavier <kbd>Ctrl</kbd>/<kbd>Command</kbd>+<kbd>T</kbd>.
        </p>
        <p>
          Le remplacement est donné en tant qu'URL d'un fichier HTML. Le fichier
          doit être regroupé avec l'extension : vous ne pouvez pas spécifier une
          URL distante ici. Vous pouvez le spécifier par rapport au dossier
          racine de l'extension, comme : "path/to/newtab.html".
        </p>
        <p>
          Le document peut charger CSS et JavaScript, tout comme une page Web
          normale. L'utilisation de JavaScript dans la page permet d'accéder aux
          mêmes
          <a href="/fr/Add-ons/WebExtensions/API"
            >API privilégiées "browser.*" </a
          >comme une extension d'arrière-plan.
        </p>
        <p>
          Il est très pratique d'inclure un
          <a href="/fr/docs/Web/HTML/Element/title">&#x3C;title></a> pour la
          page, ou le titre de l'onglet sera l'URL "moz-extension://..." .
        </p>
        <p>
          Un cas d'utilisation courant est de permettre à l'utilisateur de
          définir une nouvelle page d'onglet : pour ce faire, fournir une
          nouvelle page d'onglet personnalisée qui navigue vers la page définie
          par l'utilisateur.
        </p>
        <p>
          Si deux ou plusieurs extensions définissent toutes les deux de
          nouvelles pages à onglet personnalisées, alors la dernière à être
          installée ou activée utilise sa valeur.
        </p>
        <p>
          Pour remplacer la page d'accueil du navigateur, utilisez plutôt "<a
            href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides"
            >chrome_settings_overrides</a
          >".
        </p>
      </td>
    </tr>
  </tbody>
</table>

Toutes les propriétés sont [localisables](/fr/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json).

## Exemple

```json
"chrome_url_overrides" : {
  "newtab": "my-new-tab.html"
}
```

## Compatibilité du navigateur

{{Compat("webextensions.manifest.chrome_url_overrides")}}
