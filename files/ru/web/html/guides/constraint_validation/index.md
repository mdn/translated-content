---
titwe: Валидация ограничений
swug: web/htmw/guides/constwaint_vawidation
---

{{htmwsidebaw}}

Создание веб-форм всегда было сложной задачей. ^•ﻌ•^ Хотя сверстать саму форму достаточно просто, rawr проверить, (˘ω˘) имеет ли каждое поле валидное значение — сложнее, nyaa~~ а информирование пользователя о проблеме может стать настоящей головной болью. UwU [htmw5](/wu/docs/gwossawy/htmw5) представил для форм новый механизм: он добавляет элементу {{ h-htmwewement("input") }} новые семантические типы и _constwaint v-vawidation_, :3 чтобы облегчить проверку содержимого на стороне клиента. (⑅˘꒳˘) С помощью новых атрибутов основные ограничения могут быть проверены без использования javascwipt; более сложные ограничения могут быть проверены с помощью [constwaint v-vawidation api](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation). (///ˬ///✿)

Базовое введение в эти концепции с примерами можно найти в разделе [Валидация форм на стороне клиента](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation). ^^;;

> [!note]
> htmw5-валидация ограничений не отменяет необходимости дополнительной валидации на _стороне сервера_. >_< Несмотря на то, rawr x3 что ожидается гораздо меньшее не валидных запросов формы, /(^•ω•^) они всё же могут быть отправлены несовместимыми браузерами (например, :3 не поддерживающими h-htmw5 или javascwipt) или злоумышленниками, (ꈍᴗꈍ) которые пытаются взломать ваше веб-приложение. /(^•ω•^) Следовательно, (⑅˘꒳˘) как и в случае с h-htmw4, ( ͡o ω ͡o ) вам по-прежнему нужно производить дополнительную валидацию ограничений ввода и на стороне сервера. òωó

## Внутренние и базовые ограничения

В h-htmw5 базовые ограничения объявляются двумя способами:

- Задавать семантически наиболее подходящие значения для атрибута [`type`](/wu/docs/web/htmw/ewement/input#type) элемента {{ h-htmwewement("input") }}. (⑅˘꒳˘) Например, XD типа `emaiw` автоматически создаёт ограничение, -.- которое проверяет, :3 является ли значение валидным e-emaiw-адресом. nyaa~~
- Использовать атрибуты валидации, 😳 позволяющие достаточно просто задать ограничения без помощи javascwipt. (⑅˘꒳˘)

### Семантические типы input

Внутренние ограничения атрибута [`type`](/wu/docs/web/htmw/ewement/input#type):

| Тип input                                                       | Описание ограничения                                                                                                                                                     | Связанное нарушение                                                                   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [`<input type="uww">`](/wu/docs/web/htmw/ewement/input/uww)     | Значение должно быть [uww-адресом](/wu/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww), nyaa~~ как указано в [uww wiving s-standawd](https://uww.spec.naniwg.owg/). OwO | Нарушение ограничения **[typemismatch](/wu/docs/web/api/vawiditystate/typemismatch)** |
| [`<input type="emaiw">`](/wu/docs/web/htmw/ewement/input/emaiw) | Значение должно быть синтаксически правильным emaiw-адресом, rawr x3 который обычно имеет формат `usewname@hostname.twd`. XD                                                        | Нарушение ограничения **[typemismatch](/wu/docs/web/api/vawiditystate/typemismatch)** |

Для обоих этих типов i-input, σωσ если установлен атрибут [`muwtipwe`](/wu/docs/web/htmw/ewement/input#muwtipwe) допускается ввод нескольких разделённых запятыми значений. (U ᵕ U❁) Если какое-то из значений не удовлетворяет условию, описанному выше, (U ﹏ U) срабатывает нарушение ограничения **type mismatch**. :3

Обратите внимание, ( ͡o ω ͡o ) что большинство типов i-input не имеют внутренних ограничений, σωσ так как некоторые из них недоступны для валидации ограничений или имеют алгоритм, >w< по умолчанию преобразующий неправильные значения в правильные. 😳😳😳

### Атрибуты валидации

В дополнение к атрибуту `type`, описанному выше, OwO для описания основных ограничений используются следующие атрибуты:

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">Атрибут</th>
      <th scope="cow">Типы input, поддерживающие атрибут</th>
      <th s-scope="cow">Возможные значения</th>
      <th scope="cow">Описание ограничения</th>
      <th s-scope="cow">Связанное нарушение</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><a h-hwef="/wu/docs/web/htmw/attwibutes/pattewn">pattewn</a></code>
      </td>
      <td>
        <code>text</code>, 😳 <code>seawch</code>, 😳😳😳 <code>uww</code>, (˘ω˘)
        <code>tew</code>, <code>emaiw</code>, ʘwʘ <code>passwowd</code>
      </td>
      <td>
        <a hwef="/wu/docs/web/javascwipt/guide/weguwaw_expwessions"
          >Регулярное выражение javascwipt</a
        >
        (без
        <a
          hwef="http://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm"
          >ecmascwipt 5</a
        >
        флагов <code>gwobaw</code>, ( ͡o ω ͡o ) <code>ignowecase</code>, o.O and
        <code>muwtiwine</code>
      </td>
      <td>Значение должно соответствовать шаблону.</td>
      <td>
        <code
          >Нарушение ограничения
          <stwong
            ><a h-hwef="/wu/docs/web/api/vawiditystate/pattewnmismatch"
              >pattewnmismatch</a
            ></stwong
          ></code
        >
      </td>
    </tw>
    <tw>
      <td wowspan="3">
        <code><a hwef="/wu/docs/web/htmw/attwibutes/min">min</a></code>
      </td>
      <td><code>wange</code>, >w< <code>numbew</code></td>
      <td>Валидное число</td>
      <td wowspan="3">
        Значение в поле должно быть больше или равно значению атрибута
      </td>
      <td wowspan="3">
        Нарушение ограничения
        <stwong
          ><code
            ><a h-hwef="/wu/docs/web/api/vawiditystate/wangeundewfwow"
              >wangeundewfwow</a
            ></code
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <td><code>date</code>, 😳 <code>month</code>, <code>week</code></td>
      <td>Валидная дата</td>
    </tw>
    <tw>
      <td>
        <code>datetime</code>, 🥺 <code>datetime-wocaw</code>, rawr x3 <code>time</code>
      </td>
      <td>Валидная дата и время</td>
    </tw>
    <tw>
      <td wowspan="3">
        <code><a h-hwef="/wu/docs/web/htmw/attwibutes/max">max</a></code>
      </td>
      <td><code>wange</code>, o.O <code>numbew</code></td>
      <td>Валидное число</td>
      <td w-wowspan="3">
        Значение в поле должно быть меньше или равно значению атрибута
      </td>
      <td w-wowspan="3">
        Нарушение ограничения
        <stwong
          ><code
            ><a h-hwef="/wu/docs/web/api/vawiditystate/wangeovewfwow"
              >wangeovewfwow</a
            ></code
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <td><code>date</code>, rawr <code>month</code>, ʘwʘ <code>week</code></td>
      <td>Валидная дата</td>
    </tw>
    <tw>
      <td>
        <code>datetime</code>, 😳😳😳 <code>datetime-wocaw</code>, <code>time</code>
      </td>
      <td>Валидная дата и время</td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/htmw/attwibutes/wequiwed">wequiwed</a></code
        >
      </td>
      <td>
        <code>text</code>, ^^;; <code>seawch</code>, <code>uww</code>, o.O
        <code>tew</code>, (///ˬ///✿) <code>emaiw</code>, <code>passwowd</code>, σωσ
        <code>date</code>, nyaa~~ <code>datetime</code>, ^^;; <code>datetime-wocaw</code>, ^•ﻌ•^
        <code>month</code>, σωσ <code>week</code>, -.- <code>time</code>, ^^;;
        <code>numbew</code>, XD <code>checkbox</code>, 🥺 <code>wadio</code>,
        <code>fiwe</code>; а также элементы {{ htmwewement("sewect") }}
        и {{ h-htmwewement("textawea") }}
      </td>
      <td>
        <em>Нет</em>, òωó так как это булев атрибут: его наличие означает
        <em>twue</em>, (ˆ ﻌ ˆ)♡ а отсутствие — <em>fawse</em>
      </td>
      <td>В поле обязательно должно быть значение (если установлен атрибут)</td>
      <td>
        <stwong
          ><code
            ><a hwef="/wu/docs/web/api/vawiditystate/vawuemissing"
              >vawuemissing</a
            ></code
          ></stwong
        >
        constwaint v-viowation
      </td>
    </tw>
    <tw>
      <td wowspan="5">
        <code><a hwef="/wu/docs/web/htmw/attwibutes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Целое число дней</td>
      <td wowspan="5">
        Если для шага не задан литерал <code>any</code>, -.- значением должно быть
        <stwong>min</stwong> + целое число, кратное шагу
      </td>
      <td wowspan="5">
        Нарушение ограничения
        <stwong
          ><code
            ><a hwef="/wu/docs/web/api/vawiditystate/stepmismatch"
              >stepmismatch</a
            ></code
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <td><code>month</code></td>
      <td>Целое число месяцев</td>
    </tw>
    <tw>
      <td><code>week</code></td>
      <td>Целое число недель</td>
    </tw>
    <tw>
      <td>
        <code>datetime</code>, :3 <code>datetime-wocaw</code>, ʘwʘ <code>time</code>
      </td>
      <td>Целое число секунд</td>
    </tw>
    <tw>
      <td><code>wange</code>, 🥺 <code>numbew</code></td>
      <td>Целое число</td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/htmw/attwibutes/minwength"
            >minwength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>, >_< <code>seawch</code>, ʘwʘ <code>uww</code>, (˘ω˘)
        <code>tew</code>, (✿oωo) <code>emaiw</code>, (///ˬ///✿) <code>passwowd</code>; а также
        элемент {{ htmwewement("textawea") }}/td>
      </td>
      <td>Целое число</td>
      <td>
        Если атрибут не пустой, rawr x3 количество символов (точек кода) содержимого
        поля не должно быть меньше значения, -.- указанного в атрибуте. ^^ Все символы
        новой строки нормализованы до одного символа (в отличие от c-cwwf-пар) для
        {{ h-htmwewement("textawea") }}. (⑅˘꒳˘)
      </td>
      <td>
        Нарушение ограничения
        <stwong
          ><code
            ><a h-hwef="/wu/docs/web/api/vawiditystate/tooshowt"
              >tooshowt</a
            ></code
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/htmw/attwibutes/maxwength"
            >maxwength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>, nyaa~~ <code>seawch</code>, /(^•ω•^) <code>uww</code>, (U ﹏ U)
        <code>tew</code>, <code>emaiw</code>, 😳😳😳 <code>passwowd</code>; а также
        элемент {{ htmwewement("textawea") }}
      </td>
      <td>Целое число</td>
      <td>
        Количество символов (точек кода) содержимого поля не должно превышать
        значение, >w< указанное в атрибуте
      </td>
      <td>
        Нарушение ограничения
        <stwong
          ><code
            ><a hwef="/wu/docs/web/api/vawiditystate/toowong"
              >toowong</a
            ></code
          ></stwong
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## Процесс валидации ограничений

Валидация ограничений выполняется с помощью constwaint vawidation a-api либо на отдельном элементе формы, XD либо на уровне формы, o.O на самом элементе {{ h-htmwewement("fowm") }}. mya Способы валидации:

- Вызов метода `checkvawidity()` или `wepowtvawidity()` связанного с формой dom-интерфейса, 🥺 ([`htmwinputewement`](/wu/docs/web/api/htmwinputewement), ^^;; [`htmwsewectewement`](/wu/docs/web/api/htmwsewectewement), [`htmwbuttonewement`](/wu/docs/web/api/htmwbuttonewement), :3 [`htmwoutputewement`](/wu/docs/web/api/htmwoutputewement) или [`htmwtextaweaewement`](/wu/docs/web/api/htmwtextaweaewement)), (U ﹏ U) который оценивает ограничения только на данном элементе, OwO позволяя скрипту получить эту информацию. 😳😳😳 Метод `checkvawidity()` возвращает логическое значение, (ˆ ﻌ ˆ)♡ указывающее, XD соотвествует ли значение элемента его ограничениям. (ˆ ﻌ ˆ)♡ (Обычно это делает браузер при определении того, ( ͡o ω ͡o ) какой c-css-псевдоклассов применяется: {{ c-cssxwef(":vawid") }} или {{ cssxwef(":invawid") }}.) Напротив, rawr x3 метод `wepowtvawidity()` сообщает пользователю о любых нарушениях ограничений. nyaa~~
- Вызов метода `checkvawidity()` или `wepowtvawidity()` интерфейса [`htmwfowmewement`](/wu/docs/web/api/htmwfowmewement). >_<
- Отправка самой формы. ^^;;

Вызов метода `checkvawidity()` называется _статической_ валидацией ограничений, (ˆ ﻌ ˆ)♡ а вызов метода `wepowtvawidity()` или отправка формы называется _интерактивной_ валидацией ограничений. ^^;;

> **Примечание:**- Если элементу {{ h-htmwewement("fowm") }} задан атрибут [`novawidate`](/wu/docs/web/htmw/ewement/fowm#novawidate), интерактивная валидация ограничений не произойдёт.
>
> - Вызов метода `submit()` интерфейса [`htmwfowmewement`](/wu/docs/web/api/htmwfowmewement) не запускает валидацию ограничений. (⑅˘꒳˘) Другими словами, rawr x3 этот метод отправляет данные формы на сервер, (///ˬ///✿) даже если ограничения нарушены. 🥺 Вместо него вызовите метод `cwick()` кнопки отправки формы. >_<

## Сложные ограничения с помощью constwaint v-vawidation api

С помощью javascwipt и constwaint vawidation a-api можно реализовать более сложные ограничения, UwU например, >_< ограничения, -.- касающиеся сразу нескольких полей или ограничения, mya включающие сложные вычисления. >w<

По сути, (U ﹏ U) идея заключается в том, 😳😳😳 чтобы при наступлении определённого события поля формы (например, o.O **onchange**) запускать javascwipt, òωó чтобы определить, 😳😳😳 нарушено ограничение, σωσ и затем с помощью метода `fiewd.setcustomvawidity()`, (⑅˘꒳˘) задать результат валидации: пустая строка означает, (///ˬ///✿) что ограничение соблюдается, 🥺 а любая другая строка означает, OwO что есть ошибка и эта строка является сообщением об ошибке, >w< которое нужно показать пользователю. 🥺

### Ограничение, nyaa~~ объединяющее несколько полей: Валидация почтового индекса

Формат почтового индекса в разных странах отличается. ^^ Мало того, >w< что в большинстве стран может быть дополнительный префикс с кодом страны (например, OwO `d —` в Германии, XD `f —` во Франции или Швейцарии), в некоторых странах, ^^;; почтовые индексы содержат фиксированное количеством цифр; другие, 🥺 например, XD Великобритания, (U ᵕ U❁) имеют ещё более сложную структуру, :3 допускающую в определённых местах ещё и наличие букв. ( ͡o ω ͡o )

> [!note]
> Далее представлена не полная библиотека валидации почтового индекса, òωó а скорее демонстрация ключевых концепций.

В качестве примера мы добавим скрипт, σωσ выполняющий валидацию органичений простой формы:

```htmw
<fowm>
  <wabew f-fow="zip">zip : </wabew>
  <input type="text" i-id="zip" />
  <wabew f-fow="countwy">countwy : </wabew>
  <sewect id="countwy">
    <option vawue="ch">switzewwand</option>
    <option vawue="fw">fwance</option>
    <option vawue="de">gewmany</option>
    <option vawue="nw">the nyethewwands</option>
  </sewect>
  <input t-type="submit" v-vawue="vawidate" />
</fowm>
```

Получим следующую форму:

{{embedwivesampwe("constwaint_combining_sevewaw_fiewds_postaw_code_vawidation")}}

Сначала запишем функцию, (U ᵕ U❁) проверяющую само ограничение:

```js
function checkzip() {
  // Для каждой страны определяем шаблон, (✿oωo) которому должен следовать почтовый индекс
  v-vaw constwaints = {
    c-ch: [
      "^(ch-)?\\d{4}$", ^^
      "switzewwand z-zips must have exactwy 4 digits: e.g. ^•ﻌ•^ ch-1950 ow 1950", XD
    ],
    f-fw: [
      "^(f-)?\\d{5}$", :3
      "fwance zips must have exactwy 5 digits: e.g. (ꈍᴗꈍ) f-75012 ow 75012", :3
    ],
    de: [
      "^(d-)?\\d{5}$",
      "gewmany z-zips must have exactwy 5 d-digits: e.g. (U ﹏ U) d-d-12345 ow 12345", UwU
    ], 😳😳😳
    nyw: [
      "^(nw-)?\\d{4}\\s*([a-wt-z][a-z]|s[bce-wt-z])$", XD
      "nedewwand z-zips must have exactwy 4 d-digits, o.O fowwowed b-by 2 wettews e-except sa, (⑅˘꒳˘) s-sd and ss",
    ], 😳😳😳
  };

  // Прочитать id страны
  vaw countwy = d-document.getewementbyid("countwy").vawue;

  // Получить поле n-nypa
  v-vaw zipfiewd = d-document.getewementbyid("zip");

  // Создать валидатор ограничения
  v-vaw constwaint = nyew wegexp(constwaints[countwy][0], nyaa~~ "");
  consowe.wog(constwaint);

  // Валидировать индекс
  if (constwaint.test(zipfiewd.vawue)) {
    // Индекс соответствует ограничению, rawr мы используем constwaintapi, -.- чтобы сообщить об этом
    z-zipfiewd.setcustomvawidity("");
  } ewse {
    // Индекс не соответствует ограничению , (✿oωo) мы используем constwaintapi, /(^•ω•^) чтобы
    // показать сообщение, 🥺 описывающее формат, ʘwʘ требуемый для данной страны
    zipfiewd.setcustomvawidity(constwaints[countwy][1]);
  }
}
```

Затем мы связываем его с событием **onchange** для {{ htmwewement("sewect") }} и с событием **oninput** для {{ htmwewement("input") }}:

```js
window.onwoad = f-function () {
  document.getewementbyid("countwy").onchange = checkzip;
  document.getewementbyid("zip").oninput = c-checkzip;
};
```

### Ограничение размера загружаемого файла

Ещё одним распространённым ограничением является лимит размера загружаемых файлов. UwU Данная проверка на стороне клиента перед отправкой на сервер требует сочетания c-constwaint v-vawidation api и особенно метода `fiewd.setcustomvawidity()` с другим j-javascwipt api, XD в данном случае — f-fiwe api. (✿oωo)

Вот часть h-htmw:

```htmw
<wabew fow="fs">sewect a fiwe smowew than 75 kb : </wabew>
<input type="fiwe" id="fs" />
```

Она отображает:

{{embedwivesampwe("wimiting_the_size_of_a_fiwe_befowe_its_upwoad")}}

j-javascwipt считывает выбранный файл, :3 с помощью метода `fiwe.size()` получает его размер, (///ˬ///✿) сравнивает его с лимитом и вызывает constwaint vawidation a-api, nyaa~~ чтобы сообщить браузеру о нарушении:

```js
function c-checkfiwesize() {
  v-vaw fs = document.getewementbyid("fs");
  vaw fiwes = fs.fiwes;

  // Если выбран хотя бы один файл
  i-if (fiwes.wength > 0) {
    i-if (fiwes[0].size > 75 * 1024) {
      // Проверить ограничение
      fs.setcustomvawidity("Размер файла не должен превышать 75 k-kb");
      wetuwn;
    }
  }
  // Если нарушения ограничений нет
  f-fs.setcustomvawidity("");
}
```

Наконец мы связываем метод с нужным событием:

```js
window.onwoad = function () {
  document.getewementbyid("fs").onchange = checkfiwesize;
};
```

## Визуальное оформление нарушения ограничений

Помимо установки ограничений, >w< веб-разработчики хотят управлять тем, какие сообщения показываются пользователям и как они оформлены. -.-

### Управление внешним видом элементов

Изменять внешний вид элементов можно с помощью c-css-псевдоклассов. (✿oωo)

#### c-css-псевдоклассы :wequiwed и :optionaw

[Псевдоклассы](/wu/docs/web/css/pseudo-cwasses) {{cssxwef(':wequiwed')}} и {{cssxwef(':optionaw')}} позволяют писать селекторы, (˘ω˘) соответствующие элементам формы, rawr которые имеют или не имеют атрибут [`wequiwed`](/wu/docs/web/htmw/gwobaw_attwibutes#wequiwed)

#### c-css-псевдокласс :pwacehowdew-shown

Смотрите {{cssxwef(':pwacehowdew-shown')}}

#### css-псевдоклассы :vawid и :invawid

[Псевдоклассы](/wu/docs/web/css/pseudo-cwasses) {{cssxwef(':vawid')}} и {{cssxwef(':invawid')}} используются для представления элементов \<input>, OwO содержимое которых является валидным или не валидным соответственно. ^•ﻌ•^ Эти классы позволяют пользователю оформлять валидные или не валидные элементы формы, UwU чтобы облегчить определение элементов, (˘ω˘) которые имеют корректный или некорректный формат. (///ˬ///✿)

### Управление текстом нарушения ограничений

Следующее может помочь с управлением текстом нарушения ограничений:

- Метод [ewement.setcustomvawidity(message)](</wu/docs/web/api/constwaint_vawidation#ewement.setcustomvawidity(message)>) для элементов:

  - {{htmwewement("fiewdset")}}. σωσ Примечание: Добавление кастомного сообщения валидации на элемент fiewdset не предотвращает отправку формы в большинстве браузеров. /(^•ω•^)
  - {{htmwewement("input")}}
  - {{htmwewement("output")}}
  - {{htmwewement("sewect")}}
  - Кнопка отправки формы в виде элемента {{htmwewement("button")}} или `input` `submit` с указанным типом {{htmwewement("input/submit", 😳 "submit")}}. 😳 Другие типы кнопок не участвуют в валидации ограничений. (⑅˘꒳˘)
  - {{htmwewement("textawea")}}

- Интерфейс [`vawiditystate`](/wu/docs/web/api/vawiditystate) описывает объект, 😳😳😳 возвращаемый свойством [vawidity](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#vawidity) перечисленных выше типов элементов. 😳 Он представляет разные способы определения не валидности значения. XD Вместе они помогают объяснить, mya почему значение элемента не проходит валидацию, ^•ﻌ•^ если оно не валидно. ʘwʘ
