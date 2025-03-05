---
title: FormData.has()
slug: Web/API/FormData/has
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

La méthode **`has()`** de l'interface {{domxref("FormData")}} renvoie un booléen indiquant si un objet `FormData` contient une certaine clé.

> [!NOTE]
> Cette méthode est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
formData.has(name);
```

### Paramètres

- `name`
  - : Un {{domxref("USVString")}} représentant le nom de la clé que vous voulez tester.

### Retours

Un {{domxref("Boolean")}}.

## Exemple

La ligne suivante crée un objet `FormData` vide :

```js
var formData = new FormData();
```

L'extrait suivant montre les résultats des tests effectués pour vérifier l'existence d'un `username` dans l'objet FormData, avant et après avoir ajouté une valeur `username` avec {{domxref("FormData.append")}} :

```js
formData.has("username"); // Retourne false
formData.append("username", "Chris");
formData.has("username"); // Retourne true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utilisation de XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Utilisation des objects FormData](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
