---
title: menus.update()
slug: Mozilla/Add-ons/WebExtensions/API/menus/update
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Update
  - WebExtensions
  - contextMenus
translation_of: Mozilla/Add-ons/WebExtensions/API/menus/update
---
{{AddonSidebar()}}

Met à jour un élément de menu précédemment créé.

Pour la compatibilité avec d'autres navigateurs, Firefox rend cette méthode disponible via l'espace de noms `contextMenus` ainsi que l'espace de noms des `menus`.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var updating = browser.menus.update(
  id,               // integer or string
  updateProperties // object
)
```

### Paramètres

- `id`
  - : `integer` ou `string`. L'ID de l'article à mettre à jour.
- `updateProperties`

  - : `object`. Les propriétés à mettre à jour. Identique à l'objet `createProperties` passé à  {{WebExtAPIRef("menus.create()", "menus.create()")}}, sauf que l'`id` ne peut être défini. En outre, les `icônes` ne peuvent être modifiées que dans les commandes de menu, et non dans le menu contextuel de niveau supérieur. L'icône de niveau supérieur correspond à l'icône principale de l'extension telle que déclarée dans le fichier manifeste de l'extension.

    - `checked` {{optional_inline}}
      - : `boolean`. L'état initial d'une case à cocher ou d'un élément radio : `true` fpour sélectionné et `false` pour non sélectionné. Un seul élément radio peut être sélectionné à la fois dans un groupe donné d'éléments radio.
    - `command` {{optional_inline}}

      - : `string`. Chaîne décrivant une action qui doit être effectuée lorsque l'utilisateur clique sur l'élément. Les valeurs possibles sont :

        - `"_execute_browser_action"`: simuler un clic sur l'action du navigateur de l'extension, en ouvrant son popup s'il en a un
        - `"_execute_page_action"`: simuler un clic sur l'action de la page de l'extension, en ouvrant son popup si elle en a une
        - `"_execute_sidebar_action"`: ouvre la barre latérale de l'extension

        Cliquer sur l'élément déclenchera toujours l'événement  {{WebExtAPIRef("menus.onClicked")}}, mais rien ne garantit l'ordre ici: la commande peut être exécutée avant le lancement de `onClicked`.

    - `contexts` {{optional_inline}}

      - : `array` de `{{WebExtAPIRef('menus.ContextType')}}`. Tableau des contextes dans lesquels cet élément de menu apparaîtra. Si cette option est omise :

        - si le parent de l'élément a des contextes définis, alors cet élément héritera des contextes de son parent
        - sinon, l'élément reçoit un tableau de contexte de \["page"].

    - `documentUrlPatterns` {{optional_inline}}
      - : `array` de `string`. Vous permet de limiter l'élément à s'appliquer uniquement aux documents dont l'URL correspond à l'un des éléments [motifs](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) de données. Ceci s'applique également aux cadres.
    - `enabled` {{optional_inline}}
      - : `boolean`. Si cet élément de menu est activé ou désactivé. La valeur par défaut est `true`.
    - `icons` {{optional_inline}}

      - : `object`. Une ou plusieurs icônes personnalisées à afficher à côté de l'élément. Les icônes personnalisées ne peuvent être définies que pour les éléments apparaissant dans les sous-menus. Cette propriété est un objet avec une propriété pour chaque icône fournie : le nom de la propriété doit inclure la taille de l'icône en pixels, et le chemin est relatif à l'icône du répertoire racine de l'extension. Le navigateur essaie de choisir une icône 16x16 pixels pour un affichage normal ou une icône 32x32 pixels pour un affichage haute densité. Pour éviter toute mise à l'échelle, vous pouvez spécifier des icônes comme celle-ci :

        ```json
        "icons": {
              "16": "path/to/geo-16.png",
              "32": "path/to/geo-32.png"
            }
        ```

        Alternativement, vous pouvez spécifier une seule icône SVG, et elle sera mise à l'échelle de manière appropriée :

        ```json
        "icons": {
              "16": "path/to/geo.svg"
            }
        ```

        > **Note :** The top-level menu item uses the [icons](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) specified in the manifest rather than what is specified with this key.

    - `id` {{optional_inline}}
      - : `string`. L'ID unique à affecter à cet article. Obligatoire pour les pages d'événements. Ne peut pas être le même qu'un autre ID pour cette extension.
    - `onclick` {{optional_inline}}
      - : `function`. Une fonction qui sera appelée lorsque vous cliquerez sur l'élément de menu. Les pages d'événements ne peuvent pas l'utiliser : elles doivent plutôt enregistrer un auditeur pour {{WebExtAPIRef('menus.onClicked')}}.
    - `parentId` {{optional_inline}}
      - : `integer` ou `string`. L'ID d'un élément de menu parent ; ceci fait de l'élément un enfant d'un élément précédemment ajouté. Remarque : Si vous avez créé plus d'un élément de menu, les éléments seront placés dans un sous-menu. Le parent du sous-menu sera étiqueté avec le nom de l'extension.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` de `string`. Similairer à `documentUrlPatterns`, mais vous permet de filtrer en fonction de la `href` des balises d'ancre et l'attribut `src` des balises  img/audio/video. Ce paramètre prend en charge n'importe quel schéma d'URL, même ceux qui ne sont généralement pas autorisés dans un modèle de correspondance.
    - `title` {{optional_inline}}

      - : `string`. Le texte à afficher dans le poste. Obligatoire sauf si le `type` est "separateur".

        Vous pouvez utiliser "`%s`" dans la chaîne de caractères. Si vous le faites dans un élément de menu, et qu'un texte est sélectionné dans la page lorsque le menu est affiché, le texte sélectionné sera interpolé dans le titre. Par exemple, si `title` est "Traduction '%s' à Pig Latin" et que l'utilisateur sélectionne le mot "cool", puis active le menu, alors le titre de l'élément de menu sera : "Traduction 'cool' à Pig Latin".

        Si le titre contient une esperluette "&", le caractère suivant sera utilisé comme clé d'accès pour l'élément et l'esperluette ne sera pas affichée. Les exceptions à cette règle sont les suivantes :

        - Si le caractère suivant est également une esperluette : alors une esperluette simple sera affichée et aucune clé d'accès ne sera définie. En effet, "&&" est utilisé pour afficher une seule esperluette.
        - Si les caractères suivants sont la directive d'interpolation "%s" : alors l'esperluette ne sera pas affichée et aucune clé d'accès ne sera définie.
        - Si l'esperluette est le dernier caractère du titre : alors l'esperluette ne sera pas affichée et aucune clé d'accès ne sera définie.

        Seule la première esperluette sera utilisée pour définir une clé d'accès : les esperluettes suivantes ne seront pas affichées mais ne définiront pas les clés. Ainsi, "\&A et \&B" seront affichés comme "A et B" et "A" comme clé d'accès

    - `type` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ItemType')}}`. Le type d'élément de menu : "normal", "checkbox", "radio", "separator". Defaults to "normal".
    - `viewTypes` {{optional_inline}}
      - : `{{WebExtAPIRef('extension.ViewType')}}`. Liste des types d'affichage où l'élément de menu sera affiché. Par défaut à n'importe quelle vue, y compris celles qui n'ont pas de `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Si l'élément est affiché dans le menu. La valeur par défaut est `true`.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera satisfaite sans argument si la mise à jour a réussi, ou rejetée avec un message d'erreur si la mise à jour a échoué.

## Exemples

Cet exemple crée un élément de menu, puis met à jour son titre lorsque l'utilisateur clique dessus :

```js
function onUpdated() {
  console.log("item updated successfully");
}

function onError() {
  console.log("error updating item:" + browser.runtime.lastError);
}

browser.menus.create({
  id: "do-not-click-me",
  title: "Do not click this button",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "do-not-click-me") {
    var updating = browser.contextMenus.update(info.menuItemId, {
      title: "Do not click this button again"
    });
    updating.then(onUpdated, onError);
  }
});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.menus.update", 10)}}

> **Note :**
>
> Cette API est basée sur l'API [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus) de chromium. Cette documentation est dérivée de [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) dans le code Chromium.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>
