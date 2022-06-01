---
title: Motifs (Match patterns)
slug: Mozilla/Add-ons/WebExtensions/Match_patterns
tags:
  - Match pattern
  - Modèle de correspondance
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Match_patterns
---
{{AddonSidebar}}

Les modèles de correspondance sont un moyen de spécifier des groupes d’URL : un modèle de correspondance correspond à un ensemble spécifique d'URL. Ils sont destinés à des extensions à l’aide d’API WebExtensions dans quelques endroits, notamment pour spécifier les documents dans lesquels charger des [content scripts](/fr/Add-ons/WebExtensions/Content_scripts), et pour spécifier les URL à ajouter aux auditeurs [`webRequest`](/fr/Add-ons/WebExtensions/API/webRequest).

Les API qui utilisent des modèles de correspondance acceptent généralement une liste de modèles de correspondance et effectueront les actions appropriées si l’URL correspond à l’un des motifs. Voir, par exemple, la clé [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts) dans manifest.json.

## Structure du modèle de correspondance

> **Note :** Certains navigateurs ne prennent pas en charge certains schémas.
> Consultez le [tableau de compatibilité du navigateur](#Browser_compatibility) pour plus de détails.

Tous les modèles de correspondance sont spécifiés comme des chaînes. Outre le motif spécial « [\<all_urls>](/fr/Add-ons/WebExtensions/Match_patterns#%3Call_urls%3E) », les modèles de correspondance se composent de trois partie : _schéma_, l’hôte, et le _chemin d’accès._ Le schéma et l’hôte sont séparés par « :// ».

    <scheme>://<host><path>

### schéma

Le composant du _schéma_ peut prendre l’une des deux formes suivantes :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Valeur</th>
      <th scope="col">Correspondances</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>
        Seulement "http" et "https" et dans certains navigateurs
        <a href="/fr/docs/Web/API/WebSockets_API">"ws" et "wss"</a> aussi.
      </td>
    </tr>
    <tr>
      <td>
        Une parmi <code>http</code>, <code>https</code>, <code>ws</code>,
        <code>wss</code>, <code>ftp</code>, <code>ftps</code>,
        <code>data</code> ou <code>file</code>.
      </td>
      <td>Seulement le schéma donné.</td>
    </tr>
  </tbody>
</table>

### hôte

Le composant _hôte_ peut prendre l'une des trois formes suivantes :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Valeur</th>
      <th scope="col">Correspondances</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>Tout hôte</td>
    </tr>
    <tr>
      <td><code>*.</code> Suivi d’une partie du nom d’hôte</td>
      <td>L’hôte donné et l’un de ses sous-domaines</td>
    </tr>
    <tr>
      <td>Un nom d’hôte complet, sans caractères génériques</td>
      <td>Seul l’hôte donné</td>
    </tr>
  </tbody>
</table>

L’_hôte_ ne doit pas inclure un numéro de port.

L’_hôte_ est facultatif seulement si le _schéma_ est un « fichier ».

Notez que le caractère générique ne peut apparaître qu’au début.

### chemin

Le composant du chemin d’accès doit commencer par un `/`.

Ensuite, il peut contenir éventuellement toute combinaison du caractère générique `*` et de l’un des caractères autorisés dans les chemins d’URL ou chaînes de requête. Contrairement à l’_hôte_, le composant du _chemin_ peut contenir le caractère générique `*` au milieu ou à la fin, et le caractère `*` peut apparaître plusieurs fois.

La valeur du _chemin_ matches correspond à la chaîne de caractères qui est le chemin plus la  [chaine de requête URL](https://en.wikipedia.org/wiki/Query_string). Ceci inclut le signe `?` entre les deux, si la chaîne de requête est présente dans l'URL. Par exemple, si vous voulez faire correspondre des URLs sur n'importe quel domaine où le chemin URL se termine par `foo.bar`, alors vous devez utiliser un tableau de Match Patterns comme `['*://*/*foo.bar', '*://*/*foo.bar?*']`. Le `?*` est nécessaire, plutôt que juste la `bar*`, afin d'ancrer la fin `*` comme s'appliquant à la chaîne de requête URL et non à une partie du chemin URL.

Ni l'[identificateur de fragment d'URL](https://en.wikipedia.org/wiki/Fragment_identifier), ni le `#` qui le précède, ne sont considérés comme faisant partie du _chemin_.

> **Note :** La chaîne de modèle de chemin d'accès ne doit pas inclure de numéro de port. Ajout d'un port, comme dans : `http://localhost:1234/*` fait que le motif de match est ignoré. Cependant, `http://localhost:1234` correspondra avec `http://localhost/*`.

### \<all_urls>

La valeur spéciale `<all_urls>` correspond à toutes les URL sous l’un des schémas pris en charge, c’est‐à‐dire&nbsp;: "http", "https", "ws", "wss", "ftp", "data" et "file".

## Exemples

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 33%">Modèle</th>
      <th scope="col" style="width: 33%">Exemples de correspondances</th>
      <th scope="col" style="width: 33%">Exemples de non-correspondances</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>&#x3C;all_urls></code></p>
        <p>Correspondance à toutes les URL</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
        <p><code>ftp://files.somewhere.org/</code></p>
        <p><code>ftps://files.somewhere.org/</code></p>
      </td>
      <td>
        <p><code>resource://a/b/c/</code><br />(schéma sans équivalent)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*/*</code></p>
        <p>Correspondance à toutes les URLs HTTP, HTTPS et WebSocket</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
      </td>
      <td>
        <p><code>ftp://ftp.example.org/</code><br />(schéma sans équivalent)</p>
        <p>
          <code>ftps://ftp.example.org/</code><br />(schéma sans équivalent)
        </p>
        <p><code>file:///a/</code><br />(schéma sans équivalent)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*.mozilla.org/*</code></p>
        <p>
          Correspondance à toutes les URLs HTTP, HTTPS et WebSocket URLs qui
          sont hébergés sur "mozilla.org" ou l’un de ses sous-domaines.
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>http://a.mozilla.org/</code></p>
        <p><code>http://a.b.mozilla.org/</code></p>
        <p><code>https://b.mozilla.org/path/</code></p>
        <p><code>ws://ws.mozilla.org/</code></p>
        <p><code>wss://secure.mozilla.org/something</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(schéma sans équivalent)</p>
        <p><code>http://mozilla.com/</code><br />(hôte sans équivalent)</p>
        <p><code>http://firefox.org/</code><br />(hôte sans équivalent)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://mozilla.org/</code></p>
        <p>
          Correspondance à toutes les URLs HTTP, HTTPS and WebSocket qui sont
          hébergés exactement chez "mozilla.org/"
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>ws://mozilla.org/</code></p>
        <p><code>wss://mozilla.org/</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(schéma sans équivalent)</p>
        <p><code>http://a.mozilla.org/</code><br />(hôte sans équivalent)</p>
        <p><code>http://mozilla.org/a</code><br />(chemin sans équivalent)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>ftp://mozilla.org/</code></p>
        <p>Correspondance seulement à "ftp://mozilla.org/".</p>
      </td>
      <td><code>ftp://mozilla.org</code></td>
      <td>
        <p><code>http://mozilla.org/</code><br />(schéma sans équivalent)</p>
        <p><code>ftp://sub.mozilla.org/</code><br />(hôte sans équivalent)</p>
        <p><code>ftp://mozilla.org/path</code><br />(chemin sans équivalent)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path</code></p>
        <p>
          Correspondance aux URLs HTTPS sur n'importe quel hôte, dont le chemin
          est "path".
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://a.mozilla.org/path</code></p>
        <p><code>https://something.com/path</code></p>
      </td>
      <td>
        <p>
          <code>http://mozilla.org/path</code><br />(schéma sans équivalent)
        </p>
        <p>
          <code>https://mozilla.org/path/</code><br />(chemin sans équivalent)
        </p>
        <p><code>https://mozilla.org/a</code><br />(chemin sans équivalent)</p>
        <p><code>https://mozilla.org/</code><br />(chemin sans équivalent)</p>
        <p>
          <code>https://mozilla.org/path?foo=1</code><br />(chemin d'accès
          inégalé grâce à la chaîne d'interrogation URL)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path/</code></p>
        <p>
          Correspondance aux URLs HTTPS sur n’importe quel hôte, dont le chemin
          est "path/".
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/path/</code></p>
        <p><code>https://a.mozilla.org/path/</code></p>
        <p><code>https://something.com/path</code>/</p>
      </td>
      <td>
        <p>
          <code>http://mozilla.org/path/</code><br />(schéma sans équivalent)
        </p>
        <p>
          <code>https://mozilla.org/path</code><br />(chemin sans équivalent)
        </p>
        <p><code>https://mozilla.org/a</code><br />(chemin sans équivalent)</p>
        <p><code>https://mozilla.org/</code><br />(chemin sans équivalent)</p>
        <p>
          <code>https://mozilla.org/path/</code><code>?foo=1</code><br />(chemin
          d'accès inégalé grâce à la chaîne d'interrogation URL)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*</code></p>
        <p>
          Correspondance sur toutes les URLs HTTPS uniquement sur "mozilla.org",
          avec n’importe quel chemin
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/</code></p>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://mozilla.org/another</code></p>
        <p><code>https://mozilla.org/path/to/doc</code></p>
        <p><code>https://mozilla.org/path/to/doc?foo=1</code></p>
      </td>
      <td>
        <p>
          <code>http://mozilla.org/path</code><br />(chemin sans équivalent)
        </p>
        <p><code>https://mozilla.com/path</code><br />(hôte sans équivalent)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p>Correspondance seulement pour cet URL.</p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/a/b/c/#section1</code></p>
      </td>
      <td>N'importe quoi d'autre.</td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*/b/*/</code></p>
        <p>
          Correspondance sur toutes les URL HTTPS hébergées sur "mozilla.org",
          dont le chemin d’accès contient un composant "b" quelque part au
          milieu. Correspond aux URLs avec les chaînes de requête, si la chaîne
          se termine par un <code>/</code>.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/d/b/f/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/#section1</code></p>
        <p><code>https://mozilla.org/a/b/c/d/?foo=/</code></p>
        <p>
          <code
            >https://mozilla.org/a?foo=21314&#x26;bar=/b/&#x26;extra=c/</code
          >
        </p>
      </td>
      <td>
        <p>
          <code>https://mozilla.org/b/*/</code><br />(chemin sans équivalent)
        </p>
        <p>
          <code>https://mozilla.org/a/b/</code><br />(chemin sans équivalent)
        </p>
        <p>
          <code>https://mozilla.org/a/b/c/d/?foo=bar</code><br />(chemin d'accès
          inégalé grâce à la chaîne d'interrogation URL)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>file:///blah/*</code></p>
        <p>
          Correspondance à n’importe quelle URL FILE dont le chemin commence par
          "blah".
        </p>
      </td>
      <td>
        <p><code>file:///blah/</code></p>
        <p><code>file:///blah/bleh</code></p>
      </td>
      <td><code>file:///bleh/</code><br />(chemin sans équivalent)</td>
    </tr>
  </tbody>
</table>

### Modèles de correspondance invalides

| Modèle invalide           | Raison                                                               |
| ------------------------- | -------------------------------------------------------------------- |
| `resource://path/`        | schéma non pris en charge.                                           |
| `https://mozilla.org`     | pas de chemin.                                                       |
| `https://mozilla.*.org/`  | "*" dans *hôte\* doit être au départ.                                |
| `https://*zilla.org/`     | "*" dans *hôte\* doit être le seul caractère ou être suivi de « . ». |
| `http*://mozilla.org/`    | "\*" dans le schéma doit être le seul caractère.                     |
| `https://mozilla.org:80/` | L’hôte ne doit pas inclure un numéro de port.                        |
| `*://*`                   | Chemin vide : il doit être "`*://*/*`".                              |
| `file://*`                | Chemin vide : il doit être "`file:///*`".                            |

## Compatibilité des navigateurs

### schéma

{{Compat("webextensions.match_patterns.scheme",10)}}
