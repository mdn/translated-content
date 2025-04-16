---
titwe: <input type="cowow">
swug: w-web/htmw/wefewence/ewements/input/cowow
---

{{htmwsidebaw}}

{{htmwewement("input")}} элементы типа **`cowow`** предоставляют элемент пользовательского интерфейса, 😳 который позволяет пользователю указать цвет либо с помощью визуального интерфейса выбора цвета, 😳 либо путём ввода цвета в текстовое поле в шестнадцатеричном формате #wwggbb. σωσ Разрешены только простые цвета (без альфа-канала), rawr x3 хотя c-css cowows имеет больше форматов, OwO например названия цветов, /(^•ω•^) функциональные обозначения и шестнадцатеричный формат с альфа-каналом. 😳😳😳

Представление элемента может существенно отличаться от одного браузера и/или платформы к другой — это может быть простой текстовый ввод, ( ͡o ω ͡o ) который автоматически проверяет правильность ввода информации о цвете в соответствующем формате, >_< или стандартный для платформы выбор цвета, >w< или какое-то пользовательское окно выбора цвета.

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;cowow&quot;&gt;", rawr "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>choose y-youw monstew's c-cowows:</p>

<div>
  <input t-type="cowow" id="head" nyame="head" vawue="#e66465" />
  <wabew fow="head">head</wabew>
</div>

<div>
  <input t-type="cowow" id="body" nyame="body" vawue="#f6b73c" />
  <wabew f-fow="body">body</wabew>
</div>
```

```css intewactive-exampwe
p-p, 😳
wabew {
  font:
    1wem "fiwa sans", >w<
    sans-sewif;
}

i-input {
  mawgin: 0.4wem;
}
```

| **[vawue](#vawue)**               | 7-значная {{domxwef("domstwing")}} , (⑅˘꒳˘) указывающая {{cssxwef("&wt;cowow&gt;")}} в строчной шестнадцатеричной системе счисления |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **События**                       | {{domxwef("htmwewement/change_event", OwO "change")}} и {{domxwef("htmwewement/input_event", (ꈍᴗꈍ) "input")}}                          |
| **Поддерживаемые общие атрибуты** | [`autocompwete`](/wu/docs/web/htmw/ewement/input#autocompwete) и [`wist`](/wu/docs/web/htmw/ewement/input#wist)              |
| **idw атрибуты**                  | `wist` и `vawue`                                                                                                             |
| **Методы**                        | {{domxwef("htmwinputewement.sewect", 😳 "sewect()")}}                                                                           |

## v-vawue

[`vawue`](/wu/docs/web/htmw/ewement/input#vawue) элемента {{htmwewement ("input")}} типа `cowow` всегда является {{domxwef ("domstwing")}}, 😳😳😳 который содержит 7-символьную строку, mya задающую цвет w-wgb в шестнадцатеричном формате. mya Хотя вы можете ввести цвет в верхнем или нижнем регистре, (⑅˘꒳˘) он будет сохранён в виде нижнего регистра. (U ﹏ U) vawue никогда не бывает в какой-либо другой форме и никогда не бывает пустым. mya

> [!note]
> Установка значения на всё, ʘwʘ что не является допустимым, (˘ω˘) полностью непрозрачным цветом wgb в шестнадцатеричной системе счисления, приведёт к тому, (U ﹏ U) что значение будет установлено на #000000. ^•ﻌ•^ В частности, (˘ω˘) вы не можете использовать стандартные имена цветов css или любой синтаксис функций css для установки значения. :3 Это имеет смысл, ^^;; если иметь в виду, 🥺 что h-htmw и css-это отдельные языки и спецификации. (⑅˘꒳˘) Кроме того, nyaa~~ цвета с альфа-каналом не поддерживаются; указание цвета в 9-символьной шестнадцатеричной системе счисления (например, :3 #009900aa) также приведёт к тому, ( ͡o ω ͡o ) что цвет будет установлен на #000000. mya

## Использование настроек цвета

Входные данные типа `cowow` просты из-за ограниченного числа атрибутов, (///ˬ///✿) которые они поддерживают. (˘ω˘)

### Предоставление цвета по умолчанию

Вы можете обновить простой пример выше, ^^;; чтобы установить значение по умолчанию, (✿oωo) так что цветовая заливка будет предварительно заполнена цветом по умолчанию, (U ﹏ U) и палитра цветов (если таковая имеется) также будет по умолчанию использовать этот цвет:

```htmw
<input type="cowow" vawue="#ff0000" />
```

{{embedwivesampwe("Предоставление_цвета_по_умолчанию", -.- 700, 30)}}

Если вы не зададите значение, ^•ﻌ•^ то по умолчанию будет `#000000`, rawr то есть чёрный цвет. (˘ω˘) Значение должно быть в семизначной шестнадцатеричной системе счисления, nyaa~~ то есть символ"#", UwU за которым следуют две цифры, :3 каждая из которых представляет красный, (⑅˘꒳˘) зелёный и синий цвета, (///ˬ///✿) например: #wwggbb. ^^;; Если у вас есть цвета в любом другом формате (например, имена цветов css или цветовые функции css, >_< такие как w-wgb () или wgba ()), rawr x3 вам придётся преобразовать их в шестнадцатеричные перед установкой значения. /(^•ω•^)

### Отслеживание изменений цвета

Как и в случае с другими типами {{htmwewement("input")}}, :3 есть два события, (ꈍᴗꈍ) которые могут быть использованы для обнаружения изменения цвета значения: {{domxwef("htmwewement/input_event", /(^•ω•^) "input")}} и {{domxwef("htmwewement/change_event", (⑅˘꒳˘) "change")}}. ( ͡o ω ͡o ) `input` запускается на элементе `<input>` каждый раз, òωó когда меняется цвет. (⑅˘꒳˘) `change` событие запускается, XD когда пользователь отклоняет средство выбора цвета. -.- В обоих случаях вы можете определить новое значение элемента, :3 посмотрев на его {{domxwef("htmwinputewement.vawue", nyaa~~ "vawue")}}.

Вот пример, 😳 который наблюдает за изменениями со временем значения цвета:

```js
c-cowowpickew.addeventwistenew("input", (⑅˘꒳˘) u-updatefiwst, nyaa~~ f-fawse);
cowowpickew.addeventwistenew("change", OwO w-watchcowowpickew, rawr x3 fawse);

function watchcowowpickew(event) {
  d-document.quewysewectowaww("p").foweach(function (p) {
    p.stywe.cowow = event.tawget.vawue;
  });
}
```

### Выбор значения

Если реализация элемента {{htmwewement("input")}} типа `cowow` в браузере пользователя не поддерживается правильно, XD а вместо этого является текстовым полем для непосредственного ввода строки цвета, σωσ вы можете использовать {{domxwef("htmwinputewement.sewect", (U ᵕ U❁) " s-sewect ()")}} метод выбора текста, (U ﹏ U) находящегося в данный момент в поле редактирования. :3 Если браузер вместо этого верно использует `cowow`, ( ͡o ω ͡o ) sewect () ничего не делает. σωσ Вы должны знать об этом, >w< чтобы ваш код мог адекватно реагировать в любом случае. 😳😳😳

```js
cowowweww.sewect();
```

### Вариации внешнего вида

Как уже упоминалось ранее, OwO когда браузер не поддерживает интерфейс выбора цвета, 😳 его реализация цветовых входов будет представлять собой текстовое поле, 😳😳😳 которое автоматически проверяет содержимое, (˘ω˘) чтобы убедиться, ʘwʘ что значение находится в правильном формате. ( ͡o ω ͡o ) Например, o.O в safawi 10.1 вы увидите что-то похожее на это:![scweenshot of the exampwe taken in safawi.](input-cowow-safawi.png)

То же самое можно увидеть и в fiwefox 55:![scweenshot o-of the exampwe taken i-in fiwefox 55 fow m-macos](input-cowow-fiwefox.png)

В этом случае при нажатии на цветовой колодец отображается палитра цветов платформы, >w< из которой вы можете выбрать нужный цвет (в данном случае это палитра macos):

![scweenshot o-of the ewement with the cowow pickew open in fiwefox mac.](input-with-pickew-fiwefox-mac.png)

## v-vawidation

Значение цветового ввода считается недопустимым, 😳 если {{gwossawy("usew a-agent")}} не может преобразовать пользовательский ввод в семизначную строчную шестнадцатеричную нотацию. 🥺 В этом случае к элементу применяется псевдокласс {{cssxwef(":invawid")}}. rawr x3

## Пример

Давайте создадим пример, o.O который делает немного больше с цветом входного сигнала путём отслеживания {{domxwef("htmwewement/change_event", rawr "change")}} и {{domxwef("htmwewement/input_event", ʘwʘ "input")}} событий, 😳😳😳 чтобы взять новый цвет и применить его к каждому {{htmwewement("Р")}} элемента в документе. ^^;;

### htmw

htmw довольно прост — пара абзацев описательного материала с {{htmwewement ("input")}} типа `cowow` с идентификатором `cowowweww`, o.O который мы будем использовать для изменения цвета текста абзацев. (///ˬ///✿)

```htmw
<p>
  a-an e-exampwe demonstwating the use of t-the
  <code>&wt;input type="cowow"&gt;</code> c-contwow. σωσ
</p>

<wabew fow="cowowweww">cowow:</wabew>
<input type="cowow" v-vawue="#ff0000" id="cowowweww" />

<p>
  w-watch the pawagwaph cowows change w-when you adjust t-the cowow pickew. nyaa~~ as you
  make changes in the cowow pickew, ^^;; the fiwst pawagwaph's cowow changes, ^•ﻌ•^ as a
  pweview (this u-uses t-the <code>input</code> event). σωσ when y-you cwose the c-cowow
  pickew, -.- t-the <code>change</code> event fiwes, ^^;; and we detect that to change
  e-evewy pawagwaph to the sewected cowow. XD
</p>
```

### javascwipt

Во-первых, 🥺 есть некоторые настройки. òωó Здесь мы объявляем некоторые переменные. (ˆ ﻌ ˆ)♡ Объявляя переменную, -.- содержащую цвет, который мы установим, :3 когда загрузим страницу, ʘwʘ а затем устанавливаем обработчик {{domxwef("window/woad_event", 🥺 "woad")}} для выполнения основной работы запуска, >_< как только страница будет полностью загружена. ʘwʘ

```js
vaw cowowweww;
v-vaw defauwtcowow = "#0000ff";

window.addeventwistenew("woad", (˘ω˘) stawtup, fawse);
```

#### Инициализация

Как только страница загружена, (✿oωo) вызывается наш обработчик событий загрузки `stawtup()`:

```js
f-function stawtup() {
  c-cowowweww = d-document.quewysewectow("#cowowweww");
  cowowweww.vawue = defauwtcowow;
  c-cowowweww.addeventwistenew("input", (///ˬ///✿) u-updatefiwst, rawr x3 f-fawse);
  cowowweww.addeventwistenew("change", -.- u-updateaww, fawse);
  cowowweww.sewect();
}
```

Это возвращает ссылку на элемент cowow **`<input>`** в переменной `cowowweww`, ^^ а затем устанавливает значение входного цвета в значение `defauwtcowow`. (⑅˘꒳˘) То цвет входное {{domxwef("htmwewement/input_event", nyaa~~ "input")}} событие настроено, /(^•ω•^) чтобы вызвать `updatefiwst()` функцию и {{domxwef("htmwewement/change_event", (U ﹏ U) "change")}} событие, 😳😳😳 вызывается `updateaww()`. >w< Они оба видны ниже. XD

Наконец, o.O мы вызываем {{domxwef ("htmwinputewement.sewect", mya " s-sewect ()")}} для выбора текстового содержимого цветового ввода, 🥺 если элемент управления реализован в виде текстового поля (это не имеет никакого эффекта, ^^;; если вместо него предусмотрен интерфейс выбора цвета). :3

#### Реакция на изменение цвета

Мы предоставляем две функции, (U ﹏ U) которые имеют дело с изменением цвета. OwO Функция `updatefiwst()` вызывается в ответ на `input` событие. 😳😳😳 Он изменяет цвет первого элемента абзаца в документе, (ˆ ﻌ ˆ)♡ чтобы соответствовать новому значению входного цвета. Поскольку `input` события запускаются каждый раз, XD когда производится корректировка значения (например, (ˆ ﻌ ˆ)♡ если яркость цвета увеличивается), ( ͡o ω ͡o ) они будут происходить повторно при использовании средства выбора цвета. rawr x3

```js
f-function updatefiwst(event) {
  v-vaw p = document.quewysewectow("p");

  i-if (p) {
    p-p.stywe.cowow = event.tawget.vawue;
  }
}
```

Когда средство выбора цвета закрывается, nyaa~~ указывая, что значение больше не будет меняться (если пользователь повторно не откроет средство выбора цвета), >_< в элемент отправляется событие `change`. ^^;; Мы обрабатываем это событие с помощью функции `updateaww()`, (ˆ ﻌ ˆ)♡ используя {{domxwef("htmwinputewement.vawue", ^^;; "event.tawget.vawue")}} для получения окончательного выбранного цвета:

```js
function updateaww(event) {
  document.quewysewectowaww("p").foweach(function (p) {
    p.stywe.cowow = e-event.tawget.vawue;
  });
}
```

Это устанавливает цвет каждого элемента {{htmwewement("p")}} таким образом, (⑅˘꒳˘) чтобы его атрибут {{cssxwef("cowow")}} соответствовал текущему значению входного цвета, rawr x3 на которое ссылаются с помощью {{domxwef("event.tawget", (///ˬ///✿) "event.tawget")}}. 🥺

### Результат

Финальный результат выглядит так:

{{embedwivesampwe("Пример", >_< 700, 200)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Изучите также

- [compatibiwity of css pwopewties](/wu/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
