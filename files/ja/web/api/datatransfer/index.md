---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer`** オブジェクトは、コンテキスト間で転送されるデータ（ドラッグ＆ドロップ操作やクリップボードの読み書きなど）を保持するために使用されます。1 つ以上のデータ項目を保持でき、各項目は 1 つ以上のデータ型を持つ可能性があります。

`DataTransfer` は主に [HTML ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) の {{domxref("DragEvent.dataTransfer")}} プロパティとして設計され、現在も HTML ドラッグアンドドロップセクションで規定されています。しかし現在では、{{domxref("ClipboardEvent.clipboardData")}} や {{domxref("InputEvent.dataTransfer")}} などの他の API でも使用されるようになりました。ただし、他の API は `dropEffect` などのプロパティを無視し、そのインターフェイスの一部のみを使用します。`DataTransfer` のドキュメントでは主にドラッグ＆ドロップ操作における使用法について説明します。他のコンテキストでの `DataTransfer` の使用法については、各 API のドキュメントを参照してください。

## コンストラクター

- {{domxref("DataTransfer.DataTransfer","DataTransfer()")}}
  - : 新しい `DataTransfer` オブジェクトを作成して返す。

## インスタンスプロパティ

- {{domxref("DataTransfer.dropEffect")}}
  - : 現在選択されているドラッグ＆ドロップ操作の種類を取得したり、新しい操作の種類をセットしたりします。値は `none`, `copy`, `link`, `move` のいずれかです。
- {{domxref("DataTransfer.effectAllowed")}}
  - : とりうるすべての操作の種類を与えます。`none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all`, `uninitialized` のいずれかです。
- {{domxref("DataTransfer.files")}} {{ReadOnlyInline}}
  - : データトランスファーが保持していて利用可能なすべてのローカルファイルのリストを保持します。ドラッグ操作がファイルのドラッグによるものではない場合、このプロパティは空のリストになります。
- {{domxref("DataTransfer.items")}} {{ReadOnlyInline}}
  - : 全てのドラッグデータのリストである {{domxref("DataTransferItemList")}} オブジェクトを返します。
- {{domxref("DataTransfer.types")}} {{ReadOnlyInline}}
  - : 文字列の配列で、 {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントで設定された形式を示します。

## インスタンスメソッド

- {{domxref("DataTransfer.addElement()")}} {{experimental_inline}} {{non-standard_inline}}
  - : 指定された要素のドラッグソースを設定します。これにより、{{domxref("HTMLElement/drag_event", "drag")}} および {{domxref("HTMLElement/dragend_event", "dragend")}} イベントが発生する要素が、デフォルトのターゲット（ドラッグされたノード）ではなくなります。Firefox 固有です。
- {{domxref("DataTransfer.clearData()")}}
  - : 指定された型のデータを削除します。型の指定は省略可能です。型として空の文字列を指定した場合、もしくは型を指定しなかった場合、すべての型のデータが削除されます。指定された型のデータが存在しない場合、またはデータトランスファーが何もデータを持っていない場合、このメソッドは何もしません。
- {{domxref("DataTransfer.getData()")}}
  - : 指定された型のデータを取得します。指定された型のデータが存在しない場合、またはデータトランスファーが何もデータを保持していない場合、空文字を返します。
- {{domxref("DataTransfer.setData()")}}
  - : 指定された型のデータを設定します。その型のデータが存在しない場合、データはリストの最後に追加されるため、データ型のリストの最後の項目は、最後に追加された新しいデータ型となります。その型のデータがすでに存在している場合、データ型のリストにおける元と同じ位置で、古いデータが新しいデータと置き換わります。
- {{domxref("DataTransfer.setDragImage()")}}
  - : 独自のものが求められる場合、ドラッグ中に使われる画像を設定します。

## 例

この記事に記載されているすべてのメソッドとプロパティには、それぞれリファレンスページがあり、それぞれのリファレンスページには、インターフェイスの例が直接記載されているか、例へのリンクが張られています。

### pate または drop イベントでのデータの読み取り

次の例では、{{htmlelement("form")}} 内に 3 種類のテキスト入力要素が含まれています。テキストの {{htmlelement("input")}} 要素、{{htmlelement("textarea")}} 要素、そして [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性が `true` に設定された {{htmlelement("div")}} 要素です。ユーザーはこれらのいずれの要素にもテキストを貼り付けたりドロップしたりでき、{{domxref("ClipboardEvent.clipboardData")}} または {{domxref("DragEvent.dataTransfer")}} オブジェクト内のデータが表示されます。

#### HTML

```html
<form>
  <fieldset>
    <legend>&lt;input /></legend>
    <input type="text" />
    <table class="center">
      <tbody>
        <tr>
          <th scope="row">操作型</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">コンテンツ型</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
  <fieldset>
    <legend>&lt;textarea /></legend>
    <textarea></textarea>
    <table class="center">
      <tbody>
        <tr>
          <th scope="row">操作型</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">コンテンツ型</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
  <fieldset>
    <legend>&lt;div contenteditable /></legend>
    <div contenteditable></div>
    <table class="center">
      <tbody>
        <tr>
          <th scope="row">操作型</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">コンテンツ型</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
  <p class="center">
    <input type="reset" />
  </p>
</form>
```

#### CSS

```css
.center {
  text-align: center;
}

form > fieldset > * {
  vertical-align: top;
}
form input,
form textarea,
form [contenteditable] {
  min-width: 15rem;
  padding: 0.25rem;
}
[contenteditable] {
  appearance: textfield;
  display: inline-block;
  min-height: 1rem;
  border: 1px solid;
}

form table {
  display: inline-table;
}
table ol {
  text-align: left;
}
```

#### JavaScript

```js
const form = document.querySelector("form");

function displayData(event) {
  if (event.type === "drop") event.preventDefault();

  const cells = event.target.nextElementSibling.querySelectorAll("td");
  cells[0].textContent = event.type;
  const transfer = event.clipboardData || event.dataTransfer;
  const ol = document.createElement("ol");
  cells[1].textContent = "";
  cells[1].appendChild(ol);
  for (const item of transfer.items) {
    const li = document.createElement("li");
    li.textContent = `${item.kind} ${item.type}`;
    ol.appendChild(li);
  }
}

form.addEventListener("paste", displayData);
form.addEventListener("drop", displayData);
form.addEventListener("reset", () => {
  for (const cell of form.querySelectorAll("[contenteditable], td")) {
    cell.textContent = "";
  }
});
```

#### 結果

{{EmbedLiveSample("Reading the data in a paste or drop event", "", 400, , , , , "allow-forms")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
