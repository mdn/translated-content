---
title: commands
slug: Mozilla/Add-ons/WebExtensions/manifest.json/commands
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
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé **`commands`** pour définir un ou plusieurs raccourcis clavier pour votre extension.

Chaque raccourci clavier est défini avec un **nom**, une **combination de clé**, et un **description**. Une fois que vous avez défini des commandes dans le fichier `manifest.json`, de votre extension, vous pouvez écouter leurs combinaisons de touches associées avec l'API JavaScript {{WebExtAPIRef("commands")}}.

## Syntaxe

La clé `commands` est un objet et chaque raccourci est une propriété de celui-ci. **Le nom de la propriété est le nom du raccourci**.

Chaque raccourci est lui-même un objet, qui possède jusqu'à deux propriétés :

- `suggested_key` : définit la combinaison de touches
- `description` : une chaîne qui décrit ce raccourci

La propriété `suggested_key` est elle-même un objet pouvant avoir l'une des propriétés suivantes et qui sont toutes des chaînes :

- `"default"`
- `"mac"`
- `"linux"`
- `"windows"`
- `"chromeos"`
- `"android"`
- `"ios"`

La valeur de chaque propriété est le raccourci clavier pour la commande sur la plateforme donnée, sous la forme d'une chaîne contenant les touches séparées par "`+`". La valeur de `"default"` est utilisée sur toutes les plateformes qui ne sont pas listées explicitement.

Par exemple :

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event to the extension"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

Cela définit deux raccourcis :

- une nommée `"toggle-feature"`, accessible à l'aide de

  <kbd>Ctrl</kbd>

  \+

  <kbd>Shift</kbd>

  \+

  <kbd>U</kbd>

  sur Linux et

  <kbd>Alt</kbd>

  \+

  <kbd>Shift</kbd>

  \+

  <kbd>U</kbd>

  sur toutes les autres plateformes

- une nommée `"do-another-thing"`, accessible à l'aide de

  <kbd>Ctrl</kbd>

  \+

  <kbd>Shift</kbd>

  \+

  <kbd>Y</kbd>

  sur toutes les plateformes.

Vous pouvez alors écouter la commande `"toggle-feature"` avec un code comme celui-ci :

```js
browser.commands.onCommand.addListener(function (command) {
  if (command == "toggle-feature") {
    console.log("toggling the feature!");
  }
});
```

### Raccourcis spéciaux

Il existe 3 **raccourci spéciaux avec des actions par défaut**, pour lesquels l'événement {{WebExtAPIRef("commands.onCommand")}} n'est pas déclenché :

- `_execute_browser_action`: fonctionne comme un clic sur une [action de navigateur](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_action) de l'extension.
- `_execute_page_action`: fonctionne comme un clic sur une [action de page](/fr/docs/Mozilla/Add-ons/WebExtensions/Page_actions) de l'extension.
- `_execute_sidebar_action`: ouvre le [panneau latéral](/fr/docs/Mozilla/Add-ons/WebExtensions/Sidebars) de l'extension. Uniquement pris en charge par Firefox et uniquement à partir de Firefox version 54.

Par exemple, ce JSON définit une combinaison de touches qui clique sur l'action du navigateur de l'extension :

```js
"commands": {
  "_execute_browser_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Les valeurs de raccourci

Il existe deux formats valides pour les touches de raccourci : comme une combinaison de touches ou comme une clé multimédia.

### Combinaisons de touches

Sur Mac, `"Ctrl"` est interprété comme `"Command"`, donc si vous avez réellement besoin de `"Ctrl"`, spécifiez `"MacCtrl"`.

Les combinaisons de touches doivent être composées de deux ou trois touches :

1. **modificateur** (obligatoire, à l'exception des touches de fonction). Il peut s'agir de `"Ctrl"`, `"Alt"`, `"Command"`, ou `"MacCtrl"`.
2. **second modificateur** (facultatif). S'il est fourni, il doit être `"Shift"` ou (pour Firefox ≥ 63) l'un quelconque des `"Ctrl"`, `"Alt"`, `"Command"`, ou `"MacCtrl"`. Ne doit pas être le modificateur déjà utilisé comme modificateur principal.
3. **touche** (obligatoire). Ce peut être l'une des touches :

   - lettres `A` – `Z`
   - chiffres `0` – `9`
   - fonctions `F1` – `F12`
   - `Comma` (virgule), `Period` (point), `Home` (début), `End` (Fin), `PageUp` (page précédente), `PageDown` (page suivante), `Space` (espace), `Insert` (inser), `Delete` (Suppr), `Up` (haut), `Down` (bas), `Left` (gauche), `Right` (droite)

La clé est ensuite donnée sous la forme d'une chaîne contenant l'ensemble des valeurs de clé, dans l'ordre indiqué ci-dessus, séparées "`+`". Par exemple, `"Ctrl+Shift+Z"`.

Si une combinaison de touches est déjà utilisée par le navigateur (comme `"Ctrl+P"`) ou par un complément existant, vous ne pouvez pas la remplacer. Vous pouvez le définir, mais votre gestionnaire d'événements ne sera pas appelé lorsque l'utilisateur appuiera sur la combinaison de touches.

### Touches médias

Une alternative est de spécifier le raccourci comme l'une des touches de média suivantes :

- `"MediaNextTrack"`
- `"MediaPlayPause"`
- `"MediaPrevTrack"`
- `"MediaStop"`

## Mise à jour des raccourcis

Les raccourcis peuvent être mis à jour via {{WebExtAPIRef("commands.update()")}}. Les utilisateurs peuvent également mettre à jour les raccourcis via l'option "Gérer les raccourcis d'extension" sur `about:addons` dans Firefox, comme montré dans [cette video](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647). Dans Chrome, les utilisateurs peuvent modifier les raccourcis sur `chrome://extensions/shortcuts`.

## Exemple

Définissez un seul raccourci clavier en utilisant uniquement la combinaison de touches par défaut :

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    },
    "description": "Send a 'toggle-feature' event"
  }
}
```

Définissez deux raccourcis clavier, l'un avec une combinaison de touches spécifique à la plate-forme :

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Alt+Shift+U",
      "linux": "Ctrl+Shift+U"
    },
    "description": "Send a 'toggle-feature' event"
  },
  "do-another-thing": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    }
  }
}
```

## Compatibilité des navigateurs

{{Compat}}
