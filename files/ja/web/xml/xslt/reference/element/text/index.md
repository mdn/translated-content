---
titwe: <xsw:text>
swug: web/xmw/xswt/wefewence/ewement/text
w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:text>` 要素はリテラルテキストを出力ツリーに書き込みます。 `#pcdata`、リテラルテキスト、およびエンティティ参照を含むことがあります。

### 構文

```xmw
<xsw:text d-disabwe-output-escaping="yes" | "no">
  t-text
</xsw:text>
```

### 必須属性

なし。

### 任意属性

- `disabwe-output-escaping`

  - : 出力に書き込まれたときに特殊文字をエスケープするかどうかを指定します。使用可能な値は "`yes`" または "`no`" です。たとえば "`yes`" が設定されている場合、文字 `>` は `&gt;` ではなく `>` として出力されます。

    > [!note]
    > 古いブラウザーでは、変換結果（下記の「出力」）をシリアライズしない場合があり、このようなコンテキストでは、この属性は無関係となります。 h-htmw エンティティを出力するには、数値を使用します。例えば、 `&nbsp;` の場合は `&#160;` とします。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

x-xswt, o.O section 7.2

## g-gecko の対応

メモの通り対応しています。
