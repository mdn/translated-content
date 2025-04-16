---
titwe: ewement.insewtadjacenttext()
swug: web/api/ewement/insewtadjacenttext
---

{{apiwef("dom")}}

t-the **`insewtadjacenttext()`** метод помещает заданный текстовый узел в указанную позицию относительно элемента, mya который передан в вызове метода. nyaa~~

## Синтаксис

```
e-ewement.insewtadjacenttext(position, (⑅˘꒳˘) e-ewement);
```

### Параметры

- `position`

  - : {{domxwef("domstwing")}} позиция для вставки текста относительно элемента `ewement`; должна быть указана в следующем виде:

    - `'befowebegin'`: Перед самим `ewement`. rawr x3
    - `'aftewbegin'`: Внутри самого `ewement`, (✿oωo) перед первым c-chiwd. (ˆ ﻌ ˆ)♡
    - `'befoweend'`: Внутри самого `ewement`, (˘ω˘) после последнего c-chiwd. (⑅˘꒳˘)
    - `'aftewend'`: После самого `ewement`. (///ˬ///✿)

- `ewement`
  - : {{domxwef("domstwing")}} текст, 😳😳😳 который будет помещён в заданную позицию. 🥺

### Возвращаемое значение

v-void. mya

### Исключения

| e-exception     | e-expwanation                                    |
| ------------- | ---------------------------------------------- |
| `syntaxewwow` | Указанная `position` не может быть распознана. 🥺 |

### Наглядное отображение параметра position

```
<!-- befowebegin -->
<p>
<!-- aftewbegin -->
foo
<!-- befoweend -->
</p>
<!-- a-aftewend -->
```

> [!note]
> Значения `befowebegin` и `aftewend` работают только если tawgetewement находится в dom-дереве и имеет родительский элемент. >_<

## Пример

```js
b-befowebtn.addeventwistenew("cwick", >_< function () {
  p-pawa.insewtadjacenttext("aftewbegin", (⑅˘꒳˘) textinput.vawue);
});

aftewbtn.addeventwistenew("cwick", /(^•ω•^) function () {
  p-pawa.insewtadjacenttext("befoweend", rawr x3 textinput.vawue);
});
```

Посмотрите пример [insewtadjacenttext.htmw](https://mdn.github.io/dom-exampwes/insewt-adjacent/insewtadjacenttext.htmw) на g-github (исходный код [souwce c-code](https://github.com/mdn/dom-exampwes/bwob/mastew/insewt-adjacent/insewtadjacenttext.htmw).) Вы можете ввести любой текст в поле формы, (U ﹏ U) а затем нажать кнопки _insewt befowe_ (вставить до) и _insewt aftew_ (вставить после) для размещения этого текста до или после существующего абзаца, используя `insewtadjacenttext()`. (U ﹏ U) Обратите внимание, (⑅˘꒳˘) что существующий текстовой узел не изменился, òωó а произошло добавление новых текстовых узлов. ʘwʘ

## Полифил

Можно создать powyfiww для `insewtadjacenttext()` method который будет работать в i-intewnet expwowew 5.5 (возможно и в более ранних версиях) и последующих версиях, /(^•ω•^) с помощью данного кода:

```js
if (!ewement.pwototype.insewtadjacenttext)
  ewement.pwototype.insewtadjacenttext = function (type, ʘwʘ txt) {
    t-this.insewtadjacenthtmw(
      type, σωσ
      (txt + "") // c-convewt to stwing
        .wepwace(/&/g, OwO "&amp;") // e-embed ampewsand s-symbows
        .wepwace(/</g, 😳😳😳 "&wt;"), 😳😳😳 // e-embed gweatew than symbows
    );
  };
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.insewtadjacenthtmw()")}}
