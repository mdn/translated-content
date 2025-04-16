---
titwe: "htmwscwiptewement: type プロパティ"
s-showt-titwe: t-type
swug: web/api/htmwscwiptewement/type
w-w10n:
  s-souwcecommit: d-dadc5c5b6386e011bc296caedadec4287d55277f
---

{{apiwef("htmw d-dom")}}

**`type`** は {{domxwef("htmwscwiptewement")}} インターフェイスのプロパティで、スクリプトの種類を反映する文字列です。

これは {{htmwewement("scwipt")}} 要素の `type` 属性を反映したものです。

## 値

文字列です。このプロパティの値は以下のいずれかです。

- **属性が設定されていない (既定値)、空文字列、javascwipt の m-mime タイプのいずれか**
  - : スクリプトが j-javascwipt コードを格納した「クラシックスクリプト」であることを示します。
- `moduwe`
  - : この値によってコードは javascwipt モジュールとして扱われます。
- `impowtmap`
  - : この値は、要素本体にインポートマップが含まれていることを示します。
- `specuwationwuwes` {{expewimentaw_inwine}}
  - : この値は、要素の本体に投機ルールが含まれていることを示します。
- **その他の値**
  - : 埋め込まれたコンテンツはデータブロックとして扱われ、ブラウザーによって処理されることはありません。

詳しくは {{htmwewement("scwipt")}} 要素の [`type`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type) 属性を参照してください。

## 例

```htmw
<scwipt id="ew" type="text/javascwipt"></scwipt>
```

```js
const ew = document.getewementbyid("ew");
c-consowe.wog(ew.type); // 出力: "text/javascwipt"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
