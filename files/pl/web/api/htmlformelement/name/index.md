---
title: HTMLFormElement.name
slug: Web/API/HTMLFormElement/name
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/HTMLFormElement/name
---
{{ ApiRef() }}

### Podsumowanie

`name` zwraca nazwą bieżącego elementu `FORM` jako łańcuch znaków.

### Składnia

    string = form.name
    form.name =
    string

### Przykład

    form1 = document.getElementById("form1").name;
    if (form1 != document.form.form1) {
       // przeglądarka nie obsługuje tego odniesienia do formularza
    }

### Uwagi

Uwaga, ta własność jest do odczytu/zapisu, która znaczy, że możemy zmienić lub ustawić nazwę formularza.

Jeśli Twój `FORM` zawiera element nazwany "nazwany_element", następnie ten element przesłania własność `form.name`, więc nie możesz uzyskać do niego dostępu.

Internet Explorer (IE) nie pozwala nazwie tworzonego elementu używać `createElement()` będącej ustawieniem lub modyfikacją używającą własność `name` property.

### Specyfikacja

[DOM Level 2 HTML: name](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-22051454)

{{ languages( { "en": "en/DOM/form.name" } ) }}
