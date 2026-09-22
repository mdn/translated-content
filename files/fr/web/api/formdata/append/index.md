---
title: "FormData : méthode append()"
short-title: append()
slug: Web/API/FormData/append
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

La méthode **`append()`** de l'interface {{DOMxRef("FormData")}} ajoute une nouvelle valeur à une clé existante dans un objet `FormData`, ou rajoute cette clé et cette valeur quand elle n'existe pas.

La différence entre {{DOMxRef("FormData.set")}} et `append()` est que, quand la clé existe, {{DOMxRef("FormData.set")}} va remplacer les valeurs existantes avec la nouvelle alors qu' `append()` va rajouter celle-ci à la fin de l'ensemble des valeurs existantes.

## Syntaxe

```js-nolint
append(name, value)
append(name, value, filename)
```

### Paramètres

- `name`
  - : Le nom du champ dont les données sont contenues dans `value`.
- `value`
  - : La valeur du champ. Elle peut être une chaîne de caractères ou un {{DOMxRef("Blob")}} (incluant les sous-classes comme {{DOMxRef("File")}}). Si aucune de ces options n'est définie, la valeur est convertie en chaîne de caractères.
- `filename` {{Optional_Inline}}
  - : Le nom de fichier envoyé au serveur (une chaîne de caractères), quand un {{DOMxRef("Blob")}} ou un {{DOMxRef("File")}} est passé en second paramètre. Le nom de fichier par défaut pour des objets {{DOMxRef("Blob")}} est "blob". Le nom de fichier par défaut pour des objets {{DOMxRef("File")}} est le nom du fichier de l'objet.

> [!NOTE]
> Si vous définissez un {{DOMxRef("Blob")}} comme donnée rattachée à un objet de type `FormData`, le nom de fichier envoyé au serveur dans l'en-tête "Content-Disposition" peut varier selon le navigateur.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
formData.append("username", "Chris");
```

Lorsque la valeur est un {{DOMxRef("Blob")}} (ou un {{DOMxRef("File")}}), vous pouvez définir son nom avec le paramètre `filename`:

```js
formData.append("user-pic", maSaisieFichier.files[0], "chris.jpg");
```

Comme pour un formulaire classique, vous pouvez ajouter plusieurs valeurs pour la même clé&nbsp;:

```js
formData.append("user-pic", maSaisieFichier.files[0], "chris1.jpg");
formData.append("user-pic", maSaisieFichier.files[1], "chris2.jpg");
```

Si la valeur n'est ni une chaîne de caractères ni un `Blob`, `append()` la convertit automatiquement en chaîne de caractères&nbsp;:

```js
formData.append("name", true);
formData.append("name", 72);
formData.getAll("name"); // ["true", "72"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des objets `FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- L'élément HTML {{HTMLElement("form")}}
