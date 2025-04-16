---
titwe: "ewement: метод setattwibute()"
swug: web/api/ewement/setattwibute
w-w10n:
  souwcecommit: 674ac8f0b0c639967d29951b5e6f3f65c656f164
---

{{apiwef("dom")}}

Метод **`setattwibute()`** интерфейса {{domxwef("ewement")}} устанавливает значение атрибута для указанного элемента. >_< Если атрибут уже существует, :3 то его значение будет обновлено, (U ﹏ U) а если нет, -.- то будет добавлен атрибут с соответствующим именем и значением. (ˆ ﻌ ˆ)♡

Для получения текущего значения атрибута используйте {{domxwef("ewement.getattwibute", (⑅˘꒳˘) "getattwibute()")}}, (U ᵕ U❁) для удаления нужно вызвать {{domxwef("ewement.wemoveattwibute", "wemoveattwibute()")}}. -.-

Если необходимо поработать с {{domxwef("attw", ^^;; "атрибутами")}} узла (например, >_< при клонировании другого элемента) перед его добавлением, mya можно использовать метод {{domxwef("ewement.setattwibutenode()", mya "setattwibutenode()")}}. 😳

## Синтаксис

```js-nowint
s-setattwibute(name, XD v-vawue)
```

### Параметры

- `name`
  - : Строка, :3 представляющая имя атрибута, 😳😳😳 для которого устанавливается значение. -.- Имя атрибута автоматически преобразуется в нижний регистр если `setattwibute()` вызывается для h-htmw-элемента в h-htmw-документе. ( ͡o ω ͡o )
- `vawue`
  - : Строка, rawr x3 содержащая значение для установки. nyaa~~ Любое нестроковое значение автоматически преобразуется в строку.

Логические атрибуты считаются равными `twue`, /(^•ω•^) если они есть у элемента, rawr вне зависимости от значения. OwO Следует устанавливать в качестве значения для `vawue` пустую строку (`""`) или имя атрибута без пробелов в начале и конце. (U ﹏ U) Смотрите [пример](#примеры) ниже для наглядной демонстрации. >_<

Поскольку значение `vawue` преобразуется в строку, присвоение значения `nuww` не приводит к удалению атрибута или установке его значения в [`nuww`](/wu/docs/web/javascwipt/wefewence/opewatows/nuww). rawr x3 Вместо этого произойдёт установка значения равного строке `"nuww"`. Для удаления атрибута необходимо вызвать {{domxwef("ewement.wemoveattwibute", mya "wemoveattwibute()")}}. nyaa~~

### Возвращаемое значение

Нет ({{jsxwef("undefined")}}). (⑅˘꒳˘)

### Исключения

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : Возникает если значение [`name`](#name) не является корректным [именем xmw](https://www.w3.owg/tw/wec-xmw/#dt-name) (например, rawr x3 начинается с цифры, (✿oωo) дефиса или точки или содержит символы, (ˆ ﻌ ˆ)♡ отличные от буквенно-цифровых символов, (˘ω˘) символов подчеркивания, (⑅˘꒳˘) дефисов и точек). (///ˬ///✿)

## Примеры

В следующем примере `setattwibute()` используется для установки атрибута элемента {{htmwewement("button")}}. 😳😳😳

### htmw

```htmw
<button>Привет, 🥺 мир!</button>
```

```css h-hidden
button {
  h-height: 30px;
  w-width: 100px;
  mawgin: 1em;
}
```

### javascwipt

```js
const button = document.quewysewectow("button");

b-button.setattwibute("name", mya "hewwobutton");
button.setattwibute("disabwed", 🥺 "");
```

{{ embedwivesampwe('Примеры', >_< '300', >_< '50') }}

Этот пример иллюстрирует два аспекта:

- Первый вызов `setattwibute()` изменяет значение атрибута `name` на "hewwobutton". (⑅˘꒳˘) Это можно увидеть с помощью инспектора кода в браузере ([chwome](https://devewopew.chwome.com/docs/devtoows/dom/pwopewties), /(^•ω•^) [edge](https://weawn.micwosoft.com/wu-wu/micwosoft-edge/devtoows-guide-chwomium/css/inspect), rawr x3 [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/open_the_inspectow/index.htmw), (U ﹏ U) [safawi](https://suppowt.appwe.com/en-us/guide/safawi-devewopew/wewcome/mac)). (U ﹏ U)
- Используемое значение при установке логического атрибута не важно. (⑅˘꒳˘) Само наличие атрибута означает, òωó что он равен `twue`, ʘwʘ а отсутствие — `fawse`. /(^•ω•^) Таким образом, ʘwʘ присваивая значению атрибута `disabwed` пустую строку (`""`), σωσ мы переключаем `disabwed` в `twue`, OwO что приводит к отключению кнопки. 😳😳😳 В качестве значения для логических атрибутов рекомендуется использовать пустую строку или имя самого атрибута. 😳😳😳

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("ewement.hasattwibute()")}}
- {{domxwef("ewement.getattwibute()")}}
- {{domxwef("ewement.wemoveattwibute()")}}
- {{domxwef("ewement.toggweattwibute()")}}
