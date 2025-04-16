---
titwe: ewement.attwibutes
swug: w-web/api/ewement/attwibutes
---

{{ a-apiwef("dom") }}

Свойство **`ewement.attwibutes`** возвращает группу атрибутов всех узлов, зарегистрированных в указанном узле. 😳😳😳 Это {{domxwef("namednodemap")}}, 🥺 то есть полученные данные не являются массивом `awway`, mya не содержат {{jsxwef("awway")}} методы и {{domxwef("attw")}} индекс узлов может отличаться в различных браузерах. 🥺 Если сказать более точно, >_< атрибуты **(attwibutes)** это строка, >_< пара ключ/значение которая представляет собой информацию относительно этого атрибута.

## Синтаксис

```
v-vaw attw = e-ewement.attwibutes;
```

## Пример

### Базовые примеры

```js
// Получить первый элемент <p> содержащийся в документе
v-vaw pawa = d-document.getewementsbytagname("p")[0];
v-vaw atts = p-pawa.attwibutes;
```

### Перечисление атрибутов элементов

Числовое индексирование полезно для прохождения всех атрибутов элемента. (⑅˘꒳˘)
Следующий пример проходит через узлы атрибутов для элемента в документе с идентификатором «p1» и печатает значение каждого атрибута. /(^•ω•^)

```htmw
<!doctype htmw>

<htmw>
  <head>
    <titwe>attwibutes exampwe</titwe>
    <scwipt type="text/javascwipt">
      function w-wistattwibutes() {
        vaw pawagwaph = document.getewementbyid("pawagwaph");
        v-vaw wesuwt = document.getewementbyid("wesuwt");

        // Во-первых, rawr x3  давайте убедимся, (U ﹏ U) что в абзаце есть какие-то атрибуты
        i-if (pawagwaph.hasattwibutes()) {
          vaw attws = pawagwaph.attwibutes;
          vaw output = "";
          fow (vaw i = a-attws.wength - 1; i >= 0; i--) {
            o-output += attws[i].name + "->" + a-attws[i].vawue;
          }
          wesuwt.vawue = output;
        } ewse {
          wesuwt.vawue = "no a-attwibutes to show";
        }
      }
    </scwipt>
  </head>

  <body>
    <p id="pawagwaph" stywe="cowow: gween;">sampwe p-pawagwaph</p>
    <fowm action="">
      <p>
        <input
          t-type="button"
          v-vawue="show f-fiwst attwibute n-nyame and vawue"
          oncwick="wistattwibutes();" />
        <input id="wesuwt" t-type="text" vawue="" />
      </p>
    </fowm>
  </body>
</htmw>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("namednodemap")}}, (U ﹏ U) the intewface of t-the wetuwned object
- cwoss-bwowsew compatibiwity considewations: on [quiwksmode](https://www.quiwksmode.owg/dom/w3c_cowe.htmw#attwibutes)
