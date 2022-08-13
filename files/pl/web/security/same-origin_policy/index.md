---
title: Reguła tego samego pochodzenia (Same-origin policy)
slug: Web/Security/Same-origin_policy
tags:
  - Bezpieczeństwo
  - CORS
  - Host
  - JavaScript
  - Same-origin policy
  - URL
  - origin
  - pochodzenie
  - reguła tego samego pochodzenia
  - źródło
translation_of: Web/Security/Same-origin_policy
original_slug: Web/Bezpieczeństwo/Same-origin_policy
---
**Same-origin policy** (reguła tego samego pochodzenia) to istotny mechanizm bezpieczeństwa, który określa sposób, w jaki dokument lub skrypt jednego pochodzenia ({{Glossary("origin")}}) może komunikować się z zasobem innego pochodzenia. Pozwala to na odizolowanie potencjalnie szkodliwych dokumentów i tym samym redukowane są czynniki sprzyjające atakom.

## Definicja "origin"

Dwa URLe są _tego samego pochodzenia_, jeśli {{Glossary("protocol")}}, {{Glossary("port")}} (jeśli wyszczególniony) oraz {{Glossary("host")}} są takie same dla obu. Tego typu charakterystykę nazywa się "krotką schematu/hosta/portu" ("scheme/host/port tuple") lub po prostu "krotką" ("Krotka" to kolekcja elementów tworzących zbiór - generyczna forma, która może być podwójna/potrójna/poczwórna itd.).

Poniższa tabela zawiera przykłady zestawień "originów" z URLem `http://store.company.com/dir/page.html`:

| URL                                               | Wynik         | Powód                                          |
| ------------------------------------------------- | ------------- | ---------------------------------------------- |
| `http://store.company.com/dir2/other.html`        | Same origin   | Różni się tylko ścieżka                        |
| `http://store.company.com/dir/inner/another.html` | Same origin   | Różni się tylko ścieżka                        |
| `https://store.company.com/page.html`             | Niepowodzenie | Inny protokół                                  |
| `http://store.company.com:81/dir/page.html`       | Niepowodzenie | Inny port (`http://` domyślnie jest portem 80) |
| `http://news.company.com/dir/page.html`           | Niepowodzenie | Inny host                                      |

Zobacz również [definicję "origin" dla URLów `file:`](/pl/docs/Archive/Misc_top_level/Same-origin_policy_for_file:_URIs), ich zestawienie jest bardziej złożone.

### Odziedziczone "origin"

Skrypty wywoływane przez strony z URLami `about:blank` lub `javascript:` dziedziczą "origin" dokumentu zawierającego ten URL, ponieważ tego typu URLe nie zawierają informacji o serwerze źródłowym.

> **Note:** Przykładowo, `about:blank` jest często używany jako URL nowego, pustego, wyskakującego okienka, w którym skrypt-rodzic umieszcza treść (np. przez mechanizm {{domxref("Window.open()")}}). Jeśli dane okienko zawiera również JavaScript, skrypt odziedziczy ten sam "origin" jak skrypt, który je utworzył.

> **Warning:** `data:` URLe zyskują nowy, pusty kontekst bezpieczeństwa.

### Wyjątki w Internet Explorer

W Internecie Explorerze istnieją dwa wyjątki od reguły same-origin:

- Strefy Zaufania
  - : Jeśli obie domeny znajdują się w _strefie wysokiego zaufania_ (np. firmowe domeny intranetu), wówczas ograniczenia same-origin nie są stosowane.
- Port
  - : IE nie bierze pod uwagę portów w trakcie sprawdzania obecności tego samego pochodzenia. Przykładowo, `https://company.com:81/index.html` i `https://company.com/index.html` są uznawane za posiadające ten sam "origin", więc nie są implementowane żadne ograniczenia .

Wspomniane wyjątki są niestandardowe i nie są wspierane przez inne przeglądarki.

## Zmiana origin

Strona może zmieniać swoje pochodzenie przy zachowaniu pewnych ograniczeń. Skrypt może nadać wartość {{domxref("document.domain")}} równą swojej obecnej domenie lub superdomenie swojej obecnej domeny. Jeśli odwołuje się do superdomeny obecnej domeny, wówczas krótsza superdomena jest brana pod uwagę przy kontroli same-origin.

Załóżmy, że skrypt z dokumentu pod adresem `http://store.company.com/dir/other.html` wywołuje poniższą linijkę:

```js
document.domain = "company.com";
```

Następnie strona może przejść pomyślnie kontrolę same-origin mając adres `http://company.com/dir/page.html` (przyjmując, że `http://company.com/dir/page.html` ma `document.domain` równe "`company.com`" by wskazać, że chce na to zezwalać - sprawdź: {{domxref("document.domain")}}). Jednakże, `company.com` **nie może** ustawić `document.domain` na `othercompany.com`, ponieważ nie jest to superdomena `company.com`.

Numer portu jest sprawdzany oddzielnie przez przeglądarkę. Każde odwołanie do `document.domain`, w tym `document.domain = document.domain`, spowoduje przypisanie numerowi portu wartości `null`. Jednakże, **nie uda się** nawiązać komunikacji `company.com:8080` z `company.com` tylko poprzez umieszczenie `document.domain = "company.com"` w pierwszym z nich. Taki zapis musi znajdować się w obu dokumentach, aby ich porty były równocześnie równe `null`.

> **Note:** **Zauważ:** Używając `document.domain` , żeby pozwolić subdomenie na bezpieczny dostęp do rodzica potrzebujesz ustawić `document.domain` na tę _samą wartość_ jednocześnie w domenie rodzica i w subdomenie. Jest to wymagane nawet podczas zwykłego przywracania domeny rodzica do pierwotnej wartości. Niepowodzenie może skutkować błędami dostępu.

## Dostęp sieciowy cross-origin (międzyźródłowy)

Reguła tego samego pochodzenia kontroluje interakcje pomiędzy dwoma różnymi "originami", np. kiedy używasz elementu {{domxref("XMLHttpRequest")}} czy {{htmlelement("img")}}. Tego typu interakcje przeważnie dzielą się na trzy kategorie:

- _zapisy_ cross-origin przeważnie są dopuszczane. Przykłady to: linki, przekierowania i wypełnienia formularzy. Niektóre zapytania HTTP wymagają [preflight](/pl/docs/Web/HTTP/CORS#Preflighted_requests)u.
- _osadzanie_ cross-origin jest przeważnie dopuszczane. (przykłady zostały wylistowane poniżej)
- _odczyty_ cross-origin przeważnie nie są dopuszczane, ale dostęp do odczytu jest zwykle możliwy przez osadzanie. Przykładowo, możliwy jest odczyt wymiarów osadzonego obrazka, działanie osadzonego skryptu czy [dostępność osadzonego źródła](https://bugzilla.mozilla.org/show_bug.cgi?id=629094).

Poniżej znajdują się przykłady zasobów, które można osadzać międzyźródłowo:

- JavaScript z `<script src="…"></script>`. Szczegóły dot. błędu dla błędów składniowych są dostępne wyłącznie dla skryptów same-origin.
- CSS podpinany poprzez `<link rel="stylesheet" href="…">`. Zgodnie z [luźniejszymi zasadami składni](http://scarybeastsecurity.blogspot.dk/2009/12/generic-cross-browser-cross-domain.html) CSS, cross-originowy CSS wymaga poprawnego nagłówka `Content-Type`. Ograniczenia różnią się w zależności od przeglądarki: [IE](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622939(v=vs.85)?redirectedfrom=MSDN>), [Firefox](http://www.mozilla.org/security/announce/2010/mfsa2010-46.html), [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=9877), [Safari](http://support.apple.com/kb/HT4070) (przewiń do CVE-2010-0051) i [Opera](https://security.opera.com/cross-domain-data-theft-with-css-load-opera-security-advisories/).
- Obrazki wyświetlane poprzez {{htmlelement("img")}}.
- Media odtwarzane poprzez {{htmlelement("video")}} i {{htmlelement("audio")}}.
- Wtyczki osadzane za pomocą {{htmlelement("object")}}, {{htmlelement("embed")}} oraz {{htmlelement("applet")}}.
- Czcionki używane poprzez {{cssxref("@font-face")}}. Niektóre przeglądarki zezwalają na czcionki cross-origin, inne wymagają same-origin.
- Cokolwiek osadzane poprzez {{htmlelement("frame")}} i {{htmlelement("iframe")}}. Strony mogą używać nagłówka {{HTTPHeader("X-Frame-Options")}}, by zapobiegać framingowi cross-origin.

### Jak umożliwić dostęp cross-origin

Poprzez [CORS](/pl/docs/Web/HTTP/CORS) można zezwolić na dostęp cross-origin. CORS jest częścią {{Glossary("HTTP")}}, co pozwala serwerom na określanie, które hosty są upoważnione do ładowania treści z tego serweru.

### Jak zablokować dostęp cross-origin

- By uniemożliwić zapisy cross-origin należy sprawdzić token w żądaniu — chodzi konkretniej o token [Cross-Site Request Forgery (CSRF)](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29). Odczyty typu cross-origin muszą być zablokowane na stronach używających tego typu tokenu.
- By uniemożliwić odczyty cross-origin należy upewnić się, że dane zasoby nie są osadzalne. Często koniecznym jest uniemożliwienie osadzania, ponieważ osadzanie źródła zawsze ujawnia jakieś informacje o nim.
- By uniemożliwić osadzanie cross-origin należy upewnić się, że dane zasoby nie mogą być interpretowane jako jeden z osadzanych formatów wylistowanych poniżej. Przeglądarki mogą ignorować nagłówki `Content-Type`. Przykładowo, jeśli w dokumencie HTML umieszczony zostanie tag `<script>`, przeglądarka będzie próbować parsować HTML jako JavaScript. Jeśli zasób nie jest głównym podprogramem strony do zapobiegania osadzaniu można dodatkowo użyć tokenu CSRF.

## Dostęp cross-origin API skryptu

API JavaScriptu, jak {{domxref("HTMLIFrameElement.contentWindow", "iframe.contentWindow")}}, {{domxref("window.parent")}}, {{domxref("window.open")}} i {{domxref("window.opener")}} pozwalają dokumentom na bezpośrednią, wzajemną referencję. Jeśli dwa dokumenty nie są tego samego pochodzenia, referencje te umożliwiają bardzo ograniczony dostęp do obiektów {{domxref("Window")}} i {{domxref("Location")}}, jako opisano w następnych dwóch sekcjach.

Do komunikacji pomiędzy dokumentami o różnym pochodzeniu stosuje się {{domxref("window.postMessage")}}.

Specyfikacja: [Standard HTML § Obiekty cross-origin](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

Poniższy dostęp cross-origin jest dopuszczany w przypadku wymienionych właściwości `Window`:

| Metody                                       |
| -------------------------------------------- |
| {{domxref("window.blur")}}         |
| {{domxref("window.close")}}         |
| {{domxref("window.focus")}}         |
| {{domxref("window.postMessage")}} |

| Własności                                |                   |
| ---------------------------------------- | ----------------- |
| {{domxref("window.closed")}}     | Tylko do odczytu. |
| {{domxref("window.frames")}}     | Tylko do odczytu. |
| {{domxref("window.length")}}     | Tylko do odczytu. |
| {{domxref("window.location")}} | Odczyt/Zapis.     |
| {{domxref("window.opener")}}     | Tylko do odczytu. |
| {{domxref("window.parent")}}     | Tylko do odczytu. |
| {{domxref("window.self")}}     | Tylko do odczytu. |
| {{domxref("window.top")}}         | Tylko do odczytu. |
| {{domxref("window.window")}}     | Tylko do odczytu. |

Niektóre przeglądarki zezwalają na dostęp większej ilości właściwości, niż wypisane powyżej.

### Location

Poniższy dostęp cross-origin jest dopuszczany w przypadku właściwości `Location`:

| Metody                                   |
| ---------------------------------------- |
| {{domxref("location.replace")}} |

| Atrybuty                             |                  |
| ------------------------------------ | ---------------- |
| {{domxref("URLUtils.href")}} | Tylko do zapisu. |

Niektóre przeglądarki umożliwiają dostęp do większej liczby właściwości, niż wymienione powyżej.

## Dostęp cross-origin do danych pamięci

Dostęp do danych przechowywanych w przeglądarce, jak [localStorage](/pl/docs/Web/API/Web_Storage_API) czy [IndexedDB](/pl/docs/Web/API/IndexedDB_API) są odseparowane pochodzeniem. Każdy origin otrzymuje własną, odseparowaną pamięć i JavaScript jednego pochodzenia nie może odczytywać lub wpisywać niczego do pamięci należącej do innego originu.

Ciasteczka (cookies) używają oddzielnej definicji originów. Strona może ustalić ciasteczko dla własnej domeny lub domeny-rodzica dopóki, gdy domena-rodzic nie jest sufiksem publicznym. Firefox i Chrome używają listy sufiksów publicznych ([Public Suffix List](https://publicsuffix.org/)), by zweryfikować czy domena jest sufiksem publicznym. Internet Explorer używa własnej, wewnątrznej metody weryfikacji czy domena jest sufiksem publicznym. Przeglądarka udostępni ciasteczko podanej domenie zawierającej jakiekolwiek subdomeny, niezależnie jaki protokół (HTTP/HTTPS) czy port jest używany. Przy ustalaniu ciasteczka możliwe jest określenie limitu dostępności używając flag domeny (Domain), ścieżki (Path), bezpiecznej (Secure) i Http-Only. Gdy odczytywane jest ciasteczko nie można zobaczyć, gdzie zostało ustalone. Nawet jeśli używane są wyłącznie bezpieczne połączenia https dane ciasteczko mogło zostać ustalone poprzez połączenie niebezpieczne.

## Zobacz również

- [Reguła same-origin dla file: URIy](/pl/docs/Archive/Misc_top_level/Same-origin_policy_for_file:_URIs)
- [Reguła Same-Origin na W3C](http://www.w3.org/Security/wiki/Same_Origin_Policy)
- <https://web.dev/secure/same-origin-policy>

## Informacje dot. dokumentu źródłowego

- Author(s): Jesse Ruderman

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
