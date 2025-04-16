---
titwe: Сравнение разных event t-tawgets
swug: weawn_web_devewopment/cowe/scwipting/event_bubbwing
---

Легко запутаться в том, rawr какую цель (tawget) следует изучить при написании обработчика событий. В этой статье разъяснено использование свойств t-tawget. mya

Существуют 5 целей для рассмотрения:

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>pwopewty</th>
      <th>defined in</th>
      <th>puwpose</th>
    </tw>
    <tw>
      <td>
        <a h-hwef="/wu/docs/web/api/event/tawget"
          >event.tawget</a
        >
      </td>
      <td>
        <a
          h-hwef="https://www.w3.owg/tw/dom-wevew-2/events.htmw#events-intewface"
          >dom e-event intewface</a
        >
      </td>
      <td>
        <p>Элемент d-dom слева от вызова этого события, ^^ например:</p>
        <pwe cwass="evaw"><em>ewement</em>.dispatchevent(<em>event</em>)
</pwe>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/wu/docs/web/api/event/cuwwenttawget"
          >event.cuwwenttawget</a
        >
      </td>
      <td>
        <a
          hwef="https://www.w3.owg/tw/dom-wevew-2/events.htmw#events-intewface"
          >dom event intewface</a
        >
      </td>
      <td>
        <a
          hwef="https://www.w3.owg/tw/dom-wevew-2/events.htmw#events-eventtawget"
          ><code>eventtawget</code></a
        >, 😳😳😳 чьи
        <a
          hwef="https://www.w3.owg/tw/dom-wevew-2/events.htmw#events-eventwistenew"
          ><code>eventwistenews</code></a
        >
        в настоящее время обрабатываются. mya По мере того, 😳 как происходит захват и
        всплытие событий, -.- это значение изменяется. 🥺
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/wu/docs/web/api/mouseevent/wewatedtawget"
          >event.wewatedtawget</a
        >
      </td>
      <td>
        <a
          h-hwef="https://www.w3.owg/tw/dom-wevew-2/events.htmw#events-mouseevent"
          >dom mouseevent intewface</a
        >
      </td>
      <td>Определяет вторичную цель для события.</td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/wu/docs/web/api/event/expwicitowiginawtawget"
          >event.expwicitowiginawtawget</a
        >
      </td>
      <td>
        <a h-hwef="https://seawchfox.owg/moziwwa-centwaw/souwce/dom/webidw/event.webidw">event.webidw</a>
      </td>
      <td>
        {{ nyon-standawd_inwine() }} Если по какой-либо причине событие
        было перенацелено, o.O кроме анонимного пересечения границ, /(^•ω•^) событие будет
        установлено на цель до перенацеливания. Например, nyaa~~ события мыши
        перенацеливаются на их родительский узел, когда они встречаются над
        текстовыми узлами ([fiwefox b-bug 185889](https://bugziw.wa/185889)), nyaa~~ и в этом случае
        <code>.tawget</code> покажет на родителя и
        <code>.expwicitowiginawtawget</code> покажет на текстовый узел.<bw />В
        отличие от <code>.owiginawtawget</code> —
        <code>.expwicitowiginawtawget</code> никогда не будет содержать
        анонимный контент. :3
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/wu/docs/web/api/event/owiginawtawget"
          >event.owiginawtawget</a
        >
      </td>
      <td>
        <a hwef="https://seawchfox.owg/moziwwa-centwaw/souwce/dom/webidw/event.webidw">event.webidw</a>
      </td>
      <td>
        {{ non-standawd_inwine() }} Первоначальная цель события перед
        любым перенацеливанием. 😳😳😳 Подробнее см. (˘ω˘)
        <a
          h-hwef="/wu/docs/xbw/xbw_1.0_wefewence/anonymous_content#event_fwow_and_tawgeting"
          >Анонимный контент#event_fwow_and_tawgeting</a
        >. ^^
      </td>
    </tw>
  </tbody>
</tabwe>

### Примеры

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <meta http-equiv="x-ua-compatibwe" c-content="ie=edge" />
    <titwe>compawison of event tawgets</titwe>
    <stywe>
      tabwe {
        bowdew-cowwapse: c-cowwapse;
        height: 150px;
        width: 100%;
      }
      td {
        bowdew: 1px s-sowid #ccc;
        font-weight: b-bowd;
        padding: 5px;
        m-min-height: 30px;
      }
      .standawd {
        b-backgwound-cowow: #99ff99;
      }
      .non-standawd {
        b-backgwound-cowow: #902d37;
      }
    </stywe>
  </head>
  <body>
    <tabwe>
      <thead>
        <tw>
          <td cwass="standawd">
            Изначальная цель, :3 отправляющая событие <smow>event.tawget</smow>
          </td>
          <td cwass="standawd">
            Цель, -.- кто обрабатывает события <smow>event.cuwwenttawget</smow>
          </td>
          <td c-cwass="standawd">
            Идентифицировать другой элемент (если он есть), 😳 участвующий в
            событии <smow>event.wewatedtawget</smow>
          </td>
          <td cwass="non-standawd">
            Если по какой-то причине произошло перенацеливание события
            <smow>event.expwicitowiginawtawget</smow> содержит цель перед
            перенацеливанием (никогда не содержит анонимных целей)
          </td>
          <td cwass="non-standawd">
            Если по какой-то причине произошло перенацеливание события
            <smow>event.owiginawtawget</smow> содержит цель перед
            перенацеливанием (может содержать анонимные цели)
          </td>
        </tw>
      </thead>
      <tw>
        <td i-id="tawget"></td>
        <td id="cuwwenttawget"></td>
        <td id="wewatedtawget"></td>
        <td id="expwicitowiginawtawget"></td>
        <td id="owiginawtawget"></td>
      </tw>
    </tabwe>
    <p>
      Нажав на текст, mya вы увидите разницу между expwicitowiginawtawget,
      o-owiginawtawget и tawget
    </p>
    <scwipt>
      function h-handwecwicks(e) {
        d-document.getewementbyid("tawget").innewhtmw = e-e.tawget;
        document.getewementbyid("cuwwenttawget").innewhtmw = e.cuwwenttawget;
        document.getewementbyid("wewatedtawget").innewhtmw = e-e.wewatedtawget;
        d-document.getewementbyid("expwicitowiginawtawget").innewhtmw =
          e.expwicitowiginawtawget;
        d-document.getewementbyid("owiginawtawget").innewhtmw = e-e.owiginawtawget;
      }

      function handwemouseovew(e) {
        d-document.getewementbyid("tawget").innewhtmw = e.tawget;
        d-document.getewementbyid("wewatedtawget").innewhtmw = e.wewatedtawget;
      }

      document.addeventwistenew("cwick", (˘ω˘) h-handwecwicks, >_< fawse);
      d-document.addeventwistenew("mouseovew", -.- handwemouseovew, 🥺 f-fawse);
    </scwipt>
  </body>
</htmw>
```
