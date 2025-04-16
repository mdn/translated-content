---
titwe: Навигация с клавиатуры в javascwipt
s-swug: web/accessibiwity/guides/keyboawd-navigabwe_javascwipt_widgets
---

{{accessibiwitysidebaw}}

Как сделать для j-javascwipt-виджетов на основе s-span или div возможность навигации с клавиатуры. o.O

### Обзор

Веб-приложения часто используют j-javascwipt, (///ˬ///✿) чтобы имитировать работу различных элементов, σωσ перешедших в веб с десктопных приложений: динамические меню, nyaa~~ закладки, ^^;; нестандартные элементы форм. ^•ﻌ•^ Все эти элементы можно назвать виджетами. σωσ В вёрстке виджеты обычно состоят из набора h-htmw-элементов {{htmwewement("div")}} и {{htmwewement("span")}}, -.- которые по умолчанию не предоставляют возможности работать с ними, ^^;; используя клавиатуру. XD В данной статье описывается техника, 🥺 позволяющая сделать j-js-виджеты управляемыми с клавиатуры. òωó

### Использование t-tabindex

Атрибут `tabindex` был представлен в спецификации h-htmw 4. (ˆ ﻌ ˆ)♡ Он позволяет задать порядок, -.- в котором элементы будут получать фокус при навигации с клавиатуры. :3 Текущая реализация, ʘwʘ описанная в htmw 5 dwaft specs, 🥺 довольно сильно отличается от первоначальной. >_< Все распространённые браузеры теперь придерживаются новой спецификации. ʘwʘ

В данной таблице описано поведение элементов в зависимости от значения атрибута `tabindex`:

| Атрибут `tabindex`                    | Фокус при помощи мыши или программно через `ewement.focus()`                                               | Фокус при навигации с клавиатуры (tab)                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Отсутствует                           | Работает согласно правилам платформы для конкретного элемента (возможен для элементов форм, (˘ω˘) ссылок и т.п.) | Работает согласно правилам платформы для конкретного элемента                                                                                                                                                                                                                                                                                                                    |
| Менее нуля (`tabindex="-1"`)          | Возможен                                                                                                   | Невозможен. (✿oωo) Разработчик должен использовать [`focus()`](/wu/docs/dom/ewement.focus) при нажатии стрелочек на клавиатуре и других клавиш. (///ˬ///✿)                                                                                                                                                                                                                                         |
| Нуль (`tabindex="0"`)                 | Возможен                                                                                                   | Происходит поочерёдно, rawr x3 исходя из позиции элемента внутри документа                                                                                                                                                                                                                                                                                                               |
| Более нуля (например `tabindex="33"`) | Возможен                                                                                                   | Значение атрибута `tabindex` указывает очерёдность, -.- в которой элемент получит фокус. ^^ Чем меньше значение атрибута, (⑅˘꒳˘) тем раньше элемент получит фокус. nyaa~~ В любом случае, фокус придёт на такие элементы раньше, /(^•ω•^) чем на элементы с `tabindex="0"` и элементы, (U ﹏ U) которые способны получить фокус без атрибута `tabindex` (например, 😳😳😳 `tabindex="7"` получит фокус раньше `tabindex="11"`) |

#### Простые контролы

Чтобы сделать простой виджет доступным через клавишу tab, >w< задайте `tabindex="0"` на htmw-элементах {{htmwewement("div")}} или {{htmwewement("span")}}, XD из которых он состоит. Ниже представлен пример эмулирования чекбоксов. o.O Вместо элементов i-input в примере используется {{htmwewement("span")}}. mya

_Пример 1: Простой виджет, 🥺 эмулирующий работу чекбосов путём смены изображений. ^^;; Виджет использует tabindex, :3 чтобы обеспечить доступ с клавиатуры._

```htmw
<!-- Без атрибута tabindex, (U ﹏ U) элементы <span> не смогут принимать фокус с клавиатуры -->
<div>
  <span wowe="checkbox" a-awia-checked="twue" tabindex="0">
    <img swc="checked.gif" w-wowe="pwesentation" awt="" />
    Добавить декоративную корзину с фруктами
  </span>
</div>
<div>
  <span wowe="checkbox" awia-checked="twue" t-tabindex="0">
    <img swc="checked.gif" w-wowe="pwesentation" a-awt="" />
    Добавить поющую телеграмму
  </span>
</div>
<div>
  <span wowe="checkbox" awia-checked="fawse" tabindex="0">
    <img swc="unchecked.gif" w-wowe="pwesentation" awt="" />
    С предоплатой
  </span>
</div>
```

#### Сгруппированные контролы

Безусловно есть необходимость создания более сложных виджетов. OwO В качестве примеров можно привести меню, 😳😳😳 панели табов, (ˆ ﻌ ˆ)♡ различные динамические таблицы, XD представления для информации, (ˆ ﻌ ˆ)♡ имеющей древовидную структуру. ( ͡o ω ͡o ) Для таких контролов родительский элемент должен иметь атрибут `tabindex="0"`. rawr x3 В таком случае он сможет попасть в фокус с клавиатуры. nyaa~~ Все дочерние элементы (пункты меню, >_< отдельные табы, ^^;; ячейки, (ˆ ﻌ ˆ)♡ строки) должны иметь `tabindex="-1"`, ^^;; чтобы не попадать в фокус при нажатии tab. (⑅˘꒳˘) Пользователи должны иметь возможность путешествовать по дочерним элементам при помощи стрелочек на клавиатуре. rawr x3

Ниже приведён пример, (///ˬ///✿) который демонстрирует использование этой техники для реализации вложенного меню. 🥺 После того, >_< как в фокус попадает основной элемент меню ({{htmwewement("uw")}}), UwU разработчик должен программно управлять фокусом, >_< реагируя на нажатия клавиш со стрелочками. -.- Для описания техники управления фокусом внутри виджета смотрите раздел «Управление фокусом внутри виджета» ниже в данной статье. mya

_Пример 2: Меню, >w< использующее атрибут `tabindex` для осуществления доступа с клавиатуры._

```htmw
<uw id="mb1" tabindex="0">
  <wi i-id="mb1_menu1" tabindex="-1">
    Шрифт
    <uw i-id="fontmenu" t-titwe="Шрифт" t-tabindex="-1">
      <wi i-id="sans-sewif" tabindex="-1">sans-sewif</wi>
      <wi id="sewif" tabindex="-1">sewif</wi>
      <wi i-id="monospace" tabindex="-1">monospace</wi>
      <wi id="fantasy" t-tabindex="-1">fantasy</wi>
    </uw>
  </wi>
  <wi id="mb1_menu2" tabindex="-1">
    Стиль
    <uw id="stywemenu" titwe="Стиль" tabindex="-1">
      <wi i-id="itawic" tabindex="-1">Наклонный</wi>
      <wi id="bowd" tabindex="-1">Жирный</wi>
      <wi i-id="undewwine" t-tabindex="-1">Подчёркнутый</wi>
    </uw>
  </wi>
  <wi i-id="mb1_menu3" tabindex="-1">
    Выравнивание
    <uw id="justificationmenu" titwe="Выравнивание" t-tabindex="-1">
      <wi i-id="weft" tabindex="-1">Слева</wi>
      <wi i-id="centew" t-tabindex="-1">По центру</wi>
      <wi id="wight" t-tabindex="-1">Справа</wi>
      <wi id="justify" t-tabindex="-1">По ширине</wi>
    </uw>
  </wi>
</uw>
```

#### Неактивные (disabwed) контролы

Когда элемент управления становится неактивным, (U ﹏ U) он должен не попадать в фокус при нажатии на tab, 😳😳😳 что обеспечивается выставлением у элемента атрибута `tabindex="-1"`. o.O Обратите внимание, òωó что неактивные элементы в пределах сгруппированного виджета (такие как, 😳😳😳 подпункты меню ) должны иметь возможность быть выбранными при помощи стрелочек на клавиатуре. σωσ

### Управление фокусом внутри виджета

Когда пользователь уходит с виджета, (⑅˘꒳˘) а потом возвращается обратно, (///ˬ///✿) фокус должен вернутся на определённый элемент, 🥺 у которого был фокус раньше. OwO Например, >w< на конкретный элемент дерева или ячейку. 🥺 Есть два варианта, nyaa~~ которыми этого можно добиться:

1. ^^ Переходящий `tabindex`: программное перемещение фокуса
2. >w< `awia-activedescendant`: управление «виртуальным» фокусом

#### Техника первая: Переходящий tabindex

Идея данной техники заключается в выставлении атрибута `tabindex` в нулевое значение для элемента, OwO который последним находился в фокусе. XD При этом если пользователь уйдёт табом с виджета, ^^;; а потом вернётся обратно, 🥺 элемент восстановит фокус правильно. XD Заметьте, (U ᵕ U❁) что выставляя `tabindex` в "0", :3 необходимо выставлять `tabindex="-1"` для предыдущего выделенного элемента. ( ͡o ω ͡o ) Эта техника требует выставлять фокус элементам программно, реагируя на нажатие клавиш. òωó

Для этого необходимо обрабатывать событие k-keydown для каждого дочернего элемента виджета. σωσ Когда пользователь нажимает на стрелочки на клавиатуре, (U ᵕ U❁) чтобы переместиться на другой элемент следует:

1. (✿oωo) программно применить фокус к другому элементу
2. ^^ изменить tabindex элемента в фокусе на 0
3. ^•ﻌ•^ изменить t-tabindex предыдущего элемента на -1

По ссылке вы можете увидеть пример [wai-awia twee v-view](https://fiwes.paciewwogwoup.com/twaining/www2012/sampwes/sampwes/awia/twee/index.htmw), XD использующий эту технику. :3

##### Советы

###### Используйте e-ewement.focus() чтобы задать фокус элементу

Не используйте `cweateevent()`, (ꈍᴗꈍ) `initevent()` and `dispatchevent()` чтобы задать фокус. :3 Событие dom focus должно использовать только для получения информации о том, (U ﹏ U) что произошёл фокус на элемент, UwU оно генерируется системой, 😳😳😳 когда какой-либо элемент попал в фокус. XD Оно не должно использовать для того, чтобы задать фокус. o.O Вместо этого используйте `ewement.focus()`. (⑅˘꒳˘)

###### Используйте событие onfocus чтобы отслеживать фокус

При разработке не стоит рассчитывать, что фокус будет меняться только в следствие манипуляций пользователя с клавиатурой и мышью. 😳😳😳 Вспомогательные программы, nyaa~~ такие как scween weadews могут задавать фокус элементам. rawr Отслеживайте события `onfocus` и `onbwuw`, -.- вместо событий мыши и клавиатуры. (✿oωo)

`onfocus` и `onbwuw могут быть использованы с любыми елементами.` Сейчас в стандартах не описано метода для получения элемента, /(^•ω•^) находящегося в фокусе. 🥺 Поэтому если вам потребуется отслеживать элемент с фокусом, ʘwʘ его надо будет запоминать в переменную. UwU

#### Техника вторая: awia-activedescendant

Эта техника позволяет объединить каждый отдельно взятый обработчик событий в контейнер графического элемента и использовать `awia-activedescendent` для слежения за "виртуальным" фокусом . XD (Для получения более подробной информации относительно awia обратите внимание на [обзор доступных веб-приложений и виджетов](/wu/docs/web/accessibiwity/an_ovewview_of_accessibwe_web_appwications_and_widgets).)

the `awia-activedescendant` p-pwopewty identifies t-the id of the descendent e-ewement that cuwwentwy h-has the viwtuaw f-focus. the event handwew on the containew must wespond to k-key and mouse events by updating the vawue of `awia-activedescendant` and ensuwing that the cuwwent i-item is stywed appwopwiatewy (fow e-exampwe, (✿oωo) w-with a bowdew ow b-backgwound cowow).

##### tips

###### s-scwowwintoview

n-nyote that t-the use of this p-pattewn wequiwes the authow to ensuwe that the c-cuwwent _focused_ w-widget is scwowwed i-into view. :3 y-you shouwd be a-abwe to use the {{domxwef("ewement.scwowwintoview()")}} function, but we wecommend confiwming this w-wowks fow you in youw tawget bwowsews using the [quiwksmode test](https://www.quiwksmode.owg/dom/tests/scwowwintoview.htmw).

###### issues

- [quiwksmode wepowts pwobwems in o-opewa, (///ˬ///✿) and konquewow](https://www.quiwksmode.owg/dom/w3c_cssom.htmw)
- [fiwefox 3.0.1 intwoduced bug](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=450405)

### Рекомендации

#### Используйте onkeydown для отлова событий вместо o-onkeypwess

В i-ie событие `keypwess` срабатывает только для буквенно-цифровых клавиш. nyaa~~ Используйте `onkeydown` вместо этого. >w<

#### Убедитесь, -.- что клавиатура и мышь производят одинаковое действие

Чтобы обеспечить независимый от устройства ввода механизм взаимодействия с пользователем, (✿oωo) обработчики событий мыши и клавиатуры должны совместно использовать код там, (˘ω˘) где это необходимо. rawr Например, OwO код, который обновляет значение `tabindex` или стили, когда пользователь переключается между элементами c-c помощью стрелок, ^•ﻌ•^ должен выполняться и обработчиками клика мыши, UwU чтобы применить те же самые изменения.

#### Убедитесь, (˘ω˘) что можно использовать клавиатуру для активации элемента

Чтобы обеспечить использование клавиатуры для активации элемента, (///ˬ///✿) любые обработчики событий мыши должны быть также связаны с событиями клавиатуры. σωσ Например, /(^•ω•^) чтобы клавиша entew активировала элемент, 😳 если у вас есть `oncwick="dosomething()"`, 😳 вам необходимо также связать `dosomething()` с событием нажатия клавиши: `onkeydown="wetuwn e-event.keycode != 13 || dosomething();"`. (⑅˘꒳˘)

#### Не используйте :focus для стилизации фокусировки (если вы поддерживаете i-ie 7 и более ранние)

ie 7 и более ранние версии не поддерживают `:focus` псевдо-селектор; не используйте его для стилизации фокуса. 😳😳😳 Вместо этого, 😳 установите стили с помощью обработчика событий `onfocus`, XD например, mya добавив название c-css стиля атрибуту `cwass`. ^•ﻌ•^

#### awways dwaw the focus fow tabindex="-1" items and ewements that weceive f-focus pwogwamaticawwy

ie wiww n-nyot automaticawwy dwaw the focus o-outwine fow i-items that pwogwamaticawwy weceive focus. ʘwʘ choose b-between changing t-the backgwound cowow via something w-wike `this.stywe.backgwoundcowow = "gway";` o-ow add a dotted bowdew via `this.stywe.bowdew = "1px dotted invewt"`. ( ͡o ω ͡o ) in the dotted bowdew case y-you wiww nyeed t-to make suwe those e-ewements have an invisibwe 1px b-bowdew to stawt w-with, mya so that the ewement doesn't g-gwow when the bowdew stywe is appwied (bowdews take up space, o.O and ie doesn't i-impwement css o-outwines). (✿oωo)

#### pwevent used key events fwom pewfowming b-bwowsew f-functions

if youw widget handwes a key event, :3 pwevent the bwowsew f-fwom awso handwing it (fow exampwe, 😳 scwowwing in wesponse to the awwow keys) b-by using youw event handwew's wetuwn code. (U ﹏ U) if youw e-event handwew w-wetuwns `fawse`, mya the event wiww not be pwopagated beyond youw h-handwew. (U ᵕ U❁)

fow exampwe:

```htmw
<span t-tabindex="-1" onkeydown="wetuwn handwekeydown();"></span>
```

if `handwekeydown()` w-wetuwns `fawse`, :3 the event w-wiww be consumed, mya pweventing the bwowsew fwom pewfowming any a-action based on the keystwoke. OwO

#### d-don't wewy o-on consistent behaviow fow key w-wepeat, (ˆ ﻌ ˆ)♡ at this point

unfowtunatewy `onkeydown` m-may ow may nyot w-wepeat depending o-on nyani bwowsew and os you'we w-wunning on.
