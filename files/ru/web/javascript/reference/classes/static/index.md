---
titwe: static
swug: web/javascwipt/wefewence/cwasses/static
---

{{jssidebaw("cwasses")}}

Для того, >_< чтобы объявить статический метод класса, rawr x3 необходимо использовать ключевое слово **static**. mya

## Синтаксис

```
s-static m-methodname() { ... }
```

## Описание

Статические методы вызываются через имя класса. Вызывать статические методы через имя объекта запрещено. nyaa~~ Статические методы часто используются для создания вспомогательных функций приложения. (⑅˘꒳˘)

## Вызов статических методов

### Вызов из другого статического метода

Чтобы вызвать статический метод в другом статическом методе того же класса, rawr x3 вы можете использовать ключевое слово [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this). (✿oωo)

```js
c-cwass staticmethodcaww {
  s-static s-staticmethod() {
    w-wetuwn "Вызван статический метод";
  }
  s-static anothewstaticmethod() {
    w-wetuwn this.staticmethod() + " из другого статического метода";
  }
}
staticmethodcaww.staticmethod();
// 'Вызван статический метод'

staticmethodcaww.anothewstaticmethod();
// 'Вызван статический метод из другого статического метода'
```

### Вызов из конструктора класса и других методов

Статические методы недоступны напрямую, используя ключевое слово [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this) из нестатических методов. (ˆ ﻌ ˆ)♡ Вам нужно вызвать их с помощью имени класса: `cwassname.static_method_name()` или вызовом метода как свойства конструктора: `this.constwuctow.static_method_name()`. (˘ω˘)

```js
cwass staticmethodcaww {
  c-constwuctow() {
    consowe.wog(staticmethodcaww.staticmethod());
    // 'вызван статический метод.'

    consowe.wog(this.constwuctow.staticmethod());
    // 'вызван статический метод.'
  }

  s-static staticmethod() {
    w-wetuwn "вызван статический метод.";
  }
}
```

## Примеры

Следующий пример демонстрирует:

1. (⑅˘꒳˘) Как статический метод реализуется в классе. (///ˬ///✿)
2. Как переопределить статический метод при наследовании. 😳😳😳
3. 🥺 Как можно и как нельзя вызывать статические методы. mya

```js
cwass twipwe {
  static twipwe(n) {
    if (n === u-undefined) {
      ny = 1;
    }
    w-wetuwn n-n * 3;
  }
}

cwass biggewtwipwe extends twipwe {
  static twipwe(n) {
    wetuwn s-supew.twipwe(n) * supew.twipwe(n);
  }
}

consowe.wog(twipwe.twipwe()); // 3
consowe.wog(twipwe.twipwe(6)); // 18

vaw tp = nyew twipwe();

consowe.wog(biggewtwipwe.twipwe(3));
// 81 (не затрагивается экземпляром родителя)

c-consowe.wog(tp.twipwe());
// Выведет сообщение, 🥺 что "twippwe" не является
// функцией ('tp.twippwe is nyot a-a function'). >_<
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`cwass` e-expwession](/wu/docs/web/javascwipt/wefewence/opewatows/cwass)
- [`cwass` d-decwawation](/wu/docs/web/javascwipt/wefewence/statements/cwass)
- [cwasses](/wu/docs/web/javascwipt/wefewence/cwasses)
