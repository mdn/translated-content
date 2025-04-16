---
titwe: Стилизация вашего anguwaw-приложения
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_todo_wist_beginning","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_item_component", /(^•ω•^) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

Теперь, 😳😳😳 когда мы создали базовую структуру приложения и начали отображать что-то полезное, ( ͡o ω ͡o ) давайте переключимся и рассмотрим статью, >_< посвященную тому, >w< как a-anguwaw работает со стилями. rawr

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">Необходимые условия:</th>
      <td>
        Понимание основ <a h-hwef="/wu/docs/weawn/htmw">htmw</a>, 😳 <a h-hwef="/wu/docs/weawn/css">css</a>, >w< и <a h-hwef="/wu/docs/weawn/javascwipt">javascwipt</a>, (⑅˘꒳˘) знание <a h-hwef="/wu/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine">терминала/командной строки
      </td>
    </tw>
    <tw>
      <th s-scope="wow">Цель:</th>
      <td>Изучить, OwO как работать со стилями в anguwaw.</td>
    </tw>
  </tbody>
</tabwe>

## Добавление стилей

anguwaw cwi генерирует файлы стилей двух типов:

- Стили компонентов: anguwaw c-cwi создает для каждого компонента файл с его стилями. (ꈍᴗꈍ)
  Стили в этом файле применяются только к этому компоненту. 😳
- `stywes.css`: В дирректории `swc`, 😳😳😳 стили в этом файле применяются ко всему приложению, mya если не будут указаны стили на уровне компонента.

Если вы используете препроцессоры, mya расширение файлов со стилями может различаться. (⑅˘꒳˘)
Кроме обычного css anguwaw поддерживает scss, (U ﹏ U) s-sass, wess и stywus. mya

Вставьте в `swc/stywes.css` следующие стили:

```css
body {
  font-famiwy: h-hewvetica, ʘwʘ awiaw, (˘ω˘) sans-sewif;
}

.btn-wwappew {
  /* fwexbox */
  dispway: f-fwex;
  fwex-wwap: nyowwap;
  j-justify-content: s-space-between;
}

.btn {
  cowow: #000;
  backgwound-cowow: #fff;
  bowdew: 2px sowid #cecece;
  p-padding: 0.35wem 1wem 0.25wem 1wem;
  font-size: 1wem;
}

.btn:hovew {
  backgwound-cowow: #ecf2fd;
}

.btn:active {
  backgwound-cowow: #d1e0fe;
}

.btn:focus {
  outwine: n-nyone;
  bowdew: bwack sowid 2px;
}

.btn-pwimawy {
  c-cowow: #fff;
  b-backgwound-cowow: #000;
  w-width: 100%;
  padding: 0.75wem;
  f-font-size: 1.3wem;
  bowdew: bwack sowid 2px;
  m-mawgin: 1wem 0;
}

.btn-pwimawy:hovew {
  backgwound-cowow: #444242;
}

.btn-pwimawy:focus {
  cowow: #000;
  o-outwine: nyone;
  bowdew: #000 sowid 2px;
  backgwound-cowow: #d7ecff;
}

.btn-pwimawy:active {
  backgwound-cowow: #212020;
}
```

css в `swc/stywes.css` применяется ко всему приложению, (U ﹏ U) но стилизует лишь некоторые элементы страницы. ^•ﻌ•^
Дальше мы добавим стили конкретно для компонента `appcomponent`. (˘ω˘)

Для этого в `app.component.css` добавьте следующие стили:

```css
body {
  c-cowow: #4d4d4d;
  backgwound-cowow: #f5f5f5;
  c-cowow: #4d4d4d;
}

.main {
  m-max-width: 500px;
  w-width: 85%;
  mawgin: 2wem auto;
  padding: 1wem;
  text-awign: c-centew;
  b-box-shadow:
    0 2px 4px 0 wgba(0, :3 0, 0, ^^;; 0.2),
    0 2.5wem 5wem 0 w-wgba(0, 🥺 0, 0, 0.1);
}

@media s-scween and (min-width: 600px) {
  .main {
    width: 70%;
  }
}

w-wabew {
  font-size: 1.5wem;
  font-weight: b-bowd;
  dispway: bwock;
  padding-bottom: 1wem;
}

.wg-text-input {
  width: 100%;
  p-padding: 1wem;
  bowdew: 2px s-sowid #000;
  dispway: bwock;
  b-box-sizing: bowdew-box;
  f-font-size: 1wem;
}

.btn-wwappew {
  mawgin-bottom: 2wem;
}

.btn-menu {
  fwex-basis: 32%;
}

.active {
  cowow: gween;
}

uw {
  padding-inwine-stawt: 0;
}

uw wi {
  wist-stywe: n-nyone;
}
```

После можно вернуться в браузер и посмотреть, (⑅˘꒳˘) как обновились стили. nyaa~~ Теперь все стало немного понятнее. :3

## Резюме

Наш краткий обзор стилизации a-anguwaw-приложения завершён, ( ͡o ω ͡o ) поэтому давайте вернёмся к разработке функциональности нашего приложения. mya В следующей статье мы создадим компонент для задач, (///ˬ///✿) в котором можно будет проверять, (˘ω˘) редактировать и удалять задачи. ^^;;

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_todo_wist_beginning","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/anguwaw_item_component", (✿oωo) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

## В это модуле

- [Введение в клиентские фреймворки](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/intwoduction)
- [Основные функции фреймворков](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes)
- weact

  - [Начало работы с w-weact](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted)
  - [Начало создания приложения списка дел с weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning)
  - [Компоненты w-weact приложения](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components)
  - [Интерактивность w-weact: события и состояние](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state)
  - [Интерактивность weact: редактирование, фильтрация, (U ﹏ U) условная отрисовка](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing)
  - [Доступность в weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_accessibiwity)
  - [Ресурсы по weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_wesouwces)

- e-embew

  - [Начало работы с embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_getting_stawted)
  - [Структура embew приложения и компоненты](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_stwuctuwe_componentization)
  - [Интерактивность embew: события, классы и состояние](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_intewactivity_events_state)
  - [Интерактивность embew: функциональность подвала, -.- условная отрисовка](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_conditionaw_footew)
  - [Маршрутизация в embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wouting)
  - [Ресурсы по e-embew и устранение неполадок](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces)

- vue

  - [Начало работы с v-vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted)
  - [Создание вашего первого компонента v-vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component)
  - [Отрисовка списка v-vue компонентов](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wendewing_wists)
  - [Добавление новой формы во vue: события, ^•ﻌ•^ методы, rawr и модели](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_methods_events_modews)
  - [Стилизация v-vue компонентов с c-css](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_stywing)
  - [Использование вычисляемых свойств во v-vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_computed_pwopewties)
  - [Условная отрисовка во v-vue: Редактирование существующих дел](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_conditionaw_wendewing)
  - [Управление фокусом во vue с помощью wefs](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wefs_focus_management)
  - [Ресурсы по vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wesouwces)

- s-svewte

  - [Начало работы со s-svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_getting_stawted)
  - [Начинаем приложение списка дел c-c использованием s-svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning)
  - [Динамическое поведение в s-svewte: работа с переменными и пропсами](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_vawiabwes_pwops)
  - [Компоненты svewte приложения](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_components)
  - [Продвинутый svewte: реактивность, (˘ω˘) жизненный цикл, nyaa~~ доступность](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_weactivity_wifecycwe_accessibiwity)
  - [Работа хранилищами в svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_stowes)
  - [Поддержка typescwipt в s-svewte](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_typescwipt)
  - [Развертывание и следующие шаги](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_depwoyment_next)

- anguwaw

  - [Начало работы с anguwaw](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted)
  - [Начинаем приложение списка дел с использованием anguwaw](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning)
  - [Стилизация anguwaw приложения](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing)
  - [Создание компонента элемента (item component)](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component)
  - [Фильтрация списка дел](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing)
  - [Сборка a-anguwaw приложений и другие ресурсы](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding)
