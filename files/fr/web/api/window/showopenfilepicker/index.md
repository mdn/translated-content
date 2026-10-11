---
title: "Window : méthode showOpenFilePicker()"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 381dfaf4d7f555e847b0af726a93ce48cde15915
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

La méthode **`showOpenFilePicker()`** de l'interface {{DOMxRef("Window")}} affiche un sélecteur de fichiers permettant à l'utilisateur·ice de sélectionner un fichier ou plusieurs fichiers et retourne un gestionnaire pour le(s) fichier(s).

## Syntaxe

```js-nolint
showOpenFilePicker()
showOpenFilePicker(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet contenant des options, qui sont les suivantes&nbsp;:
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Une valeur booléenne qui vaut par défaut `false`. Par défaut, le sélecteur doit inclure une option pour ne pas appliquer de filtres de type de fichier (instiguée avec l'option type ci-dessous). Définir cette option sur `true` signifie que cette option n'est _pas_ disponible.
    - `id` {{Optional_Inline}}
      - : En définissant un identifiant, le navigateur peut se souvenir de différents répertoires pour différents identifiants. Si le même identifiant est utilisé pour un autre sélecteur, le sélecteur s'ouvre dans le même répertoire.
    - `multiple` {{Optional_Inline}}
      - : Une valeur booléenne qui vaut par défaut `false`. Lorsqu'elle est définie sur `true`, plusieurs fichiers peuvent être sélectionnés.
    - `startIn` {{Optional_Inline}}
      - : Un objet {{DOMxRef("FileSystemHandle")}} ou un répertoire bien connu (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` ou `"videos"`) pour ouvrir la boîte de dialogue dans ce répertoire.
    - `types` {{Optional_Inline}}
      - : Un tableau ({{JSxRef("Array")}}) des types de fichiers autorisés à sélectionner. Chaque élément est un objet avec les options suivantes&nbsp;:
        - `description` {{Optional_Inline}}
          - : Une description optionnelle de la catégorie de types de fichiers autorisés. Par défaut, une chaîne de caractères vide.
        - `accept`
          - : Un {{JSxRef("Object")}} dont les clés sont définies sur le [type MIME](/fr/docs/Web/HTTP/Guides/MIME_types/Common_types) et les valeurs un tableau ({{JSxRef("Array")}}) d'extensions de fichiers (voir ci-dessous pour un exemple).

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) dont le gestionnaire de complétion reçoit un tableau ({{JSxRef("Array")}}) d'objets {{DOMxRef("FileSystemFileHandle")}}.

### Exceptions

- `AbortError` {{DOMxRef("DOMException")}}
  - : Levée si l'utilisateur·ice ferme l'invite sans faire de sélection, ou si l'agent utilisateur juge que les fichiers sélectionnés sont trop sensibles ou dangereux.
- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si l'appel a été bloqué par la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy) ou s'il n'a pas été effectué par une interaction utilisateur·ice telle qu'un clic sur un bouton.
- {{JSxRef("TypeError")}}
  - : Levée si les types acceptés ne peuvent pas être traités, ce qui peut se produire si&nbsp;:
    - Une chaîne de caractères clé des options `accept` de n'importe quel élément des options `types` ne peut pas analyser un type MIME valide.
    - Une ou plusieurs chaînes de caractères valeur des options `accept` de n'importe quel élément des options `types` sont invalides, par exemple si elles ne commencent pas par `.` et ne se terminent pas par `.`, ou si elles contiennent des points de code invalides et que leur longueur est supérieure à 16.
    - Les options `types` sont vides et les options `excludeAcceptAllOption` sont `true`.

## Sécurité

[Activation utilisateur transitoire](/fr/docs/Web/Security/Defenses/User_activation) est requise. L'utilisateur·ice doit interagir avec la page ou un élément de l'interface utilisateur pour que cette fonctionnalité fonctionne.

## Exemples

Ici, nous définissons l'objet d'options à passer à la méthode. Nous autorisons la sélection de types de fichiers image, sans option pour autoriser tous les types de fichiers, ni sélection multiple de fichiers.

```js
const listeOptions = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};
```

Ensuite, nous pouvons créer une fonction asynchrone qui affiche la boîte de dialogue de sélection de fichiers et retourne le fichier sélectionné.

```js
// crée une référence pour notre gestionFichier
let gestionFichier;

async function obtenirFichier() {
  // ouvre la boîte de dialogue de sélection de fichiers, déstructure le tableau à un élément retourné
  [gestionFichier] = await window.showOpenFilePicker(listeOptions);

  // exécute le code avec notre gestionFichier
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API File System](/fr/docs/Web/API/File_System_API)
- [L'API File System Access&nbsp;: simplification de l'accès aux fichiers locaux <sup>(angl.)</sup>](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
