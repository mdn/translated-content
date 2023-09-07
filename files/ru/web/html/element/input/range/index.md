---
title: <input type="range">
slug: Web/HTML/Element/input/range
---

{{HTMLSidebar("Input_types")}}

Элементы {{HTMLElement("input")}} с типом **`range`** позволяют пользователю определить числовое значение, которое должно быть в пределах указанного промежутка. Однако, точное значение должно быть не слишком важно. Обычно они представляет собой слайдер или контроллер, но не текстовое поле как {{HTMLElement('input/number', 'number')}}. Так как этот виджет неточен, его не следует использовать, в случае, если важно установить точное значение .

{{EmbedInteractiveExample("pages/tabbed/input-range.html", "tabbed-standard")}}

Если используемый браузер не поддерживает тип `range`, он будет отображаться как input`{{HTMLElement('input/text', 'text')}}.`

| **[Value](#value)**               | {{domxref("DOMString")}}, содержащий строковое представление выбранного числового значения; используйте {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}} чтобы получить значение {{jsxref("Number")}}.                                           |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **События**                       | {{event("change")}} и {{event("input")}}                                                                                                                                                                                                                       |
| **Поддерживаемые общие атрибуты** | [`autocomplete`](/ru/docs/Web/HTML/Element/input#autocomplete), [`list`](/ru/docs/Web/HTML/Element/input#list), [`max`](/ru/docs/Web/HTML/Element/input#max), [`min`](/ru/docs/Web/HTML/Element/input#min), and [`step`](/ru/docs/Web/HTML/Element/input#step) |
| **IDL атрибуты**                  | `list`, `value`, и `valueAsNumber`                                                                                                                                                                                                                             |
| **Методы**                        | {{domxref("HTMLInputElement.stepDown", "stepDown()")}} и {{domxref("HTMLInputElement.stepUp", "stepUp()")}}                                                                                                                                                    |

### Валидация

Для этого поля нет доступного паттерна валидации, но следующая валидация реализованы следующие проверки

- Если значение [`value`](/ru/docs/Web/HTML/Element/input#value) содержит что-то что не может быть конвертированно в число с плавающей точкой, произойдёт ошибка некорректного ввода.
- Значение не может быть меньше чем [`min`](/ru/docs/Web/HTML/Element/input#min). По умолчанию: 0.
- Значение не может быть больше чем [`max`](/ru/docs/Web/HTML/Element/input#max). По умолчанию: 100.
- Значение должно кратно [`step`](/ru/docs/Web/HTML/Element/input#step). По умолчанию: 1.

Атрибут [`value`](/ru/docs/Web/HTML/Element/input#value) содержит {{domxref("DOMString")}}, который содержит строковое представление выбранного числа. Значение никогда не является пустой строкой (`""`). Значение, по умолчанию, находится посередине, между указанными минимальным и максимальным значениями — если максимум оказывается меньше минимума, то значение по умолчанию приравнивается к значению атрибута `min`. Алгоритм определения значения по умолчанию:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Если предпринята попытка установить значение меньше минимального, то оно примет значение атрибута min. Аналогично, попытка установить значение больше максимального, приведёт к установлению значения равного атрибуту max.

## Дополнительные атрибуты

В дополнение к атрибутам, общим для всех элементов {{HTMLElement("input")}}, range инпуты предлагают следующие атрибуты:

| Attribute       | Description                                                                           |
| --------------- | ------------------------------------------------------------------------------------- |
| [`list`](#list) | id элемента `<datalist>`, который содержит предопределённые значение (не обязательно) |
| [`max`](#max)   | Максимальное допустимое значение                                                      |
| [`min`](#min)   | Минимальное допустимое значение                                                       |
| [`step`](#step) | Шаговый, используемый для пользовательского интерфейса и для проверки                 |

{{page("/en-US/docs/Web/HTML/Element/input/text", "list", 0, 1, 2)}}

Смотрите [управление диапазоном с помощью решётки](/ru/docs/Web/HTML/Element/Input/range#A_range_control_with_hash_marks) ниже, для примера того, как параметры диапазона обозначаются в поддерживаемых браузерах.

### {{htmlattrdef("max")}}

Это значение должно быть больше или равно значению атрибута `min`.

### {{htmlattrdef("min")}}

Наименьшее значение в диапазоне допустимых значений. Если [`value`](/ru/docs/Web/HTML/Element/input#value), введённый в элемент, меньше этого значения, то элемент не проходит [проверку ограничения](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation). Если значение атрибута `min` не является числом, то элемент не имеет максимального значения.

Это значение должно быть меньше или равно значению атрибута `max`.

### {{htmlattrdef("step")}}

{{page("/en-US/docs/Web/HTML/Element/input/number", "step-include")}}

По умолчанию шаг для инпута с типом `range` равен 1, допустим ввод только целых чисел, _если_ база шага не является целым; например, если вы установили `min` на -10 и `value` на 1.5, то `step` 1 позволит только такие значения как 1.5, 2.5, 3.5,... в положительном направлении и -0.5, -1.5, -2.5,... в отрицательном направлении.

### Не стандартные атрибуты

| Attribute           | Description                                          |
| ------------------- | ---------------------------------------------------- |
| [`orient`](#orient) | Устанавливает ориентацию слайдера. **Firefox only.** |

- {{htmlattrdef("orient")}} {{non-standard_inline}}
  - : Похоже на -moz-orient не стандартное CSS-свойство влияющее на {{htmlelement('progress')}} и{{htmlelement('meter')}} элементы, `orient` атрибут определяем ориентацию слайдера. Значение `horizontal`, значит что слайдер будет отображён горизонтально, а `vertical`- что вертикально .

> **Примечание:** Note: Следующие атрибуты не применимы: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size`, `src`, и `width`. Каждый из них будет проигнорирован в случае употребления.

## Examples

Пока тип `number` позволяет пользователям вводить число с дополнительными ограничениями, заставляя их значения находиться между максимальным и минимальным, он требует, чтобы они вводили определённое значение. Инпут с типом `range` позволяет вам запрашивать у пользователя значение в тех случаях, когда пользователь не может даже знать - каково выбранное конкретное числовое значение.

Несколько примеров основный ситуаций, в которых инпуты с range используются:

- Аудио-контроллеры громкости и баланса, или контроллеры фильтра.
- Контроллеры настройки цвета, такие как цветовые каналы, прозрачность, яркость, и т.д.
- Контроллеры игровой настройки, такие как сложность, дальность видимости, размер мира и т.д.
- Длина пароля для сгенерированных паролей менеджера паролей.

Как правило, если пользователь в большей степени интересуется процентным значением между минимумом и максимумом, нежели реальным значением, range инпут является отличным решением. Например, в случае с контролем громкости домашнего стерео, обычно пользователь думает "установить громкости наполовину максимума" вместо "установить громкость на 0.5".

### Указание минимума и максимума

По умолчанию, минимум равен 0, а максимум равен 100. Если вас это не устраивает, вы можете с лёгкостью указать другие границы, изменив значения атрибутов [`min`](/ru/docs/Web/HTML/Element/input#min) и/или [`max`](/ru/docs/Web/HTML/Element/input#max). Они могут быть принимать любые значения с плавающей точкой.

Например, указать диапазон значений между -10 и 10, вы можете, используя:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Указание_минимума_и_максимума", 600, 40)}}

### Настройка детализации значения

По умолчанию, степень детализации равна 1, тем самым показывая, что значение всегда является целым числом. Вы можете изменить атрибут [`step`](/ru/docs/Web/HTML/Global_attributes#step) контроля степени детализации. Например, если вам нужно значение между 5 и 10, с точностью до двух знаков после запятой, вы должны установить значение `step` на 0.01:

```html
<input type="range" min="5" max="10" step="0.01" />
```

{{EmbedLiveSample("Granularity_sample1", 600, 40)}}

Если вы хотите принять любое значение, независимо от разрядности, вы можете указать значение `any` для атрибута [`step`](/ru/docs/Web/HTML/Element/input#step):

```html
<input type="range" min="0" max="3.14" step="any" />
```

{{EmbedLiveSample("Granularity_sample2", 600, 40)}}

Этот пример позволяет пользователю выбрать любое значение между 0 и π без ограничений на разрядность.

### Добавление хэш-меток и лейблов

Спецификация HTML даёт браузерам некоторую гибкость при представлении диапазонных контроллеров. Нигде эта гибкость не проявляется больше, чем в области хэш-меток и, в меньшей степени, лейблов. Спецификация описывает как добавлять кастомные точки контроллера диапазона, используя атрибут [`list`](/ru/docs/Web/HTML/Element/input#list) и элемент {{HTMLElement("datalist")}}, но не имеет требований или рекомендаций по стандартизации хэш-меток и лейблов по длине контроллера.

#### Макеты контроллера диапазона

Так как браузеры имеют эту гибкость, и на сегодняшний день ни один из них не поддерживает все возможности, определённые HTML, представляем несколько макетов, показывающих как вы можете получить на macOS в браузере, который их поддерживает.

##### Недекорированный контроллер диапазона

Этот результат вы получите, если не укажите атрибут [`list`](/ru/docs/Web/HTML/Element/input#list), или браузер не будет его поддерживать.

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Screenshot</th>
    </tr>
    <tr>
      <td><pre class="brush: html">&#x3C;input type="range"></pre></td>
      <td>
        <img
          alt="Screenshot of a plain slider control on macOS"
          src="macslider-plain.png"
          style="height: 28px; width: 184px"
        />
      </td>
    </tr>
  </tbody>
</table>

##### Контроллер диапазона с хэш-метками

Контроллер диапазона, использующий атрибут `list`, указывающий ID {{HTMLElement("datalist")}}, который определяет серию хэш-меток на контроллере. Их одиннадцать, одна на 0% и на каждой отметки 10%. Каждая точка представлена с помощью элемента {{HTMLElement("option")}} с его набором [`value`](/ru/docs/Web/HTML/Element/option#value) значений диапазона, при котором должна быть нарисована метка.

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Screenshot</th>
    </tr>
    <tr>
      <td>
        <pre class="brush: html">
&#x3C;input type="range" list="tickmarks">

&#x3C;datalist id="tickmarks">
&#x3C;option value="0">
&#x3C;option value="10">
&#x3C;option value="20">
&#x3C;option value="30">
&#x3C;option value="40">
&#x3C;option value="50">
&#x3C;option value="60">
&#x3C;option value="70">
&#x3C;option value="80">
&#x3C;option value="90">
&#x3C;option value="100">
&#x3C;/datalist>

</pre
        >
      </td>
      <td>
        <img
          alt="Screenshot of a plain slider control on macOS"
          src="macslider-ticks.png"
          style="height: 28px; width: 184px"
        />
      </td>
    </tr>
  </tbody>
</table>

##### Контроллер диапазона с хэш-метками и лейблами

Вы можете добавить лейблы в свой контроллер диапазонов, добавив атрибут [`label`](/ru/docs/Web/HTML/Element/option#label) элементам {{HTMLElement("option")}}, соответствующим значениям, на которых вы бы хотели видеть лейблы.

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Screenshot</th>
    </tr>
    <tr>
      <td>
        <pre class="brush: html">
&#x3C;input type="range" list="tickmarks">

&#x3C;datalist id="tickmarks">
&#x3C;option value="0" label="0%">
&#x3C;option value="10">
&#x3C;option value="20">
&#x3C;option value="30">
&#x3C;option value="40">
&#x3C;option value="50" label="50%">
&#x3C;option value="60">
&#x3C;option value="70">
&#x3C;option value="80">
&#x3C;option value="90">
&#x3C;option value="100" label="100%">
&#x3C;/datalist>

</pre
        >
      </td>
      <td>
        <img
          alt="Screenshot of a plain slider control on macOS"
          src="macslider-labels.png"
          style="height: 44px; width: 184px"
        />
      </td>
    </tr>
  </tbody>
</table>

> **Примечание:** В настоящее время ни один браузер полностью не поддерживает эти возможности. Firefox не поддерживает хэш-метки и лейблы, например, в то время как Chrome поддерживает хэш-метки, но не поддерживает лейблы. Версия 66 (66.0.3359.181) Chrome поддерживает лейблы, но тэг {{htmlelement("datalist")}} должен быть стилизован с помощью CSS, так как его свойство {{cssxref("display")}} по умолчанию - `none`, тем самым скрывая лейблы.

### Изменение ориентации

По умолчанию, если браузер отображает инпут диапазона как слайдер, он отобразит его так чтоб ползунок ездил в право и в лево. Когда поддержка браузерами будет реализовано, можно будет делать слайдер вертикальным, так чтобы ползунок мог ездить вверх и вниз. Ни один из наиболее используемых браузеров не имплементировал это пока. (Firefox {{bug(981916)}}, [Chrome bug 341071](https://bugs.chromium.org/p/chromium/issues/detail?id=341071)). также, возможно, [следующий баг под вопросом](https://github.com/whatwg/html/issues/4177).

В реальности, мы можем сделать слайдер вертикальным используя CSS трансформации, или применяя уникальный метод для каждого браузера в отдельности, включая: настройки {{cssxref('appearance')}} для `slider-vertical`, использование нестандартной ориентации `orient` в Firefox,или изменение text direction для Internet Explorer и Edge

Рассмотрим контроллер диапазона:

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1" />
```

{{EmbedLiveSample("Orientation_sample1", 200, 200, "orientation_sample1.png")}}

Это горизонтальный контроллер (по крайне мере на большинстве основных браузеров, другие могут отличаться).

### Standards

Следуя спецификации, сделать его вертикальным также просто как добавить CSS, чтобы изменить размеры контроллера, чтобы его высота оказалась больше ширины:

#### CSS

```css
#volume {
  height: 150px;
  width: 50px;
}
```

#### HTML

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1" />
```

#### Результат

{{EmbedLiveSample("Orientation_sample2", 200, 200, "orientation_sample2.png")}}

К сожалению, большинство браузеров сейчас не поддерживают вертикальные контроллы напрямую.

### transform: rotate(-90deg)

Но вы, всё же, можете сделать вертикальный контролл используя горизонтальный контролл. Самый простой способ - использовать CSS: применяя {{cssxref("transform")}} для поворота элемента на 90 градусов. Посмотрим:

#### HTML

В HTML нужно добавить обёртку вокруг {{HTMLElement("input")}} - {{HTMLElement("div")}}, что позволит нам исправить макет после выполнения трансформации (т.к. трансформация автоматически не влияет на макет страницы):

```html
<div class="slider-wrapper">
  <input type="range" min="0" max="11" value="7" step="1" />
</div>
```

#### CSS

Теперь нам нужно немного CSS. Во-первых, это CSS для самой обёртки; это указание дисплея и размеров для правильного расположения на странице; по сути, он резервирует область страницы для слайдера, так, чтобы можно было поместить повёрнутый слайдер в зарезервированном пространстве, не создавая беспорядка.

```css
.slider-wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
}
```

Затем информация о стиле элемента `<input>` в зарезервированном пространстве:

```css
.slider-wrapper input {
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
}
```

Размеры контроллера это набор из 150 пикселей длины и 20 пикселей высоты. Маржинги установлены на 0 и {{cssxref("transform-origin")}} смещается в середину пространства, на котором вращается слайдер; поскольку слайдер имеет ширину 150 пикселей, он вращается через прямоугольник по 150 пикселей с каждой стороны. Смещение начала координат на 75px по каждой оси означает, что мы будем вращаться вокруг центра этого пространства. Наконец, мы поворачиваем против часовой стрелки на 90°. Результат: инпут range, который вращается таким образом, что максимальное значение находится сверху, а минимальное снизу.

{{EmbedLiveSample("Orientation_sample3", 200, 200, "orientation_sample3.png")}}

### appearance property

Свойство {{cssxref('appearance')}} имеет нестандартное значение `slider-vertical` , которое делает слайдер вертикальным.

#### HTML

Используем тот же HTML что и в предыдущем примере:

```html
<input type="range" min="0" max="11" value="7" step="1" />
```

#### CSS

Берём только те инпуты что имеют тип range:

```css
input[type="range"] {
  -webkit-appearance: slider-vertical;
}
```

{{EmbedLiveSample("appearance_property", 200, 200)}}

### orient attribute

В Firefox, реализовано нестандартное свойство `orient`.

#### HTML

Используем тот же HTML что и в предыдущем примере и добавляем атрибут со значением `vertical`:

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical" />
```

{{EmbedLiveSample("orient_attribute", 200, 200)}}

### writing-mode: bt-lr

Свойство {{cssxref('writing-mode')}} может быть использовано для специальных эффектов

#### HTML

Используем тот же HTML что и в предыдущем примере:

```html
<input type="range" min="0" max="11" value="7" step="1" />
```

#### CSS

Берём только те инпуты что имеют тип range, меняем writing mode с default на `bt-lr`, или bottom-to-top и left-to-right:

```css
input[type="range"] {
  writing-mode: bt-lr;
}
```

{{EmbedLiveSample("writing-mode_bt-lr", 200, 200)}}

### Все вместе

Каждый из вышеперечисленных примеров работает в своём браузере, мы попробуем объединить все вместе чтоб добиться кроссбраузерности решения:

#### HTML

Оставим `orient` атрибут со значением `vertical` для Firefox:

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical" />
```

#### CSS

Берём только те инпуты что имеют тип range, меняем writing mode с default на `bt-lr`, или bottom-to-top и left-to-right, для Edge и Internet Explorer, и добавляем `-webkit-appearance: slider-vertical` для всех -webkit-based браузеров:

```css
input[type="range"] {
  writing-mode: bt-lr;
  -webkit-appearance: slider-vertical;
}
```

{{EmbedLiveSample("Все_вместе", 200, 200)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [HTML Forms](/ru/docs/Learn/HTML/Forms)
- {{HTMLElement("input")}} и интерфейс {{domxref("HTMLInputElement")}}, на котором он основан
- [`<input type="number">`](/ru/docs/Web/HTML/Element/input/number)
- {{domxref('validityState.rangeOverflow')}} и{{domxref('validityState.rangeUnderflow')}}
- [Controlling multiple parameters with ConstantSourceNode](/ru/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Styling the range element](https://css-tricks.com/sliding-nightmare-understanding-range-input)
- [Compatibility of CSS properties](/ru/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
