---
title: "Window : méthode showSaveFilePicker()"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 381dfaf4d7f555e847b0af726a93ce48cde15915
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

La méthode **`showSaveFilePicker()`** de l'interface {{DOMxRef("Window")}} affiche un sélecteur de fichiers permettant à l'utilisateur·ice de sauvegarder un fichier, soit en sélectionnant un fichier existant, soit en entrant un nom pour un nouveau fichier.

## Syntaxe

```js-nolint
showSaveFilePicker()
showSaveFilePicker(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet contenant des options, qui sont les suivantes&nbsp;:
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Une valeur booléenne qui par défaut est `false`. Par défaut, le sélecteur doit inclure une option pour ne pas appliquer de filtres de type de fichier (instiguée avec l'option type ci-dessous). Définir cette option sur `true` signifie que cette option n'est _pas_ disponible.
    - `id` {{Optional_Inline}}
      - : Par définition d'un identifiant, le navigateur peut se souvenir de différents répertoires pour différents identifiants. Si le même identifiant est utilisé pour un autre sélecteur, le sélecteur s'ouvre dans le même répertoire.
    - `startIn` {{Optional_Inline}}
      - : Un objet {{DOMxRef("FileSystemHandle")}} ou un répertoire bien connu (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` ou `"videos"`) pour ouvrir la boîte de dialogue.
    - `suggestedName` {{Optional_Inline}}
      - : Une chaîne de caractères ({{JSxRef("String")}}). Le nom de fichier suggéré.
    - `types` {{Optional_Inline}}
      - : Un tableau ({{JSxRef("Array")}}) des types de fichiers autorisés à sauvegarder. Chaque élément est un objet avec les options suivantes&nbsp;:
        - `description` {{Optional_Inline}}
          - : Une description optionnelle de la catégorie des types de fichiers autorisés. Par défaut, une chaîne de caractères vide.
        - `accept`
          - : Un {{JSxRef("Object")}} dont les clés sont les [types MIME](/fr/docs/Web/HTTP/Guides/MIME_types/Common_types) et les valeurs un tableau ({{JSxRef("Array")}}) d'extensions de fichiers (voir ci-dessous pour un exemple).

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) dont le gestionnaire de complétion reçoit un objet {{DOMxRef("FileSystemFileHandle")}}.

### Exceptions

- `AbortError` {{DOMxRef("DOMException")}}
  - : Levée si l'utilisateur·ice ferme le sélecteur de fichiers sans sélectionner ou saisir un fichier, ou si l'agent utilisateur juge que les fichiers sélectionnés sont trop sensibles ou dangereux.
- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si l'appel a été bloqué par la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy) ou s'il n'a pas été effectué p une interaction utilisateur·ice telle qu'un clic sur un bouton.
- {{JSxRef("TypeError")}}
  - : Levée si les types acceptés ne peuvent pas être traités, ce qui peut se produire si&nbsp;:
    - Toute chaîne de caractères clé des options `accept` de n'importe quel élément dans les options `types` ne peut pas être analysée en un type MIME valide.
    - Toute chaîne de caractères valeur des options `accept` de n'importe quel élément dans les options `types` est invalide, par exemple, si elle ne commence pas par `.` et se termine par `.`, ou si elle contient des points de code invalides et que sa longueur est supérieure à 16.
    - Les options `types` sont vides et les options `excludeAcceptAllOption` sont `true`.

## Sécurité

[Une activation utilisateur transitoire](/fr/docs/Web/Security/Defenses/User_activation) est requise. L'utilisateur·ice doit interagir avec la page ou un élément de l'interface utilisateur pour que cette fonctionnalité fonctionne.

## Exemples

La fonction suivante affiche un sélecteur de fichiers, avec les fichiers texte mis en évidence pour la sélection.

```js
async function obtenirGestionnaireNouveauFichier() {
  const opts = {
    types: [
      {
        description: "Fichier texte",
        accept: { "text/plain": [".txt"] },
      },
    ],
  };
  return await window.showSaveFilePicker(opts);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API File System](/fr/docs/Web/API/File_System_API)
- [L'API File System Access&nbsp;: simplification de l'accès aux fichiers locaux <sup>(angl.)</sup>](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
