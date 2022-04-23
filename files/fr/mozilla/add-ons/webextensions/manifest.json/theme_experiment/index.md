---
title: theme expérimentation
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment
tags:
  - Add-ons
  - Browser
  - Customisation
  - Customise
  - Design
  - Look and Feel
  - Themes
  - colors
  - navigatuer
  - theme manifest
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment
original_slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme_experimentation
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
"theme_experiment": {
  "stylesheet": "style.css",
  "colors": {
    "popup_affordance": "--arrowpanel-dimmed"
  },
  "images": {
    "theme_toolbar": "--toolbar-bgimage"
  },
  "properties": {
    "toolbar_image_alignment":
    "--toolbar-bgalignment"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Cette clé permet de définir les propriétés de la clé expérimentale de [`theme`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) pour l'interface Firefox. Ces expériences sont un précurseur pour proposer de nouvelles fonctionnalités thématiques à inclure dans Firefox. L'expérimentation se fait par:

- créer une feuille de style qui définit les correspondances entre les sélecteurs CSS internes pour les éléments d'interface utilisateur Firefox et les variables CSS arbitraires. Les variables CSS sont ensuite mappées dans les objets `colors`, `images`, et `properties` avec les nouvelles propriétés de clé de `theme`.
- (sans feuille de style) en utilisant `colors`, `images`, et `properties` pour mapper les sélecteurs CSS internes de Firefox, tels que `--arrowpanel-dimmed` vers les nouvelles propriétés de clé de `theme` key properties. Cette option limite l'expérimentation aux composants d'interface utilisateur associés à une variable CSS intégrée.

Pour découvrir les sélecteurs CSS des éléments de l'interface utilisateur Firefox ou des variables CSS internes de Firefox, utilise la [boite à outils du navigateur](/fr/docs/Outils/Boîte_à_outils_du_navigateur).

> **Note :** Cette clé est uniquement disponible pour une utilisation dans les canaux Firefox Developer Edition et Firefox Nightly et nécessite l'activation de la préférence `extensions.legacy.enabled`.

> **Attention :** Cette fonctionnalité est expérimentale et peut être sujette à modification.

## Syntaxe

La clé theme_experiment est un objet qui prend les propriétés suivantes :

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
      <td><code>stylesheet</code></td>
      <td><code>String</code></td>
      <td>
        <p>Facultatif</p>
        <p>
          Nom d'une feuille de style fournissant le mappage des sélecteurs CSS
          des éléments de l'interface Firefox aux variables CSS.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>images</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Facultatif</p>
        <p>
          Mappings des variables CSS (telles que définies dans Firefox ou par la
          feuille de style définie dans la <code>stylesheet</code>) aux noms de
          propriétés <code>images</code> à utiliser dans la clé
          <code
            ><a
              href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme"
              >theme</a
            ></code
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Facultatif</p>
        <p>
          Mappings des variables CSS (telles que définies dans Firefox ou par la
          feuille de style définie dans la <code>stylesheet</code>) aux noms de
          propriétés <code>colors</code> à utiliser dans la clé
          <code
            ><a
              href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme"
              >theme</a
            ></code
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Facultatif</p>
        <p>
          Mappings des variables CSS (telles que définies dans Firefox ou par la
          feuille de style définie dans la <code>stylesheet</code>) aux noms de
          propriétés <code>properties</code> à utiliser dans la clé
          <code
            ><a
              href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme"
              >theme</a
            ></code
          >.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Ces exemples utilisent une feuille de style appelée `style.css` pour permettre de définir une couleur pour le bouton de recharge du navigateur dans la clé [`theme`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme).

La feuille de style définit :

```css
#reload-button {
  fill: var(--reload-button-color);
}
```

où `#reload-button` est le sélecteur CSS interne de Firefox pour le bouton reload et  `--reload-button-color` est un nom arbitraire..

Dans le fichier `manifest.json`, `--reload-button-color` est alors mappé au nom à utiliser dans la propriété `theme` `colors` :

```json
"theme_experiment": {
  "stylesheet": "style.css",
  "colors": {
    "reload_button": "--reload-button-color"
  }
}
```

L'argument `reload_button` est alors utilisé de la même manière que n'importe quelle autre propriété de `theme` .

```json
"theme": {
  "colors": {
    "reload_button": "orange"
  }
}
```

Ceci a pour effet de rendre l'icône de recharge orange.

![](theme_experiment.png)

Cette propriété peut également être utilisée dans `browser.theme.update()`. `images` et  `properties` travaillent de la même manière que `colors`.

## Compatibilité du navigateur

{{Compat("webextensions.manifest.theme_experiment")}}
