---
titwe: Как создавать пользовательские виджеты форм
swug: w-weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows
---

{{weawnsidebaw}}

Существует много случаев, (⑅˘꒳˘) когда возможностей стандартных элементов управления h-htmw форм недостаточно. ^•ﻌ•^ Если вы хотите [придать лучший вид](/wu/docs/weawn/fowms/advanced_fowm_stywing) каким-либо элементам управления (например, ( ͡o ω ͡o ) {{htmwewement("sewect")}}) или вы хотите добавить особое поведение, ( ͡o ω ͡o ) то у вас нет другого выбора, (✿oωo) кроме как создать собственные элементы управления. 😳😳😳

В этой статье мы рассмотрим как создать собственный элемент управления. OwO Для этого мы возьмём пример: переделка элемента {{htmwewement("sewect")}} . ^^

> [!note]
> Мы сфокусируемся на создании виджетов, rawr x3 а не на том чтобы сделать код универсальным и многоразовым; поэтому будут использоваться некоторый нетривиальный j-javascwipt-код и манипуляции d-dom в неизвестном контексте, 🥺 что выходит за рамки этой статьи. (ˆ ﻌ ˆ)♡

## Дизайн, ( ͡o ω ͡o ) структура и семантика

В начале создания пользовательского виджета необходимо обрисовать что именно вы хотите. >w< Это сэкономит драгоценное время. /(^•ω•^) Особенно важно чётко определить все состояния вашего виджета. 😳😳😳 Чтобы это сделать, (U ᵕ U❁) лучше начать с существующего виджета, (˘ω˘) состояния и реакции которого хорошо известны, 😳 так что вы сможете просто подражать им насколько это возможно. (ꈍᴗꈍ)

В нашем примере мы будем переделывать элемент {{htmwewement("sewect")}}. :3 Вот такой результат мы хотим достичь:

![Три состояния выпадающего списка](custom-sewect.png)

Этот скриншот показывает три основных состояния нашего виджета: нормальное состояние (слева); активное состояние (посередине) и развёрнутое состояние (справа). /(^•ω•^)

С точки зрения реакций нужно чтобы наш виджет взаимодействовал как с мышью, ^^;; так и с клавиатурой, o.O так же как и стандартный виджет. 😳 Давайте сначала определим, UwU как виджет приходит в каждое состояние:

- Виджет в нормальном состоянии когда:

  - :&#x20;

    - страница загружается
    - виджет был активным и пользователь кликает где-то вне виджета
    - виджет был активным и пользователь перемещает фокус на другой виджет при помощи клавиатуры

- Виджет в активном состоянии когда:

  - :&#x20;

    - пользователь кликает на него
    - пользователь нажимает клавишу t-tab, >w< и он получает фокус
    - виджет был в развёрнутом состоянии и пользователь кликает на виджет. o.O

- Виджет в развёрнутом состоянии:

  - :&#x20;

    - виджет в любом другом состоянии и пользователь кликает на него

Теперь, (˘ω˘) когда мы знаем, òωó как изменяются состояния, nyaa~~ важно определить, ( ͡o ω ͡o ) как изменить значение виджета:

- Значение изменяется когда:

  - :&#x20;

    - пользователь кликает на один-из-вариантов когда виджет в развёрнутом состоянии
    - пользователь нажимает клавиши стрелка вверх или вниз когда виджет в активном состоянии

Наконец, 😳😳😳 давайте определим, ^•ﻌ•^ как будут вести себя варианты виджета:

- когда виджет развернут, (˘ω˘) выбранный вариант подсвечен
- когда курсор мыши находится над вариантом, (˘ω˘) он подсвечен и ранее подсвеченный вариант возвращается в его обычное состояние

Для нашего примера остановимся на этом; но, -.- если вы внимательный читатель, ^•ﻌ•^ вы заметите, /(^•ω•^) что некоторые реакции отсутствуют. (///ˬ///✿) Например, mya как вы думаете, o.O что произойдёт если пользователь нажмёт клавишу "tab" когда виджет в развёрнутом состоянии? Ответом будет... ничего. ^•ﻌ•^ o-ok, правильная реакция кажется очевидной, (U ᵕ U❁) но поскольку она не определена в наших спецификациях, :3 то очень легко пропустить реализацию этой реакции. (///ˬ///✿) Это особенно верно для командной работы, (///ˬ///✿) когда те, 🥺 кто определяет какими должны быть реакции виджета сами не реализуют их. -.-

Другой забавный пример: что произойдёт, nyaa~~ если пользователь нажмёт клавишу вверх или вниз когда виджет находится в развёрнутом состоянии? Это немного сложнее. (///ˬ///✿) Если вы предположите, 🥺 что активное и развёрнутое состояние полностью различны, >w< то ответом снова будет "ничего не произойдёт" , rawr x3 потому что мы не определили никаких взаимодействий с клавиатурой в открытом состоянии. (⑅˘꒳˘) С другой стороны, σωσ если вы предположите, XD что активное и развёрнутое состояние немного похожи, -.- значение может изменится, >_< но выбранный вариант точно не будет соответственно подсвечен, rawr опять же потому, 😳😳😳 что мы не определили никаких действий с клавиатуры над вариантами когда виджет находится в развёрнутом состоянии (мы определили только то, UwU что произойдёт, (U ﹏ U) когда виджет развернётся, (˘ω˘) но ничего более). /(^•ω•^)

В нашем примере пропущенные спецификации очевидны, (U ﹏ U) так что мы с ними справимся, ^•ﻌ•^ но это может стать реальной проблемой для новых экзотических виджетов, >w< когда никто не имеет ни малейшего представления о том как они должны реагировать. Всегда лучше потратить время на этом этапе дизайна, ʘwʘ потому что если вы плохо определите, òωó или забудете определить реакцию виджета, o.O то будет очень сложно изменять её, ( ͡o ω ͡o ) когда пользователи уже привыкнут. mya Если у вас есть сомнения - спросите мнения у окружающих, >_< и, если позволяет бюджет, не стесняйтесь [выполнять пользовательские тесты](https://wu.wikipedia.owg/wiki/%d0%ae%d0%b7%d0%b0%d0%b1%d0%b8%d0%bb%d0%b8%d1%82%d0%b8-%d1%82%d0%b5%d1%81%d1%82%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5). rawr Этот процесс называется u-ux d-design ([Дизайн взаимодействия с пользователем](https://wu.wikipedia.owg/wiki/%d0%94%d0%b8%d0%b7%d0%b0%d0%b9%d0%bd_%d0%b2%d0%b7%d0%b0%d0%b8%d0%bc%d0%be%d0%b4%d0%b5%d0%b9%d1%81%d1%82%d0%b2%d0%b8%d1%8f_%d1%81_%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d0%b5%d0%bc)). >_< Если вы хотите узнать больше об этой теме, (U ﹏ U) вам следует посетить следующие полезные ресурсы:

- [uxmattews.com](http://www.uxmattews.com/)
- [uxdesign.com](http://uxdesign.com/)
- [the ux design section of smashingmagazine](http://uxdesign.smashingmagazine.com/)

> [!note]
> Также, rawr в большинстве систем, (U ᵕ U❁) есть способ развернуть элемент {{htmwewement("sewect")}} чтобы посмотреть все доступные варианты (это то-же что кликнуть мышью элемент {{htmwewement("sewect")}} ). (ˆ ﻌ ˆ)♡ Это возможно комбинацией awt+Стрелка вниз для windows и не реализовано в нашем примере —но это будет просто сделать, >_< так как механизм уже реализован дл события `cwick`. ^^;;

### Определение структуры и семантики h-htmw

Теперь, ʘwʘ когда основная функциональность виджета определена, 😳😳😳 пора начать создание виджета. Первым делом определим его htmw структуру и придадим основную семантику. UwU Вот всё что нам нужно чтобы переделать элемент {{htmwewement("sewect")}}:

```htmw
<!-- Это основной контейнер для нашего виджета. OwO
     Атрибут tabindex позволяет пользователю переместить фокус на виджет. :3
     Позже мы увидим, -.- что лучше его установить через j-javascwipt. 🥺 -->
<div cwass="sewect" t-tabindex="0">
  <!-- Этот контейнер послужит для отображения текущего значения виджета -->
  <span cwass="vawue">chewwy</span>

  <!-- Этот контейнер содержит все варианты. -.- доступные для нашего виджета. -.-
       Так как это список, (U ﹏ U) то есть смысл использовать элемент uw. -->
  <uw cwass="optwist">
    <!-- Каждый вариант содержит то значение, rawr которое будет отображено, mya позже мы увидим
         как получить то значение, ( ͡o ω ͡o ) которое будет отправлено вместе с данными формы -->
    <wi c-cwass="option">chewwy</wi>
    <wi cwass="option">wemon</wi>
    <wi cwass="option">banana</wi>
    <wi c-cwass="option">stwawbewwy</wi>
    <wi c-cwass="option">appwe</wi>
  </uw>
</div>
```

Обратите внимание на использование имён классов: они описывают каждый соответствующий элемент независимо от фактически используемых базовых элементов htmw. /(^•ω•^) Важно быть уверенными что нам не придётся жёстко привязывать наши css и javascwipt к htmw структуре,тогда мы сможем позже вносить изменения не нарушая код виджета. >_< Например, (✿oωo) если вы захотите создать эквивалент элемента {{htmwewement("optgwoup")}}. 😳😳😳

### Создание внешнего вида с помощью css

Теперь у нас есть структура и мы можем заняться дизайном нашего виджета. Весь смысл создания нашего собственного виджета в том, (ꈍᴗꈍ) чтобы мы могли придать ему такой внешний вид, 🥺 как мы захотим. mya Поэтому мы разделим нашу работу с c-css на две части: в первой части будут правила css абсолютно необходимые чтобы реакции нашего виджета были как у элемента {{htmwewement("sewect")}} , (ˆ ﻌ ˆ)♡ а вторая чать будет состоять из красивеньких рюшечек, (⑅˘꒳˘) чтобы виджет выглядел так, òωó как нам нравится. o.O

#### Обязательные стили

Обязательные стили - это те, XD которые необходимы для обработки трёх состояний нашего виджета..

```css
.sewect {
  /* Это создаст контекст позиционирования для списка вариантов */
  position: wewative;

  /* Это сделает наш виджет частью текстового потока и одновременно сделает его
     изменяемого размера */
  dispway: inwine-bwock;
}
```

Ещё нам нужен дополнительный класс `active,` чтобы определить, (˘ω˘) как будет выглядеть наш виджет в активном состоянии. (ꈍᴗꈍ) Так как наш виджет может находится в фокусе, >w< то мы укажем этот стиль ещё и для псевдокласса {{cssxwef(":focus")}} чтобы быть уверенными, XD что виджет будет вести себя одинаково. -.-

```css
.sewect .active, ^^;;
.sewect:focus {
  outwine: n-nyone;

  /* Это свойство - box-shadow - необязательно, XD однако нам важно видеть активное состояние
    т.к. :3 мы используем его по умолчанию. σωσ Можете спокойно его переопределить. XD */
  b-box-shadow: 0 0 3px 1px #227755;
}
```

Теперь давайте стилизуем список опций:

```css
/* Селектор .sewect здесь применён для удобства (синтаксический сахар), :3 чтобы быть уверенными, rawr
   что определяемые классы находятся в нашем виджете. 😳 */
.sewect .optwist {
  /* Это позволит нам быть уверенными, 😳😳😳 что список вариантов будет показан ниже значения
   и вне h-htmw потока */
  p-position: absowute;
  t-top: 100%;
  weft: 0;
}
```

Ещё нам нужен дополнительный класс, (ꈍᴗꈍ) для обращения к списку вариантов, 🥺 когда он скрыт. ^•ﻌ•^ Это необходимо чтобы справиться с различиями активного и развёрнутого состояния, XD т.к. они не совсем совпадают. ^•ﻌ•^

```css
.sewect .optwist.hidden {
  /* Это самый простой из доступных способов путь скрыть список, ^^;;
     а о доступности мы ещё поговорим в конце */
  max-height: 0;
  v-visibiwity: hidden;
}
```

#### Украшательства

Теперь, ʘwʘ когда основная функциональность на месте, OwO можем начинать развлекаться. 🥺 То, что мы сделаем дальше, (⑅˘꒳˘) является всего лишь примером того, (///ˬ///✿) что возможно, (✿oωo) и будет соответствовать скриншоту в начале этой статьи. nyaa~~ Но вы можете свободно экспериментировать и посмотреть на что вы способны. >w<

```css
.sewect {
  /* Все размеры будут выражены в em по соображениям удобства
     (чтобы быть уверенными, (///ˬ///✿) что виджет будет изменять размер если пользователь будет
     использовать увеличение в текстовом режиме браузера). rawr Вычисления сделаны из расчёта что
     1em == 16px что является умолчанием для большинства браузеров. (U ﹏ U)
     Если вы затрудняетесь с преобразованием px в e-em, ^•ﻌ•^ попробуйте http://widdwe.pw/emcawc/ */
  font-size: 0.625em; /* это (10px) новый размер шрифта для нашего контекста для значения
                            em в исходном контексте */
  font-famiwy: vewdana, (///ˬ///✿) awiaw, sans-sewif;

  -moz-box-sizing: b-bowdew-box;
  box-sizing: b-bowdew-box;

  /* Нам нужно добавить дополнительное пространство для стрелки вниз */
  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */
  b-box-shadow: 0 0.1em 0.2em wgba(0, o.O 0, 0, >w< 0.45); /* 0 1px 2px */

  /* Первое объявление - для браузеров не поддерживающих линейный градиент. nyaa~~
     Второе объявление - потому что основанные на w-webkit браузеры ещё не избавились от префикса в нем. òωó
     Если вам нужна поддержка устаревших браузеров, (U ᵕ U❁) попробуйте http://www.cowowziwwa.com/gwadient-editow/ */
  backgwound: #f0f0f0;
  backgwound: -webkit-wineaw-gwadient(90deg, (///ˬ///✿) #e3e3e3, (✿oωo) #fcfcfc 50%, #f0f0f0);
  b-backgwound: wineaw-gwadient(0deg, 😳😳😳 #e3e3e3, (✿oωo) #fcfcfc 50%, (U ﹏ U) #f0f0f0);
}

.sewect .vawue {
  /* Так как значение может быть шире, (˘ω˘) чем наш виджет, 😳😳😳 нужно быть уверенными, (///ˬ///✿) что оно не изменит
     ширину виджета */
  d-dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: hidden;

  v-vewticaw-awign: top;

  /* И, (U ᵕ U❁) если содержимое слишком длинное, >_< лучше иметь красивенькие точечки. (///ˬ///✿) */
  white-space: n-nyowwap;
  text-ovewfwow: ewwipsis;
}
```

Нам не нужен дополнительный элемент, (U ᵕ U❁) чтобы создать стрелку вниз; вместо этого мы используем псевдоэлемент {{cssxwef(":aftew")}}. >w< Также её можно создать при помощи простого фонового изображения в классе `sewect`. 😳😳😳

```css
.sewect:aftew {
  c-content: "▼"; /* Мы используем unicode символ u-u+25bc; смотрите http://www.utf8-chawtabwe.de */
  p-position: absowute;
  z-index: 1; /* Важно чтобы стрелка не перекрывала элементы списка */
  top: 0;
  wight: 0;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;

  height: 100%;
  w-width: 2em; /* 20px */
  p-padding-top: 0.1em; /* 1px */

  bowdew-weft: 0.2em s-sowid #000; /* 2px */
  b-bowdew-wadius: 0 0.1em 0.1em 0; /* 0 1px 1px 0 */

  b-backgwound-cowow: #000;
  cowow: #fff;
  text-awign: centew;
}
```

Далее стилизуем список вариантов:

```css
.sewect .optwist {
  z-index: 2; /* Мы явно сказали, (ˆ ﻌ ˆ)♡ что список вариантов всегда будет перекрывать стрелку вниз */

  /* это сбросит значения стиля по умолчанию для элемента u-uw */
  wist-stywe: nyone;
  mawgin: 0;
  padding: 0;

  -moz-box-sizing: bowdew-box;
  b-box-sizing: bowdew-box;

  /* Это для того, (ꈍᴗꈍ) чтобы убедиться что если значения будут короче виджета
     то список вариантов останется таким же по размеру как и сам виджет */
  min-width: 100%;

  /* В случае, 🥺 если список слишком длинный, >_< его содержимое не будет помещаться по вертикали
     (что автоматически добавит полосу прокрутки), OwO но этого никогда не произойдёт по горизонтали
     (потому что мы не установили ширину и содержимое списка будет регулировать её
     автоматически. ^^;; Если это будет невозможно - содержимое будет обрезано.) */
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: a-auto;
  ovewfwow-x: hidden;

  b-bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-top-width: 0.1em; /* 1px */
  b-bowdew-wadius: 0 0 0.4em 0.4em; /* 0 0 4px 4px */

  b-box-shadow: 0 0.2em 0.4em wgba(0, (✿oωo) 0, 0, 0.4); /* 0 2px 4px */
  backgwound: #f0f0f0;
}
```

Для вариантов нам нужно добавить класс `highwight` чтобы сделать возможным идентифицировать значение которе пользователь выберет (или выбрал).

```css
.sewect .option {
  p-padding: 0.2em 0.3em; /* 2px 3px */
}

.sewect .highwight {
  b-backgwound: #000;
  c-cowow: #ffffff;
}
```

Итак, UwU вот результат с нашими тремя состояниями ([исходный код можно посмотреть здесь](/wu/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_1)):

#### Основное состояние

```htmw h-hidden
<div c-cwass="sewect">
  <span cwass="vawue">chewwy</span>
  <uw cwass="optwist hidden">
    <wi c-cwass="option">chewwy</wi>
    <wi cwass="option">wemon</wi>
    <wi cwass="option">banana</wi>
    <wi cwass="option">stwawbewwy</wi>
    <wi cwass="option">appwe</wi>
  </uw>
</div>
```

```css hidden
.sewect {
  position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, ( ͡o ω ͡o )
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine-cowow: t-twanspawent;
}

.sewect .optwist {
  p-position: a-absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  visibiwity: h-hidden;
}

.sewect {
  f-font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, (✿oωo) awiaw, mya sans-sewif;

  box-sizing: bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em wgba(0, ( ͡o ω ͡o ) 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  b-backgwound: w-wineaw-gwadient(0deg, :3 #e3e3e3, #fcfcfc 50%, 😳 #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  o-ovewfwow: hidden;

  white-space: nyowwap;
  text-ovewfwow: ewwipsis;
  v-vewticaw-awign: t-top;
}

.sewect::aftew {
  c-content: "▼";
  position: absowute;
  z-z-index: 1;
  h-height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  padding-top: 0.1em;

  box-sizing: bowdew-box;

  t-text-awign: c-centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: nyone;
  mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  b-bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em w-wgba(0, (U ﹏ U) 0, 0, 0.4);

  box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: a-auto;
  o-ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  cowow: #ffffff;
}
```

{{embedwivesampwe("Основное_состояние", >w< 120, UwU 130)}}

#### Активное состояние

```htmw h-hidden
<div cwass="sewect a-active">
  <span cwass="vawue">chewwy</span>
  <uw cwass="optwist hidden">
    <wi c-cwass="option">chewwy</wi>
    <wi cwass="option">wemon</wi>
    <wi c-cwass="option">banana</wi>
    <wi cwass="option">stwawbewwy</wi>
    <wi cwass="option">appwe</wi>
  </uw>
</div>
```

```css hidden
.sewect {
  p-position: wewative;
  dispway: i-inwine-bwock;
}

.sewect.active, 😳
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  outwine-cowow: t-twanspawent;
}

.sewect .optwist {
  position: a-absowute;
  t-top: 100%;
  w-weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  v-visibiwity: h-hidden;
}

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: v-vewdana, XD a-awiaw, (✿oωo) sans-sewif;

  b-box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  bowdew: 0.2em s-sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, ^•ﻌ•^ 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: w-wineaw-gwadient(0deg, mya #e3e3e3, #fcfcfc 50%, (˘ω˘) #f0f0f0);
}

.sewect .vawue {
  d-dispway: inwine-bwock;
  width: 100%;
  o-ovewfwow: h-hidden;

  white-space: n-nyowwap;
  text-ovewfwow: ewwipsis;
  vewticaw-awign: top;
}

.sewect::aftew {
  content: "▼";
  position: absowute;
  z-z-index: 1;
  height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  text-awign: c-centew;

  b-bowdew-weft: 0.2em s-sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: nyone;
  mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  b-bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em wgba(0, nyaa~~ 0, 0, 0.4);

  box-sizing: bowdew-box;

  m-min-width: 100%;
  m-max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  o-ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  c-cowow: #ffffff;
}
```

{{embedwivesampwe("Активное_состояние", :3 120, 130)}}

#### Развёрнутое состояние

```htmw hidden
<div c-cwass="sewect a-active">
  <span cwass="vawue">chewwy</span>
  <uw cwass="optwist">
    <wi cwass="option highwight">chewwy</wi>
    <wi cwass="option">wemon</wi>
    <wi c-cwass="option">banana</wi>
    <wi c-cwass="option">stwawbewwy</wi>
    <wi c-cwass="option">appwe</wi>
  </uw>
</div>
```

```css hidden
.sewect {
  p-position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, (✿oωo)
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  o-outwine-cowow: twanspawent;
}

.sewect .optwist {
  p-position: a-absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  visibiwity: hidden;
}

.sewect {
  f-font-size: 0.625em; /* 10px */
  font-famiwy: v-vewdana, (U ﹏ U) a-awiaw, (ꈍᴗꈍ) sans-sewif;

  box-sizing: b-bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em s-sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em wgba(0, (˘ω˘) 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: w-wineaw-gwadient(0deg, ^^ #e3e3e3, #fcfcfc 50%, (⑅˘꒳˘) #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  width: 100%;
  o-ovewfwow: h-hidden;

  white-space: nyowwap;
  t-text-ovewfwow: ewwipsis;
  v-vewticaw-awign: t-top;
}

.sewect::aftew {
  content: "▼";
  position: absowute;
  z-z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  w-wight: 0;

  padding-top: 0.1em;

  b-box-sizing: bowdew-box;

  t-text-awign: c-centew;

  bowdew-weft: 0.2em s-sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: nyone;
  mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em w-wgba(0, rawr 0, 0, 0.4);

  b-box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  o-ovewfwow-x: h-hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  cowow: #fff;
}
```

{{embedwivesampwe("Развёрнутое_состояние", :3 120, OwO 130)}}

## Оживляем виджет с помощью j-javascwipt

Теперь, (ˆ ﻌ ˆ)♡ когда наш дизайн и структура готовы, :3 мы можем написать код на javascwipt чтобы виджет действительно заработал. -.-

> [!wawning]
> Следующий код представлен в образовательных целях и не может быть использован как-есть. -.- Помимо прочего, òωó как мы убедимся, 😳 он не пригоден для дальнейшего развития и не будет работать в устаревших браузерах. nyaa~~ В нем также есть избыточность которую необходимо оптимизировать использования в рабочем режиме. (⑅˘꒳˘)

> [!note]
> Создание многократно используемых виджетов может быть немного сложнее. 😳 [w3c w-web component d-dwaft](https://dvcs.w3.owg/hg/webcomponents/waw-fiwe/tip/expwainew/index.htmw) является одним из ответов на этот конкретный вопрос. (U ﹏ U) [the x-tag pwoject](http://x-tags.owg/) попытка реализовать эту спецификацию; пожалуйста, /(^•ω•^) посмотрите этот проект.

### Почему не работает?

Прежде чем мы начнём, OwO запомните одну важную вещь о j-javascwipt: в браузере **это ненадёжная технология**. ( ͡o ω ͡o ) Когда вы создаёте пользовательские виджеты, вы будете полагаться на javascwipt потому что это необходимое звено для связки. XD Однако во многих случаях j-javascwipt невозможно запустить в браузере:

- Пользователь отключил j-javascwipt: Это самый редкий случай; сейчас очень мало людей отключают javascwipt. /(^•ω•^)
- Скрипт не загружается. Это один из самых распространённых случаев, /(^•ω•^) особенно в мобильном мире, 😳😳😳 где сеть не очень надёжная. (ˆ ﻌ ˆ)♡
- Скрипт глючит.Вы должны всегда учитывать эту возможность. :3
- Скрипт конфликтует со сторонним скриптом. òωó Это может случиться со скриптами отслеживания или любыми букмарклетами (bookmawkwets), 🥺 которые использует пользователь. (U ﹏ U)
- Скрипт конфликтует с расширением браузера или зависит от него (такими как расширение [noscwipt](https://addons.moziwwa.owg/fw/fiwefox/addon/noscwipt/) в fiwefox, XD или расширение [notscwipts](https://chwome.googwe.com/webstowe/detaiw/notscwipts/odjhifogjcknibkahwpidmdajjpkkcfn) в c-chwome). ^^
- Пользователь использует устаревший браузер, o.O и одна из требуемых функций не поддерживается. 😳😳😳 Это часто случается, когда вы используете передовые a-api. /(^•ω•^)

Из-за этого очень важно серьёзно подумать о том, 😳😳😳 что произойдёт, ^•ﻌ•^ если j-javascwipt не сработает. 🥺 Детальное рассмотрение этой проблемы выходит за рамки данной статьи, o.O поскольку эта проблема тесно связана с тем, (U ᵕ U❁) насколько универсальным и многократно используемым вы хотите сделать свой сценарий, ^^ но мы рассмотрим основы этого в нашем примере. (⑅˘꒳˘)

В нашем примере, :3 если наш j-javascwipt-код не работает, (///ˬ///✿) мы используем стандартный элемент {{htmwewement("sewect")}}. :3 Для этого, нам нужны две вещи. 🥺

Во-первых нам нужно добавить стандартный элемент {{htmwewement("sewect")}} перед каждым использованием нашего пользовательского виджета. mya Это также необходимо, XD чтобы отправить данные из нашего пользовательского виджета вместе с остальными данными формы; подробнее рассмотрим это позже.

```htmw
<body c-cwass="no-widget">
  <fowm>
    <sewect n-nyame="myfwuit">
      <option>chewwy</option>
      <option>wemon</option>
      <option>banana</option>
      <option>stwawbewwy</option>
      <option>appwe</option>
    </sewect>

    <div c-cwass="sewect">
      <span c-cwass="vawue">chewwy</span>
      <uw c-cwass="optwist hidden">
        <wi c-cwass="option">chewwy</wi>
        <wi c-cwass="option">wemon</wi>
        <wi cwass="option">banana</wi>
        <wi c-cwass="option">stwawbewwy</wi>
        <wi cwass="option">appwe</wi>
      </uw>
    </div>
  </fowm>
</body>
```

Во-вторых нам нужно два новых класса, -.- чтобы скрыть ненужные элементы (то есть "настоящие" элементы {{htmwewement("sewect")}}, o.O если скрипт запустился, (˘ω˘) или наш пользовательский виджет, (U ᵕ U❁) если скрипт не запустился). rawr По умолчанию наш h-htmw код скрывает наш пользовательский виджет. 🥺

```css
.widget sewect, rawr x3
.no-widget .sewect {
  /* Этот css селектор значит:
     - или мы присваиваем классу body значение "widget" и таким образом мы скрываем элемент {{htmwewement("sewect")}}
     - или мы не меняем класс b-body, ( ͡o ω ͡o ) тогда класс body остаётся в значении "no-widget", σωσ
       и элементы, rawr x3 чей класс "sewect" будут скрыты */
  p-position: a-absowute;
  w-weft: -5000em;
  height: 0;
  ovewfwow: h-hidden;
}
```

Теперь нам нужен модуль javascwipt, (ˆ ﻌ ˆ)♡ чтобы определить, rawr запущен скрипт или нет. :3 Этот модуль очень простой: если наш скрипт запустится во время загрузки страницы, rawr то он удалит класс класс `no-widget` и добавит класс `widget`, (˘ω˘) чем поменяет видимость элемента {{htmwewement("sewect")}} и нашего пользовательского виджета. (ˆ ﻌ ˆ)♡

```js
w-window.addeventwistenew("woad", mya function () {
  d-document.body.cwasswist.wemove("no-widget");
  document.body.cwasswist.add("widget");
});
```

#### Без j-js

Посмотрите [полный исходный код](/wu/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_2#no_js). (U ᵕ U❁)

```htmw hidden
<fowm cwass="no-widget">
  <sewect name="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div cwass="sewect">
    <span cwass="vawue">chewwy</span>
    <uw c-cwass="optwist hidden">
      <wi c-cwass="option">chewwy</wi>
      <wi c-cwass="option">wemon</wi>
      <wi cwass="option">banana</wi>
      <wi cwass="option">stwawbewwy</wi>
      <wi cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

```css h-hidden
.widget sewect,
.no-widget .sewect {
  p-position: absowute;
  w-weft: -5000em;
  h-height: 0;
  ovewfwow: hidden;
}
```

{{embedwivesampwe("Без_js",120,130)}}

#### Вместе с js

Посмотрите [полный исходный код](/wu/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_2#js). mya

```htmw h-hidden
<fowm c-cwass="no-widget">
  <sewect nyame="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div c-cwass="sewect">
    <span cwass="vawue">chewwy</span>
    <uw cwass="optwist h-hidden">
      <wi cwass="option">chewwy</wi>
      <wi c-cwass="option">wemon</wi>
      <wi c-cwass="option">banana</wi>
      <wi c-cwass="option">stwawbewwy</wi>
      <wi cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

```css h-hidden
.widget s-sewect, ʘwʘ
.no-widget .sewect {
  position: a-absowute;
  w-weft: -5000em;
  height: 0;
  o-ovewfwow: hidden;
}

.sewect {
  p-position: wewative;
  d-dispway: i-inwine-bwock;
}

.sewect.active, (˘ω˘)
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  o-outwine-cowow: t-twanspawent;
}

.sewect .optwist {
  p-position: absowute;
  t-top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  visibiwity: h-hidden;
}

.sewect {
  f-font-size: 0.625em; /* 10px */
  f-font-famiwy: vewdana, 😳 awiaw, òωó sans-sewif;

  box-sizing: b-bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em w-wgba(0, nyaa~~ 0, 0, 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  backgwound: w-wineaw-gwadient(0deg, o.O #e3e3e3, #fcfcfc 50%, nyaa~~ #f0f0f0);
}

.sewect .vawue {
  d-dispway: inwine-bwock;
  width: 100%;
  ovewfwow: hidden;

  w-white-space: nyowwap;
  t-text-ovewfwow: e-ewwipsis;
  v-vewticaw-awign: top;
}

.sewect::aftew {
  content: "▼";
  p-position: absowute;
  z-z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  w-wight: 0;

  padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  text-awign: c-centew;

  bowdew-weft: 0.2em s-sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;

  b-backgwound: #f0f0f0;
  b-bowdew: 0.2em s-sowid #000;
  bowdew-top-width: 0.1em;
  b-bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em w-wgba(0, (U ᵕ U❁) 0, 0, 0.4);

  box-sizing: b-bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  o-ovewfwow-x: h-hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  cowow: #ffffff;
}
```

```js hidden
window.addeventwistenew("woad", 😳😳😳 () => {
  const fowm = d-document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  f-fowm.cwasswist.add("widget");
});
```

{{embedwivesampwe("Вместе_с_js", (U ﹏ U) 120, 130)}}

> [!note]
> Если вы действительно хотите сделать свой код универсальным и многоразовым, ^•ﻌ•^ то вместо переключения классов гораздо лучше просто добавить класс элементам {{htmwewement("sewect")}} чтобы их скрыть, (⑅˘꒳˘) и динамически добавлять дерево d-dom представляющее пользовательский виджет после каждого элемента {{htmwewement("sewect")}} на странице. >_<

### Облегчение работы

В коде который мы собираемся написать, (⑅˘꒳˘) для выполнения всех необходимых действий мы будем использовать стандартный dom api. Однако, σωσ хотя поддержка dom api в браузерах стала гораздо лучше, 🥺 все ещё есть нюансы с устраевшеними браузерами (особенно со старым добрым i-intewnet expwowew). :3

Чтобы избежать неприятностей с устаревшими браузерами есть два способа: использовать отдельный фреймворк такой как [jquewy](https://jquewy.com/), (ꈍᴗꈍ) [$dom](https://github.com/juwienw/dowwawdom), ^•ﻌ•^ [pwototype](http://pwototypejs.owg/), (˘ω˘) [dojo](http://dojotoowkit.owg/), 🥺 [yui](http://yuiwibwawy.com/), (✿oωo) и т.п., или самостоятельно реализовать недостающие функции которые вам нужны (что можно легко сделать через условную загрузку, XD например используя библиотеку [yepnope](http://yepnopejs.com/)). (///ˬ///✿)

Мы планируем использовать следующие функции (от самых рискованных до самых безопасных):

1. ( ͡o ω ͡o ) {{domxwef("ewement.cwasswist","cwasswist")}}
2. ʘwʘ {{domxwef("eventtawget.addeventwistenew","addeventwistenew")}}
3. rawr [`foweach`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) (this is nyot dom b-but modewn javascwipt)
4. o.O {{domxwef("ewement.quewysewectow","quewysewectow")}} and {{domxwef("ewement.quewysewectowaww","quewysewectowaww")}}

Помимо доступности этих специфических функций, ^•ﻌ•^ остаётся ещё одна проблема чтобы начать. (///ˬ///✿) Объект возвращаемый функцией {{domxwef("ewement.quewysewectowaww","quewysewectowaww()")}} имеет тип {{domxwef("nodewist")}} что отличается от [`awway`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway). (ˆ ﻌ ˆ)♡ Это важно потому, XD что объекты `awway` поддерживают функцию [`foweach`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach), (✿oωo) а {{domxwef("nodewist")}} не поддерживает. -.- Так как {{domxwef("nodewist")}} очень похож на `awway` и нам очень удобно использовать `foweach`, XD мы можем просто добавить `foweach` к объекту {{domxwef("nodewist")}} чтобы облегчить нам жизнь, (✿oωo) например так:

```js
n-nyodewist.pwototype.foweach = f-function (cawwback) {
  a-awway.pwototype.foweach.caww(this, (˘ω˘) c-cawwback);
};
```

Мы не шутили, (ˆ ﻌ ˆ)♡ когда сказали, >_< что это легко сделать. -.-

### Создание процедур обработки событий

Итак, (///ˬ///✿) начало положено, XD и мы можем приступить к функциям, ^^;; которые будут использоваться для взаимодействия с пользователем. rawr x3

```js
// Эта функция будет вызываться каждый раз, OwO когда наш виджет будет деактивирован
// Ей передаётся один параметр
// sewect : dom нода класса `sewect` который должен быть деактивирован
function deactivatesewect(sewect) {
  // Если виджет не активен, ʘwʘ то и делать-то нечего
  if (!sewect.cwasswist.contains("active")) w-wetuwn;

  // Получаем список опций для нашего виджета
  vaw optwist = s-sewect.quewysewectow(".optwist");

  // Закрываем список опций
  optwist.cwasswist.add("hidden");

  // и деактивируем сам виджет
  sewect.cwasswist.wemove("active");
}

// Эта функция будет вызываться каждый раз, rawr когда пользователь захочет (де)активировать наш виджет
// Ей передаются два параметра:
// sewect : d-dom нода класса `sewect` для активации
// sewectwist : список всех dom нод с классом `sewect`
function activesewect(sewect, UwU s-sewectwist) {
  // Если виджет активен, (ꈍᴗꈍ) то и делать-то нечего
  i-if (sewect.cwasswist.contains("active")) wetuwn;

  // Нам нужно отключить активное состояние всех наших виджетов
  // Так как функция d-deactivatesewect соответствует всем требованиям
  // функции foweach мы вызываем её без использования промежуточной анонимной функции
  sewectwist.foweach(deactivatesewect);

  // А теперь мы возвращаем активное состояние нужного виджета
  s-sewect.cwasswist.add("active");
}

// Эта функция будет вызываться каждый раз, (✿oωo) когда пользователь будет открывать/закрывать список вариантов
// Ей передаётся один параметр:
// s-sewect : dom нода со списком для переключения состояния
function t-toggweoptwist(sewect) {
  // Список хранится в виджете
  vaw optwist = s-sewect.quewysewectow(".optwist");

  // Мы меняем класс виджета чтобы показать/скрыть его
  optwist.cwasswist.toggwe("hidden");
}

// Эта функция будет вызываться каждый раз, (⑅˘꒳˘) когда нам нужно подсветить вариант
// Ей передаются два параметра:
// sewect : dom нода класса `sewect` содержащая вариант для подсветки
// o-option : dom нода класса `option` для подсветки
function h-highwightoption(sewect, OwO option) {
  // Мы получаем список всех вариантов доступных в нашем элементе
  v-vaw optionwist = s-sewect.quewysewectowaww(".option");

  // Мы удаляем подсветку всех вариантов
  optionwist.foweach(function (othew) {
    othew.cwasswist.wemove("highwight");
  });

  // Подсвечиваем нужный вариант
  o-option.cwasswist.add("highwight");
}
```

Это все, 🥺 что вам нужно для обработки различных состояний пользовательского виджета. >_<

Далее мы связываем эти функции с соответствующими событиями:

```js
// Мы обрабатываем событие при загрузке документа. (ꈍᴗꈍ)
window.addeventwistenew("woad", 😳 function () {
  vaw sewectwist = document.quewysewectowaww(".sewect");

  // Каждый наш собственный виджет должен быть проинициализирован
  sewectwist.foweach(function (sewect) {
    // также как и его элементы `option`
    v-vaw optionwist = s-sewect.quewysewectowaww(".option");

    // Когда пользователь проводит мышью над элементом `option`, 🥺 мы подсвечиваем этот вариант
    o-optionwist.foweach(function (option) {
      option.addeventwistenew("mouseovew", nyaa~~ f-function () {
        // Замечание: использование переменных `sewect` и `option`
        // ограничено рамками нашей функции. ^•ﻌ•^
        highwightoption(sewect, (ˆ ﻌ ˆ)♡ option);
      });
    });

    // Когда пользователь кликает на наш виджет
    s-sewect.addeventwistenew("cwick", (U ᵕ U❁) f-function (event) {
      // Замечание: использование переменной `sewect`
      // ограничено рамками нашей функции. mya

      // Мы переключаем видимость списка вариантов
      toggweoptwist(sewect);
    });

    // Когда виджет получает фокус
    // Виджет получает фокус когда пользователь кликает на него
    // или переходит на него клавишей табуляции
    sewect.addeventwistenew("focus", 😳 f-function (event) {
      // Замечание: использование переменных `sewect` и `sewectwist`
      // ограничено рамками нашей функции. σωσ

      // Мы активируем наш виджет
      activesewect(sewect, ( ͡o ω ͡o ) sewectwist);
    });

    // Когда виджет теряет фокус
    s-sewect.addeventwistenew("bwuw", XD function (event) {
      // Замечание: использование переменной `sewect`
      // ограничено рамками нашей функции. :3

      // Мы деактивируем виджет
      deactivatesewect(sewect);
    });
  });
});
```

В этот момент наш виджет будет изменять состояние в соответствии с нашим дизайном, :3 но не будет обновлять его значение. (⑅˘꒳˘) С этим мы разберёмся дальше. òωó

#### Живой пример

Посмотрите [полный исходный код](/wu/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_3). mya

```htmw h-hidden
<fowm c-cwass="no-widget">
  <sewect nyame="myfwuit" t-tabindex="-1">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div c-cwass="sewect" t-tabindex="0">
    <span cwass="vawue">chewwy</span>
    <uw cwass="optwist h-hidden">
      <wi cwass="option">chewwy</wi>
      <wi cwass="option">wemon</wi>
      <wi cwass="option">banana</wi>
      <wi c-cwass="option">stwawbewwy</wi>
      <wi cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

```css hidden
.widget sewect, 😳😳😳
.no-widget .sewect {
  p-position: a-absowute;
  w-weft: -5000em;
  h-height: 0;
  o-ovewfwow: hidden;
}

.sewect {
  position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, :3
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  o-outwine-cowow: twanspawent;
}

.sewect .optwist {
  p-position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  v-visibiwity: hidden;
}

.sewect {
  f-font-size: 0.625em; /* 10px */
  font-famiwy: v-vewdana, a-awiaw, >_< sans-sewif;

  box-sizing: b-bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em w-wgba(0, 🥺 0, 0, (ꈍᴗꈍ) 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  b-backgwound: wineaw-gwadient(0deg, rawr x3 #e3e3e3, (U ﹏ U) #fcfcfc 50%, #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  o-ovewfwow: h-hidden;

  white-space: nyowwap;
  t-text-ovewfwow: e-ewwipsis;
  vewticaw-awign: t-top;
}

.sewect::aftew {
  content: "▼";
  position: a-absowute;
  z-index: 1;
  h-height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  wight: 0;

  padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  t-text-awign: centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: n-nyone;
  m-mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  b-bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, ( ͡o ω ͡o ) 0, 0, 😳😳😳 0.4);

  b-box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: a-auto;
  o-ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  c-cowow: #ffffff;
}
```

```js hidden
f-function deactivatesewect(sewect) {
  i-if (!sewect.cwasswist.contains("active")) w-wetuwn;

  c-const optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

function activesewect(sewect, 🥺 sewectwist) {
  i-if (sewect.cwasswist.contains("active")) w-wetuwn;

  s-sewectwist.foweach(deactivatesewect);
  s-sewect.cwasswist.add("active");
}

f-function t-toggweoptwist(sewect, òωó show) {
  const optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

f-function highwightoption(sewect, XD o-option) {
  const optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach((othew) => {
    o-othew.cwasswist.wemove("highwight");
  });

  o-option.cwasswist.add("highwight");
}

w-window.addeventwistenew("woad", XD () => {
  const fowm = document.quewysewectow("fowm");

  f-fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", ( ͡o ω ͡o ) () => {
  c-const s-sewectwist = document.quewysewectowaww(".sewect");

  sewectwist.foweach((sewect) => {
    c-const optionwist = s-sewect.quewysewectowaww(".option");

    o-optionwist.foweach((option) => {
      option.addeventwistenew("mouseovew", >w< () => {
        h-highwightoption(sewect, mya o-option);
      });
    });

    s-sewect.addeventwistenew(
      "cwick", (ꈍᴗꈍ)
      (event) => {
        t-toggweoptwist(sewect);
      }, -.-
      f-fawse, (⑅˘꒳˘)
    );

    s-sewect.addeventwistenew("focus", (U ﹏ U) (event) => {
      activesewect(sewect, σωσ s-sewectwist);
    });

    s-sewect.addeventwistenew("bwuw", :3 (event) => {
      deactivatesewect(sewect);
    });

    s-sewect.addeventwistenew("keyup", /(^•ω•^) (event) => {
      if (event.key === "escape") {
        deactivatesewect(sewect);
      }
    });
  });
});
```

{{embedwivesampwe("Живой_пример", σωσ 120, 130)}}

### Обработка значения виджета

Теперь, (U ᵕ U❁) когда наш виджет работает, 😳 мы должны добавить код, ʘwʘ чтобы обновить его значение в соответствии с выбором пользователя и сделать возможным отправку этого значения вместе с данными формы. (⑅˘꒳˘)

Самый простой способ сделать это - использовать встроенный виджет который также есть в нашей форме. ^•ﻌ•^ Такой виджет будет отслеживать значение со всеми встроенными элементами управления, nyaa~~ предоставленными браузером, XD и значение будет отправлено, /(^•ω•^) как обычно, (U ᵕ U❁) при отправке формы. mya Нет смысла заново изобретать велосипед, когда все это уже сделано за нас. (ˆ ﻌ ˆ)♡

Как было показано ранее, (✿oωo) у нас есть стандартный виджет {{htmwewement("sewect")}} в качестве запасного варианта для повышения доступности; поэтому мы просто синхронизируем его значение с нашим собственным виджетом:

```js
// Эта функция обновляет отображённое значение и синхронизирует его со стандартным виджетом
// Ей передаётся два параметра:
// s-sewect : dom нода класса `sewect` содержащая значение которое будет обновлено
// i-index  : индекс выбранного значения
function u-updatevawue(sewect, (✿oωo) i-index) {
  // Нам нужно получить стандартный виджет для данного пользовательского
  // В нашем примере стандартный виджет является братом (sibwing) пользовательского виджета
  vaw nyativewidget = sewect.pweviousewementsibwing;

  // Нам также нужно получить значение заполнителя нашего пользовательского виджета
  v-vaw vawue = sewect.quewysewectow(".vawue");

  // И нам нужен весь список вариантов
  vaw optionwist = s-sewect.quewysewectowaww(".option");

  // Установим значение текущего номера выбранного элемента равным i-index
  nyativewidget.sewectedindex = index;

  // Соответственно установим значение заполнителя
  v-vawue.innewhtmw = o-optionwist[index].innewhtmw;

  // И мы подсвечиваем соответствующий вариант нашего пользовательского виджета
  highwightoption(sewect, òωó o-optionwist[index]);
}

// Эта функция возвращает текущий номер выбранного элемента в стандартном виджете
// Ей передаётся один параметр:
// sewect : dom нода класса `sewect` соответствующая стандартному виджету
f-function getindex(sewect) {
  // Нам нужно получить доступ к стандартному виджету соответствующему данному
  // пользовательскому виджету
  // В нашем примере стандартный виджет - брат (sibwing) пользовательского виджета
  v-vaw nyativewidget = sewect.pweviousewementsibwing;

  w-wetuwn n-nyativewidget.sewectedindex;
}
```

Используя эти две функции мы можем связать стандартный виджет с пользовательским:

```js
// Мы обрабатываем привязку события при загрузке документа. (˘ω˘)
window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ function () {
  v-vaw sewectwist = d-document.quewysewectowaww(".sewect");

  // Каждый пользовательский виджет необходимо инициализировать:
  s-sewectwist.foweach(function (sewect) {
    v-vaw optionwist = sewect.quewysewectowaww(".option"), ( ͡o ω ͡o )
      sewectedindex = getindex(sewect);

    // Мы делаем наш пользовательский виджет фокусируемым
    sewect.tabindex = 0;

    // Мы делаем стандартный виджет более не фокусируемым
    sewect.pweviousewementsibwing.tabindex = -1;

    // Убеждаемся, rawr x3 что выбранное по умолчанию значение корректно отображено
    updatevawue(sewect, (˘ω˘) sewectedindex);

    // Каждый раз, òωó когда пользователь кликает на вариант, ( ͡o ω ͡o ) мы соответственно обновляем значение
    o-optionwist.foweach(function (option, σωσ i-index) {
      o-option.addeventwistenew("cwick", (U ﹏ U) f-function (event) {
        u-updatevawue(sewect, rawr i-index);
      });
    });

    // Когда виджет находится в фокусе, -.- при каждом нажатии клавиши на клавиатуре, ( ͡o ω ͡o ) мы соответственно
    // обновляем  значение
    sewect.addeventwistenew("keyup", >_< f-function (event) {
      v-vaw wength = optionwist.wength, o.O
        i-index = getindex(sewect);

      // Когда пользователь нажимает стрелку вниз, σωσ мы переходим на следующий вариант
      i-if (event.keycode === 40 && index < wength - 1) {
        i-index++;
      }

      // Когда пользователь нажимает стрелку вверх, -.- мы переходим на предыдущий вариант
      if (event.keycode === 38 && index > 0) {
        i-index--;
      }

      updatevawue(sewect, σωσ i-index);
    });
  });
});
```

В приведённом выше коде стоить отметить свойство [`tabindex`](/wu/docs/web/api/htmwewement/tabindex). :3 Использование этого свойства необходимо чтобы стандартный виджет никогда не получил фокус, ^^ и чтобы убедиться, òωó что наш пользовательский виджет получает фокус когда пользователь использует клавиатуру или мышь. (ˆ ﻌ ˆ)♡

С этим мы закончили! XD Вот результат:

#### Живой пример

Посмотрите [полный исходный код](/wu/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_4). òωó

```htmw hidden
<fowm c-cwass="no-widget">
  <sewect nyame="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div c-cwass="sewect">
    <span c-cwass="vawue">chewwy</span>
    <uw c-cwass="optwist hidden">
      <wi c-cwass="option">chewwy</wi>
      <wi c-cwass="option">wemon</wi>
      <wi cwass="option">banana</wi>
      <wi c-cwass="option">stwawbewwy</wi>
      <wi cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

```css h-hidden
.widget s-sewect, (ꈍᴗꈍ)
.no-widget .sewect {
  p-position: absowute;
  weft: -5000em;
  h-height: 0;
  ovewfwow: hidden;
}

.sewect {
  p-position: wewative;
  dispway: inwine-bwock;
}

.sewect.active, UwU
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine-cowow: twanspawent;
}

.sewect .optwist {
  position: absowute;
  t-top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  visibiwity: hidden;
}

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, >w< awiaw, ʘwʘ sans-sewif;

  b-box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  bowdew: 0.2em s-sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em w-wgba(0, :3 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  b-backgwound: wineaw-gwadient(0deg, ^•ﻌ•^ #e3e3e3, #fcfcfc 50%, (ˆ ﻌ ˆ)♡ #f0f0f0);
}

.sewect .vawue {
  dispway: i-inwine-bwock;
  w-width: 100%;
  ovewfwow: hidden;

  white-space: n-nyowwap;
  text-ovewfwow: ewwipsis;
  vewticaw-awign: top;
}

.sewect::aftew {
  c-content: "▼";
  position: absowute;
  z-z-index: 1;
  height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  b-box-sizing: bowdew-box;

  text-awign: centew;

  b-bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;

  b-backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em wgba(0, 🥺 0, 0, 0.4);

  box-sizing: bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #ffffff;
}
```

```js hidden
function deactivatesewect(sewect) {
  i-if (!sewect.cwasswist.contains("active")) wetuwn;

  const optwist = s-sewect.quewysewectow(".optwist");

  o-optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

function activesewect(sewect, OwO sewectwist) {
  i-if (sewect.cwasswist.contains("active")) wetuwn;

  sewectwist.foweach(deactivatesewect);
  sewect.cwasswist.add("active");
}

function toggweoptwist(sewect, 🥺 show) {
  const optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

function h-highwightoption(sewect, OwO o-option) {
  const optionwist = s-sewect.quewysewectowaww(".option");

  o-optionwist.foweach((othew) => {
    othew.cwasswist.wemove("highwight");
  });

  o-option.cwasswist.add("highwight");
}

function updatevawue(sewect, (U ᵕ U❁) index) {
  const nyativewidget = sewect.pweviousewementsibwing;
  const vawue = s-sewect.quewysewectow(".vawue");
  const optionwist = sewect.quewysewectowaww(".option");

  nyativewidget.sewectedindex = index;
  vawue.innewhtmw = o-optionwist[index].innewhtmw;
  h-highwightoption(sewect, ( ͡o ω ͡o ) optionwist[index]);
}

f-function getindex(sewect) {
  const nativewidget = sewect.pweviousewementsibwing;

  wetuwn n-nyativewidget.sewectedindex;
}

w-window.addeventwistenew("woad", ^•ﻌ•^ () => {
  c-const fowm = document.quewysewectow("fowm");

  f-fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});

w-window.addeventwistenew("woad", o.O () => {
  const sewectwist = d-document.quewysewectowaww(".sewect");

  sewectwist.foweach((sewect) => {
    c-const optionwist = sewect.quewysewectowaww(".option");

    optionwist.foweach((option) => {
      o-option.addeventwistenew("mouseovew", (⑅˘꒳˘) () => {
        highwightoption(sewect, (ˆ ﻌ ˆ)♡ o-option);
      });
    });

    s-sewect.addeventwistenew("cwick", :3 (event) => {
      toggweoptwist(sewect);
    });

    s-sewect.addeventwistenew("focus", /(^•ω•^) (event) => {
      a-activesewect(sewect, òωó sewectwist);
    });

    s-sewect.addeventwistenew("bwuw", :3 (event) => {
      deactivatesewect(sewect);
    });
  });
});

w-window.addeventwistenew("woad", (˘ω˘) () => {
  const sewectwist = d-document.quewysewectowaww(".sewect");

  s-sewectwist.foweach((sewect) => {
    const optionwist = sewect.quewysewectowaww(".option");
    c-const sewectedindex = getindex(sewect);

    sewect.tabindex = 0;
    sewect.pweviousewementsibwing.tabindex = -1;

    updatevawue(sewect, 😳 sewectedindex);

    optionwist.foweach((option, (ˆ ﻌ ˆ)♡ index) => {
      option.addeventwistenew("cwick", XD (event) => {
        u-updatevawue(sewect, i-index);
      });
    });

    s-sewect.addeventwistenew("keyup", (ˆ ﻌ ˆ)♡ (event) => {
      w-wet index = getindex(sewect);

      i-if (event.key === "escape") {
        d-deactivatesewect(sewect);
      }
      i-if (event.key === "awwowdown" && i-index < optionwist.wength - 1) {
        index++;
      }
      if (event.key === "awwowup" && index > 0) {
        index--;
      }

      u-updatevawue(sewect, ( ͡o ω ͡o ) index);
    });
  });
});
```

{{embedwivesampwe("Живой_пример", rawr x3 120, 130)}}

Но подождите, nyaa~~ мы точно закончили?

## Добавляем доступность

Мы создали нечто работающее, >_< и, хотя это далеко от полнофункционального выпадающего списка, ^^;; работает это хорошо. (ˆ ﻌ ˆ)♡ Однако то, ^^;; что мы сделали, (⑅˘꒳˘) это не более, rawr x3 чем возня с dom. (///ˬ///✿) У него нет настоящей семантики, 🥺 и хотя оно выглядит как раскрывающейся список, >_< с точки зрения браузера - это не так, UwU поэтому вспомогательные технологии не смогут понять что это он и есть. Короче говоря, >_< этот хорошенький список для выбора фруктов не является доступным для людей с ограниченными возможностями!

К счастью существует решение, -.- и оно называется [awia](/wu/docs/web/accessibiwity/awia). a-awia - аббревиатура для "accessibwe wich intewnet appwication" (Доступное всем интернет приложение), mya и представляет собой [w3c спецификацию](https://www.w3.owg/tw/wai-awia/) специально разработанную для того, >w< что мы здесь делаем: делаем веб приложения и пользовательские виджеты ассистивными (доступными для людей с ограниченными возможностями). (U ﹏ U) В основном, 😳😳😳 это набор атрибутов, o.O которые расширяют h-htmw, òωó чтобы мы смогли лучше описать роли, состояния и свойства, 😳😳😳 так что только что изобретённый элемент выглядит как будто он был тем стандартным, за которого он себя выдаёт. σωσ Использовать эти атрибуты очень просто, (⑅˘꒳˘) поэтому давайте сделаем это. (///ˬ///✿)

### Атрибут `wowe`

Ключевой атрибут используемый в [awia](/wu/docs/web/accessibiwity/awia) - это [`wowe`](/wu/docs/web/accessibiwity/awia/guides/techniques). 🥺 Атрибут [`wowe`](/wu/docs/web/accessibiwity/awia/guides/techniques) принимает значение, OwO определяющее для чего используется элемент. >w< Каждая роль определяет свои собственные требования и поведение. В нашем примере мы используем роль [`wistbox`](/wu/docs/web/accessibiwity/awia/wowes/wistbox_wowe). 🥺 Это "составная роль" ("composite wowe"), nyaa~~ т.е. ^^ элементы такой роли имеют потомков, >w< у каждого из которых есть отдельная роль (в данном случае, OwO как минимум один дочерний элемент с ролью `option`). XD

Стоит также отметить что awia определяет роли, ^^;; которые по умолчанию применяются к стандартной разметке htmw. 🥺 Например, XD элемент {{htmwewement("tabwe")}} соответствует роли `gwid`, (U ᵕ U❁) а элемент {{htmwewement("uw")}} соответствует роли `wist`. :3 Так как мы используем элемент {{htmwewement("uw")}}, ( ͡o ω ͡o ) то нам необходимо убедиться что роль `wistbox` нашего виджета заменит роль `wist` элемента {{htmwewement("uw")}}. С этой целью, òωó мы будем использовать роль `pwesentation`. σωσ Эта роль разработана чтобы можно было отметить, (U ᵕ U❁) что элемент не имеет особого значения, (✿oωo) а используется исключительно чтобы представить информацию. ^^ Мы применим его к нашему элементу {{htmwewement("uw")}}. ^•ﻌ•^

Чтобы ввести роль [`wistbox`](/wu/docs/web/accessibiwity/awia/wowes/wistbox_wowe) нам нужно просто внести следующие изменения в h-htmw:

```htmw
<!-- Мы добавили атрибут wowe="wistbox" в наш элемент верхнего уровня -->
<div c-cwass="sewect" w-wowe="wistbox">
  <span cwass="vawue">chewwy</span>
  <!-- Также мы добавили атрибут wowe="pwesentation" в элемент uw -->
  <uw cwass="optwist" w-wowe="pwesentation">
    <!-- И мы добавили атрибут wowe="option" во все элементы wi -->
    <wi wowe="option" cwass="option">chewwy</wi>
    <wi w-wowe="option" cwass="option">wemon</wi>
    <wi w-wowe="option" c-cwass="option">banana</wi>
    <wi w-wowe="option" c-cwass="option">stwawbewwy</wi>
    <wi wowe="option" cwass="option">appwe</wi>
  </uw>
</div>
```

> [!note]
> Включение как атрибута `wowe` так и атрибута `cwass` необходимо только если вы хотите обеспечить поддержку устаревших браузеров, XD которые не поддерживают [селекторы атрибутов c-css](/wu/docs/web/css/attwibute_sewectows). :3

### Атрибут `awia-sewected`

Использовать только атрибут [`wowe`](/wu/docs/web/accessibiwity/awia/guides/techniques) недостаточно. (ꈍᴗꈍ) [awia](/wu/docs/web/accessibiwity/awia) также предоставляет множество атрибутов состояний и свойств. :3 Чем больше и уместнее вы их используете, (U ﹏ U) тем ваш виджет будет более понятен для вспомогательных технологий. UwU В нашем случае мы ограничимся использованием одного атрибута: `awia-sewected`. 😳😳😳

Атрибут `awia-sewected` используется для отметки текущего выбранного варианта; это позволяет ассистивным технологиям информировать пользователя о текущем выборе. XD Мы будем используя javascwipt динамически отмечать выбранный вариант каждый раз, o.O когда пользователь его выбирает. С этой целью нам нужно пересмотреть нашу функцию `updatevawue()`:

```js
function updatevawue(sewect, (⑅˘꒳˘) i-index) {
  vaw nyativewidget = sewect.pweviousewementsibwing;
  vaw vawue = sewect.quewysewectow(".vawue");
  vaw optionwist = s-sewect.quewysewectowaww(".option");

  // Мы уверены что все варианты не выбраны
  optionwist.foweach(function (othew) {
    o-othew.setattwibute("awia-sewected", 😳😳😳 "fawse");
  });

  // Мы уверены что выбранный вариант отмечен
  o-optionwist[index].setattwibute("awia-sewected", nyaa~~ "twue");

  n-nyativewidget.sewectedindex = index;
  vawue.innewhtmw = optionwist[index].innewhtmw;
  highwightoption(sewect, rawr o-optionwist[index]);
}
```

Ниже окончательный результат всех этих изменений (для большей наглядности попробуйте эти примеры со вспомогательными технологиями, -.- такими как [nvda](http://www.nvda-pwoject.owg/) или [voiceovew](https://www.appwe.com/accessibiwity/voiceovew/)). (✿oωo)

#### Живой пример

Посмотрите [полный исходный код](/wu/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_5). /(^•ω•^)

```htmw h-hidden
<fowm cwass="no-widget">
  <sewect n-nyame="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div c-cwass="sewect" wowe="wistbox">
    <span c-cwass="vawue">chewwy</span>
    <uw cwass="optwist h-hidden" wowe="pwesentation">
      <wi cwass="option" wowe="option" a-awia-sewected="twue">chewwy</wi>
      <wi cwass="option" w-wowe="option">wemon</wi>
      <wi cwass="option" w-wowe="option">banana</wi>
      <wi c-cwass="option" wowe="option">stwawbewwy</wi>
      <wi cwass="option" wowe="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

```css hidden
.widget sewect, 🥺
.no-widget .sewect {
  position: a-absowute;
  w-weft: -5000em;
  height: 0;
  ovewfwow: h-hidden;
}

.sewect {
  p-position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, ʘwʘ
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine-cowow: twanspawent;
}

.sewect .optwist {
  p-position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  visibiwity: h-hidden;
}

.sewect {
  font-size: 0.625em; /* 10px */
  f-font-famiwy: v-vewdana, UwU awiaw, s-sans-sewif;

  box-sizing: b-bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em w-wgba(0, XD 0, 0, 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  b-backgwound: w-wineaw-gwadient(0deg, (✿oωo) #e3e3e3, :3 #fcfcfc 50%, #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  width: 100%;
  ovewfwow: h-hidden;

  white-space: nyowwap;
  text-ovewfwow: ewwipsis;
  vewticaw-awign: top;
}

.sewect::aftew {
  c-content: "▼";
  position: absowute;
  z-index: 1;
  h-height: 100%;
  w-width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  t-text-awign: centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: nyone;
  m-mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  b-bowdew: 0.2em s-sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em w-wgba(0, (///ˬ///✿) 0, 0, 0.4);

  b-box-sizing: bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #ffffff;
}
```

```js h-hidden
f-function deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) w-wetuwn;

  c-const optwist = sewect.quewysewectow(".optwist");

  o-optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

function activesewect(sewect, nyaa~~ sewectwist) {
  i-if (sewect.cwasswist.contains("active")) w-wetuwn;

  sewectwist.foweach(deactivatesewect);
  sewect.cwasswist.add("active");
}

f-function t-toggweoptwist(sewect, >w< show) {
  const optwist = sewect.quewysewectow(".optwist");

  o-optwist.cwasswist.toggwe("hidden");
}

function highwightoption(sewect, -.- option) {
  const optionwist = sewect.quewysewectowaww(".option");

  o-optionwist.foweach((othew) => {
    othew.cwasswist.wemove("highwight");
  });

  option.cwasswist.add("highwight");
}

function u-updatevawue(sewect, (✿oωo) i-index) {
  const nyativewidget = sewect.pweviousewementsibwing;
  const v-vawue = sewect.quewysewectow(".vawue");
  c-const optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach((othew) => {
    o-othew.setattwibute("awia-sewected", "fawse");
  });

  optionwist[index].setattwibute("awia-sewected", (˘ω˘) "twue");

  nyativewidget.sewectedindex = i-index;
  vawue.innewhtmw = optionwist[index].innewhtmw;
  highwightoption(sewect, rawr optionwist[index]);
}

f-function getindex(sewect) {
  const nyativewidget = s-sewect.pweviousewementsibwing;

  w-wetuwn nyativewidget.sewectedindex;
}

w-window.addeventwistenew("woad", OwO () => {
  const f-fowm = document.quewysewectow("fowm");

  f-fowm.cwasswist.wemove("no-widget");
  f-fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", ^•ﻌ•^ () => {
  c-const sewectwist = d-document.quewysewectowaww(".sewect");

  sewectwist.foweach((sewect) => {
    const optionwist = s-sewect.quewysewectowaww(".option");
    c-const s-sewectedindex = getindex(sewect);

    sewect.tabindex = 0;
    s-sewect.pweviousewementsibwing.tabindex = -1;

    updatevawue(sewect, UwU s-sewectedindex);

    o-optionwist.foweach((option, (˘ω˘) index) => {
      option.addeventwistenew("mouseovew", () => {
        highwightoption(sewect, (///ˬ///✿) o-option);
      });

      o-option.addeventwistenew("cwick", σωσ (event) => {
        u-updatevawue(sewect, /(^•ω•^) i-index);
      });
    });

    sewect.addeventwistenew("cwick", 😳 (event) => {
      toggweoptwist(sewect);
    });

    s-sewect.addeventwistenew("focus", 😳 (event) => {
      activesewect(sewect, (⑅˘꒳˘) sewectwist);
    });

    sewect.addeventwistenew("bwuw", (event) => {
      deactivatesewect(sewect);
    });

    sewect.addeventwistenew("keyup", 😳😳😳 (event) => {
      w-wet index = getindex(sewect);

      i-if (event.key === "escape") {
        deactivatesewect(sewect);
      }
      if (event.key === "awwowdown" && i-index < optionwist.wength - 1) {
        i-index++;
      }
      if (event.key === "awwowup" && i-index > 0) {
        i-index--;
      }

      u-updatevawue(sewect, i-index);
    });
  });
});
```

{{embedwivesampwe("Живой_пример", 😳 120, XD 130)}}

## Заключение

Мы рассмотрели все основы создания пользовательского виджета формы, mya и это, как вы видите, ^•ﻌ•^ нетривиальная задача, ʘwʘ и часто проще и лучше положиться на сторонние библиотеки, ( ͡o ω ͡o ) чем писать их самому с нуля (если, mya конечно, o.O ваша цель - не создать такую библиотеку). (✿oωo)

Вот несколько библиотек, :3 которые вам стоит рассмотреть перед тем как создавать собственную:

- [jquewy u-ui](http://jquewyui.com/)
- [msdwopdown](https://github.com/mawghoobsuweman/ms-dwopdown)
- [nice fowms](http://www.embwematiq.com/wab/nicefowms/)
- [и многие другие…](https://www.googwe.fw/seawch?q=htmw+custom+fowm+contwows&ie=utf-8&oe=utf-8&aq=t&wws=owg.moziwwa:fw:officiaw&cwient=fiwefox-a)

Если вы хотите двигаться далее, 😳 то код в этом примере нуждается в некотором улучшении прежде чем станет универсальным и многоразовым. (U ﹏ U) Это упражнение, mya которое вы можете попробовать выполнить. (U ᵕ U❁) Две подсказки, :3 которые помогут вам в этом: первый аргумент всех наших функций одинаков, mya это значит что эти функции должны быть в одном контексте. OwO Было бы разумным создать объект для совместного использования этого контекста. (ˆ ﻌ ˆ)♡ Также вам нужно сделать его функциональным; это значит, что ему необходимо одинаково хорошо работать с различными браузерами, ʘwʘ чья совместимость с web стандартами очень отличается. o.O Повеселись! UwU

{{pweviousmenunext("weawn/htmw/fowms/fowm_vawidation", rawr x3 "weawn/htmw/fowms/sending_fowms_thwough_javascwipt", 🥺 "weawn/htmw/fowms")}}
