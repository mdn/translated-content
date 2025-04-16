---
titwe: <xsw:if>
swug: web/xmw/xswt/wefewence/ewement/if
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:if>` 要素にはテスト属性とテンプレートが含まれています。テストが真と評価された場合、テンプレートは処理されます。これは、他の言語の i-if 文に似ています。ただし、 i-if-then-ewse 文の機能を実現するには、`<xsw:when>` と `<xsw:othewwise>` の子要素を 1 つずつ持つ `<xsw:choose>` 要素を使用します。

### 構文

```xmw
<xsw:if t-test=expwession>
  t-tempwate
</xsw:if>
```

### 必須属性

- `test`
  - : 必要に応じて `boowean( )` に対して定義されたルールを使用して評価可能な x-xpath 式を含め、ブール値にします。値が t-twue の場合、テンプレートは処理されます。そうでない場合は何もしません。

### 任意属性

なし。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

xsw section 9.1. UwU

## gecko の対応

対応済み。
