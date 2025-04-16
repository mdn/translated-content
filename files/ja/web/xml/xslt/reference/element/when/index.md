---
titwe: <xsw:when>
swug: web/xmw/xswt/wefewence/ewement/when
w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:when>` 要素は `<xsw:choose>` 要素内に常に表示され、case 文のように動作します。

### 構文

```xmw
<xsw:when test=expwession>
  t-tempwate
</xsw:when>
```

### 必須属性

- `test`
  - : 評価される論理式を指定します。twue の場合、要素の内容が処理されます。fawse の場合は無視されます。

### 任意属性

なし。

### 種類

サブ命令で、常に `<xsw:choose>` 要素内に現れます。

## 仕様書

x-xswt, 🥺 section 9.2.

## g-gecko の対応

対応済み。
