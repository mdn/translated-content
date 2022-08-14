---
title: Tryb Zgodności (Quirks Mode) i Tryb Standardów
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
tags:
  - Gecko
  - Guide
  - HTML
  - NeedsUpdate
  - Web Development
  - Web Standards
  - XHTML
translation_of: Web/HTML/Quirks_Mode_and_Standards_Mode
original_slug: Web/HTML(PL)/Tryb_Zgodnosci_oraz_Tryb_Standardow
---
W dawnych czasach strony internetowe zwykle pisane były w dwóch wersjach: Jedna dla Netscape Navigator i jedna dla Microsoft Internet Explorer. Kiedy standardy sieciowe były tworzone w W3C, przeglądarki nie mogły po prostu zacząć z nich korzystać, ponieważ w ten sposób zniszczyłyby większość istniejących stron internetowych. W związku z tym przeglądarki wprowadziły dwa tryby traktowania nowych witryn zgodnych ze standardami w inny sposób niż witryn starej generacji.

Obecnie w przeglądarkach internetowych stosowane są trzy tryby pracy silników układu graficznego: tryb zgodności (tryb quirks), tryb prawie standardowy oraz tryb pełnego standardu. W **trybie zgodności** układ emuluje niestandardowe zachowanie w Navigator 4 i Internet Explorer 5. Jest to niezbędne do obsługi stron internetowych, które powstały przed powszechnym przyjęciem standardów internetowych. W **trybie pełnych standardów**, zachowanie jest (miejmy nadzieję) zachowaniem opisanym przez specyfikacje HTML i CSS. W **trybie prawie standardowym** zaimplementowana jest bardzo mała liczba kompatybilności.

## Jak przeglądarki decydują, z którego trybu korzystać?

W przypadku dokumentów [HTML](</pl/docs/Web/HTML(PL)> "/en-US/docs/HTML"), przeglądarki używają DOCTYPE na początku dokumentu, aby zdecydować, czy obsługiwać go w trybie zgodności, czy też w trybie standardów. Aby zagwarantować, że strona korzysta z trybu pełnego standardu, upewnij się że strona ma DOCTYPE, tak jak w tym przykładzie:

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8">
    <title>Witaj, Świecie!</title>
  </head>
  <body>
  </body>
</html>
```

DOCTYPE pokazany w przykładzie, `<!DOCTYPE html>`, jest najprostrzy z możliwych i zalecany przez HTML5. Wcześniejsze wersje standardu HTML zalecały inne warianty, ale wszystkie istniejące obecnie przeglądarki będą korzystały z trybu pełnego standardu dla DOCTYPE, nawet z przestarzałego Internet Explorera 6. Nie ma uzasadnionych powodów, aby używać bardziej skomplikowanego DOCTYPE. Jeśli używasz innego DOCTYPE, możesz być narażony na ryzyko wybrania takiego, który uruchamia prawie standardowy tryb lub tryb zgodności.

Upewnij się, że umieścisz DOCTYPE bezpośrednio na początku dokumentu HTML. Wszystko przed DOCTYPE, takie jak komentarz czy deklaracja XML, wyzwoli tryb zgodnści w Internet Explorerze 9 i starszych.

W HTML5, jedynym celem DOCTYPE jest aktywowanie trybu pełnego standardu. Starsze wersje standardu HTML nadawały dodatkowe znaczenie DOCTYPE, ale żadna przeglądarka nie używała DOCTYPE do innych celów niż przełączanie pomiędzy trybem zgodności a trybem standardów.

Zobacz również szczegółowy opis tego, [kiedy różne przeglądarki wybierają różne tryby pracy](http://hsivonen.iki.fi/doctype/).

### XHTML

Jeśli podajesz swoją stronę jako [XHTML](/pl/docs/XHTML "XHTML") używając `application/xhtml+xml` MIME type w `Content-Type` HTTP header, nie potrzebujesz DOCTYPE, aby włączyć tryb standardów. Należy jednak pamiętać, że podawanie stron jako `application/xhtml+xml` spowoduje, że Internet Explorer 8 [wyświetli okno dialogowe pobierania](/pl/docs/XHTML#Support "XHTML") nieznanego formatu zamiast wyświetlania strony, ponieważ pierwszą wersją Internet Explorera z obsługą XHTML jest Internet Explorer 9.

Jeśli tworzysz treści w formacie XHTML używając `text/html` MIME type, przeglądarki przeczytają je jako HTML i będziesz potrzebował DOCTYPE do korzystania z trybu standardów.

## Jak sprawdzić, który tryb jest używany?

W Firefoksie wybierz opcję *View Page Info* z menu kontekstowego i poszukaj trybu *Render Mode*.

W Internet Explorerze naciśnij *F12 i poszukaj* *Document Mode*.

## Jakie są różnice pomiędzy trybami?

Zobacz [listę zgodności](/pl/docs/Mozilla/Mozilla_quirks_mode_behavior "Mozilla_Quirks_Mode_Behavior") oraz [tryb prawie standardowy](/pl/docs/Mozilla/Gecko_Almost_Standards_Mode "Gecko%27s_%22Almost_Standards%22_Mode"), aby poznać różnice pomiędzy trybami.
