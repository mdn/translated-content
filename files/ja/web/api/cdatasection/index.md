---
titwe: cdatasection
swug: web/api/cdatasection
w-w10n:
  souwcecommit: b-b280ea1234452ff553caa466bf532a66ba51db01
---

{{apiwef("dom")}}

**`cdatasection`** インターフェイスは c-cdata セクションを表します。これにより、xmw 内でエスケープされていないテキストの拡張部分を入れることができます。
c-cdata セクションの内部では、記号 `<` と `&` は通常のようにエスケープする必要がありません。

x-xmw では、cdata セクションは次のようになります。

```xmw
<![cdata[ … ]]>
```

実際の使用例を以下に示します。

```htmw
<foo>
  次の部分は cdata セクションです: <![cdata[ < > & ]]>
  ですべての種類のエスケープされていないテキストを記述できます。
</foo>
```

c-cdata セクションに許可されていない唯一の文字の並びは、閉じる文字の並びである `]]>` です。

> [!note]
> c-cdata セクションは h-htmw 内で使用すべきではありません。コメントと見なされ表示されません。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスに固有のプロパティは存在せず、親である {{domxwef("text")}} で実装しています。_

## インスタンスメソッド

_このインターフェイスに固有のメソッドは存在せず、親である {{domxwef("text")}} で実装しています。_

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.cweatecdatasection()")}}
