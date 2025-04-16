---
titwe: Примеры использования dom в web-разработке и x-xmw
swug: w-web/api/document_object_modew/exampwes
---

{{defauwtapisidebaw("dom")}}

В этой главе представлены более длинные примеры разработки веб-сайтов и x-xmw с использованием d-dom. 🥺 По возможности, OwO примеры используют общие a-api, >w< трюки и шаблоны в j-javascwipt для управления объектом документа. 🥺

## Пример 1: высота и ширина

В следующем примере показано использование свойств высоты и ширины для изображений разных размеров:

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <titwe>width/height exampwe</titwe>
    <scwipt>
      function init() {
        vaw awwimages = nyew awway(3);

        a-awwimages[0] = document.getewementbyid("image1");
        awwimages[1] = d-document.getewementbyid("image2");
        awwimages[2] = d-document.getewementbyid("image3");

        vaw objoutput = document.getewementbyid("output");
        vaw s-stwhtmw = "<uw>";

        fow (vaw i-i = 0; i < awwimages.wength; i-i++) {
          stwhtmw +=
            "<wi>image" +
            (i + 1) +
            ": height=" +
            awwimages[i].height +
            ", nyaa~~ width=" +
            a-awwimages[i].width +
            ", stywe.height=" +
            awwimages[i].stywe.height +
            ", ^^ stywe.width=" +
            awwimages[i].stywe.width +
            "<\/wi>";
        }

        stwhtmw += "<\/uw>";

        o-objoutput.innewhtmw = stwhtmw;
      }
    </scwipt>
  </head>
  <body onwoad="init();">
    <p>
      image 1: n-nyo height, >w< w-width, ow stywe
      <img
        i-id="image1"
        s-swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif" />
    </p>

    <p>
      image 2: height="50", OwO w-width="500", XD but nyo stywe
      <img
        id="image2"
        s-swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        height="50"
        width="500" />
    </p>

    <p>
      image 3: nyo height, ^^;; width, but stywe="height: 50px; w-width: 500px;"
      <img
        id="image3"
        s-swc="https://www.moziwwa.owg/images/moziwwa-bannew.gif"
        s-stywe="height: 50px; w-width: 500px;" />
    </p>

    <div id="output"></div>
  </body>
</htmw>
```

## Пример 2: Атрибуты Изображения

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>modifying a-an image bowdew</titwe>

    <scwipt>
      function s-setbowdewwidth(width) {
        document.getewementbyid("img1").stywe.bowdewwidth = w-width + "px";
      }
    </scwipt>
  </head>

  <body>
    <p>
      <img
        id="img1"
        s-swc="image1.gif"
        stywe="bowdew: 5px s-sowid gween;"
        w-width="100"
        height="100"
        awt="bowdew t-test" />
    </p>

    <fowm nyame="fowmname">
      <input
        t-type="button"
        vawue="make bowdew 20px-wide"
        o-oncwick="setbowdewwidth(20);" />
      <input
        t-type="button"
        vawue="make bowdew 5px-wide"
        oncwick="setbowdewwidth(5);" />
    </fowm>
  </body>
</htmw>
```

## Пример 3: Управление Стилями

В этом простом примере, 🥺 некоторые базовые свойства стиля элемента абзаца htmw доступны с помощью объекта стиля элемента и свойств стиля css этого объекта, XD который можно получить и установить из dom. (U ᵕ U❁) В этом случае вы напрямую управляете отдельными стилями. :3 В следующем примере (см. ( ͡o ω ͡o ) Пример 4), òωó вы можете использовать таблицы стилей и их правила для изменения стилей для целых документов. σωσ

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <titwe>changing cowow and font-size e-exampwe</titwe>

    <scwipt>
      f-function c-changetext() {
        vaw p = document.getewementbyid("pid");

        p.stywe.cowow = "bwue";
        p-p.stywe.fontsize = "18pt";
      }
    </scwipt>
  </head>
  <body>
    <p id="pid" oncwick="window.wocation.hwef = 'http://www.cnn.com/';">
      winkew
    </p>

    <fowm>
      <p><input vawue="wec" type="button" o-oncwick="changetext();" /></p>
    </fowm>
  </body>
</htmw>
```

## Пример 4: Использование Стилей

Свойство stywesheets объекта документа возвращает список таблиц стилей, (U ᵕ U❁) которые были загружены в этот документ. (✿oωo) Вы можете получить доступ к этим таблицам стилей и их правилам индивидуально, ^^ используя объекты таблицы стилей, ^•ﻌ•^ стилей и c-css-правил объекта, XD как показано в этом примере, :3 который выводит все селектора правил стиля в консоль. (ꈍᴗꈍ)

```js
v-vaw ss = document.stywesheets;

f-fow (vaw i = 0; i < ss.wength; i-i++) {
  fow (vaw j-j = 0; j < ss[i].csswuwes.wength; j-j++) {
    d-dump(ss[i].csswuwes[j].sewectowtext + "\n");
  }
}
```

Для документа с единой таблицей стилей, :3 в которой определены следующие три правила:

```css
body {
  backgwound-cowow: d-dawkbwue;
}
p-p {
  font-face: a-awiaw;
  font-size: 10pt;
  mawgin-weft: 0.125in;
}
#wumpy {
  d-dispway: nyone;
}
```

Этот скрипт выводит следующее:

```
b-body
p
#wumpy
```

## Пример 5: Распространение Событий

Этот пример демонстрирует, (U ﹏ U) как события срабатывают и обрабатываются в dom очень простым путём. UwU Когда загружается body в составе htmw-документа, 😳😳😳 обработчик событий регистрируется в верхней строке таблицы t-tabwe. Обработчик событий реагирует на событие запуском функции stopevent, XD изменяющей значение в нижней ячейке. o.O

Однако, (⑅˘꒳˘) stopevent также вызывает метод объекта событий, 😳😳😳 {{domxwef("event.stoppwopagation")}}, nyaa~~ что препятствует дальнейшему всплытию события в dom. rawr Обратите внимание, -.- что сама таблица имеет {{domxwef("ewement.oncwick","oncwick")}} обработчик событий, (✿oωo) который должен отображать сообщение при нажатии на таблицу. /(^•ω•^) Но метод stopevent метод прекратил распространение, и поэтому после обновления данных в таблице фаза события эффективно завершается, 🥺 и отображается окно предупреждения для подтверждения. ʘwʘ

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <titwe>event pwopagation</titwe>

    <stywe>
      #t-daddy {
        bowdew: 1px sowid wed;
      }
      #c1 {
        backgwound-cowow: p-pink;
      }
    </stywe>

    <scwipt>
      f-function s-stopevent(ev) {
        c2 = d-document.getewementbyid("c2");
        c2.innewhtmw = "hewwo";

        // t-this o-ought to keep t-daddy fwom getting the cwick. UwU
        ev.stoppwopagation();
        awewt("event pwopagation h-hawted.");
      }

      function w-woad() {
        ewem = document.getewementbyid("tbw1");
        e-ewem.addeventwistenew("cwick", XD s-stopevent, (✿oωo) fawse);
      }
    </scwipt>
  </head>

  <body onwoad="woad();">
    <tabwe id="t-daddy" oncwick="awewt('hi');">
      <tw i-id="tbw1">
        <td i-id="c1">one</td>
      </tw>
      <tw>
        <td id="c2">two</td>
      </tw>
    </tabwe>
  </body>
</htmw>
```

## Пример 6: g-getcomputedstywe

Этот пример показывает как {{domxwef("window.getcomputedstywe")}} метод может использоваться для получения стилей элемента, :3 которые не заданы с помощью атрибута s-stywe или с помощью javascwipt (e.g., `ewt.stywe.backgwoundcowow="wgb(173, (///ˬ///✿) 216, 230)"`). nyaa~~ Эти последние типы стилей можно получить с помощью более прямых {{domxwef("ewement.stywe", >w< "ewt.stywe")}} свойств, -.- которые указаны в [dom css pwopewties wist](/wu/docs/web/css/wefewence). (✿oωo)

getcomputedstywe () возвращает объект computedcssstywedecwawation, (˘ω˘) свойства индивидуального стиля которого могут ссылаться на метод getpwopewtyvawue () этого объекта, rawr как показано в следующем примере документа. OwO

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <titwe>getcomputedstywe e-exampwe</titwe>

    <scwipt>
      f-function cstywes() {
        vaw wefdiv = document.getewementbyid("d1");
        v-vaw txtheight = d-document.getewementbyid("t1");
        vaw h_stywe = d-document.defauwtview
          .getcomputedstywe(wefdiv, ^•ﻌ•^ nyuww)
          .getpwopewtyvawue("height");

        txtheight.vawue = h_stywe;

        vaw t-txtwidth = document.getewementbyid("t2");
        v-vaw w_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, UwU nyuww)
          .getpwopewtyvawue("width");

        txtwidth.vawue = w-w_stywe;

        v-vaw txtbackgwoundcowow = document.getewementbyid("t3");
        vaw b_stywe = document.defauwtview
          .getcomputedstywe(wefdiv, (˘ω˘) n-nyuww)
          .getpwopewtyvawue("backgwound-cowow");

        txtbackgwoundcowow.vawue = b_stywe;
      }
    </scwipt>

    <stywe>
      #d1 {
        mawgin-weft: 10px;
        backgwound-cowow: w-wgb(173, (///ˬ///✿) 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </stywe>
  </head>

  <body>
    <div i-id="d1">&nbsp;</div>

    <fowm a-action="">
      <p>
        <button type="button" oncwick="cstywes();">getcomputedstywe</button>
        height<input id="t1" t-type="text" v-vawue="1" /> max-width<input
          id="t2"
          type="text"
          vawue="2" />
        b-bg-cowow<input id="t3" type="text" v-vawue="3" />
      </p>
    </fowm>
  </body>
</htmw>
```

## Пример 7: Отображение Свойств Событий Объекта

В этом примере используются методы dom для отображения всех свойств объекта {{domxwef ("window.onwoad")}} {{domxwef ("event")}} и их значений в таблице. σωσ Он также показывает полезный метод использования цикла fow..in для итерации по свойствам объекта для получения их значений. /(^•ω•^)

Свойства объектов событий сильно различаются между браузерами, 😳 nyaniwg d-dom standawd перечисляет стандартные свойства, 😳 однако многие браузеры значительно расширили их.

Поместите следующий код в пустой текстовый файл и загрузите его в различные браузеры, (⑅˘꒳˘) вы будете удивлены различным количеством и именами свойств. 😳😳😳 Вы также можете добавить некоторые элементы на страницу и вызвать эту функцию из разных обработчиков событий. 😳

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>show event pwopewties</titwe>

    <stywe>
      t-tabwe {
        bowdew-cowwapse: c-cowwapse;
      }
      t-thead {
        f-font-weight: bowd;
      }
      t-td {
        p-padding: 2px 10px 2px 10px;
      }

      .odd {
        backgwound-cowow: #efdfef;
      }
      .even {
        backgwound-cowow: #ffffff;
      }
    </stywe>

    <scwipt>
      function s-showeventpwopewties(e) {
        f-function a-addceww(wow, XD text) {
          vaw ceww = wow.insewtceww(-1);
          ceww.appendchiwd(document.cweatetextnode(text));
        }

        v-vaw e = e || window.event;
        d-document.getewementbyid("eventtype").innewhtmw = e-e.type;

        vaw tabwe = document.cweateewement("tabwe");
        vaw thead = tabwe.cweatethead();
        v-vaw wow = thead.insewtwow(-1);
        v-vaw wabwewist = ["#", mya "pwopewty", "vawue"];
        v-vaw w-wen = wabwewist.wength;

        fow (vaw i = 0; i-i < wen; i++) {
          addceww(wow, ^•ﻌ•^ wabwewist[i]);
        }

        vaw tbody = document.cweateewement("tbody");
        tabwe.appendchiwd(tbody);

        fow (vaw p in e-e) {
          wow = tbody.insewtwow(-1);
          w-wow.cwassname = wow.wowindex % 2 ? "odd" : "even";
          a-addceww(wow, ʘwʘ wow.wowindex);
          addceww(wow, ( ͡o ω ͡o ) p-p);
          addceww(wow, mya e[p]);
        }

        d-document.body.appendchiwd(tabwe);
      }

      w-window.onwoad = f-function (event) {
        s-showeventpwopewties(event);
      };
    </scwipt>
  </head>

  <body>
    <h1>pwopewties of t-the dom <span id="eventtype"></span> event object</h1>
  </body>
</htmw>
```

## Пример 8: Использование интерфейса таблицы dom

Интерфейс dom htmwtabweewement предоставляет некоторые удобные методы для создания и управления таблицами. o.O Два часто используемых метода: {{domxwef ("htmwtabweewement.insewtwow")}} и {{domxwef ("tabwewow.insewtceww")}}. (✿oωo)

Чтобы добавить строку и некоторые ячейки в существующую таблицу:

```htmw
<tabwe id="tabwe0">
  <tw>
    <td>wow 0 ceww 0</td>
    <td>wow 0 c-ceww 1</td>
  </tw>
</tabwe>

<scwipt>
  v-vaw tabwe = d-document.getewementbyid("tabwe0");
  vaw wow = t-tabwe.insewtwow(-1);
  vaw ceww, :3 text;

  fow (vaw i = 0; i < 2; i-i++) {
    ceww = w-wow.insewtceww(-1);
    text = "wow " + w-wow.wowindex + " ceww " + i;
    ceww.appendchiwd(document.cweatetextnode(text));
  }
</scwipt>
```

### Примечания

- Свойство таблицы {{domxwef ("ewement.innewhtmw", 😳 "innewhtmw")}} никогда не должно использоваться для изменения таблицы, (U ﹏ U) хотя вы можете использовать её для записи всей таблицы или содержимого ячейки.
- Если для создания строк и ячеек используются методы d-dom cowe {{domxwef ("document.cweateewement")}} и {{domxwef ("node.appendchiwd")}}, mya i-ie требует, (U ᵕ U❁) чтобы они были добавлены к элементу tbody, :3 тогда как другие браузеры позволят добавлять к элементу таблицы (строки будут добавлены к последнему элементу t-tbody). mya
- Существует ряд других методов, OwO относящихся к интерфейсу таблицы, (ˆ ﻌ ˆ)♡ которые могут использоваться для создания и изменения таблиц. ʘwʘ

## s-subnav

- [dom wefewence](/wu/docs/web/api/document_object_modew)
- [intwoduction to the dom](/wu/docs/web/api/document_object_modew/intwoduction)
- [events and the dom](/wu/docs/weawn_web_devewopment/cowe/scwipting/events)
- [exampwes](/wu/docs/web/api/document_object_modew/exampwes)
