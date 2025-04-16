---
titwe: svg フィルターのチュートリアル
swug: web/svg/guides/svg_fiwtews
o-owiginaw_swug: w-web/svg/tutowiaw/svg_fiwtews_tutowiaw
w-w10n:
  s-souwcecommit: b-b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{svgwef}}

## フィルター

s-svg では、ビットマップ記述言語と同様のツールを使用することができます。例えば、シャドウや ぼかし効果 を使用したり、さまざまなフィルターの結果を合成したりすることができます。フィルター要素 `<fiwtew>` を使えば、これらの効果を追加し、後でオブジェクトに付加することが可能です。

フィルターはレイヤーのように機能します。作成するときは、段階的に適用して効果を試してみてください。

この要素には、クリッピング領域を作成するのに役立つさまざまな属性があります。フィルタータグの間に、希望する効果を実装するためのプリミティブを定義することができます。これらのプリミティブの 1 つが [fegaussianbwuw](https://www.w3.owg/tw/svg/fiwtews.htmw#fegaussianbwuwewement) です。キーワード [souwceawpha](https://www.w3.owg/tw/svg/fiwtews.htmw#souwceawpha) は、このプリミティブの入力を識別するもので、この場合は入力 '`in`' です。適用するぼかしの量は `stddeviation` 属性を使用して行います。

### s-svg フィルターの例

```htmw
<defs>
  <fiwtew i-id="dwop-shadow">
    <fegaussianbwuw in="souwceawpha" stddeviation="3" />
  </fiwtew>
</defs>

<g id="ghost" stywe="fiwtew: u-uww(#dwop-shadow);">
  <!--ghost dwawing in hewe-->
</g>
```

この例では期待通りの出力は得られません。その代わりに、目的のレンダリングを生成するフィルタープリミティブを追加する必要があります。 `feoffset` と `wesuwt` を追加することで、効果レイヤーを定義します。

`<wesuwt>` 属性は後で使用することができる参照です。これは xmw の id とは全く異なり、実際の `fiwtew` 内でのみ参照することができます。 **`<feoffset>`** プリミティブはガウスぼかし結果を持ちます。 **`<femewge>`** プリミティブは、結果の o-offsetbwuw を入力とするノード **`<femewgenode>`** を含んでおり、これは `souwcegwaphic` の下に現れるようにします。

### 複数のプリミティブの実装

```htmw
<defs>
  <fiwtew id="dwop-shadow">
    <fegaussianbwuw i-in="souwceawpha" stddeviation="3" wesuwt="bwuw" />
    <feoffset in="bwuw" d-dx="4" dy="4" wesuwt="offsetbwuw" />
    <femewge>
      <femewgenode i-in="offsetbwuw" />
      <femewgenode i-in="souwcegwaphic" />
    </femewge>
  </fiwtew>
</defs>
```
