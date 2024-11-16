---
title: XMLHttpRequest における HTML の扱い
slug: Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

W3C の {{domxref("XMLHttpRequest")}} 仕様書では、もともと {{Glossary("XML")}} の解釈しか対応していなかった {{domxref("XMLHttpRequest")}} に [HTML](/ja/docs/Web/HTML) の解釈を追加しています。この機能によって、ウェブアプリは `XMLHttpRequest` を使って HTML を解釈済の {{Glossary("DOM")}} として取得することができます。

一般的な `XMLHttpRequest` の使い方についての概要は、 [XMLHttpRequest の利用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)をお読みください。

## 制限

同期的な `XMLHttpRequest` の利用を避けるために、 HTML 対応は同期モードでは利用できません。また、 HTML 対応は {{domxref("XMLHttpRequest.responseType", "responseType")}} プロパティが `"document"` に設定されている時にのみ有効です。この制限によって、古いコードが `XMLHttpRequest` を使って {{domxref("XMLHttpRequest.responseText", "responseText")}} が `text/html` であるリソースを既定のモードで受け取るときに、無用に HTML を解釈する時間を浪費することを防ぎます。また、この制限によって HTTP のエラーページ (ふつうは `text/html` の応答本文を持つ) の際に {{domxref("XMLHttpRequest.responseXML", "responseXML")}} が `null` と想定する古いコードで問題が発生することを防ぐこともできます。

## 使用方法

{{domxref("XMLHttpRequest")}} を使って HTML リソースを DOM として取得することは、 `XMLHttpRequest` を使って XML リソースを DOM として取得するのと似ていますが、同期モードを使用することはできず、 `XMLHttpRequest` オブジェクトの {{domxref("XMLHttpRequest.open", "open()")}} を呼び出した後、 {{domxref("XMLHttpRequest.send", "send()")}} を呼び出す前に、 {{domxref("XMLHttpRequest.responseType", "responseType")}} プロパティに文字列 `"document"` 代入して、明示的に文書を要求する必要があるという点が異なります。

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseXML.title);
};
xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();
```

## 機能の検出

### 方法 1

この方法は「強制的に非同期」である性質を利用するものです。 `XMLHttpRequest` オブジェクトを同期モードで開いた後、 `responseType` 設定しようとすると、機能を実装しているブラウザーではエラーを投げますが、それ以外のブラウザーではそのまま動作します。

```js
function HTMLinXHR() {
  if (!window.XMLHttpRequest) {
    return false;
  }
  const req = new window.XMLHttpRequest();
  req.open("GET", window.location.href, false);
  try {
    req.responseType = "document";
  } catch (e) {
    return true;
  }
  return false;
}
```

[JSFiddle で閲覧](https://jsfiddle.net/HTcKP/1/)

この方法は同期的であり、他の資産に頼りませんが、この機能があることを示すだけで実際の機能をチェックするものではないので、次の方法 2 の方がより信頼できるかもしれません。

### 方法 2

ブラウザーが {{domxref("XMLHttpRequest")}} で HTML の解釈処理に対応しているかどうかを確実に検出するには、二つの課題があります。まず、 HTML 対応が非同期モードでしか有効でないことから、検出結果は非同期で受け取られることになります。第二に、 `data:` URL を使用すると同時に `data:` URL の対応にも依存することになるため、実際に HTTP を通じて文書を取得しなければならないことです。

つまり、 HTML 対応を検出するには、サーバ上にテスト用の HTML 文書が必要になります。このテストファイルは小さく、整形式の XML ではないものです。

```html
<title>&amp;&<</title>
```

このファイルが `detect.html` という名前だった場合、 HTML 対応を検出する関数は次のように書くことができます。

```js
function detectHtmlInXhr(callback) {
  if (!window.XMLHttpRequest) {
    setTimeout(function () {
      callback(false);
    }, 0);

    return;
  }
  let done = false;
  const xhr = new window.XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && !done) {
      done = true;
      callback(
        !!(
          xhr.responseXML &&
          xhr.responseXML.title &&
          xhr.responseXML.title === "&&<"
        ),
      );
    }
  };
  xhr.onabort = xhr.onerror = () => {
    if (!done) {
      done = true;
      callback(false);
    }
  };
  try {
    xhr.open("GET", "detect.html");
    xhr.responseType = "document";
    xhr.send();
  } catch (e) {
    setTimeout(function () {
      if (!done) {
        done = true;
        callback(false);
      }
    }, 0);
  }
}
```

引数の `callback` は非同期に呼び出される関数であり、 HTML 対応がある場合には唯一の引数が `true` になり、 HTML 対応がない場合は唯一の引数が `false` になります。

[JSFiddle で閲覧](https://jsfiddle.net/xfvXR/1/)

## 文字エンコーディング

HTTP の {{HTTPHeader("Content-Type")}} ヘッダーで文字エンコーディングが宣言されている場合は、そのエンコーディングが使用されます。そうでない場合、もしバイトオーダーマークがある場合は、そのバイトオーダーマークが示すエンコーディングを使用します。そうでない場合、もしファイルの先頭 1024 バイト以内にエンコーディングを宣言する {{HTMLElement("meta")}} 要素がある場合は、そのエンコーディングが使用されます。それもない場合、ファイルは UTF-8 としてデコードされます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHttpRequest")}}
- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
