---
title: Как загрузить файлы на веб-сервер
slug: Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server
---

Данная статья покажет, как можно опубликовать сайт в Интернет с помощью инструментов передачи файлов(file transfer tools).

| Необходимые знания: | Вы должны знать [что такое веб-сервер](/ru/docs/Learn/%D0%A7%D1%82%D0%BE_%D1%82%D0%B0%D0%BA%D0%BE%D0%B5_%D0%B2%D0%B5%D0%B1_%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80) и [как работают доменные имена](/ru/docs/Learn/Understanding_domain_names). Также вы должны знать, [как установить базовую среду](/ru/docs/Learn/Common_questions/set_up_a_local_testing_server) и [как написать простую веб-страницу](/ru/docs/Learn/Getting_started_with_the_web). |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:               | Научиться передавать файлы на сервер используя различные доступные инструменты передачи файлов(file transfer tools).                                                                                                                                                                                                                                                                                                                                  |

## Сводка

Если вы создали простую веб-страницу (для примера смотрите [Основы HTML](/ru/docs/Learn/Getting_started_with_the_web/HTML_basics)), вы, вероятно, захотите отобразить её онлайн, на веб-сервере. В данной статье мы обсудим как сделать это, используя различные доступные настройки, такие как SFTP клиенты, RSync и GitHub.

## SFTP (Безопасный Протокол Передачи Файлов)

Существуют различные варианты SFTP клиентов. В нашем примере мы будем использовать [FileZilla](https://filezilla-project.org/), тк он бесплатен и подходит для Windows, macOS и Linux. Чтобы установить менеджер перейдите на страницу загрузки [FileZilla downloads page](https://filezilla-project.org/download.php?type=client), нажмите на кнопку загрузки, затем установите пакет из установочного файла обычным способом.

> **Примечание:** Конечно, есть много других вариантов. Смотрите [Publishing tools](/en-US/Learn/How_much_does_it_cost#Publishing_tools.3A_FTP_client) для других способов.

Откройте приложение FileZilla; вы должны увидеть что-то вроде этого:

![](filezilla-ui.png)

### Вход в систему

В этом примере мы предположим, что наш хостинг-провайдер (сервис, на котором находится наш HTTP веб сервер) является фиктивной компанией "Example Hosting Provider", чьи URL адреса выглядят следующим образом: `mypersonalwebsite.examplehostingprovider.net`.

Сейчас мы создали аккаунт и получили от хостинг-провайдера следующую информацию:

> Поздравляем с созданием аккаунта на сервисе "Example Hosting Provider".
>
> Ваш аккаунт: `demozilla`
>
> Ваш сайт доступен по адресу:
>
> `demozilla.examplehostingprovider.net`
>
> Для загрузки файлов на этот аккаунт, пожалуйста, подключитесь через SFTP с использованием следующих учётных данных:
>
> - SFTP сервер: `sftp://demozilla.examplehostingprovider.net`
> - Имя пользователя: `demozilla`
> - Пароль: `quickbrownfox`
> - Порт: `5548`
> - Для публикации в интернет, поместите ваши файлы в папку `Public/htdocs` .

Давайте сначала посмотрим на `http://demozilla.examplehostingprovider.net/` — как вы можете видеть, то здесь пока ничего нет:

![Our demozilla personal website, seen in a browser: it's empty](demozilla-empty.png)

> **Примечание:** В зависимости от вашего хостинг-провайдера, когда вы впервые заходите на свой веб-адрес, большую часть времени вы будете видеть страницу, на которой написано что-то вроде этого: "This website is hosted by \[Hosting Service]."

Чтобы подключить SFTP клиент к удалённому серверу, выполните следующие действия:

1. Выберите _File > Site Manager..._ в главном меню.
2. В окне _Site Manager_, нажмите кнопку _New Site_, затем введите название сайта как **demozilla** в предоставленном месте.
3. Укажите SFTP-сервер вашего хоста в предоставленном поле: Host.
4. В раскрывающемся списке _Logon Type:_ выберите _Normal_, затем введите предоставленные имя пользователя и пароль в соответствующие поля.
5. Введите правильный порт и другую информацию.

Ваше окно должно выглядеть как показано ниже:

![](site-manager.png)

Теперь нажмите _Connect_ для подключения к SFTP-серверу.

Примечание: Убедитесь, что ваш хостинг-провайдер предлагает SFTP (безопасный FTP) подключение к вашему хостинговому пространству. FTP по своей сути небезопасен, и вам не следует его использовать.

### Здесь и там: локальный и удалённый просмотр

После подключения ваш экран должен выглядеть примерно так (мы подключились к нашему собственному примеру, чтобы дать вам представление):![](connected.png)

Давайте посмотрим, что вы видите:

- По центру левой панели вы можете видеть локальные файлы. Перейдите в каталог, в котором вы храните свой веб-сайт (например, `mdn`).
- По центру правой панели вы увидеть удалённые файлы. Мы вошли в наш удалённый корень FTP (в данном случае: `users/demozilla`)
- Вы можете пока игнорировать нижнюю и верхнюю панели. Соответственно, это журнал сообщений, показывающий состояние соединения между вашим компьютером и SFTP-сервером, и журнал в реальном времени каждого взаимодействия между вашим SFTP-клиентом и сервером.

### Загрузка на сервер

Наш пример инструкций для хостинга указывает нам следующее: "Чтобы опубликовать в Интернете, поместите свои файлы в каталог: `Public/htdocs`." Вам нужно перейти в указанный каталог на правой панели. Этот каталог фактически является корнем вашего веб-сайта, где находятся ваши `index.html` , откуда ваши файл и другие активы будут отправлены.

После того, как вы нашли правильный удалённый каталог для размещения файлов, чтобы загрузить файлы на сервер, вам необходимо переместить их с левой панели на правую.

### Как узнать, что они online?

Пока все хорошо, но действительно ли файлы в сети? Вы можете перепроверить, перейдя на ваш сайт (например, `http://demozilla.examplehostingprovider.net/`) в вашем браузере:

![Here we go: our website is live!](here-we-go.png)

И вуаля! Наш сайт работает!

## Rsync

{{Glossary("Rsync")}} is a local-to-remote file synchronizing tool, which is generally available on most Unix-based systems (like macOS and Linux), but Windows versions exist too.

It is seen as a more advanced tool than SFTP, beause by default it is used on the command line. A basic command looks like so:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` is a dash followed by a one or more letters, for example `-v` for verbose error messages, and `-b` to make backups. You can see the full list at the [rsync man page](https://linux.die.net/man/1/rsync) (search for "Options summary").
- `SOURCE` is the path to the local file or directory that you want to copy files over from.
- `user@` is the credentials of the user on the remote server you want to copy files over to.
- `x.x.x.x` is the IP address of the remote server.
- `DESTINATION` is the path to the location you want to copy your directory or files to on the remote server.

You'd need to get such details from your hosting provider.

For more information and further eamples, see [How to Use Rsync to Copy/Sync Files Between Servers](https://www.atlantic.net/hipaa-compliant-cloud-hosting-services/how-to-use-rsync-copy-sync-files-servers/).

Of course, it is a good idea to use a secure connection, like with FTP. In the case of Rsync, you specify SSH details to make the connection over SSH, using the `-e` option. For example:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

You can find more details of what is needed at [How To Copy Files With Rsync Over SSH](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

### Rsync GUI tools

As with other command line tools, GUI tools also exist for Rsync, for those who are not as comfortable with using the command line. [Acrosync](https://acrosync.com/mac.html) is one such tool, and it is available for Windows and macOS.

Again, you would have to get the connection credentials from your hosting provider, but this way you'd have a GUI to enter them in.

## GitHub

GitHub allows you to publish websites via [GitHub pages](https://pages.github.com/) (gh-pages).

We've covered the basics of using this in the [Publishing your website](/en-US/Learn/Getting_started_with_the_web/Publishing_your_website) article from our [Getting started with the Web](/en-US/Learn/Getting_started_with_the_web) guide, so we aren't going to repeat it all here.

However, it is worth knowing that you can also host a website on GitHub, but use a custom domain with it. See [Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) for a detailed guide.

## Other methods to upload files

The FTP protocol is one well-known method for publishing a website, but not the only one. Here are a few other possibilities:

- **Web interfaces**. An HTML interface acting as front-end for a remote file upload service. Provided by your hosting service.
- **{{Glossary("WebDAV")}}**. An extension of the {{Glossary("HTTP")}} protocol to allow more advanced file management.
