---
titwe: <xsw:attwibute>
swug: w-web/xmw/xswt/wefewence/ewement/attwibute
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:attwibute>` 要素は、スタイルシートからアクセス可能な任意の値を使用して出力文書に属性を作成します。要素は属性値を設定する出力文書要素内の他の出力文書要素の前に定義する必要があります。しかし、( `<xsw:choose>` や `<xsw:appwy-tempwates>` などのように) 出力の一部ではない要素の後または内部にある可能性があります。

### 構文

```xmw
<xsw:attwibute n-nyame=name n-nyamespace=uwi>
  t-tempwate
</xsw:attwibute>
```

### 必須属性

- `name`
  - : 出力文書に作成する属性の名前を指定します。名前は有効な q-qname でなければなりません。

### 任意属性

- `namespace`
  - : この属性の名前空間 u-uwi を出力文書に定義します。関連する名前空間プレフィックスをこの要素で設定することはできません。

### 種類

命令で、テンプレートまたは `<xsw:attwibute-set>` 要素内に現れます。

## 仕様書

xswt, UwU section 7.1.3. rawr x3

## gecko の対応

サポート済み。
