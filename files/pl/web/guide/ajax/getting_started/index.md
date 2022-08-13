---
title: Na początek
slug: Web/Guide/AJAX/Getting_Started
tags:
  - AJAX
  - Wszystkie_kategorie
translation_of: Web/Guide/AJAX/Getting_Started
original_slug: Web/Guide/AJAX/Na_początek
---
Ten artykuł pozwoli Ci poznać podstawy technologii AJAX oraz poda dwa proste, gotowe do użycia przykłady.

### Czym jest AJAX?

AJAX (_Asynchronous JavaScript and XML_) jest niedawno ukutą nazwą na dwie potężne cechy przeglądarek WWW, które, choć dostępne od lat, były pomijane przez wielu autorów stron, aż do niedawna, gdy na rynku ukazały się takie aplikacje, jak Gmail, Google Suggest i Google Maps.

Dzięki tym cechom możesz:

- wysyłać zapytania do serwera bez przeładowywania strony,
- parsować i pracować z dokumentami XML.

Termin AJAX jest akronimem. **A** pochodzi od _"asynchroniczny"_, co znaczy, że możesz wysyłać zapytania HTTP do serwera i robić inne rzeczy w trakcie oczekiwania na odpowiedź. **JA** pochodzi od _"JavaScript"_, a **X** pochodzi od _"XML"_.

### Krok 1 – powiedz "Poproszę!", czyli jak wykonać zapytanie HTTP

W celu stworzenia zapytania HTTP przy użyciu JavaScriptu, potrzebujesz instancji klasy, która posiada żądaną funkcjonalność. Taka klasa została po raz pierwszy wprowadzona w Internet Explorerze, jako obiekt ActiveX, pod nazwą `XMLHTTP`. Później Mozilla, Safari i inne przeglądarki również dodały taki obiekt, implementując klasę `XMLHttpRequest`, która obsługuje metody i właściwości oryginalnego obiektu ActiveX.

W rezultacie, w celu stworzenia międzyprzeglądarkowej instancji (obiektu) potrzebnej nam klasy, należy wpisać:

    if (window.XMLHttpRequest) { // Mozilla, Safari, Opera ...
        http_request = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
    }

(Na potrzeby przykładu powyższy fragment jest lekko uproszczoną wersją kodu używanego do stworzenia instancji XMLHTTP. Bardziej "życiowy" przykład można znaleźć w punkcie 3. tego artykułu).

Niektóre wersje przeglądarek opartych na technologii Mozilli nie zadziałają poprawnie, jeżeli odpowiedź z serwera nie będzie opisana XML-owym nagłówkiem `mime-type`. Aby rozwiązać ten problem, można użyć dodatkowej metody do nadpisania nagłówka wysyłanego przez serwer, jeśli nie jest to `text/xml`.

    http_request = new XMLHttpRequest();
    http_request.overrideMimeType('text/xml');

Następnie należy się zdecydować, co chcesz zrobić po otrzymaniu od serwera odpowiedzi na Twoje zapytanie. Na tym etapie wystarczy powiedzieć obiektowi zapytania HTTP, która funkcja JavaScript będzie opracowywała wynik. Można to uzyskać poprzez ustawienie właściwości `onreadystatechange` obiektu funkcji JavaScript, której będziesz używał, na przykład:

`http_request.onreadystatechange = nameOfTheFunction;`

Zwróć uwagę, że nie ma żadnych nawiasów za nazwą funkcji i nie są przekazywane żadne parametry, ponieważ chcemy przypisać referencję do tej funkcji, a nie wywołać ją. Można także, zamiast podawać nazwę funkcji, użyć techniki JavaScript do definiowania funkcji w locie (zwanej "funkcją anonimową") i określić akcje, które przetworzą wynik natychmiast, jak na przykład:

    http_request.onreadystatechange = function(){
        // instrukcje
    };

Następnie, kiedy już zostało zadeklarowane, co będzie się działo zaraz po odebraniu odpowiedzi, należy wykonać zapytanie. W tym celu należy wywołać metody `open()` i `send()` klasy zapytania HTTP, tak jak na poniższym przykładzie:

    http_request.open('GET', 'http://www.example.org/some.file', true);
    http_request.send(null);

- Pierwszy parametr metody `open()` określa metodę zapytania HTTP - GET, POST, HEAD lub dowolną inną metodę, której chcesz użyć i którą obsługuje serwer. Dla zachowania zgodności ze standardem nazwę metody wpisuj dużymi literami. W przeciwnym razie niektóre przeglądarki (np. Firefox) mogą nie przetworzyć zapytania. Aby dowiedzieć się więcej na temat możliwych metod zapytań HTTP, zajrzyj do [dokumentacji W3C](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html).

- Drugi parametr określa URL strony, która ma zostać odpytana. W celu zwiększenia bezpieczeństwa, nie jest możliwe odpytywanie stron znajdujących się w domenach zewnętrznych (tzw. 3rd-party domains). Upewnij się, że wpisujesz dokładną nazwę domeny, na wszystkich swoich stronach, w przeciwnym razie po wywołaniu metody `open()` dostaniesz odpowiedź z błędem "brak dostępu" (permission denied). Częstym błędem jest otwieranie strony jako domena.tld, ale wywoływanie stron z www\.domena.tld.

- Trzeci parametr decyduje, czy zapytanie ma być asynchroniczne. Jeżeli tak, wykonywanie funkcji JavaScript będzie kontynuowane podczas oczekiwania na odpowiedź z serwera. I to jest właśnie A w nazwie AJAX.

Parametr metody `send()` może być dowolną daną, którą chcesz wysłać do serwera w przypadku użycia metody `POST`. Dane powinny być umieszczone w formie używanej przez ciągi zapytań, czyli:

`name=value&anothername=othervalue&so=on`

Należy pamiętać o zakodowaniu każdej wysyłanej wartości funkcją [`encodeURIComponent`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/encodeURIComponent). Na przykład jeśli w środku, jakiegoś przesyłanego łańcucha znajdzie się znak & to "obetnie" nasz łańcuch. Opis tej funkcji w dokumentcji zawiera bardziej szczegółowe informacje.

Zwróć uwagę na to, że jeśli chcesz wysłać dane metodą `POST`, musisz zmienić typ MIME swojego zapytania, używając składni:

    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

W przeciwnym wypadku, serwer odrzuci dane wysłane metodą POST.

### Krok 2 – "Voilà!", czyli obsługa odpowiedzi serwera

Pamiętasz, że w trakcie wysyłania zapytania została podana nazwa funkcji JavaScript, która została przygotowana do obsługi odpowiedzi?

`http_request.onreadystatechange = nazwaFunkcji;`

Zobaczmy, co ta funkcja powinna zrobić. Najpierw musi ona sprawdzić stan zapytania. Jeżeli status ma wartość 4, oznacza to, że udało się pobrać pełną odpowiedź z serwera i można kontynuować jej przetwarzanie.

    if (http_request.readyState == 4) {
        // wszystko jest OK, odpowiedź została odebrana
    } else {
        // ciągle nie gotowe
    }

Możliwe są następujące wartości `readyState`:

- 0 (niezainicjowane)
- 1 (w trakcie pobierania)
- 2 (pobrano)
- 3 (interaktywne)
- 4 (gotowe)

([Źródło](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/readystate_1.asp))

Następnie należy sprawdzić kod odpowiedzi serwera HTTP. Wszystkie możliwe kody są opisane na [stronie W3C](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). W tym przypadku interesuje nas tylko odpowiedź `200 OK`.

    if (http_request.status == 200) {
        // świetnie!!
    } else {
        // wystąpił jakiś problem z zapytaniem,
        // na przykład odpowiedzią mogło być 404 (Nie odnaleziono)
        // lub 500 (Wewnętrzny błąd serwera)
    }

Teraz, kiedy został już sprawdzony stan zapytania i kod statusu odpowiedzi, możesz zrobić co zechcesz z danymi otrzymanymi z serwera. Masz dwie możliwości dostania się do danych:

- `http_request.responseText` – zwróci odpowiedź serwera jako ciąg znakowy
- `http_request.responseXML` – zwróci odpowiedź jako obiekt `XMLDocument`, z którym można pracować przy użyciu funkcji DOM JavaScriptu.

### Krok 3 – "Do dzieła!" - Prosty przykład

Stwórzmy teraz proste zapytanie HTTP. JavaScript odpyta serwer o dokument HTML `test.html`, który zawiera tekst "Jestem testem.", a następnie wyświetlimy ten tekst przy użyciu funkcji `alert()`.

    <script type="text/javascript" language="javascript">

        var http_request = false;

        function makeRequest(url) {

            http_request = false;

            if (window.XMLHttpRequest) { // Mozilla, Safari,...
                http_request = new XMLHttpRequest();
                if (http_request.overrideMimeType) {
                    http_request.overrideMimeType('text/xml');
                    // Przeczytaj o tym wierszu poniżej
                }
            } else if (window.ActiveXObject) { // IE
                try {
                    http_request = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    try {
                        http_request = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {}
                }
            }

            if (!http_request) {
                alert('Poddaję się :( Nie mogę stworzyć instancji obiektu XMLHTTP');
                return false;
            }
            http_request.onreadystatechange = function() { alertContents(http_request); };
            http_request.open('GET', url, true);
            http_request.send(null);

        }

        function alertContents(http_request) {

            if (http_request.readyState == 4) {
                if (http_request.status == 200) {
                    alert(http_request.responseText);
                } else {
                    alert('Wystąpił problem z zapytaniem.');
                }
            }

        }
    </script>
    <span
        style="cursor: pointer; text-decoration: underline"
        onclick="makeRequest('test.html')">
            Odpytaj
    </span>

W tym przykładzie:

- użytkownik klika na odnośnik "Odpytaj" w przeglądarce;
- to wywołuje funkcję `makeRequest` z parametrem - nazwą `test.html` pliku HTML w tym samym katalogu;
- wysyłane jest zapytanie, a następnie (`onreadystatechange`) wywołanie jest przenoszone do `alertContents()`;
- `alertContents()` sprawdza uzyskaną odpowiedź i wyświetla treść pliku `test.html` przy użyciu funkcji `alert()`.

Możesz przetestować ten przykład [tutaj](http://www.w3clubs.com/mozdev/httprequest_test.html) i zobaczyć testowy plik [tutaj](http://www.w3clubs.com/mozdev/test.html).

**Uwaga**: Jeżeli strona wywołana przez XMLHttpRequest nie jest poprawionym XML-em (np. kiedy jest plikiem tekstowym), linia `http_request.overrideMimeType('text/xml');` spowoduje pojawienie się błędów w konsoli JavaScript w Firefoksie 1.5 i późniejszych. Zostało to opisane na stronie: <https://bugzilla.mozilla.org/show_bug.cgi?id=311724>. Jest to zachowanie właściwe; ten artykuł zostanie niedługo poprawiony, aby dostosować się do tej zmiany.

**Uwaga 2**: jeżeli wysyłasz zapytanie do skryptu, który ma zwrócić XML, zamiast do statycznego pliku XML, musisz ustawić nagłówki odpowiedzi, jeśli chcesz, aby zadziałało to także w Internet Explorerze. Jeżeli nie ustawisz nagłówka `Content-Type: application/xml`, IE zwróci błąd JavaScript "Object Expected" po wierszu, w którym próbujesz dostać się do XML-owego elementu. Jeżeli nie ustawisz nagłówka `Cache-Control: no-cache`, przeglądarka doda odpowiedź do pamięci podręcznej i nigdy nie wyśle żądania ponownie, sprawiając, że praca nad skryptem może być "kłopotliwa".

**Uwaga 3**: jeżeli zmienna `http_request` jest używana globalnie, konkurujące funkcje wywołujące `makeRequest()` mogą nadpisywać siebie nawzajem, tworząc problemy. Określenie zmiennej `http_request` lokalnie dla funkcji i przekazywanie jej do funkcji `alertContent()` pozwala uniknąć takiej sytuacji.

**Uwaga 4**: Aby zarejestrować funkcję zwrotną (callback function) `onreadystatechange`, nie możesz użyć argumentów. Dlatego też poniższy kod nie zadziała:

    http_request.onreadystatechange = alertContents(http_request); // (nie działa)

Z tego względu, aby zarejestrować tę funkcję pomyślnie, należy albo przekazać argumenty pośrednio poprzez funkcję anonimową, albo użyć `http_request` jako zmiennej globalnej. Oto przykłady:

    http_request.onreadystatechange = function() { alertContents(http_request); };  //1 (simultaneous request)
    http_request.onreadystatechange = alertContents;  //2 (global variable)

Metoda pierwsza pozwala mieć wiele zapytań przetwarzanych jednocześnie, a metoda trzecia może być używana jeśli `http_request` jest zmienną globalną.

**Uwaga 5**: W przypadku błędu połączenia (na przykład kiedy serwer WWW został wyłączony), zostanie wyrzucony wyjątek w metodzie onreadystatechange podczas próby odczytania zmiennej .status. Z tego względu dobrze jest opakować wyrażenie if...then w try...catch. (Zobacz: <https://bugzilla.mozilla.org/show_bug.cgi?id=238559>).

    function alertContents(http_request) {

            try {
                if (http_request.readyState == 4) {
                    if (http_request.status == 200) {
                        alert(http_request.responseText);
                    } else {
                        alert('Wystąpił problem z tym żądaniem.');
                    }
                }
            }
            catch( e ) {
                alert('Złapany wyjątek: ' + e.description);
            }

        }

### Krok 4 – "Z archiwum X" czyli praca z odpowiedzią XML

W poprzednim przykładzie, po otrzymaniu odpowiedzi z serwera, użyliśmy właściwości `responseText` obiektu zapytania i zawierała ona treść pliku \<tt>test.html\</tt>. Teraz spróbujmy użyć właściwości `responseXML`.

Przede wszystkim stwórzmy prawidłowy dokument XML, o który odpytamy potem serwer. Taki dokument (\<tt>test.xml\</tt>) może wyglądać tak:

    <?xml version="1.0" ?>
    <root>
        Jestem testem.
    </root>

W skrypcie musimy tylko zmienić linię zapytania na:

    ...
    onclick="makeRequest('test.xml')">
    ...

Potem w `alertContents()` musimy zmienić linię `alert(http_request.responseText);` na:

    var xmldoc = http_request.responseXML;
    var root_node = xmldoc.getElementsByTagName('root').item(0);
    alert(root_node.firstChild.data);

W ten sposób pobraliśmy obiekt `XMLDocument`, zwrócony przez `responseXML` i skorzystaliśmy z metod DOM, aby dostać się do danych zawartych w dokumencie XML. Możesz zajrzeć do dokumentu XML `test.xml` [tutaj](http://www.w3clubs.com/mozdev/test.xml) oraz do zaktualizowanego skryptu [tutaj](http://www.w3clubs.com/mozdev/httprequest_test_xml.html).

Aby dowiedzieć się więcej o metodach DOM, zajrzyj do dokumentów [Mozilla's DOM implementation](http://www.mozilla.org/docs/dom/).

{{ languages( { "ca": "ca/AJAX/Primers_passos", "de": "de/AJAX/Getting_Started", "en": "en/AJAX/Getting_Started", "es": "es/AJAX/Primeros_Pasos", "fr": "fr/AJAX/Premiers_pas", "it": "it/AJAX/Iniziare", "ja": "ja/AJAX/Getting_Started", "ko": "ko/AJAX/Getting_Started", "pt": "pt/AJAX/Como_come\u00e7ar", "ru": "ru/AJAX/\u0421\_\u0447\u0435\u0433\u043e\_\u043d\u0430\u0447\u0430\u0442\u044c", "zh-cn": "cn/AJAX/\u5f00\u59cb", "zh-tw": "zh_tw/AJAX/\u4e0a\u624b\u7bc7" } ) }}
