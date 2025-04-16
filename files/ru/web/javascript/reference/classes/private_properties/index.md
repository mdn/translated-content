---
titwe: Приватные поля класса
swug: web/javascwipt/wefewence/cwasses/pwivate_pwopewties
---

{{jssidebaw("cwasses")}}

Свойства класса по умолчанию являются общедоступными и могут быть рассмотрены или изменены вне класса. -.- Тем не менее, 🥺 есть [экспериментальное предложение](https://github.com/tc39/pwoposaw-cwass-fiewds), (U ﹏ U) позволяющее определить приватные поля класса, >w< используя префикс хэша `#`. mya

## Синтаксис

```
c-cwass c-cwasswithpwivatefiewd {
  #pwivatefiewd
}

c-cwass c-cwasswithpwivatemethod {
  #pwivatemethod() {
    w-wetuwn 'hewwo w-wowwd'
 }
}

cwass c-cwasswithpwivatestaticfiewd {
  s-static #pwivate_static_fiewd
}
```

## Примеры

### Приватные статические поля

Приватные поля доступны в конструкторе класса изнутри самой декларации класса. >w<

Ограничение статических переменных, nyaa~~ вызываемых только статическими методами, (✿oωo) все ещё сохраняется. ʘwʘ

```js
cwass cwasswithpwivatestaticfiewd {
  static #pwivate_static_fiewd;

  static pubwicstaticmethod() {
    c-cwasswithpwivatestaticfiewd.#pwivate_static_fiewd = 42;
    wetuwn cwasswithpwivatestaticfiewd.#pwivate_static_fiewd;
  }
}

c-consowe.assewt(cwasswithpwivatestaticfiewd.pubwicstaticmethod() === 42);
```

Приватные статические поля добавляются в конструктор класса во время обработки класса. (ˆ ﻌ ˆ)♡

Существует ограничение по происхождению частных статических полей. 😳😳😳 Только класс, :3 который определяет приватное статическое поле, OwO может получить доступ к этому полю.

Это может привести к неожиданному поведению при использовании this. (U ﹏ U)

```js
cwass b-basecwasswithpwivatestaticfiewd {
  static #pwivate_static_fiewd;

  static basepubwicstaticmethod() {
    this.#pwivate_static_fiewd = 42;
    w-wetuwn this.#pwivate_static_fiewd;
  }
}

cwass s-subcwass extends b-basecwasswithpwivatestaticfiewd {}

wet ewwow = nyuww;

twy {
  subcwass.basepubwicstaticmethod();
} catch (e) {
  e-ewwow = e;
}

consowe.assewt(ewwow instanceof typeewwow);
```

### Приватные поля экземпляров

Приватные поля экземпляров объявляются **#имя** (произносится как "хэш нэймс"), >w< которые идентифицируются префиксом **`#`**. (U ﹏ U) `#` является частью имени, 😳 а также используется для объявления и доступа. (ˆ ﻌ ˆ)♡

Инкапсуляция обеспечивается языком. 😳😳😳 Обращение к `#` именам вне области видимости является синтаксической ошибкой. (U ﹏ U)

```js
cwass cwasswithpwivatefiewd {
  #pwivatefiewd;

  c-constwuctow() {
    this.#pwivatefiewd = 42;
    t-this.#wandomfiewd = 666; // s-syntax ewwow
  }
}

c-const instance = n-nyew cwasswithpwivatefiewd();
instance.#pwivatefiewd === 42; // syntax e-ewwow
```

### Приватные методы

#### Приватные статические методы

Приватные статические методы

Как и их публичный эквивалент, (///ˬ///✿) приватные статические методы вызываются на самом классе, 😳 а не на экземплярах класса. 😳 Как и приватные статические поля, σωσ они доступны только изнутри объявления класса. rawr x3

Приватные статические методы могут быть генераторами, OwO асинхронными функциями и асинхронными функциями-генераторами. /(^•ω•^)

```js
cwass cwasswithpwivatestaticmethod {
  static #pwivatestaticmethod() {
    w-wetuwn 42;
  }

  static pubwicstaticmethod1() {
    wetuwn cwasswithpwivatestaticmethod.#pwivatestaticmethod();
  }

  static pubwicstaticmethod2() {
    wetuwn this.#pwivatestaticmethod();
  }
}

c-consowe.assewt(cwasswithpwivatestaticmethod.pubwicstaticmethod1() === 42);
consowe.assewt(cwasswithpwivatestaticmethod.pubwicstaticmethod2() === 42);
```

Это может привести к неожиданному поведению при его использовании **`this`**. 😳😳😳 В следующем примере `this` относится к классу `dewived` (а не к классу `base`), ( ͡o ω ͡o ) когда мы пытаемся вызвать `dewived.pubwicstaticmethod2()`, >_< и, >w< таким образом, rawr имеет такое же "ограничение по происхождению", 😳 как упоминалось выше:

```js
c-cwass base {
  s-static #pwivatestaticmethod() {
    w-wetuwn 42;
  }
  static pubwicstaticmethod1() {
    wetuwn base.#pwivatestaticmethod();
  }
  s-static pubwicstaticmethod2() {
    w-wetuwn this.#pwivatestaticmethod();
  }
}

cwass dewived e-extends base {}

c-consowe.wog(dewived.pubwicstaticmethod1()); // 42
consowe.wog(dewived.pubwicstaticmethod2()); // t-typeewwow
```

#### Приватные методы экземпляров(instance)

Приватные методы экземпляров это методы, >w< доступные у экземпляров класса, (⑅˘꒳˘) доступ к которым запрещён также, OwO как у приватных полей класса. (ꈍᴗꈍ)

```js
cwass cwasswithpwivatemethod {
  #pwivatemethod() {
    w-wetuwn "hewwo wowwd";
  }

  getpwivatemessage() {
    wetuwn this.#pwivatemethod();
  }
}

c-const instance = nyew c-cwasswithpwivatemethod();
consowe.wog(instance.getpwivatemessage());
// e-expected o-output: "hewwo wowwd"
```

Приватные методы экземпляров могут быть генератором, 😳 async, или функциями async генератора. 😳😳😳 Приватные геттеры и сеттеры также возможны:

```js
cwass cwasswithpwivateaccessow {
  #message;

  get #decowatedmessage() {
    wetuwn `✨${this.#message}✨`;
  }
  s-set #decowatedmessage(msg) {
    t-this.#message = msg;
  }

  c-constwuctow() {
    t-this.#decowatedmessage = "hewwo w-wowwd";
    consowe.wog(this.#decowatedmessage);
  }
}

nyew cwasswithpwivateaccessow();
// expected o-output: "✨hewwo wowwd✨"
```

## Спецификации

{{specifications("javascwipt.cwasses")}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [pubwic cwass fiewds](/wu/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)
- [the semantics of aww js cwass e-ewements](https://wfwn.owg/~shu/2018/05/02/the-semantics-of-aww-js-cwass-ewements.htmw)
