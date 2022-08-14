---
title: Tworzenie aplikacji z użyciem framework'u Express (Node.js/JavaScript)
slug: Learn/Server-side/Express_Nodejs
tags:
  - Express
  - Express.js
  - JavaScript
  - Node
  - Początkujący
  - Wprowadzenie
  - node.js
translation_of: Learn/Server-side/Express_Nodejs
---
{{LearnSidebar}}

Express to popularny framework webowy stworzony w języku JavaScript działający w środowisku uruchomieniowym Node.js. W tym module znajdziesz kluczowe zalety framework'u, opis jak możesz przygotować środowisko deweloperskie, typowe metody tworzenia aplikacji webowych oraz proces ich instalacji i uruchamiania.

## Wymagania wstępne

Zanim zaczniesz ten moduł powinieneś wiedzieć czym jest programowanie po stronie serwera i czym są frameworki webowe. Najlepiej, gdybyś przeczytał nasze wprowadzadzenie [Server-side website programming first steps](/pl/docs/Learn/Server-side/First_steps). Znajomość JavaScript i podstawowych zasad programowania na pewno Ci pomogą zrozumieć ten materiał, ale nie są konieczne do zrozumienia ogólnej koncepcji tworzenia aplikacji webowych.

> **Note:** **Uwaga:**  Wiele przydatnych materiałów do nauki JavaScript'u znajdziesz w rozdziale *the context of client-side development*: [JavaScript](/pl/docs/Web/JavaScript), [JavaScript Guide](/pl/docs/Web/JavaScript/Guide), [JavaScript Basics](/pl/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [JavaScript](/pl/docs/Learn/JavaScript) (learning). Środowisko Node.js posługuje się językiem JavaScript, tym samym, który działa w Twojej przeglądarce, ale posiada dodatkowe API zapewniające pracę w środowisku poza przeglądarką  (np. daje możliwość uruchamiania serwerów HTTP, ma dostęp do systemu plikowego, ale brak mu API do pracy z przeglądarką i strukturą DOM).W tym przewodniku znajdziesz informacje o tym jak pracować z Node.js i Express, ale wiele wartościowych materiałów  jest w Internecie i książkach - część z nich jest podlinkowana w wątkach [How do I get started with Node.js](http://stackoverflow.com/a/5511507/894359) (StackOverflow) i [What are the best resources for learning Node.js?](https://www.quora.com/What-are-the-best-resources-for-learning-Node-js?) (Quora).

## Przewodnik

- [Wprowadzenie do Express/Node](/pl/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - : Znajdziesz tutaj odpowiedzi na pytania "Czym jest Node?" i "Co to jest Express?", oraz zrozumiesz co czyni framework Express wyjątkowym. W dalszej części zostały przedstawione najistotniejsze możliwości wraz z głównymi elementami potrzebnymi do budowy aplikacji webowych w Express (choć jeszcze nie będziesz miał przygotowanego środowiska do tworzenia i testowania takich aplikacji).
- [Przygotowanie środowiska programisty do pracy z Node (Express)](/pl/docs/Learn/Server-side/Express_Nodejs/development_environment)
  - : Gdy już wiesz jakie możliwości oferuje Express, pokażemy Ci jak przygotować środowisko deweloperskie Node/Express dla systemów Windows, Linux(Ubuntu) i Mac OS X. Bez względu na system, którego używasz, w tej części powinieneś poznać wszystko to co będzie Ci potrzebne do tworzenia aplikacji w Express.
- [Szkolenie z Express - część 1: aplikacja webowa "Biblioteka"](/pl/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : W pierwszym artykule naszego cyklu praktycznych tutoriali wyjaśnimy Ci czego się nauczysz podczas tworzenia przykładowej aplikacji internetowej "Biblioteka". W kolejnych artykułach będziemy nad nią pracować i ją rozwijać.
- [Szkolenie z Express - część 2: Tworzymy szkielet witryny](/pl/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
  - : Artykuł zawiera opis jak stworzyć "szkielet" projektu naszej witryny, który będziesz mógł wypełnić takimi elemenatami jak: ścieżki do podstron witryny, szablony/widoki i bazy danych.
- [Szkolenie z Express - część 3: Korzystamy z bazy danych (Mongoose)](/pl/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : W artykule zapoznasz się z krótkim omówieniem baz danych wykorzystywanych w technologii Node/Express. W dalszej części opisujemy jak wykorzystać [Mongoose](http://mongoosejs.com/) do zapisu danych naszej "Biblioteki" w tym jak zadeklarować schematy i modele bazy, jakie są główne typy danych i metody ich walidacji. W końcowej cześci zobaczysz jakimi metodami możesz operować na danych za pośrednictwem modeli.
- [Szkolenie z Express - część 4: Rutery i kontrolery](/pl/docs/Learn/Server-side/Express_Nodejs/routes)
  - : W tej części cyklu zdefiniujemy ścieżki URL (z kodem obsługi takiego adresu) do wszystkich podstron naszej aplikacji, a z każdym takim URL skojarzymy funkcję (wstępnie będą to atrapy funkcji), która zostanie wywołana, gdy nadejdzie do niego żądanie. Po zakończeniu będziemy dysponować modułową strukturą kodu routingu, co zapewni nam łatwą rozbudowę aplikacji, gdy w następnych artykułach będziemy kod uzupełniać o rzeczywiste funkcje. Po tej części powinieneś dobrze rozumieć metodę tworzenia modularnego routingu w Express.
- [Szkolenie z Express - część 5: Prezentacja danych biblioteki](/pl/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : Jesteśmy teraz gotowi dodać do naszej aplikacji strony, które będą wyświetlać książki i pozostałe dane naszej "Biblioteki". Wśród nich znajdzie się strona domowa z informacją ile rekordów danego modelu znajduje się w bazie oraz strony ze szczegółami każdego modelu. Zdobędziesz cenne doświadczenie w pobieraniu danych z bazy i tworzeniu szablonów strony.
- [Szkolenie z Express - część 6: Praca z formularzami](/pl/docs/Learn/Server-side/Express_Nodejs/forms)
  - : Artykuł przeprowadzi Cię przez proces tworzenia formularzy HTML, które będą współpracować z Express. Skorzystamy z preprocesoram PUG, aby stworzyć formularze do tworzenia, modyfikacji i usuwania dokumentów w bazie danych naszej aplikacji.
- [Szkolenie z Express - część 7: Wdrożenie do produkcji](/pl/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : Masz już gotową super aplikację webową "Biblioteka" i zamierzasz ją zainstalować na publicznym serwerze WWW i w ten sposób stanie się dostępna dla pracowników biblioteki i użytkowników przez Internet. W artykule przedstawiono jak znaleźć odpowiedni hosting dla aplikacji i co powinienś zrobić aby była gotowa do działania w środowisku produkcyjnym.

## Zobacz także

- [Instalacji aplikacji "Biblioteka" w PWS/Cloud Foundry](/pl/docs/Learn/Server-side/Express_Nodejs/Installing_on_PWS_Cloud_Foundry)
  - : Artykuł przedstawia praktyczną demonstrację instalacji aplikacji "Biblioteka" w serwisie [Pivotal Web Services PaaS cloud](http://run.pivotal.io), który jest w pełni funkcjonalnym, o otwarty kodzie, odpowiednikiem Heroku. PWS/Cloud Foundry jest warte sprawdzenia jeśli szukasz alternatywy dla Herooku lub po prostu chcesz spróbować czegoś innego.

## Zapotrzebowanie na kolejne samouczki

To koniec atrykułów szkoleniowych (jak na razie). Jeśli chcesz poszerzać bazę materiałow, to poniżej znaduje się spis tematów, które warto opracować:

- Korzystanie z sesji.
- Autentykacja użytkowników.
- Autoryzacja i prawa dostępu użytkowników.
- Testowanie applikacji webowych tworzonych w Express.
- Bezpieczeństwo sieciowe w aplikacjach tworzonych w Express.
