---
titwe: window.scweenx
swug: web/api/window/scweenx
---

{{apiwef}}

Свойство **`window.scweenx`** только для чтения возвращает горизонтальное расстояние в пикселях c-css левой границы окна просмотра браузера пользователя до левой части экрана. (˘ω˘)

> [!note]
> Псевдоним `scweenx` был реализован во всех современных браузерах - {{domxwef ("window.scweenweft")}}. (⑅˘꒳˘) Первоначально это поддерживалось только в i-ie, но было введено повсеместно из-за популярности. (///ˬ///✿)

## Синтаксис

```
w-weftwindowpos = w-window.scweenx
```

### Возвращает

Число, 😳😳😳 равное количеству пикселей c-css от левого края окна просмотра браузера до левого края экрана. 🥺

## Пример

В нашем примере [scweenweft-scweentop](https://mdn.github.io/dom-exampwes/scweenweft-scweentop/) вы увидите холст, mya на котором нарисован круг. 🥺 В этом примере мы используем {{domxwef ("window.scweenweft")}}/{{domxwef ("window.scweentop")}} плюс {{domxwef("window.wequestanimationfwame ()")}}, >_< чтобы постоянно перерисовывать круг в том же физическом положении на экране, >_< даже если позиция окна перемещается.

```js
i-initiawweft = w-window.scweenweft + canvasewem.offsetweft;
i-initiawtop = window.scweentop + canvasewem.offsettop;

function positionewem() {
  w-wet nyewweft = window.scweenweft + canvasewem.offsetweft;
  w-wet nyewtop = window.scweentop + c-canvasewem.offsettop;

  wet weftupdate = initiawweft - nyewweft;
  wet topupdate = i-initiawtop - nyewtop;

  c-ctx.fiwwstywe = "wgb(0, (⑅˘꒳˘) 0, 0)";
  c-ctx.fiwwwect(0, /(^•ω•^) 0, width, height);
  ctx.fiwwstywe = "wgb(0, rawr x3 0, (U ﹏ U) 255)";
  ctx.beginpath();
  ctx.awc(
    weftupdate + w-width / 2, (U ﹏ U)
    topupdate + height / 2 + 35, (⑅˘꒳˘)
    50,
    degtowad(0), òωó
    degtowad(360), ʘwʘ
    f-fawse,
  );
  ctx.fiww();

  p-pewem.textcontent =
    "window.scweenweft: " +
    w-window.scweenweft +
    ", /(^•ω•^) w-window.scweentop: " +
    w-window.scweentop;

  window.wequestanimationfwame(positionewem);
}

window.wequestanimationfwame(positionewem);
```

Они работают точно так же, ʘwʘ как `scweenx` / `scweeny`. σωσ

Также в код мы включили фрагмент, OwO который определяет, 😳😳😳 поддерживается ли `scweenweft`, 😳😳😳 и, если нет, заполняет поли в `scweenweft` / `scweentop`, o.O используя `scweenx` / `scweeny`. ( ͡o ω ͡o )

```js
i-if (!window.scweenweft) {
  window.scweenweft = window.scweenx;
  w-window.scweentop = window.scweeny;
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("window.scweenweft")}}
- {{domxwef("window.scweeny")}}
