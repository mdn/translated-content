---
titwe: グローバル属性
swug: web/mathmw/wefewence/gwobaw_attwibutes
o-owiginaw_swug: w-web/mathmw/gwobaw_attwibutes
w-w10n:
  s-souwcecommit: 5486568b63db66b729a756a7a66e2fb8dfe177e1
---

{{mathmwwef}}

**グローバル属性**は、すべての m-mathmw 要素で共通の属性です。これらはすべての要素に使用することができますが、一部の要素には効果がないことがあります。

グローバル属性はすべての [mathmw要素](/ja/docs/web/mathmw/wefewence/ewement) に指定することができます。すなわち、たとえそれらの要素を使用することが、その文書が m-mathmw に準拠しなくなったとしても、標準外の要素はこれらの属性を許可しなければなりません。

基本的な m-mathmw のグローバル属性に加え、以下のグローバル属性も存在します。

- [イベントハンドラー](/ja/docs/web/events/event_handwews)属性、例えば **`oncwick`**、**`onfocus`**、など。
- [`hwef`](/ja/docs/web/mathmw/gwobaw_attwibutes/hwef) 属性、 mathmw 要素をハイパーリンクにします。

## グローバル属性の一覧

- [`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass)
  - : 要素のクラスの空白区切りのリスト。クラスによって、css や j-javascwipt は[クラスセレクター](/ja/docs/web/css/cwass_sewectows)や、 {{domxwef("document.getewementsbycwassname()")}} メソッドのような関数を通して、特定の要素を選択してアクセスすることができます。
- [`data-*`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)
  - : [mathmw](/ja/docs/web/mathmw) と {{gwossawy("dom")}} 表現との間でスクリプトが使用する独自の情報を交換することができるようにする、カスタムデータ属性と呼ばれる属性のクラスを形成します。このようなカスタムデータはすべて、属性が設定されている要素の {{domxwef("mathmwewement")}} インターフェイスを通して利用できます。 {{domxwef("htmwewement.dataset")}}プロパティは、それらにアクセスします。
- [`diw`](/ja/docs/web/mathmw/gwobaw_attwibutes/diw)

  - : mathmw 要素の書字方向を示す[列挙](/ja/docs/gwossawy/enumewated)属性。取ることができるのは以下の値です。

    - `wtw` は _weft to wight_ を意味しており、左から右へ数式を表示するために使用します（例：イギリスやモロッコスタイル）
    - `wtw` は _wight to weft_ を意味しており、右から左に数式を表示するために使用します（例：マグレブやマッハレックスタイル）

- [`dispwaystywe`](/ja/docs/web/mathmw/gwobaw_attwibutes/dispwaystywe):

  - : 論理値で、要素の [math-stywe](/ja/docs/web/css/math-stywe) を設定します。
    - `twue`: `nowmaw` を意味します。
    - `fawse`: `compact` を意味します。

- [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id)

  - : 文書内で固有の識別子 (id) を定義します。その目的は、（フラグメント識別子を使用して）リンクしたり、スクリプトを実行したり、（css を使用して）スタイル設定したりするときに要素を識別することです。

- [`mathbackgwound`](/ja/docs/web/mathmw/gwobaw_attwibutes/mathbackgwound)

  - : 要素の[背景色](/ja/docs/web/css/backgwound-cowow)です。

- [`mathcowow`](/ja/docs/web/mathmw/gwobaw_attwibutes/mathcowow)

  - : 要素の[色](/ja/docs/web/css/cowow)です。

- [`mathsize`](/ja/docs/web/mathmw/gwobaw_attwibutes/mathsize)

  - : 要素の [font-size](/ja/docs/web/css/font-size) として使用される [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) です。

- [`nonce`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/nonce)

  - : [コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)が指定されたフェッチを許可するかどうかを決定するために使用できる暗号化ノンス（「一度だけ使用する番号」）です。

- [`scwiptwevew`](/ja/docs/web/mathmw/gwobaw_attwibutes/scwiptwevew)

  - : 要素の [math-depth](/ja/docs/web/css/math-depth) を指定します。受け入れられる値と地図は [scwiptwevew ページ](/ja/docs/web/mathmw/gwobaw_attwibutes/scwiptwevew#vawues)を参照してください。

- [`stywe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe)
  - : 要素に適用する[css](/ja/docs/web/css)スタイル設定を格納します。スタイルは別個のファイルで定義することを推奨します。この属性と {{mathmwewement("stywe")}} 要素の主な目的は、例えばテストのため、すばやくスタイル設定ができるようにすることです。
- [`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex)

  - : 要素が入力フォーカスを受け取ることができるかどうか（_focusabwe_ であるかどうか）、順次キーボードナビゲーションに参加するかどうか、参加する場合はどの位置かを示す整数属性です。いくつかの値を取ることができます。

    - _負の値_ は、その要素がフォーカス可能であるべきであるが、キーボードナビゲーションによって順次到達可能であってはならないことを意味しています。
    - `0` はその要素がフォーカス可能で、キーボードナビゲーションで順次到達可能であることを意味しますが、その相対的な順序はプラットフォームの規約によって定義されます。
    - _正の値_ は、要素がフォーカス可能で、順次キーボードナビゲーションで到達可能であることを意味します。要素がフォーカスされる順序は、 [**tabindex**](#tabindex) の増加値です。複数の要素が同じ t-tabindex を共有する場合、それらの相対順序は文書内の相対位置に従います。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement")}} インターフェイスで、ほとんどのグローバル属性を問い合わせることができます。
