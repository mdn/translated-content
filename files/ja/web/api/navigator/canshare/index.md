---
title: "Navigator: canShare() メソッド"
short-title: canShare()
slug: Web/API/Navigator/canShare
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("Web Share API")}}{{securecontext_header}}

**`canShare()`** は {{domxref("Navigator")}} インターフェイスのメソッドで、同等の {{domxref("navigator.share()")}} の呼び出しが成功するようであれば `true` を返します。

データが検証できない場合は、このメソッドは `false` を返します。データが無効になる理由としては、次のものがあります。

- `data` 引数が除外されているか、不明な値を持つプロパティしかない場合。ユーザーエージェントが認識できないプロパティは無視されることに注意してください。
- URL の形式が正しくない場合。
- ファイルが指定されているが、実装がファイル共有に対応していない場合。
- 指定したデータを共有すると、ユーザーエージェントから「敵対的な共有」と見なされる場合。

[ウェブ共有 API](/ja/docs/Web/API/Web_Share_API)は [web-share](/ja/docs/Web/HTTP/Headers/Permissions-Policy/web-share) 権限ポリシーによって制限されています。
`canShare()` メソッドは、その権限に対応しているが付与されていない場合、 `false` を返します。

## 構文

```js-nolint
canShare()
canShare(data)
```

### 引数

- `data` {{optional_inline}}

  - : テストする共有データを定義したオブジェクトです。
    通常、この呼び出しが `true` を返す場合、同じプロパティを持つオブジェクトが {{domxref("navigator.share()")}} に渡されます。

    ユーザーエージェントが認識していないプロパティは無視されます。共有データは、ユーザーエージェントが理解しているプロパティに対してのみ評価されます。
    プロパティはすべて任意ですが、少なくともひとつの既知のデータプロパティを指定しなければ、このメソッドは `false` を返します。

    使用可能な値は以下の通りです。

    - `url` {{optional_inline}}
      - : 共有される URL を表す文字列。
    - `text` {{optional_inline}}
      - : 共有されるテキストを表す文字列。
    - `title` {{optional_inline}}
      - : 共有されるタイトルを表す文字列。
    - `files` {{optional_inline}}
      - : 共有されるファイルを表す {{domxref("File")}} オブジェクトの配列。

### 返値

指定した `data` が {{domxref("Navigator.share()")}} で共有できる場合は `true` を、そうでない場合は `false` を返します。

## 例

### MDN URL の送信

この例では `navigator.canShare()` を使用して、指定されたデータが `navigator.share()` で共有できるかどうかを調べています。

#### HTML

HTML は、テストの結果を表示するための段落を作成するだけです。

```html
<p class="result"></p>
```

#### JavaScript

```js
let shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const resultPara = document.querySelector(".result");

if (!navigator.canShare) {
  resultPara.textContent = "navigator.canShare() に対応していません。";
} else if (navigator.canShare(shareData)) {
  resultPara.textContent =
    "navigator.canShare() に対応しています。navigator.share() を使ってデータを送ることができます。";
} else {
  resultPara.textContent = "指定されたデータは共有できません。";
}
```

#### 結果

以下のボックスには、 `navigator.canShare()` がこのブラウザーで対応しているかどうか、対応している場合は `navigator.share()` を使用して指定したデータを共有できるかどうかが記載されているはずです。

{{EmbedLiveSample('Sending_the_MDN_URL')}}

### 機能の調査例

このメソッドの機能は、特定のデータプロパティが有効で共有可能であるかどうかをテストします。
単一の `data` プロパティで使用した場合、そのプロパティが有効で、プラットフォーム上で共有できる場合にのみ `true` を返します。

下記のコードは、あるデータプロパティが対応しているかどうかを確認する例です。

```js
// 対応していない可能性のある機能
let testShare = { someNewProperty: "Data to share" };

// 新しいキーを使用する複合データ
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
  someNewProperty: "Data to share",
};

// 共有する前に、キーが有効で対応していることをテストします。
if (navigator.canShare(testShare)) {
  // navigator.share() を使用して 'shareData' を使用する
} else {
  // 新しいデータプロパティが共有できない場合の処理
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("navigator.share()")}}
