---
title: Window.openDialog()
slug: Web/API/Window/openDialog
translation_of: Web/API/Window/openDialog
---
{{ ApiRef() }}

### Zusammenfassung

`window.openDialog` ist eine Erweiterung von [window.open](/en/DOM/window.open "en/DOM/window.open"). Es ist fast das gleiche, ausser das optional nach `windowFeatures` zusätzliche Parameter angegeben werden können, und `windowFeatures` selber wird ein bisschen anders behandelt.

Die optionalen Parameter, wenn vorhanden, werden zu einem JavaScript Array gebündelt und zum neu geöffneten Fenster hinzugefügt als eine Eigenschaft namens [window.arguments](/en/DOM/window.arguments "en/DOM/window.arguments"). Sie können jederzeit im JavaScript des Fensters verwendet werden, auch während der ausführung eines `load` handler. Diese Parameter können dafür benutzt werden, um in beide Richtungen Daten mit dem Dialogfenster auszutauschen.

Beachten sie, das nach dem Aufruf von `openDialog()` sofort weitergefahren wird. Wenn Sie wollen, dass der Aufruf blockiert bis der Benutzer den Dialog schliesst, geben sie `modal` als `windowFeatures` Parameter an. Beachten sie, dass der Benutzer das opener window nicht bedienen kann, bis er den Dialog schliesst.

### Syntax

    newWindow = openDialog(url, name, features, arg1, arg2, ...)

- newWindow
  - : Das geöffnete Fenster
- url
  - : Die URL, die im neu geöffneten Fenster geladen wird.
- name
  - : Der Name des Fensters (optional). Siehe [window.open](/en/DOM/window.open "en/DOM/window.open") für detailierte Informationen.
- features
  - : Siehe [window.open](/en/DOM/window.open "en/DOM/window.open").
- arg1, arg2, ...
  - : Die Argumente, die dem neuen Fenster gegeben werden (optional).

### Beispiel

    var win = openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);

### Zu beachten

#### Neue Features

`all` - Aktiviert (oder deaktiviert `("all=no")`) anfangs alles chrome (ausser die behaviour flags `chrome`, `dialog` und `modal`). Diese können überschrieben werden (z.B. `"menubar=no,all"` schaltet alles chrome ein ausser die Menüleiste.) Dieses Feature wird explizirt ignoriert von [window.open](/en/DOM/window.open "en/DOM/window.open"). `Für window.openDialog` ist es nützlich wegen unterschiedlichem Standardverhalten.

#### Standardverhalten

Die window Features `chrome` und `dialog` sind immer eingeschaltet, ausser sie werden explizit ausgeschaltet ("`chrome=no`"). `openDialog` behandelt einen nicht vorhandenen features Parameter gleich wie [window.open](/en/DOM/window.open "en/DOM/window.open"), (ein leerer String schaltet alle Features aus) ausser `chrome` und `dialog`, welche standartmässig eingeschaltet sind. Wenn der `features` Parameter ein leerer String ist, oder nur behaviour features (`chrome`, `dependent`, `dialog` und `modal`) enthält, werden die chrome features nach der "OS' choice" ausgewählt. Das heisst, der window creation code erhält keine spezifischen Anweisungen, kann dafür das chrome auswählen, das am besten zu einem Dialog auf diesem operating system passt.

#### Zusätzliche Parameter zum Dialog hinzufügen

Um dem Fenster zusätzliche Parameter hinzuzufügen, können Sie diese einfach nach dem `windowFeatures` parameter einfügen:

    openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);

Die zusätzlichen Parameter werden dann in eine Eigenschaft gepackt namens `arguments` mit dem Typ [Array](/en/Core_JavaScript_1.5_Reference/Global_Objects/Array "en/Core_JavaScript_1.5_Reference/Global_Objects/Array"), und diese Eigenschaft wird dem neu erzeugten Fenster hinzugefügt.

Benützen Sie dieses Schema, um im Code des Dialogs auf diese zusätzlichen Parameter zuzugreifen:

    var food  = window.arguments[0];
    var price = window.arguments[1];

Beachten Sie, dass Sie überall im Code des Dialogs auf diese Eigenschaft zugreiffen können. ([Anderes Beispiel](/en/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog "en/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog")).

#### Werte vom Dialog zurückerhalten

Weil `window.close()` alle Eigenschaften des Dialogfensters löscht (d.h. die Variablen vom JavaScript des Dialogs), ist es nicht möglich, mit globalen Variablen (oder anderen Konstrukten) nach dem Schliessen Werte zurückzugeben.

Um Werte zum Aufrufer zurückzugeben, müssen Sie ein Objekt mit den zusätzlichen Parametern übergeben. Sie können im Code des Dialogs auf dieses Objekt zugreiffen und Eigenschaften setzen, welche die Werte enthalten, die Sie zurückgeben wollen oder die Sie auch nach `window.close() `behalten wollen.

    var retVals = { address: null, delivery: null };
    openDialog("http://example.tld/zzz.xul", "dlg", "modal", "pizza", 6.98, retVals);

Wenn Sie im Dialog die Eigenschaften von `retVals` im Code des Dialogs setzen wie unten beschrieben, können Sie über `retVals` auf sie zugreiffen nach dem der Aufruf von `openDialog()` zurückkommt.

Im JavaScript des Dialogs können Sie wie folgt auf die Eigenschaften zugreiffen:

    var retVals = window.arguments[2];
    retVals.address  = enteredAddress;
    retVals.delivery = "immediate";

Siehe auch hier. ([anderes Beispiel](/en/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog "en/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog")).
Siehe auch window\.importDialog (mobile).

### Spezifikation

{{ DOM0() }}
