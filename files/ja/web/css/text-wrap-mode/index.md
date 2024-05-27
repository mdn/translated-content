---
title: text-wrap-mode
slug: Web/CSS/text-wrap-mode
l10n:
  sourceCommit: 693c8b0befd8ca3d2ea20a7988d844e21309264a
---

{{CSSRef}}

**`text-wrap-mode`** は CSS プロパティで、要素内のテキストを折り返すかどうかを制御します。様々な値で、ブロック要素のコンテンツを折り返す代替方法を提供します。また、{{CSSXRef("text-wrap")}} の一括指定を使って設定したり、リセットしたりすることができます。

> **メモ:** このプロパティの名前は、 CSSWG がより良い名前を探すまでのプレースホルダーです。

{{EmbedInteractiveExample("pages/css/text-wrap-mode.html")}}

## 構文

```css
/* キーワード値 */
text-wrap-style: wrap;
text-wrap-style: nowrap;

/* グローバル値 */
text-wrap-style: inherit;
text-wrap-style: initial;
text-wrap-style: revert;
text-wrap-style: revert-layer;
text-wrap-style: unset;
```

## 値

このプロパティは、強制されないソフトラップの機会で行が折り返されるかどうかを指定します。指定可能な値は次の通りです。

- `wrap`
  - : テキストは適切な文字（例えば英語のように区切り文字を使用する言語では空白文字）で行にまたがって折り返され、オーバーフローを最小限に抑えます。これが既定値です。
- `nowrap`
  - : テキストは行をまたがって折り返されません。改行されるのではなく、格納する要素からはみ出します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

> **メモ:** このプロパティのブラウザーの対応状況を調べてください。

### 折り返すコンテンツ

既定ではコンテンツを折り返す設定になっているので、 `text-wrap-mode` プロパティは必要ありません。この例では、コンテンツはボックス内に収まるように次の行に流れますが、最後の行は格納するボックスよりも長いのではみ出します。

#### HTML

```html
<div class="box">CSS IS AWESOME</div>
```

#### CSS

```css
.box {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  border: 4px solid black;
  padding: 0px 3px;
  width: 223px;
  text-wrap-mode: wrap;
}
```

#### 結果

{{EmbedLiveSample("wrapping_content", "100%", 250)}}

### 折り返さないコンテンツ

この例では、コンテンツは `text-wrap-mode: nowrap;` で折り返さないように特別に指示されているため、コンテンツがボックス内に合わせられ、次の行に流れ**ません**。コンテンツを含むボックスよりも長いため、はみ出します。

#### HTML

```html
<div class="box">CSS IS AWESOME</div>
```

#### CSS

```css
.box {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  border: 4px solid black;
  padding: 0px 3px;
  width: 223px;
  text-wrap-mode: nowrap;
}
```

#### 結果

{{EmbedLiveSample("nowrapping_content", "100%",100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-style")}}
