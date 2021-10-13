---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/spellcheck
original_slug: Web/HTML/Attributs_universels/spellcheck
---
{{HTMLSidebar("Global_attributes")}}

L'attribut universel **`spellcheck`** est un attribut à valeur contrainte qui définit si l'orthographe du contenu de l'élément doit être vérifiée.

{{EmbedInteractiveExample("pages/tabbed/attribute-spellcheck.html","tabbed-shorter")}}

Les valeurs autorisées pour cet attribut sont :

- `true` : cette valeur indique que, si possible, l'orthographe de l'élément doit être vérifiée avec le correcteur orthographique.
- `false` : cette valeur indique que l'orthographe de l'élément ne doit pas être vérifié.

La valeur par défaut de l'attribut (utilisée si elle n'est pas définie explicitement) sera fonction du navigateur et du type d'élément. Cette valeur par défaut peut également être héritée (autrement dit, la valeur utilisée pour l'élément courant sera la valeur explicite définie pour son plus proche ancêtre dans l'arbre des éléments).

Cet attribut est un attribut à valeur contrainte, ce n'est pas un attribut booléen. Il faut donc utiliser explicitement les valeurs `true` ou `false`. Ainsi :

```html example-bad
<label spellcheck>Label exemple</label>
```

sera invalide, la formulation correcte étant :

```html example-good
<label spellcheck="true">Label exemple</label>
```

Cet attribut n'est qu'une indication à destination du navigateur : il n'est pas obligatoire qu'un navigateur puisse vérifier l'orthographe. Les éléments non-éditables ne sont généralement pas vérifiés, même lorsque **`spellcheck`** vaut `true` et que le navigateur possède une fonctionnalité de vérification orthographique.

La valeur par défaut sera différente selon l'élément et le navigateur :

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Navigateur</th>
      <th>{{HTMLElement("html")}}</th>
      <th>{{HTMLElement("textarea")}}</th>
      <th>{{HTMLElement("input")}}</th>
      <th>Autres</th>
      <th>Commentaires</th>
    </tr>
    <tr>
      <td rowspan="3">Firefox / Gecko</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><em>hérité</em></td>
      <td>Lorsque <code>layout.spellcheckDefault</code> vaut <code>0</code></td>
    </tr>
    <tr>
      <td>
        <strong><code>false</code></strong>
      </td>
      <td>
        <strong><code>true</code></strong>
      </td>
      <td>
        <strong><em>hérité</em></strong>
      </td>
      <td>
        <strong><em>hérité</em></strong>
      </td>
      <td>
        <strong
          >Lorsque <code>layout.spellcheckDefault</code> vaut
          <code>1</code> (valeur par défaut)</strong
        >
      </td>
    </tr>
    <tr>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><em>hérité</em></td>
      <td>Lorsque <code>layout.spellcheckDefault</code> vaut <code>2</code></td>
    </tr>
    <tr>
      <td>Chrome</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>hérité</em></td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>hérité</em></td>
    </tr>
    <tr>
      <td>Opera</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>hérité</em></td>
    </tr>
    <tr>
      <td>Safari</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>hérité</em></td>
    </tr>
  </tbody>
</table>

## Exemples

### HTML

```html
<!-- La valeur par défaut -->
<textarea>Saisissay un texte issy</textarea>

<!-- Les valeurs explicites -->
<textarea spellcheck="true">Saisissay un texte issy</textarea>
<textarea spellcheck="false">Saisissay un texte issy</textarea>
```

### Résultat

{{EmbedLiveSample("Exemples","200","300")}}

## Spécifications

| Spécification                                                                                                            | État                             | Commentaires                                                                      |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#spelling-and-grammar-checking", "spellcheck")}} | {{Spec2('HTML WHATWG')}} | Pas de changement depuis la dernière dérivation, {{SpecName('HTML5.1')}} |
| {{SpecName('HTML5.1', "editing.html#spelling-and-grammar-checking", "spellcheck")}}         | {{Spec2('HTML5.1')}}     | Dérivée de {{SpecName('HTML WHATWG')}}, définition initiale.             |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.spellcheck")}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
