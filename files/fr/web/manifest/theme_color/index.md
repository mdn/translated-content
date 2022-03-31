---
title: theme_color
slug: Web/Manifest/theme_color
translation_of: Web/Manifest/theme_color
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

<table>
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json no-line-numbers">"theme_color": "red"</pre>
      </td>
    </tr>
  </tbody>
</table>

Le champ `theme_color` est une chaîne de caractères qui défini la couleur du thème par défaut de l'application. Cela peut parfois affecter la manière dont l'OS affiche le site (e.g., avec la bare des tâches sous Android, la couleur du thème entoure le site).

## Exemples

```json
"theme_color": "red"
```

## Spécification

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Status</th>
      <th scope="col">Commenttaire</th>
      <th scope="col">Feedback</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p>
          {{SpecName('Manifest', '#theme_color-member', 'theme_color')}}
        </p>
      </td>
      <td><p>{{Spec2('Manifest')}}</p></td>
      <td><p>Définition initiale.</p></td>
      <td>
        <p>
          <a href="https://github.com/w3c/manifest/issues/"
            >Web App Manifest Working Group drafts</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("html.manifest.theme_color")}}
