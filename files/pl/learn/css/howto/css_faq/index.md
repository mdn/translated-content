---
title: Częste pytania o CSS
slug: Learn/CSS/Howto/CSS_FAQ
tags:
  - CSS
  - Wszystkie_kategorie
translation_of: Learn/CSS/Howto/CSS_FAQ
original_slug: Web/CSS/Częste_pytania_o_CSS
---
### Często zadawane pytania

#### Stworzyłem poprawny CSS, ale przeglądarka go źle wyświetla

Jeśli chcesz, aby Twoja przeglądarka poprawnie wyświetlała strony stworzone zgodnie ze standardami HTML/CSS, to musisz zadeklarować na początku każdego pliku HTML Deklarację Typu Dokumentu (DTD - Document Type Declaration).

Nowoczesne przeglądarki obsługują dwa główne tryby wyświetlania:

- _Tryb zgodności wstecznej_ (_Quirks Mode_): tryb pozwalający prawidłowo wyświetlać strony oparte na niestandardowych metodach renderowania. Te metody były używane w przeglądarkach zanim zaimplementowano obsługę standardów W3C.
- _Tryb standardów_ (_Standard Mode_): w tym trybie przeglądarka ma ściśle stosować się do standardów W3C.

Jeśli Twoja deklaracja (DTD) jest niepełna, przestarzała lub jej brak, to przeglądarki będą wyświetlały strony używając trybu zgodności wstecznej.

Oto lista najczęściej używanych DTD:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/strict.dtd">

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

#### Różnice między `id` i `class`

Bloki i elementy HTML-a mogą mieć atrybut `id` i/lub `class`. Atrybut `id` pozwala nadać unikalną nazwę wybranemu elementowi. W jednym dokumencie nie może być dwóch elementów o tej samej nazwie (identyfikatorze). Atrybut `class` pozwala na grupowanie elementów w określonej klasie. Z założenia identyczny atrybut jest stosowany dla wielu elementów. CSS pozwala zdefiniować style, które mają być użyte do elementów z odpowiednim atrybutem `id` i/lub `class`.

Używaj styli zależnych od `id`, gdy chcesz ograniczyć ich działanie do konkretnego bloku lub elementu. Dla przykładu - dobrym miejscem na użycie atrybutu `id` jest blok, w którym umieszczamy menu, ponieważ występuje on tylko raz na stronie.

Używaj atrybutu `class`, gdy chcesz aby ten sam styl był stosowany do grupy elementów.

Zobacz [Selektory CSS](pl/CSS/Na_pocz%c4%85tek/Selektory)

#### Przywracanie domyślnej wartości własności

W CSS2 nie ma możliwości ustawienia standardowej wartości dla własności CSS. Jedyna droga, aby przywrócić standardową wartość, to przedeklarowanie (musisz znać standardową wartość, ponieważ CSS nie posiada słowa kluczowego _default_)

Musisz zachować szczególną ostrożność pisząc reguły stylów, gdy używasz selektorów (np. selektorów po nazwie znacznika jak na przykład `p`), które możesz chcieć nadpisać bardziej szczegółowymi regułami (jak te przy użyciu ID lub selektorów klas), ponieważ oryginalna standardowa wartość nie może być automatycznie odzyskana.

Z powodu _kaskadowej_ natury CSS dobrą praktyką jest definiowanie reguł stylów najszczegółowiej jak się tylko da, żeby wpływały tylko na to, co chcesz.

#### Style pochodne

CSS nie pozwala na definiowanie stylów w regułach innego, głównie z powodu _**user agents performance issues**_ ([Eric Meyer words about it](http://archivist.incutio.com/viewlist/css-discuss/2685)).

W każdym razie, dobrze zorganizowany dokument HTML nie potrzebuje _zagnieżdżonych stylów_, dzięki _kaskadowej_ naturze stylów. W rzeczywistości, jeśli potrzebujesz dokonać drobnej zmiany konkretnej reguły, stwórz oddzielną regułę zawierającą tylko zmiany. W [HTML](pl/HTML)-u zastosuj główną regułę, a potem tą ze zmianami (patrz następna sekcja na temat przydzielania kilku klas).

#### Przydzielanie kilku klas

Elementy HTML-a mogą być opisane przez kilka klas. Robi się to wymieniając nazwy kolejnych klas w atrybucie `class`, oddzielając kolejne nazwy spacjami.

    <style type="text/css">
    .firstclass { background: black; color: white; }
    .secondclass { font-weight: bold; }
    </style>

    <div class="firstclass secondclass">
    ... treść ...
    ... treść ...
    ... treść ...
    </div>

Jeśli ta sama własność jest zadeklarowana w dwóch regułach, to konflikt rozwiązywany jest najpierw poprzez ich specyfikę, a później kolejność w arkuszu stylów. Kolejność klas w atrybucie `class` jest nieistotna.

#### Własności stylów, które nie działają

Często się zdarza, że poprawnie zdefiniowane style są ignorowane. Nie wynika to ani z błędu przeglądarki, ani z błędnej składni w CSS. Zwykle jest to zachowanie jak najbardziej prawidłowe, wynikające bezpośrednio ze składni i kolejności intepretacji reguł CSS.

Najczęstsze powody ignorowania niektórych styli to:

- hierarchia elementów HTML'a
- _**jawnie**_ przedefiniowane reguły stylów
- _**użycie skróconej formy właściwości**_
- używanie selektora: `*`
- kolejność interpretacji reguł CSS

Aby zlokalizować omówiony powyżej problem narzędziem zwanym " Inspektor DOM", w którym będziemy mogli zobaczyć jego lokalizację.

**Hierarchia elementów HTML-a**

Sposób, w jaki style CSS są stosowane do elementów HTML, zależy od hierarchii samych elementów HTML. Ważne jest, aby to zapamiętać, ponieważ reguła potomka jest zawsze ważniejsza od reguły elementu nadrzędnego.

    #section { font-weight: bold; }
    .redtext { font-weight: normal; color: red; }

    <div id="section">
       To jest pogrubiony tekst
       <span class="redtext"> ten ma normalną grubość, lecz jest czerwony,</span>
       i znów pogrubiony
    </div>

Wydaje się to dość oczywiste, gdyż wynika z prostoty kaskadowych arkuszy stylów. Gdy w przypadku skomplikowanych hierarchii HTML jakaś reguła wydaje sie być ignorowana, najpierw sprawdź, czy podejrzany element nie jest wewnątrz innego ze zdefiniowanym innym stylem.

**Przedefiniowywanie reguł stylów**

W arkuszach stylów kolejność **jest** istotna. W praktyce, jeśli zdefiniujesz regułę, a następnie zmienisz tą definicję w dalszej części arkusza stylów to użyta będzie ostatnia definicja.

    #sekcja { font-weight: bold; }
    .czerwony_tekst { color: red; }
    /* inne reguły                         */
    /*             inne reguły             */
    /*                         inne reguły */
    .czerwony_tekst { font-weight: normal; }

    <div id="sekcja">
       Ten tekst jest pogrubiony,
       <span class="redtext"> ten jest normalny i czerwony,</span>
       a ten znów pogrubiony.
    </div>

Aby uniknąć tego typu błędów, spróbuj definiować reguły tylko raz dla konkretnego selektora i należącej do niego grupy reguł.

**Używanie skrótów własności**

Używanie skrótów własności do definiowania reguł stylów jest dobre, ponieważ używa zwięzłej składni. Używanie \~shorthand\~ tylko z niektórymi atrybutami jest możliwe i poprawne, ale trzeba pamiętać, że niezadeklarowane atrybuty są automatycznie resetowane do wartości standardowych. Oznacza to, że poprzednia reguła dla pojedynczego atrybutu może być bezwarunkowo nadpisana.

    #sekcja { font-size: 12px; font-family: Verdana; font-weight: bold; }
    .czerwony_tekst { font: 14px Arial; color: red; }

    <div id="sekcja">
       To jest pogrubiona 12-o pikselowa Verdana,
       <span class="czerwony_tekst">to jest normalny 14-o pikselowy, czerwony Arial,</span>
       i znów 12-o pikselowa Verdana
    </div>

W poprzednim przykładnie problem w regułach należących do różnych elementów, ale to samo może się zdarzyć dla tego samego elementu, ponieważ kolejność reguł **jest** istotna.

    #sekcja {
       font-weight: bold;
       font: 12px Verdana;  /* skrót nadpisuje pogrubienie i zwraca normalny */
    }

**Używanie selektora: `*`**

Selektor gwiazdki (`*`) pozwala na odniesienie się do dowolnego elementu i powinien być używany ze szczególną ostrożnością, ponieważ może być trudne kontrolowanie elementów, do których reguły są dodawane.

    body * { font-weight: normal; }
    #sekcja { font: 12px Verdana; }
    .pogrubiony_tekst { font-weight: bold; }
    .czerwony_tekst { color: red; }

    <div id="sekcja">
       Ten jest normalny,
       <span class="pogrubiony_tekst">
          <span class="czerwony_tekst"> ten jest normalny i czerwony,</span>
       </span>
       i znów normalny.
    </div>

W tym przykładzie `body *` pozwala na zastosowanie reguł do wszystkich elementów wewnątrz body, na każdym poziomie hierarchii - także do _czerwony_tekst_. Tak więc `font-weight: bold;` zastosowany do klasy _pogrubiony_tekst_ jest nadpisane przez `font-weight: normal;` klasy _czerwony_tekst_.

**Starszeństwo w CSS**

Gdy stosowane są różne reguły dla konkretnego elementu to która z nich zostanie zastosowana zależy od starszeństwa stylów. Style inline (liniowe, takie jak span) są interpretowane na początku, potem te oparte na identyfikatorze (`id`), następnie klasie (`class`) i ewentualnie znajdujące się wewnątrz elementu (`style=""`).

    div { color: black; }
    #pomaranczowy { color: orange; }
    .zielony { color: green; }

    <div id="pomaranczowy" class="zielony" style="color: red;">To jest czerwony tekst</div>

Więcej informacji na temat działania selektorów można znaleźć w sieci → [CSS 2.1 Specification chapter 6.4.3](http://www.w3.org/TR/CSS21/cascade.html#specificity)

#### Co wykonuje własność -moz-\*?

Zobacz: [Rozszerzenia CSS Mozilli](pl/Rozszerzenia_CSS_Mozilli).

{{ languages( { "en": "en/Common_CSS_Questions", "zh-tw": "zh_tw/CSS\_\u4e00\u822c\u554f\u984c" } ) }}
