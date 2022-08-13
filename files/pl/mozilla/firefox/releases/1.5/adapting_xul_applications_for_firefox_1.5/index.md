---
title: Dostosowanie aplikacji XUL do Firefoksa 1.5
slug: Mozilla/Firefox/Releases/1.5/Adapting_XUL_Applications_for_Firefox_1.5
tags:
  - Dodatki
  - Rozszerzenia
  - Wszystkie_kategorie
  - XUL
translation_of: Mozilla/Firefox/Releases/1.5/Adapting_XUL_Applications_for_Firefox_1.5
original_slug: Dostosowanie_aplikacji_XUL_do_Firefoksa_1.5
---
{{FirefoxSidebar}}

Strona zawiera listę zmian w [Firefoksie 1.5](pl/Firefox_1.5) wpływających na pracę programistów XUL.

### Zmiany

- [Zmiany w drzewie API](pl/Zmiany_w_drzewie_API)
- [Międzynarodowe pismo w XUL JavaScript](pl/Mi%c4%99dzynarodowe_pismo_w_XUL_JavaScript) (wpływa wyłącznie na rozszerzenia z plikami JavaScript zawierającymi znaki non-ASCII)
- [Zmiany w XMLHttpRequest](pl/Zmiany_XMLHttpRequest_dla_Gecko_1.8)
- [Zmiany w XUL-u w Firefoksie 1.5](pl/Zmiany_w_XUL-u_w_Firefoksie_1.5)
- [XPCNativeWrapper](pl/XPCNativeWrapper) są domyślnie włączone, a ich działanie zmienione na podobne do działania w wersji 1.0.x
- Prostsza metoda [rejestracji Chrome](pl/Rejestracja_Chrome) przestarzałego contents.rdf.
- Dla nakładek menu kontekstowego: nazwa funkcji \<tt>gContextMenu.linkURL()\</tt> została zmieniona na \<tt>gContextMenu.getLinkURL()\</tt>, a \<tt>linkURL\</tt> jest teraz własnością. Aby użyć w trybie zgodności wstecznej:
  \<tt>url = 'getLinkURL' in gContextMenu ? gContextMenu.getLinkURL() : gContextMenu.linkURL();\</tt>

### Pozostałe informacje

- [Jak sprawdzić wersję aplikacji poprzez zastosowanie nsIXULAppInfo](pl/Zastosowanie_nsIXULAppInfo)
- [MozillaZine](http://kb.mozillazine.org/Dev_:_Extensions_:_Cross-Version_Compatibility_Techniques)

{{ languages( { "en": "en/Adapting_XUL_Applications_for_Firefox\_1.5", "fr": "fr/Adaptation_des_applications_XUL_pour_Firefox\_1.5", "it": "it/Adattare_le_applicazioni_XUL_a_Firefox\_1.5", "ja": "ja/Adapting_XUL_Applications_for_Firefox\_1.5" } ) }}
