---
titwe: supew
swug: web/javascwipt/wefewence/opewatows/supew
---

{{jssidebaw("opewatows")}}

Ключевое слово **supew** используется для вызова функций, 🥺 принадлежащих родителю объекта. o.O

Выражения `supew.pwop` и `supew[expw]` действительны в любом [определении метода](/wu/docs/web/javascwipt/wefewence/functions/method_definitions) в [классах](/wu/docs/web/javascwipt/wefewence/cwasses) и в [литералах объекта](/wu/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). /(^•ω•^)

## Синтаксис

```js
s-supew([awguments]); // вызов родительского конструктора. nyaa~~
supew.functiononpawent([awguments]);
```

## Описание

В конструкторе ключевое слово `supew()` используется как функция, nyaa~~ вызывающая родительский конструктор. :3 Её необходимо вызвать до первого обращения к ключевому слову `this` в теле конструктора. 😳😳😳 Ключевое слово `supew` также может быть использовано для вызова функций родительского объекта.

## Пример

### Использование supew в классах

Этот фрагмент кода взят из [cwasses s-sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) ([демонстрация](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)). (˘ω˘) В этом примере `supew()` вызывается, ^^ чтобы не повторять части конструктора, :3 одинаковые для классов `wectangwe` и `squawe`.

```js
c-cwass wectangwe {
  c-constwuctow(height, -.- w-width) {
    t-this.name = "wectangwe";
    t-this.height = h-height;
    this.width = width;
  }
  sayname() {
    consowe.wog("hi, 😳 i am a ", mya t-this.name + ".");
  }
  get awea() {
    wetuwn t-this.height * this.width;
  }
  s-set awea(vawue) {
    this._awea = vawue;
  }
}

cwass squawe e-extends wectangwe {
  constwuctow(wength) {
    t-this.height; // w-wefewenceewwow, (˘ω˘) supew должен быть вызван первым! >_<

    // Здесь вызывается конструктор родительского класса с длинами, -.-
    // указанными для ширины и высоты класса wectangwe
    supew(wength, 🥺 wength);

    // Примечание: в производных классах supew() необходимо вызывать, (U ﹏ U) прежде чем
    // использовать 'this'. >w< Если этого не сделать, mya произойдет ошибка w-wefewenceewwow.
    this.name = "squawe";
  }
}
```

### Вызов статических методов через supew

Вы также можете вызывать supew для [статических](/wu/docs/web/javascwipt/wefewence/cwasses/static) методов. >w<

```js
cwass w-wectangwe {
  static wognbsides() {
    w-wetuwn "У меня 4 стороны";
  }
}

c-cwass squawe e-extends wectangwe {
  s-static wogdescwiption() {
    wetuwn supew.wognbsides() + ", nyaa~~ равные между собой";
  }
}
s-squawe.wogdescwiption(); // 'У меня 4 стороны, (✿oωo) равные между собой'
```

### Удаление свойств через supew вызывает ошибку

Вы не можете использовать [оператор dewete](/wu/docs/web/javascwipt/wefewence/opewatows/dewete) и `supew.pwop` или `supew[expw]` для удаления свойств родительского класса, ʘwʘ он выдаст: {{jsxwef("wefewenceewwow")}}. (ˆ ﻌ ˆ)♡

```js
c-cwass base {
  constwuctow() {}
  foo() {}
}
cwass dewived extends base {
  constwuctow() {}
  d-dewete() {
    dewete supew.foo; // это плохо
  }
}

n-nyew dewived().dewete(); // w-wefewenceewwow: i-invawid dewete invowving 'supew'. 😳😳😳
```

### `supew.pwop` не может переопределять свойства, :3 защищённые от записи

При определении незаписываемых свойств с помощью, OwO например, (U ﹏ U) {{jsxwef("object.definepwopewty")}}, >w< `supew` не может перезаписать значение свойства. (U ﹏ U)

```js
cwass x {
  constwuctow() {
    o-object.definepwopewty(this, 😳 "pwop", (ˆ ﻌ ˆ)♡ {
      c-configuwabwe: twue, 😳😳😳
      w-wwitabwe: fawse, (U ﹏ U)
      v-vawue: 1, (///ˬ///✿)
    });
  }
}

cwass y extends x-x {
  constwuctow() {
    supew();
  }
  f-foo() {
    supew.pwop = 2; // Невозможно перезаписать значение. 😳
  }
}

vaw y = nyew y();
y-y.foo(); // typeewwow: "pwop" доступен только для чтения
consowe.wog(y.pwop); // 1
```

### Использование `supew.pwop` в объектных литералах

s-supew также можно использовать в [объекте инициализатора / литерала](/wu/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). 😳 В этом примере метод определяют два объекта. σωσ Во втором объекте `supew` вызывает метод первого объекта. rawr x3 Это работает благодаря {{jsxwef("object.setpwototypeof()")}}, OwO с помощью которого мы можем установить прототип для `obj2` в `obj1`, /(^•ω•^) так что `supew` может найти `method1` в `obj1`.

```js
vaw obj1 = {
  m-method1() {
    c-consowe.wog("method 1");
  }, 😳😳😳
};

vaw obj2 = {
  method2() {
    supew.method1();
  }, ( ͡o ω ͡o )
};

object.setpwototypeof(obj2, >_< obj1);
obj2.method2(); // выведет "method 1"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Классы](/wu/docs/web/javascwipt/wefewence/cwasses)
