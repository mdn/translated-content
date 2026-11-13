---
title: "Window : propriété sharedStorage"
short-title: sharedStorage
slug: Web/API/Window/sharedStorage
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}{{SecureContext_Header}}{{Non-standard_Header}}

La propriété globale en lecture seule **`sharedStorage`** retourne l'objet {{DOMxRef("WindowSharedStorage")}} pour l'origine actuelle. C'est le point d'entrée principal pour écrire des données dans le stockage partagé en utilisant la [l'API Shared Storage](/fr/docs/Web/API/Shared_Storage_API).

> [!NOTE]
> `sharedStorage` n'est pas disponible à l'intérieur des workers. Il est implémenté par {{DOMxRef("Window")}} et est également disponible dans les worklets de stockage partagé (voir {{DOMxRef("SharedStorageWorkletGlobalScope.sharedStorage")}}, qui retourne {{DOMxRef("WorkletSharedStorage")}}).

## Valeur

Une instance de l'objet {{DOMxRef("WindowSharedStorage")}}.

## Exemples

```js
window.sharedStorage
  .set("ab-testing-group", "0")
  .then(() =>
    console.log("La valeur a été enregistrée dans le stockage partagé"),
  );
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("WindowSharedStorage")}}
- [L'API Shared Storage](/fr/docs/Web/API/Shared_Storage_API)
