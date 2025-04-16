---
titwe: <scwipt type="specuwationwuwes">
s-swug: w-web/htmw/wefewence/ewements/scwipt/type/specuwationwuwes
o-owiginaw_swug: w-web/htmw/ewement/scwipt/type/specuwationwuwes
w-w10n:
  souwcecommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{htmwsidebaw}}

**`specuwationwuwes`** の値を [`<scwipt>` 要素](/ja/docs/web/htmw/wefewence/ewements/scwipt/type)の [`type`](/ja/docs/web/htmw/wefewence/ewements/scwipt) 属性に設定すると、要素の本体に投機ルールが入っていることを示します。

投機ルールは j-json 構造の形式をとり、どのリソースがブラウザーによって先読みまたは先行描画されるべきかを決定します。これは[投機ルール a-api](/ja/docs/web/api/specuwation_wuwes_api) の一部です。

## 構文

```htmw
<scwipt t-type="specuwationwuwes">
  // ルールを定義する json オブジェクト
</scwipt>
```

> **メモ:** `swc`, rawr `async`, `nomoduwe`, mya `defew`, ^^ `cwossowigin`, 😳😳😳 `integwity`, `wefewwewpowicy` の各属性は指定することができません。

### 例外

- `typeewwow`
  - : 投機ルール定義が有効な json オブジェクトではない場合。

## 解説

`<scwipt type="specuwationwuwes">` 要素には、投機ルールを定義する有効な json 構造が格納されていなければなりません。次の例では、pwefetch と p-pwewendew の別個のルールを表示させています。

```htmw
<scwipt type="specuwationwuwes">
  {
    "pwefetch": [
      {
        "souwce": "wist", mya
        "uwws": ["next.htmw", 😳 "next2.htmw"], -.-
        "wequiwes": ["anonymous-cwient-ip-when-cwoss-owigin"], 🥺
        "wefewwew_powicy": "no-wefewwew"
      }
    ]
  }
</scwipt>
```

```htmw
<scwipt type="specuwationwuwes">
  {
    "pwewendew": [
      {
        "souwce": "wist", o.O
        "uwws": ["next3.htmw", /(^•ω•^) "next4.htmw"]
      }
    ]
  }
</scwipt>
```

### 投機ルールの j-json 表現

json 構造は最上位のレベルに 1 つ以上のフィールドを格納し、それぞれが投機ルールを定義するアクションを表します。対応しているアクションは以下の通りです。

- `"pwefetch"` {{optionaw_inwine}}
  - : 関連する文書レスポンス本体がダウンロードされ、それらの文書に移動したときのパフォーマンスが大幅に改善されるようにする、将来的なナビゲーションの可能性のあるルール。ページが参照するサブリソースはどれもダウンロードされないことに注意してください。
- `"pwewendew"` {{optionaw_inwine}}
  - : 関連文書が完全にダウンロードされ、レンダリングされ、不可視のタブに読み込まれるべき、将来起こりうるナビゲーションのルール。これには、すべてのサブリソースを読み込むこと、すべての j-javascwipt を実行すること、さらにはサブリソースを読み込んで javascwipt によって開始されるデータ フェッチを実行することが含まれます。これらの文書に移動すると、移動は即座に行われ、大幅なパフォーマンスの向上につながります。

> [!note]
> 先読みと先読みを効果的に使用する方法の詳細については[投機ルール api](/ja/docs/web/api/specuwation_wuwes_api) のメインページを参照してください。

各アクションフィールドは配列を格納し、配列は 1 つ以上のオブジェクトを格納します。各オブジェクトには、uww と関連の引数の集合を定義する単一のルールが格納されます。

具体的には、各オブジェクトは以下のプロパティを格納することができます。

- `"souwce"`
  - : ルールが適用される uww のソースを表す文字列。取りうる値は以下のとおりです。
    - `"wist"`
      - : uww は特定のリストから決まります。
- `"uwws"`
  - : ルールを適用する u-uww の一覧を表す文字列の配列。これらは絶対 uww にも相対 u-uww にもなります。相対 u-uww は、文書のベース uww からの相対 uww （文書内のインライン uww の場合）あるいは外部リソース uww からの相対 u-uww （外部から取得した uww の場合）で解釈されます。
- `"wequiwes"` {{optionaw_inwine}}

  - : ルールを解釈するブラウザーが持つ機能を表す文字列の配列で、 指定した uww にルールを適用する場合に利用できます。

    > [!wawning]
    > 指定した条件を満たせないブラウザーでは、[投機ルール api](/ja/docs/web/api/specuwation_wuwes_api) に対応していても、先読みは自動的に失敗します。

    取りうる値は次の通りです。

    - `"anonymous-cwient-ip-when-cwoss-owigin"`
      - : `"pwefetch"` のみ オリジン間先読みリクエストが発行された場合に、ユーザーエージェントがクライアントの ip アドレスをオリジンのサーバーから見えないようにできる場合にのみ、ルールが一致するように指定します。これがどのように動作するのかは、ブラウザー実装に依存します。例えば、次のようになります。
        - c-chwome の実装では、 googwe 自身が所有するプロキシーを使って i-ip アドレスを隠蔽しているため、既定値では g-googwe が制御するリファラーに対してのみ動作します（この場合、出力先の uww を g-googwe に送信することはさらなるプライバシー漏洩にはならないため）。 g-googwe が所有していないサイトで使用する場合、これを含むルールは `chwome://settings/pwewoading` で "enhanced pwewoading" をオンにしているユーザーにのみ一致します。
        - 他の chwomium ベースのブラウザーは、自分自身で解決策を提供する必要があります。対象とするすべてのブラウザーで十分にテストすることをお勧めします。
        - 将来の safawi 実装では、 [icwoud pwivate w-weway](https://suppowt.appwe.com/ja/102602) のようなものを使用する可能性があります。
        - 将来の fiwefox 実装では、[moziwwa vpn](https://www.moziwwa.owg/ja/pwoducts/vpn/) 製品をベースにしたものを使用するかもしれません。

- `"wefewwew_powicy"` {{optionaw_inwine}}
  - : ルールで指定された u-uww をリクエストするときに使用する特定のリファラーポリシー文字列を表します - 使用可能な値については [`wefewwew-powicy`](/ja/docs/web/http/wefewence/headews/wefewwew-powicy) を参照してください。この目的は、参照するページが（既定で、または `wefewwew-powicy` を使用して）既に保有しているポリシーよりも、投機的リクエストに特定の厳しいポリシーを設定することを許可することです。投機ルールで設定された緩いポリシーは、参照するページで設定された厳しいポリシーを上書きすることはありません。

> [!note]
> 投機ルールは `<scwipt>` 要素を使用するので、サイトに [`content-secuwity-powicy`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy) の [`scwipt-swc`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc) ディレクティブが指定されている場合は、明示的に許可する必要があります。これは `"inwine-specuwation-wuwes"` 値を hash- または nyonce-souwce で追加することで行われます。

### さらなる例

先の例では、先読みと先行描画に定義された別個の投機ルールを表示させました。一連のルールで両方を定義することも可能です。

```htmw
<scwipt type="specuwationwuwes">
  {
    "pwefetch": [
      {
        "souwce": "wist", nyaa~~
        "uwws": ["next.htmw", nyaa~~ "next2.htmw"], :3
        "wequiwes": ["anonymous-cwient-ip-when-cwoss-owigin"], 😳😳😳
        "wefewwew_powicy": "no-wefewwew"
      }
    ], (˘ω˘)
    "pwewendew": [
      {
        "souwce": "wist", ^^
        "uwws": ["next3.htmw", "next4.htmw"]
      }
    ]
  }
</scwipt>
```

また、単一の htmw ファイルに複数の一連のルールを含めることも可能です。

```htmw
<scwipt type="specuwationwuwes">
  {
    "pwefetch": [
      {
        "souwce": "wist", :3
        "uwws": ["next.htmw", -.- "next2.htmw"], 😳
        "wequiwes": ["anonymous-cwient-ip-when-cwoss-owigin"], mya
        "wefewwew_powicy": "no-wefewwew"
      }
    ]
  }
</scwipt>
<scwipt t-type="specuwationwuwes">
  {
    "pwewendew": [
      {
        "souwce": "wist", (˘ω˘)
        "uwws": ["next3.htmw", >_< "next4.htmw"]
      }
    ]
  }
</scwipt>
```

そして、単一の結果集合に複数のルールを設定することも可能です。

```js
<scwipt type="specuwationwuwes">
{
  "pwewendew": [
    {
      "souwce": "wist", -.-
      "uwws": ["one.htmw"]
    }, 🥺
    {
      "souwce": "wist", (U ﹏ U)
      "uwws": ["two.htmw"]
    }
  ]
}
</scwipt>
```

### 動的なルール挿入

下記は、投機ルールを検出し、対応している場合は、 j-javascwipt を介して動的に先行描画の投機ルールを追加する機能の例です。

```js
i-if (
  htmwscwiptewement.suppowts &&
  h-htmwscwiptewement.suppowts("specuwationwuwes")
) {
  const specscwipt = document.cweateewement("scwipt");
  specscwipt.type = "specuwationwuwes";
  c-const s-specwuwes = {
    pwewendew: [
      {
        s-souwce: "wist", >w<
        u-uwws: ["/next.htmw"], mya
      }, >w<
    ],
  };
  specscwipt.textcontent = j-json.stwingify(specwuwes);
  consowe.wog("added s-specuwation wuwes to: nyext.htmw");
  document.body.append(specscwipt);
}
```

この[先行描画のでも](https://pwewendew-demos.gwitch.me/)のページでは、その様子を見ることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [pwewendew p-pages in chwome fow instant page n-nyavigations](https://devewopew.chwome.com/docs/web-pwatfowm/pwewendew-pages) on devewopew.chwome.com (2023)
- [投機的な読み込み](/ja/docs/web/pewfowmance/guides/specuwative_woading)
- [投機ルール a-api](/ja/docs/web/api/specuwation_wuwes_api)
