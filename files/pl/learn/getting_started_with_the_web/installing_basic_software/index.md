---
title: Instalacja podstawowego oprogramowania
slug: Learn/Getting_started_with_the_web/Installing_basic_software
tags:
  - Beginner
  - Browser
  - Learn
  - Setup
  - Tools
  - WebMechanics
  - l10n:priority
  - text editor
translation_of: Learn/Getting_started_with_the_web/Installing_basic_software
---
{{LearnSidebar}}{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}

W sekcji _Instalacja podstawowego oprogramowania_ pokazujemy, jakie narzędzia są potrzebne do podstawowego tworzenia stron internetowych i jak je prawidłowo zainstalować.

## Jakich narzędzi używają profesjonaliści?

- **Komputer**. Może wydaje się to oczywiste dla niektórych ludzi, ale część z Was czyta ten artykuł w telefonie lub na komputerze w bibliotece. Dla poważnego tworzenia stron internetowych, lepiej jest zainwestować w komputer stacjonarny lub laptop z systemem Windows, macOS lub Linux.
- **Edytor tekstowy**, do pisania kodu. Może to być edytor tekstowy (np. [Visual Studio Code](https://code.visualstudio.com/), [Notepad++](https://notepad-plus-plus.org/), [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), [GNU Emacs](https://www.gnu.org/software/emacs/), lub [VIM](https://www.vim.org/)), lub edytor hybrydowy (np. [Dreamweaver](https://www.adobe.com/pl/products/dreamweaver.html) lub [WebStorm](https://www.jetbrains.com/webstorm/)). Edytory dokumentów biurowych nie nadają się do tego celu, ponieważ opierają się na ukrytych elementach, które zakłócają działanie silników renderujących używanych przez przeglądarki internetowe.
- **Przeglądarki internetowe**, do testowania kodu. Obecnie najczęściej używanymi przeglądarkami internetowymi są [Firefox](https://www.mozilla.org/en-US/firefox/new/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/pl), [Safari](https://www.apple.com/safari/), [Internet Explorer](https://support.microsoft.com/pl-pl/help/17621/internet-explorer-downloads) i [Microsoft Edge](https://www.microsoft.com/pl-pl/edge). Należy także sprawdzić, jak twoja strona działa na urządzeniach mobilnych i na starszych przeglądarkach, których wciąż mogą używać twoi odbiorcy (takich jak IE 8–10.) [Lynx](https://lynx.browser.org/), terminalowa przeglądarka tekstowa, jest świetna do sprawdzenia, jak Twoja strona jest doświadczana przez użytkowników z wadami wzroku.
- **Edytor graficzny**, taki jak [GIMP](https://www.gimp.org/), [Figma](https://www.figma.com/), [Paint.NET](http://www.getpaint.net/), [Photoshop](https://www.adobe.com/pl/products/photoshop.html), lub [XD](https://www.adobe.com/pl/products/xd.html), do tworzenia obrazów lub grafiki dla swoich stron internetowych.
- **System kontroli wersji**, do zarządzania plikami na serwerach, współpracy przy projekcie z zespołem, współdzielenia kodu i zasobów oraz unikania konfliktów edycyjnych. Obecnie [Git](http://git-scm.com/) jest najpopularniejszym systemem kontroli wersji, wraz z serwisem hostingowym [GitHub](https://github.com/) lub [GitLab](https://gitlab.com).
- **Program FTP**, używany na starszych kontach hostingowych do zarządzania plikami na serwerach ([Git](http://git-scm.com/) coraz częściej zastępuje w tym celu FTP). Dostępnych jest wiele programów (S)FTP, w tym [Cyberduck](https://cyberduck.io/), [Fetch](http://fetchsoftworks.com/) i [FileZilla](https://filezilla-project.org/).
- **System automatyzacji**, taki jak [Webpack](https://webpack.js.org/), [Grunt](http://gruntjs.com/) lub [Gulp](http://gulpjs.com/), który automatycznie wykonuje powtarzające się zadania, takie jak minifikacja kodu i przeprowadzanie testów.
- Biblioteki, frameworki, itp., aby przyspieszyć pisanie powszechnych funkcji. Biblioteka jest zazwyczaj istniejącym plikiem JavaScript lub CSS, który zapewnia gotowe funkcje do wykorzystania w kodzie. Framework ma tendencję do kontynuowania tego pomysłu, oferując kompletny system z niestandardowymi składniami do pisania aplikacji internetowej na najwyższym poziomie.
- Oraz wiele więcej narzędzi!

## Jakich właściwie narzędzi potrzebuję na teraz?

Wygląda to na przerażającą listę, ale na szczęście można zacząć tworzyć strony internetowe, nie wiedząc nic o większości z nich. W tym artykule przedstawimy Ci tylko minimum - edytor tekstu i kilka nowoczesnych przeglądarek internetowych.

### Instalacja edytora tekstowego

Prawdopodobnie masz już podstawowy edytor tekstu na swoim komputerze. Domyślnie Windows zawiera [Notatnik](<https://pl.wikipedia.org/wiki/Notatnik_(program)>) a macOS dostarczany jest z [TextEdit](https://pl.wikipedia.org/wiki/TextEdit). Dystrybucje Linuksa różnią się od siebie; na Ubuntu jest to [gedit](https://pl.wikipedia.org/wiki/Gedit).

W przypadku tworzenia stron internetowych, przydałby ci się jednak lepszy edytor tekstowy. Polecamy zacząć od [Visual Studio Code](https://code.visualstudio.com/), który jest darmowym edytorem, oferującym podglądy na żywo i podpowiedzi do kodu.

### Instalacja nowoczesnych przeglądarek internetowych

Na razie zainstalujemy kilka przeglądarek internetowych, aby przetestować nasz kod. Wybierz swój system operacyjny poniżej i kliknij odpowiednie linki aby pobrać instalatory swoich ulubionych przeglądarek:

- Linux: [Firefox](https://www.mozilla.org/en-US/firefox/new/), [Chrome](https://www.google.com/chrome/browser/), [Opera](https://www.opera.com/), [Brave](https://brave.com).
- Windows: [Firefox](https://www.mozilla.org/en-US/firefox/new/), [Chrome](https://www.google.com/chrome/browser/), [Opera](https://www.opera.com/), [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/download-ie), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Brave](https://brave.com) (System Windows 10 jest domyślnie wyposażony w przeglądarkę Edge; jeśli masz Windows 7 lub nowszy, możesz zainstalować Internet Explorer 11; w przeciwnym razie należy zainstalować alternatywną przeglądarkę).
- macOS: [Firefox](https://www.mozilla.org/en-US/firefox/new/), [Chrome](https://www.google.com/chrome/browser/), [Opera](https://www.opera.com/), [Safari](https://www.apple.com/safari/), [Brave](https://brave.com) (macOS i iOS są domyślnie wyposażone w Safari).

Zanim przejdziesz dalej, należy zainstalować co najmniej dwie z tych przeglądarek i mieć je gotowe do testów.

> **Uwaga:** Internet Explorer nie jest kompatybilny z niektórymi nowoczesnymi funkcjami sieciowymi i może nie być w stanie uruchomić twojego projektu. Zazwyczaj nie musisz się martwić o to, aby twoje projekty były z nim kompatybilne, ponieważ bardzo niewiele osób nadal z niego korzysta - na pewno nie martw się o niego zbytnio podczas nauki. Czasami możesz natknąć się na projekt, który wymaga wsparcia.

### Instalacja lokalnego serwera sieciowego

Niektóre przykłady będą musiały być uruchamiane przez serwer sieciowy, aby działały poprawnie. Możesz dowiedzieć się jak to zrobić w [Jak skonfigurować lokalny serwer testowy?](/pl/docs/Learn/Common_questions/set_up_a_local_testing_server)

{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}

## W tym module

- [Instalacja podstawowego oprogramowania](/pl/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
- [Jak będzie wyglądała twoja strona internetowa?](/pl/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
- [Radzenie sobie z plikami](/pl/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [Podstawy HTML](/pl/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [Podstawy CSS](/pl/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [Podstawy JavaScript](/pl/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Publikowanie swojej strony internetowej](/pl/docs/Learn/Getting_started_with_the_web/Publishing_your_website)
- [Jak działa sieć](/pl/docs/Learn/Getting_started_with_the_web/Jak_dziala_Siec)
