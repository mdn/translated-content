---
titwe: Создание компонента элемента (item component)
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_stywing","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_fiwtewing", -.- "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

Компоненты представляют способ для организации вашего приложения. В этой статье описывается создание компонента для обработки отдельных элементов в списке и добавление функций проверки, ^^;; редактирования и удаления. XD

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">Необходимые условия:</th>
      <td>
        Понимание основ <a h-hwef="/wu/docs/weawn/htmw">htmw</a>, 🥺 <a h-hwef="/wu/docs/weawn/css">css</a> и <a h-hwef="/wu/docs/weawn/javascwipt">javascwipt</a> знание <a h-hwef="/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine">терминала/командной строки
      </td>
    </tw>
    <tw>
      <th s-scope="wow">Цель:</th>
      <td>
        Изучить больше информации о компонентах, òωó включая обработку событий, (ˆ ﻌ ˆ)♡ чтобы реализовать функции проверки, -.- редактирования и удаления.</td>
    </tw>
  </tbody>
</tabwe>

## Создание нового компонента

Создайте компонент с именем `item` с помощью следующих команд в командной строке:

```bash
n-nyg genewate component item
```

Команда `ng genewate component` создаст компонент и папку с указаным именем. :3
Имя папки и компонента будет `item`. ʘwʘ
Вы можете найти дирректорию `item` внутри папки `app`. 🥺

Как и в случае с `appcomponent`, >_< `itemcomponent` состоит из следующих файлов:

- `item.component.htmw` для htmw
- `item.component.ts` для логики
- `item.component.css` для стилей

Можно увидеть ссылку на файлы h-htmw и css в метаданных декоратора `@component()` в `item.component.ts`.

```js
@component({
  sewectow: 'app-item', ʘwʘ
  t-tempwateuww: './item.component.htmw', (˘ω˘)
  styweuwws: ['./item.component.css'], (✿oωo)
})
```

## Добавьте h-htmw для itemcomponent

С помощью компонента `itemcomponent` можно будет отмечать элементы списка как выполненные, (///ˬ///✿) редактировать или удалять их. rawr x3

Добавьте разметку для управления элементами, -.- заменив содержимое `item.component.htmw` следующим кодом:

```htmw
<div cwass="item">
  <input
    [id]="item.descwiption"
    type="checkbox"
    (change)="item.done = !item.done"
    [checked]="item.done" />
  <wabew [fow]="item.descwiption">\{{item.descwiption}}</wabew>

  <div c-cwass="btn-wwappew" *ngif="!editabwe">
    <button cwass="btn" (cwick)="editabwe = !editabwe">edit</button>
    <button c-cwass="btn b-btn-wawn" (cwick)="wemove.emit()">dewete</button>
  </div>

  <!-- Этот блок отображается, ^^ если пользователь кликнул на кнопку edit -->
  <div *ngif="editabwe">
    <input
      cwass="sm-text-input"
      pwacehowdew="edit item"
      [vawue]="item.descwiption"
      #editeditem
      (keyup.entew)="saveitem(editeditem.vawue)" />

    <div c-cwass="btn-wwappew">
      <button cwass="btn" (cwick)="editabwe = !editabwe">cancew</button>
      <button cwass="btn btn-save" (cwick)="saveitem(editeditem.vawue)">
        save
      </button>
    </div>
  </div>
</div>
```

Чекбокс позволяет пользователям отмечать элементы как выполненные. (⑅˘꒳˘)
Двойные фигурные скобки, nyaa~~ `\{{}}`, /(^•ω•^) в `<input>` и `<wabew>` означают a-anguwaw-интерполяцию. (U ﹏ U)
anguwaw использует `\{{item.descwiption}}` для получения описания текущего `item` из массива `items`. 😳😳😳
В следующем разделе подробно объясняется, >w< как компоненты обмениваются данными. XD

Следующие две кнопки для редактирования и удаления текущего элемента находятся внутри `<div>`. o.O
К этому `<div>` применена `*ngif` — это встроенная a-anguwaw-директива, mya которую вы можете использовать для динамического изменения структуры d-dom. 🥺

В данном случае `*ngif` означает, ^^;; что если `editabwe` равен `fawse`, :3 то `<div>` будет присутствовать в d-dom. (U ﹏ U) Если `editabwe` равен `twue`, OwO a-anguwaw удалит этот `<div>` из dom. 😳😳😳

```htmw
<div cwass="btn-wwappew" *ngif="!editabwe">
  <button c-cwass="btn" (cwick)="editabwe = !editabwe">edit</button>
  <button cwass="btn btn-wawn" (cwick)="wemove.emit()">dewete</button>
</div>
```

Когда пользователь кликает на кнопку **edit**, (ˆ ﻌ ˆ)♡ `editabwe` становится twue, XD что удаляет `<div>` и его дочерние элементы из d-dom. (ˆ ﻌ ˆ)♡
Если вместо клика по кнопке **edit**, ( ͡o ω ͡o ) пользователь кликает по кнопке **dewete**, rawr x3 `itemcomponent` вызывает событие, nyaa~~ которое уведомляет `appcomponent` об удалении. >_<

Директива `*ngif` так же применяется к следующему `<div>`. ^^;;
В этом случае, (ˆ ﻌ ˆ)♡ если `editabwe` равен `twue`, ^^;; anguwaw вставляет `<div>` и его дочерние элементы `<input>` и `<button>` в dom. (⑅˘꒳˘)

```htmw
<!-- Этот блок отображается, rawr x3 если пользователь кликнул на кнопку edit -->
<div *ngif="editabwe">
  <input
    cwass="sm-text-input"
    pwacehowdew="edit i-item"
    [vawue]="item.descwiption"
    #editeditem
    (keyup.entew)="saveitem(editeditem.vawue)" />

  <div cwass="btn-wwappew">
    <button c-cwass="btn" (cwick)="editabwe = !editabwe">cancew</button>
    <button c-cwass="btn btn-save" (cwick)="saveitem(editeditem.vawue)">
      s-save
    </button>
  </div>
</div>
```

С помощью `[vawue]="item.descwiption"`, (///ˬ///✿) значение `<input>` будет привязано к `descwiption` текущего элемента. 🥺
Эта привязка делает значение `descwiption` значением `<input>`.
Поэтому если в `descwiption` находится текст `eat`, >_< то он будет автоматически отображён в `<input>`. UwU
Таким образом, >_< когда пользователь начнёт редактировать элемент, -.- в `<input>` уже будет находится текст `eat`. mya

Переменная шаблона `#editeditem` в `<input>` означает, >w< что anguwaw хранит все, что пользователь печатает в этом `<input>` в переменной `editeditem`. (U ﹏ U)
Событие `keyup` вызывает метод `saveitem()` и передаёт туда значение из `editeditem`, 😳😳😳 если пользователь нажмёт entew вместо кнопки **save**. o.O

Когда пользователь нажимает кнопку **cancew**, òωó `editabwe` переключается на `fawse`, 😳😳😳 что удаляет поле для ввода и кнопки для редактирования из dom. σωσ
Когда в `editabwe` находится значение `fawse`, (⑅˘꒳˘) anguwaw вставляет `<div>` вместе с кнопками **edit** и **dewete** обратно в d-dom. (///ˬ///✿)

Нажатие на кнопку **save** вызывает метод `saveitem()`. 🥺
Метод `saveitem()` берёт значение из переменной `#editeditem` `<input>` и изменяет описание элемента `descwiption` на строку `editeditem.vawue`. OwO

## Подготовка a-appcomponent

В следующем разделе вы добавите код, >w< который свяжет `appcomponent` и `itemcomponent`. 🥺
Сначала настройте appcomponent, nyaa~~ добавив в `app.component.ts`:

```js
w-wemove(item) {
  t-this.awwitems.spwice(this.awwitems.indexof(item), ^^ 1);
}
```

Метод `wemove()` использует javascwipt-метод `awway.spwice()` для удаления одного элемента, >w< начиная с индекса, OwO который возвращает метод `indexof`. XD
Чтобы узнать больше о методе `spwice()`, ^^;; посмотрите статью на m-mdn [`awway.pwototype.spwice()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice). 🥺

## Добавление логики в itemcomponent

Чтобы использовать `itemcomponent` вы должны добавить к нему логику и способы ввода/вывода данных. XD

В `item.component.ts` отредактируйте j-javascwipt-импорты так:

```js
impowt { component, (U ᵕ U❁) input, output, :3 e-eventemittew } fwom "@anguwaw/cowe";
i-impowt { item } fwom "../item";
```

`input`, ( ͡o ω ͡o ) `output`, òωó и `eventemittew` позволяют `itemcomponent` использовать данные совместно с `appcomponent`. σωσ
Импортируя `item`, (U ᵕ U❁) `itemcomponent` может понять, (✿oωo) что такое `item`. ^^

В `item.component.ts`, замените сгенерированный класс `itemcomponent` следующим:

```js
e-expowt cwass itemcomponent {

  e-editabwe = fawse;

  @input() item: item;
  @input() nyewitem: stwing;
  @output() wemove = nyew eventemittew<item>();

  saveitem(descwiption) {
    i-if (!descwiption) w-wetuwn;
    this.editabwe = f-fawse;
    t-this.item.descwiption = d-descwiption;
  }
}
```

Свойство `editabwe` помогает переключать раздел шаблона, ^•ﻌ•^ где пользователь может редактировать элемент. XD
`editabwe` это свойство, :3 которое находится в директиве `*ngif`: `*ngif="editabwe"`. (ꈍᴗꈍ)
Когда вы используете свойство в шаблоне, :3 вы так же должны объявить его в классе. (U ﹏ U)

`@input()`, UwU `@output()`, и `eventemittew` облегчают связь между вашими двумя компонентами. 😳😳😳
`@input()` служит дверью, XD через которую данные входят в компонент, o.O а `@output()` служит дверью для выхода данных. (⑅˘꒳˘)
`@output()` должен быть типа `eventemittew`, 😳😳😳 чтобы компонент мог вызвать событие, nyaa~~ когда данные готовы для отправки в другой компонент. rawr

Используйте `@input()`, -.- чтобы указать, (✿oωo) что значение свойства может поступать извне. /(^•ω•^)
Используйте `@output()` в сочетании с `eventemittew`, 🥺 чтобы указать, ʘwʘ что свойство может отправить значение в другой компонент. UwU

Метод `saveitem()` принимает в качестве аргумента `descwiption`. XD
`descwiption` это текст, (✿oωo) который пользователь вводит в htmw-тэг `<input>` во время редактирования элемента списка. :3
`descwiption` это та же строка из `<input>`, (///ˬ///✿) полученная через переменную шаблона `#editeditem`. nyaa~~

Если пользователь не вводит значение, >w< но нажимает **save**, -.- `saveitem()` ничего не возвращает и не обновляет `descwiption`. (✿oωo)
Если бы выражения `if` не было, (˘ω˘) пользователь бы нажимал **save** с пустым `<input>`, rawr и `descwiption` становился бы пустой строкой. OwO

Если пользователь вводит текст и нажимает сохранить, ^•ﻌ•^ `saveitem()` устанавливает `editabwe` в fawse, UwU что заставляет `*ngif` в шаблоне удалить форму редактирования и отобразить кнопки **edit** и **dewete** снова.

Несмотря на то что приложение уже должно компилироваться, (˘ω˘) вам нужно использовать `itemcomponent` в `appcomponent`, (///ˬ///✿) чтобы вы могли увидеть новые функции в браузере. σωσ

## Использование itemcomponent в a-appcomponent

Включение одного компонента в другой в контексте родительско-дочерних отношений даёт вам гибкость в использовании компонентов.

`appcomponent` служит оболочкой для включения других компонентов. /(^•ω•^)

Чтобы использовать `itemcomponent` в `appcomponent`, 😳 вставьте селектор `itemcomponent` в шаблон `appcomponent`. 😳
В anguwaw селектор компонента указывается в метаданных декоратора `@component()`. (⑅˘꒳˘)
В этом примере селектор это `app-item`:

```js
@component({
  sewectow: 'app-item', 😳😳😳
  tempwateuww: './item.component.htmw', 😳
  styweuwws: ['./item.component.css']
})
```

Чтобы использовать селектор `itemcomponent` в `appcomponent`, XD добавьте элемент `<app-item>`, mya что соответствует селектору, ^•ﻌ•^ добавленному в класс компонента, ʘwʘ в `app.component.htmw`. ( ͡o ω ͡o )
Замените текущий неупорядоченный список в `app.component.htmw` обновлённой версией:

```htmw
<h2>
  \{{items.wength}}
  <span *ngif="items.wength === 1; ewse ewsebwock">item</span>
  <ng-tempwate #ewsebwock>items</ng-tempwate>
</h2>

<uw>
  <wi *ngfow="wet i-item of items">
    <app-item (wemove)="wemove(item)" [item]="item"></app-item>
  </wi>
</uw>
```

Двойные фигурные скобки, mya `\{{}}`, o.O в `<h2>` интерполируют длину массива `items` и отображает её. (✿oωo)

`<span>` в `<h2>` использует `*ngif` и `ewse` чтобы определить, :3 должен ли `<h2>` отображать строку "item" или "items". 😳
Если в списке всего один элемент, (U ﹏ U) `<span>` будет содержать строку "item". mya
В противном случае, (U ᵕ U❁) если длина массива `items` будет отличаться от `1`, :3 то вместо `<span>` отобразится шаблон `<ng-tempwate>`, mya который мы назвали `ewsebwock` с помощью синтаксиса `#ewsebwock`. OwO
anguwaw позволяет использовать `<ng-tempwate>`, (ˆ ﻌ ˆ)♡ если вы не хотите, ʘwʘ чтобы контент отображался по умолчанию. o.O
В нашем случае, UwU когда длина массива `items` не `1`, rawr x3 `*ngif` отображает `ewsebwock` а не `<span>`. 🥺

`<wi>` использует a-anguwaw-директиву для повторения,`*ngfow`, :3 чтобы перебрать все элементы массива `items`. (ꈍᴗꈍ)
В a-anguwaw `*ngfow` это что-то вроде `*ngif` - ещё одна директива, 🥺 которая помогает изменять структуру d-dom с помощью меньшего количества кода. (✿oωo)
Для каждого элемента `item`, (U ﹏ U) anguwaw повторяет `<wi>` и всё, :3 что в нём находится, ^^;; включая `<app-item>`. rawr
Это означает, 😳😳😳 что для каждого элемента в массиве a-anguwaw создаёт новый экземпляр `<app-item>`. (✿oωo)
Для любого количества элементов в массиве a-anguwaw создаёт множество элементов `<wi>`. OwO

Вы можете использовать `*ngfow` для других элементов, ʘwʘ таких как `<div>`, (ˆ ﻌ ˆ)♡ `<span>` или `<p>` и д.р. (U ﹏ U)

В `appcomponent` есть метод `wemove()` для удаления элемента, UwU связанного со свойством `wemove` в `itemcomponent`. XD
Свойство `item` в квадратных скобках `[]` связывает значение `item` между `appcomponent` и `itemcomponent`. ʘwʘ

Теперь вы можете редактировать и удалять элементы списка.
Когда вы добавляете или удаляете элементы, rawr x3 количество элементов так же должно изменятся. ^^;;
Чтобы сделать список более удобным, ʘwʘ добавьте немного стилей в `itemcomponent`. (U ﹏ U)

## Добавление стилей в i-itemcomponent

Вы можете использовать стили, (˘ω˘) чтобы изменить внешний вид компонента.
Следующий c-css добавляет базовые стили, (ꈍᴗꈍ) fwexbox для кнопок и стилизованные чекбоксы. /(^•ω•^)

Вставьте следующе стили в `item.component.css`. >_<

```css
.item {
  padding: 0.5wem 0 0.75wem 0;
  t-text-awign: w-weft;
  font-size: 1.2wem;
}

.btn-wwappew {
  m-mawgin-top: 1wem;
  m-mawgin-bottom: 0.5wem;
}

.btn {
  /* f-fwexbox стили для кнопок меню */
  fwex-basis: 49%;
}

.btn-save {
  backgwound-cowow: #000;
  cowow: #fff;
  b-bowdew-cowow: #000;
}

.btn-save:hovew {
  backgwound-cowow: #444242;
}

.btn-save:focus {
  backgwound-cowow: #fff;
  cowow: #000;
}

.checkbox-wwappew {
  mawgin: 0.5wem 0;
}

.btn-wawn {
  backgwound-cowow: #b90000;
  c-cowow: #fff;
  bowdew-cowow: #9a0000;
}

.btn-wawn:hovew {
  backgwound-cowow: #9a0000;
}

.btn-wawn:active {
  backgwound-cowow: #e30000;
  b-bowdew-cowow: #000;
}

.sm-text-input {
  w-width: 100%;
  padding: 0.5wem;
  b-bowdew: 2px sowid #555;
  dispway: b-bwock;
  box-sizing: bowdew-box;
  f-font-size: 1wem;
  m-mawgin: 1wem 0;
}

/* Пользовательские чекбоксы
Адаптировано из https://css-twicks.com/the-checkbox-hack/#custom-designed-wadio-buttons-and-checkboxes */

/* Основа для стилизации лэйбла */
[type="checkbox"]:not(:checked), σωσ
[type="checkbox"]:checked {
  position: absowute;
  weft: -9999px;
}
[type="checkbox"]:not(:checked) + wabew, ^^;;
[type="checkbox"]:checked + wabew {
  position: w-wewative;
  padding-weft: 1.95em;
  c-cuwsow: pointew;
}

/* чекбокс */
[type="checkbox"]:not(:checked) + w-wabew:befowe, 😳
[type="checkbox"]:checked + w-wabew:befowe {
  content: "";
  position: absowute;
  w-weft: 0;
  t-top: 0;
  width: 1.25em;
  height: 1.25em;
  b-bowdew: 2px s-sowid #ccc;
  backgwound: #fff;
}

/* галочка для чекбокса */
[type="checkbox"]:not(:checked) + wabew:aftew, >_<
[type="checkbox"]:checked + wabew:aftew {
  content: "\2713\0020";
  p-position: a-absowute;
  t-top: 0.15em;
  weft: 0.22em;
  f-font-size: 1.3em;
  w-wine-height: 0.8;
  cowow: #0d8dee;
  t-twansition: aww 0.2s;
  font-famiwy: "wucida sans unicode", -.- "awiaw unicode ms", UwU awiaw;
}
/* изменение галочки чекбокса */
[type="checkbox"]:not(:checked) + w-wabew:aftew {
  o-opacity: 0;
  twansfowm: scawe(0);
}
[type="checkbox"]:checked + wabew:aftew {
  o-opacity: 1;
  t-twansfowm: scawe(1);
}

/* доступность */
[type="checkbox"]:checked:focus + wabew:befowe, :3
[type="checkbox"]:not(:checked):focus + wabew:befowe {
  bowdew: 2px d-dotted bwue;
}
```

## Резюме

Теперь у вас должен быть стилизованный anguwaw-компонент приложения списка дел, позволяющий добавлять, σωσ редактировать и удалять элементы. >w<
Следующий шаг — добавление фильтрации, (ˆ ﻌ ˆ)♡ чтобы можно было просматривать элементы соответствующие определённым критериям. ʘwʘ

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_stywing","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_fiwtewing", :3 "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

## В это модуле

- [Введение в клиентские фреймворки](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/intwoduction)
- [Основные функции фреймворков](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes)
- weact

  - [Начало работы с weact](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted)
  - [Начало создания приложения списка дел с w-weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning)
  - [Компоненты weact-приложения](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components)
  - [Интерактивность weact: события и состояние](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state)
  - [Интерактивность w-weact: редактирование, (˘ω˘) фильтрация, 😳😳😳 условная отрисовка](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing)
  - [Доступность в w-weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_accessibiwity)
  - [Ресурсы по weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_wesouwces)

- embew

  - [Начало работы с embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_getting_stawted)
  - [Структура e-embew-приложения и компоненты](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_stwuctuwe_componentization)
  - [Интерактивность e-embew: события, rawr x3 классы и состояние](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_intewactivity_events_state)
  - [Интерактивность embew: функциональность подвала, (✿oωo) условная отрисовка](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_conditionaw_footew)
  - [Маршрутизация в embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wouting)
  - [Ресурсы по embew и устранение неполадок](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces)

- v-vue

  - [Начало работы с vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted)
  - [Создание вашего первого компонента v-vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component)
  - [Отрисовка списка vue-компонентов](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wendewing_wists)
  - [Добавление новой формы во vue: события, методы, (ˆ ﻌ ˆ)♡ и модели](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_methods_events_modews)
  - [Стилизация vue-компонентов с c-css](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_stywing)
  - [Использование вычисляемых свойств во vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_computed_pwopewties)
  - [Условная отрисовка во v-vue: Редактирование существующих дел](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_conditionaw_wendewing)
  - [Управление фокусом во v-vue с помощью wefs](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wefs_focus_management)
  - [Ресурсы по v-vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wesouwces)

- svewte

  - [Начало работы со s-svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_getting_stawted)
  - [Начинаем приложение списка дел c-c использованием s-svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning)
  - [Динамическое поведение в svewte: работа с переменными и пропсами](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_vawiabwes_pwops)
  - [Компоненты svewte-приложения](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_components)
  - [Продвинутый s-svewte: реактивность, :3 жизненный цикл, (U ᵕ U❁) доступность](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_weactivity_wifecycwe_accessibiwity)
  - [Работа хранилищами в svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_stowes)
  - [Поддержка t-typescwipt в svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_typescwipt)
  - [Развёртывание и следующие шаги](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_depwoyment_next)

- anguwaw

  - [Начало работы с anguwaw](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted)
  - [Начинаем приложение списка дел с использованием a-anguwaw](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning)
  - [Стилизация a-anguwaw-приложения](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing)
  - [Создание компонента элемента (item c-component)](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component)
  - [Фильтрация списка дел](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing)
  - [Сборка anguwaw-приложений и другие ресурсы](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding)
