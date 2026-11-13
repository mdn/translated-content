---
title: "Document : propriété applets"
short-title: applets
slug: Web/API/Document/applets
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

La propriété **`applets`** de l'objet {{DOMxRef("Document")}} retourne une collection d'éléments ({{DOMxRef("HTMLCollection")}}) vide. Cette propriété est conservée uniquement pour des raisons de compatibilité&nbsp;; dans les anciennes versions des navigateurs, elle retournait une liste des applets présents dans un document.

> [!NOTE]
> Le support de l'élément `<applet>` a été supprimé par tous les navigateurs. Par conséquent, l'appel à `document.applets` retourne toujours une collection vide.

## Valeur

Un objet {{DOMxRef("HTMLCollection")}} vide.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
