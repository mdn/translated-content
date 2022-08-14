---
title: Twoje pierwsze rozszerzenie
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
tags:
  - Add-ons
  - Dodatki
  - Extensions
  - Przewodnik
  - WebExtensions
  - Wtyczki
translation_of: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
original_slug: Mozilla/Add-ons/WebExtensions/Twój_pierwszy_WebExtension
---
{{AddonSidebar}}

W tym artykule przejdziemy przez tworzenie rozszerzenia dla przeglądarki Firefox od początku do końca. Rozszerzenie to tylko dodaje czerwoną ramkę do stron załadowanych z "mozilla.org" lub dowolnej z jej poddomen.

Kod źródłowy dla tego przykładu znajduje się na GitHub'ie: <https://github.com/mdn/webextensions-examples/tree/master/borderify>.

Najpierw, będziesz potrzebować przeglądarki Firefox w wersji 45 lub nowszej.

## Pisanie rozszerzenia

Stwórz nowy folder i przejdź do niego:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Teraz stwórz nowy plik o nazwie "manifest.json" bezpośrednio w katalogu "borderify". Wprowadź do niego poniższy kod:

```json
{

  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Dodaje czerwoną ramkę we wszystkich stronach powiązanych z domeną mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]

}
```

- Pierwsze trzy klucze: [`manifest_version`](/en-US/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/en-US/Add-ons/WebExtensions/manifest.json/name), oraz [`version`](/en-US/Add-ons/WebExtensions/manifest.json/version), są obowiązkowe i zawierają podstawowe metadane dla rozszerzenia.
- [`description`](/en-US/Add-ons/WebExtensions/manifest.json/description) jest opcjonalny, ale zalecany: jest on wyświetlany w menadżerze rozszerzeń.
- [`icons`](/en-US/Add-ons/WebExtensions/manifest.json/icons) jest opcjonalna, ale zalecana: pozwala ona nadać ikonę rozszerzeniu, która będzie wyświetlana w menadżerze rozszerzeń.

Najbardziej interesującym kluczem jest tutaj [`content_scripts`](/en-US/Add-ons/WebExtensions/manifest.json/content_scripts), który mówi przeglądarce, który skrypt wczytać do stron internetowych, których adres spełnia określony wzór. W tym przypadku prosimy przeglądarkę o wczytanie skryptu o nazwie "borderify.js" na wszystkich stronach HTTP i HTTPS obsługiwanych przez domenę "mozilla.org" bądź jakąkolwiek jej poddomenę.

- [Dowiedz się więcek na temat zawartości skryptów.](/en-US/Add-ons/WebExtensions/Content_scripts)
- [Dowiedz się więcej na temat wzorców](/en-US/Add-ons/WebExtensions/Match_patterns).

> **Warning:** [W niektórych sytuacjach musisz nadać ID swojemu rozszerzeniu](/en-US/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID). Jeśli potrzebujesz nadać rozszerzeniu ID, dołącz klucz [`applications`](/en-US/Add-ons/WebExtensions/manifest.json/applications) do `manifest.json` i przypisz mu pole `id`:```json
> "applications": {
> "gecko": {
> "id": "borderify@przyklad.pl"
> }
> }
>
> ```
>
> ```

### icons/border-48.png

Rozszerzenie powinno mieć ikonę. Będzie ona wyświetlona na liście dodatków w menadżerze rozszerzeń. Nasz manifest.json zapowiada, że będziemy mieć ikonę w "icons/border-48.png".

Stwórz folder "icons" bezpośrednio w katalogu "borderify". Zapisz tam ikonę o nazwie "border-48.png". Możesz użyć [tej naszej przykładowej](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png), która pochodzi ze zbioru ikon Google Material Design i jest używana zgodnie z warunkami licencji [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/).

Jeśli zdecydujesz się dodać własną ikonę, to powinna być w formacie 48x48 pikseli. Możesz także dodać ikonę o rozmiarze 96x96 pikseli dla ekranów o wysokiej rozdzielczości i jeśli dodasz ją, to powinna ona zostać przypisana jako wartość pola 96 obiektu `icons` 
w pliku manifest.json:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Ewentualnie możesz dodać plik SVG tutaj, więc zostanie on poprawnie przeskalowany. (Jeśli jednak używasz SVG, a twoja ikona zawiera napisy, możesz chcieć użyć narzędzia "przekonwertuj do ścieżki" w edytorze SVG, by spłaszczyć tekst, więc będzie skalowo dopasowany do położenia/rozmiaru).

- [Dowiedz się więcej o określaniu ikon.](/en-US/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Ostatecznie stwórz plik o nazwie "borderify.js" bezpośrednio w katalogu "borderify". Wpisz do niego poniższy kod:

```js
document.body.style.border = "5px solid red";
```

Ten skrypt będzie załadowany na stronach spełniających wzór określony w kluczu `content_scripts` w pliku manifest.json. Skrypt ma bezpośredni dostęp do dokumentu, podobnie jak skrypty wczytane przez stronę.

- [Dowiedz się więcej o zawartości skryptów.](/en-US/Add-ons/WebExtensions/Content_scripts)

## Wypróbujmy

Najpierw dokładnie sprawdź, czy odpowiedne pliki są w właściwych miejsacach:

    borderify/
        icons/
            border-48.png
        borderify.js
        manifest.json

### Instalacja

Otwórz "about:debugging" w przeglądarce Firefox, kliknij "Załaduj tymczasową wtyczkę" i wybierz jakikolwiek plik z katalogu z Twoim rozszerzeniem:

{{EmbedYouTube("cer9EUKegG4")}}

Rozszerzenie zostanie teraz zainstalowane i pozostanie tam do momentu ponownego uruchomienia Firefoksa.

Alternatywnie, możesz także uruchomić swoje rozszerzenie za pomocą wiersza poleceń używając narzędzie [web-ext](/pl/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext).

### Testowanie

Teraz spróbuj odwiedzić jakąś stronę należącą do "mozilla.org" i powinienieś zobaczyć czerwoną ramkę wokół strony:

{{EmbedYouTube("rxBQl2Z9IBQ")}}

> **Note:** Jednakże nie próbuj tego na addons.mozilla.org! Obecnie skrypty są blokowane na tej domenie.

Spróbuj trochę poeksperymentować. Edytuj zawartość skryptu by zmienić kolor ramki lub zrób coś innego z zawartością strony. Zapisz skrypt i przeładuj pliki rozszerzenia kilkając przycisk "Przeładuj" w about:debugging. Możesz zobaczyć zmiany odrazu:

{{EmbedYouTube("NuajE60jfGY")}}

- [Dowiedz się więcej o wczytywaniu rozszerzeń](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)

## Pakowanie i publikowanie

Aby inni użytkownicy mogli korzystać z Twojego rozszerzenia, musisz je zapakować i wysłać do Mozilli w celu podpisania go. 
Aby dowiedzieć się więcej, zajrzyj do artykułu ["Publikowanie własnego rozszerzenia"](/pl/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension).

## Co dalej?

Teraz gdy ty masz pomysł na temat procesu tworzenia rozszerzeń (WebExtension) dla Firefoxa, to spróbuj:

- [przeczytać więcej na temat anatomii rozszerzeń](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [napisać bardziej rozbudowane rozszerzenie](/en-US/Add-ons/WebExtensions/Your_second_WebExtension)
- [przeczytać o JavaScript API dostępnym dla rozszerzeń.](/en-US/Add-ons/WebExtensions/API)
