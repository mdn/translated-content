---
title: ドラッグ操作
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

ドラッグ＆ドロップ API の中核となるのは様々な[ドラッグイベント](/ja/docs/Web/API/HTML_Drag_and_Drop_API#ドラッグイベント)であり、これは特定の順序で発生し、特定の方法で処理されることが期待されます。本ドキュメントでは、ドラッグ＆ドロップ操作中に発生する手順と、ハンドラー内でアプリケーションが実行すべき処理について説明します。

大まかに言うと、ドラッグ＆ドロップ操作における可能性のある手順は以下の通りです。

- ユーザーがソースノード上で[ドラッグを開始](#ドラッグの開始)します。 {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントがソースノード上で発生します。このイベントにおいて、ソースノードはドラッグ操作のコンテキストを準備します。これにはドラッグデータ、フィードバック画像、および許可されたドロップ効果が含まれます。
- ユーザーは[アイテムをドラッグして移動させます](#要素上のドラッグとドロップターゲットの特定)。新しい要素に移動するたびに、その要素上で {{domxref("HTMLElement/dragenter_event", "dragenter")}} イベントが発生し、前の要素上で {{domxref("HTMLElement/dragleave_event", "dragleave")}} イベントが発生します。数百ミリ秒ごとに、ドラッグが現在行われている要素に対して {{domxref("HTMLElement/dragover_event", "dragover")}} イベントが発生し、ソースノードに対して {{domxref("HTMLElement/drag_event", "drag")}} イベントが発生します。
- ドラッグが有効なドロップターゲットに入ります。ドロップターゲットは、有効なドロップターゲットであることを示すため、`dragover` イベントをキャンセルします。何らかの形の[ドロップフィードバック](#ドロップのフィードバック)により、ユーザーに期待されるドロップ効果が示されます。
- ユーザーが[ドロップを実行します](#ドロップの実行)。ドロップターゲット上で {{domxref("HTMLElement/drop_event", "drop")}} イベントが発生します。このイベント内で、ターゲットノードはドラッグデータを読み取ります。
- [ドラッグ操作が終了します](#ドラッグの終了)。ソースノード上で {{domxref("HTMLElement/dragend_event", "dragend")}} イベントが発生します。このイベントは、ドロップが成功したかどうかにかかわらず発生します。

## ドラッグの開始

ドラッグ操作は、[ドラッグ可能なアイテム](/ja/docs/Web/API/HTML_Drag_and_Drop_API#ドラッグ可能なアイテム)から開始されます。これには、選択範囲、ドラッグ可能な要素（リンク、画像、`draggable="true"` を設定した要素など）、オペレーティングシステムのファイルエクスプローラーからのファイルなどが含まれます。まず、{{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントが、ソースノード（ドラッグ可能な要素、または選択範囲の場合はドラッグが開始されたテキストノード）で発生します。このイベントがキャンセルされると、ドラッグ操作は中止されます。そうでない場合、{{domxref("Element/pointercancel_event", "pointercancel")}} イベントもソースノード上で発生します。

`dragstart` イベントは、{{domxref("DragEvent.dataTransfer", "dataTransfer")}} を変更できる唯一のタイミングです。カスタムのドラッグ可能要素では、ほとんどの場合、ドラッグデータを変更したいと考えられます。これについては、[ドラッグデータストアの変更](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store)で詳しく説明されています。変更可能な要素は他に 2 つあります。[フィードバック画像](#ドラッグのフィードバック画像の設定)と[許可されたドロップ効果](#ドロップの効果)です。

この例では、 {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントの操作ナーを `addEventListener()` メソッドで追加します。

```html
<p draggable="true">このテキストはドラッグが<strong>できます</strong>。</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "このテキストはドラッグできます"),
});
```

ドラッグイベントは他の多くのイベントと同様にバブリングするため、上位の祖先要素を監視しても構いません。このため、イベントの対象要素も確認することが一般的です。これにより、この要素内に含まれる選択範囲をドラッグしても `setData` が起動しないようにします（要素内のテキスト選択は困難ではありますが、不可能ではありません）。

```js
draggableElement.addEventListener("dragstart", (event) => {
  if (event.target === draggableElement) {
    event.dataTransfer.setData("text/plain", "このテキストはドラッグできます");
  }
});
```

### ドラッグのフィードバック画像の設定

ドラッグ操作が行われると、ソースノードから半透明の画像が生成され、ドラッグ中にユーザーのマウスカーソルに追従します。この画像は自動的に作成されますので、自分で作成する必要はありません。しかし、 {{domxref("DataTransfer.setDragImage","setDragImage()")}} によって、ドラッグ中の独自のフィードバック画像を指定することができます。

```js
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.setDragImage(image, xOffset, yOffset);
});
```

3 つの引数が必要です。一つ目は、画像への参照です。この参照は、通常は `<img>` 要素ですが、 `<canvas>` やその他の要素でもよいでしょう。フィードバック画像は、画像が画面上でどのように見えるかを考慮して生成されますが、画像の場合は、元のサイズで描画されます。 {{domxref("DataTransfer.setDragImage","setDragImage()")}} メソッドの第 2、第 3 引数には、マウスポインターに対する相対的な画像の表示位置を指定します。

文書中に存在しないものをフィードバック画像として使うために、以下の例のようにして、画像やキャンバスを利用することもできます。

```js
draggableElement.addEventListener("dragstart", (event) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 50;

  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();

  event.dataTransfer.setDragImage(canvas, 25, 25);
});
```

この例では、キャンバスの大きさは `50`×`50` ピクセルで、オフセット値はそれぞれの半分の値 (`25`) となっており、画像はマウスポインターの中央に表示されます (マウスポインターが画像の中央に表示されます)。

## 要素上のドラッグとドロップターゲットの特定

ドラッグ操作の全過程において、すべての機器入力イベント（マウスやキーボードなど）は抑制されます。ドラッグされたデータは、文書内の様々な要素上、あるいは他の文書内の要素上にも移動することが可能です。新しい要素に入ると、その要素上で {{domxref("HTMLElement/dragenter_event", "dragenter")}} イベントが発生し、前の要素では {{domxref("HTMLElement/dragleave_event", "dragleave")}} イベントが発生します。

> [!NOTE] > `dragleave` イベントは、常に `dragenter` イベントの後に発生します。したがって、概念的には、この 2 つのイベントの間では、ターゲットは新しい要素に入ったものの、まだ前の要素から出ていない状態となります。

数百ミリ秒ごとに、2 つのイベントが発生します。ソースノードでの {{domxref("HTMLElement/drag_event", "drag")}} イベントと、ドラッグが現在行われている要素での {{domxref("HTMLElement/dragover_event", "dragover")}} イベントです。ウェブページやアプリケーションの大部分の領域は、データをドロップする有効な場所ではありません。そのため、要素はデフォルトで、その上で発生したドロップをすべて無視します。要素は、`dragover` イベントをキャンセルすることで、自らを有効なドロップターゲットに指定することができます。要素が {{HTMLElement("textarea")}} や [`<input type="text">`](/ja/docs/Web/HTML/Reference/Elements/input/text) などの編集可能なテキストフィールドであり、かつデータストアに `text/plain` のアイテムが 1 つ含まれている場合、その要素は `dragover` をキャンセルすることなく、デフォルトで有効なドロップターゲットとなります。

```html
<div id="drop-target">
  ドラッグ可能なアイテムをここにドラッグしてドロップすることができます
</div>
```

```js
const dropElement = document.getElementById("drop-target");

dropElement.addEventListener("dragover", (event) => {
  event.preventDefault();
});
```

> [!NOTE]
> 仕様書では、ドロップターゲットに対しては `dragenter` イベントもキャンセルすることが要求されています。これを満たさない場合、当該要素では `dragover` や `dragleave` イベントがまったく発生しなくなります。実際にはどのブラウザーもこの仕様を実装しておらず、新しい要素が追加されるたびに「現在の要素」が変更されます。

> [!NOTE]
> 仕様書では、`drag` イベントをキャンセルするとドラッグを中止することが求められていますが、実際にはどのブラウザーもこれを実装していません。下記の例を参照してください。
>
> {{EmbedLiveSample("cancel_drag", "", 100)}}

```html hidden live-sample___cancel_drag
<p draggable="true" id="draggable">1 秒間ドラッグしてください。</p>
<p id="output"></p>
```

```js hidden live-sample___cancel_drag
const draggableElement = document.getElementById("draggable");
const output = document.getElementById("output");
let time = null;
draggableElement.addEventListener("dragstart", (event) => {
  time = Date.now();
  output.textContent = "";
});
draggableElement.addEventListener("drag", (event) => {
  if (time !== null && Date.now() - time > 1000) {
    event.preventDefault();
    output.textContent =
      "ドラッグ操作はキャンセルされました。このノードのドラッグが続いている場合は、このブラウザーではプログラムによるドラッグ操作のキャンセルに対応していません。";
    time = null;
  }
});
```

### 条件付きドロップターゲット

通常、ドロップターゲットが特定の状況でのみドロップを受け付けるように設定したい場合（例えば、リンクがドラッグされている場合のみなど）があります。これを行うには、条件をチェックし、その条件が満たされた場合にのみイベントをキャンセルします。例えば次のようにすると、ドラッグされたデータにリンクが含まれているかどうかを確認することができます。

```js
dropElement.addEventListener("dragover", (event) => {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
});
```

この例では、`includes` メソッドを使用して、 [`text/uri-list`](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links) タイプのデータがタイプのリストに含まれているかどうかを確認します。含まれていた場合、イベントをキャンセルし、その位置へのドロップを許可します。ドラッグデータにリンクが含まれていなかった場合、イベントはキャンセルされず、その位置でのドロップは発生しません。

## ドロップのフィードバック

ユーザーが有効なドロップターゲットへドラッグしているとします。その位置でのドロップが許可されていること、およびドロップが行われた場合に何が起こるかをユーザーに示す方法はいくつかあります。通常、マウスポインターは {{domxref("DataTransfer.dropEffect", "dropEffect")}} プロパティの値に応じて必要に応じて更新されます。正確な表示はユーザーのプラットフォームに依存しますが、例えば `copy` の場合にはプラス記号のアイコンが表示され、ドロップが許可されていない場合には「ここにドロップできません」というアイコンが表示されるのが一般的です。多くの場合、このマウスポインターのフィードバックで十分です。

### ドロップの効果

ドロップ時に、行われる可能性のある操作は複数あります。

- `copy`
  - : データをドロップした後、データはソースとターゲットの両方の場所に同時に存在するようになります。
- `move`
  - : データはターゲットとなる場所にのみ存在するようになり、元の場所からは削除されます。
- `link`
  - : ソースとドロップターゲットの間には何らかの形のリンクが作成されます。ソースの場所にはデータのインスタンスが 1 つしか存在しません。
- `none`
  - : 何も起こりません。ドロップは失敗します。

{{domxref("HTMLElement/dragenter_event", "dragenter")}} および {{domxref("HTMLElement/dragover_event", "dragover")}} イベントにおいて、 {{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティはユーザーが要求している操作に初期化されます。ユーザーは操作の種類を修飾キーを押すことにより変更することができます。実際に使用されるキーはプラットフォームごとに異なりますが、大抵の場合は <kbd>Shift</kbd> キーと <kbd>Control</kbd> キーが、コピー・移動・リンクの各操作の切り替えに使われるでしょう。マウスポインターはどの操作が望まれているのかを示すために、例えば `copy` ならカーソルの横に「＋」記号が表示される、といった風に変化するでしょう。

例えば、特定のドロップターゲットが特定の操作のみに対応している場合など、 {{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティの値を {{domxref("HTMLElement/dragenter_event", "dragenter")}} または {{domxref("HTMLElement/dragover_event", "dragover")}} イベントの間に変更することができます。 {{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティを変更すると、ユーザーの操作を上書きし、特定のドロップ操作を強制することができます。

```js
target.addEventListener("dragover", (event) => {
  event.dataTransfer.dropEffect = "move";
});
```

この例では move が行われる操作になります。

値 `none` を使用することで、この位置でのドロップを許可しないことを示すことができます。通常、要素が一時的にドロップを受け付けない場合のみこの設定を行ってください。ドロップ対象として意図されていない場合は、単にイベントをキャンセルしないようにすべきです。

`dropEffect` の設定は、この特定の瞬間において希望する効果を示すのみであり、後続の `dragover` の配信によって変更される可能性がある点にご留意ください。選択を永続化するには、すべての `dragover` イベントで設定を行う必要があります。また、この効果はあくまで情報提供用であり、実際に実装される効果はソースノードとターゲットノードの両方に依存します（例えば、ソースノードが変更不可の場合、"move" 効果が要求されても実行できない可能性があります）。

ユーザーによるジェスチャー操作およびプログラムによる `dropEffect` の設定のいずれにおいても、デフォルトでは 3 種類のドロップ効果がすべて利用可能です。{{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントのリスナーにおいて、 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} プロパティに値を設定することで、特定の効果のみを許可するように制限することが可能です。

```js
draggableElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.effectAllowed = "copyLink";
});
```

この例では、コピーまたはリンク操作のみが許可されており、移動操作はスクリプト経由でもユーザー操作でも選択することができません。

`effectAllowed` の値は、`dropEffect` の組み合わせとなります。

| 値              | 説明                                                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `none`          | どの操作も許可されていない                                                                                                                |
| `copy`          | `copy` のみ                                                                                                                               |
| `move`          | `move` のみ                                                                                                                               |
| `link`          | `link` のみ                                                                                                                               |
| `copyMove`      | `copy` または `move` のみ                                                                                                                 |
| `copyLink`      | `copy` または `link` のみ                                                                                                                 |
| `linkMove`      | `link` または `move` のみ                                                                                                                 |
| `all`           | `copy`, `move`, `link`                                                                                                                    |
| `uninitialized` | 効果が設定されていない場合のデフォルト値です。一般的に `all` と同等ですが、デフォルトの `dropEffect` が常に `copy` であるとは限りません。 |

デフォルトでは、`dropEffect` は `effectAllowed` に基づいて初期化され、`copy`、`link`、`move` の順序で、許可されている最初のものが選択されます。選択されていないが許可されている効果も、適切な場合にはデフォルトとして選択されることがあります。例えば、Windows では、<kbd>Alt</kbd> キーを押したままにすると、`link` が優先的に使用されます。`effectAllowed` が `uninitialized` であり、ドラッグされた要素が `<a>` リンクの場合、デフォルトの `dropEffect` は `link` となります。`effectAllowed` が `uninitialized` であり、ドラッグされた要素が編集可能なテキストフィールドからの選択範囲の場合、デフォルトの `dropEffect` は `move` となります。

```html hidden live-sample___drop_effects
<div class="sources-container">
  さまざまな <code>allowedEffect</code> を持つソースです。
  <div id="sources"></div>
</div>
<div class="targets-container">
  さまざまな <code>dropEffect</code> を持つターゲットです。
  <div id="targets"></div>
</div>
```

```css hidden live-sample___drop_effects
.sources-container,
.targets-container {
  width: calc(100% - 2rem);
  border: 2px dashed gray;
  padding: 0.5rem;
  margin: 1rem 0;
}

#sources,
#targets {
  display: grid;
  gap: 0.5rem;
  width: 100%;
}

#sources {
  grid-template-columns: 1fr 1fr 1fr;
}

#targets {
  grid-template-columns: 1fr 1fr;
}

#sources div,
#targets div {
  border: 2px solid black;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

#sources div {
  height: 50px;
}

#targets div {
  height: 75px;
}
```

```js hidden live-sample___drop_effects
for (const allowedEffect of [
  "none",
  "copy",
  "move",
  "link",
  "copyMove",
  "copyLink",
  "linkMove",
  "all",
  "uninitialized",
]) {
  const div = document.createElement("div");
  div.textContent = allowedEffect;
  div.draggable = true;
  div.addEventListener("dragstart", (event) => {
    event.dataTransfer.effectAllowed = allowedEffect;
  });
  document.getElementById("sources").appendChild(div);
}

for (const dropEffect of ["none", "copy", "move", "link"]) {
  const div = document.createElement("div");
  div.textContent = dropEffect;
  div.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = dropEffect;
  });
  document.getElementById("targets").appendChild(div);
}
```

{{EmbedLiveSample("drop_effects", "", 500)}}

### 独自のドロップフィードバック

{{domxref("HTMLElement/dragenter_event", "dragenter")}} イベント中に他の操作を実行することで、より複雑な視覚効果を実現することができます。例えば、ドロップが行われる位置に要素を挿入する方法が挙げられます。これは挿入マーカー、あるいは新しい位置にドラッグされた要素を表す要素である可能性があります。これを行うには、[`<img>`](/ja/docs/Web/HTML/Reference/Elements/img) 要素を作成し、 {{domxref("HTMLElement/dragenter_event", "dragenter")}} イベント中に文書に挿入することができます。

{{domxref("HTMLElement/dragover_event", "dragover")}} イベントは、マウスが指している要素で発生します。当然ながら、 {{domxref("HTMLElement/dragover_event", "dragover")}} イベントハンドラー内でも挿入マーカーを移動させる必要があるかもしれません。他のマウスイベントと同様に、イベントの {{domxref("MouseEvent.clientX","clientX")}} および {{domxref("MouseEvent.clientY","clientY")}} プロパティを使用して、マウスポインターの位置を特定することができます。

最後に、ドラッグ操作が要素から離れた際に、その要素で {{domxref("HTMLElement/dragleave_event", "dragleave")}} イベントが発生します。このタイミングで、挿入マーカーやハイライト表示を解除されることをお勧めいたします。このイベントをキャンセルする必要はありません。 {{domxref("HTMLElement/dragleave_event", "dragleave")}} イベントは、ドラッグがキャンセルされた場合でも常に発生します。したがって、挿入ポイントのクリーンアップは、このイベント中に確実に実行できます。

これらのイベントの使用例については、[カンバンボードの例](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board#inserting_at_a_particular_location)を参照してください。

## ドロップの実行

ユーザーがマウスのボタンを離した時、ドラッグ＆ドロップの操作は終了します。

ドロップ操作が成功するためには、ドロップが有効な[ドロップターゲット](#要素上のドラッグとドロップターゲットの特定)上で行われ、かつマウスボタンを離した時点で `dropEffect` が `none` でないことが必要です。そうでない場合、ドロップ操作は[失敗した](#ドロップの失敗)と見なされます。

ドロップ操作が成功する可能性がある場合、ドロップターゲット上で {{domxref("HTMLElement/drop_event", "drop")}} イベントが発生します。ドロップを実際に成功と見なすためには、`preventDefault()` を使用してこのイベントをキャンセルする必要があります。ただし、テキスト（データに `text/plain` のアイテムを含む）を編集可能なテキストフィールドにドロップする場合、この処理を行わなくてもドロップは成功と見なされます。この場合、テキストはフィールドに挿入されます（カーソル位置か末尾かはプラットフォームの慣習によります）。また、`dropEffect` が `move` で、かつソースが編集可能領域内の選択範囲である場合、ソースは削除されます。それ以外のすべてのドラッグデータおよびドロップターゲットについては、ドロップは失敗と見なされます。

{{domxref("HTMLElement/drop_event", "drop")}} イベントの間、ドロップされたデータをイベントから取得して、ドロップ位置に挿入することになります。どのドラッグ＆ドロップ操作が望まれていたのかは、 {{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティで判別することができます。`drop` イベントは、`dragstart` イベント以外に、ドラッグデータストアを読み取ることができる唯一の機会です。

```js
target.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  target.textContent = data;
});
```

上記の例では、まずデータを取得し、ドロップ対象のテキストコンテンツとしてそれを挿入しています。これは `p` 要素や `div` 要素がドロップ対象の領域として使われる事を想定しており、ドラッグされたテキストをドロップ位置に挿入するという効果をもたらします。

`getData()` メソッドは、データストアに指定されたタイプのデータが含まれていない場合、空の文字列を返します。[条件付きドロップターゲット](#条件付きドロップターゲット)が実装されている場合、この状況は発生しないはずです。なぜなら、ドロップターゲットは、必要なデータが存在する場合にのみドロップを受け入れるべきだからです。

他の形式でデータを取得することもできます。データがリンクであった場合、そのデータは [`text/uri-list`](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links) 型でも提供されているでしょう。その場合、リンクを内容に挿入することができます。

```js
target.addEventListener("drop", (event) => {
  event.preventDefault();
  const lines = event.dataTransfer.getData("text/uri-list").split("\r\n");
  lines
    .filter((line) => !line.startsWith("#"))
    .forEach((line) => {
      const link = document.createElement("a");
      link.href = line;
      link.textContent = line;
      target.appendChild(link);
    });
});
```

ドラッグデータの読み取り方法の詳細については、[ドラッグデータストアの操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store)を参照してください。

ソース要素とターゲット要素は、`dropEffect` を実装するために連携する責任も負います。具体的には、ソース要素が `dragend` イベントを監視し、ターゲット要素が `drop` イベントを監視します。例えば、`dropEffect` が `move` の場合、いずれかの要素がドラッグされた項目を元の位置から削除する必要があります（通常はソース要素自体です。ターゲット要素は必ずしもソース要素を認識したり制御したりできるとは限らないためです）。

<!-- TODO: default action of dropping files/links into browsers -->

## ドロップの失敗

以下のいずれかが当てはまる場合、ドラッグ＆ドロップ操作は失敗と見なされます。

1. ユーザーが <kbd>Escape</kbd> キーを押した
2. ドロップが有効な[ドロップターゲット](#要素上のドラッグとドロップターゲットの特定)の外で行われた
3. マウスボタンを離した時点でのドロップ効果が `none` だった
4. `drop` イベントがキャンセルされず、`text/plain` データを含むテキストが編集可能なテキストフィールドにドロップされなかった（[ドロップの実行](#ドロップの実行)を参照）

ケース 1 と 3 において、有効なドロップターゲット上にカーソルを置いた状態で操作がキャンセルされた場合、ドロップターゲットは {{domxref("HTMLElement/dragleave_event", "dragleave")}} イベントを受信します。これはあたかもドロップ操作が当該ターゲット上で発生しなくなったかのように扱われ、これにより[ドロップフィードバック](#独自のドロップフィードバック)のクリーンアップが可能となります。いずれの場合においても、後続のイベントに対して `dropEffect` は `none` に設定されます。

その後、ソースノードで {{domxref("HTMLElement/dragend_event", "dragend")}} イベントが発生します。ブラウザーは、ドラッグされた選択範囲がドラッグ＆ドロップ操作の起点に戻るアニメーションを表示する場合があります。

## ドラッグの終了

ドラッグ操作が終了すると、 {{domxref("HTMLElement/dragend_event", "dragend")}} イベントがドラッグ元 ({{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントが発行されるのと同じ要素) において発行されます。このイベントは、ドラッグ操作が成功したかキャンセルされたかに関わらず発行されます。

{{domxref("HTMLElement/dragend_event", "dragend")}} イベントにおいて {{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティの値が `none` である場合、ドラッグ操作がキャンセルされます。それ以外の場合は、実際に行われた操作の種類を示します。ドラッグ元はこの情報に基づいて、ドラッグされた項目を "move" の操作の後に元の場所から削除することができます。

ドロップ操作は同じウィンドウの中または他のアプリケーションの上で行われ得ます。いずれの場合も常に {{domxref("HTMLElement/dragend_event", "dragend")}} イベントは発行されます。このイベントの {{domxref("MouseEvent.screenX","screenX")}} および {{domxref("MouseEvent.screenY","screenY")}} プロパティの値には、ドロップが行われたときの画面上での座標が設定されます。

{{domxref("HTMLElement/dragend_event", "dragend")}} イベントの伝搬が終了した後、ドラッグ＆ドロップの操作は完了します。

## 関連情報

- [HTML ドラッグ＆ドロップ API (概要)](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
