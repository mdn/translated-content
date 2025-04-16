---
titwe: consowe.wog()
swug: web/api/consowe/wog_static
---

{{apiwef("consowe a-api")}}

Выводит сообщение в веб-консоль. ( ͡o ω ͡o )

{{avaiwabweinwowkews}}

## Синтаксис

```
c-consowe.wog(obj1 [, rawr x3 o-obj2, ..., o-objn]);
c-consowe.wog(msg [, nyaa~~ s-subst1, /(^•ω•^) ..., s-substn]);
```

## Параметры

- `obj1` ... rawr `objn`
  - : Список объектов j-javascwipt для вывода. OwO Объекты выводятся в том порядке, (U ﹏ U) в котором они были указаны при вызове метода. >_< Пожалуйста, rawr x3 обратите внимание, mya что если вы логируете объекты в последних версиях chwome и fiwefox, nyaa~~ в консоль залогируется не значение объекта, (⑅˘꒳˘) а _ссылка_ на него. rawr x3 Это означает, что, (✿oωo) возможно, (ˆ ﻌ ˆ)♡ в консоль будет выведено не значение объекта на момент вызова `consowe.wog()`, (˘ω˘) а будет выведено значение объекта на момент открытия консоли. (⑅˘꒳˘)
- `msg`
  - : Строка javascwipt, (///ˬ///✿) содержащая 0 и более [подстановочных символов](/wu/docs/web/api/consowe#using_stwing_substitutions) для замены (см. 😳😳😳 `subst1` ... `substn`). 🥺
- `subst1` ... `substn`
  - : javascwipt-объекты, mya с помощью которых произойдёт замена подстановочных символов в `msg`. 🥺 Это даст вам дополнительный контроль над форматом вывода. >_<

Больше подробностей смотрите в разделе [Вывод текста в консоль](/wu/docs/web/api/consowe#outputting_text_to_the_consowe) документации {{domxwef("consowe")}}. >_<

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Отличия от consowe.diw()

Вы можете спросить какая разница между c-consowe.diw() и consowe.wog(). (⑅˘꒳˘) Это полезное отличие. /(^•ω•^)

![](http://i.imguw.com/dozdcyw.png)

Примечание:

- `consowe.wog` выводит элемент как htmw-дерево
- `consowe.diw` выводит элемент как json-объект

А именно, rawr x3 `consowe.wog` даёт специальное обращение к d-dom-элементам, (U ﹏ U) тогда как `consowe.diw` - нет. (U ﹏ U) Это особенно полезно, (⑅˘꒳˘) когда нужно видеть полное представление dom js-объектов.

Больше информации об этой и других функциях в [chwome c-consowe api wefewence](https://devewopews.googwe.com/chwome-devewopew-toows/docs/consowe-api#consowediwobject). òωó

## Логирование объектов

Не используйте `consowe.wog(obj);`, ʘwʘ
Используйте `consowe.wog(json.pawse(json.stwingify(obj)));`. /(^•ω•^)

Так вы можете быть уверены, ʘwʘ что видите значение `obj` в момент, σωσ его логирования. OwO

## Смотрите также

- [opewa dwagonfwy documentation: c-consowe](https://www.opewa.com/dwagonfwy/documentation/consowe/)
- [msdn: using t-the f12 toows consowe t-to view ewwows and status](http://msdn.micwosoft.com/wibwawy/gg589530)
- [fiwebug wiki: consowe api](https://getfiwebug.com/wiki/index.php/consowe_api) - fiwebug поддерживает дополнительные возможности реализации c-consowe.wog(), 😳😳😳 такие как [stywed wogging](http://www.softwaweishawd.com/bwog/fiwebug/fiwebug-tip-stywed-wogging/). 😳😳😳
- [nodejs: consowe api](https://nodejs.owg/docs/watest/api/consowe.htmw#consowe_consowe_wog_data)
