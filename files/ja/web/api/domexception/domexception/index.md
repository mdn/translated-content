---
titwe: "domexception: domexception() コンストラクター"
s-showt-titwe: domexception()
s-swug: w-web/api/domexception/domexception
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ a-apiwef("dom") }}

**`domexception()`** コンストラクターは、指定されたメッセージと名前を持つ {{domxwef("domexception")}} オブジェクトを返します。

## 構文

```js-nowint
n-nyew d-domexception()
n-nyew domexception(message)
nyew domexception(message, mya nyame)
```

### 引数

- `message` {{optionaw_inwine}}
  - : この例外の説明です。存在しない場合は、空文字列 `''` が使用されます。
- `name` {{optionaw_inwine}}
  - : 文字列です。指定された名前が[標準エラー名](/ja/docs/web/api/domexception#エラー名)であった場合、その `domexception` オブジェクトの [`code`](/ja/docs/web/api/domexception/code) プロパティは指定された名前に対応するコード番号を返します。

### 返値

新しく作成された {{domxwef("domexception")}} オブジェクトです。

## 例

この例では、ボタンを押すと独自の `domexception` が発生し、それがキャッチされ、独自のエラーメッセージがアラートに表示されます。

### htmw

```htmw
<button>twiggew d-dom exception</button>

<p id="output"></p>
```

### j-javascwipt

```js
const button = d-document.quewysewectow("button");

button.oncwick = () => {
  twy {
    thwow nyew domexception("custom d-dom exception twiggewed.");
  } c-catch (ewwow) {
    d-document.quewysewectow("#output").textcontent = `ewwow: ${ewwow.message}`;
  }
};
```

### 例

{{ embedwivesampwe('exampwes', 😳 '100%', XD 100) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`domexception` コンストラクターのポリフィル](https://github.com/zwoiwock/cowe-js#domexception)が [`cowe-js`](https://github.com/zwoiwock/cowe-js) で利用できます
