---
title: chrome_settings_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides
---

{{AddonSidebar}}

Utilisez la clé `chrome_settings_overrides` pour remplacer certains paramètres du navigateur. Deux paramètres sont disponibles :

- `"homepage"`, qui vous permet de remplacer la page d'accueil du navigateur.
- `"search_provider"`, qui vous permet d'ajouter un nouveau moteur de recherche.

```json
"chrome_settings_overrides" : {
  "homepage": "https://developer.mozilla.org/"
}
```

```json
"chrome_settings_overrides": {
  "search_provider": {
    "name": "Discogs",
    "search_url": "https://www.discogs.com/search/?q={searchTerms}",
    "keyword": "disc",
    "favicon_url": "https://www.discogs.com/favicon.ico"
  }
}
```

<table>
  <tbody>
    <tr>
      <th colspan="2" scope="row">
        clé de manifeste : <code>chrome_settings_overrides</code>
      </th>
    </tr>
    <tr>
      <th scope="row">Type</th>
      <td><code>Objet</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

La clé `chrome_settings_overrides` est un objet qui peut avoir les propriétés suivantes:

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
      <td><code>homepage</code></td>
      <td>Chaîne de caractères</td>
      <td>
        <p>Définit la page à utiliser comme page d'accueil du navigateur.</p>
        <p>Le remplacement est donné comme une URL. L'URL peut :</p>
        <ul>
          <li>
            pointer sur un fichier regroupé avec l'extension, auquel cas il est
            donné comme une URL relative au fichier manifest.json
          </li>
          <li>être une URL distante comme "https://developer.mozilla.org/".</li>
        </ul>
        <p>
          Si deux ou plusieurs extensions définissent toutes les deux cette
          valeur, alors le paramètre de la dernière extension installée aura la
          priorité.
        </p>
        <p>
          Pour éviter de nouveaux onglets, utilisez à la place "<a
            href="/fr/Add-ons/WebExtensions/manifest.json/chrome_url_overrides"
            >chrome_url_overrides</a
          >".
        </p>
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
      <td><code>search_provider</code></td>
      <td><code>Objet</code></td>
      <td>
        <p>Définit un moteur de recherche à ajouter au navigateur.</p>
        <p>
          Le moteur de recherche a un nom et une URL principale. D'autres URL
          peuvent être fournies, y compris des URL pour des recherches plus
          spécialisées comme des recherches d'images. Dans l'URL que vous
          fournissez, utilisez "<code>{searchTerms}</code>" pour interpoler le
          terme de recherche dans l'URL, comme :
          <code>https://www.discogs.com/search/?q={searchTerms}</code>. Vous
          pouvez également fournir des paramètres POST à envoyer avec la
          recherche.
        </p>
        <p>
          Le moteur de recherche sera présenté à l'utilisateur à côté de ceux
          fournis dans l'interface. Si vous incluez la propriété
          <code>is_default</code>et le configurez avec <code>true</code>, le
          nouveau moteur de recherche devient l'option par défaut. Avec
          l'utilisation de la propriété<code>keyword</code>, vous permettez à
          l'utilisateur de sélectionner votre moteur de recherche en tapant le
          mot-clé dans la barre d'adresse avant le terme recherché.
        </p>
        <p>
          C'est un objet avec les propriétés listées ci-dessous. Toutes les
          propriétés chaîne de caractères sont
          <a
            href="/fr/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json"
            >localisable</a
          >s.
        </p>
        <dl>
          <dt><code>name</code></dt>
          <dd>
            Chaîne de caractères : le nom du moteur de recherche, affiché pour
            l'utilisateur.
          </dd>
          <dt><code>search_url</code></dt>
          <dd>
            Chaîne de caractères : l'URL utilisée par le moteur de recherche. Il
            peut être une URL HTTPS.
          </dd>
          <dt><code>is_default</code></dt>
          <dd>
            Booléen: "True" si le moteur de recherch doit être le choix par
            défaut.
          </dd>
          <dt><code>alternate_urls {{optional_inline}}</code></dt>
          <dd>
            Tableau de chaînes de caractères : un éventail d'URL alternatives,
            qui peut être utilisé à la place de<code>search_url</code>.
          </dd>
          <dt><code>encoding {{optional_inline}}</code></dt>
          <dd>
            Chaîne de caractères : codage du terme de recherche, spécifié comme
            un
            <a
              href="https://www.iana.org/assignments/character-sets/character-sets.xhtml"
              >standard character encoding name</a
            >, voir "UTF-8".
          </dd>
          <dt><code>favicon_url {{optional_inline}}</code></dt>
          <dd>
            Chaîne de caractères : URL pointant sur une icône pour le moteur de
            recherche. Ce doit être une URL absolue HTTP ou HTTPS.
          </dd>
          <dt><code>image_url {{optional_inline}}</code></dt>
          <dd>
            Chaîne de caractères : URL utilisée pour une recherche d'images.
          </dd>
          <dt><code>image_url_post_params {{optional_inline}}</code></dt>
          <dd>
            Chaîne de caractères : paramètres POST à envoyer
            à<code>image_url</code>.
          </dd>
          <dt><code>instant_url {{optional_inline}}</code></dt>
          <dd>
            Chaîne de caractères : URL utilisée pour une recherche instantanée.
          </dd>
          <dt><code>instant_url_post_params {{optional_inline}}</code></dt>
          <dd>
            Chaîne de caractères : paramètres POST à envoyer à
            <code>instant_url</code>.
          </dd>
          <dt><code>keyword {{optional_inline}}</code></dt>
          <dd>
            Chaîne de caractères : mots-clés de la barre d'adresse pour le
            moteur de recherche.
          </dd>
          <dt><code>prepopulated_id {{optional_inline}}</code></dt>
          <dd>L'ID d'un moteur de recherche intégré à utiliser.</dd>
          <dt><code>search_url_post_params {{optional_inline}}</code></dt>
          <dd>
            Chaîne de caractères : paramètres POST à envoyer
            à<code>search_url</code>.
          </dd>
          <dt><code>suggest_url {{optional_inline}}</code></dt>
          <dd>
            Chaîne de caractères : URL utilisée pour les suggestions de
            recherche. Ceci doit être une URL HTTPS
          </dd>
          <dt><code>suggest_url_post_params {{optional_inline}}</code></dt>
          <dd>
            Chaîne de caractères : paramètres POST à envoyer
            à<code>suggest_url</code>.
          </dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat}}
