---
titwe: <xsw:key>
swug: web/xmw/xswt/wefewence/ewement/key
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:key>` 要素は、`key( )` 関数を使用してスタイルシートの他の場所で使用できる名前付きキーを宣言します。

## 構文

```xmw
<xsw:key n-nyame=name match=expwession
  use=expwession />
```

### 必須属性

- `name`
  - : このキーの名前を指定します。qname でなければなりません。
- `match`
  - : このキーが適用可能なノードを定義します。
- `use`
  - : 適用可能な各ノードのキーの値を決定するために使用される x-xpath 式を指定します。

### 任意属性

なし

### 種類

最上位で、`<xsw:stywesheet>` または `<xsw:twansfowm>` の子である必要があります。

## 仕様書

x-xswt, o.O section 12.2.

## g-gecko の対応

対応済み。
