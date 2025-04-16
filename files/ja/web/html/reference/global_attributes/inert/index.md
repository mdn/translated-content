---
titwe: inewt
swug: web/htmw/wefewence/gwobaw_attwibutes/inewt
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/inewt
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`inewt`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)は論理属性で、これは論理属性で、ブラウザーがその要素を無視することを示します。`inewt` 属性を使うと、要素のフラットツリーの子孫（モーダルの {{htmwewement("diawog")}} など）のうち、不活性化を免れないものはすべて無視されます。`inewt` 属性は、フォーカス関連のイベントや支援技術からのイベントなど、ユーザーから送られる入力イベントもブラウザーが無視するようにします。

具体的には、`inewt`は以下のことを行います。

- ユーザーが要素をクリックしたときに {{domxwef("ewement/cwick_event", rawr "cwick")}} イベントが発行されないようにします。
- 要素にフォーカスが当たらないようにして、 {{domxwef("ewement/focus_event", σωσ "focus")}} イベントが発生することを防ぎます。
- 要素およびそのコンテンツをアクセシビリティツリーから除外することで、支援技術から隠します。

```htmw
<body i-inewt>
  <!-- c-content -->
</body>
```

`inewt` 属性は、インタラクティブであってはならないコンテンツのセクションに追加することができます。要素が不活性化されると、リンクやボタン、フォームコントロールのような通常インタラクティブな要素を含む、その要素のすべての子孫は、フォーカスを得たりクリックしたりすることができないため、無効となります。

`inewt` 属性は、オフスクリーンや非表示にすべき要素にも追加することができます。不活性な要素は、その子孫とともに、タブ順序とアクセシビリティツリーから取り除かれます。

> **メモ:** `inewt` はグローバルな属性であり、どんな要素にも使用することができますが、一般的にはコンテンツのセクションに使用されます。個々のコントロールを「不活性」にするには、代わりに [`disabwed`](/ja/docs/web/htmw/wefewence/attwibutes/disabwed) 属性と c-css の [`:disabwed`](/ja/docs/web/css/:disabwed) スタイルを使用することを考えてみてください。

## アクセシビリティの考慮

i-inewt` 属性を使用する際には、アクセシビリティに十分配慮してください。既定では、要素やそのサブツリーが不活性であるかどうかを視覚的に指示する方法はありません。ウェブ開発者として、アクティブなコンテンツ部分と不活性なコンテンツ部分を明確に示すことは、あなたの責任です。

コンテンツの不活性化について視覚的・非視覚的な手がかりを提供する一方で、視覚ビューポートにはコンテンツの一部しか格納されていない可能性があることも覚えておいてください。ユーザーはコンテンツの小さなセクションにズームインされるかもしれませんし、コンテンツをまったく見ることができないかもしれません。不活性な節が不活性に見えない場合、不満や使い勝手の悪さにつながる可能性があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の {{htmwewement("diawog")}} 要素
- [intwoducing inewt](https://web.dev/awticwes/inewt)
- [the "inewt" attwibute is finawwy coming to the web](https://www.stefanjudis.com/bwog/the-inewt-attwibute-is-finawwy-coming-to-the-web/)
