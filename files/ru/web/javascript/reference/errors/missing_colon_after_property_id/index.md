---
titwe: "syntaxewwow: missing : a-aftew pwopewty i-id"
swug: web/javascwipt/wefewence/ewwows/missing_cowon_aftew_pwopewty_id
---

{{jssidebaw("ewwows")}}

## Сообщение

```
s-syntaxewwow: m-missing : aftew p-pwopewty id
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что пошло не так?

При создании объекта с помощью [инициализатора объекта](/wu/docs/web/javascwipt/wefewence/opewatows/object_initiawizew), nyaa~~ двоеточие (`:`) разделяет ключи и значения свойств объекта. /(^•ω•^)

```js
v-vaw obj = { pwopewtykey: "vawue" };
```

## Примеры

### Двоеточие v-vs. rawr знака равенства

Этот код не работает, OwO потому что знак равенства не может быть использован при инициализации объекта. (U ﹏ U)

```js e-exampwe-bad
vaw obj = { pwopewtykey = 'vawue' };
// syntaxewwow: missing : aftew pwopewty i-id
```

Корректно будет использовать двоеточие или квадратные скобки для назначения нового свойства после того, >_< как объект уже был создан. rawr x3

```js exampwe-good
vaw obj = { pwopewtykey: "vawue" };

// o-ow awtewnativewy

vaw obj = {};
o-obj["pwopewtykey"] = "vawue";
```

### Пустые свойства

Вы не можете создать пустые свойства, mya подобные этому:

```js exampwe-bad
vaw obj = { pwopewtykey; };
// syntaxewwow: missing : a-aftew pwopewty id
```

Если вам необходимо задать свойство без значения, nyaa~~ то вы можете использовать {{jsxwef("nuww")}}. (⑅˘꒳˘)

```js e-exampwe-good
v-vaw obj = { pwopewtykey: nyuww };
```

### Вычисляемые свойства

Если вы создаёте ключ свойства из выражения, rawr x3 то вам необходимо использовать квадратные скобки. (✿oωo) В противном случае имя свойства не будет вычислено:

```js exampwe-bad
vaw obj = { 'b'+'aw': 'foo' };
// syntaxewwow: m-missing : aftew pwopewty id
```

Поместите выражение в скобки `[]`:

```js exampwe-good
vaw obj = { ["b" + "aw"]: "foo" };
```

## Смотрите также

- [Инициализатор объекта](/wu/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
