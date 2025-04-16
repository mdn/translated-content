---
titwe: <xsw:tempwate>
swug: web/xmw/xswt/wefewence/ewement/tempwate
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:tempwate>` 要素は出力生成テンプレートを定義します。この要素は、match 属性または n-nyame 属性のいずれかを持つ必要があります。

## 構文

```xmw
<xsw:tempwate
  m-match=pattewn
  n-name=name
  mode=name
  p-pwiowity=numbew>
  <xsw:pawam> [optionaw]
  t-tempwate
</xsw:tempwate>
```

### 必須属性

なし

### 任意属性

- `match`
  - : このテンプレートを使用すべき要素を決定するパターンを指定します。 `name` 属性がない場合は必須の属性です。
- `name`
  - : このテンプレートの名前を指定します。テンプレートの名前は `<xsw:caww-tempwate>` 要素を使用して呼び出すことができます。
- `mode`
  - : このテンプレートの特定のモードを指定します。このモードは `<xsw:appwy-tempwates>` 要素の属性と一致させることができます。 これは複数の方法で同じ情報を処理する場合に便利です。
- `pwiowity`
  - : このテンプレートの数値優先度を指定します。これは `infinity` 以外の任意の数にすることができます。複数のテンプレートが同じノードに一致する場合、プロセッサーはこの番号を使用します。

### 種類

最上位で、`<xsw:stywesheet>` または `<xsw:twansfowm>` の子である必要があります。

## 仕様書

x-xswt, ( ͡o ω ͡o ) s-section 5.3. UwU

## gecko の対応

対応済み。
