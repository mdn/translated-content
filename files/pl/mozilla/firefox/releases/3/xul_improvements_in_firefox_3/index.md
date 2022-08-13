---
title: Poprawki XUL w Firefoksie 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
tags:
  - Firefox 3
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
  - XUL
translation_of: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
original_slug: Poprawki_XUL_w_Firefoksie_3
---
{{FirefoxSidebar}}

Firefox 3 oferuje kilka nowych elementów [XUL](/pl/XUL "pl/XUL"), jak również poprawki do już istniejących elementów. Mimo, iż ten materiał jest udokumentowany gdzie indziej, ten artykuł dostarcza dogodną listę wyżej wspomnianych poprawek jak i linki do dokładnej dokumentacji.

### Nowe elementy

- [Kontrolki numeryczne](/pl/Kurs_XUL/Kontrolki_numeryczne "pl/Kurs_XUL/Kontrolki_numeryczne"):

  - Nowy element [`<scale>`](/pl/XUL/scale "pl/XUL/scale") pozwala na tworzenie ruchomych skali, które pozwalają użytkownikowi wybrać jakąkolwiek wartość w określonym zakresie. Ten gadżet mógłby by być używany, dla przykładu; do tworzenia regulacji głośności dźwięku.
  - Nowa wartość, `number`, dla atrybutu `type` dla textboxes tworzy okienko tekstowe, w którym może zostać tylko wprowadzone cyfry. Dodatkowo, pojawiają się przyciski w kształcie strzałek z obu stron, co może zostać użyte do przemieszczania się pomiędzy wartościami. {{ interwiki('wikimo', 'XUL:Specs:NumberBox', 'Więcej informacji na temat numerycznych okienek tekstowych') }}({{ Bug(345510) }})
  - Element [`<spinbuttons>`](/pl/XUL/spinbuttons "pl/XUL/spinbuttons") został dodany, który może zostać użyty przy tworzeniu gadżetów za pomocą wiązań XBL ({{ Bug(155053) }})
  - Dwa gadżety, [`<datepicker>`](/pl/XUL/datepicker "pl/XUL/datepicker") i [`<timepicker>`](/pl/XUL/timepicker "pl/XUL/timepicker"), mogą zostać użyte, aby zezwolić wprowadzenie dat i czasów. datepicker jest dostępny w licznych stylach poprzez ustawienie atrybutu `type`, aby zezwolić wpis okienek tekstowych lub siatki kalendarzowych. {{ interwiki('wikimo', 'XUL:Specs:DateTimePickers', 'Więcej informacji na temat date pickers') }} [Referencje dla Datepicker ](/pl/XUL/datepicker "pl/XUL/datepicker")[Referencje dla Timepicker](/pl/XUL/timepicker "pl/XUL/timepicker")

- Stworzono przewodnik dla [menu i popup-ów](/pl/XUL/PopupGuide "pl/XUL/PopupGuide") opisujący nowe dostępne funkcje:

  - Element [`<dropmarker>`](/pl/XUL/dropmarker "pl/XUL/dropmarker") jest pomocny przy tworzeniu menu podobnych gadżetów za pomocą wiązań XBL. ({{ Bug(348614) }})
  - Element [`<panel>`](/pl/XUL/panel "pl/XUL/panel") jest nowy i zaprojektowany dla popup-ów które nie znajdują się w menu. Mogą obsługiwać jakikolwiek typ zawartości. Element \<menupopup> powinien być używany dla menu. Menu dają możliwość nawigacji klawiaturą i obsługują otwieranie i zamykanie podmenu.

### Poprawki drzewek

- Teraz drzewka mogą być skrolowane horyzontalnie. Jeżeli kolumny nie mieszczą się w dostępnej szerokości, pojawia się horyzontalny suwak skrolowania. Tak się dzieje, jeżeli określone szerokości kolumny zajmują więcej niż jest dostępnego miejsca. Zobacz {{ Bug(212789) }}, aby dowiedzieć się o szczegółach.
- Nowy styl selekcjonowania pozwala na wybieranie pojedynczych komórek zamiast całych rzędów. Aby użyć tego stylu selekcjonowania, ustaw atrybut drzewek `seltype` do `cell`.
- Teraz drzewka obsługują edytowanie pojedynczych komórek. Kiedy użytkownik podwójnie kliknie na edytowalną komórkę, pojawi się pole tekstowe, w którym użytkownik może edytować zawartość danej komórki. Zobacz {{ interwiki('wikimo', 'XUL:Tree', 'te notatki') }}, aby dowiedzieć się o szczegółach.
- Teraz element \<treecol> obsługuje atrybut `overflow`, którego wartość logiczna może być ustawiona na prawdę, aby zezwolić, gdy tekst jest za duży żeby zmieścić się w pojedynczej komórce, tekstowi komórek wewnątrz kolumny na rozszerzanie się na sąsiadujące puste komórki.

### Poprawki menu

- The `image` attribute is now used consistently for setting images.
- Menulists fire the `select` event when selecting an item.
- The `inputField` and `editable` properties have been added to menulist
- The `<menu>`, `<menuitem>` and `<menuseparator>` elements now have a readonly `selected` property which retrieves whether the item is selected in a \<menulist>
- The `<menu>`, `<menuitem>` and `<menuseparator>` elements now have a readonly `control` property which returns the enclosing \<menulist>
- The `<menu>`, `<menuitem>` and `<menuseparator>` elements now support the `accessKey`, `disabled`, `crop`, `image` and `label` properties which set the corresponding attribute
- The \<menu> element now has methods to append, insert and remove menuitems. ({{ Bug(372552) }})
- Editable menulists now offer an `editor` property to get the internal `nsIEditor` for its text field.
- Menus may now be made translucent on platforms that support it ({{ Bug(70798) }}).

### Poprawki textbox

- Setting a [textbox](/pl/XUL/textbox "pl/XUL/textbox")'s `spellcheck` attribute to `true` enables inline spellchecking for that textbox.
- The `<textbox>` now has a `reset()` method to reset the value of the textbox to the default value. The `defaultValue` property may be used to retrieve and modify the default value of the textbox.
- An `editor` property is now offered, which lets you get the internal `nsIEditor` for the text field.
- [`textbox`](/pl/XUL/textbox "pl/XUL/textbox") now supports a `newlines` attribute which specifies how line breaks in pasted text are handled. Possible values are:

  - `pasteintact` - paste everything as is
  - `pastetofirst` - (default value) paste only up to the first line break
  - `replacewithspaces` - replace line breaks with spaces
  - `replacewithcommas` - replace line breaks with commas
  - `strip` - strip out all line breaks
  - `stripsurroundingwhitespace` - strip out all line breaks and surrounding whitespace

### Inne poprawki

- The `type` attribute on a `<button>` may be set to `repeat` to create buttons which fire their command event repeatedly while the mouse button is held down.
- The [`buttondisabledaccept`](/pl/XUL/Atrybut/buttondisabledaccept "pl/XUL/Atrybut/buttondisabledaccept") attribute can now be used on the `<dialog>` element to have the accept (OK) button initially disabled.
- The `<titlebar>` element now supports the `allowevents` attribute to allow events to be passed to the children of the titlebar.
- The `<splitter>` now supports an additional value for the `collapse` attribute of `'both'` which indicates that the splitter can collapse elements on both sides of it when dragged. The `substate` attribute will set to either before or after when one is collapsed. ({{ Bug(337955) }})
- The `<richlistbox>` element now supports multiple selection. Set the `seltype` attribute to `'multiple'` to enable this.
- The `<radio>` element has a `group` attribute which may be set to the id of a `<radiogroup>` element which the radio button belongs to. This allows the radio buttons to arranged in a manner that may not be as suitable when placing them all inside a radiogroup.
- Menus, panels and tooltips support two additional methods, [`openPopup()`](/pl/XUL/Metoda/openPopup "pl/XUL/Metoda/openPopup") and [`openPopupAtScreen()`](/pl/XUL/Metoda/openPopupAtScreen "pl/XUL/Metoda/openPopupAtScreen"). These methods should be used instead of `showPopup()` which was found to be confusing to use.
- Handling of the `<key>` element improved for non-Latin keyboard layout users. See [Gecko Keypress Event](/pl/Gecko_Keypress_Event "pl/Gecko_Keypress_Event").
- On Mac OS X, the [activetitlebarcolor](/pl/XUL/Atrybut/activetitlebarcolor "pl/XUL/Atrybut/activetitlebarcolor") and [inactivetitlebarcolor](/pl/XUL/Atrybut/inactivetitlebarcolor "pl/XUL/Atrybut/inactivetitlebarcolor") attributes of the root elements (`<window>`, `<dialog>`, `<prefwindow>` and `<wizard>`) are available to customize the color of the windows' title bars.

### Zobacz również

- [XUL](/pl/XUL "pl/XUL")
- [Firefox 3 dla programistów](/pl/Firefox_3_dla_programistów "pl/Firefox_3_dla_programistów")
