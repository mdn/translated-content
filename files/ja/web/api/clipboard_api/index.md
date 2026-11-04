---
title: クリップボード API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: 7b8a3c0a4ab5b4b0c605641e8b64c8da42d8dd51
---

{{DefaultAPISidebar("Clipboard API")}}

**クリップボード API** は、クリップボードのコマンド (切り取り、コピー、貼り付け) に応答する機能や、システムクリップボードの非同期の読み取りや書き込みを行う機能を提供します。

> [!NOTE]
> クリップボードにアクセスするには、非推奨の {{domxref("document.execCommand()")}} メソッドよりもこの API を優先して使用してください。

> [!NOTE]
> この API は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)では利用できません。（{{domxref("WorkerNavigator")}} に公開されていません）。

## 概念と使用法

システムクリップボードは、ブラウザーが動作しているオペレーティングシステムに属するデータバッファーであり、短期間のデータ保存や文書またはアプリケーション間のデータ転送に使用します。
通常、無名で一時的な[データバッファー](https://ja.wikipedia.org/wiki/バッファ)として実装されており、ペーストバッファーと呼ばれることもあります。環境内のほとんどまたはすべてのプログラムから定義されたプログラミングインターフェイスを通じてアクセス可能です。

クリップボード API を使うと、ユーザーは[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)の中で、[セキュリティ上の注意事項](#セキュリティ上の注意事項)で指定された条件が成立する限り、テキストやその他の様々な種類のデータをクリップボードに非同期で読み書きすることができます。

システムクリップボードには、グローバルの {{domxref("Navigator.clipboard")}} を通してアクセスします。

### テキストと複数の表現

{{domxref("Clipboard")}} インターフェイスでは、クリップボードのデータを扱う方法が 2 つあります。

- クリップボードからテキストだけを読み書きする場合は、{{domxref("Clipboard.readText", "readText()")}} と {{domxref("Clipboard.writeText", "writeText()")}} を使用できます。
- {{domxref("Clipboard.read", "read()")}} と {{domxref("Clipboard.write", "write()")}} を使用すると、{{domxref("ClipboardItem")}} オブジェクトの配列をシステムクリップボードとの間で読み書きできます。
  各 `ClipboardItem` は、[メディア型](/ja/docs/Web/HTTP/Guides/MIME_types)をキーとして、同じコンテンツの複数の表現を保持できます。
  これにより、HTML の表、タブ区切りテキスト、画像など、複数の形式でデータをコピーできます。貼り付け先のアプリケーションは、対応している最適な表現を選択できます。
  例えば、HTML を表示できないアプリケーションでも、テキスト版に適切にフォールバックできます。

  ブラウザーや OS によっては、書き込める `ClipboardItem` が 1 つだけで、複数を書き込もうとするとエラーになります。詳しくは [`Clipboard.write()`](/ja/docs/Web/API/Clipboard/write#ブラウザーの互換性) を参照してください。

ブラウザーは、`read()` と `write()` で `text/plain`、`text/html`、`image/png` の表現に対応する必要があります。`image/svg+xml` や次の節で説明する独自の形式など、他の型への対応は任意です。特定の形式が対応しているかどうかは {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}} で確認できます。例は[複数の表現の読み書き](#複数の表現の読み書き)を参照してください。

### 独自のクリップボード形式

`ClipboardItem` には独自の形式を含めることもできます。独自の形式とは、[メディア型 (MIME タイプ)](/ja/docs/Web/HTTP/Guides/MIME_types) の先頭に文字列 `"web "`（`"web"` の後に空白）を付けたものです。これにより、ウェブアプリは標準的な表現がないデータに対して独自のクリップボード形式を定義できます。この形式は OS 標準のクリップボード形式や他のサイトが定義した独自の形式と衝突しません。

独自の形式を使うと、例えば同じコンテンツの視覚的な表現やテキスト表現とともに構造化メタデータを保持するなど、標準形式では保持できない情報を維持できます。独自の形式を認識するアプリは、そのアプリからコピーしたユーザーのデータを損なわずに貼り付けられます。一方、他のアプリには、併せて提供した標準形式のいずれかが渡されます。この機能の重要な用途の 1 つは、同じページ内、または異なるタブやブラウザーで実行されている自分のアプリケーション間でコピーして貼り付けることです。

独自の形式の対応状況はブラウザーによって異なるため、使用する前に[ブラウザーの互換性](#ブラウザーの互換性)と {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}} を確認してください。完全な例は[独自の形式の読み書き](#独自の形式の読み書き)を参照してください。

### クリップボードと切り取り、コピー、貼り付けイベント

イベントは切り取り ({{domxref("Element/cut_event", "cut")}})、コピー ({{domxref("Element/copy_event", "copy")}})、貼り付け ({{domxref("Element/paste_event", "paste")}}) 操作がクリップボードを変更した結果として発行されます。
イベントには既定のアクションがあり、例えば `copy` アクションは既定では現在の選択部分をシステムクリップボードにコピーします。
デフォルトのアクションはイベントハンドラーで上書きすることができます。詳細は各イベントを参照してください。

システムクリップボードの内容が変更されるたびに、{{domxref("Clipboard.clipboardchange_event","clipboardchange")}} イベントが {{domxref("Clipboard")}} オブジェクト上で発行されます。これは、独自のクリップボードを持つアプリケーションをシステムクリップボードと同期させる必要がある場合などに、変更を通知するために役立ちます。

`copy` と `paste` イベントを上書きし、`cut` と `clipboardchange` を監視する例は[切り取り、コピー、貼り付けイベントの上書き](#切り取りコピー貼り付けイベントの上書き)を参照してください。

## インターフェイス

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : システムクリップボードに対してテキストやデータを読み書きするインターフェイスを提供します。
    これは仕様書では「非同期クリップボード API」と呼ばれています。
- {{domxref("ClipboardChangeEvent")}}
  - : システムクリップボードの内容が変更されるたびに発行されるイベントを表します。
- {{domxref("ClipboardEvent")}}
  - : クリップボードの変更に関する情報を提供するイベント、すなわち {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}} イベントを表します。これは仕様書では「クリップボードイベント API」と呼ばれています。
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : 同じデータのメディア型による表現（HTML 版とテキスト版など）を 1 つ以上保持できる、単一のクリップボード項目を表します。

### 他のインターフェイスへの拡張

クリップボード API は以下の API を拡張し、掲載されている機能を追加しています。

- {{domxref("Navigator.clipboard")}} {{readonlyinline}} {{securecontext_inline}}
  - : システムクリップボードへの読み書きアクセスを提供する {{domxref("Clipboard")}} オブジェクトを返します。
- `Element` の [`copy`](/ja/docs/Web/API/Element/copy_event) イベント
  - : ユーザーがコピー操作を行うたびに発行されるイベントです。
- `Element` の [`cut`](/ja/docs/Web/API/Element/cut_event) イベント
  - : ユーザーが切り取り操作を行うたびに発行されるイベントです。
- `Element` の [`paste`](/ja/docs/Web/API/Element/paste_event) イベント
  - : ユーザーが貼り付け操作を行うたびに発行されるイベントです。

## セキュリティ上の注意事項

クリップボード API は、ユーザーが[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)のシステムクリップボードとの間で、テキストや他の種類のデータをプログラムで読み書きすることをできるようにします。

この仕様では、クリップボードから読み取るために、ユーザーが最近ページを操作したことが要求されます ([一時的な活性化](/ja/docs/Web/Security/Defenses/User_activation)が必要です)。
さらに、読み取り処理がブラウザーや OS の「貼り付け要素」(ネイティブのコンテキストメニューにある「貼り付け」を選ぶなど) とのユーザー対話によって発生したことも要求されます。
実際は、ブラウザーはこれらの条件を満たさなくても読み取り処理を許可する一方で、かわりに他の要求 (権限や、処理のたびに確認するなど) をすることが多いです。
クリップボードに書き込む場合、仕様書ではページが[権限 API](/ja/docs/Web/API/Permissions_API) の `clipboard-write` 権限を持つことを期待し、ブラウザーは[単発のユーザー活性化](/ja/docs/Web/Security/Defenses/User_activation)も要求するかもしれません。
ブラウザーはクリップボードにアクセスするメソッドを使用する際に、さらに制限を加えるかもしれません。

{{domxref("Clipboard.clipboardchange_event", "clipboardchange")}} イベントは、[持続的な有効化](/ja/docs/Glossary/Sticky_activation)がある場合、または `clipboard-read` 権限が許可された後にのみ発行されます。

ブラウザーの実装は仕様から乖離しています。
その違いは[ブラウザーの互換性](#ブラウザーの互換性)の節にまとめられており、現在の状態の概要は下記の通りです。

Chromium 系のブラウザー:

- 仕様上読み取りが許されず、文書にフォーカスがあるときは、[権限 API](/ja/docs/Web/API/Permissions_API) の `clipboard-read` 権限を要求し、(ユーザーが許可したか、既に許可されているかで) 権限が許可された場合は読み取りに成功します。
- 書き込みには `clipboard-write` 権限または一時的な活性化が要求されます。
  権限が付与された場合、その権限は維持され、それ以上の一時的な活性化は要求されません。
- クリップボードにアクセスする {{HTMLElement("iframe")}} 要素には、HTTP の [Permissions-Policy](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy) の `clipboard-read` と `clipboard-write` の権限を許可しなければなりません。

Firefox および Safari:

- 仕様上読み取りが許されていないが、一時的な活性化が行われている場合は、(1 秒後に有効化される)「貼り付け」の選択肢のみを持つ一時的なコンテキストメニューの形でユーザーに確認を行い、ユーザーがこの選択肢を選択すると読み取りに成功します。
- 書き込みには一時的な活性化が要求されます。
- 同じオリジンのクリップボードのコンテンツを読み込む場合、paste-prompt は抑制されますが、オリジン間のコンテンツでは抑制されません。
- `clipboard-read` と `clipboard-write` 権限は Firefox や Safari では対応していません (対応する予定もありません)。

Firefox の [Web Extensions](/ja/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- テキストの読み込みは、Web Extension [`clipboardRead`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) 権限を持つ拡張機能でのみ利用できます。
  この権限があれば、拡張機能に一時的な活性化や貼り付けプロンプトは必要ありません。Firefox 147 以降では、保護されたコンテキストで一時的な活性化があり、一時的なコンテキストメニューの貼り付けプロンプトをユーザーがクリックした場合も、権限なしで読み込めます。
- テキストの書き込みは、保護されたコンテキストと一時的な活性化で利用できます。
  ただし、Web Extension の [`clipboardWrite`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) 権限があれば、一時的な活性化は必要ありません。

## 例

### テキストの読み書き

この例では、{{domxref("Clipboard.writeText", "writeText()")}} で 1 行のテキストをコピーし、{{domxref("Clipboard.readText", "readText()")}} で読み戻します。

#### HTML

HTML では、コピーする元のテキストの {{htmlelement("p")}} 要素、テキストをコピーおよび貼り付けする {{htmlelement("button")}} 要素、それらのテキストをコピーする先の要素を定義します。

```html
<p id="source_text">The quick brown fox jumps over the lazy dog.</p>
<button id="copy_text" type="button">コピー</button>
<button id="paste_text" type="button">貼り付け</button>
<p id="target_text"></p>
```

```css hidden
#target_text {
  min-height: 1.2em;
  border: 1px solid black;
  padding: 0.5rem;
}
```

#### JavaScript

次のコードは、テキストを読み書きするクリックイベントハンドラーをボタンに登録します。

```js
const sourceText = document.querySelector("#source_text");
const targetText = document.querySelector("#target_text");

document.querySelector("#copy_text").addEventListener("click", async () => {
  try {
    // テキストをクリップボードに書き込む
    await navigator.clipboard.writeText(sourceText.textContent);
    targetText.textContent = "コピーしました。";
  } catch (error) {
    targetText.textContent = `コピーに失敗しました: ${error.message}`;
  }
});

document.querySelector("#paste_text").addEventListener("click", async () => {
  try {
    // クリップボードからテキストを読み取り、#target_text に書き込む
    targetText.textContent = await navigator.clipboard.readText();
  } catch (error) {
    targetText.textContent = `貼り付けに失敗しました: ${error.message}`;
  }
});
```

#### 結果

「コピー」をクリックしてから「貼り付け」をクリックすると、テキストを読み戻せます。

{{EmbedLiveSample("Reading and writing text", "100%", "150", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> プロンプトが表示された場合は、コピーと貼り付けの権限を許可してください。

### 複数の表現の読み書き

この例では、同じコンテンツの `text/html` と `text/plain` の表現を持つ {{domxref("ClipboardItem")}} を 1 つ作成します。
次にクリップボードを読み取り、見つかったすべての表現を一覧表示します。

#### HTML

```html
<div id="source_multi">
  <p><strong>Bold</strong> と <em>italic</em> のテキスト。</p>
</div>
<button id="copy_multi" type="button">コピー (HTML + プレーンテキスト)</button>
<button id="paste_multi" type="button">貼り付け</button>
<pre id="target_multi"></pre>
```

```css hidden
#source_multi {
  border: 1px solid black;
  padding: 0.5rem;
  width: fit-content;
}

#target_multi {
  min-height: 3em;
  border: 1px solid black;
  padding: 0.5rem;
  white-space: pre-wrap;
}
```

#### JavaScript

前の例と同様に、元の要素をコピーし、対象の要素に貼り付けるイベントハンドラーを作成します。

データをコピーするコードを以下に示します。
このコードでは、`ClipboardItem()` コンストラクターに同じ元データの表現を 2 つ渡しています。

```js
const sourceMulti = document.querySelector("#source_multi");
const targetMulti = document.querySelector("#target_multi");

document.querySelector("#copy_multi").addEventListener("click", async () => {
  const html = sourceMulti.innerHTML;
  const text = sourceMulti.innerText;
  try {
    const clipboardItem = new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([text], { type: "text/plain" }),
    });
    await navigator.clipboard.write([clipboardItem]);
    targetMulti.textContent = "text/html と text/plain をコピーしました。";
  } catch (error) {
    targetMulti.textContent = `コピーに失敗しました: ${error.message}`;
  }
});
```

データの貼り付けに呼び出されるハンドラーを以下に示します。
クリップボード項目を読み込み、目的の型を見つけるためにその型を反復処理する方法を示しています (ここでは型をログに出力するだけです)。
ここでは、返された項目の配列を分割代入して、単一の `[clipboardItem]` を取り出していることに注意してください。

```js
document.querySelector("#paste_multi").addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    const lines = [];
    for (const type of clipboardItem.types) {
      const blob = await clipboardItem.getType(type);
      lines.push(`${type} → ${await blob.text()}`);
    }
    targetMulti.textContent = lines.join("\n");
  } catch (error) {
    targetMulti.textContent = `貼り付けに失敗しました: ${error.message}`;
  }
});
```

#### 結果

「コピー (HTML + プレーンテキスト)」をクリックしてから「貼り付け」をクリックすると、見つかった表現が一覧表示されます。

{{EmbedLiveSample("Reading and writing multiple representations", "100%", "200", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> プロンプトが表示された場合は、コピーと貼り付けの権限を許可してください。

### 独自の形式の読み書き

この例では、アプリケーションが独自の形式を使って、形式を認識する場合はデータを忠実にコピーして貼り付け、認識しない場合は適切にフォールバックする方法を示します。

コードでは、アプリケーションが提供するすべてのデータ (項目、数量、SKU) を表す元の表を用意します。
この表をコピーすると、データを完全に記述する `"web "` 接頭辞付きの独自形式の表現、SKU データを省略した `text/html` 表現、データをテキストに簡略化した `text/plain` 版を含む {{domxref("ClipboardItem")}} が作成されます。
その後、異なるデータ版を表示できるアプリケーションを表す 3 つの貼り付け領域のいずれかに貼り付けることができます。

#### HTML

まず、元の表の HTML と、テキストをコピーするボタン、例をリセットするボタン、コピーされた表現の数を記録するための要素を定義します。
表の本体は空で始まり、スクリプトの実行時に埋められます。

```html
<table id="source">
  <thead>
    <tr>
      <th>項目</th>
      <th>数量</th>
      <th>SKU</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
<button id="copy_custom" type="button">
  コピー (HTML + テキスト + 独自の形式)
</button>
<button id="reload_custom" type="button">再読み込み</button>
<p id="status_custom"></p>
```

次に、3 つの貼り付け先とボタンを定義します。
貼り付け先の要素はすべてリッチテキストに対応していますが、コードはそれぞれが表すデータ型だけをコピーします。

```html
<div class="targets">
  <div>
    <p>自分のアプリ</p>
    <div id="target_app"></div>
    <button id="paste_app" type="button">貼り付け</button>
  </div>
  <div>
    <p>任意のリッチテキストの貼り付け先</p>
    <div id="target_richtext"></div>
    <button id="paste_richtext" type="button">貼り付け</button>
  </div>
  <div>
    <p>任意のプレーンテキストの貼り付け先</p>
    <div id="target_plaintext"></div>
    <button id="paste_plaintext" type="button">貼り付け</button>
  </div>
</div>
```

```css hidden
body {
  margin: 1rem;
}

#source {
  border-collapse: collapse;
  margin-bottom: 1rem;
}

#source th,
#source td {
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
}

#status_custom {
  min-height: 1.2em;
  font-style: italic;
}

.targets {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.targets > div {
  flex: 1;
  min-width: 150px;
}

.targets p {
  margin: 0 0 0.25rem;
  font-weight: bold;
}

.targets button {
  margin-top: 0.5rem;
}

#target_app,
#target_richtext,
#target_plaintext {
  box-sizing: border-box;
  width: 100%;
  min-height: 80px;
  border: 1px solid black;
  padding: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
}

#target_app:empty::before,
#target_richtext:empty::before,
#target_plaintext:empty::before {
  content: "まだ何も貼り付けていません";
  color: gray;
}

#target_app table {
  border-collapse: collapse;
}

#target_app th,
#target_app td {
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
}
```

#### JavaScript

```js hidden
const statusElement = document.querySelector("#status_custom");
function log(text) {
  statusElement.textContent = text;
}
```

まず、独自の形式に対応しているかどうかを確認し、その情報をログに記録します。
この形式に対応していなくても、デフォルトのフォールバック表現のみを含む例として引き続き動作します。

```js
const customType = "web text/x-mdn-inventory+json";

log(
  ClipboardItem.supports(customType)
    ? `独自の形式に対応しています: ${customType}`
    : `このブラウザーは独自の形式に対応していません: ${customType}`,
);
```

次に、`inventory` 配列で定義する元の表のデータを設定します。
ここでは `buildRow()` を使って、セル値の配列から表の行を作成します。

```js
const inventory = [
  { item: "リンゴ", quantity: 12, sku: "A-104" },
  { item: "ナシ", quantity: 7, sku: "P-221" },
];

function buildRow(cells, cellTag) {
  const tr = document.createElement("tr");
  for (const value of cells) {
    const cell = document.createElement(cellTag);
    cell.textContent = value;
    tr.appendChild(cell);
  }
  return tr;
}
const sourceBody = document.querySelector("#source tbody");
for (const row of inventory) {
  sourceBody.appendChild(buildRow([row.item, row.quantity, row.sku], "td"));
}
```

`text/html` 表現のために、列見出しと値の行のリストから表を作成する `buildTable()` も定義します。

```js
function buildTable(headers, rows) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.appendChild(buildRow(headers, "th"));
  const tbody = document.createElement("tbody");
  for (const row of rows) {
    tbody.appendChild(buildRow(row, "td"));
  }
  table.append(thead, tbody);
  return table;
}
```

「再読み込み」ボタンが押されたときに例をリロードして消去するコードも追加します。

```js
const reload = document.querySelector("#reload_custom");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

次に、データ表現を `ClipboardItem` にコピーし、クリップボードに書き込むコードを定義します。

まず `copyInventory()` は、`text/html` と `text/plain` の Blob を含む `ClipboardItem` を作成し、ブラウザーが `ClipboardItem.supports()` で受け付けると確認できた場合にのみ、独自の形式の Blob を追加します。
`text/html` Blob は、元の表を再利用するのではなく、`buildTable()` で作成した SKU 列のない縮小版の表です (任意の HTML 利用者が独自の形式より少ない情報を得ることを示しています)。
この関数は「コピー」ボタンと表自体の `copy` イベントリスナーの両方で使われるため、表を手動で選択してコピーした場合も、ボタンをクリックした場合と同じクリップボードの内容になります。

```js
const sourceTable = document.querySelector("#source");
const copyButton = document.querySelector("#copy_custom");

async function copyInventory() {
  const reducedTable = buildTable(
    ["商品", "数量"],
    inventory.map((row) => [row.item, row.quantity]),
  );
  const html = reducedTable.outerHTML;
  const text = inventory
    .map((row) => `${row.item}\t${row.quantity}`)
    .join("\n");

  const data = {
    "text/html": new Blob([html], { type: "text/html" }),
    "text/plain": new Blob([text], { type: "text/plain" }),
  };
  if (ClipboardItem.supports(customType)) {
    const json = JSON.stringify(inventory);
    data[customType] = new Blob([json], { type: customType });
  }

  try {
    await navigator.clipboard.write([new ClipboardItem(data)]);
    log(`${Object.keys(data).length} 種類の形式をクリップボードにコピーしました。`);
  } catch (error) {
    log(`コピーに失敗しました: ${error.message}`);
  }
}

copyButton.addEventListener("click", copyInventory);

document.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  if (!sourceTable.contains(selection.anchorNode)) return;
  event.preventDefault();
  copyInventory();
});
```

次に、それぞれの貼り付け先に表現を貼り付けるコードを定義します。

「自分のアプリ」ボタンは独自の形式の表現を特に探し、構造化データから SKU 列を含む完全な表を再構築します。これにより、元の表がそのまま再現されます。

```js
const targetApp = document.querySelector("#target_app");
const pasteAppButton = document.querySelector("#paste_app");

pasteAppButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes(customType)) {
      const blob = await clipboardItem.getType(customType);
      const rows = JSON.parse(await blob.text());
      const table = buildTable(
        ["商品", "数量", "SKU"],
        rows.map((row) => [row.item, row.quantity, row.sku]),
      );
      targetApp.replaceChildren(table);
    } else {
      targetApp.textContent = "独自の形式がクリップボードにありません。";
    }
  } catch (error) {
    targetApp.textContent = `貼り付けに失敗しました: ${error.message}`;
  }
});
```

「任意のリッチテキストの貼り付け先」ボタンは `text/html` だけを探し、独自の形式は無視して `innerHTML` で表示します。
コピーされた HTML に含まれるのは `item` と `quantity` だけなので、この貼り付け先には SKU 列のない表が表示されます。
この方法で挿入する前に、実際のアプリケーションではサードパーティーの HTML をサニタイズする必要があります ([クリップボードからの無害化されていない HTML の読み取り](/ja/docs/Web/API/Clipboard/read#クリップボードからの無害化されていない_html_の読み取り)を参照してください)。このデモでは、コード自身が書き込んだ HTML だけを貼り付けています。

```js
const targetRichtext = document.querySelector("#target_richtext");
const pasteRichtextButton = document.querySelector("#paste_richtext");

pasteRichtextButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes("text/html")) {
      const blob = await clipboardItem.getType("text/html");
      targetRichtext.innerHTML = await blob.text();
    } else {
      targetRichtext.textContent = "クリップボードに text/html がありません。";
    }
  } catch (error) {
    targetRichtext.textContent = `貼り付けに失敗しました: ${error.message}`;
  }
});
```

「任意のプレーンテキストの貼り付け先」ボタンは `text/plain` 形式だけを探します。

```js
const targetPlaintext = document.querySelector("#target_plaintext");
const pastePlaintextButton = document.querySelector("#paste_plaintext");

pastePlaintextButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes("text/plain")) {
      const blob = await clipboardItem.getType("text/plain");
      targetPlaintext.textContent = await blob.text();
    } else {
      targetPlaintext.textContent = "クリップボードに text/plain がありません。";
    }
  } catch (error) {
    targetPlaintext.textContent = `貼り付けに失敗しました: ${error.message}`;
  }
});
```

#### 結果

「コピー」ボタンをクリックするか、表を選択して手動でコピーすると、表が HTML、プレーンテキスト、および (対応している場合は) 独自の形式でコピーされます。
次に、下の 3 つの「貼り付け」ボタンをそれぞれクリックして、各貼り付け先が取得する内容を比べてください。
「再読み込み」をクリックすると例がリセットされます。

{{EmbedLiveSample("Reading and writing custom formats", "100%", "450", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> プロンプトが表示された場合は、コピーと貼り付けの権限を許可してください。

### 切り取り、コピー、貼り付けイベントの上書き

この例では、テキストエリアで発行される {{domxref("Element/copy_event", "copy")}}、{{domxref("Element/cut_event", "cut")}}、{{domxref("Element/paste_event", "paste")}} イベントと、{{domxref("Navigator.clipboard")}} で発行される {{domxref("Clipboard.clipboardchange_event", "clipboardchange")}} イベントを監視します。
`copy` イベントのデフォルトのアクションを上書きして、コピーしたテキストに署名を追加します。また、`paste` イベントの既定のアクションを上書きして、貼り付けたテキストを大文字にして挿入します。
`cut` と `clipboardchange` イベントはログに記録するだけで、デフォルトのアクションを上書きしなくても発行されることを示します。

#### HTML

```html
<textarea id="event_source" rows="3">
このテキストの一部を選択し、キーボードまたはコンテキストメニューを使ってコピー、切り取り、貼り付けしてください。</textarea>
<pre id="event_log"></pre>
```

```css hidden
#event_source {
  box-sizing: border-box;
  width: 100%;
}

#event_log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  white-space: pre-wrap;
}
```

#### JavaScript

```js hidden
const eventLog = document.querySelector("#event_log");
function log(text) {
  eventLog.textContent = `${eventLog.textContent}${text}\n`;
  eventLog.scrollTop = eventLog.scrollHeight;
}
```

`copy` イベントのデフォルトのアクションは、{{domxref("ClipboardEvent.clipboardData")}} を使って上書きし、選択されたテキストに署名を追加します。

```js
const eventSource = document.querySelector("#event_source");

eventSource.addEventListener("copy", (event) => {
  const selected = eventSource.value.slice(
    eventSource.selectionStart,
    eventSource.selectionEnd,
  );
  event.clipboardData.setData("text/plain", `${selected} (MDN example)`);
  event.preventDefault();
  log("copy イベント: デフォルトのアクションを上書きして署名を追加しました。");
});
```

`cut` イベントは上書きしないため、選択されたテキストは通常どおり切り取られ、イベント自体だけがログに記録されます。

```js
eventSource.addEventListener("cut", () => {
  log("cut イベント: 発行されました。デフォルトのアクションはそのままです。");
});
```

`paste` イベントのデフォルトのアクションを上書きし、貼り付けたテキストをそのままではなく大文字にして挿入します。

```js
eventSource.addEventListener("paste", (event) => {
  const pasted = event.clipboardData.getData("text/plain");
  const { selectionStart, selectionEnd, value } = eventSource;
  eventSource.value =
    value.slice(0, selectionStart) +
    pasted.toUpperCase() +
    value.slice(selectionEnd);
  event.preventDefault();
  log("paste イベント: デフォルトのアクションを上書きして、貼り付けたテキストを大文字にしました。");
});
```

システムクリップボードの内容がどのソースから変更された場合でも、{{domxref("Navigator.clipboard")}} で `clipboardchange` が発行されます。

```js
navigator.clipboard.addEventListener("clipboardchange", () => {
  log("clipboardchange イベント: システムクリップボードの内容が変更されました。");
});
```

#### 結果

上のテキストの一部を選択してコピーすると、ログに `copy` イベントが発行されたことが表示され、クリップボードに保存されたテキストに署名 "(MDN example)" が追加されます（確認するには、別の場所に貼り付けてください）。
テキストを切り取ると、既定のアクションを変更せずに `cut` イベントがログに記録されます。
何かをボックスに貼り付けると、大文字にして挿入されます。

{{EmbedLiveSample("Overriding cut, copy, and paste events", "100%", "200", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> プロンプトが表示された場合は、コピーと貼り付けの権限を許可してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
