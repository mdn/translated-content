---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{HTMLSidebar}}

**`speculationrules`** の値を [`<script>` 要素](/ja/docs/Web/HTML/Element/script/type)の [`type`](/ja/docs/Web/HTML/Element/script) 属性に設定すると、要素の本体に投機ルールが入っていることを示します。

投機ルールは JSON 構造の形式をとり、どのリソースがブラウザーによって先読みまたは先行描画されるべきかを決定します。これは[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) の一部です。

## 構文

```html
<script type="speculationrules">
  // ルールを定義する JSON オブジェクト
</script>
```

> **メモ:** `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity`, `referrerpolicy` の各属性は指定することができません。

### 例外

- `TypeError`
  - : 投機ルール定義が有効な JSON オブジェクトではない場合。

## 解説

`<script type="speculationrules">` 要素には、投機ルールを定義する有効な JSON 構造が格納されていなければなりません。次の例では、prefetch と prerender の別個のルールを表示させています。

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next3.html", "next4.html"]
      }
    ]
  }
</script>
```

### 投機ルールの JSON 表現

JSON 構造は最上位のレベルに 1 つ以上のフィールドを格納し、それぞれが投機ルールを定義するアクションを表します。対応しているアクションは以下の通りです。

- `"prefetch"` {{optional_inline}}
  - : 関連する文書レスポンス本体がダウンロードされ、それらの文書に移動したときのパフォーマンスが大幅に改善されるようにする、将来的なナビゲーションの可能性のあるルール。ページが参照するサブリソースはどれもダウンロードされないことに注意してください。
- `"prerender"` {{optional_inline}}
  - : 関連文書が完全にダウンロードされ、レンダリングされ、不可視のタブに読み込まれるべき、将来起こりうるナビゲーションのルール。これには、すべてのサブリソースを読み込むこと、すべての JavaScript を実行すること、さらにはサブリソースを読み込んで JavaScript によって開始されるデータ フェッチを実行することが含まれます。これらの文書に移動すると、移動は即座に行われ、大幅なパフォーマンスの向上につながります。

> [!NOTE]
> 先読みと先読みを効果的に使用する方法の詳細については[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) のメインページを参照してください。

各アクションフィールドは配列を格納し、配列は 1 つ以上のオブジェクトを格納します。各オブジェクトには、URL と関連の引数の集合を定義する単一のルールが格納されます。

具体的には、各オブジェクトは以下のプロパティを格納することができます。

- `"source"`
  - : ルールが適用される URL のソースを表す文字列。取りうる値は以下のとおりです。
    - `"list"`
      - : URL は特定のリストから決まります。
- `"urls"`
  - : ルールを適用する URL の一覧を表す文字列の配列。これらは絶対 URL にも相対 URL にもなります。相対 URL は、文書のベース URL からの相対 URL （文書内のインライン URL の場合）あるいは外部リソース URL からの相対 URL （外部から取得した URL の場合）で解釈されます。
- `"requires"` {{optional_inline}}

  - : ルールを解釈するブラウザーが持つ機能を表す文字列の配列で、 指定した URL にルールを適用する場合に利用できます。

    > [!WARNING]
    > 指定した条件を満たせないブラウザーでは、[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) に対応していても、先読みは自動的に失敗します。

    取りうる値は次の通りです。

    - `"anonymous-client-ip-when-cross-origin"`
      - : `"prefetch"` のみ オリジン間先読みリクエストが発行された場合に、ユーザーエージェントがクライアントの IP アドレスをオリジンのサーバーから見えないようにできる場合にのみ、ルールが一致するように指定します。これがどのように動作するのかは、ブラウザー実装に依存します。例えば、次のようになります。
        - Chrome の実装では、 Google 自身が所有するプロキシーを使って IP アドレスを隠蔽しているため、既定値では Google が制御するリファラーに対してのみ動作します（この場合、出力先の URL を Google に送信することはさらなるプライバシー漏洩にはならないため）。 Google が所有していないサイトで使用する場合、これを含むルールは `chrome://settings/preloading` で "Enhanced preloading" をオンにしているユーザーにのみ一致します。
        - 他の Chromium ベースのブラウザーは、自分自身で解決策を提供する必要があります。対象とするすべてのブラウザーで十分にテストすることをお勧めします。
        - 将来の Safari 実装では、 [iCloud Private Relay](https://support.apple.com/ja/102602) のようなものを使用する可能性があります。
        - 将来の Firefox 実装では、[Mozilla VPN](https://www.mozilla.org/ja/products/vpn/) 製品をベースにしたものを使用するかもしれません。

- `"referrer_policy"` {{optional_inline}}
  - : ルールで指定された URL をリクエストするときに使用する特定のリファラーポリシー文字列を表します - 使用可能な値については [`Referrer-Policy`](/ja/docs/Web/HTTP/Headers/Referrer-Policy) を参照してください。この目的は、参照するページが（既定で、または `Referrer-Policy` を使用して）既に保有しているポリシーよりも、投機的リクエストに特定の厳しいポリシーを設定することを許可することです。投機ルールで設定された緩いポリシーは、参照するページで設定された厳しいポリシーを上書きすることはありません。

> [!NOTE]
> 投機ルールは `<script>` 要素を使用するので、サイトに [`Content-Security-Policy`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy) の [`script-src`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) ディレクティブが指定されている場合は、明示的に許可する必要があります。これは `"inline-speculation-rules"` 値を hash- または nonce-source で追加することで行われます。

### さらなる例

先の例では、先読みと先行描画に定義された別個の投機ルールを表示させました。一連のルールで両方を定義することも可能です。

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ],
    "prerender": [
      {
        "source": "list",
        "urls": ["next3.html", "next4.html"]
      }
    ]
  }
</script>
```

また、単一の HTML ファイルに複数の一連のルールを含めることも可能です。

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next3.html", "next4.html"]
      }
    ]
  }
</script>
```

そして、単一の結果集合に複数のルールを設定することも可能です。

```js
<script type="speculationrules">
{
  "prerender": [
    {
      "source": "list",
      "urls": ["one.html"]
    },
    {
      "source": "list",
      "urls": ["two.html"]
    }
  ]
}
</script>
```

### 動的なルール挿入

下記は、投機ルールを検出し、対応している場合は、 JavaScript を介して動的に先行描画の投機ルールを追加する機能の例です。

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    prerender: [
      {
        source: "list",
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  console.log("added speculation rules to: next.html");
  document.body.append(specScript);
}
```

この[先行描画のでも](https://prerender-demos.glitch.me/)のページでは、その様子を見ることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) on developer.chrome.com (2023)
- [投機的な読み込み](/ja/docs/Web/Performance/Speculative_loading)
- [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API)
