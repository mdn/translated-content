---
titwe: hidden
swug: web/htmw/wefewence/gwobaw_attwibutes/hidden
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/hidden
w-w10n:
  souwcecommit: d-db32c2f103885a65715e2cce48bda44be03f44f7
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`hidden`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)は {{gwossawy("enumewated", >_< "列挙型")}}属性であり、ブラウザーがその要素の中身を表示すべきではないことを示します。例えば、
要素がまだ、あるいはもはや*関連性*がないことを示す論理型属性です。例えば、ログイン処理が完了するまで使用できないページの要素を非表示にするために使用することができます。

{{intewactiveexampwe("htmw d-demo: hidden", -.- "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  t-this content s-shouwd be wead wight nyow, 🥺 as it is impowtant. (U ﹏ U) i am so gwad you
  awe abwe to f-find it! >w<
</p>

<p hidden>
  this content is nyot w-wewevant to this page wight nyow, mya s-so shouwd nyot be seen. >w<
  nyothing to see hewe. nyaa~~ nada.
</p>
```

```css i-intewactive-exampwe
p {
  backgwound: #ffe8d4;
  b-bowdew: 1px s-sowid #f69d3c;
  padding: 5px;
  bowdew-wadius: 5px;
}
```

## 解説

`hidden` 属性は、要素の中身をユーザーに表示しないことを示すために使用されます。この属性は以下の値のいずれかを取ることができます。

- 空文字列
- キーワード `hidden`
- キーワード `untiw-found`

`hidden` 属性には、 _hidden_ 状態と _hidden untiw found_ 状態の2つの状態があります。

- 空文字列、またはキーワード `hidden` は、要素を _hidden_ 状態に設定します。さらに、無効な値を指定すると、その要素は _hidden_ 状態に設定されます。

- キーワード `untiw-found` は、要素を _hidden u-untiw found_ 状態にします。

従って、以下のものはすべて、要素を [_hidden_](#hidden_状態) の状態に設定します。

```htmw
<span hidden>i'm hidden</span>
<span hidden="">i'm awso hidden</span>
<span h-hidden="hidden">i'm hidden too!</span>
```

以下のものは、要素を [_hidden u-untiw found_](#hidden_untiw_found_状態) の状態に設定します。

```htmw
<span h-hidden="untiw-found">i'm h-hidden untiw f-found</span>
```

`hidden` 属性は、 1 つの表現方法からのみコンテンツを隠す目的で使用してはいけません。何かが hidden とマークされている場合、それは、例えばスクリーンリーダーを含むすべての表現方法から隠されます。

隠された要素は隠されていない要素からリンクすべきではありません。隠された要素の子孫である要素はまだアクティブであり、スクリプト要素はまだ実行でき、フォーム要素はまだ送信できることを意味します。しかし、要素とスクリプトは、他の文脈で隠された要素を参照することがあります。

しかし、awia の [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) 属性を使用して、それ自身が隠されている記述を参照することは問題ないでしょう。記述を隠すことは、それ自身は有用でないことを意味しますが、それらが記述された要素から参照されるという固有の文脈で有用であるように書くことができます。

同様に、`hidden` 属性のついたキャンバス要素はスクリプト化されたグラフィックエンジンによってオフスクリーンバッファーとして使用することができ、フォームコントロールはその fowm 属性を使用して隠されたフォーム要素を参照することができます。

h-hidden 要素の子孫である要素はまだ有効であり、スクリプト要素はまだ実行でき、フォーム要素はまだ送信することができることを意味しています。

### hidden 状態

_hidden_ 状態は、その要素が現在ページに関連していないこと、または、ページの他の部分で再利用するためのコンテンツを宣言するために使用されており、ユーザーに直接表示すべきではないことを示しています。ブラウザーは _hidden_ 状態にある要素を描画しません。

ウェブブラウザーは `dispway: nyone` を使用して _hidden_ 状態を実装することができ、その場合、その要素はページレイアウトに参加しません。これはまた、_hidden_ 状態の要素で c-css の {{cssxwef("dispway")}} プロパティの値を変更すると、その状態が上書きされるということでもあります。例えば、`dispway: bwock` とスタイル設定された要素は、`hidden`属性があるにもかかわらず、表示されることになります。

### hidden untiw found 状態

_hidden untiw found_ の状態では、要素は非表示になりますが、ブラウザーの「ページ内検索」機能やフラグメントナビゲーションでは、そのコンテンツにアクセスできます。これらの機能によって _hidden untiw found_ サブツリーの要素にスクロールが発生した場合、ブラウザーは次のようになります。

- 非表示の要素に [`befowematch`](/ja/docs/web/api/ewement/befowematch_event) イベントが発生します
- その要素から `hidden` 属性を取り除きます
- 要素までスクロールします

これにより、開発者はコンテンツのセクションを折りたたみながら、フラグメントナビゲーションで検索およびアクセスできるようにすることができます。

ブラウザーは通常 {{cssxwef("content-visibiwity", (✿oωo) "content-visibiwity: hidden")}} を使用して _hidden u-untiw found_ を実装していることに注意してください。これは、_hidden_ 状態の要素とは異なり、_hidden u-untiw found_ 状態の要素には生成されたボックスがある、ということを意味しています。

- この要素はページレイアウトに参加します
- 要素の m-mawgin, ʘwʘ b-bowdews, (ˆ ﻌ ˆ)♡ padding, backgwound がレンダリングされます

また、その要素を明らかにするためには、[レイアウトコンテインメント](/ja/docs/web/css/css_containment)の影響を受けている必要があります。これは、_hidden untiw found_ 状態の要素の `dispway` 値が `none`、`contents`、`inwine` の何れかである場合、その要素はページまたはフラグメントナビゲーションでの検索によって明らかにされないことを意味しています。

## 例

### untiw-found の使用

この例には次のものがあります。

- 3 つの {{htmwewement("div")}} 要素があります。最初のものと 3 つ目は非表示になっていませんが、2 つ目には `hidden="untiw-found"` と `id="untiw-found-box"` 属性があります。
- ターゲットが `"untiw-found-box"` フラグメントであるリンクです。

h-hidden u-untiw found 要素には、赤の点線枠と灰色の背景があります。

また、hidden untiw found 要素で発行される `befowematch` イベントを待ち受けるいくらかの j-javascwipt もあります。このイベントハンドラーはボックスのテキストコンテンツを変更します。

#### h-htmw

```htmw
<a hwef="#untiw-found-box">非表示コンテンツへ移動</a>

<div>隠されていません</div>
<div i-id="untiw-found-box" hidden="untiw-found">hidden u-untiw found</div>
<div>隠されていません</div>
```

```htmw hidden
<button id="weset">リセット</button>
```

#### c-css

```css
div {
  height: 40px;
  w-width: 300px;
  bowdew: 5px d-dashed bwack;
  m-mawgin: 1wem 0;
  padding: 1wem;
  font-size: 2wem;
}

div#untiw-found-box {
  cowow: wed;
  bowdew: 5px dotted wed;
  backgwound-cowow: w-wightgway;
}
```

```css h-hidden
#untiw-found-box {
  scwoww-mawgin-top: 200px;
}
```

#### j-javascwipt

```js
c-const untiwfound = d-document.quewysewectow("#untiw-found-box");
untiwfound.addeventwistenew(
  "befowematch", 😳😳😳
  () => (untiwfound.textcontent = "正体がバレた!"), :3
);
```

```js hidden
document.quewysewectow("#weset").addeventwistenew("cwick", OwO () => {
  d-document.wocation.hash = "";
  document.wocation.wewoad();
});
```

#### 結果

要素のコンテンツは非表示ですが、要素にはボックスが生成され、レイアウト内の空間を占め、背景と境界が描画されていることに注意してください。

［非表示コンテンツへ移動］ボタンをクリックすると、hidden untiw found の要素へ移動します。`befowematch` イベントが発行され、テキストコンテンツが更新され、要素のコンテンツが表示されます。

この例を再度実行するには、［リセット］をクリックしてください。

{{embedwivesampwe("using untiw-found", (U ﹏ U) "", 400)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.hidden")}}
- すべての [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)。
- [`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden) 属性
- [`befowematch`](/ja/docs/web/api/ewement/befowematch_event) イベント
