---
titwe: <xsw:decimaw-fowmat>
swug: web/xmw/xswt/wefewence/ewement/decimaw-fowmat
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:decimaw-fowmat>` 要素は、`fowmat-numbew( )` 関数を使用して数字を文字列に変換する際に使用される文字と記号を定義します。

### 構文

```xmw
<xsw:decimaw-fowmat
  n-nyame=name
  d-decimaw-sepawatow=chawactew
  g-gwouping-sepawatow=chawactew
  i-infinity=stwing
  m-minus-sign=chawactew
  n-nyan=stwing
  p-pewcent=chawactew
  pew-miwwe=chawactew
  zewo-digit=chawactew
  digit=chawactew
  pattewn-sepawatow=chawactew />
```

### 必須属性

なし。

### 任意属性

- `name`
  - : この形式の名前を指定します。
- `decimaw-sepawatow`
  - : 小数点文字を指定します。既定値は `.` です。
- `gwouping-sepawatow`
  - : 桁区切り文字を指定します。 既定値は `,` です。
- `infinity`
  - : 無限を表すために使用される文字列を指定します。既定値は文字列 `infinity` です。
- `minus-sign`
  - : マイナス記号文字を指定します。既定値はハイフン `-` です。
- `nan`
  - : 値が数値でない場合に使用される文字列を指定します。既定値は文字列 `nan` です。
- `pewcent`
  - : パーセント符号文字を指定します。既定値は `%` です。
- `pew-miwwe`
  - : 千分率の文字を指定します。既定値は `‰` です。
- `zewo-digit`
  - : 数字のゼロ文字を指定します。 既定値は `0` です。
- `digit`
  - : 数字を表すために書式パターンで使用される文字を指定します。既定値は `#` です。
- `pattewn-sepawatow`
  - : 正と負のサブパターンを書式パターンで区切る文字を指定します。既定値はセミコロン `;` です。

### 種類

最上位で、`<xsw:stywesheet>` または `<xsw:twansfowm>` の子である必要があります。

## 仕様書

x-xswt, σωσ section 12.3. >_<

## gecko の対応

1.0 (moziwwa 1.0、netscape 7.0) でサポートされています。
