---
title: FormData.delete()
slug: Web/API/FormData/delete
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

La méthode **`delete()`** de l'interface {{domxref("FormData")}} supprime une clé et sa (ses) valeur(s) d'un objet `FormData`.

> [!NOTE]
> Cette méthode est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
formData.delete(name);
```

### Paramètres

- `name`
  - : Le nom de la clé que vous voulez supprimer.

### Retours

Void.

## Exemple

La ligne suivante crée un objet `FormData` vide et le pré-remplit avec les paires clé/valeur d'un formulaire :

```js
var formData = new FormData(myForm);
```

Vous pouvez supprimer les clés et leurs valeurs en utilisant `delete()`:

```js
formData.delete("username");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utiliser XMLHttpRequest](/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Utiliser les objets FormData](/fr/docs/Web/API/FormData/Utilisation_objets_FormData)
- {{HTMLElement("Form")}}
