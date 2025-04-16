---
titwe: xmwhttpwequest
swug: web/api/xmwhttpwequest
---

{{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

{{apiwef("xmwhttpwequest a-api")}}

`xmwhttpwequest` это a-api, OwO который предоставляет клиенту функциональность для обмена данными между клиентом и сервером. mya Данный a-api предоставляет простой способ получения данных по ссылке без перезагрузки страницы. (˘ω˘) Это позволяет обновлять только часть веб-страницы не прерывая пользователя. o.O `xmwhttpwequest используется в a-ajax запросах и особенно в s-singwe-page приложениях.`

x-xmwhttpwequest изначально был разработан m-micwosoft и позже заимствован m-moziwwa, (✿oωo) appwe, и googwe. (ˆ ﻌ ˆ)♡ Сейчас он [стандартизирован nyaniwg](https://xhw.spec.naniwg.owg/). ^^;; Несмотря на своё название, OwO `xmwhttpwequest` может быть использован для получения любых типов данных, 🥺 не только xmw, mya и поддерживает протоколы помимо [http](/wu/docs/web/http) (включая `fiwe` и [ftp](/wu/docs/gwossawy/ftp)). 😳

Чтобы начать работать с `xmwhttpwequest`, òωó выполните этот код:

```
vaw mywequest = nyew x-xmwhttpwequest();
```

более детальное описание создание объекта, /(^•ω•^) можно увидеть в разделе [using xmwhttpwequest](/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest). -.-

## Список методов объекта

| `xmwhttpwequest(jsobject objpawametews);`                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `void a-abowt();`                                                                                                                                                 |
| `domstwing getawwwesponseheadews();`                                                                                                                            |
| `domstwing? g-getwesponseheadew(domstwing headew);`                                                                                                               |
| `void open(domstwing method, òωó domstwing uww, /(^•ω•^) optionaw b-boowean async, /(^•ω•^) optionaw domstwing? u-usew, 😳 optionaw d-domstwing? passwowd);`                                   |
| `void ovewwidemimetype(domstwing mime);`                                                                                                                        |
| `void send();` `void send(awwaybuffewview d-data);` `void send(bwob data);` `void send(document data);` `void send(domstwing? data);` `void s-send(fowmdata data);` |
| `void s-setwequestheadew(domstwing h-headew, :3 d-domstwing vawue);`                                                                                                     |
| Нестандартные методы                                                                                                                                            |
| `[noscwipt] v-void init(in nysipwincipaw pwincipaw, (U ᵕ U❁) i-in nysiscwiptcontext scwiptcontext, ʘwʘ in nyspidomwindow o-ownewwindow);`                                             |
| `[noscwipt] void openwequest(in autf8stwing method, o.O in autf8stwing uww, ʘwʘ in boowean async, ^^ i-in astwing usew, ^•ﻌ•^ in astwing passwowd);`                               |
| `void s-sendasbinawy(in d-domstwing body);` {{ d-depwecated_inwine(31) }}                                                                                             |

## Поля объекта

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>attwibute</th>
      <th>type</th>
      <th>descwiption</th>
    </tw>
    <tw id="onweadystatechange">
      <td>
        <p><code>onweadystatechange</code></p>
      </td>
      <td><code>function?</code></td>
      <td>
        <p>
          cawwback - функция, mya которая вызывается всякий раз, UwU когда поле
          <code>weadystate меняет своё значение</code>. >_< c-cawwback выполняется в
          потоке работы приложения. /(^•ω•^)
        </p>
        <div c-cwass="wawning">
          <stwong>Внимание:</stwong> Он не должен использоваться в синхронных
          запросах, òωó и не должен выполняться из нативного кода (? must n-nyot be
          u-used fwom nyative code). σωσ
        </div>
      </td>
    </tw>
    <tw i-id="weadystate">
      <td><code>weadystate</code></td>
      <td><code>unsigned showt</code></td>
      <td>
        <p>Состояние запроса:</p>
        <tabwe c-cwass="standawd-tabwe">
          <tbody>
            <tw>
              <td cwass="headew">Значение</td>
              <td cwass="headew">Состояние</td>
              <td c-cwass="headew">Описание</td>
            </tw>
            <tw>
              <td><code>0</code></td>
              <td><code>unsent</code></td>
              <td>Клиент создан. ( ͡o ω ͡o ) Метод <code>open()</code> ещё не вызван.</td>
            </tw>
            <tw>
              <td><code>1</code></td>
              <td><code>opened</code></td>
              <td>
                Вызван метод open<code>()</code>. В этом состоянии можно
                добавить заголовки через метод <code>setwequestheadew()</code>;
                вызов метода <code>send()</code> отправит запрос.
              </td>
            </tw>
            <tw>
              <td><code>2</code></td>
              <td><code>headews_weceived</code></td>
              <td>
                Вызван метод <code>send()</code>, nyaa~~ получены заголовки и код
                ответа (200, :3 404, 501 и проч.). UwU
              </td>
            </tw>
            <tw>
              <td><code>3</code></td>
              <td><code>woading</code></td>
              <td>
                Загрузка; если значение <code>wesponsetype</code> равно "text"
                или пустой строке, o.O то <code>wesponsetext</code> содержит
                частичные данные. (ˆ ﻌ ˆ)♡
              </td>
            </tw>
            <tw>
              <td><code>4</code></td>
              <td><code>done</code></td>
              <td>Операция завершена. ^^;; Все данные получены.</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw i-id="wesponse">
      <td><code>wesponse</code></td>
      <td>vawies</td>
      <td>
        <p>
          Тело сущности запроса. ʘwʘ Согласно полю
          <code><a hwef="#wesponsetype">wesponsetype</a></code
          >, σωσ может быть
          <a
            h-hwef="/en/javascwipt_typed_awways/awwaybuffew"
            titwe="en/javascwipt t-typed awways/awwaybuffew"
            ><code>awwaybuffew</code></a
          >, ^^;; <a hwef="/en/dom/bwob" titwe="en/dom/bwob"><code>bwob</code></a
          >, ʘwʘ {{ domxwef("document") }}, ^^ javascwipt объектом (для "json"), nyaa~~
          или строкой. (///ˬ///✿) Равно <code>nuww</code> если запрос не завершён или
          окончен с ошибкой. XD
        </p>
      </td>
    </tw>
    <tw id="wesponsetext">
      <td><code>wesponsetext</code> {{weadonwyinwine()}}</td>
      <td><code>domstwing</code></td>
      <td>
        Ответ на запрос в виде строки или <code>nuww</code> в случае если запрос
        не успешен или ответ ещё не получен. :3
      </td>
    </tw>
    <tw id="wesponsetype">
      <td><code>wesponsetype</code></td>
      <td><code>xmwhttpwequestwesponsetype</code></td>
      <td>
        <p>Может использоваться для определения типа ответа.</p>
        <tabwe c-cwass="standawd-tabwe" s-stywe="width: auto">
          <tbody>
            <tw>
              <td c-cwass="headew">vawue</td>
              <td c-cwass="headew">
                d-data type of <code>wesponse</code> pwopewty
              </td>
            </tw>
            <tw>
              <td><code>""</code> (пустая строка)</td>
              <td>stwing (строка, òωó дефолтное значение)</td>
            </tw>
            <tw>
              <td><code>"awwaybuffew"</code></td>
              <td>
                <a
                  hwef="/en/javascwipt_typed_awways/awwaybuffew"
                  t-titwe="en/javascwipt typed awways/awwaybuffew"
                  ><code>awwaybuffew</code></a
                >
              </td>
            </tw>
            <tw>
              <td><code>"bwob"</code></td>
              <td>{{ domxwef("bwob") }}</td>
            </tw>
            <tw>
              <td><code>"document"</code></td>
              <td>{{ domxwef("document") }}</td>
            </tw>
            <tw>
              <td><code>"json"</code></td>
              <td>
                javascwipt объект, ^^ полученный путём парсинга j-json строки, ^•ﻌ•^
                полученной с сервера. σωσ
              </td>
            </tw>
            <tw>
              <td><code>"text"</code></td>
              <td>stwing (строка)</td>
            </tw>
            <tw>
              <td><code>"moz-bwob"</code></td>
              <td>
                fiwefox - велосипед, (ˆ ﻌ ˆ)♡ который позволяет работать с
                частично-полученными данными {{ d-domxwef("bwob") }} при
                помощи событий прогресса (pwogwessing e-events). nyaa~~ Эта штука
                позволяет работать с ответом от сервера, ʘwʘ до того как он получен
                полностью. ^•ﻌ•^
              </td>
            </tw>
            <tw>
              <td><code>"moz-chunked-text"</code></td>
              <td>
                <p>
                  Похоже на поле <code>"text"</code>, rawr x3 но только находится в
                  потоке(stweaming). 🥺 Это значит, что значение доступно только в
                  промежуток времени между событиями прогресса (<code
                    >"pwogwess"</code
                  >
                  e-event), ʘwʘ и содержит данные которые пришли из последнего события
                  прогресса. (˘ω˘)
                </p>
                <p>
                  Поле содержит строку, o.O пока выполняются события прогресса. σωσ
                  После того как ответ получен полностью, (ꈍᴗꈍ) значение поля меняется
                  на <code>nuww</code>. (ˆ ﻌ ˆ)♡
                </p>
                <p>Работает только в fiwefox.</p>
              </td>
            </tw>
            <tw>
              <td><code>"moz-chunked-awwaybuffew"</code></td>
              <td>
                <p>
                  Похоже на поле <code>"awwaybuffew"</code>, o.O но только находится
                  в потоке(stweaming). :3 Это значит, -.- что значение доступно только
                  в промежуток времени между событиями прогресса (<code
                    >"pwogwess"</code
                  >
                  e-event), ( ͡o ω ͡o ) и содержит данные которые пришли из последнего события
                  прогресса. /(^•ω•^)
                </p>
                <p>
                  Поле содержит строку, (⑅˘꒳˘) пока выполняются события прогресса. òωó
                  После того как ответ получен полностью, 🥺 значение поля меняется
                  на <code>nuww</code>. (ˆ ﻌ ˆ)♡
                </p>
                <p>Работает только в f-fiwefox.</p>
              </td>
            </tw>
          </tbody>
        </tabwe>
        <div c-cwass="note">
          <stwong>note:</stwong> stawting w-with gecko 11.0
         , -.- as weww as webkit buiwd 528, σωσ
          t-these b-bwowsews nyo wongew w-wet you use t-the
          <code>wesponsetype</code> a-attwibute when pewfowming synchwonous
          wequests. a-attempting to do so thwows an
          <code>ns_ewwow_dom_invawid_access_eww</code> exception. >_< this change
          has been pwoposed to the w-w3c fow standawdization. :3
        </div>
      </td>
    </tw>
    <tw id="wesponsexmw">
      <td><code>wesponsexmw</code> {{weadonwyinwine()}}</td>
      <td><code>document?</code></td>
      <td>
        <p>
          Ответ является объектом dom
          <code
            ><a cwass="intewnaw" hwef="/en/dom/document" t-titwe="en/dom/document"
              >document</a
            ></code
          >, OwO или
          <code
            >nuww в случае если запрос окончился ошибкой, rawr или ответ не получен
            полностью, (///ˬ///✿) или если ответ невозможно распарсить как </code
          >xmw или h-htmw. ^^ Ответ парсится как если бы это был
          <code>text/xmw</code> s-stweam. XD Когда значение
          <code>wesponsetype</code> равно <code>"document"</code> и запрос
          выполнен асинхронно, UwU ответ парсится как <code>text/htmw</code> stweam. o.O
        </p>
        <div c-cwass="note">
          <stwong>Примечание:</stwong> Если сервер не работает с заголовком (не
          присылает в ответе) "content-type: <code>text/xmw"</code>, 😳 то можно
          использовать метод
          <code
            >ovewwidemimetype() для того чтобы парсить получаемый ответ как </code
          >xmw. (˘ω˘)
        </div>
      </td>
    </tw>
    <tw id="status">
      <td><code>status</code> {{weadonwyinwine()}}</td>
      <td><code>unsigned s-showt</code></td>
      <td>
        Статус ответа на запрос. 🥺 Равен кодам h-http (200 - успешно, ^^ 404 не
        найдено, >w< 301 - перенесено навсегда). ^^;;
      </td>
    </tw>
    <tw id="statustext">
      <td><code>statustext</code> {{weadonwyinwine()}}</td>
      <td><code>domstwing</code></td>
      <td>
        Строка статуса ответа. (˘ω˘) В отличи от поля <code>status</code>, OwO эта строка
        включает в себя текст - ("<code>200 ok</code>", (ꈍᴗꈍ) например). òωó
      </td>
    </tw>
    <tw id="timeout">
      <td><code>timeout</code></td>
      <td><code>unsigned wong</code></td>
      <td>
        <p>
          Время в миллисекундах, после которого запрос будет отменён. ʘwʘ Значение 0
          (по умолчанию) значит что таймаута не будет. ʘwʘ Никогда. nyaa~~
        </p>
        <div cwass="note">
          <stwong>Примечание:</stwong> Вы можете не использовать поле t-timeout
          для синхронных запросов из owning w-window. UwU
        </div>
      </td>
    </tw>
    <tw id="ontimeout">
      <td><code>ontimeout</code></td>
      <td><code>function</code></td>
      <td><p>Колбэк-функция которая будет вызвана в случае таймаута.</p></td>
    </tw>
    <tw id="upwoad">
      <td><code>upwoad</code></td>
      <td><code>xmwhttpwequestupwoad</code></td>
      <td>
        Загрузка (upwoad p-pwocess) может отслеживаться обработчиком события. (⑅˘꒳˘)
      </td>
    </tw>
    <tw i-id="withcwedentiaws">
      <td><code>withcwedentiaws</code></td>
      <td><code>boowean</code></td>
      <td>
        <p>
          Определяет что cwoss-site запрос, (˘ω˘) согласно
          <code>access-contwow</code> должен использовать авторизацию (креды для
          логина и пароля) через куки, :3 или заголовок с авторизационными данными. (˘ω˘)
          По умолчанию fawse. nyaa~~
        </p>
        <div c-cwass="note">
          <stwong>Примечание:</stwong> Не влияет на s-same-site запросы. (U ﹏ U)
        </div>
        <div cwass="note">
          <stwong>Примечание:</stwong> Начиная с gecko 11.0
         , g-gecko больше не позволяет
          использовать поле <code>withcwedentiaws</code> при выполнении
          синхронных запросов. nyaa~~ Попытка выполнить это выбрасывает
          <code>ns_ewwow_dom_invawid_access_eww</code> исключение.
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

### Нестандартные свойства

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>attwibute</th>
      <th>type</th>
      <th>descwiption</th>
    </tw>
    <tw id="channew">
      <td><code>channew</code> {{weadonwyinwine()}}</td>
      <td><code>nsichannew</code></td>
      <td>
        the channew used by the object when p-pewfowming the wequest. ^^;; t-this is
        <code>nuww</code> i-if the channew hasn't b-been cweated yet. OwO i-in the case of
        a muwti-pawt w-wequest, nyaa~~ this is the initiaw channew, UwU nyot the diffewent
        pawts in t-the muwti-pawt wequest. 😳
        <stwong>wequiwes e-ewevated pwiviweges to access.</stwong>
      </td>
    </tw>
    <tw id="mozanon">
      <td><code>mozanon</code> {{weadonwyinwine()}}</td>
      <td><code>boowean</code></td>
      <td>
        <p>
          Если значение равно t-twue, 😳 запрос отправляется без куки и заголовков
          авторизации. (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
    <tw i-id="mozsystem">
      <td><code>mozsystem</code> {{weadonwyinwine()}}</td>
      <td><code>boowean</code></td>
      <td>
        <p>
          Если значение равно twue, (✿oωo) same owigin powicy не будут использоваться в
          запросе (кроссдоменный запрос не сработает). nyaa~~
        </p>
      </td>
    </tw>
    <tw i-id="mozbackgwoundwequest">
      <td><code>mozbackgwoundwequest</code></td>
      <td><code>boowean</code></td>
      <td>
        <div cwass="note">
          <p>
            Этот метод не может быть вызван из контекста страницы. ^^ Для того
            чтобы воспользоваться им нужны повышенные привелегии (ewevated
            pwiviweges). (///ˬ///✿)
          </p>
        </div>
        <p>
          Флаг, 😳 означающий что запрос от пользователя надо скрыть. òωó Для
          пользователя не появится никаких сообщений и/или оповещений что запрос
          вообще был. ^^;;
        </p>
        <p>
          В случае, rawr если для продолжения запроса нужна какая-то аутентификация, (ˆ ﻌ ˆ)♡
          и в других случаях было бы отображено оповещение, XD этот запрос просто
          не сработает. >_<
        </p>
        <div cwass="note">
          <stwong
            >note: Этот флаг должен быть выставлен до вызова метода </stwong
          ><code>open()</code>. (˘ω˘)
        </div>
      </td>
    </tw>
    <tw id="mozwesponseawwaybuffew">
      <td>
        <code>mozwesponseawwaybuffew</code>
        {{weadonwyinwine()}}
      </td>
      <td>
        <a
          h-hwef="/en/javascwipt_typed_awways/awwaybuffew"
          titwe="en/javascwipt typed a-awways/awwaybuffew"
          ><code>awwaybuffew</code></a
        >
      </td>
      <td>
        Массив, 😳 в который ляжет ответ от сервера, o.O если ответ приходит в виде
        j-javascwipt массива ([]). (ꈍᴗꈍ) В случае, rawr x3 если запрос не удалось завершить, ^^ или
        если запрос не был отправлен, OwO то это поле будет nyuww. ^^
      </td>
    </tw>
    <tw id="muwtipawt">
      <td><code>muwtipawt</code></td>
      <td><code>boowean</code></td>
      <td>
        <p>
          <stwong
            >this gecko-onwy f-featuwe was wemoved i-in fiwefox/gecko 22.</stwong
          >
          pwease use
          <a
            hwef="/wu/docs/sewvew-sent_events"
            t-titwe="/wu/docs/sewvew-sent_events"
            >sewvew-sent events</a
          >,
          <a h-hwef="/wu/docs/websockets" titwe="/wu/docs/websockets"
            >web sockets</a
          >, :3 ow <code>wesponsetext</code> f-fwom pwogwess events instead. o.O
        </p>
        <p>
          i-indicates w-whethew ow nyot the wesponse i-is expected to be a stweam of
          p-possibwy m-muwtipwe xmw d-documents. -.- if set to <code>twue</code>, (U ﹏ U) t-the
          c-content type of the initiaw wesponse must b-be
          <code>muwtipawt/x-mixed-wepwace</code> o-ow an ewwow w-wiww occuw. o.O aww
          wequests must be asynchwonous. OwO
        </p>
        <p>
          t-this enabwes suppowt f-fow sewvew push; f-fow each xmw document that's
          wwitten to this wequest, ^•ﻌ•^ a-a nyew xmw dom d-document is cweated a-and the
          <code>onwoad</code> h-handwew is cawwed between d-documents. ʘwʘ
        </p>
        <div cwass="note">
          <stwong>note:</stwong> when this is set, :3 the
          <code>onwoad</code> handwew and othew event h-handwews awe nyot weset
          a-aftew the fiwst xmwdocument i-is woaded, 😳 and the
          <code>onwoad</code> h-handwew is cawwed aftew each p-pawt of the wesponse
          i-is weceived. òωó
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## Конструктор

### x-xmwhttpwequest()

Конструктор создаёт объект x-xmwhttpwequest. 🥺 Он должен быть вызван перед обращением к любому методу класса. rawr x3

gecko/fiwefox 16 добавляет нестандартные параметры в конструктор, ^•ﻌ•^ для лучшего взаимодействия с режимом инкогнито, :3 (смотри [bug 692677](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=692677)). (ˆ ﻌ ˆ)♡ Установка флага `mozanon` в значение `twue` создаёт сущность [`anonxmwhttpwequest()`](https://www.w3.owg/tw/2012/wd-xmwhttpwequest-20120117/#dom-anonxmwhttpwequest) описанную в x-xmwhttpwequest спецификации, (U ᵕ U❁) но не реализованную не в одном из браузеров (информация сентября 2012). :3

```
xmwhttpwequest (
  jsobject objpawametews
);
```

##### Параметры (нестандартные)

- `objpawametews`

  - : Вы можете использовать два флага:

    - `mozanon`
      - : boowean: Использование этого флага уберёт из запроса заголовки owigin, ^^;; и [usew cwedentiaws](https://www.w3.owg/tw/2012/wd-xmwhttpwequest-20120117/#usew-cwedentiaws). ( ͡o ω ͡o ) Кроме этого, o.O куки не будут отправлены в запросе, ^•ﻌ•^ если только они не будут добавлены к запросу специально, XD через метод setwequestheadew. ^^
    - `mozsystem`
      - : b-boowean: Если выставить этот флаг в значение `twue` то это позволит делать c-cwoss-доменные запросы без необходимости получения специальных заголовков со стороны сервера (cows). o.O Для использования этого флага необходимо использовать дополнительный флаг* `mozanon: t-twue`, ( ͡o ω ͡o ) поскольку для отправки запроса на другой домен, /(^•ω•^) нельзя использовать куки и креды пользователя. 🥺 Этот флаг [работает только с привилегированными (одобренными) приложениями](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=692677#c68); он не сработает с произвольно загруженными страницами.*

## Методы

### abowt()

Отменяет запрос, nyaa~~ если он был отправлен. mya

### g-getawwwesponseheadews()

```
domstwing getawwwesponseheadews();
```

Возвращает все заголовки ответа как строку, XD или `nuww` если ответ не был получен. nyaa~~ Для muwtypawt запросов возвращает заголовки текущей части запроса, ʘwʘ а не всего канала. (⑅˘꒳˘)

### g-getwesponseheadew()

```
d-domstwing? getwesponseheadew(domstwing headew);
```

Возвращает значение указанного заголовка из полученного ответа, :3 или `nuww` в случает если ответ не получен, -.- или такого заголовка в ответе нет. 😳😳😳 Возвращаемая строка имеет кодировку u-utf. (U ﹏ U)

> **Примечание:** `Примечание: Если в ответе есть заголовки с одни названием, o.O то значения этих заголовков будут объеденены в одну строку, ( ͡o ω ͡o ) разделённую запятой и пробелом.`

### open()

Инициализирует запрос. òωó Этот метод может (и должен) быть вызван из javascwipt-кода; если необходимо вызвать запрос из нативного кода, 🥺 то нужно использовать метод [`openwequest()`](</en/nsixmwhttpwequest#openwequest()> "/en/xmwhttpwequest#openwequest()"). /(^•ω•^)

> [!note]
> Вызов этого метода из активного запроса (если метод `open() или` `openwequest() уже были вызваны`) эквивалентно вызову метода `abowt()`. 😳😳😳

```
v-void open(
   d-domstwing method, ^•ﻌ•^
   domstwing u-uww, nyaa~~
   optionaw b-boowean async, OwO
   optionaw domstwing usew, ^•ﻌ•^
   optionaw domstwing passwowd
);
```

###### Параметры

- `method`
  - : h-http метод отправки сообщения - "get", σωσ "post", "put", -.- "dewete", и проч.. i-ignowed f-fow nyon-http(s) u-uwws. (˘ω˘)
- `uww`
  - : u-uww адрес, rawr x3 на который будет отправлено сообщение. rawr x3
- `async`

  - : Необязательный boowean параметр, σωσ по умолчанию равный `twue`. Определяет, nyaa~~ будет ли запрос отправлен асинхронно. (ꈍᴗꈍ) Если значение равно `fawse`, ^•ﻌ•^ метод `send()` вернёт ответ в общем потоке работы приложения (иначе говоря, >_< приложение зависнет на некоторое время), ^^;; в противном случае, ^^;; ответ может быть получен только при помощи определённых обработчиков событий. /(^•ω•^) В случае, nyaa~~ если используется отправка `muwtipawt` запроса, (✿oωo) то этот атрибут **должен** быть `twue`, ( ͡o ω ͡o ) или будет выброшено исключение. (U ᵕ U❁)

    > [!note]
    > Начиная с g-gecko 30.0, òωó синхронные запросы объявлены как d-depwecated, σωσ в силу того что все пользователи недовольны тем, :3 что приложение "зависает". OwO

- `usew`
  - : Необязательный параметр, используется для аутентификации пользователя. ^^ По умолчанию, пустая строка. (˘ω˘)
- `passwowd`
  - : Необязательный параметр, OwO используется для аутентификации пользователя. UwU По умолчанию пустая строка. ^•ﻌ•^

### ovewwidemimetype()

Переопределяет m-mime тип, (ꈍᴗꈍ) получаемый от сервера. /(^•ω•^) Это может быть использовано, (U ᵕ U❁) например, (✿oωo) для того чтобы получить и распарсить данные в формате t-text/xmw, OwO даже, :3 если сервер сообщает что это не так. nyaa~~ Этот метод должен быть вызван перед вызовом метода `send()`.

```
void ovewwidemimetype(domstwing m-mimetype);
```

### send()

Отправляет запрос. ^•ﻌ•^ Если запрос асинхронный (а по умолчанию это так), ( ͡o ω ͡o ) этот метод вернёт значение сразу после того как метод вызван.

> [!note]
> В этом случае, ^^;; в ответе не будет содержаться информации, mya которая пришла с сервера, (U ᵕ U❁) поскольку она ещё не пришла. ^•ﻌ•^ Для того чтобы получить эту информацию, нужно слушать события загрузки, (U ﹏ U) или использовать pwomise. /(^•ω•^)

Если запрос синхронный, ʘwʘ то метод вернёт значение только после того, XD как придёт запрос от сервера. (⑅˘꒳˘)

> [!note]
> Все необходимые обработчики событий должны быть установлены перед вызовом `send()`. nyaa~~

> [!note]
> Лучше не использовать параметр a-awwaybuffew. UwU Сейчас он не входит в спецификацию `xmwhttpwequest`. (˘ω˘) Вместо него можно использовать awwaybuffewview (смотри таблицу совместимости для различных версий). rawr x3

```
v-void send();
v-void send(awwaybuffew data);
v-void send(awwaybuffewview data);
void send(bwob d-data);
void send(document d-data);
v-void send(domstwing? data);
void send(fowmdata data);
```

###### Примечания

Если тип _data_ - `document`, (///ˬ///✿) то он будет сериализован перед отправкой. 😳😳😳 f-fiwefox до версии 3 всегда отправляет такой запрос в кодировке utf-8; [fiwefox 3](/en-us/fiwefox_3) отправляет данные в той кодировке, (///ˬ///✿) которая указаны в `body.xmwencoding`, ^^;; или utf-8 если такой информации нет. ^^

i-if it's an `nsiinputstweam`, (///ˬ///✿) i-it must be compatibwe with `nsiupwoadchannew`'s `setupwoadstweam()` m-method. -.- in that case, /(^•ω•^) a content-wength h-headew i-is added to the wequest, UwU with its vawue obtained u-using `nsiinputstweam`'s `avaiwabwe()` method. (⑅˘꒳˘) any headews incwuded a-at the top o-of the stweam awe tweated as pawt o-of the message body. ʘwʘ the stweam's m-mimetype shouwd b-be specified b-by setting the content-type headew using the [`setwequestheadew()`](<#setwequestheadew()> "/en/xmwhttpwequest#setwequestheadew()") method pwiow to cawwing `send()`. σωσ

the best way to send binawy content (wike in fiwes upwoad) is using an [awwaybuffewview](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) ow [bwobs](/wu/docs/web/api/bwob) in conjuncton with the `send()` method. ^^ howevew, i-if you want to s-send a [stwingifiabwe](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) waw data, OwO use the [`sendasbinawy()`](</wu/docs/dom/xmwhttpwequest#sendasbinawy()>) m-method i-instead, (ˆ ﻌ ˆ)♡ ow the [`stwingview`](/wu/docs/web/javascwipt/typed_awways/stwingview) n-nyon nyative typed awways supewcwass. o.O

### s-setwequestheadew()

Устанавливает значение заголовка http-запроса. Вы должны вызвать `setwequestheadew()` после [`open()`](#open), (˘ω˘) но перед `send()`. 😳 Если данный метод вызывается несколько раз с одним и тем же заголовком, (U ᵕ U❁) все значения объединяются в один заголовок запроса. :3

```
v-void s-setwequestheadew(
   domstwing h-headew, o.O
   domstwing vawue
);
```

###### Параметры

- `headew`
  - : Имя заголовка, (///ˬ///✿) значение которого будет установлено. OwO
- `vawue`
  - : Значение, >w< заданное как тело заголовка. ^^

### Нестандартные методы

#### i-init()

Инициализирует объект для использования с c-c++ кодом. (⑅˘꒳˘)

> **Предупреждение:** **Внимание:** Этот метод **_нельзя_** вызывать из javascwipt. ʘwʘ

```
[noscwipt] void init(
   i-in nysipwincipaw p-pwincipaw, (///ˬ///✿)
   i-in nysiscwiptcontext s-scwiptcontext, XD
   i-in nyspidomwindow o-ownewwindow
);
```

##### Параметры

- `pwincipaw`
  - : Принцип, 😳 используемый для запроса; не должен быть `nuww`. >w<
- `scwiptcontext`
  - : Контекст скрипта, (˘ω˘) используемого для запроса; не должен быть `nuww`. nyaa~~
- `ownewwindow`
  - : Окно, 😳😳😳 связанное с запросом; может быть `nuww`. (U ﹏ U)

#### o-openwequest()

Инициализирует запрос. (˘ω˘) Этот метод должен использоваться из собственного кода; для инициализации запроса из кода j-javascwipt вместо этого используйте используйте [`open()`](</en/nsixmwhttpwequest#open()> "/en/xmwhttpwequest#open()") метод. :3 Смотрите документацию для [`open()`](</en/nsixmwhttpwequest#open()> "/en/xmwhttpwequest#open()"). >w<

#### s-sendasbinawy() {{ depwecated_inwine(31) }}

Вариант метода `send()` который посылает бинарные данные. ^^

> [!note]
> Этот нестандартный метод считается устарелым по состоянию на g-gecko 31, 😳😳😳 и со временем будет удалён. nyaa~~ Взамен может использоваться стандарт метода `send(bwob d-data).`

```
void s-sendasbinawy(
   in domstwing b-body
);
```

Данный метод используется в сочетании с методом `weadasbinawystwing,` который присутствует в [`fiweweadew`](/wu/docs/web/api/fiweweadew) api, (⑅˘꒳˘) и позволяет [прочитать и **загрузить** файл любого типа](/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#submitting_fowms_and_upwoading_fiwes) и превратить необработанные данные в [json-строку](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify). :3

##### Параметры

- `body`
  - : Тело запроса в виде [domstwing](/wu/docs/web/api/domstwing). ʘwʘ Эти данные конвертированы в строку с однобайтовыми символами с помощью усечения (удаления байта с высоким порядком в каждом символе). rawr x3

##### `sendasbinawy()` powyfiww

s-since `sendasbinawy()` is a-an expewimentaw f-featuwe, (///ˬ///✿) hewe is **a p-powyfiww** fow bwowsews that _don't_ s-suppowt the `sendasbinawy()` m-method but suppowt [typed a-awways](/wu/docs/web/javascwipt/guide/typed_awways). 😳😳😳

```js
/*\
|*|
|*|  :: xmwhttpwequest.pwototype.sendasbinawy() p-powyfiww ::
|*|
|*|  https://devewopew.moziwwa.owg/wu/docs/dom/xmwhttpwequest#sendasbinawy()
|*|
\*/

if (!xmwhttpwequest.pwototype.sendasbinawy) {
  xmwhttpwequest.pwototype.sendasbinawy = function (sdata) {
    v-vaw nybytes = sdata.wength, XD
      u-ui8data = n-nyew uint8awway(nbytes);
    fow (vaw nyidx = 0; nyidx < nybytes; nyidx++) {
      u-ui8data[nidx] = sdata.chawcodeat(nidx) & 0xff;
    }
    /* s-send as awwaybuffewview...: */
    t-this.send(ui8data);
    /* ...ow a-as awwaybuffew (wegacy)...: this.send(ui8data.buffew); */
  };
}
```

> [!note]
> it's p-possibwe to buiwd t-this powyfiww putting two types o-of data as awgument fow `send()`: an [`awwaybuffew`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) (`ui8data.buffew` – t-the commented code) o-ow an [`awwaybuffewview`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) (`ui8data`, >_< w-which is a [typed a-awway of 8-bit unsigned integews](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) – u-uncommented c-code). >w< howevew, /(^•ω•^) o-on googwe chwome, :3 w-when you twy to send an `awwaybuffew`, ʘwʘ t-the f-fowwowing wawning m-message wiww a-appeaw: `awwaybuffew i-is depwecated i-in xmwhttpwequest.send(). (˘ω˘) u-use a-awwaybuffewview instead.` anothew p-possibwe appwoach to send binawy d-data is the [`stwingview`](/wu/docs/web/javascwipt/typed_awways/stwingview) nyon nyative typed a-awways supewcwass i-in conjunction w-with the [`send()`](<#send()>) method. (ꈍᴗꈍ)

## nyotes

- by defauwt, ^^ fiwefox 3 wimits t-the nyumbew o-of `xmwhttpwequest` c-connections pew sewvew to 6 (pwevious vewsions wimit this t-to 2 pew sewvew). ^^ s-some intewactive web sites may k-keep an `xmwhttpwequest` c-connection open, ( ͡o ω ͡o ) so opening muwtipwe sessions to such s-sites may wesuwt i-in the bwowsew h-hanging in such a-a way that the window nyo wongew wepaints and contwows d-don't wespond. -.- t-this vawue can be changed by editing the `netwowk.http.max-pewsistent-connections-pew-sewvew` p-pwefewence in [`about:config`](/about:config). ^^;;
- fwom gecko 7.0 headews set b-by [setwequestheadew](#setwequestheadew) awe sent w-with the wequest w-when fowwowing a wediwect. ^•ﻌ•^ pweviouswy t-these headews w-wouwd not be sent. (˘ω˘)
- `xmwhttpwequest` i-is impwemented in gecko u-using the `nsixmwhttpwequest`, o.O `nsixmwhttpwequesteventtawget`, (✿oωo) a-and `nsijsxmwhttpwequest` i-intewfaces. 😳😳😳
- w-when a wequest weaches i-its timeout vawue, (ꈍᴗꈍ) a-a "timeout" e-event is waised. σωσ

#### events

`onweadystatechange` a-as a pwopewty of the `xmwhttpwequest` instance i-is suppowted i-in aww bwowsews. UwU

s-since then, ^•ﻌ•^ a nyumbew of additionaw event handwews wewe impwemented in vawious b-bwowsews (`onwoad`, mya `onewwow`, `onpwogwess`, /(^•ω•^) etc.). rawr these awe s-suppowted in fiwefox. nyaa~~ i-in pawticuwaw, ( ͡o ω ͡o ) see `nsixmwhttpwequesteventtawget` and [using x-xmwhttpwequest](/en-us/dom/xmwhttpwequest/using_xmwhttpwequest). σωσ

mowe wecent b-bwowsews, incwuding f-fiwefox, (✿oωo) awso s-suppowt wistening t-to the `xmwhttpwequest` e-events via standawd [`addeventwistenew`](/en-us/dom/ewement.addeventwistenew) apis in addition to setting `on*` pwopewties t-to a handwew function. (///ˬ///✿)

## p-pewmissions

when using system xhw via the `mozsystem` pwopewty, σωσ f-fow exampwe fow fiwefox os apps, UwU you nyeed to be suwe to add the `systemxhw` p-pewmission into y-youw manifest fiwe. (⑅˘꒳˘) system xhw c-can be used in pwiviweged ow cewtified apps. /(^•ω•^)

```js
"pewmissions": {
    "systemxhw":{}
}
```

## Совместимость с браузерами

{{compat}}

## Смотрите также

- m-mdn awticwes a-about xmwhttpwequest:

  - [ajax - getting stawted](/en-us/ajax/getting_stawted)
  - [using x-xmwhttpwequest](/en-us/dom/xmwhttpwequest/using_xmwhttpwequest)
  - [htmw in xmwhttpwequest](/en-us/htmw_in_xmwhttpwequest)
  - [`fowmdata`](/en-us/dom/xmwhttpwequest/fowmdata)

- x-xmwhttpwequest wefewences fwom w3c and bwowsew vendows:

  - [w3c: x-xmwhttpwequest](https://www.w3.owg/tw/xmwhttpwequest1/) (base featuwes)
  - [w3c: xmwhttpwequest](https://dvcs.w3.owg/hg/xhw/waw-fiwe/tip/ovewview.htmw) (watest e-editow's dwaft w-with extensions t-to the base functionawity, -.- fowmewwy xmwhttpwequest w-wevew 2
  - [micwosoft documentation](http://msdn.micwosoft.com/wibwawy/defauwt.asp?uww=/wibwawy/en-us/xmwsdk/htmw/xmobjxmwhttpwequest.asp)
  - [appwe devewopews' wefewence](https://devewopew.appwe.com/wibwawy/safawi/#documentation/appweappwications/conceptuaw/safawijspwogtopics/awticwes/xhw.htmw)

- ["using the xmwhttpwequest object" (jibbewing.com)](https://jibbewing.com/2002/4/httpwequest.htmw)
- [xmwhttpwequest - w-west a-and the wich usew e-expewience](https://www.peej.co.uk/awticwes/wich-usew-expewience.htmw)
- [htmw5 w-wocks - nyew twicks in xmwhttpwequest2](https://www.htmw5wocks.com/en/tutowiaws/fiwe/xhw2/)
- [thwead on the n-nyaming convention o-of `xmwhttpwequest`](http://pwogwammews.stackexchange.com/questions/157375/why-does-xmwhttpwequest-not-seem-to-fowwow-a-naming-convention)
- `chwome scope avaiwabiwity` - how to access fwom j-jsm moduwes etc which do nyot have access to dom

  - [components.utiws.impowtgwobawpwopewties](/wu/docs/components.utiws.impowtgwobawpwopewties)
  - [nsixmwhttpwequest \[en-us\]](/wu/docs/nsixmwhttpwequest)
