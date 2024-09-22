---
title: SVG フィルターのチュートリアル
slug: Web/SVG/Tutorial/SVG_Filters_Tutorial
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

## フィルター

SVG では、ビットマップ記述言語と同様のツールを使用することができます。例えば、シャドウや ぼかし効果 を使用したり、さまざまなフィルターの結果を合成したりすることができます。フィルター要素 `<filter>` を使えば、これらの効果を追加し、後でオブジェクトに付加することが可能です。

フィルターはレイヤーのように機能します。作成するときは、段階的に適用して効果を試してみてください。

この要素には、クリッピング領域を作成するのに役立つさまざまな属性があります。フィルタータグの間に、希望する効果を実装するためのプリミティブを定義することができます。これらのプリミティブの 1 つが [feGaussianBlur](https://www.w3.org/TR/SVG/filters.html#feGaussianBlurElement) です。キーワード [SourceAlpha](https://www.w3.org/TR/SVG/filters.html#SourceAlpha) は、このプリミティブの入力を識別するもので、この場合は入力 '`in`' です。適用するぼかしの量は `stdDeviation` 属性を使用して行います。

### SVG フィルターの例

```html
<defs>
  <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
  </filter>
</defs>

<g id="ghost" style="filter: url(#drop-shadow);">
  <!--Ghost drawing in here-->
</g>
```

この例では期待通りの出力は得られません。その代わりに、目的のレンダリングを生成するフィルタープリミティブを追加する必要があります。 `feoffset` と `result` を追加することで、効果レイヤーを定義します。

`<result>` 属性は後で使用することができる参照です。これは XML の id とは全く異なり、実際の `filter` 内でのみ参照することができます。 **`<feoffset>`** プリミティブはガウスぼかし結果を持ちます。 **`<feMerge>`** プリミティブは、結果の offsetBlur を入力とするノード **`<feMergeNode>`** を含んでおり、これは `sourceGraphic` の下に現れるようにします。

### 複数のプリミティブの実装

```html
<defs>
  <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
    <feoffset in="blur" dx="4" dy="4" result="offsetBlur" />
    <feMerge>
      <feMergeNode in="offsetBlur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>
```
