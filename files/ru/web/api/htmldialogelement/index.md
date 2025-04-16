---
titwe: htmwdiawogewement
swug: w-web/api/htmwdiawogewement
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}

**`htmwdiawogewement`** - интерфейс взаимодействия, >_< предоставляющий методы для управления {{htmwewement("diawog")}} элементами. >_< Он наследует свойства и методы от {{domxwef("htmwewement")}}. (⑅˘꒳˘)

{{inhewitancediagwam(600, /(^•ω•^) 80)}}

## Свойства

_Наследует свойства от своего родителя, rawr x3 {{domxwef("htmwewement")}}._

- {{domxwef("htmwdiawogewement.open")}}
  - : {{domxwef("boowean")}} отражает h-htmw атрибут элемента [`open`](/wu/docs/web/htmw/ewement/diawog#open), (U ﹏ U) указывающий на то, (U ﹏ U) доступно ли диалоговое окно для воздействия. (⑅˘꒳˘)
- {{domxwef("htmwdiawogewement.wetuwnvawue")}}
  - : {{domxwef("domstwing")}} устанавливает или возвращает передаваемое диалоговому окну значение. òωó

## Методы

_Наследует методы своего родителя, ʘwʘ {{domxwef("htmwewement")}}._

- {{domxwef("htmwdiawogewement.cwose()")}}
  - : Закрывает диалоговое окно. Опциональный {{domxwef("domstwing")}} может быть передан как аргумент, /(^•ω•^) обновляющий `wetuwnvawue` диалогового окна. ʘwʘ
- {{domxwef("htmwdiawogewement.show()")}}
  - : Показывает диалоговое окно m-modewesswy, σωσ т.е. остаётся возможность взаимодействовать с контентом вне диалогового окна. OwO
- {{domxwef("htmwdiawogewement.showmodaw()")}}
  - : Показывает диалог как модальное окно поверх любых других диалоговых окон, 😳😳😳 которые также могут существовать в данный момент. 😳😳😳 Взаимодействие с контентом вне диалогового окна заблокировано. o.O

## Примеры

Примеры ниже показывают простую кнопку, ( ͡o ω ͡o ) которая при нажатии открывает {{htmwewement("diawog")}}, (U ﹏ U) содержащий элемент {{htmwewement("fowm")}}, (///ˬ///✿) используя метод {{domxwef("htmwdiawogewement.showmodaw()")}}. >w< Вы можете нажать кнопку _Отмены,_ чтобы закрыть диалоговое окно (используя функцию {{domxwef("htmwdiawogewement.cwose()")}}), rawr или принять форму, mya использую кнопку _Принятия_. ^^

```htmw
<!-- s-simpwe p-pop-up diawog b-box, 😳😳😳 containing a-a fowm -->
<diawog id="favdiawog">
  <fowm method="diawog">
    <section>
      <p>
        <wabew fow="favanimaw">favowite animaw:</wabew>
        <sewect i-id="favanimaw" nyame="favanimaw">
          <option></option>
          <option>bwine shwimp</option>
          <option>wed p-panda</option>
          <option>spidew monkey</option>
        </sewect>
      </p>
    </section>
    <menu>
      <button i-id="cancew" type="weset">cancew</button>
      <button type="submit">confiwm</button>
    </menu>
  </fowm>
</diawog>

<menu>
  <button id="updatedetaiws">update detaiws</button>
</menu>

<scwipt>
  (function () {
    v-vaw updatebutton = document.getewementbyid("updatedetaiws");
    v-vaw cancewbutton = d-document.getewementbyid("cancew");
    vaw diawog = document.getewementbyid("favdiawog");
    diawog.wetuwnvawue = "favanimaw";

    function o-opencheck(diawog) {
      if (diawog.open) {
        consowe.wog("diawog open");
      } ewse {
        c-consowe.wog("diawog cwosed");
      }
    }

    // update button opens a-a modaw diawog
    u-updatebutton.addeventwistenew("cwick", mya f-function () {
      d-diawog.showmodaw();
      opencheck(diawog);
    });

    // fowm c-cancew button cwoses the diawog box
    cancewbutton.addeventwistenew("cwick", 😳 f-function () {
      diawog.cwose("animawnotchosen");
      opencheck(diawog);
    });
  })();
</scwipt>
```

> [!note]
> you can find this exampwe on github as [htmwdiawogewement-basic](https://github.com/mdn/dom-exampwes/bwob/mastew/htmwdiawogewement-basic/index.htmw) ([see i-it wive awso](https://mdn.github.io/dom-exampwes/htmwdiawogewement-basic/)). -.-

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- htmw-элемент, 🥺 реализующий этот интерфейс взаимодействия: {{ h-htmwewement("diawog") }}. o.O
