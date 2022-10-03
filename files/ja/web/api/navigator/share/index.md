---
title: Navigator.share()
slug: Web/API/Navigator/share
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

**`Navigator.share()`** メソッドは、 Web Share API の一部としてのネイティブの共有メカニズムを呼び出します。

## 構文

```
var sharePromise = navigator.share(data);
```

### 引数

- `data`
  - : シェアするデータを含むオブジェクトです。以下のフィールドのうち少なくとも一つを指定しなければなりません。利用可能なオプションは下記のとおりです。

<!---->

- `url`: シェアする URL を表す {{domxref("USVString")}}。
- `text`: シェアするテキストを表す {{domxref("USVString")}}。
- `title`: シェアするタイトルを表す {{domxref("USVString")}}。

<!---->

### 返値

ユーザーがシェア操作を完了させたとき (ふつうはユーザーがシェア先のアプリケーションを選択したとき) に解決する {{domxref("Promise")}} です。引数 _data_ が正しく指定されなかった場合は直ちに拒否され、ユーザーがシェアをキャンセルした場合も拒否されます。

## 例

[ウェブシェアテスト](https://mdn.github.io/dom-examples/web-share/) ([ソースコードを参照](https://github.com/mdn/dom-examples/blob/master/web-share/index.html)) では、ボタンが一つあり、クリックすると Web Share API を呼び出して MDN の URL をシェアします。 JavaScript は以下のようになります。

```js
const shareData = {
  title: 'MDN',
  text: 'MDN でウェブ開発を学びましょう。',
  url: 'https://developer.mozilla.org',
}

const btn = document.querySelector('button');
const resultPara = document.querySelector('.result');

// Must be triggered some kind of "user activation"
btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
    resultPara.textContent = 'MDN shared successfully'
  } catch(e) {
    resultPara.textContent = 'Error: ' + e
  }
});
```

## 仕様書

| 仕様書                                                                   | 状態                                 | 備考 |
| ------------------------------------------------------------------------ | ------------------------------------ | ---- |
| {{SpecName('Web Share API','#share-method','share()')}} | {{Spec2('Web Share API')}} |      |

## ブラウザーの互換性

{{Compat("api.Navigator.share")}}

## 関連情報

- {{domxref('navigator.canShare', 'navigator.canShare()')}}
