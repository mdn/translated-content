---
title: 互換性一覧表とブラウザー互換性データリポジトリー (BCD)
slug: MDN/Structures/Compatibility_tables
tags:
  - ガイド
  - MDN メタ
  - 構造
  - ブラウザーの互換性
  - 互換性一覧表
browser-compat: api.AbortController
translation_of: MDN/Structures/Compatibility_tables
---
{{MDNSidebar}}

MDN には、オープンなウェブ文書のための互換性一覧表の標準形式があります。これは、すべてのブラウザーにわたって共有される DOM, HTML, CSS, JavaScript, SVG などの技術の文書で使用されます。この記事は、作成した互換性一覧表をデータベースにどのように追加して維持するか、また、一覧表を記事に統合する方法についての「始め方」のガイドです。

より高度なドキュメントや、データを表現するために使用される手続きや JSON スキーマの最新の変更点については、データリポジトリーの[協力者ガイド](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md)や[データガイドラインのガイド](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines.md)をご覧ください。

質問や問題が見つかった場合は、[助けを求める](/ja/docs/MDN/Contribute/Getting_started#step_4_ask_for_help)をご利用ください。

## データリポジトリーにアクセスする方法

データは GitHub リポジトリーに保存されています。 <https://github.com/mdn/browser-compat-data> を参照してください。アクセスするには GitHub アカウントを取得し、 browser-compat-data を自分のアカウントでフォーク (fork) し、フォークしたものをローカルマシンにクローン (clone) する必要があります。

## データを追加する準備

新しいデータを追加する前に、フォークがメインリポジトリーの最新である（同じ内容を含む）ことを確認し、フォーク内に追加を格納するための新しいブランチ (branch) を作成し、そのブランチをローカルのクローンにプル (pull) すれば、その中で作業を始めることができます。

フォークが最新であることを、次のように簡単な方法で確認してみましょう。

### メインの browser-compat-data リポジトリーをリモートとして追加

端末またはコマンドラインでフォークをローカルにクローンした場所へ行き、次のようにしてリモートにメイン (upstream) リポジトリーを指すよう追加します（これを行う必要があるのは一度だけです）。

```bash
git remote add upstream https://github.com/mdn/browser-compat-data.git
```

これをやったかどうか自信がない場合は、次のようするとリポジトリーがどのリモートを指しているかを確認することができます。

```bash
git remote -v
```

### リモートのコンテンツでフォークを更新

では、フォークを更新したいときは、次のようにできます。

1. main ブランチにいることを確認します。

    ```bash
    git checkout main
    ```

2. 以下のように更新されたリポジトリーのコンテンツをフェッチ (fetch) します。

    ```bash
    git fetch upstream
    ```

3. 自分の main ブランチの内容を公式のリポジトリーのコンテンツでリベース (rebase) します。

    ```bash
    git rebase upstream/main
    ```

4. これらの更新を、次のようにしてリモートのフォークにプッシュして書き戻します。

    ```bash
    git push
    ```

### 作業用の新しいブランチの作成

次に、自分のリモートフォーク（`https://github.com/ユーザー名/browser-compat-data`となる）へ行き、以下の手順で新しいブランチを作成します。変更したい内容をここに追加していくことになります。

1. "Branch: Main" ボタンをクリックします。
2. 新しいブランチの名前を "Find or create a branch..." と書かれたところに入力します。
3. "Create branch _ブランチ名_ from Main" と書かれたボタンを押します。

例えば、 WebVR API についてデータを追加したい場合 "webvr" という名前がブランチ名として考えられるでしょう。

### 新しいブランチへの切り替え

ここから先は作業が端末またはコマンドラインに戻ります。ローカルにクローンしたものを更新して新しく作成したブランチを使えるようにするには、下のコマンドを使います。

```bash
git pull
```

そして以下のように新しく作成したブランチに切り替えます。

```bash
git checkout ブランチ名
```

これでデータを追加するための準備が完了しました。

## データの追加

データを追加するには、新たに互換性データを書いたファイルを作成する必要があります。作成する必要があるファイルは、どの技術分野について作業しようとするかによって異なります。

- **[HTML](/ja/docs/Web/HTML):** HTML の要素ごとに一つのファイルが [browser-compat-data/html/elements](https://github.com/mdn/browser-compat-data/tree/main/html/elements) に格納されています。ファイル名は要素の名前をすべて小文字でつけてください。 例) `div.json`
- **[CSS](/ja/docs/Web/CSS):** CSS のプロパティないしセレクターごとに一つのファイルが [browser-compat-data/css](https://github.com/mdn/browser-compat-data/tree/main/css) 以下の適切なディレクトリに格納されています。ファイル名はその機能の名前をすべて小文字でつけてください。 例) `background-color.json`, `hover.json`
- **[JS](/ja/docs/Web/JavaScript):** JavaScript オブジェクトごとに一つのファイルが [browser-compat-data/javascript/builtins](https://github.com/mdn/browser-compat-data/tree/main/javascript/builtins) に格納されています。ファイル名は大文字小文字を含めて完全にオブジェクト名と一致させてください。 例) `Date.json`, `InternalError.json`
- **[APIs](/ja/docs/Web/API):** API のインターフェイスごとに一つのファイルが [browser-compat-data/api](https://github.com/mdn/browser-compat-data/tree/main/api) に格納されています。ファイル名は大文字小文字を含めて完全にインターフェイス名と一致させてください。 例) WebVR API には `VRDisplay.json` や `VRDisplayCapabilities.json` などがあります。

作成するファイルは、このリポジトリーに含まれているスキーマで定義されている構造に従う必要があります。[詳細なスキーマの説明はこちら](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md)で見ることができます。

### 基本的な互換性データの構造

では例を見ていきましょう。例として CSS プロパティの JSON ファイルに求められる基本構造を次に示します。

```json
{
  "css": {
    "properties": {
      "border-width": {
        "__compat": {
          ...
        }
      }
    }
  }
}
```

まず `css` オブジェクトがあります。その中に `properties` オブジェクトがあります。 `properties` オブジェクトの中には、互換性データとして定義したい特定の機能につき一つのメンバーが必要です。それぞれのメンバーは `__compat` をメンバーに持ち、この中に実際のデータを記述します。

上記のデータは [border-width.json](https://github.com/mdn/browser-compat-data/blob/main/css/properties/border-width.json) にあります。 [MDN で表示された border-width の表](/ja/docs/Web/CSS/border-width#browser_compatibility)と見比べてみてください。

他の種類の機能についても同様ですが、オブジェクトの名前が異なります。

- CSS セレクターは CSS プロパティと基本的に同様ですが、最上位のオブジェクト構造が `css.properties` ではなく `css.selectors` になります。例として [cue.json](https://github.com/mdn/browser-compat-data/blob/main/css/selectors/cue.json) を見てください。
- HTML についても基本的に同様ですが、最上位のオブジェクト構造が `html.elements` です。例として [article.json](https://github.com/mdn/browser-compat-data/blob/main/html/elements/article.json) を見てください。
- JavaScript の組込みオブジェクトについての最上位のオブジェクト構造は `javascript.builtins` です。例として [Array.json](https://github.com/mdn/browser-compat-data/blob/main/javascript/builtins/Array.json) を見てください。

HTML や CSS、 JavaScript のページにおいては、普通一つだけの機能について記述するでしょう。しかし API インターフェイスについては少し事情が異なります。なぜなら常に複数のサブ機能を持つからです（下の[サブ機能](#サブ機能)を参照してください）。

### 機能内の基本構造

機能の `__compat` メンバーの中には、以下のメンバーを記述する必要があります。

- `mdn_url`: MDN 上のこの機能の参照ページの URL を指定します。これは、ロケールのディレクトリを含めずに記述する必要があることに注意してください。例えば、 `/docs/...` であり、 `/ja/docs/...` ではありません。これは、ローカライズのために、データがページに置かれるときにマクロで追加されます。
- `support`: 報告したいすべての各ブラウザーにおける、この機能のブラウザーの対応情報を表すメンバーが含まれています。
- `status`: この機能の標準化過程の状態を報告するメンバーが含まれています。

ブラウザーメンバーの名前はスキーマで定義されています ([Browser identifiers](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#browser-identifiers) を参照してください)。現在定義されている識別子の完全な一覧のもの使用してください。他のブラウザーを追加したい場合は、広範な影響があり、慎重に考えずに行うべきではありませんので、まず私たちに相談してください。

基本的なブラウザーの compat データファイルでは、ブラウザー識別子のメンバーの中に "version_added" を含めるだけでよいでしょう（後ほど[データの追加: 高度な場合](#データの追加_高度な場合)で説明します）。記述することができる値は以下の通りです。

- 版番号: ブラウザーがその機能に対応し始めた正確な版が分かる場合は、その番号を表す文字列を使用してください。例) `"47"`
- `true`: ブラウザーがその機能に対応しているが、正確な版番号がわからない場合は、 `true` の値を使用してください。
- `false`: ブラウザーがその機能に対応していない場合は、 `false` の値を使用してください。
- `null`: ブラウザーがその機能に対応しているかどうかわからない場合は、 `null` の値を使用してください。

`status` メンバーの内容には、以下の 3 つのサブメンバーの記述してください。

- `experimental`: この機能が[実験的](/ja/docs/MDN/Guidelines/Conventions_definitions#実験的)であれば `true` を設定し、そうでない場合は `false` を設定してください。
- `standard_track`: この機能が何らかの標準化過程（最も有名なものは W3C/WHATWG ですが、他にも Khronos, TC39, など）にある場合は `true` を設定し、そうでない場合は `false` を設定してください。
- `deprecated`: この機能が[非推奨](/ja/docs/MDN/Guidelines/Conventions_definitions#非推奨と廃止)であれば `true` に設定し、そうでない場合は `false` を設定してください。

[border-width](/ja/docs/Web/CSS/border-width#browser_compatibility) の機能データ ([border-width.json](https://github.com/mdn/browser-compat-data/blob/main/css/properties/border-width.json) も参照) を一例として以下に示します。

```json
"__compat": {
  "mdn_url": "https://developer.mozilla.org/docs/Web/CSS/border-width",
  "spec_url": "https://drafts.csswg.org/css-backgrounds/#the-border-width",
  "support": {
    "chrome": {
      "version_added": "1"
    },
    "webview_android": {
      "version_added": "2"
    },
    "edge": {
      "version_added": true
    },
    "edge_mobile": {
      "version_added": true
    },
    "firefox": {
      "version_added": "1"
    },
    "firefox_android": {
      "version_added": "1"
    },
    "ie": {
      "version_added": "4"
    },
    "ie_mobile": {
      "version_added": "6"
    },
    "opera": {
      "version_added": "3.5"
    },
    "opera_android": {
      "version_added": "11"
    },
    "safari": {
      "version_added": "1"
    },
    "safari_ios": {
      "version_added": "3"
    }
  },
  "status": {
    "experimental": false,
    "standard_track": true,
    "deprecated": false
  }
}
```

#### 説明の追加

`__compat` メンバーには、 4 つ目のオプションのメンバーである `description` があります。これを使用することで、その機能に関する人間にとって読みやすい説明を含めることができます。これを含めるべきなのは、データを少し見ただけではその機能が何であるかがわかりにくい場合だけです。例えば、データ構造を見ただけではコンストラクターが何であるかわからないかもしれないので、次のような記述を含めることができます。

```json
{
  "api": {
    "AbortController": {
      "__compat": {
        ...
      },
      "AbortController": {
        "__compat": {
          "mdn_url": "https://developer.mozilla.org/docs/Web/API/AbortController/AbortController",
          "description": "<code>AbortController()</code> constructor",
          "support": {
            ...
          }
        }
      }

      ... etc.
    }
  }
}
```

### サブ機能

互換性一覧表が複数の行を持つページでは、各行の情報を定義するために、各機能の中に複数の副機能が必要になります。これは、例えば、ある機能の基本的な対応が一つの行に格納されていても、そのしばらく後に、その機能が新しいプロパティや値の型を持つようになった場合などに起こります。

例として、 `background-color` プロパティの[互換性データ](https://github.com/mdn/browser-compat-data/blob/main/css/properties/background-color.json) と[対応する MDN ページ](/ja/docs/Web/CSS/background-color)を参照してください。基本的な対応は上で説明したように `__compat` オブジェクトの中に存在しており、ブラウザーの "16 進数値のアルファチャンネル "の対応するに関する追加の行は、それ自身の`__compat` オブジェクトを含んでいます。

```json
{
  "css": {
    "properties": {
      "background-color": {
        "__compat": {
          ...
        },
        "alpha_ch_for_hex": {
          "__compat": {
            ...
          },
        }
      }
    }
  }
}
```

API の場合、上位 2 つのレベルを `api.インターフェイス名` として定義し、次に上位の `__compat` セクションでインターフェイスの全体的なブラウザー互換性を定義し、インターフェイス内に含まれるメソッド、プロパティ、およびコンストラクターのそれぞれのサブ機能を定義します。基本的な構造は以下のようになります。

```json
{
  "api": {
    "VRDisplay": {
      "__compat": {
        ...
      },
      "cancelAnimationFrame": {
        "__compat": {
          ...
        }
      },
      "capabilities": {
        "__compat": {
          ...
        }
      },

      ... etc.

    }
  }
}
```

完全な例は、 [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) を参照してください。

## データの追加: 高度な場合

ブラウザーの互換性データには、いくつかの高度な機能があります。このセクションの目的は、最も一般的なものをリストアップし、それぞれの例を提供して、互換性データにそれらを実装する方法を示すことです。

### 脚注を含める

しばしば互換性一覧表には、有益な詳細や、開発者にとって有用な奇妙な動作を説明する、特定の項目に関連した脚注が含まれています。例として、{{domxref("VRDisplay.capabilities")}} ([VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json)も参照) の Chrome Android の項目には、（執筆時点では）「現在は Google Daydream のみで対応されています」という脚注がありました。これを互換性データに含めるために、 "notes" サブメンバーを関連する "chrome_android" サブメンバーの中に追加しました。これはこのようになります。

```json
"chrome_android": {
  "version_added": true,
  "notes": "Currently supported only by Google Daydream."
}
```

### ベンダー接頭辞を含める

ある機能が、あるブラウザーでベンダー接頭辞付きで対応されている場合、ブラウザーの互換性データでそのことを明確にしたいと思うでしょう。 Firefox において、 `-moz-` 接頭辞により対応されている機能を想像してください。互換性データでこれを指定するには、該当する "firefox" サブメンバーの中に "prefix" サブメンバーを追加する必要があります。これは次のようになります。

```json
"firefox": {
  "version_added": true,
  "prefix": "-moz-"
}
```

### ブラウザーの設定やフラグを含める

機能によっては、ブラウザーが対応しているものの、実験的なものであり既定ではオフになっている場合があります。ユーザーがこの機能を使いたい場合は、環境設定/フラグを使ってオンにする必要があります。

互換性データでこれを表現するには、関連するブラウザー識別子サブメンバーの中に "flags" サブメンバーを追加する必要があります。 "flags" の値は、 3 つのメンバーを含むオブジェクトの配列です。

- `type`: フラグや環境設定の種類。最も一般的な値は "preference" で、これはブラウザー内部で設定されます（例えば、 Firefox では about:config、 Chrome では chrome://flags を使用します）が、時には "compile_flag"という、ブラウザーのビルドがコンパイルされるときに設定される値を使用することもあります。
- `name`: これは、値を設定する必要がある設定の名前を表す文字列です。例えば、"Enable Experimental Web Platform Features" は Chrome に存在する環境設定で、 Chrome では `chrome://flags` にあります。
- `value_to_set`: 設定する値を表す文字列で、例えば "true" などです。

つまり、ある機能の Chrome の対応に環境設定/フラグを追加するには、次のようにします。

```json
"chrome": {
  "version_added": "50",
  "flags": [
    {
      "type": "preference",
      "name": "Enable Experimental Web Platform Features",
      "value_to_set": "true"
    }
  ]
},
```

もしその機能が 2 つ以上のフラグの元にある場合、この例のように "flags" 配列にオブジェクトを追加することができます。

```json
"firefox": {
  "version_added": "57",
  "flags": [
    {
      "type": "preference",
      "name": "dom.streams.enabled",
      "value_to_set": "true"
    },
    {
      "type": "preference",
      "name": "javascript.options.streams",
      "value_to_set": "true"
    }
  ]
},
```

### 対応が削除された版を含める

あるブラウザーのある版で機能が追加され、その後その機能が非推奨になったために再び削除されることがあります。これは、 "version_removed" サブメンバーを使って簡単に表現できます。このサブメンバーは、削除されたバージョン番号を表す文字列を値として受け取ります。例えば、以下のようになります。

```json
"firefox": {
  "version_added": "35",
  "version_removed": "47",
},
```

### 同じブラウザーの項目に複数の対応ポイントを含む

同じブラウザーの複数の対応データポイントを、同じ機能の中に追加したい場合もあるでしょう。

例えば、 {{cssxref("text-align-last")}} プロパティ（[text-align-last.json](https://github.com/mdn/browser-compat-data/blob/main/css/properties/text-align-last.json)も参照）は、 Chrome にバージョン 35 で追加され、接頭辞付きで対応されました。

上記の対応はバージョン 47 で削除されましたが、バージョン 47 では既定で `text-align-last` が有効になるような対応も追加されました。

これらのデータポイントの両方を含めるために、 "chrome" サブメンバーの値を、単一の対応情報オブジェクトではなく、 2 つの対応情報オブジェクトを含む配列にすることができます。

```json
"chrome": [
  {
    "version_added": "47"
  },
  {
    "version_added": "35",
    "version_removed": "47",
    "flags": [
      {
        "type": "preference",
        "name": "Enable Experimental Web Platform Features",
        "value_to_set": "true"
      }
    ]
  }
],
```

> **Note:** ​​​​配列の中には、最新または重要な対応ポイントを最初に配置するべきです。こうすることで、単に最新の情報を取得したい人にとって読みやすいデータとなります。

### 別名を含める

時々、ブラウザーが仕様とは異なる名前で機能を対応することがあります。これは例えば、あるブラウザーがある機能の実験的な対応を早くから追加していて、仕様が安定する前に名前が変わってしまったというような場合が考えられます。

このようなケースをブラウザーの互換性データに含めるには、 "alternative_name" メンバーの中に代替名を指定する対応情報ポイントを含めます。

> **Note:** 代替名は正確なエイリアスではないかもしれません。標準版とは異なる動作をするかもしれません。

では例を見てみましょう。 {{cssxref("border-top-right-radius")}} プロパティ（[border-top-right-radius.json](https://github.com/mdn/browser-compat-data/blob/2a0cc3f6bb17aa4345441bed47a059dffd847793/css/properties/border-top-right-radius.json)も参照）の Firefox での対応は以下の通りです。

- バージョン 4 以降では `border-top-right-radius` という標準的な名前で対応されています。
- バージョン 49 以降では、ブラウザーの互換性を考慮し、 `-webkit-` 接頭辞と共に使用されます。
- バージョン 1 以降では `-moz-border-radius-topright` という代替名を使用しています。このエイリアスの対応はバージョン 12 で削除されました。

これをデータで表現するために、以下の JSON を使用しました。

```json
"firefox": [
  {
    "version_added": "4",
    "notes": "Prior to Firefox 50.0, border styles of rounded corners were always rendered as if <code>border-style</code> was solid. This has been fixed in Firefox 50.0."
  },
  {
    "prefix": "-webkit-",
    "version_added": "49",
    "notes": "From Firefox 44 to 48, the <code>-webkit-</code> prefix was available with the <code>layout.css.prefixes.webkit</code> preference. Starting with Firefox 49, the preference defaults to <code>true</code>."
  },
  {
    "alternative_name": "-moz-border-radius-topright",
    "version_added": "1",
    "version_removed": "12"
  }
],
```

## 変更のメインリポジトリーへの反映

互換性データの追加が終わったら、まず以下のコマンドを使ってテストしてみてください。

- `npm run lint` — すべての互換性データをテストして、 JSON が有効であること、正しいスタイルで書かれていること、例えば正しいインデント、カンマの欠落がないことなどを確認します。ファイル名とテスト結果の長いリストが表示されます。エラーが見つかった場合、リンターは見つかったファイルに対してエラーをスローし、行番号やエラーメッセージなどのデバッグに役立つ情報を表示します。
- `npm run show-errors` — JSON をデータスキーマと照らし合わせて検証し、無効なブラウザーのバージョン番号が使用されているなどのエラーをハイライトします。

問題がなさそうであれば、コミットして、 GitHub 上のあなたのリモートフォークにプッシュする必要があります。これは、以下のようなターミナルコマンドで簡単に行うことができます。

```bash
git add .
git commit -m 'adding compat data for name-of-feature'
git push
```

リモートフォーク（すなわち `https://github.com/ユーザー名/browser-compat-data`）に行くと、ファイル一覧の一番上 （"Your recently pushed branches" の下）にプッシュに関する情報が表示されているはずです。プルリクエスト（リモートフォークをメインリポジトリーに取り込むための、最初の過程のことです）を作成するには、"Compare & pull request" ボタンを押して、続く画面の簡単なプロンプトに従ってください。

これが終われば、ただ待つのみです。レビュアーがあなたのプルリクエストをレビューし、メインリポジトリーにマージします。そうでない場合は、変更を依頼します。変更が必要な場合は、変更を加えて、プルリクエストが受理されるまで再度投稿してください。

## MDN ページへのデータの挿入

新しい互換性データがメインの [browser-compat-data](https://github.com/mdn/browser-compat-data) リポジトリーに含まれると、そのデータを基にしたブラウザー互換性一覧表や仕様書一覧表を MDN ページに動的に生成することができるようになります。

まず、取り込みたい互換性データのクエリー文字列を見つける必要があります。これは、そのソースファイルを検査することによって決定することができます。例えば、

- {{domxref("AbortController")}} の互換性データは [AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) で定義されており、 `api.AbortController` を使用して問い合わせすることができます。
- {{HTTPHeader("Content-Type")}} HTTP ヘッダーの互換性データは [content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/content-type.json) で定義されており、 `http.headers.Content-Type` を使用して問い合わせすることができます。
- {{domxref("VRDisplay.capabilities")}} プロパティの互換性データは [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) で定義されており、 `api.VRDisplay.capabilities` で問い合わせすることができます。

互換性データのクエリーは、ページの先頭部分で `browser-compat` キーを使用して指定する必要があります。
例えば、 {{domxref("AbortController")}} の場合、以下のように追加します

```plain
---
title: AbortController
slug: Web/API/AbortController

...

browser-compat: api.AbortController
---
```

そして、そのキーに対応する互換性一覧表と仕様書一覧表が、ソース中の `\{{Compat}}` と `\{{Specifications}}` マクロの代わりに自動的にレンダリングされます。

また、以下のようにマクロの第一引数として目的の API を指定することもできます。 `\{{Compat("api.AbortController")}}` のように、マクロの第一引数に目的の API を指定することもできます。これは、同じページで複数の互換性一覧表が必要な場合に便利です。

マクロの呼び出しにより、以下の表（とそれに対応する一連の注釈）が生成されます。

#### 互換性一覧表の例

{{Compat}}

#### 仕様書一覧表の例

{{Specifications}}
