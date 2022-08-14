---
title: Używanie atrybutów danych
slug: Learn/HTML/Howto/Use_data_attributes
tags:
  - Atrybuty data
  - HTML5
  - Web
translation_of: Learn/HTML/Howto/Use_data_attributes
---
{{LearnSidebar}}
[HTML5](/pl/docs/Web/Guide/HTML/HTML5) został zaprojektowany z myślą o rozszerzalności dla danych, które powinny być powiązane z konkretnym elementem, ale nie muszą mieć określonego znaczenia. [Atrybuty `data-*`](/pl/docs/Web/HTML/Global_attributes#attr-dataset) pozwalają nam przechowywać dodatkowe informacje w standardowych, semantycznych elementach HTML bez zbędnych obejść takich jak niestandardowe atrybuty, dodatkowe właściwości w DOMie, lub używanie {{domxref("Node.setUserData()")}}.

## Składnia HTML

Składnia jest prosta. Jakikolwiek atrybut, którego nazwa zaczyna się od `data-` jest atrybutem danych. Powiedzmy, że masz element taki jak article, w którym chcesz przechowywać dodatkowe dane. W tym celu możesz użyć atrybutu `data` :

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

## Dostęp w JavaScript

Odczytanie wartości tych atrybutów w [JavaScript](/pl/docs/Web/JavaScript) jest także bardzo proste. Mógłbyś użyć {{domxref("Element.getAttribute", "getAttribute()")}} podając pełną nazwę HTML atrybutów by je odczytać, jednakże standard wskazuje na łatwiejszą metodę: {{domxref("DOMStringMap")}} można odczytać przez właściwość {{domxref("HTMLElement.dataset", "dataset")}}.

By odczytać atrybut `data` przez obiekt `dataset`, użyj części nazwy atrybutu zaraz po `data-` (pauzy zamieniane są na camelCase).

```js
var article = document.getElementById('electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```

Każda wartość jest łańcuchem znaków i może zostać odczytania i zapisana. W powyższym przykładzie, użycie `article.dataset.columns = 5` zamieni wartość tego atrybutu na `"5"`.

## Dostęp w CSS

Warto zwrócić uwagę, że atrybuty danych to zwyczajne atrybuty HTML, więc można się do nich dostać w [CSS-ie](/pl/docs/Web/CSS). By np. pokazać zawartość takiego atrybutu można użyć [content](/pl/docs/Web/CSS/content) w CSS z funkcją {{cssxref("attr")}}:

```css
article::before {
  content: attr(data-parent);
}
```

Możesz też użyć [selektorów atrybutu](/pl/docs/Web/CSS/Attribute_selectors) w CSS by zmienić styl głównego elementu w zależności od wartości atrybutów danych:

```css
article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

Możesz zobaczyć jak to działa [w tym przykładzie na JSBin](http://jsbin.com/ujiday/2/edit).

Atrybuty danych można także używać do przechowywania danych, które stale się zmieniają, jak np. wyniki w grze. Używając selektorów CSS oraz JavaScript pozwala uzyskać fajne efekty bez pisania żmudnych procedur wyświetlania. Zobacz [to nagranie](http://www.youtube.com/watch?v=On_WyUB1gOk) dla przykładu użycia wygenerowanej treści i przejść w CSS-ie ([przykład na JSBin](http://jsbin.com/atawaz/3/edit)).

Wartości tych atrybutów to łańcuchy znakow. Wartości numeryczne należy opakować w cudzysłów w selektorze by zostały one uwzględnione.

## Problemy

Nie należy przechowywać w atrybutach danych treści, które powinny być widoczne dla użytkownika, ponieważ programy ułatwiające dostęp nie będą mogły się do nich dostać. Ponadto wyszukiwarki mogą nie indeksować wartości atrybutów danych.

Najważniejszym problemem jaki należy wziąć pod uwagę to wydajność i wsparcie w  przeglądarce Internet Explorer. Internet Explorer 11+ wspiera standard atrybutu danych, ale wcześniejsze wersje [nie wspierają obiektu `dataset`](http://caniuse.com/#feat=dataset). By wykorzystywać atrybuty danych w IE 10 i wcześniejszych wersach, musisz użyć {{domxref("Element.getAttribute", "getAttribute()")}}. Dodatkowo [wydajność czytania atrybutów danych](http://jsperf.com/data-dataset) jest gorsza od trzymania danych w zwyczajnych obiektach JS.

Pomimo to, atrybuty danych są świetnym rozwiązaniem dla obsługi meta danych powiązanych z elementami HTML.

W Firefox 49.0.2 (i być może w nowszych lub starszych wersjach), atrybuty danych które przekraczają 1022 znaków nie zostaną odczytane przez Javascript (EcmaScript 4).

## Zobacz też

- Ten artykuł jest oparty na [Using data attributes in JavaScript and CSS pochodzącego z hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Atrybuty są także wspierane w SVG 2; zobacz {{domxref("SVGElement.dataset")}} i {{SVGAttr("data-*")}}.
- [How to use HTML5 data attributes](http://www.sitepoint.com/use-html5-data-attributes/) (Sitepoint)
