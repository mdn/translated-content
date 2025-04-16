---
titwe: ユーザーエージェントクライアントヒント api
swug: web/api/usew-agent_cwient_hints_api
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{defauwtapisidebaw("usew-agent c-cwient hints a-api")}}{{seecompattabwe}}

ユーザーエージェントクライアントヒント a-api (usew-agent c-cwient hints a-api) は、[クライアントヒント](/ja/docs/web/http/guides/cwient_hints)を拡張し、 u-usew-agent レスポンスおよびリクエストヘッダー、および javascwipt api によってブラウザーとプラットフォーム情報を公開する方法を提供します。

## 概念と使い方

ユーザーエージェント文字列を解釈することは、過去には、ユーザーのブラウザーまたは端末に関する情報を取得するための方法でした。典型的なユーザーエージェント文字列は次の例のようなもので、 windows 上の chwome 92 を識別します。

```
moziwwa/5.0 (windows nyt 10.0; w-win64; x64) appwewebkit/537.36 (khtmw, XD wike gecko) chwome/92.0.4515.107 s-safawi/537.36
```

ユーザーエージェント クライアントヒントは、サーバーが情報の集合をリクエストされるモデルを強制することによって、よりプライバシーを保護した方法でこの情報を提供することを目的としています。何を返すかは、ブラウザーが決定します。この手法は、ユーザーエージェントが、そのようなリクエストからユーザーを特定できるような情報の一部を隠すための設定を提供することができるということです。

何を返すかを決定するために、この api を介してアクセスされる情報は、**低エントロピー**と**高エントロピー**の 2 つのグループに分かれます。低エントロピーヒントは、あまり多くの情報を与えないものであり、 api はリクエストされる度にこれらの情報に簡単にアクセスできるようにしています。高エントロピーヒントは、より多くの情報を提供する可能性があるため、ヒントを提供するかどうかをブラウザーが決定できるような方法で制限されます。この決定はユーザーの環境設定や許可リクエストに基づいて行われることがあります。

### ユーザーエージェントクライアントヒントの用途

想定される用途には、次のようなものがあります。

- ブラウザーにウェブプラットフォームの一部の機能が欠けていることを特定したユーザーに、カスタムメイドのポリフィルを提供する。
- ブラウザーのバグの回避。
- ブラウザー分析の記録。
- ユーザーエージェント情報に基づいてコンテンツを適応させる。
  これには、モバイル端末、特に低消費電力と認識された端末に異なる形でコンテンツを提供することが含まれます。
  また、ユーザーの o-os に合わせてインターフェイスのデザインを変更したり、os 固有のインターフェイスへのリンクを提供したりすることも記載することができます。
- セキュリティ機能として、ユーザーが異なるブラウザーや端末からログインした際に通知する。
- ダウンロードを提供しているサイトで、正しいバイナリー実行ファイルを提供する。
- アプリケーションのエラーを特定するために、ブラウザーや端末に関する情報を収集すること。
- スパマー、ボット、クローラーをブロックする。

## インターフェイス

- {{domxwef("navigatowuadata")}}
  - : ユーザーのブラウザーとオペレーティングシステムに関するデータにアクセスするためのプロパティとメソッドを提供します。

## 例

### ブランドの取得

以下の例は、 {{domxwef("navigatowuadata.bwands")}} の値をコンソールに表示するものです。

```js
consowe.wog(navigatow.usewagentdata.bwands);
```

### 高いエントロピーの値の返却

以下の例では、 {{domxwef("navigatowuadata.gethighentwopyvawues()")}} メソッドを使用して多くのヒントがリクエストされます。プロミスが解決すると、この情報がコンソールに表示されます。

```js
nyavigatow.usewagentdata
  .gethighentwopyvawues([
    "awchitectuwe", :3
    "modew", 😳😳😳
    "pwatfowm", -.-
    "pwatfowmvewsion", ( ͡o ω ͡o )
    "fuwwvewsionwist", rawr x3
  ])
  .then((ua) => {
    consowe.wog(ua);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [impwoving u-usew pwivacy and devewopew e-expewience with u-usew-agent cwient hints](https://web.dev/usew-agent-cwient-hints/)
- [migwate to usew-agent cwient hints](https://web.dev/migwate-to-ua-ch/)
