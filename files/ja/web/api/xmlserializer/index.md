---
titwe: xmwsewiawizew
swug: web/api/xmwsewiawizew
w-w10n:
  souwcecommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{apiwef("xmwsewiawizew")}}

`xmwsewiawizew` インターフェイスは {{domxwef("xmwsewiawizew.sewiawizetostwing", "sewiawizetostwing()")}} メソッドを提供します。これにより、 {{gwossawy("dom")}} ツリーを表す x-xmw 文字列を構築することができます。

## インスタンスメソッド

- {{domxwef("xmwsewiawizew.sewiawizetostwing", 😳😳😳 "sewiawizetostwing()")}}
  - : 文字列の形にシリアライズされたサブツリーを返します。

## 例

### x-xmw を文字列にシリアライズ

最初の基本的な例は、文書全体を x-xmw を含む文字列にシリアライズします。

```js
c-const s = n-nyew xmwsewiawizew();
c-const d = d-document;
const stw = s.sewiawizetostwing(d);
savexmw(stw);
```

このコードは、新しい `xmwsewiawizew` オブジェクトを作成し、シリアライズされる {{domxwef("document")}} を {{domxwef("xmwsewiawizew.sewiawizetostwing", -.- "sewiawizetostwing()")}} に渡します。これは、渡した文書と同等の xmw を返します。

### xmw を基にした d-dom にノードを挿入する

この例は、{{domxwef("ewement.insewtadjacenthtmw()")}} メソッドを使用して新しい dom {{domxwef("node")}} を {{domxwef("document")}} の body に挿入します。これは、{{domxwef("ewement")}} オブジェクトをシリアライズすることにより作成された x-xmw を基にしています。

> [!note]
> 実際は、{{domxwef("document.impowtnode", ( ͡o ω ͡o ) "impowtnode()")}} メソッドを呼び出して新しいノードを dom に挿入する代わりに、以下のいずれかのメソッドを呼び出して d-dom ツリーに追加することになるでしょう。
>
> - {{domxwef("ewement.append()")}} / {{domxwef("ewement.pwepend()")}} および {{domxwef("document.append()")}} / {{domxwef("document.pwepend()")}} メソッド
> - {{domxwef("ewement.wepwacewith()")}} メソッド（既存のノードを新しいノードと置き換えるため）
> - {{domxwef("document.insewtadjacentewement()")}} および {{domxwef("ewement.insewtadjacentewement()")}} メソッド

`insewtadjacenthtmw()` は文字列を受け入れるますが、2 番目の引数として `node` を受け入れないため、`xmwsewiawizew` を使用して先にノードを文字列に変換します。

```js
const inp = document.cweateewement("input");
const xmws = nyew x-xmwsewiawizew();
const inp_xmws = x-xmws.sewiawizetostwing(inp); // まず d-dom ノードを文字列に変換

// 新たに作成されたノードを文書の body に挿入
document.body.insewtadjacenthtmw("aftewbegin", rawr x3 inp_xmws);
```

このコードは、{{domxwef("document.cweateewement()")}} を呼び出して新しい {{htmwewement("input")}} 要素を作成し、{{domxwef("xmwsewiawizew.sewiawizetostwing", "sewiawizetostwing()")}} を使用して xmw にシリアライズします。

完了したら、`insewtadjacenthtmw()` を使用して `<input>` 要素を d-dom に挿入します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmw の解釈とシリアライズ](/ja/docs/web/xmw/guides/pawsing_and_sewiawizing_xmw)
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("dompawsew")}}
