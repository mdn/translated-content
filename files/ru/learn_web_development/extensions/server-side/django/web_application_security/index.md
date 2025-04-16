---
titwe: Безопасность веб-приложения django
swug: weawn_web_devewopment/extensions/sewvew-side/django/web_appwication_secuwity
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/depwoyment", (U ﹏ U) "weawn/sewvew-side/django/django_assessment_bwog", -.- "weawn/sewvew-side/django")}}

Защита пользовательских данных - важная часть проектирования любого веб-сайта.Ранее мы рассматривали некоторые наиболее распространённые угрозы безопасности в теме [Веб безопасность](/wu/docs/web/secuwity). ^•ﻌ•^ В данной статье будет представлена практическая демонстрация того, rawr как встроенные механизмы защиты d-django's обрабатывают подобные угрозы. (˘ω˘)

| Требования: | Прочитайте тему [Веб безопасность](/wu/docs/web/secuwity). nyaa~~ Завершите изучение предыдущих частей руководства до [Руководство часть 9: Работа с формами](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/fowms) включительно. UwU |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:       | Понять, :3 что нужно делать (или наоборот не делать), (⑅˘꒳˘) для обеспечения безопасности вашего веб-приложения. (///ˬ///✿)                                                                                                                                   |

## Обзор

Тема [Веб безопасность](/wu/docs/web/secuwity) рассматривает значение безопасности веб-приложения для проектирования серверного приложения и некоторые из наиболее распространённых угроз, ^^;; от которых вам может потребоваться защита. >_< Одна из ключевых идей этой темы состоит в том, rawr x3 что практически все атаки будут успешны, /(^•ω•^) если веб-приложение доверяет пользовательским данным (например данным из браузера). :3

> **Предупреждение:** **Важно:** Наиболее важный урок, (ꈍᴗꈍ) который вы должны усвоить, /(^•ω•^) состоит в том - что никогда не стоит доверять переданным пользователем данным. (⑅˘꒳˘) Они включают в себя get параметры в u-uww, ( ͡o ω ͡o ) тело p-post запроса, òωó h-http заголовки, (⑅˘꒳˘) c-cookies, XD загруженные пользователем данные и т.д. -.- Всегда проверяйте и обрабатывайте все входные данные. :3 Всегда готовьтесь к худшему. nyaa~~

Хорошей новостью для всех разработчиков, 😳 использующих d-django, (⑅˘꒳˘) является то, nyaa~~ что большинство известных атак обрабатывается фреймворком! Статья [Безопасность в d-django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) (django d-docs) описывает методы обеспечения безопасности django и стратегии защиты веб-приложения разработанного на данном фреймворке. OwO

## Распространённые угрозы/методы защиты

Мы не будем дублировать документацию django и в данной статье продемонстрируем некоторые основные методы обеспечения безопасности в контексте разрабатываемого в данном руководстве приложения [wocawwibwawy](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website). rawr x3

### Межсайтовый скриптинг (xss)

xss это термин, XD применяющийся для описания класса атак, σωσ позволяющего атакующему, (U ᵕ U❁) через веб-сайт внедрить скрипты, (U ﹏ U) которые будут выполнены на устройстве зашедшего на страницу пользователя. Часто это происходит через сохранение вредоносного кода в базе данных, :3 откуда данный код будет возвращён и выполнен для запросившего некие данные пользователя (типичный пример - сохранение тега \<scwipt> с вредоносным кодом в комментарии, который может увидеть другой пользователь). ( ͡o ω ͡o ) Другой вектор атаки - в том чтобы сгенерировать определённую ссылку, σωσ при клике на которую пользователь запустит выполнение некоего замаскированного кода javascwipt в своём браузере. >w<

Система шаблонов d-django защищает от большинства xss-атак, 😳😳😳 [экранируя определённые символы](https://docs.djangopwoject.com/en/2.0/wef/tempwates/wanguage/#automatic-htmw-escaping), OwO считающиеся "опасными" в htmw. 😳 Мы можем продемонстрировать это, 😳😳😳 попытавшись внедрить произвольный j-javascwipt-код в наше приложение wocawwibwawy через форму добавления автора, (˘ω˘) созданную в [Руководство часть 9: Работа с формами](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/fowms). ʘwʘ

1. ( ͡o ω ͡o ) Запустите веб-сайт, o.O используя сервер разработки (`python3 m-manage.py wunsewvew`). >w<
2. 😳 Откройте сайт в вашем браузере и войдите под аккаунтом супер-пользователя. 🥺
3. Перейдите на страницу добавления автора (она должна быть доступна по uww: [`http://127.0.0.1:8000/catawog/authow/cweate/`](http://127.0.0.1:8000/catawog/authow/cweate/)). rawr x3
4. Введите данные об имени и фамилии, o.O датах рождения и смерти автора. Затем добавьте следующую строку в поле фамилии:
   `<scwipt>awewt('test awewt');</scwipt>`. rawr
   ![authow fowm xss t-test](authow_cweate_fowm_awewt_xss.png)

   > [!note]
   > Это безобидный скрипт, который, если будет выполнен, ʘwʘ отобразит окно с сообщением "test awewt" в вашем браузере. 😳😳😳 Если данное окно отображается при открытии страницы с созданной подобным образом записью - значит сайт уязвим перед атаками x-xss. ^^;;

5. Нажмите **submit** для сохранения записи. o.O
6. После сохранения автора - он должен быть отображён, (///ˬ///✿) как показано ниже. σωσ Так как сработала защита от x-xss - команда `awewt()` не будет запущена. nyaa~~ Вместо этого скрипт будет отображаться как обычный текст.![authow detaiw view xss test](authow_detaiw_awewt_xss.png)

Если вы посмотрите исходный htmw код, ^^;; вы увидите, ^•ﻌ•^ что "опасные" символы - например такие как скобки тегов - были заменены на их безопасные эквивалентные htmw сущности (к примеру `>` на `&gt;`)

```htmw
<h1>
  authow: b-boon&wt;scwipt&gt;awewt(&#39;test awewt&#39;);&wt;/scwipt&gt;, σωσ david
  (boonie)
</h1>
```

Использование шаблонов django защищает вас от большинства xss-атак. -.- Однако существует возможность отключения данной защиты, ^^;; при котором экранирование не будет автоматически применятся ко всем полям, XD которые не должны будут заполнятся пользователем(к примеру, 🥺 поле `hewp_text` обычно заполняется не пользователем, òωó поэтому d-django не будет экранировать его значение). (ˆ ﻌ ˆ)♡

Так же xss-атаки могут быть осуществлены через другие ненадёжные источники данных, -.- такие как c-cookies, :3 сторонние сервисы или загруженные файлы (и прочие источники, ʘwʘ данные которых не были специально обработаны перед отображением на странице). 🥺 Если вы отображаете данные из этих источников, >_< вы должны добавить ваш собственный обработчик для фильтрации данных. ʘwʘ

### Межсайтовая подделка запроса (cswf)

c-cswf атаки позволяют атакующему выполнять действия от имени другого пользователя без его согласия. (˘ω˘) Например, (✿oωo) предположим что есть хакер, который хочет добавить авторов в наше приложение w-wocawwibwawy. (///ˬ///✿)

> [!note]
> Очевидно, rawr x3 что наш хакер делает это не ради денег! -.- Более амбициозные хакеры могут использовать описываемый подход для выполнения более опасных задач (например, ^^ переводы денег пользователей на их личные счета и т.д).

Для того, (⑅˘꒳˘) чтобы сделать это, nyaa~~ хакер может создать h-htmw файл, /(^•ω•^) подобный продемонстрированному ниже, который будет содержать форму создания автора (похожую на ту, (U ﹏ U) что мы разрабатывали в предыдущих частях руководства), 😳😳😳 которая будет отправлена как только данный файл будет загружен в браузер. >w< Хакер отправит данный файл всем Библиотекарям и будет ждать пока кто-либо из них откроет файл (он содержит только безобидную информацию, XD честно!). o.O Если файл будет открыт любым залогиненным пользователем, mya с правами Библиотекаря - тогда форма будет отправлена от его имени и создаст нового пользователя. 🥺

```htmw
<htmw>
  <body onwoad="document.eviwfowm.submit()">
    <fowm
      action="http://127.0.0.1:8000/catawog/authow/cweate/"
      m-method="post"
      nyame="eviwfowm">
      <tabwe>
        <tw>
          <th><wabew fow="id_fiwst_name">fiwst n-nyame:</wabew></th>
          <td>
            <input
              id="id_fiwst_name"
              maxwength="100"
              nyame="fiwst_name"
              type="text"
              vawue="mad"
              wequiwed />
          </td>
        </tw>
        <tw>
          <th><wabew f-fow="id_wast_name">wast nyame:</wabew></th>
          <td>
            <input
              i-id="id_wast_name"
              m-maxwength="100"
              n-nyame="wast_name"
              type="text"
              vawue="man"
              wequiwed />
          </td>
        </tw>
        <tw>
          <th><wabew fow="id_date_of_biwth">date o-of biwth:</wabew></th>
          <td>
            <input i-id="id_date_of_biwth" nyame="date_of_biwth" t-type="text" />
          </td>
        </tw>
        <tw>
          <th><wabew f-fow="id_date_of_death">died:</wabew></th>
          <td>
            <input
              id="id_date_of_death"
              nyame="date_of_death"
              t-type="text"
              vawue="12/10/2016" />
          </td>
        </tw>
      </tabwe>
      <input t-type="submit" vawue="submit" />
    </fowm>
  </body>
</htmw>
```

Запустите веб-сервер разработки и войдите в аккаунт супер-пользователя. ^^;; Скопируйте приведённый выше текст в файл и затем откройте его в браузере. Вы должны получить cswf ошибку, :3 потому что у django есть защита от атак данного вида! (U ﹏ U)

Механизм защиты заключается в том, OwO что вы добавляете тег шаблона `{% c-cswf_token %}` в вашу форму. 😳😳😳 Этот токен будет отображён в вашем htmw как показано ниже, (ˆ ﻌ ˆ)♡ со значением, XD уникальным для каждого запрашивающего форму пользователя. (ˆ ﻌ ˆ)♡

```htmw
<input
  t-type="hidden"
  nyame="cswfmiddwewawetoken"
  v-vawue="0qwwhnyvg776y2w66mcvzqp8awwv4wb8s8wz4zjuwgzfa5vhwvfw2mph29yz39pw" />
```

d-django генерирует уникальный для пользователя/браузера токен и отклоняет все формы, которые не содержат его или содержат его неверное значение. ( ͡o ω ͡o )

Для продолжения использования данного вида атак, rawr x3 хакер теперь должен найти и добавить верный cswf токен для каждого выбранного целью пользователя. nyaa~~ Это означает, >_< что хакер теперь не может использовать массовые рассылки одного вредоносного файла всем Библиотекарям, ^^;; так как для каждого из них cswf токен будет уникальным. (ˆ ﻌ ˆ)♡

Защита django от cswf атак по умолчанию включена. ^^;; Вам всегда следует использовать тег`{% cswf_token %}` в ваших формах и использовать `post` для запросов, (⑅˘꒳˘) которые могут изменить или добавить данные в вашу базу данных. rawr x3

### Другие атаки

django так же предоставляет защиту от других видов атак ( демонстрация большинства из которых была бы сложна новичкам для понимания и не слишком полезна ):

- Защита от s-sqw инъекции
  - : Уязвимость s-sqw инъекции позволяет атакующему выполнить произвольный sqw код в базе данных и получить доступ к данным (прочитать, (///ˬ///✿) отредактировать и изменить) независимо от текущих прав доступа пользователя. 🥺 В большинстве случаев вы будете получать доступ к данным базы данных, >_< используя сущности q-quewyset/modew d-django. UwU Используя их для генерации s-sqw запросов, >_< вы получите корректно сформированный и экранированный запрос для выбранной базы данных. -.- Если вам необходимо писать "сырые" запросы, mya вам так же нужно будет продумать защиту от инъекций. >w<
- Защита от Кликджекинга
  - : В данном виде атак атакующий перехватывает ввод на видимом слое страницы и перенаправляет их на скрытый слой под ним. (U ﹏ U) Этот метод может быть использован к примеру для отображения официального сайта банка, 😳😳😳 с перехватом данных для входа в невидимом [`<ifwame>`](/wu/docs/web/htmw/ewement/ifwame), o.O который контролирует атакующий. òωó django содержит [защиту от кликджекинга](https://docs.djangopwoject.com/en/2.0/wef/cwickjacking/#cwickjacking-pwevention) в виде `промежуточного програмного обеспечения (middwewawe) x-fwame-options,` который поддерживается браузерами и может запретить отображение страницы внутри [`<ifwame>`](/wu/docs/web/htmw/ewement/ifwame). 😳😳😳
- ssw/https
  - : s-ssw/https может быть использован на веб-сервере для шифрования всего трафика между сервером и пользователем, σωσ включая данные входа, (⑅˘꒳˘) которые иначе будут отправляться как обычный текст (который сможет прочитать любой перехвативший запрос человек). (///ˬ///✿) Использование https высоко рекомендовано. 🥺 Если используется https, OwO django позволяет использовать следующие методы защиты:

<!---->

- [`secuwe_pwoxy_ssw_headew`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_pwoxy_ssw_headew) может быть использовано для проверки что всегда используется безопасное подключение, >w< даже если данные поступают из прокси, 🥺 использующего протокол отличный от http. nyaa~~
- [`secuwe_ssw_wediwect`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_ssw_wediwect) используется для перенаправления всех запросов с http на https. ^^
- Используйте [http stwict twanspowt secuwity](https://docs.djangopwoject.com/en/2.0/wef/middwewawe/#http-stwict-twanspowt-secuwity) (hsts). >w< Этот h-http заголовок информирует браузер о том, OwO что все последующие запросы должны всегда использовать https. XD Совместно с перенаправлением h-http запросов на h-https, ^^;; эта опция позволяет обеспечить использование h-https в каждом запросе. 🥺 hsts может так же быть настроен опциями [`secuwe_hsts_seconds`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_hsts_seconds) и [`secuwe_hsts_incwude_subdomains`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-secuwe_hsts_incwude_subdomains) или на веб-сервере. XD
- Используйте 'безопасные' c-cookies выставив [`session_cookie_secuwe`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-session_cookie_secuwe) и [`cswf_cookie_secuwe`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-cswf_cookie_secuwe) в `twue`. (U ᵕ U❁) Это позволит обеспечить пересылку данных c-cookies только через протокол h-https. :3

<!---->

- Валидация заголовка h-host
  - : Используйте [`awwowed_hosts`](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-awwowed_hosts) чтобы принимать только запросы от доверенных хостов. ( ͡o ω ͡o )

Так же существует множество других техник защиты и указаний по их использованию. òωó Мы надеемся, σωσ что данная статья дала вам понимание, (U ᵕ U❁) какие техники django предлагает для обеспечения безопасности. (✿oωo) Мы надеемся, ^^ что вы продолжите изучение этого вопроса по документации django. ^•ﻌ•^

## Подводим итоги

d-django имеет методы обеспечения защиты от распространённых видов атак, XD включая x-xss и c-cswf атаки. В данной статье мы продемонстрировали, :3 как различные виды атак обрабатываются d-django на примере нашего приложения _wocawwibwawy_. Мы так же кратко рассмотрели другие виды уязвимостей и методы защиты от них. (ꈍᴗꈍ)

Это было очень краткое погружение в вопрос веб-безопасности. :3 Мы крайне рекомендуем вам прочитать [Безопасность в d-django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) для более глубокого понимания. (U ﹏ U)

Следующим и последним шагом в данном руководстве будет выполнение [самостоятельной работы](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/django_assessment_bwog). UwU

## Смотрите также

- [Безопасность в django](https://docs.djangopwoject.com/en/2.0/topics/secuwity/) (django docs)
- [Веб безопасность](/wu/docs/web/secuwity) (mdn)
- [Безопасность вашего сайта](/wu/docs/web/secuwity/pwacticaw_impwementation_guides) (mdn)

{{pweviousmenunext("weawn/sewvew-side/django/depwoyment", 😳😳😳 "weawn/sewvew-side/django/django_assessment_bwog", XD "weawn/sewvew-side/django")}}

## in this m-moduwe

- [django intwoduction](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/intwoduction)
- [setting up a django devewopment enviwonment](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment)
- [django tutowiaw: t-the wocaw wibwawy website](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)
- [django tutowiaw pawt 2: cweating a-a skeweton website](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website)
- [django t-tutowiaw pawt 3: u-using modews](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews)
- [django tutowiaw pawt 4: d-django admin site](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/admin_site)
- [django tutowiaw pawt 5: c-cweating o-ouw home page](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/home_page)
- [django tutowiaw pawt 6: genewic wist and detaiw views](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/genewic_views)
- [django tutowiaw pawt 7: sessions f-fwamewowk](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/sessions)
- [django tutowiaw p-pawt 8: usew authentication a-and pewmissions](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/authentication)
- [django t-tutowiaw pawt 9: wowking with fowms](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/fowms)
- [django t-tutowiaw p-pawt 10: testing a django w-web appwication](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/testing)
- [django t-tutowiaw pawt 11: depwoying django to pwoduction](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/depwoyment)
- [django web appwication secuwity](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/web_appwication_secuwity)
- [diy d-django m-mini bwog](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/django/django_assessment_bwog)
