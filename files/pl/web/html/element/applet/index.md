---
title: applet
slug: Web/HTML/Element/applet
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/applet
---
### Podsumowanie

Element `<applet>` (`Applet`) wyróżnia włączenie apletu Java. Definicja HTML 4.01 Strict nie zawiera tego elementu, został on wycofany na rzecz `<object>`.

### Atrybuty

- align
  - : Ten atrybut jest używany to umieszczenia apletu na stronie względem treści, która może opływać go wokół. Specyfikacja HTML 4.01 definiuje wartości `bottom`, `left`, `middle`, `right` i `top`, natomiast Microsoft i Netscape mogą wspierać również `absbottom`, `absmiddle`, `baseline`, `center` i `texttop`.

- alt
  - : Ten atrybut powoduje wyświetlenie opisowego alternatywnego tekstu w przeglądarkach, które nie wspierają Javy. Projektanci stron powinni również pamiętać, że zawartość zamknięta w elemencie `<applet>` również może być wyświetlona jako alternatywny tekst.

- archive
  - : Ten atrybut odsyła do zarchiwizowanej lub skompresowanej wersji apletu i powiązanych z nim plików klas, co może pomóc zredukować czas ładowania.

- code
  - : Ten atrybut określa URL pliku apletu z klasami do załadowania i wykonania. Nazwy plików apletu są identyfikowane przez rozszerzenie pliku _.class_. URL określony przez `code` może być relatywny do atrybutu `codebase`.

- codebase
  - : Ten atrybut daje bezwzględny lub względny URL katalogu, gdzie są przechowywane pliki _.class_ apletu przywoływane przez atrybut `code` .

- datafld
  - : Ten atrybut, wspierany przez Internet Explorer 4 i wyższy, określa nazwę kolumny z obiektu źródła danych, który dostarcza powiązanych danych. Ten atrybut może być użyty do określenia różnych elementów `<param>` przekazywanych do apletu Javy.

- datasrc
  - : Podobnie jak `datafld` ten atrybut jest używany do wiązania danych w Internet Explorer 4. Określa `id` obiektu źródła danych, który dostarcza danych, które są powiązane z elementami `<param>`, związanymi z apletem.

- height
  - : Ten atrybut określa wysokość w pikselach, której potrzebuje aplet.

- hspace
  - : Ten atrybut określa w pikselach dodatkową poziomą przestrzeń do zarezerwowania z dwóch stron apletu.

- mayscript
  - : W implementacji Netscape'a ten atrybut pozwala na dostęp do apletu przez programy w języku skryptowym, osadzone w dokumencie.

- name
  - : Ten atrybut przypisuje nazwę do apletu, zatem może być identyfikowany przez inne zasoby, szczególnie skrypty.

- object
  - : Ten atrybut określa URL serializowanej reprezentacji apletu.

- src
  - : Jako zdefiniowany dla Internet Explorer 4 i wyższego, ten atrybut określa URL dla pliku powiązanego z apletem. Znaczenie i użycie jest niejasne i nie jest częścią standardu HTML.

- vspace
  - : Ten atrybut określa w pikselach dodatkową pionową przestrzeń do zarezerwowania nad i pod apletem.

- width
  - : Ten atrybut określa w pikselach szerokość, której potrzebuje aplet.

### Przykład

    <applet code="game.class" align="left" archive="game.zip" height="250" width="350">

    <param name="difficulty" value="easy">

    <b>Przepraszamy, potrzebujesz Javy, by grać w tę grę</b>

    </applet>

### Notatki

Specyfikacja W3C nie zachęca do używania `<applet>` i preferuje używanie znacznika `<object>`. W definicji HTML 4.01 Strict ten element jest wycofywany.

{{ HTML:Element_Navigation() }}

{{ languages( { "en": "en/HTML/Element/applet" } ) }}
