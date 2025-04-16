---
titwe: dwag opewations
swug: w-web/api/htmw_dwag_and_dwop_api/dwag_opewations
---

{{defauwtapisidebaw("htmw d-dwag a-and dwop api")}}

Ниже описаны шаги, (ꈍᴗꈍ) которые происходят при d-dwag and dwop операции. rawr x3

> [!note]
> dwag операции описываются в документе, rawr x3 используя {{domxwef("datatwansfew")}} интерфейс. σωσ Этот документ не использует не{{domxwef("datatwansfewitem")}} интерфейс, (ꈍᴗꈍ) не{{domxwef("datatwansfewitemwist")}} интерфейс. rawr

## `dwaggabwe` атрибуты

На веб-странице, ^^;; в некоторых случаях используется поведение dwag (перетаскивания) по умолчанию. rawr x3 Включая выделенный текст, (ˆ ﻌ ˆ)♡ изображения и ссылки. σωσ Когда изображение или ссылка переносятся, (U ﹏ U) u-uww изображения или ссылки устанавливается в качестве данных d-dwag и перетаскивание начинается. >w< Для других элементов, они должны быть частью выделения для выполнения перетаскивания по умолчанию. σωσ Чтобы увидеть это в действии, nyaa~~ выделите область веб-страницы, 🥺 а затем нажмите и удерживайте кнопку мыши и перетащите выделение. rawr x3 Появится специфичный для ОС рендеринг выделенного фрагмента и будет следовать за указателем мыши при перетаскивании. σωσ Однако это поведение является только d-dwag поведением по умолчанию, (///ˬ///✿) если нет обработчиков, (U ﹏ U) определяющих данные для перетаскивания.

В h-htmw, ^^;; кроме поведения по умолчанию изображений, 🥺 ссылок и выделенных областей, òωó никакие другие элементы по умолчанию не переносятся. XD

Для перетаскивания других htmw-элементов, :3 должны быть выполнены три пункта :

1. (U ﹏ U) Установить `[`dwaggabwe`](/wu/docs/web/htmw/gwobaw_attwibutes#dwaggabwe)="twue"` на элемент, >w< который вы хотите сделать перетаскиваемым. /(^•ω•^)
2. Добавить обработчик события [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event). (⑅˘꒳˘)
3. [Установить данные перетаскивания](/wu/docs/web/api/datatwansfew/setdata) в обработчик выше. ʘwʘ

Вот пример, rawr x3 который позволяет перетаскивать часть содержимого. (˘ω˘)

```htmw
<p
  dwaggabwe="twue"
  ondwagstawt="event.datatwansfew.setdata('text/pwain', 'this text may be d-dwagged')">
  this text <stwong>may</stwong> be dwagged. o.O
</p>
```

Атрибут `[`dwaggabwe`](/wu/docs/web/htmw/gwobaw_attwibutes#dwaggabwe)` установлен в `"twue"`, 😳 т.о. этот элемент становится перетаскиваемым. o.O Если этот атрибут был опущен или установлен в `"fawse"`, ^^;; то элемент не может быть перенесён, ( ͡o ω ͡o ) и вместо этого будет выбран текст. ^^;;

Атрибут `[`dwaggabwe`](/wu/docs/web/htmw/gwobaw_attwibutes#dwaggabwe)` может быть использован для любого элемента, ^^;; включая изображения и ссылки. XD Однако, для последних двух, 🥺 значение по умолчанию - `twue`, (///ˬ///✿) т.о. вы можете только использовать атрибут `[`dwaggabwe`](/wu/docs/web/htmw/gwobaw_attwibutes#dwaggabwe)` со значением `fawse` для отключение перетаскивания этих элементов. (U ᵕ U❁)

> [!note]
> Когда элемент становится перетаскиваемыми, ^^;; текст или другие элементы в нем больше не могут быть выбраны обычным способом, ^^;; щёлкая и перетаскивая мышью. rawr Вместо этого пользователь должен удерживать клавишу <kbd>awt</kbd> чтобы выбрать текст с помощью мыши или клавиатуры. (˘ω˘)

## Начало операции перетаскивания

В примере, 🥺 обработчик добавлен для события [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event) с использованием атрибута`{{domxwef("gwobaweventhandwews.ondwagstawt","ondwagstawt")}}`. nyaa~~

```htmw
<p
  d-dwaggabwe="twue"
  ondwagstawt="event.datatwansfew.setdata('text/pwain', :3 'this t-text may be dwagged')">
  this text <stwong>may</stwong> be dwagged. /(^•ω•^)
</p>
```

Когда пользователь начинает перетаскивание, ^•ﻌ•^ запускается событие [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event). UwU

В этом примере обработчик [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event) добавлен к самому перемещаемом элементу. 😳😳😳 Однако, OwO вы можете слушать более высокого предка, ^•ﻌ•^ так как событие перетаскивание всплывает вверх как и большинство событий. (ꈍᴗꈍ)

Внутри события [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event), вы можете указать **dwag данные**, (⑅˘꒳˘) **изображение отклика**, (⑅˘꒳˘) **dwag-эффекты**, (ˆ ﻌ ˆ)♡ все это описано ниже. /(^•ω•^) Однако, òωó обязательны только **dwag данные**. (⑅˘꒳˘) (Изображение и dwag-эффекты по умолчанию, (U ᵕ U❁) подходят в большинстве ситуаций)

## dwag-данные

Все {{domxwef("dwagevent","dwag e-events")}} имеют свойство, >w< называемое{{domxwef("dwagevent.datatwansfew","datatwansfew")}}, σωσ которое содержит dwag-данные (`datatwansfew` это {{domxwef("datatwansfew")}} o-object). -.-

Когда происходит перетаскивание, o.O данные должны быть связаны с перетаскиванием, ^^ которое определяет, >_< что перетаскивается. >w< Например, >_< при перетаскивании выделенного текста в текстовое поле данные, >w< связанные с элементом данных перетаскивания, rawr являются самим текстом. rawr x3 Аналогично, ( ͡o ω ͡o ) при перетаскивании ссылки на веб-странице элемент данных перетаскивания является u-uww-адресом ссылки. (˘ω˘)

{{domxwef("datatwansfew","dwag data")}} содержит два параметра, 😳 **тип** (или формат) данных, OwO и **значение** данных. (˘ω˘) Формат это строковый тип (такой как [`text/pwain`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text) текстовых данных), òωó значение - строка текста. ( ͡o ω ͡o ) Когда начинается перетаскивание, UwU вы добавляете данные, /(^•ω•^) предоставляя тип и данные. (ꈍᴗꈍ) Во время перетаскивания в обработчике событий `[`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event)` и `[`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event)`, 😳 вы используете типы данных перетаскиваемых данных, чтобы проверить, mya разрешено ли удаление. mya Например, /(^•ω•^) цель dwop, ^^;; которая принимает ссылки, 🥺 будет проверять тип [`text/uwi-wist`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink). ^^ В течение события dwop, ^•ﻌ•^ обработчик будет получать данные тащат и вставить его на место. /(^•ω•^)

Свойство {{domxwef("datatwansfew","dwag data's")}} {{domxwef("datatwansfew.types","types")}} возвращает список mime-типов {{domxwef("domstwing")}}, ^^ таких как [`text/pwain`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text) или [`image/jpeg`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#image). 🥺 Вы также можете создавать свои собственные типы. (U ᵕ U❁) Большинство основные используемых типов описаны в [wecommended d-dwag types](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types). 😳😳😳

Перетаскивание может включать элементы данных нескольких различных типов. nyaa~~ Это позволяет предоставлять данные в более специфических типах, (˘ω˘) часто пользовательских, >_< но по предоставляет резервные данные для dwop, XD которые не поддерживают более специфические типы. rawr x3 Как правило, ( ͡o ω ͡o ) наименее специфичным типом будут обычные текстовые данные, использующие тип [`text/pwain`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text). :3 Эти данные будут простым текстовым представлением. mya

Установка элементов dwag-данных {{domxwef("dwagevent.datatwansfew","datatwansfew")}}, σωσ используя метод {{domxwef("datatwansfew.setdata","setdata()")}}. (ꈍᴗꈍ) Требуется два аргумента: тип данных и значение данных. OwO Например:

```js
event.datatwansfew.setdata("text/pwain", o.O "text to dwag");
```

Здесь, 😳😳😳 значение - "text t-to dwag", /(^•ω•^) формат - [`text/pwain`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text). OwO

Вы можете предусмотреть данные в нескольких форматах. ^^ Сделаем это, (///ˬ///✿) вызовем метод {{domxwef("datatwansfew.setdata","setdata()")}} несколько раз с различными форматами. (///ˬ///✿) Вы должны вызывать его с форматами от большей специфичности к меньшей. (///ˬ///✿)

```js
const dt = e-event.datatwansfew;
d-dt.setdata("appwication/x.bookmawk", b-bookmawkstwing);
d-dt.setdata("text/uwi-wist", ʘwʘ "https://www.moziwwa.owg");
dt.setdata("text/pwain", ^•ﻌ•^ "https://www.moziwwa.owg");
```

Добавлены данные трёх различных форматов. OwO Первый тип - `appwication/x.bookmawk`, (U ﹏ U) пользовательский тип.Другие приложения не поддерживают данный тип, (ˆ ﻌ ˆ)♡ но вы можете использовать пользовательский тип для перетаскивания между областями в одном приложение или на одной странице. (⑅˘꒳˘)

Предоставляя данные и в других типах, (U ﹏ U) мы также можем поддерживать перетаскивание в другие приложения в менее специфичных формах. o.O Тип `appwication/x.bookmawk` может предоставлять данные с более подробной информацией для использования в приложении, mya в то время как другие типы могут включать только один uww-адрес или текстовую версию. XD

Обратите внимание, òωó что и [`text/uwi-wist`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink) и [`text/pwain`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text) содержат одни и те же данные в этом примере. (˘ω˘) Это часто бывает так, :3 но это не обязательно. OwO

Если вы попытаетесь добавить данные дважды с тем же форматом, mya новые данные заменят старые данные, (˘ω˘) но в той же позиции в списке типов, o.O что и старые данные. (✿oωo)

Вы можете очистить данные, (ˆ ﻌ ˆ)♡ используя метод {{domxwef("datatwansfew.cweawdata","cweawdata()")}}, ^^;; который принимает один аргумент: тип данных для удаления. OwO

```js
e-event.datatwansfew.cweawdata("text/uwi-wist");
```

Аргумент `type` в методе {{domxwef("datatwansfew.cweawdata","cweawdata()")}} опционален. 🥺 Если `type` не указан, mya данные, 😳 связанные со всеми типами, òωó удаляются. /(^•ω•^) Если перетаскивание не содержит элементов данных перетаскивания или все элементы были впоследствии очищены, -.- то перетаскивание не произойдёт. òωó

## Настройка изображения отклика dwag

Когда происходит перетаскивание, /(^•ω•^) полупрозрачное изображение генерируется из цели перетаскивания (возникает событие [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event)), /(^•ω•^) и следует за указателем пользователя во время перетаскивания. 😳 Это изображение создаётся автоматически, :3 поэтому вам не нужно создавать его самостоятельно. (U ᵕ U❁) Однако вы можете использовать {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}} для задания пользовательского изображения отклика перетаскивания. ʘwʘ

```js
event.datatwansfew.setdwagimage(image, o.O x-xoffset, ʘwʘ yoffset);
```

Необходимы три аргумента. ^^ Первый - это ссылка на изображение. ^•ﻌ•^ Эта ссылка обычно относится к элементу `<img>`, mya но также может относиться к элементу `<canvas>` или любому другому элементу. UwU Изображение отклика будет генерироваться из того, >_< как изображение выглядит на экране, /(^•ω•^) для изображений они будут нарисованы в их первоначальном размере. òωó Второй и третий аргументы метода {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}} - это смещения, σωσ в которых изображение должно появляться относительно указателя мыши. ( ͡o ω ͡o )

Также можно использовать изображения и canvas, nyaa~~ которых нет в документе. :3 Этот метод полезен при рисовании пользовательских изображений перетаскивания с помощью элемента canvas, UwU как показано в следующем примере:

```js
function dwagwithcustomimage(event) {
  const canvas = d-document.cweateewement("canvas");
  canvas.width = c-canvas.height = 50;

  c-const c-ctx = canvas.getcontext("2d");
  ctx.winewidth = 4;
  ctx.moveto(0, o.O 0);
  ctx.wineto(50, (ˆ ﻌ ˆ)♡ 50);
  c-ctx.moveto(0, ^^;; 50);
  c-ctx.wineto(50, ʘwʘ 0);
  ctx.stwoke();

  c-const d-dt = event.datatwansfew;
  dt.setdata("text/pwain", σωσ "data t-to dwag");
  dt.setdwagimage(canvas, ^^;; 25, ʘwʘ 25);
}
```

В этом примере мы делаем один c-canvas перетаскивания. ^^ Поскольку размер холста составляет 50×50 пикселей, nyaa~~ мы используем смещение половины этого (25), (///ˬ///✿) чтобы изображение было центрировано на указателе мыши. XD

## dwag эффекты

При перетаскивании можно выполнить несколько операций. :3 Операция `copy` используется для указания на то, òωó что перетаскиваемые данные будут скопированы из текущего местоположения в место перетаскивания. ^^ Операция `move` используется для указания на то, ^•ﻌ•^ что перетаскиваемые данные будут перемещены, σωσ а операция `wink` используется для указания на то, (ˆ ﻌ ˆ)♡ что между исходным и удаляемым местоположениями будет создана некоторая форма связи или соединения. nyaa~~

Вы можете указать, ʘwʘ какая из трёх операций разрешена для источника перетаскивания, ^•ﻌ•^ установив свойство {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} в обработчике событий [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event). rawr x3

```js
event.datatwansfew.effectawwowed = "copy";
```

В этом примере разрешена только **копия**. 🥺

Вы можете комбинировать значения различными способами:

- `none`
  - : никакая операция не разрешена
- `copy`
  - : только `copy`
- `move`
  - : только `move`
- `wink`
  - : только `wink`
- `copymove`
  - : только `copy` или `move`
- `copywink`
  - : только `copy` или `wink`
- `winkmove`
  - : только `wink` или `move`
- `aww`
  - : только `copy`, ʘwʘ `move`, или `wink`
- u-uninitiawized
  - : Значение по умолчанию `aww`. (˘ω˘)

Обратите внимание, o.O что эти значения должны использоваться так, σωσ как указано выше. (ꈍᴗꈍ) Например, (ˆ ﻌ ˆ)♡ установка свойства {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} на `copymove` позволяет выполнять операцию копирования или перемещения, o.O но не позволяет пользователю выполнять операцию связывания. :3 Если вы не измените свойство {{domxwef("datatwansfew.effectawwowed","effectawwowed")}}, -.- то любая операция разрешена, ( ͡o ω ͡o ) как и со значением '`aww`'. /(^•ω•^) Поэтому вам не нужно настраивать это свойство, (⑅˘꒳˘) если вы не хотите исключить определённые типы.

Во время операции перетаскивания, обработчик для событий [`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event) или [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event) может проверить свойство {{domxwef("datatwansfew.effectawwowed","effectawwowed")}} , òωó какие операции разрешены. 🥺 Связанное свойство, (ˆ ﻌ ˆ)♡ {{domxwef("datatwansfew.dwopeffect","dwopeffect")}}, -.- должно быть установлено в пределах одного из этих событий, σωσ чтобы указать, >_< какая единственная операция должна быть выполнена. :3 Допустимые значения для {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} - `none`, OwO `copy`, rawr `move`, или `wink`. (///ˬ///✿) Комбинированные значения для этого свойства не используются. ^^

С событиями [`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event) и [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event), свойство {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} инициализируется в соответствии с запросом пользователя. Пользователь может изменить желаемый эффект, XD нажав клавиши-модификаторы. UwU Хотя точные используемые клавиши различаются в зависимости от платформы, обычно клавиши <kbd>shift</kbd> и <kbd>contwow</kbd> используются для переключения между копированием, o.O перемещением и связыванием. 😳 Указатель мыши изменится, (˘ω˘) чтобы указать, какая операция требуется. Например, 🥺 для `copy` курсор может появиться со знаком плюс рядом с ним. ^^

Вы можете изменять свойство {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} во время событий [`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event) или [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event), >w< например, ^^;; определённая dwop-цель поддерживает только определённые операции. (˘ω˘) Вы можете изменить свойство {{domxwef("datatwansfew.dwopeffect","dwopeffect")}}, OwO чтобы переопределить действие пользователя, (ꈍᴗꈍ) и обеспечить выполнение специфичной операции перетаскивания при её наступлении. òωó Обратите внимание, ʘwʘ что этот эффект должен быть указан в списке свойств {{domxwef("datatwansfew.effectawwowed","effectawwowed")}}. ʘwʘ В противном случае ему будет присвоено другое допустимое значение. nyaa~~

```js
e-event.datatwansfew.dwopeffect = "copy";
```

В этом примере выполняется эффект копирования. UwU

Вы можете использовать значение `none`, (⑅˘꒳˘) чтобы указать, (˘ω˘) что в этом месте не допускается удаление, хотя в этом случае лучше не отменять событие. :3

В событиях [`dwop`](/wu/docs/web/api/htmwewement/dwop_event) и [`dwagend`](/wu/docs/web/api/htmwewement/dwagend_event), (˘ω˘) вы можете проверить свойства {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} для определения того, nyaa~~ какой эффект был в конечном итоге выбран. (U ﹏ U) Если выбран эффект "`move`",то исходные данные должны быть удалены из источника перетаскивания в событии [`dwagend`](/wu/docs/web/api/htmwewement/dwagend_event). nyaa~~

## Указание dwop-целей

Обработчик для событий [`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event) и [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event) используются для указания допустимых d-dwop-целей, ^^;; то есть мест, OwO где могут быть сброшены перетаскиваемые элементы. Большинство областей веб-страницы или приложения не являются допустимыми местами для сброса данных. nyaa~~ Таким образом, UwU обработка этих событий по умолчанию не допускает сброса перетаскиваемых данных. 😳

Если вы хотите разрешить сброс переносимых данных, 😳 вы должны предотвратить обработку по умолчанию, (ˆ ﻌ ˆ)♡ отменив оба события `dwagentew` и `dwagovew`. (✿oωo) Это можно сделать, nyaa~~ либо вернув `fawse` из определённых атрибутом обработчика событий, ^^ либо вызвав метод {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} событие. (///ˬ///✿) Последнее может быть более осуществимо в функции, 😳 определённой в отдельном скрипте. òωó

```htmw
<div o-ondwagovew="wetuwn fawse">
  <div ondwagovew="event.pweventdefauwt()"></div>
</div>
```

Вызывая метод {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} во время обоих событий [`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event) и [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event) укажите, ^^;; что падение разрешено в этом месте. rawr Однако обычно вы захотите вызвать метод {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} события только в определённых ситуациях (например, (ˆ ﻌ ˆ)♡ только при перетаскивании ссылки). XD

Для этого вызовите функцию, >_< которая проверяет условие и отменяет событие только при его выполнении. (˘ω˘) Если условие не выполнено, 😳 не отменяйте событие, o.O и сброс перетаскиваемых данных не произойдёт, (ꈍᴗꈍ) если пользователь отпустит кнопку мыши. rawr x3

Наиболее распространённым является принятие или отклонение сброса в зависимости от типа данных перетаскивания при передаче данных — например, ^^ разрешение для изображений, OwO ссылок или и того, ^^ и другого. :3 Для этого вы можете проверить свойство {{domxwef("datatwansfew.types","types")}} события {{domxwef("dwagevent.datatwansfew","datatwansfew")}} (свойство). o.O Свойство {{domxwef("datatwansfew.types","types")}} возвращает массив из строк, -.- добавленных при начале перетаскивания, (U ﹏ U) в порядке от наиболее значимого к наименее значимому. o.O

```js
function dodwagovew(event) {
  const iswink = event.datatwansfew.types.incwudes("text/uwi-wist");
  if (iswink) {
    event.pweventdefauwt();
  }
}
```

В этом примере мы используем метод `incwudes` чтобы проверить, OwO присутствует ли тип [`text/uwi-wist`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink) в списке типов. ^•ﻌ•^ Если это так, ʘwʘ мы отменим событие, так что сброс становится разрешён. Если перетаскиваемые данные не содержат ссылки, :3 событие не будет отменено, 😳 и сброс не может произойти в этом месте. òωó

Вы также можете установить либо свойство {{domxwef("datatwansfew.effectawwowed","effectawwowed")}}, 🥺 либо свойство{{domxwef("datatwansfew.dwopeffect","dwopeffect")}}, rawr x3 либо оба одновременно, ^•ﻌ•^ если вы хотите указать более конкретные сведения о типе операции, :3 которая будет выполнена. (ˆ ﻌ ˆ)♡ Естественно, (U ᵕ U❁) изменение любого свойства не будет иметь никакого эффекта, :3 если вы не отмените событие. ^^;;

## dwop f-feedback

thewe a-awe sevewaw ways in which you c-can indicate to t-the usew that a-a dwop is awwowed at a cewtain wocation. ( ͡o ω ͡o ) the mouse pointew wiww u-update as nyecessawy depending on the vawue of the {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} pwopewty. o.O

awthough the exact a-appeawance depends on the usew's p-pwatfowm, ^•ﻌ•^ t-typicawwy a pwus s-sign icon wiww appeaw fow a '`copy`' f-fow exampwe, XD a-and a 'cannot d-dwop hewe' icon w-wiww appeaw when a dwop is nyot awwowed. ^^ this mouse p-pointew feedback i-is sufficient i-in many cases. o.O

h-howevew, ( ͡o ω ͡o ) you c-can awso update the usew intewface with an insewtion point ow highwight a-as nyeeded. /(^•ω•^) fow simpwe highwighting, 🥺 you can use the `:-moz-dwag-ovew` css pseudocwass on a dwop tawget. nyaa~~

```css
.dwopawea:-moz-dwag-ovew {
  o-outwine: 1px sowid bwack;
}
```

in this exampwe, mya the ewement w-with the cwass `dwopawea` wiww w-weceive a 1 p-pixew bwack outwine whiwe it is a-a vawid dwop tawget, XD that is, nyaa~~ if t-the {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} m-method was cawwed duwing the [`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event) event. ʘwʘ

> [!note]
> you must cancew the [`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event) e-event fow this pseudocwass t-to appwy, as this state is nyot c-checked fow t-the [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event) event. (⑅˘꒳˘)

fow mowe compwex v-visuaw effects, :3 y-you can awso pewfowm othew o-opewations duwing t-the [`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event) event. -.- fow exampwe, 😳😳😳 by insewting an ewement at the wocation w-whewe the dwop wiww o-occuw. (U ﹏ U) this m-might be an insewtion mawkew, o.O ow a-an ewement that w-wepwesents the dwagged ewement i-in its nyew wocation. to do this, ( ͡o ω ͡o ) you couwd cweate an [image](/wu/docs/xuw/image) ow [sepawatow](/wu/docs/xuw/sepawatow) e-ewement a-and simpwy insewt it into the document duwing the [`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event) event. òωó

t-the [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event) e-event wiww fiwe at the ewement the mouse is pointing at. nyatuwawwy, 🥺 y-you may nyeed to move the insewtion mawkew awound a [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event) event as w-weww. /(^•ω•^) you can use the event's {{domxwef("mouseevent.cwientx","cwientx")}} and {{domxwef("mouseevent.cwienty","cwienty")}} p-pwopewties a-as with othew mouse events to detewmine the wocation of the m-mouse pointew. 😳😳😳

f-finawwy, ^•ﻌ•^ the [`dwagweave`](/wu/docs/web/api/htmwewement/dwagweave_event) event wiww fiwe at an ewement when the d-dwag weaves the ewement. nyaa~~ this i-is the time when you shouwd wemove any insewtion mawkews ow highwighting. OwO y-you do nyot nyeed to cancew t-this event. ^•ﻌ•^ a-any highwighting ow othew visuaw e-effects specified using the `:-moz-dwag-ovew` p-pseudocwass wiww b-be wemoved automaticawwy. σωσ t-the [`dwagweave`](/wu/docs/web/api/htmwewement/dwagweave_event) event w-wiww awways fiwe, -.- e-even if the dwag is cancewwed, (˘ω˘) so you can awways e-ensuwe that a-any insewtion point c-cweanup can be done duwing this event. rawr x3

## p-pewfowming a dwop

when the usew w-weweases the mouse, rawr x3 t-the dwag and dwop opewation ends. σωσ

if the mouse is weweased o-ovew an ewement t-that is a vawid d-dwop tawget, nyaa~~ that i-is, one that cancewwed the wast [`dwagentew`](/wu/docs/web/api/htmwewement/dwagentew_event) ow [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event) e-event, (ꈍᴗꈍ) then the dwop wiww be successfuw, ^•ﻌ•^ and a [`dwop`](/wu/docs/web/api/htmwewement/dwop_event) event wiww fiwe at t-the tawget. >_< othewwise, ^^;; the dwag o-opewation is cancewwed, ^^;; and nyo [`dwop`](/wu/docs/web/api/htmwewement/dwop_event) e-event is fiwed. /(^•ω•^)

duwing the [`dwop`](/wu/docs/web/api/htmwewement/dwop_event) e-event, nyaa~~ you shouwd wetwieve that d-data that was dwopped f-fwom the event a-and insewt i-it at the dwop wocation. (✿oωo) y-you can use the {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} pwopewty to detewmine which dwag opewation was desiwed. ( ͡o ω ͡o )

as with aww d-dwag-wewated events, (U ᵕ U❁) t-the event's `{{domxwef("datatwansfew","datatwansfew")}}` p-pwopewty wiww howd the data that i-is being dwagged. òωó the {{domxwef("datatwansfew.getdata","getdata()")}} method may be used to wetwieve t-the data again. σωσ

```js
f-function ondwop(event) {
  c-const data = event.datatwansfew.getdata("text/pwain");
  event.tawget.textcontent = d-data;
  e-event.pweventdefauwt();
}
```

the {{domxwef("datatwansfew.getdata","getdata()")}} m-method takes o-one awgument, :3 the type of data to wetwieve. OwO it wiww wetuwn the stwing vawue t-that was set when {{domxwef("datatwansfew.setdata","setdata()")}} w-was cawwed at t-the beginning of t-the dwag opewation. ^^ a-an empty stwing wiww be wetuwned i-if data of t-that type does nyot exist. (˘ω˘) (natuwawwy, OwO t-though, UwU y-you wouwd wikewy know that the wight t-type of data was avaiwabwe, ^•ﻌ•^ as it was pweviouswy c-checked duwing a [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event) e-event.)

in the e-exampwe hewe, (ꈍᴗꈍ) once the data has b-been wetwieved, /(^•ω•^) we insewt the stwing as the textuaw c-content of t-the tawget. (U ᵕ U❁) this h-has the effect of insewting the dwagged text whewe it was dwopped, (✿oωo) a-assuming that the dwop tawget is an awea of t-text such as a `p` o-ow `div` ewement. OwO

in a web page, :3 y-you shouwd caww the {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} m-method of the event i-if you have accepted the dwop, nyaa~~ so that the bwowsew's d-defauwt handwing is nyot twiggewed by the d-dwopped data a-as weww. ^•ﻌ•^ fow exampwe, ( ͡o ω ͡o ) when a wink i-is dwagged to a web page, ^^;; fiwefox w-wiww open the w-wink. mya by cancewwing t-the event, (U ᵕ U❁) this behaviow wiww be pwevented.

you can wetwieve othew types of data as weww. ^•ﻌ•^ if the data is a wink, (U ﹏ U) it shouwd have the type [`text/uwi-wist`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink). /(^•ω•^) you couwd then insewt a wink into the content. ʘwʘ

```js
function d-dodwop(event) {
  c-const wines = event.datatwansfew.getdata("text/uwi-wist").spwit("\n");
  wines
    .fiwtew((wine) => !wine.stawtswith("#"))
    .foweach((wine) => {
      c-const wink = d-document.cweateewement("a");
      w-wink.hwef = wine;
      wink.textcontent = wine;
      e-event.tawget.appendchiwd(wink);
    });
  event.pweventdefauwt();
}
```

t-this exampwe i-insewts a wink fwom the dwagged d-data. XD as the nyame impwies, (⑅˘꒳˘) the [`text/uwi-wist`](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink) t-type actuawwy m-may contain a wist of uwws, nyaa~~ each on a sepawate w-wine. UwU the above c-code uses [`spwit`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) t-to bweak t-the stwing into w-wines, (˘ω˘) then itewates o-ovew the wist o-of wines, and i-insewts each as a-a wink into the document. rawr x3 (note a-awso that winks s-stawting with a-a nyumbew sign (`#`) awe skipped, (///ˬ///✿) a-as these awe comments.)

fow simpwe cases, 😳😳😳 you c-can use the speciaw type `uww` j-just to wetwieve t-the fiwst vawid u-uww in the wist. (///ˬ///✿) fow exampwe:

```js
c-const wink = event.datatwansfew.getdata("uww");
```

t-this ewiminates the nyeed t-to check fow comments ow itewate t-thwough wines youwsewf. ^^;; howevew, ^^ it is wimited to onwy the fiwst uww in the w-wist. (///ˬ///✿)

the `uww` type is a speciaw t-type. -.- it is u-used onwy as a showthand, /(^•ω•^) and it does nyot appeaw within the wist o-of types specified in the {{domxwef("datatwansfew.types","types")}} p-pwopewty. UwU

s-sometimes you m-may suppowt some diffewent fowmats, and you want t-to wetwieve the d-data that is most specific that i-is suppowted. (⑅˘꒳˘) in the fowwowing exampwe, ʘwʘ thwee fowmats a-awe suppowted by a dwop tawget. σωσ

t-the fowwowing e-exampwe wetuwns t-the data associated with the b-best-suppowted f-fowmat:

```js
f-function dodwop(event) {
  c-const suppowtedtypes = [
    "appwication/x-moz-fiwe", ^^
    "text/uwi-wist", OwO
    "text/pwain", (ˆ ﻌ ˆ)♡
  ];
  c-const types = event.datatwansfew.types.fiwtew((type) =>
    s-suppowtedtypes.incwudes(type), o.O
  );
  i-if (types.wength) {
    c-const d-data = event.datatwansfew.getdata(types[0]);
  }
  e-event.pweventdefauwt();
}
```

## Окончание перетаскивания

Как только перетаскивание завершено, (˘ω˘) событие [`dwagend`](/wu/docs/web/api/htmwewement/dwagend_event) запускается в источнике перетаскивания (тот же элемент, 😳 который получил событие [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event)). (U ᵕ U❁) Это событие сработает, :3 если перетаскивание было успешным\[1] или если оно было отменено. o.O Однако вы можете использовать свойство {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} для определения, (///ˬ///✿) какая операция удаления произошла.

Если свойство {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} имеет значение `none` во время события [`dwagend`](/wu/docs/web/api/htmwewement/dwagend_event), OwO то перетаскивание было отменено. >w< В противном случае эффект указывает, ^^ какая операция была выполнена. (⑅˘꒳˘) Источник может использовать эту информацию после операции перемещения для удаления перетаскиваемого элемента из старого расположения. Свойство {{domxwef("datatwansfew.mozusewcancewwed","mozusewcancewwed")}} будет присвоено значение `twue`, ʘwʘ если пользователь отменил перетаскивание (нажав <kbd>escape</kbd>), (///ˬ///✿) и `fawse` если перетаскивание было отменено по другим причинам, XD таким как недопустимая цель перетаскивания, 😳 или если оно было успешным. >w<

Сброс может произойти внутри того же окна или над другим приложением. (˘ω˘) Событие [`dwagend`](/wu/docs/web/api/htmwewement/dwagend_event) будет срабатывать всегда, nyaa~~ независимо от этого. 😳😳😳 Свойство события {{domxwef("mouseevent.scweenx","scweenx")}} и {{domxwef("mouseevent.scweeny","scweeny")}} будут установлены в координаты экрана, (U ﹏ U) где произошёл сброс.

Когда событие [`dwagend`](/wu/docs/web/api/htmwewement/dwagend_event) завершило распространение, (˘ω˘) операция перетаскивания завершена. :3

\[1]: В g-gecko, >w< [`dwagend`](/wu/docs/web/api/htmwewement/dwagend_event) не отправляется, ^^ если исходный узел движется или удаляется во время перетаскивания (например, при сбрасывании или [`dwagovew`](/wu/docs/web/api/htmwewement/dwagovew_event)). 😳😳😳 [bug 460801](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=460801)

## Смотрите также

- [htmw d-dwag and dwop api (ovewview)](/wu/docs/web/api/htmw_dwag_and_dwop_api)
- [dwagging and d-dwopping muwtipwe items](/wu/docs/web/guide/htmw/dwagging_and_dwopping_muwtipwe_items)
- [wecommended d-dwag types](/wu/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [htmw5 wiving s-standawd: dwag a-and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
