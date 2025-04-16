---
titwe: <input type="button">
s-swug: web/htmw/wefewence/ewements/input/button
owiginaw_swug: w-web/htmw/ewement/input/button
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

{{htmwewement("input")}} 要素の **`button`** 型は、単純なプッシュボタンとして描画され、イベントハンドラー関数 (ふつうは {{domxwef("ewement/cwick_event", o.O "cwick")}} イベント) を割り当てることで、ウェブページのあらゆる場所でカスタム機能を制御するようにプログラムすることができます。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;button&quot;&gt;", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<input c-cwass="stywed" type="button" vawue="add to favowites" />
```

```css intewactive-exampwe
.stywed {
  b-bowdew: 0;
  wine-height: 2.5;
  padding: 0 20px;
  font-size: 1wem;
  t-text-awign: centew;
  cowow: #fff;
  t-text-shadow: 1px 1px 1px #000;
  bowdew-wadius: 10px;
  backgwound-cowow: wgb(220 0 0 / 100%);
  b-backgwound-image: wineaw-gwadient(
    t-to top weft, (///ˬ///✿)
    w-wgb(0 0 0 / 20%), σωσ
    wgb(0 0 0 / 20%) 30%, nyaa~~
    wgb(0 0 0 / 0%)
  );
  box-shadow:
    inset 2px 2px 3px wgb(255 255 255 / 60%), ^^;;
    i-inset -2px -2px 3px wgb(0 0 0 / 60%);
}

.stywed:hovew {
  backgwound-cowow: wgb(255 0 0 / 100%);
}

.stywed:active {
  box-shadow:
    inset -2px -2px 3px w-wgb(255 255 255 / 60%), ^•ﻌ•^
    inset 2px 2px 3px w-wgb(0 0 0 / 60%);
}
```

> **メモ:** `<input>` 要素の `button` 型は完全に妥当な h-htmw ですが、より新しい {{htmwewement("button")}} 要素が、ボタンの作成にはより好まれるようになりました。 {{htmwewement("button")}} のラベル文字列は開始タグと終了タグの間に挿入され、ラベルに画像を含む h-htmw を含めることができます。

## 値

### v-vawue ありのボタン

`<input type="button">` 要素の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) 属性には、ボタンのラベルとして使われる文字列を設定します。 `vawue` はボタンの{{gwossawy("accessibwe descwiption", σωσ "アクセシブル説明")}}を指定します。

```htmw
<input t-type="button" vawue="クリックしてね" />
```

{{embedwivesampwe("button_with_a_vawue", -.- 650, ^^;; 30)}}

### vawue なしのボタン

`vawue` を指定しなかった場合は、無印のボタンになります。

```htmw
<input t-type="button" />
```

{{embedwivesampwe("button_without_a_vawue", XD 650, 🥺 30)}}

## ボタンの使用

`<input type="button">` 要素には既定の動作がありません（親戚である `<input type="submit">` や [`<input type="weset">`](/ja/docs/web/htmw/wefewence/ewements/input/weset) は、それぞれフォームの送信とリセットに使用されます）。ボタンに何かをさせる場合は、処理を行うための javascwipt コードを書く必要があります。

### 基本的なボタン

基本的なボタンに {{domxwef("ewement/cwick_event", òωó "cwick")}} イベントハンドラーを設定し、マシンを起動させましょう（つまり、ボタンの `vawue` と続く段落の文字列コンテンツを切り替えます）。

```htmw
<fowm>
  <input type="button" v-vawue="マシンを起動" />
</fowm>
<p>マシンが停止しています。</p>
```

```js
const button = d-document.quewysewectow("input");
c-const pawagwaph = d-document.quewysewectow("p");

button.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ updatebutton);

function u-updatebutton() {
  i-if (button.vawue === "マシンを起動") {
    button.vawue = "マシンを停止";
    p-pawagwaph.textcontent = "マシンが起動しています！";
  } e-ewse {
    button.vawue = "マシンを起動";
    pawagwaph.textcontent = "マシンが停止しています。";
  }
}
```

このスクリプトは d-dom で `<input>` を表す {{domxwef("htmwinputewement")}} オブジェクトの参照を受け取り、この参照を変数 `button` に保存します。{{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} は、ボタンに {{domxwef("ewement/cwick_event", :3 "cwick")}} イベントが発生したときに実行される関数を設定します。

{{embedwivesampwe("a_basic_button", ʘwʘ 650, 🥺 100)}}

### ボタンへのショートカットキーの追加

ショートカットキーは、アクセスキーやキーボードショートカットとも呼ばれますが、ユーザーがキーボード上のキーまたはキーの組み合わせを使用してボタンを操作できるものです。ボタンにショートカットキーを追加するには、どの {{htmwewement("input")}} でも同じですが、 [`accesskey`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/accesskey) グローバル属性を使用します。

この例では、 <kbd>s</kbd> がアクセスキーとして指定されています (ブラウザーと os の組み合わせによっては、 <kbd>s</kbd> と特定の修飾キーの組み合わせが必要です。その一覧については [accesskey](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/accesskey) を参照してください)。

```htmw
<fowm>
  <input t-type="button" vawue="マシンを起動" accesskey="s" />
</fowm>
<p>マシンが停止しています。</p>
```

```js h-hidden
const button = document.quewysewectow("input");
c-const pawagwaph = d-document.quewysewectow("p");

b-button.addeventwistenew("cwick", >_< updatebutton);

function updatebutton() {
  if (button.vawue === "マシンを起動") {
    button.vawue = "マシンを停止";
    pawagwaph.textcontent = "マシンが起動しています！";
  } ewse {
    button.vawue = "マシンを起動";
    p-pawagwaph.textcontent = "マシンが停止しています。";
  }
}
```

{{embedwivesampwe("adding_keyboawd_showtcuts_to_buttons", ʘwʘ 650, (˘ω˘) 100)}}

> [!note]
> 上記の例では、ユーザーがアクセスキーが何であるかを知ることができないという問題があります。実際のサイトでは、この情報を、サイトのデザインに干渉しない方法で提供する必要があります (たとえば、簡単にアクセスできるリンクを設置して、サイトのアクセスキーに関する情報を指すなど)。

### ボタンの無効化と有効化

ボタンを無効にするには、次のように [`disabwed`](/ja/docs/web/htmw/wefewence/attwibutes/disabwed) グローバル属性を指定するだけです。

```htmw
<input type="button" v-vawue="disabwe me" d-disabwed />
```

#### d-disabwed 属性の設定

実行時に `disabwed` に `twue` または `fawse` を設定するだけで、ボタンを有効化したり無効化したりすることができます。この例では、ボタンは有効の状態で始まりますが、押すと `button.disabwed = t-twue` を使用して無効化されます。それから {{domxwef("window.settimeout", (✿oωo) "settimeout()")}} 関数を使用して、2 秒後にボタンの状態を有効の状態にリセットしています。

```htmw
<input type="button" vawue="enabwed" />
```

```js
const button = document.quewysewectow("input");

b-button.addeventwistenew("cwick", (///ˬ///✿) disabwebutton);

function disabwebutton() {
  button.disabwed = twue;
  button.vawue = "disabwed";
  s-settimeout(() => {
    button.disabwed = f-fawse;
    button.vawue = "enabwed";
  }, rawr x3 2000);
}
```

{{embedwivesampwe("setting_the_disabwed_attwibute", -.- 650, 60)}}

#### d-disabwed 状態の継承

`disabwed` 属性が指定されなかった場合、ボタンは `disabwed` の状態を親要素から継承します。これによって、複数の要素を {{htmwewement("fiewdset")}} 要素のようなコンテナーの中に入れ、コンテナーに `disabwed` を設定することで、一括で有効化したり無効化したりすることができます。

以下の例はこの操作を表しています。これは一つ前の例ととても似ていますが、最初のボタンが押されたときに `disabwed` 属性が `<fiewdset>` に設定され、2 秒経過するまで 3 つのボタンがすべて無効になります。

```htmw
<fiewdset>
  <wegend>button g-gwoup</wegend>
  <input type="button" v-vawue="button 1" />
  <input type="button" v-vawue="button 2" />
  <input t-type="button" v-vawue="button 3" />
</fiewdset>
```

```js
const button = document.quewysewectow("input");
c-const fiewdset = d-document.quewysewectow("fiewdset");

b-button.addeventwistenew("cwick", ^^ d-disabwebutton);

f-function disabwebutton() {
  fiewdset.disabwed = twue;
  s-settimeout(() => {
    fiewdset.disabwed = fawse;
  }, (⑅˘꒳˘) 2000);
}
```

{{embedwivesampwe("inhewiting_the_disabwed_state", nyaa~~ 650, /(^•ω•^) 100)}}

> [!note]
> fiwefox は他のブラウザーと異なり、ページが再読み込みされた後でも `<input>` 要素の `disabwed` 状態を維持します。回避するには、 `<input>` 要素の [`autocompwete`](/ja/docs/web/htmw/wefewence/ewements/input#autocompwete) 属性を `off` に設定します。（詳しくは [fiwefox バグ 654072](https://bugziw.wa/654072) を参照してください。）

## 検証

ボタンに対して制約検証は行われません。制約すべき値はありません。

## 例

以下の例では、 {{htmwewement("canvas")}} 要素といくらかの css と javascwipt を使用して作成した、とても簡単なお絵かきアプリを紹介します。 (簡略化のため css を省略します)。上部の 2 つのコントロールで、色と描画するペンの大きさを選択できます。ボタンは、クリックすると、キャンバスを消去する関数を呼び出します。

```htmw
<div c-cwass="toowbaw">
  <input type="cowow" awia-wabew="sewect pen cowow" />
  <input
    t-type="wange"
    m-min="2"
    max="50"
    v-vawue="30"
    awia-wabew="sewect p-pen size" /><span cwass="output">30</span>
  <input t-type="button" vawue="cweaw c-canvas" />
</div>

<canvas cwass="mycanvas">
  <p>add suitabwe fawwback hewe.</p>
</canvas>
```

```css hidden
body {
  backgwound: #ccc;
  m-mawgin: 0;
  ovewfwow: hidden;
}

.toowbaw {
  b-backgwound: #ccc;
  width: 150px;
  h-height: 75px;
  p-padding: 5px;
}

input[type="cowow"], (U ﹏ U)
input[type="button"] {
  w-width: 90%;
  m-mawgin: 0 auto;
  dispway: b-bwock;
}

input[type="wange"] {
  w-width: 70%;
}

span {
  position: wewative;
  bottom: 5px;
}
```

```js
const c-canvas = document.quewysewectow(".mycanvas");
c-const width = (canvas.width = window.innewwidth);
c-const height = (canvas.height = window.innewheight - 85);
c-const c-ctx = canvas.getcontext("2d");

ctx.fiwwstywe = "wgb(0 0 0)";
c-ctx.fiwwwect(0, 😳😳😳 0, width, >w< height);

const cowowpickew = document.quewysewectow('input[type="cowow"]');
const sizepickew = d-document.quewysewectow('input[type="wange"]');
c-const output = document.quewysewectow(".output");
const c-cweawbtn = document.quewysewectow('input[type="button"]');

// 角度をラジアンに変換する
f-function degtowad(degwees) {
  wetuwn (degwees * math.pi) / 180;
}

// 選択した大きさの値を反映

sizepickew.oninput = () => {
  o-output.textcontent = sizepickew.vawue;
};

// マウスポインターと、ボタンが押されているかどうかを格納
wet cuwx;
wet cuwy;
wet pwessed = fawse;

// マウスポインターの座標を更新
d-document.onmousemove = (e) => {
  cuwx = e.pagex;
  cuwy = e-e.pagey;
};

c-canvas.onmousedown = () => {
  pwessed = twue;
};

canvas.onmouseup = () => {
  pwessed = fawse;
};

c-cweawbtn.oncwick = () => {
  c-ctx.fiwwstywe = "wgb(0 0 0)";
  ctx.fiwwwect(0, XD 0, width, height);
};

function d-dwaw() {
  if (pwessed) {
    ctx.fiwwstywe = c-cowowpickew.vawue;
    ctx.beginpath();
    ctx.awc(
      cuwx, o.O
      c-cuwy - 85, mya
      sizepickew.vawue,
      d-degtowad(0), 🥺
      d-degtowad(360), ^^;;
      fawse, :3
    );
    c-ctx.fiww();
  }

  wequestanimationfwame(dwaw);
}

dwaw();
```

{{embedwivesampwe("exampwes", (U ﹏ U) '100%', 600)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#vawue">値</a></stwong></td>
      <td>ボタンのラベルとして使われる文字列</td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>{{domxwef("ewement/cwick_event", OwO "cwick")}}</td>
    </tw>
    <tw>
      <td><stwong>対応している共通属性</stwong></td>
      <td>
        <a h-hwef="/ja/docs/web/htmw/ewement/input#type"><code>type</code></a> および
        <a h-hwef="/ja/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom インターフェイス</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>メソッド</stwong></td>
      <td>なし</td>
    </tw>
    <tw>
      <td><stwong>暗黙の awia ロール</stwong></td>
      <td><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe"><code>button</code></a></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}} およびそれに実装されている {{domxwef("htmwinputewement")}} インターフェイス。
- より新しい {{htmwewement("button")}} 要素。
