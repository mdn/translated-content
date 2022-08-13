---
title: Aktualizacja aplikacji internetowych dla Firefoksa 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
tags:
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3/Updating_web_applications
original_slug: Aktualizacja_aplikacji_internetowych_dla_Firefoksa_3
---
{{FirefoxSidebar}}

W przygotowywanym wydaniu programu Firefox w wersji 3 dokonano wielu zmian, które mogą wpłynąć na działanie witryn lub aplikacji internetowych. Wprowadzono także nowe funkcje, które mogą być przydatne dla autorów tych witryn lub aplikacji. Ten artykuł zawiera informacje na temat przystosowania serwisów internetowych do Firefoksa 3 w celu jak najpełniejszego wykorzystania możliwości nowej przeglądarki.

### Zmiany w obsłudze DOM

Przed włączeniem węzłów pochodzących z zewnętrznych dokumentów do bieżącego dokumentu konieczne jest ich sklonowanie za
pomocą metody [`document.importNode()`](/pl/docs/Web/API/Document/importNode "Tworzy kopię węzła z zewnętrznego dokumentu, która może być umieszczona wewnątrz bieżącego dokumentu.") (lub zaadaptowanie przy użyciu metody [`document.adoptNode()`](/pl/docs/Web/API/Document/adoptNode "The documentation about this has not yet been written; please consider contributing!")). Więcej informacji na temat własności
[`Node.ownerDocument`](/pl/docs/Web/API/Node/ownerDocument "The documentation about this has not yet been written; please consider contributing!") znajduje się na liście najczęściej zadawanych pytań na [temat
DOM w witrynie W3C](http://www.w3.org/DOM/faq.html#ownerdoc).

Aktualnie Firefox nie wymusza tej reguły (robił to przez pewien czas podczas cykli rozwojowych Firefoksa 3, ale zbyt
dużo stron przestawało działać po wymuszeniu tej reguły). Zachęcamy autorów stron do poprawienia ich kodu dla lepszej
kompatybilności w przyszłości.

### Zmiany w obsłudze HTML

#### Zmiany w dziedziczeniu zestawu znaków

W programie Firefox 3 naprawiono lukę w zabezpieczeniach, w wyniku której ramki (elementy `frame` i `iframe`) dziedziczyły ustawienia kodowania znaków elementu nadrzędnego, co w określonych przypadkach powodowało problemy. Obecnie ramki mogą dziedziczyć ustawienia kodowania znaków elementu nadrzędnego jedynie wówczas, gdy zarówno ramka, jak i element nadrzędny znajdują się na tym samym serwerze. W przypadku korzystania z ramek, których zawartość pobierana jest z zewnętrznego serwera, należy określić właściwe kodowanie znaków dla ramki w kodzie HTML elementu `frame`.

#### Zmiana w elemencie SCRIPT

Element `<script>` w dokumentach `text/html` wymaga teraz domknięcia `</script>` w dokumentach HTML, nawet jeśli nie wpisujesz żadnej treści do środka. Podczas gdy w poprzednich wersjach Firefoksa mogłeś zrobić:

    <script ... />

Teraz składnia musi być zgodna ze specyfikacją HTML (jeśli jest to dokument HTML), zatem trzeba domknąć ten znacznik tak:

    <script ...></script>

Poprawia to zarówno kompatbilność jak i spójność.

### Zmiany w interpretatorze CSS

#### Change to font-size based on em, ex units

font-size values in em and ex units used to be affected by the user's minimum font size setting: if a font was displayed larger due to the minimum font size, the em and ex units for font-size settings based on this one would be enlarged accordingly. This was inconsistent with the way percentage-based font sizes behaved.

font-size values in em and ex units are now based on an "intended font size" that is not affected by the user's minimum font size. In other words, font sizes are always calculated according to the designer's intention and are adjusted for minimum font size afterwards.

See <https://bugzilla.mozilla.org/attachment.cgi?id=322943> for a demonstration (must be watched with a minimum font size >= 6 to see the difference: the two box cascades behave differently in Firefox 2, because the em-based font-size "bounces" off the minimum font size).

### Zmiany bezpieczeństwa

#### Dostęp poprzez chrome

W poprzednich wersjach Firefox, każda strona internetowa mogła załadować skrypty lub obrazy poprzez chrome, używając protokołu [`chrome://`](). Dzięki temu, strony m.in. mogły wykrywać obecność dodatków - co niestety bywało używane do omijania wtyczek, które zwiększały bezpieczeństwo użytkownika.

Firefox 3 umożliwia użycie jedynie następujących przestrzeni: [`chrome://browser/`]() oraz [`chrome://toolkit/`](). Pliki w tych katalogach są dostępne dla stron internetowych, natomiast cała reszta zawartości chrome jest zabezpieczona przed ingerencją.

Mimo to, istnieje możliwość odbezpieczania innych miejsc chrome poprzez rozszerzenia. Wtyczki mogą ustawić specjalną flagę w pliku `chrome.manifest`:

    content mypackage location/ contentaccessible=yes

Ta opcja nie powinna być zbyt często potrzebna, ale jest dostępna w rzadkich, wymagających jej wypadkach. Zauważ, że Firefox może zaalarmować użytkownika, jeśli twoje rozszerzenie używa flagi `contentaccessible`, z powodu ewentualnego zagrożenia bezpieczeństwa.

> **Uwaga:** Ponieważ Firefox 2 ignoruje linie z flagą `contentaccessible`, jeśli chcesz by twoja wtyczka była kompatybilna z Firefox 2 i Firefox 3, muisz napisać: content mypackage location/
> content mypackage location/ contentaccessible=yes

#### Pola wrzucania plików

In prior versions of Firefox, there were cases in which when the user submitted a file for uploading, the entire path of the file was available to the web application. This privacy concern has been resolved in Firefox 3; now only the filename itself is available to the web application.

### Zmiany w obsłudze JavaScript

Program Firefox 3 obsługuje [język JavaScript w wersji 1.8](/pl/Nowo%C5%9Bci_w_JavaScript_1.8 "pl/Nowości_w_JavaScript_1.8"). Istotną zmianą, która może wymagać aktualizacji witryn lub aplikacji internetowych, jest wyłączenie obsługi przestarzałych i niestandardowych obiektów `Script`. Ze względu na niezgodność tych obiektów ze standardami nie były one jednak często wykorzystywane, więc zmiana ta w większości przypadków nie powinna sprawiać problemów.

### Zobacz także

- [Firefox 3 dla programistów](/pl/Firefox_3_dla_programist%C3%B3w "pl/Firefox_3_dla_programistów")
- [Nowości w JavaScript 1.8](/pl/Nowo%C5%9Bci_w_JavaScript_1.8 "pl/Nowości_w_JavaScript_1.8")
- [Aktualizacja rozszerzeń dla Firefoksa 3](/pl/Aktualizacja_rozszerze%C5%84_dla_Firefoksa_3 "pl/Aktualizacja_rozszerzeń_dla_Firefoksa_3")



{{ languages( { "en": "en/Updating_web_applications_for_Firefox\_3", "es": "es/Actualizar_aplicaciones_web_para_Firefox\_3", "fr": "fr/Mise\_\u00e0\_jour_des_applications_Web_pour_Firefox\_3", "ja": "ja/Updating_web_applications_for_Firefox\_3" } ) }}
