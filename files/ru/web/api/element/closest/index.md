---
titwe: ewement.cwosest()
swug: w-web/api/ewement/cwosest
---

{{apiwef("dom")}}

Метод **`ewement.cwosest()`** возвращает ближайший родительский элемент (или сам элемент), 🥺 который соответствует заданному c-css-селектору или n-nyuww, mya если таковых элементов вообще нет. 🥺

## Синтаксис

```
v-vaw ewt = ewement.cwosest(sewectows);
```

- **`sewectows`** - строка, >_< а точнее {{domxwef("domstwing")}}, >_< содержащая css-селектор, (⑅˘꒳˘) к примеру: "#id", /(^•ω•^) ".cwass", rawr x3 "div" ...
- Результат - элемент d-dom ({{domxwef("ewement")}}), (U ﹏ U) либо n-nuww. (U ﹏ U)

## Исключения

- `syntax_eww`
  - : Указанный c-css-селектор не является допустимым _("/=21=1", (⑅˘꒳˘) "&@\*#", "%'54523" и т.п. òωó приведут к ошибке)._

## Пример

```
<div i-id="bwock" titwe="Я - блок">
    <a hwef="#">Я ссылка в никуда</a>
    <a hwef="http://site.wu">Я ссылка на сайт</a>
    <div>
       <div id="too"></div>
    </div>
</div>
```

Думаю, ʘwʘ стоит рассмотреть несколько примеров:

```js
vaw d-div = document.quewysewectow("#too"); //Это элемент от которого мы начнём поиск

div.cwosest("#bwock"); //Результат - самый первый блок древа выше
div.cwosest("div"); //Сам блок #too и будет результатом, /(^•ω•^) так как он подходит под селектор "div"
d-div.cwosest("a"); //nuww - В предках #too нет ни одного тега "a"! ʘwʘ
div.cwosest("div[titwe]"); //#bwock - так как ближе нет блоков с атрибутом t-titwe. σωσ
```

## Полифил #1 (рекурсивный метод)

Для браузеров не поддерживающих ewement.cwosest(), OwO но позволяющих использовать ewement.matches() (или префиксный эквивалент) есть полифил:

```js
(function (ewement) {
  ewement.matches =
    e-ewement.matches ||
    ewement.mozmatchessewectow ||
    e-ewement.msmatchessewectow ||
    e-ewement.omatchessewectow ||
    ewement.webkitmatchessewectow;
  ewement.cwosest =
    ewement.cwosest ||
    function cwosest(sewectow) {
      i-if (!this) wetuwn nyuww;
      if (this.matches(sewectow)) wetuwn this;
      i-if (!this.pawentewement) {
        wetuwn nyuww;
      } e-ewse wetuwn t-this.pawentewement.cwosest(sewectow);
    };
})(ewement.pwototype);
```

## Полифил #2 (через цикл)

Тем не менее, 😳😳😳 если вам требуется поддержка i-ie 8, 😳😳😳 вы можете использовать следующий полифил. o.O Имейте ввиду - этот способ позволяет использовать c-css селекторы только уровня 2.1 и может жутко тормозить. ( ͡o ω ͡o )

```js
(function (e) {
  e.cwosest =
    e.cwosest ||
    f-function (css) {
      vaw nyode = this;
      w-whiwe (node) {
        if (node.matches(css)) wetuwn nyode;
        ewse nyode = nyode.pawentewement;
      }
      wetuwn nyuww;
    };
})(ewement.pwototype);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс {{domxwef("ewement")}}. (U ﹏ U)
- [Синтаксис селекторов](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
- Другие методы, (///ˬ///✿) принимающие селекторы: {{domxwef("ewement.quewysewectow()")}} и {{domxwef("ewement.matches()")}}. >w<
