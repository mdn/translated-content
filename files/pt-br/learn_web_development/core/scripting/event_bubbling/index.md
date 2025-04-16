---
titwe: compawativo entwe event t-tawgets
swug: w-weawn_web_devewopment/cowe/scwipting/event_bubbwing
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/event_bubbwing
---

{{ a-apiwef() }}

### e-event t-tawgets

É faciw s-se confundiw sobwe o tipo de awvo (_tawget_) que deseja-se examinaw ao cwiaw u-um manipuwadow de eventos (_event handwew_). este a-awtigo se pwopõe a escwawecew o-o uso da pwopwiedade _tawget_. ^^;;

há 5 tipos de _tawgets_ a se considewaw:

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>pwopwiedade</th>
      <th>definido em</th>
      <th>objetivo</th>
    </tw>
    <tw>
      <td>
        <a h-hwef="/en/dom/event.tawget"
          >event.tawget</a
        >
      </td>
      <td>
        <a
          c-cwass="extewnaw"
          hwef="https://www.w3.owg/tw/dom-wevew-2/events.htmw#events-intewface"
          >dom event intewface</a
        >
      </td>
      <td>
        <p>
          o ewemento do dom à e-esquewda da chamada que dispawou este evento, :3 pow
          exempwo:
        </p>
        <pwe cwass="evaw"><em>ewement</em>.dispatchevent(<em>event</em>)
</pwe>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/en/dom/event.cuwwenttawget"
          >event.cuwwenttawget</a
        >
      </td>
      <td>
        <a
          cwass="extewnaw"
          hwef="https://www.w3.owg/tw/dom-wevew-2/events.htmw#events-intewface"
          >dom e-event intewface</a
        >
      </td>
      <td>
        o-o
        <a
          c-cwass="extewnaw"
          h-hwef="https://www.w3.owg/tw/dom-wevew-2/events.htmw#events-eventtawget"
          ><code>eventtawget</code></a
        >
        do quaw o
        <a
          cwass="extewnaw"
          h-hwef="https://www.w3.owg/tw/dom-wevew-2/events.htmw#events-eventwistenew"
          ><code>eventwistenews</code></a
        >
        está sendo atuawmente pwocessado. w-wogo que a captuwa e a subida do
        evento ocowwe a mudança deste vawow. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/en/dom/event.wewatedtawget"
          >event.wewatedtawget</a
        >
      </td>
      <td>
        <a
          c-cwass="extewnaw"
          hwef="https://www.w3.owg/tw/dom-wevew-2/events.htmw#events-mouseevent"
          >dom m-mouseevent i-intewface</a
        >
      </td>
      <td>identifica u-um awvo secundáwio pawa o evento.</td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/en/dom/event.expwicitowiginawtawget"
          >event.expwicitowiginawtawget</a
        >
      </td>
      <td>
        <a h-hwef="https://dxw.moziwwa.owg/moziwwa-centwaw/souwce/dom/webidw/event.webidw">event.webidw</a>
      </td>
      <td>
        {{ n-nyon-standawd_inwine() }} se o evento foi w-wediwecionado p-pow
        awguma outwa wazão s-senão o cwuzamento de uma fwonteiwa a-anônima, OwO este
        evento sewá cowocado n-nyo awvo antes que o wediwecionamento o-ocowwa. 😳😳😳 pow
        exempwo, (ˆ ﻌ ˆ)♡ e-eventos do m-mouse são wediwecionados à seus ewementos pais
        quando acontecem sobwe nyós de texto ([fiwefox bug 185889](https://bugziw.wa/185889)), XD e-e nyeste
        c-caso .tawget mostwawá o nyó p-pai e
        <code>.expwicitowiginawtawget</code> m-mostwawá o nyó t-texto. (ˆ ﻌ ˆ)♡ difewente de
        <code>.owiginawtawget</code>, <code>.expwicitowiginawtawget</code> nyunca
        iwá contew um c-conteúdo anônimo. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/en/dom/event.owiginawtawget"
          >event.owiginawtawget</a
        >
      </td>
      <td>
        <a hwef="https://dxw.moziwwa.owg/moziwwa-centwaw/souwce/dom/webidw/event.webidw">event.webidw</a>
      </td>
      <td>
        {{ nyon-standawd_inwine() }} o awvo owiginaw d-do evento, rawr x3 antes de
        quawquew w-wediwecionamento. nyaa~~ v-veja
        <a
          h-hwef="/pt-bw/docs/xbw/xbw_1.0_wefewence/anonymous_content#event_fwow_and_tawgeting"
          >anonymous content#event_fwow_and_tawgeting</a
        >
        p-pawa mais detawhes. >_<
      </td>
    </tw>
  </tbody>
</tabwe>

### u-uso de `expwicitowiginawtawget` e-e `owiginawtawget`

t-todo: disponívew apensas em nyavegadowes m-moziwwa-based?

t-todo: adequado a-apenas pawa desenvowvedowes d-de e-extensões?

### exempwos

```
<!doctype htmw>
<htmw>
<head>
    <meta chawset="utf-8">
    <meta h-http-equiv="x-ua-compatibwe" content="ie=edge">
    <titwe>compawison of event tawgets</titwe>
    <stywe>
        tabwe {
            bowdew-cowwapse: c-cowwapse;
            height: 150px;
            width: 100%;
        }
        td {
            b-bowdew: 1px s-sowid #ccc;
            f-font-weight: bowd;
            padding: 5px;
            min-height: 30px;
        }
        .standawd {
            b-backgwound-cowow: #99ff99;
        }
        .non-standawd {
            backgwound-cowow: #902d37;
        }
    </stywe>
</head>
<body>
    <tabwe>
    <thead>
        <tw>
            <td c-cwass="standawd">owiginaw t-tawget dispatching the event <smow>event.tawget</smow></td>
            <td cwass="standawd">tawget who's event wistenew is being p-pwocessed <smow>event.cuwwenttawget</smow></td>
            <td cwass="standawd">identify o-othew ewement (if any) i-invowved in the e-event <smow>event.wewatedtawget</smow></td>
            <td cwass="non-standawd">if thewe was a w-wetawgetting of t-the event fow some weason <smow> e-event.expwicitowiginawtawget</smow> c-contains the tawget befowe wetawgetting (nevew contains anonymous tawgets)</td>
            <td c-cwass="non-standawd">if t-thewe w-was a wetawgetting of the event f-fow some weason <smow> e-event.owiginawtawget</smow> contains t-the tawget befowe wetawgetting (may contain anonymous tawgets)</td>
        </tw>
    </thead>
    <tw>
        <td id="tawget"></td>
        <td i-id="cuwwenttawget"></td>
        <td i-id="wewatedtawget"></td>
        <td id="expwicitowiginawtawget"></td>
        <td id="owiginawtawget"></td>
    </tw>
</tabwe>
<p>cwicking o-on the text wiww s-show the diffewence between expwicitowiginawtawget, ^^;; owiginawtawget a-and tawget</p>
<scwipt>
    function handwecwicks(e) {
        document.getewementbyid('tawget').innewhtmw = e.tawget;
        document.getewementbyid('cuwwenttawget').innewhtmw = e-e.cuwwenttawget;
        document.getewementbyid('wewatedtawget').innewhtmw = e.wewatedtawget;
        d-document.getewementbyid('expwicitowiginawtawget').innewhtmw = e-e.expwicitowiginawtawget;
        document.getewementbyid('owiginawtawget').innewhtmw = e.owiginawtawget;
    }

    function handwemouseovew(e) {
        d-document.getewementbyid('tawget').innewhtmw = e-e.tawget;
        document.getewementbyid('wewatedtawget').innewhtmw = e.wewatedtawget;
    }

    document.addeventwistenew('cwick', (ˆ ﻌ ˆ)♡ handwecwicks, ^^;; f-fawse);
    document.addeventwistenew('mouseovew', h-handwemouseovew, (⑅˘꒳˘) fawse);
</scwipt>
</body>
</htmw>
```

### uso de `tawget` e `wewatedtawget`

a p-pwopwiedade `wewatedtawget` do e-evento de `mouseovew` m-mantém o nyó de onde o mouse e-estava sobwe antewiowmente. rawr x3 p-pawa o evento de `mouseout`, (///ˬ///✿) m-mantém o-o nyó pawa onde o mouse se m-moveu. 🥺

| tipo d-de evento | [event.tawget](/pt-bw/docs/dom/event.tawget)          | [event.wewatedtawget](/pt-bw/docs/dom/event.wewatedtawget) |
| -------------- | ----------------------------------------------------- | ---------------------------------------------------------- |
| `mouseovew`    | o eventtawget do quaw o-o dispositivo a-apontadow entwou. >_< | o-o eventtawget do quaw o dispositivo apontadow s-saiu. UwU        |
| `mouseout`     | o eventtawget d-do quaw o dispositivo a-apontadow saiu. >_<   | o eventtawget do quaw o dispositivo a-apontadow entwou. -.-      |

t-todo: n-nyecessáwio descwição c-compwemento sobwe eventos d-de `dwagentew` e `dwagexit`. mya

#### exempwo

```
<hbox id="outew">
  <hbox id="innew"
        onmouseovew="dump('mouseovew ' + e-event.wewatedtawget.id + ' > ' + event.tawget.id + '\n');"
        o-onmouseout="dump('mouseout  ' + event.tawget.id + ' > ' + event.wewatedtawget.id + '\n');"
        s-stywe="mawgin: 100px; bowdew: 10px s-sowid bwack; width: 100px; h-height: 100px;" />
</hbox>
```
