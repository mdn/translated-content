---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/HTMLFormElement
---
{{ ApiRef() }}

### Interfejs elementu HTML FORM

Elementy `FORM` mają wszystkie właściwości i metody innych elementów HTML, tak jak opisano w rozdziale o [elementach](pl/DOM/element). Jednocześnie mają one bardziej wyspecjalizowany interfejs [HTMLFormElement](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-40002357).

Interfejs ten dostarcza metod do tworzenia i modyfikacji elementów `FORM` przy użyciu DOM. Poniższy przykład przedstawia, jak utworzyć nowy formularz, zmienić jego atrybuty i wysłać go.

    // Utwórz formularz
    var f = document.createElement("form");

    // Dodaj do zawartości dokumentu
    document.body.appendChild(f);

    // Ustaw atrybuty oznaczające akcję i metodę wysyłania
    f.action = "/cgi-bin/some.cgi";
    f.method = "POST"

    // Wyślij formularz
    f.submit();

Z kolei poniższy dokument HTML przedstawia jak wydobyć informacje z formularza i nadać mu pewne atrybuty.

    <title>Przykład formularza</title>
    <script type="text/javascript">
      function getFormInfo() {
        var info;

        // Znajdź referencję do formularza poprzez kolekcję forms
        var f = document.forms["formA"];
        info = "f.elements: " + f.elements + "\n"
             + "f.length: " + f.length + "\n"
             + "f.name: " + f.elements + "\n"
             + "f.acceptCharset: " + f.acceptCharset + "\n"
             + "f.action: " + f.action + "\n"
             + "f.enctype: " + f.enctype + "\n"
             + "f.encoding: " + f.encoding + "\n"
             + "f.method: " + f.method + "\n"
             + "f.target: " + f.target;
        document.forms["formA"].elements['tex'].value = info;
      }

      // Referencja do formularza jest przekazywana z atrybutu
      // onclick przycisku za pomocą 'this.form'
      function setFormInfo(f) {
        f.method = "GET";
        f.action = "/cgi-bin/evil_executable.cgi";
        f.name   = "totally_new";
      }
    </script>

    <h1>Przykład formularza</h1>

    <form name="formA" id="formA"
     action="/cgi-bin/test" method="POST">
     <p>Kliknij "info" by zobaczyć informację o formularzu,
     "zmień" by zmienić ustawienia, a następnie ponownie "info"
     by zobaczyć efekt zmian.</p>
     <p>
      <input type="button" value="info"
       onclick="getFormInfo();">
      <input type="button" value="zmień"
       onclick="setFormInfo(this.form);">
      <input type="reset" value="zresetuj">
      <br>
      <textarea id="tex" style="height:15em; width:20em">
     </p>
    </form>

### Własności

- [form.elements](pl/DOM/form.elements)
  - : Zwraca kolekcję wszystkich kontrolek zawartych w elemencie `FORM`.

<!---->

- [form.length](pl/DOM/form.length)
  - : Zwraca ilość kontrolek w elemencie `FORM`.

<!---->

- [form.name](pl/DOM/form.name)
  - : Zwraca ciąg z nazwą bieżącego elementu `FORM`.

<!---->

- [form.acceptCharset](pl/DOM/form.acceptCharset)
  - : Zwraca listę obsługiwanych przez formularz zestawów znaków.

<!---->

- [form.action](pl/DOM/form.action)
  - : Pobiera/ustawia akcję dla elementu `FORM`.

<!---->

- [form.enctype](pl/DOM/form.enctype)
  - : Pobiera/ustawia typ zawartości wysyłanej przez formularz.

<!---->

- [form.encoding](pl/DOM/form.encoding)
  - : Pobiera/ustawia typ zawartości wysyłanej przez formularz.

<!---->

- [form.method](pl/DOM/form.method)
  - : Pobiera/ustawia metodę HTTP używaną do wysłania formularza.

<!---->

- [form.target](pl/DOM/form.target)
  - : Pobiera/ustawia okno docelowe akcji formularza (np. ramka, w której zostanie wyrenderowana zwrócona strona).

### Metody

- [form.submit](pl/DOM/form.submit)
  - : Wysyła formularz

<!---->

- [form.reset](pl/DOM/form.reset)
  - : Przywraca formularz do jego stanu początkowego



{{ languages( { "en": "en/DOM/form", "es": "es/DOM/form", "fr": "fr/DOM/form", "ja": "ja/DOM/form" } ) }}
