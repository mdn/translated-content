---
title: "FormData : méthode set()"
short-title: set()
slug: Web/API/FormData/set
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`set()`** de l'interface {{DOMxRef("FormData")}} définit une nouvelle valeur pour une clé existante dans un objet `FormData`, ou ajoute la clé/valeur si elle n'existe pas encore.

La différence entre `set()` et {{DOMxRef("FormData.append", "append()")}} réside dans le fait que, si la clé définie existe déjà, `set()` écrase toutes les valeurs existantes par la nouvelle, tandis que `append()` ajoute la nouvelle valeur à la fin de l'ensemble de valeurs existant.

## Syntaxe

```js-nolint
set(name, value)
set(name, value, filename)
```

### Paramètres

- `name`
  - : Le nom du champ dont les données sont contenues dans `value`.
- `value`
  - : La valeur du champ. Il peut s'agir d'une chaîne de caractères ou d'un {{DOMxRef("Blob")}} (y compris les sous-classes telles que {{DOMxRef("File")}}). Si aucune de ces options n'est définie, la valeur est convertie en chaîne de caractères.
- `filename` {{Optional_Inline}}
  - : Le nom de fichier communiqué au serveur (une chaîne de caractères), lorsqu'un {{DOMxRef("Blob")}} ou un {{DOMxRef("File")}} est passé comme deuxième paramètre. Le nom de fichier par défaut pour les objets {{DOMxRef("Blob")}} est `"blob"`. Le nom de fichier par défaut pour les objets {{DOMxRef("File")}} est le nom du fichier.

> [!NOTE]
> Si vous définissez un {{DOMxRef("Blob")}} comme données à ajouter à l'objet `FormData`, le nom de fichier qui est communiqué au serveur dans l'en-tête `"Content-Disposition"` peut varier d'un navigateur à l'autre.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
formData.set("username", "Chris");
```

Lorsque la valeur est un {{DOMxRef("Blob")}} (ou un {{DOMxRef("File")}}), vous pouvez définir son nom avec le paramètre `filename`&nbsp;:

```js
formData.set("user-pic", myFileInput.files[0], "chris.jpg");
```

Si la valeur n'est ni une chaîne de caractères ni un {{DOMxRef("Blob")}}, `set()` la convertit automatiquement en chaîne de caractères&nbsp;:

```js
formData.set("name", 72);
formData.get("name"); // "72"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
