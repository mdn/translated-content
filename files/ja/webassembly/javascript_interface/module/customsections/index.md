---
title: WebAssembly.Module.customSections()
slug: WebAssembly/JavaScript_interface/Module/customSections
---

{{WebAssemblySidebar}}

**`WebAssembly.customSections()`** 関数はモジュールと文字列名を指定して、すべてのカスタムセクションのコンテンツのコピーを返します。

## 構文

```js
WebAssembly.Module.customSections(module, sectionName);
```

### 引数

- _module_
  - : カスタムセクションを考慮する {{jsxref("WebAssembly.Module")}} オブジェクト。
- _sectionName_
  - : 目的のカスタムセクションの文字列名。

### 返値

`sectionName` に一致するすべてのカスタムセクションの {{jsxref("ArrayBuffer")}} コピーの配列 (空の場合もあります)。

### 例外

`module` が {{jsxref("WebAssembly.Module")}} オブジェクトのインスタンスでない場合、{{jsxref("TypeError")}} が発生します。

## 解説

wasm モジュールは一連の **セクション** で構成されています。これらのセクションのほとんどは wasm の仕様によって完全に指定、検証されますが、検証中に無視されスキップされる **カスタムセクション** をモジュールに含めることができます (通常のセクション ("既知のセクション") とカスタムセクションを区別するための情報は [高レベルの構造](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#high-level-structure) を読んでください)。

これにより開発者は他の目的のために wasm モジュール内にカスタムデータを含めることができます。例えば、開発者がモジュール内の全ての関数とローカル変数に名前を付けられる (ネイティブビルドにおける "シンボル" のようなもの) [ネームカスタムセクション](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section) のようなものがあります 。

なお、 WebAssembly テキストフォーマットには現在新しいカスタムセクションのための構文の仕様がありません。しかし、テキストフォーマットから .wasm に変換するときに wasm にネームセクションを追加することができます。 [wabt tool](https://github.com/webassembly/wabt) の一部である wast2wasm コマンドで `--debug-names` オプションを指定することができ、これを指定することにより、ネームカスタムセクションを持つ .wasm に変換することができます。

```bash
wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names
```

## 例

### customSections の使用

次の例では (custom-section.html の[ソース](https://github.com/mdn/webassembly-examples/blob/master/other-examples/custom-section.html)と[動作例](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html)をご確認ください) 、読み込んだ section.wasm バイトコードをコンパイルします。

それから、`WebAssembly.Module.customSections` を使用して `length` が 0 より大きいかチェックして、モジュールに "name" カスタムセクションが含まれているかどうかチェックします。この例では "name" カスタムセクションが存在するため、`ArrayBuffer` オブジェクトが返されます。

```js
WebAssembly.compileStreaming(fetch("simple-name-section.wasm")).then(
  function (mod) {
    var nameSections = WebAssembly.Module.customSections(mod, "name");
    if (nameSections.length != 0) {
      console.log("Module contains a name section");
      console.log(nameSections[0]);
    }
  },
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
