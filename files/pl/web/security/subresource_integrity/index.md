---
title: Integralność podzasobów (Subresource Integrity)
slug: Web/Security/Subresource_Integrity
tags:
  - Bezpieczeństwo
  - HTML
  - HTTP
  - Wstęp
  - bezpieczeństwo aplikacji WWW
translation_of: Web/Security/Subresource_Integrity
original_slug: Web/Bezpieczeństwo/Subresource_Integrity
---
**Subresource Integrity** (SRI), w wolnym tłumaczeniu "integralność podzasobów", to funkcja bezpieczeństwa umożliwiająca przeglądarkom weryfikowanie, czy zasoby, które przechwytują (np. z[ CDN](/pl/docs/Glossary/CDN)) docierają do nich bez nieporządanych zmian. Działanie takie jest możliwe dzięki używaniu hasha kryptograficznego, z którym przechwycony zasób musi być zgodny.

> **Note:** **Notka**: W celu weryfikacji integralności podzasobów danych przekazywanych ze źródła innego, niż dokument w którym są osadzane przeglądarki dodatkowo sprawdzają źródło poprzez międzyźródłowe udostępnianie zasobów, tzw. [Cross-Origin Resource Sharing (CORS)](/pl/docs/Web/HTTP/CORS). Dzięki temu upewniają się, że pochodzenie (origin) oferujące dane zasoby pozwala na udostępnianie ich z innym, sprecyfizowanym originem.

## Korzyści wynikające z "Subresource Integrity"

Używając {{Glossary("CDN", "Content Delivery Networks (CDNs)")}} do hostowania plików, jak np. skrypty czy arkusze stylów, które są udostępnianie pośród licznych stron WWW można polepszyć wydajność strony i zachować przepustowość łącza. Jednakże, używając CDNów ryzykujemy, że jeśli atakujący przejmie kontrolę nad CDNem to może wprowadzić szkodliwą zawartość do plików na CDNie (lub zupełnie je zastąpić) i przez to potencjalnie może zaatakować wszystkie strony, które przechwytują pliki z tego CDNu.

"Subresource Integrity" pozwala na ograniczenie ryzyka ataków tego typu poprzez zapewnienie, że pliki które dana aplikacja, bądź dokument WWW przechwytują (m. in. z CDNu) zostały dostarczone bez udziału trzeciej strony, która "wzbogaciła" nasze dane o dodatkową treść oraz bez żadnych, jakichkolwiek innych zmian w przesyłanych plikach.

## Używanie "Subresource Integrity"

Korzystanie z funkcji "Subresource Integrity" jest możliwe przez określenie hasha zakodowanego kryptograficznie w base64 zasobu (pliku), który przeglądarka ma przechwycić, z wartością atrybutu `integrity` danego elementu {{HTMLElement("script")}} or {{HTMLElement("link")}}.

Wartość `integrity` zaczyna się od co najmniej jednego stringu, przy czym każdy string zawiera prefiks wskazujący na konkretny algorytm hashowy (obecnie dozwolonymi prefiksami są `sha256`, `sha384`, i `sha512`), następnie opatrzony myślnikiem i zakończony aktualnym hashem zakodowanym w base64.

> **Note:** **Notka**: Wartość **integrity** może zawierać liczne hashe oddzielone białymi znakami. Zasób zostanie załadowany, jeśli dopasuje się z jednym z tych hashów.

Przykładowy string `integrity` z hashem sha384 zakodowanym w base64:

    sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC

Więc `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` to część "hashowa", a prefiks `sha384` wskazuje, że jest to hash sha384.

> **Note:** **Notka**: Część "hashowa" wartości `integrity` jest, mówić ściśle, _**skrótem kryptograficznym**_ formowanym przez zastosowanie określonych funkcji hashowych do danego outputu (np. skryptu lub arkuszu stylów). Zwykle używa się skrótu "hash" do określania _skrótu kryptograficznego_, więc w taki sposób to określenie jest używane w niniejszym artykule.

### Narzędzia do generowania hashów SRI

Możesz generować hashe SRI z konsoli z **openssl** używając wywołania polecenia, jak:

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

lub z **shasum** używając wywołania polecenia, jak:

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

> **Note:** **Notka**:\* Krok z `xxd` pobiera dane wyjściowe w postaci heksadecymalnej z `shasum` i zamienia je na zapis binarny.
>
> - Krok z `awk` jest niezbędny, ponieważ `shasum` w danych wyjściowych przekazuje zahashowaną nazwę pliku do `xxd`. Trzeba liczyć się z katastrofalnymi konsekwencjami, jeśli nazwa pliku zawiera znaki występujące w zapisie heksadecymalnym - `xxd` odkoduje ten zapis i przekaże go do `base64`.

Warto wiedzieć, że dostępny na <https://www.srihash.org/> **SRI Hash Generator** to narzędzie online umożliwiające generowanie hashy SRI.

### Zasady bezpieczeństwa zawartości i Integralności podzasobów(Content Security Policy & Subresource Integrity)

Możesz skorzystać z Zasad bezpieczeństwa zawartości ([Content Security Policy](/pl/docs/Web/HTTP/CSP)), by skonfigurować swój serwer, żeby wymuszał by określone typy plików wymagały stosowania Subresource Integrity. Aby to zrobić użyj dyrektywy {{CSP("require-sri-for")}} w swoim nagłówku CSP, np.:

    Content-Security-Policy: require-sri-for script;

Dzięki temu zapisowi każda próba załadowania JavaScript powiedzie się jedynie, jeśli informacja o Subresource Integrity znajduje się na miejscu, a testy integralności zakończą się sukcesem.

Możesz również określić, że SRI powinno być stosowane podczas ładowania arkuszy stylów:

    Content-Security-Policy: require-sri-for style;

Możesz również określić zarówno `script`, jak i `style` aby wymagać SRI przy obu typach plików.

### Udostępnianie zasobów między źródłami i Integralności podzasobów (Cross-Origin Resource Sharing & Subresource Integrity)

Celem weryfikacji integralności podzasobów danych pochodzących z originu innego, niż dokument, w którym są osadzone, przeglądarki dodatkowo sprawdzają dane za pomocą CORS ([Cross-Origin Resource Sharing](/pl/docs/Web/HTTP/CORS)). Upewniają się, że origin dostarczający dane pozwala na udostępnianie wnioskującemu originowi. Wtedy dane muszą zostać dostarczone z nagłówkiem [`Access-Control-Allow-Origin`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin), co pozwala na udostępnienie danych wnioskującemu originowi, np.:

    Access-Control-Allow-Origin: *

## Przykłady

W poniższych przykładach przyjmimy, że `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` to oczekiwany hash SHA-384 (skrót) określonego skryptu `example-framework.js` i że istnieje kopia skryptu hostowana na `https://example.com/example-framework.js`.

### Subresource Integrity with the \<script> element

Możesz użyć niniejszego elementu {{HTMLElement("script")}}, by nakazać przeglądarce, aby przed wywołaniem skryptu `https://example.com/example-framework.js` najpierw porównała skrypt z oczekiwanym hashem i zweryfikowała, że są dopasowane.

```html
<script src="https://example.com/example-framework.js"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"></script>
```

> **Note:** **Notka**: By dowiedzieć się więcej nt. zastosowania atrybutu `crossorigin` sprawdź [atrybuty ustawień CORS](/pl/docs/Web/HTML/CORS_settings_attributes).

## Jak przeglądarki radzą sobie z "Subresource Integrity"

Przeglądarki radzą sobie z SRI poprzez podjęcie poniższych działań:

1.  Kiedy przeglądarka napotka element {{HTMLElement("script")}} lub {{HTMLElement("link")}} z atrybutem `integrity`, przed wywołaniem skryptu lub przed zastosowaniem jakiegokolwiek arkusza stylów określonego przez element {{HTMLElement("link")}}, przeglądarka musi najpierw porównać skrypt lub arkusz stylów do oczekiwanego hasha podanego w wartości `integrity`.

    > **Note:** **Notka**: Celem weryfikacji integralności podzasobów danych dostarczanych z originu innego, niż dokument, w którym zostały osadzone, przeglądarki dodatkowo sprawdzają dane poprzez stosowanie [CORS](/pl/docs/Web/HTTP/CORS), aby upewnić się, że origin dostarczający dane pozwala na udostępnianie ich z wnioskującym originem.

2.  Jeśli skrypt lub arkusz stylów nie pasuje do odpowiadającej mu wartości `integrity`, przeglądarka musi odmówić wywołania skryptu lub uwzględnienia arkusza stylów i zamiast tego musi zwrócić błąd sieciowy wskazujący, że nie powiodło się przechwycenie tego skryptu lub arkusza stylów.

## Specyfikacje

| Specyfikacja                                     | Status                                       | Komentarz |
| ------------------------------------------------ | -------------------------------------------- | --------- |
| {{SpecName('Subresource Integrity')}} | {{Spec2('Subresource Integrity')}} |           |
| {{SpecName('Fetch')}}                     | {{Spec2('Fetch')}}                     |           |

## Kompatybilność z przeglądarkami

### \<script integrity>

{{Compat("html.elements.script.integrity")}}

### CSP: require-sri-for

{{Compat("http.headers.csp.require-sri-for")}}

## Zobacz również

- Zasady bezpieczeństwa zawartości (Content Security Policy)
- {{httpheader("Content-Security-Policy")}}
- [CDN, który Cię nie zXXSuje: Używanie Subresource Integrity](https://frederik-braun.com/using-subresource-integrity.html)
- [Test na Subresource Integrity z W3C](https://w3c-test.org/subresource-integrity/subresource-integrity.html)

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
