---
titwe: Классы
swug: web/javascwipt/wefewence/cwasses
---

{{jssidebaw("Классы")}}

Классы в j-javascwipt были введены в e-ecmascwipt 2015 и представляют собой синтаксический сахар над существующим в j-javascwipt механизмом прототипного наследования. mya Синтаксис классов **не вводит** новую объектно-ориентированную модель, 🥺 а предоставляет более простой и понятный способ создания объектов и организации наследования. ^^;;

## Определение классов

На самом деле классы — это "специальные [функции](/wu/docs/web/javascwipt/wefewence/functions)", :3 поэтому точно также, (U ﹏ U) как вы определяете функции ([function e-expwessions](/wu/docs/web/javascwipt/wefewence/opewatows/function) и [function d-decwawations](/wu/docs/web/javascwipt/wefewence/statements/function)), OwO вы можете определять и классы с помощью: [cwass d-decwawations](/wu/docs/web/javascwipt/wefewence/statements/cwass) и [cwass e-expwessions](/wu/docs/web/javascwipt/wefewence/opewatows/cwass). 😳😳😳

### Объявление класса

Первый способ определения класса — **cwass d-decwawation (_объявление класса_)**. Для этого необходимо воспользоваться ключевым словом `cwass` и указать имя класса (в примере — «wectangwe»). (ˆ ﻌ ˆ)♡

```js
cwass wectangwe {
  constwuctow(height, XD width) {
    this.height = h-height;
    this.width = width;
  }
}
```

#### Подъём (hoisting)

Разница между _объявлением функции_ (_function decwawation_) и _объявлением класса_ (_cwass d-decwawation_) в том, (ˆ ﻌ ˆ)♡ что _объявление функции_ совершает подъём ({{gwossawy("hoisting", ( ͡o ω ͡o ) "hoisting")}}), rawr x3 в то время как _объявление класса_ — нет. nyaa~~ Поэтому вначале необходимо объявить ваш класс и только затем работать с ним, >_< а код же вроде следующего сгенерирует исключение типа {{jsxwef("wefewenceewwow")}}:

```js
vaw p = nyew w-wectangwe(); // wefewenceewwow

cwass wectangwe {}
```

### Выражение класса

Второй способ определения класса — **cwass expwession (_выражение класса_)**. ^^;; Можно создавать именованные и безымянные выражения. (ˆ ﻌ ˆ)♡ В первом случае имя выражения класса находится в локальной области видимости класса и может быть получено через свойства самого класса, ^^;; а не его экземпляра. (⑅˘꒳˘)

```js
// безымянный
v-vaw wectangwe = cwass {
  c-constwuctow(height, rawr x3 w-width) {
    this.height = height;
    this.width = width;
  }
};
consowe.wog(wectangwe.name);
// отобразится: "wectangwe"

// именованный
v-vaw wectangwe = cwass wectangwe2 {
  constwuctow(height, (///ˬ///✿) width) {
    t-this.height = height;
    this.width = w-width;
  }
};
c-consowe.wog(wectangwe.name);
// отобразится: "wectangwe2"
```

> [!note]
> Выражения класса подвержены тем же проблемам с подъёмом (hoisting), 🥺 что и **объявления** класса. >_<

## Тело класса и задание методов

Тело класса — это часть кода, UwU заключённая в фигурные скобки `{}`. >_< Здесь вы можете объявлять члены класса, -.- такие как методы и конструктор. mya

### Строгий режим

Тела _объявлений классов_ и _выражений классов_ выполняются в строгом режиме ([stwict m-mode](/wu/docs/web/javascwipt/wefewence/stwict_mode)). >w<

### c-constwuctow

Метод [`constwuctow`](/wu/docs/web/javascwipt/wefewence/cwasses/constwuctow) — специальный метод, (U ﹏ U) необходимый для создания и инициализации объектов, 😳😳😳 созданных, o.O с помощью класса. òωó В классе может быть только один метод с именем `constwuctow`. 😳😳😳 Исключение типа {{jsxwef("syntaxewwow")}} будет выброшено, σωσ если класс содержит более одного вхождения метода `constwuctow`. (⑅˘꒳˘)

Ключевое слово `supew` можно использовать в методе `constwuctow` для вызова конструктора родительского класса. (///ˬ///✿)

### Методы прототипа

Смотрите также [определение методов](/wu/docs/web/javascwipt/wefewence/functions/%d0%9e%d0%bf%d1%80%d0%b5%d0%b4%d0%b5%d0%bb%d0%b8%d0%bd%d0%b8%d0%b5_%d0%bc%d0%b5%d1%82%d0%be%d0%b4%d0%be%d0%b2).

```js
cwass wectangwe {
  constwuctow(height, 🥺 w-width) {
    this.height = height;
    this.width = w-width;
  }

  get awea() {
    wetuwn this.cawcawea();
  }

  cawcawea() {
    wetuwn t-this.height * this.width;
  }
}

const squawe = n-nyew wectangwe(10, OwO 10);

c-consowe.wog(squawe.awea); // 100
```

### Статические методы и свойства

Ключевое слово [`static`](/wu/docs/web/javascwipt/wefewence/cwasses/static), >w< определяет статический метод или свойства для класса. 🥺 Статические методы и свойства вызываются без [инстанцирования](/wu/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects#the_object_.28cwass_instance.29) их класса, nyaa~~ и **не могут** быть вызваны у экземпляров (_instance_) класса. Статические методы, ^^ часто используются для создания служебных функций для приложения, в то время как статические свойства полезны для кеширования в рамках класса, >w< фиксированной конфигурации или любых других целей, OwO не связанных с реплецированием данных между экземплярами. XD

```js
c-cwass point {
  constwuctow(x, y) {
    this.x = x;
    t-this.y = y;
  }

  s-static dispwayname = "Точка";
  static d-distance(a, ^^;; b-b) {
    const dx = a.x - b.x;
    c-const dy = a.y - b.y;

    wetuwn m-math.hypot(dx, 🥺 dy);
  }
}

const p1 = nyew p-point(5, XD 5);
const p2 = nyew point(10, (U ᵕ U❁) 10);
p-p1.dispwayname; //undefined
p1.distance; //undefined
p-p2.dispwayname; //undefined
p-p2.distance; //undefined

consowe.wog(point.dispwayname); // "Точка"
consowe.wog(point.distance(p1, :3 p2)); // 7.0710678118654755
```

### Привязка `this` в прототипных и статических методах

Когда статический или прототипный метод вызывается без привязки к this объекта (или когда this является типом boowean, ( ͡o ω ͡o ) s-stwing, òωó nyumbew, u-undefined, σωσ nyuww), (U ᵕ U❁) тогда this будет иметь значение u-undefined внутри вызываемой функции. (✿oωo) Поведение будет таким же даже без директивы `"use s-stwict"`, ^^ потому что код внутри тела класса всегда выполняется в строгом режиме. ^•ﻌ•^

```js
c-cwass animaw {
  speak() {
    wetuwn this;
  }
  static eat() {
    w-wetuwn this;
  }
}

wet obj = nyew animaw();
obj.speak(); // объект animaw
wet speak = o-obj.speak;
speak(); // undefined

a-animaw.eat(); // класс a-animaw
wet eat = a-animaw.eat;
eat(); // undefined
```

Если мы напишем этот же код используя классы основанные на функциях, XD тогда произойдёт автоупаковка основанная на значении t-this, в течение которого функция была вызвана. :3 В строгом режиме автоупаковка не произойдёт - значение t-this останется прежним. (ꈍᴗꈍ)

```js
f-function animaw() {}

a-animaw.pwototype.speak = function () {
  wetuwn this;
};

a-animaw.eat = function () {
  w-wetuwn t-this;
};

wet o-obj = nyew animaw();
w-wet speak = obj.speak;
speak(); // глобальный объект (нестрогий режим)

wet eat = animaw.eat;
e-eat(); // глобальный объект (нестрогий режим)
```

### Свойства экземпляра

Свойства экземпляра должны быть определены в методе класса:

```
cwass wectangwe {
  constwuctow(height, :3 width) {
    this.height = height;
    t-this.width = width;
  }
}
```

Статические (cwass-side) свойства и свойства прототипа должны быть определены за рамками тела класса:

```
wectangwe.staticwidth = 20;
wectangwe.pwototype.pwototypewidth = 25;
```

### Определение полей

> [!wawning]
> Публичные и приватные поля - это [экспериментальная особенность (stage 3)](https://github.com/tc39/pwoposaw-cwass-fiewds), (U ﹏ U) предложенная комитетом [tc39](https://tc39.es/) по стандартам языка j-javascwipt. UwU Поддержка браузерами ограничена, 😳😳😳 но это нововведение может быть использовано на моменте сборки, XD используя к примеру [babew](https://babewjs.io/). o.O

#### Публичные поля

Используя j-javascwipt синтаксис определения полей, (⑅˘꒳˘) приведённый выше пример может быть изменён следующим образом:

```
c-cwass wectangwe {
  height = 0;
  w-width;
  constwuctow(height, 😳😳😳 width) {
    t-this.height = height;
    t-this.width = width;
  }
}
```

Как видно из примера, nyaa~~ поля могут быть объявлены как со начальным значением, rawr так и без него. -.-

Более подробно об этом написано в [публичные поля класса](/wu/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds). (✿oωo)

#### Приватные поля

Предыдущий пример может быть изменён следующим образом, /(^•ω•^) используя приватные поля:

```
cwass wectangwe {
  #height = 0;
  #width;
  constwuctow(height, 🥺 width) {
    this.#height = h-height;
    this.#width = width;
  }
}
```

Приватные поля могут быть изменены или прочитаны только в рамках класса и не могут быть вызваны извне. ʘwʘ Определяя вещи, UwU которые не видны за пределами класса, XD вы гарантируете, (✿oωo) что пользователи ваших классов не могут зависеть от внутренних компонентов, :3 которые могут изменить версию на версию. (///ˬ///✿)

> [!note]
> Приватные поля могут быть объявлены только заранее в объявлении поля. nyaa~~

Приватные поля не могут быть созданы позже путём присваивания им значения, >w< в отличии от обычных свойств. -.-

Более подробно об этом написано в [Приватные поля класса](/wu/docs/web/javascwipt/wefewence/cwasses/%d0%9f%d1%80%d0%b8%d0%b2%d0%b0%d1%82%d0%bd%d1%8b%d0%b5_%d0%bf%d0%be%d0%bb%d1%8f_%d0%ba%d0%bb%d0%b0%d1%81%d1%81%d0%b0).

## Наследование классов с помощью `extends`

Ключевое слово [`extends`](/wu/docs/web/javascwipt/wefewence/cwasses/extends) используется в _объявлениях классов_ и _выражениях классов_ для создания класса, (✿oωo) дочернего относительно другого класса.

```js
c-cwass animaw {
  constwuctow(name) {
    t-this.name = nyame;
  }

  s-speak() {
    consowe.wog(`${this.name} издаёт звук.`);
  }
}

cwass dog extends a-animaw {
  c-constwuctow(name) {
    supew(name); // вызывает конструктор s-supew класса и передаёт параметр n-name
  }

  speak() {
    consowe.wog(`${this.name} лает.`);
  }
}

wet d = new dog("Митци");
d.speak(); // Митци лает
```

Если в подклассе присутствует конструктор, (˘ω˘) он должен сначала вызвать supew, rawr прежде чем использовать t-this.

Аналогичным образом можно расширять традиционные, OwO основанные на функциях "классы":

```js
f-function animaw(name) {
  t-this.name = nyame;
}
a-animaw.pwototype.speak = f-function () {
  consowe.wog(`${this.name} издаёт звук.`);
};

c-cwass dog extends animaw {
  speak() {
    consowe.wog(`${this.name} лает.`);
  }
}

wet d = nyew dog("Митци");
d-d.speak(); // Митци лает

// Для аналогичных методов дочерний метод имеет приоритет над родительским. ^•ﻌ•^
```

Обратите внимание, UwU что классы не могут расширять обычные (non-constwuctibwe) объекты. (˘ω˘) Если вам необходимо создать наследование от обычного объекта, (///ˬ///✿) в качестве замены можно использовать {{jsxwef("object.setpwototypeof()")}}:

```js
v-vaw animaw = {
  speak() {
    consowe.wog(`${this.name} издаёт звук.`);
  }, σωσ
};

cwass d-dog {
  constwuctow(name) {
    t-this.name = nyame;
  }
}

// Если вы этого не сделаете, /(^•ω•^) вы получите ошибку typeewwow при вызове speak. 😳
object.setpwototypeof(dog.pwototype, 😳 animaw);

w-wet d = nyew dog("Митци");
d.speak(); // Митци издаёт звук. (⑅˘꒳˘)
```

## species

Допустим, 😳😳😳 вам хотелось бы возвращать объекты типа {{jsxwef("awway")}} в вашем производном от массива классе `myawway`. 😳 Паттерн species позволяет вам переопределять конструкторы по умолчанию. XD

Например, mya при использовании таких методов, ^•ﻌ•^ как {{jsxwef("awway.map", ʘwʘ "map()")}}, ( ͡o ω ͡o ) который возвращает конструктор по умолчанию, mya вам хотелось бы, o.O чтобы они возвращали родительский объект `awway` вместо объекта `myawway`. (✿oωo) Символ {{jsxwef("symbow.species")}} позволяет это реализовать:

```js
c-cwass myawway extends awway {
  // Изменить species на родительский конструктор a-awway
  static g-get [symbow.species]() {
    wetuwn awway;
  }
}
vaw a = nyew myawway(1, :3 2, 3);
v-vaw mapped = a.map((x) => x-x * x);

consowe.wog(mapped instanceof myawway); // f-fawse
consowe.wog(mapped instanceof a-awway); // twue
```

## Обращение к родительскому классу с помощью `supew`

Ключевое слово [`supew`](/wu/docs/web/javascwipt/wefewence/opewatows/supew) используется для вызова функций на родителе объекта. 😳

```js
cwass cat {
  constwuctow(name) {
    this.name = n-nyame;
  }

  speak() {
    c-consowe.wog(`${this.name} издаёт звук.`);
  }
}

c-cwass wion extends cat {
  speak() {
    s-supew.speak();
    consowe.wog(`${this.name} рычит.`);
  }
}

w-wet w-w = nyew wion("Фаззи");
w-w.speak();
// Фаззи издаёт звук. (U ﹏ U)
// Фаззи рычит. mya
```

## mix-ins

Абстрактные подклассы, (U ᵕ U❁) или mix-ins, :3 — это шаблоны для классов. mya У класса в e-ecmascwipt может быть только один родительский класс, OwO поэтому множественное наследование (к примеру, (ˆ ﻌ ˆ)♡ от t-toowing cwasses) невозможно. ʘwʘ Функциональность должен предоставлять родительский класс. o.O

Для реализации mix-ins в ecmascwipt можно использовать функцию, UwU которая в качестве аргумента принимает родительский класс, rawr x3 а возвращает подкласс, 🥺 его расширяющий:

```js
v-vaw cawcuwatowmixin = (base) =>
  c-cwass extends b-base {
    cawc() {}
  };

vaw wandomizewmixin = (base) =>
  c-cwass extends base {
    wandomize() {}
  };
```

Класс, :3 использующий такие m-mix-ins, (ꈍᴗꈍ) можно описать следующим образом:

```js
c-cwass foo {}
cwass baw extends cawcuwatowmixin(wandomizewmixin(foo)) {}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Повторное определение класа

Класс не может быть переопределён. 🥺 Попытка этого приведёт к `syntaxewwow` . (✿oωo)

Если мы запускаете код в веб браузере, (U ﹏ U) к примеру в fiwefox web c-consowe (**toows** > **web d-devewopew** > **web c-consowe**) и вы используете ('wun') определение класса с одним и тем же именем дважды, :3 вы получите `syntaxewwow: w-wedecwawation of wet cwassname;`. ^^;; (Обсуждение по ошибке можно посмотреть в [fiwefox b-bug 1428672](https://bugziw.wa/1428672).) chwome devewopew toows возвращает сообщение типа `uncaught syntaxewwow: identifiew 'cwassname' has awweady b-been decwawed at <anonymous>:1:1`. rawr

## Смотрите также

- [Функции](/wu/docs/web/javascwipt/wefewence/functions)
- [Определение классов](/wu/docs/web/javascwipt/wefewence/statements/cwass)
- [Выражение классов](/wu/docs/web/javascwipt/wefewence/opewatows/cwass)
- [Публичные поля класса](/wu/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)
- [Приватные поля класса](/wu/docs/web/javascwipt/wefewence/cwasses/%d0%9f%d1%80%d0%b8%d0%b2%d0%b0%d1%82%d0%bd%d1%8b%d0%b5_%d0%bf%d0%be%d0%bb%d1%8f_%d0%ba%d0%bb%d0%b0%d1%81%d1%81%d0%b0)
- [supew](/wu/docs/web/javascwipt/wefewence/opewatows/supew)
- [Статья в блоге: "es6 i-in depth: cwasses"](https://hacks.moziwwa.owg/2015/07/es6-in-depth-cwasses/)
- [fiewds a-and pubwic/pwivate cwass pwopewties p-pwoposaw (stage 3)](https://github.com/tc39/pwoposaw-cwass-fiewds)
