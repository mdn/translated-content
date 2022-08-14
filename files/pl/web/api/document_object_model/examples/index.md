---
title: Przykłady użycia DOM
slug: Web/API/Document_Object_Model/Examples
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document_Object_Model/Examples
original_slug: Dokumentacja_Gecko_DOM/Przykłady_użycia_DOM
---
{{ ApiRef() }}

Rozdział ten pokazuje kilka dłuższych przykładów użycia DOM na stronach internetowych i zastosowanie [XML](pl/XML)-a. Gdzie tylko jest to możliwe, przykłady używają ogólnie API, trików i wzorów kodu napisanych w JavaScripcie służących do manipulacji obiektem dokumentu.

### Przykład 1: Wysokość i szerokość

Następujący przykład pokazuje użycie własności `height` i `width` obok obrazków, które się różnią rozmiarami:

    <!DOCTYPE html>
    <html lang="pl">
    <head>
    <title>Przykład width/height</title>
    <script>
    function init()
    {
      var arrImages = new Array(3);

      arrImages[0] = document.getElementById("image1");
      arrImages[1] = document.getElementById("image2");
      arrImages[2] = document.getElementById("image3");
      var objOutput = document.getElementById("output");
      var strHtml = "<ul>";
      for (var i = 0; i < arrImages.length; i++)
        strHtml += "<li>image" + (i+1) +
                ": height=" + arrImages[i].height +
                ", width=" + arrImages[i].width +
                ", style.height=" + arrImages[i].style.height +
                ", style.width=" + arrImages[i].style.width +
                "<\/li>";
      strHtml += "<\/ul>";
      objOutput.innerHTML = strHtml;
    }
    </script>
    </head>
    <body onload="init();">

    <p>Obrazek 1: Brak wysokości, szerokości oraz stylu
        <img id="image1" src="http://www.mozilla.org/images/mozilla-banner.gif">
    </p>
    <p>Obrazek 2: height="50", width="500", lecz bez stylu
        <img id="image2" src="http://www.mozilla.org/images/mozilla-banner.gif"
             height="50" width="500">
    </p>
    <p>Obrazek 3: Brak wysokości, szerokości, lecz style="height: 50px; width: 500px;"
        <img id="image3" src="http://www.mozilla.org/images/mozilla-banner.gif"
             style="height: 50px; width: 500px;">
    </p>

    <div id="output"> </div>
    </body>
    </html>

`height` i `width` są także własnościami elementów `OBJECT` i `APPLET`.

### Przykład 2: Atrybuty obrazu

    <!DOCTYPE html>
    <html lang="pl">
    <head>
    <title>Modyfikacja obramowania obrazka</title>

    <script>
    function setBorderWidth(width) {
      document.getElementById("img1").style.borderWidth = width + "px";
    }
    </script>
    </head>

    <body>
    <p>
      <img id="img1"
           src="image1.gif"
           style="border: 5px solid green;"
           width="100"
           height="100"
           alt="test obramowania">
    </p>

    <form name="FormName">
      <input type="button" value="Utwórz obramowanie 20px-wide" onclick="setBorderWidth(20);">
      <input type="button" value="Utwórz obramowanie 5px-wide" onclick="setBorderWidth(5);">
    </form>

    </body>
    </html>

### Przykład 3: Manipulacja stylami

W tym prostym przykładzie, niektóre podstawowe własności stylów elementu znacznika HTML są dostępne przy zastosowaniu obiektów stylu elementu i obiektów własności stylu CSS, który może być odzyskiwany i ustawiany z DOM. W tym przypadku manipulujemy bezpośrednio pojedynczym stylem. W następnym przykładzie (zobacz [przykład 4](#Przyk.C5.82ad_4:_Zastosowanie_styl.C3.B3w)), zastosujemy arkusz stylów i jego reguły do zmiany stylów w dokumentach wokół.

    <!DOCTYPE html>
    <html lang="pl">
    <head>
    <title>Zmiana koloru i rozmiaru czcionki w przykładzie</title>

    <script>
    function changeText() {
    	var p = document.getElementById("pid");

        p.style.color = "blue"
    	p.style.fontSize = "18pt"
    }
    </script>
    </head>
    <body>

    <p id="pid" onclick="window.location.href = 'http://www.cnn.com/';">linker</p>

    <form>
      <p><input value="rec" type="button" onclick="changeText();"></p>
    </form>

    </body>
    </html>

### Przykład 4: Zastosowanie stylów

Własność obiektu dokumentu styleSheets zwraca listę arkusza stylów wczytanego do tegoż dokumentu. Można uzyskać dostęp do indywidualnych własności arkusza stylów używając obiektów stylesheet, style oraz CSSRule jak zademonstrowano w poniższym przykładzie, który wyświetla selektory reguł stylu na konsole.

    var ss = document.styleSheets;

    for(var i=0; i < ss.length; i++) {
      for(var j=0; j < ss[i].cssRules.length; j++) {
         console.log(ss[i].cssRules[j].selectorText + "\n" );
      }
    }

Dla dokumentu posiadającego tylko jeden styl, dla którego zdefiniowano 3 poniższe reguły:

    body { background-color: darkblue; }
    p { font-face: Arial; font-size: 10pt; margin-left: .125in; }
    #lumpy { display: none; }

Wynik skryptu będzie następujący:

    BODY
    P
    #LUMPY

### Przykład 5: Propagowanie zdarzeń

Poniższy przykład demonstruje w prosty sposób jak zainicjować zdarzenia oraz ich obsługę przez DOM. Kiedy BODY tegoż dokumentu zostanie załadowany nasłuch zdarzeń zostaje zarejestrowany w pierwszym rzędzie TABLE. Nasłuch zdarzeń obsługuje zdarzenie przez wykonanie funkcji l_func, która zmienia wartość dolnej komórki tabeli.

Jednakże, l_func wywołuje również metodę obiektu zdarzenia [event.stopPropagation](pl/DOM/event.stopPropagation) powstrzymującą zdarzenie od dalszego "mieszania" w DOM-ie. Zauważ, że sama tabela posiada uchwyt zdarzenia [onclick](pl/DOM/element.onclick), który powinien wyświetlić powiadomienie w przypadku kliknięcia na tabelę. Metoda l_func powstrzymała propagacje, tak wiec po zaktualizowaniu danych tabeli faza zdarzenia została zakończona.

    <!DOCTYPE html>
    <html lang="pl">
    <head>
      <title>Propagowanie zdarzeń</title>
      <style>
        #t-daddy { border: 1px solid red }
        #t1 { background-color: pink; }
      </style>
      <script>
      function stopEvent(e) {
        t2 = document.getElementById("t2");
        t2.innerHTML = "hej";
         // this ought to keep t-daddy from getting the click.
        e.stopPropagation();
        alert("propagowanie zdarzeń zatrzymane.");
      }
      function load() {
        el = document.getElementById("t");
        el.addEventListener("click", stopEvent, false);
      }
      </script>
    </head>
    <body onload="load();">

    <table id="t-daddy" onclick="alert('hi');">
      <tr id="t">
         <td id="t1">jeden</td>
      </tr>
      <tr>
        <td id="t2">dwa</td>
      </tr>
    </table>
    </body>
    </html>

### Przykład 6: getComputedStyle

Poniższy przykład demonstruje jak użyć metody DOM document.defaultView\.getComputedStyle() do pobrania stylu elementu, który nie jest zgodny z językiem JavaScript (np., elementReference.style.backgroundColor="rgb(173, 216, 230)"). Typy stylów można pobrać w bardziej bezpośredni sposób style = własności elementReference.style, których lista własności przedstawiona jest [DOM Style Reference](pl/DOM/style) książki (patrz [DOM CSS Properties List](pl/DOM/CSS)). Zobacz również własności stylów w [DOM Elements Reference](pl/DOM/element). getComputedStyle() zwraca obiekt ComputedCSSStyleDeclaration, którego własności stylów można związać z metodą getPropertyValue() obiektu, jak pokazuje poniższy przykład dokumentu.

    <!DOCTYPE html>
    <html lang="pl">
    <head>

    <title>Przykład getComputedStyle</title>

    <script>
    function cStyles() {
       var RefDiv = document.getElementById("d1");

       var txtHeight = document.getElementById("t1");
       var h_style =
    document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("height");
       txtHeight.value = h_style;

       var txtWidth = document.getElementById("t2");
       var w_style =
    document.defaultView.getComputedStyle(RefDiv, null).getPropertyValue("width");
       txtWidth.value = w_style;

       var txtBackgroundColor = document.getElementById("t3");
       var b_style =
    document.defaultView.getComputedStyle(RefDiv,
    null).getPropertyValue("background-color");
       txtBackgroundColor.value = b_style;
      }
     </script>

     <style>
       #d1 { margin-left: 10px; background-color: rgb(173, 216, 230);
    height: 20px; max-width: 20px; }
     </style>

    </head>

    <body>

    <div id="d1">&nbsp;</div>

    <form action="">
    <p><button type="button" onclick="cStyles();">getComputedStyle</button>
      height<input id="t1" type="text" value="1">
      max-width<input id="t2" type="text" value="2">
      bg-color<input id="t3" type="text" value="3"></p>
    </form>

    </body>
    </html>

### Przykład 7: Wyświetlanie stałych obiektu zdarzenia

Przykład pokazuje jak używając DOM można stworzyć tabele zawierającą zarówno wszystkie stałe obiektu zdarzenia jak i ich wartości. Pokazuje kilka ciekawych aspektów DOM, włączając w to własność Event.prototype pozwalającą uzyskać dostęp do własności danego obiektu, dobry wzorzec iteracji przez własności tegoż prototypu oraz same wartości stałych wyświetlanych w tabeli. Zauważ, że środkowy zakres zmiennych to kody znaków reprezentujące klawisze wciśnięte podczas zdarzenia (i do pobrania za pomocą własności charCode). Załaduj poniższy kod jako stronę www, aby zobaczyć stale obiektu zdarzenia.

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Show Event properties</title>

    <style>
      table {border-collapse: collapse;}
      thead {font-weight: bold;}
      td {padding: 2px 10px 2px 10px;}
      .odd {background-color: #efdfef;}
      .even {background-color: #ffffff;}
    </style>

    <script>

    function showEventProperties(e) {
      function addCell(row, text) {
        var cell = row.insertCell(-1);
        cell.appendChild(document.createTextNode(text));
      }

      var e = e || window.event;
      document.getElementById('eventType').innerHTML = e.type;

      var table = document.createElement('table');
      var thead = table.createTHead();
      var row = thead.insertRow(-1);
      var lableList = ['#', 'Property', 'Value'];
      var len = lableList.length;

      for (var i=0; i<len; i++) {
        addCell(row, lableList[i]);
      }

      var tbody = document.createElement('tbody');
      table.appendChild(tbody);

      for (var p in e) {
        row = tbody.insertRow(-1);
        row.className = (row.rowIndex % 2)? 'odd':'even';
        addCell(row, row.rowIndex);
        addCell(row, p);
        addCell(row, e[p]);
      }

      document.body.appendChild(table);
    }
    window.onload = function(event){
      showEventProperties(event);
    }
    </script>
    </head>

    <body>
    <h1>Properties of the DOM <span id="eventType"></span> Event Object</h1>
    </body>

    </html>

### Przykład 8: Zastosowanie interfejsu DOM Table

Interfejs DOM HTMLTableElement dostarcza kilku wygodnych metod do tworzenia i modyfikacji tabeli. Dwoma często stosowanymi metodami są [`table.insertRow`](pl/DOM/table.insertRow) i [`row.insertCell`](pl/DOM/tableRow.insertCell).

Aby dodać wiersz i kilka komórek do istniejącej tabeli:

    <table id="table0">
     <tr>
      <td>Row 0 Cell 0</td>
      <td>Row 0 Cell 1</td>
     </tr>
    </table>

    <script>

    var table = document.getElementById('table0');
    var row = table.insertRow(-1);
    var cell, text;

    for (var i=0; i<2; i++) {
      cell = row.insertCell(-1);
      text = 'Row ' + row.rowIndex + ' Cell ' + i;
      cell.appendChild(document.createTextNode(text));
    }
    </script>

#### Uwagi

- A table's [`innerHTML`](pl/DOM/element.innerHTML) property should never be used to modify a table, although you can use it to write an entire table or the content of a cell.
- If DOM Core methods [`document.createElement`](pl/DOM/document.createElement) and [`element.appendChild`](pl/DOM/element.appendChild) are used to create rows and cells, IE requires that they are appended to a tbody element, whereas other browsers will allow appending to a table element (the rows will be added to the last tbody element).
- There are a number of other convenience methods belonging to the [table interface](pl/DOM/table#Metody) that can be used for creating and modifying tables.



{{ languages( { "en": "en/Gecko_DOM_Reference/Examples", "es": "es/Referencia_DOM_de_Gecko/Ejemplos", "fr": "fr/R\u00e9f\u00e9rence_du_DOM_Gecko/Exemples", "ja": "ja/Gecko_DOM_Reference/Examples" } ) }}
