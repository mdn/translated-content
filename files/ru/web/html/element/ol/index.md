---
title: "<ol>: The Ordered List element"
slug: Web/HTML/Element/ol
---

{{HTMLSidebar}}

**HTML-элемент `<ol>`** используется для упорядоченного списка — в частности для пронумерованного списка.

{{EmbedInteractiveExample("pages/tabbed/ol.html", "tabbed-shorter")}}

| [Категории контента](/ru/docs/HTML/Content_categories) | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Flow_content), и если дочерний элемент `<ol>` включает в себя хотя бы один элемент {{HTMLElement("li")}}, [явный контент](/ru/docs/Web/Guide/HTML/Content_categories#Palpable_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                  | Ноль или больше {{HTMLElement("li")}} элементов, которые, в свою очередь, содержат вложенные элементы {{ HTMLElement("ol") }} или {{ HTMLElement("ul") }}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Пропуск тегов                                          | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Допустимые родители                                    | Любой элемент, который принимает [основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Flow_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Допустимые ARIA-роли                                   | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/directory_role">directory</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/listbox_role">listbox</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/menu_role">menu</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/menubar_role">menubar</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/radiogroup_role">radiogroup</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/tablist_role">tablist</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/toolbar_role">toolbar</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/tree_role">tree</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code> |
| DOM-интерфейс                                          | {{DOMxRef("HTMLOListElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Свойства

Этот элемент включает [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

- {{HTMLAttrDef("reversed")}}
  - : Атрибут логического значения (bool) показывает, что предметы указаны по списку в обратном порядке. Пункты в списке будут пронумерованы от большего к меньшему.
- {{HTMLAttrDef("start")}}
  - : Нумерация начнётся с указанного числа. Арабскими цифрами (1, 2, 3, и т.д.), даже когда нумерация `type` в буквах или Римском исчислении. Например, чтобы начать нумерацию с буквы "г" или Римской "iv", используйте `start="4"`.
- {{HTMLAttrDef("type")}}
  - : Задаёт тип нумерации:
    - `a` для строчных букв
    - `A` для заглавных букв
    - `i` для строчной Римской нумерации
    - `I` для заглавной Римской нумерации
    - `1` для цифр (по умолчанию)указанный тип используется для всего списка, если только не указан любой другой атрибут [`type`](/ru/docs/Web/HTML/Element/li#type) в элементе {{HTMLElement("li")}}.
      > **Примечание:** Если тип цифр в списке не имеет значения (к примеру, юридические или технические документы, где элементы обозначены буквами/цифрами), используйте свойство CSS {{CSSxRef("list-style-type")}}.

## Примечания об использовании

Обычно, элементы списка отображены с [маркером](/ru/docs/Web/CSS/::marker), предшествующим цифрам или буквам.

`Элементы <ol>` и {{HTMLElement("ul")}} могут быть вложены (nested) на любом уровне, чередуясь между элементами `<ol>` и `<ul>`.

Оба элемента `<ol>` и {{HTMLElement("ul")}} используются для списков. Различие лишь в том, что в элементе `<ol>` порядок имеет значение, как в данных примерах:

- Инструкции рецепта
- Направление по заданному маршруту
- Список ингредиентов на информации о питании, в убывающих пропорциях.

Чтобы определить, каким списком пользоваться, можно поменять порядок элементов с списке.Если значение меняется, используйте элемент `<ol>` — в противном случае {{HTMLElement("ul")}}.

## Примеры

### Обычный список

```html
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

Результат HTML кода выше:

{{EmbedLiveSample("Обычный_список", 400, 100)}}

### Список с Римскими числами

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Greivances</li>
  <li>Conclusion</li>
</ol>
```

Результат HTML кода выше:

{{EmbedLiveSample("Список_с_Римскими_числами", 400, 100)}}

### Используя свойство `start`

```html
<p>Finishing places of contestants not in the winners’ circle:</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin’ Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

Результат HTML кода выше:

{{EmbedLiveSample("Используя_свойство_start", 400, 100)}}

### Вложенный список

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag not here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>
```

Результат HTML кода выше:

{{EmbedLiveSample("Вложенный_список", 400, 150)}}

### Неупорядоченный список внутри упорядоченного списка

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag not here! -->
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ul>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>
```

Результат HTML кода выше:

{{EmbedLiveSample("Неупорядоченный_список_внутри_упорядоченного_списка", 400, 150)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Другие элементы HTML списка: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS-свойства, которые могут быть полезны для стилизации `<ol>` элемента:

  - свойство {{CSSxRef("list-style")}}, для порядковых показов
  - [CSS счётчики](/ru/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters), для более сложных вложенных списков
  - свойство [line-height](/ru/docs/Web/CSS/line-height), для замены убранного свойства [compact](/ru/docs/Web/HTML/Element/ol#attr-compact)
  - Свойство [margin](/ru/docs/Web/CSS/margin), для контроля отступа в списке
