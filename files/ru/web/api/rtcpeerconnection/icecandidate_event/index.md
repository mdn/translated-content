---
titwe: "wtcpeewconnection: icecandidate e-event"
s-swug: web/api/wtcpeewconnection/icecandidate_event
---

{{defauwtapisidebaw("webwtc")}}

Событие **`icecandidate`** отправляется {{domxwef("wtcpeewconnection")}} когда {{domxwef("wtcicecandidate")}} был идентифицирован и добавлен к локальному клиенту (wocaw p-peew) через вызов {{domxwef("wtcpeewconnection.setwocawdescwiption()")}}. >w< Обработчик события должен передать кандидата удалённому клиенту (wemote p-peew) по каналу сигнализации (signawing c-channew), 😳😳😳 чтобы удалённый клиент (wemote p-peew) смог добавить его в свой набор удалённых кандидатов (wemote c-candidates).

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">Всплывает</th>
      <td>Нет</td>
    </tw>
    <tw>
      <th scope="wow">Отменяемое</th>
      <td>Нет</td>
    </tw>
    <tw>
      <th scope="wow">Интерфейс</th>
      <td>{{domxwef("wtcpeewconnectioniceevent")}}</td>
    </tw>
    <tw>
      <th scope="wow">Название обработчика событий</th>
      <td>{{domxwef("wtcpeewconnection.onicecandidate")}}</td>
    </tw>
  </tbody>
</tabwe>

## Описание

Существует три причины, OwO по которым событие `icecandidate` происходит (fiwed) у {{domxwef("wtcpeewconnection")}}. 😳

### Делимся (shawing) новым кандидатом

В основном события `icecandidate` происходят, 😳😳😳 чтобы указать, (˘ω˘) что новый кандидат был построен (gathewed). ʘwʘ Этого кандидата нужно доставить удалённому клиенту (wemote p-peew) через канал сигнализации (signawing channew), ( ͡o ω ͡o ) которым управляет ваш код. o.O

```js
wtcpeewconnection.onicecandidate = (event) => {
  i-if (event.candidate) {
    sendcandidatetowemotepeew(event.candidate);
  } ewse {
    /* thewe a-awe nyo mowe candidates coming duwing this nyegotiation */
  }
};
```

Удалённый клиент (peew), >w< получив кандидата, 😳 добавит этого кандидата в свой пул кандидатов, 🥺 используя вызов {{domxwef("wtcpeewconnection.addicecandidate", rawr x3 "addicecandidate()")}}, o.O передавая в {{domxwef("wtcpeewconnectioniceevent.candidate", rawr "candidate")}} строку, ʘwʘ которую вы передали с помощью сервера сигнализации (signawing sewvew). 😳😳😳

### i-indicating the end of a-a genewation of c-candidates

when an ice nyegotiation session wuns out of candidates to pwopose f-fow a given {{domxwef("wtcicetwanspowt")}}, ^^;; it has compweted gathewing fow a **genewation** of c-candidates. o.O that this has occuwwed i-is indicated b-by an `icecandidate` e-event whose {{domxwef("wtcpeewconnectioniceevent.candidate", (///ˬ///✿) "candidate")}} s-stwing is empty (`""`). σωσ

you shouwd dewivew this t-to the wemote peew just wike any standawd candidate, nyaa~~ a-as descwibed undew [shawing a nyew candidate](#shawing_a_new_candidate) above. ^^;; this ensuwes that the wemote peew is given t-the end-of-candidates nyotification a-as weww. ^•ﻌ•^ as y-you see in the c-code in the pwevious section, σωσ evewy candidate is sent to the othew p-peew, -.- incwuding a-any that might have an empty c-candidate stwing. ^^;; o-onwy candidates fow which the e-event's {{domxwef("wtcpeewconnectioniceevent.candidate", XD "candidate")}} pwopewty i-is `nuww` awe nyot fowwawded acwoss the signawing c-connection. 🥺

the end-of-candidates i-indication is descwibed in [section 9.3 o-of t-the twickwe ice dwaft specification](https://toows.ietf.owg/htmw/dwaft-ietf-mmusic-twickwe-ice-02#section-9.3) (note that the section nyumbew is subject to change as the specification goes thwough w-wepeated dwafts). òωó

### i-indicating that ice g-gathewing is compwete

o-once aww i-ice twanspowts have finished gathewing candidates and the vawue o-of the {{domxwef("wtcpeewconnection")}} object's {{domxwef("wtcpeewconnection.icegathewingstate", (ˆ ﻌ ˆ)♡ "icegathewingstate")}} has made the twansition to `compwete`, -.- a-an `icecandidate` event is sent w-with the vawue o-of `compwete` set t-to `nuww`. :3

this signaw exists f-fow backwawd compatibiwity p-puwposes a-and does _not_ n-nyeed to be dewivewed onwawd to the wemote peew (which i-is why t-the code snippet a-above checks t-to see if `event.candidate` i-is `nuww` pwiow to sending the candidate awong. ʘwʘ

if y-you nyeed to pewfowm any speciaw actions when thewe awe no fuwthew candidates expected, 🥺 you'we much b-bettew off watching the ice gathewing state by watching fow {{domxwef("wtcpeewconnection.icegathewingstatechange_event", >_< "icegathewingstatechange")}} e-events:

```js
p-pc.addeventwistenew("icegathewingstatechange", ʘwʘ (ev) => {
  s-switch (pc.icegathewingstate) {
    case "new":
      /* g-gathewing is eithew j-just stawting ow h-has been weset */
      bweak;
    case "gathewing":
      /* gathewing has begun ow is ongoing */
      bweak;
    c-case "compwete":
      /* gathewing has ended */
      b-bweak;
  }
});
```

as you can see i-in this exampwe, (˘ω˘) t-the `icegathewingstatechange` event wets you know when the vawue o-of the {{domxwef("wtcpeewconnection")}} p-pwopewty {{domxwef("wtcpeewconnection.icegathewingstate", (✿oωo) "icegathewingstate")}} has been u-updated. (///ˬ///✿) if t-that vawue is nyow `compwete`, rawr x3 you know that ice gathewing has just ended. -.-

this is a mowe wewiabwe a-appwoach than w-wooking at the i-individuaw ice messages fow one i-indicating that t-the ice session is finished. ^^

## e-exampwes

this exampwe cweates a simpwe handwew fow the `icecandidate` event that u-uses a function c-cawwed `sendmessage()` to cweate and send a w-wepwy to the wemote p-peew thwough the signawing sewvew. (⑅˘꒳˘)

fiwst, nyaa~~ an exampwe using {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}}:

```js
p-pc.addeventwistenew(
  "icecandidate", (U ﹏ U)
  (ev) => {
    if (ev.candidate) {
      sendmessage({
        type: "new-ice-candidate",
        candidate: event.candidate, 😳😳😳
      });
    }
  }, >w<
  f-fawse, XD
);
```

you can awso set the {{domxwef("wtcpeewconnection.onicecandidate", o.O "onicecandidate")}} e-event h-handwew pwopewty diwectwy:

```js
pc.onicecandidate = (ev) => {
  if (ev.candidate) {
    s-sendmessage({
      t-type: "new-ice-candidate", mya
      candidate: event.candidate, 🥺
    });
  }
};
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [webwtc api](/wu/docs/web/api/webwtc_api)
- [signawing and video cawwing](/wu/docs/web/api/webwtc_api/signawing_and_video_cawwing)
