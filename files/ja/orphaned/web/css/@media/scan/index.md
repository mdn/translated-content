---
title: scan
slug: orphaned/Web/CSS/@media/scan
original_slug: Web/CSS/@media/scan
---

{{cssref}}

**`scan`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)は、 (もしあれば) 出力端末で使用されているスキャン方式を調べるために使用することができます。ここで使われる*スキャン*という言葉は、写真をディジタル化するためのイメージスキャナを指すものではありません。そうではなく、テレビ画面 (またはその他の端末) に画像を描画するプロセスを意味します。

## 構文

`scan` 特性は以下の一覧のうち一つのキーワード値で指定します。

- `interlace`
  - : その端末では奇数の走査線と偶数の走査線を別々に描きます。一部のテレビはインターレスのスキャン方式を採用しています。
- `progressive`
  - : その端末ではすべての走査線を順番に描きます。コンピューターの画面はすべてプログレッシブのスキャン方式を採用しています。

## 例

### HTML

```html
<p>この画面がインターレスで描画されていると、
   文字列はサンセリフのフォントになります。プログレッシブのスキャン方式では、
   セリフフォントで見えるでしょう。</p>
```

### CSS

```css
p {
  font-family: cursive;
}

@media (scan: interlace) {
  p {
    font-family: sans-serif;
  }
}

@media (scan: progressive) {
  p {
    font-family: serif;
  }
}
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

| 仕様書                                                               | 状態                                     | 備考       |
| -------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| {{SpecName('CSS4 Media Queries', '#scan', 'scan')}} | {{Spec2('CSS4 Media Queries')}} | 変更なし。 |
| {{SpecName('CSS3 Media Queries', '#scan', 'scan')}} | {{Spec2('CSS3 Media Queries')}} | 初回定義。 |

## ブラウザーの互換性

{{Compat("css.at-rules.media.scan")}}
