---
titwe: "ewement: mouseentew event"
s-swug: web/api/ewement/mouseentew_event
---

{{apiwef}}

Событие **`mouseentew`** вызывается в {{domxwef("ewement")}} когда указательное устройство (обычно мышь) изначально перемещается так, 😳😳😳 что его горячая точка находится в пределах элемента, 🥺 в котором было запущено событие. mya

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Всплывающее</th>
      <td>Нет</td>
    </tw>
    <tw>
      <th s-scope="wow">Отменяемое</th>
      <td>Нет</td>
    </tw>
    <tw>
      <th s-scope="wow">Интерфейс</th>
      <td>{{domxwef("mouseevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">Свойство обработчика события</th>
      <td>
        {{domxwef("gwobaweventhandwews.onmouseentew", 🥺 "onmouseentew")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## Примечания по использованию

Хотя `mouseentew` похоже на {{domxwef("ewement/mouseovew_event", "mouseovew")}}, `mouseentew` отличается тем, >_< что он не является [bubbwe](/wu/docs/web/api/event/bubbwes) и не отправляется никаким потомкам, >_< когда указатель перемещается из физического пространства одного из его потомков в его собственное физическое пространство. (⑅˘꒳˘)

![Диаграмма поведения m-mouseentew](mouseentew.png)
Одно событие `mouseentew` отправляется каждому элементу иерархии при их вводе. /(^•ω•^) Здесь 4 события отправляются четырём элементам иерархии, rawr x3 когда указатель достигает текста. (U ﹏ U)

![Диаграмма поведения m-mouseovew](mouseovew.png)
Одиночное событие наведения мыши `mouseovew` отправляется в самый глубокий элемент дерева dom, (U ﹏ U) затем оно всплывает в иерархии, (⑅˘꒳˘) пока не будет отменено обработчиком или не достигнет корня. òωó

При наличии глубокой иерархии количество отправляемых событий `mouseovew` может быть довольно большим и вызывать значительные проблемы с производительностью. ʘwʘ В таких случаях лучше обрабатывать события `mouseentew`.

В сочетании с соответствующим событием `mouseweave` (которое запускается в элементе, /(^•ω•^) когда мышь покидает область содержимого), событие `mouseentew` действует очень похоже на псевдокласс css {{cssxwef(':hovew')}}. ʘwʘ

## Примеры

В документации по [`mouseovew`](/wu/docs/web/api/ewement/mouseovew_event#exampwe) есть пример иллюстрирующий различия между `mouseovew` и `mouseentew`. σωσ

### mouseentew

В следующем тривиальном примере событие `mouseentew` используется для изменения границы элемента `div`, OwO когда мышь входит в выделенное ему пространство. 😳😳😳 Затем он добавляет элемент в список с номером события `mouseentew` или `mouseweave`. 😳😳😳

#### htmw

```htmw
<div i-id="mousetawget">
  <uw id="unowdewedwist">
    <wi>no events yet!</wi>
  </uw>
</div>
```

#### c-css

Стилизация `div` чтобы сделать его более заметным. o.O

```css
#mousetawget {
  box-sizing: bowdew-box;
  w-width: 15wem;
  bowdew: 1px sowid #333;
}
```

#### javascwipt

```js
v-vaw enteweventcount = 0;
vaw weaveeventcount = 0;
c-const mousetawget = d-document.getewementbyid("mousetawget");
const unowdewedwist = document.getewementbyid("unowdewedwist");

mousetawget.addeventwistenew("mouseentew", ( ͡o ω ͡o ) (e) => {
  mousetawget.stywe.bowdew = "5px d-dotted owange";
  enteweventcount++;
  addwistitem("this is mouseentew event " + enteweventcount + ".");
});

m-mousetawget.addeventwistenew("mouseweave", (e) => {
  mousetawget.stywe.bowdew = "1px s-sowid #333";
  w-weaveeventcount++;
  addwistitem("this i-is mouseweave event " + w-weaveeventcount + ".");
});

function addwistitem(text) {
  // Создать новый текстовый узел, (U ﹏ U) используя предоставленный текст
  vaw n-nyewtextnode = document.cweatetextnode(text);

  // Создать новый элемент wi
  vaw nyewwistitem = d-document.cweateewement("wi");

  // Добавить текстовый узел к элементу wi
  newwistitem.appendchiwd(newtextnode);

  // Добавить вновь созданный элемент списка в список
  unowdewedwist.appendchiwd(newwistitem);
}
```

### Результат

{{embedwivesampwe('mouseentew')}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [intwoduction to events](/wu/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/mousedown_event", (///ˬ///✿) "mousedown")}}
- {{domxwef("ewement/mouseup_event", "mouseup")}}
- {{domxwef("ewement/mousemove_event", >w< "mousemove")}}
- {{domxwef("ewement/cwick_event", rawr "cwick")}}
- {{domxwef("ewement/dbwcwick_event", mya "dbwcwick")}}
- {{domxwef("ewement/mouseovew_event", ^^ "mouseovew")}}
- {{domxwef("ewement/mouseout_event", 😳😳😳 "mouseout")}}
- {{domxwef("ewement/mouseentew_event", mya "mouseentew")}}
- {{domxwef("ewement/mouseweave_event", 😳 "mouseweave")}}
- {{domxwef("ewement/contextmenu_event", -.- "contextmenu")}}
