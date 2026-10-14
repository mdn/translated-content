---
title: "Window : méthode showDirectoryPicker()"
short-title: showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: 381dfaf4d7f555e847b0af726a93ce48cde15915
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

La méthode **`showDirectoryPicker()`** de l'interface {{DOMxRef("Window")}} affiche un sélecteur de répertoires permettant à l'utilisateur·ice de sélectionner un répertoire.

## Syntaxe

```js-nolint
showDirectoryPicker()
showDirectoryPicker(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet contenant des options, qui sont les suivantes&nbsp;:
    - `id` {{Optional_Inline}}
      - : Par définition d'un identifiant, le navigateur peut se souvenir de différents répertoires pour différents identifiants.
        Si le même identifiant est utilisé pour un autre sélecteur, le sélecteur s'ouvre dans le même répertoire.
    - `mode` {{Optional_Inline}}
      - : Une chaîne de caractères qui vaut par défaut `"read"` pour un accès en lecture seule ou `"readwrite"` pour un accès en lecture et écriture au répertoire.
    - `startIn` {{Optional_Inline}}
      - : Un objet {{DOMxRef("FileSystemHandle")}} ou un répertoire bien connu (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` ou `"videos"`) pour ouvrir la boîte de dialogue dans ce répertoire.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) dont le gestionnaire de complétion reçoit un objet {{DOMxRef("FileSystemDirectoryHandle")}}.

### Exceptions

- `AbortError` {{DOMxRef("DOMException")}}
  - : Levée si l'utilisateur·ice ferme la boîte de dialogue sans faire de sélection, ou si l'agent utilisateur juge que le répertoire sélectionné est trop sensible ou dangereux, ou si le {{DOMxRef("PermissionStatus.state")}} pour le répertoire sélectionné n'est pas `"granted"` dans le `mode` défini.
- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si l'appel a été bloqué par la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy) ou s'il n'a pas été effectué par une interaction utilisateur·ice telle qu'un clic sur un bouton.

## Sécurité

[Activation utilisateur transitoire](/fr/docs/Web/Security/Defenses/User_activation) est requise. L'utilisateur·ice doit interagir avec la page ou un élément de l'interface utilisateur pour que cette fonctionnalité fonctionne.

## Exemples

Cette fonction asynchrone affiche un sélecteur de répertoires et retourne un {{DOMxRef('FileSystemDirectoryHandle')}} une fois le répertoire sélectionné.

```js
async function obtenirRepertoire() {
  const gestionnaireRepertoire = await window.showDirectoryPicker();

  // exécuter le code de gestionnaireRepertoire
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API File System](/fr/docs/Web/API/File_System_API)
- [L'API File System Access&nbsp;: simplification de l'accès aux fichiers locaux <sup>(angl.)</sup>](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
