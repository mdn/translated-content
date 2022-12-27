---
title: Контекстное меню
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
---
<div>
<div>{{AddonSidebar}}</div>

<div>
<p>Эта возможность пользовательского интерфейса позволяет добавлять новые элементы в контекстное меню браузера, появляющееся при нажатии правой кнопки мыши. Вкладки браузера также имеют контекстное меню доступное через<a href="/en-US/Add-ons/WebExtensions/API/menus"> browser.menus API</a>.</p>

<p><img alt="Example of content menu items added by a WebExtension, from the context-menu-demo example" src="https://mdn.mozillademos.org/files/15756/context_menu_example.png" style="display: block; height: 382px; margin-left: auto; margin-right: auto; width: 350px;"></p>

<p>Возможность добавления элементов в контекстное меню позволяет предоставлять пользователю различные функции в зависимости от его действий на странице или в браузере. Например, можно отобразить элемент, который открывает графический редактор, если пользователь нажимает на изображение, или же предложить функцию для сохранения содержимого страницы, если выбрана некоторая её часть. Элементы могут представлять из себя не только текст, но и, например, кнопку-переключатель или разделитель (см. <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/ItemType">типы элементов меню</a>). После того, как элемент контекстного меню был добавлен с помощью {{WebExtAPIRef("contextMenus.create")}}, он отображается во всех вкладках браузера, но вы можете удалить его при помощи {{WebExtAPIRef("contextMenus.remove")}}.</p>
</div>
</div>

<h2 id="Создание_элементов_контекстного_меню">Создание элементов контекстного меню</h2>

<p>Управление элементами контекстного меню осуществляется с помощью {{WebExtAPIRef("contextMenus")}} API. Однако, вам необходимо указать разрешение <code>contextMenus</code> в manifest.json, чтобы им воспользоваться.</p>

<pre class="brush: json">"permissions": ["contextMenus"]</pre>

<p>Затем вы сможете добавлять, обновлять и удалять элементы контекстного меню в <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background">фоновом сценарии</a> вашего расширения. Для создания элемента необходимо указать его id,<em> </em>заголовок и контекст, в котором элемент будет показан. В примере ниже элемент меню появляется, когда выделен текст или какая-либо другая часть страницы:</p>

<pre class="brush: js">browser.contextMenus.create({
  id: "log-selection",
  title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
  contexts: ["selection"]
}, onCreated);</pre>

<p>Затем вы можете добавить обработчик события нажатия на элемент. Передаваемая обработчику информация о контексте, в котором произошло нажатие, и о вкладке, где контекстное меню было вызвано, может быть использована вами для определения дальнейшего поведения расширения.</p>

<pre class="brush: js">browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    ...
  }
})</pre>

<h2 id="Иконки">Иконки</h2>

<p>Чтобы добавить элементам меню иконки, смотрите документацию <a href="https://design.firefox.com/photon/visuals/iconography.html">Iconography</a> в <a href="https://design.firefox.com/photon/index.html">Photon Design System</a>.</p>

<h2 id="Примеры">Примеры</h2>

<p>Репозиторий <a class="external external-icon" href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> на GitHub содержит два примера расширений, в которых реализована работа элементов контекстного меню:</p>

<ul>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/menu-demo">menu-demo</a> добавляет несколько элементов в контекстное меню;</li>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types">context-menu-copy-link-with-types</a> добавляет элемент контекстного меню, который копирует URL ссылки в буфер в виде текста и форматированного HTML.</li>
</ul>
