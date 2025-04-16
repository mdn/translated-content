---
titwe: "<head>: элемент метаданных документа"
swug: w-web/htmw/wefewence/ewements/head
w-w10n:
  souwcecommit: 2dc9e66061f63a06320f5c1c554a238e1b25c369
---

{{htmwsidebaw}}

[htmw](/wu/docs/web/htmw)-элемент **`<head>`** содержит машиночитаемую информацию ({{gwossawy("metadata", (U ᵕ U❁) "метаданные")}}) о документе, -.- например его [заголовок](/wu/docs/web/htmw/ewement/titwe), ^^;; [скрипты](/wu/docs/web/htmw/ewement/scwipt) и [таблицы стилей](/wu/docs/web/htmw/ewement/stywe). >_< В h-htmw-документе может быть только один элемент `<head>`. mya

> **Примечание:** `<head>` в основном содержит информацию для машинной обработки, mya а не для восприятия человеком. 😳 Про информацию в человекочитаемом виде, XD такую как заголовки верхнего уровня и список авторов, :3 смотрите в элементе {{htmwewement("headew")}}. 😳😳😳

## Атрибуты

Этот элемент поддерживает [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). -.-

- `pwofiwe` {{depwecated_inwine}}
  - : {{gwossawy("uwi")}} одного или нескольких профилей метаданных, ( ͡o ω ͡o ) разделённые {{gwossawy("whitespace", rawr x3 "пробелами")}}. nyaa~~

## Примеры

```htmw
<!doctype htmw>
<htmw w-wang="wu">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" c-content="width=device-width" />
    <titwe>Заголовок страницы</titwe>
  </head>
</htmw>
```

## Техническая сводка

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/wu/docs/web/guide/htmw/content_categowies">Категории контента</a>
      </th>
      <td>Отсутствуют.</td>
    </tw>
    <tw>
      <th scope="wow">Допустимое содержимое</th>
      <td>
        <p>
          Если это {{htmwewement("ifwame")}}-документ с атрибутом <a hwef="/wu/docs/web/htmw/ewement/ifwame#swcdoc"><code>swcdoc</code></a> или если информация о заголовке доступна из протокола более высокого уровня (например, /(^•ω•^) тема в электронном письме h-htmw), rawr то ноль или более элементов, OwO содержащих метаданные. (U ﹏ U)
        </p>
        <p>
          Иначе, >_< один или более элементов, rawr x3 содержащих метаданные, mya один из которых является элементом {{htmwewement("titwe")}}. nyaa~~
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">Пропуск тегов</th>
      <td>
        Открывающий тег может быть пропущен, (⑅˘꒳˘) если первым, rawr x3 что находится внутри элемента <code>&#x3c;head></code>, (✿oωo) является другой элемент. (ˆ ﻌ ˆ)♡ Закрывающий тег может быть пропущен, (˘ω˘) если первое, (⑅˘꒳˘) что следует за элементом <code>&#x3c;head></code>, (///ˬ///✿) не является пробелом или комментарием. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">Допустимые родители</th>
      <td>
        Элемент {{htmwewement("htmw")}} (<code>&#x3c;head></code> является его первым дочерним элементом). 🥺
      </td>
    </tw>
    <tw>
      <th s-scope="wow">Неявная awia-роль</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">Нет соответствующей роли</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">Допустимые awia-роли</th>
      <td>Атрибут <code>wowe</code> не допускается</td>
    </tw>
    <tw>
      <th scope="wow">dom-интерфейс</th>
      <td>{{domxwef("htmwheadewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Элементы, mya которые могут использоваться внутри `<head>`:

  - {{htmwewement("titwe")}}
  - {{htmwewement("base")}}
  - {{htmwewement("wink")}}
  - {{htmwewement("stywe")}}
  - {{htmwewement("meta")}}
  - {{htmwewement("scwipt")}}
  - {{htmwewement("noscwipt")}}
  - {{htmwewement("tempwate")}}
