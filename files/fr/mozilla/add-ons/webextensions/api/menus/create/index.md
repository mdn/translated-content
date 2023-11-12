---
title: menus.create()
slug: Mozilla/Add-ons/WebExtensions/API/menus/create
---

{{AddonSidebar()}}

Crée un nouvel élément de menu, avec un objet d'options définissant les propriétés de l'élément.

Contrairement aux autres fonctions asynchrones, celle-ci ne renvoie pas de promesse, mais utilise un callback optionnel pour communiquer le succès ou l'échec. C'est parce que sa valeur de retour est l'ID du nouvel élément.

Pour la compatibilité avec d'autres navigateurs, Firefox rend cette méthode disponible via l'espace noms `contextMenus` ainsi que l'espace de noms des `menus`. Notez cependant qu'il n'est pas possible de créer des éléments de menu d'outils (`contexts: ["tools_menu"]`) en utilisant l'espace de noms `contextMenus`.

## Syntaxe

```js
browser.menus.create(
  createProperties, // object
  function() {...}  // optional function
)
```

### Paramètres

- `createProperties`

  - : `object`. Propriétés pour le nouvel élément de menu.

    - `checked` {{optional_inline}}
      - : `boolean`. L'état initial d'une case à cocher ou d'un élément radio : `true` pour selected et `false` pour non sélectionné. Un seul élément radio peut être sélectionné à la fois dans un groupe donné d'éléments radio.
    - `command` {{optional_inline}}

      - : `string`. Chaîne décrivant une action à effectuer lorsque l'utilisateur clique sur l'élément. Les valeurs possibles sont:

        - `"_execute_browser_action"`: simule un clic sur l'action du navigateur de l'extension, en ouvrant son popup s'il en a un
        - `"_execute_page_action"`: simule un clic sur l'action de la page de l'extension, en ouvrant son popup s'il en a un
        - `"_execute_sidebar_action"`: ouvre la barre latérale de l'extension

        Cliquer sur l'élément déclenchera toujours l'événement {{WebExtAPIRef("menus.onClicked")}}, mais il n'y a aucune garantie de la commande ici: la commande peut être exécutée avant les incendies `onClicked`.

    - `contexts` {{optional_inline}}

      - : `array` de `{{WebExtAPIRef('menus.ContextType')}}`. Tableau des contextes dans lesquels cet élément de menu apparaîtra. Si cette option est omise :

        - Si l'élément parent a des contextes définis, alors cet élément héritera des contextes de ses parents
        - sinon, l'élément reçoit un tableau de contexte de \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` de `string`. Vous permet de restreindre l'élément à appliquer uniquement aux documents dont l'URL correspond à l'un des [motifs](/fr/Add-ons/WebExtensions/Match_patterns) données. Cela s'applique également aux cadres.
    - `enabled` {{optional_inline}}
      - : `boolean`. Si cet élément de menu est activé ou désactivé. Par défaut à `true`.
    - `icons` {{optional_inline}}

      - : `object`. Une ou plusieurs icônes personnalisées à afficher en regard de l'élément. Les icônes personnalisées ne peuvent être définies que pour les éléments apparaissant dans les sous-menus. Cette propriété est un objet avec une propriété pour chaque icône fournie: le nom de la propriété est la taille de l'icône en pixels et sa valeur est un chemin vers l'icône à partir du répertoire racine de l'extension. Le navigateur va essayer de choisir une icône de 16x16 pixels pour un affichage normal ou une icône de 32x32 pixels pour un affichage haute densité. Donc, pour éviter toute mise à l'échelle, vous pouvez spécifier des icônes comme ceci :

        ```json
        "icons": {
              "16": "path/to/geo-16.png",
              "32": "path/to/geo-32.png"
            }
        ```

        Vous pouvez également spécifier une seule icône SVG, qui sera mise à l'échelle de manière appropriée :

        ```json
        "icons": {
              "16": "path/to/geo.svg"
            }
        ```

        > **Note :** L'élément de menu de niveau supérieur utilise les [icônes](/fr/Add-ons/WebExtensions/manifest.json/icons) spécifiées dans le manifest plutôt que ce qui est spécifié avec cette touche.

    - `id` {{optional_inline}}
      - : `string`. Identifiant unique à attribuer à cet élément Obligatoire pour les pages d'événement. Ne peut pas être identique à un autre ID pour cette extension.
    - `onclick` {{optional_inline}}
      - : `function`. Une fonction qui sera appelée lorsque l'élément de menu est cliqué. Les pages d'événements ne peuvent pas utiliser ceci : à la place, elles devraient enregistrer un écouteur pour {{WebExtAPIRef('menus.onClicked')}}.
    - `parentId` {{optional_inline}}
      - : `integer` ou `string`. L'ID d'un élément de menu parent; Cela fait de l'élément un enfant d'un élément ajouté précédemment. Remarque : Si vous avez créé plus d'un élément de menu, les éléments seront placés dans un sous-menu. Le parent du sous-menu sera étiqueté avec le nom de l'extension.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` de `string`. Similaire à `documentUrlPatterns`, mais vous permet de filtrer en fonction du `href` des balises d'ancrage et de l'attribut `src` des balises img/audio/video tags. Ce paramètre prend en charge n'importe quel schéma d'URL, même ceux qui ne sont généralement pas autorisés dans un modèle de correspondance.
    - `title` {{optional_inline}}

      - : `string`. Le texte à afficher dans l'article. Obligatoire sauf si le `type` est "separator".

        Vous pouvez utiliser "`%s`" dans la chaîne. Si vous le faites dans un élément de menu et que du texte est sélectionné dans la page lorsque le menu est affiché, le texte sélectionné sera interpolé dans le titre. Par exemple, si le `titre` est "traduire '%s' en Pig Latin" et que l'utilisateur sélectionne le mot "cool", alors le menu est activé, le titre de l'élément de menu sera : "Traduire 'cool' en Pig Latin".

        Si le titre contient une esperluette "&" le caractère suivant sera utilisé comme clé d'accès pour l'élément et l'esperluette ne sera pas affichée. Les exceptions à cette règle sont les suivantes :

        - Si le caractère suivant est également une esperluette : alors une esperluette simple sera affichée et aucune clé d'accès ne sera définie. En effet, "&&" est utilisé pour afficher une seule esperluette.
        - Si les caractères suivants sont la directive d'interpolation "%s" : alors l'esperluette ne sera pas affichée et aucune clé d'accès ne sera définie.
        - Si l'esperluette est le dernier caractère du titre : alors l'esperluette ne sera pas affichée et aucune clé d'accès ne sera définie.

        Seule la première esperluette sera utilisée pour définir une clé d'accès : les esperluettes suivantes ne seront pas affichées mais ne définiront pas les clés. Ainsi "\&A et \&B" seront affichés comme "A et B" et "A" comme clé d'accès.

    - `type` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ItemType')}}`. Le type d'élément de menu : "normal", "checkbox", "radio", "separator". Par défault à "normal".
    - `viewType` {{optional_inline}}
      - : `{{WebExtAPIRef('extension.ViewType')}}`. Liste des types d'affichage où l'élément de menu sera affiché. Par défaut à n'importe quelle vue, y compris celles qui n'ont pas de `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Si l'élément est affiché dans le menu. Par défaut, la valeur est `true`.

- `callback` {{optional_inline}}
  - : `function`. Appelé lorsque l'élément a été créé. S'il y a eu des problèmes lors de la création de l'élément, les détails seront disponibles dans {{WebExtAPIRef('runtime.lastError')}}.

### Valeur retournée

`integer` ou `string`. L'ID de l'article nouvellement créé.

## Exemples

Cet exemple crée un élément de menu contextuel qui s'affiche lorsque l'utilisateur a sélectionné du texte dans la page. Il enregistre simplement le texte sélectionné sur la console

```js
browser.menus.create({
  id: "log-selection",
  title: "Log '%s' to the console",
  contexts: ["selection"],
});

browser.menus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "log-selection") {
    console.log(info.selectionText);
  }
});
```

Cet exemple ajoute deux éléments radio, que vous pouvez utiliser pour choisir d'appliquer une bordure verte ou bleue à la page. Notez que cet exemple nécessitera la [permission activeTab](/fr/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission).

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("error creating item:" + browser.runtime.lastError);
  } else {
    console.log("item created successfully");
  }
}

browser.menus.create(
  {
    id: "radio-green",
    type: "radio",
    title: "Make it green",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

browser.menus.create(
  {
    id: "radio-blue",
    type: "radio",
    title: "Make it blue",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

var makeItBlue = 'document.body.style.border = "5px solid blue"';
var makeItGreen = 'document.body.style.border = "5px solid green"';

browser.menus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "radio-blue") {
    browser.tabs.executeScript(tab.id, {
      code: makeItBlue,
    });
  } else if (info.menuItemId == "radio-green") {
    browser.tabs.executeScript(tab.id, {
      code: makeItGreen,
    });
  }
});
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus) de chromium. Cette documentation est dérivée de [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) dans le code Chromium.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
