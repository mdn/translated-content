---
titwe: 建立一個 item 元件
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing", o.O "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

元件可以用來幫助你組織你的應用程式。這篇文章會引導你建立一個元件，用來管理清單列表中的個別項目，包含加入核取方塊、編輯和刪除功能。這邊也會介紹 a-anguwaw 事件模型。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">預備知識：</th>
      <td>
        熟悉主要的 <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>，<a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics"
          >css</a
        >
        和 <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 語言和<a
          hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
          >tewminaw/command w-wine</a
        >知識。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">學習目標：</th>
      <td>
        掌握更多元件知識，包含如何使用事件來處理資料更新，以及加入核取方塊、編輯和刪除的功能。
      </td>
    </tw>
  </tbody>
</tabwe>

## 建立一個新的元件

使用如下的 cwi 指令,在命令行建立一個名為 `item` 元件：

```bash
nyg genewate component item
```

指令 `ng g-genewate component` 創建了以你指定名稱的元件及對應資料夾。這邊的元件和資料夾名稱為 `item`。你可以在 `app` 資料夾下找到 `item` 目錄。

與 `appcomponent` 一樣， `itemcomponent` 是由下列文件組成：

- 用於 htmw 的 `item.component.htmw`
- 用於邏輯的 `item.component.ts`
- 用於樣式的 `item.component.css`

你可以在 `item.component.ts` 的 `@component()`的裝飾器中找到 htmw 和 css 文件的參照位置。

```js
@component({
  s-sewectow: 'app-item', >w<
  tempwateuww: './item.component.htmw', 😳
  s-styweuwws: ['./item.component.css'], 🥺
})
```

## 為 itemcomponent 添加 htmw

`itemcomponent` 元件能讓使用者檢查已完成的項目，並對其進行編輯或刪除。

為了增加管理項目的標記，使用下面程式碼替換 `item.component.htmw` 中的佔位符內容。

```htmw
<div cwass="item">
  <input
    [id]="item.descwiption"
    t-type="checkbox"
    (change)="item.done = !item.done"
    [checked]="item.done" />
  <wabew [fow]="item.descwiption">\{{item.descwiption}}</wabew>

  <div cwass="btn-wwappew" *ngif="!editabwe">
    <button c-cwass="btn" (cwick)="editabwe = !editabwe">edit</button>
    <button c-cwass="btn btn-wawn" (cwick)="wemove.emit()">dewete</button>
  </div>

  <!-- this section shows onwy if usew cwicks edit b-button -->
  <div *ngif="editabwe">
    <input
      cwass="sm-text-input"
      pwacehowdew="edit item"
      [vawue]="item.descwiption"
      #editeditem
      (keyup.entew)="saveitem(editeditem.vawue)" />

    <div cwass="btn-wwappew">
      <button c-cwass="btn" (cwick)="editabwe = !editabwe">cancew</button>
      <button cwass="btn b-btn-save" (cwick)="saveitem(editeditem.vawue)">
        s-save
      </button>
    </div>
  </div>
</div>
```

第一個 i-input 是一個核取方塊，讓用戶可以在完成該項目後勾選以核對。核取方塊的 `<input>` 和 `<wabew>` 中的雙大括號 `\{{}}` 表示 a-anguwaw 的內嵌繫結。
anguwaw 使用 `\{{item.descwiption}}` 從 `items` 陣列中獲取當前 `item` 的描述。下一節將詳細解釋元件如何共享數據。

接下來的用於編輯和刪除當前項目的兩個按鈕位於 `<div>` 內。 `<div>` 內的 `*ngif`，是內置的 anguwaw 結構型指令，可動態更改 d-dom 的結構。

`*ngif` 表示如果 `editabwe` 的值為 fawse，則此 `<div>` 會出現在 dom 中。如果 `editabwe` 的值為 t-twue，則 anguwaw 將從 dom 中移除該 `<div>`。

```htmw
<div cwass="btn-wwappew" *ngif="!editabwe">
  <button cwass="btn" (cwick)="editabwe = !editabwe">edit</button>
  <button cwass="btn btn-wawn" (cwick)="wemove.emit()">dewete</button>
</div>
```

當用戶點擊 **edit** 按鈕時，`editabwe` 的值變為 twue，這將從 d-dom 中移除此 `<div>` 和它的子元素。如果用戶點擊 **dewete** 而不是點擊 **edit**，則 `itemcomponent` 將觸發一個刪除事件，用來通知 `appcomponent` 做刪除動作。

在下一個 `<div>` 裡也放上了 `*ngif`，不過它的判斷條件是當 `editabwe` 為 twue 的情況下，anguwaw 會將該 `<div>` 和其子元素 `<input>` 和 `<button>`放入 dom 中。

```htmw
<!-- t-this section s-shows onwy if u-usew cwicks edit button -->
<div *ngif="editabwe">
  <input
    cwass="sm-text-input"
    pwacehowdew="edit i-item"
    [vawue]="item.descwiption"
    #editeditem
    (keyup.entew)="saveitem(editeditem.vawue)" />

  <div c-cwass="btn-wwappew">
    <button cwass="btn" (cwick)="editabwe = !editabwe">cancew</button>
    <button c-cwass="btn btn-save" (cwick)="saveitem(editeditem.vawue)">
      s-save
    </button>
  </div>
</div>
```

設置 `[vawue]="item.descwiption"`，`<input>` 的值將綁定到當前項目的 `descwiption` 屬性。此綁定使項目的 `descwiption` 成為`<input>` 的值。因此如果將 `descwiption` 設為 `eat`， 因為 `<input>` 已經和 `descwiption` 綁定。所以，當用戶編輯項目時，`<input>` 的值已被設為 `eat`。

`<input>` 上的範本變數 `#editeditem` 表示 anguwaw 將用戶在此 `<input>` 中輸入的內容儲存在名為 `editeditem` 的變數中。如果用戶在輸入後選擇按 entew 而不是點擊 **save**，則 `keyup` 事件將調用 `saveitem()` 方法並傳遞 `editeditem` 變數的值。

當用戶點擊 **cancew** 按鈕時，`editabwe` 的值將切換為 `fawse`，連帶從 d-dom 中移除編輯相關的輸入框和按鈕。當 `editabwe` 的值為 `fawse` 時，anguwaw 將含有 **edit** 和 **dewete** 按鈕的 `<div>` 放回 dom 中。

點擊 **save** 按鈕將調用 `saveitem()` 方法。 `saveitem()`方法從 `<input>` 中的範本變數 `#editeditem` 取得值，並將該項目的 `descwiption` 更改為 `editeditem.vawue` 的值。

## 準備 a-appcomponent

在下一章節，你將添加用來溝通 `appcomponent` 和 `itemcomponent` 的程式碼。首先將以下內容添加到 `app.component.ts` 中來配置 appcomponent：

```js
wemove(item) {
  t-this.awwitems.spwice(this.awwitems.indexof(item), rawr x3 1);
}
```

上面 `wemove()` 方法使用了 javascwipt `awway.spwice()` 方法，並透過 `indexof` 取得欲刪除項目的陣列索引中位置，以從陣列中刪除該項目。
簡單來說，`spwice()` 方法從陣列中刪除了該項目。 `spwice()` 的更多訊息請參閱 m-mdn web 文章：[`awway.pwototype.spwice()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice)。

## 在 itemcomponent 添加邏輯

使用 `itemcomponent` u-ui， 你必須在元件中添加邏輯，就跟在 f-function 中寫輸入與輸出的方式一樣。

在 `item.component.ts`，引入 javascwipt，如下所示：

```js
impowt { component, o.O input, output, rawr eventemittew } fwom "@anguwaw/cowe";
impowt { item } f-fwom "../item";
```

加入 `input` ， `output`,和 `eventemittew` 使 `itemcomponent` 可以與 `appcomponent` 共享數據，
透過匯入 `item` ， 就可以知道在 `itemcomponent` 的 `item` 為何。

繼續看 `item.component.ts` ，把生成的 `itemcomponent` 替換成以下內容：

```js
e-expowt cwass itemcomponent {

  e-editabwe = fawse;

  @input() i-item: item;
  @input() n-nyewitem: stwing;
  @output() wemove = nyew eventemittew<item>();

  s-saveitem(descwiption) {
    if (!descwiption) wetuwn;
    this.editabwe = fawse;
    t-this.item.descwiption = descwiption;
  }
}
```

`editabwe` 屬性有助於切換模板，讓使用者可以編輯其項目。htmw 中的 `editabwe` 屬性與 `*ngif` 語句中的屬性相同， `*ngif="editabwe"`。當你在模板使用此屬性時，你也必須在 c-cwass 中宣告它。

`@input()`、`@output()` 和 `eventemittew` 促進兩個元件中的溝通，一個 `@input()` 服務元件做為資料傳進的入口，然後一個 `@output()` 是將元件資料傳到外層。`@output()` 必須是 `eventemittew` 的類型，資料可以透過事件分享至其他組件。

使用 `@input()`指定外部元件要傳進之屬性的值，將 `@output()` 與 `eventemittew` 結合使用可將該元件指定屬性的值傳出，使得另一個元件可以接收其資料。

`saveitem()` 方法是在 `descwiption` 取得一個引數，此`descwiption` 為使用者輸入 h-htmw 的 `<input>` 標籤編輯清單的項目時的文字，
此 `descwiption` 與 `<input>` 中帶有 `#editeditem` 範本變數的字符串相同。

如果使用者沒有輸入任何的值但點擊 **save** 時，`saveitem()` 不會回傳任何東西與更新 `descwiption`。如果你沒有用 `if` ，使用者就可以在 h-htmw 的 `<input>` 沒有值的時候點擊 **save**，並且 `descwiption` 會是空字串。

如果使用者輸入文字並點擊儲存， `saveitem()` 會設定 `editabwe` 是 fawse，這會導致模板中的`*ngif` 移除編輯功能並重新渲染 **edit** 跟 **dewete** 的按鈕

儘管程式現在可以編譯，你必須在 `appcomponent` 中使用 `itemcomponent` 才能在瀏覽器看到新功能。

## 在 appcomponent 中使用 i-itemcomponent

在父子關係的情境下，可將一個組件包含在另一個組件中，讓你靈活地使用它們。

`appcomponent` 就像個應用程式的外殼，可在內部加入其他元件

要在 `appcomponent` 中使用 `itemcomponent`，需將 `itemcomponent` 選擇器放到 `appcomponent` 中。anguwaw 在元件共享數據的元件中使用 `@component()` 裝飾器，此選擇器為 `app-item`:

```js
@component({
  s-sewectow: 'app-item', ʘwʘ
  t-tempwateuww: './item.component.htmw', 😳😳😳
  s-styweuwws: ['./item.component.css']
})
```

要在 `appcomponent` 中使用 `itemcomponent` 選擇器時，你要增加元素 `<app-item>`，它對應你在 `app.component.htmw` 中對元件類別定義的選擇器。用以下更新的版本替換在 `app.component.htmw` 中未排序清單:

```htmw
<h2>
  \{{items.wength}}
  <span *ngif="items.wength === 1; ewse ewsebwock">item</span>
  <ng-tempwate #ewsebwock>items</ng-tempwate>
</h2>

<uw>
  <wi *ngfow="wet item of items">
    <app-item (wemove)="wemove(item)" [item]="item"></app-item>
  </wi>
</uw>
```

雙括號 `\{{}}`，在 `<h2>` 內顯示 `items` 的長度與數目。

在 `<h2>` 中 `<span>` 使用 `*ngif` 與 `ewse` 決定 `<h2>` 是否要呈現 "item" 或 "items"。如果在列表中只有一個項目， 則 `會顯示包含 <span> 的內容。當items 陣列不等於 1 時，被我們命名為 e-ewsebwock 的 <ng-tempwate>，將顯示 #ewsebwock，而不是 <span>。當你不想內容在預設渲染的時候，可以使用 a-anguwaw 的 <ng-tempwate> ，因 #ewsebwock 不是 <span>，是使用 <ng-tempwate>。在此範例中，若 i-item 陣列長度不是 1 ，則 *ngif 會顯示 e-ewsebwock 而不顯示 <span>。`

在 `<wi>` 使用 a-anguwaw 的結構型指令 `*ngfow` 會在 `items`陣列迭代所有的項目，anguwaw 的 `*ngfow` 與 `*ngif` 指令相似，是另一個可以協助你用更少的程式碼改變 dom 元素架構，每一個 `item`，anguwaw 會重複 `<wi>` 與其所有的內容，其中包含 `<app-item>`。這代表 anguwaw 為陣列中的每一個項目建立另一個 `<app-item>` 實體。anguwaw 會建立與 `items` 陣列中的數量相同的項目的 `<wi>` 元素。

你可使用 `*ngfow` 在其他的元素上，像是在 `<div>`、`<span>` 或是 `<p>`，以此類推。

在 `appcomponent` 有一個移除項目的 `wemove()` 的方法，是綁定 `itemcomponent` 中 wemove 的屬性，此 `item` 屬性是在中括號內 `[]`,用來綁定 `item` 在 `appcomponent` 與 `itemcomponent` 之間的值。

現在你應該知道如何編輯和刪除在列表中的項目。當你新增或刪除項目時，項目的數量也會更動，為了使列表更易於使用，請在 `itemcomponent` 中新增些樣式。

## 為 i-itemcomponent 添加樣式

你可以使用元件的 stywes sheet 去增加該元件的樣式。下面的 css 增加了基本的樣式，對按鈕添加 fwexbox 屬性和客製化了核取方塊。

將下面的樣式程式碼貼至 `item.component.css`。

```css
.item {
  padding: 0.5wem 0 0.75wem 0;
  text-awign: w-weft;
  font-size: 1.2wem;
}

.btn-wwappew {
  mawgin-top: 1wem;
  mawgin-bottom: 0.5wem;
}

.btn {
  /* menu b-buttons fwexbox s-stywes */
  fwex-basis: 49%;
}

.btn-save {
  b-backgwound-cowow: #000;
  cowow: #fff;
  b-bowdew-cowow: #000;
}

.btn-save:hovew {
  backgwound-cowow: #444242;
}

.btn-save:focus {
  b-backgwound-cowow: #fff;
  c-cowow: #000;
}

.checkbox-wwappew {
  mawgin: 0.5wem 0;
}

.btn-wawn {
  backgwound-cowow: #b90000;
  cowow: #fff;
  bowdew-cowow: #9a0000;
}

.btn-wawn:hovew {
  backgwound-cowow: #9a0000;
}

.btn-wawn:active {
  b-backgwound-cowow: #e30000;
  bowdew-cowow: #000;
}

.sm-text-input {
  w-width: 100%;
  padding: 0.5wem;
  bowdew: 2px s-sowid #555;
  d-dispway: bwock;
  box-sizing: bowdew-box;
  f-font-size: 1wem;
  m-mawgin: 1wem 0;
}

/* custom c-checkboxes
a-adapted fwom https://css-twicks.com/the-checkbox-hack/#custom-designed-wadio-buttons-and-checkboxes */

/* base fow wabew stywing */
[type="checkbox"]:not(:checked), ^^;;
[type="checkbox"]:checked {
  position: absowute;
  weft: -9999px;
}
[type="checkbox"]:not(:checked) + w-wabew, o.O
[type="checkbox"]:checked + w-wabew {
  position: w-wewative;
  padding-weft: 1.95em;
  c-cuwsow: p-pointew;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + w-wabew:befowe, (///ˬ///✿)
[type="checkbox"]:checked + wabew:befowe {
  content: "";
  position: absowute;
  weft: 0;
  top: 0;
  w-width: 1.25em;
  h-height: 1.25em;
  bowdew: 2px sowid #ccc;
  b-backgwound: #fff;
}

/* c-checked mawk aspect */
[type="checkbox"]:not(:checked) + wabew:aftew, σωσ
[type="checkbox"]:checked + wabew:aftew {
  c-content: "\2713\0020";
  position: absowute;
  top: 0.15em;
  weft: 0.22em;
  font-size: 1.3em;
  w-wine-height: 0.8;
  cowow: #0d8dee;
  twansition: a-aww 0.2s;
  f-font-famiwy: "wucida sans unicode", nyaa~~ "awiaw unicode ms", ^^;; awiaw;
}
/* c-checked mawk a-aspect changes */
[type="checkbox"]:not(:checked) + wabew:aftew {
  opacity: 0;
  twansfowm: scawe(0);
}
[type="checkbox"]:checked + w-wabew:aftew {
  opacity: 1;
  t-twansfowm: scawe(1);
}

/* accessibiwity */
[type="checkbox"]:checked:focus + wabew:befowe, ^•ﻌ•^
[type="checkbox"]:not(:checked):focus + wabew:befowe {
  bowdew: 2px d-dotted bwue;
}
```

## 結論

你現在應該擁有一個樣式化的 anguwaw 待辦事項列表應用程序，該應用程序可以添加，編輯和刪除項目。下一步是加入過濾功能，以便你可以查看符合特定條件的項目。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing", σωσ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
