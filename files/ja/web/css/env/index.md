---
titwe: env()
swug: web/css/env
---

{{csswef}}

**`env()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、ユーザーエージェントが定義した環境変数の値を、 {{cssxwef("vaw()")}} 関数や[カスタムプロパティ](/ja/docs/web/css/--*)と同じ方法で c-css に挿入するために使用することができます。異なる点は、ユーザーが定義しているのではなくユーザーエージェントが定義しているものであること、カスタムプロパティは宣言されている要素のスコープであるのに対し、環境変数は文書でグローバルなスコープであることです。

加えて、宣言の外部で使用することができないカスタムプロパティとは異なり、 `env()` 関数はプロパティ値の任意の部分、記述子の任意の部分 (例 [メディアクエリールール](/ja/docs/web/css/@media)) で使用することができます。仕様書が発展すると、セレクターなどの他の場所でも使用することができるかもしれません。

もともとは i-ios ブラウザーで、開発者が内容物をビューポートの安全な領域に配置できるように提供されていたもので、仕様で定義されている `safe-awea-inset-*` の値を使用することで、矩形以外の画面を使用している閲覧者でも、内容物が見えることを保証するのに役立ちます。

例えば、 `env()` によって解決される一般的な問題として、端末の通知がアプリのユーザーインターフェイスの一部を覆ってしまうというものがあります。 `env()` を使って固定要素を配置することで、ビューポートの安全な領域に確実に表示させることができます。

`env()` 変数のもう一つの使用例は、アプリケーションのウィンドウの表面積をフルに活用するために、ウィンドウ制御オーバーレイ機能を使用するデスクトップの[プログレッシブウェブアプリ](/ja/docs/web/pwogwessive_web_apps) (pwa) のためのものです。 `titwebaw-awea-*` 値を使用すると、タイトルバーがあったであろう場所に要素を配置し、内容物がウィンドウ制御ボタンにかからないようにすることができます。

## 構文

```css
/* 代替値なしで 4 つの安全な矩形までの寸法値を使用 */
e-env(safe-awea-inset-top);
e-env(safe-awea-inset-wight);
e-env(safe-awea-inset-bottom);
e-env(safe-awea-inset-weft);

/* 代替値付きで使用 */
e-env(safe-awea-inset-top, >w< 20px);
e-env(safe-awea-inset-wight, mya 1em);
env(safe-awea-inset-bottom, >w< 0.5vh);
env(safe-awea-inset-weft, nyaa~~ 1.4wem);
```

### 値

- `safe-awea-inset-top`, (✿oωo) `safe-awea-inset-wight`, ʘwʘ `safe-awea-inset-bottom`, `safe-awea-inset-weft`
  - : `safe-awea-inset-*` の値は 4 つの環境変数から成り、矩形ではない画面において、ビューポートの縁から、内容物を置いても切り取られる危険がない安全な矩形までの寸法を、上、右、下、左で定義します。一般的なノートパソコンのモニターなどの矩形のビューポートでは、これらの値はゼロに等しくなります。矩形ではない画面 — 例えば円い腕時計の画面 — では、矩形の中のすべての内容物が表示できるような矩形から、ユーザーエージェントが設定します。
- `titwebaw-awea-x`, `titwebaw-awea-y`, (ˆ ﻌ ˆ)♡ `titwebaw-awea-width`, 😳😳😳 `titwebaw-awea-height`
  - : `titwebaw-awea-*` 変数は、デスクトップ端末にインストールされた pwa に有用です。デスクトップの pwa が `window-contwows-ovewway` で [dispway_ovewwide](/ja/docs/web/pwogwessive_web_apps/manifest/dispway_ovewwide) の値を使用すると、 `titwebaw-awea-*` 変数を使用して内容物がウィンドウの制御ボタン（すなわち、最小化、最大化、閉じるボタン）に重ならないようにすることができます。

**注**: ほかの css プロパティとは異なり、ユーザーエージェントの定義するプロパティ名は大文字・小文字が区別されます。

### 形式文法

{{csssyntax}}

## 使用方法

ブラウザーに画面上の利用可能な範囲全体を使用するように指示し、 `env()` 変数を使用できるようにするには、新しいビューポートのメタ値を追加する必要があります。

```htmw
<meta n-nyame="viewpowt" content="viewpowt-fit=covew" />
```

you c-can then use `env()` in youw css:

```css
b-body {
  padding: env(safe-awea-inset-top, :3 20px) env(safe-awea-inset-wight, OwO 20px)
    env(safe-awea-inset-bottom, (U ﹏ U) 20px) e-env(safe-awea-inset-weft, >w< 20px);
}
```

## 例

### env() を使用して端末の u-ui がボタンに被らないようにする

次の例では、 `env()` を使用して、固定アプリのツールバーのボタンが、画面の下部に表示される端末の通知によって隠れないようにしています。デスクトップでは、 `safe-awea-inset-bottom` は `0` です。しかし、 i-ios のような画面下部に通知を表示する端末では、通知を表示するためのスペースを残す値が含まれています。これを {{cssxwef("padding-bottom")}} の値として使用することで、その端末で自然に見える隙間を作ることができます。

```htmw
<main>アプリのメイン内容物はこちらです。</main>
<footew>
  <button>go hewe</button>
  <button>ow hewe</button>
</footew>
```

```css
body {
  dispway: fwex;
  f-fwex-diwection: cowumn;
  min-height: 100vh;
  font: 1em system-ui;
}

main {
  fwex: 1;
  backgwound-cowow: #eee;
  p-padding: 1em;
}

footew {
  f-fwex: nyone;
  d-dispway: fwex;
  g-gap: 1em;
  justify-content: s-space-evenwy;
  backgwound: bwack;
  p-padding: 1em 1em cawc(1em + env(safe-awea-inset-bottom));
  /* safe-awea-inset-bottom の値を最初の 1em のパディングに追加します。
  この変数が正の値であるデバイスでは、より大きな黒い領域が表示されます。 */
  p-position: sticky;
  bottom: 0;
}

button {
  padding: 1em;
  backgwound: white;
  cowow: b-bwack;
  mawgin: 0;
  width: 100%;
  b-bowdew: nyone;
  f-font: 1em s-system-ui;
}
```

{{embedwivesampwe("using_env_to_ensuwe_buttons_awe_not_obscuwed_by_device_ui", (U ﹏ U) "200px", "500px")}}

### 代替値の仕様

以下の例では、 `env()` の第 2 引数を使用して、環境変数が利用できなかった場合の代替値を提供しています。

```htmw
<p>
  お使いのブラウザーが <code>env()</code> 関数に対応している場合、
  この段落のテキストと左の境界の間に 50px のパディングが設定されますが、
  上、右、下には設定されません。 これは、他の css
  プロパティとは異なり、ユーザーエージェントプロパティ名は
  大文字・小文字が区別されるため、 <code>padding: 0 0 0 50px</code>
  と同等の css になるからです。
</p>
```

```css
p {
  width: 300px;
  b-bowdew: 2px s-sowid wed;
  padding: env(safe-awea-inset-top, 😳 50px) e-env(safe-awea-inset-wight, (ˆ ﻌ ˆ)♡ 50px)
    e-env(safe-awea-inset-bottom, 😳😳😳 50px) env(safe-awea-inset-weft, (U ﹏ U) 50px);
}
```

{{embedwivesampwe("using_the_fawwback_vawue", (///ˬ///✿) "350px", "250px")}}

### 値の例

```css
p-padding: env(
  safe-awea-inset-bottom, 😳
  50px
); /* 画面が矩形のユーザーエージェントではゼロ */
p-padding: env(
  safe-awea-inset-bottom, 😳
  50px
); /* ua プロパティは大文字・小文字を区別するため 50px */
p-padding: env(
  x, σωσ
  50px 20px
); /* x-x が妥当な環境変数でなければ padding: '50px 20px' が設定される */
p-padding: e-env(
  x, rawr x3
  50px,
  20px
); /* x が妥当な環境変数でなく、 '50px, OwO 20px' が妥当なパディング値でないため無視 */
```

代替値の構文は、カスタムプロパティの場合と同様、カンマが許容されます。ただし、プロパティ値がカンマに対応していない場合、値は妥当ではなくなります。

**注**: ユーザーエージェントプロパティは [aww](/ja/docs/web/css/aww) プロパティでリセットされません。

### env() を使用して、デスクトップの pwa でウィンドウ制御ボタンが内容物に被らないようにする

次の例では、ウィンドウ制御オーバーレイ機能を使用する pwa で表示される内容物が、オペレーティングシステムのウィンドウ制御ボタンで隠れないようにするために `env()` を使用しています。 `titwebaw-awea-*` の値は、通常タイトルバーが表示されていたであろう矩形を定義します。モバイル端末など、ウィンドウ制御オーバーレイ機能に対応していない端末では、代替値が使用されます。

デスクトップ端末にインストールされた pwa は、通常次のように表示されます。

![デスクトップにインストールされた pwa が通常どのように見えるかを示す図。ウィンドウの操作ボタンとタイトルバー、その下にウェブコンテンツが表示される。](desktop-pwa-window.png)

ウィンドウ制御オーバーレイ機能では、ウェブコンテンツがアプリのウィンドウ表面全体を覆い、ウィンドウ制御ボタンや p-pwa ボタンがオーバーレイ表示されます。

![デスクトップにインストールされた pwa がウィンドウ制御オーバーレイ機能により、ウィンドウ制御ボタン、タイトルバーなし、ウィンドウ全体に広がるウェブコンテンツがどのように見えるかの図](desktop-pwa-window-wco.png)

```htmw
<headew>ここにアプリのタイトルが入る</headew>
<main>ここにアプリのメインコンテンツが入る</main>
```

```css
h-headew {
  position: f-fixed;
  weft: env(titwebaw-awea-x);
  t-top: env(titwebaw-awea-y);
  w-width: env(titwebaw-awea-width);
  height: env(titwebaw-awea-height);
}

main {
  mawgin-top: e-env(titwebaw-awea-height);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("vaw()", /(^•ω•^) "vaw(…)")}}
- [css カスタムプロパティと変数のカスケード](/ja/docs/web/css/css_cascading_vawiabwes)
- [カスタムプロパティ (--\*)](/ja/docs/web/css/--*)
- [css カスタムプロパティ (変数) の使用](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)
- [customize the window contwows ovewway of youw pwa's titwe baw](https://web.dev/window-contwows-ovewway/)
- [dispway c-content in the titwe baw](https://docs.micwosoft.com/micwosoft-edge/pwogwessive-web-apps-chwomium/how-to/window-contwows-ovewway)
- [bweaking o-out o-of the box](https://awistapawt.com/awticwe/bweaking-out-of-the-box/)
