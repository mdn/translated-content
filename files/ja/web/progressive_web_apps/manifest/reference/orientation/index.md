---
title: orientation
slug: Web/Progressive_web_apps/Manifest/Reference/orientation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

`orientation` はマニフェストのメンバーで、ウェブアプリケーションの既定の方向を指定します。
アプリが起動時および使用中にどのように表示されるべきかを、端末の画面の向きに関連して定義します。特に、複数の方向に対応している端末で具体的な内容が定義されます。

> [!NOTE]
> このアプリの画面の向きは、さまざまな方法で、例えば[画面方向 API](/ja/docs/Web/API/Screen/orientation) を利用して実行中に変更することができます。

## 値

```json-nolint
/* キーワード値 */
"orientation": "any"
"orientation": "natural"
"orientation": "portrait"
"orientation": "portrait-primary"
"orientation": "portrait-secondary"
"orientation": "landscape"
"orientation": "landscape-primary"
"orientation": "landscape-secondary"
```

### 値

- `orientation`
  - : ウェブアプリの既定の方向を指定する文字列です。
    `orientation` メンバーを指定しない場合、または不正な値が提供された場合、ウェブアプリは通常、端末の自然な方向と、ユーザーまたはシステムレベルの方向設定を使用します。

    `orientation` の値は、次のキーワードのいずれかでなければなりません。
    - `any`
      - : 端末のオペレーティングシステムまたはユーザー設定で許可されている任意の方向でウェブアプリを表示します。
        端末を回転させた際に、アプリの向きが端末の方向と一致するように自由に回転させることができます。

    - `natural`
      - : ブラウザー、オペレーティングシステム、ユーザー設定、または画面自体によって決定される、端末にとって最も自然な方向でウェブアプリを表示します。これは、端末が最も一般的に保持または使用される方法に対応しています。
        - 通常、縦向きに保持される端末、例えば携帯電話では、 `natural` は通常 `portrait-primary` です。
        - コンピューターのモニターやタブレット端末など、通常水平方向に使用される端末では、 `natural` はふつう `landscape-primary` です。

        端末を回転させると、アプリが端末の自然な方向と一致するように回転する場合もあれば、しない場合もあります。この動作は、特定の端末、ブラウザーの実装、およびユーザーの設定によって異なります。

    - `portrait`
      - : 縦幅が横幅よりも大きいウェブアプリを表示します。
        これにより、端末を回転させた際に、アプリが `portrait-primary` と `portrait-secondary` の方向を切り替えることができます。

    - `portrait-primary`
      - : ウェブアプリを縦向きモードで表示します。通常、端末を縦に持った状態で表示されます。
        これは通常、縦向きで使用する端末の既定のアプリの方向です。
        端末とブラウザーの実装によっては、端末を回転させても、アプリは通常、この方向を維持します。

    - `portrait-secondary`
      - : ウェブアプリを逆縦長モードで表示します。これは、 `portrait-primary` を 180 度回転させたものです。
        端末とブラウザーの実装によっては、端末を回転させても、アプリは通常、この方向を維持します。

    - `landscape`
      - : ウェブアプリを、幅が高さよりも大きい状態で表示します。
        これにより、端末を回転させた際に、アプリが `landscape-primary` と `landscape-secondary` の方向を切り替えることができます。

    - `landscape-primary`
      - : ウェブアプリを通常、端末を標準の水平位置で保持した状態で、横向きで表示します。
        これは通常、もともと横向きに設計された端末の既定のアプリの方向です。
        端末とブラウザーの実装によっては、端末を回転させても、アプリは通常、この方向を維持します。

    - `landscape-secondary`
      - : ウェブアプリを逆横長モードで表示します。これは、 `landscape-primary` を 180 度回転させたものです。
        端末とブラウザーの実装によっては、端末を回転させても、アプリは通常、この方向を維持します。

## 解説

マニフェストメンバーの `orientation` を理解するには、次の方向関連の概念にを理解することが重要です。

- **端末の方向**: 端末を物理的に保持または設置する方法を定義します。
- **画面の方向**: 端末の画面の物理的な方向を定義します。
- **アプリの方向**: アプリのコンテンツが画面の方向に対してどのように表示されるかを定義します。

端末を回転させると、通常は画面の方向も変わります。例えば、携帯電話を縦から横に回転させると、画面は通常、縦向きから横向きに切り替わります。マニフェストで特定の方向を設定していない場合、ほとんどのアプリは新しい画面の方向に合わせてレイアウトを調整します。

マニフェストの `orientation` メンバーを使用すると、これらの変更に対するアプリの反応を制御できます。 アプリの推奨する方向を指定することで、画面の方向の変更にアプリを適応させるか、端末の持ち方に関わらず固定されたレイアウトを維持するかを決定できます。例えば、 `"orientation": "portrait-primary"` を設定すると、端末が回転しても、常に画面の相対的な縦方向でアプリが表示されることを推奨することができます。 ブラウザーやオペレーティングシステムは、実現可能な場合、この環境設定を優先します。

下記に、携帯電話を回転させた際にウェブアプリのレイアウトがどのように見えるかを示します。この例では、アプリの `orientation` 値が `any` に設定されており、携帯電話を回転させると、アプリがすべての `orientation` 値の間で回転することを想定しています。また、携帯電話とブラウザーのどちらも、すべての方向に対応しているものとします。この順序では、携帯電話が時計回りに回転し、各位置は次の順序で開始位置から回転します。

- 左上: `portrait-primary` （開始位置）
- 右上: `landscape-primary` （90 度回転）
- 左下: `portrait-secondary` （180 度回転）
- 右下: `landscape-secondary` （270 度回転）

```html hidden
<div class="container">
  <div class="orientation">
    <div class="device portrait-primary">
      <div class="screen">
        <div class="title-bar">アプリのタイトルバー</div>
        <div class="content">縦長モードのアプリコンテンツ</div>
      </div>
    </div>
    <div class="label"><code>portrait-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-primary">
      <div class="screen">
        <div class="title-bar">アプリのタイトルバー</div>
        <div class="content">横長モードのアプリコンテンツ</div>
      </div>
    </div>
    <div class="label"><code>landscape-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device portrait-secondary">
      <div class="screen">
        <div class="title-bar">アプリのタイトルバー</div>
        <div class="content">逆縦長モードのアプリコンテンツ</div>
      </div>
    </div>
    <div class="label"><code>portrait-secondary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-secondary">
      <div class="screen">
        <div class="title-bar">アプリのタイトルバー</div>
        <div class="content">逆横長モードのアプリコンテンツ</div>
      </div>
    </div>
    <div class="label"><code>landscape-secondary</code></div>
  </div>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 20px;
}

.orientation {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.device {
  width: 200px;
  height: 300px;
  border: 5px solid black;
  border-radius: 20px;
  position: relative;
  background-color: white;
  margin-bottom: 10px;
}

.screen {
  width: 180px;
  height: 280px;
  border-radius: 15px;
  background-color: lightgrey;
  margin: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.title-bar {
  background-color: #4285f4;
  color: white;
  padding: 5px;
  text-align: center;
  font-weight: bold;
}

.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.landscape-primary,
.landscape-secondary {
  width: 300px;
  height: 200px;
}

.landscape-primary .screen,
.landscape-secondary .screen {
  width: 280px;
  height: 180px;
}

.portrait-secondary {
  transform: rotate(180deg);
}

.landscape-secondary {
  transform: rotate(180deg);
}

.label {
  margin-top: 10px;
  font-family: Arial, sans-serif;
  font-size: 15px;
}
```

{{EmbedLiveSample('Description', '', 800)}}

### スコープと既定の挙動

指定した `orientation` は、ウェブアプリのすべての最上位の{{Glossary("Browsing context", "閲覧コンテキスト")}}に適用されます。

指定した `orientation` 値に対応しているブラウザーの場合、実行時に上書きされない限り、アプリの実行期間中は既定のアプリの方向としてこの値が使用されます。
つまり、ブラウザーは、最上位の閲覧コンテキストがナビゲートされるたびに、この既定の方向に戻ることになります。

### ウェブアプリの推奨される方向の選択

特定の方向を設定することで、ウェブアプリのコンテンツとユーザーインターフェイスが最適に表示されるように確実に保持することができます。
例えば、動画アプリは横長表示に適していることが多い一方で、読書アプリは縦長表示で動作するのが一般的です。

方向を指定しないことも、ウェブアプリがさまざまな端末やユーザーの環境設定に柔軟に適応できるようにするための意図的な選択です。

### マニフェストの `orientation` と画面方向 API の挙動

`orientation` マニフェストメンバーはウェブアプリの既定の方向を設定しますが、ウェブアプリを実行した後、[画面方向 API](/ja/docs/Web/API/Screen_Orientation_API) を使用して、最上位の閲覧コンテキストの方向を変更することができます。

`orientation` 値はウェブアプリマニフェストと画面方向 API とで類似していますが、その動作と目的は異なります。

- ウェブアプリマニフェストの場合:
  - マニフェストメンバー `orientation` を使用して、ウェブアプリの推奨する既定の方向を提案します。
  - アプリが起動したときの初期方向を設定します。

- 画面方向 API の場合:
  - 方向の値を使用して、画面を特定の方向へ固定します。
  - 実行中に方向を動的に変更できます（例えば、 {{domxref("ScreenOrientation.lock", "screen.orientation.lock()")}} を使用して方向をロックする）。

  > [!NOTE]
  > 画面方向 API の [`lock()`](/ja/docs/Web/API/ScreenOrientation/lock) メソッドは、ブラウザーの対応が制限されています。
  > 実行時に画面の方向を動的に変更するために使用する場合は、互換性を調べるようにしてください。

### プラットフォームのブラウザーの制限

アプリの方向に関する環境設定を追加する際は、次の考慮事項と制限事項を念頭に置いてください。

- ブラウザーベンダーと端末メーカーが、互換性のある方向と [`display`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display) モードを決定します。
- UI/UX に関する懸念事項やプラットフォームの慣例により、使用できる画面の方向や表示モードが制限される場合があります。
- 特定の `orientation` 値に対応しているかどうかは、端末やプラットフォームによって異なります。
- 端末によっては、 `portrait-secondary` や `landscape-secondary` など、すべての `orientation` 値に対応していない場合があります。
- ブラウザーによっては、特定の表示モード（[`"display": "browser"`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display#browser) など）では、ウェブアプリの既定の方向を変更できない場合があります。

## 例

### ウェブアプリの固定した向きを指定

この例では、アプリの方向を `portrait-primary` に設定しています。 ブラウザーと端末が対応していることを想定すると、端末を回転させても、アプリは常に縦向きポートレートモードで表示されます。

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### ウェブアプリの方向を柔軟に設定

写真の閲覧・編集アプリを例に考えてみましょう。アプリのマニフェストファイルでは、下記に示すように、`orientation` を `any` に設定します。これにより、端末の現在の方向でアプリが起動し、ユーザーが端末を回転させると、`portrait` と `landscape` の両方の方向に対応します。この `orientation` の設定により、ユーザーは、現在の表示や使用コンテキストに最も適した方向で、快適に写真の閲覧や編集を行うことができます。

```json
{
  "name": "PhotoGallery Pro",
  "short_name": "PhotoGal",
  "description": "A professional photo gallery and editing application",
  "start_url": "/index.html",
  "display": "standalone",
  "orientation": "any",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.photogallery"
    }
  ]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [画面方向 API](/ja/docs/Web/API/Screen_Orientation_API)
- [画面の向きの制御](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [端末の方向のためのメディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [学習: レスポンシブデザイン](/ja/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
