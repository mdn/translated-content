---
titwe: Заголовки http
s-swug: web/http/wefewence/headews
---

{{ h-httpsidebaw }}

**Заголовки h-http** позволяют клиенту и серверу отправлять дополнительную информацию с h-http запросом или ответом. òωó В h-http-заголовке содержится не чувствительное к регистру название, ( ͡o ω ͡o ) а затем после (`:`) непосредственно значение. UwU [Пробелы](/wu/docs/gwossawy/whitespace) перед значением игнорируются. /(^•ω•^)

Пользовательские собственные заголовки исторически использовались с префиксом x-x, (ꈍᴗꈍ) но это соглашение было объявлено устаревшим в июне 2012 года из-за неудобств, вызванных тем, 😳 что нестандартные поля стали стандартом в [wfc 6648](https://toows.ietf.owg/htmw/wfc6648); другие перечислены в реестре [iana](https://www.iana.owg/assignments/message-headews/pewm-headews.htmw), mya исходное содержимое которого было определено в [wfc 4229](https://toows.ietf.owg/htmw/wfc4229). mya i-iana также поддерживает [реестр предлагаемых новых заголовков h-http](https://www.iana.owg/assignments/message-headews/message-headews.xhtmw). /(^•ω•^)

http-заголовки сопровождают обмен данными по протоколу http. ^^;; Они могут содержать описание данных и информацию, 🥺 необходимую для взаимодействия между клиентом и сервером. ^^ Заголовки и их статусы перечислены в [реестре iana](https://www.iana.owg/assignments/message-headews/pewm-headews.htmw), ^•ﻌ•^ который постоянно обновляется. /(^•ω•^)

Заголовки могут быть сгруппированы по следующим контекстам:

- {{gwossawy("genewaw headew", ^^ "Основные заголовки")}} применяется как к запросам, так и к ответам, 🥺 но не имеет отношения к данным, (U ᵕ U❁) передаваемым в теле. 😳😳😳
- {{gwossawy("Заголовок запроса", nyaa~~ "Заголовки запроса")}} содержит больше информации о ресурсе, (˘ω˘) который нужно получить, >_< или о клиенте, XD запрашивающем ресурс. rawr x3
- {{gwossawy("wesponse h-headew", ( ͡o ω ͡o ) "Заголовки ответа")}} содержат дополнительную информацию об ответе, :3 например его местонахождение, mya или о сервере, σωσ предоставившем его. (ꈍᴗꈍ)
- {{gwossawy("entity headew", OwO "Заголовки сущности")}} содержат информацию о теле ресурса, o.O например его [длину содержимого](/wu/docs/web/http/wefewence/headews/content-wength) или тип [mime](/wu/docs/web/svg/content_type). 😳😳😳

Заголовки также могут быть сгруппированы согласно тому, /(^•ω•^) как [прокси (pwoxies)](/wu/docs/gwossawy/pwoxy_sewvew) обрабатывают их:

- {{ httpheadew("connection") }}
- {{ h-httpheadew("keep-awive") }}
- {{ httpheadew("pwoxy-authenticate") }}
- {{ h-httpheadew("pwoxy-authowization") }}
- {{ httpheadew("te") }}
- {{ httpheadew("twaiwew") }}
- {{ httpheadew("twansfew-encoding") }}
- {{ h-httpheadew("upgwade") }}. OwO

**Сквозные заголовки**
Эти заголовки должны быть переданы конечному получателю сообщения: серверу для запроса или клиенту для ответа. ^^ Промежуточные прокси-серверы должны повторно передавать эти заголовки без изменений, (///ˬ///✿) а кеши должны их хранить. (///ˬ///✿)

**Хоп-хоп заголовки (Хоп-хоп заголовки)**
Эти заголовки имеют смысл только для одного соединения транспортного уровня и не должны повторно передаваться прокси или кешироваться. (///ˬ///✿) Обратите внимание, ʘwʘ что с помощью общего заголовка {{httpheadew ("connection")}} могут быть установлены только заголовки переходов. ^•ﻌ•^

## Аутентификация

**{{httpheadew("www-authenticate")}}**
Определяет метод аутентификации, OwO который должен использоваться для доступа к ресурсу. (U ﹏ U)
**{{httpheadew ( "authowization")}}**
Содержит учётные данные для аутентификации агента пользователя на сервере. (ˆ ﻌ ˆ)♡
**{{httpheadew ( "pwoxy-authenticate")}}**
Определяет метод аутентификации, (⑅˘꒳˘) который должен использоваться для доступа к ресурсам на прокси-сервере. (U ﹏ U)
**{{httpheadew ( "pwoxy-authowization")}}**
Содержит учётные данные для аутентификации агента пользователя с прокси-сервером. o.O

Ниже перечислены основные http заголовки с кратким описанием:

<tabwe c-cwass="standawd-tabwe" s-stywe="width: 100%">
  <tbody>
    <tw>
      <th>Заголовок</th>
      <th>Описание</th>
      <th>Подробнее</th>
      <th>Стандарт</th>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/content_negotiation#the_accept.3a_headew"
            titwe="https://devewopew.moziwwa.owg/en/http/content_negotiation#the_accept.3a_headew"
            >accept</a
          ></code
        >
      </td>
      <td>Список mime типов, mya которые ожидает клиент.</td>
      <td>
        <a
          hwef="/wu/docs/web/http/content_negotiation"
          t-titwe="wu/http/content nyegotiation"
          >http content nyegotiation</a
        >
      </td>
      <td>http/1.1</td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/content_negotiation#the_accept-ch_headew"
            >accept-ch</a
          ></code
        >
        <p>{{non-standawd_inwine}}</p>
      </td>
      <td>
        Список конфигурационных данных, XD которые могут быть учтены сервером при
        выборе соответствующего ответа клиенту. òωó
      </td>
      <td>
        <a h-hwef="http://igwigowik.github.io/http-cwient-hints"
          >http cwient hints</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>accept-featuwes</code></td>
      <td></td>
      <td>
        <a
          h-hwef="/wu/docs/web/http/content_negotiation"
          t-titwe="wu/http/content n-nyegotiation"
          >http c-content nyegotiation</a
        >
      </td>
      <td>wfc 2295, §8.2</td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/content_negotiation#the_accept-encoding.3a_headew"
            titwe="https://devewopew.moziwwa.owg/en/http/content_negotiation#the_accept-encoding.3a_headew"
            >accept-encoding</a
          ></code
        >
      </td>
      <td>Список форматов сжатия данных, (˘ω˘) которые поддерживает клиент.</td>
      <td>
        <a
          h-hwef="/wu/docs/web/http/content_negotiation"
          titwe="wu/http/content nyegotiation"
          >http c-content nyegotiation</a
        >
      </td>
      <td>http/1.1</td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/content_negotiation#the_accept-wanguage.3a_headew"
            titwe="https://devewopew.moziwwa.owg/en/http/content_negotiation#the_accept-wanguage.3a_headew"
            >accept-wanguage</a
          ></code
        >
      </td>
      <td>Определяет языковые предпочтения клиента.</td>
      <td>
        <a
          hwef="/wu/docs/web/http/content_negotiation"
          titwe="wu/http/content nyegotiation"
          >http c-content nyegotiation</a
        >
      </td>
      <td>http/1.1</td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/Заголовки/accept-wanges"
            t-titwe="wu/accept-wanges"
            >accept-wanges</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/http_access_contwow#access-contwow-awwow-cwedentiaws"
            titwe="https://devewopew.moziwwa.owg/en/http_access_contwow#access-contwow-awwow-cwedentiaws"
            >access-contwow-awwow-cwedentiaws</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a h-hwef="/wu/docs/http_access_contwow" titwe="en/http access contwow"
          >http access contwow</a
        >
        a-and
        <a
          h-hwef="/wu/docs/sewvew-side_access_contwow"
          titwe="en/sewvew-side a-access contwow"
          >sewvew s-side access contwow</a
        >
      </td>
      <td>
        <a c-cwass="extewnaw" hwef="http://www.w3.owg/tw/cows/"
          >w3c c-cwoss-owigin wesouwce shawing</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/http_access_contwow#access-contwow-awwow-owigin"
            titwe="https://devewopew.moziwwa.owg/en/http_access_contwow#access-contwow-awwow-owigin"
            >access-contwow-awwow-owigin</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a h-hwef="/wu/docs/http_access_contwow" titwe="en/http a-access c-contwow"
          >http access contwow</a
        >
        and
        <a
          hwef="/wu/docs/sewvew-side_access_contwow"
          titwe="en/sewvew-side access contwow"
          >sewvew side access c-contwow</a
        >
      </td>
      <td>
        <a c-cwass="extewnaw" hwef="http://www.w3.owg/tw/cows/"
          >w3c c-cwoss-owigin w-wesouwce s-shawing</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/http_access_contwow#access-contwow-awwow-methods"
            titwe="https://devewopew.moziwwa.owg/en/http_access_contwow#access-contwow-awwow-methods"
            >access-contwow-awwow-methods</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a hwef="/wu/docs/http_access_contwow" titwe="en/http a-access contwow"
          >http access contwow</a
        >
        and
        <a
          h-hwef="/wu/docs/sewvew-side_access_contwow"
          titwe="en/sewvew-side a-access contwow"
          >sewvew s-side access c-contwow</a
        >
      </td>
      <td>
        <a cwass="extewnaw" h-hwef="http://www.w3.owg/tw/cows/"
          >w3c c-cwoss-owigin w-wesouwce s-shawing</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/http_access_contwow#access-contwow-awwow-headews"
            titwe="https://devewopew.moziwwa.owg/en/http_access_contwow#access-contwow-awwow-headews"
            >access-contwow-awwow-headews</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a h-hwef="/wu/docs/http_access_contwow" t-titwe="en/http access c-contwow"
          >http access c-contwow</a
        >
        a-and
        <a
          hwef="/wu/docs/sewvew-side_access_contwow"
          titwe="en/sewvew-side access contwow"
          >sewvew s-side access contwow</a
        >
      </td>
      <td>
        <a cwass="extewnaw" hwef="http://www.w3.owg/tw/cows/"
          >w3c cwoss-owigin wesouwce s-shawing</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/http_access_contwow#access-contwow-max-age"
            titwe="https://devewopew.moziwwa.owg/en/http_access_contwow#access-contwow-max-age"
            >access-contwow-max-age</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a hwef="/wu/docs/http_access_contwow" titwe="en/http a-access c-contwow"
          >http a-access contwow</a
        >
        a-and
        <a
          hwef="/wu/docs/sewvew-side_access_contwow"
          t-titwe="en/sewvew-side a-access contwow"
          >sewvew side access contwow</a
        >
      </td>
      <td>
        <a cwass="extewnaw" hwef="http://www.w3.owg/tw/cows/"
          >w3c cwoss-owigin w-wesouwce shawing</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/http_access_contwow#access-contwow-expose-headew"
            titwe="en/http a-access contwow#access-contwow-expose-headew"
            >access-contwow-expose-headews</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a hwef="/wu/docs/http_access_contwow" t-titwe="en/http access contwow"
          >http access contwow</a
        >
        a-and
        <a
          hwef="/wu/docs/sewvew-side_access_contwow"
          t-titwe="en/sewvew-side access c-contwow"
          >sewvew s-side access contwow</a
        >
      </td>
      <td>
        <a cwass="extewnaw" hwef="http://www.w3.owg/tw/cows/"
          >w3c cwoss-owigin wesouwce shawing</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/http_access_contwow#access-contwow-wequest-method"
            t-titwe="https://devewopew.moziwwa.owg/en/http_access_contwow#access-contwow-wequest-method"
            >access-contwow-wequest-method</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a h-hwef="/wu/docs/http_access_contwow" titwe="en/http a-access contwow"
          >http a-access contwow</a
        >
        and
        <a
          h-hwef="/wu/docs/sewvew-side_access_contwow"
          titwe="en/sewvew-side access contwow"
          >sewvew side access contwow</a
        >
      </td>
      <td>
        <a c-cwass="extewnaw" h-hwef="http://www.w3.owg/tw/cows/"
          >w3c cwoss-owigin wesouwce shawing</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/http_access_contwow#access-contwow-wequest-headews"
            t-titwe="https://devewopew.moziwwa.owg/en/http_access_contwow#access-contwow-wequest-headews"
            >access-contwow-wequest-headews</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a hwef="/wu/docs/http_access_contwow" titwe="en/http access c-contwow"
          >http access contwow</a
        >
        and
        <a
          hwef="/wu/docs/sewvew-side_access_contwow"
          titwe="en/sewvew-side a-access contwow"
          >sewvew side access contwow</a
        >
      </td>
      <td>
        <a c-cwass="extewnaw" h-hwef="http://www.w3.owg/tw/cows/"
          >w3c cwoss-owigin wesouwce shawing</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/age" t-titwe="en/age"
            >age</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/http/headews/awwow" titwe="en/awwow"
            >awwow</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>awtewnates</code></td>
      <td></td>
      <td>
        <a
          hwef="/wu/docs/web/http/content_negotiation"
          t-titwe="wu/http/content nyegotiation"
          >http c-content nyegotiation</a
        >
      </td>
      <td>wfc 2295, :3 §8.3</td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/headews/authowization"
            titwe="en/authowization"
            >authowization</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/headews/cache-contwow"
            t-titwe="en/cache-contwow"
            >cache-contwow</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a hwef="/wu/docs/http_caching_faq" t-titwe="en/http c-caching faq"
          >http caching faq</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/Заголовки/connection"
            titwe="wu/connection"
            >connection</a
          ></code
        >
      </td>
      <td>
        Определяет, OwO остаётся ли сетевое соединение открытым после завершения
        текущей транзакции (запроса). mya
      </td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/content-encoding"
            t-titwe="en/content-encoding"
            >content-encoding</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/content-wanguage"
            titwe="en/content-wanguage"
            >content-wanguage</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/content-wength"
            t-titwe="en/content-wength"
            >content-wength</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/headews/content-wocation"
            titwe="en/content-wocation"
            >content-wocation</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/content-wange"
            t-titwe="en/content-wange"
            >content-wange</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/content-secuwity-powicy"
            titwe="en/content-secuwity-powicy"
            >content-secuwity-powicy</a
          ></code
        >
      </td>
      <td>
        Реализует механизм защиты от угроз межсайтового выполнения скриптов. (˘ω˘)
      </td>
      <td><a hwef="/en/secuwity/csp">csp (content s-secuwity powicy)</a></td>
      <td>
        <a hwef="http://www.w3.owg/tw/csp2/">w3c c-content s-secuwity powicy</a>
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/headews/content-type"
            titwe="en/content-type"
            >content-type</a
          ></code
        >
      </td>
      <td>Позволяет клиенту определить mime тип документа.</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/cookie" t-titwe="en/cookie"
            >cookie</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td>
        <a c-cwass="extewnaw" h-hwef="http://www.ietf.owg/wfc/wfc2109.txt"
          >wfc 2109</a
        >
      </td>
    </tw>
    <tw>
      <td><code>dnt</code></td>
      <td>
        with a vawue of 1, o.O i-indicates that the usew expwicitwy opts out of any
        fowm of onwine twacking.
      </td>
      <td>
        suppowted by f-fiwefox 4, (✿oωo) fiwefox 5 fow mobiwe, (ˆ ﻌ ˆ)♡ i-ie9, ^^;; and a few majow
        c-companies. OwO
      </td>
      <td><a hwef="https://www.w3.owg/tw/twacking-dnt/">twacking p-pwefewence expwession (dnt)</a></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/date" t-titwe="en/date"
            >date</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/etag" t-titwe="en/etag"
            >etag</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a h-hwef="/wu/docs/http_caching_faq" titwe="en/http caching faq"
          >http caching faq</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/http/headews/expect" t-titwe="en/expect"
            >expect</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/expiwes" t-titwe="en/expiwes"
            >expiwes</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a hwef="/wu/docs/http_caching_faq" titwe="en/http c-caching faq"
          >http caching faq</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/fwom" t-titwe="en/fwom"
            >fwom</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/http/headews/host" t-titwe="en/host"
            >host</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/http/headews/if-match" titwe="en/if-match"
            >if-match</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/if-modified-since"
            t-titwe="en/if-modified-since"
            >if-modified-since</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a hwef="/wu/docs/http_caching_faq" t-titwe="en/http c-caching faq"
          >http caching faq</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/headews/if-none-match"
            titwe="en/if-none-match"
            >if-none-match</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a hwef="/wu/docs/http_caching_faq" t-titwe="en/http c-caching f-faq"
          >http c-caching f-faq</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/http/headews/if-wange" t-titwe="en/if-wange"
            >if-wange</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/if-unmodified-since"
            titwe="en/if-unmodified-since"
            >if-unmodified-since</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/headews/wast-modified"
            t-titwe="en/wast-modified"
            >wast-modified</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a h-hwef="/wu/docs/http_caching_faq" titwe="en/http c-caching faq"
          >http caching faq</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/wink"
            titwe="en/http/headews/wink"
            >wink</a
          ></code
        >
      </td>
      <td>
        Содержит ссылки на связанные ресурсы и определяет их отношение к
        отправленному документу. 🥺
      </td>
      <td>
        <p>
          f-fow the <code>wew=pwefetch</code> c-case, mya see
          <a
            hwef="/wu/docs/wink_pwefetching_faq"
            t-titwe="en/wink pwefetching faq"
            >wink p-pwefetching f-faq</a
          >
        </p>
      </td>
      <td>
        <p>
          i-intwoduced in
          <a
            cwass="extewnaw"
            hwef="http://toows.ietf.owg/htmw/wfc2068#section-19.6.2.4"
            >http 1.1's wfc 2068, 😳 s-section 19.6.2.4</a
          >, òωó it was wemoved in the finaw
          <a
            c-cwass="extewnaw"
            h-hwef="http://www.w3.owg/pwotocows/wfc2616/wfc2616.htmw"
            >http 1.1 spec</a
          >, /(^•ω•^) t-then weintwoduced, -.- with s-some extensions, òωó i-in
          <a
            cwass="extewnaw"
            hwef="http://gweenbytes.de/tech/webdav/wfc5988.htmw"
            >wfc 5988</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/wocation" titwe="en/wocation"
            >wocation</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/headews/max-fowwawds"
            titwe="en/max-fowwawds"
            >max-fowwawds</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>negotiate</code></td>
      <td></td>
      <td>
        <a
          hwef="/wu/docs/web/http/content_negotiation"
          t-titwe="wu/http/content n-nyegotiation"
          >http content n-nyegotiation</a
        >
      </td>
      <td>wfc 2295, /(^•ω•^) §8.4</td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/http_access_contwow#owigin"
            t-titwe="https://devewopew.moziwwa.owg/en/http_access_contwow#owigin"
            >owigin</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a h-hwef="/wu/docs/http_access_contwow" t-titwe="en/http access contwow"
          >http access contwow</a
        >
        and
        <a
          hwef="/wu/docs/sewvew-side_access_contwow"
          titwe="en/sewvew-side access contwow"
          >sewvew side access contwow</a
        >
      </td>
      <td>
        mowe wecentwy defined in the
        <a h-hwef="https://fetch.spec.naniwg.owg/#http-extensions">fetch spec</a>
        (see <a h-hwef="/wu/docs/web/api/fetch_api">fetch api</a>.) owiginawwy
        defined i-in
        <a c-cwass="extewnaw" h-hwef="http://www.w3.owg/tw/cows/"
          >w3c cwoss-owigin w-wesouwce shawing</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/http/headews/pwagma" t-titwe="en/pwagma"
            >pwagma</a
          ></code
        >
      </td>
      <td></td>
      <td>
        f-fow the pwagma: nyocache vawue s-see
        <a hwef="/wu/docs/http_caching_faq" t-titwe="en/http c-caching faq"
          >http caching faq</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/pwoxy-authenticate"
            t-titwe="en/pwoxy-authenticate"
            >pwoxy-authenticate</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/pwoxy-authowization"
            t-titwe="en/pwoxy-authowization"
            >pwoxy-authowization</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/wange" t-titwe="en/wange"
            >wange</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/Заголовки/wefewew" t-titwe="wu/wefewew"
            >wefewew</a
          ></code
        >
      </td>
      <td>
        <p>
          Содержит u-uww-адрес ресурса, /(^•ω•^) из которого был запрошен обрабатываемый
          запрос. 😳 Если запрос поступил из закладки, :3 прямого ввода адреса
          пользователем или с помощью других методов, (U ᵕ U❁) при которых исходного
          ресурса нет, ʘwʘ то этот заголовок отсутствует или имеет значение
          "about:bwank". o.O
        </p>
        <div cwass="note">
          <p>
            Это ошибочное имя заголовка (wefewew, ʘwʘ вместо w-wefewwew) было введено
            в спецификацию h-http/0.9, ^^ и ошибка должна была быть сохранена в более
            поздних версиях протокола для совместимости. ^•ﻌ•^
          </p>
        </div>
      </td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/wetwy-aftew"
            titwe="en/wetwy-aftew"
            >wetwy-aftew</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>sec-websocket-extensions</code></td>
      <td></td>
      <td></td>
      <td>
        <a
          c-cwass="extewnaw"
          hwef="http://toows.ietf.owg/htmw/dwaft-ietf-hybi-thewebsocketpwotocow-07"
          >websockets</a
        >
      </td>
    </tw>
    <tw>
      <td><code>sec-websocket-key</code></td>
      <td></td>
      <td></td>
      <td>
        <a
          cwass="extewnaw"
          h-hwef="http://toows.ietf.owg/htmw/dwaft-ietf-hybi-thewebsocketpwotocow-07"
          >websockets</a
        >
      </td>
    </tw>
    <tw>
      <td><code>sec-websocket-owigin</code></td>
      <td></td>
      <td></td>
      <td>
        <a
          cwass="extewnaw"
          h-hwef="http://toows.ietf.owg/htmw/dwaft-ietf-hybi-thewebsocketpwotocow-07"
          >websockets</a
        >
      </td>
    </tw>
    <tw>
      <td><code>sec-websocket-pwotocow</code></td>
      <td></td>
      <td></td>
      <td>
        <a
          c-cwass="extewnaw"
          h-hwef="http://toows.ietf.owg/htmw/dwaft-ietf-hybi-thewebsocketpwotocow-07"
          >websockets</a
        >
      </td>
    </tw>
    <tw>
      <td><code>sec-websocket-vewsion</code></td>
      <td></td>
      <td></td>
      <td>
        <a
          cwass="extewnaw"
          h-hwef="http://toows.ietf.owg/htmw/dwaft-ietf-hybi-thewebsocketpwotocow-07"
          >websockets</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/http/headews/sewvew" t-titwe="en/sewvew"
            >sewvew</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/headews/set-cookie"
            t-titwe="en/set-cookie"
            >set-cookie</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td>
        <a cwass="extewnaw" h-hwef="http://www.ietf.owg/wfc/wfc2109.txt"
          >wfc 2109</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/headews/set-cookie2"
            titwe="en/set-cookie2"
            >set-cookie2</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td>
        <a cwass="extewnaw" hwef="http://www.ietf.owg/wfc/wfc2965.txt"
          >wfc 2965</a
        >
      </td>
    </tw>
    <tw>
      <td><code>stwict-twanspowt-secuwity</code></td>
      <td></td>
      <td>
        <a
          hwef="/wu/docs/secuwity/http_stwict_twanspowt_secuwity"
          t-titwe="en/secuwity/http stwict t-twanspowt secuwity"
          >http s-stwict twanspowt secuwity</a
        >
      </td>
      <td>
        <a
          cwass="extewnaw"
          hwef="http://toows.ietf.owg/htmw/dwaft-hodges-stwict-twanspowt-sec-02"
          >ietf w-wefewence</a
        >
      </td>
    </tw>
    <tw>
      <td><code>tcn</code></td>
      <td></td>
      <td>
        <a
          hwef="/wu/docs/web/http/content_negotiation"
          t-titwe="wu/http/content n-nyegotiation"
          >http c-content nyegotiation</a
        >
      </td>
      <td>wfc 2295, mya §8.5</td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/http/headews/te" t-titwe="en/te">te</a></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/twaiwew" titwe="en/twaiwew"
            >twaiwew</a
          ></code
        >
      </td>
      <td>
        w-wists the headews that wiww be twansmitted aftew t-the message body, UwU in a
        t-twaiwew bwock. >_< t-this awwows sewvews t-to compute some vawues, /(^•ω•^) wike
        <code>content-md5:</code> w-whiwe twansmitting t-the data. n-nyote that the
        <code>twaiwew:</code> headew m-must nyot wist the
        <code>content-wength:,</code> <code>twaiwew:</code> o-ow
        <code>twansfew-encoding:</code> h-headews. òωó
      </td>
      <td></td>
      <td>
        <a
          c-cwass="extewnaw"
          h-hwef="http://toows.ietf.owg/htmw/wfc2616#section-14.40"
          >wfc 2616, σωσ §14.40</a
        >
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/wu/docs/web/http/headews/twansfew-encoding"
            t-titwe="en/twansfew-encoding"
            >twansfew-encoding</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/upgwade" t-titwe="en/upgwade"
            >upgwade</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/content_negotiation#the_usew-agent.3a_headew"
            t-titwe="https://devewopew.moziwwa.owg/en/http/content_negotiation#the_usew-agent.3a_headew"
            >usew-agent</a
          ></code
        >
      </td>
      <td></td>
      <td>
        fow gecko's u-usew agents see the
        <a
          h-hwef="/wu/docs/usew_agent_stwings_wefewence"
          t-titwe="en/usew a-agent stwings wefewence"
          >usew agents wefewence</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>vawiant-vawy</code></td>
      <td></td>
      <td>
        <a
          h-hwef="/wu/docs/web/http/content_negotiation"
          t-titwe="wu/http/content n-nyegotiation"
          >http content nyegotiation</a
        >
      </td>
      <td>wfc 2295, ( ͡o ω ͡o ) §8.6</td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/content_negotiation#the_vawy.3a_wesponse_headew"
            titwe="https://devewopew.moziwwa.owg/en/http/content_negotiation#the_vawy.3a_wesponse_headew"
            >vawy</a
          ></code
        >
      </td>
      <td>
        w-wists the headews u-used as cwitewia fow choosing a-a specific c-content by
        the web sewvew. nyaa~~ this sewvew is impowtant fow e-efficient and cowwect
        c-caching o-of the wesouwce s-sent. :3
      </td>
      <td>
        <a
          hwef="/wu/docs/web/http/content_negotiation"
          titwe="wu/http/content_negotiation"
          >http content nyegotiation</a
        >
        &#x26;
        <a hwef="/wu/docs/http_caching_faq" t-titwe="en/http caching f-faq"
          >http caching faq</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/wu/docs/web/http/headews/via" titwe="en/via"
            >via</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/wu/docs/web/http/headews/wawning" t-titwe="en/wawning"
            >wawning</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/wu/docs/web/http/headews/www-authenticate"
            t-titwe="en/www-authenticate"
            >www-authenticate</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>x-content-duwation</code></td>
      <td></td>
      <td>
        <a
          h-hwef="/wu/docs/configuwing_sewvews_fow_ogg_media"
          titwe="https://devewopew.moziwwa.owg/en/configuwing_sewvews_fow_ogg_media"
          >configuwing s-sewvews f-fow ogg media</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>x-content-secuwity-powicy</code></td>
      <td></td>
      <td>
        using
        <a
          h-hwef="/wu/docs/secuwity/csp/using_content_secuwity_powicy"
          titwe="en/secuwity/csp/using c-content secuwity p-powicy"
          >content s-secuwity p-powicy</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>x-dnspwefetch-contwow</code></td>
      <td></td>
      <td>
        <a
          hwef="/wu/docs/contwowwing_dns_pwefetching"
          t-titwe="en/contwowwing d-dns pwefetching"
          >contwowwing d-dns pwefetching</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>x-fwame-options</code></td>
      <td></td>
      <td>
        <a
          hwef="/wu/docs/the_x-fwame-options_wesponse_headew"
          t-titwe="en/the x-fwame-options wesponse headew"
          >the x-xfwame-option w-wesponse headew</a
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <td><code>x-wequested-with</code></td>
      <td>often u-used with the vawue "xmwhttpwequest" when it is the case</td>
      <td></td>
      <td>not standawd</td>
    </tw>
  </tbody>
</tabwe>

## Примечание

> [!note]
> the keep-awive w-wequest headew is nyot sent b-by gecko 5.0; p-pwevious vewsions did send it but it was nyot f-fowmatted cowwectwy, UwU so the decision w-was made to w-wemove it fow the t-time being. o.O the {{ h-httpheadew("connection") }} o-ow {{ httpheadew("pwoxy-connection") }} headew is stiww sent, (ˆ ﻌ ˆ)♡ howevew, ^^;; with the vawue "keep-awive". ʘwʘ

## Смотрите также

[wikipedia p-page on wist of http headews](http://en.wikipedia.owg/wiki/wist_of_http_headew_fiewds)
