---
title: ウィンドウ管理 API
slug: Web/API/Window_Management_API
l10n:
  sourceCommit: 72d51eab0cf7140e7edcca663fe24fae1a4166f8
---

{{SeeCompatTable}}{{DefaultAPISidebar("Window Management API")}}

**ウィンドウ管理 API** を使用すると、デバイスに接続されたディスプレイに関する詳細情報を取得したり、特定の画面にウィンドウをより容易に配置したりすることが可能になり、より効果的なマルチスクリーン・アプリケーションの実現につながります。

## 概念と使用方法

これまで、現在のアプリケーションに関連するブラウザーウィンドウ（新しいウィンドウを開く、既存のウィンドウのサイズ変更や閉じるなど）を管理するために、 {{domxref("Window.open()")}} が使用されてきました。例えば、画面の左端と上端から 50 ピクセルの位置に 400×300 のウィンドウを開く場合は、次のようになります。

```js
const myWindow = window.open(
  "https://example.com/",
  "myWindow",
  "left=50,top=50,width=400,height=300",
);
```

{{domxref("Window.screen")}} プロパティから、ウィンドウを配置できる利用可能な画面領域の大きさなど、画面に関する情報を取得できます。

ただし、上記の機能には制限があります。 `Window.screen` はプライマリ画面に関するデータのみを返し、デバイスで利用可能なセカンダリディスプレイの情報は含まれません。ウィンドウをセカンダリディスプレイに移動させるには {{domxref("Window.moveTo()")}} を使用できますが、プライマリディスプレイに対してそのディスプレイがどのような位置関係にあるかに基づいて、適切な座標を推測する必要があります。

ウィンドウ管理 APIは、より堅牢で柔軟なウィンドウ管理機能を提供します。この API を使用すると、ディスプレイが複数の画面に拡張されているかどうかを確認したり、各画面の情報を個別に取得したりできるため、ウィンドウを各画面上の任意の場所に配置することが可能です。さらに、利用可能な画面の変更に対応するためのイベントハンドラーや、どの画面をフルスクリーンモードにするか（あるいはフルスクリーンにしないか）を選択できる新しいフルスクリーン機能、そしてAPIへのアクセスを制御する権限管理機能も備えています。

使用方法の詳細については、「[ウィンドウ管理 API の使用](/ja/docs/Web/API/Window_Management_API/Using)」を参照してください。

> [!NOTE]
> 現代のブラウザーでは、セキュリティ上の理由から、 `Window.open()` を呼び出すたびに個別のユーザー操作イベントが必要とされます。これにより、サイトが大量のウィンドウを次々と開いてユーザーに迷惑をかける（スパム行為を行う）ことを防いでいます。しかし、この制限はマルチウィンドウ・アプリケーションにとっては課題となります。この制限を回避する手段として、一度に開く新しいウィンドウを1つまでに抑える、既存のウィンドウを再利用して別のページを表示する、あるいは複数のウィンドウを開けるようにブラウザーの設定を変更する方法をユーザーに案内する、といった設計が考えられます。

### ユースケース

ウィンドウ管理 APIは、次のような場合に役立ちます。

- マルチウィンドウのグラフィックエディターやオーディオプロセッサーで、編集ツールやパネルを複数の画面に配置したい場合。
- 仮想トレーディングデスクで、複数のウィンドウに市場動向を表示し、注目している特定のウィンドウを全画面モードにしたい場合。
- スライドショーアプリで、内蔵のプライマリ画面に発表者ノートを表示し、外付けプロジェクターにプレゼンテーションを表示したい場合。

## 権限ポリシーの統合

{{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/ja/docs/Web/HTTP/Guides/Permissions_Policy) を使用して、ウィンドウ管理 API を使用する権限を制御できます。具体的には：

- {{domxref("Window.getScreenDetails()")}} メソッドの使用がブロックされた場合、返される {{jsxref("Promise")}} は `NotAllowedError` 例外で拒否されます。
- {{domxref("Screen.isExtended", "Window.screen.isExtended")}} プロパティは、ブロックされている場合は常に `false` を返します。

開発者は、`allow` 属性を使用して、 {{htmlelement("iframe")}} が、ウィンドウ管理を使用することを明示的に許可できます。

```html
<iframe src="3rd-party.example" allow="window-management"></iframe>
```

## インターフェイス

- {{domxref("ScreenDetails")}} {{securecontext_inline}}
  - : ユーザーのデバイスで使用可能なすべての画面の詳細を表します。
- {{domxref("ScreenDetailed")}} {{securecontext_inline}}
  - : ユーザーのデバイスで使用可能な、特定の 1 つの画面の詳細を表します。

### Extensions to other interfaces

- The `Screen` {{domxref("Screen.change_event", "change")}} event {{securecontext_inline}}
  - : Fired on a specific screen when it changes in some way — for example available width or height, or orientation.
- {{domxref("Screen.isExtended")}} {{securecontext_inline}}
  - : A boolean property that returns `true` if the user's device has multiple screens, and `false` if not.
- {{domxref("Element.requestFullscreen()")}}, the `screen` option
  - : Specifies on which screen you want to put the element in fullscreen mode.
- {{domxref("Window.getScreenDetails()")}} {{securecontext_inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("ScreenDetails")}} object instance.

## Examples

You can find full examples here:

- [Basic multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) (see the [source code](https://github.com/mdn/dom-examples/tree/main/window-management-api)).
- [Multi-window Platformer Game](https://googlechromelabs.github.io/multi-window-platformer-game/) (see the [source code](https://github.com/googlechromelabs/multi-window-platformer-game)).
- [Window placement demo](https://michaelwasserman.github.io/window-placement-demo/) (see the [source code](https://github.com/michaelwasserman/window-placement-demo)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
