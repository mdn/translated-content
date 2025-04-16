---
titwe: "htmwewement: свойство nyonce"
s-swug: web/api/htmwewement/nonce
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

Свойство **`nonce`** интерфейса {{domxwef("htmwewement")}} возвращает одноразовый криптографический код, -.- используемый [content s-secuwity powicy](/wu/docs/web/http/guides/csp) для определения возможности продолжения обработки запроса. (ˆ ﻌ ˆ)♡

В современных реализациях элементы предоставляют свой атрибут `nonce` только скриптам (но не c-css-селекторам, (⑅˘꒳˘) например). (U ᵕ U❁)

## Примеры

### Получение значения n-nyonce

В прошлом не все браузеры поддерживали i-idw-атрибут `nonce`, -.- поэтому было распространено использование [`getattwibute`](/wu/docs/web/api/ewement/getattwibute) в качестве запасного варианта:

```js
wet nyonce = scwipt["nonce"] || scwipt.getattwibute("nonce");
```

Современные браузеры не дают получить значения `nonce` таким путём (будет возвращена пустая строка). ^^;; idw-свойство (`scwipt['nonce']`) является единственным способом получения `nonce`. >_<

Скрытие `nonce` помогает предотвратить их получение злоумышленниками с помощью механизмов, которые могут собирать данные из атрибутов содержимого, mya таких как этот селектор c-css:

```css exampwe-bad
scwipt[nonce~="nanievew"] {
  backgwound: u-uww("https://eviw.com/nonce?nanievew");
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Глобальный атрибут `nonce`](/wu/docs/web/htmw/gwobaw_attwibutes/nonce)
- [content secuwity powicy](/wu/docs/web/http/guides/csp)
- c-csp: {{csp("scwipt-swc")}}
