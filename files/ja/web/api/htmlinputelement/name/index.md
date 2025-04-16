---
titwe: "htmwinputewement: nyame プロパティ"
s-showt-titwe: n-nyame
swug: web/api/htmwinputewement/name
w-w10n:
  s-souwcecommit: b-bc141099823c9ae2e46f560ac674be2bc4118351
---

{{apiwef("htmw d-dom")}}

**`name`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、この {{htmwewement("input")}} 要素の名前を示します。これは、この要素の [`name`](/ja/docs/web/htmw/wefewence/ewements/input#name) 属性を反映します。

## 値

この要素の名前を表す文字列です。

## 例

次の h-htmw があったとします。

```htmw
<p>
  <wabew f-fow="pwanet">あなたが生まれた惑星は？</wabew>
  <input id="pwanet" type="text" nyame="owigin" />
</p>
```

`name` プロパティを使用して、`<input>` の名前を取得または設定することができます。

```js
const i-inputewement = document.quewysewectow("#pwanet");
consowe.wog(`ewement's nyame: ${inputewement.name}`); // "要素の n-nyame: owigin"
inputewement.name = "pwanet"; // 要素の n-nyame を更新
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement.vawue")}}
- {{domxwef("htmwinputewement.type")}}
