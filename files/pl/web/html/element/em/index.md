---
title: em
slug: Web/HTML/Element/em
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/em
---
### Podsumowanie

Element `<em>...</em>` nadaje tekstowi nacisk, zwykle jest on oznaczony kursywą.

### Przykład

       <p>

           Ważne jest, że <em>nie możesz</em> zalogować się zanim nie
           zweryfikujesz swojego konta poprzez email, który został wysłany na adres, który podałeś.

       </p>

#### Rezultat

Ważne jest, że _nie możesz_ zalogować się zanim nie zweryfikujesz swojego konta poprzez email, który został wysłany na adres, który podałeś.

### Kursywa vs. Emfaza

Jest to często trudne dla niedoświadczonych deweloperów, dlaczego jest tak dużo sposobów stworzenia tej samej rzeczy na stronie. Kursywa i nacisk są prawdopodobnie jednym z najczęstszych. Czy należy używać `<em></em>` czy `<i></i>`? Czy tworzy to dokładnie ten sam wynik?

Nie do końca - emfaza jest stanem logicznym, a kursywa jest stanem fizycznym. Stany logiczne oddzielają prezentację od zawartości, dlatego mogą być wyrażone na różne sposoby, na przykład, zamiast wyświetlać fragment tekstu jako kursywę, możesz wyświetlić go na czerwono, w innym rozmiarze, podkreślone lub nawet wytłuszczone. Bardziej sensownym jest zmieniać właściwości prezentacyjne znacznika `em` niż robić to z kursywą. Dzieje się tak, ponieważ kursywa jest stanem fizycznym, nie ma tutaj rozdziału pomiędzy prezentacją i zawartością, zmuszanie kursywy do robienia czegokolwiek innego niż pochylania tekstu byłoby mylące i nielogiczne.

### Zobacz także

- [Znacznik `<i>`](pl/HTML/Element/i)

{{ HTML:Element_Navigation() }}

{{ languages( { "en": "en/HTML/Element/em" } ) }}
