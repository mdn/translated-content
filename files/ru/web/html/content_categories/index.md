---
title: Категории контента
slug: Web/HTML/Content_categories
---

Каждый элемент [HTML](/ru/docs/Web/HTML) принадлежит некоторому количеству категорий контента, которые объединяют элементы с общим набором характеристик. Такая группировка является свободной, то есть не задаёт на самом деле отношение между элементами таких типов, но помогает определить и описать их поведение и правила, которым они должны следовать, особенно когда дело доходит до сложных деталей. Также возможна ситуация, когда элемент не входит _ни в одну_ из этих категорий.

Существует три типа категорий контента:

- Основные категории контента, описывающие общие для многих элементов правила;
- Категории контента для элементов форм, описывающие общие правила для элементов форм;
- Особые категории контента, описывающие редкие категории, актуальные только для нескольких элементов, возможно, лишь в особом контексте.

> **Примечание:** Более подробное обсуждение данных категорий контента и их сравнительных особенностей выходит за рамки данной статьи; можно обратиться к [соответствующим разделам спецификации HTML](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) (на английском).

[![Content_categories_venn.png](/@api/deki/files/6244/=Content_categories_venn.png?size=webview)](/@api/deki/files/6244/=Content_categories_venn.png)

## Основные категории контента

### Метаданные

Элементы, принадлежащие к _категории метаданных,_ изменяют отображение или поведение HTML-документа, связывают его с другими документами и предоставляют другую _дополнительную_ информацию о документе.

Элементами метаданных являются: {{HTMLElement("base")}}, {{HTMLElement("command")}}, {{HTMLElement("link")}}, {{HTMLElement("meta")}}, {{HTMLElement("noscript")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} и {{HTMLElement("title")}}.

### Основной поток

Элементы основного потока обычно содержат текст и встроенный контент.

{{HTMLElement("a")}}, {{HTMLElement("abbr")}}, {{HTMLElement("address")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}},{{HTMLElement("bdo")}}, {{HTMLElement("bdi")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("command")}}, {{HTMLElement("data")}}, {{HTMLElement("datalist")}}, {{HTMLElement("del")}}, {{HTMLElement("details")}}, {{HTMLElement("dfn")}}, {{HTMLElement("div")}}, {{HTMLElement("dl")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("figure")}}, {{HTMLElement("footer")}}, {{HTMLElement("form")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("ins")}}, {{HTMLElement("kbd")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("main")}}, {{HTMLElement("map")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("menu")}}, {{HTMLElement("meter")}}, {{HTMLElement("nav")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("ol")}}, {{HTMLElement("output")}}, {{HTMLElement("p")}}, {{HTMLElement("pre")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("section")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("table")}}, {{HTMLElement("template")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("ul")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} и Текст.

Несколько других элементов, которые тоже принадлежат к этому типу, но требуют определённых условий:

- {{HTMLElement("area")}}, только внутри элемента {{HTMLElement("map")}}
- {{HTMLElement("link")}}, при наличии атрибута [`itemprop`](/ru/docs/HTML/Global_attributes#attr-itemprop)
- {{HTMLElement("meta")}}, при наличии атрибута [`itemprop`](/ru/docs/HTML/Global_attributes#attr-itemprop)
- {{HTMLElement("style")}}, при наличии атрибута [`scoped`](/ru/docs/Web/HTML/Element/style#scoped)

### Секционный контент

Подобные элементы создают [секции (блоки) в текущей структуре документа](/ru/docs/Sections_and_Outlines_of_an_HTML5_document), определяющие область действия [заголовочного контента](/ru/docs/Web/Guide/HTML/Content_categories#Заголовочный_контент) и элементов {{HTMLElement("header")}} и {{HTMLElement("footer")}}

К этой категории принадлежат элементы {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} и {{HTMLElement("section")}}.

> **Примечание:** Не стоит путать данную модель контента с категорией [корня задания разделов](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Корни_задания_разделов), которая изолирует своё содержимое от обычной структуры.

### Заголовочный контент

Заголовочный контент задаёт заголовок секции, явно отмеченной структурным элементом или неявно – самим заголовочным.

Данной категории принадлежат такие элементы, как {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}} и {{HTMLElement("hgroup")}}.

> **Примечание:** *Э*лемент {{HTMLElement("header")}} сам по себе не является заголовочным, хотя с большой вероятностью содержит контент такого типа.

> **Примечание:** Стоит заметить, что элемент {{HTMLElement("hgroup")}} был удалён из спецификации W3C HTML до приведения HTML 5 к окончательному варианту, но до сих пор является частью спецификации WHATWG и по крайней мере частично поддерживается большинством браузеров.

### Фразовый контент

Фразовый контент определяет текст и его формат. Серии фразового контента образуют параграфы.

К данной категории принадлежат следующие элементы: {{HTMLElement("abbr")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("command")}}, {{HTMLElement("data")}}, {{HTMLElement("datalist")}}, {{HTMLElement("dfn")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("kbd")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("meter")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} и обычный текст (не только состоящий из символов пробелов).

Ещё несколько элементов входят в данную категорию при соблюдении особых условий:

- {{HTMLElement("a")}}, если содержит в себе только фразовый контент
- {{HTMLElement("area")}}, только внутри элемента {{HTMLElement("map")}}
- {{HTMLElement("del")}}, если содержит в себе только фразовый контент
- {{HTMLElement("ins")}}, если содержит в себе только фразовый контент
- {{HTMLElement("link")}}, при наличии атрибута [`itemprop`](/ru/docs/HTML/Global_attributes#attr-itemprop)
- {{HTMLElement("map")}}, если содержит в себе только фразовый контент
- {{HTMLElement("meta")}}, при наличии атрибута [`itemprop`](/ru/docs/HTML/Global_attributes#attr-itemprop)

### Встроенный контент

Встроенный контент импортирует в документ другой ресурс или вставляет содержимое на другом языке разметки или принадлежащее другому пространству имён. Элементами данной категории являются: {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}}, {{HTMLElement("video")}}.

### Интерактивный контент

К интерактивному контенту относятся элементы, который специально разработаны для взаимодействия с пользователем. В данную категорию входят {{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}} и {{HTMLElement("textarea")}}.
Некоторые элементы считаются интерактивным контентом только при соблюдении определённых условий:

- {{HTMLElement("audio")}}, если указан атрибут [`controls`](/ru/docs/Web/HTML/Element/audio#controls)
- {{HTMLElement("img")}}, если указан атрибут [`usemap`](/ru/docs/Web/HTML/Element/img#usemap)
- {{HTMLElement("input")}}, если атрибут [`type`](/ru/docs/Web/HTML/Element/input#type) не скрыт
- {{HTMLElement("menu")}}, если атрибут [`type`](/ru/docs/Web/HTML/Element/menu#type) имеет значение `toolbar`
- {{HTMLElement("object")}}, если указан атрибут [`usemap`](/ru/docs/Web/HTML/Element/object#usemap)
- {{HTMLElement("video")}}, если указан атрибут [`controls`](/ru/docs/Web/HTML/Element/video#controls)

### Явный контент

Контент считается явным, когда он не скрыт и не является пустым, это контент, который отображён и предметен. У элементов потокового или фразового контента должен быть хотя бы один явный узел.

### Контент форм

Контент форм включает в себя элементы, у которых есть владелец формы, обозначенный атрибутом **form**. Владельцем формы является либо элемент {{HTMLElement("form")}}, либо элемент, id которого указан в атрибуте **form**.

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{deprecated_inline()}}{{HTMLElement("keygen")}}
- {{HTMLElement("label")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Данная категория включает несколько подкатегорий:

- listed
  - : Элементы, перечисленные в IDL коллекциях [form.elements](/ru/docs/DOM/form.elements) и fieldset.elements. Включают {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, и {{HTMLElement("textarea")}}.
- labelable
  - : Элементы, которые могут ассоциироваться с элементами {{HTMLElement("label")}}. Включают {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} и {{HTMLElement("textarea")}}.
- submittable
  - : Элементы, которые могут использоваться для построения набора данных формы при отправке на сервер. Включают {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}} и {{HTMLElement("textarea")}}.
- resettable
  - : Элементы, которые могут быть затронуты при сбросе данных формы. Включают {{HTMLElement("input")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("output")}},{{HTMLElement("select")}} и {{HTMLElement("textarea")}}.

## Вторичные категории

Существуют некоторые вторичные классификации элементов, о которых тоже полезно знать.

### Элементы поддержки скриптов

Элементы поддержки скриптов – это элементы, которые напрямую не влияют на отрисовку документа. Вместо этого они служат для внедрения скриптов, путём либо содержания кода скрипта напрямую, либо указания данных, которые будут использованы скриптами.

Элементами поддержки скриптов являются:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Прозрачная модель контента

Если элемент обладает прозрачной моделью контента, его содержимое должно быть структурировано таким образом, чтобы оно оставалось валидным HTML5, даже при удалении прозрачного элемента или заменой его на дочерние элементы.

Например, элементы {{HTMLElement("del")}} и {{HTMLELement("ins")}} являются прозрачными:

```
<p>Мы почитаем следующие истины <del><em>священными &amp; неоспоримыми</em></del> <ins>само собой разумеющимися</ins>.</p>
```

Если удалить эти элементы, данный фрагмент всё равно будет представлять собой валидный HTML.

```
<p>Мы почитаем следующие истины <em>священными &amp; неоспоримыми</em> само собой разумеющимися.</p>
```

## Прочие модели контента

Корень задания разделов.
