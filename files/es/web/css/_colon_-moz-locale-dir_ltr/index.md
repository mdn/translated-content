---
title: ":-moz-locale-dir(ltr)"
slug: Web/CSS/:-moz-locale-dir_ltr
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

La [pseudo-clase](/es/docs/Web/CSS/pseudo-classes) [CSS](/es/docs/Web/CSS) `:-moz-locale-dir(ltr)` selecciona un elemento si el interfaz del usuario se está mostrando de izquierda a derecha. Esto viene determinado cuando la opción de las preferencias `intl.uidirection.locale` (donde `locale` es la localización de idioma actual) está estáblecido a "ltr".

Esto permite que extensiones (y temas) puedan fácilmente adaptar su interfaz de usuario dependiendo de las necesidades del usuario en relación a la localización.Puede variar de ventana a ventana e incluso de pestaña a pestaña. Permite que las extensiones funcionen incluso si no soportan esa preferencia del usuario siempre que puedan soportar izquierda-derecha o derecha-izquierda, sin preocuparse de las necesidades específicas con respecto a la localización.

Este selector no funciona adecuadamente en HTML; siempre selecciona no importa si la localización del UI (Interfaz de Usuario) sea izquierda a derecha (left-to-right) o derecha a izqauierda (right-to-left).

## Ver además

- {{Cssxref(":-moz-locale-dir(rtl)")}}
