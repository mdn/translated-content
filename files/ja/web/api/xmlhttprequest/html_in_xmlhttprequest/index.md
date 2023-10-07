---
title: XMLHttpRequest における HTML の扱い
slug: Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest
---

{{APIRef("XMLHttpRequest")}}

W3C の {{domxref("XMLHttpRequest")}} 仕様書では、もともと {{Glossary("XML")}} の解析しか対応していなかった {{domxref("XMLHttpRequest")}} に [HTML](/ja/docs/Web/HTML) の解析を追加しています。この機能によって、ウェブアプリは `XMLHttpRequest` を使って HTML を解析済の {{Glossary("DOM")}} として取得することができます。

一般的な `XMLHttpRequest` の使い方についての概要は、 [XMLHttpRequest の利用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)をお読みください。

## 制限

同期的な `XMLHttpRequest` の利用を避けるために、 HTML 対応は同期モードでは利用できません。また、 HTML 対応は {{domxref("XMLHttpRequest.responseType", "responseType")}} プロパティが `"document"` に設定されている時にのみ有効です。この制限によって、古いコードが `XMLHttpRequest` を使って {{domxref("XMLHttpRequest.responseText", "responseText")}} が `text/html` であるリソースを既定のモードで受け取るときに、無用に HTML を解釈する時間を浪費することを防ぎます。また、この制限によって HTTP のエラーページ (ふつうは `text/html` の応答本文を持つ) の際に {{domxref("XMLHttpRequest.responseXML", "responseXML")}} が `null` と想定する古いコードで問題が発生することを防ぐこともできます。

## 使用方法

{{domxref("XMLHttpRequest")}} を使って HTML リソースを DOM として取得することは、 `XMLHttpRequest` を使って XML リソースを DOM として取得するのと似ていますが、同期モードを使用することはできず、 `XMLHttpRequest` オブジェクトの {{domxref("XMLHttpRequest.open", "open()")}} を呼び出した後、 {{domxref("XMLHttpRequest.send", "send()")}} を呼び出す前に、 {{domxref("XMLHttpRequest.responseType", "responseType")}} プロパティに文字列 `"document"` 代入して、明示的に文書を要求する必要があるという点が異なります。

```js
var xhr = new XMLHttpRequest();
xhr.onload = function () {
  console.log(this.responseXML.title);
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
  if (!window.XMLHttpRequest) return false;
  var req = new window.XMLHttpRequest();
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

ブラウザーが {{domxref("XMLHttpRequest")}} で HTML の解析処理に対応しているかどうかを確実に検出するには、二つの課題があります。まず、 HTML 対応が非同期モードでしか有効でないことから、検出結果は非同期で受け取られることになります。第二に、 `data:` URL を使用すると同時に `data:` URL の対応にも依存することになるため、実際に HTTP を通じて文書を取得しなければならないことです。

つまり、 HTML 対応を検出するには、サーバ上にテスト用の HTML 文書が必要になります。このテストファイルは小さく、整形式の XML ではないものです。

```js
<title>&amp;&<</title>
```

このファイルが `detect.html` という名前だった場合、 HTML 対応を検出する関数は次のように書くことができます。

```js
function detectHtmlInXhr(callback) {
  if (!window.XMLHttpRequest) {
    window.setTimeout(function () {
      callback(false);
    }, 0);
    return;
  }
  var done = false;
  var xhr = new window.XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && !done) {
      done = true;
      callback(
        !!(
          this.responseXML &&
          this.responseXML.title &&
          this.responseXML.title == "&&<"
        ),
      );
    }
  };
  xhr.onabort = xhr.onerror = function () {
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
    window.setTimeout(function () {
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

## 古いブラウザーでの HTML の扱い

`XMLHttpRequest` はもともと、 XML の解析のみ対応していました。 HTML の解析は最近追加されたものです。古いブラウザーでも、 {{domxref("XMLHttpRequest.responseText")}} プロパティと[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)の組み合わせで、例えば、指定された ID の HTML 要素のソースコードを取得することができます。

```js
function getHTML(oXHR, sTargetId) {
  var rOpen = new RegExp(
      "<(?!!)\\s*([^\\s>]+)[^>]*\\s+id\\=[\"']" + sTargetId + "[\"'][^>]*>",
      "i",
    ),
    sSrc = oXHR.responseText,
    aExec = rOpen.exec(sSrc);

  return aExec
    ? new RegExp(
        "(?:(?:.(?!<\\s*" +
          aExec[1] +
          "[^>]*[>]))*.?<\\s*" +
          aExec[1] +
          "[^>]*[>](?:.(?!<\\s*/\\s*" +
          aExec[1] +
          "\\s*>))*.?<\\s*/\\s*" +
          aExec[1] +
          "\\s*>)*(?:.(?!<\\s*/\\s*" +
          aExec[1] +
          "\\s*>))*.?",
        "i",
      ).exec(sSrc.slice(sSrc.indexOf(aExec[0]) + aExec[0].length)) || ""
    : "";
}

var oReq = new XMLHttpRequest();
oReq.open("GET", "yourPage.html", true);
oReq.onload = function () {
  console.log(getHTML(this, "intro"));
};
oReq.send(null);
```

> **メモ:** この方法はインタープリターにとってとても重いものです。**本当に必要なときのみ使用してください**。

## 仕様書

{{Specifications}}

## ブラウザーの対応

### `XMLHttpRequest` インターフェイス

{{Compat("api.XMLHttpRequest")}}

## 関連情報

- {{domxref("XMLHttpRequest")}}
- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
