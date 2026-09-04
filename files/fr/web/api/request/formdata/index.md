---
title: "Request : méthode formData()"
short-title: formData()
slug: Web/API/Request/formData
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`formData()`** de l'interface {{DOMxRef("Request")}} lit le corps de la requête et le retourne sous la forme d'une promesse qui se résout avec un objet {{DOMxRef("FormData")}}.

## Syntaxe

```js-nolint
formData()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec un objet {{DOMxRef("FormData")}}.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée pour l'une des raisons suivantes&nbsp;:
    - Le corps de la requête est [perturbé ou verrouillé](/fr/docs/Web/API/Fetch_API/Using_Fetch#flux_verrouillés_et_perturbés).
    - Une erreur s'est produite lors du décodage du contenu du corps (par exemple, parce que l'en-tête {{HTTPHeader("Content-Encoding")}} est incorrect).
    - Le type {{Glossary("MIME")}} du corps ne peut pas être déterminé à partir des en-têtes {{HTTPHeader("Content-Type")}} inclus dans la requête, ou n'est pas `application/x-www-form-urlencoded` ou `multipart/form-data`.
    - Le corps ne peut pas être analysé comme un objet `FormData`.

## Exemples

```js
const donneesFormulaire = new FormData();
const champFichier = document.querySelector('input[type="file"]');

donneesFormulaire.append("username", "abc123");
donneesFormulaire.append("avatar", champFichier.files[0]);

const requete = new Request("/myEndpoint", {
  method: "POST",
  body: donneesFormulaire,
});

requete.formData().then((donnees) => {
  // faire quelque chose avec les données du formulaire envoyées dans la requête
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Response.formData()")}}
