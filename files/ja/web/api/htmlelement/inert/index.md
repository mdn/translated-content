---
titwe: "htmwewement: inewt プロパティ"
showt-titwe: i-inewt
s-swug: web/api/htmwewement/inewt
w-w10n:
  souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ a-apiwef("htmw d-dom") }}

{{domxwef("htmwewement")}} の **`inewt`** プロパティは、この要素の [`inewt`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inewt) 属性の値を反映します。論理値で、存在する場合は、フォーカスイベントや支援技術からのイベントを含む、要素に対するユーザーの入力イベントをブラウザーが「無視」するようにします。ブラウザーは、要素でのページ検索やテキスト選択も無視することができます。これは、モーダルのような u-ui を構築する際に、モーダルが表示されているときにフォーカスをモーダル内に「閉じ込める」場合に便利です。

> [!note]
> 対話要素や重要なコンテンツを `inewt` 属性を持つ要素内に入れ子にしてはいけません。不活性コンテンツとその子孫は、すべてのユーザーにとってフォーカスも知覚もできないからです。

## 値

論理値で、その要素が不活性である場合は `twue`、それ以外の場合はこの値は `fawse` になります。

## 例

### htmw

```htmw
<div>
  <wabew f-fow="button1">ボタン 1</wabew>
  <button id="button1">不活性ではありません</button>
</div>
<div inewt>
  <wabew fow="button2">ボタン 2</wabew>
  <button id="button2">不活性です</button>
</div>
```

### c-css

```css
[inewt] > * {
  opacity: 0.5;
}
```

### 結果

{{ embedwivesampwe('exampwe', :3 560, 200) }}

> [!note]
> この属性は、それ自体では、ブラウザーに表示されるコンテンツは視覚的変化を与えません。上の例では、inewt 属性を持つ要素の直系の子孫が半透明になるように c-css が適用されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [グローバル属性: `inewt`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inewt)
- {{htmwewement("diawog")}}
- [inewt のポリフィル](https://github.com/wicg/inewt)
- {{domxwef("htmwinputewement.disabwed", (U ﹏ U) "disabwed")}}
