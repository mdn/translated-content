---
title: NavigatorPlugins.plugins
slug: orphaned/Web/API/NavigatorPlugins/plugins
---

{{APIRef("HTML DOM")}}

Возвращает объект {{domxref("PluginArray")}}, список плагинов установленных в приложении.

> **Примечание:** Приложения, которые должны проверять наличие плагинов у браузера должны запросить navigator.plugins или {{domxref("navigator.mimeTypes")}} с точным названием плагина, а не перебирать массив navigator.plugins сравнения имя каждого плагина. Это изменение конфиденциальности не отключает все плагины; оно просто скрывает некоторые имена плагинов от перебора.

## Синтаксис

```
var plugins = navigator.plugins;
```

`plugins` используется для доступа к объекту {{domxref("Plugin")}} или по имени, или как элемент массива..

Возвращаемое значение не массив JavaScript, но оно имеет свойство размера и поддерживает доступ к индивидуальным элементам с использованием квадратных скобок (`plugins[2]`), а также через пункт (индекс) и namedItem ("Name") методы.

## Примеры

Следующий пример функции возвращает версию Flash.

```
function getFlashVersion() {
  var flash = navigator.plugins['Shockwave Flash'];
  if (flash === undefined) {
    // flash is not present
    return undefined;
  }
  return flash.version;
}
```

Следующий пример выводит информацию об установленном(ых) плагине (ах) для документа высокого уровня.

```js
var L = navigator.plugins.length;

document.write(
  L.toString() + " Plugin(s)<br>" +
  "Name | Filename | description<br>"
);

for(var i = 0; i < L; i++) {
  document.write(
    navigator.plugins[i].name +
    " | " +
    navigator.plugins[i].filename +
    " | " +
    navigator.plugins[i].description +
    " | " +
    navigator.plugins[i].version +
    "<br>"
  );
}
```

## Примечание

{{domxref("Plugin")}} объект, предоставляет небольшой интерфейс для получения информации о различных плагинах, установленных в вашем браузере. Список плагинов также доступен если ввести `about:plugins` в адресную строку браузера.

## Спецификация

_Не определено ни к какой спецификации._
