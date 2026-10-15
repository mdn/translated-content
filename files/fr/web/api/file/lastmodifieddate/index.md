---
title: "File : propriété lastModifiedDate"
short-title: lastModifiedDate
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Non-standard_Header}}

La propriété en lecture seule **`lastModifiedDate`** de l'interface {{DOMxRef("File")}} fournit la date de dernière modification du fichier. Les fichiers dont la date de dernière modification est inconnue retournent la date actuelle.

## Valeur

Un objet {{JSxRef("Global_Objects/Date", "Date")}} indiquant la date et l'heure de la dernière modification du fichier. L'horodatage retourné par `someFile.lastModifiedDate.getTime()` hérite de la valeur et de la précision de {{DOMxRef("File.lastModified")}}, sans introduire d'inexactitude supplémentaire.

## Exemples

```js
// entreeFichier est un HTMLInputElement : <input type="file" multiple id="mon-entree-fichier">
const entreeFichier = document.getElementById("mon-entree-fichier");

for (const fichier of entreeFichier.files) {
  console.log(
    `${fichier.name} a une date de dernière modification de ${fichier.lastModifiedDate}`,
  );
}
```

## Spécifications

_Bien que présente dans les premières versions du projet de spécification de l'API File, cette propriété en a été retirée et est désormais non standard. Utilisez {{DOMxRef("File.lastModified")}} à la place._

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("File")}}
