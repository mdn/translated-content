---
title: Obiekty i własności
slug: Web/JavaScript/Guide/Working_with_Objects
tags:
  - JavaScript
  - Przewodnik_JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Guide/Working_with_Objects
translation_of_original: Web/JavaScript/Guide/Obsolete_Pages/Objects_and_Properties
original_slug: >-
  Web/JavaScript/Guide/Obsolete_Pages/Przewodnik_po_języku_JavaScript_1.5/Obiekty_i_własności
---
### Obiekty i własności

Obiekty JavaScript łączą się z ich własnościami. Do własności obiektu odwołujesz się za pomocą prostego zapisu:

    objectName.propertyName

Wielkości znaków w nazwie mają znaczenie zarówno w przypadku obiektu jak i jego własności. Własności definiujesz poprzez przypisanie do niej wartości. Na przykład, przypuśćmy, że mamy obiekt o nazwie `myCar` (na razie załóżmy że ten obiekt już istnieje). Możesz zadeklarować (i jednocześnie zdefiniować) własności `make`, `model` i `year` tego obiektu następująco:

    myCar.make = "Ford";
    myCar.model = "Mustang";
    myCar.year = 1969;

Tablica jest uporządkowanym zbiorem wartości związanych z pojedynczymi nazwami zmiennych. Własności i tablice są w języku JavaScript bardzo ze sobą powiązane; właściwie są różnymi reprezentacjami tej samej struktury danych. Na przykład możesz wywoływać własności obiektu `myCar` następująco:

    myCar["make"] = "Ford"
    myCar["model"] = "Mustang"
    myCar["year"] = 1967

Ten typ tablicy nazywa się **tablicą asocjacyjną** (czasem **listą asocjacyjną**), ponieważ każdy jej element jest związany także z pewną wartością typu String. Ilustracją tego mechanizmu działania jest niżej zamieszczona funkcja wyświetlająca własności obiektu, który jest jej pierwszym argumentem podczas wywołania:

    function show_props(obj, obj_name) {
       var result = "";
       for (var i in obj)
          result += obj_name + "." + i + " = " + obj[i] + "\n";
       return result
    }

Więc funkcje `call show_props(myCar, "myCar")` zwróciły następująco:

    myCar.make = Ford
    myCar.model = Mustang
    myCar.year = 1967

{{ PreviousNext("Przewodnik po języku JavaScript 1.5:Funkcje predefiniowane:Funkcje escape i unescape", "Przewodnik po języku JavaScript 1.5:Tworzenie nowych obiektów") }}

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Guide/Objects_and_Properties", "es": "es/Gu\u00eda_JavaScript\_1.5/Objetos_y_propiedades", "fr": "fr/Guide_JavaScript\_1.5/Objets_et_propri\u00e9t\u00e9s", "ja": "ja/Core_JavaScript\_1.5\_Guide/Objects_and_Properties" } ) }}
