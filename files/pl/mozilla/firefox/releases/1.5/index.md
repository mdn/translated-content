---
title: Firefox 1.5 dla programistów
slug: Mozilla/Firefox/Releases/1.5
tags:
  - CSS
  - DOM
  - Dodatki
  - HTML
  - JavaScript
  - Programowanie_WWW
  - RDF
  - Rozszerzenia
  - SVG
  - Standardy_WWW
  - Wszystkie_kategorie
  - XML
  - XML Web Services
  - XSLT
  - XUL
translation_of: Mozilla/Firefox/Releases/1.5
---
{{FirefoxSidebar}}



### Firefox 1.5

Firefox 1.5 został wydany i jest dostępny **[do pobrania](http://www.mozilla.com/firefox/)**. Oparty na silniku [Gecko](pl/Gecko) 1.8, jeszcze lepiej obsługuje standardy, a także dodaje nowe możliwości, dzięki którym możliwe będzie tworzenie aplikacji WWW nowej generacji. Firefox 1.5 posiada poprawioną obsługę CSS2 i CSS3, API do tworzenia i programowania dwuwymiarowej grafiki dzięki [SVG](pl/SVG) 1.1 i `<canvas>`, zdarzenia [XForms](pl/XForms) i XML oraz wiele usprawnień DHTML, JavaScript i DOM.

**Firefox 1.5** jest dostępny do pobrania z: <http://www.mozilla.com/firefox/>

### Narzędzia programistyczne

Dostępnych jest wiele narzędzi i rozszerzeń, które mogą pomóc programistom w obsłudze Firefoksa 1.5.

- [Inspektor DOM](pl/Inspektor_DOM), narzędzie pozwalające analizować i modyfikować dokument bez potrzeby edytowania go. Inspektor DOM jest dostępny w Firefoksie 1.5 pod pozycją Narzędzia programistyczne w opcjach instalacji zaawansowanej (użytkownika).
- Konsola JavaScript, narzędzie do pisania i testowania kodu JavaScript dające możliwość oglądania błędów JavaScript i CSS.
- Pokaż źródło strony, z podświetlaniem składni i możliwością wyszukiwania.
- [Rozszerzenia przeglądarki](https://addons.mozilla.org/extensions/showlist.php?application=firefox&category=Developer%20Tools) takie jak [FireBug](http://www.joehewitt.com/software/firebug/), [Pasek narzędzi Web Developer](<pl/Web_Developer_-_rozszerzenie_Firefoksa_(link)>), [Live HTTP Headers](<pl/Live_HTTP_Headers_(link)>), [HTML Validator](<pl/Walidator_HTML_(link)>) i wiele innych.

**Uwaga:** Niektóre rozszerzenia nie obsługują w tej chwili Firefoksa 1.5 i zostaną automatycznie wyłączone.

### Ogólnie

Poniżej znajdują się artykuły omawiające główne nowe funkcje w Firefoksie 1.5:

#### Programiści stron i aplikacji WWW

- [SVG w XHTML - Wprowadzenie](pl/SVG_w_XHTML_-_Wprowadzenie)
  - : Dowiedz się, jak stosować SVG wewnątrz stron XHTML i jak można wykorzystać JavaScript i CSS do manipulowania obrazem w sposób analogiczny do zwykłego XHTML-a. Zajrzyj też na [SVG w Firefoksie](pl/SVG_w_Firefoksie), aby dowiedzieć się o stanie i znanych problemach implementacji SVG.

- [Rysowanie grafik za pomocą Canvas](pl/Rysowanie_grafik_za_pomoc%c4%85_Canvas)
  - : Naucz się korzystać z nowego znacznika `<canvas>` i rysować grafy i inne obiekty w Firefoksie.

- [Kolumny CSS3](pl/Kolumny_CSS3)
  - : Naucz się korzystać z automatycznego układania teksty w wielu kolumnach zgodnie z propozycją CSS3.

- [Zastosowanie cache'owania w Firefoksie 1.5](pl/Zastosowanie_cache'owania_w_Firefoksie_1.5)
  - : Przeczytaj o `bfcache` i zwiększeniu prędkości przeglądania stron poprzednich i następnych jakie oferuje.

#### Programiści XUL i autorzy rozszerzeń

- [Tworzymy rozszerzenie](pl/Tworzymy_rozszerzenie)
  - : Ten przewodnik poprowadzi Cię poprzez kroki, które należy wykonać aby stworzyć bardzo proste rozszerzenia dla Firefoksa. Zobacz także [przewodnik w bazie wiedzy MozillaZine](http://kb.mozillazine.org/Getting_started_with_extension_development), który demonstruje nowe cechy Menedżera Rozszerzeń w wersji 1.5, który sprawia, że tworzenie rozszerzenia jest jeszcze łatwiejsze.

- [XPCNativeWrapper](pl/XPCNativeWrapper)
  - : `XPCNativeWrapper` jest sposobem na opakowanie obiektu, aby możliwy był [bezpieczny dostęp z uprawnionego kodu](pl/Bezpieczny_dost%c4%99p_do_sk%c5%82adnik%c3%b3w_DOM_z_poziomu_chrome). Może być one użyty we wszystkich wersjach Firefoksa, mimo że działanie to zmieniło się nieco począwszy od Firefoksa 1.5 (Gecko 1.8).

- [System preferencji](pl/System_preferencji)
  - : Dowiedz się więcej o nowych kontrolkach, które pozwalają na stworzenie okien Opcji w prostszy i wymagający mniej kodu JavaScript sposób.

- [Międzynarodowe pismo w XUL JavaScript](pl/Mi%c4%99dzynarodowe_pismo_w_XUL_JavaScript)
  - : Pliki XUL JavaScript mogą teraz zawierać pliki spoza zakresu ASCII.

- [Zmiany w API Tree](pl/Tree_Widget_Changes)
  - : Interfejsy do obsługi elementów `<tree>` XUL-a zostały zmienione.

- [Zmiany w XUL-u w Firefoksie 1.5](pl/Zmiany_w_XUL-u_w_Firefoksie_1.5)
  - : Podsumowanie zmian w XUL-u. Zobacz także [Dostosowanie aplikacji XUL do Firefoksa 1.5](pl/Dostosowanie_aplikacji_XUL_do_Firefoksa_1.5).

- Zmiany związane z obsługą sieci
  - :

- Komunikaty certyfikatów mogą być teraz nadpisywane dla każdego kanału. Działa to poprzez ustawianie odpytywacza interfejsu jako [nsIChannel](pl/NsIChannel) notificationCallbacks i przydzielenie interfejsu dla [nsIBadCertListener](pl/NsIBadCertListener).
- Listenery nsIWebBrowserPersist mogą teraz implementować [nsIInterfaceRequestor](pl/NsIInterfaceRequestor)::GetInterface i dostaną szansę podania wszystkich interfejsów o jakie kanał może zapytać, włączając [nsIProgressEventSink](pl/NsIProgressEventSink) (niezbyt przydatny, redunduje [nsIWebProgressListener](pl/NsIWebProgressListener)). Przydatne interfejsy to m.in. [nsIChannelEventSink](pl/NsIChannelEventSink) oraz [nsIBadCertListener](pl/NsIBadCertListener).
- Rozszerzenia oraz inni użytkownicy necko, włączając w to XMLHttpRequest, mogą ustawić nagłówek Cookie bezpośrednio i necko nie będzie go zastępować. Zapisane ciasteczka zostaną połączone z bezpośrednio nadanym nagłówkiem, w taki sposób, że bezpośrednio nadany nagłówek nadpisze zapisane ciasteczka.

### Nowe funkcje dla użytkowników

#### Wygoda użytkownika

- **Szybsza nawigacja po stronach** z poprawioną wydajności przycisków wstecz i dalej.
- **Możliwość zmiany kolejności kart metodą przeciągnij i upuść**
- **Answers.com został dodany jako silnik wyszukiwania**.
- **Poprawiona wygoda użytkowania** w tym, opisowe strony błędów, przemodelowane menu opcji, mechanizm wykrywania RSS, obsługa trybu Bezpiecznego.
- **Zwiększone wsparcie dla dostępności** w tym, wsparcie dla niepełnosprawnych dla DHTMLa.
- **Mechanizm zgłaszania niedziałających stron** pozwala zgłaszać strony nie działające w Firefoksie.
- **Lepsze wsparcie dla Mac OS X** (10.2 i nowsze) w tym, migracja profilu z Safari oraz Mac Internet Explorera.

#### Bezpieczeństwo i prywatność

- **Automatyczna aktualizacja** ułatwia aktualizacje oprogramowania. Informacja o aktualizacji jest lepiej widoczna, natomiast same aktualizacje mają pół megabajta lub mniej. Aktualizacja rozszerzeń także została usprawniona.
- **Usprawnione blokowanie wyskakujących okien.**
- Opcja **Usuń prywatne dane** pozwala w łatwy sposób szybko usunąć prywatne dane z przeglądarki korzystając ze skrótu klawiatury.

#### Wsparcie dla otwartych standardów WWW

Wsparcie Firefoksa dla standardów WWW pozostaje najlepszym na rynku, w tym wsparcie dla:

- Hipertekstowy Język Znaczników ([HTML](pl/HTML)) oraz Rozszerzalny Hipertekstowy Język Znaczników ([XHTML](pl/XHTML)): [HTML 4.01](http://www.w3.org/TR/html401/) oraz [XHTML 1.0/1.1](http://www.w3.org/TR/xhtml1/)
- Kaskadowe Arkusze Stylów ([CSS](pl/CSS)): [CSS Poziom 1](http://www.w3.org/TR/REC-CSS1), [CSS Poziom 2](http://www.w3.org/TR/REC-CSS2) oraz część [CSS Poziom 3](http://www.w3.org/Style/CSS/current-work.html)
- Obiektowy Model Dokumentu ([DOM](pl/DOM)): [DOM Poziom 1](http://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM Poziom 2](http://www.w3.org/DOM/DOMTR#dom2) i część [DOM Poziom 3](http://www.w3.org/DOM/DOMTR#dom3)
- Matematyczny Język Znaczników: [MathML Wersja 2.0](http://www.w3.org/Math/)
- Rozszerzalny Język Znaczników ([XML](pl/XML)): [XML 1.0](http://www.w3.org/TR/REC-xml), [Przestrzenie nazw w XML-u](http://www.w3.org/TR/REC-xml-names/), [Łączenie arkuszy stylów w dokumentach XML 1.0](http://www.w3.org/TR/xml-stylesheet/), [Identyfikatory fragmentów w XML-u](http://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/01-NOTE-FIXptr-20010425.htm)
- Transformacje XSL ([XSLT](pl/XSLT)): [XSLT 1.0](http://www.w3.org/TR/xslt)
- Język Ścieżek XML ([XPath](pl/XPath)): [XPath 1.0](http://www.w3.org/TR/xpath)
- Struktura Opisu Zasobów ([RDF](pl/RDF)): [RDF](http://www.w3.org/RDF/)
- Prosty Protokół Dostępu do Obiektu (SOAP): [SOAP 1.1](http://www.w3.org/TR/SOAP/)
- [JavaScript](pl/JavaScript) 1.6, oparty na [ECMA-262](pl/ECMA-262), revision 3: [ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

Firefox 1.5 wspiera następujące protokoły transportu (HTTP, FTP, SSL, TLS i inne), wielojęzyczny zestaw znaków (Unicode), grafikę (GIF, JPEG, PNG, SVG i inne) oraz najnowszą wersję najpopularniejszego języka skryptowego, [JavaScript 1.6](pl/Nowo%c5%9bci_w_JavaScript_1.6).

### Zmiany od wersji 1.0 Firefoksa

Od wydania wersji 1.0, które miało miejsce 9 listopada 2004 roku, do Firefoksa włączonych zostało bardzo wiele nowych funkcji i poprawek. Szczegółowe informacje można uzyskać na stronie [squarefree.com](http://www.squarefree.com/burningedge/releases/1.5-comprehensive.html).

{{ languages( { "en": "en/Firefox\_1.5\_for_developers", "es": "es/Firefox\_1.5\_para_Desarrolladores", "fr": "fr/Firefox\_1.5\_pour_les_d\u00e9veloppeurs", "it": "it/Firefox\_1.5\_per_Sviluppatori", "ja": "ja/Firefox\_1.5\_for_developers", "nl": "nl/Firefox\_1.5\_voor_ontwikkelaars", "pt": "pt/Firefox\_1.5\_para_Desenvolvedores" } ) }}
