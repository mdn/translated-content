---
title: Nieprawidłowy typ MIME plików CSS
slug: Web/HTTP/Basics_of_HTTP/MIME_types
tags:
  - CSS
  - Wszystkie_kategorie
translation_of: Web/HTTP/Basics_of_HTTP/MIME_types
translation_of_original: Incorrect_MIME_Type_for_CSS_Files
original_slug: Nieprawidłowy_typ_MIME_plików_CSS
---
### W czym jest problem?

Może się zdarzyć, że natrafisz na stronę internetową, która korzysta z CSS i wygląda ubogo w Netscape 7.x lub innej przeglądarce opartej o Gecko, jak Mozilla, podczas gdy Internet Explorer (MSIE) wyświetli ową stronę "ładną". Jednym z częstych powodów takiej sytuacji jest nieprawidłowa konfiguracja serwera WWW hostującego plik CSS. Niektóre serwery internetowe oparte o Apache lub iPlanet wiążą pliki .css z nieodpowiednim typem MIME, jak np. _text/plain_ lub _text/x-pointplus_. W niektórych przypadkach Netscape 7.x i Mozilla ignorują plik CSS ze względu na jego nieprawidłowy typ MIME i używają domyślnego arkusza stylów, przez co układ strony jest inny, niż zamierzał twórca strony.

### Kiedy się tak dzieje?

[Specyfikacja W3C](http://www.w3.org/TR/REC-CSS2/conform.html#text-css) stwierdza, że pliki CSS powinny być serwowane z typem MIME _text/css_. Mozilla i Netscape 7.x, kiedy pracują w trybie standardów, stosują się do specyfikacji i oczekują odpowiedniego typu MIME dla plików CSS (tryb standardów jest włączany, kiedy w pierwszej linii strony HTML zostanie umieszczone DTD Strict). W trybie zgodności wstecznej obydwie aplikacje tolerują nieodpowiedni typ MIME i użyją dołączonych stylów pomimo błędnej konfiguracji serwera. Oznacza to, że nie możesz używać dokumentów _Strict_ przy źle skonfigurowanym serwerze. MSIE pozwala na to, gdyż - niepoprawnie - nie zwraca uwagi na typ MIME wysyłany przez serwer w nagłówku HTTP.

### Co mogę zrobić, by to zmienić?

Musisz poprosić administratora serwera internetowego o uaktualnienie konfiguracji typów MIME.

Problem ten na serwerach iPlanet/Netscape został już zauważony przez producenta, który utworzył stosowną notatkę techniczną (zob. [poniżej](#Zmiana_typ.C3.B3w_MIME_na_serwerach_iPlanet.2FSun)) w swojej bazie wiedzy.

Jeśli korzystasz z Apache'a, możesz także zmienić ustawienia w pliku `.htaccess` w głównym katalogu. (`.htaccess` jest plikiem konfiguracyjnym tylko do odczytu, który obsługuje kilka rzeczy, w tym typy MIME). Dodaj do swojego pliku `.htaccess` taką linię:

    AddType text/css .css

Zwróć uwagę, że niektórzy administratorzy wyłączają użycie plików `.htaccess` na swoich serwerach, ponieważ powodują one niewielkie spadek wydajności.

### Wnioski

Używanie ścisłej definicji typu dokumentu (Strict DTD) wraz z Mozillą oznacza, że serwer hostujący Twoje strony powinien być skonfigurowany prawidłowo. Jest kilka rozwiązań tego problemu, jednak najskuteczniejszym jest powiązanie odpowiedniego typu MIME z plikami .css. Poproś administratora aby naprawił to dla Ciebie, a wszyscy, którzy publikują HTML z DTD Strict, będą Ci wdzięczni!

### Zmiana typów MIME na serwerach iPlanet/Sun

#### Problem

Użytkownikom wyświetlone zostaje okno _Zapisz jako_ z typem zawartości ustawionym na _application/x-pointplus_ lub zawartość pliku CSS jest wyświetlana jako tekst, kiedy arkusz CSS ma rozszerzenie .css.

#### Rozwiązanie

Typ pliku .css nie jest mapowany na arkusz CSS w domyślnej konfiguracji typów MIME serwera Enterprise Server. Możesz zmienić to mapowanie na stronie Global MIME Types.

By skorzystać z tej strony, wybierz w panelu administracyjnym _Server Preferences_, _MIME Types_ i ustaw typ MIME dla .css na _text/css_ zamiast _application/x-pointplus_.

Jeśli problem pozostanie, dodaj "KeepAliveTimeout 0" w _magnus.conf_.

W oparciu o: [SunSolve, Sun Microsystems](http://sunsolve.sun.com)

### Dodatkowe zasoby

- [Properly Configuring Server MIME Types](/en/Properly_Configuring_Server_MIME_Types)
- [About garbled media](http://www.htmlhelp.com/faq/html/media.html#garbled-media)

### Informacje o dokumencie

- Autor(zy): Tristan Nitot
- Ostatnia aktualizacja: 18 marca 2002
- Copyright © 2001-2003 Netscape.

{{ languages( { "en": "en/Incorrect_MIME_Type_for_CSS_Files", "es": "es/Tipo_MIME_incorrecto_en_archivos_CSS", "fr": "fr/Type_MIME_incorrect_pour_les_fichiers_CSS" } ) }}
