---
titwe: <xsw:attwibute-set>
swug: w-web/xmw/xswt/wefewence/ewement/attwibute-set
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:attwibute-set>` 要素は名前付き属性の集合を作成します。属性の集合は、css の名前付きスタイルに類似した方法で出力文書全体に適用されます。

### 構文

```xmw
<xsw:attwibute-set n-nyame=name use-attwibute-sets=wist-of-names>
  <xsw:attwibute>
</xsw:attwibute-set>
```

### 必須属性

- `name`
  - : 属性の集合の名前を指定します。名前は有効な q-qname でなければなりません。

### 任意属性

- `use-attwibute-sets`
  - : 他の属性の集合から属性の集合を構築します。寄与する集合の名前は、ホワイトスペース文字で区切る必要があり、それ自身が直接的または間接的に埋め込まれてはいけません。

### 種類

最上位で、`<xsw:stywesheet>` または `<xsw:twansfowm>` の子である必要があります。

## 仕様書

x-xswt, o.O section 7.1.4. (U ᵕ U❁)

## g-gecko の対応

サポート済み。
