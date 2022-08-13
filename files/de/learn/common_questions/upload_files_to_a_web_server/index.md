---
title: Wie lädst Du deine Dateien auf einem Webserver hoch?
slug: Learn/Common_questions/Upload_files_to_a_web_server
tags:
  - FTP
  - GitHub
  - Uploading
  - rsync
  - sftp
translation_of: Learn/Common_questions/Upload_files_to_a_web_server
---
Dieser Artikel zeigt dir wie Du deine Seite online mithilfe von Dateiübertragungs-Tools veröffentlichen kannst.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorraussetzungen:</th>
      <td>
        Du musst wissen
        <a href="https://developer.mozilla.org/en-US/Learn/What_is_a_web_server"
          >was ein Webserver ist</a
        >
        und
        <a
          href="https://developer.mozilla.org/en-US/Learn/Understanding_domain_names"
          >wie Domainnamen funktionieren</a
        >. Du musst ebenfalls wissen wie man eine
        <a href="/en-US/Learn/Set_up_a_basic_working_environment"
          >einfache Umgebung einrichtet</a
        >
        und wie man
        <a href="/en-US/Learn/HTML/Write_a_simple_page_in_HTML"
          >eine einfache Webseite schreibt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lerne wie man Dateien mithilfe von verschiedenen Dateiübertragungs Tools
        auf einem Server hochlädt.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Falls Du eine einfache Webseite erstellt hast (siehe [HTML basics](/de/docs/Learn/Getting_started_with_the_web/HTML_basics) für ein Beispiel), willst Du diese wahrscheinlich auf einem Webserver online stellen. In diesem Artikel diskutieren wir darüber wie man dies mit Verwendung verschiedener Optionen wie SFTP-Klienten, Rsync and GitHub macht.

## SFTP

Es gibt mehrere SFTP-Klienten. Unsere Demo umfasst [FileZilla](https://filezilla-project.org/), da es kostenlos und verfügbar ist für Windows, macOS und Linux. Um FileZilla zu installieren, gehe zur [FileZilla Download-Seite](https://filezilla-project.org/download.php?type=client), klicke auf die große Download-Schaltfläche und installiere dann mithilfe der Installationsdatei auf dem üblichen Weg.

> **Note:** **Bemerkung**: Natürlich gibt es eine Menge anderer Möglichkeiten. Siehe [Publishing tools](/en-US/Learn/How_much_does_it_cost#Publishing_tools.3A_FTP_client) für mehr Informationen.

Öffne das FileZilla Programm. So sollte es in etwa aussehen:

![](https://mdn.mozillademos.org/files/15767/filezilla-ui.png)

### Einloggen

Für dieses Beispiel nehmen wir an, dass unser Hosting-Anbieter (der Service welcher unseren HTTP Web-Server hosten wird) eine fiktive Firma namens "Example Hosting Provider" ist, dessen URLs so aussehen: `mypersonalwebsite.examplehostingprovider.net`.

Wir haben soeben einen Account eröffnet und diese Informationen von ihnen erhalten:

> Gratulation zum Eröffnen eines Accounts bei Example Hosting Provider.
>
> Ihr Account ist: `demozilla`
>
> Ihre Webseite wird sichtbar sein unter `demozilla.examplehostingprovider.net`
>
> Um diesen Account zu veröffentlichen, verbinden Sie sich durch SFTP mit den folgenden Zugangsdaten:
>
> - SFTP-Server: `sftp://demozilla.examplehostingprovider.net`
> - Benutzername: `demozilla`
> - Passwort: `quickbrownfox`
> - Port: `5548`
> - Um etwas im Netz zu veröffentlichen, legen Sie ihre Dateien in den `Public/htdocs` Ordner.

Lasse uns zuerst einen Blick auf `http://demozilla.examplehostingprovider.net/` werfen — wie Du sehen kannst, ist dort bisher nichts:

![Our demozilla personal website, seen in a browser: it's empty](https://mdn.mozillademos.org/files/9615/demozilla-empty.png)

> **Note:** **Bemerkung**: Abhängig von deinem Hosting-Anbieter wirst Du die meiste Zeit eine Seite sehen die so etwas wie “Diese Website wird gehosted von \[Hosting Service].” anzeigt, wenn Du deine Webadresse zum ersten mal besuchst.

Um deinen SFTP-Klienten mit dem Remoteserver zu verbinden, folge diesen Schritten:

1. Wähle _File > Site Manager..._ vom Hauptmenü.
2. Im _Site Manager_ Fenster, klicke auf die _New Site_ Schaltfläche, dann fülle den Seitennamen als **demozilla** im angegebenen Feld aus.
3. Fülle den SFTP-Server, welcher dein Host bereitgestellt hat in das _Host:_ Feld.
4. In dem _Logon Type:_ Drop-down-Menü, wähle _Normal_, dann fülle deinen angegebenen Nutzernamen und Passwort in die entsprechenden Felder.
5. Fülle den korrent Port aus und andere Informationen.

Dein Fenster sollte nun in etwa so aussehen:

![](https://mdn.mozillademos.org/files/15769/site-manager.png)

Klicke jetzt _Verbinden_ um zum SFTP-Server zu verbinden.

Bemerkung: Stelle sicher, dass dein Hosting-Anbieter eine SFTP (Secure FTP)-Verbindung zu deinem Webspace anbietet. FTP ist grundsätzlich unsicher und Du solltest es nicht verwenden.

### Hier und dort: Lokale und remote Ansicht

Einmal verbunden, sollte dein Bildschirm etwa so aussehen (wir haben uns mit einem eigenen Beispiel verbunden um dir einen Eindruck zu geben):

![](https://mdn.mozillademos.org/files/15768/connected.png)

Lasse uns prüfen was du siehst:

- On the center left pane, you see your local files. Navigate into the directory where you store your website (e.g. `mdn`).
- On the center right pane, you see remote files. We are logged into our distant FTP root (in this case, `users/demozilla`)
- You can ignore the bottom and top panes for now. Respectively, these are a log of messages showing the connection status between your computer and the SFTP server, and a live log of every interaction between your SFTP client and the server.

### Uploading to the server

Our example host instructions told us "To publish on the web, put your files into the `Public/htdocs` directory." You need to navigate to the specified directory in your right pane. This directory is effectively the root of your website — where your `index.html` file and other assets will go.

Once you've found the correct remote directory to put your files in, to upload your files to the server you need to drag-and-drop them from the left pane to the right pane.

### Sind sie wirklich online?

So far, so good, but are the files really online? You can double-check by going back to your website (e.g. `http://demozilla.examplehostingprovider.net/`) in your browser:

![Here we go: our website is live!](https://mdn.mozillademos.org/files/9627/here-we-go.png)

Und _voilà_! Unsere Webseite ist live!

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

### Rsync GUI Tools

As with other command line tools, GUI tools also exist for Rsync, for those who are not as comfortable with using the command line. [Acrosync](https://acrosync.com/mac.html) is one such tool, and it is available for Windows and macOS.

Again, you would have to get the connection credentials from your hosting provider, but this way you'd have a GUI to enter them in.

## GitHub

GitHub erlaubt Die Webseiten via [GitHub pages](https://pages.github.com/) (gh-pages) zu veröffentlichen.

We've covered the basics of using this in the [Publishing your website](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Publishing_your_website) article from our [Getting started with the Web](/en-US/Learn/Getting_started_with_the_web) guide, so we aren't going to repeat it all here.

However, it is worth knowing that you can also host a website on GitHub, but use a custom domain with it. See [Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) for a detailed guide.

## Andere Methoden um Dateien hochzuladen

The FTP protocol is one well-known method for publishing a website, but not the only one. Here are a few other possibilities:

- **Web interfaces**. An HTML interface acting as front-end for a remote file upload service. Provided by your hosting service.
- **{{Glossary("WebDAV")}}**. An extension of the {{Glossary("HTTP")}} protocol to allow more advanced file management.
