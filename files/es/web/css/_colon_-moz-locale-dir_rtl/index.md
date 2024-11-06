---
title: ":-moz-locale-dir(rtl)"
slug: Web/CSS/:-moz-locale-dir_rtl
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

La [pseudo-clase](/es/docs/Web/CSS/pseudo-classes) [CSS](/es/docs/Web/CSS) `:-moz-locale-dir(rtl)` selecciona un elemento si el interfaz del usuario se está mostrando de derecha a izquierda. Esto viene determinado cuando la opción de las preferencias `intl.uidirection.locale` (donde `locale` es la localización de idioma actual) está estáblecida a "rtl".

Esto permite que extensiones (y temas) puedan fácilmente adaptar su interfaz de usuario dependiendo de las necesidades del usuario en relación a la localización.Puede variar de ventana a ventana e incluso de pestaña a pestaña. Permite que las extensiones funcionen incluso si no soportan esa preferencia del usuario, siempre que puedan soportar izquierda-derecha o derecha-izquierda, sin preocuparse de las necesidades específicas con respecto a la localización.

Este selector no funciona adecuadamente en HTML; nunca selecciona nada, no importa si la localización del UI (Interfaz de Usuario) sea izquierda a derecha (left-to-right) o derecha a izqauierda (right-to-left).

## Ver además

- {{cssxref(":-moz-locale-dir(ltr)")}}
- [Aségurate que tu tema funciona con localizaciones RTL](/es/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales)
