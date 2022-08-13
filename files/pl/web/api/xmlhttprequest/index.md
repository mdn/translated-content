---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
tags:
  - AJAX
  - Wszystkie_kategorie
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest
original_slug: XMLHttpRequest
---
Obiekt `XMLHttpRequest` jest obiektem [JavaScript](pl/JavaScript) zaprojektowanym przez firmę Microsoft i zaadaptowanym w programach Mozilla. Służy do pobierania danych przy użyciu protokołu HTTP. Wbrew nazwie może być stosowany do obsługi dokumentów w wielu formatach, nie tylko XML, ale także [JSON](pl/JSON).

Artykuł ten zawiera między innymi informacje specyficzne dla silnika [Gecko](pl/Gecko) lub kodu uprzywilejowanego, takiego jak kod rozszerzeń programu Firefox.

W silniku Gecko w obiekcie zaimplementowano interfejsy [`nsIJSXMLHttpRequest`](pl/NsIJSXMLHttpRequest) i [`nsIXMLHttpRequest`](pl/NsIXMLHttpRequest). W najnowszych wersjach Gecko dokonano pewnych modyfikacji tego obiektu — patrz artykuł [Zmiany w obiekcie XMLHttpRequest w Gecko 1.8](pl/Zmiany_w_obiekcie_XMLHttpRequest_w_Gecko_1.8).

### Podstawy

Korzystanie z obiektu `XMLHttpRequest` jest bardzo proste. Należy utworzyć instancję obiektu, otworzyć adres URL, po czym wysłać żądanie. Zwrócony przez serwer kod stanu HTTP, jak również pobrany dokument są następnie dostępne jako własności obiektu żądania.

{{ Note("W wersjach Firefoksa starszych niż 3 żądania są zawsze wysyłane przy użyciu kodowania UTF-8. W programie <a href='\"pl/Firefox_3\"'>Firefox 3</a> dokument jest wysyłany poprawnie przy użyciu kodowania określonego we własności <code>data.inputEncoding</code> (gdzie <code>data</code> to obiekt przekazany do metody <code>send()</code>; obiekt ten nie może być wartością <code>null</code>). Jeżeli nie określono żadnego kodowania, używane jest kodowanie UTF-8.") }}

#### Przykład

    var req = new XMLHttpRequest();
    req.open('GET', 'http://www.mozilla.org/', false);
    req.send(null);
    if(req.status == 200)
      dump(req.responseText);

> **Note:** **Uwaga:** W tym przykładzie dane pobierane są w sposób synchroniczny — wykonanie powyższego kodu JavaScript spowoduje zablokowanie interfejsu użytkownika do momentu zakończenia pobierania. Nie należy wykorzystywać podanego kodu w praktyce.

> **Note:** **Uwaga:** W żądaniach synchronicznych nie należy korzystać z funkcji `onreadystatechange` — w przeciwnym przypadku w wersjach Firefoksa starszych niż wersja 3 zostanie ona wywołana. Program [Firefox 3](pl/Firefox_3) jest zablokowany do momentu ukończenia procesu obsługi żądania (tak jak w powyższym przykładzie). Program Firefox 2 działa w ten sam sposób, jeżeli tylko funkcja `onreadystatechange` nie zostanie zaimplementowana.

#### Przykład dla protokołu innego niż HTTP

    var req = new XMLHttpRequest();
    req.open('GET', 'file:///home/user/file.json', false);
    req.send(null);
    if(req.status == 0)
      dump(req.responseText);

> **Note:** **Uwaga:** protokoły [`file:///`]() i [`ftp://`](ftp://) nie zwracają kodu stanu HTTP, stąd w ich przypadku własność `status` zwraca wartość zero, a własność `statusText` zawiera pusty ciąg znaków. Aby uzyskać więcej informacji, patrz {{ Bug(331610) }}.

### Zastosowanie asynchroniczne

W przypadku korzystania z obiektów `XMLHttpRequest` w rozszerzeniu Firefoksa pobierane dane powinny być ładowane asynchronicznie. Po całkowitym pobraniu danych przekazywane jest wywołanie zwrotne (ang. _callback_), co pozwala na normalną pracę przeglądarki podczas przetwarzania żądania.

#### Przykład

    var req = new XMLHttpRequest();
    req.open('GET', 'http://www.mozilla.org/', true); /* Argument trzeci, wartość true, określa, że żądanie ma być asynchroniczne */
    req.onreadystatechange = function (aEvt) {
      if (req.readyState == 4) {
         if(req.status == 200)
          dump(req.responseText);
         else
          dump("Błąd podczas ładowania strony\n");
      }
    };
    req.send(null);

#### Monitorowanie postępu

Obiekt `XMLHttpRequest` umożliwia monitorowanie wielu zdarzeń, które mogą wystąpić podczas przetwarzania żądania — służą do tego okresowe powiadomienia o postępie przetwarzania, komunikaty o błędach itp.

Jeżeli na przykład w czasie pobierania dokumentu do użytkownika mają być wysyłane informacje o postępie przetwarzania, można skorzystać z poniższego kodu:

    function onProgress(e) {
      var percentComplete = (e.position / e.totalSize)*100;
      ...
    }

    function onError(e) {
      alert("Podczas pobierania dokumentu wystąpił błąd " + e.target.status + ".");
    }

    function onLoad(e) {
      // ...
    }
    // ...
    var req = new XMLHttpRequest();
    req.onprogress = onProgress;
    req.open("GET", url, true);
    req.onload = onLoad;
    req.onerror = onError;
    req.send(null);

Atrybuty zdarzenia `onprogress`, `position` i `totalSize`, wskazują odpowiednio liczbę pobranych dotychczas bajtów i całkowitą liczbę bajtów, które mają zostać pobrane.

Dla wszystkich zdarzeń atrybut `target` wskazuje powiązany obiekt `XMLHttpRequest`.

> **Note:** **Uwaga:** przy korzystaniu z funkcji obsługi zdarzeń w dokumentach XML reprezentowanych przez obiekt `XMLDocument` program [Firefox 3](pl/Firefox_3) sprawdza, czy wartości własności `target`, `currentTarget` i `this` obiektu zdarzenia wskazują na właściwe obiekty. Aby uzyskać szczegółowe informacje, patrz {{ Bug(198595) }}.

### Inne własności i metody

Oprócz własności i metod omówionych powyżej obiekty `XMLHttpRequest` obsługują również inne przydatne własności i metody.

#### responseXML

Jeżeli ładowany jest dokument [XML](pl/XML), własność `responseXML` zawiera treść pobranego dokumentu w postaci obiektu `XmlDocument`, do którego można uzyskać za pomocą metod DOM. Jeżeli serwer wysyła poprawnie sformatowany dokument XML, ale nie jest okreśony nagłówek XML Content-Type, za pomocą metody [`overrideMimeType()`](pl/XMLHttpRequest#overrideMimeType.28.29) można wymusić przetwarzanie dokumentu jako kodu XML. Jeżeli dokument XML wysyłany z serwera nie jest sformatowany poprawnie, własność `responseXML` zwraca wartość null, niezależnie od wymuszonego typu danych.

#### overrideMimeType()

Za pomocą tej metody można wymusić sposób obsługi dokumentu, wskazując określony typ danych. Metoda ta przydaje się w sytuacji, gdy do przetwarzania otrzymanych danych ma być użyta własność `responseXML`, serwer wysyła dane w formacie [XML](pl/XML), ale nie jest wysyłany poprawny nagłówek Content-Type.

> **Note:** **Uwaga:** metodę tę należy wywołać przed użyciem metody `send()`.

    var req = new XMLHttpRequest();
    req.open('GET', 'http://www.mozilla.org/', true);
    req.overrideMimeType('text/xml');
    req.send(null);

#### setRequestHeader()

Za pomocą tej metody można ustawić dowolny nagłówek HTTP żądania przed wysłaniem go.

> **Note:** **Uwaga:** Przed wywołaniem tej metody należy użyć metody `open()`.

    var req = new XMLHttpRequest();
    req.open('GET', 'http://www.mozilla.org/', true);
    req.setRequestHeader("X-Foo", "Bar");
    req.send(null);

#### getResponseHeader()

Za pomocą tej metody można pobrać nagłówek HTTP ustawiony w odpowiedzi przesłanej przez serwer.

    var req = new XMLHttpRequest();
    req.open('GET', 'http://www.mozilla.org/', false);
    req.send(null);
    dump("Content-Type: " + req.getResponseHeader("Content-Type") + "\n");

#### abort()

Metoda ta służy do anulowania żądania, które jest właśnie wykonywane.

    var req = new XMLHttpRequest();
    req.open('GET', 'http://www.mozilla.org/', false);
    req.send(null);
    req.abort();

#### mozBackgroundRequest

Za pomocą tej własności można wyłączyć okna dialogowe uwierzytelniania i niewłaściwego certyfikatu, które mogą pojawiać się przy wysyłaniu żądania. Żądanie, dla którego ustawiono tę własność, nie będzie ponadto anulowane nawet w przypadku zamknięcia okna, z którego zostało wysłane. Własność ta działa wyłącznie w kodzie chrome.

    var req = new XMLHttpRequest();
    req.mozBackgroundRequest = true;
    req.open('GET', 'http://www.mozilla.org/', true);
    req.send(null);

### Zastosowanie w komponentach XPCOM

> **Note:** **Uwaga:** W przypadku korzystania z obiektów XMLHttpRequest w komponentach JavaScript XPCOM wymagane są pewne zmiany.

W komponentach JavaScript XPCOM niemożliwe jest utworzenie obiektów XMLHttpRequest za pomocą konstruktora `XMLHttpRequest()` — nie jest on zdefiniowany wewnątrz komponentów i jego wywołanie powoduje wystąpienie błędu. W celu utworzenia i użycia obiektu należy skorzystać z innej składni.

Zamiast kodu:

    var req = new XMLHttpRequest();
    req.onprogress = onProgress;
    req.onload = onLoad;
    req.onerror = onError;
    req.open("GET", url, true);
    req.send(null);

należy użyć:

    var req = Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"]
                        .createInstance(Components.interfaces.nsIXMLHttpRequest);
    req.onprogress = onProgress;
    req.onload = onLoad;
    req.onerror = onError;
    req.open("GET", url, true);
    req.send(null);

W kodzie w języku C++ można za pomocą metody QueryInterface przesłać komponent do interfejsu `nsIEventTarget`, aby ustawić procedury obsługi zdarzeń; bezpośrednie korzystanie z kanału jest jednak lepszą techniką.

### Ograniczona liczba jednoczesnych połączeń nawiązywanych przez obiekty XMLHttpRequest

Maksymalna liczba połączeń, określona w preferencji `network.http.max-persistent-connections-per-server` (dostępnej w oknie `about:config`), jest domyślnie ograniczona do 2. Niektóre interaktywne strony internetowe, na których używane są obiekty XMLHttpRequest, mogą podtrzymywać otwarte połączenie. Otwarcie dwóch lub trzech takich stron w osobnych kartach lub oknach może spowodować awarię przeglądarki, w wyniku której zawartość okien nie będzie odświeżana, a sama aplikacja przestanie odpowiadać.

### Zawartość binarna

Chociaż wysyłanie i odbieranie danych tekstowych jest najbardziej popularnym zastosowaniem obiektu `XMLHttpRequest`, za jego pomocą można także przesyłać zawartość binarną.

#### Pobieranie zawartości binarnej

    // Synchroniczne pobieranie PLIKÓW BINARNYCH za pomocą obiektu XMLHttpRequest
    function load_binary_resource(url) {
      var req = new XMLHttpRequest();
      req.open('GET', url, false);
      //XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
      req.overrideMimeType('text/plain; charset=x-user-defined');
      req.send(null);
      if (req.status != 200) return '';
      return req.responseText;
    }

    var filestream = load_binary_resource(url);
    // x to offset (tzn. pozycja) bajtu w zwróconym strumieniu pliku binarnego.
    // Wartość x powinna mieścić się w zakresie od 0 do filestream.length-1.
    var abyte = filestream.charCodeAt(x) & 0xff; // usunięcie najbardziej znaczącego (górnego) bajtu (f7)

Szczegółowe wyjaśnienia można znaleźć w [artykule dotyczącym pobierania zawartości binarnej za pomocą obiektu XMLHttpRequest](http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html). Patrz także [Pobieranie plików](pl/Fragmenty_kodu/Pobieranie_plik%c3%b3w).

#### Wysyłanie zawartości binarnej

W poniższym przykładzie zawartość binarna jest wysyłana asynchronicznie za pomocą metody POST. Zmienna `aBody` reprezentuje wysyłane dane.

     var req = new XMLHttpRequest();
     req.open("POST", url, true);
     // ustawienie odpowiednich nagłówków i typu MIME
     req.setRequestHeader("Content-Length", 741);
     req.sendAsBinary(aBody);

Zawartość binarną można także wysłać, przekazując instancję interfejsu [nsIFileInputStream](/pl/NsIFileInputStream "pl/NsIFileInputStream") do metody `req.send()`. W takim przypadku nie jest konieczne ustawienie nagłówka `Content-Length`:

    // Tworzenie strumienia z pliku.
    var stream = Components.classes["@mozilla.org/network/file-input-stream;1"]
                           .createInstance(Components.interfaces.nsIFileInputStream);
    stream.init(file, 0x04 | 0x08, 0644, 0x04); // file to instancja interfejsu nsIFile

    // Próba określenia typu MIME pliku
    var mimeType = "text/plain";
    try {
      var mimeService = Components.classes["@mozilla.org/mime;1"].getService(Components.interfaces.nsIMIMEService);
      mimeType = mimeService.getTypeFromFile(file); // file to instancja interfejsu nsIFile
    }
    catch(e) { /* W tym przypadku zastosuj po prostu typ text/plain */ }

    // Wysłanie
    var req = Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"]
                        .createInstance(Components.interfaces.nsIXMLHttpRequest);
    req.open('PUT', url, false); /* synchronicznie! */
    req.setRequestHeader('Content-Type', mimeType);
    req.send(stream);

### Pomijanie pamięci podręcznej

Obiekt `XMLHttpRequest` próbuje z reguły pobrać zawartość z lokalnej pamięci podręcznej. Aby pominąć tę próbę, należy skorzystać z poniższego kodu:

     var req = new XMLHttpRequest();
     req.channel.loadFlags |= Components.interfaces.nsIRequest.LOAD_BYPASS_CACHE;
     req.open('GET', url, false);
     req.send(null);

Istnieje także alternatywny sposób pomijania pamięci podręcznej, opisany [tutaj](http://mozdev.org/pipermail/project_owners/2006-August/008353.html):

     var req = new XMLHttpRequest();
     req.open("GET", url += (url.match(/\?/) == null ? "?" : "&") + (new Date()).getTime(), false);
     req.send(null);

Do adresu URL dodawany jest parametr zawierający znacznik czasu (odpowiednio wstawiane są znaki ? i &). Na przykład adres <http://foo.com/bar.html> jest przekształcany na <http://foo.com/bar.html?12345>, a <http://foo.com/bar.html?foobar=baz> zostaje zamieniany na <http://foo.com/bar.html?foobar=baz&12345>. Lokalna pamięć podręczna jest indeksowana przy użyciu adresów URL; tymczasem, ponieważ każdy adres URL w obiekcie XMLHttpRequest jest niepowtarzalny, pamięć podręczna jest zawsze pomijana.

### Pobieranie kodu JSON i JavaScript w rozszerzeniach

W rozszerzeniach do przetwarzania pobieranego z sieci kodu JSON lub JavaScript nie należy używać metody [`eval()`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/eval). Szczegółowe informacje można znaleźć w artykule [Pobieranie kodu JSON i JavaScript w rozszerzeniach](pl/Pobieranie_kodu_JSON_i_JavaScript_w_rozszerzeniach).

### Odnośniki

1.  [AJAX: wprowadzenie](pl/AJAX/Na_pocz%c4%85tek)
2.  [Obiekt XMLHttpRequest - architektura REST i zaawansowane interfejsy użytkownika](http://www.peej.co.uk/articles/rich-user-experience.html) (artykuł w j. ang.)
3.  [Dokumentacja XULPlanet](http://www.xulplanet.com/references/objref/XMLHttpRequest.html) (artykuł w j. ang.)
4.  [Dokumentacja firmy Microsoft](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmobjxmlhttprequest.asp) (artykuł w j. ang.)
5.  [Materiały dla programistów Apple](http://developer.apple.com/internet/webcontent/xmlhttpreq.html) (artykuł w j. ang.)
6.  [Korzystanie z obiektu XMLHttpRequest (jibbering.com)](http://jibbering.com/2002/4/httprequest.html) (artykuł w j. ang.)
7.  [Obiekt XMLHttpRequest: robocza wersja specyfikacji W3C](http://www.w3.org/TR/XMLHttpRequest/) (artykuł w j. ang.)

{{ languages( { "en": "en/XMLHttpRequest", "es": "es/XMLHttpRequest", "fr": "fr/XMLHttpRequest", "it": "it/XMLHttpRequest", "ja": "ja/XMLHttpRequest", "ko": "ko/XMLHttpRequest", "zh-cn": "cn/XMLHttpRequest" } ) }}
