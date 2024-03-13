---
title: Common CSS questions
slug: Learn/CSS/Howto/CSS_FAQ
---

## Why doesn't my CSS, which is valid, render correctly?

Браузер использует декларацию `DOCTYPE` чтобы выбрать, как именно отображать документ - в форме, более совместимой с современными стандартами или в форме, которую будут поддерживать старые браузеры. Правильное использование декларации `DOCTYPE` в начале вашего HTML кода повлияет на совместимость с современными стандартами веб браузеров.

У современных браузеров есть два режима отображения веб-страниц:

- _Индивидуальный_: его также называют backwards-compatibility mode, даёт возможность устаревшим страницам отображаться так, как планировал автор, следуя уже не стандартным правилам отображения, которые использовались ещё старыми браузерами. Документы с неполной, некорректной или отсутствующий `DOCTYPE` декларацией или с тем видом `DOCTYPE`, который использовался до 2001 года, будет отображён в индивидуальном режиме.
- _Стандартный_: в этом режиме браузер старается строго следовать стандартам W3C. Ожидается, что современные HTML страницы разработаны для браузеров, следуемых стандартам, и в результате, страницы с современным `DOCTYPE` отображаются уже в стандартом режиме.

Gecko-based browsers, have a third _[Almost Standards Mode](/ru/docs/Mozilla/Gecko_Almost_Standards_Mode))_ that has only a few minor quirks.

The standard `DOCTYPE` declaration that will trigger standards mode is:

```html
<!doctype html>
```

When at all possible, you should just use the above doctype. There are other valid legacy doctypes that will trigger Standards or Almost Standards mode:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## Why doesn't my CSS, which is valid, render at all?

To be applied, a CSS stylesheet must be served with a `text/css` MIME type. If the Web server doesn't serve it with this type, it won't be applied.

## What is the difference between `id` and `class`?

HTML elements can have an id and/or class attribute. The id attribute assigns a name to the element it is applied to, and for valid markup, there can be only one element with that name. The class attribute assigns a class name to the element, and that name can be used on many elements within the page. CSS allows you to apply styles to particular id and/or class names.

Use an id-specific style when you want to restrict the applied styling rules to one specific block or element. This style will only be used by the element with that particular id.

Use a class-specific style when you want to apply the styling rules to many blocks and elements within the page.

Stylesheets with fewer rules are usually more performant. It is therefore recommended to use classes as much as possible, and to reserve the use of id for specific uses (like to connect label and form elements or for styling elements that must be semantically unique).

See [CSS selectors](/ru/docs/CSS/Getting_Started/Selectors)

## How do I restore the default value of a property?

Initially CSS didn't provide a "default" keyword and the only way to restore the default value of a property is to explicitly re-declare that property.

This has changed with CSS 2; the keyword [initial](/es/CSS/initial) is now a valid value for a CSS property. It resets it to its default value, which is defined in the CSS specification of the given property.

## How do I derive one style from another?

CSS does not allow one style to be defined in terms of another. (See [Eric Meyer's note about the Working Group's stance](http://archivist.incutio.com/viewlist/css-discuss/2685)). However, assigning multiple classes to a single element can provide the same effect.

## How do I assign multiple classes to an element?

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

## Why don't my style rules work properly?

Style rules that are syntactically correct may not apply in certain situations. You can use [DOM Inspector](/ru/docs/DOM_Inspector)'s _CSS Style Rules_ view to debug problems of this kind, but the most frequent instances of ignored style rules are listed below.

### HTML elements hierarchy

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

### Explicitly re-defined style rule

In CSS stylesheets, order **is** important. If you define a rule and then you re-define the same rule, the last definition is used.

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

To avoid this kind of error, try to define rules only once for a certain selector, and group all rules belonging to that selector.

### Use of a shorthand property

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

### Use of the `*` selector

The `*` wildcard selector refers to any element, and it has to be used with particular care.

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

### Specificity in CSS

When multiples rules apply to a certain element, the rule chosen depends on its style [specificity](/ru/docs/CSS/Specificity). Inline style (in HTML `style` attributes) comes first, followed by ID selectors, then class selectors and eventually element-name selectors.

```
div { color: black; }
#orange { color: orange; }
.green { color: green; }

<div id="orange" class="green" style="color: red;">This is red</div>
```

The rules are more complicated when the selector has multiple parts. More detailed information about how selector specificity is calculated can be found in the [CSS 2.1 Specification chapter 6.4.3](http://www.w3.org/TR/CSS21/cascade.html#specificity).

## What do the -moz-\*, -ms-\*, -webkit-\*, -o-\* and -khtml-\* properties do?

These properties, called _prefixed properties_, are extensions to the CSS standard. They are used to use experimental and non-standard features without polluting the regular namespace, preventing future incompatibilities to arise when the standard is extended.

The use of such properties on production websites is not recommended. If nevertheless needed, you are hinted to make a plan for the website evolution: these prefixed properties can be modified or even suppressed when the standard evolves.

Please see the [Mozilla CSS Extensions](/ru/docs/CSS/CSS_Reference/Mozilla_Extensions) page for more information on the Mozilla-prefixed CSS properties.

## How does z-index relate to positioning?

The z-index property specifies the stack order of elements.

An element with a higher z-index/stack order is always in front of an element with a lower z-index/stack order.

Z-index will only work on elements that have a specified position (`position:absolute`, `position:relative`, or `position:fixed`).
