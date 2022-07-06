---
title: FileRequest
slug: Web/API/FileRequest
tags:
  - API
  - DOM
  - Fichier
  - Interface
translation_of: Web/API/FileRequest
---
{{APIRef("File System API")}} {{non-standard_header}}

## Résumé

L'interface `FileRequest` étend l'interface {{domxref("DOMRequest")}} pour fournir des propriétés supplémentaires nécessaires aux objets {{domxref("LockedFile")}}.

## Propriétés

- {{domxref("FileRequest.lockedFile")}} {{readonlyinline}}
  - : L'objet {{domxref("LockedFile")}} à partir duquel la demande a été lancée.
- {{domxref("FileRequest.onprogress")}}
  - : Un gestionnaire de rappel appelé à plusieurs reprises alors que l'opération représentée par la `FileRequest` est en cours.

L'interface `FileRequest` hérite également de l'interface {{domxref("DOMRequest")}}.

## Méthodes

Aucune.

## Spécifications

| Spécification                        | Statut                           | Commentaire        |
| ------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Brouillon proposé. |

## Voir aussi

- {{domxref("FileHandle")}}
- {{domxref("LockedFile")}}
