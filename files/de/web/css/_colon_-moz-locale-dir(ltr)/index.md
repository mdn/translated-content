---
title: ':-moz-locale-dir(ltr)'
slug: Web/CSS/:-moz-locale-dir(ltr)
tags:
  - CSS
  - CSS Referenz
  - Localisierung
  - NeedsCompatTable
  - NeedsExample
  - Non-standard
  - Pseudoklasse
translation_of: Web/CSS/:-moz-locale-dir(ltr)
---
{{Non-standard_header}}{{CSSRef}}{{gecko_minversion_header("1.9.2")}}

## Übersicht

Die `:-moz-locale-dir(ltr)` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/pseudo-classes) matcht ein Element, falls die Benutzerschnittstelle von links nach rechts angezeigt wird. Dies wird durch das Setzen der Einstellung `intl.uidirection.locale` (wobei `locale` die aktuelle Sprachumgebung ist) auf "ltr" bestimmt.

Dies erlaubt Erweiterungen (und Themes) die einfache Anpassung ihrer Benutzerschnittstelle an die Bedürfnisse der Sprachumgebung des Benutzers. Dies kann sich von Fenster zu Fenster und sogar von Tab zu Tab unterscheiden. Dies ermöglicht es Erweiterungen, selbst dann zu funktionieren, wenn sie die standardmäßige Sprachumgebung des Benutzers nicht unterstützen, da sie sowohl links-nach-rechts als auch rechts-nach-links Layouts unterstützen können, ohne sich um die Besonderheiten der Sprachumgebung zu sorgen.

Dieser Selektor funktioniert nicht korrekt unter HTML; er matcht immer, unabhängig davon, ob das UI links-nach-rechts oder rechts-nach-links ist.

## Siehe auch

- {{Cssxref(":-moz-locale-dir(rtl)")}}
