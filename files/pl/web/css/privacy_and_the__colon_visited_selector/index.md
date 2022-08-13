---
title: Prywatność i znacznik :visited
slug: Web/CSS/Privacy_and_the_:visited_selector
translation_of: Web/CSS/Privacy_and_the_:visited_selector
original_slug: Web/CSS/Prywatnosc_i_znacznik_:visited
---
{{cssref}}

Przed mniej więcej rokiem 2010, [CSS](/pl/docs/Web/CSS)-owy znacznik {{ cssxref(":visited") }} pozwalał stronom WWW na ujawnianie historii przeglądania użytkownika i które ze stron odwiedził. Było to możliwe przez {{domxref("window.getComputedStyle")}} i inne techniki. Proces ten działał błyskawicznie i pozwalał nie tylko na ujawnienie, co użytkownik robił w sieci, ale również pozwalał na dowiedzenie się wielu informacji o jego tożsamości.

By załagodzić ten problem, w {{ Gecko("2") }} zaimplementowano aktualizacje dot. prywatności celem ograniczenia ilości informacji zbieranych przez odwiedzone linki. W przypadku innych przeglądarek dokonano podobnych zmian.

## Małe, białe kłamstewka

By chronić prywatność użytkowników, Firefox i inne przeglądarki będą kłamać aplikacjom webowym w przypadku zaistnienia poniższych okoliczności:

- Metoda `window.getComputedStyle` i podobne funkcje, jak {{ domxref("element.querySelector") }} zawsze zwrócą wartości wykazujące, jakoby użytkownik nigdy nie odwiedził żadnego z linku danej strony.
- Jeśli użyjesz selektora rodzeństwa, jak `:visited + span`, element sąsiedni (w omawianym przypadku `span`) zostanie ostylowany w sposób właściwy dla linka nieodwiedzonego.
- W rzadkich przypadkach, jeśli zastosujesz zagnieżdżone elementy linków i okaże się, że dobrany element jest inny, niż link, którego obecność w historii jest testowana, element zostanie wyrenderowany również, jakby nigdy nie był wcześniej odwiedzany.

## Limits to visited link styles

You can style visited links, but there are limits to which styles you can use. Only the following styles can be applied to visited links:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (and its sub-properties)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- The color parts of the {{SVGAttr("fill")}} and {{SVGAttr("stroke")}} attributes

In addition, even for the above styles, you won't be able to change the transparency between unvisited and visited links, as you otherwise would be able to using [`rgba()`](</en-US/docs/Web/CSS/color_value#rgba()>), [`hsla()`](</en-US/docs/Web/CSS/color_value#hsla()>), or the [`transparent`](/en-US/docs/Web/CSS/color_value#transparent) keyword.

Here is an example of how to use styles with the aforementioned restrictions:

```css
:link {
  outline: 1px dotted blue;
  background-color: white;
  /* The default value of background-color is `transparent`. You need to
     specify a different value, otherwise changes on :visited won't apply. */
}

:visited {
  outline-color: orange;    /* Visited links have an orange outline */
  background-color: green;  /* Visited links have a green background */
  color: yellow;            /* Visited links have yellow colored text */
}
```

## Impact on web developers

Overall, these restrictions shouldn't affect web developers too significantly. They may, however, require the following changes to existing sites:

- Using background images to style links based on whether they've been visited will no longer work, since only colors can be used to style visited links.
- Colors that are otherwise transparent will fail to appear if styled in a `:visited` selector.

## See also

- [privacy-related changes coming to CSS :visited](http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) on Mozilla Hacks
- [Plugging the CSS History Leak](http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/) on the Mozilla Security Blog
- [Preventing attacks on a user's history through CSS :visited selectors](http://dbaron.org/mozilla/visited-privacy)
