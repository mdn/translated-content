---
title: "HTMLFormControlsCollection : méthode namedItem()"
short-title: namedItem()
slug: Web/API/HTMLFormControlsCollection/namedItem
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

La méthode **`HTMLFormControlsCollection.namedItem()`** retourne la collection {{DOMxRef("RadioNodeList")}} ou l'objet {{DOMxRef("Element")}} dans la collection dont le `name` ou l'`id` correspond au nom défini, ou `null` si aucun nœud ne correspond.

Notez que cette version de `namedItem()` masque celle héritée de {{DOMxRef("HTMLCollection")}}. Comme pour cette dernière, en JavaScript, l'utilisation de la syntaxe de crochets de tableau avec une chaîne de caractères ({{JSxRef("String")}}), comme `collection["value"]`, est équivalente à `collection.namedItem("value")`.

## Syntaxe

```js-nolint
namedItem(name)
[name]
```

### Paramètres

- `name`
  - : Une chaîne de caractères utilisée pour comparer les attributs `name` ou `id` des contrôles dans cet objet `HTMLFormControlsCollection`.

### Valeur de retour

- Une collection {{DOMxRef("RadioNodeList")}} s'il y a plusieurs éléments avec le `name` ou l'`id` donné,
- Un objet {{DOMxRef("Element")}} s'il y a exactement un élément avec le `name` ou l'`id` donné, ou
- {{JSxRef("Operators/null", "null")}} si aucun élément n'a le `name` ou l'`id` donné.

> [!NOTE]
> La {{DOMxRef("RadioNodeList")}} retournée est déynamique, ce qui signifie que son contenu se met automatiquement à jour si des éléments correspondant au nom donné sont ajoutés ou supprimés de la collection. De plus, elle peut contenir des éléments d'entrée qui ne sont pas radio malgré son nom.

## Exemples

### Utiliser `namedItem()`

#### HTML

```html
<form>
  <label for="yes">Oui</label>
  <input id="yes" name="my-radio" type="radio" />
  <label for="no">Non</label>
  <input id="no" name="my-radio" type="radio" />
  <label for="maybe">Peut-être</label>
  <input id="maybe" name="my-radio" type="radio" />
  <br />
  <label for="text1">Champ texte 1</label>
  <input id="text1" name="my-form-control" type="text" />
</form>

<div id="output"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

#### JavaScript

```js
const form = document.querySelector("form");
const items = form.elements.namedItem("my-radio");

const output = document.querySelector("#output");
const itemIDs = Array.from(items)
  .map((item) => `"${item.id}"`)
  .join(", ");

const item2 = form.elements.namedItem("my-form-control");
output.textContent = `Mes éléments : ${itemIDs}\nMon élément unique : "${item2.id}"`;
```

#### Résultat

{{EmbedLiveSample("Utiliser `namedItem()`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLCollection.namedItem")}} qu'elle remplace
