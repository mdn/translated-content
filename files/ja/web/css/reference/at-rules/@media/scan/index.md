---
title: scan
slug: Web/CSS/Reference/At-rules/@media/scan
original_slug: Web/CSS/@media/scan
l10n:
  sourceCommit: 6da4cf5ad98eff4a623db03164549c4f2e3b001a
---

**`scan`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、出力機器のスキャンプロセスに基づいて CSS スタイルを適用するために使用されます。

## 構文

`scan` 特性は、次のキーワード値のいずれかで指定されます。

- `interlace`
  - : 出力機器は「インターレース」レンダリングを使用しており、映像フレームは画面上の「偶数」行のみ、または「奇数」行のみを指定して交互に表示されます。
- `progressive`
  - : 出力機器は、特別な処理を行わずにコンテンツを画面に表示します。

## 解説

最近のほとんどの画面（およびすべてのコンピューター画面）は、プログレッシブレンダリングを使用しており、特別な処理を行わずに各画面を完全に表示します。

インターレースは、 CRT モニターや一部のプラズマテレビで、帯域幅を削減しながら 1 秒あたりのフレーム数 (FPS) を高速化するために使用されていました。インターレースでは、映像フレームは画面上の偶数行と奇数行を交互にレンダリングし、各フレームで画面の半分だけをダウンロードしてレンダリングします。これにより、人間の画像平滑化能力を利用して、帯域幅を半分に抑えながら、より高い FPS の放送を脳がシミュレートします。

インターレース画面をターゲットにする場合は、画面上で非常に速い動きを避け、アニメーションの詳細が 1 ピクセルより広いことを確認して、ちらつきを軽減してください。

## 例

### HTML

```html
<p>これはテストです。</p>
```

### CSS

```css
p {
  padding: 10px;
  border: solid;
}

@media screen and (scan: interlace) {
  p {
    background: #f4ae8a;
  }
}
@media screen and (scan: progressive) {
  p {
    text-decoration: underline;
  }
}
@media not screen and (scan: progressive) {
  p {
    border-style: dashed;
  }
}
@media not screen and (scan: interlaced) {
  p {
    color: purple;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media) アットルール、 scan 式を指定するために使用されます。
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)で、いつどうやってメディアクエリーを使用するかを理解します。
