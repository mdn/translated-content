---
title: <input>
slug: Web/HTML/Element/Input
tags:
  - Element
  - Formulare
  - HTML
  - HTML Formulare
  - HTML input tag
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/HTML/Element/input
---
{{HTMLRef}}

Das **HTML-Element `<input>`** ermöglicht es, interaktive Bedienelemente für webbasierte Formulare zu erstellen, die Daten vom Benutzer entgegennehmen.
Eine große Bandbreite verschiedener Eingabedaten und Bedienelemente ist verfügbar, abhängig je nach Gerät und {{Glossary("user agent")}}. Das `<input>` Element ist eine der mächtigsten und komplexesten von allen HTML-Elemente, da es eine ungeheure Anzahl an Kombinationen aus Eingabetypen und Attributen besitzt.

## Beispiel

Um einen Eindruck davon zu bekommen, wie die unterschiedlichen Typen des \<input>-Elements aussehen, kannst du die Werte des Attributs **type** im folgenden editierbaren Live-Beispiel ändern. Die Ausgabe verändert sich, während du tippst. In jedem Fall erzeugt der Anfangswert `text` eine einfache Textausgabe. Du kannst andere Werte ausprobieren, etwa `number`, `color`, `checkbox`, `radio`, `date`, `file`, `month`, `password`, `range` oder `time`.

{{EmbedGHLiveSample("learning-area/html/forms/editable-input-example/editable_input.html", '100%', 230)}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/HTML/Content_categories#Flow_content"
          >Flow content</a
        >, listed, submittable, resettable, form-associated element,
        <a href="/en-US/docs/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >.<br />Wenn der {{htmlattrxref("type", "input")}} nicht den
        Wert <code>hidden</code> hat, dann ein label-bares Element, mit
        greifbarem Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>Keiner, das ist ein leeres Element.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Muss ein Start-Tag und darf kein End-Tag haben</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternknoten</th>
      <td>
        Jedes Element, das
        <a href="/en-US/docs/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >
        erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>: {{ARIARole("link")}},
            {{ARIARole("menuitem")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("menuitemradio")}},
            {{ARIARole("radio")}}, {{ARIARole("switch")}},
            {{ARIARole("tab")}}
          </li>
          <li>
            <code>type=checkbox</code>: {{ARIARole("button")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("option")}}, {{ARIARole("switch")}}
          </li>
          <li>
            <code>type=image</code>: {{ARIARole("link")}},
            {{ARIARole("menuitem")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("menuitemradio")}},
            {{ARIARole("radio")}}, {{ARIARole("switch")}}
          </li>
          <li>
            <code>type=radio</code>: {{ARIARole("menuitemradio")}}
          </li>
          <li>
            <code>type=color|date|datetime|datetime-local|email|file</code>:
            None
          </li>
          <li>
            <code>type=hidden|month|number|password|range|research</code>: None
          </li>
          <li><code>type=search|submit|tel|text|url|week</code>: None</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
  </tbody>
</table>

##

## Arten des \<input>-Elements

Wie ein \<input> sich verhält ist stark von seinem **type**-Attribut abhängig. Deshalb werden dessen Werte in einer eigenen Referenz beschrieben. Fehlt das Attribut, gilt der Standardwert `text`.

`type` kann folgende Werte annehmen:

- [button](/de/docs/Web/HTML/Element/input/button): Ein Knopf zum Drücken ohne voreingestelltes Verhalten.
- [checkbox](/de/docs/Web/HTML/Element/input/checkbox): Ein Kästchen zum Auswählen. Das **value**-Attribut muss benutzt werden, um den Wert zu definieren, den dieses Element übermittelt. Mit dem **checked**-Attribut kann angezeigt werden, dass das Element ausgewählt ist. Es ist auch möglich das **indeterminate**-Attribut zu verwenden, um anzuzeigen, dass das Kästchen sich in einem undefinierten Zustand befindet (auf den meisten Plattformen wird dies durch eine horizontale Linie durch das Kästchen dargestellt).
- [color](/de/docs/Web/HTML/Element/input/color): {{HTMLVersionInline("5")}} Ein Bedienelement zum Festlegen einer Farbe. Die Benutzerschnittstelle einer Farbauswahl muss nichts anderes tun, als einfache Farben als Text anzunehmen. ([mehr Infos](<http://www.w3.org/TR/html5/forms.html#color-state-(type=color)>)).
- [date](/de/docs/Web/HTML/Element/input/date): {{HTMLVersionInline("5")}} Ein Bedienelement zum Eingeben eines Datum (Jahr, Monat und Tag, ohne Uhrzeit).
- [datetime-local](/de/docs/Web/HTML/Element/input/datetime-local): {{HTMLVersionInline("5")}} Ein Bedienelement zum Eingeben eines Datums mit Uhrzeit, ohne Zeitzone.
- [email](/de/docs/Web/HTML/Element/input/email): {{HTMLVersionInline("5")}} Ein Feld zum Bearbeiten einer E-Mail-Adresse. Der Eingabewert wird vor dem Übermitteln darauf überprüft, ob er entweder leer ist oder eine einzelne, valide E-Mail-Adresse enthält. Die CSS-Pseudoklassen {{cssxref(":valid")}}- und {{cssxref(":invalid")}} werden entsprechend gesetzt.
- `file`: Ein Bedienelement, das den Nutzer eine Datei auswählen lässt. Das **accept**-Attribut definiert die Art der auswählbaren Dateien.
- `hidden`: Ein unsichtbares Bedienelement, dessen Wert aber dennoch an den Server übermittelt wird.
- `image`: Ein graphischer Knopf zum Abschicken. Das **src**-Attribut ist erforderlich, um die Quelle des Bildes anzugeben. Im ebenfalls verpflichtenden a**lt**-Attribut ist alternativer Text zu definieren. Die **height**- und **width**-Attribute können benutzt werden um die Größe des Bildes in Pixeln anzugeben.
- `month`: {{HTMLVersionInline("5")}} Ein Bedienelement zum Eingeben von Monat und Jahr, ohne Zeitzone.
- `number`: {{HTMLVersionInline("5")}} Ein Bedienelement zum Eingeben einer Gleitkommazahl.
- `password`: Ein einzeiliges Textfeld, dessen Wert verschleiert wird. Das **maxlength**-Attribut legt die maximale Länge des einzugebenden Wertes fest.

  > **Note:** **Bemerkung**: Alle Formulare mit sensitiven Daten wie Passwörter (z.B. Anmeldeformulare) sollten über HTTPS ausgeliefert werden. Firefox warnt mit verschiedenen Methoden vor unsicheren Anmeldeverfahren (siehe [Insecure passwords](/de/docs/Web/Security/Insecure_passwords)). Andere Browser bieten ähnliche Mechanismen.

- `radio`: Ein Schaltknopf. Das **value**-Attribut muss verwendet werden, um den von diesem Element übermittelten Wert festzulegen. Das **checked**-Attribut definiert, ob es standardmäßig angewählt ist. Schaltknöpfe mit demselben Wert für das **name**-Attribut gehören zur selben Gruppe. Nur jeweils ein Schaltknopf einer Gruppe kann angewählt sein.
- `range`: {{HTMLVersionInline("5")}} Ein Bedienelement zum Eintragen einer Zahl, deren genauer Wert unwichtig ist. Sind die entsprechenden Attribute nicht festgelegt, gelten folgende Voreinstellungen:

  - `min`: 0
  - `max`: 100
  - `value`: `min` + (`max`-`min`)/2, or `min` if `max` is less than `min`
  - `step`: 1

- `reset`: Ein Knopf, der den Inhalt des Formulars auf die Standardwerte zurücksetzt.
- `search`: {{HTMLVersionInline("5")}} Ein einzeiliges Textfeld zur Eingabe von Suchbegriffen. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt.
- `submit`: Ein Knopf zum Übermitteln des Formulars.
- `tel`: {{HTMLVersionInline("5")}} Ein Bedienelement zum Anzeigen einer Telefonnummer. Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt, sonst werden keine anderen Regeln erzwungen. Attribute wie pattern und **maxlength** können verwendet werden, um zulässige Werte einzuschränken. Die CSS-Pseudoklassen {{cssxref(":valid")}}- und {{cssxref(":invalid")}} werden entsprechend gesetzt.
- `text`: Ein einzeiliges Textfeld; Zeilenumbrüche werden automatisch aus dem Eingabewert entfernt.
- `time`: {{HTMLVersionInline("5")}} Ein Bedienelement zum Eingeben einer Uhrzeit ohne Zeitzone.
- `url`: {{HTMLVersionInline("5")}} Ein Feld zum Eingeben einer URL. Der Eingabewert wird vor dem Übermitteln darauf überprüft, ob er leer oder eine korrekte, absolute URL ist. Attribute wie **pattern** und **maxlength** können verwendet werden um zulässige Werte einzuschränken. Die CSS-Pseudoklassen {{cssxref(":valid")}}- und {{cssxref(":invalid")}} werden entsprechend gesetzt.
- `week`: {{HTMLVersionInline("5")}} Ein Bedienelement zum Eingeben eines Datums bestehend aus einer Jahreszahl und einer Wochennummer, ohne Zeitzone.

Einige Werte für das **type**-Attribut sind jetzt überflüssg:

- `datetime`: {{HTMLVersionInline("5")}} {{deprecated_inline}} {{obsolete_inline}} Ein Bedienelement zum Eingeben eines Datums mit Uhrzeit (Stunde, Minute, Sekunde und Bruchteil einer Sekunde). Diese Eigenschaft wurde [in WHATWG HTML entfernt](https://github.com/whatwg/html/issues/336).

## Attribute

### Globale \<input>-Attribute

Dieser Abschnitt beschreibt die für alle Arten des `input`-Elements verfügbaren Attribute. Nicht-globale Attribute – und globale, die sich bei unterschiedlichen `input`-Elementen anders verhalten – werden bei diesen Elementen behandelt.

> **Note:** **Bemerkung**: Das gilt auch für die globalen HTML-Attribute

- Ein zulässiger MIME-Typ ohne Erweiterungen
- `audio/*` für Klang-Dateien {{HTMLVersionInline("5")}}
- `video/*` für Video-Dateien {{HTMLVersionInline("5")}}
- `image/*` für Bild-dateien {{HTMLVersionInline("5")}}

- {{htmlattrdef("type")}}
  - : Die Art des Bedienelements. Siehe [Arten des \<input>-Elements](#arten_des_<input>-elements) für die einzelnen Typen.
- {{htmlattrdef("accept")}}
  - : Ist der Wert des **type**-Attributes `file`, beschreibt dieses Attribut die Art der Dateien, die der Server akzeptiert. Sonst wird es ignoriert. Der Wert muss eine durch Kommata getrennte Liste eindeutiger Werte sein:
- {{htmlattrdef("accesskey")}} {{HTMLVersionInline(4)}} only, {{obsoleteGeneric("inline", "HTML5")}}
  - : Ein einzelnes Zeichen, dass der Benutzer drücken kann, um den Fokus zu diesem Feld zu bewegen. Dieses Attribute ist in HTML5 global.
- {{htmlattrdef("mozactionhint")}} {{non-standard_inline}}
  - : Definiert einen "Aktionstipp", der festlegt wie die Eingabetaste auf Geräten mit virtueller Tastatur erscheint. Zulässige Werte sind `go`, `done`, `next`, `search` und `send`. Sie werden automatisch der passenden Zeichenkette zugeordnet. Groß-/Kleinschreibung spielt keine Rolle.
- {{htmlattrdef("autocapitalize")}} {{non-standard_inline}}
  - : Dieses Attribut ist nicht standardisiert. [Chrome](https://developers.google.com/web/updates/2015/04/autocapitalize) und iOS Safari Mobile kontrollieren damit, ob und wie eingegebener Text automatisch in Großbuchstaben gewandelt wird. Die nicht veralteten Werte sind ab IOS 5 verfügbar. Zulässige Werte sind:\* `none`: Automatische Großschreibung abschalten.
    - `sentences`: Satzanfänge automatisch groß schreiben.
    - `words`: Wortanfänge automatisch groß schreiben.
    - `characters`: Alles automatisch großschreiben.
    - `on`: {{deprecated_inline}} Seit iOS 5 veraltet.
    - `off`: {{deprecated_inline}} Seit iOS 5 veraltet.[`autocapitalize` documentation](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-autocapitalize) in der Safari HTML Reference.
- {{htmlattrdef("autocomplete")}} {{HTMLVersionInline("5")}}

  - : Dieses Attribute gibt an, ob der Browser den Wert des Eingabeelements automatisch vervollständigen kann.

    Zulässige Werte sind:\* `off`: Der Anwender muss jedesmal einen Wert in dieses Feld eintragen oder das Dokument stellt ein eigenes Verfahren für das Vervollständigen bereit. Der Browser vervollständigt das Feld nicht automatisch.

    - `on`: Der Browser kann den Wert automatisch vervollständigen, ausgehend von dem, was der Benutzer in der Vergangenheit eingetragen hat. Dieser Wert gibt jedoch keinen Hinweis über die erwarteten Eingaben.
    - `name`: Vollständiger Name.
    - `honorific-prefix: Titel oder Anrede` (z.B. "Herr", "Frau", "Dr."
    - `given-name`: Rufname.
    - `additional-name`: Weitere Vornamen.
    - `family-name`: Nachname.
    - `honorific-suffix`: Namensanhängel (z.B. "Jr.", "B.Sc.", "II").
    - `nickname: Spitzname`
    - `email`: E-Mail-Adresse
    - `username`: Nutzername
    - `new-password`: Ein neues Passwort (z.B. beim Erzeugen eines neuen Accounts oder beim Ändern eines Passworts).
    - `current-password`
    - `organization-title`: Berufsbezeichnung (z.B. "Software-Ingenieur", "Senior Vice President", "Stellvertretender Direktor").
    - `organization`
    - `street-address`: Adresse
    - `address-line1`, `address-line2`, `address-line3`, `address-level4`, `address-level3`, `address-level2`, `address-level1`
    - `country`
    - `country-name`
    - `postal-code: Postleitzahl`
    - `cc-name`: Vollständiger Name wie auf dem Zahlungsinstrument angegeben.
    - `cc-given-name`
    - `cc-additional-name`
    - `cc-family-name`
    - `cc-number`: Code, der das Zahlungsinstrument identifiziert (z.B. die Kreditkartennummer).
    - `cc-exp:` Ablaufdatum des Zahlungsinstruments.
    - `cc-exp-month`
    - `cc-exp-year`
    - `cc-csc`: Sicherheitscode des Zahlungsinstruments.
    - `cc-type`: Art des Zahlungsinstruments (e.g. Visa).
    - `transaction-currency`
    - `transaction-amount`
    - `language`: Bevorzugte Sprache, gültiges BCP 47 Sprach-Tag.
    - `bday: Geburtsdatum`
    - `bday-day`
    - `bday-month`
    - `bday-year`
    - `sex`: Geschlechtliche Identität (z.B. weiblich), beliebiger Text ohne Zeilenumbrüche.
    - `tel`: Telefonnummer
    - `url`: Homepage oder andere Webseite, die zur Firma, Person, Adresse oder der Kontaktinformation in den anderen mit diesem Feld verbundenen Feldern gehört.
    - `photo`: Foto, Icon oder anderes Bild, das zur Firma, Person, Adresse oder der Kontaktinformation in den anderen mit diesem Feld verbundenen Feldern gehört.Der [WHATWG Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) enthält weitere Details zu diesem ThemaIst **autocomplete** für ein Eingabeelement nicht angegeben, verwendet der Browser das **autocomplete**-Attribut des Formular-Eigentümers für dieses Element. Der Formular-Eigentümer ist entweder das `form`-Element, von dem dieses `input`-Element abstammt oder das `form`-Element, dessen **id** im **form**-Attribut des Eingabelements angegeben ist. Mehr Informationen dazu bei {{htmlattrxref("autocomplete", "form")}} in {{HTMLElement("form")}}.Das **autocomplete**-Attribute kontrolliert auch, ob Firefox (anders als andere Browser) die Atribute [disabled und checked eines Eingabeelements zwischen Ladevorgängen der Seite](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) erhält. Diese Funktion ist normalerweise aktiv, es wird durch Setzen von **autocomplete** auf `off` abgeschaltet. Das gilt auch für solche Eingabefelder, für die das **autocomplete**-Attribut normalerweise wegen des Werts von **type** nicht wirkt. Siehe {{bug(654072)}}.Bei den meisten modernen Browsern (einschließlich Firefox 38+, Google Chrome 34+, IE11+) verhindert das Setzen von **autocomplete** nicht, dass der Passwort-Manager dem Nutzer anbietet, seine Login-Daten zu speichern und gegebenenfalls anschließend automatisch einzutragen. Siehe [the autocomplete attribute and login fields](/de/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields).

- {{htmlattrdef("autofocus")}} {{HTMLVersionInline("5")}}
  - : Dieses boolesche Attribut gibt an, dass ein Eingabeelement den Fokus bekommt, wenn die Seite lädt, es sei denn, der Nutzer wechselt ihn, etwa durch Tippen in ein anderes Feld. Nur ein Form-Element in einem Dokument darf das **`autofocus`**-Attribut besitzen. Es kann nicht gesetzt werden, wenn das **`type`**-Attribut `hidden` ist. Das heißt, man kann den Fokus nicht automatisch auf ein unsichtbares Element setzen.

  > **Note:** **Bemerkung**: Der Einsatz des **`autofocus`**-Attributs kann für Nutzer assistiver Technologien (Screenreader etc.) eine **Barriere** darstellen, da Inhalte der Seite übersprungen werden, ohne erfasst werden zu können. Dies kann damit umgangen werden, indem [zusätzlicher beschreibender Text](http://www.brucelawson.co.uk/2009/the-accessibility-of-html-5-autofocus/) hinzugefügt wird.
- {{htmlattrdef("capture")}}
  - : Ist das **type-**Attribute `file`, weist das Vorhandensein dieses boolschen Attributs darauf hin, dass das direkte Mitschneiden von Medien per [media capture mechanism](https://www.w3.org/TR/html-media-capture/#dfn-media-capture-mechanism) bevorzugt ist.
- {{htmlattrdef("checked")}}
  - : Ist das **type**-Attribute `radio` oder `checkbox`, setzt dieses boolsche Attribut das Element auf vorausgewählt. Sonst wird das Attribut ignoriert.
- {{htmlattrdef("disabled")}}
  - : Dieses boolsche Attribut gewährleistet, dass der Nutzer mit dem Eingabeelement nicht interagieren kann. Insbesondere In particular erhalten so abgeschaltete Elemente [keine Click-Events](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#enabling-and-disabling-form-controls). Außerdem wird der Wert eines abgeschalteten Elements beim Übertragen des Formulars nicht übermittelt. Das Attribute wird ignoriert, wenn das **type**-Attribut den Wert `hidden` hat.
- {{htmlattrdef("form")}} {{HTMLVersionInline("5")}}
  - : Das `form`-Element, zu dem dieses Eingabeelement gehört (sein "Formulareigentümer"). Der Wert dieses Attributs muss die **id** eines {{HTMLElement("form")}}-Elements im selben Dokument sein. Fehlt das Attribut, muss das Eingabeelement Abkömmling eines {{HTMLElement("form")}}-Elements sein. Das Attribut ermöglicht es, Eingabeelemente irgendwo in einem Dokument zu platzieren, nicht nur als Abkömmlinge eines `form`-Elements. Ein Eingabeelement darf nur zu einem Formular gehören.
- {{htmlattrdef("formaction")}} {{HTMLVersionInline("5")}}
  - : The URI of a program that processes the information submitted by the input element, if it is a submit button or image. If specified, it overrides the {{htmlattrxref("action","form")}} attribute of the element's form owner.
- {{htmlattrdef("formenctype")}} {{HTMLVersionInline("5")}}
  - : If the input element is a submit button or image, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:\* `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
    - `multipart/form-data`: Use this value if you are using an {{HTMLElement("input")}} element with the {{htmlattrxref("type","input")}} attribute set to `file`.
    - `text/plain`If this attribute is specified, it overrides the {{htmlattrxref("enctype","form")}} attribute of the element's form owner.
- {{htmlattrdef("formmethod")}} {{HTMLVersionInline("5")}}
  - : If the input element is a submit button or image, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:\* `post`: The data from the form is included in the body of the form and is sent to the server.
    - `get`: The data from the form are appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.If specified, this attribute overrides the {{htmlattrxref("method","form")}} attribute of the element's form owner.
- {{htmlattrdef("formnovalidate")}} {{HTMLVersionInline("5")}}
  - : If the input element is a submit button or image, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the {{htmlattrxref("novalidate","form")}} attribute of the element's form owner.
- {{htmlattrdef("formtarget")}} {{HTMLVersionInline("5")}}
  - : If the input element is a submit button or image, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the {{htmlattrxref("target", "form")}} attribute of the elements's form owner. The following keywords have special meanings:\* \_`self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed browsing context.
    - `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.
- {{htmlattrdef("height")}} {{HTMLVersionInline("5")}}
  - : If the value of the **type** attribute is `image`, this attribute defines the height of the image displayed for the button.
- {{htmlattrdef("inputmode")}} {{HTMLVersionInline("5")}}
  - : A hint to the browser for which keyboard to display. This attribute applies when the value of the **type** attribute is text, password, email, or url. Possible values are:\* `verbatim`: Alphanumeric, non-prose content such as usernames and passwords.
    - `latin`: Latin-script input in the user's preferred language with typing aids such as text prediction enabled. For human-to-computer communication such as search boxes.
    - `latin-name`: As _latin_, but for human names.
    - `latin-prose`: As _latin_, but with more aggressive typing aids. For human-to-human communication such as instant messaging for email.
    - `full-width-latin`: As _latin-prose_, but for the user's secondary languages.
    - `kana`: Kana or romaji input, typically hiragana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
    - `katakana`: Katakana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
    - `numeric`: Numeric input, including keys for the digits 0 to 9, the user's preferred thousands separator character, and the character for indicating negative numbers. Intended for numeric codes, e.g. credit card numbers. For actual numbers, prefer using \<input type="number">
    - `tel`: Telephone input, including asterisk and pound key. Use \<input type="tel"> if possible instead.
    - `email`: Email input. Use \<input type="email"> if possible instead.
    - `url`: URL input. Use \<input type="url"> if possible instead.
- {{htmlattrdef("list")}} {{HTMLVersionInline("5")}}
  - : Identifies a list of pre-defined options to suggest to the user. The value must be the **id** of a {{HTMLElement("datalist")}} element in the same document. The browser displays only options that are valid values for this input element. This attribute is ignored when the **type** attribute's value is `hidden`, `checkbox`, `radio`, `file`, or a button type.
- {{htmlattrdef("max")}} {{HTMLVersionInline("5")}}
  - : The maximum (numeric or date-time) value for this item, which must not be less than its minimum (**min** attribute) value.
- {{htmlattrdef("maxlength")}}
  - : If the value of the **type** attribute is `text`, `email`,`search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters (in Unicode code points) that the user can enter; for other control types, it is ignored. It can exceed the value of the **size** attribute. If it is not specified, the user can enter an unlimited number of characters. Specifying a negative number results in the default behavior; that is, the user can enter an unlimited number of characters. The constraint is evaluated only when the value of the attribute has been changed.
- {{htmlattrdef("min")}} {{HTMLVersionInline("5")}}
  - : The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (**max** attribute) value.
- {{htmlattrdef("minlength")}} {{HTMLVersionInline("5")}}
  - : If the value of the **type** attribute is `text`, `email`,`search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters (in Unicode code points) that the user can enter; for other control types, it is ignored.
- {{htmlattrdef("multiple")}} {{HTMLVersionInline("5")}}
  - : This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the **type** attribute is set to `email` or `file`; otherwise it is ignored.
- {{htmlattrdef("name")}}
  - : The name of the control, which is submitted with the form data.
- {{htmlattrdef("pattern")}} {{HTMLVersionInline("5")}}
  - : A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the **title** attribute to describe the pattern to help the user. This attribute applies when the value of the **type** attribute is `text`, `search`, `tel`, `url` or `email`; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes.
- {{htmlattrdef("placeholder")}} {{HTMLVersionInline("5")}}
  - : A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the **type** attribute is `text`, `search`, `tel`, `url` or `email`; otherwise it is ignored.

  > **Note:** Do not use the `placeholder` attribute instead of a {{HTMLElement("label")}} element. Their purposes are different: the {{HTMLElement("label")}} attribute describes the role of the form element; that is, it indicates what kind of information is expected, the `placeholder` attribute is a hint about the format the content should take. There are cases in which the `placeholder` attribute is never displayed to the user, so the form must be understandable without it.
- {{htmlattrdef("readonly")}}
  - : This Boolean attribute indicates that the user cannot modify the value of the control.{{HTMLVersionInline("5")}} This attribute is ignored if the value of the **type** attribute is `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, or a button type.
- {{htmlattrdef("required")}} {{HTMLVersionInline("5")}}
  - : This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the **type** attribute is `hidden`, `image`, or a button type (`submit`, `reset`, or `button`). The {{cssxref(":optional")}} and {{cssxref(":required")}} CSS pseudo-classes will be applied to the field as appropriate.
- {{htmlattrdef("selectionDirection")}} {{HTMLVersionInline("5")}}
  - : The direction in which selection occurred. This is "forward" if the selection was made from left-to-right in an LTR locale or right-to-left in an RTL locale, or "backward" if the selection was made in the opposite direction. This can be "none" if the selection direction is unknown.
- {{htmlattrdef("size")}}
  - : The initial size of the control. This value is in pixels unless the value of the **type** attribute is `text` or `password`, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the **type** attribute is set to `text`, `search`, `tel`, `url`, `email`, or `password`; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used.
- {{htmlattrdef("spellcheck")}} {{HTMLVersionInline("5")}}
  - : Setting the value of this attribute to `true` indicates that the element needs to have its spelling and grammar checked. The value `default` indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value. The value `false` indicates that the element should not be checked.
- {{htmlattrdef("src")}}
  - : If the value of the **type** attribute is `image`, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored.
- {{htmlattrdef("step")}} {{HTMLVersionInline("5")}}
  - : Works with the **min** and **max** attributes to limit the increments at which a numeric or date-time value can be set. It can be the string `any` or a positive floating point number. If this attribute is not set to `any`, the control accepts only values at multiples of the step value greater than the minimum.
- {{htmlattrdef("tabindex")}} element-specific in {{HTMLVersionInline(4)}}, global in {{HTMLVersionInline("5")}}
  - : The position of the element in the tabbing navigation order for the current document.
- {{htmlattrdef("usemap")}} {{HTMLVersionInline(4)}} only, {{obsoleteGeneric("inline", "HTML5")}}
  - : The name of a {{HTMLElement("map")}} element to as an image map.
- {{htmlattrdef("value")}}
  - : The initial value of the control. This attribute is optional except when the value of the **type** attribute is `radio` or `checkbox`.
    Note that when reloading the page, Gecko and IE [will ignore the value specified in the HTML source](https://bugzilla.mozilla.org/show_bug.cgi?id=46845#c186), if the value was changed before the reload.
- {{htmlattrdef("width")}} {{HTMLVersionInline("5")}}
  - : If the value of the **type** attribute is `image`, this attribute defines the width of the image displayed for the button.
- {{htmlattrdef("x-moz-errormessage")}} {{non-standard_inline}}
  - : This Mozilla extension allows you to specify the error message to display when a field doesn't successfully validate.

## Notes

### File inputs

> **Note:** Starting in {{Gecko("2.0")}}, calling the `click()` method on an {{HTMLElement("input")}} element of type "file" opens the file picker and lets the user select files. See [Using files from web applications](/de/docs/Using_files_from_web_applications) for an example and more details.

You can't set the value of a file picker from a script; doing something like the following has no effect:

```js
var e = getElementById("someFileInputElement");
e.value = "foo";
```

### Error messages

If you want Firefox to present a custom error message when a field fails to validate, you can use the `x-moz-errormessage` attribute to do so:

```html
<input type="email" x-moz-errormessage="Please specify a valid email address.">
```

Note, however, that this is not standard and will not have an effect on other browsers.

## Examples

### A simple input box

```html
<!-- A basic input -->
<input type="text" name="input" value="Type here">
```

{{EmbedLiveSample("A simple input box", 300, 300)}}

### A common use-case scenario

```html
<!-- A common form that includes input tags -->
<form action="getform.php" method="get">
    First name: <input type="text" name="first_name" /><br />
     Last name: <input type="text" name="last_name" /><br />
        E-mail: <input type="email" name="user_email" /><br />
<input type="submit" value="Submit" />
</form>
```

### Using mozactionhint on Firefox mobile

You can use the {{htmlattrxref("mozactionhint", "input")}} attribute to specify the text for the label of the enter key on the virtual keyboard when your form is rendered on Firefox mobile. For example, to have a "Next" label, you can do this:

```html
<input type="text" mozactionhint="next" name="sometext" />
```

The result is:

[![mozactionhint.png](/@api/deki/files/4970/=mozactionhint.png?size=webview)](/@api/deki/files/4970/=mozactionhint.png)

## Specifications

| Specification                                                                                                        | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'the-input-element.html#the-input-element', '&lt;input&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'forms.html#the-input-element', '&lt;input&gt;')}}                 | {{Spec2('HTML5 W3C')}}     |         |
| {{SpecName('HTML4.01', 'forms.html#h-17.4', '&lt;form&gt;')}}                                     | {{Spec2('HTML4.01')}}     |         |

## Browser compatibility

{{Compat}}

### Gecko notes

Starting in Gecko 9.0 {{geckoRelease("9.0")}}, Firefox for Android lets users capture images using their camera and upload them, without having to leave the browser. Web developers can implement this feature by simply specifying setting the `accept` attribute's value to "image/\*" on their `file` input, like this:

`<input type="file" accept="image/*">`

## See also

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
- [Cross-browser HTML5 placeholder text](http://webdesignerwall.com/tutorials/cross-browser-html5-placeholder-text)
