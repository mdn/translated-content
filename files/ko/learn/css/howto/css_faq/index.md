---
title: 공통된 CSS 질문들
slug: Learn/CSS/Howto/CSS_FAQ
original_slug: Web/CSS/Common_CSS_Questions
---
## 왜 유효한 내 CSS가 왜 올바르게 그려지지 않는가?

Browsers use the `DOCTYPE` declaration to choose whether to show the document using a mode that is more compatible with Web standards or with old browser bugs. Using a correct and modern `DOCTYPE` declaration at the start of your HTML will improve browser standards compliance.

Modern browsers have two main rendering modes:

- _Quirks Mode_: also called backwards-compatibility mode, allows legacy webpages to be rendered as their authors intended, following the non-standard rendering rules used by older browsers. Documents with an incomplete, incorrect, or missing `DOCTYPE` declaration or a known `DOCTYPE` declaration in common use before 2001 will be rendered in Quirks Mode.
- _Standards Mode_: the browser attempts to follow the W3C standards strictly. New HTML pages are expected to be designed for standards-compliant browsers, and as a result, pages with a modern `DOCTYPE` declaration will be rendered with Standards Mode.

Gecko-based browsers, have a third _[Almost Standards Mode](/ko/docs/Gecko's\_"Almost_Standards"\_Mode "Gecko's_\"Almost*Standards\"\_Mode")* that has only a few minor quirks.

This is a list of the most commonly used `DOCTYPE` declarations that will trigger Standards or Almost Standards mode:

```
<!DOCTYPE html> /* This is the HTML5 doctype. Given that each modern browser uses an HTML5
                   parser, this is the recommended doctype */

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## 왜 유효한 내 CSS는 모두 랜더링 되지 않는가?

원인은 다음과 같다:

- CSS 파일의 경로가 잘못되었다.
- 적용을 위해서는 CSS 파일은 반드시 `text/css` MIME type으로 전달되어야 한다. 만약 웹 서버가 이 타입을 지원하지 않는다면 적용할 수 없다.

## id 와 css는 무엇이 다른가?

HTML elements can have an id and/or class attribute. The id attribute assigns a name to the element it is applied to, and for valid markup, there can be only one element with that name. The class attribute assigns a class name to the element, and that name can be used on many elements within the page. CSS allows you to apply styles to particular id and/or class names.

Use an id-specific style when you want to restrict the applied styling rules to one specific block or element. This style will only be used by the element with that particular id.

Use a class-specific style when you want to apply the styling rules to many blocks and elements within the page.

Stylesheets with fewer rules are usually more performant. It is therefore recommended to use classes as much as possible, and to reserve the use of id for specific uses (like to connect label and form elements or for styling elements that must be semantically unique).

See [CSS selectors](/ko/docs/CSS/Getting_Started/Selectors)

## 프로퍼티(property)에 기본값(default value)으로 복귀 시키는 방법은?

본래 CSS는 "default" 키워드를 제공하지 않으며 속성의 기본값을 복원하는 유일한 방법은 해당 속성을 명시 적으로 다시 선언하는 것이다.

```
/* Heading default color is black */
h1 { color: red; }
h1 { color: black; }
```

이것은 CSS 2에서 변경되었다. 키워드 [initial](https://developer.mozilla.org/es/CSS/initial)은 이제 CSS 속성에서 유효한 값이다. 지정된 속성의 CSS 사양에 정의 된 기본값으로 재설정된다.

```
/* Heading default color is black */
h1 { color: red; }
h1 { color: initial; }
```

## 어떻게 하면 한 스타일(style)로 부터 다른 스타일을 파생시킬 수 있는가?

CSS는 한 스타일 안에서 다른 조건을 정의하는 것을 허용하지 않는다. (See [Eric Meyer's note about the Working Group's stance](http://archivist.incutio.com/viewlist/css-discuss/2685)). 그러나 여러개의 클래스(class)들을 한 엘리먼트(element)에 할당하면 같은 효과를 제공받을 수 있다.

## 어떻게 하면 한 요소(element)에 여러 클래스(class)를 할당할 수 있는가?

HTML elements can be assigned multiple classes by listing the classes in the `class` attribute, with a blank space to separate them.

```
<style type="text/css">
.news { background: black; color: white; }
.today { font-weight: bold; }
</style>

<div class="news today">
... content of today's news ...
</div>
```

If the same property is declared in both rules, the conflict is resolved first through specificity, then according to the order of the CSS declarations. The order of classes in the `class` attribute is not relevant.

## 왜 내 스타일 룰(style rule)은 올바르게 동작하지 않는가?

Style rules that are syntactically correct may not apply in certain situations. You can use [DOM Inspector](/ko/docs/DOM_Inspector)'s _CSS Style Rules_ view to debug problems of this kind, but the most frequent instances of ignored style rules are listed below.

### HTML 요소(element) 계층(hierarchy)

The way CSS styles are applied to HTML elements depends also on the elements hierarchy. It is important to remember that a rule applied to a descendent overrides the style of the parent, in spite of any specificity or priority of CSS rules.

```
.news { color: black; }
.corpName { font-weight: bold; color: red; }

<!-- news item text is black, but corporate name is red and in bold -->
<div class="news">
   (Reuters) <span class="corpName">General Electric</span> (GE.NYS) announced on Thursday...
</div>
```

In case of complex HTML hierarchies, if a rule seems to be ignored, check if the element is inside another element with a different style.

### 명확한 스타일 룰 재정의

CSS 스타일시트 안에서 순서가 중요하다. 만약 룰을 정의하고 같은 룰을 재정의 한다면 마지막 정의가 적용된다.

```
#stockTicker { font-weight: bold; }
.stockSymbol { color: red; }
/*  other rules             */
/*  other rules             */
/*  other rules             */
.stockSymbol { font-weight: normal; }

<!-- most text is in bold, except "GE", which is red and not bold -->
<div id="stockTicker">
   NYS: <span class="stockSymbol">GE</span> +1.0 ...
</div>
```

위와 같은 종류의 오류를 방지하려면 특정 선택자에 대해 규칙을 한 번만 정의하고 해당 선택자에 속하는 모든 규칙을 그룹화 하는 것이 좋다.

### 프로퍼티(property) 축약형의 사용

Using shorthand properties for defining style rules is good because it uses a very compact syntax. Using shorthand with only some attributes is possible and correct, but it must be remembered that undeclared attributes are automatically reset to default. This means that a previous rule for a single attribute could be implicitly overridden.

```
#stockTicker { font-size: 12px; font-family: Verdana; font-weight: bold; }
.stockSymbol { font: 14px Arial; color: red; }

<div id="stockTicker">
   NYS: <span class="stockSymbol">GE</span> +1.0 ...
</div>
```

In the previous example the problem occurred on rules belonging to different elements, but it could happen also for the same element, because rule order **is** important.

```
#stockTicker {
   font-weight: bold;
   font: 12px Verdana;  /* font-weight is now normal */
}
```

### \* 셀렉터(selector)의 사용

\* 와일드카드 셀렉터는 모든 엘리먼트에 적용되고, 이것은 특별히 주의를 기울여 사용해야 한다.

```
body * { font-weight: normal; }
#stockTicker { font: 12px Verdana; }
.corpName { font-weight: bold; }
.stockUp { color: red; }

<div id="section">
   NYS: <span class="corpName"><span class="stockUp">GE</span></span> +1.0 ...
</div>
```

In this example the `body *` selector applies the rule to all elements inside body, at any hierarchy level, including the .stockUp class. So `font-weight: bold;` applied to the .corpName class is overridden by `font-weight: normal;` applied to all elements in the body.

The use of the \* selector should be minimized as it is a slow selector, especially when not used as the first element of a selector. Its use should be avoided as much as possible.

### CSS의 특수성

When multiples rules apply to a certain element, the rule chosen depends on its style [specificity](/ko/docs/CSS/Specificity). Inline style (in HTML `style` attributes) comes first, followed by ID selectors, then class selectors and eventually element-name selectors.

```
div { color: black; }
#orange { color: orange; }
.green { color: green; }

<div id="orange" class="green" style="color: red;">This is red</div>
```

The rules are more complicated when the selector has multiple parts. More detailed information about how selector specificity is calculated can be found in the [CSS 2.1 Specification chapter 6.4.3](http://www.w3.org/TR/CSS21/cascade.html#specificity).

## -moz-\*, -ms-\*, -webkit-\*, -o-\* and -khtml-\* 프로퍼티(property)들이 하는 것은?

These properties, called _prefixed properties_, are extensions to the CSS standard. They are used to use experimental and non-standard features without polluting the regular namespace, preventing future incompatibilities to arise when the standard is extended.

The use of such properties on production websites is not recommended. If nevertheless needed, you are hinted to make a plan for the website evolution: these prefixed properties can be modified or even suppressed when the standard evolves.

Please see the [Mozilla CSS Extensions](/ko/docs/CSS/CSS_Reference/Mozilla_Extensions) page for more information on the Mozilla-prefixed CSS properties.

## z-index는 어떻게 포지셔닝을 하는가?

The z-index property specifies the stack order of elements.

An element with a higher z-index/stack order is always in front of an element with a lower z-index/stack order.

Z-index will only work on elements that have a specified position (`position:absolute`, `position:relative`, or `position:fixed`).
