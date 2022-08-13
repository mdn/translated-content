---
title: center
slug: Web/HTML/Element/center
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/center
---
### Podsumowanie {{ Deprecated_inline() }}

Element `<center>...</center>` jest [elementem blokowym](pl/HTML/Elementy_blokowe), który może zawierać akapity i inne elementy blokowe oraz liniowe. Wewnętrzna zawartość tego elementu jest wyśrodkowana w poziomie względem zawierającego ją elementu (zazwyczaj _body_). Ten znacznik jest wycofywany w HTML 4 (oraz XHTML 1) na rzecz własności CSS `text-align`, która może być zastosowana do [elementu `div`](pl/HTML/Element/div) lub do pojedynczego [akapitu](pl/HTML/Element/p).

### Przykład 1

       <center>Ten tekst będzie wyśrodkowany.
       <p>Jak również ten akapit.</p></center>

#### Rezultat

\<center>Ten tekst będzie wyśrodkowany.

Jak również ten akapit.

\</center>

### Przykład 2 (alternatywny CSS)

       <div style="text-align:center">Ten tekst będzie wyśrodkowany.
       <p>Jak również ten akapit.</p></div>

#### Rezultat

Ten tekst będzie wyśrodkowany.

Jak również ten akapit.

### Przykład 3 (alternatywny CSS)

       <p style="text-align:center">Ta linia będzie wyśrodkowana.<br />
       I ta linia również.</p>

#### Rezultat

Ta linia będzie wyśrodkowana.
I ta linia również.

### Notatki

Zastosowanie `text-align:center` do elementu `div` lub elementu `p` centruje _zawartość_ tych elementów, pozostawiając ich całkowite wymiary niezmienione.

{{ HTML:Element_Navigation() }}

{{ languages( { "en": "en/HTML/Element/center" } ) }}
