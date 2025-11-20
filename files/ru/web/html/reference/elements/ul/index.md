---
title: <ul> - элемент «Неупорядоченный список»
slug: Web/HTML/Reference/Elements/ul
---

{{HTMLSidebar}}

HTML-элемент **`<ul>`** используется для неупорядоченного списка, в частности для маркированного списка.

{{InteractiveExample("HTML Demo: &lt;ul&gt;", "tabbed-standard")}}

```html interactive-example
<ul>
  <li>Milk</li>
  <li>
    Cheese
    <ul>
      <li>Blue cheese</li>
      <li>Feta</li>
    </ul>
  </li>
</ul>
```

```css interactive-example
li {
  list-style-type: circle;
}

li li {
  list-style-type: square;
}
```

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | [Основной поток](/ru/docs/Web/HTML/Guides/Content_categories#flow_content), и если дочерний элемент `<ol>` включает в себя хотя бы один элемент {{HTMLElement("li")}}, [явный контент](/ru/docs/Web/HTML/Guides/Content_categories#palpable_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                             | Ноль или больше {{ HTMLElement("li") }} элементов, содержат вложенные элементы {{ HTMLElement("ol") }} или {{ HTMLElement("ul") }}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Пропуск тегов                                                     | Нет, открывающий и закрывающий теги обязательны.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Допустимые родители                                               | Любой элемент, который принимает [основной поток](/ru/docs/Web/HTML/Guides/Content_categories#flow_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Допустимые ARIA-роли                                              | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/directory_role">directory</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/listbox_role">listbox</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/menu_role">menu</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/menubar_role">menubar</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/radiogroup_role">radiogroup</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/tablist_role">tablist</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/toolbar_role">toolbar</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/tree_role">tree</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code> |
| DOM-интерфейс                                                     | {{domxref("HTMLUListElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Свойства

Этот элемент включает [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_inline}}
  - : Атрибут логического значения (bool) говорит о том, что список будет представлен в более компактном стиле. Интерпретация этого атрибута зависит от {{glossary("user agent")}} и не работает со всеми браузерами.
    > [!WARNING]
    > Не используйте этот атрибут, ибо он устаревший и больше не используется, используйте [CSS](/ru/docs/Web/CSS). Для схожего эффекта с `compact`, подойдёт свойство CSS {{cssxref("line-height")}} с значением `80%`.
- `type` {{Deprecated_inline}}
  - : Этот атрибут добавляет маркеры (bullets) в список. Значения установлены под [HTML3.2](/ru/docs/HTML3.2) и переходными на [HTML 4.0/4.01](/ru/docs/HTML4.01) являются:
    - `circle`
    - `disc`
    - `square` Четвёртый маркер задан в интерфейсе WebTV, но не все браузеры смогут его отобразить: `triangle`.Если данный атрибут отсутствует и если атрибут [CSS](/ru/docs/Web/CSS) {{ cssxref("list-style-type") }} не присвоен к данному элементу, пользовательский агент (user agent) выберет маркер в зависимости от вложенного уровня в списке.
      > [!WARNING]
      > Не используйте этот атрибут, ибо он устаревший; используйте свойство [CSS](/ru/docs/Web/CSS) {{ cssxref("list-style-type") }}.

## Примечания по использованию

- Элемент `<ul>` используется для группировки непронумерованных элементов данных, и их последовательность в списке не нужна. Что характерно, непорядочные списки используют маркеры, которые могут быть разных форм (в форме точки, круга или прямоугольной формы). Стиль задаётся не в HTML, а со связанным с ним CSS, используя свойство {{ cssxref("list-style-type") }}.
- Элементы `<ul>` и {{HTMLElement("ol")}} могут быть вложены на любом уровне. Более того, вложенные списки могут чередоваться между `<ol>` и `<ul>` без ограничений.
- Элементы {{ HTMLElement("ol") }} и `<ul>` используются для списков. Различие лишь в том, что в элементе {{ HTMLElement("ol") }} порядок имеет значение. Согласно эмпирической закономерности (или правилу большого пальца), чтобы определить, какую маркировку использовать, попробуйте поменять порядок элементов в списке. Если суть списка меняется, то тогда подойдёт элемент {{ HTMLElement("ol") }}, в противном случае используйте `<ul>`.

## Примеры

### Простой список

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

Результат HTML кода выше:

{{EmbedLiveSample("Простой_список", 400, 100)}}

### Вложенный список

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Закрывающий тег </li> пишем не здесь! -->
    <ul>
      <li>second item first subitem</li>
      <li>
        second item second subitem
        <!-- То же самое для второго вложенного неупорядоченного списка! -->
        <ul>
          <li>second item second subitem first sub-subitem</li>
          <li>second item second subitem second sub-subitem</li>
          <li>second item second subitem third sub-subitem</li>
        </ul>
      </li>
      <!-- Закрывающий тег </li>, который
закрывает третий неупорядоченный список -->
      <li>second item third subitem</li>
    </ul>
    <!-- Вот закрывающий тег </li> -->
  </li>
  <li>third item</li>
</ul>
```

Результат HTML кода выше:

{{EmbedLiveSample("Вложенный_список", 400, 220)}}

### Упорядоченный список внутри неупорядоченного списка

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Закрывающий тег </li> пишем не здесь! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
    <!-- Вот закрывающий тег </li> -->
  </li>
  <li>third item</li>
</ul>
```

Результат HTML кода выше:

{{EmbedLiveSample("Упорядоченный_список_внутри_неупорядоченного_списка", 400, 150)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Остальные списковые HTML-элементы: {{ HTMLElement("ol") }}, {{ HTMLElement("li") }}, {{ HTMLElement("menu") }} и устаревший {{ HTMLElement("dir") }};
- CSS-свойства, которые могут быть полезны для стилизации `<ul>` элементов:
  - свойство [list-style](/ru/docs/Web/CSS/list-style), полезное для выбора способа отображения маркеров,
  - [CSS счётчики](/ru/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), для более сложных вложенных списков,
  - свойство [line-height](/ru/docs/Web/CSS/Reference/Properties/line-height), для замены убранного свойства [`compact`](#compact),
  - свойство [margin](/ru/docs/Web/CSS/Reference/Properties/margin), для контроля отступа в списке.
