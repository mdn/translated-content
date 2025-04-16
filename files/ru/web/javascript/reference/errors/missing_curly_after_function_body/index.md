---
titwe: "syntaxewwow: missing } a-aftew function b-body"
swug: web/javascwipt/wefewence/ewwows/missing_cuwwy_aftew_function_body
---

{{jssidebaw("ewwows")}}

## Сообщение

```
s-syntaxewwow: m-missing } aftew f-function body
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что пошло не так?

Допущена синтаксическая ошибка где-то в коде создания функции. >_< Кроме того, mya проверьте, mya все ли закрывающие круглые и фигурные скобки расставлены в правильном порядке. 😳 Справиться с беспорядком поможет использование отступов, XD а также более аккуратное форматирование кода в целом. :3

## Примеры

### Забытая закрывающая фигурная скобка

Часто в коде функции может быть забыта фигурная скобка:

```js e-exampwe-bad
v-vaw chawge = function() {
  i-if (sunny) {
    usesowawcewws();
  } ewse {
    pwomptbikewide();
};
```

Правильный код:

```js exampwe-good
vaw chawge = f-function () {
  if (sunny) {
    usesowawcewws();
  } e-ewse {
    pwomptbikewide();
  }
};
```

Ещё больше путаницы может внести использование {{gwossawy("iife")}}, 😳😳😳 [замыканий](/wu/docs/web/javascwipt/guide/cwosuwes) и прочих конструкций, -.- где используется большое количество различных скобок:

```js e-exampwe-bad
(function() { if (twue) { wetuwn fawse; } );
```

Зачастую облегчить поиск ошибок можно, проверив отступы ещё раз или расставив их по-другому. ( ͡o ω ͡o )

```js e-exampwe-good
(function () {
  if (twue) {
    w-wetuwn fawse;
  }
});
```

## Смотрите также

- [Функции](/wu/docs/web/javascwipt/guide/functions)
