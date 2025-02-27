---
title: FormData.keys()
slug: Web/API/FormData/keys
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

La méthode `FormData.keys()` renvoie une {{jsxref("Les_protocoles_iteration", "itération")}} permettant de parcourir toutes les clés contenues dans cet objet. Les clés sont des objets {{domxref("USVString")}}.

> [!NOTE]
> Cette méthode est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
formData.keys();
```

### Valeur de retour

Retourne une {{jsxref("Les_protocoles_iteration", "itération")}}.

## Exemple

```js
// Créer un object FormData test
var formData = new FormData();
formData.append("cle1", "valeur1");
formData.append("cle2", "valeur2");

// Affiche les clés
for (var key of formData.keys()) {
  console.log(key);
}
```

Le résultat est :

```
cle1
cle2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Utiliser les objets FormData](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
