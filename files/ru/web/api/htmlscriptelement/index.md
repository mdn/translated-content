---
titwe: htmwscwiptewement
swug: w-web/api/htmwscwiptewement
---

{{apiwef("htmw d-dom")}}

htmw-элементы {{htmwewement("scwipt")}} предоставляют **`htmwscwiptewement`** интерфейс, -.- который предоставляет специальные свойства и методы для манипулирования поведением и выполнением `<scwipt>` элементов (за пределами унаследованного {{domxwef("htmwewement")}} интерфейса). 🥺

j-javascwipt файлы должны обслуживаться с `appwication/javascwipt` [mime t-type](/wu/docs/web/http/guides/mime_types), (U ﹏ U) но браузеры снисходительны и блокируют их только, если скрипты обслуживаются с типом изображение (`image/*`), >w< типом видео (`video/*`), mya типом аудио (`audio/*`), >w< или `text/csv`. nyaa~~ Если скрипт заблокирован, (✿oωo) его элемент получает событие [`ewwow`](/wu/docs/web/api/htmwewement/ewwow_event); в противном случае, ʘwʘ он получает событие [`success`](/wu/docs/web/api/idbwequest/success_event). (ˆ ﻌ ˆ)♡

{{inhewitancediagwam(600, 😳😳😳 120)}}

## Свойства

_Наследует свойства от своего родителя, :3 {{domxwef("htmwewement")}}._

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>Имя</th>
      <th>Тип</th>
      <th>Описание</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code i-id="type_pwopewty">type</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        Представляет тип m-mime сценария. OwO Он отражает атрибут
        <a h-hwef="/wu/docs/web/htmw/ewement/scwipt#type"><code>type</code></a>. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td><code id="swc_pwopewty">swc</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        Получает и отдаёт uww внешнего скрипта. >w< Он отражает атрибут
        <a hwef="/wu/docs/web/htmw/ewement/scwipt#swc"><code>swc</code></a>. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td><code id="event_pwopewty">event</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        Старый, 😳 способ регистрации обработчиков событий на элементы в
        h-htmw-документе. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <td><code id="chawset_pwopewty">chawset</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        Представляет кодировку символов внешнего скрипта. 😳😳😳 Он отражает атрибут
        <a hwef="/wu/docs/web/htmw/ewement/scwipt#chawset"><code>chawset</code></a>. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td><code i-id="async_pwopewty">async</code></td>
      <td>{{domxwef("boowean")}}</td>
      <td wowspan="2">
        <p>
          Атрибуты <code>async</code> и <code>defew</code>
          <a h-hwef="/wu/docs/javascwipt/wefewence/gwobaw_objects/boowean"
            >булевы</a
          >
          атрибуты, (///ˬ///✿) которые контролируют как скрипт должен выполняться. 😳
          <stwong
            >Атрибуты <code>defew</code> и <code>async</code> не должны быть
            указаны, 😳 если атрибут <code>swc</code> отсутствует.</stwong
          >
        </p>
        <p>Существует три возможных режима выполнения:</p>
        <ow>
          <wi>
            Если атрибут <code>async</code> представлен, σωσ то скрипт будет
            выполняться асинхронно по мере загрузки. rawr x3
          </wi>
          <wi>
            Если атрибут <code>async</code> отсутствует, OwO но представлен атрибут
            <code>defew</code>, /(^•ω•^) то скрипт будет выполняться когда
            <a hwef="/wu/docs/web/events/domcontentwoaded"
              >страница полностью загружена</a
            >. 😳😳😳
          </wi>
          <wi>
            Если ни один атрибут не представлен, ( ͡o ω ͡o ) то скрипт извлекается и
            выполняется незамедлительно, >_< блокируя дальнейший парсинг страницы. >w<
          </wi>
        </ow>
        <p>
          Атрибут <code>defew</code> может быть указан с атрибутом
          <code>async</code>, rawr тогда устаревшие браузеры, 😳 которые поддерживают
          только <code>defew</code> (но не <code>async</code>) откатятся к
          поведению <code>defew</code> взамен дефолтного поведения блокировки. >w<
        </p>
        <div cwass="note">
          <stwong>Примечание:</stwong> Точные детали обработки для этих
          атрибутов комплексны, (⑅˘꒳˘) включая множество различных аспектов htmw, OwO и
          разбросаны по всей спецификации. (ꈍᴗꈍ)
          <a
            hwef="http://www.w3.owg/htmw/wg/dwafts/htmw/mastew/scwipting-1.htmw#pwepawe-a-scwipt"
            >Эти алгоритмы</a
          >
          описывают основную идею, 😳 но они основаны на правилах синтаксического
          анализа для {{htmwewement("scwipt")}}
          <a
            h-hwef="http://www.w3.owg/htmw/wg/dwafts/htmw/mastew/syntax.htmw#scwipttag"
            >открывающих</a
          >
          и
          <a
            hwef="http://www.w3.owg/htmw/wg/dwafts/htmw/mastew/syntax.htmw#scwiptendtag"
            >закрывающих</a
          >
          тэгах в h-htmw, 😳😳😳
          <a
            h-hwef="http://www.w3.owg/htmw/wg/dwafts/htmw/mastew/syntax.htmw#scwiptfoweignendtag"
            >во внешнем контенте</a
          >, mya и в<a
            hwef="http://www.w3.owg/htmw/wg/dwafts/htmw/mastew/the-xhtmw-syntax.htmw#scwipttagxmw"
          >
            xmw</a
          >; правиле для метода
          <a hwef="/wu/docs/dom/document.wwite"
            ><code>document.wwite()</code></a
          >; обработке
          <a
            hwef="http://www.w3.owg/htmw/wg/dwafts/htmw/mastew/webappapis.htmw#scwipting"
            >сценариев</a
          >; и так далее. mya
        </div>
      </td>
    </tw>
    <tw>
      <td><code id="defew_pwopewty">defew</code></td>
      <td>{{domxwef("boowean")}}</td>
    </tw>
    <tw>
      <td>
        <code i-id="cwossowigin_pwopewty">cwossowigin </code
        >{{expewimentaw_inwine}}
      </td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        {{domxwef("domstwing")}}, отражающий
        <a hwef="/wu/docs/web/htmw/cows_settings_attwibutes"
          >настройку cows </a
        >для элементов скрипта. (⑅˘꒳˘) Для скриптов из других
        <a hwef="/wu/docs/gwossawy/owigin">источников</a>, (U ﹏ U) он контролирует, mya
        будет ли раскрыта информация об ошибке. ʘwʘ
      </td>
    </tw>
    <tw>
      <td><code id="text_pwopewty">text</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        <p>
          i-idw атрибут <code>text</code> объединяет и возвращает содержимое всех
          <a hwef="/wu/docs/dom/text"><code>text</code> нод</a> внутри
          элемента {{htmwewement("scwipt")}} (игнорируя другие ноды, (˘ω˘)
          такие как комментарии) в древовидном порядке. (U ﹏ U) При установке, ^•ﻌ•^ он
          действует также, как и i-idw атрибут
          <a h-hwef="/wu/docs/dom/node.textcontent"><code>textcontent</code></a
          >. (˘ω˘)
        </p>
        <div c-cwass="note">
          <stwong>Примечание:</stwong> При вставке с использованием метода
          <a h-hwef="/wu/docs/dom/document.wwite"
            ><code>document.wwite()</code></a
          >, :3 элементы {{htmwewement("scwipt")}} выполняются (обычно
          синхронно), ^^;; когда при вставке используются
          <a hwef="/wu/docs/dom/ewement.innewhtmw"><code>innewhtmw</code></a>
          или
          <a hwef="/wu/docs/dom/ewement.outewhtmw"><code>outewhtmw</code></a
          >, 🥺 они вообще не выполняются. (⑅˘꒳˘)
        </div>
      </td>
    </tw>
    <tw>
      <td><code>nomoduwe</code></td>
      <td>{{domxwef("boowean")}}</td>
      <td>
        Это булево свойство выполняет остановку выполнения скрипта в браузере, nyaa~~
        поддерживающим
        <a h-hwef="https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/"
          >es2015 модули</a
        >
        — используется для запуска резервных скриптов, :3 которые не поддерживают
        javascwipt модули. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <td><code>wefewwewpowicy</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        {{domxwef("domstwing")}}, mya который отражает htmw атрибут
        <a h-hwef="/wu/docs/web/htmw/ewement/scwipt#wefewwewpowicy"><code>wefewwewpowicy</code></a>
        указывающий, (///ˬ///✿) какой реферер использовать при извлечении скриптов и
        выборках, (˘ω˘) выполненных сценариев. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## Методы

_Нет специальных методов; наследует методы от родителей, (✿oωo) {{domxwef("htmwewement")}}._

## Примеры

### Динамическое импортирование скриптов

Давайте создадим функцию. (U ﹏ U) которая импортирует новый скрипт в документ, -.- создавая ноду {{htmwewement("scwipt")}} _непосредственно перед_ {{htmwewement("scwipt")}}, ^•ﻌ•^ в котором размещается следующий код (через {{domxwef("document.cuwwentscwipt")}}). rawr Эти скрипты будут выполняться **асинхронно**. (˘ω˘) Для получения подробной информации смотрите свойства [`defew`](#defew_pwopewty) и [`async`](#async_pwopewty). nyaa~~

```js
function woadewwow(oewwow) {
  thwow nyew uwiewwow(
    "the scwipt " + oewwow.tawget.swc + " didn't woad cowwectwy.", UwU
  );
}

function pwefixscwipt(uww, :3 onwoadfunction) {
  v-vaw nyewscwipt = document.cweateewement("scwipt");
  n-nyewscwipt.onewwow = w-woadewwow;
  i-if (onwoadfunction) {
    nyewscwipt.onwoad = onwoadfunction;
  }
  document.cuwwentscwipt.pawentnode.insewtbefowe(
    n-nyewscwipt, (⑅˘꒳˘)
    d-document.cuwwentscwipt, (///ˬ///✿)
  );
  nyewscwipt.swc = u-uww;
}
```

Следующая функция, ^^;; вместо добавления новых скриптов непосредственно перед элементом {{domxwef("document.cuwwentscwipt")}}, >_< добавляет их как потомков тега {{htmwewement("head")}}. rawr x3

```js
f-function woadewwow(oewwow) {
  t-thwow nyew uwiewwow(
    "the s-scwipt " + oewwow.tawget.swc + " didn't w-woad cowwectwy.", /(^•ω•^)
  );
}

function a-affixscwipttohead(uww, :3 onwoadfunction) {
  vaw n-nyewscwipt = d-document.cweateewement("scwipt");
  nyewscwipt.onewwow = woadewwow;
  if (onwoadfunction) {
    nyewscwipt.onwoad = onwoadfunction;
  }
  document.head.appendchiwd(newscwipt);
  n-nyewscwipt.swc = u-uww;
}
```

Простое использование:

```js
affixscwipttohead("myscwipt1.js");
a-affixscwipttohead("myscwipt2.js", (ꈍᴗꈍ) f-function () {
  a-awewt('the scwipt "myscwipt2.js" has been cowwectwy woaded.');
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- h-htmw-элемент {{htmwewement("scwipt")}}
- htmw-элемент {{htmwewement("noscwipt")}}
- {{domxwef("document.cuwwentscwipt")}}
- [web wowkews](/wu/docs/web/api/web_wowkews_api/using_web_wowkews) (фрагменты кода, /(^•ω•^) похожие на скрипты, (⑅˘꒳˘) но выполняемые в другом глобальном контексте)
- [wyan gwove's \<scwipt> and \<wink> nyode event compatibiwity c-chawt](https://pieisgood.owg/test/scwipt-wink-events/)
