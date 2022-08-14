---
title: Window.openDialog()
slug: Web/API/Window/openDialog
translation_of: Web/API/Window/openDialog
browser-compat: api.Window.openDialog
---
{{APIRef("HTML DOM")}}{{Non-standard_header}}

La méthode `window.openDialog()` est une extension de [`window.open()`](/fr/docs/Web/API/Window/open). Elle se comporte de la même façon mais possède plus de paramètres et traite le paramètre `windowFeatures` différemment.

Les paramètres optionnels, s'ils sont présents, sont empaquetés dans un tableau JavaScript ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) et ajouté à la nouvelle fenêtre ainsi créée via une propriété intitulée [`window.arguments`](/fr/docs/Web/API/window/arguments). Ils pourront être utilisés par le code JavaScript de la fenêtre à tout moment, y compris lors de l'exécution d'un gestionnaire d'évènement pour [`load`](/fr/docs/Web/API/Window/load_event). Ces paramètres pourront alors être utilisés afin de passer des arguments entre la fenêtre et la boîte de dialogue.

L'appel à `openDialog()` renvoie immédiatement. Si on souhaite que l'appel soit bloquant jusqu'à ce que la personne ait fermé la boîte de dialogue, on pourra fournir `modal` comme paramètre pour `windowFeatures`. Cela signifie également que l'utilisateur ne pourra pas interagir avec la fenêtre ouvrante tant que la boîte modale n'est pas fermée.

## Syntaxe

```js
openDialog(url)
openDialog(url, nom)
openDialog(url, nom, fonctionnalites)
openDialog(url, nom, fonctionnalites, arg0, arg1, /* ... ,*/ argN)
```

### Paramètres

- `url`
  - : L'URL à charger dans la nouvelle fenêtre ouverte.
- `nom` {{optional_inline}}
  - : Le nom de la fenêtre. Voir la description de [`window.open()`](/fr/docs/Web/API/Window/open) pour plus de détails.
- `fonctionnalites` {{optional_inline}}
  - : Voir [`window.open()`](/fr/docs/Web/API/Window/open) pour plus de détails.
- `arg1`, `arg2`… {{optional_inline}}
  - : Les arguments à passer à la nouvelle fenêtre.

### Valeur de retour

La nouvelle fenêtre ouverte.

## Exemples

```js
let win = openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
```

## Notes

#### Nouvelles fonctionnalités

`all` active (ou désactive avec `("all=no")`) initialement tout le chrome (excepté pour le comportement des marqueurs `chrome`, `dialog` et `modal`). Ce comportement peut être surchargé (par exemple afin que `"menubar=no,all"` affiche tout le chrome sauf la barre de menu). Cette fonctionnalité est explicitement ignorée par [`window.open()`](/fr/docs/Web/API/Window/open). `window.openDialog()` l'utilise en raison de ses hypothèses différentes.

#### Comportement par défaut

Les fonctionnalités `chrome` et `dialog` sont prises par défaut comme actives, à moins d'être explicitement désactivées ("`chrome=no`"). `openDialog()` considère l'absence de paramètres de la même façon que [`window.open()`](/fr/docs/Web/API/Window/open). Autrement dit, une chaîne de caractères vide désactive toutes les fonctionnalités sauf `chrome` et `dialog`. Si le paramètre `features` est une chaîne de caractères de longueur nulle ou contient uniquement une ou plusieurs fonctionnalités (`chrome`, `dependent`, `dialog` et `modal`), les fonctionnalités du chrome sont déterminées afin de correspondre le mieux possible au système d'exploitation.

#### Passer des paramètres supplémentaires à la boîte de dialogue

Afin de passer des paramètres supplémentaires à la boîte de dialogue, on pourra les fournir après le paramètre `windowFeatures`&nbsp;:

```js
openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
```

Les paramètres supplémentaires sont alors empaquetés dans une propriété intitulée `arguments` et qui est un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)). Cette propriété est ajoutée à la fenêtre de dialogue ainsi créée.

Pour accéder à ces paramètres depuis le code de la boîte de dialogue, on pourra utiliser la structure suivante&nbsp;:

```js
let food  = window.arguments[0];
let price = window.arguments[1];
```

Il est possible d'accéder à cette propriété depuis n'importe quel endroit dans le code de la boîte de dialogue.

#### Renvoyer des valeurs depuis la boîte de dialogue

Comme [`window.close()`](/fr/docs/Web/API/Window/close) efface toutes les propriétés associées à la fenêtre de dialogue (comme les paramètres supplémentaires vus avant), il n'est pas possible de fournir des valeurs en retour après la fermeture de la fenêtre en utilisant des variables globales (ou d'autres structures).

Afin de pouvoir renvoyer des valeurs à la fenêtre appelante, il faudra fournir des objets via les paramètres supplémentaires. Le code de la fenêtre de dialogue pourra alors modifier des propriétés de cet objet, qui contiendront les valeurs qu'on veut renvoyer ou conserver après l'opération `window.close()`.

```js
let retVals = { address: null, delivery: null };
openDialog("http://example.tld/zzz.xul", "dlg", "modal", "pizza", 6.98,
    retVals);
```

Si on modifie les propriétés de l'objet `retVals` dans le code de la boîte de dialogue, comme ci-après, on pourra consulter leurs valeurs depuis la fenêtre d'origine après le retour de l'appel à `openDialog()`.

Au sein de la fenêtre de dialogue, on pourra modifier les propriétés comme suit&nbsp;:

```js
let retVals = window.arguments[2];
retVals.address  = enteredAddress;
retVals.delivery = "immediate";
```

## Spécifications

Cette méthode ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}
