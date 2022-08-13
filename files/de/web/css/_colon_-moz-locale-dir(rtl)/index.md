---
title: ':-moz-locale-dir(rtl)'
slug: Web/CSS/:-moz-locale-dir(rtl)
tags:
  - CSS
  - CSS Referenz
  - Lokalisierung
  - NeedsCompatTable
  - NeedsExample
  - Non-standard
  - Pseudoklasse
  - Rechts-nach-links
translation_of: Web/CSS/:-moz-locale-dir(rtl)
---
{{Non-standard_header}}{{CSSRef}}{{gecko_minversion_header("1.9.2")}}

## Übersicht

Die `:-moz-locale-dir(rtl)` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/pseudo-classes) matcht ein Element, falls die Benutzerschnittstelle von rechts nach links angezeigt wird. Dies wird durch das Setzen der Einstellung `intl.uidirection.locale` (wobei `locale` die aktuelle Sprachumgebung ist) auf "rtl" bestimmt.

Dies erlaubt Erweiterungen (und Themes) die einfache Anpassung ihrer Benutzerschnittstelle an die Bedürfnisse der Sprachumgebung des Benutzers. Dies kann sich von Fenster zu Fenster und sogar von Tab zu Tab unterscheiden. Dies ermöglicht es Erweiterungen, selbst dann zu funktionieren, wenn sie die standardmäßige Sprachumgebung des Benutzers nicht unterstützen, da sie sowohl links-nach-rechts als auch rechts-nach-links Layouts unterstützen können, ohne sich um die Besonderheiten der Sprachumgebung zu sorgen.

Dieser Selektor funktioniert nicht korrekt unter HTML; er matcht nie, unabhängig davon, ob das UI links-nach-rechts oder rechts-nach-links ist.

## Siehe auch

- {{cssxref(":-moz-locale-dir(rtl)")}}
- [Sicherstellen, dass die Benutzerschnittstelle mit RTL-Sprachumgebungen zusammenarbeitet](/de/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales)
