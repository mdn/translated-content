---
title: ユーザーエージェント文字列を用いたブラウザーの判定
short-title: UA 文字列によるブラウザーの判定
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

サーバーへのすべてのリクエストに対して、ブラウザーは {{HTTPHeader("User-Agent")}} {{Glossary("HTTP")}} ヘッダーを、{{glossary("user agent", "ユーザーエージェント")}} (UA) 文字列と呼ばれる値とともに付加します。
この文字列は、ブラウザー、そのバージョン番号、およびホストのオペレーティングシステムを識別することを意図しています。

```http
User-Agent: <product> / <product-version> <comment>
```

この文字列には、JavaScript で [`navigator.userAgent`](/ja/docs/Web/API/Navigator/userAgent) プロパティを使用してアクセスすることもできます。

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

UA 文字列を構文解析して（「UA スニッフィング」と呼ばれることもあります）、UA 文字列の値に基づいてサイトの動作を変更したくなるかもしれませんが、これを確実に実行することはとても難しく、バグの原因になることも多いものです。

この文書では、ブラウザーの検出に UA 文字列を使用する場合の一般的な落とし穴と、推奨される代替手段について説明します。
最後に、文字列を使用して UA を検出するためのヒントをいくつか紹介しますが、これは絶対に必要な場合にのみ使用してください。

## 機能検出がブラウザー検出よりも優れている理由

ブラウザーごとにサイトの機能を適応させようとすると、複雑さやバグが発生する可能性があることを示すために、次の例を考えてみましょう。
あるアプリケーションで、JavaScript の `splitUpString()` 関数で [後方参照アサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`) を使用したいとします。

```js example-bad
let splitUpString;

if (navigator.userAgent.includes("Chrome")) {
  const camelCaseExpression = new RegExp("(?<=[A-Z])");
  splitUpString = (str) => String(str).split(camelCaseExpression);
} else {
  // この代替手段は非効率的ですが、動作します
  splitUpString = (str) =>
    String(str)
      .split(/(.*?[A-Z])/)
      .filter(Boolean);
}
console.log(splitUpString("fooBar")); // ["fooB", "ar"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

このコードは、間違っている可能性のあるいくつかの仮定をしており、間違ったブラウザーまたは間違ったバージョンのブラウザーで実行すると、コードが動作しなくなります。

1. サブ文字列 `Chrome` を含むすべてのユーザーエージェント文字列は、Chrome ブラウザーを示します。

   UA 文字列に基づくブラウザーの検出における最大の問題の 1 つは、ブラウザーやユーザーエージェントが、別のブラウザーを装ったり、複数のブラウザーに基づく情報を含んだりすることがよくあることです。

2. ブラウザーが Chrome の場合、後方参照機能は常に利用できます。
   実際には、対応が追加される前の古いバージョンの Chrome を使用しているか、この機能が除去された新しいバージョンの Chrome を使用している可能性があります。
3. 最も重要なことは、この機能は、他のブラウザーには対応していないと想定していることです。この機能は、いつでも他のブラウザーに追加できるにもかかわらずです。
   一致しないブラウザーはすべて、非効率的な代替手段を強制的に使用することになります。

これらの問題は、ブラウザーの検出方法（UA スニッフィング、クライアントヒント、他の HTTP ヘッダーの有無や内容など）に関係なく発生することに注意してください。
使用されているブラウザーの種類は関係ありません。このケースで実際に確認したいのは、機能検出です。機能検出については、下記で詳しく説明します。

## UA スニッフィングの代替手段

次の節では、UA スニッフィングよりも堅牢で、より多くのシナリオで適用可能な、ブラウザー検出の代替手段について説明します。

### 機能検出

機能検出とは、ページをレンダリングしているブラウザーを判別する代わりに、クライアントが特定の機能を利用できるかどうかを調べる機能です。
機能に対応していない場合は、代わりに代替手段を使用します。
次の機能検出の例では、クライアントが{{domxref("Geolocation_API", "位置情報 API", "", "nocode")}} に対応しているかどうかを調べます。
これは、グローバルの {{domxref("Navigator")}} オブジェクトで `geolocation` プロパティが利用可能かどうかを調べることによって行います。

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // Google マップ API など、地図上にその場所を表示させる
  });
} else {
  // 代わりに静的な地図を表示させる
}
```

この機能は多くの機能に対して使用できます。

例えば、PDF ファイルをインラインで表示できるかどうか、 {{domxref("VirtualKeyboard_API", "VirtualKeyboard API", "", "nocode")}} に対応しているかどうかといった具合に、さまざまな設定を行うことができます。

```js
if ("application/pdf" in navigator.mimeTypes) {
  // ブラウザーが PDF ファイルのインライン表示に対応している
}
if ("virtualKeyboard" in navigator) {
  // ブラウザーが仮想キーボード API に対応している
}
```

スタイルについては、 CSS で機能検出を行うこともできます。 [`@supports`](/ja/docs/Web/CSS/Reference/At-rules/@supports) アットルールを使用し、機能がないことを調べたい場合は `not` キーワードを組み合わます。
CSS での使用方法については、[機能クエリーの使い方](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)を参照してください。

```css
@supports (display: grid) {
  .box {
    display: grid;
    gap: 2rem;
  }
}

@supports not (property: value) {
  /* 代替手段用の CSS ルール */
}
```

まれに、機能についてブラウザー間で動作が異なる場合があります。その場合は、各ブラウザーが API をどのように実装しているかを検査し、それに基づいて使用方法を決定してください。
詳細については、[機能検出の実装](/ja/docs/Learn_web_development/Extensions/Testing/Feature_detection)の記事をご覧ください。

#### モバイル端末の検出

UA スニッフィング（および [クライアントヒント](#client_hints)）のよくある誤用は、クライアントがモバイル端末であるかどうかを検出することです。
通常、ユーザーが使用する端末が**タッチフレンドリー**で画面が小さいかどうかを検出しようとするのは、例えばボタンに余分なパディングを追加してウェブサイトを最適化するためです。

その代わりに、現行の API を使用して機能を検出しましょう。
例えば、タッチ対応を調べるには、 {{domxref("Navigator")}} インターフェイスにある [maxTouchPoints](/ja/docs/Web/API/Navigator/maxTouchPoints) プロパティを調べてみてください。

```js
if (navigator.maxTouchPoints > 1) {
  // ブラウザーがマルチタッチに対応している
}
```

レイアウトなど、それ以外の問題については、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout) や [グリッド](/ja/docs/Web/CSS/Guides/Grid_layout) などの最新の CSS を使用して、柔軟なレイアウトを実現してください。
小さな画面でコンテンツを非表示にする代わりに、レイアウトを動的に調整してください。
[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)を使用すると、ほとんどのレイアウトの変更を処理でき、JavaScript による調整の必要性を縮小できます。

ユーザーが端末を回転させたり、画面モードを切り替えたときにトランジションをスムーズにしたい場合は、[端末の方向の検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)を参照してください。
折りたたみ式端末については、[端末姿勢 API](/ja/docs/Web/API/Device_Posture_API) などの新しい API がありますが、対応状況は端末によって大きく異なるため、互換性に関するデータを必ず確認してください。

### クライアントヒント

Blink ベース（Chromium、Edge、Brave、Vivaldi など）のブラウザーでは、[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)が代替手段となります。
クライアントヒントでは、サーバーは HTTP ヘッダーまたは [JavaScript API](/ja/docs/Web/API/User-Agent_Client_Hints_API) を通じて、クライアントに端末情報を積極的にリクエストします。

クライアントヒントは、Blink ベースのブラウザーを検出するには、UA スニッフィングよりも優れています。これは、クライアントヒントは偽装されにくく、より小さく、信頼性が高く、構文解析が容易な情報を提供するためです。
クライアントヒントに基づいてサイトの機能を変更することは、やはり良い考えではありません。
可能であれば、[上記で説明したとおり](#機能検出がブラウザー検出よりも優れている理由)、代わりに機能検出とプログレッシブエンハンスメントを使用しましょう。

例えば、 HTTP の仕組みでは、サーバーは、クライアントが後続のリクエストで含めるべきヘッダーのリストとともに、 {{httpheader("Accept-CH")}} ヘッダーを記載します。
サーバーがクライアントにこのレスポンスを送信すると想定しましょう。

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

これにより、後続のリクエストでクライアントから次のヘッダーが要求されます。

- {{httpheader("Sec-CH-UA-Mobile")}}: クライアントがモバイル端末であるかどうかを示す論理値。
- {{httpheader("Sec-CH-UA-Platform")}}: クライアントが動作しているプラットフォーム（"Windows"、"Android" など）。
- {{httpheader("Sec-CH-UA")}}: ユーザーエージェントのブランド名および重要なバージョン情報。

クライアントがクライアントヒントに対応していると想定すると、UA クライアントヒントは、その後のリクエストに次のように現れる可能性があります。

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

クライアントヒントの詳細については、 [HTTP クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)を参照してください。
この機能を使用する前に、[ブラウザーの互換性](/ja/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility)の詳細を必ず確認してください。

### それ以外の手法や原則

- {{glossary("Progressive enhancement", "プログレッシブエンハンスメント")}}
  - : このデザイン手法では、ウェブサイトを「レイヤー」で開発し、ボトムアップの手法を用いて、よりシンプルなレイヤーから始め、より多くの機能を使用するレイヤーを順次追加して、サイトの機能を改善していきます。
- {{glossary("Graceful degradation", "グレイスフルデグラデーション")}}
  - : これはトップダウンの手法で、必要な機能をすべて使用して可能な限り最高のサイトを構築し、古いブラウザーでも動作するように微調整します。これは、プログレッシブエンハンスメントよりも困難で、効果も低い場合がありますが、場合によっては有用です。

## ブラウザー検出を使用する不適切な理由

機能検出とプログレッシブエンハンスメントの代わりにブラウザー検出をまだ検討している場合は、次の（不適切な）理由に当てはまらないかどうかを確認してください。

- **特定のブラウザーのバージョンにおける特定のバグを回避しようとしている**
  - : これに最初に遭遇した人は、おそらくあなたではないでしょう。
    専門家や別の視点を持つ人は、バグを回避したり、回避する方法についてヒントをくれるかもしれません。
    問題があまり一般ではない場合は、このバグがバグ追跡システム ([Mozilla](https://bugzilla.mozilla.org/)、[WebKit](https://bugs.webkit.org/)、[Blink](https://www.chromium.org/issue-tracking/)、[Opera](https://bugs.opera.com/))に報告されているかどうかを確認する価値があります。
    ブラウザーのメーカーはバグ報告に注意を払っています。あなたがバグを報告することで、問題の修正やより信頼性の高い回避策の提供に役立つかもしれません。
- **来訪者のブラウザーに応じて異なる HTML を提供**
  - : これは通常、良い考えではありませんが、これが必要なまれなケースもあります。
    意味のない {{ HTMLElement("div") }} または {{ HTMLElement("span") }} 要素を追加することで、これを防ぐことはできませんか？
    実際にデザインに問題があるかどうかを検討してください。プログレッシブ・エンハンスメントや流動的なレイアウトを使用して、これを行う必要性をなくすことができないでしょうか？
    HTML を再作成するよりも、正確な UA 検出を適用する努力の方が、決定的な要因となるはずです。
- **来訪者のブラウザーに特定の機能があるかどうかを探す**
  - : 一部のブラウザーではまだ対応していない特定の機能を使用する必要があり、互換性のないブラウザーを使用しているユーザーには、機能が少ないが確実に動作する古いウェブサイトを表示したい場合。
    これは、UA 検出を使用する最悪の理由です。なぜなら、すべてのブラウザーは、最終的にはこれに対応してしまう可能性が高いからです。
    さらに、この方法でそれぞれのブラウザーのさまざまな機能を検査することは現実的ではありません。

## UA 文字列の関連部分の抽出

上記のオプションをすべて試しても、最後の手段として UA 文字列を解析する必要がまだある場合は、この節に役立つヒントがいくつかあります。
残念ながら、ユーザーエージェント文字列の各部分には統一性がないため、ここで難しい部分になります。

### レンダリングエンジン

共通の{{glossary("rendering engine", "レンダリングエンジン")}}を持つブラウザーは、同じ方法でページを表示します。あるブラウザーで動作するものは、他のブラウザーでも動作すると考えるのが妥当であることが多いでしょう。
現在、主に 3 つのレンダリングエンジンが使用されています。{{glossary("Blink")}}、{{glossary("Gecko")}}、{{glossary("WebKit")}} です。

この例では、レンダリングエンジンは文字列 `Gecko/20100101` であり、レンダリングエンジンが `Gecko` であることを示しています。また、 "gecko-Trail" は固定文字列 `20100101` であり、「デスクトップ」を意味しています。

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

レンダリングエンジンの名前を検出することはウェブサイトではよく行われており、過去には、レンダリングエンジン名だけでウェブサイトから排除されるのを避けるために、多くのユーザーエージェントがレンダリングエンジン名以外の名前を追加していました。
したがって、このメソッドは信頼性が特に低いため、レンダリングエンジンを検出する際に誤検出を開始しないように注意することが重要です。
macOS の Chrome 134 で送信された次の UA 文字列を考えてみましょう。

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| エンジン | 必ず含む          | コメント                                                                                                       |
| -------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                |
| Gecko    | `Gecko/xyz`       |                                                                                                                |
| WebKit   | `AppleWebKit/xyz` | WebKit ブラウザーは `like Gecko` の文字列を追加するので、判定時に注意しないと Gecko と誤認することがあります。 |
| Presto   | `Opera/xyz`       | 廃止: Presto は Opera ブラウザーのバージョン 15 以降では使用されない ('Blink' を参照)                          |
| EdgeHTML | `Edge/xyz`        | 廃止: EdgeHTML は Edge ブラウザーのバージョン 79 以降では使用されない ('Blink' を参照)。                       |

## レンダリングエンジンのバージョン

ほとんどのレンダリングエンジンは、 Gecko を除いて、バージョン番号を `RenderingEngine/VersionNumber` トークンに入れます。
次の例では、文字列 `rv:138.0` であり、レンダリングエンジンのバージョン番号は `138.0` であることを意味し、これは Firefox のバージョンと同じです。

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### ブラウザー名とバージョン

開発者が「ブラウザーを判定したい」という場合、実際には「レンダリングエンジンを判定したい」場合であることがしばしばあります。
これは通常、"Firefox" と "Safari" ではなく、 "Gecko" や "WebKit" を検出するということです。

ほとんどのブラウザーは、名前とバージョンを `BrowserName/VersionNumber` の形式で設定します。
しかし、その書式ではユーザーエージェント文字列には名前以外の情報も含まれているため、ブラウザーの名前を特定することはできず、探している名前が存在するかどうかしか調べられません。
次の例では、ブラウザー名は `Firefox/138.0` という文字列で、ブラウザー名は `Firefox`、ソフトウェアのバージョンは `138.0` であることを示しています。

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

一部のブラウザーは競合する情報を送信します。例えば、Chrome は Chrome と Safari の両方を報告します。
したがって、Safari を検出するには、Safari 文字列が存在し、Chrome 文字列が存在しないことを確認する必要があります。また、Chromium は多くの場合、Chrome として自分自身を報告し、SeaMonkey は Firefox として自分自身を報告します。

また、 `BrowserName` に単純な正規表現を使用しないように注意してください。ユーザーエージェント文字列には、キー/値の構文以外の文字列も含まれています。例えば、 Safari や Chrome では、 `like Gecko` のような文字列が含まれています。

| エンジン                            | 必ず含む        | 決して含まない                     |
| ----------------------------------- | --------------- | ---------------------------------- |
| Firefox                             | `Firefox/xyz`   | `Seamonkey/xyz`                    |
| Seamonkey                           | `Seamonkey/xyz` |                                    |
| Chrome                              | `Chrome/xyz`    | `Chromium/xyz` または `Edg.*/xyz`  |
| Chromium                            | `Chromium/xyz`  |                                    |
| Safari                              | `Safari/xyz` \* | `Chrome/xyz` または `Chromium/xyz` |
| Opera 15+ (Blink ベースのエンジン)  | `OPR/xyz`       |                                    |
| Opera 12- (Presto ベースのエンジン) | `Opera/xyz`     |                                    |

\* Safari はバージョン番号を 2 つ提供しており、一方は技術的な `Safari/xyz` のトークン、もう一方はユーザーに分かりやすい `Version/xyz` のトークンです。

もちろん、他のブラウザーが特定のケースでこれらを偽装しないという保証はまったくありません。
そのため、ユーザーエージェント文字列を使用したブラウザーの検出は信頼性が低く、バージョン番号のチェックのみを行う必要があります（過去のバージョンを偽装する可能性は低いため）。

### オペレーティングシステムの検出

オペレーティングシステムは、ほとんどの UA 文字列で送信されます（ただし、ウェブに重点を置いたプラットフォームは例外です）が、その書式はさまざまです。
これは、ユーザーエージェントのコメント部分にある 2 つのセミコロンで囲まれた固定文字列であり、これらの文字列はそれぞれのブラウザーに固有のものです。

これらは OS、そして多くの場合そのバージョンと、依存しているハードウェアに関する情報（32 ビットか 64 ビット、Mac の場合は Intel/PPC、Windows PC の場合は x86/ARM CPU アーキテクチャ）を示しています。
次の例では、これは `Intel Mac OS X 10.15` という文字列です。

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

いずれの場合も、これらの文字列は変更される可能性があるため、パターンが事前にわかっている、すでにリリースされているブラウザーの検出と組み合わせてのみ使用しましょう。
新しいバージョンのブラウザーがリリースされた場合に、コードを適応させるために、来訪者または UA 文字列の調査を検討してください。

### モバイルか、タブレットか、デスクトップか

ユーザーエージェントのスニッフィングを行う最も一般的な理由は、ブラウザーが動作している端末の種別を判別するためです。

- ブラウザーやレンダリングエンジンは、1 つの種類の端末でのみ動作すると想定しないでください。
  特に、さまざまなブラウザーやレンダリングエンジンで異なる既定値に頼らないでください。
- ブラウザーがモバイル、タブレット、デスクトップのいずれであるかを定義するために、 OS トークンを使用しないでください。 OS は複数の種類の端末（Android はタブレットや携帯電話など）で動作します。

次の表は主要なブラウザーのベンダーが、ブラウザーがモバイル端末上で動作していることを示す方法をまとめたものです。

| ブラウザー                                                  | ルール                                                       | 例                                                                                                                                                               |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                    | `Mobile` または `Tablet` のトークンがコメントの中にある。    | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit ベースのもの (Android, Safari)                       | `Mobile Safari` のトークンがコメントの外にある。             | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink ベースのもの (Chromium, Google Chrome, Opera 15 以降) | `Mobile Safari` のトークンがコメントの外にある。             | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge on Windows 10 Mobile                                   | `Mobile/xyz` および `Edge/` のトークンがコメントの外にある。 | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

要するに、ユーザーエージェント文字列のどこかに文字列 `Mobi` があることを探すということです。
端末が大きくて `Mobi` と表示されていない場合は、デスクトップサイトを提供してください（ベストプラクティスとして、デスクトップ機にタッチ画面が採用されつつあるので、どちらにしてもタッチ入力に対応するようにしてください）。

## 関連情報

- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)
- [HTTP クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)
- [機能検出の実装](/ja/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migrate to User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) on web.dev (2021)
