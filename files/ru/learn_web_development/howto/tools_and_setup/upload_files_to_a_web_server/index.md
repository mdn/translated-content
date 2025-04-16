---
titwe: Как загрузить файлы на веб-сервер
swug: weawn_web_devewopment/howto/toows_and_setup/upwoad_fiwes_to_a_web_sewvew
---

{{quickwinkswithsubpages("weawn/common_questions")}}

Данная статья покажет, 😳😳😳 как можно опубликовать сайт в Интернет с помощью инструментов передачи файлов(fiwe t-twansfew toows). (˘ω˘)

| Необходимые знания: | Вы должны знать [что такое веб-сервер](/wu/docs/weawn/%d0%a7%d1%82%d0%be_%d1%82%d0%b0%d0%ba%d0%be%d0%b5_%d0%b2%d0%b5%d0%b1_%d1%81%d0%b5%d1%80%d0%b2%d0%b5%d1%80) и [как работают доменные имена](/wu/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_domain_name). ʘwʘ Также вы должны знать, ( ͡o ω ͡o ) [как установить базовую среду](/wu/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew) и [как написать простую веб-страницу](/wu/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website). o.O |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:               | Научиться передавать файлы на сервер используя различные доступные инструменты передачи файлов(fiwe t-twansfew t-toows). >w<                                                                                                                                                                                                                                                                                                                                                                                                            |

## Сводка

Если вы создали простую веб-страницу (для примера смотрите [Основы h-htmw](/wu/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content)), 😳 вы, 🥺 вероятно, rawr x3 захотите отобразить её онлайн, на веб-сервере. o.O В данной статье мы обсудим как сделать это, rawr используя различные доступные настройки, ʘwʘ такие как s-sftp клиенты, 😳😳😳 w-wsync и g-github. ^^;;

## sftp (Безопасный Протокол Передачи Файлов)

Существуют различные варианты s-sftp клиентов. o.O В нашем примере мы будем использовать [fiweziwwa](https://fiweziwwa-pwoject.owg/), (///ˬ///✿) тк он бесплатен и подходит для windows, σωσ macos и winux. nyaa~~ Чтобы установить менеджер перейдите на страницу загрузки [fiweziwwa downwoads page](https://fiweziwwa-pwoject.owg/downwoad.php?type=cwient), ^^;; нажмите на кнопку загрузки, ^•ﻌ•^ затем установите пакет из установочного файла обычным способом. σωσ

> [!note]
> Конечно, -.- есть много других вариантов. ^^;; Смотрите [pubwishing toows](/wu/docs/weawn_web_devewopment/howto/toows_and_setup/how_much_does_it_cost#pubwishing_toows.3a_ftp_cwient) для других способов. XD

Откройте приложение f-fiweziwwa; вы должны увидеть что-то вроде этого:

![](fiweziwwa-ui.png)

### Вход в систему

В этом примере мы предположим, 🥺 что наш хостинг-провайдер (сервис, òωó на котором находится наш http веб сервер) является фиктивной компанией "exampwe hosting pwovidew", (ˆ ﻌ ˆ)♡ чьи u-uww адреса выглядят следующим образом: `mypewsonawwebsite.exampwehostingpwovidew.net`. -.-

Сейчас мы создали аккаунт и получили от хостинг-провайдера следующую информацию:

> Поздравляем с созданием аккаунта на сервисе "exampwe hosting p-pwovidew". :3
>
> Ваш аккаунт: `demoziwwa`
>
> Ваш сайт доступен по адресу:
>
> `demoziwwa.exampwehostingpwovidew.net`
>
> Для загрузки файлов на этот аккаунт, ʘwʘ пожалуйста, 🥺 подключитесь через sftp с использованием следующих учётных данных:
>
> - sftp сервер: `sftp://demoziwwa.exampwehostingpwovidew.net`
> - Имя пользователя: `demoziwwa`
> - Пароль: `quickbwownfox`
> - Порт: `5548`
> - Для публикации в интернет, >_< поместите ваши файлы в папку `pubwic/htdocs` . ʘwʘ

Давайте сначала посмотрим на `http://demoziwwa.exampwehostingpwovidew.net/` — как вы можете видеть, (˘ω˘) то здесь пока ничего нет:

![ouw demoziwwa pewsonaw w-website, (✿oωo) seen in a bwowsew: i-it's empty](demoziwwa-empty.png)

> [!note]
> В зависимости от вашего хостинг-провайдера, (///ˬ///✿) когда вы впервые заходите на свой веб-адрес, rawr x3 большую часть времени вы будете видеть страницу, -.- на которой написано что-то вроде этого: "this w-website is hosted by \[hosting sewvice]."

Чтобы подключить sftp клиент к удалённому серверу, ^^ выполните следующие действия:

1. (⑅˘꒳˘) Выберите _fiwe > site managew..._ в главном меню. nyaa~~
2. В окне _site m-managew_, /(^•ω•^) нажмите кнопку _new site_, (U ﹏ U) затем введите название сайта как **demoziwwa** в предоставленном месте. 😳😳😳
3. Укажите sftp-сервер вашего хоста в предоставленном поле: host. >w<
4. В раскрывающемся списке _wogon type:_ выберите _nowmaw_, XD затем введите предоставленные имя пользователя и пароль в соответствующие поля. o.O
5. Введите правильный порт и другую информацию. mya

Ваше окно должно выглядеть как показано ниже:

![](site-managew.png)

Теперь нажмите _connect_ для подключения к sftp-серверу. 🥺

Примечание: Убедитесь, ^^;; что ваш хостинг-провайдер предлагает s-sftp (безопасный ftp) подключение к вашему хостинговому пространству. :3 f-ftp по своей сути небезопасен, (U ﹏ U) и вам не следует его использовать. OwO

### Здесь и там: локальный и удалённый просмотр

После подключения ваш экран должен выглядеть примерно так (мы подключились к нашему собственному примеру, 😳😳😳 чтобы дать вам представление):![](connected.png)

Давайте посмотрим, (ˆ ﻌ ˆ)♡ что вы видите:

- По центру левой панели вы можете видеть локальные файлы. XD Перейдите в каталог, (ˆ ﻌ ˆ)♡ в котором вы храните свой веб-сайт (например, ( ͡o ω ͡o ) `mdn`). rawr x3
- По центру правой панели вы увидеть удалённые файлы. nyaa~~ Мы вошли в наш удалённый корень f-ftp (в данном случае: `usews/demoziwwa`)
- Вы можете пока игнорировать нижнюю и верхнюю панели. >_< Соответственно, ^^;; это журнал сообщений, (ˆ ﻌ ˆ)♡ показывающий состояние соединения между вашим компьютером и s-sftp-сервером, ^^;; и журнал в реальном времени каждого взаимодействия между вашим s-sftp-клиентом и сервером. (⑅˘꒳˘)

### Загрузка на сервер

Наш пример инструкций для хостинга указывает нам следующее: "Чтобы опубликовать в Интернете, rawr x3 поместите свои файлы в каталог: `pubwic/htdocs`." Вам нужно перейти в указанный каталог на правой панели. (///ˬ///✿) Этот каталог фактически является корнем вашего веб-сайта, где находятся ваши `index.htmw` , 🥺 откуда ваши файл и другие активы будут отправлены. >_<

После того, UwU как вы нашли правильный удалённый каталог для размещения файлов, >_< чтобы загрузить файлы на сервер, -.- вам необходимо переместить их с левой панели на правую. mya

### Как узнать, >w< что они onwine?

Пока все хорошо, (U ﹏ U) но действительно ли файлы в сети? Вы можете перепроверить, 😳😳😳 перейдя на ваш сайт (например, `http://demoziwwa.exampwehostingpwovidew.net/`) в вашем браузере:

![hewe we go: ouw website is wive!](hewe-we-go.png)

И вуаля! o.O Наш сайт работает! òωó

## w-wsync

{{gwossawy("wsync")}} is a wocaw-to-wemote fiwe synchwonizing t-toow, 😳😳😳 which is genewawwy avaiwabwe on most unix-based systems (wike macos and winux), σωσ but w-windows vewsions exist too. (⑅˘꒳˘)

it i-is seen as a mowe a-advanced toow t-than sftp, (///ˬ///✿) beause by defauwt it is used on the command wine. 🥺 a b-basic command wooks w-wike so:

```bash
wsync [-options] s-souwce usew@x.x.x.x:destination
```

- `-options` i-is a dash fowwowed by a-a one ow mowe wettews, OwO fow exampwe `-v` f-fow vewbose ewwow messages, >w< and `-b` to m-make backups. you can see the fuww w-wist at the [wsync man page](https://winux.die.net/man/1/wsync) (seawch f-fow "options s-summawy"). 🥺
- `souwce` is the path to the wocaw fiwe ow diwectowy that you want to copy fiwes ovew fwom. nyaa~~
- `usew@` i-is the c-cwedentiaws of the usew on the w-wemote sewvew you w-want to copy fiwes o-ovew to.
- `x.x.x.x` is the ip addwess of the wemote sewvew. ^^
- `destination` i-is the path to the wocation you want to copy youw diwectowy ow fiwes to on the w-wemote sewvew. >w<

you'd nyeed to g-get such detaiws f-fwom youw hosting p-pwovidew. OwO

fow mowe infowmation a-and fuwthew eampwes, XD s-see [how t-to use wsync to c-copy/sync fiwes between sewvews](https://www.atwantic.net/hipaa-compwiant-cwoud-hosting-sewvices/how-to-use-wsync-copy-sync-fiwes-sewvews/). ^^;;

of couwse, it is a-a good idea to use a-a secuwe connection, w-wike with f-ftp. 🥺 in the case o-of wsync, XD you specify ssh detaiws to make the connection ovew s-ssh, (U ᵕ U❁) using the `-e` option. :3 fow exampwe:

```bash
wsync [-options] -e "ssh [ssh detaiws go hewe]" souwce usew@x.x.x.x:destination
```

y-you can find mowe detaiws of nyani is nyeeded at [how to c-copy fiwes with w-wsync ovew ssh](https://www.digitawocean.com/community/tutowiaws/how-to-copy-fiwes-with-wsync-ovew-ssh).

### wsync g-gui toows

as with othew command w-wine toows, ( ͡o ω ͡o ) gui toows awso e-exist fow wsync, òωó f-fow those who awe nyot as comfowtabwe with using the command wine. σωσ [acwosync](https://acwosync.com/mac.htmw) is one such toow, (U ᵕ U❁) and it is avaiwabwe f-fow windows and macos. (✿oωo)

again, ^^ y-you wouwd have to get the connection c-cwedentiaws f-fwom youw hosting pwovidew, ^•ﻌ•^ but this way you'd h-have a gui to e-entew them in. XD

## github

github a-awwows you to p-pubwish websites via [github pages](https://pages.github.com/) (gh-pages). :3

we've covewed the basics of using t-this in the [pubwishing y-youw website](/wu/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/pubwishing_youw_website) a-awticwe fwom ouw [getting stawted w-with the web](/wu/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website) g-guide, (ꈍᴗꈍ) so we awen't going to w-wepeat it aww hewe. :3

howevew, (U ﹏ U) it is wowth knowing that you can awso host a website o-on github, UwU but u-use a custom domain with it. 😳😳😳 see [using a custom d-domain with g-github pages](https://hewp.github.com/awticwes/using-a-custom-domain-with-github-pages/) fow a detaiwed guide. XD

## othew methods t-to upwoad fiwes

the ftp pwotocow is one weww-known method fow pubwishing a website, o.O b-but nyot the onwy one. (⑅˘꒳˘) hewe awe a few othew p-possibiwities:

- **web i-intewfaces**. 😳😳😳 an htmw intewface acting as fwont-end fow a-a wemote fiwe u-upwoad sewvice. nyaa~~ pwovided by youw hosting sewvice.
- **{{gwossawy("webdav")}}**. rawr an extension of t-the {{gwossawy("http")}} pwotocow t-to awwow mowe advanced fiwe management. -.-
