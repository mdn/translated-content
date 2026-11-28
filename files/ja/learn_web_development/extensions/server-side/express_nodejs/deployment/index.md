---
title: "Express チュートリアル Part 7: 本番環境への展開"
short-title: "7: 展開"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Express を使用したサンプルウェブサイトの作成とテストが完了したので、公開インターネット経由でアクセスできるように、ウェブサーバーに展開しましょう。
このページでは、Express プロジェクトをホスティングする方法を説明し、本番環境の準備に必要なことの概要を示します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms">Express チュートリアル Part 6: フォームの操作</a>を含む、これまでのチュートリアルをすべて完了していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        Express アプリを本番環境に展開できる場所と方法を学ぶこと。
      </td>
    </tr>
  </tbody>
</table>

## 概要

サイトが完成したら（または公開テストを始めるのに「十分」なところまで完成したら）、自分の開発用コンピューターよりも公開されていてアクセスしやすい場所でホスティングする必要があります。

ここまでは、[開発環境](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)で作業し、Express/Node をウェブサーバーとしてローカルのブラウザーやネットワークにサイトを公開してきました。また、デバッグ情報やその他の非公開情報が露出する（保護されていない）開発用の設定でウェブサイトを実行してきました。ウェブサイトを外部でホスティングする前に、まず次のことを行う必要があります。

- Express アプリをホスティングする環境を選択する。
- プロジェクトの設定をいくつか変更する。
- ウェブサイトを配信するための本番レベルのインフラストラクチャーを設定する。

このチュートリアルでは、ホスティング先の選択肢に関する指針、Express アプリを本番環境に準備するために必要なことの簡単な概要、および地域図書館ウェブサイトをクラウドホスティングサービスの [Railway](https://railway.com/) にインストールする実例を示します。

## 本番環境とは

本番環境とは、外部から利用できるようにウェブサイトを実行するサーバーコンピューターが提供する環境です。この環境には次のものが含まれます。

- ウェブサイトを実行するコンピューターハードウェア。
- オペレーティングシステム（例: Linux、Windows）。
- ウェブサイトの作成に使用するプログラミング言語のランタイムとフレームワークライブラリー。
- ウェブサーバー、リバースプロキシー、ロードバランサーなどを含むことがある、ウェブサーバーのインフラストラクチャー。
- ウェブサイトが依存するデータベース。

サーバーコンピューターを自分の施設内に置き、高速回線でインターネットに接続することもできますが、「クラウド上」でホスティングされたコンピューターを使用する方がはるかに一般的です。これは実際には、ホスティング会社のデータセンターにある遠隔のコンピューター（場合によっては「仮想」コンピューター）でコードを実行することを意味します。遠隔サーバーは通常、一定の料金で、保証された水準のコンピューティングリソース（CPU、RAM、ストレージメモリーなど）とインターネット接続を提供します。

このような遠隔からアクセスできるコンピューティングやネットワークのハードウェアは、_Infrastructure as a Service_ (IaaS) と呼ばれます。多くの IaaS ベンダーは、特定のオペレーティングシステムをあらかじめインストールする選択肢を提供しており、その上に本番環境の他の構成要素を自分でインストールする必要があります。完全な Node のセットアップを含む場合もある、より多機能な環境を選べるベンダーもあります。

> [!NOTE]
> 構築済みの環境は必要な設定を減らせるため、ウェブサイトのセットアップが簡単になります。ただし、利用できる選択肢が使い慣れていないサーバー（またはその他の構成要素）に限られる場合や、古いバージョンの OS を基にしている場合があります。多くの場合は構成要素を自分でインストールした方が、必要なものを選べるうえに、システムの一部をアップグレードする必要があるときに、どこから始めればよいか見当をつけられます。

Express に _Platform as a Service_ (PaaS) のサービスの一部として対応しているホスティングプロバイダーもあります。このようなホスティングを使用する場合、ホスティングプラットフォームが処理してくれるため、本番環境の大部分（サーバー、ロードバランサーなど）を気にする必要はありません。ウェブアプリケーションだけに集中し、他のサーバーインフラストラクチャーを気にする必要がないため、展開は非常に簡単になります。

PaaS よりも IaaS が提供する高い柔軟性を選ぶ開発者もいれば、PaaS の保守や拡張にかかる負担の少なさを重視する開発者もいます。始めたばかりのときは、PaaS システムでウェブサイトを設定する方がずっと簡単なので、このチュートリアルではその方法を使います。

> [!NOTE]
> Node/Express を扱いやすいホスティングプロバイダーを選べば、ウェブサーバー、アプリケーションサーバー、リバースプロキシーなどのさまざまな構成を使用して Express ウェブサイトを設定する手順が提供されるはずです。例えば、[DigitalOcean の Node コミュニティドキュメント](https://www.digitalocean.com/community/tutorials?q=node)<sup>(英語)</sup>には、さまざまな構成の手順を説明するガイドが多数あります。

## ホスティングプロバイダーの選択

_Node_（および _Express_）を積極的にサポートしているか、相性がよいことで知られるホスティングプロバイダーは多数あります。これらのベンダーは、さまざまな種類の環境（IaaS、PaaS）と、さまざまな水準のコンピューティングおよびネットワークリソースを、それぞれ異なる価格で提供しています。

> [!NOTE]
> ホスティングの選択肢は多数あり、サービスや料金は時間とともに変わる可能性があります。下記にいくつか紹介しますが、ホスティングプロバイダーを選ぶ前に、これらと他の選択肢の両方を確認するとよいでしょう。

ホスティング先を選ぶ際に考慮することには、次のようなものがあります。

- サイトのアクセス量の見込みと、その需要を満たすために必要なデータやコンピューティングリソースのコスト。
- 水平スケーリング（マシンの追加）と垂直スケーリング（より高性能なマシンへのアップグレード）への対応の程度と、そのコスト。
- プロバイダーのデータセンターの所在地と、それによってアクセスが最も速くなりそうな場所。
- ホスティング先の過去の稼働時間と停止時間の実績。
- サイト管理用に提供されるツールは使いやすく、保護されているか（例えば、SFTP と FTP の違い）。
- サーバーを監視するための組み込みフレームワーク。
- 既知の制限。一部のホスティング先は、特定のサービス（メールなど）を意図的にブロックします。また、一部の料金プランでは「稼働時間」が一定の時間数に制限されたり、少量のストレージしか提供されなかったりする場合もあります。
- 追加の特典。本来なら有料となるドメイン名を無料で提供したり、TLS 証明書に対応したりするプロバイダーもあります。
- 利用を予定している「無料」プランが時間とともに期限切れになるか、また、より高価なプランへの移行コストを考えると、最初から別のサービスを使用した方がよいか。

始めたばかりのときにうれしいのは、評価やテスト向けの「無料」コンピューティング環境を提供するサイトがかなりあることです。
これらは通常、リソースがかなり制限された環境であり、導入期間が終わると期限切れになったり、他の制約があったりすることに注意する必要があります。
ただし、ホスティング環境でアクセスの少ないサイトをテストするには最適であり、サイトのアクセスが増えたときには、料金を支払ってリソースを増やす方法に簡単に移行できます。
このカテゴリーの一般的な選択肢には、[Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html)<sup>(英語)</sup> や [Microsoft Azure](https://azure.microsoft.com/ja-jp/pricing/details/app-service/linux/) があります。

ほとんどのプロバイダーは、小規模な本番サイト向けの「基本」または「趣味」プランも提供しており、より実用的な計算能力が得られ、制限も少なくなります。
[Railway](https://railway.com/)、[Heroku](https://www.heroku.com/)、[DigitalOcean](https://www.digitalocean.com/) は、比較的安価な基本コンピューティングプラン（月額 5～10 米ドル程度）を持つ、一般的なホスティングプロバイダーの例です。

> [!NOTE]
> 価格だけが選択基準ではないことを忘れないでください。
> ウェブサイトが成功した場合は、拡張性が最も重要な考慮事項になるかもしれません。

## ウェブサイトの公開準備

ウェブサイトを公開する際に主に考えるべきことは、ウェブのセキュリティとパフォーマンスです。
最低限、本番環境で別のデータベースを使用できるように設定を変更して資格情報を保護し、開発中のエラーページに含まれるスタックトレースを除去し、ログ記録を整理し、よくあるセキュリティ上の脅威を避けるために適切なヘッダーを設定する必要があります。

次の項では、アプリに加えるべき最も重要な変更の概要を説明します。

> [!NOTE]
> Express ドキュメントには、他にも役立つヒントがあります。[プロダクションのベストプラクティス: パフォーマンスと信頼性](https://expressjs.com/en/advanced/best-practice-performance/)<sup>(英語)</sup>および[プロダクションのベストプラクティス: セキュリティ](https://expressjs.com/ja/advanced/best-practice-security/)を参照してください。

### データベースの設定

ここまでのチュートリアルでは、アドレスと資格情報を [**server.js** にハードコードした](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#mongodb_への接続_2)単一の開発用データベースを使用してきました。
開発用データベースには公開されたり破損したりして困る情報が含まれていないため、これらの詳細が漏洩しても特にリスクはありません。
しかし、実際のデータ、特にユーザーの個人情報を扱う場合は、データベースの資格情報を保護することが非常に重要です。

このため、本番環境では開発用とは別のデータベースを使用し、本番用データベースの資格情報を適切に保護できるよう、ソースコードとは別に保持します。

ホスティングプロバイダーがウェブインターフェイスからの環境変数の設定に対応している場合（多くのプロバイダーが対応しています）、サーバーに環境変数からデータベース URL を取得させる方法があります。
下記では、地域図書館ウェブサイトを変更し、OS の環境変数が定義されていればそこからデータベース URI を取得し、そうでなければ開発用データベースの URL を使用するようにします。

**server.js** を開き、MongoDB 接続の変数を設定している行を探します。
次のようになっているはずです。

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

この行を次のコードに置き換えてください。このコードは `process.env.MONGODB_URI` を使用し、`MONGODB_URI` という名前の環境変数が設定されていれば、そこから接続文字列を取得します（下記のプレースホルダーの代わりに自分のデータベース URL を使用してください）。

```js
const devDbUrl =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || devDbUrl;
```

> [!NOTE]
> 本番用データベースの資格情報をソースコードと別に保持するもう 1 つの一般的な方法は、ファイルシステムに別途配置した `.env` ファイルから読み取ることです（例えば、npm の [dotenv](https://www.npmjs.com/package/dotenv)<sup>(英語)</sup> モジュールを使用して読み取ることができます）。

### NODE_ENV を "production" に設定する

`NODE_ENV` 環境変数を _production_ に設定することで、エラーページからスタックトレースを除去できます（デフォルトでは _development_ に設定されています）。この変数を _production_ に設定すると、エラーメッセージが簡潔になることに加え、ビューテンプレートや CSS 拡張から生成された CSS ファイルがキャッシュされます。テストでは、`NODE_ENV` を _production_ に設定すると、アプリのパフォーマンスが 3 倍に向上する可能性が示されています。

この変更は `export`、環境ファイル、OS の初期化システムのいずれかを使用して行うことができます。

> [!NOTE]
> これは実際にはアプリではなく環境の設定に加える変更ですが、ここで取り上げるだけの重要性があります。下記のホスティング例で、この設定方法を示します。

### 適切なログ記録

ログ記録の呼び出しは、アクセスの多いウェブサイトに影響を与える可能性があります。本番環境では、ウェブサイトの活動（トラフィックの追跡や API 呼び出しの記録など）をログに記録する必要がある場合もありますが、デバッグ目的で追加するログは最小限に抑えるべきです。

本番環境で「デバッグ」ログを最小限に抑える方法の 1 つは、環境変数の設定によってログの記録内容を制御できる [debug](https://www.npmjs.com/package/debug)<sup>(英語)</sup> のようなモジュールを使用することです。
例えば、下記のコード断片は、"author" のログを設定する方法を示しています。
`createDebug("author")` を呼び出すと、"author" _名前空間_の `debug()` 関数が作成されます。この関数が記録するすべてのメッセージには "author" が先頭に付き、`DEBUG` 環境変数に "author" が指定されている場合にのみログが記録されます。

```js
import createDebug from "debug";

const debug = createDebug("author");

// GET で著者の更新フォームを表示
export const authorUpdateGet = async (req, res, next) => {
  const author = await Author.findById(req.params.id).exec();
  if (author === null) {
    // 結果なし
    debug(`id not found on update: ${req.params.id}`);
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_form", { title: "Update Author", author });
};
```

その後、`DEBUG` 環境変数にカンマ区切りのリストとして指定することで、特定のログを有効にできます。
図のように変数を設定すると、著者と書籍のログを表示できます（ワイルドカードにも対応しています）。

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> [!NOTE]
> `debug` の呼び出しは、これまで `console.log()` や `console.error()` を使用していたログ記録の代わりに使えます。コード内の `console.log()` の呼び出しを、[debug](https://www.npmjs.com/package/debug)<sup>(英語)</sup> モジュールによるログ記録に置き換えてください。開発環境で DEBUG 変数を設定してログ記録のオンとオフを切り替え、ログにどのような影響があるか確認してください。

ウェブサイトの活動をログに記録する必要がある場合は、_Winston_ や _Bunyan_ のようなログライブラリーを使用できます。詳しくは[プロダクションのベストプラクティス: パフォーマンスと信頼性](https://expressjs.com/en/advanced/best-practice-performance/)<sup>(英語)</sup>を参照してください。

### レスポンスに gzip/deflate 圧縮を使用する

ウェブサーバーは多くの場合、クライアントに返す HTTP レスポンスを圧縮できるため、クライアントがページを取得して読み込む時間を大幅に短縮できます。使用する圧縮方法は、クライアントがリクエストで対応していると示した展開方法によって決まります（どの圧縮方法にも対応していない場合は、レスポンスは圧縮せずに送信されます）。

[compression](https://www.npmjs.com/package/compression)<sup>(英語)</sup> ミドルウェアを使用して、この機能をサイトに追加します。プロジェクトのルートで次のコマンドを実行してインストールします。

```bash
npm install compression
```

**./app.js** を開き、図のように compression ライブラリーをインポートします。`use()` メソッドで compression ライブラリーをミドルウェアチェーンに追加します（これは圧縮したいルートよりも前に置く必要があります。この場合はすべてのルートです）。

```js
import compression from "compression";

import catalogRouter from "./routes/catalog.js"; // サイトの "catalog" 部分のルートをインポート

// Express アプリケーションオブジェクトを作成
const app = express();

// …

app.use(compression()); // すべてのルートを圧縮

app.use(express.static(path.join(import.meta.dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // catalog のルートをミドルウェアチェーンに追加

// …
```

> [!NOTE]
> 本番環境でアクセスの多いウェブサイトでは、このミドルウェアは使用しません。代わりに [Nginx](https://nginx.org/) のようなリバースプロキシーを使用します。

### Helmet を使用して既知の脆弱性から保護する

[Helmet](https://www.npmjs.com/package/helmet)<sup>(英語)</sup> はミドルウェアパッケージです。よく知られたウェブの脆弱性からアプリを保護するのに役立つ、適切な HTTP ヘッダーを設定できます（設定するヘッダーや保護対象の脆弱性について詳しくは、[ドキュメント](https://helmet.js.org/)<sup>(英語)</sup>を参照してください）。

プロジェクトのルートで次のコマンドを実行してインストールします。

```bash
npm install helmet
```

**./app.js** を開き、図のように _helmet_ ライブラリーをインポートします。
次に、`use()` メソッドでモジュールをミドルウェアチェーンに追加します。

```js
import compression from "compression";
import helmet from "helmet";

// Express アプリケーションオブジェクトを作成
const app = express();

// helmet をミドルウェアチェーンに追加
// Bootstrap スクリプトの配信を許可する CSP ヘッダーを設定
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "cdn.jsdelivr.net"],
    },
  }),
);

// …
```

通常であれば、`app.use(helmet());` を追加するだけで、ほとんどのサイトに適したセキュリティ関連ヘッダーの*一部*を追加できます。
しかし、[地域図書館の基本テンプレート](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)には Bootstrap スクリプトがいくつか含まれています。
これらは、クロスサイトのスクリプトの読み込みを許可しない helmet の*デフォルトの*[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP)に違反します。
これらのスクリプトを読み込めるように、指定したドメインからのスクリプトの読み込みを許可する CSP ディレクティブを設定するよう、helmet の構成を変更します。
自分のサーバーでは、[helmet の使用手順](https://www.npmjs.com/package/helmet)<sup>(英語)</sup>に従って、必要に応じて特定のヘッダーを追加または無効化できます。

### API ルートへのレート制限の追加

[Express-rate-limit](https://www.npmjs.com/package/express-rate-limit)<sup>(英語)</sup> は、API やエンドポイントへの繰り返しのリクエストを制限するために使用できるミドルウェアパッケージです。
サイトに過剰なリクエストが送られる理由には、サービス拒否攻撃、総当たり攻撃、あるいは単に期待どおりに動作していないクライアントやスクリプトなど、さまざまなものがあります。
リクエストが多すぎることでサーバーが遅くなるパフォーマンス上の問題に加え、追加のトラフィックに対して料金が請求される可能性もあります。
このパッケージを使用すると、特定のルートまたはルートの集合に対して行えるリクエスト数を制限できます。

プロジェクトのルートで次のコマンドを実行してインストールします。

```bash
npm install express-rate-limit
```

**./app.js** を開き、図のように _express-rate-limit_ ライブラリーをインポートします。
次に、`use()` メソッドでモジュールをミドルウェアチェーンに追加します。

```js
import compression from "compression";
import helmet from "helmet";
import RateLimit from "express-rate-limit";

const app = express();

// レート制限を設定: 1 分あたり最大 20 リクエスト
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 分
  max: 20,
});
// すべてのリクエストにレート制限を適用
app.use(limiter);

// …
```

上記のコードは、すべてのリクエストを 1 分あたり 20 件に制限します（必要に応じて変更できます）。

> [!NOTE]
> サービス拒否攻撃やその他の種類の攻撃に対して、より高度な保護が必要な場合は、[Cloudflare](https://www.cloudflare.com/) のようなサードパーティサービスを使用することもできます。

#### Node のバージョン設定

Express を含む Node アプリケーションでは、**package.json** ファイルに、ホスティングプロバイダーがアプリケーションの依存関係とエントリーポイントのファイルを把握するために必要な情報がすべて含まれています。

[プロジェクトを作成した](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#プロジェクトの作成)ときに、**package.json** ですでに Node.js の最小バージョンを指定しました。

```json
{
  "engines": {
    "node": ">=24.0.0"
  }
}
```

ホスティングプロバイダーの手順を確認し、この要件を満たす対応済みの Node.js バージョンが使用されることを確認してください。環境にインストールされているバージョンは `node --version` で確認できます。

#### 依存関係の取得と再テスト

先に進む前に、サイトをもう一度テストし、これまでの変更による影響を受けていないことを確認しましょう。

まず、依存関係を取得する必要があります。プロジェクトのルートで端末を開き、次のコマンドを実行します。

```bash
npm install
```

次に、サイトを実行し（該当するコマンドは[ルートのテスト](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#ルートのテスト)を参照）、引き続き期待どおりに動作することを確認してください。

### GitHub でのアプリケーションリポジトリーの作成

多くのホスティングサービスでは、ローカルリポジトリーやクラウドベースのソースバージョン管理プラットフォームから、プロジェクトをインポートしたり同期したりできます。
これにより、展開や反復的な開発がずっと簡単になります。

このチュートリアルでは、図書館用の [GitHub](https://github.com/) アカウントとリポジトリーを設定し、**git** ツールを使用してソースコードをアップロードします。

> [!NOTE]
> すでに GitHub を使用してソースコードを管理している場合は、この手順を飛ばすことができます。
>
> ソースコード管理ツールを使用することは、ソフトウェア開発におけるよい実践です。変更を試し、必要に応じて実験中のコードと「正常に動作することが分かっているコード」を切り替えられるためです。

手順は次のとおりです。

1. <https://github.com/> にアクセスしてアカウントを作成します。
2. ログインしたら、上部ツールバーの **+** リンクをクリックし、**New repository** を選択します。
3. このフォームのすべてのフィールドに入力します。必須ではありませんが、強く推奨します。
   - 新しいリポジトリー名（例: _express-locallibrary-tutorial_）と説明（例: "Local Library website written in Express"）を入力します。
   - _Add .gitignore_ の選択リストで **Node** を選択します。
   - _Add license_ の選択リストで好みのライセンスを選択します。
   - **Initialize this repository with a README** を選択します。

   > [!WARNING]
   > デフォルトの "Public" アクセスでは、データベースのユーザー名とパスワードを含む*すべての*ソースコードがインターネット上の誰からでも見えるようになります。ソースコードが資格情報を環境変数から*のみ*読み取り、資格情報をハードコードしていないことを確認してください。
   >
   > そうでなければ、"Private" オプションを選択し、限られた人だけがソースコードを見られるようにしてください。

4. **Create repository** を押します。
5. 新しいリポジトリーのページで、緑色の **Clone or download** ボタンをクリックします。
6. 表示されるダイアログボックスのテキストフィールドから URL の値をコピーします。
   リポジトリー名に "express-locallibrary-tutorial" を使用した場合、URL は `https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git` のようになります。

GitHub にリポジトリー ("repo") が作成されたので、これをローカルコンピューターにクローン（コピー）します。

1. ローカルコンピューターに _git_ をインストールします（[公式の Git ダウンロードガイド](https://git-scm.com/downloads/)<sup>(英語)</sup>）。
2. コマンドプロンプトまたは端末を開き、先ほどコピーした URL を使用してリポジトリーをクローンします。

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   これにより、カレントディレクトリー内にリポジトリーが作成されます。

3. リポジトリーのフォルダーに移動します。

   ```bash
   cd express-locallibrary-tutorial
   ```

次に、アプリケーションのソースファイルをリポジトリーのフォルダーにコピーし、_git_ を使用してリポジトリーの一部にしてから、GitHub にアップロードします。

1. Express アプリケーションをこのフォルダーにコピーします（**node_modules/** を除きます。このフォルダーには、必要に応じて npm から取得する依存関係のファイルが含まれています）。
2. コマンドプロンプトまたは端末を開き、`add` コマンドですべてのファイルを git に追加します。

   ```bash
   git add -A
   ```

3. `status` コマンドを使用し、`commit` しようとしているファイルがすべて正しいことを確認します（バイナリーや一時ファイルなどではなく、ソースファイルを含めます）。
   下記のような表示になるはずです。

   ```bash
   git status
   ```

   ```plain
   On branch main
   Your branch is up-to-date with 'origin/main'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           new file:   ...
   ```

4. 問題がなければ、ファイルをローカルリポジトリーに `commit` します。
   これは変更を承認し、ローカルリポジトリーの正式な一部にすることに相当します。

   ```bash
   git commit -m "First version of application moved into GitHub"
   ```

5. この時点では、リモートリポジトリーは変更されていません。
   最後に、次のコマンドを使用してローカルリポジトリーをリモートの GitHub リポジトリーに同期 (`push`) します。

   ```bash
   git push origin main
   ```

この操作が完了したら、GitHub でリポジトリーを作成したページに戻って更新すると、アプリケーション全体がアップロードされたことを確認できます。ファイルが変更されるたびに、この追加、コミット、プッシュのサイクルでリポジトリーを更新し続けることができます。

ここで「変更を加える前」のプロジェクトをバックアップしておくとよいでしょう。次の節から加える変更には、どのホスティングサービスへの展開にも（または開発にも）役立つものと、そうでないものがあるためです。
コマンドラインで `git` を使用してバックアップできます。

```bash
# 現在のブランチ (main) から vanilla_deployment ブランチを作成
git checkout -b vanilla_deployment

# 新しいブランチを GitHub にプッシュ
git push origin vanilla_deployment

# main に戻る
git checkout main

# これ以降の変更は新しいブランチで行う
git pull upstream main # GitHub から最新の変更をマージ
git checkout -b my_changes # 新しいブランチを作成
```

> [!NOTE]
> Git は非常に強力です。
> 詳しくは [Git の学習](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)<sup>(英語)</sup>を参照してください。

## 例: Railway でのホスティング

この節では、[Railway](https://railway.com/) に地域図書館をインストールする方法を実例で示します。

> [!NOTE]
> MDN は、無料プランの提供を終了した複数のホスティングサービスから、このプロジェクトを移行してきました。
> 現在のホスティング先として、安価な趣味向けプランのある Railway を使用することにしました。
> ほとんどのサービスの展開方法は似ているため、下記の手順は、選択したプラットフォームでプロジェクトを公開する際にも役立つはずです。

### Railway を選ぶ理由

Railway は、いくつかの理由から魅力的なホスティング先の選択肢です。

- Railway がインフラストラクチャーの大部分を処理するため、自分で行う必要がありません。
  サーバー、ロードバランサー、リバースプロキシーなどを気にせずに済むため、始めるのがずっと簡単です。
- Railway は[開発と展開における開発者体験を重視](https://docs.railway.com/platform/compare-to-heroku)<sup>(英語)</sup>しており、他の多くの選択肢よりも速く、無理なく学ぶことができます。
- Railway の使用を通じて学ぶスキルや概念は、他にも応用できます。
  Railway には優れた新機能もありますが、他の一般的なホスティングサービスでも、同じ考え方や手法が多く使用されています。
- [Railway のドキュメント](https://docs.railway.com/)<sup>(英語)</sup>は明確で充実しています。
- 比較的安価な [Hobby プラン](https://railway.com/pricing)<sup>(英語)</sup>があります。
- サービスは非常に信頼性が高いようで、気に入って使い続ける場合も、料金が予測しやすく、アプリのスケーリングはとても簡単です。

時間をかけて、Railway が[自分のウェブサイトに適している](#ホスティングプロバイダーの選択)かどうかを判断してください。

### Railway の仕組み

ウェブアプリケーションは、それぞれ分離された独立した仮想コンテナー内で実行されます。
アプリケーションを実行するために、Railway は適切な環境と依存関係を設定し、起動方法を把握する必要があります。

Railway は、ウェブアプリケーションのさまざまなフレームワークや環境を「共通の慣例」の使用に基づいて自動的に認識し、インストールできるため、これを簡単に行えます。
例えば、Railway は **package.json** ファイルがあることから Node アプリケーションを認識し、「ロック」ファイルからビルドに使用するパッケージマネージャーを判断できます。
例えば、アプリケーションに **package-lock.json** ファイルがあれば、Railway はパッケージのインストールに _npm_ を使用すると判断し、**yarn.lock** があれば _yarn_ を使用すると判断します。
すべての依存関係をインストールすると、Railway はパッケージファイル内で "build" と "start" という名前のスクリプトを探し、それらを使用してコードをビルド、実行します。

> [!NOTE]
> Railway は [Nixpacks](https://nixpacks.com/docs)<sup>(英語)</sup> を使用して、さまざまなプログラミング言語で書かれたウェブアプリケーションフレームワークを認識します。
> このチュートリアルではこれ以上の知識は必要ありませんが、Node アプリケーションの展開オプションについては [Nixpacks Node](https://nixpacks.com/docs/providers/node)<sup>(英語)</sup>で詳しく確認できます。

アプリケーションの実行が始まると、[環境変数](https://docs.railway.com/variables)<sup>(英語)</sup>で提供される情報を使用して、自分自身を設定できます。
例えば、データベースを使用するアプリケーションは、変数を使用してアドレスを取得する必要があります。
データベースサービス自体は、Railway または他のプロバイダーでホスティングできます。

開発者は Railway のサイトと、専用の[コマンドラインインターフェイス (CLI)](https://docs.railway.com/cli)<sup>(英語)</sup> ツールを使用して Railway を操作します。
CLI を使用すると、ローカルの GitHub リポジトリーを Railway プロジェクトに関連付けたり、ローカルブランチから公開サイトにリポジトリーをアップロードしたり、実行中のプロセスのログを調べたり、設定変数を設定・取得したりするなど、さまざまなことができます。
特に便利な機能の 1 つは、CLI を使用して、公開中のプロジェクトと同じ環境変数でローカルプロジェクトを実行できることです。

Railway にアプリを展開するために必要な概要は以上です。
次に、Railway アカウントを設定し、ウェブサイトとデータベースをインストールして、Railway クライアントを試します。

### Railway アカウントの取得

Railway を使い始めるには、まずアカウントを作成する必要があります。

- [railway.com](https://railway.com/) にアクセスし、上部ツールバーの **Login** リンクをクリックします。
- ポップアップで GitHub を選択し、GitHub の資格情報でログインします。
- その後、メールを確認してアカウントを認証する必要がある場合があります。
- これで Railway.com のダッシュボードにログインします: <https://railway.com/dashboard>。

### GitHub から Railway に展開する

次に、GitHub から図書館を展開するように Railway を設定します。
まずサイトの上部メニューから **Dashboard** を選択し、次に **New Project** ボタンを選択します。

![新しいプロジェクトのボタンが表示された Railway のダッシュボード](railway_new_project_button.png)

Railway は、新しいプロジェクトの選択肢の一覧を表示します。これには、まず GitHub アカウントに作成されるテンプレートからプロジェクトを展開する選択肢や、複数のデータベースが含まれます。
**Deploy from GitHub repo** を選択します。

![Railway の展開オプションのポップアップで Deploy from GitHub repo が強調表示されている](railway_new_project_button_deploy_github_repo.png)

セットアップ中に Railway と共有した GitHub リポジトリーのすべてのプロジェクトが表示されます。
地域図書館用の GitHub リポジトリー `<user-name>/express-locallibrary-tutorial` を選択します。

![展開可能な GitHub リポジトリーを表示する Railway のポップアップ](railway_new_project_button_deploy_github_selectrepo.png)

**Deploy Now** を選択して展開を確定します。

![プロジェクトの展開を選択できる確認画面](railway_new_project_deploy_confirm.png)

Railway はプロジェクトを読み込んで展開し、展開タブに進行状況を表示します。
展開が正常に完了すると、下記のような画面が表示されます。

![展開済みプロジェクトの Deployments タブを表示する Railway ダッシュボード](railway_project_deploy.png)

次に _Settings_ タブを選択し、Domains の節までスクロールして **Generate Domain** ボタンを押します。

![ドメインを生成するボタンが表示された Railway のプロジェクト設定タブ](railway_project_generate_domain.png)

これによりサイトが公開され、下記のようにボタンの位置にドメインが表示されます。

![地域図書館サイトへのリンクが表示された Railway のプロジェクト設定タブ](railway_project_domain.png)

ドメインの URL を選択して図書館アプリケーションを開きます。
本番用データベースを指定していないため、地域図書館は開発用データを使用して開くことに注意してください。

### MongoDB データベースの準備と接続

次に、開発用データの代わりに使用する、本番用の MongoDB データベースを作成しましょう。
データベースは Railway のアプリケーションプロジェクトの一部として作成しますが、別のプロジェクトに作成したり、開発用データベースと同様に本番用データにも _MongoDB Atlas_ データベースを使用したりすることもできます。

Railway で、サイトの上部メニューから **Dashboard** を選択し、アプリケーションプロジェクトを選択します。
この段階では、アプリケーション用のサービスが 1 つだけ含まれています（これを選択して、サービスの変数やその他の詳細を設定できます）。
現在のプロジェクトにサービスを追加するための **New** ボタンを選択します。

![新しいサービスを追加するボタンが強調表示された Railway プロジェクト](railway_project_open_no_database.png)

追加するサービスの種類を尋ねられたら、**Database** を選択します。

![データベース、GitHub リポジトリー、空のサービスなど、新しいサービスの選択肢を示す Railway のポップアップ](railway_database_add.png)

次に **Add MongoDB** を選択し、データベースの追加を開始します。

![Postgres、MySQL、MongoDB など、選択可能なデータベースを示す Railway のポップアップ](railway_database_select_type.png)

Railway は、同じプロジェクトに空のデータベースを含むサービスを準備します。
完了すると、プロジェクトビューにアプリケーションとデータベースの両方のサービスが表示されます。

![アプリケーションとデータベースのサービスを含む Railway プロジェクト](railway_project_two_services.png)

MongoDB サービスを選択し、データベースの情報を表示します。
_Variables_ タブを開き、"Mongo_URL" をコピーします（これはデータベースのアドレスです）。

![データベースへの接続に必要な URL が表示された Railway のデータベース設定画面](railway_mongodb_connect.png)

図書館アプリケーションからアクセスできるようにするには、環境変数を使用してこれをアプリケーションプロセスに追加する必要があります。
まず、アプリケーションサービスを開きます。
次に _Variables_ タブを選択し、**New Variable** ボタンを押します。

変数名 `MONGODB_URI` と、コピーしたデータベースの接続 URL を入力します（`MONGODB_URI` は、データベースアドレスの読み取り元として[アプリケーションに設定した](#データベースの設定)環境変数の名前です）。
下記のような画面になります。

![MONGODB_URI 変数とアドレスを追加している Railway の変数画面](railway_variables_database_url.png)

**Add** を選択して変数を追加します。

Railway は変数を更新するとアプリを再起動します。ここでホームページを確認すると、上記の変更によって新しい（空の）データベースを使用するようになったため、オブジェクト数はゼロと表示されるはずです。

### その他の設定変数

前の節で説明したように、パフォーマンスを改善し、簡潔なエラーメッセージを生成するには、[NODE_ENV を "production" に設定する](#node_env_を_production_に設定する)必要があります。これは `MONGODB_URI` 変数を設定したのと同じ画面で行えます。

アプリケーションサービスを開きます。
次に _Variables_ タブを選択し、`MONGODB_URI` がすでに定義されていることを確認して、**New Variable** ボタンを押します。

![New Variable ボタンが強調表示された Railway の変数タブ](railway_variables_new.png)

新しい変数の名前として `NODE_ENV`、環境の名前として `production` を入力します。
次に **Add** ボタンを押します。

![新しい NODE_ENV 変数を "production" に設定している Railway の変数タブ](railway_variables_new_node_env.png)

これで、地域図書館アプリケーションの本番環境用のセットアップと設定が完了しました。
ウェブサイトのインターフェイスからデータを追加でき、開発中と同じように動作するはずです（ただし、無効なページで公開されるデバッグ情報は少なくなります）。

> [!NOTE]
> テスト用のデータを追加するだけなら、[Express チュートリアル Part 3: データベースの使用（Mongoose を使用）の「テスト — いくつかのアイテムの作成」](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#テスト_—_いくつかのアイテムの作成)で説明した `populatedb` スクリプトを（MongoDB の本番用データベース URL とともに）使用することもできます。

### クライアントのインストール

[こちらの手順](https://docs.railway.com/cli)<sup>(英語)</sup>に従い、ローカルのオペレーティングシステム用の Railway クライアントをダウンロードしてインストールします。

クライアントをインストールすると、コマンドを実行できるようになります。
特に重要な操作には、コンピューターのカレントディレクトリーを関連付けられた Railway プロジェクトに展開すること（GitHub にアップロードする必要はありません）や、本番サーバーと同じ設定でプロジェクトをローカルで実行することがあります。

端末に次のコマンドを入力すると、使用可能なすべてのコマンドの一覧を取得できます。

```bash
railway help
```

### デバッグ

Railway クライアントは、ログの末尾を表示する logs コマンドを提供しています（より完全なログは各プロジェクトのサイトで確認できます）。

```bash
railway logs
```

## まとめ

これで Express アプリを本番環境に設定するチュートリアルと、Express の使い方に関する一連のチュートリアルは終了です。お役に立てば幸いです。完全に実装された[ソースコードを GitHub で確認](https://github.com/mdn/express-locallibrary-tutorial)<sup>(英語)</sup>できます。

## 関連情報

- [プロダクションののベストプラクティス: パフォーマンスと信頼性](https://expressjs.com/en/advanced/best-practice-performance/)<sup>(英語)</sup>（Express ドキュメント）
- [プロダクションののベストプラクティス: セキュリティ](https://expressjs.com/ja/advanced/best-practice-security/)（Express ドキュメント）
- Railway ドキュメント
  - [CLI](https://docs.railway.com/cli)<sup>(英語)</sup>

- DigitalOcean
  - [Express](https://www.digitalocean.com/community/tutorials?q=express)<sup>(英語)</sup> のチュートリアル
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js)<sup>(英語)</sup> のチュートリアル

- Heroku
  - [Heroku で Node.js を使い始める](https://devcenter.heroku.com/articles/getting-started-with-nodejs)<sup>(英語)</sup>（Heroku ドキュメント）
  - [Heroku への Node.js アプリケーションの展開](https://devcenter.heroku.com/articles/deploying-nodejs)<sup>(英語)</sup>（Heroku ドキュメント）
  - [Heroku の Node.js 対応](https://devcenter.heroku.com/articles/nodejs-support)<sup>(英語)</sup>（Heroku ドキュメント）
  - [Node.js アプリケーションの並行処理の最適化](https://devcenter.heroku.com/articles/node-concurrency)<sup>(英語)</sup>（Heroku ドキュメント）
  - [Heroku の仕組み](https://devcenter.heroku.com/articles/how-heroku-works)<sup>(英語)</sup>（Heroku ドキュメント）
  - [Dyno と Dyno Manager](https://devcenter.heroku.com/articles/dynos)<sup>(英語)</sup>（Heroku ドキュメント）
  - [設定と設定変数](https://devcenter.heroku.com/articles/config-vars)<sup>(英語)</sup>（Heroku ドキュメント）
  - [制限](https://devcenter.heroku.com/articles/limits)<sup>(英語)</sup>（Heroku ドキュメント）

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
