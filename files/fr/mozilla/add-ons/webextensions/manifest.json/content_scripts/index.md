---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td>{{ jsxref("array", "Tableau") }}</td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Ordonne au navigateur de charger des [scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) dans les pages web dont l’URL correspond à un modèle donné.

Cette clé est un tableau. Chaque élément est un objet qui&nbsp;:

- **doit** contenir une clé nommée **`matches`**, qui spécifie les modèles d’URL à reconnaître afin que les scripts soient chargés&nbsp;;
- **peut** contenir des clés nommées **`js`** et **`css`**, qui listent les scripts à charger dans les pages correspondantes&nbsp;;
- **peut** contenir un certain nombre d’autres propriétés qui contrôlent des aspects plus fins correspondant à quand et comment les scripts de contenu sont chargés.

Le tableau ci-dessous présente le détail de toutes les clés que vous pouvez inclure.

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
      <td><code>all_frames</code></td>
      <td>{{ jsxref("boolean", "Booléen") }}</td>
      <td>
        <p>
          <code>true</code>&nbsp;: injecte les scripts spécifiés dans
          <code>js</code> et <code>css</code> dans tous les cadres
          correspondant aux exigences d’URL spécifiées, même s’il n’est pas le
          cadre le plus haut d’un onglet. Cela n’injecte pas dans les cadres
          enfants quand seul leur parent correspond aux exigences d’URL et pas
          les cadres enfants. Les exigences d’URL sont vérifiées pour chaque
          cadre indépendamment.
        </p>
        <p>
          <code>false</code>&nbsp;: injecte seulement dans le cadre le plus haut de
          l’onglet qui répond aux exigences d’URL.
        </p>
        <p>Par défaut à <code>false</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>css</code></td>
      <td>{{ jsxref("array", "Tableau") }}</td>
      <td>
        <p>
          Un tableau de chemins, relatifs à <em>manifest.json</em>, référençant
          les fichiers CSS qui seront injectés dans les pages correspondantes.
        </p>
        <p>
          Les fichiers sont injectés dans l’ordre donné, et avant que le DOM ne
          soit chargé.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Firefox résout les URLs dans les fichiers
            CSS injectés par rapport au fichier CSS lui-même, plutôt que par
            rapport à la page dans laquelle il est injecté.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>exclude_globs</code></td>
      <td>{{ jsxref("array", "Tableau") }}</td>
      <td>
        <p>
          Un tableau de chaînes contenant des caractères génériques. Voir les
          <a href="#les_modèles_de_correspondance_durl">modèles de correspondance d'URL</a>
          ci-dessous.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>exclude_matches</code></td>
      <td>{{ jsxref("array", "Tableau") }}</td>
      <td>
        <p>
          Un tableau de
          <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
            >modèles de correspondance</a
          >. Voir les
          <a href="#les_modèles_de_correspondance_durl">modèles de correspondance d'URL</a>
          ci-dessous.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>include_globs</code></td>
      <td>{{ jsxref("array", "Tableau") }}</td>
      <td>
        Un tableau de chaînes contenant des caractères génériques. Voir les
        <a href="#les_modèles_de_correspondance_durl">modèles de correspondance d'URL</a>
        ci-dessous.
      </td>
    </tr>
    <tr>
      <td><code>js</code></td>
      <td>{{ jsxref("array", "Tableau") }}</td>
      <td>
        <p>
          Un tableau de chemins, relatifs au fichier <em>manifest.json</em>,
          référençant les fichiers JavaScript qui seront injectés dans les pages
          correspondantes.
        </p>
        <p>
          Les fichiers sont injectés dans l’ordre indiqué. Cela signifie que,
          par exemple, si vous incluez ici jQuery suivi d’un autre script de
          contenu, comme ceci&nbsp;:
        </p>
        <pre class="brush: json">
"js": ["jquery.js", "my-content-script.js"]</pre
        >
        <p>alors <em>my-content-script.js</em> peut utiliser jQuery.</p>
        <p>
          Les fichiers sont injectés au moment spécifié par
          <code>run_at</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>match_about_blank</code></td>
      <td>{{ jsxref("boolean", "Booléen") }}</td>
      <td>
        <p>
          Insère les scripts de contenu dans les pages dont l’URL est
          <code>about:blank</code> ou <code>about:srcdoc</code>, si l’URL de la
          page qui a ouvert ou créé cette page
          [correspond aux modèles](#les_modèles_de_correspondance_d'url)
          spécifiés dans le reste de la clé <code>content_scripts</code>.
        </p>
        <p>
          Ceci est particulièrement utile pour exécuter des scripts dans des
          {{ htmlelement("iframe", "iframes") }} vides, dont l’URL
          est <code>about:blank</code>. Pour ce faire, vous devez également
          définir la clé <code>all_frames</code>.
        </p>
        <p>
          Par exemple, supposons que vous disposiez d’une clé de
          <code>content_scripts</code> comme ceci&nbsp;:
        </p>
        <pre class="brush: json">
"content_scripts": [
  {
    "js": ["my-script.js"],
    "matches": ["https://example.org/"],
    "match_about_blank": true,
    "all_frames": true
  }
]</pre
        >
        <p>
          Si l’utilisateur ou l’utilisatrice charge
          <code>https://example.org/</code>, et si cette page intègre une iframe
          vide, alors <em>my-script.js</em> sera chargé dans l’iframe.
        </p>
        <p>
          <code>match_about_blank</code> est supporté dans Firefox à partir de
          la version 52. Notez que dans Firefox, les scripts de contenu ne
          seront pas injectés dans les iframes vides à
          <code>"document_start"</code> même si vous spécifiez cette valeur dans
          <code>run_at</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td>{{ jsxref("array", "Tableau") }}</td>
      <td>
        <p>
          Un ensemble de
          <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
            >modèles de correspondance</a
          >. Voir les
          <a href="#les_modèles_de_correspondance_durl">modèles de correspondance d'URL</a>
          ci-dessous.
        </p>
        <p>C’est la seule clé obligatoire.</p>
      </td>
    </tr>
    <tr>
      <td><code>run_at</code></td>
      <td>{{ jsxref("string", "Chaîne") }}</td>
      <td>
        <p>
          Cette option détermine quand les scripts spécifiés dans
          <code>js</code> sont injectés. Vous pouvez fournir une chaîne
          parmi trois ici, chacune identifiant un état dans le processus de
          chargement d’un document. Les états correspondent directement à
          {{domxref("Document/readyState", "Document.readyState")}}&nbsp;:
        </p>
        <ul>
          <li>
            <code>"document_start"</code>&nbsp;: correspond à <code>"loading"</code>.
            Le DOM est toujours en cours de chargement.
          </li>
          <li>
            <code>"document_end"</code>&nbsp;: correspond à
            <code>"interactive"</code>. Le DOM a fini de charger, mais des
            ressources telles que des scripts et des images peuvent toujours
            être en cours de chargement.
          </li>
          <li>
            <code>"document_idle"</code>&nbsp;: correspond à <code>"complete"</code>.
            Le document et toutes ses ressources ont terminé de charger.
          </li>
        </ul>
        <p>La valeur par défaut est <code>"document_idle"</code>.</p>
        <p>
          Dans tous les cas, les fichiers dans <code>js</code> sont
          injectés après les fichiers dans <code>css</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Les modèles de correspondance d'URL

La clé `content_scripts` associe les scripts de contenu aux documents en fonction de la correspondance des URL&nbsp;: si l’URL du document correspond à la spécification de la clé, le script sera joint. Il existe quatre propriétés dans `content_scripts` que vous pouvez utiliser pour cette spécification&nbsp;:

- `matches`&nbsp;: un tableau de [match patterns](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) (modèles).
- `exclude_matches`&nbsp;: un tableau de [match patterns](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).
- `include_globs`&nbsp;: un tableau de [globs](#globs) (caractères génériques).
- `exclude_globs`&nbsp;: un tableau de [globs](#globs).

Pour associer une de ces propriétés, une URL doit correspondre à au moins un des éléments de son tableau. Par exemple, donner une propriété comme&nbsp;:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

Les deux adresses `http://example.org/` et `http://example.com/` correspondront.

Étant donné que `matches` est la seule clé obligatoire, les trois autres clés sont utilisées pour limiter davantage les URL qui correspondent. Pour associer la clé dans son ensemble, une URL doit&nbsp;:

1.  Correspondre à la propriété `matches`&nbsp;;
2.  ET associer à la propriété `include_globs`, si présent&nbsp;;
3.  ET NE PAS correspondre à la propriété `exclude_matches`, si présent&nbsp;;
4.  ET NE PAS correspondre à la propriété `exclude_globs`, si présent.

### globs

Un «&nbsp;glob&nbsp;» est juste une chaîne qui peut contenir des caractères génériques. Il existe deux types de caractères génériques, et vous pouvez les combiner dans le même glob&nbsp;:

- `"*"` correspond à zéro ou plus de caractères
- `"?"` correspond exactement à un caractère.

Par exemple&nbsp;: `"*na?i"` correspond à `"illuminati"` et à `"annunaki"`, mais pas à `"sagnarelli"`.

## Exemple

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]
```

Cela injecte un seul script de contenu _borderify.js_ dans toutes les pages sous `mozilla.org` ou l’un de ses sous-domaines, qu’ils soient fournis via HTTP ou HTTPS.

```json
"content_scripts": [
  {
    "exclude_matches": ["*://developer.mozilla.org/*"],
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "borderify.js"]
  }
]
```

Cela implique deux scripts de contenu dans toutes les pages sous `mozilla.org` ou l’un de ses sous-domaines, à l’exception de `developer.mozilla.org`, qu’il s’agisse de HTTP ou HTTPS.

Les scripts de contenu ont la même vue du DOM et sont injectés dans l’ordre où ils apparaissent dans le tableau, de sorte que _borderify.js_ peut voir les variables globales ajoutées par _jquery.js_.

## Compatibilité des navigateurs

{{Compat("webextensions.manifest.content_scripts")}}
