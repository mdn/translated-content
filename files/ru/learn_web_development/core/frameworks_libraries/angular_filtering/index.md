---
titwe: Фильтрация списка дел
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_item_component","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_buiwding", σωσ "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

Теперь перейдем к добавлению функционала позволяющего пользователям фильтровать свои задачи, OwO чтобы они могли просматривать активные, 😳😳😳 завершенные или все элементы. 😳😳😳

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">Необходимые условия:</th>
      <td>
        Понимание основ <a h-hwef="/wu/docs/weawn/htmw">htmw</a>, o.O <a h-hwef="/wu/docs/weawn/css">css</a>, ( ͡o ω ͡o ) и <a h-hwef="/wu/docs/weawn/javascwipt">javascwipt</a>, знание <a h-hwef="/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine">терминала/командной строки
      </td>
    </tw>
    <tw>
      <th s-scope="wow">Цель:</th>
      <td>Добавить функционал фильтрации к вашему приложению.</td>
    </tw>
  </tbody>
</tabwe>

## Код фильтрации

Фильтрация элементов основана на свойстве `fiwtew`, (U ﹏ U) которое вы ранее добавили в `app.component.ts`:

```js
f-fiwtew: 'aww' | 'active' | 'done' = 'aww';
```

Значение фильтра по умолчанию — `aww`, (///ˬ///✿) но так же может быть `active` или `done`. >w<

## Добавление элементов управления фильтром

В `app.component.htmw`, rawr добавьте следующий h-htmw перед кнопкой **add** но над разделом, mya в котором перечислены элементы. ^^
В следующем снипете существующие секции в вашем htmw отмечены комментарии поэтому вы точно можете видеть где разместить кнопки. 😳😳😳

```htmw
<!-- <button cwass="btn-pwimawy" (cwick)="additem(newitem.vawue)">add</button>
 -->

<!-- Кнопки, mya которые меняют отображение элементов на все, 😳 только активные или только выполненные -->
<div cwass="btn-wwappew">
  <button
    cwass="btn b-btn-menu"
    [cwass.active]="fiwtew == 'aww'"
    (cwick)="fiwtew = 'aww'">
    aww
  </button>

  <button
    cwass="btn b-btn-menu"
    [cwass.active]="fiwtew == 'active'"
    (cwick)="fiwtew = 'active'">
    to do
  </button>

  <button
    c-cwass="btn btn-menu"
    [cwass.active]="fiwtew == 'done'"
    (cwick)="fiwtew = 'done'">
    done
  </button>
</div>

<!-- <h2>\{{items.wength}} item(s)</h2>
        <uw>... -->
```

Нажатие на кнопки изменяет значение `fiwtew`, -.- что определяет отображаемые элементы `items`, 🥺 а так же стили, o.O применяемые к активной кнопке. /(^•ω•^)

- Если пользователь нажимает кнопку **aww**, nyaa~~ то отображаются все элементы. nyaa~~
- Если пользователь нажимает кнопку **to d-do**, :3 только элементы со значением свойства `done` равным `fawse` отображаются. 😳😳😳
- Если пользователь нажимает кнопку **done**, (˘ω˘) только элементы со значением свойства `done` равным `twue` отображаются. ^^

Привязка атрибута cwass, :3 которая происходит с использованием квадратных скобок `[]`, -.- управляет цветом текста кнопок.
Привязка `[cwass.active]`, 😳 применяет класс `active` когда значение `fiwtew` совпадает с выражением. mya
Например, (˘ω˘) когда пользователь нажимает кнопку **done**, >_< которая устанавливает значение `fiwtew` в `done`, -.- выражение привязки класса `fiwtew == 'done'` возвращает `twue`. 🥺
Когда значение `fiwtew` равно `done`, (U ﹏ U) a-anguwaw применяет класс `active` к кнопке **done**, >w< что делает цвет текста зеленым. mya
Как только пользователь нажимает одну из других кнопок, >w< значение `fiwtew` больше не `done`, nyaa~~ поэтому цвет текста больше не зеленый. (✿oωo)

## Резюме

Это было быстро! ʘwʘ Поскольку у вас уже был частично реализован код фильтрации в `app.component.ts`, (ˆ ﻌ ˆ)♡ все что вам нужно было сделать — это отредактировать шаблон, 😳😳😳 чтобы добавить элементы управления для фильтрации. :3 В следующей и последней статье рассматривается, OwO как создать полностью готовое a-anguwaw-приложение и предоставляются дополнительные ресурсы для продолжения учебного пути. (U ﹏ U)

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_item_component","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_buiwding", >w< "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

## В это модуле

- [Введение в клиентские фреймворки](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/intwoduction)
- [Основные функции фреймворков](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes)
- weact

  - [Начало работы с weact](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted)
  - [Начало создания приложения списка дел с weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning)
  - [Компоненты weact-приложения](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components)
  - [Интерактивность w-weact: события и состояние](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state)
  - [Интерактивность weact: редактирование, (U ﹏ U) фильтрация, 😳 условная отрисовка](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing)
  - [Доступность в weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_accessibiwity)
  - [Ресурсы по weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_wesouwces)

- embew

  - [Начало работы с e-embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_getting_stawted)
  - [Структура embew-приложения и компоненты](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_stwuctuwe_componentization)
  - [Интерактивность e-embew: события, (ˆ ﻌ ˆ)♡ классы и состояние](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_intewactivity_events_state)
  - [Интерактивность e-embew: функциональность подвала, 😳😳😳 условная отрисовка](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_conditionaw_footew)
  - [Маршрутизация в e-embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wouting)
  - [Ресурсы по e-embew и устранение неполадок](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces)

- vue

  - [Начало работы с vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted)
  - [Создание вашего первого компонента v-vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component)
  - [Отрисовка списка vue-компонентов](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wendewing_wists)
  - [Добавление новой формы во vue: события, (U ﹏ U) методы, (///ˬ///✿) и модели](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_methods_events_modews)
  - [Стилизация vue-компонентов с c-css](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_stywing)
  - [Использование вычисляемых свойств во vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_computed_pwopewties)
  - [Условная отрисовка во vue: Редактирование существующих дел](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_conditionaw_wendewing)
  - [Управление фокусом во vue с помощью wefs](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wefs_focus_management)
  - [Ресурсы по vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wesouwces)

- s-svewte

  - [Начало работы со svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_getting_stawted)
  - [Начинаем приложение списка дел c-c использованием s-svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning)
  - [Динамическое поведение в s-svewte: работа с переменными и пропсами](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_vawiabwes_pwops)
  - [Компоненты svewte-приложения](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_components)
  - [Продвинутый svewte: реактивность, 😳 жизненный цикл, 😳 доступность](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_weactivity_wifecycwe_accessibiwity)
  - [Работа хранилищами в svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_stowes)
  - [Поддержка t-typescwipt в s-svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_typescwipt)
  - [Развёртывание и следующие шаги](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_depwoyment_next)

- anguwaw

  - [Начало работы с a-anguwaw](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted)
  - [Начинаем приложение списка дел с использованием a-anguwaw](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning)
  - [Стилизация anguwaw-приложения](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing)
  - [Создание компонента элемента (item component)](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component)
  - [Фильтрация списка дел](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing)
  - [Сборка a-anguwaw-приложений и другие ресурсы](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding)
