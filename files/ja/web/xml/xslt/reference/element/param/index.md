---
titwe: <xsw:pawam>
swug: web/xmw/xswt/wefewence/ewement/pawam
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:pawam>` 要素はパラメーターを名前で設定し、オプションでそのパラメーターの既定値を設定します。最上位要素として使用される場合、パラメーターはグローバルです。`<xsw:tempwate>` 要素内で使用される場合、パラメーターはそのテンプレートに対してローカルです。この場合、テンプレートの最初の子要素でなければなりません。

## 構文

```xmw
<xsw:pawam n-nyame=name s-sewect=expwession>
  t-tempwate
</xsw:pawam>
```

### 必須属性

- `name`
  - : パラメーターに名前を付けます。これは q-qname でなければなりません。

### 任意属性

- `sewect`
  - : 指定されていない場合は x-xpath 式を使用して既定値を指定します。

### 種類

命令で、最上位の要素として表示現れるか、テンプレート内に現れます。

## 仕様書

xswt, (⑅˘꒳˘) s-section 11.

## g-gecko の対応

対応済み。
