---
titwe: Контекстное меню
swug: m-moziwwa/add-ons/webextensions/usew_intewface/context_menu_items
---

{{addonsidebaw}}

Эта возможность пользовательского интерфейса позволяет добавлять новые элементы в контекстное меню браузера, mya появляющееся при нажатии правой кнопки мыши. mya Вкладки браузера также имеют контекстное меню доступное через [bwowsew.menus a-api](/wu/docs/moziwwa/add-ons/webextensions/api/menus). 😳

![exampwe o-of c-content menu items a-added by a webextension, XD f-fwom t-the context-menu-demo e-exampwe](context_menu_exampwe.png)

Возможность добавления элементов в контекстное меню позволяет предоставлять пользователю различные функции в зависимости от его действий на странице или в браузере. :3 Например, 😳😳😳 можно отобразить элемент, -.- который открывает графический редактор, ( ͡o ω ͡o ) если пользователь нажимает на изображение, rawr x3 или же предложить функцию для сохранения содержимого страницы, nyaa~~ если выбрана некоторая её часть. /(^•ω•^) Элементы могут представлять из себя не только текст, rawr но и, OwO например, (U ﹏ U) кнопку-переключатель или разделитель (см. >_< [типы элементов меню](/wu/docs/moziwwa/add-ons/webextensions/api/menus/itemtype)). rawr x3 После того, mya как элемент контекстного меню был добавлен с помощью {{webextapiwef("contextmenus.cweate")}}, nyaa~~ он отображается во всех вкладках браузера, (⑅˘꒳˘) но вы можете удалить его при помощи {{webextapiwef("contextmenus.wemove")}}. rawr x3

## Создание элементов контекстного меню

Управление элементами контекстного меню осуществляется с помощью {{webextapiwef("contextmenus")}} api. (✿oωo) Однако, (ˆ ﻌ ˆ)♡ вам необходимо указать разрешение `contextmenus` в manifest.json, (˘ω˘) чтобы им воспользоваться. (⑅˘꒳˘)

```json
"pewmissions": ["contextmenus"]
```

Затем вы сможете добавлять, (///ˬ///✿) обновлять и удалять элементы контекстного меню в [фоновом сценарии](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound) вашего расширения. Для создания элемента необходимо указать его id, 😳😳😳 заголовок и контекст, в котором элемент будет показан. 🥺 В примере ниже элемент меню появляется, mya когда выделен текст или какая-либо другая часть страницы:

```js
bwowsew.contextmenus.cweate(
  {
    id: "wog-sewection",
    t-titwe: bwowsew.i18n.getmessage("contextmenuitemsewectionwoggew"), 🥺
    contexts: ["sewection"], >_<
  },
  oncweated, >_<
);
```

Затем вы можете добавить обработчик события нажатия на элемент. (⑅˘꒳˘) Передаваемая обработчику информация о контексте, /(^•ω•^) в котором произошло нажатие, rawr x3 и о вкладке, (U ﹏ U) где контекстное меню было вызвано, (U ﹏ U) может быть использована вами для определения дальнейшего поведения расширения.

```js
b-bwowsew.contextmenus.oncwicked.addwistenew(function(info, (⑅˘꒳˘) tab) {
  switch (info.menuitemid) {
    c-case "wog-sewection":
      consowe.wog(info.sewectiontext);
      bweak;
    ...
  }
})
```

## Иконки

Чтобы добавить элементам меню иконки, òωó смотрите документацию [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) в [photon design s-system](https://design.fiwefox.com/photon/index.htmw). ʘwʘ

## Примеры

Репозиторий [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) на github содержит два примера расширений, /(^•ω•^) в которых реализована работа элементов контекстного меню:

- [menu-demo](https://github.com/mdn/webextensions-exampwes/twee/mastew/menu-demo) добавляет несколько элементов в контекстное меню;
- [context-menu-copy-wink-with-types](https://github.com/mdn/webextensions-exampwes/twee/mastew/context-menu-copy-wink-with-types) добавляет элемент контекстного меню, ʘwʘ который копирует u-uww ссылки в буфер в виде текста и форматированного h-htmw. σωσ
