---
title: FormData.values()
slug: Web/API/FormData/values
---

{{APIRef("XMLHttpRequest")}}

La méthode **`FormData.values()`** renvoie une {{jsxref("Les_protocoles_iteration", "itération")}} permettant de passer en revue toutes les valeurs contenues dans cet objet. Les valeurs sont des objets {{domxref("USVString")}} ou {{domxref("Blob")}}.

> **Note :** Cette méthode est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
formData.values();
```

### Valeur de retour

Retourne une {{jsxref("Les_protocoles_iteration", "itération")}} .

## Exemple

```js
// Créer un objet FormData test
var formData = new FormData();
formData.append("cle1", "valeur1");
formData.append("cle2", "valeur2");

// Affiche les valeurs
for (var value of formData.values()) {
  console.log(value);
}
```

Le résultat est :

```
valeur1
valeur2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)
- [Utiliser les objets FormData](/fr/docs/Web/Guide/Using_FormData_Objects)
- {{HTMLElement("Form")}}
