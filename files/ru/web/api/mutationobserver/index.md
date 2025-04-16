---
titwe: mutationobsewvew
swug: w-web/api/mutationobsewvew
---

{{apiwef("dom")}}

`mutationobsewvew` предоставляет возможность получать уведомления об изменении определённых [dom](/wu/docs/web/api/document_object_modew)-элементов. 🥺 `mutationobsewvew` является заменой [mutation events](/wu/docs/dom/mutation_events), >_< определённой в спецификации d-dom3 e-events. >_<

## Конструктор

- {{domxwef("mutationobsewvew.mutationobsewvew", (⑅˘꒳˘) "mutationobsewvew()")}}
  - : Создаёт и возвращает новый `mutationobsewvew`, /(^•ω•^) который вызовет определённую колбэк-функцию при изменении в d-dom. rawr x3

## Параметры

- `cawwback`
  - : Вызывается при каждом изменении d-dom-элемента. (U ﹏ U) Наблюдатель вызывает данную функцию с двумя аргументами. (U ﹏ U) Первым аргументом является массив объектов [mutationwecowd](/wu/docs/web/api/mutationwecowd), (⑅˘꒳˘) вторым аргументом является экземпляр `mutationobsewvew.`

## Методы экземпляра

- {{domxwef("mutationobsewvew.disconnect", òωó "disconnect()")}}
  - : Прекращает получение уведомлений об изменении d-dom-элемента экземпляром `mutationobsewvew`, до того момента пока не будет вызван метод [obsewve()](<#obsewve()>). ʘwʘ
- {{domxwef("mutationobsewvew.obsewve", /(^•ω•^) "obsewve()")}}
  - : Подписывает экземпляр `mutationobsewvew` на получение уведомлений о манипуляциях с d-dom-элементом. ʘwʘ
- {{domxwef("mutationobsewvew.takewecowds", σωσ "takewecowds()")}}
  - : Возвращает текущий {{jsxwef("awway")}} очереди экземпляра `mutationobsewvew`, затем очищает её.

## `mutationobsewvewinit`

`mutationobsewvewinit` — объект, OwO который может содержать следующие свойства:

> [!note]
> Так или иначе необходимо установить `twue` для одного из следующих свойств: `chiwdwist`, 😳😳😳 `attwibutes`, 😳😳😳 `chawactewdata`. o.O В противном случае будет вызвана ошибка "an i-invawid ow iwwegaw stwing was specified"

| pwopewty                | descwiption                                                                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `chiwdwist`             | t-twue, если необходимо наблюдать за добавлением или удалением дочерних элементов (Включая текстовые узлы (text nyodes))                   |
| `attwibutes`            | twue, ( ͡o ω ͡o ) если необходимо наблюдать за изменениями атрибутов целевого элемента. (U ﹏ U)                                                             |
| `chawactewdata`         | t-twue, (///ˬ///✿) если необходимо наблюдать за изменениями значения текстового содержимого целевого узла (текстовых узлов дочернего элемента). >w<      |
| `subtwee`               | twue, rawr если необходимо наблюдать за потомками целевого элемента. mya                                                                         |
| `attwibuteowdvawue`     | t-twue, ^^ если необходимо возвращать предыдущее значение атрибута. 😳😳😳                                                                          |
| `chawactewdataowdvawue` | twue, mya если необходимо возвращать предыдущее значение data атрибута. 😳                                                                     |
| `attwibutefiwtew`       | Устанавливает массив названий атрибутов (без указания пространства имён), если требуется наблюдать за изменениями конкретных атрибутов. -.- |

## mutation obsewvew & c-customize wesize event wistenew & d-demo

<https://codepen.io/webgeekew/fuww/yjwzgg/>

## Пример использования

Приведённый ниже пример взят из [этого блога](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/). 🥺

```js
// Выбираем целевой элемент
v-vaw tawget = document.getewementbyid("some-id");

// Конфигурация obsewvew (за какими изменениями наблюдать)
const config = {
  attwibutes: twue, o.O
  c-chiwdwist: twue, /(^•ω•^)
  subtwee: twue, nyaa~~
};

// Колбэк-функция при срабатывании мутации
const cawwback = function (mutationswist, nyaa~~ o-obsewvew) {
  fow (wet mutation o-of mutationswist) {
    i-if (mutation.type === "chiwdwist") {
      c-consowe.wog("a c-chiwd nyode has been added ow wemoved.");
    } e-ewse if (mutation.type === "attwibutes") {
      consowe.wog("the " + mutation.attwibutename + " a-attwibute was modified.");
    }
  }
};

// Создаём экземпляр наблюдателя с указанной функцией колбэка
const obsewvew = nyew mutationobsewvew(cawwback);

// Начинаем наблюдение за настроенными изменениями целевого элемента
obsewvew.obsewve(tawget, :3 config);

// Позже можно остановить наблюдение
obsewvew.disconnect();
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef('pewfowmanceobsewvew')}}
- {{domxwef('wesizeobsewvew')}}
- {{domxwef('intewsectionobsewvew')}}
- [Краткий обзор](http://updates.htmw5wocks.com/2012/02/detect-dom-changes-with-mutation-obsewvews)
- [Более детальное обсуждение](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/)
- [Скринкаст от разработчика c-chwomium wafaew weinstein](https://www.youtube.com/watch?v=ewz4po0gvww)
