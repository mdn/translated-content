---
title: SubtleCrypto の暗号以外の使用法
slug: Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto
l10n:
  sourceCommit: e259c14eb7c72abb6007478aadd52aa25c7976d8
---

{{APIRef("Web Crypto API")}}
この記事では、[SubtleCrypto インターフェイス](/ja/docs/Web/API/SubtleCrypto)の [`digest`](/ja/docs/Web/API/SubtleCrypto/digest) メソッドの使い道に焦点を当てます。[Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) に含まれる他の多くのメソッドの用途は暗号関係のかなり限られたものですが、データのハッシュを求めること (これが `digest` メソッドが行うことです) には多くの便利な利用法があります。

この記事では、[SubtleCrypto インターフェイス](/ja/docs/Web/API/SubtleCrypto)の暗号関係の使い道は扱いません。この記事から学ぶべき重要なことは、強力で低レベルなので、製品での暗号関係の目的には **この API を使ってはいけない** ということです。正しく使うためには、暗号関係のタスクを正しく成し遂げるために多くの状況依存の手順を踏まなければならないでしょう。もしこれらの手順のうち 1 個でも間違って行われると、よくてあなたのコードは動かず、より悪い場合にはそれは _動き_ 、知らないうちに安全でない製品でユーザーを危険に晒すことになるでしょう。

[Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) を使う必要はまったくないかもしれません。暗号を使いたくなるであろう目的の多くは、既に解決され、ウェブプラットフォームの一部になっています。例えば、クライアントとサーバーの間で情報を読んでいる Wi-Fi ホットスポットのような中間者攻撃が心配なのであれば、[HTTPS](/ja/docs/Glossary/HTTPS) を確実に正しく使うことで解決できます。ユーザー間で情報を安全に送信したいですか？それなら、標準の一部として暗号化することになっている [WebRTC Data Channels](/ja/docs/Web/API/WebRTC_API/Using_data_channels) を用いてユーザー間のデータ接続を構築できます。

[SubtleCrypto インターフェイス](/ja/docs/Web/API/SubtleCrypto)は暗号を扱うための低レベルのプリミティブを提供しますが、それらの道具を用いてシステムを実装することは複雑なタスクです。間違いに気付くのは難しく、結果としてユーザーのデータがあなたが考えるより安全でなくなる可能性があります。このことにより、ユーザーがセンシティブなデータや重要なデータを共有している場合、悲惨な結果が生じる可能性があります。

疑問がある場合は、自分でやろうとせず、経験者を雇い、ソフトウェアがセキュリティの専門家によって確実に監査されるようにしてください。

## ファイルのハッシュ化

これは、[Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) を用いてできる最も単純で役立つものです。鍵や証明書の生成は不要で、1 個だけの手順でできます。

[ハッシュ化](/ja/docs/Glossary/Hash_function)は、大きなバイト列を小さい文字列に変換し、この長い列の中の小さな変更が小さい文字列の大きな変化を生む技術です。この技術は、それぞれのファイルの全バイトをチェックせずに 2 個の同一のファイルを特定するのに便利です。これは、比較対象として単純な文字列が手に入るので、非常に便利です。明確にしておくと、ハッシュ化は **一方向の** 操作です。ハッシュからもとのバイト列を生成することはできません。

生成された 2 個のハッシュが同じだが、それらを生成するのに用いたファイルが違う場合は、_ハッシュ衝突_ として知られます。これは偶然起こる可能性は非常に小さく、SHA256 のような安全なハッシュ関数では、人工的に起こすこともほぼ不可能です。そのため、2 個の文字列が同じ場合は、2 個のもとのファイルも同一であると合理的に確信することができます。

現時点では ファイルのハッシュ化には通常 SHA256 を用いますが、SubtleCrypto インターフェイスでは[より次数が高いハッシュ関数](/ja/docs/Web/API/SubtleCrypto#supported_algorithms)も利用可能です。最もよく使われる SHA256 ハッシュの表現は、64 個の十六進数字の列です。十六進というのは、0-9 および a-f の文字のみを用い、4 ビットの情報を表すということです。すなわち、簡単に言うと、SHA256 ハッシュは任意の長さのデータをほぼ一意な 256 ビットのデータに変換します。

この技術は、ダウンロードしたファイルが作者が意図したものと一致することを確認するために、実行可能ファイルをダウンロードできるサイトでよく用いられます。これにより、ユーザーがマルウェアをインストールしていないことを保証できます。このための最もよく使われる方法は、以下の通りです。

1. ウェブサイトが提供するファイル名と SHA256 チェックサムを書き留めます。
2. 実行可能ファイルをダウンロードします。
3. 端末で `sha256sum /path/to/the/file` を実行し、自分自身で文字列を生成します。Mac を使っている場合は、[別にインストールする](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos)必要があるかもしれません。
4. 2 個の文字列を比較します。ファイルが壊れていなければ、一致するはずです。

![ソフトウェア「Blender」のダウンロードにおける SHA256 の例。64 個の十六進数字に続いて、「blender.zip」のようなファイル名があります。](blender-sha256-example.png)

SubtleCrypto の [`digest()`](/ja/docs/Web/API/SubtleCrypto/digest) メソッドは、このために便利です。ファイルのチェックサムの生成は、以下のようにできます。

まず、ファイルを読み込み、出力される SHA-256 を表示するための HTML 要素を用意します。

```html
<h3>ファイルを SHA256 でハッシュ化するデモ</h3>

<label
  >ハッシュ化するファイルを選択 (複数可)
  <input type="file" id="file" name="file" multiple
/></label>
<output style="display:block;font-family:monospace;"></output>
```

次に、SubtleCrypto インターフェイスを用いて処理します。以下のように動作します。

- [FileReader](/ja/docs/Web/API/FileReader) を用い、ファイルを [ArrayBuffer](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) に読み込みます。
- `crypto.subtle.digest('SHA-256', arrayBuffer)` を用いて `ArrayBuffer` のダイジェストを求めます。
- 結果のハッシュ (別の `ArrayBuffer`) を表示できるように文字列に変換します。

```js
const output = document.querySelector("output");
const file = document.getElementById("file");

// ユーザーが 1 個以上のファイルを選択した時、ハッシュ化関数を実行する
file.addEventListener("change", hashTheseFiles);

// digest 関数は非同期であり、Promise を返す
// コードを単純にするため、async/await 構文を用いる
async function fileHash(file) {
  const arrayBuffer = await file.arrayBuffer();

  // subtle crypto API を用い、ファイルが入った ArrayBuffer の SHA256 を求める
  // 結果のハッシュは ArrayBuffer に格納される
  const hashAsArrayBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);

  // 文字列として表示するため、ArrayBuffer の各バイトの十六進表現を求める
  // まず、ArrayBuffer の各バイトそれぞれを要素とする配列を作成する
  const uint8ViewOfHash = new Uint8Array(hashAsArrayBuffer);
  // 次に、各要素を十六進文字列に変換するため、通常の配列に変換する
  // 0-9 または a-f の各文字が 0 と 16 の間の数値を表し、4 ビットの情報を保持するので、2 文字で 8 ビット (1 バイト) を表す
  const hashAsString = Array.from(uint8ViewOfHash)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashAsString;
}

async function hashTheseFiles(e) {
  let outHTML = "";
  // ファイル選択欄の各ファイルについて処理を行う
  for (const file of this.files) {
    // ハッシュを求め、出力要素に並べる
    outHTML += `${file.name}    ${await fileHash(file)}`;
  }
  output.innerHTML = outHTML;
}
```

{{EmbedLiveSample("hashing_a_file")}}

### どのような場面で使えるか？

この時点で、「_これを自分のウェブサイトで使って、ユーザーがファイルをダウンロードするとき、ハッシュが一致することを保証し、ユーザーに自分のダウンロードが安全であると安心させることができる_」と自分で考えているかもしれません。残念ながら、ここにはすぐに頭に浮かぶ 2 個の懸念点があります。

- 実行可能ファイルのダウンロードは **常に** HTTPS で行われるべきです。これにより中間者は攻撃できなくなるため、冗長かもしれません。
- 攻撃者がもとのサーバー上のダウンロードファイルを置き換えることができる場合、SubtleCrypto インターフェイスを呼び出すコードも単に置き換え、バイパスし、全部大丈夫ですとだけ表示するようにすることもできるでしょう。自分のコードで見つけるのは難しいような[厳密な等価性比較](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#_による厳密な等価性)の置き換えなど、こっそりと行われる可能性が高いです。

  ```diff
  --- if (checksum === correctCheckSum) return true;
  +++ if (checksum = correctCheckSum) return true;
  ```

価値がある可能性がある場面の一つは、自分の制御下にないサードパーティのダウンロード元から取得したファイルを検査したい場合です。これは、ファイルをユーザーに提供する前にスキャンできるようにする [CORS](/ja/docs/Glossary/CORS) ヘッダーがダウンロード元で有効になっている場合は成立します。残念ながら、CORS がデフォルトで有効になっているサーバーは多くありません。

## 「ハッシュにソルトを加える」とは？

「_ハッシュにソルトを加える_」という言葉を聞いたことがあるかもしれません。ここで扱っているトピックと直接は関係ないですが、知っておくのはいいでしょう。

> [!NOTE]
> この節ではパスワードのセキュリティを扱っていますが、SubtleCrypto が提供するハッシュ関数はこの用途には適しません。この用途には、`scrypt` や `bcrypt` などの高コストで遅いハッシュ関数が必要です。SHA は非常に速く高効率になるよう設計されているので、パスワードのハッシュ化には適しません。この節は純粋な興味のためのものです。Web Crypto API をクライアントでパスワードをハッシュ化するために用いてはいけません。

ハッシュ化がよく使われるのはパスワードです。ユーザーのパスワードを平文で保存したいことは決してないでしょう。それは単純にひどい考えです。かわりにユーザーのパスワードのハッシュを保存することで、ハッカーがユーザー名とパスワードのデータベースを入手してももとのパスワードを復元できないようにします。細かいことに気がつく人は、既知のパスワードのリストから生成したハッシュを入手したパスワードのハッシュのリストと比較することで、もとのパスワードを入手できるということに気付くかもしれません。パスワードに文字列を連結すると、ハッシュが変わり、一致しなくなります。これは **ソルト** として知られています。もう一つの厄介な問題は、それぞれのパスワードで同じソルトを用いると、同じハッシュに対応するパスワードは同じもとのパスワードになってしまうことです。このため、1 個のパスワードが分かると、一致するすべてのパスワードがわかってしまいます。

この問題を解決するため、_ハッシュにソルトを加える_ として知られる操作を行います。それぞれのパスワードに対し、ソルト (ランダムな文字列) を生成し、パスワードの文字列と連結します。そして、ハッシュとソルトを同じデータベースに保存し、ユーザーが後にログインしようとしたとき一致するかを確認できるようにします。これにより、2 人のユーザーが同じパスワードを用いても、ハッシュは異なるものになります。ここで、高コストな暗号学的関数が必要な理由は、よく使われるパスワードのリストを用いてもとのパスワードを求めるのに時間がかかりすぎるようにするためです。

## SHA を用いたハッシュテーブル

暗号学的に安全ではないハッシュを高速で生成するために、SHA1 を用いることができます。これは、任意のデータを後で検索するためのキーに変換するのに非常に便利です。

例えば、行のフィールドの一つとして大きなデータを含むデータベースを持ちたいとします。すると、フィールドの一つを可変長またはあり得る最大の大きさのデータを保存できる大きさにする必要があるため、データベースの効率が悪くなります。かわりの解決法の一つは、データのハッシュを生成し、ハッシュをインデックスとする別のルックアップテーブルにデータを保存することです。すると、もとのデータベースにはハッシュを保存するだけでよくなり、これは都合のいい固定長です。

SHA1 ハッシュのあり得る種類は非常に多いです。そのため、たまたま同じ SHA1 ハッシュを持つ 2 種類のデータを生成することはほとんど不可能です。SHA1 は暗号学的に安全ではないので、同じ SHA1 ハッシュを持つ 2 種類のファイルをわざと生成することは _可能_ です。そのため、理論上、悪意のあるユーザーはハッシュが同じため検出されずにデータベース内のもとのデータを置き換えるデータを生成できます。これは考慮する価値がある攻撃ベクトルです。

## Git がファイルを保存する方法

Git は、SHA1 ハッシュを 2 通りの興味深い使い方をする、素晴らしい例です。ファイルが Git に保存されるときは、SHA1 ハッシュによって参照されます。これにより、Git がデータを素早く探し、ファイルを取り出せるようになります。

ただし、単にファイルの内容をハッシュに使っているわけではなく、UTF8 の文字列 `"blob "`、十進数で現したバイト単位のファイルサイズ、ナル文字 (JavaScript では `"\0"` と書ける) をこの順で前につけます。JavaScript の文字列は UTF16 なので、[Encoding API](/ja/docs/Web/API/Encoding_API) の [TextEncoder インターフェイス](/ja/docs/Web/API/TextEncoder) を用いて UTF8 の文字列をエンコードできます。

以下のコードは、SHA256 の例と同様に、ファイルからこれらのハッシュを求めるのに用いることができます。ファイルをアップロードするための HTML は同じですが、Git が行うのと同様のサイズ情報を前につける処理を追加しています。

```html
<h3>Git がファイルに SHA1 をどのように使っているかのデモ</h3>

<label
  >ハッシュ化するファイルを選択 (複数可)
  <input type="file" id="file" name="file" multiple
/></label>

<output style="display:block;font-family:monospace;"></output>
```

```js
const output = document.querySelector("output");
const file = document.getElementById("file");
file.addEventListener("change", hashTheseFiles);

async function fileHash(file) {
  const arrayBuffer = await file.arrayBuffer();

  // Git はナル終端の文字列 'blob 1234' (1234 はファイルサイズを表す)
  // をハッシュ化前に前置するので、これを再現する

  // まず、ファイルのバイト単位のサイズを求める
  const uint8View = new Uint8Array(arrayBuffer);
  const length = uint8View.length;

  // git は端末では文字列に UTF8 を用いるが、ウェブでは UTF16 を用いる
  // メッセージ中の文字のバイナリ表現が違うとハッシュも変わるので、エンコーダーを使う必要がある
  const encoder = new TextEncoder();
  // ナル終端とは、文字列がナル文字 (JavaScript では '\0') で終わるということ
  const view = encoder.encode(`blob ${length}\0`);

  // そして、2 個の ArrayBuffer を合体して 1 個の ArrayBuffer にする
  const newBlob = new Blob([view.buffer, arrayBuffer], {
    type: "text/plain",
  });
  const arrayBufferToHash = await newBlob.arrayBuffer();

  // 最後に、ハッシュ化する。今回は Git が用いる SHA1 を用いる
  // そして、表示用の文字列として返す
  return hashToString(await crypto.subtle.digest("SHA-1", arrayBufferToHash));
}

function hashToString(arrayBuffer) {
  const uint8View = new Uint8Array(arrayBuffer);
  return Array.from(uint8View)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// 前回と同様、各ファイルについて処理を行う
async function hashTheseFiles(e) {
  let outHTML = "";
  for (const file of this.files) {
    outHTML += `${file.name}    ${await fileHash(file)}`;
  }
  output.innerHTML = outHTML;
}
```

{{EmbedLiveSample("how-git-stores-files")}}

もとの ArrayBuffer に連結してハッシュ化する文字列を生成するためのヘッダーを生成するために [Encoding API](/ja/docs/Web/API/Encoding_API) を使っている方法に注目しましょう。

## Git がコミットハッシュを生成する方法

興味深いことに、Git は複数の情報に基づく似たやり方でコミットハッシュを生成します。ここには以前のコミットハッシュやコミットメッセージを含むことができ、これらも新しいハッシュを生成するもととなります。これは、いくつかの一意な識別子に基づくコミットを参照するのに用いることができます。

端末で用いるコマンド: `(printf "commit %s\0" $(git --no-replace-objects cat-file commit HEAD | wc -c); git cat-file commit HEAD) | sha1sum`

出典: [How is git commit sha1 formed](https://gist.github.com/masak/2415865)

本質的には、以下の UTF8 文字列です。(ナル文字は `\0` で表現されています)

```
commit [size in bytes as decimal of this info]\0tree [tree hash]
parent [parent commit hash]
author [author info] [timestamp]
committer [committer info] [timestamp]

commit message
```

これは素晴らしいことです。なぜなら、個別のフィールドで一意であることを保証できるものは無いですが、組み合わせると単一のコミットを指す一意なポインターになるからです。しかし、この文字列全体は長すぎて扱いにくいです。そこで、ハッシュ化することにより、複数のフィールドから短くて共有しやすい新しい一意な文字列を得ることができます。

これが、メッセージを全く変えずにコミットを amend してもハッシュが変わる理由です。コミットのタイムスタンプが変わり、1 文字変わっただけでも新しいハッシュを完全に変えるのには十分です。

ここで学ぶべきことは、データのキーを設定したいがどの単一の情報も十分一意にならないとき、複数の文字列を連結してハッシュ化するのが有用なキーを生成するための素晴らしい方法だということです。

これらの例が、この新しい強力な API に注目するきっかけになれば幸いです。暗号関係のものを自分で再現しようとしてはいけないということは覚えておいてください。道具があり、その中には [`crypto.digest()`](/ja/docs/Web/API/SubtleCrypto/digest) 関数などの日々の開発に有用な道具もあるということを覚えておけば十分です。
