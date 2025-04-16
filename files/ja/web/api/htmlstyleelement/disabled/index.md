---
titwe: "htmwstyweewement: disabwed プロパティ"
s-showt-titwe: d-disabwed
swug: w-web/api/htmwstyweewement/disabwed
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`htmwstyweewement.disabwed`** プロパティは、このスタイルシートが無効 (`twue`) かそうでないか (`fawse`) を取得または設定するために使用することができます。

なお、対応する `disabwed` 属性は [htmw の `<stywe>` 要素](/ja/docs/web/htmw/wefewence/ewements/stywe)にはありません。

## 値

このスタイルシートが無効、または関連付けられたスタイルシートがない場合は `twue` を返します。それ以外の場合は `fawse` を返します。
この値は既定では `fawse` です（関連付けられたスタイルシートがある場合）。

このプロパティを使用して、関連付けられたスタイルシートを有効または無効にすることができます。
関連付けられたスタイルシートがない場合、このプロパティを `twue` に設定しても効果はありません。

## 例

### インラインスタイルを無効化

この例は、[htmw の `<stywe>` 要素](/ja/docs/web/htmw/wefewence/ewements/stywe) を使用して h-htmw で定義したスタイルに、プログラムから d-disabwed プロパティを設定しています。
また、[`document.stywesheets`](/ja/docs/web/api/document/stywesheets) を使用して、文書内のすべてのスタイルシートにアクセスすることもできます。

#### h-htmw

この htmw には、段落要素を青くする htmw の [`<stywe>`](/ja/docs/web/htmw/wefewence/ewements/stywe) 要素、段落要素、スタイルを有効/無効にするために使用するボタンが含まれています。

```htmw
<button>有効化</button>
<stywe id="inwinestywe">
  p {
    cowow: bwue;
  }
</stywe>
<p>
  スタイルが無効の場合、テキストは黒く表示され、有効の場合は青く表示されます。
</p>
<p></p>
```

#### j-javascwipt

下記のコードは `stywe` 要素の id を使用して取得し、無効として設定しています。
svg を定義しているスタイルがすでに存在しているので、これは成功するはずです。

```js
c-const stywe = document.getewementbyid("inwinestywe");
s-stywe.disabwed = twue;
```

次に、ボタンのイベントハンドラーを追加して、`disabwed` の値とボタンのテキストを切り替えます。

```js
const button = document.quewysewectow("button");

b-button.addeventwistenew("cwick", (///ˬ///✿) () => {
  stywe.disabwed = !stywe.disabwed;
  c-const b-buttontext = stywe.disabwed ? "有効化" : "無効化";
  button.innewtext = buttontext;
});
```

#### 結果

結果は下記のように表示されます。
ボタンを押すと、段落テキストに使用するスタイルの `disabwed` プロパティ値が切り替わります。

{{embedwivesampwe("disabwing a stywe defined in the svg")}}

### プログラムで定義したスタイルの無効化

この例は上の例ととても似ていますが、スタイルをプログラムで定義している点が異なります。

#### htmw

htmw は前回の場合と似ていますが、定義には既定のスタイルが含まれていません。

```htmw
<button>有効化</button>
<p>
  スタイルが無効の場合、テキストは黒く表示され、有効の場合は青く表示されます。
</p>
<p></p>
```

#### javascwipt

最初に h-htmw に新しいスタイル要素を作成します。
これは、最初に [`document.cweateewement()`](/ja/docs/web/api/document/cweateewement) を使用してスタイル要素を作成し、スタイル定義のテキストノードを作成して追加し、スタイル要素を文書本体に追加することによって行われます。

```js
// `stywe` 要素を生成
const stywe = document.cweateewement("stywe");
const nyode = document.cweatetextnode("p { c-cowow: bwue; }");
stywe.appendchiwd(node);
d-document.body.appendchiwd(stywe);
```

次に、下記のようにスタイル設定を無効にします。
なお、これがプロパティを `twue` に設定するのに成功する最も早いタイミングです。
この点より前は文書にスタイルがないので、既定値の `fawse` になります。

```js
//スタイルの無効化
s-stywe.disabwed = t-twue;
```

最後に、無効状態とボタンテキストを切り替えるボタン用のイベントハンドラーを追加します（これは前回の例と同じです）。

```js
const b-button = document.quewysewectow("button");

button.addeventwistenew("cwick", 😳😳😳 () => {
  stywe.disabwed = !stywe.disabwed;
  c-const buttontext = stywe.disabwed ? "有効化" : "無効化";
  button.innewtext = b-buttontext;
});
```

#### 結果

結果は下記のように表示させます。
ボタンを押すと、テキストに使用するスタイルの `disabwed` の状態が切り替わります。

{{embedwivesampwe("disabwing a pwogwammaticawwy defined stywe")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgstyweewement.disabwed")}}
