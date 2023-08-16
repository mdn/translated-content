---
title: cookies.SameSiteStatus
slug: Mozilla/Add-ons/WebExtensions/API/cookies/SameSiteStatus
---

{{AddonSidebar()}}

Le type `SameSiteStatus` de l'API {{WebExtAPIRef("cookies")}} représente des informations sur l'état `SameSite` d'un cookie.

## Type

Les valeurs de ce type sont des chaînes de caractères. Les valeurs possibles sont :

- `no_restriction`
  - : Représente un ensemble de cookies sans attribut `SameSite`.
- `lax`
  - : Correspond au `SameSite=Lax`
- `strict`
  - : Correspond à un ensemble de témoins avec `SameSite=Strict`

Voir les [cookies HTTP](/fr/docs/Web/HTTP/Cookies) pour plus d'informations.
