---
title: "File : propriété lastModified"
short-title: lastModified
slug: Web/API/File/lastModified
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("File API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`lastModified`** de l'interface {{DOMxRef("File")}} fournit la date de dernière modification du fichier sous forme de nombre de millisecondes écoulées depuis l'époque Unix (1er janvier 1970 à minuit). Les fichiers dont la date de dernière modification est inconnue retournent la date actuelle.

## Valeur

Un entier représentant le nombre de millisecondes écoulées depuis l'époque Unix.

## Exemples

L'exemple suivant parcourt les fichiers que vous choisissez et affiche si chaque fichier a été modifié au cours de l'année écoulée.

### HTML

```html
<input type="file" id="selecteur-fichier" name="fileList" multiple />
<output id="sortie"></output>
```

```css hidden
output {
  display: block;
  white-space: pre-wrap;
}
```

### JavaScript

```js
const sortie = document.getElementById("sortie");
const selecteurFichier = document.getElementById("selecteur-fichier");

selecteurFichier.addEventListener("change", (event) => {
  const fichiers = event.target.files;
  const maintenant = new Date();
  sortie.textContent = "";

  for (const fichier of fichiers) {
    const date = new Date(fichier.lastModified);
    // true si le fichier n'a pas été modifié depuis plus d'un an
    const perime = maintenant.getTime() - fichier.lastModified > 31_536_000_000;
    sortie.textContent += `${fichier.name} est ${
      perime ? "périmé" : "récent"
    } (${date}).\n`;
  }
});
```

### Résultat

{{EmbedLiveSample("Exemples")}}

### Fichiers créés dynamiquement

Si un fichier est créé dynamiquement, l'heure de dernière modification peut être fournie dans la
fonction constructeur {{DOMxRef("File.File()", "File()")}}. Si elle est absente,
`lastModified` est normalement définie sur l'heure actuelle au moment où l'objet `File` est créé.

Dans Firefox, si les parties du fichier incluent un fichier lu depuis le disque, le nouveau fichier peut hériter de l'heure de modification de ce fichier à la place.

```js
const fichierAvecDate = new File([], "file.bin", {
  lastModified: new Date(2017, 1, 1),
});
console.log(fichierAvecDate.lastModified); // retourne 1485903600000

const fichierSansDate = new File([], "file.bin");
console.log(fichierSansDate.lastModified); // retourne l'heure actuelle
```

## Précision temporelle réduite

Pour offrir une protection contre les attaques par minutage et [la collecte d'empreintes digitales](/fr/docs/Glossary/Fingerprinting), la précision de `lastModified` peut être réduite en fonction des paramètres du navigateur.

Lorsque une valeur `lastModified` est fournie au constructeur {{DOMxRef("File.File", "File()")}}, le navigateur n'applique pas d'arrondi temporel à l'heure fournie. Il en va de même pour les heures de modification lues depuis le disque, dont la précision dépend du système de fichiers, y compris celles héritées des parties de fichier dans Firefox.

Lorsque le constructeur utilise l'heure actuelle comme valeur par défaut de `lastModified`, il obtient l'heure actuelle de la même manière que {{JSxRef("Date.now()")}}. Il hérite de la précision de cette lecture de l'horloge sans introduire d'inexactitude supplémentaire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("File")}}
