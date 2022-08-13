---
title: Poprawna kofiguracja MIME na serwerze
slug: Learn/Server-side/Configuring_server_MIME_types
tags:
  - HTTP
translation_of: Learn/Server-side/Configuring_server_MIME_types
original_slug: Web/Security/Securing_your_site/Konfiguracja_MIME_na_serwerze
---
## Kontekst

Wiele serwerów webowych domyślnie ma skonfigurowane raportowanie typów MIME `text/plain` lub `application/octet-stream` w przypadku nierozpoznanych typów zawartości. Kiedy nowe typy zawartości dopiero powstają lub są dodawane do serwerów webowych zdarza się, że administratorzy webowi nie dodają nowo-powstałych typów MIME do ustawień serwera webowego. I to właśnie stanowi główną bolączkę użytkowników przeglądarek opartych o Gecko, które uznają typy MIME jako zraportowane przez serwery i aplikacje webowe.

### Czym są typy MIME?

Typy MIME opisują typ danych zawartości mailowej lub obsługiwanej przez serwery lub aplikacje webowe i ich zadaniem jest pomoc przeglądarce w przetworzeniu i wyświetleniu zawartości. Przykładami typów MIME są:

- `text/html` dla zwykłych stron WWW
- `text/plain` dla zwykłego tekstu
- `text/css` dla kaskadowych arkuszy stylów
- `text/javascript` dla skryptów
- `application/octet-stream` przy pobieraniu pliku
- `application/x-java-applet` dla apletów Javy
- `application/pdf` dla dokumentów PDF

### Kontekst techniczny

Zarejestrowane wartości MIME są dostępne w [Typy danych IANA | MIME](http://www.iana.org/assignments/media-types/index.html). [Specyfikacja HTTP](http://www.w3.org/Protocols/HTTP/1.1/spec.html) definiuje nadzbiór typów MIME, który jest używany do opisu typów danych używanych w sieci WWW.

### Dlaczego poprawne typy MIME są tak istotne?

![Example of an incorrect MIME type result](/@api/deki/files/729/=Incorrect-mime-screen.jpg) Jeśli serwer lub aplikacja webowa dla danej zawartości raportuje niepoprawny typ MIME, przeglądarka nie ma możliwości, _wg specyfikacji HTTP_, wiedzieć, że autor zainicjował przetworzenie i wyświetlenie danej zawartości w odmienny sposób, niż domyślny dla zraportowanego typu MIME.

Niektóre z przeglądarek, jak Microsoft® Internet Explorer, dążą do zezwalania niepoprawnie skonfigurowanym serwerom i aplikacjom webowym na _[zgadywanie](http://support.microsoft.com/default.aspx?sd=msdn&scid=kb;en-us;293336)_, jaki powinien być poprawny typ MIME. Takie podejście uchroniło wielu administratorów webowych przed własnymi błędami - Internet Explorer kontynuuje przetwarzanie zawartości zgodnie z oczekiwaniami mimo, że sam serwer webowy nie jest poprawnie skonfigurowany i np. wyświetla obrazek, który został zraportowany jako będący rzekomo zwykłym tekstem.

Obsługa treści poprzez używanie poprawnego typu MIME jest istotna także z punktu widzenia bezpieczeństwa; istnieje ryzyko wyrządzenia przez niechcianą treść szkód na komputerze użytkownika poprzez symulowanie, że typ danej zawartości jest bezpieczny mimo, że w istocie może nie być to prawda.

> **Note:** **Zauważ:** Kiedyś Firefox ładował pliki CSS nawet, jeśli posiadały błędny typ MIME. Wystarczyło, że dokument HTML, który o nie wnioskował działał w trybie osobliwości (quirks mode). Ze względów bezpieczeństwa, {{ gecko("2.0") }} nie będzie dłużej kontynować tego typu zachowań w przypadku arkuszy stylów ładowanych z innych źródeł, niż dokument, który o nie wnioskował. Jeśli Twój arkusz stylów pochodzi z innego źródła, niż główny dokument **musisz** obsłużyć go poprzez poprawny typ MIME (`text/css`).Gecko 1.9.1.11 (Firefox 3.5.11) i Gecko 1.9.2.5 (Firefox 3.6.5) również zaimplementowały tę łatkę bezpieczeństwa, ale by polepszyć zgodność **tymczasowo** istniała heurytrystyka pozwalająca na załadowanie, jeśli pierwsza linia w arkuszu stylów wydawała się być poprawną konstrukcją CSSową; heurytrystyka ta została usuninęta w Firefoxie 4 i od tego czasu należy odpowiednio ustawić typy MIME `text/css`, aby strony CSS zostały rozpoznane.

## Dlaczego przeglądarki nie powinny zgadywać typów MIME

Poza naruszaniem specyfikacji HTTP istnieją dodatkowe powody, dla których zgadywanie typów MIME nie należy do najlepszych praktyk:

#### Utrata kontroli

Jeśli przeglądarka ignoruje zaraportowany typ MIME, administratorzy i autorzy webowi nie mają dłużej kontroli nad sposobem przetwarzania danej zawartości.

Przykładowo, strona WWW ukierunkowana na twórców witryn może życzyć sobie przesłania pewnych dokumentów, przykładowo HTMLowych, jak również `text/html` lub `text/plain`, by móc je przetworzyć i wyświetlić jako HTML lub jako kod źródłowy. Jeśli przeglądarka będzie zgadywać typ MIME, tego typu możliwość nie będzie dłużej dostępna dla autora.

#### Bezpieczeństwo

Niektóre typy zawartości, jak pliki wykonywalne, są przeważnie niebezpieczne. Z tego powodu te typy MIME przeważnie są ograniczone pod względem akcji, jakie podejmie przeglądarka w przypadku tego typu plików. Plik wykonywalny nie powinien wykonywać się na komputerze użytkownika, co najwyżej może mieć prawo do wyświetlenia okienka **z zapytaniem do użytkownika**, czy chce pobrać ten plik.

W Internet Explorerze zgadywanie typów MIME doprowadziło do naruszenia bezpieczeństwa - przez niepoprawne zgadywanie szkodliwe treści bywały oznaczane jako bezpieczne, co skutkowało pominięciem wyświetlania standardowego okienka pobierania i przedostawaniem się plików wykonywalnych na komputery użytkowników.

## Jak określić typ MIME, który jest wysyłany przez serwer

W Firefoxie załaduj plik i użyj Narzędzia | Informacje o witrynie. Możesz również użyć [Rex Swain's HTTP Viewer](http://www.rexswain.com/httpview.html) lub [Live HTTP Headers](http://livehttpheaders.mozdev.org/) , aby zobaczyć pełne nagłówki i treść każdego pliku wysłanego z serwera webowego.

W odniesieniu do standardów, tag `meta` o typie MIME jak np. `<meta http-equiv="Content-Type" content="text/html">` powinien być ignorowany, jeśli w nagłówku znajduje się zapis {{HTTPHeader("Content-Type")}}. Zamiast szukać tej linii w kodzie źródłowym HTML lepiej użyć powyższych technik do określenia typu MIME wysyłanego przez serwer.

## Jak określić prawidłowy typ MIME dla Twojej treści

Jest kilka kroków, które należy zrobić by określić poprawną wartość dla typu MIME twojej treści.

1.  Jeśli twoja treść została utworzona z pomocą zewnętrznego oprogramowania, przeczytaj jego dokumentację by dowiedzieć się, jakie typy MIME powinny zostać zraportowane dla danych typów danych.
2.  Zerknij na [rejest typów danych IANA | MIME](http://www.iana.org/assignments/media-types/index.html). Zawiera on wszystkie zarejestrowane typy MIME.
3.  Jeśli typ danych jest wyświetlany poprzez rozszerzenie w Netscape Gecko, zainstaluj wtyczkę, a następnie sprawdź Pomoc->O Menu Wtyczek, by sprawdzić jakie typy MIME są związane z typem danych.
4.  Poszukaj rozszerzenia pliku w [FILExt](http://filext.com/) lub [File extensions reference](http://www.file-extensions.org/), aby sprawdzić jakie typy MIME są związane z tym rozszerzeniem.

## Jak przygotować serwer, żeby wysyłał poprawne typy MIME

Fundamentalną kwestią jest konfiguracja Twojego serwera w taki sposób, by wysyłał poprawny nagłówek HTTP {{HTTPHeader("Content-Type")}} dla każdego dokumentu.

- Jeśli używasz serweru webowego Apache to po prostu skopiuj ten [fragment pliku .htaccess](/en/Sample_.htaccess_file "en/Sample_.htaccess_file") do lokalizacji, która zawiera pliki, które chcesz wysłać z poprawnymi typami MIME. Jeśli masz cały podkatalog plików, po prostu umieść plik w katalogu nadrzędnym; nie ma potrzeby umieszczania go w każdym podkatalogu.
- Jeśli uzywasz Microsoft IIS, sprawdź [ten artykuł](http://technet2.microsoft.com/windowsserver/en/library/ec84d61e-3e24-4de0-b35a-d41eb662fefb1033.mspx) na Microsoft TechNet
- Jesli używasz do generowania treści używasz skryptu działającego po stronie serwera, możesz po prostu dodać jedną linijkę praktycznie na samej górze Twojego skryptu. Możesz obsługiwać zawartość inną, niż HTML, właściwą dla Perla, PHP, ASP czy Javy - tylko zmień odpowiednio typ MIME.

  - W przypadku Pearl CGI zadbaj o zapis `print "Content-Type: text/html\n\n";` przed jakimkolwiek pozostałym outputem. Jeśli używasz modułu CGI to możesz zamiast tego użyć linii `print $cgi->header('text/html');`, gdzie `$cgi` to Twoja referencja do instancji CGI.
  - W przypadku PHP zadbaj o zapis `header('Content-Type: text/html');` przed jakimkolwiek pozostałym outputem.
  - W przypadku ASP zadbaj o zapis `response.ContentType = "text/html";` przed jakimkolwiek pozostałym outputem.
  - W przypadku servletu Javy zadbaj o zapis `response.setContentType("text/html");` na górze Twojej metody `doGet` lub `doPost`, gdzie `response` to referencja do `HttpServletResponse`.

### Powiązane linki

- [Niepoprawne typy MIME dla plików CSS](/en/Incorrect_MIME_Type_for_CSS_Files "en/Incorrect_MIME_Type_for_CSS_Files")
- [Typy danych IANA | MIME](http://www.iana.org/assignments/media-types/index.html)
- [Protokół transmisji hipertekstu — HTTP/1.1](http://www.w3.org/Protocols/HTTP/1.1/spec.html)
- [Microsoft - 293336 - INFO: WebCast: Podejście do typów MIME w Microsoft Internet Explorerze](http://support.microsoft.com/default.aspx?sd=msdn&scid=kb;en-us;293336)
- [Microsoft - Appendix A: Wykrywanie typów MIME Type Detection w Internet Explorerze](http://msdn.microsoft.com/workshop/networking/moniker/overview/appendix_a.asp)
- [Microsoft - Aktualizacja Bezpieczeństwa, 29.03.2001](http://www.microsoft.com/windows/ie/downloads/critical/q290108/)
- [Microsoft - Aktualizacja Bezpieczeństwa, 13.12.2001](http://www.microsoft.com/windows/ie/downloads/critical/Q313675/)

### Informacje dot. dokumentu źródłowego

- Author: Bob Clary, date: 20 Feb 2003

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
