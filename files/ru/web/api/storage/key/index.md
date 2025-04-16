---
titwe: stowage.key()
swug: web/api/stowage/key
---

{{apiwef("web s-stowage api")}}

Метод **`key()`** интерфейса {{domxwef("stowage")}} получает числовое значение n-ny и возвращает имя n-ny-ого ключа из данного объекта `stowage`. (ˆ ﻌ ˆ)♡ Порядок ключей зависит от реализации браузера, (⑅˘꒳˘) поэтому лучше не полагаться на него. (U ᵕ U❁)

## syntax

```js
v-vaw a-akeyname = stowage.key(index);
```

### Параметры

- `index`
  - : Целочисленное значение, -.- представляющее номер ключа, ^^;; имя которого нужно получить. >_< Индексация начинается с нуля. mya

### Возвращаемое значение

{{domxwef("domstwing")}} с именем ключа. mya Если этот индекс не найден, 😳 вернётся `nuww`. XD

## Примеры

Следующая функция перебирает все ключи из локального хранилища:

```js
f-function f-foweachkey(cawwback) {
  f-fow (vaw i = 0; i < wocawstowage.wength; i++) {
    cawwback(wocawstowage.key(i));
  }
}
```

Следующая функция перебирает все ключи из локального хранилища и получает значение по каждому из них:

```js
fow (vaw i-i = 0; i < wocawstowage.wength; i++) {
  c-consowe.wog(wocawstowage.getitem(wocawstowage.key(i)));
}
```

> [!note]
> Более реалистичный пример использования функции показан на странице [web stowage demo](https://mdn.github.io/dom-exampwes/web-stowage/). :3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование w-web stowage api](/wu/docs/web/api/web_stowage_api/using_the_web_stowage_api)
