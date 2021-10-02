---
title: window.openDialog
slug: Web/API/Window/openDialog
tags:
  - DOM
  - Gecko
  - Window
  - boîte de dialogue
translation_of: Web/API/Window/openDialog
---
{{ ApiRef() }}

`window.openDialog` est une extension à [window.open()](/fr/DOM/window.open). Elle s'utilise de la même manière, excepté qu'elle peut prendre plusieurs paramètres optionnels après`windowFeatures`, et que`windowFeatures` est traîté différemment.

Les paramètres optionnels, si présents, seront regroupés dans un objet JavaScript Array et seront accessibles depuis la nouvelle fenêtre par la propriété `window.arguments`. Ils sont accessibles depuis les scripts de la fenêtre à tout moment, notamment lors du traitement d'un évênement`load` . Ces paramètres peuvent donc être utilisés pour passer des arguments à une boîte de dialogue, et pour les récupérer ensuite.

Notez que l'appel à la méthode`openDialog()` se termine immédiatement. Si vous souhaitez le bloquer jusqu'à ce que l'utilisateur ferme la boîte de dialogue, utilisez la valeur`modal` pour le paramètre f`eatures`. En conséquence, l'utilisateur ne pourra pas interagir avec la fenêtre parente jusqu'à ce qu'il ferme la boîte de dialogue modale.

### Syntaxe

    newWindow = openDialog(url, name, features, arg1, arg2, ...)

- newWindow
  - : La nouvelle fenêtre ouverte.
- url
  - : L'URL du document à charger dans la nouvelle fenêtre.
- name
  - : Le nom de la fenêtre (optionnel). Voir la description de[window.open()](/fr/DOM/window.open) pour plus de détails.
- features
  - : Voir la description de[window.open()](/fr/DOM/window.open) pour la description.
- arg1, arg2, ...
  - : Les arguments à passer à la nouvelle fenêtre (optionnel).

### Exemple

```js
var win = openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
```

### Notes

#### Nouvelles fonctionnalités

- `all`
  - : Active ou désactive (`"all=no"`) toutes les fonctionnalités (excepté `chrome`, `dialog` et`modal`). Peut être utilisé conjointement avec les autres drapeaux (par exemple, `"menubar=no, all"` active toutes les fonctionnalités excepté `menubar`). Ce drapeau est ignorée par la méthode[window.open()](/fr/DOM/window.open) mais pas par `window.openDialog()`.

#### Comportement

La méthode`window.openDialog()` traite l'absence du paramètre`features` de la même manière que[window.open()](/fr/DOM/window.open) (une chaîne vide désactive toutes les fonctionnalités) excepté pour`chrome` et`dialog` qui sont activés par défaut et peuvent être explicitement désactivées par "`chrome=no`".

#### Passage de paramètres supplémentaires

Pour passer des paramètres supplémentaires à la boîte de dialogue, vous pouvez simplement les ajouter après le paramètre f`eatures` :

```js
openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
```

Ces paramètres seront ensuite regroupés dans une propriété `arguments` de type[Array](/en/Core_JavaScript_1.5_Reference/Global_Objects/Array), et cette propriété sera ajoutée à la nouvelle boîte de dialogue.

Pour accéder à ces paramètres depuis un script de la boîte de dialogue, utilisez le procédé suivant :

```js
var food = window.arguments[0];
var price = window.arguments[1];
```

Notez que vous pouvez accéder à cette propriété depuis n'importe où dans le script. ([Autre exemple](/en/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog)).

#### Retourner des arguments depuis la boîte de dialogue

Depuis que[`window.close()`](/fr/DOM/window.close) efface toutes les propriétés associées à la boîte de dialogue (c'est-à-dire les variables spécifiées depuis le code JavaScript chargé depuis la boîte de dialogue), il n'est pas possible de retourner des valeur après la fermeture de la boîte de dialogue en utilisant des variables globales (ou toute autre méthode).

Pour pouvoir retourner des valeurs à la fenêtre parente, vous devez passer un objet via les paramètres supplémentaires. Vous pouvez ensuite accéder à cet objet depuis la boîte de dialogue et modifier ces propriétés, dont les données que vous souhaiter conserver après l'appel à la méthode`window.close()`.

```js
var retVals = { address: null, delivery: null };
openDialog("http://example.tld/zzz.xul", "dlg", "modal", "pizza", 6.98, retVals);
```

Si vous modifiez les propriétés de l'objet`retVals` depuis la boîte de dialogue comme décrit précédemment, vous pouvez y accéder via le tableau`retVals` après l'appel à `openDialog()`.

Depuis la boîte de dialogue, vous pouvez modifier les propriétés comme suit :

```js
var retVals = window.arguments[2];
retVals.address = enteredAddress;
retVals.delivery = "immediate";
```

Voir aussi[ce message](http://groups.google.com/group/netscape.public.dev.xul/msg/02075a1736406b40). ([Autre exemple](/en/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog)).
Voir aussi[window.importDialog()](/fr/DOM/window.importDialog).

### Spécification

{{ DOM0() }}

### Compatibilité des navigateurs

{{Compat("api.Window.openDialog")}}

### Voir également

- [Another example](/en-US/Add-ons/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog)
- [`window.importDialog`](/en-US/docs/Archive/Web/Window.importDialog) (mobile) {{obsolete_inline}}
