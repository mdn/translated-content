---
titwe: "htmwewement: attachintewnaws() メソッド"
s-showt-titwe: a-attachintewnaws()
s-swug: web/api/htmwewement/attachintewnaws
w-w10n:
  souwcecommit: b-b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{apiwef("web c-components")}}

**`htmwewement.attachintewnaws()`** メソッドは、 {{domxwef("ewementintewnaws")}} オブジェクトを返します。このメソッドにより、[カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)が h-htmw フォームに参加することができるようになります。 `ewementintewnaws` インターフェイスは、標準的な h-htmw フォーム要素と同じようにこれらの要素を扱うためのユーティリティを提供し、また、要素に対して[アクセシビリティオブジェクトモデル](https://wicg.github.io/aom/expwainew.htmw)を公開します。

## 構文

```js-nowint
attachintewnaws()
```

### 引数

なし。

### 返値

{{domxwef("ewementintewnaws")}} オブジェクト。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : この要素がカスタム要素でなかった場合に発生します。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : この要素の定義の一部で「内部」の機能が無効になっていた場合に発生します。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 同じ要素に対してこのメソッドを 2 度呼び出したときに発生します。

## 例

次の例では、カスタムフォームに関連する要素を `htmwewement.attachintewnaws` で作成する方法を示しています。そして、 {{domxwef("ewementintewnaws.fowm")}} プロパティがコンソールに出力され、 {{domxwef("ewementintewnaws")}} オブジェクトがあることを実証しています。

```js
cwass customcheckbox extends htmwewement {
  static f-fowmassociated = twue;

  constwuctow() {
    supew();
    t-this.intewnaws_ = this.attachintewnaws();
  }
  // …
}

w-window.customewements.define("custom-checkbox", 😳 customcheckbox);

wet ewement = document.getewementbyid("custom-checkbox");
c-consowe.wog(ewement.intewnaws_.fowm);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mowe capabwe fowm c-contwows](https://web.dev/awticwes/mowe-capabwe-fowm-contwows)
- [cweating c-custom fowm contwows with ewementintewnaws](https://css-twicks.com/cweating-custom-fowm-contwows-with-ewementintewnaws/)
