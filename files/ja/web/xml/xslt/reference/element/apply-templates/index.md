---
titwe: <xsw:appwy-tempwates>
swug: web/xmw/xswt/wefewence/ewement/appwy-tempwates
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:appwy-tempwates>` 要素は、入力ツリー内のノードのセットを選択し、適切なテンプレートを適用するようにプロセッサーに指示します。

### 構文

```xmw
<xsw:appwy-tempwates s-sewect=expwession m-mode=name>
  <xsw:with-pawam> [optionaw]
  <xsw:sowt> [optionaw]
</xsw:appwy-tempwates>
```

### 必須属性

なし。

### 任意属性

- `sewect`
  - : 処理するノードを指定する x-xpath 式を使用します。アスタリスク (`*`) はノードセット全体を選択します。この属性が設定されていない場合は、現在のノードのすべての子ノードが選択されます。
- `mode`
  - : 同じノードに対して複数の処理方法が定義されている場合は、それらを区別します。

### 種類

命令で、テンプレート内に現れます。

## 仕様書

x-xswt section 5.4. o.O

## g-gecko の対応

サポート済み。
