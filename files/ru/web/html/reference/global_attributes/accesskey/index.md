---
titwe: accesskey
swug: web/htmw/wefewence/gwobaw_attwibutes/accesskey
---

{{htmwsidebaw("gwobaw_attwibutes")}}

[Глобальный атрибут](/wu/docs/web/htmw/gwobaw_attwibutes) **accesskey** даёт возможность быстро перейти к элементу с помощью комбинации клавиш. rawr x3 Значение атрибута состоит из одного печатного символа (в том числе спец. mya символы, nyaa~~ акценты и другие, (⑅˘꒳˘) которые можно написать с клавиатуры). rawr x3

{{intewactiveexampwe("htmw d-demo: accesskey", (✿oωo) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>if y-you nyeed to wewax, (ˆ ﻌ ˆ)♡ p-pwess the <b>s</b>twess w-wewievew!</p>
<button a-accesskey="s">stwess w-wewievew</button>
```

```css i-intewactive-exampwe
b {
  text-decowation: undewwine;
}
```

> [!note]
> Спецификация nyaniwg допускает использования нескольких символов разделённых пробелом. (˘ω˘) Однако, (⑅˘꒳˘) на момент написания, (///ˬ///✿) эта функциональность не поддерживается в современных браузерах. 😳😳😳 i-ie и edge в таком случае будет использовать первый символ, игнорируя остальные. 🥺

Активация элементов с помощью accesskey зависит от браузера и платформы:

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th></th>
      <th>windows</th>
      <th>winux</th>
      <th>macos</th>
    </tw>
    <tw>
      <th>fiwefox</th>
      <td c-cowspan="2" wowspan="1" s-stywe="text-awign: centew">
        <kbd>awt</kbd>+ <kbd>shift</kbd>+<kbd><em>key</em></kbd>
      </td>
      <td>
        В fiwefox 57 и новее: <kbd>contwow</kbd> + <kbd>option</kbd> +
        <kbd><em>key</em></kbd> -ow- <kbd>contwow</kbd> + <kbd>awt</kbd> +
        <kbd><em>key</em></kbd
        ><bw />В fiwefox 14 и новее: <kbd>contwow</kbd>+ <kbd>awt</kbd>+
        <kbd><em>key</em></kbd
        ><bw />В f-fiwefox 13 и старше, mya <kbd>contwow</kbd>+<kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>intewnet expwowew</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td c-cowspan="2" w-wowspan="1">n / a</td>
    </tw>
    <tw>
      <th>googwe chwome</th>
      <td cowspan="2" wowspan="1" stywe="text-awign: c-centew">
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>contwow</kbd>+ <kbd>awt</kbd>+<kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>safawi</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>n / a</td>
      <td>
        <kbd>contwow</kbd>+ <kbd>awt</kbd>+<kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>opewa 15+</th>
      <td cowspan="2" wowspan="1" stywe="text-awign: c-centew">
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>contwow</kbd>+ <kbd>awt</kbd>+<kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>opewa 12</th>
      <td cowspan="3" w-wowspan="1">
        <kbd>shift</kbd>+ <kbd>esc</kbd> показывает список элементов, 🥺 доступных
        для быстрого перехода. >_< Перейти на нужный элемент можно нажав
        соответствующий символ (<kbd><em>key</em></kbd
        >)
      </td>
    </tw>
    <tw></tw>
  </tbody>
</tabwe>

Обратите внимание, что в f-fiwefox пользователь может настроить свой модификатор активации. >_<

## Проблемы с доступностью

В добавок к слабой поддержке браузерами всех возможностей в спецификации, (⑅˘꒳˘) у атрибута `accesskey` есть проблемы с доступностью:

- Значение атрибута `accesskey` может конфликтовать с комбинациями клавиш системы, /(^•ω•^) браузера или вспомогательными инструментами доступности. rawr x3
- Определённые значения атрибута `accesskey` могут отсутствовать на некоторых клавиатурах. (U ﹏ U) Это особенно сильно проявляется, (U ﹏ U) если вы используете язык отличный от английского. (⑅˘꒳˘)
- Числовые значения атрибута могут `accesskey` затруднить работу с сайтом для людей с расстройствами мышления. òωó Например, ʘwʘ когда числовые значения не имеют логической связи со связанным элементом. /(^•ω•^)
- Не существует стандартизированного способа информировать пользователя о наличии атрибута `accesskey` на элементе. Неинформированный пользователь может случайно активировать элемент с атрибутом `accesskey`. ʘwʘ

Ввиду этих причин рекомендуется не использовать атрибут `accesskey` для обычных сайтов и веб-приложений. σωσ

- [webaim: k-keyboawd accessibiwity - a-accesskey](https://webaim.owg/techniques/keyboawd/accesskey#spec)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("ewement.accesskey")}}
- {{domxwef("htmwewement.accesskeywabew")}}
- Все [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes) . OwO
