---
title: Browser extensions
slug: Mozilla/Add-ons/WebExtensions
tags:
  - Landing
  - Manifest
  - Rozszerzenia
  - WebExtensions
  - Wtyczki
translation_of: Mozilla/Add-ons/WebExtensions
---
{{AddonSidebar}}Rozszerzenia mogą być poszerzane i modyfikowane możliwościami przeglądarki.  Rozszerzenia dla Firefox są budowane przy użyciu WebExtension APIs, systemu wspólnego dla przeglądarek do rozwoju rozszerzeń. Duży zakres systemu jest zgodny z [extension API](https://developer.chrome.com/extensions) wspieranych przez Google Chrome, Opera oraz the [W3C Draft Community Group](https://browserext.github.io/browserext/). Rozszerzenia napisane dla tych przeglądarek będą w większości przypadków działać w Firefox czy [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/) z kilkoma zmianami ([just a few changes](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Porting_from_Google_Chrome)). API jest także w pełni zgodny z wieloprocesowością Firefox ([multiprocess Firefox](https://developer.mozilla.org/en-US/Firefox/Multiprocess_Firefox)).



Jeśli masz pomysły czy pytania lub potrzebujesz pomocy w zamieszczeniu dodatku do użycia przez WebExtension APIs, możesz dotrzeć do nas poprzez [dev-addons mailing list](https://mail.mozilla.org/listinfo/dev-addons) lub zamieszczenie hasztagu: [#extdev](irc://irc.mozilla.org/extdev) na [IRC](https://wiki.mozilla.org/IRC).

## Na początek

- [Co to są rozszerzenia?](/en-US/Add-ons/WebExtensions/What_are_WebExtensions)
- [Twoje pierwsze rozszerzenie](/en-US/Add-ons/WebExtensions/Your_first_WebExtension)
- [Twoje drugie rozszerzenie](/en-US/Add-ons/WebExtensions/Your_second_WebExtension)
- [Anatomia rozszerzeń](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Przykłady rozszerzeń](/en-US/Add-ons/WebExtensions/Examples)

## Jak 

- [Przechwycić zapytania HTTP](/pl/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Modyfikować stronę internetową](/pl/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Dodać przycisk do paska narzędzi](/pl/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Wprowdzić ustawienia strony](/pl/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Oddziaływać na schowek (clipboard)](/pl/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)

## Interface użytkownika

- [Wprowadzenie](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface)
- [Przycisk paska narzędzi przeglądarki](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)
- [Przycisk paska narzędzi z popup](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Adres przycisku na pasku](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [Adres przycisku na pasku z oknem popup](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Elementy kontekstu menu](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [Paski boczne](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [Opcje strony](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
- [Powiązane witryny internetowe](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/Bundled_web_pages)
- [Powiadomienia](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications)
- [Sugestie paska adresowego](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox)
- [Panele narzędzi deweloperskich](/pl/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)

## Pojęcia

- [Przegląd JavaScript API](/pl/docs/Mozilla/Add-ons/WebExtensions/API)
- [Skrypty kontekstu](/en-US/Add-ons/WebExtensions/Content_scripts)
- [Dopasowanie wzorów](/en-US/Add-ons/WebExtensions/Match_patterns)
- [Praca z plikami](/pl/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [Umiędzynarodowienie (internationalization)](/pl/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Polityka bezpieczeństwa kontekstu](/pl/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Wiadomości w języku ojczystym](/pl/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [Używanie narzędzi deweloperskich API](/pl/docs/Mozilla/Add-ons/WebExtensions/Using_the_devtools_APIs)
- [Najlepsze praktyki doświadczeń użytkownika](/en-US/Add-ons/WebExtensions/User_experience_best_practices)

## Porty

- [Porty rozszerzeń Google Chrome](/en-US/Add-ons/WebExtensions/Porting_from_Google_Chrome)
- [Porty rozszerzeń dodatku Firefox](/pl/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on)
- [Osadzone (embedded) rozszerzenia sieciowe](/pl/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions)
- [Porównanie z dodatkiem SDK](/pl/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK)
- [Porównanie z rozszerzeniami XUL/XPCOM](/pl/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions)
- [Niezgodności Chrome](/pl/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Różnice pomiędzy wersją deskopową (komputerową), a Androidem](/pl/docs/Mozilla/Add-ons/WebExtensions/Differences_between_desktop_and_Android)

## Dynamika pracy Firefox

- [Doświadczenie użytkownika](/pl/docs/Mozilla/Add-ons/WebExtensions/User_experience_best_practices)
- [Instalacja](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [Debugowanie (reagowanie na niezgodności)](/en-US/Add-ons/WebExtensions/Debugging)
- [Rozwój Firefox dla Androida](/pl/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android)
- [Początki z web-ext](/pl/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext)
- [Odnośnik poleceń web-ext](/pl/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference)
- [Rozszerzenia i dodatki ID](/pl/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID)
- [Opcje alternatywne dystrybucji](/en-US/Add-ons/WebExtensions/Alternative_distribution_options)
- [Publikowanie twojego rozszerzenia](/pl/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension)

## Odsyłacz

### JavaScript API

- [Przegląd JavaScript API](/pl/docs/Mozilla/Add-ons/WebExtensions/API)
- [Przeglądarka zgodna z tabelami JavaScript API](/en-US/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/API") }}

### Klucze Manifest 

- [przegląd manifest.json](/pl/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Zgodność przeglądarki dla manifest.json](/pl/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/manifest.json") }}
