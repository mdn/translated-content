---
title: ClipboardItem
slug: Web/API/ClipboardItem
l10n:
  sourceCommit: eb38a196911f92a7c99a1a2000fac1cd29d23db9
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

**`ClipboardItem`** は[クリップボード API](/ja/docs/Web/API/Clipboard_API) のインターフェイスで、アイテムの単一の形式を表し、{{domxref("Clipboard.read()")}} や {{domxref("Clipboard.write()")}} を使用して、クリップボードのデータを読み取ったり書き込んだりする際に使用します。

データを表現するために **`ClipboardItem`** インターフェイスを持つことの利点は、開発者がファイル形式やデータの様々な範囲に簡単に対処できることです。

> [!NOTE]
> `read()` および `write()` メソッドは、テキスト文字列や {{domxref("Blob")}} インスタンスで表される任意のデータアイテムの作業に使用できます。ただし、テキストのみを作業する場合は、{{domxref("Clipboard.readText()")}} および {{domxref("Clipboard.writeText()")}} メソッドを使用したほうが便利です。

## コンストラクター

- {{domxref("ClipboardItem.ClipboardItem", "ClipboardItem()")}}
  - : 新しい **`ClipboardItem`** オブジェクトを作成します。キーは {{Glossary("MIME type", "MIME タイプ")}}で、値はデータです。

## インスタンスプロパティ

- {{domxref("ClipboardItem.types", "types")}} {{ReadOnlyInline}}
  - : この **`ClipboardItem`** 内で利用できる MIME タイプの配列 ({{jsxref("Array")}}) を返します。
- {{domxref("ClipboardItem.presentationStyle", "presentationStyle")}} {{ReadOnlyInline}}
  - : `"unspecified"`, `"inline"`, `"attachment"` のいずれかを返します。

## 静的メソッド

- {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}}
  - : 指定された {{Glossary("MIME type", "MIME タイプ")}}がクリップボードで対応しているかどうかを調べます。これにより、ウェブサイトはデータを書き込む前に、その MIME タイプが対応しているかどうかを検知することができるようになります。

## メソッド

- {{domxref("ClipboardItem.getType", "getType()")}}
  - : 要求された {{Glossary("MIME type", "MIME タイプ")}}の {{domxref("Blob")}} で解決するプロミス ({{jsxref("Promise")}}) を返します。 MIME タイプが見つからない場合はエラーになります。

## 例

### クリップボードへのテキストの書き込み

この例では、まず、テキストを含む {{htmlelement("p")}} 要素と {{htmlelement("button")}} 要素を参照する 2 つの定数を定義します。

次に、`copyToClipboard()` という関数を定義します。まず、`"text/plain"` という MIME タイプを定数に格納し、次に `clipboardItemData` というオブジェクトを生成します。このオブジェクトには、キーが MIME タイプ、値がクリップボードにコピーしたいテキスト（この場合は `<p>` 要素の内容）であるプロパティが 1 つ含まれます。テキストを扱うため、{{domxref("Blob")}} を作成する必要はなく、直接渡すことができます。

{{domxref("ClipboardItem.ClipboardItem", "ClipboardItem()")}} コンストラクターを使用して新しい `ClipboardItem` オブジェクトを作成し、それを {{domxref("Clipboard.write()")}} メソッドに渡して、テキストをクリップボードにコピーします。

最後に、`<button>` にイベントリスナーを追加し、クリックされたときにその関数が実行されるようにします。

```js
const textSource = document.querySelector("p");
const copyBtn = document.querySelector("button");

async function copyToClipboard() {
  const type = "text/plain";
  const clipboardItemData = {
    [type]: textSource.textContent,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}

copyBtn.addEventListener("click", copyToClipboard);
```

### クリップボードへの画像の書き込み

ここでは、{{domxref("ClipboardItem.supports_static", "supports()")}} を使用して、`image/svg+xml` の MIME タイプが対応しているかどうかを調べます。
対応している場合、[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用して SVG 画像を取得し、それを {{domxref("Blob")}} に読み込みます。これを使用して `ClipboardItem` を作成し、クリップボードに書き込みます。

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/svg+xml")) {
      const imgURL = "/my-image.svg";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("読み込んだ画像をコピーしました。");
    } else {
      console.log("SVG 画像はクリップボードで対応していません。");
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

### クリップボードからの読み取り

ここでは、 {{domxref("clipboard.read()")}} メソッドでクリップボード上の全項目を返しています。次に、 {{domxref("ClipboardItem.types")}} プロパティを利用して {{domxref("ClipboardItem.getType", "getType()")}} の引数をセットし、対応する blob オブジェクトを返します。

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        // we can now use blob here
      }
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ClipboardChangeEvent")}}
- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
