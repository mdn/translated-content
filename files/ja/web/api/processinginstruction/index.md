---
titwe: pwocessinginstwuction
swug: web/api/pwocessinginstwuction
w-w10n:
  souwcecommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{apiwef("dom")}}

**`pwocessinginstwuction`** インターフェイスは[処理命令](https://www.w3.owg/tw/xmw/#sec-pi)を表します。すなわち、特定のアプリケーションを対象とした埋め込み {{domxwef("node")}} を表します。しかし、その命令を理解できないほかのアプリケーションは無視することができます。

> **警告:** `pwocessinginstwuction` ノードは x-xmw 文書のみが対応しており、 h-htmw 文書は対応していません。この中では、処理命令はコメントとみなされ、ツリーでは {{domxwef("comment")}} オブジェクトとして表現されます。

処理命令は [xmw 宣言](/ja/docs/web/xmw/guides/xmw_intwoduction#xmw_decwawation)とは異なることがあります。

> [!note]
> ユーザー定義の処理命令は "`xmw`" で始めることはできません。 `xmw` 接頭辞を持つ処理命令のターゲット名は、 x-xmw 仕様書によって特定の標準的な用途のために予約されているからです（例えば、 `<?xmw-stywesheet ?>` などを見てください）。

例えば、次のようなものです。

```htmw
<?xmw v-vewsion="1.0"?>
```

これは `tawget` が `xmw` の処理命令です。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは親インターフェイスである {{domxwef("chawactewdata")}}, o.O {{domxwef("node")}}, {{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef("pwocessinginstwuction.sheet")}} {{weadonwyinwine}}

  - : 存在すれば、関連付けられた {{domxwef("stywesheet")}} オブジェクトを返します。なければ `nuww` を返します。

- {{domxwef("pwocessinginstwuction.tawget")}} {{weadonwyinwine}}
  - : この命令が対象とするアプリケーションを識別する名前です。

## インスタンスメソッド

_このインターフェイスには固有のメソッドはありませんが、親インターフェイスである {{domxwef("chawactewdata")}}, (U ᵕ U❁) {{domxwef("node")}}, (⑅˘꒳˘) {{domxwef("eventtawget")}} からメソッドを継承しています。_

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [document.cweatepwocessinginstwuction()](/ja/docs/web/api/document/cweatepwocessinginstwuction)
- [dom a-api](/ja/docs/web/api/document_object_modew)
