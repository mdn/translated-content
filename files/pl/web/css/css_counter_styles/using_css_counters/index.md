---
title: Liczniki CSS
slug: Web/CSS/CSS_Counter_Styles/Using_CSS_counters
tags:
  - CSS
  - Wszystkie_kategorie
translation_of: Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
original_slug: Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
---
### Podsumowanie

Liczniki w CSS zostały opisane w sekcji [Automatic counters and numbering](http://www.w3.org/TR/CSS21/generate.html#counters) dokumentacji CSS 2.1. Wartość licznika jest ustawiana poprzez użycie własności [counter-reset](pl/CSS/counter-reset) oraz [counter-increment](pl/CSS/counter-increment), natomiast wyświetlana jest przy wykorzystaniu funkcji counter() lub counters() należących do własności [content](pl/CSS/content).

### Zastosowanie liczników

Aby użyć licznika CSS, należy najpierw ustawić mu wartość (domyślnie jest to 0) przy pomocy własności [reset](pl/CSS/counter-reset). Aby wyświetlić wartość licznika w danym elemencie należy skorzystać z funkcji counter(). Poniższy przykład dodaje na początku każdego elementu `h1` "Sekcja `wartość licznika`:".

      body {
        counter-reset: sekcja;           /* Ustawienie licznika sekcja na 0 */
      }
      h1::before {
        counter-increment: sekcja;               /* Zwiększa licznik sekcja */
        content: "Sekcja " counter(sekcja) ": ";       /* Wyświetla licznik */
      }

### Zagnieżdżanie liczników

Liczniki CSS mogą być szczególnie użyteczne przy listach uporządkowanych (`ol`), ponieważ nowa instancja licznika CSS jest automatycznie tworzona dla potomków danego elementu. Użycie funkcji counters() pozwala na dodanie ciągu znaków, który będzie oddzielał kolejne poziomy zagnieżdżonych liczników:

      ol {
        counter-reset: sekcja;                /* Tworzy nową instancję licznika
                                                 sekcja w każdym elemencie ol */
        list-style-type: none;                /* Usuwa domyślnie wyświetlany licznik */
      }
      li::before {
        counter-increment: sekcja;            /* Zwiększa tylko tę instancję
                                                 licznika sekcja */
        content: counters(sekcja, ".") " ";   /* Wyświetla wartości wszystkich
                                                 instancji licznika sekcja,
                                                 oddzielając je ciągiem ".". */
      }

Przykładowy HTML (w komentarzach podano wartość wygenerowanego licznika):

    <ol>
      <li>item</li>          <!-- 1     -->
      <li>item               <!-- 2     -->
        <ol>
          <li>item</li>      <!-- 2.1   -->
          <li>item</li>      <!-- 2.2   -->
          <li>item           <!-- 2.3   -->
            <ol>
              <li>item</li>  <!-- 2.3.1 -->
              <li>item</li>  <!-- 2.3.2 -->
            </ol>
            <ol>
              <li>item</li>  <!-- 2.3.1 -->
              <li>item</li>  <!-- 2.3.2 -->
              <li>item</li>  <!-- 2.3.3 -->
            </ol>
          </li>
          <li>item</li>      <!-- 2.4   -->
        </ol>
      </li>
      <li>item</li>          <!-- 3     -->
      <li>item</li>          <!-- 4     -->
    </ol>
    <ol>
      <li>item</li>          <!-- 1     -->
      <li>item</li>          <!-- 2     -->
    </ol>

### Zobacz także

- [counter-reset](pl/CSS/counter-reset)
- [counter-increment](pl/CSS/counter-increment)

potrzebna treść do artykułu

{{ languages( { "en": "en/CSS_Counters", "fr": "fr/Compteurs_CSS" } ) }}
