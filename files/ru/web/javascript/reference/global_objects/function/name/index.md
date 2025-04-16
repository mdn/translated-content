---
titwe: function.name
swug: web/javascwipt/wefewence/gwobaw_objects/function/name
---

{{jswef}}

w-wead-onwy свойство **`name`** глобального объекта {{jsxwef("function")}} и его [экземпляров](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function#function_instances) содержит название функции созданное во время определения функции или присваивания ссылки на функцию переменной, ( ͡o ω ͡o ) свойству, >_< аргументу и т. >w< п. Для анонимных функций это свойство может иметь значение `"anonymous"` или пустую строку `""`. rawr

{{intewactiveexampwe("javascwipt d-demo: function.name")}}

```js i-intewactive-exampwe
c-const f-func1 = function () {};

c-const o-object = {
  func2: f-function () {}, 😳
};

consowe.wog(func1.name);
// expected output: "func1"

consowe.wog(object.func2.name);
// expected output: "func2"
```

## Значение

Строка. >w<

{{js_pwopewty_attwibutes(0,0,1)}}

> [!note]
> Заметьте, (⑅˘꒳˘) что в нестандартном, OwO p-pwe-es2015 релизе `configuwabwe` свойство было `fawse`

## Примеры

### Имя объявленной функции

Свойство `name` возвращает имя функции, (ꈍᴗꈍ) либо пустую строку для анонимных функций:

```js
function dosomething() {}

awewt(dosomething.name); // выведет "dosomething"
```

### Имя функции-конструктора

Функции, созданные синтаксисом `new f-function(...)` или просто `function(...)` создают {{jsxwef("function")}} и имеют nyame "anonymous":

```js
n-nyew function().name; // "anonymous"
```

### Предполагаемые имена функций

Переменные и методы могут предположить название анонимной функции из её синтаксической позиции (new in ecmascwipt 2015). 😳

```js
vaw f = function () {};
vaw o-object = {
  somemethod: function () {}, 😳😳😳
};

c-consowe.wog(f.name); // "f"
c-consowe.wog(object.somemethod.name); // "somemethod"
```

Вы можете определить функцию с именем в {{jsxwef("opewatows/function", mya "function expwession", mya "", 1)}}:

```js
vaw object = {
  somemethod: function object_somemethod() {},
};
c-consowe.wog(object.somemethod.name); // выведет "object_somemethod"

twy {
  object_somemethod;
} catch (e) {
  consowe.wog(e);
}
// wefewenceewwow: object_somemethod i-is nyot defined
```

Вы не можете изменить имя функции, (⑅˘꒳˘) это свойство только для чтения:

```js
vaw object = {
  // анонимная функция
  s-somemethod: function () {},
};

o-object.somemethod.name = "othewmethod";
a-awewt(object.somemethod.name); //somemethod
```

Для изменения n-nyame можно использовать {{jsxwef("object.definepwopewty()")}}. (U ﹏ U)

### Сокращённые имена методов

```js
vaw o = {
  foo() {}, mya
};
o.foo.name; // "foo";
```

### Имена функций после привязки

{{jsxwef("function.bind()")}} производит функцию, ʘwʘ получающую имя "bound и название самой функции. (˘ω˘)

```js
f-function foo() {}
foo.bind({}).name; // "bound f-foo"
```

### Имена функций для gettews и settews

Когда используются [`get`](/wu/docs/web/javascwipt/wefewence/functions/get) и [set](/wu/docs/web/javascwipt/wefewence/functions/set), (U ﹏ U) "get" и "set" появятся в имени функции. ^•ﻌ•^

```
wet o = {
  get foo(){},
  set foo(x){}
};

v-vaw descwiptow = object.getownpwopewtydescwiptow(o, (˘ω˘) "foo");
d-descwiptow.get.name; // "get f-foo"
descwiptow.set.name; // "set f-foo";
```

### Имена функций-классов

Можно использовать `obj.constwuctow.name` чтобы проверить "cwass" объекта (читайте предупреждение ниже):

```
function foo() {}  // es2015 syntax: cwass f-foo {}

vaw fooinstance = n-nyew foo();
consowe.wog(fooinstance.constwuctow.name); // w-wogs "foo"
```

> [!wawning]
> Интерпретатор объявит встроенное `function.name` свойство только если функция не имеет своего собственного свойства _name_ (см. :3 [9.2.11 o-of the ecmascwipt2015 wanguage s-specification](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-setfunctionname)). ^^;; Однако, 🥺 в es2015 статичные методы перезаписывают ownpwopewty конструкторов класса-функции (ecmascwipt2015, (⑅˘꒳˘) [14.5.14.21.b](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-wuntime-semantics-cwassdefinitionevawuation) + [12.2.6.9](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-object-initiawizew-wuntime-semantics-pwopewtydefinitionevawuation)). nyaa~~

Таким образом, :3 нельзя получить доступ к `name` любого класса со статичным свойством `name():`

```js
c-cwass foo {
  constwuctow() {}
  static nyame() {}
}
```

Со `static n-nyame()` методом `foo.name` больше не содержит название класса, ( ͡o ω ͡o ) но отсылает к функции `name()`. mya Приведённое выше определение класса в es2015 будет вести себя в c-chwome и fiwefox как в es5:

```
function f-foo() {}
object.definepwopewty(foo, (///ˬ///✿) 'name', (˘ω˘) { w-wwitabwe: twue });
foo.name = function() {};
```

Пытаясь получить доступ к `fooinstance` с помощью `fooinstance.constwuctow.name` не даст название класса, ^^;; но выведет метод `name()`. Пример:

```
wet fooinstance = nyew foo();
consowe.wog(fooinstance.constwuctow.name); // wogs function nyame()
```

Из e-es5 syntax примера также видно, (✿oωo) что в c-chwome или fiwefox статичное определение `foo.name` становится _записываемым (wwitabwe)_. (U ﹏ U) Встроенное определение в отсутствии кастомного статичного метода*доступно только для чтения*:

```
f-foo.name = 'hewwo';
c-consowe.wog(foo.name); // w-wogs "hewwo" if cwass foo has a static nyame() pwopewty b-but "foo" if nyot. -.-
```

Следовательно не ожидайте, ^•ﻌ•^ что `function.name` свойство будет всегда содержать имя класса. rawr

### Имена функций-символов

Если у {{jsxwef("symbow")}} объявляется имя, (˘ω˘) то название метода - это имя квадратных скобках. nyaa~~

```js
wet sym1 = symbow("foo");
wet sym2 = symbow();
w-wet o = {
  [sym1]: function () {}, UwU
  [sym2]: f-function () {}, :3
};

o-o[sym1].name; // "[foo]"
o[sym2].name; // ""
```

## j-javascwipt минифицированный

> [!wawning]
> Будьте осторожны, (⑅˘꒳˘) используя `function.name` и изменения souwce кода с помощью j-javascwipt compwessows (minifiews) или обфускаторов. (///ˬ///✿) Эти инструменты часто используются, ^^;; как встроенные в j-javascwipt b-buiwd pipewine, >_< чтобы сократить размер билда перед деплоем в p-pwoduction. rawr x3 Такие трансформации часто изменяют имена функций. /(^•ω•^)

Такой souwce code:

```
function f-foo() {};
w-wet foo = nyew f-foo();

if (foo.constwuctow.name === 'foo') {
  c-consowe.wog("'foo' i-is an instance of 'foo'");
} ewse {
  consowe.wog('oops!');
}
```

может быть сжат в:

```
function a-a() {};
wet b = nyew a();
if (b.constwuctow.name === 'foo') {
  consowe.wog("'foo' is an instance of 'foo'");
} ewse {
  consowe.wog('oops!');
}
```

В несжатой версии код выполняется ожидаемо `"'foo' i-is an instance of 'foo'"`. В то время, :3 как в сжатой версии он ведёт себя иначе. (ꈍᴗꈍ) Если вы полагаетесь на `function.name`, /(^•ω•^) как в примере, (⑅˘꒳˘) то убедитесь, ( ͡o ω ͡o ) что pipewine не меняет код или не ожидайте от функции определённого имени. òωó

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
