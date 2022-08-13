---
title: Użycie pseudoklasy :target w selektorach
slug: Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors
translation_of: Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors
original_slug: Web/CSS/CSS_Selectors/Użycie_pseudoklasy_:target_w_selektorach
---
{{CSSRef}}

Czasami adres URL wskazuje na konkretny fragment dokumentu, ale użytkownikowi może być ciężko to zauważyć. Sprawdź, jak można łatwo zwrócić uwagę użytkownika na target naszego adresu URL za pomocą CSS.

## Wybór targetu

[Pseudoklasy](/en/CSS/Pseudo-classes "Pseudo-classes") {{cssxref(":target")}} używa się, aby ostylować targetowany element adresu URL, który zawiera identyfikator fragmentu.

Przykładowo, adres URL `http://developer.mozilla.org/en/docs/Using_the_:target_selector#example` zawiera identyfikator fragmentu o treści `#example`. W HTML identyfikatory fragmentu to wartości atrybutów `id` lub `name` jako że atrybuty te dzielą tę samą przestrzeń na nazwy. A więc adres URL z naszego przykładu wskazywałby nam część strony o tytule "example".

Przypuśćmy, że chcesz ostylować każdy element `h2`, który jest targetem URL i nie chcesz, żeby elementy innego rodzaju dostały ostylowane w ten sposób. To proste:

```css
h2:target { font-weight: bold; }
```

Można też stworzyć style, które dotyczą jedynie konkretnego fragmentu naszej strony. Robi się to używając tego samego identyfikatora, który znajduje się w naszym URL. Tak więc aby dodać obramowanie do fragmentu strony zawierającego element `#example`, napisalibyśmy:

```css
#example:target { border: 1px solid black; }
```

## Targetowanie wszystkich elementów

Jeżeli chcemy stworzyć uniwersalne stylowanie, którego będziemy używać do wszystkich targetowanych elementów, możemy użyć uniwersalnego selektora:

```css
:target { color: red; }
```

## Przykład

W poniższym przykładzie jest pięć odnośników, które przenoszą nas do różnych elementów należących do jednego dokumentu. Wybierając link "Pierwszy" sprawi, że `<h1 id="one">` zostanie naszym pierwszym targetowanym elementem. Zwróć uwagę, że dokument zostać przewinięty przewinąć do nowej pozycji, jako że targetowane elementy umieszcza się w miarę możliwości na górze okna przeglądarki.

```html
<h4 id="jeden">...</h4> <p id="dwa">...</p>
<div id="trzy">...</div> <a id="cztery">...</a> <em id="piec">...</em>

<a href="#jeden">Pierwszy</a>
<a href="#dwa">Drugi</a>
<a href="#trzy">Trzeci</a>
<a href="#cztery">Czwarty</a>
<a href="#piec">Piąty</a>
```

## Podsumowanie

W przypadkach, gdy identyfikator fragmentu wskazuje na dany kawałek dokumentu, użytkownik może nie być pewny, którą część dokumentu ma czytać. Dzięki ostylowaniu targetu adresu URL można tego uniknąć.

## Zobacz też

- {{cssxref(":target")}}

### Original Document Information

- Author(s): Eric Meyer, Standards Evangelist, Netscape Communications
- Original Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.
- Note: This reprinted article was originally part of the DevEdge site.
