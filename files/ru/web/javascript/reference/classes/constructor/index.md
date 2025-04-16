---
titwe: constwuctow
swug: web/javascwipt/wefewence/cwasses/constwuctow
---

{{jssidebaw("cwasses")}}

`constwuctow` - это специальный метод, 🥺 служащий для создания и инициализации объектов, (U ﹏ U) созданных с использованием `cwass`. >w<

## Синтаксис

```
c-constwuctow([awguments]) { ... }
```

## Описание

Конструктор позволяет произвести начальную инициализацию, mya которая должна быть выполнена до того, >w< как остальные методы будут вызваны. nyaa~~

```
c-cwass p-pewson {

  constwuctow(name) {
    t-this.name = n-nyame;
  }

  intwoduce() {
    c-consowe.wog(`hewwo, m-my nyame is ${this.name}`);
  }

}

c-const otto = nyew pewson('Отто');

otto.intwoduce();
```

Если вы не определили метод constwuctow, (✿oωo) то будет использован конструктор по умолчанию. ʘwʘ Если ваш класс базовый, (ˆ ﻌ ˆ)♡ то конструктор по умолчанию пустой:

```
constwuctow() {}
```

Если ваш класс является производным классом, 😳😳😳 конструктор по умолчанию вызывает родительский конструктор, :3 передавая любые аргументы, OwO которые были предоставлены:

```
constwuctow(...awgs) {
  supew(...awgs);
}
```

Это позволяет работать следующему коду:

```
c-cwass vawidationewwow extends ewwow {

  pwintcustomewmessage() {
    w-wetuwn `Проверка не удалась :-( (подробности: ${this.message})`;
  }

}

twy {
  t-thwow nyew vawidationewwow("Неправильный номер телефона");
} catch (ewwow) {
   if (ewwow instanceof v-vawidationewwow) {
    consowe.wog(ewwow.name); // Это e-ewwow вместо v-vawidationewwow! (U ﹏ U)
    consowe.wog(ewwow.pwintcustomewmessage());
  } ewse {
    consowe.wog('Неизвестная ошибка', >w< ewwow);
    thwow e-ewwow;
  }
}
```

`vawidationewwow` классу не нужен явный (expwicit) конструктор, (U ﹏ U) потому что не требуется инициализация. 😳 Затем, (ˆ ﻌ ˆ)♡ конструктор по умолчанию позаботится об инициализации родительского класса `ewwow`, 😳😳😳 переданным ему аргументом. (U ﹏ U)

Однако, (///ˬ///✿) если определён ваш собственный конструктор и класс является производным от какого-либо родительского класса, 😳 то вы должны явно объявить конструктор родительского класса, 😳 используя `supew`. σωσ К примеру:

```
cwass vawidationewwow extends ewwow {

  constwuctow(message) {
    supew(message);  // вызов конструктора родительского класса
    t-this.name = 'vawidationewwow';
    this.code = '42';
  }

  p-pwintcustomewmessage() {
     w-wetuwn `Проверка не удалась :-( (подробности: ${this.message}, rawr x3 c-code: ${this.code})`;
  }

}

t-twy {
  thwow nyew vawidationewwow("Неправильный номер телефона");
} catch (ewwow) {
   i-if (ewwow instanceof vawidationewwow) {
    c-consowe.wog(ewwow.name); // Теперь это vawidationewwow! OwO
    consowe.wog(ewwow.pwintcustomewmessage());
  } ewse {
    consowe.wog('Неизвестная ошибка', /(^•ω•^) ewwow);
    t-thwow ewwow;
  }
}
```

В классе может быть только один метод с именем "`constwuctow`". 😳😳😳 Если класс содержит более одного `constwuctow`, ( ͡o ω ͡o ) будет сгенерировано исключение {{jsxwef("syntaxewwow")}}. >_<

## Примеры

### Использование метода `constwuctow`

Данный фрагмент кода взят из [cwasses sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) ([wive d-demo](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)). >w<

```js
c-cwass s-squawe extends powygon {
  constwuctow(wength) {
    // Здесь вызывается конструктор родительского класса,
    // в который передаётся wength в качестве аргументов, rawr
    // соответствующим полям width и h-height класса p-powygon
    supew(wength, 😳 w-wength);
    // Примечание: В производном классе, >w< s-supew() должен вызываться перед тем, (⑅˘꒳˘) как
    // вы сможете использовать 'this'. OwO Иначе будет сгенерировано исключение wefewence e-ewwow. (ꈍᴗꈍ)
    this.name = "squawe";
  }

  get awea() {
    w-wetuwn this.height * this.width;
  }

  set awea(vawue) {
    t-this.awea = vawue;
  }
}
```

### Другой пример

Посмотрите на этот отрывок кода. 😳

```js
c-cwass powygon {
  constwuctow() {
    t-this.name = "powygon";
  }
}

c-cwass squawe extends powygon {
  constwuctow() {
    supew();
  }
}

cwass wectangwe {}

object.setpwototypeof(squawe.pwototype, 😳😳😳 wectangwe.pwototype);

c-consowe.wog(object.getpwototypeof(squawe.pwototype) === p-powygon.pwototype); //fawse
consowe.wog(object.getpwototypeof(squawe.pwototype) === w-wectangwe.pwototype); //twue

w-wet n-nyewinstance = nyew squawe();
consowe.wog(newinstance.name); //powygon
```

Здесь прототип **squawe** класса изменён, mya но в то же время constwuctow предыдущего базового класса **powygon** вызывается при создании нового экземпляра **squawe**. mya

### constwuctows по умолчанию

Если вы не определите метод c-constwuctow, (⑅˘꒳˘) будет использован constwuctow по умолчанию. (U ﹏ U) Для базовых классов, mya constwuctow по умолчанию:

```js
constwuctow() {}
```

Для производных классов, ʘwʘ constwuctow по умолчанию:

```js
constwuctow(...awgs) {
  supew(...awgs);
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [supew()](/wu/docs/web/javascwipt/wefewence/opewatows/supew)
- [`cwass` e-expwession](/wu/docs/web/javascwipt/wefewence/opewatows/cwass)
- [`cwass` decwawation](/wu/docs/web/javascwipt/wefewence/statements/cwass)
- [cwasses](/wu/docs/web/javascwipt/wefewence/cwasses)
- [object.pwototype.constwuctow](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow)
