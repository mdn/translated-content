---
title: Aktualizacja rozszerzeń do Firefoksa 2
slug: Mozilla/Firefox/Releases/2/Updating_extensions
translation_of: Mozilla/Firefox/Releases/2/Updating_extensions
original_slug: Aktualizacja_rozszerzeń_do_Firefoksa_2
---
{{FirefoxSidebar}}

Ten artykuł dostarcza informacji na temat, w jaki sposób należy zmodyfikować rozszerzenia, aby działały właściwie pod Firefoksem 2. Ten artykuł będzie przydatny dla programistów, posiadających już utworzone rozszerzenia i chcą, aby działały poprawnie w wersji drugiej Firefoksa.

## Krok 1: Aktualizacja manifestu instalacji

Pierwszym krokiem -- i w przypadku części rozszerzeń jedynym, jaki będzie potrzebny -- jest aktualizacja pliku [manifestu instalacji](pl/Manifesty_Instalacji) \<tt>install.rdf\</tt>, aby wskazać kompatybilność z Firefoksem 2.

Szybko znajdź linie wskazującą maksymalną wersje kompatybilności Firefoksa, która dla Firefoksa 1.5, mogła by wyglądać jak poniżej:

     <em:maxVersion>1.5.0.*</em:maxVersion>

Zmień ją wskazując na kompatybilność z Firefoksem 2:

     <em:maxVersion>2.0.0.*</em:maxVersion>

Następnie przeinstaluj swoje rozszerzenie.

## Krok 2: Aktualizacja nakładek XUL

Firefox 2 wprowadza zmiany w domyślnym motywie. Dodatkowo, niektóre elementy interfejsu użytkownika zostały zmienione lub przeniesione. Możliwe jest, że Twoje rozszerzenie zostało dotknięte tymi zmianami i zależy to od tego, co zrobią Twoje nakładki XUL.

Przeczytaj artykuł [Zmiany w motywie graficznym w Firefoksie 2](pl/Zmiany_w_motywie_graficznym_w_Firefoksie_2), aby dowiedzieć się, jakie zmiany zostały wprowadzone, które mogą mieć wpływ na nakładki XUL Twoich rozszerzeń.

## Krok 3: Test

Upewnij się poprzez sprawdzenie swojego rozszerzenia w Firefoksie 2, czy aby na pewno działa poprawnie, zanim udostępnisz publicznie wersję ostateczną. Ostatnią rzeczą, jaką chcesz dla swojej nowej wersji rozszerzenia to problemy, jakie może ono powodować po podjęciu pochopnej decyzji ze świeżo wydaną wersją Firefoksa!

## Krok 4: Wersja ukończona

Zaktualizuj swoje rozszerzenie wprowadzając zmiany na <http://addons.mozilla.org>. Zagwarantuje to, że użytkownicy będą mogli znaleźć nową wersję rozszerzenia.

W dodatku, jeśli Twoje rozszerzenie dostarcza [`updateURL`](pl/Manifesty_Instalacji#updateURL) w manifeście instalacji, możesz być pewien, że aktualizacja manifestu wywoła automatyczną aktualizację rozszerzenia, które zostanie znalezione przez Firefoksa. Stanie się to przy pierwszym uruchomieniu Firefoksa po aktualizacji, gdyż Firefox może zaoferować automatyczną instalację dla tych rozszerzeń.



{{ languages( { "en": "en/Updating_extensions_for_Firefox\_2", "fr": "fr/Mise\_\u00e0\_jour_des_extensions_pour_Firefox\_2", "ja": "ja/Updating_extensions_for_Firefox\_2", "ko": "ko/Updating_extensions_for_Firefox\_2" } ) }}
