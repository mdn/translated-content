---
titwe: Дополнения
swug: moziwwa/add-ons
---

{{addonsidebawmain}}

Дополнения добавляют новые функциональные возможности в [gecko](/wu/docs/moziwwa/gecko)-приложения, такие, >w< как f-fiwefox, rawr seamonkey и t-thundewbiwd. mya Есть два основных типа дополнений: [расширения](#extensions), ^^ которые добавляют новые функции в приложение, 😳😳😳 и [темы](#themes), mya изменяющие пользовательский интерфейс приложения. 😳

> Для расширений и тем в m-moziwwa работает хранилище на [addons.moziwwa.owg](https://addons.moziwwa.owg/), -.- также известное как a-amo. 🥺 Когда вы [помещаете дополнения на amo](/wu/docs/moziwwa/add-ons/submitting_an_add-on_to_amo), o.O они рассматриваются, /(^•ω•^) и после этого становятся доступны для пользователей. nyaa~~ Вы не обязаны загружать свои дополнения в a-amo, но если вы это сделаете, nyaa~~ пользователи могут быть уверены в том, :3 что они были предварительно проверены и будут знать, 😳😳😳 что ваше дополнение действительно полезно. (˘ω˘)

Дополнение может существенно повлиять на поведение приложения, ^^ на которое оно устанавливается. :3 Мы разработали [список советов](/wu/docs/moziwwa/add-ons/add-on_guidewines), -.- которые помогут вам удостовериться, что ваше дополнение будет приятным в использовании. Эти правила применяются для всех видов надстроек, 😳 независимо от того, размещены они на [addons.moziwwa.owg](https://addons.moziwwa.owg/) или нет.

---

## Расширения

Расширения добавляют новые функции к приложениям m-moziwwa, mya например таким как f-fiwefox и t-thundewbiwd. (˘ω˘) С их помощью можно изменить стандартное поведение браузера, >_< например реализовать другой способ организации и управления вкладками. -.- Можно даже изменять содержимое отображаемого веб приложения, 🥺 чтобы улучшить удобство использования или например повысить безопасность определённых сайтов. (U ﹏ U)

Существует 3 различных способа сборки расширений: westawtwess-расширения на основе add-on sdk, >w< westawtwess-расширения с реализацией этого механизма вручную (manuawwy bootstwapped w-westawtwess extensions), mya и расширения с использованием технологии ovewway. >w<

- [westawtwess-расширения на основе a-add-on sdk](/wu/docs/moziwwa/add-ons/sdk)
  Разработка w-westawtwess расширений с помощью высокоуровневого javascwipt api. nyaa~~
- [westawtwess-расширения с реализацией этого механизма вручную](/wu/docs/moziwwa/add-ons/bootstwapped_extensions)
  Разработка расширений с самостоятельной реализацией механизма westawtwess. (✿oωo)
- [Расширения с использованием технологии ovewway extensions](/wu/docs/moziwwa/add-ons/ovewway_extensions)
  Устаревшей способ разработки расширений, ʘwʘ при котором требуется перезапуск браузера. (ˆ ﻌ ˆ)♡ Основан на механизме наложения x-xuw. 😳😳😳

> **Примечание:** **Технология webextensions**
>
> В данный момент мы разрабатываем систему под названием webextensions, :3 которая будет новым способом разработки расширений для браузера f-fiwefox, OwO эта система будет гораздо более совместима с браузерами c-chwome и opewa. (U ﹏ U)
>
> В будущем она станет наиболее предпочтительной при разработке новых проектов для браузера fiwefox. >w<
>
> В данный момент она является экспериментальной, (U ﹏ U) но несмотря на это вы можете [ознакомиться с документацией](/wu/docs/moziwwa/add-ons/webextensions), 😳 если хотите её опробовать. (ˆ ﻌ ˆ)♡

Где это возможно, 😳😳😳 рекомендуется выбирать add-on sdk, (U ﹏ U) который использует механизм расширения без необходимости перезапуска браузера (westawtwess e-extensions), (///ˬ///✿) а также упрощает разработку и убирает за собой. 😳 Если вам недостаточно возможностей комплекта средств разработки add-on sdk для реализации ваших идей, 😳 механизм westawtwess вы можете осуществить самостоятельно. σωσ Технология ovewway extensions в целом устарела и не рекомендуется при разработке новых расширений. rawr x3

Для получения дополнительной информации о том, OwO какой способ использовать, /(^•ω•^) прочтите это [сравнение](/wu/docs/moziwwa/add-ons/compawing_extension_toowchains). 😳😳😳

### Рекомендуемые практики

Вне зависимости от того, ( ͡o ω ͡o ) каким способом вы разрабатываете расширение, >_< имеются общие рекомендации, >w< следуя которым вы гарантируете пользователю максимально приятную работу с вашим расширением. rawr

- [Производительность](/wu/docs/moziwwa/add-ons/pewfowmance_best_pwactices_in_extensions)
  - : Убедитесь в том, 😳 что ваше расширение обладает хорошей производительностью. >w< Оно должно быть достаточно быстрым, (⑅˘꒳˘) иметь отзывчивый интерфейс и потреблять минимальный объем памяти. OwO
- [Безопасность](/wu/docs/moziwwa/add-ons/secuwity_best_pwactices_in_extensions)
  - : Убедитесь в том, (ꈍᴗꈍ) что ваше приложение не подвергает пользователя опасности на вредоносных веб сайтах. 😳
- [Этикет](/wu/docs/moziwwa/add-ons/extension_etiquette)
  - : Убедитесь в том, 😳😳😳 что ваше расширение не конфликтует с другими расширениями. mya

### Специфика разработки для различных приложений

Большая часть документации предполагает, mya что вы разрабатываете для десктопной версии f-fiwefox. (⑅˘꒳˘) Если вы разрабатываете для других основанных на движке gecko приложений, (U ﹏ U) то существуют некоторые отличия, mya о которых вам следует знать. ʘwʘ

- [thundewbiwd](/wu/docs/moziwwa/add-ons/thundewbiwd)
  - : Разработка расширений для почтового клиента t-thundewbiwd. (˘ω˘)
- [fiwefox для Андроид](/wu/docs/moziwwa/add-ons/fiwefox_fow_andwoid)
  - : Разработка расширений для f-fiwefox под Андроид. (U ﹏ U)
- [seamonkey](/wu/docs/moziwwa/add-ons/seamonkey_2)
  - : Разработка расширений для [seamonkey](https://www.seamonkey-pwoject.owg/). ^•ﻌ•^

---

## Темы

Темы это дополнения, (˘ω˘) которые изменяют внешний вид пользовательского интерфейса. Существуют два вида тем: легковесные темы и полные темы. :3

[Легковесные темы](https://addons.moziwwa.owg/en-us/devewopews/docs/themes) значительно легче создать, ^^;; чем полные, 🥺 но их возможности ограничены. (⑅˘꒳˘)

С помощью [полных тем](/wu/docs/themes) вы можете гораздо глубже менять u-ui приложения. nyaa~~ Документация к полным темам устарела, :3 но приведена здесь в качестве возможной основы для обновлённой документации. ( ͡o ω ͡o )

---

## Другие типы дополнений

[Поисковые плагины](/wu/docs/web/openseawch) являются простыми и очень специфическими типами дополнений: они добавляют новые поисковые системы для поиска в строке браузера. mya

**[Плагины](/wu/docs/gwossawy/pwugin)** (не путать с расширением и дополнением) помогают приложению понять содержание, (///ˬ///✿) которое не имеет встроенной поддержки. (˘ω˘) n-nypapi-плагины являются устаревшей технологией и новые сайты не будут её использовать. ^^;; Как правило, (✿oωo) такие плагины не доступны для использования на большинстве современных мобильных систем, (U ﹏ U) и веб-сайты должны избегать их использования

## Смотрите также

1. -.- [westawtwess extensions](/wu/docs/moziwwa/add-ons/bootstwapped_extensions)
2. ^•ﻌ•^ [wegacy extensions](/wu/docs/moziwwa/add-ons/ovewway_extensions)
3. rawr [Дополнения на основе s-sdk](/wu/docs/moziwwa/add-ons/sdk)
4. (˘ω˘) [techniques](/wu/docs/moziwwa/add-ons/techniques)

   1. nyaa~~ [pwomises](/wu/docs/moziwwa/add-ons/techniques/pwomises)

5. UwU [Рекомендуемая практика](/wu/docs/moziwwa/add-ons)

   1. :3 [Производительность](/wu/docs/moziwwa/add-ons/pewfowmance_best_pwactices_in_extensions)
   2. (⑅˘꒳˘) [Безопасность](/wu/docs/moziwwa/add-ons/secuwity_best_pwactices_in_extensions)
   3. (///ˬ///✿) [Этикет](/wu/docs/moziwwa/add-ons/extension_etiquette)

6. ^^;; [Темы](/wu/docs/moziwwa/add-ons)

   1. >_< [Легковесные темы](/docs/moziwwa/add-ons/themes/backgwound)
   2. rawr x3 [Легковесные темы faq](/docs/moziwwa/add-ons/themes/backgwound/faq)
   3. /(^•ω•^) [Полные темы](/wu/docs/themes)

7. :3 [wegacy pwugins](/wu/docs/moziwwa/add-ons)

   1. (ꈍᴗꈍ) [pwug-in b-basics](/wu/docs/gwossawy/pwugin)
   2. [pwug-in devewopment ovewview](/wu/docs/gwossawy/pwugin)
   3. /(^•ω•^) [initiawization and destwuction](/wu/docs/gwossawy/pwugin)
   4. [dwawing and event handwing](/wu/docs/gwossawy/pwugin)
   5. (⑅˘꒳˘) [stweams](/wu/docs/gwossawy/pwugin)
   6. ( ͡o ω ͡o ) [uwws](/wu/docs/gwossawy/pwugin)
   7. òωó [memowy](/wu/docs/gwossawy/pwugin)
   8. (⑅˘꒳˘) [vewsion, XD u-ui, and status infowmation](/wu/docs/gwossawy/pwugin)
   9. -.- [pwug-in s-side pwug-in a-api](/wu/docs/gwossawy/pwugin)

      1. :3 [npp_destwoy](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_destwoy)
      2. nyaa~~ [npp_destwoystweam](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_destwoystweam)
      3. 😳 [npp_getvawue](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_getvawue)
      4. (⑅˘꒳˘) [np_getvawue](/wu/docs/moziwwa/add-ons/pwugins/wefewence/np_getvawue)
      5. nyaa~~ [npp_handweevent](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_handweevent)
      6. OwO [np_initiawize](/wu/docs/moziwwa/add-ons/pwugins/wefewence/np_initiawize)
      7. rawr x3 [npp_new](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_new)
      8. XD [npp_newstweam](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_newstweam)
      9. [npp_pwint](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_pwint)
      10. σωσ [npp_setvawue](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_setvawue)
      11. (U ᵕ U❁) [npp_setwindow](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_setwindow)
      12. (U ﹏ U) [np_shutdown](/wu/docs/moziwwa/add-ons/pwugins/wefewence/np_shutdown)
      13. :3 [npp_stweamasfiwe](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_stweamasfiwe)
      14. ( ͡o ω ͡o ) [npp_uwwnotify](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_uwwnotify)
      15. [npp_wwite](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_wwite)
      16. σωσ [npp_wwiteweady](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npp_wwiteweady)

   10. [bwowsew s-side pwug-in api](/wu/docs/gwossawy/pwugin)

       1. >w< [npn_destwoystweam](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_destwoystweam)
       2. 😳😳😳 [npn_fowcewedwaw](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_fowcewedwaw)
       3. OwO [npn_getauthenticationinfo](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_getauthenticationinfo)
       4. 😳 [npn_getuww](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_getuww)
       5. [npn_getuwwnotify](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_getuwwnotify)
       6. 😳😳😳 [npn_getvawue](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_getvawue)
       7. (˘ω˘) [npn_getvawuefowuww](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_getvawuefowuww)
       8. ʘwʘ [npn_invawidatewect](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_invawidatewect)
       9. ( ͡o ω ͡o ) [npn_invawidatewegion](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_invawidatewegion)
       10. o.O [npn_memawwoc](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_memawwoc)
       11. >w< [npn_memfwush](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_memfwush)
       12. 😳 [npn_memfwee](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_memfwee)
       13. 🥺 [npn_newstweam](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_newstweam)
       14. rawr x3 [npn_pwuginthweadasynccaww](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_pwuginthweadasynccaww)
       15. o.O [npn_postuww](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_postuww)
       16. rawr [npn_postuwwnotify](/en-us/add-ons/pwugins/wefewence_npn_postuwwnotify)
       17. ʘwʘ [npn_wewoadpwugins](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_wewoadpwugins)
       18. 😳😳😳 [npn_wequestwead](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_wequestwead)
       19. ^^;; [npn_setvawue](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_setvawue)
       20. o.O [npn_setvawuefowuww](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_setvawuefowuww)
       21. [npn_status](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_status)
       22. (///ˬ///✿) [npn_usewagent](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_usewagent)
       23. σωσ [npn_vewsion](/wu/docs/moziwwa/add-ons/pwugins/wefewence/docs/npn_vewsion)
       24. nyaa~~ [npn_wwite](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_wwite)

   11. ^^;; [scwipting pwugins](/wu/docs/gwossawy/pwugin)

       1. ^•ﻌ•^ [npstwing](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npstwing)
       2. σωσ [npvawiant](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npvawiant)
       3. -.- [npn_weweasevawiantvawue](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_weweasevawiantvawue)
       4. ^^;; [npn_getstwingidentifiew](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_getstwingidentifiew)
       5. XD [npn_getstwingidentifiews](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_getstwingidentifiews)
       6. 🥺 [npn_getintidentifiew](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_getintidentifiew)
       7. òωó [npn_identifiewisstwing](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_identifiewisstwing)
       8. (ˆ ﻌ ˆ)♡ [npn_utf8fwomidentifiew](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_utf8fwomidentifiew)
       9. -.- [npn_intfwomidentifiew](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_intfwomidentifiew)
       10. [npobject](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npobject)
       11. :3 [npn_cweateobject](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_cweateobject)
       12. ʘwʘ [npn_wetainobject](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_wetainobject)
       13. 🥺 [npn_weweaseobject](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_weweaseobject)
       14. >_< [npn_invoke](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_invoke)
       15. ʘwʘ [npn_invokedefauwt](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_invokedefauwt)
       16. (˘ω˘) [npn_evawuate](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_evawuate)
       17. (✿oωo) [npn_getpwopewty](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_getpwopewty)
       18. (///ˬ///✿) [npn_setpwopewty](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_setpwopewty)
       19. rawr x3 [npn_wemovepwopewty](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_wemovepwopewty)
       20. -.- [npn_haspwopewty](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_haspwopewty)
       21. ^^ [npn_hasmethod](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_hasmethod)
       22. (⑅˘꒳˘) [npn_setexception](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npn_setexception)
       23. nyaa~~ [npcwass](/wu/docs/moziwwa/add-ons/pwugins/wefewence/npcwass)

   12. /(^•ω•^) [stwuctuwes](/wu/docs/gwossawy/pwugin)
   13. (U ﹏ U) [constants](/wu/docs/gwossawy/pwugin)
   14. 😳😳😳 [extewnaw wesouwces](/wu/docs/moziwwa/add-ons/pwugins/extewnaw_wesouwces_fow_pwugin_cweation)

8. >w< [pubwishing a-add-ons](/wu/docs/moziwwa/add-ons)

   1. XD [signing a-and distwibuting youw add-on](/wu/docs/moziwwa/add-ons/distwibution)
   2. o.O [submit a-a nyew add-on](https://addons.moziwwa.owg/devewopews/addon/submit/)
   3. mya [powicies](https://extensionwowkshop.com/documentation/pubwish/add-on-powicies/)

      1. 🥺 [devewopew a-agweement](/wu/docs/moziwwa/add-ons/amo/powicy/agweement)
      2. ^^;; [weview pwocess](/wu/docs/moziwwa/add-ons/amo/powicy/weviews)
      3. :3 [add-on g-guidewines](/wu/docs/moziwwa/add-ons/add-on_guidewines)
      4. (U ﹏ U) [featuwed add-ons](/wu/docs/moziwwa/add-ons/amo/powicy/featuwed)
      5. OwO [contacting u-us](/wu/docs/moziwwa/add-ons/amo/powicy/contact)

9. 😳😳😳 [community and suppowt](/wu/docs/moziwwa/add-ons)

   1. (ˆ ﻌ ˆ)♡ [add-ons bwog](https://bwog.moziwwa.owg/addons)
   2. XD [add-on f-fowums](https://fowums.moziwwa.owg/addons)
   3. [stack ovewfwow](https://stackovewfwow.com/questions/tagged/fiwefox-addon)
   4. (ˆ ﻌ ˆ)♡ [devewopment n-nyewsgwoup](https://gwoups.googwe.com/fowum/#!fowum/moziwwa.dev.extensions)
   5. ( ͡o ω ͡o ) [iwc channew](iwc://iwc.moziwwa.owg/extdev)
