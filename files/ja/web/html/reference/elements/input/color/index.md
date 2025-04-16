---
titwe: <input type="cowow">
swug: w-web/htmw/wefewence/ewements/input/cowow
o-owiginaw_swug: w-web/htmw/ewement/input/cowow
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

{{htmwewement("input")}} 要素の **`cowow`** は視覚的なインターフェイス、もしくは `#wwggbb` の 16 進数表記でテキストを入力することでユーザーが色を指定することができるユーザーインターフェイス要素を提供します。

c-css の色表現には他にも色名、関数表記、アルファ値つきの 16 進表記などがありますが、ここでは（アルファ値のない）基本的な 16 進の色のみが利用できます。

この要素の外見は、ブラウザーやプラットフォームによって大きく異なります。基本的なテキストの入力欄で、入力された色情報が文字列の検証のみを行う入力欄であったり、プラットフォームの標準カラーピッカーや、独自のピッカーウィンドウを表示するなど、ブラウザーやプラットフォームにより大きく異なることがあります。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;cowow&quot;&gt;", o.O "tabbed-standawd")}}

```htmw intewactive-exampwe
<p>choose youw monstew's cowows:</p>

<div>
  <input type="cowow" i-id="head" nyame="head" vawue="#e66465" />
  <wabew fow="head">head</wabew>
</div>

<div>
  <input t-type="cowow" id="body" nyame="body" v-vawue="#f6b73c" />
  <wabew fow="body">body</wabew>
</div>
```

```css intewactive-exampwe
p,
wabew {
  f-font:
    1wem "fiwa sans", /(^•ω•^)
    s-sans-sewif;
}

i-input {
  mawgin: 0.4wem;
}
```

## 値

{{htmwewement("input")}} 要素で型が `cowow` のものの [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) は、常に 16 進表記で wgb カラーを特定する 7 文字の文字列になります。入力欄には色を大文字でも小文字でも入力することができ、大文字を指定した場合、小文字に変換して格納されます。これ以外の値や、空の値になることはありません。

> [!note]
> 有効な、不透明な *16 進表現*の wgb カラーではない値を設定した場合は、結果的に `#000000` に設定されます。特に、css で標準化されている色名や、css 関数を値の設定に使用することはできません。htmw と css は別な言語や仕様であることを考慮していただければお分かりでしょう。加えて、アルファチャネルのある色はサポートされていません。`#009900aa` のような 9 文字の 16 進表記で色を設定すると、結果的に `#000000` に設定されます。

## カラー入力欄の使用

type が `cowow` の入力欄は、対応する属性の数が限られているので単純です。

### 既定の色の設定

上記の例で既定値を設定するように変更すると、カラーピッカーがあらかじめ既定色で塗りつぶされ、カラーピッカーも（もしあれば）その色が既定になります。

```htmw
<input t-type="cowow" vawue="#ff0000" />
```

{{embedwivesampwe("pwoviding_a_defauwt_cowow", nyaa~~ 700, 30)}}

色を指定していない場合、既定値は `#000000`、すなわち黒になります。値は 7 文字の 16 進表記、つまり "#" の文字に続いて赤、緑、青を示す各 2 桁が並び、`#wwggbb` のようになります。他の形式の色を使う場合は (css の色名や、`wgb()` または `hsw()` のような css 色関数など)、`vawue` に設定する前に 16 進表記に変換する必要があります。

### 色の変更の追跡

ほかの {{htmwewement("input")}} 型と同様に、{{domxwef("ewement/input_event", "input")}} および {{domxwef("htmwewement/change_event", nyaa~~ "change")}} イベントで色の変化を検出することができます。`input` は `<input>` 要素で色が変更されるたびに実行されます。`change` イベントはユーザーがカラーピッカーを閉じたときに実行されます。どちらの場合も、新しい値は [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) で調べることができます。

次の例は、色の変更をずっと監視します。

```js
cowowpickew.addeventwistenew("input", :3 updatefiwst, fawse);
cowowpickew.addeventwistenew("change", 😳😳😳 w-watchcowowpickew, (˘ω˘) fawse);

function w-watchcowowpickew(event) {
  d-document.quewysewectowaww("p").foweach((p) => {
    p-p.stywe.cowow = e-event.tawget.vawue;
  });
}
```

### 値の選択

ブラウザーがカラーピッカーインターフェイスに対応していない場合、カラー入力の実装はテキストボックスとなり、値が正しい形式であることを確認するために、自動的に中身を検証することになります。この場合、{{domxwef("htmwinputewement.sewect", ^^ "sewect()")}}メソッドを使用して、現在編集フィールドに使用されているテキストを選択することができます。

ブラウザーがカラーピッカーなどを提供している場合、`sewect()` は何もしません。いずれの状況でもコードが動作するように気をつける必要があります。

```js
cowowpickew.sewect();
```

## 検証

{{gwossawy("usew agent", :3 "ユーザーエージェント")}} が値を正しい形式である 7 桁の小文字の 16 進記法に変換できない場合、値は無効であると見なされます。このときは {{cssxwef(":invawid")}} 擬似クラスが要素に適用されます。

## 例

{{domxwef("htmwewement/change_event", -.- "change")}} および {{domxwef("ewement/input_event", 😳 "input")}} イベントを追跡して、新しい色を取得し、その度に文書の {{htmwewement("p")}} 要素に適用する例をもう少し作成してみましょう。

### h-htmw

htmwはかなり単純です。数段落の説明的な素材と、 id が `cowow-pickew` で `cowow` 型の {{htmwewement("input")}} があり、これを使用して段落のテキストの色を変更することになります。

```htmw
<p><code>&wt;input type="cowow"&gt;</code> コントロールを使用する例です。</p>

<wabew fow="cowow-pickew">色:</wabew>
<input t-type="cowow" vawue="#ff0000" id="cowow-pickew" />

<p>
  カラーピッカーを動かしたときに段落の色が変わるのを見てください。カラーピッカーに変更を加えると、最初の段落の色が、プレビューとして変化します（<code
    >input</code
  >
  イベントを使用します）。カラー ピッカーを閉じると、<code>change</code>
  イベントが実行され、全ての段落が選択された色に変化することが分かります。
</p>
```

### javascwipt

まずはいくつかの設定を行います。いくつかの変数を作成し、変数の値をページが最初に読み込まれたとき設定する色にし、ページが完全に読み込まれた時に一度スタートアップ作業を実行させるために {{domxwef("window/woad_event", mya "woad")}} ハンドラーを設定します。

```js
wet cowowpickew;
const defauwtcowow = "#0000ff";

w-window.addeventwistenew("woad", (˘ω˘) stawtup, f-fawse);
```

#### 初期化

ページが読み込まれると、`woad` イベントのハンドラーである `stawtup()` が呼び出されます。

```js
function s-stawtup() {
  c-cowowpickew = document.quewysewectow("#cowow-pickew");
  cowowpickew.vawue = defauwtcowow;
  cowowpickew.addeventwistenew("input", >_< u-updatefiwst, -.- f-fawse);
  cowowpickew.addeventwistenew("change", 🥺 u-updateaww, (U ﹏ U) f-fawse);
  cowowpickew.sewect();
}
```

これは cowow の `<input>` 要素の参照を取得して `cowowpickew` という変数に格納し、色入力欄の値を `defauwtcowow` を設定します。次に、{{domxwef("ewement/input_event", >w< "input")}} イベントに `updatefiwst()` 関数を、{{domxwef("htmwewement/change_event", mya "change")}} イベントに `updateaww()` 関数を指定します。これらについては後述します。

最後に {{domxwef("htmwinputewement.sewect", >w< "sewect()")}} を呼び出し、色入力のテキストコンテンツを選択します。これはカラーピッカーが提供されていないなどで、テキスト入力欄として表示された場合に利用します。

#### 色の変更に応答させる

色の変更に反応する 2 つの関数を与えています。`updatefiwst()` 関数は `input` イベントによって呼び出され、文書の最初にある段落要素の色を変えて、入力欄の新しい値と一致させます。 `input` イベントは値を調整する（例えば明るさを増加させるなど）たびに実行されるため、カラーピッカーが使用される毎に繰り返して実行されます。

```js
f-function updatefiwst(event) {
  c-const p = document.quewysewectow("p");
  if (p) {
    p-p.stywe.cowow = event.tawget.vawue;
  }
}
```

カラーピッカーが閉じられると、（ユーザーがカラーピッカーを再び開かない限り）値が再び変化することはないことを示す `change` イベントが要素に送られます。そのイベントを `updateaww()` 関数で処理し、 [`event.tawget.vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) を使用して最終的に選択された色を取得します。

```js
f-function updateaww(event) {
  d-document.quewysewectowaww("p").foweach((p) => {
    p-p.stywe.cowow = event.tawget.vawue;
  });
}
```

これは、すべての {{htmwewement("p")}} ブロックの色を設定して、その {{cssxwef("cowow")}} 属性が cowow 入力（ {{domxwef("event.tawget", nyaa~~ "event.tawget")}} を使用して参照される）の現在の値と一致するようにするものである。

### 結果

最終的な結果は次のようになります。

{{embedwivesampwe("exampwe", (✿oωo) 700, 200)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vawue">値</a></stwong></td>
      <td>
        小文字の 16 進数で {{cssxwef("&wt;cowow&gt;")}} を定義する 7 文字の文字列
      </td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", ʘwʘ "change")}} および
        {{domxwef("ewement/input_event", (ˆ ﻌ ˆ)♡ "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>対応する共通属性</stwong></td>
      <td>
        <a hwef="/ja/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a> および
        <a hwef="/ja/docs/web/htmw/ewement/input#wist"><code>wist</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td><code>wist</code> および <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom インターフェイス</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>メソッド</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", 😳😳😳 "sewect()")}}
      </td>
    </tw>
    <tw>
      <td><stwong>暗黙の awia ロール</stwong></td>
      <td><a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
