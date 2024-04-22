---
title: Контекстное меню
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
---

{{AddonSidebar}}

Эта возможность пользовательского интерфейса позволяет добавлять новые элементы в контекстное меню браузера, появляющееся при нажатии правой кнопки мыши. Вкладки браузера также имеют контекстное меню доступное через [browser.menus API](/en-US/Add-ons/WebExtensions/API/menus).

![Example of content menu items added by a WebExtension, from the context-menu-demo example](context_menu_example.png)

Возможность добавления элементов в контекстное меню позволяет предоставлять пользователю различные функции в зависимости от его действий на странице или в браузере. Например, можно отобразить элемент, который открывает графический редактор, если пользователь нажимает на изображение, или же предложить функцию для сохранения содержимого страницы, если выбрана некоторая её часть. Элементы могут представлять из себя не только текст, но и, например, кнопку-переключатель или разделитель (см. [типы элементов меню](/ru/docs/Mozilla/Add-ons/WebExtensions/API/menus/ItemType)). После того, как элемент контекстного меню был добавлен с помощью {{WebExtAPIRef("contextMenus.create")}}, он отображается во всех вкладках браузера, но вы можете удалить его при помощи {{WebExtAPIRef("contextMenus.remove")}}.

## Создание элементов контекстного меню

Управление элементами контекстного меню осуществляется с помощью {{WebExtAPIRef("contextMenus")}} API. Однако, вам необходимо указать разрешение `contextMenus` в manifest.json, чтобы им воспользоваться.

```json
"permissions": ["contextMenus"]
```

Затем вы сможете добавлять, обновлять и удалять элементы контекстного меню в [фоновом сценарии](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) вашего расширения. Для создания элемента необходимо указать его id, заголовок и контекст, в котором элемент будет показан. В примере ниже элемент меню появляется, когда выделен текст или какая-либо другая часть страницы:

```js
browser.contextMenus.create(
  {
    id: "log-selection",
    title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
    contexts: ["selection"],
  },
  onCreated,
);
```

Затем вы можете добавить обработчик события нажатия на элемент. Передаваемая обработчику информация о контексте, в котором произошло нажатие, и о вкладке, где контекстное меню было вызвано, может быть использована вами для определения дальнейшего поведения расширения.

```js
browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    ...
  }
})
```

## Иконки

Чтобы добавить элементам меню иконки, смотрите документацию [Iconography](https://design.firefox.com/photon/visuals/iconography.html) в [Photon Design System](https://design.firefox.com/photon/index.html).

## Примеры

Репозиторий [webextensions-examples](https://github.com/mdn/webextensions-examples) на GitHub содержит два примера расширений, в которых реализована работа элементов контекстного меню:

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/master/menu-demo) добавляет несколько элементов в контекстное меню;
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types) добавляет элемент контекстного меню, который копирует URL ссылки в буфер в виде текста и форматированного HTML.
