---
title: strong
slug: Web/HTML/Element/strong
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/strong
---
## Podsumowanie

Element `<strong>...</strong>` daje mocny nacisk, zwykle jest on wyświetlany jako wytłuszczenie.

## Przykład

       <p>
          Kiedy robi się X, jest to <strong>wymagane</strong>, żeby najpierw zrobić Y.
       </p>

### Rezultat

Kiedy robi się X, jest to **wymagane**, żeby najpierw zrobić Y.

## Bold vs. Strong

Jest to często trudne dla niedoświadczonych deweloperów, dlaczego jest tak dużo sposobów stworzenia tej samej rzeczy na stronie. Pogrubienie i silny nacisk jest prawdopodobnie jednym z najczęstszych. Czy należy używać `<b></b>` czy `<strong></strong>`? Czy tworzy to dokładnie ten sam wynik?

Nie do końca, silny nacisk jest stanem logicznym, a wytłuszczenie jest stanem fizycznym. Stany logiczne oddzielają prezentację od zawartości, dlatego może być to wyrażone na różne sposoby, na przykład zamiast wyświetlać kawałek tekstu jako pogrubienie, możesz wyświetlić to na czerwono, w innym rozmiarze, podkreślone lub jakkolwiek inaczej. Bardziej sensownym jest zmieniać właściwości prezentacyjne znacznika `strong` niż robić to z pogrubieniem. Jest tak, ponieważ pogrubienie jest stanem fizycznym, nie ma tutaj rozdziału pomiędzy prezentacją i zawartością, zmuszanie pogrubienia do robienia czegokolwiek innego niż wytłuszczania tekstu byłoby mylące i nielogiczne.

Zobacz także: [Znacznik \<b>](/pl/HTML/Element/b "pl/HTML/Element/b")

{{ HTML:Element_Navigation() }}

{{ languages({
"en": "en/HTML/Element/strong",
"de": "de/HTML/Element/strong",
"ja": "ja/HTML/Element/strong"
}) }}
