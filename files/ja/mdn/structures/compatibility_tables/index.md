---
title: 互換性一覧表とブラウザー互換性データリポジトリ (BCD)
slug: MDN/Structures/Compatibility_tables
tags:
  - MDN Meta
  - ガイド
  - ブラウザーの互換性
  - 互換性テーブル
  - 互換性一覧表
  - 構造
translation_of: MDN/Structures/Compatibility_tables
---
{{MDNSidebar}}

<span class="seoSummary">MDN には、オープンなウェブ文書のための互換性一覧表の標準形式があります。これは、すべてのブラウザーにわたって共有される DOM, HTML, CSS, JavaScript, SVG などの技術の文書で使用されます。</span>この記事は、作成した互換性一覧表をデータベースにどのように追加して維持するか、また、一覧表を記事に統合する方法についての「始め方」のガイドです。

より高度なドキュメントや、データを表現するために使用される手続きや JSON スキーマの最新の変更点については、データリポジトリの [contributor guide](https://github.com/mdn/browser-compat-data/blob/master/docs/contributing.md) や [data guidelines guide](https://github.com/mdn/browser-compat-data/blob/master/docs/data-guidelines.md) をご覧ください。

質問がある場合や問題を発見した場合は、 [MDN ディスカッションフォーラム](https://discourse.mozilla-community.org/c/mdn)で相談してください。

## データリポジトリにアクセスする方法

データは GitHub リポジトリに保存されています - <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a> を参照してください。アクセスするには GitHub アカウントを取得し、 browser-compat-data を自分のアカウントで<ruby>フォーク<rp> (</rp><rt>fork</rt><rp>) </rp></ruby>し、フォークしたものをローカルマシンに<ruby>クローン<rp> (</rp><rt>クローン</rt><rp>) </rp></ruby>する必要があります。

## データを追加する準備

新しいデータを追加する前に、フォークがメインリポジトリの最新である (同じ内容を含む) ことを確認し、フォーク内に追加を格納するための新しい<ruby>ブランチ<rp> (</rp><rt>ブランチ</rt><rp>) </rp></ruby>を作成し、そのブランチをローカルのクローンにプルすれば、その中で作業を始めることができます。

フォークが最新であることを、次のように簡単な方法で確認してみましょう。

### メインの browser-compat-data リポジトリをリモートとして追加

端末またはコマンドラインでフォークをローカルにクローンした場所へ行き、次のようにしてリモートにメイン (upstream) リポジトリを指すよう追加します (これを行う必要があるのは一度だけです)。

```bash
git remote add upstream https://github.com/mdn/browser-compat-data.git
```

もしこれをしたか不明確であれば、次のようにリポジトリがどのリモートを指しているかを確認することができます。

```bash
git remote -v
```

### リモートのコンテンツでフォークを更新する

では、フォークを更新したいときは、次のようにできます。

<ol>
 <li>
  <p>master ブランチにいることを確認します。</p>

  <pre class="brush: bash notranslate">git checkout master</pre>
 </li>
 <li>
  <p>以下のように更新されたリポジトリのコンテンツを<ruby>フェッチ<rp> (</rp><rt>fetch</rt><rp>) </rp></ruby>します。</p>

  <pre class="brush: bash notranslate">git fetch upstream</pre>
 </li>
 <li>
  <p>ローカルの master の内容をメイン (upstream) リポジトリの master の内容に<ruby>リベース<rp> (</rp><rt>rebase</rt><rp>) </rp></ruby>します。</p>

  <pre class="brush: bash notranslate">git rebase upstream/master</pre>
 </li>
 <li>
  <p>以下のようにしてここまでの変更をあなたがフォークしたリモートへ反映します。</p>

  <pre class="brush: bash notranslate">git push</pre>
 </li>
</ol>

### 作業用の新しいブランチの作成

次に、自分のリモートフォーク (普通は<code>https://github.com/<em>自分のユーザー名</em>/browser-compat-data</code>) へ行き、以下の手順で新しいブランチを作成します。変更したい内容をここに追加していくことになります。

- "Branch: Master" ボタンをクリックします。
- 新しいブランチの名前を "Find or create a branch..." と書かれたところに入力します。
- "Create branch *ブランチ名* from Master" と書かれたボタンを押します。

例えば、 WebVR API についてデータを追加したい場合 "webvr" という名前がブランチ名として考えられるでしょう。

### 新しいブランチへの切り替え

### ここから先は作業が端末またはコマンドラインに戻ります。ローカルにクローンしたものを更新して新しく作成したブランチを使えるようにするには、下のコマンドを使います。

```bash
git pull
```

そして以下のように新しく作成したブランチに切り替えます。

<pre class="brush: bash notranslate">git checkout <em>name-of-branch</em></pre>

- これでデータを追加するための準備が完了しました！

## データの追加

データを追加するには、新たに互換性データを書いたファイルを作成する必要があります。作成する必要があるファイルは、どの技術分野について作業しようとするかによって異なります。

- **{{Glossary("HTML")}}:** HTML の要素ごとに一つのファイルが[browser-compat-data/html/elements](https://github.com/mdn/browser-compat-data/tree/master/html/elements)に格納されています。ファイル名は要素の名前をすべて小文字でつけるべきです。 例) `div.json`
- **{{Glossary("CSS")}}:** CSS のプロパティないしセレクターごとに一つのファイルが [browser-compat-data/css](https://github.com/mdn/browser-compat-data/tree/master/css) 以下の適切なディレクトリに格納されています。ファイル名はその機能の名前をすべて小文字でつけてください。 例) `background-color.json`, `hover.json`
- **{{Glossary("JavaScript", "JS")}}:** JavaScriptオブジェクトごとに一つのファイルが[browser-compat-data/javascript/builtins](https://github.com/mdn/browser-compat-data/tree/master/javascript/builtins)に格納されています。ファイル名は大文字小文字を含めて完全にオブジェクト名と一致させてください。 例) `Date.json`, `InternalError.json`
- **{{Glossary("API", "APIs")}}:** API のインターフェイスごとに一つのファイルが[browser-compat-data/api](https://github.com/mdn/browser-compat-data/tree/master/api)に格納されています。ファイル名は大文字小文字を含めて完全にインターフェイス名と一致させてください。 例) WebVR API には`VRDisplay.json`や`VRDisplayCapabilities.json`などがあります

あなたが作成するファイルは、このリポジトリに含まれているスキーマで定義されている構造に従わなければなりません。[詳細なスキーマの説明はこちら](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md)で見ることができます。

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

上記のデータは [border-width.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/border-width.json) にあります。 [MDN で表示された border-width の表](/ja/docs/Web/CSS/border-width#Browser_compatibility)と見比べてみてください。

他の種類の機能についても同様ですが、ただしオブエジェクトの名前が異なります。

- CSS セレクターは CSS プロパティと基本的に同様ですが、最上位のオブジェクト構造が `css.properties` ではなく `css.selectors` になります。例として [cue.json](https://github.com/mdn/browser-compat-data/blob/master/css/selectors/cue.json) を見てください。
- HTML についても基本的に同様ですが、最上位のオブジェクト構造が `html.elements` です。例として [article.json](https://github.com/mdn/browser-compat-data/blob/master/html/elements/article.json) を見てください。
- JavaScript の組込みオブジェクトについての最上位のオブジェクト構造は `javascript.builtins` です。例として [Array.json](https://github.com/mdn/browser-compat-data/blob/master/javascript/builtins/Array.json) を見てください。

HTML や CSS、 JavaScript のページにおいては、普通一つだけの機能について記述するでしょう。しかし API インターフェイスについては少し事情が異なります。なぜなら常に複数のサブ機能を持つからです (下の {{anch("Sub-features", "サブ機能")}} を参照してください)。

### 機能内の基本構造

機能の `__compat` メンバーの中には、以下のメンバーを記述する必要があります。

- `mdn_url`: MDN 上のこの機能の参照ページの URL を指定します。これは、ロケールのディレクトリを含めずに記述する必要があることに注意してください。例えば、 `/docs/...` であり、 `/ja/docs/...` ではありません。これは、ローカライゼーションのために、データがページに置かれるときにマクロで追加されます。
- `support`: 報告したいすべての各ブラウザーにおける、この機能のブラウザーの対応情報を表すメンバーが含まれています。
- `status`: この機能の標準化過程の状態を報告するメンバーが含まれています。

ブラウザーメンバーの名前はスキーマで定義されています ([Browser identifiers](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md#browser-identifiers を参照してください)。現在定義されている識別子の完全な一覧のもの使用してください。他のブラウザーを追加したい場合は、広範な影響があり、慎重に考えずに行うべきではありませんので、まず私たちに相談してください。

基本的なブラウザーの compat データファイルでは、ブラウザー識別子のメンバーの中に "version_added" を含めるだけでよいでしょう (後ほど {{anch("Adding_data_Advanced_cases", "データの追加: 高度な場合")}} で説明します)。記述することができる値は以下の通りです。

- バージョン番号: ブラウザーがその機能に対応し始めた正確なバージョンが分かる場合は、その番号を表す文字列を使用してください。例) `"47"`
- `true`: ブラウザがその機能に対応しているが、正確なバージョン番号がわからない場合は、 `true` の値を使用してください。
- `false`: ブラウザーがその機能に対応していない場合は、 `false` の値を使用してください。
- `null`: ブラウザーがその機能に対応しているかどうかわからない場合は、 `null` の値を使用してください。

`status` メンバーの内容には、以下の3つのサブメンバーの記述してください。

- `experimental`: この機能が<a href="/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental">実験的</a>であれば `true` を設定し、そうでない場合は `false` を設定してください。
- `standard_track`: この機能が何らかの標準化過程 (最も有名なものは W3C/WHATWG ですが、他にも Khronos, TC39, など) にある場合は `true` を設定し、そうでない場合は `false` を設定してください。
- `deprecated`: この機能が<a href="/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete">非推奨</a>であれば `true` に設定し、そうでない場合は `false` を設定してください。

<a href="/ja/docs/Web/CSS/border-width#Browser_compatibility">border-width</a> の機能データ ([border-width.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/border-width.json) も参照) を一例として以下に示します。

```json
"__compat": {
  "mdn_url": "https://developer.mozilla.org/docs/Web/CSS/border-width",
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

`__compat` メンバーには、4つ目のオプションのメンバである、 `description` があります。これを使用することで、その機能に関する人間にとって読みやすい説明を含めることができます。これを含めるべきなのは、データを少し見ただけではその機能が何であるかがわかりにくい場合だけです。例えば、データ構造を見ただけではコンストラクタが何であるかわからないかもしれないので、次のような記述を含めることができます。

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
          "description": "&lt;code&gt;AbortController()&lt;/code&gt; constructor",
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

互換性一覧表が複数の行を持つページでは、各行の情報を定義するために、各機能の中に複数の副機能が必要になります。これは、例えば、ある機能の基本的なサポートが一つの行に格納されていても、そのしばらく後に、その機能が新しいプロパティや値の型を持つようになった場合などに起こります。

例として、`background-color`プロパティの<a href="https://github.com/mdn/browser-compat-data/blob/master/css/properties/background-color.json">互換性データ</a> と <a href="/ja/docs/Web/CSS/background-color">対応するMDNページ</a> を参照してください。基本的なサポートは上で説明したように `__compat` オブジェクトの中に存在しており、ブラウザの "16進数値のアルファチャンネル "のサポートするに関する追加の行は、それ自身の`__compat` オブジェクトを含んでいます。

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

API の場合、上位 2 つのレベルを <code>api.<em>name-of-the-interface</em></code> として定義し、次に上位の `__compat` セクションでインターフェイスの全体的なブラウザーの互換性を定義し、インターフェイス内に含まれるメソッド、プロパティ、およびコンストラクタのそれぞれのサブ機能を定義します。基本的な構造は以下のようになります。

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

完全な例は、[VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/master/api/VRDisplay.json)を参照してください。

## データの追加: 高度な場合

ブラウザー互換性データには、いくつかの高度な機能があります。このセクションの目的は、最も一般的なものをリストアップし、それぞれの例を提供して、あなた自身の互換性データにそれらを実装する方法を示すことです。

### 脚注を含める

しばしば互換性一覧表には、有益な詳細や、開発者にとって有用な奇妙な動作を説明する、特定のエントリに関連した脚注が含まれています。例として、{{domxref("VRDisplay.capabilities")}} ([VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/master/api/VRDisplay.json)も参照) の Chrome Android エントリには、(執筆時点では)"現在はGoogle Daydreamのみでサポートされています "という脚注がありました。これを互換性データに含めるために、関連する "chrome_android "サブメンバーの中に "notes "サブメンバーを追加しました。これはこのようになります。

```json
"chrome_android": {
  "version_added": true,
  "notes": "Currently supported only by Google Daydream."
}
```

### ベンダープレフィックスを含める

ある機能が、あるブラウザでベンダープレフィックス付きでサポートされている場合、ブラウザー互換性データでそのことを明確にしたいと思うでしょう。Firefoxにおいて、 `-moz-` プレフィックスによりサポートされている機能を想像してください。互換性データでこれを指定するには、該当する "firefox" サブメンバーの中に "prefix" サブメンバーを追加する必要があります。これは次のようになります。

```json
"firefox": {
  "version_added": true,
  "prefix": "-moz-"
}
```

### ブラウザーの設定やフラグを含める

いくつかの機能はブラウザでサポートされているかもしれませんが、それらは実験的なものであり、デフォルトではオフになっています。ユーザがこの機能を使いたい場合は、環境設定/フラグを使ってオンにする必要があります。

互換性データでこれを表現するには、関連するブラウザ識別子サブメンバーの中に "flags" サブメンバーを追加する必要があります。flags" の値は、3つのメンバを含むオブジェクトの配列です。

- `type`: フラグやプリファレンスのタイプ。最も一般的な値は "preference"で、これはブラウザ内部で設定されます(例えば、Firefoxではabout:config、Chromeではchrome://flagsを使用します)が、時には "compile_flag "という、ブラウザのビルドがコンパイルされるときに設定される値を使用することもあります。</li>
- `name`: これは、値を設定する必要がある設定の名前を表す文字列です。例えば、"Enable Experimental Web Platform Features" はChromeに存在する環境設定で、Chromeでは`chrome://flags`にあります。</li>
- `value_to_set`: 設定する値を表す文字列で、例えば "true "などです。</li>

つまり、ある機能のChromeのサポートに環境設定/フラグを追加するには、次のようにします。

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

もしその機能が2つ以上のフラグの元にある場合、この例のように "flags"配列にオブジェクトを追加することができます。

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

### 対応が削除されたバージョンを含める

あるブラウザのバージョンで追加された機能が、非推奨となったために再び削除されることがあります。これは、削除されたバージョン番号を表す文字列を値として受けとる、"version_removed" サブメンバーを使えば簡単に表現できます。例えば、以下のようになります。

```json
"firefox": {
  "version_added": "35",
  "version_removed": "47",
},
```

### 同じブラウザーの項目に複数の対応ポイントを含む

同じブラウザの複数のサポートデータポイントを、同じ機能の中に追加したい場合もあるでしょう。

例えば、 {{cssxref("text-align-last")}} プロパティ（[text-align-last.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/text-align-last.json)も参照）は、バージョン35でChromeに追加され、プレフィックス付きでサポートされました。

上記のサポートはバージョン 47 で削除されましたが、バージョン 47 でもデフォルトで `text-align-last` が有効になるようにサポートが追加されました。

これらのデータポイントの両方を含めるために、"chrome "サブメンバーの値を、単一のサポート情報オブジェクトではなく、2つのサポート情報オブジェクトを含む配列にすることができます。

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

{{Note("​​​​配列の中には、最新または重要なサポートポイントを最初に配置するべきです。こうすることで、単に最新の情報を取得したい人にとって読みやすいデータとなります。")}}

### 別名を含める

時々、ブラウザが仕様とは異なる名前で機能をサポートすることがあります。これは例えば、あるブラウザがある機能の実験的なサポートを早くから追加していて、仕様が安定する前に名前が変わってしまったというような場合が考えられます。

このようなケースをブラウザー互換性データに含めるには、"alternative_name"メンバの中に代替名を指定するサポート情報ポイントを含めます。

{{Note("代替名は正確なエイリアスではないかもしれません。標準バージョンとは異なる動作をするかもしれません。")}}

では例を見てみましょう。{{cssxref("border-top-right-radius")}} プロパティ（[border-top-right-radius.json](https://github.com/mdn/browser-compat-data/blob/2a0cc3f6bb17aa4345441bed47a059dffd847793/css/properties/border-top-right-radius.json)も参照）のFirefoxでのサポートは以下の通りです。

- バージョン 4 以降では `border-top-right-radius` という標準的な名前でサポートされています。
- バージョン 49 以降では、ブラウザーの互換性を考慮し、`-webkit-`プレフィクスと共に使用されます。
- バージョン 1 以降では `-moz-border-radius-topright` という代替名を使用しています。このエイリアスのサポートはバージョン12で削除されました。

これをデータで表現するために、以下のJSONを使用しました。

```json
"firefox": [
  {
    "version_added": "4",
    "notes": "Prior to Firefox 50.0, border styles of rounded corners were always rendered as if &lt;code&gt;border-style&lt;/code&gt; was solid. This has been fixed in Firefox 50.0."
  },
  {
    "prefix": "-webkit-",
    "version_added": "49",
    "notes": "From Firefox 44 to 48, the &lt;code&gt;-webkit-&lt;/code&gt; prefix was available with the &lt;code&gt;layout.css.prefixes.webkit&lt;/code&gt; preference. Starting with Firefox 49, the preference defaults to &lt;code&gt;true&lt;/code&gt;."
  },
  {
    "alternative_name": "-moz-border-radius-topright",
    "version_added": "1",
    "version_removed": "12"
  }
],
```

## 変更のメインリポジトリへの反映

互換性データの追加が終わったら、まず以下のコマンドを使ってテストしてみてください。

- npm run lint — すべての互換性データをテストして、JSONが有効であること、正しいスタイルで書かれていること、例えば正しいインデント、カンマの欠落がないことなどを確認します。ファイル名とテスト結果の長いリストが表示されます。エラーが見つかった場合、リンターは見つかったファイルに対してエラーをスローし、行番号やエラーメッセージなどのデバッグに役立つ情報を表示します。
- npm run show-errors — JSON をデータスキーマと照らし合わせて検証し、無効なブラウザのバージョン番号が使用されているなどのエラーをハイライトします。

問題がなさそうであれば、コミットして、GitHub上のあなたのリモートフォークにプッシュする必要があります。これは、以下のようなターミナルコマンドで簡単に行うことができます。

<pre class="brush: bash notranslate">git add .
git commit -m 'adding compat data for <em>name-of-feature</em>'
git push</pre>

リモートフォーク (URLの例: <code>https://github.com/<em>your-username</em>/browser-compat-data</code>) に行くと、ファイルリストの一番上 (「最近プッシュしたブランチ」の下) にあなたのプッシュに関する情報が表示されているはずです。プルリクエスト（あなたのリモートフォークをメインリポジトリに取り込むための、最初の過程のことです）を作成するには、"Compare &amp; pull request" ボタンを押して、続く画面の簡単なプロンプトに従ってください。

これが終われば、ただ待つのみです。レビュアーがあなたのプルリクエストをレビューし、メインリポジトリにマージします。そうでない場合は、変更を依頼します。変更が必要な場合は、変更を加えて、プルリクエストが受理されるまで再度投稿してください。

## MDN ページへのデータの挿入

一度あなたの新しいデータがメインリポジトリに含められたら、{{TemplateLink("Compat")}} マクロを使って、MDNページ上でそのデータに基づいてブラウザーの互換性一覧表を動的に生成することができます。これは、JSONデータを探索して、互換性一覧表を生成したい機能を表すオブジェクトを見つけるために必要なドット記法を唯一のパラメータとして受け取ります。

マクロ呼び出しの上に、他のコントリビューターにとって使いやすくするために、編集モードのMDNでコントリビューターにのみ表示される隠しテキストを追加します。

```html
&lt;div class="hidden"&gt;
The compatibility table on this page is generated from structured data.
If you'd like to contribute to the data, please check out
&lt;a href="https://github.com/mdn/browser-compat-data"&gt;https://github.com/mdn/browser-compat-data&lt;/a&gt;
and send us a pull request.
&lt;/div&gt;
```

例として、HTTPヘッダーに関するページである {{HTTPHeader("Accept-Charset")}} では、マクロの呼び出しは次のようになっています。 {\{{Compat("http.headers.Accept-Charset")}}}リポジトリ内の[accept-charset.json](https://github.com/mdn/browser-compat-data/blob/master/http/headers/accept-charset.json)ファイルを見ると、これが JSON データにどのように反映されているかがわかると思います。

別の例として、{{domxref("VRDisplay.capabilities")}} プロパティの互換性一覧表は、 `\{{Compat("api.VRDisplay.capabilities")}}`を使用して生成されます。マクロ呼び出しにより、以下の表（および対応する一連の注釈）が生成されます。

<hr>
{{Compat("api.VRDisplay.capabilities")}}

{{Note("ファイル名は、JSON 構造体内のインターフェイスに与えられたラベルと一致することがよくありますが、必ずしもそうとは限りません。マクロ呼び出しがテーブルを生成するときには、使用する JSON を見つけるまですべてのファイルを探索するので、ファイル名はそれほど重要ではありません。そうは言っても、常に可能な限り直感的な名前を付けるべきです。")}}
