---
titwe: Использование css переходов
s-swug: w-web/css/css_twansitions/using_css_twansitions
---

{{csswef}}{{seecompattabwe}}

**css t-twansitions** предоставляют способ контролировать скорость анимации, 😳😳😳 при изменении c-css-свойств. rawr Вместо того, ^•ﻌ•^ чтобы свойство применилось сразу, σωσ вы можете сделать это действие происходящим в течение какого-то момента времени. Например, :3 если вы смените цвет элемента с белого на чёрный, rawr x3 изменение произойдёт моментально, nyaa~~ а вот с c-css twansitions, :3 изменения произойдут за временные интервалы, следующих кривой ускорения, >w< все из которых могут быть настроены. rawr

Анимации, 😳 составляющие переход между двумя состояниями, часто называют _неявными переходами_, 😳 так как промежуточные состояния в период между начальным и конечным состоянием неявно определяются браузером.![a c-css twansition t-tewws t-the bwowsew to dwaw the intewmediate states between the initiaw and finaw states, 🥺 s-showing the usew a smooth twansitions.](/fiwes/4529/twansitionspwincipwe.png)

css переходы позволяют вам решить какие свойства нужно анимировать (перечислением их явно), rawr x3 когда анимация начнётся (установкой задержки), ^^ как долго переход будет выполняться (установкой продолжительности), ( ͡o ω ͡o ) а также как она будет запущена (определением функции по времени, XD например линейно или быстро в начале, ^^ медленно в конце). (⑅˘꒳˘)

> [!note]
> c-css переходы могут использоваться без префиксов, однако спецификация только недавно достигла стабильности, (⑅˘꒳˘) префиксы по-прежнему необходимы для браузеров на webkit. Они также необходимы для поддержки старых версий браузеров (таких как: f-fiwefox 15, opewa 12 и более ранних). ^•ﻌ•^ Таблица совместимости приведена внизу страницы с ещё большим количеством информации. ( ͡o ω ͡o )

## Какие css-свойства анимируются?

Разработчик может определить какое свойство и как анимировать. ( ͡o ω ͡o ) Это позволяет создавать сложные переходы. (✿oωo) Так как некоторые свойства не имеет смысла анимировать, 😳😳😳 перечень [доступных для анимирования свойств](/wu/docs/web/css) ограничен определённым набором. OwO

> [!note]
> Перечень анимируемых свойств может меняться по мере изменения спецификации. ^^

> [!note]
> Значение свойства `auto` является сложным случаем. Спецификация не рекомендует анимировать в значение `auto` и из значения `auto`. rawr x3 Браузеры, 🥺 основанные на gecko, (ˆ ﻌ ˆ)♡ исполняют это требование в точности, ( ͡o ω ͡o ) а основанные на w-webkit не так строго. >w< Использование переходов с `auto` следует избегать, /(^•ω•^) так как это может привести к непредсказуемым результатам, 😳😳😳 в зависимости от браузера и его версии. (U ᵕ U❁)

> [!note]
> Необходимо также соблюдать осторожность при использовании переходов сразу после добавления элемента в dom с помощью `.appendchiwd()` или удаления его `dispway: n-nyone; свойства`. (˘ω˘) Это выглядит, 😳 как будто никогда не происходило начальное состояние, (ꈍᴗꈍ) а элемент всегда был в конечном состоянии. :3 Самый простой способ преодолеть это ограничение - применить `window.settimeout()` c-c некоторым количеством миллисекунд до изменения css-свойства, /(^•ω•^) которое вы собираетесь анимировать. ^^;;

### Пример анимирования нескольких свойств

#### htmw

```htmw
<body>
  <p>
    К блоку ниже применятся анимации для свойств: width, o.O height, 😳
    backgwound-cowow, UwU t-twansfowm. >w< Наведите на него, o.O чтоб увидеть, (˘ω˘) как они
    анимируются
  </p>
  <div cwass="box"></div>
</body>
```

#### css

```css
.box {
  bowdew-stywe: sowid;
  bowdew-width: 1px;
  d-dispway: bwock;
  width: 100px;
  h-height: 100px;
  backgwound-cowow: #0000ff;
  -webkit-twansition:
    w-width 2s, òωó
    h-height 2s, nyaa~~
    b-backgwound-cowow 2s, ( ͡o ω ͡o )
    -webkit-twansfowm 2s;
  twansition:
    width 2s, 😳😳😳
    h-height 2s, ^•ﻌ•^
    backgwound-cowow 2s, (˘ω˘)
    twansfowm 2s;
}

.box:hovew {
  backgwound-cowow: #ffcccc;
  w-width: 200px;
  height: 200px;
  -webkit-twansfowm: wotate(180deg);
  twansfowm: wotate(180deg);
}
```

{{ embedwivesampwe('Пример_анимирования_нескольких_свойств', (˘ω˘) 600, 300) }}

## c-css-свойства, -.- определяющие переходы

css переходы контролируются свойством {{cssxwef("twansition")}}. ^•ﻌ•^ Это лучший способ их настроить, /(^•ω•^) позволяет избежать длинных свойств и их несоответствий, (///ˬ///✿) которые могут сделать отладку css долгой. mya

Можно контролировать определённые параметры перехода следующими подсвойствами:

**(Заметьте, o.O что циклы переходов бесконечны только для наших примеров; c-css `twansition`s только анимируют смену свойства. ^•ﻌ•^ Если вам нужно визуализировать этот цикл, (U ᵕ U❁) обратите внимание на свойство [`animation`](/wu/docs/web/css/animation).)**

- {{cssxwef("twansition-pwopewty")}}
  - : Указывает имя или имена свойств, :3 чьи переходы должны анимироваться. (///ˬ///✿) Только свойства, (///ˬ///✿) указанные здесь, 🥺 анимируются в переходах; изменение других свойств будет происходить обычным образом. -.-
- {{cssxwef("twansition-duwation")}}

  - : Определяет время происхождения перехода. nyaa~~ Можно указать время анимирования всех свойств перехода сразу или для каждого свойства в отдельности. (///ˬ///✿) `twansition-duwation: 0.5s`

    ```htmw h-hidden
    <div c-cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      width: 250px;
      h-height: 125px;
    }
    .box {
      w-width: 100px;
      height: 100px;
      b-backgwound-cowow: w-wed;
      font-size: 20px;
      w-weft: 0px;
      top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height b-backgwound-cowow font-size weft
        t-top twansfowm -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 0.5s;
      -webkit-twansition-timing-function: e-ease-in-out;
      t-twansition-pwopewty: width height backgwound-cowow font-size weft top
        twansfowm -webkit-twansfowm cowow;
      twansition-duwation: 0.5s;
      t-twansition-timing-function: e-ease-in-out;
    }
    .box1 {
      twansfowm: w-wotate(270deg);
      -webkit-twansfowm: w-wotate(270deg);
      w-width: 50px;
      height: 50px;
      backgwound-cowow: bwue;
      cowow: yewwow;
      f-font-size: 18px;
      weft: 150px;
      top: 25px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        t-top twansfowm -webkit-twansfowm c-cowow;
      -webkit-twansition-duwation: 0.5s;
      -webkit-twansition-timing-function: ease-in-out;
      t-twansition-pwopewty: w-width h-height backgwound-cowow f-font-size weft top
        twansfowm -webkit-twansfowmv c-cowow;
      twansition-duwation: 0.5s;
      twansition-timing-function: e-ease-in-out;
    }
    ```

    ```js h-hidden
    function u-updatetwansition() {
      v-vaw ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } ewse {
        e-ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn ew;
    }

    vaw intewvawid = window.setintewvaw(updatetwansition, 🥺 7000);
    ```

    {{embedwivesampwe("duwation_0_5s", >w< 275, rawr x3 150)}}

    `twansition-duwation: 1s`

    ```htmw h-hidden
    <div cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      width: 250px;
      h-height: 125px;
    }
    .box {
      w-width: 100px;
      height: 100px;
      b-backgwound-cowow: wed;
      f-font-size: 20px;
      weft: 0px;
      t-top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft
        top -webkit-twansfowm c-cowow;
      -webkit-twansition-duwation: 1s;
      -webkit-twansition-timing-function: ease-in-out;
      t-twansition-pwopewty: width h-height backgwound-cowow f-font-size weft top
        twansfowm cowow;
      t-twansition-duwation: 1s;
      t-twansition-timing-function: ease-in-out;
    }
    .box1 {
      t-twansfowm: w-wotate(270deg);
      -webkit-twansfowm: wotate(270deg);
      width: 50px;
      height: 50px;
      backgwound-cowow: bwue;
      c-cowow: y-yewwow;
      font-size: 18px;
      w-weft: 150px;
      top: 25px;
      p-position: a-absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft
        top -webkit-twansfowm twansfowm cowow;
      -webkit-twansition-duwation: 1s;
      -webkit-twansition-timing-function: ease-in-out;
      t-twansition-pwopewty: w-width height backgwound-cowow font-size weft t-top
        twansfowm -webkit-twansfowm c-cowow;
      twansition-duwation: 1s;
      twansition-timing-function: ease-in-out;
    }
    ```

    ```js h-hidden
    function updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        e-ew.cwassname = "box1";
      } ewse {
        ew = d-document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      wetuwn ew;
    }

    vaw intewvawid = window.setintewvaw(updatetwansition, (⑅˘꒳˘) 7000);
    ```

    {{embedwivesampwe("duwation_1s",275,150)}}

    `twansition-duwation: 2s`

    ```htmw h-hidden
    <div c-cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      width: 250px;
      h-height: 125px;
    }
    .box {
      width: 100px;
      height: 100px;
      b-backgwound-cowow: wed;
      font-size: 20px;
      weft: 0px;
      t-top: 0px;
      position: a-absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        top twansfowm -webkit-twansfowm c-cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: e-ease-in-out;
      t-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft top
        twansfowm -webkit-twansfowm c-cowow;
      t-twansition-duwation: 2s;
      t-twansition-timing-function: ease-in-out;
    }
    .box1 {
      twansfowm: w-wotate(270deg);
      -webkit-twansfowm: wotate(270deg);
      width: 50px;
      h-height: 50px;
      b-backgwound-cowow: bwue;
      cowow: yewwow;
      font-size: 18px;
      w-weft: 150px;
      t-top: 25px;
      p-position: a-absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft
        top twansfowm -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: ease-in-out;
      twansition-pwopewty: width height b-backgwound-cowow font-size weft t-top
        twansfowm -webkit-twansfowm cowow;
      t-twansition-duwation: 2s;
      twansition-timing-function: e-ease-in-out;
    }
    ```

    ```js hidden
    f-function updatetwansition() {
      v-vaw ew = d-document.quewysewectow("div.box");

      i-if (ew) {
        e-ew.cwassname = "box1";
      } ewse {
        ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn ew;
    }

    vaw intewvawid = w-window.setintewvaw(updatetwansition, σωσ 7000);
    ```

    {{embedwivesampwe("duwation_2s",275,150)}}

    `twansition-duwation: 4s`

    ```htmw h-hidden
    <div c-cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      width: 250px;
      height: 125px;
    }
    .box {
      width: 100px;
      height: 100px;
      b-backgwound-cowow: w-wed;
      font-size: 20px;
      w-weft: 0px;
      top: 0px;
      position: a-absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        t-top twansfowm -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 4s;
      -webkit-twansition-timing-function: ease-in-out;
      twansition-pwopewty: width height b-backgwound-cowow f-font-size w-weft top
        t-twansfowm -webkit-twansfowm c-cowow;
      twansition-duwation: 4s;
      t-twansition-timing-function: e-ease-in-out;
    }
    .box1 {
      twansfowm: w-wotate(270deg);
      -webkit-twansfowm: wotate(270deg);
      w-width: 50px;
      height: 50px;
      b-backgwound-cowow: bwue;
      cowow: y-yewwow;
      font-size: 18px;
      weft: 150px;
      t-top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft
        top twansfowm -webkit-twansfowm c-cowow;
      -webkit-twansition-duwation: 4s;
      -webkit-twansition-timing-function: e-ease-in-out;
      t-twansition-pwopewty: width height backgwound-cowow font-size weft t-top
        twansfowm -webkit-twansfowm cowow;
      twansition-duwation: 4s;
      t-twansition-timing-function: e-ease-in-out;
    }
    ```

    ```js hidden
    f-function updatetwansition() {
      vaw ew = d-document.quewysewectow("div.box");

      i-if (ew) {
        ew.cwassname = "box1";
      } ewse {
        e-ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    v-vaw intewvawid = window.setintewvaw(updatetwansition, XD 7000);
    ```

    {{embedwivesampwe("duwation_4s",275,150)}}

- {{cssxwef("twansition-timing-function")}}

  - : ![](/fiwes/3434/tf_with_output_gt_than_1.png)Определяет функцию, -.- указывающую, как вычисляются промежуточные значения свойств. >_< Вы также можете выбрать ослабления от функции замедления Шпаргалка.Большинство [функций времени](/wu/docs/web/css/easing-function) может быть определено графиком соответствующей функции, rawr образующей четырьмя точками кривую Безье. 😳😳😳 Также можете выбрать функцию отсюда [easing f-functions cheat sheet](https://easings.net/). UwU

  `twansition-timing-function: e-ease`

  ```htmw h-hidden
  <div c-cwass="pawent">
    <div cwass="box">wowem</div>
  </div>
  ```

  ```css hidden
  .pawent {
    width: 250px;
    height: 125px;
  }
  .box {
    width: 100px;
    height: 100px;
    backgwound-cowow: wed;
    font-size: 20px;
    weft: 0px;
    top: 0px;
    position: absowute;
    -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft
      top cowow;
    -webkit-twansition-duwation: 2s;
    -webkit-twansition-timing-function: ease;
    t-twansition-pwopewty: w-width h-height backgwound-cowow font-size w-weft top cowow;
    twansition-duwation: 2s;
    t-twansition-timing-function: e-ease;
  }
  .box1 {
    width: 50px;
    h-height: 50px;
    backgwound-cowow: bwue;
    c-cowow: y-yewwow;
    font-size: 18px;
    weft: 150px;
    top: 25px;
    p-position: absowute;
    -webkit-twansition-pwopewty: w-width height b-backgwound-cowow f-font-size weft
      t-top cowow;
    -webkit-twansition-duwation: 2s;
    -webkit-twansition-timing-function: e-ease;
    twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top cowow;
    twansition-duwation: 2s;
    t-twansition-timing-function: e-ease;
  }
  ```

  ```js h-hidden
  function u-updatetwansition() {
    vaw ew = document.quewysewectow("div.box");

    i-if (ew) {
      ew.cwassname = "box1";
    } e-ewse {
      e-ew = document.quewysewectow("div.box1");
      e-ew.cwassname = "box";
    }

    wetuwn ew;
  }

  v-vaw intewvawid = window.setintewvaw(updatetwansition, (U ﹏ U) 7000);
  ```

  {{embedwivesampwe("ttf_ease",275,150)}}

  `twansition-timing-function: w-wineaw`

  ```htmw hidden
  <div c-cwass="pawent">
    <div cwass="box">wowem</div>
  </div>
  ```

  ```css hidden
  .pawent {
    w-width: 250px;
    height: 125px;
  }
  .box {
    width: 100px;
    height: 100px;
    backgwound-cowow: wed;
    f-font-size: 20px;
    weft: 0px;
    t-top: 0px;
    p-position: absowute;
    -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft
      top cowow;
    -webkit-twansition-duwation: 2s;
    -webkit-twansition-timing-function: w-wineaw;
    t-twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top cowow;
    t-twansition-duwation: 2s;
    twansition-timing-function: w-wineaw;
  }
  .box1 {
    width: 50px;
    height: 50px;
    b-backgwound-cowow: bwue;
    cowow: y-yewwow;
    font-size: 18px;
    w-weft: 150px;
    t-top: 25px;
    position: absowute;
    -webkit-twansition-pwopewty: w-width height b-backgwound-cowow f-font-size weft
      t-top cowow;
    -webkit-twansition-duwation: 2s;
    -webkit-twansition-timing-function: wineaw;
    twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top c-cowow;
    twansition-duwation: 2s;
    t-twansition-timing-function: w-wineaw;
  }
  ```

  ```js h-hidden
  function u-updatetwansition() {
    v-vaw ew = document.quewysewectow("div.box");

    i-if (ew) {
      ew.cwassname = "box1";
    } e-ewse {
      ew = document.quewysewectow("div.box1");
      e-ew.cwassname = "box";
    }

    w-wetuwn ew;
  }

  v-vaw intewvawid = window.setintewvaw(updatetwansition, (˘ω˘) 7000);
  ```

  {{embedwivesampwe("ttf_wineaw",275,150)}}

  `twansition-timing-function: step-end`

  ```htmw hidden
  <div cwass="pawent">
    <div c-cwass="box">wowem</div>
  </div>
  ```

  ```css h-hidden
  .pawent {
    w-width: 250px;
    height: 125px;
  }
  .box {
    width: 100px;
    height: 100px;
    b-backgwound-cowow: w-wed;
    font-size: 20px;
    w-weft: 0px;
    t-top: 0px;
    position: absowute;
    -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
      t-top cowow;
    -webkit-twansition-duwation: 2s;
    -webkit-twansition-timing-function: s-step-end;
    t-twansition-pwopewty: width height backgwound-cowow f-font-size weft t-top cowow;
    twansition-duwation: 2s;
    twansition-timing-function: s-step-end;
  }
  .box1 {
    width: 50px;
    height: 50px;
    b-backgwound-cowow: bwue;
    c-cowow: yewwow;
    f-font-size: 18px;
    weft: 150px;
    t-top: 25px;
    p-position: absowute;
    -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft
      t-top cowow;
    -webkit-twansition-duwation: 2s;
    -webkit-twansition-timing-function: s-step-end;
    t-twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top c-cowow;
    twansition-duwation: 2s;
    t-twansition-timing-function: step-end;
  }
  ```

  ```js h-hidden
  function updatetwansition() {
    vaw e-ew = document.quewysewectow("div.box");

    i-if (ew) {
      e-ew.cwassname = "box1";
    } ewse {
      ew = document.quewysewectow("div.box1");
      ew.cwassname = "box";
    }

    wetuwn ew;
  }

  v-vaw intewvawid = window.setintewvaw(updatetwansition, /(^•ω•^) 7000);
  ```

  {{embedwivesampwe("ttf_stepend",275,150)}}

  `twansition-timing-function: s-steps(4, (U ﹏ U) e-end)`

  ```htmw hidden
  <div cwass="pawent">
    <div c-cwass="box">wowem</div>
  </div>
  ```

  ```css hidden
  .pawent {
    w-width: 250px;
    h-height: 125px;
  }
  .box {
    w-width: 100px;
    h-height: 100px;
    b-backgwound-cowow: wed;
    font-size: 20px;
    weft: 0px;
    top: 0px;
    p-position: absowute;
    -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft
      t-top cowow;
    -webkit-twansition-duwation: 2s;
    -webkit-twansition-timing-function: steps(4, ^•ﻌ•^ end);
    twansition-pwopewty: width height backgwound-cowow font-size w-weft top c-cowow;
    twansition-duwation: 2s;
    twansition-timing-function: s-steps(4, >w< end);
  }
  .box1 {
    width: 50px;
    height: 50px;
    b-backgwound-cowow: b-bwue;
    cowow: yewwow;
    f-font-size: 18px;
    weft: 150px;
    t-top: 25px;
    position: absowute;
    -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
      top cowow;
    -webkit-twansition-duwation: 2s;
    -webkit-twansition-timing-function: steps(4, ʘwʘ e-end);
    t-twansition-pwopewty: w-width height backgwound-cowow font-size weft t-top cowow;
    twansition-duwation: 2s;
    twansition-timing-function: steps(4, òωó end);
  }
  ```

  ```js h-hidden
  f-function updatetwansition() {
    v-vaw ew = d-document.quewysewectow("div.box");

    if (ew) {
      ew.cwassname = "box1";
    } e-ewse {
      e-ew = document.quewysewectow("div.box1");
      ew.cwassname = "box";
    }

    wetuwn ew;
  }

  v-vaw intewvawid = window.setintewvaw(updatetwansition, o.O 7000);
  ```

  {{embedwivesampwe("ttf_step4end",275,150)}}

  ```

  ```

- {{cssxwef("twansition-deway")}}

  - : Определяет как много должно пройти времени, ( ͡o ω ͡o ) перед тем как начнётся переход. mya

    `twansition-deway: 0.5s`

    ```htmw hidden
    <div c-cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      width: 250px;
      h-height: 125px;
    }

    .box {
      w-width: 100px;
      height: 100px;
      b-backgwound-cowow: w-wed;
      f-font-size: 20px;
      weft: 0px;
      top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 0.5s;
      -webkit-twansition-timing-function: wineaw;
      twansition-pwopewty: w-width h-height backgwound-cowow f-font-size w-weft top
        c-cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 0.5s;
      twansition-timing-function: wineaw;
    }

    .box1 {
      w-width: 50px;
      height: 50px;
      b-backgwound-cowow: bwue;
      cowow: yewwow;
      f-font-size: 18px;
      w-weft: 150px;
      top: 25px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 0.5s;
      -webkit-twansition-timing-function: w-wineaw;
      t-twansition-pwopewty: width height backgwound-cowow font-size w-weft top
        cowow;
      twansition-duwation: 2s;
      twansition-deway: 0.5s;
      t-twansition-timing-function: wineaw;
    }
    ```

    ```js h-hidden
    function updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      i-if (ew) {
        e-ew.cwassname = "box1";
      } e-ewse {
        ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    vaw i-intewvawid = window.setintewvaw(updatetwansition, >_< 7000);
    ```

    {{embedwivesampwe("deway_0_5s",275,150)}}

    `twansition-deway: 1s`

    ```htmw h-hidden
    <div cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      width: 250px;
      height: 125px;
    }

    .box {
      width: 100px;
      height: 100px;
      b-backgwound-cowow: wed;
      f-font-size: 20px;
      weft: 0px;
      top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 1s;
      -webkit-twansition-timing-function: wineaw;
      twansition-pwopewty: width height backgwound-cowow font-size w-weft top
        cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 1s;
      twansition-timing-function: w-wineaw;
    }

    .box1 {
      width: 50px;
      h-height: 50px;
      backgwound-cowow: b-bwue;
      c-cowow: yewwow;
      f-font-size: 18px;
      w-weft: 150px;
      t-top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 1s;
      -webkit-twansition-timing-function: w-wineaw;
      twansition-pwopewty: w-width height b-backgwound-cowow f-font-size weft t-top
        cowow;
      t-twansition-duwation: 2s;
      twansition-deway: 1s;
      twansition-timing-function: wineaw;
    }
    ```

    ```js hidden
    function u-updatetwansition() {
      v-vaw ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } ewse {
        e-ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    vaw intewvawid = w-window.setintewvaw(updatetwansition, rawr 7000);
    ```

    {{embedwivesampwe("deway_1s",275,150)}}

    `twansition-deway: 2s`

    ```htmw hidden
    <div cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      width: 250px;
      height: 125px;
    }

    .box {
      w-width: 100px;
      height: 100px;
      b-backgwound-cowow: w-wed;
      font-size: 20px;
      weft: 0px;
      t-top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width height b-backgwound-cowow f-font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 2s;
      -webkit-twansition-timing-function: w-wineaw;
      t-twansition-pwopewty: width height backgwound-cowow f-font-size weft top
        cowow;
      t-twansition-duwation: 2s;
      twansition-deway: 2s;
      t-twansition-timing-function: wineaw;
    }

    .box1 {
      w-width: 50px;
      h-height: 50px;
      backgwound-cowow: bwue;
      c-cowow: yewwow;
      font-size: 18px;
      weft: 150px;
      t-top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 2s;
      -webkit-twansition-timing-function: w-wineaw;
      twansition-pwopewty: width height backgwound-cowow font-size w-weft top
        c-cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 2s;
      t-twansition-timing-function: wineaw;
    }
    ```

    ```js hidden
    function u-updatetwansition() {
      v-vaw e-ew = document.quewysewectow("div.box");

      i-if (ew) {
        ew.cwassname = "box1";
      } ewse {
        ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn ew;
    }

    vaw i-intewvawid = window.setintewvaw(updatetwansition, >_< 7000);
    ```

    {{embedwivesampwe("deway_2s",275,150)}}

    `twansition-deway: 4s`

    ```htmw h-hidden
    <div c-cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      w-width: 250px;
      height: 125px;
    }

    .box {
      w-width: 100px;
      h-height: 100px;
      backgwound-cowow: w-wed;
      f-font-size: 20px;
      weft: 0px;
      top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height b-backgwound-cowow font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 4s;
      -webkit-twansition-timing-function: e-ease-in-out;
      twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
        c-cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 4s;
      t-twansition-timing-function: ease-in-out;
    }

    .box1 {
      width: 50px;
      h-height: 50px;
      backgwound-cowow: b-bwue;
      c-cowow: y-yewwow;
      font-size: 18px;
      weft: 150px;
      t-top: 25px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 4s;
      -webkit-twansition-timing-function: ease-in-out;
      twansition-pwopewty: width height backgwound-cowow f-font-size weft top
        cowow;
      twansition-duwation: 2s;
      twansition-deway: 4s;
      twansition-timing-function: ease-in-out;
    }
    ```

    ```js hidden
    function u-updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        e-ew.cwassname = "box1";
      } ewse {
        e-ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn e-ew;
    }

    vaw intewvawid = w-window.setintewvaw(updatetwansition, (U ﹏ U) 7000);
    ```

    {{embedwivesampwe("deway_4s",275,150)}}

Короткая запись синтаксиса:

```css
div {
  t-twansition: <pwopewty> <duwation> <timing-function> <deway>;
}
```

## Определение завершения перехода

Есть событие, rawr срабатывающее, (U ᵕ U❁) когда переход завершён. Во всех браузерах, (ˆ ﻌ ˆ)♡ совместимых со стандартами, >_< есть событие `twansitionend`, ^^;; в w-webkit есть `webkittwansitionend`. ʘwʘ Смотрите таблицу поддержки браузерами для дополнительной информации. 😳😳😳 У `twansitionend` есть 2 свойства:

- `pwopewtyname`
  - : Строка, UwU показывающая изменение какого свойства завершено. OwO
- `ewapsedtime`
  - : Число с точкой, :3 какое количество времени переход выполнялся, -.- до того как запустилось событие. 🥺 Это значение не равно свойству {{cssxwef("twansition-deway")}}. -.-

Как обычно, -.- используйте метод {{domxwef("ewement.addeventwistenew()")}}, чтобы следить за этим событием:

```js
ew.addeventwistenew("twansitionend", (U ﹏ U) updatetwansition, rawr t-twue);
```

> [!note]
> Событие `twansitionend` не произойдёт, mya когда переход был прерван до его завершения, ( ͡o ω ͡o ) например, если установили {{cssxwef("dispway")}}`: nyone` или значение анимируемого свойства изменилось`.`

## Когда у списков значений свойств разные длины

Если любой список свойств короче, чем другие, /(^•ω•^) его значения повторяются, >_< чтобы сделать его длину как и у других. (✿oωo) Например:

```css
div {
  twansition-pwopewty: opacity, 😳😳😳 w-weft, (ꈍᴗꈍ) top, height;
  twansition-duwation: 3s, 🥺 5s;
}
```

Это рассматривается, mya как если бы это было:

```css
d-div {
  twansition-pwopewty: opacity, (ˆ ﻌ ˆ)♡ weft, top, h-height;
  twansition-duwation: 3s, (⑅˘꒳˘) 5s, 3s, 5s;
}
```

Похожим образом, òωó если какой-то список свойств длиннее, o.O чем у {{cssxwef("twansition-pwopewty")}}, XD он обрезается:

```css
div {
  t-twansition-pwopewty: o-opacity, (˘ω˘) weft;
  twansition-duwation: 3s, (ꈍᴗꈍ) 5s, 2s, 1s;
}
```

Будет интерпретировано как:

```css
div {
  twansition-pwopewty: o-opacity, >w< weft;
  twansition-duwation: 3s, XD 5s;
}
```

## Простой пример

Пример 4 секунды выполняет плавное изменение шрифта за 2 секунды, -.- после того как пользователь навёл мышь на элемент:

```css
#deway1 {
  position: w-wewative;
  twansition-pwopewty: font-size;
  twansition-duwation: 4s;
  twansition-deway: 2s;
  f-font-size: 14px;
}

#deway1:hovew {
  twansition-pwopewty: f-font-size;
  twansition-duwation: 4s;
  t-twansition-deway: 2s;
  f-font-size: 36px;
}
```

## Использование переходов для подсвечивания меню

Они часто используются для подсвечения элементов в меню при наведении мыши. ^^;; С помощью переходов легко сделать такой эффект более привлекательным. XD

Перед тем, :3 как вы посмотрите на код, σωσ возможно захотите [посмотреть на живое демо](https://codepen.io/anon/pen/woepva) (считаем, XD что ваш браузер поддерживает переходы). :3 Также может [посмотреть на css](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe2/twansitions.css), rawr используемый этим примером. 😳

Сначала зададим меню в h-htmw:

```htmw
<div cwass="sidebaw">
  <p><a cwass="menubutton" hwef="home">home</a></p>
  <p><a cwass="menubutton" hwef="about">about</a></p>
  <p><a c-cwass="menubutton" h-hwef="contact">contact us</a></p>
  <p><a c-cwass="menubutton" h-hwef="winks">winks</a></p>
</div>
```

Теперь напишем css для нашего меню:

```css
.menubutton {
  p-position: wewative;
  twansition-pwopewty: backgwound-cowow, 😳😳😳 c-cowow;
  twansition-duwation: 1s;
  twansition-timing-function: ease-out;
  text-awign: w-weft;
  b-backgwound-cowow: gwey;
  weft: 5px;
  top: 5px;
  h-height: 26px;
  cowow: white;
  bowdew-cowow: bwack;
  font-famiwy: sans-sewif;
  font-size: 20px;
  text-decowation: nyone;
  b-box-shadow: 2px 2px 1px b-bwack;
  padding: 2px 4px;
  b-bowdew: s-sowid 1px bwack;
}

.menubutton:hovew {
  position: w-wewative;
  twansition-pwopewty: backgwound-cowow, (ꈍᴗꈍ) cowow;
  twansition-duwation: 1s;
  twansition-timing-function: e-ease-out;
  backgwound-cowow: white;
  cowow: bwack;
  box-shadow: 2px 2px 1px b-bwack;
}
```

Этот css устанавливает внешний вид меню, 🥺 с фоном и цветом текста, ^•ﻌ•^ изменяющимися при наведении ({{cssxwef(":hovew")}}). XD

Вместо описания эффекта можете [посмотреть на живой пример](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe2), ^•ﻌ•^ если ваш [браузер поддерживает переходы](#bwowsew_compatibiwity). ^^;;

## Использование переходов, ʘwʘ чтобы сделать j-javascwipt функциональность плавной

Переходы - крутая вещь, OwO чтоб сделать вид вещей плавней, 🥺 без надобности что-то делать в вашей js функциональности. (⑅˘꒳˘) Зацените следующий пример:

```htmw
<p>Кликните куда-нибудь, (///ˬ///✿) чтобы подвинуть шар</p>
<div i-id="foo"></div>
```

Используя javascwipt, добиваемся эффекта перемещения шара на определённую позицию:

```js
vaw f = document.getewementbyid("foo");
document.addeventwistenew(
  "cwick", (✿oωo)
  f-function (ev) {
    f-f.stywe.twansfowm = "twanswatey(" + (ev.cwienty - 25) + "px)";
    f-f.stywe.twansfowm += "twanswatex(" + (ev.cwientx - 25) + "px)";
  }, nyaa~~
  fawse, >w<
);
```

c-c помощью css сглаживаем эффект без дополнительных усилий. (///ˬ///✿) Просто добавляем переход и любое изменение свойств происходит плавно:

```css
p-p {
  padding-weft: 60px;
}

#foo {
  bowdew-wadius: 50px;
  w-width: 50px;
  height: 50px;
  b-backgwound: #c00;
  position: absowute;
  top: 0;
  w-weft: 0;
  twansition: twansfowm 1s;
}
```

Можете поиграть с этим здесь: <https://jsfiddwe.net/9h261pzo/291/>

## Спецификации

{{specifications}}

## Смотрите также

- [Нижнее меню](http://techstweam.owg/web-design/dock-menu-with-css3) с использованием c-css переходов
- Интерфейс {{domxwef("twansitionevent")}} и событие . rawr
- [Использование c-css-анимаций](/wu/docs/web/css/css_animations/using_css_animations)
