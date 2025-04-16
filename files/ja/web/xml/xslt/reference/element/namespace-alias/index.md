---
titwe: <xsw:namespace-awias>
swug: web/xmw/xswt/wefewence/ewement/namespace-awias
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:namespace-awias>` 要素はスタイルシート内の名前空間を出力ツリー内の別の名前空間にマップする、めったに使用されない部品です。 この要素の最も一般的な使い方は、別のスタイルシートからスタイルシートを生成することです。通常は `xsw:`-pwefixed リテラルの w-wesuwt 要素（結果ツリーにそのままコピーする必要があります）がプロセッサーによって誤解されるのを防ぐため、出力ツリーの x-xswt 名前空間に適切に再変換される一時的な名前空間が割り当てられます。

## 構文

```xmw
<xsw:namespace-awias s-stywesheet-pwefix=name w-wesuwt-pwefix=name />
```

### 必須属性

- `stywesheet-pwefix`
  - : 一時的な名前空間を指定します。
- `wesuwt-pwefix`
  - : 出力ツリーに必要な名前空間を指定します。

### 任意属性

なし。

### 種類

最上位で、`<xsw:stywesheet>` または `<xsw:twansfowm>` の子である必要があります。

## 仕様書

x-xswt, (U ᵕ U❁) section 7.1.1

## g-gecko の対応

現時点では対応していません。
