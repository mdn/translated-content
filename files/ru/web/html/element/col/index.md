---
title: "<col>: элемент столбца таблицы"
slug: Web/HTML/Element/col
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

Элемент **`<col>`** [HTML](/ru/docs/Web/HTML) определяет столбец в таблице и используется для определения общей семантики для всех общих ячеек. Обычно он находится внутри элемента {{HTMLElement("colgroup")}}.

{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}

`<col>` позволяет стилизовать столбцы с помощью CSS, но не все свойства будут влиять на столбец ([смотри спецификацию CSS 2.1](https://www.w3.org/TR/CSS21/tables.html#columns) для получения списка).

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- `span`
  - : Этот атрибут содержит целое положительное число, указывающее количество последовательных столбцов, которые заполняет элемент `<col>`. Если он отсутствует, то его значение по умолчанию равно "1".

### Устаревшие атрибуты

Следующие атрибуты устарели и не должны использоваться. Они задокументированы ниже для справки при обновлении существующего кода и исключительно для исторического интереса.

- `align` {{deprecated_inline}}

  - : Этот атрибут [enumerated](/ru/docs/Glossary/Enumerated) указывает, как будет обрабатываться выравнивание содержимого ячейки каждого столбца по горизонтали. Возможными значениями являются:

    - `left`, выравнивание содержимого по левому краю ячейки
    - `center`, выравнивание содержимого по центру ячейки
    - `right`, выравнивание содержимого по правому краю ячейки
    - `justify`, добавляет пробелы в текстовое содержимое так, чтобы содержимое было выровнено по ширине ячейки

    If this attribute is not set, its value is inherited from the [`align`](/ru/docs/Web/HTML/Element/colgroup#align) of the {{HTMLElement("colgroup")}} element this `<col>` element belongs too. If there are none, the `left` value is assumed.

    > [!NOTE]
    > Чтобы достичь того же эффекта, что и значения `left`, `center`, `right` или `justify`, не пытайтесь установить свойство {{cssxref("text-align")}} для селектора, задающего элемент `<col>`. Поскольку элементы {{HTMLElement("td")}} не являются потомками элемента `<col>`, они не унаследуют его.
    >
    > Если таблица не использует атрибут [`colspan`](/ru/docs/Web/HTML/Element/td#colspan), используйте CSS-селектор `td:n-й дочерний элемент(an+b)`. Установите `a` равным нулю, а `b` - положению столбца в таблице, например `td:nth-child(2) { text-align: right; }`, чтобы выровнять второй столбец по правому краю.
    >
    > Если таблица использует атрибут [`colspan`](/ru/docs/Web/HTML/Element/td#colspan), эффект может быть достигнут путем объединения соответствующих селекторов атрибутов CSS, таких как `[colspan=n]`, хотя это и не тривиально.

- `bgcolor` {{Deprecated_inline}}

  - : Задний фон таблицы. Это [6-значный шестнадцатеричный RGB-код](/ru/docs/Web/CSS/hex-color) с префиксом "#`. Также можно использовать одно из предопределенных [цветовых ключевых слов](/ru/docs/Web/CSS/color_value#named_colors).

  Чтобы добиться аналогичного эффекта, используйте свойство CSS {{cssxref("background-color")}}.

- `char` {{deprecated_inline}}
  - : Этот атрибут используется для установки символа, по которому будут выравниваться ячейки в столбце. Типичные значения для этого включают точку (.) при попытке выровнять числа или денежные значения. Если для [`align`](#align) не задано значение `char`, этот атрибут игнорируется.
- `charoff` {{deprecated_inline}}
  - : Этот атрибут используется для указания количества символов для смещения данных столбца по сравнению с символами выравнивания, указанными атрибутом `char`.
- `valign` {{deprecated_inline}}

  - : Этот атрибут определяет выравнивание текста по вертикали в каждой ячейке столбца. Возможными значениями для этого атрибута являются:

    - `baseline`, располагает текст как можно ближе к нижней части ячейки, но выровняет его по [базовой линии](https://en.wikipedia.org/wiki/Baseline_%28typography%29) символов вместо их нижней части. Если все символы имеют одинаковый размер, это имеет тот же эффект, что и `нижний`.
    - `bottom`, помещает текст как можно ближе к нижней части ячейки, насколько это возможно;
    - `middle`, помещает текст по центру ячейки
    - и `top`, помещает текст как можно ближе к верхней части ячейки, насколько это возможно;

    > [!NOTE]
    > Не пытайтесь установить свойство {{cssxref("выравнивание по вертикали")}} для селектора, дающего элемент `<col>`. Поскольку элементы {{HTMLElement("td")}} не являются потомками элемента `<col>`, они не унаследуют его.
    >
    > Если таблица не использует атрибут [`colspan`](/ru/docs/Web/HTML/Element/td#colspan), используйте CSS-селектор `td:nth-child(an+b)`, где 'a' - общее количество столбцов в таблице, а 'b' - порядковый номер положение столбца в таблице. Только после этого выбора можно использовать свойство `выравнивание по вертикали`.
    >
    > Если таблица действительно использует атрибут [`colspan`](/ru/docs/Web/HTML/Element/td#colspan), эффект может быть достигнут путем объединения соответствующих селекторов атрибутов CSS, таких как `[colspan=n]`, хотя это и не тривиально.

- `width` {{deprecated_inline}}
  - : Этот атрибут определяет ширину по умолчанию для каждого столбца в текущей группе столбцов. В дополнение к стандартным значениям в пикселях и процентах, этот атрибут может принимать специальную форму `0*`, что означает, что ширина каждого столбца в группе должна быть минимальной шириной, необходимой для размещения содержимого столбца. Также можно использовать относительную ширину, такую как "5\*".

## Примеры

Please see the {{HTMLElement("table")}} page for examples on `<col>`.

## Техническое резюме

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ru/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>It must have start tag, but must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        {{HTMLElement("colgroup")}} only, though it can be implicitly
        defined as its start tag is not mandatory. The
        {{HTMLElement("colgroup")}} must not have a
        <a href="/ru/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> attribute.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTableColElement")}}</td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Свойства CSS и псевдоклассы, которые могут быть особенно полезны для оформления элемента `<col>`:

  - свойство {{cssxref("width")}} позволяет контролировать ширину колонок;
  - псевдо-селектор {{cssxref(":nth-child")}} чтобы задать стили определенным ячейкам;
  - свойство {{cssxref("text-align")}} для выравнивания текста внутри ячейки.
